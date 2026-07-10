import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI活用マーケティングとは｜生成AIで集客・業務効率を強化する方法｜株式会社サイプレス",
  description:
    "AI活用マーケティングの基礎から実践まで解説。ChatGPT・Claude等の生成AIを活用したコンテンツ制作・チャットボット・業務自動化・AIO対策まで体系的に網羅。東京葛飾区のAIマーケティング支援会社。",
  keywords: ["AI活用マーケティング", "生成AI マーケティング", "ChatGPT活用", "AIマーケティング", "AI業務効率化", "AIO対策", "AI検索対策"],
  openGraph: {
    title: "AI活用マーケティングとは｜生成AIで集客・業務効率を強化する方法｜株式会社サイプレス",
    description: "生成AIを活用したマーケティング実践ガイド。ChatGPT活用から業務自動化・AIO（AI検索）対策まで一貫解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "AI活用マーケティング", item: "https://www.cypress-all.co.jp/ai" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "AI活用マーケティングとは何ですか？", acceptedAnswer: { "@type": "Answer", text: "ChatGPT・Claude・Geminiなどの生成AIを活用して、マーケティング業務（コンテンツ制作・SEO・SNS・広告・分析）を効率化・高度化する取り組みです。" } },
        { "@type": "Question", name: "AI検索（ChatGPT・Perplexity等）で自社情報が引用されるには？", acceptedAnswer: { "@type": "Answer", text: "E-E-A-Tが高いコンテンツの充実、FAQ形式の豊富なコンテンツ、構造化データ（FAQPage・Organization）の実装、llms.txtの設置が有効です。" } },
      ],
    },
  ],
};

const aiAreas = [
  { href: "/ai/content", title: "AIコンテンツ制作", desc: "SEO記事・SNS投稿・コピーをAI活用で効率化する方法" },
  { href: "/ai/automation", title: "業務自動化", desc: "繰り返し業務をAIとノーコードツールで自動化" },
  { href: "/ai/chatbot", title: "チャットボット構築", desc: "問い合わせ対応・FAQ回答を24時間自動化" },
  { href: "/ai/workflow", title: "AIワークフロー設計", desc: "n8n・Zapier・MakeとAIを組み合わせた業務設計" },
];

const aiBusinessImpacts = [
  {
    n: "01",
    t: "コンテンツ制作の大幅効率化",
    b: "SEO記事の構成案・下書き・SNS投稿文・メールマガジン文案をAIが生成します。制作時間を大幅に削減しながら、人間が専門知識・一次情報・独自視点を加えることで質の高いコンテンツを量産できます。マーケター1人が5人分の生産性を発揮できる環境を構築します。",
  },
  {
    n: "02",
    t: "24時間対応のチャットボットで問い合わせを自動化",
    b: "AIチャットボットを導入することで、営業時間外の問い合わせ対応・よくある質問への自動回答・商品案内・予約受付を自動化します。リード情報を自動収集し、担当者への通知まで一貫して設計します。問い合わせ数が多い企業や夜間対応が必要な店舗で特に効果を発揮します。",
  },
  {
    n: "03",
    t: "業務ワークフローの自動化で工数削減",
    b: "n8n・Zapier・MakeなどのノーコードツールとAIを組み合わせ、レポート集計・データ入力・メール送信・SNS投稿スケジュールなどの繰り返し業務を自動化します。マーケティング担当者が戦略・クリエイティブ・施策判断などの高付加価値業務に集中できる環境を作ります。",
  },
  {
    n: "04",
    t: "AI検索（AIO）への対応で新規流入を獲得",
    b: "ChatGPT・Perplexity・GeminiなどのAI検索エンジンは、質問への回答として特定のWebサイト・ページを引用します。この引用を獲得するAIO（AI Optimization）対策として、E-E-A-T強化・FAQ充実・構造化データ実装・llms.txtの設置が重要です。AIO対策で新たな集客チャネルを確立します。",
  },
  {
    n: "05",
    t: "データ分析・意思決定のAI支援",
    b: "Google Analytics・サーチコンソール・MEOデータなどの分析レポート作成をAIが支援します。数値から施策提案までを自動化し、経験の少ない担当者でも精度の高いマーケティング判断ができるようになります。月次レポートの作成工数を大幅に削減します。",
  },
];

