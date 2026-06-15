import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIチャットボット構築とは｜自社データ学習・ChatGPT API活用で問い合わせ自動化｜株式会社サイプレス",
  description:
    "AIチャットボット構築の基礎から実践まで解説。自社Q&A学習・RAG構成・LINE連携・社内ナレッジボットの設計と導入フローを体系的に解説。回答精度・セキュリティ・有人切り替えまで網羅。",
  keywords: ["AIチャットボット", "ChatGPT チャットボット", "チャットボット構築", "LINE チャットボット", "問い合わせ自動化", "RAG チャットボット", "カスタムAI"],
  openGraph: {
    title: "AIチャットボット構築とは｜自社データ学習・ChatGPT API活用で問い合わせ自動化｜株式会社サイプレス",
    description: "AIチャットボット構築の実践ガイド。ChatGPT API・RAG・LINE連携から設計・導入・精度改善まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/chatbot" },
};

const faqItems = [
  {
    q: "AIチャットボットと従来のチャットボットの違いは何ですか？",
    a: "従来のチャットボットは決められたシナリオ・キーワードに対して固定の回答を返すルールベースです。AIチャットボット（ChatGPT API等を活用）は自然言語を理解し、シナリオにない質問にも文脈に合った回答を生成できます。ただしAIチャットボットはハルシネーション（誤情報生成）のリスクがあるため、知識ベースの設計が重要です。",
  },
  {
    q: "どんな種類のAIチャットボットがありますか？",
    a: "①Webサイト組み込みチャットボット（サイト訪問者の問い合わせ対応）、②LINE連携チャットボット（LINE公式アカウントでの顧客対応自動化）、③社内Q&Aボット（社内FAQへの自動回答・Slack等との連携）、④商品・サービス案内ボット（ECサイト・サービスサイトでの購買支援）が主な種類です。",
  },
  {
    q: "ChatGPT APIを使ったチャットボットの費用はどのくらいですか？",
    a: "OpenAI APIの使用料は従量課金（1000トークン当たり数円〜数十円）で、会話数・会話の長さによって変わります。小規模利用なら月数百円〜数千円、大規模利用では数万円〜になります。サイプレスへの構築依頼費用はシステムの規模・機能によって異なります。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "知識ベース（FAQ情報）はどのように設定しますか？",
    a: "テキストファイル・PDFドキュメント・Webページなどから情報を読み込み、ベクトルデータベース（Pinecone等）に保存するRAG（検索拡張生成）の構成が一般的です。これにより、AIが自社の製品・サービス・FAQ情報をもとに正確な回答を生成できます。独自の知識ベースなしのチャットボットはハルシネーションが多くなります。",
  },
  {
    q: "個人情報のセキュリティは大丈夫ですか？",
    a: "OpenAI APIを使用する場合、入力した情報がAPIを通じてOpenAIのサーバーに送信されます。個人情報・機密情報をAPIに送信する場合はOpenAIのAPI利用規約（データ処理契約）を確認することが必要です。オンプレミス環境でのLLM運用や、OSSのLLM（Llama等）を使うセルフホスト構成も選択肢です。",
  },
  {
    q: "ハルシネーション（誤情報）のリスクはどうコントロールしますか？",
    a: "RAG（知識ベースからの検索拡張生成）の採用・プロンプトでの「知識ベースにない場合は答えない」という制約設定・定期的な回答品質のモニタリング・エスカレーション（担当者への引き継ぎ）の設計が有効です。すべての回答を保証することは難しいため、重要な判断は人間に引き継ぐ設計が安全です。",
  },
  {
    q: "既存のCRMやヘルプデスクツールとの連携はできますか？",
    a: "はい。Salesforce・HubSpot・Zendesk・Freshdesk・LINE・Slackなどの主要ツールとのAPI連携が可能です。チャットボットで収集した情報をCRMに自動登録したり、チャットボットで解決できない問い合わせを担当者のSlackに通知したりするフローを設計できます。",
  },
  {
    q: "LINE公式アカウントでのAIチャットボットは実現できますか？",
    a: "はい。LINE Messaging APIとChatGPT/Claude APIを組み合わせることで、LINE公式アカウントでの問い合わせに自動応答するAIチャットボットを構築できます。友だち登録促進・既存顧客へのリテンション・24時間の問い合わせ対応に活用できます。",
  },
  {
    q: "有人対応への切り替えはどう設計しますか？",
    a: "「AIが回答できない」と判断した場合・ユーザーが有人対応を要求した場合・複雑なクレームや感情的な会話が検出された場合に、担当者のSlack・メール・CRMへ自動通知する設計を組み込みます。切り替えの際は会話ログを引き継ぐことでユーザーの再入力を不要にします。",
  },
  {
    q: "多言語対応のチャットボットは作れますか？",
    a: "ChatGPT/Claude APIは多言語に対応しているため、ユーザーの入力言語を自動検出し、同言語で回答する多言語チャットボットを構築できます。知識ベースを複数言語で用意するか、回答生成時に翻訳を組み込む方法があります。英語・中国語・韓国語対応の需要が多い業種に特に有効です。",
  },
  {
    q: "チャットボットの回答精度を改善し続けるにはどうすればいいですか？",
    a: "会話ログの定期的なレビュー・ユーザーが満足しなかった会話の特定・知識ベースの未登録情報の追加・プロンプトの調整というPDCAサイクルを月次で回すことが精度維持の基本です。満足度評価ボタン（👍/👎）をチャットUIに実装すると改善の優先度を可視化できます。",
  },
  {
    q: "予約システムや決済システムとの連携はできますか？",
    a: "APIを提供しているシステムであれば連携可能です。例えば飲食店の予約システムと連携することで、チャットボットから直接空き日時の確認と予約完了までを行えます。ECサイトの在庫確認・注文状況照会も同様に実現できます。連携仕様の確認が必要なため、事前に既存システムの情報をご共有ください。",
  },
  {
    q: "社内ナレッジをAIに学習させる際の注意点はありますか？",
    a: "社内マニュアル・規程・FAQをAIに学習させる際は、情報の鮮度管理が重要です。古いドキュメントがそのまま残っていると誤った情報を回答するリスクがあります。ドキュメントの更新と知識ベースの同期を自動化する仕組み（NotionやSharePointとの連携など）を設計することをお勧めします。",
  },
  {
    q: "Fine-tuningとRAGの違いと使い分けは？",
    a: "Fine-tuning（ファインチューニング）はモデル自体を自社データで追加学習させる手法で、特定のスタイル・トーンの固定に有効ですが高コストです。RAG（検索拡張生成）は外部の知識ベースをリアルタイムで検索して回答生成に利用する手法で、情報の更新が容易でコストも低く、業務チャットボットではRAGが主流です。",
  },
  {
    q: "チャットボットの導入期間はどのくらいかかりますか？",
    a: "シンプルなWebサイト組み込み型で2〜4週間、LINE連携・CRM連携・RAG構成を含む中規模システムで6〜10週間が目安です。既存システムとの連携仕様の確認・知識ベースのデータ整備に時間がかかる場合があります。まずは要件定義のご相談をお申し付けください。",
  },
  {
    q: "小規模事業者でもAIチャットボットは導入できますか？",
    a: "はい。Webサイトの問い合わせ対応・予約受付・FAQ回答を自動化するシンプルなチャットボットであれば、初期費用を抑えた構成で導入できます。店舗数や従業員規模に関わらず、問い合わせが繰り返し発生するビジネスであれば費用対効果が出やすいです。",
  },
  {
    q: "チャットボットのUIデザインはどう設計しますか？",
    a: "チャットウィジェットのデザインはブランドカラー・フォント・アイコンに合わせてカスタマイズできます。ユーザーが入力しやすいよう「よく聞かれる質問」のクイックリプライボタンを用意することで、入力ハードルを下げてエンゲージメントを高めます。モバイル最適化は必須です。",
  },
  {
    q: "チャットボットの分析・改善のために何を計測すべきですか？",
    a: "自動対応率・有人切り替え率・解決率・平均会話ターン数・ユーザー満足度スコアを基本指標として計測します。「回答できなかった質問一覧」を定期的に確認することが知識ベース改善の最優先アクションです。Google Analyticsとの連携でチャットボット利用とCV率の相関も把握できます。",
  },
  {
    q: "導入後のサポート・保守はどのように対応していますか？",
    a: "サイプレスでは導入後の月次レポート・知識ベースの更新サポート・精度改善提案を含む保守プランをご用意しています。APIのバージョンアップへの対応・新機能追加・連携システムの変更にも対応します。詳細は無料相談にてご確認ください。",
  },
  {
    q: "自社でチャットボットを内製化することはできますか？",
    a: "技術的には可能ですが、APIの選定・RAG構成の設計・セキュリティ・保守の体制が必要です。サイプレスでは内製化を目指す企業向けに、技術選定から初期構築・運用移管までのハンドオーバー支援も行っています。まずは相談ベースでご検討ください。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/automation", label: "業務自動化", desc: "マーケティング業務のAI自動化" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作の効率化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "チャットボットを含む自動化設計" },
  { href: "/ai/seo", label: "AI×SEO", desc: "AI活用のSEO戦略" },
  { href: "/ai/analytics", label: "AIデータ分析", desc: "チャットボットログ分析の活用" },
  { href: "/ai/line", label: "LINE AI連携", desc: "LINE公式アカウントとAI" },
  { href: "/ai/rag", label: "RAG構成ガイド", desc: "自社データ学習の仕組み" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "チャットボット構築支援" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "LINE公式アカウントとの連携" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "チャットボット組み込みサイト制作" },
  { href: "/services/crm", label: "CRM連携支援", desc: "チャットボットとCRMの統合" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "チャットボットの活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "チャットボットのプロンプト設計" },
  { href: "/knowledge/rag-guide", label: "RAG導入ガイド", desc: "検索拡張生成の仕組みと設計" },
  { href: "/knowledge/line-bot", label: "LINEボット開発", desc: "LINE Messaging API活用" },
  { href: "/seo", label: "SEO対策とは", desc: "チャットボット×SEOの連携" },
  { href: "/aio", label: "AIO対策", desc: "AI検索でのチャットボット活用" },
  { href: "/column/seo", label: "SEOコラム", desc: "AIチャットボットの最新情報" },
  { href: "/column/ai", label: "AIコラム", desc: "チャットボット最新事例" },
  { href: "/industry/ec", label: "EC・通販業界", desc: "ECサイトのチャットボット活用" },
  { href: "/industry/clinic", label: "クリニック・医療", desc: "医療機関でのチャットボット導入" },
  { href: "/contact", label: "無料相談", desc: "チャットボット構築のご相談" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function ChatbotPage() {
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
              <span style={{ color: "#0F172A" }}>チャットボット構築</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>AI Chatbot</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIチャットボット構築
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIチャットボットとは、ChatGPT API・Claude APIなどの大規模言語モデルを活用し、ユーザーの問い合わせに自然言語で回答するシステムです。Webサイト組み込み・LINE連携・社内Q&Aボットなど、様々な用途に対応できます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              24時間365日の問い合わせ対応・FAQ自動化・担当者への適切な振り分けを実現し、顧客満足度の向上と担当者の業務負担軽減を同時に達成します。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 19_19_44.png" alt="AIチャットボット構築・ChatGPT API・LINE連携のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>On This Page</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "自社Q&A・社内データをAIに学習させるRAG構成の仕組みと設計ポイント",
                "既製チャットボットでは対応できない課題と、カスタムAIチャットボットが解決できる理由",
                "Webサイト組み込み・LINE連携・Slack連携など用途別のチャットボットアーキテクチャ",
                "セキュリティを保ちながらAIを活用するためのオンプレミス・セルフホスト構成の選択肢",
                "有人切り替えフロー・精度改善サイクルを含む導入から運用まで10ステップの全体像",
                "自動対応率・解決率・人件費削減額など効果を可視化するための7つのKPI指標",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* チャットボットの種類 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Bot Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIチャットボットの主な種類
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { type: "Webサイト組み込みチャットボット", desc: "Webサイトの右下に表示されるチャットウィジェット型です。サービス案内・FAQ対応・問い合わせ情報の収集・担当者への引き継ぎを自動化します。導入が最もシンプルで多くのビジネスに適しています。" },
                { type: "LINE公式アカウント連携ボット", desc: "LINE Messaging APIと生成AIを組み合わせ、LINEでの問い合わせに自動応答します。友だち登録済みの既存顧客への自動フォロー・予約確認・よくある質問への対応に効果的です。" },
                { type: "社内Q&Aボット（Slack・Teams連携）", desc: "社内規程・マニュアル・FAQ情報を知識ベースに登録し、SlackやTeams上での社員からの質問に自動回答します。人事・総務・IT等の問い合わせ対応負荷を削減できます。" },
                { type: "ECサイト商品案内ボット", desc: "商品情報・在庫・サイズ・用途などの情報をAIが案内し、購買意欲を高めます。カート追加・決済への誘導や、カスタマーサポートとの連携も設計できます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.type}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
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
                  title: "既製チャットボットでは自社Q&Aに対応できない",
                  body: "汎用のチャットボットツールは一般的な質問には対応できますが、自社商品・料金・手続きといった固有の情報には答えられません。自社データを知識ベースとして学習させるRAG構成が必要になります。",
                },
                {
                  title: "導入コストが高く費用対効果が読めない",
                  body: "SaaSのチャットボットツールは月額費用が継続的に発生し、カスタマイズ性に限界があります。API直結のカスタム構成は初期コストがかかりますが、長期的には費用を抑えつつ柔軟に拡張できます。",
                },
                {
                  title: "社内ナレッジをAIに学習させる方法が分からない",
                  body: "「どんな形式のデータでも学習できるのか」「更新はどうするのか」という疑問を持つ企業が多くあります。PDFや社内Wikiをベクトルデータベースに変換するパイプラインの設計が解決策です。",
                },
                {
                  title: "セキュリティ上クラウドAIに情報を渡せない",
                  body: "機密情報・個人情報を含むデータをOpenAI等のクラウドAPIに送信することに抵抗がある企業は少なくありません。オンプレミス設置のOSSモデルや、データのローカル処理を組み合わせた構成で対応できます。",
                },
                {
                  title: "回答精度が低くユーザーが離脱する",
                  body: "知識ベースの整備不足・プロンプト設計の甘さ・ハルシネーション対策の欠如が精度低下の主因です。定期的な会話ログのレビューと知識ベースの更新サイクルを設計することが精度維持の鍵です。",
                },
                {
                  title: "メンテナンス・更新コストが心配",
                  body: "チャットボットは一度作って終わりではなく、商品・サービス・料金の変更に合わせて知識ベースを更新し続ける必要があります。更新作業を担当者が自分で行えるCMS的な管理画面を用意することで運用負荷を下げられます。",
                },
                {
                  title: "有人対応への切り替えフローが設計できていない",
                  body: "AIが対応できない複雑な問い合わせやクレームを放置すると顧客満足度が大きく下がります。「AIが解決できない」と判断した際に担当者へ通知し、会話ログを引き継ぐエスカレーションフローの設計は必須です。",
                },
                {
                  title: "多言語対応が必要で実装方法が分からない",
                  body: "インバウンド顧客・海外在住ユーザー向けに多言語対応が求められるケースが増えています。ChatGPT/Claude APIは多言語対応しているため、ユーザーの入力言語を検出して同言語で回答する構成を組み込めます。",
                },
                {
                  title: "チャットボット分析・改善の仕組みがない",
                  body: "「何件対応したか」だけでなく「どんな質問が多いか」「どの質問で有人切り替えが発生したか」を把握しないと改善できません。会話ログのダッシュボード化と月次レビューの仕組みを初期から設計します。",
                },
                {
                  title: "予約・決済システムとのAPI連携が難しい",
                  body: "チャットボットが単なるFAQ回答に留まり、実際のアクション（予約・注文）まで完結できないと利便性が半減します。既存システムのAPI仕様を確認し、チャットボットからのアクション実行まで設計する必要があります。",
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

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                {
                  industry: "EC・通販",
                  points: "商品検索・在庫確認・注文状況照会・返品手続き案内を自動化。カート離脱ユーザーへのフォローアップメッセージとの連携で購買率を向上させます。",
                },
                {
                  industry: "飲食・レストラン",
                  points: "予約受付・メニュー案内・アレルギー対応確認を24時間自動化。LINE連携でリピート来店の促進や満席時のウェイティングリスト管理にも活用できます。",
                },
                {
                  industry: "歯科・クリニック",
                  points: "初診案内・保険適用の基本説明・予約受付・よくある質問対応を自動化。受付スタッフの電話対応負荷を大幅に削減し、診療に集中できる環境を作ります。",
                },
                {
                  industry: "学習塾・スクール",
                  points: "コース・料金説明・体験授業申込・入塾手続き案内を自動対応。保護者からの問い合わせを効率化し、講師が教育に集中できる体制を構築します。",
                },
                {
                  industry: "不動産",
                  points: "物件検索条件のヒアリング・内見予約・契約手続きの流れ説明を自動化。夜間・休日の問い合わせを取りこぼさず、反響数と成約率を同時に改善します。",
                },
                {
                  industry: "SaaS・ITサービス",
                  points: "操作方法FAQ・エラーメッセージのトラブルシューティング・プラン変更手続きを自動回答。サポート工数を削減しながら顧客の自己解決率を高めます。",
                },
                {
                  industry: "士業（弁護士・税理士等）",
                  points: "初回相談の概要説明・必要書類一覧の案内・費用の目安説明を自動化。専門家が高付加価値業務に集中できるよう初期スクリーニングをAIが担います。",
                },
                {
                  industry: "製造・BtoB",
                  points: "製品仕様・規格・対応材質の問い合わせ・発注プロセス案内・納期目安の回答を自動化。技術的な仕様書をRAGで学習させることで、営業担当と同水準の回答精度を実現します。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6 pr-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex gap-4">
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.points}</p>
                    </div>
                  </div>
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
                  step: "STEP 01",
                  title: "要件定義（対応範囲・ユーザー・チャネルの確定）",
                  body: "「何を自動化するか」「誰が使うか」「どのチャネルで提供するか」を明確にします。Webサイト・LINE・Slack等のチャネル選定と、対応する問い合わせ範囲の境界線を決めることが後工程の品質を左右します。",
                },
                {
                  step: "STEP 02",
                  title: "Q&Aデータベース構築",
                  body: "既存のFAQページ・問い合わせ履歴・マニュアル・商品説明文を収集し、AIが参照できる形に整理します。データの質がチャットボットの回答精度を直接決定するため、最も時間をかけるべき工程です。",
                },
                {
                  step: "STEP 03",
                  title: "AI技術選定（RAG / Fine-tuning / CustomGPT）",
                  body: "要件・セキュリティ要件・予算に合わせて最適な技術構成を選定します。情報の更新頻度が高い場合はRAGが適し、特定のトーン・形式を固定したい場合はFine-tuningが有効です。多くのケースでRAGを推奨します。",
                },
                {
                  step: "STEP 04",
                  title: "UI設計（チャット画面・入力補助ボタン）",
                  body: "チャットウィジェットのデザイン・配置・クイックリプライボタンの設計を行います。ユーザーが最初に何を聞けばいいか迷わないよう、よく聞かれる質問をボタンとして表示するUXが重要です。",
                },
                {
                  step: "STEP 05",
                  title: "バックエンド開発（API連携・知識ベース構築）",
                  body: "LLM API・ベクトルデータベース・既存システム（予約・CRM・在庫管理）とのAPI連携を実装します。セキュリティ設計（認証・入力サニタイズ・レートリミット）もこの工程で対応します。",
                },
                {
                  step: "STEP 06",
                  title: "社内テスト（回答精度評価）",
                  body: "実際の問い合わせを模したテストケースを作成し、回答の正確性・一貫性・トーンを評価します。「回答できなかった質問」「誤回答」を洗い出し、知識ベースとプロンプトを修正します。",
                },
                {
                  step: "STEP 07",
                  title: "有人切り替えフロー設計",
                  body: "AIが解決できない場合・ユーザーが有人対応を求めた場合の担当者通知フローを実装します。会話ログを担当者に引き継ぐ仕組みを設計し、ユーザーが同じ内容を再説明しなくて済む体験を作ります。",
                },
                {
                  step: "STEP 08",
                  title: "セキュリティテスト",
                  body: "プロンプトインジェクション・個人情報の意図しない出力・不正アクセスに対する耐性をテストします。本番公開前のセキュリティ確認は必須で、特に医療・法律・金融業種では慎重に行います。",
                },
                {
                  step: "STEP 09",
                  title: "本番公開",
                  body: "段階的なロールアウト（一部ページ・一部ユーザーへの先行公開）でリスクを最小化します。公開直後は会話ログをリアルタイムで確認し、想定外の回答が発生した場合に即座に対応できる体制を整えます。",
                },
                {
                  step: "STEP 10",
                  title: "月次精度改善サイクル",
                  body: "毎月、会話ログを分析して「回答できなかった質問」「有人切り替えが多い話題」を特定し、知識ベースの更新・プロンプトの調整を行います。チャットボットは継続的な改善で成果が積み上がります。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="shrink-0 w-20">
                    <p className="text-[11px] font-semibold" style={{ color: "#c4b89a" }}>{item.step}</p>
                  </div>
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI Metrics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl">
              {[
                {
                  kpi: "自動対応率",
                  where: "チャットボット管理画面 / ログ分析",
                  desc: "有人切り替えなしにAIだけで完結した会話の割合。導入初期は50〜60%、改善後は80%以上を目指します。",
                },
                {
                  kpi: "問い合わせ対応時間削減率",
                  where: "有人対応ログ / CRMの対応時間記録",
                  desc: "AIが1次対応を担うことで、担当者が実際に対応した時間がどれだけ短縮されたかを計測します。",
                },
                {
                  kpi: "チャットボット解決率",
                  where: "会話ログ / 満足度評価ボタン（👍/👎）",
                  desc: "ユーザーが求める回答を得て会話を終了した割合。「役に立った」ボタンの反応率で近似値を計測できます。",
                },
                {
                  kpi: "有人切り替え率",
                  where: "チャットボット管理画面",
                  desc: "全会話のうち有人担当者に切り替わった割合。高すぎる場合は知識ベースの拡充が必要なことを示します。",
                },
                {
                  kpi: "顧客満足度スコア（CSAT）",
                  where: "会話終了後のアンケート / チャット内評価",
                  desc: "「チャットボットでの対応は満足でしたか？」という1〜5点評価の平均値で、品質の総合指標になります。",
                },
                {
                  kpi: "月間自動対応件数",
                  where: "チャットボット管理画面 / APIログ",
                  desc: "チャットボットが対応した総会話数・メッセージ数の推移で、費用対効果と利用拡大の状況を把握します。",
                },
                {
                  kpi: "人件費削減額（試算）",
                  where: "自動対応件数 × 平均対応時間 × 時給",
                  desc: "「AIが自動対応しなかった場合に人間が費やす時間と費用」を試算することで、投資対効果を経営層に説明できます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] font-semibold mb-2" style={{ color: "#c4b89a" }}>計測場所: {item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIチャットボット構築についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIチャットボット構築のご相談"
          body="用途・規模・予算に合わせたAIチャットボットの設計と構築をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
