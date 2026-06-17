import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "埼玉県のSEO対策・MEO対策・Web制作｜草加・越谷・さいたま市・川口・大宮の集客支援｜株式会社サイプレス",
  description: "埼玉県のSEO対策・MEO対策・ホームページ制作。草加市・越谷市・春日部市・川口市・さいたま市・浦和・大宮・川越の中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。",
  keywords: ["埼玉県 SEO", "埼玉県 MEO", "草加 集客", "越谷 MEO", "さいたま市 SEO", "川口 ホームページ制作", "大宮 Web制作", "埼玉 MEO対策", "埼玉 ローカルSEO"],
  openGraph: {
    title: "埼玉県のSEO対策・MEO対策・Web制作｜草加・越谷・さいたま市・川口の集客支援｜株式会社サイプレス",
    description: "埼玉県の中小企業・店舗のSEO・MEO対策をサイプレスが支援。東京より競合が少なくMEOで上位を取りやすい。草加・越谷への訪問相談も対応。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
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
    q: "埼玉県でのMEO競合状況はどうですか？",
    a: "東京都と比較して全体的に競合が少ない状態です。特に草加・越谷・春日部・川越などはMEO・SEO競合が少なく、今から始めれば短期間で上位を取れる可能性が高いです。さいたま市の大宮・浦和は競合が多めで戦略的な差別化が必要ですが、それでも東京都心と比べれば取り組みやすい水準です。",
  },
  {
    q: "さいたま市（大宮・浦和）の集客はどんな特性がありますか？",
    a: "大宮は埼玉最大のターミナル駅を持つ商業集積エリアで、飲食・美容・医療・士業の競合が多い反面、集客ポテンシャルも高いです。浦和はビジネス層・公務員層が多く、士業・コンサル・高単価サービスとの相性が良好です。両エリアとも専門特化とコンテンツSEOを組み合わせた戦略が有効です。",
  },
  {
    q: "川口市と東京の商圏が重複しているとはどういう意味ですか？",
    a: "川口市は東京都足立区・葛飾区と隣接しており、住民の生活圏・購買行動が東京と重複しています。「川口 整体」と検索する人が足立区在住の場合もあり、川口市のGBPが東京東部の検索でも表示されることがあります。この商圏の重複を活かした広域MEO・SEO設計がサイプレスの強みです。",
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
  {
    q: "埼玉県全域に対応していますか？さいたま市以外も可能ですか？",
    a: "はい、埼玉県全域に対応しています。さいたま市（大宮・浦和・与野）をはじめ、川口市・草加市・越谷市・春日部市・川越市・所沢市・熊谷市・深谷市・東松山市など県内すべてのエリアの集客支援をオンライン中心で提供しています。",
  },
  {
    q: "MEO対策とSEO対策はどちらを先に始めるべきですか？",
    a: "来店型ビジネス（飲食・美容・整体・クリニックなど）はMEO対策を優先することをお勧めします。Googleマップ経由の来店コンバージョン率が高く、SEOより短期間で成果が出やすいです。一方、問い合わせ・予約型サービス（士業・工務店・スクールなど）はSEOとMEOを並行して進める戦略が有効です。",
  },
  {
    q: "埼玉県でのローカルSEOで狙えるキーワードを教えてください。",
    a: "「草加 整体」「越谷 美容室」「春日部 歯科」「川口 税理士」「大宮 居酒屋」「浦和 カフェ」「川越 観光 カフェ」「所沢 工務店」「熊谷 不動産」などが月間検索需要があり、かつ競合が少ない狙い目キーワードです。お客様の業種とエリアに合わせた詳細な競合調査を無料相談で行っています。",
  },
  {
    q: "Googleビジネスプロフィール（GBP）の設定から依頼できますか？",
    a: "はい。GBPの新規作成・オーナー確認・基本情報の最適化・カテゴリ設定・写真追加・投稿代行まですべて対応しています。GBPをすでにお持ちの場合は現状診断から始め、改善ポイントをご提案します。",
  },
  {
    q: "口コミ（レビュー）の獲得支援もしてもらえますか？",
    a: "はい。口コミ獲得はMEO対策の最重要要素のひとつです。来店後のお客様への口コミ依頼フロー設計・QRコードの作成・スタッフへの案内トークスクリプト提供など、自然に口コミが増える仕組みを構築します。口コミ代行（業者によるサクラ投稿）は行っておりません。",
  },
  {
    q: "AIO対策（AI検索対策）も埼玉県向けに対応していますか？",
    a: "はい。ChatGPT・GeminiなどAI検索で「埼玉の〇〇おすすめ」と質問された際にサイプレスのクライアントが引用されるよう、E-E-A-T強化・FAQ設計・構造化データ実装・専門性の高いコンテンツ制作を埼玉向けに設計します。",
  },
  {
    q: "費用の目安を教えてください。",
    a: "MEO対策は月額2〜5万円程度、ローカルSEOは月額3〜8万円程度、ホームページ制作は30〜80万円程度が目安です。ただし、エリア・業種・競合状況によって最適なプランが異なります。まずは無料相談でご状況をお聞きした上で、費用対効果の高いプランをご提案します。",
  },
  {
    q: "郊外の小規模店舗でも効果が出ますか？",
    a: "はい。むしろ埼玉の郊外エリアは競合が少ないため、小規模店舗でも正しい施策を行えば十分な成果が出ます。春日部・所沢・熊谷・深谷などの郊外エリアはGBPの基本最適化だけで上位表示できるケースも多く、小規模事業者にとってMEOは費用対効果の高い投資です。",
  },
  {
    q: "複数の店舗・拠点がある場合も対応できますか？",
    a: "はい。埼玉県内に複数店舗をお持ちの事業者や、東京と埼玉にまたがって拠点をお持ちの企業の多店舗MEO・SEO管理にも対応しています。各拠点ごとのGBP最適化と一貫したブランドイメージの維持を両立します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモート全国対応" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/industries/real-estate", label: "不動産業の集客", desc: "不動産業種向け施策" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食店向けMEO・SEO" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金・費用の目安" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "Web制作サービス" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策の基礎" },
  { href: "/knowledge/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県の集客支援" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずは無料相談から" },
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
              東京に隣接する埼玉県（草加市・越谷市・春日部市・川口市・さいたま市・浦和・大宮・川越・所沢・熊谷）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。人口約730万人（全国5位）の巨大市場で、今最も集客施策の効果が出やすいエリアです。
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
                { n: "01", t: "主要MEOキーワード例", b: "「草加 整体」「草加 美容室」「越谷 カフェ」「越谷 居酒屋」「春日部 歯科」「川口 美容院」「川口 整骨院」「さいたま市 SEO」「大宮 税理士」「浦和 カフェ」「川越 観光 カフェ」「所沢 工務店」「熊谷 不動産」——埼玉県各エリアで月間検索需要があり競合の少ないキーワードが豊富です。" },
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
                { area: "川口市", desc: "東京都北区・荒川区・足立区・葛飾区と隣接する埼玉南部の主要都市。人口約61万人で商業集積が高く、飲食・美容・医療の需要が大きい。MEO競合が増加傾向にあり戦略的な施策が必要。" },
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

        {/* NEW Section A: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry Guide</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              埼玉県・業種別の集客ポイント
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              業種によってMEO・SEOの有効なアプローチが異なります。埼玉県の市場特性に合わせた業種別の集客ポイントをご紹介します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ",
                  point: "「〇〇駅 カフェ」「〇〇市 居酒屋」などの近傍検索が主軸。Googleマップの写真クオリティと口コミ数が集客を左右する。川越・大宮は観光客向けのインバウンド対策も有効。ランチタイムMEO投稿で来店を促進。",
                },
                {
                  industry: "美容室・ヘアサロン",
                  point: "「〇〇 美容室」のMEOが最重要。施術メニュー・スタイル写真のGBP掲載が予約に直結する。ホットペッパーとGBPの両輪運用を推奨。草加・越谷・川口は競合が中程度で差別化しやすい。",
                },
                {
                  industry: "整体・整骨院・マッサージ",
                  point: "「〇〇 整体」「〇〇 整骨院」の検索はGoogleマップからの来院が圧倒的。口コミ返信・施術メニューの詳細記載でコンバージョンが上がる。埼玉郊外は競合が少なくMEOで上位を取りやすい穴場業種。",
                },
                {
                  industry: "歯科クリニック・医療",
                  point: "「〇〇 歯科」「〇〇 クリニック」はGBPと自院HPの両方を最適化することが必須。患者の不安を解消するFAQコンテンツと詳細な診療案内がCV率を高める。E-E-A-T（専門性・権威性）の強化が競合差別化の核。",
                },
                {
                  industry: "税理士・行政書士・士業",
                  point: "「〇〇市 税理士」のローカルSEOが主軸。専門性の高いコンテンツで信頼感を醸成するが、MEOも補完的に機能する。浦和・大宮はビジネス層が多くターゲットとの親和性が高い。",
                },
                {
                  industry: "工務店・リフォーム・不動産",
                  point: "「〇〇市 工務店」「〇〇 リフォーム」などの検索ではSEOとMEOの両方が機能する。施工事例のビジュアルコンテンツが信頼獲得に直結。埼玉は新築・リフォーム需要が高い住宅エリアが多い。",
                },
                {
                  industry: "学習塾・スクール・習い事",
                  point: "「〇〇市 学習塾」「〇〇 英会話」などのMEO・SEOが有効。保護者が比較検討するため、指導方針・講師プロフィール・合格実績のコンテンツ充実が差別化の鍵。春日部・越谷・所沢など住宅エリアで需要が高い。",
                },
                {
                  industry: "ロードサイド店舗・郊外型ビジネス",
                  point: "埼玉は郊外ロードサイド型ビジネスが多く、「〇〇市 〇〇 駐車場あり」などのキーワードが有効。車でのアクセス情報・駐車場情報のGBP記載が来店促進に効く。カーナビ連動のGoogleマップ表示でロードサイド集客を強化。",
                },
              ].map((item) => (
                <div key={item.industry} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>
                    <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#c4b89a", marginRight: "10px", verticalAlign: "middle" }} />
                    {item.industry}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW Section B: 主要エリア別特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Sub-Area Analysis</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              主要エリア別特性
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              埼玉県の主要エリアはそれぞれ商圏特性が異なります。各エリアの特性を理解した上で、最適な集客戦略を設計します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
              {[
                {
                  area: "さいたま市・大宮エリア",
                  desc: "埼玉最大のターミナル駅を擁する商業集積の中心地。東京から新幹線・在来線で直結しており、ビジネス層・観光客・地元住民が混在する多層的な市場を形成している。競合が多い分、ターゲットを絞った専門特化戦略が求められる。",
                },
                {
                  area: "さいたま市・浦和エリア",
                  desc: "県庁所在地でビジネス層・公務員層が多く居住するエリア。士業・コンサルティング・高単価サービス業との相性が良く、コンテンツSEOで専門性を訴求することが有効。浦和レッズを軸にした地域コミュニティも強い。",
                },
                {
                  area: "川口市",
                  desc: "東京都足立区・葛飾区と隣接し、商圏が東京と一体化している埼玉南部の要衝。人口約61万人を擁し、飲食・美容・医療の需要が旺盛。MEO競合が増えつつあるため、口コミ数・写真クオリティで差別化を図る段階に入っている。",
                },
                {
                  area: "草加市・越谷市",
                  desc: "葛飾区・足立区と隣接する東京ベッドタウン。共働きファミリー世帯が多く、生活サービス業への需要が安定している。MEO競合はまだ中程度で、今から施策を始めれば合理的な費用で上位を狙いやすいエリア。",
                },
                {
                  area: "川越市",
                  desc: "「小江戸」ブランドを持つ観光都市で、観光客・地元住民・東京からの日帰り客が集まる独特の市場構造を持つ。飲食・土産・体験型サービスは観光文脈のSEOとMEOを組み合わせることで集客最大化が可能。",
                },
                {
                  area: "所沢市・熊谷市・春日部市",
                  desc: "それぞれ個性ある地方都市で、MEO競合は低〜中程度と施策の効果が出やすいエリア。熊谷は北埼玉の商業拠点、所沢は西武線沿線の住宅都市、春日部は東武線沿線のファミリーエリアで、各エリアの住民特性に合わせた訴求が重要。",
                },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "12px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW Section C: 実装フロー */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              埼玉県の集客支援・実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              お問い合わせから施策の定着まで、サイプレスは一貫したプロセスで埼玉県の集客を支援します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { step: "01", title: "無料相談・ヒアリング", body: "現在の集客状況・ビジネスの強み・ターゲット顧客・エリア・競合について詳しくお聞きします。草加・越谷・川口は訪問対応可能、その他エリアはZoomで実施します。" },
                { step: "02", title: "競合・市場調査", body: "埼玉県内の対象エリア・業種のMEO競合レベル・SEO難易度・検索ボリュームを調査します。「どのキーワードで勝てるか」を明確にした上で戦略を設計します。" },
                { step: "03", title: "集客戦略の設計・提案", body: "調査結果をもとにMEO・SEO・Web制作のプランを設計し、費用・期間・期待成果を明示した提案書をご提出します。無理な施策や不要なサービスは提案しません。" },
                { step: "04", title: "Googleビジネスプロフィール（GBP）最適化", body: "GBPの基本情報・カテゴリ・説明文・営業時間・写真を完全最適化します。未設定の場合は新規作成からオーナー確認まで全対応します。" },
                { step: "05", title: "ホームページ・LP制作（必要な場合）", body: "SEO・CV率を最大化したホームページをNext.js+TypeScript+Tailwindで制作します。埼玉のターゲット顧客層に合わせたデザイン・コンテンツ設計を行います。" },
                { step: "06", title: "コンテンツ・SEO施策の実行", body: "ローカルSEOキーワードに対応したページ制作・構造化データ実装・内部リンク最適化・E-E-A-T強化コンテンツの追加を継続的に実施します。" },
                { step: "07", title: "口コミ獲得・GBP定期投稿", body: "口コミ獲得フローの設計（QRコード・依頼タイミング・スタッフトーク）と、GBPへの定期投稿代行を実施します。口コミ数と評価は順位に直接影響します。" },
                { step: "08", title: "月次レポート・改善サイクル", body: "毎月GBPのインサイト・検索順位・問い合わせ数・アクセス解析を報告します。データをもとに施策を継続的に改善し、埼玉での集客力を着実に積み上げます。" },
              ].map((item, index) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: index === 0 ? "1px solid #E8E4DC" : "1px solid #E8E4DC", borderBottom: index === 7 ? "1px solid #E8E4DC" : "none" }}>
                  <div style={{ minWidth: "48px" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "20px", fontWeight: 700, lineHeight: 1 }}>{item.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW Section D: サイプレスに依頼するメリット（ダーク）*/}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress — Saitama</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに埼玉県の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
              {[
                {
                  n: "01",
                  t: "東京×埼玉をまたぐ広域集客設計",
                  b: "葛飾区（東京）拠点だからこそ、川口市・草加市・越谷市と東京東部の商圏重複を活かした広域MEO・SEO戦略を一社で設計できます。埼玉単独ではなく東京東部とのシナジーを最大化した集客設計が強みです。",
                },
                {
                  n: "02",
                  t: "「競合が少ない今」が最大の参入タイミング",
                  b: "埼玉県の多くのエリアはMEO・SEO競合がまだ成熟していません。今から施策を始めることで競合増加前に上位ポジションを固定でき、後発組が追いつきにくい優位性を構築できます。このアドバンテージは時間とともに薄れます。",
                },
                {
                  n: "03",
                  t: "MEO・SEO・Web制作を一気通貫で対応",
                  b: "MEO対策・ローカルSEO・ホームページ制作・AIO対策・SNS運用をすべてサイプレスに集約できます。施策間の連携が取れた一貫戦略により、各施策が相乗効果を発揮し、バラバラに外注するより高い成果を実現します。",
                },
                {
                  n: "04",
                  t: "郊外・ロードサイド型ビジネスの知見",
                  b: "埼玉に多いロードサイド店舗・郊外型ビジネスの集客特性を理解した施策設計ができます。「駅近」だけでなく車での来店導線・カーナビ連動MEO・広域エリアからの集客など、埼玉の地域特性に合わせた戦略を提供します。",
                },
              ].map((item) => (
                <div key={item.n}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", marginBottom: "12px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "17px", color: "#FFFFFF", marginBottom: "12px" }}>{item.t}</p>
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
