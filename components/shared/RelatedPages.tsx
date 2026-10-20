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

export default function RelatedPages({ links, heading = "関連ページ" }: Props) {
  return (
    <section className="py-16" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#9CA3AF" }}>
          {heading}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group py-4 pr-6 hover:text-[#0F172A] transition-colors"
              style={{ borderBottom: "1px solid #E8E4DC", color: "#374151" }}
            >
              <p className="text-[13px] font-medium mb-0.5 group-hover:underline">{l.label}</p>
              {l.desc && <p className="text-[12px]" style={{ color: "#9CA3AF" }}>{l.desc}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
