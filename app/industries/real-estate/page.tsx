import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "不動産会社のWeb集客｜MEO・SEO・ホームページ制作｜株式会社サイプレス",
  description: "不動産会社・賃貸管理・売買仲介のWeb集客。Googleマップ上位表示・SEO・ホームページ制作・物件情報の見せ方最適化で問い合わせ数を増やします。",
  keywords: ["不動産 MEO対策", "不動産会社 集客", "不動産 Googleマップ", "不動産 SEO", "不動産会社 ホームページ"],
  openGraph: {
    title: "不動産会社のWeb集客｜MEO・SEO・ホームページ制作｜株式会社サイプレス",
    description: "不動産会社のWeb集客。MEO・SEO・ホームページ制作で問い合わせと来店を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/real-estate" },
};

const faqItems = [
  { q: "不動産会社のMEOはどのくらい重要ですか？", a: "「○○市 不動産」「○○駅 賃貸」など近くの不動産会社を探す検索でGoogleマップ上位表示は非常に重要です。来店・問い合わせのきっかけとして地域検索は主要な集客経路です。" },
  { q: "不動産のホームページとSUUMO・アットホームなどポータルサイトはどちらが重要ですか？", a: "両方必要です。ポータルサイトは物件を探す顧客の入口として有効ですが、自社サイトは会社の信頼構築・リピート顧客・指名顧客の獲得・SEOに効果的です。" },
  { q: "不動産会社のSEO対策で狙うべきキーワードは？", a: "「○○市 マンション 売却」「○○駅 賃貸 1LDK」「○○区 不動産 売買 相談」など地域名+物件種別+ユーザーの目的を組み合わせたロングテールキーワードが効果的です。" },
  { q: "売却物件の情報はホームページに掲載すべきですか？", a: "売却物件（売主からの依頼物件）はポータルサイトへの掲載が主ですが、自社サイトでの掲載も可能です。売却相談のコンテンツ（「査定の流れ」「売却の注意点」）はSEOと信頼構築に有効です。" },
  { q: "不動産会社のSNS活用はどうすればいいですか？", a: "Instagramは物件写真・周辺エリア情報の発信に、YouTubeは物件動画・内見動画の公開に活用できます。地域の暮らし情報を発信することで、エリア検討中の顧客へのアプローチが可能です。" },
  { q: "不動産会社のGoogleマップで口コミを増やすには？", a: "成約後のお礼連絡時に口コミリンクを送ることが最も自然で効果的な方法です。「お部屋探しのご感想をGoogleにいただけますか」という一言とQRコード・URLを組み合わせることで口コミ獲得率が上がります。担当者への個人的な信頼が口コミにつながりやすい業種です。" },
  { q: "不動産会社のホームページで差別化するためのポイントは？", a: "「担当者紹介（顔写真・得意分野・経験）」「地域の暮らし情報ブログ」「お客様の声（購入・賃貸それぞれ）」「売却相談の流れ」など、会社の個性と専門性が伝わるコンテンツが差別化になります。ポータルサイトにない情報を自社サイトで発信することがポイントです。" },
  { q: "不動産売買と賃貸管理の集客は分けて設計すべきですか？", a: "はい。売買仲介はSEO（「○○市 戸建て 購入」「査定 売却 相談」）とMEOが有効で、賃貸管理は「○○駅 賃貸 ペット可」のような絞り込み条件を含む地域SEOとポータルサイトの最適化が効果的です。ターゲット顧客が異なるため、ページとキーワード設計を分けた設計を推奨します。" },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "不動産会社向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "物件・売却相談向けLP" },
  { href: "/industries/professional-service", label: "士業・コンサルタントの集客", desc: "士業のWeb集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "不動産会社のWeb集客相談" },
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
              不動産
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Real Estate</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              不動産会社のWeb集客｜MEO・SEO・ホームページ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              不動産の売買・賃貸・管理業のWeb集客は、地域検索での存在感・信頼性の構築・問い合わせへの導線設計が重要です。ポータルサイトに頼らない自社集客の仕組みを構築します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="不動産会社のWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              不動産会社のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOで地域の不動産検索を捕捉", b: "「○○市 不動産会社」「○○駅 賃貸 相談」での地域検索でGoogleマップに上位表示されることが、来店・問い合わせの最初の入口になります。Googleビジネスプロフィールを完全に整備します。" },
                { n: "02", t: "自社ホームページで信頼と専門性を構築", b: "代表者・スタッフプロフィール・地域の取引実績・お客様の声・会社の歴史など、「この会社に相談したい」と思わせる信頼要素を丁寧に構築します。" },
                { n: "03", t: "地域コンテンツでSEOと信頼を両立", b: "「○○市 住みやすい街ランキング」「○○駅 周辺 生活環境」など、エリアを検討中の顧客が検索するコンテンツを制作します。地域の専門家としてのポジションを確立します。" },
                { n: "04", t: "売却・購入・賃貸それぞれの導線設計", b: "売却相談・購入相談・賃貸相談それぞれに特化したランディングページや専用問い合わせフォームを設置します。顧客のニーズに合わせた導線で問い合わせ率を高めます。" },
                { n: "05", t: "物件動画・内見動画で遠方顧客も集客", b: "YouTubeやInstagramでの物件動画・内見動画の公開で、遠方から引越しを検討している顧客へアプローチします。動画は物件の魅力を最も効果的に伝えるコンテンツです。" },
                { n: "06", t: "口コミ管理で信頼と地域実績を積み上げ", b: "成約後のお客様に口コミ依頼を行い、取引実績とリアルな評判を蓄積します。不動産は人生の重大な決断であるため、口コミは購買意思決定に大きな影響を与えます。" },
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
        <PageContactCTA heading="不動産会社のWeb集客ご相談" body="不動産会社のMEO対策・ホームページ制作・SEO対策・SNS活用をご相談ください。ポータルサイト依存から脱却した自社集客の仕組みを構築します。" />
      </main>
      <Footer />
    </>
  );
}
