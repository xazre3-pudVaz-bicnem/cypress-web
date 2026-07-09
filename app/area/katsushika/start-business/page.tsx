import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で起業する方への開業準備ガイド｜支援制度・Web集客の始め方｜株式会社サイプレス",
  description:
    "葛飾区で起業・創業を検討している方向けの開業準備ガイド。区内で確認したい支援制度の調べ方、開業前に整えるべきホームページ・Web集客の基礎、収益源としての販売パートナー制度を紹介します。",
  keywords: [
    "葛飾区 起業",
    "葛飾区 創業",
    "葛飾区 開業",
    "葛飾区 創業支援",
    "葛飾区 事業 始める",
    "葛飾区 創業相談",
    "葛飾区 個人事業主 開業",
    "葛飾区 法人設立",
    "葛飾区 起業 ホームページ",
    "葛飾区 開業 集客",
  ],
  openGraph: {
    title: "葛飾区で起業する方への開業準備ガイド｜支援制度・Web集客の始め方",
    description:
      "葛飾区で起業・創業を検討している方向けの開業準備ガイド。支援制度の調べ方、開業前に整えるホームページ・Web集客の基礎、販売パートナー制度を紹介します。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/katsushika/start-business",
  },
};

const faqItems = [
  {
    q: "葛飾区で起業する際に相談できる窓口はありますか？",
    a: "葛飾区では創業支援に関する相談窓口や創業塾を設けている場合があります。制度内容は年度によって変わるため、葛飾区公式サイトまたは産業経済課などの担当窓口で最新情報をご確認ください。株式会社サイプレスは行政機関ではありませんが、ホームページ制作・Web集客の観点から創業準備をサポートできます。",
  },
  {
    q: "葛飾区で創業する場合、ホームページはいつ作れば良いですか？",
    a: "開業と同時、または開業前からホームページを準備することをおすすめします。開業後すぐに集客が必要な業種（飲食・美容・整体など）は、開業日に合わせてサイトを公開することで、開業直後から検索流入を狙えます。補助金を活用する場合は、申請タイミングと制作着手のタイミングに注意が必要です。",
  },
  {
    q: "創業時の資金に関する支援制度はありますか？",
    a: "葛飾区では中小企業融資あっせん制度など、創業時の資金調達を支援する制度がある場合があります。制度内容・条件・上限額は年度によって変わる可能性があります。必ず葛飾区公式サイトまたは担当窓口で最新情報をご確認ください。株式会社サイプレスでは融資の採択や申請代行は行っていません。",
  },
  {
    q: "葛飾区で個人事業主として開業した場合、ホームページは必要ですか？",
    a: "個人事業主でもホームページは集客の基盤として重要です。SNSだけでは、検索エンジンからの集客や、Googleマップと連動した信頼性の向上には限界があります。ホームページがあることで、見込み客が「このお店は本当に存在するのか」を確認できるため、問い合わせ率が向上します。",
  },
  {
    q: "創業初期に優先すべきWeb集客は何ですか？",
    a: "創業直後は、①Googleビジネスプロフィール（Googleマップ）の整備、②ホームページの公開（SEO設計済み）、③SNSの開始（Instagram/X等）の3点を同時進行で整えることをおすすめします。特にGoogleビジネスプロフィールは無料で始められ、地域名検索での露出につながるため最優先です。",
  },
  {
    q: "開業時のホームページ制作費用の目安はどのくらいですか？",
    a: "制作内容・ページ数・機能によって大きく異なります。シンプルな5〜8ページのサイトで30〜80万円程度、SEO対策・問い合わせフォーム・コンテンツ充実を含む場合は80〜200万円以上になる場合もあります。詳細は株式会社サイプレスにご相談ください。補助金を活用する場合は費用が一部補助される可能性がありますが、採択・支給は保証できません。",
  },
  {
    q: "葛飾区でSEOに強いホームページを作るには何が必要ですか？",
    a: "①「葛飾区＋業種名」「亀有＋サービス名」など地域キーワードに対応したページ設計、②サイトの表示速度最適化、③スマートフォン対応、④構造化データ（JSON-LD）の実装、⑤定期的なコンテンツ更新（コラム・事例）が効果的です。制作段階からSEOを設計に組み込むことが重要です。",
  },
  {
    q: "創業初期に収益を安定させる方法はありますか？",
    a: "創業初期は、自社サービスの売上が安定するまで時間がかかることがあります。株式会社サイプレスでは、地域事業者にWeb集客サービスを紹介できる販売パートナー制度を用意しています。営業経験や地域のつながりを活かして、創業初期の収益柱の一つとして活動できる可能性があります。詳細はパートナー制度ページをご覧ください。",
  },
  {
    q: "葛飾区で法人として起業する場合、ホームページは必要ですか？",
    a: "法人として事業を行う場合、ホームページは信頼性の証明として特に重要です。銀行融資・補助金申請・取引先開拓など、多くのビジネスシーンで公式ホームページの存在が求められます。開業早期から整えることを強くおすすめします。",
  },
  {
    q: "葛飾区でホームページ作成費補助は使えますか？",
    a: "葛飾区にはホームページ作成費補助などの制度がある場合があります。ただし、制度内容・対象条件・補助率・申請期間は年度によって変わる可能性があります。申請を検討する際は、必ず葛飾区公式サイトの最新情報をご確認ください。株式会社サイプレスでは採択・支給を保証するものではありません。",
  },
  {
    q: "葛飾区でサイプレスに相談できる場所はありますか？",
    a: "株式会社サイプレスは葛飾区白鳥4-6-1-623に拠点を置いています。亀有・金町・新小岩・立石・柴又などのエリアへの訪問相談にも対応しています。まずはお問い合わせフォームまたはメール（info@cypress-all.co.jp）よりご連絡ください。",
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
        { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "葛飾区", item: "https://www.cypress-all.co.jp/area/katsushika" },
        { "@type": "ListItem", position: 4, name: "葛飾区で起業・創業する方へ", item: "https://www.cypress-all.co.jp/area/katsushika/start-business" },
      ],
    },
    {
      "@type": "WebPage",
      name: "葛飾区で起業・創業する方へ｜開業準備・Web集客・販売パートナー制度",
      url: "https://www.cypress-all.co.jp/area/katsushika/start-business",
      description: "葛飾区で起業・創業を検討している方向けに、開業前に確認したい支援制度、ホームページ制作、Web集客、創業初期の収益づくり、販売パートナー制度について解説します。",
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
              <Link href="/area/katsushika" style={{ color: "#6B7280" }}>葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>葛飾区で起業・創業する方へ</span>
            </nav>
            <p style={S.label}>Katsushika — Start Business</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              葛飾区で起業・創業する方へ
            </h1>
            <p style={{ fontSize: "17px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区での起業・開業を検討している方に向けて、創業支援制度の確認ポイント、ホームページ制作、Web集客の整え方、そして創業初期の収益柱の選択肢として販売パートナー制度をご案内します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#6B7280", maxWidth: "640px", marginBottom: "36px" }}>
              葛飾区の創業支援制度・融資制度・補助金の詳細は年度によって変わる可能性があります。必ず葛飾区公式サイトの最新情報をご確認ください。株式会社サイプレスは行政機関ではありません。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                開業前にWeb集客を相談する
              </Link>
              <Link href="/area/katsushika/startup-web-marketing" style={{ display: "inline-block", background: "transparent", color: "#0d1b2a", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #0d1b2a" }}>
                Web集客ガイドを見る
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: BEFORE STARTING */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Checklist</p>
            <h2 style={S.h2}>葛飾区で起業・創業する前に確認したいこと</h2>
            <p style={S.body}>
              事業を始める前に整理すべき項目を確認することで、開業後の集客・運営をスムーズに進められます。特にWeb集客は「開業前から準備するかどうか」でその後の集客速度が大きく変わります。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "事業内容と提供するサービス・商品", b: "誰に、何を、どのように提供するかを明確にしておくことがすべての起点になります。ターゲットが曖昧なままホームページやSNSを作ると、集客効果が得られません。" },
                { n: "02", t: "ターゲットと集客エリアの設定", b: "葛飾区全域なのか、亀有・金町・新小岩・立石などの特定エリアなのかを決めることで、SEO・MEO・チラシ配布エリアが決まります。" },
                { n: "03", t: "資金計画と融資・補助金の確認", b: "開業資金・運転資金の確保は最優先です。葛飾区の融資あっせん制度や補助金について、葛飾区公式サイトや産業経済課で最新情報を確認してください。制度内容は年度によって変わる可能性があります。" },
                { n: "04", t: "ホームページの要否と内容の整理", b: "「なくても良い」と思っている業種でも、Googleマップと連動したホームページの有無が問い合わせ率に影響します。開業前に制作スケジュールを立てておくことが重要です。" },
                { n: "05", t: "Googleビジネスプロフィールの開設準備", b: "店舗・事務所の住所が確定したら、Googleビジネスプロフィールの開設手続きを進めます。地域名検索での露出は開業直後から必要です。" },
                { n: "06", t: "SNS開設と発信計画", b: "Instagram・X（旧Twitter）・Facebook等のアカウントを開業前から用意し、開業告知・準備状況の発信から始めることで、開業時の認知度を高められます。" },
                { n: "07", t: "問い合わせ・予約の受付方法", b: "電話・メール・LINEビジネス・予約システムのどれを使うかを決め、ホームページ・GBPに明記します。問い合わせ導線が不明確なサイトは集客効率が下がります。" },
                { n: "08", t: "販路と収益柱の多様化", b: "創業直後は自社サービスだけで売上を立てるまで時間がかかることがあります。地域事業者へのWeb集客サービスの紹介など、収益の柱を複数持つ選択肢も検討してみてください。" },
                { n: "09", t: "競合調査と差別化ポイントの明確化", b: "葛飾区内の競合をGoogleマップ・Googleで検索し、口コミ数・評価・ホームページの状態・SNS運用状況を確認します。競合が手薄な部分を強化することが差別化につながります。" },
              ].map((item) => (
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

        {/* SECTION 3: SUPPORT SYSTEMS */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Support</p>
            <h2 style={S.h2}>葛飾区の創業支援・相談窓口を確認する</h2>
            <div style={{ background: "#FEF9E7", border: "1px solid #F0C060", borderRadius: "8px", padding: "20px 24px", marginBottom: "36px" }}>
              <p style={{ fontWeight: 700, color: "#854D0E", marginBottom: "8px", fontSize: "14px" }}>確認のお願い</p>
              <p style={{ fontSize: "13px", color: "#713F12", lineHeight: 1.85 }}>
                葛飾区の創業支援制度・相談窓口・創業塾・融資制度は年度によって変わる可能性があります。以下は一般的な情報整理です。必ず葛飾区公式サイトまたは担当窓口で最新情報をご確認ください。株式会社サイプレスは行政機関ではなく、制度の適用可否・申請代行は行っていません。
              </p>
            </div>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "創業相談窓口", b: "葛飾区では、区内で創業を予定している方向けに、創業に関する相談窓口を設けている場合があります。ビジネスプランの確認・資金調達の相談などができる場合があります。詳細は葛飾区公式サイトの産業経済課または創業支援に関するページでご確認ください。" },
                { n: "02", t: "創業塾・セミナー", b: "葛飾区では創業を目指す方向けの創業塾・セミナーが開催されている場合があります。事業計画の立て方・財務・マーケティングなどを学べる場合があります。開催時期・内容は年度によって異なります。" },
                { n: "03", t: "中小企業融資あっせん制度", b: "葛飾区では、創業時の資金調達を支援するための融資あっせん制度がある場合があります。金利・保証料・対象条件は年度によって変わる可能性があります。融資の採択を保証するものではありません。必ず葛飾区公式サイトでご確認ください。" },
                { n: "04", t: "ホームページ作成費補助", b: "葛飾区にはホームページ制作費用を一部補助する制度がある場合があります。補助率・上限額・申請期間は年度によって変わる可能性があります。着手前申請が条件になる場合もあるため、制作開始前に公式サイトで確認することが重要です。" },
                { n: "05", t: "デジタル化支援事業費補助金", b: "業務のデジタル化全般を支援する補助制度がある場合があります。ホームページ制作に加え、クラウドサービス・POSシステム等が対象になる可能性があります。詳細は葛飾区公式サイトでご確認ください。" },
                { n: "06", t: "サイプレスができる創業支援", b: "株式会社サイプレスは行政機関ではありませんが、ホームページ制作・SEO対策・MEO対策・問い合わせ導線設計を通じて、創業直後からのWeb集客基盤の構築をサポートできます。補助金活用時の制作内容・見積書の整理もお手伝いします（採択・支給の保証はできません）。" },
              ].map((item) => (
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

        {/* SECTION 4: EARLY CHALLENGES */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Common Issues</p>
            <h2 style={S.h2}>創業初期に起きやすい課題</h2>
            <p style={S.body}>
              葛飾区で創業した多くの事業者が、開業直後に同じ課題に直面します。事前に認識しておくことで、対策を早期に打てます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {[
                { t: "集客方法が決まっていない", b: "「開業すれば来てくれる」という認識のまま開業すると、集客ゼロの状態が続くことがあります。開業前から集客設計を整えることが重要です。" },
                { t: "ホームページがない・不完全", b: "SNSのみで発信していると、Googleマップに問い合わせボタンがあっても信頼性の証明ができません。ホームページがないと問い合わせ率が下がります。" },
                { t: "Googleマップに出てこない", b: "Googleビジネスプロフィールを開設していない・情報が不完全な場合、「葛飾区＋業種」検索に表示されません。開業直後からの整備が必要です。" },
                { t: "SNSだけに頼っている", b: "InstagramやX（旧Twitter）の投稿は時間とともに埋もれます。検索に残る資産（ホームページ・Googleマップ）を並行して整備することが長期的な集客の鍵です。" },
                { t: "紹介以外の流入がない", b: "知人・知合いからの紹介だけでは売上の安定化が難しく、紹介が途切れると集客が止まります。検索・Googleマップからの新規集客を仕組みとして作ることが必要です。" },
                { t: "サービス内容が伝わらない", b: "ホームページやGBPに何ができるのか、どんな人向けなのか、いくらなのかが書かれていないと、見込み客が問い合わせをする前に離脱します。" },
                { t: "固定収入が安定しない", b: "自社サービスの月次売上が安定するまで時間がかかることがあります。創業初期は収益の柱を複数持つことが安定経営につながります。" },
                { t: "営業先が足りない・開拓できない", b: "自社サービスを売る先が少ない場合、既存の人脈や地域のつながりを活かした営業戦略が必要です。Web集客サービスの紹介など、商材の選択肢を増やすことも有効です。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", borderRadius: "8px", padding: "22px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY WEB MATTERS */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Web Marketing</p>
            <h2 style={S.h2}>創業時にWeb集客を整えるべき理由</h2>
            <p style={S.body}>
              葛飾区で創業直後からWeb集客を整えておくことで、口コミ・紹介だけに依存しない新規集客の仕組みが早期に立ち上がります。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "公式ホームページが信頼の証明になる", b: "「この会社は本当に存在するのか？」を確認するために、初対面のお客様がGoogleで検索します。ホームページがない場合、問い合わせ前に離脱するケースが多く見られます。" },
                { n: "02", t: "SEO：検索から継続的に集客できる", b: "「葛飾区 〇〇」「亀有 〇〇」の検索キーワードで上位表示されれば、広告費をかけずに毎日新規客が来る状態を作れます。制作段階からSEOを設計に組み込むことが重要です。" },
                { n: "03", t: "MEO：Googleマップで近くの人を集客できる", b: "Googleビジネスプロフィールを整備することで、「葛飾区 〇〇」「近くの〇〇」の検索でマップに表示されます。スマホからの問い合わせ・電話・来店につながる最重要施策です。" },
                { n: "04", t: "問い合わせ導線の設計で取りこぼしを防ぐ", b: "電話・メールフォーム・LINE・予約システムなど、業種に合わせた問い合わせ導線を整備します。導線が不明確なサイトは、興味を持ったユーザーが問い合わせに至らずに離脱します。" },
                { n: "05", t: "料金ページで比較検討を促進できる", b: "料金・費用目安を明確に掲載することで、「いくらかかるか分からないから問い合わせるのが怖い」という心理障壁を下げ、問い合わせ率を向上させます。" },
                { n: "06", t: "事例ページで実績を積み重ねられる", b: "施工事例・支援事例・ビフォーアフターを継続的に掲載することで、E-E-A-T（経験・専門性・権威性・信頼性）が高まり、SEO効果と信頼性向上の両方に貢献します。" },
                { n: "07", t: "SNSとの連携で認知を拡大できる", b: "ホームページとSNSを連携させることで、InstagramやXで興味を持ったユーザーをホームページに誘導し、問い合わせへつなげる流れが作れます。SNSだけでは得られない「資産化」が可能になります。" },
                { n: "08", t: "AIO：AI検索での引用を狙える", b: "ChatGPT・Gemini・Perplexityなどのai検索でも自社が引用・紹介されやすくなる設計（AIO対策）を制作段階から組み込めます。次世代の検索環境での集客基盤になります。" },
              ].map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <Link href="/area/katsushika/startup-web-marketing" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "13px 24px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                葛飾区で創業する方向けWeb集客ガイドを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: SALES PARTNER */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Sales Partner</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              創業初期の収益柱として考えたい販売パートナー制度
            </h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" }}>
              創業初期は、自社の商品やサービスだけで売上を安定させるまでに時間がかかることがあります。株式会社サイプレスでは、ホームページ制作、SEO対策、MEO対策、AIO対策などのWeb集客サービスを地域事業者へ紹介できる販売パートナー制度を用意しています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
              {[
                { t: "紹介できる商材", b: "ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用など、地域の中小企業が必要としているWeb集客サービスを紹介できます。" },
                { t: "活かせるもの", b: "地域のつながり・営業経験・知人の事業者ネットワーク。専門知識がなくても、「Web集客に困っている事業者をサイプレスにつなぐ」ことが役割です。" },
                { t: "制作・運用はサイプレスが担当", b: "紹介後の提案・制作・保守・運用はすべてサイプレスが行います。パートナーの皆様に過度な負担をかけません。" },
                { t: "成果を保証するものではありません", b: "成約には商談内容や提案先の状況が影響します。無理な営業ではなく、必要としている事業者への紹介を前提にしています。" },
              ].map((item) => (
                <div key={item.t}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "#c4b89a", color: "#0d1b2a", padding: "13px 24px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                葛飾区起業者向け販売パートナー制度を見る →
              </Link>
              <Link href="/partner/local-sales-agent" style={{ display: "inline-block", background: "transparent", color: "#c4b89a", padding: "13px 24px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #c4b89a" }}>
                全国向け代理店・取次店制度を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: RELATED LINKS */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              関連ページ
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              {[
                { href: "/area/katsushika/startup-web-marketing", label: "葛飾区で創業する方向けWeb集客ガイド", desc: "ホームページ・SEO・MEO" },
                { href: "/area/katsushika/web-design-subsidy", label: "葛飾区ホームページ制作・補助金活用", desc: "補助金情報の確認ポイント" },
                { href: "/partner/katsushika-startup", label: "葛飾区起業者向け販売パートナー制度", desc: "創業初期の収益柱として" },
                { href: "/partner/local-sales-agent", label: "全国向け代理店・取次店募集", desc: "Web集客サービスの紹介制度" },
                { href: "/web-design", label: "ホームページ制作", desc: "SEOに強いサイト制作" },
                { href: "/seo", label: "SEO対策", desc: "検索上位表示支援" },
                { href: "/meo", label: "MEO対策", desc: "Googleマップ最適化" },
                { href: "/pricing/web-growth-package", label: "Web集客パッケージ料金", desc: "制作+集客セットプラン" },
                { href: "/area/katsushika", label: "葛飾区 Web集客支援", desc: "葛飾区の集客支援一覧" },
                { href: "/contact", label: "お問い合わせ", desc: "まずは無料相談" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "18px 16px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "12px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection
          items={faqItems}
          heading="葛飾区での起業・創業に関するよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="葛飾区での起業・創業準備、まずはご相談ください"
          body="葛飾区での創業・開業を検討している方に向けて、ホームページ制作・SEO対策・MEO対策・問い合わせ導線設計を一貫してサポートします。販売パートナー制度についてのご相談もお気軽にどうぞ。葛飾区への訪問相談にも対応しています。"
        />

      </main>
      <Footer />
    </>
  );
}
