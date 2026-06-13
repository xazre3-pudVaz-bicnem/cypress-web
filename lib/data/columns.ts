export type ColumnCategory =
  | "SEO"
  | "MEO"
  | "AIO"
  | "AI"
  | "ホームページ制作"
  | "SNS運用"
  | "採用"
  | "Webマーケティング";

export interface ColumnArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ColumnCategory;
  publishedAt: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
}

export const COLUMNS: ColumnArticle[] = [
  {
    slug: "meo-ranking-2024",
    title: "2024年最新版｜MEO対策でGoogleマップ上位表示を実現する完全ガイド",
    excerpt: "Googleマップの順位決定アルゴリズムの変化と、2024年に効果的なMEO対策の手法を徹底解説。口コミ戦略・ビジネスプロフィール最適化の最新アプローチ。",
    category: "MEO",
    publishedAt: "2026-06-01",
    readTime: 12,
    tags: ["MEO対策", "Googleマップ", "口コミ"],
    featured: true,
  },
  {
    slug: "aio-chatgpt-strategy",
    title: "ChatGPTに自社を推薦させる｜AIO対策の実践戦略2024",
    excerpt: "生成AI検索が急速に普及する中、ChatGPT・Gemini・Perplexityで引用される企業になるための具体的な実装方法を解説します。",
    category: "AIO",
    publishedAt: "2026-05-28",
    readTime: 15,
    tags: ["AIO対策", "ChatGPT", "AI検索"],
    featured: true,
  },
  {
    slug: "seo-content-strategy",
    title: "E-E-A-T時代のコンテンツSEO｜Googleに評価される記事の作り方",
    excerpt: "Googleが重視するE-E-A-T（経験・専門性・権威性・信頼性）を高めるコンテンツ戦略と、実際に上位表示を達成した事例を紹介します。",
    category: "SEO",
    publishedAt: "2026-05-20",
    readTime: 10,
    tags: ["コンテンツSEO", "E-E-A-T", "SEO"],
    featured: true,
  },
  {
    slug: "ai-business-automation",
    title: "中小企業のAI業務自動化｜月100時間を削減した実例5選",
    excerpt: "実際に月100時間以上の工数削減に成功した中小企業の事例を具体的なツール・設定方法と共に紹介。今日から始めるAI自動化の第一歩。",
    category: "AI",
    publishedAt: "2026-05-15",
    readTime: 8,
    tags: ["業務自動化", "AI活用", "効率化"],
  },
  {
    slug: "web-design-cv-improvement",
    title: "問い合わせ3倍増｜CVR改善のためのホームページリニューアル戦略",
    excerpt: "実際に問い合わせ数を3倍以上改善したホームページリニューアルの事例。デザイン・CTA・フォーム最適化のポイントを解説。",
    category: "ホームページ制作",
    publishedAt: "2026-05-10",
    readTime: 11,
    tags: ["CVR改善", "Web制作", "LP最適化"],
  },
  {
    slug: "instagram-local-business",
    title: "地域ビジネスのInstagram集客術｜フォロワー1万人達成した手法",
    excerpt: "地域密着型ビジネスがInstagramでフォロワー1万人を達成した具体的な投稿戦略・コンテンツ設計・ハッシュタグ戦略を公開します。",
    category: "SNS運用",
    publishedAt: "2026-05-05",
    readTime: 9,
    tags: ["Instagram集客", "SNS運用", "地域ビジネス"],
  },
  {
    slug: "technical-seo-core-web-vitals",
    title: "Core Web Vitals完全攻略｜LCP・FID・CLSを改善する技術的手法",
    excerpt: "Googleが重視するCore Web Vitalsの3指標を効果的に改善するための技術的手法。WordPressサイトから独自開発まで対応した実践ガイド。",
    category: "SEO",
    publishedAt: "2026-04-28",
    readTime: 14,
    tags: ["Core Web Vitals", "テクニカルSEO", "サイト速度"],
  },
  {
    slug: "google-ai-overview-strategy",
    title: "Google AI Overview（SGE）に選ばれるサイトの条件と対策法",
    excerpt: "Google AI Overviewでの引用を獲得するための条件と、実際に引用率を改善した施策を解説。生成AI検索時代の新しいSEO戦略。",
    category: "AIO",
    publishedAt: "2026-04-20",
    readTime: 13,
    tags: ["AI Overview", "SGE対策", "AIO"],
  },
  {
    slug: "recruit-website-strategy",
    title: "採用サイトで応募数2倍｜候補者の心を動かすコンテンツ設計",
    excerpt: "採用ページの改善で応募数を2倍以上に増やした事例を公開。求職者が本当に知りたい情報と、採用ブランディングの重要性を解説。",
    category: "採用",
    publishedAt: "2026-04-15",
    readTime: 7,
    tags: ["採用マーケティング", "採用サイト", "採用ブランディング"],
  },
  {
    slug: "web-marketing-small-business",
    title: "予算50万円から始めるWebマーケティング戦略｜優先順位の正解",
    excerpt: "限られた予算でWebマーケティングを最大化するための優先順位と実践手順。MEO・SEO・SNSの効果的な組み合わせ方を解説。",
    category: "Webマーケティング",
    publishedAt: "2026-04-08",
    readTime: 10,
    tags: ["Webマーケティング", "中小企業", "費用対効果"],
  },
  {
    slug: "meo-review-management",
    title: "Googleマップの口コミを自然に増やす7つの方法",
    excerpt: "Googleガイドラインに準拠した、自然かつ効果的な口コミ獲得の仕組みづくり。実際に月10件以上の口コミを獲得し続けている店舗の事例を公開。",
    category: "MEO",
    publishedAt: "2026-04-01",
    readTime: 9,
    tags: ["口コミ対策", "Googleマップ", "MEO"],
  },
  {
    slug: "chatgpt-business-use",
    title: "ChatGPT業務活用の決定版｜部門別・業種別100のユースケース",
    excerpt: "営業・マーケティング・HR・経理・カスタマーサポートなど部門別にChatGPTの実践的な活用例を100個紹介。今すぐ使えるプロンプト付き。",
    category: "AI",
    publishedAt: "2026-03-25",
    readTime: 18,
    tags: ["ChatGPT活用", "業務効率化", "AI"],
  },
];

export const COLUMN_CATEGORIES: ColumnCategory[] = [
  "SEO", "MEO", "AIO", "AI", "ホームページ制作", "SNS運用", "採用", "Webマーケティング",
];

export function getColumnsByCategory(category: ColumnCategory): ColumnArticle[] {
  return COLUMNS.filter((c) => c.category === category);
}

export function getFeaturedColumns(): ColumnArticle[] {
  return COLUMNS.filter((c) => c.featured).slice(0, 3);
}

export function getLatestColumns(limit = 3): ColumnArticle[] {
  return COLUMNS.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
}
