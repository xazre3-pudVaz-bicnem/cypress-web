import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIブログ・コンテンツ自動化｜SEO記事を効率的に量産する方法｜株式会社サイプレス",
  description:
    "AIを活用したブログ記事制作の効率化。キーワードから記事構成・下書き生成・リライト支援まで、SEOコンテンツの量産体制をAIで構築する方法を解説。",
  keywords: ["AIブログ自動化", "AI記事生成", "SEOコンテンツ自動化", "ChatGPT ブログ", "コンテンツ量産"],
  openGraph: {
    title: "AIブログ・コンテンツ自動化｜SEO記事を効率的に量産する方法｜株式会社サイプレス",
    description: "AIを活用したブログ記事制作の効率化。キーワードから構成・下書き・リライトまでAIで効率化する方法を解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_20_52.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/blog-automation" },
};

const faqItems = [
  {
    q: "AIで書いたブログ記事はSEOに有効ですか？",
    a: "GoogleはAI生成コンテンツを禁止していませんが、「役立つコンテンツ」かどうかで評価します。AIの下書きに人間の編集・経験・専門知識を加えることで、SEOに有効な高品質コンテンツになります。",
  },
  {
    q: "どのAIツールを使えばいいですか？",
    a: "ChatGPT（GPT-4o）・Claude・Geminiが主要な選択肢です。Claudeは長文・論理的な文章に強く、GPT-4oは指示への対応が柔軟です。まずは無料版で試してみることを推奨します。",
  },
  {
    q: "AIで1記事を書くのにどのくらい時間がかかりますか？",
    a: "プロンプト設計が完成していれば、記事構成5分・下書き生成10〜15分・人間による編集30〜60分が目安です。ゼロから書く場合の5〜10分の1程度の時間で制作できます。",
  },
  {
    q: "AI記事の品質管理はどうすればいいですか？",
    a: "事実確認・独自視点の追加・体験談の組み込み・引用先の確認を必ず行います。特に事実誤認はSEOだけでなく信頼性を損なうため、専門家レビューのフローを設けることを推奨します。",
  },
  {
    q: "既存の記事をAIでリライトできますか？",
    a: "はい。既存記事のURLや本文をAIに入力し「SEO観点でリライトして」と指示することで改善案を生成できます。ただし元の文章の個性・体験談は人間が判断して残すことが重要です。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ全般のAI活用" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "ワークフロー全体の自動化" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "SEOコンテンツ戦略" },
  { href: "/ai/sns-automation", label: "SNS投稿自動化", desc: "SNS自動化の仕組み" },
  { href: "/seo/seo-writing", label: "SEOライティング", desc: "検索上位に書くコツ" },
  { href: "/contact", label: "無料相談", desc: "AIブログ自動化のご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#FFFFFF", paddingTop: "128px", paddingBottom: "64px" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用支援</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIブログ・コンテンツ自動化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Blog Automation</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIブログ・コンテンツ自動化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              コンテンツSEOで成果を出すには継続的な記事制作が必要ですが、毎回ゼロから書くのは時間がかかります。AIを活用した記事制作ワークフローを構築することで、品質を保ちながらコンテンツを効率的に増やせます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ChatGPT・Claudeなどの生成AIは「大量の文字を高速に生成すること」が得意です。キーワード調査・構成設計・品質チェックは人間が担い、下書き生成をAIに任せる「AI×人間協働」のフローが、コンテンツ量産の現実解です。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="AIブログ自動化・SEOコンテンツ量産のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center px-8 md:px-20" style={{ background: "rgba(13,27,42,0.5)" }}>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>AI × Content</p>
              <p className="font-black text-[22px] md:text-[28px] leading-snug" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
                AIで記事制作を効率化し、<br />コンテンツ資産を積み上げる
              </p>
            </div>
          </div>
        </section>

        {/* What AI Can Do */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Workflow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIブログ自動化でできること
            </h2>
            <div className="max-w-4xl">
              {[
                { n: "01", t: "キーワードリストからの記事タイトル自動生成", b: "ターゲットキーワードを入力するだけで、SEOを意識した記事タイトル候補を複数生成します。検索意図別（情報収集/比較/購買）に分類した候補も作成できます。" },
                { n: "02", t: "記事構成（見出し）の自動提案", b: "タイトルと対象キーワードから、H2・H3の見出し構成をAIが提案します。競合記事の構成を参考にしたより精度の高い構成も生成できます。" },
                { n: "03", t: "本文下書きの生成", b: "決定した見出し構成に基づいて本文の下書きをAIが生成します。トーン・対象読者・含めてほしいキーワードなどを指示することで精度が上がります。" },
                { n: "04", t: "既存記事のリライト支援", b: "古い記事・薄い記事をAIに入力し、SEO改善のためのリライト案を生成します。情報の更新・構成の強化・キーワード追加などを効率的に行えます。" },
                { n: "05", t: "メタディスクリプション・alt文の自動生成", b: "本文から適切なメタディスクリプション（120文字以内）・画像のalt文をAIが自動生成します。SEOに必要な付帯情報の入力工数を大幅に削減します。" },
                { n: "06", t: "内部リンク候補の提案", b: "記事の内容に基づいて、関連する既存記事への内部リンク候補をAIが提案します。内部リンク構造の強化を効率的に行えます。" },
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

        {/* Role Division */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Role Division</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIと人間の役割分担
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              AI活用で重要なのは、AIに何をさせて人間が何をするかの役割分担です。AIが得意なのは「大量の文字を高速に生成すること」ですが、品質保証・事実確認・独自の体験や視点の付与は人間が行う必要があります。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              <div style={{ padding: "28px", background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                <p className="font-bold text-[14px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>AIが担う作業</p>
                {["記事タイトル・構成の生成", "本文の下書き作成", "メタ情報の生成", "リライト案の提案", "ハッシュタグ・タグ提案"].map((t, i) => (
                  <p key={i} className="text-[13px] py-2" style={{ color: "#374151", borderTop: i > 0 ? "1px solid #F0EDE6" : "none" }}>→ {t}</p>
                ))}
              </div>
              <div style={{ padding: "28px", background: "#FFFFFF", border: "1px solid #E8E4DC" }}>
                <p className="font-bold text-[14px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>人間が担う作業</p>
                {["事実確認・情報の精査", "独自の体験・視点の追加", "SEO戦略・キーワード選定", "最終編集・品質チェック", "公開・運用判断"].map((t, i) => (
                  <p key={i} className="text-[13px] py-2" style={{ color: "#374151", borderTop: i > 0 ? "1px solid #F0EDE6" : "none" }}>→ {t}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIブログ自動化についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIブログ自動化のご相談"
          body="AIを活用したコンテンツ制作ワークフローの構築・プロンプト設計・運用体制の整備をサポートします。コンテンツSEOの量産体制をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
