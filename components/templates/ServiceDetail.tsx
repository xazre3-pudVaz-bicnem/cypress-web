import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import PageHero, { CheckIcon, HeroPoints } from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Steps from "@/components/ui/Steps";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import type { ServicePageContent } from "@/lib/data/servicePages/types";
import { SERVICE_SUMMARIES } from "@/lib/navigation";

const SITE_URL = "https://www.cypress-all.co.jp";

/** サービス詳細ページの共通テンプレート。内容は lib/data/servicePages/*.ts に置く。 */
export default function ServiceDetail({ content: c }: { content: ServicePageContent }) {
  const index = SERVICE_SUMMARIES.findIndex((s) => s.slug === c.slug);
  const summary = SERVICE_SUMMARIES[index];
  const path = `/services/${c.slug}`;
  const crumbs: Crumb[] = [
    { name: "ホーム", href: "/" },
    { name: "サービス", href: "/services" },
    { name: c.name },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: c.schema.name,
        description: c.schema.description,
        serviceType: c.schema.serviceType,
        url: `${SITE_URL}${path}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Japan" },
      },
      breadcrumbJsonLd(crumbs, path),
      {
        "@type": "FAQPage",
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={crumbs}
          eyebrow={`Service ${String(index + 1).padStart(2, "0")} — ${summary.nameEn}`}
          title={c.h1}
          catchCopy={c.catch}
          lead={c.lead}
          image={summary.image}
        >
          <HeroPoints points={c.points} />
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" size="lg">
              無料で相談する
            </ButtonLink>
            <ButtonLink href={c.costHref} variant="secondary" size="lg">
              料金の目安
            </ButtonLink>
          </div>
        </PageHero>

        {/* お悩み */}
        <Section tone="surface" labelledBy="svc-problems">
          <SectionHeading id="svc-problems" eyebrow="Problems" title="こんなお悩みはありませんか？" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.problems.map((p, i) => (
              <Reveal as="li" key={p} delay={(i % 3) * 0.05} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-5">
                <CheckIcon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-[15.5px] font-bold leading-snug text-ink">{p}</span>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-muted">
            ひとつでも当てはまれば、{c.name}で改善できる可能性があります。
          </p>
        </Section>

        {/* できること */}
        <Section tone="white" labelledBy="svc-offerings">
          <SectionHeading id="svc-offerings" eyebrow="What we do" title={`${c.name}で、サイプレスがすること`} />
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {c.offerings.map((o, i) => (
              <Reveal as="li" key={o.title} delay={(i % 3) * 0.05} className="bg-white p-7 md:p-8">
                <span className="t-num text-[13px] font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[18px] font-bold leading-snug">{o.title}</h3>
                <p className="phrase mt-2 text-[14.5px] leading-[1.85] text-muted">{o.body}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* 考え方 */}
        <section aria-labelledby="svc-concept" className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
          <div aria-hidden="true" className="absolute -left-40 top-0 h-[460px] w-[760px] rounded-full bg-accent/20 blur-[140px]" />
          <Container className="relative">
            <SectionHeading id="svc-concept" eyebrow={c.concept.eyebrow} title={c.concept.title} lead={c.concept.lead} dark />
            <ol className={`grid gap-4 ${c.concept.items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
              {c.concept.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 0.06} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <span className="t-num text-gradient-brand text-[40px] font-semibold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[18px] font-bold leading-snug !text-white">{item.title}</h3>
                  <p className="phrase mt-2 text-[14px] leading-[1.85] text-white/65">{item.body}</p>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* 業種別 */}
        <Section tone="white" labelledBy="svc-industries">
          <SectionHeading
            id="svc-industries"
            eyebrow="By Industry"
            title="業種ごとに、押さえどころは違います。"
            lead="気になる業種を開くと、優先して取り組むポイントが分かります。"
          />
          <div className="grid gap-3 md:grid-cols-2">
            {c.industries.map((ind) => (
              <details key={ind.name} className="group rounded-2xl border border-line bg-white open:border-accent/30 open:shadow-[0_16px_40px_-28px_rgba(11,120,194,0.6)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-[16px] font-bold text-ink">{ind.name}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 12 12" className="h-3 w-3">
                      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-[14.5px] leading-[1.9] text-ink-2">{ind.body}</p>
              </details>
            ))}
          </div>
          {c.targets.length > 0 && (
            <div className="mt-10">
              <p className="mb-3 text-[13px] font-bold text-muted">対応業種の例</p>
              <ul className="flex flex-wrap gap-2">
                {c.targets.map((t) => (
                  <li key={t} className="rounded-full bg-surface px-3.5 py-1.5 text-[13px] text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>

        {/* 流れ */}
        <Section tone="surface" labelledBy="svc-process">
          <SectionHeading
            id="svc-process"
            eyebrow="Process"
            title="ご相談から運用まで"
            action={
              <ButtonLink href="/process" variant="secondary">
                詳しい流れ
              </ButtonLink>
            }
          />
          <Steps steps={c.process} />
        </Section>

        {/* 指標 */}
        <Section tone="white" labelledBy="svc-kpi">
          <SectionHeading id="svc-kpi" eyebrow="KPI" title="成果は、数字で確かめる。" lead={c.kpiLead} />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.kpis.map((k) => (
              <li key={k.name} className="rounded-2xl bg-surface px-6 py-5">
                <p className="text-[15.5px] font-bold text-ink">{k.name}</p>
                <p className="phrase mt-1 text-[13.5px] leading-relaxed text-muted">{k.body}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 料金 */}
        <section className="bg-white pb-20 md:pb-28">
          <Container>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-gradient-to-br from-surface to-surface-2 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-xl">
                <p className="eyebrow mb-3 text-accent">Price</p>
                <h2 className="text-[24px] font-bold md:text-[28px]">料金について</h2>
                <p className="phrase mt-3 text-[15px] leading-[1.9] text-muted">
                  ご状況や施策の範囲によって変わります。目安は料金ページで、正確なお見積りは無料相談でお出しします。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href={c.costHref} variant="dark">
                  料金の目安を見る
                </ButtonLink>
                <ButtonLink href="/pricing/web-growth-package" variant="secondary">
                  Web集客パッケージ
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>

        <FaqSection items={c.faq} heading={c.faqHeading} bgColor="#F4F6FA" initialCount={6} />
        <RelatedPages links={c.related} />
        <PageContactCTA heading={c.cta.heading} body={c.cta.body} />
      </main>
      <Footer />
    </>
  );
}
