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
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
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
  {
    q: "商店街・シャッター街にある店舗でも集客できますか？",
    a: "できます。商店街にある店舗は「地域の歴史ある商店街の一員」というストーリー自体が集客コンテンツになります。GBPで商店街名を含む詳細説明を記入し、商店街全体の活性化イベントとタイアップした発信・地域メディアへの露出・近隣店舗とのコラボ企画などで相互送客が生まれます。商店街のWebサイトや地域SNSページと連携することも有効です。",
  },
  {
    q: "GBPの在庫表示機能は活用すべきですか？",
    a: "活用できる業種では積極的に導入を推奨します。Googleビジネスプロフィールの「商品」セクションに商品・在庫情報を登録すると、Google検索・Googleマップで商品が表示され「この近くのお店に在庫がある」という来店動機を生み出せます。商品画像・価格・説明を丁寧に登録することで、比較検討段階の顧客に直接アプローチできます。",
  },
  {
    q: "高齢者・シニア顧客へのデジタル集客はどう設計すべきですか？",
    a: "シニア層の検索はスマートフォンの音声検索・Googleマップが中心です。GBPに「駐車場あり」「バリアフリー対応」「わかりやすい場所」といった情報を明記し、電話問い合わせの導線を優先することが重要です。Instagramよりも地域の折込チラシ・地域紙との連動・口コミの口伝効果をデジタルと組み合わせることでシニア層へのリーチが高まります。",
  },
  {
    q: "地域イベントと連携した集客はできますか？",
    a: "非常に効果的です。地域の夏祭り・マルシェ・文化祭・商店街イベントへの出店・協賛をGBP投稿・Instagram・LINEで事前告知することで、イベント来場者を自店舗に誘導できます。「○○祭り開催中！当店でもXXX特別セット販売」のような企画は地域メディアにも取り上げられやすく、MEO評価にもプラスに働きます。",
  },
  {
    q: "ポイントカード・会員システムとLINEを連携するメリットは？",
    a: "LINE公式アカウントとポイント管理を連携させると、紙のスタンプカードをデジタル化でき、ポイント付与のタイミングでLINEメッセージを送れます。「ポイントがたまったのでクーポンをプレゼント」「久しぶりのご来店ありがとうクーポン」など来店頻度に応じた自動配信が可能になり、リピーター育成の精度が大幅に向上します。",
  },
  {
    q: "競合チェーン店との差別化でWebからできることはありますか？",
    a: "あります。チェーン店にない「店主・スタッフの人柄・専門知識」「独自仕入れのこだわり商品」「地域コミュニティとのつながり」をホームページとInstagramで可視化することが最大の差別化です。「なぜこの店があるのか」というブランドストーリーページ・スタッフ紹介ページ・こだわり仕入れストーリーはチェーン店が絶対に真似できないコンテンツです。",
  },
  {
    q: "EC（ネット通販）を並行して始める場合の注意点は？",
    a: "ECを始める場合は実店舗とECの役割を明確に分けることが重要です。ECは全国発送・ギフト需要向け、実店舗は「地域の人に来てもらう体験型」として設計します。EC開設をGBP・Instagram・LINEで告知することで既存ファンが最初の購入者になります。店舗ページとECサイトのSEOが競合しないようキーワード設計を分けることも大切です。",
  },
  {
    q: "店内POPとデジタル集客をどう連携させると効果的ですか？",
    a: "店内POPにQRコードを掲載することでデジタルとリアルをつなぐことができます。「Instagramフォローでクーポン」「LINEお友達登録でポイント2倍」「Googleマップで口コミを書いてね」などのPOPを会計レジ横・入口・商品棚に設置します。来店客をデジタルフォロワーに変換する仕組みが、次の来店と口コミの起点になります。",
  },
];

