import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Instagramハッシュタグ戦略｜新規フォロワーを集めるタグ選定",
  description: "Instagramのハッシュタグ戦略。ビッグ・ミドル・ニッチの3層設計・地域タグ・業種タグ・ブランドタグを組み合わせて新規フォロワーを効率的に獲得する方法。",
  keywords: ["ハッシュタグ戦略", "Instagram ハッシュタグ", "SNS集客", "タグ選定", "地域ハッシュタグ"],
  openGraph: {
    title: "Instagramハッシュタグ戦略｜新規フォロワーを集めるタグ選定",
    description: "Instagramのハッシュタグ戦略。ビッグ・ミドル・ニッチの3層設計・地域タグ・業種タグ・ブランドタグを組み合わせて新規フォロワーを効率的に獲得する方法。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_20_52.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/hashtag" },
};

const faqItems = [
  { q: "ハッシュタグは何個つけるのがいいですか？", a: "Instagramは最大30個まで設定できます。かつては30個すべて使うことが推奨されていましたが、現在は3〜10個の関連性の高いタグを厳選する方が効果的とされています。" },
  { q: "人気のハッシュタグ（投稿数が多いもの）を使うべきですか？", a: "人気タグ（ビッグワード）だけでは投稿がすぐに埋もれます。ビッグワード（拡散）・ミドルワード（発見）・ニッチワード（刺さる）の3層を組み合わせることが効果的です。" },
  { q: "地域タグはどのように使えばいいですか？", a: "「#○○カフェ」「#○○グルメ」「#○○美容室」など地域名+業種を組み合わせたタグで地元ユーザーへのリーチを高めます。来店が前提の店舗ビジネスに特に有効です。" },
  { q: "ハッシュタグを固定して毎回同じものを使っていいですか？", a: "完全に同じタグを毎回使うことは「スパム」とみなされリーチが下がる可能性があります。基本タグ10個+投稿ごとの変動タグ5〜10個の組み合わせがお勧めです。" },
  { q: "ハッシュタグの効果はどう計測しますか？", a: "Instagramインサイトの「発見タブからのリーチ数」を確認します。投稿ごとにタグを変えながらリーチが上がるタグセットを見つけるPDCAが効果的です。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の基本" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "コンテンツ制作" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域向けSNS戦略" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の品質" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
  { href: "/ai/sns-automation", label: "SNS自動化", desc: "AIによる効率化" },
];

const contentItems = [
  { label: "ビッグワード（拡散タグ）", body: "投稿数が100万件以上の大きなタグ。発見タブに一瞬表示されますが埋もれやすいです。1〜2個を上限として使用し、認知拡大の補助として活用します。" },
  { label: "ミドルワード（発見タグ）", body: "投稿数が1万〜100万件のタグ。競争が適度で、自社の投稿が一定時間表示されやすいです。ハッシュタグ戦略の中核として5〜7個設定します。" },
  { label: "ニッチワード（刺さるタグ）", body: "投稿数が1万件未満の具体的なタグ。競合が少なく、ターゲットにピンポイントで届きます。「#○○市美容室おすすめ」など地域+業種の組み合わせが典型例です。" },
  { label: "地域タグ", body: "「#渋谷カフェ」「#名古屋グルメ」など地域名を含むタグ。来店型ビジネスにとって最重要タグです。市区町村単位まで細かく設定することで地元ユーザーへのリーチを高めます。" },
  { label: "ブランドタグ", body: "自社独自の「#ブランド名」タグ。ファンが投稿を通じて使いやすい環境を作り、UGC（ユーザー生成コンテンツ）の収集にも使えます。プロフィールに記載して認知を広げます。" },
  { label: "シーズナルタグ", body: "「#クリスマスギフト」「#夏の美容」など季節・イベントに連動したタグ。検索需要が一時的に高まるタイミングに合わせて活用することでリーチが跳ね上がります。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "56px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/sns" style={{ color: "#6B7280" }}>SNS集客</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>ハッシュタグ戦略</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Hashtag Strategy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Instagramハッシュタグ戦略｜新規発見・集客タグ設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ハッシュタグはInstagramで新規ユーザーに投稿を発見してもらうための重要な仕組みです。業種・地域・ターゲット層に応じて最適なハッシュタグを選定・設計します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              ビッグワード・ミドルワード・ニッチワードの3層構造で設計し、地域タグ・ブランドタグを組み合わせることで、フォロワー外のユーザーへのリーチを最大化します。毎投稿ごとにタグセットを検証し、データに基づいて改善します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="ハッシュタグ戦略" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              正しいハッシュタグが、あなたの投稿を届ける。
            </p>
          </div>
        </div>

        {/* ハッシュタグ選定ミスの問題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Hashtag Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ハッシュタグ選定を間違えると起きる4つの問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "ビッグワードだけで投稿が埋もれる", b: "投稿数が数百万件のビッグタグだけを使うと投稿は数分で埋もれます。どれだけ良い写真でも発見されないまま終わります。ミドル・ニッチタグとの組み合わせが必須です。" },
                { t: "ターゲット外ユーザーにしか届かない", b: "業種・ターゲット・地域と関係のないタグを大量に使っても、実際に来店・購入に至るターゲット層に届きません。精度の高いタグ選定が集客効率を左右します。" },
                { t: "地域ユーザーにリーチできない", b: "来店型ビジネスで地域ハッシュタグを使わないことは、最大の集客機会を捨てることと同じです。「#○○市カフェ」など地域名入りタグは最も費用対効果が高い手法のひとつです。" },
                { t: "スパム判定でリーチが下がる", b: "まったく同じタグセットを毎回コピー貼り付けするとInstagramのアルゴリズムにスパムと判定され、リーチが意図的に下げられます。投稿ごとに一部変えることが重要です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>TAG STRUCTURE</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              効果的なハッシュタグの6つのカテゴリ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#f8f6f2", borderRadius: "4px", borderLeft: "3px solid #c4b89a" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.label}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
