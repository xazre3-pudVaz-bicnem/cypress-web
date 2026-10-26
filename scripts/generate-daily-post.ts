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
// 同じテーマの重複としてまとめた記事の退避先（next.config.ts が元の記事へ転送する）。新しい記事の重複チェックにも使う
const ARCHIVE_DIR = path.join(process.cwd(), "content/blog-archive");

// 記事本文・新しいテーマ・説明文の生成に使うモデル
const MODEL = "claude-sonnet-4-6";
const CATEGORIES = ["seo", "meo", "aio", "web-design", "sns", "ai"];

const SITE = {
  name: "株式会社サイプレス",
  url: "https://www.cypress-all.co.jp",
  keywords: "ホームページ制作 SEO MEO AIO",
  area: "全国",
  business: "ホームページ制作・SEO対策・MEO対策・AIO対策",
};

// ─── トピックプール ────────────────────────────────────────────────────────────

interface Topic {
  title: string;
  slug: string;
  category: string;
  tags: string[];
}

const TOPICS: Topic[] = [
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

interface ExistingPost {
  slug: string;
  title: string;
  category: string;
}

/** 公開中の記事と、重複としてまとめた記事（退避先）の slug・タイトル・カテゴリ */
function getExistingPosts(): ExistingPost[] {
  const posts: ExistingPost[] = [];
  for (const dir of [POSTS_DIR, ARCHIVE_DIR]) {
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
      const fallbackSlug = f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      try {
        const { data } = matter(fs.readFileSync(path.join(dir, f), "utf-8"));
        posts.push({
          slug: (data.slug as string) || fallbackSlug,
          title: (data.title as string) || "",
          category: (data.category as string) || "",
        });
      } catch {
        posts.push({ slug: fallbackSlug, title: "", category: "" });
      }
    }
  }
  return posts;
}

/** タイトルの近さ（文字の 2-gram の Jaccard 係数、0〜1）。言い回しだけ違う同じテーマを見分けるのに使う */
function titleSimilarity(a: string, b: string): number {
  const grams = (s: string) => {
    const t = s.replace(/[\s「」『』（）()【】：:・、。！？!?]/g, "").toLowerCase();
    const set = new Set<string>();
    for (let i = 0; i < t.length - 1; i++) set.add(t.slice(i, i + 2));
    return set;
  };
  const ga = grams(a);
  const gb = grams(b);
  if (ga.size === 0 || gb.size === 0) return 0;
  let common = 0;
  for (const g of ga) if (gb.has(g)) common++;
  return common / (ga.size + gb.size - common);
}

async function pickTopic(client: Anthropic, existing: ExistingPost[]): Promise<Topic> {
  const usedSlugs = new Set(existing.map((p) => p.slug));
  const available = TOPICS.filter((t) => !usedSlugs.has(t.slug));

  if (available.length > 0) {
    // カテゴリをバランス良く選ぶ（記事数が少ないカテゴリを優先）
    const categoryCount: Record<string, number> = {};
    for (const p of existing) categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
    available.sort((a, b) => (categoryCount[a.category] || 0) - (categoryCount[b.category] || 0));
    return available[0];
  }

  // 用意したテーマを使い切ったら、既存記事と重ならない新しいテーマを考えてもらう。
  // （以前は同じテーマを日付付きの slug で繰り返していたが、同じタイトルの記事が並ぶと
  //   重複コンテンツとして評価を下げるため廃止した）
  return proposeNewTopic(client, existing);
}

const TOPIC_SCHEMA = {
  type: "object",
  properties: {
    title: { type: "string", description: "記事タイトル（日本語・28〜40文字。検索されやすい具体的なキーワードを前半に置く）" },
    slug: { type: "string", description: "URL 用の slug（英小文字・数字・ハイフンのみ、2〜6語）" },
    category: { type: "string", enum: CATEGORIES },
    tags: { type: "array", items: { type: "string" }, description: "関連キーワードを3〜5個" },
  },
  required: ["title", "slug", "category", "tags"],
  additionalProperties: false,
};

