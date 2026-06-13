import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubCategoryTemplate from "@/components/templates/SubCategoryTemplate";
import { getAioPage } from "@/lib/data/aio";

const raw = getAioPage("llm-optimization")!;

export const metadata: Metadata = {
  title: raw.seoMeta.title,
  description: raw.seoMeta.description,
  keywords: raw.seoMeta.keywords,
};

export default function LlmOptimizationPage() {
  return (
    <>
      <Header />
      <SubCategoryTemplate
        data={{
          breadcrumb: [
            { label: "ホーム", href: "/" },
            { label: "AIO対策", href: "/aio" },
            { label: "LLM最適化", href: "/aio/llm-optimization" },
          ],
          accentColor: "#8B5CF6",
          categoryLabel: "LLM Optimization",
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
      <Footer />
    </>
  );
}
