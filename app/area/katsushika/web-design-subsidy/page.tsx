import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区のホームページ制作・補助金活用｜SEOに強いWeb制作なら株式会社サイプレス",
  description:
    "葛飾区でホームページ制作や補助金・助成金の活用を検討している中小企業・店舗向けに、SEOに強いWeb制作、MEO対策、制作前に確認すべきポイントを解説します。",
  keywords: [
    "葛飾区 ホームページ制作",
    "葛飾区 ホームページ制作 補助金",
    "葛飾区 ホームページ制作 助成金",
    "葛飾区 ホームページ作成費補助",
    "葛飾区 Web制作",
    "葛飾区 SEO対策",
    "葛飾区 MEO対策",
    "葛飾区 中小企業 ホームページ制作",
    "葛飾区 ホームページ 補助金",
    "葛飾区 デジタル化 補助金",
  ],
  openGraph: {
    title: "葛飾区のホームページ制作・補助金活用｜SEOに強いWeb制作なら株式会社サイプレス",
    description:
      "葛飾区でホームページ制作や補助金・助成金の活用を検討している中小企業・店舗向けに、SEOに強いWeb制作、MEO対策、制作前に確認すべきポイントを解説します。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/katsushika/web-design-subsidy",
  },
};

const faqItems = [
  {
    q: "葛飾区でホームページ制作に補助金は使えますか？",
    a: "葛飾区にはホームページ作成費補助などの制度がありますが、対象条件・申請期間・補助率・上限額は年度によって変わる可能性があります。申請前に必ず葛飾区公式サイトで最新情報をご確認ください。株式会社サイプレスでは補助金の採択・支給を保証するものではありません。",
  },
  {
    q: "補助金を使う場合、制作前に相談した方がいいですか？",
    a: "多くの補助制度では、契約や制作着手前の申請が条件になる場合があります。ホームページ制作を始める前に、制度内容と必要書類を葛飾区公式サイトまたは担当窓口で確認することを強くおすすめします。着手後・契約後では申請できない制度もあるため、事前確認が非常に重要です。",
  },
  {
    q: "サイプレスで補助金の申請代行はできますか？",
    a: "株式会社サイプレスでは、ホームページ制作の内容や見積内容の整理は可能ですが、補助金の採択や支給を保証するものではありません。申請手続きの詳細や必要書類の確認は、葛飾区公式サイトまたは担当窓口へご確認ください。",
  },
  {
    q: "葛飾区のホームページ制作ではSEO対策もできますか？",
    a: "はい。葛飾区の事業者向けに、地域名（葛飾区・亀有・金町・新小岩・立石など）、業種名、サービス名を組み合わせたSEO設計、下層ページ設計、問い合わせ導線設計まで対応できます。制作段階からSEOを考慮した構造でサイトを作ることが重要です。",
  },
  {
    q: "Googleマップ対策も一緒にできますか？",
    a: "はい。ホームページ制作とあわせて、Googleビジネスプロフィールの情報整理・写真・投稿・口コミ返信・サービス情報の整理などMEO対策も支援できます。ホームページとGoogleビジネスプロフィールの情報を一致させることが、地域検索での信頼性向上につながります。",
  },
  {
    q: "着手前申請とはどういう意味ですか？",
    a: "補助金制度によっては、ホームページ制作の契約・着手前に申請・承認を受けることが条件になっている場合があります。すでに制作を始めていたり、制作会社と契約済みの場合は対象外になる可能性があります。制度の詳細は葛飾区公式サイトまたは担当窓口でご確認ください。",
  },
  {
    q: "ホームページ作成費補助とデジタル化支援事業費補助金の違いは何ですか？",
    a: "葛飾区には複数の支援制度がある場合があります。ホームページ作成費補助はホームページ制作費用を対象とする制度、デジタル化支援事業費補助金はより広いデジタルツール導入・業務効率化を対象とする制度と説明されている場合がありますが、対象経費・申請要件は年度によって変わる可能性があります。必ず葛飾区公式サイトの最新情報をご確認ください。",
  },
  {
    q: "制作会社に補助金を使う際、要件はありますか？",
    a: "制度によっては、制作会社の要件（法人・個人事業主の別、区内業者限定かどうか等）が定められている場合があります。申請前に葛飾区公式サイトまたは担当窓口で制作会社に関する条件を確認することをおすすめします。",
  },
  {
    q: "ホームページが古い場合、リニューアルでも補助金は使えますか？",
    a: "制度によっては新規制作のみ対象の場合と、リニューアル・改修が対象に含まれる場合があります。補助対象となる工事・制作の種類は年度・制度によって異なるため、必ず葛飾区公式サイトまたは担当窓口でご確認ください。",
  },
  {
    q: "SEO設計を含むホームページと、SEO対策単独サービスの違いは何ですか？",
    a: "SEO設計を含むホームページ制作は、サイト構築の段階からSEOに強い構造（URL設計・タイトル・メタ・構造化データ・表示速度）を組み込む作業です。SEO対策単独サービスは既存サイトの改善・コンテンツ強化を行うサービスです。新規制作では制作段階からSEOを考慮することが、長期的なコストパフォーマンスの向上につながります。",
  },
  {
    q: "葛飾区の対面ヒアリングはできますか？",
    a: "はい。株式会社サイプレスは葛飾区白鳥4-6-1-623に拠点を置いています。亀有・柴又・金町・新小岩・立石・お花茶屋・堀切など葛飾区内全域への訪問相談・打ち合わせに対応しています。補助金制度についての情報整理や制作内容の確認も含め、お気軽にご相談ください。",
  },
  {
    q: "AI検索（ChatGPT・Gemini）対策もホームページ制作で対応できますか？",
    a: "はい。ChatGPT・Gemini・Perplexityなどのai検索から引用されやすいサイト構造（AIO対策）にも対応しています。E-E-A-T（経験・専門性・権威性・信頼性）を高めるコンテンツ設計、FAQ設計、構造化データの実装を制作段階から組み込むことができます。",
  },
  {
    q: "補助金を使わずにホームページ制作を依頼することはできますか？",
    a: "もちろんです。補助金の利用有無にかかわらず、葛飾区の事業者向けにSEOに強いホームページ制作を提供しています。補助金申請を検討している場合も、まず制作内容や費用感を確認した上で判断いただいて問題ありません。",
  },
];

