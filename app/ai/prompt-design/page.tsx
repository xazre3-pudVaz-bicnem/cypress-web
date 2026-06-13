import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "プロンプトデザイン｜AI活用の精度を上げる技術",
  description: "AIへの指示文（プロンプト）を最適化して、必要な出力を安定して得るプロンプトデザインの基本原則と実践例。中小企業のAI活用精度を高める方法を解説。",
};

const faqItems = [
  { q: "プロンプトデザインとプロンプトエンジニアリングは同じですか？", a: "ほぼ同義ですが、プロンプトエンジニアリングは技術的・開発者的なニュアンスが強く、プロンプトデザインはより広くビジネス活用を含む表現です。本質は同じ「AIへの指示を最適化する技術」です。" },
  { q: "プロンプトは一度作ったら変えなくていいですか？", a: "AIのバージョンアップや業務内容の変化に合わせて定期的に見直すことが重要です。また、同じプロンプトでも毎回同じ出力は保証されないため、「このプロンプトで9割は期待通り」になるまで改善を繰り返します。" },
  { q: "良いプロンプトの長さはどのくらいですか？", a: "「必要な情報を過不足なく含む」ことが基本です。短すぎると曖昧な出力になり、長すぎると重要な指示が埋もれます。役割・タスク・制約・出力形式を含む150〜400文字程度が多くのケースで機能します。" },
  { q: "プロンプトテンプレートを作るメリットは何ですか？", a: "再現性・品質の安定・作業効率化の3点です。毎回ゼロから指示を考えるより、テンプレートに変数（顧客名・商品名等）を入れるだけで一定品質の出力を得られます。" },
  { q: "ChatGPTとClaudeではプロンプトの書き方が違いますか？", a: "基本原則は共通ですが、モデルごとに得意・不得意があります。Claudeは長文・論理的な文章・コード生成に強く、ChatGPTは指示への即応性・マルチモーダル（画像入力）に優れています。同じプロンプトでも出力が異なるため、両方で試してみることを推奨します。" },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "コンテンツ制作" },
  { href: "/ai/sns-automation", label: "SNS投稿自動化", desc: "SNS自動化" },
  { href: "/ai/internal-tools", label: "AI社内ツール", desc: "業務効率化" },
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
              プロンプトデザイン
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AI — Prompt Design</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              プロンプトデザイン｜AIへの指示を最適化する
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              プロンプトデザインとは、AIへの指示文（プロンプト）を最適化して、必要な出力を安定して得る技術です。同じAIツールを使っていても、プロンプトの品質で出力の質は大きく変わります。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="プロンプトデザイン" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Core Principles</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              プロンプト設計の6つの基本原則
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "役割を明確にする（Role Prompting）", b: "「あなたはSEO専門家です」「あなたは飲食店向けのマーケターです」のように、AIに具体的な役割を与えます。専門家として回答するモードに切り替えることで出力の精度が上がります。" },
                { n: "02", t: "具体的な出力形式を指定する", b: "「箇条書きで5つ」「200文字以内で」「表形式で」「JSONで出力」など、出力の形式を明確に指定します。曖昧な指示は曖昧な出力を生みます。" },
                { n: "03", t: "参考情報・コンテキストを提供する（Few-shot）", b: "「以下の例を参考に〇〇してください」と例を示すことで、AIが期待する方向性を理解します。ブランドの文体見本・過去の投稿・参考記事を添えると効果的です。" },
                { n: "04", t: "制約条件を明記する", b: "「〇〇は含めないでください」「敬体（ですます調）で書いてください」「日本語で」「SEOキーワード『〇〇』を自然に含めてください」など、してほしいこと・してほしくないことを明記します。" },
                { n: "05", t: "段階的に指示する（Chain of Thought）", b: "複雑なタスクは一度に全部指示するのではなく、「まず構成を作って」→「次に各セクションを書いて」のように段階的に進めます。一度に処理させすぎると品質が下がります。" },
                { n: "06", t: "テンプレート化して再利用する", b: "うまくいったプロンプトはドキュメントに保存してテンプレート化します。変数（顧客名・商品名・キーワード等）を差し替えるだけで再利用できる形にすることで業務効率が大幅に上がります。" },
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
        <PageContactCTA heading="プロンプト設計のご相談" body="業種・業務内容に合わせたプロンプトテンプレートの設計・AI活用ワークフローの構築をサポートします。「AIを使いたいが効果が出ない」というお悩みをお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
