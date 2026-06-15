import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { faqPages } from "@/lib/data/faqPages";

export async function generateStaticParams() {
  return faqPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = faqPages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title}｜よくある質問｜株式会社サイプレス`,
    description: page.metaDescription,
    openGraph: {
      title: `${page.title}｜よくある質問`,
      description: page.metaDescription,
      locale: "ja_JP",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `https://www.cypress-all.co.jp/faq/${slug}` },
  };
}

export default async function FaqSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = faqPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/faq" style={{ color: "#6B7280" }}>よくある質問</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>{page.title}</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>{page.titleEn}</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25 }}>
              {page.title}
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "24px", maxWidth: "680px" }}>
              {page.intro}
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "800px" }}>
              {page.faqs.map((faq, i) => (
                <details
                  key={i}
                  style={{ borderTop: "1px solid #ece8e0" }}
                >
                  <summary style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "24px 0",
                    cursor: "pointer",
                    listStyle: "none",
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      background: "#0d1b2a",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.05em",
                    }}>Q</span>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 600, lineHeight: 1.5, flex: 1 }}>
                      {faq.q}
                    </span>
                    <svg style={{ flexShrink: 0 }} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </summary>
                  <div style={{ display: "flex", gap: "16px", paddingBottom: "24px" }}>
                    <span style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      background: "#f8f6f2",
                      color: "#9ca3af",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontFamily: "var(--font-display)",
                    }}>A</span>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", flex: 1 }}>{faq.a}</p>
                  </div>
                </details>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        <RelatedPages links={page.related} />
        <PageContactCTA
          heading="他にご不明な点がありましたら"
          body="FAQで解決しなかった場合は、お問い合わせフォームまたはLINEでお気軽にご質問ください。"
        />
      </main>
      <Footer />
    </>
  );
}
