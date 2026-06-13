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
  // ---- NEW ARTICLES ----
  {
    slug: "local-seo-complete-guide",
    title: "地域SEO完全ガイド｜地域名検索でNo.1を取る方法2024",
    excerpt: "「地域名＋業種」キーワードで検索上位を獲得するための戦略を網羅。競合分析から内部対策・被リンク獲得まで、地域密着型ビジネスのSEO完全解説。",
    category: "SEO",
    publishedAt: "2026-06-10",
    readTime: 14,
    tags: ["地域SEO", "ローカルSEO", "キーワード対策"],
  },
  {
    slug: "gbp-optimization-tips",
    title: "Googleビジネスプロフィール最適化｜上位表示を実現する15の方法",
    excerpt: "Googleビジネスプロフィール（旧Googleマイビジネス）を徹底的に最適化し、地図検索での上位表示を実現する15の具体的な施策を解説します。",
    category: "MEO",
    publishedAt: "2026-06-08",
    readTime: 11,
    tags: ["Googleビジネスプロフィール", "MEO対策", "Googleマップ"],
  },
  {
    slug: "review-strategy-2024",
    title: "Googleの口コミ戦略｜自然な口コミを増やす依頼のコツと返信方法",
    excerpt: "Googleガイドラインを遵守しながら口コミを継続的に増やす依頼メソッドと、信頼感を高めるオーナー返信の書き方を事例付きで解説します。",
    category: "MEO",
    publishedAt: "2026-06-05",
    readTime: 9,
    tags: ["口コミ対策", "MEO対策", "Googleレビュー"],
  },
  {
    slug: "mobile-first-design-guide",
    title: "モバイルファーストデザイン｜スマホ最適化で離脱率を下げる方法",
    excerpt: "スマートフォンユーザーの離脱率を下げるUI設計の基本原則と実践テクニック。タップ領域・フォント・表示速度の最適化で成果を上げる方法。",
    category: "ホームページ制作",
    publishedAt: "2026-06-03",
    readTime: 8,
    tags: ["モバイルファースト", "スマホ最適化", "UX改善"],
  },
  {
    slug: "chatgpt-business-use",
    title: "ChatGPT活用ビジネス術｜中小企業が今すぐ使える実践15選",
    excerpt: "コスト削減・業務効率化・集客強化に直結するChatGPT活用術を15の実践事例とともに紹介。プロンプト例も掲載しすぐに試せる内容です。",
    category: "AI",
    publishedAt: "2026-06-01",
    readTime: 13,
    tags: ["ChatGPT", "AI活用", "業務効率化"],
  },
  {
    slug: "nextjs-seo-advantage",
    title: "Next.jsとSEO｜表示速度・構造化データ・Core Web Vitalsの最適化",
    excerpt: "Next.jsをSEOに最大限活用する方法を解説。SSG・SSR・ISRの使い分け、メタデータAPI、構造化データ実装、Lighthouseスコア改善まで網羅。",
    category: "ホームページ制作",
    publishedAt: "2026-05-29",
    readTime: 10,
    tags: ["Next.js", "SEO対策", "Core Web Vitals"],
  },
  {
    slug: "schema-markup-complete",
    title: "構造化データ完全実装ガイド｜FAQ・BreadcrumbからLocal Businessまで",
    excerpt: "JSON-LDによる構造化データの全種類を解説。FAQ・パンくず・LocalBusiness・Articleの実装方法と、リッチリザルト獲得のためのポイントを紹介。",
    category: "SEO",
    publishedAt: "2026-05-26",
    readTime: 12,
    tags: ["構造化データ", "JSON-LD", "リッチリザルト"],
  },
  {
    slug: "core-web-vitals-2024",
    title: "Core Web Vitals改善ガイド｜LCP・CLS・FIDを最適化してランク上げ",
    excerpt: "GoogleランキングにおけるCore Web Vitalsの影響度と、LCP・CLS・FIDそれぞれの具体的な改善手順を数値事例とともに詳しく解説します。",
    category: "SEO",
    publishedAt: "2026-05-23",
    readTime: 11,
    tags: ["Core Web Vitals", "LCP改善", "サイト高速化"],
  },
  {
    slug: "sns-local-business-strategy",
    title: "地域ビジネスのSNS戦略｜Instagram・LINE活用でリピーター獲得",
    excerpt: "地域に根ざした店舗・サービス業がInstagramとLINE公式アカウントを組み合わせ、リピーター獲得と口コミ拡散を実現する実践的な戦略を解説。",
    category: "SNS運用",
    publishedAt: "2026-05-20",
    readTime: 9,
    tags: ["SNS運用", "Instagram", "LINE公式アカウント"],
  },
  {
    slug: "ai-overview-impact",
    title: "AI Overview時代のSEO｜Googleが変わった今、何を対策すべきか",
    excerpt: "AI Overviewの普及でオーガニック流入が変化する中、今後も安定的にトラフィックを確保するために取り組むべきSEO・AIO戦略を詳しく解説。",
    category: "AIO",
    publishedAt: "2026-05-17",
    readTime: 12,
    tags: ["AI Overview", "AIO対策", "SEO戦略"],
  },
  {
    slug: "gbp-photo-guide",
    title: "Googleビジネスプロフィールの写真投稿戦略｜集客効果を高める撮り方",
    excerpt: "Googleビジネスプロフィールへの写真投稿がMEO順位と集客に与える影響を解説。効果的な撮影方法・投稿頻度・カテゴリ別の活用術を公開します。",
    category: "MEO",
    publishedAt: "2026-05-14",
    readTime: 8,
    tags: ["Googleビジネスプロフィール", "写真投稿", "MEO対策"],
  },
  {
    slug: "keyword-strategy-guide",
    title: "SEOキーワード戦略｜ロングテールキーワードで問い合わせを増やす方法",
    excerpt: "競合が少なくコンバージョン率の高いロングテールキーワードの発掘方法から記事設計、内部リンク構造まで、問い合わせ獲得につながるSEO戦略を解説。",
    category: "SEO",
    publishedAt: "2026-05-11",
    readTime: 10,
    tags: ["キーワード戦略", "ロングテール", "SEO対策"],
  },
  {
    slug: "instagram-for-restaurant",
    title: "飲食店Instagram活用術｜フォロワー増加とMEO効果を同時に高める方法",
    excerpt: "飲食店がInstagramを活用してフォロワーを増やしながら、Googleマップの口コミ・MEO順位向上を同時に狙える投稿戦略と運用フローを解説します。",
    category: "SNS運用",
    publishedAt: "2026-05-08",
    readTime: 8,
    tags: ["飲食店集客", "Instagram運用", "MEO連携"],
  },
  {
    slug: "web-design-cv-improvement",
    title: "コンバージョン率を上げるWeb制作｜CTAデザインと導線設計の実践",
    excerpt: "問い合わせ・購入・予約を増やすCTAデザインのベストプラクティスと、ユーザーを迷わせない導線設計の原則を実際の改善事例と数値で解説します。",
    category: "ホームページ制作",
    publishedAt: "2026-05-05",
    readTime: 10,
    tags: ["CTA最適化", "CVR改善", "導線設計"],
  },
  {
    slug: "meo-seo-combination",
    title: "MEO×SEO組み合わせ戦略｜Google検索を支配する方法",
    excerpt: "MEO対策とSEO対策を連携させることでGoogle検索全体を支配する手法を解説。マップ枠とオーガニック枠を同時に制覇した事例と具体的な実装手順。",
    category: "Webマーケティング",
    publishedAt: "2026-05-02",
    readTime: 12,
    tags: ["MEO対策", "SEO対策", "Webマーケティング"],
  },
  {
    slug: "content-creation-ai",
    title: "AIを使ったコンテンツ制作｜ChatGPTで記事の質を上げる正しい使い方",
    excerpt: "ChatGPTをコンテンツ制作に活用しながらE-E-A-Tを維持し、Googleに評価される高品質記事を効率よく量産するための正しいワークフローを解説。",
    category: "AI",
    publishedAt: "2026-05-28",
    readTime: 9,
    tags: ["AIコンテンツ", "ChatGPT", "コンテンツSEO"],
  },
  {
    slug: "small-business-web-marketing",
    title: "中小企業のWeb集客完全戦略｜予算30万円以内でできること",
    excerpt: "月30万円以内の予算でMEO・SEO・SNSを組み合わせ最大の集客効果を生み出す戦略ロードマップ。費用対効果の高い施策を優先順位付きで解説します。",
    category: "Webマーケティング",
    publishedAt: "2026-05-25",
    readTime: 13,
    tags: ["中小企業集客", "Webマーケティング", "低予算"],
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
