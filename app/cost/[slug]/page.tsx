import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { costPages } from "@/lib/data/costPages";

export async function generateStaticParams() {
  return costPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = costPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title}｜費用・料金相場｜株式会社サイプレス`,
    description: page.metaDescription,
  };
}

export default async function CostSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = costPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/cost">費用・料金</Link>
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

        {/* Price Plans */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Pricing Plans</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              料金プラン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", maxWidth: "960px" }}>
              {page.priceRanges.map((plan, i) => (
                <div
                  key={i}
                  style={{
                    border: i === 1 ? "2px solid #0d1b2a" : "1px solid #ece8e0",
                    padding: "32px 24px",
                    position: "relative",
                  }}
                >
                  {i === 1 && (
                    <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)" }}>
                      <span style={{ background: "#0d1b2a", color: "#ffffff", fontSize: "10px", padding: "3px 12px", fontFamily: "var(--font-sans)", letterSpacing: "0.1em" }}>
                        おすすめ
                      </span>
                    </div>
                  )}
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>{plan.plan}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px,2vw,24px)", color: "#0d1b2a", fontWeight: 600, letterSpacing: "0.05em", marginBottom: "12px" }}>
                    {plan.price}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #ece8e0" }}>
                    {plan.description}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {plan.includes.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px", fontSize: "13px", color: "#374151" }}>
                        <svg style={{ flexShrink: 0, marginTop: "3px" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d1b2a" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factors */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Price Factors</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              費用が変わる要因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {page.factors.map((item) => (
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

        <FaqSection items={page.faqs} bgColor="#ffffff" />
        <RelatedPages links={page.related} />
        <PageContactCTA
          heading="無料でお見積もりします"
          body="予算・規模・ご要望をお知らせいただければ、最適なプランとお見積もりを無料でご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
