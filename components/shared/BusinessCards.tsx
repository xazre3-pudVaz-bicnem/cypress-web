import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, ExternalIcon } from "@/components/ui/Button";
import { BUSINESSES, type Business } from "@/lib/company";

function CardLink({ business, className, children }: { business: Business; className: string; children: React.ReactNode }) {
  return business.external ? (
    <a href={business.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link href={business.href} className={className}>
      {children}
    </Link>
  );
}

/** 3つの事業のカード。トップページと事業内容ページで共有する。 */
export default function BusinessCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {BUSINESSES.map((b, i) => (
        <Reveal as="li" key={b.key} delay={i * 0.08}>
          <CardLink
            business={b}
            className="group flex h-full flex-col overflow-hidden rounded-3xl bg-navy-900 text-white transition-transform duration-500 ease-out-expo hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={b.image}
                alt={b.imageAlt}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/10 to-transparent" />
              <p className="eyebrow absolute left-6 top-6 rounded-full bg-navy-900/60 px-3 py-1.5 text-[10px] text-white backdrop-blur">
                {String(i + 1).padStart(2, "0")} — {b.nameEn}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-7 pt-2">
              <p className="text-[13px] font-semibold text-cyan">{b.name}</p>
              <Heading className="mt-2 text-[24px] font-bold leading-snug !text-white">{b.catch}</Heading>
              <p className="phrase mt-3 flex-1 text-[14px] leading-[1.85] text-white/70">{b.description}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="主な内容">
                {b.tags.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-[11.5px] text-white/75">
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 border-t border-white/10 pt-5 text-[13px] font-semibold text-white">
                {b.external ? (
                  <>
                    {b.siteLabel}
                    <ExternalIcon className="h-3.5 w-3.5 text-cyan" />
                  </>
                ) : (
                  <>
                    サービスを見る
                    <ArrowIcon className="h-3.5 w-3.5 text-cyan transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </div>
          </CardLink>
        </Reveal>
      ))}
    </ul>
  );
}
