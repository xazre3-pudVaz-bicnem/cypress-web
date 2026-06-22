import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "Web集客パッケージ料金｜ホームページ制作・SEO・LP制作｜株式会社サイプレス",
  description:
    "株式会社サイプレスのWeb集客パッケージ料金。ホームページ制作、SEO対策、LP制作を組み合わせた150万円・200万円・300万円の3プランをご案内します。制作範囲により最終見積もりが変動する場合があります。",
  keywords: [
    "ホームページ制作 料金",
    "SEO対策 料金",
    "Web集客 パッケージ",
    "LP制作 料金",
    "株式会社サイプレス 料金",
  ],
  openGraph: {
    title: "Web集客パッケージ料金｜ホームページ制作・SEO・LP制作｜株式会社サイプレス",
    description:
      "ホームページ制作・SEO対策・LP制作を組み合わせたWeb集客パッケージ。150万円・200万円・300万円の3プランをご案内します。",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/pricing/web-growth-package",
  },
};

const BASE = "https://www.cypress-all.co.jp";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Web集客パッケージ料金",
          item: `${BASE}/pricing/web-growth-package`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${BASE}/pricing/web-growth-package#service`,
      name: "Web集客パッケージ",
      description:
        "ホームページ制作・SEO対策・LP制作を組み合わせたWeb集客支援パッケージ。ライト（150万円）・スタンダード（200万円）・プレミアム（300万円）の3プランを提供。",
      url: `${BASE}/pricing/web-growth-package`,
      provider: {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        name: "株式会社サイプレス",
        url: `${BASE}/`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web集客パッケージメニュー",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Web集客ライトプラン",
            description: "ホームページ制作とSEO内部設計をまとめた基本パッケージ",
            price: "1500000",
            priceCurrency: "JPY",
          },
          {
            "@type": "Offer",
            name: "Web集客スタンダードプラン",
            description: "ホームページ制作とSEO対策をより本格的に行う標準パッケージ",
            price: "2000000",
            priceCurrency: "JPY",
          },
          {
            "@type": "Offer",
            name: "Web集客プレミアムプラン",
            description:
              "ホームページ制作・SEO対策・LP10枚制作をまとめた一括Web集客パッケージ",
            price: "3000000",
            priceCurrency: "JPY",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "分割決済は可能ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "分割決済をご希望の場合は、決済会社の審査条件やご契約内容により、ご利用可否や決済条件が異なる場合があります。詳細はお問い合わせ時にご確認ください。",
          },
        },
        {
          "@type": "Question",
          name: "制作範囲によって金額は変わりますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "掲載料金はパッケージの基本料金です。制作範囲・ページ数・LP制作内容・SEO設計範囲・運用サポートの有無により、最終見積もりが変動する場合があります。正式な内容はヒアリング後にお見積もりします。",
          },
        },
        {
          "@type": "Question",
          name: "LP10枚とはどのような内容ですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "プレミアムプランのLP10枚とは、サービス別・地域別・ターゲット別などの目的に合わせたランディングページ10ページ分を指します。制作内容の詳細はヒアリング後に決定します。",
          },
        },
        {
          "@type": "Question",
          name: "SEO対策はどこまで含まれますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "各プランにはSEO内部設計（title・description・H1・見出し構造・内部リンク・構造化データの基本対応）が含まれます。継続的なコンテンツSEOや月次改善レポートは別途ご相談ください。",
          },
        },
        {
          "@type": "Question",
          name: "公開後の運用も依頼できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、公開後のMEO対策・SEO継続改善・SNS運用・AIO対策などを継続支援するプランを別途ご用意しています。パッケージ完成後も継続的なWeb集客支援が可能です。",
          },
        },
        {
          "@type": "Question",
          name: "MEO対策やSNS運用も追加できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、各パッケージにMEO対策・SNS運用・AIO対策・継続改善サポートをオプションで追加することができます。詳細はお問い合わせ時にご相談ください。",
          },
        },
        {
          "@type": "Question",
          name: "契約前に内容を確認できますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、まず無料でヒアリングを実施し、制作範囲・内容・スケジュール・費用の詳細をご提案します。ご納得いただいた上でご契約となります。",
          },
        },
      ],
    },
  ],
};

