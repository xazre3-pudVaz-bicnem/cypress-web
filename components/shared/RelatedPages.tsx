import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

interface RelatedLink {
  href: string;
  label: string;
  desc?: string;
}

interface Props {
  links: RelatedLink[];
  heading?: string;
  /** 最初から並べる件数。残りは「すべて見る」の中にまとめる（リンク自体はHTMLに残す） */
  initialCount?: number;
}

function Card({ link }: { link: RelatedLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-line bg-white px-5 py-4 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_12px_32px_-18px_rgba(11,120,194,0.45)]"
      >
        <span>
          <span className="block text-[14px] font-bold leading-snug text-ink group-hover:text-accent">{link.label}</span>
          {link.desc && <span className="mt-1 block text-[12.5px] leading-relaxed text-muted">{link.desc}</span>}
        </span>
        <ArrowIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
      </Link>
    </li>
  );
}

export default function RelatedPages({ links, heading = "関連ページ", initialCount = 8 }: Props) {
  const first = links.slice(0, initialCount);
  const rest = links.slice(initialCount);
  return (
    <section className="border-t border-line bg-surface py-16 md:py-20">
      <Container>
        <p className="eyebrow mb-2 text-accent">Related</p>
        <h2 className="mb-8 text-[22px] font-bold">{heading}</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {first.map((l) => (
            <Card key={l.href} link={l} />
          ))}
        </ul>
        {rest.length > 0 && (
          <details className="group mt-3">
            <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-2xl py-4 text-[14px] font-semibold text-accent hover:bg-white/60 [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">関連ページをすべて見る（残り{rest.length}件）</span>
              <span className="hidden group-open:inline">閉じる</span>
            </summary>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {rest.map((l) => (
                <Card key={l.href} link={l} />
              ))}
            </ul>
          </details>
        )}
      </Container>
    </section>
  );
}
