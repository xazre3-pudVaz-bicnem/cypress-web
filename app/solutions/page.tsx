import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import { solutionPages } from "@/lib/data/solutionPages";

export const metadata: Metadata = {
  title: "Web集客ソリューション一覧｜MEO×SEO×SNS統合戦略｜株式会社サイプレス",
  description:
    "MEO×SEO・MEO×SNS・SEO×コンテンツなど、複数施策を統合した集客ソリューション。業種別・目的別の統合戦略で最大の集客成果を実現します。",
  keywords: ["Web集客 統合戦略", "MEO SEO 組み合わせ", "集客ソリューション", "デジタルマーケティング 統合"],
  openGraph: {
    title: "Web集客ソリューション一覧｜MEO×SEO×SNS統合戦略｜株式会社サイプレス",
    description: "複数施策を統合した集客ソリューション。MEO×SEO×SNS×AIOの相乗効果で最大の成果を実現。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/solutions" },
};

const faqItems = [
  {
    q: "複数の施策を同時に始めることはできますか？",
    a: "はい。予算・リソースが許せば複数施策を同時に開始することで相乗効果が生まれます。ただし優先度は重要で、まず即効性の高いMEO対策から始め、並行してSEO・SNSを加えるのが一般的な順序です。現状に応じた最適な組み合わせをご提案します。",
  },
  {
    q: "単発の施策より統合ソリューションの方が効果が高いですか？",
    a: "多くのケースでは統合的なアプローチの方が効果が高いです。例えばMEOとSEOを連動させると、Googleマップとオーガニック検索の両方で露出が増え、より多くのタッチポイントを確保できます。ただし各施策のコアな実力を先に確認することも重要です。",
  },
  {
    q: "予算が限られている場合はどのソリューションが向いていますか？",
    a: "予算が限られている場合はMEO対策からスタートすることをお勧めします。費用対効果が高く、地域ビジネスには最も直接的な集客効果があります。余裕が生まれたタイミングでSEO・SNSを追加していく段階的なアプローチが現実的です。",
  },
  {
    q: "業種によって最適なソリューションは変わりますか？",
    a: "はい、大きく変わります。飲食・美容・医療など来店型ビジネスはMEO×SNSが効果的です。B2B・士業・コンサルはSEO×AIO×ホームページが中心になります。業種と目的に合わせた最適な組み合わせをご提案します。",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ソリューション</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Solutions</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              統合Webマーケティング<br />ソリューション
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              MEO・SEO・SNS・Web制作・AIOを単体で実施するより、組み合わせることで相乗効果が生まれます。
              業種別・目的別の統合ソリューションで最大の集客効果を実現します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              「何を組み合わせれば良いか」「どこから始めるか」は現状の課題と目標によって変わります。
              まず無料相談で現状診断を行い、最適な組み合わせをご提案します。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_08_58 (6).jpg"
            alt="統合Webマーケティングソリューション"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.5 }}>
                1+1が3になる統合戦略。<br />施策の相乗効果を最大化する。
              </p>
            </div>
          </div>
        </section>

        {/* Solutions grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>All Solutions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ソリューション一覧
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {solutionPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/solutions/${page.slug}`}
                  style={{ background: "#ffffff", padding: "28px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "10px", color: "#9ca3af", marginBottom: "8px" }}>
                    {page.titleEn}
                  </p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 700, marginBottom: "6px", lineHeight: 1.4 }}>
                    {page.title}
                  </p>
                  <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "10px", fontStyle: "italic" }}>
                    {page.tagline}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    {page.intro.slice(0, 60)}...
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "12px", color: "#9ca3af" }}>
                    詳しく見る
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why combine */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Synergy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              施策を組み合わせると相乗効果が生まれる理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "タッチポイントが増えることで認知が拡大する", b: "Googleマップ（MEO）・Google検索（SEO）・Instagram・AI検索（AIO）で同時に自社を露出することで、より多くのユーザーに認知されます。一つの施策だけでは届かない層に複数のチャンネルからリーチできます。" },
                { n: "02", t: "施策間で情報が連動して訴求力が高まる", b: "ウェブサイトのコンテンツがSEOに効き、そのコンテンツがAIOに引用され、SNSでシェアされる——このように施策が連動することで、単体より強い情報発信が可能になります。" },
                { n: "03", t: "データが連動して改善精度が上がる", b: "MEOのインサイト・SEOの順位変動・SNSのエンゲージメントを組み合わせて分析することで、どのチャンネルが最も効果的かが明確になり、予算配分の精度が上がります。" },
                { n: "04", t: "競合が単施策の場合に大きな優位性を持てる", b: "競合がMEO対策だけをしているときに、MEO×SEO×SNSを統合的に実施することで、複数の集客チャンネルで圧倒的な優位性を確立できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "20px", fontWeight: 700, minWidth: "36px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="統合ソリューションについてよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の詳細" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の詳細" },
            { href: "/services/sns", label: "SNS運用サービス", desc: "SNS集客の詳細" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化の詳細" },
            { href: "/services/web-design", label: "ホームページ制作", desc: "集客できるサイト制作" },
            { href: "/goals", label: "目的別施策プラン", desc: "達成目標から施策を選ぶ" },
            { href: "/industries", label: "業種別Web集客", desc: "業種に特化した集客戦略" },
            { href: "/contact", label: "無料相談", desc: "最適なソリューションをご提案" },
          ]}
        />

        <PageContactCTA
          heading="最適なソリューションをご提案します"
          body="どの施策を組み合わせるべきか、まずは無料相談でご状況をお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}
