"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COLUMNS, COLUMN_CATEGORIES, type ColumnCategory } from "@/lib/data/columns";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

const CATEGORY_BADGE_BG: Record<ColumnCategory, string> = {
  SEO: "#EFF6FF",
  MEO: "#ECFDF5",
  AIO: "#F5F3FF",
  AI: "#ECFEFF",
  ホームページ制作: "#FFFBEB",
  SNS運用: "#FDF2F8",
  採用: "#FFF7ED",
  Webマーケティング: "#F8FAFC",
};

const CATEGORY_BADGE_COLOR: Record<ColumnCategory, string> = {
  SEO: "#1D4ED8",
  MEO: "#047857",
  AIO: "#6D28D9",
  AI: "#0E7490",
  ホームページ制作: "#92400E",
  SNS運用: "#9D174D",
  採用: "#9A3412",
  Webマーケティング: "#374151",
};

export default function ColumnPage() {
  const [activeCategory, setActiveCategory] = useState<ColumnCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? COLUMNS
      : COLUMNS.filter((c) => c.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">
                ホーム
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>専門コラム</span>
            </nav>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              専門コラム
            </h1>
            <p className="text-[#374151] text-base leading-relaxed max-w-xl">
              MEO・SEO・AIO・AI活用の最新知識を、実績に基づいた専門家視点でお届けします。
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <div
          className="sticky top-16 z-20 py-3"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              <button
                onClick={() => setActiveCategory("all")}
                className="shrink-0 px-4 py-1.5 text-xs font-medium transition-all"
                style={{
                  background: activeCategory === "all" ? "#0F172A" : "transparent",
                  color: activeCategory === "all" ? "#FFFFFF" : "#6B7280",
                  border: `1px solid ${activeCategory === "all" ? "#0F172A" : "#E8E4DC"}`,
                }}
              >
                すべて ({COLUMNS.length})
              </button>
              {COLUMN_CATEGORIES.map((cat) => {
                const count = COLUMNS.filter((c) => c.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="shrink-0 px-4 py-1.5 text-xs font-medium transition-all"
                    style={{
                      background: isActive ? "#0F172A" : "transparent",
                      color: isActive ? "#FFFFFF" : "#6B7280",
                      border: `1px solid ${isActive ? "#0F172A" : "#E8E4DC"}`,
                    }}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Article List */}
        <section className="py-10 max-w-6xl mx-auto px-6">
          {sorted.length === 0 ? (
            <div className="py-20 text-center">
              <p style={{ color: "#6B7280" }}>該当する記事はありません。</p>
            </div>
          ) : (
            <div>
              {sorted.map((article, i) => (
                <div
                  key={article.slug}
                  style={{ borderBottom: "1px solid #E8E4DC" }}
                >
                  <Link
                    href={`/column/${article.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 transition-colors hover:bg-[#F9F8F5] -mx-3 px-3"
                  >
                    <span
                      className="font-mono text-xs shrink-0"
                      style={{ color: "#9CA3AF", minWidth: "80px" }}
                    >
                      {formatDate(article.publishedAt)}
                    </span>
                    <span
                      className="shrink-0 self-start sm:self-auto text-[10px] px-2 py-0.5 font-medium"
                      style={{
                        background: CATEGORY_BADGE_BG[article.category],
                        color: CATEGORY_BADGE_COLOR[article.category],
                        minWidth: "80px",
                        textAlign: "center",
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="text-[#0F172A] text-sm leading-relaxed font-medium flex-1 group-hover:underline underline-offset-4">
                      {article.title}
                    </span>
                    <span className="text-[#9CA3AF] text-xs shrink-0 hidden sm:block">
                      {article.readTime}分
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section
          className="py-20"
          style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-bold text-[#0F172A] text-xl mb-4">
              専門家に直接ご相談ください
            </h2>
            <p className="text-[#374151] text-sm leading-relaxed mb-8 max-w-md">
              コラムを読んで疑問が出た方、自社に当てはめた戦略を知りたい方はお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all"
              style={{
                border: "1px solid #0F172A",
                color: "#0F172A",
              }}
            >
              お問い合わせ・ご相談
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
