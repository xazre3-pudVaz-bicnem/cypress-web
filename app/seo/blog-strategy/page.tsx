import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ブログ・コンテンツ戦略とは｜SEOで成果を出す記事設計の方法｜株式会社サイプレス",
  description:
    "SEOに強いブログ・コンテンツ戦略の基礎から実践まで解説。記事テーマの設計・コンテンツカレンダー・SEO記事の書き方・更新頻度・リライト改善まで体系的に網羅。",
  keywords: ["ブログ戦略", "コンテンツ戦略", "SEO記事", "コンテンツカレンダー", "ブログSEO", "記事設計"],
  openGraph: {
    title: "ブログ・コンテンツ戦略とは｜SEOで成果を出す記事設計の方法｜株式会社サイプレス",
    description: "SEOに強いブログ戦略の実践ガイド。記事テーマ設計からリライト改善まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/blog-strategy" },
};

const faqItems = [
  {
    q: "ブログはどのくらいの頻度で記事を書けばいいですか？",
    a: "頻度より質が重要です。月1〜2本の高品質な記事の方が、週3本の薄い記事より長期的なSEO効果は高いです。ただし、一定の頻度を保つことでGoogleのクローラーがサイトを定期的に訪問するようになるため、月2〜4本程度を継続することが目安です。",
  },
  {
    q: "1記事の文字数はどのくらいが理想ですか？",
    a: "文字数よりも「検索意図を満たしているか」が重要です。一般的には1,500〜3,000字が多いですが、複雑なトピックや競合が多いキーワードでは5,000字以上になることもあります。文字を水増しするより、ユーザーの疑問を漏れなく解消することを優先してください。",
  },
  {
    q: "ブログとコラムはSEO上どう違いますか？",
    a: "SEO観点では違いはありません。どちらもキーワードに対するコンテンツとして評価されます。ただし、企業サイトにおいてはコラムをWordPressで運用し検索流入を得る役割とし、ブログをオウンドメディアとして位置付けることが多いです。重要なのは形式より、検索意図を満たした質の高いコンテンツかどうかです。",
  },
  {
    q: "コンテンツカレンダーとは何ですか？なぜ必要ですか？",
    a: "どのキーワードに対してどのようなコンテンツを、いつ公開するかを計画した一覧表です。季節性のあるキーワード・新規ページ・リライト予定・内部リンクの調整などを事前に設計しておくことで、戦略的なコンテンツ制作が可能になります。場当たり的な記事制作を防ぎ、トピッククラスターを計画的に構築できます。",
  },
  {
    q: "リライト（記事の改善）はどのタイミングで行いますか？",
    a: "公開後3〜6ヶ月で効果を計測し、11〜30位に位置する記事や、表示回数は多いがクリック率が低い記事を優先的にリライトします。情報の追加・構成の改善・タイトルの見直し・内部リンクの充実によって順位改善が見込めます。",
  },
  {
    q: "会社のブログに書くべきネタが思いつきません。どうすれば？",
    a: "お客様からよく受ける質問・FAQ・競合サイトの人気コンテンツ・業界の新しい動向・社内の専門的な知見などがネタ元になります。またGoogleサジェスト・AnswerThePublicなどのツールで「ユーザーが実際に検索している疑問」を調べることで、需要のあるネタを効率的に見つけられます。",
  },
  {
    q: "ブログ記事がGoogleにインデックスされません。どうすれば？",
    a: "主な原因として、XMLサイトマップへの未掲載・robots.txtでのクロールブロック・noindexタグの誤設定・公開から時間が浅いことが挙げられます。Google Search Consoleの「URL検査ツール」でインデックス状況を確認し、「インデックス登録をリクエスト」することで早期インデックスを促せます。",
  },
  {
    q: "外注でSEO記事を書いてもらう場合の注意点は？",
    a: "キーワード・検索意図・構成案・ターゲット読者・記事の目的を事前に明確化し、ライターに伝えることが重要です。納品後は自社で専門的見解の追加・一次情報の付与・E-E-A-T要素の強化を行うことで、薄いコンテンツにならないよう編集します。外注後のノーチェック公開は避けてください。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ制作" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "記事テーマに使うキーワード選定" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "記事の内部最適化" },
  { href: "/aio", label: "AIO対策", desc: "AI検索で記事が引用されるには" },
  { href: "/blog", label: "サイプレスのブログ", desc: "最新SEO情報を毎月更新" },
  { href: "/knowledge/content-seo", label: "コンテンツSEO基礎", desc: "初心者向けガイド" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "専門性・権威性の高め方" },
  { href: "/column/seo", label: "SEOコラム", desc: "SEOの最新情報・基礎解説" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "ブログ運用込みの料金目安" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "記事公開前の確認項目" },
];

