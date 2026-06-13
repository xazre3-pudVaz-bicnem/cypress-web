import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://cypress-marketing.co.jp";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "株式会社サイプレス",
  alternateName: "Cypress Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  image: `${SITE_URL}/hero.png`,
  description:
    "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。東京都葛飾区。",
  telephone: "",
  email: "consulting.meo@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "白鳥4-6-1-623",
    addressLocality: "葛飾区",
    addressRegion: "東京都",
    postalCode: "125-0001",
    addressCountry: "JP",
  },
  areaServed: {
    "@type": "Country",
    name: "JP",
  },
  founder: {
    "@type": "Person",
    name: "織田 春樹",
    jobTitle: "代表取締役",
  },
  foundingDate: "2022-04",
  sameAs: [],
  knowsAbout: [
    "MEO対策",
    "SEO対策",
    "AIO対策",
    "ホームページ制作",
    "SNS運用",
    "AI活用支援",
    "Webマーケティング",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "株式会社サイプレス",
  url: SITE_URL,
  inLanguage: "ja",
  publisher: {
    "@type": "Organization",
    name: "株式会社サイプレス",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | 株式会社サイプレス",
    default: "株式会社サイプレス | MEO・SEO・AIO・ホームページ制作",
  },
  description:
    "MEO・SEO・AIO・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。東京都葛飾区。",
  keywords: [
    "MEO対策", "SEO対策", "AIO対策", "ホームページ制作",
    "Webマーケティング", "AI活用", "中小企業", "集客支援", "東京",
  ],
  openGraph: {
    title: "株式会社サイプレス | MEO・SEO・AIO・ホームページ制作",
    description:
      "MEO・SEO・AIO・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。",
    locale: "ja_JP",
    type: "website",
    siteName: "株式会社サイプレス",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorant.variable} h-full`}
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
