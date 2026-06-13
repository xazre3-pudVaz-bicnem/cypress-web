import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "葛飾区のSEO対策・MEO対策・ホームページ制作｜株式会社サイプレス",
  description: "葛飾区のSEO対策・MEO対策・ホームページ制作。亀有・柴又・金町・新小岩・立石エリアの中小企業・個人事業主のWeb集客を葛飾区拠点の株式会社サイプレスが支援。",
};

const faqItems = [
  { q: "葛飾区での対面相談は可能ですか？", a: "はい。株式会社サイプレスは葛飾区白鳥4-6-1-623に拠点があります。亀有・柴又・金町・新小岩・立石・お花茶屋・堀切など葛飾区内への訪問相談・お近くでの打ち合わせに対応しています。" },
  { q: "葛飾区でMEO対策をすると効果はどのくらいで出ますか？", a: "葛飾区は競合が比較的少ない地域も多く、正しい施策をすれば1〜3か月で効果が見られる業種もあります。Googleビジネスプロフィールの完全最適化・口コミ増加・定期投稿が基本施策です。" },
  { q: "葛飾区の中小企業でも依頼できますか？", a: "はい。葛飾区の個人事業主・小規模事業者も対象です。地域密着型のSEO・MEO対策から、ホームページ制作・SNS運用まで予算に合わせてご提案します。" },
  { q: "葛飾区で実績はありますか？", a: "葛飾区を拠点に活動しており、地域の飲食店・サービス業・士業・クリニックなどの集客支援実績があります。地域の特性を熟知したうえでの支援を提供します。" },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全エリア" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
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
              <Link href="/area">対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              葛飾区
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Katsushika</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              葛飾区のSEO・MEO対策・ホームページ制作
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              株式会社サイプレスは葛飾区白鳥に拠点を置くWeb集客の専門会社です。亀有・柴又・金町・新小岩・立石エリアの店舗・中小企業のSEO対策・MEO対策・ホームページ制作を地域密着で支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.png" alt="葛飾区のSEO・MEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Local Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              葛飾区での対応サービス
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "葛飾区のMEO対策（Googleマップ上位表示）", b: "「葛飾区 美容室」「亀有 居酒屋」「柴又 カフェ」「金町 整骨院」などの地域検索でGoogleマップ上位表示を目指します。亀有・金町・新小岩・柴又・立石エリアに対応しています。" },
                { n: "02", t: "葛飾区の中小企業向けSEO対策", b: "葛飾区の地域特性を活かしたローカルSEO戦略を設計します。「葛飾区 〇〇」「亀有 〇〇」などの地域名+業種キーワードで地元ユーザーへのアプローチを強化します。" },
                { n: "03", t: "葛飾区でのホームページ・LP制作", b: "飲食店・美容室・治療院・工務店・士業など葛飾区の各業種に対応したホームページ制作を行います。対面でのヒアリングから制作・納品・保守まで一貫してサポートします。" },
                { n: "04", t: "地域密着の訪問コンサルティング", b: "葛飾区内・近隣区への訪問相談に対応しています。現地でのヒアリング・現状分析・改善提案を対面で行います。中小企業・個人事業主の方も気軽にご相談ください。" },
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
        <PageContactCTA heading="葛飾区のWeb集客ご相談" body="葛飾区のSEO対策・MEO対策・ホームページ制作をご相談ください。亀有・柴又・金町・新小岩・立石エリアへの訪問相談・打ち合わせにも対応しています。" />
      </main>
      <Footer />
    </>
  );
}
