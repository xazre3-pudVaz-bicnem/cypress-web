import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【地域密着型小売・専門店のMEO・Web集客】チェーンに負けない地域集客戦略｜株式会社サイプレス",
  description: "花屋・文具店・雑貨店・書店など地域密着型小売・専門店のWeb集客。MEO・Instagram・ホームページ制作で近くにいる人に見つけてもらい、来店・リピートを増やします。",
  keywords: [
    "地域密着 小売店 MEO対策",
    "専門店 Web集客",
    "花屋 Googleマップ",
    "雑貨店 Instagram 集客",
    "地域店舗 SEO",
    "小売店 ホームページ",
    "専門店 MEO",
    "地域 商店 集客",
  ],
  openGraph: {
    title: "【地域密着型小売・専門店のMEO・Web集客】チェーンに負けない地域集客戦略｜株式会社サイプレス",
    description: "花屋・文具店・雑貨店など地域密着型小売・専門店のWeb集客。MEO・Instagram・ホームページで近くの人に見つけてもらいます。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/local-store" },
};

const faqItems = [
  {
    q: "地域の小売店・専門店に最も効果的な集客手段は何ですか？",
    a: "MEO（Googleマップ対策）が最も即効性が高いです。「○○駅 花屋」「○○市 文具店」などの検索でGoogleマップ上位に表示されることが来店の直接的なきっかけになります。まずGoogleビジネスプロフィールを整備し、写真・営業時間・口コミを充実させることから始めることを推奨します。",
  },
  {
    q: "チェーン店・ECサイトとどう差別化すればいいですか？",
    a: "「地域密着の専門知識」「店主・スタッフとの人間的なつながり」「特定ジャンルへの深い知見」「手作り・こだわり商品」など、大手チェーンやECが提供できない価値を前面に出すことが差別化の核心です。ホームページとInstagramでお店のストーリー・こだわり・人の顔が見える情報発信を行います。",
  },
  {
    q: "Instagramは地域小売店の集客に有効ですか？",
    a: "はい。花屋・雑貨店・書店など視覚的に魅力的な商品を扱う店舗では、Instagramは特に効果的です。地域ハッシュタグ（#○○花屋 #○○雑貨）で近隣ユーザーへの認知を高め、新商品・季節のおすすめ・入荷情報をビジュアルで発信します。フォロワーが来店・リピートするきっかけになります。",
  },
  {
    q: "地域の小規模店舗でも自社ホームページは必要ですか？",
    a: "はい。Googleマップ・Instagramに掲載しながら、詳細な情報（こだわり・ストーリー・品揃えの特徴・スタッフ紹介・アクセス）を伝えるための自社ホームページは信頼構築に重要です。SNSは流行り廃りがあるため、自社ホームページが情報の「拠点」として機能することが大切です。",
  },
  {
    q: "口コミを増やすための具体的な方法は？",
    a: "会計時にGoogleマップのQRコードを見せる・レシートにQRコードを印刷する・LINE公式アカウントで来店後に口コミ依頼を送る・Instagram投稿を促す（お店のアカウントをタグ付けしてもらう）などの方法があります。「口コミを書いてもらうと次回割引」などのインセンティブも効果的です。",
  },
  {
    q: "地域の小規模店舗でもMEO対策を始められますか？",
    a: "はい。MEO対策は規模を問わず始められます。Googleビジネスプロフィールの無料登録から始め、写真充実・口コミ獲得・営業時間の正確な入力など基本施策を積み上げることで、大手チェーンに対しても地元密着の強みで差別化が可能です。口コミ数と評価が上がれば、大手より上位表示されるケースも多くあります。",
  },
  {
    q: "LINE公式アカウントは地域店舗の集客に効果がありますか？",
    a: "非常に効果的です。友達登録した顧客に新商品情報・入荷お知らせ・限定クーポン・イベント告知を直接配信でき、来店のきっかけを継続的に作れます。Instagram集客でファンを作りLINEでリピーターに育てる、という二段階の設計が来店サイクルを安定させます。",
  },
  {
    q: "地域店舗のWebマーケティングはどの順番で取り組むべきですか？",
    a: "①Googleビジネスプロフィールの整備（MEO）→②口コミ獲得の仕組み化→③Instagram運用→④LINE公式アカウントのリピーター活用→⑤自社ホームページのSEO強化、の順序が費用対効果を考えると現実的です。まずMEOから始め、確実に一つずつ仕組みを作ることを推奨します。",
  },
  {
    q: "Googleビジネスプロフィールの投稿機能はどう活用すべきですか？",
    a: "週1〜2回のペースで新商品・季節おすすめ・イベント情報・お得情報を投稿することが推奨されます。投稿がアクティブなビジネスはGoogleマップ上での視認性が高まり、検索ユーザーへの露出機会が増えます。お店の「今」を伝え続けることが来店動機づけになります。",
  },
  {
    q: "季節イベント（クリスマス・母の日など）の集客を強化するには？",
    a: "イベントの4〜6週前からGBP投稿・Instagram告知・LINE配信を計画的に実施することで認知を積み上げます。「○○区 クリスマス 花束」「母の日 ギフト ○○駅近く」などのSEOキーワードを含むコンテンツ準備も有効です。予約・事前注文受付開始と合わせた告知が売上を高めます。",
  },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "地域店舗向けサイト制作" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "リピーター育成・クーポン配信" },
  { href: "/industries/restaurant", label: "飲食店のWebマーケティング", desc: "飲食店専門の集客支援" },
  { href: "/industries/nail-salon", label: "ネイルサロンのWeb集客", desc: "サロン系の集客事例" },
  { href: "/industries/hair-salon", label: "美容室のWeb集客", desc: "美容室の集客支援" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "地域店舗のWeb集客相談" },
];

