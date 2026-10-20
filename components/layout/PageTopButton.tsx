"use client";

/** ページ最上部へ戻る（スムーススクロール中は Lenis で、それ以外はブラウザの機能で） */
export default function PageTopButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (window.__cyLenis) window.__cyLenis.scrollTo(0, { duration: 1.4 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group inline-flex items-center gap-2 text-[14px] font-bold"
    >
      Page Top
      <svg aria-hidden width="10" height="12" viewBox="0 0 10 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-1">
        <path d="M5 11V1.5M1.5 5L5 1.5 8.5 5" />
      </svg>
    </button>
  );
}
