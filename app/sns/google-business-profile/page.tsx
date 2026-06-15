import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール投稿活用｜MEOとSNSを連携した集客",
  description: "Googleビジネスプロフィール（旧Googleマイビジネス）の投稿機能活用。最新情報・イベント・オファー投稿でGoogleマップでの存在感を高めるMEO×SNS連携集客。",
};

const faqItems = [
  { q: "Googleビジネスプロフィールの投稿はどのくらいの頻度で投稿すべきですか？", a: "週1〜2回が推奨されます。投稿は7日間で消えるため、定期的な更新が必要です。新商品・サービス・イベント・お知らせなど情報のある時は積極的に投稿します。" },
  { q: "GBP投稿とInstagramの投稿は同じ内容でいいですか？", a: "同じ内容でも問題ありませんが、GBPはGoogle検索・マップで表示されるため、営業時間の変更・特別オファー・新メニュー告知など「今すぐ行動したい」情報を優先します。" },
  { q: "Googleビジネスプロフィールの投稿で写真は必要ですか？", a: "はい。写真付き投稿はエンゲージメントが高まります。商品・料理・店内写真・スタッフ写真など投稿内容に合った写真を必ず添付します。" },
  { q: "GBP投稿はSEO（検索順位）に影響しますか？", a: "GBP投稿は直接の検索順位への影響は限定的ですが、アクティブなGBP（定期更新している）は「ビジネスが活発」というシグナルとして評価され、MEO（ローカルパック）順位に影響する可能性があります。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基本" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域向けSNS" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/services/meo", label: "MEOサービス詳細", desc: "MEO対策サービス" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/sns">SNS集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              Googleビジネスプロフィール
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Google Business Profile</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Googleビジネスプロフィール投稿活用
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Googleビジネスプロフィール（GBP）の投稿機能を活用することで、Google検索・Googleマップ上に最新情報・キャンペーン・新商品を表示できます。MEOとSNSを連携した集客を強化します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="Googleビジネスプロフィール投稿" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Post Types</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              GBP投稿の種類と活用法
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "最新情報投稿（7日間有効）", b: "お知らせ・新メニュー・スタッフ情報・日常の業務風景など幅広い内容を投稿できます。7日間で自動で消えるため、週1〜2回の更新が重要です。写真付きが効果的です。" },
                { n: "02", t: "イベント投稿（期間設定可能）", b: "セール・新商品発売・特別企画など期間限定のイベント情報を投稿できます。開始日・終了日を設定できるため、キャンペーン期間中はマップ上で目立たせることができます。" },
                { n: "03", t: "オファー投稿（クーポン機能）", b: "割引・特典・初回限定価格などのオファーを投稿できます。ボタンテキスト（「今すぐ注文」「詳細を表示」等）を設定でき、来店・予約・問い合わせへの直接誘導が可能です。" },
                { n: "04", t: "商品・サービス投稿", b: "提供する商品・サービスを写真・説明・価格と一緒に掲載できます。検索結果のGBPパネルに表示されるため、来店前の情報収集段階のユーザーに商品を知ってもらう機会になります。" },
                { n: "05", t: "Q&A（よくある質問）の管理", b: "GBPのQ&A機能でよく聞かれる質問と回答をあらかじめ設定します。「営業時間は？」「駐車場は？」「予約は必要？」などの質問に回答することでユーザーの疑問を解消し来店を促します。" },
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
        <PageContactCTA heading="GBP投稿・MEO対策のご相談" body="Googleビジネスプロフィールの投稿最適化・MEO対策をご相談ください。Googleマップでの露出を最大化し、来店・問い合わせ増加を実現します。" />
      </main>
      <Footer />
    </>
  );
}
