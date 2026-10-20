import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BusinessCards from "@/components/shared/BusinessCards";
import PageContactCTA from "@/components/shared/PageContactCTA";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { COMPANY, COMPANY_ADDRESS_WITH_POSTAL } from "@/lib/company";

export const metadata: Metadata = {
  title: "会社情報 | 株式会社サイプレス",
  description:
    "株式会社サイプレスの会社情報。代表挨拶・企業理念・会社概要・沿革。東京都葛飾区亀有のWebマーケティング会社。MEO対策・SEO対策・AIO対策・ホームページ制作。軽貨物事業・太陽光事業も運営。",
  keywords: ["会社情報", "株式会社サイプレス", "代表挨拶", "企業理念", "会社概要", "Webマーケティング"],
  openGraph: {
    title: "会社情報 | 株式会社サイプレス",
    description: "株式会社サイプレスの会社情報。代表挨拶・企業理念・会社概要・沿革。MEO・SEO・AIO対策のWebマーケティング会社。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company" },
};

const CRUMBS: Crumb[] = [{ name: "ホーム", href: "/" }, { name: "会社情報" }];

const SUB_PAGES = [
  { href: "/company/profile", label: "会社概要", desc: "会社名・所在地・事業内容などの基本情報" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表取締役 織田 春樹から" },
  { href: "/company/philosophy", label: "企業理念", desc: "ミッション・ビジョン・バリュー" },
  { href: "/company/about-cypress", label: "株式会社サイプレスとは", desc: "どんな会社で、何ができるのか" },
  { href: "/company/value", label: "大切にしていること", desc: "仕事の進め方と価値観" },
  { href: "/company/support-policy", label: "サポートポリシー", desc: "ご支援の方針とお約束" },
  { href: "/company/history", label: "会社の歩み", desc: "設立からこれからの展望まで" },
  { href: "/company/area", label: "対応エリア", desc: "訪問とオンラインの対応範囲" },
];

const FACTS = [
  { label: "会社名", value: COMPANY.name },
  { label: "代表取締役", value: COMPANY.representative },
  { label: "設立", value: COMPANY.founded },
  { label: "所在地", value: COMPANY_ADDRESS_WITH_POSTAL },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbJsonLd(CRUMBS, "/company")],
};

export default function CompanyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={CRUMBS}
          eyebrow="Company"
          title="会社情報"
          catchCopy="正しい会社が、正しく選ばれる世界へ。"
          lead="株式会社サイプレスは2026年5月13日、東京都葛飾区で設立しました。Webマーケティングを本業に、軽貨物事業と太陽光事業を運営しています。"
          image="/images/brand/hero-diamond.jpg"
        >
          <ButtonLink href="/company/profile" variant="secondary">
            会社概要を見る
          </ButtonLink>
        </PageHero>

        <Section tone="white" className="!pt-0" labelledBy="company-pages">
          <h2 id="company-pages" className="sr-only">
            会社情報のページ
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SUB_PAGES.map((p, i) => (
              <Reveal as="li" key={p.href} delay={(i % 4) * 0.04}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(11,120,194,0.5)]"
                >
                  <span>
                    <span className="block text-[17px] font-bold text-ink group-hover:text-accent">{p.label}</span>
                    <span className="mt-1.5 block text-[13.5px] leading-relaxed text-muted">{p.desc}</span>
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <ArrowIcon className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Section>

        <Section tone="surface" labelledBy="company-business">
          <SectionHeading
            id="company-business"
            eyebrow="Business"
            title="3つの事業"
            action={
              <ButtonLink href="/business" variant="secondary">
                事業内容
              </ButtonLink>
            }
          />
          <BusinessCards />
        </Section>

        <Section tone="white" labelledBy="company-facts">
          <SectionHeading
            id="company-facts"
            eyebrow="Profile"
            title="会社データ"
            action={
              <ButtonLink href="/company/profile" variant="secondary">
                会社概要
              </ButtonLink>
            }
          />
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.label} className="bg-white px-6 py-6">
                <dt className="text-[12.5px] font-bold text-muted">{f.label}</dt>
                <dd className="mt-1.5 text-[16px] font-bold leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
