import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { CASES } from "@/lib/data/cases";
import { getLatestColumns } from "@/lib/data/columns";

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent hover:text-accent-strong">
      {children}
      <ArrowIcon className="h-3.5 w-3.5" />
    </Link>
  );
}

export default function CasesAndColumns() {
  const cases = CASES.slice(0, 3);
  const columns = getLatestColumns(4);

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Cases */}
          <div aria-labelledby="home-cases">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3 text-accent">Cases</p>
                <h2 id="home-cases" className="text-[28px] font-bold md:text-[32px]">
                  支援事例
                </h2>
              </div>
              <MoreLink href="/cases">事例一覧</MoreLink>
            </div>
            <ul className="space-y-3">
              {cases.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={i * 0.05}>
                  <Link
                    href={`/cases/${c.slug}`}
                    className="group block rounded-2xl border border-line p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(11,120,194,0.5)]"
                  >
                    <p className="text-[12px] text-muted">
                      {c.industry}　／　{c.region}
                    </p>
                    <h3 className="mt-2 text-[17px] font-bold leading-snug group-hover:text-accent">{c.title}</h3>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="実施した施策">
                      {c.services.map((s) => (
                        <li key={s} className="rounded-full bg-surface px-2.5 py-1 text-[11.5px] font-medium text-ink-2">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Columns */}
          <div aria-labelledby="home-columns">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3 text-accent">Column</p>
                <h2 id="home-columns" className="text-[28px] font-bold md:text-[32px]">
                  最新コラム
                </h2>
              </div>
              <MoreLink href="/column">コラム一覧</MoreLink>
            </div>
            <ul className="border-t border-line">
              {columns.map((col) => (
                <li key={col.slug} className="border-b border-line">
                  <Link href={`/column/${col.slug}`} className="group flex items-start gap-4 py-5">
                    <span className="flex w-[112px] shrink-0 flex-col items-start gap-2 pt-0.5">
                      <time dateTime={col.publishedAt} className="t-num text-[12px] text-muted">
                        {col.publishedAt.replace(/-/g, ".")}
                      </time>
                      <span className="w-fit rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                        {col.category}
                      </span>
                    </span>
                    <span className="flex-1 text-[15px] font-medium leading-relaxed text-ink group-hover:text-accent">
                      {col.title}
                    </span>
                    <ArrowIcon className="mt-1.5 h-3.5 w-3.5 shrink-0 text-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
