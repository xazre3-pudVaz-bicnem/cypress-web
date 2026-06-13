import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ヘッドレスWordPress制作｜Next.js+WordPress連携",
  description: "WordPressをCMSとして使い、フロントエンドをNext.jsで構築するヘッドレス構成。使い慣れたWP管理画面を保ちながら、高速・SEO対応・安全なサイトを実現。",
};

const faqItems = [
  { q: "ヘッドレスWordPressと通常のWordPressの違いは何ですか？", a: "通常のWordPressはサーバーでPHPを実行しHTMLを生成します。ヘッドレスはWordPressをAPIサーバーとして使い、フロントエンド（見た目）をNext.jsで別途構築します。管理画面はWordPressそのままですが、表示速度・セキュリティ・SEOが大きく改善します。" },
  { q: "既存のWordPressサイトをヘッドレスに移行できますか？", a: "はい。WordPressのコンテンツ（記事・画像・カテゴリ等）はそのまま活用できます。フロントエンドをNext.jsで新たに構築し、WP REST APIまたはGraphQL（WPGraphQL）でデータを取得する構成に移行します。" },
  { q: "WordPressのプラグインはヘッドレスでも使えますか？", a: "管理画面で使うプラグイン（SEOプラグイン・フォームプラグイン等）は基本的に使えます。ただし表示系のプラグイン（スライダー・ページビルダー等）はNext.js側で代替実装が必要です。" },
  { q: "ヘッドレス構成の開発・制作費用はどのくらいですか？", a: "通常のWordPressより開発工数が増えるため、制作費用は高くなります。ただし表示速度・セキュリティ・SEOのメリットが長期的な費用対効果につながります。" },
  { q: "ヘッドレスWordPressのホスティングはどこに置きますか？", a: "Next.jsフロントエンドはVercel（推奨）、WordPress（バックエンド）は従来のサーバー（さくらインターネット・XServer等）またはWordPress専用ホスティングに置きます。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "通常のWordPress" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "Vercelでの公開" },
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
              ヘッドレスWordPress
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Headless WordPress</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ヘッドレスWordPress｜Next.js+WP連携制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ヘッドレスWordPressとは、WordPressをコンテンツ管理システム（CMS）として使い、フロントエンド（ユーザーが見る画面）をNext.jsで別途構築する手法です。WordPressの使いやすさを保ちながら、速度・SEO・セキュリティを大幅に改善できます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 00_32_58.png" alt="ヘッドレスWordPress制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Benefits</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ヘッドレス構成のメリット
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "表示速度が圧倒的に速い（SSG生成）", b: "Next.jsのSSGでビルド時にHTMLを静的生成することで、PHPの実行が不要になります。Lighthouse・Core Web Vitalsのスコアが大幅に向上します。" },
                { n: "02", t: "セキュリティリスクの大幅低減", b: "フロントエンドがNext.js（静的HTML）になるため、WordPressのPHP脆弱性・プラグイン脆弱性を攻撃されるリスクが低下します。APIサーバーとしてのWPは非公開にできます。" },
                { n: "03", t: "WordPressの管理画面はそのまま", b: "担当者は慣れたWordPressの管理画面で記事更新・画像追加を行います。技術的な変更は一切不要です。「更新しやすい」という既存メリットを保ちつつ速度を改善できます。" },
                { n: "04", t: "Next.jsによるSEO最適化", b: "ページごとの適切なmetadata・構造化データ・サイトマップ・ページ速度の完全コントロールが可能です。WordPressテーマの制約から解放されます。" },
                { n: "05", t: "Vercelによる高速CDN配信", b: "Next.jsをVercelにデプロイすることで世界規模のEdge Networkから配信されます。国内外からのアクセス速度が大幅に改善します。" },
                { n: "06", t: "開発の自由度が高い", b: "WordPressテーマのHTML・CSS制約がなく、デザインと機能を完全に自由に実装できます。Tailwind CSS・Framer Motionなど最新技術を使ったサイト制作が可能です。" },
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
        <PageContactCTA heading="ヘッドレスWordPress制作のご相談" body="既存WordPressサイトのヘッドレス移行・新規ヘッドレスWP+Next.js制作をご相談ください。WordPressの使いやすさを保ちながら、速度とSEOを最大化します。" />
      </main>
      <Footer />
    </>
  );
}
