import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "全国対応｜SEO対策・AIO対策・Web制作はリモートで日本全国対応｜株式会社サイプレス",
  description: "株式会社サイプレスはSEO対策・AIO対策・AI活用支援・Web制作を全国リモートで対応。Zoom・Google Meetでの初回相談から提案・施策実行・月次レポートまで完全オンライン対応。北海道から沖縄まで。",
  keywords: ["全国対応 SEO", "全国 MEO対策", "リモート Web制作", "オンライン SEO相談", "全国 ホームページ制作", "全国 AIO対策", "Zoom Web制作"],
  openGraph: {
    title: "全国対応｜SEO対策・AIO対策・Web制作はリモートで日本全国対応",
    description: "サイプレスのSEO・AIO・Web制作は全国完全リモート対応。Zoomで初回相談〜納品まで完結。北海道から沖縄まで対応。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/nationwide" },
};

const faqItems = [
  {
    q: "全国どこからでも依頼できますか？",
    a: "はい。SEO対策・AIO対策・Web制作はZoom・Google Meet・メールで全国完全リモート対応しています。北海道・東北・関西・中部・九州・沖縄など、日本全国どこからでもご依頼いただけます。MEO対策は東京・首都圏が得意ですが、全国のご相談も受け付けています。",
  },
  {
    q: "リモートで打ち合わせに不安がありますが大丈夫ですか？",
    a: "はい。Zoom・Google Meetでのオンライン打ち合わせは画面共有・資料説明・ヒアリングと対面と変わらないコミュニケーションが可能です。議事録・提案書はメールで共有し、進捗はSlack・チャットで随時報告しますので、距離を感じさせないサポートをお約束します。",
  },
  {
    q: "全国対応のSEO対策にはどのくらいかかりますか？",
    a: "地域・業種・競合レベルによりますが、月額3〜10万円程度がSEOコンサルティング・施策実行の一般的な目安です。まずは無料相談でヒアリングのうえ、最適なプランと費用をご提案します。",
  },
  {
    q: "MEO対策は全国対応できますか？",
    a: "MEO対策（Googleビジネスプロフィールの最適化）自体はリモートで全国対応可能です。ただし、地域特性の深い把握という観点では東京・首都圏が最も得意としています。地方エリアのMEO対策についてもまずはご相談ください。",
  },
  {
    q: "AIO対策（AI検索対策）とは何ですか？全国対応していますか？",
    a: "AIO対策とはChatGPT・Gemini・Perplexityなどのアシスタント型AI検索で引用・推薦されるための対策です。E-E-A-T強化・構造化データ・FAQ設計・著者情報の整備などが主な施策です。地域に関わらず全国でリモート対応しています。",
  },
  {
    q: "ホームページ制作も全国対応していますか？",
    a: "はい。ホームページ・LP制作はZoom・メールで全国完全対応しています。ヒアリング・デザイン確認・修正・納品まですべてオンラインで完結します。Next.js+TypeScript構成の高速・SEO対応サイトを全国どこでも制作します。",
  },
  {
    q: "地方・郊外でも集客に成果が出ますか？",
    a: "はい。地方・郊外エリアは東京都心と比較してSEO・MEOの競合が少なく、正しい施策を実行すれば短期間での集客改善が期待できます。競合が少ないほど施策効果が出やすいため、地方エリアこそWeb集客のチャンスが大きいと言えます。",
  },
  {
    q: "複数都道府県にまたがる事業者にも対応できますか？",
    a: "はい。複数の都道府県にわたって店舗・拠点を持つ事業者の一括SEO・MEO管理に対応しています。統合的な集客戦略の設計から各拠点の施策実行まで一貫してサポートします。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県の集客支援" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
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
          { "@type": "ListItem", position: 3, name: "全国対応", item: "https://www.cypress-all.co.jp/area/nationwide" },
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
              <span style={{ color: "#0d1b2a" }}>全国対応</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Nationwide Remote</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              全国対応｜SEO・AIO・Web制作<br />リモートで日本全国をサポート
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              株式会社サイプレスのSEO対策・AIO対策・AI活用支援・Web制作はオンラインで完全対応可能です。北海道から沖縄まで、日本全国どこからでもご依頼いただけます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              Zoom・Google Meetでの初回相談から提案・施策実行・月次レポートまで、すべてオンラインで完結します。地方エリアほど競合が少なくSEO・MEOの効果が出やすいため、全国どこからでも気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png"
            alt="全国対応のデジタルサービス"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section 1: 全国対応の強みと背景 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Remote Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              全国対応のビジネス環境とWeb集客の機会
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "地方・郊外ほどSEO・MEOの競合が少ない", b: "東京都心では激しいSEO・MEO競合が存在しますが、地方・郊外エリアはまだ競合が少ない状態です。正しい施策を実行するだけで、東京では難しいキーワードでも上位表示を短期間で達成できるケースが多くあります。地方こそWeb集客のチャンスが大きいエリアです。" },
                { n: "02", t: "リモートで質の高い施策が実現できる時代", b: "Zoom・Slack・プロジェクト管理ツールの普及により、オンラインでも対面と変わらない品質の打ち合わせ・施策実行・進捗報告が可能になっています。地理的な制約なく、全国どこのビジネスでも東京と同水準のWebマーケティング支援を受けられます。" },
                { n: "03", t: "SEO・AIO・Web制作はすべてリモートで完結", b: "SEO対策（コンサルティング・コンテンツ制作・内部最適化）・AIO対策（AI検索最適化）・ホームページ制作（デザイン・実装・納品）はすべてオンラインで完結します。現地訪問が不要なため、全国どこでも均一なサービス品質を提供できます。" },
                { n: "04", t: "AI検索（AIO）は地域問わず対応可能", b: "ChatGPT・Gemini・Perplexityなどのアシスタント型AI検索で引用されるためのAIO対策は、地域に関わらず全国どこでもリモートで対応可能です。AI検索対策は地方の中小企業にとっても新しい集客チャネルとして急速に重要性を増しています。" },
                { n: "05", t: "MEO対策は東京近郊が得意、全国もご相談可能", b: "MEO対策（Googleビジネスプロフィールの最適化）はリモートで全国対応できます。地域特性の深い理解という点では東京・首都圏（葛飾区・足立区・江戸川区・千葉・埼玉）が最も得意ですが、地方エリアについてもまずはご相談ください。" },
                { n: "06", t: "複数エリアの一括管理もリモートで対応", b: "全国に複数の店舗・拠点・フランチャイズを持つ事業者の一括SEO・MEO管理もリモートで対応しています。各拠点のGBP管理・統合的なSEO戦略の設計・月次レポートを一元的に提供します。" },
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

        {/* Section 2: 全国対応サービスの特徴 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>What We Offer</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              全国対応で提供するSEO・AIO・Web制作の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              地域を問わず、成果の出るWeb集客のために必要なすべての施策をリモートで提供します。地方エリアの地域特性を踏まえたキーワード設計・コンテンツ設計が得意です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "地方特化のキーワード設計", b: "「〇〇市 〇〇」「〇〇県 〇〇」などのローカルキーワードを徹底的に調査・分析します。競合が少ない地方エリアでは、適切なキーワード選定だけで大きな成果を生み出せます。Googleキーワードプランナー・競合分析ツールを活用した精度の高い設計を提供します。" },
                { n: "02", t: "AIO（AI検索）最適化で新しい集客を開拓", b: "ChatGPT・Gemini・Perplexityで「地域・業種のおすすめ」として引用されるためのE-E-A-T強化・FAQ設計・構造化データ実装を実施します。AI検索の台頭により、全国どの地域でも新しい集客チャネルとしてのAIO対策の重要性が急速に高まっています。" },
                { n: "03", t: "高速・SEO対応のホームページをリモートで制作", b: "Next.js+TypeScript構成の高速・SEO対応ウェブサイトを日本全国リモートで制作します。ヒアリング・デザイン確認・修正・納品まですべてZoom・メールで完結します。コアウェブバイタル最適化・スマートフォン対応・画像最適化は標準対応しています。" },
                { n: "04", t: "月次レポートで全国どこでも透明性の高い施策管理", b: "毎月の順位動向・GBP表示回数・サイトアクセス数をレポートにまとめ、Zoomでの解説・メール報告を行います。全国どこにいても施策の進捗と成果を明確に把握できる透明性の高い報告体制を維持しています。" },
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

        {/* Section 3: サービスフロー */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Remote Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              全国対応のオンラインサービスフロー
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "無料オンライン初回相談（Zoom / Google Meet）", b: "まずはZoom・Google Meetでの30〜60分の無料初回相談から始まります。現状のWeb集客の課題・目標・予算をヒアリングし、どのような施策が最も効果的かをご提案します。全国どこからでも参加いただけます。日程調整はメール・LINE・お問い合わせフォームで行います。" },
                { n: "02", t: "オンラインでのご提案・お見積もり", b: "ヒアリング内容をもとに施策内容・スケジュール・費用のご提案書を作成し、Zoomでご説明します。ご質問・修正にも丁寧にオンラインで対応します。ご契約後はすぐに施策を開始します。" },
                { n: "03", t: "リモートでの施策実行", b: "SEO対策・AIO対策・コンテンツ制作・Web制作・MEO対策など、すべての施策実行はリモートで完結します。進捗はプロジェクト管理ツール・メール・定期Zoomで共有し、常に現状と次のステップを明確にします。" },
                { n: "04", t: "月次レポートと継続改善", b: "毎月の成果レポート（順位変化・アクセス数・GBP表示回数・問い合わせ数など）をZoom・メールで報告します。データに基づいた継続的な改善提案を行い、集客の成果を積み上げていきます。" },
                { n: "05", t: "オンラインでの納品・完了確認", b: "ホームページ制作・コンテンツ納品などもすべてオンラインで完結します。確認・修正・最終納品まで丁寧に対応します。納品後の保守・更新・追加施策のご相談もリモートで迅速に対応します。" },
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

        {/* Section 4: 対応エリア別の強み */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Area Guide</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              エリア別対応の強みと特徴
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "東京都・葛飾区周辺", desc: "最も得意なエリア。葛飾区・足立区・江戸川区・墨田区への訪問相談対応。東京23区全域のSEO・MEO・Web制作を一貫してサポート。" },
                { area: "千葉・埼玉・神奈川（首都圏）", desc: "オンライン＋一部訪問で対応。東京より競合が少なく費用対効果が高いエリア多数。特に千葉・埼玉はMEO競合が少なくチャンスが大きい。" },
                { area: "関西（大阪・京都・神戸）", desc: "完全リモートで対応。東京のノウハウを関西マーケットに適応した施策設計を行う。AIO・SEO・Web制作はフル対応。MEOは競合分析のうえ提案。" },
                { area: "東海・北陸・東北・北海道", desc: "完全リモート対応。地方エリアほどSEO・MEO競合が少なく施策効果が出やすい。SEO・AIO・Web制作をオンラインで完全支援。" },
                { area: "九州・中国・四国・沖縄", desc: "完全リモートで全国対応。地方のWebマーケティング格差を解消するための施策設計が得意。今から始めれば早期に競合から頭一つ抜け出せる。" },
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
              全国対応のおすすめ集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "SEO対策", tag: "地域問わず有効", desc: "地域名+業種のローカルSEO・専門特化コンテンツSEOは全国どこでも有効。地方ほど競合が少なく、比較的少ない施策費用で上位表示を実現できる可能性が高い。" },
                { label: "AIO対策", tag: "全国・次世代集客", desc: "ChatGPT・Gemini等のAI検索での引用は地域に関わらず全国で重要性を増している。情報設計・E-E-A-T強化でAI検索での存在感を高める新しい集客施策。" },
                { label: "MEO対策", tag: "東京近郊特に得意", desc: "来店型ビジネスには最重要チャネル。東京・首都圏が最も得意だが、全国のご相談も受け付け。地方エリアは競合が少なくMEO効果が大きい。" },
                { label: "Web制作", tag: "全国完全リモート", desc: "SEO・MEO・SNS・AIの各チャネルからの集客を来店・問い合わせに変換するホームページ制作を全国リモートで対応。Next.js構成の高速・SEO対応サイト。" },
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
              サイプレスに全国の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "完全リモートで全国どこでも均一品質", b: "Zoom・メール・プロジェクト管理ツールを活用したリモート対応体制で、北海道から沖縄まで均一品質のサービスを提供します。距離・時差の影響を最小化した迅速な対応を心がけています。" },
                { n: "02", t: "地方エリアほど費用対効果が高い", b: "SEO・MEO競合が少ない地方エリアは、同じ施策費用でも東京都心より大きな成果が期待できます。地方ビジネスの集客改善は、競合が増える前の今が最大のチャンスです。" },
                { n: "03", t: "SEO・AIO・Web制作のワンストップ対応", b: "SEO対策・AIO対策（AI検索最適化）・ホームページ制作・SNS運用を全国リモートで一社に依頼できます。複数業者への発注コスト・コミュニケーション負荷を削減します。" },
                { n: "04", t: "データドリブンな施策で成果を可視化", b: "毎月の施策成果（順位変動・アクセス増加・問い合わせ数）をデータで報告します。感覚ではなく数字に基づく施策改善で、確実に集客成果を積み上げていきます。" },
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

        <FaqSection items={faqItems} heading="全国対応に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="全国どこからでもご相談ください"
          body="SEO対策・AIO対策・AI活用支援・Web制作は全国リモート対応です。まずはZoomでの無料相談から始めましょう。北海道から沖縄まで、お気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}
