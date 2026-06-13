import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO順位改善｜Googleマップ上位3位を獲得する方法｜株式会社サイプレス",
  description:
    "MEO順位改善でGoogleマップのローカルパック（上位3位）表示を達成。Googleが公式に発表する3要素（距離・関連性・知名度）を徹底解説。短期・長期の施策を明確に区分して説明。",
  keywords: ["MEO順位改善", "Googleマップ上位表示", "ローカルパック", "MEO対策順位", "Google地図上位", "MEO改善"],
  openGraph: {
    title: "MEO順位改善｜Googleマップ上位3位を獲得する方法｜株式会社サイプレス",
    description: "Googleマップのローカルパック上位表示を達成するためのMEO順位改善戦略。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-marketing.jp/meo/ranking" },
};

const rankingMeasures = [
  {
    title: "GBP情報の完全性の向上",
    body: "Googleビジネスプロフィールの情報完成度はMEO順位の関連性評価に直結します。ビジネス概要・サービス・商品・属性（駐車場・Wi-Fi・支払方法など）・営業時間・特別営業時間など、すべての入力可能な項目を100%埋めることが基本です。特に説明文は750文字の制限まで、ターゲットキーワードを自然に含めた内容で記入することが重要です。情報が不完全なプロフィールは、Googleが「信頼できる情報源」として評価しにくく、競合に対して不利になります。",
  },
  {
    title: "カテゴリ・キーワードの見直し",
    body: "ビジネスカテゴリはMEO順位に最も直接的に影響する要素のひとつです。主カテゴリはビジネスの核心的な業種を正確に表すものを選択し、副カテゴリには関連するサービス・業種を3〜5個追加します。競合分析を行い、上位表示されている競合のカテゴリ設定を参考にしながら、自社に最適な組み合わせを選定します。GBPの説明文・サービス欄・投稿にも、ターゲットとする地域名とサービスキーワードを自然な形で組み込みます。",
  },
  {
    title: "口コミ件数・評価スコアの改善",
    body: "口コミはMEO順位の「知名度（Prominence）」評価に大きく影響します。口コミの総件数・平均評価スコア・最新性（最後の口コミがいつか）・返信率の4要素がすべて重要です。特に新規口コミの継続的な獲得は、アルゴリズム評価を維持・向上させるために不可欠です。目標設定の際は競合上位ビジネスの口コミ件数を分析し、それを上回る計画を立てます。口コミ獲得の仕組み化（QRコード・LINE誘導・スタッフ声かけ）で月5〜20件の獲得を目指します。",
  },
  {
    title: "写真・投稿の定期更新",
    body: "写真と最新情報投稿の定期更新は、Googleに「アクティブなビジネス」を示す重要なシグナルです。Googleは活動的に更新されているビジネスを信頼性が高いと評価し、ランキング向上に反映させます。写真は月2〜4枚を目標に継続的に追加し、最新情報投稿は週1回以上を目標とします。投稿内容にはターゲットキーワードを自然に含め、季節イベント・新メニュー・お知らせなど来店意欲を高めるコンテンツを発信します。",
  },
  {
    title: "ウェブサイトとの連携・SEO改善",
    body: "MEOとSEOは相互に影響し合います。ウェブサイトのローカルSEO対策（LocalBusiness構造化データの実装・地域キーワードの適切な使用・エリアページの作成・Googleマップの埋め込み）を行うことで、GBPのウェブサイトへのリンクが評価されMEO順位にも好影響を与えます。また、サイトの権威性・ドメイン評価の向上はMEOの知名度評価にも反映されます。MEOとSEOを連動させることで相乗効果が生まれます。",
  },
  {
    title: "NAP情報の一致確認",
    body: "NAP（Name・Address・Phone）情報の一貫性はMEO対策の基本原則です。Googleビジネスプロフィール・自社ウェブサイト・各種ビジネスディレクトリ（食べログ・ホットペッパー・yelp・業界サイトなど）に掲載されているビジネス名・住所・電話番号が完全に一致している必要があります。表記の揺れ（「1-2-3」と「1丁目2番3号」の混在など）も検索エンジンに混乱を与えます。サイテーション（外部サイトへのNAP掲載）の整合性を定期的に確認・修正します。",
  },
];

