import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI社内ツール構築とは｜ナレッジベース・レポート自動生成でDXを推進｜株式会社サイプレス",
  description:
    "AIを活用した社内業務の効率化。議事録作成・社内FAQ・営業資料生成・データ分析など、中小企業でも導入できるAI業務ツールの活用方法を体系的に解説。",
  keywords: ["AI社内ツール", "社内DX", "AI業務効率化", "ナレッジベース AI", "議事録自動化"],
  openGraph: {
    title: "AI社内ツール構築とは｜ナレッジベース・レポート自動生成でDXを推進｜株式会社サイプレス",
    description: "AIを活用した社内業務効率化。議事録・社内FAQ・レポート自動生成など中小企業のDX推進をサポート。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/internal-tools" },
};

const faqItems = [
  {
    q: "中小企業でも社内AIツールを導入できますか？",
    a: "はい。Microsoft 365のCopilot・Google WorkspaceのDuet AI・ChatGPT Enterpriseなど、中小企業でも月額数千円〜で導入できるAIツールがあります。まずは特定業務に絞って試験導入することをお勧めします。",
  },
  {
    q: "社内データをAIに学習させることはできますか？",
    a: "RAG（検索拡張生成）技術を使うことで、自社の社内文書・マニュアル・FAQ等を学習させたカスタムAIを構築できます。AzureのOpenAI Service・Difyなどで実現可能です。",
  },
  {
    q: "AIツール導入のセキュリティリスクはどう対処しますか？",
    a: "機密情報をパブリックなAI（ChatGPT等）に入力しないこと、プライベートデプロイ（自社サーバーまたはプライベートクラウド）の検討、利用規定の整備が重要です。",
  },
  {
    q: "AIによる業務自動化はどの業種に効果的ですか？",
    a: "文書作成・データ入力・報告書作成・メール対応など「繰り返し発生する定型業務」はどの業種でも効果的です。特に不動産・法律・医療・建設など書類仕事が多い業種で導入効果が高い傾向があります。",
  },
  {
    q: "従業員がAIを使えるように研修は必要ですか？",
    a: "基本的なプロンプトの書き方・セキュリティルール・活用事例の共有など、最低限の研修は重要です。「何をAIに任せていいか」「どこが限界か」を理解することで安心して活用できます。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "業務全体の自動化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携設計" },
  { href: "/ai/customer-support", label: "AIカスタマーサポート", desc: "顧客対応の自動化" },
  { href: "/ai/prompt-design", label: "プロンプトエンジニアリング", desc: "AI活用の精度向上" },
  { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "社内Q&Aボットの構築" },
  { href: "/contact", label: "無料相談", desc: "AI社内ツール導入のご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#FFFFFF", paddingTop: "128px", paddingBottom: "64px" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用支援</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AI社内ツール構築</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Internal Tools</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI社内ツール構築
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              大企業だけでなく、中小企業でもAIを活用した業務効率化が実現できる時代になりました。議事録・資料作成・データ分析など、繰り返し発生する業務をAIに任せることで、コア業務に集中できます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              社内向けAIツールの構築では、自社のナレッジ・マニュアル・FAQを学習させたカスタムAIが特に効果的です。外部のAIサービスをそのまま使うのではなく、自社固有の知識を活用できるシステムを設計します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png"
            alt="AI社内ツール・業務効率化・DX推進のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center px-8 md:px-20" style={{ background: "rgba(13,27,42,0.5)" }}>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>AI × DX</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                社内の繰り返し業務をAIに任せ、<br />人はコア業務に集中する
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Use Cases</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI化できる社内業務
            </h2>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "議事録の自動作成・要約", b: "会議の録音・文字起こしをAIが自動で要約・整形します。「決定事項」「アクションアイテム」「担当者・期限」を自動抽出することで、議事録作成の時間を大幅に削減できます。" },
                { n: "02", t: "社内FAQシステム", b: "社内マニュアル・就業規則・業務手順書をAIに学習させ、「この場合どう対応する？」という社員の質問に自動で回答するシステムを構築します。新人教育・異動時の引き継ぎに効果的です。" },
                { n: "03", t: "営業資料・提案書の自動生成", b: "顧客情報・提案内容・実績データを入力するだけで、ベースとなる提案書・見積書のドラフトをAIが生成します。営業担当者が個別にカスタマイズして使います。" },
                { n: "04", t: "在庫・売上データの自動分析", b: "ExcelやスプレッドシートのデータをAIが分析し、傾向・予測・改善提案をレポート化します。専門的なデータアナリストなしに、データドリブンな意思決定が可能になります。" },
                { n: "05", t: "メール返信の下書き作成", b: "受信したメールの内容をAIが分析し、返信案を自動生成します。定型的な問い合わせ・見積もり依頼・アポイント調整などで特に効果的です。" },
                { n: "06", t: "契約書・書類のチェック補助", b: "契約書・法的文書をAIがチェックし、リスク条項・不明点・確認すべき点を指摘します。最終判断は人間が行いますが、見落としリスクを下げられます。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
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

        {/* Why It Matters */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Important</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              社内AIツール導入が重要な理由
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              AI社内ツールの導入は単なる効率化にとどまりません。属人化した業務知識を組織のナレッジとして蓄積・活用できるようにすること、採用難の時代に少人数で高い生産性を維持することが、中小企業の競争力維持に直結します。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "属人化リスクの解消", body: "担当者しか知らないノウハウをAIが学習・整理することで、退職・異動・休暇時のリスクを軽減します。組織全体で知識を共有する「ナレッジマネジメント」の基盤になります。" },
                { title: "少人数での高い生産性", body: "採用コストが高騰する現代、既存スタッフの生産性を高めることが重要です。AIが定型業務を担うことで、1人当たりのアウトプット量を増やせます。" },
                { title: "ミスの削減と品質向上", body: "チェック業務・転記作業・計算などをAIが補助することで、人的ミスのリスクを下げます。社内QAプロセスへのAI活用で品質基準を底上げできます。" },
                { title: "データに基づく意思決定", body: "売上・顧客・在庫データをAIが分析・要約することで、経営者や管理職が迅速にデータを参照して意思決定できる体制を構築します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI社内ツール構築についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI社内ツール導入のご相談"
          body="業務効率化のためのAIツール選定・導入支援・社内研修をサポートします。まずはどの業務からAI化するかをヒアリングし、費用対効果の高いプランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
