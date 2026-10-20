import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin-auth";
import { saveReviewAction } from "@/app/admin/actions";
import {
  getConversation,
  isChatDbConfigured,
  isUuid,
  REVIEW_VERDICT_LABELS,
  type ReviewVerdict,
} from "@/lib/chat-db";
import { AiVerdictBadge, ReviewVerdictBadge, formatDateTime } from "@/components/admin/ui";

const VERDICTS = Object.keys(REVIEW_VERDICT_LABELS) as ReviewVerdict[];

export default async function AdminConversationPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!isChatDbConfigured() || !isUuid(id)) notFound();
  const data = await getConversation(id);
  if (!data) notFound();
  const { conversation: c, messages } = data;

  return (
    <>
      <Link href="/admin/conversations" className="text-[12px] text-[#6B7280] hover:text-[#0d1b2a]">
        ← 会話レビューに戻る
      </Link>

      <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="rounded-2xl border border-[#E8E4DC] bg-white px-5 py-5" aria-labelledby="conversation-heading">
          <p className="label-en text-[#6B7280]">Conversation</p>
          <h1 id="conversation-heading" className="mt-1 text-[18px]">
            {formatDateTime(c.created_at)} の会話
          </h1>
          <p className="mt-1 text-[11px] text-[#6B7280]">
            発言 {c.user_messages}件
            {c.page_path && `｜開始ページ ${c.page_path}`}
            {c.link_clicked && "｜リンクをクリック"}
            {c.contact_clicked && "｜フォームへ進んだ"}
            {c.tel_clicked && "｜電話をタップ"}
          </p>

          {c.ai_verdict && (
            <div className="mt-4 rounded-xl border-l-4 border-[#D1C9BE] bg-[#F9F8F5] px-4 py-3">
              <AiVerdictBadge verdict={c.ai_verdict} />
              {c.ai_reason && <p className="mt-2 text-[13px] leading-relaxed text-[#1a2332]">{c.ai_reason}</p>}
            </div>
          )}

          <ol className="mt-5 space-y-3">
            {messages.map((m) => (
              <li
                key={m.id}
                className={`max-w-[88%] rounded-2xl px-4 py-3 ${
                  m.role === "user" ? "ml-auto bg-[#0d1b2a] text-white" : "border border-[#E8E4DC] bg-[#F9F8F5]"
                }`}
              >
                <p className={`text-[10px] ${m.role === "user" ? "text-white/60" : "text-[#6B7280]"}`}>
                  {m.role === "user" ? "訪問者" : "チャットボット"}・{formatDateTime(m.created_at)}
                </p>
                <p
                  className={`mt-1 whitespace-pre-wrap break-words text-[14px] leading-[1.8] ${
                    m.role === "user" ? "text-white" : "text-[#1a2332]"
                  }`}
                >
                  {m.content}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="h-fit rounded-2xl border border-[#E8E4DC] bg-white px-5 py-5 lg:sticky lg:top-8"
          aria-labelledby="review-heading"
        >
          <p className="label-en text-[#6B7280]">Structured Review</p>
          <h2 id="review-heading" className="mt-1 text-[18px]">
            人の総合判定
          </h2>
          <div className="mt-2">
            <ReviewVerdictBadge verdict={c.review_verdict} />
          </div>

          <form action={saveReviewAction} className="mt-4 space-y-4">
            <input type="hidden" name="id" value={c.id} />
            <fieldset>
              <legend className="text-[12px] font-medium text-[#1a2332]">判定</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {VERDICTS.map((v) => (
                  <label
                    key={v}
                    className="flex cursor-pointer items-center justify-center rounded-lg border border-[#E8E4DC] px-2 py-2.5 text-center text-[12px] font-medium has-[:checked]:border-[#0d1b2a] has-[:checked]:bg-[#0d1b2a] has-[:checked]:text-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#0d1b2a]"
                  >
                    <input
                      type="radio"
                      name="verdict"
                      value={v}
                      required
                      defaultChecked={c.review_verdict === v}
                      className="sr-only"
                    />
                    {REVIEW_VERDICT_LABELS[v]}
                  </label>
                ))}
              </div>
            </fieldset>
            <div>
              <label htmlFor="note" className="text-[12px] font-medium text-[#1a2332]">
                メモ（どう直すべきか）
              </label>
              <textarea
                id="note"
                name="note"
                rows={5}
                maxLength={2000}
                defaultValue={c.review_note}
                placeholder="例：料金を聞かれたら、先に見積りの出し方を一言で答える。"
                className="mt-1.5 w-full rounded-lg border border-[#E8E4DC] px-3 py-2 text-[14px] leading-relaxed focus:border-[#0d1b2a] focus:outline-none"
              />
            </div>
            <button type="submit" className="h-11 w-full rounded-lg bg-[#0d1b2a] text-[13px] font-medium text-white">
              評価を保存（次の会話へ進む）
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
