import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import CaseCard from "@/components/cases/CaseCard";
import {
  getCasesByIndustry,
  getAllIndustrySlugs,
  getAllServiceSlugs,
  INDUSTRY_LABELS,
  SERVICE_LABELS,
} from "@/lib/data/caseStudies";

interface Props {
  params: Promise<{ industry: string }>;
}

const BASE = "https://www.cypress-all.co.jp";

// 業種別ページ（/industries/*）へのマッピング（実在ディレクトリのみ）
const INDUSTRY_PAGE_MAP: Record<string, string> = {
  restaurant: "/industries/restaurant",
  "beauty-salon": "/industries/beauty",
  relaxation: "/industries/osteopathic",
  dental: "/industries/clinic",
  clinic: "/industries/clinic",
  construction: "/industries/construction",
  "real-estate": "/industries/real-estate",
  pet: "/industries/pet-shop",
  school: "/industries/school",
  retail: "/industries/local-store",
  professional: "/industries/professional-service",
  cleaning: "/industries/cleaning",
};

// 業種別OGP画像（public/ に実在するファイルのみ）
const INDUSTRY_OGP_IMAGES: Record<string, string> = {
  restaurant: "/ChatGPT Image 2026年6月14日 21_09_20 (1).jpg",
  "beauty-salon": "/ChatGPT Image 2026年6月19日 08_59_57 (1).jpg",
  relaxation: "/ChatGPT Image 2026年6月19日 09_03_14 (6).jpg",
  dental: "/ChatGPT Image 2026年6月19日 09_05_30 (6).jpg",
  clinic: "/ChatGPT Image 2026年6月19日 09_05_27 (1).jpg",
  construction: "/ChatGPT Image 2026年6月19日 09_10_04 (4).jpg",
  "real-estate": "/ChatGPT Image 2026年6月19日 09_10_08 (3).jpg",
  cleaning: "/ChatGPT Image 2026年6月14日 21_10_24 (6).jpg",
  logistics: "/ChatGPT Image 2026年6月19日 09_26_23 (1).jpg",
  pet: "/ChatGPT Image 2026年6月19日 09_26_45 (3).jpg",
  school: "/ChatGPT Image 2026年6月19日 09_27_09 (1).jpg",
  retail: "/ChatGPT Image 2026年6月14日 21_10_25 (10).jpg",
  professional: "/ChatGPT Image 2026年6月14日 21_13_52.jpg",
};

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const label = INDUSTRY_LABELS[industry];
  if (!label) return {};
  const cases = getCasesByIndustry(industry);
  const title = `${label}のWeb集客成功事例${cases.length}件｜MEO・SEO・ホームページ制作｜株式会社サイプレス`;
  const description = `${label}のWebマーケティング成功事例${cases.length}件。MEO対策・SEO対策・ホームページ制作など、${label}の集客課題から施策・改善までの進め方を公開しています。`;
  return {
    title,
    description: description.slice(0, 118),
    keywords: [`${label} Web集客 事例`, `${label} MEO`, `${label} SEO`, `${label} ホームページ制作`],
    openGraph: { title, description, images: [{ url: INDUSTRY_OGP_IMAGES[industry] ?? "/hero.jpg", width: 1200, height: 630 }], locale: "ja_JP", type: "website" },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `${BASE}/cases/industry/${industry}` },
  };
}

export default async function IndustryCasesPage({ params }: Props) {
  const { industry } = await params;
  const label = INDUSTRY_LABELS[industry];
  if (!label) notFound();

  const cases = getCasesByIndustry(industry);
  const industryHref = INDUSTRY_PAGE_MAP[industry] ?? null;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${label}のWeb集客成功事例一覧`,
    description: `${label}のMEO対策・SEO対策・ホームページ制作の成功事例${cases.length}件`,
    url: `${BASE}/cases/industry/${industry}`,
    numberOfItems: cases.length,
    itemListElement: cases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${BASE}/cases/${c.slug}`,
      description: c.description,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
      { "@type": "ListItem", position: 2, name: "成功事例", item: `${BASE}/cases` },
      { "@type": "ListItem", position: 3, name: `${label}の成功事例`, item: `${BASE}/cases/industry/${industry}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
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
            <p style={eyebrow}>Cases by Industry</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px, 3.6vw, 40px)", color: "#0B1628", fontWeight: 700, lineHeight: 1.3, marginBottom: "18px" }}>
              {label}のWeb集客成功事例
            </h1>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.9", maxWidth: "620px" }}>
              {label}のWebマーケティング成功事例を{cases.length}件公開しています。MEO・SEO・ホームページ制作など、課題と施策の進め方をご覧いただけます。
            </p>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "clamp(40px, 7vh, 80px) 0" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "28px" }}>
              <strong style={{ color: "#0B1628", fontFamily: "var(--font-serif)", fontSize: "16px" }}>{cases.length}</strong> 件の事例
            </p>
            {cases.length > 0 ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "clamp(20px, 3vw, 32px)" }}>
                {cases.map((c) => (
                  <CaseCard key={c.slug} c={c} />
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "14px", color: "#6B7280" }}>現在この業種の事例を準備中です。</p>
            )}
          </div>
        </section>

        <section style={{ background: "#F8F6F2", padding: "clamp(40px, 6vh, 64px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <p style={{ ...eyebrow, marginBottom: "20px" }}>Other Industries</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
              {getAllIndustrySlugs().filter((s) => s !== industry).map((s) => (
                <Link key={s} href={`/cases/industry/${s}`} style={linkChip}>{INDUSTRY_LABELS[s]}</Link>
              ))}
            </div>
            <p style={{ ...eyebrow, marginBottom: "20px" }}>Browse by Service</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {getAllServiceSlugs().map((s) => (
                <Link key={s} href={`/cases/service/${s}`} style={linkChip}>{SERVICE_LABELS[s]}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* 関連ページへの誘導 */}
        <section style={{ background: "#F8F6F2", padding: "clamp(40px, 6vh, 64px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.22em", color: "#9CA3AF", fontSize: "10px", marginBottom: "20px", textTransform: "uppercase" }}>
              Related
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {industryHref && (
                <Link href={industryHref} style={{ fontSize: "13px", color: "#374151", textDecoration: "none", padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                  {label}のWeb集客支援について →
                </Link>
              )}
              <Link href="/cases/service/meo" style={{ fontSize: "13px", color: "#374151", textDecoration: "none", padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                MEO対策の成功事例 →
              </Link>
              <Link href="/cases/service/seo" style={{ fontSize: "13px", color: "#374151", textDecoration: "none", padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                SEO対策の成功事例 →
              </Link>
              <Link href="/cases/service/web-design" style={{ fontSize: "13px", color: "#374151", textDecoration: "none", padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                ホームページ制作の成功事例 →
              </Link>
              <Link href="/cases" style={{ fontSize: "13px", color: "#374151", textDecoration: "none", padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                成功事例一覧に戻る →
              </Link>
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
