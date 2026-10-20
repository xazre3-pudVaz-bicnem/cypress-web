import type { ReactNode } from "react";

/**
 * 画面外にあるあいだは描画計算を省く（content-visibility: auto）。
 * size は描画前に仮に確保する高さ。一度描画されると実際の高さが記憶される。
 * 中に position: fixed の要素を置くと、この要素が基準になるので入れないこと。
 */
export default function Deferred({ size, children }: { size: number; children: ReactNode }) {
  return <div style={{ contentVisibility: "auto", containIntrinsicSize: `auto ${size}px` }}>{children}</div>;
}
