import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "採用情報｜AIマーケティング×Web制作の成長環境｜株式会社サイプレス",
  description:
    "株式会社サイプレスの採用情報。SEO・MEO・AIO・AI活用・Web制作を手がけるスタートアップで、マーケティング・営業職を積極採用中。東京葛飾区。裁量大・成長環境。",
  keywords: ["サイプレス採用", "AIマーケティング求人", "Web制作会社 求人", "SEO マーケティング職", "スタートアップ採用 東京"],
  openGraph: {
    title: "採用情報｜AIマーケティング×Web制作の成長環境｜株式会社サイプレス",
    description: "サイプレスの採用情報。SEO・MEO・AIO・AI活用・Web制作のマーケティング・営業職を採用中。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit" },
};

const faqItems = [
  {
    q: "どんな人を求めていますか？",
    a: "「Webマーケティングで成果を出したい」「AI活用に前向きに取り組める」「自分で考えて動ける」方を求めています。経験よりも学習意欲と姿勢を重視します。スタートアップフェーズのため、業務の幅は広く、成長速度は速いです。",
  },
  {
    q: "未経験でも応募できますか？",
    a: "はい、歓迎します。SEO・MEO・AIOについて自ら学ぶ姿勢と、ChatGPT等のAIツールを積極的に活用しようとする意欲があれば、経験がなくてもご応募ください。OJTとツールを駆使してキャッチアップをご支援します。",
  },
  {
    q: "勤務地はどこですか？",
    a: "東京都葛飾区白鳥4-6-1-623が本社所在地です。リモートワーク対応可・フレックス勤務など、柔軟な働き方を相談の上で設定できます。詳細は面接時にご確認ください。",
  },
  {
    q: "どんな案件・クライアントに携わりますか？",
    a: "飲食・美容・士業・医療・建設・不動産・小売など幅広い業種の中小ビジネスのWebマーケティング支援を行います。SEO・MEO・AIO対策・Web制作・AI活用・SNS運用まで、トータルのマーケティング支援を担当します。",
  },
  {
    q: "AIツールを使った業務はありますか？",
    a: "はい。ChatGPT・Claude等を使ったコンテンツ制作効率化・レポート作成・提案書作成・業務自動化を積極的に推進しています。AIを活用した生産性向上に積極的に取り組める方を歓迎します。",
  },
  {
    q: "どのくらいの裁量がありますか？",
    a: "スタートアップフェーズのため、業務設計・施策提案・ツール選定など、幅広い領域で大きな裁量を持てます。「こうすれば改善できる」というアイデアを積極的に実行できる環境です。",
  },
  {
    q: "選考フローを教えてください。",
    a: "書類選考→面接（1〜2回）→内定という流れです。面接はオンライン対応可能です。まずはお気軽にご応募ください。",
  },
  {
    q: "どのポジションがありますか？",
    a: "現在はマーケティング職（SEO・MEO・AIO・コンテンツ担当）と営業職（新規開拓・提案営業）を採用しています。各ポジションの詳細は採用ページをご確認ください。",
  },
];

const relatedLinks = [
  { href: "/recruit/marketing", label: "マーケティング職採用", desc: "SEO・MEO・AIO担当" },
  { href: "/recruit/sales", label: "営業職採用", desc: "新規開拓・提案営業" },
  { href: "/company", label: "会社概要", desc: "株式会社サイプレスについて" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "担当業務の内容" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "担当業務の内容" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "担当業務の内容" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "AI活用の取り組み" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "制作事業の内容" },
  { href: "/ai", label: "AI活用マーケティング", desc: "会社のAI活用方針" },
  { href: "/contact", label: "お問い合わせ", desc: "採用に関するお問い合わせ" },
  { href: "/aio", label: "AIO対策", desc: "AI検索への取り組み" },
  { href: "/seo", label: "SEO対策", desc: "SEOへの取り組み" },
];

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>採用情報</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Careers</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              採用情報
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスは、SEO・MEO・AIO（AI検索最適化）・AI活用・Web制作を手がける東京のWebマーケティングエージェンシーです。創業期のスタートアップフェーズで、一緒に事業を成長させるメンバーを採用しています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AIが変えるマーケティングの最前線で、ChatGPT・Claude等の最新AIツールを日常的に活用しながら、クライアントのビジネス成長に貢献したい方を歓迎します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "280px", overflow: "hidden" }}>
          <Image src="/7.png" alt="株式会社サイプレス採用情報・AIマーケティングの職場のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.3)" }} />
        </section>

        {/* 募集ポジション */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Open Positions</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              募集中のポジション
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  href: "/recruit/marketing",
                  title: "マーケティング職",
                  desc: "SEO・MEO・AIOを中心に、クライアントのWebマーケティング戦略立案から施策実施・改善まで担当します。AIツールを積極活用しながら成果を追求するポジションです。",
                  tags: ["SEO", "MEO", "AIO", "コンテンツ", "AI活用"],
                },
                {
                  href: "/recruit/sales",
                  title: "営業職",
                  desc: "中小ビジネスオーナーへのSEO・MEO・Web制作・AI活用支援の新規提案営業です。課題を深くヒアリングし、最適なソリューションを提案します。",
                  tags: ["新規営業", "提案型", "中小企業支援", "Webマーケ提案"],
                },
              ].map((pos, i) => (
                <Link key={i} href={pos.href} className="block group py-8" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-[17px] mb-2 group-hover:underline" style={{ color: "#0d1b2a" }}>{pos.title}</p>
                      <p className="text-[14px] leading-[1.9] max-w-2xl mb-4" style={{ color: "#374151" }}>{pos.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {pos.tags.map((tag, j) => (
                          <span key={j} className="text-[11px] px-3 py-1 rounded-full" style={{ background: "#E8E4DC", color: "#374151" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <span className="shrink-0 ml-8 mt-1 text-[13px]" style={{ color: "#9CA3AF" }}>→</span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サイプレスで働く理由 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Cypress</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスで働く3つの理由
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
              {[
                { title: "AI最前線で働ける", body: "ChatGPT・Claude等の最新AIを日常的に活用するカルチャー。AIが変えるマーケティングの最前線で、最新のスキルを磨けます。" },
                { title: "裁量と成長速度", body: "スタートアップフェーズのため業務の幅が広く、施策立案・実行・改善をすべて担当できます。市場価値を高める速度が速い環境です。" },
                { title: "多様なクライアントと関わる", body: "飲食・美容・医療・建設など多業種のクライアントを担当。幅広い業種のWebマーケティング経験を短期間で積めます。" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 会社基本情報 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Company Info</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>会社基本情報</h2>
            <div className="max-w-3xl">
              {[
                { label: "会社名", value: "株式会社サイプレス" },
                { label: "代表取締役", value: "織田 春樹" },
                { label: "設立", value: "2026年5月13日" },
                { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                { label: "事業内容", value: "Webマーケティング支援（SEO・MEO・AIO対策）・Web制作・AI活用支援・SNS運用" },
                { label: "お問い合わせ", value: "consulting.meo@gmail.com" },
              ].map((row, i) => (
                <div key={i} className="flex gap-8 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="w-28 shrink-0 text-[13px] font-semibold" style={{ color: "#0d1b2a" }}>{row.label}</span>
                  <span className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="採用についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="採用エントリー・ご質問はこちら"
          body="採用に関するご質問・エントリーは、お問い合わせフォームよりお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
