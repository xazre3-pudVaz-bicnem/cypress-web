import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ブログ戦略・コンテンツ計画｜SEO集客の実践｜株式会社サイプレス",
  description:
    "SEOに効くブログ戦略の立て方を解説。ターゲットキーワードの選定・記事テーマカレンダー・見出し構成・リライト計画・AI活用まで、継続的な自然検索流入を獲得するコンテンツ運用の実践方法を紹介します。",
  keywords: ["ブログ戦略", "SEOブログ", "コンテンツ計画", "記事制作", "コンテンツマーケティング", "SEO集客"],
  openGraph: {
    title: "ブログ戦略・コンテンツ計画｜SEO集客の実践｜株式会社サイプレス",
    description:
      "SEOに効くブログ戦略の立て方を解説。ターゲットキーワード選定・記事計画・リライト・AI活用まで、継続的な自然検索流入を獲得するコンテンツ運用の実践方法を紹介します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/blog-strategy" },
};

const steps = [
  {
    title: "ターゲットキーワードの選定（月100〜3,000検索のロングテール）",
    body: "ブログ戦略の出発点はキーワード選定です。新規サイトや中小企業サイトでは、競合が少なく検索意図が明確なロングテールキーワード（月間100〜3,000検索程度）を優先します。「SEO対策 中小企業 費用」「美容院 集客 ブログ 書き方」のような具体的なキーワードは、検索者の課題が明確でCVにつながりやすい傾向があります。",
  },
  {
    title: "記事テーマカレンダーの作成",
    body: "選定したキーワードをもとに、月ごとの記事公開計画を立てます。季節性のあるキーワードは1〜2ヶ月前から準備し、年間を通じた検索需要の波に対応します。週1〜2本を目安に継続的に公開することで、Googleにアクティブなサイトとして認識され、クロール頻度が高まります。",
  },
  {
    title: "検索意図に沿った見出し構成",
    body: "記事を書き始める前に、検索意図を満たす見出し構成（アウトライン）を設計します。上位表示されている競合記事の見出しを分析し、カバーすべきトピックを網羅します。H2・H3の見出しにキーワードを自然に含めることで、Googleの強調スニペット（ゼロクリック検索）の獲得にもつながります。",
  },
  {
    title: "競合記事との差別化ポイント",
    body: "競合記事と同じ内容の記事を書いても順位は上がりません。自社の独自データ・実際のクライアント事例・専門家の見解・独自の調査結果など、他では読めない「一次情報」を組み込みます。独自視点や具体的な数値を加えることで、ユーザーの記事への満足度が高まり、滞在時間・再訪率の向上につながります。",
  },
  {
    title: "1次情報・体験・専門知識の組み込み",
    body: "GoogleのE-E-A-Tガイドラインでは「経験（Experience）」が評価基準に加わっています。実際に試した結果・現場での体験・専門家としての知見を文章に組み込むことで、AIが生成した薄いコンテンツとの差別化が明確になります。「私たちが実際にやってみた結果」という一次情報は、AI検索（AIO）からの引用も得やすくなります。",
  },
  {
    title: "内部リンクを使った記事間の関連付け",
    body: "記事を公開するたびに、関連する既存記事からの内部リンクを追加します。新しい記事を「孤立させない」ことが重要です。トピッククラスター設計に基づき、ピラーページ・クラスターページ間を双方向にリンクすることで、テーマ全体の権威性がGoogleに伝わります。",
  },
  {
    title: "定期的なリライト計画",
    body: "一度公開した記事は半年〜1年後に必ず見直します。Google Search Consoleで「2〜3ページ目」に停滞している記事を優先的にリライトします。情報の更新・見出し構成の改善・内部リンクの追加・E-E-A-T要素の強化を行うことで、新規記事を書くより少ない工数で順位アップを狙えます。",
  },
];