export default function LocalStoreIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "地域密着型小売・専門店のWeb集客", "item": "https://www.cypress-all.co.jp/industries/local-store" },
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
              <span style={{ color: "#0d1b2a" }}>地域密着型小売・専門店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Local Specialty Store
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              地域密着型小売・専門店の<br />MEO対策・Web集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              花屋・文具店・雑貨店・書店・自転車店など地域密着型の小売・専門店のWeb集客は、「近くにいる人に見つけてもらう」ことが最大の課題です。チェーン店やECサイトに押されている今、Googleマップ上位表示とInstagramで「このお店に行きたい」を生み出す仕組みを構築します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              地域の専門店が持つ強みは「人」「専門知識」「地域との絆」です。大手チェーンやAmazonが絶対に提供できない、お店の個性とスタッフの顔が見える情報発信でファンを作り、来店・リピートにつなげます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              花屋・フラワーショップ、文具・ステーショナリーショップ、雑貨店・セレクトショップ、書店、自転車店、ペットショップ、楽器店、スポーツ用品店、玩具店など、地域密着型の小売・専門店全般のWeb集客に対応しています。
            </p>
          </div>
        </section>

        {/* Full-width image band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/hero.png"
            alt="地域の専門店の外観・商品ディスプレイ — 地域密着型小売・専門店のMEO・Web集客"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 800, marginBottom: "40px" }}>
              地域密着型小売・専門店が抱える集客課題
            </h2>
            <div style={{ display: "grid", gap: "1px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", background: "rgba(196,184,154,0.2)" }}>
              {[
                {
                  n: "01",
                  t: "近くにいる人に存在を知ってもらえない",
                  b: "スマートフォンで「○○駅 花屋」「近くの文具店」と検索するユーザーがいても、Googleマップに表示されなければ来店機会を失います。MEO対策でGoogleマップ上位を確保することが地域集客の基本です。",
                },
                {
                  n: "02",
                  t: "チェーン店・ECサイトに価格で負けている",
                  b: "価格競争で大手に勝つことは困難ですが、「専門知識」「人との会話」「手に取れる体験」「地域のコミュニティ」という価値はECが提供できません。その価値をホームページとInstagramで可視化することが集客の核心です。",
                },
                {
                  n: "03",
                  t: "SNSを始めたが反応がなく更新が止まっている",
                  b: "「投稿しているのにフォロワーが増えない」という状態に陥りやすいのが地域店舗のSNSです。地域ハッシュタグ・投稿頻度・コンテンツ種別の最適化と、プロフィールからの来店・購入導線設計が必要です。",
                },
                {
                  n: "04",
                  t: "一度来た客が戻ってこないリピーター不足",
                  b: "新規来店を獲得しても再来店につなげる仕組みがないと、集客コストがかかり続けます。LINE公式アカウントでの新商品・入荷情報の定期配信・来店スタンプのデジタル化で一度の来店を長期ファンへ転換します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ background: "#0d1b2a", padding: "28px" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", display: "block", marginBottom: "12px" }}>{item.n}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: "1.8" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客戦略 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              地域密着型小売・専門店のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOで地域検索からの来店を最大化", b: "「○○駅 花屋」「○○市 文具店 おすすめ」での検索でGoogleマップ上位表示を目指します。営業時間・商品カテゴリ・写真・口コミを充実させ、地図から直接来店するユーザーを獲得します。" },
                { n: "02", t: "Instagramで店の個性と商品の魅力を発信", b: "商品写真・店内ディスプレイ・入荷情報・スタッフのおすすめをInstagramで発信します。地域ハッシュタグ（#○○花屋 #○○雑貨）で近隣ユーザーへの認知を高め、「行ってみたい」を生み出します。" },
                { n: "03", t: "GBPで最新情報とお店の「今」を伝える", b: "入荷情報・営業時間の変更・季節のおすすめ・イベント情報をGoogleビジネスプロフィールの投稿機能でリアルタイムに発信します。Google検索での表示情報を常に正確に保ちます。" },
                { n: "04", t: "お店のストーリーをホームページで伝える", b: "「なぜこの店があるのか」「こだわりは何か」「どんな人が働いているか」を詳細に伝えるホームページで、訪れた人に「ここに行きたい」という感情を生み出します。チェーン店にはないお店の個性が集客の武器になります。" },
                { n: "05", t: "口コミ管理で高評価を維持・増加", b: "来店後にQRコード・LINEでGoogleマップ口コミへの誘導を行います。全口コミへの丁寧な返信も評判管理と来店決断への影響があります。口コミ数と平均評価の改善がMEO順位向上に直結します。" },
                { n: "06", t: "LINE公式アカウントでリピートを促進", b: "LINE公式アカウントで新商品入荷・期間限定商品・クーポン・イベント告知を配信します。一度来店したお客様を再訪させる最も直接的な手段として活用し、来店頻度と顧客単価を高めます。" },
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

        {/* SEO・MEO戦略詳細 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              地域小売・専門店のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                地域密着型小売・専門店のSEO対策では、地域名+店舗ジャンル+ニーズのキーワード設計が重要です。主要キーワード例：「葛飾区 花屋」「亀有 雑貨 おしゃれ」「金町 文具店」「葛飾区 誕生日 花束」。これらの地域密着キーワードでGoogleマップ上位表示と自社サイトの検索上位を同時に目指します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                季節・イベント関連キーワードも重要です。「母の日 花束 ○○区」「クリスマス プレゼント 雑貨 ○○駅」「入学祝い 文具 ○○市」など、需要が高まるイベント前にコンテンツを準備することで、シーズン集客を最大化できます。地域ブログ記事（「○○駅近くのおすすめ花屋」など）もSEO効果があります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LocalBusiness Schemaを実装することで、Googleの検索結果に営業時間・住所・口コミ評価が表示されやすくなります。商品カテゴリはGBPのサービス欄に詳細に入力し、特定商品のニーズを持つユーザーへの表示機会を高めます。
              </p>
            </div>
          </div>
        </section>

        {/* Instagram・SNS活用 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SNS Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              地域専門店のInstagram・SNS活用術
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                地域密着型専門店のInstagramで最も重要なのは「お店の個性と人の見えるコンテンツ」です。商品写真だけでなく、スタッフのおすすめコメント・商品の背景にあるストーリー・入荷したばかりの新商品・季節のディスプレイの様子を発信します。フォロワーが「このお店には行ったことはないけど行ってみたい」と感じることが来店につながります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                地域ハッシュタグの活用が地域ユーザーへのリーチに欠かせません。「#葛飾花屋」「#亀有雑貨」「#金町カフェ」などの地域特化ハッシュタグと、商品ジャンルのハッシュタグを組み合わせることで、近隣の潜在顧客に投稿が届きます。リール動画での商品紹介は特にリーチ拡大に効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                InstagramのプロフィールにはGoogleマップへのリンク・営業時間・LINE公式アカウントへの誘導を明記します。フォロワーが来店・購入に至る動線を明確にすることで、SNSフォロワーを実際の顧客へ転換する効率が高まります。
              </p>
            </div>
          </div>
        </section>

        {/* 店舗ジャンル別アプローチ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Sub Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              専門店ジャンル別の集客アプローチ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                {[
                  { t: "花屋・フラワーショップ", b: "母の日・クリスマス・卒業式などのイベント前にGBP投稿・Instagram・LINE配信で予約来店を獲得します。「○○区 花束 オーダー」「○○駅 プレゼント フラワーアレンジ」のSEOコンテンツでウェブ経由のオーダーを促進します。" },
                  { t: "文具店・書店・セレクトショップ", b: "「○○市 文具 こだわり」「○○区 おしゃれ 雑貨店」「○○駅 書店 品揃え」など、地域+ジャンル+価値観のキーワードでMEO・SEO対策を行います。スタッフの選書・おすすめ特集コンテンツは専門性のアピールと同時にSEO効果も発揮します。" },
                  { t: "ペットショップ・自転車店・楽器店", b: "専門的な知識が必要なジャンルの店舗は「専門家に相談したい」ニーズが高く、スタッフの経験・知識をアピールするコンテンツが集客力になります。「○○区 自転車 修理 専門店」「○○市 楽器 初心者 相談」などのロングテールキーワードでSEO対策します。" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 800, marginBottom: "40px" }}>
              地域密着型小売・専門店向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "MEO対策・GBP最適化", b: "「○○駅 花屋」「○○市 雑貨店」でGoogleマップ上位表示を実現します。写真充実・口コミ獲得フロー設計・GBP投稿の継続運用で地域の来店ニーズを確実に捕捉します。" },
                { t: "Instagram・SNS運用支援", b: "商品写真・ディスプレイ・入荷情報のコンテンツ企画から投稿代行まで対応します。地域ハッシュタグ戦略とリール活用でフォロワーと来店客を同時に増やします。" },
                { t: "地域店舗向けホームページ制作", b: "お店のこだわり・スタッフ・商品の魅力・アクセス情報を最大限に伝えるホームページを制作します。スマートフォン最適化・SEO対策込みで地域検索からの流入も強化します。" },
                { t: "LINE公式アカウント・口コミ管理", b: "新商品入荷・季節イベント・クーポンのLINE配信設計と、Googleマップ口コミ獲得の仕組み化（QRコード設計・依頼文面作成）を支援します。一度の来店を長期ファンへ転換します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="地域密着型小売・専門店のWeb集客に関するよくある質問" bgColor="#f9f8f5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="地域密着型小売・専門店のWeb集客ご相談"
          body="花屋・文具店・雑貨店・書店など地域密着型の小売・専門店のMEO対策・Instagram運用・ホームページ制作をご相談ください。チェーン店に負けない地域集客の仕組みを設計します。"
        />
      </main>
      <Footer />
    </>
  );
}
