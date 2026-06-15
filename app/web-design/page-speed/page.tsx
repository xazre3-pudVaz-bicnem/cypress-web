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
  description: "Web制作でのページ表示速度改善。画像最適化・JavaScript削減・CDN活用・Next.js+Vercel構成でLighthouse 90+を目指すCore Web Vitals対策。",
  keywords: ["ページ速度改善", "Core Web Vitals", "Lighthouse", "表示速度最適化", "Web高速化"],
  openGraph: {
    title: "ページ速度改善｜Core Web Vitals最適化・Lighthouse 90+",
    description: "画像最適化・CDN活用・Next.js構成でLighthouse全項目90+を実現。Core Web Vitals「良好」を目指す速度改善支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/page-speed" },
};

const faqItems = [
  { q: "ページ速度はSEOに影響しますか？", a: "はい。GoogleはCore Web Vitals（LCP・CLS・INP）をランキング要因として採用しています。特にモバイルでの表示速度は重視されています。" },
  { q: "Lighthouseスコアはどのくらいを目指すべきですか？", a: "パフォーマンス・アクセシビリティ・SEO・ベストプラクティスの全項目で90以上が目標です。特にパフォーマンスとSEOスコアはビジネスへの影響が大きいです。" },
  { q: "WordPressサイトでも速度改善できますか？", a: "はい。画像最適化・キャッシュプラグイン（WP Super Cache・W3 Total Cache）・CDN（Cloudflare）・重いプラグインの削除などで改善できます。ただしNext.jsに比べて限界があります。" },
  { q: "速度改善の費用はどのくらいですか？", a: "既存サイトの速度改善は調査・実装内容によって異なります。画像最適化・キャッシュ設定などのシンプルな改善は5〜20万円程度、Next.jsへの移行を含む全面改修は30〜100万円程度です。" },
  { q: "改善後のLighthouseスコアはどのくらいになりますか？", a: "Next.js+Vercel構成での新規制作ならパフォーマンス90〜100を目標とします。既存WordPressサイトの改修は70〜85程度が現実的な目標です。" },
  { q: "Core Web Vitalsの3つの指標について教えてください。", a: "LCP（Largest Contentful Paint）：最大要素の表示時間（目標2.5秒以内）。CLS（Cumulative Layout Shift）：レイアウトのズレ（目標0.1以下）。INP（Interaction to Next Paint）：操作への応答速度（目標200ms以下）。すべてGoogleのランキング要因です。" },
  { q: "速度改善前に現状を確認する方法は？", a: "Google PageSpeed Insights（pagespeed.web.dev）に現在のURLを入力することで、LCP・CLS・INPのスコアと改善提案が無料で確認できます。また、Google Search ConsoleのCore Web Vitalsレポートで実際のユーザーデータも確認できます。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速なNext.js開発" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "高速CDN配信" },
  { href: "/seo/page-speed", label: "SEO観点の速度改善", desc: "SEOでの速度最適化" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP高速化の手法" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ページ速度改善</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Page Speed Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ページ速度改善｜Core Web Vitals最適化
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ページの表示速度はSEO・ユーザー体験・コンバージョン率に直接影響します。Lighthouse 90+・Core Web Vitals「良好」を目標に、具体的な速度改善施策を実施します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              Googleの調査では、ページ読み込みが3秒を超えると直帰率が32%増加します。表示速度は「あれば良い」ではなく、ビジネス成果に直結する優先課題です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="ページ速度改善・Core Web Vitals" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                表示が遅い1秒で、CVは7%下がる。<br />Lighthouse 90+を目指す速度改善を実施します。
              </p>
            </div>
          </div>
        </section>

        {/* 速度が遅いリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Business Impact</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              表示速度が遅いビジネスへの4つのダメージ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "コンバージョン率の低下", b: "Googleの調査では読み込みが3秒を超えると直帰率が32%増加します。表示を待てないユーザーは競合サイトへ移動し、問い合わせ・購入の機会が失われます。" },
                { t: "SEO評価の低下", b: "Core Web VitalsはGoogleのランキング要因として採用されています。LCP・CLS・INPが「改善が必要」の状態では、同等コンテンツでも速いサイトに検索順位で負けます。" },
                { t: "広告費の無駄遣い", b: "リスティング広告・SNS広告の費用をかけてLPへ誘導しても、LPの表示が遅ければユーザーは離脱します。広告費をかけるほど、速度による機会損失が大きくなります。" },
                { t: "ブランド信頼の損傷", b: "表示が遅いサイトは「この会社は技術力がない」「古いサイトで大丈夫か」という印象を与えます。初回の接触でブランドへの信頼を損なうと、その後のCV機会も減ります。" },
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Speed Actions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Web制作での速度改善施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "画像の最適化（WebP変換・適切なサイズ・Lazy Load）", b: "画像はWebPまたはAVIF形式に変換してファイルサイズを削減。表示サイズに合わせたリサイズ・Lazy Load（遅延読み込み）・next/imageによる自動最適化を実装します。" },
                { n: "02", t: "不要なJavaScriptの削除・遅延読み込み", b: "使用していないJavaScriptライブラリの削除・サードパーティスクリプト（広告・ウィジェット等）の非同期読み込み・クリティカルでないスクリプトの遅延実行を実施します。" },
                { n: "03", t: "CSSの最適化・Critical CSS", b: "使用していないCSSの削除・ファーストビューに必要なCSSをインラインで記述するCritical CSS実装で、レンダリングブロッキングを解消します。" },
                { n: "04", t: "CDN（コンテンツデリバリーネットワーク）の活用", b: "Vercel Edge Network・Cloudflare CDNを活用してコンテンツを世界中のサーバーから配信。物理的な距離による遅延を最小化します。" },
                { n: "05", t: "ブラウザキャッシュ・サーバーキャッシュの設定", b: "静的リソース（CSS・JS・画像）に適切なキャッシュヘッダーを設定し、再訪ユーザーの表示速度を大幅に改善します。" },
                { n: "06", t: "フォント読み込みの最適化", b: "font-display: swapの設定・next/fontによる最適化・可変フォントの活用で、フォント読み込みによる表示遅延（CLS）をゼロにします。" },
                { n: "07", t: "Next.js+Vercel構成での根本的な高速化", b: "既存サイトの改修で限界がある場合は、Next.js+Vercel構成での再構築が最も効果的です。SSGによる静的配信でLighthouseパフォーマンスを90台以上にすることを目指します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", fontWeight: 700 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" heading="ページ速度改善についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="ページ速度改善のご相談" body="現在のサイトのLighthouseスコアを計測し、速度改善施策をご提案します。Core Web Vitals改善・既存サイトの高速化・Next.js移行をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
