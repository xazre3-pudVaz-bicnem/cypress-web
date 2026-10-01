import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  CHAT_MAX_ASSISTANT_CHARS,
  CHAT_MAX_HISTORY,
  CHAT_MAX_USER_CHARS,
  CHAT_SYSTEM_PROMPT,
  type ChatMessage,
} from "@/lib/chatbot";

// Claude APIへのストリーミング中継のため、静的最適化やキャッシュを一切効かせない。
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-opus-5-5";
/** 安全フィルタで回答が止まった場合にAPI側で引き継ぐモデル。 */
const FALLBACK_MODEL = "claude-opus-4-8";
/**
 * 誰でも叩ける公開エンドポイントなので、1回の出力に上限を設けて費用を抑える。
 * 思考トークンもこの枠に含まれるため、本文の目安（200文字）より大きく取っている。
 */
const MAX_TOKENS = 4000;

const UNAVAILABLE_MESSAGE =
  "ただいまチャットをご利用いただけません。お手数ですが、お問い合わせフォームからご連絡ください。";

// ─── Validation ──────────────────────────────────────────────────────────────

function parse(body: unknown): { messages: ChatMessage[] } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "リクエストの形式が正しくありません。" };
  }
  const raw = (body as Record<string, unknown>).messages;
  if (!Array.isArray(raw) || raw.length === 0) {
    return { error: "メッセージがありません。" };
  }

  const messages: ChatMessage[] = [];
  for (const item of raw) {
    if (typeof item !== "object" || item === null) {
      return { error: "リクエストの形式が正しくありません。" };
    }
    const { role, content } = item as Record<string, unknown>;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") {
      return { error: "リクエストの形式が正しくありません。" };
    }
    const text = content.trim();
    if (!text) continue;
    const limit = role === "user" ? CHAT_MAX_USER_CHARS : CHAT_MAX_ASSISTANT_CHARS;
    if (text.length > limit) {
      return { error: `メッセージは${CHAT_MAX_USER_CHARS}文字以内で入力してください。` };
    }
    messages.push({ role, content: text });
  }

  // 古い履歴を落としたうえで、APIの制約（先頭はuser）に合わせる。
  const recent = messages.slice(-CHAT_MAX_HISTORY);
  while (recent.length > 0 && recent[0].role !== "user") recent.shift();
  if (recent.length === 0 || recent[recent.length - 1].role !== "user") {
    return { error: "メッセージがありません。" };
  }
  return { messages: recent };
}

// ─── Rate limit ──────────────────────────────────────────────────────────────

/**
 * 同一IPからの連投を抑える簡易レート制限。
 * インスタンスごとのメモリ上の制限であり、厳密な保証はしない。
 * 費用の上限はAnthropic Console側の利用上限（Spend limit）でも必ず設定すること。
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Mapが無制限に膨らまないよう、古いエントリを掃除する。
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function logApiError(error: unknown) {
  if (error instanceof Anthropic.APIUserAbortError) return;
  if (error instanceof Anthropic.AuthenticationError) {
    console.error("[chat] ANTHROPIC_API_KEY が無効です");
  } else if (error instanceof Anthropic.RateLimitError) {
    console.error("[chat] Claude APIのレート制限に達しました");
  } else if (error instanceof Anthropic.APIError) {
    console.error(`[chat] Claude APIエラー ${error.status}:`, error.message);
  } else {
    console.error("[chat] 予期しないエラー:", error);
  }
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  if (process.env.CHATBOT_ENABLED !== "true" || !process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: UNAVAILABLE_MESSAGE }, { status: 503 });
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: "短時間に多くのメッセージが送信されました。少し時間をおいてお試しください。" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }
  const parsed = parse(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const client = new Anthropic();
  const stream = client.beta.messages.stream(
    {
      model: MODEL,
      max_tokens: MAX_TOKENS,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-06-01"],
      fallbacks: [{ model: FALLBACK_MODEL }],
      system: [
        { type: "text", text: CHAT_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
      ],
      messages: parsed.messages,
    },
    // 訪問者がチャットを閉じた・ページを離れた時点で生成を止め、無駄な課金を避ける。
    { signal: request.signal }
  );

  const encoder = new TextEncoder();
  const responseBody = new ReadableStream<Uint8Array>({
    async start(controller) {
      let sentText = false;
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            sentText = true;
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const message = await stream.finalMessage();
        if (message.stop_reason === "refusal" && !sentText) {
          controller.enqueue(
            encoder.encode(
              "申し訳ありません。その内容にはお答えできません。Web集客についてのご相談でしたら、お気軽にお聞かせください。"
            )
          );
        }
        controller.close();
      } catch (error) {
        logApiError(error);
        // 途中まで返していても、ここで接続を異常終了させてウィジェット側にエラーを表示させる。
        controller.error(error);
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(responseBody, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