const crumbStyle: React.CSSProperties = {
  fontSize: "11px",
  color: "#9CA3AF",
  textDecoration: "none",
  fontFamily: "var(--font-display)",
  letterSpacing: "0.05em",
};

const plans = [
  {
    label: "Light",
    name: "Web集客ライトプラン",
    price: "1,500,000",
    desc: "ホームページ制作とSEO内部設計をまとめた基本パッケージです。",
    featured: false,
    items: [
      "ホームページ制作",
      "SEO内部設計",
      "基本下層ページ制作",
      "スマホ対応（レスポンシブ）",
      "問い合わせ導線設計",
      "SEOキーワード設計",
      "title / description / H1 設計",
      "構造化データの基本対応",
      "公開後の基本調整",
    ],
  },
  {
    label: "Standard",
    name: "Web集客スタンダードプラン",
    price: "2,000,000",
    desc: "ホームページ制作とSEO対策をより本格的に行う標準パッケージです。",
    featured: true,
    items: [
      "ホームページ制作",
      "SEO内部設計",
      "サービス別下層ページ制作",
      "スマホ最適化",
      "問い合わせ導線設計・CV設計",
      "SEOキーワード設計",
      "title / description / H1 設計",
      "内部リンク設計",
      "構造化データ対応",
      "FAQ設計",
      "公開後の改善前提設計",
    ],
  },
  {
    label: "Premium",
    name: "Web集客プレミアムプラン",
    price: "3,000,000",
    desc: "ホームページ制作・SEO対策・LP10枚制作をまとめた一括パッケージです。",
    featured: false,
    items: [
      "ホームページ制作",
      "SEO内部設計",
      "SEO下層ページ設計",
      "LP10枚制作",
      "サービス別LP制作",
      "地域別または業種別LP制作",
      "問い合わせ導線設計・CV設計",
      "スマホ最適化",
      "構造化データ対応",
      "FAQ設計",
      "AIO対策の基本設計",
      "成功事例または実績ページ設計",
      "公開後の改善前提設計",
    ],
  },
];

const planDetails = [
  {
    label: "Light",
    name: "Web集客ライトプラン（1,500,000円）",
    desc: "ホームページ制作とSEO内部設計をまとめた基本パッケージです。会社案内やサービス紹介だけでなく、検索からの流入と問い合わせ導線を意識したサイト構成を整えます。",
    targets: [
      "まずは公式サイトを整えたい",
      "SEOを意識したホームページを作りたい",
      "サービス内容や会社情報を分かりやすく見せたい",
      "小規模事業者、店舗、中小企業",
    ],
  },
  {
    label: "Standard",
    name: "Web集客スタンダードプラン（2,000,000円）",
    desc: "ホームページ制作とSEO対策をより本格的に行う標準パッケージです。サービスページや下層ページを整備し、検索エンジンとユーザーの両方に伝わりやすいサイト構造を作ります。",
    targets: [
      "SEOを本格的に強化したい",
      "複数サービスを分かりやすく見せたい",
      "問い合わせにつながる導線を作りたい",
      "地域名や業種名での検索流入を狙いたい",
    ],
  },
  {
    label: "Premium",
    name: "Web集客プレミアムプラン（3,000,000円）",
    desc: "ホームページ制作、SEO対策、LP10枚制作をまとめた一括Web集客パッケージです。複数サービスや複数エリアで集客導線を作りたい企業向けに、サイト全体の設計から問い合わせ導線までまとめて構築します。",
    targets: [
      "Webからの問い合わせを本格的に増やしたい",
      "複数のサービスや地域をSEOで対策したい",
      "広告用LPやサービス別LPもまとめて作りたい",
      "SEO、AIO、CV導線まで一括で整備したい",
    ],
  },
];

