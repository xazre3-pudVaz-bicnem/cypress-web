import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-[11px] font-mono tracking-[0.22em] text-[#3B82F6] uppercase block mb-4">
            About
          </span>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-2">
          <AnimatedSection delay={0.05}>
            <h2
              className="font-black text-[#0F172A] leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              Webマーケティングと
              <br />
              AIで、企業の成長を
              <br />
              支援する。
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <div className="space-y-5 text-[#475569] leading-[1.9]" style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
              <p>
                株式会社サイプレスは、MEO・SEO・AIO・ホームページ制作を軸に、中小企業のWeb集客を総合的に支援するマーケティングカンパニーです。
              </p>
              <p>
                地域ビジネスが抱える「Webで見つけてもらえない」「問い合わせが来ない」という課題に対し、AIを活用した最新のアプローチで解決策を提供します。
              </p>
              <p>
                制作から運用・改善まで一貫して対応することで、クライアントが本業に集中できる環境をつくります。
              </p>
            </div>

            <div
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                { num: "6", label: "提供サービス" },
                { num: "50+", label: "支援実績" },
                { num: "全国", label: "対応エリア" },
                { num: "2022", label: "設立年" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[#E2E8F0] rounded-xl p-5"
                >
                  <p
                    className="font-black text-[#0F172A] leading-none mb-1.5 tracking-tight"
                    style={{ fontSize: "clamp(24px, 2.5vw, 32px)" }}
                  >
                    {item.num}
                  </p>
                  <p className="text-[#94A3B8] text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
