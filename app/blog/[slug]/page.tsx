import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  getAllSlugs,
  getPostBySlug,
  getCategories,
  getRecentPosts,
  formatDate,
  lastUpdated,
  CATEGORY_NAMES,
} from "@/lib/blog";

// ─── Related pages by category ───────────────────────────────────────────────

const RELATED_PAGES: Record<
  string,
  { href: string; label: string; desc: string }[]
> = {
  meo: [
    { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎" },
    { href: "/services/meo", label: "MEO対策サービス", desc: "サイプレスのMEO支援" },
    { href: "/meo/google-business-profile", label: "GBP最適化", desc: "Googleビジネスプロフィール活用" },
    { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ増加・返信管理" },
    { href: "/knowledge/meo-vs-seo", label: "MEO vs SEO", desc: "違いと使い分け方" },
  ],
  seo: [
    { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化の基礎" },
    { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
    { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツで上位表示" },
    { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスのSEO対策" },
    { href: "/knowledge/seo-basics", label: "SEO基礎知識", desc: "初心者向け解説" },
  ],
  aio: [
    { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の基礎" },
    { href: "/services/aio", label: "AIO対策サービス", desc: "サイプレスのAIO支援" },
    { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "AIに引用される方法" },
    { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "AI引用されやすい構成" },
    { href: "/knowledge/aio-basics", label: "AIO基礎知識", desc: "AI検索対策の入門" },
    { href: "/knowledge/eeat", label: "E-E-A-T強化", desc: "信頼性・専門性の向上" },
  ],
  "web-design": [
    { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス概要" },
    { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作実績" },
    { href: "/web-design/corporate-site", label: "コーポレートサイト", desc: "企業サイト制作" },
    { href: "/web-design/seo-site", label: "SEO対応サイト", desc: "集客できるサイト設計" },
    { href: "/knowledge/web-design-guide", label: "Web制作ガイド", desc: "制作の流れと要点" },
  ],
  sns: [
    { href: "/sns", label: "SNS運用代行", desc: "SNS運用サービス概要" },
    { href: "/services/sns", label: "SNS運用サービス", desc: "サイプレスのSNS支援" },
    { href: "/sns/instagram", label: "Instagram運用", desc: "Instagram活用法" },
    { href: "/knowledge/sns-marketing-basics", label: "SNSマーケティング入門", desc: "基礎から実践まで" },
    { href: "/knowledge/instagram-tips", label: "Instagram運用のコツ", desc: "フォロワー獲得法" },
  ],
  ai: [
    { href: "/ai", label: "AI活用支援", desc: "業務AI導入サポート" },
    { href: "/services/ai", label: "AI活用サービス", desc: "業務効率化・自動化" },
    { href: "/ai/automation", label: "業務自動化", desc: "AI自動化の実践" },
    { href: "/aio", label: "AIO対策", desc: "AI検索への対応" },
    { href: "/knowledge/ai-business", label: "AI活用ガイド", desc: "ビジネスでのAI活用" },
  ],
};

const DEFAULT_RELATED = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索エンジン最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索対応" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "ホームページ制作" },
  { href: "/contact", label: "無料相談", desc: "お気軽にご相談ください" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ集客の支援内容" },
];

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };

  return {
    title: `${post.title}｜株式会社サイプレス ブログ`,
    description: post.description || post.title,
    authors: [{ name: "株式会社サイプレス 編集部", url: "https://www.cypress-all.co.jp/company/about-cypress" }],
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: "article",
      publishedTime: post.date,
      modifiedTime: lastUpdated(post),
      locale: "ja_JP",
      images: [{ url: "/hero.jpg", width: 1774, height: 887, alt: "株式会社サイプレス" }],
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `https://www.cypress-all.co.jp/blog/${slug}`,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // 本文先頭の「# 記事タイトル」は見出し帯のタイトルと重複するため表示しない
  const body = post.content.replace(/^\s*#[ \t][^\n]*\n+/, "");

  const categories = getCategories();
  const recentPosts = getRecentPosts(5, slug);

  const relatedPages =
    (RELATED_PAGES[post.category] ?? []).slice(0, 6).length > 0
      ? RELATED_PAGES[post.category].slice(0, 6)
      : DEFAULT_RELATED;

  const categoryLabel = CATEGORY_NAMES[post.category] || post.category;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.cypress-all.co.jp/blog/${slug}#article`,
    headline: post.title,
    description: post.description || post.title,
    url: `https://www.cypress-all.co.jp/blog/${slug}`,
    datePublished: post.date,
    dateModified: lastUpdated(post),
    inLanguage: "ja",
    keywords: (post.tags && post.tags.length > 0 ? post.tags.join(", ") : categoryLabel),
    articleSection: categoryLabel,
    image: {
      "@type": "ImageObject",
      url: "https://www.cypress-all.co.jp/hero.jpg",
      width: 1774,
      height: 887,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.cypress-all.co.jp/blog/${slug}`,
    },
    author: {
      "@type": "Organization",
      "@id": "https://www.cypress-all.co.jp/#organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.cypress-all.co.jp/#organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cypress-all.co.jp/logo.png",
        width: 200,
        height: 60,
      },
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.cypress-all.co.jp/#website",
      name: "株式会社サイプレス ブログ",
      url: "https://www.cypress-all.co.jp",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
      { "@type": "ListItem", position: 2, name: "ブログ", item: "https://www.cypress-all.co.jp/blog" },
      { "@type": "ListItem", position: 3, name: categoryLabel, item: `https://www.cypress-all.co.jp/blog/category/${post.category}` },
      { "@type": "ListItem", position: 4, name: post.title, item: `https://www.cypress-all.co.jp/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main style={{ background: "#ffffff", minHeight: "100vh" }}>
        {/* Hero */}
        <section data-page-hero="article"
          style={{
            background: "#f0f1f2",
            paddingTop: "128px",
            paddingBottom: "48px",
          }}
        >
          <div
            style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}
          >
            <nav
              aria-label="パンくず"
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
              <span style={{ color: "#374151" }}>
                {post.title.slice(0, 30)}
                {post.title.length > 30 ? "…" : ""}
              </span>
            </nav>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
                flexWrap: "wrap",
              }}
            >
              <time
                dateTime={post.date}
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                }}
              >
                {formatDate(post.date)}
              </time>
              {post.updated && post.updated !== post.date && (
                <span style={{ fontSize: "12px", color: "#9ca3af", letterSpacing: "0.05em" }}>
                  更新 <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </span>
              )}
              {post.category && (
                <Link
                  href={`/blog/category/${post.category}`}
                  style={{
                    fontSize: "11px",
                    padding: "2px 10px",
                    background: "#293540",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  {CATEGORY_NAMES[post.category] || post.category}
                </Link>
              )}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px,3vw,38px)",
                color: "#333333",
                fontWeight: 700,
                lineHeight: 1.4,
                maxWidth: "800px",
              }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        {/* Main layout */}
        <div
          style={{ maxWidth: "72rem", margin: "0 auto", padding: "64px 24px" }}
        >
          <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-16 lg:grid-cols-[minmax(0,1fr)_240px]">
            {/* Article body */}
            <article>
              <div className="blog-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  // ページの h1 は見出し帯の記事タイトルだけにする
                  components={{ h1: ({ children }) => <h2>{children}</h2> }}
                >
                  {body}
                </ReactMarkdown>
              </div>

              {/* 記事の発信元（コラムと同じ表記。誰が責任を持って書いているかを示す） */}
              <div
                style={{
                  marginTop: "48px",
                  padding: "24px",
                  border: "1px solid #dde0e4",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    background: "#f0f1f2",
                    border: "1px solid #dde0e4",
                    fontWeight: 900,
                    color: "#333333",
                  }}
                >
                  C
                </div>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#333333" }}>
                    <Link href="/company/about-cypress" style={{ color: "#333333" }}>
                      株式会社サイプレス 編集部
                    </Link>
                  </p>
                  <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "4px", lineHeight: 1.7 }}>
                    東京都葛飾区のWebマーケティング会社。MEO・SEO・AIO・ホームページ制作の支援をもとに、中小企業のWeb集客に役立つ情報を発信しています。
                  </p>
                </div>
              </div>

              {/* 関連する固定ページへの内部リンク */}
              <div
                style={{
                  marginTop: "64px",
                  padding: "32px",
                  background: "#f0f1f2",
                  border: "1px solid #dde0e4",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.2em",
                    fontSize: "10px",
                    color: "#9CA3AF",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Related Pages
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "15px",
                    color: "#333333",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  関連するサービス・ガイド
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(200px,100%), 1fr))",
                    gap: "12px",
                  }}
                >
                  {relatedPages.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      style={{
                        display: "block",
                        padding: "14px 16px",
                        background: "#ffffff",
                        border: "1px solid #dde0e4",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-serif)",
                          fontSize: "13px",
                          color: "#333333",
                          fontWeight: 700,
                          marginBottom: "4px",
                        }}
                      >
                        {p.label}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "11px",
                          color: "#9CA3AF",
                          lineHeight: "1.5",
                        }}
                      >
                        {p.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div
                style={{
                  marginTop: "40px",
                  padding: "24px",
                  background: "#f0f1f2",
                  border: "1px solid #dde0e4",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div data-tone="dark"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#293540",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    flexShrink: 0,
                  }}
                >
                  C
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "14px",
                      color: "#333333",
                      fontWeight: 600,
                      marginBottom: "4px",
                    }}
                  >
                    株式会社サイプレス 編集部
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#374151",
                      lineHeight: "1.8",
                    }}
                  >
                    MEO・SEO・AIO・Web集客支援の専門家チームが、実践に基づいた情報を発信しています。東京都葛飾区を拠点に全国のビジネスを支援。
                  </p>
                </div>
              </div>

              {/* Back link */}
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/blog"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "#374151",
                    textDecoration: "none",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  ブログ一覧へ戻る
                </Link>
              </div>
            </article>

            {/* Sidebar（全体を固定すると画面の低いPCで下の相談枠が切れるので、相談枠だけを追従させる） */}
            <aside style={{ alignSelf: "stretch" }}>
              {/* Categories */}
              <div style={{ marginBottom: "40px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.2em",
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginBottom: "12px",
                  }}
                >
                  Categories
                </p>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/category/${cat.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid #dde0e4",
                      fontSize: "13px",
                      color: cat.slug === post.category ? "#333333" : "#374151",
                      fontWeight: cat.slug === post.category ? 600 : 400,
                      textDecoration: "none",
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{ color: "#9ca3af" }}>{cat.count}</span>
                  </Link>
                ))}
              </div>

              {/* Recent posts */}
              {recentPosts.length > 0 && (
                <div style={{ marginBottom: "40px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.2em",
                      fontSize: "11px",
                      color: "#9ca3af",
                      marginBottom: "12px",
                    }}
                  >
                    Recent
                  </p>
                  {recentPosts.map((p) => (
                    <div key={p.slug} style={{ borderBottom: "1px solid #dde0e4" }}>
                      <Link
                        href={`/blog/${p.slug}`}
                        style={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "12px",
                          color: "#374151",
                          textDecoration: "none",
                          lineHeight: "1.6",
                        }}
                      >
                        {p.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div
                style={{
                  position: "sticky",
                  top: "104px",
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
