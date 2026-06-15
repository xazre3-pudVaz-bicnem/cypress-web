import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "サイト構造設計とは｜SEOに強いWebサイトの情報設計｜株式会社サイプレス",
  description:
    "SEOに強いサイト構造の設計方法を解説。URL設計・パンくずリスト・内部リンク・サイロ構造・サイトマップ・ナビゲーション設計まで体系的に網羅。",
  keywords: ["サイト構造", "情報設計", "IA設計", "サイロ構造", "内部リンク設計", "URL設計", "SEO"],
  openGraph: {
    title: "サイト構造設計とは｜SEOに強いWebサイトの情報設計｜株式会社サイプレス",
    description: "SEOに強いサイト構造設計のガイド。URL・パンくず・内部リンク・サイロ構造の設計方法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/site-structure" },
};

const faqItems = [
  {
    q: "サイト構造がSEOに影響する理由は何ですか？",
    a: "サイト構造はGooglebotのクロール効率に直接影響します。適切な階層構造と内部リンクがあれば、クローラーがすべての重要ページを見つけて評価できます。逆に構造が複雑だとクロールが届かないページが生まれます。また、関連ページ同士が内部リンクで結ばれていると、ページ評価（PageRank）が伝播しやすくなります。",
  },
  {
    q: "URLはどのように設計するのがSEO上よいですか？",
    a: "シンプルで短く・キーワードを含み・階層が明確なURLが理想です。例：`https://www.cypress-all.co.jp/seo/content-seo`のように、スラッグに意味のある英単語を使います。日本語URLは避け、アンダースコアよりハイフンを使用します。また既存ページのURLを変更する場合は必ず301リダイレクトを設定します。",
  },
  {
    q: "サイロ構造とは何ですか？",
    a: "関連するコンテンツをグループ化し、そのグループ内で内部リンクを充実させることで、Googleにテーマの専門性を示す情報設計の考え方です。例えば「/seo」配下に「/seo/content-seo」「/seo/technical-seo」「/seo/local-seo」を配置し、相互に内部リンクで結ぶことで「SEO」というテーマの専門サイトとして評価されます。",
  },
  {
    q: "パンくずリスト（Breadcrumb）のSEO効果は？",
    a: "パンくずリストはユーザーがサイト内のどこにいるかを示すナビゲーション要素で、ユーザビリティとSEO両方に効果があります。BreadcrumbList構造化データを実装することでGoogleの検索結果にパンくずが表示（リッチリザルト）される場合があります。また、クロール効率と内部リンクの効果も向上します。",
  },
  {
    q: "サイトマップはXMLとHTMLのどちらが必要ですか？",
    a: "両方推奨です。XMLサイトマップはGooglebotにサイトのURL一覧を伝えるためのもので、Google Search Consoleに登録します。HTMLサイトマップはユーザーがサイト全体の構造を把握するためのもので、ユーザビリティ向上とクロールの補助が目的です。",
  },
  {
    q: "内部リンクはどのように設計するのがSEOに効果的ですか？",
    a: "関連性の高いページ同士を結ぶこと・アンカーテキストにキーワードを含めること・重要なページへのリンクを複数ページから設定することが基本です。親ページ↔子ページの相互リンク・関連ページへの横断リンク・テキスト中の自然な内部リンクを組み合わせます。",
  },
  {
    q: "既存サイトのリニューアル時にSEO評価を維持するには？",
    a: "URL変更時の301リダイレクト設定が最重要です。旧URLから新URLへの個別リダイレクトを全ページ設定します。また内部リンクの更新・新しいXMLサイトマップの登録・古いカノニカルURLの修正も必要です。リニューアル後はSearch Consoleでクロールエラーを監視します。",
  },
  {
    q: "階層は何段階にするのがいいですか？",
    a: "一般的にはトップページから3クリック以内に全ページがアクセスできることが理想です。階層が深すぎるとクローラーが到達しにくくなります。大規模サイトでは4〜5階層になることもありますが、その場合はXMLサイトマップの充実と内部リンクの設計でカバーします。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "BreadcrumbList Schema設定" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "トピッククラスター設計" },
  { href: "/web-design", label: "Webサイト制作", desc: "SEOを考慮したサイト設計" },
  { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "構造設計から制作まで" },
  { href: "/knowledge/site-structure", label: "サイト構造設計ガイド", desc: "情報設計の基礎" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "構造設計の確認項目" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "構造設計込みの料金目安" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "サイト構造の評価" },
];

export default function SiteStructurePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>サイト構造設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Site Architecture</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイト構造設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              サイト構造設計とは、WebサイトのURL階層・ナビゲーション・内部リンク・サイトマップを設計し、ユーザーとGooglebotの両方にとってわかりやすいサイトの「骨格」を作る作業です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              どれだけ良質なコンテンツを作っても、サイト構造が適切でなければGooglebotがコンテンツを発見・評価できません。サイト構造はSEOの土台であり、後から変更するのが難しい要素でもあるため、制作前の設計が重要です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="サイト構造設計・情報設計・IA・サイロ構造のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-bold text-white" style={{ fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                SEOの土台はサイト構造で決まる。<br />設計段階から最適化することが成功への近道。
              </p>
            </div>
          </div>
        </section>

        {/* 構造問題のリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Structure Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイト構造が整っていないと起きる4つのSEO問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "重要ページにPageRankが集まらない", b: "内部リンクが設計されていないサイトでは、SEO的に最も重要なページへの評価が集まりません。トップページから重要サービスページへの内部リンク設計がSEO評価の基盤です。" },
                { t: "クローラーがページを正しく認識できない", b: "深い階層に埋まったページや孤立したページはGoogleのクローラーに見つけられにくくなります。フラットな構造とXMLサイトマップでクロール効率を最大化します。" },
                { t: "カニバリゼーションで評価が分散する", b: "同じキーワードを複数ページで狙うとGoogleが「どのページを評価すべきか」と混乱します。類似ページの統合・canonicalの設定でキーワードの評価を一点集中させます。" },
                { t: "内部リンクが機能せず回遊率が低下する", b: "ユーザーが次のページへ自然に移動できる内部リンク設計がないと、1ページだけ見て離脱します。回遊率低下は滞在時間の短縮としてGoogleの評価低下にもつながります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 設計の要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Elements</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEOに強いサイト構造の設計要素
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "URL設計", body: "意味のある英語スラッグ・階層を反映したパス・ハイフン区切りでシンプルかつキーワードを含むURLを設計します。日本語URLやパラメータ多用URLは避けます。一度決めたURLは変更しないことが原則です（変更時は必ず301リダイレクト）。" },
                { title: "サイロ構造（トピッククラスター）", body: "関連するページをグループ化し、グループ内で内部リンクを充実させます。「/seo」配下に全SEO関連ページを集約し、相互リンクで結ぶことで、Googleに「SEOの専門サイト」として認識させます。" },
                { title: "パンくずリスト", body: "全ページにパンくずリストを設置し、BreadcrumbList構造化データを実装します。ユーザビリティ向上・クロール効率改善・リッチリザルト獲得の3つの効果があります。" },
                { title: "グローバルナビゲーション", body: "重要なページはグローバルナビゲーションに含めることで、全ページからリンクされクロール優先度が上がります。ナビの項目はビジネス目標と検索意図を踏まえて設計します。" },
                { title: "XMLサイトマップ", body: "全公開ページのURLリストをXML形式で作成し、Google Search Consoleに登録します。Next.jsではapp/sitemap.tsで動的生成が可能です。noindexページはサイトマップから除外します。" },
                { title: "内部リンク設計", body: "親ページ↔子ページの相互リンク・関連ページへの横断リンク・コンテンツ内の自然なテキストリンクを組み合わせます。アンカーテキストにキーワードを含めることで、リンク先のページに文脈情報を渡します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスのサポート */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのサイト構造設計支援
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "情報設計・IA設計", body: "サイト全体のURLマッピング・ページ階層・ナビゲーション設計を行います。制作前に情報設計を固めることで、後からの大幅修正を防ぎます。" },
                { title: "トピッククラスター設計", body: "ビジネス目標から逆算し、どのテーマでどのページを作るかのクラスター設計を行います。SEOで狙うキーワード群と対応するページ構成をマッピングします。" },
                { title: "内部リンク設計・実装", body: "現在のサイトの内部リンク不足・過剰・アンカーテキスト不適切を診断し、改善計画を立案。実装まで対応します。" },
                { title: "既存サイトのリニューアル設計", body: "URL変更・301リダイレクト・サイトマップ更新・パンくずの再設計など、SEO評価を維持しながらのリニューアル設計に対応しています。" },
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

        <FaqSection items={faqItems} heading="サイト構造設計についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="サイト構造設計・SEO設計のご相談"
          body="Webサイト制作前の情報設計から、既存サイトのリニューアル設計まで対応します。"
        />
      </main>
      <Footer />
    </>
  );
}