/** 既存記事のどれとも重ならない新しいテーマを提案させる。重なる案は理由を伝えて出し直させる */
async function proposeNewTopic(client: Anthropic, existing: ExistingPost[]): Promise<Topic> {
  const titles = [...new Set(existing.map((p) => p.title).filter(Boolean))];
  const usedSlugs = new Set(existing.map((p) => p.slug));
  const rejected: string[] = [];

  for (let attempt = 1; attempt <= 3; attempt++) {
    const message = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      system: `あなたは${SITE.name}（${SITE.business}を提供する会社）のWebマーケティング専門ブログの編集者です。読者は地域の中小企業の経営者・担当者です。`,
      messages: [
        {
          role: "user",
          content: `次の既存記事のどれとも検索意図が重ならない、新しい記事テーマを1つ提案してください。
- 既存記事の言い換えや、同じテーマの別の切り口は不可
- 中小企業が実際に検索しそうな、具体的で絞り込まれたテーマにする（業種・地域・具体的な作業や悩みなど）
- カテゴリは seo / meo / aio / web-design / sns / ai のいずれか

既存記事のタイトル:
${titles.map((t) => `- ${t}`).join("\n")}${
            rejected.length > 0 ? `\n\n次の案は既存記事と重なるため使えません:\n${rejected.map((r) => `- ${r}`).join("\n")}` : ""
          }`,
        },
      ],
      output_config: { format: { type: "json_schema", schema: TOPIC_SCHEMA } },
    });

    const block = message.content.find((b) => b.type === "text");
    if (message.stop_reason !== "end_turn" || !block || block.type !== "text") {
      throw new Error(`テーマの提案を受け取れませんでした（stop_reason: ${message.stop_reason}）`);
    }
    const topic = JSON.parse(block.text) as Topic;
    const slug = topic.slug.trim().toLowerCase();

    const problems: string[] = [];
    if (!/^[a-z0-9]+(?:-[a-z0-9]+){1,7}$/.test(slug)) problems.push("slug の形式が不正");
    if (usedSlugs.has(slug)) problems.push("slug が既存記事と同じ");
    for (const t of titles) {
      // 既存記事どうしの近さは最大でも 0.33。それを超えるほど近い案は、言い換えた同じテーマとして見送る
      if (titleSimilarity(topic.title, t) >= 0.35) {
        problems.push(`既存記事「${t}」と重なる`);
        break;
      }
    }
    if (problems.length === 0) return { ...topic, slug };

    rejected.push(`${topic.title}（${problems.join("・")}）`);
    console.log(`テーマ案を見送り (${attempt}/3): ${topic.title} — ${problems.join("、")}`);
  }

  throw new Error("既存記事と重ならない新しいテーマを決められませんでした（重複記事を作らないよう、今日は投稿しません）");
}

const DESCRIPTION_SCHEMA = {
  type: "object",
  properties: { description: { type: "string" } },
  required: ["description"],
  additionalProperties: false,
};

/** 検索結果に出る説明文（meta description）。本文の要点を 80〜120 文字で書かせる */
async function generateDescription(client: Anthropic, topic: Topic, body: string): Promise<string> {
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `次のブログ記事の、検索結果に表示する説明文（meta description）を書いてください。
- 日本語で80〜120文字、1〜2文
- 記事を読むと分かることを具体的に書く（「この記事では」で始めない）
- キーワード「${topic.tags.slice(0, 2).join("」「")}」を自然に含める
- 「必ず」「絶対」「No.1」など誇張した表現は使わない

タイトル: ${topic.title}

本文:
${body}`,
      },
    ],
    output_config: { format: { type: "json_schema", schema: DESCRIPTION_SCHEMA } },
  });

  const block = message.content.find((b) => b.type === "text");
  if (message.stop_reason === "end_turn" && block && block.type === "text") {
    const description = (JSON.parse(block.text) as { description: string }).description.trim();
    if (description.length >= 50 && description.length <= 140) return description;
  }
  return fallbackDescription(body);
}

/** 説明文を生成できなかったときの代わり: 最初の段落を文の区切りで切る（途中で切れた文を残さない） */
function fallbackDescription(body: string): string {
  const paragraph = body.split("\n").find((line) => line.trim() && !line.startsWith("#"))?.trim() ?? "";
  if (paragraph.length <= 120) return paragraph;
  const cut = paragraph.slice(0, 120);
  const end = Math.max(cut.lastIndexOf("。"), cut.lastIndexOf("！"), cut.lastIndexOf("？"));
  return end >= 40 ? cut.slice(0, end + 1) : `${cut}…`;
}

function todayStr(): string {
  const now = new Date();
  // JST (UTC+9)
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

// ─── 記事生成 ─────────────────────────────────────────────────────────────────

async function generatePost(client: Anthropic, topic: Topic): Promise<string> {
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
- 出力全体をコードブロックで囲まない（Markdownをそのまま出力）。ただし本文中でファイルの記述例やコード例を示すときは、その部分だけコードブロック（\`\`\`）で囲む（例の中の「#」の行が記事の見出しとして表示されないように）`;

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
    model: MODEL,
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

  const client = new Anthropic();
  const existing = getExistingPosts();
  console.log(`既存記事: ${existing.length}件（重複としてまとめた記事を含む）`);

  const topic = await pickTopic(client, existing);
  console.log(`生成トピック: ${topic.title} (${topic.slug})`);

  console.log("Claude API で記事を生成中...");
  const body = await generatePost(client, topic);
  console.log(`生成完了: ${body.length}文字`);

  const description = await generateDescription(client, topic, body);
  console.log(`説明文: ${description}`);

  const today = todayStr();
  const filename = `${today}-${topic.slug}.md`;
  const filepath = path.join(POSTS_DIR, filename);

  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }

  const frontmatter = matter.stringify(body, {
    title: topic.title,
    slug: topic.slug,
    description,
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
