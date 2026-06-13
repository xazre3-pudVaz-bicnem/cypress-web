import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "テクニカルSEOとは｜Core Web Vitals・クロール最適化・構造化データ｜株式会社サイプレス",
  description:
    "テクニカルSEOの主要施策を解説。ページ表示速度・Core Web Vitals・クロール最適化・インデックス管理・構造化データ実装・HTTPS化など、技術的な観点からSEO基盤を整える方法を説明します。",
  keywords: ["テクニカルSEO", "Core Web Vitals", "クロール最適化", "構造化データ", "ページ速度", "インデックス管理"],
  openGraph: {
    title: "テクニカルSEOとは｜Core Web Vitals・クロール最適化・構造化データ｜株式会社サイプレス",
    description:
      "テクニカルSEOの主要施策を解説。ページ表示速度・Core Web Vitals・クロール最適化・インデックス管理・構造化データ実装・HTTPS化など、技術的な観点からSEO基盤を整える方法を説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/technical-seo" },
};

const measures = [
  {
    title: "ページ表示速度（Core Web Vitals）",
    body: "Googleのランキング要因として明示されているCore Web Vitalsを最適化します。LCP（最大コンテンツの描画速度）は2.5秒以内・CLS（累積レイアウトシフト）は0.1以下・FID/INP（入力応答性）の改善が主な目標です。画像圧縮・WebP変換・JavaScript遅延読み込み・サーバーレスポンス改善・CDN導入などが主な施策です。",
  },
  {
    title: "クロール最適化（robots.txt・サイトマップ）",
    body: "robots.txtで検索エンジンのクロールを適切に制御し、インデックスさせたくないページ（管理画面・重複ページ・薄いコンテンツ）へのアクセスを制限します。XMLサイトマップを生成・最新化してSearch Consoleに登録することで、重要ページが効率よくクロール・インデックスされる状態を保ちます。",
  },
  {
    title: "インデックス管理",
    body: "noindex属性・canonical属性・URLパラメータ設定を正しく組み合わせ、Googleがインデックスすべきページとそうでないページを明確に管理します。不要なページがインデックスされているとクロールバジェットが消費され、重要ページの評価が希薄化するリスクがあります。Search ConsoleのIndex Coverage報告を定期的に確認します。",
  },
  {
    title: "HTTPS化・セキュリティ",
    body: "HTTPSはGoogleのランキングシグナルの一つであり、未対応のサイトはブラウザから「安全でない」と警告が表示されユーザーの離脱を招きます。SSL証明書の取得・設定・更新管理はもちろん、Mixed Content（HTTP・HTTPS混在）の解消・HSTSヘッダーの設定なども行います。",
  },
  {
    title: "モバイルファースト対応",
    body: "Googleはモバイルファーストインデックスによりスマートフォンのクロールをデスクトップより優先します。モバイル表示でのレイアウト崩れ・フォントサイズ・タップターゲットサイズ・コンテンツの等価性を確認します。Google Search ConsoleのモバイルユーザビリティレポートやPageSpeed InsightsのモバイルスコアをKPIとして管理します。",
  },
  {
    title: "構造化データ実装",
    body: "JSON-LD形式でSchema.orgの構造化データを実装し、Googleがページの種類・内容・エンティティを正確に理解できるよう支援します。FAQPage・BreadcrumbList・Organization・LocalBusiness・Article・Productなど、ページ種別に応じた適切なスキーマを選択します。リッチリザルト対象となれば検索結果の視認性・CTRが向上します。",
  },
  {
    title: "重複ページ・正規化処理",
    body: "wwwあり/なし・http/https・末尾スラッシュあり/なしなど、同一コンテンツが複数URLで存在する状態を解消します。301リダイレクトによる統一・canonical属性の設定・パラメータのSearch Console登録を組み合わせて対応します。ECサイトや大規模サイトではURLが多岐にわたるため特に重要です。",
  },
  {
    title: "404・リダイレクト設定",
    body: "廃止したページへのリンクが404エラーになると、そのページへの評価・流入が失われます。サイトリニューアル・URL変更の際は必ず301リダイレクトを設定します。定期的なリンク切れチェック（Broken Link Check）を実施し、不要な404を減らすことでクロール効率を高めます。",
  },
];

