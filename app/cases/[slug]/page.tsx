import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { getCaseBySlug, getAllCaseSlugs, CASES } from "@/lib/data/cases";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{ url: "/hero.png", width: 1200, height: 630 }],
      locale: "ja_JP",
      type: "article",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `https://www.cypress-all.co.jp/cases/${slug}` },
  };
}

const SERVICE_BADGE_COLORS: Record<string, string> = {
  "MEO対策": "#C4A96A",
  "SEO対策": "#6A9CC4",
  "ホームページ制作": "#6AC48B",
  "SNS運用": "#C46A9C",
  "AI活用支援": "#9C6AC4",
};

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
      { "@type": "ListItem", position: 2, name: "支援事例", item: "https://www.cypress-all.co.jp/cases" },
      { "@type": "ListItem", position: 3, name: c.title, item: `https://www.cypress-all.co.jp/cases/${c.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDescription,
    datePublished: c.publishedAt,
    dateModified: c.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.cypress-all.co.jp/cases/${c.slug}`,
    },
  };

  const faqJsonLd = c.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  const relatedCases = CASES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />
      <main>
        {/* Page header */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(80px, 12vh, 120px) 0 clamp(48px, 7vh, 72px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            {/* Breadcrumb */}
            <nav aria-label="パンくず" style={{ marginBottom: "32px" }}>
              <ol
                style={{
                  display: "flex",
                  gap: "8px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flexWrap: "wrap",
                }}
              >
                <li>
                  <Link href="/" style={{ fontSize: "11px", color: "#9CA3AF", textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                    ホーム
                  </Link>
                </li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li>
                  <Link href="/cases" style={{ fontSize: "11px", color: "#9CA3AF", textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                    支援事例
                  </Link>
                </li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                  {c.title}
                </li>
              </ol>
            </nav>

            {/* Labels */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.08em",
                  color: "#9CA3AF",
                  background: "#E8E4DC",
                  padding: "3px 12px",
                }}
              >
                {c.industry}
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.06em",
                  color: "#9CA3AF",
                  padding: "3px 0",
                }}
              >
                {c.region}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3.5vw, 38px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: "24px",
              }}
            >
              {c.title}
            </h1>

            {/* Service tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {c.services.map((s) => (
                <Link
                  key={s}
                  href={c.serviceLinks.find((l) => l.label === s)?.href ?? "/services"}
                  style={{
                    fontSize: "11px",
                    padding: "4px 12px",
                    border: `1px solid ${SERVICE_BADGE_COLORS[s] || "#C4BAB0"}`,
                    color: SERVICE_BADGE_COLORS[s] || "#6B7280",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-display)",
                    textDecoration: "none",
                  }}
                >
                  {s}
                </Link>
              ))}
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "#9CA3AF",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.05em",
              }}
            >
              公開日 {c.publishedAt.replace(/-/g, ".")}
            </p>
          </div>
        </section>

        {/* Main content */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(48px, 8vh, 80px) 0",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
              display: "grid",
              gridTemplateColumns: "1fr min(320px, 30%)",
              gap: "clamp(32px, 5vw, 64px)",
              alignItems: "start",
            }}
            className="case-detail-grid"
          >
            {/* Left: main content */}
            <div>
              {/* Overview */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Overview" />
                <h2 style={h2Style}>概要</h2>
                <p style={bodyStyle}>{c.overview}</p>
              </div>

              {/* Challenge */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Challenge" />
                <h2 style={h2Style}>課題・背景</h2>
                <p style={bodyStyle}>{c.challenge}</p>
              </div>

              {/* Implementation */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Implementation" />
                <h2 style={h2Style}>施策内容</h2>
                {c.implementation.map((block, i) => (
                  <div key={i} style={{ marginBottom: "32px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "16px",
                        color: "#0B1628",
                        fontWeight: 700,
                        marginBottom: "14px",
                        paddingLeft: "12px",
                        borderLeft: "2px solid #C4A96A",
                      }}
                    >
                      {block.heading}
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            fontSize: "13px",
                            color: "#374151",
                            lineHeight: "1.75",
                            padding: "8px 0",
                            borderBottom: "1px solid #F0ECE6",
                            display: "flex",
                            gap: "12px",
                          }}
                        >
                          <span style={{ color: "#C4A96A", flexShrink: 0, marginTop: "2px" }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Results" />
                <h2 style={h2Style}>支援後の変化</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {c.results.map((r, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "13px",
                        color: "#374151",
                        lineHeight: "1.75",
                        padding: "10px 16px",
                        background: "#F8F6F2",
                        marginBottom: "8px",
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "#6A9CC4", flexShrink: 0 }}>→</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#9CA3AF",
                    marginTop: "16px",
                    lineHeight: "1.7",
                  }}
                >
                  ※ 本事例における成果・変化は当該案件の特定状況下における内容です。すべての事業者に同様の結果を保証するものではありません。
                </p>
              </div>

              {/* FAQ */}
              {c.faq.length > 0 && (
                <div style={{ marginBottom: "48px" }}>
                  <SectionLabel label="FAQ" />
                  <h2 style={h2Style}>よくある質問</h2>
                  <div>
                    {c.faq.map((item, i) => (
                      <details
                        key={i}
                        style={{
                          borderBottom: "1px solid #E8E4DC",
                          paddingBottom: "4px",
                          marginBottom: "4px",
                        }}
                      >
                        <summary
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "14px",
                            color: "#0B1628",
                            fontWeight: 600,
                            lineHeight: 1.5,
                            padding: "16px 0",
                            cursor: "pointer",
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "16px",
                          }}
                        >
                          <span>Q. {item.q}</span>
                          <span style={{ color: "#C4A96A", fontSize: "16px", flexShrink: 0 }}>+</span>
                        </summary>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#374151",
                            lineHeight: "1.85",
                            padding: "4px 0 16px",
                          }}
                        >
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: sidebar */}
            <aside style={{ position: "sticky", top: "24px" }}>
              {/* Service links */}
              <div
                style={{
                  border: "1px solid #E8E4DC",
                  padding: "24px",
                  marginBottom: "24px",
                  background: "#FAFAF8",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#9CA3AF",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                  }}
                >
                  Services Used
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {c.serviceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      style={{
                        fontSize: "13px",
                        color: "#0B1628",
                        textDecoration: "none",
                        fontFamily: "var(--font-serif)",
                        padding: "8px 12px",
                        background: "#FFFFFF",
                        border: "1px solid #E8E4DC",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {l.label}
                      <span style={{ color: "#C4BAB0", fontSize: "12px" }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                style={{
                  border: "1px solid #E8E4DC",
                  padding: "24px",
                  marginBottom: "24px",
                  background: "#FAFAF8",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#9CA3AF",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  Features
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {c.hasWordPress && (
                    <span style={tagStyle}>WordPress</span>
                  )}
                  {c.hasGBP && (
                    <span style={tagStyle}>Google ビジネスプロフィール</span>
                  )}
                  {c.hasSNS && (
                    <span style={tagStyle}>SNS運用</span>
                  )}
                  <span style={tagStyle}>{c.industry}</span>
                  <span style={tagStyle}>{c.region}</span>
                </div>
              </div>

              {/* CTA */}
              <div
                style={{
                  border: "1px solid #E8E4DC",
                  padding: "24px",
                  background: "#0B1628",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "14px",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    marginBottom: "12px",
                  }}
                >
                  同様の施策について<br />ご相談ください
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: "1.75",
                    marginBottom: "20px",
                  }}
                >
                  初回相談は無料です。現状をお聞きした上で適切な施策をご提案します。
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px 20px",
                    background: "#C4A96A",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  無料相談・お問い合わせ
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Related cases */}
        {relatedCases.length > 0 && (
          <section
            style={{
              background: "#F8F6F2",
              padding: "clamp(40px, 7vh, 72px) 0",
              borderTop: "1px solid #E8E4DC",
            }}
          >
            <div
              style={{
                maxWidth: "1152px",
                margin: "0 auto",
                padding: "0 clamp(24px, 5vw, 60px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.25em",
                  color: "#9CA3AF",
                  fontSize: "10px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                Related Cases
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "18px",
                  color: "#0B1628",
                  fontWeight: 700,
                  marginBottom: "28px",
                }}
              >
                他の支援事例
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                  gap: "20px",
                }}
              >
                {relatedCases.map((rc) => (
                  <Link
                    key={rc.slug}
                    href={`/cases/${rc.slug}`}
                    style={{
                      display: "block",
                      border: "1px solid #E8E4DC",
                      background: "#FFFFFF",
                      padding: "20px",
                      textDecoration: "none",
                    }}
                    className="related-card"
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        color: "#9CA3AF",
                        fontFamily: "var(--font-display)",
                        letterSpacing: "0.05em",
                        marginBottom: "8px",
                      }}
                    >
                      {rc.industry} · {rc.region}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "14px",
                        color: "#0B1628",
                        fontWeight: 600,
                        lineHeight: 1.5,
                        marginBottom: "10px",
                      }}
                    >
                      {rc.title}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {rc.services.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: "10px",
                            padding: "2px 8px",
                            border: `1px solid ${SERVICE_BADGE_COLORS[s] || "#C4BAB0"}`,
                            color: SERVICE_BADGE_COLORS[s] || "#6B7280",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: "24px" }}>
                <Link
                  href="/cases"
                  style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #D1C9BE",
                    paddingBottom: "2px",
                  }}
                >
                  すべての支援事例を見る →
                </Link>
              </div>
            </div>
          </section>
        )}

        <PageContactCTA />
      </main>
      <Footer />

      <style>{`
        .related-card { transition: box-shadow 0.2s, transform 0.2s; }
        .related-card:hover { box-shadow: 0 4px 16px rgba(11,22,40,0.08); transform: translateY(-1px); }
        @media (max-width: 768px) {
          .case-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-display)",
        letterSpacing: "0.25em",
        color: "rgba(196,169,106,0.65)",
        fontSize: "10px",
        marginBottom: "8px",
        textTransform: "uppercase",
      }}
    >
      {label}
    </p>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(18px, 2vw, 22px)",
  color: "#0B1628",
  fontWeight: 700,
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "1px solid #E8E4DC",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.9",
};

const tagStyle: React.CSSProperties = {
  fontSize: "10px",
  padding: "3px 10px",
  background: "#FFFFFF",
  border: "1px solid #E8E4DC",
  color: "#6B7280",
  fontFamily: "var(--font-display)",
  letterSpacing: "0.04em",
};
