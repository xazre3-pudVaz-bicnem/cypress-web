import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "内部SEO対策とは｜タイトルタグ・構造化・内部リンク最適化｜株式会社サイプレス",
  description:
    "内部SEO対策の重要施策を網羅的に解説。タイトルタグ・メタディスクリプション・見出し構造・内部リンク・URL設計・構造化データなど、検索上位表示の土台となる施策をわかりやすく説明します。",
  keywords: ["内部SEO", "内部対策", "タイトルタグ最適化", "メタディスクリプション", "見出し構造", "内部リンク"],
  openGraph: {
    title: "内部SEO対策とは｜タイトルタグ・構造化・内部リンク最適化｜株式会社サイプレス",
    description:
      "内部SEO対策の重要施策を網羅的に解説。タイトルタグ・メタディスクリプション・見出し構造・内部リンク・URL設計・構造化データなど、検索上位表示の土台となる施策をわかりやすく説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/internal-seo" },
};

const measures = [
  {
    title: "タイトルタグの最適化",
    body: "ページ内容を端的に表す35文字以内のタイトルを設定します。狙うキーワードをタイトルの前半に含め、ブランド名は末尾に付加するのが基本です。各ページに固有のタイトルを設定し、重複は厳禁です。検索結果のクリック率（CTR）にも直結するため、キーワードを含めつつユーザーが思わずクリックしたくなる表現を意識します。",
  },
  {
    title: "メタディスクリプション最適化",
    body: "120文字以内でページの要点と価値を伝える説明文を設定します。直接的なランキング要因ではありませんが、検索結果のスニペットに表示されCTRに影響します。キーワードを自然に含めつつ、ユーザーの検索意図に応える内容であることを示す文章にします。全ページに一意の内容を設定し、自動生成・重複は避けます。",
  },
  {
    title: "見出し構造（H1/H2/H3）の整理",
    body: "H1は1ページに1つだけ、ページの主テーマを表すキーワードを含めて設定します。H2以降で内容を階層的に整理することで、検索エンジンがページ構造を正確に把握できます。また見出しは目次として機能し、ユーザーの可読性も高めます。Googleの強調スニペット（0位）獲得にも見出し構造の整備が効果的です。",
  },
  {
    title: "内部リンク設計",
    body: "関連性の高いページ同士を内部リンクで結ぶことで、クロールを効率化し、リンクエクイティ（SEO評価）をサイト内に適切に分配します。重要なページへのリンクが集まるよう設計することで、そのページの評価が高まります。アンカーテキストにはリンク先の内容を示すキーワードを含めることが重要です。",
  },
  {
    title: "URL設計・正規化",
    body: "URLは短く・意味のある英数字で構成し、ページの内容が一見してわかる構造にします。パラメータの多用・大文字小文字の混在・末尾スラッシュの不統一などは重複コンテンツのリスクを生みます。canonical属性を正しく設定し、Googleが評価すべき正規URLを明示することが重要です。",
  },
  {
    title: "パンくずリスト設置",
    body: "ページの階層構造をナビゲーションとして示すパンくずリストは、ユーザビリティの向上に加え、検索結果にパンくずが表示されることでCTRを高める効果があります。BreadcrumbList構造化データと組み合わせることで、Googleが階層を正確に理解しやすくなります。",
  },
  {
    title: "構造化データ実装",
    body: "Schema.orgに基づく構造化データをJSON-LD形式で実装することで、Googleがページの意味を機械的に理解しやすくなります。LocalBusiness・FAQ・Article・BreadcrumbListなど適切なスキーマを設定すると、リッチリザルト（検索結果の強化表示）の対象となり、視認性とCTRが向上します。",
  },
  {
    title: "ページ表示速度改善",
    body: "Googleのランキング要因であるCore Web Vitals（LCP・CLS・FID）を最適化します。画像の圧縮・WebP変換・遅延読み込み・JavaScriptの非同期化・キャッシュ設定などが主な施策です。モバイルでの表示速度は特に重要視されており、PageSpeed Insightsで定期的にスコアを確認することをお勧めします。",
  },
  {
    title: "モバイル対応（レスポンシブデザイン）",
    body: "Googleはモバイルファーストインデックスを採用しており、スマートフォン表示のサイト品質を主な評価基準としています。レスポンシブデザインによる適切な表示はもちろん、タップ領域の確保・フォントサイズ・余白設計など、スマートフォンでの操作性・可読性を最優先に設計します。",
  },
  {
    title: "重複コンテンツ対策",
    body: "同一・類似コンテンツが複数URLで存在すると、Googleがどのページを評価すべきか判断できず、評価が分散します。canonical属性での正規化・noindex指定・301リダイレクト設定を組み合わせて、インデックスすべきページを適切にコントロールします。ECサイトや大規模サイトで特に重要な施策です。",
  },
  {
    title: "画像のalt属性設定",
    body: "img要素のalt属性には画像の内容を説明するテキストを設定します。これにより画像の内容を検索エンジンが理解でき、画像検索からの流入も期待できます。また視覚障害のあるユーザーがスクリーンリーダーを使用する際の代替情報となり、アクセシビリティ向上にも貢献します。装飾目的の画像はalt=\"\"（空）にします。",
  },
];

