import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_HOURS, CONTACT_MAILTO } from "@/lib/contact";

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

/** 下層ページ共通のお問い合わせ帯（トップの Get In Touch と同じ青い帯） */
export default function PageContactCTA({
  heading = "Web集客に関するご相談",
  body = "MEO、SEO、AIO、ホームページ制作、SNS運用など、Web集客に関するご相談を承っています。現在の状況を確認したうえで、必要な施策をご提案します。",
  href = "/contact",
  ctaLabel = "お問い合わせ",
  note,
}: Props) {
  return (
    <section
      className="relative overflow-hidden px-[var(--v2-gutter)] py-20 text-white md:py-28"
      style={{ background: "var(--v2-blue)" }}
      data-tone="dark"
    >
      <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div>
          <p className="v2-display text-[clamp(52px,8vw,120px)] leading-[0.92]" aria-hidden>
            Get In Touch
          </p>
          <h2 className="mt-6 text-[20px] font-bold tracking-[0.03em] text-white md:text-[26px]">{heading}</h2>
        </div>
        <div>
          <p className="text-[14px] font-semibold leading-[2]">{body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href={href}
              className="group inline-flex items-center gap-3 rounded-full bg-white py-3 pl-7 pr-3 text-[15px] font-bold text-[var(--v2-blue)] transition-transform duration-500 hover:scale-[1.03]"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              {ctaLabel}
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-full bg-[var(--v2-blue)] text-white transition-transform duration-500 group-hover:translate-x-1">
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1.5 5h7M5.5 2l3 3-3 3" />
                </svg>
              </span>
            </Link>
            {/* フォームを使いたくない層の離脱を防ぐため、直接のメール窓口も併記する。 */}
            <div>
              <p className="text-[12px] font-bold">メールでのご相談</p>
              <a href={CONTACT_MAILTO} className="text-[15px] font-bold underline underline-offset-4 transition-opacity hover:opacity-70">
                {CONTACT_EMAIL}
              </a>
              <p className="mt-1 text-[12px] font-semibold">受付時間 {CONTACT_HOURS}</p>
            </div>
          </div>
          {note && <p className="mt-6 max-w-xl text-[12px] font-medium leading-[1.9]">{note}</p>}
        </div>
      </div>
    </section>
  );
}
