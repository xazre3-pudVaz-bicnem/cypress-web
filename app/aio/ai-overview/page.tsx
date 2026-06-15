import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Google AI Overview対策｜生成AI検索で引用されるサイトへ｜サイプレス",
  description: "Googleの生成AI検索「AI Overview」に引用されるためのAIO対策。E-E-A-T・構造化データ・FAQ最適化で、AIが選ぶ情報源になる方法を解説。",
  keywords: ["AI Overview対策", "AIO対策", "生成AI検索", "Google AI Overview", "E-E-A-T", "構造化データ", "AI検索対策"],
  openGraph: {
    title: "Google AI Overview対策｜生成AI検索で引用されるサイトへ",
    description: "Googleの生成AI検索「AI Overview」に引用されるためのAIO対策。E-E-A-T・構造化データ・FAQ最適化で、AIが選ぶ情報源になる方法を解説。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/ai-overview" },
};

const faqItems = [
  { q: "Google AI Overviewとは何ですか？", a: "Google検索の最上部に表示される生成AI回答です。特定の検索クエリに対して、Googleが複数のウェブページを参照して自動生成した回答が表示されます。引用されたページへのリンクも表示されます。" },
  { q: "AI Overviewに引用されると何かメリットがありますか？", a: "AI Overviewでの引用はブランドの認知度と信頼性向上につながります。クリック率への影響はゼロクリック検索が増えることで複雑ですが、業界の権威として認識されることで、直接指名検索が増える効果があります。" },
  { q: "AI Overviewは全ての検索で表示されますか？", a: "いいえ。情報収集型のクエリ（「〇〇とは」「〇〇の方法」「〇〇の比較」など）で表示されやすく、商品購入・地域検索・ニュースなどでは表示されにくい傾向があります。" },
  { q: "SEO対策とAI Overview対策は別物ですか？", a: "基本的な考え方は共通しています。E-E-A-T・良質なコンテンツ・構造化データは両方に有効です。AI Overview特有の対策としては、答えを最初の段落に明確に書く「結論ファースト」のライティングスタイルが重要です。" },
  { q: "AI Overviewに選ばれるためにどのくらいの期間がかかりますか？", a: "コンテンツ改善から引用されるまでの明確な期間はGoogleが公表していません。継続的なコンテンツ品質向上・E-E-A-T強化・構造化データ実装を積み重ねることが重要です。" },
  { q: "中小企業でもAI Overviewに引用されますか？", a: "はい。大企業でなくても、特定の専門分野で質の高いコンテンツを持つサイトは引用される可能性があります。ニッチな専門領域に集中したコンテンツ戦略が効果的です。" },
  { q: "AI Overviewに引用されているか確認する方法はありますか？", a: "対象キーワードをGoogle検索して直接確認するのが最も確実です。ただし表示はユーザーによって異なるため、Google Search Consoleのインプレッションデータも合わせて確認することを推奨します。" },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用対策" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org対策" },
  { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "Q&Aコンテンツ" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleへのエンティティ登録" },
  { href: "/aio/llm-optimization", label: "LLM最適化", desc: "AI言語モデル対策" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/aio" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              Google AI Overview対策
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AI Overview</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Google AI Overview対策｜生成AI検索で引用される
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Google検索の最上部に表示される生成AI回答「AI Overview」に自社コンテンツが引用されることは、AIが主流になる検索時代のブランド戦略として重要です。引用されるサイトになるための実践的な対策を解説します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              従来のSEOが「検索結果10位以内」を目標にしていたのに対し、AI Overview対策は「AIが最初に選ぶ情報源」になることを目標とします。E-E-A-T・構造化データ・結論ファーストのコンテンツ設計が不可欠です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="Google AI Overview対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                AI Overviewに引用されるサイトは、E-E-A-Tと構造化データで「AIが信頼できる情報源」として認識されたページです。
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Core Conditions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              AI Overviewに引用されるための4つの条件
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "E-E-A-T（経験・専門性・権威性・信頼性）の明示", b: "著者情報・会社情報・専門性の根拠を構造化して明示します。Googleが信頼できる情報源かを判断する最重要シグナルです。" },
                { t: "結論ファーストの文章構造", b: "回答をページの冒頭に明確に記述。Googleが「答え」として引用しやすい文章構造にすることで引用確率が高まります。" },
                { t: "FAQスキーマの実装", b: "FAQPageスキーマを実装することでQ&A形式の回答がAI Overviewの引用候補になりやすくなります。構造化データは必須です。" },
                { t: "権威あるサイトからの被リンク", b: "業界メディアや公的機関からの言及・被リンクが引用確率を高めます。権威性の高いサイトからの評価がAI判断に影響します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Factors</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AI Overviewに引用されるための条件
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "検索クエリへの直接的な回答を冒頭に置く", b: "AI Overviewは「この質問に対する答えは何か」を最初の段落で判断します。前置きを省き、最初の1〜2文で質問に答える「結論ファースト」の構成が効果的です。" },
                { n: "02", t: "明確な見出し構造（H1→H2→H3）", b: "適切な階層構造の見出しはAIがコンテンツを理解しやすくします。各見出しが独立した質問への回答になっている構成は特に引用されやすい傾向があります。" },
                { n: "03", t: "E-E-A-T（経験・専門性・権威性・信頼性）の強化", b: "著者情報・会社概要・実績・資格・メディア掲載などの権威性情報をコンテンツ内に組み込みます。Googleは信頼できる情報源を優先的にAI Overviewの引用元にします。" },
                { n: "04", t: "構造化データ（FAQPage・HowTo等）の実装", b: "Schema.orgの構造化データを実装することで、AIが情報の種類と関係性を正確に理解できます。特にFAQPageは引用される確率が高い形式です。" },
                { n: "05", t: "権威性の高いサイトからの被リンク獲得", b: "被リンクプロファイルはGoogleの信頼性評価に影響します。業界メディア・公的機関・専門サイトからのリンクを増やすことでAI Overviewでの引用可能性が高まります。" },
                { n: "06", t: "ローカルクエリへの対応（GBPとWebサイトの連携）", b: "「〇〇市のMEO業者」などの地域検索でのAI Overviewには、GBPと連携したWebサイトのローカルSEO対策が重要です。" },
                { n: "07", t: "定期的なコンテンツ更新", b: "最新性はAI Overviewへの引用可能性に影響します。記事の更新日を明記し、情報が古くなったら随時更新することが重要です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="AI Overview対策のご相談" body="Google AI Overviewへの引用を増やすためのコンテンツ改善・構造化データ実装・E-E-A-T強化をご支援します。AI検索時代の集客対策をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
