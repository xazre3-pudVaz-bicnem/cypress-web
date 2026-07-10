import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIカスタマーサポートとは｜チャットボット・自動応答で顧客対応を効率化｜株式会社サイプレス",
  description:
    "AIチャットボットによるカスタマーサポートの自動化。FAQへの自動応答・24時間対応・問い合わせ振り分けで顧客満足度と業務効率を同時に向上させる方法を解説。",
  keywords: ["AIカスタマーサポート", "チャットボット 自動応答", "FAQ自動化", "24時間対応 AI", "顧客対応 自動化"],
  openGraph: {
    title: "AIカスタマーサポートとは｜チャットボット・自動応答で顧客対応を効率化｜株式会社サイプレス",
    description: "AIチャットボットで24時間FAQ自動対応・問い合わせ振り分けを実現。顧客満足度と業務効率を同時に高める方法を解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_22_31.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/customer-support" },
};

const faqItems = [
  {
    q: "中小企業でもAIカスタマーサポートを導入できますか？",
    a: "はい。ChatGPTを活用したシンプルなFAQ自動応答から始められます。ノーコードツール（Dify・Botpress・LINE公式アカウント）を使えば専門的なプログラミング知識がなくても導入できます。",
  },
  {
    q: "AIチャットボットと人間のオペレーターはどう使い分けますか？",
    a: "FAQ・よくある問い合わせはAIが対応し、複雑な案件・クレーム・個別相談は人間にエスカレーションする「ハイブリッド型」が効果的です。AIが対応できない場合は自動でオペレーターに転送します。",
  },
  {
    q: "導入コストはどのくらいかかりますか？",
    a: "ChatGPT APIを使ったシンプルなチャットボットは月数千円〜数万円から導入可能です。カスタム開発・CRMシステム連携などが必要な場合は別途費用が発生します。まずは無料相談でご要件をお聞かせください。",
  },
  {
    q: "AIが誤った回答をした場合はどう対処しますか？",
    a: "「ハルシネーション（誤情報の生成）」リスクに備え、AIの回答範囲を自社FAQデータに限定するRAG（検索拡張生成）技術が有効です。定期的な回答品質チェックと改善も重要です。",
  },
  {
    q: "LINE公式アカウントでAI自動応答はできますか？",
    a: "はい。LINE公式アカウントのMessaging APIを使い、ChatGPT等のAIと連携したチャットボットを構築できます。予約受付・FAQ対応・キャンペーン告知などに活用できます。",
  },
  {
    q: "RAGとは何ですか？なぜ必要ですか？",
    a: "RAG（Retrieval-Augmented Generation）は、AIが回答を生成する前に自社のFAQデータや知識ベースを検索して参照する技術です。自社固有の情報（料金・サービス内容・社内ルール）に基づいた正確な回答ができるため、汎用AIよりも精度が高く、誤回答リスクを下げられます。",
  },
  {
    q: "既存のWebサイトに後付けでチャットボットを設置できますか？",
    a: "はい。JavaScriptのタグをWebサイトに1行追加するだけで設置できるチャットボットサービスが多数あります。WordPressやShopifyなど主要CMSにも対応しています。既存サイトの改修はほぼ不要です。",
  },
  {
    q: "個人情報の取り扱いはどうすれば良いですか？",
    a: "チャットボットで取得した氏名・メールアドレスなどの個人情報はプライバシーポリシーへの明記と適切な管理が必要です。ChatGPT API利用時はOpenAIのデータポリシーを確認し、APIオプトアウト設定で会話データが学習に使われないよう設定することを推奨します。",
  },
  {
    q: "電話・メールフォームとAIチャットはどう使い分けますか？",
    a: "AIチャットは即時・簡単な質問向け、メールフォームは詳細な相談・見積もり依頼向け、電話は緊急・クレーム向けが基本の使い分けです。AIチャットで問い合わせ内容を事前に整理したうえで電話・フォームに誘導する設計も有効です。",
  },
  {
    q: "チャットボットの精度を上げるにはどうすれば良いですか？",
    a: "FAQデータの充実（質問バリエーションを複数登録する）・回答の具体性向上・ユーザーの実際の質問ログを定期的に分析してFAQを拡充することが継続的な精度改善につながります。月1回のログレビューを習慣化することを推奨します。",
  },
  {
    q: "多言語対応のチャットボットを作れますか？",
    a: "はい。ChatGPT APIは英語・中国語・韓国語など多言語に対応しています。ユーザーが入力した言語を自動判別して同じ言語で応答する設定も可能です。インバウンド対応や海外向けECサイトへの導入で特に有効です。",
  },
  {
    q: "チャットボットのUIはカスタマイズできますか？",
    a: "はい。ブランドカラー・ロゴ・フォント・開口メッセージ・アバター画像などをカスタマイズできます。Webに埋め込むウィジェット型・ページ全体に展開するフルスクリーン型など表示形式も選べます。",
  },
  {
    q: "チャットボットから予約システムに連携できますか？",
    a: "はい。Google Calendar・予約管理SaaS（STORES予約・Coubic等）とAPIで連携することで、チャットボット内での空き確認・予約確定・リマインド送信まで一気通貫で自動化できます。",
  },
  {
    q: "Dify・BotpressなどノーコードツールとAPI開発はどちらが良いですか？",
    a: "まず試したい・シンプルなFAQ対応ならDify・Botpress等のノーコードツールが向いています。既存システム（CRM・予約管理）との連携・高度なカスタマイズが必要な場合はAPI開発の方が柔軟性が高いです。ご予算・要件に合わせてご提案します。",
  },
  {
    q: "従業員向けの社内問い合わせ対応にも使えますか？",
    a: "はい。社内規程・就業規則・経費申請手順などをナレッジベースに登録し、社内向けSlackボットやイントラネット上のチャットボットとして活用できます。人事・総務・情報システム部門への問い合わせ削減に効果的です。",
  },
  {
    q: "チャットボット導入後の運用はどうすれば良いですか？",
    a: "月1回、チャットログで「AIが答えられなかった質問」を確認し、FAQに追加します。また「不満足な回答」にフィードバックが付いていた場合は回答内容を見直します。定期的なFAQ拡充と回答品質の改善が長期的な自動対応率向上につながります。",
  },
  {
    q: "競合他社との差別化にチャットボットは有効ですか？",
    a: "有効です。24時間即時応答・パーソナライズされた案内・多言語対応は、電話・メール対応のみの競合と比べて顧客体験で差をつけられます。特に問い合わせから見積もり・申込まで完結できる設計にすることで、コンバージョン率の向上にも寄与します。",
  },
  {
    q: "チャットボットは顧客満足度に影響しますか？",
    a: "設計次第で大きく影響します。即時回答・24時間対応・わかりやすい案内はポジティブな影響をもたらします。一方で回答精度が低い・人間に繋げられないケースはネガティブな体験になります。エスカレーション設計と定期的な品質改善を行うことで満足度を高く維持できます。",
  },
  {
    q: "効果測定の仕組みはどのように作りますか？",
    a: "チャットボットツールのダッシュボードで「会話数・自動解決率・エスカレーション率・ユーザー満足度」を週次で確認します。Googleアナリティクスとの連携でチャットボット経由のコンバージョン数も計測できます。KPIを月次で集計し改善施策につなげる運用サイクルを作ることが重要です。",
  },
  {
    q: "ChatGPT APIの費用はどのくらいかかりますか？",
    a: "ChatGPT API（GPT-4o）は入力トークンあたり約0.0025ドル・出力トークンあたり約0.01ドルが目安です（2026年時点）。月間会話数が1,000件程度であれば月額数千円〜数万円の範囲が多いです。正確な費用はご利用状況と連携システムに依存するため、無料相談でご確認ください。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
  { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "チャットボットの設計と実装" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "業務全体の自動化" },
  { href: "/ai/internal-tools", label: "AI社内ツール", desc: "社内業務のAI化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "n8n・Zapierとの連携" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "コンテンツ量産の効率化" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ全般のAI活用" },
  { href: "/ai/sns-automation", label: "SNS投稿自動化", desc: "SNS自動化の仕組み" },
  { href: "/ai/seo-optimization", label: "AI×SEO最適化", desc: "AIを使ったSEO改善" },
  { href: "/ai/data-analysis", label: "AIデータ分析", desc: "データ分析の自動化" },
  { href: "/ai/writing", label: "AIライティング支援", desc: "ライティングの効率化" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "LINE公式アカウント運用" },
  { href: "/services/web", label: "Web制作サービス", desc: "サイト制作の概要" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "SEOコンテンツ戦略" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の概要" },
  { href: "/industry/medical", label: "医療・クリニックのAI活用", desc: "クリニック向けAI導入" },
  { href: "/industry/real-estate", label: "不動産業界のAI活用", desc: "不動産向けAI導入" },
  { href: "/industry/restaurant", label: "飲食業界のAI活用", desc: "飲食店向けAI導入" },
  { href: "/industry/beauty", label: "美容業界のAI活用", desc: "美容室向けAI導入" },
  { href: "/industry/ec", label: "EC・通販のAI活用", desc: "ECサイト向けAI導入" },
  { href: "/industry/law", label: "士業のAI活用", desc: "法律・税務向けAI導入" },
  { href: "/industry/education", label: "教育・学習塾のAI活用", desc: "学習塾向けAI導入" },
  { href: "/contact", label: "無料相談", desc: "AIカスタマーサポートのご相談" },
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
              <span style={{ color: "#0F172A" }}>AIカスタマーサポート</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Customer Support</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIカスタマーサポート
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIチャットボットを活用することで、24時間対応・FAQ自動回答・問い合わせ振り分けが可能になります。スタッフの対応工数を削減しながら、顧客満足度を維持・向上させます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              すべての問い合わせをAIに任せるのではなく、「AIが対応できる範囲と人間が対応すべき範囲」を明確に設計することが導入成功の鍵です。ハイブリッド型のカスタマーサポート体制を構築します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.jpg"
            alt="AIカスタマーサポート・チャットボット・自動応答システムのイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center px-8 md:px-20" style={{ background: "rgba(13,27,42,0.5)" }}>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>AI × Support</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                24時間365日、AIが<br />顧客対応の最前線に立つ
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Overview</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl">
              {[
                "AIカスタマーサポートの仕組みと、FAQ自動応答・エスカレーション設計の基本",
                "ChatGPT APIを使ったチャットボット構築の具体的な手順と技術選定の考え方",
                "業種別のAI顧客対応活用ポイントと、導入で解決できる課題の整理",
                "RAG（検索拡張生成）を使った自社ナレッジのAI学習方法と精度向上のコツ",
                "個人情報・ハルシネーションリスクへの対策と安全な運用体制の作り方",
                "自動対応率・顧客満足度・人件費削減などKPI設計と計測ツールの選び方",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Capabilities</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIカスタマーサポートで対応できる業務
            </h2>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "FAQへの自動応答", b: "「営業時間は？」「料金は？」「対応エリアは？」など繰り返し同じ質問への回答をAIが自動処理します。スタッフの対応工数を大幅に削減できます。" },
                { n: "02", t: "予約受付・変更対応", b: "飲食店・美容室・医療機関などの予約受付をAIが自動対応します。空き状況確認・予約確定・リマインド送信まで自動化できます。" },
                { n: "03", t: "問い合わせの振り分け・エスカレーション", b: "問い合わせの内容を自動判断し、担当部署・担当者に自動振り分けします。AI対応の限界（クレーム・複雑な案件）では人間に自動転送します。" },
                { n: "04", t: "24時間対応体制の構築", b: "夜間・休日でもAIが初期対応を行います。「営業時間外です。翌日〇時に担当者から連絡します」など適切な自動応答で機会損失を防ぎます。" },
                { n: "05", t: "多言語対応", b: "英語・中国語・韓国語など複数言語での自動応答が可能です。インバウンド対応や海外顧客へのサポートに活用できます。" },
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              顧客対応の自動化を検討する企業が直面しやすい課題を整理しました。それぞれの根本原因を理解した上で、AI導入の設計に活かしてください。
            </p>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "同じ問い合わせが繰り返し来る", b: "「営業時間は？」「料金は？」「予約方法は？」など定型質問への対応に時間が取られています。これらの回答パターンをFAQデータベースに整備し、AIチャットボットに学習させることで自動化できます。" },
                { n: "02", t: "営業時間外の問い合わせに対応できない", b: "夜間・休日に届いた問い合わせへの返答が翌営業日になり、見込み客の機会損失が発生しています。AIチャットボットによる24時間即時応答で、営業時間外の問い合わせを取りこぼさない体制が作れます。" },
                { n: "03", t: "問い合わせ対応に人的リソースが割かれすぎている", b: "スタッフが問い合わせ対応に多くの時間を取られ、本来注力すべき営業・サービス提供の時間が削られています。AIが定型対応を担うことで、スタッフを付加価値の高い業務に集中させられます。" },
                { n: "04", t: "FAQページがあるが読まれていない", b: "Webサイトによくある質問ページがあっても、ユーザーがページを見つけられず問い合わせしてしまっています。対話形式のAIチャットボットを使えば、能動的に適切な回答へ誘導できます。" },
                { n: "05", t: "チャットボットを導入したいが費用が高い", b: "大手チャットボットサービスの初期費用・月額費用の高さがネックになっているケースがあります。ChatGPT APIを活用した構築では、ツール選択によっては月数千円〜数万円から始められます。" },
                { n: "06", t: "AIの回答精度が不安", b: "「誤った情報を答えるのではないか」「クレームにつながるのではないか」という懸念から導入を踏み切れない状態です。回答範囲を自社FAQに限定するRAG技術とエスカレーション設計を組み合わせることでリスクを制御できます。" },
                { n: "07", t: "会社固有の情報をAIに学習させる方法が分からない", b: "料金表・サービス内容・社内ルールなど自社特有の情報をどうAIに覚えさせるかが不明です。RAG（検索拡張生成）を使い、自社ナレッジをベクトルデータベース化してAIに参照させる仕組みで解決できます。" },
                { n: "08", t: "既存の電話・フォームとの使い分けが不明", b: "AIチャット・電話・メールフォームをどう役割分担するかが整理されていません。即時・簡単な質問はAIチャット、詳細相談はフォーム、緊急・クレームは電話という使い分けを設計することで全体最適化できます。" },
                { n: "09", t: "個人情報の取り扱いが不安", b: "チャットで取得した氏名・連絡先などの個人情報管理に不安があります。プライバシーポリシーへの明記・APIオプトアウト設定・データ保存先の確認など、適切なデータガバナンスの設計が必要です。" },
                { n: "10", t: "効果測定の仕組みがない", b: "チャットボットを導入しても「どれだけ効果が出ているか」が計測できていないケースがあります。自動対応率・エスカレーション率・顧客満足度スコアなどのKPIを設計し、ダッシュボードで定期的に確認する仕組みが必要です。" },
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
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Use Cases</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              AIカスタマーサポートの活用方法は業種によって異なります。よくある問い合わせパターンと自動化の優先順位は、業種ごとに設計することが導入成功のポイントです。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {[
                { n: "01", industry: "飲食店", note: "予約・メニュー・アレルギー問い合わせの自動化。「本日の空き席は？」「アレルギー対応はありますか？」などの定型質問をAIが自動応答します。Googleカレンダーや予約システムとの連携で予約受付まで完結できます。" },
                { n: "02", industry: "美容室・サロン", note: "料金・施術時間・予約変更の自動対応。「カラーの料金は？」「所要時間は？」「予約をキャンセルしたい」などの問い合わせを24時間自動対応。LINEチャットボットとの連携が特に効果的です。" },
                { n: "03", industry: "歯科・クリニック", note: "初診予約・診療内容の自動FAQ対応。「初診の予約方法は？」「保険は使えますか？」「駐車場はありますか？」をAIが自動応答。受付スタッフの電話対応工数を削減し診療に集中できる環境を作ります。" },
                { n: "04", industry: "EC・通販", note: "配送・返品・在庫の自動対応。「注文の配送状況は？」「返品方法を教えて」「在庫はありますか？」をAIが自動処理します。注文管理システムとのAPI連携でリアルタイムの在庫・配送情報を提供できます。" },
                { n: "05", industry: "SaaS・IT", note: "操作説明・料金・解約の自動対応。「○○機能の使い方が分からない」「プランを変更したい」「解約手続きを教えて」などをAIが自動回答。ヘルプドキュメントをRAGで学習させることで精度の高い技術サポートができます。" },
                { n: "06", industry: "不動産", note: "物件概要・見学予約の自動化。「この物件のペット可否は？」「見学予約をしたい」「初期費用の目安は？」をAIが自動応答します。物件データベースとの連携で個別物件の詳細情報も提供できます。" },
                { n: "07", industry: "学習塾・教育", note: "コース・料金・体験申込の自動FAQ対応。「小学3年生に合うコースは？」「月謝はいくらですか？」「体験授業の申し込み方法は？」をAIが自動対応。保護者からの問い合わせピークタイム（夜間）への24時間対応で機会損失を防ぎます。" },
                { n: "08", industry: "士業・コンサル", note: "相談内容・費用・手続きの自動FAQ対応。「相続の相談はできますか？」「初回相談は無料ですか？」「手続きの流れを教えて」をAIが自動応答します。複雑な法律・税務相談は人間にエスカレーションする設計が信頼性を保ちます。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-5 p-6" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.industry}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
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
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              導入・実装フロー
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              AIカスタマーサポート導入の成否は、FAQデータの整備とエスカレーション設計にあります。以下の10ステップで、確実に自動化効果を出す体制を構築できます。
            </p>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "問い合わせ分析（頻度・種類・対応時間）", b: "過去3〜6か月の問い合わせ履歴（メール・電話記録・フォーム）を集計し、質問の種類と頻度・1件あたりの対応時間を分析します。対応工数が高い質問カテゴリを特定することが自動化設計の出発点です。" },
                { n: "02", t: "自動化対象の選定", b: "「回答がパターン化できる定型質問」「答えが社内情報で完結する質問」を自動化対象に選定します。個人情報を扱う質問・判断を要するクレーム対応・緊急性の高い連絡は人間が担う範囲として明確化します。" },
                { n: "03", t: "FAQデータベース構築", b: "自動化対象に決定した質問と回答をスプレッドシートまたは専用ツールに整理します。質問バリエーション（言い換え表現）を複数登録することでAIの認識精度が向上します。回答は簡潔・具体的・アクション可能な形式に統一します。" },
                { n: "04", t: "ChatGPT API連携方式選定（シンプルFAQ / RAG / カスタムGPT）", b: "対応範囲が狭くシンプルならシンプルFAQ型、自社ドキュメントを参照する必要があるならRAG型、社内ナレッジが多く高精度を求めるならカスタムGPT型を選択します。費用・精度・開発コストのバランスでご提案します。" },
                { n: "05", t: "チャットUIの設計・開発", b: "Webサイト埋め込みウィジェット・LINE公式アカウント連携・Slack連携など接点に合わせたUIを設計・開発します。ブランドカラーへの適合・スマートフォン対応・開口メッセージの文言設計も行います。" },
                { n: "06", t: "社内ナレッジのAI学習", b: "サービス資料・価格表・FAQ文書・マニュアルなどをAIに学習させます。RAG方式の場合はPDF・Notionページ・スプレッドシートをベクトル化してデータベースに登録します。情報の鮮度を保つ定期更新のフローも設計します。" },
                { n: "07", t: "テスト・精度検証", b: "実際に想定される問い合わせパターンでテストし、誤回答・的外れな回答・ハルシネーションがないか検証します。エスカレーション条件（AIが「分からない」と判断した場合の引き継ぎ）が正しく機能するかも確認します。" },
                { n: "08", t: "本番公開", b: "テスト検証が完了したらWebサイトへの組み込み・LINEとの連携を本番環境で設定します。最初は「AIが対応できない場合は人間に転送」という安全設計を必ず残し、精度が上がった段階で自動対応範囲を拡張します。" },
                { n: "09", t: "スタッフ引き継ぎルール設定", b: "AIから人間にエスカレーションされた際の担当者・対応時間・返答方法を明文化します。チャットボットが「担当者が対応します。平日9時〜18時以内にご連絡します」と自動通知する設定も行います。" },
                { n: "10", t: "月次精度改善", b: "毎月、チャットログを確認して「AIが答えられなかった質問」「ユーザーが不満を示した回答」を分析します。FAQへの追加・回答文の改善・エスカレーション条件の調整を月次で実施し、自動対応率を継続的に向上させます。" },
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              AIカスタマーサポート導入の効果は、対応効率・顧客満足度・コスト削減の3軸で計測します。以下のKPIを設計し、月次でモニタリングする体制を作ってください。
            </p>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "問い合わせ対応時間（削減率）", b: "AI導入前の平均対応時間（問い合わせ受信から返答までの時間）と導入後を比較します。チャットボットツールのダッシュボードまたはCRMのチケット管理機能で計測できます。" },
                { n: "02", t: "自動対応率", b: "全問い合わせのうちAIが人間へのエスカレーションなしで完結した割合です。チャットボットツールの管理画面で確認できます。導入初期は50〜60%、最適化後は70〜80%以上を目指します。" },
                { n: "03", t: "人件費削減額", b: "問い合わせ対応に充てていたスタッフの時間削減分を時給換算します。「削減時間×時給×月間営業日数」で月次削減額を算出し、AIツール費用との比較でROIを把握できます。" },
                { n: "04", t: "営業時間外対応率", b: "営業時間外（夜間・休日）に受けた問い合わせのうち、AIが自動対応できた割合を計測します。チャットボットのログを時間帯別に集計することで確認できます。機会損失の削減効果を可視化できます。" },
                { n: "05", t: "顧客満足度スコア", b: "チャット対話終了後に「この回答は役に立ちましたか？」の評価（5段階または👍👎）を収集します。月次で満足度スコアの推移を追い、低評価の多かった質問カテゴリを優先的に改善します。" },
                { n: "06", t: "FAQチャットボット利用数", b: "月間のチャット開始数・会話数・ユニークユーザー数をチャットボットダッシュボードで計測します。利用数の増減を確認することで、ユーザーのチャットボット認知・利用習慣の定着度が分かります。" },
                { n: "07", t: "月間問い合わせ件数（推移）", b: "電話・メール・フォーム・チャット全チャネルの問い合わせ件数を合算して月次で追います。AI導入後も定型質問の件数が変わらない場合はFAQページへの誘導強化や、チャットボットの認知度向上施策が必要です。" },
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

        <FaqSection items={faqItems} heading="AIカスタマーサポートについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIカスタマーサポート導入のご相談"
          body="チャットボット構築・LINE連携・FAQ自動応答システムの導入をサポートします。業種・規模・予算に合わせた最適なAIサポート体制をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
