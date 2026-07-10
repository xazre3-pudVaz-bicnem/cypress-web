import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "LLM最適化｜GPT・Gemini・ClaudeへのAI情報最適化｜株式会社サイプレス",
  description: "LLM最適化でGPT・Gemini・Claudeが正確に認識する企業情報を構築。AIO対策の専門会社サイプレスが大規模言語モデルへの情報浸透を実施します。",
  keywords: ["LLM最適化", "大規模言語モデル最適化", "AIO対策", "AI情報最適化", "エンティティ最適化", "ナレッジグラフ"],
  openGraph: {
    title: "LLM最適化｜GPT・Gemini・ClaudeへのAI情報最適化",
    description: "LLM最適化でGPT・Gemini・Claudeが正確に認識する企業情報を構築。AIO対策の専門会社サイプレスが実施します。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/llm-optimization" },
};

const faqItems = [
  {
    q: "LLM最適化はSEOと何が違いますか？",
    a: "SEOはページのランキングを上げることを目的としますが、LLM最適化はAIの学習データ・認識精度を最適化することを目的とします。ただし、SEOで権威性を高めることがLLM最適化にも寄与するため、両者は補完関係にあります。",
  },
  {
    q: "LLM最適化の効果を計測する方法はありますか？",
    a: "各AIへのクエリテストによる引用確認、エンティティ認識テスト、ナレッジパネルの表示確認などで計測します。定期的にGPT・Gemini・Claudeに自社名を含む質問を入力し、回答内容を検証します。",
  },
  {
    q: "GPT・Gemini・Claudeで自社が言及されているか確認できますか？",
    a: "はい。業界関連クエリ（「○○業界で信頼できる会社は？」「東京の〇〇専門会社は？」等）を各AIに投げることで確認できます。サイプレスでは月次でモニタリングを実施しレポートを提出します。",
  },
  {
    q: "LLM最適化に必要な期間はどのくらいですか？",
    a: "LLMの学習サイクルはモデルによって異なり、即時の効果は見込みにくいです。ナレッジグラフへの登録・権威サイトへの掲載などの施策は3〜6ヶ月単位で効果が現れます。中長期の取り組みとして計画することが重要です。",
  },
  {
    q: "LLM最適化とコンテンツマーケティングはどう組み合わせますか？",
    a: "専門性の高いコンテンツを継続的に発信し、それが権威サイトに引用・掲載されることでLLMの学習データに浸透します。コンテンツマーケティングはLLM最適化の重要な一部です。",
  },
  {
    q: "llms.txtとLLM最適化は別の施策ですか？",
    a: "関連しますが目的が異なります。llms.txtはAIクローラーに自社サイトの情報を案内するファイルであり、LLM最適化は学習済みLLMに自社が「信頼できる企業」として認識されるための包括的な施策です。両方を組み合わせることを推奨します。",
  },
  {
    q: "中小企業でもLLM最適化の効果はありますか？",
    a: "はい。ニッチな専門分野では中小企業でも効果が出やすいです。特定の地域・業種・サービスに特化した権威性の高いコンテンツを発信することで、その分野のLLM最適化を実現できます。",
  },
  {
    q: "LLMの学習データに自社情報を含めることはできますか？",
    a: "直接的にLLMの学習データを制御することはできませんが、権威性の高いWebサイト・百科事典・メディアへの掲載・プレスリリース配信によって間接的に影響を与えることができます。",
  },
  {
    q: "E-E-A-Tはどのように評価されますか？",
    a: "Googleは経験（Experience）・専門性（Expertise）・権威性（Authoritativeness）・信頼性（Trustworthiness）の4要素で評価します。著者プロフィールの充実・実績の掲載・外部メディアへの掲載・レビューの獲得が効果的です。",
  },
  {
    q: "被リンクはLLM最適化に有効ですか？",
    a: "はい。権威性の高いサイトからの被リンクは、LLMが学習する際に「信頼される情報源」として認識されやすくなります。特に業界専門メディア・大学・政府サイト・新聞社からのリンクが効果的です。",
  },
  {
    q: "自社のコンテンツがLLMに引用されているか確認する方法は？",
    a: "ChatGPT・Gemini・Claudeなどに「業界名 + 信頼できる企業」「サービス名 + おすすめ」などのクエリを入力し、自社が言及されているか定期的に確認します。複数のクエリパターンで月次確認することを推奨します。",
  },
  {
    q: "プレスリリースはLLM最適化に効果的ですか？",
    a: "効果的です。PR TIMES・共同通信などの権威あるプレスリリース配信サービスへの掲載は、LLMの学習データに取り込まれやすいコンテンツです。ニュース性の高いトピックで定期配信することを推奨します。",
  },
  {
    q: "Googleナレッジグラフへの登録はどのように行いますか？",
    a: "Googleナレッジグラフへの直接申請はできません。Wikipediaの記事作成・Google ビジネスプロフィールの充実・SNSプロフィールの整備・権威サイトへの掲載・構造化データの実装を組み合わせることで登録確率が高まります。",
  },
  {
    q: "ナレッジパネルに自社情報が表示されるにはどうすればいいですか？",
    a: "事業規模・メディア露出・Webの権威性が一定水準を超えるとGoogleが自動生成します。Googleビジネスプロフィールの完成度・公式SNSのフォロワー数・業界メディアへの掲載数が主要な要素です。",
  },
  {
    q: "LLM最適化に有効なコンテンツ形式はありますか？",
    a: "「〇〇とは？」「〇〇の選び方」「〇〇の比較」など、LLMが引用しやすい解説型コンテンツが有効です。定義・手順・比較・統計データを含む構造化されたコンテンツはLLMに参照されやすい傾向があります。",
  },
  {
    q: "業界団体への加入はLLM最適化に役立ちますか？",
    a: "はい。業界団体のWebサイトは権威性が高く、会員情報として掲載されることでLLMの学習データへの浸透に寄与します。業界団体のWebサイト・メディアへの掲載は積極的に狙うべき施策です。",
  },
  {
    q: "Perplexity・BingのAIチャットにも最適化できますか？",
    a: "はい。Perplexityは現在のWebを参照し回答を生成するため、SEOで上位表示されているコンテンツが引用されやすいです。BingのCopilotはMicrosoft検索結果を参照するため、Bing SEOも並行して対策することを推奨します。",
  },
  {
    q: "競合他社がLLMに引用されている場合の対策は？",
    a: "競合が言及されているクエリを分析し、競合が持つコンテンツ・被リンク・メディア掲載を調査します。同等以上の権威性コンテンツを作成し、同じ情報源からの掲載を目指すことが基本戦略です。",
  },
  {
    q: "多言語サイトでのLLM最適化はどう行いますか？",
    a: "各言語でのE-E-A-T強化が必要です。日本語LLMには日本語コンテンツ・日本のメディア掲載が有効で、英語圏への展開を目指す場合は英語コンテンツでの権威性構築が必要です。hreflang属性の正確な実装も重要です。",
  },
  {
    q: "LLM最適化の費用感はどのくらいですか？",
    a: "施策の範囲・業種・競合状況によって異なります。コンテンツ作成・プレスリリース配信・構造化データ実装などを含む月次サポートプランと、初期の一括実装プランをご用意しています。まずは無料相談でお気軽にご確認ください。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTでの引用戦略" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleエンティティ登録" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org全般" },
  { href: "/aio/llms-txt", label: "llms.txt設置", desc: "AIクローラー向けファイル" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "AI認識の最適化" },
  { href: "/aio/eeat", label: "E-E-A-T強化", desc: "専門性・権威性の向上" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO施策" },
  { href: "/seo/link-building", label: "被リンク獲得", desc: "外部リンク戦略" },
  { href: "/seo", label: "SEO対策", desc: "SEO対策の全体像" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "コンテンツ制作・発信" },
  { href: "/services/pr", label: "プレスリリース支援", desc: "メディア掲載支援" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療業界のAIO対策" },
  { href: "/industry/legal", label: "士業・法律事務所向け", desc: "法律業界のAIO対策" },
  { href: "/industry/finance", label: "金融・保険向け", desc: "金融業界のAIO対策" },
  { href: "/industry/it", label: "IT・SaaS向け", desc: "IT業界のAIO対策" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリア対応" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリア対応" },
  { href: "/blog/llm-optimization-guide", label: "LLM最適化ガイド", desc: "実践解説記事" },
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
              <span style={{ color: "#374151" }}>LLM最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              LLM Optimization
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
              LLM最適化｜GPT・Gemini・Claudeに<br />認識される企業へ
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
              LLM最適化（Large Language Model Optimization）とは、GPT-4・Gemini・Claude・Llamaなどの大規模言語モデルが学習・参照する情報に対して、自社情報が正確・肯定的に含まれるよう最適化する施策です。AI時代の新しい企業ブランディング戦略です。
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
              AIに「その分野の信頼できる企業」として認識されるためには、権威性の高い情報源への掲載・ナレッジグラフへの登録・構造化データの整備・プレスリリースの継続発信を組み合わせる必要があります。
            </p>
          </div>
        </section>

        {/* ============================================================
            Hero Image
        ============================================================ */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="LLM最適化・大規模言語モデルへのAI情報最適化"
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
                ChatGPT・Gemini・Claudeに「信頼できる企業」として引用されるには、<br />
                権威性の情報源への露出と構造化データの整備が鍵です。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            Why It Matters
        ============================================================ */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Why It Matters
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#ffffff",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              LLM最適化が必要な4つの理由
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "24px",
                maxWidth: "900px",
              }}
            >
              {[
                {
                  t: "AI検索が主要な情報収集手段になっている",
                  b: "ChatGPT・Perplexity等のAI検索の利用が急増し、AIが「推薦する企業」かどうかが集客に直結しはじめています。",
                },
                {
                  t: "AIは権威ある情報源を優先して参照する",
                  b: "LLMは学習時に権威性・信頼性を判断します。業界メディアへの掲載や構造化データが認識精度を左右します。",
                },
                {
                  t: "競合に先行することが優位性になる",
                  b: "LLM最適化に取り組む企業はまだ少数です。今から着手することで、AI時代の検索において競合より優位な立場を確立できます。",
                },
                {
                  t: "SEOとの相乗効果が高い",
                  b: "権威性を高める施策はSEOとLLM最適化の両方に効きます。コンテンツ・被リンク・構造化データの整備が同時に機能します。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>
                    {item.b}
                  </p>
                </div>
              ))}
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
                "LLM最適化とは何か、SEOとどう違うのかを体系的に理解できる",
                "ChatGPT・Gemini・Claudeが情報を参照・引用する仕組みと判断基準",
                "自社がAI検索で言及されているか今日から確認できる方法",
                "LLM最適化のための具体的な実装ステップ10項目と優先順位",
                "業種別（IT・医療・法律・金融・製造など8業種）の最適化ポイント",
                "効果測定に使うべきKPI 7項目と計測場所・評価方法",
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
            LLM Strategy Section (Image + Text)
        ============================================================ */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "360px",
                }}
              >
                <Image
                  src="/1.jpg"
                  alt="LLM最適化・チャートを確認するグループ"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  LLM Strategy
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 900,
                    fontSize: "clamp(20px,2.8vw,26px)",
                    color: "#0d1b2a",
                    marginBottom: "24px",
                  }}
                >
                  LLM最適化で得られる効果
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                    GPT・Gemini・Claudeなどの大規模言語モデルは、権威性の高い情報源を優先して学習・参照します。業界メディアへの掲載・プレスリリースの定期発信・Googleナレッジグラフへの登録を組み合わせ、AIの学習データに自社情報を効果的に浸透させます。
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                    構造化データの整備により、AIが企業情報・サービス・専門分野を正確に理解できる状態を作ります。エンティティとしての認識精度が高まることで、AI検索での推薦確率が向上します。
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                    LLM最適化はSEOとの相乗効果が高く、権威性を高める施策は従来のGoogle検索順位にも好影響を与えます。長期的なデジタルブランディング戦略の核として位置付けます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            Section B: よくある課題と原因
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
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
                  t: "LLMがどの情報を学習・参照するか理解していない",
                  b: "LLMは学習データとして権威性の高いWebコンテンツを参照しますが、その仕組みを理解せずに対策しても効果が出ません。まずLLMの情報取得メカニズムを把握することが出発点です。",
                },
                {
                  n: "02",
                  t: "自社がLLMに言及されているか確認したことがない",
                  b: "多くの企業がAI検索での自社言及状況をモニタリングしていません。定期的なクエリテストによる確認がなければ、現状の課題を特定することすらできません。",
                },
                {
                  n: "03",
                  t: "トレーニングデータへの影響を考えていない",
                  b: "LLMの学習データはWeb上の権威あるコンテンツから収集されます。自社のコンテンツが学習データに含まれるよう権威性を高める戦略が必要ですが、多くの企業がこの視点を持っていません。",
                },
                {
                  n: "04",
                  t: "コンテンツの信頼性スコアが低い",
                  b: "LLMは情報源の信頼性を評価した上で学習します。引用数・被リンク数・ドメイン権威性が低いコンテンツはLLMに参照されにくい傾向があります。信頼性指標の計測と改善が必要です。",
                },
                {
                  n: "05",
                  t: "著者情報・専門性の証明がない",
                  b: "E-E-A-Tの観点から、誰が書いたコンテンツかが重要です。著者プロフィールが不明・資格・実績の記載がない場合、LLMはその情報の専門性を低く評価する可能性があります。",
                },
                {
                  n: "06",
                  t: "一次情報・独自調査データがない",
                  b: "自社独自の調査・データ・事例に基づいたコンテンツはLLMに引用されやすいですが、他社サイトの情報を再編集したコンテンツは参照優先度が低くなります。独自の一次情報の発信が不可欠です。",
                },
                {
                  n: "07",
                  t: "引用しやすい文章構造でない",
                  b: "LLMが情報を参照・引用しやすい構造（定義・手順・リスト・Q&A）が整っていないと、コンテンツ自体の価値があっても引用されません。文章構造の見直しが必要です。",
                },
                {
                  n: "08",
                  t: "被リンク・メディア掲載が少ない",
                  b: "権威性の高いサイトからの被リンクと業界メディアへの掲載は、LLMが「信頼できる情報源」として認識する重要な指標です。外部からの評価が不足しているとLLM最適化の限界があります。",
                },
                {
                  n: "09",
                  t: "LLMのコンテキストウィンドウを意識していない",
                  b: "LLMは長文より要点が明確で構造化された文章を参照しやすい傾向があります。見出し・箇条書き・短い段落を意識した構造化が重要ですが、多くのコンテンツがこれを無視しています。",
                },
                {
                  n: "10",
                  t: "定期的なコンテンツ更新がない",
                  b: "LLMは最新情報を学習しますが、更新が止まったコンテンツは参照優先度が低下します。継続的な情報更新・加筆・リライトなしにLLM最適化の効果を維持することはできません。",
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
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
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
                  point: "技術文書・APIドキュメントのLLM最適化",
                  detail:
                    "技術ドキュメントはLLMに参照されやすいコンテンツです。API仕様・チュートリアル・ユースケースを構造化し、開発者コミュニティへの掲載を強化することで、技術系クエリでの引用率が高まります。",
                },
                {
                  industry: "医療・クリニック",
                  point: "EBM・ガイドラインに準拠した信頼性情報",
                  detail:
                    "医療情報はE-E-A-Tが特に厳格に評価されます。医師監修の明示・エビデンスへの参照・学会ガイドラインに準拠した記述を徹底し、医療専門メディアへの掲載を目指すことが重要です。",
                },
                {
                  industry: "法律・士業",
                  point: "条文・判例を引用した解説記事",
                  detail:
                    "法律・判例・条文を引用した専門解説コンテンツは、LLMに高権威として認識されやすいです。弁護士・司法書士などの資格情報を著者プロフィールに明示し、法律専門メディアへの寄稿が有効です。",
                },
                {
                  industry: "金融・投資",
                  point: "数値・データに基づく分析記事",
                  detail:
                    "金融情報は信頼性が最重視されます。金融庁登録番号・資格情報を明示し、統計データ・公的機関データを根拠として引用した分析コンテンツが、金融系クエリでのLLM引用を促進します。",
                },
                {
                  industry: "教育・スクール",
                  point: "構造化された学習コンテンツ",
                  detail:
                    "学習ロードマップ・カリキュラム・習得スキルの構造化されたコンテンツは、LLMが学習・教育系クエリで参照しやすい形式です。実績・卒業生データを含む権威性コンテンツが効果的です。",
                },
                {
                  industry: "製造・BtoB",
                  point: "技術仕様・事例の詳細文書",
                  detail:
                    "製品仕様書・技術資料・導入事例の詳細な文書化は、BtoB分野でのLLM最適化に有効です。業界団体サイトへの掲載・展示会プレスリリース・業界誌への掲載を組み合わせます。",
                },
                {
                  industry: "コンサルティング",
                  point: "フレームワーク・事例の解説",
                  detail:
                    "独自フレームワーク・業界事例・研究データを発信することで、コンサルティング系クエリでの引用率が高まります。白書・調査レポートの定期発行が権威性構築に特に効果的です。",
                },
                {
                  industry: "メディア・出版",
                  point: "権威性の高いオリジナルコンテンツ",
                  detail:
                    "独自調査・インタビュー・深掘り解説記事はLLMに最も引用されやすいコンテンツ形式です。著者の専門性を明示し、他メディアからの引用・転載を促進するコンテンツ設計が重要です。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
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
            主要施策
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation
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
              LLM最適化の主要施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "学習データへの情報浸透",
                  b: "権威性の高いメディア・百科事典・学術サイトへの情報掲載でLLMの学習データを最適化します。プレスリリース配信・業界メディアへの寄稿・ポッドキャスト出演などが有効です。",
                },
                {
                  n: "02",
                  t: "構造化データ・セマンティクス最適化",
                  b: "Schema.orgとセマンティックHTMLで、AIが情報を正確に理解できるよう整備します。Organization・Person・FAQPageなどのスキーマ実装が核となります。",
                },
                {
                  n: "03",
                  t: "ファクトチェック情報の整備",
                  b: "会社情報・実績・専門性に関する正確な情報を複数の権威ある情報源に展開します。Googleナレッジグラフと各種SNSプロフィールの整合性を保つことが重要です。",
                },
                {
                  n: "04",
                  t: "エンティティ最適化",
                  b: "企業・人物・サービスをGoogleのナレッジグラフに正確に登録し、AIの認識精度を高めます。sameAsプロパティでSNS・外部プロフィールを紐付けます。",
                },
                {
                  n: "05",
                  t: "E-E-A-T強化コンテンツの発信",
                  b: "経験・専門性・権威性・信頼性（E-E-A-T）を示すコンテンツを継続的に発信します。著者情報の明示・実績データの公開・専門家の監修が効果的です。",
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
                  t: "LLM参照状況の現状調査",
                  b: "ChatGPT・Gemini・Claudeなど主要LLMに対し、自社ブランド名・業界名・サービス名を含むクエリを投入し、現状の言及状況を記録します。競合との比較も同時に実施します。",
                },
                {
                  n: "02",
                  t: "引用されやすいコンテンツタイプの特定",
                  b: "現状のクエリテスト結果から、どの分野・形式のコンテンツが引用されているかを分析します。競合が引用されているコンテンツの共通パターンを特定し、自社に不足する要素を洗い出します。",
                },
                {
                  n: "03",
                  t: "E-E-A-T要素の強化計画",
                  b: "現状サイトのE-E-A-T評価を行い、不足している要素（著者情報・実績・監修者・外部評価）を洗い出します。改善の優先順位と期限を含む具体的な実施計画を策定します。",
                },
                {
                  n: "04",
                  t: "著者情報・専門資格の構造化",
                  b: "執筆者・監修者の専門資格・経歴・著作をstructured data（Person schema）で実装します。著者ページを作成し、外部SNS・プロフィールとの紐付け（sameAs）を行います。",
                },
                {
                  n: "05",
                  t: "一次情報コンテンツの作成",
                  b: "自社独自の調査・顧客データ・業界知見に基づいた一次情報コンテンツを制作します。LLMが引用しやすい定義・手順・Q&A・比較表の形式を活用し、専門性を明確に示します。",
                },
                {
                  n: "06",
                  t: "引用・参照しやすい文章構造へのリライト",
                  b: "既存コンテンツを、見出し・箇条書き・短い段落・強調表現を活用した構造化形式にリライトします。「〇〇とは」「〇〇の方法」「〇〇のメリット」など引用されやすいセクション構成に整えます。",
                },
                {
                  n: "07",
                  t: "被リンク獲得戦略",
                  b: "業界関連サイト・メディア・ポータルへのアプローチを実施し、権威性の高い被リンクを計画的に獲得します。競合の被リンク先を調査・分析し、同等以上の掲載を目指します。",
                },
                {
                  n: "08",
                  t: "メディア掲載・プレスリリース",
                  b: "PR TIMES・@Press・共同通信などのプレスリリース配信サービスを活用し、ニュース性の高いコンテンツを定期配信します。業界専門メディアへの寄稿・取材対応も積極的に行います。",
                },
                {
                  n: "09",
                  t: "llms.txt設置",
                  b: "AIクローラー向けに自社サービス・専門分野・重要ページを記述したllms.txtをサイトルートに設置します。AIが自社サイトの専門性と重要コンテンツを正確に理解できるよう設計します。",
                },
                {
                  n: "10",
                  t: "6ヶ月後の効果測定",
                  b: "施策開始から6ヶ月後に、LLM言及状況・被リンク数・メディア掲載数・ブランド検索量・問い合わせ数を計測し、施策の効果を検証します。結果を踏まえて次の改善サイクルに移行します。",
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
                  kpi: "LLM言及回数",
                  where: "主要AI検索（ChatGPT・Gemini・Claude・Perplexity）での手動クエリテスト",
                  detail:
                    "業界名・サービス名・地域名を含む代表クエリ10〜20件を月次で投入し、自社が言及されたクエリ数を記録します。前月比・競合比で評価します。",
                },
                {
                  n: "02",
                  kpi: "権威性被リンク数",
                  where: "Google Search Console / Ahrefs / SEMrush",
                  detail:
                    "ドメイン権威性（DA/DR）50以上のサイトからの被リンク数を月次計測します。業界専門メディア・大学・行政機関からのリンクは特に重要な指標です。",
                },
                {
                  n: "03",
                  kpi: "メディア掲載数",
                  where: "自社管理台帳 / Googleアラート",
                  detail:
                    "新聞・業界メディア・プレスリリース配信先での掲載数を月次集計します。掲載メディアの権威性と記事内容（肯定的かどうか）も評価に含めます。",
                },
                {
                  n: "04",
                  kpi: "コンテンツの被引用数",
                  where: "Ahrefs / Moz / 手動検索",
                  detail:
                    "自社コンテンツが他サイトから引用・リンクされた件数を計測します。引用元の権威性が高いほど、LLMへの影響が大きいと評価します。",
                },
                {
                  n: "05",
                  kpi: "E-E-A-Tスコア評価",
                  where: "サイト内部評価・外部ツール",
                  detail:
                    "著者情報の完成度・外部評価リンク数・レビュー数・資格情報の記載率を複合指標として定期評価します。Google品質評価ガイドラインに照らして採点します。",
                },
                {
                  n: "06",
                  kpi: "ブランド名の検索量推移",
                  where: "Google Search Console / Googleトレンド",
                  detail:
                    "自社ブランド名・代表者名・サービス名の指名検索数を月次追跡します。LLMで言及されることでブランド認知が高まり、指名検索の増加として現れます。",
                },
                {
                  n: "07",
                  kpi: "問い合わせ数（AI経由推定）",
                  where: "問い合わせフォーム / CRM / ヒアリング",
                  detail:
                    "「AIで調べて来た」「ChatGPTで見つけた」など、AI経由の流入を問い合わせ時にヒアリングし記録します。AI経由の問い合わせ数・割合を月次集計します。",
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
          heading="LLM最適化のご相談"
          body="GPT・Gemini・Claudeに正確に認識される企業情報の構築をサポートします。構造化データ実装・ナレッジグラフ登録・コンテンツ戦略をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
