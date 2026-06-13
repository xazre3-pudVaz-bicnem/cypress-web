import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "FAQ最適化｜AIO対策でAI検索に引用される｜株式会社サイプレス",
  description:
    "FAQコンテンツをAIO対策として活用し、ChatGPT・Gemini・Perplexityに引用されやすいサイトを構築。FAQPageスキーマ実装・疑問形フレーズ設計・内部リンク戦略まで解説。",
  keywords: ["FAQ最適化", "AIO対策", "FAQPageスキーマ", "AI検索引用", "FAQ設計", "AIO"],
  openGraph: {
    title: "FAQ最適化｜AIO対策でAI検索に引用される｜株式会社サイプレス",
    description: "FAQコンテンツのAIO対策活用。AI検索に引用されやすいFAQ設計の全手法を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/aio/faq-optimization" },
};

const POINTS = [
  {
    num: "01",
    title: "ユーザーが実際に検索する「疑問形フレーズ」を見出しにする",
    body: "「○○とは何ですか？」「○○はどうすれば解決できますか？」といった疑問文を見出し（H3・H2）として使うことで、AIが質問と回答を紐付けやすくなります。検索ボリュームツールやサジェスト機能でリアルな疑問形フレーズを収集してから設計しましょう。",
  },
  {
    num: "02",
    title: "答えを最初の1〜2文で完結させる",
    body: "AIは回答の冒頭部分を優先的に引用します。「結論→理由→詳細」の順序で記述し、最初の1〜2文だけで質問に完全に答えられる構造にすることが重要です。前置きの長い文章は引用されにくく、離脱率も上がります。",
  },
  {
    num: "03",
    title: "専門用語は補足説明を加える",
    body: "業界特有の用語や略語が出てきた場合、括弧内に簡潔な説明を加えることでAIの理解精度が向上します。「AIO（AI検索最適化）」のような記述はGoogleの構造理解にも貢献し、ナレッジグラフへの情報浸透を助けます。",
  },
  {
    num: "04",
    title: "FAQPageスキーマで構造化データを実装する",
    body: "JSON-LDでFAQPage Schemaを実装することで、GoogleとAIの両方に質問と回答のペアを明示的に伝えられます。Googleのリッチリザルト（FAQ表示）にも対応し、CTR向上にも直結します。サイト全体のFAQを一括管理できる実装が理想的です。",
  },
  {
    num: "05",
    title: "FAQ同士に内部リンクを設置する",
    body: "関連するFAQ同士をリンクで繋ぐことで、AIがトピッククラスターとしてサイトの専門性を評価しやすくなります。「詳しくは○○のFAQをご覧ください」という文脈内リンクが、ユーザー滞在時間の延長にも貢献します。",
  },
  {
    num: "06",
    title: "定期的にFAQを追加・更新する",
    body: "新サービスの追加・季節的な疑問・顧客からの実際の問い合わせをFAQとして転換し、継続的に更新することが重要です。更新頻度の高いサイトはGoogleのクロール頻度が上がり、AI学習データへの露出機会も増加します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "FAQ最適化はSEOにも効果がありますか？",
    a: "はい。FAQPageスキーマを実装することでGoogleのリッチリザルト（FAQ表示）に対応し、CTRが向上します。また疑問形フレーズはロングテールキーワードとして検索流入にも貢献するため、SEOとAIOの両方に有効な施策です。",
  },
  {
    q: "FAQはどのページに設置するのが効果的ですか？",
    a: "サービスページ・料金ページ・会社概要ページなど、顧客の疑問が多いページに設置するのが最も効果的です。トップページにも概要的なFAQを配置し、詳細FAQページへの内部リンクを設置する構成が推奨されます。",
  },
  {
    q: "FAQ項目はどのくらい用意すれば良いですか？",
    a: "最低でも各サービスページに5〜10問、サイト全体では30〜50問以上が目安です。競合分析とサジェスト・PAA（People Also Ask）調査でリアルな疑問を洗い出し、段階的に拡充していきます。",
  },
  {
    q: "FAQPageスキーマの実装は難しいですか？",
    a: "Next.jsやWordPressであれば、JSON-LDをページのheadセクションに挿入するだけで実装できます。当社では実装支援も含めてFAQ最適化をワンストップで対応します。Google Search ConsoleのリッチリザルトテストでもすぐCに確認できます。",
  },
  {
    q: "AI検索に引用されたかどうかはどうやって確認しますか？",
    a: "業界関連の疑問をChatGPT・Gemini・Perplexityに投げ、自社のFAQが引用・参照されるかを定期的に確認します。当社では月次AIモニタリングレポートで引用状況を追跡し、FAQ改善に活用します。",
  },
];

