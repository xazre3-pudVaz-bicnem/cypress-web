import Reveal from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Section";

const REASONS = [
  {
    title: "戦略から運用まで、ひとつのチームで。",
    body: "MEO・SEO・AIO・制作・SNSを分けずに設計します。施策同士がかみ合うので、成果までの遠回りがありません。",
  },
  {
    title: "AI検索の時代に、先回りする。",
    body: "ChatGPTやGeminiに引用される情報設計まで標準で対応。制作や分析にもAIを使い、速く・適正価格で進めます。",
  },
  {
    title: "葛飾・東京東部は、顔を合わせて。",
    body: "亀有の拠点から訪問して打ち合わせができます。遠方の方はオンラインで、同じ体制でご支援します。",
  },
];

export default function ReasonsSection() {
  return (
    <section aria-labelledby="home-reasons" className="relative overflow-hidden bg-navy-900 py-24 text-white md:py-32">
      {/* 背景のごく薄いグリッドと光。演出は控えめに */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div aria-hidden="true" className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-cyan">Why Cypress</p>
          <h2 id="home-reasons" className="t-h2 !text-white">
            正しい会社が、
            <br />
            正しく選ばれる世界へ。
          </h2>
          <p className="t-lead mt-6 max-w-2xl text-white/70">
            良いサービスがあっても、見つけてもらえなければ選ばれません。サイプレスは、その「見つけてもらう仕組み」をつくる会社です。
          </p>
        </div>
        <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:mt-20 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 0.08} className="bg-navy-900 p-8 md:p-10">
              <span className="t-num text-gradient-brand block text-[64px] font-semibold leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-[20px] font-bold leading-snug !text-white">{r.title}</h3>
              <p className="phrase mt-4 text-[14.5px] leading-[1.9] text-white/65">{r.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
