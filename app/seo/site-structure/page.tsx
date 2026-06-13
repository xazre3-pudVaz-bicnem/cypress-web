import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "サイト構造設計｜SEO対策の骨格を作る｜株式会社サイプレス",
  description:
    "SEOに強いサイト構造の設計方法を解説。URL設計・階層構造・内部リンク・パンくずリスト・トピッククラスター戦略など、Googleに正確に評価されるサイトの骨格を作る方法を体系的に説明します。",
  keywords: ["サイト構造", "URL設計", "SEO 階層構造", "トピッククラスター", "内部リンク設計", "サイト設計"],
  openGraph: {
    title: "サイト構造設計｜SEO対策の骨格を作る｜株式会社サイプレス",
    description:
      "SEOに強いサイト構造の設計方法を解説。URL設計・階層構造・内部リンク・パンくずリスト・トピッククラスター戦略など、サイトの骨格を作る方法を説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/site-structure" },
};

const conditions = [
  {
    title: "トップページを頂点とした明確な階層",
    body: "トップページを頂点に、カテゴリページ・サブカテゴリページ・個別ページと階層を整理します。ピラミッド型の階層構造は、Googleのクローラーがサイト全体を効率よく巡回するために最も適した形です。階層が深すぎると重要なページが評価されにくくなるため注意が必要です。",
  },
  {
    title: "3クリック以内でどのページにもアクセスできる設計",
    body: "トップページから任意のページまで3クリック以内でたどり着ける設計を目指します。クリック数が増えるほどGoogleはそのページの重要度を低く評価する傾向があります。重要なサービスページや集客ページはナビゲーションやフッターから直接アクセスできるようにしましょう。",
  },
  {
    title: "URLの一貫性（/category/sub-category/article）",
    body: "URLはサイトの階層構造を反映した設計にします。例えば/seo/keyword-research/のような階層型URLは、Googleにコンテンツの関係性とテーマを明示できます。日本語URLは避け、英数字・ハイフン区切りを採用することで、SNSシェアやリンク取得時の安定性が高まります。",
  },
  {
    title: "パンくずリストの設置",
    body: "パンくずリスト（Breadcrumb）はユーザーが現在のページ位置を把握するためのナビゲーション要素です。SEO観点では、Googleの検索結果にパンくずリストが表示されCTRが向上する効果があります。また、BreadcrumbList Schemaを実装することでリッチリザルト対応にもなります。",
  },
  {
    title: "内部リンクの戦略的配置",
    body: "重要なページへの内部リンクを戦略的に配置することで、Googleが各ページの重要度（PageRank）を適切に評価できるようになります。特に集客力の高い記事から変換率の高いサービスページへのリンクは、SEOとCVの両方を改善する効果があります。",
  },
  {
    title: "孤立ページ（Orphan page）の解消",
    body: "他のページからリンクされていない「孤立ページ」はGoogleに発見されにくく、評価も受けにくい状態です。全ページが何らかの形で内部リンクでつながっていることを確認し、孤立ページがあれば関連するページからリンクを追加します。",
  },
  {
    title: "正規URL（canonical）の設定",
    body: "同じコンテンツが複数のURLでアクセス可能な場合、canonicalタグで正規URLを指定します。URLパラメータ・HTTPとHTTPS・wwwあり・なしなどの重複を解消することで、評価が分散せず1つのURLに集約されます。Next.jsではmetadataのalternates.canonicalで実装します。",
  },
];

