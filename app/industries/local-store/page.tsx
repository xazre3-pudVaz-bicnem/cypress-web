import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域の飲食店・小売店のWeb集客｜MEO・Instagram・SEO｜株式会社サイプレス",
  description: "地域の飲食店・カフェ・小売店のWeb集客。Googleマップ上位表示（MEO）・Instagram活用・ホームページ制作で来店客数を増やすデジタル集客支援。",
  keywords: ["地域店舗 MEO対策", "飲食店 集客", "小売店 Googleマップ", "カフェ Instagram", "地域店舗 Web集客"],
  openGraph: {
    title: "地域の飲食店・小売店のWeb集客｜MEO・Instagram・SEO｜株式会社サイプレス",
    description: "地域の飲食店・小売店のWeb集客。MEO・Instagram・ホームページで来店客を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/local-store" },
};

const faqItems = [
  { q: "飲食店・小売店に最も効果的な集客手段は何ですか？", a: "MEO（Googleマップ対策）が最も即効性が高いです。「○○駅 カフェ」「○○市 居酒屋」などの検索でGoogleマップ上位に表示されることが来店の直接的なきっかけになります。" },
  { q: "食べログ・ホットペッパーと自社MEOどちらが重要ですか？", a: "両方重要です。食べログ・ホットペッパーはプラットフォームとして集客力がありますが、Googleマップ（MEO）はクチコミ数・写真・営業時間情報で直接来店につながる経路です。自社MEO対策は無料でできる施策として特に有効です。" },
  { q: "Instagramは飲食店の集客に有効ですか？", a: "はい。特に20〜40代の顧客層をターゲットにする場合、料理写真・店内雰囲気・新メニュー告知をInstagramで発信することは非常に効果的です。地域ハッシュタグを活用して近隣の顧客に届けます。" },
  { q: "地域の小規模店舗でも自社ホームページは必要ですか？", a: "はい。Googleマップ・Instagram・食べログに掲載しながら、詳細な情報（こだわり・ストーリー・スタッフ紹介）を伝えるための自社ホームページは信頼構築に重要です。" },
  { q: "口コミを増やすための具体的な方法は？", a: "レシートやメニューにGoogleマップのQRコードを印刷する・スタッフが声かけをする・Instagram投稿を促す・LINE公式アカウントで来店後に口コミ依頼を送るなどの方法があります。" },
  { q: "地域の小規模店舗でもMEO対策を始められますか？", a: "はい。MEO対策は規模を問わず始められます。Googleビジネスプロフィールの無料登録から始め、写真充実・口コミ獲得・営業時間の正確な入力など基本施策を積み上げることで、大手チェーンに対しても地元密着の強みで差別化が可能です。" },
  { q: "LINE公式アカウントは地域店舗の集客に効果がありますか？", a: "非常に効果的です。友達登録した顧客に新商品情報・限定クーポン・イベント告知を直接配信でき、来店のきっかけを継続的に作れます。Instagram集客とLINEでのリピーター育成を組み合わせることで来店サイクルが安定します。" },
  { q: "地域店舗のWebマーケティングにはどの順番で取り組むべきですか？", a: "①Googleビジネスプロフィールの整備（MEO）→②口コミ獲得の仕組み化→③Instagram運用→④LINE公式アカウントのリピーター活用→⑤自社ホームページのSEO強化、の順序が費用対効果を考えると現実的です。まずはMEOから始めることを推奨します。" },
];

const relatedLinks = [
  { href: "/meo/restaurant-meo", label: "飲食店のMEO対策", desc: "飲食店向けGoogleマップ上位表示" },
  { href: "/industries/restaurant", label: "飲食店のWebマーケティング", desc: "飲食店専門の集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "地域店舗向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "地域店舗のWeb集客相談" },
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
          <Image src="/ChatGPT Image 2026年6月14日 21_10_25 (10).png" alt="日本の地域商店 — 地域密着型飲食店・小売店のMEO対策・Web集客" fill className="object-cover" sizes="100vw" />
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
