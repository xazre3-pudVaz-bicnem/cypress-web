import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ページ表示速度改善｜Core Web Vitals対策｜株式会社サイプレス",
  description:
    "ページ表示速度とCore Web Vitals（LCP・CLS・FID・INP）がSEOに与える影響を解説。画像最適化・JS削減・CDN活用・Next.js高速化など、表示速度改善の具体的施策をまとめました。",
  keywords: ["ページ速度改善", "Core Web Vitals", "LCP", "CLS", "表示速度 SEO", "Lighthouse"],
  openGraph: {
    title: "ページ表示速度改善｜Core Web Vitals対策｜株式会社サイプレス",
    description:
      "ページ表示速度とCore Web Vitals（LCP・CLS・FID・INP）がSEOに与える影響を解説。表示速度改善の具体的施策をまとめました。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/page-speed" },
};

const measures = [
  {
    title: "画像の最適化（WebP変換・適切なサイズ）",
    body: "画像はページの読み込み時間に最も大きく影響する要素です。JPEG・PNGをWebP形式に変換するだけで、ファイルサイズを平均30〜50%削減できます。Next.jsではnext/imageコンポーネントが自動的にWebP変換・適切なサイズへのリサイズ・遅延読み込みを行うため、実装と同時に最適化が完了します。",
  },
  {
    title: "不要なJavaScriptの削除・遅延読み込み",
    body: "使用していないJavaScriptライブラリの削除、動的インポート（Dynamic Import）によるコード分割、スクロール後に必要なスクリプトの遅延読み込みを実施します。JavaScriptの解析・実行はブラウザに重い処理を要求するため、不要なコードを減らすことがTBT（Total Blocking Time）の改善に直結します。",
  },
  {
    title: "CSSの最適化",
    body: "未使用のCSSを削除（Purge CSS）し、クリティカルCSSをインライン化することで、レンダリングブロッキングを解消します。TailwindCSSはビルド時に未使用クラスを自動除去するため、適切に設定することで本番環境のCSSサイズを大幅に削減できます。",
  },
  {
    title: "CDN（コンテンツデリバリーネットワーク）の活用",
    body: "CDNはWebサイトのコンテンツを世界中の複数サーバーに分散配置し、ユーザーに最も近いサーバーからコンテンツを配信する仕組みです。Vercelはグローバルエッジネットワークを標準搭載しており、Next.jsサイトを最速で配信します。画像・動画・静的ファイルをCDN経由で配信することで、LCPが大幅に改善されます。",
  },
  {
    title: "キャッシュ設定",
    body: "静的ファイル（画像・CSS・JS）に適切なキャッシュヘッダーを設定することで、2回目以降のアクセス時のロード時間を大幅に短縮できます。Vercelは静的アセットに対して自動的に最適なキャッシュ設定を行います。APIレスポンスのキャッシュ戦略もパフォーマンス最適化に有効です。",
  },
  {
    title: "サーバーレスポンスタイムの改善",
    body: "TTFB（Time To First Byte）の改善は、サーバー処理速度・データベースクエリ最適化・サーバーの地理的位置に依存します。Next.jsのServer Components・ISR（Incremental Static Regeneration）・SSGを適切に活用することで、サーバーレスポンスタイムを最小化できます。",
  },
  {
    title: "レンダリングブロッキングリソースの解消",
    body: "headタグ内のCSSや同期的なJavaScriptは、ブラウザのレンダリングをブロックします。CSSの非同期読み込み・JavaScriptへのdefer/async属性の追加・クリティカルCSSのインライン化によってレンダリングブロッキングを解消し、FCP（First Contentful Paint）を改善します。",
  },
  {
    title: "Next.js / Vercelによる高速化",
    body: "Next.jsはSSG（静的生成）・SSR（サーバーサイドレンダリング）・ISR・React Server Componentsなど複数のレンダリング手法を最適に組み合わせることで、コンテンツの特性に応じた最速の配信が可能です。VercelへのデプロイとEdge Functionsの活用により、世界中どこからでも高速なレスポンスを実現します。",
  },
];

