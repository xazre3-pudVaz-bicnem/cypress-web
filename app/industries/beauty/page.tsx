import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "美容室・ネイル・まつ毛サロンのWeb集客｜MEO・SEO対策｜株式会社サイプレス",
  description: "美容室・ネイルサロン・まつ毛サロンのWeb集客。MEO（Googleマップ対策）・Instagram活用・ホームページ制作・予約導線設計で新規顧客を増やす集客支援。",
  keywords: ["美容室 MEO対策", "ネイルサロン 集客", "まつ毛サロン Googleマップ", "美容室 Instagram", "美容室 ホームページ"],
  openGraph: {
    title: "美容室・ネイル・まつ毛サロンのWeb集客｜MEO・SEO対策｜株式会社サイプレス",
    description: "美容室・ネイル・まつ毛サロンのWeb集客。MEO・Instagram・ホームページで新規顧客を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/beauty" },
};

const faqItems = [
  { q: "美容室のMEO対策で何が重要ですか？", a: "Googleビジネスプロフィールの完全な情報入力・施術写真の定期投稿・口コミ獲得・定期的な投稿（週1〜2回）が重要です。「○○市 美容室」「○○駅 ヘアサロン」など地域名+業種での検索上位を目指します。" },
  { q: "美容室のInstagram集客はどうすればいいですか？", a: "ビフォーアフター写真・スタイル写真・スタッフ紹介・店内の雰囲気など視覚的なコンテンツが有効です。ハッシュタグは地域名（#渋谷美容室）とスタイル名（#ボブ）を組み合わせて設定します。" },
  { q: "ホットペッパービューティーとホームページどちらが必要ですか？", a: "両方必要です。ホットペッパーは集客プラットフォームとして有効ですが、自社ホームページは指名顧客・ブランド構築・SEO対策の観点で重要です。ホームページからの予約はプラットフォーム手数料がかからない利点もあります。" },
  { q: "美容室のWebサイトに予約機能は必要ですか？", a: "はい。オンライン予約機能はユーザビリティを大幅に向上させます。LINE予約・Googleビジネスプロフィールからの予約・自社サイトの予約フォームを組み合わせることで予約の取りこぼしを防ぎます。" },
  { q: "美容室の口コミを増やすにはどうすればいいですか？", a: "施術後にGoogleマップのQRコードを渡す・LINE公式アカウントから口コミ依頼を送る・サンキューカードに口コミへの案内を書くなどが効果的です。自然な流れで依頼することが大切です。" },
  { q: "まつ毛サロン・ネイルサロンに特化したWeb集客の特徴は？", a: "ビジュアルに特化したビジネスのため、GBPの写真充実・Instagramの定期投稿が特に重要です。「〇〇駅 まつ毛エクステ」「〇〇区 ネイル サロン」などの地域+メニュー名で検索上位を目指すMEO対策が最も直接的に予約につながります。" },
  { q: "ヘアサロン・美容室のホームページを自社で作った場合と専門会社に依頼した場合の違いは？", a: "自社制作（Wix・Squarespace等）は初期費用を抑えられますが、SEO最適化・表示速度・予約システム連携・モバイル対応などの点で専門制作に劣ります。集客を本格化させたい場合は、SEO設計が組み込まれた専門制作サイトへの切り替えが投資対効果を高めます。" },
  { q: "脱毛サロン・エステサロンのWeb集客もサポートできますか？", a: "はい。脱毛サロン・エステサロン・アイブロウサロンなど美容業全般のWeb集客に対応しています。各サロンの強み・ターゲット顧客・競合状況に合わせてMEO・SEO・Instagram運用・ホームページ制作をご提案します。" },
];

const relatedLinks = [
  { href: "/meo/beauty-salon-meo", label: "美容サロンのMEO対策", desc: "Googleマップ上位表示で来店増加" },
  { href: "/industries/hair-salon", label: "ヘアサロン・美容院の集客", desc: "ヘアサロン専門の集客支援" },
  { href: "/industries/nail-salon", label: "ネイルサロンの集客", desc: "ネイルサロン専門の集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "美容サロン向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "美容サロンのWeb集客相談" },
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
              美容室・サロン
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Beauty & Hair Salon</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              美容室・ネイル・まつ毛サロンのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              美容・サロン業界のWeb集客はMEO（Googleマップ対策）・Instagram・ホームページの3軸が基本です。新規顧客の獲得・指名顧客の育成・リピート促進をWebで実現します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_20 (2).png" alt="美容室でのスタイリストとお客様のカウンセリング — 美容サロンのMEO対策・Web集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              美容室・サロンのWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEO（Googleマップ対策）で地域検索を制する", b: "「○○市 美容室」「○○駅 ネイルサロン」など地域名での検索でGoogleマップ上位表示を目指します。Googleビジネスプロフィールの完全最適化・口コミ増加・写真投稿を継続的に実施します。" },
                { n: "02", t: "Instagram・SNSで視覚的に魅力を伝える", b: "ビフォーアフター・スタイル写真・店内雰囲気・スタッフ紹介など視覚的なコンテンツを発信します。地域ハッシュタグと施術名ハッシュタグを組み合わせた投稿で新規顧客に届きます。" },
                { n: "03", t: "ホームページでブランドと信頼を構築", b: "メニュー・料金・スタッフ紹介・口コミ・アクセスを整理したホームページで「ここに行きたい」という決断を後押しします。スマートフォン最適化・オンライン予約導線は必須です。" },
                { n: "04", t: "口コミ獲得フローの整備", b: "施術後の自然な流れでGoogleマップ・ホットペッパーへの口コミを依頼します。QRコード・LINE送信・サンキューカードなど複数の依頼経路を整備します。" },
                { n: "05", t: "LINE公式アカウントでリピート促進", b: "LINE公式アカウントでクーポン配信・予約リマインダー・新メニュー告知を行います。一度来店した顧客を継続的につなぎとめるリピート促進の仕組みを作ります。" },
                { n: "06", t: "SEO対策でブログから集客", b: "「○○ 縮毛矯正 料金」「○○市 まつ毛パーマ おすすめ」などの検索キーワードを狙ったブログ記事で検索流入を獲得します。SEO記事は長期的な集客資産になります。" },
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
        <PageContactCTA heading="美容室・サロンのWeb集客ご相談" body="美容室・ネイルサロン・まつ毛サロンのMEO対策・Instagram運用・ホームページ制作をご相談ください。集客の仕組みを一から設計します。" />
      </main>
      <Footer />
    </>
  );
}
