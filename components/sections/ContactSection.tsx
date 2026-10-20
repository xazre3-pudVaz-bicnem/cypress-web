import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="border border-[#E2E8F0] rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <AnimatedSection>
            <span className="text-[11px] font-mono tracking-[0.22em] text-[#3B82F6] uppercase block mb-3">
              Contact
            </span>
            <h2
              className="font-bold text-[#0F172A] leading-[1.2] tracking-[-0.01em] mb-3"
              style={{ fontSize: "clamp(22px, 2.8vw, 32px)" }}
            >
              お気軽にご相談ください
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-md">
              サービスのご相談、採用に関するお問い合わせなど、
              まずはお気軽にご連絡ください。
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#2563EB] text-white text-sm font-medium rounded-full hover:bg-[#1D4ED8] transition-colors"
            >
              お問い合わせフォームへ
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M1 6.5h11M6.5 1l5.5 5.5-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
