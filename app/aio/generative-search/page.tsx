import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "生成AI検索・AI Overview対策｜引用されやすいページの設計｜株式会社サイプレス",
  description:
    "Google AI Overview・Perplexity・Bing Copilotに引用される生成AI検索対策。明確な見出し構造・具体的数字・FAQ形式コンテンツ・構造化データ実装の具体的な方法を解説。",
  keywords: ["生成AI検索対策", "AI Overview最適化", "SGE対策", "Perplexity対策", "AI検索最適化", "AIO対策"],
  openGraph: {
    title: "生成AI検索・AI Overview対策｜引用されやすいページの設計｜株式会社サイプレス",
    description: "Google AI Overview等の生成AI検索に引用されやすいコンテンツ設計の完全ガイド。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/aio/generative-search" },
};

const contentFeatures = [
  {
    title: "明確な見出し構造",
    body: "生成AI検索は多数のページをスキャンして回答を生成するため、情報が明確に整理されているページを優先して引用します。H1・H2・H3の適切な階層構造、論理的な情報の流れ、セクションごとの明確な見出しがAIの理解を助けます。見出しには検索キーワードを含めつつ、ユーザーが知りたいことを直接的に表現することで、AIが「この見出しの下に○○についての情報がある」と判断しやすくなります。パンくずリスト・目次も有効です。",
  },
  {
    title: "具体的な数字・事例",
    body: "「効果がある」「多くのユーザーが」という曖昧な表現より、「成約率42%向上」「300社以上の支援実績」のような具体的な数字・データがAI検索に引用されやすいです。AIは情報の信頼性を数字・事例・実績で判断します。自社の実績データ・顧客事例・第三者調査の引用などを積極的に活用し、コンテンツに具体性を持たせることが重要です。独自調査のデータは特に引用価値が高く、他のメディアからの被リンク・引用にもつながります。",
  },
  {
    title: "FAQ形式のコンテンツ",
    body: "生成AI検索は質問に答えるツールであるため、FAQ形式のコンテンツは特に引用されやすい構造です。「○○とは？」「○○の方法は？」「○○の費用は？」など、ユーザーが実際に検索・質問する形式で情報を整理することで、AIが直接回答として引用しやすくなります。FAQPage Schemaを実装することでGoogleのリッチリザルト表示にもつながり、クリック率も向上します。業界でよく質問される疑問を網羅したFAQページは、AIO対策の最も効果的な施策のひとつです。",
  },
  {
    title: "信頼できる情報源としての実績",
    body: "生成AI検索は権威性の高い情報源を優先して引用します。業界メディア・専門誌への掲載・受賞歴・公的機関との連携・著者の資格・実績などが権威性シグナルです。自社ウェブサイトに「メディア掲載実績」「受賞・認定」「会社概要・沿革」を充実させ、外部からのリンク・言及を増やすことで、AIに「信頼できる情報源」として認識されます。Googleのナレッジパネル表示（ナレッジグラフへの登録）も権威性の重要なシグナルです。",
  },
  {
    title: "構造化データの実装",
    body: "構造化データ（Schema.org・JSON-LD）は、Googleと生成AIがページの内容を機械的に理解するための重要な要素です。Article・FAQPage・Organization・Service・BreadcrumbListなどの適切な構造化データを実装することで、AIがページの目的・内容・著者・企業情報を正確に理解できます。Google AI Overviewはインデックス時の構造化データを参照するため、特に重要です。構造化データが充実しているページはAI引用率が高い傾向があります。",
  },
];

