import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getLatestNews } from "@/lib/data/news";

const CATEGORY_COLORS: Record<string, string> = {
  "お知らせ": "#3B82F6",
  "プレスリリース": "#8B5CF6",
  "メディア掲載": "#10B981",
  "実績": "#F59E0B",
};

export default function LatestNewsSection() {
  const news = getLatestNews(5);

  return (
    <section className="py-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>News</SectionLabel>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#0F172A" }}
              >
                お知らせ
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm transition-colors"
              style={{ color: "#2563EB" }}
            >
              すべて見る →
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {news.map((item, i) => {
            const color = CATEGORY_COLORS[item.category] ?? "#3B82F6";
            return (
              <ScrollReveal key={item.slug} delay={i * 0.06}>
                <Link
                  href={`/news/${item.slug}`}
                  className="group flex items-start gap-5 py-5 border-b hover:bg-[#F8FAFC] transition-colors -mx-3 px-3 rounded-xl"
                  style={{ borderColor: "#E2E8F0" }}
                >
                  <span className="text-[12px] shrink-0 pt-0.5 w-28" style={{ color: "#94A3B8" }}>
                    {item.publishedAt.replace(/-/g, ".")}
                  </span>
                  <span
                    className="text-[11px] px-2.5 py-1 rounded-full shrink-0"
                    style={{ background: `${color}15`, color }}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm leading-relaxed transition-colors" style={{ color: "#334155" }}>
                    {item.title}
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
