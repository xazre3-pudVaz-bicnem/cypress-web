import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "内部SEOとは｜タイトル・見出し・URL最適化の完全ガイド｜株式会社サイプレス",
  description:
    "内部SEO対策の基礎から実践まで徹底解説。タイトルタグ・メタディスクリプション・見出し構造・URL設計・内部リンク・構造化データの最適化方法。SEO改善の第一歩はサイト内部から。",
  keywords: ["内部SEO", "内部対策", "タイトルタグ最適化", "メタディスクリプション", "見出しタグ", "URL最適化"],
  openGraph: {
    title: "内部SEOとは｜タイトル・見出し・URL最適化の完全ガイド｜株式会社サイプレス",
    description: "内部SEO対策の基礎から実践まで。タイトル・メタ・見出し・URL・内部リンクの最適化方法を体系的に解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/internal-seo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "SEO対策", item: "https://www.cypress-all.co.jp/seo" },
        { "@type": "ListItem", position: 3, name: "内部SEO", item: "https://www.cypress-all.co.jp/seo/internal-seo" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "内部SEOと外部SEOはどちらが重要ですか？",
          acceptedAnswer: { "@type": "Answer", text: "内部SEOを先に整えることが基本です。サイト内部が最適化されていない状態で外部対策を実施しても効率が下がります。まず内部の土台を固めてから外部施策に移行することを推奨します。" },
        },
        {
          "@type": "Question",
          name: "titleタグの最適な文字数は？",
          acceptedAnswer: { "@type": "Answer", text: "Googleの検索結果表示は30〜35文字（全角）程度が目安です。重要なキーワードを前半に配置し、ブランド名を末尾に付加する形式が一般的です。" },
        },
      ],
    },
  ],
};

const elements = [
  {
    title: "titleタグ（ページタイトル）",
    importance: "最重要",
    body: "検索結果に表示されるページのタイトルです。対策キーワードを前半に配置し、30〜35文字以内に収めます。「ページの内容 + 差別化ポイント + サイト名」の形式が効果的です。全ページで異なる固有のタイトルを設定することが必須で、同一タイトルの重複はSEO評価を分散させます。キーワードを先頭に置くことで、検索結果での視認性とクリック率が向上します。",
  },
  {
    title: "メタディスクリプション",
    importance: "重要",
    body: "検索結果のタイトル下に表示される説明文（120〜140文字が目安）です。直接の順位要因ではありませんが、クリック率（CTR）に大きく影響します。ページの内容を簡潔に伝え、検索意図に応えるキーワードを自然に含め、行動を促すコピーにします。モバイル表示では約100文字前後で切れるため、前半に訴求ポイントを集中させます。",
  },
  {
    title: "見出しタグ（H1〜H3）",
    importance: "重要",
    body: "ページの情報構造を示す見出しです。H1はページに1つのみ、メインキーワードを含む形で設定します。H2・H3は内容を論理的に整理し、関連キーワードを自然に含めます。スクリーンリーダーへの対応としてもアクセシビリティに貢献します。H1とtitleタグは完全一致させる必要はなく、H1はページ本文の文脈に合わせた自然な表現にすることが推奨されます。",
  },
  {
    title: "URL設計・パーマリンク",
    importance: "重要",
    body: "URLはシンプルで意味のある構造にします。日本語よりも英語（半角英数字）でのURL設定を推奨します。長すぎず、階層構造を反映したURLが理想的です。ページの内容が変わっても安易にURLを変更しないことも重要で、変更する場合は必ず301リダイレクトを設定します。URLは検索結果にも表示されるため、ユーザーがページ内容を予測できる構成が望ましいです。",
  },
  {
    title: "内部リンク構造",
    importance: "重要",
    body: "サイト内のページ間リンクです。クローラーがサイト全体を効率的に回れるよう、論理的なリンク構造を設計します。重要なページには多くの内部リンクが集まるよう設計することで、そのページのSEO評価を高められます。アンカーテキストには関連キーワードを使い、「こちら」「詳細はこちら」のような曖昧なテキストは避けます。本文中のコンテキストに沿った自然なリンク配置が評価されます。",
  },
  {
    title: "画像最適化（alt属性）",
    importance: "中重要",
    body: "画像には必ずalt属性（代替テキスト）を設定します。検索エンジンは画像の内容を直接理解できないため、altテキストから画像の内容を判断します。また、画像ファイルの容量最適化（WebP形式・圧縮）で表示速度も改善します。ファイル名にもキーワードを含めることでGoogle画像検索からの流入も期待できます。装飾目的の画像にはalt属性を空（空文字列）に設定し、スクリーンリーダーの誤読を防ぎます。",
  },
  {
    title: "構造化データ（JSON-LD）",
    importance: "重要",
    body: "Schema.orgの構造化データをJSON-LD形式で実装することで、検索エンジンがページの内容を正確に理解できるようになります。FAQPage・BreadcrumbList・Article・LocalBusinessなどを適切に設定することで、リッチリザルト獲得可能性とAIO対策にも効果的です。Google Search Consoleのリッチリザルトテストでエラーがないか確認し、正常に読み取れているかを定期的に監視します。",
  },
  {
    title: "canonicalタグ・noindex設定",
    importance: "重要",
    body: "URLの正規化（canonical）設定で、同一コンテンツが複数URLで重複しないようにします。管理画面・検索結果ページなど、クロールされるべきでないページにはnoindexを設定します。適切な設定でクロールバジェットを重要なページに集中できます。特にECサイトやフィルタリング機能を持つサイトでは、パラメーター付きURLの正規化が必須の対策です。",
  },
  {
    title: "サイトマップ（XML）",
    importance: "中重要",
    body: "クローラーに対してサイト内の全ページを示すXMLサイトマップをGoogle Search Consoleに登録します。新しいページや更新ページを素早くインデックスさせるためにも重要です。動的サイトでは自動更新の仕組みを導入します。更新頻度・優先度（priority）の設定も加えることで、クローラーへの情報提供精度が上がります。noindexページはサイトマップから除外することが原則です。",
  },
];

