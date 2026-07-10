import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIワークフロー設計・AI導入ロードマップとは｜組織全体のAI活用戦略と段階的導入計画｜株式会社サイプレス",
  description:
    "AIワークフロー設計・AI導入ロードマップの基礎から実践まで解説。組織全体のAI活用戦略の立て方、部門別ロードマップ策定、効果測定KPI設計まで体系的に紹介します。",
  keywords: ["AIワークフロー設計", "AI導入ロードマップ", "AI活用戦略", "業務自動化設計", "AI導入計画", "組織AI活用"],
  openGraph: {
    title: "AIワークフロー設計・AI導入ロードマップとは｜組織全体のAI活用戦略と段階的導入計画｜株式会社サイプレス",
    description: "組織全体のAI活用戦略と段階的な導入計画の設計方法を解説。AIワークフロー設計から効果測定まで体系的にご支援します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/workflow" },
};

const faqItems = [
  {
    q: "AIワークフロー設計とAI導入ロードマップの違いは何ですか？",
    a: "AIワークフロー設計は「特定の業務フローにAIをどう組み込むか」という個別設計です。一方AI導入ロードマップは「組織全体でAIをどの順序・体制で展開していくか」という中長期計画です。両者は相補的で、ロードマップが方向性を示し、ワークフロー設計がその具体実装を担います。",
  },
  {
    q: "n8n・Zapier・Makeのどれを選べばいいですか？",
    a: "Zapierは初心者が最も使いやすく、アプリ連携数が最多ですがコストは高めです。Makeはビジュアルフローエディタが強力でコストパフォーマンスが良く複雑なフローに対応。n8nはオープンソース・セルフホスト可能でコストを抑えつつ最も柔軟ですが技術的知識が必要です。予算・技術レベル・セキュリティ要件で選択します。",
  },
  {
    q: "AI導入ロードマップはどのくらいの期間で策定できますか？",
    a: "通常、現状調査（1〜2週間）→課題整理（1週間）→ロードマップ策定（1〜2週間）の計3〜5週間が目安です。規模・部門数・社内調整の複雑さによって前後します。サイプレスでは初回ヒアリングから約4週間でドラフトを提示します。",
  },
  {
    q: "AI導入後の効果測定はどのように行いますか？",
    a: "業務時間削減・コスト削減・AI利用率・ロードマップ進捗率などのKPIを事前に設定し、月次で計測します。ツールはGoogle Looker Studio・Notionダッシュボード・各ツールのログAPIを活用します。定性評価（社員満足度・品質向上）も併せて記録することで、経営層への報告精度が上がります。",
  },
  {
    q: "社員のAI抵抗感はどうすれば解消できますか？",
    a: "「AIに仕事を奪われる」という不安には、AI活用で生まれた時間を付加価値業務に使えることを具体的に示すことが有効です。また小さな成功体験を積み重ねるパイロット導入、業務に即したハンズオン研修、AIガイドラインの整備による心理的安全性の確保が抵抗感を下げる実績のあるアプローチです。",
  },
  {
    q: "ChatGPT APIをn8nと連携する方法は？",
    a: "n8nにはOpenAI（ChatGPT）の公式ノードがあり、APIキーを設定するだけで連携できます。テキスト生成・画像生成・音声テキスト変換を個別ノードとして設定し、フロー内のどのステップでもAIを呼び出せます。Claudeも同様にカスタムHTTPリクエストノードで連携可能です。",
  },
  {
    q: "セキュリティ・コンプライアンス上の注意点は何ですか？",
    a: "AIツールへの個人情報・機密情報の入力は、各サービスの利用規約・学習オプトアウト設定・データ保存ポリシーを事前に確認してください。社内向けにはAI利用ガイドライン（入力禁止情報の定義・承認フロー・ログ保存ルール）の策定が必須です。AzureOpenAIやセルフホストLLMはデータが外部送信されないため機密業務に適しています。",
  },
  {
    q: "ベンダーロックインを防ぐにはどうすればいいですか？",
    a: "特定AIサービスへの依存を防ぐには、①プロンプト・フロー設計をツール非依存の形で文書化する、②APIレイヤーを抽象化してサービス切り替えを容易にする、③複数ベンダーを用途別に使い分けるマルチベンダー戦略が有効です。n8nのオープンソース採用もロックインリスクを下げる選択肢です。",
  },
  {
    q: "AI活用の費用対効果を経営層に説明するにはどうしたら良いですか？",
    a: "ROI説明には「削減工数×人件費単価」「エラー削減による損失回避額」「売上への寄与（リード増・CV率向上）」の3軸で数値化します。パイロット導入の実績データを根拠として示し、投資回収期間を算出すると経営層の承認率が上がります。初期は保守的な試算で提示し、実績で上方修正する進め方が信頼を得やすいです。",
  },
  {
    q: "エラーが起きたときの対処はどうしますか？",
    a: "Zapier・Make・n8nにはエラーハンドリング機能（エラー発生時の通知・リトライ設定・代替フロー）があります。特に重要な自動化フローでは、エラー発生時にSlackやメールで担当者に通知する設定を必ず組み込みます。また定期的なフローのテスト実行とログ確認も重要です。",
  },
  {
    q: "既存のシステム・ツールと連携できますか？",
    a: "Zapier・Make・n8nは数百〜数千のアプリに対応しています。Salesforce・HubSpot・kintone・Google Workspace・Slack・LINE・Notion・Shopify等との連携実績があります。REST APIが公開されているシステムであれば、カスタムHTTPリクエストで連携が可能です。",
  },
  {
    q: "AI活用ガイドラインには何を含めるべきですか？",
    a: "最低限①利用可能なAIツールの一覧と用途制限、②入力禁止情報の定義（個人情報・機密情報・未公開情報）、③生成物の確認・承認フロー、④セキュリティインシデント発生時の報告手順、⑤定期見直しスケジュールの5項目を含めることを推奨します。",
  },
  {
    q: "小規模企業でもAIロードマップは必要ですか？",
    a: "社員10名未満の企業でも、AI活用方針を言語化しておくことで重複投資・ツールの乱立・属人化を防げます。規模が小さいほどシンプルなロードマップ（3〜6ヶ月・2〜3業務）から始めて早期に成果を出す方が組織への定着が早くなります。",
  },
  {
    q: "AIリテラシー研修はどのように進めますか？",
    a: "段階的な3ステップが効果的です。①基礎理解（AIの仕組み・できること/できないこと・社内ガイドライン）、②ハンズオン（実業務に近い演習でツール操作を体験）、③実践フォロー（導入後1〜2ヶ月間の質問対応・活用事例共有）。役職別にカリキュラムを分けると定着率が上がります。",
  },
  {
    q: "AI活用の属人化を防ぐにはどうすればいいですか？",
    a: "特定の担当者のみがAIツールを使える状態を防ぐには、①ワークフローの設計書・マニュアルの整備、②複数担当者への権限付与と操作研修、③定期的な活用事例の社内共有会（月1回程度）、④チームでのKPI管理が有効です。ナレッジを個人に留めず組織の資産にすることが重要です。",
  },
  {
    q: "データ品質が低い場合にAI活用はできますか？",
    a: "AI活用の精度はデータ品質に直結します。まずデータクレンジング（重複削除・表記統一・欠損補完）とデータ収集フローの見直しが先決です。品質改善と並行してAIを使う場合は、精度が低い前提でのユースケース（大量処理の下書き生成など人が確認するフロー）から始めることを推奨します。",
  },
  {
    q: "継続的な改善サイクルはどう設計しますか？",
    a: "月次レビュー（KPI確認・問題点の洗い出し）→四半期振り返り（ロードマップ進捗・次フェーズへの展開判断）→年次戦略更新（技術トレンド・事業戦略との整合性確認）の3層サイクルが基本です。改善結果は必ず文書化し、次のパイロット計画に反映させます。",
  },
  {
    q: "AIワークフローのパイロット期間はどのくらいが適切ですか？",
    a: "効果測定に十分なデータが蓄積される期間として、シンプルな自動化フローで4〜6週間、複雑な意思決定支援系のワークフローで2〜3ヶ月が目安です。パイロット期間中は週次で進捗を確認し、問題があれば即座に修正できる体制を整えておくことが重要です。",
  },
  {
    q: "AI導入ロードマップのPhase分けはどう考えますか？",
    a: "一般的にPhase 1（3〜6ヶ月）：リスクが低く効果が明確な業務でのパイロット導入・基礎リテラシー整備、Phase 2（6〜12ヶ月）：成功事例の横展開・複数部門への拡大・ガイドライン整備、Phase 3（12ヶ月以降）：戦略的AI活用・外部連携・組織能力の自立的向上という3段階が標準的です。",
  },
  {
    q: "AIワークフロー設計の相談はどこに問い合わせればいいですか？",
    a: "サイプレスでは現状調査からロードマップ策定・ワークフロー実装・社員研修・効果測定まで一貫してご支援しています。まずは無料相談フォームからご連絡ください。業種・規模・課題感に応じた最適な進め方をご提案します。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/automation", label: "業務自動化", desc: "AI自動化の全体像" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "ワークフローとチャットの連携" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作フローの自動化" },
  { href: "/ai/seo", label: "AI×SEO", desc: "AIを活用したSEO戦略" },
  { href: "/ai/analytics", label: "AIアナリティクス", desc: "データ分析の自動化" },
  { href: "/ai/prompt", label: "プロンプト設計", desc: "AIフロー内のプロンプト最適化" },
  { href: "/ai/agent", label: "AIエージェント", desc: "自律型AIエージェントの活用" },
  { href: "/ai/data", label: "AIデータ活用", desc: "データパイプライン設計" },
  { href: "/ai/customer", label: "AI顧客対応", desc: "顧客接点のAI自動化" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "ワークフロー設計・構築支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "AIを活用したSEO支援" },
  { href: "/services/web", label: "Web制作サービス", desc: "AI連携Webサイト構築" },
  { href: "/services/consulting", label: "経営・IT相談", desc: "AI戦略の経営相談" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/aio/strategy", label: "AIO戦略設計", desc: "AI検索向けコンテンツ戦略" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/column/ai", label: "AI活用コラム", desc: "AI導入事例・実践ノウハウ" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "ワークフローでの活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "ワークフロー内のプロンプト設計" },
  { href: "/industry/manufacturing", label: "製造業のAI活用", desc: "生産管理・品質管理のAI化" },
  { href: "/industry/medical", label: "医療・クリニックのAI活用", desc: "問診・診断補助・業務効率化" },
  { href: "/contact", label: "無料相談", desc: "ワークフロー設計のご相談" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function WorkflowPage() {
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
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIワークフロー設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Workflow Design</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIワークフロー設計・<br />AI導入ロードマップ
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIワークフロー設計とは、組織の業務プロセスにAIをどう組み込み、部門間をどう連携させるかを設計することです。個々のAIツール導入にとどまらず、組織全体のAI活用戦略と段階的な導入ロードマップを策定することで、点在するAI活用を面的な競争優位へと昇華させます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              n8n・Zapier・Make（Integromat）とChatGPT・Claude APIを組み合わせたフロー設計だけでなく、AI導入の優先順位付け・社員研修・効果測定KPI設計・ガイドライン策定まで、組織にAIを根付かせる一連の取り組みをご支援します。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "280px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).jpg" alt="AIワークフロー設計・AI導入ロードマップのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
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
                "AIワークフロー設計とAI導入ロードマップの違いと、なぜ両方が必要なのか",
                "組織のAI導入でよく陥る10の課題と、その根本原因の見極め方",
                "製造・建設・医療・士業など8業種別のAI活用ポイントと優先すべき業務",
                "現状調査からパイロット導入・本番展開・継続改善まで10ステップの実践フロー",
                "AI活用の成果を数値で示すための7つのKPIと、どこで計測するか",
                "AI活用を属人化させず組織の競争力に変えるための体制・仕組みの作り方",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="font-bold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ツール比較 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Tool Comparison</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              主要な自動化ツール比較
            </h2>
            <div className="max-w-5xl overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>ツール</th>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>使いやすさ</th>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>費用</th>
                    <th className="text-left py-3 font-semibold" style={{ color: "#0d1b2a" }}>向いている用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Zapier", ease: "★★★★★（最も簡単）", cost: "月額$20〜（高め）", use: "シンプルな連携・初心者・多アプリ連携" },
                    { tool: "Make（Integromat）", ease: "★★★★☆", cost: "月額$9〜（コスパ良い）", use: "複雑なフロー・データ変換・高度な条件分岐" },
                    { tool: "n8n（クラウド）", ease: "★★★☆☆", cost: "月額$20〜", use: "AIエージェント・カスタム処理・柔軟な設計" },
                    { tool: "n8n（セルフホスト）", ease: "★★☆☆☆（技術知識が必要）", cost: "ホスティング費のみ（実質ほぼ無料）", use: "機密データの管理・完全カスタム・大規模処理" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DC" }}>
                      <td className="py-4 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>{row.tool}</td>
                      <td className="py-4 pr-6" style={{ color: "#374151" }}>{row.ease}</td>
                      <td className="py-4 pr-6" style={{ color: "#374151" }}>{row.cost}</td>
                      <td className="py-4" style={{ color: "#374151" }}>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "AI導入を検討しているが何から始めればいいか分からない",
                  body: "AI活用の全体像が見えないまま、話題のツールを個別に試すだけでは組織的な成果につながりません。まず現状調査と課題の優先順位付けを行い、効果が明確で失敗リスクが低い業務から着手するロードマップが必要です。",
                },
                {
                  title: "部門ごとにバラバラなAI活用が起きている",
                  body: "営業・マーケ・総務それぞれが独自にツールを導入すると、ライセンスの重複・データの分断・セキュリティポリシーの不統一が生じます。全社共通のAI活用方針と部門間連携のワークフロー設計が、この問題を解消する鍵です。",
                },
                {
                  title: "AI導入後の効果測定ができていない",
                  body: "「なんとなく便利になった」で終わると、経営層への継続投資の説明ができず予算が削減されがちです。導入前にKPIを定義し、ベースライン（導入前の数値）を記録しておくことで、定量的な成果報告が可能になります。",
                },
                {
                  title: "社員のAI抵抗感・リテラシー不足",
                  body: "優れたワークフローを設計しても、使う側のリテラシーが追いついていなければ定着しません。段階的なハンズオン研修と、身近な業務での小さな成功体験の積み重ねが、組織全体のAI受容度を高める最も効果的な方法です。",
                },
                {
                  title: "データ品質が低くAI活用が難しい",
                  body: "AI精度はインプットデータの品質に直結するため、表記ゆれ・重複・欠損が多いデータベースでは期待した成果が出ません。AI活用と並行してデータクレンジングのフローを整備し、収集段階から品質を担保する仕組みを設計することが必要です。",
                },
                {
                  title: "個人頼みのAI活用で属人化している",
                  body: "特定の担当者だけがAIを使いこなしている状態は、その人が異動・退職した瞬間に価値が失われます。ワークフローの設計書・マニュアルの整備と、複数担当者への権限付与・定期的な社内共有会で、ナレッジを組織の資産に変えることが重要です。",
                },
                {
                  title: "AI活用の費用対効果が経営層に説明できない",
                  body: "「削減工数×人件費単価」「エラー削減による損失回避額」「売上への寄与」の3軸で数値化できていない企業が多くあります。パイロット導入の実績データを根拠にROIを試算し、投資回収期間を示すことで経営層の承認を得やすくなります。",
                },
                {
                  title: "セキュリティ・コンプライアンスポリシーの整備なし",
                  body: "AI利用ガイドラインが存在しない組織では、社員が無意識に個人情報や機密情報をAIに入力するリスクがあります。入力禁止情報の定義・承認フロー・ログ保存ルールを盛り込んだガイドラインの策定が、安心してAIを活用できる土台になります。",
                },
                {
                  title: "ベンダーロックイン（特定AIサービスへの依存）リスク",
                  body: "単一AIサービスにすべての業務フローを依存させると、価格改定・サービス終了・API仕様変更の際に大きな影響を受けます。プロンプト・フロー設計をツール非依存で文書化し、APIレイヤーを抽象化しておくことで切り替えコストを最小化できます。",
                },
                {
                  title: "継続的な改善サイクルの設計がない",
                  body: "AI活用は一度導入したら終わりではなく、モデルの進化・業務変化・組織拡大に合わせた継続的な見直しが必要です。月次レビュー・四半期振り返り・年次戦略更新の3層サイクルを設計することで、AI活用を組織の持続的競争力に変えられます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある自動化フロー例 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Example Flows</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よく使われるAIワークフローの例
            </h2>
            <div className="max-w-4xl space-y-6">
              {[
                { title: "問い合わせフォーム → AI要約 → Slack通知", flow: "問い合わせ受信 → ChatGPTで内容を3行に要約 → 担当者のSlackチャンネルに通知" },
                { title: "SEO記事ドラフト自動生成", flow: "スプレッドシートのキーワードリスト → Claude APIでアウトライン生成 → Notionに下書き作成 → 担当者に通知" },
                { title: "月次SEOレポート自動作成", flow: "GSC・GA4 API → データ集計 → GPTで分析コメント生成 → Notionページに自動出力" },
                { title: "SNS投稿バリエーション生成", flow: "コアメッセージ入力 → ChatGPTで5バリエーション生成 → 担当者がレビュー → Buffer/Hootsuite自動投稿" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.flow}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Applications</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div className="grid gap-0 max-w-4xl">
              {[
                {
                  industry: "製造業",
                  point: "生産管理→品質管理→在庫管理のAI連携",
                  detail: "生産ラインのセンサーデータをAIで異常検知し、品質管理の検査工程を自動化。在庫データと需要予測AIを連携させることで過剰在庫・欠品を削減します。各工程をn8nで横断的に連携させると全体最適が実現します。",
                },
                {
                  industry: "建設",
                  point: "見積→設計補助→現場管理のAI活用",
                  detail: "過去案件データをもとにAIが見積もりの下書きを生成し、BIMデータとAIを組み合わせた設計補助で手戻りを削減。現場の進捗写真をAIで解析し、工程管理の報告書を自動作成するフローが省力化効果の高い用途です。",
                },
                {
                  industry: "医療・クリニック",
                  point: "問診→診断補助→レセプト処理",
                  detail: "問診票のテキストをAIで要約・構造化し、医師の診察準備時間を短縮。診療録からレセプトデータの下書きを自動生成することで、医事事務の工数を削減できます。個人情報保護のためAzureOpenAIやセルフホストLLMの活用を推奨します。",
                },
                {
                  industry: "士業（税理士・弁護士・行政書士）",
                  point: "相談受付→書類作成→確認承認",
                  detail: "顧客からの相談内容をAIで分類・整理し、担当者が初回対応前に情報を把握できる体制を構築。過去の類似案件データから書類の下書きをAIが生成し、担当者の確認・修正→承認のフローを設計することで業務効率が向上します。",
                },
                {
                  industry: "小売・EC",
                  point: "在庫→発注→接客→アフターのAI連携",
                  detail: "販売データと季節要因をAIが分析して自動発注の推薦を生成し、チャットボットが接客・FAQ対応。購入後のアフターフォローメール・レビュー依頼の自動化まで、顧客接点全体をワークフローでつなげると顧客体験と運営効率が同時に向上します。",
                },
                {
                  industry: "BtoB営業",
                  point: "リード獲得→商談支援→契約→フォロー",
                  detail: "Webフォームのリード情報をAIでスコアリングし、優先度に応じてCRMに自動登録・担当者へ通知。商談前に企業情報をAIが収集・要約し、契約後のオンボーディングフォローメールを自動送信するまで一連のフローを設計します。",
                },
                {
                  industry: "学校・教育機関",
                  point: "授業設計→採点補助→個別フォロー",
                  detail: "カリキュラムに基づき授業資料の下書きをAIが生成し、記述式問題の採点補助で教員の負担を軽減。個別の学習履歴をAIが分析し、苦手分野に合わせたフォロー課題を自動提案するパーソナライズ学習支援フローが導入されています。",
                },
                {
                  industry: "飲食チェーン",
                  point: "発注→シフト管理→顧客対応",
                  detail: "曜日・天候・イベントデータをもとにAIが食材発注量を推薦し、廃棄ロスを削減。過去の来店データと申請状況からシフトの最適案をAIが生成し、LINEやInstagramのコメント・DM対応をチャットボットで自動化します。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <span className="font-black text-[15px]" style={{ color: "#0d1b2a" }}>{item.industry}</span>
                      <span className="text-[12px] font-semibold" style={{ color: "#c4b89a" }}>{item.point}</span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 導入・実装フロー */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              導入・実装フロー
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  step: "AI活用現状調査（部門別）",
                  detail: "各部門の業務フローをヒアリングし、現状のAIツール利用状況・手作業の割合・課題を可視化します。部門ごとの調査票と担当者インタビューを組み合わせることで、全体の現状マップを作成します。",
                },
                {
                  step: "課題・改善機会の特定",
                  detail: "現状調査の結果から「AI化による効果が高く・リスクが低い業務」を優先度マトリクスで整理します。時間削減効果・エラーリスク・データ品質・関係者調整の容易さを軸に評価し、パイロット候補業務を絞り込みます。",
                },
                {
                  step: "AI活用ロードマップ策定（Phase 1-3）",
                  detail: "Phase 1（3〜6ヶ月）：低リスク業務でのパイロット・基礎リテラシー整備、Phase 2（6〜12ヶ月）：成功事例の横展開・複数部門への拡大、Phase 3（12ヶ月以降）：戦略的AI活用・組織能力の自立的向上という3段階のロードマップを策定します。",
                },
                {
                  step: "パイロット対象業務の選定",
                  detail: "ロードマップの優先業務から、実際にパイロット導入する業務を選定します。成果が測定しやすく・失敗しても影響が小さく・関係者が協力的な業務を選ぶことで、初期の成功確率を高めます。",
                },
                {
                  step: "試験導入・効果測定",
                  detail: "4〜8週間のパイロット期間中、週次でKPIを計測します。導入前のベースラインとの比較で「業務時間削減時間」「エラー発生率」「担当者の満足度」を記録し、本番展開の判断材料とします。",
                },
                {
                  step: "社員向けAIリテラシー研修",
                  detail: "基礎理解（AIの仕組み・できること/できないこと・社内ガイドライン）→ハンズオン（実業務に近い演習でツール操作を体験）→実践フォロー（導入後1〜2ヶ月間の質問対応・活用事例共有）の3ステップで研修を設計します。",
                },
                {
                  step: "AI活用ガイドライン策定",
                  detail: "利用可能なAIツール一覧・入力禁止情報の定義・生成物の確認承認フロー・セキュリティインシデント報告手順・定期見直しスケジュールを盛り込んだ社内ガイドラインを策定します。",
                },
                {
                  step: "本番展開",
                  detail: "パイロットの成果と課題を反映した上で本番運用を開始します。フローのエラーハンドリング設定・権限管理・ログ保存の仕組みを整備し、運用担当者への引き継ぎドキュメントを整えてから展開します。",
                },
                {
                  step: "定期評価会議設定",
                  detail: "月次レビュー（KPI確認・問題点の洗い出し）・四半期振り返り（ロードマップ進捗・次フェーズ判断）・年次戦略更新（技術トレンド・事業戦略との整合性確認）の3層サイクルを組織のカレンダーに組み込みます。",
                },
                {
                  step: "次フェーズへの展開",
                  detail: "パイロット成功業務で培ったノウハウ・ガイドライン・研修プログラムを横展開し、Phase 2・Phase 3のロードマップに従って対象業務・対象部門を拡大します。社内AI推進チームの育成も並行して進めます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
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
            <div className="max-w-4xl space-y-0">
              {[
                {
                  kpi: "AI活用業務数 ／ 全業務数",
                  where: "AI活用ロードマップの進捗管理表",
                  detail: "全業務に占めるAI活用済み業務の比率。ロードマップのPhase達成度を測る基本指標で、月次レビューで更新します。",
                },
                {
                  kpi: "社員AI利用率",
                  where: "各AIツールの管理画面・利用ログ",
                  detail: "対象社員のうちAIツールを週1回以上利用している割合。研修効果と定着度を示す指標で、部門別に計測すると施策立案に役立ちます。",
                },
                {
                  kpi: "業務時間削減時間 ／ 月",
                  where: "業務時間計測シート（導入前後比較）",
                  detail: "AI導入前の平均作業時間と導入後の作業時間の差分を月次で集計。ROI計算の分子となる最重要指標で、パイロット開始前にベースラインを必ず記録します。",
                },
                {
                  kpi: "コスト削減効果（月次）",
                  where: "経費実績・人件費計算シート",
                  detail: "削減工数×人件費単価＋ツール費用削減額で算出。経営層への報告資料の核となる指標であり、投資回収期間の算出にも使用します。",
                },
                {
                  kpi: "ロードマップ進捗率",
                  where: "AI推進プロジェクト管理ツール（Notion等）",
                  detail: "各Phaseのマイルストーンのうちオンスケジュールのものの割合。遅延が生じているフェーズを早期に把握し、リソース再配分の判断に使います。",
                },
                {
                  kpi: "社員AI研修受講率",
                  where: "研修管理システム・受講記録",
                  detail: "対象社員全体のうち規定研修を完了した割合。AI活用定着の先行指標で、受講率が低い部門は別途フォロー施策が必要なシグナルとなります。",
                },
                {
                  kpi: "経営層承認率（ROI提案）",
                  where: "意思決定会議の議事録・稟議承認記録",
                  detail: "AI活用拡大のための経営層への提案が承認された割合。ROI算出の精度・説明資料の質を反映する指標で、承認率が上がるほど組織のAI活用が加速します。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                      <p className="text-[12px] shrink-0" style={{ color: "#c4b89a" }}>計測場所：{item.where}</p>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIワークフロー設計・AI導入ロードマップについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIワークフロー設計・AI導入ロードマップのご相談"
          body="現状調査からロードマップ策定・ワークフロー実装・社員研修・効果測定まで、組織へのAI定着を一貫してご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
