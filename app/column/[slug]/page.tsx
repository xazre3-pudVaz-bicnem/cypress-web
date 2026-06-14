import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COLUMNS, COLUMN_CATEGORIES, type ColumnCategory } from "@/lib/data/columns";
import { COLUMN_TOPICS, getColumnTopicBySlug, getAllColumnTopicSlugs } from "@/lib/data/columnTopicPages";

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

const TOPIC_CATEGORY_BG: Record<string, string> = {
  SEO: "#EFF6FF",
  MEO: "#ECFDF5",
  AIO: "#F5F3FF",
  AI: "#ECFEFF",
  ホームページ制作: "#FFFBEB",
  SNS運用: "#FDF2F8",
};

const TOPIC_CATEGORY_COLOR: Record<string, string> = {
  SEO: "#1D4ED8",
  MEO: "#047857",
  AIO: "#6D28D9",
  AI: "#0E7490",
  ホームページ制作: "#92400E",
  SNS運用: "#9D174D",
};

export async function generateStaticParams() {
  const articleParams = COLUMNS.map((c) => ({ slug: c.slug }));
  const topicParams = getAllColumnTopicSlugs();
  return [...articleParams, ...topicParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const topic = getColumnTopicBySlug(slug);
  if (topic) {
    return {
      title: `${topic.title}｜株式会社サイプレス`,
      description: topic.metaDescription,
      keywords: [topic.category, "株式会社サイプレス", "Webマーケティング"],
      openGraph: {
        title: topic.title,
        description: topic.metaDescription,
        locale: "ja_JP",
        type: "article",
      },
      twitter: { card: "summary_large_image" },
      alternates: { canonical: `https://www.cypress-all.co.jp/column/${slug}` },
    };
  }

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
      locale: "ja_JP",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `https://www.cypress-all.co.jp/column/${slug}` },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

// ─── Topic Page ──────────────────────────────────────────────────────────────

function ColumnTopicPage({ slug }: { slug: string }) {
  const topic = getColumnTopicBySlug(slug);
  if (!topic) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topic.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.metaDescription,
    author: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    url: `https://www.cypress-all.co.jp/column/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
      { "@type": "ListItem", position: 2, name: "専門コラム", item: "https://www.cypress-all.co.jp/column" },
      { "@type": "ListItem", position: 3, name: topic.title, item: `https://www.cypress-all.co.jp/column/${slug}` },
    ],
  };

  const badgeBg = TOPIC_CATEGORY_BG[topic.category] ?? "#F9F8F5";
  const badgeColor = TOPIC_CATEGORY_COLOR[topic.category] ?? "#374151";

  const relatedArticles = COLUMNS.filter(
    (c) => c.category === (topic.category as ColumnCategory)
  ).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8 flex-wrap" style={{ color: "#6B7280" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/column" className="hover:text-[#0F172A] transition-colors">専門コラム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>{topic.titleEn}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[11px] font-medium px-2.5 py-1"
                style={{ background: badgeBg, color: badgeColor }}
              >
                {topic.category}
              </span>
              <span className="text-[11px] font-mono tracking-wider" style={{ color: "#9CA3AF" }}>
                {topic.titleEn}
              </span>
            </div>

            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(22px, 3.5vw, 42px)", color: "#0F172A", maxWidth: "780px" }}
            >
              {topic.title}
            </h1>

            <p
              className="text-[15px] leading-[1.9] max-w-2xl"
              style={{ color: "#374151" }}
            >
              {topic.intro}
            </p>
          </div>
        </section>

        {/* Article + Sidebar */}
        <section className="pb-20 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_240px] gap-12">
            {/* Main */}
            <div>
              {/* Table of contents */}
              <div
                className="p-6 mb-10"
                style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}
              >
                <p className="text-[11px] font-mono tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
                  目次
                </p>
                <ol className="space-y-2">
                  {topic.sections.map((sec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[11px] font-mono shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13px]" style={{ color: "#374151" }}>
                        {sec.heading}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <span className="text-[11px] font-mono shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>
                      {String(topic.sections.length + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px]" style={{ color: "#374151" }}>よくある質問（FAQ）</span>
                  </li>
                </ol>
              </div>

              {/* Body sections */}
              <div className="space-y-12" style={{ color: "#374151" }}>
                {topic.sections.map((sec, i) => (
                  <div key={i}>
                    <h2
                      className="font-bold text-[#0F172A] mb-5 pb-3"
                      style={{
                        borderBottom: "1px solid #E8E4DC",
                        fontSize: "clamp(16px, 2vw, 20px)",
                      }}
                    >
                      {sec.heading}
                    </h2>
                    <p className="text-[15px] leading-[1.9]">{sec.body}</p>
                  </div>
                ))}

                {/* FAQ */}
                <div>
                  <h2
                    className="font-bold text-[#0F172A] mb-8 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)" }}
                  >
                    よくある質問（FAQ）
                  </h2>
                  <dl className="space-y-0">
                    {topic.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="py-6"
                        style={{ borderBottom: "1px solid #E8E4DC" }}
                      >
                        <dt className="font-bold text-[15px] mb-3 flex items-start gap-3" style={{ color: "#0F172A" }}>
                          <span
                            className="text-[11px] font-mono shrink-0 mt-0.5 px-1.5 py-0.5"
                            style={{ background: badgeBg, color: badgeColor }}
                          >
                            Q
                          </span>
                          {faq.q}
                        </dt>
                        <dd className="text-[14px] leading-[1.9] flex items-start gap-3" style={{ color: "#374151" }}>
                          <span
                            className="text-[11px] font-mono shrink-0 mt-0.5 px-1.5 py-0.5"
                            style={{ background: "#F9F8F5", color: "#6B7280", border: "1px solid #E8E4DC" }}
                          >
                            A
                          </span>
                          {faq.a}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Related Pages */}
              {topic.related.length > 0 && (
                <div className="mt-12">
                  <p className="text-[11px] font-mono tracking-widest uppercase mb-5" style={{ color: "#9CA3AF" }}>
                    関連ページ
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {topic.related.map((rel) => (
                      <Link
                        key={rel.href}
                        href={rel.href}
                        className="group block p-4 transition-colors hover:bg-[#F9F8F5]"
                        style={{ border: "1px solid #E8E4DC" }}
                      >
                        <p className="text-[14px] font-medium group-hover:underline underline-offset-2 mb-1" style={{ color: "#0F172A" }}>
                          {rel.label}
                        </p>
                        <p className="text-[12px]" style={{ color: "#6B7280" }}>{rel.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author box */}
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

              {/* Back */}
              <div className="mt-8">
                <Link
                  href="/column"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#0F172A]"
                  style={{ color: "#6B7280" }}
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
                <div>
                  <h3 className="text-[10px] font-mono tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
                    専門ガイド
                  </h3>
                  <ul className="space-y-0">
                    {COLUMN_TOPICS.map((t) => (
                      <li key={t.slug} style={{ borderBottom: "1px solid #F0EDE6" }}>
                        <Link
                          href={`/column/${t.slug}`}
                          className="flex items-center justify-between py-2.5 text-xs transition-colors hover:text-[#0F172A]"
                          style={{ color: t.slug === slug ? "#0F172A" : "#374151", fontWeight: t.slug === slug ? 700 : 400 }}
                        >
                          <span>{t.category}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {relatedArticles.length > 0 && (
                  <div>
                    <h3 className="text-[10px] font-mono tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
                      関連記事
                    </h3>
                    <ul className="space-y-0">
                      {relatedArticles.map((rel) => (
                        <li key={rel.slug} style={{ borderBottom: "1px solid #F0EDE6" }}>
                          <Link
                            href={`/column/${rel.slug}`}
                            className="block py-3 text-xs leading-relaxed transition-colors hover:text-[#0F172A] hover:underline underline-offset-2"
                            style={{ color: "#374151" }}
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

        {/* CTA */}
        <section
          className="py-16"
          style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-mono tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
              Consultation
            </p>
            <h2 className="font-bold text-[#0F172A] mb-4" style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}>
              {topic.category}について、専門家にご相談ください
            </h2>
            <p className="text-sm leading-relaxed max-w-md mb-8" style={{ color: "#374151" }}>
              自社の状況に合わせた具体的なアドバイスが必要な方は、お気軽にお問い合わせください。無料相談対応しています。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:bg-[#0F172A] hover:text-white"
              style={{ border: "1px solid #0F172A", color: "#0F172A" }}
            >
              無料でご相談する
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

// ─── Article Page ─────────────────────────────────────────────────────────────

function ColumnArticlePageContent({ slug }: { slug: string }) {
  const article = COLUMNS.find((c) => c.slug === slug);
  if (!article) return null;

  const related = COLUMNS.filter((c) => c.slug !== slug && c.category === article.category).slice(0, 4);
  const allCategories = COLUMN_CATEGORIES;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    keywords: article.tags.join(", "),
    url: `https://www.cypress-all.co.jp/column/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
      { "@type": "ListItem", position: 2, name: "専門コラム", item: "https://www.cypress-all.co.jp/column" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://www.cypress-all.co.jp/column/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-12" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8 flex-wrap" style={{ color: "#6B7280" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/column" className="hover:text-[#0F172A] transition-colors">専門コラム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }} className="line-clamp-1">
                {article.title.slice(0, 30)}{article.title.length > 30 ? "..." : ""}
              </span>
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
              <div className="p-6 mb-10" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                <p className="text-sm leading-[1.9]" style={{ color: "#374151" }}>{article.excerpt}</p>
              </div>

              {/* Body */}
              <div className="space-y-10" style={{ color: "#374151" }}>
                <div>
                  <h2
                    className="font-bold text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)", color: "#0F172A" }}
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
                    className="font-bold text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)", color: "#0F172A" }}
                  >
                    なぜ今、{article.category}が重要なのか
                  </h2>
                  <p className="text-[15px] leading-[1.9]">
                    デジタルマーケティングの環境は急速に変化しています。特に{article.category}の分野では、
                    アルゴリズムの更新・技術の進化・ユーザー行動の変化が複合的に絡み合い、
                    適切な対応が取れているかどうかで大きな差が生まれています。
                  </p>
                  <p className="text-[15px] leading-[1.9] mt-4">
                    私たちが多くの企業を支援する中で観察してきたのは、
                    「正しい方向性で継続的に取り組む企業」と「施策がバラバラで成果が出ない企業」の差は、
                    必ずしも予算や規模ではなく、「正しい知識と戦略があるかどうか」だということです。
                  </p>
                </div>

                <div>
                  <h2
                    className="font-bold text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)", color: "#0F172A" }}
                  >
                    実践のポイント
                  </h2>
                  <div className="space-y-5">
                    {["現状分析と課題の明確化", "競合調査と差別化戦略の策定", "優先順位の高い施策から実行", "定期的な測定と改善のサイクル"].map((point, i) => (
                      <div key={point}>
                        <p className="text-sm font-semibold mb-2" style={{ color: "#0F172A" }}>
                          {i + 1}. {point}
                        </p>
                        <p className="text-[15px] leading-[1.9]">
                          {article.category}における{point}の重要性は、成果を出す企業が必ず実践しているプロセスです。
                          特に初期段階での方向性の正確さが、その後の施策の効果を大きく左右します。
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2
                    className="font-bold text-lg mb-5 pb-3"
                    style={{ borderBottom: "1px solid #E8E4DC", fontSize: "clamp(16px, 2vw, 20px)", color: "#0F172A" }}
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
              <div className="mt-12 p-6 flex items-center gap-4" style={{ border: "1px solid #E8E4DC" }}>
                <div
                  className="w-12 h-12 flex items-center justify-center shrink-0 font-black text-base"
                  style={{ background: "#F9F8F5", color: "#0F172A", border: "1px solid #E8E4DC" }}
                >
                  C
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "#0F172A" }}>株式会社サイプレス 編集部</p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: "#6B7280" }}>
                    MEO・SEO・AIO・AI活用支援の専門家チームが、実績に基づいた情報を発信しています。
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="mt-8">
                <Link
                  href="/column"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-[#0F172A]"
                  style={{ color: "#6B7280" }}
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
                <div>
                  <h3 className="text-[10px] font-mono tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
                    カテゴリ
                  </h3>
                  <ul className="space-y-0">
                    {allCategories.map((cat) => (
                      <li key={cat} style={{ borderBottom: "1px solid #F0EDE6" }}>
                        <Link
                          href={`/column?category=${cat}`}
                          className="flex items-center justify-between py-2.5 text-xs transition-colors hover:text-[#0F172A]"
                          style={{ color: "#374151" }}
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

                {related.length > 0 && (
                  <div>
                    <h3 className="text-[10px] font-mono tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>
                      関連記事
                    </h3>
                    <ul className="space-y-0">
                      {related.map((rel) => (
                        <li key={rel.slug} style={{ borderBottom: "1px solid #F0EDE6" }}>
                          <Link
                            href={`/column/${rel.slug}`}
                            className="block py-3 text-xs leading-relaxed transition-colors hover:text-[#0F172A] hover:underline underline-offset-2"
                            style={{ color: "#374151" }}
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

        {/* Related bottom */}
        {related.length > 0 && (
          <section className="py-16" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
            <div className="max-w-6xl mx-auto px-6">
              <h2
                className="font-bold text-lg mb-8 pb-6"
                style={{ borderBottom: "1px solid #E8E4DC", color: "#0F172A" }}
              >
                関連コラム
              </h2>
              <div className="space-y-0">
                {related.map((rel) => (
                  <div key={rel.slug} style={{ borderBottom: "1px solid #E8E4DC" }}>
                    <Link
                      href={`/column/${rel.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-4 -mx-3 px-3 transition-colors hover:bg-white"
                    >
                      <span className="font-mono text-xs shrink-0" style={{ color: "#9CA3AF" }}>
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
                      <span className="text-sm flex-1 group-hover:underline underline-offset-4" style={{ color: "#0F172A" }}>
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
          <h2 className="font-bold text-xl mb-4" style={{ color: "#0F172A" }}>専門家にご相談ください</h2>
          <p className="mb-8 text-sm leading-relaxed max-w-md" style={{ color: "#374151" }}>
            記事を読んで自社に当てはめた戦略を知りたい方は、お問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all hover:bg-[#0F172A] hover:text-white"
            style={{ border: "1px solid #0F172A", color: "#0F172A" }}
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

// ─── Route handler ────────────────────────────────────────────────────────────

export default async function ColumnSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const isTopic = COLUMN_TOPICS.some((t) => t.slug === slug);
  if (isTopic) return <ColumnTopicPage slug={slug} />;

  const isArticle = COLUMNS.some((c) => c.slug === slug);
  if (isArticle) return <ColumnArticlePageContent slug={slug} />;

  notFound();
}
