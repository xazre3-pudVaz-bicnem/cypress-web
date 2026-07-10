import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "コンテンツSEOとは｜検索意図に合ったコンテンツ制作の方法｜株式会社サイプレス",
  description:
    "コンテンツSEOの基礎から実践まで解説。検索意図の分析・キーワード設計・構成案の作成・ライティング・E-E-A-T強化まで体系的に網羅。継続的な検索流入を生むコンテンツ戦略とは。",
  keywords: ["コンテンツSEO", "SEOライティング", "検索意図", "E-E-A-T", "コンテンツマーケティング", "SEO記事"],
  openGraph: {
    title: "コンテンツSEOとは｜検索意図に合ったコンテンツ制作の方法｜株式会社サイプレス",
    description: "コンテンツSEOの実践ガイド。検索意図の分析からE-E-A-T強化まで徹底解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/content-seo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
        { "@type": "ListItem", position: 2, name: "SEO対策", item: "https://www.cypress-all.co.jp/seo" },
        { "@type": "ListItem", position: 3, name: "コンテンツSEO", item: "https://www.cypress-all.co.jp/seo/content-seo" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "コンテンツSEOとSEO記事の違いは何ですか？",
          acceptedAnswer: { "@type": "Answer", text: "SEO記事は主に検索エンジンを意識して書かれた記事のことを指し、コンテンツSEOはサイト全体として質の高いコンテンツを継続的に制作・改善していく戦略全体を指します。" },
        },
        {
          "@type": "Question",
          name: "検索意図とは何ですか？",
          acceptedAnswer: { "@type": "Answer", text: "検索意図とは、ユーザーが特定のキーワードで検索する際の目的や動機のことです。「知りたい（Know）」「行きたい（Go）」「買いたい（Buy）」「やりたい（Do）」の4種類に分類されます。" },
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "コンテンツSEOとSEO記事の違いは何ですか？",
    a: "SEO記事は主に検索エンジンを意識して書かれた記事のことを指し、コンテンツSEOはサイト全体として質の高いコンテンツを継続的に制作・改善していく戦略全体を指します。コンテンツSEOはブログ記事だけでなく、サービスページ・事例ページ・FAQページなども含む包括的な概念です。",
  },
  {
    q: "検索意図とは何ですか？どうやって分析しますか？",
    a: "検索意図とは、ユーザーが特定のキーワードで検索する際の目的や動機のことです。「知りたい（Know）」「行きたい（Go）」「買いたい（Buy）」「やりたい（Do）」の4種類に分類されます。分析は、そのキーワードで上位表示されているページの内容・形式・深さを確認することで把握できます。",
  },
  {
    q: "コンテンツSEOはどのくらいの頻度で記事を書けばいいですか？",
    a: "頻度より質が重要です。月1〜2本の高品質な記事の方が、週3本の薄い記事より長期的なSEO効果は高いです。ただし、一定の頻度を保つことでGoogleのクローラーがサイトを定期的に訪問するようになるため、月2〜4本程度を継続することが一般的な目安です。",
  },
  {
    q: "E-E-A-Tとは何ですか？コンテンツSEOでどう活用しますか？",
    a: "E-E-A-T（経験・専門性・権威性・信頼性）はGoogleが品質評価で重視する指標です。コンテンツSEOでは、著者の専門性を明示する著者プロフィール、一次情報・体験談の掲載、外部からの引用・言及、会社情報の充実などを通じてE-E-A-Tを高めます。特に医療・法律・金融などYMYLジャンルでは最重要です。",
  },
  {
    q: "AIでSEO記事を書いても問題ありませんか？",
    a: "AIを活用してコンテンツを効率的に作成すること自体は問題ありません。ただし、AI生成のままで品質チェック・一次情報の追加・専門的見解の付与をしないと、薄いコンテンツと判断されるリスクがあります。AIはあくまでドラフト作成の効率化ツールとして使い、人間による編集・品質向上を必ず行うことが重要です。",
  },
  {
    q: "既存コンテンツのリライトは効果がありますか？",
    a: "非常に効果的です。特に検索順位が11〜30位にある記事（もう少しで上位に入れるコンテンツ）は、情報の追加・構成の改善・内部リンクの充実によって大幅に順位が改善するケースがあります。新しい記事を量産するより、既存コンテンツを改善する方が短期的な成果を得やすいことが多いです。",
  },
  {
    q: "競合が多いキーワードでもコンテンツSEOは有効ですか？",
    a: "競合が強いメインキーワードで即座に上位表示することは難しいですが、ロングテールキーワード（検索ボリュームは小さいが意図が明確なキーワード）でコンテンツを積み上げることで、段階的にドメイン評価を高め、最終的にはメインキーワードでも評価されるようになります。",
  },
  {
    q: "コンテンツSEOの成果はどのように計測しますか？",
    a: "Google Search ConsoleとGoogle Analyticsを連携して計測します。対策キーワードの順位変動・クリック数・表示回数・セッション数・直帰率・コンバージョン数などをKPIとして設定します。記事別のパフォーマンスを分析し、改善優先度の高いコンテンツを特定します。",
  },
  {
    q: "トピッククラスターとは何ですか？",
    a: "トピッククラスターとは、1つのメインテーマを扱う「ピラーページ」と、そのサブテーマを扱う「クラスターコンテンツ」を内部リンクで相互接続するコンテンツ設計手法です。例えば「SEO対策」をピラーページとし、「キーワード調査」「内部SEO」「コンテンツSEO」などのクラスターコンテンツを連携させることで、テーマ全体の権威性が高まります。",
  },
  {
    q: "コンテンツSEOとコンテンツマーケティングの違いは何ですか？",
    a: "コンテンツSEOは主に検索エンジンからの自然流入を増やすことを目的とし、特定のキーワードへの対策を軸にコンテンツを設計します。コンテンツマーケティングはより広義で、SEOだけでなくSNS・メルマガ・動画など複数チャネルを活用してブランド認知・ナーチャリング・CVを目指す戦略全体を指します。両者は重なる部分が多く、多くの場合は連携して実施されます。",
  },
  {
    q: "コンテンツの文字数はどのくらいが適切ですか？",
    a: "文字数に最適な決まりはありませんが、そのキーワードで上位表示されているページの文字数を参考にします。「〇〇とは」のような情報提供型キーワードでは2,000〜5,000文字程度、「〇〇 比較」のような検討型キーワードでは1,500〜3,000文字程度が目安です。文字数を無理に増やすより、検索意図を満たす質の高い情報を提供することを優先します。",
  },
  {
    q: "YMYLとは何ですか？コンテンツSEOでどう対応すべきですか？",
    a: "YMYL（Your Money or Your Life）とは、人の健康・財産・安全・幸福に影響を与えうる情報ジャンルを指します。医療・法律・金融・ニュースなどが該当します。YMYLジャンルでは特にE-E-A-Tが厳しく評価されるため、資格保有者・専門家の監修明示、医学的根拠への出典リンク、会社情報の充実が必須です。",
  },
  {
    q: "コンテンツSEOでロングテールキーワードを狙うメリットは？",
    a: "ロングテールキーワードは検索ボリュームが小さい代わりに、検索意図が明確で競合が少ないことが多いです。初期段階のサイトやドメイン評価が低いサイトでも順位を取りやすく、コンバージョン率も高い傾向があります。複数のロングテールキーワードを積み上げることで、サイト全体のドメイン評価が高まり、やがてメインキーワードでも評価されるようになります。",
  },
  {
    q: "SEOライティングでやってはいけないことは何ですか？",
    a: "キーワードの過剰な詰め込み（キーワードスタッフィング）・他サイトからのコピー・薄いコンテンツの量産・ユーザーには見えないテキストの設置・隠しリンクはGoogleのガイドライン違反です。また、AI生成コンテンツをそのまま大量公開することは品質問題につながります。ユーザーにとって役立つコンテンツを誠実に作ることが基本です。",
  },
  {
    q: "コンテンツSEOでサムネイル・画像は重要ですか？",
    a: "重要です。適切な画像はユーザーの理解を助け、ページの滞在時間を延ばす効果があります。画像には必ずalt属性を設定し、Google画像検索からの流入も狙います。OGP画像（SNSシェア時のサムネイル）を最適化することで、SNSからの流入増加にもつながります。ただし重い画像はCore Web Vitalsに悪影響を与えるため、WebP形式・適切なサイズに最適化します。",
  },
  {
    q: "コンテンツSEOに必要なツールは何ですか？",
    a: "必須ツールはGoogle Search Console（順位・クリック計測）・Google Analytics 4（セッション・CV計測）・Googleキーワードプランナー（検索ボリューム調査）の3つです。有料ツールとしてはAhrefs・Semrush・Moz（競合分析・被リンク調査）、Rank Tracker（順位追跡）、ミエルカ・SEMrush（コンテンツギャップ分析）などが広く使われています。",
  },
  {
    q: "コンテンツSEOの外注費用の目安は？",
    a: "記事1本の制作費用は、キーワード調査・構成案・ライティング・内部SEO設定を含む場合、2,000〜5,000文字の記事で2〜5万円程度が目安です。月次コンテンツSEO支援（戦略立案・記事制作・計測・改善）を一括で依頼する場合は月10〜30万円程度のプランが一般的です。業種・専門性・記事の深さによって費用は変動します。",
  },
  {
    q: "コンテンツSEOとAIO（AI検索対策）はどう連携させますか？",
    a: "ChatGPT・Gemini・PerplexityなどのAI検索からの引用を増やすには、E-E-A-Tの高いコンテンツ・構造化データの実装・FAQ形式でのコンテンツ設計が有効です。AI検索は質問形式の検索が多いため、「〇〇とは」「〇〇の方法」「〇〇の違い」といった形式のFAQコンテンツを充実させることが両立した対策になります。",
  },
  {
    q: "コンテンツSEOの成果が出るまでにどのくらいかかりますか？",
    a: "新規ページが検索結果に表示され始めるまでに2〜4週間、上位10位以内への到達には3〜6ヶ月以上かかることが一般的です。ドメイン評価・競合の強さ・コンテンツの質によって大きく異なります。既存コンテンツのリライトは新規作成より早く（4〜8週間程度で）効果が出るケースもあります。",
  },
  {
    q: "コンテンツSEOにおける「薄いコンテンツ」とはどういう意味ですか？",
    a: "薄いコンテンツ（Thin Content）とは、ユーザーに対して実質的な価値を提供しないコンテンツのことです。他サイトの情報を言い換えただけ・AI生成のまま品質向上なし・情報量が極端に少ない・検索意図を満たしていないなどが該当します。Googleは薄いコンテンツを低品質と評価し、順位を下げたりインデックスしないことがあります。",
  },
  {
    q: "コンテンツSEOで季節性・時事性のあるキーワードはどう扱いますか？",
    a: "季節性キーワード（「確定申告 書き方」「引越し 時期」など）は毎年検索が増える時期の1〜2ヶ月前にコンテンツを公開または更新することで、需要ピーク時に上位表示を狙います。時事性キーワードは速報性が重視されるためNews Schema・Article Schemaの実装が有効です。常緑コンテンツ（Evergreen Content）と時事コンテンツを組み合わせたカレンダー設計が理想的です。",
  },
  {
    q: "コンテンツSEOと内部SEOはどう連携させますか？",
    a: "コンテンツSEOで作成した記事に対して、適切なtitleタグ・メタディスクリプション・見出し構造・alt属性・構造化データ・内部リンクを設定することが内部SEOです。両者は表裏一体の関係にあり、高品質なコンテンツがあっても内部SEOが不十分なページは評価されにくくなります。コンテンツ制作のワークフローに内部SEO設定を組み込むことで、公開後すぐに評価されやすい状態にできます。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "対策キーワードの選定" },
  { href: "/seo/blog-strategy", label: "ブログ・コンテンツ戦略", desc: "記事設計と継続的な運用" },
  { href: "/seo/seo-writing", label: "SEOライティング", desc: "検索意図に沿った文章の書き方" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "コンテンツの現状評価" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "表示速度・Core Web Vitals" },
  { href: "/aio", label: "AIO対策", desc: "AI検索でのコンテンツ引用" },
  { href: "/aio/eeat", label: "E-E-A-T強化", desc: "AI検索・SEOの信頼性向上" },
  { href: "/knowledge/content-seo", label: "コンテンツSEO基礎", desc: "初心者向けガイド" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "専門性・権威性の高め方" },
  { href: "/knowledge/seo-ranking-factors", label: "SEOランキング要因", desc: "Googleが評価するコンテンツの要素" },
  { href: "/knowledge/topic-cluster", label: "トピッククラスターとは", desc: "コンテンツ設計の基本手法" },
  { href: "/guide/keyword-research-basics", label: "キーワード調査の基本", desc: "検索意図別のキーワード選定法" },
  { href: "/guide/content-brief", label: "コンテンツ構成案の作り方", desc: "SEO記事の設計手順" },
  { href: "/column/seo", label: "SEOコラム", desc: "SEOの最新情報・基礎解説" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "コンテンツSEOの料金目安" },
  { href: "/checklist/seo-basics", label: "SEO基本チェックリスト", desc: "コンテンツSEO確認項目" },
  { href: "/faq/seo-basics", label: "SEOよくある質問", desc: "コンテンツSEOの疑問集" },
  { href: "/glossary/e-e-a-t", label: "E-E-A-T用語解説", desc: "経験・専門性・権威性・信頼性の定義" },
  { href: "/glossary/search-intent", label: "検索意図とは", desc: "4分類の詳細解説" },
  { href: "/solutions/seo-content", label: "SEOコンテンツ制作", desc: "記事制作からリライトまで一括支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "SEO対応サイト制作" },
];

export default function ContentSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>コンテンツSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Content SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コンテンツSEO
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              コンテンツSEOとは、ユーザーの検索意図に合致した質の高いコンテンツを継続的に制作・拡充することで、検索流入を増やす施策です。単に記事を書くのではなく、誰のどんな疑問・課題に答えるかを明確にした上でコンテンツを設計することが重要です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コンテンツSEOは一度の取り組みで完結するものではなく、継続的なコンテンツ制作とリライト・改善の繰り返しによって成果が積み上がります。長期的な視点で戦略を立て、検索流入という資産を積み上げていく施策です。
            </p>
          </div>
        </section>

        {/* Visual */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.jpg" alt="コンテンツSEO・記事制作のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <ul className="max-w-3xl space-y-0">
              {[
                "コンテンツSEOとは何か、なぜ検索流入の獲得に効果的なのか",
                "検索意図の4分類（Know・Go・Buy・Do）と分類に応じたコンテンツ設計の違い",
                "キーワード調査から構成案・執筆・公開後計測までの具体的なフロー",
                "E-E-A-T（経験・専門性・権威性・信頼性）を高めるコンテンツ設計の実践方法",
                "トピッククラスターによるサイト全体のテーマ権威性の高め方",
                "業種別のコンテンツSEO活用ポイントと優先して取り組むべきキーワード",
                "成果計測に使うKPIと、リライト・改善のタイミングの判断方法",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[13px] font-semibold shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <span className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{item}</span>
                </li>
              ))}
              <li style={{ borderTop: "1px solid #E8E4DC" }} />
            </ul>
          </div>
        </section>

        {/* コンテンツSEOの流れ */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Process</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コンテンツSEOの進め方
            </h2>
            <div className="max-w-4xl">
              {[
                {
                  step: "STEP 01",
                  title: "キーワード調査・検索意図の分析",
                  body: "まずビジネス目標に関連するキーワードを洗い出し、月間検索ボリューム・競合難易度・検索意図を調査します。「知りたい」「比較したい」「買いたい」「近くで探したい」など、ユーザーがそのキーワードで何を求めているかを理解することが第一歩です。キーワードプランナー・Googleサジェスト・関連キーワードツールを活用します。検索意図と自社が提供できる情報が合致しているかを確認してからキーワード選定を確定します。",
                },
                {
                  step: "STEP 02",
                  title: "競合ページ分析・コンテンツギャップの発見",
                  body: "対策キーワードで現在上位に表示されているページを詳細に分析します。どのような構成・深さ・量のコンテンツが評価されているかを把握し、自社が提供できる付加価値（一次情報・独自の観点・より詳細な解説）を特定します。競合にない視点を加えることが差別化の鍵です。上位10ページの共通する見出し・話題を洗い出し、必ず含めるべきトピックを特定します。",
                },
                {
                  step: "STEP 03",
                  title: "コンテンツ構成案の設計",
                  body: "検索意図と競合分析をもとに、記事の目次・構成案を設計します。どの見出し（H2・H3）でどの情報を提供するかを決め、読者が記事を読み終えたときに得られる価値を明確にします。E-E-A-T（経験・専門性・権威性・信頼性）が伝わる構成を意識します。導入→概念説明→具体的な手順・方法→よくある質問の流れが多くの情報提供型キーワードで有効な構成です。",
                },
                {
                  step: "STEP 04",
                  title: "ライティング・一次情報の付与",
                  body: "構成案に沿ってコンテンツを執筆します。AIを活用する場合も、一次情報（実体験・独自調査・専門知識）を加えることが必須です。ユーザーにとって本当に価値のある情報を、わかりやすく・具体的に・誠実に伝えることを最優先にします。見出しごとに結論→理由→具体例の順で書くことで、読みやすく情報密度の高い文章になります。",
                },
                {
                  step: "STEP 05",
                  title: "内部SEO最適化・画像設定",
                  body: "タイトルタグ・メタディスクリプション・見出しタグ・内部リンク・alt属性・URLを最適化します。また構造化データ（Article・FAQPage）を実装し、AI検索での引用可能性も高めます。公開前にモバイル表示・ページ速度を確認し、Core Web Vitalsに影響する問題がないかを確認します。",
                },
                {
                  step: "STEP 06",
                  title: "公開後の計測・リライト改善",
                  body: "公開後はGoogle Search Consoleで掲載順位・クリック率・表示回数を追跡します。3〜6ヶ月後に成果が出ていないコンテンツはリライトを実施。情報の更新・構成の改善・内部リンクの追加を行い、継続的に順位改善を図ります。特に11〜30位のコンテンツはリライトによって大幅な順位改善が見込める「準上位」コンテンツとして優先します。",
                },
              ].map((s, i) => (
                <div key={i} className="flex gap-8 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="shrink-0">
                    <p className="text-[11px] font-semibold" style={{ color: "#9CA3AF" }}>{s.step}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{s.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{s.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 検索意図の4分類 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Search Intent</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              検索意図の4分類とコンテンツ設計
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              すべてのキーワードには「なぜ検索したか」という意図があります。コンテンツSEOでは、この検索意図を正確に把握し、意図に合ったコンテンツを設計することが成果の分かれ目になります。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  type: "Know（知りたい）",
                  example: "例：「SEOとは」「内部SEO 方法」",
                  body: "情報収集・学習目的の検索です。コンテンツは「〇〇とは」「〇〇の方法」の解説記事形式が基本です。読み終えたときに「知りたかったことが全部わかった」と感じさせる網羅的な構成が求められます。FAQ・図解・具体例を豊富に盛り込み、E-E-A-Tを高める著者情報・出典を明示します。",
                },
                {
                  type: "Go（行きたい・訪れたい）",
                  example: "例：「渋谷 カフェ」「SEO会社 東京」",
                  body: "特定の場所・サイトへの訪問を目的とした検索です。Googleマップ・LocalBusiness構造化データとの連携が重要で、アクセス情報・地域名・営業時間の明示が必要です。地域SEO・MEO対策と組み合わせることで効果が高まります。",
                },
                {
                  type: "Buy（買いたい・依頼したい）",
                  example: "例：「SEO対策 費用」「SEO会社 おすすめ」",
                  body: "購入・依頼・申込を目的とした検索です。比較表・料金の明示・実績・お客様の声・FAQ（不安解消）・CTAボタンを含む購買支援コンテンツが求められます。サービスページ・料金ページ・事例ページをこの意図に対応させます。",
                },
                {
                  type: "Do（やりたい・解決したい）",
                  example: "例：「Google Search Console 設定方法」「内部リンク 増やし方」",
                  body: "具体的な操作・作業・問題解決を目的とした検索です。手順をステップ形式で示し、スクリーンショット・コードサンプルなどの具体的な補足情報を付けることが重要です。HowTo SchemaやVideo Schemaの実装でリッチリザルト獲得を狙います。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.type}</p>
                  <p className="text-[12px] mb-3 font-medium" style={{ color: "#9CA3AF" }}>{item.example}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* E-E-A-T強化 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>E-E-A-T</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              E-E-A-Tを高めるコンテンツ設計
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              Googleは「経験（Experience）・専門性（Expertise）・権威性（Authoritativeness）・信頼性（Trustworthiness）」をコンテンツ品質の評価軸としています。特にAI検索（AIO）で引用されるには、E-E-A-Tが高いコンテンツであることが重要です。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "著者情報・専門性の明示", body: "コンテンツを誰が書いたか（著者プロフィール・資格・経験年数）を明示します。匿名のコンテンツよりも、専門家が書いたと明確にわかるコンテンツの方がE-E-A-T評価が高くなります。著者プロフィールページにPerson Schemaを実装し、構造化データとして専門性を表現することも推奨です。" },
                { title: "一次情報・実体験の掲載", body: "他サイトに書いていない独自の調査結果・事例・体験談を含めることで、コピーコンテンツにはない独自性が生まれます。これがAI検索での引用可能性を高める最大の要因の一つです。具体的な数値・期間・事例の詳細を含めることで説得力が増します。" },
                { title: "引用・参照元の明示", body: "統計データ・調査結果を引用する際は必ず出典を明記します。信頼できる外部ソースへのリンクは、コンテンツの信頼性を高めます（権威あるページへの外部リンクはSEOにも有効）。引用する情報が最新であることも重要で、古い統計データは更新します。" },
                { title: "会社情報・連絡先の充実", body: "運営会社の情報（住所・電話・代表者名・設立年月）が明示されたサイトは信頼性が高いと評価されます。プライバシーポリシー・特定商取引法に基づく表記も整備します。Organization SchemaやLocalBusiness Schemaで会社情報を構造化することで、Googleによる信頼性評価が向上します。" },
                { title: "コンテンツの定期的な更新", body: "「最終更新日」を明示し、情報を定期的に更新することで、常に最新・正確な情報を提供している信頼できるサイトであることを示します。特に変化の早い分野では重要です。更新した際はSearch ConsoleからURL検査を実施し、再クロールを促します。" },
                { title: "外部からの引用・言及", body: "他サイトからリンクされている・メディアに掲載されている・SNSで言及されているといった外部評価が積み重なることで、権威性が高まります。被リンク獲得戦略と連動した取り組みが重要です。プレスリリース・業界団体への寄稿・インタビュー掲載なども権威性強化の手段です。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              コンテンツSEOに取り組む企業が直面しやすい課題を整理しました。自社の状況と照らし合わせて、優先的に対処すべき問題を特定してください。
            </p>
            <div className="max-w-4xl">
              {[
                {
                  title: "検索意図を無視したコンテンツを量産している",
                  body: "「とにかく記事を増やせばいい」という考えで、ユーザーが実際に求めている情報と合致しないコンテンツを大量に公開しているケースです。検索意図と合わないページはクリックされても直帰率が上がり、Googleからのシグナルが悪化します。まず既存コンテンツが対策キーワードの検索意図に合致しているかを確認します。",
                },
                {
                  title: "競合と同質な内容でオリジナリティがない",
                  body: "上位ページを参考にしすぎて、似たような構成・内容のコンテンツになっているケースです。Googleは独自の価値があるコンテンツを優遇します。一次情報（自社事例・調査データ・専門家の見解）を加えることで差別化し、「このサイトにしかない情報」があるページを目指すことが必要です。",
                },
                {
                  title: "E-E-A-Tが弱く著者情報・会社情報が不明確",
                  body: "コンテンツに著者名・プロフィールが記載されておらず、会社概要・連絡先情報も不十分なサイトは信頼性評価が低くなります。特にYMYL（医療・法律・金融）ジャンルでは著者の資格・専門性の明示が必須です。著者プロフィールページの整備と構造化データの実装が優先課題です。",
                },
                {
                  title: "リライトをせず古い情報のまま放置している",
                  body: "公開後に一度も更新されていない記事が多く、情報が古くなっているサイトでは順位が徐々に下がります。特にGoogleのアルゴリズム更新・業界トレンドの変化・法改正などが反映されていない記事は信頼性が低下します。公開後3〜6ヶ月を目安に更新日・内容を見直す運用フローを設けます。",
                },
                {
                  title: "コンテンツ間の内部リンクが設計されていない",
                  body: "個々の記事が孤立しており、関連ページへの内部リンクがないサイトでは、ユーザーの回遊が生まれず直帰率が高くなります。またクローラーも深部ページに到達しにくくなります。トピッククラスター設計に基づいてピラーページ↔クラスターページ間の内部リンクを整備します。",
                },
                {
                  title: "キーワードを詰め込みすぎた不自然な文章",
                  body: "同じキーワードを一定の密度で入れれば評価されるという誤解から、キーワードを過剰に繰り返した不自然な文章になっているケースがあります。Googleは文章の自然さも評価します。主題を明確にした上で、自然な文章の流れの中にキーワードが含まれる形を目指します。",
                },
                {
                  title: "コンテンツの成果を計測していない",
                  body: "記事を公開しても順位・クリック数・CVなどを計測しておらず、どのコンテンツが成果を出しているか把握できていないケースです。計測なしでは改善の優先順位も決められません。Search ConsoleとGA4を連携させ、コンテンツ別の流入・CVを定期的にレポートする仕組みを整えることが必要です。",
                },
                {
                  title: "ピラーページとクラスターコンテンツが分離している",
                  body: "メインテーマを扱う包括ページと、サブテーマを扱う個別ページが内部リンクで連携されておらず、サイト全体でのテーマ権威性が構築されていないケースです。トピッククラスター設計を導入し、ピラーページからクラスターコンテンツへ、またクラスターからピラーへの双方向リンクを整備します。",
                },
                {
                  title: "AIコンテンツの品質管理ができていない",
                  body: "AI生成ツールで大量に記事を作成しているが、人間による編集・一次情報の追加・品質チェックが行われず、薄いコンテンツとなっているケースです。Googleは生成AIの使用そのものを禁止していませんが、品質の低いコンテンツは評価されません。AIはドラフト作成の補助として使い、専門知識の付与・編集を必ず行うワークフローが必要です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のコンテンツSEO活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種によって狙うべきキーワードとコンテンツの形式が大きく異なります。自社の業種に合ったアプローチから着手することで、コンテンツSEOの成果が早まります。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  industry: "飲食店",
                  body: "「近くで探したい（Go）」意図と「知りたい」意図の両方に対応したコンテンツが重要です。「地域名 + 料理ジャンル + おすすめ」などのキーワードでのブログ記事・メニュー解説ページに加え、「お店のこだわり」「シェフのストーリー」などブランドストーリーコンテンツが差別化に効果的です。Googleビジネスプロフィールへの投稿とサイトコンテンツを連携させます。",
                },
                {
                  industry: "美容室・ネイルサロン",
                  body: "「ヘアケア方法」「髪質改善とは」「ジェルネイルの持ち」など施術関連の知識系コンテンツが集客に効果的です。施術ビフォーアフター事例ページを充実させ、スタイリスト別のデザイン集をコンテンツ化することでロングテールキーワードをカバーします。SNSと連携したビジュアルコンテンツ（画像alt属性最適化）でGoogle画像検索からの流入も狙います。",
                },
                {
                  industry: "歯科・クリニック",
                  body: "症状・治療方法の解説コンテンツにE-E-A-T（院長の資格・専門性明示）を組み合わせることが特に重要です。「虫歯の治療費用」「矯正歯科の種類と違い」「インプラントのリスク」など患者が不安に感じる疑問を解消するFAQ形式コンテンツが検索意図に合致します。医師・歯科医師の監修明示が必須で、Author SchemaとMedicalOrganization Schemaを実装します。",
                },
                {
                  industry: "建設・リフォーム",
                  body: "「費用・価格」「工期」「業者の選び方」などの検討段階コンテンツ（Buy意図）と「DIYの方法」「工事の流れ」などの知識系コンテンツ（Know・Do意図）を両立させます。施工事例コンテンツには工事の詳細（素材・工期・費用の目安・施主コメント）を含めることで信頼性が高まります。地域名を含む事例ページが特に検索ニーズと一致します。",
                },
                {
                  industry: "士業・コンサル",
                  body: "「相続手続きの流れ」「確定申告の方法」「会社設立の手順」など、専門性の高い手順解説コンテンツが大量の検索流入を生みます。コンテンツには必ず資格保有の著者情報・免責事項を明示し、YMYLジャンルとしての信頼性要件を満たします。「〇〇 費用 相場」「〇〇 メリット デメリット」など比較・検討系キーワードでコンバージョンにつながるコンテンツを優先します。",
                },
                {
                  industry: "不動産",
                  body: "「〇〇エリアの住みやすさ」「マンション vs 戸建て比較」「住宅ローンの計算方法」などの情報提供コンテンツでエリア知識・購入知識を訴求します。物件周辺の施設・学区・交通アクセスを解説したエリアコンテンツが地域SEOに直結します。RealEstateListing SchemaとLocalBusiness Schemaの実装で、検索結果でのリッチ表示も狙います。",
                },
                {
                  industry: "整骨院・接骨院",
                  body: "「腰痛の原因と治し方」「交通事故後の適切な対応」「肩こりのストレッチ方法」など症状別の知識系コンテンツが患者の検索行動に合致します。「〇〇症状 整骨院 地域名」というキーワードで近接する地域ページを作成し、MEOと連動させます。施術のビフォーアフター体験談・口コミの掲載がE-E-A-T強化と信頼性向上に効果的です。",
                },
                {
                  industry: "スクール・習い事",
                  body: "「ピアノ 始める年齢」「英会話 独学 vs スクール」「子供 プログラミング 何歳から」など、入会を検討する親・生徒が疑問に思うことをコンテンツ化します。無料体験・説明会ページへの内部リンクをコンテンツ全体に組み込み、知識獲得からCV（体験申込）への導線を設計します。生徒・保護者の声コンテンツがE-E-A-T（信頼性）強化に特に有効です。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装・改善フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コンテンツSEO 実装・改善フロー
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              コンテンツSEOは戦略→制作→計測→改善のサイクルを継続することで成果が積み上がります。初回実施から継続管理まで、具体的な手順を示します。
            </p>
            <div className="max-w-4xl">
              {[
                {
                  num: "01",
                  title: "ビジネス目標からキーワード軸を決める",
                  body: "「何を売りたいか」「どんなユーザーを集めたいか」を起点に、コンテンツで対策するキーワードの軸（テーマ）を決めます。「〇〇サービス + 地域名」「〇〇の方法」「〇〇 比較」など、獲得したいユーザー層に合ったキーワード群を優先順位とともに整理します。",
                },
                {
                  num: "02",
                  title: "キーワードの検索意図を上位10ページで確認する",
                  body: "対策キーワードをシークレットモードで検索し、上位10ページのタイトル・見出し・内容・形式を確認します。「記事形式か・比較表か・動画か」「情報提供か購買誘導か」を把握し、コンテンツの形式・深さ・方向性を決定します。上位ページに共通する見出しは必ず自コンテンツに含めます。",
                },
                {
                  num: "03",
                  title: "トピッククラスター設計でサイト全体を構造化する",
                  body: "ピラーページ（例：「SEO対策とは」）とクラスターコンテンツ（例：「内部SEO」「コンテンツSEO」「キーワード調査」）の関係を設計します。ピラーページは包括的な情報を提供し、クラスターへの内部リンクを配置します。クラスターからはピラーへの逆リンクを設けることで、テーマ全体の権威性が高まります。",
                },
                {
                  num: "04",
                  title: "構成案を作成し競合との差別化ポイントを明確にする",
                  body: "競合ページに含まれている見出しを網羅した上で、競合にない独自情報（一次情報・専門家コメント・独自事例）をどの見出しで追加するかを構成案に明示します。読者が「このページを読んで初めて知った」と感じる情報を1つ以上含めることを目標にします。",
                },
                {
                  num: "05",
                  title: "執筆・一次情報の付与と品質チェック",
                  body: "構成案に沿って執筆し、AIを活用する場合は必ず一次情報・専門的見解・具体的事例を人間が追加します。公開前に「検索意図を満たしているか」「事実誤認がないか」「読みやすいか」「著者情報が明示されているか」を確認します。文章の品質基準として、Google品質評価ガイドラインの「Helpful Content」要件を参考にします。",
                },
                {
                  num: "06",
                  title: "内部SEO設定・構造化データの実装",
                  body: "titleタグ・メタディスクリプション・H1〜H3・alt属性・URLを設定します。ブログ記事にはArticle Schema、FAQを含む場合はFAQPage Schemaを実装します。公開前にモバイル表示確認・PageSpeed Insightsで表示速度チェックを行います。",
                },
                {
                  num: "07",
                  title: "公開・Search Consoleで再クロールをリクエスト",
                  body: "公開後すぐにGoogle Search ConsoleのURL検査ツールからインデックス登録をリクエストします。XMLサイトマップが自動更新される設定になっていることも確認します。SNS・メルマガでの初期拡散も行い、初期のトラフィックシグナルを蓄積します。",
                },
                {
                  num: "08",
                  title: "公開3ヶ月後にSearch Consoleでパフォーマンスを確認",
                  body: "公開から3ヶ月後、Search Consoleで対策キーワードの掲載順位・クリック数・CTRを確認します。順位が11〜30位のコンテンツは「改善余地あり」としてリライト対象に指定します。表示回数が多いのにクリック率が低いページはtitleタグ・メタディスクリプションの改善を優先します。",
                },
                {
                  num: "09",
                  title: "リライト：情報追加・構成改善・内部リンク充実",
                  body: "リライト対象コンテンツに対して、競合ページの新しい情報・更新内容を確認し、情報を追加します。古いデータ・リンク切れを修正し、最終更新日を更新します。関連ページへの内部リンクを追加し、ピラーページとの連携を強化します。リライト後は再度URL検査でクロールを促します。",
                },
                {
                  num: "10",
                  title: "月次レポートと次月コンテンツ計画への反映",
                  body: "毎月のSearch Console・GA4レポートをもとに、成果の出たキーワードの周辺トピックへの展開・成果の出ていないコンテンツの改善計画を立てます。季節性キーワードのコンテンツ公開タイミングをコンテンツカレンダーに落とし込み、PDCAサイクルを継続します。",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{step.num}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{step.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{step.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標（KPI）
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              コンテンツSEOの効果を正しく評価するために、以下のKPIをSearch ConsoleとGA4で継続的に計測します。指標を複合的に見ることで、改善施策の方向性を正確に判断できます。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  kpi: "対策キーワードの平均掲載順位",
                  where: "Google Search Console「検索パフォーマンス > クエリ」",
                  detail: "コンテンツ公開後・リライト後の順位変化を追跡します。10位以内への到達、特に3位以内が目標です。順位が改善されていないコンテンツは競合との差別化不足・内部リンク不足が原因として疑います。",
                },
                {
                  kpi: "オーガニック検索クリック数・表示回数",
                  where: "Search Console「検索パフォーマンス」",
                  detail: "表示回数が多いのにクリック率（CTR）が低いページは、titleタグ・メタディスクリプションの魅力不足が原因です。CTR 3%以上を目標に設定し、低い場合はタイトルと説明文を改善します。",
                },
                {
                  kpi: "コンテンツページ別のセッション数",
                  where: "GA4「ページとスクリーン」+ オーガニックセグメント",
                  detail: "各コンテンツへのオーガニック検索からのセッション数を月次で追跡します。上位コンテンツの周辺テーマへの展開を優先し、流入の少ないコンテンツはリライトまたは統合を検討します。",
                },
                {
                  kpi: "コンテンツ経由のコンバージョン数",
                  where: "GA4「コンバージョン」+ 参照元/コンテンツ分析",
                  detail: "問い合わせ・資料請求・予約などのCVイベントが、どのコンテンツから発生しているかをGA4のコンバージョンパスで確認します。CVに貢献しているコンテンツへの内部リンクをサイト全体から強化します。",
                },
                {
                  kpi: "平均エンゲージメント時間・スクロール深度",
                  where: "GA4「ページとスクリーン」エンゲージメント時間",
                  detail: "エンゲージメント時間が短いコンテンツはユーザーの期待と内容がずれている可能性があります。スクロール深度計測（GA4カスタムイベント）を設定し、どこで読むのをやめているかを特定して改善します。",
                },
                {
                  kpi: "インデックス済みコンテンツ数の推移",
                  where: "Search Console「カバレッジ」",
                  detail: "新規公開コンテンツが正常にインデックスされているかを確認します。公開から1〜2週間でインデックスされない場合は内部リンク不足・noindex誤設定・品質問題を疑います。インデックス数の継続的な増加がコンテンツSEOの成長指標になります。",
                },
                {
                  kpi: "リピート訪問率・SNSシェア数",
                  where: "GA4「ユーザー獲得」/ SNS解析ツール",
                  detail: "同じユーザーが繰り返し訪問するコンテンツは、情報の鮮度・有益さが高いE-E-A-T評価につながります。SNSシェア数・被リンク獲得数が増えているコンテンツは権威性が高まっているシグナルです。",
                },
                {
                  kpi: "リッチリザルトの表示状況",
                  where: "Search Console「検索での見え方」",
                  detail: "FAQPage SchemaやArticle Schemaが正常に機能しているか確認します。FAQ表示が検索結果に出ると、表示面積の拡大によりクリック率向上が期待できます。エラーページはゼロを目標に管理します。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                  <p className="text-[11px] font-semibold mb-2" style={{ color: "#c4b89a" }}>確認場所: {item.where}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのコンテンツSEO支援
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "コンテンツ戦略立案", body: "ビジネス目標から逆算し、獲得すべきキーワード群・コンテンツカレンダー・優先度を設計します。どのキーワードから着手するかの優先度付けが、コンテンツSEOの成果を左右します。トピッククラスター設計を組み込み、サイト全体のテーマ権威性を高める戦略を策定します。" },
                { title: "記事企画・構成案作成", body: "検索意図を分析した上で、読者が記事を読み終えたときに「知りたかったことが全部わかった」と感じる構成案を作成します。競合との差別化ポイントを含む構成設計が重要です。上位10ページの分析結果をもとに、含めるべき情報・差別化ポイントを明確にします。" },
                { title: "SEO記事・コンテンツ制作", body: "サイプレスが直接コンテンツを執筆するプランと、構成案・指示書を提供して貴社スタッフが書くプランに対応しています。業種によっては専門家への取材・監修依頼も調整します。執筆後には内部SEO設定・構造化データ実装までを一括で対応します。" },
                { title: "既存コンテンツのリライト", body: "現在11〜30位に位置するコンテンツのリライトは費用対効果が高い施策です。情報の追加・構成の改善・内部リンクの充実を行い、上位表示を目指します。古い情報・リンク切れの修正・最終更新日の更新も合わせて実施します。" },
                { title: "コンテンツ効果計測・改善", body: "Google Search Consoleで月次のコンテンツパフォーマンスを追跡し、成果の出ているコンテンツの横展開・成果の出ていないコンテンツの改善を継続的に実施します。月次レポートと次月の改善計画を定期的にご提供します。" },
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

        <FaqSection items={faqItems} heading="コンテンツSEOについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="コンテンツSEOのご相談・無料診断"
          body="現在のコンテンツ状況を確認し、どのキーワードからコンテンツを積み上げるべきかをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
