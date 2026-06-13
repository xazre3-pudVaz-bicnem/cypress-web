import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleビジネスプロフィール最適化｜MEO対策の基本｜株式会社サイプレス",
  description:
    "Googleビジネスプロフィール（GBP）最適化でMEO対策の効果を最大化。カテゴリ設定・NAP情報・写真・投稿・口コミ返信まで9つの主要ポイントを詳しく解説します。",
  keywords: ["Googleビジネスプロフィール", "Googleマイビジネス最適化", "GBP最適化", "MEO対策", "Googleマップ最適化"],
  openGraph: {
    title: "Googleビジネスプロフィール最適化｜MEO対策の基本｜株式会社サイプレス",
    description: "GBP最適化でMEO対策の効果を最大化。9つの主要最適化ポイントを解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/google-business-profile" },
};

const optimizationPoints = [
  {
    title: "カテゴリ設定（主カテゴリ・副カテゴリの選定）",
    body: "ビジネスカテゴリはMEO順位に直接影響する最重要項目のひとつです。主カテゴリはビジネスの核心を正確に表すものを選択し、副カテゴリには関連するサービス・業種を追加します。例えば「美容室」を主カテゴリとし、「ヘアサロン」「ヘアカラー専門店」を副カテゴリに加えることで、より多くの検索クエリとの関連性が高まります。競合のカテゴリ設定を分析したうえで最適な組み合わせを選定します。",
  },
  {
    title: "事業名・住所・電話番号（NAP）の正確な記載",
    body: "NAP情報（Name・Address・Phone）の正確性と一貫性はMEO対策の基本中の基本です。Googleビジネスプロフィールに登録する情報は、自社ウェブサイト・その他のビジネスディレクトリ・SNSプロフィールと完全に一致させる必要があります。表記の揺れ（「株式会社」と「(株)」の混在など）も検索エンジンに混乱を与えます。NAP情報の統一を怠ると、Googleがビジネス情報の信頼性を低く評価し、順位に悪影響が出ます。",
  },
  {
    title: "営業時間・特別営業時間の更新",
    body: "営業時間の正確な設定と定期的な更新は、ユーザー体験とMEO評価の両方に影響します。Googleは「現在営業中」かどうかをリアルタイムで表示するため、営業時間が不正確だと来店機会を逃します。また、祝日・連休・臨時休業などの特別営業時間を事前に登録することで、ユーザーの信頼性向上とGoogleのアクティブビジネス評価向上につながります。シーズンごとの定期更新を習慣化することが重要です。",
  },
  {
    title: "サービス・メニュー情報の充実",
    body: "GBPのサービス欄・メニュー欄に提供サービスの詳細を入力することで、検索クエリとの関連性が大幅に向上します。単にサービス名を並べるだけでなく、価格帯・所要時間・特徴なども記載することで、ユーザーの問い合わせ前の不安を解消し、来店確率が高まります。地域キーワードをサービス説明に自然な形で組み込むことも重要です。定期的にメニュー・料金の更新を行うことで、最新情報を提供し続けます。",
  },
  {
    title: "写真の定期的な追加と品質管理",
    body: "写真はユーザーの来店意欲に直結する最も重要なコンテンツのひとつです。Googleビジネスプロフィールに100枚以上の写真を掲載している企業は、掲載が少ない企業と比べてウェブサイトへのクリック数が大幅に多いというデータがあります。外観・内装・スタッフ・商品・サービス提供の様子など多様なカテゴリの写真を定期的に追加します。スマートフォンで撮影した自然な写真が効果的で、月2〜4枚の定期追加を推奨しています。",
  },
  {
    title: "最新情報投稿（週1回以上推奨）",
    body: "GBPの「最新情報投稿」機能は、ブログのようにお知らせ・キャンペーン・イベント・新メニューなどを発信できる機能です。定期的に投稿を行うことで、Googleに「アクティブなビジネス」として評価され、MEO順位の改善に寄与します。また、投稿内容にターゲットキーワードを自然に含めることで、検索との関連性も高まります。週1回以上の投稿を目標に、季節イベント・限定情報など来店意欲を高めるコンテンツを継続的に発信します。",
  },
  {
    title: "口コミへの返信",
    body: "すべての口コミに返信することは、MEO評価とユーザーへの信頼構築の両方で重要です。Googleは口コミへの返信率・返信速度をアクティブビジネスの評価基準のひとつとして考慮しています。高評価口コミへの返信は感謝を伝えリピート来店を促します。低評価口コミへの誠実な返信は、閲覧する第三者に「顧客対応が丁寧な企業」という印象を与え、来店転換率の向上につながります。24〜48時間以内の返信を目標とします。",
  },
  {
    title: "Webサイトとの連携",
    body: "GoogleビジネスプロフィールとWebサイトの相互連携はMEO対策とローカルSEOの両方を強化します。GBPに正確なウェブサイトURLを設定し、WebサイトにはGoogleマップの埋め込み・構造化データ（LocalBusiness Schema）・NAP情報の明記を行います。GBPの投稿内容とWebサイトのコンテンツを連動させることで、Googleがビジネス情報の一貫性を評価し、総合的な検索評価が向上します。",
  },
  {
    title: "Q&A欄の活用",
    body: "GBPのQ&A欄は、ユーザーからの質問に事前に回答できる機能です。よくある質問（駐車場の有無・予約の要否・支払方法・アクセス方法など）を自社でQ&Aとして投稿・回答することで、来店前の不安を解消し来店率が向上します。また、Q&A欄の内容にターゲットキーワードを含めることで、検索との関連性も高まります。定期的にQ&Aを確認・更新し、実際に多く寄せられる疑問を積極的に追加します。",
  },
];