const aiSeoAio = [
  {
    title: "AI × SEO",
    body: "AIを使ったキーワードリサーチ・コンテンツ構成立案・タイトル最適化で作業効率を向上させます。ただし、AI生成コンテンツをそのまま公開することは避け、専門知識・一次情報・独自視点を人間が必ず追加します。「AIが書いたかのような」薄いコンテンツはGoogleの評価が下がるリスクがあるため、品質保証プロセスが必須です。",
  },
  {
    title: "AI × AIO（AI検索対策）",
    body: "ChatGPT・Perplexity・Gemini等のAI検索が普及し、検索行動が「キーワード検索」から「質問検索」へ変化しています。AIO対策ではFAQの充実・著者情報・組織情報の構造化・LocalBusiness Schema・FAQPage Schemaの実装・llms.txtの設置が重要です。AI検索からの引用を獲得することが新たな集客手段になっています。",
  },
  {
    title: "AI × 業務効率化",
    body: "コンテンツ生成・メール文案・議事録作成・チャットボット対応・SNS投稿スケジュールなどの繰り返し業務をAIで効率化します。マーケティングチームの生産性向上により、限られたリソースでより多くの施策を展開できます。AIに任せる業務と人間が担当する業務の境界を明確にした体制設計が成功の鍵です。",
  },
];

const aiIndustryCases = [
  { industry: "飲食店・カフェ", use: "AIでメニュー説明文・季節投稿・口コミ返信文案を効率化。チャットボットで予約受付・アレルギー質問への自動回答を実現。" },
  { industry: "美容室・サロン", use: "AIでスタイル提案文・Instagram投稿キャプション・ブログ記事を量産。チャットボットで新規カウンセリング情報を事前収集。" },
  { industry: "クリニック・整骨院", use: "医療広告ガイドラインに沿った患者教育コンテンツをAI補助で制作。FAQ自動回答チャットボットで受付電話の件数を削減。" },
  { industry: "不動産", use: "物件説明文・エリア情報ページをAI補助で効率制作。顧客の質問にAIが24時間回答し、担当者への引き継ぎを自動化。" },
  { industry: "士業・コンサル", use: "専門知識の記事コンテンツをAI補助で量産。AIO対策でAI検索からの引用を獲得し、新規顧客獲得チャネルを拡大。" },
  { industry: "EC・小売", use: "商品説明文・レビュー返信・メールマーケティング文案をAIで自動生成。パーソナライズドな顧客コミュニケーションを低コストで実現。" },
];

const aiMistakes = [
  { t: "AI生成コンテンツをそのまま公開する", b: "ChatGPTが生成した文章を確認せずに公開するとE-E-A-Tが低く評価され、SEO順位が下がるリスクがあります。専門知識・具体例・一次情報を必ず人間が追加・編集してから公開します。" },
  { t: "AIOとSEOを別々に考える", b: "AI検索への対策（AIO）と従来のSEOは別の取り組みではありません。E-E-A-T強化・FAQ充実・構造化データ実装はSEOとAIOの両方に効果があります。統合した戦略が効率的です。" },
  { t: "AIへの業務依存が高くなりすぎる", b: "AIはあくまでツールです。最終的な品質確認・戦略判断・人間関係・創造的な判断は人間が担当します。AIへの依存が高くなると、品質低下やブランド毀損のリスクが生じます。" },
  { t: "プロンプト設計を軽視する", b: "AIの出力品質はプロンプト（指示文）の品質で決まります。「良いプロンプトを書く技術」はAI活用の核心的なスキルです。業務別のプロンプトライブラリを整備することで、チーム全体の生産性が向上します。" },
];

