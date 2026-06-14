import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI活用支援サービス｜業務自動化・チャットボット・AIコンテンツ活用｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAI活用支援サービス。ChatGPT・Claude等のLLMを活用した業務効率化・チャットボット構築・AIコンテンツ制作支援・ワークフロー自動化をご支援。東京都葛飾区を拠点に全国対応。",
  keywords: ["AI活用支援", "ChatGPT活用", "業務自動化", "チャットボット構築", "AIマーケティング", "AI業務効率化"],
  openGraph: {
    title: "AI活用支援サービス｜業務自動化・チャットボット・AIコンテンツ活用｜株式会社サイプレス",
    description: "サイプレスのAI活用支援サービス。ChatGPT・Claude活用から業務自動化・チャットボット構築まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/ai" },
};

const faqItems = [
  {
    q: "AI活用支援はどんな企業に向いていますか？",
    a: "繰り返し業務が多い・コンテンツ制作に時間がかかっている・お問い合わせ対応を効率化したい・マーケティング業務の一部を自動化したいという企業に向いています。業種を問わず、リソースが限られる中小企業や個人事業主の方にも適しています。",
  },
  {
    q: "ChatGPTやClaudeをビジネスに活用するには何が必要ですか？",
    a: "まず活用目的の明確化（どの業務を効率化したいか）と、適切なプロンプト設計が必要です。また、社内データとの連携が必要な場合はAPIの設定・カスタムGPTの構築が必要になります。サイプレスではプロンプト設計から導入支援・社員教育まで対応します。",
  },
  {
    q: "チャットボットはどのようなシステムで構築しますか？",
    a: "用途に応じて、ChatGPT APIを活用したカスタムチャットボット、LINE公式アカウントとの連携チャットボット、Webサイト組み込みのチャットボットなどを構築します。知識ベース（FAQ・製品情報）を連携した高精度な回答ができるシステムの設計も可能です。",
  },
  {
    q: "AIを使ったコンテンツ制作支援とはどういうサービスですか？",
    a: "AIを活用したSEO記事・SNS投稿・メルマガ・商品説明文などのコンテンツ制作ワークフローの設計と支援を行います。AIが生成したドラフトに対して、人間が専門知識・一次情報を追加して品質を高める「AI×人間協働」のコンテンツ制作体制を構築します。",
  },
  {
    q: "業務自動化はどの範囲まで対応できますか？",
    a: "主にマーケティング・広報・カスタマーサポート・社内文書作成などの知識業務の自動化を支援しています。Zapier・Make（旧Integromat）・n8nなどのノーコード自動化ツールとAIの組み合わせによるワークフロー自動化が得意です。本格的なシステム開発が必要な案件は外部開発者と連携します。",
  },
  {
    q: "AI活用にはどのくらいのコストがかかりますか？",
    a: "ChatGPT APIやClaude API自体の費用は使用量に応じた従量課金（月数千円〜）です。サイプレスの支援費用は、導入コンサルティング・プロンプト設計・ワークフロー構築の内容によって異なります。まずは無料相談で現状の課題と目標をお聞かせください。",
  },
  {
    q: "社員がAIを活用できるように研修してもらえますか？",
    a: "はい、ChatGPT・Claude等のLLMの基本的な使い方から、業務別の活用事例・プロンプト作成のコツまでを解説するAI活用研修（オンライン・対面）を実施しています。参加者のスキルレベルや業種に合わせてカスタマイズします。",
  },
  {
    q: "SEO対策やAIO対策と組み合わせて依頼できますか？",
    a: "はい、AI活用支援をSEO・AIO・MEO・Web制作と組み合わせた統合的なWebマーケティング支援が可能です。AIを使った効率的なコンテンツSEOの運用体制構築と、SEO対策を一緒に進めることで、費用対効果の高い集客基盤を構築できます。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎知識" },
  { href: "/ai/automation", label: "業務自動化", desc: "マーケティング業務のAI自動化" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "AIチャットボットの導入" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "AI×人間協働のコンテンツ制作" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "AIを活用したコンテンツSEO" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談", desc: "AI活用支援のご相談" },
];

export default function ServicesAiPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AI活用支援</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Utilization Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用支援サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのAI活用支援サービスは、ChatGPT・Claudeなどの生成AIを活用した業務効率化・チャットボット構築・コンテンツ制作支援・ワークフロー自動化をご支援します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              AIツールを導入するだけでなく、実際にビジネス成果につながる使い方を設計します。SEO・AIO・MEOとの統合支援も可能です。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/1.png" alt="AI活用支援・業務自動化・ChatGPT活用のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* サービス内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI活用支援サービスの内容
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "AI活用コンサルティング", body: "現在の業務フローを確認し、AIで効率化できるポイントを特定します。ChatGPT・Claude・Gemini等のツール選定と活用計画を策定します。" },
                { title: "プロンプト設計支援", body: "業種・業務内容に合わせた効果的なプロンプトを設計します。業務別のプロンプトライブラリを構築し、社内での活用を定着させます。" },
                { title: "チャットボット構築", body: "ChatGPT APIを活用したWebサイト組み込みチャットボット・LINE連携チャットボット・社内Q&Aボットを構築します。" },
                { title: "ワークフロー自動化", body: "Zapier・Make・n8nなどのノーコード自動化ツールとAIを組み合わせ、コンテンツ制作・メール対応・レポート作成などの業務を自動化します。" },
                { title: "AIコンテンツ制作体制の構築", body: "AI生成コンテンツをベースに、人間が専門知識・一次情報を追加するAI×人間協働のコンテンツ制作ワークフローを設計します。" },
                { title: "AI活用研修", body: "ChatGPT・Claude等の基本から業務別活用事例まで解説するオンライン研修を実施します。参加者のスキルに合わせてカスタマイズします。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI活用支援サービスについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI活用支援の無料相談"
          body="現在の業務課題をお聞きし、AIを活用した効率化・自動化の方法をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
