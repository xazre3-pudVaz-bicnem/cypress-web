import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { NEWS, type NewsArticle } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "お知らせ｜株式会社サイプレス",
  alternates: { canonical: "https://www.cypress-all.co.jp/news" },
  description:
    "株式会社サイプレスの最新ニュース・お知らせ。新サービス発表・実績・メディア掲載情報などを随時更新しています。",
  keywords: ["お知らせ", "ニュース", "プレスリリース", "株式会社サイプレス"],
};

const CATEGORY_COLORS: Record<NewsArticle["category"], string> = {
  お知らせ: "#1D4ED8",
};

const CATEGORY_BG: Record<NewsArticle["category"], string> = {
  お知らせ: "#EFF6FF",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

const sorted = [...NEWS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export default function NewsPage() {
  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-5xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>お知らせ</span>
            </nav>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              お知らせ
            </h1>
            <p className="text-[#374151] text-base leading-relaxed">
              株式会社サイプレスの最新情報をお届けします。
            </p>
          </div>
        </section>

        {/* News List */}
        <section className="pb-24 max-w-5xl mx-auto px-6">
          <div
            style={{ borderTop: "1px solid #E8E4DC" }}
          >
            {sorted.map((article) => (
              <div
                key={article.slug}
                style={{ borderBottom: "1px solid #E8E4DC" }}
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 -mx-3 px-3 transition-colors hover:bg-[#F9F8F5]"
                >
                  <span
                    className="font-mono text-xs shrink-0"
                    style={{ color: "#9CA3AF", minWidth: "85px" }}
                  >
                    {formatDate(article.publishedAt)}
                  </span>
                  <span
                    className="text-[10px] px-2.5 py-0.5 font-medium shrink-0 self-start sm:self-auto"
                    style={{
                      background: CATEGORY_BG[article.category],
                      color: CATEGORY_COLORS[article.category],
                      minWidth: "72px",
                      textAlign: "center",
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-[#0F172A] text-sm font-medium leading-relaxed flex-1 group-hover:underline underline-offset-4">
                    {article.title}
                  </span>
                  <svg
                    className="w-4 h-4 shrink-0 hidden sm:block transition-transform group-hover:translate-x-1"
                    style={{ color: "#9CA3AF" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