const faqItems = [
  {
    q: "AI Overviewに表示されると通常の検索結果への影響はありますか？",
    a: "AI Overviewに引用されることで、通常の検索結果でも権威性が高まり、順位改善に寄与することが多いです。また、AI Overviewには掲載ページへのリンクが表示されるため、クリックによる直接流入も獲得できます。両方の最適化を同時に進めることをお勧めします。",
  },
  {
    q: "生成AI検索は今後どう変わりますか？",
    a: "生成AI検索は急速に進化しており、より複雑な質問への回答・マルチモーダル（画像・動画対応）・パーソナライズが進んでいます。基本的な施策（コンテンツ品質・権威性・構造化データ）は今後も有効ですが、各AI特有の最適化は継続的なアップデートが必要です。今から対策を始めることで、競合に先行して優位性を確立できます。",
  },
  {
    q: "どのAI検索に対策を優先すべきですか？",
    a: "現時点ではGoogle AI OverviewとChatGPT Searchへの対策が優先度が高いです。Google AI Overviewは最も多くのユーザーに見られ、ChatGPTは購買意欲の高いユーザーの利用が多いからです。Perplexity・Gemini・Bing Copilotは次の優先順位です。ただし、基本的な施策は複数のAIに同時に有効なため、まず共通施策を実施することが効率的です。",
  },
  {
    q: "AI検索で自社コンテンツが引用されたかを確認できますか？",
    a: "Google AI Overviewはサーチコンソールで引用されたページのデータが確認できます（搭載後）。ChatGPT・Perplexityは直接のデータ提供がないため、定期的にターゲットクエリを投げて引用状況を手動で確認するか、専用のモニタリングツールを活用します。当社では月次でのAI引用モニタリングレポートを提供しています。",
  },
  {
    q: "既存のSEOコンテンツをAIO向けに改善するには何から始めればいいですか？",
    a: "まず既存コンテンツのAIへの引用しやすさを評価します。見出し構造の整理・FAQ追加・数字・事例の補強・構造化データの実装が優先施策です。特にSEOで既に上位表示されているページは、最も効果的にAIO対策できます。アクセス数が多いページから改善することで、効率的に成果を上げられます。",
  },
];

export default function GenerativeSearchPage() {
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
              <Link href="/aio" className="hover:underline" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>生成AI検索対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Generative AI Search
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              生成AI検索・<br />AI Overview対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Google AI Overview・Perplexity・Bing Copilotなどの生成AI検索では、
              AIが複数ソースを参照して回答を生成し、その際に参照したページが表示されます。
              この「AI生成回答での引用」を獲得することで、新たな集客経路を確立します。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="生成AI検索・AI Overview対策" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.4)" }} />
        </section>

        {/* 生成AI検索とは */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is Generative Search
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              生成AI検索とは
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                生成AI検索とは、AIが複数のウェブページを参照して回答を生成し、検索クエリに対する
                まとめ回答を提供する検索体験です。GoogleではSGE（Search Generative Experience）として
                2023年に実験を開始し、2024年以降「AI Overview」として広く展開しています。
                従来の「リンクのリスト」から「AIが生成した回答＋参照元リンク」へと検索体験が変化しています。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                生成AI検索でページが引用されることには大きな価値があります。
                AI Overviewに引用されたページへのクリック率はオーガニック検索の通常の位置より高いという
                データもあります。また、「AIが参照している情報源」という認知は、
                ブランドの権威性・信頼性の向上にも寄与します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                一方で、「ゼロクリック問題」にも対応が必要です。AIが回答を生成することで
                ユーザーが検索結果をクリックせずに情報を得てしまうケースが増えています。
                この変化への適応として、AI引用を獲得しつつ、引用されることでブランド認知を高め、
                より深い情報・サービスへの誘導を設計することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* 引用されやすいページの特徴 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Content Features
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              引用されやすいページの特徴
            </h2>
            <div className="max-w-3xl">
              {contentFeatures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 2-col: 生成AI検索の特徴 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Generative Search
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  生成AI検索で引用されるために
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    Google AI OverviewやPerplexityは複数のソースをスキャンして回答を生成します。引用されるためには、明確な見出し構造・具体的な数字・FAQ形式のコンテンツが不可欠です。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    「ゼロクリック問題」にも対応が必要です。AIが回答を生成することでクリックなしに情報提供される一方、引用されることでブランド認知が高まるため、より深いサービスへの誘導設計が重要です。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    構造化データの実装・業界メディア掲載・Googleナレッジパネルへの登録が、生成AI検索での引用確率を高める主要な施策です。
                  </p>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_18_57.png" alt="生成AI検索・デジタルオーバーレイのカンファレンス" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="生成AI検索対策に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages
          links={[
            { href: "/aio", label: "AIO対策", desc: "AI最適化の全体戦略" },
            { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用戦略" },
            { href: "/aio/llm-optimization", label: "LLM最適化", desc: "大規模言語モデルへの最適化" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="生成AI検索対策のご相談はサイプレスへ"
          body="Google AI Overview・ChatGPT・Perplexityに引用されやすいコンテンツ設計と構造化データ実装をサポートします。現状のAI引用状況を診断し、優先施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
