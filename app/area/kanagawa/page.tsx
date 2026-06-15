import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "神奈川県のSEO対策・MEO対策・Web制作｜横浜・川崎・藤沢・相模原の集客支援",
  description: "神奈川県のSEO対策・MEO対策・ホームページ制作。横浜市・川崎市・藤沢市・相模原市・横須賀市・茅ヶ崎市の中小企業・店舗のWeb集客をオンラインで支援。Zoomで全県対応。",
  keywords: ["神奈川県 SEO", "神奈川県 MEO", "横浜 集客", "川崎 MEO", "藤沢 ホームページ制作", "横浜 Web制作", "相模原 SEO"],
  openGraph: {
    title: "神奈川県のSEO対策・MEO対策・Web制作｜横浜・川崎・藤沢・相模原の集客支援",
    description: "神奈川県の中小企業・店舗のSEO・MEO対策をサイプレスがオンラインで支援。横浜・川崎・藤沢・相模原全県Zoomで完全対応。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/kanagawa" },
};

const faqItems = [
  {
    q: "神奈川県での対面相談は可能ですか？",
    a: "神奈川県へは基本的にZoom・Google Meetでのオンライン相談に対応しています。横浜市・川崎市への訪問はご要望・状況に応じて調整可能ですが、オンラインで初回相談を行い、その後の判断をお勧めしています。",
  },
  {
    q: "神奈川県でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "エリアと業種によります。横浜・川崎は競合が多く継続的な施策で3〜6か月、藤沢・相模原・横須賀・茅ヶ崎は競合が比較的少ないため1〜3か月での改善が期待できます。月次レポートで進捗を共有します。",
  },
  {
    q: "神奈川県での競合状況はどうですか？",
    a: "横浜市・川崎市は人口が多く消費力が高い分、MEO・SEO競合も多いです。差別化戦略が重要になります。藤沢・相模原・横須賀・茅ヶ崎などのエリアは競合が少なく、専門特化により短期間での上位表示が期待できます。",
  },
  {
    q: "横浜の観光×ビジネスの二重集客に対応できますか？",
    a: "はい。横浜（中華街・みなとみらい・元町など）は観光客と地元住民の両方をターゲットにした集客設計が有効です。インバウンド対応の多言語GBP設定・観光キーワードSEOと、地元住民向けのローカルMEOを組み合わせた戦略を提供します。",
  },
  {
    q: "神奈川県の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。神奈川県内の飲食店・美容室・クリニック・整骨院・税理士・工務店など各業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "リモートのみで全ての施策を完結できますか？",
    a: "はい。初回ヒアリング・提案・施策実行・月次レポートまでZoom・メールで完全リモート対応が可能です。ホームページ制作・SEO・MEO対策のすべての工程をオンラインで完結できます。全国どこからでもお任せください。",
  },
  {
    q: "神奈川県内の複数店舗に一括で対応できますか？",
    a: "はい。神奈川県内に複数の店舗・拠点をお持ちの事業者への一括MEO・SEO対応が可能です。各拠点のGBP管理・統合的なSEO施策を効率よく実施します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモート全国対応" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策" },
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
          { "@type": "ListItem", position: 3, name: "神奈川県", item: "https://www.cypress-all.co.jp/area/kanagawa" },
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
              <span style={{ color: "#0d1b2a" }}>神奈川県</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Kanagawa Prefecture</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              神奈川県のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              神奈川県（横浜市・川崎市・藤沢市・相模原市・横須賀市・茅ヶ崎市）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作をオンラインで支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              Zoom・Google Meetでの初回相談から提案・施策実行・レポーティングまで完全リモートで対応します。神奈川県全域、どのエリアからでもお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_09 (4).png"
            alt="神奈川県のコーポレートミーティング"
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
              神奈川県のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "人口多く消費力が高い大型市場", b: "神奈川県は人口約920万人（東京都に次ぐ全国2位）で、消費力の高い市場です。特に横浜市・川崎市は大都市圏であり、飲食・美容・医療・サービス業の需要が非常に高く、集客ポテンシャルは極めて大きいです。" },
                { n: "02", t: "横浜は観光×ビジネスのダブルターゲット市場", b: "横浜市は中華街・みなとみらい・元町・横浜スタジアムなど多くの観光スポットを持ち、観光客と地元住民の両方を集客できる稀有なマーケットです。インバウンド対応の多言語MEOと地元向けローカルSEOの両立が重要です。" },
                { n: "03", t: "競合が多い一方で専門特化で差別化可能", b: "横浜・川崎は人口が多い分、競合も多い激戦エリアです。しかし、専門性・ニッチ特化・ブランディングにより差別化することで中小企業でも確実に集客できる市場です。コンテンツSEO・AIO対策が特に有効です。" },
                { n: "04", t: "郊外エリアは競合が少ない穴場", b: "藤沢・相模原・横須賀・茅ヶ崎・海老名・大和など神奈川県郊外エリアはMEO・SEO競合が少なく、比較的少ない施策費用で大きな成果が期待できます。郊外エリアへの出店・移転企業には特にチャンスが大きいです。" },
                { n: "05", t: "海・湘南エリアのライフスタイル消費の高さ", b: "藤沢・茅ヶ崎・鎌倉など湘南エリアはライフスタイルへのこだわりが強い消費者が多く、飲食・美容・ウェルネス・ヨガスタジオなどのおしゃれ系ビジネスとの相性が良いエリアです。SNS×MEO×SEOの組み合わせが効果的です。" },
                { n: "06", t: "川崎の工業・IT・法人ビジネスの集積", b: "川崎市は工業・製造・IT企業が多く集積しており、法人向けサービス（IT・会計・法務・不動産）の需要が高いです。B2B向けのコンテンツSEO・AIO対策・ウェブサイトブランディングが有効な施策です。" },
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
              神奈川県でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              神奈川県はエリアによってMEO・SEO競合レベルが大きく異なります。横浜・川崎は差別化戦略を、郊外エリアは早期参入を最優先にした施策設計が効果的です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「横浜 美容室」「横浜 中華料理」「川崎 居酒屋」「川崎 カフェ」「藤沢 整骨院」「相模原 歯科」「横須賀 美容院」「茅ヶ崎 ヨガ」「鎌倉 カフェ」——神奈川県は規模が大きく、エリア別・業種別の検索ニーズが豊富で、狙えるキーワードが多数あります。" },
                { n: "02", t: "MEO競合レベル：横浜・川崎は中〜高、郊外は低〜中", b: "横浜市・川崎市は人口規模に比例して競合が多い。藤沢・相模原・横須賀・茅ヶ崎・海老名・大和などは競合が少なく、今から基本施策を実施するだけで大きな成果が期待できます。" },
                { n: "03", t: "横浜の観光×ローカル二軸キーワード設計", b: "「横浜 中華街 ランチ」（観光客向け）と「横浜市西区 カフェ」（地元住民向け）を両立させたキーワード設計が横浜集客の基本です。多言語GBP設定で外国人観光客の取り込みも同時に行います。" },
                { n: "04", t: "湘南エリアのライフスタイルSEO", b: "藤沢・茅ヶ崎・鎌倉エリアのビジネスは「湘南 〇〇」「鎌倉 カフェ」などのライフスタイルキーワードでの検索需要が高いです。ブランドイメージを重視したコンテンツSEO・SNSとの連携が効果的です。" },
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
              神奈川県でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（観光客×地元住民の集客）", b: "「横浜市 美容室」「川崎 居酒屋」「藤沢 歯科」など神奈川県各エリアのGoogleマップ上位表示を目指します。横浜の観光客向け多言語GBP最適化と、地元住民向けローカルMEOを組み合わせた二軸集客設計が強みです。" },
                { n: "02", t: "神奈川県向けローカルSEO・コンテンツSEO", b: "「横浜市 〇〇」「川崎市 〇〇」「神奈川県 〇〇」などのキーワードで検索上位表示を目指します。専門性の高いコンテンツSEOで横浜・川崎の激戦キーワードでも差別化を実現します。" },
                { n: "03", t: "ホームページ・ブランドサイト制作（フル対応）", b: "神奈川県の飲食店・美容室・クリニック・士業・IT企業などに対応したホームページ・LP制作をオンラインで完全対応します。湘南エリアのライフスタイル系ビジネスには世界観を伝えるブランドサイト設計が得意です。" },
                { n: "04", t: "AIO対策（AI検索対策）", b: "ChatGPT・Geminiで「神奈川の〇〇おすすめ」と検索した際に引用されるための情報設計を行います。E-E-A-T強化・FAQ設計・構造化データで横浜・川崎の競合が多い市場でもAI検索での優位性を確保します。" },
                { n: "05", t: "SNS運用（Instagram・X・LINE）", b: "湘南エリアのライフスタイル系ビジネスにはInstagram運用が特に有効です。横浜の観光スポット周辺のビジネスにはSNS二次拡散を誘発するコンテンツ設計を提供します。" },
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
              神奈川県の主要エリアと地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "横浜市", desc: "県最大の都市で観光×ビジネスのダブルターゲット。中華街・みなとみらい・元町など観光客が多く、多言語MEO対応が差別化ポイント。競合が多いためコンテンツSEO・AIO対策も重要。" },
                { area: "川崎市", desc: "東京と横浜の中間に位置するビジネス都市。法人向けIT・会計・不動産の需要と、住民向け飲食・美容・医療の需要が共存。B2B・B2Cそれぞれに特化したSEO戦略が効果的。" },
                { area: "藤沢・茅ヶ崎（湘南）", desc: "湘南エリアはライフスタイル系ビジネスの宝庫。ヨガ・カフェ・美容・フィットネス・サーフィンスクール等のブランディングサイト×Instagram集客が特に有効なエリア。" },
                { area: "相模原市", desc: "中央区・南区・緑区からなる広大な市。競合が比較的少なく、MEO対策を始めれば早期に上位表示が見込める。飲食・医療・美容の地域住民向け集客に有効。" },
                { area: "横須賀市・三浦半島", desc: "海軍ゆかりの街で観光×住民集客が可能。競合が少なくMEO効果が出やすいエリア。海軍カレーなど地域特有のコンテンツSEOも有効。" },
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
              神奈川県でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要", desc: "横浜・川崎は多言語対応GBPで観光客・地元住民の両方を狙う二軸戦略が有効。藤沢・相模原など郊外エリアはMEO競合が少なく費用対効果が高い。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「横浜市 〇〇」「藤沢 〇〇」「湘南 〇〇」など地域キーワードで継続的な検索流入を構築。コンテンツSEOとの組み合わせで横浜の競合市場でも差別化できる。" },
                { label: "AIO対策", tag: "差別化に有効", desc: "神奈川の消費力が高い層はChatGPT・Geminiで情報収集する傾向が強い。AI検索で引用されるための情報設計・E-E-A-T強化は横浜・川崎の競合差別化に有効な手段。" },
                { label: "SNS（Instagram）", tag: "湘南に特に有効", desc: "藤沢・茅ヶ崎・鎌倉などの湘南エリアはInstagram拡散との相性が特に良い。ライフスタイル系ビジネスのSNS運用でブランド認知から来店・予約への転換を促進する。" },
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
              サイプレスに神奈川県の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "全県オンラインで完全対応", b: "横浜・川崎・藤沢・相模原・横須賀・茅ヶ崎・鎌倉など神奈川県全域をZoom・Google Meetで完全サポートします。距離を感じさせないオンライン相談・提案・レポーティングで、対面と変わらない品質の支援を提供します。" },
                { n: "02", t: "横浜の観光×ビジネス二重集客に強い", b: "横浜の観光客向け多言語MEO対応と地元住民向けローカルSEO・MEOを組み合わせた二軸集客設計が得意です。中華街・みなとみらい周辺のビジネスへの集客支援実績があります。" },
                { n: "03", t: "専門特化で横浜・川崎の競合に勝つ", b: "競合が多い横浜・川崎では、専門特化・ニッチキーワード・コンテンツSEO・AIO対策による差別化で確実に勝てるポジションを特定します。激戦市場でも成果を出す戦略設計が強みです。" },
                { n: "04", t: "MEO・SEO・AIO・Web制作をワンストップで", b: "神奈川県での集客に必要なMEO・SEO・AIO対策・ホームページ制作をすべてサイプレスに依頼できます。複数業者への発注コスト・コミュニケーションコストを省きながら、一貫した集客戦略を実行します。" },
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

        <FaqSection items={faqItems} heading="神奈川県に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="神奈川県のWeb集客、まずは無料相談から"
          body="横浜市・川崎市・藤沢市・相模原市のSEO対策・MEO対策・ホームページ制作のご相談は無料です。オンライン（Zoom）でのご相談に完全対応しています。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
