import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { checklistPages } from "@/lib/data/checklistPages";

export async function generateStaticParams() {
  return checklistPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = checklistPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title}｜チェックリスト｜株式会社サイプレス`,
    description: page.metaDescription,
  };
}

export default async function ChecklistSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = checklistPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const totalItems = page.sections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/checklist">チェックリスト</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              {page.title}
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,3.5vw,42px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              {page.title}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "680px" }}>
              {page.intro}
            </p>
            <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "16px" }}>
              全 {totalItems} 項目
            </p>
          </div>
        </section>

        {/* Checklist Sections */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "800px" }}>
              {page.sections.map((section, si) => (
                <div key={si} style={{ marginBottom: "48px" }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,2vw,20px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px", paddingBottom: "12px", borderBottom: "2px solid #0d1b2a" }}>
                    {section.heading}
                  </h2>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {section.items.map((item, ii) => (
                      <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 0", borderBottom: "1px solid #ece8e0" }}>
                        <span style={{
                          flexShrink: 0,
                          width: "20px",
                          height: "20px",
                          border: "1.5px solid #ece8e0",
                          marginTop: "2px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }} aria-hidden="true">
                          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#ece8e0" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <div>
                          <p style={{ fontSize: "14px", color: "#0d1b2a", lineHeight: "1.7", fontWeight: 500 }}>{item.text}</p>
                          {item.note && (
                            <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>{item.note}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={page.faqs} bgColor="#f8f6f2" />
        <RelatedPages links={page.related} />
        <PageContactCTA
          heading="チェックリストの実施を支援します"
          body="自社での実施が難しい項目はサイプレスにお任せください。専門家が対応します。"
        />
      </main>
      <Footer />
    </>
  );
}
