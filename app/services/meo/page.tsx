import type { Metadata } from "next";
import ServiceDetail from "@/components/templates/ServiceDetail";
import { meo } from "@/lib/data/servicePages/meo";

export const metadata: Metadata = {
  title: "MEO対策サービス｜Googleマップ上位表示で地域集客を最大化｜株式会社サイプレス",
  description:
    "株式会社サイプレスのMEO対策サービス。Googleビジネスプロフィールの最適化・口コミ管理・写真戦略・投稿活用でGoogleマップ上位表示と地域集客を強化。東京都葛飾区を拠点に全国対応。",
  keywords: ["MEO対策サービス", "Googleマップ上位表示", "Googleビジネスプロフィール", "地域集客", "MEO会社", "東京 MEO", "GBP最適化"],
  openGraph: {
    title: "MEO対策サービス｜Googleマップ上位表示で地域集客を最大化｜株式会社サイプレス",
    description: "サイプレスのMEO対策サービス。Googleビジネスプロフィール最適化から口コミ管理・月次レポートまで一貫支援。地域の集客基盤を整えます。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/meo" },
};

export default function ServicesMeoPage() {
  return <ServiceDetail content={meo} />;
}
