import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark";
import { ExternalIcon } from "@/components/ui/Button";
import { COMPANY, COMPANY_ADDRESS_WITH_POSTAL } from "@/lib/company";
import { CONTACT_EMAIL, CONTACT_HOURS, CONTACT_MAILTO, CONTACT_TEL, CONTACT_TEL_HREF } from "@/lib/contact";
import {
  BUSINESS_LINKS,
  COMPANY_LINKS,
  FOOTER_SITEMAP,
  KNOWLEDGE_LINKS,
  PARTNER_LINKS,
  RECRUIT_LINKS,
  SERVICE_SUMMARIES,
  type NavLink,
} from "@/lib/navigation";

const COLUMNS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "サービス",
    links: [
      ...SERVICE_SUMMARIES.map((s) => ({ href: s.href, label: s.name })),
      { href: "/pricing/web-growth-package", label: "料金プラン" },
      { href: "/cases", label: "支援事例" },
    ],
  },
  { heading: "事業内容", links: BUSINESS_LINKS.map(({ href, label, external }) => ({ href, label, external })) },
  { heading: "会社情報", links: [...COMPANY_LINKS, { href: "/contact", label: "お問い合わせ" }] },
  { heading: "ナレッジ", links: KNOWLEDGE_LINKS.slice(0, 8) },
  { heading: "採用・パートナー", links: [...RECRUIT_LINKS, ...PARTNER_LINKS] },
];

function FooterLink({ link, small = false }: { link: NavLink; small?: boolean }) {
  const className = `inline-flex items-center gap-1.5 transition-colors hover:text-white ${
    small ? "text-[12.5px] text-white/55" : "text-[14px] text-white/70"
  }`;
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label}
      <ExternalIcon className="h-3 w-3" />
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function SitemapGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
      {FOOTER_SITEMAP.map((group) => (
        <div key={group.heading}>
          <p className="mb-3 text-[12px] font-bold text-white/80">{group.heading}</p>
          <ul className="space-y-2">
            {group.links.map((l) => (
              <li key={l.href}>
                <FooterLink link={l} small />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white">
      {/* 上端のライン（ロゴの紺→シアン） */}
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-accent-bright/60 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 sm:px-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.3fr)] lg:gap-16">
          {/* Brand + contact */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="株式会社サイプレス トップページ">
              <LogoMark tone="dark" className="h-9 w-9" />
              <span className="flex flex-col leading-none">
                <span className="font-en text-[22px] font-semibold tracking-[-0.01em]">Cypress</span>
                <span className="mt-1 text-[10px] tracking-[0.12em] text-white/55">株式会社サイプレス</span>
              </span>
            </Link>
            <p className="mt-6 text-[15px] font-bold leading-relaxed">選ばれる理由を、Webでつくる。</p>
            <address className="mt-6 space-y-3 text-[13.5px] not-italic leading-relaxed text-white/65">
              <p>
                {COMPANY_ADDRESS_WITH_POSTAL}
                <br />
                <span className="text-white/45">最寄り駅：{COMPANY.nearestStation}</span>
              </p>
              <p>
                <a href={CONTACT_TEL_HREF} className="font-en text-[16px] font-semibold text-white hover:text-cyan">
                  {CONTACT_TEL}
                </a>
                <span className="ml-2 text-white/45">{CONTACT_HOURS}</span>
              </p>
              <p>
                <a href={CONTACT_MAILTO} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </address>
          </div>

          {/* Main navigation */}
          <nav aria-label="フッターメニュー" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-[12px] font-bold tracking-[0.08em] text-cyan">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <FooterLink link={l} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Sitemap — 検索流入の入口ページへの内部リンク。モバイルでは折りたたむ */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="hidden md:block">
            <p className="eyebrow mb-6 text-[11px] text-white/45">Sitemap</p>
            <SitemapGrid />
          </div>
          <details className="group md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between py-1 [&::-webkit-details-marker]:hidden">
              <span className="eyebrow text-[11px] text-white/45">Sitemap</span>
              <svg viewBox="0 0 12 12" className="h-3 w-3 text-white/60 transition-transform group-open:rotate-45" aria-hidden="true">
                <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="mt-6">
              <SitemapGrid />
            </div>
          </details>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-en">© 2026 Cypress Inc.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="/sitemap" className="hover:text-white">
              サイトマップ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
