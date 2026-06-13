import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Next.js制作｜高速・SEOに強いWebサイト制作",
  description: "Next.jsを使ったSEOに強く高速なWebサイト制作。SSG・SSR・App Routerによる最適化、next/imageによる画像最適化、Vercelとの組み合わせで最高のパフォーマンスを実現。",
};

const faqItems = [
  { q: "Next.jsとWordPressはどちらがいいですか？", a: "SEO・パフォーマンス・セキュリティ面ではNext.jsが優れています。ただし更新の頻度・担当者のITリテラシー・予算によって最適な選択は変わります。更新が少ない・技術リソースがある場合はNext.jsが最適です。" },
  { q: "Next.jsで作ったサイトはどこに公開しますか？", a: "Vercel（Next.js開発元が提供するホスティングサービス）が最も推奨されます。GitHubと連携した自動デプロイ・世界規模のCDN・自動SSL・高速な配信が無料プランから利用できます。" },
  { q: "Next.jsサイトの管理画面はありますか？", a: "Next.js自体に管理画面機能はありませんが、ヘッドレスWordPress（WordPress CMSとNext.jsフロントエンドの組み合わせ）やSanity・ContentfulなどのヘッドレスCMSを組み合わせることで管理画面を持てます。" },
  { q: "制作期間はどのくらいかかりますか？", a: "コーポレートサイトの規模感で、設計〜公開まで4〜8週間が目安です。ページ数・デザインの複雑さ・機能要件によって変わります。" },
  { q: "既存のWordPressサイトからNext.jsに移行できますか？", a: "はい。WordPressのコンテンツをそのままにフロントエンドをNext.jsに切り替える「ヘッドレスWordPress」への移行が可能です。WordPressの使い慣れた管理画面はそのまま使えます。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の基礎" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "Vercelでの公開" },
  { href: "/web-design/headless-wordpress", label: "ヘッドレスWordPress", desc: "WP+Next.js構成" },
  { href: "/web-design/seo-site", label: "SEO対応サイト制作", desc: "SEO特化の制作" },
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
              Next.js制作
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Next.js Development</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Next.js制作｜高速・SEOに強いWebサイト
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Next.jsはReact製のフルスタックWebフレームワークです。静的生成（SSG）・サーバーサイドレンダリング（SSR）・画像最適化・フォント最適化が標準搭載され、SEOとパフォーマンスに優れたサイトを効率的に構築できます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="Next.jsでのWeb制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
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
                { n: "03", t: "next/fontによるフォント最適化", b: "Googleフォントなどを最適化して読み込み、フォントによる表示遅延（CLS）をゼロにします。" },
                { n: "04", t: "App Routerによる効率的なレイアウト管理", b: "共通レイアウト（ヘッダー・フッター）・ページ固有レイアウトをネストした構造で管理できます。コードの重複を減らし保守性が高まります。" },
                { n: "05", t: "自動コード分割", b: "各ページに必要なJavaScriptのみを読み込む自動コード分割により、初期読み込み量を最小化します。" },
                { n: "06", t: "Vercelとの最適な組み合わせ", b: "Next.jsの開発元Vercelのホスティングと組み合わせることで、Edge Network（世界規模のCDN）による超高速配信が実現します。" },
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
        <PageContactCTA heading="Next.jsサイト制作のご相談" body="Next.js+TypeScript+Tailwind CSSによるコーポレートサイト・サービスサイト・SEO対応サイトの制作をご相談ください。設計から公開・保守まで対応します。" />
      </main>
      <Footer />
    </>
  );
}
