import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI活用支援サービス｜ChatGPT・Claude APIを使った業務自動化・AI導入支援｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAI活用支援サービス。ChatGPT・Claude APIを活用した業務自動化・チャットボット構築・AIコンテンツ制作支援をご支援。東京都葛飾区を拠点に全国対応。",
  keywords: ["AI活用支援", "ChatGPT活用", "Claude API", "業務自動化", "チャットボット構築", "AI導入支援", "AI業務効率化"],
  openGraph: {
    title: "AI活用支援サービス｜ChatGPT・Claude APIを使った業務自動化・AI導入支援｜株式会社サイプレス",
    description: "サイプレスのAI活用支援サービス。ChatGPT・Claude API活用から業務自動化・AI導入まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/ai" },
};

const faqItems = [
  {
    q: "AI活用支援はどんな企業に向いていますか？",
    a: "繰り返し業務が多い・コンテンツ制作に時間がかかっている・問い合わせ対応を効率化したい・マーケティング業務の一部を自動化したいという企業に向いています。業種を問わず、リソースが限られる中小企業や個人事業主にも適しています。",
  },
  {
    q: "ChatGPTやClaudeをビジネスに活用するには何が必要ですか？",
    a: "まず活用目的の明確化（どの業務を効率化したいか）と、適切なプロンプト設計が必要です。社内データとの連携が必要な場合はAPIの設定・カスタムGPTの構築が必要になります。サイプレスではプロンプト設計から導入支援・社員教育まで対応します。",
  },
  {
    q: "チャットボットはどのようなシステムで構築しますか？",
    a: "用途に応じて、ChatGPT APIを活用したカスタムチャットボット、LINE公式アカウントとの連携チャットボット、Webサイト組み込みのチャットボットなどを構築します。FAQ・製品情報を連携した高精度な回答ができるシステムの設計も可能です。",
  },
  {
    q: "AIを使ったコンテンツ制作支援とはどういうサービスですか？",
    a: "AIを活用したSEO記事・SNS投稿・メルマガ・商品説明文などのコンテンツ制作ワークフローの設計と支援を行います。AIが生成したドラフトに人間が専門知識・一次情報を追加する「AI×人間協働」のコンテンツ制作体制を構築します。",
  },
  {
    q: "業務自動化はどの範囲まで対応できますか？",
    a: "主にマーケティング・広報・カスタマーサポート・社内文書作成などの知識業務の自動化を支援しています。Zapier・Make（旧Integromat）・n8nなどのノーコード自動化ツールとAIの組み合わせによるワークフロー自動化が得意です。",
  },
  {
    q: "AI活用にはどのくらいのコストがかかりますか？",
    a: "ChatGPT APIやClaude API自体の費用は使用量に応じた従量課金（月数千円〜）です。サイプレスの支援費用は、導入コンサルティング・プロンプト設計・ワークフロー構築の内容によって異なります。まずは無料相談でご相談ください。",
  },
  {
    q: "社員がAIを活用できるように研修してもらえますか？",
    a: "はい、ChatGPT・Claude等のLLMの基本的な使い方から、業務別の活用事例・プロンプト作成のコツまでを解説するAI活用研修（オンライン・対面）を実施しています。参加者のスキルレベルや業種に合わせてカスタマイズします。",
  },
  {
    q: "SEO対策やAIO対策と組み合わせて依頼できますか？",
    a: "はい、AI活用支援をSEO・AIO・MEO・Web制作と組み合わせた統合的なWebマーケティング支援が可能です。AIを使った効率的なコンテンツSEOの運用体制構築と、SEO対策を一緒に進めることで、費用対効果の高い集客基盤を構築できます。",
  },
  {
    q: "AIのセキュリティ・情報漏洩リスクが心配です。どう対策しますか？",
    a: "機密情報をAPIに送信しない設計・社内専用の閉じたLLM環境（Azure OpenAI等）の選択・利用規約の確認・社内ガイドラインの整備を支援します。情報管理の観点から安全に活用できる設計をご提案します。",
  },
  {
    q: "どのAIツール・APIが自社に合うか分かりません。相談できますか？",
    a: "はい、業務内容・予算・社内のITリテラシー・既存システムとの連携要件などをヒアリングし、ChatGPT・Claude・Gemini・ローカルLLMの中から最適なツールをご提案します。ツールありきではなく課題解決から逆算して選定します。",
  },
  {
    q: "AIチャットボットの精度が低い場合はどう改善しますか？",
    a: "回答精度の低さはプロンプト設計・RAG（検索拡張生成）の実装・知識ベースの品質に起因することが多いです。テスト・フィードバックサイクルを通じて継続的に改善します。導入後の精度改善もサポート範囲に含まれます。",
  },
  {
    q: "n8n・Zapier・Makeの違いは何ですか？どれを選べばいいですか？",
    a: "Zapierはシンプルで使いやすく月額費用がかかります。Makeは複雑なフローに強く視覚的に設計できます。n8nはオープンソースでセルフホスト可能なため、コスト抑制・カスタマイズ性を重視する場合に適しています。用途と予算に合わせてご提案します。",
  },
  {
    q: "AI導入後の社員教育はどのように行いますか？",
    a: "業務別のプロンプトライブラリ・活用マニュアルを整備し、ハンズオン形式の研修を実施します。研修後も月次でのフォローアップ・活用状況の確認・追加トレーニングを継続的に提供します。",
  },
  {
    q: "Claude APIとChatGPT APIの違いは何ですか？",
    a: "どちらも高性能なLLMですが、Claudeは長文処理・文書要約・安全性の高い応答が得意で、ChatGPTはツール連携・マルチモーダル（画像理解）の実績が豊富です。用途に合わせて最適なAPIを選定します。",
  },
  {
    q: "プロンプト設計の支援はどのように行われますか？",
    a: "業務フローのヒアリング後、目的・出力形式・制約条件を整理したプロンプトを設計します。繰り返し使えるテンプレート形式に整理し、社内展開できる「プロンプトライブラリ」として納品します。",
  },
  {
    q: "AI導入のROIはどのように計算しますか？",
    a: "削減できる業務時間（時間×時給）・対応可能件数の増加・ミス削減による手戻りコストを試算します。プロトタイプ段階での実測データをもとに、現実的なROI試算をご提示します。導入優先度の判断材料としてご活用いただけます。",
  },
  {
    q: "既存のシステム・CRMとAIを連携させることはできますか？",
    a: "APIが公開されているシステム（Salesforce・HubSpot・kintone・Notionなど）であれば、n8n・Makeを介したAI連携が可能です。既存システムとの接続要件を確認したうえで、実現可能な連携方法をご提案します。",
  },
  {
    q: "小規模な事業者でもAI活用支援を依頼できますか？",
    a: "はい、個人事業主・小規模事業者にも対応しています。大がかりなシステム開発ではなく、現実的なノーコードツールとAIの組み合わせで、すぐに業務効率化の成果を出せる最小構成からスタートできます。",
  },
  {
    q: "AI活用支援の契約形態は月額・スポットどちらですか？",
    a: "スポットでの導入コンサルティング・構築から、月額での継続サポートまで対応しています。初回はスポット契約で課題整理・プロトタイプ開発を行い、本格導入後に継続サポートに移行する流れが多いです。",
  },
  {
    q: "AIで自動生成したコンテンツはSEOに影響しますか？",
    a: "AI生成コンテンツそのものはGoogleのガイドラインで禁止されていませんが、品質・一次情報・E-E-A-Tが重要です。AIドラフトに専門知識・実体験・固有データを加えて品質を高める「AI×人間協働」の制作フローをご提案します。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎知識" },
  { href: "/ai/automation", label: "業務自動化", desc: "マーケティング業務のAI自動化" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "AIチャットボットの導入" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "AI×人間協働のコンテンツ制作" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携" },
  { href: "/ai/prompt", label: "プロンプト設計支援", desc: "業務別プロンプトの設計" },
  { href: "/ai/training", label: "AI活用研修", desc: "社員向けAI活用トレーニング" },
  { href: "/ai/rag", label: "RAG・ナレッジベース構築", desc: "社内データ連携AIの構築" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "AIを活用したコンテンツSEO" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "Next.js高品質Web制作" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleビジネスプロフィール最適化" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "SEO記事・ブログ運用" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/claude-api", label: "Claude API活用ガイド", desc: "Claude APIの使い方と事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/knowledge/n8n-automation", label: "n8n自動化ガイド", desc: "n8nでのワークフロー構築" },
  { href: "/industry/clinic", label: "医療・クリニックのAI活用", desc: "医療現場でのAI支援" },
  { href: "/industry/ec", label: "ECサイトのAI活用", desc: "EC業界でのAI自動化" },
  { href: "/industry/lawyer", label: "士業のAI活用", desc: "弁護士・税理士事務所のAI導入" },
  { href: "/cost/ai", label: "AI活用支援の費用", desc: "料金プランと相場" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "AI活用支援のご相談はこちら" },
];

export default function ServicesAiPage() {
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
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AI活用支援</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Utilization Service</p>
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
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold" style={{ background: "#0F172A", color: "#FFFFFF" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/ai" className="inline-block px-6 py-3 text-[13px] font-semibold" style={{ border: "1.5px solid #E8E4DC", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_09 (4).jpg" alt="AI活用支援・業務自動化・ChatGPT活用のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "サイプレスのAI活用支援サービスが対応する業務・ツール・サービスの範囲",
                "ChatGPT・Claude APIを活用した業務自動化の具体的な仕組みと事例",
                "AI導入前によくある課題・失敗パターンとその原因・解決策",
                "EC・医療・士業・建設など8業種別のAI活用支援ポイント",
                "初回相談からAI本番導入・社員教育までの10ステップの支援フロー",
                "AI導入効果を測るための具体的なKPI（7指標）と計測方法",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
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

        {/* AIを活用しないリスク */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why Act Now</p>
            <h2 className="font-black text-[26px] mb-12" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              AIを活用しないリスク｜なぜ今取り組むべきか
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  num: "01",
                  title: "AIを使う競合との生産性格差が拡大している",
                  body: "AIで生産性が向上した競合に対し、AIを使わない企業は同じリソースで成果に差がつき続ける構造になっています。この差は時間が経つほど拡大します。",
                },
                {
                  num: "02",
                  title: "コンテンツ制作・SEOで大差がつき始めている",
                  body: "AIを活用したコンテンツ制作は量・質ともに向上し、AI未導入企業との検索順位差が広がっています。コンテンツ競争に遅れるリスクが現実になっています。",
                },
                {
                  num: "03",
                  title: "カスタマーサポートのコスト構造が変わりつつある",
                  body: "AI活用でサポートコストを大幅削減した事例が増えています。導入のタイミングを逃すと、コスト競争力でも差がつきます。",
                },
                {
                  num: "04",
                  title: "AI活用スキルが人材獲得にも影響する",
                  body: "AI活用環境の整備は優秀な人材の採用・定着にもプラスに働きます。「AIを使える職場かどうか」が求職者の判断基準になりつつあります。",
                },
                {
                  num: "05",
                  title: "早期導入者ほど学習データ・ノウハウが蓄積される",
                  body: "今始めることで後から始めた競合より自社に合ったノウハウが蓄積され、差別化が深まります。AIは使えば使うほど活用精度が高まる特性があります。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-8 py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="text-[28px] font-black shrink-0 leading-none" style={{ color: "#c4b89a", fontFamily: "var(--font-serif)" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "AIを使いたいが何から始めればいいか分からない",
                  body: "AIツールの種類が多く、自社に何が合うか判断できないケースは非常に多いです。まず「どの業務を効率化したいか」を特定し、そこから逆算してツール選定・プロンプト設計を行うことが成功の第一歩になります。",
                },
                {
                  title: "ChatGPTは使っているが業務効率化に繋がっていない",
                  body: "単発で使っているだけでは、繰り返し使えるプロンプトテンプレートや自動化ワークフローが構築できていない状態です。業務に組み込まれた「仕組み」にすることで、初めて効率化の効果が継続します。",
                },
                {
                  title: "ブログやSNS投稿の作業に時間がかかりすぎる",
                  body: "コンテンツ制作に毎回数時間かかっているのは、AIを活用したドラフト生成・構成テンプレート・承認フローが整備されていないからです。AI×人間協働のワークフロー設計で制作時間を大幅に短縮できます。",
                },
                {
                  title: "問い合わせ対応が追いつかない",
                  body: "同じ内容の問い合わせが繰り返し届いているなら、FAQページの充実とAIチャットボットの導入で初回対応を自動化できます。担当者は複雑な問い合わせのみに集中できる体制が構築できます。",
                },
                {
                  title: "AI導入コストが高そうで踏み出せない",
                  body: "大規模なシステム開発が必要と思われがちですが、ChatGPT APIの従量課金は月数千円〜始めることができます。ノーコードツール（n8n・Make・Zapier）との組み合わせで、低コストで実用的な自動化が可能です。",
                },
                {
                  title: "社内にAIエンジニアがいない",
                  body: "AIエンジニアがいなくても、ノーコードツールとAPIの組み合わせで多くの自動化は実現できます。サイプレスが設計・構築を代行し、運用マニュアルを整備することで、エンジニアなしで継続運用できる体制を作ります。",
                },
                {
                  title: "セキュリティ・情報漏洩リスクが不安",
                  body: "機密情報をAPIに送信しない設計・Azure OpenAI等の企業向けセキュアな環境の活用・社内ガイドラインの整備で安全に運用できます。何をAIに渡してよいか・何を渡してはいけないかのルール設計が重要です。",
                },
                {
                  title: "どのAIツール・APIが自社に合うか分からない",
                  body: "ChatGPT・Claude・Gemini・ローカルLLMにはそれぞれ得意不得意があります。業務内容・予算・セキュリティ要件・既存システムとの連携要件から最適なツールを選定することが、効果的なAI活用の前提条件です。",
                },
                {
                  title: "カスタムAIツールの開発費用が不明",
                  body: "スクラッチ開発ではなく、APIとノーコードツールの組み合わせで多くの要件は対応でき、コストを大幅に抑えられます。まずプロトタイプで小さく始め、効果を確認しながら段階的に拡張する進め方をお勧めします。",
                },
                {
                  title: "AI導入後の社員教育が不安",
                  body: "ツールを導入しても社員が使いこなせなければ意味がありません。業務別のプロンプトライブラリ・活用マニュアル・ハンズオン研修・月次フォローアップを組み合わせることで、社内にAI活用文化を定着させます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の支援ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の支援ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  industry: "EC・小売",
                  body: "商品説明文・SEOタイトル・メルマガのAI一括生成で制作コストを大幅に削減できます。購買レビューの感情分析・顧客問い合わせへの自動初回返信設計も有効です。商品数が多いほどAI活用の効果が大きくなります。",
                },
                {
                  industry: "飲食",
                  body: "メニュー説明・季節キャンペーンのコピー・多言語翻訳・SNS投稿文の自動生成で広報コストを削減できます。Googleビジネスプロフィールへの返信文・予約対応の自動化もAIとノーコードツールで実現できます。",
                },
                {
                  industry: "医療・クリニック",
                  body: "患者向けFAQページのAI補助制作・問い合わせの自動振り分け・初回問い合わせへの自動返信を設計します。医療情報は必ず医師が監修する体制を前提に、事務的な問い合わせ対応の効率化を中心に支援します。",
                },
                {
                  industry: "士業",
                  body: "契約書チェックの補助・法律FAQ・提案書ドラフトの作成補助をAIで支援します。クライアントへの定型レポートの自動生成ワークフロー・相談窓口のチャットボット対応で事務作業を大幅に削減できます。",
                },
                {
                  industry: "不動産",
                  body: "物件説明文・物件特徴コピーのAI生成で制作コストを削減できます。問い合わせへの自動初回返信・内見予約の自動案内・FAQチャットボットを組み合わせることで、営業担当者の初動対応負荷を軽減します。",
                },
                {
                  industry: "学習塾・スクール",
                  body: "生徒の学習レベル・苦手分野に合わせた問題・学習コンテンツのAI生成が可能です。保護者への月次レポートのAI補助作成・体験授業申し込みへの自動返信・資料請求の自動対応も設計できます。",
                },
                {
                  industry: "BtoB・SaaS",
                  body: "サポートチャットボット・FAQドキュメントのAI自動生成・製品仕様書の補助作成で顧客対応コストを削減できます。セールスメール・提案書のパーソナライズ生成・営業報告書の自動要約も有効です。",
                },
                {
                  industry: "建設・リフォーム",
                  body: "見積もり依頼への初回返信自動化・現場報告書のAI補助作成・施工事例コンテンツのSEO記事生成を支援します。施工エリア別のLPコピーをAIで効率的に量産し、地域検索への露出を高める戦略も設計します。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#c4b89a" }}>{item.industry}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: ご支援の流れ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Support Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ご支援の流れ
            </h2>
            <div className="max-w-4xl">
              {[
                { step: "STEP 01", t: "無料相談・業務ヒアリング", b: "現在の業務フロー・課題・目標をヒアリングします。どの業務に最も時間がかかっているか・どこに改善余地があるかを具体的に確認します。オンライン・対面いずれも対応可能です。" },
                { step: "STEP 02", t: "AI活用可能業務の洗い出し", b: "ヒアリング内容をもとに、AIで効率化できる業務を優先度順に整理します。「すぐに始められる施策」と「中長期で取り組む施策」に分類し、ロードマップを策定します。" },
                { step: "STEP 03", t: "導入優先度・ROI試算", b: "削減できる業務時間・対応件数の増加・ミス削減コストなどを試算し、ROI（投資対効果）の見通しをご提示します。予算・期待成果に合わせた導入優先度を決定します。" },
                { step: "STEP 04", t: "ツール選定（ChatGPT/Claude/カスタム）", b: "業務内容・予算・セキュリティ要件・既存システムとの連携要件をもとに、最適なAIツール・APIを選定します。ノーコードツール（n8n・Make・Zapier）の選定も同時に行います。" },
                { step: "STEP 05", t: "プロトタイプ開発", b: "選定したツール・APIを使って、最小構成のプロトタイプを開発します。実際に動くものを小さく作り、業務への適用可能性・精度・操作感を確認します。" },
                { step: "STEP 06", t: "社内テスト・フィードバック", b: "プロトタイプを実際の業務で試用し、出力精度・操作性・フローの改善点をフィードバックしていただきます。プロンプトの調整・ワークフローの修正を繰り返して品質を高めます。" },
                { step: "STEP 07", t: "本番導入・API連携", b: "テストを経た設計を本番環境に実装します。既存システム（CRM・CMSなど）とのAPI連携・自動化ワークフローの本番稼働・アクセス管理の設定を行います。" },
                { step: "STEP 08", t: "社員向け利用ガイド作成", b: "業務別のプロンプトライブラリ・操作マニュアル・活用事例集を整備します。社員が自律的にAIを活用できる「仕組み」として定着させるためのドキュメントを作成します。" },
                { step: "STEP 09", t: "効果測定設定", b: "業務時間削減率・AI対応件数・コンテンツ制作速度などのKPIを設定します。Google Analytics・スプレッドシート・専用ダッシュボードで定量的な効果測定ができる環境を整えます。" },
                { step: "STEP 10", t: "継続的な改善・機能追加", b: "月次ミーティングで活用状況・KPIを確認し、改善提案・機能追加・新たな自動化施策をご提案します。AIツールのアップデートに合わせた活用法の見直しも継続的に行います。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[11px] font-semibold shrink-0 mt-1 px-2 py-1" style={{ background: "#c4b89a", color: "#ffffff", letterSpacing: "0.1em" }}>{item.step}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  kpi: "業務時間削減率",
                  how: "業務ログ・タイムトラッキングツール（Toggl等）",
                  desc: "AI導入前後の同一業務にかかる時間を比較します。週次・月次の積み上げで年間の削減工数・人件費換算額を可視化できます。最もわかりやすいROI指標です。",
                },
                {
                  kpi: "AI対応問い合わせ率",
                  how: "チャットボット管理画面・問い合わせ管理ツール",
                  desc: "全問い合わせのうち、AIチャットボットが自動対応できた割合です。この割合が高いほど担当者の対応負荷が下がります。解決できなかった問い合わせの分析も改善に活用します。",
                },
                {
                  kpi: "コンテンツ制作速度（記事/本）",
                  how: "コンテンツ管理スプレッドシート・CMS投稿ログ",
                  desc: "AI活用前後で、1記事あたりの制作時間がどれだけ短縮されたかを計測します。月間の制作本数・品質（検索順位・滞在時間）との相関を定期的に確認します。",
                },
                {
                  kpi: "月間AI処理件数",
                  how: "APIダッシュボード（OpenAI・Anthropic管理画面）",
                  desc: "月間にAIが処理した件数（文書生成・問い合わせ対応・翻訳など）の合計です。処理件数が増えるほど活用定着度が高いことを示します。APIコストとの比較でROIを算出できます。",
                },
                {
                  kpi: "人件費削減効果",
                  how: "業務時間削減率×平均時給で試算",
                  desc: "削減できた業務時間を人件費に換算した金額です。月次・年次で積み上げることでAI導入投資の回収期間を算出できます。経営判断のための最も重要な財務指標です。",
                },
                {
                  kpi: "ミス・エラー削減率",
                  how: "業務ログ・修正件数の記録",
                  desc: "AI導入前後での入力ミス・文章エラー・対応漏れの発生件数を比較します。繰り返し業務での正確性向上は、手戻りコスト・クレーム対応コストの削減に直結します。",
                },
                {
                  kpi: "導入ROI",
                  how: "（削減コスト−導入費用）÷ 導入費用 × 100",
                  desc: "AI導入にかかった費用と、削減できたコスト・増加した売上の比較で算出します。初月はマイナスでも、3〜6ヶ月単位で黒字化するケースが多いため、中長期での評価が重要です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] font-medium mb-2" style={{ color: "#c4b89a" }}>計測場所: {item.how}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 選ばれる理由 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Choose Us</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのAI活用支援が選ばれる4つの理由
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  num: "01",
                  title: "マーケティングと連動したAI支援",
                  body: "SEO・MEO・AIOと連携した包括的なAI活用を設計します。単独のAI導入ではなく、集客全体の効率化を視野に入れた支援が強みです。",
                },
                {
                  num: "02",
                  title: "ビジネス成果にフォーカスした設計",
                  body: "「AIを導入すること」ではなく「業務効率化・集客増加」を目的に支援します。ツールありきではなく、課題解決から逆算した設計を行います。",
                },
                {
                  num: "03",
                  title: "ノーコードツールとの組み合わせ",
                  body: "Zapier・Make・n8nを活用した現実的な自動化を提案します。大規模なシステム開発なしに、すぐに動かせる自動化を優先します。",
                },
                {
                  num: "04",
                  title: "継続的なフォローアップ",
                  body: "導入後も月次ミーティングで活用状況を確認・改善提案を続けます。AI活用は導入がゴールではなく、継続的な改善で成果が出るものと考えています。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 py-8" style={{ borderTop: "1px solid #E8E4DC", borderLeft: "3px solid #c4b89a", paddingLeft: "24px", marginLeft: "-3px" }}>
                  <span className="text-[20px] font-black shrink-0" style={{ color: "#c4b89a", fontFamily: "var(--font-serif)" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
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
