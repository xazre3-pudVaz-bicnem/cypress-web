import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域の飲食店・小売店のWeb集客｜MEO・Instagram・SEO",
  description: "地域の飲食店・カフェ・小売店のWeb集客。Googleマップ上位表示（MEO）・Instagram活用・ホームページ制作で来店客数を増やすデジタル集客支援。",
};

const faqItems = [
  { q: "飲食店・小売店に最も効果的な集客手段は何ですか？", a: "MEO（Googleマップ対策）が最も即効性が高いです。「○○駅 カフェ」「○○市 居酒屋」などの検索でGoogleマップ上位に表示されることが来店の直接的なきっかけになります。" },
  { q: "食べログ・ホットペッパーと自社MEOどちらが重要ですか？", a: "両方重要です。食べログ・ホットペッパーはプラットフォームとして集客力がありますが、Googleマップ（MEO）はクチコミ数・写真・営業時間情報で直接来店につながる経路です。自社MEO対策は無料でできる施策として特に有効です。" },
  { q: "Instagramは飲食店の集客に有効ですか？", a: "はい。特に20〜40代の顧客層をターゲットにする場合、料理写真・店内雰囲気・新メニュー告知をInstagramで発信することは非常に効果的です。地域ハッシュタグを活用して近隣の顧客に届けます。" },
  { q: "地域の小規模店舗でも自社ホームページは必要ですか？", a: "はい。Googleマップ・Instagram・食べログに掲載しながら、詳細な情報（こだわり・ストーリー・スタッフ紹介）を伝えるための自社ホームページは信頼構築に重要です。" },
  { q: "口コミを増やすための具体的な方法は？", a: "レシートやメニューにGoogleマップのQRコードを印刷する・スタッフが声かけをする・Instagram投稿を促す・LINE公式アカウントで来店後に口コミ依頼を送るなどの方法があります。" },
];

const relatedLinks = [
  { href: "/industries", label: "業種別Web集客", desc: "業種別トップ" },
  { href: "/meo/restaurant-meo", label: "飲食店MEO対策", desc: "飲食MEO詳細" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/sns/local-sns", label: "地域SNS集客", desc: "地域SNS" },
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
              <Link href="/industries">業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              飲食店・地域小売店
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local Business</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              飲食店・地域小売店のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              地域の飲食店・カフェ・小売店のWeb集客は、MEO・Instagram・口コミの3つが基本戦略です。「近くのお店」を検索するユーザーに見つかり、来店を決断させる仕組みを構築します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="飲食店・地域店舗のWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              地域店舗のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOで地域検索からの来店を最大化", b: "「○○駅 ランチ」「○○市 カフェ おすすめ」での検索でGoogleマップ上位表示を目指します。営業時間・メニュー・価格帯・写真・口コミを充実させ、地図から直接来店するユーザーを獲得します。" },
                { n: "02", t: "Instagram・SNSで魅力的な世界観を発信", b: "料理・商品の写真・店内雰囲気・スタッフ紹介・季節メニューをInstagramで発信します。地域ハッシュタグ（#○○カフェ #○○グルメ）で近隣ユーザーへの認知を高めます。" },
                { n: "03", t: "Googleビジネスプロフィールで最新情報を発信", b: "営業時間の変更・新メニュー・イベント情報・臨時休業をGoogleビジネスプロフィールの投稿機能でリアルタイムに発信します。Google検索での表示情報を正確に保ちます。" },
                { n: "04", t: "口コミ管理で高評価を維持・増加", b: "サービス後にQRコード・LINEでGoogleマップ口コミへの誘導を行います。全口コミへの丁寧な返信も評判管理と来店決断への影響があります。" },
                { n: "05", t: "LINE公式アカウントでリピートを促進", b: "LINE公式アカウントでクーポン・新メニュー告知・限定情報を配信します。一度来店したお客様を再訪させる最も直接的な手段として活用します。" },
                { n: "06", t: "ブログ・コンテンツで地域SEOを強化", b: "「○○駅 ランチ 穴場」「○○市 誕生日 おすすめレストラン」などの検索キーワードを狙ったブログ・コンテンツで長期的な検索流入を獲得します。" },
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
        <PageContactCTA heading="飲食店・地域店舗のWeb集客ご相談" body="飲食店・カフェ・小売店・地域ビジネスのMEO対策・Instagram運用・ホームページ制作をご相談ください。来店数増加に向けた集客の仕組みを設計します。" />
      </main>
      <Footer />
    </>
  );
}
