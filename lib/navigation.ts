import { BUSINESSES } from "@/lib/company";

/**
 * ヘッダー・フッター・トップページで共有するサイト構造。
 * リンク先を増減するときはここだけを直す。
 */

export type NavLink = {
  href: string;
  label: string;
  /** メガメニューやカードに添える一行説明 */
  desc?: string;
  external?: boolean;
};

export type ServiceSummary = {
  slug: "meo" | "seo" | "aio" | "web-design" | "sns" | "ai";
  href: string;
  name: string;
  nameEn: string;
  /** カード用の一行コピー。説明文ではなく「何が良くなるか」を書く */
  summary: string;
  image: string;
};

/** Webマーケティング事業の6サービス。並び順はサイト全体で共通。 */
export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    slug: "meo",
    href: "/services/meo",
    name: "MEO対策",
    nameEn: "Local Map",
    summary: "Googleマップで「近くのお店」として選ばれる。",
    image: "/images/brand/svc-meo.jpg",
  },
  {
    slug: "seo",
    href: "/services/seo",
    name: "SEO対策",
    nameEn: "Search",
    summary: "広告費をかけずに、検索から見込み客を集める。",
    image: "/images/brand/svc-seo.jpg",
  },
  {
    slug: "aio",
    href: "/services/aio",
    name: "AIO対策",
    nameEn: "AI Search",
    summary: "ChatGPTやGeminiの回答で、名前が挙がる会社へ。",
    image: "/images/brand/svc-aio.jpg",
  },
  {
    slug: "web-design",
    href: "/services/web-design",
    name: "ホームページ制作",
    nameEn: "Web Production",
    summary: "問い合わせが生まれる導線まで設計する。",
    image: "/images/brand/svc-web.jpg",
  },
  {
    slug: "sns",
    href: "/services/sns",
    name: "SNS運用",
    nameEn: "Social Media",
    summary: "投稿を、来店と問い合わせにつなげる。",
    image: "/images/brand/svc-sns.jpg",
  },
  {
    slug: "ai",
    href: "/services/ai",
    name: "AI活用支援",
    nameEn: "AI Integration",
    summary: "チャットボットと自動化で、毎日の業務を軽くする。",
    image: "/images/brand/svc-ai.jpg",
  },
];

export const SERVICE_SUPPORT_LINKS: NavLink[] = [
  { href: "/services", label: "サービス一覧" },
  { href: "/pricing/web-growth-package", label: "Web集客パッケージ料金" },
  { href: "/cost", label: "料金・費用の目安" },
  { href: "/process", label: "ご支援の流れ" },
  { href: "/cases", label: "支援事例" },
];

export const BUSINESS_LINKS: NavLink[] = [
  { href: "/business", label: "事業内容", desc: "3つの事業の紹介" },
  ...BUSINESSES.map((b) => ({
    href: b.href,
    label: b.name,
    desc: b.external ? b.siteLabel : "MEO・SEO・AIO・HP制作ほか",
    external: b.external,
  })),
];

export const COMPANY_LINKS: NavLink[] = [
  { href: "/company/profile", label: "会社概要" },
  { href: "/company/message", label: "代表挨拶" },
  { href: "/company/philosophy", label: "企業理念" },
  { href: "/company/about-cypress", label: "サイプレスについて" },
  { href: "/company/history", label: "沿革" },
  { href: "/company/area", label: "対応エリア" },
];

export const KNOWLEDGE_LINKS: NavLink[] = [
  { href: "/column", label: "コラム" },
  { href: "/meo", label: "MEO対策の基礎" },
  { href: "/seo", label: "SEO対策の基礎" },
  { href: "/aio", label: "AIO対策の基礎" },
  { href: "/web-design", label: "ホームページ制作" },
  { href: "/sns", label: "SNS運用" },
  { href: "/ai", label: "AI活用" },
  { href: "/industries", label: "業種別の集客" },
  { href: "/glossary", label: "用語集" },
  { href: "/faq", label: "よくある質問" },
  { href: "/news", label: "お知らせ" },
];

export const RECRUIT_LINKS: NavLink[] = [
  { href: "/recruit", label: "採用情報" },
  { href: "/recruit/sales", label: "Webマーケティング営業" },
];

export const PARTNER_LINKS: NavLink[] = [
  { href: "/agent", label: "販売代理店募集" },
  { href: "/partner/referral", label: "取次店・紹介パートナー" },
  { href: "/training/reskilling-subsidy", label: "法人研修の導入相談" },
];

/** フッター下部の「サイトマップ」。旧フッターの内部リンクを、検索流入の多い入口ページに絞って残している。 */
export const FOOTER_SITEMAP: { heading: string; links: NavLink[] }[] = [
  {
    heading: "MEO対策",
    links: [
      { href: "/meo", label: "MEO対策とは" },
      { href: "/meo/google-business-profile", label: "GBP最適化" },
      { href: "/meo/review-management", label: "口コミ対策" },
      { href: "/meo/ranking", label: "順位改善" },
      { href: "/meo/meo-audit", label: "MEO監査" },
    ],
  },
  {
    heading: "SEO対策",
    links: [
      { href: "/seo", label: "SEO対策とは" },
      { href: "/seo/local-seo", label: "地域SEO" },
      { href: "/seo/content-seo", label: "コンテンツSEO" },
      { href: "/seo/technical-seo", label: "テクニカルSEO" },
      { href: "/seo/keyword-research", label: "キーワード調査" },
    ],
  },
  {
    heading: "AIO対策",
    links: [
      { href: "/aio", label: "AIO対策とは" },
      { href: "/aio/chatgpt", label: "ChatGPT対策" },
      { href: "/aio/ai-overview", label: "AI Overview" },
      { href: "/aio/structured-data", label: "構造化データ" },
      { href: "/aio/llms-txt", label: "llms.txt" },
    ],
  },
  {
    heading: "業種別",
    links: [
      { href: "/industries/restaurant", label: "飲食店" },
      { href: "/industries/beauty", label: "美容室・サロン" },
      { href: "/industries/clinic", label: "クリニック・歯科" },
      { href: "/industries/osteopathic", label: "整骨院・整体院" },
      { href: "/industries/renovation", label: "リフォーム" },
    ],
  },
  {
    heading: "対応エリア",
    links: [
      { href: "/area/katsushika", label: "葛飾区" },
      { href: "/area/tokyo", label: "東京都" },
      { href: "/area/chiba", label: "千葉県" },
      { href: "/area/saitama", label: "埼玉県" },
      { href: "/area/nationwide", label: "全国対応" },
    ],
  },
  {
    heading: "お悩みから探す",
    links: [
      { href: "/problems", label: "お悩み別の解決策" },
      { href: "/goals", label: "目的別の施策" },
      { href: "/checklist", label: "チェックリスト" },
      { href: "/guide", label: "はじめてのガイド" },
      { href: "/knowledge", label: "ナレッジ" },
    ],
  },
];
