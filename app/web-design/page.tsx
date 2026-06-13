import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "ホームページ制作 | 集客に強いWebサイト制作",
  description: "株式会社サイプレスのホームページ制作サービス。デザイン・SEO・CV改善を同時に設計し、集客から問い合わせまでつながるWebサイトを制作します。コーポレートサイト・採用サイト・WordPressサイトに対応。",
  keywords: ["ホームページ制作", "Webサイト制作", "コーポレートサイト", "SEOに強いサイト", "WordPress制作", "東京"],
  openGraph: {
    title: "ホームページ制作 | 集客に強いWebサイト制作 | 株式会社サイプレス",
    description: "デザイン・SEO・CV改善を同時に設計した、集客につながるWebサイト制作。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/web-design" },
};

const SITE_TYPES = [
  {
    title: "コーポレートサイト",
    href: "/web-design/corporate-site",
    desc: "会社の信頼性・事業内容・採用情報を伝える企業サイト。SEO設計と問い合わせ導線を組み込んだ構成で制作します。",
  },
  {
    title: "採用サイト",
    href: "/web-design/recruit-site",
    desc: "求職者に会社の働き方・文化・魅力を伝える採用専用サイト。Googleしごと検索対応の構造化データにも対応します。",
  },
  {
    title: "サービスサイト",
    href: "/web-design/service-site",
    desc: "特定のサービス・商品を訴求するランディングページや専門サイト。ターゲットに届くコピーと導線を重視した設計を行います。",
  },
  {
    title: "SEOに強いサイト",
    href: "/web-design/seo-site",
    desc: "検索順位を意識したURL設計・内部リンク・構造化データ・表示速度対応を盛り込んだWebサイトを制作します。",
  },
  {
    title: "WordPressサイト",
    href: "/web-design/wordpress",
    desc: "コンテンツの継続更新に適したWordPress構成。カスタムテーマによる高品質デザインとNext.js連携（ヘッドレスCMS）にも対応します。",
  },
];

const STEPS = [
  {
    num: "01",
    title: "ヒアリング・要件定義",
    body: "事業内容・ターゲット・集客目標・競合状況・予算・納期などを丁寧にヒアリングします。何のためのサイトかを明確にしてから設計に入ります。",
  },
  {
    num: "02",
    title: "サイト設計・ワイヤーフレーム",
    body: "ページ構成・URL設計・内部リンク・コンテンツ計画をまとめます。SEOを意識したサイト構造と、ユーザーの動線を設計します。",
  },
  {
    num: "03",
    title: "デザイン",
    body: "ブランドイメージ・ターゲット・目的に合わせたビジュアルデザインを制作します。モバイルファーストで設計し、デザインカンプをご確認いただきます。",
  },
  {
    num: "04",
    title: "開発・実装",
    body: "Next.js / WordPress / Vercel構成を基本に、表示速度・アクセシビリティ・SEO対応を施しながら実装します。",
  },
  {
    num: "05",
    title: "テスト・修正",
    body: "主要ブラウザ・モバイル端末での表示確認、リンクチェック、フォーム動作確認を行います。修正対応後、最終確認を経て公開準備を完了します。",
  },
  {
    num: "06",
    title: "公開",
    body: "ドメイン設定・SSL・Googleサーチコンソール・アナリティクス設定まで対応します。公開後の初期インデックス確認も行います。",
  },
  {
    num: "07",
    title: "保守・改善",
    body: "公開後もアクセス解析・SEO改善・コンテンツ追加・セキュリティ対応など、継続的な改善をサポートします。",
  },
];

const FAQ_ITEMS = [
  {
    q: "ホームページ制作の費用はどのくらいかかりますか？",
    a: "サイトの規模・機能・デザインの複雑さによって異なります。小規模なコーポレートサイトで30万円〜、SEOを重視した設計やカスタム機能を含む場合は60〜150万円以上になるケースもあります。まずはご要件をお聞かせください。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "標準的なコーポレートサイト（5〜10ページ）で2〜3ヶ月が目安です。ページ数・機能・素材の準備状況によって前後します。お急ぎの場合はご相談ください。",
  },
  {
    q: "SEO対策はしてもらえますか？",
    a: "はい。URL設計・タイトルタグ・メタディスクリプション・内部リンク・構造化データ・表示速度最適化など、制作段階からSEOを意識した設計を行います。制作後の継続的なSEO支援にも対応しています。",
  },
  {
    q: "WordPressでの制作は可能ですか？",
    a: "可能です。更新頻度が高いサイトや、クライアント自身で記事を更新したいケースにWordPressをお勧めしています。カスタムテーマによる高品質なデザインと、使いやすい管理画面を提供します。",
  },
  {
    q: "制作後の保守・更新対応はありますか？",
    a: "あります。月額保守プランでは、テキスト修正・画像差し替え・セキュリティ対応・SEO改善提案などに対応します。更新研修・操作マニュアルの提供も行っています。",
  },
];

