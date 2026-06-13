import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "外部SEO・被リンク対策とは｜自然な被リンク獲得とサイテーション整合｜株式会社サイプレス",
  description:
    "外部SEO・被リンク対策の本質を解説。コンテンツマーケティングによる自然なリンク獲得・NAP情報のサイテーション整合・ブランドメンション・不自然リンクの否認など、外部評価を高める正しい施策を説明します。",
  keywords: ["外部SEO", "被リンク対策", "バックリンク", "サイテーション", "ブランドメンション", "リンクビルディング"],
  openGraph: {
    title: "外部SEO・被リンク対策とは｜自然な被リンク獲得とサイテーション整合｜株式会社サイプレス",
    description:
      "外部SEO・被リンク対策の本質を解説。コンテンツマーケティングによる自然なリンク獲得・NAP情報のサイテーション整合・ブランドメンション・不自然リンクの否認など、外部評価を高める正しい施策を説明します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/seo/external-seo" },
};

const measures = [
  {
    title: "被リンク獲得（コンテンツマーケティング）",
    body: "外部SEOの最も持続可能なアプローチは、他サイトが自然にリンクしたくなる高品質なコンテンツを制作することです。業界の一次調査・詳細なハウツーガイド・独自のデータ・インフォグラフィックなど、引用・共有される価値のあるコンテンツが自然な被リンクを生みます。PR記事・プレスリリース配信・メディアへの専門家コメント提供も有効な手段です。",
  },
  {
    title: "サイテーション（NAP情報の一致）",
    body: "サイテーションとは、外部サイトに自社の名前・住所・電話番号（NAP情報）が記載されることです。被リンクがなくても、一致したNAP情報の掲載件数と一貫性はGoogleのローカル評価に影響します。Googleビジネスプロフィール・Yelp・各業界ディレクトリへの登録・修正を定期的に行い、情報の整合性を保ちます。",
  },
  {
    title: "SNS・GBPとの連携によるシグナル強化",
    body: "SNS（X・Facebook・Instagram・LinkedIn）での活発な発信とエンゲージメントは、ブランドの存在感を高め間接的なSEOシグナルになります。Googleビジネスプロフィールの最新情報・投稿・口コミへの返信も外部評価の一部として機能します。オフラインのブランド認知がオンライン検索量を増やし、サイテーション獲得にもつながります。",
  },
  {
    title: "不自然なリンクの検出・否認",
    body: "過去に購入・交換した低品質リンクや、スパムサイトからの不自然なリンクが蓄積していると、Googleのスパムアルゴリズムによるペナルティリスクがあります。Google Search ConsoleのリンクレポートやAhrefsなどのツールで定期的に被リンクプロフィールを確認し、有害なリンクをGoogleのDisavow Toolで否認します。",
  },
  {
    title: "ブランドメンション獲得",
    body: "他サイトで自社ブランド名・製品名が言及（メンション）されることは、リンクがなくてもGoogleがブランドの権威性を認識するシグナルになると考えられています。メディア掲載・専門家インタビュー・業界イベントでの登壇・パートナーシップなど、オンライン・オフラインを問わずブランドの認知度を高める活動がメンション獲得につながります。",
  },
];