const faqItems = [
  {
    q: "内部SEOはどのくらいの頻度で見直すべきですか？",
    a: "Googleのアルゴリズム更新は年に数回の大きなアップデートがありますが、内部SEOの基本的な設定（タイトル・メタ・見出し・URL）は一度適切に設定すれば頻繁な変更は不要です。ただし新しいページを追加するたびに内部リンク設計を見直し、サイト構造が最適な状態を保つよう定期的に確認することをお勧めします。",
  },
  {
    q: "タイトルタグを変更すると順位が下がりますか？",
    a: "タイトルタグを変更すると一時的に順位が変動することがあります。より適切なキーワードと内容に最適化することで中長期的には改善しますが、頻繁な変更はGoogleに不安定なシグナルを送ることになります。変更する際は根拠のある改善を行い、変更後はSearch Consoleで順位変動を確認してください。",
  },
  {
    q: "H1タグは1ページに複数設置しても大丈夫ですか？",
    a: "HTML5の仕様上は複数のH1が許容されていますが、SEOの観点からは1ページに1つのH1を設定することが推奨されます。Googleもページの主テーマを示すH1は1つにすべきと明示しており、H2以降で階層的に内容を構造化するのがベストプラクティスです。",
  },
  {
    q: "構造化データを実装するとどんな効果がありますか？",
    a: "構造化データを実装すると、Googleの検索結果にFAQの展開表示・レビューの星表示・パンくずの表示など「リッチリザルト」が表示される可能性があります。これにより検索結果での視認性が高まり、クリック率（CTR）の向上が期待できます。直接的な順位向上効果は限定的ですが、流入数の増加につながる重要な施策です。",
  },
  {
    q: "古いサイトのURLを変更しても大丈夫ですか？",
    a: "既存のURLを変更する場合は必ず301リダイレクト（恒久的転送）を設定してください。設定なしにURLを変更すると、旧URLへのリンク評価が失われ、検索順位が大きく下落します。またサイトマップの更新・内部リンクの修正・Search ConsoleへのURL変更通知も忘れずに行う必要があります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったページ制作" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "速度・クロール・構造化データ" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/web-design", label: "Webデザイン", desc: "SEOに強いサイト制作" },
];

export default function InternalSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>内部SEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Internal SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}>
              内部SEO対策
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              内部SEOとは、Webサイト内部の構造・タグ・コード・リンク設計などを最適化することで、検索エンジンがサイトを正確に理解・評価できる状態にする施策です。コンテンツSEOや被リンク対策を進める前に整備すべき、SEO全体の土台となる領域です。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="アクセス解析ダッシュボードを確認している様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.15)" }} />
        </section>

        {/* 内部SEOとは */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>内部SEOとは</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                内部SEO（On-Page SEO）とは、自社が管理するWebサイト内部のあらゆる要素を最適化することで、Googleなどの検索エンジンがページを正確に理解・評価できるよう整備する取り組みです。タイトルタグ・メタディスクリプション・見出し構造・URL・内部リンクといったHTML要素から、ページ速度・モバイル対応・構造化データまで幅広い施策が含まれます。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                内部SEOが不十分なサイトは、どれだけ良質なコンテンツや被リンクがあっても、検索エンジンが正しく評価できず、本来の評価を受けられません。逆に内部SEOが適切に整備されていれば、検索エンジンのクロール効率が上がり、コンテンツが正確にインデックスされることで、施策全体の効果が最大化されます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                コントロールできる範囲が広く即効性もあることから、SEO施策を始める際はまず内部SEOの整備から着手することが鉄則です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部SEOの重要施策 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#9CA3AF" }}>Checklist</p>
              <h2 className="font-black text-[22px] md:text-[26px]" style={{ color: "#0F172A" }}>内部SEOの重要施策</h2>
            </div>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* なぜ内部SEOが先なのか */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>なぜ内部SEOが先なのか</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                「コンテンツを増やせばSEOは改善する」という認識は半分正しく、半分誤りです。どれだけ有益なコンテンツを制作しても、タイトルタグが不適切・内部リンクが不整備・速度が遅いといった内部SEOの問題があれば、Googleはそのページを正当に評価できません。コンテンツへの投資が内部SEOの不備によって無駄になるリスクがあります。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                また、被リンク対策（外部SEO）も同様です。高品質な被リンクを獲得しても、クロールされていないページや重複コンテンツが多い状態では効果が分散します。家を建てる前に基礎工事をするように、SEO施策は内部の整備から始めるのが原則です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                内部SEOは「一度整備すれば維持コストが低い」という特徴もあります。新規コンテンツを継続的に追加する際も、内部SEOの設計が確立されていれば自動的に品質が担保されます。長期的なSEO戦略の視点からも、初期投資として最優先に取り組むべき施策です。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスの内部SEO支援 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#9CA3AF" }}>Our Service</p>
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>サイプレスの内部SEO支援</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                株式会社サイプレスでは、既存サイトの内部SEO診断から改善実装まで一貫してサポートします。まず全ページのタイトル・メタ・見出し・内部リンク・URL・速度を網羅的に調査し、優先度付きの改善レポートを作成します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                WordPress・Shopify・Next.jsなど主要CMSに対応しており、構造化データの実装・Core Web Vitalsの改善・canonical設定・リダイレクト整備など技術的な施策も対応可能です。新規サイト制作の場合は、設計段階からSEOに最適化された構造を組み込みます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                月次のSearch Console・Analytics分析レポートにより、施策効果の可視化と継続的な改善サイクルを実現します。内部SEOの整備から始め、コンテンツSEO・テクニカルSEOへと段階的に強化するロードマップをご提案します。
              </p>
            </div>
          </div>
        </section>

        {/* 2-col: text + image */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-black text-[22px] mb-5" style={{ color: "#0F172A" }}>サイプレスが提案する内部SEO改善の進め方</h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  まず既存サイトの全ページを診断し、タイトル・メタ・見出し・内部リンク・URL・速度など優先度の高い改善項目をリストアップします。次に、実装コストと効果のバランスを見ながら段階的に改善を進めます。Search ConsoleとAnalyticsのデータで効果を可視化しながら、継続的なPDCAサイクルで内部SEOの品質を高め続けます。
                </p>
              </div>
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 00_32_58.png"
                  alt="2名がノートパソコンと資料で打ち合わせをしている様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="内部SEOについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="内部SEO対策のご相談"
          body="現在のサイトの内部SEO診断から改善実装まで、サイプレスが一貫してサポートします。まずは無料でサイト状況をヒアリングします。"
        />
      </main>
      <Footer />
    </>
  );
}
