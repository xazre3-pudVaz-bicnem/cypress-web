import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ローカルSEOとは｜地域名での検索上位表示・地域集客の強化｜株式会社サイプレス",
  description:
    "ローカルSEOの基礎から実践まで解説。地域名キーワードでの上位表示方法、エリアページ設計、地域特化コンテンツの作り方、LocalBusiness構造化データの実装まで体系的に解説。",
  keywords: ["ローカルSEO", "地域SEO", "地域集客", "エリアSEO", "地域名キーワード", "LocalBusiness"],
  openGraph: {
    title: "ローカルSEOとは｜地域名での検索上位表示・地域集客の強化｜株式会社サイプレス",
    description: "ローカルSEOの実践ガイド。地域名キーワードでの上位表示からMEO対策との連携まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/local-seo" },
};

const faqItems = [
  {
    q: "ローカルSEOとMEOの違いは何ですか？",
    a: "ローカルSEOはWebサイトのSEO施策として地域名キーワードで上位表示を狙う対策で、エリアページ制作・地域特化コンテンツ・LocalBusiness構造化データなどが含まれます。MEO（Map Engine Optimization）はGoogleマップでの上位表示を目指す対策で、Googleビジネスプロフィールの最適化・口コミ管理が中心です。両方を組み合わせることで地域集客の相乗効果が生まれます。",
  },
  {
    q: "エリアページはどのように作ればSEO効果がありますか？",
    a: "単に地域名を入れ替えた薄いコンテンツは逆効果です。各エリアページには、その地域固有の情報（地域の特徴・アクセス情報・その地域での実績・地域特有の課題への言及）を含めることが重要です。また地域名を含む見出し・地域特化FAQ・LocalBusiness構造化データ・Googleマップ埋め込みも実装します。",
  },
  {
    q: "複数地域をターゲットにする場合のページ設計は？",
    a: "対応エリアごとに専用のランディングページ（エリアページ）を作成します。親ページで都道府県全体をカバーし、子ページで区・市単位の詳細情報を提供するサイロ構造が有効です。例えば「/area/tokyo」→「/area/katsushika」のような階層設計です。",
  },
  {
    q: "LocalBusiness構造化データとは何ですか？",
    a: "Schema.orgのLocalBusiness（またはその派生型：Restaurant・MedicalClinic等）のJSON-LD構造化データです。会社名・住所・電話番号・営業時間・エリアサービングなどを記述します。Googleに地域ビジネスとして正確に認識させるために重要で、ローカルパック表示にも影響します。",
  },
  {
    q: "「〇〇 近く」「近くの〇〇」というキーワードにも対応できますか？",
    a: "「近く」系のキーワードはユーザーの現在地を基準にしたモバイル検索が多く、主にMEO（Googleビジネスプロフィールの最適化）で対応します。「〇〇市 〇〇」形式の地域名キーワードはローカルSEOで対策可能です。モバイルユーザーへのリーチを最大化するにはMEOとローカルSEOの両方が必要です。",
  },
  {
    q: "地域特化コンテンツの例を教えてください。",
    a: "「葛飾区でSEO対策を依頼するときの注意点」「東京都内のWeb制作会社の選び方」など、その地域のターゲット読者が共感できる具体的な内容が効果的です。地域の統計データ・地元の事情に言及・地域の季節性や特性を反映させることで独自性が生まれます。",
  },
  {
    q: "ローカルSEOの効果が出るまでどのくらいかかりますか？",
    a: "競合が少ない地方エリアでは2〜4ヶ月で成果が出やすく、東京23区などの競合が多いエリアでは6〜12ヶ月かかることが多いです。エリアページを作成してすぐに上位に来ることは少なく、内部リンクの充実・コンテンツの更新・他ページからのリンクが積み重なることで徐々に評価が高まります。",
  },
  {
    q: "ローカルSEOとMEOを同時に依頼できますか？",
    a: "はい、サイプレスではWebサイトのローカルSEO対策とGoogleビジネスプロフィールのMEO対策を一括でご支援しています。同じチームで一貫して取り組むことで施策の一貫性と費用対効果が高まります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の対策" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "地域名キーワードの選定方法" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "地域特化コンテンツの制作" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "LocalBusiness Schema設定" },
  { href: "/area/tokyo", label: "東京のSEO対策", desc: "東京エリア特化のSEO支援" },
  { href: "/area/katsushika", label: "葛飾区のSEO対策", desc: "葛飾区エリアのSEO支援" },
  { href: "/industries/restaurant", label: "飲食店のSEO対策", desc: "飲食業界の地域集客SEO" },
  { href: "/industries/clinic", label: "クリニックのSEO対策", desc: "医療機関の地域集客SEO" },
  { href: "/knowledge/local-seo", label: "ローカルSEO基礎", desc: "地域SEOの入門ガイド" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "ローカルSEOの料金目安" },
];

