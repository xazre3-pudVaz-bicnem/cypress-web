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
    body: "検索結果に表示されるページのタイトルです。対策キーワードを前半に配置し、30〜35文字以内に収めます。「ページの内容 + 差別化ポイント + サイト名」の形式が効果的です。全ページで異なる固有のタイトルを設定することが必須です。同じタイトルの重複はSEO評価を下げます。",
  },
  {
    title: "メタディスクリプション",
    importance: "重要",
    body: "検索結果のタイトル下に表示される説明文（120〜140文字が目安）です。直接の順位要因ではありませんが、クリック率（CTR）に大きく影響します。ページの内容を簡潔に伝え、検索意図に応えるキーワードを自然に含め、行動を促すコピーにします。",
  },
  {
    title: "見出しタグ（H1〜H3）",
    importance: "重要",
    body: "ページの情報構造を示す見出しです。H1はページに1つのみ、メインキーワードを含む形で設定します。H2・H3は内容を論理的に整理し、関連キーワードを自然に含めます。スクリーンリーダーへの対応としてもアクセシビリティに貢献します。",
  },
  {
    title: "URL設計・パーマリンク",
    importance: "重要",
    body: "URLはシンプルで意味のある構造にします。日本語よりも英語（半角英数字）でのURL設定を推奨します。長すぎず、階層構造を反映したURLが理想的です。ページの内容が変わっても安易にURLを変更しないことも重要です。",
  },
  {
    title: "内部リンク構造",
    importance: "重要",
    body: "サイト内のページ間リンクです。クローラーがサイト全体を効率的に回れるよう、論理的なリンク構造を設計します。重要なページには多くの内部リンクが集まるよう設計することで、そのページのSEO評価を高められます。アンカーテキストには関連キーワードを使います。",
  },
  {
    title: "画像最適化（alt属性）",
    importance: "中重要",
    body: "画像には必ずalt属性（代替テキスト）を設定します。検索エンジンは画像の内容を直接理解できないため、altテキストから画像の内容を判断します。また、画像ファイルの容量最適化（WebP形式・圧縮）で表示速度も改善します。",
  },
  {
    title: "構造化データ（JSON-LD）",
    importance: "重要",
    body: "Schema.orgの構造化データをJSON-LD形式で実装することで、検索エンジンがページの内容を正確に理解できるようになります。FAQPage・BreadcrumbList・Article・LocalBusinessなどを適切に設定することで、リッチリザルト獲得可能性とAIO対策にも効果的です。",
  },
  {
    title: "canonicalタグ・noindex設定",
    importance: "重要",
    body: "URLの正規化（canonical）設定で、同一コンテンツが複数URLで重複しないようにします。管理画面・検索結果ページなど、クロールされるべきでないページにはnoindexを設定します。適切な設定でクロールバジェットを重要なページに集中できます。",
  },
  {
    title: "サイトマップ（XML）",
    importance: "中重要",
    body: "クローラーに対してサイト内の全ページを示すXMLサイトマップをGoogle Search Consoleに登録します。新しいページや更新ページを素早くインデックスさせるためにも重要です。動的サイトでは自動更新の仕組みを導入します。",
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
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/guide/how-to-choose-seo-company", label: "SEO会社の選び方", desc: "外注先選びのポイント" },
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
          <Image src="/ChatGPT Image 2026年6月14日 19_12_19.png" alt="内部SEO最適化・HTMLソースコード分析" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 内部SEOの重要性 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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
                    <span className="text-[11px] font-semibold px-2 py-0.5" style={{ background: "#F9F8F5", color: "#6B7280", border: "1px solid #E8E4DC" }}>
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

        {/* チェックリスト */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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
        <section className="py-20" style={{ background: "#F9F8F5" }}>
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

        <FaqSection items={faqItems} heading="内部SEOについてよくある質問" bgColor="#FFFFFF" />
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
