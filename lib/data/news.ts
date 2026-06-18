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
    slug: "cases-page-launched",
    title: "株式会社サイプレスが支援事例ページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-06-18",
    excerpt:
      "株式会社サイプレスが実際に支援した事例（匿名）をまとめた「支援事例」ページを公開しました。MEO・SEO・ホームページ制作など、業種別・サービス別の施策内容をご確認いただけます。",
    body: "株式会社サイプレスが実際に支援した事例（匿名）をまとめた「支援事例」ページを公開しました。給湯器業者のSEO設計、老舗畳店のリニューアル、サロンのMEO・SEO連動設計など、業種・エリア・サービスの観点から7件の事例を掲載しています。架空の数値・誇大表現は一切掲載せず、施策内容と設計思想のみを紹介しています。Web集客の具体的なアプローチを知りたい方はぜひご覧ください。",
  },
  {
    slug: "about-cypress-page-launched",
    title: "「株式会社サイプレスとは」ページを公開しました",
    category: "お知らせ",
    publishedAt: "2026-06-17",
    excerpt:
      "株式会社サイプレスの会社詳細・設立背景・事業方針・サービス体系をまとめた「株式会社サイプレスとは」ページを公開しました。",
    body: "株式会社サイプレスがどのような会社か、設立の背景・代表の想い・事業方針・6つのサービスの連動性をまとめた「株式会社サイプレスとは」ページを公開しました。「Cypress（サイプレス）」という名前に込めた意味や、葛飾区を拠点にした理由、なぜMEO・SEO・AIO・Web制作を一つの会社で提供するのかについても記載しています。株式会社サイプレスに初めて関心を持っていただいた方はぜひご覧ください。",
  },
  {
    slug: "seo-column-expanded",
    title: "株式会社サイプレスがSEO・AIO専門コラムを大幅拡充しました",
    category: "お知らせ",
    publishedAt: "2026-06-15",
    excerpt:
      "株式会社サイプレスの専門コラムに、SEO対策・AIO対策・MEO対策・ホームページ制作に関する記事を大幅に追加しました。実践的なWeb集客知識を無料で公開しています。",
    body: "株式会社サイプレスの専門コラムページに、SEO対策・AIO対策・MEO対策・ホームページ制作に関する実践的な記事を大幅に追加しました。「コンテンツSEOとは」「MEO順位改善の方法」「AI検索に引用されるためのFAQ設計」など、中小企業・地域店舗のWeb集客担当者に役立つ内容を網羅的に公開しています。すべて無料でご覧いただけます。",
  },
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
