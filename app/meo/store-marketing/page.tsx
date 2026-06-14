import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "店舗集客・来店導線設計｜MEOで来店数・予約数を増やす｜株式会社サイプレス",
  description:
    "MEOを活用した店舗集客で来店数平均3.2倍増。電話発信ボタン・経路案内・予約システム連携・写真コンテンツで来店転換率を最大化する導線設計を詳しく解説。",
  keywords: ["店舗集客", "MEO集客", "Googleマップ集客", "来店数増加", "予約増加", "来店導線"],
  openGraph: {
    title: "店舗集客・来店導線設計｜MEOで来店数・予約数を増やす｜株式会社サイプレス",
    description: "MEOを活用した店舗集客と来店導線設計の実践ガイド。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/store-marketing" },
};

const visitMeasures = [
  {
    title: "電話発信ボタンの活用",
    body: "GoogleビジネスプロフィールとGoogleマップには電話番号が表示され、スマートフォンからワンタップで電話をかけられます。この「電話発信ボタン」のクリック数はGBPインサイトで計測でき、MEO対策の重要なKPIのひとつです。電話番号が正確に設定されているかを確認し、営業時間内は迅速に対応できる体制を整えることが来店転換率の向上に直結します。電話対応の品質改善も、リピート来店率向上に重要な要素です。",
  },
  {
    title: "経路案内の最適化",
    body: "Googleマップの「経路案内」ボタンは、初めて来店する顧客にとって最も重要な機能のひとつです。GBPに正確な住所・ピン位置を設定することはもちろん、目印となる建物や地図上でわかりにくい場合はビジネスの説明文や投稿で補足情報を提供します。ウェブサイトにもGoogleマップを埋め込み、「電車でのアクセス」「駐車場情報」「周辺の目印」を明記することで、初回来店のハードルを大幅に下げられます。",
  },
  {
    title: "予約システムとの連携",
    body: "GoogleビジネスプロフィールにはHotpepperBeatyやTabelogなど、業種別予約システムとの連携ボタンを設置できます。「今すぐ予約」ボタンをプロフィールに追加することで、Googleマップ上から直接予約ができる導線を作れます。予約ハードルを下げることは来店転換率の向上に最も効果的な施策のひとつです。予約ページへのリンクをGBPの投稿やQ&A欄にも掲載し、複数の経路から予約しやすい環境を整えます。",
  },
  {
    title: "写真で来店意欲を高める方法",
    body: "ユーザーが来店するかどうかを判断する際、Googleマップの写真は最も重要な情報のひとつです。外観写真（昼・夜・季節ごと）・内装・商品・サービス提供の様子・スタッフなど、来店後のイメージが湧く写真を戦略的に掲載します。特に競合との差別化ポイントを写真で明示することが重要です。例えば「個室がある」「駐車場が広い」「子連れOK」といった強みを写真で伝えることで、ターゲット顧客の来店意欲を高められます。",
  },
  {
    title: "最新情報投稿でリピーターを増やす",
    body: "GBPの最新情報投稿機能は、既存顧客のリピート来店促進にも有効です。季節限定メニューの案内・お得なキャンペーン情報・新サービスの紹介・イベント告知などを定期投稿することで、一度来店した顧客が再度プロフィールを見たときに「また行きたい」と感じる情報を提供します。投稿はGoogleマップ検索で表示されるため、新規顧客への訴求にも同時に機能します。週1〜2回の継続的な投稿が、アルゴリズム評価とリピート来店の両方を改善します。",
  },
];

