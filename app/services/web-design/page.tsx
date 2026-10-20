import type { Metadata } from "next";
import ServiceDetail from "@/components/templates/ServiceDetail";
import { webDesign } from "@/lib/data/servicePages/web-design";

export const metadata: Metadata = {
  title: "Web制作サービス｜SEO・CV・ブランドを同時に実現するNext.js高品質Web制作｜株式会社サイプレス",
  description:
    "株式会社サイプレスのWeb制作サービス。Next.js・TypeScript・Tailwind CSS対応。コーポレートサイト・採用サイト・SEO特化サイトをSEO・パフォーマンス・コンバージョン設計込みで制作。東京都葛飾区を拠点に全国対応。",
  keywords: ["Web制作", "ホームページ制作", "Next.js制作", "コーポレートサイト", "SEOサイト", "Web制作東京", "高品質Web制作"],
  openGraph: {
    title: "Web制作サービス｜SEO・CV・ブランドを同時に実現するNext.js高品質Web制作｜株式会社サイプレス",
    description: "サイプレスのWeb制作サービス。Next.js対応のSEO・パフォーマンス・コンバージョン設計込みの高品質Web制作。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/web-design" },
};

export default function ServicesWebDesignPage() {
  return <ServiceDetail content={webDesign} />;
}
