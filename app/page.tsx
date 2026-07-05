import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeMotionProvider from "@/components/home/HomeMotionProvider";
import ImmersiveHero from "@/components/home/ImmersiveHero";
import CinematicStatement from "@/components/home/CinematicStatement";
import ScrollStory from "@/components/home/ScrollStory";
import IndustryShowcase from "@/components/home/IndustryShowcase";
import ProblemSolution from "@/components/home/ProblemSolution";
import HomeProcess from "@/components/home/HomeProcess";
import FinalContactBand from "@/components/home/FinalContactBand";
import { getLatestColumns } from "@/lib/data/columns";

export const metadata: Metadata = {
  title: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜東京葛飾区のWebマーケティング会社",
  description:
    "株式会社サイプレスは東京都葛飾区拠点のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、東京23区・全国の中小企業のWeb集客を一気通貫で支援します。初回相談無料。",
  keywords: [
    "株式会社サイプレス",
    "サイプレス 東京",
    "Cypress Webマーケティング",
    "MEO対策 東京",
    "SEO対策 東京",
    "AIO対策 東京",
    "ホームページ制作 東京",
    "Webマーケティング 葛飾区",
    "葛飾区 SEO対策",
    "葛飾区 MEO対策",
    "葛飾区 ホームページ制作",
    "中小企業 Web集客 東京",
    "AI検索対策 東京",
    "Googleマップ集客 東京",
    "東京 Webマーケティング会社",
  ],
  openGraph: {
    title: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜東京葛飾区のWebマーケティング会社",
    description:
      "東京都葛飾区拠点のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援。東京23区・全国の中小企業のWeb集客を一気通貫で支援します。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "株式会社サイプレス 東京葛飾区のWebマーケティング会社" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp" },
};

