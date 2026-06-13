"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
  decimals = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const end = start + duration * 1000;
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parseFloat((eased * value).toFixed(decimals));
      setCount(current);
      if (now >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? count.toFixed(decimals).replace(/\.0$/, "") : "0"}
      {suffix}
    </span>
  );
}
