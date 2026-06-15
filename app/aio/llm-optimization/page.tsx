import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "LLM最適化｜GPT・Gemini・ClaudeへのAI情報最適化｜サイプレス",
  description: "LLM最適化でGPT・Gemini・Claudeが正確に認識する企業情報を構築。AIO対策の専門会社サイプレスが大規模言語モデルへの情報浸透を実施します。",
  keywords: ["LLM最適化", "大規模言語モデル最適化", "AIO対策", "AI情報最適化", "エンティティ最適化", "ナレッジグラフ"],
  openGraph: {
    title: "LLM最適化｜GPT・Gemini・ClaudeへのAI情報最適化",
    description: "LLM最適化でGPT・Gemini・Claudeが正確に認識する企業情報を構築。AIO対策の専門会社サイプレスが実施します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/llm-optimization" },
};

const faqItems = [
  { q: "LLM最適化はSEOと何が違いますか？", a: "SEOはページのランキングを上げることを目的としますが、LLM最適化はAIの学習データ・認識精度を最適化することを目的とします。ただし、SEOで権威性を高めることがLLM最適化にも寄与するため、両者は補完関係にあります。" },
  { q: "LLM最適化の効果を計測する方法はありますか？", a: "各AIへのクエリテストによる引用確認、エンティティ認識テスト、ナレッジパネルの表示確認などで計測します。定期的にGPT・Gemini・Claudeに自社名を含む質問を入力し、回答内容を検証します。" },
  { q: "GPT・Gemini・Claudeで自社が言及されているか確認できますか？", a: "はい。業界関連クエリ（「○○業界で信頼できる会社は？」「東京の〇〇専門会社は？」等）を各AIに投げることで確認できます。サイプレスでは月次でモニタリングを実施しレポートを提出します。" },
  { q: "LLM最適化に必要な期間はどのくらいですか？", a: "LLMの学習サイクルはモデルによって異なり、即時の効果は見込みにくいです。ナレッジグラフへの登録・権威サイトへの掲載などの施策は3〜6ヶ月単位で効果が現れます。中長期の取り組みとして計画することが重要です。" },
  { q: "LLM最適化とコンテンツマーケティングはどう組み合わせますか？", a: "専門性の高いコンテンツを継続的に発信し、それが権威サイトに引用・掲載されることでLLMの学習データに浸透します。コンテンツマーケティングはLLM最適化の重要な一部です。" },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTでの引用戦略" },
  { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleエンティティ登録" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org全般" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/aio" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              LLM最適化
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>LLM Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              LLM最適化｜GPT・Gemini・Claudeに認識される企業へ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              LLM最適化（Large Language Model Optimization）とは、GPT-4・Gemini・Claude・Llamaなどの大規模言語モデルが学習・参照する情報に対して、自社情報が正確・肯定的に含まれるよう最適化する施策です。AI時代の新しい企業ブランディング戦略です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              AIに「その分野の信頼できる企業」として認識されるためには、権威性の高い情報源への掲載・ナレッジグラフへの登録・構造化データの整備・プレスリリースの継続発信を組み合わせる必要があります。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="LLM最適化・大規模言語モデルへのAI情報最適化" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                ChatGPT・Gemini・Claudeに「信頼できる企業」として引用されるには、権威性の情報源への露出と構造化データの整備が鍵です。
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why It Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              LLM最適化が必要な4つの理由
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "AI検索が主要な情報収集手段になっている", b: "ChatGPT・Perplexity等のAI検索の利用が急増し、AIが「推薦する企業」かどうかが集客に直結しはじめています。" },
                { t: "AIは権威ある情報源を優先して参照する", b: "LLMは学習時に権威性・信頼性を判断します。業界メディアへの掲載や構造化データが認識精度を左右します。" },
                { t: "競合に先行することが優位性になる", b: "LLM最適化に取り組む企業はまだ少数です。今から着手することで、AI時代の検索において競合より優位な立場を確立できます。" },
                { t: "SEOとの相乗効果が高い", b: "権威性を高める施策はSEOとLLM最適化の両方に効きます。コンテンツ・被リンク・構造化データの整備が同時に機能します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "360px" }}>
                <Image src="/1.png" alt="LLM最適化・チャートを確認するグループ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.22em", fontSize: "11px", color: "#6B7280", marginBottom: "20px" }}>LLM Strategy</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: "clamp(20px,2.8vw,26px)", color: "#0F172A", marginBottom: "24px" }}>
                  LLM最適化で得られる効果
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                    GPT・Gemini・Claudeなどの大規模言語モデルは、権威性の高い情報源を優先して学習・参照します。業界メディアへの掲載・プレスリリースの定期発信・Googleナレッジグラフへの登録を組み合わせ、AIの学習データに自社情報を効果的に浸透させます。
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                    構造化データの整備により、AIが企業情報・サービス・専門分野を正確に理解できる状態を作ります。エンティティとしての認識精度が高まることで、AI検索での推薦確率が向上します。
                  </p>
                  <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                    LLM最適化はSEOとの相乗効果が高く、権威性を高める施策は従来のGoogle検索順位にも好影響を与えます。長期的なデジタルブランディング戦略の核として位置付けます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Implementation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              LLM最適化の主要施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "学習データへの情報浸透", b: "権威性の高いメディア・百科事典・学術サイトへの情報掲載でLLMの学習データを最適化します。プレスリリース配信・業界メディアへの寄稿・ポッドキャスト出演などが有効です。" },
                { n: "02", t: "構造化データ・セマンティクス最適化", b: "Schema.orgとセマンティックHTMLで、AIが情報を正確に理解できるよう整備します。Organization・Person・FAQPageなどのスキーマ実装が核となります。" },
                { n: "03", t: "ファクトチェック情報の整備", b: "会社情報・実績・専門性に関する正確な情報を複数の権威ある情報源に展開します。Googleナレッジグラフと各種SNSプロフィールの整合性を保つことが重要です。" },
                { n: "04", t: "エンティティ最適化", b: "企業・人物・サービスをGoogleのナレッジグラフに正確に登録し、AIの認識精度を高めます。sameAsプロパティでSNS・外部プロフィールを紐付けます。" },
                { n: "05", t: "E-E-A-T強化コンテンツの発信", b: "経験・専門性・権威性・信頼性（E-E-A-T）を示すコンテンツを継続的に発信します。著者情報の明示・実績データの公開・専門家の監修が効果的です。" },
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

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="LLM最適化のご相談" body="GPT・Gemini・Claudeに正確に認識される企業情報の構築をサポートします。構造化データ実装・ナレッジグラフ登録・コンテンツ戦略をお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
