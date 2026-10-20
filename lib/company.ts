/**
 * 会社の基本情報と事業一覧。
 * ヘッダー・フッター・トップページ・会社概要・構造化データ・チャットボットで共有する。
 * 旧ページには住所が文字列で直書きされているため、住所を変えるときは全体検索も併せて行うこと。
 */

export const COMPANY = {
  name: "株式会社サイプレス",
  nameEn: "Cypress Inc.",
  representative: "織田 春樹",
  founded: "2026年5月13日",
  foundedIso: "2026-05-13",
  postalCode: "125-0061",
  region: "東京都",
  locality: "葛飾区",
  street: "亀有3-16-14-201",
  address: "東京都葛飾区亀有3-16-14-201",
  nearestStation: "JR常磐線 亀有駅",
  geo: { latitude: 35.7636, longitude: 139.8486 },
  url: "https://www.cypress-all.co.jp",
} as const;

export const COMPANY_ADDRESS_WITH_POSTAL = `〒${COMPANY.postalCode} ${COMPANY.address}`;

/** Googleマップ（埋め込み・外部リンク）用の検索クエリ。 */
export const COMPANY_MAP_QUERY = encodeURIComponent(COMPANY.address);

export type Business = {
  key: "web" | "cargo" | "solar";
  name: string;
  nameEn: string;
  /** カードの見出し。事業ごとに「何を届けるか」で揃えている。 */
  catch: string;
  description: string;
  href: string;
  external: boolean;
  /** 外部サイトの表示名（外部リンクのときだけ使う） */
  siteLabel?: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

/**
 * 3つの事業。Webマーケティングが本業で、軽貨物・太陽光はそれぞれ専用サイトで運営している。
 * 内容は各サイト（2026年10月時点）の記載に合わせている。条件や数値はここに書かず、各サイトに任せる。
 */
export const BUSINESSES: Business[] = [
  {
    key: "web",
    name: "Webマーケティング事業",
    nameEn: "Web Marketing",
    catch: "選ばれる情報を、届ける。",
    description:
      "MEO・SEO・AIO対策、ホームページ制作、SNS運用、AI活用支援。中小企業の集客を、設計から運用まで一社で支えます。",
    href: "/services",
    external: false,
    image: "/images/brand/biz-web.jpg",
    imageAlt: "夕暮れの商店街でGoogleマップのピンを表示するスマートフォン",
    tags: ["MEO", "SEO", "AIO", "ホームページ制作", "SNS", "AI"],
  },
  {
    key: "cargo",
    name: "軽貨物事業",
    nameEn: "Light Cargo",
    catch: "荷物を、確実に届ける。",
    description:
      "葛飾区を拠点に、東京・千葉・埼玉で軽貨物配送を行う軽貨物事業部。一緒に配送網をつくるドライバーを募集しています。",
    href: "https://www.cypress-transport.com/",
    external: true,
    siteLabel: "cypress-transport.com",
    image: "/images/brand/biz-cargo.jpg",
    imageAlt: "朝の住宅街を走る白い軽バン",
    tags: ["軽貨物配送", "ドライバー募集", "東京・千葉・埼玉"],
  },
  {
    key: "solar",
    name: "太陽光事業",
    nameEn: "Solar — SOLAR SHIFT",
    catch: "電気を、つくって暮らしへ。",
    description:
      "葛飾区の住宅用太陽光発電・家庭用蓄電池の導入サポート「SOLAR SHIFT」。補助金の確認から設置、導入後の相談まで伴走します。",
    href: "https://www.solarshift.jp/",
    external: true,
    siteLabel: "solarshift.jp",
    image: "/images/brand/biz-solar.jpg",
    imageAlt: "住宅の屋根に設置された太陽光パネル",
    tags: ["太陽光発電", "家庭用蓄電池", "補助金サポート"],
  },
];
