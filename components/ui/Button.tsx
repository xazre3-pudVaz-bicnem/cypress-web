import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "ghost-light" | "ghost-dark";
type Size = "md" | "lg";

const VARIANT: Record<Variant, string> = {
  // 主要CTA。白文字とのコントラスト比 4.6:1 を確保した青。
  primary: "bg-accent text-white hover:bg-accent-strong shadow-[0_10px_30px_-12px_rgba(11,120,194,0.7)]",
  secondary: "bg-white text-ink ring-1 ring-inset ring-line-strong hover:ring-ink",
  dark: "bg-ink text-white hover:bg-navy-800",
  // 濃紺背景の上で使う
  "ghost-light": "bg-white/5 text-white ring-1 ring-inset ring-white/25 hover:bg-white/10 hover:ring-white/50",
  "ghost-dark": "text-ink hover:text-accent",
};

const SIZE: Record<Size, string> = {
  md: "h-11 px-5 text-[14px]",
  lg: "h-14 px-7 text-[15px]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md") {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.04em]",
    "transition-[background-color,color,box-shadow,transform] duration-300 ease-out-expo",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    VARIANT[variant],
    SIZE[size],
  ].join(" ");
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M6 3.5H3.5v9h9V10M9 3.5h3.5V7M12.5 3.5 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="m2.5 4.5 5.5 4.25 5.5-4.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

/** サイト内・外部どちらのリンクにも使うボタン。外部URLは別タブで開く。 */
export function ButtonLink({
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
  children,
  href,
  ...rest
}: ButtonLinkProps) {
  const external = typeof href === "string" && /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      className={`${buttonClass(variant, size)} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
      {arrow &&
        (external ? (
          <ExternalIcon />
        ) : (
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        ))}
    </Link>
  );
}