const NOTICE_STYLE: React.CSSProperties = {
  background: "#FEF9E7",
  border: "1px solid #F0C060",
  borderRadius: "8px",
  padding: "20px 24px",
  marginBottom: "32px",
};
const NOTICE_TITLE_STYLE: React.CSSProperties = {
  fontWeight: 700,
  color: "#854D0E",
  marginBottom: "8px",
  fontSize: "14px",
};
const NOTICE_BODY_STYLE: React.CSSProperties = {
  fontSize: "13px",
  color: "#713F12",
  lineHeight: 1.85,
};
const INFO_BOX_STYLE: React.CSSProperties = {
  background: "#EFF6FF",
  border: "1px solid #BFDBFE",
  borderRadius: "8px",
  padding: "14px 18px",
  marginTop: "24px",
};
const INFO_BOX_TEXT_STYLE: React.CSSProperties = {
  fontSize: "13px",
  color: "#1E40AF",
  lineHeight: 1.8,
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
            item: "https://www.cypress-all.co.jp/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "対応エリア",
            item: "https://www.cypress-all.co.jp/area",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "葛飾区",
            item: "https://www.cypress-all.co.jp/area/katsushika",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "ホームページ制作・補助金活用支援",
            item: "https://www.cypress-all.co.jp/area/katsushika/web-design-subsidy",
          },
        ],
      },
      {
        "@type": "Service",
        name: "葛飾区のホームページ制作・Web集客支援",
        provider: {
          "@type": "Organization",
          name: "株式会社サイプレス",
          url: "https://www.cypress-all.co.jp",
          address: {
            "@type": "PostalAddress",
            addressCountry: "JP",
            postalCode: "124-0816",
            addressRegion: "東京都",
            addressLocality: "葛飾区",
            streetAddress: "白鳥4-6-1-623",
          },
          email: "info@cypress-all.co.jp",
        },
        areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
        description:
          "葛飾区の中小企業・店舗向けに、SEOに強いホームページ制作、MEO対策、AIO対策、問い合わせ導線設計を提供。補助金活用時に必要となる制作内容・見積内容の整理もサポートします。",
        serviceType: ["ホームページ制作", "SEO対策", "MEO対策", "AIO対策"],
      },
      {
        "@type": "WebPage",
        name: "葛飾区のホームページ制作・補助金活用｜SEOに強いWeb制作なら株式会社サイプレス",
        url: "https://www.cypress-all.co.jp/area/katsushika/web-design-subsidy",
        description:
          "葛飾区でホームページ制作や補助金・助成金の活用を検討している中小企業・店舗向けに、SEOに強いWeb制作、MEO対策、制作前に確認すべきポイントを解説します。",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
            { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.cypress-all.co.jp/area" },
            { "@type": "ListItem", position: 3, name: "葛飾区", item: "https://www.cypress-all.co.jp/area/katsushika" },
            { "@type": "ListItem", position: 4, name: "ホームページ制作・補助金活用支援", item: "https://www.cypress-all.co.jp/area/katsushika/web-design-subsidy" },
          ],
        },
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

        {/* ===== HERO ===== */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "72px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/katsushika" style={{ color: "#6B7280" }}>葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>ホームページ制作・補助金活用</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Katsushika — Web Design & Subsidy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区のホームページ制作<br />補助金活用支援
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区でホームページ制作やWeb集客を検討している中小企業・店舗向けに、SEOに強いサイト制作と、補助金・助成金情報を確認する際のポイントを整理します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "36px" }}>
              補助金・助成金制度の詳細は年度によって変わる可能性があります。必ず葛飾区公式サイトで最新情報をご確認のうえ、制作内容・スケジュールの検討をお進めください。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#0d1b2a",
                  color: "#fff",
                  padding: "14px 28px",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                ホームページ制作について相談する
              </Link>
              <Link
                href="/pricing/web-growth-package"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#0d1b2a",
                  padding: "14px 28px",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  borderRadius: "4px",
                  border: "1px solid #0d1b2a",
                }}
              >
                Web集客パッケージ料金を見る
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: WHY WEBSITES MATTER ===== */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Background</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区でホームページ制作を検討する事業者が増えている理由
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              スマートフォン普及・AI検索の台頭・地域検索の増加など、お客様の行動変化が葛飾区の中小企業・店舗にとってホームページの重要性を高めています。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  n: "01",
                  t: "地域検索（ローカル検索）の重要性が高まっている",
                  b: "「葛飾区 〇〇」「亀有 〇〇」「金町 〇〇」のように、地域名＋業種・サービスで検索するユーザーが増えています。検索結果に表示されるためには、その地域・業種に対応したページを持つホームページが不可欠です。",
                },
                {
                  n: "02",
                  t: "Googleマップ検索と連動したホームページの信頼性",
                  b: "Googleマップ（Googleビジネスプロフィール）で見つけたお客様の多くは、問い合わせ前にホームページを確認します。ホームページの情報が充実していないと、問い合わせに至らないケースが増えています。",
                },
                {
                  n: "03",
                  t: "スマートフォン経由の検索が主流になっている",
                  b: "多くのユーザーがスマートフォンで「近くの〇〇」を検索し、そのままホームページにアクセスして電話・フォームで問い合わせます。スマホ対応・表示速度の最適化が集客に直結します。",
                },
                {
                  n: "04",
                  t: "公式ホームページが信頼の証明になる",
                  b: "SNSだけで営業している事業者と、SEOを意識したホームページを持つ事業者では、初めて接触するお客様に与える信頼感が大きく異なります。特に士業・医療・リフォームなど検討期間が長い業種では、ホームページの有無が問い合わせ率に大きく影響します。",
                },
                {
                  n: "05",
                  t: "SNSの投稿は時間とともに流れてしまう",
                  b: "InstagramやX（旧Twitter）への投稿は、時間が経つと埋もれてしまいます。ホームページに掲載した情報は永続的に残り、Google検索からのアクセスが継続的に発生します。SNSと組み合わせることでさらに効果が高まります。",
                },
                {
                  n: "06",
                  t: "補助金・助成制度を確認しながら制作を検討する事業者が増えている",
                  b: "葛飾区にはホームページ作成費補助などの制度が設けられている場合があります。制度内容・申請時期・対象範囲は年度によって変わる可能性があるため、制作の検討段階で公式サイトを確認しておくことが重要です。",
                },
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

        {/* ===== SECTION 3: HOMEPAGE SUBSIDY ===== */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Subsidy Info</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              葛飾区のホームページ作成費補助とは
            </h2>

            <div style={NOTICE_STYLE}>
              <p style={NOTICE_TITLE_STYLE}>重要なご案内</p>
              <p style={NOTICE_BODY_STYLE}>
                補助金・助成金の制度内容、対象経費、申請期間、補助率、上限額、必要書類は年度によって変更される場合があります。申請を検討する際は、必ず葛飾区公式サイトの最新情報をご確認ください。株式会社サイプレスでは、ホームページ制作やSEO設計に関する見積書・制作内容の整理は可能ですが、補助金の採択や支給を保証するものではありません。申請手続きや制度の適用可否については、葛飾区公式サイトまたは担当窓口にてご確認ください。
              </p>
            </div>

            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  n: "01",
                  t: "制度の概要",
                  b: "葛飾区では区内の中小企業・事業者向けに、ホームページの新規制作・改修に関する費用を一部補助する制度が設けられている場合があります。制度の名称・補助率・上限額・対象経費は年度によって変わる可能性があります。必ず葛飾区公式サイトの最新情報をご確認ください。",
                },
                {
                  n: "02",
                  t: "対象となる可能性がある事業者",
                  b: "葛飾区内で事業を営む中小企業・個人事業主・小規模事業者が対象となる場合があります。ただし、業種・従業員数・売上・開業からの年数など、対象要件が設定されている場合があります。詳細は葛飾区公式サイトまたは担当窓口でご確認ください。",
                },
                {
                  n: "03",
                  t: "申請前に確認すべきこと",
                  b: "補助金の申請には、対象経費の種類・申請期間・必要書類・申請の順序（着手前申請か着手後申請か）などを事前に確認することが必要です。制作会社との契約・発注前に制度要件を確認しておくことで、申請漏れや対象外になるリスクを減らせます。",
                },
                {
                  n: "04",
                  t: "着手前申請が必要な場合があること",
                  b: "多くの補助金制度では、ホームページ制作の契約・着手前に申請・承認を受けることが条件となっています。すでに制作を開始した後では申請できないケースがあるため、制作の検討段階で制度内容を確認しておくことが重要です。",
                },
                {
                  n: "05",
                  t: "年度により条件が変わること",
                  b: "補助金制度は毎年度見直されます。前年度に利用できた制度が廃止されたり、補助率や上限額が変わる場合があります。インターネット上の古い情報をそのまま信じず、葛飾区公式サイトの最新情報を必ずご確認ください。",
                },
                {
                  n: "06",
                  t: "公式サイト確認の重要性",
                  b: "申請要件・必要書類・申請窓口・申請期間は公式サイトに掲載されています。不明点は葛飾区産業経済課などの担当窓口に直接お問い合わせください。サイプレスでは公式情報の確認を強くおすすめしています。",
                },
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

            <div style={INFO_BOX_STYLE}>
              <p style={INFO_BOX_TEXT_STYLE}>
                <strong>葛飾区公式サイト（外部リンク）で最新情報をご確認ください：</strong><br />
                ・{" "}
                <a
                  href="https://www.city.katsushika.lg.jp/business/1000011/1034399/1004957.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1D4ED8", textDecoration: "underline" }}
                >
                  葛飾区 ホームページ作成費補助（公式）
                </a>
                <br />
                ※掲載情報は葛飾区公式サイトの内容によります。制度の詳細・申請期間は年度によって異なる場合があります。
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: DIGITAL SUBSIDY DIFFERENCE ===== */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Subsidy Types</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              デジタル化支援事業費補助金との違い
            </h2>
            <div style={NOTICE_STYLE}>
              <p style={NOTICE_TITLE_STYLE}>確認のお願い</p>
              <p style={NOTICE_BODY_STYLE}>
                以下は制度の違いを一般的に整理したものです。実際の対象経費・申請要件・補助率は年度によって変わる可能性があります。申請前に必ず葛飾区公式サイトの最新情報をご確認ください。
              </p>
            </div>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  n: "01",
                  t: "ホームページ作成費補助との基本的な違い",
                  b: "葛飾区には、ホームページ制作に特化した補助制度と、デジタル化全般を対象とした補助制度が別々に設けられている場合があります。それぞれ対象経費・補助率・上限額・申請窓口が異なる場合があります。",
                },
                {
                  n: "02",
                  t: "対象となる経費の違い",
                  b: "ホームページ作成費補助がホームページ制作・改修費用を主な対象とする一方、デジタル化支援事業費補助金は業務効率化ツール・クラウドサービス・POSシステム導入なども対象に含まれる場合があります。詳細は葛飾区公式サイトで確認が必要です。",
                },
                {
                  n: "03",
                  t: "IT相談・診断書が必要な制度がある可能性",
                  b: "デジタル化支援に関する一部の制度では、IT専門家（ITコーディネーター等）による事前相談や診断書の取得が申請要件となる場合があります。制度によって手続きの流れが異なるため、早めの確認が重要です。",
                },
                {
                  n: "04",
                  t: "どちらを利用すべきか",
                  b: "目的に応じた制度選択が必要です。「ホームページを新たに作りたい」「既存サイトをリニューアルしたい」という目的にはホームページ作成費補助が、「業務全体のデジタル化を進めたい」という場合はデジタル化支援制度が適している可能性があります。ただし、最終的な判断は葛飾区公式サイトまたは担当窓口でご確認ください。",
                },
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
            <div style={INFO_BOX_STYLE}>
              <p style={INFO_BOX_TEXT_STYLE}>
                <strong>デジタル化支援事業費補助金の詳細（外部リンク）：</strong><br />
                ・{" "}
                <a
                  href="https://www.city.katsushika.lg.jp/business/1000011/1034399/1032622/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1D4ED8", textDecoration: "underline" }}
                >
                  葛飾区デジタル化支援事業費補助金（公式）
                </a>
                <br />
                ※制度の詳細・申請期間は年度によって異なる場合があります。必ず公式サイトでご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: WHAT TO PREPARE ===== */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Checklist</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              補助金を使う前に整理すべきホームページ制作内容
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              補助金申請の前に、制作するホームページの内容を整理しておくことで、申請書類の作成がスムーズになります。サイプレスでは制作内容・見積内容の整理をサポートしています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {[
                { t: "何のために作るのか（目的）", b: "集客・問い合わせ増加・採用・ブランド認知など、ホームページを作る目的を明確にしておくことで、必要なページ構成・機能の優先順位が決まります。" },
                { t: "対象サービス・商品", b: "どのサービス・商品を主に訴求するか、何を問い合わせてほしいか。補助金の対象経費として適切かも含めて整理します。" },
                { t: "必要ページ数と構成", b: "トップページ・サービスページ・料金ページ・事例ページ・FAQ・お問い合わせフォームなど、必要なページを事前にリストアップします。" },
                { t: "SEO対策の範囲", b: "「葛飾区＋業種」「亀有＋サービス名」などで検索上位を狙うためのSEO設計が含まれているか。どのキーワードを重点的に狙うかを決めておきます。" },
                { t: "MEOとの連携方針", b: "Googleビジネスプロフィールとホームページの情報（住所・営業時間・サービス内容）を統一することで、地域検索での信頼性が向上します。" },
                { t: "問い合わせ導線の設計", b: "電話・メール・フォーム・LINE・予約システムなど、どの導線を設けるかを決めます。補助金対象かどうかも含めて確認が必要です。" },
                { t: "写真・原稿の準備", b: "店舗写真・スタッフ写真・施工事例写真・サービス説明文など、制作に必要な素材を事前に準備します。素材の有無によって費用・工期が変わります。" },
                { t: "制作スケジュール", b: "補助金申請が着手前申請の場合、制作開始前に承認を受ける必要があります。申請期間・承認期間・制作期間を逆算してスケジュールを立てます。" },
                { t: "見積書の内訳", b: "補助金申請では、制作費用の内訳（デザイン費・コーディング費・SEO設定費・保守費など）を明記した見積書が必要になる場合があります。サイプレスでは詳細な見積書を発行できます。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "24px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>
                    <span style={{ display: "inline-block", width: "18px", height: "18px", background: "#0d1b2a", borderRadius: "3px", marginRight: "8px", verticalAlign: "middle" }}></span>
                    {item.t}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: SEO DESIGN ===== */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>SEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              葛飾区の事業者に必要なSEO設計
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              葛飾区の事業者向けに、地域特性を活かしたSEO設計のポイントを整理します。ホームページ制作の段階からSEOを考慮することで、制作後の追加費用を抑えながら集客効果を高めることができます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "葛飾区＋業種・サービス名のキーワード", b: "「葛飾区 ホームページ制作」「葛飾区 整骨院」「葛飾区 税理士」など、エリア名＋業種・サービス名の組み合わせキーワードに対応したページを制作段階から設計します。" },
                { n: "02", t: "近隣地域名・駅名を含むキーワード", b: "「亀有 美容室」「金町 歯科」「新小岩 カフェ」「立石 整体」「柴又 ランチ」など、駅名・地域名を組み合わせたページ設計を行います。葛飾区は穴場キーワードが多く、競合が少ないため効果が出やすい傾向があります。" },
                { n: "03", t: "悩み系・課題系キーワード", b: "「腰痛 治し方 葛飾区」「外壁塗装 費用 葛飾区」「相続 相談 亀有」など、お客様の具体的な悩みや課題に対応したコンテンツページを設計します。このようなキーワードはコンバージョン率が高い傾向があります。" },
                { n: "04", t: "料金・費用系キーワード", b: "「葛飾区 ホームページ制作 費用」「亀有 美容室 料金」など、料金を調べているユーザー向けの料金ページを設計します。比較検討段階のユーザーへのアプローチに効果的です。" },
                { n: "05", t: "施工事例・実績ページの設計", b: "「葛飾区 外壁塗装 事例」「亀有 美容室 ビフォーアフター」など、施工・サービスの実績ページを蓄積することで、E-E-A-T（経験・専門性・権威性・信頼性）が高まり検索順位の向上につながります。" },
                { n: "06", t: "FAQページの設計", b: "「葛飾区でホームページ制作に補助金は使えますか？」「亀有の整骨院はどう選べばよい？」など、お客様がよく持つ疑問に答えるFAQページは、SEO効果とAI検索での引用率向上に有効です。" },
                { n: "07", t: "Googleビジネスプロフィールとの情報統一", b: "ホームページ上の住所・電話番号・営業時間・サービス内容を、Googleビジネスプロフィール（Googleマップ）の情報と一致させることが、MEO対策とSEOの両面で重要です。情報の不一致はGoogleからの信頼性低下につながります。" },
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

        {/* ===== SECTION 7: INDUSTRY-SPECIFIC ===== */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別のホームページ制作ポイント（葛飾区）
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              業種ごとに、ホームページ制作で重視すべきポイントが異なります。葛飾区の地域特性と業種を掛け合わせた設計を行うことで、制作後の集客効果が最大化されます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  n: "01",
                  t: "飲食店",
                  b: "メニュー・写真・予約フォーム・テイクアウト対応の明示が必須です。「亀有 ランチ」「金町 居酒屋」「立石 焼き鳥」「柴又 甘味処」などの地域名＋業態キーワードに対応したページを設計します。Googleビジネスプロフィールの口コミ・写真との連動が来客数に直結します。",
                },
                {
                  n: "02",
                  t: "美容室・ネイルサロン",
                  b: "施術メニュー・価格・スタッフ紹介・ビフォーアフター写真・ネット予約導線が重要です。「亀有 美容室」「金町 ネイルサロン」などのキーワードに加え、「白髪染め」「縮毛矯正」など施術系キーワードのページを設けることで集客が安定します。",
                },
                {
                  n: "03",
                  t: "整体院・整骨院",
                  b: "症状別ページ（腰痛・肩こり・骨盤矯正など）の設計が集客に効果的です。保険適用・自由診療の違いを明確に説明するページも重要です。「葛飾区 整骨院」「亀有 鍼灸」などのキーワードに対応したコンテンツを制作段階から設計します。",
                },
                {
                  n: "04",
                  t: "クリニック・歯科医院",
                  b: "診療科目・医師紹介・院内設備・初診の流れ・予約方法の説明が重要です。「葛飾区 歯医者」「金町 小児歯科」「亀有 内科」など、専門性を示す複合キーワードに対応したページを設けることで、競合の少ないキーワードでの集患が可能です。",
                },
                {
                  n: "05",
                  t: "士業（税理士・行政書士・司法書士）",
                  b: "専門分野・対応地域・相談実績・料金目安・相談の流れを明確に掲載します。「葛飾区 税理士」「亀有 行政書士」「金町 相続相談」などのキーワードに加え、相続・会社設立・離婚など相談種別のコンテンツページを設けることで、検索意図に合った見込み客を継続的に集客できます。",
                },
                {
                  n: "06",
                  t: "不動産会社",
                  b: "物件情報・エリアガイド・学区情報・売却相談の流れが重要コンテンツです。「葛飾区 賃貸」「亀有 不動産」「金町 マンション売却」などのキーワードに加え、「葛飾区 新築一戸建て」「立石 リノベマンション」など競合が少ないニッチキーワードのページを設計します。",
                },
                {
                  n: "07",
                  t: "清掃業",
                  b: "対応エリア（葛飾区・足立区・江戸川区など）・清掃の種類（エアコン・ハウスクリーニング・オフィス清掃）・料金目安・対応時間を明示します。「葛飾区 エアコンクリーニング」「亀有 ハウスクリーニング」など検索意図に合ったページを制作段階から設計します。",
                },
                {
                  n: "08",
                  t: "建設・リフォーム会社",
                  b: "施工事例ページの蓄積が最重要です。「葛飾区 リフォーム」「亀有 外壁塗装」「金町 水回りリフォーム」など施工種別＋地域のページを設計します。費用目安・施工の流れ・保証内容を明確に掲載することで、問い合わせ率が高まります。",
                },
                {
                  n: "09",
                  t: "学習塾・個別指導塾",
                  b: "対象学年・指導方針・合格実績・料金・体験授業の案内が重要です。「亀有 塾」「金町 個別指導」「新小岩 学習塾」に加え、「葛飾区 中学受験 塾」「葛飾区 高校受験 対策」など受験種別のページを設けることで検索流入が増えます。",
                },
                {
                  n: "10",
                  t: "小売店",
                  b: "取扱商品・在庫状況・お得な情報・営業時間・アクセスが重要コンテンツです。「亀有 〇〇ショップ」「葛飾区 〇〇専門店」など地域名＋商品カテゴリのキーワードに対応したページ設計が集客につながります。Googleビジネスプロフィールとの情報統一も必須です。",
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

        {/* ===== SECTION 8: WHAT CYPRESS CAN DO ===== */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Our Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              サイプレスが対応できること
            </h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              株式会社サイプレスは葛飾区白鳥に拠点を置き、葛飾区の中小企業・店舗向けにホームページ制作からWeb集客支援まで一貫して対応しています。補助金活用時に必要となる制作内容・見積内容の整理もサポートします（採択・支給を保証するものではありません）。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "ホームページ制作", b: "Next.js・WordPressによる高速・SEO対応のホームページを制作します。葛飾区への訪問ヒアリングから納品・保守まで一貫対応。補助金申請に必要な見積書・仕様書の発行も可能です。" },
                { n: "02", t: "SEO内部設計", b: "制作段階からSEOを考慮したURL設計・タイトル・メタ情報・構造化データ・表示速度最適化を実装します。「葛飾区＋業種」キーワードでの上位表示を目指す構造を構築します。" },
                { n: "03", t: "MEO対策", b: "Googleビジネスプロフィールの完全最適化・写真投稿・定期投稿・口コミ管理を月次で支援します。ホームページとGBPの情報統一による地域検索での露出強化を実現します。" },
                { n: "04", t: "AIO対策（AI検索対策）", b: "ChatGPT・Gemini・Perplexityなどのai検索から引用されやすいコンテンツ構造・FAQ設計・構造化データを実装します。次世代の検索環境に対応した集客基盤を構築します。" },
                { n: "05", t: "問い合わせ導線設計", b: "電話・メールフォーム・LINE・予約システムなど、業種に最適な問い合わせ導線を設計します。CTA（行動喚起）ボタンの配置・文言の最適化も含めてCV率の向上を目指します。" },
                { n: "06", t: "料金ページ・事例ページ設計", b: "サービス料金・費用目安を明確に掲載した料金ページ、施工・支援事例を蓄積する事例ページを設計します。これらのページはSEO・CV率の両面で集客に大きく貢献します。" },
                { n: "07", t: "Search Console導入前提の構成", b: "Google Search ConsoleとGoogle Analyticsを活用した効果測定・改善サイクルを前提とした構成で制作します。データに基づく継続的なSEO改善が可能になります。" },
                { n: "08", t: "Googleビジネスプロフィールとの情報整理", b: "ホームページに掲載する住所・電話番号・営業時間・サービス内容をGoogleビジネスプロフィールと統一し、地域検索での信頼性と上位表示を最大化します。" },
                { n: "09", t: "申請時の制作内容・見積内容の整理サポート", b: "補助金申請時に必要となるホームページ制作内容・機能一覧・見積書の整理をサポートします。ただし、補助金の採択・支給の保証はできません。申請手続きは葛飾区公式窓口へご確認ください。" },
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

        {/* ===== SECTION 9: PRICING LINK ===== */}
        <section style={{ background: "#ffffff", padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Pricing</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              Web集客パッケージの料金を確認する
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "600px", marginBottom: "28px" }}>
              ホームページ制作・SEO対策・MEO対策をまとめてご依頼いただけるパッケージプランをご用意しています。補助金を活用する際の見積書としてもご活用いただけます。
            </p>
            <Link
              href="/pricing/web-growth-package"
              style={{
                display: "inline-block",
                background: "#0d1b2a",
                color: "#fff",
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              ホームページ制作・SEOを含むWeb集客パッケージ料金を見る →
            </Link>
          </div>
        </section>

        {/* ===== SECTION 10: RELATED SERVICES ===== */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Related Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              関連サービス
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
              {[
                { href: "/web-design", label: "ホームページ制作", desc: "SEOに強いサイト制作" },
                { href: "/seo", label: "SEO対策", desc: "検索上位表示支援" },
                { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示" },
                { href: "/aio", label: "AIO対策", desc: "AI検索対策" },
                { href: "/sns", label: "SNS運用", desc: "Instagram・SNS集客" },
                { href: "/services", label: "サービス一覧", desc: "全サービスを見る" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px", textDecoration: "none", display: "block" }}
                >
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.label}</p>
                  <p style={{ fontSize: "12px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 11: RELATED AREAS ===== */}
        <section style={{ background: "#ffffff", padding: "72px 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Related Areas</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              関連地域ページ
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { href: "/area/katsushika", label: "葛飾区 — Web集客支援" },
                { href: "/area/adachi", label: "足立区" },
                { href: "/area/edogawa", label: "江戸川区" },
                { href: "/area/sumida", label: "墨田区" },
                { href: "/area/koto", label: "江東区" },
                { href: "/area/taito", label: "台東区" },
                { href: "/area/tokyo", label: "東京都全域" },
                { href: "/area", label: "対応エリア一覧" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: "13px", color: "#374151", textDecoration: "none",
                    padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF",
                  }}
                >
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 12: RELATED COLUMNS ===== */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Related Columns</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              関連コラム・ガイド
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { href: "/column/category/web-design", label: "ホームページ制作コラム一覧" },
                { href: "/column/category/local-seo", label: "ローカルSEOコラム一覧" },
                { href: "/column/category/seo", label: "SEO対策コラム一覧" },
                { href: "/guide/homepage-cost-guide", label: "ホームページ制作費用ガイド" },
                { href: "/guide/local-seo-basics", label: "ローカルSEO基礎ガイド" },
                { href: "/knowledge/web-design-guide", label: "Web制作の基礎知識" },
                { href: "/knowledge/local-seo-guide", label: "ローカルSEOの基礎知識" },
                { href: "/cost/homepage", label: "ホームページ制作の費用目安" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: "13px", color: "#374151", textDecoration: "none",
                    padding: "8px 16px", border: "1px solid #E8E4DC", background: "#FFFFFF",
                  }}
                >
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 13: FAQ ===== */}
        <FaqSection
          items={faqItems}
          heading="葛飾区のホームページ制作・補助金活用に関するよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="葛飾区のホームページ制作・Web集客、まずはご相談ください"
          body="葛飾区の中小企業・店舗向けに、SEOに強いホームページ制作・MEO対策・AIO対策を提供しています。補助金活用時の制作内容・見積内容の整理もサポートしています（採択・支給の保証はできません）。葛飾区内への訪問相談にも対応しています。お気軽にご連絡ください。"
        />

      </main>
      <Footer />
    </>
  );
}
