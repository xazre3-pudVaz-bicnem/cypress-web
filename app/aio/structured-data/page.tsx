import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "構造化データ（Schema.org）実装｜AIO対策｜株式会社サイプレス",
  description:
    "構造化データ（JSON-LD / Schema.org）の実装でAI検索・Google検索での引用率を高める。Organization・FAQPage・LocalBusiness・Articleなど主要Schemaの実装支援。",
  keywords: [
    "構造化データ",
    "Schema.org",
    "JSON-LD",
    "AIO対策",
    "リッチリザルト",
    "FAQPage",
  ],
  openGraph: {
    title: "構造化データ（Schema.org）実装｜AIO対策｜株式会社サイプレス",
    description:
      "AI検索・Google検索で引用されやすくなる構造化データの実装。Schema.org対応でリッチリザルトとAIO引用率を同時に改善。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const schemas = [
  {
    name: "Organization",
    use: "会社情報の構造化",
    body: "会社名・住所・電話番号・URLなどの基本情報をGoogleとAIに正確に伝えます。ナレッジパネルの表示やAIによる企業情報の認識精度向上に直結します。",
  },
  {
    name: "LocalBusiness",
    use: "店舗・拠点情報",
    body: "地域ビジネス向けの構造化データ。営業時間・対応エリア・サービス内容をGoogleマップ・ローカル検索・AI検索に正確に伝えます。MEO対策との相乗効果があります。",
  },
  {
    name: "FAQPage",
    use: "よくある質問",
    body: "FAQ形式のコンテンツを構造化することで、Google検索でのFAQリッチリザルト表示とAIへの引用率が同時に高まります。AIO対策で最も効果が出やすいSchemaの一つです。",
  },
  {
    name: "Article",
    use: "ブログ・コラム記事",
    body: "記事の著者・公開日・更新日・画像などを構造化します。著者E-E-A-Tの強化に寄与し、AIが記事を信頼できる情報源として認識しやすくなります。",
  },
  {
    name: "BreadcrumbList",
    use: "パンくずリスト",
    body: "サイト構造をGoogleとAIに伝えるための基本Schema。検索結果に階層構造が表示されることでCTRが向上します。全ページへの実装を推奨します。",
  },
  {
    name: "WebSite",
    use: "サイト情報・サイト内検索",
    body: "サイト全体のURLとサイト内検索機能を構造化します。Googleのサイトリンク検索ボックス表示に必要で、ブランド検索時のリッチ表示を改善します。",
  },
  {
    name: "Service",
    use: "提供サービス情報",
    body: "提供するサービスの内容・対象・提供地域を構造化します。AIが「○○ならどの会社がおすすめ？」という質問に答える際に参照しやすくなります。",
  },
];

const faqItems = [
  {
    q: "構造化データとは何ですか？",
    a: "Webページ上の情報（会社名・サービス・FAQなど）をGoogleやAIが機械的に理解しやすい形式（JSON-LD）で記述するコードです。見た目には影響せず、検索エンジンとAIへの情報伝達精度を高めます。",
  },
  {
    q: "構造化データを入れるとどんな効果がありますか？",
    a: "Googleでのリッチリザルト（FAQ・パンくず・レビュースター）表示、AI検索での引用率向上、ナレッジパネルの表示改善などが期待できます。SEOとAIOの両方に効果があります。",
  },
  {
    q: "どのSchemaから実装するべきですか？",
    a: "全業種共通で優先度が高いのはOrganization・BreadcrumbList・WebSiteです。地域ビジネスはLocalBusiness、FAQ掲載ページはFAQPage、ブログはArticleを追加します。",
  },
  {
    q: "構造化データはWordPressでも実装できますか？",
    a: "はい、Yoast SEOなどのプラグインで基本的なSchemaは自動実装されますが、精度が低いことが多いです。カスタムJSON-LDを追加することでより精度の高い実装が可能です。",
  },
  {
    q: "実装後の効果はいつ頃現れますか？",
    a: "Googleがクロール・インデックスするタイミングに依存します。一般的に1〜4週間でリッチリザルトが表示され始め、AIO引用への影響は2〜3ヶ月単位で確認できます。",
  },
];

