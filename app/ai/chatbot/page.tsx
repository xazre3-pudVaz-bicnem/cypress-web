import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIチャットボット構築とは｜ChatGPT APIを活用した問い合わせ自動化｜株式会社サイプレス",
  description:
    "AIチャットボット構築の基礎から実践まで解説。ChatGPT API・Claude APIを活用したWebサイト組み込み・LINE連携・社内Q&Aボットの設計と導入方法を体系的に解説。",
  keywords: ["AIチャットボット", "ChatGPT チャットボット", "チャットボット構築", "LINE チャットボット", "問い合わせ自動化"],
  openGraph: {
    title: "AIチャットボット構築とは｜ChatGPT APIを活用した問い合わせ自動化｜株式会社サイプレス",
    description: "AIチャットボット構築の実践ガイド。ChatGPT API活用から設計・導入・FAQ構築まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/chatbot" },
};

const faqItems = [
  {
    q: "AIチャットボットと従来のチャットボットの違いは何ですか？",
    a: "従来のチャットボットは決められたシナリオ・キーワードに対して固定の回答を返すルールベースです。AIチャットボット（ChatGPT API等を活用）は自然言語を理解し、シナリオにない質問にも文脈に合った回答を生成できます。ただしAIチャットボットはハルシネーション（誤情報生成）のリスクがあるため、知識ベースの設計が重要です。",
  },
  {
    q: "どんな種類のAIチャットボットがありますか？",
    a: "①Webサイト組み込みチャットボット（サイト訪問者の問い合わせ対応）、②LINE連携チャットボット（LINE公式アカウントでの顧客対応自動化）、③社内Q&Aボット（社内FAQへの自動回答・Slack等との連携）、④商品・サービス案内ボット（ECサイト・サービスサイトでの購買支援）が主な種類です。",
  },
  {
    q: "ChatGPT APIを使ったチャットボットの費用はどのくらいですか？",
    a: "OpenAI APIの使用料は従量課金（1000トークン当たり数円〜数十円）で、会話数・会話の長さによって変わります。小規模利用なら月数百円〜数千円、大規模利用では数万円〜になります。サイプレスへの構築依頼費用はシステムの規模・機能によって異なります。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "知識ベース（FAQ情報）はどのように設定しますか？",
    a: "テキストファイル・PDFドキュメント・Webページなどから情報を読み込み、ベクトルデータベース（Pinecone等）に保存するRAG（検索拡張生成）の構成が一般的です。これにより、AIが自社の製品・サービス・FAQ情報をもとに正確な回答を生成できます。独自の知識ベースなしのチャットボットはハルシネーションが多くなります。",
  },
  {
    q: "個人情報のセキュリティは大丈夫ですか？",
    a: "OpenAI APIを使用する場合、入力した情報がAPIを通じてOpenAIのサーバーに送信されます。個人情報・機密情報をAPIに送信する場合はOpenAIのAPI利用規約（データ処理契約）を確認することが必要です。オンプレミス環境でのLLM運用や、OSSのLLM（Llama等）を使うセルフホスト構成も選択肢です。",
  },
  {
    q: "ハルシネーション（誤情報）のリスクはどうコントロールしますか？",
    a: "RAG（知識ベースからの検索拡張生成）の採用・プロンプトでの「知識ベースにない場合は答えない」という制約設定・定期的な回答品質のモニタリング・エスカレーション（担当者への引き継ぎ）の設計が有効です。すべての回答を保証することは難しいため、重要な判断は人間に引き継ぐ設計が安全です。",
  },
  {
    q: "既存のCRMやヘルプデスクツールとの連携はできますか？",
    a: "はい。Salesforce・HubSpot・Zendesk・Freshdesk・LINE・Slackなどの主要ツールとのAPI連携が可能です。チャットボットで収集した情報をCRMに自動登録したり、チャットボットで解決できない問い合わせを担当者のSlackに通知したりするフローを設計できます。",
  },
  {
    q: "LINE公式アカウントでのAIチャットボットは実現できますか？",
    a: "はい。LINE Messaging APIとChatGPT/Claude APIを組み合わせることで、LINE公式アカウントでの問い合わせに自動応答するAIチャットボットを構築できます。友だち登録促進・既存顧客へのリテンション・24時間の問い合わせ対応に活用できます。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/automation", label: "業務自動化", desc: "マーケティング業務のAI自動化" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作の効率化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "チャットボットを含む自動化設計" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "チャットボット構築支援" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "LINE公式アカウントとの連携" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "チャットボットの活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "チャットボットのプロンプト設計" },
  { href: "/column/seo", label: "SEOコラム", desc: "AIチャットボットの最新情報" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "チャットボット組み込みサイト制作" },
  { href: "/contact", label: "無料相談", desc: "チャットボット構築のご相談" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function ChatbotPage() {
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
              <span style={{ color: "#0F172A" }}>チャットボット構築</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Chatbot</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIチャットボット構築
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIチャットボットとは、ChatGPT API・Claude APIなどの大規模言語モデルを活用し、ユーザーの問い合わせに自然言語で回答するシステムです。Webサイト組み込み・LINE連携・社内Q&Aボットなど、様々な用途に対応できます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              24時間365日の問い合わせ対応・FAQ自動化・担当者への適切な振り分けを実現し、顧客満足度の向上と担当者の業務負担軽減を同時に達成します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/4.png" alt="AIチャットボット構築・ChatGPT API・LINE連携のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* チャットボットの種類 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Bot Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIチャットボットの主な種類
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { type: "Webサイト組み込みチャットボット", desc: "Webサイトの右下に表示されるチャットウィジェット型です。サービス案内・FAQ対応・問い合わせ情報の収集・担当者への引き継ぎを自動化します。導入が最もシンプルで多くのビジネスに適しています。" },
                { type: "LINE公式アカウント連携ボット", desc: "LINE Messaging APIと生成AIを組み合わせ、LINEでの問い合わせに自動応答します。友だち登録済みの既存顧客への自動フォロー・予約確認・よくある質問への対応に効果的です。" },
                { type: "社内Q&Aボット（Slack・Teams連携）", desc: "社内規程・マニュアル・FAQ情報を知識ベースに登録し、SlackやTeams上での社員からの質問に自動回答します。人事・総務・IT等の問い合わせ対応負荷を削減できます。" },
                { type: "ECサイト商品案内ボット", desc: "商品情報・在庫・サイズ・用途などの情報をAIが案内し、購買意欲を高めます。カート追加・決済への誘導や、カスタマーサポートとの連携も設計できます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.type}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIチャットボット構築についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIチャットボット構築のご相談"
          body="用途・規模・予算に合わせたAIチャットボットの設計と構築をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
