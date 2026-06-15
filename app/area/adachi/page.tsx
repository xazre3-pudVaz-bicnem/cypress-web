import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "足立区のSEO対策・MEO対策・ホームページ制作｜北千住・竹ノ塚・西新井の集客支援",
  description: "足立区のSEO対策・MEO対策・ホームページ制作。北千住・竹ノ塚・西新井・綾瀬・梅島・六町エリアの中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。訪問相談対応。",
  keywords: ["足立区 SEO", "足立区 MEO", "北千住 集客", "竹ノ塚 MEO", "西新井 ホームページ制作", "足立区 Web制作", "綾瀬 SEO"],
  openGraph: {
    title: "足立区のSEO対策・MEO対策・ホームページ制作｜北千住・竹ノ塚・西新井の集客支援",
    description: "足立区の中小企業・店舗のSEO・MEO対策を葛飾区隣接のサイプレスが支援。北千住・竹ノ塚・西新井・綾瀬エリアへの訪問対応も迅速。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/adachi" },
};

const faqItems = [
  {
    q: "足立区での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に隣接する足立区への訪問相談に迅速に対応しています。北千住・竹ノ塚・西新井・綾瀬・梅島・六町エリアへの訪問打ち合わせが可能です。まずはお問い合わせください。",
  },
  {
    q: "足立区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "業種・エリアの競合状況によりますが、正しい施策で1〜3か月での順位向上が目安です。北千住は競合が多いため時間がかかりますが、竹ノ塚・六町・梅島などはまだ競合が少なくより早く効果が出るケースがあります。",
  },
  {
    q: "足立区での競合状況はどうですか？",
    a: "北千住・西新井は飲食・美容・医療ともに競合が増加傾向にありますが、竹ノ塚・梅島・六町などはMEO・SEOの競合がまだ少ない状態です。競合分析を行ったうえで、勝てるエリア・キーワードを優先して施策を設計します。",
  },
  {
    q: "足立区の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。飲食店・美容室・整骨院・歯科クリニック・税理士・行政書士・工務店など足立区のあらゆる業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "足立区専門の知識はありますか？",
    a: "はい。葛飾区に隣接する足立区のエリア特性・主要駅周辺の競合状況・ターゲット層の行動パターンを把握したうえで集客戦略を立案します。北千住の商業集積・竹ノ塚の住宅エリア特性など、地域ごとに最適化した施策を提供します。",
  },
  {
    q: "リモートでの対応はできますか？",
    a: "はい。Zoom・Google Meet・メールでのリモート対応も可能です。足立区の方には訪問相談を推奨していますが、ご都合に合わせて柔軟に対応します。",
  },
  {
    q: "MEOとSEO、どちらを先に始めるべきですか？",
    a: "来店型ビジネス（飲食・美容・クリニック等）はMEO対策を優先するのが一般的です。Googleマップの検索で即日来店につながる効果が期待できます。一方、比較検討が必要なサービス（士業・工務店等）はSEOとMEOを並行して取り組むことをお勧めします。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容業向け支援" },
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
          { "@type": "ListItem", position: 3, name: "足立区", item: "https://www.cypress-all.co.jp/area/adachi" },
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
              <span style={{ color: "#0d1b2a" }}>足立区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Adachi Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              足立区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区に隣接する足立区（北千住・竹ノ塚・西新井・綾瀬・梅島・六町）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              足立区は東京北東部の主要商業エリアで、飲食・美容・医療・士業のニーズが高く、MEO対策の費用対効果が高いエリアが多数あります。葛飾区隣接のため訪問相談も迅速に対応します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="足立区のデジタルマーケティング"
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
              足立区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "北千住を中心とした主要商業エリア", b: "北千住は東京メトロ・JR・東武・つくばエクスプレスが乗り入れる一大ターミナルで、学生・社会人・ファミリー層が集まる足立区最大の商業エリアです。競合が増加しているため、MEO・SEOでの差別化が集客のカギとなります。" },
                { n: "02", t: "竹ノ塚・西新井・六町は穴場エリア", b: "北千住と比べて竹ノ塚・梅島・六町・綾瀬などの地域は飲食・美容・医療いずれもMEO・SEOの競合が少ない状態です。今のうちに正しく施策を打てば、少ない予算で上位を取れるチャンスがあります。" },
                { n: "03", t: "飲食・美容・医療・士業のニーズが高い", b: "足立区は人口68万人超の大規模な区です。居酒屋・カフェ・美容室・整骨院・歯科・税理士・行政書士など、地域住民の日常的なサービスへの需要が非常に高く、地域密着型ビジネスの集客ポテンシャルは大きいです。" },
                { n: "04", t: "スマートフォンでの「近くで探す」行動が主流", b: "足立区の消費者は「北千住 居酒屋」「竹ノ塚 美容室」などスマートフォンで地域名+業種を検索して来店先を決める行動が一般的です。Googleマップでの上位表示（MEO）は来店型ビジネスの必須施策です。" },
                { n: "05", t: "葛飾区からの商圏重複でエリア拡大が有利", b: "足立区と葛飾区は商圏が重複するエリアが多く、葛飾区のMEO・SEO施策と連動した足立区攻略が効率的です。両区をまたいだ集客戦略により、より広い商圏からの集客が可能になります。" },
                { n: "06", t: "Webマーケティング未着手の事業者が多い", b: "足立区の中小企業・個人事業主はWebマーケティングの活用が十分でないケースが多く見られます。Googleビジネスプロフィールを最適化するだけで大きな改善が期待できる事業者が多い、チャンスの多いエリアです。" },
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
              足立区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              足立区はエリアによってMEO競合レベルが大きく異なります。北千住周辺は競合が多いため戦略的な差別化が必要ですが、郊外エリアは低コストで上位を狙えます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「北千住 居酒屋」「北千住 美容室」「竹ノ塚 歯科」「竹ノ塚 整骨院」「西新井 カフェ」「西新井 美容院」「綾瀬 ランチ」「梅島 整体」「六町 クリニック」——エリアと業種の組み合わせで、競合の薄い狙い目キーワードを特定します。" },
                { n: "02", t: "MEO競合レベル：北千住は中〜高、その他は低〜中", b: "北千住は飲食・美容ともに競合が多く、差別化のための施策（写真クオリティ・口コミ数・投稿頻度）が重要です。竹ノ塚・西新井・梅島・六町・綾瀬は競合が少なく、基本的なGBP最適化だけで上位表示が狙えるケースも多くあります。" },
                { n: "03", t: "ローカルSEOのキーワード設計", b: "「足立区 〇〇」「北千住 〇〇」「竹ノ塚 〇〇」などの地域名+業種キーワードで検索上位を目指します。エリア特化のランディングページ作成・Googleビジネスプロフィールとの連携で相乗効果を生み出します。" },
                { n: "04", t: "葛飾区×足立区の広域キーワード戦略", b: "「葛飾区・足立区で〇〇をお探しの方へ」という広域対応のコンテンツを設計することで、両区の検索ユーザーを同時に取り込む戦略も有効です。サイプレスの拠点特性を最大限に活かした施策を提供します。" },
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
              足立区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「北千住 居酒屋」「竹ノ塚 美容室」「西新井 歯科」など足立区各エリアの地域検索でGoogleマップ上位表示を目指します。Googleビジネスプロフィールの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。" },
                { n: "02", t: "地域密着型ローカルSEO", b: "「足立区 〇〇」「北千住 〇〇」などのローカルキーワードでの上位表示を目指します。エリア特化のコンテンツ作成・内部SEO最適化・被リンク獲得まで一貫した施策を実施します。" },
                { n: "03", t: "ホームページ・LP制作（訪問ヒアリング対応）", b: "飲食店・美容室・クリニック・士業など足立区の各業種に対応したホームページ・LP制作を行います。訪問でのヒアリングから制作・納品・保守まで一貫してサポートします。Next.js構成の高速・SEO対応サイトを提供します。" },
                { n: "04", t: "SNS運用支援（Instagram・LINE公式）", b: "Instagram・LINE公式アカウントの運用代行・コンサルティングを提供します。足立区の地域コミュニティを活かしたフォロワー獲得・来店促進施策を設計します。" },
                { n: "05", t: "Web集客の総合コンサルティング", b: "MEO・SEO・ホームページ・SNSの現状分析と改善提案を、訪問または対面形式で行います。「何から始めれば良いかわからない」という方でも、優先施策を明確にしてスタートできます。" },
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
              足立区の主要スポット・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "北千住", desc: "5路線が乗り入れる足立区最大のターミナル駅。学生・社会人・ファミリーと多様な客層が集まる。飲食・美容の競合が多いが、集客ポテンシャルも区内最高。" },
                { area: "竹ノ塚", desc: "東武スカイツリーラインの竹ノ塚駅周辺。ファミリー層・シニア層が多い住宅エリアで、医療・美容・飲食のローカル需要が高い。MEO競合は比較的少ない穴場エリア。" },
                { area: "西新井", desc: "東武大師線・日比谷線が乗り入れる副都心的なエリア。ショッピングモール（アリオ西新井）があり、周辺の中小店舗・クリニックへの競合対策が重要。" },
                { area: "綾瀬", desc: "東京メトロ千代田線の綾瀬駅周辺。千代田線沿いの通勤客・住民が多く、カフェ・飲食・美容のMEO需要がある。北千住より競合が少なく効率的に上位を狙える。" },
                { area: "梅島・六町", desc: "東武スカイツリーライン沿線の住宅エリア。地域住民の生活密着型需要が高く、MEO・SEO競合が少ない。今から着手すれば早期に上位表示を獲得できるエリア。" },
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
              足立区でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要", desc: "「北千住 〇〇」「竹ノ塚 〇〇」など地域検索でのGoogleマップ上位表示。来店型ビジネスに最も効果が高いチャネル。エリアによって競合レベルが異なるため、戦略的な設計が必要。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「足立区 〇〇」「北千住 〇〇」などのキーワードでの検索上位表示。MEOとの相乗効果で信頼感・認知度を高め、長期的な集客基盤を構築する。" },
                { label: "Web制作", tag: "基盤", desc: "MEO・SEOからの流入を確実に問い合わせ・予約・来店に変換する高品質なホームページ。スマートフォン対応・高速表示・わかりやすいCV設計が必須。" },
                { label: "SNS（Instagram・LINE）", tag: "補完", desc: "地域コミュニティへのアプローチに有効。LINE公式アカウントでのリピーター獲得・Instagramでの認知拡大を、MEO・SEOと組み合わせて実施する。" },
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
              サイプレスに足立区の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "葛飾区隣接 — 訪問相談が迅速", b: "葛飾区に拠点があるため、足立区への訪問相談・打ち合わせを迅速に行えます。北千住・竹ノ塚・西新井・綾瀬エリアへの対面サポートで、丁寧なヒアリングと現状分析を提供します。" },
                { n: "02", t: "エリア別の競合分析で「勝てる戦略」を設計", b: "北千住・竹ノ塚・西新井・梅島・六町それぞれの競合状況を分析し、最も効率よく成果が出る施策を優先して実行します。費用対効果を最重視した提案を行います。" },
                { n: "03", t: "飲食・美容・医療・士業の業種別ノウハウ", b: "足立区で需要の高い飲食店・美容室・クリニック・整骨院・士業など各業種のWeb集客ノウハウを持っています。業種に特化した最適な施策で成果を最大化します。" },
                { n: "04", t: "MEO・SEO・Web制作をワンストップで", b: "MEO対策・SEO対策・ホームページ制作をすべてサイプレスに依頼できます。一貫した集客戦略を実行することで、複数業者への依頼コスト・コミュニケーションコストを削減できます。" },
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

        <FaqSection items={faqItems} heading="足立区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="足立区のWeb集客、まずは無料相談から"
          body="北千住・竹ノ塚・西新井・綾瀬エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。葛飾区隣接のため訪問対応も迅速です。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
