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
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/katsushika" },
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
  {
    q: "「亀有 美容室」「金町 居酒屋」などのキーワードの競合レベルはどのくらいですか？",
    a: "「亀有 美容室」「金町 居酒屋」「新小岩 カフェ」のような駅名＋業種のキーワードは、都心（渋谷・新宿）と比べて競合が少なく、適切なMEO・SEO施策で上位表示を狙いやすい状況です。「立石 飲み屋」「柴又 甘味処」「堀切 整体」などはさらに競合が薄く、施策開始後に比較的早期の成果が期待できます。",
  },
  {
    q: "柴又の観光客向けにSEOやSNSで集客することは可能ですか？",
    a: "はい。柴又帝釈天・寅さん記念館への観光客を取り込むには、「柴又 ランチ」「柴又 甘味」「柴又 お土産」などの観光関連キーワードでのSEO対策と、InstagramなどのSNSでのビジュアル発信が効果的です。また、インバウンド（外国人観光客）向けにはGoogle翻訳対応のGBP設定や多言語コンテンツの整備も支援しています。",
  },
  {
    q: "葛飾区に訪問してもらえるコンサルタントに依頼するメリットは何ですか？",
    a: "現地に足を運ぶことで、店舗の雰囲気・立地・競合店の状況をリアルに把握したうえで戦略を立案できます。サイプレスは葛飾区に拠点があるため、交通費を抑えながら訪問相談・定期的な進捗確認が可能です。遠方の制作会社にはない「地域の空気感を知っている」視点が、コンテンツや写真戦略にそのまま活きます。",
  },
  {
    q: "亀有と金町、どちらが集客しやすいエリアですか？",
    a: "業種によって異なります。亀有はアリオ亀有の集客力があり商業密度が高い一方、競合も多いため差別化戦略が重要です。金町はJR・京成の2路線が通り、ファミリー層・共働き世帯が多い落ち着いたエリアで、学習塾・医療・美容系は安定した需要があります。競合分析を実施したうえで、どちらのエリアでより早く成果を出せるかをご提案します。",
  },
  {
    q: "お花茶屋・堀切エリアは集客の穴場ですか？",
    a: "はい。お花茶屋・堀切は主要駅と比べてMEO・SEO競合が少なく、Googleビジネスプロフィールを適切に最適化するだけで上位表示を取りやすいエリアです。生活密着型の店舗（整体・美容室・飲食）は特に、地域住民の「近くの〇〇」検索でヒットしやすい状態を作りやすい傾向があります。",
  },
  {
    q: "葛飾区の法人向けWebマーケティング支援も行っていますか？",
    a: "はい。個人事業主だけでなく、葛飾区内の中小企業・法人向けにもWebマーケティング支援を提供しています。BtoB向けのSEO・コーポレートサイト制作・採用サイト制作・MEO対策など、法人ニーズに合わせたプランを提案します。顧問契約での継続支援にも対応しています。",
  },
  {
    q: "インバウンド（外国人観光客）向けの集客対応はできますか？",
    a: "はい。柴又・亀有などを訪れる外国人観光客を取り込むために、Googleビジネスプロフィールへの英語・中国語・韓国語対応、多言語コンテンツのSEO、インバウンド向けSNS運用を支援しています。訪日外国人の検索行動に合わせたキーワード戦略を設計します。",
  },
  {
    q: "MEO対策とSEO対策はどちらを先に始めるべきですか？",
    a: "来店型ビジネス（飲食・美容・医療・整体など）はMEO対策を先行することを推奨しています。Googleマップ検索からの来店が最も即効性が高いためです。Web集客全体を強化したい方はSEOと並行実施が有効で、サイプレスでは両方をワンストップで対応しています。",
  },
  {
    q: "ホームページがない状態でも依頼できますか？",
    a: "はい。ホームページがない状態からGoogleビジネスプロフィールの開設・最適化・MEO対策のスタートまで一貫して支援しています。Webサイト制作とMEO対策をセットで依頼いただくことで、相互に補完し合う集客基盤を構築することができます。",
  },
  {
    q: "契約期間・縛りはありますか？",
    a: "月額継続プランでも最低契約期間は設けておりません（初月〜解約可）。ただし、SEO・MEO対策は継続的な施策が重要なため、少なくとも3〜6か月以上のご利用を推奨しています。まずは3か月プランからお試しいただくことも可能です。詳細はご相談ください。",
  },
];

