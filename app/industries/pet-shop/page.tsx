import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ペットショップ・トリミングサロンのWeb集客｜MEO対策｜株式会社サイプレス",
  description: "ペットショップ・トリミングサロン向けWeb集客。Googleマップ上位表示（MEO）・Instagram運用で新規顧客来店と定期利用を増やします。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/pet-shop" },
};

const faqItems = [
  { q: "ペットショップはGoogleマップとInstagramどちらが集客に効果的ですか？", a: "Googleマップは「今すぐ近くでトリミングしたい」という顧客に有効です。InstagramはペットのビフォーアフターでSNSフォロワーを獲得しブランド認知を高めます。両方の組み合わせが最も効果的です。" },
  { q: "トリミングサロンの口コミはどう増やせますか？", a: "施術後にQRコードで口コミURLへ誘導し、かわいいペットの写真と一緒に投稿してもらうよう案内することで口コミ率が高まります。" },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/services/sns", label: "SNS運用代行", desc: "Instagram運用" },
  { href: "/industries/local-store", label: "地域店舗向けサービス", desc: "地域店舗集客" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function PetShopPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link><span style={{ margin: "0 8px" }}>/</span>
              ペットショップ・トリミングサロン
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Pet Shop</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ペットショップ・トリミングサロンのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ペットショップ・トリミングサロンのWeb集客はGoogleマップでの上位表示が特に効果的です。ペットオーナーが「近くのトリミングサロン」を検索した瞬間に表示されることが来店の第一歩です。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ペットショップ向けサービス一覧
            </h2>
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "600px" }}>
              <Link href="/industries/pet-shop/meo" style={{ display: "block", padding: "24px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>ペットショップのMEO対策</p>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>Googleマップ上位表示</p>
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="ペットショップのWeb集客ご相談" body="MEO対策・SNS運用でペットショップ・トリミングサロンの集客を支援します。" />
      </main>
      <Footer />
    </>
  );
}
