"use client";

import { useSyncExternalStore } from "react";

/**
 * 画面右上の「モーション」スイッチの状態。
 * 未設定なら OS の「視差効果を減らす」設定に従い、切り替えた値は localStorage に残す。
 * 値が変わると <html data-motion="on|off"> も更新し、CSS アニメーションの一時停止に使う。
 */
const STORAGE_KEY = "cy-motion";
const listeners = new Set<() => void>();

function readMotionEnabled(): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "on") return true;
    if (saved === "off") return false;
  } catch {
    // プライベートブラウズなどで localStorage が使えない場合は OS 設定に従う
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setMotionEnabled(enabled: boolean) {
  try {
    localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
  } catch {
    // 保存できなくても、このページ内の切り替えは効かせる
  }
  document.documentElement.dataset.motion = enabled ? "on" : "off";
  listeners.forEach((listener) => listener());
}

/** モーションが有効か。サーバー描画時は有効扱いにして、表示後に実際の設定へ合わせる。 */
export function useMotionEnabled() {
  return useSyncExternalStore(subscribe, readMotionEnabled, () => true);
}
