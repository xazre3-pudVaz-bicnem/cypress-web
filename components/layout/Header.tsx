"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const COMPANY_MENU = [
  { href: "/company", label: "会社情報トップ" },
  { href: "/company/message", label: "代表挨拶" },
  { href: "/company/philosophy", label: "企業理念" },
  { href: "/company/profile", label: "会社概要" },
  { href: "/company/history", label: "沿革" },
];

const SERVICES_MENU = [
  { href: "/services/meo", label: "MEO対策" },
  { href: "/services/seo", label: "SEO対策" },
  { href: "/services/aio", label: "AIO対策" },
  { href: "/services/web-design", label: "ホームページ制作" },
  { href: "/services/sns", label: "SNS運用" },
  { href: "/services/ai", label: "AI活用支援" },
];

const KNOWLEDGE_MENU = [
  {
    heading: "SEO対策",
    links: [
      { href: "/seo", label: "SEO対策とは" },
      { href: "/seo/internal-seo", label: "内部SEO" },
      { href: "/seo/content-seo", label: "コンテンツSEO" },
      { href: "/seo/technical-seo", label: "テクニカルSEO" },
      { href: "/seo/local-seo", label: "地域SEO" },
      { href: "/seo/external-seo", label: "外部SEO" },
    ],
  },
  {
    heading: "MEO対策",
    links: [
      { href: "/meo", label: "MEO対策とは" },
      { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール" },
      { href: "/meo/review-management", label: "口コミ対策" },
      { href: "/meo/ranking", label: "順位改善" },
      { href: "/meo/local-keyword", label: "地域キーワード" },
    ],
  },
  {
    heading: "AIO対策",
    links: [
      { href: "/aio", label: "AIO対策とは" },
      { href: "/aio/chatgpt", label: "ChatGPT対策" },
      { href: "/aio/generative-search", label: "生成AI検索" },
      { href: "/aio/structured-data", label: "構造化データ" },
      { href: "/aio/llm-optimization", label: "LLM最適化" },
    ],
  },
];

type MenuKey = "company" | "services" | "knowledge";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleEnter = (key: MenuKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(key);
  };
  const handleLeave = () => {
    timerRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #E8E4DC", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <span className="font-black text-[#0F172A] text-[15px] tracking-tight">
                株式会社サイプレス
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {/* 会社情報 */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("company")}
                onMouseLeave={handleLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors"
                >
                  会社情報
                  <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openMenu === "company" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleEnter("company")}
                      onMouseLeave={handleLeave}
                    >
                      <div style={{ background: "#fff", border: "1px solid #E8E4DC", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", minWidth: "180px" }}>
                        {COMPANY_MENU.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="block px-5 py-2.5 text-[13px] text-[#374151] hover:text-[#0F172A] hover:bg-[#F9F8F5] transition-colors"
                            style={{ borderBottom: "1px solid #F0EDE6" }}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 事業内容 */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("services")}
                onMouseLeave={handleLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors"
                >
                  事業内容
                  <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleEnter("services")}
                      onMouseLeave={handleLeave}
                    >
                      <div style={{ background: "#fff", border: "1px solid #E8E4DC", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", minWidth: "200px" }}>
                        {SERVICES_MENU.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="block px-5 py-2.5 text-[13px] text-[#374151] hover:text-[#0F172A] hover:bg-[#F9F8F5] transition-colors"
                            style={{ borderBottom: "1px solid #F0EDE6" }}
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 専門知識 */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("knowledge")}
                onMouseLeave={handleLeave}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors"
                >
                  専門知識
                  <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openMenu === "knowledge" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 -left-20"
                      onMouseEnter={() => handleEnter("knowledge")}
                      onMouseLeave={handleLeave}
                    >
                      <div style={{ background: "#fff", border: "1px solid #E8E4DC", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", minWidth: "560px" }}>
                        <div className="grid grid-cols-3 gap-0">
                          {KNOWLEDGE_MENU.map((cat, i) => (
                            <div
                              key={cat.heading}
                              className="p-5"
                              style={{ borderRight: i < KNOWLEDGE_MENU.length - 1 ? "1px solid #F0EDE6" : "none" }}
                            >
                              <p className="text-[11px] font-semibold text-[#9CA3AF] tracking-widest uppercase mb-3">
                                {cat.heading}
                              </p>
                              {cat.links.map((l) => (
                                <Link
                                  key={l.href}
                                  href={l.href}
                                  className="block py-1.5 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors"
                                >
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/recruit" className="px-4 py-2 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors">
                採用情報
              </Link>
              <Link href="/column" className="px-4 py-2 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors">
                コラム
              </Link>
              <Link href="/news" className="px-4 py-2 text-[13px] text-[#374151] hover:text-[#0F172A] transition-colors">
                お知らせ
              </Link>
            </nav>

            {/* Contact link */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-5 py-2 text-[13px] font-medium text-[#374151] hover:text-[#0F172A] transition-colors"
                style={{ border: "1px solid #D1C9BE" }}
              >
                お問い合わせ
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="メニュー"
            >
              <svg className="w-5 h-5 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              style={{ borderTop: "1px solid #E8E4DC", background: "#fff" }}
            >
              <div className="max-w-6xl mx-auto px-6 py-4">
                {/* 会社情報 accordion */}
                <div style={{ borderBottom: "1px solid #F0EDE6" }}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-[14px] font-medium text-[#0F172A]"
                    onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")}
                  >
                    会社情報
                    <svg className="w-4 h-4 text-[#9CA3AF] transition-transform" style={{ transform: mobileExpanded === "company" ? "rotate(180deg)" : "" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileExpanded === "company" && (
                    <div className="pb-3 pl-4">
                      {COMPANY_MENU.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[13px] text-[#4B5563]">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 事業内容 accordion */}
                <div style={{ borderBottom: "1px solid #F0EDE6" }}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-[14px] font-medium text-[#0F172A]"
                    onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                  >
                    事業内容
                    <svg className="w-4 h-4 text-[#9CA3AF] transition-transform" style={{ transform: mobileExpanded === "services" ? "rotate(180deg)" : "" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileExpanded === "services" && (
                    <div className="pb-3 pl-4">
                      {SERVICES_MENU.map((l) => (
                        <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[13px] text-[#4B5563]">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 専門知識 accordion */}
                <div style={{ borderBottom: "1px solid #F0EDE6" }}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-[14px] font-medium text-[#0F172A]"
                    onClick={() => setMobileExpanded(mobileExpanded === "knowledge" ? null : "knowledge")}
                  >
                    専門知識
                    <svg className="w-4 h-4 text-[#9CA3AF] transition-transform" style={{ transform: mobileExpanded === "knowledge" ? "rotate(180deg)" : "" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {mobileExpanded === "knowledge" && (
                    <div className="pb-3 pl-4">
                      {KNOWLEDGE_MENU.flatMap((cat) =>
                        cat.links.map((l) => (
                          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[13px] text-[#4B5563]">
                            {l.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {[
                  { href: "/recruit", label: "採用情報" },
                  { href: "/column", label: "コラム" },
                  { href: "/news", label: "お知らせ" },
                  { href: "/contact", label: "お問い合わせ" },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[14px] font-medium text-[#0F172A]"
                    style={{ borderBottom: "1px solid #F0EDE6" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="h-[60px]" />
    </>
  );
}
