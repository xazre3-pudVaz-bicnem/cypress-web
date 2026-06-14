import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ネイルサロンのWeb集客｜MEO・Instagram運用｜株式会社サイプレス",
  description: "ネイルサロン向けWeb集客支援。Googleマップ上位表示（MEO）・Instagram運用で新規顧客来店と定期予約を増やします。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/nail-salon" },
};

const faqItems = [
  { q: "ネイルサロンの集客にはMEOとInstagramどちらが大切ですか？", a: "どちらも重要です。Googleマップは「今すぐネイルしたい」という高購買意欲の顧客を、InstagramはビジュアルでファンになってもらいてSNS経由の予約を獲得できます。" },
  { q: "個人経営のネイルサロンでもMEO対策はできますか？", a: "はい。個人サロンほどGoogleマップからの集客効果が高いです。GBP設定・写真・口コミから始めましょう。費用は月額2〜3万円から対応しています。" },
];

const relatedLinks = [
  { href: "/industries/hair-salon", label: "ヘアサロン向けサービス", desc: "美容院集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/services/sns", label: "SNS運用代行", desc: "Instagram運用" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function NailSalonPage() {
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
              ネイルサロン
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Nail Salon</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ネイルサロンのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ネイルサロンの集客はGoogleマップとInstagramの組み合わせが最も効果的です。デザイン写真の魅力とGoogleマップ上位表示で新規・リピーターを安定獲得します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ネイルサロン向けサービス一覧
            </h2>
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "800px" }}>
              {[
                { href: "/industries/nail-salon/meo", label: "ネイルサロンのMEO対策", desc: "Googleマップ上位表示" },
                { href: "/industries/nail-salon/sns", label: "ネイルサロンのSNS運用", desc: "Instagram・LINE公式" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "24px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "6px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="ネイルサロンのWeb集客ご相談" body="MEO対策・Instagram運用でネイルサロンの集客を強化します。" />
      </main>
      <Footer />
    </>
  );
}
