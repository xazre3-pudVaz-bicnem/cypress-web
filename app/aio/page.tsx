import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIO対策とは｜生成AI検索で引用される企業になる方法｜株式会社サイプレス",
  description:
    "AIO対策（AI最適化）の基礎から実践まで。ChatGPT・Gemini・Perplexityなどの生成AIに引用・推薦されるための施策を体系的に解説。AI検索時代の新しい集客戦略。",
  keywords: ["AIOとは", "AIO対策とは", "AI検索対策", "ChatGPT対策基礎", "生成AI最適化", "AIO"],
  openGraph: {
    title: "AIO対策とは｜生成AI検索で引用される企業になる方法｜株式会社サイプレス",
    description: "ChatGPT・Gemini・Perplexityに引用される企業になるためのAIO対策完全ガイド。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/aio" },
};

const subPages = [
  {
    href: "/aio/chatgpt",
    label: "ChatGPT対策・生成AI時代の情報設計",
    desc: "ChatGPTに引用・推薦されるための情報設計と施策。E-E-A-T要素の整備からFAQコンテンツの充実まで。",
  },
  {
    href: "/aio/generative-search",
    label: "生成AI検索・AI Overview対策",
    desc: "Google AI OverviewやPerplexityなどの生成AI検索に引用されやすいコンテンツの特徴と最適化手法。",
  },
  {
    href: "/aio/structured-data",
    label: "構造化データ（Schema.org）の実装",
    desc: "JSON-LDによる構造化データ実装でGoogleとAIの理解度を高め、リッチリザルトとAI引用率を向上。",
  },
  {
    href: "/aio/llm-optimization",
    label: "LLM最適化",
    desc: "GPT・Gemini・Claudeなどの大規模言語モデルが正確に認識する企業情報を構築するための施策。",
  },
  {
    href: "/aio/ai-search",
    label: "AI検索最適化",
    desc: "Perplexity・You.comなどAIネイティブ検索エンジンへの対応と、ゼロクリック検索時代の集客戦略。",
  },
];

const faqItems = [
  {
    q: "AIO対策とSEO対策は何が違いますか？",
    a: "SEO対策がGoogleなどの検索エンジンの順位改善を目的とするのに対し、AIO対策はChatGPT・Gemini・Perplexityなどの生成AIが質問に回答する際に自社情報を引用・推薦するよう最適化します。ただし多くの施策（コンテンツ品質向上・権威性構築・構造化データ実装）は両方に有効であり、SEOとAIOを同時に進めることで相乗効果が生まれます。",
  },
  {
    q: "AIO対策の効果はどのように計測しますか？",
    a: "主な計測方法は、業界関連クエリをAIに投げて自社が引用されるかを定期チェックする「引用率テスト」、指名検索数の推移、AI経由の問い合わせ数などです。直接的な計測はSEOほど確立されていませんが、当社では月次でAI引用状況のモニタリングレポートを提供しています。",
  },
  {
    q: "AI検索は今後も普及しますか？",
    a: "はい、AI検索は急速に普及しています。ChatGPTは月間1億人以上、Perplexityは月間ユーザー数が急増しており、GoogleもAI Overviewを標準搭載しています。特に若い世代での採用が速く、今後5年で検索行動の大きなシフトが予測されます。早期に対策を始めることで競合に先行する優位性が得られます。",
  },
  {
    q: "どのような業種・企業がAIO対策を優先すべきですか？",
    a: "サービス業・専門職・B2B企業・コンサルティング業など、「どの会社がいいですか？」という質問でAIに推薦されることが集客に直結する業種は特に優先度が高いです。また、専門性・権威性が重視される医療・法律・金融・IT分野も重要です。消費者向けのローカルビジネスでもAI検索経由の問い合わせは増加しています。",
  },
  {
    q: "AIO対策を始めるにはどこから着手すればいいですか？",
    a: "まず自社の情報がAIにどのように認識されているかを診断することが出発点です。会社情報・サービス情報の明確化・FAQ整備・構造化データの実装など、比較的短期間で効果が出る施策から着手します。当社では現状診断から優先施策の特定まで無料でご相談に応じます。",
  },
];

