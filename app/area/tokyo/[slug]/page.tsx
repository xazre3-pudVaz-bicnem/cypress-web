import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { getAreaSubPagesByArea, getAreaSubPage } from "@/lib/data/areaSubPages";

const AREA = "tokyo";
const AREA_LABEL = "東京都";
const AREA_HREF = "/area/tokyo";
const BASE = "https://www.cypress-all.co.jp";

export async function generateStaticParams() {
  return getAreaSubPagesByArea(AREA).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getAreaSubPage(AREA, slug);
  if (!page) return {};
  return {
    title: `${page.title}｜${AREA_LABEL}の集客支援｜株式会社サイプレス`,
    description: page.metaDescription,
    openGraph: {
      title: `${page.title}｜${AREA_LABEL}の集客支援｜株式会社サイプレス`,
      description: page.metaDescription,
      images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
      locale: "ja_JP",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `${BASE}${AREA_HREF}/${slug}` },
  };
}

export default async function AreaSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAreaSubPage(AREA, slug);
  if (!page) notFound();

  const siblings = getAreaSubPagesByArea(AREA).filter((p) => p.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: `${BASE}/area` },
          { "@type": "ListItem", position: 3, name: AREA_LABEL, item: `${BASE}${AREA_HREF}` },
          { "@type": "ListItem", position: 4, name: page.title, item: `${BASE}${AREA_HREF}/${slug}` },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE}${AREA_HREF}/${slug}#localbusiness`,
        name: "株式会社サイプレス",
        alternateName: "Cypress",
        url: `${BASE}${AREA_HREF}/${slug}`,
        description: page.metaDescription,
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
          postalCode: "124-0816",
          addressRegion: "東京都",
          addressLocality: "葛飾区",
          streetAddress: "白鳥4-6-1-623",
        },
        email: "info@cypress-all.co.jp",
        areaServed: [{ "@type": "AdministrativeArea", name: "東京都" }],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
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
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>エリア別</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href={AREA_HREF} style={{ color: "#6B7280" }}>{AREA_LABEL}</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>{page.title}</span>
            </nav>
            <span style={{ display: "inline-block", fontSize: "11px", color: "#9ca3af", background: "#ece8e0", padding: "3px 10px", marginBottom: "16px", fontFamily: "var(--font-display)", letterSpacing: "0.1em" }}>
              {AREA_LABEL}
            </span>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,42px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              {page.title}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "680px" }}>
              {page.intro}
            </p>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Our Approach</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              {AREA_LABEL}ならではの対策ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {page.points.map((pt) => (
                <div key={pt.num} style={{ background: "#ffffff", padding: "32px" }}>
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "12px" }}>{pt.num}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px", lineHeight: 1.5 }}>{pt.title}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* エリア内の関連専門ページへの導線 */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Related Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.4vw,24px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
              {AREA_LABEL}のWeb集客 — 専門ページ
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { label: `${AREA_LABEL}の集客支援トップ`, href: AREA_HREF },
                ...siblings.map((p) => ({ label: p.title, href: `${AREA_HREF}/${p.slug}` })),
                { label: "対応エリア一覧", href: "/area" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: "13px", color: "#374151", textDecoration: "none",
                  padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={page.faqs} bgColor="#ffffff" />
        <RelatedPages links={page.related} />
        <PageContactCTA
          heading={`${AREA_LABEL}での集客はサイプレスへ`}
          body={`${AREA_LABEL}の地域特性を踏まえた集客支援を提供しています。訪問・オンラインでのご相談、お見積もりは無料です。お気軽にご相談ください。`}
        />
      </main>
      <Footer />
    </>
  );
}
