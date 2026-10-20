import type { Metadata } from "next";
import { Geist, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/chatbot/ChatWidget";
import { BUSINESSES, COMPANY } from "@/lib/company";
import { CONTACT_EMAIL } from "@/lib/contact";

// 和文は Noto Sans JP、欧文・数字は Geist。どちらも可変フォントで、ウェイトごとにファイルを増やさない。
// 書体の組み合わせ（フォールバック込み）は globals.css の --font-stack で定義している。
const notoSansJP = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.cypress-all.co.jp";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "株式会社サイプレス",
  legalName: "株式会社サイプレス",
  alternateName: ["Cypress Inc.", "サイプレス", "Cypress"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "株式会社サイプレスは、東京都葛飾区亀有を拠点にMEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を行うWebマーケティング会社です。東京23区・全国の中小企業・地域店舗のWeb集客を、設計から運用まで一気通貫で支援します。あわせて軽貨物事業と太陽光事業（SOLAR SHIFT）を運営しています。",
  email: CONTACT_EMAIL,
  telephone: "+81-90-2360-0052",
  address: {
    "@type": "PostalAddress",
    streetAddress: "亀有3-16-14-201",
    addressLocality: "葛飾区",
    addressRegion: "東京都",
    postalCode: "125-0061",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7636,
    longitude: 139.8486,
  },
  areaServed: [
    { "@type": "State", name: "東京都" },
    { "@type": "City", name: "葛飾区" },
    { "@type": "City", name: "足立区" },
    { "@type": "City", name: "江戸川区" },
    { "@type": "City", name: "墨田区" },
    { "@type": "City", name: "江東区" },
    { "@type": "City", name: "荒川区" },
    { "@type": "City", name: "台東区" },
    { "@type": "City", name: "千代田区" },
    { "@type": "City", name: "中央区" },
    { "@type": "City", name: "港区" },
    { "@type": "City", name: "新宿区" },
    { "@type": "City", name: "渋谷区" },
    { "@type": "City", name: "豊島区" },
    { "@type": "City", name: "文京区" },
    { "@type": "City", name: "品川区" },
    { "@type": "City", name: "目黒区" },
    { "@type": "City", name: "世田谷区" },
    { "@type": "City", name: "大田区" },
    { "@type": "City", name: "杉並区" },
    { "@type": "City", name: "中野区" },
    { "@type": "City", name: "練馬区" },
    { "@type": "City", name: "板橋区" },
    { "@type": "City", name: "北区" },
    { "@type": "State", name: "神奈川県" },
    { "@type": "State", name: "埼玉県" },
    { "@type": "State", name: "千葉県" },
    { "@type": "Country", name: "JP" },
  ],
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/company/message#representative`,
    name: "織田 春樹",
    alternateName: "Haruki Oda",
    jobTitle: "代表取締役",
    worksFor: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    knowsAbout: ["MEO対策", "SEO対策", "AIO対策", "Webマーケティング", "AI活用", "ホームページ制作", "構造化データ", "E-E-A-T"],
    url: `${SITE_URL}/company/message`,
  },
  employee: {
    "@type": "Person",
    "@id": `${SITE_URL}/company/message#representative`,
    name: "織田 春樹",
    jobTitle: "代表取締役",
  },
  foundingDate: "2026-05-13",
  foundingLocation: {
    "@type": "Place",
    name: "東京都葛飾区",
    address: {
      "@type": "PostalAddress",
      addressLocality: "葛飾区",
      addressRegion: "東京都",
      addressCountry: "JP",
    },
  },
  priceRange: "¥¥",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "18:00",
  },
  // sameAs: TODO: 公式SNS・GBP URLが確定次第追加
  sameAs: [],
  knowsAbout: [
    "MEO対策",
    "SEO対策",
    "AIO対策",
    "ホームページ制作",
    "SNS運用",
    "AI活用支援",
    "Webマーケティング",
    "Googleビジネスプロフィール最適化",
    "中小企業Web集客",
    "東京都のSEO対策",
    "東京都のMEO対策",
    "地域SEO",
    "コンテンツマーケティング",
    "軽貨物運送",
    "住宅用太陽光発電",
    "家庭用蓄電池",
  ],
  // 軽貨物・太陽光はそれぞれ専用サイトで運営している事業部門
  department: BUSINESSES.filter((b) => b.external).map((b) => ({
    "@type": "Organization",
    name: b.key === "cargo" ? `${COMPANY.name} 軽貨物事業部` : "SOLAR SHIFT（株式会社サイプレス 太陽光事業）",
    url: b.href,
    description: b.description,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Webマーケティングサービス一覧",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEO対策", description: "Googleマップ上位表示・Googleビジネスプロフィール最適化", url: `${SITE_URL}/services/meo` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO対策", description: "コンテンツSEO・テクニカルSEO・ローカルSEO", url: `${SITE_URL}/services/seo` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AIO対策", description: "AI検索最適化・ChatGPT対策・LLM最適化", url: `${SITE_URL}/services/aio` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ホームページ制作", description: "SEO特化ホームページ制作・Next.js・WordPress", url: `${SITE_URL}/services/web-design` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SNS運用", description: "Instagram・LINE公式アカウント運用代行", url: `${SITE_URL}/services/sns` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI活用支援", description: "業務自動化・チャットボット構築・AI導入", url: `${SITE_URL}/services/ai` } },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: CONTACT_EMAIL,
    telephone: "+81-90-2360-0052",
    contactType: "customer support",
    availableLanguage: "Japanese",
    areaServed: "JP",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "株式会社サイプレス｜東京のWebマーケティング会社",
  url: SITE_URL,
  inLanguage: "ja",
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "株式会社サイプレス",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/column?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s",
    default: "株式会社サイプレス｜東京・葛飾区のWebマーケティング会社｜MEO・SEO・AIO・ホームページ制作",
  },
  description:
    "株式会社サイプレスは東京都葛飾区拠点のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、東京23区・全国の中小企業のWeb集客を支援します。",
  keywords: [
    "株式会社サイプレス",
    "サイプレス 東京",
    "東京 Webマーケティング会社",
    "葛飾区 SEO対策",
    "東京 MEO対策",
    "東京 AIO対策",
    "東京 ホームページ制作",
    "MEO対策", "SEO対策", "AIO対策",
    "東京23区 Web集客",
    "中小企業 Web集客 東京",
    "Webマーケティング 東京",
  ],
  openGraph: {
    title: "株式会社サイプレス｜東京・葛飾区のWebマーケティング会社",
    description:
      "株式会社サイプレスは東京都葛飾区拠点。MEO・SEO・AIO・ホームページ制作を通じて東京23区・全国の中小企業のWeb集客を支援するWebマーケティング会社です。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス｜東京のWebマーケティング会社" }],
    locale: "ja_JP",
    type: "website",
    siteName: "株式会社サイプレス",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // NOTE: canonical はページごとに必ず個別設定する。
  // layout で設定すると未設定の全ページが「トップページの複製」扱いになり、
  // Google のインデックスから除外される（2026-07 に59ページで発生し修正済み）。
  authors: [{ name: "株式会社サイプレス", url: SITE_URL }],
  creator: "株式会社サイプレス",
  publisher: "株式会社サイプレス",
  category: "Webマーケティング",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${geist.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        {/* AI相談チャット。APIキー未設定の環境で壊れたUIを出さないよう、明示的に有効化したときだけ表示する。 */}
        {process.env.CHATBOT_ENABLED === "true" && <ChatWidget />}
      </body>
    </html>
  );
}
