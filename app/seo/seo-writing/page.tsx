import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEOライティング｜検索意図に沿ったコンテンツ作成｜サイプレス",
  description: "SEOライティングの基本原則と実践方法。検索意図の4分類・見出し設計・E-E-A-T対応・AI生成コンテンツへの対応・定期更新の重要性まで、検索上位を狙うコンテンツ作成の全体像を解説します。",
  keywords: ["SEOライティング", "SEO記事作成", "検索意図", "E-E-A-T", "コンテンツSEO", "キーワード最適化", "SEOコンテンツ", "記事設計", "見出し設計"],
  openGraph: {
    title: "SEOライティング｜検索意図に応えるコンテンツ作成｜株式会社サイプレス",
    description: "SEOライティングの基本原則と実践方法。検索意図の4分類・見出し設計・E-E-A-T対応・AI生成コンテンツへの対応・定期更新まで解説します。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/seo-writing" },
};

const faqItems = [
  { q: "SEOライティングとは普通の文章と何が違いますか？", a: "SEOライティングは検索エンジンとユーザーの両方に向けて書く文章です。検索意図に沿った構成、適切なキーワード配置、E-E-A-T（経験・専門性・権威性・信頼性）の組み込みが求められます。ただし読みにくいキーワード詰め込みは逆効果です。検索1位の記事は「キーワードが多い記事」ではなく「検索意図に最も正確に答えている記事」です。" },
  { q: "1記事に同じキーワードを何回入れればいいですか？", a: "記事全体でメインキーワードは自然な頻度で入れることが重要です。「不自然に感じる」ならそれは多すぎます。Googleは意味的な関連語も評価するため、同義語・関連語・LSI（潜在意味インデックス）キーワードを組み合わせる方が効果的です。タイトル・H1・最初の段落・H2見出しには必ず含めます。" },
  { q: "AIを使ってSEO記事を書いてもいいですか？", a: "GoogleはAI生成コンテンツを禁止していませんが「品質の高いコンテンツ」を評価基準にしています。AIの下書きをベースに人間が事実確認・編集・独自の経験や視点を加えることで、AIだけでは書けない価値あるコンテンツになります。AI生成のまま量産した薄いコンテンツはGoogleのスパムポリシー（大量生成コンテンツ）に抵触するリスクがあります。" },
  { q: "SEO記事の適切な文字数はどのくらいですか？", a: "検索意図によって異なります。情報収集型は2,000〜4,000文字、比較検討型は1,500〜3,000文字が多いです。「文字数を多くすれば上位に上がる」は誤解で、検索意図を満たす内容量が重要です。競合上位ページの文字数を参考にしつつ、網羅性と読みやすさのバランスを取ります。" },
  { q: "既存記事のリライトはSEOに効果がありますか？", a: "非常に効果的です。古い情報の更新、検索意図へのより的確な回答、E-E-A-T要素の追加、内部リンクの最適化でリライトした記事が上位表示されるケースは多くあります。Googleは「最新性（Freshness）」も評価します。長期間更新されていない記事は鮮度シグナルが低下するため、定期的なリライトが順位維持に有効です。" },
  { q: "タイトルタグとH1の違いは何ですか？", a: "タイトルタグ（title要素）は検索結果に表示されるテキストで、H1はページ内の最上位見出しです。同じ内容か近い内容にすることが一般的ですが、タイトルタグは検索クリックを促すための表現、H1はページの内容を明確に示す表現として若干異なっても問題ありません。titleは30〜35文字（全角）、H1は少し長めに設定できます。" },
  { q: "SEOライティングでリード文（導入文）はどう書けばいいですか？", a: "リード文では検索クエリへの直接回答・このページで何がわかるか・読む価値があることを3〜5文で伝えます。長い前置きや「〇〇とはどういうことでしょうか？」のような問いかけから始めるのは避け、結論から入ることが重要です。最初の段落にメインキーワードを自然に含めることも必須です。" },
  { q: "検索意図の4種類とは何ですか？", a: "情報収集型（Informational）・比較検討型（Commercial Investigation）・購入決定型（Transactional）・ナビゲーション型（Navigational）の4つです。同じキーワードでも意図が違えば書くべきコンテンツは大きく変わります。検索上位ページを実際に見て、Googleがどの意図と判断しているかを確認することが重要です。" },
  { q: "E-E-A-Tを高めるには具体的に何をすればいいですか？", a: "経験（Experience）は実体験・写真・具体的なエピソードで示します。専門性（Expertise）は専門用語の正確な使用と深い解説、権威性（Authoritativeness）は著者情報・資格・メディア掲載・受賞歴、信頼性（Trustworthiness）は出典の明示・最終更新日・プライバシーポリシー・運営会社情報で示します。YMYLジャンル（医療・金融・法律）では特に重要です。" },
  { q: "見出し設計（H1・H2・H3）はどう考えればいいですか？", a: "H1はページの主テーマを表す1つの見出し（メインキーワードを含む）。H2はページの主要トピックを分割する見出しで、検索ユーザーが知りたいことを網羅します。H3はH2の内容を補足する詳細見出しです。見出しだけ読んでページの全体像がわかる構造を目指し、競合上位ページの見出し構成も参考にします。" },
  { q: "内部リンクはどこに設置すべきですか？", a: "関連記事・カテゴリーページ・サービスページへ自然な文脈で設置します。アンカーテキストにはリンク先ページの内容がわかるキーワードを含めます。1記事につき3〜5本の内部リンクが目安です。記事の前半に設置することでユーザーが早い段階で関連コンテンツへ誘導されやすくなります。" },
  { q: "コンバージョンにつながるSEO記事はどう設計しますか？", a: "情報収集型の記事でも記事末尾にサービスページへのCTAを設置します。ユーザーが記事を読んだ後に「次に何をすべきか」を明確に示すことが重要です。資料ダウンロード・無料相談・お問い合わせなど、記事の内容と自然につながるCVポイントを設計します。" },
  { q: "記事の更新頻度はどのくらいが適切ですか？", a: "既存記事の品質向上を優先するのが基本です。新記事を週1本書くよりも、既存の50記事を定期的にリライトする方がトータルの効果が高いケースがあります。特に上位10〜20位で停滞している記事は競合との差を分析してリライトすることで上位への押し上げが期待できます。" },
  { q: "ロングテールキーワードとビッグキーワードはどちらを優先すべきですか？", a: "中小規模・新規サイトはロングテールキーワード（3語以上・月間検索数100〜1,000程度）から攻略するのが現実的です。検索意図が明確で競合が少なく、コンバージョン率が高い傾向があります。ドメイン権威が上がるにつれてビッグキーワードへ展開する段階的戦略が有効です。" },
  { q: "記事にFAQを追加するメリットは何ですか？", a: "FAQPageスキーマを実装することでGoogleの検索結果にFAQリッチリザルトが表示され、CTRが向上します。またユーザーの残った疑問を解消し、ページ滞在時間の向上・離脱率の低下につながります。「People Also Ask（他のユーザーが検索したこと）」のクエリをFAQの質問として活用すると効果的です。" },
  { q: "AIで量産した記事がGoogleに評価されないのはなぜですか？", a: "GoogleのHelpful Content Updateはユーザーではなく検索エンジンのために作られたコンテンツを評価を下げる対象としています。AI量産コンテンツは独自の経験・視点・専門性が欠如しやすく、読者に「このサイトだから価値がある」と感じさせられません。人間の編集・経験の付加・事実確認が不可欠です。" },
  { q: "競合記事のリサーチはどうやって行いますか？", a: "対象キーワードで実際に検索し、上位5〜10ページの構成・文字数・見出し・コンテンツ量を分析します。「これらのページが答えていない質問は何か」「自社が追加できる独自の価値は何か」を考え、差別化ポイントをコンテンツに落とし込みます。" },
  { q: "記事の更新日はSEOに影響しますか？", a: "Googleは「最新性」をランキングシグナルの一つとして使います。特にニュース性の高いトピック・年次データを含む記事・技術解説記事は情報を更新してlastmod（最終更新日）を更新することで鮮度シグナルが改善します。ただし内容を変えずに更新日だけ変えても効果はありません。" },
  { q: "医療・法律・金融の記事はSEOで注意が必要ですか？", a: "YMYL（Your Money or Your Life）ジャンルと呼ばれるこれらの分野はGoogleが特に品質基準を厳しく設定しています。著者の資格・専門家による監修・出典の明示・更新日の表示・運営会社の信頼性情報がE-E-A-T評価に直結します。無資格者による断定的な表現は避け、専門家監修を積極的に活用します。" },
  { q: "SNSシェアはSEO順位に直接影響しますか？", a: "Googleは公式にSNSシェア数を直接のランキングシグナルとして使っていないと述べています。ただしSNSでの拡散が被リンク獲得につながる場合があり、間接的なSEO効果はあります。また記事の認知度向上・ブランド検索増加・サイテーション（引用）獲得という間接効果も期待できます。" },
];

