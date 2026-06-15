import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "プロンプトエンジニアリング・設計とは｜ビジネス用途に合わせた効果的なAI指示設計｜株式会社サイプレス",
  description:
    "AIへの指示文（プロンプト）を最適化して必要な出力を安定して得るプロンプト設計の基本原則と実践例。中小企業のAI活用精度を高める方法を体系的に解説。",
  keywords: ["プロンプトエンジニアリング", "プロンプト設計", "プロンプトデザイン", "ChatGPT プロンプト", "AI指示文"],
  openGraph: {
    title: "プロンプトエンジニアリング・設計とは｜ビジネス用途に合わせた効果的なAI指示設計｜株式会社サイプレス",
    description: "AIへの指示（プロンプト）を最適化する方法。役割指定・出力形式・Few-shot・制約条件など実践的な設計技術を解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_20_52.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/prompt-design" },
};

const faqItems = [
  {
    q: "プロンプトデザインとプロンプトエンジニアリングは同じですか？",
    a: "ほぼ同義ですが、プロンプトエンジニアリングは技術的・開発者的なニュアンスが強く、プロンプトデザインはより広くビジネス活用を含む表現です。本質は同じ「AIへの指示を最適化する技術」です。",
  },
  {
    q: "プロンプトは一度作ったら変えなくていいですか？",
    a: "AIのバージョンアップや業務内容の変化に合わせて定期的に見直すことが重要です。また、同じプロンプトでも毎回同じ出力は保証されないため、「このプロンプトで9割は期待通り」になるまで改善を繰り返します。",
  },
  {
    q: "良いプロンプトの長さはどのくらいですか？",
    a: "「必要な情報を過不足なく含む」ことが基本です。短すぎると曖昧な出力になり、長すぎると重要な指示が埋もれます。役割・タスク・制約・出力形式を含む150〜400文字程度が多くのケースで機能します。",
  },
  {
    q: "プロンプトテンプレートを作るメリットは何ですか？",
    a: "再現性・品質の安定・作業効率化の3点です。毎回ゼロから指示を考えるより、テンプレートに変数（顧客名・商品名等）を入れるだけで一定品質の出力を得られます。",
  },
  {
    q: "ChatGPTとClaudeではプロンプトの書き方が違いますか？",
    a: "基本原則は共通ですが、モデルごとに得意・不得意があります。Claudeは長文・論理的な文章・コード生成に強く、ChatGPTは指示への即応性・マルチモーダル（画像入力）に優れています。同じプロンプトでも出力が異なるため、両方で試してみることを推奨します。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "プロンプトを使ったコンテンツ制作" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "自動化フローへのプロンプト活用" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "コンテンツ制作の効率化" },
  { href: "/ai/internal-tools", label: "AI社内ツール", desc: "社内AI活用の設計" },
  { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "チャットボットのプロンプト設計" },
  { href: "/contact", label: "無料相談", desc: "プロンプト設計のご相談" },
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
              <span style={{ color: "#0F172A" }}>プロンプトエンジニアリング・設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Prompt Engineering</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              プロンプトエンジニアリング・設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              プロンプトエンジニアリングとは、AIへの指示文（プロンプト）を最適化して、必要な出力を安定して得る技術です。同じAIツールを使っていても、プロンプトの品質で出力の質は大きく変わります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ビジネスでAIを活用する場合、毎回違う出力が返ってきては業務に組み込めません。再現性の高いプロンプトをテンプレート化し、誰が使っても一定品質の成果が得られる体制を構築することが重要です。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="プロンプトエンジニアリング・AI指示設計のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center px-8 md:px-20" style={{ background: "rgba(13,27,42,0.5)" }}>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Prompt Design</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                正しい指示があれば、AIは<br />期待通りの成果を出せる
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Core Principles</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              プロンプト設計の6つの基本原則
            </h2>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "役割を明確にする（Role Prompting）", b: "「あなたはSEO専門家です」「あなたは飲食店向けのマーケターです」のように、AIに具体的な役割を与えます。専門家として回答するモードに切り替えることで出力の精度が上がります。" },
                { n: "02", t: "具体的な出力形式を指定する", b: "「箇条書きで5つ」「200文字以内で」「表形式で」「JSONで出力」など、出力の形式を明確に指定します。曖昧な指示は曖昧な出力を生みます。" },
                { n: "03", t: "参考情報・コンテキストを提供する（Few-shot）", b: "「以下の例を参考に〇〇してください」と例を示すことで、AIが期待する方向性を理解します。ブランドの文体見本・過去の投稿・参考記事を添えると効果的です。" },
                { n: "04", t: "制約条件を明記する", b: "「〇〇は含めないでください」「敬体（ですます調）で書いてください」「日本語で」「SEOキーワード『〇〇』を自然に含めてください」など、してほしいこと・してほしくないことを明記します。" },
                { n: "05", t: "段階的に指示する（Chain of Thought）", b: "複雑なタスクは一度に全部指示するのではなく、「まず構成を作って」→「次に各セクションを書いて」のように段階的に進めます。一度に処理させすぎると品質が下がります。" },
                { n: "06", t: "テンプレート化して再利用する", b: "うまくいったプロンプトはドキュメントに保存してテンプレート化します。変数（顧客名・商品名・キーワード等）を差し替えるだけで再利用できる形にすることで業務効率が大幅に上がります。" },
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

        {/* Why Prompt Design Matters */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Business Value</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ビジネスでプロンプト設計が重要な理由
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              プロンプト設計は、AIを「試してみる段階」から「業務に組み込む段階」に移行するための核心技術です。標準化されたプロンプトライブラリを整備することで、誰がAIを使っても一定品質の成果を出せる組織体制が生まれます。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "再現性のある品質の確保", body: "優れたプロンプトをテンプレート化・共有することで、スキルの高い担当者が不在でも同じ品質のアウトプットを得られます。属人化を防ぎ、組織全体のAI活用レベルを底上げします。" },
                { title: "時間・コストの削減", body: "毎回「どう指示すればいいか」を考える時間を省けます。変数を入れ替えるだけで動くテンプレートが揃えば、1つのタスクにかかる時間が大幅に短縮されます。" },
                { title: "AIの出力品質の向上", body: "曖昧な指示はAIから曖昧な回答しか引き出せません。適切な役割・制約・出力形式を設計することで、AIが持つ能力の上限に近い出力を安定して得られます。" },
                { title: "業務への安全な組み込み", body: "品質基準を満たしたプロンプトを標準化することで、AIの活用を業務フローに安全に組み込めます。出力のバラつきリスクを最小化し、ブランドトーンの一貫性を保ちます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="プロンプトエンジニアリングについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="プロンプト設計のご相談"
          body="業種・業務内容に合わせたプロンプトテンプレートの設計・AI活用ワークフローの構築をサポートします。「AIを使いたいが効果が出ない」というお悩みをお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
