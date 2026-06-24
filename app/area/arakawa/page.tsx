import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "荒川区のSEO対策・MEO対策・ホームページ制作｜南千住・三ノ輪・町屋・西日暮里の集客支援｜株式会社サイプレス",
  description: "荒川区のSEO対策・MEO対策・ホームページ制作。南千住・三ノ輪・町屋・荒川・西日暮里・日暮里エリアの中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。訪問相談対応。",
  keywords: ["荒川区 SEO", "荒川区 MEO", "荒川区 ホームページ制作", "南千住 MEO", "町屋 集客", "西日暮里 SEO", "日暮里 Web制作", "荒川区 Web集客"],
  openGraph: {
    title: "荒川区のSEO対策・MEO対策・ホームページ制作｜南千住・町屋・西日暮里の集客支援｜株式会社サイプレス",
    description: "荒川区の中小企業・店舗のSEO・MEO対策を葛飾区拠点のサイプレスが支援。南千住・三ノ輪・町屋・西日暮里エリアへの訪問対応も迅速。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/arakawa" },
};

const faqItems = [
  {
    q: "荒川区での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に隣接する荒川区への訪問相談に対応しています。南千住・三ノ輪・町屋・荒川・西日暮里・日暮里エリアへの訪問打ち合わせが可能です。まずはお問い合わせください。",
  },
  {
    q: "荒川区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "業種・エリアの競合状況によりますが、正しい施策で2〜4ヶ月での順位向上が目安です。荒川区は東京23区の中で競合が中程度のエリアが多く、適切な施策で安定した上位表示が目指せます。",
  },
  {
    q: "荒川区の競合状況はどうですか？",
    a: "南千住・西日暮里周辺は再開発が進み競合が増えていますが、町屋・荒川・三ノ輪などはMEO・SEO競合がまだ少なく費用対効果の高い施策が実施できます。競合分析を行ったうえで最適なキーワード戦略を設計します。",
  },
  {
    q: "荒川区の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。飲食店・美容室・整骨院・歯科クリニック・士業・工務店など荒川区のあらゆる業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "南千住エリアの再開発で集客環境は変わっていますか？",
    a: "はい。南千住は大型マンション建設・商業施設整備が進み、新住民・若い世代が増えています。これにより「近くで探す」スマートフォン検索が増加しており、MEO対策の重要性が高まっています。",
  },
  {
    q: "町屋・荒川エリアのMEO競合はどのくらいですか？",
    a: "町屋・荒川エリアは古くからの商店街が多く残り、Web集客に移行している事業者が比較的少ないです。今から施策を始めることで少ない予算でも上位表示を狙えるチャンスがあります。",
  },
  {
    q: "荒川区でホームページ制作と同時にSEO対策もできますか？",
    a: "はい。サイプレスではホームページ制作の段階からSEOを組み込んで設計します。キーワード選定・サイト構造・メタ情報・内部リンク・スピード最適化をすべて初期から対応するため、公開直後から検索エンジンに評価されやすいサイトが完成します。",
  },
  {
    q: "都電荒川線沿いのエリアも対応していますか？",
    a: "はい。都電荒川線の町屋・荒川区役所前・荒川一中前・三ノ輪橋など各停留所周辺エリアのMEO・SEO対策にも対応しています。沿線の地域特性を把握したうえで集客戦略を設計します。",
  },
  {
    q: "荒川区の飲食店がMEOで効果を出すために最低限やるべきことは何ですか？",
    a: "最低限取り組むべきは、①Googleビジネスプロフィールの情報を完全に埋める（営業時間・住所・電話番号・メニュー）、②高品質な写真を20枚以上登録する、③口コミへの丁寧な返信を行う、④週1回以上の投稿を継続するの4点です。町屋・荒川エリアではこれだけで大きな改善が期待できます。",
  },
  {
    q: "月額いくらから始められますか？",
    a: "MEO対策は月額2〜3万円台から、SEO対策は月額3〜5万円台からのプランをご用意しています。荒川区の中小企業・個人事業主の予算感に合わせた提案を心がけています。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/taito", label: "台東区", desc: "台東区の集客支援" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/kita", label: "北区", desc: "北区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/column/arakawa-meo-seo-guide", label: "荒川区MEO・SEOガイド", desc: "詳細コラム記事" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容業向け支援" },
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
          { "@type": "ListItem", position: 3, name: "荒川区", item: "https://www.cypress-all.co.jp/area/arakawa" },
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
              <span style={{ color: "#0d1b2a" }}>荒川区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Arakawa Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              荒川区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              南千住・三ノ輪・町屋・荒川・西日暮里・日暮里の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              荒川区は再開発が進む南千住から下町情緒豊かな町屋まで多様なエリアを持ちます。地域特性に合わせたMEO・SEO戦略で集客力を最大化します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="荒川区のデジタルマーケティング"
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
              荒川区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "南千住の急速な再開発と新住民の増加", b: "南千住はマンション建設・商業施設整備が続き、若い世代・共働き世帯が増加しています。スマートフォンで「近くの〇〇」を検索する行動が定着しており、MEO対策の効果が高まっているエリアです。" },
                { n: "02", t: "町屋・荒川エリアは穴場の集客機会", b: "古くからの商店街が残る町屋・荒川エリアは、Web集客に取り組んでいる事業者がまだ少ないです。今から適切なMEO・SEO施策を始めることで、少ない予算で大きな集客効果が期待できます。" },
                { n: "03", t: "都電荒川線による地域住民との密接なつながり", b: "都電荒川線は地域住民の生活路線として機能しており、沿線のコミュニティに密着した飲食・美容・サービス業への需要が安定しています。沿線住民をターゲットにしたローカル集客が有効です。" },
                { n: "04", t: "西日暮里・日暮里は交通の要所", b: "JR山手線・東京メトロ千代田線・京成線が通る西日暮里・日暮里は通勤客も多いエリアです。「駅からの近さ」を訴求するMEO・SEO設計が来店につながります。" },
                { n: "05", t: "飲食・美容・医療・サービス業の需要が高い", b: "荒川区の人口は約22万人。地域住民向けの飲食・美容・整骨院・歯科・学習塾など生活密着型ビジネスの需要が高く、ローカル集客のポテンシャルは十分にあります。" },
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
              荒川区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              荒川区はエリアによって集客環境が異なります。再開発が進む南千住は競合が増えているため戦略的な差別化が必要ですが、町屋・荒川エリアは低コストで上位を狙えます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「南千住 居酒屋」「南千住 美容室」「町屋 整骨院」「町屋 歯科」「西日暮里 カフェ」「日暮里 ランチ」「三ノ輪 クリニック」「荒川区 税理士」——エリアと業種の組み合わせで、競合の薄い狙い目キーワードを特定します。" },
                { n: "02", t: "MEO競合レベル：南千住は中〜高、その他は低〜中", b: "南千住は再開発で競合が増えていますが、町屋・荒川・三ノ輪は競合が少なく基本的なGBP最適化だけで上位表示が狙えるケースが多くあります。" },
                { n: "03", t: "荒川区のローカルSEOキーワード設計", b: "「荒川区 〇〇」「南千住 〇〇」「町屋 〇〇」などの地域名+業種キーワードに対応したコンテンツページを作成し、Googleビジネスプロフィールとの連携で相乗効果を生み出します。" },
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
              荒川区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「南千住 居酒屋」「町屋 美容室」「西日暮里 整体」など荒川区各エリアの地域検索でGoogleマップ上位表示を目指します。Googleビジネスプロフィールの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。" },
                { n: "02", t: "地域密着型ローカルSEO", b: "「荒川区 〇〇」「南千住 〇〇」「町屋 〇〇」などのローカルキーワードでの上位表示を目指します。エリア特化のコンテンツ作成・内部SEO最適化を実施します。" },
                { n: "03", t: "ホームページ・LP制作（訪問ヒアリング対応）", b: "飲食店・美容室・クリニック・士業など荒川区の各業種に対応したホームページ・LP制作を行います。Next.js構成の高速・SEO対応サイトを提供します。" },
                { n: "04", t: "Web集客の総合コンサルティング", b: "MEO・SEO・ホームページの現状分析と改善提案を、訪問または対面形式で行います。「何から始めれば良いかわからない」という方でも、優先施策を明確にしてスタートできます。" },
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

        {/* Section 4: 主要エリア */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              荒川区の主要エリア・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "南千住", desc: "JR常磐線・東京メトロ日比谷線・つくばエクスプレスが乗り入れる交通の要所。再開発でマンション・商業施設が増加し、新住民向けの生活サービス需要が急増しています。" },
                { area: "三ノ輪・三ノ輪橋", desc: "東京メトロ日比谷線三ノ輪駅・都電荒川線三ノ輪橋停留所周辺。下町の商店街が残り、地域住民密着型の商業エリアです。MEO競合が少なく穴場エリア。" },
                { area: "町屋", desc: "東京メトロ千代田線・都電荒川線が交差する住宅・商業エリア。古い商店街と新しい店舗が混在。地元住民の日常的なサービスへの需要が安定しています。" },
                { area: "荒川・荒川区役所前", desc: "都電荒川線沿いの地域住民エリア。大規模商業施設は少なく、個人店・小規模事業者が多い地域密着型エリア。MEO・SEO競合が少なく早期効果が期待できます。" },
                { area: "西日暮里・日暮里", desc: "JR山手線・東京メトロ千代田線・京成線が通る交通利便性の高いエリア。通勤客・住民が多く、飲食・美容・整骨院などの需要が高いです。" },
                { area: "熊野前・東尾久・西尾久", desc: "都電荒川線沿いの静かな住宅エリア。地域住民向けの生活密着型サービスへの需要があり、MEO競合が非常に少ない穴場エリアです。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "17px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry Guide</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              荒川区における業種別の集客ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                { industry: "飲食店・カフェ・居酒屋", points: "南千住は再開発で競合が増えていますが、三ノ輪・町屋・荒川エリアはMEO競合が少なく基本施策で上位が狙えます。口コミ数・写真品質・投稿頻度で差をつけることが重要です。" },
                { industry: "美容室・ヘアサロン・ネイルサロン", points: "「南千住 美容室」「町屋 ヘアサロン」「西日暮里 カット」などのキーワードでMEO設計を行います。価格・立地・メニューの差別化をGBPに明確に記載することが集客に直結します。" },
                { industry: "整骨院・接骨院・整体院", points: "「駅名＋整骨院」「駅名＋腰痛」など症状と地名を組み合わせたキーワードでMEO・SEOを設計します。町屋・三ノ輪エリアは競合が少なく早期効果が見込めます。" },
                { industry: "歯科クリニック・医療機関", points: "医療系は「駅名＋診療科目」でMEO・SEO設計を行います。口コミへの丁寧な返信・予約システムとGBPの連動が新患獲得に直結します。" },
                { industry: "学習塾・習い事教室", points: "荒川区は子育て世帯が多いエリアです。「町屋 学習塾」「南千住 英会話」などのキーワードでMEO・SEOを設計し、無料体験申込みへの導線を整備することが重要です。" },
                { industry: "工務店・リフォーム・内装", points: "「荒川区 リフォーム」「南千住 外壁塗装」などの工事系キーワードは単価が高く、SEOで上位を取ると費用対効果が非常に高い業種です。施工事例・ビフォーアフターの充実が重要です。" },
              ].map((item) => (
                <div key={item.industry} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "12px" }}>{item.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Section: サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
              {[
                { n: "01", t: "葛飾区隣接で荒川区への訪問対応が迅速", b: "葛飾区に拠点を置くサイプレスは、隣接する荒川区各エリアへの訪問打ち合わせに迅速に対応します。対面での詳細なヒアリングと戦略立案が可能です。" },
                { n: "02", t: "「勝てるキーワード」から逆算した戦略", b: "荒川区の各エリアの競合状況を精緻に分析したうえで「今最も費用対効果が高い施策」を優先して実行します。予算の無駄を最小化した提案を心がけます。" },
                { n: "03", t: "MEO・SEO・Web制作をワンストップで完結", b: "集客に必要な施策をMEO・SEO・ホームページ制作すべて一社で完結します。一貫した集客設計で相乗効果を生み出します。" },
                { n: "04", t: "中小企業・個人事業主の予算感に合わせた提案", b: "荒川区の中小企業・個人事業主がスモールスタートできるプランから、事業成長に合わせて段階的に拡張できる柔軟な料金体系をご用意しています。" },
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

        <FaqSection items={faqItems} heading="荒川区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="荒川区のWeb集客、まずは無料相談から"
          body="南千住・三ノ輪・町屋・西日暮里・日暮里エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。葛飾区隣接のため訪問対応も迅速です。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
