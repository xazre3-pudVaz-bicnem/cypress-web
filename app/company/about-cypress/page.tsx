import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "株式会社サイプレスとは｜東京・葛飾区のWebマーケティング会社",
  description:
    "株式会社サイプレスは、東京都葛飾区を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社です。代表：織田 春樹。設立：2026年5月13日。会社名・理念・サービス体系を紹介。",
  keywords: [
    "株式会社サイプレス",
    "サイプレス とは",
    "Cypress Webマーケティング",
    "葛飾区 Web制作会社",
    "東京 SEO MEO",
    "株式会社サイプレス 代表",
    "株式会社サイプレス 葛飾区",
  ],
  openGraph: {
    title: "株式会社サイプレスとは｜東京・葛飾区のWebマーケティング会社",
    description:
      "株式会社サイプレスは、東京都葛飾区を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社です。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/about-cypress" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://www.cypress-all.co.jp/#organization",
      name: "株式会社サイプレス",
      legalName: "株式会社サイプレス",
      alternateName: ["Cypress Inc.", "サイプレス", "Cypress", "cypress-all"],
      url: "https://www.cypress-all.co.jp/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.cypress-all.co.jp/logo.png",
        width: 200,
        height: 60,
      },
      foundingDate: "2026-05-13",
      founder: {
        "@type": "Person",
        "@id": "https://www.cypress-all.co.jp/company/message#representative",
        name: "織田 春樹",
        alternateName: "Haruki Oda",
        jobTitle: "代表取締役",
        worksFor: { "@id": "https://www.cypress-all.co.jp/#organization" },
        knowsAbout: ["MEO対策", "SEO対策", "AIO対策", "Webマーケティング", "ホームページ制作", "AI活用"],
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
        postalCode: "124-0816",
        addressRegion: "東京都",
        addressLocality: "葛飾区",
        streetAddress: "白鳥4-6-1-623",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.7524,
        longitude: 139.8471,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "info@cypress-all.co.jp",
          contactType: "customer service",
          availableLanguage: "Japanese",
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          email: "info@cypress-all.co.jp",
          contactType: "sales",
          availableLanguage: "Japanese",
        },
      ],
      description:
        "株式会社サイプレスは、東京都葛飾区を拠点に、ホームページ制作、SEO対策、MEO対策、AIO対策、SNS運用、AI活用支援を行うWebマーケティング会社です。中小企業・地域店舗のWeb集客を設計から運用まで支援します。",
      knowsAbout: [
        "ホームページ制作",
        "SEO対策",
        "MEO対策",
        "AIO対策",
        "SNS運用",
        "AI活用支援",
        "Webマーケティング",
        "Googleビジネスプロフィール最適化",
        "AI検索最適化",
        "コンテンツSEO",
        "テクニカルSEO",
        "ローカルSEO",
        "Next.js",
        "WordPress",
        "構造化データ",
        "E-E-A-T",
        "中小企業Web集客",
      ],
      areaServed: [
        { "@type": "City", name: "葛飾区" },
        { "@type": "City", name: "足立区" },
        { "@type": "City", name: "江戸川区" },
        { "@type": "City", name: "墨田区" },
        { "@type": "City", name: "江東区" },
        { "@type": "City", name: "荒川区" },
        { "@type": "State", name: "東京都" },
        { "@type": "State", name: "神奈川県" },
        { "@type": "State", name: "埼玉県" },
        { "@type": "State", name: "千葉県" },
        { "@type": "Country", name: "日本" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webマーケティングサービス",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEO対策", url: "https://www.cypress-all.co.jp/services/meo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO対策", url: "https://www.cypress-all.co.jp/services/seo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AIO対策", url: "https://www.cypress-all.co.jp/services/aio" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ホームページ制作", url: "https://www.cypress-all.co.jp/services/web-design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SNS運用", url: "https://www.cypress-all.co.jp/services/sns" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI活用支援", url: "https://www.cypress-all.co.jp/services/ai" } },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.cypress-all.co.jp/company/about-cypress#webpage",
      url: "https://www.cypress-all.co.jp/company/about-cypress",
      name: "株式会社サイプレスとは｜東京・葛飾区のWebマーケティング会社",
      isPartOf: { "@id": "https://www.cypress-all.co.jp/#website" },
      about: { "@id": "https://www.cypress-all.co.jp/#organization" },
      inLanguage: "ja",
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "会社情報", item: "https://www.cypress-all.co.jp/company" },
    { "@type": "ListItem", position: 3, name: "株式会社サイプレスとは", item: "https://www.cypress-all.co.jp/company/about-cypress" },
  ],
};

