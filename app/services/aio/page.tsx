import type { Metadata } from "next";
import ServiceDetail from "@/components/templates/ServiceDetail";
import { aio } from "@/lib/data/servicePages/aio";

export const metadata: Metadata = {
  title: "AIO対策サービス｜AI検索（ChatGPT・Gemini・Perplexity）からの引用獲得｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAIO対策サービス。ChatGPT・Gemini・Perplexityなどのレビューに引用されるE-E-A-T強化・構造化データ実装・コンテンツ最適化を一貫してご支援。",
  keywords: ["AIO対策", "AI検索最適化", "ChatGPT SEO", "Gemini対策", "Perplexity対策", "E-E-A-T強化"],
  openGraph: {
    title: "AIO対策サービス｜AI検索（ChatGPT・Gemini・Perplexity）からの引用獲得｜株式会社サイプレス",
    description: "サイプレスのAIO対策サービス。AI検索に引用されるコンテンツ最適化・構造化データ実装まで一貫支援。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/aio" },
};

export default function ServicesAioPage() {
  return <ServiceDetail content={aio} />;
}
