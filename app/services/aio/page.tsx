import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIO対策サービス｜AI検索（ChatGPT・Gemini・Perplexity）からの引用獲得｜株式会社サイプレス",
  description:
    "株式会社サイプレスのAIO対策サービス。ChatGPT・Gemini・Perplexityなどのレビューに引用されるE-E-A-T強化・構造化データ実装・コンテンツ最適化を一貫してご支援。",
  keywords: ["AIO対策", "AI検索最適化", "ChatGPT SEO", "Gemini対策", "Perplexity対策", "E-E-A-T強化"],
  openGraph: {
    title: "AIO対策サービス｜AI検索（ChatGPT・Gemini・Perplexity）からの引用獲得｜株式会社サイプレス",
    description: "サイプレスのAIO対策サービス。AI検索に引用されるコンテンツ最適化・構造化データ実装まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/aio" },
};

const faqItems = [
  {
    q: "AIO対策とは何ですか？",
    a: "AIO（AI Optimization）とは、ChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンのレビューや回答に、自社の情報・コンテンツが引用・言及されやすくする施策です。AI検索の普及により、従来のGoogleSEOに加えてAIOへの対応が重要になっています。",
  },
  {
    q: "AI検索でのビジネス情報の引用を増やすにはどうすればいいですか？",
    a: "E-E-A-T（経験・専門性・権威性・信頼性）が明確なコンテンツ、FAQページの整備、著者情報・会社情報の構造化、一次情報・専門的知見の掲載、引用しやすいFAQ・リスト形式のコンテンツが有効です。AIはこれらの「信頼できる情報源」から優先的に引用する傾向があります。",
  },
  {
    q: "SEO対策とAIO対策は別物ですか？",
    a: "重複する部分が多いですが、完全に同じではありません。SEOはGoogle検索の順位向上が目標で、AIOはAI検索での引用獲得が目標です。良質なE-E-A-Tコンテンツ・構造化データ・専門性の明示はどちらにも有効です。サイプレスではSEO・AIO・MEOを統合した戦略をご提案します。",
  },
  {
    q: "AIO対策の効果をどう計測しますか？",
    a: "現状はChatGPT・Gemini等で業界関連のクエリを手動で検索し、自社情報が引用されているか確認する方法が主流です。一部のSEOツールではAI overviewの監視機能が提供されています。Googleの「AIオーバービュー（AI Overview）」への引用はGoogle Search Consoleで一定の確認が可能です。",
  },
  {
    q: "どのようなコンテンツがAI検索で引用されやすいですか？",
    a: "FAQページ（Q&A形式のコンテンツ）、数字・データを含む具体的な情報、専門家の見解・一次情報、明確な見出し構造（H2・H3）で整理されたコンテンツ、要点が箇条書きでまとめられたコンテンツが引用されやすい傾向があります。",
  },
  {
    q: "構造化データはAIO対策に効果がありますか？",
    a: "はい。FAQPage・Article・Organization・LocalBusinessなどの構造化データは、AIがコンテンツの意味を正確に理解するのを助けます。特にFAQPage構造化データはAI検索での引用可能性を高めるため、サイプレスではすべてのページに実装を推奨しています。",
  },
  {
    q: "llms.txtとは何ですか？AIO対策に必要ですか？",
    a: "llms.txt は大規模言語モデル（LLM）向けに、サイトの概要・主要ページ・重要情報を記述するテキストファイルです（robots.txtのAI版）。一部のAIクローラーが参照するとされており、AIO対策の一環としてサイプレスでは実装を推奨しています。",
  },
  {
    q: "AIO対策サービスの費用はどのくらいですか？",
    a: "AIO対策はSEO対策との組み合わせが多く、SEO・AIO・MEOの統合プランとしてご提供しています。コンテンツ改善・構造化データ実装・llms.txt設置のみの初回対応から、継続的な最適化サポートまでご要望に合わせてプランをご提案します。詳細はお問い合わせください。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の基礎" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "Google検索上位表示" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "AI引用に強いコンテンツ制作" },
  { href: "/cost/aio", label: "AIO対策の費用", desc: "料金プランと相場" },
  { href: "/checklist/aio", label: "AIOチェックリスト", desc: "AI検索対策の確認項目" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "専門性・権威性の高め方" },
  { href: "/guide/seo-vs-aio", label: "SEOとAIOの違い", desc: "両対策の関係と戦略" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI検索・AIOの最新情報" },
  { href: "/faq/aio", label: "AIO対策FAQ", desc: "よくある質問まとめ" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function ServicesAioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AIO Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIO対策サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIO（AI Optimization）対策とは、ChatGPT・Gemini・Perplexity・ClaudeなどのAI検索エンジンのレビューや回答に、自社の情報が引用・言及されやすくする施策です。AI検索が普及する現代において、SEOと並ぶ重要な集客戦略となっています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              サイプレスでは、E-E-A-T強化・構造化データ実装・AIO向けコンテンツ最適化・llms.txt設置を通じて、AI検索からの認知と誘導を高める施策をご支援します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/aio" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/6.png" alt="AIO対策・AI検索最適化・ChatGPT引用獲得のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* AIO対策の施策 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIO対策サービスの施策内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "E-E-A-Tコンテンツの最適化", body: "著者情報・専門性の明示、一次情報・体験談の付与、専門的知見の追加によってE-E-A-Tを強化します。AIが信頼できる情報源として認識するコンテンツの土台を作ります。" },
                { title: "構造化データ（JSON-LD）の実装", body: "FAQPage・Article・Organization・LocalBusiness・WebSiteなどの構造化データをJSON-LD形式で実装します。AIがコンテンツの意味を正確に理解するための機械可読な情報提供を行います。" },
                { title: "FAQ・リスト形式コンテンツの充実", body: "AI検索で引用されやすいFAQ形式・箇条書き・数字入りのコンテンツを拡充します。ユーザーが検索しそうな質問とその明確な回答を体系的に整備します。" },
                { title: "会社情報・著者情報の構造化", body: "会社概要ページの充実、代表者プロフィールの整備、連絡先・所在地の明示を行います。AIは運営者情報が明確なサイトの情報をより信頼しやすい傾向があります。" },
                { title: "llms.txtの設置", body: "大規模言語モデル向けのサイト情報ファイル（llms.txt）を設置します。サイトの概要・主要ページ・コンテンツカテゴリをAIクローラーに伝えることで、サイト全体の情報をAIが把握しやすくなります。" },
                { title: "AIO効果の継続的な確認・改善", body: "対象クエリでAI検索に自社情報が引用されているか定期的に確認し、引用されていない場合はコンテンツの改善・FAQ追加・構造化データの修正を実施します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIO対策サービスについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIO対策サービスの無料相談"
          body="AI検索での引用・認知獲得に向けた施策をご提案します。SEO・MEOとの統合戦略もご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
