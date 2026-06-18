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
      { href: "/company/about-cypress", label: "株式会社サイプレスとは" },
      { href: "/company/profile", label: "会社概要" },
      { href: "/company/message", label: "代表挨拶" },
      { href: "/company/philosophy", label: "企業理念" },
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

const COL_AGENT: FooterSection[] = [
  {
    heading: "販売代理店募集",
    links: [
      { href: "/agent", label: "代理店募集トップ" },
      { href: "/agent/web-design", label: "ホームページ制作代理店" },
      { href: "/agent/meo", label: "MEO対策代理店" },
      { href: "/agent/seo", label: "SEO対策代理店" },
      { href: "/agent/aio", label: "AIO対策代理店" },
      { href: "/agent/faq", label: "代理店FAQ" },
    ],
  },
  {
    heading: "パートナー",
    links: [
      { href: "/partner/referral", label: "取次店・紹介パートナー" },
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

const COL_COLUMN_GUIDE: FooterSection[] = [
  {
    heading: "コラム・ブログ",
    links: [
      { href: "/column", label: "専門コラム一覧" },
      { href: "/column/meo", label: "MEO対策コラム" },
      { href: "/column/seo", label: "SEO対策コラム" },
      { href: "/column/aio", label: "AIO対策コラム" },
      { href: "/blog", label: "ブログ" },
      { href: "/news", label: "お知らせ" },
    ],
  },
  {
    heading: "お悩み・目的別",
    links: [
      { href: "/problems/no-inquiries", label: "問い合わせが来ない" },
      { href: "/problems/map-ranking-low", label: "マップに表示されない" },
      { href: "/problems/losing-to-competitors", label: "競合に負けている" },
      { href: "/goals/increase-inquiries", label: "問い合わせを増やしたい" },
      { href: "/goals/meo-top", label: "マップ順位を上げたい" },
      { href: "/solutions/meo-seo", label: "MEO×SEO統合対策" },
    ],
  },
];

const COL_KNOWLEDGE: FooterSection[] = [
  {
    heading: "ナレッジ",
    links: [
      { href: "/knowledge/meo-vs-seo", label: "MEOとSEOの違い" },
      { href: "/knowledge/meo-ranking-factors", label: "MEO順位決定要因" },
      { href: "/knowledge/review-strategy", label: "口コミ増やし方" },
      { href: "/knowledge/seo-basics", label: "SEO基礎知識" },
      { href: "/knowledge/aio-basics", label: "AIO基礎知識" },
      { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド" },
    ],
  },
  {
    heading: "新業種対応",
    links: [
      { href: "/industries/hair-salon", label: "ヘアサロン集客" },
      { href: "/industries/nail-salon", label: "ネイルサロン集客" },
      { href: "/industries/osteopathic", label: "整体院・接骨院" },
      { href: "/industries/renovation", label: "リフォーム会社" },
      { href: "/industries/school", label: "学習塾・スクール" },
      { href: "/industries/pet-shop", label: "ペットショップ" },
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
        {/* 8-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 mb-14">
          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-1" style={{ minWidth: 0 }}>
            <Link href="/" className="flex items-center gap-3 mb-5" style={{ width: "fit-content", textDecoration: "none" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px", borderRadius: "8px",
                background: "#ffffff", flexShrink: 0, overflow: "hidden",
              }}>
                <Image
                  src="/logo.png"
                  alt="Cypress"
                  width={28}
                  height={28}
                  style={{ objectFit: "contain", width: "26px", height: "26px" }}
                />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#e8e4dc",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                Cypress
              </span>
            </Link>
            <p
              className="text-[12px] leading-relaxed mb-1"
              style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
            >
              株式会社サイプレス
            </p>
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
              <li
                className="text-[12px]"
                style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
              >
                設立：2026年5月13日
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

          {/* Column 3 — 代理店募集 & パートナー */}
          <FooterColumn sections={COL_AGENT} />

          {/* Column 4 — SEO & MEO */}
          <FooterColumn sections={COL_SEO_MEO} />

          {/* Column 4 — AIO & Web制作・AI */}
          <FooterColumn sections={COL_AIO_AI} />

          {/* Column 5 — 業種別 & 対応エリア */}
          <FooterColumn sections={COL_INDUSTRIES} />

          {/* Column 6 — コラム & お悩み別 */}
          <FooterColumn sections={COL_COLUMN_GUIDE} />

          {/* Column 7 — ナレッジ & 新業種 */}
          <FooterColumn sections={COL_KNOWLEDGE} />
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            className="text-[12px]"
            style={{ color: "#6b7a8d", fontFamily: "var(--font-sans)" }}
          >
            © 2026 株式会社サイプレス. All rights reserved.
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
