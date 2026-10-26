import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  getPostsByCategory,
  getCategories,
  formatDate,
  lastUpdated,
  CATEGORY_NAMES,
} from "@/lib/blog";

import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  seo: "SEO対策の記事一覧。キーワード選定・記事の設計・内部リンク・構造化データ・表示速度の改善など、中小企業が検索で上位を狙うための実践的なノウハウを解説しています。",
  meo: "MEO対策の記事一覧。Googleビジネスプロフィールの最適化、口コミの集め方と返信、写真や投稿の活用、競合分析など、Googleマップから集客するための実践的なノウハウを解説しています。",
  aio: "AIO対策（AI検索最適化）の記事一覧。ChatGPT・Gemini・PerplexityなどのAIに自社の情報を引用してもらうためのコンテンツ設計、FAQ、llms.txt、エンティティ最適化を解説しています。",
  "web-design": "ホームページ制作の記事一覧。中小企業のサイト制作で失敗しないポイント、LPや採用サイトの設計、問い合わせフォームの改善、スマホ対応、Next.jsとWordPressの比較を解説しています。",
  sns: "SNS運用の記事一覧。Instagramでの地域集客、LINE公式アカウントでの関係づくり、MEOとSNSの連動など、地域ビジネスがSNSを集客につなげるための実践的なノウハウを解説しています。",
  ai: "AI活用の記事一覧。中小企業がAIで業務を効率化する始め方、n8n・Makeを使った自動化の事例、AIを使ったブログ運用の注意点など、実務に役立つ情報を解説しています。",
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_NAMES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const name = CATEGORY_NAMES[category];
  if (!name) return { title: "カテゴリが見つかりません" };

  return {
    title: `${name}の記事一覧｜株式会社サイプレス ブログ`,
    description:
      CATEGORY_DESCRIPTIONS[category] ||
      `${name}に関する記事一覧。MEO・SEO・Web集客のノウハウをお届けします。`,
    alternates: {
      canonical: `https://www.cypress-all.co.jp/blog/category/${category}`,
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const name = CATEGORY_NAMES[category];

  if (!name) notFound();

  const posts = getPostsByCategory(category);
  const categories = getCategories();
  const description = CATEGORY_DESCRIPTIONS[category] || "";

  return (
    <>
      <Header />
      <main style={{ background: "#ffffff", minHeight: "100vh" }}>
        {/* Hero */}
        <section data-page-hero
          style={{
            background: "#f0f1f2",
            paddingTop: "128px",
            paddingBottom: "48px",
          }}
        >
          <div
            style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}
          >
            <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "ブログ", href: "/blog" }, { name: name }]} />
            <nav
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                marginBottom: "24px",
              }}
            >
              <Link
                href="/"
                style={{ color: "#9ca3af", textDecoration: "none" }}
              >
                ホーム
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link
                href="/blog"
                style={{ color: "#9ca3af", textDecoration: "none" }}
              >
                ブログ
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              {name}
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
              Category
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(26px,4vw,40px)",
                color: "#333333",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {name}
            </h1>
            {description && (
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "#374151",
                  marginTop: "16px",
                  maxWidth: "560px",
                }}
              >
                {description}
              </p>
            )}
            <p
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                marginTop: "12px",
              }}
            >
              {posts.length}件の記事
            </p>
          </div>
        </section>

        <div
          style={{ maxWidth: "72rem", margin: "0 auto", padding: "64px 24px" }}
        >
          <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-16 lg:grid-cols-[minmax(0,1fr)_240px]">
            {/* Main */}
            <div>
              {posts.length === 0 ? (
                <div
                  style={{
                    padding: "80px 0",
                    textAlign: "center",
                    color: "#9ca3af",
                  }}
                >
                  <p>このカテゴリの記事はまだありません。</p>
                </div>
              ) : (
                posts.map((post) => (
                  <article
                    key={post.slug}
                    style={{
                      borderBottom: "1px solid #dde0e4",
                      paddingBottom: "40px",
                      marginBottom: "40px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                      }}
                    >
                      <time
                        dateTime={lastUpdated(post)}
                        style={{
                          fontSize: "12px",
                          color: "#9ca3af",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {formatDate(lastUpdated(post))}
                      </time>
                      <span
                        style={{
                          fontSize: "11px",
                          padding: "2px 8px",
                          background: "#f0ede8",
                          color: "#374151",
                        }}
                      >
                        {name}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(16px,2vw,20px)",
                        color: "#333333",
                        fontWeight: 700,
                        lineHeight: 1.4,
                        marginBottom: "12px",
                      }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#374151",
                        lineHeight: "1.8",
                      }}
                    >
                      {post.description.slice(0, 120)}
                      {post.description.length > 120 ? "..." : ""}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "16px",
                        fontSize: "13px",
                        color: "#333333",
                        textDecoration: "none",
                      }}
                    >
                      続きを読む
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
                  </article>
                ))
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "88px" }}>
              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.2em",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginBottom: "16px",
                  }}
                >
                  Categories
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "13px",
                    color: "#333333",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  カテゴリ
                </h3>
                {Object.entries(CATEGORY_NAMES).map(([slug, catName]) => {
                  const found = categories.find((c) => c.slug === slug);
                  return (
                    <Link
                      key={slug}
                      href={`/blog/category/${slug}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        borderBottom: "1px solid #dde0e4",
                        fontSize: "13px",
                        color: slug === category ? "#333333" : "#374151",
                        textDecoration: "none",
                        fontWeight: slug === category ? 600 : 400,
                      }}
                    >
                      <span>{catName}</span>
                      {found && (
                        <span style={{ color: "#9ca3af" }}>{found.count}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
              <div
                style={{
                  background: "#f0f1f2",
                  padding: "24px",
                  border: "1px solid #dde0e4",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "14px",
                    color: "#333333",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  無料相談受付中
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#374151",
                    lineHeight: "1.8",
                    marginBottom: "16px",
                  }}
                >
                  MEO・SEO・Web集客でお悩みの方はお気軽にご相談ください。
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "10px",
                    fontSize: "13px",
                    background: "#293540",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  無料相談はこちら
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
