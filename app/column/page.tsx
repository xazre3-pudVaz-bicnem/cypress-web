"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COLUMNS } from "@/lib/data/columns";
import { ALL_COLUMN_TOPICS } from "@/lib/data/column";

interface ColumnItem {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime?: number;
  isTopicPage: boolean;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

const BADGE_BG: Record<string, string> = {
  SEO: "#EFF6FF",
  MEO: "#ECFDF5",
  AIO: "#F5F3FF",
  AI: "#ECFEFF",
  "AI活用": "#ECFEFF",
  ホームページ制作: "#FFFBEB",
  SNS運用: "#FDF2F8",
  採用: "#FFF7ED",
  Webマーケティング: "#F8FAFC",
  業種別: "#FFF7ED",
  地域別: "#ECFDF5",
  課題解決: "#FEF2F2",
  "比較・選び方": "#F8FAFC",
};

const BADGE_COLOR: Record<string, string> = {
  SEO: "#1D4ED8",
  MEO: "#047857",
  AIO: "#6D28D9",
  AI: "#0E7490",
  "AI活用": "#0E7490",
  ホームページ制作: "#92400E",
  SNS運用: "#9D174D",
  採用: "#9A3412",
  Webマーケティング: "#374151",
  業種別: "#9A3412",
  地域別: "#065F46",
  課題解決: "#991B1B",
  "比較・選び方": "#374151",
};

const FILTER_CATEGORIES = [
  "SEO", "MEO", "AIO", "ホームページ制作", "SNS運用", "AI活用",
  "業種別", "地域別", "課題解決", "比較・選び方", "Webマーケティング", "採用",
];

function catMatches(itemCat: string, filterCat: string): boolean {
  if (filterCat === "AI活用") return itemCat === "AI活用" || itemCat === "AI";
  return itemCat === filterCat;
}

export default function ColumnPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const allItems: ColumnItem[] = useMemo(() => {
    const topicItems: ColumnItem[] = ALL_COLUMN_TOPICS.map((t) => ({
      slug: t.slug,
      title: t.title,
      category: t.category,
      excerpt: t.metaDescription,
      date: "2026-06-15",
      isTopicPage: true,
    }));
    const articleItems: ColumnItem[] = COLUMNS.map((c) => ({
      slug: c.slug,
      title: c.title,
      category: c.category,
      excerpt: c.excerpt,
      date: c.publishedAt,
      readTime: c.readTime,
      isTopicPage: false,
    }));
    return [...topicItems, ...articleItems].sort((a, b) =>
      b.date.localeCompare(a.date)
    );
  }, []);

  const filtered =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => catMatches(item.category, activeCategory));

  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav
              className="flex items-center gap-2 text-[12px] mb-8"
              style={{ color: "#6B7280" }}
            >
              <Link href="/" className="hover:text-[#0F172A] transition-colors">
                ホーム
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>専門コラム</span>
            </nav>
            <p
              className="text-[11px] uppercase tracking-[0.18em] mb-3"
              style={{ color: "#9CA3AF", fontFamily: "var(--font-display)" }}
            >
              Expert Column
            </p>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              専門コラム
            </h1>
            <p className="text-[#374151] text-base leading-relaxed max-w-xl">
              MEO・SEO・AIO・AI活用・Web制作の最新知識を、実績に基づいた専門家視点でお届けします。
            </p>
            <p className="mt-3 text-[13px]" style={{ color: "#9CA3AF" }}>
              全{allItems.length}記事
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
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1"
              style={{ scrollbarWidth: "none" }}
            >
              <button
                onClick={() => setActiveCategory("all")}
                className="shrink-0 px-4 py-1.5 text-xs font-medium transition-all"
                style={{
                  background: activeCategory === "all" ? "#0F172A" : "transparent",
                  color: activeCategory === "all" ? "#FFFFFF" : "#6B7280",
                  border: `1px solid ${activeCategory === "all" ? "#0F172A" : "#E8E4DC"}`,
                }}
              >
                すべて ({allItems.length})
              </button>
              {FILTER_CATEGORIES.map((cat) => {
                const count = allItems.filter((item) =>
                  catMatches(item.category, cat)
                ).length;
                if (count === 0) return null;
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
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p style={{ color: "#6B7280" }}>該当する記事はありません。</p>
            </div>
          ) : (
            <div>
              {filtered.map((item) => (
                <div
                  key={item.slug}
                  style={{ borderBottom: "1px solid #E8E4DC" }}
                >
                  <Link
                    href={`/column/${item.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-5 transition-colors hover:bg-[#F9F8F5] -mx-3 px-3"
                  >
                    <span
                      className="font-mono text-xs shrink-0 pt-0.5"
                      style={{ color: "#9CA3AF", minWidth: "80px" }}
                    >
                      {item.isTopicPage ? "専門解説" : formatDate(item.date)}
                    </span>
                    <span
                      className="shrink-0 self-start text-[10px] px-2 py-0.5 font-medium"
                      style={{
                        background: BADGE_BG[item.category] ?? "#F9F8F5",
                        color: BADGE_COLOR[item.category] ?? "#374151",
                        minWidth: "72px",
                        textAlign: "center",
                      }}
                    >
                      {item.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium leading-snug group-hover:underline underline-offset-4"
                        style={{ color: "#0F172A" }}
                      >
                        {item.title}
                      </p>
                      {item.excerpt && (
                        <p
                          className="text-[12px] mt-1 leading-relaxed"
                          style={{
                            color: "#6B7280",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical" as const,
                            overflow: "hidden",
                          }}
                        >
                          {item.excerpt}
                        </p>
                      )}
                    </div>
                    {item.readTime && (
                      <span
                        className="text-xs shrink-0 hidden sm:block pt-0.5"
                        style={{ color: "#9CA3AF" }}
                      >
                        {item.readTime}分
                      </span>
                    )}
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
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:bg-[#0F172A] hover:text-white"
              style={{ border: "1px solid #0F172A", color: "#0F172A" }}
            >
              お問い合わせ・ご相談
              <svg
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
