import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import CaseFilter from "@/components/cases/CaseFilter";
import {
  CASE_STUDIES,
  SERVICE_LABELS,
  INDUSTRY_LABELS,
  getAllServiceSlugs,
  getAllIndustrySlugs,
} from "@/lib/data/caseStudies";

export const metadata: Metadata = {
  title: "MEO・SEO・ホームページ制作 成功事例100選｜株式会社サイプレス",
  description:
    "株式会社サイプレスのWebマーケティング成功事例100選。MEO対策・SEO対策・ホームページ制作・SNS運用・AIO対策など、業種・地域・サービス別に施策内容と進め方を公開しています。",
  keywords: [
    "MEO対策 事例",
    "SEO対策 事例",
    "ホームページ制作 事例",
    "Web集客 成功事例",
    "中小企業 SEO事例",
    "株式会社サイプレス 実績",
  ],
  openGraph: {
    title: "MEO・SEO・ホームページ制作 成功事例100選｜株式会社サイプレス",
    description: "業種・地域・サービス別に100件のWebマーケティング成功事例を公開。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/cases" },
};

const BASE = "https://www.cypress-all.co.jp";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
    { "@type": "ListItem", position: 2, name: "成功事例", item: `${BASE}/cases` },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "MEO・SEO・ホームページ制作 成功事例100選",
  description: "株式会社サイプレスのWebマーケティング成功事例一覧（業種・地域・サービス別）",
  url: `${BASE}/cases`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: CASE_STUDIES.length,
    itemListElement: CASE_STUDIES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${BASE}/cases/${c.slug}`,
    })),
  },
};

export default function CasesPage() {
  const serviceOptions = getAllServiceSlugs().map((slug) => ({ slug, label: SERVICE_LABELS[slug] }));
  const industryOptions = getAllIndustrySlugs().map((slug) => ({ slug, label: INDUSTRY_LABELS[slug] }));
  const regionOptions = Array.from(new Set(CASE_STUDIES.map((c) => c.region)));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Header />
      <main>
        {/* Page header */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(80px, 12vh, 120px) 0 clamp(40px, 6vh, 64px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <nav aria-label="パンくず" style={{ marginBottom: "32px" }}>
              <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
                <li>
                  <Link href="/" style={crumbLink}>ホーム</Link>
                </li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ ...crumbLink, color: "#6B7280" }}>成功事例</li>
              </ol>
            </nav>

            <p style={eyebrow}>Success Cases</p>
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
              MEO・SEO・ホームページ制作<br />成功事例100選
            </h1>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.9", maxWidth: "620px", marginBottom: "28px" }}>
              株式会社サイプレスが取り組んだWebマーケティングの成功事例を100件公開しています。
              業種・サービス・エリアで絞り込み、課題から施策・改善までの進め方をご覧いただけます。
              顧客名・店舗名は非公開とし、誇大な数値表現は用いていません。
            </p>

            {/* Summary stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 12px" }}>
              <Stat value="100" label="成功事例" />
              <Stat value={String(getAllServiceSlugs().length)} label="対応サービス" />
              <Stat value={String(getAllIndustrySlugs().length)} label="対応業種" />
            </div>
          </div>
        </section>

        {/* Filter + grid */}
        <section style={{ background: "#FFFFFF", padding: "clamp(40px, 7vh, 80px) 0" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <Suspense fallback={<p style={{ fontSize: "13px", color: "#9CA3AF" }}>読み込み中…</p>}>
              <CaseFilter
                cases={CASE_STUDIES}
                serviceOptions={serviceOptions}
                industryOptions={industryOptions}
                regionOptions={regionOptions}
              />
            </Suspense>
          </div>
        </section>

        {/* Browse by category */}
        <section style={{ background: "#F8F6F2", padding: "clamp(40px, 6vh, 64px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <p style={{ ...eyebrow, marginBottom: "20px" }}>Browse by Service</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {serviceOptions.map((o) => (
                <Link key={o.slug} href={`/cases/service/${o.slug}`} style={linkChip}>
                  {o.label}
                </Link>
              ))}
            </div>
            <p style={{ ...eyebrow, marginBottom: "20px" }}>Browse by Industry</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {industryOptions.map((o) => (
                <Link key={o.slug} href={`/cases/industry/${o.slug}`} style={linkChip}>
                  {o.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px",
        border: "1px solid #E8E4DC",
        background: "#FFFFFF",
        padding: "8px 16px",
      }}
    >
      <strong style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#C4A96A", fontWeight: 700 }}>{value}</strong>
      <span style={{ fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-sans)" }}>{label}</span>
    </span>
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
  color: "rgba(196,169,106,0.7)",
  fontSize: "10px",
  marginBottom: "16px",
  textTransform: "uppercase",
};

const linkChip: React.CSSProperties = {
  fontSize: "12px",
  color: "#6B7280",
  textDecoration: "none",
  padding: "6px 14px",
  border: "1px solid #E8E4DC",
  background: "#ffffff",
  letterSpacing: "0.03em",
};
