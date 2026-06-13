import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "コーポレートサイト制作 | 会社の信頼性を伝える企業Webサイト",
  description: "株式会社サイプレスのコーポレートサイト制作。SEO設計・問い合わせ導線・採用導線を組み込んだ企業サイトを制作します。見た目だけでなく、集客と信頼構築を目的とした設計を行います。",
  keywords: ["コーポレートサイト制作", "企業サイト制作", "会社ホームページ", "SEO対応", "東京"],
  openGraph: {
    title: "コーポレートサイト制作 | 株式会社サイプレス",
    description: "会社の信頼性・事業内容・採用情報を伝える企業サイト制作。SEO設計と問い合わせ導線を最初から組み込みます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/web-design/corporate-site" },
};

const POINTS = [
  {
    num: "01",
    title: "会社の信頼性を伝えるデザインと構成",
    body: "訪問者が「この会社に依頼して大丈夫か」と感じるまでの情報設計を重視します。会社概要・代表挨拶・実績・スタッフ紹介など、信頼を形成するコンテンツを適切な順序で配置します。",
  },
  {
    num: "02",
    title: "SEO設計（サイト構造・内部リンク）",
    body: "事業内容に合わせたキーワード選定・URL設計・サイト階層・内部リンク構造を制作段階から設計します。制作後にSEO対応するよりも、最初から組み込んだ方が効果的で修正コストも下がります。",
  },
  {
    num: "03",
    title: "事業内容・強みのわかりやすい説明",
    body: "専門性が高い事業でも、訪問者に短時間で理解してもらえるコピーとページ構成を設計します。競合との差別化ポイントを明確にした文章作成もサポートします。",
  },
  {
    num: "04",
    title: "採用情報への導線",
    body: "コーポレートサイトは採用活動の重要な接点でもあります。採用ページへの自然な誘導と、求職者が知りたい情報（働く環境・社員の声・求人内容）への導線を設計します。",
  },
  {
    num: "05",
    title: "問い合わせ導線の最適化",
    body: "問い合わせボタンの配置・フォームの入力項目・完了後のサンクスページまで、問い合わせ率を高めるためのCVR設計を行います。無駄な入力項目を減らし、入力しやすいフォームを提供します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "コーポレートサイトのリニューアルにも対応していますか？",
    a: "はい。既存サイトのSEO評価を引き継ぐためのリダイレクト設計、コンテンツ移行、URL設計の見直しなど、リニューアルに必要な対応を行います。現状のサイト分析からご提案します。",
  },
  {
    q: "制作に必要な素材（写真・テキスト）は用意する必要がありますか？",
    a: "可能であればご用意いただくことを推奨しますが、素材がない場合もご対応できます。ストック写真の選定・キャッチコピー作成・文章の代筆も承っています。",
  },
  {
    q: "ページ数はどのくらいが一般的ですか？",
    a: "中小企業のコーポレートサイトは5〜15ページが一般的です。会社概要・事業内容・採用・お知らせ・お問い合わせが基本構成です。サービスや事業の数によって増減します。",
  },
  {
    q: "更新は自分たちで行えますか？",
    a: "WordPressやヘッドレスCMSを使用することで、専門知識なしに記事・お知らせ・採用情報を更新できます。操作研修・マニュアルも提供しています。",
  },
  {
    q: "スマートフォン対応は含まれますか？",
    a: "はい。すべての制作物はモバイルファーストで設計しています。スマートフォン・タブレット・PCすべての端末で最適な表示になるよう実装します。",
  },
];

export default function CorporateSitePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Corporate Site
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              コーポレートサイト制作
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              会社の信頼性・事業内容・強みを的確に伝え、問い合わせと採用につなげる企業Webサイトを制作します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/web-design" className="hover:underline" style={{ color: "#6B7280" }}>ホームページ制作</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>コーポレートサイト制作</li>
            </ol>
          </div>
        </nav>

        {/* ===== Role ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Role
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                コーポレートサイトの役割
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                コーポレートサイトは、会社の「顔」であると同時に、問い合わせ・採用・信頼形成のための重要なビジネスツールです。営業先に渡す名刺やパンフレットよりも多くの情報を届けられ、24時間365日機能し続ける唯一の存在です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                しかし多くの中小企業のコーポレートサイトは、SEO設計が弱く検索から見つけてもらえない、問い合わせまでの導線が曖昧でCV率が低い、スマートフォンでの表示が崩れているなど、本来の役割を果たせていません。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスは、「きれいなサイトを作る」のではなく、「目的に対して機能するサイトを作る」ことを重視します。会社の信頼性・事業内容・強みをSEOとCVRの観点から整理し、検索されて、読まれて、問い合わせにつながるサイトを制作します。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Key Points ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Key Points
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                制作の重要ポイント
              </h2>
            </div>
            <div>
              {POINTS.map((point) => (
                <div
                  key={point.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{point.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0F172A" }}>{point.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{point.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="コーポレートサイト制作 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス一覧" },
            { href: "/web-design/recruit-site", label: "採用サイト制作", desc: "求職者に届く採用専用サイト" },
            { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "検索流入を意識した設計" },
            { href: "/services/seo", label: "SEO対策", desc: "検索順位改善の総合支援" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="コーポレートサイト制作のご相談"
          body="新規制作・リニューアルどちらもご対応しています。現状の課題と目標をお聞きし、最適なサイト設計をご提案します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
