"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col items-center gap-5"
          >
            <span className="text-white font-black text-xl tracking-[0.35em] uppercase select-none">
              CYPRESS
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
              style={{ originX: 0 }}
              className="w-20 h-px bg-[#333333]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
