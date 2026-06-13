interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
}

export function GlassCard({ children, className = "", style, hover = false }: Props) {
  return (
    <div
      className={`rounded-2xl bg-white transition-all duration-300 ${
        hover
          ? "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] hover:border-blue-200"
          : ""
      } ${className}`}
      style={{
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
