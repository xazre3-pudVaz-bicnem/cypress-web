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
    "構造化データ（JSON-LD・Schema.org）の基礎から実装まで解説。FAQPage・BreadcrumbList・Article・Organization・LocalBusiness・WebSiteのマークアップ方法とリッチリザルト獲得・AIO対策を網羅。",
  keywords: ["構造化データ", "Schema.org", "JSON-LD", "リッチリザルト", "FAQPage", "BreadcrumbList", "AIO対策", "構造化データ実装", "リッチスニペット"],
  openGraph: {
    title: "構造化データ（Schema.org）実装とは｜リッチリザルト・AI検索対策｜株式会社サイプレス",
    description: "構造化データ実装の実践ガイド。JSON-LD・Schema.orgのマークアップからリッチリザルト獲得・AI検索対策まで解説。",
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
    a: "Google Search Console の「拡張機能」セクションで構造化データのエラー・警告を確認できます。また、単一ページの確認にはGoogle Rich Results Test（search.google.com/test/rich-results）が便利です。実装後は必ずこれらのツールで検証します。",
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
    a: "Next.jsのApp RouterではPageコンポーネント内にJSON-LDをscriptタグで埋め込みます。script要素にtype='application/ld+json'を指定し、dangerouslySetInnerHTMLでJSON文字列を渡す形式です。layoutファイルにOrganization・WebSiteを、各pageファイルにBreadcrumbList・FAQPage・Articleを実装するのが一般的な設計です。",
  },
  {
    q: "BreadcrumbListの構造化データはどう書きますか？",
    a: "BreadcrumbListはitemListElement配列に各パンくずをListItemとして記述します。各ListItemにはposition（順番）・name（ページ名）・item（URL）を指定します。ページの深さに応じて2〜5階層程度が標準的です。全ページのlayout.tsxには入れず、ページごとのpage.tsxで実装するのが保守性の観点から推奨されます。",
  },
  {
    q: "Articleの構造化データはブログ以外でも使いますか？",
    a: "Articleタイプはブログ記事だけでなく、ニュース記事・コラム・ガイドページにも使用します。また、より詳細なサブタイプとしてNewsArticle（ニュース）・TechArticle（技術記事）・BlogPosting（ブログ投稿）があります。著者（author）・公開日（datePublished）・更新日（dateModified）・見出し（headline）の記述が必須項目です。",
  },
  {
    q: "Productの構造化データはECサイト以外でも使いますか？",
    a: "Productタイプはオンラインショップだけでなく、SaaSサービス・ソフトウェア・有形商品を扱うBtoBサービスページにも活用できます。価格（offers）・説明（description）・画像（image）を記述し、AggregateRatingと組み合わせることで星評価のリッチリザルト表示を狙えます。",
  },
  {
    q: "WebSite構造化データのSearchActionは何に使いますか？",
    a: "WebSiteタイプにSearchActionを追加すると、サイト内検索機能をGoogleに伝えることができます。Googleの検索結果にサイト内検索ボックスが表示される「サイトリンク検索ボックス」のリッチリザルトを狙えます。サイト内検索機能を持つ大規模サイトで特に有効です。",
  },
  {
    q: "構造化データを実装するとリッチリザルトは必ず表示されますか？",
    a: "構造化データの実装はリッチリザルト表示の前提条件ですが、表示を保証するものではありません。Googleはコンテンツの品質・検索クエリとの関連性・スパムポリシーへの準拠なども総合的に判断します。ただし正しく実装されていれば表示される可能性は高まります。",
  },
  {
    q: "Google Rich Results Testはどのように使いますか？",
    a: "Google Rich Results Test（search.google.com/test/rich-results）にページのURLを入力するか、HTMLコードを直接貼り付けることで、そのページで検出される構造化データの種類とエラーを確認できます。実装後の検証ツールとして毎回使用することを推奨します。エラーがある場合は詳細なメッセージで原因を特定できます。",
  },
  {
    q: "構造化データのスパムポリシーとは何ですか？",
    a: "Googleは構造化データの誤用を禁止しています。ページに存在しないコンテンツのマークアップ・虚偽の評価・意図的に誤解を招く情報の構造化はスパムとみなされペナルティを受ける可能性があります。構造化データはページ上に実際に表示されているコンテンツのみを反映する必要があります。",
  },
  {
    q: "Organizationと LocalBusinessはどちらを使うべきですか？",
    a: "実店舗や地域に密着したサービスを提供するビジネスはLocalBusiness（またはそのサブタイプ）を使います。住所・電話・営業時間を構造化できます。オンラインサービスや全国対応の企業・メディアはOrganization（または Corporation）を使います。両方を@graphで組み合わせることも可能です。",
  },
  {
    q: "構造化データの更新頻度はどのくらいですか？",
    a: "ページのコンテンツが変更されたときに合わせて更新します。FAQの内容変更・営業時間の変更・価格の変更などは速やかに反映します。記事の場合はdateModifiedを更新日に合わせて更新します。静的なOrganization情報は変更がなければそのまま維持できます。",
  },
  {
    q: "WordPress・その他CMSで構造化データを実装するには？",
    a: "WordPressではYoast SEO・Rank MathなどのSEOプラグインが基本的な構造化データを自動生成します。ただし細かいカスタマイズは手動での実装が必要な場合があります。Next.js・Nuxt.jsなどのフレームワークでは各ページのコンポーネントに直接JSON-LDを記述するのが最も柔軟で確実です。",
  },
  {
    q: "構造化データの実装費用はどのくらいですか？",
    a: "サイプレスでは、新規サイト制作時に構造化データの実装を標準で含めています。既存サイトへの追加実装は、対象ページ数・CMSの種類・実装するタイプによって異なります。まずは無料相談にて現状診断と見積もりをご提供します。",
  },
  {
    q: "構造化データの実装後、効果はいつ頃から出ますか？",
    a: "GoogleがページをクロールしてSearch Consoleに反映されるまで数日〜2週間程度かかります。リッチリザルトの表示が確認できた後、クリック率の変化はSearch Consoleの「検索パフォーマンス」レポートで追跡できます。効果の実感には通常1〜3ヶ月の観察期間が必要です。",
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
  { href: "/seo/search-console", label: "Search Console活用", desc: "リッチリザルトのエラー確認" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "E-E-A-T対応の記事設計" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルでの構造化データ対応" },
  { href: "/seo/page-speed", label: "ページ速度最適化", desc: "Core Web Vitals改善" },
  { href: "/knowledge/aio", label: "AIO基礎ガイド", desc: "AI検索最適化の入門" },
  { href: "/knowledge/schema-org", label: "Schema.org辞典", desc: "主要タイプの詳細解説" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "構造化データ込みのサイト制作" },
  { href: "/seo/faq-seo", label: "FAQ SEO対策", desc: "FAQPageマークアップで順位向上" },
  { href: "/seo/e-e-a-t", label: "E-E-A-T対策", desc: "権威性・信頼性の構造化" },
  { href: "/checklist/structured-data", label: "構造化データチェックリスト", desc: "実装後の確認リスト" },
  { href: "/seo/breadcrumb", label: "パンくずSEO", desc: "BreadcrumbList設計と実装" },
  { href: "/column/rich-results", label: "リッチリザルト解説", desc: "各タイプの表示例と狙い方" },
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
        {/* Hero */}
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

        {/* Hero image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.jpg" alt="構造化データ・JSON-LD・Schema.org実装のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl flex flex-col gap-0">
              {[
                "構造化データ（JSON-LD・Schema.org）の仕組みと、検索エンジン・AI検索への働き方",
                "FAQPage・BreadcrumbList・Organization・Article・LocalBusiness など主要タイプの役割と使い分け",
                "Next.jsのApp Routerで構造化データを実装する具体的な方法とファイル設計",
                "Google Rich Results Testを使った実装後の検証手順とエラーの読み方",
                "AI検索（ChatGPT・Gemini・Perplexity）で引用されやすくするためのAIO対策との関係",
                "Search Consoleの「拡張機能」タブで構造化データのエラーを継続的に監視する方法",
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              構造化データの未実装・実装ミスは、リッチリザルトの機会損失だけでなく、AI検索での引用率低下にも直結します。以下は現場でよく見られる課題です。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { t: "構造化データをまったく実装していない", b: "HTML・CSSは整っていても、JSON-LDが一行も書かれていないサイトは依然として多数あります。Google検索でのリッチリザルト獲得機会をすべて逃している状態です。" },
                { t: "JSON-LDの記述に構文エラーがある", b: "JSONのカンマ忘れ・括弧の対応ズレ・プロパティ名のスペルミスなどで構造化データが無効になっていることがあります。Rich Results Testで定期的に検証する習慣が必要です。" },
                { t: "FAQページに FAQPageマークアップがない", b: "質問と回答を並べたページはあるものの、FAQPageタイプの構造化データが未実装でリッチリザルトが出ていないケースが多くあります。FAQ形式のコンテンツを持つページは最優先で実装すべき項目です。" },
                { t: "BreadcrumbListが全ページに入っていない", b: "トップページだけに実装されていたり、一部のテンプレートにしか含まれていないケースがあります。パンくずリストの表示は全ページへの実装が前提です。" },
                { t: "LocalBusiness情報が未設定または古い", b: "地域ビジネスサイトでOrganizationのみ実装し、LocalBusinessタイプが未設定の場合があります。住所・電話番号・営業時間の構造化がないと、ローカル検索（Googleマップ）での評価強化につながりません。" },
                { t: "AI検索（AIO）対策としての構造化データを認識していない", b: "リッチリザルトのみを目的として実装しているため、ChatGPT・Gemini・Perplexityへの最適化という視点がありません。AIO向けには著者情報（author）・引用元（citation）・FAQPageを優先的に整備します。" },
                { t: "ページに存在しないコンテンツをマークアップしている", b: "Googleのスパムポリシーに違反する実装で、ペナルティの対象になります。ページ上に実際に表示されていない情報（存在しない口コミ・架空のFAQ）を構造化データに含めてはいけません。" },
                { t: "Next.jsのlayout.tsxとpage.tsxの役割分担が曖昧", b: "Organizationをlayoutとpageのどちらにも重複して実装したり、BreadcrumbListをlayoutに置いてページごとに変えられない設計になっているケースがあります。設計ルールを定めてから実装することが重要です。" },
                { t: "Search Consoleのエラーを放置している", b: "構造化データのエラーがSearch Consoleに蓄積しているにもかかわらず、「拡張機能」タブを確認していないサイトが多くあります。エラーを放置するとリッチリザルトが失効する場合があります。" },
                { t: "更新されたコンテンツに構造化データが追従していない", b: "FAQの質問内容・価格・営業時間などを更新したにもかかわらず、JSON-LDが古い情報のまま残っているケースがあります。コンテンツ更新フローに構造化データの更新チェックを含める必要があります。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC", maxWidth: "900px", marginTop: "0" }} />
          </div>
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

        {/* C: 実装タイプ別の解説 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Type Reference</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              実装タイプ別の解説
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              各Schema.orgタイプは用途と実装すべきプロパティが異なります。それぞれの目的と書き方を理解してから実装することで、エラーのない正確な構造化データを構築できます。
            </p>
            <div className="max-w-5xl flex flex-col gap-0">
              {[
                {
                  type: "Organization",
                  label: "組織情報",
                  body: "会社名（name）・公式URL（url）・ロゴ画像（logo）・住所（address）・電話番号（telephone）・SNSプロフィールURL（sameAs）を記述します。Googleのナレッジパネルに情報が表示されやすくなり、E-E-A-Tの権威性向上に貢献します。サイト全体のlayout.tsxに一度実装するのが標準的な設計です。",
                },
                {
                  type: "LocalBusiness",
                  label: "地域ビジネス",
                  body: "Organizationのサブタイプで、実店舗・地域ビジネスに使います。営業時間（openingHoursSpecification）・対応エリア（areaServed）・地理座標（geo）・価格帯（priceRange）を追加で記述します。RestaurantやBeautySalonなどの業種別サブタイプを使うとより精度が上がります。ローカルパックへの表示精度向上が主な目的です。",
                },
                {
                  type: "FAQPage",
                  label: "よくある質問",
                  body: "mainEntityプロパティにQuestion・Answerの配列を記述します。Questionにはname（質問文）、Answerにはtext（回答文）を入力します。Google検索結果でアコーディオン形式の拡張スニペットが表示される可能性があります。AI検索での引用率向上にも直接貢献するため、すべてのFAQセクションに実装を推奨します。",
                },
                {
                  type: "BreadcrumbList",
                  label: "パンくずリスト",
                  body: "itemListElementにListItemの配列を記述し、各要素にposition（順番の数値）・name（表示名）・item（絶対URL）を入力します。ページの階層が深いほど効果的です。検索結果のURLをパンくず形式で表示するリッチリザルトにつながり、ユーザーがサイト構造を把握しやすくなります。全ページのpage.tsxに実装します。",
                },
                {
                  type: "Article / BlogPosting",
                  label: "記事・ブログ投稿",
                  body: "見出し（headline）・著者（author）・公開日（datePublished）・更新日（dateModified）・画像（image）・説明（description）を記述します。著者をPersonタイプでネストし、名前・プロフィールURLを含めることでAI検索向けE-E-A-T（経験・専門性・権威性・信頼性）の強化につながります。ブログ記事ページのpage.tsxに個別実装します。",
                },
                {
                  type: "Product",
                  label: "商品・サービス製品",
                  body: "商品名（name）・説明（description）・画像（image）・価格（offers内のprice・priceCurrency）・ブランド（brand）を記述します。AggregateRatingと組み合わせることで、検索結果に星評価（評価スコアとレビュー件数）を表示させることができます。ECサイトだけでなく、SaaSや有形商品を扱うBtoBサービスにも有効です。",
                },
                {
                  type: "Review / AggregateRating",
                  label: "口コミ・評価",
                  body: "ratingValue（平均評価スコア）・reviewCount（レビュー件数）・ratingCount（評価件数）を記述します。Product・LocalBusiness・Articleなど他のタイプに組み合わせて使います。ページ上に実際の口コミ・評価データが存在することが前提で、架空のデータを使うとGoogleのスパムポリシー違反になります。",
                },
                {
                  type: "WebSite",
                  label: "サイト全体",
                  body: "サイト名（name）・URL（url）に加え、SearchActionをpotentialActionに記述することでサイト内検索機能をGoogleに伝えることができます。検索ボックスのリッチリザルト（サイトリンク検索ボックス）につながる可能性があります。layout.tsxに一度実装し、全ページで共有します。",
                },
                {
                  type: "Service",
                  label: "サービスページ",
                  body: "サービス名（name）・説明（description）・提供者（provider）・エリア（areaServed）・価格情報（offers）を記述します。明確なサービスページを持つBtoBサービスサイトで活用します。検索エンジンがサービスの内容を正確に把握することで、関連キーワードでのインデックス精度が向上します。",
                },
                {
                  type: "VideoObject",
                  label: "動画コンテンツ",
                  body: "動画のタイトル（name）・説明（description）・サムネイル（thumbnailUrl）・公開日（uploadDate）・動画URL（contentUrl）を記述します。YouTube埋め込みだけでなく、自社ホスティングの動画にも対応します。Google検索での動画リッチリザルト（サムネイル付きの結果）獲得を狙えます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.type}</p>
                      <span className="text-[11px] font-semibold tracking-wide" style={{ color: "#9CA3AF" }}>{item.label}</span>
                    </div>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装方法コードブロック */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Next.jsでの構造化データ実装例
            </h2>
            <p className="text-[14px] leading-[1.9] mb-8 max-w-2xl" style={{ color: "#374151" }}>
              Next.jsのApp Routerでは、各ページのpage.tsxコンポーネント内にscriptタグを直接記述します。typeをapplication/ld+jsonに指定し、dangerouslySetInnerHTMLプロパティでJSON文字列を渡すのが標準的な方法です。@graphを使って複数のスキーマをひとつのscriptタグにまとめることで、ページ内のscriptタグ数を抑えられます。
            </p>
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
            <div className="mt-10 max-w-3xl">
              <p className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a" }}>layout.tsxへのOrganization・WebSite実装</p>
              <p className="text-[14px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                サイト全体で共通のOrganizationとWebSiteはルートlayout.tsxに一度実装します。会社名・住所・電話・ロゴURL・SNSのsameAs配列を記述します。一方でBreadcrumbList・FAQPage・Articleはページごとに内容が変わるため、各page.tsxに個別実装します。この役割分担を徹底することで、スキーマの重複や不整合を防ぎます。
              </p>
              <p className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a" }}>Google Rich Results Testでの検証手順</p>
              <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                実装後はsearch.google.com/test/rich-resultsにアクセスし、対象ページのURLを入力して「テスト」を実行します。「有効なアイテム」として認識されたタイプが一覧表示されます。「エラーのあるアイテム」が表示された場合は、詳細メッセージを確認して必須プロパティの追加や値の修正を行います。実装のたびにこのツールで検証することを推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* D: 実装フロー */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              構造化データ実装フロー
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              いきなりコードを書くのではなく、サイトのページ構成と実装すべきタイプを整理してから着手することで、漏れや重複のない構造化データ設計ができます。
            </p>
            <div className="max-w-3xl flex flex-col gap-0">
              {[
                { t: "サイトのページ構成を棚卸しする", b: "トップページ・サービスページ・ブログ・会社概要・コンタクトなど、すべてのページタイプをリストアップします。各ページにどのSchema.orgタイプが該当するかをマッピングします。" },
                { t: "優先順位を決める", b: "効果の高い順（FAQPage → BreadcrumbList → Organization → LocalBusiness → Article）で実装優先度を設定します。トラフィックの多いページから着手するのが基本方針です。" },
                { t: "layout.tsxにOrganization・WebSiteを実装する", b: "サイト全体で共通のスキーマをルートレイアウトに配置します。会社情報・ロゴ・SNSリンク・サイト名・SearchActionを記述します。" },
                { t: "各ページのpage.tsxにBreadcrumbListを実装する", b: "全ページに対してそのページの階層構造を反映したBreadcrumbListを実装します。ページ深度に応じてListItemの数を調整します。" },
                { t: "FAQセクションを持つページにFAQPageを実装する", b: "FAQを掲載しているすべてのページを対象に、mainEntityにQuestion・Answerを記述します。Q&AはページのHTMLに実際に表示されている内容と一致させます。" },
                { t: "ブログ・コラムページにArticleを実装する", b: "記事ごとにheadline・author・datePublished・dateModified・imageを記述します。著者はPersonタイプでネストし、プロフィールURLも含めます。" },
                { t: "Google Rich Results Testで全タイプを検証する", b: "実装したすべてのページタイプをRich Results Testで確認し、エラーがないことを確認します。エラーがあれば原因を特定して修正します。" },
                { t: "Search ConsoleでURLをインスペクションしてインデックスリクエストを送る", b: "Search ConsoleのURL検査ツールで実装ページのURLを入力し、「インデックス登録をリクエスト」を実行します。Googleのクロールを促進します。" },
                { t: "Search Consoleの「拡張機能」で定期監視を設定する", b: "Search Consoleの「拡張機能」セクションを定期的に確認し、構造化データのエラー・警告が蓄積していないかをチェックします。コンテンツ更新のたびに確認します。" },
                { t: "コンテンツ更新フローに構造化データの更新チェックを組み込む", b: "FAQの変更・営業時間の変更・記事の更新時に構造化データも連動して更新する運用ルールを設けます。JSON-LDとHTMLコンテンツの整合性を常に保ちます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              構造化データの実装効果はリッチリザルトの表示確認だけでなく、Search Consoleのデータを通じて定量的に追跡できます。以下のKPIを定点観測します。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { kpi: "クリック率（CTR）の変化", how: "Search Consoleの「検索パフォーマンス」レポートで、リッチリザルトが表示されるようになったページのCTRを構造化データ実装前後で比較します。FAQPageのリッチリザルトが出ると、CTRが向上するケースがあります。" },
                { kpi: "リッチリザルトの表示件数", how: "Search Consoleの「拡張機能」セクションで、FAQリッチリザルト・パンくずリスト表示の件数推移を確認します。実装から数週間後に数字が増加していれば成功のサインです。" },
                { kpi: "構造化データのエラー件数", how: "Search Consoleの「拡張機能」でエラー件数を定期的にモニタリングします。エラーが0件に近い状態を維持することが目標です。新しいページ追加時やコンテンツ更新後に特に注意します。" },
                { kpi: "インデックス数の変化", how: "Search Consoleの「カバレッジ」レポートでインデックス済みページ数を確認します。構造化データ実装によりクローラーがページ内容を正確に把握できると、インデックス率が改善することがあります。" },
                { kpi: "AI検索からの流入数", how: "Google Analytics 4の参照元レポートでChatGPT・Gemini・Perplexityからの流入が計測できる場合は、構造化データ実装前後で変化を追跡します。AIO効果の定量評価につながります。" },
                { kpi: "対象キーワードでの検索順位", how: "構造化データを実装したページが対象とするキーワードでの平均掲載順位をSearch Consoleで追跡します。構造化データ単体で順位が劇的に変わるわけではありませんが、中長期的なE-E-A-T向上との相乗効果を観測します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.how}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC", maxWidth: "900px" }} />
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスの構造化データ実装支援
            </h2>
            <div className="max-w-4xl">
              {[
                { title: "現状の構造化データ診断", body: "Google Rich Results TestとSearch Consoleを使い、現在のサイトで実装済み・未実装・エラーのある構造化データを網羅的に洗い出します。優先度付きの改善リストをご提供します。" },
                { title: "JSON-LD設計と実装", body: "Organization・WebSite・BreadcrumbList・FAQPage・Article・LocalBusiness・Productなど、サイトの種類に応じた最適なJSON-LDを設計・実装します。Next.js・WordPress・カスタムCMSに対応します。" },
                { title: "Rich Results Test・Search Console検証", body: "実装後にGoogle Rich Results TestとSearch ConsoleのURL検査ツールで全タイプを検証します。エラーがある場合は原因を特定して修正し、リッチリザルトの表示要件を満たした状態でリリースします。" },
                { title: "AIO（AI検索）向け構造化データ設計", body: "ChatGPT・Gemini・Perplexityからの引用を意識したFAQPage・Article・Organizationの設計を行います。著者情報・E-E-A-T要素・引用しやすい文章構造との組み合わせで、AI検索への最適化を図ります。" },
                { title: "継続的な監視と更新サポート", body: "コンテンツ更新・ページ追加のたびに構造化データを最新の状態に保つ運用サポートを提供します。Search Consoleのエラー通知への対応も含みます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
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
