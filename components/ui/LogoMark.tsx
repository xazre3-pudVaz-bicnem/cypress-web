import { useId } from "react";

/**
 * ロゴマーク（菱形を2つのL字に分けた形）のSVG版。
 * public/logo.png は白背景つきのため、濃い背景の上ではこちらを使う。
 */
export default function LogoMark({
  tone = "light",
  className = "h-8 w-8",
}: {
  /** light: 白背景用 / dark: 濃紺背景用（色を明るくしてコントラストを保つ） */
  tone?: "light" | "dark";
  className?: string;
}) {
  const id = useId();
  const blue = tone === "dark" ? ["#3a8ee6", "#6fd3ff"] : ["#0a2a5e", "#22a7ea"];
  const gray = tone === "dark" ? ["#8b95a7", "#dfe5ee"] : ["#3f4652", "#a7afbb"];

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-b`} x1="6" y1="8" x2="24" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={blue[0]} />
          <stop offset="1" stopColor={blue[1]} />
        </linearGradient>
        <linearGradient id={`${id}-g`} x1="22" y1="8" x2="34" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={gray[0]} />
          <stop offset="1" stopColor={gray[1]} />
        </linearGradient>
      </defs>
      <path
        d="M18.6 5.6 4.4 19.8 20 35.4l6.2-6.2"
        fill="none"
        stroke={`url(#${id}-b)`}
        strokeWidth="4.4"
        strokeLinejoin="miter"
      />
      <path
        d="M22.6 8.2 34.4 20l-5.6 5.6"
        fill="none"
        stroke={`url(#${id}-g)`}
        strokeWidth="4.4"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
