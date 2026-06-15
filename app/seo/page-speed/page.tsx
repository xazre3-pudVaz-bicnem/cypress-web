import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ページ速度最適化とは｜Core Web Vitals改善・Lighthouseスコア向上｜株式会社サイプレス",
  description:
    "ページ速度最適化（Core Web Vitals・Lighthouse）の基礎から実践まで解説。LCP・CLS・INPの改善方法、画像最適化・JavaScript最適化・CDN活用・フォント最適化まで体系的に網羅。",
  keywords: ["ページ速度最適化", "Core Web Vitals", "LCP改善", "CLS改善", "Lighthouse", "ページパフォーマンス"],
  openGraph: {
    title: "ページ速度最適化とは｜Core Web Vitals改善・Lighthouseスコア向上｜株式会社サイプレス",
    description: "ページ速度最適化の実践ガイド。Core Web Vitals（LCP・CLS・INP）の改善からLighthouse 90点達成まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/page-speed" },
};

const faqItems = [
  {
    q: "LCP（Largest Contentful Paint）を改善するには？",
    a: "LCP（ページの最大コンテンツの描画時間）を2.5秒以内にするには、①ファーストビューの画像をWebPに変換・サイズ最適化、②LCP要素へのpreload設定（`<link rel=\"preload\">`）、③サーバー応答時間の短縮（TTFB改善・CDN活用）、④フォントの最適化（font-display: swap）が主な施策です。",
  },
  {
    q: "CLS（Cumulative Layout Shift）を改善するには？",
    a: "CLS（レイアウトシフト）を0.1以下にするには、①画像・動画・iframeに必ずwidth/heightを指定、②フォントの読み込み時のスペース確保（font-display: optional）、③広告・Webフォントの読み込みによるシフトを防ぐ事前スペース確保、④ダイナミックコンテンツの上部への突然の挿入を避けることが重要です。",
  },
  {
    q: "INP（Interaction to Next Paint）を改善するには？",
    a: "INP（ユーザー操作への応答性）を200ms以下にするには、①重いJavaScript処理をWeb WorkerやRequestIdleCallbackに移す、②長いタスク（50ms以上）を分割する（Task Scheduler API）、③不要なJavaScriptの除去・コード分割、④サードパーティスクリプト（タグマネージャー・チャット等）の最適化が主な施策です。",
  },
  {
    q: "画像最適化で最も効果的な方法は？",
    a: "①WebP/AVIF形式への変換（JPEG比で30〜50%軽量化）、②適切なサイズへのリサイズ（表示サイズより大きい画像を使わない）、③遅延読み込み（loading=\"lazy\"）、④ファーストビュー画像のpreload・priority設定（Next.jsでは`priority`prop）の4つが主な施策です。Next.jsの`next/image`コンポーネントを使うと自動で多くの最適化が適用されます。",
  },
  {
    q: "Lighthouseのスコアが上がらない原因は何ですか？",
    a: "よくある原因として、①サードパーティスクリプト（Google Analytics・タグマネージャー・チャットウィジェット）の読み込みコスト、②最適化されていない大きな画像、③レンダーブロッキングリソース（CSSとJavaScript）、④適切に最適化されていないフォント、⑤過度なDOM要素数などが挙げられます。Chrome DevToolsのPerformanceタブで具体的なボトルネックを特定することが先決です。",
  },
  {
    q: "PageSpeed InsightsとLighthouseの違いは何ですか？",
    a: "Lighthouseはブラウザ（Chrome DevTools）やCLIで実行する計測ツールで、主にシミュレーション環境（ラボデータ）でのスコアを測定します。PageSpeed Insightsはそのスコアに加えて、実際のChromeユーザーのデータ（フィールドデータ・Core Web Vitalsの実績値）も表示します。SEO評価にはフィールドデータの方がより直接的に影響します。",
  },
  {
    q: "CDN（コンテンツデリバリネットワーク）はページ速度にどう効きますか？",
    a: "CDNは世界中のエッジサーバーにコンテンツをキャッシュし、ユーザーに最も近いサーバーから配信することでTTFB（Time to First Byte）を大幅に短縮します。日本国内向けサイトではVercel・Cloudflare・Amazon CloudFrontなどが一般的です。Next.jsのVercelデプロイはCDNが標準で組み込まれています。",
  },
  {
    q: "Next.jsを使うとページ速度は改善しますか？",
    a: "Next.jsはSSG/SSR・画像最適化（next/image）・フォント最適化（next/font）・コード分割・App RouterによるRSCなど、パフォーマンスのベストプラクティスが組み込まれています。適切に実装すれば、WordPressなど従来のCMSより高いパフォーマンスを得やすい構成です。ただし不適切な実装（クライアントコンポーネントの多用・重いアニメーション）は逆効果になります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "Core Web VitalsとSEOの関係" },
  { href: "/web-design", label: "Webサイト制作", desc: "高速サイト設計と制作" },
  { href: "/web-design/nextjs", label: "Next.jsでのサイト制作", desc: "パフォーマンスに優れたサイト" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "WordPress高速化の方法" },
  { href: "/knowledge/core-web-vitals", label: "Core Web Vitals解説", desc: "LCP・CLS・INP改善入門" },
  { href: "/checklist/technical-seo", label: "テクニカルSEOチェックリスト", desc: "ページ速度の確認項目" },
  { href: "/column/seo", label: "SEOコラム", desc: "ページ速度・Core Web Vitals最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "ページ速度改善込みのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "テクニカルSEO改善の料金" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "ページ速度の現状評価" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルでの速度最適化" },
];

const optimizations = [
  { category: "画像最適化", items: ["WebP/AVIF形式への変換", "適切なサイズへのリサイズ", "遅延読み込み（loading=lazy）", "LCP画像へのpreload設定", "next/imageコンポーネントの活用"] },
  { category: "JavaScript最適化", items: ["コード分割（Code Splitting）", "Dynamic Import（遅延読み込み）", "不要なJSの除去", "サードパーティスクリプトの最適化", "長いタスクの分割（Long Tasks）"] },
  { category: "CSS最適化", items: ["クリティカルCSSのインライン化", "未使用CSSの除去（PurgeCSS等）", "レンダーブロッキングCSSの遅延", "CSS Containmentの活用", "Tailwind CSSのPurge設定"] },
  { category: "フォント最適化", items: ["font-display: swapの設定", "next/fontでのフォント最適化", "必要なサブセットのみ読み込み", "preconnectでGoogleFonts接続", "システムフォントへのフォールバック"] },
  { category: "インフラ・配信最適化", items: ["CDN（エッジ配信）の活用", "HTTPキャッシュの設定", "Brotli/gzip圧縮の有効化", "HTTP/2・HTTP/3の利用", "サーバー応答時間（TTFB）の改善"] },
  { category: "レイアウト安定性（CLS）", items: ["画像・動画にwidth/height指定", "Webフォントのレイアウトシフト防止", "広告スロットの事前確保", "動的コンテンツの安定化", "transform/opacityでのアニメーション"] },
];

export default function PageSpeedPage() {
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
              <span style={{ color: "#0F172A" }}>ページ速度最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Page Speed Optimization</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ページ速度最適化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ページ速度最適化とは、Webページの表示速度を改善することでユーザー体験を向上させ、Core Web VitalsのスコアとLighthouseパフォーマンス評価を高める施策です。2021年以降、Core Web VitalsはGoogleのランキング要因として正式に採用されています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              表示速度の改善はSEOだけでなく、直帰率の低下・コンバージョン率の向上・ユーザー満足度の向上にも直結します。特にモバイルユーザーが多数を占める現在、モバイルでの速度改善は集客に直結する重要な投資です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 00_32_52.png" alt="ページ速度最適化・Core Web Vitals・Lighthouse改善のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 速度の遅さがSEOに与える影響 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>SEO Impact</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ページ速度が遅いとSEOに起きる4つの問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "Core Web Vitals不良でランキング低下", b: "LCP・CLS・INPがGoogleの「不良」基準を超えると、同等コンテンツでも速いページが優先されます。Core Web VitalsはGoogleの公式ランキング要因として採用されています。" },
                { t: "直帰率上昇でGoogleの評価が下がる", b: "ページが3秒以内に表示されないと直帰率が32%増加します。高い直帰率は「このページはユーザーの期待に応えなかった」とGoogleに伝わり、さらなる順位低下を招きます。" },
                { t: "モバイルユーザーが離脱しCV機会を失う", b: "スマートフォンユーザーはPCより速度に敏感です。LTEでの表示が遅いページはほぼすぐに離脱されます。モバイルの速度改善がSEOとCVの両方で最優先課題です。" },
                { t: "クロール効率の低下でインデックスが遅れる", b: "GoogleのクロールバジェットはURLごとに制限があります。ページの表示が遅いとクローラーの効率が下がり、重要なページのインデックスが遅れる原因になります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Web Vitals */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Core Web Vitals</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Core Web Vitalsの3指標と目標値
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {[
                { metric: "LCP", name: "Largest Contentful Paint", good: "2.5秒以内", needs: "2.5〜4.0秒", poor: "4.0秒以上", desc: "ページの最大コンテンツ（ファーストビューの主な画像やテキスト）が描画されるまでの時間。ユーザーが「ページが読み込まれた」と感じるタイミング。" },
                { metric: "CLS", name: "Cumulative Layout Shift", good: "0.1以下", needs: "0.1〜0.25", poor: "0.25以上", desc: "ページ読み込み中に発生するレイアウトのずれ（シフト）の累積スコア。ユーザーが誤ってボタンをクリックしてしまうなどの体験不良の指標。" },
                { metric: "INP", name: "Interaction to Next Paint", good: "200ms以下", needs: "200〜500ms", poor: "500ms以上", desc: "ユーザーの操作（クリック・タップ・キー入力）に対するページの視覚的な応答速度。2024年3月にFIDから置き換わった指標。" },
              ].map((item) => (
                <div key={item.metric} className="p-6 rounded" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <p className="font-black text-[28px] mb-1 font-mono" style={{ color: "#0d1b2a" }}>{item.metric}</p>
                  <p className="text-[11px] mb-4" style={{ color: "#9CA3AF" }}>{item.name}</p>
                  <div className="space-y-1 text-[12px] mb-4">
                    <div className="flex justify-between"><span style={{ color: "#4ade80" }}>Good</span><span style={{ color: "#374151" }}>{item.good}</span></div>
                    <div className="flex justify-between"><span style={{ color: "#facc15" }}>Needs Improvement</span><span style={{ color: "#374151" }}>{item.needs}</span></div>
                    <div className="flex justify-between"><span style={{ color: "#f87171" }}>Poor</span><span style={{ color: "#374151" }}>{item.poor}</span></div>
                  </div>
                  <p className="text-[12px] leading-[1.8]" style={{ color: "#374151" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 最適化カテゴリ */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Optimization Checklist</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ページ速度最適化の主要施策
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
              {optimizations.map((cat) => (
                <div key={cat.category}>
                  <p className="font-bold text-[14px] mb-3 pb-2" style={{ color: "#0d1b2a", borderBottom: "1px solid #E8E4DC" }}>{cat.category}</p>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-1" style={{ color: "#9CA3AF" }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ページ速度最適化についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ページ速度改善・Core Web Vitalsのご相談"
          body="現在のスコアを診断し、効果的な改善施策をご提案します。Lighthouse 90点以上を目指します。"
        />
      </main>
      <Footer />
    </>
  );
}