const faqItems = [
  {
    q: "AI活用マーケティングとは何ですか？",
    a: "ChatGPT・Claude・Geminiなどの生成AIを活用して、マーケティング業務（コンテンツ制作・SEO・SNS・広告・分析）を効率化・高度化する取り組みです。AIを活用することで少ないリソースで多くのコンテンツを制作できるようになり、マーケティング担当者がより戦略的な業務に集中できるようになります。",
  },
  {
    q: "AI活用でSEO対策は変わりますか？",
    a: "変わります。AIを使ったコンテンツ生成の普及により、コンテンツの質（一次情報・専門性・E-E-A-T）がより重要になっています。また、ChatGPT・Gemini等のAI検索での引用を獲得するAIO（AI Optimization）が新たな集客チャネルとして重要になっています。SEOとAIOを統合した戦略が現代のマーケティングの基本です。",
  },
  {
    q: "生成AIでコンテンツを量産してもSEOに有効ですか？",
    a: "AIで生成したままの薄いコンテンツを量産することはSEOにとって逆効果の場合があります。AIは構成・下書き・アイデア出しには有効ですが、専門知識・一次情報・独自の視点を人間が追加することで、AIにはない価値を持つコンテンツが生まれます。質を保証した上でのAI活用が重要です。",
  },
  {
    q: "AI検索（ChatGPT・Perplexity等）で自社情報が引用されるには？",
    a: "E-E-A-Tが高いコンテンツ（専門性・一次情報・著者情報の明示）、FAQ形式のコンテンツの充実、構造化データ（FAQPage・Organization等）の実装、llms.txtの設置が有効です。AI検索は「信頼できる情報源」からの引用を優先する傾向があります。",
  },
  {
    q: "チャットボットを導入するとどんなメリットがありますか？",
    a: "24時間365日の問い合わせ対応・FAQへの自動回答・リード情報の自動収集・担当者への問い合わせ内容の振り分けなどが主なメリットです。特に問い合わせ件数が多い・営業時間外の問い合わせが多いビジネスで効果的です。",
  },
  {
    q: "AIを活用した業務自動化はどこから始めればいいですか？",
    a: "まず「繰り返し行っている業務」をリストアップし、AIで代替・支援できる業務を特定します。コンテンツ生成・メール文案・議事録作成・レポート集計などが始めやすい領域です。最初からフル自動化を目指すより、特定業務の効率化から始めて少しずつ範囲を広げることをお勧めします。",
  },
  {
    q: "AIを使うと仕事が奪われますか？",
    a: "特定の繰り返し業務はAIが代替しますが、戦略立案・創造的な判断・人間関係・一次情報の収集・品質管理などはAIが苦手な領域です。AIを活用してルーティン業務を効率化し、より高付加価値な仕事に集中できる環境を作ることが、AIと人間の協働の正しいあり方です。",
  },
  {
    q: "AI活用支援のサービスについて詳しく教えてください。",
    a: "サイプレスでは、AI活用コンサルティング・プロンプト設計支援・チャットボット構築・ワークフロー自動化・AIコンテンツ制作体制の構築・AI活用研修を提供しています。SEO・AIO・MEOとの統合支援も可能です。まずは無料相談でご状況をお聞かせください。",
  },
  {
    q: "llms.txtとは何ですか？",
    a: "llms.txt（Large Language Models Text）とは、AIに自社の情報を正確に学習・参照させるためのテキストファイルです。ウェブサイトのルートディレクトリに設置し、企業情報・サービス内容・専門分野・提供地域などをAIが読みやすい形式で記述します。AIO対策の一環として実装が推奨されています。",
  },
  {
    q: "AI活用マーケティングの費用の目安を教えてください。",
    a: "支援内容（コンサルティングのみ、チャットボット構築込み、ワークフロー自動化込みなど）によって費用は大きく異なります。ご要件と目標をお聞かせいただき、最適なプランと費用をご提案しますので、まずは無料相談にお申し込みください。",
  },
];

