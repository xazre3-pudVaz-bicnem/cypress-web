import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { getIndustrySubPagesByIndustry, getIndustrySubPage } from "@/lib/data/industrySubPages";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
const INDUSTRY = "plumbing";
const INDUSTRY_LABEL = "水道・設備工事業";
const INDUSTRY_HREF = "/industries/plumbing";

export async function generateStaticParams() {
  return getIndustrySubPagesByIndustry(INDUSTRY).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustrySubPage(INDUSTRY, slug);
  if (!page) return {};
  return {
    title: `${page.title}｜業種別のWeb集客支援｜株式会社サイプレス`,
    description: page.metaDescription,
    alternates: { canonical: `https://www.cypress-all.co.jp/industries/${INDUSTRY}/${slug}` },
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
        <section data-page-hero style={{ background: "#f0f1f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "業種別サービス", href: "/industries" }, { name: INDUSTRY_LABEL, href: INDUSTRY_HREF }, { name: page.title }]} />
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別サービス</Link><span style={{ margin: "0 8px" }}>/</span>
              <Link href={INDUSTRY_HREF} style={{ color: "#6B7280" }}>{INDUSTRY_LABEL}</Link><span style={{ margin: "0 8px" }}>/</span>
              {page.title}
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,42px)", color: "#333333", fontWeight: 700, lineHeight: 1.3 }}>{page.title}</h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "680px" }}>{page.intro}</p>
          </div>
        </section>
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px" }}>
              {page.points.map((pt) => (
                <div key={pt.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #dde0e4" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{pt.num}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#333333", marginBottom: "6px" }}>{pt.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FaqSection structuredData items={page.faqs} bgColor="#f0f1f2" />
        <RelatedPages links={page.related} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
