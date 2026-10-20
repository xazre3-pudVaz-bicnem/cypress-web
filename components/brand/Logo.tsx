import { useId } from "react";

interface Props {
  /** color: 通常のロゴ（青と灰のグラデーション） / white: 青・濃色の背景に置く白抜き */
  tone?: "color" | "white";
  /** ワードマーク（Cypress の文字）を出すか */
  wordmark?: boolean;
  className?: string;
}

/**
 * サイプレスのロゴ。public/logo.png のひし形マーク（2つの山括弧でできたひし形）を
 * SVG で描き直し、背景色に合わせて色を切り替えられるようにしたもの。
 */
export default function Logo({ tone = "color", wordmark = true, className = "" }: Props) {
  const id = useId().replace(/:/g, "");
  const left = tone === "white" ? "#ffffff" : `url(#${id}-l)`;
  const right = tone === "white" ? "rgba(255,255,255,0.6)" : `url(#${id}-r)`;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-[1.6em] w-[1.6em] shrink-0" aria-hidden focusable="false">
        <defs>
          <linearGradient id={`${id}-l`} x1="20" y1="10" x2="60" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0a2350" />
            <stop offset="0.55" stopColor="#1d5fa6" />
            <stop offset="1" stopColor="#2bb5ee" />
          </linearGradient>
          <linearGradient id={`${id}-r`} x1="70" y1="12" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#3f4246" />
            <stop offset="1" stopColor="#a7a9ac" />
          </linearGradient>
        </defs>
        <g fill="none" strokeWidth="9" strokeLinejoin="miter" strokeLinecap="butt">
          <path d="M50 6 L6 50 L50 94 L69.8 74.2" stroke={left} />
          <path d="M74.6 69.4 L94 50 L55.7 11.7" stroke={right} />
        </g>
      </svg>
      {wordmark && (
        <span
          className="v2-display text-[1.25em] leading-none"
          style={{ letterSpacing: "-0.01em", color: tone === "white" ? "#ffffff" : "var(--v2-ink)" }}
        >
          Cypress
        </span>
      )}
    </span>
  );
}
