import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";

const PROBLEMS = [
  { title: "問い合わせが増えない", solution: "導線設計・SEO", href: "/problems/no-inquiries" },
  { title: "Googleマップで上位に出ない", solution: "MEO対策", href: "/problems/map-ranking-low" },
  { title: "検索順位が上がらない", solution: "SEO対策", href: "/problems/poor-seo-ranking" },
  { title: "ChatGPTに自社が出てこない", solution: "AIO対策", href: "/problems/chatgpt-not-mentioned" },
  { title: "ホームページが古いまま", solution: "ホームページ制作", href: "/problems/website-old" },
  { title: "SNSが成果につながらない", solution: "SNS運用", href: "/problems/sns-no-results" },
];

export default function ProblemsGrid() {
  return (
    <Section tone="surface" labelledBy="home-problems">
      <SectionHeading
        id="home-problems"
        eyebrow="Problems"
        title="こんなお悩み、ありませんか？"
        lead="当てはまるものを選ぶと、原因と解決のための施策がわかります。"
        action={
          <Link href="/problems" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent hover:text-accent-strong">
            すべてのお悩みを見る
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        }
      />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal as="li" key={p.href} delay={(i % 3) * 0.05}>
            <Link
              href={p.href}
              className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_16px_40px_-24px_rgba(11,120,194,0.5)]"
            >
              <span>
                <span className="block text-[17px] font-bold leading-snug text-ink">{p.title}</span>
                <span className="mt-2 inline-flex items-center gap-2 text-[13px] text-muted">
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[12px] font-semibold text-accent">解決策</span>
                  {p.solution}
                </span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <ArrowIcon className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
