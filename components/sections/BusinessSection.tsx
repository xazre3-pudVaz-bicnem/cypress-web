import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "MEO対策",
    desc: "Googleマップ上位表示で地域集客を強化",
  },
  {
    num: "02",
    title: "SEO対策",
    desc: "検索流入を増やす持続的なSEO施策",
  },
  {
    num: "03",
    title: "AIO対策",
    desc: "AI検索エンジンへの最適化と引用獲得",
  },
  {
    num: "04",
    title: "ホームページ制作",
    desc: "成果にこだわったWebサイト制作",
  },
  {
    num: "05",
    title: "SNS運用",
    desc: "認知拡大と顧客獲得のためのSNS戦略",
  },
  {
    num: "06",
    title: "AI活用支援",
    desc: "AI導入による業務効率化・DX推進",
  },
];

export default function BusinessSection() {
  return (
    <section
      id="business"
      className="py-28"
      style={{ background: "#F7FAFF" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#3B82F6] uppercase block mb-4">
            Business
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-14">
            <h2
              className="font-black text-[#0F172A] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              事業内容
            </h2>
            <Link
              href="/business"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.06}>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-7 h-full">
                <span className="text-[11px] font-mono text-[#94A3B8] block mb-4">
                  {s.num}
                </span>
                <h3 className="font-bold text-[#0F172A] text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