const SERVICES = [
  {
    num: "01",
    label: "MEO対策",
    body: "Googleマップ・Googleビジネスプロフィールを最適化し、「近くの○○」検索からの来店・問い合わせを増やします。地域ビジネスの集客効率を最大化するサービスです。",
    href: "/services/meo",
  },
  {
    num: "02",
    label: "SEO対策",
    body: "キーワード設計・コンテンツSEO・テクニカルSEOを組み合わせ、Googleの自然検索からの流入を継続的に増やします。広告費をかけない長期集客基盤を構築します。",
    href: "/services/seo",
  },
  {
    num: "03",
    label: "AIO対策",
    body: "ChatGPT・Gemini・PerplexityなどのAI検索エンジンに引用・推薦されるための情報設計。E-E-A-T強化・構造化データ・FAQ整備でAI検索時代に対応します。",
    href: "/services/aio",
  },
  {
    num: "04",
    label: "ホームページ制作",
    body: "SEO・CV・パフォーマンスを兼ね備えたWebサイトを制作。集客→問い合わせの導線を設計段階から組み込み、成果につながるサイトをつくります。",
    href: "/services/web-design",
  },
  {
    num: "05",
    label: "SNS運用",
    body: "Instagram・LINE公式アカウント・Google投稿の運用代行と戦略設計。MEOとの連動で認知と来店につながる発信を継続します。",
    href: "/services/sns",
  },
  {
    num: "06",
    label: "AI活用支援",
    body: "業務効率化・チャットボット構築・コンテンツ制作半自動化など、AIを活用した業務改善を伴走支援します。ツール選定から運用定着まで対応します。",
    href: "/services/ai",
  },
];

const DIFFERENTIATORS = [
  {
    title: "MEO・SEO・AIOを一貫して対応",
    body: "集客の入口はGoogleマップ・検索・AI検索の3つに広がっています。株式会社サイプレスは3領域すべてに対応し、施策の整合性を保ちながら支援します。",
  },
  {
    title: "制作と集客をワンストップで",
    body: "ホームページを作っても集客できないケースは多い。株式会社サイプレスは、制作段階からSEO・MEO・CV改善を設計に組み込み、公開後すぐに動けるサイトをつくります。",
  },
  {
    title: "架空の数値・誇大表現ゼロ",
    body: "「上位表示保証」「問い合わせ◯倍」などの根拠不明な表現は一切使いません。施策の内容・プロセス・考え方を正直に伝えることを方針としています。",
  },
  {
    title: "東京・葛飾区から全国へ",
    body: "東京都葛飾区に拠点を持ち、地域密着型の対応と全国オンライン支援を両立。地方の中小企業・個人事業主にも同じ品質でサービスを提供します。",
  },
];

