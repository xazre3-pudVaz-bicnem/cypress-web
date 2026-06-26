import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で創業資金・融資・補助金を確認する前に知っておきたいこと｜株式会社サイプレス",
  description:
    "葛飾区で創業を考えている方向けに、創業融資・補助金・ホームページ作成費補助の確認ポイントを整理。申請前の注意点とWeb集客費用の考え方を解説します。",
  keywords: [
    "葛飾区 創業 融資",
    "葛飾区 開業 資金",
    "葛飾区 創業 補助金",
    "葛飾区 中小企業 融資",
    "葛飾区 ホームページ作成費補助",
  ],
  openGraph: {
    title: "葛飾区で創業資金・融資・補助金を確認する前に知っておきたいこと",
    description: "葛飾区で創業を考えている方向けに、創業融資・補助金・ホームページ作成費補助の確認ポイントを整理。申請前の注意点とWeb集客費用の考え方を解説します。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-funding",
  },
};

const faqItems = [
  {
    q: "葛飾区のホームページ作成費補助は今も受け付けていますか？",
    a: "制度の受付状況は年度・予算状況によって変わります。現在の受付状況は必ず葛飾区公式サイトでご確認ください。株式会社サイプレスは補助金の採択・支給を保証するものではありません。",
  },
  {
    q: "創業融資の申請はどこでできますか？",
    a: "日本政策金融公庫、東京都中小企業振興公社、商工会議所などが主な確認先です。ただし審査があり、融資実行を保証するものではありません。最新情報は各機関の公式サイトでご確認ください。",
  },
  {
    q: "補助金が採択されないと制作は始められませんか？",
    a: "いいえ。補助金の採択を待たずに自己資金でホームページ制作を開始することは可能です。ただし制度によっては「採択後に制作着手」が要件になる場合があります。事前に公式サイトで要件を確認してください。",
  },
  {
    q: "ホームページ制作費に使える補助金はいくらですか？",
    a: "補助率・上限額は年度によって変わります。葛飾区のホームページ作成費補助・小規模事業者持続化補助金・IT導入補助金などが確認先として一般的ですが、金額は公式サイトでご確認ください。",
  },
  {
    q: "サイプレスは補助金の申請代行をしてもらえますか？",
    a: "申請代行は行っていません。制作内容・制作範囲・見積書の整理については対応可能です。補助金の申請は申請者ご自身で行っていただく必要があります。",
  },
  {
    q: "見積書の発行はしてもらえますか？",
    a: "はい、制作前に詳細な見積書を提示しています。補助金申請に必要な見積書発行にも対応しています。まずはご相談ください。",
  },
  {
    q: "融資が通らないとホームページは作れませんか？",
    a: "いいえ。自己資金でのホームページ制作も可能です。融資・補助金が通らなかった場合でも、自己資金の範囲内で制作を開始できます。まずはご相談ください。",
  },
  {
    q: "IT導入補助金はホームページ制作に使えますか？",
    a: "IT導入補助金の対象要件・対象ツールは年度によって変わります。最新の対象要件は公式サイトでご確認ください。採択・支給を保証するものではありません。",
  },
  {
    q: "補助金申請前に制作を依頼できますか？",
    a: "制度によっては「採択後に着手」が要件の場合があります。申請前に着手した場合、補助対象外になる可能性があります。申請前に必ず制度の要件を公式サイトでご確認ください。",
  },
  {
    q: "補助金なしでホームページを作った場合の費用目安は？",
    a: "制作範囲・ページ数・機能によって異なります。詳細なお見積りはご相談の中でご提示します。まずはどのようなサイトを作りたいかお知らせください。",
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

const warningBox = (
  <div style={{ background: "#FEF9C3", border: "1px solid #FDE68A", borderRadius: "8px", padding: "20px 24px", maxWidth: "720px", marginBottom: "32px" }}>
    <p style={{ fontWeight: 700, color: "#78350F", fontSize: "14px", marginBottom: "10px" }}>重要なご注意</p>
    <ul style={{ fontSize: "14px", color: "#78350F", lineHeight: "1.85", paddingLeft: "20px" }}>
      <li>制度内容は年度によって変更される可能性があります</li>
      <li>申請前に必ず葛飾区公式サイトの最新情報をご確認ください</li>
      <li>融資実行・補助金採択・支給を保証するものではありません</li>
      <li>株式会社サイプレスは行政機関ではありません</li>
      <li>申請代行は行っていません</li>
    </ul>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "東京都葛飾区", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika" },
        { "@type": "ListItem", position: 4, name: "創業資金・融資・補助金の確認ポイント", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-funding" },
      ],
    },
    {
      "@type": "WebPage",
      name: "葛飾区で創業資金・融資・補助金を確認する前に知っておきたいこと",
      url: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-funding",
      description: "葛飾区で創業を考えている方向けに、創業融資・補助金・ホームページ作成費補助の確認ポイントを整理。申請前の注意点とWeb集客費用の考え方を解説します。",
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

const prerequisiteItems = [
  { n: "01", t: "補助金は「申請しても採択されない場合がある」", b: "補助金・助成金は申請すれば必ず受け取れるものではありません。審査・採択率・予算上限があります。" },
  { n: "02", t: "融資は審査がある", b: "日本政策金融公庫等の融資は信用審査があり、必ず通るとは限りません。事業計画書の精度・自己資金比率が審査に影響します。" },
  { n: "03", t: "制度内容は毎年変わる", b: "補助率・上限額・対象要件は年度によって変更される場合があります。昨年の情報をそのまま信じると誤った判断につながります。" },
  { n: "04", t: "公式情報の確認が必須", b: "制度の最新情報は各機関の公式サイトで確認することが不可欠です。第三者サイトや口コミ情報は古い場合があります。" },
  { n: "05", t: "準備に時間がかかる", b: "補助金申請には書類準備・申請書作成・審査期間があります。「すぐ使える」ものではありません。" },
  { n: "06", t: "Web制作費を補助金頼みにしすぎないことが重要", b: "補助金が通らなかった場合にも制作を進められる資金計画を立てておくことが安全です。" },
];

const contactSources = [
  { t: "葛飾区産業経済課（創業相談窓口）", b: "葛飾区内での開業・創業に関する相談窓口。創業支援制度・補助金・助成金の確認先です。※制度内容・申請条件は公式サイトでご確認ください。" },
  { t: "日本政策金融公庫（創業融資）", b: "創業期に活用できる融資制度の代表的な窓口。事業計画書の提出・審査があります。※融資実行を保証するものではありません。公式サイトで要確認。" },
  { t: "東京都中小企業振興公社", b: "東京都内の中小企業・創業者向けの支援機関。融資・補助金・相談窓口があります。※制度内容・申請条件は公式サイトでご確認ください。" },
  { t: "東京信用保証協会", b: "金融機関からの融資に際して保証を行う機関。創業期の融資サポートの一環として確認できます。※公式サイトで最新情報を要確認。" },
  { t: "商工会議所・商工会", b: "小規模事業者持続化補助金の申請窓口。創業相談・経営改善支援も行っています。※制度内容・受付状況は公式サイトでご確認ください。" },
];

const subsidyItems = [
  { t: "葛飾区ホームページ作成費補助", b: "葛飾区が提供するホームページ作成費用の一部を補助する制度（詳細は公式サイト確認）。※採択・支給を保証するものではありません。年度によって内容が変わります。" },
  { t: "小規模事業者持続化補助金", b: "商工会議所・商工会を通じて申請できる販路開拓支援の補助金。ホームページ制作費が対象になる場合があります。（詳細は商工会議所確認）※採択・支給を保証するものではありません。" },
  { t: "IT導入補助金", b: "ITツール・ソフトウェアの導入を支援する補助金。対象要件は年度によって変わります。（詳細は公式サイト確認）※採択・支給を保証するものではありません。" },
];

const subsidyCautionItems = [
  { n: "01", t: "申請時期・受付状況によっては締め切られている場合がある", b: "年度途中で予算が上限に達し、受付終了になるケースがあります。早めの確認が重要です。" },
  { n: "02", t: "採択率は状況次第", b: "応募が多い場合は採択されない可能性があります。補助金頼みの計画は避けることをお勧めします。" },
  { n: "03", t: "補助率・上限額は年度によって変わる", b: "昨年と同じ条件とは限りません。必ず最新の公募要領で確認してください。" },
  { n: "04", t: "採択後に制作着手が原則の場合がある", b: "採択前に制作を始めると補助対象外になる可能性があります。事前に要件を確認することが重要です。" },
  { n: "05", t: "対象外の費用がある場合がある", b: "補助対象になる費用の範囲が限定されていることがあります。見積書を準備する前に対象費用を確認します。" },
  { n: "06", t: "申請書類の準備に時間がかかる", b: "事業計画書・見積書・会社概要など、複数の書類が必要です。余裕を持ったスケジュールが必要です。" },
  { n: "07", t: "採択・支給を保証するものではない", b: "制度の要件を満たしても採択が保証されるわけではありません。補助金の有無にかかわらず制作を検討することをお勧めします。" },
];

const investmentAdviceItems = [
  { n: "01", t: "補助金を「使えた場合のプラス」と捉える", b: "補助金が取れることを前提に制作を計画すると、採択されなかった場合に計画が止まります。自己資金での投資判断を基本にして、補助金は「取れたらラッキー」くらいの位置づけが安全です。" },
  { n: "02", t: "自己資金でも投資判断できる金額感を確認する", b: "ホームページ制作・SEO・MEOへの投資が、自己資金の範囲内で賄えるかを事前に確認します。補助金の有無にかかわらず投資できるかが判断基準です。" },
  { n: "03", t: "Web集客は長期投資", b: "ホームページ・SEOは短期では効果が出ません。1〜2年の期間で集客基盤を構築する投資として位置づけることが重要です。広告費との違いを理解した上で判断します。" },
];

const estimateReasonItems = [
  { n: "01", t: "補助金申請時に見積書が必要な場合がある", b: "多くの補助金申請には、制作会社の正式な見積書の提出が求められます。" },
  { n: "02", t: "制作範囲が曖昧だと後で追加費用が発生する", b: "ページ数・機能・SEO設計の有無を事前に確定させることで、制作中の追加費用を防げます。" },
  { n: "03", t: "SEO設計込みかどうかで長期の効果が変わる", b: "制作だけのサイトとSEO設計込みのサイトでは、長期的な集客効果に差が出ます。" },
  { n: "04", t: "スマホ対応・表示速度の確認", b: "モバイルファーストのSEO対策として、スマートフォン対応と高速表示は必須です。" },
  { n: "05", t: "問い合わせ導線の設計確認", b: "ホームページの目的は問い合わせ・予約・注文の獲得です。フォーム設計・CTA設置を事前に確認します。" },
];

const cypressCapabilities = [
  { t: "制作内容・見積書の整理", b: "制作範囲・費用・制作期間を明示した見積書を提供します。補助金申請時の書類準備に活用できます。" },
  { t: "ホームページ制作（SEO設計込み）", b: "地域名キーワード・モバイル対応・高速表示を考慮したSEO設計込みのホームページを制作します。" },
  { t: "SEO対策", b: "「葛飾区＋業種」などのローカルSEOから、コンテンツSEOまで対応します。" },
  { t: "MEO対策（Googleビジネスプロフィール）", b: "GBPの最適化・定期投稿・口コミ管理・写真更新をサポートします。" },
  { t: "AIO対策（AI検索対策）", b: "ChatGPT・Gemini・Perplexityで引用されやすいコンテンツ設計。" },
  { t: "補助金申請代行は行っていません", b: "申請の代行は行っていませんが、制作仕様・費用・制作期間の明示は可能です。申請はご自身で行っていただきます。" },
];

const relatedLinks = [
  { href: "/area/tokyo/katsushika/start-business", label: "葛飾区で起業する方向けの創業者向けハブページを見る", desc: "9セクションの総合ガイド" },
  { href: "/area/tokyo/katsushika/start-business-checklist", label: "葛飾区で起業する前に確認したい開業準備チェックリスト", desc: "8カテゴリ57項目のチェックリスト" },
  { href: "/area/tokyo/katsushika/web-design-subsidy", label: "葛飾区でホームページ制作と補助金を確認する", desc: "制作と補助金活用の注意点" },
  { href: "/area/tokyo/katsushika/startup-web-marketing", label: "葛飾区で創業する方向けのWeb集客ガイドを見る", desc: "GBP・SEO・MEOの優先順位" },
  { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向け販売パートナー制度を見る", desc: "収益柱の一つとして検討できます" },
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
              <span style={{ color: "#0d1b2a" }}>創業資金・融資・補助金の確認ポイント</span>
            </nav>
            <p style={S.label}>Katsushika — Startup Funding</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で創業資金・融資・補助金を確認する前に知っておきたいこと
            </h1>
            {warningBox}
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              ホームページ制作内容と見積範囲を相談する
            </Link>
          </div>
        </section>

        {/* SECTION 2: 知るべきこと */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Prerequisites</p>
            <h2 style={S.h2}>葛飾区で創業資金を確認する前に知るべきこと</h2>
            <div style={{ maxWidth: "800px" }}>
              {prerequisiteItems.map((item) => (
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

        {/* SECTION 3: 主な確認先 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Contact Sources</p>
            <h2 style={S.h2}>創業支援・融資の主な確認先</h2>
            <p style={S.body}>以下の機関が主な相談・確認先です。制度内容は公式サイトでご確認ください。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {contactSources.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Web集客に使える可能性がある制度 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Possible Subsidies</p>
            <h2 style={S.h2}>ホームページ制作やWeb集客に使える可能性がある制度</h2>
            <p style={S.body}>以下の制度が確認先として一般的です。いずれも公式サイトで最新情報をご確認ください。採択・支給を保証するものではありません。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {subsidyItems.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: ホームページ作成費補助の注意点 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Caution Points</p>
            <h2 style={S.h2}>ホームページ作成費補助を確認する際の注意点</h2>
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

        {/* SECTION 6: 補助金・融資とWeb集客の考え方 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Investment Mindset</p>
            <h2 style={S.h2}>補助金・融資とWeb集客投資の考え方</h2>
            <div style={{ maxWidth: "800px" }}>
              {investmentAdviceItems.map((item) => (
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

        {/* SECTION 7: 制作前に見積書を整理する理由 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Estimate First</p>
            <h2 style={S.h2}>制作前に見積書や制作範囲を整理する理由</h2>
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

        {/* SECTION 8: サイプレスが支援できる範囲 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Our Support</p>
            <h2 style={S.h2}>サイプレスが支援できる範囲</h2>
            <p style={S.body}>株式会社サイプレスが対応できる内容の一覧です。補助金申請代行は行っていません。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {cypressCapabilities.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: 公式情報リンク */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Official Links</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>公式情報リンク</h2>
            <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "20px" }}>※各制度の申請条件・内容は必ず公式サイトでご確認ください（確認推奨日: 2026年6月）</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", maxWidth: "600px" }}>
              {[
                { label: "葛飾区公式サイト", href: "https://www.city.katsushika.lg.jp/" },
                { label: "日本政策金融公庫", href: "https://www.jfc.go.jp/" },
                { label: "東京都中小企業振興公社", href: "https://www.tokyo-kosha.or.jp/" },
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

        {/* SECTION 10: 関連ページ */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px", lineHeight: 1.5 }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="葛飾区の創業資金・補助金についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="ホームページ制作の内容と見積範囲を確認したい方はご相談ください"
          body="制作範囲・費用・補助金申請時の見積書発行に関するご相談はお気軽にどうぞ。申請代行は行っていません。"
        />

      </main>
      <Footer />
    </>
  );
}
