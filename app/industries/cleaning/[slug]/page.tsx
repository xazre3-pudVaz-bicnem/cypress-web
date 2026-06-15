import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { getIndustrySubPagesByIndustry, getIndustrySubPage } from "@/lib/data/industrySubPages";

const INDUSTRY = "cleaning";
const INDUSTRY_LABEL = "清掃業・ハウスクリーニング";
const INDUSTRY_HREF = "/industries/cleaning";

export async function generateStaticParams() {
  return getIndustrySubPagesByIndustry(INDUSTRY).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustrySubPage(INDUSTRY, slug);
  if (!page) return {};
  return {
    title: `${page.title}｜${INDUSTRY_LABEL}向けサービス｜株式会社サイプレス`,
    description: page.metaDescription,
  };
}

export default async function IndustrySubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIndustrySubPage(INDUSTRY, slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別サービス</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href={INDUSTRY_HREF} style={{ color: "#6B7280" }}>{INDUSTRY_LABEL}</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>{page.title}</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,42px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              {page.title}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "680px" }}>
              {page.intro}
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Approach</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              {INDUSTRY_LABEL}に特化した対策ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {page.points.map((pt) => (
                <div key={pt.num} style={{ background: "#ffffff", padding: "32px" }}>
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "12px" }}>{pt.num}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.5 }}>{pt.title}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={page.faqs} bgColor="#f8f6f2" />
        <RelatedPages links={page.related} />
        <PageContactCTA
          heading={`${page.title}のご相談はサイプレスへ`}
          body={`${INDUSTRY_LABEL}に特化した集客支援を提供しています。まずはお気軽にご相談ください。`}
        />
      </main>
      <Footer />
    </>
  );
}
