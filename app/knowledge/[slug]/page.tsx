import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { getKnowledgeBySlug, getAllKnowledgeSlugs } from "@/lib/data/knowledgePages";

export async function generateStaticParams() {
  return getAllKnowledgeSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getKnowledgeBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.title}｜ナレッジ｜株式会社サイプレス`,
    description: page.metaDescription,
    alternates: { canonical: `https://www.cypress-all.co.jp/knowledge/${slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      locale: "ja_JP",
      type: "article",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function KnowledgePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getKnowledgeBySlug(slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.title,
        description: page.metaDescription,
        author: {
          "@type": "Organization",
          name: "株式会社サイプレス",
          url: "https://www.cypress-all.co.jp",
        },
        publisher: {
          "@type": "Organization",
          name: "株式会社サイプレス",
          url: "https://www.cypress-all.co.jp",
        },
        mainEntityOfPage: `https://www.cypress-all.co.jp/knowledge/${slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
          { "@type": "ListItem", position: 2, name: "ナレッジ", item: "https://www.cypress-all.co.jp/knowledge" },
          { "@type": "ListItem", position: 3, name: page.title, item: `https://www.cypress-all.co.jp/knowledge/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f9f8f5", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", alignItems: "center", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/knowledge" style={{ color: "#6B7280" }}>ナレッジ</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>{page.title}</span>
            </nav>
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9ca3af",
                fontSize: "11px",
                marginBottom: "12px",
              }}
            >
              {page.titleEn}
            </p>
            <div
              style={{
                display: "inline-block",
                background: "#f0ede6",
                color: "#6b7280",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                padding: "4px 10px",
                marginBottom: "16px",
              }}
            >
              {page.category}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3.2vw, 40px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.35,
                marginBottom: "20px",
                maxWidth: "700px",
              }}
            >
              {page.title}
            </h1>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "680px",
              }}
            >
              {page.intro}
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section style={{ background: "#ffffff", padding: "48px 0 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                background: "#f9f8f5",
                border: "1px solid #e8e4dc",
                padding: "28px 32px",
                maxWidth: "600px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#6b7280",
                  marginBottom: "14px",
                  textTransform: "uppercase",
                }}
              >
                目次
              </p>
              <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {page.sections.map((s, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "12px", color: "#9ca3af", fontFamily: "var(--font-display)", minWidth: "20px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "14px", color: "#374151", lineHeight: "1.5" }}>{s.heading}</span>
                  </li>
                ))}
                <li style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", color: "#9ca3af", fontFamily: "var(--font-display)", minWidth: "20px" }}>
                    {String(page.sections.length + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "14px", color: "#374151" }}>よくある質問</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section style={{ background: "#ffffff", paddingTop: "48px", paddingBottom: "80px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "740px" }}>
              {page.sections.map((s, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid #e8e4dc",
                    paddingTop: "40px",
                    marginTop: "40px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        fontFamily: "var(--font-display)",
                        paddingTop: "4px",
                        minWidth: "24px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(17px, 1.8vw, 22px)",
                        color: "#0d1b2a",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      {s.heading}
                    </h2>
                  </div>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.9",
                      color: "#374151",
                      paddingLeft: "40px",
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "20px",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 2.5vw, 32px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              よくある質問
            </h2>
            <div style={{ maxWidth: "740px" }}>
              {page.faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid #e8e4dc",
                    padding: "28px 0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0d1b2a",
                      marginBottom: "12px",
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#9ca3af", fontFamily: "var(--font-display)", fontSize: "13px", minWidth: "16px" }}>Q</span>
                    {faq.q}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.85",
                      color: "#6b7280",
                      paddingLeft: "28px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* Related */}
        {page.related.length > 0 && (
          <section style={{ background: "#ffffff", padding: "80px 0" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                  marginBottom: "32px",
                }}
              >
                Related
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "16px",
                  maxWidth: "740px",
                }}
              >
                {page.related.map((rel) => (
                  <Link
                    key={rel.href}
                    href={rel.href}
                    style={{
                      display: "block",
                      padding: "20px 24px",
                      border: "1px solid #e8e4dc",
                      background: "#f9f8f5",
                      textDecoration: "none",
                    }}
                  >
                    <p style={{ fontSize: "13px", fontWeight: 700, color: "#0d1b2a", marginBottom: "4px" }}>
                      {rel.label}
                    </p>
                    <p style={{ fontSize: "12px", color: "#9ca3af" }}>{rel.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
