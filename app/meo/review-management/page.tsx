import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "口コミ対策・口コミ管理｜Googleマップ評価向上｜株式会社サイプレス",
  description:
    "Google口コミ対策で平均評価4.6点を実現。自然な口コミ獲得の仕組み構築・ネガティブ口コミへの対応・返信文の書き方まで詳しく解説。MEO対策と組み合わせた集客改善。",
  keywords: ["口コミ対策", "Googleマップ口コミ", "口コミ管理", "Google評価向上", "Googleレビュー対策", "MEO口コミ"],
  openGraph: {
    title: "口コミ対策・口コミ管理｜Googleマップ評価向上｜株式会社サイプレス",
    description: "Google口コミ対策で評価を向上。口コミ獲得の仕組み化からネガティブ対応まで。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/review-management" },
};

const reviewMeasures = [
  {
    title: "口コミ獲得導線の設計（QRコード・URLの案内）",
    body: "口コミを自然に増やすためには、顧客が簡単に口コミを投稿できる導線を設計することが最初のステップです。Googleビジネスプロフィールの口コミ投稿URLを短縮し、会計時のレシート・卓上POP・名刺・サンクスカードにQRコードを掲載します。LINE公式アカウントでの来店後フォローアップメッセージも効果的で、タイミングよく口コミ投稿を依頼できます。「口コミを書いてください」と直接お願いするよりも、「感想を聞かせてください」というアプローチが自然で高い反応率を得られます。",
  },
  {
    title: "返信の重要性と返信文の考え方",
    body: "すべての口コミに返信することは、MEOアルゴリズム評価とユーザーへの信頼構築の両方で不可欠です。Googleは口コミへのオーナー返信率をビジネスのアクティビティ評価に組み込んでいます。高評価口コミへの返信では感謝を伝えつつ、具体的なコメントに触れることでパーソナルな印象を与えます。低評価口コミへの返信は特に重要で、誠実な対応姿勢が第三者閲覧者に好印象を与え、来店転換率の維持につながります。返信には自然な形でビジネス名・サービス名を含めることで、SEO効果も得られます。",
  },
  {
    title: "低評価・ネガティブ口コミへの対応",
    body: "低評価口コミへの対応は、問題解決の姿勢を公に示す機会と捉えることが重要です。感情的な反論・言い訳は絶対に避け、まず事実確認と謝罪（必要な場合）を行います。可能であれば直接連絡を促し、オフラインでの問題解決を図ります。返信文は「問題を認識し、改善に取り組む姿勢」を示す内容にします。第三者が読んだ際に「この会社は顧客対応が誠実だ」と感じる内容にすることが、むしろ他の潜在顧客の来店率を高めます。感情的・攻撃的な口コミには冷静で简潔な返信が効果的です。",
  },
  {
    title: "不正レビューへの対処方法",
    body: "競合による組織的な低評価投稿・根拠のない誹謗中傷・スパム口コミなど、Googleのポリシーに違反する口コミはGoogleへの報告・削除申請が可能です。報告の際はポリシー違反の根拠を明確にすることが重要です。具体的には「スパムまたはフェイク」「不快なコンテンツ」「利益相反」などのカテゴリから適切なものを選択します。削除には時間がかかることも多いため、並行して本物の高評価口コミを増やす施策を進めることが最も効果的な対抗策です。",
  },
  {
    title: "口コミ件数と評価スコアの管理",
    body: "Googleマップの口コミは「件数」「平均スコア」「最新性」の3要素がMEO順位とユーザーの来店判断の両方に影響します。目標設定の目安は業種によって異なりますが、一般的に競合上位3社の口コミ件数を把握し、それに見合う目標を設定します。評価スコアは4.0以上が一般的な信頼ラインで、4.5以上を目指すことを推奨しています。月ごとの獲得口コミ数・平均スコアの推移をモニタリングし、施策の効果を定量的に把握します。",
  },
];

const faqItems = [
  {
    q: "低評価の口コミを削除することはできますか？",
    a: "Googleのガイドライン違反（スパム・虚偽の事実・誹謗中傷・利益相反など）に該当する口コミはGoogleへの報告・削除申請が可能です。ただし、単に否定的な意見や低評価であるだけでは削除できません。削除できない口コミに対しては、誠実な返信で第三者への印象を管理することが最善策です。",
  },
  {
    q: "口コミを増やすための具体的な方法を教えてください",
    a: "最も効果的な方法はQRコードによる口コミ投稿導線の設計です。会計時のレシート・POP・LINE公式アカウントのメッセージに口コミ投稿URLのQRコードを掲載し、来店直後の満足度が高いタイミングで依頼します。ただし、金銭・割引と引き換えの口コミ依頼はGoogleのポリシー違反です。自然な形での依頼と、サービス品質の向上による好循環が長期的に最も有効です。",
  },
  {
    q: "口コミへの返信は代行してもらえますか？",
    a: "はい、口コミ返信の代行プランをご用意しています。貴社のブランドトーン・マナーに合わせた返信文を作成し、迅速に対応します。高評価・低評価・質問形式など、それぞれに適した返信スタイルで対応します。",
  },
  {
    q: "競合が大量の偽レビューを持っています。どうすればいいですか？",
    a: "Googleへの報告と並行して、自社の本物の口コミを継続的に増やすことが最善策です。偽レビューは時間をかけて削除されることもありますが、保証はありません。本物の口コミが蓄積されることで長期的に高い評価を維持でき、ユーザーも真贋を判断できるようになります。",
  },
  {
    q: "口コミの評価スコアを短期間で上げることはできますか？",
    a: "不正な手段を使わない限り、短期間での大幅なスコア改善は難しいです。ただし、口コミ獲得の仕組みを整え、月10〜20件の口コミを継続的に獲得できる体制を作ることで、3〜6ヶ月で目に見える改善が期待できます。現在のスコアが低い場合、まず新規口コミの獲得を強化することが最優先です。",
  },
];

