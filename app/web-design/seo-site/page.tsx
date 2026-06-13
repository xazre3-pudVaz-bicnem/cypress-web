import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "SEOに強いホームページ制作 | 検索流入を生む設計",
  description: "株式会社サイプレスのSEO対応Webサイト制作。URL設計・内部リンク・構造化データ・Core Web Vitals対応・モバイルファーストまで、SEOを最初から組み込んだWebサイトを制作します。",
  keywords: ["SEOに強いホームページ", "SEO対応サイト制作", "SEO設計", "Core Web Vitals", "構造化データ"],
  openGraph: {
    title: "SEOに強いホームページ制作 | 株式会社サイプレス",
    description: "SEOを最初から組み込んだWebサイト制作。検索流入を継続的に生む設計を提供します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/web-design/seo-site" },
};

const CONDITIONS = [
  {
    num: "01",
    title: "適切なURL設計・サイト階層構造",
    body: "Googleがサイト構造を正しく理解できるよう、論理的なURL階層と階層ごとのコンテンツ配置を設計します。後からURL構造を変えると既存の検索評価が失われるリスクがあるため、制作開始前にしっかり設計します。",
  },
  {
    num: "02",
    title: "タイトルタグ・メタ情報の最適化",
    body: "検索結果に表示されるタイトルタグ・メタディスクリプションをページごとに最適化します。キーワードを含めながらも、クリックしたくなる文言を設計します。OGPタグ・構造化データも合わせて実装します。",
  },
  {
    num: "03",
    title: "内部リンクの設計",
    body: "関連するページ同士を適切にリンクでつなぎ、Googleのクロールを促進するとともに、ユーザーが関連情報にアクセスしやすい導線を作ります。内部リンク設計はSEO評価の分散とサイト滞在時間の改善に直結します。",
  },
  {
    num: "04",
    title: "表示速度・Core Web Vitals対応",
    body: "Googleは表示速度（LCP・FID・CLS）をランキング要素に含めています。画像の最適化・遅延読み込み・コードの圧縮・CDN活用などにより、表示速度スコアの改善を実施します。",
  },
  {
    num: "05",
    title: "モバイルファースト設計",
    body: "Googleはモバイル版のサイトを基準にインデックスします（モバイルファーストインデックス）。スマートフォンでの表示・操作性・読みやすさを優先した設計を行います。",
  },
  {
    num: "06",
    title: "構造化データの実装",
    body: "Organization・LocalBusiness・FAQPage・BreadcrumbList・Article等のSchema.org構造化データを実装します。リッチスニペット表示やAI検索からの引用にも効果的です。",
  },
  {
    num: "07",
    title: "コンテンツ更新のしやすさ（CMS設計）",
    body: "SEOの観点からは、コンテンツの継続的な更新が検索評価を維持・向上させます。更新が続けやすいCMS設計・記事テンプレートの整備・更新フローの構築も支援します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "SEOを意識したサイトと普通のサイトの制作費の違いはありますか？",
    a: "SEO設計はデザインや実装と並行して行うため、大幅なコスト増にはなりません。ただし、コンテンツのライティング・構造化データ実装・ページ速度最適化などを含む場合は、その分の費用が加わります。",
  },
  {
    q: "制作後にSEOの効果が出るまでどのくらいかかりますか？",
    a: "Googleのインデックスと評価には一般的に3〜6ヶ月以上かかります。競合状況・キーワード・コンテンツの質によっても異なります。サイト公開後の継続的なコンテンツ更新と改善が効果を加速させます。",
  },
  {
    q: "今あるサイトのSEO改善もできますか？",
    a: "はい。既存サイトのSEO診断から始め、優先度の高い改善施策をご提案します。コンテンツ改善・内部リンク整備・表示速度改善・構造化データ追加など、個別に対応可能です。",
  },
  {
    q: "Core Web Vitalsとは何ですか？",
    a: "GoogleがWebページのユーザー体験を評価する指標です。LCP（最大コンテンツの読み込み時間）・FID（初回入力遅延）・CLS（視覚的安定性）の3つがあり、いずれも一定基準を満たすことが推奨されています。",
  },
  {
    q: "ブログ・コラム機能もつけてもらえますか？",
    a: "はい。SEOに効果的なブログ・コラム機能の実装、記事テンプレートの設計、更新のしやすいCMS構成まで対応します。記事内のSEO最適化（見出し構成・内部リンク・meta情報）も一緒に整えます。",
  },
];

export default function SeoSitePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              SEO-Ready Website
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              SEOに強いホームページ制作
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              検索流入を継続的に生み出す設計を、制作の最初から組み込みます。SEOは後付けするよりも設計段階から取り組む方が効果的です。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/web-design" className="hover:underline" style={{ color: "#6B7280" }}>ホームページ制作</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>SEOに強いホームページ制作</li>
            </ol>
          </div>
        </nav>

        {/* ===== Hero Image ===== */}
        <div className="relative w-full overflow-hidden" style={{ height: "360px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="SEO対応サイトのアナリティクス確認"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* ===== Concept ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                What It Means
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                SEOを意識したサイト制作とは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                「SEOを後からやる」というアプローチには限界があります。URL構造・サイト階層・ページのタイトル・内部リンクの設計は、サイトを作ってから変更すると既存の検索評価に影響が出るリスクがあります。SEOで成果を出すには、制作と同時に設計することが最も効率的です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                サイプレスでは、ヒアリングの段階からターゲットキーワード・競合分析・サイト構造の設計を行います。デザインや実装と並行してSEO設計を進めることで、公開時点からGoogleに評価されやすい状態のサイトを届けます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、サイト公開はゴールではなくスタートです。公開後にコンテンツを継続的に更新・改善できる体制を整えることで、検索評価は時間とともに高まります。更新しやすいCMS設計とコンテンツ改善の継続支援もあわせて提供します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Conditions ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Checklist
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                SEO対応Webサイトの条件
              </h2>
            </div>
            <div>
              {CONDITIONS.map((item) => (
                <div
                  key={item.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== SEOサイト設計のポイント 2-col ===== */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 00_32_58.png"
                  alt="SEOサイト設計の提案・資料確認"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                  Design Points
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#0F172A" }}
                >
                  SEOサイト設計のポイント
                </h2>
                <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  SEOに強いサイトを作るには、URL構造・サイト階層・内部リンク・コンテンツ計画を制作開始前に設計することが不可欠です。後から変更しようとすると検索評価に影響が出るリスクがあります。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  サイプレスはヒアリング段階からキーワード戦略・競合分析を行い、公開時点から検索に強い状態のサイトを納品します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="SEOに強いサイト制作 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス一覧" },
            { href: "/web-design/wordpress", label: "WordPress制作", desc: "更新しやすいCMS構成" },
            { href: "/services/seo", label: "SEO対策", desc: "検索順位改善の総合支援" },
            { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "サイト構造・速度の改善" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="SEOに強いサイト制作のご相談"
          body="検索から集客できるWebサイトを作りたい方は、まずはご相談ください。現在のサイト状況と目標をお聞きし、SEO設計を含めた制作プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
