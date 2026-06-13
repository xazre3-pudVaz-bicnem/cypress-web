import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO対策｜Googleマップ上位表示で地域集客を強化｜株式会社サイプレス",
  description:
    "Googleマップ・ローカル検索での上位表示を実現するMEO対策。Googleビジネスプロフィールの最適化から口コミ管理・競合調査まで、地域密着型の集客支援を提供します。",
  keywords: ["MEO対策", "Googleマップ集客", "Googleビジネスプロフィール", "ローカルSEO", "地域集客"],
  openGraph: {
    title: "MEO対策｜Googleマップ上位表示で地域集客を強化｜株式会社サイプレス",
    description:
      "Googleマップ・ローカル検索での上位表示を実現するMEO対策。Googleビジネスプロフィールの最適化から口コミ管理・競合調査まで一気通貫で支援します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/services/meo" },
};

const faqItems = [
  {
    q: "MEO対策の効果が出るまでどれくらいかかりますか？",
    a: "Googleビジネスプロフィールの最適化や情報の正確化は着手後すぐに反映されますが、検索順位が安定して上昇するまでには通常1〜3ヶ月程度かかります。口コミ数の増加や定期的な投稿継続など、継続的な取り組みが順位向上に直結します。",
  },
  {
    q: "Googleビジネスプロフィールは自分で登録しているのですが、それでも改善できますか？",
    a: "はい、登録済みのアカウントへのアクセス権を共有いただくことで支援可能です。すでに登録されているお店も、カテゴリ設定・説明文・写真・サービス情報などを最適化することで大幅に表示順位が改善するケースが多くあります。",
  },
  {
    q: "口コミを増やす方法はありますか？",
    a: "お客様に自然な形でGoogleレビューを依頼する導線設計（POPやQRコード、LINEメッセージなど）をご提案しています。口コミの強制・購入は規約違反となるため、適切な方法でリアルな口コミを増やすお手伝いをしています。",
  },
  {
    q: "MEO対策とSEO対策は何が違いますか？",
    a: "MEO（Map Engine Optimization）はGoogleマップ・ローカル検索での上位表示を目的とした施策で、主にGoogleビジネスプロフィールの最適化が中心です。SEOはWebサイト全体のオーガニック検索順位を高める施策です。地域ビジネスではMEOとSEOを組み合わせることで相乗効果が得られます。",
  },
  {
    q: "複数店舗を持っていますが、対応できますか？",
    a: "はい、複数店舗への対応も可能です。各店舗のGoogleビジネスプロフィールをそれぞれ最適化し、NAP情報（名前・住所・電話番号）の統一も含めて管理します。店舗数に応じた料金プランをご提案しています。",
  },
  {
    q: "MEO対策の費用はどれくらいですか？",
    a: "業種・エリアの競合状況・店舗数によって異なります。まずは現状分析を行ったうえで、費用対効果の見込める施策内容をご提案しています。お気軽にお問い合わせください。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策トップ", desc: "MEO対策の全体概要" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化の詳細" },
  { href: "/meo/review-management", label: "口コミ管理・返信", desc: "口コミ対策の方法" },
  { href: "/meo/ranking", label: "MEO順位計測", desc: "順位確認・競合調査" },
  { href: "/services/seo", label: "SEO対策", desc: "自然検索での上位表示" },
  { href: "/services/sns", label: "SNS運用", desc: "SNSと連動した集客" },
];

export default function MeoServicePage() {
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
              <span style={{ color: "#374151" }}>MEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#0F172A" }}>
              MEO対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              「近くの〇〇」でGoogleマップに表示されるかどうかが、地域ビジネスの集客を左右する時代です。Googleビジネスプロフィールの最適化から口コミ管理・競合調査まで、地域密着型の集客を継続的に支援します。
            </p>
          </div>
        </section>

        {/* MEO対策とは */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>About</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>MEO対策とは</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  MEO（Map Engine Optimization）とは、GoogleマップやGoogleのローカル検索結果で上位表示を獲得するための最適化施策です。「渋谷 美容室」「新宿 整体」のように地域名＋業種で検索したとき、地図の下に表示される「ローカルパック」と呼ばれる枠への掲載がMEOの主な目標です。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  Googleマップは現在、店舗への来店動機として非常に強力な集客チャネルになっています。スマートフォンの普及により「今いる場所の近くで〇〇を探す」という行動が日常化し、Googleマップを起点にした来店・予約・問い合わせが急増しています。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  MEO対策の中心となるのが「Googleビジネスプロフィール（旧Googleマイビジネス）」の最適化です。Googleが無料で提供しているこのプラットフォームを適切に整備・運用することが、ローカル検索での上位表示に直結します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  単に情報を登録するだけでなく、カテゴリの正確な設定・高品質な写真の定期投稿・口コミへの丁寧な返信・最新情報の発信といった継続的な運用が、競合との差別化と順位向上に不可欠です。サイプレスはこれらをトータルで支援します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* こんな課題に対応します */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Challenges</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>こんな課題に対応します</h2>
            <div className="max-w-3xl">
              {[
                { num: "01", title: "Googleマップに表示されない・順位が低い", body: "競合店より下位に表示される、または検索結果に出てこない。ビジネスプロフィールの最適化が不十分なケースがほとんどです。" },
                { num: "02", title: "口コミが少ない・悪い口コミに対応できていない", body: "口コミの件数と評価スコアは検索順位に直接影響します。口コミを増やす導線設計と、ネガティブな口コミへの適切な返信が必要です。" },
                { num: "03", title: "写真が古い・魅力が伝わっていない", body: "Googleマップの写真は来店判断に大きく影響します。定期的に新鮮な写真を投稿し、店内・商品・スタッフの魅力を最新の状態に保つ必要があります。" },
                { num: "04", title: "住所・電話番号・営業時間などの情報が不正確", body: "NAP情報（名前・住所・電話番号）の不一致はGoogleからの信頼度を下げます。Web上のあらゆる媒体で情報を統一することが重要です。" },
                { num: "05", title: "競合他社のMEO対策が進んでいて差をつけられている", body: "競合が積極的にMEO対策を実施している場合、放置すると差は広がるばかりです。競合分析をもとに的確な差別化戦略を立てる必要があります。" },
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

        {/* サイプレスのMEO支援内容 */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Services</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>サイプレスのMEO支援内容</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "Googleビジネスプロフィール最適化", body: "カテゴリ選定・説明文の作成・サービス情報の整備・ビジネス属性の設定など、Googleが重要視する項目を徹底的に最適化します。適切なカテゴリ設定だけで表示回数が大幅に改善するケースも少なくありません。" },
                { title: "写真の定期投稿・最新情報投稿", body: "Googleビジネスプロフィールへの写真投稿や「最新情報（投稿）」の定期更新を代行します。アクティブに更新されているアカウントはGoogleから高く評価され、順位向上に寄与します。" },
                { title: "口コミ返信・口コミ獲得導線設計", body: "すべての口コミに対して丁寧かつ的確な返信を行います。また、お客様が自然に口コミを書きたくなる導線（QRコード・POP・LINE誘導など）を設計し、リアルな口コミ数の増加を支援します。" },
                { title: "NAP情報統一（名前・住所・電話番号）", body: "ホームページ・SNS・各種ポータルサイトに掲載されているNAP情報を調査し、Googleビジネスプロフィールと完全に一致するよう整合性を確保します。情報の矛盾はローカル検索での信頼性低下につながります。" },
                { title: "競合調査・順位計測", body: "定期的に競合のGoogleビジネスプロフィールを分析し、自店との差異を把握します。ターゲットキーワードでの順位計測も行い、施策の効果と改善方針を数値で管理します。" },
                { title: "Webサイトとの連携設計", body: "GoogleビジネスプロフィールとWebサイトは相互に影響します。サイト内にLocalBusiness構造化データを実装し、Googleからの信頼性を高める連携設計を行います。" },
                { title: "ローカルSEOとの組み合わせ", body: "地域名を含むキーワードでのオーガニック検索上位表示（ローカルSEO）と組み合わせることで、Googleマップと通常検索の両方から集客できる体制を構築します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Industries</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-8" style={{ color: "#0F172A" }}>対応業種</h2>
            <p className="text-[15px] leading-[1.9] mb-8 max-w-2xl" style={{ color: "#374151" }}>
              地域に根ざしたあらゆる業種に対応しています。業種ごとの検索傾向・競合状況に合わせた最適化を行います。
            </p>
            <div className="flex flex-wrap gap-3">
              {["飲食店・カフェ", "美容室・ヘアサロン", "医療・クリニック", "歯科医院", "士業（弁護士・税理士）", "整体・整骨院", "ネイルサロン・エステ", "建設業・リフォーム", "不動産", "小売店", "教育・学習塾", "フィットネス・ジム"].map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 text-[13px]"
                  style={{ border: "1px solid #E8E4DC", color: "#374151" }}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO対策についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="MEO対策のご相談・無料診断"
          body="現在のGoogleビジネスプロフィールの状況を確認し、改善ポイントをご提案します。Googleマップからの集客を強化したい方は、まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
