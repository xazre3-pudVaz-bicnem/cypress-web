import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ハウスクリーニング・清掃業のWeb集客｜MEO・SEO対策",
  description: "ハウスクリーニング・エアコンクリーニング・清掃業のWeb集客。Googleマップ上位表示・地域SEO・ホームページ制作・口コミ獲得で定期受注を増やします。",
};

const faqItems = [
  { q: "ハウスクリーニング業のMEO対策は効果がありますか？", a: "はい。「○○市 ハウスクリーニング」「○○区 エアコンクリーニング」など地域名での検索でGoogleマップに上位表示されることは、問い合わせ獲得に非常に有効です。" },
  { q: "清掃業のホームページに必要な情報は何ですか？", a: "サービス一覧・料金（目安）・対応エリア・スタッフ紹介（顔写真）・施工写真・口コミ・問い合わせフォーム・電話番号が最低限必要です。料金の透明性が特に重要です。" },
  { q: "ハウスクリーニング業で口コミを増やすには？", a: "サービス完了後にQRコードで口コミURLへ誘導する・LINEでお礼メッセージと一緒に口コミ依頼を送る・リピート客にも定期的に依頼するなどの方法が効果的です。" },
  { q: "季節によって需要が変動する清掃業のWeb対策は？", a: "エアコンクリーニングは夏前（4〜5月）・大掃除は年末（11〜12月）など需要期の2〜3か月前からSEOコンテンツ・MEO強化・SNS告知を始めることが重要です。" },
  { q: "清掃業のリピート顧客を増やすデジタル施策は？", a: "LINE公式アカウントで定期クリーニングのリマインダー送信・季節ごとのキャンペーン告知・ポイント制度の案内などが効果的です。一度の利用から定期契約へ転換を目指します。" },
];

const relatedLinks = [
  { href: "/industries", label: "業種別Web集客", desc: "業種別トップ" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/web-design/landing-page", label: "ランディングページ", desc: "LP制作" },
  { href: "/services/meo", label: "MEOサービス", desc: "MEO対策サービス" },
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
              ハウスクリーニング・清掃
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Cleaning Service</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ハウスクリーニング・清掃業のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ハウスクリーニング・エアコンクリーニング・清掃業のWeb集客は、地域検索での見つかりやすさ・料金の透明性・信頼性が鍵です。MEO・SEO・口コミ管理で継続的な問い合わせを獲得します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="ハウスクリーニング・清掃業のWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              清掃業のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOで地域の清掃需要を即捕捉", b: "「○○市 ハウスクリーニング」「○○区 エアコン掃除 業者」での地域検索でGoogleマップ上位に表示されることが集客の第一歩です。サービス区分・対応エリア・料金目安を明記します。" },
                { n: "02", t: "料金の透明性でCVを高める", b: "「料金が不明なサービスは問い合わせにくい」というユーザー心理に対応し、場所別・㎡別の料金目安をわかりやすく掲載します。透明な料金提示が信頼と問い合わせ率を高めます。" },
                { n: "03", t: "施工前後の写真で効果を視覚的に証明", b: "清掃前と清掃後のビフォーアフター写真はサービスの効果を最も直感的に伝えられるコンテンツです。キッチン・浴室・エアコンなど箇所別の事例を充実させます。" },
                { n: "04", t: "季節に合わせたSEO・MEO対策", b: "エアコンクリーニング（春〜初夏）・大掃除（秋〜冬）などの需要期に合わせて、2〜3か月前からSEOコンテンツの準備・MEO強化・SNS告知を実施します。" },
                { n: "05", t: "口コミ管理で信頼と検索順位を高める", b: "サービス完了後に口コミ依頼のフロー（QRコード・LINE送信）を整備します。清掃業は口コミが選択の決め手になりやすいため、継続的な口コミ獲得が重要です。" },
                { n: "06", t: "LINE公式アカウントで定期契約を促進", b: "LINE公式アカウントで定期クリーニングのリマインダー・季節キャンペーン告知を配信します。一度の利用から3か月・6か月ごとの定期契約への転換を促します。" },
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
        <PageContactCTA heading="清掃業のWeb集客ご相談" body="ハウスクリーニング・エアコンクリーニング・清掃会社のMEO・SEO・ホームページ制作をご相談ください。定期受注増加に向けた集客の仕組みを設計します。" />
      </main>
      <Footer />
    </>
  );
}
