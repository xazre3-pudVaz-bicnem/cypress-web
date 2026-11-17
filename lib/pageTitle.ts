/** 検索結果で省略されずに表示されやすい、タイトルのおおよその上限（全角の文字数） */
const MAX_TITLE_LENGTH = 45;

/**
 * ページタイトルの末尾に社名を付ける。付けると長くなりすぎる場合は付けない。
 * 長いタイトルは検索結果で末尾が省略され、肝心の社名が消えるうえ内容の部分も読みにくくなる。
 * 社名は検索結果の上部にサイト名として表示される（layout の WebSite 構造化データ）ので、省いても伝わる。
 */
export function withSiteName(title: string, siteName = "株式会社サイプレス"): string {
  const full = `${title}｜${siteName}`;
  return Array.from(full).length <= MAX_TITLE_LENGTH ? full : title;
}