export default function FaqOptimizationPage() {
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
              <span style={{ color: "#0F172A" }}>FAQ最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
              FAQ Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              FAQ最適化｜AI検索に<br />引用されるコンテンツへ
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AI検索（ChatGPT・Gemini・Perplexity）はQ&A形式の情報を引用しやすい特性があります。
              FAQコンテンツを戦略的に設計することで、AI回答に自社情報が掲載される確率を高められます。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="FAQ最適化・AI検索対策のデジタルイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* FAQコンテンツとAIO対策の関係 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
                FAQ × AIO
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                FAQコンテンツとAIO対策の関係
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                ChatGPT・Gemini・PerplexityなどのAI検索エンジンは、ユーザーの質問に対して最適な回答を生成するため、
                Web上のコンテンツを参照します。このとき特に引用されやすいのが、質問と回答が明確にセットになった
                「Q&A形式のコンテンツ」です。AIは疑問文と回答のペアを認識しやすく、そのまま引用しやすいためです。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                FAQPageスキーマ（構造化データ）を実装することで、GoogleとAIの両方に質問と回答の紐付けを
                機械的に伝えることができます。これにより、Googleのリッチリザルト表示とAI引用の両方に
                対応できる、一石二鳥のコンテンツ設計が実現します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                重要なのは「AIが引用したくなる構造」を意識して設計することです。前置きの長い文章より、
                結論を先に提示する「結論ファースト」の回答構造が、AI引用率の向上に直結します。
              </p>
            </div>
          </div>
        </section>

        {/* AIO対策で効果的なFAQ設計のポイント */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
              Key Points
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              AIO対策で効果的なFAQ設計のポイント
            </h2>
            <div className="max-w-3xl">
              {POINTS.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #ece8e0" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        {/* どのページにFAQを設置すべきか */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
                Placement Strategy
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                どのページにFAQを設置すべきか
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                FAQは「顧客が疑問を持つ可能性が高いページ」に集中的に設置するのが効果的です。
                サービスページ・料金ページ・会社概要ページはFAQ設置の優先度が高く、
                購買決定前の不安解消とAI引用の両方に貢献します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                また、業界全体に関する教育的FAQをブログ・コラム形式で独立ページとして作成することも有効です。
                「○○業界でよくある疑問10選」のようなFAQ集約ページは、AI検索で業界関連の質問が来た際に
                引用される可能性が高まります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                トップページには概要的なFAQ（5問程度）を設置し、より詳細なFAQページへの内部リンクを
                設置する階層構造が、クロール効率とユーザー利便性の両方を高めます。
                サイプレスではFAQ設置計画の立案から実装・スキーマ設定まで一貫して支援します。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="FAQ最適化に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/aio", label: "AIO対策", desc: "AI検索最適化の全体戦略" },
            { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
            { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTに引用される情報設計" },
            { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索流入を増やすコンテンツ戦略" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="FAQ最適化のご相談はサイプレスへ"
          body="AI検索に引用されるFAQコンテンツの設計・FAQPageスキーマ実装・継続的なFAQ拡充支援をご提案します。まずは現状のFAQ設計を診断いたします。"
        />
      </main>
      <Footer />
    </>
  );
}