const includedItems = [
  {
    title: "ホームページ制作",
    body: "目的・ターゲットに合わせたサイト設計。スマホ最適化（レスポンシブデザイン）・高速表示・問い合わせ導線を標準実装します。",
  },
  {
    title: "SEO内部設計",
    body: "title・meta description・H1・見出し構造・内部リンク・画像alt・URL設計など、公開時点からSEOに適したサイト構造を整えます。",
  },
  {
    title: "LP制作（プレミアムプラン）",
    body: "サービス別・地域別・ターゲット別など、目的に合わせたランディングページをプレミアムプランで最大10ページ制作します。",
  },
  {
    title: "スマホ対応",
    body: "モバイルファーストの設計でスマートフォン・タブレット・PCすべてで最適な表示になるよう実装します。",
  },
  {
    title: "問い合わせ・CV導線設計",
    body: "問い合わせフォーム・LINE・電話等の導線を目的に合わせて設計。訪問者が行動しやすいページ構成を整えます。",
  },
  {
    title: "構造化データ対応",
    body: "Organization・BreadcrumbList・FAQPage等のSchema.org構造化データを実装し、検索エンジンとAIへの情報伝達を最適化します。",
  },
  {
    title: "AIO基本設計（プレミアムプラン）",
    body: "ChatGPT・Gemini等のAIに引用されやすいFAQ構造・見出し設計・情報整理をプレミアムプランに含みます。",
  },
  {
    title: "公開後の改善前提設計",
    body: "アクセス解析の設定・Search Consoleへの登録を前提とした設計で、公開後に改善しやすいサイト構造を作ります。",
  },
];

const processSteps = [
  { step: "01", title: "ヒアリング", body: "ビジネス目標・ターゲット・現状課題のヒアリング" },
  { step: "02", title: "構成設計", body: "サイトマップ・ページ構成・キーワード設計" },
  { step: "03", title: "デザイン制作", body: "ワイヤーフレームからビジュアルデザイン" },
  { step: "04", title: "下層ページ制作", body: "サービスページ・会社概要・LP等の制作" },
  { step: "05", title: "SEO設計", body: "title・内部リンク・構造化データ実装" },
  { step: "06", title: "公開", body: "動作確認・Search Console導入・本番公開" },
  { step: "07", title: "改善", body: "公開後の表示確認・基本調整" },
];

const faqs = [
  {
    q: "分割決済は可能ですか？",
    a: "分割決済をご希望の場合は、決済会社の審査条件やご契約内容により、ご利用可否や決済条件が異なる場合があります。詳細はお問い合わせ時にご確認ください。",
  },
  {
    q: "制作範囲によって金額は変わりますか？",
    a: "掲載料金はパッケージの基本料金です。制作範囲・ページ数・LP制作内容・SEO設計範囲・運用サポートの有無により、最終見積もりが変動する場合があります。正式な内容はヒアリング後にお見積もりします。",
  },
  {
    q: "LP10枚とはどのような内容ですか？",
    a: "プレミアムプランのLP10枚とは、サービス別・地域別・ターゲット別などの目的に合わせたランディングページ10ページ分を指します。制作内容の詳細はヒアリング後に決定します。",
  },
  {
    q: "SEO対策はどこまで含まれますか？",
    a: "各プランにはSEO内部設計（title・description・H1・見出し構造・内部リンク・構造化データの基本対応）が含まれます。継続的なコンテンツSEOや月次改善レポートは別途ご相談ください。",
  },
  {
    q: "公開後の運用も依頼できますか？",
    a: "はい、公開後のMEO対策・SEO継続改善・SNS運用・AIO対策などを継続支援するプランを別途ご用意しています。パッケージ完成後も継続的なWeb集客支援が可能です。",
  },
  {
    q: "MEO対策やSNS運用も追加できますか？",
    a: "はい、各パッケージにMEO対策・SNS運用・AIO対策・継続改善サポートをオプションで追加することができます。詳細はお問い合わせ時にご相談ください。",
  },
  {
    q: "契約前に内容を確認できますか？",
    a: "はい、まず無料でヒアリングを実施し、制作範囲・内容・スケジュール・費用の詳細をご提案します。ご納得いただいた上でご契約となります。",
  },
];

