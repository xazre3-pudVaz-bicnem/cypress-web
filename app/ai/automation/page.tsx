import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "業務自動化 | AIを活用した繰り返し業務の自動化",
  description: "株式会社サイプレスの業務自動化支援。問い合わせ自動返信・データ集計・レポート生成・SNS配信・予約通知など、繰り返し発生する業務をAIで自動化します。",
  keywords: ["業務自動化", "AI自動化", "n8n", "Zapier", "Make", "RPA", "ワークフロー自動化"],
  openGraph: {
    title: "業務自動化 | 株式会社サイプレス",
    description: "繰り返し業務をAIで自動化。問い合わせ対応・データ集計・SNS配信など幅広く対応。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/ai/automation" },
};

const EXAMPLES = [
  {
    num: "01",
    title: "問い合わせフォームの自動返信",
    body: "フォームへの入力内容に応じて、適切な返信メールを自動で送信します。内容に応じた振り分け・担当者への通知・CRMへの自動登録も組み合わせることができます。対応漏れ防止と初回レスポンス速度の改善に効果的です。",
  },
  {
    num: "02",
    title: "データ集計・レポート自動生成",
    body: "Googleアナリティクス・サーチコンソール・広告管理画面などから定期的にデータを取得し、レポートを自動生成します。毎週・毎月の数値まとめに使っていた時間を削減できます。",
  },
  {
    num: "03",
    title: "SNS投稿のスケジュール配信",
    body: "事前に作成したコンテンツを指定の日時にInstagram・X・Facebookなどへ自動投稿します。AIを使ったコンテンツ生成と組み合わせることで、SNS運用の工数を大幅に削減できます。",
  },
  {
    num: "04",
    title: "予約確認・リマインド通知",
    body: "予約受付後の確認メール送信・前日のリマインド通知・当日のキャンセル確認など、予約管理に伴うコミュニケーションを自動化します。美容・医療・飲食・学習塾など予約型ビジネスに特に効果的です。",
  },
  {
    num: "05",
    title: "在庫管理・発注プロセス",
    body: "在庫数が一定量を下回った際に自動で発注メールを送信する・スプレッドシートの在庫データを定期チェックして発注候補をリストアップするなど、在庫管理業務の自動化を支援します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "自動化にはどんなツールを使いますか？",
    a: "n8n・Zapier・Make（旧Integromat）などのノーコード・ローコード自動化ツールを主に活用します。既存のシステム・ツールに合わせて最適な選択をします。複雑な処理が必要な場合はPythonスクリプトなどの開発も対応します。",
  },
  {
    q: "既存のシステムと連携できますか？",
    a: "APIを持つシステムであれば多くの場合連携可能です。Googleサービス・Slack・kintone・Salesforce・Shopify・LINE等の主要サービスへの接続実績があります。まずはご利用中のシステムをお聞かせください。",
  },
  {
    q: "自動化フローが止まった場合はどうなりますか？",
    a: "エラー発生時の通知設定・監視体制の構築も含めて対応します。自動化導入後の保守・不具合対応のサポートプランもご用意しています。",
  },
  {
    q: "どのくらいの業務時間が削減できますか？",
    a: "自動化する業務の内容によって異なりますが、毎週数時間かかっていたデータ集計・レポート作成・メール対応などが数分で完了するケースは多くあります。導入前に削減できる工数をシミュレーションしてご提案します。",
  },
  {
    q: "まず何から相談すればいいですか？",
    a: "「この業務が大変だ」「この作業を自動化したい」という具体的な課題をお聞かせください。技術的な知識は不要です。現状の業務フローをヒアリングし、自動化できる部分と費用対効果をご提案します。",
  },
];

export default function AutomationPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Business Automation
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              業務自動化
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              繰り返し発生する業務をAIとワークフローツールで自動化し、人が本来すべき仕事に集中できる環境を整えます。
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
              <li style={{ color: "#0F172A" }}>業務自動化</li>
            </ol>
          </div>
        </nav>

        {/* ===== What is Automation ===== */}
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
                業務自動化とは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                業務自動化とは、人間が手作業で行っていた繰り返し業務をシステム・AIが代替することで、処理速度を上げ・ミスを減らし・人的コストを削減する取り組みです。これまでは大企業のみが取り組めるものでしたが、n8nやZapier・Makeなどのノーコードツールの普及により、中小企業でも低コストで導入できる環境が整っています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                自動化に向いているのは、「毎回同じ手順で行う」「データの転記・集計が多い」「定期的にメールを送る」「特定の条件で通知する」といった業務です。こうした業務を自動化することで、担当者はより創造的・判断的な仕事に集中できるようになります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスは業務のヒアリングから始め、自動化できる部分の特定・ツール選定・フロー構築・テスト・運用引き継ぎまで一貫して支援します。技術的な知識がなくても、業務課題をお持ちであればご相談ください。
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
                自動化できる業務の例
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
        <FaqSection items={FAQ_ITEMS} heading="業務自動化 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/ai", label: "AI活用支援", desc: "AI支援サービス一覧" },
            { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "顧客対応・社内FAQ自動化" },
            { href: "/ai/workflow", label: "AIワークフロー改善", desc: "業務フロー全体の最適化" },
            { href: "/services/ai", label: "AI活用支援サービス概要", desc: "サービス詳細・料金" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="業務自動化のご相談"
          body="「この業務を自動化したい」「どこから手をつければいいかわからない」という段階からご相談を承っています。業務フローをヒアリングし、費用対効果の高い自動化プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
