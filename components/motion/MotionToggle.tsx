"use client";

import { useEffect } from "react";
import { setMotionEnabled, useMotionEnabled } from "./motionPreference";

interface Props {
  /** 文字とアイコンの色。ヒーロー上では白、明るい背景ではインク色。 */
  tone?: "light" | "dark";
  className?: string;
}

/** アニメーションの再生・停止を切り替えるスイッチ（アクセシビリティ配慮）。 */
export default function MotionToggle({ tone = "light", className = "" }: Props) {
  const enabled = useMotionEnabled();

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);

  const color = tone === "light" ? "#ffffff" : "var(--v2-ink)";

  return (
    <button
      type="button"
      onClick={() => setMotionEnabled(!enabled)}
      aria-pressed={enabled}
      title={enabled ? "アニメーションを停止する" : "アニメーションを再生する"}
      className={`group inline-flex items-center gap-2.5 rounded-full py-1 pl-1 text-[14px] font-bold ${className}`}
      style={{ color }}
    >
      <span>モーション</span>
      <span
        aria-hidden
        className="grid h-6 w-6 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110"
        style={{ background: color, color: tone === "light" ? "var(--v2-blue)" : "#ffffff" }}
      >
        {enabled ? (
          <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor">
            <rect x="0.5" y="0" width="2.2" height="9" rx="0.6" />
            <rect x="5.3" y="0" width="2.2" height="9" rx="0.6" />
          </svg>
        ) : (
          <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor">
            <path d="M1 0.6v7.8c0 .4.5.7.8.4l5.6-3.9a.5.5 0 0 0 0-.8L1.8.2C1.5 0 1 .2 1 .6z" />
          </svg>
        )}
      </span>
    </button>
  );
}
