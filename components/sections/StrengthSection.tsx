import AnimatedSection from "@/components/ui/AnimatedSection";

const STRENGTHS = [
  {
    num: "01",
    title: "AI活用",
    desc: "最新AIツールを戦略立案・分析・コンテンツ制作に活用。競合に先んじた施策を実現します。",
  },
  {
    num: "02",
    title: "集客設計",
    desc: "MEO・SEO・AIOを組み合わせた多層的な集客設計で、持続的な流入を構築します。",
  },
  {
    num: "03",
    title: "制作から運用まで一貫対応",
    desc: "サイト制作から集客施策・改善まで一社で完結。窓口が一つで管理がシンプルです。",
  },
  {
    num: "04",
    title: "地域ビジネスへの深い理解",
    desc: "店舗・専門家・建設業など地域密着型ビジネスの特性を熟知した支援を行います。",
  },
  {
    num: "05",
    title: "スピードと柔軟性",
    desc: "最短2週間でのサイト公開。市場の変化や急な要望にも迅速に対応します。",
  },
];

export default function StrengthSection() {
  return (
    <section id="strength" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#3B82F6] uppercase block mb-4">
            Strength
          </span>
          <h2
            className="font-black text-[#0F172A] leading-[1.1] tracking-[-0.02em] mb-14"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            サイプレスの強み
          </h2>
        </AnimatedSection>

        <div>
          {STRENGTHS.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.07}>
              <div className="border-t border-[#F1F5F9] py-8 grid grid-cols-1 sm:grid-cols-[72px_220px_1fr] gap-3 sm:gap-8 items-start">
                <span className="text-[11px] font-mono text-[#CBD5E1]">
                  {s.num}
                </span>
                <h3 className="font-bold text-[#0F172A] text-base">{s.title}</h3>
                <p className="text-[#475569] text-sm leading-[1.9]">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-[#F1F5F9]" />
        </div>
      </div>
    </section>
  );
}
