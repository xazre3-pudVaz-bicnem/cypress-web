import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ホームページ制作｜SEO・集客・成果にこだわったWeb制作｜株式会社サイプレス",
  description:
    "見た目だけでなく集客・SEO・CV改善を同時に設計するホームページ制作。コーポレートサイト・サービスサイト・採用サイトをNext.js/WordPressで高速・高品質に制作します。",
  keywords: ["ホームページ制作", "Web制作", "コーポレートサイト", "SEOに強いサイト", "Next.js制作", "WordPress制作"],
  openGraph: {
    title: "ホームページ制作｜SEO・集客・成果にこだわったWeb制作｜株式会社サイプレス",
    description:
      "集客・SEO・CV改善を同時に設計するホームページ制作。コーポレートサイト・サービスサイト・採用サイトを高速・高品質に制作します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/services/web-design" },
};

const faqItems = [
  {
    q: "制作費用はどれくらいかかりますか？",
    a: "サイトの規模・機能・デザインの複雑さによって異なります。小規模なサービスサイトで50〜100万円程度、コーポレートサイトで100〜300万円程度を目安にしていただいています。まずはご要件をお聞きした上で詳細なお見積りをご提案します。",
  },
  {
    q: "公開後の更新・保守はお願いできますか？",
    a: "はい、公開後の保守・更新・改善サポートを月次契約でご提供しています。SEO改善・コンテンツ追加・デザイン変更・機能追加など、継続的なサイト改善をサポートします。",
  },
  {
    q: "WordPressとNext.jsのどちらで作るべきですか？",
    a: "コンテンツの更新頻度・必要な機能・表示速度の要件・予算によって最適な選択肢が異なります。ブログや更新が多いサイトはWordPress、高速性・SEO・AIO対応を重視する場合はNext.js/Vercelの構成をお勧めするケースが多いです。ご相談の上で最適な技術構成をご提案します。",
  },
  {
    q: "SEO対策も同時に依頼できますか？",
    a: "はい、サイプレスではWeb制作とSEO対策を一体として設計・実装します。キーワード設計・内部SEO・構造化データ・Core Web Vitals対応・コンテンツ設計まで、集客を見据えたサイト構築が標準です。",
  },
  {
    q: "制作期間はどれくらいかかりますか？",
    a: "小規模サイトで1〜2ヶ月、コーポレートサイトで2〜4ヶ月が目安です。ヒアリング・設計・デザイン確認・開発・テストの各フェーズを経て公開します。ご要件や素材のご準備状況によって変わりますので、詳しくはご相談ください。",
  },
  {
    q: "既存サイトのリニューアルにも対応していますか？",
    a: "はい、既存サイトのリニューアルも多数対応しています。現状サイトのSEO・速度・CV率の課題を分析し、改善を目的としたリニューアルをご提案します。URLの変更がある場合のリダイレクト設計・SEO引き継ぎも対応します。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "ホームページ制作トップ", desc: "Web制作の全体概要" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト", desc: "会社案内サイト制作" },
  { href: "/web-design/seo-site", label: "SEOに強いサイト制作", desc: "集客重視のサイト設計" },
  { href: "/services/seo", label: "SEO対策", desc: "自然検索での上位表示" },
  { href: "/services/aio", label: "AIO対策", desc: "AI検索への対応" },
];

