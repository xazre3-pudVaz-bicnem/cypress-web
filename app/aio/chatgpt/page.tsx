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
  description:
    "ChatGPTに引用・推薦される企業になるための情報設計。会社情報の明確化・FAQ充実・E-E-A-T整備・著者情報の構造化まで、ChatGPT対策の具体的な施策を解説。",
  keywords: ["ChatGPT対策", "ChatGPT引用", "AIO対策", "AI検索最適化", "ChatGPT SEO", "生成AI対策"],
  openGraph: {
    title: "ChatGPT対策・生成AI時代の情報設計｜AIO対策｜株式会社サイプレス",
    description: "ChatGPTに引用・推薦される企業になるための情報設計と具体的施策。",
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
    body: "ChatGPTは学習データの中でも権威性の高い情報源を優先します。他のサイトからの転載ではなく、自社独自のデータ・調査・事例・専門知識に基づく「一次情報」を継続的に発信することが重要です。例えば、自社の顧客データに基づく調査レポート・業界特有の専門知識を解説した記事・実際の施工事例・支援実績などは引用価値が高いです。「この会社でないと知れない情報」を発信し続けることで、ChatGPTに信頼できる情報源として認識されます。",
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
    a: "直接的にコントロールすることはできませんが、権威性の高いコンテンツ・メディア掲載・構造化データ整備・E-E-A-T強化などによって引用確率を高めることは可能です。当社の支援実績では、対策後3〜6ヶ月で業界関連クエリでの引用確認率が大幅に改善するケースが多いです。",
  },
  {
    q: "ChatGPTで自社が引用されているか確認する方法はありますか？",
    a: "業界関連のクエリ（「○○業界で信頼できる会社は？」「○○サービスを提供している企業は？」等）をChatGPTに投げ、自社が言及されるかを定期チェックします。当社では月次でAI引用状況のモニタリングレポートを提供し、引用率の推移を継続的に追跡します。",
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
    a: "GPT-4・Gemini・Claude・Llama等の各モデルで認識の差はありますが、基本的な権威性・情報品質・E-E-A-Tを高めることは全モデルに有効です。モデルが更新・強化されても、高品質なコンテンツと権威性の高い情報源という基盤は継続的に有効です。特定モデルへの過度な最適化よりも、基盤の品質向上を優先することが長期的に有効です。",
  },
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
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" className="hover:underline" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>ChatGPT対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              ChatGPT Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              ChatGPT・生成AI時代の<br />情報設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ChatGPTは月間1億人以上が利用する生成AIです。「○○ならどの会社がいいですか？」
              という質問に対してChatGPTが自社を推薦・引用するよう最適化することが、
              AIO対策の最重要目標のひとつです。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="ChatGPT対策・生成AI時代の情報設計" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.3)" }} />
        </section>

        {/* ChatGPTに引用されるための情報設計 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              How ChatGPT Cites
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              ChatGPTに引用されるための情報設計
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                ChatGPTは学習データとRetrieval（検索）の両方から情報を取得します。
                学習データには権威性の高いウェブサイト・書籍・論文が多く含まれており、
                Webを参照するChatGPT Searchでは現在のWebの品質評価も重要です。
                「信頼できる情報源」として認識されるためには、情報の正確性・一貫性・
                権威性・専門性を高めることが本質的なアプローチです。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                ChatGPTへの引用最適化で特に重要なのは、「AIが引用しやすい構造」です。
                ChatGPTは答えが明確に書かれているコンテンツを好みます。
                曖昧な表現・冗長な文章より、「○○とは△△です」「○○するためには①②③の手順が必要です」
                のような明確で構造化された情報が引用されやすいです。
                見出し・箇条書き・FAQの活用が有効です。
              </p>
            </div>
          </div>
        </section>

        {/* 必要な施策 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Key Measures
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              必要な施策
            </h2>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SEOとの関係 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AIO × SEO
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              SEOとの関係
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                ChatGPT対策（AIO）とSEOは対立するものではなく、同じ基盤の上に成り立っています。
                コンテンツ品質・権威性構築・E-E-A-T強化・構造化データ実装は
                SEO評価とAIO評価の両方に有効です。SEO対策を正しく実施しているサイトは、
                AIO対策としても良い状態にある場合が多いです。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                一方で、AIO対策特有の施策もあります。ChatGPTのBrowsing機能（Web検索）対応では
                「引用されやすい文章構造」への最適化、学習データへの露出強化では
                「権威性の高いメディアへの掲載」、エンティティ最適化では
                「Googleナレッジグラフへの登録」などが挙げられます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスではSEOとAIOを一体として支援するため、各施策の優先度を
                両方の評価への影響を考慮して設定します。SEO対策の予算でAIO効果も同時に得られる
                効率的なアプローチを提案します。
              </p>
            </div>
          </div>
        </section>

        {/* 2-col: ChatGPT引用のポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="ChatGPT引用のポイント・ラップトップアナリティクス" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Citation Points
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  ChatGPT引用のポイント
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    ChatGPTに引用されやすいコンテンツには共通点があります。「○○とは△△です」という明確な定義文、箇条書きによる構造化、具体的な数字・事例の掲載が引用しやすさを高めます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    業界の専門的な疑問への詳細な回答は特に引用価値が高く、FAQPage Schemaの実装と組み合わせることでGoogleとAIの両方に情報を明確に伝えられます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    著者情報・会社情報の構造化・E-E-A-T要素の整備・メディア掲載実績の明示が、ChatGPTに「信頼できる情報源」として認識されるための核心的な施策です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ChatGPT対策に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/aio", label: "AIO対策", desc: "AI最適化の全体戦略" },
            { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
            { href: "/aio/generative-search", label: "生成AI検索対策", desc: "AI Overview等への対策" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="ChatGPT対策のご相談はサイプレスへ"
          body="ChatGPTに引用される企業になるための情報設計・コンテンツ戦略をご提案します。まずは現在のAI認識状況を診断し、改善ポイントを明確にします。"
        />
      </main>
      <Footer />
    </>
  );
}
