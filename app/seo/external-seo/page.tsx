import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "外部SEO（被リンク対策）とは｜ドメイン評価を高める方法｜株式会社サイプレス",
  description:
    "外部SEO（被リンク対策）の基礎から実践まで解説。良質な被リンク獲得の方法、サイテーション強化、スパムリンクへの対処、ドメイン評価（DA・DR）の高め方を体系的に解説。",
  keywords: ["外部SEO", "被リンク", "バックリンク", "ドメイン評価", "サイテーション", "リンクビルディング"],
  openGraph: {
    title: "外部SEO（被リンク対策）とは｜ドメイン評価を高める方法｜株式会社サイプレス",
    description: "外部SEOの実践ガイド。良質な被リンク獲得・サイテーション強化・スパムリンク対処まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/external-seo" },
};

const faqItems = [
  {
    q: "被リンクとは何ですか？なぜSEOに重要ですか？",
    a: "被リンク（バックリンク）とは、他のサイトから自サイトへのリンクのことです。Googleは被リンクを「他のサイトからの推薦・投票」として評価し、多くの信頼できるサイトからリンクされているサイトほど権威性が高いと判断します。質の高い被リンクはSEOランキングに大きく影響します。",
  },
  {
    q: "被リンクは買ってもいいですか？",
    a: "いいえ、絶対に避けてください。Googleのガイドラインは「お金を払ってリンクを買う」行為を明確に禁止しており、発覚した場合はペナルティ（手動対策）の対象となります。自然な被リンク獲得（コンテンツの質向上・PR・業界内のネットワーキング）に注力することが長期的に正しいアプローチです。",
  },
  {
    q: "良質な被リンクと低品質な被リンクの違いは何ですか？",
    a: "良質な被リンクは、関連性の高いサイト・権威性のあるサイト・文脈に沿ったアンカーテキスト・フォローリンクです。低品質な被リンクは、関係のないジャンルのサイト・スパムサイト・相互リンクのためだけのリンク・大量の低品質ディレクトリへの登録などです。リンク元ドメインの権威性（DR/DA）と関連性の両方が重要です。",
  },
  {
    q: "被リンクを自然に獲得する方法はありますか？",
    a: "良質なコンテンツ（引用されやすい調査レポート・ガイド・ツール）の制作、プレスリリース配信、業界メディア・ポッドキャストへの出演・インタビュー、SNSでのバズ、業界団体・協会への加盟、仕入れ先・提携先への掲載依頼などが自然な被リンク獲得の手法です。",
  },
  {
    q: "スパムリンクが自サイトに向けられている場合どうすればいいですか？",
    a: "Google Search ConsoleのリンクセクションでサイトへのリンクURLを確認できます。明らかにスパムと判断できるリンクは、Googleのリンク否認ツール（Disavow Tool）を使って否認することができます。ただし、通常の良質なリンクまで否認してしまうリスクがあるため、慎重に判断することが重要です。",
  },
  {
    q: "サイテーションとは何ですか？",
    a: "サイテーションとは、リンクを伴わない「ブランド名・会社名・住所・電話番号の引用」のことです。特にMEO（ローカルSEO）では、NAP情報（Name・Address・Phone）が一致したサイテーションが増えることでGoogleへの信頼性が高まります。地域ビジネスにとってサイテーション管理は重要な外部SEO施策です。",
  },
  {
    q: "外部SEOと内部SEOはどちらを優先すればいいですか？",
    a: "内部SEO（コンテンツ・技術的最適化）が先です。内部SEOが整っていないサイトに被リンクが来ても効果が薄いです。まず内部SEO・コンテンツSEO・テクニカルSEOを整備し、その上で外部SEO（被リンク獲得）に取り組む順番が効果的です。",
  },
  {
    q: "競合サイトの被リンクを分析する方法はありますか？",
    a: "AhrefsやSEMrushなどの有料ツールを使うと、競合サイトへのリンク元ドメイン・アンカーテキスト・被リンク数の推移を確認できます。これにより、自サイトが被リンクを獲得すべき媒体・業界メディアのリストを作成できます。",
  },
  {
    q: "ドメイン評価（DA・DR）はどうやって確認しますか？",
    a: "Ahrefsの「DR（Domain Rating）」はAhrefsのリンクインデックスに基づく指標です。MozのDA（Domain Authority）はMoz独自の指標です。どちらもGoogle公式の指標ではありませんが、サイトの権威性の目安として活用できます。Google Search Consoleでは自サイトへのリンクドメイン数を確認できます。",
  },
  {
    q: "プレスリリースで被リンクを獲得できますか？",
    a: "PR TIMESや@Press、ValuePressなどの国内プレスリリース配信サービスを使うと、メディアへ情報提供できます。記事として取り上げられた場合、そのメディアからの被リンクが発生します。プレスリリースサイト自体からのリンクはnofollowが多いですが、二次掲載による自然なリンクが期待できます。",
  },
  {
    q: "相互リンクはSEOに効果がありますか？",
    a: "SEO目的の相互リンク（A→B、B→Aの交換）は不自然とみなされGoogleに評価されない場合があります。ただし、事業上の関係性がある場合（仕入れ先・提携先）の自然な相互リンクは問題ありません。SEO目的だけのリンク交換は避けることが原則です。",
  },
  {
    q: "NAP情報とは何ですか？一致しないとどうなりますか？",
    a: "NAPとはName（会社名）・Address（住所）・Phone（電話番号）の略です。各サイトでNAP情報が異なると（番地の表記揺れなど）、Googleがサイテーションを同一ビジネスと認識できず、ローカルSEOの評価が下がる可能性があります。全サイトで統一した表記に揃えることが重要です。",
  },
  {
    q: "被リンク獲得にはどのくらいの期間がかかりますか？",
    a: "被リンクの効果がGoogleのランキングに反映されるまでには、数週間から数ヶ月かかることが多いです。リンクが発見されGoogleがクロール・評価するまでの時間、評価反映のタイムラグがあります。継続的な取り組みが重要で、短期間での即効性は期待しないことが現実的です。",
  },
  {
    q: "コンテンツマーケティングと外部SEOの関係は？",
    a: "質の高いコンテンツは被リンクを自然に引き寄せる最も持続可能な方法です。業界内で引用される調査データ・詳細ガイド・独自の視点を持つコラムは、時間とともにリンクが積み上がります。外部SEOはコンテンツSEOと連動して取り組むことで最大の効果を発揮します。",
  },
  {
    q: "Googleの手動ペナルティを受けた場合はどうすればいいですか？",
    a: "Search Consoleの「手動による対策」セクションでペナルティの詳細を確認します。問題のあるリンクをDisavowツールで否認し、その後Googleに再審査リクエストを送信します。ペナルティの解除には数週間から数ヶ月かかることがあります。再発防止のためにリンクプロファイルの定期監視が必要です。",
  },
  {
    q: "SNSからのリンクはSEOに効果がありますか？",
    a: "Twitter・Facebook・InstagramなどのSNSからのリンクは基本的にnofollowタグが付与されているため、直接的なリンク評価はありません。ただし、SNSでの拡散がコンテンツの露出を増やし、それを見た第三者サイトがフォローリンクを貼るという間接的な効果があります。またブランド名言及（サイテーション）自体にも価値があります。",
  },
  {
    q: "地域ビジネスのサイテーション登録先はどこがおすすめですか？",
    a: "Googleビジネスプロフィール・Yahoo!プレイス・ジャパンタウン・エキテン・ホットペッパー・食べログ（飲食）・Googleマップ・Yelp・生活ガイドなどがあります。業種専門のポータルサイトへの登録も有効です。すべてのサイトでNAP情報を統一することが前提です。",
  },
  {
    q: "外部SEOの効果をどうやって測定しますか？",
    a: "主な測定指標は、参照ドメイン数（Ahrefs/Search Console）・新規被リンク数の推移・ドメイン評価の変化・オーガニック検索順位の変化・オーガニック流入数の変化です。Google Search Consoleで確認できるリンク数と、Ahrefsなどのサードパーティツールを組み合わせて多角的に評価します。",
  },
  {
    q: "アウトリーチとは何ですか？",
    a: "アウトリーチとは、他サイトの運営者にコンタクトを取り、自社コンテンツへのリンクを依頼する手法です。自社の専門的なコンテンツが相手の読者にも価値があることを伝え、掲載を依頼します。スパム的な一斉送信は逆効果になるため、ターゲットを絞った個別のアプローチが重要です。",
  },
  {
    q: "被リンク獲得の外注はできますか？",
    a: "被リンク獲得の支援を行うSEO会社・PR会社があります。ただし、業者によってはガイドライン違反の手法を使うリスクがあるため、手法・獲得先の透明性を確認することが重要です。自然なPR・コンテンツマーケティングを軸に支援する会社を選ぶことが安全です。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "内部最適化との連携" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "被リンクを集めるコンテンツ制作" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "クロール・インデックス最適化" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスの外部SEO" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "被リンク戦略のキーワード設計" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "被リンクプロファイルの評価" },
  { href: "/meo", label: "MEO対策", desc: "ローカルSEOとサイテーション" },
  { href: "/aio", label: "AIO対策", desc: "AI検索での引用・言及獲得" },
  { href: "/knowledge/backlink", label: "被リンク獲得ガイド", desc: "自然な被リンクの増やし方" },
  { href: "/knowledge/domain-authority", label: "ドメイン評価の高め方", desc: "DA・DRを改善する方法" },
  { href: "/knowledge/citation", label: "サイテーション管理", desc: "NAP情報統一の実践" },
  { href: "/knowledge/disavow", label: "スパムリンク否認ガイド", desc: "Disavowツールの使い方" },
  { href: "/guide/link-building", label: "リンクビルディング入門", desc: "被リンク戦略の全体像" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "外部SEO込みの料金目安" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "被リンク状況の確認項目" },
  { href: "/faq/seo", label: "SEO FAQ", desc: "外部SEOのよくある質問集" },
  { href: "/glossary/backlink", label: "被リンク用語集", desc: "DA・DR・Disavowなどを解説" },
  { href: "/column/seo", label: "SEOコラム", desc: "外部SEOの最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/services/pr", label: "PRサービス", desc: "メディア掲載・被リンク獲得支援" },
  { href: "/case/seo", label: "SEO支援事例", desc: "被リンク獲得の成功事例" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "被リンクを生むコンテンツ設計" },
  { href: "/seo/content-seo", label: "コンテンツSEO詳細", desc: "引用されるコンテンツの作り方" },
];

