import type { Metadata } from "next";
import ServiceDetail from "@/components/templates/ServiceDetail";
import { ai } from "@/lib/data/servicePages/ai";

export const metadata: Metadata = {
  title: "AI活用支援サービス｜ChatGPT・Claude APIを使った業務自動化・AI導入支援｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAI活用支援サービス。ChatGPT・Claude APIを活用した業務自動化・チャットボット構築・AIコンテンツ制作支援をご支援。東京都葛飾区を拠点に全国対応。",
  keywords: ["AI活用支援", "ChatGPT活用", "Claude API", "業務自動化", "チャットボット構築", "AI導入支援", "AI業務効率化"],
  openGraph: {
    title: "AI活用支援サービス｜ChatGPT・Claude APIを使った業務自動化・AI導入支援｜株式会社サイプレス",
    description: "サイプレスのAI活用支援サービス。ChatGPT・Claude API活用から業務自動化・AI導入まで一貫支援。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/ai" },
};

export default function ServicesAiPage() {
  return <ServiceDetail content={ai} />;
}
