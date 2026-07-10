import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AEO（回答エンジン最適化）｜AI検索で選ばれるコンテンツへ｜株式会社サイプレス",
  description: "AEO（Answer Engine Optimization）とは、AIが生成する回答に最適化する戦略。FAQ・結論ファースト・構造化データでAI検索からの引用を増やす方法を解説。ChatGPT・Google AI Overview・Perplexity対応。",
  keywords: ["AEO対策", "回答エンジン最適化", "Answer Engine Optimization", "AI検索最適化", "FAQスキーマ", "AIO対策", "ChatGPT引用"],
  openGraph: {
    title: "AEO（回答エンジン最適化）｜AI検索で選ばれるコンテンツへ｜株式会社サイプレス",
    description: "AEO（Answer Engine Optimization）とは、AIが生成する回答に最適化する戦略。FAQ・結論ファースト・構造化データでAI検索からの引用を増やす方法を解説。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/answer-engine-optimization" },
};

const faqItems = [
  {
    q: "SEOとAEOはどちらが重要ですか？",
    a: "どちらも重要で、多くの場合に相互補完します。SEOは検索エンジンのランキング最適化、AEOはAIが生成する回答への最適化です。良質なコンテンツ・構造化データ・E-E-A-Tはどちらにも有効です。",
  },
  {
    q: "AEOで対策すべきAI検索サービスはどれですか？",
    a: "Google AI Overview・ChatGPT（SearchGPT）・Perplexity AI・Gemini・Claudeが主要なAI検索サービスです。基本的なAEO対策はこれら全てに有効です。",
  },
  {
    q: "AEOに対応したコンテンツはSEOにも有効ですか？",
    a: "はい。結論ファースト・見出し構造・FAQ形式・E-E-A-Tはすべての検索エンジンとAIが評価します。AEOはSEOの拡張版ともいえます。",
  },
  {
    q: "AEO対策で短い回答と詳しい解説はどちらが大事ですか？",
    a: "「最初の段落で簡潔な回答→その後に詳しい解説」の構成が最も効果的です。AIは冒頭の簡潔な回答を引用することが多く、詳細な内容はより深く知りたいユーザーのためになります。",
  },
  {
    q: "AEO対策を始めるにはどこから着手すべきですか？",
    a: "既存コンテンツへのFAQセクション追加・FAQPageスキーマの実装・見出し構造の整理が最初のステップです。新規コンテンツは最初からAEOを意識した構成で作成します。",
  },
  {
    q: "FAQPageスキーマとHowToスキーマはどう使い分けますか？",
    a: "FAQPageスキーマは質問と回答のペアを持つページに使います。HowToスキーマは手順を示す「○○のやり方」「○○の手順」といったコンテンツに適しています。どちらもAIが引用しやすい構造化データですが、コンテンツの性質に合わせて選択してください。",
  },
  {
    q: "AEO対策の効果はいつ頃から現れますか？",
    a: "コンテンツのインデックス後、早ければ2〜4週間でAI検索での引用が確認されることがあります。ただし安定した引用率の向上には3〜6ヶ月の継続対策が必要です。スキーマ実装や見出し構造の改善は比較的早く効果が出やすい施策です。",
  },
  {
    q: "どのくらいのFAQ数が必要ですか？",
    a: "業界・サービスの規模によりますが、最低20〜30問から始め、段階的に50〜100問以上を目指すことをお勧めします。量よりも各Q&Aの具体性と正確性が重要です。ユーザーが実際に検索する疑問文を起点に設計してください。",
  },
  {
    q: "AEO対策は中小企業でも効果がありますか？",
    a: "はい。むしろニッチな専門領域・地域特化分野では、大企業よりも中小企業がAEOで優位に立てるケースが多いです。特定の専門性・地域・業種に絞った深い回答コンテンツを作ることで、その分野の「信頼できる情報源」としてAIに認識されます。",
  },
  {
    q: "コンテンツの更新頻度はどのくらい必要ですか？",
    a: "月に2〜4本の新規コンテンツ公開と、既存コンテンツの定期的なリライトが理想的です。AIは最新情報を重視するため、更新日の明示と内容の鮮度維持が引用率に影響します。特に法改正・市場変化が多い業界では更新頻度を上げることが重要です。",
  },
  {
    q: "競合他社のAEO対策状況はどうやって調べますか？",
    a: "AI検索（ChatGPT・Perplexity等）で業界関連クエリを投げ、引用されているサイトを確認します。引用されているサイトの構造・FAQ数・スキーマ実装状況を分析することで、自社に必要な対策の優先度が把握できます。",
  },
  {
    q: "AEO対策でE-E-A-Tはどう高めますか？",
    a: "経験（実績・事例・ビフォーアフター写真）、専門性（資格・認定・業界団体所属）、権威性（メディア掲載・書籍執筆・受賞）、信頼性（会社概要・特商法・プライバシーポリシーの整備）を組み合わせます。著者プロフィールの充実とPerson Schemaの実装も有効です。",
  },
  {
    q: "モバイルページのAEO対策は何か違いますか？",
    a: "基本的なAEO施策はデバイスを問わず有効ですが、モバイルではアコーディオン形式のFAQが利便性を高め、表示速度もAI引用判定に影響する可能性があります。モバイルファーストインデックスに対応したレスポンシブデザインで速度を最適化することを優先してください。",
  },
  {
    q: "自社サービスを直接宣伝するコンテンツはAEOに向いていますか？",
    a: "宣伝色の強いコンテンツはAIに引用されにくいです。ユーザーの疑問に客観的・具体的に答えるコンテンツが引用されます。自社サービスは事例や実績として自然に紹介し、ユーザーにとって有益な情報を主軸に設計してください。",
  },
  {
    q: "内部リンク構造はAEOにどう関係しますか？",
    a: "関連するQ&Aページ・HowToページ・サービスページを内部リンクで結びつけることで、AIはそのサイトを特定トピックの権威として認識しやすくなります。トピッククラスター型の内部リンク設計がAEOとSEOの両方に有効です。",
  },
  {
    q: "画像・動画コンテンツはAEO対策で活用できますか？",
    a: "直接的な引用は困難ですが、alt属性・キャプション・動画の文字起こし（トランスクリプト）を適切に設定することでAIが内容を理解しやすくなります。特に手順解説動画にHowToスキーマを組み合わせることで補完的な効果が期待できます。",
  },
  {
    q: "AEO対策でローカルビジネスが気をつけることは？",
    a: "「○○市でおすすめの○○は？」といった地域クエリへの対応が重要です。地域名を含むFAQ・LocalBusinessスキーマ・Googleビジネスプロフィールの充実を組み合わせることで、地域AI検索でも引用されやすくなります。",
  },
  {
    q: "英語のAEO対策と日本語では違いがありますか？",
    a: "基本的な施策は共通ですが、日本語特有のAI検索行動（丁寧語・疑問形のパターン）に合わせて見出しや回答文を設計する必要があります。日本語圏ではYahoo! JAPANやLINEのAI機能も考慮した戦略が有効です。",
  },
  {
    q: "AEO対策の費用対効果はどう測定しますか？",
    a: "AI検索での引用確認数・FAQリッチリザルト表示回数・オーガニック流入数・指名検索数の変化を追跡します。長期的には問い合わせ数・成約数への貢献を測定します。当社では月次レポートでこれらのKPIを可視化しご報告します。",
  },
  {
    q: "サイプレスのAEO対策サービスに含まれる内容は？",
    a: "現状分析・競合AEO調査・回答型コンテンツ設計・FAQページ制作・FAQPage/HowToスキーマ実装・AI引用モニタリングをトータルで支援します。既存サイトへの追加対応も、新規サイト構築時の組み込みも対応しています。詳しくはお問い合わせください。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎と全体戦略" },
  { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "Q&Aコンテンツの最適化" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "Google生成AI検索対策" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPT引用最適化" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org設計・実装" },
  { href: "/aio/e-e-a-t", label: "E-E-A-T対策", desc: "信頼性・専門性の強化" },
  { href: "/aio/generative-search", label: "生成AI検索対策", desc: "AI検索エンジン全般の対策" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity AI引用最適化" },
  { href: "/aio/content-strategy", label: "AIコンテンツ戦略", desc: "AI時代のコンテンツ設計" },
  { href: "/aio/llms-txt", label: "llms.txt設置", desc: "AIクローラー向け設定" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化の基礎" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "サイト構造・速度最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ最適化戦略" },
  { href: "/seo/internal-linking", label: "内部リンク設計", desc: "サイト内リンク最適化" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ検索対策" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化ガイド" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEO支援サービス" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "コンテンツ制作・運用" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療業界のAIO・SEO" },
  { href: "/industry/legal", label: "士業・法律事務所向け", desc: "士業向けデジタル戦略" },
  { href: "/industry/education", label: "教育機関向け", desc: "教育機関のWeb集客" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの実績" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの実績" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>AEO（回答エンジン最適化）</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Answer Engine Optimization
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              AEO｜AI検索で選ばれる<br />コンテンツへ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              AEO（Answer Engine Optimization）とは、ChatGPT・Google AI Overview・Perplexityなど「回答を生成するAIエンジン」に最適化する戦略です。ユーザーの疑問に直接答えるコンテンツ設計・FAQスキーマ・HowTo構造化で、AI検索からの引用を増やします。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.jpg"
            alt="AEO回答エンジン最適化 - AI検索で選ばれるコンテンツ設計"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
        </section>

        {/* SEO vs AEO */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SEO vs AEO</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  従来のSEOとAEOの違い
                </h2>
                <div style={{ display: "flex", gap: "20px", padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 600, marginBottom: "8px" }}>SEO（従来型）</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>検索結果ページ（SERP）でのランキング向上が目標。ユーザーがリンクをクリックしてサイトを訪問する。</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "20px", padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 600, marginBottom: "8px" }}>AEO（AI時代）</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>AIが生成する回答への引用・参照が目標。クリックなしでもブランドが引用される「ゼロクリック露出」の最大化を図る。</p>
                  </div>
                </div>
                <div style={{ padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>
                    両者は対立しません。AEOに最適化されたコンテンツはSEOにも有効です。結論ファースト・FAQ形式・E-E-A-T整備はすべての検索エンジンとAIが評価します。
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Now</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  なぜ今AEOが重要なのか
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  ChatGPTの登場以来、AI検索サービスの利用者が急増しています。情報収集の入口がGoogleからAIへシフトするにつれ、AIに引用されるコンテンツを持つ企業と持たない企業の間に大きな格差が生まれつつあります。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  AI検索でブランド名・サービス名が引用されることは信頼性の証明であり、指名検索増加につながる長期的な資産となります。AEO対策への投資は、AI検索時代の「見えないSEO資産」です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              On This Page
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                "AEO（回答エンジン最適化）とSEOの根本的な違いと、なぜ今対策が必要なのか",
                "AI検索（ChatGPT・Google AI Overview・Perplexity）に引用されるコンテンツ設計の原則",
                "FAQPage・HowToスキーマの具体的な実装方法と効果",
                "業種別（医療・法律・不動産・IT・飲食など）のAEO活用ポイントと具体的な施策",
                "AEO対策の実装フロー（対象キーワード選定から引用モニタリングまでの10ステップ）",
                "AEO対策の成果を測定するKPI一覧と確認方法",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* AEO Tactics */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AEO Tactics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AEO実践の6つのポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "ユーザーの疑問をそのままタイトル・見出しにする",
                  b: "「MEO対策とは何か」「MEO対策の費用はいくらか」など、ユーザーが検索する疑問形フレーズを見出しに使います。AIはこのパターンのコンテンツを引用しやすい傾向があります。",
                },
                {
                  n: "02",
                  t: "答えを最初の段落に結論ファーストで書く",
                  b: "見出しの直後の最初の段落で、質問への答えを2〜3文で完結させます。AIはページの冒頭部分を優先的に参照し、要約として引用するケースが多いです。",
                },
                {
                  n: "03",
                  t: "FAQ・Q&A形式を積極活用する",
                  b: "よくある疑問をQ&A形式で整理し、FAQPageスキーマで構造化データを実装します。AIはQ&A形式のコンテンツを「引用しやすい」と判断し、直接回答として使用します。",
                },
                {
                  n: "04",
                  t: "専門家・一次情報としての信頼性確立",
                  b: "実際の経験・独自データ・専門家としての見解を積極的に組み込みます。AIは一次情報・専門性の高いコンテンツを優先し、引用可能な情報源として評価します。",
                },
                {
                  n: "05",
                  t: "簡潔かつ正確な言い回しを優先する",
                  b: "曖昧な表現・過剰な修飾語を避け、正確で具体的な表現を使います。AIは「引用しやすい」明確な文章を好む傾向があり、定義文・数値・手順を含む文章が選ばれやすいです。",
                },
                {
                  n: "06",
                  t: "内部リンクで関連コンテンツを体系化する",
                  b: "関連する疑問・トピックをカバーしたページを内部リンクで結びつけます。トピックの権威として認識されることで、AIが特定分野の信頼できる情報源と判断しやすくなります。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "質問形式の見出しを使っていない",
                  b: "「〇〇について」「〇〇の概要」といった説明型の見出しではAIが疑問への回答として引用しにくい構造です。「〇〇とは何ですか？」「〇〇はどうすればよいですか？」のように疑問文に変換することで、AI検索のクエリとマッチする確率が高まります。",
                },
                {
                  n: "02",
                  t: "直接的な回答がページ冒頭にない",
                  b: "導入文や背景説明が長く、核心的な回答が後半にあるページはAIに引用されにくいです。AIはページの冒頭200〜300文字を優先的に参照するため、結論ファーストで回答を配置することが引用率向上に直結します。",
                },
                {
                  n: "03",
                  t: "FAQページが薄い・少ない",
                  b: "FAQが3〜5問程度しかないか、回答が1行程度の薄い内容では情報価値が低くAIに無視されます。各Q&Aで50〜150文字の具体的な回答を用意し、ユーザーが実際に抱える疑問を網羅的にカバーすることが重要です。",
                },
                {
                  n: "04",
                  t: "箇条書き・表形式のコンテンツが少ない",
                  b: "長い段落文章だけでは、AIが引用可能な情報を抽出しにくい構造です。手順・比較・特徴・メリットなどは箇条書きや表形式で整理することで、AIが「引用しやすいコンテンツ」として認識しやすくなります。",
                },
                {
                  n: "05",
                  t: "検索意図の分析が不十分",
                  b: "ユーザーが「知りたい（Informational）」のか「やりたい（Transactional）」のかを考慮せずに書かれたコンテンツはミスマッチが生じます。クエリの意図に合ったコンテンツ形式（解説記事・手順記事・比較記事等）を選ぶことが引用率を高める前提です。",
                },
                {
                  n: "06",
                  t: "競合のAEO対策状況を把握していない",
                  b: "AI検索で引用されているのが自社か競合かを確認していない企業が多いです。業界の主要クエリでどのサイトが引用されているかを定期的に調査し、競合との差分を埋めるコンテンツ戦略を立てることが対策の出発点になります。",
                },
                {
                  n: "07",
                  t: "スキーママークアップ（FAQPage/HowTo）が未実装",
                  b: "コンテンツ品質が高くても、構造化データが未実装ではAIが情報の意味を正確に理解しにくいです。FAQPageスキーマをFAQコンテンツに、HowToスキーマを手順コンテンツに実装することで、AIがデータを参照しやすい形式になります。",
                },
                {
                  n: "08",
                  t: "コンテンツの網羅性が低い",
                  b: "特定のトピックについて1〜2ページしかないサイトはトピック権威として認識されません。関連する疑問・サブトピックを体系的にカバーしたコンテンツ群（トピッククラスター）を構築することで、AIにそのテーマの専門サイトとして評価されます。",
                },
                {
                  n: "09",
                  t: "更新頻度が少ない",
                  b: "数年前に作成したコンテンツが更新されないまま放置されているとAIは「古い情報」と判断する可能性があります。最終更新日を明示し、法改正・市場変化・新情報に合わせた定期的なリライトと情報追加が引用率の維持・向上に不可欠です。",
                },
                {
                  n: "10",
                  t: "内部リンク不足",
                  b: "個々のページが孤立しており、関連コンテンツへのリンクがないサイトはトピック全体の権威性が低く評価されます。関連するFAQ・HowTo・サービスページを相互にリンクし、AIが「この領域に詳しいサイト」と認識できる構造を構築することが重要です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別の活用ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-0" style={{ maxWidth: "900px" }}>
              {[
                {
                  n: "01",
                  industry: "医療・クリニック",
                  note: "症状・治療法の回答コンテンツ",
                  detail: "「○○の症状は何ですか？」「○○の治療法を教えてください」など患者が調べる医療クエリに対応したFAQを充実させます。YMYL領域のため著者（医師）情報・医院情報の構造化が特に重要です。",
                },
                {
                  n: "02",
                  industry: "法律・士業",
                  note: "よくある法律相談をQ&A化",
                  detail: "「離婚後の財産分与はどうなりますか？」「相続放棄の手続きを教えてください」など実際の相談案件から疑問形コンテンツを作成します。弁護士・司法書士などの資格・経歴情報の構造化でE-E-A-Tを高めます。",
                },
                {
                  n: "03",
                  industry: "飲食",
                  note: "レシピ・食材・栄養のQ&A",
                  detail: "「○○を使ったレシピは？」「○○と○○は合いますか？」といった食に関する疑問にRecipeスキーマ・HowToスキーマを組み合わせて回答します。メニュー情報・食材の栄養情報のFAQ化も有効です。",
                },
                {
                  n: "04",
                  industry: "不動産",
                  note: "購入・賃貸の疑問をQ&A化",
                  detail: "「住宅ローンの審査基準は？」「賃貸の初期費用の相場は？」「○○エリアの相場はいくらですか？」などユーザーが抱く具体的な疑問をFAQ形式でカバーし、地域名を含む見出しで地域AI検索にも対応します。",
                },
                {
                  n: "05",
                  industry: "IT・SaaS",
                  note: "操作方法・仕様をHowTo化",
                  detail: "「○○の設定方法は？」「○○エラーの解決方法は？」など技術的な手順をHowToスキーマで構造化します。比較記事（「○○ vs △△」形式）もAI引用率が高いコンテンツタイプです。",
                },
                {
                  n: "06",
                  industry: "教育",
                  note: "試験対策・学習法のQ&A",
                  detail: "「○○の試験に合格するには？」「○○の効果的な勉強法は？」「○○資格の難易度は？」など受験者・学習者の疑問に体系的に答えるFAQを構築します。合格実績データの引用は権威性シグナルとして有効です。",
                },
                {
                  n: "07",
                  industry: "金融",
                  note: "投資・保険・税務のQ&A",
                  detail: "「NISAとiDeCoの違いは？」「医療保険の選び方は？」「確定申告が必要なケースは？」など専門用語の定義と判断基準を明確に示すコンテンツはAIに引用されやすいです。YMYL領域のため著者の資格情報が重要です。",
                },
                {
                  n: "08",
                  industry: "旅行・地域",
                  note: "観光地・交通情報のQ&A",
                  detail: "「○○観光のおすすめスポットは？」「○○から○○への行き方は？」「○○の観光シーズンはいつですか？」など旅行者の疑問に地域名・施設名を含む具体的な回答コンテンツを作成します。",
                },
              ].map((item, i) => (
                <div
                  key={item.n}
                  style={{
                    padding: "24px",
                    borderTop: "1px solid #E8E4DC",
                    borderLeft: i % 2 === 1 ? "1px solid #E8E4DC" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
                    <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.n}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "10px" }}>{item.note}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              実装・改善フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "対象キーワードの疑問形変換",
                  b: "SEOキーワードリストを「〜とは？」「〜はどうすれば？」「〜の費用は？」などの疑問形に変換します。サジェスト・関連クエリ・PAA（People Also Ask）を活用して実際の検索疑問文を洗い出します。",
                },
                {
                  n: "02",
                  t: "検索意図の分類（知る/やる/行く/買う）",
                  b: "抽出した疑問形キーワードを「情報収集（Know）」「手順実行（Do）」「場所訪問（Go）」「購入決定（Buy）」の4意図に分類します。意図に応じた最適なコンテンツ形式（解説・手順・比較・レビュー）を選択します。",
                },
                {
                  n: "03",
                  t: "競合AEO分析",
                  b: "主要クエリをAI検索（ChatGPT・Perplexity・Google AI Overview）に投げ、引用されているサイトのコンテンツ構造・FAQ数・スキーマ実装状況を分析します。自社との差分から優先対策を決定します。",
                },
                {
                  n: "04",
                  t: "回答型コンテンツ構成設計",
                  b: "疑問形見出し→簡潔な直接回答（50〜100文字）→詳細解説→関連Q&Aの構成でコンテンツアーキテクチャを設計します。結論ファーストの原則を全コンテンツに統一します。",
                },
                {
                  n: "05",
                  t: "FAQ形式での執筆",
                  b: "各疑問に対して「Q: 〜ですか？」「A: 〜です。〜のため〜が必要です。」の形式で執筆します。回答は1〜3文の簡潔なものと100〜200文字の詳細版を用意し、コンテンツの深さを確保します。",
                },
                {
                  n: "06",
                  t: "HowToコンテンツ作成",
                  b: "手順系コンテンツを「ステップ1: ○○する」「ステップ2: △△する」の形式で作成します。各ステップに具体的な数値・時間・注意点を含めることでAI引用価値が高まります。",
                },
                {
                  n: "07",
                  t: "FAQPageスキーマ実装",
                  b: "FAQコンテンツにJSON-LD形式のFAQPageスキーマを実装します。すべてのQ&Aをschema.orgの仕様に従って構造化し、GoogleのSearch ConsoleでリッチリザルトのValidationを確認します。",
                },
                {
                  n: "08",
                  t: "HowToスキーマ実装",
                  b: "手順コンテンツにHowToスキーマを実装します。name・step・tool・supply・totalTime・estimatedCostなどのプロパティを適切に設定し、手順内容をAIが構造的に理解できる形式に整えます。",
                },
                {
                  n: "09",
                  t: "公開・インデックス確認",
                  b: "コンテンツ公開後にGoogle Search Consoleの「URL検査」でインデックス状況を確認し、必要に応じてサイトマップ送信・手動クロールリクエストを実施します。リッチリザルトのエラーがないことも確認します。",
                },
                {
                  n: "10",
                  t: "AI引用状況モニタリング",
                  b: "月次でChatGPT・Perplexity・Google AI Overviewに業界クエリを投げ、自社コンテンツの引用状況を記録します。引用されたQ&A・引用されなかったQ&Aを分析し、次サイクルの改善に反映させます。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  kpi: "AI検索での直接回答引用率",
                  where: "ChatGPT・Perplexity・Google AI Overviewに主要クエリを投げて手動確認",
                  note: "月次で30〜50クエリをサンプリングし、自社コンテンツが引用されたクエリ数の割合を追跡します。",
                },
                {
                  n: "02",
                  kpi: "FAQリッチリザルト表示回数",
                  where: "Google Search Console → 検索パフォーマンス → 検索タイプ：Web",
                  note: "FAQPageスキーマ実装後にリッチリザルトとして表示された回数を確認します。表示回数の増加がスキーマの有効性を示します。",
                },
                {
                  n: "03",
                  kpi: "対象Q&Aキーワードのクリック率（CTR）",
                  where: "Google Search Console → 検索パフォーマンス → クエリフィルター",
                  note: "疑問形キーワードのCTRを計測します。AEO最適化により検索結果でのリッチリザルト表示が増え、CTR向上につながります。",
                },
                {
                  n: "04",
                  kpi: "オーガニック流入数",
                  where: "Google Analytics 4 → 集客 → デフォルトチャネルグループ → Organic Search",
                  note: "AEO対策コンテンツの公開後における月次オーガニックセッション数の推移を追跡します。特にFAQページ群のセッション数を個別に計測します。",
                },
                {
                  n: "05",
                  kpi: "FAQ実装ページ数・Q&A総数",
                  where: "サイト管理画面・CMS・スプレッドシートで管理",
                  note: "FAQPageスキーマを実装したページ数と、サイト全体のQ&A総問数を管理します。競合との差分把握と目標設定の基準になります。",
                },
                {
                  n: "06",
                  kpi: "スキーマエラー数",
                  where: "Google Search Console → 拡張機能 → FAQ・HowToのエラー数",
                  note: "スキーマの実装エラー数をゼロに保ちます。エラーがあるとリッチリザルトが表示されず、AIのデータ参照にも悪影響を及ぼします。",
                },
                {
                  n: "07",
                  kpi: "月間問い合わせ数",
                  where: "フォーム送信数（Google Analytics 4 イベント / CRM）",
                  note: "AEO対策コンテンツ経由の問い合わせ数を追跡します。AI検索からのセッションは直接計測困難なため、コンテンツページ経由の問い合わせ数を代替指標として使用します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "6px", fontWeight: 600 }}>{item.where}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AEO対策のご相談"
          body="AI検索（ChatGPT・Google AI Overview・Perplexity）への引用を増やすコンテンツ設計・FAQ最適化・構造化データ実装をトータルでご支援します。まずは現状のAEO対策状況を診断します。"
        />
      </main>
      <Footer />
    </>
  );
}
