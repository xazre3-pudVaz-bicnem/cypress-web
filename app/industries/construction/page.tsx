import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "建設業・リフォーム・外壁塗装のWeb集客｜MEO・SEO対策｜株式会社サイプレス",
  description: "建設業・リフォーム会社・外壁塗装業者のWeb集客。Googleマップ上位表示・施工事例ページ・MEO・SEO・問い合わせフォーム最適化で見積もり依頼を増やします。",
  keywords: ["建設業 MEO対策", "リフォーム 集客", "外壁塗装 Googleマップ", "工務店 ホームページ", "建設業 SEO"],
  openGraph: {
    title: "建設業・リフォーム・外壁塗装のWeb集客｜MEO・SEO対策｜株式会社サイプレス",
    description: "建設業・リフォーム会社のWeb集客。MEO・SEO・ホームページで見積もり依頼を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/construction" },
};

const faqItems = [
  { q: "建設業・リフォーム業のMEO対策で何が重要ですか？", a: "Googleビジネスプロフィールのカテゴリ設定（「リフォーム会社」「外壁塗装業者」）・施工写真の投稿・対応エリアの明記・口コミ獲得が重要です。地域名+業種での検索上位を目指します。" },
  { q: "建設業のホームページで最も重要なコンテンツは何ですか？", a: "施工事例（before&after写真・費用・工期）が最も重要です。「どんな工事をしてもらえるか」「いくらかかるか」「信頼できるか」をリアルな事例で示すことで問い合わせが増えます。" },
  { q: "外壁塗装・屋根修理のリスティング広告は効果がありますか？", a: "リスティング広告は即効性がありますが、クリック単価が高いため費用対効果の管理が重要です。SEO・MEOと組み合わせて長期的な自然流入を増やしながら広告費を下げていく戦略が有効です。" },
  { q: "悪徳業者と間違われないための信頼構築策は？", a: "建設業許可番号の明示・一人親方の場合は顔写真と名前の掲載・施工保証の明記・適正価格の目安掲載・施工事例の充実が信頼構築に有効です。透明性がCV率を高めます。" },
  { q: "建設業のSEO対策で狙うべきキーワードは？", a: "「外壁塗装 ○○市 費用」「屋根修理 ○○区 業者」「リフォーム ○○市 見積もり」など地域名+施工名+費用・業者・見積もりなどの組み合わせが効果的です。" },
  { q: "建設業・リフォーム業はSNS集客が有効ですか？", a: "InstagramやYouTubeで施工事例の動画を発信することは認知拡大に有効です。ただし建設業は検討期間が長く、SNSが直接受注につながりにくい面があります。MEO・ホームページ・施工事例を整備したうえで補足的に活用するのが現実的です。" },
  { q: "外壁塗装や屋根修理のWeb集客で気をつけることは？", a: "訪問営業型の悪徳業者と誤解されないよう、建設業許可番号・代表者顔写真・施工保証内容・適正価格の目安をホームページに明示することが重要です。透明性の高い情報公開が信頼と問い合わせ率を高めます。" },
  { q: "複数のエリアに対応している場合、集客設計はどうすればいいですか？", a: "主要対応エリアごとにエリアページ（例：/area/葛飾区）を作成し、「葛飾区 外壁塗装」「足立区 リフォーム」などのキーワードで検索上位を目指します。MEOの対応エリア設定とSEOコンテンツを組み合わせることで複数エリアからの集客を実現します。" },
];

const relatedLinks = [
  { href: "/meo/construction-meo", label: "建設業のMEO対策", desc: "Googleマップ上位表示で見積もり依頼増加" },
  { href: "/industries/renovation", label: "リフォーム会社のWeb集客", desc: "リフォーム専門の集客支援" },
  { href: "/industries/plumbing", label: "水道・設備工事業のWeb集客", desc: "設備工事の集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "建設業向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "建設業・リフォーム業のWeb集客相談" },
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
              建設業・リフォーム
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Construction & Reform</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              建設業・リフォーム・外壁塗装のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              建設業・リフォーム・外壁塗装業のWeb集客は、施工事例の充実・地域でのGoogleマップ上位表示・信頼構築が鍵です。見積もり依頼・問い合わせを継続的に獲得する仕組みを設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="建設業・リフォームのWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              建設業・リフォーム業のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "施工事例ページで信頼と技術力を証明", b: "ビフォーアフター写真・施工内容・使用素材・費用（目安）・お客様の声を掲載した施工事例ページは最も重要なコンテンツです。リアルな実績が「この業者に頼みたい」という決断を促します。" },
                { n: "02", t: "MEOでGoogleマップの地域検索上位表示", b: "「○○市 外壁塗装」「○○区 リフォーム業者」での検索でGoogleマップに表示されることが新規顧客獲得の第一歩です。Googleビジネスプロフィールの施工写真・口コミを充実させます。" },
                { n: "03", t: "地域名+施工名のSEOコンテンツ", b: "「○○市 外壁塗装 費用相場」「○○区 屋根修理 業者 選び方」など、見積もり比較段階の顧客が検索するキーワードを狙ったブログ記事で検索流入を獲得します。" },
                { n: "04", t: "信頼性を高める企業情報の透明化", b: "建設業許可番号・保有資格（一級建築士・一級塗装技能士等）・対応エリア・代表者プロフィールを明示します。「怪しい業者ではないか」という不安を情報の透明性で解消します。" },
                { n: "05", t: "問い合わせ・見積もり依頼の導線最適化", b: "電話・メールフォーム・LINEの複数窓口で問い合わせの機会損失を防ぎます。「今すぐ無料見積もり」ボタンをページ上部・固定フッターに設置して離脱を防ぎます。" },
                { n: "06", t: "口コミ獲得で信頼と検索順位を向上", b: "施工完了後にGoogleマップへの口コミを依頼するフロー（QRコード・LINE送信）を整備します。口コミ数・評価はMEO順位にも直結するため継続的な取り組みが重要です。" },
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
        <PageContactCTA heading="建設業・リフォーム業のWeb集客ご相談" body="外壁塗装・屋根修理・リフォーム・建設会社のMEO対策・ホームページ制作・SEO対策をご相談ください。見積もり依頼数の増加を目標に支援します。" />
      </main>
      <Footer />
    </>
  );
}
