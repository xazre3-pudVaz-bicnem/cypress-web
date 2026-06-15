import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【飲食店のMEO・Web集客】Googleマップ上位表示で来店数を増やす｜株式会社サイプレス",
  description: "飲食店のGoogleマップ上位表示・Instagram運用・口コミ獲得・ランチ・ディナー別集客設計など、飲食業に特化したWebマーケティング。来店数増加の仕組みをトータルで構築します。",
  keywords: ["飲食店 MEO対策", "飲食店 集客", "飲食店 ホームページ", "飲食店 Instagram", "飲食店 口コミ", "飲食店 Googleマップ"],
  openGraph: {
    title: "【飲食店のMEO・Web集客】Googleマップ上位表示で来店数を増やす｜株式会社サイプレス",
    description: "飲食店専門のWebマーケティング。MEO・Instagram・口コミ対策で来店数を最大化します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/restaurant" },
};

const faqItems = [
  {
    q: "飲食店でMEO対策を始めるには何から着手すればいいですか？",
    a: "まずGoogleビジネスプロフィール（GBP）のオーナー確認と基本情報の整備から始めます。住所・電話番号・営業時間・定休日・メニュー・写真を完全に入力し、口コミ獲得の仕組みを設計することが最初のステップです。競合店舗の状況を分析した上で優先施策を決めると、投資対効果を最大化できます。",
  },
  {
    q: "InstagramとGoogleマップはどちらを優先すべきですか？",
    a: "「今すぐ食べたい」という即時来店にはGoogleマップ（MEO）が最も効果的です。Instagramはファン作り・リピーター育成・新メニューの告知に強みがあります。MEOで新規来客を獲得し、Instagramでリピーターを育てる組み合わせが理想的な戦略です。",
  },
  {
    q: "口コミが少ないのですが、どうやって増やせますか？",
    a: "会計時にGoogleの口コミ投稿ページに直接アクセスできるQRコードを作成し、卓上POP・レシート・名刺などに掲示する方法が最も効果的です。口コミ依頼はGoogleのガイドライン範囲内で有効です。全件返信することで新規ユーザーへの信頼度も向上します。",
  },
  {
    q: "食べログの評点が低いのですが改善できますか？",
    a: "食べログの評点は独自アルゴリズムで計算されており直接操作はできませんが、口コミの質と量を継続的に改善し、写真を更新することで評点の自然な改善を促せます。また、Google検索での自社サイト・Googleマップを強化し、食べログ以外からの集客を増やす戦略も有効です。",
  },
  {
    q: "MEO対策の効果はどのくらいで出ますか？",
    a: "GBPの基本最適化（情報整備・写真追加・初期口コミ獲得）は2〜4週間で効果が現れることがあります。安定した上位表示には3〜6ヶ月の継続的な取り組みが必要です。競合が少ないエリアや業態では早期に成果が出るケースもあります。",
  },
  {
    q: "ランチとディナーで集客の方法は変えるべきですか？",
    a: "はい。ランチは「近くのランチ」「○○駅 ランチ」という即時検索が多く、GBPのランチメニュー登録・写真充実が重要です。ディナーは「記念日 レストラン」「接待 個室」など目的・シーン検索が多く、メニューページや予約導線の設計が効果的です。ホームページでもランチとディナーを別ページに分けることを推奨します。",
  },
  {
    q: "飲食店のWebサイトはGoogleマップとどう連携させますか？",
    a: "GBPのウェブサイトリンクに自社ホームページを設定し、メニュー・予約ページへのリンクを整備することでGoogleマップからの直接予約・来店につながります。ホームページのNAP情報（店名・住所・電話）をGBPと一致させることがMEO評価向上にも重要です。",
  },
  {
    q: "テイクアウト・デリバリーの集客にもMEOは有効ですか？",
    a: "はい。GBPにテイクアウト・デリバリー対応を明記し、Uber Eats・出前館などの配達プラットフォームリンクを追加することで検索からデリバリー注文への導線を整備できます。「○○駅 テイクアウト」「○○区 弁当 配達」などの検索にも対応できます。",
  },
  {
    q: "チェーン店と個人経営で集客戦略は違いますか？",
    a: "個人経営・小規模飲食店はGoogleマップのMEO対策が特に有効です。大手チェーンに比べて地域競合が少ない場合が多く、口コミの一つひとつが「顔の見えるオーナーへの評価」として価値を持ちます。地元密着・手作り感・オーナーの個性を前面に出した集客が差別化ポイントになります。",
  },
  {
    q: "飲食店のInstagramを毎日更新するのは難しいのですが、代行してもらえますか？",
    a: "はい、サイプレスではInstagramの運用代行サービスを提供しています。料理写真の撮影ディレクション・キャプション作成・ハッシュタグ設計・投稿スケジュール管理まで一括してサポートします。まずは週3〜5投稿からスタートし、エンゲージメントを見ながら投稿頻度を調整します。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/meo/restaurant-meo", label: "飲食店のMEO対策", desc: "飲食店特化のGoogleマップ戦略" },
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "飲食店向けInstagram戦略" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア対応の集客施策" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区・亀有・金町エリア対応" },
  { href: "/industries/clinic", label: "クリニック・整骨院の集客", desc: "医療機関のWeb集客" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/web-design", label: "ホームページ制作", desc: "飲食店向けサイト制作" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容室・ヘアサロンの集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
];