const relatedLinks = [
  { href: "/area/katsushika/web-design", label: "葛飾区のホームページ制作", desc: "SEOに強い集客サイト制作" },
  { href: "/area/katsushika/seo", label: "葛飾区のSEO対策", desc: "地域キーワードで上位表示" },
  { href: "/area/katsushika/meo", label: "葛飾区のMEO対策", desc: "Googleマップで上位表示" },
  { href: "/area/katsushika/web-design-subsidy", label: "葛飾区のHP制作・補助金活用", desc: "補助金活用の進め方" },
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/adachi", label: "足立区", desc: "足立区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金目安・比較" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容業向け支援" },
  { href: "/industries/clinic", label: "クリニックの集客", desc: "医療・治療院向け支援" },
  { href: "/industries/nail-salon", label: "ネイルサロンの集客", desc: "ネイル業向け支援" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/blog", label: "ブログ", desc: "集客・SEO・MEOのノウハウ" },
  { href: "/contact", label: "お問い合わせ", desc: "無料相談はこちら" },
  { href: "/services", label: "サービス一覧", desc: "全サービスを見る" },
  { href: "/lp/meo-trial", label: "MEO無料診断", desc: "無料でGBP診断" },
  { href: "/faq", label: "よくある質問", desc: "サービスへのご質問" },
  { href: "/case", label: "導入事例", desc: "業種別の事例紹介" },
  { href: "/sitemap", label: "サイトマップ", desc: "全ページ一覧" },
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
          { "@type": "ListItem", position: 3, name: "葛飾区", item: "https://www.cypress-all.co.jp/area/katsushika" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.cypress-all.co.jp/area/katsushika#localbusiness",
        name: "株式会社サイプレス",
        alternateName: "Cypress",
        url: "https://www.cypress-all.co.jp/area/katsushika",
        description:
          "東京都葛飾区を拠点に、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用を提供するWebマーケティング会社。葛飾区・足立区・江戸川区など近隣エリアの中小企業・地域店舗の集客を支援します。",
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
          postalCode: "124-0816",
          addressRegion: "東京都",
          addressLocality: "葛飾区",
          streetAddress: "白鳥4-6-1-623",
        },
        email: "info@cypress-all.co.jp",
        areaServed: [
          { "@type": "AdministrativeArea", name: "東京都葛飾区" },
          { "@type": "AdministrativeArea", name: "東京都足立区" },
          { "@type": "AdministrativeArea", name: "東京都江戸川区" },
          { "@type": "AdministrativeArea", name: "東京都墨田区" },
        ],
        knowsAbout: ["MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "SNS運用", "Googleビジネスプロフィール最適化"],
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
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}>
              {[
                { label: "葛飾区のホームページ制作", href: "/area/katsushika/web-design" },
                { label: "葛飾区のSEO対策", href: "/area/katsushika/seo" },
                { label: "葛飾区のMEO対策", href: "/area/katsushika/meo" },
                { label: "HP制作の補助金活用", href: "/area/katsushika/web-design-subsidy" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: "13px", color: "#0d1b2a", textDecoration: "none", fontWeight: 600,
                  padding: "9px 18px", border: "1px solid #0d1b2a", background: "#FFFFFF",
                  borderRadius: "4px", letterSpacing: "0.02em",
                }}>
                  {l.label} →
                </Link>
              ))}
            </div>
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
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
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
                { n: "03", t: "SEO対策の方向性", b: "「葛飾区 〇〇」「亀有 〇〇」「金町 〇〇」などの地域名+業種・サービス名の複合キーワードで地元ユーザーへのアプローチを強化します。競合分析のうえ、上位表示を狙いやすいキーワードから順に施策を実施します。" },
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

        {/* Section 6: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry Focus</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別の集客ポイント（葛飾区）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              葛飾区の主要業種ごとに、MEO・SEO・Web集客の重点ポイントが異なります。業種特性と地域性を掛け合わせた戦略を設計します。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  n: "01",
                  t: "飲食店",
                  b: "亀有・金町・新小岩エリアは飲食店の競合が多く、Googleマップの上位3枠（ローカルパック）に入るためにはGBPの口コミ数・評価・写真品質が決め手となります。「亀有 ランチ」「金町 居酒屋」「立石 焼き鳥」などのキーワードごとに競合状況が異なるため、ターゲットキーワードを絞った重点施策が有効です。柴又は観光客狙いの「柴又 甘味処」「柴又 ランチ」系キーワードで差別化の余地があります。",
                },
                {
                  n: "02",
                  t: "美容室・ネイルサロン",
                  b: "「亀有 美容室」「金町 ネイルサロン」などの検索では、GBPの施術写真と口コミの質・量が順位に直結します。定期的な写真更新（施術事例・スタッフ・内装）と、来店後に口コミ投稿を促すオペレーション設計がMEO対策の核心です。Instagramとの連携で指名検索を増やし、MEOとの相乗効果を狙う戦略も効果的です。",
                },
                {
                  n: "03",
                  t: "整骨院・鍼灸院",
                  b: "「葛飾区 整骨院」「亀有 鍼灸」などのキーワードは保険適用・自由診療の両方で検索需要があります。自由診療（美容鍼・スポーツ障害など）はローカルSEOとLPの組み合わせが有効です。Googleビジネスプロフィールには診療時間・駐車場情報・施術メニューを詳細に記載し、「何が得意か」が伝わる口コミを積み上げることが集患の鍵となります。",
                },
                {
                  n: "04",
                  t: "歯科クリニック",
                  b: "「葛飾区 歯医者」「亀有 歯科」は競合が多いキーワードですが、「金町 小児歯科」「新小岩 矯正歯科」「立石 インプラント」などの専門性を示す複合キーワードは競合が少なく狙い目です。GBPに院内写真・スタッフ写真・診療メニューをしっかり掲載し、既存患者からの口コミ獲得フローを整備することで着実に集患できます。",
                },
                {
                  n: "05",
                  t: "工務店・リフォーム会社",
                  b: "「葛飾区 リフォーム」「亀有 外壁塗装」「金町 水回りリフォーム」などの地域名＋施工種別キーワードでのSEOが中心です。施工事例ページを蓄積しコンテンツSEOを強化することで、検索意図に合った見込み客を継続的に集客できます。Googleビジネスプロフィールへの施工写真掲載と口コミ管理も重要な施策です。",
                },
                {
                  n: "06",
                  t: "学習塾・個別指導塾",
                  b: "「亀有 塾」「金町 個別指導」「新小岩 学習塾」などの駅名＋塾キーワードは競合が限定的で、SEO・MEO両面での上位表示が狙えます。中学受験・高校受験・大学受験など受験種別のコンテンツSEOに加え、Googleマップでの口コミ（保護者・生徒の声）の蓄積が信頼性向上と集客に直結します。",
                },
                {
                  n: "07",
                  t: "不動産会社",
                  b: "「葛飾区 賃貸」「亀有 不動産」「金町 マンション売却」などのキーワードは大手ポータル（SUUMO・HOME'S）との競合が激しく、独自サイトでの上位表示には差別化コンテンツが必要です。「葛飾区 新築一戸建て」「立石 リノベマンション」などのニッチキーワードと、地域情報コンテンツ（エリアガイド・学区情報）を組み合わせたSEOが有効です。",
                },
                {
                  n: "08",
                  t: "士業（税理士・行政書士・司法書士）",
                  b: "「葛飾区 税理士」「亀有 行政書士」「金町 相続相談」などの地域名＋業種・相談種別キーワードでのSEOが集客の主軸となります。専門性を示すコラム・FAQ・Q&Aコンテンツを蓄積することでE-E-A-T（経験・専門性・権威性・信頼性）を高め、AIによる検索引用（AIO対策）にも対応した質の高い情報提供が差別化につながります。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: "1px solid #E8E4DC" }}>
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

        {/* Section 7: 実装フロー */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区での集客支援 — 実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              ご相談から施策実行・効果測定まで、葛飾区拠点のサイプレスが一貫して対応します。各ステップで対面またはリモートにて進捗を確認しながら進めます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  step: "STEP 01",
                  t: "無料相談・ヒアリング（訪問 or リモート）",
                  b: "葛飾区内への訪問、またはZoom・電話にてビジネスの現状・課題・目標をヒアリングします。現在のWebサイト・GBPの状況、競合環境を確認し、最適な施策の方向性を整理します。",
                },
                {
                  step: "STEP 02",
                  t: "現状診断・競合分析",
                  b: "GBP（Googleビジネスプロフィール）の最適化スコア診断、SEO現状分析、競合調査を実施します。「亀有 〇〇」「葛飾区 〇〇」などの主要キーワードにおける競合の強さと勝ち筋を明確にします。",
                },
                {
                  step: "STEP 03",
                  t: "施策プランのご提案",
                  b: "診断結果をもとに、MEO対策・SEO対策・ホームページ制作・SNS運用の優先順位と実施スケジュールを提案します。葛飾区の地域特性と業種別のノウハウを踏まえたカスタム提案を行います。",
                },
                {
                  step: "STEP 04",
                  t: "GBP最適化・MEO施策の開始",
                  b: "Googleビジネスプロフィールのカテゴリ設定・営業時間・写真・サービス情報・属性を完全最適化します。定期投稿の開始と口コミ増加のための導線設計を同時に行い、Googleマップ上位表示への基盤を構築します。",
                },
                {
                  step: "STEP 05",
                  t: "SEOコンテンツ・サイト改善",
                  b: "「葛飾区 〇〇」などのターゲットキーワードに対応したページ制作・既存コンテンツの改善を実施します。内部SEO（タイトル・メタ・構造化データ・表示速度）の最適化と合わせて、検索順位の向上を目指します。",
                },
                {
                  step: "STEP 06",
                  t: "口コミ・SNS・LPの連携強化",
                  b: "口コミ増加施策（来店後フォロー・QRコード設置）、Instagram運用指導、またはランディングページ制作を並行して進めます。MEO・SEO・SNSの相互補完でトータルの集客力を高めます。",
                },
                {
                  step: "STEP 07",
                  t: "月次レポート・効果測定",
                  b: "GBPのインサイトデータ（表示回数・通話数・ルート案内数）、検索順位、サイトアクセス数を毎月レポートします。葛飾区内での競合動向の変化を踏まえながら、次月の施策優先度を調整します。",
                },
                {
                  step: "STEP 08",
                  t: "継続改善・商圏拡大",
                  b: "葛飾区内での集客基盤が固まった後は、隣接する足立区・江戸川区・墨田区への商圏拡大施策を提案します。エリアをまたいだキーワード戦略とGBP管理で、さらに広い顧客獲得を支援します。",
                },
              ].map((item, idx) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: idx === 0 ? "none" : "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "80px" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.1em", display: "block" }}>{item.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: サイプレスに依頼するメリット（ダーク背景） */}
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
                { n: "05", t: "業種別ノウハウの蓄積", b: "飲食・美容・医療・士業・工務店など多様な業種への支援経験を積んでいます。葛飾区の地域特性と組み合わせた業種別の集客戦略を提案できることが、地域専門会社としての強みです。" },
                { n: "06", t: "中小企業・個人事業主に寄り添う価格設計", b: "大企業向けの高額パッケージではなく、葛飾区の中小企業・個人事業主が無理なく継続できる料金設計を心がけています。まずは単発の診断・改善提案からスタートすることも可能です。" },
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

        {/* Section: ホームページ制作・補助金活用 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Web Design & Subsidy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区でホームページ制作や補助金活用を検討する場合
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" }}>
              葛飾区にはホームページ作成費補助など、区内事業者向けの支援制度が用意されている場合があります。制度内容は年度によって変わるため、必ず葛飾区公式サイトで最新情報をご確認ください。補助金の対象になるかどうかだけでなく、SEO・MEO・問い合わせ導線まで含めて制作内容を設計することが、集客効果を高める上で重要です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
              {[
                { t: "ホームページ制作 + SEO設計", b: "「葛飾区 〇〇」「亀有 〇〇」などのキーワードで検索上位を狙うSEO設計を、制作段階から組み込みます。" },
                { t: "MEO対策との連動", b: "ホームページとGoogleビジネスプロフィールの情報を統一し、地域検索での信頼性を高めます。" },
                { t: "問い合わせ導線設計", b: "電話・フォーム・LINE・予約システムなど、業種に最適な問い合わせ導線を設計します。" },
                { t: "補助金時の見積内容整理", b: "申請に必要な制作内容・見積書の整理をサポートします（採択・支給の保証はできません）。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "22px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link
                href="/area/katsushika/web-design"
                style={{
                  display: "inline-block",
                  background: "#0d1b2a",
                  color: "#fff",
                  padding: "13px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                葛飾区のホームページ制作について詳しく見る →
              </Link>
              <Link
                href="/area/katsushika/web-design-subsidy"
                style={{
                  display: "inline-block",
                  background: "#FFFFFF",
                  color: "#0d1b2a",
                  border: "1px solid #0d1b2a",
                  padding: "13px 24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                補助金活用の進め方を見る →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="葛飾区に関するよくある質問" bgColor="#F9F8F5" />

        {/* 葛飾区の専門コラム（トピッククラスター） */}
        <section style={{ background: "#f8f6f2", padding: "clamp(56px, 8vh, 96px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Katsushika Columns</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区のWeb集客 — 専門コラム
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "40px" }}>
              業種別・エリア別・施策別に、葛飾区でのWeb集客の実務ノウハウを解説しています。地元で実際に支援している視点から、具体的な手順と数字でお伝えします。
            </p>

            {[
              {
                group: "業種別の集客ノウハウ",
                items: [
                  { href: "/column/katsushika-restaurant-meo", label: "飲食店のGoogleマップ集客" },
                  { href: "/column/katsushika-hair-salon-shukyaku", label: "美容室の集客ガイド" },
                  { href: "/column/katsushika-clinic-shukyaku", label: "クリニック・歯科の集患" },
                  { href: "/column/katsushika-seikotsuin-shukyaku", label: "整骨院・接骨院の集客" },
                  { href: "/column/katsushika-komuten-reform", label: "工務店・リフォームの集客" },
                  { href: "/column/katsushika-shigyo-shukyaku", label: "士業のWeb集客" },
                  { href: "/column/katsushika-juku-shukyaku", label: "学習塾の生徒募集" },
                  { href: "/column/katsushika-fudosan-shukyaku", label: "不動産会社のWeb集客" },
                  { href: "/column/katsushika-nail-esthe-shukyaku", label: "ネイル・エステサロンの集客" },
                  { href: "/column/katsushika-pet-shop-trimming", label: "ペットショップ・トリミング" },
                  { href: "/column/katsushika-cleaning-service", label: "ハウスクリーニング・便利屋" },
                  { href: "/column/katsushika-local-store-ec", label: "商店・小売店のネット販売" },
                  { href: "/column/katsushika-gym-fitness-shukyaku", label: "フィットネスジムの集客" },
                  { href: "/column/katsushika-yoga-dance-studio", label: "ヨガ・ダンススタジオの集客" },
                  { href: "/column/katsushika-eikaiwa-shukyaku", label: "英会話・プログラミング教室" },
                  { href: "/column/katsushika-ongaku-kyoshitsu", label: "音楽教室・そろばん教室" },
                  { href: "/column/katsushika-hoikuen-yochien", label: "保育園・幼稚園・学童保育" },
                  { href: "/column/katsushika-kaigo-shisetsu", label: "介護施設・訪問看護" },
                  { href: "/column/katsushika-jidousha-kyoshujo", label: "自動車教習所・整備工場" },
                  { href: "/column/katsushika-hikkoshi-unsou", label: "引越し業者・運送会社" },
                  { href: "/column/katsushika-kekkon-soudanjo", label: "結婚相談所・探偵事務所" },
                  { href: "/column/katsushika-sougi-butsudan", label: "葬儀社・仏壇店" },
                  { href: "/column/katsushika-cafe-bakery-shukyaku", label: "カフェ・ベーカリーの集客" },
                  { href: "/column/katsushika-izakaya-bar-shukyaku", label: "居酒屋・バーの集客" },
                  { href: "/column/katsushika-ramen-curry-shukyaku", label: "ラーメン店・カレー店の集客" },
                  { href: "/column/katsushika-wagashi-sakaya", label: "和菓子屋・酒屋の集客" },
                  { href: "/column/katsushika-hanaya-shashinkan", label: "花屋・写真館の集客" },
                  { href: "/column/katsushika-jitensha-ten", label: "自転車店の集客" },
                  { href: "/column/katsushika-chuuko-jidousha", label: "中古車販売・買取店の集客" },
                  { href: "/column/katsushika-kimono-rental-ryokou", label: "着物レンタル・旅行会社" },
                  { href: "/column/katsushika-insatsu-kanban", label: "印刷会社・看板製作会社" },
                  { href: "/column/katsushika-sekkei-denki-suido", label: "設計事務所・電気水道工事店" },
                ],
              },
              {
                group: "専門サービス・その他業種",
                items: [
                  { href: "/column/katsushika-manshon-kanri", label: "マンション管理会社の集客" },
                  { href: "/column/katsushika-coworking-rental-space", label: "コワーキング・レンタルスペース" },
                  { href: "/column/katsushika-zoen-kaitai", label: "造園業・解体工事業の集客" },
                  { href: "/column/katsushika-kaji-daikou", label: "家事代行・ベビーシッター" },
                  { href: "/column/katsushika-biyou-clinic", label: "美容クリニックの集患" },
                  { href: "/column/katsushika-karate-budo", label: "空手・柔道場の集客" },
                  { href: "/column/katsushika-ryouri-kyoshitsu", label: "料理教室・パン教室の集客" },
                  { href: "/column/katsushika-pet-reien", label: "ペット霊園・ペット葬儀" },
                  { href: "/column/katsushika-keiei-consul", label: "経営コンサルタントの集客" },
                  { href: "/column/katsushika-souzoku-shukatsu", label: "生前整理・終活サポート" },
                ],
              },
              {
                group: "エリア・駅別の集客戦略",
                items: [
                  { href: "/column/kameari-meo-shukyaku", label: "亀有の店舗集客ガイド" },
                  { href: "/column/kanamachi-meo-shukyaku", label: "金町の店舗集客ガイド" },
                  { href: "/column/shinkoiwa-meo-shukyaku", label: "新小岩の店舗集客ガイド" },
                  { href: "/column/tateishi-meo-shukyaku", label: "立石の店舗集客ガイド" },
                  { href: "/column/shibamata-inbound-shukyaku", label: "柴又の観光集客・インバウンド" },
                  { href: "/column/aoto-takasago-ohanajaya-horikiri-meo", label: "青砥・高砂・お花茶屋・堀切" },
                ],
              },
              {
                group: "施策別の実践ノウハウ",
                items: [
                  { href: "/column/katsushika-gbp-setup", label: "GBP設定完全ガイド" },
                  { href: "/column/katsushika-kuchikomi-taisaku", label: "口コミを増やす方法" },
                  { href: "/column/katsushika-google-map-junni-sagaru", label: "マップ順位が上がらない9つの原因" },
                  { href: "/column/katsushika-local-seo-keyword", label: "ローカルSEOキーワード選定術" },
                  { href: "/column/katsushika-competitor-analysis", label: "競合分析のやり方" },
                  { href: "/column/katsushika-instagram-shukyaku", label: "Instagram集客の運用設計" },
                  { href: "/column/katsushika-line-shukyaku", label: "LINE公式アカウント活用" },
                  { href: "/column/katsushika-aio-taisaku", label: "AIO対策（AI検索）" },
                  { href: "/column/katsushika-hp-seo-checklist", label: "ホームページSEOチェックリスト" },
                  { href: "/column/katsushika-web-shukyaku-hiyo", label: "Web集客の費用相場" },
                  { href: "/column/katsushika-inbound-tagengo", label: "インバウンド・多言語対応" },
                  { href: "/column/katsushika-saiyo-site", label: "採用サイト戦略" },
                  { href: "/column/katsushika-web-design-cost", label: "ホームページ制作の費用" },
                  { href: "/column/katsushika-web-design-company-guide", label: "制作会社の選び方" },
                  { href: "/column/katsushika-homepage-renewal", label: "ホームページのリニューアル" },
                  { href: "/column/katsushika-startup-web-design", label: "開業・創業時のHP準備" },
                  { href: "/column/katsushika-gbp-photo-strategy", label: "GBP写真戦略の完全ガイド" },
                  { href: "/column/katsushika-page-speed-mobile", label: "表示速度・スマホ最適化" },
                  { href: "/column/katsushika-blog-content-seo", label: "店舗ブログのコンテンツSEO" },
                  { href: "/column/katsushika-youtube-shukyaku", label: "YouTube集客のはじめ方" },
                  { href: "/column/katsushika-yoyaku-system", label: "予約システム導入ガイド" },
                  { href: "/column/katsushika-chatbot-donyuu", label: "チャットボット導入ガイド" },
                  { href: "/column/katsushika-it-hojokin", label: "IT導入補助金の活用" },
                  { href: "/column/katsushika-domain-server", label: "ドメイン・サーバー選び" },
                  { href: "/column/katsushika-analytics-kaizen", label: "アクセス解析・改善サイクル" },
                  { href: "/column/katsushika-fukusuu-tenpo-gbp", label: "複数店舗のGBP管理術" },
                ],
              },
              {
                group: "比較・課題解決",
                items: [
                  { href: "/column/katsushika-seo-vs-listing-ad", label: "SEO vs リスティング広告" },
                  { href: "/column/katsushika-jisaku-vs-seisakugaisha", label: "HP自作 vs 制作会社" },
                  { href: "/column/katsushika-wordpress-vs-static", label: "WordPress vs 静的サイト" },
                  { href: "/column/katsushika-hotpepper-vs-jishagata", label: "ポータルサイト vs 自社集客" },
                  { href: "/column/katsushika-ooteagency-vs-chiiki", label: "大手代理店 vs 地域密着会社" },
                  { href: "/column/katsushika-hp-koka-nai", label: "HPの効果が出ない原因" },
                  { href: "/column/katsushika-shukyaku-dekinai-tenpo", label: "集客できない店舗の特徴" },
                  { href: "/column/katsushika-kaigyou-hangaku-shukyaku-zero", label: "開業半年で集客ゼロから脱出" },
                  { href: "/column/katsushika-repeat-fuenai", label: "リピーターが増えない原因" },
                  { href: "/column/katsushika-kyuujin-konai", label: "求人応募が来ない原因" },
                ],
              },
            ].map((block) => (
              <div key={block.group} style={{ marginBottom: "36px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "14px", paddingBottom: "10px", borderBottom: "1px solid #E8E4DC" }}>
                  {block.group}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {block.items.map((l) => (
                    <Link key={l.href} href={l.href} style={{
                      fontSize: "13px", color: "#374151", textDecoration: "none",
                      padding: "8px 14px", border: "1px solid #E8E4DC", background: "#FFFFFF",
                      borderRadius: "4px", letterSpacing: "0.02em",
                    }}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 成功事例への誘導 */}
        <section style={{ background: "#FFFFFF", padding: "clamp(48px, 7vh, 80px) 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "16px", textTransform: "uppercase" }}>Success Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別・施策別のWeb集客成功事例
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.9", maxWidth: "620px", marginBottom: "24px" }}>
              飲食店・美容室・クリニックなど業種別、MEO・SEO・ホームページ制作など施策別の成功事例を公開しています。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { label: "成功事例一覧", href: "/cases" },
                { label: "MEO対策の成功事例", href: "/cases/service/meo" },
                { label: "SEO対策の成功事例", href: "/cases/service/seo" },
                { label: "ホームページ制作の成功事例", href: "/cases/service/web-design" },
                { label: "飲食店の成功事例", href: "/cases/industry/restaurant" },
                { label: "美容室・サロンの成功事例", href: "/cases/industry/beauty-salon" },
                { label: "クリニックの成功事例", href: "/cases/industry/clinic" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  fontSize: "13px", color: "#374151", textDecoration: "none",
                  padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}>
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

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
