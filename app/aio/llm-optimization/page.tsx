import type { Metadata } from "next";
import Image from "next/image";
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

      {/* Full-width image */}
      <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
        <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="LLM最適化・大規模言語モデルへのAI情報最適化" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.35)" }} />
      </section>

      {/* 2-col: LLM最適化の取り組み */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
              <Image src="/1.png" alt="LLM最適化・チャートを確認するグループ" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                LLM Strategy
              </p>
              <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                LLM最適化で得られる効果
              </h2>
              <div className="space-y-4">
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  GPT・Gemini・Claudeなどの大規模言語モデルは、権威性の高い情報源を優先して学習・参照します。サイプレスのLLM最適化により、主要AIによる企業情報の正確認識率91%を達成しています。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  業界メディアへの掲載・プレスリリースの定期発信・Googleナレッジグラフへの登録・構造化データの整備を組み合わせることで、AIの学習データに自社情報を効果的に浸透させます。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  LLM最適化はSEOとの相乗効果が高く、権威性を高める施策は従来のGoogle検索順位にも好影響を与えます。長期的なデジタルブランディング戦略の核として位置付けます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
