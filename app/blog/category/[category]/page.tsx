import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  getPostsByCategory,
  getCategories,
  formatDate,
  CATEGORY_NAMES,
} from "@/lib/blog";

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  seo: "検索エンジン最適化（SEO）に関する実践的なノウハウ・解説記事を掲載しています。",
  meo: "Googleマップ集客（MEO対策）に関する実践的なノウハウ・解説記事を掲載しています。",
  aio: "AI検索最適化（AIO対策）に関する解説記事・最新動向を掲載しています。",
  "web-design": "ホームページ制作・Webデザインに関する実践的な記事を掲載しています。",
  sns: "SNS運用・Instagram活用に関する実践的なノウハウを掲載しています。",
  ai: "AI活用・業務自動化に関する解説記事・事例を掲載しています。",
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
        <section
          style={{
            background: "#f8f6f2",
            paddingTop: "128px",
            paddingBottom: "48px",
          }}
        >
          <div
            style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}
          >
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
                color: "#0d1b2a",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 240px",
              gap: "64px",
              alignItems: "start",
            }}
          >
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
                      borderBottom: "1px solid #ece8e0",
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
                        dateTime={post.date}
                        style={{
                          fontSize: "12px",
                          color: "#9ca3af",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {formatDate(post.date)}
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
                        color: "#0d1b2a",
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
                        color: "#0d1b2a",
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
                    color: "#0d1b2a",
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
                        borderBottom: "1px solid #ece8e0",
                        fontSize: "13px",
                        color: slug === category ? "#0d1b2a" : "#374151",
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
                  background: "#f8f6f2",
                  padding: "24px",
                  border: "1px solid #ece8e0",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "14px",
                    color: "#0d1b2a",
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
                    background: "#0d1b2a",
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