const faqItems = [
  {
    q: "飲食店以外の業種でもMEOによる集客効果はありますか？",
    a: "はい、Googleマップで検索されるすべての地域ビジネスに有効です。美容室・整骨院・歯科・クリニック・リフォーム会社・不動産・士業など、地域に根差したビジネスであれば業種を問わず高い集客効果が期待できます。業種によって口コミ件数や来店頻度の特性が異なりますので、業種に合わせた戦略を立てることが重要です。",
  },
  {
    q: "開店したばかりですが、すぐにMEO対策を始めるべきですか？",
    a: "はい、開店初期からMEO対策を始めることを強くお勧めします。GBPは情報を蓄積するほど評価が高まるため、早く始めるほど早く成果が出ます。開店前にGBPを作成・最適化し、開店と同時に口コミ獲得の仕組みを整えることで、開店初月から集客効果を得ることができます。",
  },
  {
    q: "来店数の増加はどのように計測できますか？",
    a: "GBPインサイトで「電話発信クリック数」「ウェブサイトクリック数」「経路案内クリック数」「写真閲覧数」などを計測できます。これらはGoogleマップからの来店意欲を示す指標です。実際の来店数との相関を把握するため、POS情報や予約システムのデータと組み合わせた分析を推奨しています。",
  },
  {
    q: "Googleの広告（ローカルキャンペーン）はMEOと何が違いますか？",
    a: "MEOはオーガニック（自然）検索での順位改善であり、広告費は発生しません。Googleローカルキャンペーンは有料広告で、地図上・検索結果上に「広告」として表示されます。両者は相互補完的で、MEOで自然検索の上位表示を確保しつつ、広告で即時リーチを拡大する組み合わせが最も効果的です。",
  },
  {
    q: "複数の店舗があります。どの店舗のMEO対策を優先すべきですか？",
    a: "まず各店舗の現状（順位・口コミ・インサイト指標）と競合状況を分析し、投資対効果が最も高い店舗から優先的に対応することをお勧めします。一般的に、現在5〜10位圏内の店舗は比較的少ない施策で上位3位に入れる可能性があり、優先度が高いです。当社では多店舗対応プランで効率的に複数店舗を改善します。",
  },
];

export default function StoreMarketingPage() {
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
              <span style={{ color: "#0F172A" }}>店舗集客・来店導線設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Store Marketing
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              店舗集客・来店導線設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEOを活用した店舗集客は「検索→発見→来店」の流れをデジタルで最適化することです。
              Googleマップでの上位表示に加え、来店意欲を高めるコンテンツ・予約導線・口コミ管理を
              組み合わせ、来店数・予約数を継続的に増やします。
            </p>
          </div>
        </section>

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="店舗集客・来店導線設計" fill className="object-cover" sizes="100vw" />
        </section>

        {/* 来店につながるMEO設計 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO to Visit
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              来店につながるMEO設計
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleの調査によると、地域名＋業種で検索したユーザーの76%が24時間以内に来店しています。
                この「今すぐ行動する」という高い購買意欲を持つユーザーに対して、
                Googleマップでの上位表示は最も直接的なアプローチです。
                MEOは「知ってもらう」だけでなく「来店してもらう」ところまでの設計が必要です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                来店転換率を高めるために重要なのは「ユーザーの不安を取り除く」ことです。
                初めて訪れる店舗に対して、ユーザーは「どんな雰囲気か」「本当に自分に合うか」
                「アクセスは便利か」「予約は必要か」など多くの疑問を持ちます。
                写真・口コミ・営業時間・アクセス情報・Q&Aを充実させることで、
                これらの不安を事前に解消し、来店ハードルを大幅に下げることができます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、スマートフォンでの検索に最適化することも重要です。
                地域検索の80%以上はスマートフォンからで、
                電話ボタン・経路案内ボタン・予約ボタンがワンタップで使えることが
                来店転換率に直結します。モバイルファーストの視点での導線設計が不可欠です。
              </p>
            </div>
          </div>
        </section>

        {/* 来店導線の最適化 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Visit Optimization
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              来店導線の最適化
            </h2>
            <div className="max-w-3xl">
              {visitMeasures.map((item, i) => (
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

        {/* 2-col: 来店導線設計 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="来店導線設計・デジタルマーケティング" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Visit Funnel Design
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0F172A" }}>
                  来店導線設計
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    MEOで上位表示を達成しても、来店につながる導線が設計されていなければ集客効果は半減します。電話ボタン・経路案内・予約システムの最適化が来店転換率を決定します。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    地域検索の80%以上がスマートフォンからであるため、モバイルファーストの視点で「ワンタップで来店行動できる」設計が不可欠です。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    写真・口コミ・Q&Aを充実させて来店前の不安を解消し、予約・電話・経路案内のすべての導線を最適化することで来店数を継続的に増やします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="店舗集客・MEO集客に関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/review-management", label: "口コミ対策", desc: "高評価口コミを増やす" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
            { href: "/services/sns", label: "SNS運用", desc: "MEOと連動したSNS集客" },
          ]}
        />

        <PageContactCTA
          heading="店舗集客・来店数増加のご相談はサイプレスへ"
          body="Googleマップ経由の来店数増加・予約転換率改善を専門チームがサポートします。現在の集客状況を分析し、最適な来店導線設計をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
