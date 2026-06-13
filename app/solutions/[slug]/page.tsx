import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { solutionPages } from "@/lib/data/solutionPages";

export async function generateStaticParams() {
  return solutionPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = solutionPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title}｜Webマーケティングソリューション｜株式会社サイプレス`,
    description: page.metaDescription,
  };
}

export default async function SolutionSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = solutionPages.find((p) => p.slug === slug);
  if (!page) notFound();

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
              <Link href="/solutions">ソリューション</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              {page.title}
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <p style={{ fontSize: "12px", color: "#9ca3af", fontStyle: "italic", marginBottom: "12px" }}>{page.tagline}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25 }}>
              {page.title}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "24px", maxWidth: "680px" }}>
              {page.intro}
            </p>
          </div>
        </section>

        {/* Features */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Features</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              このソリューションの特徴
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#ece8e0" }}>
              {page.features.map((item) => (
                <div key={item.num} style={{ background: "#ffffff", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{item.num}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px", lineHeight: 1.4 }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Customer */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>For Whom</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              こんな企業に最適です
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: "640px" }}>
              {page.targetCustomer.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 0", borderTop: "1px solid #ece8e0" }}>
                  <svg style={{ flexShrink: 0, marginTop: "3px" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d1b2a" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span style={{ fontSize: "15px", color: "#374151", lineHeight: "1.7" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "12px" }}>Process</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              実施の流れ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.process.map((item, i) => (
                <div key={item.num} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)", fontSize: "12px", minWidth: "28px" }}>{item.num}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#ffffff", marginBottom: "8px" }}>{item.title}</p>
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
          heading="このソリューションについて相談する"
          body="実際の状況・ご予算・目標をお聞かせください。最適な施策の組み合わせをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