export default function WebGrowthPackagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(80px, 12vh, 120px) 0 clamp(40px, 6vh, 64px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <nav aria-label="パンくず" style={{ marginBottom: "32px" }}>
              <ol
                style={{
                  display: "flex",
                  gap: "8px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <li>
                  <Link href="/" style={crumbStyle}>
                    ホーム
                  </Link>
                </li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ ...crumbStyle, color: "#6B7280" }}>
                  Web集客パッケージ料金
                </li>
              </ol>
            </nav>

            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.28em",
                color: "rgba(196,169,106,0.7)",
                fontSize: "10px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Pricing
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(26px, 4vw, 44px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "20px",
              }}
            >
              Web集客パッケージ料金
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "#374151",
                lineHeight: "1.9",
                maxWidth: "660px",
                marginBottom: "12px",
              }}
            >
              ホームページ制作、SEO対策、LP制作を組み合わせたWeb集客支援パッケージです。
              <br />
              制作範囲・規模・目的に応じて3つのプランをご用意しています。
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                lineHeight: "1.8",
                maxWidth: "640px",
              }}
            >
              掲載料金はパッケージの基本料金です。制作範囲、ページ数、LP制作内容、SEO設計範囲、運用サポートの有無により、最終見積もりが変動する場合があります。
            </p>
          </div>
        </section>

        {/* ── 3プラン比較 ── */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(48px, 8vh, 80px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <style>{`
            .pricing-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: clamp(16px, 2.5vw, 28px);
            }
            @media (max-width: 900px) {
              .pricing-grid {
                grid-template-columns: 1fr;
                max-width: 520px;
                margin-left: auto;
                margin-right: auto;
              }
            }
          `}</style>
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Plans
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.8vw, 30px)",
                color: "#0B1628",
                fontWeight: 700,
                marginBottom: "clamp(28px, 5vh, 40px)",
              }}
            >
              3つのプランから選べます
            </h2>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <div
                  key={plan.label}
                  style={{
                    border: plan.featured ? "1px solid #C4A96A" : "1px solid #E8E4DC",
                    background: "#FFFFFF",
                    padding: "clamp(24px, 3vw, 36px)",
                    position: "relative",
                  }}
                >
                  {plan.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, #C4A96A, #E8C970)",
                      }}
                    />
                  )}
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      color: "#9CA3AF",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {plan.label} Plan
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(16px, 1.8vw, 20px)",
                      color: "#0B1628",
                      fontWeight: 700,
                      marginBottom: "20px",
                      lineHeight: 1.4,
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div
                    style={{
                      marginBottom: "20px",
                      paddingBottom: "20px",
                      borderBottom: "1px solid #E8E4DC",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(28px, 3.5vw, 40px)",
                        color: "#0B1628",
                        fontWeight: 300,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginLeft: "4px",
                      }}
                    >
                      円（税別）
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                      lineHeight: "1.85",
                      marginBottom: "20px",
                    }}
                  >
                    {plan.desc}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "13px",
                          color: "#374151",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            color: "#C4A96A",
                            flexShrink: 0,
                            marginTop: "1px",
                          }}
                        >
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "#9CA3AF",
                marginTop: "24px",
                lineHeight: "1.8",
              }}
            >
              ※ 掲載料金はパッケージの基本料金です。制作範囲・ページ数・LP内容・SEO設計範囲・運用サポートの有無により、最終見積もりが変動する場合があります。
            </p>
          </div>
        </section>

        {/* ── 各プラン詳細 ── */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(48px, 7vh, 80px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <style>{`
            .plan-detail-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: clamp(24px, 5vw, 64px);
              align-items: start;
            }
            @media (max-width: 768px) {
              .plan-detail-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Plan Details
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.8vw, 30px)",
                color: "#0B1628",
                fontWeight: 700,
                marginBottom: "clamp(32px, 5vh, 48px)",
              }}
            >
              各プランの対象・向いている事業者
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {planDetails.map((plan) => (
                <div
                  key={plan.label}
                  style={{
                    padding: "clamp(28px, 4vh, 40px) 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <div className="plan-detail-grid">
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          color: "#C4A96A",
                          marginBottom: "10px",
                          textTransform: "uppercase",
                        }}
                      >
                        {plan.label} Plan
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(16px, 1.8vw, 20px)",
                          color: "#0B1628",
                          fontWeight: 700,
                          marginBottom: "16px",
                          lineHeight: 1.45,
                        }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#6B7280",
                          lineHeight: "1.9",
                        }}
                      >
                        {plan.desc}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#9CA3AF",
                          letterSpacing: "0.1em",
                          marginBottom: "14px",
                        }}
                      >
                        こんな方に向いています
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        {plan.targets.map((t) => (
                          <li
                            key={t}
                            style={{
                              fontSize: "13px",
                              color: "#374151",
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "8px",
                            }}
                          >
                            <span
                              style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                background: "#C4A96A",
                                flexShrink: 0,
                                marginTop: "7px",
                              }}
                            />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 含まれる主な支援内容 ── */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(48px, 7vh, 80px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <style>{`
            .included-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: clamp(16px, 2.5vw, 28px);
            }
            @media (max-width: 640px) {
              .included-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Included
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.8vw, 30px)",
                color: "#0B1628",
                fontWeight: 700,
                marginBottom: "clamp(28px, 5vh, 40px)",
              }}
            >
              含まれる主な支援内容
            </h2>
            <div className="included-grid">
              {includedItems.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "clamp(20px, 2.5vw, 28px)",
                    border: "1px solid #E8E4DC",
                    background: "#F8F6F2",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "15px",
                      color: "#0B1628",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                      lineHeight: "1.85",
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 制作の流れ ── */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(48px, 7vh, 80px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Process
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.8vw, 30px)",
                color: "#0B1628",
                fontWeight: 700,
                marginBottom: "clamp(28px, 5vh, 40px)",
              }}
            >
              制作の流れ
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {processSteps.map((s, i) => (
                <div
                  key={s.step}
                  style={{
                    display: "flex",
                    gap: "clamp(20px, 4vw, 48px)",
                    padding: "clamp(20px, 3vh, 28px) 0",
                    borderTop: i === 0 ? "none" : "1px solid #E8E4DC",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      color: "#E8E4DC",
                      fontWeight: 300,
                      flexShrink: 0,
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                      marginTop: "2px",
                    }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "15px",
                        color: "#0B1628",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#6B7280",
                        lineHeight: "1.8",
                        margin: 0,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(48px, 7vh, 80px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9CA3AF",
                fontSize: "10px",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.8vw, 30px)",
                color: "#0B1628",
                fontWeight: 700,
                marginBottom: "clamp(28px, 5vh, 40px)",
              }}
            >
              よくあるご質問
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    padding: "clamp(20px, 3vh, 28px) 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#0B1628",
                      fontWeight: 600,
                      marginBottom: "10px",
                      lineHeight: "1.7",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Q. {faq.q}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6B7280",
                      lineHeight: "1.9",
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 注意事項 ── */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(28px, 4vh, 40px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                lineHeight: "1.9",
              }}
            >
              掲載料金は、Web集客パッケージの基本料金です。制作範囲、ページ数、LP制作内容、SEO設計範囲、運用サポートの有無により、最終見積もりが変動する場合があります。正式な内容はヒアリング後にご案内します。
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                lineHeight: "1.9",
                marginTop: "8px",
              }}
            >
              分割決済をご希望の場合は、決済会社の審査条件やご契約内容により、ご利用可否や決済条件が異なる場合があります。
            </p>
          </div>
        </section>

        {/* ── 関連サービスへのリンク ── */}
        <section
          style={{
            background: "#FFFFFF",
            padding: "clamp(36px, 5vh, 52px) 0",
            borderTop: "1px solid #E8E4DC",
          }}
        >
          <div
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                color: "#9CA3AF",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
            >
              関連サービス
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                { label: "ホームページ制作サービス", href: "/web-design" },
                { label: "SEO対策サービス", href: "/seo" },
                { label: "AIO対策サービス", href: "/aio" },
                { label: "サービス一覧", href: "/services" },
                { label: "成功事例を見る", href: "/cases" },
                { label: "費用・料金一覧", href: "/cost" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "13px",
                    color: "#374151",
                    textDecoration: "none",
                    padding: "8px 16px",
                    border: "1px solid #E8E4DC",
                    background: "#F8F6F2",
                  }}
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA
          heading="Web集客パッケージについてご相談ください"
          body="制作範囲・ご予算・スケジュールなど、まずはヒアリングからご案内します。ご相談は無料です。"
        />
      </main>
      <Footer />
    </>
  );
}
