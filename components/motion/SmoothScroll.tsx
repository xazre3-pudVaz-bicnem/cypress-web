"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { useMotionEnabled } from "./motionPreference";

declare global {
  interface Window {
    /** ヘッダーのモバイルメニューなどから一時停止できるよう公開している（window.lenis は Lenis 自身が使う） */
    __cyLenis?: Lenis;
  }
}

/**
 * 慣性スムーススクロール（Lenis）。モーションOFF・視差効果を減らす設定のときは使わない。
 * MotionConfig で framer-motion のアニメーションも OS 設定に合わせる。
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const enabled = useMotionEnabled();
  const pathname = usePathname();
  /** 直前に「戻る・進む」が押された時刻 */
  const popAt = useRef(-Infinity);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -96 },
    });
    window.__cyLenis = lenis;
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (window.__cyLenis === lenis) window.__cyLenis = undefined;
    };
  }, [enabled]);

  // ブラウザの「戻る・進む」かどうかを覚えておく（その場合は元の位置を保つ）。
  // 画面外のセクションは描画を省いて仮の高さで並べているので、ブラウザが位置を戻し終えるまでは
  // 実際の高さで並べる（globals.css の html[data-restoring]）。
  // ブラウザが位置を戻すのは popstate の処理がすべて終わった後なので、ここで印を付ければ間に合う。
  useEffect(() => {
    let timer = 0;
    const onPop = () => {
      popAt.current = performance.now();
      const root = document.documentElement;
      root.dataset.restoring = "";
      window.clearTimeout(timer);
      timer = window.setTimeout(() => delete root.dataset.restoring, 600);
    };
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.clearTimeout(timer);
    };
  }, []);

  // ページを移動したら、前のページのスクロールの勢いを止めて先頭から表示する。
  // （勢いが残ったまま移動すると、移動先でもスクロールが続いて途中の位置で止まってしまう）
  useEffect(() => {
    // 最初の表示（再読み込み・外部サイトから来たとき）は、ブラウザの位置の復元に任せる
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const lenis = window.__cyLenis;
    const isPop = performance.now() - popAt.current < 1000;
    popAt.current = -Infinity;
    if (isPop) {
      // 戻る・進むは、ブラウザが戻した位置に慣性スクロールの目標を合わせるだけ
      requestAnimationFrame(() => lenis?.scrollTo(window.scrollY, { immediate: true, force: true }));
      return;
    }
    if (window.location.hash) return;
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return <MotionConfig reducedMotion={enabled ? "never" : "always"}>{children}</MotionConfig>;
}
