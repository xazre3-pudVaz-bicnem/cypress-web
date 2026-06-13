"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const outerX = useSpring(mouseX, { damping: 40, stiffness: 80 });
  const outerY = useSpring(mouseY, { damping: 40, stiffness: 80 });

  const visible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible.current) visible.current = true;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 top-0 left-0 hidden lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#3B82F6",
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-50 top-0 left-0 hidden lg:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(59,130,246,0.4)",
        }}
      />
    </>
  );
}
