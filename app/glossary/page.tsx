import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { glossaryPages } from "@/lib/data/glossaryPages";

const categories = Array.from(new Set(glossaryPages.map((p) => p.category)));

export const metadata: Metadata = {
  title: "Webマーケティング用語集｜MEO・SEO・AIO・Web集客の専門用語解説｜株式会社サイプレス",
  description: "MEO・SEO・AIO・Web集客・Webマーケティングの専門用語を網羅した用語集。GBP・E-E-A-T・Core Web Vitals・llms.txt等の用語を初心者にもわかりやすく解説します。",
};

export default function GlossaryPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              用語集
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Glossary</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Webマーケティング用語集
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              MEO・SEO・AIO・Web集客に関する専門用語をわかりやすく解説します。検討中の方から実務者まで、基礎から最新トレンドまで幅広く対応しています。
            </p>
          </div>
        </section>

        {categories.map((cat) => {
          const pages = glossaryPages.filter((p) => p.category === cat);
          return (
            <section key={cat} style={{ background: "#ffffff", padding: "60px 0", borderBottom: "1px solid #ece8e0" }}>
              <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "8px" }}>Category</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,2vw,20px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>{cat}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#ece8e0" }}>
                  {pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/glossary/${page.slug}`}
                      style={{ background: "#ffffff", padding: "24px", textDecoration: "none", display: "block" }}
                    >
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
                        {page.term}
                      </p>
                      <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.8" }}>
                        {page.definition.slice(0, 55)}...
                      </p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "10px", fontSize: "11px", color: "#9ca3af" }}>
                        詳しく見る
                        <svg width="9" height="9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <PageContactCTA
          heading="もっと詳しく知りたい方は"
          body="用語の詳細や自社への活用方法についてはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