const relatedLinks = [
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "キーワード選定の方法" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "記事計画の立て方" },
  { href: "/seo/seo-audit", label: "SEO監査", desc: "現状診断から改善へ" },
  { href: "/seo/search-console", label: "Search Console活用", desc: "Googleツールの使い方" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "サイト内部の最適化" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO対策の詳細" },
  { href: "/seo/internal-link", label: "内部リンク設計", desc: "サイト構造の最適化" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスの集客" },
  { href: "/seo/duplicate-content", label: "重複コンテンツ対策", desc: "canonical設定と重複解消" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルファースト対応" },
  { href: "/seo/page-speed", label: "ページ速度改善", desc: "LCP・CLS・INP対策" },
  { href: "/seo/backlink", label: "被リンク対策", desc: "外部リンクの獲得戦略" },
  { href: "/ai/blog-automation", label: "AIブログ自動化", desc: "AI活用のコンテンツ制作" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/aio/eeat-strategy", label: "E-E-A-T戦略", desc: "専門性・権威性の構築" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "コンテンツ制作サービス" },
  { href: "/services/web-consulting", label: "Webコンサルティング", desc: "包括的なサイト改善" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "SEOライティングのご依頼" },
  { href: "/case-studies", label: "制作実績・事例", desc: "改善成功事例" },
  { href: "/faq", label: "よくある質問", desc: "SEO全般のQ&A" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO対策の基礎と全体像" },
  { href: "/blog", label: "ブログ・コラム", desc: "SEOに関する最新情報" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#F9F8F5", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }}>SEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              SEOライティング
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SEO Writing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SEOライティング｜検索意図に応えるコンテンツ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SEOライティングとは、検索エンジンとユーザーの両方に価値を提供する文章を書く技術です。キーワードの詰め込みではなく、検索意図を正確に把握し、専門性と読みやすさを両立したコンテンツ作成が求められます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              Googleは「ユーザーにとって最も役立つ情報を最初に届ける」というミッションを持っています。検索意図を満たす高品質なコンテンツを作ることが、SEOの根幹であり最も持続可能な施策です。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_10_29.png" alt="SEOライティング・コンテンツ作成" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                検索1位のコンテンツは「キーワードが多い」のではなく「検索意図に最も正確に答えている」記事です。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                "SEOライティングと普通の記事執筆の違い——なぜ「良い文章」が検索上位に出ないのか",
                "検索意図4分類（情報収集・比較検討・購入決定・ナビゲーション）への対応方法",
                "見出し設計（H1→H2→H3）でコンテンツを構造化し、検索意図を網羅する方法",
                "E-E-A-T（経験・専門性・権威性・信頼性）をコンテンツに組み込む具体的な方法",
                "AI生成コンテンツの活用と、Googleに評価されるために必要な人間の付加価値",
                "業種別（飲食・美容・医療・建設・士業）のコンテンツ設計ポイントと更新管理",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>0{i + 1}</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes (dark) */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SEOライティングで失敗する4つのパターン
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "キーワードを詰め込みすぎる", b: "不自然なほどキーワードを繰り返すと、Googleはスパムと判断します。読みにくい文章はユーザーも離脱します。自然な文章の中に適切な頻度で含め、同義語・関連語で補います。" },
                { t: "検索意図とページ内容がズレている", b: "「安いホテル 東京」で検索したユーザーに高級ホテルの記事を見せても意味がありません。キーワードの背後にある意図を正確に把握してコンテンツを設計します。検索上位ページを見ればGoogleの判断がわかります。" },
                { t: "結論を最後まで引っ張る構成", b: "前置きが長く答えが後半に書かれている記事は直帰率が高くなります。Googleはユーザーが満足して戻らないことを重視するため、結論ファーストが基本です。リード文で必ず答えの要約を示します。" },
                { t: "E-E-A-Tの根拠がない記事", b: "誰が書いたかわからない・専門性の根拠がない・出典不明の記事はGoogleの評価が低くなります。著者情報・実績・参照元の明示・実体験の記述が品質評価を高めます。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { t: "書いても検索に出てこない", b: "技術的なインデックス問題（noindex・canonical）とコンテンツの問題（薄い・検索意図ズレ）の両方が原因として考えられます。まずSearch Consoleでインデックス状況を確認し、ページがインデックスされている前提でコンテンツの質を評価します。" },
                { t: "検索意図がずれている", b: "キーワードを設定しても、そのキーワードで検索するユーザーが求めているものと異なる内容を書いてしまっているケースです。対象キーワードの検索上位10ページを確認し、Googleがどのようなコンテンツタイプ・内容を評価しているかを把握してから書き始めます。" },
                { t: "薄いコンテンツになっている", b: "表面的な情報しか書けていない・競合が書いていることの焼き直しになっている状態です。独自の経験・具体的なデータ・実施例・専門的な観点を加えることで、競合にない価値を作ります。" },
                { t: "AIで量産した記事がGoogleに評価されない", b: "AI生成コンテンツをそのまま公開すると、独自性・経験・専門性が欠如した「大量生成コンテンツ」としてGoogleのHelpful Content Updateの対象になるリスクがあります。AIは下書きツールとして使い、人間の視点・事実確認・編集が必須です。" },
                { t: "見出し設計が雑で内容が散漫になっている", b: "H2見出しを並べただけで、ユーザーの疑問を体系的に解消できていない記事は滞在時間が短くなります。競合上位ページの見出し構成を参考にしながら、読者の疑問をH2・H3の階層で網羅的にカバーする構成を先に作ってから執筆します。" },
                { t: "既存記事が増えるだけで順位が上がらない", b: "記事数は増えているのに全体のトラフィックが増えない場合、個々の記事の品質不足・キーワードカニバリゼーション（複数ページが同じキーワードで競合）・内部リンクの未整備が原因です。記事数より記事の質と構造を優先します。" },
                { t: "上位10〜20位で停滞して1ページ目に上がれない", b: "10〜20位圏の記事は改善余地が大きいです。競合上位ページと比較してコンテンツの深さ・E-E-A-T要素・内部リンク・ページ速度のどれが劣っているかを特定し、ピンポイントで強化することで順位が上昇するケースが多いです。" },
                { t: "コンテンツを書いても被リンクが集まらない", b: "被リンクは「引用する価値があるコンテンツ」に自然に集まります。データ・調査結果・独自の考察・業界専門家へのインタビュー・ツール・チェックリストなど、他では得られない価値のあるコンテンツを意識的に作ることが重要です。" },
                { t: "YMYLジャンルで記事が評価されない", b: "医療・法律・金融ジャンルはGoogleの品質基準が特に厳格です。著者の資格明示・専門家監修・出典の明示・運営会社情報の充実・最終更新日の表示が必須です。無資格者による断定的な医療情報・法的判断は避けます。" },
                { t: "更新を止めると順位が下がった", b: "Googleは定期的に更新されるサイトを「活発なサイト」として評価します。特に鮮度が重要なトピック（法改正・統計データ・技術情報）は定期的な見直しと更新が必要です。更新が難しい場合は常緑コンテンツ（Evergreen Content）を中心に据えた戦略が有効です。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Principles</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEOライティングの基本原則
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "検索意図を正確に把握する", b: "「情報収集（Informational）」「比較検討（Commercial Investigation）」「購買・申し込み（Transactional）」「サイトへのアクセス（Navigational）」の4種類の検索意図を正確に把握することがSEOライティングの出発点です。同じキーワードでも意図が違えば書くべき内容は大きく変わります。検索上位ページを見てGoogleがどの意図で評価しているか確認します。" },
                { n: "02", t: "明確な見出し構造（H1→H2→H3）", b: "見出しはSEOとユーザビリティの両方に重要です。H1は1ページに1つ（メインキーワードを含む）、H2でメイントピックを整理（読者の主な疑問を網羅）、H3で詳細を補足する階層構造を作ります。見出しだけ読んで記事の全体像がわかることが理想です。競合上位ページの見出し構成を参考にしながら独自の切り口を加えます。" },
                { n: "03", t: "結論ファーストで書く", b: "検索ユーザーは「答え」を求めてページを開きます。前置きを長くせず、最初の段落で質問への答えを示すことで、直帰率を下げて評価を高めます。「この記事でわかること」をリード文で明示し、読み進める動機を作ります。" },
                { n: "04", t: "キーワードの自然な組み込み", b: "メインキーワードはtitle・H1・最初の段落・主要なH2見出しに自然に含めます。同義語・関連語・共起語も活用し、同じ言葉の繰り返しを避けます。Googleは意味的な関連語を理解するため、キーワードの完全一致だけでなくトピックの網羅性が重要です。" },
                { n: "05", t: "E-E-A-T（経験・専門性・権威性・信頼性）の組み込み", b: "経験（Experience）は実体験・写真・具体例で示します。専門性（Expertise）は正確な専門知識と深い解説、権威性（Authoritativeness）は著者情報・資格・メディア掲載歴、信頼性（Trustworthiness）は出典の明示・運営会社情報・プライバシーポリシーで担保します。特にYMYL（医療・金融・法律）では厳格なE-E-A-T対応が必要です。" },
                { n: "06", t: "一文は短く・段落は短く", b: "1文60文字以内、1段落3〜5文を目安にします。長い文章は読まれません。箇条書き・表・画像を活用して視覚的に整理します。モバイルでの読みやすさを常に意識し、段落が長くなりすぎないよう改行を活用します。" },
                { n: "07", t: "内部リンクで関連コンテンツへ誘導", b: "関連記事・サービスページへの内部リンクを自然な文脈で設置します。アンカーテキストにはリンク先の内容がわかるキーワードを含めます。ユーザーが次のアクションに進みやすくなり、Googleもサイト構造を理解しやすくなります。1記事3〜5本の内部リンクが目安です。" },
                { n: "08", t: "FAQ形式で疑問を解消する", b: "ページ末尾のFAQはユーザーの残った疑問を解消し、FAQPageスキーマで構造化データを実装することでリッチリザルト表示につながります。「People Also Ask」や関連検索ワードをFAQの質問として活用すると、追加キーワードでの流入増加も期待できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の記事設計ポイント */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              業種別の記事設計ポイント
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "40px", maxWidth: "680px" }}>
              業種によって検索されるキーワードの種類・検索意図・コンテンツに求められる深さは大きく異なります。以下に主要業種の記事設計の考え方を示します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { t: "飲食店・カフェ", b: "「エリア名＋ジャンル（渋谷 ランチ イタリアン）」「メニュー名＋地域」の組み合わせが主なキーワードです。メニュー説明ページ・アクセスページ・こだわり・食材ストーリーなどコンテンツを充実させます。写真の質と量がユーザーの来店意欲に直結するため、alt属性で画像SEOも実施します。" },
                { t: "美容室・ヘアサロン", b: "「スタイル名＋地域（渋谷 外ハネボブ）」「施術メニュー別の解説記事（縮毛矯正とは）」「地域名＋サロン（池袋 美容室 おすすめ）」が主な記事テーマです。施術前後のビジュアル・スタイリストのプロフィールでE-E-A-Tを高めます。" },
                { t: "医療・クリニック", b: "「症状名＋原因・治療法（腰痛 ストレートネック 治し方）」「地域名＋診療科（新宿 内科）」「病気の解説ページ」が主テーマです。医師・専門家の監修・資格明示が必須です。YMYLジャンルのためE-E-A-T対応が特に重要で、曖昧な表現は避けます。" },
                { t: "建設・リフォーム・工務店", b: "「施工事例（キッチンリフォーム 費用 実例）」「工法解説（断熱材の種類 比較）」「地域名＋施工対応エリア」が効果的です。ビフォーアフター写真・費用の透明性・お客様の声でE-E-A-T・信頼性を高めます。" },
                { t: "士業（弁護士・税理士・社労士）", b: "「業務解説記事（相続税の申告方法）」「Q&A形式の記事（離婚時の財産分与は？）」「地域名＋士業（大阪 税理士 法人設立）」が主テーマです。実名・資格・事務所情報の明示が権威性に直結します。定期的な法改正対応の更新も重要です。" },
                { t: "ECサイト・通販", b: "「商品名＋比較・レビュー」「カテゴリー名＋選び方・おすすめ」「商品の詳細解説ページ」が主テーマです。商品説明文のオリジナリティ（メーカー文の転用NG）・レビューの充実・詳細な仕様表記がSEOと購買転換の両方に効きます。" },
                { t: "不動産・住宅", b: "「地域名＋物件種別（世田谷 一戸建て 相場）」「住まいのノウハウ記事（住宅ローン 審査 通るには）」「エリア特集ページ」が効果的です。地域の詳細情報・周辺施設・生活利便性などローカルSEOと連動したコンテンツ充実が鍵になります。" },
                { t: "教育・スクール・塾", b: "「学習方法解説（英検2級 独学 勉強法）」「コース・カリキュラム説明ページ」「地域名＋スクール種別（新宿 プログラミングスクール）」が主テーマです。卒業生の声・合格実績・講師プロフィールで権威性と信頼性を高めます。" },
                { t: "BtoB・SaaS・IT", b: "「課題解決型の記事（プロジェクト管理ツール 比較）」「用語解説・ノウハウ記事（KPIとは）」「導入事例ページ」が効果的です。専門用語の正確な解説・ホワイトペーパー・詳細な機能比較でE-E-A-Tと検索意図充足を両立します。" },
                { t: "観光・旅行・宿泊", b: "「エリア名＋観光スポット・グルメ」「〇〇旅行の計画・モデルコース」「宿泊施設の詳細紹介（室内写真・プラン・アクセス）」が主テーマです。写真の質・詳細な地図情報・口コミへの返信でローカルSEOと連動した集客を強化します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_11_20.png" alt="コンテンツ設計・記事制作" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(15px,2vw,22px)", lineHeight: 1.7, maxWidth: "680px" }}>
                「誰のために・何のために書くのか」を明確にしてから書き始めることで、検索意図との一致度が飛躍的に上がります。
              </p>
            </div>
          </div>
        </section>

        {/* Section D: 実施フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Writing Process</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEO記事制作の実施フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "キーワード選定・調査", b: "メインキーワードとサブキーワードをキーワードプランナー・Ahrefsなどで調査します。月間検索数・競合難易度・検索意図のタイプを確認し、サイトのドメイン権威と照らし合わせて勝てるキーワードを選定します。ロングテールキーワードから優先的に攻略します。" },
                { n: "02", t: "検索意図の分析", b: "対象キーワードでGoogleを実際に検索し、上位5〜10ページのコンテンツタイプ（ハウツー・リスト・比較・LP等）・文字数・見出し構成・含まれているトピックを分析します。Googleがどの検索意図を優先しているかを把握してから設計します。" },
                { n: "03", t: "記事構成（アウトライン）の作成", b: "H1・H2・H3の見出し構成を先に作ります。ユーザーの疑問を網羅するH2設計・競合が答えていない角度のH3追加・FAQセクションの設計を行います。アウトラインを先に作ることで、書き始めてから迷う時間を大幅に短縮できます。" },
                { n: "04", t: "E-E-A-T要素の設計", b: "著者情報・実体験の挿入ポイント・専門家への言及・出典・参照リンクをアウトライン段階で計画します。YMYLジャンルでは専門家監修のアレンジも検討します。後から追加するより、設計段階で盛り込む方が自然な文章になります。" },
                { n: "05", t: "本文の執筆", b: "結論ファーストで書き始めます。リード文（200〜300文字）でキーワードへの回答・この記事でわかること・読む価値を示します。H2ごとに完結した情報を書き、専門用語は必要に応じて説明を加えます。1文60文字以内を意識して読みやすさを保ちます。" },
                { n: "06", t: "レビュー・事実確認", b: "執筆後に①キーワードが自然に含まれているか②見出し構成が検索意図を網羅しているか③情報に誤りがないか④E-E-A-T要素が十分か⑤CTAへの導線があるかをチェックします。専門分野では専門家に確認を依頼します。" },
                { n: "07", t: "公開・内部リンク設置", b: "公開後、関連記事・サービスページから新記事への内部リンクを設置します。逆に新記事からも関連コンテンツへのリンクを設置します。Search Consoleでインデックス登録リクエストを行い、Googlebotのクロールを促します。" },
                { n: "08", t: "掲載順位のモニタリング", b: "公開後2〜4週間でSearch Consoleに掲載順位が現れ始めます。月次でクリック数・表示回数・平均掲載順位を記録します。目標順位（上位10位）に届いていない場合は競合との差分を分析します。" },
                { n: "09", t: "リライト・更新", b: "公開3〜6ヶ月後を目安に掲載順位が停滞している記事をリライトします。競合上位ページと比較して不足トピックの追加・情報の最新化・E-E-A-T要素の強化・内部リンクの見直しを行います。更新後はSearch Consoleで再インデックスリクエストを送ります。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "40px", maxWidth: "680px" }}>
              SEOライティングの成果はすぐには現れません。公開後2〜6ヶ月のスパンで以下の指標を追跡し、改善サイクルを回します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "掲載順位（平均・ターゲットキーワード）", b: "Search Consoleの検索パフォーマンスで対象キーワードの平均掲載順位を追跡します。公開後2〜4週間で順位が現れ始め、3〜6ヶ月で安定した位置に収まることが多いです。上位1〜3位と4〜10位ではCTRが大きく異なるため、トップ10入りを一つの目標にします。" },
                { n: "02", t: "オーガニッククリック数・表示回数", b: "掲載順位が上昇しても表示回数が少ない場合はキーワードの検索ボリューム自体が少ない可能性があります。クリック数の推移と表示回数の推移を分けて分析し、CTRの改善（title・meta description）も並行して評価します。" },
                { n: "03", t: "クリック率（CTR）", b: "掲載順位に対するクリック率を確認します。同じ順位でもCTRが低い場合、titleとmeta descriptionの改善・リッチリザルト表示（FAQページスキーマ・パンくず）の取得が有効です。構造化データの実装でCTRが向上するケースがあります。" },
                { n: "04", t: "ページ滞在時間・直帰率", b: "Google Analyticsで滞在時間と直帰率を確認します。滞在時間が短い・直帰率が高い場合は、リード文が検索意図とズレている・コンテンツが薄い・読みにくい構成になっているサインです。ヒートマップツールでどこで離脱しているか把握すると改善精度が上がります。" },
                { n: "05", t: "コンバージョン数（問い合わせ・購入・登録）", b: "オーガニック検索経由のコンバージョン数をGoogle Analyticsで追跡します。記事トラフィックが増えてもCVが増えない場合は、記事内のCTAの設置・サービスページへの内部リンク強化・ランディングページの改善が必要です。" },
                { n: "06", t: "被リンク獲得数・参照ドメイン数", b: "Ahrefsなどで各記事への被リンク数と参照ドメイン数を追跡します。被リンクが自然に集まる記事はSEO上の資産になります。被リンクが集まらない場合は、引用価値（独自データ・具体的な解説・ツール）の追加を検討します。" },
                { n: "07", t: "インデックス状況・正常インデックス率", b: "Search Consoleのカバレッジレポートで記事が正常にインデックスされているか定期的に確認します。「Crawled – currently not indexed」の記事はコンテンツ品質の改善またはnoindexの付与（統合）を検討します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI content handling */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>AI Content Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              AI生成コンテンツとSEOの考え方
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "AIは「下書き」ツールとして活用する", b: "ChatGPT・ClaudeなどのAIはアウトライン作成・参考文の下書き・リライト補助として有効です。最終的には人間が事実確認・編集・独自の経験・専門的な観点を加えることが品質の鍵になります。" },
                { t: "大量生成コンテンツはペナルティリスク", b: "Googleのスパムポリシーは「独自性がなくスケールで生成されたコンテンツ」を明確に対象としています。AIで同じ型を大量に量産し、固有の価値なく公開することは評価低下リスクがあります。" },
                { t: "AIが書けない価値を追加する", b: "実体験・インタビュー・独自調査・最新データ・業界の内側の視点はAIには生成できません。この「AIが書けない部分」をどれだけ盛り込めるかが、競合との差別化になります。" },
                { t: "E-E-A-Tの「経験（E）」はAIで証明できない", b: "「実際に使ってみた」「現場で見てきた」「お客様の声」など、リアルな経験に基づく記述はAIには書けません。Googleが最重視するE-E-A-Tの経験要素を積極的にコンテンツに組み込みます。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEOコンテンツ制作のご相談"
          body="検索上位を狙うSEOライティング・記事作成・既存記事のリライトをサポートします。AI活用による効率的なコンテンツ量産体制の構築もご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