export default function ReviewManagementPage() {
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
              <span style={{ color: "#0F172A" }}>口コミ対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Review Management
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              口コミ対策・口コミ管理
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleマップの口コミはMEO順位と集客の両方に直接影響します。
              口コミの件数・評価スコア・最新性がローカル検索アルゴリズムの重要要素であり、
              同時に潜在顧客の来店判断に大きく影響します。
              戦略的な口コミ管理で競合に差をつける方法を解説します。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="口コミ対策・スマートフォンを活用する女性たち" fill className="object-cover" sizes="100vw" />
        </section>

        {/* 口コミがMEOに与える影響 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Impact on MEO
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              口コミがMEOに与える影響
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleのローカル検索アルゴリズムにおいて、口コミは「知名度（Prominence）」と「関連性（Relevance）」
                の両方に影響する重要な要素です。口コミの総数が多いほど、そのビジネスの認知度・信頼性が高いと
                Googleに評価されます。また、口コミ文中に含まれるキーワード（業種名・地域名・サービス名など）が
                検索クエリとの関連性評価にも影響します。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                平均評価スコアも重要です。4.0未満のビジネスはユーザーのクリック率が大幅に低下します。
                Brightlocalの調査によると、消費者の87%がオンライン口コミを読んでから地域ビジネスを利用するかどうか
                を決定します。また、4.5以上の評価を持つビジネスは、4.0未満のビジネスと比べて来店転換率が
                約2.7倍高いというデータもあります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                口コミの「最新性」も重要な要素です。定期的に新しい口コミが投稿されているビジネスは、
                Googleに「アクティブで信頼できるビジネス」として評価されます。1年以上前の口コミしかない場合、
                顧客もGoogleも現在のビジネス状況を判断できず、信頼性が下がります。
                月5件以上の新規口コミ獲得を目標に継続的な施策が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* 口コミ対策の施策 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Measures
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              口コミ対策の施策
            </h2>
            <div className="max-w-3xl">
              {reviewMeasures.map((item, i) => (
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

        {/* 返信文の書き方 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Response Writing
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              口コミ返信文の書き方
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                口コミ返信文は3つの要素を意識して書くことが重要です。①個別性（テンプレートでなく、その口コミ内容に
                触れた返信）、②ブランドトーン（会社の雰囲気・人格を反映した文体）、③SEO（ビジネス名や
                サービス名を自然に組み込む）です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                高評価口コミへの返信の基本構成は「感謝→具体的なコメントへの言及→再来店の促し」です。
                例：「○○様、嬉しいご感想をありがとうございます。カラーリングをお気に召していただけて光栄です。
                またのご来店をスタッフ一同お待ちしております。（美容室○○）」のように、
                具体的な内容に触れることでパーソナルな印象を与えます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                低評価口コミへの返信は「謝罪→原因への言及（可能な範囲で）→改善策・解決策の提示→連絡先」
                の構成を基本とします。感情的な反論や言い訳は絶対に避け、「ご迷惑をおかけして大変申し訳ございません。
                いただいたご意見を参考に改善してまいります。詳しくお話をお聞きするため、○○までご連絡ください」
                のように誠実で建設的な返信を心がけます。
              </p>
            </div>
          </div>
        </section>

        {/* 2-col: 口コミ返信の重要性 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_13_37.png" alt="口コミ返信の重要性・ドキュメントを確認するビジネスパーソン" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Review Response
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  口コミ返信の重要性
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    すべての口コミに返信することは、MEOアルゴリズム評価と潜在顧客への信頼構築の両面で不可欠です。Googleは口コミへのオーナー返信率をビジネスのアクティビティ評価に組み込んでいます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    高評価口コミへの返信はリピート来店を促し、低評価口コミへの誠実な対応は第三者閲覧者に好印象を与えます。返信を通じてブランドのトーン＆マナーを表現できる機会でもあります。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    24〜48時間以内の返信を目標に、ビジネス名やサービス名を自然に含めた返信文を継続することで、SEO効果も同時に得られます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="口コミ対策に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/meo/store-marketing", label: "店舗集客", desc: "MEOで来店数を増やす" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="口コミ対策のご相談はサイプレスへ"
          body="口コミ獲得の仕組み化からネガティブ口コミへの対応まで、Googleマップの口コミ対策を専門チームがサポートします。現状の口コミ状況を無料で診断します。"
        />
      </main>
      <Footer />
    </>
  );
}
