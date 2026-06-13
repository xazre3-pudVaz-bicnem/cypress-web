import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "美容室・ネイル・まつ毛サロンのWeb集客｜MEO・SEO対策",
  description: "美容室・ネイルサロン・まつ毛サロンのWeb集客。MEO（Googleマップ対策）・Instagram活用・ホームページ制作・予約導線設計で新規顧客を増やす集客支援。",
};

const faqItems = [
  { q: "美容室のMEO対策で何が重要ですか？", a: "Googleビジネスプロフィールの完全な情報入力・施術写真の定期投稿・口コミ獲得・定期的な投稿（週1〜2回）が重要です。「○○市 美容室」「○○駅 ヘアサロン」など地域名+業種での検索上位を目指します。" },
  { q: "美容室のInstagram集客はどうすればいいですか？", a: "ビフォーアフター写真・スタイル写真・スタッフ紹介・店内の雰囲気など視覚的なコンテンツが有効です。ハッシュタグは地域名（#渋谷美容室）とスタイル名（#ボブ）を組み合わせて設定します。" },
  { q: "ホットペッパービューティーとホームページどちらが必要ですか？", a: "両方必要です。ホットペッパーは集客プラットフォームとして有効ですが、自社ホームページは指名顧客・ブランド構築・SEO対策の観点で重要です。ホームページからの予約はプラットフォーム手数料がかからない利点もあります。" },
  { q: "美容室のWebサイトに予約機能は必要ですか？", a: "はい。オンライン予約機能はユーザビリティを大幅に向上させます。LINE予約・Googleビジネスプロフィールからの予約・自社サイトの予約フォームを組み合わせることで予約の取りこぼしを防ぎます。" },
  { q: "美容室の口コミを増やすにはどうすればいいですか？", a: "施術後にGoogleマップのQRコードを渡す・LINE公式アカウントから口コミ依頼を送る・サンキューカードに口コミへの案内を書くなどが効果的です。自然な流れで依頼することが大切です。" },
];

const relatedLinks = [
  { href: "/industries", label: "業種別Web集客", desc: "業種別トップ" },
  { href: "/meo/beauty-salon-meo", label: "美容サロンのMEO対策", desc: "美容MEO詳細" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
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
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="美容室・サロンのWeb集客" fill className="object-cover" sizes="100vw" />
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
