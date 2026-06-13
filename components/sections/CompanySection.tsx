import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const ROWS = [
  { label: "会社名", value: "株式会社サイプレス" },
  { label: "代表取締役", value: "織田 春樹" },
  { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
  {
    label: "事業内容",
    value:
      "Webマーケティング支援、MEO対策、SEO対策、AIO対策、ホームページ制作、SNS運用、AI活用支援",
  },
];

export default function CompanySection() {
  return (
    <section
      id="company"
      className="py-28"
      style={{ background: "#F7FAFF" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#3B82F6] uppercase block mb-4">
            Company
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <h2
              className="font-black text-[#0F172A] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              会社概要
            </h2>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-[#2563EB] text-sm font-medium hover:gap-3 transition-all"
            >
              詳しく見る
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <dl className="max-w-3xl bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
            {ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-0 ${
                  i < ROWS.length - 1 ? "border-b border-[#F1F5F9]" : ""
                }`}
              >
                <dt className="px-6 py-5 text-[#94A3B8] text-sm bg-[#FAFBFF] border-r border-[#F1F5F9]">
                  {row.label}
                </dt>
                <dd className="px-6 py-5 text-[#0F172A] text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </section>
  );
}
