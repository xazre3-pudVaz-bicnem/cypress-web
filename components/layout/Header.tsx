"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/ui/LogoMark";
import { ArrowIcon, ExternalIcon, buttonClass } from "@/components/ui/Button";
import { CONTACT_MAILTO } from "@/lib/contact";
import {
  BUSINESS_LINKS,
  COMPANY_LINKS,
  KNOWLEDGE_LINKS,
  PARTNER_LINKS,
  RECRUIT_LINKS,
  SERVICE_SUMMARIES,
  SERVICE_SUPPORT_LINKS,
  type NavLink,
} from "@/lib/navigation";

type MenuKey = "services" | "business" | "company" | "knowledge" | "join";

const MENU_LABELS: Record<MenuKey, string> = {
  services: "サービス",
  business: "事業内容",
  company: "会社情報",
  knowledge: "ナレッジ",
  join: "採用・パートナー",
};

/** トップページは濃紺のヒーローに重ねるため、スクロールするまで透明にする。 */
const TRANSPARENT_PATHS = new Set(["/"]);

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  const className =
    "group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[14px] text-ink-2 transition-colors hover:bg-surface hover:text-ink";
  const body = (
    <>
      <span>
        <span className="block font-medium">{link.label}</span>
        {link.desc && <span className="mt-0.5 block text-[12px] text-muted">{link.desc}</span>}
      </span>
      {link.external ? (
        <ExternalIcon className="h-3.5 w-3.5 shrink-0 text-subtle group-hover:text-accent" />
      ) : (
        <ArrowIcon className="h-3.5 w-3.5 shrink-0 text-subtle opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
      )}
    </>
  );
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onNavigate}>
      {body}
    </a>
  ) : (
    <Link href={link.href} className={className} onClick={onNavigate}>
      {body}
    </Link>
  );
}

