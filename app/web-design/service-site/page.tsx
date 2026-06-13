import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "サービスサイト制作 | 専門サービスを伝えるWebサイト",
  description: "株式会社サイプレスのサービスサイト制作。ターゲットに刺さるコピーと導線設計で、問い合わせ・相談につながるサービス専用Webサイトを制作します。SEO設計・実績掲載・CV改善まで対応。",
  keywords: ["サービスサイト制作", "ランディングページ", "LP制作", "問い合わせ増加", "CV改善", "SEO"],
  openGraph: {
    title: "サービスサイト制作 | 株式会社サイプレス",
    description: "専門サービスを伝え、問い合わせ・相談につながるWebサイトを制作します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/web-design/service-site" },
};

const POINTS = [
  {
    num: "01",
    title: "ターゲットに合わせたコピーライティング",
    body: "サービスの説明を書くのではなく、「このサービスを必要としている人が、何を求めているか」から逆算した文章を書きます。ターゲットの悩み・課題・期待に応えるコピーがCV率を高めます。",
  },
  {
    num: "02",
    title: "サービス内容の具体的な説明",
    body: "「何をするサービスか」「どのように提供されるか」「費用感はどのくらいか」を曖昧にせず具体的に伝えます。不明点が残ると問い合わせをためらう原因になるため、FAQも含めた情報設計を行います。",
  },
  {
    num: "03",
    title: "実績・事例の掲載",
    body: "「このサービスで本当に成果が出るか」という不安を解消するために、具体的な実績・数値・導入事例を掲載します。業種・規模・課題・成果をセットで伝えることで信頼性が高まります。",
  },
  {
    num: "04",
    title: "問い合わせ・相談への明確な導線",
    body: "ページを読み進めたユーザーが「次に何をすべきか」迷わないよう、問い合わせボタンやフォームへの誘導を適切な位置に配置します。電話・メール・LINEなど複数の連絡手段も整理します。",
  },
  {
    num: "05",
    title: "SEO設計",
    body: "サービスに関連するキーワードで検索されるよう、タイトル・見出し・本文の構成を設計します。サービスページ自体が検索流入の入り口になることで、広告費を抑えながら集客できます。",
  },
];

const FAQ_ITEMS = [
  {
    q: "ランディングページ（LP）との違いは何ですか？",
    a: "ランディングページは広告流入に最適化された単一ページで、ナビゲーションを持たない構造が一般的です。サービスサイトは複数のページを持ち、SEOで検索流入を狙える構造になります。用途・集客方法・予算によってどちらが適切かが変わります。",
  },
  {
    q: "既存のコーポレートサイトにサービスページを追加することはできますか？",
    a: "はい。既存サイトへのページ追加・改修にも対応しています。既存のデザインに合わせた新規ページの制作も承っています。",
  },
  {
    q: "複数のサービスがある場合、それぞれのページを作った方がいいですか？",
    a: "SEOの観点からは、サービスごとに独立したページを持つことを推奨しています。1ページに複数のサービスを詰め込むよりも、各サービスに特化したページの方がキーワードで上位表示されやすくなります。",
  },
  {
    q: "写真・動画素材がない場合でも制作できますか？",
    a: "ストック写真・イラスト・アイコンを活用した制作も可能です。写真撮影のご提案や、撮影のディレクション対応も承っています。",
  },
  {
    q: "問い合わせフォームの設置・設定も含まれますか？",
    a: "はい。問い合わせフォームの設計・設置・自動返信メールの設定まで含めて対応します。スパム対策・個人情報保護に関する設定も実施します。",
  },
];

export default function ServiceSitePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Service Site
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              サービスサイト制作
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              専門サービスの価値をターゲットに的確に伝え、問い合わせ・相談につなげるWebサイトを制作します。
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
              <li style={{ color: "#0F172A" }}>サービスサイト制作</li>
            </ol>
          </div>
        </nav>

        {/* ===== Concept ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Concept
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                専門サービスを伝えるサイト設計
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                士業・コンサルティング・専門スクール・リフォーム・福祉サービスなど、サービスの専門性が高いビジネスほど「何をしてくれる会社なのかが伝わりにくい」という問題が起きやすくなります。専門用語を並べるだけでは、ターゲットに届きません。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                サービスサイトに必要なのは、「こんな悩みがある人のための、こんなサービスです」という明快な入口と、「本当に成果が出るのか」という不安を解消する実績・事例・FAQ、そして「相談してみよう」と思えるシンプルな問い合わせ導線です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスは、ターゲットの検索意図を起点にしたコピーライティングと、CVR改善を意識したページ設計でサービスサイトを制作します。SEOにも対応し、制作後も検索からの流入が継続する構造を作ります。
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
                制作のポイント
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
        <FaqSection items={FAQ_ITEMS} heading="サービスサイト制作 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス一覧" },
            { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "検索流入を意識した設計" },
            { href: "/services/seo", label: "SEO対策", desc: "検索順位改善の総合支援" },
            { href: "/services/aio", label: "AIO対策", desc: "AI検索への対応" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="サービスサイト制作のご相談"
          body="どんなサービスを、誰に、どのように伝えたいかをお聞きし、最適なサイト設計をご提案します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
