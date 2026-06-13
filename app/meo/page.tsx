import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO対策とは｜Googleマップ上位表示の完全ガイド｜株式会社サイプレス",
  description:
    "MEO対策（マップエンジン最適化）の基礎から実践まで。Googleビジネスプロフィール最適化・口コミ対策・順位改善・店舗集客を体系的に解説。地域ビジネスの集客に最もROIが高い施策です。",
  keywords: ["MEOとは", "MEO対策とは", "MEO基礎", "Googleマップ対策", "ローカル検索対策"],
  openGraph: {
    title: "MEO対策とは｜Googleマップ上位表示の完全ガイド｜株式会社サイプレス",
    description: "MEO対策の基礎から実践まで体系的に解説。地域ビジネスの集客に最もROIが高い施策。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo" },
};

const subPages = [
  {
    href: "/meo/google-business-profile",
    label: "Googleビジネスプロフィール最適化",
    desc: "MEO対策の根幹。カテゴリ・写真・投稿・Q&Aを徹底最適化し、Googleマップでの露出を最大化する方法。",
  },
  {
    href: "/meo/review-management",
    label: "口コミ対策・口コミ管理",
    desc: "自然に高評価口コミを増やす仕組みの構築から、ネガティブ口コミへの対応まで網羅的に解説。",
  },
  {
    href: "/meo/ranking",
    label: "MEO順位改善",
    desc: "Googleマップのローカルパック（上位3件）に表示されるための、具体的な順位改善施策。",
  },
  {
    href: "/meo/store-marketing",
    label: "店舗集客・来店導線設計",
    desc: "MEOの上位表示を実際の来店・予約・問い合わせに転換するための導線設計と施策。",
  },
  {
    href: "/meo/local-keyword",
    label: "地域キーワード設計",
    desc: "市区町村名・駅名×業種の組み合わせキーワードを戦略的に設計し、地域集客を最大化する方法。",
  },
];

const faqItems = [
  {
    q: "MEO対策とSEO対策の違いは何ですか？",
    a: "SEO対策がGoogle検索のオーガニック結果での順位改善を目的とするのに対し、MEO対策はGoogleマップ（ローカルパック）での表示順位改善を目的とします。地域ビジネスにとってはMEOのほうが来店直前の検索行動に直結するため、ROIが高いケースが多いです。両方を組み合わせることで相乗効果が生まれます。",
  },
  {
    q: "MEO対策の効果が出るまでどのくらいかかりますか？",
    a: "競合状況・エリア・業種によって異なりますが、Googleビジネスプロフィールの基本最適化は2〜4週間で効果が現れることがあります。安定した上位表示には3〜6ヶ月の継続的な取り組みが必要です。口コミ獲得・投稿継続・情報更新を組み合わせることで改善が加速します。",
  },
  {
    q: "MEO対策は自分でできますか？",
    a: "Googleビジネスプロフィールの基本設定は自分で行えます。ただし、競合分析・キーワード設計・口コミ獲得の仕組み化・継続的な最適化は専門知識と時間が必要です。競合が多い都市部や業種では、専門家のサポートが成果を大幅に加速させます。",
  },
  {
    q: "飲食店以外でもMEO対策は有効ですか？",
    a: "はい、MEO対策はGoogleマップで検索される業種すべてに有効です。美容室・整骨院・歯科・クリニック・不動産・リフォーム・士業・小売店など、地域に根差したビジネスであれば業種を問わず高い効果が期待できます。",
  },
  {
    q: "複数の店舗がある場合、まとめて対応できますか？",
    a: "はい、複数店舗の一括管理に対応しています。Googleビジネスプロフィールマネージャーを活用した多店舗管理と、店舗ごとの個別最適化を組み合わせて対応します。規模に応じた多店舗プランをご用意しています。",
  },
];

