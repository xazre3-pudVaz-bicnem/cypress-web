import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "会社情報 | 株式会社サイプレス",
  description: "株式会社サイプレスの会社情報。代表挨拶・企業理念・会社概要・沿革。東京都葛飾区のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作。",
  keywords: ["会社情報", "株式会社サイプレス", "代表挨拶", "企業理念", "会社概要", "Webマーケティング"],
  openGraph: {
    title: "会社情報 | 株式会社サイプレス",
    description: "株式会社サイプレスの会社情報。代表挨拶・企業理念・会社概要・沿革。MEO・SEO・AIO対策のWebマーケティング会社。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company" },
};

const SUB_PAGES = [
  {
    href: "/company/message",
    label: "代表挨拶",
    desc: "代表取締役・織田春樹より。創業の背景と、Webマーケティングを通じて実現したい世界について。",
  },
  {
    href: "/company/philosophy",
    label: "企業理念",
    desc: "Mission・Vision・Value。サイプレスが何のために存在し、どこを目指しているか。",
  },
  {
    href: "/company/profile",
    label: "会社概要",
    desc: "会社名・代表者・設立・所在地・事業内容など、基本情報の一覧。",
  },
  {
    href: "/company/history",
    label: "沿革",
    desc: "2026年5月の設立以来、サービス拡充の軌跡。",
  },
];

const PROFILE_ROWS = [
  { label: "会社名", value: "株式会社サイプレス" },
  { label: "代表取締役", value: "織田 春樹" },
  { label: "設立", value: "2026年5月13日" },
  { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
  { label: "事業内容", value: "Webマーケティング支援、MEO対策、SEO対策、AIO対策、ホームページ制作、SNS運用、AI活用支援" },
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>会社情報</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Company
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0F172A" }}
            >
              会社情報
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレスは、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、地域中小企業のWeb集客を支援するマーケティング会社です。「地域企業が、正しく選ばれる仕組みをつくる」という理念のもと、2026年5月13日に設立しました。
            </p>
          </div>
        </section>

        {/* Sub-pages navigation */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Contents
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
            >
              会社情報メニュー
            </h2>
            <div className="space-y-0">
              {SUB_PAGES.map((page, i) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-start justify-between gap-8 py-7 transition-colors hover:bg-white -mx-6 px-6"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>
                        0{i + 1}
                      </span>
                      <span className="font-black text-[18px]" style={{ color: "#0F172A" }}>
                        {page.label}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.8] ml-8" style={{ color: "#6B7280" }}>
                      {page.desc}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 shrink-0 mt-1 transition-transform group-hover:translate-x-1"
                    style={{ color: "#9CA3AF" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Quick company profile */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Profile
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0F172A" }}
            >
              会社基本情報
            </h2>
            <div className="max-w-3xl">
              {PROFILE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <dt
                    className="py-4 pr-6 text-[14px] font-medium"
                    style={{ color: "#6B7280", background: "#F9F8F5", paddingLeft: "0" }}
                  >
                    {row.label}
                  </dt>
                  <dd className="py-4 pl-6 text-[14px]" style={{ color: "#374151" }}>
                    {row.value}
                  </dd>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
              <div className="mt-6">
                <Link
                  href="/company/profile"
                  className="text-[13px] font-medium transition-colors hover:text-[#0F172A]"
                  style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
                >
                  会社概要の詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission — dark section */}
        <section className="py-24 md:py-32" style={{ background: "#0F172A" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#475569" }}>
                Mission
              </p>
              <h2
                className="font-black text-white leading-[1.15] tracking-tight mb-8"
                style={{ fontSize: "clamp(26px, 3.8vw, 48px)" }}
              >
                地域企業が、<br />正しく選ばれる仕組みをつくる。
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#94A3B8" }}>
                優れたサービスや技術・誠実な姿勢を持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていない中小企業が数多く存在します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-10" style={{ color: "#94A3B8" }}>
                私たちはMEO・SEO・AIO・ホームページ制作を組み合わせることで、複数の集客経路を同時に設計します。一度整えた仕組みは継続的に機能し、中小企業が大企業と対等なデジタル競争力を持てるよう伴走します。
              </p>
              <Link
                href="/company/philosophy"
                className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
                style={{ color: "#94A3B8", borderBottom: "1px solid #334155", paddingBottom: "2px" }}
              >
                企業理念を読む →
              </Link>
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
