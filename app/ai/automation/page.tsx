import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI業務自動化｜Make・Zapier×ChatGPT APIで繰り返し業務を自動化｜株式会社サイプレス",
  description:
    "AI業務自動化の基礎から実践まで解説。Make・Zapier・n8nとChatGPT/Claude APIを組み合わせ、繰り返し業務・ワークフローを自動化する方法。業種別の活用ポイントと導入フローを詳しく解説します。",
  keywords: ["AI業務自動化", "Make 自動化", "Zapier AI", "n8n", "ワークフロー自動化", "ノーコード自動化", "ChatGPT API 連携", "業務効率化"],
  openGraph: {
    title: "AI業務自動化｜Make・Zapier×ChatGPT APIで繰り返し業務を自動化｜株式会社サイプレス",
    description: "AI業務自動化の実践ガイド。Make・Zapier・n8nとChatGPT/Claude APIを組み合わせた繰り返し業務の自動化方法を業種別に解説。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/automation" },
};

const faqItems = [
  {
    q: "業務自動化に使えるAIツールにはどんなものがありますか？",
    a: "生成AI（ChatGPT API・Claude API・Gemini API）と、ノーコード自動化ツール（Zapier・Make/Integromat・n8n）の組み合わせが一般的です。データ処理・集計はNotionAI・Spreadsheets+GPT等も活用できます。最近はClaude等をオーケストレーターとして使うマルチエージェント構成も可能になっています。",
  },
  {
    q: "どんな業務がAIで自動化できますか？",
    a: "コンテンツ制作（SEO記事のドラフト生成・SNS投稿文・メルマガ文章）、問い合わせ対応（FAQへの自動回答・担当者振り分け）、レポート作成（GA4・GSCデータの自動集計・月次レポート生成）、社内文書（議事録・提案書のドラフト）、データ入力・分類などが代表的な自動化対象です。",
  },
  {
    q: "Zapier・Make・n8nの違いは何ですか？",
    a: "Zapierは使いやすさが最高・多数のアプリ連携に対応・月額費用が高め。Make（旧Integromat）はビジュアル設計がZapierより強力・複雑なフローに対応・コスト効率が良い。n8nはオープンソース・セルフホスト可能・APIとの連携が最も柔軟・無料で始められる（技術的知識が必要）。目的と技術レベルによって選択します。",
  },
  {
    q: "プログラミングができなくても業務自動化はできますか？",
    a: "はい。Zapier・MakeはGUI上でドラッグ&ドロップで自動化フローを設計でき、プログラミングなしで多くの業務を自動化できます。ただし、ChatGPT APIとの高度な連携・条件分岐が複雑なフロー・外部APIの利用などには若干の技術的理解が必要です。サイプレスでは設計から実装まで支援します。",
  },
  {
    q: "業務自動化の費用はどのくらいかかりますか？",
    a: "Zapier・Make・n8nなどのツール費用（月額数千円〜数万円）と、ChatGPT APIなどのAPI使用料（使用量に応じた従量課金）が必要です。サイプレスへの支援依頼費用は自動化の範囲・複雑さによって異なります。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "自動化したコンテンツのSEO品質は大丈夫ですか？",
    a: "AI生成のコンテンツを自動で公開するだけでは、SEO品質に問題が生じる可能性があります。AI生成コンテンツには必ず人間によるレビュー・専門知識の追加・一次情報の付与を行う品質チェック工程を組み込むことが重要です。「自動生成して即公開」ではなく「AI支援で効率化＋人間が品質保証」のワークフローを設計します。",
  },
  {
    q: "既に使っているCRM・MA・チャットツールと連携できますか？",
    a: "Zapier・Make・n8nは数百〜数千のアプリ連携に対応しています。Salesforce・HubSpot・Notion・Slack・Google Workspace・LINE・kintone等との連携実績があります。まずは現在お使いのツールをお聞かせいただき、連携可能性をご確認します。",
  },
  {
    q: "自動化のリスクや注意点はありますか？",
    a: "①AI生成コンテンツのファクトチェックなしでの自動公開、②個人情報・機密情報のAPIへの送信（利用規約の確認が必要）、③自動化フローのエラー監視が不十分、④過度な自動化によるブランドトーンのブレなどがリスクです。設計段階でこれらを考慮したワークフローを構築します。",
  },
  {
    q: "自動化フローにエラーが発生したらどうなりますか？",
    a: "Make・Zapier・n8nにはエラーハンドリング機能があり、エラー発生時にSlack・メール等で担当者に通知する設定ができます。エラーが起きたシナリオを自動で再試行させる設定や、エラーログを自動保存する仕組みも構築できます。本番稼働前にエラーケースを洗い出しテストすることが重要です。",
  },
  {
    q: "個人情報をAI APIに送信しても問題ありませんか？",
    a: "ChatGPT API・Claude API等のAPIサービスは、デフォルトでデータをモデル学習に使用しない設定になっています（Webブラウザ版とは異なります）。ただし、医療・金融・法務など機密性の高い情報を扱う場合は、プライバシーポリシーの確認・データ送信範囲の設計・社内規定との整合性確認が必要です。",
  },
  {
    q: "RPAとAI業務自動化は何が違いますか？",
    a: "RPA（UiPath・WinActorなど）は既存の画面操作を自動化する技術で、AIによる判断や自然言語処理は含みません。AI業務自動化は文章生成・分類・翻訳・要約などの「知的処理」を自動化できる点が大きな違いです。両者を組み合わせることで、より高度な自動化が可能になります。",
  },
  {
    q: "どの業務から自動化を始めるとよいですか？",
    a: "①毎日・毎週繰り返し発生する、②手順が明確でルール化できる、③処理件数が多い、④時間がかかる業務が自動化の優先候補です。例えば「問い合わせ内容をCRMに登録する」「週次レポートをスプレッドシートで集計する」など、ルーティン色の強い業務から着手するのが一般的です。",
  },
  {
    q: "自動化の効果はどのくらいで出ますか？",
    a: "シンプルなワークフロー（例：フォーム送信→CRM登録→Slack通知）であれば導入直後から効果が出ます。複雑なAI連携フローは初月にテスト・調整期間がありますが、2〜3ヶ月で安定稼働し効果を実感できるケースが多いです。",
  },
  {
    q: "Makeのシナリオ設計はどのくらい複雑になりますか？",
    a: "単純な2〜3ステップのフローから、条件分岐・繰り返し・エラーハンドリング・AI処理を含む数十ステップの複雑なフローまで対応できます。初めての方は月額費用が比較的安く、視覚的に確認しやすいMakeから始めることをおすすめしています。",
  },
  {
    q: "自動化したワークフローのメンテナンスはどうすればよいですか？",
    a: "自動化ツールのアップデート・API仕様変更・連携先サービスの変更によって動作が変わる場合があります。月次でワークフローの動作確認・エラーログの確認・処理件数の推移確認を行うことが推奨されます。サイプレスでは月次メンテナンスサポートにも対応しています。",
  },
  {
    q: "ChatGPT APIとClaude APIはどちらを使うべきですか？",
    a: "処理の種類によって使い分けることが多いです。Claude APIは長文処理・文書分析・指示の遵守精度が高く、ChatGPT APIは汎用性・コスト効率・多言語対応が強みです。同じワークフロー内で用途別に使い分けるケースも増えています。",
  },
  {
    q: "自社でメンテナンスできるように引き継ぎを受けられますか？",
    a: "はい。導入後に自社で運用・メンテナンスできるよう、フロー設計書・操作マニュアル・よくあるトラブルの対応手順書を提供します。担当者向けのハンズオン研修にも対応しており、内製化を支援します。",
  },
  {
    q: "AIを使った業務自動化に法的な規制はありますか？",
    a: "日本では現在AI固有の包括的な規制法はありませんが、個人情報保護法・薬機法・金融商品取引法など業種別規制への準拠が必要です。EU AI規制法の影響を受ける取引がある場合は別途確認が必要です。設計段階でコンプライアンスチェックを組み込むことが重要です。",
  },
  {
    q: "社内の反発なく自動化を進めるコツはありますか？",
    a: "「仕事を奪う」ではなく「雑務を減らして本来の仕事に集中できる」という価値として提示することが重要です。担当者を自動化プロジェクトに巻き込み、実際に時間が削減された体験をしてもらうことで、現場からの支持を得やすくなります。",
  },
  {
    q: "サイプレスに依頼した場合の支援範囲を教えてください。",
    a: "業務フロー棚卸し・自動化候補の選定・ROI試算・ツール選定・ワークフロー設計・API連携・テスト・本番稼働・監視ダッシュボード設定・月次メンテナンスまで一貫してご支援します。部分的なサポート（設計のみ・実装のみ等）にも対応しています。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "問い合わせ対応の自動化" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作の効率化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携設計" },
  { href: "/ai/sns-automation", label: "SNS投稿AI自動化", desc: "Instagram・X・TikTok自動化" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "ブログ記事の自動化" },
  { href: "/ai/report", label: "AIレポート自動化", desc: "月次レポートの自動生成" },
  { href: "/ai/seo-content", label: "AI SEOコンテンツ", desc: "検索に強いコンテンツ生成" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サイプレスのAI支援" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索への引用獲得" },
  { href: "/seo", label: "SEO対策", desc: "検索エンジン最適化" },
  { href: "/industry/ec", label: "EC・小売のAI活用", desc: "EC業務の自動化" },
  { href: "/industry/restaurant", label: "飲食業のAI活用", desc: "飲食店向け業務自動化" },
  { href: "/industry/real-estate", label: "不動産のAI活用", desc: "不動産業の業務効率化" },
  { href: "/industry/medical", label: "医療・クリニックのAI活用", desc: "医療現場の業務自動化" },
  { href: "/industry/construction", label: "建設業のAI活用", desc: "建設・リフォームの自動化" },
  { href: "/industry/btob", label: "BtoBのAI活用", desc: "法人向け業務自動化" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "具体的な活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "効果的なプロンプトの書き方" },
  { href: "/knowledge/make-guide", label: "Make活用ガイド", desc: "Makeの使い方と設計のコツ" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/contact", label: "無料相談", desc: "業務自動化のご相談" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function AutomationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }}>AI活用</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>業務自動化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Automation</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI業務自動化<br />Make・Zapier×ChatGPT APIで繰り返し業務を自動化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AI業務自動化とは、ChatGPT・Claude等の生成AIとMake・Zapier・n8nなどのノーコード自動化ツールを組み合わせ、繰り返し業務を自動化する取り組みです。コンテンツ制作・レポート作成・問い合わせ対応・データ入力などを効率化できます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              少ないリソースで最大の成果を出すために、AIを「仕事を奪うもの」ではなく「仕事を助けるツール」として活用することが重要です。どの業務を自動化し、どこに人間の判断を残すかの設計が成功の鍵です。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 00_32_52.jpg" alt="AI業務自動化・Make・Zapier・n8n・ノーコード自動化のイメージ" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column" }}>
              {[
                "Make・Zapier・n8nそれぞれの特徴とChatGPT/Claude APIとの連携方法",
                "どの業務から自動化すべきかを判断するROI試算と優先順位の付け方",
                "業種別（EC・飲食・不動産・士業・医療・BtoBなど）の具体的な自動化ポイント",
                "エラーハンドリング・品質確認フローを含む安全な自動化ワークフローの設計方法",
                "個人情報・機密情報を含む業務を自動化する際のセキュリティ上の注意点",
                "自動化効果を定量的に把握するKPI設定と計測場所の一覧",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Areas */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Automation Areas</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIで自動化できるマーケティング業務
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0 48px" }}>
              {[
                { title: "コンテンツ制作の効率化", body: "SEO記事のキーワード調査・アウトライン生成・ドラフト作成をAIで半自動化。SNS投稿文・メルマガ・広告コピーのバリエーション生成も効率化できます。人間がレビュー・品質向上する工程を必ず設けます。" },
                { title: "月次レポートの自動作成", body: "Google Analytics 4・Search ConsoleのデータをAPIで取得し、AI（GPT等）が分析コメントを生成、Notionやスプレッドシートに自動出力するワークフローを構築します。毎月の集計・コメント作業を大幅に削減できます。" },
                { title: "問い合わせ・FAQ対応の自動化", body: "FAQ情報を知識ベースに登録し、問い合わせフォームやチャットからの質問に対してAIが自動回答するシステムを構築します。担当者への振り分け・エスカレーションのルールも設定します。" },
                { title: "SNS投稿スケジューリング", body: "AI生成した投稿テキスト・画像をBuffer・Hootsuite等と連携し、自動スケジューリングするワークフローを構築します。人間がレビューした後に自動投稿する半自動フローが品質担保に有効です。" },
                { title: "リードナーチャリングの自動化", body: "問い合わせ者へのステップメール・フォロー連絡をCRM（HubSpot・Salesforce等）と連携してAI支援で自動化します。担当者への通知・メモの自動生成も含みます。" },
                { title: "社内文書・議事録の効率化", body: "会議録音→文字起こし→要約・アクションアイテム抽出→Notionへの自動保存というワークフローをAIで構築します。議事録作成の時間を大幅に削減できます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC", paddingTop: "24px", paddingBottom: "24px" }}>
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  t: "繰り返し作業に時間を取られている",
                  b: "毎日・毎週同じ手順で行う作業（データ転記・メール送信・レポート集計など）は、ルール化しやすい自動化の最有力候補です。これらを自動化するだけで月に数十時間を本来の業務に回せます。",
                },
                {
                  t: "Excelマクロでは限界を感じている",
                  b: "Excelマクロは同一PC内の処理には強いですが、他のクラウドサービスとの連携・外部への通知・AIによる判断が絡む処理には対応できません。Make・Zapier等のクラウドベースの自動化ツールに移行することで、より広範囲の業務を自動化できます。",
                },
                {
                  t: "RPA（UiPath等）は高すぎて導入できない",
                  b: "エンタープライズ向けRPAは高価ですが、Make・Zapier・n8nはSaaS連携型の自動化を月額数千円〜から実現できます。AIとの組み合わせでRPAより柔軟な処理も可能なケースが増えており、中小企業でも十分な費用対効果を得られます。",
                },
                {
                  t: "ノーコードツール（Make/Zapier）を使いたいが設定が難しい",
                  b: "Make・Zapierは直感的に操作できるよう設計されていますが、API連携・JSONパース・条件分岐などが絡む複雑なフローは設計経験が必要です。サポートなしで始めると途中でつまずくケースが多いため、最初の設計をサポートから受けることで導入成功率が高まります。",
                },
                {
                  t: "AIとの連携方法が分からない",
                  b: "ChatGPT APIやClaude APIはMakeのHTTPモジュール・ZapierのWebhookを通じて連携できます。APIキーの設定・プロンプトの渡し方・レスポンスの受け取り方のパターンを一度理解すれば、様々なワークフローに応用できます。",
                },
                {
                  t: "どの業務を自動化すべきか判断できない",
                  b: "「繰り返し発生する」「手順が明確」「処理件数が多い」「時間がかかる」の4条件を満たす業務が自動化の優先候補です。全業務の時間計測を行い、最も時間のかかる繰り返し業務から着手することがROI最大化の近道です。",
                },
                {
                  t: "自動化後の品質確認フローがない",
                  b: "完全自動化ではなく、AIが処理→人間が最終確認→実行という「半自動化」フローを設計することが品質維持の鍵です。確認作業自体もできる限り短時間で完了できるよう、差分・要約・フラグ表示などを自動化ツール側で設定することが重要です。",
                },
                {
                  t: "エラー発生時の対応が不安",
                  b: "Make・Zapier・n8nにはエラー時の通知機能・リトライ機能・エラーログ保存機能があります。設計段階でエラーケースを想定し、「エラーが出たらSlackに通知→担当者が手動対応」というフォールバックを設定しておくことで、本番稼働後の不安を大幅に減らせます。",
                },
                {
                  t: "セキュリティ・個人情報の扱いが心配",
                  b: "AIのAPIサービスは業務用APIでは学習利用されない設定になっていますが、送信するデータの範囲・匿名化・暗号化については事前設計が必要です。特に医療・金融・士業など機密情報が多い業種では、送信データの設計とプライバシーポリシーの確認を必ず行います。",
                },
                {
                  t: "費用対効果の計算が分からない",
                  b: "ROI計算は「削減できる時間×時給換算」と「ツール・API費用」の比較で算出できます。月20時間削減できれば時給3,000円換算で月6万円分の価値があり、ツール費用が月1〜2万円程度であれば3〜4ヶ月以内に投資回収できます。導入前にROI試算を行い、経営判断の材料とすることが重要です。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-bold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0" }}>
              {[
                {
                  industry: "EC・小売",
                  point: "注文→在庫更新→発送通知の自動化",
                  detail: "新規注文発生時に在庫管理システムを自動更新し、発送完了メール・SMS通知を自動送信するフローを構築します。問い合わせへの自動回答と担当者への振り分けも自動化することで、スタッフの手作業を大幅に削減できます。",
                },
                {
                  industry: "飲食",
                  point: "予約確認→スタッフ通知→リマインド自動化",
                  detail: "ネット予約受付時にスタッフへSlack/LINE通知・前日自動リマインドメール送信・キャンセル時の自動対応まで一連のフローを自動化します。Googleフォームや食べログ等との連携実績もあります。",
                },
                {
                  industry: "不動産",
                  point: "問い合わせ→物件情報送付→フォローメール自動化",
                  detail: "問い合わせフォーム送信を起点に、条件に合う物件情報をAIが選定してメール送付→数日後のフォローメール→担当者通知まで自動化します。対応漏れを防ぎながら、潜在顧客へのナーチャリングを効率化できます。",
                },
                {
                  industry: "士業",
                  point: "書類受取→チェックリスト→担当者通知自動化",
                  detail: "クライアントから書類を受領したら、AIが書類種別を判定→必要なチェックリストを自動生成→担当者に通知するフローを構築します。書類の種類・進捗状況のステータス管理も自動化でき、ミス・対応漏れを防げます。",
                },
                {
                  industry: "製造",
                  point: "発注→承認→受発注管理の自動化",
                  detail: "発注依頼フォームの送信→上長への承認依頼→承認後の発注処理→受発注管理台帳への自動記録というワークフローをMake/n8nで構築します。承認フロー・ステータス更新・関係者への通知を全自動化できます。",
                },
                {
                  industry: "医療",
                  point: "予約→リマインド→アンケート自動化",
                  detail: "Web予約システムとの連携で、予約確定メール・前日リマインド・当日後のアンケート送付を自動化します。個人情報の取り扱いには特別な注意が必要なため、データ送信範囲の設計と院内規定との整合性確認を前提に構築します。",
                },
                {
                  industry: "BtoB",
                  point: "リード獲得→CRM登録→営業通知自動化",
                  detail: "Web問い合わせ・ホワイトペーパーDL・セミナー申込などのリード情報をHubSpot/Salesforceに自動登録し、担当営業へSlack通知→初回フォローメール自動送信まで即時対応できる体制を構築します。",
                },
                {
                  industry: "建設",
                  point: "見積依頼→担当割振→進捗管理自動化",
                  detail: "見積依頼フォームの送信から、案件情報のスプレッドシート登録・担当者への自動割り振り・進捗ステータスの更新・顧客へのフォローメールまで一連のフローを自動化します。対応漏れ防止と顧客体験向上を同時に実現できます。",
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px 24px 28px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-bold text-[12px] tracking-widest uppercase" style={{ color: "#c4b89a" }}>{item.industry}</span>
                  </div>
                  <p className="font-semibold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.point}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 導入・実装フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              導入・実装フロー
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  step: "01",
                  t: "業務フロー棚卸し（全業務の時間計測）",
                  b: "1週間〜2週間にわたり全業務の種類・所要時間・頻度を計測・記録します。スプレッドシートやToggl等のタイムトラッキングツールを使い、担当者ごとの業務時間を可視化することが出発点です。",
                },
                {
                  step: "02",
                  t: "自動化候補選定（繰り返し/ルール明確/大量）",
                  b: "棚卸し結果から「繰り返し発生する」「手順が明確でルール化できる」「処理件数が多い」業務を自動化候補として抽出します。AIが必要かどうか（判断が必要か否か）も同時に判定します。",
                },
                {
                  step: "03",
                  t: "優先度・ROI計算",
                  b: "各自動化候補について「月間削減時間×時給」で価値を算出し、ツール・API費用との比較でROIを計算します。投資回収期間が6ヶ月以内の案件から優先して着手することで、早期に効果を実感できます。",
                },
                {
                  step: "04",
                  t: "ツール選定（Make/Zapier/n8n）",
                  b: "処理の複雑さ・連携するサービス数・チームの技術レベル・月額予算をもとに最適なツールを選定します。シンプルなフローはZapier、複雑なロジックはMake、コストを抑えたい場合はn8nが有力候補です。",
                },
                {
                  step: "05",
                  t: "AI連携設計（ChatGPT/Claude API）",
                  b: "どの処理にAIが必要か（文章生成・分類・要約・翻訳等）を特定し、API選定・プロンプト設計・出力形式の設計を行います。AI処理のコストと精度のバランスを考慮したモデル選定も重要です。",
                },
                {
                  step: "06",
                  t: "ワークフロー構築",
                  b: "選定したツールでワークフローを実際に構築します。シンプルなフローから段階的に構築し、複雑な条件分岐・エラーハンドリング・AI連携を順次追加していく進め方が安全です。",
                },
                {
                  step: "07",
                  t: "テスト・エラーハンドリング設定",
                  b: "正常ケース・異常ケース・境界値ケースでのテストを実施します。エラー発生時の通知設定・リトライ設定・フォールバック（手動対応への切り替え）を設定し、本番稼働後の安定性を確保します。",
                },
                {
                  step: "08",
                  t: "本番稼働",
                  b: "テスト完了後に本番稼働を開始します。最初の2週間は実際の処理件数・エラー件数・処理時間を細かく確認し、問題が発生した場合に即対応できる体制を維持します。",
                },
                {
                  step: "09",
                  t: "監視ダッシュボード設定",
                  b: "自動化フローの稼働状況・処理件数・エラー率・API使用量をリアルタイムで確認できる監視ダッシュボードをNotionやスプレッドシートで構築します。異常値が発生したら自動アラートを送信する設定も行います。",
                },
                {
                  step: "10",
                  t: "月次メンテナンス",
                  b: "月次でワークフローの動作確認・エラーログの確認・API仕様変更への対応・プロンプトの改善を実施します。削減時間・処理件数・コストのKPIをレポートし、次の自動化候補の検討も継続的に行います。",
                },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.step}</span>
                  <div>
                    <p className="font-semibold mb-2" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 className="font-black mb-10" style={{ fontSize: "clamp(20px,2.8vw,32px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  kpi: "自動化による時間削減時間/月",
                  how: "自動化前後の処理時間を比較。タスク管理ツール（Toggl・Notion等）で計測した業務時間と、自動化後の確認・修正時間の差分で算出。",
                },
                {
                  kpi: "処理件数（自動化前後比較）",
                  how: "月間の自動処理件数（問い合わせ対応数・レポート生成数・登録件数等）を計測。Make/Zapier/n8nの処理ログまたはスプレッドシートの集計で確認。",
                },
                {
                  kpi: "エラー率",
                  how: "全処理件数に対するエラー発生件数の割合。Make・Zapier・n8nのエラーログまたは監視ダッシュボードで週次確認。目標値はエラー率1%以下。",
                },
                {
                  kpi: "人件費削減効果",
                  how: "削減時間×担当者の時給換算で月次の人件費削減額を算出。管理職や専門職の場合、時給を高めに設定するとROI計算の精度が上がる。",
                },
                {
                  kpi: "ROI（自動化投資回収期間）",
                  how: "（ツール費用+API費用+初期構築費用）÷月次人件費削減額で投資回収期間を算出。月次でモニタリングし、当初計画との乖離を確認。",
                },
                {
                  kpi: "ワークフロー稼働率",
                  how: "月間の総稼働時間に対する正常稼働時間の割合。監視ダッシュボードまたはMake/n8nのシナリオ履歴で確認。目標値は稼働率99%以上。",
                },
                {
                  kpi: "担当者の残業時間削減",
                  how: "自動化対象業務を担当していたメンバーの月間残業時間の推移を確認。給与明細・勤怠管理システムで計測。自動化による生産性向上の最終指標として活用。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold mb-1" style={{ fontSize: "15px", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.kpi}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.how}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI業務自動化についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI業務自動化のご相談"
          body="どの業務を自動化するかの選定から、ROI試算・ワークフロー設計・Make/Zapier実装・本番稼働まで一貫してご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
