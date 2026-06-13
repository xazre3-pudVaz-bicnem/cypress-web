import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { problemPages } from "@/lib/data/problemPages";

export async function generateStaticParams() {
  return problemPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = problemPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title}｜Web集客の悩み解決｜株式会社サイプレス`,
    description: page.metaDescription,
  };
}

export default async function ProblemSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = problemPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/problems">お悩み別</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              {page.title}
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              {page.title}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              {page.intro}
            </p>
          </div>
        </section>

        {/* Causes */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Causes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.causes.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.num}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impacts */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              放置するとどうなるか
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.impacts.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.num}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "12px" }}>Solutions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスの解決アプローチ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.solutions.map((item) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)", fontSize: "12px", minWidth: "28px" }}>{item.num}</span>
                  <div style={{ flex: 1 }}>
                    <Link
                      href={item.href}
                      style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#ffffff", marginBottom: "6px", display: "block", textDecoration: "none" }}
                    >
                      {item.title}
                      <svg style={{ display: "inline-block", marginLeft: "8px", verticalAlign: "middle" }} width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={page.faqs} bgColor="#f8f6f2" />
        <RelatedPages links={page.related} />
        <PageContactCTA
          heading="まずは無料相談から"
          body="現状診断・原因特定・改善提案まで無料で行います。お気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}