const faqItems = [
  {
    q: "テクニカルSEOと内部SEOの違いは何ですか？",
    a: "内部SEOはタイトルタグ・メタディスクリプション・見出し・内部リンクなどHTMLコンテンツレベルの最適化を指します。テクニカルSEOはそれよりも深い技術層——クロール設定・インデックス管理・サーバー応答・パフォーマンス・構造化データなどを扱います。両者は重複する部分もありますが、テクニカルSEOは開発者や技術者と連携して対応する施策が多い点が特徴です。",
  },
  {
    q: "Core Web VitalsはSEOにどれだけ影響しますか？",
    a: "Googleは2021年よりCore Web VitalsをPage Experience シグナルとしてランキングに組み込んでいます。影響度はコンテンツの品質や被リンクに比べると限定的ですが、同等のコンテンツ品質のサイトが競合している場合には順位差を生む要因になります。また速度改善はユーザー体験の向上・直帰率低下・コンバージョン率改善にも直結するため、SEO以外の観点でも重要な施策です。",
  },
  {
    q: "サイトマップはどのくらいの頻度で更新すべきですか？",
    a: "新しいページを追加・削除するたびに自動更新されるよう設定するのが理想です。WordPressなどのCMSはSEOプラグインが自動生成してくれます。Next.jsなどでは静的生成時やビルド時にサイトマップを動的に生成する実装が一般的です。また更新後はSearch ConsoleのサイトマップレポートにURLを登録し、インデックス状況を確認することをお勧めします。",
  },
  {
    q: "JavaScriptで構築されたサイトはSEOに不利ですか？",
    a: "GoogleはJavaScriptを実行してコンテンツをレンダリングできますが、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）に比べてクロールに時間がかかる場合があります。Next.jsなどのSSR/SSGフレームワークを使用すれば、JavaScriptサイトでもSEOに最適化された実装が可能です。クライアントサイドのみで描画するSPAは、適切な対策なしではインデックスに問題が生じる場合があります。",
  },
  {
    q: "構造化データを実装したのにリッチリザルトが表示されません",
    a: "構造化データの実装がGoogleのガイドラインを満たしていても、リッチリザルトの表示は保証されません。リッチリザルトテストで構造化データが正しく認識されていることを確認し、Search Consoleのリッチリザルトレポートでエラーがないかチェックします。インデックスされてから実際にリッチリザルトが表示されるまでに数週間かかるケースもあります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・構造最適化" },
  { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/web-design", label: "Webデザイン", desc: "技術SEOに強いサイト制作" },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>テクニカルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Technical SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}>
              テクニカルSEO
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              テクニカルSEOとは、Webサイトの技術的な側面を最適化することで、検索エンジンが効率よくサイトをクロール・インデックス・評価できる基盤を整える施策です。コンテンツが正当に評価されるための「舞台裏の環境整備」と言えます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="デジタルオーバーレイとキーボード入力によるWeb技術のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.35)" }} />
        </section>

        {/* テクニカルSEOとは */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>テクニカルSEOとは</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                テクニカルSEO（Technical SEO）とは、ページ表示速度・クロール設定・インデックス管理・セキュリティ・構造化データなど、サイトの技術的インフラをSEOの観点から最適化する施策群です。HTMLの記述や文章内容を扱う内部SEOやコンテンツSEOとは異なり、サーバー設定・CMS設定・コードレベルの対応が中心となります。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                検索エンジンのクローラーは、サイト全体を巡回してコンテンツを収集・評価しますが、技術的な問題があるとクロールが妨げられ、良質なコンテンツが正しくインデックスされない事態が起きます。テクニカルSEOの役割は「検索エンジンが何の障害もなくサイトを理解できる状態」を作ることです。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                特に大規模サイト・ECサイト・JavaScriptフレームワーク製サイトでは、テクニカルSEOの問題がSEO全体のボトルネックになるケースが多く、優先的な診断・改善が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* テクニカルSEOの主要施策 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#9CA3AF" }}>Measures</p>
              <h2 className="font-black text-[22px] md:text-[26px]" style={{ color: "#0F172A" }}>テクニカルSEOの主要施策</h2>
            </div>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 表示速度がSEOに影響する理由 */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>表示速度がSEOに影響する理由</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                Googleは2021年6月のPage Experience Updateで、Core Web VitalsをSEOランキングシグナルとして正式に組み込みました。LCP（最大コンテンツ描画）・CLS（視覚的安定性）・INP（入力応答性）の3指標が評価対象です。これらはすべて「ユーザーがページを実際に使う際の体験」を数値化したものです。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                表示速度と直帰率には強い相関があります。Googleの調査では、ページの読み込みが3秒を超えると直帰率が32%増加するとされています。つまり速度改善は単なるSEO施策ではなく、ユーザー体験とコンバージョン率の改善に直結するビジネス課題でもあります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                具体的な改善目標としては、PageSpeed InsightsでモバイルのPerformanceスコア70以上・LCP 2.5秒以内・CLS 0.1以下を目指します。Next.jsや最新の画像最適化技術を活用することで、高いデザイン品質を維持しながらこれらの基準を達成できます。
              </p>
            </div>
          </div>
        </section>

        {/* 2-col: image + text — Core Web Vitals */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_19_44.png"
                  alt="ノートパソコンでアクセス解析ダッシュボードを確認している様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-black text-[22px] mb-5" style={{ color: "#0F172A" }}>Core Web Vitalsの3指標を理解する</h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  Googleのランキングシグナルとして機能するCore Web Vitalsは、LCP（最大コンテンツの描画）・CLS（視覚的安定性）・INP（入力応答性）の3指標で構成されます。LCPは2.5秒以内・CLSは0.1以下が目標値です。Next.jsの画像最適化・コード分割・CDN活用を組み合わせることで、高いデザイン品質を保ちながらこれらの基準を達成できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="テクニカルSEOについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="テクニカルSEOのご相談"
          body="既存サイトの技術診断から改善実装まで、サイプレスが一貫して対応します。Core Web Vitals改善・構造化データ実装・クロール最適化など、お気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