const faqItems = [
  {
    q: "内部SEOはどこから始めればいいですか？",
    a: "まずGoogle Search Consoleで現状を確認することを推奨します。クロールエラー・インデックス状況・検索パフォーマンスを確認し、問題の多いページから着手します。次に全ページのtitleタグとメタディスクリプションを見直し、重複や欠落を修正します。内部リンク構造の整理・構造化データの実装と進めていくのが効率的な順序です。",
  },
  {
    q: "titleタグに含めるキーワードの数は？",
    a: "1〜2個程度が適切です。多くのキーワードを詰め込むと、各キーワードへの評価が分散します。メインキーワード1つ＋修飾語（地域・業種など）を組み合わせた形式で、自然で読みやすいタイトルを心がけます。キーワードの詰め込みは評価を下げるリスクがあります。",
  },
  {
    q: "内部リンクはどのくらい貼ればいいですか？",
    a: "1ページあたりの内部リンク数に厳密な上限はありませんが、貼りすぎると各リンクの評価値が分散します。ユーザーにとって有益な関連ページへ自然に誘導するリンクを10〜20本程度配置するイメージが目安です。ナビゲーション・フッター・本文中リンクをバランスよく設計します。",
  },
  {
    q: "URLは日本語と英語どちらがいいですか？",
    a: "英語（半角英数字）を推奨します。日本語URLはエンコードされて長い文字列になり、コピー時や共有時に扱いにくくなります。すでに日本語URLで多くのページがある場合は、301リダイレクトを伴わない変更は避けてください。",
  },
  {
    q: "H1タグは複数あってもいいですか？",
    a: "1ページにH1は1つが原則です。複数のH1があると、そのページの主題がどこにあるかが不明確になり、SEO評価が分散します。H1はページの最も重要な見出しとして1つのみ設定し、H2・H3で階層化するのが適切な構造です。",
  },
  {
    q: "noindexとは何ですか？どのページに設定すべきですか？",
    a: "noindexは「このページを検索結果に表示しないでください」という指示です。管理画面・プレビューページ・フィルタリング結果・プライバシーポリシーなど、SEO的な価値がなくクロールバジェットを消費するだけのページに設定します。重要なコンテンツページには絶対に設定しないよう注意が必要です。",
  },
  {
    q: "構造化データを実装すれば必ずリッチリザルトになりますか？",
    a: "必ずなるわけではありません。構造化データを実装してもGoogleがリッチリザルトとして表示するかどうかはGoogleが判断します。しかし実装することで可能性が高まり、AI検索での引用にも有利になります。実装後はGoogle Rich Results Testで確認します。",
  },
  {
    q: "既存サイトの内部SEO改善にどのくらいかかりますか？",
    a: "ページ数・CMSの種類・改善項目によって異なります。100ページ以下の小規模なサイトであれば、主要改善（タイトル・メタ・構造化データ・内部リンク）は1〜2ヶ月程度で完了できます。大規模サイトや複雑なCMSの場合は期間が延びます。",
  },
  {
    q: "WordPressで内部SEOを最適化するプラグインはありますか？",
    a: "Yoast SEOやRank Mathが広く使われています。タイトル・メタ・XMLサイトマップの管理が容易になります。ただしプラグインに頼りすぎず、実際のコンテンツ品質とURL設計・内部リンク設計は丁寧に設計することが重要です。",
  },
  {
    q: "内部SEOの効果はどのくらいで出ますか？",
    a: "クロールエラーの修正・noindex設定の見直しなど技術的な修正はGoogleの再クロール後（数日〜数週間）に効果が出ることがあります。タイトル最適化・内部リンク整理などは2〜4週間程度で反映されるケースが多いです。全体的な順位向上には数ヶ月かかることが通常です。",
  },
  {
    q: "canonicalタグはどのように設定しますか？",
    a: "HTMLのhead内に「<link rel='canonical' href='正規URL' />」を記述します。Next.jsでは`alternates.canonical`をmetadataで指定します。WordPressではYoast SEO・Rank MathがGUIで設定できます。HTTPヘッダーでも設定可能ですが、HTMLでの実装が一般的です。同一コンテンツが複数URL（www有無・http/https・パラメーター違いなど）で存在する場合に必須の設定です。",
  },
  {
    q: "アンカーテキストの最適化とはどういうことですか？",
    a: "内部リンクを貼る際のリンクテキスト（クリックする文字部分）のことです。「こちら」「詳細はこちら」のような意味のないテキストより、リンク先ページのキーワードを含む説明的なテキスト（例：「内部リンク最適化の方法」）を使うことで、リンク先ページの関連キーワードへの評価が伝わりやすくなります。",
  },
  {
    q: "パンくずリストは内部SEOに効果がありますか？",
    a: "効果があります。パンくずリストはユーザーの回遊を助けるだけでなく、BreadcrumbList構造化データと組み合わせることで検索結果にパンくず表示が出るリッチリザルトを獲得できます。またサイトの階層構造をクローラーに伝える役割もあり、内部リンク設計の一部として重要です。",
  },
  {
    q: "robots.txtとsitemap.xmlの違いは何ですか？",
    a: "robots.txtはクローラーに「クロールしてよいページ・してはいけないページ」を指示するファイルです。sitemap.xmlはクローラーに「サイト内に存在するページ一覧」を伝えるファイルです。robots.txtでブロックしたページをsitemap.xmlに含めると矛盾が生じます。両ファイルを整合させることが内部SEOの基本です。",
  },
  {
    q: "ページの重複コンテンツはなぜ問題ですか？",
    a: "同じ内容のページが複数URLで存在すると、Googleはどちらを正規として評価すべきか判断できず、評価が分散します。その結果、意図したページが評価されないケースがあります。canonicalタグや301リダイレクトで正規URLを明示し、重複を解消することが重要です。",
  },
  {
    q: "モバイルフレンドリーは内部SEOに関係しますか？",
    a: "直接的な関係があります。Googleはモバイルファーストインデックスでモバイルページを基準に評価します。レスポンシブデザインでモバイルでも適切に表示されること、タップターゲットのサイズが適切であること、フォントサイズが読みやすいことなどが技術的内部SEOの一部として評価されます。",
  },
  {
    q: "ページの表示速度は内部SEOに影響しますか？",
    a: "Core Web Vitals（LCP・INP・CLS）がGoogleのランキング要因に含まれています。LCP（最大コンテンツの描画）2.5秒以内、CLS（累積レイアウトシフト）0.1以下が推奨基準です。画像の最適化・JavaScriptの削減・サーバー応答速度の改善が内部SEO改善の一環として有効です。",
  },
  {
    q: "Open Graph（OGP）の設定はSEOに影響しますか？",
    a: "OGP設定は直接の検索順位要因ではありませんが、SNSでシェアされた際の表示品質を向上させ、クリック率・拡散を促します。SNSからの参照トラフィックが増えることで間接的にSEO評価に貢献します。og:title・og:description・og:imageを全ページに設定することを推奨します。",
  },
  {
    q: "内部SEO対策は一度やれば終わりですか？",
    a: "終わりではありません。Googleのアルゴリズム更新・新しいページの追加・コンテンツの更新に合わせて継続的な見直しが必要です。特に新規ページ追加時のタイトル設定・内部リンクの追加は都度行います。3〜6ヶ月ごとに全体的な内部SEO監査を実施することを推奨します。",
  },
  {
    q: "hreflangタグとは何ですか？必要な場合は？",
    a: "hreflangタグは同一コンテンツが複数言語・地域向けに存在する場合に、どの言語・地域向けのページかを検索エンジンに伝えるタグです。日本語のみのサイトでは基本的に不要ですが、英語・中国語など多言語でページを用意している場合は設定が必要です。設定ミスが多い項目のため、専門家に依頼することを推奨します。",
  },
  {
    q: "内部SEO対策を外部に依頼する場合の費用目安は？",
    a: "内部SEO診断のみであれば数万円〜十数万円、改善の実装まで含む場合は規模によって異なりますが、小規模サイト（50ページ以下）で20〜50万円程度が目安です。継続的な月次管理・改善を含む場合は月額5〜15万円程度のプランが一般的です。CMS・フレームワークの種類や実装の複雑さによって費用は変動します。",
  },
  {
    q: "Next.jsサイトの内部SEO実装で注意すべき点は？",
    a: "Next.jsのApp Routerでは各page.tsxにMetadataをエクスポートすることで、titleタグ・metaタグ・OGPタグ・canonicalタグを管理します。構造化データはscriptタグでJSON-LDをdangerouslySetInnerHTMLで挿入します。サーバーサイドレンダリング（SSR）またはスタティック生成（SSG）を使うことで、クローラーがJavaScriptを実行せずともコンテンツを読み取れます。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要と5つの柱" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ制作" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "表示速度・Core Web Vitals" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "対策キーワードの選定方法" },
  { href: "/seo/site-structure", label: "サイト構造設計", desc: "情報設計とURL設計" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "内部SEOの現状評価" },
  { href: "/seo/search-console", label: "サーチコンソール活用", desc: "内部SEO改善のデータ活用" },
  { href: "/aio/structured-data", label: "AIO構造化データ", desc: "AI検索対応の情報設計" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示" },
  { href: "/knowledge/seo-basics", label: "SEO基礎知識", desc: "初心者向けSEO完全ガイド" },
  { href: "/knowledge/meta-tags", label: "メタタグの設定方法", desc: "titleとdescriptionの書き方" },
  { href: "/knowledge/seo-ranking-factors", label: "SEOランキング要因", desc: "Googleが評価する内部・外部の要素" },
  { href: "/knowledge/internal-linking", label: "内部リンク最適化", desc: "リンク設計とアンカーテキストの基本" },
  { href: "/guide/how-to-choose-seo-company", label: "SEO会社の選び方", desc: "外注先選びのポイント" },
  { href: "/guide/keyword-research-basics", label: "キーワード調査の基本", desc: "初心者向けキーワード選定ガイド" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "内部SEO改善の料金目安" },
  { href: "/checklist/seo-basics", label: "SEO基本チェックリスト", desc: "内部SEO確認項目一覧" },
  { href: "/faq/seo-basics", label: "SEOよくある質問", desc: "初心者向けSEO疑問集" },
  { href: "/glossary/canonical", label: "canonicalタグとは", desc: "正規化URLの仕組みと設定方法" },
  { href: "/glossary/structured-data", label: "構造化データ用語集", desc: "JSON-LD・Schema.orgの基本用語" },
  { href: "/solutions/seo-content", label: "SEOコンテンツ制作", desc: "内部SEO込みのコンテンツ支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "SEO対応Webサイト制作" },
];

export default function InternalSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
              <span style={{ color: "#0F172A" }}>内部SEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>
              On-Page SEO
            </p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              内部SEO対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              内部SEO（オンページSEO）とは、Webサイトの内部構造・HTML要素・コンテンツを最適化することで、検索エンジンによる評価を高める施策です。外部対策（被リンク）より先に整えるべき、すべてのSEOの土台です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              内部SEOが整っていないサイトは、コンテンツや被リンクがどれだけ充実していても、検索エンジンにその価値を正しく評価してもらえません。まずはサイト内部の最適化から始めることで、他の施策の効果が最大化されます。
            </p>
          </div>
        </section>

        {/* Visual */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.jpg" alt="内部SEO最適化・HTMLソースコード分析" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <ul className="max-w-3xl space-y-0">
              {[
                "内部SEOとは何か、外部SEOとの違いと優先すべき理由",
                "タイトルタグ・メタディスクリプション・見出しタグの最適な設定方法",
                "URL設計・canonicalタグ・noindexの正しい使い方と設定手順",
                "内部リンクの設計戦略とアンカーテキスト最適化の具体的な方法",
                "JSON-LD構造化データの種類と実装の優先度",
                "業種別の内部SEO改善で特に効果的なポイント",
                "Search Consoleを使った内部SEO状況の確認方法と改善フロー",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[13px] font-semibold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <span className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
              <li style={{ borderTop: "1px solid #E8E4DC" }} />
            </ul>
          </div>
        </section>

        {/* 内部SEOの重要性 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why It Matters</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              内部SEOが重要な理由
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
              <div className="space-y-5">
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  Googleのクローラーは、ページのHTML要素を読み取ることでそのページの内容・目的・重要度を判断します。タイトルタグ・見出し構造・メタディスクリプションが適切に設定されていれば、クローラーはページの主題を正確に把握し、関連する検索クエリにマッチさせやすくなります。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  内部リンク構造が整理されていると、クローラーがサイト全体を効率よく巡回でき、重要なページに評価が集まりやすくなります。逆に内部リンクが乱雑で重要ページへのリンクが少ない場合、そのページは「重要ではない」と判断されてしまいます。
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  構造化データ（JSON-LD）の実装により、GoogleはページをFAQ・記事・商品・組織などのエンティティとして正確に認識します。これはリッチリザルト（強調表示）の獲得だけでなく、AI検索での引用可能性を高めるためにも重要になっています。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  適切なcanonical設定とnoindex管理により、重複コンテンツ問題を防ぎ、Googleのクロールバジェットを重要なページに集中させることができます。これはサイト規模が大きくなるほど重要度が増す施策です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 内部SEOの主要要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Elements</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              内部SEOの主要要素と最適化方法
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              内部SEOには多数の最適化要素があります。重要度の高いものから優先的に対応することが効率的なSEO改善につながります。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {elements.map((el, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5" style={{ background: "#FFFFFF", color: "#6B7280", border: "1px solid #E8E4DC" }}>
                      {el.importance}
                    </span>
                    <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{el.title}</p>
                  </div>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{el.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              内部SEO対策が不十分なサイトに共通して見られる課題を整理しました。自社サイトに当てはまる項目がないか確認してください。
            </p>
            <div className="max-w-4xl">
              {[
                {
                  title: "全ページのタイトルタグが同一または類似している",
                  body: "CMS導入時のデフォルト設定のまま放置されているケースや、「サービス名 | 会社名」という固定フォーマットを全ページに適用しているケースが多く見られます。各ページの主題を反映したユニークなタイトルがないと、Googleが独自のタイトルを生成して表示することがあります。",
                },
                {
                  title: "メタディスクリプションが未設定または全ページ同一",
                  body: "メタディスクリプションが設定されていないと、Googleがページ本文から自動で抜粋します。この抜粋が検索意図と合致しない文章になることが多く、クリック率の低下につながります。全ページに検索意図を意識した固有のディスクリプションを設定することが必要です。",
                },
                {
                  title: "H1タグがロゴや画像のalt属性に設定されている",
                  body: "デザイン重視のサイトで、ロゴ部分にH1タグが充てられているケースがあります。H1はページの本文コンテンツの主題を示す見出しとして使用し、ロゴにはp・div・span要素を使うべきです。ページの最重要キーワードをH1に含められないと、SEO上の機会損失が生じます。",
                },
                {
                  title: "内部リンクがナビゲーションのみで本文中にない",
                  body: "ヘッダー・フッターのナビゲーションリンクだけでサイトが構成されており、コンテンツページ本文に関連ページへの内部リンクがないサイトでは、クローラーが深部ページへ到達しにくくなります。またSEO評価の伝播も弱まるため、本文中に文脈に沿ったリンクを配置する改善が必要です。",
                },
                {
                  title: "日本語URLがエンコードされて長大になっている",
                  body: "「example.com/ブログ/SEO対策とは」のような日本語URLは、URLエンコードによって「example.com/%E3%83%96%E3%83%AD%E3%82%B0/...」という非常に長い文字列になります。この状態でURLを共有・コピーすると機能しなくなることがあり、クロールの信頼性にも影響します。",
                },
                {
                  title: "重複コンテンツによるcanonical問題が発生している",
                  body: "httpsとhttpの両方でアクセスできる・wwwありとなしで同一コンテンツが表示される・URLパラメーターで複数URLが生成されているなどの状態を放置すると、評価が分散します。canonical設定と301リダイレクトを組み合わせた正規化が必要です。",
                },
                {
                  title: "構造化データが未実装またはエラーが出ている",
                  body: "構造化データを実装していても、必須プロパティが不足していたりデータの型が正しくないと、Googleのリッチリザルトテストでエラーが発生します。エラー状態の構造化データはリッチリザルト対象外となるため、実装後の検証が必須です。",
                },
                {
                  title: "noindexが重要なページに誤って設定されている",
                  body: "開発・テスト環境から本番に移行した際にnoindex設定が残ってしまうケースが多くあります。特にWordPressでは「検索エンジンがサイトをインデックスしないようにする」チェックボックスが本番環境でオンになっていることがあり、全ページがインデックスされない重大な問題につながります。",
                },
                {
                  title: "XMLサイトマップが更新されず古い情報のまま",
                  body: "静的に生成したサイトマップを一度登録した後、ページの追加・削除に合わせて更新されていないケースがあります。サイトマップに存在しないページはクロール頻度が下がります。Next.js・WordPressではサイトマップ自動生成の仕組みを導入することを推奨します。",
                },
                {
                  title: "Core Web Vitalsのスコアが低く技術的SEOと連動していない",
                  body: "LCP・INP・CLSなどのCore Web Vitalsの改善を内部SEOと切り離して考えているケースが多く、表示速度の問題がランキングに影響しているにもかかわらず対策が後回しになっています。Google Search ConsoleのCore Web Vitalsレポートで問題ページを特定し、優先的に改善することが必要です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* よくある失敗 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Mistakes</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              内部SEOでよくある失敗
            </h2>
            <div className="max-w-4xl">
              {[
                {
                  title: "全ページ同じタイトルタグ・メタディスクリプション",
                  body: "制作時の手抜きや、CMSのデフォルト設定のまま放置しているサイトに多く見られます。Googleは重複タイトルを評価せず、独自のタイトルに書き換えることがあります。全ページ固有のタイトルとメタの設定が必須です。",
                },
                {
                  title: "H1タグの複数設置または未設置",
                  body: "デザイン上の見た目を優先してH1・H2が逆転していたり、ロゴ画像にH1を使っていたりするケースがあります。H1はページの主題を示す最重要見出しです。ページに1つ、コンテンツの最初の見出しに設定します。",
                },
                {
                  title: "内部リンクがナビゲーションのみ",
                  body: "ヘッダー・フッターのナビゲーションリンクのみで、本文中に内部リンクがないサイトは、クローラーのサイト巡回効率が低下します。関連ページへの自然な本文中リンクを追加することで、SEO評価の伝播効率が上がります。",
                },
                {
                  title: "URLの変更・削除の繰り返し",
                  body: "リニューアルや整理の際に既存URLを変更・削除することで、それまでに蓄積したSEO評価が失われます。URLを変更する場合は必ず301リダイレクトを設定し、評価の引き継ぎを行います。",
                },
                {
                  title: "構造化データの未実装",
                  body: "Reactベースのサイトで構造化データが実装されていないケースが多いです。特にFAQPage・BreadcrumbList・Organizationは基本的な施策として、またAI検索（AIO）対策として必須になっています。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の内部SEO活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種によって内部SEOの優先施策は異なります。自社の業種に合った内部SEO改善から着手することが、費用対効果の高い改善につながります。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  industry: "飲食店",
                  body: "メニューページ・店舗情報ページにLocalBusiness・MenuSection・MenuItemの構造化データを実装することが優先です。タイトルタグには「料理ジャンル + 地域名 + 店名」の形式を使い、Googleマップ連携も考慮したURL設計（/menu・/access・/reserve）を採用します。テイクアウト・ランチ・個室などの個別ページを作り、それぞれに内部リンクで誘導する構造が効果的です。",
                },
                {
                  industry: "美容室・ネイルサロン",
                  body: "「地域名 + 髪質改善」「駅名 + ジェルネイル」など複合キーワードに対応したページを個別に作成し、各ページのH1・titleに対策キーワードを含めます。メニュー一覧ページからスタイリスト別ページ・メニュー詳細ページへの内部リンク構造を整備し、予約ページへの動線を内部リンクで一貫して設けることが重要です。",
                },
                {
                  industry: "歯科・クリニック",
                  body: "医療系（YMYL）コンテンツとして監修者情報・院長プロフィールの構造化データ（Person Schema）実装が特に重要です。各診療科目・治療メニューを個別ページ化し、「矯正歯科 + 地域名」「インプラント + 地域名」などのページにtitleタグを最適化します。MedicalOrganization SchemaとFAQPage Schemaを組み合わせることでリッチリザルト獲得を狙います。",
                },
                {
                  industry: "建設・リフォーム",
                  body: "施工事例ページの内部リンク設計が特に重要です。「キッチンリフォーム事例」→「キッチンリフォームの費用ページ」→「お問い合わせ」という導線を内部リンクで構築します。地域名・工事種別・予算帯を組み合わせたタイトルタグ設計（「キッチンリフォーム 横浜 費用｜会社名」）で複合キーワードを狙います。",
                },
                {
                  industry: "士業・コンサル",
                  body: "「弁護士が解説する〇〇」「税理士監修〇〇」のようにコンテンツの専門性をH1・titleに明示する内部SEOが効果的です。Person SchemaとProfessionalService Schemaの実装で専門性を構造化し、コラム・解説ページから相談・依頼ページへの内部リンクでCVへの導線を作ります。地域名を含むLegalService・AccountingServiceの設定も優先です。",
                },
                {
                  industry: "不動産",
                  body: "物件ページの動的URL管理が最重要課題です。絞り込みパラメーターによるURLの爆発的増加をcanonical・noindexで制御し、クロールバジェットを物件詳細ページ・地域特化ページに集中させます。RealEstateListing Schemaの実装で物件情報を構造化し、地域ページ→物件一覧→物件詳細→問い合わせの内部リンク設計を整えます。",
                },
                {
                  industry: "整骨院・接骨院",
                  body: "「肩こり・腰痛・交通事故治療」などの症状別ページを個別に作成し、各ページのH1に症状名＋地域名を含めます。LocalBusiness SchemaにopeningHours・priceRange・geo情報を含めることでMEOとの連動効果も高まります。症状ページから施術内容ページ・料金ページへの内部リンクを整備し、予約ページへの一貫した導線を設けます。",
                },
                {
                  industry: "スクール・習い事",
                  body: "コース別・年齢別・地域別の個別ページを作成し、それぞれのページに対応するCourse SchemaまたはEducationalOrganization Schemaを実装します。「体験レッスン」「無料体験」ページへの内部リンクをサイト全体から配置し、CVへの最短導線を確保します。「〇〇教室 + 地域名」「子供 + 〇〇 + 地域名」のtitleタグが特に重要です。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装・改善フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              内部SEO 実装・改善フロー
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              内部SEO改善は優先度を明確にして進めることが重要です。以下のフローに沿って実施することで、最短で成果につながる改善を進められます。
            </p>
            <div className="max-w-4xl">
              {[
                {
                  num: "01",
                  title: "Google Search Consoleで現状把握",
                  body: "まずSearch Consoleの「カバレッジ」レポートでインデックスエラー・警告・除外ページを確認します。「検索パフォーマンス」では対策キーワードの順位・クリック率・表示回数を把握し、改善優先ページを特定します。",
                },
                {
                  num: "02",
                  title: "クロールツールでサイト全体を診断",
                  body: "Screaming FrogやSitebulbなどのクロールツールを使い、タイトル重複・メタ未設定・H1複数・broken linkなどを一括でリストアップします。修正すべき問題を数値で把握してから優先度をつけて着手します。",
                },
                {
                  num: "03",
                  title: "タイトルタグ・メタディスクリプションの一括最適化",
                  body: "クロールツールで抽出した重複・未設定ページのtitleとdescriptionを修正します。各ページの対策キーワードを前半に配置し、文字数（title: 30〜35文字、description: 120〜140文字）に収めます。修正後にSearch Consoleで再クロールをリクエストします。",
                },
                {
                  num: "04",
                  title: "見出し構造（H1〜H3）の整理",
                  body: "全ページのH1が1つであること、H1にページの主題・メインキーワードが含まれることを確認します。H2・H3の論理構造を整理し、見出しを流し読みしてもページの内容が把握できる構成に直します。",
                },
                {
                  num: "05",
                  title: "URL設計の見直しと301リダイレクト設定",
                  body: "日本語URLや過度に長いURLを英語・短い形式に変更する場合は、必ず旧URLから新URLへ301リダイレクトを設定します。.htaccessまたはNext.jsのredirects設定で一括管理します。Search Consoleのカバレッジを確認し、リダイレクトが正常に機能しているか検証します。",
                },
                {
                  num: "06",
                  title: "canonical・noindexの整備",
                  body: "パラメーターURLや重複ページにcanonicalタグを設定します。プライバシーポリシー・管理画面・タグアーカイブなどのSEO不要ページにはnoindexを設定します。設定後はSearch Consoleで意図したページがインデックスされているか確認します。",
                },
                {
                  num: "07",
                  title: "内部リンクの戦略的配置",
                  body: "重要ページ（サービスページ・コンバージョンページ）への内部リンクが十分に配置されているかを確認します。コンテンツページからサービスページへのCTA的な内部リンク、関連コンテンツ間の相互リンクを追加します。アンカーテキストはキーワードを含む説明的な文言に統一します。",
                },
                {
                  num: "08",
                  title: "構造化データの実装と検証",
                  body: "BreadcrumbList（全ページ）→FAQPage（FAQ掲載ページ）→Organization/LocalBusiness（トップページ）→Article（ブログページ）の順で優先実装します。実装後はGoogle Rich Results Testでエラーがないことを確認し、Search Consoleのリッチリザルトレポートで反映状況を監視します。",
                },
                {
                  num: "09",
                  title: "画像alt属性・ファイル名の最適化",
                  body: "クロールツールで画像alt属性が未設定のページを抽出し、画像の内容を説明するalt属性を追加します。画像ファイル名も「image001.jpg」ではなく「seo-audit-report.jpg」のように内容を表す名前に変更します。合わせてWebP形式への変換・サイズ圧縮で表示速度も改善します。",
                },
                {
                  num: "10",
                  title: "効果計測・定期的な再診断",
                  body: "改善実施から4〜6週間後にSearch Consoleでクリック数・表示回数・順位の変化を確認します。改善が見られないページは追加で内部リンク・コンテンツ充実を実施します。3ヶ月ごとに内部SEO全体の再診断を行い、新規ページ追加に合わせた継続的な管理を続けます。",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{step.num}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{step.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{step.body}</p>
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
              成果を見るための指標（KPI）
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              内部SEO改善の効果を正しく評価するために、以下のKPIをSearch ConsoleとGA4で継続的に計測することを推奨します。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  kpi: "インデックス数の推移",
                  where: "Google Search Console「カバレッジ」",
                  detail: "改善前後でインデックスされているページ数を比較します。noindexの誤設定解除・サイトマップ登録後にインデックス数が増加していれば改善が機能しています。除外ページが増えていないかも合わせて確認します。",
                },
                {
                  kpi: "検索クリック数・表示回数",
                  where: "Google Search Console「検索パフォーマンス」",
                  detail: "タイトルタグ・メタディスクリプション改善後に対策キーワードの表示回数とクリック数が変化しているかを確認します。クリック率（CTR）が上がっていれば、タイトル・メタの改善が効いている証拠です。",
                },
                {
                  kpi: "対策キーワードの掲載順位",
                  where: "Search Console「検索パフォーマンス > クエリ」",
                  detail: "改善前後で対策キーワードの平均掲載順位を比較します。内部SEO改善後2〜8週間で順位変動が見られることが多いです。11〜30位から上位10位への移動を目標に設定します。",
                },
                {
                  kpi: "リッチリザルトの表示状況",
                  where: "Search Console「検索での見え方 > リッチリザルト」",
                  detail: "構造化データ実装後にFAQ・パンくずなどのリッチリザルトが検索結果に表示されているかを確認します。エラー数がゼロになっていること・有効な結果数が増加していることをチェックします。",
                },
                {
                  kpi: "Core Web Vitals スコア",
                  where: "Search Console「Core Web Vitals」/ PageSpeed Insights",
                  detail: "LCP・INP・CLSの各スコアが「良好」判定になっているかを確認します。「改善が必要」「不良」ページを優先して技術修正し、全ページで良好判定を目指します。",
                },
                {
                  kpi: "クロールエラー数",
                  where: "Google Search Console「カバレッジ」/ クロールツール",
                  detail: "404エラー・リダイレクトエラー・サーバーエラーの件数をゼロに近づけることを目標にします。内部リンクが404ページを指していないかを定期チェックし、発見次第修正します。",
                },
                {
                  kpi: "ページ別セッション数・CV数",
                  where: "Google Analytics 4「ページとスクリーン」",
                  detail: "内部SEO改善後に対象ページへのオーガニック検索からのセッション数が増えているかを確認します。最終的にCVページ（問い合わせ・予約）へのコンバージョン数が増加しているかをGA4のコンバージョンレポートで計測します。",
                },
                {
                  kpi: "内部リンクのクリック数",
                  where: "GA4「イベント」/ Looker Studio",
                  detail: "新規に追加した内部リンクが実際にクリックされているかをGA4のイベント計測（link_click）で確認します。クリックされていない内部リンクは表示位置・アンカーテキストの見直しを検討します。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                  <p className="text-[11px] font-semibold mb-2" style={{ color: "#c4b89a" }}>確認場所: {item.where}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Checklist</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              内部SEO チェックリスト（15項目）
            </h2>
            <div className="grid md:grid-cols-2 gap-0 max-w-4xl">
              {[
                "全ページにユニークなtitleタグが設定されているか",
                "全ページにメタディスクリプションが設定されているか",
                "H1タグはページに1つだけか",
                "H2・H3の見出し構造が論理的に整理されているか",
                "URLが英語・シンプル・意味のある構成か",
                "canonicalタグが適切に設定されているか",
                "重複ページにnoindexが設定されているか",
                "画像すべてにalt属性が設定されているか",
                "内部リンクが本文中にも適切に配置されているか",
                "XMLサイトマップがSearch Consoleに登録されているか",
                "robots.txtが適切に設定されているか",
                "BreadcrumbList構造化データが実装されているか",
                "FAQPage構造化データが実装されているか",
                "Organization・LocalBusiness構造化データが設定されているか",
                "Open Graph（OGP）が全ページに設定されているか",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>□</span>
                  <span className="text-[14px]" style={{ color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスの内部SEO支援内容
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "SEO内部診断・現状評価", body: "Google Search Console・クロールツールを使って現在の内部SEO状況を診断します。クロールエラー・インデックス問題・タイトル重複・見出し構造の乱れを可視化し、優先度付きの改善リストを作成します。" },
                { title: "titleタグ・メタ最適化", body: "全ページのtitleタグとメタディスクリプションを対策キーワード・検索意図・クリック率改善の観点から最適化します。競合のタイトル分析をもとに、差別化できるタイトル設計を行います。" },
                { title: "見出し構造・URL設計", body: "既存ページの見出し構造（H1〜H3）を論理的に整理し、キーワードを自然に含む見出しに改善します。URL設計についても、シンプルで意味のある構造に統一します。" },
                { title: "内部リンク設計", body: "重要ページへの内部リンクを戦略的に設計・追加します。本文中リンク・関連ページリンク・パンくずリストの整備を通じて、クローラーの巡回効率とSEO評価の伝播を最適化します。" },
                { title: "構造化データ実装", body: "JSON-LD形式でBreadcrumbList・FAQPage・Article・Organization・LocalBusinessなどの構造化データを実装します。Next.js・WordPress・その他CMSに対応します。" },
                { title: "canonical・インデックス管理", body: "重複URLのcanonical設定・フィルタリングページのnoindex設定・サイトマップの整備を行い、クロールバジェットを重要なページに集中させます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="内部SEOについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="内部SEO対策のご相談・無料診断"
          body="現在のサイトの内部SEO状況を診断し、改善ポイントをご提案します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