export default function BlogStrategyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>ブログ・コンテンツ戦略</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Blog & Content Strategy</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ブログ・コンテンツ戦略
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ブログ・コンテンツ戦略とは、どのキーワードに対してどのような記事を、いつ・どのくらいの深さで公開するかを設計する戦略です。場当たり的な記事制作ではなく、トピッククラスターを意識した計画的なコンテンツ投資が重要です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コンテンツSEOの成果を最大化するには、継続的な記事制作と定期的なリライト改善の両方が必要です。単発の記事量産ではなく、ユーザーの検索体験を設計する視点でコンテンツを積み上げることが重要です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_13_52.png" alt="ブログ戦略・コンテンツカレンダー・SEO記事設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* コンテンツ戦略なしのリスク */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Strategy Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              コンテンツ戦略なしのSEOで失う4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "ターゲットキーワードが散漫になる", b: "ブログ記事を思いつきで書き続けても、特定のテーマでの専門性がGoogleに評価されません。テーマを絞ったピラーコンテンツ戦略で権威性を積み上げることが重要です。" },
                { t: "記事を書いても流入がゼロ", b: "検索ボリュームのないキーワードや競合が強すぎるキーワードを狙った記事は、どれだけ質が高くても検索流入がゼロになります。戦略的なキーワード設計が集客の前提です。" },
                { t: "継続できずにコンテンツが停止", b: "毎回「何を書こう」から始める運用は必ず行き詰まります。コンテンツカレンダーで3ヶ月先までテーマを決めておくことで、継続できる体制を作れます。" },
                { t: "ブランドの専門性が伝わらない", b: "テーマがバラバラなブログは「この会社の専門は何か」がGoogleにもユーザーにも伝わりません。特定領域での専門性を示すコンテンツ群がE-E-A-T向上の核心です。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* コンテンツ戦略の設計 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Content Strategy</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を出すコンテンツ戦略の設計
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "キーワードグループの設計", body: "対策キーワードをテーマ別にグループ化（クラスタリング）し、ピラーページとクラスターページの役割を決めます。キーワード群全体をマッピングすることで、どのコンテンツを優先するかの優先度が明確になります。" },
                { title: "コンテンツカレンダーの作成", body: "月単位・四半期単位で「どのキーワードの記事を、いつ公開するか」を計画します。季節性キーワードはピーク2〜3ヶ月前に公開。新規記事とリライトのバランスも計画に入れます。" },
                { title: "記事構成案の標準化", body: "記事ごとにタイトル・URL・H1・H2構成・文字数目安・検索意図・内部リンク先を事前に定義した構成案を作成します。標準化することで、外注ライターへの品質指示も明確になります。" },
                { title: "リライトサイクルの設定", body: "公開後3〜6ヶ月で成果を計測し、11〜30位の記事を優先的にリライトするサイクルを設定します。リライトは新規記事制作より成果が出やすく、費用対効果の高い施策です。" },
                { title: "内部リンク計画の立案", body: "新規記事を公開するたびに、既存ページとの内部リンクを設計します。新記事→関連コンテンツ、関連コンテンツ→新記事の相互リンクを設定することで、クロールとページ評価の伝播を促進します。" },
                { title: "AIO対策を兼ねたコンテンツ設計", body: "ChatGPT・Gemini・Perplexityなどのレビューで引用されるには、E-E-A-Tが高く・要点が整理された・FAQ形式のコンテンツが有効です。AIO（AI検索最適化）を意識したコンテンツ設計をブログ戦略に組み込みます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの支援内容 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのブログ・コンテンツ戦略支援
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "コンテンツ戦略の立案", body: "ビジネス目標から逆算したキーワードグループの設計と、コンテンツカレンダーの作成を行います。どの順番でコンテンツを積み上げるかの優先度付けが成果を左右します。" },
                { title: "記事構成案・SEO指示書の作成", body: "ライターへの指示書（記事テーマ・対策キーワード・検索意図・H2構成・注意事項）を作成します。外注ライターの品質を担保し、SEOに強い記事を安定して制作できる体制を整えます。" },
                { title: "SEO記事の制作代行", body: "サイプレスが直接コンテンツを調査・執筆するプランです。キーワード調査から構成案・ライティング・内部リンク設定まで一貫して担当します。" },
                { title: "既存記事のリライト", body: "現在の記事のGSCデータを分析し、11〜30位の記事を優先的にリライトします。情報の追加・構成改善・タイトル最適化・内部リンクの充実を実施します。" },
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

        <FaqSection items={faqItems} heading="ブログ・コンテンツ戦略についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ブログ・コンテンツ戦略のご相談"
          body="SEOで成果を出すコンテンツ設計と記事制作をトータルでご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
