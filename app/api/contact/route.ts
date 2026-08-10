import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  CONTACT_EMAIL,
  INQUIRY_TYPE_LABELS,
  TRAINING_TYPES,
  isInquiryType,
} from "@/lib/contact";

// Resend APIへの外部送信を伴うため、静的最適化やキャッシュを一切効かせない。
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** 送信先。未設定なら問い合わせ窓口の既定アドレスへ届ける。 */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
/**
 * 差出人。Resendで認証済みのドメインのアドレスである必要がある。
 * 未認証のドメインを指定するとResend側で403になるため、必ず環境変数で上書きすること。
 */
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "株式会社サイプレス <onboarding@resend.dev>";

const MAX = { name: 100, company: 120, email: 254, message: 5000 };

type Payload = {
  name: string;
  company: string;
  email: string;
  type: string;
  message: string;
  shareConsent: boolean;
};

// ─── Validation ──────────────────────────────────────────────────────────────

/**
 * ヘッダーインジェクション対策。件名やReply-Toに入る値から改行を除去する。
 */
function sanitizeHeaderValue(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function parse(body: unknown): { data: Payload } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "リクエストの形式が正しくありません。" };
  }
  const raw = body as Record<string, unknown>;

  // ハニーポット。人間には見えない項目が埋まっていればbotとみなす。
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return { error: "spam" };
  }

  const str = (key: string) => (typeof raw[key] === "string" ? (raw[key] as string).trim() : "");

  const name = str("name");
  const company = str("company");
  const email = str("email");
  const type = str("type");
  const message = str("message");

  if (!name) return { error: "お名前を入力してください。" };
  if (name.length > MAX.name) return { error: "お名前が長すぎます。" };
  if (company.length > MAX.company) return { error: "会社名が長すぎます。" };
  if (!email) return { error: "メールアドレスを入力してください。" };
  if (email.length > MAX.email || !isValidEmail(email)) {
    return { error: "メールアドレスの形式が正しくありません。" };
  }
  if (!isInquiryType(type)) return { error: "お問い合わせ種別を選択してください。" };
  if (!message) return { error: "お問い合わせ内容を入力してください。" };
  if (message.length > MAX.message) {
    return { error: `お問い合わせ内容は${MAX.message}文字以内で入力してください。` };
  }

  // 研修以外の種別で同意フラグが立っていても、共有対象ではないため常にfalseに倒す。
  const shareConsent = TRAINING_TYPES.has(type) && raw.shareConsent === true;

  return { data: { name, company, email, type, message, shareConsent } };
}

// ─── Rate limit ──────────────────────────────────────────────────────────────

