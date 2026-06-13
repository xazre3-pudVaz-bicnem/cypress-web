import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "構造化データ（SEO）｜リッチリザルト対応｜株式会社サイプレス",
  description:
    "SEOにおける構造化データ（Schema.org）の役割とリッチリザルト対応を解説。FAQ・パンくず・組織情報・レビューなど主要Schemaの実装方法と、検索結果でのCTR向上効果を詳しく説明します。",
  keywords: ["構造化データ", "Schema.org", "リッチリザルト", "JSON-LD", "FAQSchema", "SEO 構造化データ"],
  openGraph: {
    title: "構造化データ（SEO）｜リッチリザルト対応｜株式会社サイプレス",
    description:
      "SEOにおける構造化データ（Schema.org）の役割とリッチリザルト対応を解説。主要Schemaの実装方法と検索結果でのCTR向上効果を詳しく説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/structured-data" },
};

const schemas = [
  {
    title: "Organization / LocalBusiness",
    body: "企業・店舗の基本情報（名称・住所・電話番号・営業時間・ロゴ・SNSリンク）を構造化します。特にLocalBusinessはGoogleのローカル検索結果での表示を強化し、MEO対策とも連動します。",
  },
  {
    title: "BreadcrumbList（パンくずリスト）",
    body: "サイトの階層構造を検索結果に表示するためのSchemaです。「ホーム > SEO対策 > 構造化データ」のようにパンくずが検索結果に表示されることで、ユーザーがページの位置づけを即座に理解でき、CTR向上につながります。",
  },
  {
    title: "FAQPage",
    body: "FAQページやページ内のQ&Aセクションに実装します。検索結果で質問と回答が展開表示されるリッチリザルトが表示される可能性があり、検索結果の占有面積が大幅に増加します。CTR向上とゼロクリック検索での露出にも貢献します。",
  },
  {
    title: "Article / BlogPosting",
    body: "ブログ記事や解説記事に実装します。著者情報・公開日・更新日・サムネイル画像をGoogleに明示することで、Googleニュースへの掲載機会や記事カルーセルでの表示につながります。E-E-A-Tの観点からも著者情報の構造化は重要です。",
  },
  {
    title: "Product / Offer",
    body: "商品・サービスの価格・在庫・レビューを構造化します。検索結果に価格や評価星が表示されるリッチリザルトが適用され、ECサイトやサービス一覧ページのCTRを大幅に改善できます。",
  },
  {
    title: "Review / AggregateRating",
    body: "お客様の声・レビューの評価点と件数を構造化します。検索結果に星評価（☆☆☆☆☆）が表示されることで、信頼性の視覚化とクリック率向上を同時に実現します。レビューサービスとの連携も可能です。",
  },
  {
    title: "HowTo / SpeakableSpecification",
    body: "手順を伴うコンテンツにはHowToSchemaを実装することで、Googleが手順を構造化データとして認識し、音声検索やサジェストでの露出につながります。SpeakableはAI音声アシスタントが読み上げる箇所を指定するためのSchemaです。",
  },
];

