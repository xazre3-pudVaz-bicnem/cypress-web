import Reveal from "@/components/ui/Reveal";

export type Step = { title: string; body: string };

/**
 * 手順の一覧。1ステップの説明は1文に収める。
 * 4ステップまでは横一列、5ステップ以上は列が狭くなりすぎるので縦のタイムラインにする。
 */
export default function Steps({ steps, dark = false }: { steps: Step[]; dark?: boolean }) {
  if (steps.length >= 5) return <StepTimeline steps={steps} dark={dark} />;
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 0.06}
          className={`relative rounded-3xl p-7 ${dark ? "border border-white/10 bg-white/[0.04]" : "border border-line bg-white"}`}
        >
          <div className="flex items-center gap-3">
            <StepNumber index={i} dark={dark} />
            <span aria-hidden="true" className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-line"}`} />
          </div>
          <h3 className={`mt-6 text-[18px] font-bold leading-snug ${dark ? "!text-white" : ""}`}>{s.title}</h3>
          <p className={`phrase mt-2 text-[14px] leading-[1.85] ${dark ? "text-white/65" : "text-muted"}`}>{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}

function StepNumber({ index, dark }: { index: number; dark: boolean }) {
  return (
    <span
      className={`t-num relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold ${
        dark ? "bg-cyan/15 text-cyan" : "bg-accent text-white"
      }`}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function StepTimeline({ steps, dark }: { steps: Step[]; dark: boolean }) {
  return (
    <ol className={`overflow-hidden rounded-3xl ${dark ? "border border-white/10" : "border border-line bg-white"}`}>
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          delay={i * 0.05}
          className={`relative grid gap-3 px-6 py-6 md:grid-cols-[56px_minmax(0,240px)_minmax(0,1fr)] md:items-center md:gap-8 md:px-10 ${
            i > 0 ? (dark ? "border-t border-white/10" : "border-t border-line") : ""
          }`}
        >
          <StepNumber index={i} dark={dark} />
          <h3 className={`text-[18px] font-bold leading-snug ${dark ? "!text-white" : ""}`}>{s.title}</h3>
          <p className={`phrase text-[14.5px] leading-[1.85] ${dark ? "text-white/65" : "text-muted"}`}>{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
