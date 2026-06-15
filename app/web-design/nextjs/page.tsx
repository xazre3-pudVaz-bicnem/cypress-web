import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Next.js制作｜高速・SEOに強いWebサイト制作｜株式会社サイプレス",
  description: "Next.jsを使ったSEOに強く高速なWebサイト制作。SSG・SSR・App Routerによる最適化、next/imageによる画像最適化、Vercelとの組み合わせで最高のパフォーマンスを実現。",
  keywords: ["Next.js制作", "Next.js Web制作", "高速サイト制作", "React制作", "SSG制作"],
  openGraph: {
    title: "Next.js制作｜高速・SEOに強いWebサイト制作",
    description: "Next.js+TypeScript+Vercel構成でSEOと表示速度を最大化。Lighthouse 90+を実現するWeb制作。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/nextjs" },
};

const faqItems = [
  { q: "Next.jsとWordPressはどちらがいいですか？", a: "SEO・パフォーマンス・セキュリティ面ではNext.jsが優れています。ただし更新の頻度・担当者のITリテラシー・予算によって最適な選択は変わります。更新が少ない・技術リソースがある場合はNext.jsが最適です。" },
  { q: "Next.jsで作ったサイトはどこに公開しますか？", a: "Vercel（Next.js開発元が提供するホスティングサービス）が最も推奨されます。GitHubと連携した自動デプロイ・世界規模のCDN・自動SSL・高速な配信が無料プランから利用できます。" },
  { q: "Next.jsサイトの管理画面はありますか？", a: "Next.js自体に管理画面機能はありませんが、ヘッドレスWordPress（WordPress CMSとNext.jsフロントエンドの組み合わせ）やSanity・ContentfulなどのヘッドレスCMSを組み合わせることで管理画面を持てます。" },
  { q: "制作期間はどのくらいかかりますか？", a: "コーポレートサイトの規模感で、設計〜公開まで4〜8週間が目安です。ページ数・デザインの複雑さ・機能要件によって変わります。" },
  { q: "既存のWordPressサイトからNext.jsに移行できますか？", a: "はい。WordPressのコンテンツをそのままにフロントエンドをNext.jsに切り替える「ヘッドレスWordPress」への移行が可能です。WordPressの使い慣れた管理画面はそのまま使えます。" },
  { q: "Next.jsはどんな企業に向いていますか？", a: "技術系スタートアップ・集客重視のコーポレートサイト・SEOを重視するサービスサイト・更新頻度が低いサイトに向いています。WordPressの管理画面に慣れた担当者がいる場合はヘッドレスWordPressも選択肢です。" },
  { q: "Next.jsサイトのSEO設定は難しいですか？", a: "Next.jsのApp Routerではmetadata APIを使ってページごとのtitle・description・OGP・構造化データを簡単に設定できます。サイトマップの自動生成（app/sitemap.ts）・robots.txtも標準対応しています。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の基礎" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "Vercelでの公開" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP+Next.js構成" },
  { href: "/web-design/seo-site", label: "SEO対応サイト制作", desc: "SEO特化の制作" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "Core Web Vitals最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
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
              <span style={{ color: "#0d1b2a" }}>Next.js制作</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Next.js Development</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Next.js制作｜高速・SEOに強いWebサイト
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Next.jsはReact製のフルスタックWebフレームワークです。静的生成（SSG）・サーバーサイドレンダリング（SSR）・画像最適化・フォント最適化が標準搭載され、SEOとパフォーマンスに優れたサイトを効率的に構築できます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              サイプレスではNext.js + TypeScript + Tailwind CSS + Vercelの構成を標準として、Lighthouse全項目90+を目標に制作します。SEO設定・構造化データ・サイトマップも標準実装です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="Next.jsでのWeb制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                速さとSEOを同時に実現する、次世代の制作基盤。<br />Next.js + Vercelで、競合サイトを圧倒する。
              </p>
            </div>
          </div>
        </section>

        {/* WordPressとの比較 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Next.js vs WordPress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              WordPressとNext.jsを比較する4つの観点
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "表示速度", b: "WordPress：PHPがサーバーで実行されHTMLを動的生成するため、表示に0.5〜2秒かかることも。Next.js：SSGでビルド時にHTMLを静的生成するため、サーバー処理なしで高速表示。" },
                { t: "セキュリティ", b: "WordPress：脆弱性が多いCMS。プラグインの脆弱性が頻繁に発見され、更新を怠るとハッキングリスクが高まります。Next.js：静的HTML配信のため、サーバーサイドへの攻撃リスクが大幅に低下。" },
                { t: "SEO対応", b: "WordPress：プラグイン（Yoast等）に依存し、テーマの出力するHTMLに縛られます。Next.js：metadataを完全制御でき、ページ速度・構造化データ・サイトマップをコードレベルで最適化可能。" },
                { t: "保守性", b: "WordPress：プラグインの相性問題・更新による破壊的変更・テーマの依存関係管理が複雑。Next.js：依存関係がシンプルで、npm管理による一元的なバージョン管理が可能。" },
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why Next.js</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              Next.jsがSEO・パフォーマンスに強い理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "SSG（静的生成）・SSR（サーバーレンダリング）", b: "ページをビルド時に静的HTMLとして生成（SSG）するか、リクエスト時にサーバーで生成（SSR）するかを柔軟に選択できます。SSGは超高速・SSRは動的コンテンツに対応します。" },
                { n: "02", t: "next/imageによる自動画像最適化", b: "画像をWebP形式に自動変換・遅延読み込み・サイズの自動最適化を行います。Core Web Vitals（LCP・CLS）の改善に直結する機能です。" },
                { n: "03", t: "next/fontによるフォント最適化", b: "Googleフォントなどを最適化して読み込み、フォントによる表示遅延（CLS）をゼロにします。フォントファイルは自己ホスティングされ、外部リクエストが発生しません。" },
                { n: "04", t: "App Routerによる効率的なレイアウト管理", b: "共通レイアウト（ヘッダー・フッター）・ページ固有レイアウトをネストした構造で管理できます。コードの重複を減らし保守性が高まります。" },
                { n: "05", t: "自動コード分割", b: "各ページに必要なJavaScriptのみを読み込む自動コード分割により、初期読み込み量を最小化します。" },
                { n: "06", t: "Vercelとの最適な組み合わせ", b: "Next.jsの開発元Vercelのホスティングと組み合わせることで、Edge Network（世界規模のCDN）による超高速配信が実現します。" },
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

        <FaqSection items={faqItems} bgColor="#f8f6f2" heading="Next.js制作についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="Next.jsサイト制作のご相談" body="Next.js+TypeScript+Tailwind CSSによるコーポレートサイト・サービスサイト・SEO対応サイトの制作をご相談ください。設計から公開・保守まで対応します。" />
      </main>
      <Footer />
    </>
  );
}
