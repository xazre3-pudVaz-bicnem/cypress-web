import Link from "next/link";
import { BUSINESSES, COMPANY, COMPANY_ADDRESS_WITH_POSTAL } from "@/lib/company";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";
import Logo from "@/components/brand/Logo";
import MotionToggle from "@/components/motion/MotionToggle";
import PageTopButton from "@/components/layout/PageTopButton";

// ─── Types ──────────────────────────────────────────────────────────────────

interface FooterLink {
  href: string;
  label: string;
  /** 別サイト（軽貨物・太陽光）へのリンク。新しいタブで開く */
  external?: boolean;
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
      { href: "/cases", label: "成功事例" },
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
      // Webマーケティング以外の事業（専用サイトで運営）
      ...BUSINESSES.filter((b) => b.external).map((b) => ({ href: b.href, label: `${b.name} ↗`, external: true })),
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
      { href: "/training/reskilling-subsidy", label: "研修導入相談" },
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
      { href: "/pricing/web-growth-package", label: "Web集客パッケージ料金" },
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
      { href: "/area/katsushika/web-design", label: "葛飾区のホームページ制作" },
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

function FooterLinkItem({ href, label, external }: FooterLink) {
  const cls = "text-[12px] font-medium leading-[1.6] text-white/60 transition-colors duration-300 hover:text-white";
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
          <span className="sr-only">（別サイトが開きます）</span>
        </a>
      ) : (
        <Link href={href} className={cls}>
          {label}
        </Link>
      )}
    </li>
  );
}

function FooterColumn({ sections }: { sections: FooterSection[] }) {
  return (
    <div className="min-w-0 space-y-9">
      {sections.map((sec) => (
        <div key={sec.heading}>
          <p className="text-[14px] font-bold text-white">{sec.heading}</p>
          <ul className="mt-4 space-y-2.5">
            {sec.links.map((l) => (
              <FooterLinkItem key={l.href} {...l} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

/**
 * サイト共通フッター（2026-10 デザイン刷新）。濃紺の地に、会社情報（NAP）と全ページへの導線を並べる。
 * 電話番号はサイト上に載せない方針のため、連絡先はフォームとメールのみ。
 */
export default function Footer() {
  return (
    <footer className="v2 relative text-white" style={{ background: "var(--v2-navy)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--v2-gutter)] pb-10 pt-16 md:pt-20">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="株式会社サイプレス トップページ" className="text-[22px] md:text-[26px]">
            <Logo tone="white" />
          </Link>
          <PageTopButton />
        </div>
        <hr className="my-10 border-white/10 md:my-14" />

        <div className="grid gap-14 lg:grid-cols-[minmax(240px,1fr)_3.4fr] lg:gap-16">
          <div>
            <p className="text-[14px] font-bold">{COMPANY.name}</p>
            <p className="mt-3 text-[12px] font-medium leading-[1.9] text-white/60">
              MEO・SEO・AIO・ホームページ制作で、
              <br />
              地域の会社のWeb集客を支援するマーケティングカンパニー。
            </p>
            <dl className="mt-6 space-y-2 text-[12px] font-medium leading-[1.7] text-white/60">
              <div>
                <dt className="sr-only">所在地</dt>
                <dd>{COMPANY_ADDRESS_WITH_POSTAL}</dd>
              </div>
              <div>
                <dt className="sr-only">メール</dt>
                <dd>
                  <a href={CONTACT_MAILTO} className="underline-offset-4 transition-colors hover:text-white hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">設立</dt>
                <dd>設立：{COMPANY.founded}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-[13px] font-bold text-white transition-colors duration-300 hover:bg-white hover:text-[var(--v2-blue)]"
                style={{ background: "var(--v2-blue)" }}
              >
                <svg aria-hidden width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4h14a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 17 16H3a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 3 4zm.6 1.8L10 10.4l6.4-4.6z" />
                </svg>
                お問い合わせ
              </Link>
            </div>
          </div>

          <nav aria-label="サイトマップ" className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 xl:grid-cols-7">
            <FooterColumn sections={COL_COMPANY} />
            <FooterColumn sections={COL_AGENT} />
            <FooterColumn sections={COL_SEO_MEO} />
            <FooterColumn sections={COL_AIO_AI} />
            <FooterColumn sections={COL_INDUSTRIES} />
            <FooterColumn sections={COL_COLUMN_GUIDE} />
            <FooterColumn sections={COL_KNOWLEDGE} />
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <MotionToggle tone="light" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-medium text-white/60">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="/sitemap" className="transition-colors hover:text-white">
              サイトマップ
            </Link>
            <p>© 2026 {COMPANY.nameEn}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
