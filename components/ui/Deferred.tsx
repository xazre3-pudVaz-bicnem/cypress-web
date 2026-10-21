import type { CSSProperties, ReactNode } from "react";

/**
 * スマホなどタッチ操作の端末では、画面外にあるあいだ描画計算を省く（content-visibility: auto、globals.css の .cy-deferred）。
 * PC では省かない。スムーススクロール中に、近づいた区画をまとめて描く1コマが重くなりカクつくため。
 * size は描画前に仮に確保する高さ。一度描画されると実際の高さが記憶される。
 * 中に position: fixed の要素を置くと、この要素が基準になるので入れないこと。
 */
export default function Deferred({ size, children }: { size: number; children: ReactNode }) {
  return (
    <div className="cy-deferred" style={{ "--cy-deferred-size": `${size}px` } as CSSProperties}>
      {children}
    </div>
  );
}
