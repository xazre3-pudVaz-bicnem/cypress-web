"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FAQS = [
  {
    q: "業界・職種未経験でも応募できますか？",
    a: "はい、歓迎しています。サイプレスでは入社後のOJTと研修プログラムを整備しており、Webマーケティングの知識がゼロでも、3〜6ヶ月で独り立ちできる体制があります。意欲と学習姿勢を最も重視します。",
  },
  {
    q: "フルリモートは本当に可能ですか？",
    a: "はい、全業務をリモートで完結できます。Slack・Zoom・Notionでの非同期コミュニケーションを基本とし、週次のオンラインMTGで進捗共有を行います。ただし、クライアントへの対面訪問が必要な場合は出社することがあります（月1〜2回程度）。",
  },
  {
    q: "選考フローと期間はどのくらいですか？",
    a: "書類選考 → カジュアル面談 → 一次面接 → 最終面接・内定の4ステップです。最短で2週間以内に内定が出ます。在職中の方は日程を柔軟に調整しますのでご相談ください。",
  },
  {
    q: "副業・兼業は可能ですか？",
    a: "原則として、クライアントとの利益相反がない範囲であれば副業・兼業を認めています。事前に申告いただく必要がありますが、個人で案件を持つマーケターを応援する文化があります。",
  },
  {
    q: "給与・昇給の仕組みを教えてください。",
    a: "月給40万円〜（経験・スキルを考慮）からスタートし、成果報酬を加えると年収1,500万円以上も目指せます。昇給は半年ごとの評価に基づき行われ、担当クライアント数・成果KPI・チーム貢献度で判定します。",
  },
  {
    q: "どんな人が活躍していますか？",
    a: "共通しているのは「数字で考えられる」「素直に学べる」「お客様の成功を自分ごととして捉えられる」この3点です。前職が飲食・営業・教育など、全く異なる業界出身のメンバーも活躍しています。",
  },
  {
    q: "どのようなAIツールを使いますか？",
    a: "ChatGPT Plus（GPT-4o）・Claude Pro・Perplexity Pro・Midjourney・Difyなどを業務で活用しています。AIツールは会社が費用負担します。AIを使いこなす力は、入社後の研修でもしっかり習得できます。",
  },
  {
    q: "入社後のオンボーディングはどのような内容ですか？",
    a: "入社後2週間は研修期間です。MEO・SEO・AIO・AIツール活用の基礎を体系的に学んだあと、OJTで先輩と一緒に実案件を経験します。わからないことはSlackでいつでも質問でき、丁寧なフォロー体制があります。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "#E2E8F0" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <div className="flex items-start gap-3">
          <span className="font-mono text-xs mt-0.5 shrink-0" style={{ color: "#8B5CF6" }}>Q</span>
          <span className="text-[#0F172A] text-sm font-medium leading-relaxed">{q}</span>
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform"
          style={{
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.2)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-6 pr-4">
              <div className="flex gap-3">
                <span className="font-mono text-xs mt-0.5 shrink-0" style={{ color: "#10B981" }}>A</span>
                <p className="text-[#64748B] text-sm leading-relaxed">{a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RecruitFaqPage() {
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
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#475569] mb-8">
              <Link href="/" className="hover:text-[#2563EB] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/recruit" className="hover:text-[#2563EB] transition-colors">採用情報</Link>
              <span>/</span>
              <span className="text-[#2563EB]">採用FAQ</span>
            </nav>
            <SectionLabel color="#8B5CF6">Recruit FAQ</SectionLabel>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              採用よくある質問
            </h1>
            <p className="text-[#334155] text-base max-w-xl leading-relaxed">
              応募前によく聞かれる質問をまとめました。
              解決しない場合はお気軽にお問い合わせください。
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="pb-24 max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="border-t" style={{ borderColor: "#E2E8F0" }}>
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <section
          className="py-20"
          style={{ background: "#2563EB", borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="font-black text-white text-2xl mb-4">まだ疑問がある方へ</h2>
              <p className="text-white/80 mb-8">
                カジュアル面談では、なんでもお気軽にご質問いただけます。選考ではありませんので安心してご参加ください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#2563EB] bg-white text-sm transition-all hover:scale-105"
              >
                カジュアル面談を申し込む →
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
