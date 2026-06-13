import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getPosts, getCategories, getCategoryBySlug, stripHtml, formatDate, getFeaturedImage, getPostCategories } from "@/lib/wp";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = await getCategoryBySlug(category);
  if (!cat) return { title: "カテゴリが見つかりません" };
  return {
    title: `${cat.name}の記事一覧｜株式会社サイプレス ブログ`,
    description: cat.description || `${cat.name}に関する記事一覧。MEO・SEO・Web集客のノウハウをお届けします。`,
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const [cat, categories] = await Promise.all([
    getCategoryBySlug(category),
    getCategories(),
  ]);

  if (!cat) notFound();

  const posts = await getPosts({ perPage: 12, categoryId: cat.id });

  return (
    <>
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
              {cat.name}
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Category</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,40px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              {cat.name}
            </h1>
            {cat.description && (
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "560px" }}>
                {cat.description}
              </p>
            )}
            <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "12px" }}>
              {cat.count}件の記事
            </p>
          </div>
        </section>

        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "64px", alignItems: "start" }}>
            {/* Main */}
            <div>
              {posts.length === 0 ? (
                <div style={{ padding: "80px 0", textAlign: "center", color: "#9ca3af" }}>
                  <p>この카テゴリの記事はありません。</p>
                </div>
              ) : (
                posts.map((post) => {
                  const image = getFeaturedImage(post);
                  const cats = getPostCategories(post);
                  const excerpt = stripHtml(post.excerpt.rendered);
                  return (
                    <article key={post.id} style={{ borderBottom: "1px solid #ece8e0", paddingBottom: "40px", marginBottom: "40px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: image ? "1fr 200px" : "1fr", gap: "24px" }}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                            <time style={{ fontSize: "12px", color: "#9ca3af", fontFamily: "var(--font-display)" }}>
                              {formatDate(post.date)}
                            </time>
                            {cats.slice(0, 2).map((c) => (
                              <Link
                                key={c.id}
                                href={`/blog/category/${c.slug}`}
                                style={{ fontSize: "11px", padding: "2px 8px", background: "#f0ede8", color: "#374151", textDecoration: "none" }}
                              >
                                {c.name}
                              </Link>
                            ))}
                          </div>
                          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,2vw,20px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px" }}>
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </Link>
                          </h2>
                          <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>
                            {excerpt.slice(0, 120)}{excerpt.length > 120 ? "..." : ""}
                          </p>
                          <Link
                            href={`/blog/${post.slug}`}
                            style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px", fontSize: "13px", color: "#0d1b2a", textDecoration: "none" }}
                          >
                            続きを読む
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        </div>
                        {image && (
                          <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                            <Image src={image} alt={stripHtml(post.title.rendered)} fill className="object-cover" sizes="200px" />
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "88px" }}>
              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "16px" }}>Categories</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>カテゴリ</h3>
                {categories.filter(c => c.count > 0).map((c) => (
                  <Link
                    key={c.id}
                    href={`/blog/category/${c.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid #ece8e0",
                      fontSize: "13px",
                      color: c.slug === category ? "#0d1b2a" : "#374151",
                      textDecoration: "none",
                      fontWeight: c.slug === category ? 600 : 400,
                    }}
                  >
                    <span>{c.name}</span>
                    <span style={{ color: "#9ca3af" }}>{c.count}</span>
                  </Link>
                ))}
              </div>
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
