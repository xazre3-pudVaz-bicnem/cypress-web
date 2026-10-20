import type { Metadata } from "next";
import ServiceDetail from "@/components/templates/ServiceDetail";
import { sns } from "@/lib/data/servicePages/sns";

export const metadata: Metadata = {
  title: "SNS運用・SNSマーケティングサービス｜Instagram・X・LINE活用で集客｜株式会社サイプレス",
  description:
    "株式会社サイプレスのSNS運用サービス。Instagram・X（Twitter）・LINE・TikTokの運用代行・コンテンツ制作・広告支援で集客とブランディングを強化。東京都葛飾区を拠点に全国対応。",
  keywords: ["SNS運用", "SNSマーケティング", "Instagram運用", "SNS代行", "LINE公式アカウント", "TikTok運用"],
  openGraph: {
    title: "SNS運用・SNSマーケティングサービス｜Instagram・X・LINE活用で集客｜株式会社サイプレス",
    description: "サイプレスのSNS運用サービス。Instagram・X・LINE・TikTokの運用代行と広告支援。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/sns" },
};

export default function ServicesSnsPage() {
  return <ServiceDetail content={sns} />;
}