export default function RestaurantIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "飲食店のWeb集客・MEO対策", "item": "https://www.cypress-all.co.jp/industries/restaurant" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>飲食店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Restaurant Marketing
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              飲食店のMEO対策・<br />Web集客戦略
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              飲食店の集客は「Googleマップ」「Instagram」「口コミ」の三位一体で成立します。スマートフォンで「近くのランチ」「今夜の居酒屋」と検索したユーザーが最初に目にするのはGoogleマップのローカルパック（上位3件）です。ここに表示されているかどうかが、来店数の差に直結しています。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              多くの飲食店がGoogleビジネスプロフィールを設定しただけで放置し、写真更新・口コミ返信・定期投稿・メニュー情報の整備が止まっています。これらを継続して積み重ねるだけで、競合に大きな差をつけることができます。サイプレスは飲食業の集客特性を熟知した上で、MEO・SNS・口コミ対策をトータルで支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              個人経営の小さなカフェから、複数店舗を持つ居酒屋チェーンまで、飲食店の規模・業態・立地に合わせた集客戦略を設計します。まずは現在のGoogleマップの状況と競合との比較を無料で分析します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (1).png"
            alt="和食レストランのカウンター"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              飲食店が抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GoogleマップのGBPが未最適化のまま放置されている", b: "Googleビジネスプロフィールを登録しただけで、営業時間・定休日・メニュー・写真・属性情報が不完全なまま放置されているケースが多数あります。情報が不足しているGBPは検索順位が下がりやすく、来店判断を妨げます。競合が情報を整備するだけで順位を逆転させることができます。" },
                { n: "02", t: "口コミへの返信がなく、悪い印象を与えている", b: "口コミは返信しないことで「誠実でない店」という印象を与えてしまいます。特にネガティブな口コミに適切な返信がないと、見込み客が来店をためらいます。口コミ件数・平均評価・返信率はMEO順位にも影響するため、継続的な口コミ管理が不可欠です。" },
                { n: "03", t: "写真が少ない・古い・質が低く来店意欲を下げている", b: "GBPの写真は来店前の「下見」として機能します。写真が少ない・古い・スマートフォンで撮った暗い写真しかない状態では、ユーザーが他店を選んでしまいます。週次での写真更新と、プロクオリティの料理・内観・外観写真の充実が来店決定率を高めます。" },
                { n: "04", t: "予約システムが未整備でせっかくの来客を逃している", b: "GBPから予約できる仕組みがない・電話のみの予約対応では、特に若い世代が予約を諦めて競合店に流れます。GBPへの予約リンク設置・ぐるなびや食べログ予約との連動・LINE予約の整備が機会損失を防ぎます。" },
                { n: "05", t: "Instagramの更新が止まり、ブランドイメージが劣化している", b: "1〜2ヶ月更新が止まっているInstagramは「閉店したのでは」「やる気がない」という印象を与え、新規フォロワーを獲得できません。飲食店のInstagramは料理写真・季節メニュー・限定企画の告知として機能し、フォロワーの来店動機を継続的に高める役割があります。" },
                { n: "06", t: "ランチ・ディナーの使い分けができておらずキーワードを取りこぼしている", b: "「○○駅 ランチ」と「○○駅 居酒屋 ディナー」では検索する時間帯・目的・ユーザーがまったく異なります。GBPのランチ・ディナー別メニュー登録と、ホームページでのランチ・ディナー別ページ設計により、異なる時間帯の需要を両方取り込むことができます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO・MEO戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                飲食店のSEO対策では、地域名×業態・シーン・特徴を組み合わせたキーワードを軸に設計します。「葛飾区 ランチ」「亀有 居酒屋 個室」「金町 カフェ テイクアウト」など購買直前のキーワードで上位を狙うことが最優先です。自社ホームページにランチメニューページ・ディナーメニューページ・コース料理ページを個別に作成し、それぞれのキーワードでインデックスされる設計が効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                MEOでは口コミ評価4.0以上の維持が重要です。競合店舗が4.2の平均評価を持つ場合、3.8のままではGoogleマップのローカルパックに入ることが難しくなります。口コミ管理・定期的な写真投稿（週1〜2枚）・GBP投稿（週2回）の三本柱で継続的に評価を高めます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                具体的なキーワード例：「葛飾区 ランチ 個室」「亀有駅 和食 ディナー」「金町 居酒屋 飲み放題」「葛飾区 カフェ 勉強」「東京 飲食店 MEO」。これらのキーワードを自社サイトの各ページに自然に組み込み、GBPの説明文・投稿にも反映させることで、オーガニック検索とマップ検索の両方で集客できる体制を構築します。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店のGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                飲食店のMEO対策で最も重視すべきは「写真の質と更新頻度」「口コミ件数と平均評価」「GBP投稿の継続」の三点です。Googleはアクティブに更新されているGBPを高く評価します。週1〜2回の写真追加と週2回のGBP投稿（新メニュー・季節限定・イベント告知など）を継続することで、同じエリアの競合店に差をつけられます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                口コミ返信は全件行うことが鉄則です。ポジティブな口コミには感謝と次回来店を促すメッセージを、ネガティブな口コミには誠実な謝罪と改善への取り組みを返信します。適切な返信は新規ユーザーに対して「誠実な店舗」という印象を与え、来店決定率を高めます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBPのカテゴリ設定も重要です。メインカテゴリに「和食レストラン」「居酒屋」など最もメインとなる業態を設定し、サブカテゴリに「ランチレストラン」「テイクアウト」「個室あり」などを追加することで、複数のキーワードでの表示機会が増えます。予約リンク・電話番号・ウェブサイトリンクを必ず設定し、ユーザーが1タップで行動できる導線を整備します。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SNS Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店のSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                Instagramは飲食店にとって来店前の「デジタル下見」として機能します。料理写真のクオリティ・投稿頻度・ストーリーやリールの活用が来店動機の形成に直結します。特にリール動画（料理の盛り付け過程・厨房の様子・季節限定メニューの紹介）は拡散性が高く、フォロワー外への露出が増えます。毎日1投稿を目標に、ハッシュタグは地域タグ（#葛飾グルメ #亀有ランチ）と料理タグ（#和食 #ランチ定食）を組み合わせて設定します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                X（旧Twitter）は「今日のランチ」「本日の日替わり定食」など即時性の高い情報発信に向いています。食べログ・ホットペッパーグルメと連動したキャンペーン（「コメントにフォロー＆リポスト」などのプレゼント企画）はフォロワー増加と認知拡大に効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                飲食店のSNS運用でもっとも重要なのは「継続性」です。2週間更新が止まっただけでフォロワーの関心が薄れ、来店動機が失われます。投稿カレンダーを作成し、月のテーマ（新メニュー月・地元食材特集月など）を決めておくと継続しやすくなります。サイプレスでは投稿計画の作成から代行運用まで一括してサポートします。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              飲食店向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "GBP完全最適化・MEO運用", b: "Googleビジネスプロフィールの基本情報・写真・メニュー・カテゴリを整備し、週次更新・口コミ管理・投稿代行まで一括対応。ローカルパック（上位3件）への表示を目指して継続運用します。" },
                { t: "Instagram・SNS運用代行", b: "料理写真の撮影ディレクション・キャプション作成・ハッシュタグ設計・投稿スケジュール管理まで一括代行。毎日投稿のGBP投稿週2回も同時対応します。" },
                { t: "口コミ獲得フロー設計", b: "QRコードPOP・レシートへの印字・LINE送信テンプレートなど、自然に口コミを集める仕組みを設計。ネガティブ口コミへの返信テンプレートも提供します。" },
                { t: "飲食店向けホームページ制作", b: "ランチ・ディナー別ページ・予約システム連動・スマートフォン最適化・LocalBusiness Schema実装まで完備。検索とGBPの両方から来客を受け止めるサイトを構築します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webサイトの作り方 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Web Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              飲食店の選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                飲食店のWebサイトは「食べたい」という感情に訴えるデザインが最優先です。メインビジュアルには高品質な料理写真を使用し、ページを開いた瞬間に「ここで食べたい」と思わせるファーストインプレッションを設計します。色温度が高く（温かみのある）・明るく・料理の質感が伝わる写真選定が来店率を左右します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                情報設計は「場所・時間・価格・雰囲気・予約方法」を迷わず見つけられる構成にします。Googleマップへの埋め込み・駅からの道案内・駐車場情報をアクセスページに充実させ、「行き方がわからない」という来店障壁を取り除きます。また、スマートフォンでの操作性を最優先に、電話番号のタップ発信・予約ボタンの常時表示・メニューの見やすいレイアウトを実装します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LocalBusiness Schema（構造化データ）の実装により、Googleの検索結果にも営業時間・評価・価格帯が表示されやすくなります。ランチページ・ディナーページ・コースページをそれぞれ独立させてSEO設計することで、複数のキーワードで検索上位を狙える構成にします。定期的なメニュー更新とブログ投稿（季節メニュー・イベント情報）を続けることで、Googleからの評価を長期的に高めていきます。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="飲食店のWebマーケティングに関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="飲食店の集客改善をサポートします"
          body="Googleマップでの上位表示・Instagram運用・口コミ対策など、飲食店の集客に特化した施策をご提案します。現在の状況を無料で診断いたします。"
        />
      </main>
      <Footer />
    </>
  );
}
