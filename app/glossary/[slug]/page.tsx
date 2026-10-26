import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { glossaryPages } from "@/lib/data/glossaryPages";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
export async function generateStaticParams() {
  return glossaryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = glossaryPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.term}とは｜Web集客用語集｜株式会社サイプレス`,
    description: page.metaDescription,
    openGraph: {
      title: `${page.term}とは｜Web集客用語集`,
      description: page.metaDescription,
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/hero.jpg", width: 1774, height: 887, alt: "株式会社サイプレス" }],
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `https://www.cypress-all.co.jp/glossary/${slug}` },
  };
}

export default async function GlossarySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = glossaryPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const faqJsonLd = page.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />
      <main>
        {/* Hero */}
        <section data-page-hero style={{ background: "#f0f1f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "用語集", href: "/glossary" }, { name: page.term }]} />
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/glossary" style={{ color: "#6B7280" }}>用語集</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#333333" }}>{page.term}</span>
            </nav>
            <span style={{ display: "inline-block", fontSize: "11px", color: "#9ca3af", background: "#dde0e4", padding: "3px 10px", marginBottom: "16px", fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
              {page.category}
            </span>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#9ca3af", fontSize: "11px", marginBottom: "8px" }}>{page.termEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,42px)", color: "#333333", fontWeight: 700, lineHeight: 1.3 }}>
              {page.term}とは
            </h1>
          </div>
        </section>

        {/* Definition */}
        <section style={{ background: "#ffffff", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "800px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Definition</p>
              <div style={{ padding: "28px 32px", background: "#f0f1f2", borderLeft: "3px solid #333333", marginBottom: "32px" }}>
                <p style={{ fontSize: "15px", lineHeight: "2", color: "#333333", fontWeight: 500 }}>
                  {page.definition}
                </p>
              </div>
              <p style={{ fontSize: "15px", lineHeight: "2", color: "#374151" }}>
                {page.detail}
              </p>
            </div>
          </div>
        </section>

        {/* Points */}
        <section style={{ background: "#f0f1f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Points</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,28px)", color: "#333333", fontWeight: 700, marginBottom: "40px" }}>
              知っておくべきポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.points.map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #dde0e4" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "var(--v2-accent)", fontSize: "11px", minWidth: "24px", paddingTop: "2px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#333333", marginBottom: "8px" }}>{point.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={page.faqs} bgColor="#ffffff" />
        <RelatedPages links={page.related} />
        <PageContactCTA
          heading="この用語を活用してみませんか"
          body="実際の集客施策への活用方法はお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
