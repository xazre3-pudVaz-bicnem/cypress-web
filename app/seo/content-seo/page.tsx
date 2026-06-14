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
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "対策キーワードの選定" },
  { href: "/seo/blog-strategy", label: "ブログ・コンテンツ戦略", desc: "記事設計と継続的な運用" },
  { href: "/seo/seo-writing", label: "SEOライティング", desc: "検索意図に沿った文章の書き方" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "コンテンツの現状評価" },
  { href: "/aio", label: "AIO対策", desc: "AI検索でのコンテンツ引用" },
  { href: "/knowledge/content-seo", label: "コンテンツSEO基礎", desc: "初心者向けガイド" },
  { href: "/knowledge/eeat", label: "E-E-A-T強化ガイド", desc: "専門性・権威性の高め方" },
  { href: "/column/seo", label: "SEOコラム", desc: "SEOの最新情報・基礎解説" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "コンテンツSEOの料金目安" },
];

export default function ContentSeoPage() {
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

        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 19_20_52.png" alt="コンテンツSEO・記事制作のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* コンテンツSEOの流れ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
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
                  body: "まずビジネス目標に関連するキーワードを洗い出し、月間検索ボリューム・競合難易度・検索意図を調査します。「知りたい」「比較したい」「買いたい」「近くで探したい」など、ユーザーがそのキーワードで何を求めているかを理解することが第一歩です。キーワードプランナー・Googleサジェスト・関連キーワードツールを活用します。",
                },
                {
                  step: "STEP 02",
                  title: "競合ページ分析・コンテンツギャップの発見",
                  body: "対策キーワードで現在上位に表示されているページを詳細に分析します。どのような構成・深さ・量のコンテンツが評価されているかを把握し、自社が提供できる付加価値（一次情報・独自の観点・より詳細な解説）を特定します。競合にない視点を加えることが差別化の鍵です。",
                },
                {
                  step: "STEP 03",
                  title: "コンテンツ構成案の設計",
                  body: "検索意図と競合分析をもとに、記事の目次・構成案を設計します。どの見出し（H2・H3）でどの情報を提供するかを決め、読者が記事を読み終えたときに得られる価値を明確にします。E-E-A-T（経験・専門性・権威性・信頼性）が伝わる構成を意識します。",
                },
                {
                  step: "STEP 04",
                  title: "ライティング・一次情報の付与",
                  body: "構成案に沿ってコンテンツを執筆します。AIを活用する場合も、一次情報（実体験・独自調査・専門知識）を加えることが必須です。ユーザーにとって本当に価値のある情報を、わかりやすく・具体的に・誠実に伝えることを最優先にします。",
                },
                {
                  step: "STEP 05",
                  title: "内部SEO最適化・画像設定",
                  body: "タイトルタグ・メタディスクリプション・見出しタグ・内部リンク・alt属性・URLを最適化します。また構造化データ（Article・FAQPage）を実装し、AI検索での引用可能性も高めます。",
                },
                {
                  step: "STEP 06",
                  title: "公開後の計測・リライト改善",
                  body: "公開後はGoogle Search Consoleで掲載順位・クリック率・表示回数を追跡します。3〜6ヶ月後に成果が出ていないコンテンツはリライトを実施。情報の更新・構成の改善・内部リンクの追加を行い、継続的に順位改善を図ります。",
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
                { title: "著者情報・専門性の明示", body: "コンテンツを誰が書いたか（著者プロフィール・資格・経験年数）を明示します。匿名のコンテンツよりも、専門家が書いたと明確にわかるコンテンツの方がE-E-A-T評価が高くなります。" },
                { title: "一次情報・実体験の掲載", body: "他サイトに書いていない独自の調査結果・事例・体験談を含めることで、コピーコンテンツにはない独自性が生まれます。これがAI検索での引用可能性を高める最大の要因の一つです。" },
                { title: "引用・参照元の明示", body: "統計データ・調査結果を引用する際は必ず出典を明記します。信頼できる外部ソースへのリンクは、コンテンツの信頼性を高めます（権威あるページへの外部リンクはSEOにも有効）。" },
                { title: "会社情報・連絡先の充実", body: "運営会社の情報（住所・電話・代表者名・設立年月）が明示されたサイトは信頼性が高いと評価されます。プライバシーポリシー・特定商取引法に基づく表記も整備します。" },
                { title: "コンテンツの定期的な更新", body: "「最終更新日」を明示し、情報を定期的に更新することで、常に最新・正確な情報を提供している信頼できるサイトであることを示します。特に変化の早い分野では重要です。" },
                { title: "外部からの引用・言及", body: "他サイトからリンクされている・メディアに掲載されている・SNSで言及されているといった外部評価が積み重なることで、権威性が高まります。被リンク獲得戦略と連動した取り組みが重要です。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
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
                { title: "コンテンツ戦略立案", body: "ビジネス目標から逆算し、獲得すべきキーワード群・コンテンツカレンダー・優先度を設計します。どのキーワードから着手するかの優先度付けが、コンテンツSEOの成果を左右します。" },
                { title: "記事企画・構成案作成", body: "検索意図を分析した上で、読者が記事を読み終えたときに「知りたかったことが全部わかった」と感じる構成案を作成します。競合との差別化ポイントを含む構成設計が重要です。" },
                { title: "SEO記事・コンテンツ制作", body: "サイプレスが直接コンテンツを執筆するプランと、構成案・指示書を提供して貴社スタッフが書くプランに対応しています。業種によっては専門家への取材・監修依頼も調整します。" },
                { title: "既存コンテンツのリライト", body: "現在11〜30位に位置するコンテンツのリライトは費用対効果が高い施策です。情報の追加・構成の改善・内部リンクの充実を行い、上位表示を目指します。" },
                { title: "コンテンツ効果計測・改善", body: "Google Search Consoleで月次のコンテンツパフォーマンスを追跡し、成果の出ているコンテンツの横展開・成果の出ていないコンテンツの改善を継続的に実施します。" },
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
