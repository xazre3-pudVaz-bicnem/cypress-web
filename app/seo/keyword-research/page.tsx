import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "キーワード調査｜SEO対策の第一歩｜株式会社サイプレス",
  description:
    "キーワード調査の方法と重要性を解説。検索ボリューム・競合性・検索意図の3軸で最適なキーワードを選定し、成果が出るSEO戦略を構築します。Google Search Console・Ubersuggestの活用方法も紹介。",
  keywords: ["キーワード調査", "SEOキーワード", "検索ボリューム", "ロングテールキーワード", "検索意図", "SEO対策"],
  openGraph: {
    title: "キーワード調査｜SEO対策の第一歩｜株式会社サイプレス",
    description:
      "キーワード調査の方法と重要性を解説。検索ボリューム・競合性・検索意図の3軸で最適なキーワードを選定し、成果が出るSEO戦略を構築します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/keyword-research" },
};

const steps = [
  {
    title: "自社サービスに関するキーワードの洗い出し",
    body: "まず自社のサービス・商品・地域名・課題解決ワードなど思いつく限りのキーワードを列挙します。顧客がどのような言葉で検索するかを想像しながら、ブレインストーミング形式で幅広く収集します。この段階では質より量を優先し、後のステップで絞り込みます。",
  },
  {
    title: "Google Search Console での実績確認",
    body: "既にサイトが稼働している場合、Google Search Consoleの「検索パフォーマンス」レポートで現在流入しているキーワードを確認します。すでに一定の順位がついているキーワードは改善余地があり、リライトや内部リンク強化で効率よく順位アップを狙えます。",
  },
  {
    title: "Google Keyword Planner / Ubersuggest での検索ボリューム確認",
    body: "洗い出したキーワードの月間検索ボリュームを確認します。検索ボリュームが多すぎると競合が激しく、少なすぎると流入が見込めません。月間100〜3,000程度のロングテールキーワードは競合が少なく成果を出しやすいため、特に新規サイトでは積極的に狙います。",
  },
  {
    title: "競合サイトのキーワード調査",
    body: "上位表示されている競合サイトがどのキーワードで流入を獲得しているかを分析します。Ahrefs・SEMrush・Ubersuggestなどのツールを使えば、競合の上位キーワードや記事構成を把握できます。競合が手薄なキーワードを見つけることが、効率的な差別化の第一歩です。",
  },
  {
    title: "検索意図の分類（情報収集/商業/購買/ナビゲーション）",
    body: "同じキーワードでも検索意図は異なります。「情報収集型」は解説記事、「商業調査型」は比較・事例記事、「購買型」はサービスページ・LP、「ナビゲーション型」は公式ページが上位に表示されます。意図と合わないコンテンツを作成しても上位表示は困難なため、意図の特定が最重要です。",
  },
  {
    title: "ロングテールキーワードの特定",
    body: "3語以上で構成される具体的なキーワードをロングテールキーワードと呼びます。「SEO対策」より「SEO対策 中小企業 費用」の方が競合が少なく、検索意図が明確で、CVにつながりやすい傾向があります。ロングテールを積み上げることで、安定した集客基盤が築けます。",
  },
  {
    title: "優先順位付けと記事・ページ計画の策定",
    body: "調査したキーワードを「検索ボリューム × 獲得難易度 × CVへの近さ」で評価し、優先度を決定します。高優先キーワードから順に記事・ページを設計し、公開スケジュールを立てます。キーワードマップとして整理することで、コンテンツ計画が体系的になります。",
  },
];

