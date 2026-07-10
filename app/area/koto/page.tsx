import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "江東区のSEO対策・MEO対策・ホームページ制作｜亀戸・錦糸町・豊洲・木場・清澄白河の集客支援｜株式会社サイプレス",
  description: "江東区のSEO対策・MEO対策・ホームページ制作。亀戸・錦糸町・豊洲・木場・深川・清澄白河エリアの中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。",
  keywords: ["江東区 SEO", "江東区 MEO", "亀戸 集客", "錦糸町 MEO", "豊洲 ホームページ制作", "清澄白河 SEO", "木場 Web制作", "江東区 Web集客"],
  openGraph: {
    title: "江東区のSEO対策・MEO対策・ホームページ制作｜亀戸・錦糸町・豊洲の集客支援｜株式会社サイプレス",
    description: "江東区の中小企業・店舗のSEO・MEO対策をサイプレスが支援。亀戸・錦糸町・豊洲・木場・清澄白河エリアの地域特性に合わせた集客戦略を提供。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/koto" },
};

const faqItems = [
  {
    q: "江東区でのMEO対策・SEO対策を依頼できますか？",
    a: "はい。葛飾区拠点のサイプレスは江東区全域（亀戸・錦糸町・豊洲・木場・深川・清澄白河・東雲・有明等）のMEO対策・SEO対策・ホームページ制作に対応しています。",
  },
  {
    q: "江東区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "業種・エリアの競合状況によりますが、2〜4ヶ月での順位向上が目安です。亀戸・錦糸町は競合が多いため時間がかかりますが、清澄白河・木場・東雲エリアは比較的早く効果が出るケースがあります。",
  },
  {
    q: "亀戸・錦糸町エリアはMEO競合が激しいですか？",
    a: "はい。亀戸・錦糸町は飲食・美容・整体など競合が多いエリアです。口コミ数・評点・投稿の質で差別化する戦略的な施策が必要です。競合分析をもとに勝てるポイントを特定した戦略をご提案します。",
  },
  {
    q: "豊洲エリアのMEO対策で特に注意すべきことはありますか？",
    a: "豊洲は新住民（マンション住民）が多く、Googleマップで新しい店を探す行動が活発なエリアです。GBPの投稿・写真を定期的に更新し、子育て世帯向けの情報（キッズスペース・ベビーカー対応等）をGBPに詳細に記載することが重要です。",
  },
  {
    q: "清澄白河エリアの集客施策は何が効果的ですか？",
    a: "清澄白河は感度の高いユーザーが多いエリアです。SNS（Instagram）でのビジュアル訴求・メディア掲載・プレスリリース・MEO対策を組み合わせることで、エリアのブランドイメージに合った集客が実現できます。",
  },
  {
    q: "江東区全域を対象とした集客はできますか？",
    a: "はい。GBPの対応エリア設定・ホームページの地域コンテンツページ（亀戸・錦糸町・豊洲・木場・清澄白河等）を組み合わせることで、江東区全域へのローカルSEO対策が可能です。",
  },
  {
    q: "江東区の飲食店がMEOで差をつけるにはどうすればいいですか？",
    a: "亀戸・錦糸町の競合が多いエリアでは、①高品質な料理写真を30枚以上、②口コミ50件以上・評点4.0以上の維持、③週2回以上のGBP投稿継続が最低条件です。「個室対応」「デート向け」など具体的な特徴をGBPの属性・説明文に詳細に記載することで差別化できます。",
  },
  {
    q: "豊洲の子育て世帯向けビジネスはどんな施策が有効ですか？",
    a: "豊洲は子育て世帯が多いため、「キッズスペースあり」「授乳室あり」「ベビーカー入店可」などの情報をGBPに詳細に記載することが集客に直結します。SNSでの子育てコンテンツ発信・口コミ獲得も効果的です。",
  },
  {
    q: "月額いくらから始められますか？",
    a: "MEO対策は月額2〜3万円台から、SEO対策は月額3〜5万円台からのプランをご用意しています。江東区の中小企業・個人事業主の予算感に合わせた提案を心がけています。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/taito", label: "台東区", desc: "台東区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/column/koto-meo-seo-guide", label: "江東区MEO・SEOガイド", desc: "詳細コラム記事" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金・費用の目安" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずはご相談ください" },
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
          { "@type": "ListItem", position: 3, name: "江東区", item: "https://www.cypress-all.co.jp/area/koto" },
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
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>江東区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Koto Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              江東区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              亀戸・錦糸町・豊洲・木場・深川・清澄白河の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              江東区は多様なエリアを持つ東京東部の大きな区です。人口増加が続く豊洲から下町の亀戸まで、エリア特性に合わせた集客戦略を設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.jpg" alt="江東区のデジタルマーケティング" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              江東区のビジネス環境と集客の特性
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "亀戸・錦糸町：東京東部最大の商業集積エリア", b: "亀戸・錦糸町は飲食店・商業施設・美容院が密集する東部最大の繁華街です。競合が多いため差別化が重要ですが、人口集積が多く集客ポテンシャルも高いエリアです。" },
                { n: "02", t: "豊洲・東雲・有明：人口急増の新興住宅エリア", b: "大型タワーマンションが林立する豊洲・東雲・有明エリアは高所得者層・子育て世帯が集まります。新住民がGoogleマップで店舗を探す行動が活発で、MEO対策の効果が高いです。" },
                { n: "03", t: "清澄白河・木場：クリエイティブエリアの台頭", b: "おしゃれなカフェ・ギャラリー・スタジオが集まる清澄白河は感度の高いユーザーが多いです。SNSでの拡散・メディア掲載・MEO対策を組み合わせた施策が効果的です。" },
                { n: "04", t: "深川・門前仲町：下町観光と地域住民の共存", b: "門前仲町・深川は深川不動堂への参拝客と地域住民が共存するエリアです。観光客向けと地域住民向け両方にアプローチするコンテンツ設計が重要です。" },
                { n: "05", t: "人口50万人超の大きな区", b: "江東区は人口50万人超の大きな区で、多様な業種の需要が安定しています。エリアを絞った効率的なローカル集客で費用対効果を最大化できます。" },
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

        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              江東区の主要エリア・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "亀戸", desc: "総武線沿いの商業エリア。亀戸天神・商店街が有名。飲食・美容の競合が多いが、集客ポテンシャルも高い。ロングテールキーワード戦略と高品質GBPで差別化が鍵。" },
                { area: "錦糸町", desc: "総武線・半蔵門線が通る江東区最大のターミナル。商業施設・飲食・ホテルが密集。競合が多いため口コミ数・評点・写真品質での差別化が必須。" },
                { area: "豊洲", desc: "タワーマンション群が集まる新興住宅エリア。高所得者・子育て世帯が多く、MEO対策の効果が高い。豊洲市場への観光客も集客対象になる。" },
                { area: "清澄白河・木場", desc: "クリエイティブエリアとして人気急上昇。感度の高いユーザーが集まりSNS拡散力が高い。独自の世界観・ストーリーを訴求するコンテンツが集客に直結。" },
                { area: "深川・門前仲町", desc: "下町情緒と観光地が共存。深川不動堂・富岡八幡宮への参拝客+地域住民の両方に対応したMEO・SEO設計が有効。" },
                { area: "東雲・有明", desc: "IoT・テクノロジー企業が集まるビジネスエリア。タワーマンション住民と企業従業員が主な顧客。ランチ・美容・フィットネス需要が高い。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "17px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
              {[
                { n: "01", t: "江東区の多様なエリア特性を把握した戦略設計", b: "亀戸・豊洲・清澄白河それぞれのエリア特性・ターゲット層・競合状況を踏まえた最適な集客戦略を設計します。画一的な施策ではなく、エリアに合わせたカスタム戦略が強みです。" },
                { n: "02", t: "MEO・SEO・Web制作をワンストップで完結", b: "集客に必要な施策をMEO・SEO・ホームページ制作すべて一社で完結します。一貫した集客設計で相乗効果を生み出します。" },
                { n: "03", t: "「勝てるキーワード」から逆算した施策設計", b: "競合の少ないニッチキーワード・エリアを特定し、限られた予算で最大の集客効果を実現します。競合分析データに基づいた提案を提供します。" },
                { n: "04", t: "中小企業・個人事業主の予算感に合わせた提案", b: "江東区の中小企業・個人事業主がスモールスタートできるプランをご用意しています。月額2万円台からのMEO対策プランもあります。" },
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

        <FaqSection items={faqItems} heading="江東区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="江東区のWeb集客、まずは無料相談から"
          body="亀戸・錦糸町・豊洲・木場・清澄白河エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
