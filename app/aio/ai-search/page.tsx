import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI検索対策（AIO）｜ChatGPT・Gemini・Perplexityに引用されるサイトへ｜株式会社サイプレス",
  description: "AI検索エンジン（ChatGPT・Gemini・Perplexity・Claude）に引用されるためのAIO対策。E-E-A-T・構造化データ・llms.txt設置など実践的な最適化手法を解説。",
  keywords: ["AI検索対策", "AIO対策", "ChatGPT引用対策", "Gemini対策", "Perplexity対策", "AI検索最適化", "E-E-A-T", "構造化データ"],
  openGraph: {
    title: "AI検索対策（AIO）｜ChatGPT・Gemini・Perplexityに引用されるサイトへ",
    description: "AI検索エンジン（ChatGPT・Gemini・Perplexity・Claude）に引用されるためのAIO対策。E-E-A-T・構造化データ・llms.txt設置など実践的な最適化手法を解説。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/ai-search" },
};

const faqItems = [
  {
    q: "AI検索対策（AIO）とは何ですか？",
    a: "AIO（AI-Integrated Optimization）はChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンに自社コンテンツが引用・推薦されるよう最適化する取り組みです。従来のSEOがGoogleの検索結果順位を目標にしたのに対し、AIOはAIの回答の中に自社が登場することを目標とします。",
  },
  {
    q: "SEOとAIOはどう違いますか？",
    a: "SEOはGoogleの検索結果ページ（SERP）での順位向上を目的とし、主にクローラーによるインデックスと順位アルゴリズムへの最適化です。AIOはAI言語モデルが回答を生成する際に自社情報を引用してもらうための最適化で、E-E-A-T・回答型コンテンツ・構造化データなど重複する要素も多いですが対象範囲が異なります。",
  },
  {
    q: "ChatGPTに引用されるにはどうすればよいですか？",
    a: "ChatGPT（Bing経由の場合）はBingのインデックスを参照するため、まずBingへのインデックス登録が必要です。E-E-A-T情報の明示・構造化データの実装・一次情報・独自調査の掲載が引用確率を高めます。ChatGPTのウェブ検索機能ではllms.txtの設置も有効です。",
  },
  {
    q: "PerplexityやClaudeへの対策もSEOと同じですか？",
    a: "基本的な品質要件は共通ですが、AIごとにクローラーとデータソースが異なります。PerplexityはYouとBingを、ClaudeはAnthropicの独自クローラーを利用します。llms.txtでAIクローラーへの案内を設置し、ロボット設定で意図しないブロックがないか確認することが重要です。",
  },
  {
    q: "llms.txtとは何ですか？",
    a: "llms.txtはウェブサイトのルートに設置するテキストファイルで、AI言語モデルのクローラーに対してサイトの概要・重要ページ・コンテンツ構造を案内するものです。robots.txtのAI版に相当します。サイトの専門領域・著者情報・引用してほしい情報を記述します。",
  },
  {
    q: "E-E-A-Tとは何ですか？",
    a: "E-E-A-TはExperience（経験）・Expertise（専門性）・Authoritativeness（権威性）・Trustworthiness（信頼性）の略です。Googleが品質評価に使用するフレームワークで、AI検索エンジンも信頼できる情報源を判断する際に類似の基準を用います。著者情報・会社情報・実績・資格の明示が重要です。",
  },
  {
    q: "AI検索からの流入はどう計測できますか？",
    a: "Google Analytics 4でリファラー（chatgpt.com・perplexity.ai・gemini.google.comなど）を確認します。また、ブランド名や特定コンテンツへの指名検索の増加もAI経由の間接効果として追跡できます。Perplexity経由はUTMパラメータが付与されるケースもあります。",
  },
  {
    q: "AI検索対策は全業種に必要ですか？",
    a: "情報収集型の検索クエリが多い業種（医療・法律・教育・IT・金融）では特に重要です。地域密着型のサービス業でも「〇〇市のおすすめ〇〇」「〇〇の選び方」などのAI検索が増えており、業種を問わず対応が推奨されます。",
  },
  {
    q: "YMYL領域でのAI検索対策の注意点は？",
    a: "医療・法律・金融など人の生命や財産に関わるYMYL領域では、AIが誤情報を引用するリスクを避けるため基準が厳格です。有資格者による監修・医師や弁護士などの著者情報・根拠となる公的機関情報へのリンクが必須となります。",
  },
  {
    q: "AI検索対策にかかる費用の目安は？",
    a: "コンテンツのリライト・構造化データ実装・E-E-A-T強化を含む包括的な対策は月次契約で数万円〜数十万円が一般的です。対象ページ数・コンテンツ量・競合状況によって異なるため、まず現状診断から始めることを推奨します。",
  },
  {
    q: "AI検索対策の効果が出るまでどのくらいかかりますか？",
    a: "コンテンツ改善後にAIのインデックス更新が反映されるまで2〜8週間程度が目安です。ただし引用頻度の向上は継続的な品質強化によって徐々に蓄積されるものであり、即効性よりも中長期的な取り組みが重要です。",
  },
  {
    q: "既存のSEO対策はAIOでも活きますか？",
    a: "はい。コンテンツ品質・E-E-A-T・構造化データ・被リンクなど従来のSEO対策の多くはAIOにも有効です。AIO特有の追加対策としてllms.txt設置・回答型ライティング・著者情報の構造化・FAQ拡充などがあります。",
  },
  {
    q: "AI検索エンジンはどのようなコンテンツを引用しますか？",
    a: "正確性・権威性・一次情報・具体性・最新性を兼ね備えたコンテンツが引用されやすい傾向があります。専門家による解説・オリジナルデータ・比較情報・手順説明など「答えとして使いやすい」形式のコンテンツが特に有効です。",
  },
  {
    q: "ブランド名がAI回答に登場するかどうか確認する方法は？",
    a: "ChatGPT・Gemini・Perplexity・Claudeなどの各AIに対して「〇〇のおすすめサービス」「〇〇を選ぶポイント」などのクエリを入力し、自社ブランドが言及されるか直接確認するのが最も確実な方法です。",
  },
  {
    q: "競合他社がAI回答に登場しているのに自社が出ない場合は？",
    a: "競合のコンテンツを詳細に分析し、自社との差異（E-E-A-T・情報量・構造化データ・被リンク）を特定します。特に著者情報の充実度・一次情報の有無・FAQの量が差になりやすいポイントです。",
  },
  {
    q: "AI検索でネガティブな情報が引用された場合はどうすればよいですか？",
    a: "AI検索エンジンは信頼性の高いソースを引用するため、自社が発信するポジティブな情報の権威性を高めることが対策の基本です。公式サイトへのE-E-A-T強化・プレスリリース配信・メディア掲載が評判管理に有効です。",
  },
  {
    q: "画像や動画はAI検索対策に関係しますか？",
    a: "現在の主流AIは主にテキストを引用しますが、動画の字幕テキスト・画像のaltテキスト・ファイル名も引用素材になり得ます。視覚コンテンツにはテキスト解説を必ず添えるとともに、altテキスト・キャプションをSEO意識で記述することが有効です。",
  },
  {
    q: "ローカルビジネスでもAI検索対策は有効ですか？",
    a: "有効です。「〇〇市のおすすめ美容室」「〇〇駅近くの歯科医院」などの地域名を含むAI検索が増えており、Googleビジネスプロフィールとウェブサイトを連動させたローカルSEOがAI検索でも引用されやすい基盤になります。",
  },
  {
    q: "AI検索対策を自社で行うことはできますか？",
    a: "基本的な対策（E-E-A-T情報の追加・FAQ整備・コンテンツのリライト）は自社でも実施できます。構造化データの実装・llms.txt設置・モニタリング体制の構築には技術的な知識が必要なため、専門家への依頼が効率的です。",
  },
  {
    q: "AI検索対策の依頼先の選び方は？",
    a: "AIO対策・SEO・コンテンツ制作をワンストップで対応できる会社を選ぶことが重要です。実績・導入事例・対応AIの種類・レポーティング体制を確認し、自社の業種・規模に合ったパートナーを選定します。",
  },
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

const relatedLinks = [
  { href: "/aio",                   label: "AIO対策とは",             desc: "AIO対策の基礎解説" },
  { href: "/aio/ai-overview",       label: "Google AI Overview対策",  desc: "AI Overview引用対策" },
  { href: "/aio/chatgpt",           label: "ChatGPT対策",             desc: "ChatGPTへの引用対策" },
  { href: "/aio/gemini",            label: "Gemini対策",              desc: "Google Gemini最適化" },
  { href: "/aio/perplexity",        label: "Perplexity対策",          desc: "Perplexity引用対策" },
  { href: "/aio/claude",            label: "Claude対策",              desc: "Anthropic Claude最適化" },
  { href: "/aio/structured-data",   label: "構造化データ実装",        desc: "Schema.org対策" },
  { href: "/aio/faq-optimization",  label: "FAQ最適化",               desc: "Q&Aコンテンツ設計" },
  { href: "/aio/eeat",              label: "E-E-A-T対策",             desc: "権威性・信頼性向上" },
  { href: "/aio/llms-txt",          label: "llms.txt設置",            desc: "AIクローラー向け案内" },
  { href: "/aio/knowledge-graph",   label: "ナレッジグラフ対策",      desc: "Googleエンティティ登録" },
  { href: "/seo/content-seo",       label: "コンテンツSEO",           desc: "コンテンツ戦略全般" },
  { href: "/seo/technical-seo",     label: "テクニカルSEO",           desc: "技術的SEO対策" },
  { href: "/seo/local-seo",         label: "ローカルSEO",             desc: "地域検索対策" },
  { href: "/meo",                   label: "MEO対策",                 desc: "Googleマップ最適化" },
  { href: "/services/aio",          label: "AIO対策サービス",         desc: "サービス詳細・料金" },
  { href: "/services/seo",          label: "SEOサービス",             desc: "SEO支援サービス" },
  { href: "/services/content",      label: "コンテンツ制作",          desc: "記事・コンテンツ制作" },
  { href: "/industry/medical",      label: "医療・クリニック向け",    desc: "医療業界のAIO対策" },
  { href: "/industry/legal",        label: "士業・法律向け",          desc: "士業のAIO対策" },
  { href: "/industry/restaurant",   label: "飲食店向け",              desc: "飲食業のAIO対策" },
  { href: "/industry/ec",           label: "EC・小売向け",            desc: "EC事業者のAIO対策" },
  { href: "/area/tokyo",            label: "東京のAIO対策",           desc: "東京エリア対応" },
  { href: "/area/osaka",            label: "大阪のAIO対策",           desc: "大阪エリア対応" },
];

export default function AiSearchPage() {
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
              <span style={{ color: "#9CA3AF" }}>AI検索対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Search Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              AI検索対策（AIO）｜ChatGPT・Gemini・Perplexityに引用されるサイトへ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              検索行動はいま大きく変わっています。Google検索だけでなく、ChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンが情報源として定着しつつあります。AIO（AI-Integrated Optimization）は、こうしたAI検索で自社コンテンツが引用・推薦されるために最適化する取り組みです。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              従来のSEOとは発想の違う部分もありますが、E-E-A-T・高品質コンテンツ・構造化データなど共通する基盤も多くあります。本ページではAIO対策の全体像から実装フローまでを体系的に解説します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              ChatGPT・Gemini・Perplexity・Claudeそれぞれの仕組みの違い、業種別の活用ポイント、10ステップの実装フロー、成果を計測するためのKPIまで、実践的な情報を網羅しています。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="AI検索対策・AIO最適化" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.50)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6, maxWidth: "640px" }}>
                AI検索に引用されるサイトは、「正確・権威・構造化」の3要素を兼ね備えた情報源として評価されたページです。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              このページでわかること
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              AI検索エンジンへの対応はSEOの延長線上にあるものの、独自のアプローチが必要です。以下の6つのポイントを押さえることで、ChatGPT・Gemini・Perplexityといった主要AIへの引用対策を体系的に進められます。
            </p>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "ChatGPT・Gemini・Perplexity・ClaudeなどAI検索エンジンの仕組みの違いと対策の共通点",
                "AIOとSEOの関係性・併用すべき理由と取り組みの優先順位",
                "E-E-A-T強化・構造化データ実装・llms.txt設置など具体的な対策手順",
                "業種別（医療・法律・飲食・IT・不動産など）のAI検索活用ポイント",
                "AI検索から引用されやすいコンテンツの設計と文章構造",
                "成果をモニタリングするためのKPIと計測ツールの活用方法",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.7" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview dark section */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>AIO Overview</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "12px" }}>
              AI検索対策の4つの柱
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.9", maxWidth: "600px", marginBottom: "40px" }}>
              AIO対策は単発の施策ではなく、コンテンツ・技術・権威性・継続運用の4つの柱を同時に整備することで初めて効果が出ます。どれか一つが欠けてもAI検索エンジンへの引用確率は高まりません。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "E-E-A-T（経験・専門性・権威性・信頼性）の確立", b: "著者情報・会社情報・資格・実績を構造化して明示します。AIが「信頼できる情報源」と判断する基盤を整えます。" },
                { t: "回答型コンテンツへのリライト", b: "ユーザーの質問に直接答える「結論ファースト」の構成にします。AIが引用しやすい明確な回答と具体的な説明の組み合わせが鍵です。" },
                { t: "構造化データとllms.txtの実装", b: "Schema.orgでコンテンツをAIが読みやすい形式に整備します。llms.txtでAIクローラーへサイト案内も設置します。" },
                { t: "一次情報・独自データの蓄積", b: "他サイトが参照できないオリジナルの調査・事例・統計を持つコンテンツはAI検索での引用価値が高くなります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              よくある課題と原因
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              AI検索対策が進まない企業に共通する課題を10項目にまとめました。自社の現状と照らし合わせ、どの課題が最も優先度が高いかを確認してください。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "AI検索エンジンの仕組みを理解していない", b: "ChatGPT・Gemini・Perplexityはそれぞれ異なるデータソースとクローラーを持ちます。仕組みを理解せず対策を立てると施策が的外れになりやすく、優先度の高い対応が後回しになります。" },
                { n: "02", t: "従来SEOのみに頼っている", b: "Google検索での順位向上だけを目標にしているため、AI検索経由の集客機会を逃しています。AIOとSEOは補完関係にあり、両輪で施策を進めることで相乗効果が生まれます。" },
                { n: "03", t: "E-E-A-T対応が不十分", b: "著者情報・会社情報・専門資格の記載がなく、AIが情報の信頼性を判断する根拠がありません。特にYMYL（医療・法律・金融）領域では権威性の欠如が致命的な課題となります。" },
                { n: "04", t: "引用されやすい文章構造になっていない", b: "前置きが長く、ユーザーの質問への直接回答が後半にしか現れない構成です。AIは冒頭の段落を最優先で読み取るため、結論ファーストの文章構造が必要です。" },
                { n: "05", t: "LLMsが読みやすい形式でない", b: "箇条書き・番号リスト・表・定義リストなど構造化されたフォーマットが不足しています。AIは整理された情報を引用しやすく、文章の塊よりも明確に区切られた形式が効果的です。" },
                { n: "06", t: "構造化データ未実装", b: "FAQPage・Article・Organization・PersonなどのSchema.orgが実装されていないため、AIがページの種類・著者・コンテンツ構造を正確に把握できません。機械可読な形式への変換が必要です。" },
                { n: "07", t: "専門性・権威性の明示がない", b: "コンテンツの根拠となる出典・参考文献・監修者情報が記載されていません。AI検索エンジンは一次資料への参照・専門家監修・公的機関との関連性を信頼性の根拠として重視します。" },
                { n: "08", t: "一次情報・独自調査がない", b: "既存の情報をまとめただけのコンテンツはAIにとって引用価値が低くなります。自社の調査データ・独自の見解・実際の事例・オリジナルの統計情報がないページは差別化が困難です。" },
                { n: "09", t: "AIに嫌われるコンテンツ（薄い・重複）", b: "情報量が少ない薄いコンテンツや他サイトと酷似した重複コンテンツはAI検索での引用を避けられます。独自価値のある情報を提供する「コンテンツの厚み」が不可欠です。" },
                { n: "10", t: "複数のAI検索エンジン対策の優先順位不明", b: "ChatGPT・Gemini・Perplexity・Claudeへの個別対策を同時に進めようとして施策が分散しています。ターゲットユーザーが主に使うAI検索エンジンを特定し、優先順位をつけた対策が必要です。" },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別のAI検索活用ポイント
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              業種によってAI検索で引用されやすいクエリの種類・必要なE-E-A-T情報・使用すべきスキーマが異なります。自社の業種に合った最適化のポイントを確認してください。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0" }}>
              {[
                { n: "01", industry: "飲食業", point: "レシピ・食材情報の引用対象として", detail: "「〇〇料理の作り方」「食材の栄養効果」などの情報収集クエリでAIに引用されやすいコンテンツが有効です。RecipeスキーマとFAQPageを組み合わせ、シェフや調理師資格保有者の監修情報を著者として明示します。" },
                { n: "02", industry: "医療・健康", point: "YMYL領域でのE-E-A-T重要性", detail: "医師・薬剤師などの有資格者による監修が必須です。「〇〇の症状」「〇〇の治療法」などの検索クエリに対して医師が明確に回答するコンテンツを整備し、MedicalConditionスキーマで構造化します。" },
                { n: "03", industry: "法律・税務", point: "専門家による信頼性確保", detail: "「相続税の申告期限」「労働問題の対処法」などの専門知識クエリで引用されるために、弁護士・税理士・司法書士の資格情報を構造化して掲載します。判例・法令への参照リンクが信頼性を高めます。" },
                { n: "04", industry: "不動産", point: "地域市場情報・相場データ", detail: "「〇〇市の不動産相場」「マンション購入の注意点」などのクエリで有効です。地域別の独自市場データ・成約事例・価格推移を一次情報として掲載し、宅建士などの資格情報をPersonスキーマで構造化します。" },
                { n: "05", industry: "教育", point: "学習コンテンツ・試験情報", detail: "「〇〇の勉強方法」「〇〇資格の難易度」など学習者の情報収集クエリで有効です。課目・学習ロードマップ・合格実績をCourseスキーマとFAQPageで整備し、教員・講師の指導経験を著者情報として明示します。" },
                { n: "06", industry: "IT・SaaS", point: "技術情報・比較コンテンツ", detail: "「〇〇ツールの使い方」「〇〇vs〇〇の比較」など技術・ソフトウェア関連クエリで引用されやすいです。エンジニアや技術者による執筆・コードサンプル・実測データを含むコンテンツが権威性を高めます。" },
                { n: "07", industry: "ファッション・美容", point: "トレンド・ハウツーコンテンツ", detail: "「〇〇スタイルの作り方」「スキンケアの順番」などのハウツー系クエリで有効です。スタイリストや美容師の資格・経験年数をPersonスキーマで明示し、季節トレンドを定期更新して最新性を保ちます。" },
                { n: "08", industry: "旅行・地域", point: "観光・グルメ情報の引用対象", detail: "「〇〇の観光スポット」「〇〇のおすすめグルメ」などの地域情報クエリで引用されやすいです。地域の一次情報・訪問レポート・地元情報をTouristAttractionスキーマとLocalBusinessスキーマで構造化します。" },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              実装・改善フロー
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              AIO対策は現状診断から始まり、コンテンツ改善・技術実装・モニタリングまで10のステップで進めます。各ステップを順番に実施することで、AI検索エンジンに引用されるための基盤を確実に構築できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "AI検索の仕組みを理解する", b: "ChatGPT・Gemini・Perplexity・Claudeそれぞれのデータソース・クローラー・引用基準を把握します。共通対策と個別対策を整理し、全体の施策地図を作成します。" },
                { n: "02", t: "対応すべきAI検索エンジンの選定", b: "自社のターゲット顧客が主に利用するAI検索エンジンを特定します。BtoBとBtoC、年齢層、業種によって利用AIが異なるため、優先度を絞って対策リソースを集中させます。" },
                { n: "03", t: "現状コンテンツ評価", b: "既存コンテンツをE-E-A-T・構造化データ・回答型ライティングの観点で棚卸しします。AI検索に引用されやすいページと課題のあるページを仕分けして改善優先度を決定します。" },
                { n: "04", t: "E-E-A-T向上計画の策定", b: "著者情報の整備・会社情報の充実・実績・資格・メディア掲載情報の追加計画を立てます。特に権威性が求められるYMYL領域では専門家監修の体制を整えます。" },
                { n: "05", t: "構造化データの実装", b: "FAQPage・Article・Organization・Personなど必要なSchema.orgを実装します。Google Search Consoleのリッチリザルトテストとschema.org Validatorで正常認識を確認します。" },
                { n: "06", t: "llms.txtの設置", b: "ウェブサイトのルートディレクトリにllms.txtを設置し、サイトの専門領域・重要ページ・著者情報・AIに参照してほしいコンテンツの案内を記述します。AIクローラーへのサイト説明書として機能します。" },
                { n: "07", t: "回答型コンテンツへのリライト", b: "既存コンテンツを結論ファースト構成に書き直します。見出しをQ&A形式に変更し、箇条書き・番号リスト・表を活用してAIが引用しやすい構造に整えます。" },
                { n: "08", t: "著者情報の整備", b: "全コンテンツに著者情報を追加し、PersonスキーマとAuthorスキーマで構造化します。著者プロフィールページを作成し、資格・経歴・専門分野・SNSアカウントへのリンクを設置します。" },
                { n: "09", t: "モニタリングツールの設定", b: "Google Analytics 4でAI検索エンジンからのリファラー流入を計測する設定を行います。対象キーワードでの各AI検索エンジンの回答に自社が登場するか定期確認する体制を整えます。" },
                { n: "10", t: "月次PDCAサイクルの確立", b: "月次でAI検索経由の流入数・ブランド言及率・引用コンテンツ数を評価します。パフォーマンスの低いコンテンツの改善と新規コンテンツの企画を繰り返すPDCAを継続します。" },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              AIO対策の効果を正しく把握するには、AI検索エンジン固有の計測指標と従来のオーガニック指標を組み合わせてモニタリングすることが重要です。月次でレビューすることで改善サイクルを回せます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "AI検索エンジンからの参照流入数", where: "Google Analytics 4", b: "chatgpt.com・perplexity.ai・gemini.google.comなどのリファラードメインからの流入数を月次で追跡します。AIO施策の直接的な成果指標として最も重要なKPIです。" },
                { n: "02", t: "ブランド名のAI言及率", where: "手動確認 / AIモニタリングツール", b: "対象クエリに対して各AI検索エンジンが自社ブランドを言及する割合を計測します。競合との比較も行い、AI検索における認知度シェアを把握します。" },
                { n: "03", t: "E-E-A-Tスコア評価", where: "専用診断ツール / 手動審査", b: "著者情報・会社情報・構造化データ・被リンクなどE-E-A-T要素の充足度を定量スコアで評価します。改善施策の前後で比較し、権威性向上の進捗を管理します。" },
                { n: "04", t: "引用されたコンテンツ数", where: "手動確認 / AIモニタリングツール", b: "各AI検索エンジンで引用・推薦されたコンテンツページの数を把握します。どのコンテンツが最も引用されているかを分析し、成功パターンを他ページに横展開します。" },
                { n: "05", t: "構造化データ実装率", where: "Google Search Console / schema.org Validator", b: "全コンテンツページに対するSchema.org実装済みページの割合を追跡します。リッチリザルトのエラー数・警告数を定期確認し、実装品質を維持します。" },
                { n: "06", t: "オーガニック流入数推移", where: "Google Analytics 4 / Search Console", b: "AIO対策の基盤強化はオーガニック検索流入にも影響します。AI検索経由と合算した全オーガニック流入数の推移を確認し、総合的な集客効果を評価します。" },
                { n: "07", t: "問い合わせ数（AI検索経由）", where: "Google Analytics 4（コンバージョン計測）", b: "AI検索エンジンからの流入が問い合わせ・資料請求・購入などのコンバージョンにつながっているかを計測します。AIO施策のビジネスROIを把握するための最終的な成果指標です。" },
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

        {/* AI Search Engines Comparison */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>AI Engines</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "12px" }}>
              主要AI検索エンジンの特徴と対策の違い
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.9", maxWidth: "600px", marginBottom: "40px" }}>
              各AI検索エンジンはデータソース・クローラー・引用基準が異なります。全体共通の基盤を整えた上で、各エンジン固有の対策を行います。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                {
                  t: "Google AI Overview",
                  b: "Googleの独自クローラーとインデックスを使用。検索結果最上部に表示されるため露出効果が高い。E-E-A-T・構造化データ・Core Web Vitalsが引用確率に直結します。",
                },
                {
                  t: "ChatGPT（ウェブ検索）",
                  b: "BingのインデックスとOpenAI独自クローラーを併用。llms.txtへの対応・Bing Search Consoleへの登録・E-E-A-T情報の明示が有効です。",
                },
                {
                  t: "Perplexity AI",
                  b: "BingとYouを主なデータソースとして使用。引用元URLを表示するため被リンクと権威性が重要。リアルタイムウェブ検索のため最新情報の更新が効果的です。",
                },
                {
                  t: "Google Gemini",
                  b: "GoogleのBardから進化したAI。Google検索・Googleサービスとの統合が深く、Googleビジネスプロフィール・構造化データ・E-E-A-Tの基準に準拠した対策が有効です。",
                },
                {
                  t: "Claude（Anthropic）",
                  b: "Anthropicの独自クローラーと学習データを使用。権威性・専門性・事実確認のしやすさを重視する傾向があります。専門家監修・公的情報への参照リンクが有効です。",
                },
                {
                  t: "Microsoft Copilot",
                  b: "BingのインデックスとOpenAIのモデルを組み合わせたAI。Bing Webmaster Toolsへの登録・Bing Search Engine Optimization・構造化データが対策の基盤となります。",
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

        {/* Before / After */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Before / After</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              AIO対策前・対策後の変化
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              AIO対策を実施した企業に共通する変化を対策前・対策後で整理しました。対策前の状況に心当たりのある項目が多いほど、改善による効果を大きく見込めます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", maxWidth: "760px" }}>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", color: "#9CA3AF", marginBottom: "16px" }}>BEFORE — 対策前</p>
                {[
                  "AI検索エンジンからの流入がゼロに近い",
                  "ブランド名がAI回答に登場しない",
                  "E-E-A-T情報が整備されていない",
                  "構造化データが部分的または未実装",
                  "コンテンツが回答型になっていない",
                  "llms.txtが設置されていない",
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
                  "複数のAI検索エンジンから安定的に流入",
                  "業界関連クエリでブランドが定期言及",
                  "著者・会社情報がスキーマで構造化",
                  "全主要スキーマを完全実装",
                  "結論ファーストの回答型コンテンツを整備",
                  "llms.txtとrobots.txtが最適化済み",
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

        {/* FAQ intro callout */}
        <section style={{ background: "#F9F8F5", padding: "48px 0 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              以下のFAQでは、AI検索対策（AIO）についてお客様からよくいただくご質問にお答えします。仕組みの基本から費用・期間・業種別の注意点まで網羅していますので、ご検討の参考にしてください。
            </p>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI検索対策（AIO）のご相談"
          body="ChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンに引用されるためのコンテンツ改善・構造化データ実装・E-E-A-T強化をご支援します。AI検索時代の集客対策をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
