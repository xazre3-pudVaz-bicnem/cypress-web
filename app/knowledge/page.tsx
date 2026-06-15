import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import { knowledgePages } from "@/lib/data/knowledgePages";

export const metadata: Metadata = {
  title: "Web集客ナレッジ｜MEO・SEO・AIO・SNS解説｜株式会社サイプレス",
  description: "MEO・SEO・AIO・SNS・Web制作・AI活用に関する専門的な知識を解説するナレッジページ。中小企業のWeb集客担当者向けに実践的な情報を提供します。",
  alternates: { canonical: "https://www.cypress-all.co.jp/knowledge" },
  openGraph: {
    title: "Web集客ナレッジ｜MEO・SEO・AIO・SNS解説｜株式会社サイプレス",
    description: "MEO・SEO・AIO・SNS・Web制作・AI活用に関する専門知識。中小企業のWeb集客担当者向けナレッジベース。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const CATEGORIES = [
  "MEO基礎", "MEO上級", "MEO実践",
  "SEO基礎", "SEO実践", "SEO上級",
  "AIO基礎", "SEO・AIO共通", "ローカルSEO",
  "テクニカルSEO", "SNS基礎", "SNS実践",
  "Web制作基礎", "AI活用",
];

export default function KnowledgePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f9f8f5", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>ナレッジ</span>
            </nav>
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9ca3af",
                fontSize: "11px",
                marginBottom: "12px",
              }}
            >
              Knowledge Base
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              Web集客ナレッジ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "600px" }}>
              MEO・SEO・AIO・SNS・Web制作・AI活用に関する専門知識を分かりやすく解説します。
              中小企業のWeb集客担当者に役立つ実践的な情報をお届けします。
            </p>
          </div>
        </section>

        {/* Article grid */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {knowledgePages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/knowledge/${page.slug}`}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <article
                    style={{
                      border: "1px solid #e8e4dc",
                      padding: "28px 28px 24px",
                      height: "100%",
                      background: "#ffffff",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background: "#f0ede6",
                        color: "#6b7280",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        padding: "3px 8px",
                        marginBottom: "14px",
                      }}
                    >
                      {page.category}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#0d1b2a",
                        lineHeight: "1.55",
                        marginBottom: "10px",
                      }}
                    >
                      {page.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        lineHeight: "1.7",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {page.intro}
                    </p>
                    <p
                      style={{
                        marginTop: "16px",
                        fontSize: "12px",
                        color: "#9ca3af",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      詳しく読む →
                    </p>
                  </article>
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
