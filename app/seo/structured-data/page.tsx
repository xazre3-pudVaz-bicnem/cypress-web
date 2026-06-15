import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "構造化データ（Schema.org）実装とは｜リッチリザルト・AI検索対策｜株式会社サイプレス",
  description:
    "構造化データ（JSON-LD・Schema.org）の基礎から実装まで解説。FAQPage・BreadcrumbList・Article・Organization・LocalBusiness・WebSiteのマークアップ方法とリッチリザルト獲得の方法を網羅。",
  keywords: ["構造化データ", "Schema.org", "JSON-LD", "リッチリザルト", "FAQPage", "BreadcrumbList", "AIO対策"],
  openGraph: {
    title: "構造化データ（Schema.org）実装とは｜リッチリザルト・AI検索対策｜株式会社サイプレス",
    description: "構造化データ実装の実践ガイド。JSON-LD・Schema.orgのマークアップからリッチリザルト獲得まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/structured-data" },
};

const faqItems = [
  {
    q: "構造化データとは何ですか？なぜSEOに重要ですか？",
    a: "構造化データとは、Schema.orgで定義された語彙を使って、ページのコンテンツの意味をGoogleなどの検索エンジンに明確に伝えるマークアップです。Googleが構造化データを正しく認識すると、検索結果にFAQ・パンくず・評価・商品情報などのリッチリザルトが表示され、クリック率の向上が期待できます。また、AI検索（AIO）でのコンテンツ引用にも貢献します。",
  },
  {
    q: "JSON-LDとMicrodataとRDFaの違いは何ですか？",
    a: "いずれも構造化データのフォーマットですが、GoogleはJSON-LD（JavaScriptのscriptタグ内にJSON形式で記述）を推奨しています。JSON-LDはHTMLとは独立して記述でき、実装とメンテナンスが最も簡単です。Next.jsのApp RouterではJSON-LDをscriptタグとして`dangerouslySetInnerHTML`で埋め込む方法が一般的です。",
  },
  {
    q: "どのSchema.orgタイプを実装すればいいですか？",
    a: "Webサイト全体にはWebSite（サイト検索へのサポート）・Organization（会社情報）を実装します。各ページタイプに応じて、FAQPage（FAQセクションがあるページ）・BreadcrumbList（全ページ）・Article（ブログ記事）・LocalBusiness（地域ビジネス）・Service（サービスページ）などを追加します。",
  },
  {
    q: "FAQPageの構造化データを実装するとどうなりますか？",
    a: "Googleの検索結果にFAQのアコーディオン形式のリッチリザルトが表示される場合があります。検索結果での占有面積が増え、クリック率の向上が期待できます。また、AI検索（ChatGPT・Gemini・Perplexity）でのFAQ形式の回答引用にも貢献します。",
  },
  {
    q: "構造化データのエラーはどこで確認できますか？",
    a: "Google Search Console の「拡張機能」セクションで構造化データのエラー・警告を確認できます。また、単一ページの確認にはGoogle Rich Results Test（https://search.google.com/test/rich-results）が便利です。実装後は必ずこれらのツールで検証します。",
  },
  {
    q: "AIO（AI検索最適化）に構造化データは有効ですか？",
    a: "はい。ChatGPT・Gemini・Perplexityなどのレビューは、構造化されたコンテンツを引用しやすい傾向があります。FAQPage・Article・Organization・LocalBusinessなどの構造化データは、AIがコンテンツの意味を正確に理解するのを助け、引用可能性を高めます。",
  },
  {
    q: "LocalBusiness構造化データで地域SEOは改善しますか？",
    a: "LocalBusiness（またはRestaurant・Clinic・BeautySalon等）の構造化データは、Googleに地域ビジネスとして正確に認識させる効果があります。住所・電話番号・営業時間・対応エリアを構造化することで、ローカルパック（Googleマップ検索結果）への掲載と地域名キーワードでの評価向上に貢献します。",
  },
  {
    q: "Next.jsで構造化データを実装する方法は？",
    a: "Next.jsのApp RouterではPageコンポーネント内にJSON-LDをscriptタグで埋め込みます。`<script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />`の形式です。layoutファイルにOrganization・WebSiteを、各pageファイルにBreadcrumbList・FAQPage・Articleを実装するのが一般的な設計です。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "メタデータ・ページ内最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索での引用可能性を高める" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "LocalBusiness構造化データ" },
  { href: "/seo/site-structure", label: "サイト構造設計", desc: "BreadcrumbListの設計" },
  { href: "/web-design/nextjs", label: "Next.jsでのサイト制作", desc: "JSON-LDの実装方法" },
  { href: "/knowledge/structured-data", label: "構造化データガイド", desc: "Schema.orgの使い方入門" },
  { href: "/column/seo", label: "SEOコラム", desc: "リッチリザルトの最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "構造化データ実装込みのSEO支援" },
  { href: "/checklist/technical-seo", label: "テクニカルSEOチェックリスト", desc: "構造化データの確認項目" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "構造化データエラーの確認" },
];

const schemaTypes = [
  { type: "WebSite", desc: "サイト名・URL・検索機能（SearchAction）をGoogleに伝える。全サイト共通。", target: "サイト全体（layout.tsx）" },
  { type: "Organization", desc: "会社名・住所・電話・URL・ロゴ・SNSリンク。ブランド認知とE-E-A-T強化。", target: "サイト全体（layout.tsx）" },
  { type: "LocalBusiness", desc: "地域ビジネスの詳細情報。営業時間・対応エリア・座標。ローカルSEOに必須。", target: "トップページ・会社ページ" },
  { type: "BreadcrumbList", desc: "ページの階層構造をGoogleに伝える。検索結果でのパンくず表示。", target: "全ページ" },
  { type: "FAQPage", desc: "FAQ形式のコンテンツ。検索結果でのアコーディオンリッチリザルト。AI引用向上。", target: "FAQセクションがあるページ" },
  { type: "Article", desc: "ブログ記事・コラム。著者・公開日・更新日・見出し構造。", target: "ブログ・コラム記事" },
  { type: "Service", desc: "サービスの概要・価格帯・説明。サービスページに実装。", target: "サービス紹介ページ" },
  { type: "Review / AggregateRating", desc: "口コミ・評価スコア。星評価のリッチリザルト表示。", target: "口コミ掲載ページ" },
];

export default function StructuredDataPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>構造化データ実装</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Structured Data</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              構造化データ実装
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              構造化データ（Schema.org・JSON-LD）とは、ページのコンテンツの意味を検索エンジンとAIに明確に伝えるマークアップです。リッチリザルトの獲得・AI検索での引用可能性向上・ローカルSEOへの貢献という3つの効果があります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ChatGPT・Gemini・PerplexityなどのAI検索が普及する中、構造化データはSEOだけでなくAIO（AI検索最適化）の観点からも重要度が高まっています。コンテンツの意味を構造化し、機械読み取り可能な形式で提供することが、AI時代のWebサイトの基礎です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 19_12_19.png" alt="構造化データ・JSON-LD・Schema.org実装のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Schema.orgタイプ一覧 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Schema Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              主要なSchema.orgタイプと実装箇所
            </h2>
            <div className="max-w-5xl overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>Schema Type</th>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>効果・概要</th>
                    <th className="text-left py-3 font-semibold" style={{ color: "#0d1b2a" }}>実装ページ</th>
                  </tr>
                </thead>
                <tbody>
                  {schemaTypes.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DC" }}>
                      <td className="py-4 pr-6 font-mono font-semibold" style={{ color: "#0d1b2a" }}>{row.type}</td>
                      <td className="py-4 pr-6 leading-[1.7]" style={{ color: "#374151" }}>{row.desc}</td>
                      <td className="py-4 leading-[1.7]" style={{ color: "#6B7280" }}>{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 実装方法 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Next.jsでの構造化データ実装例
            </h2>
            <div className="max-w-3xl rounded overflow-hidden" style={{ background: "#0d1b2a", border: "1px solid #1e2d3d" }}>
              <div className="px-4 py-2" style={{ background: "#1a2a3a", borderBottom: "1px solid #1e2d3d" }}>
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>app/services/seo/page.tsx</span>
              </div>
              <pre className="p-5 overflow-x-auto text-[12px] leading-[1.8] font-mono" style={{ color: "rgba(255,255,255,0.82)" }}>{`const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1,
          "name": "ホーム", "item": "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", "position": 2,
          "name": "SEO対策",
          "item": "https://www.cypress-all.co.jp/seo" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "SEO対策の費用はいくらですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "初期費用〇〇円〜、月額〇〇円〜です。"
          }
        }
      ]
    }
  ]
};`}</pre>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="構造化データについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="構造化データ実装のご相談"
          body="JSON-LD・Schema.orgの実装からリッチリザルト獲得・AI検索対策まで対応します。"
        />
      </main>
      <Footer />
    </>
  );
}