const faqItems = [
  {
    q: "Core Web Vitalsのスコアが悪いとSEOに影響しますか？",
    a: "Googleは2021年よりCore Web Vitalsをランキング要因として採用しています。ただし、コンテンツの質・関連性・被リンクなど他のSEO要因に比べると影響は限定的です。しかし、スコアが著しく悪い場合はランキングに悪影響を与え、ユーザー体験の低下による直帰率上昇・滞在時間減少もSEOに間接的に影響します。",
  },
  {
    q: "LCP・CLS・FIDとは何ですか？",
    a: "LCP（Largest Contentful Paint）はページの主要コンテンツが表示されるまでの時間で2.5秒以内が目標です。CLS（Cumulative Layout Shift）は画面上のコンテンツがどれだけ予期せず移動するかの指標で0.1以下が目標です。FID（First Input Delay）はユーザーの最初のインタラクションへの応答時間で、現在はINP（Interaction to Next Paint）に移行しています。",
  },
  {
    q: "Lighthouseスコアと実際のユーザー体験は異なりますか？",
    a: "Lighthouseはラボ環境（制御された条件）での測定であり、実際のユーザー環境とは差が出ることがあります。Googleは実際のユーザーデータ（CrUX: Chrome User Experience Report）もランキング評価に使用しています。Google Search ConsoleのCore Web Vitalsレポートで実際のユーザーデータを確認することが重要です。",
  },
  {
    q: "表示速度改善にはどのくらいのコストがかかりますか？",
    a: "改善の範囲によりますが、画像最適化・未使用CSS/JS削除などは比較的低コストで実施できます。サーバー構成の変更・CDN導入・フレームワーク移行が必要な場合はより大きな投資が必要です。まずはPageSpeed Insights・Lighthouseでボトルネックを特定し、費用対効果の高い施策から着手することをお勧めします。",
  },
  {
    q: "WordPressサイトの表示速度改善は可能ですか？",
    a: "WordPressでも画像最適化プラグイン・キャッシュプラグイン・CDN連携などで改善可能です。ただし、プラグインの多用・重いテーマ・非効率なデータベースクエリがボトルネックになるケースが多く、根本的な高速化にはNext.jsへの移行が有効な場合があります。",
  },
];

const relatedLinks = [
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/web-design/page-speed", label: "表示速度設計", desc: "高速サイト制作の設計" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "最速Webサイトの構築" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "スマートフォン対応" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
];

export default function PageSpeedPage() {
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
              <span className="text-[12px]" style={{ color: "#374151" }}>ページ速度改善</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
              SEO Knowledge
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,46px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              ページ表示速度改善
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ページ表示速度はSEOランキング要因であるだけでなく、ユーザー体験・直帰率・コンバージョン率に直接影響します。Core Web Vitalsで示される指標を改善することは、検索評価とビジネス成果の両方を高めます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="パフォーマンスデータを確認している様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* 表示速度がSEOに影響する理由 */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                表示速度がSEOに影響する理由
              </h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                Googleは2021年6月より「Core Web Vitals」をランキング要因として正式に採用しました。Core Web Vitalsはページの読み込み速度・視覚的安定性・インタラクティブ性を数値化した指標群で、ユーザー体験の質を測定するものです。これらのスコアが悪いサイトは、コンテンツが良くても検索順位に悪影響が出る可能性があります。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-6" style={{ background: "#ece8e0" }}>
                {[
                  { label: "LCP（Largest Contentful Paint）", desc: "主要コンテンツの表示時間。2.5秒以内が合格。ヒーロー画像・大きなテキストブロックが対象。" },
                  { label: "CLS（Cumulative Layout Shift）", desc: "コンテンツの予期しないズレ。0.1以下が合格。広告・画像の遅延表示が原因になりやすい。" },
                  { label: "FID / INP（Input Delay）", desc: "ユーザー操作への応答速度。INPは200ms以下が目標。重いJSが主な原因。" },
                  { label: "TTFB（Time to First Byte）", desc: "サーバーが最初のバイトを返すまでの時間。800ms以下が目標。サーバー性能・CDNが影響。" },
                ].map((item) => (
                  <div key={item.label} className="p-5" style={{ background: "#ffffff" }}>
                    <p className="font-bold text-[13px] mb-1.5" style={{ color: "#0d1b2a" }}>{item.label}</p>
                    <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、表示速度はSEO以外のビジネス指標にも大きく影響します。Googleの調査では、モバイルページの読み込みが3秒を超えると53%のユーザーが離脱するというデータがあります。表示速度の改善はSEOランキング向上と同時に、直帰率の低下・滞在時間の増加・コンバージョン率の向上にも直結します。
              </p>
            </div>
          </div>
        </section>

        {/* 表示速度改善の施策 */}
        <section className="py-16 md:py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
                Measures
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
                表示速度改善の施策
              </h2>
            </div>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
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

        {/* 2-col: image + text */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_14_54.png"
                  alt="パフォーマンス改善を分析している様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2vw,24px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
                  Core Web Vitalsの測定ツール
                </h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  表示速度の計測には複数の無料ツールを活用します。Googleの「PageSpeed Insights」はLCP・CLS・INPなどの指標と具体的な改善提案を提供します。「Lighthouse」はChromeデベロッパーツールから実行できるローカル計測ツールです。Google Search ConsoleのCore Web Vitalsレポートでは、実際のユーザーデータ（フィールドデータ）を確認できます。サイプレスでは計測・分析・改善提案から実装まで一貫してサポートし、Lightshouseスコア90以上を目標に設定します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ページ表示速度についてよくある質問" bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ページ表示速度改善のご相談"
          body="「Lighthouseスコアが低い」「Core Web Vitalsが改善できない」そのようなお悩みはサイプレスにご相談ください。原因の診断から改善実装まで一貫してサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}
