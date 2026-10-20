import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/brand/Logo";
import ArrowLink from "@/components/ui/ArrowLink";
import FadeUp from "@/components/motion/FadeUp";

export interface UpdateItem {
  href: string;
  title: string;
  date: string;
  label: string;
  /** 無い場合はロゴ入りの青いカードを出す */
  image?: string;
}

interface Group {
  title: string;
  ja: string;
  href: string;
  items: UpdateItem[];
}

/** お知らせ・ブログの最新3件ずつ（参考サイトの News / Seminar / Blog にあたる） */
export default function HomeUpdates({ groups }: { groups: Group[] }) {
  return (
    <div className="bg-white px-[var(--v2-gutter)] pb-24 pt-10 md:pb-32 md:pt-0">
      <div className="mx-auto max-w-[1180px]">
        {groups.map((g) => (
          <section key={g.title} aria-labelledby={`updates-${g.title}`} className="border-t pt-12 md:pt-16" style={{ borderColor: "var(--v2-line)" }}>
            <h3 id={`updates-${g.title}`} className="v2-display text-[clamp(30px,2.8vw,40px)]">
              {g.title}
              <span className="sr-only">（{g.ja}）</span>
            </h3>
            {/* スマホは横にスワイプ、PC は3列 */}
            <ul className="-mx-[var(--v2-gutter)] mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[var(--v2-gutter)] pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-[clamp(24px,3vw,44px)] md:overflow-visible md:px-0">
              {g.items.map((item, i) => (
                <li key={item.href} className="w-[78%] shrink-0 snap-start md:w-auto">
                  <FadeUp delay={i * 0.08}>
                    <Link href={item.href} className="group block">
                      <span className="relative block aspect-[16/10] overflow-hidden rounded-[6px]" style={{ background: "var(--v2-blue)" }}>
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 30vw, 78vw"
                            className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
                            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                          />
                        ) : (
                          <span className="absolute inset-0 grid place-items-center text-[clamp(18px,1.6vw,24px)] transition-transform duration-[1.2s] group-hover:scale-[1.05]">
                            <Logo tone="white" />
                          </span>
                        )}
                      </span>
                      <span className="mt-4 flex items-center justify-between gap-3">
                        <span className="v2-pill border border-[var(--v2-blue)] px-2.5 py-1 text-[11px] text-[var(--v2-blue)]">{item.label}</span>
                        <time className="text-[12px] font-semibold text-[var(--v2-ink-sub)]" dateTime={item.date}>
                          {item.date.replace(/-/g, ".")}
                        </time>
                      </span>
                      <span className="mt-3 line-clamp-3 block text-[clamp(16px,1.3vw,19px)] font-bold leading-[1.55] tracking-[0.02em] transition-colors duration-300 group-hover:text-[var(--v2-blue)]">
                        {item.title}
                      </span>
                    </Link>
                  </FadeUp>
                </li>
              ))}
            </ul>
            <div className="mb-12 mt-8 flex justify-end md:mb-16 md:mt-10">
              <ArrowLink href={g.href}>View All</ArrowLink>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
