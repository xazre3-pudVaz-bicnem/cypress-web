import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "学習塾・スクールのWeb集客｜MEO・ホームページ制作｜株式会社サイプレス",
  description: "学習塾・スクール・習い事向けWeb集客。Googleマップ上位表示（MEO）・体験申込み特化のホームページ制作で入塾相談・体験授業申込みを増やします。",
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/school" },
};

const faqItems = [
  { q: "学習塾のMEO対策はいつ始めると効果的ですか？", a: "入塾ピーク（3月・9月）の2〜3ヶ月前から始めることで、繁忙期に安定した問い合わせを獲得できます。通年でGBP最適化・口コミ獲得を続けることが基本です。" },
  { q: "学習塾のホームページで問い合わせを増やすには？", a: "体験授業申込みフォームの目立たせ方・合格実績の掲載・講師紹介・料金の透明性が特に重要です。保護者の不安解消がCV率向上に直結します。" },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
  { href: "/services/web-design", label: "ホームページ制作", desc: "体験申込み特化サイト" },
  { href: "/industries", label: "業種別Web集客", desc: "全業種一覧" },
];

export default function SchoolPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link><span style={{ margin: "0 8px" }}>/</span>
              学習塾・スクール
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>School & Cram School</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              学習塾・スクールのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              学習塾・スクールの集客はGoogleマップとホームページの両輪が重要です。地域からの検索流入を獲得しながら、体験授業申込みへの転換率を最大化します。
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              学習塾・スクール向けサービス一覧
            </h2>
            <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "800px" }}>
              {[
                { href: "/industries/school/meo", label: "学習塾のMEO対策", desc: "Googleマップ上位表示" },
                { href: "/industries/school/web-design", label: "学習塾のホームページ制作", desc: "体験申込み特化サイト" },
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
        <PageContactCTA heading="学習塾・スクールのWeb集客ご相談" body="MEO対策・ホームページ制作で体験授業申込みと入塾相談を増やします。" />
      </main>
      <Footer />
    </>
  );
}
