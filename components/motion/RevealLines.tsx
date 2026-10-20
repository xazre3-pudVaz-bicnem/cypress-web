"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  lines: ReactNode[];
  /** 各行に付けるクラス（色など） */
  lineClassName?: (index: number) => string;
  className?: string;
  delay?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** 大きな見出しを、画面に入ったときに1行ずつ下からせり上げて見せる */
export default function RevealLines({ lines, lineClassName, className = "", delay = 0 }: Props) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
          <motion.span
            className={`block ${lineClassName?.(i) ?? ""}`}
            initial={{ y: "105%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
