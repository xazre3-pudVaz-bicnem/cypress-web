import type { ReactNode } from "react";

type Tone = "white" | "surface" | "dark";

const TONE: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  dark: "bg-navy-900 text-white",
};

/** ページ共通の横幅。本文の行長が長くなりすぎないよう、文章ブロックは別途 max-w を付ける。 */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  tone = "white",
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 md:py-28 ${TONE[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * セクション見出し。英字ラベル + 見出し + 一行の補足まで。
 * 補足は2行を超えない長さにする（読ませる文章は本文側に置く）。
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  dark = false,
  as: Tag = "h2",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: "left" | "center";
  dark?: boolean;
  as?: "h1" | "h2";
  action?: ReactNode;
}) {
  const center = align === "center";
  return (
    <div
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={center ? "max-w-3xl" : "max-w-3xl"}>
        <p className={`eyebrow mb-4 ${dark ? "text-cyan" : "text-accent"}`}>{eyebrow}</p>
        <Tag id={id} className={`${Tag === "h1" ? "t-h1" : "t-h2"} ${dark ? "!text-white" : ""}`}>
          {title}
        </Tag>
        {lead && (
          <p className={`t-lead mt-5 ${dark ? "text-white/70" : "text-muted"} ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
            {lead}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
