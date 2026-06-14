import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "リフォーム会社・工務店のWeb集客｜MEO・SEO対策｜株式会社サイプレス",
  description: "リフォーム会社・工務店向けWeb集客。Googleマップ上位表示・SEO対策・施工事例サイト制作で無料見積もり依頼を増やします。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/renovation" },
};

const faqItems = [
  { q: "リフォーム会社はMEOとSEOどちらが優先ですか？", a: "「地域名＋リフォーム」での検索はGoogleマップが先に表示されることが多いため、MEO優先で始めることを推奨します。SEOは施工事例記事・費用ガイドで長期的な流入を獲得します。" },
  { q: "リフォーム会社のホームページで一番重要なコンテンツは何ですか？", a: "施工事例（ビフォーアフター写真・費用・工期・感想）が最も重要です。施工の質と信頼性を視覚的に証明できる唯一のコンテンツです。" },
];

const relatedLinks = [
  { href: "/industries/construction", label: "建設業向けサービス", desc: "建設業・工務店集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function RenovationPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link><span style={{ margin: "0 8px" }}>/</span>
              リフォーム・工務店
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Renovation</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              リフォーム会社・工務店のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              リフォームの問い合わせはGoogleマップとGoogle検索の両方から発生します。MEO・SEO・施工事例サイトの三本柱で見積もり依頼を継続的に獲得します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              リフォーム会社向けサービス一覧
            </h2>
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "800px" }}>
              {[
                { href: "/industries/renovation/meo", label: "リフォーム会社のMEO対策", desc: "Googleマップ上位表示" },
                { href: "/industries/renovation/seo", label: "リフォーム会社のSEO対策", desc: "施工事例・費用ガイドで集客" },
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
        <PageContactCTA heading="リフォーム会社のWeb集客ご相談" body="MEO対策・SEO対策・ホームページ制作でリフォームの見積もり依頼を増やします。" />
      </main>
      <Footer />
    </>
  );
}
