"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getLatestColumns } from "@/lib/data/columns";

const CATEGORY_COLORS: Record<string, { text: string; bg: string }> = {
  SEO:           { text: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  MEO:           { text: "#10B981", bg: "rgba(16,185,129,0.08)" },
  AIO:           { text: "#8B5CF6", bg: "rgba(139,92,246,0.08)" },
  AI:            { text: "#06B6D4", bg: "rgba(6,182,212,0.08)" },
  "ホームページ制作": { text: "#F59E0B", bg: "rgba(245,158,11,0.08)" },
  "SNS運用":     { text: "#EC4899", bg: "rgba(236,72,153,0.08)" },
  "採用":        { text: "#F97316", bg: "rgba(249,115,22,0.08)" },
  "Webマーケティング": { text: "#64748B", bg: "rgba(100,116,139,0.08)" },
};

const DEFAULT_COLOR = { text: "#64748B", bg: "rgba(100,116,139,0.08)" };

export default function LatestColumnsSection() {
  const columns = getLatestColumns(3);

  return (
    <section
      className="py-24"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <SectionLabel>Column</SectionLabel>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 40px)", color: "#0F172A" }}
              >
                最新コラム
              </h2>
            </div>
            <Link
              href="/column"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#2563EB" }}
            >
              すべて見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {columns.map((col, i) => {
            const colorSet = CATEGORY_COLORS[col.category] ?? DEFAULT_COLOR;
            return (
              <ScrollReveal key={col.slug} delay={i * 0.1}>
                <Link href={`/column/${col.slug}`} className="group block h-full">
                  <div
                    className="bg-white rounded-2xl p-6 h-full flex flex-col gap-4 transition-all duration-300"
                    style={{
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(-4px)";
                      el.style.boxShadow = "0 12px 32px rgba(37,99,235,0.1)";
                      el.style.borderColor = "#BFDBFE";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                      el.style.borderColor = "#E2E8F0";
                    }}
                  >
                    {/* Category + Read time */}
                    <div className="flex items-center justify-between">
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{
                          background: colorSet.bg,
                          color: colorSet.text,
                        }}
                      >
                        {col.category}
                      </span>
                      <span className="text-[11px]" style={{ color: "#94A3B8" }}>
                        {col.readTime}分で読める
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-bold text-sm leading-snug line-clamp-3 transition-colors"
                      style={{ color: "#0F172A" }}
                    >
                      {col.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="text-xs leading-relaxed line-clamp-2 flex-1"
                      style={{ color: "#64748B" }}
                    >
                      {col.excerpt}
                    </p>

                    {/* Meta */}
                    <div
                      className="flex items-center gap-2 pt-3 text-[11px]"
                      style={{
                        borderTop: "1px solid #F1F5F9",
                        color: "#94A3B8",
                      }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      <span>{col.publishedAt.replace(/-/g, ".")}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="flex justify-center mt-8 sm:hidden">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "#2563EB" }}
            >
              すべてのコラムを見る
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
