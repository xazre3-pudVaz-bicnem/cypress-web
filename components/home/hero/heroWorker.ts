// ヒーローの 3D を Web Worker（OffscreenCanvas）で描くための入口。
// 形の生成・シェーダーの準備・毎フレームの描画をメインスレッドから外し、ページの操作を重くしない。
import { createHeroScene, type HeroScene, type HeroSceneOptions } from "./heroScene";

export type HeroWorkerMessage =
  | { type: "init"; canvas: OffscreenCanvas; options: HeroSceneOptions; introDelay: number | null; run: boolean }
  | { type: "start" }
  | { type: "stop" }
  | { type: "pointer"; x: number; y: number }
  | { type: "resize"; width: number; height: number }
  | { type: "dispose" };

const ctx = self as unknown as {
  postMessage(message: { type: "ready" }): void;
  onmessage: ((event: MessageEvent<HeroWorkerMessage>) => void) | null;
  close(): void;
};

let scene: HeroScene | null = null;

ctx.onmessage = ({ data }) => {
  switch (data.type) {
    case "init":
      scene = createHeroScene(data.canvas, data.options);
      if (data.introDelay !== null) scene.playIntro(data.introDelay);
      else scene.setIntro(1);
      scene.renderOnce();
      ctx.postMessage({ type: "ready" });
      if (data.run) scene.start();
      break;
    case "start":
      scene?.start();
      break;
    case "stop":
      scene?.stop();
      scene?.renderOnce();
      break;
    case "pointer":
      scene?.setPointer(data.x, data.y);
      break;
    case "resize":
      scene?.resize(data.width, data.height);
      scene?.renderOnce();
      break;
    case "dispose":
      scene?.dispose();
      scene = null;
      ctx.close();
      break;
  }
};
