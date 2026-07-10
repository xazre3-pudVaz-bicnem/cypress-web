import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_19_44.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/ranking" },
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
    a: "保証はできませんが、適切な施策を継続することで競合比で上位表示確率が大幅に向上します。まず競合分析を行い、現実的な目標と達成戦略をご提案します。",
  },
  {
    q: "順位が急に下がりました。原因はなんですか？",
    a: "主な原因として、Googleのアルゴリズム変更・競合の強化・GBP情報の変更・口コミの急減・ウェブサイトの技術的問題などが考えられます。まず原因を特定するために、変化が起きた時期前後の施策・外部環境の変化を分析します。異常が検知されたら早期に原因究明と対応を行うことが重要です。",
  },
  {
    q: "競合が多い都市部でも上位表示できますか？",
    a: "はい、都市部でも適切な戦略と継続的な改善で上位表示は可能です。ただし、施策の優先度・深度・継続期間は競合状況によって異なります。まず競合分析で上位表示している競合のプロフィール・口コミ・ウェブサイトを調査し、勝てる領域を特定することが重要です。",
  },
  {
    q: "MEO対策をやめたら順位は下がりますか？",
    a: "競合が継続的に施策を行っている場合、対策をやめると相対的に順位が下がるリスクがあります。特に競争の激しい都市部の業種では、継続的な口コミ獲得・投稿更新・情報管理が順位維持に必要です。ただし、しっかりと基盤を構築した後は、メンテナンス費用を抑えながら維持することも可能です。",
  },
  {
    q: "口コミの返信はMEO順位に影響しますか？",
    a: "口コミへの返信はGoogleが「オーナーとして積極的に関与している」と評価するシグナルになります。返信率が高いほどアクティブなビジネスとして認識され、順位にプラスの影響を与えます。また返信内容にキーワードを自然に含めることで関連性評価にも貢献します。",
  },
  {
    q: "Googleマップの写真はどのくらい必要ですか？",
    a: "競合分析によって変わりますが、一般的に50枚以上を目安にします。外観・内観・スタッフ・商品・サービス・ロゴ・カバーの各カテゴリをバランスよく揃えることが重要です。月2〜4枚を継続的に追加することで「アクティブ」の評価が維持されます。",
  },
  {
    q: "GBPのカテゴリはいくつ設定できますか？",
    a: "主カテゴリ1つ＋副カテゴリ最大9つの合計10カテゴリまで設定できます。主カテゴリはビジネスの最も核心的な業種を選び、副カテゴリには提供するサービス・業種を追加します。競合の上位ビジネスがどのカテゴリを設定しているかを参考に最適化します。",
  },
  {
    q: "GBPの説明文にキーワードを詰め込んでもいいですか？",
    a: "キーワードの詰め込みはGoogleのガイドライン違反になる可能性があり、ペナルティのリスクがあります。ターゲットキーワードを自然な文章の中に組み込みながら、ユーザーに価値ある情報を提供する文章を作成することが正しいアプローチです。",
  },
  {
    q: "MEO対策とSEO対策はどう違いますか？",
    a: "MEO対策はGoogleマップ（ローカルパック）での表示を改善することを目的とし、GBPの最適化が中心です。SEO対策はGoogle検索の通常結果（オーガニック）での表示を改善するもので、ウェブサイトのコンテンツ・技術的最適化が中心です。地域ビジネスでは両者を連動させることで相乗効果が生まれます。",
  },
  {
    q: "NAP情報の確認はどこを調べればいいですか？",
    a: "Googleビジネスプロフィール・自社ウェブサイト（ヘッダー・フッター・お問い合わせページ）・食べログ・ホットペッパー・じゃらん・各SNSプロフィール・業界専門サイトなどを確認します。表記の揺れや古い情報が残っていないかを定期的にチェックします。",
  },
  {
    q: "GBP投稿の効果はどのくらいありますか？",
    a: "投稿自体が直接的に順位を大幅に上げる要素ではありませんが、ビジネスのアクティブ度を示すシグナルとして機能します。また、投稿がGoogleマップや検索結果に表示されるため、ユーザーへのリーチと来店意欲の向上に貢献します。週1回以上の継続投稿を推奨します。",
  },
  {
    q: "競合の口コミ数が多すぎて追いつけません。どうすればいいですか？",
    a: "口コミ獲得の仕組みを整備することが重要です。QRコードの掲示・LINE公式アカウントでの誘導・スタッフの声かけ・サンキューカードへの記載など複数の導線を用意します。月5〜10件ペースで継続すれば、1〜2年でかなりの差を縮められます。数の差よりも評価スコアと返信率で差別化することも有効です。",
  },
  {
    q: "Googleマップの順位はエリアによって違いますか？",
    a: "はい、ローカル検索の結果は検索ユーザーの現在地によって変化します。同じキーワードでも、ユーザーが店舗から近い場所にいるほど上位表示されやすくなります。複数エリアをターゲットにする場合は、サービスエリアの設定や地域ごとのランディングページ制作が有効です。",
  },
  {
    q: "スパムや不正な口コミへの対処法はありますか？",
    a: "Googleビジネスプロフィールの管理画面から「不適切なコンテンツを報告」でフラグを立てることができます。フラグを立てた後もGoogleが削除するとは限らないため、不当な低評価口コミには丁寧に事実を説明する返信を行うことも重要です。悪意ある口コミに対する対応マニュアルを用意しておくと安心です。",
  },
  {
    q: "Googleビジネスプロフィールのオーナー確認方法は？",
    a: "ハガキ（郵送）・電話・SMS・メール・ライブビデオ通話など複数の方法があります。新規ビジネスの場合はハガキ確認が基本ですが、業種・条件によって他の方法が選択できます。オーナー確認が完了してはじめてGBPの編集・投稿・インサイトデータの確認が可能になります。",
  },
  {
    q: "MEO対策を外注するメリットは何ですか？",
    a: "専門ツールを使った競合分析・定期的な投稿管理・口コミ獲得の仕組み化・アルゴリズム変更への対応など、継続的な対応が必要なMEO対策をプロに任せることで、本業に集中しながら成果を追求できます。自社対応では見落としがちな細かい設定ミスや最新アップデートへの対応も期待できます。",
  },
  {
    q: "ローカルパックに表示されない理由として多いものは何ですか？",
    a: "GBP情報の不完全さ・NAP不一致・カテゴリの誤設定・口コミ数の絶対的な不足・投稿停止・写真不足・競合との差が大きい、などが主な原因です。診断を行うことでどの要因が最も影響しているかを特定し、優先して対処することが重要です。",
  },
  {
    q: "MEO対策の費用感はどのくらいですか？",
    a: "対応範囲・競合状況・エリアによって異なります。基本的なGBP最適化・投稿管理・口コミ対応を含む月次管理サービスが中心となります。初期診断・競合分析・初期設定と、月次の継続管理に分けて費用が発生することが多いです。詳しくはサービスページまたはお問い合わせにてご確認ください。",
  },
  {
    q: "GBPの属性設定とは何ですか？",
    a: "属性とは「駐車場あり」「Wi-Fi完備」「クレジットカード可」「バリアフリー対応」「テイクアウト可」など、ビジネスの設備・サービスを示す詳細情報です。業種ごとに設定できる属性が異なり、ユーザーが検索時に絞り込みに使う場合もあります。設定漏れがあると競合との差別化機会を失います。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の全体戦略と基礎" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "MEO対策の根幹ツール" },
  { href: "/meo/local-keyword", label: "地域キーワード設計", desc: "地域集客のキーワード戦略" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・管理の方法" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/meo-audit", label: "MEO診断・監査", desc: "現状診断と改善優先度の特定" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック攻略法" },
  { href: "/meo/nap", label: "NAP統一対策", desc: "名称・住所・電話番号の整合性" },
  { href: "/meo/gbp-posting", label: "GBP投稿運用", desc: "効果的な投稿戦略と頻度" },
  { href: "/meo/competitor-analysis", label: "競合MEO分析", desc: "競合と差をつける分析手法" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "MEOと連動するSEO施策" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化の基礎" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスのSEO戦略" },
  { href: "/seo/schema-markup", label: "構造化データ実装", desc: "LocalBusinessスキーマの設定" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索への最適化対策" },
  { href: "/industry/restaurant", label: "飲食店のMEO対策", desc: "飲食業界の特化施策" },
  { href: "/industry/beauty", label: "美容室・サロンのMEO", desc: "美容業界の集客施策" },
  { href: "/industry/dental", label: "歯科医院のMEO対策", desc: "歯科クリニックの集客" },
  { href: "/industry/clinic", label: "クリニックのMEO対策", desc: "医療機関の地域集客" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京エリアの競合と施策" },
  { href: "/area/osaka", label: "大阪のMEO対策", desc: "大阪エリアの競合と施策" },
  { href: "/blog/meo", label: "MEO対策コラム", desc: "最新情報と実践ノウハウ" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずは現状診断から" },
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
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0F172A", fontFamily: "var(--font-serif)" }}>
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

        {/* Full-width image after hero */}
        <section className="relative" style={{ height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_19_44.jpg" alt="MEO順位改善・アナリティクスダッシュボード" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "Googleが公式に定めるMEO順位決定の3要素（距離・関連性・知名度）の詳細",
                "ローカルパック（上位3件）に表示されるために必要な具体的施策の全体像",
                "GBPの完全性・カテゴリ・写真・投稿など各要素が順位に与える影響の仕組み",
                "順位が下がる原因として多い問題パターンとその診断・修正アプローチ",
                "業種別（飲食・美容・歯科・整骨院など）のMEO順位改善ポイントの違い",
                "施策実施から効果確認までのステップと成果測定に使うべきKPI一覧",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-[15px] shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEOの順位を決める3要素 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Google&apos;s 3 Factors
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
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
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 順位改善の施策 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Improvement Measures
            </p>
            <h2 className="font-black text-[28px] mb-12" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              順位改善の施策
            </h2>
            <div className="max-w-3xl">
              {rankingMeasures.map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 短期 vs 長期 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Timeline Expectations
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              短期で改善できること vs 長期で必要なこと
            </h2>
            <div className="max-w-3xl grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a" }}>1〜2ヶ月で効果が出やすい施策</h3>
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
                <h3 className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a" }}>3〜6ヶ月以上必要な施策</h3>
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

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Problems
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO順位が思うように上がらないビジネスに共通して見られる課題と、その背景にある原因を整理します。
              自社のGBPが当てはまっていないか確認してください。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  title: "ビジネス情報の不完全さ",
                  body: "GBPの入力項目が半分も埋まっていないケースは珍しくありません。説明文が短い・属性が未設定・サービス情報がない状態では、Googleが関連性を正確に評価できず、競合に劣後します。",
                },
                {
                  title: "口コミ評価の低さ",
                  body: "口コミの平均評価が3.5未満だったり、低評価口コミへの返信がなかったりする場合、ユーザーの信頼性評価だけでなくGoogleのアルゴリズム評価にも影響します。まず返信対応と新規高評価口コミの獲得を優先します。",
                },
                {
                  title: "投稿頻度の低さ",
                  body: "最後の投稿が3ヶ月以上前というGBPは「休止中」と判断されやすく、アクティビティ評価が低下します。週1回以上の投稿を継続することで、Googleに「稼働中のビジネス」を示すことができます。",
                },
                {
                  title: "写真不足",
                  body: "写真が5枚以下のGBPは、競合と比較して著しく不利です。外観・内観・商品・スタッフ写真をバランスよく揃えることで、ユーザーへの訴求力と検索評価の両方が向上します。",
                },
                {
                  title: "NAP不一致",
                  body: "自社サイト・GBP・食べログ・ホットペッパーなどで店舗名・住所・電話番号の表記が異なると、Googleが同一ビジネスと認識できず信頼性評価が下がります。全媒体の表記を統一することが基本です。",
                },
                {
                  title: "エリアへの関連性不足",
                  body: "GBPにエリア名が含まれていない・サービスエリアが未設定・地域名を含む投稿がないと、地域検索での関連性スコアが低くなります。説明文・投稿・サービス欄に地域名を組み込むことが重要です。",
                },
                {
                  title: "ウェブサイトとの連携不足",
                  body: "GBPにウェブサイトURLが登録されていない・URLが404エラー・LocalBusinessスキーマが未実装という状態では、MEOとSEOの相乗効果が生まれません。ウェブサイトとGBPの連携を強化することで評価が高まります。",
                },
                {
                  title: "競合の方が活発",
                  body: "自社が施策を停止している間に競合が口コミを増やし・写真を追加し・投稿を続けていると、相対的に自社の評価が下がります。MEO対策は継続的な取り組みが前提であり、止めた瞬間から差がつき始めます。",
                },
                {
                  title: "レビュー返信なし",
                  body: "口コミへの返信はオーナーとしての積極性を示す重要なシグナルです。返信がないビジネスはGoogleからの評価が低くなるだけでなく、潜在顧客にも「管理されていない」という印象を与えます。",
                },
                {
                  title: "属性未設定",
                  body: "「バリアフリー対応」「子ども連れ歓迎」「駐車場あり」「Wi-Fi完備」などの属性が未設定だと、該当する絞り込み検索で表示されません。業種に合わせた属性をすべて設定することで表示機会が広がります。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO順位改善の基本は共通していますが、業種によって優先すべき施策・注意点が異なります。
              自社の業種に合ったアプローチで効率的に改善します。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  industry: "飲食店",
                  point: "メニュー情報・写真の充実度が他業種より強く順位に影響します。料理写真は月4枚以上を継続して追加し、Google フードオーダー連携も検討します。口コミ平均4.0以上を維持することが競争優位の基本です。",
                },
                {
                  industry: "美容室",
                  point: "施術メニュー・価格帯・スタイリスト紹介の充実が重要です。Webサイトの予約動線とGBPの「今すぐ予約」ボタンを連携させることでCVRも向上します。ビフォーアフター写真の定期追加が口コミ獲得にも貢献します。",
                },
                {
                  industry: "歯科医院",
                  point: "「一般歯科」「矯正歯科」「審美歯科」など専門分野ごとのカテゴリ設定が重要です。医療機関は口コミの誘導方法に制約があるため、自然な形での口コミ獲得導線を設計します。初診予約フローとGBPの連携も必須です。",
                },
                {
                  industry: "整骨院・接骨院",
                  point: "保険適用の有無・得意症状（腰痛・肩こり・交通事故など）を説明文と投稿に明記することで関連性が高まります。近隣に競合が多い傾向があるため、口コミ数と平均評価の維持が差別化の核になります。",
                },
                {
                  industry: "不動産",
                  point: "取り扱いエリアをサービスエリア設定と説明文に明確に記載します。「○○区 賃貸」「○○駅 マンション」などエリア×物件種別のキーワードを投稿・説明文に組み込みます。実績・成約数の紹介が信頼性向上に有効です。",
                },
                {
                  industry: "リフォーム",
                  point: "施工事例写真を定期的にGBPに追加することが最重要施策です。「キッチンリフォーム」「外壁塗装」など工事種別×エリアのキーワードを意識した投稿を継続し、施工後のお客様からの口コミ獲得フローを整備します。",
                },
                {
                  industry: "学習塾",
                  point: "対応学年・得意科目・指導スタイル（個別・集団）の明記が関連性向上のポイントです。入試・定期テストシーズンに合わせた投稿で季節需要を取り込みます。保護者向けの口コミ文例を用意してスムーズな口コミ獲得を促進します。",
                },
                {
                  industry: "クリニック",
                  point: "診療科目ごとのカテゴリ・属性設定を正確に行います。オンライン診療・予約システムとの連携で「今すぐ予約」ボタンを活用します。医療広告ガイドラインに沿った表現で口コミ返信・投稿を行い、信頼性を高めます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.point}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Implementation Flow
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              実装・改善フロー
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO順位改善を体系的に進めるための10ステップです。
              この順序で対応することで、効果を最大化しながら無駄のない改善が実現できます。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  step: "現状順位確認",
                  detail: "主要キーワード（「業種」「地域名＋業種」「サービス名＋地域名」）でのローカルパック表示順位を記録します。ツール（Googleマップ目視・PlePer・GEOgrid等）を使い、エリア別・キーワード別の現状を把握します。",
                },
                {
                  step: "競合分析",
                  detail: "同じキーワードで上位3位に表示されている競合のGBPを詳細に分析します。口コミ数・評価・写真枚数・投稿頻度・カテゴリ・サービス情報・ウェブサイトを調べ、自社との差を定量化します。",
                },
                {
                  step: "GBP完全性チェック",
                  detail: "GBPの全入力項目を確認し、空欄・不正確な情報・古い情報を特定します。説明文の文字数・属性設定・サービス一覧・商品情報・Q&A・予約URL・ウェブサイトURLの整合性を確認します。",
                },
                {
                  step: "NAP統一",
                  detail: "GBP・自社サイト・各種ディレクトリ（食べログ・ホットペッパー・じゃらん等）・SNSに掲載されているビジネス名・住所・電話番号の表記を完全に統一します。表記の揺れを一つひとつ修正します。",
                },
                {
                  step: "カテゴリ最適化",
                  detail: "競合分析をもとに主カテゴリ・副カテゴリを見直します。不要なカテゴリを削除し、自社のサービスに合致した最適なカテゴリ構成に再設定します。カテゴリ変更後は数週間かけて効果を観察します。",
                },
                {
                  step: "写真追加",
                  detail: "外観・内観・商品・スタッフ・ロゴ・カバー写真を一括で追加し、競合と同等以上の枚数を確保します。高解像度・明るい写真を選び、ファイル名にキーワードを含めることも意識します。",
                },
                {
                  step: "投稿再開",
                  detail: "停止していた投稿を再開し、週1回以上のペースで継続します。最新情報・イベント・キャンペーン・スタッフ紹介などバリエーションを持たせながら、ターゲットキーワードを投稿文に自然に含めます。",
                },
                {
                  step: "口コミ依頼",
                  detail: "口コミ獲得の仕組みを整備します。QRコードの掲示・スタッフの声かけトーク・LINE公式アカウントでのフォローアップ・サンキューカードへの記載など複数の導線から、月5〜10件の新規口コミ獲得を目指します。",
                },
                {
                  step: "被リンク獲得",
                  detail: "地域の商工会・業界サイト・地域ポータルへの掲載申請を行い、ビジネスへのサイテーション（NAP掲載）と被リンクを増やします。ウェブサイトのブログ・プレスリリースを通じた自然な被リンク獲得も並行して進めます。",
                },
                {
                  step: "継続モニタリング",
                  detail: "月次で順位・インプレッション・クリック数・電話タップ数・ルートタップ数・口コミ数を記録し、施策の効果を定量的に評価します。順位変動があった場合は原因を分析し、次月の施策に反映するPDCAを回します。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPI Metrics
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO対策の効果を正確に把握するために、定期的に確認すべきKPIを整理しました。
              各指標の確認場所と目安も合わせて記載します。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  kpi: "ローカルパック表示順位",
                  detail: "主要キーワードでのGoogleマップ上の表示順位です。PlePer・GEOgrid・Googleマップ目視などで定期確認します。月次でキーワードごとに記録し、推移を追跡します。",
                },
                {
                  kpi: "ビジネス情報クリック数",
                  detail: "GBPインサイト（パフォーマンス画面）で確認できる、ユーザーがビジネス情報（ウェブサイト・電話・住所）をクリックした回数です。改善施策の効果が最初に現れる指標のひとつです。",
                },
                {
                  kpi: "検索表示回数（インプレッション）",
                  detail: "GBPが検索結果・Googleマップに表示された延べ回数です。GBPインサイトで確認します。施策開始後1〜2ヶ月で増加傾向が確認できれば、関連性評価が高まっているサインです。",
                },
                {
                  kpi: "電話・ルートタップ数",
                  detail: "GBPから電話番号をタップした回数・経路案内（ルート）をリクエストした回数です。来店・問い合わせに直結する行動指標で、実質的な集客効果を測る最重要KPIです。",
                },
                {
                  kpi: "口コミ評価スコア",
                  detail: "Googleマップに表示される星1〜5の平均評価です。GBP管理画面で確認します。平均4.0以上を維持することが理想で、月次の変動と新規口コミの内容を記録します。",
                },
                {
                  kpi: "写真閲覧数",
                  detail: "GBPインサイトで確認できる、ユーザーがGBPの写真を閲覧した回数です。写真の追加直後に増加する傾向があり、写真の魅力度と量が反映される指標です。",
                },
                {
                  kpi: "ウェブサイト流入数",
                  detail: "GBPのウェブサイトリンクからの流入数です。Googleアナリティクス（参照元：google / medium：organic）またはGBPインサイトで確認します。MEOの改善がウェブサイトへの送客にどう貢献しているかを測ります。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 2-col: 順位を決める3要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  3 Ranking Factors
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
                  順位を決める3要素
                </h2>
                <div className="space-y-4">
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    Googleは公式に「距離（Distance）」「関連性（Relevance）」「知名度（Prominence）」の3要素でローカル検索の順位を決定すると発表しています。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    距離は物理的な立地ですが、サービスエリアの設定や複数エリアへの対応で影響を最小化できます。関連性はGBPのカテゴリ・キーワード設定で高められます。
                  </p>
                  <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                    知名度は口コミ・外部サイト掲載・SEO評価で向上します。この3要素を同時に最適化することが、ローカルパック上位3位への最短経路です。
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 text-[14px] font-semibold tracking-wide"
                    style={{ background: "#0F172A", color: "#FFFFFF" }}
                  >
                    無料相談はこちら
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ height: "360px" }}>
                <Image src="/ChatGPT Image 2026年6月13日 19_14_54.jpg" alt="MEO順位改善の分析・グラフとミーティング" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO順位改善に関するよくある質問" bgColor="#FFFFFF" />

        <RelatedPages links={relatedLinks} />

        <PageContactCTA
          heading="MEO順位改善のご相談はサイプレスへ"
          body="競合分析から始め、現在の順位と改善余地を明確にしたうえで施策をご提案します。ローカルパック上位表示を目指した戦略的なMEO対策を専門チームが支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
