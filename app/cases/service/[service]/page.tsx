import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import CaseCard from "@/components/cases/CaseCard";
import {
  getCasesByService,
  getAllServiceSlugs,
  SERVICE_LABELS,
  SERVICE_HREFS,
  INDUSTRY_LABELS,
  getAllIndustrySlugs,
} from "@/lib/data/caseStudies";

interface Props {
  params: Promise<{ service: string }>;
}

const BASE = "https://www.cypress-all.co.jp";

export async function generateStaticParams() {
  return getAllServiceSlugs().map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const label = SERVICE_LABELS[service];
  if (!label) return {};
  const cases = getCasesByService(service);
  const title = `${label}の成功事例${cases.length}件｜業種別の施策内容｜株式会社サイプレス`;
  const description = `株式会社サイプレスの${label}成功事例${cases.length}件。飲食店・美容室・整体院・建設業など業種別に、${label}の課題から施策・改善までの進め方を公開しています。`;
  return {
    title,
    description: description.slice(0, 118),
    keywords: [`${label} 事例`, `${label} 成功事例`, `${label} 業種別`, "Web集客 事例"],
    openGraph: { title, description, images: [{ url: "/hero.png", width: 1200, height: 630 }], locale: "ja_JP", type: "website" },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `${BASE}/cases/service/${service}` },
  };
}

export default async function ServiceCasesPage({ params }: Props) {
  const { service } = await params;
  const label = SERVICE_LABELS[service];
  if (!label) notFound();

  const cases = getCasesByService(service);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
      { "@type": "ListItem", position: 2, name: "成功事例", item: `${BASE}/cases` },
      { "@type": "ListItem", position: 3, name: `${label}の成功事例`, item: `${BASE}/cases/service/${service}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main>
        <section style={{ background: "#F8F6F2", padding: "clamp(80px, 12vh, 120px) 0 clamp(40px, 6vh, 64px)", borderBottom: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <nav aria-label="パンくず" style={{ marginBottom: "28px" }}>
              <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
                <li><Link href="/" style={crumbLink}>ホーム</Link></li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li><Link href="/cases" style={crumbLink}>成功事例</Link></li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ ...crumbLink, color: "#6B7280" }}>{label}</li>
              </ol>
            </nav>
            <p style={eyebrow}>Cases by Service</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3.6vw, 40px)", color: "#0B1628", fontWeight: 700, lineHeight: 1.3, marginBottom: "18px" }}>
              {label}の成功事例
            </h1>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.9", maxWidth: "620px", marginBottom: "20px" }}>
              {label}に取り組んだ成功事例を{cases.length}件公開しています。業種ごとの課題と施策の進め方をご覧いただけます。
            </p>
            <Link href={SERVICE_HREFS[service]} style={inlineLink}>
              {label}のサービス詳細を見る →
            </Link>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "clamp(40px, 7vh, 80px) 0" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "28px" }}>
              <strong style={{ color: "#0B1628", fontFamily: "var(--font-serif)", fontSize: "16px" }}>{cases.length}</strong> 件の事例
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "clamp(20px, 3vw, 32px)" }}>
              {cases.map((c) => (
                <CaseCard key={c.slug} c={c} />
              ))}
            </div>
          </div>
        </section>

        {/* Other services + industries */}
        <section style={{ background: "#F8F6F2", padding: "clamp(40px, 6vh, 64px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <p style={{ ...eyebrow, marginBottom: "20px" }}>Other Services</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {getAllServiceSlugs().filter((s) => s !== service).map((s) => (
                <Link key={s} href={`/cases/service/${s}`} style={linkChip}>{SERVICE_LABELS[s]}</Link>
              ))}
            </div>
            <p style={{ ...eyebrow, marginBottom: "20px" }}>Browse by Industry</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {getAllIndustrySlugs().map((s) => (
                <Link key={s} href={`/cases/industry/${s}`} style={linkChip}>{INDUSTRY_LABELS[s]}</Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />
      <style>{`.case-card:hover { box-shadow: 0 8px 32px rgba(11,22,40,0.09); transform: translateY(-2px); }`}</style>
    </>
  );
}

const crumbLink: React.CSSProperties = { fontSize: "11px", color: "#9CA3AF", textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: "0.05em" };
const eyebrow: React.CSSProperties = { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(196,169,106,0.7)", fontSize: "10px", marginBottom: "16px", textTransform: "uppercase" };
const linkChip: React.CSSProperties = { fontSize: "12px", color: "#6B7280", textDecoration: "none", padding: "6px 14px", border: "1px solid #E8E4DC", background: "#ffffff", letterSpacing: "0.03em" };
const inlineLink: React.CSSProperties = { fontSize: "13px", color: "#6B7280", textDecoration: "none", fontFamily: "var(--font-display)", letterSpacing: "0.05em", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" };
