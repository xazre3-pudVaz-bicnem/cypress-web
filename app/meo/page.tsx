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
    "MEO対策（マップエンジン最適化）の基礎から実践まで。Googleビジネスプロフィール最適化・口コミ対策・順位改善・店舗集客を体系的に解説。地域ビジネスの集客に最もROIが高い施策です。東京・葛飾区を拠点に全国対応。",
  keywords: ["MEOとは", "MEO対策とは", "MEO基礎", "Googleマップ対策", "ローカル検索対策", "Googleビジネスプロフィール", "ローカルパック"],
  openGraph: {
    title: "MEO対策とは｜Googleマップ上位表示の完全ガイド｜株式会社サイプレス",
    description: "MEO対策の基礎から実践まで体系的に解説。地域ビジネスの集客に最もROIが高い施策。Googleマップ上位表示の完全ガイド。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_03.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", "position": 2, "name": "MEO対策", "item": "https://www.cypress-all.co.jp/meo" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "MEO対策とSEO対策の違いは何ですか？", "acceptedAnswer": { "@type": "Answer", "text": "SEO対策がGoogle検索のオーガニック結果での順位改善を目的とするのに対し、MEO対策はGoogleマップ（ローカルパック）での表示順位改善を目的とします。" } },
        { "@type": "Question", "name": "MEO対策の効果が出るまでどのくらいかかりますか？", "acceptedAnswer": { "@type": "Answer", "text": "基本最適化は2〜4週間で効果が現れることがあります。安定した上位表示には3〜6ヶ月の継続的な取り組みが必要です。" } },
        { "@type": "Question", "name": "MEO対策は自分でできますか？", "acceptedAnswer": { "@type": "Answer", "text": "Googleビジネスプロフィールの基本設定は自分で行えますが、競合分析・キーワード設計・口コミ獲得の仕組み化・継続的な最適化は専門知識と時間が必要です。" } },
      ],
    },
  ],
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
  {
    q: "口コミが少ない・悪い場合はどうすればいいですか？",
    a: "口コミが少ない場合は、来店後のお礼メッセージ・QRコードの設置・予約完了メールなど自然な導線から口コミをお願いする仕組みを構築します。ネガティブ口コミへは誠実な返信が重要で、適切な対応が他のユーザーへの信頼性向上にもつながります。口コミ取得を促進する不正な方法（金品提供・サクラ等）は規約違反となるため厳禁です。",
  },
  {
    q: "Googleマップの「ローカルパック」とは何ですか？",
    a: "「渋谷 美容室」のように地域名＋業種で検索した際に、通常の検索結果より上部に地図と3件の店舗情報が表示されるエリアのことです。このローカルパックはクリック率が非常に高く、上位3件に入ることで来店数が大きく増加します。MEO対策の主要な目標はこのローカルパック上位表示です。",
  },
  {
    q: "MEO対策でどのくらい集客が増えますか？",
    a: "効果は競合状況・エリア・業種・現状の最適化度によって大きく異なります。ローカルパック上位3件に入ると、現在より大幅にインプレッション数と来店数が増えるケースがあります。成果保証はできませんが、当社では現状診断を元に具体的な改善見込みをご説明します。",
  },
  {
    q: "Googleビジネスプロフィールは無料ですか？",
    a: "はい、Googleビジネスプロフィールの登録・管理は基本的に無料です。ただし、適切に最適化するためには専門知識と継続的な運用工数が必要であり、多くの企業が支援サービスを活用しています。",
  },
  {
    q: "MEO対策費用の相場はいくらですか？",
    a: "一般的なMEO対策の月次費用は、基本管理プランで月2〜5万円程度、競合が激しいエリア・業種での本格的な施策では月5〜15万円程度が相場です。初期設定費用が別途かかる場合もあります。サイプレスでは現状診断後に最適なプランをご提案します。",
  },
  {
    q: "MEO対策とSNSを同時に進めるべきですか？",
    a: "はい、MEO対策とInstagram・X（Twitter）などのSNS運用を連動させることで集客効果が倍増します。InstagramでUGC（ユーザー投稿）を増やすことでGoogleでの口コミ・評判情報も充実し、MEO順位にも好影響を与えます。SNS投稿のコンテンツをGBP投稿にも流用する効率化も有効です。",
  },
  {
    q: "競合他社がすでにMEO対策をしている場合、勝てますか？",
    a: "競合が既に実施している場合でも、徹底した最適化・口コミ獲得の加速・地域キーワード設計の差別化によって逆転は可能です。競合分析を詳細に行い、競合の弱点を突く施策を組み立てることが重要です。当社では競合分析レポートを元にした差別化戦略をご提案します。",
  },
];

