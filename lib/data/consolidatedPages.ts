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

/** まとめた側（もうページを持たない）コラムの slug */
export const CONSOLIDATED_COLUMN_SLUGS = new Set(
  Object.keys(CONSOLIDATED_PAGES)
    .filter((path) => path.startsWith("/column/"))
    .map((path) => path.slice("/column/".length)),
);
