"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/admin", label: "品質改善サマリー", en: "Overview" },
  { href: "/admin/conversations", label: "会話レビュー", en: "Human Review" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="管理メニュー" className="flex gap-1 md:flex-col">
      {ITEMS.map((item) => {
        const active = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-lg px-3 py-2 transition-colors ${
              active ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
            }`}
          >
            <span className="label-en hidden text-[9px] text-white/40 md:block">{item.en}</span>
            <span className="text-[13px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
