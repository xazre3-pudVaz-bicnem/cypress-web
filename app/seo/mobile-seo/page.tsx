import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "モバイルSEO・スマートフォン対応｜モバイルファーストSEO対策｜株式会社サイプレス",
  description: "Googleのモバイルファーストインデックスに対応したスマートフォンSEOの実践。レスポンシブデザイン・表示速度・Core Web Vitalsで集客を最大化。",
  keywords: ["モバイルSEO", "スマートフォン対応", "モバイルファーストインデックス", "Core Web Vitals", "レスポンシブSEO"],
  openGraph: {
    title: "モバイルSEO・スマートフォン対応｜モバイルファーストSEO対策",
    description: "モバイルファーストインデックス対応のSEO実践ガイド。レスポンシブ・表示速度・Core Web Vitals改善で集客を最大化。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/mobile-seo" },
};

const faqItems = [
  { q: "モバイルファーストインデックスとは何ですか？", a: "Googleがウェブページの評価をモバイル版を基準に行う仕組みです。2023年以降、全サイトがモバイルファーストインデックスに移行しており、スマートフォンでの表示・速度・使いやすさがSEO評価の基準となっています。" },
  { q: "PC向けサイトとモバイル向けサイトで別々に作る必要がありますか？", a: "現在はレスポンシブデザインが推奨されており、1つのURLで全デバイスに対応するのが最もSEO的に有利です。別ドメインや別URLでの運用はcanonical設定が必要で管理が複雑になります。" },
  { q: "スマートフォンでの表示速度はどの程度が目安ですか？", a: "GoogleはLCP（最大コンテンツの表示速度）2.5秒以内を良好とみなしています。4G回線でのモバイル表示を想定し、画像圧縮・コード最適化・CDN活用で速度を改善します。" },
  { q: "モバイルSEOの改善にどのくらいの期間がかかりますか？", a: "技術的な改善（レスポンシブ対応・速度改善）は実装後1〜2ヶ月でGoogleが再評価します。コンテンツの充実やリンク獲得を含む総合的な改善は3〜6ヶ月が目安です。" },
  { q: "Googleのモバイルフレンドリーテストはどこで確認できますか？", a: "Google Search ConsoleまたはGoogle公式のモバイルフレンドリーテストツールで確認できます。URLを入力するだけで判定結果と改善点が表示されます。" },
];

const relatedLinks = [
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO全般" },
  { href: "/seo/page-speed", label: "ページ速度改善", desc: "Core Web Vitals対策" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応制作", desc: "レスポンシブデザイン" },
  { href: "/seo/seo-audit", label: "SEO監査", desc: "現状診断と改善" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細" },
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
              <Link href="/seo" style={{ color: "#6B7280" }}>SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>モバイルSEO</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Mobile SEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              モバイルSEO・スマートフォン対応
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Googleの検索トラフィックの60%以上がスマートフォンから発生しています。モバイルファーストインデックス時代において、スマートフォンでの表示品質・速度・操作性はSEO評価の根幹となります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              2023年以降、全サイトがモバイルファーストインデックス対象となっています。スマートフォン対応はもはやオプションではなく、SEOの前提条件です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="スマートフォンSEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                スマートフォンで見づらいサイトは、<br />Googleからも、ユーザーからも選ばれない。
              </p>
            </div>
          </div>
        </section>

        {/* モバイル未対応のSEOリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              スマートフォン未最適化がSEOに与える4つのダメージ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "Googleの評価低下", b: "モバイルファーストインデックスではスマートフォン版のコンテンツがSEO評価の基準です。PCで完璧でもスマートフォン版が劣ると検索順位が下がります。" },
                { t: "直帰率の急上昇", b: "スマートフォンで見づらいサイトはユーザーが数秒で離脱します。高い直帰率はGoogleに「品質が低いページ」と評価され、さらに順位低下につながります。" },
                { t: "Core Web Vitals不良", b: "LCP・CLS・INPのスコアがモバイルで「不良」になると、同等コンテンツの競合に検索順位で負けます。Core Web VitalsはGoogleの公式ランキング要因です。" },
                { t: "機会損失の拡大", b: "検索流入の60%以上がスマートフォンから。対応していないサイトはこの大半のトラフィックを競合に奪われ続けます。毎日の積み重ねで差は広がるばかりです。" },
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
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Mobile First</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  モバイルファーストインデックスとは
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  2019年以降、Googleはモバイル版のウェブページを優先的にクロール・インデックスする「モバイルファーストインデックス」を採用しています。PC版のコンテンツがどれほど優れていても、モバイル版の品質が低ければSEO評価は下がります。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  スマートフォンでの検索行動が主流となった現在、モバイル対応はSEOの前提条件です。レスポンシブデザインの採用、表示速度の最適化、タップ操作への対応が基本となります。
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Impact</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  モバイル非対応がSEOに与える影響
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  スマートフォンで表示が崩れるサイト、文字が小さすぎて読めないサイト、ボタンが押しにくいサイトはGoogleから低評価を受けます。具体的には検索順位の低下、Google Search Consoleでのモバイルユーザビリティエラーの発生、Core Web Vitalsスコアの悪化が起こります。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  離脱率の上昇も問題です。スマートフォンで使いにくいサイトはユーザーがすぐに戻るため、Googleはそのページの品質が低いと判断し、順位をさらに下げる要因となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Checklist</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              モバイルSEO対応の実装項目
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "レスポンシブデザインの採用", b: "CSSメディアクエリを使い、画面幅に応じてレイアウトが自動調整される設計。現在の標準実装方法であり、1つのURLで全デバイスに対応できます。" },
                { n: "02", t: "文字サイズ・行間のモバイル最適化", b: "本文は16px以上、行間は1.7〜1.9を確保します。ズームしなくても読める文字サイズが基本です。" },
                { n: "03", t: "タップターゲットのサイズ確保", b: "ボタンやリンクの最小サイズは44×44px。指で正確にタップできる大きさにすることで操作性と評価が向上します。" },
                { n: "04", t: "横スクロールの排除", b: "画面幅を超えるコンテンツは横スクロールが発生し、ユーザー体験を著しく損ないます。CSSでオーバーフローを制御します。" },
                { n: "05", t: "LCP（最大コンテンツ描画）の最適化", b: "ファーストビュー内の最大コンテンツ（主に画像や見出し）が2.5秒以内に表示されるよう最適化します。画像圧縮・preloadタグが有効です。" },
                { n: "06", t: "CLS（レイアウトシフト）の解消", b: "画像や広告が後から読み込まれてレイアウトがずれる問題を解消します。img要素にwidth/height属性を指定することで防げます。" },
                { n: "07", t: "ポップアップ・インタースティシャルの制限", b: "ページを覆うポップアップはモバイルでペナルティ対象になります。クッキー同意など必要最小限のもの以外は避けましょう。" },
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

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="モバイルSEOのご相談" body="スマートフォン対応・Core Web Vitals改善・表示速度最適化など、モバイルSEOに関するご相談をお気軽にどうぞ。現状の課題を確認したうえでご提案します。" />
      </main>
      <Footer />
    </>
  );
}
