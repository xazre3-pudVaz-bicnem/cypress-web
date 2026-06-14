import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIコンテンツ制作とは｜AI×人間協働でSEOコンテンツを効率化｜株式会社サイプレス",
  description:
    "AIコンテンツ制作の基礎から実践まで解説。ChatGPT・ClaudeでのSEO記事生成・SNS投稿・コピーライティングの効率化と、E-E-A-Tを守った品質管理方法を体系的に解説。",
  keywords: ["AIコンテンツ制作", "ChatGPT 記事生成", "AI SEO記事", "AI ライティング", "コンテンツ自動化", "生成AI コンテンツ"],
  openGraph: {
    title: "AIコンテンツ制作とは｜AI×人間協働でSEOコンテンツを効率化｜株式会社サイプレス",
    description: "AIコンテンツ制作の実践ガイド。AI活用のコンテンツ制作ワークフローとE-E-A-T品質管理を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/content" },
};

const faqItems = [
  {
    q: "AIで書いた記事はGoogleのSEO評価で不利になりますか？",
    a: "Googleは「AIが生成したコンテンツかどうか」よりも「コンテンツが役に立つかどうか」を評価基準にしています。AIで生成したままの薄いコンテンツは評価が低くなりますが、AIを活用して効率化しつつ、専門知識・一次情報・独自の見解を人間が付加した高品質なコンテンツは正当に評価されます。",
  },
  {
    q: "AIコンテンツ制作のワークフローはどのように設計しますか？",
    a: "①キーワード調査・構成案作成（人間）→②AI（ChatGPT等）でドラフト生成→③人間による専門知識・一次情報の追加→④E-E-A-Tチェック・品質レビュー→⑤内部SEO最適化→⑥公開という流れが基本です。AIはドラフト生成の効率化に特化させ、品質判断は人間が必ず行います。",
  },
  {
    q: "どのAIツールがコンテンツ制作に向いていますか？",
    a: "ChatGPT（GPT-4o）は指示の自由度と日本語品質のバランスが良い。Claudeは長文の整理・構成案作成・日本語の自然さに優れています。Geminiはリアルタイム情報の参照に対応しています。コンテンツの種類・目的に応じて使い分けることが効果的です。",
  },
  {
    q: "AIコンテンツのファクトチェックはどうすればいいですか？",
    a: "AI（特にChatGPT）は存在しない情報を自信ありげに生成する「ハルシネーション」が起きる場合があります。数字・統計・人物名・出来事・法律情報などは必ず一次ソース（官公庁・学術論文・業界団体）で確認することが必須です。AIは「下書き生成ツール」であり「情報源」ではありません。",
  },
  {
    q: "SNS投稿・メルマガにもAIは使えますか？",
    a: "はい。SNS投稿文のバリエーション生成・メルマガの件名案生成・商品説明文の作成にAIは非常に有効です。ブランドトーンと一致しているかのレビューと、実際の体験談・一次情報の追加を人間が行うことで、AIらしくない自然なコンテンツを効率的に制作できます。",
  },
  {
    q: "AIで制作したコンテンツの著作権はどうなりますか？",
    a: "現在の日本では、AIのみが生成したコンテンツは著作権の保護対象外という見解が一般的ですが、人間が創造的に関与した部分には著作権が生じます。また、AIの学習データに含まれる他者の著作物が出力に影響することもあるため、生成されたコンテンツが既存の著作物と類似していないか確認することが重要です。",
  },
  {
    q: "AIO（AI検索最適化）のためにはどんなコンテンツが必要ですか？",
    a: "ChatGPT・Gemini等のAI検索に引用されやすいのは、FAQ形式の明確な質問と回答・数値データを含む具体的な情報・明確な見出し構造・著者情報・会社情報が明示されたE-E-A-Tが高いコンテンツです。AIは信頼できる情報源からの引用を優先する傾向があります。",
  },
  {
    q: "コンテンツ制作を外注したい場合の注意点は？",
    a: "外注の場合、キーワード・検索意図・構成案・ターゲット読者・記事の目的を明確化した指示書を事前に作成することが重要です。AI生成コンテンツのままの納品は品質が低い場合があるため、専門知識の追加・一次情報の付与が行われているか確認します。納品後は必ず自社でレビューを行います。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/automation", label: "業務自動化", desc: "コンテンツ制作ワークフローの自動化" },
  { href: "/ai/workflow", label: "AIワークフロー設計", desc: "コンテンツ制作フローの設計" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "SEOに強いコンテンツ制作" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "AI活用のコンテンツカレンダー" },
  { href: "/aio", label: "AIO対策", desc: "AI検索での引用獲得" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "コンテンツ制作体制の構築支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "AIとSEOの統合支援" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "コンテンツ制作での活用事例" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "AIコンテンツのE-E-A-T向上" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×コンテンツの最新情報" },
  { href: "/contact", label: "無料相談", desc: "AIコンテンツ制作体制のご相談" },
];

export default function AiContentPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIコンテンツ制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Content</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIコンテンツ制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIコンテンツ制作とは、ChatGPT・Claude等の生成AIを活用してSEO記事・SNS投稿・コピーなどのコンテンツ制作を効率化する取り組みです。「AIに全部任せる」のではなく「AIで効率化・人間で品質向上」が正しいアプローチです。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AIはコンテンツのドラフト生成・構成案の作成・バリエーション展開に優れています。一方で専門的知識・一次情報・ブランドの独自性は人間が付加することで、高品質なコンテンツが生まれます。AI×人間の協働体制の設計が重要です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "280px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="AIコンテンツ制作・ChatGPT記事生成・AI×人間協働のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* AIコンテンツ制作ワークフロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Workflow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AI×人間協働のコンテンツ制作フロー
            </h2>
            <div className="max-w-4xl">
              {[
                { who: "人間", step: "STEP 01", title: "キーワード調査・構成案設計", body: "対策キーワード・検索意図・競合コンテンツを分析し、記事の構成案（見出し・盛り込む情報）を設計します。この工程が最も重要で、AIには難しい専門的判断が必要です。" },
                { who: "AI", step: "STEP 02", title: "AIでドラフト生成", body: "構成案・ターゲット・注意事項を含む詳細なプロンプトを使い、ChatGPT/Claudeでドラフトを生成します。プロンプトの質がドラフトの質を決めます。" },
                { who: "人間", step: "STEP 03", title: "専門知識・一次情報の追加", body: "AI生成のドラフトに、実体験・専門的見解・独自データ・引用出典を追加します。この工程がE-E-A-TとAI検索での引用可能性を高めます。" },
                { who: "人間", step: "STEP 04", title: "品質レビュー・ファクトチェック", body: "数値・人物名・法律情報などをオリジナルソースで確認します。AIのハルシネーションを排除し、ブランドトーンとの一致を確認します。" },
                { who: "人間/AI", step: "STEP 05", title: "内部SEO最適化・公開", body: "タイトル・メタディスクリプション・見出し・内部リンク・alt属性を最適化して公開します。構造化データ（FAQPage等）も実装します。" },
              ].map((s, i) => (
                <div key={i} className="flex gap-8 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="shrink-0 w-20">
                    <p className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: s.who === "AI" ? "#6B7280" : "#0d1b2a" }}>{s.who}</p>
                    <p className="text-[11px]" style={{ color: "#9CA3AF" }}>{s.step}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{s.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{s.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIコンテンツ制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIコンテンツ制作体制構築のご相談"
          body="AI活用のコンテンツ制作ワークフロー設計から、SEO・AIO対策まで一貫してご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
