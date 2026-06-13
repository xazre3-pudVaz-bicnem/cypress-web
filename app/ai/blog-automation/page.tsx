import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIブログ自動化｜SEOコンテンツの効率的な量産",
  description: "AIを活用したブログ記事制作の効率化。キーワードから記事構成・下書き生成・リライト支援まで、SEO記事の量産体制をAIで構築する方法を解説。",
};

const faqItems = [
  { q: "AIで書いたブログ記事はSEOに有効ですか？", a: "GoogleはAI生成コンテンツを禁止していませんが、「役立つコンテンツ」かどうかで評価します。AIの下書きに人間の編集・経験・専門知識を加えることで、SEOに有効な高品質コンテンツになります。" },
  { q: "どのAIツールを使えばいいですか？", a: "ChatGPT（GPT-4o）・Claude・Geminiが主要な選択肢です。それぞれ得意分野が異なります。Claude は長文・論理的な文章に強く、GPT-4oは指示への対応が柔軟です。まずは無料版で試してみることを推奨します。" },
  { q: "AIで1記事を書くのにどのくらい時間がかかりますか？", a: "プロンプト設計が完成していれば、記事構成5分・下書き生成10〜15分・人間による編集30〜60分が目安です。ゼロから書く場合の5〜10分の1程度の時間で制作できます。" },
  { q: "AI記事の品質管理はどうすればいいですか？", a: "事実確認・独自視点の追加・体験談の組み込み・引用先の確認を必ず行います。特に事実誤認はSEOだけでなく信頼性を損なうため、専門家レビューのフローを設けることを推奨します。" },
  { q: "既存の記事をAIでリライトできますか？", a: "はい。既存記事のURLや本文をAIに入力し「SEO観点でリライトして」と指示することで改善案を生成できます。ただし元の文章の個性・体験談は人間が判断して残すことが重要です。" },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ全般のAI活用" },
  { href: "/ai/sns-automation", label: "SNS投稿自動化", desc: "SNS自動化" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "ブログSEO戦略" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/ai">AI活用支援</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              AIブログ自動化
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AI — Blog Automation</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              AIブログ自動化｜SEOコンテンツの効率的な量産
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              コンテンツSEOで成果を出すには継続的な記事制作が必要ですが、毎回ゼロから書くのは時間がかかります。AIを活用した記事制作のワークフローを構築することで、品質を保ちながらコンテンツを効率的に増やせます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="AIブログ自動化・コンテンツ制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.18)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Workflow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AIブログ自動化でできること
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "キーワードリストからの記事タイトル自動生成", b: "ターゲットキーワードを入力するだけで、SEOを意識した記事タイトル候補を複数生成します。検索意図別（情報収集/比較/購買）に分類した候補も作成できます。" },
                { n: "02", t: "記事構成（見出し）の自動提案", b: "タイトルと対象キーワードから、H2・H3の見出し構成をAIが提案します。競合記事の構成を参考にしたより精度の高い構成も生成できます。" },
                { n: "03", t: "本文下書きの生成", b: "決定した見出し構成に基づいて本文の下書きをAIが生成します。トーン・対象読者・含めてほしいキーワードなどを指示することで精度が上がります。" },
                { n: "04", t: "既存記事のリライト支援", b: "古い記事・薄い記事をAIに入力し、SEO改善のためのリライト案を生成します。情報の更新・構成の強化・キーワード追加などを効率的に行えます。" },
                { n: "05", t: "メタディスクリプション・alt文の自動生成", b: "本文から適切なメタディスクリプション（120文字以内）・画像のalt文をAIが自動生成します。SEOに必要な付帯情報の入力工数を大幅に削減します。" },
                { n: "06", t: "内部リンク候補の提案", b: "記事の内容に基づいて、関連する既存記事への内部リンク候補をAIが提案します。内部リンク構造の強化を効率的に行えます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Role Division</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                AIと人間の役割分担
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                AI活用で重要なのは、AIに何をさせて人間が何をするかの役割分担です。AIが得意なのは「大量の文字を高速に生成すること」ですが、品質保証・事実確認・独自の体験や視点の付与は人間が行う必要があります。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div style={{ padding: "24px", background: "#ffffff", border: "1px solid #ece8e0" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "12px" }}>AIが担う作業</p>
                  {["記事タイトル・構成の生成", "本文の下書き作成", "メタ情報の生成", "リライト案の提案", "ハッシュタグ・タグ提案"].map((t, i) => (
                    <p key={i} style={{ fontSize: "13px", color: "#374151", padding: "6px 0", borderTop: i > 0 ? "1px solid #f0ede8" : "none" }}>→ {t}</p>
                  ))}
                </div>
                <div style={{ padding: "24px", background: "#ffffff", border: "1px solid #ece8e0" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "12px" }}>人間が担う作業</p>
                  {["事実確認・情報の精査", "独自の体験・視点の追加", "SEO戦略・キーワード選定", "最終編集・品質チェック", "公開・運用判断"].map((t, i) => (
                    <p key={i} style={{ fontSize: "13px", color: "#374151", padding: "6px 0", borderTop: i > 0 ? "1px solid #f0ede8" : "none" }}>→ {t}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="AIブログ自動化のご相談" body="AIを活用したコンテンツ制作ワークフローの構築・プロンプト設計・運用体制の整備をサポートします。コンテンツSEOの量産体制をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
