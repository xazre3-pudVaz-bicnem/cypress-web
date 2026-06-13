import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "スマートフォン対応・レスポンシブ制作｜モバイルファーストのWeb制作",
  description: "スマートフォン対応・レスポンシブWebデザインの制作。モバイルファーストインデックス対応・Core Web Vitals最適化・タップ操作に配慮した使いやすいサイト設計。",
};

const faqItems = [
  { q: "レスポンシブデザインとスマートフォン専用サイトはどちらがいいですか？", a: "現在はレスポンシブデザイン（1つのURLで全デバイス対応）が推奨されます。スマートフォン専用サイト（m.example.com等）はURL分離・SEO重複・管理の複雑さなどのデメリットがあります。" },
  { q: "既存のPCサイトをスマートフォン対応にできますか？", a: "はい。既存サイトのコードを修正してレスポンシブ化する方法と、スマートフォンビューのCSSを追加する方法があります。サイトの規模・構造によって対応方法が異なります。" },
  { q: "スマートフォン対応していないとSEOにどう影響しますか？", a: "Googleのモバイルファーストインデックスにより、スマートフォン対応していないサイトはSEO評価が低くなります。また、スマートフォンユーザーの離脱率が上がることで間接的にも順位に影響します。" },
  { q: "スマートフォン対応の制作費用はどのくらいですか？", a: "新規制作の場合は最初からレスポンシブで設計するため追加費用は発生しません。既存サイトの改修の場合はサイト規模によりますが、10〜50万円程度が目安です。" },
  { q: "スマートフォン対応後の確認方法は？", a: "Googleのモバイルフレンドリーテスト・Google Search Consoleのモバイルユーザビリティレポート・実機での確認（iPhone・Android複数機種）を組み合わせて確認します。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "スマートフォンSEO" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
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
              スマートフォン対応
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Mobile First Design</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              スマートフォン対応・レスポンシブ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Web検索の60%以上がスマートフォンから行われる現在、スマートフォン対応はサイト制作の最優先事項です。モバイルファーストの設計思想で、どのデバイスでも美しく使いやすいサイトを制作します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="スマートフォン対応Web制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Implementation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              スマートフォン対応の実装方針
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "レスポンシブデザイン（Flexbox・Grid・Tailwind CSS）", b: "CSSのFlexbox・Grid・メディアクエリを使って、画面幅に応じてレイアウトが自動調整されるレスポンシブデザインを実装します。Tailwind CSSによる効率的な実装で高品質なレスポンシブを実現します。" },
                { n: "02", t: "文字サイズ・行間・余白のモバイル最適化", b: "スマートフォンでの読みやすさを優先した文字サイズ（16px以上）・行間（1.7〜1.9）・ボタン間の余白を確保します。PCとスマートフォンで適切なサイズに自動調整します。" },
                { n: "03", t: "タップターゲットの最小サイズ確保", b: "ボタン・リンク・メニューアイテムは指でタップできる最小サイズ（44×44px以上）を確保します。Googleのモバイルユーザビリティガイドラインに準拠した実装です。" },
                { n: "04", t: "横スクロールの完全排除", b: "すべてのコンテンツが画面幅内に収まるよう設計します。表・画像・埋め込みコンテンツなどで横スクロールが発生しないよう詳細に対応します。" },
                { n: "05", t: "画像サイズの最適化（next/image）", b: "next/imageコンポーネントによりスマートフォンの画面解像度・サイズに応じた最適な画像を自動配信します。不必要に大きな画像を読み込まないため表示速度が大幅に改善します。" },
                { n: "06", t: "モバイルフォームの操作性向上", b: "入力フォームのフィールドサイズ・キーボードタイプの最適化・エラーメッセージの表示位置など、スマートフォンでのフォーム操作を細部まで最適化します。" },
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
        <PageContactCTA heading="スマートフォン対応制作のご相談" body="新規のスマートフォン対応サイト制作・既存サイトのレスポンシブ化改修をご相談ください。モバイルファーストの設計でSEOと使いやすさを両立します。" />
      </main>
      <Footer />
    </>
  );
}