const relatedLinks = [
  { href: "/cases/industry/retail", label: "小売・店舗の成功事例", desc: "地域店舗のWeb集客成功事例" },
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
  { href: "/services/meo", label: "MEO対策の料金と内容", desc: "MEOサービス詳細ページ" },
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "地域店舗向けSNS運用" },
  { href: "/sns/local-sns", label: "地域密着SNS戦略", desc: "地元ユーザーへのSNSリーチ" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "ブランドを伝えるサイト制作" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO費用の相場と内容" },
  { href: "/area/adachi", label: "足立区の集客支援", desc: "足立区エリアの対応" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/meo/store-marketing", label: "店舗マーケティング戦略", desc: "実店舗の集客設計" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域SEOの実践知識" },
  { href: "/meo/google-post", label: "GBP投稿活用術", desc: "Googleビジネス投稿で差をつける" },
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

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "8px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "40px" }}>
              地域密着型小売・専門店のWeb集客は、施策を順序立てて積み上げることで費用対効果が最大化します。以下のステップを参考に、現在地を把握しながら一つずつ仕組みを整えてください。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Googleビジネスプロフィールの開設・基本情報の完成",
                  b: "店舗名・住所・電話番号・営業時間・カテゴリ・ウェブサイトURLを正確に登録します。情報の一貫性がMEO評価の土台になるため、ここを省略すると後工程の効果が出にくくなります。",
                },
                {
                  n: "02",
                  t: "GBP写真の充実（外観・内観・商品・スタッフ）",
                  b: "外観写真・店内の雰囲気・代表的な商品・スタッフの顔が見える写真を最低20枚以上登録します。写真が充実したGBPは検索ユーザーのクリック率が高まり、来店につながるイメージを事前に伝えられます。",
                },
                {
                  n: "03",
                  t: "口コミ獲得フローの設計（QRコード・LINE誘導）",
                  b: "会計時にGoogleマップ口コミページのQRコードをスタッフが見せる・レシートに印刷するなどの仕組みを整備します。LINE公式アカウントで来店後に口コミ依頼メッセージを自動送信する設定も効果的です。",
                },
                {
                  n: "04",
                  t: "GBP投稿の週次運用スタート",
                  b: "新商品入荷・季節おすすめ・イベント告知などを週1〜2回のペースで投稿します。投稿が続くビジネスはGoogleからアクティブと判断され、Mapパック表示の頻度が上がる傾向があります。",
                },
                {
                  n: "05",
                  t: "Instagram開設・地域ハッシュタグ戦略の実施",
                  b: "ビジネスアカウントを開設し、プロフィールにGoogleマップリンクと営業時間を記載します。地域ハッシュタグ（#葛飾花屋など）と商品ジャンルハッシュタグを組み合わせ、週3〜4投稿を継続することで近隣ユーザーへの認知が広がります。",
                },
                {
                  n: "06",
                  t: "LINE公式アカウントの開設・友達登録促進",
                  b: "店頭POPにLINE友達登録QRコードを設置し、登録特典（初回クーポン・ポイント加算など）で登録数を増やします。友達登録数が増えるほどLINE配信の費用対効果が高まるため、初期の登録者獲得に注力します。",
                },
                {
                  n: "07",
                  t: "自社ホームページ制作・SEOキーワード設計",
                  b: "お店のこだわり・ストーリー・スタッフ紹介・商品カテゴリ・アクセス情報を掲載したホームページを制作します。「葛飾区 花屋」などの地域SEOキーワードを各ページに適切に配置し、Google検索からの自然流入を確保します。",
                },
                {
                  n: "08",
                  t: "季節・イベントコンテンツの事前準備",
                  b: "母の日・クリスマス・バレンタインなど年間の主要イベントに合わせたGBP投稿・Instagram投稿・LINE配信の計画を立てます。イベント4〜6週前からの発信開始が認知の積み上げに効果的です。",
                },
                {
                  n: "09",
                  t: "口コミ・SNSコメントへの返信・顧客とのエンゲージメント",
                  b: "Googleマップ口コミへの丁寧な返信・Instagramコメントへの反応は「人の見えるお店」という印象を強め、新規顧客の来店判断に影響します。返信率の高いビジネスは検索結果でも好印象を与えます。",
                },
                {
                  n: "10",
                  t: "月次データ分析とPDCAの繰り返し",
                  b: "GBPインサイト（検索数・マップ表示数・来店クリック数）・Instagramアナリティクス・LINE配信の開封率を月次でチェックします。数値を見ながら投稿内容・配信タイミング・口コミ施策を調整することで集客効果が安定的に向上します。",
                },
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

        {/* 成果を測るKPI */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>KPI</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "8px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "40px" }}>
              地域密着型小売・専門店のWebマーケティングは「感覚」ではなく数字で改善します。以下のKPIを月次でモニタリングすることで、どの施策が来店に効いているかを把握し、PDCAを回せます。
            </p>
            <div style={{ display: "grid", gap: "1px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", background: "#E8E4DC" }}>
              {[
                {
                  name: "GBPルート検索数",
                  where: "Googleビジネスプロフィール インサイト",
                  desc: "マップで「経路」ボタンが押された回数で、来店意向の最も直接的な指標です。前月比での増減をトラッキングします。",
                },
                {
                  name: "GBP電話クリック数",
                  where: "Googleビジネスプロフィール インサイト",
                  desc: "GBPから電話番号をタップした回数で、来店前の問い合わせ意欲を示します。口コミ増加・写真充実後に伸びやすい指標です。",
                },
                {
                  name: "口コミ件数・平均評価",
                  where: "Googleビジネスプロフィール 管理画面",
                  desc: "口コミ総数と平均評価はMEO順位に直結します。月に2〜3件以上の新規口コミ獲得を目標に口コミ依頼フローを回します。",
                },
                {
                  name: "Instagramリーチ数・フォロワー増加数",
                  where: "Instagramプロフェッショナルダッシュボード",
                  desc: "投稿が何人に届いたかを示す指標で、地域ハッシュタグ施策の効果測定に使います。フォロワー増加数も来店意向層の拡大を示します。",
                },
                {
                  name: "LINE配信の開封率・クリック率",
                  where: "LINE公式アカウント管理画面 アナリティクス",
                  desc: "配信メッセージがどれだけ読まれ行動につながったかを測ります。開封率が低下している場合は配信内容や頻度の見直しを行います。",
                },
                {
                  name: "自社サイトのオーガニック流入数",
                  where: "Google Search Console / Google Analytics",
                  desc: "Google検索からホームページへの訪問者数で、SEO効果の蓄積を示します。「葛飾区 花屋」などターゲットキーワードの順位と合わせて確認します。",
                },
                {
                  name: "Webサイトからの電話・フォーム問い合わせ数",
                  where: "Google Analytics / CMS管理画面",
                  desc: "ホームページ経由での来店前問い合わせ数で、Webマーケティング全体の最終成果指標です。月次で前年同期比との比較が有効です。",
                },
              ].map((kpi) => (
                <div key={kpi.name} style={{ background: "#ffffff", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{kpi.name}</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em", marginBottom: "10px" }}>{kpi.where}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{kpi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 800, marginBottom: "40px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  t: "MEO・SNS・ホームページを一社で完結",
                  b: "MEO対策・Instagram運用・LINE設定・ホームページ制作を個別業者に発注すると情報が分散し、連携が取れません。サイプレスはすべての施策を一気通貫で設計するため、各チャネルの相乗効果が最大化します。",
                },
                {
                  t: "地域密着・商店街・専門店への対応実績",
                  b: "葛飾区を中心とした地域密着型店舗のWeb集客支援を行ってきた経験から、地域特有の顧客行動・商圏特性・競合環境に即した集客設計が可能です。「地元の事情を知らない代理店」との違いがここにあります。",
                },
                {
                  t: "小規模店舗でも無理のない費用設計",
                  b: "大手代理店のパッケージ料金では手が出ない規模のお店でも、優先度の高い施策から段階的に始められるプランをご提案します。まずMEOのみ、次にInstagram追加など、予算と成長に合わせた柔軟な対応が可能です。",
                },
                {
                  t: "数字で成果を可視化する月次レポート",
                  b: "GBPインサイト・Instagramアナリティクス・LINE配信結果を月次でまとめたレポートを提供します。何が効いていて何を改善すべきかを数値で把握できるため、感覚ではなくデータに基づいた集客改善が継続できます。",
                },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
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
