import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "埼玉県のSEO対策・MEO対策・Web制作｜草加・越谷・さいたま市・川口・大宮の集客支援",
  description: "埼玉県のSEO対策・MEO対策・ホームページ制作。草加市・越谷市・春日部市・川口市・さいたま市・浦和・大宮・川越の中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。",
  keywords: ["埼玉県 SEO", "埼玉県 MEO", "草加 集客", "越谷 MEO", "さいたま市 SEO", "川口 ホームページ制作", "大宮 Web制作"],
  openGraph: {
    title: "埼玉県のSEO対策・MEO対策・Web制作｜草加・越谷・さいたま市・川口の集客支援",
    description: "埼玉県の中小企業・店舗のSEO・MEO対策をサイプレスが支援。東京より競合が少なくMEOで上位を取りやすい。草加・越谷への訪問相談も対応。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/saitama" },
};

const faqItems = [
  {
    q: "埼玉県での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に近い草加市・越谷市・川口市への訪問相談に対応しています。さいたま市・春日部市・川越市・大宮など遠方のエリアはオンライン（Zoom・Google Meet）でのご相談が基本ですが、ご要望に応じて訪問も調整します。",
  },
  {
    q: "埼玉県でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "草加・越谷・春日部など東京周辺エリアはMEO競合がまだ少なく、正しい施策で1〜3か月での順位向上が期待できます。さいたま市（大宮・浦和）は競合が多めですが、3〜6か月での改善が見込まれます。",
  },
  {
    q: "埼玉県での競合状況はどうですか？",
    a: "東京都と比較して全体的に競合が少ない状態です。特に草加・越谷・春日部・川越などはMEO・SEO競合が少なく、今から始めれば短期間で上位を取れる可能性が高いです。さいたま市の大宮・浦和は競合が多めで戦略的な差別化が必要です。",
  },
  {
    q: "埼玉県の整体・カフェ・税理士にも対応できますか？",
    a: "はい。整体・カフェ・飲食店・美容室・歯科クリニック・税理士・行政書士・工務店など埼玉県のあらゆる業種に対応しています。業種別のWeb集客ノウハウをもとに最適なプランを提案します。",
  },
  {
    q: "埼玉県は東京から離れていますが、対応できますか？",
    a: "はい。草加・越谷・川口は葛飾区から電車で比較的近く、訪問相談にも対応しています。さいたま市・川越・春日部などはオンライン（Zoom）で完全対応します。施策実行はすべてリモートで実施します。",
  },
  {
    q: "東京からの移転・出店に合わせた集客支援はできますか？",
    a: "はい。東京から埼玉県へ移転・出店する企業・事業者への集客支援に対応しています。移転先エリアの競合分析・MEO・SEO戦略の設計・ホームページ制作まで一貫してサポートします。",
  },
  {
    q: "リモートのみで全ての施策を完結できますか？",
    a: "はい。初回ヒアリング・提案・施策実行・月次レポートまでZoom・メールで完全リモート対応が可能です。草加・越谷以外の埼玉県エリアはオンラインでスムーズに進められます。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県の集客支援" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモート全国対応" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/knowledge/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
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
          { "@type": "ListItem", position: 3, name: "埼玉県", item: "https://www.cypress-all.co.jp/area/saitama" },
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
              <span style={{ color: "#0d1b2a" }}>埼玉県</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Saitama Prefecture</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              埼玉県のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              東京に隣接する埼玉県（草加市・越谷市・春日部市・川口市・さいたま市・浦和・大宮・川越）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              埼玉県は東京からの移転企業・出店増加エリアで、MEO・SEO競合がまだ少ない状態です。今すぐ正しい施策を始めることで、競合が増える前に上位ポジションを確保できます。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 00_32_58.png"
            alt="埼玉県のビジネスコンサルティング"
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
              埼玉県のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "東京からの移転・出店が増加しているエリア", b: "テレワーク普及・土地コスト削減の観点から、東京から埼玉県への企業移転・出店が増加しています。草加・越谷・川口・さいたま市など交通アクセスの良いエリアへの新規出店が特に多く、新しい消費者層が継続的に流入しています。" },
                { n: "02", t: "MEO競合がまだ薄く、チャンスが大きい", b: "埼玉県内の多くのエリアはMEO競合が東京と比較して非常に少ない状態です。草加・越谷・春日部・川越など郊外エリアでは、Googleビジネスプロフィールを正しく最適化するだけで上位表示を獲得できるケースが多くあります。" },
                { n: "03", t: "草加・越谷は葛飾区からの商圏重複エリア", b: "草加市・越谷市は葛飾区と隣接・近接しており、葛飾区の商圏と重複する部分があります。サイプレスの葛飾区拠点としての強みを活かし、東京×埼玉をまたいだ広域集客戦略を設計できます。" },
                { n: "04", t: "整体・カフェ・飲食・士業のローカル需要が高い", b: "埼玉県は住宅エリアが多く、整体・美容室・カフェ・飲食店・歯科クリニック・税理士など生活サービス業への地域住民の需要が高いです。「近くで探す」Google検索からの集客が最も重要なチャネルとなっています。" },
                { n: "05", t: "Webマーケティングへの着手が遅れている事業者が多い", b: "埼玉県の中小企業・個人事業主はWebマーケティングに着手していないケースが多く、MEO・SEO・ホームページの整備が不十分なビジネスが多く存在します。今から始めれば競合が少ないうちに優位なポジションを確保できます。" },
                { n: "06", t: "大宮・浦和のビジネス集積と競合増加", b: "さいたま市の大宮・浦和エリアは埼玉県内でも特に商業集積が進んでいます。飲食・美容・医療の競合が多いため、専門特化・差別化戦略が必要ですが、消費者人口も多く集客ポテンシャルは高いです。" },
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
              埼玉県でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              埼玉県はMEO・SEO競合が少なく、正しい施策を実行すれば短期間での成果が期待できます。特に郊外エリアは今が早期参入のベストタイミングです。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「草加 整体」「草加 美容室」「越谷 カフェ」「越谷 居酒屋」「春日部 歯科」「川口 美容院」「川口 整骨院」「さいたま市 SEO」「大宮 税理士」「浦和 カフェ」「川越 観光 カフェ」——埼玉県各エリアで月間検索需要があり競合の少ないキーワードが豊富です。" },
                { n: "02", t: "MEO競合レベル：草加・越谷・川口は中程度、郊外は低〜中", b: "草加・越谷・川口は東京隣接のため一定の競合がありますが、それでも東京より少ない状態です。春日部・川越・深谷・鴻巣など郊外エリアは競合が極めて少なく、今から施策を始めれば早期に上位表示を取れます。" },
                { n: "03", t: "東京×埼玉の広域キーワード設計", b: "「葛飾区・草加市で〇〇をお探しの方」「東京東部・埼玉南部の〇〇」など東京と埼玉をまたいだ広域キーワードのSEO設計が可能です。サイプレスの葛飾区拠点の強みを活かした戦略です。" },
                { n: "04", t: "移転・出店企業向けの立ち上げ支援SEO", b: "東京から埼玉県に移転・出店した企業向けに、新拠点でのGBP設定・ローカルSEO立ち上げ支援を提供します。移転直後から集客を始められるよう、開業前からの準備支援にも対応しています。" },
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
              埼玉県でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「草加 整体」「越谷 カフェ」「さいたま市 SEO」など埼玉県各エリアの地域検索でGoogleマップ上位表示を目指します。GBPの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。" },
                { n: "02", t: "埼玉県向けローカルSEO対策", b: "「草加市 〇〇」「越谷市 〇〇」「さいたま市 〇〇」など地域名+業種キーワードで検索上位表示を目指します。東京×埼玉の広域キーワード設計で商圏を最大化する施策も提供します。" },
                { n: "03", t: "ホームページ・LP制作（オンライン対応）", b: "埼玉県内の各業種に対応したホームページ・LP制作をオンラインで完結します。草加・越谷は訪問ヒアリングにも対応可能です。Next.js構成の高速・SEO対応サイトを提供します。" },
                { n: "04", t: "移転・出店時の集客立ち上げ支援", b: "東京から埼玉県に移転・出店する事業者向けに、新拠点のGBP設定・SEO立ち上げ・ホームページ制作・SNS開設まで一貫した集客立ち上げ支援を提供します。開業前から準備することで初日から集客を最大化します。" },
                { n: "05", t: "AIO対策（AI検索対策）", b: "ChatGPT・Geminiなどで「埼玉の〇〇おすすめ」と検索した際に引用されるための情報設計を行います。E-E-A-T強化・FAQ設計・構造化データ実装でAI検索でのプレゼンスを高めます。" },
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
              埼玉県の主要エリアと地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "草加市・越谷市", desc: "葛飾区から近く訪問相談も可能な東京隣接エリア。東京東部の商圏と重複する部分があり、広域集客戦略が有効。MEO競合は中程度で差別化により上位を狙える。" },
                { area: "川口市", desc: "東京都北区・荒川区と隣接する埼玉南部の主要都市。人口約61万人で商業集積が高く、飲食・美容・医療の需要が大きい。MEO競合が増加傾向にあり戦略的な施策が必要。" },
                { area: "さいたま市（大宮・浦和）", desc: "埼玉県の政治・経済の中心地。大宮・浦和は飲食・美容・医療の競合が多いが、市場規模も大きい。ニッチ特化・コンテンツSEOで勝てるポジションを見つけることが重要。" },
                { area: "春日部市・越谷市周辺", desc: "東武スカイツリーライン沿線の住宅エリア。MEO競合が少なく、基本的なGBP最適化で上位を取れる可能性が高い穴場エリア。" },
                { area: "川越市", desc: "「小江戸」として有名な観光都市。観光客×地元住民の二重集客が可能で、観光関連コンテンツのSEO・インバウンド対応MEOが効果的。" },
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
              埼玉県でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要・今がチャンス", desc: "東京より競合が少ない埼玉ではMEOの費用対効果が高い。今から施策を始めれば早期に上位ポジションを確保できる。特に郊外エリアはほぼ空白状態で即効性が期待できる。" },
                { label: "ローカルSEO", tag: "中長期で安定", desc: "「〇〇市 〇〇」のキーワードで安定した検索流入を構築。東京×埼玉の広域キーワードで商圏を最大化できる。コンテンツSEOとの組み合わせで長期的な集客基盤を作る。" },
                { label: "Web制作", tag: "基盤", desc: "MEO・SEOからの流入を来店・問い合わせに変換する高品質なホームページ。埼玉の移住層・ファミリー層への信頼感あるデザインとCV設計が成果を最大化する。" },
                { label: "SNS（Instagram・LINE）", tag: "補完", desc: "草加・越谷・川越など住宅エリアの生活密着コミュニティへの浸透に有効。LINE公式アカウントでリピーター育成、Instagramで新規認知拡大を並行して実施。" },
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
              サイプレスに埼玉県の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "草加・越谷への訪問相談対応", b: "葛飾区から近い草加市・越谷市・川口市への訪問相談に対応しています。その他の埼玉県エリアはオンライン（Zoom）で完全対応します。現地でのヒアリングから的確な施策設計を行います。" },
                { n: "02", t: "「競合が少ない今」が参入の最大チャンス", b: "埼玉県の多くのエリアはMEO・SEO競合がまだ少ない状態です。今から施策を開始することで、競合が増える前に優位なポジションを確保できます。早期参入アドバンテージを最大限に活用しましょう。" },
                { n: "03", t: "東京×埼玉の広域集客設計", b: "葛飾区（東京）と草加・越谷（埼玉）をまたいだ広域SEO・MEO戦略を一社で設計・実行できます。より広い商圏からの集客を実現するための施策を提供します。" },
                { n: "04", t: "移転・出店立ち上げを一気通貫でサポート", b: "東京から埼玉へ移転・出店する企業の集客立ち上げを、GBP設定・SEO・ホームページ制作まで一貫してサポートします。開業日から集客が始められるよう準備を進めます。" },
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

        <FaqSection items={faqItems} heading="埼玉県に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="埼玉県のWeb集客、まずは無料相談から"
          body="草加市・越谷市・さいたま市・川口市・春日部市のSEO対策・MEO対策・ホームページ制作のご相談は無料です。競合が少ない今が始め時です。オンライン・訪問いずれも対応しています。"
        />
      </main>
      <Footer />
    </>
  );
}