const faqItems = [
  {
    q: "ブログ記事を書く頻度はどのくらいが理想ですか？",
    a: "週1〜2本が一般的な目安ですが、量より質が重要です。月に4本の薄い記事より、月に2本でも検索意図を深く満たす高品質な記事の方が成果につながります。リソースが限られている場合は、1本あたりの質を上げることを優先してください。継続性も重要なため、無理なく続けられる頻度を設定しましょう。",
  },
  {
    q: "どのくらいの期間でSEO効果が出始めますか？",
    a: "新規サイトでは最初の効果が出るまで3〜6ヶ月かかることが一般的です。ただし、競合が少ないロングテールキーワードは1〜2ヶ月で上位表示されるケースもあります。既存サイトでのリライト施策は比較的早く効果が出ることがあります。SEOは長期投資と捉え、継続的に取り組むことが重要です。",
  },
  {
    q: "AIでブログ記事を書いても問題ありませんか？",
    a: "AI生成コンテンツはGoogleのポリシーでは禁止されていませんが、一次情報・専門性・独自視点が欠けた薄いコンテンツは低品質として評価が下がるリスクがあります。AIを「叩き台・下書き作成」に使い、専門家の知見・実体験・独自データを加えて高品質に仕上げることをお勧めします。",
  },
  {
    q: "ブログ記事と会社のサービスページはSEO上どう使い分けますか？",
    a: "サービスページは「購買型・商業調査型」のキーワードに対応し、ブログ記事は「情報収集型」のキーワードに対応するのが基本です。ブログ記事で情報収集段階のユーザーを集め、内部リンクでサービスページへ誘導するという「ファネル構造」を意識した設計が効果的です。",
  },
  {
    q: "過去に書いた記事をリライトするべき基準は何ですか？",
    a: "Google Search Consoleで「表示回数は多いがクリック率が低い」または「2〜3ページ目に停滞している」記事を優先リライト対象にします。また、情報が古くなった記事や、公開後に上位表示できなかった記事も対象です。リライト時はタイトル・見出し・E-E-A-T要素・内部リンクを重点的に見直します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったページ設計" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "SEO戦略の出発点" },
  { href: "/seo/seo-writing", label: "SEOライティング", desc: "検索意図に沿った文章作成" },
  { href: "/ai/content", label: "AI×コンテンツ制作", desc: "AIを活用した記事制作" },
];

export default function BlogStrategyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0d1b2a] transition-colors" style={{ color: "#9ca3af" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9ca3af" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0d1b2a] transition-colors" style={{ color: "#9ca3af" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9ca3af" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>ブログ戦略</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
              SEO Knowledge
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,46px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              ブログ戦略・コンテンツ計画
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ブログ戦略とは、SEOで成果を出すために「何を・いつ・どのように書くか」を体系的に計画し、継続的にコンテンツを積み上げていく仕組みです。場当たり的な記事公開から脱却し、自然検索からの安定した集客基盤を構築します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_13_37.png"
            alt="資料を並べてレビューしている打ち合わせの様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* ブログ記事がSEOに強い理由 */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                ブログ記事がSEOに強い理由
              </h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                会社サイトの固定ページ（サービスページ・会社概要など）は一度作ると内容の更新頻度が低くなりがちです。一方、ブログ記事は継続的に新しいコンテンツを追加できるため、Googleからアクティブなサイトとして評価され、クロール頻度が高まります。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                また、ブログ記事は多様なキーワードに対応できます。サービスページでは「SEO対策 依頼」などの購買型キーワードを狙いますが、ブログでは「SEO対策 自分でできる」「SEO対策 効果が出るまで」など情報収集型のキーワードをカバーできます。潜在顧客が情報を調べている段階で接触できる「入口」が増えることが、ブログSEOの最大のメリットです。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                さらに、質の高いブログ記事は外部サイトからの被リンクを自然に獲得しやすく、E-E-A-T（専門性・権威性・信頼性）の強化にもつながります。ブログを通じて業界知識や専門性を発信し続けることで、サイト全体の評価が向上し、サービスページの検索順位にも好影響を与えます。
              </p>
            </div>
          </div>
        </section>

        {/* SEOブログ戦略の立て方 */}
        <section className="py-16 md:py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
                Strategy
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
                SEOブログ戦略の立て方
              </h2>
            </div>
            <div className="max-w-3xl">
              {steps.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        {/* 2-col: image + text */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_14_54.png"
                  alt="分析データを確認しながら打ち合わせをしている様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2vw,24px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
                  AI活用によるブログ運用効率化
                </h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  ChatGPTやClaudeなどのAIツールは、ブログ運用の効率化に大きく貢献します。キーワードに基づいた記事アウトラインの生成・見出し案の提示・下書き作成など、制作工程のスピードを大幅に向上させることが可能です。ただし、AIが生成したテキストをそのまま使うのではなく、専門家の知見・実際の体験・独自データを加えることが不可欠です。サイプレスでは、AIツールを活用しながらも一次情報と専門性を組み込んだ高品質なブログ運用支援を提供しています。コンテンツ戦略の立案から記事制作・定期リライトまで一貫してサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ブログ戦略についてよくある質問" bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ブログ戦略・コンテンツ計画のご相談"
          body="「ブログを始めたいが何から書けばいいかわからない」「記事を書いても成果が出ない」そのようなお悩みはサイプレスにご相談ください。キーワード戦略から記事制作・リライトまで一貫してサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}
