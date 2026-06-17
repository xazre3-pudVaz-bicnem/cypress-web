import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "サービス一覧｜MEO・SEO・AIO・Web制作・SNS・AI｜株式会社サイプレス",
  description:
    "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI導入支援の6サービスを一気通貫で提供。中小企業のWeb集客を根本から改善します。",
  keywords: ["サービス一覧", "MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "SNS運用", "AI活用支援", "株式会社サイプレス"],
  alternates: { canonical: "https://www.cypress-all.co.jp/services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "サービス一覧", item: "https://www.cypress-all.co.jp/services" },
      ],
    },
    {
      "@type": "ItemList",
      name: "株式会社サイプレス サービス一覧",
      description: "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI導入支援",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MEO対策", url: "https://www.cypress-all.co.jp/services/meo", description: "Googleマップ上位表示・Googleビジネスプロフィール最適化" },
        { "@type": "ListItem", position: 2, name: "SEO対策", url: "https://www.cypress-all.co.jp/services/seo", description: "検索上位表示・コンテンツSEO・テクニカルSEO" },
        { "@type": "ListItem", position: 3, name: "AIO対策", url: "https://www.cypress-all.co.jp/services/aio", description: "生成AI検索引用最適化・AI Overview対策" },
        { "@type": "ListItem", position: 4, name: "ホームページ制作", url: "https://www.cypress-all.co.jp/services/web-design", description: "SEO対応Webサイト制作・Next.js・WordPress" },
        { "@type": "ListItem", position: 5, name: "SNS運用", url: "https://www.cypress-all.co.jp/services/sns", description: "Instagram・X運用代行・ブランド認知拡大" },
        { "@type": "ListItem", position: 6, name: "AI活用支援", url: "https://www.cypress-all.co.jp/services/ai", description: "業務自動化・AI導入コンサルティング" },
      ],
    },
  ],
};

const SERVICE_GUIDANCE = [
  {
    num: "1",
    label: "まず集客基盤を作りたい",
    text: "MEO対策（地域ビジネス）またはSEO対策（全業種）から始めるのが最もROIが高い方法です。",
  },
  {
    num: "2",
    label: "ホームページが古い・成果が出ない",
    text: "ホームページ制作のリニューアルで、デザイン・速度・SEO・CV率をまとめて改善します。",
  },
  {
    num: "3",
    label: "AI検索（ChatGPT等）にも表示されたい",
    text: "AIO対策で、AI検索エンジンからの引用・回答表示を最適化します。SEOとの同時対応が効果的です。",
  },
  {
    num: "4",
    label: "SNSでブランド認知を広げたい",
    text: "SNS運用代行で、投稿企画から分析まで一貫して対応します。採用強化にも有効です。",
  },
  {
    num: "5",
    label: "業務効率化・DXを進めたい",
    text: "AI活用支援で、現場に合わせたAIツール導入・業務自動化をサポートします。",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main style={{ background: "#FFFFFF", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="pt-32 pb-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>サービス一覧</span>
            </nav>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
            >
              サービス一覧
            </h1>
            <p className="text-[#374151] text-base leading-relaxed max-w-2xl">
              MEO・SEO・AIO・ホームページ制作・SNS運用・AI導入支援の6サービスを一気通貫で提供。
              集客から収益改善まで、トータルで支援します。
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="pb-24 max-w-6xl mx-auto px-6">
          <div>
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.05}>
                <div
                  className="py-10"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
                    {/* Left */}
                    <div>
                      <p
                        className="text-[10px] font-mono tracking-widest uppercase mb-3"
                        style={{ color: "#9CA3AF" }}
                      >
                        {s.tagline}
                      </p>
                      <h2
                        className="font-black text-[#0F172A] leading-tight mb-4"
                        style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
                      >
                        {s.name}
                      </h2>
                      <p className="text-[#374151] text-sm leading-relaxed mb-6">
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-medium transition-colors"
                          style={{ color: "#0F172A" }}
                        >
                          サービス詳細を見る
                          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Right: Key Points */}
                    <div>
                      <ul className="space-y-2.5">
                        {s.features?.slice(0, 5).map((f) => (
                          <li
                            key={f.title}
                            className="flex items-start gap-3 text-sm text-[#374151]"
                          >
                            <span
                              className="mt-2 shrink-0 block w-1 h-1 rounded-full"
                              style={{ background: "#0F172A" }}
                            />
                            {f.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
          </div>
        </section>

        {/* Service Guidance */}
        <section
          className="py-20"
          style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-bold text-[#0F172A] text-xl mb-3">
                どのサービスから始めればよいか
              </h2>
              <p className="text-[#374151] text-sm leading-relaxed mb-10 max-w-2xl">
                目的によって最適な入口は異なります。以下を参考に、まずはお問い合わせください。
              </p>
              <div className="space-y-0">
                {SERVICE_GUIDANCE.map((item, i) => (
                  <div
                    key={item.num}
                    className="py-6"
                    style={{
                      borderBottom: i < SERVICE_GUIDANCE.length - 1 ? "1px solid #E8E4DC" : "none",
                    }}
                  >
                    <div className="flex gap-5">
                      <span
                        className="font-mono text-xs shrink-0 mt-0.5"
                        style={{ color: "#9CA3AF" }}
                      >
                        0{item.num}
                      </span>
                      <div>
                        <p className="font-medium text-[#0F172A] text-sm mb-2">{item.label}</p>
                        <p className="text-[#374151] text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div
                className="mt-10 pt-10"
                style={{ borderTop: "1px solid #E8E4DC" }}
              >
                <p className="text-[#374151] text-sm leading-relaxed mb-6">
                  「自社に合うサービスがわからない」という方こそ、まずはご相談ください。現状の課題をお聞きし、最適なサービスの組み合わせをご提案します。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all"
                  style={{
                    border: "1px solid #0F172A",
                    color: "#0F172A",
                    background: "transparent",
                  }}
                >
                  お問い合わせ・ご相談
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
