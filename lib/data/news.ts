export interface NewsArticle {
  slug: string;
  title: string;
  category: "お知らせ" | "プレスリリース" | "メディア掲載" | "実績";
  publishedAt: string;
  excerpt?: string;
  body?: string;
}

export const NEWS: NewsArticle[] = [
  {
    slug: "service-aio-launch-2024",
    title: "AIO対策サービスの提供を開始しました",
    category: "お知らせ",
    publishedAt: "2026-06-01",
    excerpt: "生成AI検索の急速な普及に対応するため、ChatGPT・Gemini・Perplexity等でのAI引用率を高める「AIO対策サービス」の提供を開始しました。",
    body: "生成AI検索の急速な普及に対応するため、ChatGPT・Gemini・Perplexity等でのAI引用率を高める「AIO対策サービス」の提供を開始しました。従来のSEO対策に加えて、AI検索時代に必要な新しい集客戦略を一気通貫でご支援します。詳細はサービスページをご覧ください。",
  },
  {
    slug: "office-relocation-2024",
    title: "本社移転のお知らせ",
    category: "お知らせ",
    publishedAt: "2026-05-15",
    excerpt: "事業拡大に伴い、2026年6月1日付で本社を移転いたしました。新住所は東京都葛飾区白鳥4-6-1-623となります。",
    body: "事業拡大に伴い、2026年6月1日付で本社を移転いたしました。新住所は東京都葛飾区白鳥4-6-1-623となります。お電話番号・メールアドレスに変更はございません。ご来社の際は新住所をご確認の上お越しください。",
  },
  {
    slug: "media-coverage-webmarketing",
    title: "Web担当者Forum様に当社事例が掲載されました",
    category: "メディア掲載",
    publishedAt: "2026-05-01",
    excerpt: "Webマーケティング専門メディア「Web担当者Forum」様に、当社のAIO対策支援事例が掲載されました。",
  },
  {
    slug: "meo-100-clients",
    title: "MEO対策サービスの支援実績が100社を突破しました",
    category: "実績",
    publishedAt: "2026-04-10",
    excerpt: "MEO対策サービスの累計支援企業数が100社を突破しました。飲食・美容・医療・建設など多業種にわたりご支援しています。",
  },
  {
    slug: "new-member-2026",
    title: "新メンバーを迎えサービス体制を強化しました",
    category: "お知らせ",
    publishedAt: "2026-04-01",
    excerpt: "2026年4月より新たに3名のメンバーが加わり、SEO・MEO・AIOの各専門チームを強化しました。",
  },
  {
    slug: "sns-management-launch",
    title: "SNS運用代行サービスをリニューアルしました",
    category: "お知らせ",
    publishedAt: "2026-03-15",
    excerpt: "SNS運用代行サービスをリニューアル。Instagram・X・TikTok・YouTube・LinkedInに対応した総合SNSマーケティングプランを提供開始しました。",
  },
];

export function getLatestNews(limit = 5): NewsArticle[] {
  return NEWS.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
}

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return NEWS.find((n) => n.slug === slug);
}
