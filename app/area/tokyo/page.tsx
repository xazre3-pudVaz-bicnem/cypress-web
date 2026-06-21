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
  keywords: ["東京 SEO対策", "東京 MEO対策", "東京 ホームページ制作", "東京 Web制作", "東京23区 集客", "東京 中小企業 SEO", "東京 Googleマップ上位", "葛飾区 SEO", "東京東部 MEO"],
  openGraph: {
    title: "東京都のSEO対策・MEO対策・Web制作｜葛飾区拠点の集客支援会社",
    description: "東京23区全域のSEO・MEO・Web制作を支援。葛飾区拠点の株式会社サイプレスが成果の出る集客戦略を提供します。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/tokyo" },
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
  {
    q: "渋谷・新宿でのMEO対策は競合が激しいですか？勝てますか？",
    a: "渋谷・新宿・池袋は東京で最も競合が激しいエリアです。汎用キーワードでの上位表示は非常に困難ですが、エリア絞り込み（例：「渋谷区恵比寿 美容室」）や専門特化・独自ポジションの明確化・コンテンツSEOにより中小店舗でも集客できるポジションが存在します。競合分析の上で「勝てるキーワード」を特定してから施策を実施します。",
  },
  {
    q: "東京東部（葛飾・足立・江戸川）と都心では集客の費用対効果に差がありますか？",
    a: "大きな差があります。葛飾区・足立区・江戸川区などの東部エリアはMEO・SEO競合が少なく、同じ施策費用で都心の数倍の成果が期待できます。都心は集客単価は高いですが、より多くの時間と費用が必要です。予算に合わせたエリア×施策設計をご提案します。",
  },
  {
    q: "多摩地区（立川・八王子・町田）にも対応できますか？",
    a: "はい。立川・八王子・町田・調布・府中・武蔵野など多摩地区全域にオンラインで対応しています。多摩地区は23区都心部と比べてMEO競合が少ないエリアが多く、飲食・医療・美容など生活密着型ビジネスは早期参入で大きな成果が期待できます。",
  },
  {
    q: "東京都内での訪問相談はどのエリアまで対応していますか？",
    a: "葛飾区を拠点としているため、葛飾区・足立区・江戸川区・墨田区・江東区・荒川区・台東区など東部エリアへの訪問相談が得意です。それ以外のエリアへの訪問もご要望に応じて調整可能ですが、まずはZoomでの初回相談をお勧めしています。",
  },
  {
    q: "東京都全域の集客施策を一社で一括対応してもらえますか？",
    a: "はい。葛飾区・足立区など東部エリアから渋谷・新宿などの都心、多摩地区まで東京都全域の集客施策を一括でお任せいただけます。MEO・SEO・AIO・Web制作・SNS運用をワンストップで対応し、一貫した戦略で東京全域の集客を最大化します。",
  },
  {
    q: "東京都のホームページ制作にかかる費用と期間を教えてください。",
    a: "小規模サイト（5〜10ページ）は20〜40万円・制作期間1〜2か月が目安です。中規模コーポレートサイトは40〜80万円・2〜3か月、大規模ECサイト・ブランドサイトはそれ以上になります。SEO・MEO対策とセットでのご依頼は費用対効果が高くなります。無料相談で詳細をお聞きした上でお見積もりします。",
  },
  {
    q: "東京都内でインバウンド（外国人観光客）向けの集客にも対応できますか？",
    a: "はい。英語・中国語・韓国語対応のGoogleビジネスプロフィール設定・多言語SEO・多言語ホームページ制作に対応しています。浅草・上野・秋葉原・池袋など外国人観光客が多いエリアのビジネスへのインバウンド集客支援を提供しています。",
  },
  {
    q: "東京都の工務店・リフォーム会社へのSEO・MEO対策は可能ですか？",
    a: "はい。「葛飾区 外壁塗装」「足立区 リフォーム」「東京 工務店」など地域特化キーワードでのMEO・SEO対策に対応しています。施工事例のコンテンツ化・GBP写真最適化・口コミ獲得支援で信頼性を高め、問い合わせ増加につなぎます。",
  },
  {
    q: "東京都での集客施策の開始から成果が出るまでのスケジュールは？",
    a: "MEO対策は着手から1〜2か月でGBPの改善が始まり、3〜6か月で安定した上位表示が期待できます。SEO対策は6か月〜1年の中長期的な取り組みが基本です。競合が少ない東京東部・多摩地区は都心より早い成果が期待できます。月次レポートで進捗を定期共有します。",
  },
  {
    q: "葛飾区近隣エリアは訪問費用がかかりますか？",
    a: "葛飾区・足立区・江戸川区・墨田区など隣接エリアへの初回訪問相談は無料で対応しています。それ以外のエリアへの定期訪問については、内容・頻度によってご相談の上で設定します。まずはZoomでの無料初回相談をお申し込みください。",
  },
  {
    q: "東京都で士業（税理士・行政書士）のホームページ制作も依頼できますか？",
    a: "はい。東京都内の税理士・行政書士・司法書士・社労士など士業のホームページ・LP制作に対応しています。専門性のアピール・問い合わせ導線設計・AIO対策（AI検索での引用獲得）を組み合わせた、集客に直結するサイト制作を提供します。「葛飾区 税理士」など地域特化キーワードでのMEO対策との同時展開も可能です。",
  },
];

