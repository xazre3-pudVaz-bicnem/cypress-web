import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "整体院・接骨院・整骨院のWeb集客｜MEO・SNS運用｜株式会社サイプレス",
  description: "整体院・接骨院・整骨院向けWeb集客。Googleマップ上位表示（MEO）・SNS運用で新規患者来院を増やし、リピーターを定着させます。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/osteopathic" },
};

const faqItems = [
  { q: "整体院のMEO対策はどのくらいで効果が出ますか？", a: "一般的に3〜6ヶ月で効果が出始めます。GBPの写真充実と口コミ獲得を並行して進めることで改善スピードが上がります。" },
  { q: "接骨院は医療広告ガイドラインに注意が必要ですか？", a: "はい。保険適用に関する表現・症状の改善を保証する表現は規制対象となることがあります。ガイドラインを遵守しながらGBP・サイトを最適化します。" },
];

const relatedLinks = [
  { href: "/industries/clinic", label: "クリニック・医療機関", desc: "医療向け集客" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/services/sns", label: "SNS運用代行", desc: "SNS運用サービス" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function OsteopathicPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link><span style={{ margin: "0 8px" }}>/</span>
              整体院・接骨院
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Osteopathic Clinic</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              整体院・接骨院・整骨院のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              整体院・接骨院は「腰痛」「肩こり」などの症状でGoogleマップ検索されることが多く、MEO対策が特に有効です。新規患者獲得からリピーター定着まで総合的に支援します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              整体院・接骨院向けサービス一覧
            </h2>
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "800px" }}>
              {[
                { href: "/industries/osteopathic/meo", label: "整体院のMEO対策", desc: "Googleマップ上位表示" },
                { href: "/industries/osteopathic/sns", label: "整体院のSNS運用", desc: "豆知識投稿で患者獲得" },
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
        <PageContactCTA heading="整体院・接骨院のWeb集客ご相談" body="MEO対策・SNS運用で新規患者来院とリピーター定着を実現します。" />
      </main>
      <Footer />
    </>
  );
}