const faqItems = [
  {
    q: "構造化データを実装すると必ずリッチリザルトが表示されますか？",
    a: "構造化データの実装はリッチリザルト表示の「資格」を得ることであり、必ず表示されるわけではありません。Googleが実装を確認し、コンテンツの品質・ページの権威性などを総合的に評価したうえで表示が決定されます。ただし、正しく実装されていれば表示される可能性が大幅に高まります。",
  },
  {
    q: "構造化データはJSON-LDとMicrodataどちらを使うべきですか？",
    a: "GoogleはJSON-LDを推奨しています。JSON-LDはHTMLのheadタグ内にscriptとして記述するため、既存のHTMLを変更せずに追加でき、管理も容易です。Next.jsではApp RouterのmetadataやPageのscriptタグとしてJSON-LDを実装するのが一般的です。",
  },
  {
    q: "構造化データのテストはどうすればできますか？",
    a: "Googleの「リッチリザルト テスト（Rich Results Test）」を使用することで、実装した構造化データが正しく認識されているか確認できます。また、Google Search ConsoleのEnhancement（拡張機能）レポートでサイト全体の構造化データのエラーや警告を確認できます。",
  },
  {
    q: "AIOページの構造化データとSEOページは何が違いますか？",
    a: "このページではSEOのリッチリザルト獲得を目的とした構造化データを中心に解説しています。AIO（AI検索最適化）における構造化データは、ChatGPT・Gemini・Perplexityなどのチャット型AI検索エンジンに情報を正確に伝えるための観点が加わります。AI検索対応の詳細は/aio/structured-dataをご覧ください。",
  },
  {
    q: "すべてのページに構造化データを実装すべきですか？",
    a: "ページの性質に合ったSchemaを優先的に実装します。全ページ共通のOrganization/BreadcrumbListを基本とし、FAQページにはFAQPage、記事にはArticle、サービスページにはServiceやOfferを追加します。不適切なSchemaの実装はGoogleのペナルティ対象になるため、コンテンツと一致したSchemaのみ使用します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/aio/structured-data", label: "AIO×構造化データ", desc: "AI検索対応の構造化データ" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・構造最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
];

export default function StructuredDataSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0d1b2a] transition-colors" style={{ color: "#9ca3af" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9ca3af" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0d1b2a] transition-colors" style={{ color: "#9ca3af" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9ca3af" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>構造化データ</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
              SEO Knowledge
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,46px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              構造化データ（SEO）
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              構造化データとは、WebページのコンテンツをGoogleが機械的に理解できる形式で記述する技術です。Schema.orgで定義された語彙をJSON-LD形式で実装することで、検索結果にリッチリザルト（強調表示）が適用され、CTRの向上とサイトの権威性強化につながります。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="データ分析画面と資料を確認している様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* SEOにおける構造化データの役割 */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                SEOにおける構造化データの役割
              </h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                構造化データとは、Webページのコンテンツをコンピュータが解釈できる形式で記述する技術です。HTML上ではテキストとして書かれていても、Googleはそれが「商品名」なのか「価格」なのか「住所」なのかを正確には判断できません。構造化データを実装することで、「このテキストは会社の電話番号」「このリストはFAQの質問と回答」とGoogleに明示的に伝えることができます。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                SEO観点での主な効果は「リッチリザルト」の獲得です。通常のテキストリンクとして表示される検索結果に対し、リッチリザルトは星評価・FAQ展開・パンくず・価格・営業時間など視覚的に目立つ情報が追加表示されます。検索結果上のスペースが増えることで存在感が増し、クリック率（CTR）の向上が期待できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、構造化データはGoogleのサイト理解精度を高めます。コンテンツの意味・著者・日付・関連エンティティを明示することで、E-E-A-Tの評価にも好影響を与えます。特にYMYL（医療・金融・法律）ジャンルでは著者情報の構造化が評価を左右します。
              </p>
            </div>
          </div>
        </section>

        {/* 実装すべき主要Schema */}
        <section className="py-16 md:py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
                Schema Types
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
                実装すべき主要Schema
              </h2>
            </div>
            <div className="max-w-3xl">
              {schemas.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        {/* 2-col: image + text / AIOとの関係 */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_14_54.png"
                  alt="データを確認しながら分析している様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2vw,24px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
                  AIOとの関係
                </h2>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  構造化データはSEOのリッチリザルト獲得だけでなく、AIO（AI検索最適化）においても重要な役割を担います。ChatGPT・Gemini・Perplexityなどのチャット型AI検索は、信頼できる情報源を選ぶ際にサイトの構造・著者情報・組織情報を参照します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  Organization SchemaやPerson Schema（著者情報）を適切に実装しているサイトは、AIが「信頼できる情報源」と判断しやすくなります。AI検索対応の構造化データについては、
                  <Link href="/aio/structured-data" className="underline hover:opacity-70 transition-opacity" style={{ color: "#1a2332" }}>AIO × 構造化データページ</Link>
                  で詳しく解説しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="構造化データについてよくある質問" bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="構造化データ実装のご相談"
          body="構造化データの実装・リッチリザルト対応をサイプレスがサポートします。現在のサイト状態を確認し、どのSchemaを優先的に実装すべきかご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