export default function LocalSeoPage() {
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
              <span style={{ color: "#0F172A" }}>ローカルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Local SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ローカルSEO
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ローカルSEOとは、「葛飾区 Web制作」「東京 SEO対策」など地域名を含むキーワードでの検索上位表示を目指す施策です。地域密着型ビジネスにとって、エリアページの設計・地域特化コンテンツ・LocalBusiness構造化データが重要な武器となります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEO対策（Googleビジネスプロフィール）と組み合わせることで、地域名検索での露出を最大化できます。Webサイトからの流入とGoogleマップからの誘導を両立する地域集客戦略を設計します。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="ローカルSEO・地域名キーワードでの上位表示イメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* ローカルSEO未対応の影響 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Local SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ローカルSEO未対応が地域ビジネスに与える4つの影響
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "地域名キーワードで表示されない", b: "「○○市 税理士」「渋谷 整骨院」など地域名を含む検索でWebサイトが上位表示されなければ、地元ユーザーからの問い合わせ機会がゼロになります。地域特化のコンテンツ設計が集客の鍵です。" },
                { t: "地元競合に検索流入を奪われ続ける", b: "地域キーワードでの上位表示は競合との椅子取りゲームです。SEO対策をしている地元競合が上位を占めている間、すべての検索需要が競合へ流れ続けます。" },
                { t: "広告なしでの地域集客がゼロになる", b: "ローカルSEOが機能していないと、地元からの無料集客チャンネルがなくなります。リスティング広告費が永遠にかかり続け、広告を止めたとたん集客がゼロになります。" },
                { t: "MEOとSEOの相乗効果が得られない", b: "Googleマップ（MEO）と検索（SEO）の両方で上位表示されると集客力が倍増します。ローカルSEO未対応のままではこの相乗効果が得られず、競合との差が広がります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ローカルSEOの主要施策 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Tactics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ローカルSEOの主要施策
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "エリアページの制作・充実", body: "対応エリア（都市・区市町村）ごとに専用ページを作成します。単なる地域名の羅列ではなく、その地域の特性・アクセス情報・地域特有の課題への言及など、そのエリアならではのコンテンツを含めることが検索評価のポイントです。" },
                { title: "地域名+業種キーワードの最適化", body: "「地域名 + 業種」「地域名 + サービス」のキーワードに向けてページタイトル・H1・H2・本文・メタディスクリプションを最適化します。地域名は自然な形で複数回登場するよう設計します。" },
                { title: "LocalBusiness構造化データの実装", body: "JSON-LD形式でLocalBusiness（またはRestaurant・Clinic等）を実装します。会社名・住所・電話番号・営業時間・対応エリアを記述し、Googleに地域ビジネスとして認識させます。ローカルパック表示の可能性が高まります。" },
                { title: "Googleマップ埋め込み", body: "サービスページ・コンタクトページ・エリアページにGoogleマップを埋め込みます。ユーザーの利便性向上と同時に、Googleに地域ビジネスとして認識させる効果があります。" },
                { title: "地域特化コンテンツの制作", body: "「〇〇区でSEO対策を選ぶポイント」「〇〇市の飲食店が地域集客で成功するには」など、特定地域の読者が共感できるコンテンツを作ります。地域の固有名詞・地元の事情に言及することが差別化の鍵です。" },
                { title: "MEO対策との連携", body: "WebサイトのローカルページへのリンクをGoogleビジネスプロフィールの「Webサイト」欄に設定。エリアページの情報とビジネスプロフィールの情報を一致させることで、Googleへの信頼性が高まります。" },
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

        {/* 対応エリア */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Areas</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのSEO対応エリア
            </h2>
            <p className="text-[15px] leading-[1.9] mb-8 max-w-2xl" style={{ color: "#374151" }}>
              サイプレスは東京都葛飾区を拠点に、東京・千葉・埼玉・神奈川のローカルSEO対策をリモートで支援しています。全国のビジネスにも対応しています。
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/area/tokyo", label: "東京都" },
                { href: "/area/katsushika", label: "葛飾区" },
                { href: "/area/adachi", label: "足立区" },
                { href: "/area/edogawa", label: "江戸川区" },
                { href: "/area/sumida", label: "墨田区" },
                { href: "/area/chiba", label: "千葉県" },
                { href: "/area/saitama", label: "埼玉県" },
                { href: "/area/kanagawa", label: "神奈川県" },
                { href: "/area/nationwide", label: "全国（リモート）" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="px-4 py-2 text-[13px] font-medium rounded transition-colors" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC", color: "#374151" }}>
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ローカルSEOについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ローカルSEO・地域集客のご相談"
          body="地域名キーワードでの上位表示を目指した戦略設計と施策実施をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
