export interface SearchConsolePriorityPage {
  url: string;
  targetQueries: string[];
  currentStatus: "index" | "pending" | "unknown";
  priority: "high" | "medium" | "low";
  action: string;
  notes?: string;
}

const BASE = "https://www.cypress-all.co.jp";

export const SEARCH_CONSOLE_PRIORITY_PAGES: SearchConsolePriorityPage[] = [
  { url: `${BASE}/`, targetQueries: ["株式会社サイプレス", "サイプレス Webマーケティング"], currentStatus: "index", priority: "high", action: "インデックス確認・クリック率改善" },
  { url: `${BASE}/meo`, targetQueries: ["MEO対策", "MEO対策 東京", "Googleビジネスプロフィール 運用代行"], currentStatus: "index", priority: "high", action: "表示回数・CTR確認" },
  { url: `${BASE}/seo`, targetQueries: ["SEO対策 中小企業", "SEO対策 店舗", "SEO対策 東京"], currentStatus: "index", priority: "high", action: "表示回数・CTR確認" },
  { url: `${BASE}/aio`, targetQueries: ["AIO対策", "AI検索対策", "ChatGPT検索対策"], currentStatus: "index", priority: "high", action: "表示回数確認" },
  { url: `${BASE}/web-design`, targetQueries: ["ホームページ制作 中小企業", "葛飾区 ホームページ制作"], currentStatus: "index", priority: "high", action: "表示回数・CTR確認" },
  { url: `${BASE}/cases`, targetQueries: ["Web集客 成功事例", "MEO対策 事例"], currentStatus: "index", priority: "high", action: "インデックス確認" },
  { url: `${BASE}/area/katsushika`, targetQueries: ["葛飾区 ホームページ制作", "葛飾区 SEO対策", "葛飾区 MEO対策"], currentStatus: "index", priority: "high", action: "表示回数・クリック確認" },
  { url: `${BASE}/area/tokyo`, targetQueries: ["東京 MEO対策", "東京 SEO対策"], currentStatus: "index", priority: "high", action: "表示回数確認" },
  { url: `${BASE}/industries/restaurant`, targetQueries: ["飲食店 MEO対策", "飲食店 ホームページ制作"], currentStatus: "index", priority: "medium", action: "インデックス登録リクエスト" },
  { url: `${BASE}/industries/beauty`, targetQueries: ["美容室 MEO対策", "美容室 ホームページ制作"], currentStatus: "index", priority: "medium", action: "インデックス登録リクエスト" },
  { url: `${BASE}/industries/clinic`, targetQueries: ["クリニック ホームページ制作", "クリニック MEO対策"], currentStatus: "index", priority: "medium", action: "インデックス登録リクエスト" },
  { url: `${BASE}/industries/construction`, targetQueries: ["リフォーム会社 ホームページ制作", "工務店 SEO対策"], currentStatus: "index", priority: "medium", action: "インデックス登録リクエスト" },
  { url: `${BASE}/industries/real-estate`, targetQueries: ["不動産会社 SEO対策", "不動産 ホームページ制作"], currentStatus: "index", priority: "medium", action: "インデックス登録リクエスト" },
  { url: `${BASE}/cases/service/meo`, targetQueries: ["MEO対策 成功事例", "MEO対策 事例"], currentStatus: "index", priority: "medium", action: "インデックス確認" },
  { url: `${BASE}/cases/service/seo`, targetQueries: ["SEO対策 成功事例", "SEO 事例 中小企業"], currentStatus: "index", priority: "medium", action: "インデックス確認" },
  { url: `${BASE}/cases/service/web-design`, targetQueries: ["ホームページ制作 事例", "Web制作 成功事例"], currentStatus: "index", priority: "medium", action: "インデックス確認" },
  { url: `${BASE}/cases/industry/restaurant`, targetQueries: ["飲食店 MEO 事例", "飲食店 ホームページ 事例"], currentStatus: "index", priority: "medium", action: "インデックス確認" },
  { url: `${BASE}/company/about-cypress`, targetQueries: ["株式会社サイプレスとは", "サイプレス 会社概要"], currentStatus: "index", priority: "medium", action: "インデックス確認" },
  { url: `${BASE}/contact`, targetQueries: ["株式会社サイプレス 問い合わせ", "サイプレス 相談"], currentStatus: "index", priority: "medium", action: "インデックス確認" },
];

export const HIGH_PRIORITY_PAGES = SEARCH_CONSOLE_PRIORITY_PAGES.filter((p) => p.priority === "high");

export const SEARCH_CONSOLE_REGISTER_URLS = SEARCH_CONSOLE_PRIORITY_PAGES.map((p) => p.url);
