interface Props {
  children: React.ReactNode;
  color?: string;
}

export function SectionLabel({ children, color = "#2563EB" }: Props) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-4">
      <span className="w-6 h-px" style={{ background: color }} />
      <span
        className="text-[11px] font-semibold tracking-[0.18em] uppercase"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  );
}
