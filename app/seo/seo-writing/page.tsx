import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEOライティング｜検索意図に沿ったコンテンツ作成｜サイプレス",
  description: "SEOライティングの基本原則と実践方法。キーワードの自然な組み込み・見出し構造・E-E-A-T対応・検索意図への回答で検索上位を狙うコンテンツ作成術。",
  keywords: ["SEOライティング", "SEO記事作成", "検索意図", "E-E-A-T", "コンテンツSEO", "キーワード最適化", "SEOコンテンツ"],
  openGraph: {
    title: "SEOライティング｜検索意図に沿ったコンテンツ作成",
    description: "SEOライティングの基本原則と実践方法。キーワードの自然な組み込み・見出し構造・E-E-A-T対応・検索意図への回答で検索上位を狙うコンテンツ作成術。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/seo-writing" },
};

const faqItems = [
  { q: "SEOライティングとは普通の文章と何が違いますか？", a: "SEOライティングは検索エンジンとユーザーの両方に向けて書く文章です。検索意図に沿った構成、適切なキーワード配置、E-E-A-T（経験・専門性・権威性・信頼性）の組み込みが求められます。ただし読みにくいキーワード詰め込みは逆効果です。" },
  { q: "1記事に同じキーワードを何回入れればいいですか？", a: "記事全体でメインキーワードは自然な頻度で入れることが重要です。一般的に1,000文字に1〜2回程度が目安ですが、「不自然に感じる」ならそれは多すぎます。Googleは意味的な関連語も評価するため、同義語や関連語を組み合わせる方が効果的です。" },
  { q: "AIを使ってSEO記事を書いてもいいですか？", a: "GoogleはAI生成コンテンツを禁止していませんが、「品質の高いコンテンツ」を評価基準にしています。AIの下書きをベースに人間が事実確認・編集・独自の経験や視点を加えることで、AIだけでは書けない価値あるコンテンツになります。" },
  { q: "SEO記事の適切な文字数はどのくらいですか？", a: "検索意図によって異なります。情報収集型は2,000〜4,000文字、比較検討型は1,500〜3,000文字が多いです。「文字数を多くすれば上位に上がる」は誤解で、検索意図を満たす内容量が重要です。" },
  { q: "既存記事のリライトはSEOに効果がありますか？", a: "非常に効果的です。古い情報の更新、検索意図へのより的確な回答、内部リンクの追加などでリライトした記事が上位表示されるケースは多くあります。Googleは「最新性」も評価します。" },
  { q: "タイトルタグとH1の違いは何ですか？", a: "タイトルタグ（title要素）は検索結果に表示されるテキストで、H1はページ内の最上位見出しです。同じ内容か近い内容にすることが一般的ですが、タイトルタグは検索クリックを促すための表現、H1はページの内容を明確に示す表現として少し異なっても問題ありません。" },
  { q: "SEOライティングでリード文（導入文）はどう書けばいいですか？", a: "リード文では検索クエリへの直接回答・このページで何がわかるか・読む価値があることを3〜5文で伝えます。長い前置きや「〇〇とはどういうことでしょうか？」のような問いかけから始めるのは避け、結論から入ることが重要です。" },
];

const relatedLinks = [
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "キーワード選定" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "記事計画の立て方" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "AI活用のコンテンツ制作" },
  { href: "/seo/seo-audit", label: "SEO監査", desc: "現状診断から改善へ" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "サイト内部の最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細" },
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
              <Link href="/seo" style={{ color: "#6B7280" }}>SEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              SEOライティング
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Content Writing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SEOライティング｜検索意図に応えるコンテンツ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SEOライティングとは、検索エンジンとユーザーの両方に価値を提供する文章を書く技術です。キーワードの詰め込みではなく、検索意図を正確に把握し、専門性と読みやすさを両立したコンテンツ作成が求められます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              Googleは「ユーザーにとって最も役立つ情報を最初に届ける」というミッションを持っています。検索意図を満たす高品質なコンテンツを作ることが、SEOの根幹であり最も持続可能な施策です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="SEOライティング・コンテンツ作成" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                検索1位のコンテンツは「キーワードが多い」のではなく「検索意図に最も正確に答えている」記事です。
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SEOライティングで失敗する4つのパターン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "キーワードを詰め込みすぎる", b: "不自然なほどキーワードを繰り返すと、Googleはスパムと判断します。読みにくい文章はユーザーも離脱します。自然な文章の中に適切な頻度で含めることが重要です。" },
                { t: "検索意図とページ内容がズレている", b: "「安いホテル 東京」で検索したユーザーに高級ホテルの記事を見せても意味がありません。キーワードの背後にある意図を正確に把握してコンテンツを設計します。" },
                { t: "結論を最後まで引っ張る構成", b: "前置きが長く、答えが後半に書かれている記事は直帰率が高くなります。Googleは「ユーザーが満足して戻らない」ことを重視するため、結論ファーストが基本です。" },
                { t: "E-E-A-Tの根拠がない記事", b: "誰が書いたかわからない・専門性の根拠がない・出典不明の記事はGoogleの評価が低くなります。著者情報・実績・参照元の明示が品質評価を高めます。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Principles</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEOライティングの基本原則
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "検索意図を正確に把握する", b: "「情報収集」「比較検討」「購買・申し込み」「サイトへのアクセス」の4種類の検索意図を正確に把握することがSEOライティングの出発点です。同じキーワードでも意図が違えば書くべき内容は大きく変わります。" },
                { n: "02", t: "明確な見出し構造（H1→H2→H3）", b: "見出しはSEOとユーザビリティの両方に重要です。H1は1ページに1つ、H2でメイントピックを整理、H3で詳細を補足する階層構造を作ります。見出しにメインキーワード・関連語を自然に含めます。" },
                { n: "03", t: "結論ファーストで書く", b: "検索ユーザーは「答え」を求めてページを開きます。前置きを長くせず、最初の段落で質問への答えを示すことで、直帰率を下げて評価を高めます。" },
                { n: "04", t: "キーワードの自然な組み込み", b: "メインキーワードはtitle・H1・最初の段落・見出しに自然に含めます。同義語・関連語も活用し、同じ言葉の繰り返しを避けます。Googleは意味のある関連語を理解します。" },
                { n: "05", t: "E-E-A-T（経験・専門性・権威性・信頼性）の組み込み", b: "実際の経験・具体的なデータ・専門家の見解・信頼できる出典を含めることでE-E-A-T評価を高めます。特に医療・金融・法律分野では重要です。" },
                { n: "06", t: "一文は短く・段落は短く", b: "1文60文字以内、1段落3〜5文を目安にします。長い文章は読まれません。箇条書きや表を活用して視覚的に整理します。" },
                { n: "07", t: "内部リンクで関連コンテンツへ誘導", b: "関連記事・サービスページへの内部リンクを設置します。ユーザーが次のアクションに進みやすくなり、Googleもサイト構造を理解しやすくなります。" },
                { n: "08", t: "FAQ形式で疑問を解消する", b: "ページ末尾のFAQはユーザーの残った疑問を解消し、FAQPageスキーマで構造化データを実装することでリッチリザルト表示につながります。" },
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

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="SEOコンテンツ制作のご相談" body="検索上位を狙うSEOライティング・記事作成・既存記事のリライトをサポートします。AI活用による効率的なコンテンツ量産体制の構築もご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
