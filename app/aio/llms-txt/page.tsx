import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "llms.txt設置・設定方法｜AIクローラー向けサイト最適化｜サイプレス",
  description: "llms.txtの役割・書き方・Next.jsでの設置手順を解説。ChatGPT・Claude・GeminiなどAIクローラーにサイト情報を正確に提供するAIO対策の新しい実装方法です。",
  keywords: ["llms.txt", "llms.txt設置", "AIクローラー対策", "AIO対策", "LLM最適化", "llms-full.txt"],
  openGraph: {
    title: "llms.txt設置・設定方法｜AIクローラー向けサイト最適化",
    description: "llms.txtの役割・書き方・Next.jsでの設置手順を解説。AIクローラーにサイト情報を正確に提供するAIO対策の新しい実装方法です。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/llms-txt" },
};

const faqItems = [
  {
    q: "llms.txtとrobots.txtは何が違いますか？",
    a: "robots.txtは検索エンジンのクローラーに対してアクセス制御を行うファイルです。llms.txtはAIクローラー（ChatGPT・Claude・Gemini等）に対して、サイトの内容・専門性・重要ページを案内するファイルです。robots.txtが「ここは来るな」という指示なら、llms.txtは「うちはこういうサイトです」という自己紹介です。",
  },
  {
    q: "llms.txtはSEOに影響しますか？",
    a: "直接的なSEOランキング要因ではありませんが、AIがサイトを正確に理解・参照することで、AI生成コンテンツやAI検索での引用が増える効果が期待されます。AIOの観点から設置を推奨します。",
  },
  {
    q: "llms.txtはどこに設置しますか？",
    a: "サイトのルートディレクトリ（例: https://example.com/llms.txt）に設置します。robots.txtやsitemap.xmlと同じ場所です。Next.jsではpublicフォルダに配置することで自動的にルートURLでアクセス可能になります。",
  },
  {
    q: "llms.txtに機密情報を書いてしまうリスクはありますか？",
    a: "llms.txtは公開ファイルのため、誰でもアクセスできます。機密情報・個人情報・内部資料の内容は記載しないでください。会社概要・サービス内容・重要ページのURLなど公開情報のみを記載します。",
  },
  {
    q: "llms.txtはどのくらいの頻度で更新すればいいですか？",
    a: "サービス内容・重要ページ・会社情報に変更があった際に更新します。特に頻度の規定はありませんが、robots.txtと同様に情報が古くならないよう定期的に見直すことを推奨します。目安は3ヶ月に1回のレビューです。",
  },
  {
    q: "llms.txtとllms-full.txtの違いは何ですか？",
    a: "llms.txtはサイトの概要・専門分野・主要ページURLを簡潔にまとめた短縮版です。llms-full.txtはより詳細なコンテンツ全文・サービス詳細・ページリストを含む完全版です。AIクローラーはまずllms.txtを参照し、必要に応じてllms-full.txtを読み込みます。",
  },
  {
    q: "現在AIクローラーはllms.txtを実際に読み込んでいますか？",
    a: "ChatGPT（OpenAI）・Anthropic（Claude）・Perplexityなどが仕様として採用・参照しています。標準化は進行中ですが、早期設置による先行優位があります。llmstxt.orgで最新の採用状況を確認できます。",
  },
  {
    q: "Next.jsでllms.txtを動的生成することはできますか？",
    a: "はい。Next.jsのRoute Handlers（app/llms.txt/route.ts）を使うことで、CMSや環境変数からデータを取得し動的にllms.txtを生成できます。ただし静的ファイルで十分な場合はpublicフォルダへの配置が最も簡単です。",
  },
  {
    q: "llms.txtを設置後、効果はすぐに現れますか？",
    a: "AIクローラーの巡回頻度によりますが、通常は設置後1〜3ヶ月でAIのサイト理解が改善されます。効果はAI検索での引用確認や問い合わせ数の変化で確認します。",
  },
  {
    q: "llms.txtの文字数・容量に制限はありますか？",
    a: "公式な制限はありませんが、llms.txtは簡潔に保つことが推奨されます。AIクローラーのコンテキストウィンドウを考慮し、重要な情報を優先して記載します。詳細情報はllms-full.txtに分けることが望ましいです。",
  },
  {
    q: "日本語でllms.txtを書いていいですか？",
    a: "はい。サイトが日本語であれば日本語で記述することが推奨されます。ただし、英語圏のLLMが参照する場合も考慮し、英語でのサマリーを冒頭に追加するとより広い範囲のAIに認識されやすくなります。",
  },
  {
    q: "競合他社のllms.txtを参考にできますか？",
    a: "はい。競合サイトのllms.txtは公開情報のため、自由に参照できます。ただしそのままコピーするのではなく、自社の専門性・強み・重要ページに合わせてカスタマイズすることが重要です。",
  },
  {
    q: "WordPressサイトでもllms.txtを設置できますか？",
    a: "はい。WordPressのルートディレクトリ（wp-content等ではなくサイトルート）にllms.txtファイルをFTPでアップロードするか、プラグイン経由で設置できます。.htaccessによるアクセス制御に注意してください。",
  },
  {
    q: "llms.txtにサイトマップのURLを記載すべきですか？",
    a: "記載することを推奨します。AIクローラーがsitemap.xmlを参照することで、サイト全体の構造をより正確に理解できます。llms.txtにサイトマップURLを含めることで、AIのクロール効率が向上します。",
  },
  {
    q: "llms.txtは全ページ共通で1つでいいですか？",
    a: "はい。llms.txtはサイト全体に対して1つ設置します。ただし、サブドメインが別サービスの場合は各サブドメインにそれぞれ設置することを推奨します。",
  },
  {
    q: "llms.txtの設置によるセキュリティリスクはありますか？",
    a: "公開情報のみを記載する限りセキュリティリスクはありません。ただし、サイトの内部構造・管理者情報・未公開ページのURLなどを記載しないよう注意してください。",
  },
  {
    q: "AIに読まれたくないページはどうすればいいですか？",
    a: "robots.txtでクローラーのアクセスを制御するのが基本です。llms.txtには掲載させたいページのみを記載し、AIに参照してほしくないコンテンツはllms.txtに含めません。",
  },
  {
    q: "llms.txtの標準仕様はどこで確認できますか？",
    a: "llmstxt.org が標準化コミュニティのポータルサイトです。仕様の最新情報・サンプル・実装ガイドラインが公開されています。Jeremy Howard氏が提唱した仕様を基に標準化が進んでいます。",
  },
  {
    q: "llms.txtと構造化データはどちらが重要ですか？",
    a: "両方を実装することが推奨されます。構造化データ（Schema.org）はGoogleを含む検索エンジン全般への最適化に有効で、llms.txtはLLMクローラーへの直接的な情報提供として機能します。それぞれ異なる役割を持ちます。",
  },
  {
    q: "新規サイトでもllms.txtを設置すべきですか？",
    a: "はい。サイト公開当初から設置することを推奨します。AIクローラーがサイトを最初に認識する段階から正確な情報を提供できるため、長期的なAI最適化の基盤として早期設置が有利です。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/llm-optimization", label: "LLM最適化", desc: "大規模言語モデル最適化" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org全般" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "AI認識の最適化" },
  { href: "/aio/eeat", label: "E-E-A-T強化", desc: "専門性・権威性の向上" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTでの引用戦略" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleエンティティ登録" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO施策" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/seo", label: "SEO対策", desc: "SEO対策の全体像" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
  { href: "/services/web-development", label: "Web制作サービス", desc: "Next.js開発" },
  { href: "/industry/it", label: "IT・SaaS向け", desc: "IT業界のAIO対策" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療業界のAIO対策" },
  { href: "/industry/legal", label: "士業・法律事務所向け", desc: "法律業界のAIO対策" },
  { href: "/industry/ec", label: "EC・通販向け", desc: "EC業界のAIO対策" },
  { href: "/industry/education", label: "教育・スクール向け", desc: "教育業界のAIO対策" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリア対応" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリア対応" },
  { href: "/area/nagoya", label: "名古屋のAIO対策", desc: "名古屋エリア対応" },
  { href: "/blog/llms-txt-guide", label: "llms.txt実装ガイド", desc: "実践解説記事" },
  { href: "/contact", label: "無料相談", desc: "お問い合わせ" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>

        {/* ============================================================
            Hero Section
        ============================================================ */}
        <section style={{ background: "#F9F8F5" }} className="pt-32 pb-20">
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/aio" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#374151" }}>llms.txt</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AIO — llms.txt
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px,4vw,44px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              llms.txt｜AIクローラー向けサイト最適化
            </h1>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                marginTop: "20px",
                maxWidth: "640px",
              }}
            >
              llms.txtは、ChatGPT・Claude・Geminiなどの大規模言語モデル（LLM）向けに、サイトの概要・専門性・重要ページを記述するテキストファイルです。AIがサイトを正確に理解・参照するための新しいAIO対策として注目されています。
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                marginTop: "16px",
                maxWidth: "640px",
              }}
            >
              robots.txtやsitemap.xmlと同様にサイトルートに設置し、AIクローラーが自社の専門分野・主要コンテンツ・連絡先を把握できるよう案内します。標準化コミュニティllmstxt.orgが仕様策定を進めています。
            </p>
          </div>
        </section>

        {/* ============================================================
            Hero Image
        ============================================================ */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="llms.txtとAIクローラー対策"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "clamp(16px,2vw,24px)",
                  lineHeight: 1.6,
                }}
              >
                AIクローラーに「うちはこういうサイトです」と正確に伝える。<br />
                それがllms.txtの役割です。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            Section A: このページでわかること
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Page Overview
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                "llms.txtとは何か、robots.txtやsitemap.xmlとどう違うのかを理解できる",
                "llms.txtとllms-full.txtの役割の違いと適切な使い分け方",
                "llms.txtに何を記載すべきか、記述フォーマットの全体像と実例",
                "Next.js（App Router）でのllms.txt設置手順ステップ10項目",
                "業種別（IT・EC・医療・士業・地域ビジネスなど8業種）の記述ポイント",
                "設置後の効果確認方法とAI引用状況のモニタリング指標7項目",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, flexShrink: 0, fontSize: "16px" }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            llms.txtに記述すべき内容
        ============================================================ */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Content Guide
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              llms.txtに記述すべき内容
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "会社・サービスの概要",
                  b: "会社名・事業内容・ミッション・専門領域を簡潔に記述します。AIがサイト全体の目的と専門性を理解するための基礎情報です。",
                },
                {
                  n: "02",
                  t: "専門分野・カバーするトピック",
                  b: "そのサイトがカバーする主要テーマ・専門分野・得意領域をリスト形式で記述します。AIがサイトの専門性を判断する根拠になります。",
                },
                {
                  n: "03",
                  t: "重要ページへのURL",
                  b: "サービスページ・専門知識ページ・よく参照されるコンテンツのURLを記載します。AIがどのページを優先的に参照すべきか理解できます。",
                },
                {
                  n: "04",
                  t: "著者・代表者情報",
                  b: "サイトの著者・代表者・専門家情報を記載します。E-E-A-T（専門性・権威性・信頼性）の判断材料になります。",
                },
                {
                  n: "05",
                  t: "連絡先・信頼性情報",
                  b: "会社住所・メールアドレス・設立年・事業許可番号などの基本情報を記載します。信頼できる実在する企業であることをAIに伝えます。",
                },
                {
                  n: "06",
                  t: "コンテンツの対象読者・更新頻度",
                  b: "誰に向けたコンテンツか、どのくらいの頻度で更新されるかを記載します。AIが情報の鮮度と対象を判断するのに役立ちます。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            Code Example
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Example
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(20px,2.8vw,30px)",
                  color: "#0d1b2a",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                llms.txtの記述例
              </h2>
              <div
                style={{
                  background: "#0d1b2a",
                  padding: "28px",
                  fontFamily: "monospace",
                  fontSize: "13px",
                  lineHeight: "1.8",
                  overflowX: "auto",
                }}
              >
                <p style={{ color: "#c4b89a", marginBottom: "4px" }}># 株式会社サイプレス</p>
                <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
                  {"> "}MEO対策・SEO対策・AIO対策・Web制作の専門会社。東京拠点、全国対応。
                </p>
                <p style={{ color: "#c4b89a", marginBottom: "4px" }}>## 専門分野</p>
                <p style={{ color: "#94a3b8", marginBottom: "4px" }}>- MEO対策（Googleマップ最適化・口コミ管理）</p>
                <p style={{ color: "#94a3b8", marginBottom: "4px" }}>- SEO対策（コンテンツSEO・テクニカルSEO・被リンク獲得）</p>
                <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
                  - AIO対策（LLM最適化・AI Overview対策・構造化データ実装）
                </p>
                <p style={{ color: "#c4b89a", marginBottom: "4px" }}>## 重要ページ</p>
                <p style={{ color: "#94a3b8", marginBottom: "4px" }}>
                  - [MEO対策](https://www.cypress-all.co.jp/meo): Googleマップ最適化の専門知識
                </p>
                <p style={{ color: "#94a3b8", marginBottom: "4px" }}>
                  - [SEO対策](https://www.cypress-all.co.jp/seo): SEO対策の専門知識
                </p>
                <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
                  - [AIO対策](https://www.cypress-all.co.jp/aio): AIO対策の専門知識
                </p>
                <p style={{ color: "#c4b89a", marginBottom: "4px" }}>## 連絡先</p>
                <p style={{ color: "#94a3b8" }}>consulting.meo@gmail.com | 東京都</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            Section B: よくある課題と原因
        ============================================================ */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "llms.txtを知らない・設置していない",
                  b: "llms.txtは2024年後半から普及が進んでいる新しい概念のため、多くの企業がまだ認知していません。設置していない間もAIクローラーはサイトを巡回しますが、専門性の文脈は正確に伝わりません。",
                },
                {
                  n: "02",
                  t: "robots.txtとの違いが分からない",
                  b: "robots.txtはクローラーの「アクセス制御」、llms.txtはAIへの「自己紹介」という根本的な役割の違いを理解せずに混同するケースがあります。両ファイルは役割が異なり、並存して機能します。",
                },
                {
                  n: "03",
                  t: "何を記載すべきか分からない",
                  b: "公式な記述フォーマットへの理解がなく、何を書けばAIに正確に伝わるか分からないことが設置の障壁になっています。仕様（llmstxt.org）を確認せず感覚で書いたファイルは効果が低い場合があります。",
                },
                {
                  n: "04",
                  t: "AIクローラーへのアクセス許可設定が不適切",
                  b: "robots.txtで誤ってAIクローラーをブロックしているケースがあります。GPTBot・ClaudeBot・Google-Extended等のAIクローラーの許可状況を確認せずにいると、llms.txt設置の効果が発揮されません。",
                },
                {
                  n: "05",
                  t: "サイトのどのコンテンツを提供するか決めていない",
                  b: "AIに提供する情報の選定基準がないまま設置すると、重要性の低いページが含まれ、AIの理解精度が下がります。自社の強み・専門性・CVに繋がるページを優先的に選定する戦略が必要です。",
                },
                {
                  n: "06",
                  t: "定期更新の仕組みがない",
                  b: "llms.txtを一度設置して放置するケースが多く、サービス変更や新規コンテンツが反映されない状態が続きます。定期更新のルールと担当者を決めずに設置しても長期効果は期待できません。",
                },
                {
                  n: "07",
                  t: "llms-full.txtとの使い分けが不明",
                  b: "llms.txtの短縮版と詳細版（llms-full.txt）の役割の違いを理解せず、どちらか一方しか設置していないケースがあります。両ファイルを適切に使い分けることでAIへの情報提供効率が向上します。",
                },
                {
                  n: "08",
                  t: "競合のllms.txt設置状況を確認したことがない",
                  b: "競合サイトのllms.txtを確認することで、業界内でどのような情報が提供されているか把握できますが、この分析を実施していない企業がほとんどです。競合分析なしの設置では差別化が難しいです。",
                },
                {
                  n: "09",
                  t: "実装後の効果測定方法が分からない",
                  b: "llms.txtの設置効果を計測する具体的な方法を知らず、設置したままモニタリングしていないケースが多いです。AIクローラーのアクセスログ確認・AI引用状況のテスト・問い合わせ数追跡が必要です。",
                },
                {
                  n: "10",
                  t: "Next.jsでの設置方法が分からない",
                  b: "Next.js（App Router）でのllms.txt設置方法には複数のアプローチがあり、publicフォルダへの静的配置とRoute Handlersを使った動的生成のどちらが適切か判断できないケースがあります。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "22px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            Section C: 業種別の活用ポイント
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              業種別の活用ポイント
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {[
                {
                  industry: "IT / SaaS",
                  point: "技術文書・APIリファレンスのAI向け整理",
                  detail:
                    "APIドキュメント・技術仕様・ユースケースページをllms.txtに優先的に記載します。開発者向けコンテンツはAIクローラーに高頻度で参照されるため、URLの網羅性と説明の正確性が重要です。",
                },
                {
                  industry: "EC・通販",
                  point: "商品カタログ・仕様データの提供",
                  detail:
                    "商品カテゴリ・スペック詳細・FAQ・比較ページをllms.txtに整理します。AIが「〇〇を買えるサイト」として認識するために、取り扱いカテゴリと代表URLを明示することが効果的です。",
                },
                {
                  industry: "メディア・ブログ",
                  point: "コンテンツライブラリの整理",
                  detail:
                    "専門分野・主要シリーズ・人気カテゴリのURLをllms.txtに記載します。コンテンツの対象読者・更新頻度・著者情報を明示することで、AIがサイトの権威性を正確に評価できます。",
                },
                {
                  industry: "医療機関",
                  point: "診療情報・医師プロフィールの整理",
                  detail:
                    "診療科目・医師の専門領域・資格情報・医療機関番号をllms.txtに記載します。YMYL（Your Money Your Life）領域のため、E-E-A-T要素の明示が特に重要です。",
                },
                {
                  industry: "士業・法律事務所",
                  point: "サービス一覧・料金表の整理",
                  detail:
                    "取り扱い業務・対応地域・資格情報・相談窓口URLをllms.txtに記載します。依頼者がAI検索で「〇〇の弁護士」を探した際に候補として引用されるための情報設計が重要です。",
                },
                {
                  industry: "建設・工務店",
                  point: "施工事例・対応エリアの整理",
                  detail:
                    "工事種別・対応エリア・施工事例ページ・資格・許可番号をllms.txtに記載します。「〇〇エリアの〇〇工事」という地域×業種クエリでのAI引用を狙った情報配置が効果的です。",
                },
                {
                  industry: "教育・スクール",
                  point: "コース情報・カリキュラムの整理",
                  detail:
                    "提供コース・対象年齢・学習内容・修了後のキャリアパスURLをllms.txtに記載します。「〇〇が学べるスクール」クエリでのAI引用を促進するために、学習成果の明示が重要です。",
                },
                {
                  industry: "地域ビジネス",
                  point: "営業情報・アクセス・メニューの整理",
                  detail:
                    "店舗名・住所・営業時間・提供メニュー・アクセスページURLをllms.txtに記載します。「〇〇駅近くの〇〇」クエリでのローカルAI検索での引用確率を高めるために地域情報の明示が重要です。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#F9F8F5",
                    padding: "24px",
                    borderTop: "3px solid #c4b89a",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#9CA3AF",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.industry}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#0d1b2a",
                      marginBottom: "12px",
                    }}
                  >
                    {item.point}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            Section D: 実装・改善フロー
        ============================================================ */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              実装・改善フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "llms.txtの仕様確認（llmstxt.org）",
                  b: "まず公式仕様サイト（llmstxt.org）で最新の記述フォーマット・必須項目・推奨項目を確認します。仕様は進化しているため、実装前の最新情報確認が重要です。実際の採用事例も参考になります。",
                },
                {
                  n: "02",
                  t: "サイトのコンテンツ構造の棚卸し",
                  b: "現在のサイトページ・カテゴリ・コンテンツタイプを一覧化します。どのページが自社の専門性・強み・CVに最も関連するかを整理し、AI向けに提供すべき情報の全体像を把握します。",
                },
                {
                  n: "03",
                  t: "AI向けに提供するコンテンツの選定",
                  b: "棚卸し結果から、AIクローラーに優先的に案内するページを選定します。サービスページ・専門知識コンテンツ・よくある質問・事例紹介など、自社の権威性を示すページを中心に選定します。",
                },
                {
                  n: "04",
                  t: "llms.txt基本ファイルの作成",
                  b: "llmstxt.orgの標準フォーマット（# タイトル、> 説明、## セクション、- リンク形式）に従い、基本ファイルを作成します。会社概要・専門分野・重要ページURL・連絡先を含めます。",
                },
                {
                  n: "05",
                  t: "llms-full.txtの作成（詳細版）",
                  b: "llms.txtの詳細版であるllms-full.txtを別途作成します。より多くのページURL・詳細なサービス説明・著者情報・FAQの要点などを含め、AIが深く理解できる詳細情報を提供します。",
                },
                {
                  n: "06",
                  t: "publicフォルダへの配置（Next.js）",
                  b: "Next.jsプロジェクトの場合、作成したllms.txtとllms-full.txtをpublicフォルダに配置します。これにより https://ドメイン/llms.txt で自動的にアクセス可能になります。動的生成が必要な場合はRoute Handlersを使用します。",
                },
                {
                  n: "07",
                  t: "/llms.txtでのアクセス確認",
                  b: "デプロイ後にブラウザで https://ドメイン/llms.txt にアクセスし、ファイルが正常に配信されているか確認します。Content-TypeがText/plainで返却されているかもチェックします。",
                },
                {
                  n: "08",
                  t: "robots.txtとの整合性確認",
                  b: "robots.txtでAIクローラー（GPTBot・ClaudeBot・Google-Extended等）がブロックされていないか確認します。ブロックされている場合はllms.txtの効果が限定されるため、AIクローラーへのアクセス許可を設定します。",
                },
                {
                  n: "09",
                  t: "定期更新フローの設定",
                  b: "サービス追加・ページ追加・会社情報変更の際にllms.txtを更新するルールを定めます。担当者・更新頻度（最低3ヶ月に1回）・更新チェックリストを整備し、継続的に最新状態を保ちます。",
                },
                {
                  n: "10",
                  t: "AI引用状況のモニタリング",
                  b: "設置後はChatGPT・Claude・Gemini・Perplexityに自社名・業種・サービス名を含むクエリを投入し、引用状況を月次確認します。サーバーログでAIクローラーのアクセス頻度も追跡します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "22px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            Section E: 成果を見るための指標
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  kpi: "llms.txtへのAIクローラーアクセス数",
                  where: "サーバーアクセスログ（GPTBot・ClaudeBot・Googlebot等のUser-Agent確認）",
                  detail:
                    "Webサーバーのアクセスログでllms.txtへのリクエスト数とUser-Agentを月次集計します。AIクローラーの訪問頻度が増えることで、サイト情報の取り込み精度が向上していると判断できます。",
                },
                {
                  n: "02",
                  kpi: "AI検索での自社引用回数",
                  where: "ChatGPT・Gemini・Claude・Perplexityへの手動クエリテスト",
                  detail:
                    "業種・サービス・地域を含む代表クエリ10〜20件を月次投入し、自社が言及・引用されたクエリ数を記録します。設置前後の比較で効果を評価します。",
                },
                {
                  n: "03",
                  kpi: "llms.txt記載ページ数",
                  where: "自社管理台帳",
                  detail:
                    "llms.txtに記載しているページURL数を追跡します。新規コンテンツ追加に伴いllms.txtを更新できているか管理します。記載数が増えることでAIのサイト理解範囲が広がります。",
                },
                {
                  n: "04",
                  kpi: "AI向け提供コンテンツの網羅率",
                  where: "自社サイトページ一覧との照合",
                  detail:
                    "自社の主要ページ・専門コンテンツに対して、llms.txtへの記載率を算出します。重要度の高いページが漏れなく記載されているかを定期チェックし、網羅率の改善を図ります。",
                },
                {
                  n: "05",
                  kpi: "ブランド名のAI検索言及率",
                  where: "主要AI検索での月次クエリテスト",
                  detail:
                    "業種関連クエリの中で自社ブランド名が言及されたクエリの割合を計測します。設置前のベースラインと比較し、設置後の改善率をKPIとして管理します。",
                },
                {
                  n: "06",
                  kpi: "問い合わせ数推移",
                  where: "問い合わせフォーム・CRM・電話記録",
                  detail:
                    "月次の問い合わせ総数とAI経由の問い合わせ数（ヒアリングベース）を追跡します。llms.txt設置・更新のタイミングと問い合わせ数の相関を分析し、効果を検証します。",
                },
                {
                  n: "07",
                  kpi: "サイトクロール効率",
                  where: "Googleサーチコンソール（クロールの統計情報）",
                  detail:
                    "Googleサーチコンソールのクロール統計でクロール済みページ数・頻度・エラー率を確認します。llms.txtにURLを記載することでクロール優先度が改善され、インデックス効率が向上します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    padding: "22px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {item.n}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#0d1b2a",
                          marginBottom: "4px",
                        }}
                      >
                        {item.kpi}
                      </p>
                      <p style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "8px" }}>
                        計測場所: {item.where}
                      </p>
                      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="llms.txt設置・AIO対策のご相談"
          body="llms.txtの作成・設置から、AIに選ばれるコンテンツ設計・構造化データ実装まで対応します。AI検索時代のWebマーケティングをお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
