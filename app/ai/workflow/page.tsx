import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "AIワークフロー改善 | 業務プロセスをAIで最適化",
  description: "株式会社サイプレスのAIワークフロー改善。営業・提案書作成・定期レポート・採用管理・SNS発信など、業務フロー全体をAIで最適化し、生産性を高めます。",
  keywords: ["AIワークフロー", "業務改善", "業務効率化", "AI導入", "プロセス最適化", "DX"],
  openGraph: {
    title: "AIワークフロー改善 | 株式会社サイプレス",
    description: "業務フロー全体をAIで最適化。営業・レポート・採用・コンテンツ発信の効率を高めます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/ai/workflow" },
};

const EXAMPLES = [
  {
    num: "01",
    title: "営業・提案書作成フロー",
    body: "顧客情報・ヒアリング内容を入力するだけで提案書の下書きを自動生成するフローを構築します。過去の提案事例・料金表・サービス説明をRAGで参照させることで、担当者ごとのバラつきをなくし、提案品質を均一化できます。",
  },
  {
    num: "02",
    title: "定期レポート作成フロー",
    body: "毎月の成果報告・数値まとめ・クライアントへの定期レポートをAIで自動生成します。Googleアナリティクス・広告管理画面などからデータを収集し、AIがサマリーと改善提案を含むレポートを作成するフローを設計します。",
  },
  {
    num: "03",
    title: "採用・応募者管理フロー",
    body: "求人サイトからの応募受付・応募者情報の整理・一次スクリーニング・面接日程調整の連絡などをAIとワークフローツールで効率化します。採用担当者が人数の多い選考でも見落としなく対応できる体制を構築します。",
  },
  {
    num: "04",
    title: "SNS・コンテンツ発信フロー",
    body: "週次・月次のコンテンツ計画に基づき、AIがSNS投稿文・ブログ記事下書き・GBP投稿内容を生成し、担当者の確認後に自動配信されるフローを構築します。情報発信の継続性を担保しながら担当者の工数を最小化します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "ワークフロー改善はどこから始めればいいですか？",
    a: "まず「どの業務に最も時間がかかっているか」「どの業務でミスが多いか」「どの業務が属人化しているか」を整理するヒアリングから始めます。特定業務の自動化から始めて、段階的に範囲を広げるアプローチが効果的です。",
  },
  {
    q: "既存のシステム・ツールとの連携は可能ですか？",
    a: "Googleワークスペース・Slack・kintone・Salesforce・Freee・MoneyForwardなど主要なビジネスツールとの連携実績があります。まずはご利用中のツールをお聞かせください。",
  },
  {
    q: "業務フローの可視化・ドキュメント化もしてもらえますか？",
    a: "はい。現状の業務フローの可視化（フロー図の作成）から始め、ボトルネックの特定、改善案の設計・実装まで対応します。改善後のフローのドキュメント化も行います。",
  },
  {
    q: "小規模な会社でも対応できますか？",
    a: "はい。社員5〜30名規模の中小企業への対応実績が多くあります。大がかりなシステム投資をせずに、ノーコードツールを活用したシンプルな自動化から始めることができます。",
  },
  {
    q: "改善効果はどのくらいで出ますか？",
    a: "単純な自動化（メール通知・データ転記など）は導入後すぐに効果が出ます。より複雑なフロー改善は、運用開始から1〜3ヶ月で効果を実感いただけるケースが多いです。",
  },
];

export default function WorkflowPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AI Workflow
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              AIワークフロー改善
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              業務フロー全体をAIで最適化します。個別の自動化にとどまらず、プロセス設計から見直し、組織全体の生産性を高めます。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/ai" className="hover:underline" style={{ color: "#6B7280" }}>AI活用支援</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>AIワークフロー改善</li>
            </ol>
          </div>
        </nav>

        {/* ===== What is Workflow ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                ワークフロー改善とは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                ワークフロー改善とは、業務の流れ（プロセス）全体を見直し、不要なステップの削除・自動化できる部分の特定・人が判断すべき業務への集中を実現する取り組みです。単一業務の自動化ではなく、業務の連続性・情報の流れを設計し直すことで、より大きな生産性向上が見込めます。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                AIを活用したワークフロー改善では、繰り返しの作業を自動化するだけでなく、AIが情報を整理・要約・分析して人間の意思決定を支援する仕組みも構築できます。提案書の下書き作成・定期レポートの自動生成・採用選考の初期スクリーニングなど、これまで人間が時間をかけていた業務を効率化します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスは、業務の現状を丁寧にヒアリングしたうえで、AIとワークフローツールを組み合わせた最適な改善プランを設計します。小さな自動化から始めて段階的に範囲を広げるアプローチで、無理なく継続できる体制を整えます。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Examples ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Examples
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                改善できるワークフローの例
              </h2>
            </div>
            <div>
              {EXAMPLES.map((item) => (
                <div
                  key={item.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="AIワークフロー改善 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/ai", label: "AI活用支援", desc: "AI支援サービス一覧" },
            { href: "/ai/automation", label: "業務自動化", desc: "繰り返し業務の自動化" },
            { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "対話による業務効率化" },
            { href: "/services/ai", label: "AI活用支援サービス概要", desc: "サービス詳細・料金" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="AIワークフロー改善のご相談"
          body="業務の無駄を減らし、チーム全体の生産性を高めたい方はご相談ください。現状の業務フローをヒアリングし、AIを活用した改善プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
