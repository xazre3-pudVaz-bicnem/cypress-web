import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "スマートフォン対応・レスポンシブ制作｜モバイルファーストのWeb制作｜株式会社サイプレス",
  description: "スマートフォン対応・レスポンシブWebデザインの制作。モバイルファーストインデックス対応・Core Web Vitals最適化・タップ操作に配慮した使いやすいサイト設計。",
  keywords: ["スマートフォン対応", "レスポンシブデザイン", "モバイルファースト", "モバイル対応Web制作"],
  openGraph: {
    title: "スマートフォン対応・レスポンシブ制作｜モバイルファーストのWeb制作",
    description: "モバイルファーストインデックス対応のレスポンシブWebデザイン制作。Core Web Vitals最適化・タップ操作設計。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/mobile-friendly" },
};

const faqItems = [
  { q: "レスポンシブデザインとスマートフォン専用サイトはどちらがいいですか？", a: "現在はレスポンシブデザイン（1つのURLで全デバイス対応）が推奨されます。スマートフォン専用サイト（m.example.com等）はURL分離・SEO重複・管理の複雑さなどのデメリットがあります。" },
  { q: "既存のPCサイトをスマートフォン対応にできますか？", a: "はい。既存サイトのコードを修正してレスポンシブ化する方法と、スマートフォンビューのCSSを追加する方法があります。サイトの規模・構造によって対応方法が異なります。" },
  { q: "スマートフォン対応していないとSEOにどう影響しますか？", a: "Googleのモバイルファーストインデックスにより、スマートフォン対応していないサイトはSEO評価が低くなります。また、スマートフォンユーザーの離脱率が上がることで間接的にも順位に影響します。" },
  { q: "スマートフォン対応の制作費用はどのくらいですか？", a: "新規制作の場合は最初からレスポンシブで設計するため追加費用は発生しません。既存サイトの改修の場合はサイト規模によりますが、10〜50万円程度が目安です。" },
  { q: "スマートフォン対応後の確認方法は？", a: "Googleのモバイルフレンドリーテスト・Google Search Consoleのモバイルユーザビリティレポート・実機での確認（iPhone・Android複数機種）を組み合わせて確認します。" },
  { q: "Googleのモバイルファーストインデックスとは何ですか？", a: "Googleがサイトを評価する際に、PCではなくスマートフォン版のコンテンツを基準とするインデックスの方式です。2023年以降、全サイトがモバイルファーストインデックス対象となっています。" },
  { q: "タッチ操作に特有の注意点はありますか？", a: "ボタンのサイズ（44×44px以上）・クリック可能要素の間隔（8px以上）・スワイプとスクロールの区別・ホバー演出のタップ代替などがスマートフォン特有の注意点です。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "表示速度の最適化" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "スマートフォンSEO" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "Next.jsでの開発" },
  { href: "/web-design/contact-form", label: "フォーム最適化", desc: "モバイルフォーム設計" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/vercel", label: "Vercelホスティング", desc: "高速CDN配信" },
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
              <span style={{ color: "#0d1b2a" }}>スマートフォン対応</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Mobile First Design</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              スマートフォン対応・レスポンシブ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Web検索の60%以上がスマートフォンから行われる現在、スマートフォン対応はサイト制作の最優先事項です。モバイルファーストの設計思想で、どのデバイスでも美しく使いやすいサイトを制作します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              Googleのモバイルファーストインデックスでは、スマートフォン版のコンテンツがSEO評価の基準になります。PCとスマートフォンで同等の情報量・品質を提供することが必須です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="スマートフォン対応Web制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                検索の6割はスマートフォンから。<br />モバイル最適化なしでは、集客の半分以上を失う。
              </p>
            </div>
          </div>
        </section>

        {/* スマートフォン未対応のリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Risks of Non-Responsive</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              スマートフォン未対応サイトが失う4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "直帰率の急上昇", b: "スマートフォンで横スクロールが発生したり文字が小さすぎたりすると、ユーザーは数秒で離脱します。直帰率の上昇はSEO評価にも間接的に影響します。" },
                { t: "Googleの評価低下", b: "モバイルファーストインデックスにより、スマートフォン対応していないサイトはSEO評価が下がります。検索順位が落ちることで、毎日の集客機会が失われます。" },
                { t: "集客機会の喪失", b: "検索流入の60%以上がスマートフォンからです。スマートフォン非対応サイトは、この大多数の潜在顧客に「見づらい」「使いにくい」という印象を与えています。" },
                { t: "ブランド信頼の低下", b: "スマートフォンで見づらいサイトは「古い会社」「テクノロジーに疎い会社」という印象を与えます。高品質なサービスを提供していても、Webの見た目で信頼を損なうことがあります。" },
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

        <FaqSection items={faqItems} bgColor="#f8f6f2" heading="スマートフォン対応についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="スマートフォン対応制作のご相談" body="新規のスマートフォン対応サイト制作・既存サイトのレスポンシブ化改修をご相談ください。モバイルファーストの設計でSEOと使いやすさを両立します。" />
      </main>
      <Footer />
    </>
  );
}
