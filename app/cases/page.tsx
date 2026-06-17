import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { CASES } from "@/lib/data/cases";

export const metadata: Metadata = {
  title: "MEO・SEO・ホームページ制作 支援事例｜株式会社サイプレス",
  description: "株式会社サイプレスのWeb集客支援事例一覧。MEO対策・SEO対策・ホームページ制作・SNS運用など、業種・地域別の実際の支援内容と施策の進め方を公開しています。",
  keywords: ["MEO対策 事例", "SEO対策 事例", "ホームページ制作 事例", "Web集客 事例", "中小企業 SEO事例", "株式会社サイプレス 実績"],
  openGraph: {
    title: "MEO・SEO・ホームページ制作 支援事例｜株式会社サイプレス",
    description: "MEO対策・SEO対策・ホームページ制作の支援事例一覧。業種・地域別に施策内容を公開。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/cases" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
    { "@type": "ListItem", position: 2, name: "支援事例", item: "https://www.cypress-all.co.jp/cases" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MEO・SEO・ホームページ制作 支援事例",
  description: "株式会社サイプレスのWeb集客支援事例一覧",
  numberOfItems: CASES.length,
  itemListElement: CASES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.title,
    url: `https://www.cypress-all.co.jp/cases/${c.slug}`,
  })),
};

const SERVICE_BADGE_COLORS: Record<string, string> = {
  "MEO対策": "#C4A96A",
  "SEO対策": "#6A9CC4",
  "ホームページ制作": "#6AC48B",
  "SNS運用": "#C46A9C",
  "AI活用支援": "#9C6AC4",
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
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
                  <Link
                    href="/"
                    style={{ fontSize: "11px", color: "#9CA3AF", textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
                  >
                    ホーム
                  </Link>
                </li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                  支援事例
                </li>
              </ol>
            </nav>

            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.28em",
                color: "rgba(196,169,106,0.7)",
                fontSize: "10px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Cases
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(26px, 4vw, 44px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              MEO・SEO・ホームページ制作<br />支援事例
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                lineHeight: "1.9",
                maxWidth: "560px",
              }}
            >
              サイプレスが実際に支援した事例の施策内容と取り組みの進め方を公開しています。
              業種・サービス別にご覧いただけます。実名・実績数値は掲載していません。
            </p>
          </div>
        </section>

        {/* Cases grid */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(48px, 8vh, 96px) 0",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
                gap: "clamp(20px, 3vw, 32px)",
              }}
            >
              {CASES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #E8E4DC",
                    background: "#FFFFFF",
                    textDecoration: "none",
                    transition: "box-shadow 0.22s, transform 0.22s",
                  }}
                  className="case-card"
                >
                  {/* Card header */}
                  <div
                    style={{
                      padding: "28px 28px 20px",
                      borderBottom: "1px solid #F0ECE6",
                    }}
                  >
                    {/* Industry + region */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "14px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "var(--font-display)",
                          letterSpacing: "0.08em",
                          color: "#9CA3AF",
                          background: "#F0ECE6",
                          padding: "3px 10px",
                        }}
                      >
                        {c.industry}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          color: "#9CA3AF",
                          fontFamily: "var(--font-display)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {c.region}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "16px",
                        color: "#0B1628",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        marginBottom: "12px",
                      }}
                    >
                      {c.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        lineHeight: "1.75",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {c.challenge}
                    </p>
                  </div>

                  {/* Services */}
                  <div
                    style={{
                      padding: "16px 28px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      flex: 1,
                      alignItems: "flex-start",
                    }}
                  >
                    {c.services.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "10px",
                          padding: "3px 10px",
                          border: `1px solid ${SERVICE_BADGE_COLORS[s] || "#C4BAB0"}`,
                          color: SERVICE_BADGE_COLORS[s] || "#6B7280",
                          letterSpacing: "0.05em",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div
                    style={{
                      padding: "14px 28px",
                      borderTop: "1px solid #F0ECE6",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#9CA3AF",
                        fontFamily: "var(--font-display)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {c.publishedAt.replace(/-/g, ".")}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#C4A96A",
                        fontFamily: "var(--font-display)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      詳細を見る →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(40px, 6vh, 64px) 0",
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
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Related Pages
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px" }}>
              {[
                { label: "MEO対策", href: "/meo" },
                { label: "SEO対策", href: "/seo" },
                { label: "AIO対策", href: "/aio" },
                { label: "ホームページ制作", href: "/web-design" },
                { label: "SNS運用", href: "/sns" },
                { label: "サービス一覧", href: "/services" },
                { label: "料金・費用", href: "/cost" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "12px",
                    color: "#6B7280",
                    textDecoration: "none",
                    padding: "5px 12px",
                    border: "1px solid #E8E4DC",
                    background: "#ffffff",
                    letterSpacing: "0.03em",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />

      <style>{`
        .case-card:hover {
          box-shadow: 0 8px 32px rgba(11,22,40,0.09);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
