import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { NEWS, getNewsArticle, type NewsArticle } from "@/lib/data/news";

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title}｜お知らせ｜株式会社サイプレス`,
    description: article.excerpt,
  };
}

const CATEGORY_COLORS: Record<NewsArticle["category"], string> = {
  お知らせ: "#1D4ED8",
};

const CATEGORY_BG: Record<NewsArticle["category"], string> = {
  お知らせ: "#EFF6FF",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  const related = NEWS.filter((n) => n.slug !== slug && n.category === article.category).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    url: `https://www.cypress-all.co.jp/news/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cypress-all.co.jp/logo.png",
      },
    },
    author: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-3xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8 flex-wrap">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/news" className="hover:text-[#0F172A] transition-colors">お知らせ</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>{article.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] font-medium px-2.5 py-1"
                style={{
                  background: CATEGORY_BG[article.category],
                  color: CATEGORY_COLORS[article.category],
                }}
              >
                {article.category}
              </span>
              <span className="text-[#9CA3AF] text-xs font-mono">{formatDate(article.publishedAt)}</span>
            </div>

            <h1
              className="font-black text-[#0F172A] leading-tight"
              style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
            >
              {article.title}
            </h1>
          </div>
        </section>

        {/* Body */}
        <section className="pb-24 max-w-3xl mx-auto px-6">
          <div
            className="p-8 md:p-10 mb-10"
            style={{ border: "1px solid #E8E4DC" }}
          >
            <p className="text-[#374151] text-[15px] leading-[1.95]">
              {article.body || article.excerpt}
            </p>
          </div>

          {/* Back / CTA */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/news"
              className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0F172A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              お知らせ一覧へ戻る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all"
              style={{
                border: "1px solid #0F172A",
                color: "#0F172A",
              }}
            >
              お問い合わせ
            </Link>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section
            className="py-16"
            style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
          >
            <div className="max-w-3xl mx-auto px-6">
              <h2
                className="font-bold text-[#0F172A] text-lg mb-8 pb-6"
                style={{ borderBottom: "1px solid #E8E4DC" }}
              >
                関連ニュース
              </h2>
              <div style={{ borderTop: "1px solid #E8E4DC" }}>
                {related.map((rel) => (
                  <div
                    key={rel.slug}
                    style={{ borderBottom: "1px solid #E8E4DC" }}
                  >
                    <Link
                      href={`/news/${rel.slug}`}
                      className="group flex items-center gap-4 py-4 -mx-3 px-3 hover:bg-white transition-colors"
                    >
                      <span className="text-[#9CA3AF] text-xs font-mono shrink-0">
                        {rel.publishedAt.replace(/-/g, ".")}
                      </span>
                      <span className="text-[#0F172A] text-sm group-hover:underline underline-offset-4 flex-1">
                        {rel.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
