"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const BUBBLES = [
  { label: "Contact", title: "お問い合わせ", text: ["まずはお気軽に", "ご相談ください。"], href: "/contact", tone: "glass" },
  { label: "Pricing", title: "料金の目安", text: ["MEO・SEO・制作費の", "目安をご覧いただけます。"], href: "/cost", tone: "glass" },
  { label: "Career", title: "採用情報", text: [], href: "/recruit", tone: "white" },
] as const;

/**
 * 最後の行動喚起（参考サイトの Get In Touch にあたる）。
 * 輪郭だけの巨大な文字が画面に入ると白く塗られ、光るマークの前にガラスの丸ボタンが並ぶ。
 */
export default function HomeContact() {
  return (
    <section aria-labelledby="home-contact-title" className="relative overflow-hidden text-white" style={{ background: "var(--v2-blue)" }}>
      <div className="relative mx-auto max-w-[1440px] px-[var(--v2-gutter)] pb-24 pt-24 md:min-h-[125svh] md:pb-0 md:pt-[14vh]">
        {/* 光るマーク（ゆっくり上下に漂う） */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[6%] w-[min(78vw,560px)] -translate-x-[62%] md:top-[4%]"
          initial={{ opacity: 0, y: 80, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <div className="cy-float" data-motion-loop>
            <Image src="/images/v2/mark-3d-large.png" alt="" width={900} height={900} sizes="560px" className="h-auto w-full drop-shadow-[0_40px_60px_rgba(3,40,92,0.35)]" />
          </div>
        </motion.div>

        <h2 id="home-contact-title" className="v2-display relative z-10 mt-[22vw] text-[clamp(56px,13.4vw,232px)] leading-[0.9] md:mt-[16vh]">
          <motion.span
            className="block whitespace-nowrap"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.55)" }}
            initial={{ color: "rgba(255,255,255,0)" }}
            whileInView={{ color: "rgba(255,255,255,1)" }}
            viewport={{ once: true, margin: "0px 0px -35% 0px" }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            Get In Touch
          </motion.span>
          <span className="sr-only">お問い合わせ</span>
        </h2>

        <div className="relative z-20 mt-10 grid gap-4 md:mt-[-3vw] md:block md:h-[52vw] md:max-h-[640px]">
          {BUBBLES.map((b, i) => (
            <motion.div
              key={b.href}
              className={`md:absolute ${i === 0 ? "md:left-[24%] md:top-0" : i === 1 ? "md:left-[44%] md:top-[9%]" : "md:left-[33%] md:top-[44%]"}`}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.12 }}
            >
              <Link
                href={b.href}
                className={`group flex items-center justify-between gap-4 rounded-[18px] px-6 py-5 transition-transform duration-500 md:aspect-square md:w-[clamp(220px,19vw,290px)] md:flex-col md:justify-center md:gap-0 md:rounded-full md:px-6 md:py-0 md:text-center md:hover:scale-[1.04] ${
                  b.tone === "white" ? "bg-white text-[var(--v2-ink)]" : "border border-white/40 bg-white/20 text-white backdrop-blur-md"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                <span>
                  <span className="v2-display block text-[12px] opacity-80">{b.label}</span>
                  <span className="mt-1 block text-[clamp(22px,2.2vw,32px)] font-bold tracking-[0.04em]">{b.title}</span>
                  {b.text.length > 0 && (
                    <span className="mt-2 block text-[12px] font-semibold leading-[1.8] opacity-90">
                      {b.text.map((t) => (
                        <span key={t} className="md:block">
                          {t}
                        </span>
                      ))}
                    </span>
                  )}
                </span>
                <span
                  aria-hidden
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:translate-x-1 md:mt-5 ${
                    b.tone === "white" ? "bg-[var(--v2-blue)] text-white" : "bg-white text-[var(--v2-blue)]"
                  }`}
                >
                  <svg width="11" height="11" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 5h7M5.5 2l3 3-3 3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
          <p className="text-[13px] font-semibold leading-[2] md:absolute md:right-0 md:top-[30%] md:w-[24em] md:text-[14px]">
            MEO・SEO・AIO対策、ホームページ制作、SNS運用まで。
            <br className="hidden md:block" />
            Web集客のことは、地域の状況とあわせてご相談ください。初回のご相談は無料です。
          </p>
        </div>
      </div>
    </section>
  );
}
