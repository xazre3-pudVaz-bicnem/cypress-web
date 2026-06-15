import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Google AI Overview対策｜生成AI検索で引用されるサイトへ｜サイプレス",
  description: "Googleの生成AI検索「AI Overview」に引用されるためのAIO対策。E-E-A-T・構造化データ・FAQ最適化で、AIが選ぶ情報源になる方法を解説。",
  keywords: ["AI Overview対策", "AIO対策", "生成AI検索", "Google AI Overview", "E-E-A-T", "構造化データ", "AI検索対策"],
  openGraph: {
    title: "Google AI Overview対策｜生成AI検索で引用されるサイトへ",
    description: "Googleの生成AI検索「AI Overview」に引用されるためのAIO対策。E-E-A-T・構造化データ・FAQ最適化で、AIが選ぶ情報源になる方法を解説。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/ai-overview" },
};

const faqItems = [
  {
    q: "Google AI Overviewとは何ですか？",
    a: "Google検索の最上部に表示される生成AI回答です。特定の検索クエリに対して、Googleが複数のウェブページを参照して自動生成した回答が表示されます。引用されたページへのリンクも表示されます。",
  },
  {
    q: "AI Overviewに引用されると何かメリットがありますか？",
    a: "AI Overviewでの引用はブランドの認知度と信頼性向上につながります。クリック率への影響はゼロクリック検索が増えることで複雑ですが、業界の権威として認識されることで、直接指名検索が増える効果があります。",
  },
  {
    q: "AI Overviewは全ての検索で表示されますか？",
    a: "いいえ。情報収集型のクエリ（「〇〇とは」「〇〇の方法」「〇〇の比較」など）で表示されやすく、商品購入・地域検索・ニュースなどでは表示されにくい傾向があります。",
  },
  {
    q: "SEO対策とAI Overview対策は別物ですか？",
    a: "基本的な考え方は共通しています。E-E-A-T・良質なコンテンツ・構造化データは両方に有効です。AI Overview特有の対策としては、答えを最初の段落に明確に書く「結論ファースト」のライティングスタイルが重要です。",
  },
  {
    q: "AI Overviewに選ばれるためにどのくらいの期間がかかりますか？",
    a: "コンテンツ改善から引用されるまでの明確な期間はGoogleが公表していません。継続的なコンテンツ品質向上・E-E-A-T強化・構造化データ実装を積み重ねることが重要です。",
  },
  {
    q: "中小企業でもAI Overviewに引用されますか？",
    a: "はい。大企業でなくても、特定の専門分野で質の高いコンテンツを持つサイトは引用される可能性があります。ニッチな専門領域に集中したコンテンツ戦略が効果的です。",
  },
  {
    q: "AI Overviewに引用されているか確認する方法はありますか？",
    a: "対象キーワードをGoogle検索して直接確認するのが最も確実です。ただし表示はユーザーによって異なるため、Google Search Consoleのインプレッションデータも合わせて確認することを推奨します。",
  },
  {
    q: "FAQスキーマはAI Overviewに効果がありますか？",
    a: "FAQPageスキーマを実装すると、Q&A形式の回答がAI Overviewの引用候補として認識されやすくなります。明確な質問と簡潔な回答を組み合わせた構造化データは引用確率を高める有効な手段です。",
  },
  {
    q: "AI Overviewに引用されても順位が下がることはありますか？",
    a: "AI Overviewに引用されることで検索順位が直接下がることはありません。ただし、AI Overviewの表示によってゼロクリック検索が増え、クリック数自体は変動する場合があります。引用されることで長期的な権威性向上が見込まれます。",
  },
  {
    q: "医療・法律・金融などのYMYL領域でも対策できますか？",
    a: "YMYL（Your Money or Your Life）領域ではE-E-A-Tの基準が特に厳しく設定されています。医師・弁護士・ファイナンシャルプランナーなど有資格者による監修・著者情報の明示・根拠となる公的情報へのリンクが不可欠です。",
  },
  {
    q: "競合が引用されていて自社が引用されない場合はどうすればよいですか？",
    a: "引用されている競合コンテンツを分析し、構成・情報量・構造化データ・E-E-A-T要素を比較することが有効です。回答の明確さ・見出し構造・専門性の根拠のどこが不足しているかを特定して改善します。",
  },
  {
    q: "AIに引用されやすい文章の書き方はありますか？",
    a: "結論ファースト・短文・能動態・具体的な数値の活用が有効です。「〇〇とは何ですか？」という問いに対して最初の1〜2文で完結に回答し、その後で詳細を補足する構造が引用されやすいパターンです。",
  },
  {
    q: "被リンクはAI Overviewに影響しますか？",
    a: "権威性の高いサイトからの被リンクはE-E-A-T評価に正の影響を与え、AI Overviewへの引用可能性を高めます。業界メディア・大学・公的機関からのリンク獲得が特に有効です。",
  },
  {
    q: "AI Overviewへの引用をブロックすることはできますか？",
    a: "robots.txtやnoindexタグを使えばGoogleのインデックスを制限できますが、引用だけを選択的にブロックする公式手段は現時点では提供されていません。表示を避けたい場合はGoogleへの直接申請が必要です。",
  },
  {
    q: "コンテンツの更新頻度はAI Overviewに影響しますか？",
    a: "最新情報を含むコンテンツは鮮度シグナルとして評価されます。記事の公開日・更新日を明記し、業界の変化に合わせて情報を定期的に見直すことが継続的な引用につながります。",
  },
  {
    q: "動画コンテンツはAI Overviewに影響しますか？",
    a: "現時点ではテキストコンテンツが主な引用対象ですが、YouTubeの動画説明・字幕テキストが引用される事例もあります。動画と合わせてテキスト解説ページを整備することが効果的です。",
  },
  {
    q: "一次情報・独自データとはどういうものですか？",
    a: "自社が独自に調査・収集したデータ、実際の事例、オリジナルの知見を指します。他サイトが参照できない情報は引用価値が高く、AI Overviewに選ばれやすい権威性を持ちます。",
  },
  {
    q: "モバイル最適化はAI Overviewに関係しますか？",
    a: "Googleはモバイルファーストインデックスでサイトをクロールするためモバイル最適化は間接的に影響します。表示速度・読みやすさ・CWVのスコアが低いとページ全体の評価が下がりAI Overviewへの引用可能性も低下します。",
  },
  {
    q: "著者情報はどの程度詳しく書けばよいですか？",
    a: "著者名・資格・専門領域・経歴・所属機関・プロフィール写真・SNSアカウント（LinkedInなど）を記載するのが理想です。PersonスキーマとAuthorスキーマで構造化し、著者プロフィールページへのリンクも設置します。",
  },
  {
    q: "AI Overview対策はどこに依頼すればよいですか？",
    a: "AIO対策の実績があるWeb制作会社・SEO会社に依頼することを推奨します。コンテンツ設計・構造化データ実装・E-E-A-T強化・モニタリングまでワンストップで対応できるパートナーを選ぶことが重要です。",
  },
];

