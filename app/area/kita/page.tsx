import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "北区のSEO対策・MEO対策・ホームページ制作｜赤羽・王子・十条・田端の集客支援｜株式会社サイプレス",
  description: "北区のSEO対策・MEO対策・ホームページ制作。赤羽・王子・十条・田端・上十条・滝野川の中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援します。",
  keywords: ["北区 SEO", "北区 MEO", "赤羽 MEO", "赤羽 集客", "王子 SEO", "十条 ホームページ制作", "北区 Web集客", "田端 MEO対策"],
  openGraph: {
    title: "北区のSEO対策・MEO対策・ホームページ制作｜赤羽・王子・十条・田端の集客支援｜株式会社サイプレス",
    description: "北区の中小企業・店舗のSEO・MEO対策をサイプレスが支援。赤羽・王子・十条・田端エリアの地域特性に合わせた集客戦略を提供。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/kita" },
};

const faqItems = [
  {
    q: "北区でのMEO対策・SEO対策を依頼できますか？",
    a: "はい。サイプレスは北区全域（赤羽・王子・十条・田端・上十条・滝野川・岩淵等）のMEO対策・SEO対策・ホームページ制作に対応しています。",
  },
  {
    q: "赤羽エリアのMEO競合はどのくらい激しいですか？",
    a: "赤羽は23区北部の主要ターミナルで飲食・美容の競合が多いエリアです。口コミ数・評点・投稿の質で差別化する戦略が必要です。ただし、赤羽東口・西口の複数エリアに分けて競合分析すると、意外に競合が少ないニッチな隙間も見つかります。",
  },
  {
    q: "十条・王子エリアは集客しやすいですか？",
    a: "十条・王子エリアは赤羽ほど競合が多くなく、適切なMEO・SEO施策で上位表示しやすい環境です。特に王子駅周辺の生活サービス系（整骨院・美容室・学習塾）は少ない予算でも効果が出やすいエリアです。",
  },
  {
    q: "北区の飲食店がMEO対策で差をつけるには何をすればいいですか？",
    a: "赤羽の競合が多いエリアでは、①高品質な料理写真・内装写真を30枚以上、②口コミ50件以上・評点4.0以上、③週2回以上のGBP投稿、④「個室あり」「テイクアウト可」など属性の詳細な入力、が競合との差別化に直結します。",
  },
  {
    q: "北区でホームページ制作と同時にSEO対策もできますか？",
    a: "はい。サイプレスではホームページ制作の段階からSEOを組み込んで設計します。北区のローカルキーワード（赤羽・王子・十条）を意識した構造・コンテンツ設計が可能です。",
  },
  {
    q: "北区の士業（税理士・社労士等）はどんな施策が有効ですか？",
    a: "「北区 税理士」「赤羽 社労士」などのローカルキーワードでのSEO対策・GBP最適化が有効です。北区のBtoBビジネスは検索意図が明確なためSEO経由の問い合わせ単価が高く、費用対効果が高い施策です。",
  },
  {
    q: "月額いくらから始められますか？",
    a: "MEO対策は月額2〜3万円台から、SEO対策は月額3〜5万円台からのプランをご用意しています。北区の中小企業・個人事業主の予算感に合わせた提案を心がけています。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/arakawa", label: "荒川区", desc: "荒川区の集客支援" },
  { href: "/area/toshima", label: "豊島区", desc: "豊島区の集客支援" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/column/kita-ku-meo-seo-guide", label: "北区MEO・SEOガイド", desc: "詳細コラム記事" },
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
          { "@type": "ListItem", position: 3, name: "北区", item: "https://www.cypress-all.co.jp/area/kita" },
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
              <span style={{ color: "#0d1b2a" }}>北区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Kita Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              北区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              赤羽・王子・十条・田端・滝野川の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              北区は赤羽を中心とした商業エリアと静かな住宅地が共存する区です。エリアごとの競合状況を踏まえた費用対効果の高い集客戦略を設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.jpg" alt="北区のデジタルマーケティング" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              北区のビジネス環境と集客の特性
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "赤羽：23区北部最大のターミナルエリア", b: "JR埼京線・京浜東北線・南北線が交わる赤羽は、23区北部の人の流れが集まる商業エリアです。飲食・居酒屋の激戦地として知られますが、美容・整骨院・士業などはまだ競合が少ない領域があります。" },
                { n: "02", t: "王子・十条：生活密着型の安定した需要", b: "王子・十条エリアは地域住民が多い静かな商業エリアです。飲食・美容・医療・学習塾などの生活密着型ビジネスの需要が安定しており、適切なMEO施策で費用対効果の高い集客が可能です。" },
                { n: "03", t: "田端・上中里：穴場の集客エリア", b: "JR山手線・京浜東北線が通る田端は意外に競合が少ない穴場エリアです。少ない投資でMEO・SEO上位を狙える機会があります。" },
                { n: "04", t: "滝野川・岩淵：下町の住宅エリア", b: "滝野川・岩淵は下町の住宅地で地域密着型の小規模ビジネスが多いエリアです。競合が非常に少なく、基本的なGBP最適化だけで上位表示できるケースが多くあります。" },
                { n: "05", t: "人口35万人超の大きな区", b: "北区は人口35万人超で、地域住民向けの需要が安定しています。赤羽に次ぐ第2の商業エリアである王子・十条を含め、エリアを絞った集客で費用対効果を最大化できます。" },
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
              北区の主要エリア・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "赤羽", desc: "4路線が交わる北部最大のターミナル。居酒屋・飲食の激戦地だが、美容・整体・クリニックは比較的競合が少ない。エリア分析と差別化戦略が鍵。" },
                { area: "王子", desc: "東京メトロ南北線・JR京浜東北線が通る商業エリア。荒川に面した公園・飛鳥山が近く、地域住民密着の生活サービス需要が安定。競合が少なく施策効果が出やすい。" },
                { area: "十条", desc: "JR埼京線十条駅周辺の下町商店街エリア。古くからの商店街が残り、地域住民向けの飲食・生活サービスの需要が高い。MEO競合が少ない穴場エリア。" },
                { area: "田端・上中里", desc: "JR山手線・京浜東北線が通る静かな住宅・商業エリア。競合が非常に少なく、基本的なGBP最適化で上位を狙いやすい環境。" },
                { area: "滝野川", desc: "石神井川沿いの住宅エリア。商業施設は少ないが地域住民の生活密着型需要が安定。MEO・SEO競合が非常に少なく、スモールスタートでも効果が出やすい。" },
                { area: "岩淵・浮間", desc: "荒川・新河岸川に囲まれた静かな住宅エリア。地域住民密着型の小規模ビジネス向け。基本施策だけで長期安定した集客を実現しやすいエリア。" },
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
                { n: "01", t: "北区各エリアの競合状況を把握した戦略設計", b: "赤羽の激戦エリアから十条・田端の穴場エリアまで、北区の競合状況を精緻に分析し、最も費用対効果の高い施策を優先して実行します。" },
                { n: "02", t: "MEO・SEO・Web制作をワンストップで完結", b: "集客に必要な施策をMEO・SEO・ホームページ制作すべて一社で完結します。一貫した集客設計で相乗効果を生み出します。" },
                { n: "03", t: "中小企業・個人事業主の予算感に合わせた提案", b: "北区の中小企業・個人事業主がスモールスタートできるプランをご用意しています。月額2万円台からのMEO対策プランもあります。" },
                { n: "04", t: "隣接エリアへのアクセスが良く訪問対応も可能", b: "葛飾区を拠点とするサイプレスは、北区・荒川区・足立区など東部エリアへの訪問打ち合わせに迅速に対応できます。" },
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

        <FaqSection items={faqItems} heading="北区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="北区のWeb集客、まずは無料相談から"
          body="赤羽・王子・十条・田端エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
