import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "東京都のSEO対策・MEO対策・Web制作｜葛飾区拠点の集客支援会社",
  description: "東京都のSEO対策・MEO対策・ホームページ制作。葛飾区・足立区・江戸川区・墨田区など東京23区全域の中小企業・個人事業主のWeb集客を支援。競争の激しい東京で成果を出す戦略を提供。",
  keywords: ["東京 SEO対策", "東京 MEO対策", "東京 ホームページ制作", "東京 Web制作", "東京23区 集客", "東京 中小企業 SEO", "東京 Googleマップ上位"],
  openGraph: {
    title: "東京都のSEO対策・MEO対策・Web制作｜葛飾区拠点の集客支援会社",
    description: "東京23区全域のSEO・MEO・Web制作を支援。葛飾区拠点の株式会社サイプレスが成果の出る集客戦略を提供します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/area/tokyo" },
};

const faqItems = [
  {
    q: "東京都内での対面相談は可能ですか？",
    a: "はい。葛飾区・足立区・江戸川区・墨田区・江東区など東京東部エリアへの訪問相談に対応しています。新宿・渋谷・品川など都心エリアはオンライン（Zoom・Google Meet）でのご相談をお勧めしていますが、ご要望があれば訪問も調整可能です。",
  },
  {
    q: "東京都でのMEO対策の効果はどのくらいで出ますか？",
    a: "競合が多い東京では継続的な施策が重要です。Googleビジネスプロフィールの完全最適化・口コミ獲得・定期投稿を組み合わせることで、通常3〜6か月で順位向上が見られます。競合の少ないエリア・業種では1〜2か月で変化が現れるケースもあります。",
  },
  {
    q: "東京都でのSEO対策費用の相場はどのくらいですか？",
    a: "コンサルティング・施策実行込みで月額3〜10万円程度が一般的な相場です。競合の激しいキーワード・ページ数が多い場合は費用が上がります。まずは無料相談で現状を確認し、最適なプランをご提案します。",
  },
  {
    q: "東京の中小企業でもSEOで上位表示できますか？",
    a: "はい。地域名+業種のローカルSEO・専門性の高いニッチキーワード・コンテンツSEOにより、大企業と競わずに集客できるキーワードを特定して対策します。東京では激戦キーワードを避けた戦略設計が特に重要です。",
  },
  {
    q: "東京都内のどのエリアに対応していますか？",
    a: "東京23区全域・多摩地域に対応しています。特に葛飾区・足立区・江戸川区・墨田区・江東区など東京東部エリアへの訪問サポートが得意です。西部・都心エリアはオンラインで対応します。",
  },
  {
    q: "AIO対策（AI検索対策）にも対応していますか？",
    a: "はい。ChatGPT・Gemini・Perplexityなどから「東京の〇〇業者」として引用されるためのE-E-A-T強化・構造化データ実装・FAQコンテンツ設計を行います。AI検索での存在感を高める施策を提供しています。",
  },
  {
    q: "東京都の飲食店・クリニック・士業に対応していますか？",
    a: "はい。飲食店・美容室・クリニック・整骨院・税理士・行政書士・不動産・工務店など東京都内のあらゆる業種に対応しています。業種別の集客ノウハウをもとに最適な施策を提案します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cypress-web.jp/" },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://cypress-web.jp/area" },
          { "@type": "ListItem", position: 3, name: "東京都", item: "https://cypress-web.jp/area/tokyo" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#9CA3AF", textDecoration: "none" }}>対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>東京都</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Tokyo Metropolitan</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              東京都のSEO・MEO対策<br />Web制作・集客支援
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              株式会社サイプレスは東京都葛飾区を拠点に、東京都23区・多摩地域の中小企業・個人事業主のSEO対策・MEO対策・Web制作を支援します。競争の激しい東京でも、正しい戦略と継続的な施策で確実に成果を出します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              特に葛飾区・足立区・江戸川区・墨田区・江東区など東京東部エリアへの訪問対応が得意です。クリニック・飲食店・美容室・士業・工務店など各業種に対応したWeb集客戦略を提供しています。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_13_52.png"
            alt="東京のビジネスチームミーティング"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        {/* Section 1: ビジネス環境と集客課題 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Tokyo Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              東京都のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "日本最大の競合環境", b: "東京都は日本最大の市場である一方、最も激しい競合環境でもあります。「渋谷 美容室」「新宿 居酒屋」など都心の主要キーワードは上位表示が非常に困難です。しかし、正しい戦略—地域絞り・ニッチ特化・コンテンツ深化—により、中小企業でも確実に集客できるポジションが存在します。" },
                { n: "02", t: "エリアによって大きく異なる競合レベル", b: "渋谷・新宿・六本木などの都心エリアと、葛飾区・足立区・江戸川区などの下町・郊外エリアでは、MEO・SEOの競合レベルが大きく異なります。東部エリアは競合が少なく、同じ施策費用でより大きな成果が期待できます。" },
                { n: "03", t: "スマートフォンからの「近くで探す」検索の増加", b: "東京都内の消費者はスマートフォンで「近くの〇〇」「〇〇駅 〇〇」と検索して来店先を決めるケースが急増しています。GoogleマップのMEO対策は来店型ビジネスにとって最も重要な集客チャネルのひとつです。" },
                { n: "04", t: "AI検索（ChatGPT・Gemini）の台頭", b: "東京の消費者はChatGPT・Geminiで「東京でおすすめの〇〇」を調べるケースが増えています。AI検索で引用されるための情報設計（AIO対策）は、東京の競合が激しいマーケットでの新たな差別化戦略となっています。" },
                { n: "05", t: "インバウンド集客の拡大", b: "東京を訪れる外国人観光客は年々増加しており、飲食・観光・小売・ホテルなど多くの業種でインバウンド集客が重要性を増しています。英語・中国語・韓国語対応のGBP設定・多言語SEOへの対応支援も提供しています。" },
                { n: "06", t: "中小企業・個人事業主のデジタル化の遅れ", b: "東京都内でもWebマーケティングを十分に活用できていない中小企業・個人事業主は多く存在します。ホームページの未整備・Googleビジネスプロフィールの放置・SNS未活用など、着手するだけで成果が出るケースは少なくありません。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: SEO・MEO対策の特徴 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>SEO / MEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              東京都でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              東京では「どのキーワードで上位を狙うか」の戦略設計が最も重要です。激戦キーワードを避けながら、確実に上位を取れる地域特化・ニッチキーワードを特定し、成果を積み上げます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "東部エリア（葛飾・足立・江戸川・墨田）の狙い目キーワード例", b: "「亀有 美容室」「北千住 居酒屋」「葛西 歯科」「錦糸町 カフェ」「新小岩 整体」——これらのキーワードは一定の検索需要があり、かつ都心エリアと比較して競合が少ないため効率的に上位表示を狙えます。" },
                { n: "02", t: "都心エリアでの差別化戦略", b: "渋谷・新宿・池袋など競合の激しいエリアでは、地域名+業種の組み合わせだけでなく、専門性・ニッチ特化・独自のポジションを明確にしたコンテンツSEOで差別化します。「汎用キーワード」ではなく「買う気のあるユーザー」が検索するロングテールキーワードを優先します。" },
                { n: "03", t: "MEO（Googleマップ）の競合レベル", b: "東京都内のMEO競合は23区によって大きく異なります。渋谷・新宿・池袋は激戦ですが、葛飾区・足立区・江戸川区・墨田区はまだ上位を取りやすいエリアが多数あります。エリアと業種を組み合わせた競合分析を行い、最も成果が出やすい施策から実施します。" },
                { n: "04", t: "AIO対策（AI検索対策）の重要性", b: "東京の企業・消費者はChatGPT・Gemini・Perplexityを積極的に活用しており、AI検索での上位引用がブランド認知・集客に直結する時代が到来しています。E-E-A-T強化・構造化データ・FAQ設計・著者情報の整備でAI検索対策を実施します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: サービス */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Our Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              東京都でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "東京都内のMEO対策（Googleマップ上位表示）", b: "「○○区 美容室」「○○駅 居酒屋」などGoogleマップでの上位表示を目指します。Googleビジネスプロフィールの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。東京は競合が多いため、継続的な施策が特に重要です。" },
                { n: "02", t: "東京の中小企業向けローカルSEO", b: "地域名+業種のローカルSEO戦略を設計します。「渋谷 〇〇」「○○区 〇〇」などの地域キーワードを軸に、コンテンツSEO・内部最適化・被リンク獲得まで一貫して実施します。大企業と競わない「勝てるキーワード」を特定します。" },
                { n: "03", t: "東京都内の業種別ホームページ・LP制作", b: "飲食店・美容室・クリニック・士業・不動産・コンサルタントなど東京の各業種に特化したホームページ制作を行います。Next.js+TypeScriptによる高速・SEO対応サイトを制作し、集客からCV改善まで一貫支援します。" },
                { n: "04", t: "AIO対策・AI検索最適化", b: "ChatGPT・Geminiなどから「東京の〇〇業者」として引用されるための情報設計を行います。E-E-A-T強化・構造化データ・FAQ・著者情報・専門性の高いコンテンツでAI検索での存在感を高めます。" },
                { n: "05", t: "SNS運用・デジタルマーケティング支援", b: "Instagram・X・LINE公式アカウントの運用代行・コンサルティングを提供します。東京の消費者行動に合わせたコンテンツ設計で、フォロワー増加・来店・問い合わせへの転換を最大化します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: 主要エリア・地域特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Area Breakdown</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              東京都の主要エリアと地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "葛飾区・足立区・江戸川区", desc: "サイプレスの強みエリア。競合が比較的少なく、MEO・SEOの費用対効果が高い。訪問相談・対面サポートが可能で、地域密着の集客支援を提供できます。" },
                { area: "墨田区・江東区", desc: "錦糸町・押上（スカイツリー）・亀戸・豊洲など観光×ビジネスの複合エリア。インバウンド集客と地域住民向け集客の両立が求められます。" },
                { area: "渋谷区・港区・中央区", desc: "競合が最も激しいエリア。汎用キーワードは大企業が占領しているため、専門特化・ニッチ戦略・AIO対策による差別化が求められます。" },
                { area: "新宿区・豊島区", desc: "繁華街・商業集積が強く集客需要は高い。MEO競合も多いため、写真クオリティ・口コミ数・プロフィール完成度による差別化が重要です。" },
                { area: "世田谷区・杉並区・練馬区", desc: "住宅密集エリアで生活密着型ビジネスが多い。ファミリー層・主婦層へのアプローチが有効で、地域名+業種のMEO・ローカルSEOが効果的です。" },
                { area: "多摩地域（八王子・立川など）", desc: "都心と比べて競合が少なく、MEO・SEOで上位を取りやすいエリアが多い。リモートでの施策実行が中心ですが、効率よく成果を出せます。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: 集客チャネル */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Channel Mix</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              東京都のエリア別おすすめ集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "来店型に最重要", desc: "「近くの〇〇」検索が多い東京では最重要チャネル。エリアごとの競合レベルに応じた施策設計で、最短での上位表示を目指す。" },
                { label: "ローカルSEO", tag: "中長期で効く", desc: "東京特化の地域名+業種キーワードで検索上位表示。競合の少ないキーワードを優先し、コンテンツSEOで着実にトラフィックを積み上げる。" },
                { label: "AIO対策", tag: "次世代集客", desc: "ChatGPT・Geminiで「東京の〇〇おすすめ」と聞かれたとき引用されるための情報設計。東京のリテラシーの高い消費者層への有効打。" },
                { label: "Web制作", tag: "集客の核", desc: "高品質なホームページがすべての集客の受け皿となる。SEO・MEO・SNSからの流入を確実に問い合わせ・予約・来店に変換するCV設計が重要。" },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>{item.label}</p>
                    <span style={{ fontSize: "11px", background: "#f8f6f2", color: "#c4b89a", border: "1px solid #E8E4DC", borderRadius: "4px", padding: "2px 8px", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{item.tag}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: 依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに東京都の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "東京東部エリアは訪問サポート対応", b: "葛飾区・足立区・江戸川区・墨田区・江東区への訪問相談・定期サポートが可能です。遠隔対応だけでなく、対面でのヒアリング・課題発見ができるのがサイプレスの強みです。" },
                { n: "02", t: "競合分析で「勝てるキーワード」を特定", b: "東京の激戦キーワードを避け、中小企業でも上位を取れるキーワードを特定して施策を実行します。費用対効果を最優先にした戦略設計で、限られた予算で最大の成果を目指します。" },
                { n: "03", t: "MEO・SEO・AIO・Web制作をワンストップで", b: "東京での集客に必要なMEO・SEO・AIO対策・ホームページ制作・SNS運用をすべてサイプレスに依頼できます。複数業者に分散するコスト・手間を省き、一貫した戦略を実行します。" },
                { n: "04", t: "業種別の深い知見と実績", b: "飲食店・美容室・クリニック・士業・不動産・コンサルタントなど、東京都内の各業種のWeb集客に特化した知見を持っています。業種別のKPI設定・施策設計で成果を最大化します。" },
              ].map((item) => (
                <div key={item.n}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", marginBottom: "12px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "17px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="東京都のSEO・MEO対策に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="東京都のWeb集客、まずは無料相談から"
          body="東京都のSEO対策・MEO対策・ホームページ制作のご相談は無料です。葛飾区・足立区・江戸川区・墨田区への訪問相談、都内全域のオンライン相談に対応しています。"
        />
      </main>
      <Footer />
    </>
  );
}
