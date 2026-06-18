import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import {
  getCaseStudyBySlug,
  getAllCaseSlugs,
  getRelatedCases,
  SERVICE_BADGE_COLORS,
  SERVICE_HREFS,
  SERVICE_LABELS,
  INDUSTRY_LABELS,
  CaseStudy,
} from "@/lib/data/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE = "https://www.cypress-all.co.jp";

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) return {};
  const title = `${c.title}｜${INDUSTRY_LABELS[c.industrySlug]}の成功事例｜株式会社サイプレス`;
  return {
    title,
    description: c.description,
    keywords: [
      ...c.services.map((s) => `${s} 事例`),
      `${INDUSTRY_LABELS[c.industrySlug]} Web集客`,
      `${c.region} ${c.services[0]}`,
    ],
    openGraph: {
      title,
      description: c.description,
      images: [{ url: c.image, width: 1200, height: 630 }],
      locale: "ja_JP",
      type: "article",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `${BASE}/cases/${slug}` },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) notFound();

  const regLabel = c.city ? `${c.region}${c.city}` : c.region;
  const relatedCases = getRelatedCases(c, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
      { "@type": "ListItem", position: 2, name: "成功事例", item: `${BASE}/cases` },
      { "@type": "ListItem", position: 3, name: c.title, item: `${BASE}/cases/${c.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.description,
    image: `${BASE}${encodeURI(c.image)}`,
    datePublished: c.publishedAt,
    dateModified: c.updatedAt,
    author: { "@type": "Organization", name: "株式会社サイプレス", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/cases/${c.slug}` },
  };

  const faqJsonLd =
    c.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(80px, 12vh, 120px) 0 clamp(40px, 6vh, 64px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <nav aria-label="パンくず" style={{ marginBottom: "28px" }}>
              <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
                <li><Link href="/" style={crumbLink}>ホーム</Link></li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li><Link href="/cases" style={crumbLink}>成功事例</Link></li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ ...crumbLink, color: "#6B7280" }}>{c.title}</li>
              </ol>
            </nav>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "18px" }}>
              <Link href={`/cases/industry/${c.industrySlug}`} style={{ ...metaBadge, textDecoration: "none" }}>
                {c.industry}
              </Link>
              <span style={{ fontSize: "10px", fontFamily: "var(--font-display)", letterSpacing: "0.06em", color: "#9CA3AF", padding: "3px 0" }}>
                {regLabel}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3.5vw, 38px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: "22px",
              }}
            >
              {c.title}
            </h1>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {c.serviceSlugs.map((s) => (
                <Link
                  key={s}
                  href={`/cases/service/${s}`}
                  style={{
                    fontSize: "11px",
                    padding: "4px 12px",
                    border: `1px solid ${SERVICE_BADGE_COLORS[SERVICE_LABELS[s]] || "#C4BAB0"}`,
                    color: SERVICE_BADGE_COLORS[SERVICE_LABELS[s]] || "#6B7280",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-display)",
                    textDecoration: "none",
                  }}
                >
                  {SERVICE_LABELS[s]}
                </Link>
              ))}
            </div>

            <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
              公開日 {c.publishedAt.replace(/-/g, ".")}
            </p>
          </div>
        </section>

        {/* Main content */}
        <section style={{ background: "#FFFFFF", padding: "clamp(40px, 7vh, 72px) 0" }}>
          <div
            className="case-detail-grid"
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
              display: "grid",
              gridTemplateColumns: "1fr min(320px, 30%)",
              gap: "clamp(32px, 5vw, 64px)",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <div>
              {/* Hero image */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", marginBottom: "40px", border: "1px solid #E8E4DC" }}>
                <Image src={c.image} alt={c.title} fill sizes="(max-width: 1152px) 100vw, 760px" style={{ objectFit: "cover" }} priority />
              </div>

              {/* Summary */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Summary" />
                <h2 style={h2Style}>事例概要</h2>
                <p style={bodyStyle}>{c.summary}</p>
              </div>

              {/* Challenge */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Challenge" />
                <h2 style={h2Style}>課題・背景</h2>
                <p style={bodyStyle}>{c.challenge}</p>
                <ul style={listReset}>
                  {c.beforeIssues.map((item, i) => (
                    <li key={i} style={checkItem}>
                      <span style={{ color: "#C46A6A", flexShrink: 0, marginTop: "2px" }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Solution" />
                <h2 style={h2Style}>解決アプローチ</h2>
                <p style={bodyStyle}>{c.solution}</p>
              </div>

              {/* Implemented actions */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Implementation" />
                <h2 style={h2Style}>実施した施策</h2>
                <ul style={listReset}>
                  {c.implementedActions.map((item, i) => (
                    <li key={i} style={checkItem}>
                      <span style={{ color: "#C4A96A", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Success points */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Key Points" />
                <h2 style={h2Style}>成功を支えたポイント</h2>
                <div style={{ display: "grid", gap: "12px" }}>
                  {c.successPoints.map((item, i) => (
                    <div key={i} style={{ border: "1px solid #E8E4DC", padding: "16px 18px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "#C4A96A", lineHeight: 1, flexShrink: 0 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8", margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After state */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Results" />
                <h2 style={h2Style}>施策後の変化</h2>
                <ul style={listReset}>
                  {c.afterState.map((item, i) => (
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
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "16px", lineHeight: "1.7" }}>
                  ※ 本事例の変化は当該案件の状況下における内容です。すべての事業者に同様の結果を保証するものではありません。顧客名・店舗名は非公開とし、具体的な数値は掲載していません。
                </p>
              </div>

              {/* Transferable tips */}
              <div style={{ marginBottom: "44px" }}>
                <SectionLabel label="Tips" />
                <h2 style={h2Style}>同業種で活かせるポイント</h2>
                <ul style={listReset}>
                  {c.transferableTips.map((item, i) => (
                    <li key={i} style={checkItem}>
                      <span style={{ color: "#6AC48B", flexShrink: 0, marginTop: "2px" }}>＋</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              {c.faqs.length > 0 && (
                <div style={{ marginBottom: "12px" }}>
                  <SectionLabel label="FAQ" />
                  <h2 style={h2Style}>よくある質問</h2>
                  <div>
                    {c.faqs.map((item, i) => (
                      <details key={i} style={{ borderBottom: "1px solid #E8E4DC", paddingBottom: "4px", marginBottom: "4px" }}>
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
                          <span>Q. {item.question}</span>
                          <span style={{ color: "#C4A96A", fontSize: "16px", flexShrink: 0 }}>+</span>
                        </summary>
                        <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", padding: "4px 0 16px" }}>
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="case-detail-sidebar" style={{ position: "sticky", top: "24px" }}>
              {/* Summary card */}
              <div style={{ border: "1px solid #E8E4DC", padding: "24px", marginBottom: "20px", background: "#FAFAF8" }}>
                <p style={sideLabel}>Case Info</p>
                <dl style={{ margin: 0 }}>
                  <SideRow label="業種" value={c.industry} href={`/cases/industry/${c.industrySlug}`} />
                  <SideRow label="エリア" value={regLabel} />
                </dl>
                <p style={{ ...sideLabel, marginTop: "20px", marginBottom: "12px" }}>Services Used</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {c.serviceSlugs.map((s) => (
                    <Link
                      key={s}
                      href={SERVICE_HREFS[s]}
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
                      {SERVICE_LABELS[s]}
                      <span style={{ color: "#C4BAB0", fontSize: "12px" }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ border: "1px solid #E8E4DC", padding: "24px", background: "#0B1628" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#FFFFFF", fontWeight: 700, lineHeight: 1.5, marginBottom: "12px" }}>
                  同様の施策について<br />ご相談ください
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginBottom: "20px" }}>
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
          <section style={{ background: "#F8F6F2", padding: "clamp(40px, 7vh, 72px) 0", borderTop: "1px solid #E8E4DC" }}>
            <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
              <p style={{ ...eyebrow, marginBottom: "8px" }}>Related Cases</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#0B1628", fontWeight: 700, marginBottom: "28px" }}>
                関連する成功事例
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "20px" }}>
                {relatedCases.map((rc: CaseStudy) => (
                  <Link
                    key={rc.slug}
                    href={`/cases/${rc.slug}`}
                    className="related-card"
                    style={{ display: "block", border: "1px solid #E8E4DC", background: "#FFFFFF", padding: "20px", textDecoration: "none" }}
                  >
                    <p style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>
                      {rc.industry} · {rc.region}
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0B1628", fontWeight: 600, lineHeight: 1.5, marginBottom: "10px" }}>
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
                  すべての成功事例を見る →
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
          .case-detail-sidebar { position: static !important; }
        }
      `}</style>
    </>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <p style={eyebrow}>{label}</p>;
}

function SideRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #ECE7DF" }}>
      <dt style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{label}</dt>
      <dd style={{ margin: 0, fontSize: "13px", color: "#0B1628", fontFamily: "var(--font-serif)" }}>
        {href ? (
          <Link href={href} style={{ color: "#0B1628", textDecoration: "none", borderBottom: "1px solid #D1C9BE" }}>
            {value}
          </Link>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

const crumbLink: React.CSSProperties = {
  fontSize: "11px",
  color: "#9CA3AF",
  textDecoration: "none",
  fontFamily: "var(--font-display)",
  letterSpacing: "0.05em",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  letterSpacing: "0.25em",
  color: "rgba(196,169,106,0.65)",
  fontSize: "10px",
  marginBottom: "8px",
  textTransform: "uppercase",
};

const metaBadge: React.CSSProperties = {
  fontSize: "10px",
  fontFamily: "var(--font-display)",
  letterSpacing: "0.08em",
  color: "#9CA3AF",
  background: "#E8E4DC",
  padding: "3px 12px",
};

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
  marginBottom: "16px",
};

const listReset: React.CSSProperties = { listStyle: "none", padding: 0, margin: 0 };

const checkItem: React.CSSProperties = {
  fontSize: "13px",
  color: "#374151",
  lineHeight: "1.75",
  padding: "8px 0",
  borderBottom: "1px solid #F0ECE6",
  display: "flex",
  gap: "12px",
};

const sideLabel: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#9CA3AF",
  marginBottom: "12px",
  textTransform: "uppercase",
};
