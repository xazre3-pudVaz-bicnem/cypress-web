import type { Metadata } from "next";
import ServiceDetail from "@/components/templates/ServiceDetail";
import { seo } from "@/lib/data/servicePages/seo";

export const metadata: Metadata = {
  title: "SEO対策サービス｜検索流入を増やしてCV・売上につなげるSEO支援｜株式会社サイプレス",
  description:
    "株式会社サイプレスのSEO対策サービス。キーワード調査・コンテンツSEO・テクニカルSEO・内部SEO・ローカルSEOを一貫してご支援。検索流入を増やし問い合わせ・売上につなげます。東京都葛飾区を拠点に全国対応。",
  keywords: ["SEO対策サービス", "SEO会社", "検索上位表示", "SEOコンサルティング", "コンテンツSEO", "東京 SEO", "SEO支援"],
  openGraph: {
    title: "SEO対策サービス｜検索流入を増やしてCV・売上につなげるSEO支援｜株式会社サイプレス",
    description: "サイプレスのSEO対策サービス。キーワード調査からコンテンツ制作・テクニカル対応まで一貫支援。検索流入を集客・売上に転換します。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/seo" },
};

export default function ServicesSeoPage() {
  return <ServiceDetail content={seo} />;
}