const relatedLinks = [
  { href: "/aio",                   label: "AIO対策とは",          desc: "AIO対策の基礎" },
  { href: "/aio/ai-search",         label: "AI検索対策概論",        desc: "AI検索全般の対策" },
  { href: "/aio/chatgpt",           label: "ChatGPT対策",           desc: "ChatGPTへの引用対策" },
  { href: "/aio/gemini",            label: "Gemini対策",            desc: "Google Gemini最適化" },
  { href: "/aio/perplexity",        label: "Perplexity対策",        desc: "Perplexity引用対策" },
  { href: "/aio/structured-data",   label: "構造化データ実装",      desc: "Schema.org対策" },
  { href: "/aio/faq-optimization",  label: "FAQ最適化",             desc: "Q&Aコンテンツ" },
  { href: "/aio/knowledge-graph",   label: "ナレッジグラフ対策",    desc: "Googleへのエンティティ登録" },
  { href: "/aio/llm-optimization",  label: "LLM最適化",             desc: "AI言語モデル対策" },
  { href: "/aio/eeat",              label: "E-E-A-T対策",           desc: "権威性・信頼性向上" },
  { href: "/aio/llms-txt",          label: "llms.txt設置",          desc: "AIクローラー向け案内" },
  { href: "/seo/content-seo",       label: "コンテンツSEO",         desc: "コンテンツ戦略全般" },
  { href: "/seo/technical-seo",     label: "テクニカルSEO",         desc: "技術的SEO対策" },
  { href: "/seo/local-seo",         label: "ローカルSEO",           desc: "地域検索対策" },
  { href: "/meo",                   label: "MEO対策",               desc: "Googleマップ最適化" },
  { href: "/services/aio",          label: "AIO対策サービス",       desc: "サービス詳細" },
  { href: "/services/seo",          label: "SEOサービス",           desc: "SEO支援サービス" },
  { href: "/services/content",      label: "コンテンツ制作",        desc: "記事・コンテンツ制作" },
  { href: "/industry/medical",      label: "医療・クリニック向け",  desc: "医療業界のAIO対策" },
  { href: "/industry/legal",        label: "士業・法律向け",        desc: "士業のAIO対策" },
  { href: "/industry/restaurant",   label: "飲食店向け",            desc: "飲食業のAIO対策" },
  { href: "/industry/ec",           label: "EC・小売向け",          desc: "EC事業者のAIO対策" },
  { href: "/area/tokyo",            label: "東京のAIO対策",         desc: "東京エリア対応" },
  { href: "/area/osaka",            label: "大阪のAIO対策",         desc: "大阪エリア対応" },
];

