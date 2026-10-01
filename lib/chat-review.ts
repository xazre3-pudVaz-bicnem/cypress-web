import Anthropic from "@anthropic-ai/sdk";
import type { ChatMessage } from "@/lib/chatbot";
import type { AiVerdict } from "@/lib/chat-db";

/**
 * 会話のAI事前チェック。人が全件を読まなくて済むよう、確認が必要な会話だけを拾い上げる。
 * 最終判定は管理画面で人が行う。
 */

const MODEL = "claude-haiku-4-5";

const SYSTEM_PROMPT = `あなたは、株式会社サイプレス（Webマーケティング会社）のサイトに設置されたAI相談チャットの品質を点検する担当です。訪問者とチャットボットの会話を読み、人が確認すべき会話かどうかを判定します。

目的は、チャットボットの回答が原因で訪問者が離脱したり、誤った情報を受け取ったりした会話を見つけ、プロンプトの改善につなげることです。人が読む件数を減らしたいので、問題のない会話まで拾わないでください。

# 判定
まず訪問者の発言がWeb集客の相談かどうかを見て、無関係なら out_of_scope とします。相談であれば、回答の質で needs_review か ok かを決めます。
- needs_review：チャットボットの回答に問題がある会話。たとえば、質問に直接答えずリンクだけを示した、訪問者が同じ質問を繰り返している（伝わっていない）、具体的な料金や成果の保証など会社が約束していないことを述べた、訪問者が不満や混乱を示した、相談につながりそうな場面で次の行動を案内しなかった、など。
- out_of_scope：訪問者の発言がWeb集客やサイプレスへの相談と無関係な会話（天気などの雑談、いたずら、営業、テスト入力など）。チャットボットの断り方が適切でも ok ではなく out_of_scope です。相談ではない会話を、回答の質の評価と分けるための分類です。
- ok：上のどちらでもない会話。

# 理由
reason には、判定の根拠を日本語1〜2文で書きます。needs_review の場合は、どの発言の何が問題かが分かるように書いてください。`;

const SCHEMA = {
  type: "object",
  properties: {
    verdict: { type: "string", enum: ["ok", "needs_review", "out_of_scope"] },
    reason: { type: "string" },
  },
  required: ["verdict", "reason"],
  additionalProperties: false,
} as const;

const VERDICTS: ReadonlySet<string> = new Set(["ok", "needs_review", "out_of_scope"]);

function transcript(messages: ChatMessage[]): string {
  return messages
    .map((m, i) => `[${i + 1}] ${m.role === "user" ? "訪問者" : "チャットボット"}：${m.content}`)
    .join("\n\n");
}

export async function reviewConversation(
  messages: ChatMessage[]
): Promise<{ verdict: AiVerdict; reason: string }> {
  const client = new Anthropic();
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 1000,
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    output_config: { format: { type: "json_schema", schema: SCHEMA } },
    messages: [
      {
        role: "user",
        content: `次の会話を判定してください。\n\n<conversation>\n${transcript(messages)}\n</conversation>`,
      },
    ],
  });

  const text = response.content.find((b) => b.type === "text")?.text ?? "";
  const parsed = JSON.parse(text) as { verdict?: unknown; reason?: unknown };
  if (typeof parsed.verdict !== "string" || !VERDICTS.has(parsed.verdict)) {
    throw new Error("AIチェックの応答が想定した形式ではありません");
  }
  return {
    verdict: parsed.verdict as AiVerdict,
    reason: typeof parsed.reason === "string" ? parsed.reason : "",
  };
}
