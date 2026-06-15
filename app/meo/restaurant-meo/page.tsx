import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "飲食店のMEO対策｜Googleマップで集客を増やす方法",
  description: "飲食店・カフェ・居酒屋のGoogleマップ集客。GBP写真・メニュー・口コミ対応・定期投稿など飲食店特有のMEO対策を解説します。",
  keywords: ["飲食店 MEO対策", "レストラン Googleマップ", "カフェ 集客", "居酒屋 GBP最適化"],
  openGraph: {
    title: "飲食店のMEO対策｜Googleマップで集客を増やす方法",
    description: "飲食店・カフェ・居酒屋のGoogleマップ集客。GBP写真・メニュー・口コミ対応・定期投稿など飲食店特有のMEO対策を解説します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/restaurant-meo" },
};

const faqItems = [
  { q: "飲食店でMEO対策をすると何が変わりますか？", a: "「渋谷 ランチ」「新宿 居酒屋 個室」などの地域+業種キーワードで上位に表示されるようになります。Googleマップを見て来店するユーザーが増え、電話予約・Web予約の件数が増加します。" },
  { q: "食べログやホットペッパーとMEO対策はどう違いますか？", a: "食べログ・ホットペッパーは広告費が必要ですが、MEO対策はGBPを適切に管理することで無料で効果を出せます。また、GoogleマップはNavigation用途でも使われるため、初めての来店者に見つけてもらいやすい特性があります。" },
  { q: "メニューの価格を書かないとGBPの評価が下がりますか？", a: "価格を書かないことで機会損失になる可能性はありますが、Googleの評価に直接影響するとは限りません。ただし、価格帯情報はユーザーが来店を判断する重要な情報のため、目安でも記載することを推奨します。" },
  { q: "口コミへの返信文に決まった形はありますか？", a: "良い口コミには感謝と再来店の誘い、悪い口コミには謝罪・原因・改善策を記載します。テンプレートを使いつつ個別の内容に触れることで誠意が伝わります。全件返信することが重要です。" },
  { q: "飲食店のGBP写真はどのくらい必要ですか？", a: "最低でも外観2枚・内装3枚・料理5枚以上が目安です。競合が多いエリアでは20〜50枚以上の高品質な写真を揃えることで差別化できます。スマートフォンで撮影した自然光の写真でも十分です。" },
];

const relatedLinks = [
  { href: "/industries/restaurant", label: "飲食店のWeb集客", desc: "飲食店向け総合支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定の最適化" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#9CA3AF" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>飲食店のMEO対策</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Restaurant MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              飲食店のMEO対策｜Googleマップ集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「渋谷 ランチ」「池袋 居酒屋 個室」——飲食店を探す人の多くはGoogleマップで検索しています。MEO対策でGoogleマップの上位に表示されることが、飲食店の来客数向上への最短経路です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              飲食店の集客はグルメサイト掲載だけでは不十分です。Googleマップは無料で使える集客チャンネルであり、写真・メニュー・口コミ・営業時間を適切に管理することで、当日来店を検討しているユーザーに直接リーチできます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="飲食店のMEO対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              今日行くお店に選ばれる飲食店へ
            </p>
          </div>
        </section>

        {/* 飲食店MEO課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Restaurant MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              飲食店がGoogleマップ対策を怠ると失う4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "「今日行きたい」検索で競合に負ける", b: "「渋谷 ランチ 今日」「近く 居酒屋 空いてる」などの即時性の高い検索でローカルパックに表示されないと、来店意欲が最も高いユーザーを全員競合に奪われます。" },
                { t: "写真が少なく来店意欲が下がる", b: "料理・内装・外観の写真が少ない飲食店は「どんなお店かわからない」という不安から来店を躊躇されます。競合が20枚以上の写真を揃えている中で写真が5枚以下では勝負になりません。" },
                { t: "口コミ放置でブランド毀損が続く", b: "悪い口コミへの返信がない飲食店は「クレームに誠実に対応しない会社」という印象を与えます。全口コミへの丁寧な返信が信頼と再来店につながります。" },
                { t: "誤情報が来客機会を妨げる", b: "営業時間・定休日・メニュー・電話番号がGBPで正しく更新されていないと、来たかったのに閉まっていた・電話がつながらないというネガティブ体験を生みます。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Why MEO Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
              飲食店にMEO対策が特に重要な理由
            </h2>
            <div className="grid md:grid-cols-2 gap-12" style={{ marginBottom: "0" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                飲食店を探すユーザーの検索行動は「今・近く・今日」という即時性が高い特徴があります。「渋谷 ランチ 1000円以内」「新宿 居酒屋 今日 予約」など、具体的な場所と時間軸を含む検索が多く、Googleマップで上位に表示されることが集客に直結します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                食べログやホットペッパーと異なり、GBP（Googleビジネスプロフィール）の管理は基本無料です。適切な設定と継続的な運用で、広告費をかけずに集客を増やせる可能性があります。
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Key Actions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              飲食店特有のGBP最適化ポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "メニュー情報の充実（料理名・価格・写真）", b: "GBPのメニュー機能を使って料理名・価格・説明・写真を登録します。メニューが充実していると「1000円以内 ランチ」などの条件付き検索でヒットしやすくなります。" },
                { n: "02", t: "座席数・個室・禁煙情報の設定", b: "属性設定で「個室あり」「禁煙席あり」「子供連れ歓迎」などを設定します。絞り込み検索でのヒット数が増え、ニーズに合った来客を呼び込めます。" },
                { n: "03", t: "予約システムとの連携", b: "食べログ・ホットペッパー・自社Web予約との連携URLをGBPに設定します。GBPから直接予約できる状態にすることで予約転換率が上がります。" },
                { n: "04", t: "料理・内装・外観写真の定期投稿", b: "季節限定メニュー・新商品・店内装飾など、新鮮な写真を月2〜4枚ペースで追加します。写真が多いほどGoogleの評価と来訪者の期待感が上がります。" },
                { n: "05", t: "口コミへの丁寧な返信", b: "良い口コミには感謝・再来店の誘い、悪い口コミには謝罪と改善策を記載します。返信率が高いほどGoogleの評価も上がり、未来の来客への安心感を与えます。" },
                { n: "06", t: "営業時間・定休日の正確な設定", b: "祝日・季節営業・臨時休業を都度更新します。誤った営業時間情報は来店機会の損失だけでなく、クレームや低評価口コミにつながります。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="飲食店のMEO対策ご相談" body="飲食店のGoogleマップ集客・口コミ対策・GBP最適化を支援します。現在の状況と競合を確認したうえで、具体的な改善プランをご提案します。" />
      </main>
      <Footer />
    </>
  );
}
