"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/brand/Logo";
import { CONTACT_LINK, PRIMARY_NAV, SECONDARY_NAV, type NavGroup, type NavLink } from "@/lib/navigation";

interface Props {
  /** overlay: トップページのヒーローに白文字で重ねる / default: 明るい背景のページ */
  variant?: "overlay" | "default";
  /** トップのイントロ演出が終わってから表示する */
  introFade?: boolean;
}

type Mode = "top" | "shown" | "hidden";

/** ページ最上部にいるときのヘッダーの高さ（px）。下層ページではこの分だけ本文を下げる。 */
const BAR_HEIGHT = 88;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * サイト共通ヘッダー。
 * - 最上部: 背景なしで本文と一緒にスクロールして消える
 * - 下にスクロール中: 隠す / 上にスクロールしたとき: 白いパネルとして上部に出す
 * - メニューにホバー: 白いパネルが広がり、背景をぼかしてメガメニューを出す
 */
export default function Header({ variant = "default", introFade = false }: Props) {
  const [mode, setMode] = useState<Mode>("top");
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const modeRef = useRef<Mode>("top");

  /** 最上部では本文と同じ速さで上へ流し、それ以外は出し入れをアニメーションさせる */
  const placeBar = (m: Mode, y: number) => {
    const el = barRef.current;
    if (!el) return;
    el.style.transition = m === "top" ? "none" : "transform 0.5s cubic-bezier(0.22,1,0.36,1)";
    el.style.transform = m === "top" ? `translate3d(0, ${-Math.min(y, BAR_HEIGHT)}px, 0)` : m === "hidden" ? "translate3d(0,-130%,0)" : "translate3d(0,0,0)";
  };

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      let next = modeRef.current;
      if (y <= 4) next = "top";
      else if (next === "top" && y < BAR_HEIGHT) next = "top";
      else if (dy > 2) next = "hidden";
      else if (dy < -2) next = "shown";
      else if (next === "top") next = "hidden";
      if (next !== modeRef.current) {
        modeRef.current = next;
        setMode(next);
      }
      placeBar(next, y);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // メニューを開いている間は Esc で閉じ、モバイルメニュー表示中は背面のスクロールを止める
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    window.__cyLenis?.stop();
    return () => {
      root.style.overflow = prev;
      window.__cyLenis?.start();
    };
  }, [mobileOpen]);

  const openMenu = (key: string | null) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenKey(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 160);
  };
  const closeAll = () => {
    setOpenKey(null);
    setMobileOpen(false);
  };

  const menuOpen = openKey !== null;
  // 白いパネル表示か（上スクロール時・メニュー展開時）
  const panel = menuOpen || mode === "shown";
  const light = !panel && variant === "overlay";
  const openGroup = [...PRIMARY_NAV, ...SECONDARY_NAV].find((g) => g.key === openKey && g.menu);

  return (
    <>
      {variant === "default" && <div aria-hidden className="h-16 lg:h-[88px]" />}

      {/* メガメニュー表示中は背面をぼかす */}
      <AnimatePresence>
        {openGroup && (
          <motion.div
            key="backdrop"
            aria-hidden
            className="fixed inset-0 z-40 hidden lg:block"
            style={{ background: "rgba(41,53,64,0.28)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            onMouseEnter={scheduleClose}
            onClick={() => setOpenKey(null)}
          />
        )}
      </AnimatePresence>

      <header
        className="v2 fixed inset-x-0 top-0 z-50"
        onFocusCapture={() => {
          if (modeRef.current === "hidden") {
            modeRef.current = "shown";
            setMode("shown");
            placeBar("shown", window.scrollY);
          }
        }}
      >
        <div ref={barRef} className="will-change-transform">
          <div
            className={`transition-[margin,border-radius,background-color,box-shadow] duration-500 ${introFade ? "cy-hero-sub" : ""}`}
            style={{
              margin: panel ? "8px 8px 0" : "0",
              borderRadius: panel ? 12 : 0,
              background: panel ? "rgba(255,255,255,0.94)" : "transparent",
              backdropFilter: panel ? "blur(12px)" : undefined,
              WebkitBackdropFilter: panel ? "blur(12px)" : undefined,
              boxShadow: panel ? "0 10px 30px rgba(41,53,64,0.08)" : "none",
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseLeave={scheduleClose}
          >
            <div
              className={`flex items-center px-4 transition-[height] duration-500 lg:px-6 ${panel ? "h-16" : "h-16 lg:h-[88px]"}`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              <Link href="/" aria-label="株式会社サイプレス トップページ" className="shrink-0 text-[17px]" onClick={closeAll}>
                <Logo tone={light ? "white" : "color"} />
              </Link>

              <span
                aria-hidden
                className="mx-5 hidden h-5 w-px lg:block"
                style={{ background: light ? "rgba(255,255,255,0.4)" : "var(--v2-line)" }}
              />

              <nav aria-label="メインメニュー" className="hidden flex-1 items-center justify-between lg:flex">
                <NavRow groups={PRIMARY_NAV} light={light} openKey={openKey} onOpen={openMenu} onNavigate={closeAll} />
                <div className="flex items-center gap-4">
                  <NavRow groups={SECONDARY_NAV} light={light} openKey={openKey} onOpen={openMenu} onNavigate={closeAll} />
                  <ContactPill light={light} onClick={closeAll} />
                </div>
              </nav>

              <div className="ml-auto flex items-center gap-3 lg:hidden">
                <ContactPill light={light} onClick={closeAll} compact />
                <button
                  type="button"
                  aria-label="メニューを開く"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                  onClick={() => setMobileOpen(true)}
                  className="grid h-10 w-10 place-items-center rounded-full"
                  style={{ color: light ? "#fff" : "var(--v2-ink)" }}
                >
                  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M1 1h20M1 11h20" />
                  </svg>
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {openGroup?.menu && (
                <motion.div
                  key={openGroup.key}
                  className="hidden overflow-hidden lg:block"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  onMouseEnter={() => openMenu(openGroup.key)}
                >
                  <MegaMenu group={openGroup} onNavigate={closeAll} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={closeAll} />}</AnimatePresence>
    </>
  );
}

// ─── 横並びのナビ ───────────────────────────────────────────────────────────

function NavRow({
  groups,
  light,
  openKey,
  onOpen,
  onNavigate,
}: {
  groups: NavGroup[];
  light: boolean;
  openKey: string | null;
  onOpen: (key: string | null) => void;
  onNavigate: () => void;
}) {
  return (
    <ul className="flex h-10 items-center">
      {groups.map((g) => {
        const active = openKey === g.key;
        return (
          <li key={g.key} className="relative h-full" onMouseEnter={() => onOpen(g.menu ? g.key : null)}>
            <Link
              href={g.href}
              onClick={onNavigate}
              onFocus={() => onOpen(g.menu ? g.key : null)}
              aria-haspopup={g.menu ? "true" : undefined}
              aria-expanded={g.menu ? active : undefined}
              className="relative flex h-full items-center px-2.5 text-[14px] font-semibold tracking-[0.01em] transition-colors duration-300"
              style={{ color: active ? "var(--v2-blue)" : light ? "#fff" : "var(--v2-ink)" }}
            >
              {g.label}
              <span className="sr-only">（{g.ja}）</span>
              <span
                aria-hidden
                className="absolute inset-x-2.5 -bottom-3 h-[2px] origin-left rounded-full transition-transform duration-300"
                style={{ background: "var(--v2-blue)", transform: active ? "scaleX(1)" : "scaleX(0)" }}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// ─── お問い合わせボタン（ホバーで文字が下から入れ替わる） ───────────────────

function ContactPill({ light, onClick, compact = false }: { light: boolean; onClick: () => void; compact?: boolean }) {
  return (
    <Link
      href={CONTACT_LINK.href}
      onClick={onClick}
      className={`group inline-flex items-center rounded-full font-semibold transition-colors duration-300 ${compact ? "px-3.5 py-1.5 text-[13px]" : "px-4 py-2 text-[14px]"}`}
      style={{ background: light ? "#fff" : "var(--v2-blue)", color: light ? "var(--v2-blue)" : "#fff" }}
    >
      <span className="relative block overflow-hidden leading-[1.4]">
        <span className="block transition-transform duration-500 group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}>
          {CONTACT_LINK.en}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 group-hover:translate-y-0"
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        >
          {CONTACT_LINK.en}
        </span>
      </span>
      <span className="sr-only">（{CONTACT_LINK.label}）</span>
    </Link>
  );
}

// ─── メガメニュー ───────────────────────────────────────────────────────────

function MegaMenu({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const menu = group.menu!;
  return (
    <div className="grid grid-cols-[minmax(220px,1fr)_3fr] gap-10 px-6 pb-8 pt-6">
      <div>
        <p className="v2-display text-[44px]">{group.label}</p>
        <Link
          href={group.href}
          onClick={onNavigate}
          className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--v2-blue)]"
        >
          {group.ja}トップ
          <ArrowDot />
        </Link>
      </div>
      <div>
        {menu.cards && (
          <ul className="grid grid-cols-3 gap-x-5 gap-y-6">
            {menu.cards.map((c) => (
              <li key={c.href}>
                <Link href={c.href} onClick={onNavigate} className="group block">
                  <span className="relative block aspect-[3/2] overflow-hidden rounded-lg bg-[var(--v2-blue)]">
                    {c.image && (
                      <Image
                        src={c.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 22vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      />
                    )}
                  </span>
                  <span className="mt-3 block text-[18px] font-semibold leading-tight">{c.en}</span>
                  <span className="mt-1 block text-[12px] font-semibold text-[var(--v2-blue)]">{c.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {menu.links && (
          <ul className="grid grid-cols-3 gap-x-5">
            {menu.links.map((l) => (
              <li key={l.href} style={{ borderBottom: "1px solid var(--v2-line)" }}>
                <MenuTextLink link={l} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        )}
        {menu.extra && (
          <div className="mt-7 flex items-center gap-6 border-t pt-5" style={{ borderColor: "var(--v2-line)" }}>
            <p className="text-[12px] font-bold text-[var(--v2-ink-sub)]">{menu.extra.title}</p>
            {menu.extra.links.map((l) => (
              <MenuTextLink key={l.href} link={l} onNavigate={onNavigate} inline />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MenuTextLink({ link, onNavigate, inline = false }: { link: NavLink; onNavigate: () => void; inline?: boolean }) {
  const body = (
    <>
      <span className={inline ? "text-[14px] font-semibold" : "block text-[18px] font-semibold leading-tight"}>{inline ? link.label : link.en}</span>
      {!inline && <span className="mt-1 block text-[12px] font-semibold text-[var(--v2-blue)]">{link.label}</span>}
      {link.external && (
        <span aria-hidden className="ml-1 text-[12px]">
          ↗
        </span>
      )}
    </>
  );
  const cls = inline
    ? "inline-flex items-center transition-colors hover:text-[var(--v2-blue)]"
    : "block py-4 transition-colors hover:text-[var(--v2-blue)]";
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onNavigate}>
      {body}
      <span className="sr-only">（別サイトが開きます）</span>
    </a>
  ) : (
    <Link href={link.href} className={cls} onClick={onNavigate}>
      {body}
    </Link>
  );
}

function ArrowDot() {
  return (
    <span aria-hidden className="grid h-5 w-5 place-items-center rounded-full bg-[var(--v2-blue)] text-white">
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1.5 5h7M5.5 2l3 3-3 3" />
      </svg>
    </span>
  );
}

// ─── モバイルメニュー ───────────────────────────────────────────────────────

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const groups = [...PRIMARY_NAV, ...SECONDARY_NAV];
  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="メニュー"
      data-lenis-prevent
      className="v2 fixed inset-0 z-[60] overflow-y-auto lg:hidden"
      style={{ background: "var(--v2-bg)" }}
      initial={{ clipPath: "circle(0% at calc(100% - 36px) 32px)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 36px) 32px)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 36px) 32px)" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" onClick={onClose} className="text-[17px]" aria-label="株式会社サイプレス トップページ">
          <Logo />
        </Link>
        <button type="button" aria-label="メニューを閉じる" onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-white">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>
      </div>
      <nav aria-label="メインメニュー" className="px-4 pb-10 pt-4">
        <ul>
          {groups.map((g) => {
            const links = g.menu?.cards ?? g.menu?.links;
            const expanded = open === g.key;
            return (
              <li key={g.key} style={{ borderBottom: "1px solid var(--v2-line)" }}>
                <div className="flex items-center justify-between">
                  <Link href={g.href} onClick={onClose} className="flex-1 py-4">
                    <span className="v2-display block text-[30px]">{g.label}</span>
                    <span className="mt-1 block text-[12px] font-semibold text-[var(--v2-blue)]">{g.ja}</span>
                  </Link>
                  {links && (
                    <button
                      type="button"
                      aria-label={`${g.ja}のメニューを${expanded ? "閉じる" : "開く"}`}
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : g.key)}
                      className="grid h-9 w-9 place-items-center rounded-full text-white transition-transform duration-300"
                      style={{ background: "var(--v2-blue)", transform: expanded ? "rotate(45deg)" : "none" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </button>
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {links && expanded && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden pb-3"
                    >
                      {[...links, ...(g.menu?.extra?.links ?? [])].map((l) => (
                        <li key={l.href}>
                          {l.external ? (
                            <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className="block py-2 pl-1 text-[15px] font-semibold">
                              {l.label} <span aria-hidden>↗</span>
                            </a>
                          ) : (
                            <Link href={l.href} onClick={onClose} className="block py-2 pl-1 text-[15px] font-semibold">
                              {l.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
        <Link
          href={CONTACT_LINK.href}
          onClick={onClose}
          className="mt-8 flex items-center justify-between rounded-2xl px-6 py-5 text-white"
          style={{ background: "var(--v2-blue)" }}
        >
          <span>
            <span className="v2-display block text-[28px]">Contact</span>
            <span className="mt-1 block text-[13px] font-semibold">お問い合わせ・ご相談（無料）</span>
          </span>
          <span aria-hidden className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--v2-blue)]">
            →
          </span>
        </Link>
      </nav>
    </motion.div>
  );
}
