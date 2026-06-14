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
    a: "良質な被リンクは、関連性の高いサイト・権威性のあるサイト・文脈に沿ったアンカーテキスト・ノーフォローでないリンクです。低品質な被リンクは、関係のないジャンルのサイト・スパムサイト・相互リンクのためだけのリンク・大量の低品質ディレクトリへの登録などです。",
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
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "内部最適化との連携" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "被リンクを集めるコンテンツ制作" },
  { href: "/meo", label: "MEO対策", desc: "ローカルSEOとサイテーション" },
  { href: "/aio", label: "AIO対策", desc: "AI検索での引用・言及獲得" },
  { href: "/knowledge/backlink", label: "被リンク獲得ガイド", desc: "自然な被リンクの増やし方" },
  { href: "/knowledge/domain-authority", label: "ドメイン評価の高め方", desc: "DA・DRを改善する方法" },
  { href: "/column/seo", label: "SEOコラム", desc: "外部SEOの最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "外部SEO込みの料金目安" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "被リンク状況の確認項目" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "被リンクプロファイルの評価" },
];

export default function ExternalSeoPage() {
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
              <span style={{ color: "#0F172A" }}>外部SEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>External SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              外部SEO（被リンク対策）
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              外部SEOとは、他のサイトから自サイトへの被リンク（バックリンク）を獲得したり、ブランド名の引用（サイテーション）を増やしたりすることで、サイトのドメイン評価と検索順位を高める施策です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              内部SEO・コンテンツSEO・テクニカルSEOを整えた上で取り組む施策です。質の高いコンテンツを公開し、それが自然に引用・リンクされる状況を作ることが外部SEOの本質です。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/8.png" alt="外部SEO・被リンク獲得・ドメイン評価向上のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.25)" }} />
        </section>

        {/* 外部SEOの主要施策 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Tactics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              外部SEOの主要施策
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "引用されやすいコンテンツ制作", body: "調査レポート・業界統計・詳細なガイド・ユニークな視点のコラムは、他サイトから引用・リンクされやすいコンテンツです。まずはリンクに値するコンテンツを作ることが外部SEOの基礎です。" },
                { title: "プレスリリース・メディア掲載", body: "プレスリリース配信によるメディア掲載、業界メディアへの寄稿・インタビュー記事は高品質な被リンク獲得の方法です。Googleニュースに掲載されている媒体からのリンクは特に評価が高い傾向があります。" },
                { title: "業界団体・協会への加盟", body: "業界団体・商工会議所・地域協会などへの加盟に伴い、会員一覧ページからのリンクを得ることができます。関連性が高く信頼性のある被リンクとして評価されます。" },
                { title: "仕入れ先・提携先への掲載依頼", body: "取引先・パートナー企業のWebサイトに自社情報を掲載してもらうことで被リンクを獲得できます。商業的なリンクに見えないよう、自然な文脈での掲載が重要です。" },
                { title: "SNS・コミュニティでの情報発信", body: "SNS上での言及はGoogleのランキングに直接影響しませんが、コンテンツの露出増加→被リンク獲得の可能性向上という間接的な効果があります。また、ブランド名の言及（サイテーション）はE-E-A-T評価に貢献します。" },
                { title: "スパムリンクの否認（Disavow）", body: "低品質なスパムリンクが多数向けられている場合、Google Search ConsoleのDisavowツールを使って否認します。不自然なリンクプロファイルはGoogleのアルゴリズムにより評価が下がる可能性があるため、定期的なリンクプロファイルの確認が重要です。" },
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
                { title: "リンク購入", body: "お金を払って被リンクを購入する行為はGoogleのガイドライン違反。手動ペナルティを受けるリスクがあります。" },
                { title: "相互リンクの大量設定", body: "SEO目的の相互リンク（A→B、B→Aの交換）は不自然とみなされる場合があります。関連性のある文脈での自然なリンクのみ有効です。" },
                { title: "低品質ディレクトリへの大量登録", body: "関連性のない大量のディレクトリ登録は低品質なリンクプロファイルを作ります。信頼性の高いディレクトリに厳選して登録します。" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.65)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="外部SEOについてよくある質問" bgColor="#FFFFFF" />
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
