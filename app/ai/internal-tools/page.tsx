import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI社内ツール・業務効率化｜中小企業のDX推進",
  description: "AIを活用した社内業務の効率化。議事録作成・社内FAQ・営業資料生成・データ分析など、中小企業でも導入できるAI業務ツールの活用方法を解説。",
};

const faqItems = [
  { q: "中小企業でも社内AIツールを導入できますか？", a: "はい。Microsoft 365のCopilot・Google WorkspaceのDuet AI・ChatGPT Enterpriseなど、中小企業でも月額数千円〜で導入できるAIツールがあります。まずは特定業務に絞って試験導入することをお勧めします。" },
  { q: "社内データをAIに学習させることはできますか？", a: "RAG（検索拡張生成）技術を使うことで、自社の社内文書・マニュアル・FAQ等を学習させたカスタムAIを構築できます。AzureのOpenAI Service・Difyなどで実現可能です。" },
  { q: "AIツール導入のセキュリティリスクはどう対処しますか？", a: "機密情報をパブリックなAI（ChatGPT等）に入力しないこと、プライベートデプロイ（自社サーバーまたはプライベートクラウド）の検討、利用規定の整備が重要です。" },
  { q: "AIによる業務自動化はどの業種に効果的ですか？", a: "文書作成・データ入力・報告書作成・メール対応など「繰り返し発生する定型業務」はどの業種でも効果的です。特に不動産・法律・医療・建設など書類仕事が多い業種で導入効果が高い傾向があります。" },
  { q: "従業員がAIを使えるように研修は必要ですか？", a: "基本的なプロンプトの書き方・セキュリティルール・活用事例の共有など、最低限の研修は重要です。「何をAIに任せていいか」「どこが限界か」を理解することで安心して活用できます。" },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "業務自動化全般" },
  { href: "/ai/prompt-design", label: "プロンプトデザイン", desc: "AI活用の精度向上" },
  { href: "/ai/customer-support", label: "AIカスタマーサポート", desc: "顧客対応の自動化" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/ai">AI活用支援</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              AI社内ツール
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AI — Internal Tools</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              AI社内ツール｜業務効率化とDX推進
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              大企業だけでなく、中小企業でもAIを活用した業務効率化が実現できる時代になりました。議事録・資料作成・データ分析など、繰り返し発生する業務をAIに任せることで、コア業務に集中できます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="AI社内ツール・業務効率化" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.18)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Use Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AI化できる社内業務
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "議事録の自動作成・要約", b: "会議の録音・文字起こしをAIが自動で要約・整形します。「決定事項」「アクションアイテム」「担当者・期限」を自動抽出することで、議事録作成の時間を大幅に削減できます。" },
                { n: "02", t: "社内FAQシステム", b: "社内マニュアル・就業規則・業務手順書をAIに学習させ、「この場合どう対応する？」という社員の質問に自動で回答するシステムを構築します。新人教育・異動時の引き継ぎに効果的です。" },
                { n: "03", t: "営業資料・提案書の自動生成", b: "顧客情報・提案内容・実績データを入力するだけで、ベースとなる提案書・見積書のドラフトをAIが生成します。営業担当者が個別にカスタマイズして使います。" },
                { n: "04", t: "在庫・売上データの自動分析", b: "ExcelやスプレッドシートのデータをAIが分析し、傾向・予測・改善提案をレポート化します。専門的なデータアナリストなしに、データドリブンな意思決定が可能になります。" },
                { n: "05", t: "メール返信の下書き作成", b: "受信したメールの内容をAIが分析し、返信案を自動生成します。定型的な問い合わせ・見積もり依頼・アポイント調整などで特に効果的です。" },
                { n: "06", t: "契約書・書類のチェック補助", b: "契約書・法的文書をAIがチェックし、リスク条項・不明点・確認すべき点を指摘します。最終判断は人間が行いますが、見落としリスクを下げられます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="AI社内ツール導入のご相談" body="業務効率化のためのAIツール選定・導入支援・社内研修をサポートします。まずはどの業務からAI化するかをヒアリングし、費用対効果の高いプランをご提案します。" />
      </main>
      <Footer />
    </>
  );
}
