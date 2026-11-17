/**
 * 検索意図が同じで評価を食い合っていたページを1本にまとめたときの対応表（まとめた側 → 残した側）。
 * まとめた側はページを生成せず（サイトマップにも出ない）、next.config.ts で残した側へ恒久的に転送する。
 */
export const CONSOLIDATED_PAGES: Record<string, string> = {
  // 「葛飾区で起業する人が最初に整えるべきWeb集客」と「…の優先順位」は同じ内容
  "/column/katsushika-startup-web-marketing": "/column/katsushika-start-business-web-marketing",
  // 「MEO対策会社の選び方」が2本あった
  "/column/meo-agency-selection-guide": "/column/how-to-choose-meo-agency-guide",
  // 初期の短いコラム（lib/data/columns.ts）。同じテーマのより詳しいコラムと内容が重なり、評価を食い合っていた
  "/column/meo-ranking-2024": "/column/meo",
  "/column/meo-review-management": "/column/review-acquisition-guide",
  "/column/review-strategy-2024": "/column/review-acquisition-guide",
  "/column/gbp-optimization-tips": "/column/gbp-optimization-guide",
  "/column/gbp-photo-guide": "/column/google-map-photo-strategy",
  "/column/instagram-local-business": "/column/instagram-local-strategy",
  "/column/instagram-for-restaurant": "/column/instagram-local-strategy",
  "/column/sns-local-business-strategy": "/column/sns",
  "/column/technical-seo-core-web-vitals": "/column/page-speed-improvement-guide",
  "/column/core-web-vitals-2024": "/column/page-speed-improvement-guide",
  "/column/schema-markup-complete": "/column/structured-data",
  "/column/local-seo-complete-guide": "/column/local-seo",
  "/column/keyword-strategy-guide": "/column/keyword-research-guide",
  "/column/seo-content-strategy": "/column/seo-blog-writing-complete-guide",
  "/column/web-design-cv-improvement": "/column/website-cvr-improvement-guide",
  "/column/mobile-first-design-guide": "/column/mobile-seo-guide",
  "/column/aio-chatgpt-strategy": "/column/chatgpt-citation-optimization-guide",
  "/column/google-ai-overview-strategy": "/column/ai-overview-optimization-2026",
  "/column/ai-overview-impact": "/column/ai-overview-optimization-2026",
  "/column/chatgpt-business-use": "/column/chatgpt",
  "/column/chatgpt-prompt-guide": "/column/chatgpt",
  "/column/content-creation-ai": "/column/ai-blog-content-strategy",
  "/column/ai-business-automation": "/column/sme-ai-adoption-guide",
  "/column/web-marketing-small-business": "/column/web-marketing-basics-for-sme",
  "/column/small-business-web-marketing": "/column/web-marketing-basics-for-sme",
  "/column/meo-seo-combination": "/column/meo-vs-seo-which-better",
  "/column/recruit-website-strategy": "/column/recruitment-web-marketing",
  // 業種×MEO の短いページ（lib/data/industrySubPages.ts）。同じ検索語を狙う /meo の業種別ページの方が詳しい
  "/industries/clinic/meo": "/meo/clinic-meo",
  "/industries/construction/meo": "/meo/construction-meo",
  "/industries/restaurant/meo": "/meo/restaurant-meo",
  "/industries/beauty/meo": "/meo/beauty-salon-meo",
  "/industries/hair-salon/meo": "/meo/beauty-salon-meo",
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
