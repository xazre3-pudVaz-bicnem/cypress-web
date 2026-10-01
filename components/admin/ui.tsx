import type { AiVerdict, ReviewVerdict } from "@/lib/chat-db";
import { AI_VERDICT_LABELS, REVIEW_VERDICT_LABELS } from "@/lib/chat-db";

const JST_DATETIME = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDateTime(value: string | Date): string {
  return JST_DATETIME.format(new Date(value));
}

/** 分母が0のときは率を出さない（0%と区別する）。 */
export function formatRate(numerator: number, denominator: number): string {
  if (denominator === 0) return "—";
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
}

export function PageHeader({ en, title, lead }: { en: string; title: string; lead: string }) {
  return (
    <header className="rounded-2xl border border-[#E8E4DC] bg-white px-6 py-6">
      <p className="label-en text-[#6B7280]">{en}</p>
      <h1 className="mt-1 text-[24px]">{title}</h1>
      <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">{lead}</p>
    </header>
  );
}

export function DbNotConfigured() {
  return (
    <div className="mt-4 rounded-2xl border border-[#E8E4DC] bg-white px-6 py-6 text-[14px] leading-relaxed">
      <p className="font-medium">データベースが未接続です。</p>
      <p className="mt-1 text-[#6B7280]">
        環境変数 DATABASE_URL を設定して再デプロイすると、会話ログの記録が始まります（docs/chatbot-setup.md）。
      </p>
    </div>
  );
}

// 状態の色は「確認が必要」「良好」「中立」の3種類に限り、必ずラベルと一緒に出す。
const TONE = {
  warning: "border-[#F0D9A8] bg-[#FDF6E3] text-[#7A5200]",
  good: "border-[#BFE3CF] bg-[#EEF8F2] text-[#17603A]",
  neutral: "border-[#E8E4DC] bg-[#F9F8F5] text-[#6B7280]",
} as const;

function Badge({ tone, children }: { tone: keyof typeof TONE; children: React.ReactNode }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${TONE[tone]}`}>
      {children}
    </span>
  );
}

export function AiVerdictBadge({ verdict }: { verdict: AiVerdict | null }) {
  if (!verdict) return <Badge tone="neutral">AI未チェック</Badge>;
  const tone = verdict === "needs_review" ? "warning" : verdict === "ok" ? "good" : "neutral";
  return <Badge tone={tone}>AI：{AI_VERDICT_LABELS[verdict]}</Badge>;
}

export function ReviewVerdictBadge({ verdict }: { verdict: ReviewVerdict | null }) {
  if (!verdict) return <Badge tone="neutral">未レビュー</Badge>;
  const tone = verdict === "needs_improvement" ? "warning" : verdict === "good" ? "good" : "neutral";
  return <Badge tone={tone}>{REVIEW_VERDICT_LABELS[verdict]}</Badge>;
}
