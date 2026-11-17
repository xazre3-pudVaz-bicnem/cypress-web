/**
 * GPU が使えず、画面の描画をソフトウェア（CPU）で行っている環境かどうか。
 * Chrome の「ハードウェア アクセラレーション」が無効なときや、GPU のプロセスが落ちた後などに起こる。
 * この状態でリアルタイムの 3D や慣性スクロールを動かすと 1 コマに数秒かかり、スクロールが止まったように見えるため、
 * 呼び出し側で軽い表示（静止画・ブラウザ標準のスクロール）に切り替える。
 * WebGL の文脈を 1 つ作って調べるので、結果はページを読み込むごとに 1 回だけ求めて使い回す。
 */
let cached: boolean | undefined;

export function isSoftwareRendering(): boolean {
  if (cached === undefined) cached = detect();
  return cached;
}

function detect(): boolean {
  try {
    const canvas = document.createElement("canvas");
    // 性能に大きな問題がある描画方式（ソフトウェア描画など）しか無いときは、文脈を作らずに null を返させる
    const options = { failIfMajorPerformanceCaveat: true };
    const gl = (canvas.getContext("webgl2", options) ?? canvas.getContext("webgl", options)) as WebGLRenderingContext | null;
    if (!gl) return true;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return /swiftshader|llvmpipe|softpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
}
