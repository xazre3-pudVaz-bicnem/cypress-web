import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【不動産会社のSEO・MEO集客】ポータルサイト依存から脱却する自社集客｜株式会社サイプレス",
  description: "不動産会社・賃貸管理・売買仲介のWeb集客。Googleマップ上位表示・地域SEO・ホームページ制作・物件情報のコンテンツ設計でSUUMO・HOME'S依存を脱却します。",
  keywords: ["不動産 SEO", "不動産 ホームページ", "賃貸 集客", "不動産会社 MEO", "不動産 Web集客", "不動産 ポータルサイト 脱却"],
  openGraph: {
    title: "【不動産会社のSEO・MEO集客】ポータルサイト依存から脱却する自社集客｜株式会社サイプレス",
    description: "不動産会社のWeb集客。MEO・SEO・ホームページ制作でSUUMO・HOME'S依存から脱却します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/real-estate" },
};

const faqItems = [
  {
    q: "不動産会社のMEOはどのくらい重要ですか？",
    a: "「○○市 不動産」「○○駅 賃貸 相談」など近くの不動産会社を探す検索でGoogleマップ上位表示は非常に重要です。来店・問い合わせのきっかけとして地域検索は主要な集客経路です。特に引越しを検討中の方が「地域の不動産会社」をGoogleマップで比較するケースが増えています。",
  },
  {
    q: "不動産のホームページとSUUMO・アットホームはどちらが重要ですか？",
    a: "両方必要です。ポータルサイトは物件を探す顧客の入口として有効ですが、自社サイトは会社の信頼構築・リピート顧客・指名顧客の獲得・SEOに効果的です。ポータルの掲載料・手数料を下げながら自社集客比率を高めることが長期的な収益改善につながります。",
  },
  {
    q: "不動産会社のSEO対策で狙うべきキーワードは？",
    a: "「○○市 マンション 売却」「○○駅 賃貸 1LDK」「○○区 不動産 売買 相談」など地域名+物件種別+ユーザーの目的を組み合わせたロングテールキーワードが効果的です。「査定 売却 相談」など無料相談を訴求するキーワードも有効です。",
  },
  {
    q: "不動産会社のSNS活用はどうすればいいですか？",
    a: "Instagramは物件写真・周辺エリア情報の発信に、YouTubeは物件動画・内見動画の公開に活用できます。地域の暮らし情報（「○○駅周辺のおすすめカフェ」「○○区の子育て環境」）を発信することで、エリアを検討中の顧客に接触できます。",
  },
  {
    q: "不動産会社のGoogleマップで口コミを増やすには？",
    a: "成約後のお礼連絡時に口コミリンクを送ることが最も自然で効果的な方法です。「お部屋探しのご感想をGoogleにいただけますか」という一言とQRコード・URLを組み合わせることで口コミ獲得率が上がります。担当者への個人的な信頼が口コミにつながりやすい業種です。",
  },
  {
    q: "不動産会社のホームページで差別化するためのポイントは？",
    a: "「担当者紹介（顔写真・得意分野・経験）」「地域の暮らし情報ブログ」「お客様の声（購入・賃貸それぞれ）」「売却相談の流れ」など、会社の個性と専門性が伝わるコンテンツが差別化になります。ポータルサイトにない独自情報を自社サイトで発信することがポイントです。",
  },
  {
    q: "不動産売買と賃貸管理の集客は分けて設計すべきですか？",
    a: "はい。売買仲介はSEO（「○○市 戸建て 購入」「査定 売却 相談」）とMEOが有効で、賃貸管理は「○○駅 賃貸 ペット可」のような絞り込み条件を含む地域SEOとポータルサイト最適化が効果的です。ターゲット顧客が異なるため、ページとキーワード設計を分けた設計を推奨します。",
  },
  {
    q: "物件情報の更新が大変で自社サイトの更新が滞っています。どうすればいいですか？",
    a: "物件情報の更新が大変な場合は、CMSを活用した簡単更新システムや、ポータルサイトとの連動システムを導入することを推奨します。物件情報の更新よりも「地域情報コンテンツ」「担当者紹介」「お客様の声」など更新頻度の低いコンテンツをSEO軸に設計することも有効です。",
  },
  {
    q: "地域密着型の小さな不動産会社でも大手に対抗できますか？",
    a: "はい。地域密着型の不動産会社の強みは「地元への深い知識」「顔が見える担当者との関係」「細かな要望への柔軟な対応」です。これをGBP・ホームページ・ブログで前面に出すことで、大手チェーンとの差別化が実現します。「地域専門家」としてのポジショニングがSEOとブランディングの両方で有効です。",
  },
  {
    q: "不動産売却の相談を増やすにはどうすればいいですか？",
    a: "「無料査定」「相談から売却の流れ」「売却成功事例」「担当者の顔写真とメッセージ」を掲載した売却専用ランディングページを作成し、SEO（「葛飾区 不動産売却 相談」）と連動させることが効果的です。LINE・フォーム・電話の複数窓口で問い合わせの機会損失を防ぎます。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識と手法" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で問い合わせ獲得" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/industries/construction", label: "建設・リフォームの集客", desc: "建設業のWebマーケティング" },
  { href: "/web-design", label: "ホームページ制作", desc: "不動産会社向けサイト制作" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO対策の費用相場" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
];

export default function RealEstateIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "不動産会社のWeb集客", "item": "https://www.cypress-all.co.jp/industries/real-estate" },
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
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#9CA3AF" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>不動産</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Real Estate Marketing
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              不動産会社のSEO・MEO・<br />ホームページ集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              不動産会社のWeb集客は、SUUMO・HOME'Sなどポータルサイトへの依存から脱却し、自社サイトとGoogleマップを軸にした独自集客体制を構築することが長期的な事業成長の鍵です。地域名×物件種別の地域SEOとMEOを組み合わせることで、ポータルサイトに頼らない問い合わせ獲得が実現します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              不動産の売買・賃貸・管理業ではWebでの信頼構築が来店・問い合わせの決め手になります。「この会社に相談して大丈夫か」という不安を解消するコンテンツ（担当者紹介・成約事例・お客様の声・会社の歴史）と、地域での専門性を示す情報発信が、競合他社との差別化になります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              賃貸仲介・売買仲介・不動産管理・土地活用相談など、不動産業全般のWeb集客に対応しています。地域密着型の小規模不動産会社から複数店舗を持つ中規模業者まで、規模に応じた集客設計をご提案します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (5).png"
            alt="不動産エージェントの物件紹介"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              不動産会社が抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "SUUMO・HOME'Sへの依存で掲載費が収益を圧迫している", b: "ポータルサイトへの依存度が高い不動産会社は、掲載費の増加とともに自社集客力が弱体化するリスクを抱えています。ポータルサイトの仕様変更・掲載費値上げ・検索アルゴリズムの変更が直接集客数に影響する脆弱な状態です。" },
                { n: "02", t: "独自サイトからの集客が少なくポータル流入に頼っている", b: "自社ウェブサイトはあるものの、問い合わせのほとんどがポータルサイト経由という状態では、自社サイトへの投資が活かされていません。地域SEO・MEO・コンテンツ充実で自社サイトからの問い合わせ比率を高めることが課題です。" },
                { n: "03", t: "地域ローカルでの認知度が低く新規顧客が来ない", b: "「葛飾区で不動産相談」と検索したユーザーにGoogleマップにも自社サイトにも表示されない状態では、地域の新規需要を取りこぼしています。地域の不動産専門家としてのポジションをWebで確立することが新規集客の基盤です。" },
                { n: "04", t: "GBPが未最適化で地域検索でのMapパック表示がない", b: "Googleビジネスプロフィールが基本情報のみで、写真・口コミ・定期投稿が不足している状態では、Googleマップのローカルパック（上位3件）への表示が困難です。GBP最適化が地域検索での露出増加への最速ルートです。" },
                { n: "05", t: "物件情報の更新が大変でサイトが古いまま放置されている", b: "物件情報は頻繁に変わるため、自社サイトの更新が追いつかず情報が古いまま放置されているケースが多くあります。更新しやすいCMS設計・ポータルとの連携・更新不要なコンテンツ（地域情報・会社情報）を軸にしたサイト設計で解決できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
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
              不動産会社のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                不動産のSEO対策では「地域名×物件種別×ユーザーの目的」を組み合わせたキーワード設計が基本です。主要キーワード例：「葛飾区 賃貸」「亀有 マンション 購入」「金町 不動産 売却 相談」「葛飾区 一戸建て 買取」。これらのキーワードでポータルサイトに依存しない自社集客チャネルを構築します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                地域コンテンツはSEOと信頼構築を両立する最重要施策です。「葛飾区の住みやすいエリアランキング」「亀有駅周辺の家賃相場と生活環境」「葛飾区で子育てに適したマンションの選び方」など、エリアを検討中の顧客が検索するコンテンツを専門家として発信します。これらのコンテンツは地域の不動産会社としての権威性を高め、SEO評価と信頼感の両方を向上させます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                売買・賃貸・売却という異なるニーズに対して、それぞれ専用のランディングページを作成します。「葛飾区でマンションを売りたい方へ」「亀有・金町エリアの賃貸物件を探している方へ」など、顧客のニーズに直接応答するページ設計がCV率を高めます。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              不動産会社のGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                不動産会社のGBPでは「担当者の顔写真」「オフィスの清潔感ある内観写真」「対応地域の地図」を掲載することが信頼感向上に効果的です。不動産の相談は「この会社に任せて大丈夫か」という人への信頼が判断基準になるため、担当者の顔が見える写真が来店・問い合わせの背中を押します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                口コミは「不動産取引で最も信頼できる情報源」として機能します。「担当者の○○さんが丁寧に対応してくれた」「条件に合った物件をすぐ見つけてもらえた」「売却でスムーズに進んだ」という具体的な口コミが新規顧客の来店を促します。成約後のお礼連絡時に自然に口コミを依頼するフローを整備します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBP投稿（週2回）では「新着物件のご紹介」「地域の家賃相場情報」「不動産売却の流れ」「周辺エリアの生活情報」などを発信します。地域の専門家として有益な情報を継続的に提供することで、Googleからの評価向上と潜在顧客への接触機会が増えます。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Content Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              不動産会社のSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                不動産会社のInstagramは「物件の雰囲気写真」と「地域の暮らし情報」を組み合わせたコンテンツが効果的です。「葛飾区のおすすめカフェ5選」「亀有駅周辺の子育て環境」「金町の休日の過ごし方」など、そのエリアに引越しを検討している方が知りたい情報を発信することで、物件を探す前段階からの関係構築が可能です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                YouTubeでの物件動画・内見動画は遠方からの移住希望者へのアプローチに効果的です。「葛飾区○○の1LDK内見動画」「亀有駅近くのファミリーマンション」などの動画はYouTube検索（「亀有 賃貸」）でもSEO効果があります。動画は物件の実際の雰囲気を伝える最も効果的なコンテンツです。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                不動産コラム（「初めて家を購入する方のためのガイド」「賃貸と購入どちらが得か」「不動産売却で損をしないための7つのポイント」）は情報収集段階の顧客との接点を作ります。これらのコンテンツは長期間にわたって検索流入を生み続け、「地域の不動産専門家」としての権威性を積み上げます。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              不動産会社向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "地域名×物件種別のSEO戦略", b: "「葛飾区 賃貸」「亀有 マンション 売却」などのキーワードで自社サイトの検索上位を目指すSEO戦略を設計。地域コンテンツ・物件紹介ページ・売却相談ページを組み合わせた多角的な集客体制を構築します。" },
                { t: "GBP口コミ増加で信頼度UP", b: "成約後の口コミ依頼フロー設計・GBP写真の充実・週次投稿で口コミ件数と平均評価を向上させ、Googleマップでの信頼性を高めます。地域検索でのローカルパック表示を目指します。" },
                { t: "物件情報のコンテンツSEO設計", b: "物件情報ページへのSEO設計・地域コンテンツの制作・CMS導入で更新しやすいサイト構造を構築。ポータルサイトに依存しない自社流入の拡大を実現します。" },
                { t: "SNSで物件紹介・地域情報発信", b: "Instagram・YouTubeでの物件紹介・地域暮らし情報の発信設計。エリアを検討中の顧客に物件探し前の段階からアプローチし、来店・問い合わせへの導線を構築します。" },
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
              不動産会社の選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                不動産会社のWebサイトは「信頼性」と「専門性」をデザインで表現することが重要です。トップページには担当者の顔写真・会社の歴史・地域での実績を目立つ場所に配置し、「地元に根ざした信頼できる不動産会社」というイメージを第一印象で伝えます。清潔感のあるデザイン・わかりやすい物件検索機能・問い合わせへの導線が基本構成です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                売買・賃貸・売却の三つのニーズそれぞれに専用の入口ページを設けることが重要です。「お部屋を探している方」「家を売りたい方」「不動産を購入したい方」という三種類のユーザーが迷わず自分のニーズに合ったページに進める導線設計が問い合わせ率を高めます。各ページに「担当者の紹介」「問い合わせフォーム」「LINE相談ボタン」を配置します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                「お客様の声」ページは不動産会社の信頼構築に特に重要です。購入・賃貸・売却それぞれのケースで「どんな状況で相談したか」「担当者の対応はどうだったか」「結果としてどうなったか」という三段構成の口コミを掲載します。実名・顔写真付きの口コミは匿名口コミの3〜5倍の信頼性があります（許可を取った上で掲載）。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="不動産会社のWeb集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="不動産会社のWeb集客ご相談"
          body="不動産会社のMEO対策・ホームページ制作・SEO対策・SNS活用をご相談ください。ポータルサイト依存から脱却した自社集客の仕組みを構築します。"
        />
      </main>
      <Footer />
    </>
  );
}