const faqItems = [
  {
    q: "MEO上位表示まで何ヶ月かかりますか？",
    a: "競合状況・エリア・業種によって異なります。競合が少ない業種・エリアでは1〜2ヶ月で改善が見られることもありますが、競合が多い都市部では3〜6ヶ月が目安です。GBP最適化の即時対応で数週間以内に効果が現れることもあります。継続的な取り組みが安定した上位表示には必要です。",
  },
  {
    q: "ローカルパック（上位3件）に必ず入れますか？",
    a: "保証はできませんが、適切な施策を継続することで競合比で上位表示確率が大幅に向上します。当社の支援実績では、6ヶ月の継続対策でローカルパック表示達成率が94%です。まず競合分析を行い、現実的な目標と達成戦略をご提案します。",
  },
  {
    q: "順位が急に下がりました。原因はなんですか？",
    a: "主な原因として、Googleのアルゴリズム変更・競合の強化・GBP情報の変更・口コミの急減・ウェブサイトの技術的問題などが考えられます。まず原因を特定するために、変化が起きた時期前後の施策・外部環境の変化を分析します。当社では異常検知とアラートの仕組みを設けており、早期発見・対応が可能です。",
  },
  {
    q: "競合が多い都市部でも上位表示できますか？",
    a: "はい、都市部でも適切な戦略と継続的な改善で上位表示は可能です。ただし、施策の優先度・深度・継続期間は競合状況によって異なります。まず競合分析で上位表示している競合のプロフィール・口コミ・ウェブサイトを調査し、勝てる領域を特定することが重要です。",
  },
  {
    q: "MEO対策をやめたら順位は下がりますか？",
    a: "競合が継続的に施策を行っている場合、対策をやめると相対的に順位が下がるリスクがあります。特に競争の激しい都市部の業種では、継続的な口コミ獲得・投稿更新・情報管理が順位維持に必要です。ただし、しっかりと基盤を構築した後は、メンテナンス費用を抑えながら維持することも可能です。",
  },
];

export default function MeoRankingPage() {
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
              <span style={{ color: "#0F172A" }}>MEO順位改善</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Ranking
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A" }}>
              MEO順位改善
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              Googleマップの「ローカルパック」（上位3件の地図表示）への表示は、
              地域ビジネスにとって最大のデジタル集客チャンスです。
              クリック率・来店率ともに突出して高いこのポジションを獲得するための
              具体的な施策を解説します。
            </p>
          </div>
        </section>

        {/* MEOの順位を決める3要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Google&apos;s 3 Factors
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              MEOの順位を決める3要素
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Googleは公式に、ローカル検索の順位を決める要素として「距離（Distance）」「関連性（Relevance）」
                「知名度（Prominence）」の3つを発表しています。MEO対策はこの3要素を理解したうえで施策を設計します。
              </p>
            </div>
            <div className="max-w-3xl mt-10">
              {[
                { num: "01", title: "距離（Distance）", body: "検索ユーザーの現在地またはクエリで指定された場所からビジネスまでの距離です。店舗の物理的な場所は変えられませんが、複数エリアへの対応（エリアページ制作・サービスエリアの設定）で対応可能な検索範囲を広げることができます。ターゲットエリアを明確にした施策設計が重要です。" },
                { num: "02", title: "関連性（Relevance）", body: "ビジネスがユーザーの検索クエリにどれだけマッチしているかです。GBPのカテゴリ設定・説明文・サービス情報・投稿コンテンツに含まれるキーワードが評価されます。「美容室」で検索したユーザーに対して「美容室」カテゴリに設定されたGBPが高く評価されるように、カテゴリとキーワードの最適化が関連性を高めます。" },
                { num: "03", title: "知名度（Prominence）", body: "ビジネスがオンライン上でどれだけ認知されているかです。口コミの件数・評価スコア・外部サイトからの被リンク・サイテーション（NAP情報の掲載）・SEO評価などが影響します。リアルな知名度（チェーン店・老舗など）もGoogleは考慮しますが、中小企業でも口コミ獲得・外部サイト掲載・SEO改善で知名度を高めることができます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
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

        {/* 順位改善の施策 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Improvement Measures
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0F172A" }}>
              順位改善の施策
            </h2>
            <div className="max-w-3xl">
              {rankingMeasures.map((item, i) => (
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

        {/* 短期 vs 長期 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Timeline Expectations
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0F172A" }}>
              短期で改善できること vs 長期で必要なこと
            </h2>
            <div className="max-w-3xl grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[15px] mb-4" style={{ color: "#0F172A" }}>1〜2ヶ月で効果が出やすい施策</h3>
                <ul className="space-y-3">
                  {[
                    "GBP情報の完全入力（カテゴリ・説明文・属性）",
                    "NAP情報の統一・修正",
                    "写真の一括追加（20〜50枚）",
                    "営業時間・特別営業時間の正確な設定",
                    "サービス・メニュー情報の充実",
                    "Q&A欄の整備",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px]" style={{ color: "#374151" }}>
                      <span className="text-[10px] mt-1.5 shrink-0" style={{ color: "#9CA3AF" }}>▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[15px] mb-4" style={{ color: "#0F172A" }}>3〜6ヶ月以上必要な施策</h3>
                <ul className="space-y-3">
                  {[
                    "口コミの継続的な獲得（月5件以上）",
                    "週1回以上の投稿継続",
                    "ウェブサイトのSEO改善・エリアページ制作",
                    "外部サイトのサイテーション整備",
                    "競合との差別化コンテンツの蓄積",
                    "ドメイン権威性の向上",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px]" style={{ color: "#374151" }}>
                      <span className="text-[10px] mt-1.5 shrink-0" style={{ color: "#9CA3AF" }}>▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO順位改善に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "MEO対策の全体戦略" },
            { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
            { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
          ]}
        />

        <PageContactCTA
          heading="MEO順位改善のご相談はサイプレスへ"
          body="競合分析から始め、現在の順位と改善余地を明確にしたうえで施策をご提案します。ローカルパック上位表示を目指した戦略的なMEO対策を専門チームが支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