const faqItems = [
  {
    q: "キーワード調査はどのくらいの頻度で行うべきですか？",
    a: "新規サイト立ち上げ時はまとまったキーワード調査を行い、その後は四半期に一度程度の見直しをお勧めします。業界トレンドや季節変動でキーワードの需要は変化するため、定期的なGoogle Search Consoleのデータ確認と組み合わせて運用するのが理想的です。",
  },
  {
    q: "検索ボリュームが少ないキーワードは狙う価値がありますか？",
    a: "月間100未満のキーワードでも、購買意図が明確なものはCV（コンバージョン）につながりやすいため十分価値があります。特に「地域名＋サービス名」のようなローカルキーワードは検索ボリュームが少なくても実際の問い合わせに直結するケースが多く、積極的に狙う価値があります。",
  },
  {
    q: "無料ツールだけでキーワード調査はできますか？",
    a: "Google Search Console・Google Keyword Planner・Googleサジェスト・関連検索など無料ツールだけでも基本的なキーワード調査は可能です。より精度を高めるにはUbersuggest（一部無料）やAhrefsなどの有料ツールが効果的ですが、まずは無料ツールで始めることをお勧めします。",
  },
  {
    q: "1つのページで複数のキーワードを狙えますか？",
    a: "メインキーワード1つに対し、関連するサブキーワードを自然に組み込む形が理想的です。意味的に近いキーワードであれば1ページで複数カバーできますが、まったく異なるキーワードを1ページで狙うと検索意図が分散し、どちらも上位表示しにくくなります。",
  },
  {
    q: "競合が強いキーワードは最初から諦めるべきですか？",
    a: "難易度の高い大型キーワードは最終目標として設定しつつ、まずはロングテールキーワードで成果を積み上げることをお勧めします。ロングテールで実績を作り、サイトの権威性（ドメインパワー）が高まった段階で競合の強いキーワードに挑戦する段階的戦略が効率的です。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったページ設計" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "コンテンツ計画・ブログ運用" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "タグ・構造最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
];

export default function KeywordResearchPage() {
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
              <span className="text-[12px]" style={{ color: "#374151" }}>キーワード調査</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
              SEO Knowledge
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,46px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              キーワード調査
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              キーワード調査とは、ユーザーが検索エンジンで入力するワードを体系的に調査・分析し、自社サイトが狙うべき最適なキーワードを選定するプロセスです。検索ボリューム・競合性・検索意図の3軸から評価し、SEO施策全体の方向性を決定する最初の重要ステップです。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="ノートパソコンでアナリティクスデータを確認している様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* キーワード調査とは */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                キーワード調査とは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                キーワード調査とは、ユーザーが検索エンジンで使用するキーワードを調査・分析し、自社サイトが上位表示を目指すべきキーワードを選定するプロセスです。SEO対策の出発点であり、どのキーワードを狙うかによってコンテンツ戦略・サイト構造・内部SEO施策のすべてが変わります。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                キーワード調査では主に3つの軸から評価を行います。まず「検索ボリューム」——そのキーワードが月に何回検索されているか。次に「競合性（KD: Keyword Difficulty）」——上位表示を獲得するために必要な難易度。そして「検索意図」——ユーザーがそのキーワードで何を求めているかです。この3軸を総合的に評価することで、現在の自社サイトの状態で実際に成果が出るキーワードを特定できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                キーワード調査を怠ると、需要のないキーワードで記事を書いたり、競合が圧倒的に強いキーワードを無策で狙ったりという非効率な状況が生まれます。正確なキーワード調査によって「勝てるキーワード」を特定することが、SEO投資の費用対効果を最大化する鍵です。
              </p>
            </div>
          </div>
        </section>

        {/* なぜキーワード調査がSEOの基本なのか */}
        <section className="py-16 md:py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                なぜキーワード調査がSEOの基本なのか
              </h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                どれほど質の高い記事を書いても、誰も検索しないキーワードで書いていては流入は得られません。また、競合が強大なキーワードを小規模サイトが狙っても上位表示は困難です。キーワード調査は「書くべきテーマ」「勝てる場所」を明確にすることで、SEO施策全体の効率を何倍にも引き上げます。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                また、検索意図の把握がなければコンテンツの形式を誤ります。情報収集型のキーワードにLP（ランディングページ）を当てても上位表示されず、購買型のキーワードに解説記事を当てても問い合わせにつながりません。キーワード調査によって「どのページ形式で」「どの深さで」応えるべきかが明確になります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                さらに、キーワード調査はサイト全体の設計にも影響します。関連キーワードをグループ化してトピッククラスターを設計したり、サイト階層に反映させることで内部リンク構造が整理され、Googleがサイトのテーマを正確に理解しやすくなります。キーワード調査はSEOの全施策を支える基盤です。
              </p>
            </div>
          </div>
        </section>

        {/* キーワード調査の手順 */}
        <section className="py-16 md:py-20" style={{ background: "#ffffff" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>
                Process
              </p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
                キーワード調査の手順
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
        <section className="py-16 md:py-20" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_14_54.png"
                  alt="データを分析しながら打ち合わせをしている様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2vw,24px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
                  サイプレスのキーワード調査支援
                </h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  サイプレスでは、キーワード調査から始まる体系的なSEO戦略立案を提供しています。Google Search Console・Ubersuggest・Ahrefsなどのデータを組み合わせ、貴社の競合環境・現在のドメイン状況・ビジネス目標を踏まえた上で「今すぐ狙うべきキーワード」「中長期で育てるキーワード」を明確に整理します。調査結果はキーワードマップとして納品し、コンテンツ計画・サイト設計に直接活用できる形式でご提供します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="キーワード調査についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="キーワード調査・SEO戦略のご相談"
          body="「どのキーワードを狙えばいいかわからない」「競合に勝てるキーワードを見つけたい」そのようなお悩みはサイプレスにご相談ください。キーワード調査から戦略立案まで一貫してサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}
