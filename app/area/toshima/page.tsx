import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "豊島区のSEO対策・MEO対策・ホームページ制作｜池袋・巣鴨・大塚・目白の集客支援｜株式会社サイプレス",
  description: "豊島区のSEO対策・MEO対策・ホームページ制作。池袋・巣鴨・大塚・目白・椎名町エリアの中小企業・店舗のWeb集客。池袋の激戦エリアも競合分析で攻略。",
  keywords: ["豊島区 SEO", "豊島区 MEO", "池袋 MEO", "池袋 SEO対策", "巣鴨 集客", "大塚 ホームページ制作", "豊島区 Web集客", "池袋 Web制作"],
  openGraph: {
    title: "豊島区のSEO対策・MEO対策・ホームページ制作｜池袋・巣鴨・大塚・目白の集客支援｜株式会社サイプレス",
    description: "豊島区の中小企業・店舗のSEO・MEO対策をサイプレスが支援。池袋の激戦エリアも競合分析で攻略。巣鴨・大塚エリアの穴場集客戦略も提供。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/toshima" },
};

const faqItems = [
  {
    q: "豊島区でのMEO対策・SEO対策を依頼できますか？",
    a: "はい。サイプレスは豊島区全域（池袋・巣鴨・大塚・目白・要町・千早・椎名町等）のMEO対策・SEO対策・ホームページ制作に対応しています。",
  },
  {
    q: "池袋エリアはMEO競合が非常に激しいと聞きましたが、攻略できますか？",
    a: "池袋は東京屈指のMEO激戦エリアですが、エリア×業種×特徴を細かく絞り込むことで、競合の少ないニッチポジションを確保できます。例えば「池袋西口 整骨院」「池袋北口 個室居酒屋」など絞り込んだキーワードでの差別化が有効です。競合分析をもとに具体的な攻略戦略をご提案します。",
  },
  {
    q: "巣鴨エリアはMEO対策に向いていますか？",
    a: "巣鴨は「おばあちゃんの原宿」として知られるシニア向けエリアですが、観光客・地域住民ともに一定の需要があります。競合が池袋ほど多くなく、飲食・物販・生活サービスで上位表示を狙いやすい環境です。シニア向けサービスを提供している場合は特に高い費用対効果が期待できます。",
  },
  {
    q: "大塚エリアの集客はどんな施策が効果的ですか？",
    a: "大塚はJR山手線が通り昼夜問わず人が行き交うエリアです。居酒屋・クラブ・カフェなどの夜間営業店舗が多いエリアで、「深夜営業」「早朝営業」「24時間」などの属性をGBPに設定することで他店との差別化が可能です。",
  },
  {
    q: "豊島区のホームページ制作で対応可能な業種を教えてください",
    a: "豊島区の飲食・美容・整骨院・クリニック・学習塾・塾・士業・エステ・リラクゼーション・物販・不動産など、あらゆる業種に対応しています。業種ごとの集客のポイントを熟知したうえで、最適なホームページ・LP制作をご提供します。",
  },
  {
    q: "豊島区は国際都市としてインバウンド対応も必要ですか？",
    a: "池袋はリトルチャイナと呼ばれるほど中国語圏のコミュニティが集まるエリアです。飲食・物販・エンターテインメントでは中国語対応のGBP設定が集客に直結します。サイプレスでは多言語対応のGBP設定もサポートしています。",
  },
  {
    q: "月額いくらから始められますか？",
    a: "MEO対策は月額2〜3万円台から、SEO対策は月額3〜5万円台からのプランをご用意しています。豊島区の中小企業・個人事業主の予算感に合わせた提案を心がけています。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/kita", label: "北区", desc: "北区の集客支援" },
  { href: "/area/arakawa", label: "荒川区", desc: "荒川区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/column/toshima-meo-seo-guide", label: "豊島区MEO・SEOガイド", desc: "詳細コラム記事" },
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
          { "@type": "ListItem", position: 3, name: "豊島区", item: "https://www.cypress-all.co.jp/area/toshima" },
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
              <span style={{ color: "#0d1b2a" }}>豊島区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Toshima Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              豊島区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              池袋・巣鴨・大塚・目白・要町の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              池袋という東京有数の激戦エリアを抱えながら、巣鴨・大塚など穴場エリアも持つ豊島区。精緻な競合分析でエリアごとに最適な集客戦略を設計します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.jpg" alt="豊島区のデジタルマーケティング" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              豊島区のビジネス環境と集客の特性
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "池袋：東京3大ターミナルのMEO激戦区", b: "池袋は新宿・渋谷と並ぶ東京3大ターミナルで、日乗車人数250万人超の巨大商業エリアです。MEO競合が非常に激しいですが、エリア×業種×特徴を絞り込んだニッチポジション戦略で上位を獲得する余地があります。" },
                { n: "02", t: "池袋×中国語圏コミュニティ：インバウンド集客の特殊市場", b: "池袋は「日本のリトルチャイナ」と称されるほど中国語圏コミュニティが集まります。飲食・物販・エンターテインメントでは中国語対応GBPが集客に直結します。" },
                { n: "03", t: "巣鴨：シニア層×観光需要の特殊エリア", b: "「おばあちゃんの原宿」として知られる巣鴨は、高齢者・観光客向けの物販・飲食の需要があります。池袋と比べてMEO競合が少なく、適切な施策で安定した上位表示が目指せます。" },
                { n: "04", t: "大塚：昼夜の人流が豊かな多目的エリア", b: "山手線大塚駅周辺は昼間のオフィス・商業需要と夜間の飲食・エンターテインメント需要が共存します。時間帯別のGBP情報設定が集客に直結します。" },
                { n: "05", t: "目白・椎名町・要町：穴場の住宅エリア", b: "目白・椎名町・要町は閑静な住宅エリアで、地域住民向けの生活密着型ビジネスの需要が安定しています。MEO・SEO競合が少なく費用対効果の高い施策が実施できます。" },
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
              豊島区の主要エリア・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "池袋（東口・西口）", desc: "東口はデパート・エンタメ施設が集中。西口はオフィス・飲食が集まる。エリアを東口/西口/北口に分けた細かい競合分析と、業種を絞り込んだニッチポジション戦略が攻略の鍵。" },
                { area: "巣鴨", desc: "シニア向け商店街が有名な観光スポット。観光客＋地域高齢者の両方に対応した集客設計が有効。MEO競合は池袋より少なく攻略しやすいエリア。" },
                { area: "大塚", desc: "山手線大塚駅周辺の昼夜型商業エリア。飲食・美容・整体の需要が高い。「深夜営業」「早朝可」などGBP属性の詳細設定が競合との差別化ポイント。" },
                { area: "目白", desc: "学習院大学・目白大学が近い文教エリア。学生・住民向けの飲食・書店・カフェ・学習サービスの需要あり。落ち着いた雰囲気に合わせたブランドコンテンツ設計が有効。" },
                { area: "要町・千早", desc: "閑静な住宅エリア。地域住民向けの医療・美容・飲食の需要が安定。MEO・SEO競合が少なく、スモールスタートでも大きな集客改善が見込める穴場。" },
                { area: "椎名町・長崎", desc: "西武池袋線沿いの住宅エリア。昔ながらの商店街が残り、地元密着型ビジネスの需要が安定。基本施策だけで長期安定した集客が実現しやすい環境。" },
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
                { n: "01", t: "池袋激戦区の競合分析と「勝てる隙間」の特定", b: "池袋の複雑なMEO競合環境を精緻に分析し、エリア×業種×特徴の組み合わせで競合の少ないニッチポジションを特定します。限られた予算で最大の集客効果を実現する戦略を設計します。" },
                { n: "02", t: "インバウンド（中国語圏）対応を含めたGBP設計", b: "池袋の中国語圏コミュニティに対応した、中国語GBP説明文・多言語口コミ返信のサポートを提供します。インバウンド集客が重要な業種では差別化ポイントになります。" },
                { n: "03", t: "MEO・SEO・Web制作をワンストップで完結", b: "集客に必要な施策をMEO・SEO・ホームページ制作すべて一社で完結します。一貫した集客設計で相乗効果を生み出します。" },
                { n: "04", t: "中小企業・個人事業主の予算感に合わせた提案", b: "豊島区の中小企業・個人事業主がスモールスタートできるプランをご用意しています。池袋の激戦エリアでも、巣鴨・大塚などの穴場エリアでも、最適なプランをご提案します。" },
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

        <FaqSection items={faqItems} heading="豊島区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="豊島区のWeb集客、まずは無料相談から"
          body="池袋・巣鴨・大塚・目白エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。池袋の激戦エリアも競合分析で攻略します。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