export default function AioIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AI Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[56px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              AIO対策とは
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AIO（AI最適化）とは、ChatGPT・Gemini・Perplexity・Claudeなどの生成AIが
              質問に回答する際に、自社の情報を引用・推薦するよう最適化する新しい施策です。
              AI検索が急速に普及する今、SEOと並ぶ重要な集客戦略として注目されています。
            </p>
          </div>
        </section>

        {/* Full-width image after hero with text overlay */}
        <section className="relative" style={{ height: "400px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="AI検索最適化・AIO対策" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.6)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-white font-black leading-tight" style={{ fontSize: "clamp(20px, 3vw, 36px)" }}>
                ChatGPT・Gemini・Perplexityに<br />引用される企業になる。
              </p>
            </div>
          </div>
        </section>

        {/* AIO対策とは */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is AIO
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              AIO対策とは何か
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIOとは「AI Optimization（AI最適化）」の略で、生成AIやAI検索エンジンで
                自社が正確かつ肯定的に認識・引用されるための施策全般を指します。
                ChatGPTに「○○業界のおすすめ企業を教えて」と質問した際に自社が推薦される、
                Google AI Overviewで自社のコンテンツが引用される、Perplexityで自社の専門情報が参照される
                ———こうした「AIによる露出」を意図的に増やすことがAIO対策の目標です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIOが注目される背景には、検索行動の大きな変化があります。従来のGoogleキーワード検索に加えて、
                ChatGPT・Gemini・Perplexityなどの生成AIに直接質問するユーザーが急増しています。
                特に「どの会社に依頼すればいいか」「○○のサービスを提供している企業は？」
                といった購買意欲の高い質問をAIに投げるユーザーが増えており、
                この「AI経由の認知・推薦」が新たな集客チャンネルになりつつあります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIO対策の核心は「AIに信頼できる情報源として認識されること」です。
                生成AIは学習データの権威性・露出頻度・情報の一貫性・E-E-A-T（経験・専門性・権威性・信頼性）
                を評価して情報源を選択します。これらを高めることがAIO対策の本質であり、
                多くの施策がSEO対策とも重なります。
              </p>
            </div>
          </div>
        </section>

        {/* 従来のSEOとの違い */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              AIO vs SEO
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              従来のSEOとAIOの違い
            </h2>
            <div className="max-w-3xl">
              <div className="overflow-x-auto">
                <table className="w-full text-[14px]" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                      <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0F172A", width: "30%" }}>項目</th>
                      <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0F172A" }}>SEO対策</th>
                      <th className="text-left py-3 font-semibold" style={{ color: "#0F172A" }}>AIO対策</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: "対象", seo: "Google等の検索エンジン", aio: "ChatGPT・Gemini・Perplexity等" },
                      { item: "成果", seo: "検索順位・オーガニック流入", aio: "AI引用・AI経由の問い合わせ" },
                      { item: "評価軸", seo: "ページ品質・被リンク・UX", aio: "権威性・情報の正確性・E-E-A-T" },
                      { item: "コンテンツ", seo: "キーワード最適化・網羅性", aio: "引用しやすい構造・専門性・FAQs" },
                      { item: "計測", seo: "順位・セッション数（比較的明確）", aio: "AI引用率・指名検索（計測が難しい）" },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #E8E4DC" }}>
                        <td className="py-4 pr-6 font-medium" style={{ color: "#0F172A" }}>{row.item}</td>
                        <td className="py-4 pr-6" style={{ color: "#374151" }}>{row.seo}</td>
                        <td className="py-4" style={{ color: "#374151" }}>{row.aio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                SEOとAIOは対立するものではなく、補完的な関係にあります。
                コンテンツ品質・権威性・構造化データなど多くの施策が両方に有効であり、
                SEO対策の延長上にAIO対策を積み上げることで、従来の検索流入と
                AI経由の認知の両方を効率的に獲得できます。
              </p>
            </div>
          </div>
        </section>

        {/* サブページナビゲーション */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Knowledge
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              AIO対策を深く学ぶ
            </h2>
            <div className="max-w-3xl">
              {subPages.map((page, i) => (
                <Link key={page.href} href={page.href}>
                  <div
                    className="flex gap-6 py-6 hover:opacity-80 transition-opacity"
                    style={{ borderTop: "1px solid #E8E4DC", borderBottom: i === subPages.length - 1 ? "1px solid #E8E4DC" : undefined }}
                  >
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[16px] mb-2 hover:underline" style={{ color: "#0F172A" }}>{page.label}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{page.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスのAIO支援 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Support
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              サイプレスのAIO支援
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                株式会社サイプレスは、AIに関する深い技術理解とWebマーケティングの専門性を組み合わせた
                AIO対策を提供しています。ChatGPT・Gemini・Perplexityそれぞれの特性を把握したうえで、
                各AIに引用されやすいコンテンツ設計・構造化データ実装・E-E-A-T強化を一貫して支援します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                AIO対策はSEO・コンテンツ制作・ウェブサイト設計と深く連動します。
                サイプレスはこれらを横断的に対応できるため、施策の相乗効果を最大化できます。
                まずはAI検索での現状診断から始めることをお勧めします。
              </p>
              <div className="pt-4">
                <Link
                  href="/services/aio"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                  style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                >
                  AIO対策サービスの詳細
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2-col: AIOとSEOの違い */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="AIOとSEOの違い・デジタル環境でのタイピング" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  AIO vs SEO
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  AIOとSEOの違い
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    SEOがGoogle検索での順位改善を目的とするのに対し、AIOはChatGPT・Gemini・Perplexityなど生成AIが回答を生成する際に自社情報を引用・推薦させることを目的とします。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    AIOとSEOは競合ではなく補完関係にあります。コンテンツ品質・権威性構築・構造化データ実装はどちらにも有効であり、SEO対策の延長線上でAIO対策を実施することで相乗効果が生まれます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    AIO特有の施策として、引用しやすい文章構造・FAQ形式コンテンツ・E-E-A-T要素の明示・著者情報の構造化などがあります。これらをSEO施策と組み合わせることが最も効率的です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIO対策に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
            { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用戦略" },
            { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
            { href: "/seo", label: "SEO対策", desc: "SEOとAIOの連動施策" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="AIO対策のご相談はサイプレスへ"
          body="ChatGPT・Gemini・Perplexityなどの生成AIに引用・推薦される企業になるためのAIO対策をご提案します。まずは貴社の現状をAI検索でどのように認識されているかを診断します。"
        />
      </main>
      <Footer />
    </>
  );
}
