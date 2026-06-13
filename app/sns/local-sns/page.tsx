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
};

const faqItems = [
  { q: "地域のInstagramでフォロワーを増やすには？", a: "地域名ハッシュタグ（#○○グルメ）の活用・位置情報（スポット）の設定・近隣店舗との相互フォロー・地元メディアアカウント（○○情報局等）へのアプローチが効果的です。" },
  { q: "SNSとMEO（Googleマップ）はどう組み合わせますか？", a: "MEOで「近く・今すぐ行きたい」ユーザーを獲得し、InstagramでSNS経由で知った人を来店させる、という2ルートの集客が理想です。Googleビジネスプロフィールの投稿機能でもSNSと同様のコンテンツを発信できます。" },
  { q: "地元の人にInstagramを見てもらうには？", a: "位置情報の設定・地域ハッシュタグの活用・ストーリーズでの「近隣情報」タグの使用・地元のフォローが多いアカウントとのコラボ・地域イベント参加の投稿が効果的です。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の概要" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "地域ハッシュタグ" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO×SNS連携" },
  { href: "/sns/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP活用" },
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
              地域SNS集客
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local SNS</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              地域SNS集客｜地元顧客に届くSNS戦略
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              地域の店舗・中小企業にとってSNS集客は「遠くの人」ではなく「近くの人」に届けることが重要です。地域ハッシュタグ・位置情報・MEOとの連携で来店につながるSNS戦略を設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="地域SNS集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local Tactics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              地域集客のためのSNS施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "位置情報（スポット）の設定", b: "全投稿に店舗・エリアの位置情報を設定します。位置情報検索からの発見・マップ上への投稿表示で、地域ユーザーに届きやすくなります。" },
                { n: "02", t: "地域ハッシュタグの徹底活用", b: "「#○○グルメ」「#○○カフェ」「#○○ランチ」など地域名+業種のハッシュタグを必ず含めます。近隣の人が検索するタグで発見される機会を最大化します。" },
                { n: "03", t: "地元メディアアカウントへのアプローチ", b: "「○○市の情報局」「○○グルメまとめ」など地元ユーザーに人気のメディアアカウントへの掲載依頼・コラボ提案を行います。一度の掲載で多くの地域ユーザーにリーチできます。" },
                { n: "04", t: "MEO（Googleマップ）とSNSの連携", b: "GoogleビジネスプロフィールにInstagramの投稿リンクを設定し、マップから来たユーザーをInstagramでフォローさせます。逆にInstagramプロフィールからGoogleマップへの誘導も設計します。" },
                { n: "05", t: "地元イベント・商店街連携コンテンツ", b: "地域のお祭り・マルシェ・地元イベントへの参加・商店街マップへの掲載・近隣店舗とのコラボ企画でSNSと地域コミュニティを連動させます。" },
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
        <PageContactCTA heading="地域SNS集客のご相談" body="地域の店舗・中小企業のSNS集客戦略をご相談ください。MEO対策とSNSを連携させた地元顧客への効果的なアプローチを設計します。" />
      </main>
      <Footer />
    </>
  );
}