// layout.tsx で Organization + WebSite スキーマ（@id付き）を出力済みのため、
// homepage では WebPage スキーマ + speakable のみ追加する
const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.cypress-all.co.jp/#webpage",
      url: "https://www.cypress-all.co.jp/",
      name: "株式会社サイプレス｜MEO・SEO・AIO・ホームページ制作｜葛飾区Webマーケティング",
      description:
        "株式会社サイプレスは東京都葛飾区を拠点に、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を提供するWebマーケティング会社です。中小企業・地域店舗のWeb集客を一気通貫で支援します。",
      inLanguage: "ja",
      isPartOf: { "@id": "https://www.cypress-all.co.jp/#website" },
      about: { "@id": "https://www.cypress-all.co.jp/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        ],
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".hero-description"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "株式会社サイプレスはどんな会社ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "東京都葛飾区（〒124-0816）を拠点とするWebマーケティング会社です。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援の6サービスを提供し、東京23区・全国の中小企業・地域店舗のWeb集客を支援します。代表取締役：織田 春樹。設立：2026年5月13日。",
          },
        },
        {
          "@type": "Question",
          name: "葛飾区でWebマーケティングを依頼できる会社はありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "株式会社サイプレスは東京都葛飾区に拠点を置き、葛飾区・足立区・江戸川区など東京東部エリアへ訪問対応でMEO対策・SEO対策・ホームページ制作を提供しています。",
          },
        },
        {
          "@type": "Question",
          name: "MEO対策・SEO対策の費用はいくらですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MEO対策は月2〜15万円、SEO対策は月5〜30万円が目安です。ホームページ制作は50〜300万円程度。初回相談は無料です。info@cypress-all.co.jp またはお問い合わせフォームからご連絡ください。",
          },
        },
        {
          "@type": "Question",
          name: "ChatGPT・Gemini・PerplexityなどのAI検索にも対応できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、AIO対策（AI検索最適化）として、ChatGPT・Gemini・Perplexityに引用・推薦されるための構造化データ実装・FAQ設計・E-E-A-T強化・llms.txt設置を実施します。",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const columns = getLatestColumns(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <Header />
      <main>
        <HomeMotionProvider>
        {/* =====================================================
            1. IMMERSIVE HERO — fullscreen parallax
        ===================================================== */}
        <ImmersiveHero />

        {/* =====================================================
            2. SCROLL STORY — sticky 6-service narrative
        ===================================================== */}
        <ScrollStory />

        {/* =====================================================
            5. INDUSTRY SHOWCASE — marquee of industries
        ===================================================== */}
        <IndustryShowcase />

        {/* =====================================================
            6. PROBLEM / SOLUTION — interactive issue finder
        ===================================================== */}
        <ProblemSolution />

        {/* =====================================================
            7. PHILOSOPHY — cinematic scroll-lit statement
        ===================================================== */}
        <CinematicStatement />

        {/* =====================================================
            8. PROCESS — 7-step workflow timeline
        ===================================================== */}
        <HomeProcess />

        {/* =====================================================
            9. COLUMN — latest articles (SEO internal linking)
        ===================================================== */}
        <section style={{ background: "#FFFFFF", padding: "clamp(64px, 9vh, 104px) 0" }}>
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "40px",
                paddingBottom: "20px",
                borderBottom: "1px solid #ECE8E0",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9CA3AF",
                    fontSize: "10px",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  Column
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    color: "#0B1628",
                    fontWeight: 700,
                  }}
                >
                  最新コラム
                </h2>
              </div>
              <Link
                href="/column"
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.08em",
                  color: "#6B7280",
                  textDecoration: "none",
                  borderBottom: "1px solid #D1C9BE",
                  paddingBottom: "2px",
                }}
              >
                すべて見る →
              </Link>
            </div>
            <div>
              {columns.map((col) => (
                <Link
                  key={col.slug}
                  href={`/column/${col.slug}`}
                  className="group"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "clamp(16px, 3vw, 32px)",
                    padding: "20px 0",
                    borderBottom: "1px solid #ECE8E0",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "11px",
                      color: "#9CA3AF",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  >
                    {col.publishedAt.replace(/-/g, ".")}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      padding: "2px 10px",
                      background: "#ECE8E0",
                      color: "#6B7280",
                      flexShrink: 0,
                    }}
                  >
                    {col.category}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#374151",
                      lineHeight: "1.65",
                    }}
                  >
                    {col.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            10. SEO INTERNAL LINKS — key pages nav
        ===================================================== */}
        <nav
          aria-label="サービス・エリア導線"
          style={{ background: "#F8F6F2", padding: "clamp(40px, 6vh, 64px) 0", borderTop: "1px solid #E8E4DC" }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "24px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 16px",
              }}
            >
              {[
                { label: "MEO対策", href: "/meo" },
                { label: "SEO対策", href: "/seo" },
                { label: "AIO対策", href: "/aio" },
                { label: "ホームページ制作", href: "/web-design" },
                { label: "SNS運用", href: "/sns" },
                { label: "AI活用支援", href: "/ai" },
                { label: "サービス一覧", href: "/services" },
                { label: "成功事例", href: "/cases" },
                { label: "業種別対応", href: "/industries" },
                { label: "対応エリア", href: "/area" },
                { label: "お悩み別", href: "/problems" },
                { label: "料金・費用", href: "/cost" },
                { label: "お問い合わせ", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "12px",
                    color: "#6B7280",
                    textDecoration: "none",
                    padding: "5px 12px",
                    border: "1px solid #E8E4DC",
                    background: "#ffffff",
                    letterSpacing: "0.03em",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* =====================================================
            11b. COMPANY IDENTITY — brief description for SEO
        ===================================================== */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(32px, 5vh, 52px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(12px, 1.2vw, 13px)",
                color: "#6B7280",
                lineHeight: "1.9",
              }}
            >
              <strong style={{ color: "#0B1628", fontWeight: 600 }}>株式会社サイプレス</strong>
              は、東京都葛飾区を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社です。
              <br />
              中小企業・地域店舗のWeb集客を、設計から運用まで一気通貫で支援します。
              代表取締役：織田 春樹 / 設立：2026年5月 /&nbsp;
              <a
                href="/company/about-cypress"
                style={{ color: "#C4A96A", textDecoration: "none", borderBottom: "1px solid #E8C97060" }}
              >
                株式会社サイプレスについて詳しく →
              </a>
            </p>
          </div>
        </section>

        {/* =====================================================
            11c. FINAL CTA — contact band
        ===================================================== */}
        <FinalContactBand />
        </HomeMotionProvider>
      </main>
      <Footer />
    </>
  );
}
