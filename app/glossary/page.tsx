import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import { glossaryPages } from "@/lib/data/glossaryPages";

const categories = Array.from(new Set(glossaryPages.map((p) => p.category)));

export const metadata: Metadata = {
  title: "Webマーケティング用語集｜MEO・SEO・AIO・Web集客の専門用語解説｜株式会社サイプレス",
  description:
    "MEO・SEO・AIO・Web集客・Webマーケティングの専門用語を網羅した用語集。GBP・E-E-A-T・Core Web Vitals・llms.txt等の用語を初心者にもわかりやすく解説します。",
  keywords: ["MEO 用語", "SEO 用語集", "AIO 用語", "Webマーケティング 用語", "GBP とは", "E-E-A-T とは"],
  openGraph: {
    title: "Webマーケティング用語集｜MEO・SEO・AIO・Web集客の専門用語解説｜株式会社サイプレス",
    description: "MEO・SEO・AIO・Web集客の専門用語をわかりやすく解説する用語集。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/glossary" },
};

export default function GlossaryPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>用語集</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Glossary</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              Webマーケティング用語集
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              MEO・SEO・AIO・Web集客に関する専門用語をわかりやすく解説します。
              検討中の方から実務者まで、基礎から最新トレンドまで幅広く対応しています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              GBP・E-E-A-T・Core Web Vitals・llms.txtなど、日々変化するデジタルマーケティングの用語を
              随時更新しながら掲載しています。
            </p>
          </div>
        </section>

        {/* Image band */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.jpg"
            alt="Webマーケティング用語集"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(18px,2.5vw,28px)", lineHeight: 1.5 }}>
                難しい用語もわかりやすく。<br />MEO・SEO・AIO用語の完全ガイド。
              </p>
            </div>
          </div>
        </section>

        {categories.map((cat) => {
          const pages = glossaryPages.filter((p) => p.category === cat);
          return (
            <section key={cat} style={{ background: "#ffffff", padding: "60px 0", borderBottom: "1px solid #ece8e0" }}>
              <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", fontSize: "11px", color: "#9ca3af", marginBottom: "8px" }}>Category</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(16px,2vw,20px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>{cat}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "#ece8e0" }}>
                  {pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/glossary/${page.slug}`}
                      style={{ background: "#ffffff", padding: "24px", textDecoration: "none", display: "block" }}
                    >
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px", lineHeight: 1.4 }}>
                        {page.term}
                      </p>
                      <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.8" }}>
                        {page.definition.slice(0, 55)}...
                      </p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "10px", fontSize: "11px", color: "#9ca3af" }}>
                        詳しく見る
                        <svg width="9" height="9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* How to use section */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>How To Use</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              この用語集の使い方
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { n: "01", t: "気になる用語を検索", b: "カテゴリ別に整理されているので、MEO・SEO・AIO・SNSなど知りたい分野の用語を見つけやすい設計です。" },
                { n: "02", t: "各用語ページで詳しく学ぶ", b: "用語ページにはわかりやすい解説・実際の活用方法・関連用語へのリンクが掲載されています。" },
                { n: "03", t: "サービスページへ発展", b: "「MEOとは」を読んだ後は「MEO対策サービス」ページで具体的な支援内容や事例をご覧いただけます。" },
                { n: "04", t: "不明点は無料相談", b: "用語を読んだ上で「自社への活用方法がわからない」場合はお気軽に無料相談をご利用ください。" },
              ].map((item) => (
                <div key={item.n} style={{ background: "#ffffff", padding: "24px", borderLeft: "3px solid #c4b89a" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages
          links={[
            { href: "/knowledge", label: "ナレッジベース", desc: "Web集客の専門知識" },
            { href: "/guide", label: "Web集客ガイド", desc: "実践的なガイド集" },
            { href: "/checklist", label: "チェックリスト", desc: "施策の抜け漏れ防止" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客の詳細" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の詳細" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化の詳細" },
            { href: "/faq", label: "よくある質問", desc: "疑問をすぐに解決" },
            { href: "/contact", label: "無料相談", desc: "専門家に相談する" },
          ]}
        />

        <PageContactCTA
          heading="もっと詳しく知りたい方は"
          body="用語の詳細や自社への活用方法についてはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
