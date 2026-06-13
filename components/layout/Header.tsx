"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Navigation data ────────────────────────────────────────────────────────

const COMPANY_MENU: { href: string; label: string }[] = [
  { href: "/company/message", label: "代表挨拶" },
  { href: "/company/philosophy", label: "企業理念" },
  { href: "/company/profile", label: "会社概要" },
  { href: "/company/history", label: "沿革" },
  { href: "/company/area", label: "対応エリア" },
];

const SERVICES_MENU: { href: string; label: string }[] = [
  { href: "/services/meo", label: "MEO対策" },
  { href: "/services/seo", label: "SEO対策" },
  { href: "/services/aio", label: "AIO対策" },
  { href: "/services/web-design", label: "ホームページ制作" },
  { href: "/services/sns", label: "SNS運用" },
  { href: "/services/ai", label: "AI活用支援" },
];

const KNOWLEDGE_LEFT: { href: string; label: string }[] = [
  { href: "/seo", label: "SEO対策" },
  { href: "/meo", label: "MEO対策" },
  { href: "/aio", label: "AIO対策" },
  { href: "/ai", label: "AI活用" },
];

const KNOWLEDGE_RIGHT: { href: string; label: string }[] = [
  { href: "/web-design", label: "Web制作" },
  { href: "/sns", label: "SNS運用" },
  { href: "/industries", label: "業種別対応" },
  { href: "/area", label: "対応エリア" },
];

// ─── Types ──────────────────────────────────────────────────────────────────

type DropdownKey = "company" | "services" | "knowledge";

// ─── Chevron icon ────────────────────────────────────────────────────────────

