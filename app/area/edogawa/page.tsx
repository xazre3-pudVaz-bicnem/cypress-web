import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "江戸川区のSEO対策・MEO対策・ホームページ制作｜小岩・葛西・西葛西・篠崎の集客支援｜株式会社サイプレス",
  description: "江戸川区のSEO対策・MEO対策・ホームページ制作。小岩・葛西・西葛西・船堀・篠崎・瑞江・一之江エリアの中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。多言語対応も相談可。",
  keywords: ["江戸川区 SEO", "江戸川区 MEO", "小岩 集客", "葛西 MEO", "西葛西 ホームページ制作", "江戸川区 Web制作", "篠崎 SEO"],
  openGraph: {
    title: "江戸川区のSEO対策・MEO対策・ホームページ制作｜小岩・葛西・西葛西の集客支援｜株式会社サイプレス",
    description: "江戸川区の中小企業・店舗のSEO・MEO対策を葛飾区隣接のサイプレスが支援。小岩・葛西・西葛西・篠崎エリアへの訪問対応も迅速。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/edogawa" },
};

const faqItems = [
  {
    q: "江戸川区での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に隣接する江戸川区への訪問相談に迅速に対応しています。小岩・新小岩（葛飾区側）・篠崎・瑞江・一之江エリアへの訪問打ち合わせが可能です。葛西・西葛西はオンライン（Zoom）でのご相談も対応しています。",
  },
  {
    q: "江戸川区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "葛西・西葛西・篠崎エリアはMEO競合が少ないため、正しい施策で1〜3か月での順位向上が期待できます。小岩は競合が多めですが、継続施策で3〜6か月での改善が見込まれます。",
  },
  {
    q: "江戸川区での競合状況はどうですか？",
    a: "小岩駅周辺は飲食・美容・医療ともに競合が増加していますが、葛西・西葛西・篠崎・瑞江・一之江などのエリアはMEO・SEO競合がまだ少ない穴場エリアです。競合分析のうえで勝てるキーワードを特定します。",
  },
  {
    q: "江戸川区の多言語対応（外国人向け集客）は可能ですか？",
    a: "はい。西葛西を中心にインド系・中国系・韓国系など多くの外国人コミュニティが居住する江戸川区では、多言語対応のGBP設定・英語・中国語・ヒンディー語などのSEO対応についてもご相談いただけます。",
  },
  {
    q: "江戸川区の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。飲食店・美容室・整骨院・歯科クリニック・士業・工務店など江戸川区のあらゆる業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "千葉県に近い立地を活かした集客はできますか？",
    a: "はい。江戸川区は千葉県市川市・松戸市と接しており、千葉県側からの来店需要も見込めます。「江戸川区・市川市でお探しの方へ」といった広域ターゲットのSEO・MEO戦略も提案しています。",
  },
  {
    q: "リモートでの対応はできますか？",
    a: "はい。Zoom・Google Meet・メールでのリモート対応も可能です。葛西・西葛西など遠いエリアの方はオンラインでのご相談を推奨していますが、ご要望に応じて訪問対応も調整します。",
  },
  {
    q: "西葛西エリアのインドコミュニティ向け集客に特化した施策はありますか？",
    a: "はい。西葛西のインド系コミュニティを対象にしたヒンディー語GBP設定・英語Webページ制作・インド系コミュニティへリーチしやすいキーワード設計など、他社にはない独自の多文化集客施策を提供しています。インドカレー店・インド食材店・インド人向けサービス業などのご相談も歓迎します。",
  },
  {
    q: "小岩と葛西では集客の難易度に差がありますか？",
    a: "あります。小岩はJR総武線快速停車駅で商業集積が高く、MEO・SEO競合が多いエリアです。一方、葛西は地下鉄東西線沿線の住宅密集エリアで競合はやや少なく、正しい施策で比較的短期間での上位表示が期待できます。エリア特性に合わせた戦略設計が重要です。",
  },
  {
    q: "江戸川区から葛飾区・墨田区など隣接エリアへの広域集客はできますか？",
    a: "はい。江戸川区は葛飾区・墨田区・千葉県市川市と接しており、これらのエリアをまたいだ広域集客キーワード設計が可能です。「江戸川区・葛飾区で〇〇をお探しの方」など重複商圏を意識した施策で、より多くの顧客接点を作り出します。",
  },
  {
    q: "ホームページを持っていない状態からでも依頼できますか？",
    a: "もちろんです。ホームページ制作からMEO・SEO対策まで一貫して対応しています。Googleビジネスプロフィール（GBP）の開設・最適化・写真撮影アドバイス・口コミ獲得支援など、Web集客の基盤づくりからサポートします。",
  },
  {
    q: "江戸川区の整骨院・接骨院・整体院でも対応できますか？",
    a: "はい。「葛西 整骨院」「小岩 整体」「西葛西 接骨院」「篠崎 整体院」など治療院系のMEO・SEO対策は特に効果が高いジャンルです。競合分析・口コミ戦略・ウェブサイトのコンテンツ設計まで包括的に対応しています。",
  },
  {
    q: "飲食店のMEO対策で写真や口コミ対策も含まれますか？",
    a: "はい。GBPの基本情報最適化に加え、写真追加のアドバイス・カテゴリ設定・投稿代行・口コミへの返信代行・口コミ数増加のための仕組みづくりまでMEO対策として対応しています。飲食店では写真クオリティと口コミ件数が上位表示に大きく影響します。",
  },
  {
    q: "江戸川区で工務店・リフォーム会社の集客支援はできますか？",
    a: "はい。「江戸川区 リフォーム」「小岩 工務店」「葛西 外壁塗装」などのローカルSEOキーワードで上位表示を目指します。工務店・リフォーム業は検索意図が明確で、Webからの問い合わせ獲得に直結しやすい業種です。LP制作・MEO・SEOを組み合わせた集客設計をご提案します。",
  },
  {
    q: "江戸川区の学習塾・教育サービスのWeb集客も対応していますか？",
    a: "はい。「葛西 学習塾」「西葛西 英会話」「小岩 個別指導」など、ファミリー層が多い江戸川区は教育サービスへの需要が高いエリアです。検索意図に沿ったLP・ウェブサイト制作とMEO対策で新規生徒の獲得を支援します。",
  },
  {
    q: "月額費用の目安を教えてください。",
    a: "MEO対策は月額2〜5万円程度（エリア・競合状況・対応範囲による）、ローカルSEOは月額3〜8万円程度、ホームページ制作は要件により異なります。まずは無料相談で現状をお聞きし、最適なプランをご提案しますのでお気軽にご連絡ください。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "MEO・SEO対策は成果が出るまでに時間がかかるため、最低3〜6か月の継続をお願いしていますが、長期縛りの契約は設けていません。月次レポートで進捗を透明に共有し、施策の方向性についても定期的にご確認いただきながら進めています。",
  },
  {
    q: "葛西・西葛西の集客特性を教えてください。",
    a: "葛西は東京メトロ東西線沿線の住宅密集エリアで、ファミリー層が多く医療・教育・飲食への需要が旺盛です。西葛西はインド系を中心とした多文化コミュニティが形成されており、多言語対応集客が特に有効です。どちらもMEO競合がまだ少なく、今から施策を始めることで上位ポジションの先行確保が期待できます。",
  },
  {
    q: "西葛西の多言語・インド系コミュニティへのSEO対応は可能ですか？",
    a: "はい。英語・ヒンディー語でのGBP属性設定・英語ランディングページの制作・インド系コミュニティが検索しやすいキーワード設計に対応しています。西葛西はインド食材店・インド料理店・インド人向けサービス業が集積しており、多言語SEO対応で他社と大きな差別化ができます。",
  },
  {
    q: "小岩エリアのMEO競合状況はどうですか？",
    a: "小岩はJR総武線快速が停車する商業エリアで、飲食・美容・医療系のMEO競合が江戸川区内では最も激しいエリアです。ただし、競合GBPの品質を詳細に分析すると、写真・口コミ・投稿・サービス情報などの整備が不十分な事業者も多く、基本をしっかり整えるだけで差別化の余地があります。",
  },
  {
    q: "江戸川区内で訪問相談は可能ですか？",
    a: "はい。葛飾区拠点のため、江戸川区西部（小岩・篠崎・瑞江・船堀エリア）への訪問相談は特に迅速に対応できます。葛西・西葛西など江戸川区東部はオンライン（Zoom）でのご相談が中心になりますが、ご要望に応じて訪問対応も検討します。",
  },
  {
    q: "千葉県市川市（江戸川区に隣接）との広域集客はできますか？",
    a: "はい。「江戸川区・市川市でも対応」という広域ターゲットを意識したランディングページ設計・SEOキーワード設計が可能です。市川市側からの検索需要を取り込むことで商圏を広げ、集客力を高める施策をご提案しています。",
  },
  {
    q: "江戸川区でMEO競合が少ない業種・エリアはどこですか？",
    a: "エリアでは篠崎・瑞江・一之江・船堀が特に競合が少なく、基本的なGBP最適化でも早期に上位表示が期待できます。業種では整体院・学習塾・工務店・士業など、専門サービス系でWebマーケティングへの着手が遅れている事業者が多い傾向があります。競合調査のうえで最も効果が出やすいエリア×業種の組み合わせをご提案します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/area/chiba", label: "千葉県", desc: "千葉県の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/hair-salon", label: "美容室・ヘアサロンの集客", desc: "美容業向け支援" },
  { href: "/industries/clinic", label: "クリニックの集客", desc: "医療・治療院向け支援" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/cost/meo", label: "MEO対策の費用・料金", desc: "料金目安と相場" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずはお気軽に" },
  { href: "/web-design/corporate-site", label: "ホームページ制作", desc: "コーポレートサイト制作" },
  { href: "/industries/construction", label: "工務店・建設業の集客", desc: "建設業向け支援" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策の基礎知識" },
  { href: "/area/nationwide", label: "全国対応", desc: "全国リモート対応" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索対策サービス" },
  { href: "/cost/seo", label: "SEO対策の費用・料金", desc: "SEO料金目安と相場" },
  { href: "/services", label: "サービス一覧", desc: "全サービスを見る" },
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
          { "@type": "ListItem", position: 3, name: "江戸川区", item: "https://www.cypress-all.co.jp/area/edogawa" },
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
              <span style={{ color: "#0d1b2a" }}>江戸川区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Edogawa Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              江戸川区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区に隣接する江戸川区（小岩・葛西・西葛西・船堀・篠崎・瑞江・一之江）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              江戸川区は千葉県と接する境界エリアで、多様な外国人コミュニティが居住するユニークな地域です。MEO競合が少ないエリアが多く、正しい施策で短期間の集客改善が見込めます。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_12_19.png"
            alt="江戸川区のビジネスデータ分析"
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
              江戸川区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "多様なコミュニティが共存するユニークなエリア", b: "西葛西はインド系コミュニティが集中することで知られ、中国系・韓国系・ベトナム系など多様な外国人居住者が多い江戸川区は、日本語だけでなく多言語での集客対応が求められる独自の市場です。" },
                { n: "02", t: "千葉県との境界エリアで広域商圏をカバー", b: "江戸川区は千葉県市川市・松戸市と接しており、千葉県側からの来店需要も見込める広域商圏を持っています。「江戸川区・市川市でも対応可」というアピールでより広い集客が可能です。" },
                { n: "03", t: "MEO競合が少ない穴場エリアが多い", b: "小岩駅周辺を除き、葛西・西葛西・篠崎・瑞江・一之江・船堀などはMEO・SEO競合がまだ少ない状態です。今から施策を実施すれば、少ない予算でGoogleマップ上位を獲得しやすいエリアです。" },
                { n: "04", t: "飲食・美容・医療・整骨院のニーズが高い", b: "江戸川区は人口約68万人の大規模な区で、地域住民の日常的なサービス需要が高いです。特に飲食店・美容室・クリニック・整骨院・接骨院への「近くで探す」検索が多く、MEO対策の費用対効果が高いです。" },
                { n: "05", t: "葛飾区との商圏重複を活かした広域集客", b: "江戸川区西部（小岩・篠崎）は葛飾区（新小岩・立石）と商圏が重複します。葛飾区のSEO・MEO施策と連動させた広域集客戦略により、より多くの顧客接点を作り出せます。" },
                { n: "06", t: "ホームページ・Webマーケティング未着手の事業者が多い", b: "江戸川区の中小企業・個人事業主の中には、Webマーケティングに着手していないケースが多く存在します。基本的なGBP最適化・ホームページ整備だけで大きな改善が期待できるビジネスが多いエリアです。" },
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
              江戸川区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              江戸川区はMEO競合が少ないエリアが多く、正しい施策を実行すれば短期間での成果が期待できます。多言語コミュニティの多さという地域特性を活かした独自の集客戦略も設計できます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「葛西 美容院」「葛西 居酒屋」「西葛西 ランチ」「西葛西 クリニック」「小岩 整骨院」「小岩 美容室」「篠崎 歯科」「瑞江 整体」「船堀 カフェ」——エリアと業種を組み合わせた、競合が少なく狙いやすいキーワードが多数あります。" },
                { n: "02", t: "MEO競合レベル：小岩は中〜高、葛西・西葛西は低〜中", b: "小岩は飲食・美容の競合が増えています。一方、葛西・西葛西・篠崎・瑞江・一之江・船堀はMEO競合がまだ少なく、基本的なGBP最適化で上位表示を取れるケースが多くあります。" },
                { n: "03", t: "多言語対応SEO・多文化コミュニティへのアプローチ", b: "西葛西のインド系コミュニティをはじめ、多言語話者が多い江戸川区では、英語・中国語・ヒンディー語などでのGBP設定・ウェブサイト多言語化が他社との大きな差別化ポイントになります。" },
                { n: "04", t: "千葉県境界エリアの広域キーワード設計", b: "「江戸川区・市川市で〇〇をお探しの方」という広域ランディングページを設計することで、千葉県側からの検索需要も取り込めます。江戸川区の地理的優位性を最大限に活かした集客戦略を立案します。" },
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
              江戸川区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「葛西 美容院」「小岩 居酒屋」「西葛西 ランチ」など江戸川区各エリアの地域検索でGoogleマップ上位表示を目指します。GBPの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。" },
                { n: "02", t: "ローカルSEO対策", b: "「江戸川区 〇〇」「葛西 〇〇」「西葛西 〇〇」などのキーワードでの検索上位表示を目指します。千葉県と跨いだ広域キーワード設計で、より広い商圏からの集客を実現します。" },
                { n: "03", t: "ホームページ・LP制作", b: "飲食店・美容室・クリニック・士業など江戸川区の各業種に対応したホームページ・LP制作を行います。多言語対応・外国人コミュニティ向けのページ設計にも対応しています。" },
                { n: "04", t: "多言語対応Webマーケティング", b: "西葛西のインド系コミュニティをはじめとする多言語コミュニティ向けのGBP多言語設定・英語ウェブサイト制作・多言語SEO対応を提供します。外国人顧客の獲得に強みがあります。" },
                { n: "05", t: "SNS運用・Instagram集客支援", b: "Instagram・LINE公式アカウントの運用代行・コンサルティングを提供します。江戸川区の多様なコミュニティを意識したコンテンツ設計で認知拡大・来店促進を支援します。" },
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
              江戸川区の主要スポット・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "小岩", desc: "総武線の快速停車駅で商業エリアが充実。葛飾区新小岩との商圏重複があり、両区をまたいだ広域集客が可能。飲食・美容の競合が多いため、差別化戦略が重要。" },
                { area: "葛西", desc: "東京メトロ東西線の葛西駅周辺は住宅密集エリア。ファミリー層が多く、医療・教育・飲食への需要が高い。MEO競合はまだ少なくチャンスが大きいエリア。" },
                { area: "西葛西", desc: "インド系コミュニティで有名な西葛西。多文化が混在する独特のマーケットで、多言語対応集客・外国語SEOに取り組むことで大きな差別化が可能。" },
                { area: "船堀・篠崎", desc: "都営新宿線沿いの住宅エリア。地域住民の生活密着型需要が高く、MEO・SEO競合が少ない穴場エリア。今から着手すれば早期に上位表示を獲得できる。" },
                { area: "瑞江・一之江", desc: "都営新宿線の終点エリアで、静かな住宅街が続く。医療・整体・美容など生活サービスへの需要があり、競合が極めて少ないためMEOの効果が出やすい。" },
                { area: "平井", desc: "JR総武線・平井駅周辺の商業地。山手線沿線に比べると競合が少なく、飲食店・生活サービス業のMEO対策で早期の上位表示が狙えるエリア。江戸川区内でも着手が早ければ優位に立てる。" },
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
              江戸川区でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要", desc: "「葛西 〇〇」「西葛西 〇〇」など地域検索でのGoogleマップ上位表示。競合が少ないエリアが多く、少ない投資で大きな成果が期待できる。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「江戸川区 〇〇」「小岩 〇〇」などのキーワードで検索上位表示。千葉県境界エリアの地理的優位性を活かした広域キーワード設計が可能。" },
                { label: "多言語Web対応", tag: "差別化", desc: "西葛西の多文化コミュニティに向けた多言語GBP・英語Webサイトで差別化。競合のほとんどが日本語のみのため、多言語対応だけで圧倒的に有利になる。" },
                { label: "Web制作", tag: "基盤", desc: "MEO・SEOからの集客を問い合わせ・来店につなぐ高品質なホームページ。多言語・スマートフォン最適化・CV設計で集客の受け皿を整えます。" },
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
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別の集客ポイント（江戸川区）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              江戸川区は人口約68万人の広大なエリアで、業種によって狙うべきキーワードと集客チャネルが異なります。各業種の特性に合わせた最適な戦略をご提案します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ・居酒屋",
                  desc: "「葛西 居酒屋」「西葛西 ランチ」「小岩 カフェ」など地域×業種キーワードでのMEO対策が最重要です。GBPの写真充実と口コミ件数が上位表示を左右します。多言語コミュニティが多い西葛西では、英語メニュー・ヒンディー語対応のGBPが大きな差別化になります。小岩は競合が多いため写真品質と投稿頻度での差別化が鍵です。",
                },
                {
                  industry: "美容室・ヘアサロン",
                  desc: "「葛西 美容室」「小岩 美容院」「西葛西 ヘアサロン」などのMEOキーワードは検索需要が高いです。小岩エリアは競合が多いため口コミ品質と写真の差別化が重要。葛西・西葛西・篠崎は競合が少なく早期参入でシェアを確保できます。地域密着型の強みを活かした施策で固定客づくりを支援します。",
                },
                {
                  industry: "整骨院・接骨院・整体院",
                  desc: "住宅地が広がる江戸川区は整骨院・接骨院への需要が継続的に高いエリアです。「篠崎 整体」「瑞江 整骨院」「葛西 接骨院」などのMEOキーワードは競合が少なく効果が出やすい業種です。施術内容ページのSEOと組み合わせた中長期の集客基盤づくりをご提案します。",
                },
                {
                  industry: "不動産・賃貸仲介",
                  desc: "「江戸川区 不動産」「葛西 賃貸」「西葛西 マンション」などのSEOキーワードは検討期間が長く、コンテンツSEOとの相性が非常に良いです。千葉県市川市との商圏重複を活かした広域ターゲット設計で、他社より広い顧客層を獲得できます。外国人向けの多言語不動産ページは西葛西エリアで強力な差別化になります。",
                },
                {
                  industry: "学習塾・習い事・教育",
                  desc: "ファミリー層が多い葛西・西葛西エリアは学習塾・英会話・ピアノ教室などの教育サービスへの需要が高いです。「葛西 学習塾」「西葛西 英会話」などのMEO・SEO対策で地域の保護者へダイレクトにリーチできます。体験入会への導線設計が問い合わせ転換率を高めます。",
                },
                {
                  industry: "多言語対応ビジネス（西葛西インドコミュニティ向け）",
                  desc: "西葛西はインド系コミュニティが集積する特殊な商圏です。インド料理店・インド食材店・インド人向けビジネスサービス・多国籍ネイルサロンなど、多文化マーケットへの対応が求められる業種では、英語・ヒンディー語GBP設定と多言語ウェブサイト制作が競合との圧倒的な差別化になります。",
                },
                {
                  industry: "工務店・リフォーム・外壁塗装",
                  desc: "「江戸川区 リフォーム」「小岩 工務店」「葛西 外壁塗装」などのローカルSEOキーワードは検索意図が明確で問い合わせに直結しやすいです。江戸川区は住宅密集エリアが多く、リフォーム需要が継続的に高い地域です。施工事例コンテンツの充実がSEO・信頼感の両面で効果的です。",
                },
                {
                  industry: "士業（税理士・行政書士・社労士）",
                  desc: "「江戸川区 税理士」「小岩 行政書士」などのキーワードは競合が少なく、専門性の高いコンテンツSEOで上位表示を獲得しやすいです。外国人経営者が多い江戸川区では多言語対応の士業ウェブサイトが大きな強みになります。AI検索（AIO）での専門家引用獲得も同時に狙えます。",
                },
              ].map((item) => (
                <div key={item.industry} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "12px" }}>{item.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: 実装フロー */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              江戸川区の集客支援 実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              ご依頼から施策の継続改善まで、明確なステップで進めます。各工程で現状・目標・進捗を共有し、江戸川区の地域特性に合わせた最適な集客施策を実行します。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "無料相談・ヒアリング", b: "江戸川区内のエリア・業種・現状のWeb環境・集客課題をZoomまたは対面でヒアリングします。競合状況・現在のGBP・ホームページの状態を確認し、課題の優先順位を整理します。" },
                { n: "02", t: "現状分析・競合調査", b: "対象エリア（葛西・西葛西・小岩・篠崎など）のMEO競合・SEO競合を詳細に調査します。Googleマップ上位の競合店舗の施策内容を分析し、勝てるポジションを特定します。" },
                { n: "03", t: "キーワード設計・戦略立案", b: "江戸川区の地域特性（千葉県境界・多言語コミュニティ・商圏重複）を踏まえたキーワード設計を行います。MEO・SEO・多言語対応の優先順位と実施スケジュールを策定します。" },
                { n: "04", t: "GBP最適化（MEO基盤整備）", b: "Googleビジネスプロフィールの基本情報・カテゴリ・サービス・営業時間・属性を完全最適化します。写真の追加・多言語情報の設定・投稿の開始など、MEO効果を最大化する基盤を整備します。" },
                { n: "05", t: "ウェブサイト・LP制作・改善", b: "集客した見込み客を問い合わせ・予約・来店に転換するためのウェブサイト・LP制作または改善を行います。江戸川区の地域性・業種・外国人コミュニティへの対応を考慮した設計を実施します。" },
                { n: "06", t: "コンテンツ・構造化データ実装", b: "SEO効果を高めるローカルコンテンツの作成・FAQページの制作・Schema.orgの構造化データ実装を行います。江戸川区のエリア情報・業種の専門コンテンツでAI検索（AIO対策）にも対応します。" },
                { n: "07", t: "口コミ獲得・SNS連携施策", b: "MEO上位表示に直結する口コミ件数・評価を高めるための仕組みづくりを支援します。LINEやInstagramとの連携による既存顧客へのアプローチ・口コミ依頼フローを構築します。" },
                { n: "08", t: "月次レポート・継続改善", b: "毎月GBPのインサイトデータ・検索順位・流入数・問い合わせ数をレポートとして共有します。データに基づき施策を継続改善し、江戸川区の競合状況の変化にも柔軟に対応します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px", flexShrink: 0 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 依頼するメリット（ダーク背景・拡張版） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに江戸川区の集客を依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "葛飾区隣接 — 訪問相談が迅速", b: "葛飾区拠点のため江戸川区（小岩・篠崎・瑞江エリア）への訪問対応が迅速です。葛西・西葛西エリアはオンライン（Zoom）で対応しています。現地でのヒアリング・現状確認で課題を的確に把握します。" },
                { n: "02", t: "多言語対応のノウハウ", b: "西葛西の多文化コミュニティ向けの多言語GBP設定・英語ウェブサイト制作に対応しています。外国人コミュニティへの集客という江戸川区特有のニーズに対応できることが強みです。" },
                { n: "03", t: "千葉県境界エリアの広域集客設計", b: "江戸川区と千葉県をまたいだ広域の集客戦略を設計できます。市川市・松戸市など千葉県側からの需要も取り込める施策で、商圏を最大化します。" },
                { n: "04", t: "MEO競合の少ない今がチャンス", b: "葛西・西葛西・篠崎・瑞江・一之江は現在もMEO競合が少ない状態です。今すぐ施策を開始することで、競合が増える前に上位ポジションを確保できます。早期参入のアドバンテージを最大限に活用しましょう。" },
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

        {/* Section D: 江戸川区の主要エリア別特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Area Characteristics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              主要エリア別特性と集客戦略
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              江戸川区は各エリアによって住民構成・交通利便性・競合状況が大きく異なります。エリアの特性を正確に把握した上で集客戦略を立てることが重要です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "小岩", t: "活気ある商業エリア・JR総武線快速停車", b: "小岩はJR総武線快速停車駅を中心に商業集積が発達した江戸川区内屈指のにぎわいエリアです。飲食・美容・医療系の競合が多く、MEO対策では写真の品質・口コミ件数・投稿頻度での差別化が重要です。隣接する葛飾区新小岩との商圏重複を意識した広域キーワード設計も有効です。" },
                { n: "葛西", t: "ファミリー街・東京メトロ東西線の主要駅", b: "葛西は東京メトロ東西線の主要駅を中心としたファミリー層が多い住宅密集エリアです。子育て世代の需要が高く、学習塾・医療・飲食・美容への検索ニーズが旺盛です。MEO競合はまだ少なく、GBP最適化を着実に行うことで早期の上位表示が期待できるチャンスエリアです。" },
                { n: "西葛西", t: "インドコミュニティ・多文化共生の独自マーケット", b: "西葛西はインド系コミュニティが集積する日本でも珍しいエリアで、多文化・多言語の独自マーケットが形成されています。英語・ヒンディー語対応のGBP設定・ウェブサイト多言語化は他社との圧倒的な差別化ポイントです。インド料理店・食材店・多国籍ビジネス向けの集客施策に特に強みを発揮します。" },
                { n: "船堀", t: "区の中心・タワーホール船堀を擁する行政拠点", b: "船堀は都営新宿線沿線の江戸川区行政の中心エリアで、タワーホール船堀が区のランドマークです。来街者も多く、飲食・サービス業への需要があります。ビジネス系・士業・医療系のMEO対策では競合が少なく、早期着手で有利なポジションを確保できます。" },
                { n: "瑞江・篠崎", t: "閑静な住宅地・生活密着型需要が高いエリア", b: "瑞江・篠崎は都営新宿線沿線の閑静な住宅街です。地域密着型の飲食店・医療・美容・教育サービスへの需要が継続的に存在します。MEO・SEO競合が極めて少なく、基本的なGBP整備だけでも上位表示を取れるケースが多いため、江戸川区内でも特に費用対効果が高いエリアです。" },
                { n: "平井", t: "山手線沿線の商業地・コンパクトな商圏", b: "平井はJR総武線・平井駅を中心としたコンパクトな商業エリアです。地域住民の生活需要を支える飲食・美容・生活サービスが集まっています。江戸川区内では比較的知名度が低いため競合も少なく、MEO対策に着手すれば早期に上位表示を獲得できる可能性が高いエリアです。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "48px", paddingTop: "2px", flexShrink: 0 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 江戸川区でよくある集客の悩みと解決策 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Common Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              江戸川区でよくある集客の悩みと解決策
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              江戸川区の中小企業・個人事業主から多く寄せられる集客のお悩みとその解決策をまとめました。同じお悩みをお持ちの方はお気軽にご相談ください。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  q: "Googleマップに出てこない",
                  a: "GBPの登録がない・情報が不完全・写真が少ない状態ではGoogleマップに表示されにくくなります。GBPの完全登録・基本情報の最適化・写真の充実・口コミ獲得施策によって早期改善が見込めます。",
                },
                {
                  q: "ホームページがあるのに集客できない",
                  a: "SEOキーワードの設計が不十分・ページの読み込み速度が遅い・スマートフォン表示が崩れているなどの原因が多いです。サイト診断→改善提案→実装のプロセスで集客力を高めます。",
                },
                {
                  q: "外国人のお客様へのアプローチが難しい",
                  a: "西葛西を中心に多言語コミュニティが居住する江戸川区では、英語・中国語・ヒンディー語でのGBP設定・Webサイトの多言語対応が有効です。外国語SEO・多言語集客への対応が他社との差別化になります。",
                },
                {
                  q: "競合が多くて差別化できない",
                  a: "競合が多いエリア（小岩など）では、口コミ品質・写真の充実度・投稿頻度・レスポンス速度・独自コンテンツでの差別化が有効です。競合分析のうえで「勝てるポイント」を特定し、集中的に磨き上げます。",
                },
              ].map((item) => (
                <div key={item.q} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "12px" }}>Q. {item.q}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>A. {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="江戸川区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="江戸川区のWeb集客、まずは無料相談から"
          body="小岩・葛西・西葛西・篠崎エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。多言語対応・千葉県境界エリアの広域集客もご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