function MenuPanel({ menu, onNavigate }: { menu: MenuKey; onNavigate: () => void }) {
  if (menu === "services") {
    return (
      <div className="grid w-[760px] grid-cols-[1fr_220px] gap-2 p-3">
        <ul className="grid grid-cols-2 gap-1">
          {SERVICE_SUMMARIES.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                onClick={onNavigate}
                className="group block rounded-xl px-4 py-3 transition-colors hover:bg-surface"
              >
                <span className="eyebrow text-[10px] text-accent">{s.nameEn}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[15px] font-bold text-ink">
                  {s.name}
                  <ArrowIcon className="h-3.5 w-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
                <span className="mt-1 block text-[12.5px] leading-relaxed text-muted">{s.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="rounded-xl bg-surface p-2">
          <p className="eyebrow px-3 pb-1 pt-2 text-[10px] text-muted">Guide</p>
          {SERVICE_SUPPORT_LINKS.map((l) => (
            <MenuLink key={l.href} link={l} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    );
  }
  if (menu === "join") {
    return (
      <div className="grid w-[460px] grid-cols-2 gap-2 p-3">
        <div>
          <p className="eyebrow px-3 pb-1 pt-2 text-[10px] text-muted">Recruit</p>
          {RECRUIT_LINKS.map((l) => (
            <MenuLink key={l.href} link={l} onNavigate={onNavigate} />
          ))}
        </div>
        <div>
          <p className="eyebrow px-3 pb-1 pt-2 text-[10px] text-muted">Partner</p>
          {PARTNER_LINKS.map((l) => (
            <MenuLink key={l.href} link={l} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    );
  }
  const links = menu === "business" ? BUSINESS_LINKS : menu === "company" ? COMPANY_LINKS : KNOWLEDGE_LINKS;
  return (
    <div className={`p-3 ${menu === "knowledge" ? "grid w-[440px] grid-cols-2 gap-x-1" : "w-[300px]"}`}>
      {links.map((l) => (
        <MenuLink key={l.href} link={l} onNavigate={onNavigate} />
      ))}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const transparentCapable = TRANSPARENT_PATHS.has(pathname);
  const solid = !transparentCapable || scrolled || openMenu !== null || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ遷移したらメニューを閉じる（ブラウザの戻る・進むも含む）。
  // エフェクトではなく描画中にパスの変化を検知して戻す（React推奨のパターン）。
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // モバイルメニューを開いている間は背面をスクロールさせない
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const enter = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  };
  const close = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const textTone = solid ? "text-ink-2 hover:text-ink" : "text-white/85 hover:text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          solid
            ? "border-b border-line/80 bg-white/90 shadow-[0_1px_0_rgba(11,18,32,0.02)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="株式会社サイプレス トップページ">
            <LogoMark tone={solid ? "light" : "dark"} className="h-8 w-8" />
            <span className="flex flex-col leading-none">
              <span className={`font-en text-[20px] font-semibold tracking-[-0.01em] ${solid ? "text-ink" : "text-white"}`}>
                Cypress
              </span>
              <span className={`mt-1 text-[10px] tracking-[0.12em] ${solid ? "text-muted" : "text-white/60"}`}>
                株式会社サイプレス
              </span>
            </span>
          </Link>

          <nav aria-label="メインメニュー" className="hidden items-center lg:flex">
            {(Object.keys(MENU_LABELS) as MenuKey[]).map((key) => {
              const open = openMenu === key;
              return (
                <div key={key} className="relative" onMouseEnter={() => enter(key)} onMouseLeave={leave}>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(open ? null : key)}
                    className={`flex h-[72px] items-center gap-1.5 px-3.5 text-[14px] font-medium transition-colors xl:px-4 ${textTone}`}
                  >
                    {MENU_LABELS[key]}
                    <Chevron open={open} />
                  </button>
                  <div
                    className={`absolute top-full pt-1 transition-all duration-300 ease-out-expo ${
                      key === "services" ? "left-0" : key === "join" ? "right-0" : "left-1/2 -translate-x-1/2"
                    } ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-20px_rgba(11,18,32,0.35)]">
                      <MenuPanel menu={key} onNavigate={close} />
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className={`${buttonClass("primary", "md")} hidden sm:inline-flex`}>
              無料相談
            </Link>
            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                solid ? "text-ink ring-1 ring-inset ring-line" : "text-white ring-1 ring-inset ring-white/30"
              }`}
              aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="relative block h-3 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                    mobileOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                    mobileOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        inert={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain px-5 pb-8 pt-[88px]">
          <nav aria-label="メインメニュー（モバイル）" className="divide-y divide-line border-y border-line">
            <MobileGroup title="サービス">
              {SERVICE_SUMMARIES.map((s) => (
                <MobileLink key={s.slug} link={{ href: s.href, label: s.name, desc: s.summary }} onNavigate={close} />
              ))}
              {SERVICE_SUPPORT_LINKS.map((l) => (
                <MobileLink key={l.href} link={l} onNavigate={close} />
              ))}
            </MobileGroup>
            <MobileGroup title="事業内容">
              {BUSINESS_LINKS.map((l) => (
                <MobileLink key={l.href} link={l} onNavigate={close} />
              ))}
            </MobileGroup>
            <MobileGroup title="会社情報">
              {COMPANY_LINKS.map((l) => (
                <MobileLink key={l.href} link={l} onNavigate={close} />
              ))}
            </MobileGroup>
            <MobileGroup title="ナレッジ">
              {KNOWLEDGE_LINKS.map((l) => (
                <MobileLink key={l.href} link={l} onNavigate={close} />
              ))}
            </MobileGroup>
            <MobileGroup title="採用・パートナー">
              {[...RECRUIT_LINKS, ...PARTNER_LINKS].map((l) => (
                <MobileLink key={l.href} link={l} onNavigate={close} />
              ))}
            </MobileGroup>
          </nav>
          <div className="mt-8 grid gap-3">
            <Link href="/contact" onClick={close} className={buttonClass("primary", "lg")}>
              無料で相談する
              <ArrowIcon />
            </Link>
            <a href={CONTACT_MAILTO} className={buttonClass("secondary", "lg")}>
              メールで相談する
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-bold text-ink [&::-webkit-details-marker]:hidden">
        {title}
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-300 group-open:rotate-45">
          <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
            <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );
}

function MobileLink({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  const className = "flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-[15px] text-ink-2 active:bg-surface";
  const body = (
    <>
      <span>
        <span className="block font-medium">{link.label}</span>
        {link.desc && <span className="mt-0.5 block text-[12px] text-muted">{link.desc}</span>}
      </span>
      {link.external ? <ExternalIcon className="h-3.5 w-3.5 text-subtle" /> : <ArrowIcon className="h-3.5 w-3.5 text-subtle" />}
    </>
  );
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onNavigate}>
      {body}
    </a>
  ) : (
    <Link href={link.href} className={className} onClick={onNavigate}>
      {body}
    </Link>
  );
}
