import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ChatGPT対策・生成AI時代の情報設計｜AIO対策｜株式会社サイプレス",
  description: "ChatGPTに引用・推薦される企業になるための情報設計。会社情報の明確化・FAQ充実・E-E-A-T整備・著者情報の構造化まで、ChatGPT対策の具体的な施策を解説。llms.txt・構造化データ対応。",
  keywords: ["ChatGPT対策", "ChatGPT引用", "AIO対策", "AI検索最適化", "ChatGPT SEO", "生成AI対策", "llms.txt"],
  openGraph: {
    title: "ChatGPT対策・生成AI時代の情報設計｜AIO対策｜株式会社サイプレス",
    description: "ChatGPTに引用・推薦される企業になるための情報設計と具体的施策。E-E-A-T・構造化データ・メディア露出・llms.txt対応まで解説。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/chatgpt" },
};

const measures = [
  {
    title: "会社情報・サービス情報の明確化",
    body: "ChatGPTが企業を正確に認識するためには、会社情報（会社名・設立年・代表者・事業内容・所在地）とサービス情報（提供サービス・対象顧客・価格帯・実績・強み）が明確かつ一貫して公開されている必要があります。ウェブサイトの会社概要・サービスページを充実させるとともに、プレスリリース・業界メディアへの掲載・SNSプロフィールでも同じ情報を一貫して発信します。情報の一貫性と正確性がAIの認識精度に直結します。",
  },
  {
    title: "FAQ・Q&Aコンテンツの充実",
    body: "ChatGPTは質問に対して直接的な答えを提供するため、FAQ形式のコンテンツは特に引用されやすい構造です。「○○とは何ですか？」「○○はどうすればいいですか？」といった疑問文と回答のセットを大量に用意することで、ChatGPTが回答生成に使いやすいコンテンツになります。FAQPage Schema（構造化データ）も実装することで、GoogleとAIの両方に情報を明確に伝えられます。業界の専門的な疑問への詳細な回答は特に引用価値が高いです。",
  },
  {
    title: "一次情報・専門性の高いコンテンツ",
    body: "ChatGPTは学習データの中でも権威性の高い情報源を優先します。他のサイトからの転載ではなく、自社独自のデータ・調査・事例・専門知識に基づく「一次情報」を継続的に発信することが重要です。自社の顧客データに基づく調査レポート・業界特有の専門知識を解説した記事・実際の施工事例・支援実績などは引用価値が高いです。「この会社でないと知れない情報」を発信し続けることで、ChatGPTに信頼できる情報源として認識されます。",
  },
  {
    title: "著者情報・会社情報の構造化",
    body: "ChatGPTはコンテンツの著者情報・企業情報を評価して信頼性を判断します。各コンテンツに著者のプロフィール（名前・経歴・専門性・資格・実績）を明記し、Person SchemaとOrganization Schemaで構造化します。代表者・専門家スタッフのプロフィールページを充実させ、LinkedInなどの外部プロフィールとリンクすることで、AIが著者を実在する専門家として認識しやすくなります。著者の他メディアでの発言・掲載実績も重要な権威性シグナルです。",
  },
  {
    title: "E-E-A-T要素の整備",
    body: "E-E-A-T（Experience・Expertise・Authoritativeness・Trustworthiness）はGoogleが品質評価に使う概念ですが、ChatGPTをはじめとする生成AIも同様の要素でコンテンツを評価します。経験（実際の顧客事例・施工写真・ビフォーアフター）、専門性（資格・認定・業界団体所属）、権威性（メディア掲載・受賞歴・書籍執筆）、信頼性（プライバシーポリシー・特商法表記・セキュリティ証明）をすべて整備することで、AIが信頼できる情報源として評価するシグナルが増加します。",
  },
];