export default function WebDesignServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A]">ホーム</Link>
              <span>/</span>
              <Link href="/business" className="hover:text-[#0F172A]">事業内容</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>ホームページ制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#0F172A" }}>
              ホームページ制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              「見た目がきれい」だけのサイトでは集客できません。サイプレスはSEO・AIO・CV設計を最初から組み込んだ、成果にこだわったホームページ制作を行います。公開して終わりではなく、改善し続けるサイトを作ります。
            </p>
          </div>
        </section>

        {/* Visual section */}
        <section className="relative" style={{ height: "400px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 00_32_58.png"
            alt="ラップトップと資料を前に打ち合わせする2人 — Web制作の提案・ヒアリングシーン"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.15)" }} />
        </section>

        {/* ホームページ制作の考え方 */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Philosophy</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>ホームページ制作の考え方</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  多くの企業がホームページを持っていますが、「検索されない」「見てもらえない」「問い合わせにつながらない」という課題を抱えています。デザインだけに投資して、集客・CV設計が後回しになっているケースが非常に多くあります。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  サイプレスが考えるホームページ制作は、デザインとマーケティングを分離しません。キーワード設計・サイト構造・コンテンツ設計・問い合わせ導線・SEO実装をすべて最初の設計段階から組み込みます。美しいサイトと成果が出るサイトは両立できます。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  技術面においても、表示速度・モバイル最適化・Core Web Vitals対応を最初から設計に組み込みます。Next.jsによるSSG/ISR構成やVercelによる高速配信、適切な画像最適化により、Googleが重視するパフォーマンス指標を高水準で維持します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  さらに、AI検索（AIO）への対応も標準実装します。構造化データの実装・E-E-A-T強化・FAQ設計により、ChatGPT・GeminiなどのAIに自社情報が正しく認識・引用されるサイトを構築します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある課題 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Challenges</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>よくある課題</h2>
            <div className="max-w-3xl">
              {[
                { num: "01", title: "サイトはあるが検索からの問い合わせがほとんどない", body: "制作会社に依頼してサイトを作ったが、SEO設計がされておらず検索流入がゼロに近い状態。デザインの見直しよりも、SEO観点での設計・コンテンツ改善が先決です。" },
                { num: "02", title: "サイトが古く、スマートフォンで見づらい", body: "5〜10年前に作ったサイトがスマートフォン非対応、またはレスポンシブ対応が不十分なケース。Googleはモバイルファーストでサイトを評価するため、モバイル最適化は集客に直結します。" },
                { num: "03", title: "表示が遅くて直帰率が高い", body: "ページの表示速度が遅いことで、訪問者がすぐに離脱してしまう状態。Googleの調査では表示速度が1秒から3秒に落ちると直帰率が32%増加するとされています。" },
                { num: "04", title: "問い合わせフォームはあるが、問い合わせが来ない", body: "サイトに問い合わせフォームはあるが、ユーザーの行動を誘導できていない状態。CTA設計・信頼要素の配置・フォームの入力ハードルの見直しが必要です。" },
                { num: "05", title: "採用ページが弱く、求職者に響いていない", body: "採用情報ページが会社概要の羅列に過ぎず、企業文化・仕事のやりがい・成長環境が伝わっていない状態。採用サイトは候補者が最初に触れるブランド体験です。" },
              ].map((item) => (
                <div key={item.num} style={{ borderTop: "1px solid #E8E4DC" }} className="py-6 flex gap-6">
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 支援内容 */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Services</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>サイプレスの制作支援内容</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "コーポレートサイト制作", body: "会社の信頼性・ブランド価値を伝えるコーポレートサイトを制作します。採用・IR・プレスリリース・お問い合わせなど、企業活動を支える機能を組み込みながら、SEO・AIO対応を標準実装します。" },
                { title: "採用サイト制作", body: "求職者が「ここで働きたい」と感じる採用サイトを制作します。企業文化・社員インタビュー・職場環境の発信を通じて、採用コスト削減と採用品質向上を同時に実現します。" },
                { title: "サービスサイト制作", body: "特定のサービスに特化したランディングページ・サービスサイトを制作します。ターゲットキーワードでの検索上位表示を念頭に置いたコンテンツ設計と、問い合わせ・資料請求への導線を重視します。" },
                { title: "SEOに強いサイト設計", body: "キーワード調査・サイト構造設計・内部リンク設計・構造化データ実装をWeb制作と同時に行います。公開時点からSEOに強い状態でスタートできます。" },
                { title: "WordPress連携・ヘッドレス構成", body: "コンテンツ管理の容易さを優先する場合はWordPressをCMSとして活用し、表示速度はNext.jsで担うヘッドレス構成も対応します。更新しやすさとパフォーマンスを両立します。" },
                { title: "Next.js / Vercel高速構成", body: "最高水準の表示速度を実現するNext.jsとVercelの組み合わせで制作します。SSG/ISRによる高速化・CDNによるグローバル配信で、Core Web Vitals全項目の高スコアを標準で達成します。" },
                { title: "スマートフォン最適化・Core Web Vitals対応", body: "スマートフォンを優先したモバイルファーストデザインで制作します。LCP・CLS・FIDのCore Web Vitals指標を計測・最適化し、Googleからの評価とユーザー体験を両立します。" },
                { title: "問い合わせ導線設計", body: "ページのどの地点でもCTAに自然にたどり着けるよう、訪問者の視線と行動フローを設計します。フォームの入力項目の最小化・信頼要素の配置・離脱防止設計で問い合わせ率を最大化します。" },
                { title: "公開後の保守・改善サポート", body: "Webサイトは公開して終わりではありません。アクセス解析・検索順位モニタリング・A/Bテスト・コンテンツ追加など、継続的な改善サポートを月次契約でご提供しています。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 制作の流れ */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Process</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>制作の流れ</h2>
            <div className="max-w-3xl">
              {[
                { step: "Step 01", title: "ヒアリング・現状分析", body: "事業内容・ターゲット・競合・課題・目標数値をヒアリングします。現状サイトがある場合は、SEO・速度・CV率の課題を分析します。" },
                { step: "Step 02", title: "戦略・設計", body: "キーワード設計・サイトマップ・ページ構成・機能要件・技術構成を決定します。集客からCVまでの動線をこの段階で設計します。" },
                { step: "Step 03", title: "デザイン", body: "ブランドコンセプト・トーン&マナーに基づいたデザインカンプを制作します。PCとスマートフォンの両方でご確認いただきます。" },
                { step: "Step 04", title: "開発・実装", body: "承認いただいたデザインをもとにコーディング・CMS実装・SEO実装・構造化データ実装を行います。" },
                { step: "Step 05", title: "テスト・検証", body: "表示速度・クロスブラウザ・スマートフォン・フォーム動作・SEO設定・アクセス解析タグの動作確認を徹底的に行います。" },
                { step: "Step 06", title: "公開", body: "ドメイン設定・サーバー移行・SSL設定・Googleサーチコンソール設定など、公開に必要なすべての作業を対応します。" },
                { step: "Step 07", title: "改善・保守", body: "公開後もアクセス解析・SEO順位モニタリング・コンバージョン改善を継続します。サイトを育て続けることで成果を最大化します。" },
              ].map((item) => (
                <div key={item.step} style={{ borderTop: "1px solid #E8E4DC" }} className="py-6 flex gap-6">
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase shrink-0 mt-1 w-16" style={{ color: "#9CA3AF" }}>{item.step}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 制作の進め方・ビジュアル 2-col */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                  alt="ラップトップ・デスク・観葉植物のある落ち着いた作業環境 — Web制作の現場"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Approach</p>
                <h2 className="font-black text-[22px] md:text-[26px] mb-5" style={{ color: "#0F172A" }}>成果から逆算して、サイトを設計する</h2>
                <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  サイプレスのWeb制作は、「どんなサイトを作るか」より「どんな成果を出すか」から考えます。問い合わせ数・採用応募数・ECの売上など、クライアントが本当に必要としている数値を定義し、そこから逆算してデザイン・コンテンツ・技術構成を決定します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  デザインの美しさと、集客・CV設計は両立できます。見た目の洗練と、Googleに評価される内部構造と、ユーザーが自然に問い合わせたくなる導線を、ひとつのサイトに統合して納品します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ホームページ制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ホームページ制作のご相談"
          body="新規制作・リニューアル・集客改善など、Webサイトに関するお悩みをお聞かせください。現状分析のうえで、最適な制作プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
