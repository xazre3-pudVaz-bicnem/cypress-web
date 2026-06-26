import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区のホームページ制作・補助金活用支援｜SEOに強いWeb制作｜株式会社サイプレス",
  description:
    "葛飾区のホームページ制作と補助金・助成金の確認ポイントを解説。SEO・MEO対応のホームページ制作と、ホームページ作成費補助の注意点をまとめています。",
  keywords: [
    "葛飾区 ホームページ制作 補助金",
    "葛飾区 ホームページ作成費補助",
    "葛飾区 Web集客",
    "葛飾区 ホームページ制作",
    "葛飾区 デジタル化 補助金",
  ],
  openGraph: {
    title: "葛飾区のホームページ制作・補助金活用支援｜SEOに強いWeb制作",
    description: "葛飾区のホームページ制作と補助金・助成金の確認ポイントを解説。SEO・MEO対応のホームページ制作と、ホームページ作成費補助の注意点をまとめています。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika/web-design-subsidy",
  },
};

const faqItems = [
  {
    q: "葛飾区でホームページ制作の補助金を使えますか？",
    a: "葛飾区のホームページ作成費補助など、活用できる可能性がある制度があります。ただし制度内容は年度によって変わり、採択・支給を保証するものではありません。申請前に必ず葛飾区公式サイトで最新情報をご確認ください。",
  },
  {
    q: "補助金を使わなくてもホームページは作れますか？",
    a: "はい、自己資金でのホームページ制作も可能です。補助金の有無にかかわらず、制作範囲・費用の詳細はご相談ください。",
  },
  {
    q: "SEO設計込みのホームページと制作のみのホームページの違いは？",
    a: "SEO設計込みのホームページは、地域名キーワードを意識したページ構成・内部リンク・メタデータ設計が組み込まれています。制作のみのサイトは見た目は整っていても検索上位に出にくいケースがあります。長期的な集客効果に差が生まれます。",
  },
  {
    q: "補助金申請時に見積書は必要ですか？",
    a: "多くの補助金申請では、制作会社の正式な見積書の提出が求められます。見積書の発行は対応しています。詳細はご相談ください。",
  },
  {
    q: "補助金の申請代行をしてもらえますか？",
    a: "申請代行は行っていません。制作内容・制作範囲・見積書の整理については対応可能です。補助金の申請は申請者ご自身で行っていただく必要があります。",
  },
  {
    q: "ホームページ制作と同時にGBP（Googleビジネスプロフィール）も整備できますか？",
    a: "はい、ホームページ制作と並行してGBPの整備・MEO対策も対応しています。制作とMEOをセットで依頼することで、開業後すぐに地域名検索からの流入が期待できる環境を整えられます。",
  },
  {
    q: "葛飾区の小規模事業者向けの補助金はありますか？",
    a: "小規模事業者持続化補助金（商工会議所経由）など、ホームページ制作費が対象になる可能性がある制度があります。ただし制度内容は年度によって変わります。採択・支給を保証するものではありません。公式サイトでご確認ください。",
  },
  {
    q: "開業前にホームページを作成した方がよいですか？",
    a: "可能な限り開業前・開業直後の制作をお勧めします。SEO効果が出るまでに3〜6ヶ月以上かかることが一般的なため、早く始めるほど集客の立ち上がりが早くなります。",
  },
  {
    q: "スマートフォン対応・表示速度の最適化はしてもらえますか？",
    a: "はい。スマートフォン対応・表示速度最適化（Core Web Vitals対応）は標準で対応しています。モバイルファーストのSEO対策として必須の要件です。",
  },
  {
    q: "ホームページ制作の費用目安は？",
    a: "制作範囲・ページ数・機能・SEO設計の有無によって異なります。詳細なお見積りはご相談の中でご提示します。まずはどのようなサイトを作りたいかお知らせください。",
  },
];

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
  divider: { display: "flex", gap: "24px", padding: "20px 0", borderTop: "1px solid #E8E4DC" } as React.CSSProperties,
  num: { fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" },
  itemTitle: { fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" },
  itemBody: { fontSize: "14px", color: "#374151", lineHeight: "1.9" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "東京都葛飾区", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika" },
        { "@type": "ListItem", position: 4, name: "葛飾区のホームページ制作・補助金活用支援", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika/web-design-subsidy" },
      ],
    },
    {
      "@type": "Service",
      name: "葛飾区ホームページ制作・SEO・MEO",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
        address: { "@type": "PostalAddress", addressCountry: "JP", postalCode: "124-0816", addressRegion: "東京都", addressLocality: "葛飾区", streetAddress: "白鳥4-6-1-623" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
      description: "葛飾区のホームページ制作・SEO対策・MEO対策。補助金活用支援（申請代行は除く）も対応。",
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

const preCheckItems = [
  { n: "01", t: "制作の目的・ゴールの明確化", b: "問い合わせ増加・予約獲得・採用強化など、ホームページ制作の目的を明確にします。" },
  { n: "02", t: "SEO設計込みかどうかの確認", b: "制作のみのサイトとSEO設計込みのサイトでは長期的な集客力に差が出ます。制作会社の対応範囲を確認します。" },
  { n: "03", t: "補助金活用の可能性と注意点の確認", b: "補助金を活用する場合は「採択後に着手」が要件の場合があります。申請前に必ず公式サイトで要件を確認してください。" },
  { n: "04", t: "制作範囲・ページ数・機能の確認", b: "必要ページ・フォーム機能・ブログ機能・多言語対応など、制作範囲を事前に確定させます。" },
  { n: "05", t: "スマートフォン対応・表示速度の確認", b: "モバイルファーストのSEO対策として、スマートフォン対応と表示速度最適化は必須要件です。" },
];

const subsidyItems = [
  { t: "葛飾区ホームページ作成費補助", b: "葛飾区が提供するホームページ作成費用の一部を補助する制度。詳細は葛飾区公式サイトでご確認ください。※採択・支給を保証するものではありません。制度内容は年度によって変わります。" },
  { t: "小規模事業者持続化補助金", b: "商工会議所・商工会を通じて申請できる販路開拓支援の補助金。ホームページ制作費が対象になる場合があります。詳細は商工会議所確認。※採択・支給を保証するものではありません。" },
  { t: "IT導入補助金", b: "ITツール・ソフトウェアの導入を支援する補助金。対象要件は年度によって変わります。詳細は公式サイト確認。※採択・支給を保証するものではありません。" },
];

const subsidyCautionItems = [
  { n: "01", t: "申請時期・受付状況によっては締め切られている場合がある", b: "年度途中で予算が上限に達し、受付終了になるケースがあります。早めの確認が重要です。" },
  { n: "02", t: "採択率は状況次第", b: "応募が多い場合は採択されない可能性があります。補助金を前提にした計画は避けることをお勧めします。" },
  { n: "03", t: "補助率・上限額は年度によって変わる", b: "昨年と同じ条件とは限りません。必ず最新の公募要領でご確認ください。" },
  { n: "04", t: "採択後に制作着手が原則の場合がある", b: "採択前に制作を始めると補助対象外になる可能性があります。事前に要件を確認することが重要です。" },
  { n: "05", t: "対象外の費用がある場合がある", b: "補助対象になる費用の範囲が限定されていることがあります。見積書を準備する前に対象費用を確認します。" },
  { n: "06", t: "申請書類の準備に時間がかかる", b: "事業計画書・見積書・会社概要など、複数の書類が必要です。余裕を持ったスケジュールが必要です。" },
  { n: "07", t: "採択・支給を保証するものではない", b: "制度の要件を満たしても採択が保証されるわけではありません。補助金の有無にかかわらず制作を検討することをお勧めします。" },
];

const seoReasonItems = [
  { n: "01", t: "公式サイトは信頼性の受け皿になる", b: "独自ドメインのホームページがあることで、SNSや口コミで紹介された方が詳細を調べたときに信頼性が担保されます。" },
  { n: "02", t: "地域名検索で継続的に見つけてもらえる", b: "「葛飾区＋業種」の検索でホームページが上位表示されることで、投稿を止めても継続的な流入が期待できます。" },
  { n: "03", t: "Googleマップからの来店・問い合わせ", b: "GBPとホームページを連動させることで、Googleマップからホームページへの流入と問い合わせが期待できます。" },
  { n: "04", t: "料金・事例ページがあると商談しやすい", b: "問い合わせ前に料金・実績・サービス内容を確認できると、商談がスムーズに進みやすくなります。" },
  { n: "05", t: "AI検索にも対応が必要", b: "ChatGPT・Gemini・Perplexityでの引用を狙うには、E-E-A-T・FAQ・構造化データを意識したサイト設計が必要です。" },
  { n: "06", t: "SNS投稿だけでは資産化しにくい", b: "SNS投稿は時系列に流れていきますが、SEO対応のホームページは検索資産として蓄積されます。" },
];

const estimateReasonItems = [
  { n: "01", t: "補助金申請時に見積書が必要な場合がある", b: "多くの補助金申請では、制作会社の正式な見積書の提出が求められます。" },
  { n: "02", t: "制作範囲が曖昧だと後で追加費用が発生する", b: "ページ数・機能・SEO設計の有無を事前に確定させることで、制作中の追加費用を防げます。" },
  { n: "03", t: "SEO設計込みかどうかで長期の効果が変わる", b: "制作のみのサイトとSEO設計込みのサイトでは、長期的な集客効果に差が出ます。" },
  { n: "04", t: "スマホ対応・表示速度の確認", b: "モバイルファーストのSEO対策として、スマートフォン対応と高速表示は必須です。" },
  { n: "05", t: "問い合わせ導線の設計確認", b: "フォーム設計・CTAボタン・電話リンクなど、問い合わせ導線の設計を事前に確認します。" },
];

const serviceItems = [
  { t: "ホームページ制作（SEO設計込み）", b: "地域名キーワード・モバイル対応・高速表示を考慮したSEO設計込みのホームページを制作します。" },
  { t: "SEO対策（ローカルSEO）", b: "「葛飾区＋業種」「亀有・金町・新小岩＋業種」などの地域キーワードでの上位表示を目指します。" },
  { t: "MEO対策（GBP最適化）", b: "Googleビジネスプロフィールの最適化・定期投稿・口コミ管理・写真更新をサポートします。" },
  { t: "AIO対策（AI検索対策）", b: "ChatGPT・Gemini・Perplexityで引用されやすいコンテンツ・構造化データ設計。" },
  { t: "見積書・制作範囲の整理", b: "補助金申請に必要な見積書発行・制作範囲の明示に対応しています。申請代行は行っていません。" },
  { t: "Web集客パッケージ", b: "制作+SEO+MEO+問い合わせ導線設計をセットで提供。" },
];

const relatedLinks = [
  { href: "/area/tokyo/katsushika/startup-funding", label: "葛飾区の創業資金・補助金を確認する前に知っておきたいこと", desc: "補助金・融資の確認ポイント" },
  { href: "/pricing/web-growth-package", label: "Web集客パッケージの料金を確認する", desc: "制作+SEO+MEOのセット料金" },
  { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向け販売パートナー制度を見る", desc: "収益柱の一つとして検討できます" },
  { href: "/contact", label: "ホームページ制作・補助金活用について相談する", desc: "まずはご相談ください" },
  { href: "/area/tokyo/katsushika/start-business", label: "葛飾区で起業する方向け総合ガイドを見る", desc: "創業者向けハブページ" },
  { href: "/area/katsushika/web-design-subsidy", label: "葛飾区Web集客・ホームページ制作の詳細を見る", desc: "葛飾区エリア対応ページ" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "72px" }}>
          <div style={S.container}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/tokyo/katsushika" style={{ color: "#6B7280" }}>東京都葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>ホームページ制作・補助金活用支援</span>
            </nav>
            <p style={S.label}>Katsushika — Web Design &amp; Subsidy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区のホームページ制作・補助金活用支援
            </h1>
            <div style={{ background: "#FEF9C3", border: "1px solid #FDE68A", borderRadius: "8px", padding: "20px 24px", maxWidth: "720px", marginBottom: "32px" }}>
              <p style={{ fontWeight: 700, color: "#78350F", fontSize: "14px", marginBottom: "8px" }}>重要なご注意</p>
              <p style={{ fontSize: "14px", color: "#78350F", lineHeight: "1.85" }}>
                補助金・助成金の採択・支給を保証するものではありません。制度内容は年度によって変わります。申請前に必ず葛飾区公式サイトをご確認ください。株式会社サイプレスは行政機関ではありません。
              </p>
            </div>
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              ホームページ制作内容と見積範囲を相談する
            </Link>
          </div>
        </section>

        {/* SECTION 2: 制作前に確認すること */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Before Production</p>
            <h2 style={S.h2}>葛飾区でホームページ制作をする前に確認すること</h2>
            <div style={{ maxWidth: "800px" }}>
              {preCheckItems.map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: 使える可能性がある制度 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Possible Subsidies</p>
            <h2 style={S.h2}>葛飾区で使える可能性がある補助金・制度</h2>
            <p style={S.body}>以下の制度が確認先として一般的です。公式サイトで最新情報をご確認ください。採択・支給を保証するものではありません。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {subsidyItems.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: 補助金活用の注意点 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Caution Points</p>
            <h2 style={S.h2}>ホームページ作成費補助の確認ポイント</h2>
            <div style={{ maxWidth: "800px" }}>
              {subsidyCautionItems.map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: SEO・MEO設計込みの重要性 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Why SEO Design</p>
            <h2 style={S.h2}>SEO・MEO設計込みホームページ制作の重要性</h2>
            <div style={{ maxWidth: "800px" }}>
              {seoReasonItems.map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: 補助金申請前に見積書を整理する理由 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Estimate First</p>
            <h2 style={S.h2}>補助金申請前に見積書を整理する理由</h2>
            <div style={{ maxWidth: "800px" }}>
              {estimateReasonItems.map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: サービス概要 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Our Services</p>
            <h2 style={S.h2}>サイプレスのホームページ制作サービス概要</h2>
            <p style={S.body}>葛飾区を拠点とする株式会社サイプレスが提供するWebサービスの一覧です。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {serviceItems.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: 公式情報リンク */}
        <section style={{ background: "#ffffff", padding: "64px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Official Links</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>公式情報リンク</h2>
            <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "20px" }}>※各制度の申請条件・内容は必ず公式サイトでご確認ください（確認推奨日: 2026年6月）</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", maxWidth: "600px" }}>
              {[
                { label: "葛飾区公式サイト", href: "https://www.city.katsushika.lg.jp/" },
                { label: "小規模事業者持続化補助金（商工会議所）", href: "https://www.jcci.or.jp/" },
                { label: "IT導入補助金（公式）", href: "https://it-shien.smrj.go.jp/" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: "#0d1b2a", fontWeight: 600, fontSize: "14px", textDecoration: "underline" }}>
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 9: 関連ページ */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px", lineHeight: 1.5 }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="葛飾区のホームページ制作・補助金についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="葛飾区でのホームページ制作・SEO・MEOの内容と費用を相談する"
          body="制作範囲・費用・補助金申請時の見積書発行に関するご相談はお気軽にどうぞ。申請代行は行っていません。"
        />

      </main>
      <Footer />
    </>
  );
}
