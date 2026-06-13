import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COLUMNS, COLUMN_CATEGORIES, type ColumnCategory } from "@/lib/data/columns";

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

export async function generateStaticParams() {
  return COLUMNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = COLUMNS.find((c) => c.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title}｜株式会社サイプレス`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default async function ColumnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = COLUMNS.find((c) => c.slug === slug);
  if (!article) notFound();

  const related = COLUMNS.filter((c) => c.slug !== slug && c.category === article.category).slice(0, 4);
  const allCategories = COLUMN_CATEGORIES;

  return (
    <>
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8 flex-wrap">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/column" className="hover:text-[#0F172A] transition-colors">専門コラム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }} className="line-clamp-1">{article.title.slice(0, 30)}{article.title.length > 30 ? "..." : ""}</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] font-medium px-2.5 py-1"
                style={{
                  background: CATEGORY_BADGE_BG[article.category],
                  color: CATEGORY_BADGE_COLOR[article.category],
                }}
              >
                {article.category}
              </span>
              <span className="text-[#9CA3AF] text-xs font-mono">{formatDate(article.publishedAt)}</span>
              <span className="text-[#9CA3AF] text-xs">{article.readTime}分で読める</span>
            </div>

            <h1
              className="font-black text-[#0F172A] leading-tight mb-5"
              style={{ fontSize: "clamp(20px, 3vw, 36px)", maxWidth: "720px" }}
            >
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5"
                  style={{ background: "#F9F8F5", color: "#6B7280", border: "1px solid #E8E4DC" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content + Sidebar */}
        <section className="pb-20 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_240px] gap-12">
            {/* Article Body */}
            <div>
              {/* Lead */}
              <div
                className="p-6 mb-10"
                style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}
              >
                <p className="text-[#374151] text-sm leading-[1.9]">{article.excerpt}</p>
              </div>

              {/* Body */}
              <div className="space-y-10" style={{ color: "#374151" }}>
                <div>
                  <h2
                    className="font-bold text-[#0F172A] text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)" }}
                  >
                    はじめに
                  </h2>
                  <p className="text-[15px] leading-[1.9]">
                    {article.category}に関する最新のトレンドと実践的な知識を、私たちの支援実績をもとにお伝えします。
                    本記事では、実際に成果を上げたクライアント事例を交えながら、今すぐ実践できる手法を解説します。
                  </p>
                </div>

                <div>
                  <h2
                    className="font-bold text-[#0F172A] text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)" }}
                  >
                    なぜ今、{article.category}が重要なのか
                  </h2>
                  <p className="text-[15px] leading-[1.9]">
                    デジタルマーケティングの環境は急速に変化しています。特に{article.category}の分野では、
                    アルゴリズムの更新・技術の進化・ユーザー行動の変化が複合的に絡み合い、
                    適切な対応が取れているかどうかで大きな差が生まれています。
                  </p>
                  <p className="text-[15px] leading-[1.9] mt-4">
                    私たちが200社以上を支援する中で観察してきたのは、
                    「正しい方向性で継続的に取り組む企業」と「施策がバラバラで成果が出ない企業」の差は、
                    必ずしも予算や規模ではなく、「正しい知識と戦略があるかどうか」だということです。
                  </p>
                </div>

                <div>
                  <h2
                    className="font-bold text-[#0F172A] text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)" }}
                  >
                    実践のポイント
                  </h2>
                  <div className="space-y-5">
                    {["現状分析と課題の明確化", "競合調査と差別化戦略の策定", "優先順位の高い施策から実行", "定期的な測定と改善のサイクル"].map((point, i) => (
                      <div key={point}>
                        <p className="text-[#0F172A] text-sm font-semibold mb-2">
                          {i + 1}. {point}
                        </p>
                        <p className="text-[15px] leading-[1.9] text-[#374151]">
                          {article.category}における{point}の重要性は、成果を出す企業が必ず実践しているプロセスです。
                          特に初期段階での方向性の正確さが、その後の施策の効果を大きく左右します。
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2
                    className="font-bold text-[#0F172A] text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)" }}
                  >
                    まとめ
                  </h2>
                  <p className="text-[15px] leading-[1.9]">
                    {article.category}は、正しい知識と継続的な取り組みがあれば、中小企業でも大きな成果を上げることができます。
                    本記事でご紹介した内容を参考に、まずは小さな一歩から始めてみてください。
                  </p>
                  <p className="text-[15px] leading-[1.9] mt-4">
                    「何から始めればいいかわからない」「自社の状況に当てはめた具体的なアドバイスが欲しい」という方は、
                    ぜひ私たちにお問い合わせください。
                  </p>
                </div>
              </div>

              {/* Author */}
              <div
                className="mt-12 p-6 flex items-center gap-4"
                style={{ border: "1px solid #E8E4DC" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0 font-black text-base"
                  style={{ background: "#F9F8F5", color: "#0F172A", border: "1px solid #E8E4DC" }}
                >
                  C
                </div>
                <div>
                  <p className="text-[#0F172A] text-sm font-bold">株式会社サイプレス 編集部</p>
                  <p className="text-[#6B7280] text-xs mt-1 leading-relaxed">
                    MEO・SEO・AIO・AI活用支援の専門家チームが、実績に基づいた情報を発信しています。
                  </p>
                </div>
              </div>

              {/* Back link */}
              <div className="mt-8">
                <Link
                  href="/column"
                  className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0F172A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  コラム一覧へ戻る
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* Category Links */}
                <div>
                  <h3
                    className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-4"
                  >
                    カテゴリ
                  </h3>
                  <ul className="space-y-0">
                    {allCategories.map((cat) => (
                      <li key={cat} style={{ borderBottom: "1px solid #F0EDE6" }}>
                        <Link
                          href={`/column?category=${cat}`}
                          className="flex items-center justify-between py-2.5 text-xs text-[#374151] hover:text-[#0F172A] transition-colors"
                        >
                          <span>{cat}</span>
                          <span style={{ color: "#9CA3AF" }}>
                            {COLUMNS.filter((c) => c.category === cat).length}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Articles */}
                {related.length > 0 && (
                  <div>
                    <h3
                      className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-4"
                    >
                      関連記事
                    </h3>
                    <ul className="space-y-0">
                      {related.map((rel) => (
                        <li key={rel.slug} style={{ borderBottom: "1px solid #F0EDE6" }}>
                          <Link
                            href={`/column/${rel.slug}`}
                            className="block py-3 text-xs text-[#374151] hover:text-[#0F172A] leading-relaxed transition-colors hover:underline underline-offset-2"
                          >
                            {rel.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles Bottom */}
        {related.length > 0 && (
          <section
            className="py-16"
            style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
          >
            <div className="max-w-6xl mx-auto px-6">
              <h2
                className="font-bold text-[#0F172A] text-lg mb-8 pb-6"
                style={{ borderBottom: "1px solid #E8E4DC" }}
              >
                関連コラム
              </h2>
              <div className="space-y-0">
                {related.map((rel) => (
                  <div
                    key={rel.slug}
                    style={{ borderBottom: "1px solid #E8E4DC" }}
                  >
                    <Link
                      href={`/column/${rel.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 -mx-3 px-3 transition-colors hover:bg-white"
                    >
                      <span
                        className="font-mono text-xs shrink-0"
                        style={{ color: "#9CA3AF" }}
                      >
                        {rel.publishedAt.replace(/-/g, ".")}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 shrink-0 self-start sm:self-auto"
                        style={{
                          background: CATEGORY_BADGE_BG[rel.category],
                          color: CATEGORY_BADGE_COLOR[rel.category],
                        }}
                      >
                        {rel.category}
                      </span>
                      <span className="text-[#0F172A] text-sm flex-1 group-hover:underline underline-offset-4">
                        {rel.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="font-bold text-[#0F172A] text-xl mb-4">専門家にご相談ください</h2>
          <p className="text-[#374151] mb-8 text-sm leading-relaxed max-w-md">
            記事を読んで自社に当てはめた戦略を知りたい方は、お問い合わせください。
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
        </section>
      </main>
      <Footer />
    </>
  );
}
