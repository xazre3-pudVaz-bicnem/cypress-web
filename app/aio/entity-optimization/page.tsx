import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "エンティティ最適化｜Googleナレッジグラフ対策｜株式会社サイプレス",
  description:
    "エンティティ最適化でGoogleナレッジグラフに登録され、AI検索に引用される企業へ。会社・サービス・人物情報の一貫性整備からOrganizationスキーマ実装まで解説。",
  keywords: ["エンティティ最適化", "ナレッジグラフ", "AIO対策", "Organizationスキーマ", "AI検索", "エンティティSEO"],
  openGraph: {
    title: "エンティティ最適化｜Googleナレッジグラフ対策｜株式会社サイプレス",
    description: "エンティティ最適化によるナレッジグラフ登録とAI引用率向上の戦略を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/aio/entity-optimization" },
};

const MEASURES = [
  {
    num: "01",
    title: "会社名・代表者名・サービス名の統一・一貫性",
    body: "Webサイト・SNS・プレスリリース・業界メディアなど、すべてのオンライン上の情報で会社名・代表者名・サービス名・住所・電話番号を完全に統一します。表記ゆれ（株式会社とKK、略称と正式名称の混在）はエンティティの認識精度を低下させます。",
  },
  {
    num: "02",
    title: "Organizationスキーマでの正確な情報記述",
    body: "JSON-LDでOrganization Schemaを実装し、会社名・URL・ロゴ・住所・電話番号・事業内容・代表者情報・SNSリンクをGoogleとAIが機械的に読み取れる形式で提供します。構造化データはナレッジグラフへの情報浸透を大幅に加速させます。",
  },
  {
    num: "03",
    title: "Googleナレッジグラフへの登録",
    body: "Googleナレッジグラフは、Googleが認識する「実体」のデータベースです。ナレッジグラフに登録されることで、ブランド名検索時にサイドパネル（ナレッジパネル）が表示されます。登録には構造化データの実装・権威サイトへの掲載・情報の一貫性確保が重要です。",
  },
  {
    num: "04",
    title: "ウィキペディア・権威サイトへの掲載",
    body: "ウィキペディアへの掲載はナレッジグラフへの登録に最も効果的なシグナルです。また業界団体・地域商工会・公的機関・権威あるニュースサイトへの掲載も、エンティティとしての認識精度向上に貢献します。",
  },
  {
    num: "05",
    title: "複数メディアへの一貫した情報発信",
    body: "プレスリリース・SNS公式アカウント・業界メディアへの寄稿・ポッドキャスト出演など、複数のメディア・チャネルで同一の情報を継続的に発信することで、Googleのエンティティ認識精度が高まります。",
  },
  {
    num: "06",
    title: "関連エンティティとの接続（地域・業界・人物）",
    body: "自社エンティティを地域（所在地市区町村）・業界（業種・サービスカテゴリ）・関連人物（代表者・スタッフ）などの関連エンティティとリンクさせることで、ナレッジグラフ内での位置付けが明確になります。内部リンク設計・sameAsリンク・Person Schemaの実装が有効です。",
  },
];