function ChevronDown() {
  return (
    <svg className="w-3 h-3 mt-px shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// ─── Dropdown link ───────────────────────────────────────────────────────────

function DropLink({ href, label, last = false }: { href: string; label: string; last?: boolean }) {
  return (
    <Link
      href={href}
      className="block px-5 py-2.5 text-[13px] hover:bg-[#f8f6f2] transition-colors"
      style={{
        color: "#374151",
        borderBottom: last ? "none" : "1px solid #f0ede8",
        fontFamily: "var(--font-sans)",
      }}
    >
      {label}
    </Link>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function Header() {
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (key: DropdownKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(key);
  };

  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpenMenu(null), 180);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* ── Desktop header ─────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #ece8e0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/logo.jpg"
                alt="株式会社サイプレス"
                width={140}
                height={36}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {/* 会社情報 */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("company")}
                onMouseLeave={handleLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[13px] transition-colors"
                  style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
                >
                  会社情報
                  <ChevronDown />
                </button>
                {openMenu === "company" && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => handleEnter("company")}
                    onMouseLeave={handleLeave}
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #ece8e0",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        minWidth: "180px",
                      }}
                    >
                      {COMPANY_MENU.map((l, i) => (
                        <DropLink
                          key={l.href}
                          href={l.href}
                          label={l.label}
                          last={i === COMPANY_MENU.length - 1}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 事業内容 */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("services")}
                onMouseLeave={handleLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[13px] transition-colors"
                  style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
                >
                  事業内容
                  <ChevronDown />
                </button>
                {openMenu === "services" && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => handleEnter("services")}
                    onMouseLeave={handleLeave}
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #ece8e0",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        minWidth: "180px",
                      }}
                    >
                      {SERVICES_MENU.map((l, i) => (
                        <DropLink
                          key={l.href}
                          href={l.href}
                          label={l.label}
                          last={i === SERVICES_MENU.length - 1}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 専門知識 — 2-column */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("knowledge")}
                onMouseLeave={handleLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[13px] transition-colors"
                  style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
                >
                  専門知識
                  <ChevronDown />
                </button>
                {openMenu === "knowledge" && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    style={{ transform: "translateX(-40px)" }}
                    onMouseEnter={() => handleEnter("knowledge")}
                    onMouseLeave={handleLeave}
                  >
                    <div
                      style={{
                        background: "#ffffff",
                        border: "1px solid #ece8e0",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                        minWidth: "320px",
                      }}
                    >
                      <div className="grid grid-cols-2">
                        {/* Left column */}
                        <div style={{ borderRight: "1px solid #f0ede8" }}>
                          {KNOWLEDGE_LEFT.map((l, i) => (
                            <DropLink
                              key={l.href}
                              href={l.href}
                              label={l.label}
                              last={i === KNOWLEDGE_LEFT.length - 1}
                            />
                          ))}
                        </div>
                        {/* Right column */}
                        <div>
                          {KNOWLEDGE_RIGHT.map((l, i) => (
                            <DropLink
                              key={l.href}
                              href={l.href}
                              label={l.label}
                              last={i === KNOWLEDGE_RIGHT.length - 1}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/recruit"
                className="px-4 py-2 text-[13px] transition-colors hover:opacity-70"
                style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
              >
                採用情報
              </Link>
              <Link
                href="/column"
                className="px-4 py-2 text-[13px] transition-colors hover:opacity-70"
                style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
              >
                コラム
              </Link>
              <Link
                href="/news"
                className="px-4 py-2 text-[13px] transition-colors hover:opacity-70"
                style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
              >
                お知らせ
              </Link>
            </nav>

            {/* お問い合わせ button */}
            <div className="hidden lg:block ml-4">
              <Link
                href="/contact"
                className="px-5 py-2 text-[13px] font-medium transition-all hover:bg-[#1a2332] hover:text-white"
                style={{
                  border: "1px solid #1a2332",
                  color: "#1a2332",
                  fontFamily: "var(--font-sans)",
                }}
              >
                お問い合わせ
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <svg
                className="w-5 h-5"
                style={{ color: "#1a2332" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so page content doesn't sit under the fixed header */}
      <div className="h-16" />

      {/* ── Mobile drawer (full-screen) ──────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            background: "#ffffff",
            overflowY: "auto",
          }}
        >
          {/* Drawer header */}
          <div
            className="flex items-center justify-between px-6 h-16"
            style={{ borderBottom: "1px solid #ece8e0" }}
          >
            <Link href="/" onClick={closeMobile}>
              <Image
                src="/logo.jpg"
                alt="株式会社サイプレス"
                width={120}
                height={30}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <button onClick={closeMobile} aria-label="メニューを閉じる" className="p-2">
              <svg
                className="w-5 h-5"
                style={{ color: "#1a2332" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer body */}
          <div className="px-6 py-4">
            {/* 会社情報 accordion */}
            <div style={{ borderBottom: "1px solid #f0ede8" }}>
              <button
                className="w-full flex items-center justify-between py-4 text-[14px] font-medium"
                style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
                onClick={() => toggleDropdown("company")}
              >
                会社情報
                <svg
                  className="w-4 h-4 transition-transform"
                  style={{
                    color: "#9ca3af",
                    transform: openDropdown === "company" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openDropdown === "company" && (
                <div className="pb-3 pl-4">
                  {COMPANY_MENU.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={closeMobile}
                      className="block py-2.5 text-[13px]"
                      style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 事業内容 accordion */}
            <div style={{ borderBottom: "1px solid #f0ede8" }}>
              <button
                className="w-full flex items-center justify-between py-4 text-[14px] font-medium"
                style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
                onClick={() => toggleDropdown("services")}
              >
                事業内容
                <svg
                  className="w-4 h-4 transition-transform"
                  style={{
                    color: "#9ca3af",
                    transform: openDropdown === "services" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openDropdown === "services" && (
                <div className="pb-3 pl-4">
                  {SERVICES_MENU.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={closeMobile}
                      className="block py-2.5 text-[13px]"
                      style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 専門知識 accordion */}
            <div style={{ borderBottom: "1px solid #f0ede8" }}>
              <button
                className="w-full flex items-center justify-between py-4 text-[14px] font-medium"
                style={{ color: "#1a2332", fontFamily: "var(--font-sans)" }}
                onClick={() => toggleDropdown("knowledge")}
              >
                専門知識
                <svg
                  className="w-4 h-4 transition-transform"
                  style={{
                    color: "#9ca3af",
                    transform: openDropdown === "knowledge" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openDropdown === "knowledge" && (
                <div className="pb-3 pl-4">
                  {[...KNOWLEDGE_LEFT, ...KNOWLEDGE_RIGHT].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={closeMobile}
                      className="block py-2.5 text-[13px]"
                      style={{ color: "#4b5563", fontFamily: "var(--font-sans)" }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct links */}
            {[
              { href: "/recruit", label: "採用情報" },
              { href: "/column", label: "コラム" },
              { href: "/news", label: "お知らせ" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMobile}
                className="block py-4 text-[14px] font-medium"
                style={{
                  color: "#1a2332",
                  borderBottom: "1px solid #f0ede8",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {l.label}
              </Link>
            ))}

            {/* お問い合わせ button */}
            <div className="mt-8 pb-8">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block w-full text-center py-3.5 text-[14px] font-medium transition-all hover:bg-[#1a2332] hover:text-white"
                style={{
                  border: "1px solid #1a2332",
                  color: "#1a2332",
                  fontFamily: "var(--font-sans)",
                }}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
