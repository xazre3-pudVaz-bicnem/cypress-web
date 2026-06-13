import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "キャリアパス｜成長ロードマップ｜株式会社サイプレス採用",
  description:
    "株式会社サイプレスのキャリアパスをご紹介。入社後の成長ロードマップ、昇格・昇給の仕組み、独立・フリーランスへのキャリアパスまで透明性を持ってお伝えします。",
  keywords: ["キャリアパス", "成長ロードマップ", "昇給", "キャリアアップ", "株式会社サイプレス"],
};

const CAREER_PATHS = [
  {
    phase: "Phase 1",
    period: "0〜6ヶ月",
    title: "基礎習得期",
    description: "MEO・SEO・AIOの基礎を学びながら、担当クライアントを持ちます。先輩のサポートを受けながらOJTで成長します。",
    goals: ["MEO対策の基礎を習得", "初回クライアント担当（3〜5社）", "Google Analytics・サーチコンソールの習熟", "AIツールの業務活用"],
    color: "#3B82F6",
  },
  {
    phase: "Phase 2",
    period: "6〜18ヶ月",
    title: "戦力化期",
    description: "独自の戦略立案ができるようになり、担当クライアント数を増やします。後輩の指導も始まります。",
    goals: ["担当クライアント10〜20社", "SEO・AIO専門施策の立案", "成果レポートの自立作成", "新人メンバーのOJT担当"],
    color: "#10B981",
  },
  {
    phase: "Phase 3",
    period: "18ヶ月〜",
    title: "専門家・リーダー期",
    description: "特定領域のエキスパートとして社内外で認知されます。チームリーダーや専門コンサルタントへのキャリアが開きます。",
    goals: ["特定領域のエキスパート認定", "チームリーダー・マネージャー", "コンテンツ・登壇での発信活動", "独立・フリーランスも選択可"],
    color: "#8B5CF6",
  },
];

const VOICES = [
  {
    name: "入社1年・Tさん",
    role: "Webマーケター",
    quote: "前職はまったく別業界でしたが、丁寧なOJTのおかげで半年で独り立ちできました。AIを使いこなせるようになったのが一番の財産です。",
  },
  {
    name: "入社2年・Kさん",
    role: "営業担当",
    quote: "経営者に直接提案できる環境で、ビジネス思考が鍛えられました。成果が出るたびに達成感があります。収入も入社時の1.8倍になりました。",
  },
  {
    name: "入社3年・Sさん",
    role: "チームリーダー",
    quote: "今はチームを率いながら、自分のクライアントも持っています。サイプレスで積んだ経験は、どこへ行っても通用する本物のスキルです。",
  },
];

export default function CareerPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(37,99,235,0.04) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#475569] mb-8">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/recruit" className="hover:text-[#2563EB] transition-colors">採用情報</Link>
              <span>/</span>
              <span className="text-[#2563EB]">キャリアパス</span>
            </nav>
            <SectionLabel color="#8B5CF6">Career Path</SectionLabel>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              キャリアパス
            </h1>
            <p className="text-[#334155] text-base max-w-xl leading-relaxed">
              サイプレスでは、入社からの成長ロードマップを透明性を持って公開しています。
              あなたのキャリアをどう描くか、一緒に考えましょう。
            </p>
          </div>
        </section>

        {/* Career Phases */}
        <section className="pb-24 max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel color="#8B5CF6">Growth Roadmap</SectionLabel>
            <h2 className="font-black text-[#0F172A] text-xl md:text-2xl mb-10">成長ロードマップ</h2>
          </ScrollReveal>
          <div className="space-y-5">
            {CAREER_PATHS.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 md:p-10"
                  style={{
                    background: `${phase.color}08`,
                    border: `1px solid ${phase.color}25`,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0">
                      <div className="text-xs font-mono mb-1" style={{ color: phase.color }}>{phase.phase}</div>
                      <div className="text-[#475569] text-sm">{phase.period}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-[#0F172A] text-lg mb-3">{phase.title}</h3>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-5">{phase.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {phase.goals.map((goal) => (
                          <div key={goal} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: phase.color }} />
                            <span className="text-[#64748B] text-sm">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Voices */}
        <section className="py-20" style={{ background: "#F8FAFC" }}>
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <SectionLabel color="#8B5CF6">Employee Voices</SectionLabel>
              <h2 className="font-black text-[#0F172A] text-xl md:text-2xl mb-10">先輩社員の声</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {VOICES.map((v, i) => (
                <ScrollReveal key={v.name} delay={i * 0.08}>
                  <GlassCard className="p-6">
                    <p className="text-[#64748B] text-sm leading-relaxed mb-5 italic">"{v.quote}"</p>
                    <div>
                      <p className="text-[#0F172A] text-sm font-bold">{v.name}</p>
                      <p className="text-[#475569] text-xs mt-0.5">{v.role}</p>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-black text-[#0F172A] text-2xl mb-4">あなたのキャリアを、ここから</h2>
            <p className="text-[#64748B] mb-8">まずはカジュアル面談でお話しましょう。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-all hover:scale-105"
                style={{ background: "#2563EB" }}
              >
                応募・お問い合わせ →
              </Link>
              <Link
                href="/recruit/environment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "#F8FAFC", color: "#334155", border: "1px solid #E2E8F0" }}
              >
                職場環境を見る
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
