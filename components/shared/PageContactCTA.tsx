import Link from "next/link";

interface Props {
  heading?: string;
  body?: string;
  /** 遷移先。/contact?type=xxx を渡すと問い合わせ種別が自動選択される。 */
  href?: string;
  /** ボタン文言。ページごとにCTAを変える。 */
  ctaLabel?: string;
  /** ボタン下に添える補足（免責・注意書きなど）。 */
  note?: string;
}

export default function PageContactCTA({
  heading = "Web集客に関するご相談",
  body = "MEO、SEO、AIO、ホームページ制作、SNS運用など、Web集客に関するご相談を承っています。現在の状況を確認したうえで、必要な施策をご提案します。",
  href = "/contact",
  ctaLabel = "お問い合わせ",
  note,
}: Props) {
  return (
    <section className="py-20 md:py-24" style={{ background: "#FFFFFF", borderTop: "1px solid #F0EDE6" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
            Contact
          </p>
          <h2 className="font-black text-[26px] mb-5 leading-tight" style={{ color: "#0F172A" }}>
            {heading}
          </h2>
          <p className="text-[15px] leading-[1.9] mb-8" style={{ color: "#374151" }}>
            {body}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
            style={{ border: "1px solid #0F172A", color: "#0F172A" }}
          >
            {ctaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          {note && (
            <p className="text-[12px] leading-[1.9] mt-6 max-w-xl" style={{ color: "#9CA3AF" }}>
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