export default function StructuredDataPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/aio" className="hover:text-[#0F172A] transition-colors">AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>構造化データ</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
              AIO Knowledge
            </p>
            <h1
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}
            >
              構造化データ（Schema.org）の実装
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              構造化データはGoogleとAI検索が情報を正確に理解するための言語です。
              JSON-LDで実装することで、リッチリザルトの表示とAIO引用率の改善を同時に実現します。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="構造化データ実装・AI検索最適化" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.3)" }} />
        </section>

        {/* What is structured data */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>
                構造化データとは何か
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                Webページには文章・画像・リンクなど多くの情報が含まれますが、人間が読みやすい形式のままではGoogleやAIが内容を正確に理解しにくい場合があります。構造化データ（Schema.org / JSON-LD）は、ページに含まれる情報を機械可読な形式で記述することで、検索エンジンとAIへの情報伝達精度を高める技術です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                実装するとページの見た目には何も変わりませんが、Googleの検索結果にFAQやパンくずなどのリッチリザルトが表示されたり、ChatGPT・GeminiなどのAIが企業情報・サービス内容を正確に認識しやすくなります。AIO対策の技術基盤として、すべての企業サイトに実装を推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* Why it matters for AIO */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>
                AIOと構造化データの関係
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                AI検索（Google AI Overview・ChatGPT Search・Perplexityなど）はWebページのコンテンツを解析して回答を生成します。このとき、構造化データが実装されているページは「何の会社か」「どんなサービスを提供しているか」「どのエリアに対応しているか」がAIに明確に伝わるため、関連するクエリへの引用確率が高まります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                特にFAQPageスキーマは、Q&A形式の検索クエリへの引用に直結します。「○○とは？」「○○の方法は？」のような質問に対し、AIが自社FAQを参照・引用するケースが増加しています。
              </p>
            </div>
          </div>
        </section>

        {/* Schema types */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-black text-[22px] md:text-[26px] mb-2" style={{ color: "#0F172A" }}>
              主要な構造化データの種類
            </h2>
            <p className="text-[14px] mb-10" style={{ color: "#6B7280" }}>
              サイトの性質に応じて必要なSchemaを組み合わせて実装します
            </p>
            <div>
              {schemas.map((s, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1 w-6" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-[16px]" style={{ color: "#0F172A" }}>{s.name}</h3>
                      <span className="text-[12px] px-2 py-0.5" style={{ background: "#F9F8F5", color: "#6B7280", border: "1px solid #E8E4DC" }}>
                        {s.use}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO effect */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>
                SEOへの効果
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                構造化データの実装はAIOだけでなく、従来のSEOにも明確な効果をもたらします。FAQPageスキーマを実装したページではGoogleの検索結果にFAQが展開表示され、CTR（クリック率）の向上が期待できます。BreadcrumbListはURLの代わりに階層構造が検索結果に表示され、ユーザーへの信頼感が高まります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、Googleはリッチリザルトを表示できるページを「ユーザーにとって有益な情報を持つページ」と評価する傾向があり、間接的に検索順位にも好影響を与えます。構造化データはSEOとAIOを同時に強化できる、コストパフォーマンスの高い施策です。
              </p>
            </div>
          </div>
        </section>

        {/* Cypress support */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>
                サイプレスの構造化データ支援
              </h2>
              <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                サイプレスでは、Webサイト全体のSchema設計から実装・検証まで一貫して対応します。Google Search Consoleのリッチリザルトテストで正常に認識されることを確認したうえで完了とし、実装後の効果計測も継続して行います。
              </p>
              <ul className="space-y-2">
                {[
                  "現状のSchema実装状況の診断",
                  "サイト構造に合わせたSchema設計",
                  "JSON-LDの実装（Next.js / WordPress 両対応）",
                  "Google Search Consoleでの検証・確認",
                  "FAQコンテンツの構造化提案",
                  "実装後の効果測定・レポート",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: "#374151" }}>
                    <span className="mt-1 shrink-0" style={{ color: "#9CA3AF" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 2-col: 構造化データの実装手順 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_19_44.png" alt="構造化データの実装手順・ラップトップアナリティクス" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Implementation Steps
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  構造化データの実装手順
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    構造化データの実装は①現状診断→②Schema設計→③JSON-LD実装→④Search Consoleでの検証→⑤効果測定の5ステップで進めます。まず既存のSchema実装状況を診断し、優先度を設定します。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    すべての企業サイトに共通して優先度が高いのはOrganization・BreadcrumbList・WebSiteの3種類です。地域ビジネスはLocalBusiness、FAQページはFAQPageを追加することでリッチリザルト表示とAI引用率が同時に向上します。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    実装後はGoogle Search Consoleのリッチリザルトテストで正常認識を確認します。エラーのある構造化データはGoogleに無視されるため、品質検証が不可欠です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} />

        <RelatedPages
          links={[
            { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化の全体像" },
            { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの引用戦略" },
            { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術面からのSEO改善" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "サイプレスのAIO支援" },
            { href: "/services/seo", label: "SEO対策サービス", desc: "SEOと構造化データの連動" },
          ]}
        />

        <PageContactCTA
          heading="構造化データの実装をご検討の方へ"
          body="現在の実装状況の診断から設計・実装・効果測定まで、一貫して対応します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