export default function MeoIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-4" style={{ color: "#374151" }}>
              MEO（マップエンジン最適化）とは、Googleマップやローカル検索でビジネスの表示順位を改善し、
              地域の見込み客からの来店・問い合わせを増やす施策です。
              「渋谷　美容室」「新宿　歯科」のように地域名と業種を組み合わせた検索で上位表示されることで、
              購買意欲の高いユーザーに直接リーチできます。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleの調査によると、近くの店舗を検索したユーザーの76%が24時間以内に来店します。
              MEO対策は他のデジタルマーケティング施策と比較して費用対効果が高く、
              中小規模の地域ビジネスでも大きな集客効果を生み出せる戦略です。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "400px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_03.png"
            alt="MEO対策・Googleマップ集客のデジタル戦略"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <p className="text-white font-black leading-tight" style={{ fontSize: "clamp(20px, 3vw, 36px)" }}>
                Googleマップで上位表示される企業へ。<br />地域集客を根本から変える。
              </p>
            </div>
          </div>
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

        {/* MEO順位を決める3つの評価軸 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Ranking Factors
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0F172A" }}>
              Googleがローカル順位を決める3つの評価軸
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              Googleは公式に3つの要因でローカル検索順位を決定していると発表しています。
              この3要素を理解することがMEO対策の出発点です。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  en: "Relevance",
                  ja: "関連性",
                  color: "#c4b89a",
                  desc: "ユーザーの検索意図とビジネス情報がどれだけ一致しているかを評価します。ビジネスカテゴリ・サービス説明・属性情報を正確に設定することで関連性スコアが向上します。「美容室」で検索するユーザーに「ヘアサロン」として登録していれば引っかかりません。キーワードを意識した情報設計が重要です。",
                  checks: ["正確なビジネスカテゴリ設定", "サービス・商品情報の網羅", "ビジネス説明文のキーワード最適化"],
                },
                {
                  en: "Distance",
                  ja: "距離",
                  color: "#6B7280",
                  desc: "検索ユーザーの現在地・指定エリアとビジネスの物理的距離を評価します。距離はコントロールが難しいですが、住所・サービスエリアの正確な設定と、複数エリアへの対応を情報として明示することで影響を最小化できます。",
                  checks: ["住所情報の正確な設定", "サービスエリアの明示", "複数エリア対応のコンテンツ"],
                },
                {
                  en: "Prominence",
                  ja: "知名度",
                  color: "#0d1b2a",
                  desc: "オンライン上での存在感・評判・知名度を総合的に評価します。口コミの件数・評価スコア・返信率・写真枚数・投稿頻度・ウェブサイトへの言及・被リンク数などが含まれます。3要素の中で最も施策の影響が大きく、継続的な取り組みが求められます。",
                  checks: ["口コミ件数・評価スコア向上", "定期的な写真・投稿更新", "外部サイトからの言及獲得"],
                },
              ].map((factor) => (
                <div
                  key={factor.en}
                  className="p-6"
                  style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}
                >
                  <div className="mb-4">
                    <span
                      className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                      style={{ color: typeof factor.color === "string" && factor.color === "#c4b89a" ? "#c4b89a" : "#6B7280" }}
                    >
                      {factor.en}
                    </span>
                    <h3 className="font-black text-[24px] mt-1" style={{ color: "#0F172A" }}>{factor.ja}</h3>
                  </div>
                  <p className="text-[14px] leading-[1.8] mb-5" style={{ color: "#374151" }}>{factor.desc}</p>
                  <ul className="space-y-1">
                    {factor.checks.map((c, j) => (
                      <li key={j} className="flex gap-2 text-[13px]" style={{ color: "#374151" }}>
                        <span style={{ color: "#c4b89a" }}>✓</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* なぜ今MEO対策が重要か */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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

        {/* MEO対策の具体的施策 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Key Actions
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#FFFFFF" }}>
              MEO対策の具体的施策12選
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {[
                {
                  num: "01",
                  title: "Googleビジネスプロフィールの完全最適化",
                  body: "カテゴリ設定・ビジネス説明文・営業時間・電話番号・ウェブサイトURLを正確に設定。属性（予約可能・WiFiあり等）・サービス・商品も網羅的に登録します。",
                },
                {
                  num: "02",
                  title: "写真・動画の定期的な追加",
                  body: "店内・外観・スタッフ・商品・施術事例など高品質な写真を定期的に追加します。写真が多いビジネスはGoogleマップのクリック率が大幅に向上します。",
                },
                {
                  num: "03",
                  title: "Googleビジネスプロフィール投稿の継続",
                  body: "最新情報・キャンペーン・イベント・ブログ的な投稿を週1回以上継続します。投稿頻度はGoogleの「知名度」評価に影響し、直接的なMEO順位向上につながります。",
                },
                {
                  num: "04",
                  title: "口コミ獲得の仕組み化",
                  body: "来店後のQRコードカード・お礼メール・LINEメッセージ・予約完了画面での口コミ依頼など、自然な流れで口コミをお願いする複数の導線を構築します。",
                },
                {
                  num: "05",
                  title: "口コミへの丁寧な返信",
                  body: "すべての口コミ（高評価・低評価問わず）に迅速で誠実な返信をします。返信率はMEO順位に影響し、他のユーザーへの信頼性アピールにもなります。",
                },
                {
                  num: "06",
                  title: "地域キーワード設計",
                  body: "「渋谷 美容室」「葛飾区 リフォーム」など市区町村・駅名×業種の組み合わせキーワードを戦略的に設計し、ビジネス情報・ウェブサイトに反映させます。",
                },
                {
                  num: "07",
                  title: "Q&Aセクションの整備",
                  body: "GBPのQ&Aセクションに、ユーザーがよく聞く質問と回答を自分で登録します。未整備の場合、誰でも回答を書き込めてしまうため自社管理が必須です。",
                },
                {
                  num: "08",
                  title: "ウェブサイトとの情報整合性確保",
                  body: "GBPの情報（名称・住所・電話番号＝NAP）とウェブサイト・各種ディレクトリの情報を完全に一致させます。NAP不一致はMEO順位低下の原因になります。",
                },
                {
                  num: "09",
                  title: "ローカルSEOとの連動",
                  body: "ウェブサイトに地域名を含むコンテンツページ・LocalBusiness構造化データを実装します。MEOとローカルSEOを連動させることで両方の効果が向上します。",
                },
                {
                  num: "10",
                  title: "競合分析と差別化",
                  body: "上位表示されている競合のGBP情報・口コミ数・写真数・投稿頻度を分析し、自社の弱点を特定して集中的に改善します。競合の強みを上回ることが順位逆転の鍵です。",
                },
                {
                  num: "11",
                  title: "インサイト分析と改善",
                  body: "GBPのインサイト（検索ワード・閲覧数・電話タップ数・ルート検索数・ウェブサイトクリック数）を月次で分析し、施策の効果測定と改善を繰り返します。",
                },
                {
                  num: "12",
                  title: "外部サイトへの登録・被言及獲得",
                  body: "Googleは外部サイト（食べログ・ホットペッパー・各業界ポータル）での掲載・言及も「知名度」として評価します。主要ポータルへの登録と定期更新も施策に含めます。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5">
                  <span
                    className="text-[20px] font-black shrink-0 leading-none mt-0.5"
                    style={{ color: "#c4b89a", fontFamily: "var(--font-serif)" }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#FFFFFF" }}>{item.title}</h3>
                    <p className="text-[13px] leading-[1.8]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                  </div>
                </div>
              ))}
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
                    style={{
                      borderTop: "1px solid #E8E4DC",
                      borderBottom: i === subPages.length - 1 ? "1px solid #E8E4DC" : undefined,
                    }}
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

        {/* 業種別MEO活用事例 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Industry Cases
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0F172A" }}>
              業種別MEO対策の活用事例
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              MEO対策は業種によって重点を置くべき施策が異なります。
              代表的な業種ごとのポイントをご紹介します。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: "飲食店",
                  icon: "🍜",
                  points: [
                    "メニュー・価格・写真を充実させ「食欲」を喚起",
                    "「ランチ」「ディナー」「テイクアウト」などシーン別カテゴリ",
                    "食べログ・ぐるなびとの情報整合",
                    "予約リンク・オーダー機能の設定",
                  ],
                },
                {
                  industry: "美容室・サロン",
                  icon: "✂️",
                  points: [
                    "施術事例のビフォーアフター写真を定期更新",
                    "「カット」「カラー」「パーマ」など施術別サービス登録",
                    "予約サービス（ホットペッパー等）との連携",
                    "スタッフ写真・担当者情報の充実",
                  ],
                },
                {
                  industry: "医療・クリニック",
                  icon: "🏥",
                  points: [
                    "「初診」「急患対応」「保険診療」などの属性を明示",
                    "院長・医師プロフィールと専門領域の明記",
                    "Web予約・電話予約の導線設定",
                    "駐車場情報・バリアフリー情報の詳細記載",
                  ],
                },
                {
                  industry: "整骨院・整体",
                  icon: "💆",
                  points: [
                    "施術メニューと適応症状の詳細登録",
                    "「肩こり」「腰痛」「交通事故」などの症状別キーワード",
                    "保険適用可否と予約方法の明確化",
                    "施術室・受付の写真で安心感を醸成",
                  ],
                },
                {
                  industry: "不動産・リフォーム",
                  icon: "🏠",
                  points: [
                    "施工エリア・対応工事の詳細設定",
                    "施工事例写真（着工前・完成後）の定期追加",
                    "「無料見積もり」「相談対応」のサービス設定",
                    "資格・免許・認定情報の明示",
                  ],
                },
                {
                  industry: "学習塾・スクール",
                  icon: "📚",
                  points: [
                    "対象学年・科目・受験対応の詳細登録",
                    "無料体験授業の予約リンク設定",
                    "合格実績・指導方針の説明文への組み込み",
                    "教室内写真で学習環境をアピール",
                  ],
                },
              ].map((c) => (
                <div
                  key={c.industry}
                  className="p-6"
                  style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-bold text-[16px] mb-4" style={{ color: "#0F172A" }}>{c.industry}</h3>
                  <ul className="space-y-2">
                    {c.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-[1.7]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスのMEO支援概要 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Support
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              サイプレスのMEO支援
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-5">
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  株式会社サイプレスは、MEO対策に特化した専門チームを擁し、地域ビジネスのGoogleマップ上位表示を
                  支援しています。単なるプロフィール設定代行にとどまらず、競合分析・キーワード設計・
                  口コミ獲得の仕組み化・継続的な改善PDCAまでをワンストップで支援します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  MEO対策はSEO・SNS・ホームページ制作と組み合わせることで効果が倍増します。
                  サイプレスはこれらを横断的に対応できるため、各施策の相乗効果を最大限引き出します。
                  まずは現状の無料診断から始めることをお勧めします。
                </p>
                <div className="pt-2">
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "現状診断・競合分析", desc: "GBP状況と競合を詳細調査" },
                  { label: "GBP完全最適化", desc: "全項目の徹底的な整備" },
                  { label: "口コミ獲得設計", desc: "自然な口コミ増加の仕組み" },
                  { label: "投稿・写真管理", desc: "定期的なコンテンツ更新" },
                  { label: "ローカルSEO連動", desc: "ウェブサイトとの相乗効果" },
                  { label: "月次レポート", desc: "インサイト分析と改善提案" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-4"
                    style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}
                  >
                    <div className="font-bold text-[13px] mb-1" style={{ color: "#0F172A" }}>{s.label}</div>
                    <div className="text-[12px]" style={{ color: "#9CA3AF" }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MEO費用の目安 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Pricing
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0F172A" }}>
              MEO対策費用の目安
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO対策の費用は、競合の激しさ・対応施策の範囲・店舗数によって異なります。
              以下は一般的な相場の目安です。詳細はご相談ください。
            </p>
            <div className="max-w-4xl overflow-x-auto">
              <table className="w-full text-[14px]" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#0d1b2a" }}>
                    <th className="text-left py-4 px-5 font-semibold text-white">プラン</th>
                    <th className="text-left py-4 px-5 font-semibold text-white">月額費用</th>
                    <th className="text-left py-4 px-5 font-semibold text-white">主な施策内容</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plan: "スタータープラン", price: "月2〜3万円", content: "GBP基本最適化・投稿代行・月次レポート" },
                    { plan: "スタンダードプラン", price: "月3〜5万円", content: "スタータープラン＋口コミ獲得支援・写真管理" },
                    { plan: "プレミアムプラン", price: "月5〜10万円", content: "スタンダード＋競合分析・ローカルSEO連動・詳細インサイト分析" },
                    { plan: "多店舗プラン", price: "要相談", content: "複数店舗の一括管理・店舗別最適化・集中支援" },
                    { plan: "初期設定（一時費用）", price: "3〜10万円", content: "GBP新規作成・競合分析・キーワード設計・情報完全整備" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? "#FFFFFF" : "#F9F8F5",
                        borderBottom: "1px solid #E8E4DC",
                      }}
                    >
                      <td className="py-4 px-5 font-medium" style={{ color: "#0F172A" }}>{row.plan}</td>
                      <td className="py-4 px-5 font-bold" style={{ color: "#c4b89a" }}>{row.price}</td>
                      <td className="py-4 px-5" style={{ color: "#374151" }}>{row.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px]" style={{ color: "#9CA3AF" }}>
              ※上記は参考価格です。詳細は無料相談の上でご提案します。成果保証はございません。
            </p>
          </div>
        </section>

        {/* MEOと口コミの関係 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_21_48.png"
                  alt="MEOと口コミの関係・スマートフォンを使う女性たち"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
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
                    自然に高評価口コミを増やすQRコード導線の設計や、ネガティブ口コミへの誠実な返信戦略が、長期的なMEO成果の土台になります。口コミ対策を後回しにせず、仕組みとして早期から構築することが重要です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある失敗パターン */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Mistakes
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              MEO対策でよくある失敗パターン
            </h2>
            <div className="max-w-3xl space-y-6">
              {[
                {
                  title: "GBPを設定したまま放置する",
                  body: "Googleビジネスプロフィールを登録しても、その後更新・投稿・写真追加を行わなければMEO効果は得られません。Googleは「活発に運用されているビジネス」を評価します。最低でも週1回の投稿と、情報が変わった際の即時更新が必要です。",
                },
                {
                  title: "口コミ対策を後回しにする",
                  body: "「口コミは自然に集まるもの」と考えて施策をしないと、競合に大きく差をつけられます。口コミ獲得の仕組みを意図的に設計することが重要です。ただし、インセンティブ（金品・割引）提供での口コミ依頼はGoogleポリシー違反になるため厳禁です。",
                },
                {
                  title: "名称・住所・電話番号が複数サイトで異なる",
                  body: "GBP・ウェブサイト・食べログ・ホットペッパー・各ディレクトリでNAP（名称・住所・電話番号）情報が異なると、Googleの信頼性評価が下がり順位に悪影響が出ます。すべての媒体で完全一致した情報を維持することが必要です。",
                },
                {
                  title: "競合分析をしないで施策を実施する",
                  body: "競合のGBP状況（口コミ数・写真数・投稿頻度・カテゴリ）を分析せずに施策を進めると、競合を超えられません。「競合より何が劣っているか」を把握した上で優先施策を決めることが効率的な順位改善の近道です。",
                },
                {
                  title: "一度上位表示されて対策をやめてしまう",
                  body: "MEO対策は継続が前提です。上位表示を達成しても、競合が対策を強化すれば順位は落ちます。口コミ獲得・投稿継続・写真更新・インサイト分析を継続することで、上位表示を維持し続けることが重要です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderBottom: "1px solid #E8E4DC" }}>
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center text-[13px] font-bold"
                    style={{ background: "#FEE2E2", color: "#DC2626", borderRadius: "50%" }}
                  >
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO対策に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
            { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP最適化の完全ガイド" },
            { href: "/meo/review-management", label: "口コミ対策", desc: "高評価口コミを増やす戦略" },
            { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示の施策" },
            { href: "/meo/store-marketing", label: "店舗集客設計", desc: "来店・予約転換率の向上" },
            { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域名×業種のキーワード戦略" },
            { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索での上位表示" },
            { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京都内の地域集客支援" },
            { href: "/area/katsushika", label: "葛飾区のMEO対策", desc: "葛飾区エリアの集客支援" },
            { href: "/area/adachi", label: "足立区のMEO対策", desc: "足立区エリアの集客支援" },
            { href: "/services/sns", label: "SNS運用", desc: "MEOと連動したSNS集客" },
            { href: "/aio", label: "AIO対策", desc: "AI検索での引用・推薦対策" },
            { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食店のMEO・マーケティング" },
            { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容室のMEO・マーケティング" },
            { href: "/industries/clinic", label: "クリニックの集客", desc: "医療機関のMEO・マーケティング" },
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
