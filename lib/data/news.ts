export interface NewsArticle {
  slug: string;
  title: string;
  category: "お知らせ";
  publishedAt: string;
  excerpt?: string;
  body?: string;
}

export const NEWS: NewsArticle[] = [
  {
    slug: "column-page-launched",
    title: "コラムページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-06-10",
    excerpt: "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用に関する専門コラムページを公開しました。Webマーケティングに役立つ情報を継続的に発信していきます。",
    body: "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用に関する専門コラムページを公開しました。Webマーケティングに役立つ専門知識を継続的に発信していきます。ぜひご活用ください。",
  },
  {
    slug: "aio-page-launched",
    title: "AIO対策サービスページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-06-05",
    excerpt: "ChatGPT・Gemini・PerplexityなどAI検索エンジンでの引用率を高めるAIO（AI最適化）対策サービスの詳細ページを公開しました。",
    body: "ChatGPT・Gemini・PerplexityなどのAI検索エンジンで引用・推薦されることを目指すAIO（AI Search Optimization）対策サービスの詳細ページを公開しました。構造化データ・FAQ設計・E-E-A-T強化を軸にした支援内容をご確認ください。",
  },
  {
    slug: "meo-page-launched",
    title: "MEO対策サービスページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-06-01",
    excerpt: "Googleマップ・Googleビジネスプロフィールを活用したMEO対策サービスの詳細ページを公開しました。地域ビジネスの集客強化にご活用ください。",
    body: "Googleマップ・Googleビジネスプロフィールを活用したMEO対策サービスの詳細ページを公開しました。口コミ対策・写真投稿・投稿機能の活用・カテゴリ設定最適化など、Googleマップ順位改善に向けた支援内容をご確認ください。",
  },
  {
    slug: "recruit-page-launched",
    title: "採用情報ページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-05-25",
    excerpt: "株式会社サイプレスの採用情報ページを公開しました。Webマーケティング・MEO・SEO・AIOに興味のある方のご応募をお待ちしています。",
    body: "株式会社サイプレスの採用情報ページを公開しました。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援に携わるメンバーを募集しています。リモートワーク対応・未経験歓迎のポジションもございます。ぜひご確認ください。",
  },
  {
    slug: "web-marketing-page-launched",
    title: "Webマーケティング支援ページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-05-15",
    excerpt: "MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援の各サービスページを公開しました。中小企業のWeb集客支援をワンストップで提供します。",
    body: "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用代行・AI活用支援の各サービス詳細ページを公開しました。サービスの組み合わせによる相乗効果を活かした集客設計が株式会社サイプレスの強みです。お気軽にお問い合わせください。",
  },
  {
    slug: "official-site-launched",
    title: "株式会社サイプレス公式サイトを公開しました",
    category: "お知らせ",
    publishedAt: "2026-05-01",
    excerpt: "株式会社サイプレスの公式ウェブサイトを公開しました。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、中小企業のWeb集客を支援してまいります。",
    body: "株式会社サイプレスの公式ウェブサイトを公開しました。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用代行・AI活用支援という6つの領域で、地域中小企業のWeb集客を総合的に支援いたします。オンラインにて全国対応しておりますので、お気軽にご相談ください。",
  },
];

export function getLatestNews(limit = 5): NewsArticle[] {
  return NEWS.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
}

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return NEWS.find((n) => n.slug === slug);
}
