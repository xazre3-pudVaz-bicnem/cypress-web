import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "葛飾区のSEO対策・MEO対策・ホームページ制作｜株式会社サイプレス",
  description: "葛飾区のSEO対策・MEO対策・ホームページ制作。亀有・柴又・金町・新小岩・立石・お花茶屋・堀切エリアの中小企業・個人事業主のWeb集客を葛飾区拠点のサイプレスが支援。対面相談・訪問サポート対応。",
  keywords: ["葛飾区 SEO", "葛飾区 MEO", "葛飾区 ホームページ制作", "亀有 集客", "柴又 MEO", "金町 SEO", "新小岩 ホームページ", "立石 Web制作"],
  openGraph: {
    title: "葛飾区のSEO対策・MEO対策・ホームページ制作｜株式会社サイプレス",
    description: "葛飾区拠点のWeb集客専門会社。亀有・柴又・金町・新小岩・立石エリアへの訪問相談対応。MEO・SEO・Web制作を地域密着で支援。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/area/katsushika" },
};

const faqItems = [
  {
    q: "葛飾区での対面相談・訪問サポートは可能ですか？",
    a: "はい。株式会社サイプレスは葛飾区白鳥4-6-1-623に拠点を置いています。亀有・柴又・金町・新小岩・立石・お花茶屋・堀切など葛飾区内全域への訪問相談・打ち合わせに対応しています。交通費等は基本的にいただいておりません。まずはお気軽にご連絡ください。",
  },
  {
    q: "葛飾区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "葛飾区は東京都内の他エリアと比較して競合が少ない地域も多く、正しい施策を継続すれば1〜3か月で順位向上が見られる業種もあります。Googleビジネスプロフィールの完全最適化・口コミ増加・定期投稿を組み合わせた戦略を実施します。",
  },
  {
    q: "葛飾区の競合状況はどうですか？",
    a: "亀有・金町・新小岩など主要駅周辺は競合が増えてきていますが、立石・お花茶屋・堀切・柴又などの地域はMEO・SEO両面でまだ穴場エリアが多く存在します。競合分析を行ったうえで勝てるキーワード戦略を設計します。",
  },
  {
    q: "葛飾区の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。飲食店・美容室・整骨院・歯科クリニック・士業・工務店など葛飾区のあらゆる業種に対応しています。業種別の集客ノウハウをもとに、最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "葛飾区専門の知識はありますか？",
    a: "はい。サイプレスは葛飾区に拠点を置いており、亀有・柴又・金町・新小岩・立石エリアの地域特性・競合状況・ターゲット層を熟知しています。地域に根ざした集客戦略を立案できることが強みです。",
  },
  {
    q: "リモートでの対応はできますか？",
    a: "はい。Zoom・Google Meet・メールでのリモート対応も可能です。葛飾区内の方には対面相談をお勧めしていますが、お客様のご都合に合わせて柔軟に対応します。",
  },
  {
    q: "足立区・江戸川区など近隣区にも対応していますか？",
    a: "はい。葛飾区に隣接する足立区・江戸川区・墨田区への訪問相談・サポートも迅速に対応しています。東京東部エリア全域でご依頼いただいています。",
  },
  {
    q: "個人事業主・小規模事業者でも依頼できますか？",
    a: "はい。葛飾区の個人事業主・フリーランス・小規模事業者も大歓迎です。予算・規模に関わらず最適なプランを提案しますので、まずはご相談ください。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
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
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cypress-web.jp/" },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://cypress-web.jp/area" },
          { "@type": "ListItem", position: 3, name: "葛飾区", item: "https://cypress-web.jp/area/katsushika" },
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
              <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#9CA3AF", textDecoration: "none" }}>対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>葛飾区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Katsushika — Base Area</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              葛飾区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              株式会社サイプレスは葛飾区白鳥に拠点を置くWeb集客の専門会社です。亀有・柴又・金町・新小岩・立石・お花茶屋・堀切エリアの店舗・中小企業のSEO対策・MEO対策・ホームページ制作を、地域密着の対面サポートで支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              葛飾区は東京都内でも競合が少ない穴場エリアが多く、正しい施策を実行するだけで短期間での集客改善が見込めます。地元に根ざした視点でビジネスの課題を解決します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_11_20.png"
            alt="葛飾区のビジネスパートナーシップ"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        {/* Section 1: ビジネス環境と集客課題 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              葛飾区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "生活密着型の商業エリア", b: "亀有・金町・新小岩・立石などの主要駅周辺に飲食店・美容室・整骨院・ドラッグストアが集積しています。地域住民の来店需要が高く、Googleマップでの検索（MEO）が集客の主要チャネルとなっています。" },
                { n: "02", t: "競合が少ない穴場エリアが多い", b: "渋谷・新宿・池袋などの都心エリアと異なり、立石・お花茶屋・堀切・柴又エリアはMEO・SEO両面で競合が手薄な状態です。今から正しく施策を打てば、短期間でGoogleマップ上位を狙えます。" },
                { n: "03", t: "ファミリー層・シニア層が多い消費者構成", b: "葛飾区は子育て世帯・シニア層が多く、地元での買い物・通院・習い事などリピート型の消費行動が強いエリアです。「近くで探す」「評判の良い店」への需要が高く、口コミ・MEOとの相性が特に良い地域です。" },
                { n: "04", t: "Webマーケティング未着手の事業者が多い", b: "葛飾区の中小企業・個人事業主はWebマーケティングを本格的に取り組んでいないケースが多く見られます。Googleビジネスプロフィールが未最適化のまま放置されているケースも多く、参入余地が大きいエリアです。" },
                { n: "05", t: "近隣区（足立・江戸川・墨田）への商圏拡大", b: "葛飾区は足立区・江戸川区・墨田区と接しており、これら隣接エリアへの商圏拡大も現実的です。エリアをまたいだSEO・MEO戦略で複数区の顧客を取り込む施策を提案しています。" },
                { n: "06", t: "観光資源を活かした集客（柴又・亀有）", b: "柴又帝釈天や亀有公園（両さん像）などの観光スポットがある葛飾区は、観光客を取り込める業種（飲食・土産・体験）にとって大きなチャンスがあります。インバウンド・観光客向けのSEO・GBP対応も支援します。" },
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
              葛飾区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              葛飾区は東京23区のなかでもSEO・MEO競合がまだ少ないエリアが点在しています。適切なキーワード選定と継続的な施策により、比較的短期間での上位表示が期待できます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「亀有 居酒屋」「亀有 美容室」「金町 歯科」「金町 整骨院」「新小岩 カフェ」「立石 居酒屋」「柴又 甘味処」「お花茶屋 美容院」「堀切 整体」——これらのキーワードは月間検索数があり、かつ競合が少ないため上位表示を狙いやすい状況です。" },
                { n: "02", t: "MEO競合レベル：中〜低（穴場多数）", b: "亀有・金町・新小岩の主要駅周辺は競合が増加傾向にありますが、立石・お花茶屋・堀切・柴又エリアはMEO競合が少なく、Googleビジネスプロフィールを正しく最適化するだけで上位を取れるケースが多くあります。" },
                { n: "03", t: "SEO対策の方向性", b: "「葛飾区 〇〇」「亀有 〇〇」「金町 〇〇」などの地域名+業種・サービス名の複合キーワードで地元ユーザーへのアプローチを強化します。競合分析のうえ、確実に上位表示できるキーワードから順に施策を実施します。" },
                { n: "04", t: "ローカルSEOとMEOの相乗効果", b: "Googleビジネスプロフィールの最適化（MEO）と、ウェブサイト上のローカルSERコンテンツ強化（SEO）を並行して実施することで、Googleの地域検索での露出を最大化します。葛飾区ではこの相乗効果が特に出やすい傾向があります。" },
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
              葛飾区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「亀有 美容室」「金町 歯科」「新小岩 居酒屋」などGoogleマップでの上位表示を目指します。Googleビジネスプロフィールの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を月次で実施します。オーナー確認から一括対応可能です。" },
                { n: "02", t: "地域密着型SEO対策", b: "葛飾区の地域特性を活かしたローカルSEOを実施します。「葛飾区 〇〇」キーワードでの上位表示を目指し、サイト構造改善・コンテンツSEO・被リンク獲得まで一貫して支援します。競合が少ないエリアから着実に実績を積み上げます。" },
                { n: "03", t: "ホームページ・LP制作（対面ヒアリング対応）", b: "飲食店・美容室・治療院・工務店・士業など各業種に対応したホームページ・ランディングページを制作します。葛飾区内への訪問ヒアリングから制作・納品・保守まで一貫してサポートします。Next.js構成の高速・SEO対応サイトを提供します。" },
                { n: "04", t: "SNS運用・Instagram集客支援", b: "Instagram・X（旧Twitter）・Facebookの運用代行・コンサルティングを提供します。葛飾区の地域性を活かしたコンテンツ設計で、地元フォロワー・来店客増加を目指します。" },
                { n: "05", t: "地域密着の訪問コンサルティング", b: "葛飾区内・近隣区（足立・江戸川・墨田）への訪問相談に対応しています。現地でのヒアリング・現状分析・Web集客改善提案を対面で実施します。中小企業・個人事業主の方も気軽にご相談ください。" },
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
              葛飾区の主要スポット・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "亀有", desc: "亀有駅周辺は商業集積が進み、飲食・小売・医療・美容が密集。駅前のショッピングモール（アリオ亀有）の影響で集客競争が激しいエリアです。MEO・SEOでの差別化が集客のカギとなります。" },
                { area: "柴又", desc: "柴又帝釈天の門前町として知名度の高い観光エリア。観光客と地元住民の両方をターゲットにした集客が有効で、多言語対応・観光関連キーワードのSEOが効果的です。" },
                { area: "金町", desc: "JR常磐線・京成線が交差する交通の要衝。ファミリー層・共働き世帯が多く、学習塾・医療・美容・飲食のニーズが高いエリアです。地域名+業種キーワードのMEO対策が効果的です。" },
                { area: "新小岩", desc: "総武線の快速停車駅で商業エリアが充実しています。競合も一定数いますが、商圏が広く集客ポテンシャルが高いエリアです。近隣の江戸川区との商圏重複も視野に入れた戦略が有効です。" },
                { area: "立石", desc: "下町情緒あふれる商店街が有名で、昔ながらの飲み屋街「立石仲見世」が人気。SNS映えスポットとしても注目され、インスタグラム集客との相性が良いエリアです。" },
                { area: "お花茶屋・堀切", desc: "比較的静かな住宅エリアですが、地域住民の生活密着型店舗には根強い需要があります。競合が少ないため、MEO対策の効果が特に出やすい穴場エリアです。" },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              エリア別おすすめの集客チャネル
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "48px" }}>
              葛飾区の業種・エリア特性に合わせた集客チャネルを選定します。MEO・SEO・Web制作・SNSを組み合わせることで、複数の接点から新規顧客を獲得できます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "特に推奨", desc: "Googleマップで「近くの〇〇」検索をする葛飾区住民へのアプローチ。飲食・美容・医療・整体など来店型ビジネスに最適。競合が少ないエリアが多く費用対効果が高い。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「葛飾区 〇〇」「亀有 〇〇」などの地域名キーワードでの検索上位表示。MEOと相乗効果があり、認知拡大から来店・問い合わせまでをカバーする。" },
                { label: "ホームページ制作", tag: "基盤", desc: "信頼感の醸成・サービス詳細の説明・予約フォーム設置など、集客の「核」となるWebサイトの整備。SEO・MEOと組み合わせて効果を最大化する。" },
                { label: "SNS（Instagram）", tag: "補完", desc: "立石・柴又などの人気エリアでは、インスタグラムでの拡散が集客に直結するケースがある。写真映えする業種（飲食・美容）では特に有効。" },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>{item.label}</p>
                    <span style={{ fontSize: "11px", background: "#f8f6f2", color: "#c4b89a", border: "1px solid #E8E4DC", borderRadius: "4px", padding: "2px 8px", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{item.tag}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: サイプレスに依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに葛飾区の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "葛飾区に拠点 — 訪問・対面サポート", b: "葛飾区白鳥に事務所があるため、亀有・柴又・金町・新小岩・立石・お花茶屋・堀切への訪問相談・定期訪問が可能です。遠方のWeb制作会社では得られない地域密着の伴走支援を提供します。" },
                { n: "02", t: "足立・江戸川・墨田区も迅速対応", b: "隣接する足立区・江戸川区・墨田区への対応も迅速です。葛飾区を拠点にした東京東部エリア全体の集客支援を、一社でまとめてお任せいただけます。" },
                { n: "03", t: "競合分析で「勝てるキーワード」を選定", b: "葛飾区内の競合状況を徹底分析したうえで、今すぐ上位を狙えるキーワードを優先して施策を実行します。効果が出るまでの時間を最短化する戦略設計が強みです。" },
                { n: "04", t: "SEO・MEO・Web制作をワンストップで", b: "SEO対策・MEO対策・ホームページ制作・SNS運用をすべてサイプレスに依頼できます。複数業者に依頼する手間・コストを省きながら、一貫した集客戦略を実行できます。" },
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

        <FaqSection items={faqItems} heading="葛飾区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="葛飾区のWeb集客、まずは無料相談から"
          body="葛飾区のSEO対策・MEO対策・ホームページ制作のご相談は無料です。亀有・柴又・金町・新小岩・立石エリアへの訪問相談・打ち合わせにも対応しています。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
