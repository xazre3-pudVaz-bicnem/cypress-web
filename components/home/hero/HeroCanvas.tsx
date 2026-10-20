"use client";

import { useEffect, useRef, useState } from "react";
import { getImageProps } from "next/image";
import { useMotionEnabled } from "@/components/motion/motionPreference";
import type { HeroWorkerMessage } from "./heroWorker";

interface Props {
  /** 読み込み演出（形が中央から膨らむ）を再生するか。初回訪問時のみ true。 */
  playIntro: boolean;
  /** 演出を始める時刻（ページ表示からのミリ秒）。イントロ画面が消えるタイミングに合わせる。 */
  introAt: number;
}

/** Worker でもメインスレッドでも同じように操作するための窓口 */
interface SceneHandle {
  start(): void;
  stop(): void;
  pointer(x: number, y: number): void;
  resize(width: number, height: number): void;
  dispose(): void;
}

/**
 * ヒーローの 3D。まず同じ構図の静止画を出し、ブラウザが落ち着いてから 3D を準備して重ねる。
 * 対応ブラウザでは Web Worker（OffscreenCanvas）で描き、メインスレッドを止めない。スマホは静止画のみ。
 * 画面外にあるとき・タブが裏にあるとき・モーションOFF のときは描画を止める。
 */
export default function HeroCanvas({ playIntro, introAt }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneHandle | null>(null);
  const [ready, setReady] = useState(false);
  const motion = useMotionEnabled();
  const motionRef = useRef(motion);
  const visibleRef = useRef(true);

  useEffect(() => {
    motionRef.current = motion;
    const scene = sceneRef.current;
    if (!scene) return;
    if (motion && visibleRef.current) scene.start();
    else scene.stop();
  }, [motion]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    // スマホは表示の速さと電池を優先し、リアルタイムの 3D は使わず静止画をゆっくり動かすだけにする
    if (window.matchMedia("(max-width: 767px)").matches) return;
    // WebGL が使えない端末では静止画のままにする
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) return;

    let disposed = false;
    let cleanup = () => {};
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.className = "absolute inset-0 h-full w-full";
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 0.7s ease";

    const setup = async () => {
      if (disposed) return;
      box.appendChild(canvas);
      const width = box.clientWidth || window.innerWidth;
      const height = box.clientHeight || window.innerHeight;
      const quality: "high" | "low" = window.matchMedia("(min-width: 768px) and (pointer: fine)").matches ? "high" : "low";
      const options = { quality, width, height, dpr: window.devicePixelRatio || 1 };
      // 初回訪問で、まだイントロ画面が出ている間に準備できたときだけ「膨らむ」演出を使う
      const wait = introAt - performance.now();
      const introDelay = playIntro && wait > 0 && motionRef.current ? wait : null;
      const onReady = () => {
        if (disposed) return;
        canvas.style.opacity = "1";
        setReady(true);
      };

      let handle: SceneHandle;
      if ("transferControlToOffscreen" in canvas && typeof Worker !== "undefined") {
        const offscreen = canvas.transferControlToOffscreen();
        const worker = new Worker(new URL("./heroWorker.ts", import.meta.url), { type: "module" });
        const send = (message: HeroWorkerMessage, transfer: Transferable[] = []) => worker.postMessage(message, transfer);
        worker.onmessage = (e: MessageEvent<{ type: "ready" }>) => {
          if (e.data.type === "ready") onReady();
        };
        send({ type: "init", canvas: offscreen, options, introDelay, run: motionRef.current && visibleRef.current }, [offscreen]);
        handle = {
          start: () => send({ type: "start" }),
          stop: () => send({ type: "stop" }),
          pointer: (x, y) => send({ type: "pointer", x, y }),
          resize: (w, h) => send({ type: "resize", width: w, height: h }),
          dispose: () => {
            send({ type: "dispose" });
            worker.terminate();
          },
        };
      } else {
        const { createHeroScene } = await import("./heroScene");
        if (disposed) return;
        const scene = createHeroScene(canvas, options);
        if (introDelay !== null) scene.playIntro(introDelay);
        else scene.setIntro(1);
        scene.renderOnce();
        onReady();
        if (motionRef.current && visibleRef.current) scene.start();
        handle = {
          start: () => scene.start(),
          stop: () => {
            scene.stop();
            scene.renderOnce();
          },
          pointer: (x, y) => scene.setPointer(x, y),
          resize: (w, h) => {
            scene.resize(w, h);
            scene.renderOnce();
          },
          dispose: () => scene.dispose(),
        };
      }
      sceneRef.current = handle;

      const onResize = () => handle.resize(box.clientWidth, box.clientHeight);
      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        handle.pointer((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
      };
      const io = new IntersectionObserver(([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && motionRef.current && !document.hidden) handle.start();
        else handle.stop();
      });
      io.observe(box);
      const onVisibility = () => {
        if (document.hidden) handle.stop();
        else if (visibleRef.current && motionRef.current) handle.start();
      };
      window.addEventListener("resize", onResize);
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      cleanup = () => {
        io.disconnect();
        window.removeEventListener("resize", onResize);
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("visibilitychange", onVisibility);
        handle.dispose();
        sceneRef.current = null;
      };
    };

    // 表示直後のハイドレーションと取り合わないよう、ブラウザの手が空いてから準備する
    const useIdle = typeof window.requestIdleCallback === "function";
    const idle = useIdle ? window.requestIdleCallback(() => void setup(), { timeout: 1200 }) : window.setTimeout(() => void setup(), 300);

    return () => {
      disposed = true;
      if (useIdle) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      cleanup();
      canvas.remove();
    };
    // 初回表示時の状態だけで決める
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 横長の画面は横長の静止画、縦長の画面は縦長の静止画を出し分ける（中央を切り抜いて使う）
  const common = { alt: "", fill: true, loading: "eager", fetchPriority: "high" } as const;
  const {
    props: { srcSet: wideSet },
  } = getImageProps({ ...common, src: "/images/v2/hero-poster-wide.jpg", sizes: "(min-aspect-ratio: 12/5) 100vw, 240vh" });
  const {
    props: { srcSet: tallSet, ...tall },
  } = getImageProps({ ...common, src: "/images/v2/hero-poster-tall.jpg", sizes: "(max-aspect-ratio: 1170/2532) 100vw, 46vh" });

  return (
    <div ref={boxRef} className="absolute inset-0" style={{ background: "#0a4c8f" }} data-ready={ready || undefined}>
      <picture>
        <source media="(min-aspect-ratio: 3/4)" srcSet={wideSet} sizes="(min-aspect-ratio: 12/5) 100vw, 240vh" />
        <source media="(max-aspect-ratio: 3/4)" srcSet={tallSet} sizes="(max-aspect-ratio: 1170/2532) 100vw, 46vh" />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...tall} className="cy-poster absolute inset-0 h-full w-full object-cover" data-motion-loop />
      </picture>
    </div>
  );
}
