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
    "SEOに強いサイト構造の設計方法を解説。URL設計・パンくずリスト・内部リンク・サイロ構造・サイトマップ・ナビゲーション設計まで体系的に網羅。情報アーキテクチャからカテゴリ設計・孤立ページ対策まで。",
  keywords: ["サイト構造", "情報設計", "IA設計", "サイロ構造", "内部リンク設計", "URL設計", "SEO", "情報アーキテクチャ", "パンくずリスト", "カテゴリ設計"],
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
  {
    q: "孤立ページ（オーファンページ）とは何ですか？どう対処すればよいですか？",
    a: "孤立ページとは、他のどのページからも内部リンクが張られていないページのことです。Googlebotはリンクをたどってクロールするため、孤立ページはXMLサイトマップがなければ発見されにくく、発見されても評価が集まりません。対処法は、関連するコンテンツから内部リンクを設定すること、または孤立ページを整理・削除することです。Google Search Consoleのクロールレポートや、ScreamingFrogなどのツールで孤立ページを見つけられます。",
  },
  {
    q: "重複コンテンツはサイト構造のどの部分で発生しやすいですか？",
    a: "URLパラメータ（?sort=price、?page=2など）・www有りなし・http/httpsの混在・トレイリングスラッシュの有無などで同一コンテンツが複数URLで表示される状態が重複コンテンツです。canonicalタグで正規URLを指定するか、301リダイレクトで統一します。また、カテゴリページとタグページで同じ記事が重複表示される場合もcanonicaを活用します。",
  },
  {
    q: "カテゴリ設計のよくある失敗は何ですか？",
    a: "カテゴリが多すぎてページ評価が分散すること・カテゴリ名がキーワードと一致していないこと・ほぼ同じ内容のカテゴリが複数存在すること（カニバリゼーション）が代表的な失敗です。カテゴリはビジネス目標とキーワード調査をもとに設計し、各カテゴリが独自の検索意図に対応するよう設計します。",
  },
  {
    q: "BreadcrumbList構造化データの実装方法を教えてください。",
    a: "JSON-LD形式でscriptタグ内に記述します。例：{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://example.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"SEO対策\",\"item\":\"https://example.com/seo\"}]}。Next.jsでは各ページのlayout.tsxまたはpage.tsxのheadタグ内に実装します。Google Search Consoleのリッチリザルトテストで確認できます。",
  },
  {
    q: "グローバルナビゲーションに含めるべきページはどう決めますか？",
    a: "グローバルナビゲーションに含まれるページは全ページからリンクされるため、SEO評価が最も高くなります。そのため、ビジネスの中核となるサービスページ・コンバージョン導線となるページ・最も検索需要の高いキーワードを対策するページを優先的に含めます。ナビ項目は5〜8個程度に絞り、ユーザーの迷いを防ぐシンプルな設計が理想です。",
  },
  {
    q: "サイト構造の設計タイミングはいつが最適ですか？",
    a: "サイト制作前の設計段階が最適です。URLは一度設定すると変更が難しく（変更時はSEO評価が一時的に下がるリスクがあります）、ナビゲーションやカテゴリ設計もシステムの実装に影響します。既存サイトの場合は、SEO診断を行った上でリニューアルとあわせて構造改善を進めることを推奨します。",
  },
  {
    q: "小規模サイト（5〜20ページ）でも構造設計は必要ですか？",
    a: "必要です。小規模サイトであっても、URLの命名規則・パンくずリスト・XMLサイトマップ・基本的な内部リンク設計は必須です。むしろ小規模サイトの方がシンプルな設計が求められるため、最初から整理された構造を作る方が後のSEO対策が進めやすくなります。",
  },
  {
    q: "ECサイトの構造設計で特に注意すべきことは何ですか？",
    a: "URLパラメータによる重複コンテンツ・ページネーションの扱い・在庫切れ商品ページの管理が特有の課題です。カテゴリページには固有のコンテンツ（説明文・Q&A）を追加してページとしての価値を高め、ファセットナビゲーション（絞り込み機能）のURLはcanonicaまたはnoindexで管理します。",
  },
  {
    q: "トピッククラスター（ピラーコンテンツ）とサイロ構造の違いは？",
    a: "本質的には同じ概念です。サイロ構造はURLの物理的な配置（ディレクトリ構造）を指し、トピッククラスターはコンテンツ間の関係性（ピラーページとクラスターページ）を指します。理想はURLの構造とコンテンツの関係性が一致した設計で、例えば「/seo/」がピラーページとして機能し、「/seo/content-seo/」「/seo/technical-seo/」がクラスターページとして相互リンクで結ばれる形です。",
  },
  {
    q: "SNSからの流入があるページの構造設計で気をつけることは？",
    a: "SNSからの流入が多いページはOGPタグの設定（og:title・og:image・og:description）が重要です。また、SNSからの訪問ユーザーがそのページだけで完結せず、関連コンテンツへ自然に誘導できる内部リンクを設置することで回遊率を高め、滞在時間を延ばすことがSEO評価にも貢献します。",
  },
  {
    q: "多言語サイトの構造設計ではどうすればよいですか？",
    a: "言語ごとにディレクトリを分けるか（/ja/・/en/）、サブドメインを使うか（ja.example.com）で設計します。hreflangタグで言語・地域の対応関係をGoogleに明示します。機械翻訳のみの薄いコンテンツは評価されにくいため、各言語ページに固有の価値を持たせることが重要です。",
  },
  {
    q: "サイト構造の改善効果はどのくらいで出ますか？",
    a: "クロール改善・XMLサイトマップの再登録・内部リンクの追加であれば2〜4週間でGooglebotが再クロールし、1〜3ヶ月で順位変動が見られることが多いです。URLリダイレクトを伴う大規模リニューアルの場合は、評価が安定するまで3〜6ヶ月かかることもあります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "BreadcrumbList Schema設定" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "トピッククラスター設計" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "構造設計に使うキーワード選定" },
  { href: "/seo/blog-strategy", label: "ブログSEO戦略", desc: "コンテンツマーケティングの実践" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "サイト構造の評価" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスの構造設計" },
  { href: "/web-design", label: "Webサイト制作", desc: "SEOを考慮したサイト設計" },
  { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "構造設計から制作まで" },
  { href: "/knowledge/site-structure", label: "サイト構造設計ガイド", desc: "情報設計の基礎" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "構造設計の確認項目" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "構造設計込みの料金目安" },
  { href: "/column/site-structure", label: "サイト構造コラム", desc: "情報設計の最新知識" },
  { href: "/knowledge/internal-link", label: "内部リンク設計ガイド", desc: "PageRank伝播の仕組み" },
  { href: "/knowledge/url-design", label: "URL設計ガイド", desc: "SEOに強いURL命名規則" },
  { href: "/knowledge/breadcrumb", label: "パンくず実装ガイド", desc: "BreadcrumbList構造化データ" },
  { href: "/cases/seo", label: "SEO改善事例", desc: "構造改善による順位向上の実績" },
  { href: "/aio", label: "AIO対策", desc: "AI検索に対応したコンテンツ構造" },
  { href: "/lp/seo-diagnosis", label: "無料SEO診断", desc: "サイト構造の問題点を無料で確認" },
];

export default function SiteStructurePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
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
              サイト構造設計とは、WebサイトのURL階層・ナビゲーション・内部リンク・サイトマップを設計し、ユーザーとGooglebotの両方にとってわかりやすいサイトの「骨格」を作る作業です。情報アーキテクチャ（IA）とも呼ばれ、制作前に固めるべき最重要の設計要素のひとつです。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              どれだけ良質なコンテンツを作っても、サイト構造が適切でなければGooglebotがコンテンツを発見・評価できません。サイト構造はSEOの土台であり、後から変更するのが難しい要素でもあるため、制作前の設計が重要です。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).jpg" alt="サイト構造設計・情報設計・IA・サイロ構造のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-bold text-white" style={{ fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                SEOの土台はサイト構造で決まる。<br />設計段階から最適化することが成功への近道。
              </p>
            </div>
          </div>
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "サイト構造設計がSEOに与える具体的な影響と、なぜ制作前に設計が必要なのか",
                "URL設計の原則（英語・ハイフン・意味を持つスラッグ）と避けるべきパターン",
                "サイロ構造（トピッククラスター）の仕組みと内部リンクでの専門性の示し方",
                "パンくずリストとBreadcrumbList構造化データの実装方法・SEO効果",
                "孤立ページの見つけ方・重複コンテンツの発生箇所と対処法",
                "業種別のサイト構造パターンと、設計から実装までのフロー",
              ].map((text, i) => (
                <div key={i} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
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

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              サイト構造の問題は、気づかないまま放置されることが多い課題です。以下のような状態に心当たりがある場合、構造設計の見直しが必要なサインです。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-5xl">
              {[
                { title: "URLが乱雑になっている", body: "日本語URL・意味のないパラメータ・深すぎる階層（例：/category/sub/item/12345/）など、URLからページの内容が読み取れない状態。URLはシンプルで意味を持つ英語スラッグで設計するのが基本です。" },
                { title: "カテゴリが多すぎる・少なすぎる", body: "ページ数に対してカテゴリが細分化されすぎて各カテゴリに2〜3ページしかない状態、またはカテゴリがなく全ページがフラットに並ぶ状態。どちらもクロール効率とページ評価の集約を妨げます。" },
                { title: "孤立したページ（オーファンページ）がある", body: "XMLサイトマップには登録されているが、どの内部ページからもリンクされていないページ。Googlebotはリンクをたどってクロールするため、孤立ページは評価されにくい状態です。" },
                { title: "パンくずが設定されていない・不完全", body: "パンくずリストがないと、ユーザーは自分がサイトのどこにいるかわかりません。また、BreadcrumbList構造化データが未実装の場合、リッチリザルトの獲得機会も失います。" },
                { title: "重複コンテンツが発生している", body: "URLパラメータ・wwwの有無・プロトコルの混在・トレイリングスラッシュの不統一などで同一コンテンツが複数URLに存在する状態。canonicalタグや301リダイレクトで解消が必要です。" },
                { title: "同じキーワードを複数ページで狙っている", body: "サービスページとブログ記事が同じキーワードを対策している状態（カニバリゼーション）。Googleがどちらを評価するか迷い、両方の順位が下がることがあります。" },
                { title: "グローバルナビが多すぎて整理されていない", body: "ナビゲーション項目が10以上ある・優先度なくすべてのページが並列・ユーザーが迷うメガメニュー。ナビはビジネス目標と検索意図から逆算して5〜8項目に絞るのが基本です。" },
                { title: "リニューアル後に検索順位が大幅に落ちた", body: "URL変更時に301リダイレクトが未設定・サイトマップ未更新・内部リンクが旧URLのまま残存。リニューアルはSEP評価を大幅に損なうリスクがあり、事前の設計と実装後の監視が必須です。" },
                { title: "重要ページがトップページから遠い位置にある", body: "コンバージョン目標となるページへの到達に4クリック以上かかる設計。クロールの到達率が下がり、PageRankの伝播も薄くなります。重要ページほどナビゲーションや上位ページから直接リンクします。" },
                { title: "内部リンクのアンカーテキストが「こちら」ばかり", body: "「こちら」「詳細はこちら」というアンカーテキストはGoogleにリンク先のページが何について書かれているかを伝えません。アンカーテキストにはリンク先のキーワードを自然に含めることが重要です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6 pr-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
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
                { title: "URL設計", body: "意味のある英語スラッグ・階層を反映したパス・ハイフン区切りでシンプルかつキーワードを含むURLを設計します。日本語URLやパラメータ多用URLは避けます。理想の形式は「/カテゴリ/サブカテゴリ/スラッグ」で、スラッグは小文字・ハイフン区切り・20文字以内が目安です。一度決めたURLは変更しないことが原則です（変更時は必ず301リダイレクト）。" },
                { title: "サイロ構造（トピッククラスター）", body: "関連するページをグループ化し、グループ内で内部リンクを充実させます。「/seo」がピラーページとして機能し、「/seo/content-seo」「/seo/technical-seo」「/seo/local-seo」がクラスターページとして相互リンクで結ばれます。Googleは「このドメインはSEOに詳しい」と専門性を認識します。ピラーページはクラスターページへリンクし、クラスターページはピラーページへ戻るリンクを設置します。" },
                { title: "パンくずリスト", body: "全ページにパンくずリストを設置し、BreadcrumbList構造化データを実装します。ユーザビリティ向上・クロール効率改善・リッチリザルト獲得の3つの効果があります。JSON-LD形式で実装し、Google Search Consoleのリッチリザルトテストで確認します。パンくずのリンクは各階層のページへ正しく張ることが重要で、テキストだけで実装するのは不完全です。" },
                { title: "グローバルナビゲーション", body: "重要なページはグローバルナビゲーションに含めることで、全ページからリンクされクロール優先度が上がります。ナビの項目はビジネス目標と検索意図を踏まえ5〜8項目に絞ります。ドロップダウンは設けてもよいですが、最上位のリンク先ページ自体に固有のコンテンツが必要です。フッターナビも内部リンクとして機能するため、補助的なページへの導線として活用できます。" },
                { title: "XMLサイトマップ", body: "全公開ページのURLリストをXML形式で作成し、Google Search Consoleに登録します。Next.jsではapp/sitemap.tsで動的生成が可能です。noindexページはサイトマップから除外します。lastmod（最終更新日）を正確に記述することでGooglebotが優先的にクロールします。大規模サイトでは1ファイル5万URL上限のため、カテゴリ別に分割してsitemap indexを使います。" },
                { title: "内部リンク設計", body: "親ページ↔子ページの相互リンク・関連ページへの横断リンク・コンテンツ内の自然なテキストリンクを組み合わせます。アンカーテキストにキーワードを含めることで、リンク先のページに文脈情報を渡します。重要なCVページへの内部リンクは複数ページから設定し、PageRankの集約を図ります。リンク数が多すぎるページはリンクごとの評価が希薄になるため、ページあたり100リンク以内が目安です。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 業種別のサイト構造 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のサイト構造パターン
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種によって「ユーザーが何を検索するか」「どのページがコンバージョンになるか」が異なります。業種の特性に合わせた構造設計が重要です。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-5xl">
              {[
                {
                  industry: "飲食店・カフェ",
                  label: "Restaurant",
                  body: "ホーム → メニュー（カテゴリ別：ランチ/ディナー/ドリンク）→ アクセス → 予約 → ストーリー・こだわり。エリア名を含むページ（例：/shibuya-lunch）を設けてローカル検索に対応。季節メニューページは毎年更新して内容の鮮度を維持します。",
                },
                {
                  industry: "クリニック・医療機関",
                  label: "Clinic",
                  body: "ホーム → 診療科目（症状別・治療法別）→ 医師紹介 → 患者の声 → アクセス・予約。症状別ページ（例：/symptoms/headache）で検索意図に対応し、治療法ページから予約ページへの内部リンクでコンバージョン導線を設計します。",
                },
                {
                  industry: "建設・リフォーム",
                  label: "Construction",
                  body: "ホーム → サービス（工事種別）→ 施工エリア（都道府県別）→ 施工事例（Before/After）→ お問い合わせ。施工事例は件数が多くなるためカテゴリ（工事種別×エリア）で整理し、エリアページから事例ページへの内部リンクでSEO評価を連携します。",
                },
                {
                  industry: "士業・コンサルタント",
                  label: "Professional Service",
                  body: "ホーム → サービス（業務種別）→ 実績・解決事例 → 代表プロフィール → ブログ（法律Q&A・業界解説）→ 相談予約。専門性の高いブログ記事をサービスページから内部リンクすることでE-E-A-T向上を狙います。",
                },
                {
                  industry: "美容院・エステ",
                  label: "Beauty Salon",
                  body: "ホーム → メニュー・料金（施術別）→ スタッフ紹介 → お客様の声 → ギャラリー → 予約。スタイル別ギャラリー（例：/style/short-hair）は検索流入が見込めるため、施術メニューページと相互リンクしてサイロを形成します。",
                },
                {
                  industry: "ECサイト・小売",
                  label: "E-Commerce",
                  body: "ホーム → カテゴリ（大分類）→ サブカテゴリ（小分類）→ 商品ページ。ファセットナビゲーション（絞り込み）のURLはcanonicalまたはnoindexで管理。カテゴリページには説明文を追加し、コンテンツとしての価値を持たせます。",
                },
                {
                  industry: "学習塾・スクール",
                  label: "Education",
                  body: "ホーム → 対象学年・コース → 教室一覧（エリア別）→ 合格実績・講師紹介 → 無料体験申込。コース別ページから教室ページへのリンク・教室ページからコース説明への相互リンクでローカルSEOと専門性を両立します。",
                },
                {
                  industry: "BtoB・SaaS",
                  label: "B2B / SaaS",
                  body: "ホーム → 機能・ソリューション別（課題別にページを分ける）→ 導入事例（業種別）→ 料金プラン → 資料請求・デモ申込。業種別の課題解決ページ（例：/solution/retail）は潜在顧客の検索意図に対応し、導入事例との内部リンクで信頼性を高めます。",
                },
              ].map((item, i) => (
                <div key={i} className="py-7 pr-8" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase px-2 py-1" style={{ background: "#F9F8F5", color: "#6B7280" }}>{item.label}</span>
                    <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
          </div>
        </section>

        {/* 設計・実施フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイト構造設計から実装までのフロー
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              サイト構造設計は「なんとなく決める」ではなく、キーワード調査と情報設計を根拠に進めます。以下が標準的な設計から実装までのフローです。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "STEP 01", title: "キーワード調査・競合分析", body: "ビジネス目標に関連するキーワードを洗い出し、検索ボリューム・競合の強さ・検索意図を調査します。どのキーワードをどのページで対策するかのマッピングがこの段階で決まります。競合サイトの構造を分析し、狙うポジションを明確にします。" },
                { step: "STEP 02", title: "情報階層設計（URLマップ作成）", body: "ページ一覧・URL・ページの役割（ピラー/クラスター/コンバージョン）・対策キーワードをスプレッドシートでマッピングします。このURLマップが構造設計の中核ドキュメントとなります。全ページのURL・タイトル・メタディスクリプション・親子関係を記載します。" },
                { step: "STEP 03", title: "URL命名規則の策定", body: "英語スラッグ・ハイフン区切り・小文字統一のルールを決定します。カテゴリスラッグ（例：/seo/、/web-design/）を確定し、以降の全ページのURLをこのルールに従って命名します。一度決めたURLは原則変更しないことを方針として明確にします。" },
                { step: "STEP 04", title: "カテゴリ・ナビゲーション設計", body: "グローバルナビゲーションの項目・順序・ドロップダウン構造を決定します。ビジネスの優先度とユーザーの検索意図の両方を考慮し、最大8項目程度に絞ります。フッターナビ・サイドバーリンクも設計に含めます。" },
                { step: "STEP 05", title: "パンくずリスト設計", body: "全ページのパンくず表示パターンを定義します（例：ホーム > SEO対策 > コンテンツSEO）。パンくずのリンクパスがURLマップの階層と一致しているかを確認します。BreadcrumbList JSON-LDのテンプレートを作成します。" },
                { step: "STEP 06", title: "内部リンク計画の立案", body: "ピラーページ↔クラスターページの相互リンク・重要CVページへのリンクを設計します。どのページからどのページへ・どのアンカーテキストでリンクするかを内部リンクマップとして記録します。コンテンツ内の自然なリンクはライティング段階で設置します。" },
                { step: "STEP 07", title: "XMLサイトマップ作成・設定", body: "全公開URLを含むXMLサイトマップを作成し、Google Search Consoleに登録します。Next.jsであればapp/sitemap.tsで自動生成。noindexページ・重複コンテンツページはサイトマップから除外します。lastmodを正確に設定します。" },
                { step: "STEP 08", title: "実装・QAチェック", body: "URLマップ通りにページが実装されているか・パンくずが全ページに設置されているか・内部リンクのURLが正しいか・XMLサイトマップに誤りがないかをチェックリストで確認します。ScreamingFrogなどのクロールツールで構造を検証します。" },
                { step: "STEP 09", title: "Search Consoleへの登録・監視", body: "サイトマップ登録後、Search Consoleのクロールレポートでエラーがないかを監視します。インデックス状況・クロール済みページ数・エラーページを定期的に確認し、問題があれば速やかに対処します。" },
                { step: "STEP 10", title: "定期的な構造レビューと改善", body: "半年〜1年ごとに、新規ページの追加・コンテンツ増加に伴いサイト構造を見直します。孤立ページの発生・内部リンクの不足・重複コンテンツの発生がないかを定期診断し、継続的に構造の品質を維持します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[11px] font-semibold tracking-[0.12em] shrink-0 mt-1" style={{ color: "#9CA3AF", minWidth: "64px" }}>{item.step}</span>
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

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              サイト構造設計の改善効果は、以下のKPIで計測します。Google Search ConsoleとGoogle Analyticsを組み合わせて定期的にモニタリングします。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-5xl">
              {[
                { metric: "クロール済みページ数", tool: "Google Search Console", desc: "Googlebotが実際にクロールしたページ数。インデックス登録数と比較して、クロールされているのにインデックスされないページの原因を特定します。クロール数が増えれば構造改善の効果が出ています。" },
                { metric: "インデックス登録数", tool: "Google Search Console", desc: "Googleにインデックスされているページ数。重複コンテンツの排除・孤立ページの解消・noindexの適正化により、適切なページが正確にインデックスされているかを確認します。" },
                { metric: "クロールエラー率", tool: "Google Search Console", desc: "404エラー・リダイレクトエラーの件数。リニューアル後やURL変更後に急増していないかを監視します。エラーが多いと、PageRankが無効なURLに漏れる原因になります。" },
                { metric: "内部リンクの被リンク数（上位ページ）", tool: "Google Search Console / ScreamingFrog", desc: "重要なCVページが何ページから内部リンクされているかを計測します。被内部リンク数が多いページはPageRankが集まりやすく、SEO評価が高くなる傾向があります。" },
                { metric: "平均ページ滞在時間・回遊率", tool: "Google Analytics", desc: "内部リンクが機能しているかを示す指標。セッションあたりのページビュー数が増加していれば、ユーザーが関連ページへ自然に移動できている証拠です。滞在時間の改善はユーザー体験向上のシグナルです。" },
                { metric: "トップページからの到達ステップ数", tool: "ScreamingFrog / Screaming Frog", desc: "重要ページへトップページから何クリックで到達できるかを計測します。目標は重要ページが3クリック以内。改善後に計測し直すことでフラット化の効果を検証します。" },
                { metric: "リッチリザルト（パンくず）の表示数", tool: "Google Search Console", desc: "検索結果にパンくずリストが表示されているページ数。BreadcrumbList構造化データの実装が正しく機能しているかの確認指標です。表示されると検索結果でのクリック率（CTR）向上につながります。" },
              ].map((item, i) => (
                <div key={i} className="py-6 pr-8" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-bold text-[14px] mb-1" style={{ color: "#0d1b2a" }}>{item.metric}</p>
                      <p className="text-[11px] tracking-wide mb-2" style={{ color: "#9CA3AF" }}>{item.tool}</p>
                      <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
          </div>
        </section>

        {/* サイプレスのサポート */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのサイト構造設計支援
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "情報設計・IA設計", body: "サイト全体のURLマッピング・ページ階層・ナビゲーション設計を行います。制作前に情報設計を固めることで、後からの大幅修正を防ぎます。キーワード調査を起点に、ビジネス目標と検索意図の両方を満たす構造を設計します。" },
                { title: "トピッククラスター設計", body: "ビジネス目標から逆算し、どのテーマでどのページを作るかのクラスター設計を行います。SEOで狙うキーワード群と対応するページ構成をマッピングし、ピラーページとクラスターページの役割を明確化します。" },
                { title: "内部リンク設計・実装", body: "現在のサイトの内部リンク不足・過剰・アンカーテキスト不適切を診断し、改善計画を立案します。内部リンクマップを作成し、重要CVページへの評価集約・クロール効率向上を実現します。実装まで対応します。" },
                { title: "既存サイトのリニューアル設計", body: "URL変更・301リダイレクト・サイトマップ更新・パンくずの再設計など、SEO評価を維持しながらのリニューアル設計に対応しています。リニューアル前後のSearch Consoleモニタリングも行います。" },
                { title: "孤立ページ・重複コンテンツの診断と解消", body: "ScreamingFrogなどのクロールツールでサイト全体をクロールし、孤立ページ・重複コンテンツ・リダイレクトエラー・パンくず未設定ページを一覧化します。優先度をつけて改善計画を提供します。" },
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

        <FaqSection items={faqItems} heading="サイト構造設計についてよくある質問" bgColor="#FFFFFF" />
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
