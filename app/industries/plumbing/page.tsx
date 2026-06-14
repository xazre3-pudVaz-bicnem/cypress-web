import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "水道・設備工事業のWeb集客｜MEO対策｜株式会社サイプレス",
  description: "水道工事・排水管・電気工事・設備業のWeb集客。Googleマップ上位表示で緊急依頼の問い合わせを増やします。24時間対応・地域密着のMEO対策。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/plumbing" },
};

const faqItems = [
  { q: "水道・設備工事業のMEO対策は緊急依頼に有効ですか？", a: "非常に有効です。水漏れ・詰まり等の緊急依頼はGoogleマップで「近くの水道業者」を即座に検索するため、Googleマップ上位表示が最も直接的に問い合わせにつながります。" },
  { q: "設備工事業のGBPで特に重要な項目は何ですか？", a: "電話番号・営業時間（24時間対応の場合はその旨）・対応サービス内容・対応エリアが特に重要です。緊急性の高いユーザーは迷わず電話できる状態を求めています。" },
];

const relatedLinks = [
  { href: "/industries/renovation", label: "リフォーム・工務店", desc: "リフォーム集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function PlumbingPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link><span style={{ margin: "0 8px" }}>/</span>
              水道・設備工事業
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Plumbing & Facilities</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              水道・設備工事業のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              水道修理・排水詰まり・電気工事等の緊急需要はGoogleマップからの集客が最も効果的です。「近くの〇〇業者」で一番に表示されることで、緊急依頼の問い合わせを獲得します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              水道・設備工事業向けサービス一覧
            </h2>
            <div style={{ maxWidth: "400px" }}>
              <Link href="/industries/plumbing/meo" style={{ display: "block", padding: "24px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>水道・設備工事業のMEO対策</p>
                <p style={{ fontSize: "13px", color: "#6b7280" }}>緊急依頼をGoogleマップから獲得</p>
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="水道・設備工事業のWeb集客ご相談" body="MEO対策でGoogleマップ上位表示を実現し、緊急依頼の問い合わせを増やします。" />
      </main>
      <Footer />
    </>
  );
}
