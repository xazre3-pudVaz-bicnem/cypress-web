/**
 * 毎日1記事を自動生成して content/blog/ に保存するスクリプト。
 * GitHub Actions から呼び出される。
 *
 * 実行方法:
 *   ANTHROPIC_API_KEY=xxx npx tsx scripts/generate-daily-post.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ─── 設定 ────────────────────────────────────────────────────────────────────

const POSTS_DIR = path.join(process.cwd(), "content/blog");

const SITE = {
  name: "株式会社サイプレス",
  url: "https://www.cypress-all.co.jp",
  keywords: "ホームページ制作 SEO MEO AIO",
  area: "全国",
  business: "ホームページ制作・SEO対策・MEO対策・AIO対策",
};

// ─── トピックプール ────────────────────────────────────────────────────────────

const TOPICS: {
  title: string;
  slug: string;
  category: string;
  tags: string[];
}[] = [
  // SEO
  { title: "コンテンツSEOとは何か：検索上位を取るための記事設計の基本", slug: "content-seo-basics", category: "seo", tags: ["SEO対策", "コンテンツSEO", "キーワード", "ライティング"] },
  { title: "テクニカルSEOの基礎：Core Web Vitalsとサイト構造の最適化", slug: "technical-seo-intro", category: "seo", tags: ["テクニカルSEO", "Core Web Vitals", "サイト速度", "構造化データ"] },
  { title: "内部リンク戦略：SEO効果を最大化するリンク設計の考え方", slug: "internal-link-strategy", category: "seo", tags: ["内部リンク", "SEO対策", "サイト設計"] },
  { title: "構造化データ（Schema.org）の実装でSEOと検索表示を強化する方法", slug: "schema-org-implementation", category: "seo", tags: ["構造化データ", "Schema.org", "JSON-LD", "SEO対策"] },
  { title: "タイトルタグとmeta descriptionの最適化：クリック率を上げる書き方", slug: "title-meta-optimization", category: "seo", tags: ["titleタグ", "meta description", "SEO対策", "CTR向上"] },
  { title: "E-E-A-T強化ガイド：Googleに評価される専門性・信頼性の示し方", slug: "eeat-guide", category: "seo", tags: ["E-E-A-T", "専門性", "信頼性", "SEO対策"] },
  { title: "ロングテールキーワードの見つけ方と活用法：SEO初心者が上位表示を狙う方法", slug: "long-tail-keyword-strategy", category: "seo", tags: ["キーワード戦略", "ロングテール", "SEO対策", "中小企業"] },
  { title: "被リンク（外部リンク）の増やし方：中小企業でも実践できるリンク獲得の方法", slug: "backlink-acquisition", category: "seo", tags: ["被リンク", "外部リンク", "ドメイン評価", "SEO対策"] },
  { title: "Googleサーチコンソールの使い方：SEO改善に役立てるデータの読み方", slug: "search-console-guide", category: "seo", tags: ["サーチコンソール", "SEO分析", "改善施策", "キーワード調査"] },
  { title: "ページ速度がSEOに与える影響：Lighthouseスコアを90点以上に改善する方法", slug: "page-speed-seo", category: "seo", tags: ["ページ速度", "Lighthouse", "Core Web Vitals", "SEO対策"] },
  { title: "ローカルSEOとMEOの違い：地域ビジネスが取り組むべき施策の整理", slug: "local-seo-vs-meo", category: "seo", tags: ["ローカルSEO", "MEO対策", "地域集客", "中小企業"] },
  { title: "SEOで問い合わせを増やすために：CV率と検索流入を両立するサイト設計", slug: "seo-conversion-design", category: "seo", tags: ["SEO対策", "CV率", "問い合わせ増加", "Webデザイン"] },
  // MEO
  { title: "Googleビジネスプロフィールの完全最適化ガイド：順位を上げるための全手順", slug: "gbp-optimization-complete", category: "meo", tags: ["GBP", "Googleビジネスプロフィール", "MEO対策", "マップ集客"] },
  { title: "口コミを増やす正しい方法：Googleマップ評価を高めるための施策", slug: "google-review-strategy", category: "meo", tags: ["口コミ対策", "Googleレビュー", "MEO対策", "集客"] },
  { title: "MEO対策の効果が出るまでの期間と改善サイクルの作り方", slug: "meo-timeline-pdca", category: "meo", tags: ["MEO対策", "順位改善", "PDCA", "期間"] },
  { title: "飲食店がGoogleマップで集客を増やすためのMEO施策まとめ", slug: "restaurant-meo-tactics", category: "meo", tags: ["飲食店", "MEO対策", "マップ集客", "飲食マーケティング"] },
  { title: "美容室・サロンのMEO対策：Googleマップからの予約を増やす方法", slug: "beauty-salon-meo", category: "meo", tags: ["美容室", "サロン", "MEO対策", "予約獲得"] },
  { title: "整骨院・整体院がMEOで新規患者を獲得する方法", slug: "osteopathic-meo", category: "meo", tags: ["整骨院", "整体院", "MEO対策", "患者獲得"] },
  { title: "Googleビジネスプロフィールの写真投稿がMEO順位に与える影響", slug: "gbp-photo-strategy", category: "meo", tags: ["GBP写真", "MEO対策", "写真投稿", "Googleマップ"] },
  { title: "NAP統一とは何か：MEO対策で住所・電話番号の一致が重要な理由", slug: "nap-consistency-meo", category: "meo", tags: ["NAP統一", "MEO対策", "サイテーション", "ローカルSEO"] },
  { title: "競合分析でMEO対策を強化する：上位表示店舗から学ぶ施策の見つけ方", slug: "meo-competitor-analysis", category: "meo", tags: ["競合分析", "MEO対策", "マップ順位", "改善施策"] },
  // AIO
  { title: "AIO対策（AI検索最適化）とは：ChatGPTやGeminiに引用されるためのWeb戦略", slug: "aio-overview", category: "aio", tags: ["AIO対策", "AI検索", "ChatGPT対策", "Gemini"] },
  { title: "llms.txtとは何か：AIに正確に情報を伝えるためのファイル設置方法", slug: "llms-txt-guide", category: "aio", tags: ["llms.txt", "AIO対策", "AI検索", "構造化データ"] },
  { title: "FAQコンテンツがAI検索に引用されやすい理由と最適なFAQ設計方法", slug: "faq-for-ai-search", category: "aio", tags: ["FAQ最適化", "AIO対策", "AI引用", "構造化データ"] },
  { title: "Perplexity・Claude・ChatGPTから引用されるサイトの共通点", slug: "ai-citation-factors", category: "aio", tags: ["AIO対策", "AI引用", "Perplexity", "ChatGPT"] },
  { title: "エンティティ最適化とは：Googleナレッジグラフに登録されるための方法", slug: "entity-optimization", category: "aio", tags: ["エンティティ最適化", "ナレッジグラフ", "AIO対策", "SEO対策"] },
  // Web制作
  { title: "中小企業のホームページ制作で失敗しないための5つのポイント", slug: "sme-website-tips", category: "web-design", tags: ["ホームページ制作", "中小企業", "Webデザイン", "注意点"] },
  { title: "LP（ランディングページ）制作で問い合わせを増やす設計の基本", slug: "landing-page-design", category: "web-design", tags: ["LP制作", "ランディングページ", "CV率向上", "Webデザイン"] },
  { title: "モバイルファーストとは：スマホ対応がSEOと集客に与える影響", slug: "mobile-first-web", category: "web-design", tags: ["モバイルファースト", "スマホ対応", "SEO対策", "ホームページ制作"] },
  { title: "コーポレートサイト制作のチェックリスト：公開前に確認すべき20項目", slug: "corporate-site-checklist", category: "web-design", tags: ["コーポレートサイト", "ホームページ制作", "チェックリスト", "Web制作"] },
  { title: "Next.jsでホームページを制作するメリットとWordPressとの比較", slug: "nextjs-vs-wordpress", category: "web-design", tags: ["Next.js", "WordPress", "ホームページ制作", "パフォーマンス"] },
  { title: "問い合わせフォームの最適化：入力のハードルを下げてCV率を上げる方法", slug: "contact-form-optimization", category: "web-design", tags: ["問い合わせフォーム", "CV率", "UX改善", "ホームページ制作"] },
  { title: "採用サイト制作で応募者を増やすための構成と設計のポイント", slug: "recruit-site-design", category: "web-design", tags: ["採用サイト", "採用マーケティング", "ホームページ制作", "人材採用"] },
  // SNS
  { title: "Instagram運用で集客につなげる方法：地域ビジネス向けの投稿戦略", slug: "instagram-local-business", category: "sns", tags: ["Instagram", "SNS運用", "地域集客", "コンテンツ戦略"] },
  { title: "LINE公式アカウントの活用法：顧客との関係づくりと来店促進", slug: "line-official-guide", category: "sns", tags: ["LINE公式", "SNS運用", "顧客管理", "リピーター"] },
  { title: "MEO対策とSNSを連動させる集客戦略：GBPとInstagramの相乗効果", slug: "meo-sns-synergy", category: "sns", tags: ["MEO対策", "Instagram", "SNS連動", "集客"] },
  // AI活用
  { title: "中小企業でもできるAI活用：業務効率化の具体的な始め方", slug: "ai-for-sme", category: "ai", tags: ["AI活用", "業務効率化", "中小企業", "DX"] },
  { title: "n8nとMakeを使ったマーケティング業務の自動化：具体的なワークフロー事例", slug: "n8n-make-automation", category: "ai", tags: ["n8n", "Make", "業務自動化", "マーケティング自動化"] },
  { title: "AIブログ自動生成の仕組みと注意点：品質を保ちながらコンテンツを増やす方法", slug: "ai-blog-automation", category: "ai", tags: ["AIブログ", "コンテンツ自動生成", "AI活用", "SEO対策"] },
];

// ─── ヘルパー ──────────────────────────────────────────────────────────────────

function getExistingSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, f), "utf-8");
      try {
        const { data } = matter(raw);
        return (data.slug as string) || f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      } catch {
        return f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      }
    });
}

function pickTopic(existingSlugs: string[]) {
  const available = TOPICS.filter((t) => !existingSlugs.includes(t.slug));

  if (available.length > 0) {
    // カテゴリをバランス良く選ぶ
    const categoryCount: Record<string, number> = {};
    for (const slug of existingSlugs) {
      const topic = TOPICS.find((t) => t.slug === slug);
      if (topic) {
        categoryCount[topic.category] = (categoryCount[topic.category] || 0) + 1;
      }
    }
    // 記事数が少ないカテゴリを優先
    available.sort((a, b) => {
      const countA = categoryCount[a.category] || 0;
      const countB = categoryCount[b.category] || 0;
      return countA - countB;
    });
    return available[0];
  }

  // 全トピック消化済み → ランダムに選んでslugにサフィックスを付ける
  const base = TOPICS[Math.floor(Math.random() * TOPICS.length)];
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return {
    ...base,
    slug: `${base.slug}-${date}`,
  };
}

function todayStr(): string {
  const now = new Date();
  // JST (UTC+9)
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

// ─── 記事生成 ─────────────────────────────────────────────────────────────────

async function generatePost(topic: (typeof TOPICS)[0]): Promise<string> {
  const client = new Anthropic();

  const systemPrompt = `あなたは${SITE.name}のWebマーケティング専門ブログの執筆者です。
${SITE.name}は${SITE.business}を提供する会社です。

記事執筆のルール:
- 日本語で書く
- 2,000〜3,500文字の専門記事にする
- SEO的に有益で具体的な内容にする
- 読者は中小企業の経営者・担当者
- 見出し（## ）を使って読みやすく構成する
- 具体的な施策・手順・チェックポイントを含める
- 「〜することで○倍になります」「必ず」「絶対」「No.1」「保証」など根拠のない表現は使わない
- AIが書いた感の強いテンプレート的な文章は避ける
- 締めには${SITE.name}への誘導を自然に入れる（押し売り感なく）
- Markdownの本文のみを出力し、frontmatterは出力しない
- コードブロックで囲まない（Markdownをそのまま出力）`;

  const userPrompt = `以下のテーマで専門記事を書いてください。

テーマ: ${topic.title}
カテゴリ: ${topic.category}
対象キーワード: ${topic.tags.join("・")}

記事の構成例:
1. 導入（テーマの重要性・読者のメリット）
2. 本論（3〜5つの章で具体的な内容）
3. まとめ・次のステップ

本文のみ出力してください（frontmatterは不要）。`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: userPrompt }],
    system: systemPrompt,
  });

  const content = message.content[0];
  if (content.type !== "text") throw new Error("Unexpected response type");

  return content.text.trim();
}

// ─── メイン ───────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY が設定されていません");
  }

  const existingSlugs = getExistingSlugs();
  console.log(`既存記事: ${existingSlugs.length}件`);

  const topic = pickTopic(existingSlugs);
  console.log(`生成トピック: ${topic.title} (${topic.slug})`);

  console.log("Claude API で記事を生成中...");
  const body = await generatePost(topic);
  console.log(`生成完了: ${body.length}文字`);

  const today = todayStr();
  const filename = `${today}-${topic.slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  // description: 本文の最初の段落から抽出
  const firstParagraph = body
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"))
    .slice(0, 1)
    .join("")
    .slice(0, 120);

  const frontmatter = matter.stringify(body, {
    title: topic.title,
    slug: topic.slug,
    description: firstParagraph,
    date: today,
    category: topic.category,
    tags: topic.tags,
  });

  fs.writeFileSync(filepath, frontmatter, "utf-8");
  console.log(`✓ 記事を保存しました: ${filepath}`);
}

main().catch((err) => {
  console.error("エラー:", err);
  process.exit(1);
});
