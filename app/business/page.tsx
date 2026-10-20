import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ServiceCards } from "@/components/home/ServicesShowcase";
import BusinessCards from "@/components/shared/BusinessCards";
import PageContactCTA from "@/components/shared/PageContactCTA";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { PARTNER_LINKS } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "事業内容｜Webマーケティング・軽貨物・太陽光｜株式会社サイプレス",
  description:
    "株式会社サイプレスの事業内容。MEO・SEO・AIO対策やホームページ制作のWebマーケティング事業を中心に、葛飾区拠点の軽貨物事業、住宅用太陽光発電・蓄電池の導入サポート（SOLAR SHIFT）を運営しています。",
  keywords: ["事業内容", "株式会社サイプレス", "Webマーケティング", "MEO対策", "SEO対策", "ホームページ制作", "軽貨物 葛飾区", "太陽光発電 葛飾区"],
  openGraph: {
    title: "事業内容｜Webマーケティング・軽貨物・太陽光｜株式会社サイプレス",
    description: "Webマーケティング事業を中心に、軽貨物事業と太陽光事業（SOLAR SHIFT）を運営する株式会社サイプレスの事業内容。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレスの事業" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/business" },
};

const CRUMBS: Crumb[] = [{ name: "ホーム", href: "/" }, { name: "事業内容" }];

/** 3事業に共通する考え方。各事業サイトの記載（条件を曖昧にしない・一次情報で確認する等）に沿っている。 */
const PROMISES = [
  { title: "地元・葛飾区から", body: "亀有を拠点に、顔の見える距離で仕事をします。" },
  { title: "決まっていないことは、約束しない", body: "条件や効果を曖昧なまま伝えず、数字と一次情報で説明します。" },
  { title: "届けて終わりにしない", body: "公開後・導入後の相談まで、続けて伴走します。" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbJsonLd(CRUMBS, "/business")],
};

export default function BusinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={CRUMBS}
          eyebrow="Business"
          title="事業内容"
          catchCopy="Webから、物流、エネルギーまで。"
          lead="株式会社サイプレスは、Webマーケティングを本業に、軽貨物配送と住宅用太陽光発電の導入サポートを運営しています。"
        />

        <Section tone="white" className="!pt-4 md:!pt-8" labelledBy="biz-list">
          <h2 id="biz-list" className="sr-only">
            3つの事業
          </h2>
          <BusinessCards headingLevel="h3" />
        </Section>

        <Section tone="surface" labelledBy="biz-web">
          <SectionHeading
            id="biz-web"
            eyebrow="01 — Web Marketing"
            title="Webマーケティング事業"
            lead="中小企業・地域店舗の集客を、6つのサービスで支えます。必要なものだけを組み合わせてご提案します。"
            action={
              <ButtonLink href="/services" variant="secondary">
                サービス一覧
              </ButtonLink>
            }
          />
          <ServiceCards />
        </Section>

        <section aria-labelledby="biz-promise" className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
          <div aria-hidden="true" className="absolute -right-40 top-0 h-[460px] w-[760px] rounded-full bg-accent/20 blur-[140px]" />
          <Container className="relative">
            <SectionHeading id="biz-promise" eyebrow="Our Promise" title="3つの事業に共通する約束" dark />
            <ol className="grid gap-4 md:grid-cols-3">
              {PROMISES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.06} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                  <span className="t-num text-gradient-brand text-[40px] font-semibold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-[19px] font-bold leading-snug !text-white">{p.title}</h3>
                  <p className="phrase mt-2 text-[14.5px] leading-[1.85] text-white/65">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        <Section tone="white" labelledBy="biz-partner">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div>
              <p className="eyebrow mb-4 text-accent">Partner</p>
              <h2 id="biz-partner" className="t-h2">
                パートナー・研修のご相談
              </h2>
              <p className="t-lead mt-5 text-muted">
                Web集客サービスの販売代理店・紹介パートナーの募集や、法人向け研修の導入相談も承っています。
              </p>
            </div>
            <ul className="grid gap-3">
              {PARTNER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between rounded-2xl border border-line px-6 py-5 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(11,120,194,0.5)]"
                  >
                    <span className="text-[16px] font-bold text-ink group-hover:text-accent">{l.label}</span>
                    <ArrowIcon className="h-4 w-4 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <PageContactCTA
          heading="事業についてのお問い合わせ"
          body="Webマーケティングのご相談は無料です。軽貨物・太陽光のご相談は、各事業のサイトかお電話でも承ります。"
        />
      </main>
      <Footer />
    </>
  );
}