export default function MeoIndexPage() {
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
              <span style={{ color: "#0F172A" }}>MEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Map Engine Optimization
            </p>
            <h1 className="font-black text-[40px] md:text-[56px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              MEO対策とは
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEO（マップエンジン最適化）とは、Googleマップやローカル検索でビジネスの表示順位を改善し、
              地域の見込み客からの来店・問い合わせを増やす施策です。
              「渋谷　美容室」「新宿　歯科」のように地域名と業種を組み合わせた検索で上位表示されることで、
              購買意欲の高いユーザーに直接リーチできます。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "400px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="MEO対策・Googleマップ集客のデジタル戦略" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.1)" }} />
        </section>

        {/* MEO対策とは */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is MEO
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              MEO対策とは何か
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                MEOとは「Map Engine Optimization（マップエンジン最適化）」の略称で、Googleマップ上での
                ビジネスの表示順位・露出を改善するための一連の施策を指します。Googleで地域名＋業種・サービス名を
                検索すると、通常の検索結果（オーガニック）より上部に地図と店舗情報が3件表示される「ローカルパック」
                と呼ばれる枠が表示されます。このローカルパックに自社を表示させることがMEO対策の核心的な目標です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                MEO対策の土台となるのがGoogleビジネスプロフィール（旧Googleマイビジネス）です。
                Googleが無料で提供するこのツールには、ビジネス名・住所・電話番号・営業時間・写真・サービス内容
                などを登録でき、適切に最適化することでGoogleマップとGoogle検索の両方で情報が表示されます。
                多くの企業が最低限の情報しか登録しておらず、徹底的に最適化するだけで大きな差別化が可能です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                MEO対策の効果は直接的です。Googleの調査によると、「近くの〇〇」という検索を行ったユーザーの
                76%が24時間以内に来店しています。また、スマートフォンでの地域検索は年々増加しており、
                「今すぐ必要」という購買意欲の高いユーザーが来店直前に使う手段がGoogleマップです。
                この瞬間に上位表示されることは、コンバージョン率の面でも他のデジタルマーケティング手法を大きく上回ります。
              </p>
            </div>
          </div>
        </section>

        {/* なぜ今MEO対策が重要か */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why Now
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              なぜ今MEO対策が重要なのか
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                スマートフォンの普及により、「今いる場所から近くのお店を探す」という検索行動が急速に拡大しています。
                Googleの発表によれば、「near me（近く）」を含むモバイル検索は過去数年で500%以上増加しており、
                この傾向は現在も継続しています。位置情報と連動したGoogleマップ検索は、外出先での即時来店決定
                という最も購買意欲が高い瞬間に機能します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、AI検索の台頭によって地域ビジネスの検索行動も変化しています。ChatGPTやGeminiでも
                地域のお店を探す用途が増えており、これらのAIはGoogleビジネスプロフィールの情報を参照することがあります。
                MEO対策で情報を整備することは、AI検索での露出にも間接的に寄与します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                競合との差はまだ開いていない今が、MEO対策を始める最大のチャンスです。
                大手資本が参入しにくい「地域」という市場では、適切な施策を継続することで
                中小企業でも圧倒的な集客力を手に入れることができます。
                サイプレスはMEO対策の専門チームが貴社の地域での存在感を最大化します。
              </p>
            </div>
          </div>
        </section>

        {/* サブページナビゲーション */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Knowledge
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0F172A" }}>
              MEO対策を深く学ぶ
            </h2>
            <div className="max-w-3xl">
              {subPages.map((page, i) => (
                <Link key={page.href} href={page.href}>
                  <div
                    className="flex gap-6 py-6 hover:opacity-80 transition-opacity"
                    style={{ borderTop: i === 0 ? "1px solid #E8E4DC" : "1px solid #E8E4DC", borderBottom: i === subPages.length - 1 ? "1px solid #E8E4DC" : undefined }}
                  >
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-[16px] mb-2 hover:underline" style={{ color: "#0F172A" }}>{page.label}</h3>
                      <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{page.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスのMEO支援概要 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Support
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              サイプレスのMEO支援
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                株式会社サイプレスは、MEO対策に特化した専門チームを擁し、地域ビジネスのGoogleマップ上位表示を
                実現してきた実績があります。単なるプロフィール設定代行にとどまらず、競合分析・キーワード設計・
                口コミ獲得の仕組み化・継続的な改善PDCAまでをワンストップで支援します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                MEO対策はSEO・SNS・ホームページ制作と組み合わせることで効果が倍増します。
                サイプレスはこれらを横断的に対応できるため、各施策の相乗効果を最大限引き出します。
                まずは現状の無料診断から始めることをお勧めします。
              </p>
              <div className="pt-4">
                <Link
                  href="/services/meo"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                  style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                >
                  MEO対策サービスの詳細
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2-col: MEOと口コミの関係 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="MEOと口コミの関係・スマートフォンを使う女性たち" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Reviews &amp; MEO
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  MEOと口コミの関係
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    Googleマップでの順位を決めるアルゴリズムにおいて、口コミは「知名度（Prominence）」評価の中核を担います。口コミ件数・平均評価スコア・返信率・最新性がすべて順位に影響します。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    消費者の87%がオンライン口コミを読んでから地域ビジネスを利用するかを決定します。つまり口コミはMEO順位だけでなく、来店転換率にも直接影響する集客の要です。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    自然に高評価口コミを増やすQRコード導線の設計や、ネガティブ口コミへの誠実な返信戦略が、長期的なMEO成果の土台になります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO対策に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
            { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化の完全ガイド" },
            { href: "/meo/review-management", label: "口コミ対策", desc: "高評価口コミを増やす戦略" },
            { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索での上位表示" },
            { href: "/services/sns", label: "SNS運用", desc: "MEOと連動したSNS集客" },
          ]}
        />

        <PageContactCTA
          heading="MEO対策のご相談はサイプレスへ"
          body="Googleマップでの上位表示・来店数増加・口コミ対策など、MEOに関するご相談を承っています。現在のGoogleビジネスプロフィールの状況を確認したうえで、最適な改善策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