export default function WebDesignIndexPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Web Design
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(30px, 4.5vw, 58px)", color: "#0F172A" }}
            >
              ホームページ制作
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              集客を目的としたWebサイト制作。デザインだけでなく、SEO設計・CV改善・更新性を最初から組み込みます。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>ホームページ制作</li>
            </ol>
          </div>
        </nav>

        {/* ===== Hero Image ===== */}
        <div className="relative w-full overflow-hidden" style={{ height: "400px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 00_32_58.png"
            alt="サイプレスのWeb制作プロジェクト提案風景"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
        </div>

        {/* ===== Philosophy ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Our Approach
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#0F172A" }}
              >
                サイプレスのWeb制作の考え方
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                Webサイトの目的は、見た目を整えることではありません。「どんなキーワードで検索されて、どんな人に届いて、どんな行動をとってもらうか」という集客の流れを設計することが先にあります。デザインはその設計を伝えるための手段です。サイプレスはこの考え方を制作のすべての工程に貫いています。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                SEO設計・CV改善・更新しやすい構造は、制作が始まってから後付けするものではなく、最初の設計段階から組み込む必要があります。特にSEOは、サイト公開後に改めて対応しようとすると、URL変更やサイト構造の見直しが必要になりコストが増えます。私たちは、ヒアリングの段階からSEOと集客の観点を持ち込み、制作と施策が一体になったサイトを届けます。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Site Types ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Site Types
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#0F172A" }}
              >
                制作できるサイトの種類
              </h2>
            </div>
            <div>
              {SITE_TYPES.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="group block py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div className="grid md:grid-cols-[280px_1fr_auto] gap-4 md:gap-8 items-start">
                    <h3 className="font-bold text-[17px] group-hover:underline" style={{ color: "#0F172A" }}>
                      {type.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                      {type.desc}
                    </p>
                    <span className="text-[13px] font-medium shrink-0" style={{ color: "#6B7280" }}>
                      詳しく見る →
                    </span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== Process ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Process
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#0F172A" }}
              >
                制作の進め方
              </h2>
            </div>
            <div>
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  className="grid md:grid-cols-[80px_200px_1fr] gap-4 md:gap-8 py-8"
                  style={{ borderTop: "1px solid #F0EDE6" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{step.num}</span>
                  <h3 className="font-bold text-[15px]" style={{ color: "#0F172A" }}>{step.title}</h3>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{step.body}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #F0EDE6" }} />
            </div>
          </div>
        </section>

        {/* ===== 制作の考え方 2-col ===== */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative overflow-hidden" style={{ height: "320px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                  alt="サイプレスの制作環境・ラップトップとデスク"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                  Our Philosophy
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-6"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)", color: "#0F172A" }}
                >
                  制作の考え方
                </h2>
                <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  サイプレスのWeb制作は、デザインから始まりません。「何のためのサイトか」「誰に届けるか」「どんな行動を促すか」を明確にしてから、設計・デザイン・開発へと進みます。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  SEO設計・CV導線・更新のしやすさは、制作が始まってから付け足すものではなく、最初の段階から組み込みます。ヒアリングの質が、サイトの成果を決めます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="ホームページ制作 よくある質問" bgColor="#F9F8F5" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "会社の信頼性を伝える企業サイト" },
            { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "検索流入を意識したサイト設計" },
            { href: "/services/web-design", label: "Web制作サービス概要", desc: "サービス詳細・料金について" },
            { href: "/services/seo", label: "SEO対策", desc: "検索順位改善の総合支援" },
            { href: "/services/aio", label: "AIO対策", desc: "AI検索への対応" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="ホームページ制作のご相談"
          body="集客につながるWebサイトの制作をご検討の方は、まずはお気軽にご相談ください。現状の課題と目標をお聞きしたうえで、最適な制作プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
