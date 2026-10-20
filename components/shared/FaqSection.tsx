import { Container } from "@/components/ui/Section";

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  heading?: string;
  /** 旧ページ互換。白以外を渡すと薄いグレーの背景になる */
  bgColor?: string;
  /** 最初から並べる件数。残りは「すべての質問を見る」の中にまとめる */
  initialCount?: number;
}

function Item({ item }: { item: FaqItem }) {
  return (
    <details className="group border-b border-line">
      <summary className="flex cursor-pointer list-none items-start gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
        <span className="font-en mt-0.5 text-[15px] font-semibold text-accent" aria-hidden="true">
          Q
        </span>
        <span className="flex-1 text-[15.5px] font-bold leading-relaxed text-ink">{item.q}</span>
        <span
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          <svg viewBox="0 0 12 12" className="h-3 w-3">
            <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="flex gap-4 pb-6 pr-11">
        <span className="font-en mt-0.5 text-[15px] font-semibold text-subtle" aria-hidden="true">
          A
        </span>
        <p className="flex-1 text-[15px] leading-[1.9] text-ink-2 [overflow-wrap:anywhere]">{item.a}</p>
      </div>
    </details>
  );
}

/**
 * よくある質問。回答は折りたたんでいても常にHTMLに含める（検索エンジン・AIが読めるように）。
 * 構造化データ（FAQPage）は重複を避けるため、ここでは出力せず各ページ側で持つ。
 */
export default function FaqSection({ items, heading = "よくある質問", bgColor = "#FFFFFF", initialCount = 8 }: Props) {
  const white = ["#fff", "#ffffff", "white"].includes(bgColor.toLowerCase());
  const first = items.slice(0, initialCount);
  const rest = items.slice(initialCount);

  return (
    <section className={`py-20 md:py-28 ${white ? "bg-white" : "bg-surface"}`}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <p className="eyebrow mb-4 text-accent">FAQ</p>
            <h2 className="text-[26px] font-bold leading-snug md:text-[32px]">{heading}</h2>
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              ここにない内容は、お問い合わせフォームやAIチャットからお気軽にどうぞ。
            </p>
          </div>
          <div className="border-t border-line">
            {first.map((item, i) => (
              <Item key={i} item={item} />
            ))}
            {rest.length > 0 && (
              <details className="group/more">
                <summary className="flex cursor-pointer list-none items-center justify-center gap-2 py-5 text-[14px] font-semibold text-accent [&::-webkit-details-marker]:hidden">
                  <span className="group-open/more:hidden">すべての質問を見る（残り{rest.length}件）</span>
                  <span className="hidden group-open/more:inline">質問を閉じる</span>
                </summary>
                <div className="border-t border-line">
                  {rest.map((item, i) => (
                    <Item key={i} item={item} />
                  ))}
                </div>
              </details>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
