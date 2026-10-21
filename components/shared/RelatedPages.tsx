import Link from "next/link";

interface RelatedLink {
  href: string;
  label: string;
  desc?: string;
}

interface Props {
  links: RelatedLink[];
  heading?: string;
}

/** 下層ページ共通の関連ページ一覧（白いカードを並べる） */
export default function RelatedPages({ links, heading = "関連ページ" }: Props) {
  return (
    <section className="px-[var(--v2-gutter)] py-16 md:py-20" style={{ background: "var(--v2-bg)" }}>
      <div className="mx-auto max-w-[1180px]">
        <h2 className="flex flex-col">
          <span className="v2-display text-[clamp(32px,3.2vw,44px)]" aria-hidden>
            Related
          </span>
          <span className="mt-2 text-[14px] font-bold tracking-[0.04em]">{heading}</span>
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex h-full items-start justify-between gap-4 rounded-[10px] bg-white px-5 py-4 transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(41,53,64,0.1)]"
              >
                <span>
                  <span className="block text-[14px] font-bold leading-[1.6] transition-colors group-hover:text-[var(--v2-blue)]">{l.label}</span>
                  {l.desc && <span className="mt-1 block text-[12px] font-medium leading-[1.7] text-[var(--v2-ink-sub)]">{l.desc}</span>}
                </span>
                <span aria-hidden className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--v2-blue)] text-white transition-transform duration-500 group-hover:translate-x-1">
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 5h7M5.5 2l3 3-3 3" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