/**
 * 同一IPからの連投を抑える簡易レート制限。
 * インスタンスごとのメモリ上の制限であり、厳密な保証はしない（ハニーポットとの多層防御）。
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
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

// ─── Mail bodies ─────────────────────────────────────────────────────────────

function buildNotification(data: Payload) {
  const typeLabel = INQUIRY_TYPE_LABELS[data.type] ?? data.type;
  const rows: [string, string][] = [
    ["お名前", data.name],
    ["会社名", data.company || "（未入力）"],
    ["メールアドレス", data.email],
    ["お問い合わせ種別", typeLabel],
  ];
  if (TRAINING_TYPES.has(data.type)) {
    rows.push([
      "提携研修会社への情報共有",
      data.shareConsent ? "同意あり（共有可）" : "同意なし（共有不可）",
    ]);
  }

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "【お問い合わせ内容】",
    data.message,
  ].join("\n");

  const html = `
<div style="font-family:'Helvetica Neue',Arial,'Hiragino Sans','Noto Sans JP',sans-serif;color:#0F172A;line-height:1.9;">
  <p style="font-size:13px;color:#6B7280;margin:0 0 16px;">サイトのお問い合わせフォームから新しいご相談が届きました。</p>
  <table style="border-collapse:collapse;width:100%;max-width:640px;font-size:14px;">
    ${rows
      .map(
        ([label, value]) => `<tr>
      <th style="text-align:left;padding:10px 16px;background:#F9F8F5;border:1px solid #E8E4DC;width:180px;color:#6B7280;font-weight:500;">${escapeHtml(label)}</th>
      <td style="padding:10px 16px;border:1px solid #E8E4DC;">${escapeHtml(value)}</td>
    </tr>`
      )
      .join("")}
  </table>
  <p style="font-size:13px;color:#6B7280;margin:24px 0 8px;">お問い合わせ内容</p>
  <div style="padding:16px;border:1px solid #E8E4DC;background:#FFFFFF;font-size:14px;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
  <p style="font-size:12px;color:#9CA3AF;margin-top:24px;">このメールにそのまま返信すると、お客様（${escapeHtml(data.email)}）宛に届きます。</p>
</div>`.trim();

  return {
    subject: `【お問い合わせ】${sanitizeHeaderValue(typeLabel)} / ${sanitizeHeaderValue(data.company || data.name)}`,
    text,
    html,
  };
}

function buildAutoReply(data: Payload) {
  const typeLabel = INQUIRY_TYPE_LABELS[data.type] ?? data.type;
  const text = `${data.name} 様

このたびは株式会社サイプレスへお問い合わせいただき、誠にありがとうございます。
以下の内容で受け付けいたしました。担当者より2営業日以内にご連絡いたします。

お問い合わせ種別: ${typeLabel}

【お問い合わせ内容】
${data.message}

――――――――――――――――――――
株式会社サイプレス
〒124-0816 東京都葛飾区白鳥4-6-1-623
Mail: ${CONTACT_EMAIL}
https://www.cypress-all.co.jp
――――――――――――――――――――
※本メールは自動送信です。ご返信いただいた場合も担当者が確認いたします。`;

  const html = `
<div style="font-family:'Helvetica Neue',Arial,'Hiragino Sans','Noto Sans JP',sans-serif;color:#0F172A;line-height:1.9;font-size:14px;">
  <p style="margin:0 0 16px;">${escapeHtml(data.name)} 様</p>
  <p style="margin:0 0 16px;">このたびは株式会社サイプレスへお問い合わせいただき、誠にありがとうございます。<br>以下の内容で受け付けいたしました。担当者より<strong>2営業日以内</strong>にご連絡いたします。</p>
  <p style="font-size:13px;color:#6B7280;margin:24px 0 8px;">お問い合わせ種別</p>
  <p style="margin:0 0 16px;">${escapeHtml(typeLabel)}</p>
  <p style="font-size:13px;color:#6B7280;margin:24px 0 8px;">お問い合わせ内容</p>
  <div style="padding:16px;border:1px solid #E8E4DC;background:#F9F8F5;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
  <div style="margin-top:32px;padding-top:20px;border-top:1px solid #E8E4DC;font-size:13px;color:#6B7280;">
    <p style="margin:0 0 4px;color:#0F172A;font-weight:600;">株式会社サイプレス</p>
    <p style="margin:0;">〒124-0816 東京都葛飾区白鳥4-6-1-623</p>
    <p style="margin:0;">Mail: <a href="mailto:${CONTACT_EMAIL}" style="color:#0F172A;">${CONTACT_EMAIL}</a></p>
    <p style="margin:0;"><a href="https://www.cypress-all.co.jp" style="color:#0F172A;">https://www.cypress-all.co.jp</a></p>
  </div>
  <p style="font-size:12px;color:#9CA3AF;margin-top:20px;">※本メールは自動送信です。ご返信いただいた場合も担当者が確認いたします。</p>
</div>`.trim();

  return { subject: "【株式会社サイプレス】お問い合わせを受け付けました", text, html };
}

// ─── Resend ──────────────────────────────────────────────────────────────────

type SendArgs = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

async function sendMail(apiKey: string, { to, subject, text, html, replyTo }: SendArgs) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject,
      text,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      {
        error: `送信設定が未完了のため受け付けられませんでした。お手数ですが ${CONTACT_EMAIL} まで直接ご連絡ください。`,
      },
      { status: 503 }
    );
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      {
        error: `送信回数の上限に達しました。しばらく時間をおいてお試しいただくか、${CONTACT_EMAIL} まで直接ご連絡ください。`,
      },
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
    // ハニーポットに掛かったbotには成功を返し、再送や手口の調整を誘発させない。
    if (parsed.error === "spam") return NextResponse.json({ ok: true });
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  const data = parsed.data;

  try {
    const notification = buildNotification(data);
    await sendMail(apiKey, {
      to: TO_EMAIL,
      ...notification,
      replyTo: sanitizeHeaderValue(data.email),
    });
  } catch (error) {
    console.error("[contact] failed to send notification", error);
    return NextResponse.json(
      {
        error: `送信に失敗しました。お手数ですが ${CONTACT_EMAIL} まで直接ご連絡ください。`,
      },
      { status: 502 }
    );
  }

  // 自動返信は補助的な通知。失敗しても問い合わせ自体は成立しているため、成功として返す。
  try {
    const autoReply = buildAutoReply(data);
    await sendMail(apiKey, {
      to: sanitizeHeaderValue(data.email),
      ...autoReply,
      replyTo: TO_EMAIL,
    });
  } catch (error) {
    console.error("[contact] failed to send auto-reply", error);
  }

  return NextResponse.json({ ok: true });
}
