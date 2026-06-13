import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "職場環境・福利厚生｜フルリモート・年間休日130日｜株式会社サイプレス",
  description:
    "株式会社サイプレスの職場環境・福利厚生をご紹介。フルリモートワーク・完全週休2日制・年間休日130日・AI活用ツール完備。働きやすさと成果を両立する環境です。",
  keywords: ["職場環境", "福利厚生", "フルリモート", "働きやすい会社", "株式会社サイプレス"],
};

const BENEFITS = [
  {
    icon: "🏠",
    title: "フルリモートワーク",
    desc: "全業務をリモートで完結可能。オンラインMTGとSlackで円滑なコミュニケーションを実現しています。",
    color: "#3B82F6",
  },
  {
    icon: "📅",
    title: "年間休日130日",
    desc: "完全週休2日制（土日祝）。有給休暇は入社初月から付与。プライベートの時間をしっかり確保できます。",
    color: "#10B981",
  },
  {
    icon: "🤖",
    title: "AIツール完備",
    desc: "ChatGPT Plus・Claude Pro・Midjourney等、最先端AIツールを全員が使える環境です。業務効率を最大化します。",
    color: "#06B6D4",
  },
  {
    icon: "📚",
    title: "学習支援制度",
    desc: "書籍購入補助（月5,000円）、セミナー参加費補助（年間10万円まで）、資格取得支援があります。",
    color: "#8B5CF6",
  },
  {
    icon: "⏰",
    title: "フレックスタイム制",
    desc: "コアタイム（11:00〜15:00）以外は自由に調整可能。ライフスタイルに合わせた働き方ができます。",
    color: "#F59E0B",
  },
  {
    icon: "💪",
    title: "健康サポート",
    desc: "社会保険完備（雇用・労災・健康・厚生年金）。定期健康診断を毎年実施しています。",
    color: "#EC4899",
  },
];

const CULTURE = [
  { title: "成果主義・年齢不問", body: "年齢・経歴に関係なく、成果を出せば正当に評価します。入社1年目でチームリーダーになった実例もあります。" },
  { title: "情報共有文化", body: "Slackでの情報共有・週次チームMTGで全員が同じ情報にアクセスできる透明な環境です。" },
  { title: "挑戦を推奨", body: "新しい施策・AIツール・マーケティング手法への挑戦を推奨します。失敗を恐れず試行錯誤できる文化です。" },
  { title: "1on1面談（月1回）", body: "代表・マネージャーとの月1回の1on1で、キャリア・目標・悩みを相談できる環境を整えています。" },
];

const STATS = [
  { value: "98%", label: "定着率（設立来）", color: "#10B981" },
  { value: "100%", label: "フルリモート対応", color: "#3B82F6" },
  { value: "130日", label: "年間休日", color: "#8B5CF6" },
  { value: "40万円〜", label: "月給スタート", color: "#F59E0B" },
];

export default function EnvironmentPage() {
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
              <span className="text-[#2563EB]">職場環境・福利厚生</span>
            </nav>
            <SectionLabel color="#10B981">Work Environment</SectionLabel>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              職場環境・福利厚生
            </h1>
            <p className="text-[#334155] text-base max-w-xl leading-relaxed">
              成果を出しながら、豊かな生活を送ることができる環境を整えています。
              フルリモート・年間休日130日・AI活用環境が揃っています。
            </p>
          </div>
        </section>

        {/* Desk visual — work environment */}
        <section className="relative overflow-hidden w-full" style={{ height: "380px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_10_29.png"
            alt="リモートワーク環境 - ノートパソコンと観葉植物のある落ち着いたデスク"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* Stats */}
        <section className="pb-16 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.07}>
                <GlassCard className="p-6 text-center">
                  <div className="font-black text-2xl mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[#64748B] text-xs">{s.label}</div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-24 max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel color="#10B981">Benefits</SectionLabel>
            <h2 className="font-black text-[#0F172A] text-xl md:text-2xl mb-10">福利厚生</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.07}>
                <GlassCard className="p-6">
                  <div className="text-2xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">{b.title}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{b.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section className="py-20" style={{ background: "#F8FAFC" }}>
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <SectionLabel color="#10B981">Culture</SectionLabel>
              <h2 className="font-black text-[#0F172A] text-xl md:text-2xl mb-10">カルチャー</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-5">
              {CULTURE.map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 0.07}>
                  <GlassCard className="p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <h3 className="font-bold text-[#0F172A] text-sm">{c.title}</h3>
                    </div>
                    <p className="text-[#64748B] text-sm leading-relaxed">{c.body}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-black text-[#0F172A] text-2xl mb-4">この環境で、一緒に働きませんか</h2>
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
                href="/recruit/faq"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "#F8FAFC", color: "#334155", border: "1px solid #E2E8F0" }}
              >
                採用FAQ →
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
