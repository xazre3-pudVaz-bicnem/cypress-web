import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

const FACTS = [
  { label: "初回相談", value: "無料" },
  { label: "拠点", value: "葛飾区亀有" },
  { label: "対応エリア", value: "全国オンライン" },
  { label: "支援領域", value: "6サービス" },
];

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <Image
        src="/images/brand/hero-diamond.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="anim-hero-zoom -z-20 object-cover object-[76%_35%] md:object-[70%_50%]"
      />
      {/* 文字の可読性を保つため、左側と下端を濃紺に落とす */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/10 md:bg-gradient-to-r md:from-navy-900 md:via-navy-900/75 md:to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-navy-900 to-transparent" />

      <Container className="flex min-h-[100svh] flex-col justify-end pb-12 pt-36 md:min-h-[860px] md:justify-center md:pb-16 md:pt-40">
        <p className="eyebrow anim-fade-up text-cyan">Web Marketing — Kameari, Tokyo</p>
        <h1 className="t-display anim-rise mt-6 !text-white">
          選ばれる理由を、
          <br />
          Webでつくる。
        </h1>
        <p
          className="hero-description t-lead anim-fade-up mt-8 max-w-xl text-white/75"
          style={{ animationDelay: "0.15s" }}
        >
          東京・葛飾区亀有のWebマーケティング会社です。MEO・SEO・AIO対策とホームページ制作で、中小企業の集客を設計から運用まで支援します。
        </p>
        <div className="anim-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.25s" }}>
          <ButtonLink href="/contact" size="lg">
            無料で相談する
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost-light" size="lg">
            サービスを見る
          </ButtonLink>
        </div>

        <dl
          className="anim-fade-up mt-16 grid max-w-3xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:grid-cols-4"
          style={{ animationDelay: "0.35s" }}
        >
          {FACTS.map((f, i) => (
            <div
              key={f.label}
              className={`px-5 py-4 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""} ${
                i === 2 ? "sm:border-l" : ""
              }`}
            >
              <dt className="text-[11px] tracking-[0.12em] text-white/50">{f.label}</dt>
              <dd className="mt-1 text-[16px] font-bold text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
