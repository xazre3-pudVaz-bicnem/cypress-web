import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ページ速度改善｜Core Web Vitals最適化・Lighthouse 90+｜株式会社サイプレス",
  description:
    "Web制作でのページ表示速度改善。画像最適化・JavaScript削減・CDN活用・Next.js+Vercel構成でLighthouse 90+を目指すCore Web Vitals対策。",
  keywords: ["ページ速度改善", "Core Web Vitals", "Lighthouse", "表示速度最適化", "Web高速化"],
  openGraph: {
    title: "ページ速度改善｜Core Web Vitals最適化・Lighthouse 90+",
    description:
      "画像最適化・CDN活用・Next.js構成でLighthouse全項目90+を実現。Core Web Vitals「良好」を目指す速度改善支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/page-speed" },
};

const faqItems = [
  {
    q: "ページ速度はSEOに影響しますか？",
    a: "はい。GoogleはCore Web Vitals（LCP・CLS・INP）をランキング要因として採用しています。特にモバイルでの表示速度は重視されています。",
  },
  {
    q: "Lighthouseスコアはどのくらいを目指すべきですか？",
    a: "パフォーマンス・アクセシビリティ・SEO・ベストプラクティスの全項目で90以上が目標です。特にパフォーマンスとSEOスコアはビジネスへの影響が大きいです。",
  },
  {
    q: "WordPressサイトでも速度改善できますか？",
    a: "はい。画像最適化・キャッシュプラグイン（WP Super Cache・W3 Total Cache）・CDN（Cloudflare）・重いプラグインの削除などで改善できます。ただしNext.jsに比べて限界があります。",
  },
  {
    q: "速度改善の費用はどのくらいですか？",
    a: "既存サイトの速度改善は調査・実装内容によって異なります。画像最適化・キャッシュ設定などのシンプルな改善は5〜20万円程度、Next.jsへの移行を含む全面改修は30〜100万円程度です。",
  },
  {
    q: "改善後のLighthouseスコアはどのくらいになりますか？",
    a: "Next.js+Vercel構成での新規制作ならパフォーマンス90〜100を目標とします。既存WordPressサイトの改修は70〜85程度が現実的な目標です。",
  },
  {
    q: "Core Web Vitalsの3つの指標について教えてください。",
    a: "LCP（Largest Contentful Paint）：最大要素の表示時間（目標2.5秒以内）。CLS（Cumulative Layout Shift）：レイアウトのズレ（目標0.1以下）。INP（Interaction to Next Paint）：操作への応答速度（目標200ms以下）。すべてGoogleのランキング要因です。",
  },
  {
    q: "速度改善前に現状を確認する方法は？",
    a: "Google PageSpeed Insights（pagespeed.web.dev）に現在のURLを入力することで、LCP・CLS・INPのスコアと改善提案が無料で確認できます。また、Google Search ConsoleのCore Web Vitalsレポートで実際のユーザーデータも確認できます。",
  },
  {
    q: "LCPが遅い場合の主な原因は何ですか？",
    a: "最大コンテンツ要素（ファーストビューの画像やテキストブロック）の読み込みが遅いことが原因です。画像の非最適化・サーバーレスポンスの遅さ・レンダリングブロッキングリソースが主な要因です。next/imageのpriority属性設定やサーバー側のキャッシュ強化が有効です。",
  },
  {
    q: "CLSが高い場合の対処法は？",
    a: "レイアウトシフトは画像・動画・広告・フォントの読み込み完了時に発生します。画像にwidth/heightを明示するか、next/imageのfill+コンテナのアスペクト比固定で解消できます。フォントはfont-display: swapまたはnext/fontで対処します。",
  },
  {
    q: "JavaScriptが多いと速度にどう影響しますか？",
    a: "JavaScriptはダウンロード・解析・実行の全段階で処理コストがかかります。バンドルサイズが大きいほどTTI（操作可能になるまでの時間）が遅延します。Dynamic ImportとCode Splittingで初期ロードを最小化することが重要です。",
  },
  {
    q: "サードパーティスクリプト（Google Analytics等）は速度に影響しますか？",
    a: "大きく影響します。Google Analytics・Facebook Pixel・チャットウィジェット・広告スクリプトはメインスレッドをブロックしLighthouseスコアを下げます。scriptタグにdeferまたはasyncを付与し、非クリティカルなものはユーザー操作後に読み込む設定が有効です。",
  },
  {
    q: "WebPとAVIFはどちらが良いですか？",
    a: "AVIFはWebPよりさらに圧縮率が高いですが、対応ブラウザが限られます。Next.jsのnext/imageはWebP/AVIFをブラウザ対応に応じて自動選択するため、実装側での判断は不要です。",
  },
  {
    q: "CDNは必須ですか？",
    a: "グローバルに展開するサイトや日本全国のユーザーが対象であれば、CDNは速度改善に大きく貢献します。VercelはデフォルトでEdge Networkを使用するため、Next.jsサイトはCDN設定なしで高速配信が実現します。",
  },
  {
    q: "Speed Indexとは何ですか？",
    a: "ページのコンテンツが視覚的にどれだけ素早く表示されるかを測定する指標です。Lighthouseで計測され、低いほど良好です。Critical CSSの実装・レンダリングブロッキングリソースの除去で改善できます。",
  },
  {
    q: "モバイルとPCでLighthouseスコアが大きく違う理由は？",
    a: "PageSpeed InsightsはモバイルのシミュレーションにPCより低速な回線・デバイス性能を想定しているためです。モバイルスコアはPCより20〜30点低くなることが多く、モバイルでの改善を優先することが重要です。",
  },
  {
    q: "TTFBが遅い場合はどう対処しますか？",
    a: "TTFB（Time to First Byte）はサーバーのレスポンス時間です。改善にはCDNの活用・サーバーキャッシュ設定・ホスティング環境のアップグレード・Next.jsのSSGによるサーバー処理の排除が有効です。",
  },
  {
    q: "Preload・Prefetchはどう使いますか？",
    a: "Preloadは現在のページで確実に使うリソース（LCP画像・主要フォント）に使います。Prefetchは次のページ遷移で使うリソースを先読みするために使います。Next.jsのLink componentはデフォルトでPrefetchを行います。",
  },
  {
    q: "Critical CSSとは何ですか？",
    a: "ファーストビュー（スクロールせずに見える範囲）の表示に必要なCSSをHTMLのheadにインラインで記述する手法です。外部CSSファイルの読み込みを待たずに描画が始まるため、FCP（初回コンテンツ描画）が高速化します。",
  },
  {
    q: "既存サイトの速度改善はどこから始めればいいですか？",
    a: "まずPageSpeed Insightsで現状スコアと改善提案を確認します。次にLighthouse reportの「Opportunities」に表示される改善項目を優先度順に対応します。画像最適化から始めると最も費用対効果が高いことが多いです。",
  },
  {
    q: "速度改善の効果をどう測定しますか？",
    a: "改善前後のLighthouseスコア・PageSpeed Insightsスコア・Google Search ConsoleのCore Web Vitalsレポートを比較します。ビジネス指標としてGA4の直帰率・コンバージョン率の変化も合わせて追跡します。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速なNext.js開発" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "高速CDN配信" },
  { href: "/web-design/seo-site", label: "SEO対応サイト制作", desc: "SEO特化の制作" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル最適化" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/web-design/lp", label: "ランディングページ制作", desc: "LP制作・高速化" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP高速化の手法" },
  { href: "/web-design/cms", label: "CMS導入", desc: "CMSの選定と導入" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "速度改善を含む刷新" },
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術面のSEO改善" },
  { href: "/seo/page-speed", label: "SEO観点の速度改善", desc: "速度とSEOの関係" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "Schema.org実装" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/services/seo", label: "SEOサービス", desc: "SEO支援サービス" },
  { href: "/industry/restaurant", label: "飲食店向けWeb制作", desc: "飲食業の速度改善" },
  { href: "/industry/salon", label: "美容室向けWeb制作", desc: "サロンサイトの最適化" },
  { href: "/industry/dental", label: "歯科向けWeb制作", desc: "クリニックサイト" },
  { href: "/industry/ec", label: "ECサイト制作", desc: "EC高速化" },
  { href: "/industry/btob", label: "BtoB向けWeb制作", desc: "法人サイトの最適化" },
  { href: "/industry/medical", label: "医療機関向けWeb制作", desc: "医療サイトの高速化" },
  { href: "/works", label: "制作実績", desc: "速度改善の実績" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                marginBottom: "24px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ページ速度改善</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Page Speed Optimization
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px,4vw,44px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              ページ速度改善｜Core Web Vitals最適化
            </h1>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                marginTop: "20px",
                maxWidth: "640px",
              }}
            >
              ページの表示速度はSEO・ユーザー体験・コンバージョン率に直接影響します。Lighthouse 90+・Core Web Vitals「良好」を目標に、具体的な速度改善施策を実施します。
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                marginTop: "12px",
                maxWidth: "640px",
              }}
            >
              表示速度は「あれば良い」ではなく、ビジネス成果に直結する優先課題です。Googleの検索順位・ユーザーの直帰・広告費の効率すべてに影響します。
            </p>
          </div>
        </section>

        {/* ── Hero image ───────────────────────────────────── */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="ページ速度改善・Core Web Vitals"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "clamp(16px,2vw,24px)",
                  lineHeight: 1.6,
                }}
              >
                表示が遅い1秒で、CVは7%下がる。<br />
                Lighthouse 90+を目指す速度改善を実施します。
              </p>
            </div>
          </div>
        </section>

        {/* ── Section A: このページでわかること ─────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "36px",
              }}
            >
              このページでわかること
            </h2>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column" }}>
              {[
                "Core Web Vitals（LCP・CLS・INP）の意味と目標値",
                "Lighthouseスコアが低くなる主な原因と改善手順",
                "画像・JavaScript・CSS・フォント最適化の具体的な方法",
                "WordPressサイトとNext.jsサイトでの改善アプローチの違い",
                "業種別に優先すべき速度改善施策のポイント",
                "改善効果を測定するためのKPIと計測ツールの使い方",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", lineHeight: "1.6", flexShrink: 0 }}>
                    →
                  </span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.7" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Business impact – dark section ───────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Business Impact
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#ffffff",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              表示速度が遅いビジネスへの4つのダメージ
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "24px",
                maxWidth: "900px",
              }}
            >
              {[
                {
                  t: "コンバージョン率の低下",
                  b: "読み込みが3秒を超えると直帰率が32%増加します。表示を待てないユーザーは競合サイトへ移動し、問い合わせ・購入の機会が失われます。",
                },
                {
                  t: "SEO評価の低下",
                  b: "Core Web VitalsはGoogleのランキング要因として採用されています。LCP・CLS・INPが「改善が必要」の状態では、同等コンテンツでも速いサイトに検索順位で負けます。",
                },
                {
                  t: "広告費の無駄遣い",
                  b: "リスティング広告・SNS広告の費用をかけてLPへ誘導しても、LPの表示が遅ければユーザーは離脱します。広告費をかけるほど、速度による機会損失が大きくなります。",
                },
                {
                  t: "ブランド信頼の損傷",
                  b: "表示が遅いサイトは「古いサイトで大丈夫か」という印象を与えます。初回の接触でブランドへの信頼を損なうと、その後のCV機会も減ります。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Speed Actions ────────────────────────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Speed Actions
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              Web制作での速度改善施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "画像の最適化（WebP変換・適切なサイズ・Lazy Load）",
                  b: "画像はWebPまたはAVIF形式に変換してファイルサイズを削減。表示サイズに合わせたリサイズ・Lazy Load（遅延読み込み）・next/imageによる自動最適化を実装します。",
                },
                {
                  n: "02",
                  t: "不要なJavaScriptの削除・遅延読み込み",
                  b: "使用していないJavaScriptライブラリの削除・サードパーティスクリプト（広告・ウィジェット等）の非同期読み込み・クリティカルでないスクリプトの遅延実行を実施します。",
                },
                {
                  n: "03",
                  t: "CSSの最適化・Critical CSS",
                  b: "使用していないCSSの削除・ファーストビューに必要なCSSをインラインで記述するCritical CSS実装で、レンダリングブロッキングを解消します。",
                },
                {
                  n: "04",
                  t: "CDN（コンテンツデリバリーネットワーク）の活用",
                  b: "Vercel Edge Network・Cloudflare CDNを活用してコンテンツを世界中のサーバーから配信。物理的な距離による遅延を最小化します。",
                },
                {
                  n: "05",
                  t: "ブラウザキャッシュ・サーバーキャッシュの設定",
                  b: "静的リソース（CSS・JS・画像）に適切なキャッシュヘッダーを設定し、再訪ユーザーの表示速度を大幅に改善します。",
                },
                {
                  n: "06",
                  t: "フォント読み込みの最適化",
                  b: "font-display: swapの設定・next/fontによる最適化・可変フォントの活用で、フォント読み込みによる表示遅延（CLS）をゼロにします。",
                },
                {
                  n: "07",
                  t: "Next.js+Vercel構成での根本的な高速化",
                  b: "既存サイトの改修で限界がある場合は、Next.js+Vercel構成での再構築が最も効果的です。SSGによる静的配信でLighthouseパフォーマンスを90台以上にすることを目指します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section B: よくある課題と原因 ───────────────── */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Challenges
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Lighthouseスコアが低い（50以下）",
                  b: "複数の問題が重なって発生します。画像の未最適化・大量のサードパーティスクリプト・レンダリングブロッキングCSSの組み合わせが主因です。Lighthouseの「Opportunities」と「Diagnostics」を起点に優先度を整理することが重要です。",
                },
                {
                  n: "02",
                  t: "LCPが遅い（3秒以上）",
                  b: "ファーストビューの最大コンテンツ要素（多くはヒーロー画像）の読み込みが遅いことが原因です。next/imageのpriority属性付与・画像のサイズ最適化・CDNキャッシュ設定で改善できます。",
                },
                {
                  n: "03",
                  t: "CLSが高い（0.1以上）",
                  b: "フォント・画像・広告の読み込み完了時にレイアウトがズレることで発生します。画像にwidth/heightを明示するかnext/imageのアスペクト比固定、およびnext/fontによるフォント最適化で解消できます。",
                },
                {
                  n: "04",
                  t: "画像が最適化されていない",
                  b: "JPEGやPNGの大容量画像がそのまま使用されているケースです。WebP変換で30〜50%のファイルサイズ削減が可能で、next/imageを使うと自動的にWebP/AVIFに変換・サイズ最適化されます。",
                },
                {
                  n: "05",
                  t: "JavaScriptの読み込みが多い",
                  b: "使用していないnpmパッケージ・大容量UIライブラリの全体インポートが原因です。Tree-shakingの有効化・Dynamic Import（next/dynamic）・Bundle Analyzerを使ったサイズ分析が有効です。",
                },
                {
                  n: "06",
                  t: "CSSが大きすぎる",
                  b: "WordPressテーマに含まれる未使用CSSや、UIフレームワークの全量インポートが主因です。PurgeCSSによる未使用CSS削除・Critical CSSの抽出・Tailwind CSSのJITモードで解決できます。",
                },
                {
                  n: "07",
                  t: "サーバーレスポンスが遅い（TTFB高）",
                  b: "サーバーのスペック不足・PHPの動的処理・データベースクエリの非効率が原因です。CDNキャッシュの設定・Next.jsのSSGによるサーバー処理排除・ホスティングのアップグレードが有効です。",
                },
                {
                  n: "08",
                  t: "フォントの読み込みが重い",
                  b: "外部フォントサービス（Google Fonts等）へのリクエストとfont-swapの未設定が原因です。next/fontで自己ホスティング化すると外部リクエストがなくなり、CLSも解消されます。",
                },
                {
                  n: "09",
                  t: "未使用のCSSが多い（WordPress）",
                  b: "WordPressテーマやプラグインが不要なCSSを大量に出力することが原因です。WP RocketなどのキャッシュプラグインのCSS最適化機能・手動でのCritical CSS実装が選択肢です。",
                },
                {
                  n: "10",
                  t: "第三者スクリプト（広告・分析）が重い",
                  b: "Google Ads・Facebook Pixel・Hotjar・チャットウィジェットがメインスレッドをブロックします。scriptタグへのdeferまたはasync追加・ユーザー同意後の遅延読み込み実装で影響を最小化できます。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section C: 業種別の速度改善ポイント ─────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Industry Focus
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              業種別の速度改善ポイント
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1px",
                background: "#E8E4DC",
              }}
            >
              {[
                {
                  industry: "飲食店",
                  point: "料理写真の最適化・メニューページの高速化",
                  detail:
                    "料理写真はサイトの主役ですが、未最適化のJPEGは一枚3〜5MBになることも。WebP変換とnext/imageによるLazy Loadを実施することで、写真の多いメニューページも高速に表示できます。",
                },
                {
                  industry: "美容室・サロン",
                  point: "施術ポートフォリオの画像最適化",
                  detail:
                    "ビフォーアフター写真や施術ギャラリーは数十〜数百枚に及ぶことがあります。Masonry GridとIntersection Observer APIによる遅延読み込みで、スクロール体験を損なわずに高速化できます。",
                },
                {
                  industry: "ECサイト",
                  point: "商品一覧・詳細ページの高速化",
                  detail:
                    "商品画像の多いECサイトはLCPが特に遅くなりがちです。next/imageのfill+sizesによる最適化・商品一覧の仮想スクロール・Next.jsのSSGによる商品ページ静的生成が有効です。",
                },
                {
                  industry: "BtoB・コンサル",
                  point: "ホワイトペーパーDL・問い合わせページ",
                  detail:
                    "BtoBサイトはCVポイントとなるフォームページの速度が直接受注に影響します。フォームページのLighthouseスコアを重点的に改善し、CTAまでの読み込み速度を最大化します。",
                },
                {
                  industry: "医療機関",
                  point: "患者アクセス時の高速表示",
                  detail:
                    "急いでいる患者がスマートフォンでアクセスするシーンが多く、モバイルでの速度が特に重要です。SSGによる静的配信とCloudflare CDNで、どの地域からでも高速な表示を確保します。",
                },
                {
                  industry: "不動産",
                  point: "物件写真の遅延読み込み",
                  detail:
                    "物件一覧ページは1ページに数十枚の写真が並ぶため、Intersection Observerによる遅延読み込みが必須です。WebP変換と適切なsrcsetの設定で画像による速度低下を防ぎます。",
                },
                {
                  industry: "学習塾・教育",
                  point: "動画コンテンツの最適化",
                  detail:
                    "授業紹介動画はファイルサイズが大きくLCPに悪影響を与えます。動画のLazy Load・YouTube埋め込みの遅延読み込み（Click-to-Play実装）でページ初期表示を高速化できます。",
                },
                {
                  industry: "メディア・ブログ",
                  point: "記事ページのLCP改善",
                  detail:
                    "アイキャッチ画像がLCPの要素になることが多く、next/imageのpriority属性付与が効果的です。記事一覧の無限スクロールにはIntersection ObserverとAPIのページネーションを組み合わせます。",
                },
              ].map((item, i) => (
                <div key={i} style={{ background: "#FFFFFF", padding: "28px 24px" }}>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                    {item.industry}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#0d1b2a",
                      marginBottom: "10px",
                    }}
                  >
                    {item.point}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section D: 速度改善の実装フロー ─────────────── */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Optimization Flow
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              速度改善の実装フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Lighthouse・PageSpeed Insightsで現状計測",
                  b: "改善前のベースラインをモバイル・PCそれぞれで記録します。PageSpeed Insightsのフィールドデータ（実ユーザーデータ）とLabデータの両方を確認し、改善優先度を決定します。",
                },
                {
                  n: "02",
                  t: "Core Web Vitals確認（LCP/CLS/INP）",
                  b: "Google Search ConsoleのCore Web Vitalsレポートでページグループ別の状態（良好・改善が必要・不良）を確認。影響範囲の大きいページから優先して対応します。",
                },
                {
                  n: "03",
                  t: "画像最適化（WebP変換/next/image/遅延読み込み）",
                  b: "全画像をWebPまたはAVIFに変換し、next/imageに置き換えます。ファーストビューの主要画像にはpriority属性を付与し、それ以外はLazy Loadを適用します。",
                },
                {
                  n: "04",
                  t: "JavaScript最適化（Code Splitting/Dynamic Import）",
                  b: "webpack Bundle Analyzerで大容量パッケージを特定。next/dynamicによるDynamic Importでページ初期バンドルを削減。サードパーティスクリプトはdeferまたはasyncで非同期化します。",
                },
                {
                  n: "05",
                  t: "CSS最適化（PurgeCSS/Critical CSS）",
                  b: "未使用CSSをPurgeCSSまたはTailwindのJITモードで削除。ファーストビューに必要なCSSをCritical CSSとして抽出しインライン化することでFCPを改善します。",
                },
                {
                  n: "06",
                  t: "フォント最適化（next/font/display:swap）",
                  b: "Google Fontsをnext/fontに置き換えて自己ホスティング化。font-display: swapの設定でFOUT（フォント非表示期間）を最小化し、CLSに影響しないよう調整します。",
                },
                {
                  n: "07",
                  t: "第三者スクリプト遅延読み込み",
                  b: "Google Analytics・Facebook Pixel・チャットウィジェットなどを、ページ読み込み完了後またはユーザーインタラクション後に遅延読み込みする設定を実装します。",
                },
                {
                  n: "08",
                  t: "サーバーレスポンス改善（CDN/キャッシュ）",
                  b: "Vercel Edge NetworkまたはCloudflare CDNを設定し、静的リソースのキャッシュTTLを最適化。WordPressの場合はWP Rocketなどのキャッシュプラグインでサーバー応答を高速化します。",
                },
                {
                  n: "09",
                  t: "計測・検証",
                  b: "実装後にPageSpeed Insights・Lighthouseで再計測し改善前後のスコアを比較。目標値（Lighthouse 90+・LCP 2.5秒以内・CLS 0.1以下）に達するまで改善を繰り返します。",
                },
                {
                  n: "10",
                  t: "継続的モニタリング",
                  b: "Vercel Analytics・Google Search ConsoleのCore Web VitalsレポートとGA4を連携し、リリース後の数値変化を月次でモニタリング。スコア低下の早期検知と定期的な最適化を継続します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section E: 成果を見るための指標 ─────────────── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs &amp; Metrics
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Lighthouse Performanceスコア（目標90+）",
                  b: "Chrome DevToolsまたはLighthouse CIで計測。モバイル・PCの両方でスコアを記録し、改善前後の比較に使用します。継続的な計測にはLighthouse CIのCI/CD統合が有効です。",
                },
                {
                  n: "02",
                  t: "LCP（目標2.5秒以内）",
                  b: "PageSpeed InsightsとSearch ConsoleのCore Web Vitalsレポートで確認。フィールドデータ（実ユーザー）とLabデータ（シミュレーション）の両方を参照して改善効果を検証します。",
                },
                {
                  n: "03",
                  t: "CLS（目標0.1以下）",
                  b: "レイアウトシフトの累積スコアです。Chrome DevToolsのPerformanceタブでシフト発生箇所を特定し、画像・フォント・広告の読み込み調整で数値を下げます。",
                },
                {
                  n: "04",
                  t: "FID/INP（目標100ms/200ms以下）",
                  b: "ユーザー操作への応答速度です。FIDは廃止されINPに移行しています。JavaScriptのメインスレッド占有時間を削減することで改善します。Long Tasksの解消が鍵です。",
                },
                {
                  n: "05",
                  t: "PageSpeed Insightsスコア（モバイル/PC）",
                  b: "pagespeed.web.devで公開URLを入力し計測。モバイルとPCそれぞれのスコアと改善提案を月次で記録し、トレンドを追跡します。",
                },
                {
                  n: "06",
                  t: "直帰率改善率",
                  b: "GA4で速度改善前後の直帰率（Bounce Rate）を比較。表示速度の改善はモバイルからの訪問者の直帰率低下に最も効果が出やすいため、デバイス別で比較します。",
                },
                {
                  n: "07",
                  t: "CVR改善率",
                  b: "速度改善後のコンバージョン率（問い合わせ・購入・資料DL等）の変化をGA4のコンバージョンレポートで追跡。速度改善は直接のCVR向上につながる施策です。",
                },
                {
                  n: "08",
                  t: "オーガニック検索順位・流入数の変化",
                  b: "Google Search ConsoleでCore Web Vitals改善後のオーガニック流入数・インプレッション数・平均順位の推移を確認。速度改善はSEO効果として2〜3ヶ月後に現れることが多いです。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Inline CTA ───────────────────────────────────── */}
        <section style={{ background: "#F9F8F5", padding: "64px 0" }}>
          <div
            style={{
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "0 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Get Started
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,28px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              まずは現状のLighthouseスコアを確認する
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                lineHeight: "1.9",
                maxWidth: "520px",
                marginBottom: "32px",
              }}
            >
              現在のサイトURLをお知らせいただければ、Lighthouseスコアと速度改善の優先施策を無料で診断します。
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 40px",
                background: "#0F172A",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              無料診断を依頼する
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" heading="ページ速度改善についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ページ速度改善のご相談"
          body="現在のサイトのLighthouseスコアを計測し、速度改善施策をご提案します。Core Web Vitals改善・既存サイトの高速化・Next.js移行をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
