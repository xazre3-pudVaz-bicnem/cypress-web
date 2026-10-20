import Image from "next/image";
import { ButtonLink, PhoneIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { CONTACT_EMAIL, CONTACT_HOURS, CONTACT_MAILTO, CONTACT_TEL, CONTACT_TEL_HREF } from "@/lib/contact";

interface Props {
  heading?: string;
  body?: string;
  /** 遷移先。/contact?type=xxx を渡すと問い合わせ種別が自動選択される。 */
  href?: string;
  /** ボタン文言。ページごとにCTAを変える。 */
  ctaLabel?: string;
  /** ボタン下に添える補足（免責・注意書きなど）。 */
  note?: string;
}

/** ページ末尾の問い合わせ導線。フォーム・電話・メールの3つを並べ、選びやすくする。 */
export default function PageContactCTA({
  heading = "Web集客のご相談は、無料です。",
  body = "MEO・SEO・AIO・ホームページ制作など、今の状況を伺ったうえで必要な施策だけをご提案します。",
  href = "/contact",
  ctaLabel = "無料で相談する",
  note,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
      <Image
        src="/images/brand/hero-diamond.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-35"
        aria-hidden="true"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/30" />
      <Container className="relative">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-cyan">Contact</p>
          <h2 className="t-h2 !text-white">{heading}</h2>
          <p className="t-lead mt-5 text-white/75">{body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={href} size="lg">
              {ctaLabel}
            </ButtonLink>
            <a
              href={CONTACT_TEL_HREF}
              className="inline-flex h-14 items-center gap-2.5 rounded-full px-6 text-[15px] font-semibold text-white ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/10"
            >
              <PhoneIcon className="h-4 w-4 text-cyan" />
              <span className="font-en tracking-[0.02em]">{CONTACT_TEL}</span>
            </a>
          </div>
          <p className="mt-6 text-[13px] text-white/55">
            受付 {CONTACT_HOURS}　／　メール{" "}
            <a href={CONTACT_MAILTO} className="text-white/80 underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
          {note && <p className="mt-6 max-w-xl text-[12px] leading-[1.9] text-white/50">{note}</p>}
        </div>
      </Container>
    </section>
  );
}
