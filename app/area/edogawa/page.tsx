import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "江戸川区のSEO対策・MEO対策・ホームページ制作｜小岩・葛西・西葛西・篠崎の集客支援",
  description: "江戸川区のSEO対策・MEO対策・ホームページ制作。小岩・葛西・西葛西・船堀・篠崎・瑞江・一之江エリアの中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。多言語対応も相談可。",
  keywords: ["江戸川区 SEO", "江戸川区 MEO", "小岩 集客", "葛西 MEO", "西葛西 ホームページ制作", "江戸川区 Web制作", "篠崎 SEO"],
  openGraph: {
    title: "江戸川区のSEO対策・MEO対策・ホームページ制作｜小岩・葛西・西葛西の集客支援",
    description: "江戸川区の中小企業・店舗のSEO・MEO対策を葛飾区隣接のサイプレスが支援。小岩・葛西・西葛西・篠崎エリアへの訪問対応も迅速。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/edogawa" },
};

const faqItems = [
  {
    q: "江戸川区での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に隣接する江戸川区への訪問相談に迅速に対応しています。小岩・新小岩（葛飾区側）・篠崎・瑞江・一之江エリアへの訪問打ち合わせが可能です。葛西・西葛西はオンライン（Zoom）でのご相談も対応しています。",
  },
  {
    q: "江戸川区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "葛西・西葛西・篠崎エリアはMEO競合が少ないため、正しい施策で1〜3か月での順位向上が期待できます。小岩は競合が多めですが、継続施策で3〜6か月での改善が見込まれます。",
  },
  {
    q: "江戸川区での競合状況はどうですか？",
    a: "小岩駅周辺は飲食・美容・医療ともに競合が増加していますが、葛西・西葛西・篠崎・瑞江・一之江などのエリアはMEO・SEO競合がまだ少ない穴場エリアです。競合分析のうえで勝てるキーワードを特定します。",
  },
  {
    q: "江戸川区の多言語対応（外国人向け集客）は可能ですか？",
    a: "はい。西葛西を中心にインド系・中国系・韓国系など多くの外国人コミュニティが居住する江戸川区では、多言語対応のGBP設定・英語・中国語・ヒンディー語などのSEO対応についてもご相談いただけます。",
  },
  {
    q: "江戸川区の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。飲食店・美容室・整骨院・歯科クリニック・士業・工務店など江戸川区のあらゆる業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "千葉県に近い立地を活かした集客はできますか？",
    a: "はい。江戸川区は千葉県市川市・松戸市と接しており、千葉県側からの来店需要も見込めます。「江戸川区・市川市でお探しの方へ」といった広域ターゲットのSEO・MEO戦略も提案しています。",
  },
  {
    q: "リモートでの対応はできますか？",
    a: "はい。Zoom・Google Meet・メールでのリモート対応も可能です。葛西・西葛西など遠いエリアの方はオンラインでのご相談を推奨していますが、ご要望に応じて訪問対応も調整します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/clinic", label: "クリニックの集客", desc: "医療・治療院向け支援" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
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
          { "@type": "ListItem", position: 3, name: "江戸川区", item: "https://www.cypress-all.co.jp/area/edogawa" },
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
              <span style={{ color: "#0d1b2a" }}>江戸川区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Edogawa Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              江戸川区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区に隣接する江戸川区（小岩・葛西・西葛西・船堀・篠崎・瑞江・一之江）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              江戸川区は千葉県と接する境界エリアで、多様な外国人コミュニティが居住するユニークな地域です。MEO競合が少ないエリアが多く、正しい施策で短期間の集客改善が見込めます。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_12_19.png"
            alt="江戸川区のビジネスデータ分析"
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              江戸川区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "多様なコミュニティが共存するユニークなエリア", b: "西葛西はインド系コミュニティが集中することで知られ、中国系・韓国系・ベトナム系など多様な外国人居住者が多い江戸川区は、日本語だけでなく多言語での集客対応が求められる独自の市場です。" },
                { n: "02", t: "千葉県との境界エリアで広域商圏をカバー", b: "江戸川区は千葉県市川市・松戸市と接しており、千葉県側からの来店需要も見込める広域商圏を持っています。「江戸川区・市川市でも対応可」というアピールでより広い集客が可能です。" },
                { n: "03", t: "MEO競合が少ない穴場エリアが多い", b: "小岩駅周辺を除き、葛西・西葛西・篠崎・瑞江・一之江・船堀などはMEO・SEO競合がまだ少ない状態です。今から施策を実施すれば、少ない予算でGoogleマップ上位を獲得しやすいエリアです。" },
                { n: "04", t: "飲食・美容・医療・整骨院のニーズが高い", b: "江戸川区は人口69万人超の大規模な区で、地域住民の日常的なサービス需要が高いです。特に飲食店・美容室・クリニック・整骨院・接骨院への「近くで探す」検索が多く、MEO対策の費用対効果が高いです。" },
                { n: "05", t: "葛飾区との商圏重複を活かした広域集客", b: "江戸川区西部（小岩・篠崎）は葛飾区（新小岩・立石）と商圏が重複します。葛飾区のSEO・MEO施策と連動させた広域集客戦略により、より多くの顧客接点を作り出せます。" },
                { n: "06", t: "ホームページ・Webマーケティング未着手の事業者が多い", b: "江戸川区の中小企業・個人事業主の中には、Webマーケティングに着手していないケースが多く存在します。基本的なGBP最適化・ホームページ整備だけで大きな改善が期待できるビジネスが多いエリアです。" },
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
              江戸川区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              江戸川区はMEO競合が少ないエリアが多く、正しい施策を実行すれば短期間での成果が期待できます。多言語コミュニティの多さという地域特性を活かした独自の集客戦略も設計できます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「葛西 美容院」「葛西 居酒屋」「西葛西 ランチ」「西葛西 クリニック」「小岩 整骨院」「小岩 美容室」「篠崎 歯科」「瑞江 整体」「船堀 カフェ」——エリアと業種を組み合わせた、競合が少なく狙いやすいキーワードが多数あります。" },
                { n: "02", t: "MEO競合レベル：小岩は中〜高、葛西・西葛西は低〜中", b: "小岩は飲食・美容の競合が増えています。一方、葛西・西葛西・篠崎・瑞江・一之江・船堀はMEO競合がまだ少なく、基本的なGBP最適化で上位表示を取れるケースが多くあります。" },
                { n: "03", t: "多言語対応SEO・多文化コミュニティへのアプローチ", b: "西葛西のインド系コミュニティをはじめ、多言語話者が多い江戸川区では、英語・中国語・ヒンディー語などでのGBP設定・ウェブサイト多言語化が他社との大きな差別化ポイントになります。" },
                { n: "04", t: "千葉県境界エリアの広域キーワード設計", b: "「江戸川区・市川市で〇〇をお探しの方」という広域ランディングページを設計することで、千葉県側からの検索需要も取り込めます。江戸川区の地理的優位性を最大限に活かした集客戦略を立案します。" },
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
              江戸川区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「葛西 美容院」「小岩 居酒屋」「西葛西 ランチ」など江戸川区各エリアの地域検索でGoogleマップ上位表示を目指します。GBPの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。" },
                { n: "02", t: "ローカルSEO対策", b: "「江戸川区 〇〇」「葛西 〇〇」「西葛西 〇〇」などのキーワードでの検索上位表示を目指します。千葉県と跨いだ広域キーワード設計で、より広い商圏からの集客を実現します。" },
                { n: "03", t: "ホームページ・LP制作", b: "飲食店・美容室・クリニック・士業など江戸川区の各業種に対応したホームページ・LP制作を行います。多言語対応・外国人コミュニティ向けのページ設計にも対応しています。" },
                { n: "04", t: "多言語対応Webマーケティング", b: "西葛西のインド系コミュニティをはじめとする多言語コミュニティ向けのGBP多言語設定・英語ウェブサイト制作・多言語SEO対応を提供します。外国人顧客の獲得に強みがあります。" },
                { n: "05", t: "SNS運用・Instagram集客支援", b: "Instagram・LINE公式アカウントの運用代行・コンサルティングを提供します。江戸川区の多様なコミュニティを意識したコンテンツ設計で認知拡大・来店促進を支援します。" },
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

        {/* Section 4: 主要スポット・地域特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              江戸川区の主要スポット・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "小岩", desc: "総武線の快速停車駅で商業エリアが充実。葛飾区新小岩との商圏重複があり、両区をまたいだ広域集客が可能。飲食・美容の競合が多いため、差別化戦略が重要。" },
                { area: "葛西", desc: "東京メトロ東西線の葛西駅周辺は住宅密集エリア。ファミリー層が多く、医療・教育・飲食への需要が高い。MEO競合はまだ少なくチャンスが大きいエリア。" },
                { area: "西葛西", desc: "インド系コミュニティで有名な西葛西。多文化が混在する独特のマーケットで、多言語対応集客・外国語SEOに取り組むことで大きな差別化が可能。" },
                { area: "船堀・篠崎", desc: "都営新宿線沿いの住宅エリア。地域住民の生活密着型需要が高く、MEO・SEO競合が少ない穴場エリア。今から着手すれば早期に上位表示を獲得できる。" },
                { area: "瑞江・一之江", desc: "都営新宿線の終点エリアで、静かな住宅街が続く。医療・整体・美容など生活サービスへの需要があり、競合が極めて少ないためMEOの効果が出やすい。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "17px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
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
              江戸川区でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要", desc: "「葛西 〇〇」「西葛西 〇〇」など地域検索でのGoogleマップ上位表示。競合が少ないエリアが多く、少ない投資で大きな成果が期待できる。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「江戸川区 〇〇」「小岩 〇〇」などのキーワードで検索上位表示。千葉県境界エリアの地理的優位性を活かした広域キーワード設計が可能。" },
                { label: "多言語Web対応", tag: "差別化", desc: "西葛西の多文化コミュニティに向けた多言語GBP・英語Webサイトで差別化。競合のほとんどが日本語のみのため、多言語対応だけで圧倒的に有利になる。" },
                { label: "Web制作", tag: "基盤", desc: "MEO・SEOからの集客を確実に問い合わせ・来店に変換する高品質なホームページ。多言語・スマートフォン最適化・CV設計が集客効果を最大化する。" },
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
              サイプレスに江戸川区の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "葛飾区隣接 — 訪問相談が迅速", b: "葛飾区拠点のため江戸川区（小岩・篠崎・瑞江エリア）への訪問対応が迅速です。葛西・西葛西エリアはオンライン（Zoom）で対応しています。現地でのヒアリング・現状確認で課題を的確に把握します。" },
                { n: "02", t: "多言語対応のノウハウ", b: "西葛西の多文化コミュニティ向けの多言語GBP設定・英語ウェブサイト制作に対応しています。外国人コミュニティへの集客という江戸川区特有のニーズに対応できることが強みです。" },
                { n: "03", t: "千葉県境界エリアの広域集客設計", b: "江戸川区と千葉県をまたいだ広域の集客戦略を設計できます。市川市・松戸市など千葉県側からの需要も取り込める施策で、商圏を最大化します。" },
                { n: "04", t: "MEO競合の少ない今がチャンス", b: "葛西・西葛西・篠崎・瑞江・一之江は現在もMEO競合が少ない状態です。今すぐ施策を開始することで、競合が増える前に上位ポジションを確保できます。早期参入のアドバンテージを最大限に活用しましょう。" },
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

        <FaqSection items={faqItems} heading="江戸川区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="江戸川区のWeb集客、まずは無料相談から"
          body="小岩・葛西・西葛西・篠崎エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。多言語対応・千葉県境界エリアの広域集客もご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
