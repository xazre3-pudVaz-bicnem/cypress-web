import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { isChatDbConfigured, listConversations, type ConversationFilter } from "@/lib/chat-db";
import {
  AiVerdictBadge,
  DbNotConfigured,
  PageHeader,
  ReviewVerdictBadge,
  formatDateTime,
} from "@/components/admin/ui";

const FILTERS: { value: ConversationFilter; label: string }[] = [
  { value: "needs_review", label: "確認待ち" },
  { value: "unreviewed", label: "未レビュー" },
  { value: "reviewed", label: "レビュー済み" },
  { value: "contact", label: "問い合わせ導線に進んだ" },
  { value: "all", label: "すべて" },
];

export default async function AdminConversationsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  await requireAdmin();
  const requested = (await searchParams).filter;
  const filter = FILTERS.find((f) => f.value === requested)?.value ?? "all";

  const header = (
    <PageHeader
      en="Human Review"
      title="会話レビュー"
      lead="AIの事前チェックを参考に、会話全文を読んで人が最終判定します。"
    />
  );
  if (!isChatDbConfigured()) {
    return (
      <>
        {header}
        <DbNotConfigured />
      </>
    );
  }

  const conversations = await listConversations(filter);

  return (
    <>
      {header}

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="絞り込み">
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/admin/conversations?filter=${f.value}`}
            aria-current={f.value === filter ? "true" : undefined}
            className={`rounded-full border px-4 py-1.5 text-[12px] font-medium ${
              f.value === filter
                ? "border-[#0d1b2a] bg-[#0d1b2a] text-white"
                : "border-[#E8E4DC] bg-white text-[#1a2332] hover:border-[#0d1b2a]"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {conversations.length === 0 ? (
        <p className="mt-4 rounded-2xl border border-[#E8E4DC] bg-white px-6 py-8 text-center text-[13px] text-[#6B7280]">
          該当する会話はありません。
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {conversations.map((c) => (
            <li key={c.id}>
              <Link
                href={`/admin/conversations/${c.id}`}
                className="block rounded-2xl border border-[#E8E4DC] bg-white px-5 py-4 transition-colors hover:border-[#0d1b2a]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <AiVerdictBadge verdict={c.ai_verdict} />
                  <ReviewVerdictBadge verdict={c.review_verdict} />
                  <span className="ml-auto text-[11px] text-[#6B7280] tabular-nums">
                    {formatDateTime(c.updated_at)}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-[#1a2332]">
                  {c.first_message ?? "（発言なし）"}
                </p>
                <p className="mt-2 text-[11px] text-[#6B7280]">
                  発言 {c.user_messages}件
                  {c.page_path && `｜開始ページ ${c.page_path}`}
                  {c.contact_clicked && "｜フォームへ進んだ"}
                  {c.tel_clicked && "｜電話をタップ"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {conversations.length === 100 && (
        <p className="mt-3 text-[12px] text-[#6B7280]">新しい順に100件まで表示しています。</p>
      )}
    </>
  );
}
