import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ページ速度改善｜Web制作でのCore Web Vitals最適化",
  description: "Web制作でのページ表示速度改善。画像最適化・JavaScript削減・CDN活用・Next.js+Vercel構成でLighthouse 90+を目指すCore Web Vitals対策。",
};

const faqItems = [
  { q: "ページ速度はSEOに影響しますか？", a: "はい。GoogleはCore Web Vitals（LCP・CLS・INP）をランキング要因として採用しています。特にモバイルでの表示速度は重視されています。" },
  { q: "Lighthouseスコアはどのくらいを目指すべきですか？", a: "パフォーマンス・アクセシビリティ・SEO・ベストプラクティスの全項目で90以上が目標です。特にパフォーマンスとSEOスコアはビジネスへの影響が大きいです。" },
  { q: "WordPressサイトでも速度改善できますか？", a: "はい。画像最適化・キャッシュプラグイン（WP Super Cache・W3 Total Cache）・CDN（Cloudflare）・重いプラグインの削除などで改善できます。ただしNext.jsに比べて限界があります。" },
  { q: "速度改善の費用はどのくらいですか？", a: "既存サイトの速度改善は調査・実装内容によって異なります。画像最適化・キャッシュ設定などのシンプルな改善は5〜20万円程度、Next.jsへの移行を含む全面改修は30〜100万円程度です。" },
  { q: "改善後のLighthouseスコアはどのくらいになりますか？", a: "Next.js+Vercel構成での新規制作ならパフォーマンス90〜100を目標とします。既存WordPressサイトの改修は70〜85程度が現実的な目標です。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速なNext.js開発" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "高速CDN配信" },
  { href: "/seo/page-speed", label: "SEO観点の速度改善", desc: "SEOでの速度最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/web-design">ホームページ制作</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              ページ速度改善
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Page Speed Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ページ速度改善｜Core Web Vitals最適化
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ページの表示速度はSEO・ユーザー体験・コンバージョン率に直接影響します。Lighthouse 90+・Core Web Vitals「良好」を目標に、具体的な速度改善施策を実施します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="ページ速度改善・Core Web Vitals" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
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
        <PageContactCTA heading="ページ速度改善のご相談" body="現在のサイトのLighthouseスコアを計測し、速度改善施策をご提案します。Core Web Vitals改善・既存サイトの高速化・Next.js移行をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
