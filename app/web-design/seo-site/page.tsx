import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO特化サイト制作｜検索流入を最大化するWebサイト設計｜株式会社サイプレス",
  description:
    "SEO特化サイト制作の専門ガイド。キーワード設計・コンテンツ構造・Core Web Vitals・構造化データ・内部リンク設計まで、検索流入を最大化するサイト設計を解説。",
  keywords: ["SEO特化サイト", "SEOサイト制作", "SEOに強いホームページ", "検索上位サイト制作", "コンテンツSEOサイト"],
  openGraph: {
    title: "SEO特化サイト制作｜検索流入を最大化するWebサイト設計｜株式会社サイプレス",
    description: "SEO特化サイト制作のガイド。キーワード設計・コンテンツ構造・Core Web Vitals最適化まで解説。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/seo-site" },
};

const faqItems = [
  {
    q: "SEO特化サイトとは何ですか？通常のサイト制作と何が違いますか？",
    a: "SEO特化サイトとは、検索エンジンからの流入を主な集客チャネルとして設計されたWebサイトです。通常のサイト制作がデザイン・機能を中心とするのに対し、SEO特化サイトではキーワード設計・コンテンツ構造・内部リンク設計・Core Web Vitals・構造化データが最優先で設計されます。",
  },
  {
    q: "Next.jsとWordPressのどちらがSEOに有利ですか？",
    a: "両方ともSEOに対応できますが、特性が異なります。Next.jsはSSG/SSRにより超高速表示・Core Web Vitals最適化が得意です。WordPressはコンテンツの更新が容易でブログ運用に向いています。SEO特化サイトを自社で頻繁に更新したい場合はWordPress、エンジニアが対応できてパフォーマンスを最優先する場合はNext.jsをお勧めします。",
  },
  {
    q: "コンテンツはどのくらい必要ですか？",
    a: "対策キーワードの数とサイロ構造によりますが、SEO特化サイトとして機能するには最低でもトップページ・主要サービスページ5〜10ページ・コラム/ブログ記事10〜20本程度からスタートします。制作後も月次でコンテンツを追加する継続的な運用が成果を出すための前提です。",
  },
  {
    q: "リニューアルでSEO評価を引き継ぎながらSEO特化サイトに刷新できますか？",
    a: "はい可能です。既存サイトのURL設計・現在の順位・被リンクの状況を調査し、リニューアル設計に反映します。301リダイレクトの設定・URLマッピング・内部リンク更新によってSEO評価を新サイトに引き継ぎつつ、より強固なSEO設計を採用します。",
  },
  {
    q: "AIO（AI検索最適化）もSEO特化サイトに組み込めますか？",
    a: "はい。サイプレスではSEO・AIO・MEOを統合した設計をお勧めしています。SEO特化サイト制作にAIO対策（E-E-A-T強化・構造化データ・FAQ充実・llms.txt設置）を組み合わせることで、Google検索とAI検索の両方からの流入を獲得できます。",
  },
  {
    q: "サイトマップはどのように設定しますか？",
    a: "Next.jsではapp/sitemap.tsを使って動的なXMLサイトマップを自動生成できます。静的ページと動的ページ（ブログ・事例ページなど）を含めた完全なサイトマップを生成し、Google Search Consoleに送信することで新規ページの早期インデックスを促進します。",
  },
  {
    q: "canonical（カノニカル）タグはなぜ重要ですか？",
    a: "同じまたは類似したコンテンツが複数のURLに存在する場合（例：https/http、www/非www、パラメータ付きURL）、Googleがどのページを正規版として評価すべきか判断できなくなります。canonicalタグを全ページに正しく設定することで評価の分散を防ぎ、意図したURLの順位を守ります。",
  },
  {
    q: "内部リンク設計とは具体的にどのようなことをしますか？",
    a: "関連性の高いページ同士をリンクで繋ぎ、クロールしやすく評価が伝わりやすいサイト構造を作ります。具体的には、トップページ→カテゴリページ→記事・サービスページの3階層設計、関連記事・関連サービスのリンク、パンくずナビゲーション、フッターリンクの設計を行います。",
  },
  {
    q: "構造化データ（schema.org）は実際にSEOに効果がありますか？",
    a: "直接的な順位向上への影響は限定的ですが、リッチリザルト（FAQ・パンくず・レビュー星評価など）の表示によってクリック率（CTR）が向上します。またAI検索（ChatGPT・Perplexity・Geminiなど）への引用においてもサイトの信頼性・専門性を示すシグナルとして機能します。",
  },
  {
    q: "Core Web Vitalsのスコアが低いとSEOに影響しますか？",
    a: "はい、Googleは2021年のPage Experienceアップデート以降、Core Web Vitals（LCP・CLS・INP）をランキングシグナルとして使用しています。特にモバイルでのスコアが重要です。LCPを2.5秒以内、CLSを0.1以下、INPを200ms以下に維持することがSEO・UXの両面で重要です。",
  },
  {
    q: "E-E-A-Tとは何ですか？SEO特化サイトで具体的にどう対策しますか？",
    a: "E-E-A-TはExperience（経験）・Expertise（専門性）・Authoritativeness（権威性）・Trustworthiness（信頼性）の略で、Googleの品質評価基準です。具体的には著者プロフィールの明記・専門資格の表示・実績数値の掲載・会社情報の充実・SSL証明書・プライバシーポリシーの整備などで対策します。",
  },
  {
    q: "ブログ・コラム機能はSEO特化サイトに必要ですか？",
    a: "コンテンツSEOを本格的に行う場合は必要です。商品・サービスページだけでは対策できないロングテールキーワードに対応するため、定期的に記事を公開できるブログ・コラム機能を組み込みます。Next.js + MDX、またはWordPress（ヘッドレスCMS）などで構築します。",
  },
  {
    q: "URLの構造はどのように設計すれば良いですか？",
    a: "SEOに強いURLは①シンプルで意味が分かる、②キーワードを含む、③階層が明確（3階層以内を推奨）、④小文字・ハイフン区切り、⑤日本語を含まない、という原則があります。例：/service/seo-consulting/tokyo のような構造を推奨します。後から変更するとSEO評価をリセットするリスクがあるため、制作前に確定させることが最重要です。",
  },
  {
    q: "サイトのSSL化（HTTPS化）はSEOに必要ですか？",
    a: "はい、必須です。Googleは2014年からHTTPSをランキングシグナルとして使用しています。HTTPサイトはChromeで「保護されていない通信」と表示され、ユーザーの離脱率が上がります。制作時点でSSL証明書を適切に設定し、http→httpsへのリダイレクトを完全に実施します。",
  },
  {
    q: "ページの表示速度を上げるために何をしますか？",
    a: "next/imageによる画像の自動最適化（WebP変換・遅延読み込み）、next/fontによるフォント最適化、コード分割とDynamic Import、不要なJavaScriptの削除、CDN配信（Vercel Edge Network等）、キャッシュ設定の最適化を実施します。",
  },
  {
    q: "被リンク（外部リンク）獲得もサポートしてもらえますか？",
    a: "制作の範囲外ですが、被リンクを獲得しやすいサイト構造・コンテンツ設計（引用されやすいデータページ・ガイドコンテンツ）の設計は制作段階から意識します。リンク獲得施策（PR・パートナーサイト・ディレクトリ登録など）は別途SEOコンサルティングサービスとして対応します。",
  },
  {
    q: "MEO（Googleマップ対策）もSEO特化サイトと一緒に依頼できますか？",
    a: "はい。地域ビジネスのSEO特化サイトにはLocalBusiness構造化データ・対応エリアページ・Googleマップ埋め込み・店舗情報ページを標準で組み込みます。Googleビジネスプロフィールの最適化・口コミ獲得施策も合わせてご支援します。",
  },
  {
    q: "制作後のSEO管理・コンテンツ追加は自分でできますか？",
    a: "CMSとして管理画面（WordPress・Sanity・Contentfulなど）を組み込む場合は、コーディング不要でコンテンツを追加できます。Next.js静的サイトの場合もGitHub経由でMarkdownファイルを追加することで記事を公開できます。運用体制に合わせたCMS選定も含めてご提案します。",
  },
  {
    q: "競合サイト分析はしてもらえますか？",
    a: "はい。制作前にターゲットキーワードで上位表示している競合サイトのコンテンツ構成・ページ数・内部リンク設計・構造化データ実装状況を分析します。競合の強みと弱みを把握したうえで、上位表示を狙うための差別化コンテンツ戦略を設計します。",
  },
  {
    q: "SEO特化サイトの制作費用の目安を教えてください。",
    a: "シンプルなSEO特化サイト（10〜20ページ）で60〜120万円、本格的なコンテンツSEOサイト（50ページ以上・CMS付き）で150〜300万円が目安です。キーワード調査・サイト設計・構造化データ実装・Search Console設定を含みます。詳細はお見積りにてご案内します。",
  },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイト公開後のSEO支援" },
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の顔となるWebサイト" },
  { href: "/web-design/service-site", label: "サービスサイト・LP制作", desc: "CVを最大化するLP設計" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "CMS型SEOサイト構築" },
  { href: "/web-design/ec-site", label: "ECサイト制作", desc: "SEOを活かした通販サイト" },
  { href: "/web-design/blog-site", label: "ブログ・メディアサイト制作", desc: "コンテンツSEOのメディア構築" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "SEO評価を引き継いだ刷新" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "SEO特化サイトの料金目安" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "SEO対応会社の選定ポイント" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "SEOサイト制作の確認項目" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアのSEOサイト制作" },
  { href: "/area/osaka", label: "大阪のWeb制作", desc: "大阪エリアのSEOサイト制作" },
  { href: "/area/nagoya", label: "名古屋のWeb制作", desc: "名古屋エリアのSEOサイト制作" },
  { href: "/industry/restaurant", label: "飲食店のWeb制作", desc: "飲食店向けSEOサイト" },
  { href: "/industry/beauty", label: "美容室のWeb制作", desc: "美容室向けSEOサイト" },
  { href: "/industry/dental", label: "歯科医院のWeb制作", desc: "歯科向けSEOサイト" },
  { href: "/industry/construction", label: "建設・工務店のWeb制作", desc: "建設業向けSEOサイト" },
  { href: "/industry/law", label: "士業のWeb制作", desc: "弁護士・税理士向けSEOサイト" },
  { href: "/industry/real-estate", label: "不動産のWeb制作", desc: "不動産向けSEOサイト" },
  { href: "/industry/school", label: "学習塾のWeb制作", desc: "塾・スクール向けSEOサイト" },
  { href: "/industry/btob", label: "BtoBのWeb制作", desc: "BtoB企業向けSEOサイト" },
  { href: "/contact", label: "無料相談", desc: "SEO特化サイトのご相談" },
];

export default function SeoSitePage() {
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
              <Link href="/web-design" style={{ color: "#6B7280" }} className="hover:underline">Web制作</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SEO特化サイト制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SEO-Focused Site</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              SEO特化サイトとは、検索エンジンからの流入を主な集客チャネルとして設計されたWebサイトです。キーワード設計・コンテンツ構造・Core Web Vitals・構造化データ・内部リンク設計が最優先で組み込まれたサイトを制作します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              広告費をかけずに継続的な検索流入を獲得するWebサイトは、長期的な集客基盤として大きな資産となります。SEO・AIO・MEOを統合した設計で、Google検索とAI検索の両方からの認知・流入を最大化します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative flex items-center justify-center" style={{ height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="SEO特化サイト制作・コンテンツSEO・検索上位表示のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.5)" }} />
          <div className="relative text-center px-6">
            <p className="font-black" style={{ fontSize: "clamp(20px,3vw,36px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>検索流入を、長期的な資産へ</p>
          </div>
        </section>

        {/* SEO未対応サイトの課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SEO未対応サイトが失い続ける4つのビジネス機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "広告費に頼り続ける体質", b: "SEO対策のないサイトは広告を止めたとたん流入がゼロになります。SEOで自然検索から集客できる体制を作ることで、広告費に依存しない集客基盤を築けます。" },
                { t: "競合に検索流入を奪われ続ける", b: "ターゲットキーワードで競合が上位表示されている間、その検索需要は100%競合のものです。毎日の検索回数×365日×数年分の集客を失い続けています。" },
                { t: "内部SEOの欠如でインデックスされない", b: "title・description・canonical・構造化データが正しく設定されていないと、良いコンテンツを作っても検索エンジンに正しく評価されません。技術的SEOは集客の前提条件です。" },
                { t: "コンテンツがあっても流入ゼロ", b: "キーワード戦略なしに作られたコンテンツは誰も検索しないキーワードへの答えになっています。検索意図に沿ったコンテンツ設計なしには、記事を量産しても流入は増えません。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "SEO特化サイトと通常サイトの根本的な設計の違い",
                "検索流入を最大化するキーワード設計・サイロ構造の作り方",
                "Core Web Vitals・構造化データ・内部リンクの実装方法",
                "業種別のSEOサイト設計で押さえるべきポイント",
                "制作から検索流入獲得まで10ステップの実装フロー",
                "成果を測るために見るべき7つのSEO指標とその確認方法",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイトでよくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "制作後にSEO対策を後付けしようとしている",
                  body: "SEOは制作後に「追加する」ものではなく、設計段階から組み込む必要があります。URL設計・サイト構造・コンテンツ計画を後から変えようとするとSEO評価のリセットリスクが生じるため、制作前の設計が最重要です。",
                },
                {
                  title: "URL設計が後からでは変えられない",
                  body: "一度公開したURLを変更すると既存の被リンクや検索評価が失われます。/page?id=123のような動的URLや日本語URL、階層が深すぎるURL構造は制作後に修正コストが非常に高くなります。",
                },
                {
                  title: "ページ構成がSEOを考慮していない",
                  body: "「会社概要」「サービス」「お問い合わせ」だけの構成では、サービスに関連するキーワードを検索するユーザーを集客できません。キーワードグループごとにページを設計するサイロ構造の採用が必要です。",
                },
                {
                  title: "タイトル・メタ設定をCMSに任せきり",
                  body: "WordPressのデフォルト設定のままではtitleタグが「サイト名 | 投稿タイトル」の形式になり、キーワードが後方に配置されます。全ページのtitle・description・canonicalを手動で最適化する管理体制が必要です。",
                },
                {
                  title: "サイト構造がクロールされにくい",
                  body: "トップページから3クリック以上かかるページはGooglebotにクロールされにくくなります。孤立ページ（どこからもリンクされていないページ）やnoindexが誤設定されたページが放置されているケースが多くあります。",
                },
                {
                  title: "スピード・Core Web Vitalsが設計段階から考慮されていない",
                  body: "画像の最適化未実施・過大なJavaScriptライブラリの読み込み・Webフォントの非最適化はすべてLCPスコアを悪化させます。パフォーマンスは制作後に後付けで改善するよりも、設計段階から最適化する方がコストを抑えられます。",
                },
                {
                  title: "ブログ・コラム機能が後付けで設計が悪い",
                  body: "ブログを後付けで追加するとURLが/blog/ではなく/wp/やサブドメインになるケースがあり、ドメイン全体の評価に貢献しにくくなります。コンテンツSEOを想定する場合は制作時点でブログ機能のURL・カテゴリ構成を設計します。",
                },
                {
                  title: "内部リンク設計がない",
                  body: "記事を量産してもページ間に内部リンクがなければ評価は分散したままです。新しい記事を公開するたびに関連するページへリンクを追加するプロセスを設計しないと、サイトが大きくなるほどリンク切れ・孤立ページが増加します。",
                },
                {
                  title: "構造化データが実装されていない",
                  body: "FAQPage・BreadcrumbList・Organization・LocalBusinessなどの構造化データが未実装だと、リッチリザルトの機会を失うだけでなく、AI検索（ChatGPT・Perplexity）からの引用機会も減少します。",
                },
                {
                  title: "コンテンツ計画がない状態で制作している",
                  body: "どのキーワードで何本の記事を何ヶ月かけて公開するかを決めずに制作を開始すると、制作費を投じたサイトが完成しても集客が始まらない状況になります。コンテンツカレンダーは制作前に必ず策定します。",
                },
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

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のSEO特化サイト設計ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { industry: "飲食店", point: "地域×業態のロングテールSEOページ設計", body: "「渋谷 イタリアン ランチ」「新宿 個室 接待」など地域と業態・シーンを掛け合わせたロングテールキーワードページを設計します。Googleマップとの連携・LocalBusiness構造化データも必須です。" },
                { industry: "美容室", point: "メニュー×地域のSEOページ構成", body: "「表参道 縮毛矯正」「渋谷 ハイライト カラー」など施術メニューと地域を掛け合わせたページを量産する構成を設計します。スタイリスト紹介ページのSEO活用も効果的です。" },
                { industry: "歯科医院", point: "診療科目別SEOページ構成", body: "「インプラント 渋谷」「矯正歯科 新宿」「小児歯科 港区」など診療科目別のSEOページを設計します。医療広告ガイドラインに準拠した表現設計も同時に行います。" },
                { industry: "建設・工務店", point: "工事種別×エリアのSEOサイト", body: "「リフォーム 外壁塗装 東京」「注文住宅 埼玉 平屋」など工事種別とエリアを組み合わせたランディングページを複数設計します。施工事例ページのコンテンツSEO活用が特に効果的です。" },
                { industry: "士業（弁護士・税理士）", point: "相談種別×地域のSEOサイト", body: "「相続税 相談 新宿」「離婚 弁護士 無料相談 東京」など相談内容と地域を掛け合わせたページ設計が有効です。E-E-A-T（専門性・資格）の明示が信頼性向上に直結します。" },
                { industry: "不動産", point: "エリア×物件タイプのSEOページ", body: "「渋谷区 一人暮らし マンション」「港区 賃貸 ペット可」など地域と物件条件を掛け合わせたエリアページを大量に設計します。物件数が多い場合はSSG+ISRで高速表示を実現します。" },
                { industry: "学習塾・スクール", point: "科目×学年のSEOコンテンツ設計", body: "「中学受験 算数 対策 武蔵野市」「高校英語 個別指導 港区」など科目・学年・地域を組み合わせたページを設計します。合格実績・指導実績のコンテンツがE-E-A-T強化に有効です。" },
                { industry: "BtoB企業", point: "ソリューション別のSEOサイト", body: "「勤怠管理システム 中小企業」「人事評価ツール 導入事例」などソリューション別のランディングページとコンテンツページを設計します。ホワイトペーパーDLのCVポイント設計とセットで行います。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: "#c4b89a" }}>{item.industry}</p>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.point}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="md:col-span-2" style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 制作・実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイト制作・実装フロー
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "キーワード調査・SEO戦略策定", body: "ビジネス目標・ターゲット顧客・競合状況を踏まえ、Ahrefs・Google Search ConsoleなどのツールでSEOキーワードを洗い出します。月間検索ボリューム・競合性・自社との関連性を評価し、優先キーワードを決定してSEO戦略をドキュメント化します。" },
                { step: "サイト構造設計（URL・カテゴリ・サイロ）", body: "キーワードグループに基づいたピラーページとクラスターページのサイロ構造を設計します。3階層以内のURL設計・カテゴリ設計・ナビゲーション設計を確定し、制作開始前に全ページのURL一覧をスプレッドシートで管理します。" },
                { step: "ページ別キーワード配分", body: "各ページが狙うメインキーワード・サブキーワード・共起語を配分します。1ページ1キーワードを原則とし、共食い（カニバリゼーション）が起きないよう設計します。キーワードマップとしてドキュメント化します。" },
                { step: "metadata設計（全ページ）", body: "全ページのtitle・description・canonical・OGP・twitterカードをスプレッドシートで事前設計します。titleは検索意図を含む55文字以内、descriptionは検索意図に沿った120文字以内を目安に作成します。" },
                { step: "パンくずリスト設計", body: "ユーザーの現在地を示すパンくずナビゲーションを全ページに設計します。BreadcrumbList構造化データと合わせて実装することで、Googleのリッチリザルト表示と内部リンク評価の伝達に貢献します。" },
                { step: "内部リンク計画", body: "ページ間の内部リンクマップを設計します。トップページ→カテゴリページ→詳細ページの評価の流れを設計し、関連ページへのリンク・フッターリンク・サイドバーリンクの配置を決定します。コンテンツ追加時の内部リンク追加ルールも設計します。" },
                { step: "Next.jsによる実装（SSG/ISR）", body: "Next.jsのApp RouterでSSG（静的生成）またはISR（増分静的再生成）を採用し、最高速のページ表示を実現します。next/image・next/fontによる画像・フォント最適化、コード分割によるLCP改善を実施します。" },
                { step: "構造化データ実装（Organization・BreadcrumbList・FAQPage）", body: "ページタイプに応じたJSON-LD形式の構造化データを実装します。全ページ共通のOrganization・WebSite、各ページのBreadcrumbList、FAQを持つページにはFAQPage、ブログ記事にはArticle構造化データを実装します。" },
                { step: "Search Console連携・サイトマップ送信", body: "app/sitemap.tsで動的XMLサイトマップを生成し、Google Search Consoleに登録・送信します。インデックス状況・クロールエラー・Core Web Vitalsのモニタリング体制を構築します。Googleアナリティクス4との連携も設定します。" },
                { step: "コンテンツ追加計画", body: "制作完了後の運用を見据え、月次コンテンツカレンダーを作成します。どのキーワードで・何本の記事を・いつ公開するかを計画し、内部リンク追加のルールも合わせて整備します。コンテンツ運用支援サービスも対応可能です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための7つのSEO指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "オーガニック流入数", where: "Google Analytics 4 → 集客 → チャネル → Organic Search", body: "自然検索から何人のユーザーがサイトを訪問しているかを計測します。月次でトレンドを追い、施策実施前後の変化を定量的に評価します。" },
                { kpi: "主要キーワード順位", where: "Google Search Console → 検索パフォーマンス → クエリ", body: "狙っているキーワードの検索順位変動を追跡します。上位10位・3位以内のキーワード数を月次でモニタリングし、SEO施策の効果を測定します。" },
                { kpi: "インデックスページ数", where: "Google Search Console → インデックス → ページ", body: "何ページがGoogleにインデックスされているかを確認します。インデックス済みページの増加が検索流入増加の前提であり、インデックス対象外のページの原因分析も重要です。" },
                { kpi: "Core Web Vitals（LCP・CLS・INP）", where: "Google Search Console → エクスペリエンス → ウェブに関する主な指標", body: "LCP（2.5秒以内）・CLS（0.1以下）・INP（200ms以下）の達成状況をデバイス別に確認します。不合格のURLは優先的に改善します。" },
                { kpi: "クロールエラー数", where: "Google Search Console → インデックス → ページ → ページのインデックス登録ができなかった理由", body: "404エラー・リダイレクトエラー・noindex誤設定などのクロールエラーを定期確認します。エラーページが増加するとクロールバジェットが無駄に消費されます。" },
                { kpi: "内部リンク充足率", where: "Google Search Console → リンク → 内部リンク", body: "全ページに十分な内部リンクが設定されているかを確認します。内部リンクが0または少ないページ（孤立ページ）を発見したら、関連ページからのリンクを追加します。" },
                { kpi: "構造化データエラー数", where: "Google Search Console → エクスペリエンス → リッチリザルト", body: "実装した構造化データにエラーがないかを確認します。FAQPage・BreadcrumbListのエラーはリッチリザルトの非表示につながるため、実装後に必ずSearch Consoleとリッチリザルトテストで検証します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] mb-2" style={{ color: "#9CA3AF" }}>{item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 設計戦略 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Design Strategy</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイトの設計戦略
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "キーワード設計・トピッククラスター", body: "ビジネス目標から逆算したキーワード調査・グループ化・ページ割り当てを行います。ピラーページとクラスターページで構成されるサイロ構造を設計し、サイト全体の専門性をGoogleに示します。" },
                { title: "URL・サイト構造の設計", body: "SEOに強いURL設計（シンプル・キーワード含む・階層明確）とサイト構造（3階層以内・関連ページの内部リンク充実）を最初から設計します。後から変えにくいため制作前の設計が最重要です。" },
                { title: "Core Web Vitals・パフォーマンス最適化", body: "LCP・CLS・INP改善とLighthouse高スコアを目標にします。next/image・next/font・コード分割・CDNを活用して最速の表示を実現します。" },
                { title: "構造化データの網羅的実装", body: "BreadcrumbList・FAQPage・Organization・LocalBusiness・Article・WebSiteをページタイプに応じて実装します。リッチリザルト獲得とAIO対策に同時に貢献します。" },
                { title: "コンテンツ設計・内部リンク設計", body: "キーワードグループごとのコンテンツカレンダーと、ページ間の内部リンクマップを設計します。新規ページを追加するたびに既存ページとの相互リンクを設定する運用プロセスも設計します。" },
                { title: "E-E-A-T・AIO対策の組み込み", body: "著者情報・会社情報の明示、llms.txt設置、FAQの充実、一次情報の掲載など、Google評価とAI引用の両方に貢献するE-E-A-T設計をサイト全体に組み込みます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* なぜ重要か */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why It Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイト制作がなぜ重要か
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "広告費に依存しない集客基盤を作れる", body: "リスティング広告は予算が続く限りしか集客できません。SEO特化サイトは一度上位表示されれば、継続的に無料で集客し続ける資産となります。" },
                { title: "競合との差別化が可視化できる", body: "専門性の高いコンテンツをサイトに積み上げることで、業界内での権威性が確立されます。AI検索においても専門家として引用される機会が増えます。" },
                { title: "SEO・AIO・CVの三位一体設計が可能", body: "検索流入を獲得しながら、ページ内でコンバージョンも最大化する設計を同時に行います。集客と成約の両輪を1つのサイトで実現できます。" },
                { title: "制作コストがそのまま長期資産になる", body: "制作に投じたコストはサイトとして資産化されます。運用を継続するほどSEO評価が蓄積し、費用対効果は時間とともに高まります。" },
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

        {/* サイプレスのSEO特化サイト制作の強み */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Cypress</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのSEO特化サイト制作が選ばれる理由
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { title: "SEO設計から制作まで一貫対応", body: "キーワード調査・サイト構造設計・コンテンツ設計・実装・Search Console設定まで、SEO特化サイトに必要なすべてのプロセスをワンストップで対応します。外注先への連絡ロスが発生せず、SEO視点とデザイン視点が統合された設計が可能です。" },
                { title: "Next.jsによる最速パフォーマンス", body: "Core Web Vitalsに最適化されたNext.js（App Router・SSG・ISR）を採用し、LighthouseスコアPC/モバイルともに90以上を目標とします。パフォーマンスに妥協しないフロントエンド実装がSEO評価とUXの両方を高めます。" },
                { title: "AIO（AI検索）対策の組み込み", body: "ChatGPT・Perplexity・Geminiなど次世代AI検索エンジンへの対応を、SEO特化サイト制作段階から組み込みます。E-E-A-T設計・構造化データ・llms.txt・FAQ充実によりAI検索からの引用・流入も獲得できる設計を提供します。" },
                { title: "運用まで見据えたCMS設計", body: "クライアントが自分でコンテンツを更新・追加できるCMS設計（WordPress・Sanity・Contentful等）を採用します。「制作後は放置」ではなく、運用開始後に継続的にコンテンツを追加できる体制を制作段階から設計します。" },
                { title: "コンテンツカレンダーと運用サポート", body: "SEO特化サイトは公開後の継続的なコンテンツ追加が成果を左右します。制作完了時に月次コンテンツカレンダーを納品し、コンテンツ制作支援・SEO数値モニタリング・改善提案の継続サポートにも対応します。" },
                { title: "MEO・AIO・SEOの統合設計", body: "Google検索（SEO）・Googleマップ（MEO）・AI検索（AIO）の3チャネルを統合した設計を提案します。地域ビジネスには特にMEO×SEOの組み合わせが強力な集客基盤となります。複数チャネルからの流入を同時に最大化します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="md:col-span-2" style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SEO特化サイト制作の料金目安 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Pricing Guide</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイト制作の料金目安
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-8">
              {[
                { plan: "スタンダードSEOサイト", range: "60〜120万円", items: ["キーワード調査・サイト設計", "10〜20ページ制作", "metadata全ページ設定", "構造化データ実装", "Search Console設定"] },
                { plan: "コンテンツSEOサイト", range: "120〜200万円", items: ["本格的なサイロ構造設計", "CMS（WordPress等）構築", "30〜50ページ制作", "コンテンツカレンダー策定", "内部リンク設計・実装"] },
                { plan: "大規模SEOサイト", range: "200〜400万円", items: ["Next.js高速サイト構築", "SSG/ISR実装", "50ページ以上の大規模制作", "AIO・MEO統合設計", "継続運用サポート付き"] },
              ].map((item, i) => (
                <div key={i} style={{ border: "1px solid #E8E4DC", padding: "28px" }}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: "#9CA3AF" }}>{item.plan}</p>
                  <p className="font-black text-[22px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.range}</p>
                  <ul className="space-y-2">
                    {item.items.map((li, j) => (
                      <li key={j} className="flex gap-2 text-[13px]" style={{ color: "#374151" }}>
                        <span style={{ color: "#c4b89a" }}>→</span>{li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px]" style={{ color: "#9CA3AF" }}>※ページ数・機能・対応範囲によって変動します。詳細はお見積りにてご案内します。</p>
          </div>
        </section>

        {/* SEO特化サイトのよくある誤解 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Misconceptions</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO特化サイトについてよくある誤解
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "「記事を大量に書けばSEOは上がる」は誤り", body: "検索意図に合わない記事をどれだけ量産しても順位は上がりません。キーワード設計→検索意図の理解→適切なコンテンツ設計の順序が重要です。質の低いコンテンツはむしろサイト全体の評価を下げるリスクがあります。" },
                { title: "「SEO対策はリニューアル後でいい」は誤り", body: "URL設計・サイト構造・内部リンク設計は後から変えるとSEO評価のリセットリスクが生じます。SEO対策は制作前・制作中に組み込むことで最大の効果を発揮します。後付けSEOは設計のやり直しが必要になるケースがあります。" },
                { title: "「キーワードをたくさん詰め込むとSEOに強い」は誤り", body: "キーワードの過剰使用（キーワードスタッフィング）はGoogleのガイドライン違反です。自然な文章の中に適切な頻度でキーワードが含まれ、検索意図を満たすコンテンツ品質こそが評価されます。" },
                { title: "「SNS・広告でバズれば検索順位が上がる」は誤り", body: "SNSでのシェア数・広告のクリック数は直接的なSEOシグナルではありません。ただし、SNSでバズったコンテンツが外部サイトからリンクされれば被リンクとしてSEOに貢献します。SEOとSNSは補完関係にあります。" },
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

        <FaqSection items={faqItems} heading="SEO特化サイト制作についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEO特化サイト制作のご相談"
          body="検索流入を最大化するWebサイトの設計・制作をトータルでご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