export default function AboutCypressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>

        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10 flex-wrap" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/company" className="hover:text-[#0F172A] transition-colors">会社情報</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>株式会社サイプレスとは</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              About Cypress
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              株式会社サイプレスとは
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレスは、東京都葛飾区を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社です。
              中小企業・地域店舗のWeb集客を、設計から運用まで一気通貫で支援します。
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Company Overview
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              会社の基本情報
            </h2>
            <dl style={{ display: "grid", gap: "0" }}>
              {[
                { label: "会社名", value: "株式会社サイプレス（英名：Cypress Inc.）" },
                { label: "代表取締役", value: "織田 春樹（Haruki Oda）" },
                { label: "設立", value: "2026年5月13日" },
                { label: "所在地", value: "〒124-0816 東京都葛飾区白鳥4-6-1-623" },
                { label: "メール", value: "info@cypress-all.co.jp" },
                { label: "事業内容", value: "ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援" },
                { label: "対応エリア", value: "東京都・神奈川県・埼玉県・千葉県（全国オンライン対応）" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid #E8E4DC",
                  }}
                >
                  <dt className="text-[13px] font-semibold" style={{ color: "#0F172A" }}>{row.label}</dt>
                  <dd className="text-[14px]" style={{ color: "#374151", lineHeight: "1.7" }}>{row.value}</dd>
                </div>
              ))}
            </dl>

            <div style={{ marginTop: "32px" }}>
              <Link
                href="/company/profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "#6B7280",
                  textDecoration: "none",
                  borderBottom: "1px solid #D1C9BE",
                  paddingBottom: "2px",
                }}
              >
                会社概要（詳細版）を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Name Origin */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Company Name
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              「サイプレス（Cypress）」という名前について
            </h2>
            <div style={{ maxWidth: "680px" }}>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                「サイプレス（Cypress）」とはヒノキ科の常緑樹で、地中海・中東地域で古くから「永続・生命力・誠実」の象徴とされてきた木です。
                嵐の中でも倒れず、長く根を張り続けるその姿を、中小企業のWeb集客支援においても体現したいという思いから会社名にしました。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                「木」が成長するように、お客様のビジネスも時間をかけて確実に育てていく。
                短期的な数字より、長期的な集客基盤の構築を大切にする姿勢がこの名前に込められています。
              </p>
              <p className="text-[14px] leading-[1.8]" style={{ color: "#9CA3AF" }}>
                ※「サイプレス」という名称は他業種にも存在する一般名詞ですが、
                株式会社サイプレス（Cypress Inc.、所在地：東京都葛飾区）はWebマーケティング会社として2026年5月に設立された会社です。
                ウェブサイトURLは <strong style={{ color: "#6B7280" }}>www.cypress-all.co.jp</strong> です。
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Services
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              株式会社サイプレスが提供する6つのサービス
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {SERVICES.map((svc) => (
                <div
                  key={svc.num}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8E4DC",
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      color: "#C4A96A",
                      marginBottom: "8px",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {svc.num}
                  </span>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: "10px",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    {svc.label}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.85", marginBottom: "16px" }}>
                    {svc.body}
                  </p>
                  <Link
                    href={svc.href}
                    style={{
                      fontSize: "12px",
                      color: "#0F172A",
                      textDecoration: "none",
                      borderBottom: "1px solid #E8E4DC",
                      paddingBottom: "2px",
                    }}
                  >
                    詳細を見る →
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "13px",
                  color: "#0F172A",
                  padding: "12px 28px",
                  border: "1px solid #0F172A",
                  textDecoration: "none",
                }}
              >
                サービス一覧を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Why Cypress */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why Cypress
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              株式会社サイプレスが選ばれる理由
            </h2>
            <div style={{ display: "grid", gap: "32px" }}>
              {DIFFERENTIATORS.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "20px",
                    alignItems: "start",
                    paddingBottom: "32px",
                    borderBottom: i < DIFFERENTIATORS.length - 1 ? "1px solid #E8E4DC" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "24px",
                      color: "#E8E4DC",
                      letterSpacing: "0.05em",
                      lineHeight: 1,
                      paddingTop: "4px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: "10px",
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.85" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="font-bold text-[#0d1b2a] mb-8"
              style={{ fontSize: "16px", fontFamily: "var(--font-serif)" }}
            >
              関連ページ
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "8px",
              }}
            >
              {[
                { href: "/company", label: "会社情報トップ" },
                { href: "/company/profile", label: "会社概要" },
                { href: "/company/message", label: "代表挨拶" },
                { href: "/company/philosophy", label: "企業理念" },
                { href: "/services", label: "サービス一覧" },
                { href: "/cases", label: "支援事例" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    background: "#FFFFFF",
                    border: "1px solid #E8E4DC",
                    fontSize: "13px",
                    color: "#374151",
                    textDecoration: "none",
                  }}
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
