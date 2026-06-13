import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { glossaryPages } from "@/lib/data/glossaryPages";

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
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/glossary">用語集</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              {page.term}
            </nav>
            <span style={{ display: "inline-block", fontSize: "11px", color: "#9ca3af", background: "#ece8e0", padding: "3px 10px", marginBottom: "16px", fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
              {page.category}
            </span>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#9ca3af", fontSize: "11px", marginBottom: "8px" }}>{page.termEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,42px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              {page.term}とは
            </h1>
          </div>
        </section>

        {/* Definition */}
        <section style={{ background: "#ffffff", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "800px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Definition</p>
              <div style={{ padding: "28px 32px", background: "#f8f6f2", borderLeft: "3px solid #0d1b2a", marginBottom: "32px" }}>
                <p style={{ fontSize: "15px", lineHeight: "2", color: "#0d1b2a", fontWeight: 500 }}>
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
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Points</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              知っておくべきポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.points.map((point, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "11px", minWidth: "24px", paddingTop: "2px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{point.title}</p>
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