// ─── Schema.org JSON-LD ────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/aio" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#9CA3AF" }}>Google AI Overview対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Overview Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Google AI Overview対策｜生成AI検索で引用されるサイトへ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              Google検索の最上部に表示される生成AI回答「AI Overview」に自社コンテンツが引用されることは、AIが主流になる検索時代のブランド戦略として不可欠です。引用されるサイトになるための実践的な対策を解説します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              従来のSEOが「検索結果10位以内」を目標にしていたのに対し、AI Overview対策は「AIが最初に選ぶ情報源」になることを目標とします。E-E-A-T・構造化データ・結論ファーストのコンテンツ設計が不可欠です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              本ページでは、AI Overviewに引用されるために必要な条件・業種別の活用方法・実装フロー・成果指標まで体系的に解説します。AI検索時代の集客戦略の出発点として、ぜひご活用ください。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="Google AI Overview対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6, maxWidth: "640px" }}>
                AI Overviewに引用されるサイトは、E-E-A-Tと構造化データで「AIが信頼できる情報源」として認識されたページです。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Google AI Overviewの仕組みと引用される仕組み",
                "AI Overviewに引用されるために必要なE-E-A-T対策の具体的な方法",
                "FAQスキーマ・構造化データの実装手順と効果",
                "結論ファーストのコンテンツライティング技法",
                "業種別（飲食・医療・士業など）のAI Overview活用ポイント",
                "引用状況をモニタリングするためのKPIと計測ツール",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.7" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Conditions (dark) */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Core Conditions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              AI Overviewに引用されるための4つの条件
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "E-E-A-T（経験・専門性・権威性・信頼性）の明示", b: "著者情報・会社情報・専門性の根拠を構造化して明示します。Googleが信頼できる情報源かを判断する最重要シグナルです。" },
                { t: "結論ファーストの文章構造", b: "回答をページの冒頭に明確に記述。Googleが「答え」として引用しやすい文章構造にすることで引用確率が高まります。" },
                { t: "FAQスキーマの実装", b: "FAQPageスキーマを実装することでQ&A形式の回答がAI Overviewの引用候補になりやすくなります。構造化データは必須です。" },
                { t: "権威あるサイトからの被リンク", b: "業界メディアや公的機関からの言及・被リンクが引用確率を高めます。権威性の高いサイトからの評価がAI判断に影響します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Factors */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Factors</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AI Overviewに引用されるための条件
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "検索クエリへの直接的な回答を冒頭に置く", b: "AI Overviewは「この質問に対する答えは何か」を最初の段落で判断します。前置きを省き、最初の1〜2文で質問に答える「結論ファースト」の構成が効果的です。" },
                { n: "02", t: "明確な見出し構造（H1→H2→H3）", b: "適切な階層構造の見出しはAIがコンテンツを理解しやすくします。各見出しが独立した質問への回答になっている構成は特に引用されやすい傾向があります。" },
                { n: "03", t: "E-E-A-T（経験・専門性・権威性・信頼性）の強化", b: "著者情報・会社概要・実績・資格・メディア掲載などの権威性情報をコンテンツ内に組み込みます。Googleは信頼できる情報源を優先的にAI Overviewの引用元にします。" },
                { n: "04", t: "構造化データ（FAQPage・HowTo等）の実装", b: "Schema.orgの構造化データを実装することで、AIが情報の種類と関係性を正確に理解できます。特にFAQPageは引用される確率が高い形式です。" },
                { n: "05", t: "権威性の高いサイトからの被リンク獲得", b: "被リンクプロファイルはGoogleの信頼性評価に影響します。業界メディア・公的機関・専門サイトからのリンクを増やすことでAI Overviewでの引用可能性が高まります。" },
                { n: "06", t: "ローカルクエリへの対応（GBPとWebサイトの連携）", b: "「〇〇市のMEO業者」などの地域検索でのAI Overviewには、GBPと連携したWebサイトのローカルSEO対策が重要です。" },
                { n: "07", t: "定期的なコンテンツ更新", b: "最新性はAI Overviewへの引用可能性に影響します。記事の更新日を明記し、情報が古くなったら随時更新することが重要です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "AI Overviewに引用されない", b: "コンテンツがAI Overviewの引用基準を満たしていない状態です。E-E-A-T・構造化データ・回答型ライティングのいずれかが不足しているケースがほとんどです。" },
                { n: "02", t: "構造化データが未設定", b: "FAQPage・Article・OrganizationなどのSchema.orgが実装されていないと、AIがコンテンツの意味と構造を正確に把握できません。引用候補として認識されにくくなります。" },
                { n: "03", t: "E-E-A-T情報がない", b: "著者の資格・経歴・実績が明示されていないページはGoogleが権威性を評価できません。専門家情報の欠如はYMYL領域では特に致命的な課題です。" },
                { n: "04", t: "回答型コンテンツになっていない", b: "文章がブランド紹介や企業案内に終始しており、ユーザーの検索意図に直接答えていません。「〇〇とは何か」「〇〇の方法」に明確に答える構成が必要です。" },
                { n: "05", t: "見出し構造が最適でない", b: "H1・H2・H3の階層が曖昧だったり、見出しが検索クエリと対応していなかったりします。AIはページの見出しを重要なシグナルとして読み取ります。" },
                { n: "06", t: "FAQ形式のコンテンツが少ない", b: "FAQ形式はAI Overviewが最も引用しやすいコンテンツ形式の一つです。Q&Aセクションがない・少ない場合、AI Overviewへの露出機会を逃しています。" },
                { n: "07", t: "著者情報・会社情報の構造化なし", b: "著者情報がテキストのみで構造化されていない場合、機械的な読み取りが難しくなります。PersonスキーマとOrganizationスキーマで構造化することで信頼性シグナルを強化できます。" },
                { n: "08", t: "一次情報・独自データがない", b: "他サイトのコンテンツと差別化できる独自の調査・事例・データがないと引用価値が低くなります。AIは独自性の高いオリジナル情報を好む傾向があります。" },
                { n: "09", t: "コンテンツの権威性が低い", b: "業界の専門メディアや公的機関から言及・引用されていないコンテンツは権威性が低く評価されます。外部からの評価を獲得するためのコンテンツマーケティングが必要です。" },
                { n: "10", t: "モバイル最適化不足", b: "GoogleはモバイルファーストインデックスでページをクロールするためCWVスコアの低下はページ評価全体を下げます。表示速度・レイアウトの安定性・タップ操作性の改善が必要です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別のAI Overview活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0" }}>
              {[
                { n: "01", industry: "飲食店", point: "地域グルメ情報・メニュー特徴の引用", detail: "「〇〇市のおすすめランチ」「〇〇料理の特徴」などの地域・ジャンル検索でAI Overviewに引用されやすくなります。メニューの食材・調理法・産地情報をRecipeスキーマで構造化し、地域名を含む見出しを設置することが有効です。" },
                { n: "02", industry: "美容室", point: "トレンド・施術説明コンテンツ", detail: "「〇〇ヘアのやり方」「パーマの種類と違い」など施術に関する情報収集クエリでの引用が見込めます。施術者の技術・資格・経験年数をPersonスキーマで明示し、ビフォーアフター事例を一次情報として活用します。" },
                { n: "03", industry: "歯科・クリニック", point: "医療情報・予防歯科コンテンツ", detail: "YMYL領域のためE-E-A-Tの基準が高く、医師・歯科医師による監修が必須です。「虫歯の予防方法」「歯周病の症状」など予防医療情報をMedicalConditionスキーマで構造化することで引用確率が高まります。" },
                { n: "04", industry: "建設・リフォーム", point: "工事方法・費用相場の解説", detail: "「リフォーム費用の相場」「外壁塗装の選び方」などの情報収集クエリで有効です。施工事例・費用の内訳・工期をHowToスキーマで構造化し、資格保有者による監修情報を明示します。" },
                { n: "05", industry: "士業（弁護士・税理士等）", point: "法律・税務の解説コンテンツ", detail: "「相続税の計算方法」「労働問題の対処法」などの専門知識クエリでの引用が期待できます。弁護士・税理士・司法書士の資格情報を構造化し、判例・法令への引用を含む一次情報コンテンツが有効です。" },
                { n: "06", industry: "EC・小売", point: "商品比較・選び方コンテンツ", detail: "「〇〇の選び方」「〇〇おすすめ比較」など購買前の情報収集クエリで有効です。ProductスキーマとReviewスキーマを活用し、実際の使用者による評価データを掲載することで引用価値を高めます。" },
                { n: "07", industry: "BtoB・SaaS", point: "業界知識・課題解決コンテンツ", detail: "「〇〇ツールの活用方法」「業務効率化のコツ」など課題解決型クエリでAI Overviewへの引用が見込めます。導入事例・ROIデータ・業界統計を一次情報として掲載し、権威性を確立します。" },
                { n: "08", industry: "教育", point: "学習方法・試験対策コンテンツ", detail: "「〇〇の勉強法」「〇〇試験の合格率」など学習情報クエリで有効です。CourseスキーマとFAQPageスキーマを組み合わせ、講師の資格・合格実績をPersonスキーマで構造化します。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "24px", borderTop: "1px solid #E8E4DC", borderLeft: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>{item.n}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "#c4b89a", marginBottom: "8px" }}>{item.point}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              実装・改善フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "AI Overviewの仕組みを理解する", b: "GoogleがどのようなクエリでAI Overviewを表示するか、どのような基準でコンテンツを引用するかを把握します。情報収集型クエリへの対応が出発点です。" },
                { n: "02", t: "対象キーワードの特定", b: "自社のサービス・業種に関連する情報収集型クエリを洗い出します。「〇〇とは」「〇〇の方法」「〇〇の費用」など、AI Overviewが表示されやすいクエリパターンを優先します。" },
                { n: "03", t: "競合のAI Overview引用コンテンツ分析", b: "対象キーワードで既にAI Overviewに引用されている競合コンテンツの構成・見出し・E-E-A-T情報を分析します。引用されているコンテンツの共通点を抽出して自社に応用します。" },
                { n: "04", t: "回答型コンテンツの設計", b: "各ページを「ユーザーの質問に直接答えるドキュメント」として再設計します。結論を冒頭に置き、見出しをQ&A形式にし、箇条書きや番号リストで情報を整理します。" },
                { n: "05", t: "構造化データの実装", b: "FAQPage・Article・Organization・Personなど必要なSchema.orgスキーマを実装します。Google Search Consoleのリッチリザルトテストで正常に認識されているか確認します。" },
                { n: "06", t: "E-E-A-T情報の追加", b: "著者の資格・経歴・専門分野・所属機関を各記事に明示します。会社情報ページに実績・受賞歴・メディア掲載情報を追加し、権威性のシグナルを強化します。" },
                { n: "07", t: "著者情報の構造化", b: "PersonスキーマとAuthorスキーマで著者情報を機械可読な形式で実装します。著者プロフィールページへの内部リンクと、LinkedInなどの公的プロフィールへの外部リンクも設置します。" },
                { n: "08", t: "FAQセクションの追加", b: "各ページに関連するFAQセクションを追加し、FAQPageスキーマを実装します。Q&Aの数は5〜15問を目安に、実際にユーザーが検索しそうな質問を選定します。" },
                { n: "09", t: "モニタリング設定", b: "Google Search ConsoleでAI Overview関連のインプレッション・クリック・CTRを追跡します。対象キーワードの実際のAI Overview表示を定期的に確認する体制を整えます。" },
                { n: "10", t: "定期見直しとPDCA", b: "月次でコンテンツのパフォーマンスを評価し、引用されていないページの改善を継続します。Googleのアルゴリズム変動に合わせて対策内容を柔軟に見直します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "AI Overview引用回数", where: "Google Search Console", b: "Search Consoleのパフォーマンスレポートで「検索タイプ: ウェブ」でフィルタリングし、対象クエリのインプレッション推移を確認します。" },
                { n: "02", t: "引用率（対象キーワード）", where: "手動確認 / 専用ツール", b: "事前に選定した対象キーワードに対してAI Overviewが表示される割合を計測します。定期的な手動確認と専用モニタリングツールを組み合わせて把握します。" },
                { n: "03", t: "オーガニックCTR", where: "Google Search Console", b: "AI Overview引用による表示回数増加に対してクリック率がどう変化するかを追跡します。引用後のCTR変動を確認し、コンテンツのタイトルとメタディスクリプションを最適化します。" },
                { n: "04", t: "検索順位", where: "Google Search Console / 専用ツール", b: "AI Overview対策はオーガニック順位の向上にも貢献します。対象キーワードの順位推移を月次で記録し、コンテンツ改善との相関を分析します。" },
                { n: "05", t: "ページの権威スコア", where: "Ahrefs / SEMrush", b: "ドメインオーソリティとページオーソリティの推移を追跡します。被リンク獲得施策の効果を確認し、権威性の向上とAI Overview引用確率の相関を把握します。" },
                { n: "06", t: "コンテンツの引用可能性スコア", where: "専用AIOツール", b: "回答型ライティング・E-E-A-T情報・構造化データの充足度を定量的に評価するAIO診断ツールのスコアを定期的に確認します。" },
                { n: "07", t: "月間オーガニック流入数", where: "Google Analytics", b: "AI Overview対策の最終的なビジネス成果としてオーガニック流入数の推移を追跡します。AI Overview引用が増えた時期との流入数の相関を分析します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px", flexWrap: "wrap" }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a" }}>{item.t}</p>
                      <span style={{ fontSize: "11px", color: "#c4b89a", fontWeight: 600, letterSpacing: "0.05em" }}>{item.where}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "12px" }}>
              サイプレスのAI Overview対策サービス
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.9", maxWidth: "600px", marginBottom: "40px" }}>
              コンテンツ設計・構造化データ実装・E-E-A-T強化・モニタリングまでをワンストップで対応します。AI検索時代の集客基盤を確実に構築します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                {
                  t: "現状診断・競合分析",
                  b: "Google Search Consoleとサイト監査ツールを使用して現状のAI Overview引用状況・競合の引用コンテンツ・構造化データの充足度を詳細に分析し、優先対策を特定します。",
                },
                {
                  t: "コンテンツ設計・リライト",
                  b: "AI Overviewに引用されやすい結論ファースト構成・見出し最適化・FAQ追加を含むコンテンツリライトを実施します。業種特有の専門用語と検索意図に沿った設計を行います。",
                },
                {
                  t: "構造化データ完全実装",
                  b: "FAQPage・Article・Organization・PersonなどすべてのSchema.orgを実装し、Google Search ConsoleとValidatorで正常認識を確認します。エラー・警告のないクリーンな実装を保証します。",
                },
                {
                  t: "E-E-A-T強化コンサルティング",
                  b: "著者情報整備・会社情報充実・メディア掲載獲得・被リンク構築まで含む総合的なE-E-A-T向上計画を策定し、権威性シグナルを体系的に強化します。",
                },
                {
                  t: "月次モニタリングレポート",
                  b: "AI Overview引用状況・オーガニック流入数・CTR・構造化データのエラー数を月次でレポートします。施策の成果を可視化し、PDCAを継続的に回します。",
                },
                {
                  t: "継続改善サポート",
                  b: "Googleのアルゴリズム変動・AI Overview仕様変更に合わせて対策内容を柔軟に更新します。業界最新情報のキャッチアップと継続的な改善提案で成果を維持します。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary / Before-After */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Before / After</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              対策前・対策後の変化
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", maxWidth: "760px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "16px" }}>BEFORE — 対策前</p>
                {[
                  "AI Overviewに一切引用されていない",
                  "構造化データが未実装",
                  "著者情報が記載されていない",
                  "コンテンツが企業案内のみ",
                  "FAQセクションがない・少ない",
                  "モバイル表示が最適化されていない",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 0", borderTop: "1px solid #E8E4DC" }}>
                    <span style={{ color: "#9CA3AF", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>—</span>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{item}</p>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#c4b89a", marginBottom: "16px" }}>AFTER — 対策後</p>
                {[
                  "対象キーワードでAI Overviewに定期的に引用",
                  "全ページにSchema.org完全実装",
                  "著者・会社情報が構造化されている",
                  "回答型コンテンツで情報収集ニーズを充足",
                  "20問以上のFAQセクションを設置",
                  "Core Web Vitals全項目でLighthouse 90+",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 0", borderTop: "1px solid #E8E4DC" }}>
                    <span style={{ color: "#c4b89a", fontSize: "14px", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI Overview対策のご相談"
          body="Google AI Overviewへの引用を増やすためのコンテンツ改善・構造化データ実装・E-E-A-T強化をご支援します。AI検索時代の集客対策をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
