import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域SNS集客｜地元顧客に刺さるSNS戦略",
  description: "地域の店舗・中小企業のSNS集客。地域ハッシュタグ・位置情報タグ・地元メディアアカウントへのアプローチ・MEO×SNS連携で地域ユーザーに届く集客を実現。",
  keywords: ["地域SNS集客", "地域ハッシュタグ", "MEO SNS", "地元集客", "店舗SNS"],
  openGraph: {
    title: "地域SNS集客｜地元顧客に刺さるSNS戦略",
    description: "地域の店舗・中小企業のSNS集客。地域ハッシュタグ・位置情報タグ・地元メディアアカウントへのアプローチ・MEO×SNS連携で地域ユーザーに届く集客を実現。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_22_31.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/local-sns" },
};

const faqItems = [
  { q: "地域のInstagramでフォロワーを増やすには？", a: "地域名ハッシュタグ（#○○グルメ）の活用・位置情報（スポット）の設定・近隣店舗との相互フォロー・地元メディアアカウント（○○情報局等）へのアプローチが効果的です。" },
  { q: "SNSとMEO（Googleマップ）はどう組み合わせますか？", a: "MEOで「近く・今すぐ行きたい」ユーザーを獲得し、InstagramでSNS経由で知った人を来店させる、という2ルートの集客が理想です。Googleビジネスプロフィールの投稿機能でもSNSと同様のコンテンツを発信できます。" },
  { q: "地元の人にInstagramを見てもらうには？", a: "位置情報の設定・地域ハッシュタグの活用・ストーリーズでの「近隣情報」タグの使用・地元のフォローが多いアカウントとのコラボ・地域イベント参加の投稿が効果的です。" },
  { q: "地域SNS集客にはどのSNSプラットフォームが適していますか？", a: "Instagram（ビジュアル重視の業種）・X（情報発信・速報性）・Googleビジネスプロフィール（マップ集客）の3つを組み合わせるのが理想です。業種によってFacebook・LINEも有効です。" },
  { q: "地域の競合店舗と差別化するSNS戦略は？", a: "「スタッフの顔が見える」「地域のイベント・文化と連動する」「お客様の声・UGC（ユーザー投稿）を積極的に紹介する」など、地元との繋がりを見せるコンテンツが差別化に効果的です。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の基本" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "地域ハッシュタグ設計" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO×SNS連携" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ制作" },
  { href: "/sns/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP活用" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
];

const contentItems = [
  { title: "地域ハッシュタグの設計", body: "「#○○市カフェ」「#○○グルメ」「#○○美容室おすすめ」など地域名+業種・用途を組み合わせたタグを10〜15個設計します。検索ボリュームと競合投稿数を確認しながら最適なタグセットを作ります。" },
  { title: "位置情報タグの活用", body: "Instagramの「場所を追加」機能で店舗・地域名・ランドマークの位置情報をすべての投稿に設定します。位置情報で検索するユーザーにリーチできるため、来店型ビジネスには必須の設定です。" },
  { title: "MEO×SNS連携戦略", body: "Googleマップ（MEO）でリーチした「今すぐ来店したい」ユーザーとInstagramで「気になるお店を発見した」ユーザーの2層を獲得します。GBPの投稿機能でもInstagramと同じコンテンツを発信できます。" },
  { title: "地元メディアアカウントとの連携", body: "「○○市グルメ情報」「○○エリアおでかけ」などの地域メディアアカウントをフォロー・タグ付けして関係を築きます。掲載・紹介されることで一気に地域ユーザーへのリーチが拡大します。" },
  { title: "地域イベント・季節との連動", body: "地元の祭り・花火大会・マルシェ・季節の観光スポットと連動したコンテンツは地域ユーザーの共感を集めます。「地元密着」を感じさせる投稿がフォローとエンゲージメントを生みます。" },
  { title: "UGC（ユーザー投稿）の活用", body: "お客様が投稿した写真をリポスト・ストーリーズで紹介します。UGCは信頼性が高く、投稿の手間が省けるうえ、紹介されたお客様が新たなフォロワーの紹介役になるという好循環を生みます。" },
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
              <span style={{ color: "#0d1b2a" }}>地域SNS集客</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local SNS</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              地域SNS集客｜地元顧客に届くSNS戦略
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              地域の店舗・中小企業にとってSNS集客は「遠くの人」ではなく「近くの人」に届けることが重要です。地域ハッシュタグ・位置情報・MEOとの連携で来店につながるSNS戦略を設計します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              フォロワー数を追うのではなく「地元のお客様に知ってもらい、来店してもらう」ことを最優先します。Googleマップ（MEO）との2軸集客で、地域No.1の認知度を獲得します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="地域SNS集客" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              地元に愛されるお店は、地元に届くSNSをしている。
            </p>
          </div>
        </div>

        {/* 地域SNS集客で成果が出ない理由 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why Local SNS Fails</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              地域SNS集客で成果が出ない4つの理由
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "地域ハッシュタグを使っていない", b: "「#東京カフェ」「#○○市美容室」など地域名を含むタグを使わないと、地元ユーザーの検索に引っかかりません。来店型ビジネスにとって地域タグは集客の根幹です。" },
                { t: "位置情報タグを設定していない", b: "Instagramの「場所を追加」機能を設定していないと、位置情報検索からの流入がゼロになります。近くにいるユーザーへのリーチは位置情報タグなしには実現できません。" },
                { t: "MEOとSNSが連携できていない", b: "Googleマップで来店意欲が高まったユーザーとInstagramで認知したユーザーの2ルートを活かせていません。GBP投稿・Instagram連携でより多くの地域ユーザーに届きます。" },
                { t: "地域ユーザーに刺さるコンテンツがない", b: "全国向けの一般的なコンテンツは地元ユーザーの共感を生みません。地域のイベント・季節の話題・スタッフの顔が見えるコンテンツが「地元のお店感」を生み集客につながります。" },
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textAlign: "center" }}>LOCAL STRATEGY</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              地域集客を強化する6つの施策
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#f8f6f2", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px" }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
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
