import { BUSINESSES } from "@/lib/company";

/**
 * ヘッダー・フッター共通のナビゲーション定義（2026-10 デザイン刷新）。
 * 英字ラベルは見出し用、日本語ラベルは補足・スクリーンリーダー用。
 */
export interface NavLink {
  href: string;
  label: string;
  /** 英字の見出し（メガメニューのカード用） */
  en?: string;
  /** メガメニューのカード画像 */
  image?: string;
  external?: boolean;
}

export interface NavGroup {
  key: string;
  /** ヘッダーに出す英字ラベル */
  label: string;
  /** 日本語の意味（aria-label・モバイルメニュー用） */
  ja: string;
  href: string;
  /** ホバーで開くメニュー。無ければ単純なリンク。 */
  menu?: {
    /** カード（画像付き）で見せるリンク */
    cards?: NavLink[];
    /** 文字だけで並べるリンク */
    links?: NavLink[];
    /** 下段に小さく添えるリンク */
    extra?: { title: string; links: NavLink[] };
  };
}

export const SERVICE_LINKS: NavLink[] = [
  { href: "/services/meo", label: "MEO対策", en: "MEO", image: "/images/v2/svc-meo.jpg" },
  { href: "/services/seo", label: "SEO対策", en: "SEO", image: "/images/v2/svc-seo.jpg" },
  { href: "/services/aio", label: "AIO対策", en: "AIO", image: "/images/v2/svc-aio.jpg" },
  { href: "/services/web-design", label: "ホームページ制作", en: "Web Design", image: "/images/v2/svc-web.jpg" },
  { href: "/services/sns", label: "SNS運用", en: "Social Media", image: "/images/v2/svc-sns.jpg" },
  { href: "/services/ai", label: "AI活用支援", en: "AI Support", image: "/images/v2/svc-ai.jpg" },
];

/** Webマーケティング以外の事業（専用サイトで運営） */
export const OTHER_BUSINESS_LINKS: NavLink[] = BUSINESSES.filter((b) => b.external).map((b) => ({
  href: b.href,
  label: b.name,
  en: b.nameEn,
  external: true,
}));

export const PRIMARY_NAV: NavGroup[] = [
  {
    key: "services",
    label: "Services",
    ja: "サービス",
    href: "/services",
    menu: {
      cards: SERVICE_LINKS,
      extra: { title: "そのほかの事業", links: OTHER_BUSINESS_LINKS },
    },
  },
  { key: "cases", label: "Cases", ja: "支援事例", href: "/cases" },
  { key: "pricing", label: "Pricing", ja: "料金・費用", href: "/cost" },
  {
    key: "knowledge",
    label: "Knowledge",
    ja: "ナレッジ",
    href: "/column",
    menu: {
      links: [
        { href: "/seo", label: "SEO対策の基礎", en: "SEO" },
        { href: "/meo", label: "MEO対策の基礎", en: "MEO" },
        { href: "/aio", label: "AIO対策の基礎", en: "AIO" },
        { href: "/ai", label: "AI活用", en: "AI" },
        { href: "/web-design", label: "Web制作", en: "Web Design" },
        { href: "/sns", label: "SNS運用", en: "Social Media" },
        { href: "/industries", label: "業種別の集客", en: "Industries" },
        { href: "/area", label: "対応エリア", en: "Area" },
        { href: "/column", label: "コラム", en: "Column" },
      ],
    },
  },
];

export const SECONDARY_NAV: NavGroup[] = [
  {
    key: "company",
    label: "Company",
    ja: "会社情報",
    href: "/company",
    menu: {
      links: [
        { href: "/company/message", label: "代表挨拶", en: "Message" },
        { href: "/company/philosophy", label: "企業理念", en: "Philosophy" },
        { href: "/company/profile", label: "会社概要", en: "Profile" },
        { href: "/company/history", label: "沿革", en: "History" },
        { href: "/company/area", label: "対応エリア", en: "Area" },
        { href: "/business", label: "事業内容", en: "Business" },
      ],
    },
  },
  { key: "recruit", label: "Recruit", ja: "採用情報", href: "/recruit" },
  { key: "news", label: "News", ja: "お知らせ", href: "/news" },
  {
    key: "partner",
    label: "Partner",
    ja: "パートナー募集",
    href: "/agent",
    menu: {
      links: [
        { href: "/agent", label: "代理店募集", en: "Agency" },
        { href: "/agent/web-design", label: "ホームページ制作代理店", en: "Web Design" },
        { href: "/agent/meo", label: "MEO対策代理店", en: "MEO" },
        { href: "/agent/seo", label: "SEO対策代理店", en: "SEO" },
        { href: "/agent/aio", label: "AIO対策代理店", en: "AIO" },
        { href: "/partner/referral", label: "取次店・紹介パートナー", en: "Referral" },
      ],
    },
  },
];

export const CONTACT_LINK: NavLink = { href: "/contact", label: "お問い合わせ", en: "Contact" };
