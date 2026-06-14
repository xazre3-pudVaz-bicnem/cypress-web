import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI業務自動化とは｜マーケティング業務をAIとノーコードで効率化｜株式会社サイプレス",
  description:
    "AI業務自動化の基礎から実践まで解説。ChatGPT・Claude等のAIとZapier・Make・n8nなどのノーコードツールを組み合わせ、コンテンツ制作・レポート・問い合わせ対応を自動化する方法を解説。",
  keywords: ["AI業務自動化", "Zapier AI", "n8n", "Make自動化", "マーケティング自動化", "ノーコード自動化"],
  openGraph: {
    title: "AI業務自動化とは｜マーケティング業務をAIとノーコードで効率化｜株式会社サイプレス",
    description: "AI業務自動化の実践ガイド。ChatGPT・n8n・Zapierを使ったマーケティング業務の自動化方法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/automation" },
};

const faqItems = [
  {
    q: "業務自動化に使えるAIツールにはどんなものがありますか？",
    a: "生成AI（ChatGPT API・Claude API・Gemini API）と、ノーコード自動化ツール（Zapier・Make/Integromat・n8n）の組み合わせが一般的です。データ処理・集計はNotionAI・Spreadsheets+GPT等も活用できます。最近はClaude等をオーケストレーターとして使うマルチエージェント構成も可能になっています。",
  },
  {
    q: "どんな業務がAIで自動化できますか？",
    a: "コンテンツ制作（SEO記事のドラフト生成・SNS投稿文・メルマガ文章）、問い合わせ対応（FAQへの自動回答・担当者振り分け）、レポート作成（GA4・GSCデータの自動集計・月次レポート生成）、社内文書（議事録・提案書のドラフト）、データ入力・分類などが代表的な自動化対象です。",
  },
  {
    q: "Zapier・Make・n8nの違いは何ですか？",
    a: "Zapier は使いやすさが最高・多数のアプリ連携に対応・月額費用が高め。Make（旧Integromat）はビジュアル設計がZapierより強力・複雑なフローに対応・コスト効率が良い。n8nはオープンソース・セルフホスト可能・APIとの連携が最も柔軟・無料で始められる（技術的知識が必要）。目的と技術レベルによって選択します。",
  },
  {
    q: "プログラミングができなくても業務自動化はできますか？",
    a: "はい。Zapier・MakeはGUI上でドラッグ&ドロップで自動化フローを設計でき、プログラミングなしで多くの業務を自動化できます。ただし、ChatGPT APIとの高度な連携・条件分岐が複雑なフロー・外部APIの利用などには若干の技術的理解が必要です。サイプレスでは設計から実装まで支援します。",
  },
  {
    q: "業務自動化の費用はどのくらいかかりますか？",
    a: "Zapier・Make・n8nなどのツール費用（月額数千円〜数万円）と、ChatGPT APIなどのAPI使用料（使用量に応じた従量課金）が必要です。サイプレスへの支援依頼費用は自動化の範囲・複雑さによって異なります。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "自動化したコンテンツのSEO品質は大丈夫ですか？",
    a: "AI生成のコンテンツを自動で公開するだけでは、SEO品質に問題が生じる可能性があります。AI生成コンテンツには必ず人間によるレビュー・専門知識の追加・一次情報の付与を行う品質チェック工程を組み込むことが重要です。「自動生成して即公開」ではなく「AI支援で効率化＋人間が品質保証」のワークフローを設計します。",
  },
  {
    q: "既に使っているCRM・MA・チャットツールと連携できますか？",
    a: "Zapier・Make・n8nは数百〜数千のアプリ連携に対応しています。Salesforce・HubSpot・Notion・Slack・Google Workspace・LINE・kintone等との連携実績があります。まずは現在お使いのツールをお聞かせいただき、連携可能性をご確認します。",
  },
  {
    q: "自動化のリスクや注意点はありますか？",
    a: "①AI生成コンテンツのファクトチェックなしでの自動公開、②個人情報・機密情報のAPIへの送信（利用規約の確認が必要）、③自動化フローのエラー監視が不十分、④過度な自動化によるブランドトーンのブレなどがリスクです。設計段階でこれらを考慮したワークフローを構築します。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "問い合わせ対応の自動化" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作の効率化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携設計" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サイプレスのAI支援" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索への引用獲得" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/contact", label: "無料相談", desc: "業務自動化のご相談" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function AutomationPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>業務自動化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Automation</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI業務自動化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AI業務自動化とは、ChatGPT・Claude等の生成AIとZapier・Make・n8nなどのノーコード自動化ツールを組み合わせ、繰り返し業務を自動化する取り組みです。コンテンツ制作・レポート作成・問い合わせ対応・データ入力などを効率化できます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              少ないリソースで最大の成果を出すために、AIを「仕事を奪うもの」ではなく「仕事を助けるツール」として活用することが重要です。どの業務を自動化し、どこに人間の判断を残すかの設計が成功の鍵です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 00_32_52.png" alt="AI業務自動化・Zapier・n8n・ノーコード自動化のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* 自動化できる業務 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Automation Areas</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIで自動化できるマーケティング業務
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "コンテンツ制作の効率化", body: "SEO記事のキーワード調査・アウトライン生成・ドラフト作成をAIで半自動化。SNS投稿文・メルマガ・広告コピーのバリエーション生成も効率化できます。人間がレビュー・品質向上する工程を必ず設けます。" },
                { title: "月次レポートの自動作成", body: "Google Analytics 4・Search ConsoleのデータをAPIで取得し、AI（GPT等）が分析コメントを生成、Notionやスプレッドシートに自動出力するワークフローを構築します。毎月の集計・コメント作業を大幅に削減できます。" },
                { title: "問い合わせ・FAQ対応の自動化", body: "FAQ情報を知識ベースに登録し、問い合わせフォームやチャットからの質問に対してAIが自動回答するシステムを構築します。担当者への振り分け・エスカレーションのルールも設定します。" },
                { title: "SNS投稿スケジューリング", body: "AI生成した投稿テキスト・画像をBuffer・Hootsuite等と連携し、自動スケジューリングするワークフローを構築します。人間がレビューした後に自動投稿する半自動フローが品質担保に有効です。" },
                { title: "リードナーチャリングの自動化", body: "問い合わせ者へのステップメール・フォロー連絡をCRM（HubSpot・Salesforce等）と連携してAI支援で自動化します。担当者への通知・メモの自動生成も含みます。" },
                { title: "社内文書・議事録の効率化", body: "会議録音→文字起こし→要約・アクションアイテム抽出→Notionへの自動保存というワークフローをAIで構築します。議事録作成の時間を大幅に削減できます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI業務自動化についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI業務自動化のご相談"
          body="どの業務を自動化するかの選定から、ワークフロー設計・実装まで一貫してご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
