import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "プロンプトエンジニアリング・プロンプト設計とは｜ChatGPT/Claudeを最大限活用する指示設計｜株式会社サイプレス",
  description:
    "ChatGPT・Claudeを最大限に活用するプロンプト設計の基本原則と実践技術。Few-Shot・Chain of Thought・ロールプレイなど業務別プロンプトテンプレート設計からプロンプトライブラリ構築まで体系的に解説。",
  keywords: ["プロンプトエンジニアリング", "プロンプト設計", "プロンプトデザイン", "ChatGPT プロンプト", "Claude プロンプト", "AI指示文", "プロンプトテンプレート"],
  openGraph: {
    title: "プロンプトエンジニアリング・プロンプト設計とは｜ChatGPT/Claudeを最大限活用する指示設計｜株式会社サイプレス",
    description: "ChatGPT・Claudeを最大限に活用するプロンプト設計。Few-Shot・Chain of Thought・業務別テンプレート設計からプロンプトライブラリ構築まで解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_20_52.jpg", width: 1200, height: 630 }],
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
    a: "再現性・品質の安定・作業効率化の3点です。毎回ゼロから指示を考えるより、テンプレートに変数（顧客名・商品名等）を入れるだけで一定品質の出力を得られます。チームで共有することで組織全体のAI活用レベルも底上げされます。",
  },
  {
    q: "ChatGPTとClaudeではプロンプトの書き方が違いますか？",
    a: "基本原則は共通ですが、モデルごとに得意・不得意があります。Claudeは長文・論理的な文章・コード生成に強く、ChatGPTは指示への即応性・マルチモーダル（画像入力）に優れています。同じプロンプトでも出力が異なるため、両方で試してみることを推奨します。",
  },
  {
    q: "Few-ShotプロンプティングとZero-Shotの違いは何ですか？",
    a: "Zero-Shotは例示なしで指示だけを与える方法、Few-Shotは「こういう入力にはこういう出力をして」と例を複数示す方法です。Few-Shotは出力フォーマットや文体を正確に制御したい場合に効果的で、社内文書・ブランドコピーなど品質基準が明確な業務に向いています。",
  },
  {
    q: "Chain of Thought（CoT）プロンプティングはどんな時に使いますか？",
    a: "複雑な推論・多段階の判断・数値計算を含むタスクに有効です。「ステップ・バイ・ステップで考えてください」とプロンプトに加えるだけで、AIが思考プロセスを明示しながら回答するため、精度が上がりミスが減ります。",
  },
  {
    q: "ロールプレイ（役割設定）プロンプトの効果はありますか？",
    a: "「あなたは〇〇の専門家です」と役割を与えることで、AIが専門的な文脈から回答するモードに切り替わります。特定業界の専門用語・トーン・視点が必要な場合に効果的で、法律・医療・マーケティングなど専門性の高い業務で有用です。",
  },
  {
    q: "プロンプトインジェクションリスクとは何ですか？",
    a: "外部入力（ユーザーのテキスト・Webから取得したデータ等）に悪意ある指示が含まれ、AIが意図しない動作をするリスクです。社内ツールや顧客向けAIを構築する際は、入力値のサニタイズ・システムプロンプトの保護・出力の検証など対策が必要です。",
  },
  {
    q: "日本語と英語どちらでプロンプトを書くべきですか？",
    a: "日本語コンテンツを生成する場合は日本語プロンプトが自然な出力になりやすいですが、英語プロンプトの方が指示の精度が高い場合もあります。GPT-4o・Claude 3.5以降は日本語でも十分な品質ですが、専門的・技術的なタスクでは英語プロンプト+日本語出力指示の組み合わせも有効です。",
  },
  {
    q: "プロンプトライブラリとはどのように管理すればいいですか？",
    a: "NotionやConfluence・Googleドキュメントなどのナレッジベースに業務別・用途別で整理して保存します。タグ付け・検索機能・バージョン履歴が使えるツールが適しています。Gitでバージョン管理する方法もエンジニアチームでは効果的です。",
  },
  {
    q: "出力品質をスコアリングする方法を教えてください。",
    a: "「正確性・完結性・指示への準拠・文体の適切さ・利用可能性」の5項目を5段階評価するルーブリックを設計し、複数の出力を比較評価します。AIを使って別のプロンプトの出力品質を評価する「LLM-as-a-Judge」手法も精度向上に効果的です。",
  },
  {
    q: "プロンプトのバージョン管理はなぜ重要ですか？",
    a: "AIモデルのアップデートや業務変更に伴いプロンプトを更新する際、以前のバージョンとの品質比較や差分の確認が必要になります。バージョン管理がないとどの変更が品質向上・低下に影響したか追跡できなくなるため、継続改善の障壁になります。",
  },
  {
    q: "システムプロンプトとユーザープロンプトの違いは何ですか？",
    a: "システムプロンプトはAIの基本的な役割・制約・ペルソナを設定する定常的な指示です。ユーザープロンプトは個別タスクごとの指示です。API経由でAIを利用する場合、システムプロンプトで一貫したブランドトーンやセキュリティルールを設定し、ユーザープロンプトで個別業務を指示する使い分けが基本です。",
  },
  {
    q: "GPT-4oとClaude 3.5の特性の違いを教えてください。",
    a: "GPT-4oはマルチモーダル対応（画像・音声入力）・応答速度が優れており、幅広い汎用タスクに対応します。Claude 3.5 Sonnetは長文処理・論理的文章生成・コード補助・指示への忠実な従い方に強みがあります。業務内容によって使い分けるか、両方を評価して選択することを推奨します。",
  },
  {
    q: "プロンプト設計の社員研修はどう進めるといいですか？",
    a: "まず「プロンプトの基本構成（役割・コンテキスト・指示・出力形式）」を1〜2時間のワークショップで理解させ、次に自分の業務に合わせたプロンプト作成を実習します。業務別のテンプレートを配布し、実務で使いながら改善するPDCAサイクルを回すことが定着のコツです。",
  },
  {
    q: "新しいAIモデルが出たらプロンプトを作り直す必要がありますか？",
    a: "完全に作り直す必要はありませんが、新モデルの特性に合わせた最適化は効果的です。新モデルリリース時に既存プロンプトで品質テストを行い、出力品質が変化したものを優先して更新するアプローチが実用的です。",
  },
  {
    q: "プロンプト設計の費用対効果をどう計算しますか？",
    a: "「プロンプト整備による作業時間削減 × 時間単価 × 月間タスク数」が削減効果です。プロンプト設計の投資（設計・研修・ライブラリ整備時間）と比較してROIを算出します。一般的に月20〜30時間の削減があれば数ヶ月で投資回収できるケースが多いです。",
  },
  {
    q: "チームでプロンプトを共有する際の注意点は何ですか？",
    a: "機密情報・顧客情報を含むプロンプトはアクセス権限を設定して管理します。またプロンプトの作成者・更新日・対象業務・利用方法を記録することで、チームメンバーが安全に活用できます。ライセンス・著作権に関わる出力を含む場合は社内ガイドラインとの整合も確認が必要です。",
  },
  {
    q: "プロンプト設計の支援を依頼することはできますか？",
    a: "はい。業種・業務内容に合わせたプロンプトテンプレートの設計・プロンプトライブラリの構築・社員研修・継続改善支援まで対応しています。「AIを使いたいが効果が出ない」「社内に使いこなせている人がいない」というお悩みからご相談ください。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "プロンプトを使ったコンテンツ制作" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "自動化フローへのプロンプト活用" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "コンテンツ制作の効率化" },
  { href: "/ai/internal-tools", label: "AI社内ツール開発", desc: "社内AI活用の設計" },
  { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "チャットボットのプロンプト設計" },
  { href: "/ai/customer-support", label: "AIカスタマーサポート", desc: "顧客対応自動化のプロンプト" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携設計" },
  { href: "/ai/rag", label: "RAG構築支援", desc: "社内データを活かすAI検索" },
  { href: "/ai/seo-content", label: "AI×SEOコンテンツ", desc: "検索流入を狙うコンテンツ設計" },
  { href: "/ai/line-bot", label: "LINE AIボット", desc: "LINE連携AIのプロンプト設計" },
  { href: "/industry/marketing", label: "マーケティングのAI活用", desc: "広告文・コピー生成プロンプト" },
  { href: "/industry/legal", label: "士業のAI活用", desc: "契約書チェック・法律Q&Aプロンプト" },
  { href: "/industry/medical", label: "医療のAI活用", desc: "医療文書・問診票プロンプト" },
  { href: "/industry/education", label: "教育のAI活用", desc: "問題作成・解説生成プロンプト" },
  { href: "/industry/sales", label: "営業のAI活用", desc: "提案書・メール文案プロンプト" },
  { href: "/industry/hr", label: "採用・HRのAI活用", desc: "求人票・面接設計プロンプト" },
  { href: "/industry/engineer", label: "エンジニアのAI活用", desc: "コードレビュー・ドキュメント生成" },
  { href: "/industry/design", label: "デザインのAI活用", desc: "DALL-E・Midjourney向けプロンプト" },
  { href: "/seo", label: "SEO対策", desc: "検索流入を増やす対策" },
  { href: "/aio", label: "AIO対策", desc: "AI検索からの流入対策" },
  { href: "/services/dx", label: "DX推進支援", desc: "デジタル変革の全体戦略" },
  { href: "/contact", label: "無料相談", desc: "プロンプト設計のご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用支援</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>プロンプトエンジニアリング・設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Prompt Engineering</p>
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
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="プロンプトエンジニアリング・AI指示設計のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center px-8 md:px-20" style={{ background: "rgba(13,27,42,0.5)" }}>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a" }}>Prompt Design</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                正しい指示があれば、AIは<br />期待通りの成果を出せる
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "プロンプトエンジニアリングの基本原則と、ビジネスで安定した出力を得るための設計方法",
                "Few-Shot・Chain of Thought・ロールプレイなど主要プロンプト技術の使い分けと効果",
                "マーケティング・法律・医療・営業など業種別プロンプトテンプレートの設計ポイント",
                "チームでプロンプトを共有・管理する「プロンプトライブラリ」の構築方法",
                "プロンプトのバージョン管理・品質スコアリング・継続改善の仕組みづくり",
                "GPT-4o・Claude 3.5など最新モデルの特性を活かしたモデル別プロンプト最適化",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl">
              {[
                {
                  n: "01",
                  t: "AIの回答が期待外れで使いこなせていない",
                  b: "「ちょっと調べて」「いい感じに書いて」のような曖昧な指示では、AIは汎用的な回答しか返せません。役割・コンテキスト・出力形式・制約条件を含む構造的な指示に変えるだけで、出力品質は大きく改善します。",
                },
                {
                  n: "02",
                  t: "同じ指示をするたびに毎回書き直している",
                  b: "毎回ゼロからプロンプトを考えることは非効率です。一度うまくいったプロンプトをテンプレート化・保存しておくことで、変数（名前・商品名・キーワード）を差し替えるだけで再利用できます。プロンプトライブラリの整備が解決策です。",
                },
                {
                  n: "03",
                  t: "業務別のプロンプトテンプレートがない",
                  b: "営業・マーケティング・カスタマーサポートなど業務ごとに最適なプロンプト設計は異なります。業務別のテンプレートが整備されていないと、担当者が個人のスキルに依存してAIを使う状態が続き、組織全体での活用が進みません。",
                },
                {
                  n: "04",
                  t: "AIの出力品質がバラバラ",
                  b: "同じプロンプトでも毎回品質が異なる場合、温度パラメーター（randomness）の設定や指示の曖昧さが原因です。出力形式・長さ・文体を具体的に指定し、Few-Shotで例を提示することで安定した品質に近づきます。",
                },
                {
                  n: "05",
                  t: "ロールプレイ・ペルソナ設定の活用方法が分からない",
                  b: "AIに「〇〇の専門家」「〇〇業界15年のベテラン」などの役割を与えることで、専門的な視点からの回答が得られます。特定の顧客ペルソナとして回答させることでマーケティングリサーチにも活用できます。設定方法を知らずに汎用的な使い方しかしていないケースが多くあります。",
                },
                {
                  n: "06",
                  t: "Chain of Thought（段階的思考）の使い方が分からない",
                  b: "「ステップ・バイ・ステップで考えてください」と指示を加えるだけで、AIが推論プロセスを明示しながら回答します。複雑な問題解決・リスク分析・戦略立案などで精度が向上しますが、この技術を使っていないケースが多くあります。",
                },
                {
                  n: "07",
                  t: "Few-Shot学習（例示）の効果的な使い方が分からない",
                  b: "「入力→出力」の例を2〜5件プロンプトに含めることで、AIが期待するフォーマット・文体・内容の方向性を理解します。ブランドの文体統一・特定フォーマットの文書生成・社内標準への準拠など、品質基準が明確な業務で特に有効です。",
                },
                {
                  n: "08",
                  t: "プロンプトインジェクションリスクを知らない",
                  b: "顧客向けAIツールや社内ツールに外部テキストを入力させる仕組みを作る場合、悪意ある入力によってAIが想定外の動作をするリスクがあります。システムプロンプトの保護・入力値のサニタイズ・出力の検証など、セキュリティ設計が必要です。",
                },
                {
                  n: "09",
                  t: "日本語 vs 英語のプロンプトの使い分けが分からない",
                  b: "GPT-4o・Claude 3.5以降は日本語でも十分な精度が出ますが、技術文書・論理的推論・英語コンテンツ生成は英語プロンプトが有利なケースがあります。タスクに応じて「英語で指示・日本語で出力」の組み合わせを試すことで品質が改善することがあります。",
                },
                {
                  n: "10",
                  t: "最新モデル（GPT-4o / Claude 3.5等）の特性を活かせていない",
                  b: "各モデルには得意・不得意があります。旧モデル向けに設計したプロンプトが新モデルでは最適でない場合もあります。新モデルリリース時に主要プロンプトのテストを実施し、モデル特性に合わせた最適化を行うことで出力品質を最大化できます。",
                },
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

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Use Cases</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                {
                  industry: "マーケティング",
                  note: "広告文・コピー生成プロンプト",
                  body: "ターゲットペルソナ・商品特徴・訴求ポイントを入力するだけで広告文・LP見出し・SNS投稿を生成するプロンプトテンプレートを整備します。ブランドトーンに合わせたFew-Shotを設計することで文体の一貫性を保ちます。",
                },
                {
                  industry: "法律・士業",
                  note: "契約書チェック・法律Q&Aプロンプト",
                  body: "「以下の契約書を確認し、リスク条項と修正提案を指摘してください」のような構造化プロンプトで、法的文書レビューを効率化します。判例・法令検索や法律Q&A回答の補助にもプロンプト設計が有効です。",
                },
                {
                  industry: "医療",
                  note: "問診票整理・医療文書プロンプト",
                  body: "患者の問診内容を構造化して要約するプロンプト、検査結果を患者向けに平易な言葉で説明するプロンプトなど、医療現場の文書業務を効率化します。個人情報・医療情報の取り扱いには厳格なセキュリティ設計が必要です。",
                },
                {
                  industry: "教育",
                  note: "問題作成・解説生成プロンプト",
                  body: "単元・難易度・問題形式を指定するだけで演習問題・テストを自動生成するプロンプトを整備します。生徒の誤答パターンに応じた解説を生成するプロンプトで、個別最適化された学習支援が実現できます。",
                },
                {
                  industry: "営業",
                  note: "提案書・メール文案プロンプト",
                  body: "顧客情報・課題・提案内容を入力するだけで提案書のドラフトを生成するプロンプトで、営業担当者の資料作成時間を削減します。フォローメール・アポイント依頼メールなど定型コミュニケーションのテンプレート化も効果的です。",
                },
                {
                  industry: "採用・HR",
                  note: "求人票・面接設計プロンプト",
                  body: "職種・スキル要件・会社の文化を入力することで求人票の文章を生成するプロンプトを整備します。面接評価シート・行動面接質問リスト・入社後オンボーディング計画など、採用フロー全体のドキュメント作成を効率化します。",
                },
                {
                  industry: "エンジニア",
                  note: "コードレビュー・ドキュメント生成プロンプト",
                  body: "「以下のコードをレビューし、セキュリティ・パフォーマンス・可読性の観点で改善点を指摘してください」のような構造化プロンプトで、コードレビューを効率化します。APIドキュメント・README・仕様書の自動生成にも活用できます。",
                },
                {
                  industry: "デザイン",
                  note: "DALL-E / Midjourney向けプロンプト",
                  body: "画像生成AIのプロンプトはテキスト生成AIとは異なる設計が必要です。スタイル・構図・照明・カラーパレット・雰囲気を具体的に指定する画像生成プロンプトのテンプレートを整備することで、ブランドに一貫したビジュアルを効率的に生成できます。",
                },
              ].map((item, i) => (
                <div key={i} className="pt-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-black text-[15px]" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.industry}</p>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded" style={{ background: "#F9F8F5", color: "#c4b89a", border: "1px solid #E8E4DC" }}>{item.note}</span>
                  </div>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 導入・実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              導入・実装フロー
            </h2>
            <div className="max-w-4xl">
              {[
                {
                  n: "01",
                  t: "利用目的の明確化",
                  b: "どの業務・どのアウトプットのためにプロンプトを設計するかを明確にします。「何を生成したいか」「誰が使うか」「品質基準は何か」を定義することで、設計の方向性が定まります。",
                },
                {
                  n: "02",
                  t: "現在のプロンプトの問題点分析",
                  b: "現在使っているプロンプトがある場合、「曖昧な指示がないか」「役割設定があるか」「出力形式が指定されているか」「制約条件が明記されているか」の4点で分析し、改善ポイントを特定します。",
                },
                {
                  n: "03",
                  t: "良いプロンプトの構成要素理解（役割 / コンテキスト / 指示 / 出力形式）",
                  b: "効果的なプロンプトの基本構造「役割（Role）・コンテキスト（Context）・指示（Task）・出力形式（Format）・制約条件（Constraints）」を理解します。この構造に沿ってプロンプトを設計することで、再現性の高い出力が得られます。",
                },
                {
                  n: "04",
                  t: "業務別プロンプトテンプレート設計",
                  b: "特定した業務（営業・マーケティング・カスタマーサポート等）ごとにプロンプトテンプレートを設計します。変数（{{顧客名}}・{{商品名}}・{{キーワード}}等）を含む形式にすることで、差し替えるだけで再利用できるテンプレートになります。",
                },
                {
                  n: "05",
                  t: "テスト・評価（アウトプット品質スコアリング）",
                  b: "設計したプロンプトを実際の業務データで動かし、「正確性・完結性・指示への準拠・文体・利用可能性」の5軸で品質評価します。複数のプロンプトを比較してA/Bテストを行い、最適なバージョンを選定します。",
                },
                {
                  n: "06",
                  t: "チームでのプロンプト共有（プロンプトライブラリ）",
                  b: "Notion・Confluence・Googleドキュメントなどで業務別・用途別に整理したプロンプトライブラリを構築します。プロンプト名・用途・使い方・作成者・更新日を記録し、チーム全員がすぐに活用できる形で共有します。",
                },
                {
                  n: "07",
                  t: "バージョン管理の仕組み構築",
                  b: "プロンプトを更新する際に旧バージョンを保持し、品質変化を追跡できる仕組みを構築します。Gitでのバージョン管理、またはNotionのページ履歴機能を活用することで、品質改善の記録と必要時のロールバックが可能になります。",
                },
                {
                  n: "08",
                  t: "社員研修（プロンプト作成の基礎）",
                  b: "「プロンプトの基本構成・良い例と悪い例の比較・業務別テンプレートの使い方・注意事項」を1〜2時間のワークショップで伝えます。研修後は実業務でのプロンプト作成を試みてもらい、フィードバックセッションで改善します。",
                },
                {
                  n: "09",
                  t: "継続的な改善・更新",
                  b: "月次でプロンプトの品質評価を実施し、スコアが低いものから改善します。業務内容の変化・社内ルールの更新・新しい知見があればプロンプトに反映します。改善ログを記録し、組織のプロンプト設計ノウハウとして蓄積します。",
                },
                {
                  n: "10",
                  t: "新モデル対応",
                  b: "GPT-4o・Claude 3.5など新モデルがリリースされた際に、主要プロンプトの品質テストを実施します。新モデルの特性（長文処理・推論精度・コスト）を評価し、プロンプトの最適化とモデル移行の判断を行います。",
                },
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
                <div key={i} className="pt-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI & Metrics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl">
              {[
                {
                  n: "01",
                  kpi: "AIアウトプット品質スコア（5段階）",
                  detail: "正確性・完結性・指示への準拠・文体の適切さ・利用可能性の5軸で出力を5段階評価します。月次で主要プロンプトの品質スコアを計測し、改善の優先度を決定します。スプレッドシートでの評価ログ管理が実用的です。",
                },
                {
                  n: "02",
                  kpi: "作業時間削減率",
                  detail: "プロンプトテンプレート導入前後で同業務にかかる時間を比較します。タイムトラッキングツール（Toggl・Clockify等）またはアンケートで計測し、月次推移を確認します。",
                },
                {
                  n: "03",
                  kpi: "プロンプト再利用率",
                  detail: "プロンプトライブラリに登録されたテンプレートのうち、実際に使用されている割合を計測します。利用ログ・ライブラリ閲覧数で確認し、再利用率が低いプロンプトはUI改善・再設計を検討します。",
                },
                {
                  n: "04",
                  kpi: "チームのAI活用率",
                  detail: "対象チーム内でAIツールを実際に業務利用している人数・割合を週次で確認します。ログイン数・アクティブユーザー数・業務別利用回数を管理画面で追跡し、活用が進んでいない部署へのサポートに活かします。",
                },
                {
                  n: "05",
                  kpi: "プロンプトライブラリ登録数",
                  detail: "ライブラリに登録されたプロンプトテンプレートの総数を月次で記録します。登録数の推移がチームのAI活用への取り組み度合いを示す定性指標になります。月次目標を設定して増加を促進します。",
                },
                {
                  n: "06",
                  kpi: "1件あたりのAPI利用コスト",
                  detail: "月間API費用を処理タスク数で割った1件あたりコストを計算します。OpenAI・Anthropicのコンソールで月次利用量を確認し、プロンプト最適化（トークン削減）によるコスト改善効果を測定します。",
                },
                {
                  n: "07",
                  kpi: "業務別ミス削減率",
                  detail: "AIで補助した業務における修正・差し戻し・エラーの発生件数を、AI導入前後で比較します。品質管理ログ・レビューフィードバックで計測し、プロンプト改善とミス削減の相関を確認します。",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.kpi}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="プロンプトエンジニアリングについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="プロンプト設計のご相談"
          body="業種・業務内容に合わせたプロンプトテンプレートの設計・プロンプトライブラリの構築・AI活用ワークフローの整備をサポートします。「AIを使いたいが効果が出ない」というお悩みをお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
