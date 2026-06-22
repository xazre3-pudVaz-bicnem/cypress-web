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
    { href: "/cost/meo", label: "MEO料金相場", desc: "費用の目安と比較" },
    { href: "/knowledge/meo-vs-seo", label: "MEO vs SEO", desc: "違いと使い分け方" },
  ],
  seo: [
    { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化の基礎" },
    { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
    { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツで上位表示" },
    { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスのSEO対策" },
    { href: "/cost/seo", label: "SEO料金相場", desc: "費用の目安と比較" },
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
    { href: "/cost/homepage", label: "HP制作費用相場", desc: "費用の目安と比較" },
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
  { href: "/cost/meo", label: "料金・費用", desc: "サービスの費用目安" },
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
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      type: "article",
      publishedTime: post.date,
      locale: "ja_JP",
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

  const categories = getCategories();
  const recentPosts = getRecentPosts(5, slug);

  const relatedPages =
    (RELATED_PAGES[post.category] ?? []).slice(0, 6).length > 0
      ? RELATED_PAGES[post.category].slice(0, 6)
      : DEFAULT_RELATED;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    url: `https://www.cypress-all.co.jp/blog/${slug}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: "https://www.cypress-all.co.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cypress-all.co.jp/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
              {post.category && (
                <Link
                  href={`/blog/category/${post.category}`}
                  style={{
                    fontSize: "11px",
                    padding: "2px 10px",
                    background: "#0d1b2a",
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
                color: "#0d1b2a",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 240px",
              gap: "64px",
              alignItems: "start",
            }}
          >
            {/* Article body */}
            <article>
              <div className="blog-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* 関連する固定ページへの内部リンク */}
              <div
                style={{
                  marginTop: "64px",
                  padding: "32px",
                  background: "#f8f6f2",
                  border: "1px solid #E8E4DC",
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
                    color: "#0d1b2a",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  関連するサービス・ガイド
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
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
                        border: "1px solid #E8E4DC",
                        textDecoration: "none",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-serif)",
                          fontSize: "13px",
                          color: "#0d1b2a",
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
                  background: "#f8f6f2",
                  border: "1px solid #E8E4DC",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#0d1b2a",
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
                      color: "#0d1b2a",
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

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "88px" }}>
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
                      borderBottom: "1px solid #E8E4DC",
                      fontSize: "13px",
                      color: cat.slug === post.category ? "#0d1b2a" : "#374151",
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
                    <div key={p.slug} style={{ borderBottom: "1px solid #E8E4DC" }}>
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
                  background: "#f8f6f2",
                  padding: "24px",
                  border: "1px solid #E8E4DC",
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
                    background: "#0F172A",
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
