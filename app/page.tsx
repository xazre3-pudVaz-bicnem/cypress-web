import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImmersiveHero from "@/components/home/ImmersiveHero";
import ScrollStory from "@/components/home/ScrollStory";
import ServiceEcosystem from "@/components/home/ServiceEcosystem";
import DarkFeaturePanels from "@/components/home/DarkFeaturePanels";
import IndustryShowcase from "@/components/home/IndustryShowcase";
import ProblemSolution from "@/components/home/ProblemSolution";
import HomeProcess from "@/components/home/HomeProcess";
import FinalContactBand from "@/components/home/FinalContactBand";
import { getLatestColumns } from "@/lib/data/columns";

export const metadata: Metadata = {
  title: "株式会社サイプレス | MEO・SEO・AIO・ホームページ制作",
  description:
    "株式会社サイプレスは、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、中小企業のWeb集客を支援するマーケティングカンパニーです。東京都葛飾区。",
  keywords: [
    "MEO対策",
    "SEO対策",
    "AIO対策",
    "ホームページ制作",
    "Webマーケティング",
    "株式会社サイプレス",
    "葛飾区 SEO",
    "葛飾区 MEO",
    "中小企業 Web集客",
    "AI検索対策",
    "Googleマップ集客",
  ],
  openGraph: {
    title: "株式会社サイプレス | MEO・SEO・AIO・ホームページ制作",
    description:
      "MEO対策・SEO対策・AIO対策・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。",
    locale: "ja_JP",
    type: "website",
  },
  alternates: { canonical: "https://www.cypress-all.co.jp" },
};

export default function Home() {
  const columns = getLatestColumns(3);

  return (
    <>
      <Header />
      <main>
        {/* =====================================================
            1. IMMERSIVE HERO — fullscreen parallax
        ===================================================== */}
        <ImmersiveHero />

        {/* =====================================================
            2. SCROLL STORY — sticky 6-service narrative
        ===================================================== */}
        <ScrollStory />

        {/* =====================================================
            3. SERVICE ECOSYSTEM — how the 6 services connect
        ===================================================== */}
        <ServiceEcosystem />

        {/* =====================================================
            4. DARK FEATURE PANELS — 4 strategic pillars
        ===================================================== */}
        <DarkFeaturePanels />

        {/* =====================================================
            5. INDUSTRY SHOWCASE — marquee of industries
        ===================================================== */}
        <IndustryShowcase />

        {/* =====================================================
            6. PROBLEM / SOLUTION — interactive issue finder
        ===================================================== */}
        <ProblemSolution />

        {/* =====================================================
            7. PHILOSOPHY — dark quote section
        ===================================================== */}
        <section
          style={{
            background: "#0B1628",
            padding: "clamp(64px, 10vh, 120px) 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "800px",
              height: "300px",
              background:
                "radial-gradient(ellipse, rgba(196,169,106,0.05) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
              textAlign: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.28em",
                color: "rgba(196,169,106,0.5)",
                fontSize: "10px",
                marginBottom: "32px",
                textTransform: "uppercase",
              }}
            >
              Philosophy
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 3vw, 36px)",
                color: "#ffffff",
                lineHeight: 1.7,
                fontWeight: 700,
                marginBottom: "28px",
              }}
            >
              正しい会社が、正しく選ばれる世界をつくりたい。
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: "1.95",
                maxWidth: "560px",
                margin: "0 auto 32px",
              }}
            >
              素晴らしい技術・サービス・想いを持ちながら、Web上での露出が少ないだけで機会を逃している中小企業が数多く存在します。AIとWebマーケティングを活用し、その橋渡しをすることが私たちの使命です。
            </p>
            <Link
              href="/company/philosophy"
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.28)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "2px",
                textDecoration: "none",
              }}
            >
              企業理念を読む →
            </Link>
          </div>
        </section>

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
          style={{ background: "#F5F3EE", padding: "clamp(40px, 6vh, 64px) 0" }}
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
            11. FINAL CTA — contact band
        ===================================================== */}
        <FinalContactBand />
      </main>
      <Footer />
    </>
  );
}