const faqItems = [
  {
    q: "Googleビジネスプロフィールの設定は無料ですか？",
    a: "はい、Googleビジネスプロフィールの作成・基本設定・各種機能の利用はすべて無料です。ただし、適切に最適化するためには専門知識と継続的な作業が必要です。当社のGBP最適化サービスは有料となりますが、投資対効果の面では非常に高いリターンが期待できます。",
  },
  {
    q: "Googleビジネスプロフィールの最適化にはどのくらい時間がかかりますか？",
    a: "初期設定・最適化は1〜2週間で完了します。ただし、最適化の効果がGoogleに評価されて順位に反映されるまでには2〜6週間かかることが一般的です。口コミ獲得・投稿継続などの運用面は継続的に取り組む必要があります。",
  },
  {
    q: "競合他社が偽レビューを書いているようです。対処法はありますか？",
    a: "Googleに不適切なコンテンツとして報告することができます。スパムの疑いがある口コミを特定し、エビデンス（投稿者の不自然な行動パターン、競合との関連性など）をまとめてGoogleに報告します。当社では報告手続きのサポートと、本物の口コミを継続的に増やすことで長期的に対抗する戦略を提案します。",
  },
  {
    q: "複数店舗がある場合、それぞれ個別に最適化が必要ですか？",
    a: "基本方針は共通化できますが、各店舗の地域特性・競合状況・強みに合わせた個別の最適化が必要です。当社では多店舗対応プランを用意しており、統一した管理体制と店舗別の細かな対応を両立させます。",
  },
  {
    q: "Googleビジネスプロフィールの情報を勝手に変更されることはありますか？",
    a: "はい、Googleや第三者（ユーザー、競合他社など）がビジネス情報を変更・提案することがあります。「情報の変更提案」機能があり、承認なく反映されるケースもあります。定期的にプロフィールを確認し、不正な変更が行われていないかをチェックすることが重要です。当社の運用プランではこのモニタリングも含まれます。",
  },
];

export default function GoogleBusinessProfilePage() {
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
              <Link href="/meo" className="hover:underline" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Googleビジネスプロフィール</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Google Business Profile
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              Googleビジネスプロフィール<br />（GBP）最適化
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleビジネスプロフィール（GBP）はMEO対策の根幹をなす無料ツールです。
              適切に最適化することでGoogleマップと検索結果での露出が大幅に向上し、
              地域の見込み客からの来店・問い合わせを継続的に増やすことができます。
            </p>
          </div>
        </section>

        {/* GBPとは */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What is GBP
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              GBPとは — MEO対策の最重要ツール
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleビジネスプロフィール（旧Googleマイビジネス）は、Googleが無料で提供する
                ビジネス情報管理ツールです。ここに登録した情報はGoogleマップと検索結果に表示され、
                ユーザーがビジネスを検索した際の第一接点となります。店舗名・住所・電話番号・
                営業時間・写真・口コミ・サービス内容など、来店判断に必要なすべての情報を一元管理できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GBPはMEO対策においてSEOにおけるウェブサイト本体に相当する存在です。
                どれだけ他の施策を行っても、GBPが最適化されていなければMEOの効果は大幅に制限されます。
                逆に言えば、GBPを徹底的に最適化するだけで、競合の多くを追い抜くことが可能です。
                日本の中小企業の約70%がGBPを最低限しか設定していないというデータがあり、
                適切な最適化に大きな機会があります。
              </p>
            </div>
          </div>
        </section>

        {/* GBP最適化の主要ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Optimization Points
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              GBP最適化の主要ポイント
            </h2>
            <div className="max-w-3xl">
              {optimizationPoints.map((item, i) => (
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

        {/* 写真投稿の重要性 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Photo Strategy
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              写真投稿の重要性と戦略
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                GBPにおける写真は、ユーザーの来店意思決定において最も強力なコンテンツです。
                Googleのデータによると、写真を多数掲載しているプロフィールは、掲載が少ないプロフィールと比べて
                ウェブサイトへのクリックが35%多く、電話問い合わせが42%多いという結果が出ています。
                写真は単なる見栄えだけでなく、Googleのアルゴリズム評価にも影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                効果的な写真戦略の基本は「多様性」と「定期更新」です。外観（昼・夜）・内装・
                商品・サービス提供の瞬間・スタッフ・季節限定メニューなど、ビジネスの多面的な魅力を
                伝える写真を継続的に追加します。ユーザーが投稿した写真も重要ですが、
                オーナーが定期的に高品質な写真を追加することで、全体の印象を管理できます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                写真の品質基準としては、解像度720px以上・適切な明るさ・ピントが合っていることが最低条件です。
                プロカメラマンによる撮影は効果的ですが、スマートフォンの最新カメラでも十分な品質が得られます。
                重要なのは定期性で、月2〜4枚のペースで新しい写真を追加し続けることが、
                アルゴリズム評価の維持・向上につながります。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="GBP最適化に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/review-management", label: "口コミ対策", desc: "高評価口コミを増やす" },
            { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
            { href: "/services/sns", label: "SNS運用", desc: "MEOと連動したSNS集客" },
          ]}
        />

        <PageContactCTA
          heading="Googleビジネスプロフィールの最適化をお任せください"
          body="現在のGBPの設定状況を無料で診断し、改善ポイントをご提案します。カテゴリ設定から写真・口コミ管理まで、MEO対策のプロが徹底サポートします。"
        />
      </main>
      <Footer />
    </>
  );
}
