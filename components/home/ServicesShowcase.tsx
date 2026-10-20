import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SERVICE_SUMMARIES } from "@/lib/navigation";

/** 6サービスのカード。トップページとサービス一覧で共有する。 */
export function ServiceCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICE_SUMMARIES.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 0.06}>
          <Link
            href={s.href}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_30px_60px_-30px_rgba(6,20,42,0.45)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <p className="eyebrow text-[11px] text-accent">
                {String(i + 1).padStart(2, "0")} — {s.nameEn}
              </p>
              <Heading className="mt-2 text-[22px] font-bold leading-snug">{s.name}</Heading>
              <p className="phrase mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                詳しく見る
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export default function ServicesShowcase() {
  return (
    <Section tone="white" labelledBy="home-services">
      <SectionHeading
        id="home-services"
        eyebrow="Services"
        title={
          <>
            集客に必要なことを、
            <br className="hidden sm:block" />
            ひとつのチームで。
          </>
        }
        lead="Googleマップ、検索、AI検索、ホームページ、SNS、AI活用。必要なものだけを組み合わせてご提案します。"
        action={
          <ButtonLink href="/services" variant="secondary">
            サービス一覧
          </ButtonLink>
        }
      />
      <ServiceCards />
    </Section>
  );
}
