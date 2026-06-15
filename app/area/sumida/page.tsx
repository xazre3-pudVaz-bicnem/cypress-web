import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "墨田区のSEO対策・MEO対策・ホームページ制作｜錦糸町・押上・両国・向島の集客支援",
  description: "墨田区のSEO対策・MEO対策・ホームページ制作。錦糸町・押上・両国・向島エリアのスカイツリー観光客と地元住民への二重集客を葛飾区拠点のサイプレスが支援。",
  keywords: ["墨田区 SEO", "墨田区 MEO", "錦糸町 集客", "押上 MEO", "両国 ホームページ制作", "墨田区 Web制作", "向島 SEO"],
  openGraph: {
    title: "墨田区のSEO対策・MEO対策・ホームページ制作｜錦糸町・押上・両国の集客支援",
    description: "墨田区の観光客と地域住民への二重集客をサポート。錦糸町・押上・両国・向島エリアのMEO・SEO・Web制作を葛飾区拠点のサイプレスが支援。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/sumida" },
};

const faqItems = [
  {
    q: "墨田区での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区から隣接する墨田区への訪問相談に対応しています。錦糸町・押上・両国・向島・亀戸（江東区側含む）エリアへの訪問打ち合わせが可能です。オンライン（Zoom）でのご相談も対応しています。",
  },
  {
    q: "墨田区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "錦糸町・押上など観光客の多いエリアは競合が多めですが、継続的な施策で3〜6か月での改善が期待できます。両国・向島・曳舟などのエリアはMEO競合が少なく、1〜3か月でも効果が見られる場合があります。",
  },
  {
    q: "墨田区での競合状況はどうですか？",
    a: "錦糸町・押上（スカイツリー周辺）は観光業・飲食業の競合が多く差別化が必要です。一方、両国・向島・曳舟・東向島などのエリアはMEO競合が少ない穴場です。エリアと業種を組み合わせた競合分析を実施します。",
  },
  {
    q: "観光客向けの集客（インバウンド対応）はできますか？",
    a: "はい。スカイツリー観光客・インバウンド客向けのGBP写真追加・英語・中国語・韓国語対応のGBP設定、観光客向けSEOキーワード設計を提供しています。観光×地元住民の二重集客戦略を立案します。",
  },
  {
    q: "墨田区の飲食店・カフェ・職人技術系ビジネスに対応できますか？",
    a: "はい。墨田区の飲食店・カフェ・伝統工芸・職人技術系（革細工・刃物・染色など）のビジネスに特化したWeb集客戦略を提供しています。インスタグラム集客との組み合わせも効果的です。",
  },
  {
    q: "リモートでの対応はできますか？",
    a: "はい。Zoom・Google Meet・メールでのリモート対応も可能です。墨田区の方には可能な限り対面相談を推奨していますが、ご都合に合わせて柔軟に対応します。",
  },
  {
    q: "SNS（Instagram）と組み合わせた集客は可能ですか？",
    a: "はい。押上・錦糸町・向島など墨田区はInstagramでの拡散効果が高いエリアです。おしゃれカフェ・スイーツ・伝統工芸など視覚的に魅力的なコンテンツのSNS運用をMEO・SEOと組み合わせて提案します。",
  },
  {
    q: "錦糸町と押上では集客のアプローチは異なりますか？",
    a: "はい、明確に異なります。錦糸町は地元住民・ビジネスパーソンの日常利用が中心のため、「地元の常連客づくり」視点のMEO・SEOが有効です。押上はスカイツリー観光客が多く、インバウンド対応・多言語GBP・観光客向けコンテンツが集客に直結します。両エリアで戦略を使い分けた設計を行います。",
  },
  {
    q: "スカイツリー観光客を自店舗に誘導することはできますか？",
    a: "はい。押上・錦糸町エリアでスカイツリー観光客を取り込むには、Googleマップでの「スカイツリー付近 〇〇」検索への対応が重要です。GBPへの多言語写真・サービス説明追加、観光客が検索するキーワードでの上位表示、口コミの英語・中国語・韓国語での返信対応を組み合わせた戦略を提供します。",
  },
  {
    q: "墨田区のMEO競合が少ないエリアはどこですか？",
    a: "向島・曳舟・東向島・東曳舟エリアは飲食・美容・整体などの業種でMEO競合が比較的少ない穴場エリアです。Googleビジネスプロフィールの基本最適化と継続的な投稿・口コミ対応だけでも、短期間での上位表示が期待できます。エリアと業種の組み合わせで詳細な競合分析を行います。",
  },
  {
    q: "伝統工芸・職人技術のビジネスでもWeb集客は効果がありますか？",
    a: "はい、非常に効果的です。革細工・染色・和菓子・刃物など墨田区の職人技術系ビジネスはWebでの発信が遅れているケースが多く、正しく施策を打つことで全国・世界のファンへのリーチが可能です。世界観を伝えるブランドサイト＋Instagram＋SEOの組み合わせが特に有効です。",
  },
  {
    q: "ホームページ制作と同時にMEO・SEOを依頼することはできますか？",
    a: "はい、一括依頼が可能です。サイプレスではホームページ制作と同時にMEO・SEO対策を設計し、サイト公開時点からSEO・MEOが機能する状態でリリースします。制作後に別途SEO対応をするよりも効率的で費用対効果が高まります。",
  },
  {
    q: "両国エリアでの相撲・観光業への集客は可能ですか？",
    a: "はい。両国は国技館・相撲博物館・ちゃんこ鍋の聖地として観光需要があります。相撲ファン向けのコンテンツSEO・MEO最適化・インバウンド対応で、観光客を確実に集客する戦略を提供します。両国エリアのMEO競合は中程度で施策の効果が出やすいエリアです。",
  },
  {
    q: "AIO対策（AI検索対策）にも対応していますか？",
    a: "はい。ChatGPT・Gemini・Perplexityなどから「墨田区の〇〇」として引用されるためのE-E-A-T強化・構造化データ実装・FAQコンテンツ設計・著者情報整備を行います。下町情緒・伝統文化・観光といった墨田区の強みを活かした専門性の高いコンテンツ設計でAI検索での存在感を高めます。",
  },
  {
    q: "墨田区のホームページ制作にかかる費用・期間はどのくらいですか？",
    a: "ホームページ制作は内容・ページ数により異なりますが、中小企業・店舗向けの標準的なコーポレートサイトで数十万円台からご相談しています。制作期間は1〜2か月が目安です。MEO・SEO施策は月額制の継続サポートプランもご用意しています。まずは無料相談でご状況をお聞きし、最適なプランをご提案します。",
  },
  {
    q: "他社でSEO対策を行っていましたが、成果が出ていません。改善できますか？",
    a: "はい、既存施策の引き継ぎ・見直しにも対応しています。まず現状のGBP・ウェブサイト・施策内容を無料診断し、課題を明確にしたうえで改善プランをご提案します。他社からの乗り換えも歓迎です。",
  },
  {
    q: "墨田区で美容室・ネイルサロンのMEO対策は効果がありますか？",
    a: "はい。錦糸町・押上エリアは美容室の競合が多いですが、向島・曳舟・東向島エリアは競合が少なく効果が出やすい環境です。GBPの写真クオリティ・口コミ数・サービス情報の充実度で差別化できます。施術メニューの写真追加・口コミ獲得フロー・定期投稿を組み合わせた戦略を提供します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス詳細" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "ホームページ制作詳細" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/hair-salon", label: "美容室・サロンの集客", desc: "美容業向け支援" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金・費用の目安" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作事例" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策の基礎" },
  { href: "/knowledge/local-seo", label: "ローカルSEO解説", desc: "地域SEOの詳細解説" },
  { href: "/area/koto", label: "江東区", desc: "江東区の集客支援" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/contact", label: "無料相談", desc: "お問い合わせ・相談" },
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
          { "@type": "ListItem", position: 3, name: "墨田区", item: "https://www.cypress-all.co.jp/area/sumida" },
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
              <span style={{ color: "#0d1b2a" }}>墨田区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Sumida Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              墨田区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              東京スカイツリーを擁する墨田区（錦糸町・押上・両国・向島エリア）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              墨田区は観光客と地元住民という二つのターゲット層が共存するユニークなエリアです。スカイツリー観光客向けの多言語MEO対応と、地域住民向けのローカル集客を組み合わせた独自の戦略が強みです。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 20_04_05.png"
            alt="墨田区のビジネスアナリティクス"
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
              墨田区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "観光客と地元住民の二重集客が必要", b: "スカイツリー（東京ソラマチ）・両国国技館・向島百花園など有名観光スポットを持つ墨田区は、年間数百万人の観光客と地元住民の両方を顧客にできるビジネスチャンスが豊富なエリアです。それぞれに異なる集客戦略が求められます。" },
                { n: "02", t: "下町文化と新しいカルチャーの融合", b: "向島・曳舟・押上など伝統的な下町文化が残るエリアと、錦糸町・押上周辺の新しいカフェ・レストランが共存します。職人技術・伝統工芸・手作り文化のビジネスはSNSとの相性が良く、インスタ映えコンテンツで広がるケースが多いです。" },
                { n: "03", t: "インバウンド需要の高まり", b: "スカイツリーを訪れる外国人観光客が多い押上・錦糸町エリアは、英語・中国語・韓国語対応のGBP設定・多言語ウェブサイトが集客に直結します。Googleマップでの多言語対応は競合との大きな差別化ポイントです。" },
                { n: "04", t: "錦糸町の大型商業施設との競合", b: "錦糸町にはアルカキット錦糸町・楽天地シネマなどの大型施設があり、周辺の中小飲食店・小売店は大型施設との集客競争にさらされています。ローカルMEO・SEOで大型施設に行かない「地元指向の顧客」をターゲットにした戦略が有効です。" },
                { n: "05", t: "職人技術・クラフト系ビジネスの集客課題", b: "墨田区は伝統的な職人技術（革細工・金属・染色・和菓子など）のビジネスが多く残っています。これらのビジネスはウェブ発信が遅れているケースが多く、正しくSEO・SNS対応することで大きな集客改善が見込まれます。" },
                { n: "06", t: "葛飾区からの商圏重複", b: "墨田区北部（向島・曳舟）は葛飾区と商圏が重複しており、葛飾区のSEO・MEO施策と連動した広域集客が可能です。亀戸（江東区）も含めた東部エリア全体の集客戦略を一元的に管理できます。" },
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
              墨田区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              墨田区は観光エリア（押上・両国）と住宅エリア（向島・曳舟）でMEO競合レベルが異なります。観光客向けと地元住民向けの二軸の集客設計が必要です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「錦糸町 カフェ」「錦糸町 居酒屋」「押上 居酒屋」「押上 ランチ」「両国 ちゃんこ鍋」「両国 居酒屋」「向島 割烹」「曳舟 美容室」「錦糸町 整骨院」——観光客向けと地元客向けを使い分けたキーワード設計が効果的です。" },
                { n: "02", t: "MEO競合レベル：錦糸町・押上は中〜高、向島・曳舟は低〜中", b: "錦糸町・押上は飲食・美容の競合が多い一方、向島・曳舟・東向島は競合が少ない穴場エリアです。エリアと業種に応じた適切な施策設計を行います。" },
                { n: "03", t: "インバウンド向けGBP最適化", b: "スカイツリー観光客の多い押上・錦糸町エリアでは、Googleビジネスプロフィールへの英語・中国語・韓国語の写真キャプション・サービス説明追加が効果的です。外国語でのクチコミへの返信対応も重要です。" },
                { n: "04", t: "SNS×MEO×SEOの組み合わせ戦略", b: "おしゃれカフェ・スイーツ・和菓子・伝統工芸など墨田区のSNS映えコンテンツをInstagramで発信しながら、MEO・SEOでの検索流入と組み合わせることで、観光客と地元客の両方へのリーチを最大化します。" },
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
              墨田区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（観光客×地元住民の二重集客）", b: "錦糸町・押上・両国・向島の各エリアに合わせたGoogleマップ上位表示施策を実施します。観光客向けの多言語GBP最適化と地元住民向けのローカルMEOを組み合わせた二重集客戦略が強みです。" },
                { n: "02", t: "インバウンド対応MEO・多言語Web対応", b: "GBPへの英語・中国語・韓国語対応・外国語クチコミへの返信・多言語ホームページ制作を提供します。スカイツリー観光客の取り込みに直結する施策です。" },
                { n: "03", t: "ローカルSEO・コンテンツSEO", b: "「墨田区 〇〇」「錦糸町 〇〇」「押上 〇〇」などのキーワードで検索上位表示を目指します。伝統工芸・職人技術系ビジネスには専門性の高いコンテンツSEOが特に効果的です。" },
                { n: "04", t: "ホームページ・ブランディングサイト制作", b: "おしゃれカフェ・和菓子・職人技術・伝統工芸など墨田区の個性的なビジネスに合ったブランドサイト・LP制作を行います。世界観を伝えるデザインで観光客・SNSからの流入を集客に変換します。" },
                { n: "05", t: "SNS運用（Instagram・X）", b: "墨田区の飲食店・スイーツ・カフェ・伝統工芸のInstagramを中心としたSNS運用を支援します。観光客のSNSシェアを誘発するコンテンツ設計で二次拡散を生み出す戦略を実施します。" },
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
              墨田区の主要スポット・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "錦糸町", desc: "JR総武線・東京メトロが乗り入れる墨田区最大の繁華街。飲食・娯楽・ショッピングが充実し、昼夜を問わず集客ポテンシャルが高い。MEO競合が多いため差別化戦略が重要。" },
                { area: "押上・スカイツリー", desc: "東京スカイツリーを中心とした観光エリア。年間数百万人の来訪者があり、飲食・物販・体験型ビジネスへの観光客需要が高い。インバウンド対応の多言語MEOが必須。" },
                { area: "両国", desc: "国技館で有名な相撲の聖地。ちゃんこ鍋・江戸料理・和風レストランの集積が強みで、相撲ファン・観光客向けの特化コンテンツが有効。MEO競合は中程度。" },
                { area: "向島・東向島", desc: "向島百花園・料亭街など伝統文化が残る下町エリア。職人・料亭・和菓子など独自性の高いビジネスが多く、ブランディングサイトとSNS集客との相性が良い。" },
                { area: "曳舟・東曳舟", desc: "曳舟駅周辺の住宅エリアで、地域住民の日常消費が主な需要。MEO競合が少ない穴場で、基本的なGBP最適化だけで上位表示を狙えるエリア。" },
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
              墨田区でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要", desc: "観光客・地元住民の両方が「近くの〇〇」でGoogleマップ検索する墨田区では最重要チャネル。多言語対応GBPで観光客、日本語GBPで地元客を同時に狙う二重戦略が有効。" },
                { label: "SNS（Instagram）", tag: "特に有効", desc: "スカイツリー・向島・錦糸町のおしゃれカフェ・スイーツ・伝統工芸はInstagram拡散との相性が特に良い。観光客のシェアを誘発するコンテンツ設計で二次拡散を生む。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「墨田区 〇〇」「錦糸町 〇〇」などの検索上位表示で継続的な集客基盤を構築。観光客・地元客の両方にリーチするキーワード設計が可能。" },
                { label: "Web制作", tag: "基盤", desc: "世界観を伝えるブランドサイトが集客の核になる。観光客には英語対応・地元客にはローカル感のある設計で、両ターゲットへの訴求を最大化する。" },
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

        {/* Section A: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別の集客ポイント（墨田区）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              墨田区は観光・下町文化・住宅が混在するエリアです。業種ごとに異なる集客ポイントと効果的な施策を解説します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ・居酒屋",
                  point: "エリアによって攻め方が異なる",
                  note: "錦糸町・押上は「観光客×地元客」の二重集客が有効。向島・曳舟は地元常連を掘り起こすローカルMEOが中心。Googleマップの写真クオリティと口コミ数が集客に直結します。ランチ・ディナー・テイクアウトなどシーン別のGBP投稿も効果的です。",
                },
                {
                  industry: "美容室・ネイル・エステ",
                  point: "エリア絞りで競合を回避",
                  note: "錦糸町は美容室の競合が多いため、「錦糸町 縮毛矯正」「錦糸町 ヘアカラー専門」など特化キーワードでの差別化が有効です。向島・曳舟エリアは競合が少なくMEOで上位を狙いやすい環境です。施術写真・スタッフ写真のGBP追加が来店率を高めます。",
                },
                {
                  industry: "整骨院・整体・治療院",
                  point: "地域住民の日常需要をMEOで取り込む",
                  note: "「錦糸町 整骨院」「曳舟 整体」など地域名+業種キーワードでのGoogleマップ上位表示が最重要です。予約フォームとGBPを連動させた来院フローの整備、口コミ獲得施策の継続で着実に集客基盤を構築できます。",
                },
                {
                  industry: "伝統工芸・職人技術・クラフト",
                  point: "世界観ブランディング×SNSで全国発信",
                  note: "革細工・染色・和菓子・刃物など墨田区の職人系ビジネスは、ブランドサイト制作とInstagram運用の組み合わせが最も効果的です。「墨田区 革工房」などのニッチSEOで全国・海外のコアファンへのリーチが期待できます。",
                },
                {
                  industry: "観光・体験・宿泊施設",
                  point: "インバウンド対応が差別化の鍵",
                  note: "スカイツリー周辺・両国エリアの観光・体験ビジネスは、英語・中国語・韓国語のGBP対応が外国人観光客集客に直結します。Googleマップでの評価管理・外国語クチコミへの返信・多言語LP制作を組み合わせた施策が効果的です。",
                },
                {
                  industry: "クリニック・歯科・医療",
                  point: "地域住民への信頼構築が最優先",
                  note: "「錦糸町 歯科」「墨田区 クリニック」など地域名+診療科目のMEO・SEOが集患に直結します。医療広告ガイドラインに沿った正確なGBP設定・専門性を伝えるコンテンツSEOで、地域住民からの信頼を獲得する施策を設計します。",
                },
                {
                  industry: "士業・コンサルタント・税理士",
                  point: "専門性SEOとE-E-A-T強化",
                  note: "「墨田区 税理士」「錦糸町 社労士」などのローカルキーワード＋専門性の高いコンテンツSEOで、Googleとユーザー双方からの信頼を構築します。AIO対策（AI検索での引用）も士業にとって重要な新しい集客チャネルです。",
                },
                {
                  industry: "不動産・リノベーション",
                  point: "エリア特化コンテンツで検索需要を取る",
                  note: "「墨田区 賃貸」「錦糸町 不動産」「向島 リノベーション」など地域特化キーワードのSEOと、エリア情報・物件紹介コンテンツの充実が集客の核になります。下町エリアへの移住需要・リノベーション需要を掘り起こすコンテンツ設計が有効です。",
                },
              ].map((item) => (
                <div key={item.industry} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", letterSpacing: "0.15em", color: "#c4b89a", textTransform: "uppercase", marginBottom: "8px" }}>{item.point}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "12px" }}>{item.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: 実装フロー */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              墨田区の地域ビジネス 集客施策の実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              サイプレスが墨田区のお客様に提供する集客支援は、ヒアリングから継続改善まで8つのステップで進行します。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  step: "01",
                  title: "無料ヒアリング・現状診断",
                  desc: "業種・エリア・ターゲット・現在の集客状況をヒアリングします。GBP・ウェブサイト・競合の現状を無料で診断し、改善すべき優先順位を明確化します。",
                },
                {
                  step: "02",
                  title: "競合分析・キーワード調査",
                  desc: "墨田区内の競合事業者のGBP・SEO状況を分析します。錦糸町・押上・両国・向島など各エリアの競合レベルと上位表示の難易度を調査し、勝てるキーワードを特定します。",
                },
                {
                  step: "03",
                  title: "集客戦略の設計",
                  desc: "ヒアリング・競合分析をもとに、MEO・SEO・SNS・Web制作を組み合わせた墨田区特化の集客戦略を設計します。観光客向けと地元住民向けの二重集客設計も含めてご提案します。",
                },
                {
                  step: "04",
                  title: "Googleビジネスプロフィール（GBP）最適化",
                  desc: "GBPの完全最適化を実施します。カテゴリ設定・営業時間・写真追加・サービス説明・多言語対応（英語・中国語・韓国語）まで徹底的に整備し、Googleマップでの上位表示を目指します。",
                },
                {
                  step: "05",
                  title: "ホームページ・ランディングページ制作",
                  desc: "必要に応じてSEO対応のホームページ・LPを制作します。墨田区の地域キーワードを盛り込んだ構造化コンテンツ・Schema.org実装・Core Web Vitals最適化まで一括対応します。",
                },
                {
                  step: "06",
                  title: "コンテンツSEO・ローカルSEO施策",
                  desc: "「墨田区 〇〇」「錦糸町 〇〇」などのローカルキーワードで検索上位表示を目指すコンテンツを作成します。伝統工芸・職人技術・観光コンテンツなど墨田区ならではの専門性の高いSEO記事も対応します。",
                },
                {
                  step: "07",
                  title: "口コミ獲得・SNS運用支援",
                  desc: "来店客からのGoogle口コミ獲得フローを整備します。Instagram・X運用の代行・コンサルティングも対応し、MEO・SEOとSNSを連動させた統合集客戦略を実行します。",
                },
                {
                  step: "08",
                  title: "月次レポート・継続改善",
                  desc: "毎月の検索順位・GBPのインサイト・ウェブサイトのアクセス分析をレポートします。データをもとに施策を継続改善し、墨田区での集客を長期的に最大化します。",
                },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "28px", padding: "28px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "48px" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "20px", fontWeight: 700 }}>{item.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: サイプレスに依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                {
                  n: "01",
                  t: "観光客×地元住民の二重集客戦略",
                  b: "スカイツリー観光客向けの多言語MEO・インバウンドSEOと、地元住民向けのローカルMEO・コンテンツSEOを一元的に設計・管理します。二つのターゲット層を同時に攻める戦略が墨田区での集客を最大化します。",
                },
                {
                  n: "02",
                  t: "葛飾区隣接——訪問相談が迅速",
                  b: "葛飾区から隣接する墨田区への訪問相談に迅速に対応しています。錦糸町・押上・両国・向島エリアへの対面ヒアリングで、事業の世界観・ターゲットを深く理解したうえで施策を設計します。",
                },
                {
                  n: "03",
                  t: "MEO・SEO・Web制作をワンストップで",
                  b: "MEO対策・SEO対策・ホームページ制作・SNS運用をすべてサイプレスに依頼できます。複数の業者に分散するコストと手間を省き、一貫した戦略で墨田区の集客を最大化します。",
                },
                {
                  n: "04",
                  t: "伝統・クラフト系ビジネスの発信支援",
                  b: "革細工・染色・和菓子・刃物など墨田区の職人技術系ビジネスのWeb発信支援に対応しています。世界観を伝えるブランドサイト制作・SNS運用で、全国・世界のファンを獲得するための施策を提案します。",
                },
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

        <FaqSection items={faqItems} heading="墨田区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="墨田区のWeb集客、まずは無料相談から"
          body="錦糸町・押上・両国・向島エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。観光客と地元住民への二重集客戦略、インバウンド対応もご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
