import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, getCategories, stripHtml, formatDate, getFeaturedImage, getPostCategories, getPosts } from "@/lib/wp";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };

  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 120);
  const image = getFeaturedImage(post);

  return {
    title: `${title}｜株式会社サイプレス ブログ`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
      locale: "ja_JP",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, categories, recentPosts] = await Promise.all([
    getPostBySlug(slug),
    getCategories(),
    getPosts({ perPage: 5 }),
  ]);

  if (!post) notFound();

  const image = getFeaturedImage(post);
  const cats = getPostCategories(post);
  const title = stripHtml(post.title.rendered);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "datePublished": post.date,
    "dateModified": post.modified,
    "author": {
      "@type": "Organization",
      "name": "株式会社サイプレス",
      "url": "https://cypress-web.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "株式会社サイプレス",
      "logo": { "@type": "ImageObject", "url": "https://cypress-web.com/logo.png" },
    },
    ...(image ? { "image": image } : {}),
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
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/blog">ブログ</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#374151" }}>{title.slice(0, 30)}{title.length > 30 ? "..." : ""}</span>
            </nav>

            {/* Category + Date */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <time style={{ fontSize: "12px", color: "#9ca3af", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
                {formatDate(post.date)}
              </time>
              {cats.slice(0, 2).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog/category/${cat.slug}`}
                  style={{ fontSize: "11px", padding: "2px 8px", background: "#0d1b2a", color: "#ffffff", textDecoration: "none" }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <h1
              style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,38px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, maxWidth: "800px" }}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
        </section>

        {/* Featured image */}
        {image && (
          <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.08)" }} />
          </div>
        )}

        {/* Article layout */}
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "64px", alignItems: "start" }}>

            {/* Article body */}
            <article>
              <div
                className="wp-content"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "#374151",
                  fontFamily: "var(--font-sans)",
                }}
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />

              {/* Author */}
              <div
                style={{
                  marginTop: "64px",
                  padding: "24px",
                  background: "#f8f6f2",
                  border: "1px solid #ece8e0",
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
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0d1b2a", fontWeight: 600, marginBottom: "4px" }}>
                    株式会社サイプレス 編集部
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>
                    MEO・SEO・AIO・Web集客支援の専門家チームによる、実績に基づいた情報を発信しています。
                  </p>
                </div>
              </div>

              {/* Back link */}
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/blog"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#374151", textDecoration: "none" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  ブログ一覧へ戻る
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "88px" }}>
              {/* Categories */}
              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "16px" }}>Categories</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>カテゴリ</h3>
                {categories.filter(c => c.count > 0).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/blog/category/${cat.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid #ece8e0",
                      fontSize: "13px",
                      color: "#374151",
                      textDecoration: "none",
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{ color: "#9ca3af" }}>{cat.count}</span>
                  </Link>
                ))}
              </div>

              {/* Recent posts */}
              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "16px" }}>Recent</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>最新記事</h3>
                {recentPosts.filter(p => p.slug !== slug).slice(0, 5).map((p) => (
                  <div key={p.id} style={{ borderBottom: "1px solid #ece8e0" }}>
                    <Link
                      href={`/blog/${p.slug}`}
                      style={{ display: "block", padding: "10px 0", fontSize: "12px", color: "#374151", textDecoration: "none", lineHeight: "1.6" }}
                    >
                      <span dangerouslySetInnerHTML={{ __html: p.title.rendered }} />
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA box */}
              <div style={{ background: "#f8f6f2", padding: "24px", border: "1px solid #ece8e0" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0d1b2a", fontWeight: 700, marginBottom: "10px" }}>無料相談受付中</p>
                <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.8", marginBottom: "16px" }}>
                  MEO・SEO・Web集客でお悩みの方はお気軽にご相談ください。
                </p>
                <Link
                  href="/contact"
                  style={{ display: "block", textAlign: "center", padding: "10px", fontSize: "13px", background: "#0d1b2a", color: "#ffffff", textDecoration: "none" }}
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
