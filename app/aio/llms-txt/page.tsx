import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "llms.txt｜AIクローラー向けサイト情報の最適化｜AIO対策",
  description: "ChatGPT・Claude・GeminiなどのAIクローラー向けにサイト情報を最適化するllms.txtの役割・書き方・設置方法を解説。AIO対策の新しい実装として注目。",
};

const faqItems = [
  { q: "llms.txtとrobots.txtは何が違いますか？", a: "robots.txtは検索エンジンのクローラーに対してアクセス制御を行うファイルです。llms.txtはAIクローラー（ChatGPT・Claude・Gemini等）に対して、サイトの内容・専門性・重要ページを案内するファイルです。robots.txtが「ここは来るな」という指示なら、llms.txtは「うちはこういうサイトです」という自己紹介です。" },
  { q: "llms.txtはSEOに影響しますか？", a: "直接的なSEOランキング要因ではありませんが、AIがサイトを正確に理解・参照することで、AI生成コンテンツやAI検索での引用が増える効果が期待されます。AIOの観点から設置を推奨します。" },
  { q: "llms.txtはどこに設置しますか？", a: "サイトのルートディレクトリ（例: https://example.com/llms.txt）に設置します。robots.txtやsitemap.xmlと同じ場所です。" },
  { q: "llms.txtに機密情報を書いてしまうリスクはありますか？", a: "llms.txtは公開ファイルのため、誰でもアクセスできます。機密情報・個人情報・内部資料の内容は記載しないでください。会社概要・サービス内容・重要ページのURLなど公開情報のみを記載します。" },
  { q: "llms.txtはどのくらいの頻度で更新すればいいですか？", a: "サービス内容・重要ページ・会社情報に変更があった際に更新します。特に頻度の規定はありませんが、robots.txtと同様に情報が古くならないよう定期的に見直すことを推奨します。" },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装" },
  { href: "/aio/entity-optimization", label: "エンティティ最適化", desc: "AI認識の最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
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
              <Link href="/aio">AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              llms.txt
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AIO — llms.txt</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              llms.txt｜AIクローラー向けサイト最適化
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              llms.txtは、ChatGPT・Claude・Geminiなどの大規模言語モデル（LLM）向けに、サイトの概要・専門性・重要ページを記述するテキストファイルです。AIがサイトを正確に理解・参照するための新しいAIO対策として注目されています。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="llms.txtとAIクローラー対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Content Guide</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              llms.txtに記述すべき内容
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "会社・サービスの概要", b: "会社名・事業内容・ミッション・専門領域を簡潔に記述します。AIがサイト全体の目的と専門性を理解するための基礎情報です。" },
                { n: "02", t: "専門分野・カバーするトピック", b: "そのサイトがカバーする主要テーマ・専門分野・得意領域をリスト形式で記述します。AIがサイトの専門性を判断する根拠になります。" },
                { n: "03", t: "重要ページへのURL", b: "サービスページ・専門知識ページ・よく参照されるコンテンツのURLを記載します。AIがどのページを優先的に参照すべきか理解できます。" },
                { n: "04", t: "著者・代表者情報", b: "サイトの著者・代表者・専門家情報を記載します。E-E-A-T（専門性・権威性・信頼性）の判断材料になります。" },
                { n: "05", t: "連絡先・信頼性情報", b: "会社住所・メールアドレス・設立年・事業許可番号などの基本情報を記載します。信頼できる実在する企業であることをAIに伝えます。" },
                { n: "06", t: "コンテンツの対象読者・更新頻度", b: "誰に向けたコンテンツか、どのくらいの頻度で更新されるかを記載します。AIが情報の鮮度と対象を判断するのに役立ちます。" },
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
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Example</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                llms.txtの記述例
              </h2>
              <div style={{ background: "#0d1b2a", padding: "28px", fontFamily: "monospace", fontSize: "13px", color: "#94a3b8", lineHeight: "1.8", overflowX: "auto" }}>
                <p style={{ color: "#64748b", marginBottom: "8px" }}># Company Name</p>
                <p style={{ color: "#e2e8f0", marginBottom: "16px" }}>株式会社サイプレス — MEO対策・SEO対策・AIO対策・Web制作</p>
                <p style={{ color: "#64748b", marginBottom: "8px" }}># Expertise</p>
                <p style={{ marginBottom: "16px" }}>MEO対策、SEO対策、AIO対策（AI Overview・LLM最適化）、</p>
                <p style={{ color: "#64748b", marginBottom: "8px" }}># Important Pages</p>
                <p style={{ marginBottom: "4px" }}>- /meo — MEO対策の専門知識</p>
                <p style={{ marginBottom: "4px" }}>- /seo — SEO対策の専門知識</p>
                <p style={{ marginBottom: "16px" }}>- /aio — AIO対策の専門知識</p>
                <p style={{ color: "#64748b", marginBottom: "8px" }}># Contact</p>
                <p>consulting.meo@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="llms.txt設置・AIO対策のご相談" body="llms.txtの作成・設置から、AIに選ばれるコンテンツ設計・構造化データ実装まで対応します。AI検索時代のWebマーケティングをお気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