const relatedLinks = [
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索対策サービス" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金・相場ガイド" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "SEO費用・相場ガイド" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食店向けMEO対策" },
  { href: "/industries/clinic", label: "クリニックの集客", desc: "医療・クリニック向け" },
  { href: "/industries/beauty", label: "美容室の集客", desc: "美容室・サロン向けMEO" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/contact", label: "無料相談", desc: "まずはお気軽にご相談" },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.cypress-all.co.jp/area" },
          { "@type": "ListItem", position: 3, name: "東京都", item: "https://www.cypress-all.co.jp/area/tokyo" },
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
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>対応エリア</Link>
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
              葛飾区拠点のため東京東部（葛飾・足立・江戸川・墨田）への訪問対応が得意です。渋谷・新宿・池袋など都心エリア、立川・八王子・町田など多摩地区まで東京都全域にオンラインで対応します。クリニック・飲食店・美容室・士業・工務店など各業種に特化した集客戦略を提供しています。
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
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
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

        {/* Section 4: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry Insights</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別の集客ポイント（東京都）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              東京都は23区と多摩地区で市場特性が大きく異なります。エリアと業種の組み合わせで最適な集客戦略が変わります。葛飾区拠点として東京全域の業種別ノウハウを蓄積しています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ・居酒屋",
                  desc: "東京の飲食業は最も競争が激しい業種のひとつです。都心エリアは駅名+業種の絞り込みMEOと、口コミ数・写真クオリティで差別化します。葛飾・足立・江戸川など東部エリアは競合が少なくMEO基本施策で上位表示を狙えます。「〇〇駅 ランチ」など来店意図の明確なキーワードを優先します。",
                },
                {
                  industry: "美容室・エステ・ネイルサロン",
                  desc: "東京の美容業は競合が激しいですが、得意メニュー（縮毛矯正・カラー・ヘッドスパなど）に特化したキーワード設計で差別化できます。葛飾・足立・江戸川エリアの美容室はMEO競合が少なく、GBP最適化と口コミ強化だけで予約増加が期待できます。Instagram連携で若年層の集客も同時に強化します。",
                },
                {
                  industry: "クリニック・歯科・整骨院・接骨院",
                  desc: "医療系は信頼性と専門性の訴求が集客の核心です。東京東部エリア（葛飾・足立・江戸川）は医療MEO競合が比較的少なく、GBP整備と専門コンテンツで上位を取りやすいです。都心クリニックは専門外来・得意分野を明示したコンテンツSEOと患者さんの声の充実が差別化の鍵です。",
                },
                {
                  industry: "士業（税理士・行政書士・司法書士）",
                  desc: "東京都内の士業はAIO対策が特に有効です。ChatGPT・Geminiで「東京 税理士 おすすめ」と検索されたときに引用されるためのE-E-A-T強化・Q&Aコンテンツ・著者情報整備が集客の新定番になりつつあります。「葛飾区 税理士」など地域特化キーワードのMEOも同時展開します。",
                },
                {
                  industry: "不動産・工務店・リフォーム",
                  desc: "東京の不動産業は高競合ですが、「葛飾区 賃貸」「足立区 リフォーム」など区単位での地域特化SEOが有効です。工務店・リフォーム会社は施工事例のコンテンツ化とGBP写真の充実が信頼獲得に直結します。多摩地区の不動産業者は競合が少なく早期参入でポジションを確立できます。",
                },
                {
                  industry: "保育園・学習塾・習い事教室",
                  desc: "葛飾区・足立区・江戸川区・荒川区などは子育て世帯が多く、保育園・学習塾・ピアノ教室などの集客需要が高いです。「葛飾区 学習塾」「江戸川区 保育園 認可外」などエリア特化MEO・SEOで地域ファミリー層を確実に捉えます。口コミ管理も集客に大きく影響します。",
                },
                {
                  industry: "フィットネス・ジム・スポーツ",
                  desc: "東京都内はフィットネス競合が激しいですが、「〇〇区 パーソナルトレーニング」「〇〇駅 ヨガ」など専門特化型のMEO・SEO戦略が有効です。多摩地区（立川・八王子・町田）はスポーツ・フィットネスのMEO競合が少なく、早期参入で安定した集客基盤を構築できます。",
                },
                {
                  industry: "IT・コンサルティング・BtoB企業",
                  desc: "東京のB2B企業はAIO対策とコンテンツSEOが最も費用対効果の高い集客手段です。ChatGPT・Geminiで「東京 Webマーケティング会社」「東京 ITコンサル」と検索されたとき引用されることが新規商談の入口になります。専門性の高いホワイトペーパー・事例コンテンツの充実が重要です。",
                },
              ].map((item) => (
                <div key={item.industry} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{item.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: 主要エリア別特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Area Breakdown</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              主要エリア別特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                {
                  area: "東京東部（葛飾・江戸川・足立・墨田）",
                  desc: "株式会社サイプレスの拠点エリアで、葛飾区白鳥4-6-1-623を本社としています。葛飾区・足立区・江戸川区への訪問相談が可能で、東京都内でMEO・SEO競合が比較的少ない穴場エリアが多く、飲食・美容・医療・学習塾など生活密着型ビジネスの集客に強みがあります。同じ施策費用で都心より高い費用対効果が期待できます。",
                },
                {
                  area: "都心部（渋谷・新宿・銀座・池袋）",
                  desc: "東京で最も競合が激しく、最も集客単価が高いエリアです。汎用キーワードでの上位は大手に占領されているため、エリア絞り込み・専門特化・コンテンツSEO・AIO対策による差別化が不可欠です。高単価業種（クリニック・士業・高級飲食・ブランド美容）はROIが高く、正しい戦略で大きな成果につながります。",
                },
                {
                  area: "城南エリア（品川・目黒・世田谷）",
                  desc: "高所得層・外国人居住者が多く、飲食・美容・医療・フィットネスなどの高単価ビジネスが集積するエリアです。英語対応のGBP設定や、ライフスタイル訴求のブランドサイトが集客に有効です。世田谷区は住宅地として広大で、エリア内での地域絞り込みMEO戦略が重要になります。",
                },
                {
                  area: "多摩地区（立川・八王子・町田）",
                  desc: "23区都心部と比較してMEO競合が少ないエリアが多く、飲食・医療・美容・学習塾など生活密着型ビジネスは早期参入で安定したポジションを確立できます。立川・八王子・町田は多摩地区の中心都市で一定の集客需要があります。リモートでの施策実行のみで効率よく成果を上げられます。",
                },
                {
                  area: "台東区・荒川区",
                  desc: "浅草・上野・谷中など観光スポットを抱える台東区は、インバウンド対応の多言語MEOと地元住民向けローカルSEOの二軸が重要です。荒川区は都心に近く下町文化が残るエリアで、生活密着型ビジネスのMEO競合が少なく費用対効果の高い施策が展開できます。",
                },
                {
                  area: "城北エリア（板橋・北区・豊島）",
                  desc: "板橋区・北区・豊島区は埼玉県に隣接し、ベッドタウンとして住宅・商業が混在するエリアです。飲食・美容・医療など生活密着型ビジネスのMEO競合は都心より緩やかで、早期参入でポジションを確立しやすいです。「板橋区 整骨院」「北区 学習塾」など区名特化のキーワードが有効です。",
                },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: 実装フロー */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              東京都の事業者向け集客支援は、以下の8ステップで進めます。東京東部エリアは訪問対応も可能。都心・多摩地区はオンラインで完結します。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "無料相談・ヒアリング", b: "ZoomまたはGoogle Meetで45〜60分の無料初回相談を実施します。東京東部（葛飾・足立・江戸川・墨田）への訪問相談も可能です。現在の集客状況・課題・目標・予算・ターゲットエリアを詳しくヒアリングします。" },
                { n: "02", t: "競合調査・現状分析", b: "東京都内の同業種・同エリアの競合MEO・SEO状況を詳細に調査します。渋谷・新宿など激戦エリアの「勝てるポジション」特定と、葛飾・足立・多摩地区など競合の少ないエリアの早期参入機会を分析します。" },
                { n: "03", t: "キーワード設計・戦略立案", b: "エリアと業種に最適なターゲットキーワードを設計します。都心は専門特化・ニッチキーワード戦略、東部・多摩地区は早期参入型のMEO×ローカルSEO戦略など、東京都の地域特性を活かした施策を立案します。" },
                { n: "04", t: "提案・お見積もり・ご契約", b: "競合分析・キーワード設計をもとに、具体的な施策内容と費用・期間の見積もりを提出します。MEO単体・SEO単体・Web制作込みなど、ご予算と優先度に合わせた柔軟なプランで提案します。" },
                { n: "05", t: "Googleビジネスプロフィール最適化", b: "MEO対策はGBPの完全最適化から開始します。店舗情報の整備・カテゴリ設定・写真登録・サービス・属性・投稿設定を一括で整備します。台東区など観光エリアは多言語設定、東部エリアは地域密着訴求に最適化します。" },
                { n: "06", t: "SEO・コンテンツ制作", b: "ターゲットキーワードに沿ったコンテンツページ・ブログ記事・FAQ・エリアページを制作します。東京23区・多摩地区の地域情報を活用した専門性の高いコンテンツで検索上位表示と信頼性向上を同時に実現します。" },
                { n: "07", t: "口コミ獲得支援・定期投稿代行", b: "MEO評価に直結するGoogleレビューの獲得を支援します。お客様への口コミ依頼テンプレート提供・返信代行・GBP定期投稿代行で、東京の競合と差別化できる口コミ評価を着実に積み上げます。" },
                { n: "08", t: "月次レポート・改善サイクル", b: "毎月Googleビジネスプロフィールのインサイト・検索順位・流入キーワード・問い合わせ数をまとめた月次レポートを提出します。数値に基づいた改善提案を継続的に実施し、東京都での集客成果を着実に積み上げます。" },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{s.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{s.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{s.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: 集客チャネル */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
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
                { label: "Web制作", tag: "集客の核", desc: "高品質なホームページがすべての集客の受け皿となる。SEO・MEO・SNSからの流入を問い合わせ・予約・来店へつなぐCV設計が重要です。" },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px", background: "#FFFFFF" }}>
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

        {/* Section 8: よくある失敗パターン */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>東京都で集客が伸び悩む理由</h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "40px" }}>
              東京都の事業者から相談を受ける中で見えてきた、集客施策が機能しない典型的なパターンをご紹介します。思い当たる点があれば、現状の改善から始めましょう。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { t: "「東京」という広すぎるターゲット設定", b: "「東京 美容室」など東京全体を狙ったキーワードは、大手サイトが支配しており中小企業には非現実的です。「葛飾区 美容室」「亀有駅 美容室」など区・駅単位に絞り込んだキーワード設計こそが成果への最短経路です。" },
                { t: "GBPの写真・情報が不足している", b: "Googleビジネスプロフィールの写真枚数が少ない・営業時間が未更新・投稿が途絶えているケースは東京でも非常に多いです。GBPの基本整備だけで順位が改善するケースも多く、まず確認すべきポイントです。" },
                { t: "ホームページが古く・遅い", b: "スマートフォンでの表示速度が遅いサイトは東京のモバイルファーストユーザーに離脱されます。MEOから流入した見込み客が古いデザインのサイトで不信感を持ち、問い合わせしないという機会損失が起きています。" },
                { t: "口コミ管理を放置している", b: "低評価口コミへの返信がない・口コミ数が競合より少ない状態では、東京の情報感度が高い消費者の来店には至りません。口コミ返信・獲得施策の継続は、東京での集客を安定させる重要な要素です。" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "24px" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</h3>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: 依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "葛飾区拠点で東京東部に訪問対応可", b: "葛飾区白鳥4-6-1-623を拠点とするサイプレスは、葛飾区・足立区・江戸川区・墨田区・江東区・荒川区など東京東部エリアへの訪問相談・サポートに対応しています。デジタルとリアルを組み合わせた支援体制が強みです。" },
                { n: "02", t: "競合分析で「勝てるキーワード」を特定", b: "東京の激戦キーワードを避け、中小企業でも上位を取れるキーワードを特定して施策を実行します。費用対効果を最優先にした戦略設計で、限られた予算で最大の成果を目指します。" },
                { n: "03", t: "MEO・SEO・AIO・Web制作をワンストップで", b: "東京での集客に必要なMEO・SEO・AIO対策・ホームページ制作・SNS運用をすべてサイプレスに依頼できます。複数業者に分散するコスト・手間を省き、一貫した戦略を実行します。" },
                { n: "04", t: "業種別の深い知見で成果を最大化", b: "飲食店・美容室・クリニック・士業・不動産・コンサルタントなど、東京都内の各業種のWeb集客に特化した知見を持っています。業種別のKPI設定・施策設計で集客成果を最大化します。" },
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

        {/* Section 10: 東京都 市場データ */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Market Data</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "32px" }}>東京都の市場概要</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              {[
                { label: "人口（全国1位）", value: "約1,400万人", note: "日本最大・最も競争が激しい市場" },
                { label: "事業所数（概算）", value: "約70万社", note: "中小企業・個人事業主が全体の99%超" },
                { label: "葛飾区人口", value: "約46万人", note: "サイプレス拠点エリア・東京東部の中核" },
                { label: "東京の訪日観光客数", value: "年間1,500万人超", note: "インバウンド集客の最大市場" },
              ].map((d, i) => (
                <div key={i} style={{ background: "#ffffff", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "24px 20px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#9CA3AF", letterSpacing: "0.1em", marginBottom: "8px", textTransform: "uppercase" }}>{d.label}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2vw,26px)", fontWeight: 800, color: "#0d1b2a", marginBottom: "6px" }}>{d.value}</p>
                  <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.7" }}>{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="東京都のSEO・MEO対策に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="東京都のWeb集客、まずは無料相談から"
          body="東京都のSEO対策・MEO対策・ホームページ制作のご相談は無料です。葛飾区・足立区・江戸川区・墨田区への訪問相談、東京都全域のオンライン相談に対応しています。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
