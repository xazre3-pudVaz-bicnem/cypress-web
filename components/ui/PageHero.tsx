import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Section";

/**
 * 下層ページのヒーロー。左に見出し、右に画像（任意）を置く。
 * ヘッダーが固定表示なので、上の余白はヘッダーの高さ（72px）を含めている。
 */
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  catchCopy,
  lead,
  children,
  image,
  imageAlt = "",
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: ReactNode;
  /** h1の下に置く大きめの一文 */
  catchCopy?: ReactNode;
  lead?: ReactNode;
  /** 要点リストやボタン */
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-[112px] md:pb-24 md:pt-[136px]">
      {/* 上部のごく薄い光（ロゴのシアン） */}
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-0 h-[520px] w-[520px] rounded-full bg-cyan/20 blur-[120px]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-surface to-transparent" />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <div className={`grid items-center gap-12 ${image ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16" : ""}`}>
          <div className={image ? "" : "max-w-3xl"}>
            <p className="eyebrow anim-fade-up mb-5 text-accent">{eyebrow}</p>
            <h1 className="t-h1 anim-rise">{title}</h1>
            {catchCopy && (
              <p className="anim-fade-up mt-6 text-[20px] font-bold leading-snug text-ink md:text-[24px]" style={{ animationDelay: "0.08s" }}>
                {catchCopy}
              </p>
            )}
            {lead && (
              <p className="t-lead anim-fade-up mt-5 max-w-2xl text-muted" style={{ animationDelay: "0.14s" }}>
                {lead}
              </p>
            )}
            {children && (
              <div className="anim-fade-up mt-8" style={{ animationDelay: "0.2s" }}>
                {children}
              </div>
            )}
          </div>
          {image && (
            <div className="anim-fade-up relative" style={{ animationDelay: "0.1s" }}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-navy-900 shadow-[0_40px_80px_-40px_rgba(6,20,42,0.6)]">
                <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/** ヒーロー内の要点リスト */
export function HeroPoints({ points }: { points: readonly string[] }) {
  return (
    <ul className="grid gap-2.5">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-ink-2">
          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-accent" />
          {p}
        </li>
      ))}
    </ul>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path d="m5 8.2 2 2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
