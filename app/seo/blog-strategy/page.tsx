import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ブログSEO戦略とは｜コンテンツマーケティングで成果を出す方法｜株式会社サイプレス",
  description:
    "SEOに強いブログ・コンテンツ戦略の基礎から実践まで解説。記事テーマ設計・コンテンツカレンダー・SEO記事の書き方・更新頻度・リライト改善・AIライティング活用まで体系的に網羅。",
  keywords: ["ブログ戦略", "コンテンツ戦略", "SEO記事", "コンテンツカレンダー", "ブログSEO", "記事設計", "コンテンツマーケティング", "リライト", "トピッククラスター", "投稿頻度"],
  openGraph: {
    title: "ブログSEO戦略とは｜コンテンツマーケティングで成果を出す方法｜株式会社サイプレス",
    description: "SEOに強いブログ戦略の実践ガイド。記事テーマ設計からリライト改善・AIライティング活用まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/blog-strategy" },
};

const faqItems = [
  {
    q: "ブログはどのくらいの頻度で記事を書けばいいですか？",
    a: "頻度より質が重要です。月1〜2本の高品質な記事の方が、週3本の薄い記事より長期的なSEO効果は高いです。ただし、一定の頻度を保つことでGoogleのクローラーがサイトを定期的に訪問するようになるため、月2〜4本程度を継続することが目安です。リソースが限られる場合は、新規記事より既存記事のリライト改善を優先する方が成果が出やすいケースもあります。",
  },
  {
    q: "1記事の文字数はどのくらいが理想ですか？",
    a: "文字数よりも「検索意図を満たしているか」が重要です。一般的には1,500〜3,000字が多いですが、複雑なトピックや競合が多いキーワードでは5,000字以上になることもあります。文字を水増しするより、ユーザーの疑問を漏れなく解消することを優先してください。競合記事の文字数を参考にしつつ、「この記事を読み終わればもう他を調べる必要がない」と感じられる内容量を目指します。",
  },
  {
    q: "ブログとコラムはSEO上どう違いますか？",
    a: "SEO観点では違いはありません。どちらもキーワードに対するコンテンツとして評価されます。ただし、企業サイトにおいてはコラムをWordPressで運用し検索流入を得る役割とし、ブログをオウンドメディアとして位置付けることが多いです。重要なのは形式より、検索意図を満たした質の高いコンテンツかどうかです。",
  },
  {
    q: "コンテンツカレンダーとは何ですか？なぜ必要ですか？",
    a: "どのキーワードに対してどのようなコンテンツを、いつ公開するかを計画した一覧表です。季節性のあるキーワード・新規ページ・リライト予定・内部リンクの調整などを事前に設計しておくことで、戦略的なコンテンツ制作が可能になります。場当たり的な記事制作を防ぎ、トピッククラスターを計画的に構築できます。月次で見直し、順位動向・検索トレンドに応じて優先度を調整することが重要です。",
  },
  {
    q: "リライト（記事の改善）はどのタイミングで行いますか？",
    a: "公開後3〜6ヶ月で効果を計測し、11〜30位に位置する記事や、表示回数は多いがクリック率が低い記事を優先的にリライトします。情報の追加・構成の改善・タイトルの見直し・内部リンクの充実によって順位改善が見込めます。1位〜10位の記事は内容の陳腐化を防ぐため半年ごとに情報を更新することが推奨されます。",
  },
  {
    q: "会社のブログに書くべきネタが思いつきません。どうすれば？",
    a: "お客様からよく受ける質問・FAQ・競合サイトの人気コンテンツ・業界の新しい動向・社内の専門的な知見などがネタ元になります。またGoogleサジェスト・関連検索ワード・AnswerThePublicなどのツールで「ユーザーが実際に検索している疑問」を調べることで、需要のあるネタを効率的に見つけられます。",
  },
  {
    q: "ブログ記事がGoogleにインデックスされません。どうすれば？",
    a: "主な原因として、XMLサイトマップへの未掲載・robots.txtでのクロールブロック・noindexタグの誤設定・公開から時間が浅いことが挙げられます。Google Search Consoleの「URL検査ツール」でインデックス状況を確認し、「インデックス登録をリクエスト」することで早期インデックスを促せます。",
  },
  {
    q: "外注でSEO記事を書いてもらう場合の注意点は？",
    a: "キーワード・検索意図・構成案・ターゲット読者・記事の目的を事前に明確化し、ライターに伝えることが重要です。納品後は自社で専門的見解の追加・一次情報の付与・E-E-A-T要素の強化を行うことで、薄いコンテンツにならないよう編集します。外注後のノーチェック公開は避けてください。",
  },
  {
    q: "ハウツー記事・比較記事・用語解説記事はどう使い分けますか？",
    a: "ハウツー記事（「〜の方法」「〜のやり方」）は手順を知りたいユーザー向けで購買検討段階の前。比較記事（「〜vs〜」「〜の選び方」）は複数選択肢を検討中のユーザーに最適で購買検討段階に効果的です。用語解説記事（「〜とは」）は認知獲得・ブランディングに寄与し、専門性のシグナルとして機能します。事例記事は具体性・信頼性の向上に有効で、コンバージョン直前のユーザーに響きます。" },
  {
    q: "古い記事はリライトすべきですか？削除すべきですか？統合すべきですか？",
    a: "判断基準は「現在のSEO価値があるか」と「検索意図に対応できているか」です。11〜30位で流入があれば積極的にリライト。流入がほぼゼロでテーマが薄い記事は削除またはnoindexを検討します。近いテーマの複数記事は1本に統合（301リダイレクト設定）することで評価を集約できます。削除する場合は301リダイレクトまたはnoindexで処理し、急な消去は避けます。",
  },
  {
    q: "AIライティングツールをSEO記事に使ってよいですか？",
    a: "Googleは「人の役に立つコンテンツ」を評価しており、AIが生成したかどうかより内容の質・独自性・E-E-A-Tを評価します。AIはアウトライン作成・下書き生成・リライトの補助に有効ですが、AIが書いたままの記事は独自性が低く差別化できません。一次情報（自社の経験・データ・専門家コメント）の追加と、人の目による編集が必須です。AI生成コンテンツの大量生成はGoogleのスパムポリシーに抵触する場合があります。",
  },
  {
    q: "トピッククラスターはどう設計しますか？ピラーページとクラスターページの違いは？",
    a: "ピラーページは特定テーマの「総合ガイド」として広く網羅的に扱うページ（例：「SEO対策とは」）。クラスターページはそのテーマのサブトピックを深掘りするページ（例：「キーワード調査の方法」「内部SEOの最適化」）。ピラーページはクラスターページへ内部リンクし、クラスターページはピラーページへ戻るリンクを設置します。これによりGoogleがテーマ全体での専門性を評価します。",
  },
  {
    q: "ブログのカテゴリはどのように設計するのがよいですか？",
    a: "カテゴリはユーザーの検索意図のグループと、Googleへの専門性シグナルの両方を兼ねます。カテゴリ数は5〜8個程度に絞り、各カテゴリに最低5〜10本以上の記事を集める方向で設計します。カテゴリページ自体にも説明文を追加し、コンテンツとしての価値を持たせます。カテゴリのURLスラッグには主要キーワードを含めます（例：/blog/seo/）。",
  },
  {
    q: "タイトルタグはどのように書けばSEOとクリック率の両方が上がりますか？",
    a: "対策キーワードをタイトルの前半に含める・数字や具体性を入れる（「5つの方法」「2024年版」）・ユーザーのベネフィットを示す・32文字以内を目安にする、が基本です。「【完全ガイド】」などのブラケットはクリック率向上に有効なケースがあります。Search ConsoleでCTRが低いページはタイトルのA/Bテストを検討します。",
  },
  {
    q: "ブログの著者情報はSEOに影響しますか？",
    a: "著者情報はE-E-A-T（経験・専門性・権威性・信頼性）の観点でSEOに影響します。特に医療・法律・金融などのYMYLジャンルでは著者の資格・経歴・プロフィールページへのリンクが評価に直結します。著者情報をPerson Schema（構造化データ）で実装するとさらに効果的です。",
  },
  {
    q: "コンテンツの鮮度（情報の新しさ）はSEOに影響しますか？",
    a: "「最新情報」が検索意図に含まれるキーワード（法改正・テクノロジー動向・価格情報など）では鮮度が重要な評価要素になります。lastmod（最終更新日）をXMLサイトマップとページに正確に記載し、内容を更新した際は必ず更新します。情報を更新せずに日付だけを変えることはGoogleのガイドラインに反します。",
  },
  {
    q: "SEO記事で内部リンクはどこに設置するのが効果的ですか？",
    a: "記事本文中の関連キーワードに自然な形でリンクを設置するのが最も効果的です。記事の冒頭・結論・関連セクションに設置します。また記事下の「関連記事」リンクは内部リンクとして機能します。重要なのはアンカーテキストにリンク先のキーワードを含めること。「こちら」「詳しくはこちら」という汎用テキストはSEO効果が低くなります。",
  },
  {
    q: "競合の強いキーワードでも記事を書く意味はありますか？",
    a: "競合の強いキーワードは短期では上位表示が難しいですが、長期的なブランド価値・専門性の積み上げ・ロングテールキーワードからの流入確保という観点で意義があります。まず競合が少ないロングテールキーワードで実績を作り、そこから上位キーワードに挑戦する段階的な戦略が現実的です。",
  },
  {
    q: "ブログ記事のSNSシェアはSEOに直接影響しますか？",
    a: "GoogleはSNSシェア数をランキング要因として明言していませんが、拡散により外部リンクが自然に増える・トラフィックが増加してクリック率や滞在時間が向上するという間接的な効果があります。SNSで拡散されやすい記事は、データや事例が豊富で引用しやすい形式のものです。AIO（AI検索）においても引用されやすいコンテンツ構造が共通します。",
  },
  {
    q: "ブログのSEO成果が出るまでどのくらいかかりますか？",
    a: "一般的には記事公開から3〜6ヶ月で順位が安定してくることが多いです。ドメイン権威（ドメインエイジ・外部リンク数）が高いサイトは早く、新規ドメインや弱いドメインは時間がかかります。最初の3〜6ヶ月は「11〜30位」圏内に入ることを目標とし、そこからリライトで上位を目指すのが現実的な設計です。",
  },
  {
    q: "サイプレスのブログ戦略支援はどのような内容ですか？",
    a: "キーワード調査からコンテンツカレンダー作成・記事構成案制作・ライティング代行・リライト改善・効果測定まで一貫して対応しています。部分的な支援（構成案だけ・月次のリライト診断だけ）も承っております。まずは無料のSEO診断でご相談ください。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "検索意図に合ったコンテンツ制作" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "記事テーマに使うキーワード選定" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "記事の内部最適化" },
  { href: "/seo/site-structure", label: "サイト構造設計", desc: "カテゴリ・URL・内部リンク設計" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "FAQPage・Article Schema" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "既存記事の課題を把握する" },
  { href: "/aio", label: "AIO対策", desc: "AI検索で記事が引用されるには" },
  { href: "/blog", label: "サイプレスのブログ", desc: "最新SEO情報を毎月更新" },
  { href: "/knowledge/content-seo", label: "コンテンツSEO基礎", desc: "初心者向けガイド" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "専門性・権威性の高め方" },
  { href: "/knowledge/rewrite", label: "リライトガイド", desc: "記事改善の判断基準と手順" },
  { href: "/knowledge/topic-cluster", label: "トピッククラスター設計", desc: "ピラーとクラスターの作り方" },
  { href: "/column/seo", label: "SEOコラム", desc: "SEOの最新情報・基礎解説" },
  { href: "/column/content-marketing", label: "コンテンツマーケティングコラム", desc: "記事設計の実践知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "ブログ運用込みの料金目安" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "記事公開前の確認項目" },
  { href: "/cases/seo", label: "SEO改善事例", desc: "ブログ運用による流入増加の事例" },
  { href: "/lp/seo-diagnosis", label: "無料SEO診断", desc: "記事の課題を無料で確認" },
  { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "ブログを活かせるサイト設計" },
  { href: "/knowledge/ai-writing", label: "AIライティング活用ガイド", desc: "ChatGPT・AIツールとSEOの関係" },
  { href: "/knowledge/content-calendar", label: "コンテンツカレンダー作成ガイド", desc: "3ヶ月先まで計画する方法" },
  { href: "/knowledge/blog-category", label: "ブログカテゴリ設計ガイド", desc: "専門性を高めるカテゴリ構成" },
];

export default function BlogStrategyPage() {
  return (
    <>
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

        {/* Hero Image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_13_52.png" alt="ブログ戦略・コンテンツカレンダー・SEO記事設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="font-bold text-white" style={{ fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                記事を書くことより、何を・いつ・なぜ書くかを設計することが先。<br />戦略なきコンテンツは積み重ならない。
              </p>
            </div>
          </div>
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "ブログSEO戦略の全体像と、なぜ「戦略なし」では成果が出ないのかの理由",
                "記事タイプ（ハウツー・比較・用語解説・事例）の使い分けと検索意図への対応方法",
                "コンテンツカレンダーの作り方と、リソースが限られる企業での現実的な投稿頻度の設定",
                "古い記事のリライト・統合・削除の判断基準と、GSCデータを使った優先順位の付け方",
                "AIライティングツールの活用方法と、SEO的に問題なく使うための注意点",
                "業種別のブログテーマ設計パターンと、公開から成果計測までの実施フロー",
              ].map((text, i) => (
                <div key={i} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
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

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              「記事を書いているのに成果が出ない」という相談の多くは、記事の質ではなく戦略の設計に問題があります。以下の状態に心当たりがある場合は、戦略の見直しが必要です。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-5xl">
              {[
                { title: "ブログ記事を書いても成果が出ない", body: "検索ボリュームがないキーワードを狙っている・競合が強いキーワードに正面から挑んでいる・記事が検索意図とズレているケースがほとんどです。まずSearch Consoleでどのキーワードで表示されているかを確認し、戦略の見直しから始めます。" },
                { title: "投稿が続かない・更新が止まっている", body: "毎回「何を書こう」から始める運用は体力を消耗します。コンテンツカレンダーで3ヶ月分のテーマを事前決定し、1記事あたりの制作フローを標準化することで継続できる体制が整います。" },
                { title: "記事の方向性が定まらない・テーマがバラバラ", body: "誰に向けて何のために書くかが明確でない状態。ペルソナと対策キーワードが決まっていないと、記事のトーン・深さ・テーマが毎回ブレます。まずコンテンツ戦略の「軸」を定義することが先決です。" },
                { title: "古い記事が足を引っ張っている", body: "情報が陳腐化した低品質な記事が多数残っていると、サイト全体のE-E-A-T評価を下げる可能性があります。古い記事は「リライト・統合・削除」のいずれかで処理し、サイト品質を底上げします。" },
                { title: "カテゴリ設計が雑で専門性が伝わらない", body: "カテゴリが多すぎる・カテゴリ名がキーワードと無関係・各カテゴリの記事が1〜2本しかない状態。カテゴリはSEOのサイロ構造を形成するため、5〜8個に絞って各カテゴリに十分な記事を積み上げます。" },
                { title: "キーワードのカニバリゼーションが起きている", body: "同じキーワードを複数の記事で狙っている状態。Googleがどの記事を評価すべきか迷い、両方の順位が下がることがあります。重複する記事は統合するか、対策キーワードを明確に分けて差別化します。" },
                { title: "記事に一次情報・独自性がない", body: "他のサイトの情報を言い換えただけの記事はGoogleにもユーザーにも価値が低く評価されます。自社の経験・事例・データ・専門家の見解を盛り込み「ここでしか読めない情報」を作ることがE-E-A-T強化の核心です。" },
                { title: "記事を公開したまま放置している", body: "コンテンツは公開で終わりではなく、GSCデータを見てリライト・内部リンク追加・情報更新を行うサイクルが重要です。特に1〜3年前の記事は情報が古くなり、競合に追い抜かれていることがあります。" },
                { title: "内部リンクが設定されていない", body: "記事に他の関連記事や主要サービスページへの内部リンクがない状態。新記事はサイロ構造に組み込んでこそクロール・PageRank伝播・回遊率向上の効果があります。公開時に内部リンク設定を標準作業に含めます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6 pr-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
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
                { title: "キーワードグループの設計", body: "対策キーワードをテーマ別にグループ化（クラスタリング）し、ピラーページとクラスターページの役割を決めます。キーワード群全体をマッピングすることで、どのコンテンツを優先するかの優先度が明確になります。難易度が低くボリュームが見込めるロングテールキーワードから着手し、徐々に競合の強いキーワードに展開する戦略が成果を出しやすいです。" },
                { title: "コンテンツカレンダーの作成", body: "月単位・四半期単位で「どのキーワードの記事を、いつ公開するか」を計画します。季節性キーワードはピーク2〜3ヶ月前に公開。新規記事とリライトのバランスも計画に入れます。リソースが限られる場合は新規記事：リライト＝1：1の比率を目安に、既存資産の改善に投資することで効率的に成果を最大化できます。" },
                { title: "記事タイプの使い分け", body: "ハウツー記事（認知〜検討段階）・比較・選び方記事（検討段階）・用語解説記事（認知段階）・事例・実績記事（意思決定段階）を使い分けます。各タイプが異なる検索意図・ファネルステージに対応するため、バランスよく揃えることでサイト全体のカバレッジが上がります。" },
                { title: "リライトサイクルの設定", body: "公開後3〜6ヶ月で成果を計測し、11〜30位の記事を優先的にリライトするサイクルを設定します。GSCで表示回数が多いのにCTRが低い記事はタイトル・メタディスクリプションを改善。クリックはされているのに直帰率が高い記事はコンテンツの質・構成を改善します。" },
                { title: "内部リンク計画の立案", body: "新規記事を公開するたびに、既存ページとの内部リンクを設計します。新記事→関連コンテンツ、関連コンテンツ→新記事の相互リンクを設定することで、クロールとページ評価の伝播を促進します。記事公開チェックリストに「内部リンク設定」を必須項目として組み込みます。" },
                { title: "AIO対策を兼ねたコンテンツ設計", body: "ChatGPT・Gemini・Perplexityなどのレビューで引用されるには、E-E-A-Tが高く・要点が整理された・FAQ形式のコンテンツが有効です。見出し構造を明確に・数字・事例・専門家の知見を含める・FAQ形式で疑問に直接答えるフォーマットが引用されやすい文章構造です。AIO（AI検索最適化）を意識したコンテンツ設計をブログ戦略に組み込みます。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 業種別のブログ戦略 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のブログ戦略パターン
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              業種によって「ユーザーが何を検索するか」「どのコンテンツが購買に近いか」が異なります。自社の業種に合わせたテーマ設計がコンテンツ投資の効率を高めます。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-5xl">
              {[
                {
                  industry: "飲食店・カフェ",
                  label: "Restaurant",
                  body: "季節メニューの紹介・産地・食材へのこだわり・シェフのレシピコラム・地域の食文化との関係。「渋谷ランチ おすすめ」「カフェ 一人 Tokyo」などエリア×シーン検索に対応した記事で地元ユーザーの来店動機を生み出します。",
                },
                {
                  industry: "美容院・エステ・ネイル",
                  label: "Beauty Salon",
                  body: "施術テクニックの解説・スタイル別ヘアカタログ・トレンドカラー紹介・お客様のビフォーアフター事例。「〜年秋ヘアトレンド」「くせ毛 ストレートパーマ 違い」などの比較・ハウツー記事が検索流入を生みます。",
                },
                {
                  industry: "建設・リフォーム・工務店",
                  label: "Construction",
                  body: "施工事例のビフォーアフター・工事の流れ・費用相場の解説・失敗しない業者の選び方。「〜のリフォーム費用相場」「外壁塗装 何年おきに」など検討段階ユーザーが検索するキーワードでの記事がコンバージョン直結します。",
                },
                {
                  industry: "士業・コンサルタント・専門家",
                  label: "Professional Service",
                  body: "法律・税務・労務のQ&A・法改正の解説・手続きの流れ・よくある失敗と対処法。専門性の高いコンテンツはE-E-A-T向上に直結します。「〜の申請方法」「〜の罰則」など具体的な疑問に答える記事が士業サイトの専門性を積み上げます。",
                },
                {
                  industry: "医療・クリニック・整体",
                  label: "Clinic / Healthcare",
                  body: "症状別の原因・治療法の違い・予防方法・受診すべきタイミング。YMYLジャンルのため医師・専門家監修の明示が必須です。「〜の症状 何科に行けばいい」「〜治療 保険適用」などの実用的な疑問に答えるコンテンツが信頼性を高めます。",
                },
                {
                  industry: "学習塾・スクール・教育",
                  label: "Education",
                  body: "入試・受験の傾向と対策・勉強方法・学校別合格事例・保護者向けの学習サポートコラム。「中学受験 いつから準備」「英会話 大人 独学 方法」など具体的な悩みに答える記事が保護者・学習者の検索をキャッチします。",
                },
                {
                  industry: "BtoB・SaaS・IT",
                  label: "B2B / SaaS",
                  body: "導入事例・業種別の活用方法・競合ツールとの比較・ROIの計算方法・業界特有の課題解決コラム。「〜ツール 比較」「〜業務 効率化 方法」など検討段階のビジネスパーソンが検索するキーワードで意思決定を後押しします。",
                },
                {
                  industry: "不動産・住宅",
                  label: "Real Estate",
                  body: "エリア別の家賃・物件相場・住み心地レポート・物件選びのポイント・引越し・住み替えの流れ。「〜区 一人暮らし 家賃相場」「マンション 購入 失敗しない 選び方」などの意向キーワードで購買検討層に直接アプローチします。",
                },
              ].map((item, i) => (
                <div key={i} className="py-7 pr-8" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase px-2 py-1" style={{ background: "#F9F8F5", color: "#6B7280" }}>{item.label}</span>
                    <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
          </div>
        </section>

        {/* 設計・実施フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ブログ戦略の設計から成果計測までのフロー
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              コンテンツ制作は「思いついたら書く」ではなく、以下のフローで計画的に進めることで成果が安定します。各ステップを省略すると、後の工程の品質が落ちます。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "STEP 01", title: "テーマ・ポジション定義", body: "「誰のために・何のテーマで・どんな目標を達成するために」ブログを運営するかを明確にします。ペルソナ・ビジネス目標（問い合わせ増・採用強化・ブランディング）・専門領域を定義することが、以降のキーワード選定・記事トーンの基準になります。" },
                { step: "STEP 02", title: "キーワード調査・クラスタリング", body: "Googleサジェスト・関連検索ワード・Search Console・Ahrefs/Semrushなどのツールでキーワードを収集します。検索ボリューム・競合の強さ・検索意図（情報収集か購買検討か）を評価し、テーマ別にグループ化（クラスタリング）します。" },
                { step: "STEP 03", title: "コンテンツカレンダーの作成", body: "クラスタリングしたキーワードを優先度順に並べ、いつどの記事を公開するかを計画します。季節性キーワードのスケジュール・新規記事とリライトの比率・ライターへのアサインも含めて計画します。最初は3ヶ月分を計画し、毎月末に翌月分を追加するローリング方式が継続しやすいです。" },
                { step: "STEP 04", title: "記事構成案（SEO指示書）の作成", body: "各記事について「対策キーワード・検索意図・タイトル案・URL・H2構成・文字数目安・内部リンク先・参照資料」を記した構成案を作成します。外注ライターへの指示書にもなり、品質のブレを防ぎます。構成段階で「競合の上位記事を超えるには何を加えるか」を設計します。" },
                { step: "STEP 05", title: "ライティング・一次情報の付加", body: "構成案をもとに執筆します。外注する場合も、自社の経験・事例・データ・専門的見解（一次情報）は自社で追記します。AIライティングツールは下書きや表現の幅出しに活用できますが、独自性の確保と事実確認は必須です。" },
                { step: "STEP 06", title: "公開前チェックと内部リンク設定", body: "タイトルタグ・メタディスクリプション・見出し構造・画像のalt・XMLサイトマップへの反映を確認します。関連する既存記事から新記事への内部リンク・新記事から関連ページへの内部リンクを必ず設定してから公開します。" },
                { step: "STEP 07", title: "公開後のインデックス促進", body: "Google Search Consoleの「URL検査ツール」でインデックス登録をリクエストします。SNS・メールマガジンでのプロモーションを行い、初期トラフィックを獲得します。インデックスされたかを1〜2週間後に確認します。" },
                { step: "STEP 08", title: "3〜6ヶ月後の効果計測", body: "Google Search ConsoleとGoogle Analyticsで「表示回数・クリック率・平均掲載順位・セッション数・コンバージョン」を計測します。11〜30位の記事はリライト対象として優先度付けします。1〜10位の記事は情報の鮮度を維持するため定期更新を行います。" },
                { step: "STEP 09", title: "リライト・統合・削除の判断と実施", body: "表示回数が多いのに11〜30位の記事はリライトで大きく改善できます。流入がゼロで薄いコンテンツはnoindexまたは削除を検討します。テーマが重複する複数記事は1本に統合（301リダイレクト）することで評価を集約します。" },
                { step: "STEP 10", title: "コンテンツカレンダーの見直しと次サイクルへ", body: "毎月のデータを踏まえてコンテンツカレンダーを更新します。成果が出ているテーマは深掘り（クラスター拡充）し、成果が出ていないテーマはキーワード見直しを行います。このPDCAサイクルを継続することがコンテンツSEOの成果を複利で積み上げるための鍵です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[11px] font-semibold tracking-[0.12em] shrink-0 mt-1" style={{ color: "#9CA3AF", minWidth: "64px" }}>{item.step}</span>
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

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              ブログSEO戦略の効果は複数の指標で多角的に評価します。単一の指標だけを見ると誤った判断につながるため、以下のKPIを組み合わせてモニタリングします。
            </p>
            <div className="grid md:grid-cols-2 gap-0 max-w-5xl">
              {[
                { metric: "オーガニック検索流入数", tool: "Google Analytics / Search Console", desc: "ブログ記事経由のオーガニック検索セッション数。月次・記事別で計測し、どの記事・カテゴリが最も貢献しているかを把握します。流入数の増加がブログ戦略の基本的な成果指標です。" },
                { metric: "平均掲載順位", tool: "Google Search Console", desc: "対策キーワードに対して自社記事が何位に表示されているか。11〜30位圏内の記事はリライトによって大幅に改善できる可能性があります。1〜3位の記事は競合の動向を監視して維持します。" },
                { metric: "クリック率（CTR）", tool: "Google Search Console", desc: "検索結果で表示された回数に対してクリックされた割合。同じ順位でもタイトル・メタディスクリプションの質でCTRが変わります。CTRが業界平均より低い記事はタイトルの改善が有効です。" },
                { metric: "インデックス登録数", tool: "Google Search Console", desc: "公開した記事が正しくGoogleにインデックスされているか。noindexの誤設定・サイトマップ未掲載・薄いコンテンツでインデックスが拒否されることがあります。定期的に確認します。" },
                { metric: "記事からのコンバージョン数・率", tool: "Google Analytics", desc: "ブログ記事を経由して問い合わせ・資料請求・購入に至った数。最終的なビジネス成果との連動を把握することで、どの記事・カテゴリへの投資を増やすべきかが判断できます。" },
                { metric: "セッション内ページ回遊数", tool: "Google Analytics", desc: "ブログ記事に訪れたユーザーがセッション内で何ページ閲覧したか。内部リンクが機能しているかの指標で、1.2〜1.5ページ以下であれば内部リンクの充実を優先します。" },
                { metric: "リライト後の順位変動", tool: "Google Search Console", desc: "リライト前後の平均掲載順位・クリック数・インプレッション数を比較します。リライトから2〜4週間後に変動が現れることが多く、効果を計測して次のリライト優先度に反映します。" },
              ].map((item, i) => (
                <div key={i} className="py-6 pr-8" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-bold text-[14px] mb-1" style={{ color: "#0d1b2a" }}>{item.metric}</p>
                      <p className="text-[11px] tracking-wide mb-2" style={{ color: "#9CA3AF" }}>{item.tool}</p>
                      <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC" }} />
          </div>
        </section>

        {/* サイプレスの支援内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのブログ・コンテンツ戦略支援
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "コンテンツ戦略の立案", body: "ビジネス目標から逆算したキーワードグループの設計と、コンテンツカレンダーの作成を行います。どの順番でコンテンツを積み上げるかの優先度付けが成果を左右します。競合分析・ペルソナ設計・トピッククラスター設計まで一貫して対応します。" },
                { title: "記事構成案・SEO指示書の作成", body: "ライターへの指示書（記事テーマ・対策キーワード・検索意図・H2構成・注意事項）を作成します。外注ライターの品質を担保し、SEOに強い記事を安定して制作できる体制を整えます。" },
                { title: "SEO記事の制作代行", body: "サイプレスが直接コンテンツを調査・執筆するプランです。キーワード調査から構成案・ライティング・内部リンク設定まで一貫して担当します。一次情報の収集・E-E-A-T要素の強化・AIO対応コンテンツ設計も含みます。" },
                { title: "既存記事のリライト", body: "現在の記事のGSCデータを分析し、11〜30位の記事を優先的にリライトします。情報の追加・構成改善・タイトル最適化・内部リンクの充実を実施します。リライト後の効果計測レポートもご提供します。" },
                { title: "月次コンテンツ運用サポート", body: "毎月のSEO計測レポート・翌月のコンテンツ計画提案・リライト優先度リスト・内部リンク改善提案を月次でご提供します。コンテンツ戦略の「プロジェクトマネージャー」として伴走するプランです。" },
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

        <FaqSection items={faqItems} heading="ブログ・コンテンツ戦略についてよくある質問" bgColor="#FFFFFF" />
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
