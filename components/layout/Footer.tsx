import Link from "next/link";
import Image from "next/image";

// ─── Types ──────────────────────────────────────────────────────────────────

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  heading: string;
  links: FooterLink[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const COL_COMPANY: FooterSection[] = [
  {
    heading: "会社情報",
    links: [
      { href: "/company/message", label: "代表挨拶" },
      { href: "/company/philosophy", label: "企業理念" },
      { href: "/company/profile", label: "会社概要" },
      { href: "/company/history", label: "沿革" },
      { href: "/recruit", label: "採用情報" },
    ],
  },
  {
    heading: "事業内容",
    links: [
      { href: "/services/meo", label: "MEO対策" },
      { href: "/services/seo", label: "SEO対策" },
      { href: "/services/aio", label: "AIO対策" },
      { href: "/services/web-design", label: "Web制作" },
      { href: "/services/sns", label: "SNS運用" },
      { href: "/services/ai", label: "AI活用" },
    ],
  },
];

const COL_SEO_MEO: FooterSection[] = [
  {
    heading: "SEO対策",
    links: [
      { href: "/seo", label: "SEO対策とは" },
      { href: "/seo/internal-seo", label: "内部SEO" },
      { href: "/seo/content-seo", label: "コンテンツSEO" },
      { href: "/seo/technical-seo", label: "テクニカルSEO" },
      { href: "/seo/local-seo", label: "地域SEO" },
      { href: "/seo/keyword-research", label: "キーワード調査" },
      { href: "/seo/blog-strategy", label: "ブログ戦略" },
    ],
  },
  {
    heading: "MEO対策",
    links: [
      { href: "/meo", label: "MEO対策とは" },
      { href: "/meo/google-business-profile", label: "GBP最適化" },
      { href: "/meo/review-management", label: "口コミ対策" },
      { href: "/meo/ranking", label: "順位改善" },
      { href: "/meo/photo-posting", label: "写真投稿" },
      { href: "/meo/meo-audit", label: "MEO監査" },
    ],
  },
];

const COL_AIO_AI: FooterSection[] = [
  {
    heading: "AIO対策",
    links: [
      { href: "/aio", label: "AIO対策とは" },
      { href: "/aio/chatgpt", label: "ChatGPT対策" },
      { href: "/aio/ai-overview", label: "AI Overview" },
      { href: "/aio/structured-data", label: "構造化データ" },
      { href: "/aio/llms-txt", label: "LLMS.txt" },
      { href: "/aio/faq-optimization", label: "FAQ最適化" },
    ],
  },
  {
    heading: "Web制作・AI",
    links: [
      { href: "/web-design", label: "Web制作" },
      { href: "/web-design/corporate-site", label: "コーポレートサイト" },
      { href: "/web-design/seo-site", label: "SEO対応サイト" },
      { href: "/ai", label: "AI活用支援" },
      { href: "/ai/automation", label: "業務自動化" },
    ],
  },
];

const COL_INDUSTRIES: FooterSection[] = [
  {
    heading: "業種別対応",
    links: [
      { href: "/industries/restaurant", label: "飲食店" },
      { href: "/industries/beauty", label: "美容室" },
      { href: "/industries/clinic", label: "医療・歯科" },
      { href: "/industries/construction", label: "建設業" },
      { href: "/industries/professional-service", label: "士業" },
      { href: "/industries/local-store", label: "地域店舗" },
    ],
  },
  {
    heading: "対応エリア",
    links: [
      { href: "/area/tokyo", label: "東京都" },
      { href: "/area/katsushika", label: "葛飾区" },
      { href: "/area/chiba", label: "千葉県" },
      { href: "/area/saitama", label: "埼玉県" },
      { href: "/area/nationwide", label: "全国対応" },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4 pb-2"
      style={{
        color: "#e8e4dc",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {children}
    </p>
  );
}

function FooterLinkItem({ href, label }: FooterLink) {
  return (
    <Link
      href={href}
      className="text-[12px] leading-relaxed transition-colors hover:text-[#e8e4dc]"
      style={{ color: "#6b7a8d", display: "block", marginBottom: "6px" }}
    >
      {label}
    </Link>
  );
}

function FooterColumn({ sections }: { sections: FooterSection[] }) {
  return (
    <div>
      {sections.map((section, i) => (
        <div key={section.heading} style={{ marginBottom: i < sections.length - 1 ? "28px" : 0 }}>
          <SectionHeading>{section.heading}</SectionHeading>
          {section.links.map((l) => (
            <FooterLinkItem key={l.href} href={l.href} label={l.label} />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer style={{ background: "#0d1b2a", color: "#8b97a8" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        {/* 5-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="株式会社サイプレス"
                width={120}
                height={30}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p
              className="text-[12px] leading-relaxed mb-5"
              style={{ color: "#8b97a8", fontFamily: "var(--font-sans)" }}
            >
              MEO・SEO・AIO・ホームページ制作を通じて、<br />
              中小企業のWeb集客を支援するマーケティングカンパニー。
            </p>
            <ul className="space-y-2">
              <li
                className="text-[12px]"
                style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
              >
                東京都葛飾区白鳥4-6-1-623
              </li>
              <li>
                <a
                  href="mailto:consulting.meo@gmail.com"
                  className="text-[12px] transition-colors hover:text-[#e8e4dc]"
                  style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
                >
                  consulting.meo@gmail.com
                </a>
              </li>
              <li
                className="text-[12px]"
                style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
              >
                対応エリア：全国（オンライン対応）
              </li>
            </ul>
          </div>

          {/* Column 2 — 会社情報 & 事業内容 */}
          <FooterColumn sections={COL_COMPANY} />

          {/* Column 3 — SEO & MEO */}
          <FooterColumn sections={COL_SEO_MEO} />

          {/* Column 4 — AIO & Web制作・AI */}
          <FooterColumn sections={COL_AIO_AI} />

          {/* Column 5 — 業種別 & 対応エリア */}
          <FooterColumn sections={COL_INDUSTRIES} />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[12px]"
            style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
          >
            © 2024 株式会社サイプレス. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-[12px] transition-colors hover:text-[#e8e4dc]"
              style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/sitemap"
              className="text-[12px] transition-colors hover:text-[#e8e4dc]"
              style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
            >
              サイトマップ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