const FAQ_ITEMS = [
  {
    q: "エンティティ最適化はSEOとどう違いますか？",
    a: "従来のSEOがキーワードを中心に最適化するのに対し、エンティティ最適化は「実体（企業・人・場所・サービス）」をGoogleとAIが正確に認識・理解するよう最適化します。AI検索時代では、エンティティとしての認識が引用・推薦に直結するため、AIO対策の中核的な施策です。",
  },
  {
    q: "ナレッジグラフへの登録に審査はありますか？",
    a: "Googleに直接申請する仕組みはなく、権威性の高い情報源への掲載・構造化データの実装・情報の一貫性がGoogleのアルゴリズムによって評価され、自動的に登録されます。通常、対策開始から数ヶ月〜半年程度で変化が確認できる場合が多いです。",
  },
  {
    q: "中小企業でもエンティティ最適化は意味がありますか？",
    a: "はい。大企業でなくても地域・業界内でのエンティティ認識を高めることは可能です。特に地域ビジネスでは、LocalBusiness Schemaの実装・Googleビジネスプロフィールとの整合・地域メディアへの掲載でエンティティ登録を実現しているケースが多くあります。",
  },
  {
    q: "エンティティ最適化の効果はどうやって測定しますか？",
    a: "ナレッジパネルの表示確認・AI検索での自社言及頻度・ブランドキーワードの検索結果品質・被リンクの質的向上などを測定指標として使用します。当社では月次レポートでエンティティ関連指標を継続的に追跡します。",
  },
  {
    q: "既存のウェブサイトに後からエンティティ最適化を追加できますか？",
    a: "はい。既存サイトへのOrganization Schemaの追加・会社情報ページの充実・NAP情報の統一・SNSアカウントのsameAsリンク追加は、既存サイトでも即座に実施できます。構造化データは技術的な実装変更のみで対応可能です。",
  },
];

export default function EntityOptimizationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/aio" className="hover:underline" style={{ color: "#6B7280" }}>AIO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>エンティティ最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
              Entity Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              エンティティ最適化<br />Googleナレッジグラフ対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleやすべての生成AIが認識する「実体（エンティティ）」として自社を確立することが、
              AIO対策の根幹です。曖昧な情報より明確なエンティティが引用される時代に向けて、
              最適化を進めましょう。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_20_52.png"
            alt="エンティティ最適化・ナレッジグラフ対策のデジタルイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* エンティティとは */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
                What is Entity
              </p>
              <h2 className="font-black text-[28px] leading-tight mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                エンティティとは
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                エンティティとは、GoogleやAIが認識する「実体」のことです。会社・人物・場所・サービス・製品など、
                現実世界に存在する「もの」や「概念」がエンティティとして扱われます。
                Googleはキーワードの羅列ではなく、エンティティとエンティティの関係性を理解することで
                検索結果の精度を高めています。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                AI検索では、このエンティティ認識がさらに重要になります。「○○業界でおすすめの会社は？」という
                質問に対してAIが回答する際、明確なエンティティとして認識されている企業が優先的に言及されます。
                エンティティとして認識されることは、AI引用の前提条件です。
              </p>
            </div>
          </div>
        </section>

        {/* エンティティ最適化の重要性 */}
        <section className="py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
                Why It Matters
              </p>
              <h2 className="font-black text-[28px] mb-8" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
                エンティティ最適化の重要性
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                AI検索は「キーワードに最も近いページ」ではなく「質問に最も正確に回答できる情報源」を選びます。
                そのため、明確なエンティティとして確立されていない企業・サービスは、
                AI検索結果での言及頻度が低くなります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleナレッジグラフへの登録・Organizationスキーマの実装・情報の一貫性確保によって、
                GoogleとAIの両方が「この会社はこういう企業で、こういうサービスを提供している」と
                正確に理解できる状態を作ることがエンティティ最適化の目標です。
              </p>
            </div>
          </div>
        </section>

        {/* エンティティ最適化の施策 */}
        <section className="py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "#6B7280" }}>
              Key Measures
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>
              エンティティ最適化の施策
            </h2>
            <div className="max-w-3xl">
              {MEASURES.map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #ece8e0" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ fontFamily: "var(--font-serif)", color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #ece8e0" }} />
            </div>
          </div>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="エンティティ最適化に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/aio", label: "AIO対策", desc: "AI検索最適化の全体戦略" },
            { href: "/aio/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
            { href: "/aio/organization-data", label: "Organization構造化データ", desc: "企業情報の構造化" },
            { href: "/aio/knowledge-graph", label: "ナレッジグラフ対策", desc: "Googleへの認識登録" },
            { href: "/services/aio", label: "AIO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="エンティティ最適化のご相談はサイプレスへ"
          body="Googleナレッジグラフ登録・Organizationスキーマ実装・情報一貫性の整備まで、エンティティ最適化を一貫して支援します。まずは現状診断からご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