const relatedLinks = [
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "AI補助でのコンテンツ量産" },
  { href: "/ai/automation", label: "業務自動化", desc: "繰り返し業務のAI自動化" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "24時間自動応答の実装" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapier連携設計" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索での引用獲得" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サイプレスのAI支援プラン" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索への最適化" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO×AIOの統合戦略" },
  { href: "/aio/llms-txt", label: "llms.txt設置", desc: "AI検索への情報提供設定" },
  { href: "/aio/faq-optimization", label: "FAQ最適化でAIO対策", desc: "AI検索引用を高めるFAQ設計" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "AI×コンテンツSEO戦略" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function AiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AI活用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Marketing</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用マーケティング
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ChatGPT・Claude・Geminiなどの生成AIは、マーケティング業務を根本から変えるツールです。コンテンツ制作・SEO・チャットボット・業務自動化にAIを活用することで、限られたリソースで最大の成果を出せるようになります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              一方でAI検索（ChatGPT・Perplexity・Gemini）が普及したことで、AI検索に引用されるAIO（AI Optimization）も重要な集客チャネルになっています。SEO・MEO・AIOを統合した戦略が現代のWebマーケティングの基本です。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_09 (5).jpg"
            alt="AI活用マーケティング・生成AI・ChatGPT業務活用のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* AI活用の主要領域 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Areas</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用マーケティングの主要領域
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              コンテンツ制作・業務自動化・チャットボット・ワークフロー設計——AIが変革できる4つの主要領域に特化したサービスを提供します。
            </p>
            <div className="max-w-4xl space-y-0">
              {aiAreas.map((area, i) => (
                <Link key={i} href={area.href} className="block group py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-[15px] mb-2 group-hover:underline" style={{ color: "#0d1b2a" }}>{area.title}</p>
                      <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{area.desc}</p>
                    </div>
                    <span className="shrink-0 ml-6 text-[13px] mt-1" style={{ color: "#9CA3AF" }}>→</span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* AIが変革するビジネスの5領域 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Business Impact</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIマーケティングが変えるビジネスの5領域
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              生成AIはマーケティングのあらゆる領域に影響を与えています。以下の5つの領域で、AI活用による具体的なビジネス変革が起きています。
            </p>
            <div className="max-w-4xl">
              {aiBusinessImpacts.map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Split: AI×SEO×AIO */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI × SEO × AIO</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI時代のSEO・AIO統合戦略
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              従来のSEOにAI活用・AIO対策を統合することで、Google検索とAI検索の両方から集客できる強固な基盤を構築します。
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {aiSeoAio.map((item, i) => (
                <div key={i} style={{ padding: "28px", border: "1px solid #E8E4DC", background: "#ffffff" }}>
                  <p className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 業種別AI活用 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別AI活用事例
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              業種ごとにAI活用の有効な領域・具体的な活用方法が異なります。業種特性を踏まえた導入設計が重要です。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiIndustryCases.map((c, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #E8E4DC", background: "#F9F8F5" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{c.industry}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{c.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark section: サイプレスのAI支援 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Our Capabilities</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#ffffff", fontFamily: "var(--font-serif)" }}>
              サイプレスのAI活用支援でできること
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "rgba(255,255,255,0.7)" }}>
              SEO・AIO・MEO・Web制作とAI活用を統合した支援を一社で提供します。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { t: "AI活用コンサルティング", b: "現状の業務フローを分析し、AIで効率化できる領域を特定します。ツール選定・プロンプト設計・チーム向けマニュアル作成まで一貫支援します。" },
                { t: "AIO対策（AI検索最適化）", b: "ChatGPT・Perplexityへの引用獲得を目指したFAQ充実・構造化データ実装・llms.txt設置・E-E-A-T強化を実施します。" },
                { t: "チャットボット構築・導入", b: "ビジネス要件に合わせたAIチャットボットを設計・構築します。FAQ自動回答・リード獲得・予約受付などの自動化を実現します。" },
                { t: "AIコンテンツ制作体制の構築", b: "AI+人間協働のコンテンツ制作ワークフローを設計します。品質管理プロセスを含めた体制を作り、量と質の両立を実現します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }}>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#ffffff", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.7)" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI活用でよくある失敗 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Mistakes</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用でよくある失敗パターン
            </h2>
            <div className="max-w-4xl">
              {aiMistakes.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI活用マーケティングについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI活用支援のご相談"
          body="AI活用による業務効率化・コンテンツSEO・AIO対策をトータルでご支援します。まずは現状の課題をお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}
