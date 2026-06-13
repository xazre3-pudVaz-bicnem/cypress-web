import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "採用サイト制作 | 求職者に届く採用専用Webサイト",
  description: "株式会社サイプレスの採用サイト制作。会社の働き方・文化・社員の声を伝え、質の高い応募につなげる採用専用サイトを制作します。Googleしごと検索（JobPosting構造化データ）にも対応。",
  keywords: ["採用サイト制作", "採用ホームページ", "求人サイト制作", "採用ブランディング", "JobPosting"],
  openGraph: {
    title: "採用サイト制作 | 株式会社サイプレス",
    description: "会社の働き方・文化・魅力を伝え、質の高い応募につなげる採用サイトを制作します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/web-design/recruit-site" },
};

const POINTS = [
  {
    num: "01",
    title: "会社の働き方・文化を伝えるコンテンツ",
    body: "求職者が知りたいのは待遇だけではありません。「どんな人が働いているか」「どんな雰囲気の職場か」「入社後どんな仕事をするか」といった具体的なイメージを伝えるコンテンツ設計を行います。",
  },
  {
    num: "02",
    title: "職種別のページ設計",
    body: "営業職・エンジニア職・デザイナー職など、職種ごとに異なる求職者への訴求を分けて設計します。求める人物像・仕事内容・キャリアパスを職種ごとに丁寧に伝えることで、ミスマッチを減らします。",
  },
  {
    num: "03",
    title: "社員インタビューなどのリアルな情報",
    body: "採用ページで最も閲覧率が高いのは「社員の声」です。実際に働く社員のインタビュー・入社後の成長ストーリーなど、求職者が「自分もここで働けそう」と感じられるリアルな情報を掲載します。",
  },
  {
    num: "04",
    title: "Googleしごと検索（JobPosting構造化データ）への対応",
    body: "Googleの求人検索機能「しごと検索」に表示されるためのJobPosting構造化データを実装します。Indeed等への掲載と組み合わせることで、より多くの求職者にリーチできます。",
  },
  {
    num: "05",
    title: "応募フォームの最適化",
    body: "入力項目が多すぎると応募率が下がります。必要最小限の入力で応募できるフォーム設計、エラー表示の改善、完了画面の最適化など、応募完了率を高める設計を行います。",
  },
];

const FAQ_ITEMS = [
  {
    q: "採用サイトはコーポレートサイトと別に作る必要がありますか？",
    a: "必須ではありませんが、採用ブランディングに力を入れたい場合は専用サイトが効果的です。コーポレートサイト内に採用ページを設ける方法と、独立した採用サイトを作る方法の両方に対応しています。",
  },
  {
    q: "社員インタビューの取材・ライティングも依頼できますか？",
    a: "はい。インタビューの質問設計から取材・ライティング・写真撮影のディレクションまで対応可能です。社員の魅力を引き出すインタビュー記事の制作をサポートします。",
  },
  {
    q: "求人票の更新は自社でできますか？",
    a: "はい。CMSを導入することで、新しい求人の追加・既存求人の更新・採用終了の反映を社内で行えます。操作マニュアルと研修もご提供します。",
  },
  {
    q: "Indeedや求人ボックスとの連携は可能ですか？",
    a: "JobPosting構造化データを実装することで、Googleしごと検索への表示に対応します。Indeedやその他の求人サービスとの連携についても個別にご相談ください。",
  },
  {
    q: "採用サイト制作の費用はどのくらいですか？",
    a: "採用専用サイト（3〜8ページ程度）で20〜60万円が目安です。社員インタビューコンテンツの有無・求人票のページ数・機能の複雑さによって変わります。まずはご要件をお聞かせください。",
  },
];

export default function RecruitSitePage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Recruit Site
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              採用サイト制作
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              会社の働き方・文化・魅力を求職者に届け、質の高い応募につなげる採用専用Webサイトを制作します。
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
              <li style={{ color: "#0F172A" }}>採用サイト制作</li>
            </ol>
          </div>
        </nav>

        {/* ===== Hero Image ===== */}
        <div className="relative w-full overflow-hidden" style={{ height: "360px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.png"
            alt="採用サイト制作のターゲット層・スマートフォンを使う女性"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* ===== Effects ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Why Recruit Site
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                採用サイトがもたらす効果
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                求職者の多くは、応募前に必ずWebサイトで会社を調べます。求人票に書ける情報は限られていますが、採用サイトには働き方・職場の雰囲気・社員の声・成長環境など、より深い情報を掲載できます。「この会社で働いてみたい」という気持ちを後押しするのが採用サイトの役割です。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                採用ブランディングを強化することで、応募数の増加だけでなく応募者の質も上がります。会社のビジョン・価値観に共感した人材が集まりやすくなり、採用後のミスマッチや早期離職の減少にもつながります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、JobPosting構造化データを実装することでGoogleしごと検索への表示が可能になり、求人情報を検索している層に直接リーチできます。求人サイトへの掲載費用を抑えながら採用活動を続けられる環境を構築します。
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
                採用サイト制作のポイント
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

        {/* ===== 採用サイトの設計 2-col ===== */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative overflow-hidden" style={{ height: "300px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_13_37.png"
                  alt="採用サイト制作の資料確認・設計打ち合わせ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                  Site Design
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#0F172A" }}
                >
                  採用サイトの設計
                </h2>
                <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  採用サイトは、求職者が「この会社で働きたい」と感じるまでの体験を設計するものです。職種・働き方・社員の声・選考フローを、求職者の視点から整理して配置します。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  Googleしごと検索への対応・応募フォームの最適化まで、応募率を高めるための設計を制作段階から組み込みます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="採用サイト制作 よくある質問" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス一覧" },
            { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の信頼性を伝えるサイト" },
            { href: "/recruit", label: "採用情報", desc: "サイプレスの採用情報" },
            { href: "/services/seo", label: "SEO対策", desc: "検索順位改善の総合支援" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="採用サイト制作のご相談"
          body="採用強化・採用ブランディングを目的としたWebサイト制作のご相談を承っています。現在の採用課題をお聞きし、サイト設計のご提案をします。"
        />
      </main>
      <Footer />
    </>
  );
}