const faqItems = [
  {
    q: "サイト構造は後から変更できますか？",
    a: "変更は可能ですが、URL変更を伴う場合は301リダイレクトの設定が必須です。URLを変更すると蓄積した被リンク・検索順位がリセットされるリスクがあるため、できるだけサイト設計段階で適切な構造を設計することをお勧めします。既存サイトのリニューアル時はSEO影響を慎重に評価したうえで進めます。",
  },
  {
    q: "階層は何段階までが適切ですか？",
    a: "一般的には3〜4階層が適切とされています。トップ → カテゴリ → 記事の3階層が最もシンプルで管理しやすく、Googleのクロールも効率的です。大規模サイトでは4〜5階層になることもありますが、重要なページは常に浅い位置に置くことが原則です。",
  },
  {
    q: "トピッククラスター戦略とは何ですか？",
    a: "トピッククラスターとは、あるテーマ（トピック）に関するコンテンツを「ピラーページ（親）」と「クラスターページ（子）」に分けて設計する手法です。例えば「SEO対策」をピラーページにし、「キーワード調査」「内部SEO」「コンテンツSEO」などのクラスターページを作り、相互にリンクすることでGoogleにテーマの権威性を示せます。",
  },
  {
    q: "URLは日本語（日本語スラッグ）にしてもよいですか？",
    a: "技術的には可能ですが、SEO観点では英数字のURLを推奨します。日本語URLはSNSシェアやメールでの共有時に文字化け・エンコードされた長いURLになりやすく、ユーザー体験が悪化します。英語のキーワードを含むURLの方がリンク取得やシェアでも有利です。",
  },
  {
    q: "既存サイトの構造改善はどこから始めるべきですか？",
    a: "まずGoogle Search Consoleのカバレッジレポートでインデックス状況を確認し、クロールされていないページや孤立ページを特定することから始めます。次にサイト全体のURL一覧を作成し、階層・重複・不要ページを整理します。大規模な構造変更前にはSEO専門家によるサイト監査を推奨します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・メタ・構造最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "SEO戦略の出発点" },
  { href: "/web-design/seo-site", label: "SEOサイト制作", desc: "SEOを考慮したWeb制作" },
];

export default function SiteStructurePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0d1b2a] transition-colors" style={{ color: "#9ca3af" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9ca3af" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0d1b2a] transition-colors" style={{ color: "#9ca3af" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9ca3af" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>サイト構造設計</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
              SEO Knowledge
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,46px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              サイト構造設計
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              サイト構造とは、ページの階層・URL設計・内部リンクの配置・ナビゲーション設計の総体です。適切な構造設計はGoogleのクロール効率を高め、各ページの評価を最大化します。コンテンツの質が高くても、構造が乱れていると検索評価は得られません。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/1.png"
            alt="グラフと会議資料を確認しているビジネスミーティングの様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* サイト構造とSEOの関係 */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                サイト構造とSEOの関係
              </h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                サイト構造はGoogleのクローラー（Googlebot）がサイト全体を効率よく巡回するための「地図」の役割を担います。階層が整理されていれば、クローラーはすべての重要ページを短時間で発見し、インデックス登録できます。逆に構造が複雑・不整合・深すぎると、重要なページがクロールされないままとなり、どれほど良いコンテンツでも検索結果に表示されません。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                また、内部リンクの設計はPageRank（ページの評価値）の流れを制御します。多くのページからリンクされているページは高く評価され、逆にリンクが集まらないページは評価が低くなります。ユーザーが重要と認識するページに内部リンクを集中させることで、Googleの評価もそのページに集約されます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                URL設計もサイト構造の重要な要素です。/seo/keyword-research/のように階層を反映したURLは、Googleにコンテンツの文脈と関係性を明示します。URLを見るだけでそのページの内容と位置づけが理解できる設計が、SEO評価と同時にユーザー体験も向上させます。
              </p>
            </div>
          </div>
        </section>

        {/* SEOに強いサイト構造の条件 */}
        <section className="py-16 md:py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
                Conditions
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
                SEOに強いサイト構造の条件
              </h2>
            </div>
            <div className="max-w-3xl">
              {conditions.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        {/* 2-col: image + text */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 00_32_58.png"
                  alt="提案資料を使ったミーティングの様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2vw,24px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
                  トピッククラスター戦略
                </h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  トピッククラスター戦略とは、あるテーマ（トピック）を中心に、ピラーページ（包括的な親ページ）と複数のクラスターページ（詳細を扱う子ページ）を設計し、相互に内部リンクでつなぐ手法です。例えば「SEO対策」をピラーページとし、「キーワード調査」「コンテンツSEO」「テクニカルSEO」などの詳細ページを子として設計します。この構造により、Googleはサイトがそのテーマに対して深い専門性を持つと判断し、テーマ全体の評価が高まります。サイプレスではサイト構造設計からトピッククラスター設計まで、SEOに最適化されたサイト全体の骨格を設計・実装します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="サイト構造設計についてよくある質問" bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="サイト構造設計・SEO対策のご相談"
          body="新規サイト制作時の構造設計から、既存サイトのリニューアルによる構造改善まで、サイプレスがSEOに最適化されたサイトの骨格を設計します。まずは現状のサイトをご確認します。"
        />
      </main>
      <Footer />
    </>
  );
}
