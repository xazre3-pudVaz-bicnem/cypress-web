import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubCategoryTemplate from "@/components/templates/SubCategoryTemplate";
import { getAioPage } from "@/lib/data/aio";

const raw = getAioPage("ai-search")!;

export const metadata: Metadata = {
  title: raw.seoMeta.title,
  description: raw.seoMeta.description,
  keywords: raw.seoMeta.keywords,
};

export default function AiSearchPage() {
  return (
    <>
      <Header />
      <SubCategoryTemplate
        data={{
          breadcrumb: [
            { label: "ホーム", href: "/" },
            { label: "AIO対策", href: "/aio" },
            { label: "AI検索最適化", href: "/aio/ai-search" },
          ],
          accentColor: "#8B5CF6",
          categoryLabel: "AI Search Optimization",
          title: raw.title,
          subtitle: raw.subtitle,
          overview: raw.overview,
          keyPoints: raw.keyPoints,
          sections: raw.sections,
          benefits: raw.benefits,
          faq: raw.faq,
          relatedPages: raw.relatedPages,
        }}
      />

      {/* Full-width image */}
      <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
        <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="AI検索最適化・次世代検索エンジン対策" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.45)" }} />
      </section>

      <Footer />
    </>
  );
}