const faqItems = [
  {
    q: "ChatGPTに自社を引用させることは可能ですか？",
    a: "直接的にコントロールすることはできませんが、権威性の高いコンテンツ・メディア掲載・構造化データ整備・E-E-A-T強化などによって引用確率を高めることは可能です。対策後3〜6ヶ月で業界関連クエリでの引用確認率が改善するケースが多いです。",
  },
  {
    q: "ChatGPTで自社が引用されているか確認する方法はありますか？",
    a: "業界関連のクエリ（「○○業界で信頼できる会社は？」「○○サービスを提供している企業は？」等）をChatGPTに投げ、自社が言及されるかを定期チェックします。月次でAI引用状況をモニタリングし、引用率の推移を継続的に追跡することをお勧めします。",
  },
  {
    q: "ChatGPT対策とSEO対策は別物ですか？",
    a: "重なる部分が非常に多いです。E-E-A-T対応・コンテンツ品質向上・権威性構築・構造化データ実装はSEOにもAIOにも有効です。同時に進めることで相乗効果が生まれ、効率的に両方の成果を上げることができます。",
  },
  {
    q: "どのくらいのコンテンツ量が必要ですか？",
    a: "量より質が重要ですが、業界の主要なテーマをカバーするコンテンツ群が必要です。目安として、サービスページ・会社概要・FAQ（30〜50問以上）・ブログ記事（月2〜4本の継続更新）を基本として整備することをお勧めします。競合分析でカバーすべきトピックを特定し、優先度をつけて制作します。",
  },
  {
    q: "新しいモデルにも対策が必要ですか？",
    a: "GPT-4・Gemini・Claude・Llama等の各モデルで認識の差はありますが、基本的な権威性・情報品質・E-E-A-Tを高めることは全モデルに有効です。特定モデルへの過度な最適化よりも、基盤の品質向上を優先することが長期的に有効です。",
  },
  {
    q: "llms.txtとは何ですか？ChatGPT対策に効果がありますか？",
    a: "llms.txtはAIクローラーに対してサイトの情報を整理して提供するためのファイルです。robots.txtのAI版と考えると理解しやすいです。ChatGPT Searchをはじめとする検索機能を持つAIが参照しやすい形式でサイト情報を提供でき、引用精度向上に貢献します。",
  },
  {
    q: "ChatGPT SearchとChatGPT（通常版）の違いは対策に影響しますか？",
    a: "ChatGPT SearchはWebをリアルタイムで検索して回答を生成します。通常版は学習データのみを使います。Search機能への対応では「引用しやすいコンテンツ構造」「クロール可能なサイト設計」「最新情報の更新頻度」が特に重要です。対策の基本方針は共通ですが、Search対策では技術的なクローラビリティも重視します。",
  },
  {
    q: "Wikipedia掲載はChatGPT対策に有効ですか？",
    a: "Wikipediaは学習データとして非常に重要な参照元です。著名人・上場企業・著名なブランドであればWikipedia掲載は権威性シグナルとして大きな効果があります。ただし実績のない中小企業への掲載は困難なため、業界メディアへの記事掲載やプレスリリース配信が現実的な代替手段です。",
  },
  {
    q: "SNSはChatGPT対策に関係しますか？",
    a: "SNS上のブランドメンション数はAIがブランドの認知度・信頼性を評価するシグナルのひとつです。特にX（旧Twitter）・LinkedIn・YouTubeなどでのブランド言及は、AIがエンティティとして企業を認識する材料になります。定期的な情報発信と外部からのメンション獲得を組み合わせることが有効です。",
  },
  {
    q: "プレスリリースはChatGPT対策に効果がありますか？",
    a: "PR TIMESやSankeiBizなどの大手プレスリリース配信サービスに掲載された情報はAIの学習データ・参照元として価値があります。定期的なプレスリリース配信で社名・サービス名・実績情報をメディアに露出させることが、ChatGPTへの認識強化につながります。",
  },
  {
    q: "競合他社がChatGPTに引用されているか調べられますか？",
    a: "はい。業界に関連するクエリをChatGPTに投げ、引用・言及されている企業名を確認します。「○○業界の有名企業は？」「○○サービスの代表的な会社は？」などのクエリで競合の引用状況を把握できます。当社では競合AIO調査を支援サービスとして提供しています。",
  },
  {
    q: "ChatGPT対策の効果はいつ頃から現れますか？",
    a: "コンテンツの質と権威性向上は即時に反映されるわけではなく、AIの学習データ更新サイクルに依存します。Webブラウジング機能（ChatGPT Search）への対応は比較的早く（数週間〜数ヶ月）効果が出ますが、学習データへの反映には6ヶ月〜1年以上かかるケースもあります。",
  },
  {
    q: "構造化データはChatGPT対策に必要ですか？",
    a: "構造化データ（Schema.org）はAIがコンテンツの意味を正確に理解するために有効です。Organization・Person・FAQPage・HowTo・Article・LocalBusinessスキーマを適切に実装することで、ChatGPTが企業情報・サービス情報・コンテンツを正確に解釈しやすくなります。",
  },
  {
    q: "BtoB企業でもChatGPT対策は有効ですか？",
    a: "はい。BtoBでは「○○課題を解決できるサービスを提供している会社は？」「○○業務のシステム化に強い企業は？」といったクエリへの対応が重要です。事例紹介・実績データ・比較コンテンツ・導入企業の業界カバレッジを充実させることで、BtoB購買プロセスでのAI引用率が高まります。",
  },
  {
    q: "業種・規模によってChatGPT対策の優先度は変わりますか？",
    a: "変わります。YMYL領域（医療・法律・金融）では著者・企業の信頼性証明が最優先です。地域ビジネスではLocalBusiness情報の整備が重要です。競争の激しい業界では権威性コンテンツへの投資が効果的です。まず自社の業界特性と競合状況を分析してから優先施策を決定することをお勧めします。",
  },
  {
    q: "メディア掲載がない場合はどうすればいいですか？",
    a: "業界専門メディアへの寄稿・インタビュー記事の依頼・PR配信サービスの活用から始めることをお勧めします。大手メディアへの掲載がなくても、業界特化の専門メディアや地域メディアへの露出でも権威性シグナルとして有効です。また業界団体への参加・登録も信頼性向上に貢献します。",
  },
  {
    q: "個人事業主でもChatGPT対策はできますか？",
    a: "はい。むしろ特定分野の専門家として個人ブランドを確立することで、ChatGPTに「○○分野の専門家」として認識される可能性があります。LinkedInプロフィールの充実・専門性の高いブログ記事の継続発信・業界メディアへの寄稿が効果的な施策です。",
  },
  {
    q: "ChatGPT対策をすることでSEOに悪影響はありますか？",
    a: "ありません。ChatGPT対策として実施するE-E-A-T整備・コンテンツ品質向上・構造化データ実装・被リンク獲得はSEOにも好影響を与えます。AIO対策とSEO対策は同じ方向性で施策を進めることができ、相乗効果が期待できます。",
  },
  {
    q: "ChatGPT対策の費用はどのくらいかかりますか？",
    a: "対策の範囲・現状のコンテンツ量・競合状況によって異なります。月次コンサルティング＋コンテンツ制作での支援から、スポット的な構造化データ実装支援まで、予算と優先度に応じたプランをご提案しています。まずは無料相談でご状況をお聞かせください。",
  },
  {
    q: "サイプレスのChatGPT対策支援サービスに含まれる内容は？",
    a: "現状のAI引用状況調査・競合AIO分析・権威性コンテンツ設計・FAQ最適化・構造化データ実装・llms.txt設置・メディア露出戦略立案・月次モニタリングレポートをトータルで支援します。SEO対策との統合プランも対応しています。詳しくはお問い合わせください。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AI最適化の全体戦略" },
  { href: "/aio/answer-engine-optimization", label: "AEO（回答エンジン最適化）", desc: "FAQ・回答型コンテンツ設計" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org設計・実装" },
  { href: "/aio/generative-search", label: "生成AI検索対策", desc: "AI Overview等への対策" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "Google生成AI検索対策" },
  { href: "/aio/perplexity", label: "Perplexity対策", desc: "Perplexity AI引用最適化" },
  { href: "/aio/e-e-a-t", label: "E-E-A-T対策", desc: "信頼性・専門性の強化" },
  { href: "/aio/llms-txt", label: "llms.txt設置", desc: "AIクローラー向け設定" },
  { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "Q&Aコンテンツの最適化" },
  { href: "/aio/content-strategy", label: "AIコンテンツ戦略", desc: "AI時代のコンテンツ設計" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化の基礎" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ最適化戦略" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "サイト構造・速度最適化" },
  { href: "/seo/e-e-a-t", label: "SEO E-E-A-T対策", desc: "SEOの信頼性強化" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ検索対策" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化ガイド" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEO支援サービス" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "コンテンツ制作・運用" },
  { href: "/industry/legal", label: "士業・法律事務所向け", desc: "士業のAIO・SEO戦略" },
  { href: "/industry/medical", label: "医療・クリニック向け", desc: "医療業界のAIO・SEO" },
  { href: "/industry/btob", label: "BtoB企業向け", desc: "BtoBのデジタル戦略" },
  { href: "/area/osaka", label: "大阪のAIO対策", desc: "大阪エリアの実績" },
  { href: "/area/tokyo", label: "東京のAIO対策", desc: "東京エリアの実績" },
];

export default function ChatgptAioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>ChatGPT対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              ChatGPT Optimization
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              ChatGPT・生成AI時代の<br />情報設計
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", maxWidth: "640px", color: "#374151" }}>
              ChatGPTは月間1億人以上が利用する生成AIです。「○○ならどの会社がいいですか？」という質問に対してChatGPTが自社を推薦・引用するよう最適化することが、AIO対策の最重要目標のひとつです。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.jpg"
            alt="ChatGPT対策・生成AI時代の情報設計"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(15,23,42,0.3)" }} />
        </section>

        {/* ChatGPTに引用されるための情報設計 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              How ChatGPT Cites
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              ChatGPTに引用されるための情報設計
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                ChatGPTは学習データとRetrieval（検索）の両方から情報を取得します。学習データには権威性の高いウェブサイト・書籍・論文が多く含まれており、Webを参照するChatGPT Searchでは現在のWebの品質評価も重要です。「信頼できる情報源」として認識されるためには、情報の正確性・一貫性・権威性・専門性を高めることが本質的なアプローチです。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                ChatGPTへの引用最適化で特に重要なのは「AIが引用しやすい構造」です。ChatGPTは答えが明確に書かれているコンテンツを好みます。曖昧な表現・冗長な文章より、「○○とは△△です」「○○するためには①②③の手順が必要です」のような明確で構造化された情報が引用されやすいです。見出し・箇条書き・FAQの活用が有効です。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              On This Page
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                "ChatGPTが情報を引用・参照する仕組みと、なぜ自社が引用されないのかの原因分析",
                "ChatGPTに自社・自社サービスを引用・推薦させるための具体的な情報設計の原則",
                "業種別（士業・IT・医療・BtoB・EC・飲食など）のChatGPT対策活用ポイント",
                "権威性構築からllms.txt設置までのChatGPT対策10ステップ実装フロー",
                "メディア露出・被リンク獲得・SNSブランド戦略の具体的な進め方",
                "ChatGPT対策の成果を測定するKPI一覧と確認・追跡方法",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "14px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 必要な施策 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Key Measures
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              必要な施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Issues
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "ChatGPTに社名・サービスが言及されない",
                  b: "業界関連クエリでChatGPTに社名が一度も出てこない場合、そのブランドはAIに「存在する企業」として認識されていない可能性があります。ウェブサイト・プレスリリース・業界メディアなど複数のソースに一貫した企業情報が掲載されていないことが主な原因です。",
                },
                {
                  n: "02",
                  t: "ChatGPTが参照するソースを理解していない",
                  b: "「ChatGPTはどんな情報を使って回答を生成するか」を把握せずに対策しても効果が出にくいです。学習データ（公開Webコンテンツ・書籍・論文）とリアルタイムWeb検索（ChatGPT Search）の2経路を理解し、それぞれに適した露出戦略を立てる必要があります。",
                },
                {
                  n: "03",
                  t: "Webサイトのクローラビリティが低い",
                  b: "JavaScriptで動的に生成されるコンテンツや、robots.txtでブロックされているページはAIクローラーが認識できません。サーバーサイドレンダリング・適切なmetaタグ設定・robots.txt見直し・llms.txt設置で、AIが自社コンテンツを正確に読み取れる環境を整備することが前提条件です。",
                },
                {
                  n: "04",
                  t: "権威性・信頼性の情報がない",
                  b: "設立年・代表者名・事業実績・資格・認定・受賞歴などの権威性情報がサイトに記載されていないと、AIが「信頼できる情報源」と判断する材料がありません。会社概要・代表プロフィール・実績ページを充実させ、Organization SchemaとPerson Schemaで構造化することが有効です。",
                },
                {
                  n: "05",
                  t: "Wikipedia・大手メディアへの掲載がない",
                  b: "ChatGPTの学習データには権威性の高いWikipedia・大手ニュースサイト・専門メディアが多く含まれます。これらのメディアに自社・自社サービスが掲載されていないと、学習データ経由での引用確率が低くなります。まずはプレスリリース配信や業界専門メディアへの寄稿から着手します。",
                },
                {
                  n: "06",
                  t: "プレスリリース・メディア露出なし",
                  b: "プレスリリースを一度も発信していない企業はオンライン上での「ニュースバリュー」がゼロです。新商品・新サービス・採用・業績・受賞・社会貢献活動など、定期的なプレスリリース配信でメディアへの露出機会を作ることがAIへの認識強化につながります。",
                },
                {
                  n: "07",
                  t: "SNSでのブランド言及なし",
                  b: "SNS（X・LinkedIn・Instagram等）での自社ブランドへの言及が少ないと、AIがブランドの社会的認知度を低く評価します。自社発信だけでなく、顧客・パートナー・メディアからのメンションを増やすことで、AIにとっての「存在感」が高まります。",
                },
                {
                  n: "08",
                  t: "構造化データが未整備",
                  b: "Schema.orgの構造化データが実装されていないサイトは、AIがコンテンツの意味・エンティティ（企業・人物・サービス）を正確に理解しにくい状態です。Organization・Person・FAQPage・Article・LocalBusinessなどのスキーマを段階的に実装することが必要です。",
                },
                {
                  n: "09",
                  t: "E-E-A-Tの4要素が不足",
                  b: "経験（Experience）・専門性（Expertise）・権威性（Authoritativeness）・信頼性（Trustworthiness）のいずれかが欠けているとAIは情報源として評価しにくくなります。4要素を網羅的に整備し、それを証明するコンテンツ・構造化データ・外部メディア掲載を組み合わせる必要があります。",
                },
                {
                  n: "10",
                  t: "ChatGPT Plus/Searchとの違いを把握していない",
                  b: "ChatGPT無料版（学習データのみ）とChatGPT Search（Webリアルタイム検索）では最適化アプローチが異なります。Search機能ではクロール可能なサイト構造・コンテンツの鮮度・クリック価値が重要です。両方の特性を踏まえた複合的な対策が必要です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別の活用ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-0" style={{ maxWidth: "900px" }}>
              {[
                {
                  n: "01",
                  industry: "士業・コンサル",
                  note: "専門知識をChatGPTが参照する形に整備",
                  detail: "弁護士・税理士・コンサルタントなど専門職は「○○の専門家として知られる△△先生」とChatGPTに引用されることを目指します。資格情報・相談実績・専門分野ごとの深いFAQコンテンツを整備し、業界メディアへの寄稿で権威性を証明します。",
                },
                {
                  n: "02",
                  industry: "IT企業・SaaS",
                  note: "技術ドキュメント・比較情報",
                  detail: "「○○と△△の違いは？」「○○に対応しているツールは？」といった比較クエリへの対応が重要です。詳細な技術ドキュメント・競合比較記事・ユースケース事例をHowTo形式で整備することで、ChatGPTに「この分野の情報源」として認識されます。",
                },
                {
                  n: "03",
                  industry: "医療機関",
                  note: "信頼性の高い医療情報発信",
                  detail: "医師・看護師などの著者情報を明示したYMYL対応の医療コンテンツが必要です。「○○の症状は？」「○○クリニックの特徴は？」への正確な回答コンテンツを医師監修で作成し、Person Schemaで著者の資格・経歴を構造化します。",
                },
                {
                  n: "04",
                  industry: "教育機関",
                  note: "教育コンテンツ・実績の構造化",
                  detail: "「○○の資格が取れるスクールは？」「○○試験の合格実績が高い学校は？」といったクエリへの対応が有効です。合格実績データ・卒業生の活躍事例・カリキュラム詳細を構造化データと組み合わせてChatGPTが参照しやすい形で公開します。",
                },
                {
                  n: "05",
                  industry: "EC・小売",
                  note: "商品情報・レビューの充実",
                  detail: "「○○のおすすめ商品は？」「○○の選び方は？」への詳細な回答コンテンツが重要です。商品レビュー・比較記事・選び方ガイドをProductスキーマ・Reviewスキーマと組み合わせて整備し、ChatGPTが商品情報を正確に参照できる状態を作ります。",
                },
                {
                  n: "06",
                  industry: "不動産",
                  note: "地域情報・物件データ",
                  detail: "「○○エリアの不動産相場は？」「○○市でマンションを買うなら？」への地域特化コンテンツが有効です。エリア別の市場データ・物件種別ごとのFAQ・地域の住環境情報を充実させ、地元の不動産専門家としての権威性を構築します。",
                },
                {
                  n: "07",
                  industry: "飲食",
                  note: "メニュー・口コミ・ブランドストーリー",
                  detail: "「○○エリアのおすすめレストランは？」「○○料理が食べられる店は？」へのFAQと、Recipeスキーマ・LocalBusinessスキーマの整備が基本です。メニュー情報・シェフのプロフィール・食材のこだわりをコンテンツ化することでブランドストーリーをAIに認識させます。",
                },
                {
                  n: "08",
                  industry: "BtoBサービス",
                  note: "事例・実績の公開",
                  detail: "「○○の導入実績が多い会社は？」「○○の課題を解決できる会社は？」への対応が重要です。業界別・規模別の具体的な導入事例・ROIデータ・ビフォーアフターを公開し、CaseStudyスキーマで構造化します。ケーススタディの豊富さがChatGPTへの引用確率を高めます。",
                },
              ].map((item, i) => (
                <div
                  key={item.n}
                  style={{
                    padding: "24px",
                    borderTop: "1px solid #E8E4DC",
                    borderLeft: i % 2 === 1 ? "1px solid #E8E4DC" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
                    <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.n}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600, marginBottom: "10px" }}>{item.note}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEOとの関係 + 引用ポイント 2-col */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_19_44.jpg"
                  alt="ChatGPT引用のポイント・ラップトップアナリティクス"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  AIO × SEO
                </p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  SEOとの関係
                </h2>
                <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  ChatGPT対策（AIO）とSEOは対立するものではなく、同じ基盤の上に成り立っています。コンテンツ品質・権威性構築・E-E-A-T強化・構造化データ実装はSEO評価とAIO評価の両方に有効です。
                </p>
                <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  一方で、AIO特有の施策もあります。ChatGPTのBrowsing機能対応では「引用されやすい文章構造」への最適化、学習データへの露出強化では「権威性メディアへの掲載」、llms.txt設置によるAIクローラー向け設定などが挙げられます。
                </p>
                <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151" }}>
                  SEO対策を正しく実施しているサイトはAIO対策としても良い状態にある場合が多く、SEOの予算でAIO効果も同時に得られる効率的なアプローチが可能です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              実装・改善フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "ChatGPTのWebブラウジング仕組み理解",
                  b: "ChatGPT無料版（学習データ参照）とChatGPT Search（リアルタイムWeb検索）の違いを理解し、それぞれのアプローチを整理します。Search機能対応ではクロール可能なサイト構造・コンテンツ鮮度が、学習データ対応では権威性・被リンク・メディア掲載が重要です。",
                },
                {
                  n: "02",
                  t: "自社のChatGPT言及状況調査",
                  b: "業界の主要クエリ（30〜50件）をChatGPTに投げ、自社・競合の言及状況を調査します。「○○業界の会社を教えて」「○○の課題を解決できるサービスは？」など具体的なクエリリストを作成し、言及率のベースラインを記録します。",
                },
                {
                  n: "03",
                  t: "参照されやすいコンテンツタイプ特定",
                  b: "AI引用調査で言及されたサイトのコンテンツ形式（FAQ・定義解説・比較記事・事例・データレポート等）を分析します。自社の業種・強みに合わせた「引用されやすいコンテンツタイプ」を特定し、制作優先度を決定します。",
                },
                {
                  n: "04",
                  t: "権威性コンテンツ作成（実績・事例・専門記事）",
                  b: "自社独自の実績データ・導入事例・専門知識を「ChatGPTが引用しやすい形式」で作成します。結論ファースト・疑問形見出し・箇条書き・具体的数値を組み込み、著者情報を明記した高品質コンテンツを月次で継続的に公開します。",
                },
                {
                  n: "05",
                  t: "メディア露出・被リンク獲得",
                  b: "業界メディアへの寄稿・インタビュー記事の掲載・プレスリリース配信・業界団体への参加を通じて、権威性の高い外部サイトからの言及と被リンクを獲得します。特にChatGPTの学習データに含まれる可能性が高い有名メディアへの掲載を優先します。",
                },
                {
                  n: "06",
                  t: "Wikipedia・著名サイトへの情報掲載",
                  b: "企業規模・実績が一定以上あればWikipediaへの掲載を検討します。困難な場合はWikidata（機械可読なエンティティデータベース）への情報登録や、Googleナレッジグラフへの掲載申請が代替手段として有効です。",
                },
                {
                  n: "07",
                  t: "llms.txt設置",
                  b: "サイトのルートディレクトリにllms.txtを設置し、AIクローラーに対して自社情報・サービス・コンテンツ構造を整理した形で提供します。会社概要・主要サービス・重要コンテンツへのリンク・著者情報を含む標準フォーマットで作成します。",
                },
                {
                  n: "08",
                  t: "構造化データ整備",
                  b: "Organization・Person・FAQPage・HowTo・Article・LocalBusiness・CaseStudyなど自社コンテンツに適したスキーマを実装します。Google Search Consoleでエラーゼロを確認し、リッチリザルトの表示も検証します。",
                },
                {
                  n: "09",
                  t: "継続的なブランド情報発信",
                  b: "SNS（X・LinkedIn・YouTube等）での定期的な情報発信とエンゲージメント獲得を継続します。社員・顧客・パートナーからのブランドメンションを増やすことで、AIがブランドを「社会的に認知された存在」と評価するシグナルを積み重ねます。",
                },
                {
                  n: "10",
                  t: "月次モニタリング",
                  b: "毎月、ChatGPT・Perplexity・Google AI Overviewで主要クエリを調査し、自社言及率の推移を記録します。言及されたコンテンツURL・言及文脈・競合の状況を分析し、次月の改善施策に反映させるPDCAサイクルを回します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPIs
            </p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  kpi: "ChatGPTでの自社言及回数（手動調査）",
                  where: "ChatGPT・Perplexityに主要クエリを投げ手動で月次確認",
                  note: "30〜50クエリをサンプリングし、自社が言及されたクエリ数と言及されなかったクエリ数を記録します。月次で追跡し言及率の推移を確認します。",
                },
                {
                  n: "02",
                  kpi: "Webブラウジング経由の参照URL数",
                  where: "Google Search Console → リンク → 外部リンクの参照元（定期確認）",
                  note: "ChatGPT SearchやPerplexityなどAIブラウジング経由のアクセスはGA4でreferral計測が可能な場合があります。参照URLに chatgpt.com・perplexity.ai等が含まれるか確認します。",
                },
                {
                  n: "03",
                  kpi: "被リンク数推移",
                  where: "Google Search Console → リンク → 外部リンクの合計数（月次）",
                  note: "権威性の高いメディア・業界サイトからの被リンク数を追跡します。被リンク数の増加はAIへの権威性シグナル強化に直結します。",
                },
                {
                  n: "04",
                  kpi: "メディア掲載数",
                  where: "Googleアラート・プレスリリース配信レポートで管理",
                  note: "月次のメディア掲載件数（プレスリリース・取材記事・寄稿等）を記録します。掲載メディアのドメイン権威性（DR）も合わせて追跡します。",
                },
                {
                  n: "05",
                  kpi: "ブランド名検索量",
                  where: "Google Search Console → 検索パフォーマンス → 会社名クエリフィルター",
                  note: "自社ブランド名・サービス名での指名検索数を月次で追跡します。ChatGPTやAI検索での引用増加は指名検索量の増加につながります。",
                },
                {
                  n: "06",
                  kpi: "SNSブランドメンション数",
                  where: "X（Twitter）検索・LinkedIn通知・Googleアラートで確認",
                  note: "自社名・サービス名・代表者名のSNSメンション数を月次で確認します。メンションの増加はブランドの社会的認知度向上のシグナルです。",
                },
                {
                  n: "07",
                  kpi: "問い合わせ数（AI経由推定）",
                  where: "Google Analytics 4 → コンバージョン → チャネル別（Referral・Organic）",
                  note: "AI経由の問い合わせを直接計測することは現状困難なため、AIO対策コンテンツページからのコンバージョン数と全体の問い合わせ数推移を代替指標として使用します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "6px", fontWeight: 600 }}>{item.where}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ChatGPT対策に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="ChatGPT対策のご相談はサイプレスへ"
          body="ChatGPTに引用される企業になるための情報設計・コンテンツ戦略・権威性構築をトータルでご提案します。まずは現在のAI認識状況を診断し、改善ポイントを明確にします。"
        />
      </main>
      <Footer />
    </>
  );
}
