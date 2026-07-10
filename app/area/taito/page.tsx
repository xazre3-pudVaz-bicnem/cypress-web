import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "台東区のSEO対策・MEO対策・ホームページ制作｜浅草・上野・秋葉原・蔵前の集客支援｜株式会社サイプレス",
  description: "台東区のSEO対策・MEO対策・ホームページ制作。浅草・上野・秋葉原・蔵前・御徒町・入谷エリアの中小企業・店舗のWeb集客。インバウンド対応のMEO・多言語SEOも対応。",
  keywords: ["台東区 SEO", "台東区 MEO", "浅草 集客", "上野 MEO", "秋葉原 SEO", "蔵前 ホームページ制作", "台東区 インバウンド", "台東区 Web集客"],
  openGraph: {
    title: "台東区のSEO対策・MEO対策・ホームページ制作｜浅草・上野・秋葉原・蔵前の集客支援｜株式会社サイプレス",
    description: "台東区の中小企業・店舗のSEO・MEO対策をサイプレスが支援。浅草・上野・秋葉原・蔵前のインバウンド対応も含めた集客戦略を提供。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/taito" },
};

const faqItems = [
  {
    q: "台東区でのMEO対策・SEO対策を依頼できますか？",
    a: "はい。サイプレスは台東区全域（浅草・上野・秋葉原・蔵前・御徒町・入谷・根岸等）のMEO対策・SEO対策・ホームページ制作に対応しています。インバウンド対応のGBP多言語設定も承ります。",
  },
  {
    q: "浅草・上野エリアのMEO競合はどのくらい激しいですか？",
    a: "浅草・上野の飲食・観光関連は東京屈指の競合の激しさです。口コミ数100件以上・評点4.0以上が上位表示の目安です。ただし「浅草 整体」「上野 クリニック」などの生活サービス系は比較的競合が少ない領域もあります。",
  },
  {
    q: "台東区のインバウンド集客のためにGBPの多言語対応は必要ですか？",
    a: "浅草・上野・秋葉原エリアの観光客向けビジネスには強く推奨します。英語対応は最低限、中国語（繁体字）・韓国語もあるとインバウンド集客が大幅に改善します。サイプレスではGBPの多言語対応もサポートしています。",
  },
  {
    q: "蔵前エリアの集客に効果的な施策はありますか？",
    a: "蔵前エリアは雑誌・SNS・メディアでの露出が集客に直結します。MEO対策・SEO対策に加えて、Instagram運用・プレスリリース・メディアへのアプローチを組み合わせることをお勧めします。「蔵前 カフェ」「蔵前 ショップ」などのキーワードでのSEO対策も有効です。",
  },
  {
    q: "台東区の地域住民向けビジネスはどんな施策が有効ですか？",
    a: "御徒町・入谷・根岸など観光地以外のエリアでは「台東区 〇〇」「入谷 〇〇」「御徒町 〇〇」などの地域名＋業種キーワードでのGBP最適化・SEO対策が有効です。観光系より競合が少ない領域で上位表示しやすい環境があります。",
  },
  {
    q: "台東区のホテル・宿泊施設のMEO対策はできますか？",
    a: "はい。浅草・上野エリアのホテル・ゲストハウスのGBP最適化（英語口コミへの返信対応含む）・SEO対策（多言語対応可）を提供しています。宿泊予約サイトとの連携戦略もアドバイスします。",
  },
  {
    q: "台東区でホームページ制作と同時にSEO対策もできますか？",
    a: "はい。サイプレスではホームページ制作の段階からSEOを組み込んで設計します。台東区の観光×地域住民の複合的なキーワード戦略・多言語対応も含めた設計が可能です。",
  },
  {
    q: "月額いくらから始められますか？",
    a: "MEO対策は月額2〜3万円台から、SEO対策は月額3〜5万円台からのプランをご用意しています。台東区の中小企業・個人事業主の予算感に合わせた提案を心がけています。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/arakawa", label: "荒川区", desc: "荒川区の集客支援" },
  { href: "/area/koto", label: "江東区", desc: "江東区の集客支援" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/column/taito-meo-seo-guide", label: "台東区MEO・SEOガイド", desc: "詳細コラム記事" },
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
          { "@type": "ListItem", position: 3, name: "台東区", item: "https://www.cypress-all.co.jp/area/taito" },
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
              <span style={{ color: "#0d1b2a" }}>台東区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Taito Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              台東区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              浅草・上野・秋葉原・蔵前・御徒町・入谷の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              台東区は東京を代表する観光地を持ちながら地域住民も多い特殊なエリアです。インバウンド対応も含めた多角的な集客戦略で競合に差をつけます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.jpg" alt="台東区のデジタルマーケティング" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              台東区のビジネス環境と集客の特性
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "浅草・上野：東京を代表する観光地としての集客機会", b: "浅草・上野は国内外から年間数千万人の観光客が訪れます。観光客を集客できるGBP多言語対応・口コミ管理が競合優位の鍵です。" },
                { n: "02", t: "インバウンド（外国人観光客）対応が必須", b: "浅草・上野・秋葉原は外国人観光客の割合が特に高いエリアです。英語・中国語・韓国語でのGBP説明文・口コミ返信が他社との差別化につながります。" },
                { n: "03", t: "蔵前：感度の高いユーザーが集まる新興エリア", b: "職人の町から「東京のブルックリン」と呼ばれるクリエイティブエリアへと変貌した蔵前は、SNS拡散力が高くメディア掲載につながりやすいエリアです。" },
                { n: "04", t: "御徒町・入谷・根岸：地域住民向けの安定した需要", b: "観光地から少し離れた御徒町・入谷・根岸エリアは地域住民向けの生活密着型業種の需要が安定しています。競合が少なく費用対効果の高いMEO・SEO対策が可能です。" },
                { n: "05", t: "地域と観光の複合キーワード戦略が重要", b: "台東区の集客は「観光客向け」と「地域住民向け」の両方のキーワードに対応したコンテンツ設計が他区と異なる特殊な課題です。的確な戦略設計で双方を獲得できます。" },
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
              台東区の主要エリア・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "浅草", desc: "東京屈指の観光地。国内外から観光客が集まり、MEO競合が非常に激しいエリア。口コミ数・多言語対応が集客の鍵。観光業・飲食・物販で特に重要なエリア。" },
                { area: "上野", desc: "上野動物園・博物館・アメ横が集まる文化観光エリア。観光客＋地域住民の両方に対応したMEO・SEO設計が必要。上野駅は5路線が乗り入れる交通の要所。" },
                { area: "秋葉原", desc: "電気街・アニメ・ゲームの聖地。インバウンド需要が非常に高い特殊マーケット。英語・中国語・韓国語対応のGBPが集客に直結する。" },
                { area: "蔵前", desc: "近年人気急上昇のクラフト・デザイン系エリア。感度の高いユーザーとメディア関係者が集まる。Instagram・メディア掲載との連携が集客に効果的。" },
                { area: "御徒町・上野アメ横", desc: "アメ横周辺の多国籍・安価な商業エリア。観光客+地元住民の両方に対応した集客設計が重要。御徒町周辺は宝石・ジュエリー業が多い特徴がある。" },
                { area: "入谷・根岸", desc: "下町の静かな住宅エリア。地域住民向けの生活密着型サービスの需要が安定。観光系より競合が少なく、MEO・SEOで上位表示しやすい穴場エリア。" },
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
                { n: "01", t: "観光地×地域住民の複合集客戦略設計", b: "台東区特有の「観光客向け＋地域住民向け」の複合キーワード戦略を設計します。インバウンド対応のGBP多言語設定も含めた包括的な施策を提供します。" },
                { n: "02", t: "MEO・SEO・Web制作をワンストップで完結", b: "集客に必要な施策をMEO・SEO・ホームページ制作すべて一社で完結します。台東区の複雑な集客環境にも一貫した設計で対応します。" },
                { n: "03", t: "競合分析に基づいた「勝てるキーワード」戦略", b: "浅草・上野の激戦エリアでも、蔵前・入谷など競合の少ないエリアでも、現状の競合を分析したうえで費用対効果の最も高い施策を優先して実行します。" },
                { n: "04", t: "中小企業・個人事業主の予算感に合わせた提案", b: "台東区の中小企業・個人事業主がスモールスタートできるプランをご用意しています。予算・規模に合わせた柔軟な対応が可能です。" },
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

        <FaqSection items={faqItems} heading="台東区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="台東区のWeb集客、まずは無料相談から"
          body="浅草・上野・秋葉原・蔵前エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。インバウンド対応のGBP多言語設定も承ります。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
