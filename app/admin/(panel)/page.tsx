import Link from "next/link";
import { requireAdmin } from "@/lib/admin-auth";
import { getDaily, getSummary, isChatDbConfigured, type DailyPoint } from "@/lib/chat-db";
import AiCheckButton from "@/components/admin/AiCheckButton";
import { DbNotConfigured, PageHeader, formatRate } from "@/components/admin/ui";

const PERIODS = [7, 30, 90] as const;

function Tile({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-[#E8E4DC] bg-white px-5 py-4">
      <p className="text-[12px] text-[#6B7280]">{label}</p>
      <p className="mt-1 text-[26px] font-medium leading-tight text-[#0d1b2a] tabular-nums">{value}</p>
      {note && <p className="mt-1 text-[11px] text-[#6B7280] tabular-nums">{note}</p>}
    </div>
  );
}

function Kpi({
  index,
  label,
  stage,
  numerator,
  denominator,
  basis,
}: {
  index: number;
  label: string;
  stage: string;
  numerator: number;
  denominator: number;
  basis: string;
}) {
  return (
    <li className="rounded-2xl border border-[#E8E4DC] bg-white px-5 py-4">
      <p className="text-[11px] text-[#6B7280]">
        {index}｜{stage}
      </p>
      <p className="mt-0.5 text-[13px] font-medium text-[#1a2332]">{label}</p>
      <p className="mt-2 text-[26px] font-medium leading-tight text-[#0d1b2a] tabular-nums">
        {formatRate(numerator, denominator)}
      </p>
      <p className="mt-1 text-[11px] text-[#6B7280] tabular-nums">
        {numerator.toLocaleString()} / {denominator.toLocaleString()}（{basis}）
      </p>
    </li>
  );
}

/** 日別の会話数。系列は1つなので凡例は置かず、色も1色にする。 */
function DailyChart({ data }: { data: DailyPoint[] }) {
  const max = Math.max(1, ...data.map((d) => d.conversations));
  const labelEvery = Math.ceil(data.length / 8);
  const short = (day: string) => `${Number(day.slice(5, 7))}/${Number(day.slice(8, 10))}`;

  return (
    <figure>
      <div className="flex items-start gap-3">
        <div className="flex h-40 flex-col justify-between text-right text-[10px] text-[#6B7280] tabular-nums">
          <span>{max}</span>
          <span>0</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex h-40 items-end gap-[2px] border-b border-[#E8E4DC]">
            {data.map((d) => (
              <div
                key={d.day}
                title={`${short(d.day)}：${d.conversations}件`}
                className="group relative flex h-full flex-1 items-end"
              >
                <div
                  className="w-full rounded-t-[4px] bg-[#0d1b2a] transition-opacity group-hover:opacity-70"
                  style={{ height: `${(d.conversations / max) * 100}%`, minHeight: d.conversations > 0 ? 2 : 0 }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex gap-[2px] text-[10px] text-[#6B7280] tabular-nums">
            {data.map((d, i) => (
              <span key={d.day} className="flex-1 overflow-visible whitespace-nowrap text-center">
                {i % labelEvery === 0 ? short(d.day) : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
      <details className="mt-4 text-[12px] text-[#6B7280]">
        <summary className="cursor-pointer">表で見る</summary>
        <table className="mt-2 w-full max-w-xs text-left tabular-nums">
          <thead>
            <tr className="border-b border-[#E8E4DC]">
              <th className="py-1 font-medium">日付</th>
              <th className="py-1 text-right font-medium">会話数</th>
            </tr>
          </thead>
          <tbody>
            {[...data].reverse().map((d) => (
              <tr key={d.day} className="border-b border-[#F0EDE8]">
                <td className="py-1">{d.day}</td>
                <td className="py-1 text-right">{d.conversations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

export default async function AdminSummaryPage({
  searchParams,
}: {
  searchParams: Promise<{ days?: string }>;
}) {
  await requireAdmin();
  const requested = Number((await searchParams).days);
  const days = PERIODS.find((p) => p === requested) ?? 30;

  const header = (
    <PageHeader
      en="Quality Improvement Overview"
      title="品質改善サマリー"
      lead="チャットが問い合わせにつながっているかを数値で確認し、改善が必要な会話を見つけます。"
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

  const [s, daily] = await Promise.all([getSummary(days), getDaily(days)]);

  return (
    <>
      {header}

      <div className="mt-4 flex items-center gap-2" role="group" aria-label="集計期間">
        {PERIODS.map((p) => (
          <Link
            key={p}
            href={`/admin?days=${p}`}
            aria-current={p === days ? "true" : undefined}
            className={`rounded-full border px-4 py-1.5 text-[12px] font-medium ${
              p === days
                ? "border-[#0d1b2a] bg-[#0d1b2a] text-white"
                : "border-[#E8E4DC] bg-white text-[#1a2332] hover:border-[#0d1b2a]"
            }`}
          >
            直近{p}日
          </Link>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Tile label="チャットを開いた回数" value={s.opens.toLocaleString()} />
        <Tile label="会話数" value={s.conversations.toLocaleString()} />
        <Tile label="訪問者の発言数" value={s.userMessages.toLocaleString()} />
        <Tile
          label="問い合わせ導線に進んだ会話"
          value={s.contactClicked.toLocaleString()}
          note="フォームへのリンクをクリック"
        />
      </div>

      <section className="mt-6" aria-labelledby="kpi-heading">
        <h2 id="kpi-heading" className="text-[16px]">
          5つのKPI
        </h2>
        <p className="mt-1 text-[12px] text-[#6B7280]">
          上から順に、数値が低い段階が改善の対象です。会話数が少ないうちは率が大きく振れます。
        </p>
        <ol className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <Kpi index={1} stage="接点・起動導線" label="やりとり発生率" numerator={s.conversations} denominator={s.opens} basis="会話数 / 開いた回数" />
          <Kpi index={2} stage="回答〜提案" label="リンク表示率" numerator={s.linkShown} denominator={s.conversations} basis="表示した会話 / 会話数" />
          <Kpi index={3} stage="クロージング" label="リンククリック率" numerator={s.linkClicked} denominator={s.linkShown} basis="クリック / 表示した会話" />
          <Kpi index={4} stage="回答〜提案" label="電話番号表示率" numerator={s.telShown} denominator={s.conversations} basis="表示した会話 / 会話数" />
          <Kpi index={5} stage="クロージング" label="電話番号タップ率" numerator={s.telClicked} denominator={s.telShown} basis="タップ / 表示した会話" />
        </ol>
      </section>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        <section className="rounded-2xl border border-[#E8E4DC] bg-white px-6 py-5">
          <p className="label-en text-[#6B7280]">Loop 1</p>
          <h2 className="mt-1 text-[16px]">AIが会話を点検</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
            未チェックの会話をAIが読み、回答に問題がありそうな会話だけを拾い上げます（1回10件まで）。
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#F9F8F5] px-4 py-3">
              <dt className="text-[11px] text-[#6B7280]">未チェック</dt>
              <dd className="text-[22px] font-medium text-[#0d1b2a] tabular-nums">{s.aiUnchecked}</dd>
            </div>
            <div className="rounded-xl bg-[#F9F8F5] px-4 py-3">
              <dt className="text-[11px] text-[#6B7280]">人の確認を推奨</dt>
              <dd className="text-[22px] font-medium text-[#0d1b2a] tabular-nums">{s.aiNeedsReview}</dd>
            </div>
          </dl>
          <div className="mt-4">
            <AiCheckButton disabled={s.aiUnchecked === 0} />
          </div>
        </section>

        <section className="rounded-2xl border border-[#E8E4DC] bg-white px-6 py-5">
          <p className="label-en text-[#6B7280]">Loop 2</p>
          <h2 className="mt-1 text-[16px]">人が確認して判定</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
            AIが拾った会話の全文を読み、良い会話か、改善が必要かを判定してメモを残します。
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#F9F8F5] px-4 py-3">
              <dt className="text-[11px] text-[#6B7280]">確認待ち</dt>
              <dd className="text-[22px] font-medium text-[#0d1b2a] tabular-nums">{s.reviewPending}</dd>
            </div>
            <div className="rounded-xl bg-[#F9F8F5] px-4 py-3">
              <dt className="text-[11px] text-[#6B7280]">レビュー済み</dt>
              <dd className="text-[22px] font-medium text-[#0d1b2a] tabular-nums">{s.reviewed}</dd>
            </div>
          </dl>
          <div className="mt-4">
            <Link
              href="/admin/conversations?filter=needs_review"
              className="inline-flex h-10 items-center rounded-lg bg-[#0d1b2a] px-4 text-[13px] font-medium text-white"
            >
              確認待ちの会話を開く
            </Link>
          </div>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-[#E8E4DC] bg-white px-6 py-5">
        <h2 className="text-[16px]">日別の会話数（直近{days}日）</h2>
        <div className="mt-4">
          <DailyChart data={daily} />
        </div>
      </section>
    </>
  );
}