const faqItems = [
  {
    q: "被リンクはどうやって増やせばいいですか？",
    a: "最も持続可能な方法は、自然にリンクされるほど価値の高いコンテンツを制作することです。具体的には業界の統計・調査レポート・詳細なガイド・独自の事例研究などが被リンクを集めやすいコンテンツです。加えて、自社業界の有力メディアへの寄稿・プレスリリース配信・業界ディレクトリへの登録・パートナーサイトとの相互連携なども効果的なアプローチです。",
  },
  {
    q: "被リンクを購入しても大丈夫ですか？",
    a: "リンクの売買はGoogleのウェブマスターガイドラインに明確に違反しています。短期的に順位が上がるケースもありますが、Googleのスパムアルゴリズム（Penguin）や手動ペナルティの対象となった場合、検索順位が大幅に下落し回復に長期間を要します。購入リンクは即効性があるように見えても、事業継続のリスクを伴う危険な手法です。",
  },
  {
    q: "被リンクの数よりも質が重要とはどういう意味ですか？",
    a: "Googleは被リンクの数より質を重視します。質の高い被リンクとは、①関連性の高いサイト（同業種・類似テーマ）からのリンク、②権威あるサイト（大手メディア・政府機関・大学）からのリンク、③文脈の中に自然に組み込まれたリンクです。低品質サイトからの大量リンクより、1本の権威あるサイトからのリンクの方が評価への影響が大きいことがほとんどです。",
  },
  {
    q: "競合他社のリンクプロフィールは参考になりますか？",
    a: "非常に参考になります。AhrefsやSemrushなどのツールで競合サイトの被リンク元を調査すると、「どのようなサイトからリンクされているか」「どんなコンテンツがリンクを集めているか」がわかります。競合が掲載されているディレクトリや媒体で自社も掲載依頼をするアプローチや、競合が持っていないより詳しいコンテンツを作ることで差別化できます。",
  },
  {
    q: "Googleペナルティを受けているか確認する方法は？",
    a: "手動ペナルティはGoogle Search ConsoleのSecurityとManual Actionsの項目に通知が届きます。アルゴリズムによるペナルティは通知がないため、Google Analytics・Search Consoleでのトラフィック・順位の急落と、Googleのコアアップデート（Core Algorithm Update）の日程を照らし合わせて判断します。急落の原因が被リンクか・コンテンツ品質かによって対処法が変わります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎・全体像" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "被リンクを生むコンテンツ制作" },
  { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
];

export default function ExternalSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/seo" className="text-[12px] hover:text-[#0F172A] transition-colors" style={{ color: "#9CA3AF" }}>SEO対策</Link>
              <span className="text-[12px]" style={{ color: "#9CA3AF" }}>/</span>
              <span className="text-[12px]" style={{ color: "#374151" }}>外部SEO・被リンク対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>External SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "#0F172A" }}>
              外部SEO・被リンク対策
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              外部SEOとは、他のWebサイトからの被リンクやサイテーションなど、自社サイト外部からの評価シグナルを高める施策です。Googleはリンクを「投票」として捉え、信頼できるサイトから多くのリンクを受けているサイトを高く評価します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image
            src="/1.png"
            alt="複数人がグラフや資料を確認しているミーティングの様子"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.15)" }} />
        </section>

        {/* 外部SEOとは */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>外部SEOとは — 被リンク・サイテーション・E-E-A-T</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                外部SEO（Off-Page SEO）とは、自社が管理していない外部サイトからの評価を高めることで、Googleからの信頼性・権威性を向上させる施策群です。最も代表的なものが被リンク（バックリンク）ですが、サイテーション（NAP情報の言及）・ブランドメンション・SNSシグナルなども含まれます。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                Googleの創業当初から「PageRank」として機能してきた被リンク評価は、現在も重要なランキング要因の一つです。特に競合が激しいキーワードでは、内部SEO・コンテンツ品質が同等であれば外部評価の差が順位を決める要因になります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                外部SEOはE-E-A-T（経験・専門性・権威性・信頼性）の向上にも直結します。権威あるメディアやサイトからリンクされること・業界の第一人者として言及されることは、Googleが「このサイトは信頼できる専門家である」と判断する根拠となります。コンテンツの質を高めつつ、外部評価を積み上げることで中長期的な検索競争力が構築されます。
              </p>
            </div>
          </div>
        </section>

        {/* 外部SEOの重要施策 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#9CA3AF" }}>Measures</p>
              <h2 className="font-black text-[22px] md:text-[26px]" style={{ color: "#0F172A" }}>外部SEOの重要施策</h2>
            </div>
            <div className="max-w-3xl">
              {measures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 注意すべき外部SEO */}
        <section className="py-16" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-black text-[22px] md:text-[26px] mb-6" style={{ color: "#0F172A" }}>注意すべき外部SEO — ブラックハットリンク構築のリスク</h2>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                外部SEOには、Googleのガイドラインに違反する手法（ブラックハットSEO）が存在します。リンク購入・リンクファーム（相互リンクの組織的売買）・スパムコメントへのリンク埋め込みなどがその代表例です。これらは短期的に効果が出ることがありますが、発覚した場合のリスクは非常に大きいです。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                Googleは定期的にスパムアルゴリズム（Penguin）を更新し、不自然なリンクプロフィールを持つサイトを検出します。手動ペナルティを受けると検索結果から大幅に降順・除外され、回復には数ヶ月から1年以上かかるケースがあります。過去の施策会社が残した不自然なリンクが現在のサイトに悪影響を与えているケースも少なくありません。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスでは、高品質なコンテンツ制作を起点とした自然なリンク獲得・メディア露出・サイテーション整備という持続可能なアプローチのみを推奨します。短期的な施策より長期的な資産価値を重視した外部SEO戦略をご提案します。
              </p>
            </div>
          </div>
        </section>

        {/* 2-col: image + text — 被リンク戦略 */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_13_37.png"
                  alt="2名が資料を並べてレビューしている打ち合わせの様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-black text-[22px] mb-5" style={{ color: "#0F172A" }}>被リンク戦略：質の高い外部評価を積み上げる</h2>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  被リンク獲得の基本は「リンクされる価値のあるコンテンツを作ること」です。業界の調査データ・詳細なガイド・専門家のインサイトを含む記事は、他サイトから自然にリンクされます。加えて、業界メディアへの寄稿・プレスリリース配信・パートナーシップも効果的です。リンク購入などのブラックハット手法はGoogleペナルティのリスクがあるため、持続可能なホワイトハット戦略を一貫して推奨します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="外部SEO・被リンク対策についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="外部SEO・被リンク対策のご相談"
          body="被リンクプロフィールの診断・不自然リンクの否認・コンテンツを起点とした自然なリンク獲得戦略まで、サイプレスが正しい外部SEO施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
