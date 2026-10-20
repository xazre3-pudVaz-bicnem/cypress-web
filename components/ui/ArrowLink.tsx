import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  /** text: 文字＋丸矢印 / outline: 枠線の丸ボタン / white: 濃い背景用の白枠ボタン */
  variant?: "text" | "outline" | "white";
  /** 別サイトへのリンク（新しいタブで開き、矢印を斜めにする） */
  external?: boolean;
  className?: string;
  "aria-label"?: string;
}

/** 「View Details」「All Cases」などの矢印付きリンク */
export default function ArrowLink({ href, children, variant = "text", external = false, className = "", ...rest }: Props) {
  const base =
    variant === "text"
      ? "inline-flex items-center gap-2.5 text-[16px] font-semibold"
      : `inline-flex items-center gap-3 rounded-full border py-2.5 pl-6 pr-2.5 text-[14px] font-semibold transition-colors duration-300 ${
          variant === "white"
            ? "border-white/50 text-white hover:bg-white hover:text-[var(--v2-blue)]"
            : "border-[var(--v2-line)] bg-white/50 text-[var(--v2-ink)] hover:border-[var(--v2-blue)] hover:text-[var(--v2-blue)]"
        }`;
  const icon = (
    <span
      aria-hidden
      className="grid h-6 w-6 place-items-center rounded-full bg-[var(--v2-blue)] text-white transition-transform duration-500 group-hover:translate-x-1"
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {external ? <path d="M2.5 7.5l5-5M3.5 2.5h4v4" /> : <path d="M1.5 5h7M5.5 2l3 3-3 3" />}
      </svg>
    </span>
  );
  const cls = `group ${base} ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={rest["aria-label"]}>
      {children}
      {icon}
    </a>
  ) : (
    <Link href={href} className={cls} aria-label={rest["aria-label"]}>
      {children}
      {icon}
    </Link>
  );
}
