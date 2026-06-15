import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI社内ツール開発・構築とは｜ChatGPT API・Claude APIで業務効率化カスタムツール｜株式会社サイプレス",
  description:
    "ChatGPT API・Claude APIを活用した社内業務効率化カスタムツール開発。RAG・Fine-tuning・既存システム連携まで対応。製造・建設・士業・医療など業種別の活用ポイントを体系的に解説。",
  keywords: ["AI社内ツール", "ChatGPT API 業務効率化", "Claude API 社内システム", "RAG 社内データ", "AI開発 中小企業", "社内DX", "カスタムAI開発"],
  openGraph: {
    title: "AI社内ツール開発・構築とは｜ChatGPT API・Claude APIで業務効率化カスタムツール｜株式会社サイプレス",
    description: "ChatGPT API・Claude APIを活用した社内業務効率化カスタムツール開発。RAG・Fine-tuning・既存システム連携まで対応。",
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
    a: "機密情報をパブリックなAI（ChatGPT等）に入力しないこと、プライベートデプロイ（自社サーバーまたはプライベートクラウド）の検討、利用規定の整備が重要です。AzureのOpenAI ServiceやAWS Bedrockを使えば、データが外部のAI学習に使われない環境を構築できます。",
  },
  {
    q: "AIによる業務自動化はどの業種に効果的ですか？",
    a: "文書作成・データ入力・報告書作成・メール対応など「繰り返し発生する定型業務」はどの業種でも効果的です。特に不動産・法律・医療・建設など書類仕事が多い業種で導入効果が高い傾向があります。",
  },
  {
    q: "従業員がAIを使えるように研修は必要ですか？",
    a: "基本的なプロンプトの書き方・セキュリティルール・活用事例の共有など、最低限の研修は重要です。「何をAIに任せていいか」「どこが限界か」を理解することで安心して活用できます。",
  },
  {
    q: "ChatGPT APIとClaude APIはどちらが社内ツールに向いていますか？",
    a: "用途によって異なります。Claude APIは長文処理・論理的な文書生成・コード補助に優れており、社内マニュアルや契約書処理に向いています。ChatGPT APIはマルチモーダル対応・プラグイン連携が充実しており、幅広い業務に対応できます。両方試して比較することを推奨します。",
  },
  {
    q: "RAGとFine-tuningの違いは何ですか？",
    a: "RAGは社内文書を外部データベースに保存し、AIが回答時に参照する方式です。Fine-tuningはAIモデル自体を自社データで追加学習させる方式です。RAGはデータ更新が容易で費用対効果が高く、多くの社内ツールではRAGが推奨されます。Fine-tuningは特定の文体や専門的なパターン学習に向いています。",
  },
  {
    q: "既存のKintone・Slack・Excelと連携できますか？",
    a: "はい。Kintoneはプラグイン・REST APIで連携可能、SlackはSlack APIでボット形式の連携、ExcelはOffice Add-insまたはPower Automateを通じた連携ができます。APIが公開されているシステムであれば多くの場合連携できます。",
  },
  {
    q: "PoCから本番化までどのくらいの期間がかかりますか？",
    a: "シンプルなRAGベースのQ&Aツールであれば2〜4週間でPoCを作成できます。本番化（セキュリティ対応・ユーザー認証・監視設定含む）には追加で4〜8週間が目安です。複雑な業務フロー統合の場合は3〜6ヶ月程度のプロジェクト期間を設定します。",
  },
  {
    q: "運用・保守コストはどのくらいかかりますか？",
    a: "API利用コスト（利用量に比例）・サーバー費用（月額1〜5万円程度）・定期メンテナンス費用が主なコストです。社内利用であれば月額3〜15万円程度が一般的な目安ですが、利用規模・機能によって大きく異なります。",
  },
  {
    q: "社員のAIリテラシーが低い場合はどうすればいいですか？",
    a: "UIを工夫して「プロンプトを書かなくてもいい」設計にすることが重要です。入力フォームに必要事項を入力するだけで適切なプロンプトが自動生成される仕組みにすることで、AIリテラシーが低い社員でも活用できます。また導入研修と合わせて段階的に活用範囲を広げていくことをお勧めします。",
  },
  {
    q: "社内AIツールのAPI費用を抑える方法はありますか？",
    a: "まず不必要に長いプロンプトを整理することでトークン数を削減できます。また出力形式を構造化（JSON等）することで不要なテキストを省けます。さらにキャッシュ機能（同じ入力への重複API呼び出し削減）や、用途に応じてモデルサイズを使い分けること（軽量モデルで処理できるタスクには安価なモデルを使用）も有効です。",
  },
  {
    q: "オンプレミスでAIを構築することはできますか？",
    a: "はい。Ollama・LM Studioなどを使えばオープンソースのLLM（Llama・Mistral等）を自社サーバー上で動作させることができます。ただしGPTやClaudeに比べると性能面での差異があります。完全クローズド環境が必要な場合はAWS GovCloud・Azure Government等のプライベートクラウドも選択肢です。",
  },
  {
    q: "AI社内ツールの導入に補助金は使えますか？",
    a: "IT導入補助金（中小企業向け）やものづくり補助金でAIシステム導入が対象になる場合があります。ただし採択要件・申請時期・対象ツールの条件があるため、最新情報を中小企業庁のサイトで確認するか、支援機関にお問い合わせください。",
  },
  {
    q: "AI社内ツールを外部に発注する際の費用感を教えてください。",
    a: "シンプルなRAG型Q&Aボット：50〜150万円、業務フロー統合型のカスタムツール：150〜500万円、複数システム連携・フルスクラッチ開発：500万円〜が一般的な目安です。クラウドサービス（Dify・Flowise等）を活用することで開発コストを大幅に削減できるケースもあります。",
  },
  {
    q: "AIツールが誤った回答をした場合の責任は誰が負いますか？",
    a: "現状、AIの出力はあくまで補助・参考情報であり、最終判断は人間が行う設計が基本です。医療・法律・財務など重要判断に関わる用途では「AIの出力を最終確認なしに使用しない」ルールの明文化と、ユーザーへの免責事項の表示が必要です。",
  },
  {
    q: "AI社内ツールの効果をどう測定すればいいですか？",
    a: "導入前後の業務時間を計測し「削減率」で評価するのが基本です。加えて処理件数の変化・エラー率・社員利用率・API費用を月次でモニタリングします。ROI（投資対効果）は「削減した人件費÷導入・運用コスト」で算出します。",
  },
  {
    q: "AIツールの導入で社員が仕事を失うリスクはありますか？",
    a: "AI社内ツールの目的は「定型業務の自動化による付加価値業務へのシフト」であり、社員の削減ではありません。繰り返し作業から解放された社員が顧客対応・企画・改善提案など高付加価値業務に集中できる環境を作ることが理想的な活用方針です。",
  },
  {
    q: "どんな社内データがAIに学習させるのに適していますか？",
    a: "社内マニュアル・業務手順書・FAQドキュメント・過去の提案書・製品仕様書・サポート履歴などテキスト情報を含むドキュメントが最も適しています。ExcelやCSVの数値データはRAGよりもデータベース連携やCode Interpreter型のアプローチが有効です。",
  },
  {
    q: "プロジェクト開始から最初の成果が出るまでどのくらいかかりますか？",
    a: "PoC（概念実証）フェーズで2〜4週間あれば動作確認できるプロトタイプを作成できます。社員が実際に業務で使い始めて効果を実感するまでには、本番化後1〜2ヶ月の運用期間が目安です。小さく始めて段階的に拡張するアプローチを推奨しています。",
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
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ生成の自動化" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "ブログ記事制作の効率化" },
  { href: "/ai/seo-content", label: "AI×SEOコンテンツ", desc: "検索流入を狙うコンテンツ設計" },
  { href: "/ai/rag", label: "RAG構築支援", desc: "社内データを活かすAI検索" },
  { href: "/ai/line-bot", label: "LINE AIボット", desc: "LINE連携の社内・顧客AIツール" },
  { href: "/services/dx", label: "DX推進支援", desc: "デジタル変革の全体戦略" },
  { href: "/services/system", label: "システム開発", desc: "既存システムとの連携開発" },
  { href: "/industry/manufacturing", label: "製造業のAI活用", desc: "設計書チェック・品質管理AI" },
  { href: "/industry/construction", label: "建設業のAI活用", desc: "見積もり補助・工程管理AI" },
  { href: "/industry/legal", label: "士業のAI活用", desc: "契約書作成補助・判例検索AI" },
  { href: "/industry/medical", label: "医療のAI活用", desc: "カルテ要約・診断補助AI" },
  { href: "/industry/real-estate", label: "不動産のAI活用", desc: "物件説明文生成・査定補助AI" },
  { href: "/industry/finance", label: "金融のAI活用", desc: "レポート作成・リスク分析AI" },
  { href: "/industry/education", label: "教育のAI活用", desc: "問題生成・個別学習支援AI" },
  { href: "/seo", label: "SEO対策", desc: "検索流入を増やす対策" },
  { href: "/aio", label: "AIO対策", desc: "AI検索からの流入対策" },
  { href: "/contact", label: "無料相談", desc: "AI社内ツール導入のご相談" },
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
              <span style={{ color: "#0F172A" }}>AI社内ツール開発</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Internal Tools</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI社内ツール開発
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ChatGPT API・Claude APIを活用した社内業務効率化カスタムツールを開発します。汎用AIサービスをそのまま使うのではなく、自社のデータ・業務フロー・セキュリティ要件に合わせた専用ツールを構築することで、真の業務効率化を実現します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              RAG（検索拡張生成）・Fine-tuning・既存システムとのAPI連携など、技術選定から設計・開発・研修・運用改善まで一貫してサポートします。製造・建設・士業・医療など業種特有の課題に対応した実績があります。
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
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a" }}>AI × DX</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                社内の繰り返し業務をAIに任せ、<br />人はコア業務に集中する
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
                "ChatGPT API・Claude APIを使った社内カスタムツールの開発方法と技術選定の考え方",
                "RAG・Fine-tuning・ファインチューニングの違いと自社に合った手法の選び方",
                "製造・建設・士業・医療など業種別のAI社内ツール活用ポイントと具体例",
                "既存システム（Excel・Kintone・Slack・基幹系）との連携方式と注意点",
                "セキュリティ要件に対応したプライベートデプロイ（AWS・Azure・GCP）の構成",
                "PoCから本番化・社員研修・継続改善までの10ステップ導入フロー",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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
                  t: "既存の汎用AIツールでは自社業務に合わない",
                  b: "ChatGPTやCopilotなどの汎用AIは万能に見えますが、自社固有の商品知識・業界ルール・社内用語には対応していません。自社データを学習させたカスタムAIでないと、実務で使えるレベルの回答が得られないケースがほとんどです。",
                },
                {
                  n: "02",
                  t: "社内独自データを活用したAIが欲しい",
                  b: "過去の提案書・製品マニュアル・サポート履歴などの社内知識はそのままでは活用できません。RAG（検索拡張生成）技術を使って社内ドキュメントをベクトルデータベースに格納し、AIが参照できる仕組みを構築する必要があります。",
                },
                {
                  n: "03",
                  t: "ノーコードツールでは限界がある",
                  b: "DifyやMake・Zapierなどのノーコード・ローコードツールは手軽に始められますが、複雑な業務フロー・セキュリティ要件・既存システム連携が必要になると対応が難しくなります。スケールを見据えた場合、APIを活用したカスタム開発が必要になります。",
                },
                {
                  n: "04",
                  t: "セキュリティ上クラウドAIに情報を入力できない",
                  b: "機密情報・個人情報・営業秘密などを外部のAIサービスに送信することにはリスクが伴います。Azure OpenAI Service・AWS Bedrock・自社サーバーへのプライベートデプロイを活用することで、データが外部に漏れない環境でAIを利用できます。",
                },
                {
                  n: "05",
                  t: "開発会社に依頼する費用と期間が不明",
                  b: "AI社内ツールの開発は要件によって費用・期間が大きく異なり、見積もりを取っても妥当かどうか判断しづらい状況があります。まずスコープを明確化したPoC（概念実証）から始め、実現可能性と費用対効果を確認してから本番開発に進む進め方が安全です。",
                },
                {
                  n: "06",
                  t: "どんなツールが作れるか分からない",
                  b: "「AIで何ができるか」のイメージがつかめず、社内で提案できない状況があります。議事録自動化・社内FAQ・報告書生成・データ分析・メール下書きなど業務パターン別のユースケースを把握することで、自社に合った活用方法が見えてきます。",
                },
                {
                  n: "07",
                  t: "既存システム（Excel・Kintone・Slack）との連携方法が分からない",
                  b: "AIツールを単独で動かすだけでなく、既存の業務システムと連携させることで真の効率化が実現します。Kintoneのプラグイン・Slack API・Excel Add-in・Power Automateなど各システムの連携方式を理解した設計が必要です。",
                },
                {
                  n: "08",
                  t: "PoC（概念実証）から本番化までのステップが分からない",
                  b: "プロトタイプを作っても本番環境への移行で課題が発生するケースが多くあります。ユーザー認証・権限管理・ログ取得・エラーハンドリング・監視設定など、本番化に必要な要素を事前に設計に組み込むことが重要です。",
                },
                {
                  n: "09",
                  t: "運用・保守コストが心配",
                  b: "AIツールは構築して終わりではなく、AIモデルのバージョン変更・社内データの更新・ユーザーフィードバックへの対応など継続的なメンテナンスが必要です。初期開発コストだけでなく月次運用コストを事前に試算してROIを評価することが大切です。",
                },
                {
                  n: "10",
                  t: "社員のAIリテラシーが低く使いこなせるか不安",
                  b: "AIツールはUIの設計次第で誰でも使いやすくなります。プロンプトを書かなくても入力フォームから自動生成される仕組みにすることで、AIリテラシーが低い社員でも活用できます。導入時の研修と段階的な展開がリテラシー課題を解決します。",
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
                  industry: "製造業",
                  note: "設計書チェック・品質管理AI",
                  body: "製品仕様書・設計図面のチェック項目をAIが自動確認し、品質管理の抜け漏れを防ぎます。過去の不具合データを学習させた予知保全AIや、製造ラインの異常検知にも活用できます。",
                },
                {
                  industry: "建設",
                  note: "見積もり補助・工程管理AI",
                  body: "過去の工事実績データを活用した見積もり補助ツールにより、積算作業の時間を大幅に削減できます。また工程表の自動生成・リスク箇所の指摘・進捗レポート作成などにも応用できます。",
                },
                {
                  industry: "士業",
                  note: "契約書作成補助・判例検索AI",
                  body: "過去の契約書テンプレートをRAGで学習させ、案件に応じたドラフト作成を補助します。判例・法令データベースをAIが検索・要約することで、調査業務の効率化と回答品質の向上が期待できます。",
                },
                {
                  industry: "医療",
                  note: "カルテ要約・診断補助AI",
                  body: "患者の問診内容・検査結果・投薬履歴をAIが要約し、医師の診察準備を効率化します。医療機関固有のセキュリティ要件に対応したプライベートデプロイ構成が必須であり、個人情報保護法・医療情報ガイドラインへの準拠も必要です。",
                },
                {
                  industry: "不動産",
                  note: "物件説明文生成・査定補助AI",
                  body: "物件情報（間取り・築年数・立地・設備）を入力するだけで、ポータルサイト向けの物件説明文を自動生成します。過去の成約データを学習させた査定補助AIで、根拠のある価格提案も可能になります。",
                },
                {
                  industry: "金融",
                  note: "レポート作成・リスク分析AI",
                  body: "市場データ・顧客ポートフォリオ・取引履歴をAIが分析し、定型レポートを自動生成します。コンプライアンスチェック・反社チェックの補助ツールとしても活用でき、担当者の確認作業を効率化します。",
                },
                {
                  industry: "教育",
                  note: "問題生成・個別学習支援AI",
                  body: "カリキュラムに沿った問題・演習を自動生成し、教材作成の工数を削減します。生徒の回答履歴を分析して弱点を特定し、個別最適化された学習コンテンツを提供する個別学習支援AIとしても活用できます。",
                },
                {
                  industry: "EC",
                  note: "商品説明生成・問い合わせ対応AI",
                  body: "商品スペックデータから販売ページ用の説明文を自動生成し、掲載作業を効率化します。よくある問い合わせをAIが自動回答するカスタマーサポートボットにより、対応コストを削減しながら顧客満足度を維持します。",
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
                  t: "業務ヒアリング",
                  b: "現在の業務フローを詳細にヒアリングし、AIが介入できるポイントを特定します。担当者の時間・工数・ミスが発生しやすい箇所・繰り返しパターンを可視化することが出発点です。",
                },
                {
                  n: "02",
                  t: "自動化対象業務の選定",
                  b: "費用対効果・技術的実現性・社員の受容性の3軸で自動化対象を優先順位付けします。まず「効果が大きく・リスクが低い」業務から取り組むことで、組織全体のAI活用への抵抗感を下げます。",
                },
                {
                  n: "03",
                  t: "技術要件定義（API・RAG・Fine-tuning）",
                  b: "選定した業務に対して最適な技術スタックを設計します。RAG型・Fine-tuning型・Agent型・単純なAPI呼び出し型など、用途・データ量・更新頻度に応じてアーキテクチャを決定します。",
                },
                {
                  n: "04",
                  t: "セキュリティ要件確認",
                  b: "扱うデータの機密度・個人情報の有無・業界規制に応じたセキュリティ要件を定義します。パブリッククラウド・プライベートクラウド・オンプレミスのいずれかを選択し、アクセス制御・ログ取得・暗号化の要件を決定します。",
                },
                {
                  n: "05",
                  t: "プロトタイプ開発（2週間）",
                  b: "最小限の機能で動作確認できるプロトタイプを2週間で開発します。完成度よりもコアの価値仮説を検証することを優先し、実際の業務データを使った精度確認を行います。",
                },
                {
                  n: "06",
                  t: "社内テスト・フィードバック",
                  b: "業務担当者によるテストを実施し、実際の業務シーンでのAI出力品質・使いやすさ・課題を収集します。フィードバックをもとにプロンプト・UI・フロー設計を改善し、本番化に向けた品質基準を確認します。",
                },
                {
                  n: "07",
                  t: "本番環境構築（AWS・Azure・GCP）",
                  b: "要件に応じたクラウドインフラを構築します。可用性・スケーラビリティ・コスト最適化を考慮した設計を行い、ユーザー認証・権限管理・監視・アラート設定を含む本番グレードの環境を整備します。",
                },
                {
                  n: "08",
                  t: "社員向け操作研修",
                  b: "ツールの使い方・活用シーン・注意事項（AIの限界・セキュリティルール）を説明する研修を実施します。動画マニュアルやFAQドキュメントを整備し、研修後の自走を支援します。",
                },
                {
                  n: "09",
                  t: "効果測定設定",
                  b: "業務時間削減率・処理件数・エラー率・API利用コスト・社員利用率などのKPIを設定し、計測の仕組みを構築します。ダッシュボードで定期モニタリングできる体制を整えます。",
                },
                {
                  n: "10",
                  t: "継続改善・機能拡張",
                  b: "月次・四半期での効果測定結果をもとに改善を実施します。AIモデルのバージョンアップへの対応・社内データの更新・新規業務への拡張など、運用フェーズでの継続改善がツールの価値を高め続けます。",
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
                  kpi: "業務時間削減率",
                  detail: "AI導入前後で同業務にかかる平均時間を比較します。週次の作業ログ・タイムトラッキングツール（Toggl・Clockify等）で計測し、月次レポートで推移を確認します。",
                },
                {
                  n: "02",
                  kpi: "処理件数（AI処理 / 人間処理比率）",
                  detail: "全処理件数のうちAIが自動処理した割合を計測します。AIログ・管理ダッシュボードで日次集計し、自動化率の月次推移をトラッキングします。",
                },
                {
                  n: "03",
                  kpi: "エラー率（AI vs 従来）",
                  detail: "AI処理と従来の人間処理それぞれのエラー・修正件数を比較します。品質管理システム・レビューフィードバックログで計測し、AI導入による品質改善を定量的に評価します。",
                },
                {
                  n: "04",
                  kpi: "月間API利用コスト",
                  detail: "OpenAI・Anthropicなど各APIプロバイダーのコンソールで月次利用量・費用を確認します。処理件数あたりのコストを算出し、スケール時のコスト予測に活用します。",
                },
                {
                  n: "05",
                  kpi: "社員利用率",
                  detail: "対象業務の社員のうち実際にAIツールを使っている割合を計測します。利用ログ・ログイン数・アクティブユーザー数を管理画面で週次確認し、低利用率の場合はUX改善や追加研修を検討します。",
                },
                {
                  n: "06",
                  kpi: "ROI（投資対効果）",
                  detail: "（削減した人件費 ÷ 導入・運用コスト）× 100 で算出します。導入から6ヶ月・12ヶ月時点でのROIを計算し、次フェーズの投資判断に活用します。",
                },
                {
                  n: "07",
                  kpi: "改善要望数 / 月",
                  detail: "社員からのフィードバック・改善要望の件数を月次で集計します。要望件数が多いほどツールの活用が進んでいる証拠でもあり、継続改善の優先順位付けに活用します。",
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

        <FaqSection items={faqItems} heading="AI社内ツール開発についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI社内ツール開発のご相談"
          body="業務効率化のためのAIツール選定・設計・開発・社内研修をサポートします。まずはどの業務からAI化するかをヒアリングし、費用対効果の高いプランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
