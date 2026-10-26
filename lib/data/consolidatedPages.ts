/**
 * 検索意図が同じで評価を食い合っていたページを1本にまとめたときの対応表（まとめた側 → 残した側）。
 * まとめた側はページを生成せず（サイトマップにも出ない）、next.config.ts で残した側へ恒久的に転送する。
 */
export const CONSOLIDATED_PAGES: Record<string, string> = {
  // 「葛飾区で起業する人が最初に整えるべきWeb集客」と「…の優先順位」は同じ内容
  "/column/katsushika-startup-web-marketing": "/column/katsushika-start-business-web-marketing",
  // 「MEO対策会社の選び方」が2本あった
  "/column/meo-agency-selection-guide": "/column/how-to-choose-meo-agency-guide",
};

/**
 * 料金・費用相場を載せていたページの転送先（削除したページ → 内容の近いページ）。
 * 料金はサイトに載せず、無料相談で個別に見積もる方針にしたため、ページごと削除した。
 * サイト内リンクもこの転送先へ張り替えてある。
 */
export const REMOVED_PRICING_PAGES: Record<string, string> = {
  "/cost": "/contact",
  "/cost/meo": "/meo",
  "/cost/seo": "/seo",
  "/cost/homepage": "/web-design",
  "/cost/lp": "/web-design/landing-page",
  "/cost/corporate-site": "/web-design/corporate-site",
  "/cost/sns": "/sns",
  "/cost/aio": "/aio",
  "/cost/content-writing": "/seo/content-seo",
  "/cost/web-maintenance": "/web-design/maintenance",
  "/cost/comparison": "/services",
  "/cost/small-business": "/services",
  "/cost/monthly-breakdown": "/services",
  "/cost/free-consultation": "/contact",
  "/cost/ai-cost-reduction": "/ai",
  "/cost/total-package": "/services",
  "/pricing/web-growth-package": "/services",
  "/guide/homepage-cost-guide": "/web-design",
  "/guide/meo-cost-guide": "/meo",
  "/guide/seo-cost-guide": "/seo",
  "/column/meo-cost-guide-small-business": "/meo",
  "/column/seo-cost-guide-small-business": "/seo",
  "/column/homepage-cost-guide-tokyo": "/web-design",
  "/column/homepage-production-cost-guide": "/web-design",
  "/column/seo-cost-guide": "/seo",
  "/column/katsushika-web-design-cost": "/area/katsushika/web-design",
  "/column/katsushika-web-shukyaku-hiyo": "/area/katsushika",
  "/column/meo-seo-cost-comparison-2026": "/column/meo-vs-seo-which-better",
};

/** まとめた側（もうページを持たない）コラムの slug */
export const CONSOLIDATED_COLUMN_SLUGS = new Set(
  Object.keys(CONSOLIDATED_PAGES)
    .filter((path) => path.startsWith("/column/"))
    .map((path) => path.slice("/column/".length)),
);
