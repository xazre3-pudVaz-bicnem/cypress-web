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
};

const faqItems = [
  { q: "ハッシュタグは何個つけるのがいいですか？", a: "Instagramは最大30個まで設定できます。かつては30個すべて使うことが推奨されていましたが、現在は3〜10個の関連性の高いタグを厳選する方が効果的とされています。" },
  { q: "人気のハッシュタグ（投稿数が多いもの）を使うべきですか？", a: "人気タグ（ビッグワード）だけでは投稿がすぐに埋もれます。ビッグワード（拡散）・ミドルワード（発見）・ニッチワード（刺さる）の3層を組み合わせることが効果的です。" },
  { q: "地域タグはどのように使えばいいですか？", a: "「#○○カフェ」「#○○グルメ」「#○○美容室」など地域名+業種を組み合わせたタグで地元ユーザーへのリーチを高めます。来店が前提の店舗ビジネスに特に有効です。" },
  { q: "ハッシュタグを固定して毎回同じものを使っていいですか？", a: "完全に同じタグを毎回使うことは「スパム」とみなされリーチが下がる可能性があります。基本タグ10個+投稿ごとの変動タグ5〜10個の組み合わせがお勧めです。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/sns/post-planning", label: "投稿企画", desc: "コンテンツ制作" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域向けSNS" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
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
              <Link href="/sns">SNS集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              ハッシュタグ戦略
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Hashtag Strategy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Instagramハッシュタグ戦略｜新規発見・集客タグ設計
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ハッシュタグはInstagramで新規ユーザーに投稿を発見してもらうための重要な仕組みです。業種・地域・ターゲット層に応じて最適なハッシュタグを選定・設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="Instagramハッシュタグ戦略" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>3-Layer Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ハッシュタグの3層設計
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ビッグワード（投稿数100万以上）で拡散", b: "「#カフェ」「#美容室」「#ランチ」など投稿数の多い汎用タグ。多くのユーザーが検索・閲覧しますが競合投稿も多く、すぐに埋もれます。2〜3個程度に絞って使います。" },
                { n: "02", t: "ミドルワード（1万〜100万）で発見性を高める", b: "「#○○市カフェ」「#ボブヘア」など特定性が高いタグ。競合が少なく上位表示が維持されやすいため、ターゲットに届く可能性が高まります。5〜7個程度で構成します。" },
                { n: "03", t: "ニッチワード（1万未満）でターゲットに刺さる", b: "「#葛飾区カフェ」「#亀有ランチ」など超具体的なタグ。フォロワー数が少なくても上位に表示されやすく、来店意欲の高い地元ユーザーに届きます。" },
                { n: "04", t: "地域タグで来店を促進", b: "「#○○グルメ」「#○○美容室」「#○○駅ランチ」など地域名を含むタグは、地元ユーザーへのリーチに特に効果的です。店舗ビジネスには必須の要素です。" },
                { n: "05", t: "ブランドタグで指名検索を育てる", b: "自店舗名のオリジナルハッシュタグ（例：#サイプレス集客）を作成し、スタッフ投稿・お客様投稿に一貫して使います。ブランド認知の積み重ねで指名検索につながります。" },
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
        <PageContactCTA heading="ハッシュタグ戦略のご相談" body="業種・地域・ターゲット層に最適なハッシュタグ設計をご相談ください。Instagram集客の効率を高める戦略的なタグ設定をサポートします。" />
      </main>
      <Footer />
    </>
  );
}
