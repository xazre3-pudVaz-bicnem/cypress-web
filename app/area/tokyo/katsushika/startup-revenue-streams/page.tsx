import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で創業初期に収益柱を増やす方法｜販売パートナー制度の活用｜株式会社サイプレス",
  description:
    "葛飾区で創業・起業する方向けに、創業初期の収益柱づくりと、Web集客サービスを地域事業者へ紹介できる販売パートナー制度の活用方法を解説します。",
  keywords: [
    "葛飾区 起業 副業",
    "葛飾区 創業 収益",
    "葛飾区 副業 営業",
    "葛飾区 代理店募集",
    "葛飾区 販売代理店",
    "葛飾区 取次店募集",
    "葛飾区 独立 営業",
  ],
  openGraph: {
    title: "葛飾区で創業初期に収益柱を増やす方法｜販売パートナー制度の活用",
    description: "葛飾区で創業・起業する方向けに、創業初期の収益柱づくりと、Web集客サービスを地域事業者へ紹介できる販売パートナー制度の活用方法を解説します。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-revenue-streams",
  },
};

const faqItems = [
  {
    q: "葛飾区で創業と同時に販売パートナー活動を始められますか？",
    a: "はい、可能です。創業直後から活動を開始できます。地域の人脈・知人の事業者を対象にWeb集客サービスを紹介する形で活動できます。成果・収入を保証するものではありません。",
  },
  {
    q: "専門的なSEO・MEOの知識がなくても紹介できますか？",
    a: "専門知識は不要です。詳細な提案・制作・運用はサイプレスが担当します。パートナーの役割は基本的に「紹介すること」です。簡易資料・よくある質問集も提供しています。",
  },
  {
    q: "収入はどのくらい期待できますか？",
    a: "成果・収入を保証するものではありません。成約には商談内容・提案先の状況・タイミングが影響します。詳細は個別のご相談の中でご案内します。まずはお問い合わせください。",
  },
  {
    q: "強引な営業はしなければいけませんか？",
    a: "強引な営業は禁止しています。必要としている事業者への自然な紹介を前提としており、断られた場合は無理に進めないことを方針としています。押し売りは行わないでください。",
  },
  {
    q: "取次と代理店の違いは何ですか？",
    a: "取次は紹介のみを行うシンプルな形態です。代理店はより主体的に提案・販売を行う形態です。サイプレスの制度では「紹介のみ」のシンプルな取次から参加できます。詳細は個別にご案内します。",
  },
  {
    q: "既存の自社ビジネスと並行して活動できますか？",
    a: "はい、可能です。自社サービスの構築・販売と並行して、地域事業者への紹介活動を行うことができます。自社サービスが安定するまでの期間を補う収益柱の一つとして検討できます。",
  },
  {
    q: "葛飾区外の事業者にも紹介できますか？",
    a: "はい、全国対応可能です。葛飾区・東京都内が最も対応実績が豊富ですが、オンラインでのサービス提供のため、地域を問わず紹介いただけます。",
  },
  {
    q: "紹介後のフォローはどうなりますか？",
    a: "紹介後の詳細提案・制作・運用・顧客対応はすべてサイプレスが担当します。パートナーの皆様に過度な負担をかけません。詳細な商談が必要な場合は、サイプレスの担当者が対応します。",
  },
  {
    q: "開業してすぐに成約が見込めますか？",
    a: "成果は保証するものではありません。成約には商談内容・提案先の状況・タイミングが影響します。営業経験や地域事業者との接点を活かせる可能性はありますが、成果を保証するものではありません。",
  },
  {
    q: "販売パートナー制度の詳細はどこで確認できますか？",
    a: "「葛飾区で起業する方向け販売パートナー制度」ページ（/partner/katsushika-startup）または「Web集客サービスの代理店・取次店募集」ページ（/partner/local-sales-agent）でご確認ください。",
  },
];

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
  divider: { display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" } as React.CSSProperties,
  num: { fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" },
  itemTitle: { fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" },
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
        { "@type": "ListItem", position: 4, name: "葛飾区で創業初期に収益柱を増やす方法", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-revenue-streams" },
      ],
    },
    {
      "@type": "Service",
      name: "葛飾区創業者向け販売パートナー制度",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
        address: { "@type": "PostalAddress", addressCountry: "JP", postalCode: "124-0816", addressRegion: "東京都", addressLocality: "葛飾区", streetAddress: "白鳥4-6-1-623" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
      description: "葛飾区で創業する方向けに、Web集客サービスを地域事業者へ紹介できる販売パートナー制度。収益柱の一つとして検討できます。",
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

const unstableReasons = [
  { n: "01", t: "認知獲得に時間がかかる", b: "葛飾区内で自社サービスを知ってもらうまでには、口コミ・SEO・GBPが育つ期間が必要です。一般的に3〜6ヶ月以上かかることがあります。" },
  { n: "02", t: "SEO効果が出るまでの期間", b: "ホームページを制作してもすぐに検索上位に表示されるわけではありません。SEO効果は3〜6ヶ月以上かかることが一般的です。" },
  { n: "03", t: "リピーターが育つまでの期間", b: "創業直後はリピーターがおらず、常に新規顧客の獲得が必要な状態が続きます。リピーターが蓄積されるには時間がかかります。" },
  { n: "04", t: "口コミが広まるまでの期間", b: "Googleレビュー・SNS口コミが蓄積されるには複数回の施術・利用が必要です。開業直後は口コミ件数が少なく、信頼構築に時間がかかります。" },
  { n: "05", t: "競合との差別化が伝わるまでの期間", b: "自社の強み・差別化ポイントが検索ユーザーや地域の見込み顧客に伝わるまでには、コンテンツ蓄積・口コミ蓄積の期間が必要です。" },
  { n: "06", t: "創業時の季節的な集客ムラ", b: "業種によっては季節性がある場合があります。開業タイミングによっては、繁忙期・閑散期の影響を受けて売上が安定しにくいことがあります。" },
];

const multiRevenuesBenefits = [
  { n: "01", t: "経営の安定性が高まる", b: "単一の収益源に依存しないことで、一方の売上が下がっても全体の経営が安定します。" },
  { n: "02", t: "キャッシュフローのギャップを埋める", b: "自社サービスの売上が不安定な期間を補う収益を持つことで、資金繰りが改善します。" },
  { n: "03", t: "人脈・ネットワークが広がる", b: "紹介活動を通じて、地域事業者との接点が増えます。本業の受注につながる可能性もあります。" },
  { n: "04", t: "業界知識が広まる", b: "Web集客の知識・事例を紹介活動の中で自然に身につけることができます。" },
  { n: "05", t: "本業へのフィードバックになる", b: "他業種の事業者の課題を知ることで、自社の事業設計・集客設計へのヒントが得られることがあります。" },
];

const networkItems = [
  { n: "01", t: "地域コミュニティとのつながり", b: "葛飾区内の商工会・業界団体・朝活コミュニティなど、地域での活動を通じた事業者ネットワーク。" },
  { n: "02", t: "知人・元同僚の事業者", b: "前職の同僚・友人・知人で葛飾区近辺で事業をしている方々への自然な紹介活動。" },
  { n: "03", t: "同業者ネットワーク", b: "同業または異業種の経営者コミュニティを通じた接点の活用。" },
  { n: "04", t: "接点の活かし方", b: "「課題感の確認」→「サイプレスへの紹介」→「詳細商談はサイプレスが担当」というシンプルなフロー。" },
];

const reachableIndustries = [
  { t: "飲食店", b: "Googleマップの口コミ・写真が少ない。地域名検索への対応が不十分な店が多い。" },
  { t: "美容室・ネイルサロン", b: "SNS中心で、ホームページ・SEO対策が不十分なサロンが多い。" },
  { t: "整体・整骨院", b: "症状別ページ・地域名キーワード対応ページが不足しているケースが多い。" },
  { t: "士業（税理士・行政書士等）", b: "地域名検索での集客が重要で、コンテンツSEO・FAQページが効果的。" },
  { t: "不動産会社", b: "エリアガイド・物件情報の充実と地域名キーワードのSEO対応が集客の基盤。" },
  { t: "建設業・リフォーム会社", b: "施工事例ページの蓄積と地域名キーワード対応が受注増加につながる。" },
  { t: "クリニック・歯科医院", b: "専門分野別・地域名検索への対応が集患につながる。" },
  { t: "学習塾・個別指導塾", b: "地域名キーワードへのページ対応が集客に直結する。" },
];

const suitableItems = [
  { t: "営業経験がある", b: "前職で営業・提案・商談経験がある方は活動しやすい素地があります。" },
  { t: "地域の事業者と接点がある", b: "葛飾区内・近隣エリアの経営者・開業予定者とのつながりがある方。" },
  { t: "法人営業を経験した", b: "B2B営業の経験があり、経営者と話す機会が多かった方。" },
  { t: "話を聞いてもらいやすい人脈がある", b: "知人から相談を受けやすい関係性を持っている方。" },
  { t: "Web集客ニーズの高い業種の知人がいる", b: "飲食・美容・整体・士業など、Web集客課題を持ちやすい業種の知人がいる方。" },
  { t: "副業・複業として取り組みたい", b: "自社の本業と並行して、収益の多様化を検討している方。" },
];

const unsuitableItems = [
  { t: "押し売り・強引な営業をしたい", b: "強引な営業は禁止しています。必要としている事業者への自然な紹介のみを前提としています。" },
  { t: "短期で確実な収入を求めている", b: "成果・収入を保証するものではありません。確実な収入を求めている方には向いていません。" },
  { t: "専門知識なしで高額報酬を期待している", b: "報酬は成約ベースです。専門知識がなくても参加できますが、確実な収入を保証するものではありません。" },
  { t: "事業者への紹介活動に抵抗がある", b: "知人・地域の事業者への紹介活動が基本となるため、営業活動自体に抵抗がある方には向いていません。" },
];

const relatedLinks = [
  { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向け販売パートナー制度を見る", desc: "制度の詳細ページ（CV最重要）" },
  { href: "/partner/local-sales-agent", label: "Web集客サービスの代理店・取次店募集を見る", desc: "全国向け代理店・取次店制度" },
  { href: "/area/tokyo/katsushika/start-business", label: "創業者向けハブページを見る", desc: "起業準備の総合ガイド" },
  { href: "/area/tokyo/katsushika/startup-web-marketing", label: "創業時のWeb集客ガイドを見る", desc: "GBP・SEO・MEOの優先順位" },
  { href: "/area/tokyo/katsushika/start-business-checklist", label: "開業準備チェックリストを見る", desc: "8カテゴリ57項目" },
  { href: "/partner", label: "パートナー制度の一覧を見る", desc: "全パートナー制度の一覧" },
  { href: "/column/startup-side-business-sales", label: "創業初期に副業・複業型の営業商材を持つメリット", desc: "収益柱の多様化を考える" },
  { href: "/column/local-sales-agent-checklist", label: "代理店・取次店を始める前のチェックリスト", desc: "活動前に確認すべき項目" },
  { href: "/column/web-marketing-partner-for-startups", label: "創業者がWeb集客商材を扱うメリット", desc: "商材の特性と注意点" },
  { href: "/column/katsushika-local-business-web-needs", label: "葛飾区の地域事業者にWeb集客ニーズがある理由", desc: "提案先の業種分析" },
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
              <span style={{ color: "#0d1b2a" }}>葛飾区で創業初期に収益柱を増やす方法</span>
            </nav>
            <p style={S.label}>Katsushika — Revenue Streams</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で創業初期に収益柱を増やす方法
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              創業初期に売上が安定しにくい理由と、収益柱の一つとして検討できる販売パートナー制度の活用方法を解説します。営業経験や人脈を活かせる可能性があります。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#6B7280", maxWidth: "640px", marginBottom: "36px" }}>
              成果は提案先や商談内容によって変わります。成果を保証するものではありません。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              販売パートナー制度について相談する
            </Link>
          </div>
        </section>

        {/* SECTION 2: 売上が安定しにくい理由 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Why Unstable</p>
            <h2 style={S.h2}>創業初期に売上が安定しにくい理由</h2>
            <div style={{ maxWidth: "800px" }}>
              {unstableReasons.map((item) => (
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

        {/* SECTION 3: 収益柱を複数持つメリット */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Benefits</p>
            <h2 style={S.h2}>収益柱を複数持つメリット</h2>
            <div style={{ maxWidth: "800px" }}>
              {multiRevenuesBenefits.map((item) => (
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

        {/* SECTION 4: 地域事業者との接点を活かす方法 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Local Network</p>
            <h2 style={S.h2}>地域事業者との接点を活かす方法</h2>
            <p style={S.body}>
              葛飾区での創業によって、地域の経営者・開業予定者との自然なつながりが生まれます。そのつながりを活かして、Web集客ニーズのある事業者を紹介できる可能性があります。地域事業者との接点を活かしやすい商材です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {networkItems.map((item) => (
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

        {/* SECTION 5: 取次モデル */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Referral Model</p>
            <h2 style={S.h2}>Web集客サービスを紹介する取次モデル</h2>
            <p style={S.body}>
              取次とは紹介のみを行うシンプルな形態です。代理店はより主体的に提案・販売を行う形態です。サイプレスの制度では「紹介のみ」のシンプルな参加から始めることができます。地域事業者との接点を活かしやすい商材であることが特徴です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", maxWidth: "860px" }}>
              {[
                { t: "取次（紹介のみ）", b: "知人・地域の事業者にサイプレスのサービスを紹介し、詳細はサイプレスに引き継ぐシンプルな形態。" },
                { t: "販売代理店（より主体的）", b: "サービスの提案・見積説明まで行い、成約につなげるより主体的な形態。詳細は個別にご案内します。" },
                { t: "専門知識不要", b: "詳細な提案・制作・運用はサイプレスが担当します。「課題感を確認して紹介する」だけでも活動できます。" },
                { t: "資料・FAQ集の提供", b: "サービス内容・よくある質問をまとめた簡易資料を提供しています。紹介時の説明に役立てていただけます。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: サイプレスの販売パートナー制度 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Partner Program</p>
            <h2 style={S.h2}>サイプレスの販売パートナー制度</h2>
            <p style={S.body}>
              株式会社サイプレスのホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを地域事業者へ紹介できる制度です。取次店（紹介）・販売代理店の2モデルがあります。専門知識は不要で、提案・制作・運用はサイプレスが担当します。成果を保証するものではありません。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", maxWidth: "860px" }}>
              {[
                { t: "専門知識不要", b: "SEO・MEO・ホームページ制作の専門知識がなくても活動できます。" },
                { t: "提案・制作・運用はサイプレスが担当", b: "パートナーの役割は「紹介すること」。詳細商談・制作・運用はサイプレスが担当します。" },
                { t: "資料提供あり", b: "サービス説明・よくある質問をまとめた資料を提供します。" },
                { t: "成果を保証するものではない", b: "成約には商談内容・提案先の状況・タイミングが影響します。成果・収入を保証するものではありません。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: 向いている人 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Suitable For</p>
            <h2 style={S.h2}>向いている人</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {suitableItems.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: 向いていない人 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Not Suitable For</p>
            <h2 style={S.h2}>向いていない人</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {unsuitableItems.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: 紹介しやすい業種 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Target Industries</p>
            <h2 style={S.h2}>紹介しやすい業種</h2>
            <p style={S.body}>Web集客課題を持ちやすい業種への紹介活動がしやすい環境です。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px", maxWidth: "900px" }}>
              {reachableIndustries.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                  <p style={{ fontSize: "12px", color: "#374151", lineHeight: "1.75" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: 報酬・契約条件 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Compensation</p>
            <h2 style={S.h2}>報酬・契約条件について</h2>
            <p style={S.body}>
              報酬体系の詳細は個別のご相談の中でご案内します。まずはお問い合わせください。
              成果・収入を保証するものではありません。成約には商談内容や提案先の状況が影響します。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              販売パートナー制度について相談する
            </Link>
          </div>
        </section>

        {/* SECTION 11: 注意事項 */}
        <section style={{ background: "#FEF9C3", padding: "64px 0" }}>
          <div style={S.container}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,24px)", color: "#78350F", fontWeight: 700, marginBottom: "20px" }}>注意事項</h2>
            <ul style={{ fontSize: "14px", color: "#78350F", lineHeight: "2", paddingLeft: "20px", maxWidth: "680px" }}>
              <li>誇大広告・虚偽の表現は禁止しています</li>
              <li>強引な営業・押し売りは禁止しています</li>
              <li>「必ず成約する」「必ず収入になる」という表現は使用を禁止しています</li>
              <li>月収・収入保証を約束することは禁止しています</li>
              <li>反社会的勢力との取引は禁止しています</li>
              <li>成果・収入を保証するものではありません。成約には商談内容・提案先の状況・タイミングが影響します</li>
            </ul>
          </div>
        </section>

        {/* SECTION 12: 関連ページ */}
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
          heading="葛飾区での収益柱づくり・販売パートナー制度についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="創業初期の収益柱づくりと販売パートナー制度について相談する"
          body="葛飾区での創業初期の収益柱として販売パートナー制度に興味をお持ちの方はお気軽にご連絡ください。成果を保証するものではありません。"
        />

      </main>
      <Footer />
    </>
  );
}