export default function ExternalSeoPage() {
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
              <span style={{ color: "#0F172A" }}>外部SEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>External SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              外部SEO（被リンク対策）
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              外部SEOとは、他のサイトから自サイトへの被リンク（バックリンク）を獲得したり、ブランド名の引用（サイテーション）を増やしたりすることで、サイトのドメイン評価と検索順位を高める施策です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              内部SEO・コンテンツSEO・テクニカルSEOを整えた上で取り組む施策です。質の高いコンテンツを公開し、それが自然に引用・リンクされる状況を作ることが外部SEOの本質です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleはウェブ上のリンクを「信任の票」として扱います。関連性の高い権威あるサイトからのリンクが多いほど、Googleは「このサイトは信頼に値する」と判断します。量より質を重視したリンクビルディングが現代の外部SEOの鉄則です。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.jpg" alt="外部SEO・被リンク獲得・ドメイン評価向上のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "外部SEOとは何か・なぜ必要なのか", body: "被リンクがGoogleのランキングアルゴリズムにおいてどのような役割を果たしているか、内部SEOとの関係性、外部SEOが効果を発揮するタイミングを理解できます。" },
                { title: "良質な被リンクの見分け方と獲得手法", body: "権威性・関連性・アンカーテキスト・フォロー/ノーフォローなど、リンク品質を評価する基準と、自然に被リンクを増やすための具体的な手法を習得できます。" },
                { title: "リンクビルディングのアウトリーチ手順", body: "ターゲットドメインの選定、担当者の特定、メッセージの書き方、フォローアップまでのアウトリーチプロセス全体を把握できます。" },
                { title: "サイテーション管理とNAP統一の重要性", body: "リンクを伴わないブランド言及（サイテーション）がMEO・ローカルSEOにどう影響するか、NAP情報の不一致がもたらすリスクを理解できます。" },
                { title: "スパムリンクの特定とDisavow処理", body: "有害なリンクがサイト評価を下げるメカニズム、Google Search Consoleでの確認方法、Disavowファイルの作成と提出手順を学べます。" },
                { title: "外部SEOの効果測定と改善サイクル", body: "参照ドメイン数・ドメイン評価・オーガニック流入の変化を追うためのKPI設計と、Ahrefs・Search Consoleを使った測定方法を習得できます。" },
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

        {/* 外部SEOの主要施策 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Tactics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              外部SEOの主要施策
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "引用されやすいコンテンツ制作（リンクベイト）", body: "調査レポート・業界統計・詳細なガイド・ユニークな視点のコラムは、他サイトから引用・リンクされやすいコンテンツです。「業界初の調査」「実数データを用いた比較」「専門家監修の解説」など、他では得られない情報価値を持つコンテンツがリンクベイトとして機能します。まずはリンクに値するコンテンツを作ることが外部SEOの基礎です。" },
                { title: "プレスリリース・メディア掲載", body: "PR TIMES・@Press・ValuePressなどへのプレスリリース配信によるメディア掲載、業界メディアへの寄稿・インタビュー記事は高品質な被リンク獲得の方法です。Googleニュースに掲載されている媒体からのリンクは特に評価が高い傾向があります。また、専門家コメントの提供（HARO的アプローチ：記者の情報源として登録）も、信頼性の高い媒体からのリンク獲得に有効です。" },
                { title: "業界団体・協会・商工会への加盟", body: "業界団体・商工会議所・地域協会・業種専門団体などへの加盟に伴い、会員一覧ページからのリンクを得ることができます。例えば、建設業なら建設業協会、士業なら専門士業団体、飲食業なら地域の飲食業組合などがあります。関連性が高く信頼性のある被リンクとして評価されます。" },
                { title: "仕入れ先・提携先・掲載先への依頼", body: "取引先・パートナー企業のWebサイトに自社情報を掲載してもらうことで被リンクを獲得できます。メーカーの「販売店・代理店一覧」への掲載、フランチャイズ本部のFC加盟店ページへの掲載なども同様です。商業的なリンクに見えないよう、自然な文脈での掲載が重要です。" },
                { title: "ゲスト投稿・専門家コラムの寄稿", body: "業界メディア・ポータルサイト・ニュースサイトへの寄稿・コラム掲載は、著者紹介欄のリンクや記事内のリンクによって被リンクを得る手法です。読者に価値ある専門的な内容で書くことが前提であり、SEO目的だけで低品質な内容を寄稿するとメディアの信頼を損ないます。" },
                { title: "サイテーション登録（NAP統一）", body: "リンクを伴わないブランド名・住所・電話番号の引用がサイテーションです。Googleビジネスプロフィール・Yahoo!プレイス・エキテン・ホットペッパー・食べログ・ジャパンタウン・各種地域ポータルへのNAP登録が基本です。全サイトでName・Address・Phoneの表記を完全に統一することが重要で、表記揺れはローカルSEOに悪影響を与えます。" },
                { title: "スパムリンクの否認（Disavow）", body: "低品質なスパムリンクが多数向けられている場合、Google Search ConsoleのDisavowツールを使って否認します。否認ファイルにはdomain:example.comの形式でドメイン単位の否認を指定できます。不自然なリンクプロファイルはGoogleのアルゴリズムにより評価が下がる可能性があるため、Ahrefsなどのツールを使った定期的なリンクプロファイルの確認が重要です。" },
                { title: "リンク切れ修復（ブロークンリンクビルディング）", body: "競合サイトや関連サイトのリンク切れページを見つけ、そのページの代替コンテンツを自社サイトで提供したうえで、リンク元サイトに差し替えを提案する手法です。相手にとってもリンク切れ修復のメリットがあるため、アウトリーチが受け入れられやすい特徴があります。Ahrefsの「Broken Links」機能で効率的に候補を見つけられます。" },
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

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              外部SEOでよくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "被リンクがまったく増えない", body: "最も多い原因は「リンクされるだけの価値があるコンテンツがない」ことです。他サイトが引用したいと思う調査データ・深い専門知識・独自の視点がなければ、リンクは自然には集まりません。まずコンテンツの質を上げることが先決です。" },
                { title: "スパムリンクが大量に付いている", body: "過去に業者へSEOを依頼した際に低品質リンクを大量購入していたケースや、競合による「ネガティブSEO」で意図的に有害リンクを向けられているケースがあります。定期的にAhrefsや Search Consoleでリンクプロファイルを監視し、異常を早期検知することが重要です。" },
                { title: "競合のドメイン評価が高すぎて勝てない", body: "長年運営されてきた大手メディアや企業サイトとは、同じキーワードで被リンク面で短期間に競合するのは現実的ではありません。競合の弱いロングテールキーワード・地域特化・ニッチ領域から着実に権威性を積み上げる戦略が有効です。" },
                { title: "アウトリーチメールを送っても返信がない", body: "テンプレート的な依頼メールは受け取る側にとって明らかなSEO目的に見えます。「なぜこのサイトのこの読者に価値があるか」を具体的に説明し、個別の内容で送ることが返信率向上のカギです。件名と冒頭の一文で相手の興味を引けるかが決め手になります。" },
                { title: "被リンクが増えても順位が上がらない", body: "被リンクの質が低い（DR/DAが低いドメインからのリンクばかり）か、サイトの内部SEO・テクニカルSEOに問題があるケースです。被リンクだけでなく、クロールエラー・インデックス状況・コンテンツの質・ページ速度も同時に確認する必要があります。" },
                { title: "NAP情報がサイトごとにバラバラ", body: "移転・電話番号変更・社名変更の際に更新できていないサイテーション先が残るケースです。新旧の情報が混在すると、Googleが同一ビジネスと認識できなくなります。Brightlocalなどのツールを使ってサイテーション先を一括管理・修正することをお勧めします。" },
                { title: "プレスリリースを配信してもリンクが取れない", body: "プレスリリース配信サービス自体のリンクはnofollowが多く、直接的な評価につながりにくいです。重要なのはリリースをもとにメディアが記事を書いてくれること（二次掲載）です。ニュース価値のあるテーマ設定・写真素材の充実・記者への個別ピッチが掲載率を高めます。" },
                { title: "過去のSEO業者による不正リンクが残っている", body: "前任の担当者や以前依頼した業者が購入したリンクやスパムリンクが今も残っているケースがあります。Google Search ConsoleとAhrefsを組み合わせて全リンクを棚卸しし、不自然なリンクをDisavowファイルに追加して否認処理を行います。" },
                { title: "リンクの多様性が低い（特定ドメインからのみ）", body: "一つのドメインから大量のリンクが来ていても、評価は一つのドメインからの被リンクとしてカウントされます。参照ドメイン数（Referring Domains）の増加が被リンク数の増加より重要で、多様なドメインから自然に被リンクされているプロファイルが健全です。" },
                { title: "アンカーテキストが最適化されすぎている", body: "「葛飾区 SEO対策 格安」など特定のキーワードを含むアンカーテキストのリンクが集中すると、人工的なリンク操作とみなされるリスクがあります。ブランド名・URL・「詳しくはこちら」など自然なアンカーテキストが多様に混在している状態が理想的です。" },
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

        {/* 注意事項 */}
        <section className="py-16" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-black text-[22px] mb-6" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              外部SEOで絶対にやってはいけないこと
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "リンク購入", body: "お金を払って被リンクを購入する行為はGoogleのガイドライン違反。手動ペナルティを受けるリスクがあります。有償リンクにはrel='sponsored'の付与が必要で、それを付けなければガイドライン違反です。" },
                { title: "SEO目的の相互リンクの大量設定", body: "SEO目的の相互リンク（A→B、B→Aの交換）は不自然とみなされる場合があります。事業上の関係性がある文脈での自然なリンクのみ有効です。組織的なリンクスキームとみなされると評価が下がります。" },
                { title: "低品質ディレクトリへの大量登録", body: "関連性のない大量のディレクトリ登録は低品質なリンクプロファイルを形成します。業界に特化した信頼性の高いディレクトリに厳選して登録することが基本です。" },
                { title: "PBN（プライベートブログネットワーク）の利用", body: "SEO目的に作られた複数サイトからリンクを集めるPBNは明確なガイドライン違反です。発覚時のリスクが非常に高く、サイト全体のインデックス除外につながる可能性があります。" },
                { title: "スパムコメント・フォーラムへの大量投稿", body: "ブログのコメント欄やフォーラムにURLを大量投稿してリンクを得ようとする手法は、スパムとみなされます。これらのリンクはほぼnofollowが付与されており、SEO効果もありません。" },
                { title: "コンテンツが薄いサイトへの寄稿", body: "低品質なゲストポストサイトへの大量寄稿はスパムとみなされます。寄稿先のサイト品質・読者規模・編集品質を必ず確認してから寄稿する媒体を選定する必要があります。" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.65)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の外部SEO活用ポイント
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              被リンク獲得の難易度と主要な獲得源は業種によって大きく異なります。自社業種に合ったアプローチを選ぶことが外部SEO成功の近道です。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {[
                {
                  industry: "飲食店・カフェ",
                  points: "食べログ・ぐるなび・ホットペッパーグルメへのNAP登録、グルメブロガーへの取材・口コミ掲載依頼、地域ポータルサイトへの掲載が主要な被リンク・サイテーション獲得源。地域名+料理ジャンルのサイテーションが特に効果的です。フードメディアへのプレスリリース配信も有効。"
                },
                {
                  industry: "士業（弁護士・税理士・司法書士）",
                  points: "各士業の専門団体・協会への登録が権威性の高い被リンク源。法律・税務関連メディアへの専門家コメント提供、法律・ファイナンス系コンテンツサイトへの寄稿が有効。地域の商工会議所への加盟も被リンク獲得の手段。専門性の高い解説コンテンツがメディアに引用されやすい。"
                },
                {
                  industry: "医療・クリニック",
                  points: "病院検索サイト（病院なび・医療機関検索サイト）へのNAP登録、地域医師会への加盟、医療系メディアへの監修者情報の提供が主要な被リンク源。医師・専門家の監修クレジットがついた記事は権威性の高い被リンクになります。健康・医療情報サイトへの専門家コメントの提供が有効。"
                },
                {
                  industry: "建設・リフォーム・工務店",
                  points: "建設業協会・工務店組合・住宅関連団体への加盟が基本。ハウスメーカーの「施工店・加盟店一覧」への掲載、建材・設備メーカーのパートナー施工店掲載が有効な被リンク源。施工事例を写真・動画で充実させることで、建築専門メディアからの引用リンクを獲得しやすくなります。"
                },
                {
                  industry: "Web制作・デザイン会社",
                  points: "制作実績・ポートフォリオサイトからのクレジットリンク（「このサイトはXX社が制作しました」）が自然な被リンク源。cssdesignawards・awwwardsなどのデザインアワードへの応募で国際的な被リンク獲得も可能。業界カンファレンスへの登壇・スポンサー参加も有効なリンク獲得手段です。"
                },
                {
                  industry: "EC・小売",
                  points: "取り扱いブランド・メーカーの「正規販売店一覧」への掲載が重要な被リンク源。比較サイト・まとめサイトへの掲載、レビューメディアへのサンプル提供によるレビュー記事掲載が有効。商品データを引用されやすい形式（構造化データ）で公開することで、価格比較サイトからのリンクを獲得しやすくなります。"
                },
                {
                  industry: "教育・スクール・資格",
                  points: "資格認定機関・教育団体への加盟が権威性の高い被リンク源。教育系メディア・保護者向けメディアへの寄稿、受講生の進路実績・合格実績コンテンツが引用されやすいリンクベイトになります。地域の商工会議所・PTA・自治体との連携イベントで地域サイテーションを獲得できます。"
                },
                {
                  industry: "不動産・住まい",
                  points: "不動産業者登録サイト・住宅情報ポータルへのNAP登録、不動産関連協会への加盟が基本的な被リンク源。地域の住まいメディア・マンション管理組合の情報への貢献記事、住まい系メディアへの専門家コメント提供が有効。物件情報の詳細コンテンツが住まい系キュレーションサイトに引用されます。"
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 具体的な作業手順 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Step by Step</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              外部SEOの具体的な作業手順
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "Step 1：現状のリンクプロファイルを把握する", body: "Google Search Console「リンク」セクションで現在の被リンクドメイン数・上位リンク元・上位アンカーテキストを確認します。Ahrefs・SEMrush（無料版でも参照ドメイン数は確認可能）でドメイン評価（DR）と被リンク数のトレンドを把握します。この現状把握なしに施策を始めることは避けてください。" },
                { title: "Step 2：競合の被リンクプロファイルを分析する", body: "Ahrefsの「サイトエクスプローラー → 被リンク」で競合サイトのリンク元ドメインを確認します。競合が獲得しているが自サイトにはない参照ドメインをリスト化します（リンクギャップ分析）。このリストが被リンク獲得のターゲットリストになります。" },
                { title: "Step 3：リンクベイトコンテンツを制作する", body: "業界内で引用価値のあるコンテンツを企画・制作します。具体的には「〇〇業界の実態調査」「〇〇に関する完全ガイド」「〇〇ツール・テンプレートの無料提供」などです。コンテンツが完成したらターゲットドメインのリストに向けてアウトリーチを実施します。" },
                { title: "Step 4：業界団体・協会登録を整理する", body: "自社が属する業界の主要団体・協会・商工会議所をリストアップし、未加盟のものへの加盟申請を行います。多くの団体が会員一覧ページにリンクを掲載しており、比較的容易に獲得できる権威性の高い被リンクです。" },
                { title: "Step 5：NAP情報を全サイテーション先で統一する", body: "Googleビジネスプロフィール・Yahoo!プレイス・エキテン・ホットペッパー・各ポータルサイトのNAP情報を確認します。会社名・住所（番地・建物名まで）・電話番号の表記を完全に統一します。Brightlocalの「Citation Tracker」を使うと主要なサイテーション先を一括確認できます。" },
                { title: "Step 6：プレスリリースとメディアアウトリーチを実施する", body: "ニュースバリューのあるテーマ（新サービス開始・受賞・データ調査結果など）でプレスリリースを作成し、PR TIMES・@Pressに配信します。同時に、関連する業界メディアの編集部に個別ピッチメールを送ります。記者が使いやすい写真・データを同封することが掲載率向上のポイントです。" },
                { title: "Step 7：スパムリンクのDisavow処理", body: "Ahrefsで「有害リンク候補」フィルターを使い、DR10以下・関連性ゼロ・外国語スパムサイトからのリンクをリストアップします。Disavowファイル（テキスト形式）を作成し、Google Search ConsoleのDisavowツールに提出します。否認すべき判断に迷う場合は、専門家に相談することをお勧めします。" },
                { title: "Step 8：取引先・仕入れ先への掲載依頼", body: "自社の主要取引先・仕入れ先・パートナー企業のサイトに「お取り扱い店」「提携先」「パートナー企業」として掲載してもらえるか確認します。既存の信頼関係がある相手への依頼のため、比較的受け入れられやすい被リンク獲得手法です。" },
                { title: "Step 9：月次で被リンク増加をモニタリングする", body: "毎月、Search ConsoleとAhrefsで参照ドメイン数・新規被リンク数・失われた被リンク数を確認します。急激な被リンクの増減は原因を調査します。競合との被リンク差が縮まっているかを確認し、次の施策の優先度を決定します。" },
                { title: "Step 10：内部リンクと連動して評価を流通させる", body: "獲得した被リンクが向いているページ（LP・ブログ記事など）から、SEO上強化したいサービスページ・対策キーワードページに向けて内部リンクを設置します。外部から流入した評価をサイト内で分散・効果最大化させることが重要です。" },
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

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標（KPI）
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              外部SEOは施策の効果が出るまでに時間がかかります。適切な指標を設定して定点観測することで、施策の方向性を正しく評価できます。
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {[
                {
                  kpi: "参照ドメイン数（Referring Domains）",
                  where: "確認場所：Ahrefs / Google Search Console",
                  detail: "被リンクの総数より重要な指標。異なるドメインからリンクされている数が多いほど、リンクプロファイルの多様性が高く健全です。毎月増加しているかをトレンドで確認します。"
                },
                {
                  kpi: "ドメイン評価（DR / DA）",
                  where: "確認場所：Ahrefs（DR）/ Moz（DA）",
                  detail: "サイト全体のリンク権威性を示す指標。0〜100のスコアで表され、月単位で変化を追います。スコアそのものより推移の方向性が重要です。競合と比較しながら相対評価することが有効です。"
                },
                {
                  kpi: "新規獲得・消失した被リンク数",
                  where: "確認場所：Ahrefs「新規/消失」フィルター",
                  detail: "毎月どれだけの新規リンクを獲得し、どれだけ失ったかを管理します。消失リンクが多い場合はリンク元サイトの変化（リニューアル・閉鎖）の可能性があり、重要なリンクは早期に把握して対応します。"
                },
                {
                  kpi: "オーガニック検索順位の変化",
                  where: "確認場所：Google Search Console / Ahrefs Rank Tracker",
                  detail: "被リンク獲得の最終目標は検索順位の改善です。対策キーワードの順位変化を週次・月次で追います。被リンク増加から順位改善まで数週間〜数ヶ月のタイムラグがあることを考慮します。"
                },
                {
                  kpi: "オーガニック流入数の変化",
                  where: "確認場所：Google Analytics / Search Console",
                  detail: "順位改善の結果として流入が増えているかを確認します。流入増加と問い合わせ・コンバージョンの変化を合わせて見ることで、外部SEOのビジネスへの貢献度を評価できます。"
                },
                {
                  kpi: "サイテーション数と一致率",
                  where: "確認場所：Brightlocal / Whitespark",
                  detail: "地域ビジネスにとっては、サイテーション数と全サイテーション先でのNAP情報一致率が重要指標です。情報の一致率が高いほどGoogleのローカルSEO評価が安定します。月次で新規サイテーション獲得数も追います。"
                },
                {
                  kpi: "スパムリンク比率",
                  where: "確認場所：Ahrefs「有害スコア」フィルター",
                  detail: "全被リンクに占める低品質・有害リンクの割合。この比率が高い場合はDisavow処理が必要です。定期的なリンクプロファイルの健全性チェックとして月次確認が推奨されます。"
                },
                {
                  kpi: "リンクベイトコンテンツの参照ドメイン数",
                  where: "確認場所：Ahrefs「ベストページ（被リンク）」",
                  detail: "どのコンテンツが最も多くの被リンクを獲得しているかを把握します。成功しているコンテンツの共通点を分析し、次のリンクベイトコンテンツの企画に活かします。"
                },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ border: "1px solid #E8E4DC", borderRadius: "6px" }}>
                  <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                  <p className="text-[11px] font-semibold mb-3" style={{ color: "#c4b89a" }}>{item.where}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="外部SEOについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="外部SEO・被リンク戦略のご相談"
          body="自然な被リンク獲得戦略とドメイン評価向上の施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
