import Image from "next/image";
import { BUSINESSES } from "@/lib/company";
import ArrowLink from "@/components/ui/ArrowLink";
import FadeUp from "@/components/motion/FadeUp";

/** Webマーケティング以外の事業（専用サイトで運営） */
const OTHER_BUSINESSES = BUSINESSES.filter((b) => b.external);

/**
 * そのほかの事業の案内（参考サイトの「15周年特設サイト」の青いカードにあたる）。
 * 軽貨物事業・太陽光事業はそれぞれ専用サイトで運営しているので、外部リンクで案内する。
 */
export default function HomeGroupBanner() {
  return (
    <div className="bg-white px-[var(--v2-gutter)] pb-24 md:pb-36">
      <FadeUp>
        <section
          aria-labelledby="home-group-title"
          className="relative mx-auto grid max-w-[1180px] overflow-hidden rounded-[14px] text-white md:grid-cols-[1fr_1.1fr] md:items-center"
          style={{ background: "var(--v2-blue)" }}
        >
          <div className="relative z-10 px-7 pb-4 pt-10 md:py-14 md:pl-14 md:pr-4">
            <p className="v2-display text-[14px] opacity-80">Group Business</p>
            <h2 id="home-group-title" className="mt-3 text-[clamp(24px,2.3vw,32px)] font-bold tracking-[0.02em]">
              そのほかの事業
            </h2>
            <p className="mt-5 max-w-[30em] text-[13px] font-semibold leading-[2] opacity-90">
              サイプレスは、Webマーケティングに加えて、軽貨物の配送事業と、住宅向けの太陽光・蓄電池の事業を運営しています。それぞれ専用のサイトでご案内しています。
            </p>
            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {OTHER_BUSINESSES.map((b) => (
                <li key={b.key}>
                  <ArrowLink href={b.href} external aria-label={`${b.name}（${b.siteLabel}・別サイト）を開く`}>
                    {b.name}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[3/2] md:aspect-auto md:h-full md:min-h-[360px]">
            <Image
              src="/images/v2/group-sphere.jpg"
              alt="軽貨物の配送車と、太陽光パネルを載せた家を包むガラスの球体のイラスト"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ maskImage: "radial-gradient(closest-side, #000 72%, transparent)", WebkitMaskImage: "radial-gradient(closest-side, #000 72%, transparent)" }}
            />
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
