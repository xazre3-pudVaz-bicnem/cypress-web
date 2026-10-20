import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ServiceCards } from "@/components/home/ServicesShowcase";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { SERVICE_SUMMARIES } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "サービス一覧｜MEO・SEO・AIO・Web制作・SNS・AI｜株式会社サイプレス",
  description:
    "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI導入支援の6サービスを一気通貫で提供。中小企業のWeb集客を根本から改善します。",
  keywords: ["サービス一覧", "MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "SNS運用", "AI活用支援", "株式会社サイプレス"],
  openGraph: {
    title: "サービス一覧｜MEO・SEO・AIO・Web制作・SNS・AI｜株式会社サイプレス",
    description: "MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援の6サービスで、中小企業の集客を設計から運用まで支援します。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレスのサービス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services" },
};

const CRUMBS: Crumb[] = [{ name: "ホーム", href: "/" }, { name: "サービス一覧" }];

const ITEM_DESCRIPTIONS: Record<string, string> = {
  meo: "Googleマップ上位表示・Googleビジネスプロフィール最適化",
  seo: "検索上位表示・コンテンツSEO・テクニカルSEO",
  aio: "生成AI検索引用最適化・AI Overview対策",
  "web-design": "SEO対応Webサイト制作・Next.js・WordPress",
  sns: "Instagram・X運用代行・ブランド認知拡大",
  ai: "業務自動化・AI導入コンサルティング",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd(CRUMBS, "/services"),
    {
      "@type": "ItemList",
      name: "株式会社サイプレス サービス一覧",
      description: "MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI導入支援",
      numberOfItems: SERVICE_SUMMARIES.length,
      itemListElement: SERVICE_SUMMARIES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `https://www.cypress-all.co.jp${s.href}`,
        description: ITEM_DESCRIPTIONS[s.slug],
      })),
    },
  ],
};

/** 「どれから始めればいいか」の早見表 */
const GUIDE: { need: string; hint: string; services: string[] }[] = [
  { need: "まず集客の土台をつくりたい", hint: "地域ビジネスならMEO、全業種ならSEOから。", services: ["meo", "seo"] },
  { need: "ホームページが古い・成果が出ない", hint: "デザイン・速度・SEO・導線をまとめて見直します。", services: ["web-design"] },
  { need: "ChatGPTなどのAI検索にも出たい", hint: "SEOと同時に進めると効果的です。", services: ["aio"] },
  { need: "SNSで認知を広げたい", hint: "投稿企画から分析まで一貫して対応します。", services: ["sns"] },
  { need: "業務を効率化したい", hint: "現場に合わせてAIツールの導入と自動化を進めます。", services: ["ai"] },
];

const BY_SLUG = Object.fromEntries(SERVICE_SUMMARIES.map((s) => [s.slug, s]));

export default function ServicesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={CRUMBS}
          eyebrow="Services"
          title="サービス一覧"
          catchCopy="集客に必要なことを、ひとつのチームで。"
          lead="MEO・SEO・AIOからホームページ制作、SNS、AI活用まで。6つのサービスを組み合わせて、中小企業の集客を設計から運用まで支援します。"
        />

        <Section tone="white" className="!pt-4 md:!pt-8" labelledBy="services-list">
          <h2 id="services-list" className="sr-only">
            6つのサービス
          </h2>
          <ServiceCards headingLevel="h3" />
        </Section>

        <Section tone="surface" labelledBy="services-guide">
          <SectionHeading
            id="services-guide"
            eyebrow="Guide"
            title="どれから始めればいい？"
            lead="目的別のおすすめです。迷ったら、無料相談でいっしょに整理しましょう。"
          />
          <ul className="overflow-hidden rounded-3xl border border-line bg-white">
            {GUIDE.map((g, i) => (
              <Reveal
                as="li"
                key={g.need}
                delay={i * 0.04}
                className={`grid gap-4 px-6 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] md:items-center md:gap-8 md:px-10 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <p className="text-[17px] font-bold text-ink">{g.need}</p>
                <p className="phrase text-[14.5px] leading-relaxed text-muted">{g.hint}</p>
                <div className="flex flex-wrap gap-2">
                  {g.services.map((slug) => (
                    <Link
                      key={slug}
                      href={BY_SLUG[slug].href}
                      className="group inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-2 text-[13px] font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      {BY_SLUG[slug].name}
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-gradient-to-br from-surface to-surface-2 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-xl">
                <p className="eyebrow mb-3 text-accent">Price</p>
                <h2 className="text-[24px] font-bold md:text-[28px]">料金について</h2>
                <p className="phrase mt-3 text-[15px] leading-[1.9] text-muted">
                  サービスの組み合わせや規模によって変わります。目安は料金ページで、正確なお見積りは無料相談でお出しします。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/cost" variant="dark">
                  料金の目安を見る
                </ButtonLink>
                <ButtonLink href="/pricing/web-growth-package" variant="secondary">
                  Web集客パッケージ
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        <RelatedPages
          heading="関連ページ"
          links={[
            { href: "/seo", label: "SEO対策", desc: "検索流入を増やす施策" },
            { href: "/meo", label: "MEO対策", desc: "Googleマップ集客" },
            { href: "/aio", label: "AIO対策", desc: "AI検索での引用獲得" },
            { href: "/ai", label: "AI活用支援", desc: "業務自動化・AI導入支援" },
            { href: "/web-design", label: "ホームページ制作", desc: "集客できるサイト設計" },
            { href: "/training", label: "法人研修の導入相談", desc: "AI・DX・Web研修の紹介窓口" },
            { href: "/training/reskilling-subsidy", label: "リスキリング研修相談", desc: "助成金活用を検討する企業向け" },
            { href: "/cost", label: "料金・費用ガイド", desc: "各サービスの費用相場" },
          ]}
        />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
