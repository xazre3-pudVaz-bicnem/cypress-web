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
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_09_20 (5).png", width: 1200, height: 630 }],
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
  {
    q: "不動産会社がSUUMO・HOME'Sへの依存から脱却する方法は？",
    a: "段階的な脱却が現実的です。まず自社サイトにSEOコンテンツ・地域情報ブログを充実させ、Googleからのオーガニック流入を増やします。並行してGBP最適化で地域のGoogleマップ検索からの問い合わせを増やし、自社チャネルからの問い合わせ比率が一定水準を超えた段階でポータルの掲載プランをダウングレードするステップが有効です。",
  },
  {
    q: "賃貸と売買でSEO戦略は変わりますか？",
    a: "変わります。賃貸は「○○駅 賃貸 ペット可」「○○区 1LDK 家賃 相場」など具体的な物件条件を含む検索意図に対応するコンテンツが重要です。売買・売却は「○○区 マンション 購入 費用」「不動産売却 流れ」など検討期間が長い顧客向けの情報提供コンテンツが有効で、信頼性重視のSEO設計が求められます。",
  },
  {
    q: "自社物件検索ページのSEO設計ポイントは何ですか？",
    a: "物件検索ページのURLを「/search/katsushika/1ldk/」のようにエリア・条件をURLに含める設計と、各検索結果ページにユニークなtitleとdescriptionを自動生成する仕組みが重要です。また、検索結果ゼロ件ページをGoogleにインデックスさせないようにnoindex設定を行い、クロール資源の無駄遣いを防ぐことも有効です。",
  },
  {
    q: "不動産のYouTube活用（物件内覧動画）の効果は？",
    a: "物件内覧動画はYouTube検索（「亀有 賃貸 2LDK」）とGoogle動画検索の両方から集客できる有効なコンテンツです。特に遠方からの移住希望者・コロナ以降の非対面ニーズに対応できます。動画タイトルに「エリア名＋物件種別＋特徴」を含め、説明欄に問い合わせURLを設置することでYouTubeから直接問い合わせにつながります。",
  },
  {
    q: "地域密着型不動産会社の差別化戦略とは何ですか？",
    a: "「担当者の顔と名前が見える会社」「地元に詳しいから提供できる情報がある」「大手では断れた条件でも相談できる」という点を軸にしたブランディングが有効です。Webでは担当者紹介ページ・地域情報ブログ・お客様の声を充実させ、ポータルサイトでは表現できない「人と会社」の個性を前面に出すことが大手との差別化になります。",
  },
  {
    q: "不動産業の広告規制（宅地建物取引業法）とWebマーケティングの注意点は？",
    a: "不動産広告は宅地建物取引業法・不動産の表示に関する公正競争規約に基づき、物件情報の正確な記載（面積・価格・設備など）が義務付けられています。Webでも「おとり広告」「誇大広告」は禁止です。SEOコンテンツ・LP・SNS投稿においても、成約済み物件の掲載継続・価格の不正確な表示・事実と異なる強調表現には注意が必要です。",
  },
  {
    q: "買取専門・仲介・管理会社でWebの役割は違いますか？",
    a: "違います。買取専門会社は「早期売却を検討している売主」へのLPとSEO（「不動産 買取 葛飾区」）が中心です。仲介会社は売主・買主・賃借人それぞれへのページ設計が必要です。管理会社は「オーナー向けの管理委託」と「入居者向けの物件情報」の二軸でサイトを設計します。事業モデルごとにターゲットとキーワードを明確に分けることが重要です。",
  },
  {
    q: "不動産会社のGBP設定で重要なカテゴリは何ですか？",
    a: "メインカテゴリは「不動産業者」が基本です。業種に応じて「不動産コンサルタント」「マンション管理会社」「商業不動産業者」などを追加カテゴリとして設定することで、複数の検索意図からの表示機会が増えます。カテゴリはGoogleマップでの検索キーワードとの一致度に直結するため、最初に正確に設定することが重要です。",
  },
  {
    q: "InstagramとYouTubeを同時に運用するのは大変ですか？優先順位は？",
    a: "リソースが限られている場合はInstagramを優先することを推奨します。Instagramは写真投稿・リール・ストーリーズの運用が比較的少ない工数で始められ、地域のフォロワーへのリーチと物件情報の発信に適しています。YouTubeは内見動画など準備に時間がかかるため、Instagram運用が軌道に乗った後に追加するステップで十分です。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識と手法" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で問い合わせ獲得" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "不動産会社向けブランドサイト" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/seo/content-seo", label: "コンテンツSEO対策", desc: "地域情報ブログで継続集客" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO対策の費用相場" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/industries/professional-service", label: "士業・専門サービスの集客", desc: "士業・専門職のWebマーケティング" },
  { href: "/industries/renovation", label: "リフォーム・リノベーションの集客", desc: "住宅リフォーム業のWeb集客" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEO完全ガイド", desc: "地域SEOの考え方と実践手順" },
  { href: "/knowledge/content-seo", label: "コンテンツSEOの基礎", desc: "ブログ・コラムで集客する方法" },
  { href: "/web-design", label: "ホームページ制作", desc: "不動産会社向けサイト制作" },
  { href: "/industries/construction", label: "建設・リフォームの集客", desc: "建設業のWebマーケティング" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "物件・地域情報のSNS発信" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "不動産会社向けサイト制作の詳細" },
  { href: "/knowledge/gbp-guide", label: "GBP最適化ガイド", desc: "Googleビジネスプロフィールの設定と運用" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/meo/real-estate-meo", label: "不動産会社のMEO対策", desc: "不動産特化のGoogleマップ対策" },
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
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
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
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              賃貸仲介・売買仲介・不動産管理・土地活用相談など、不動産業全般のWeb集客に対応しています。地域密着型の小規模不動産会社から複数店舗を持つ中規模業者まで、規模に応じた集客設計をご提案します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              葛飾区・亀有・金町・柴又・綾瀬・青砥エリアなど東京東部の地域密着型不動産会社への対応実績があります。地域の競合状況・検索需要・住民の特性を踏まえた集客戦略で、地域に根ざした不動産会社の強みを最大化します。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#FFFFFF", padding: "14px 32px", fontSize: "14px", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textDecoration: "none" }}>
              無料相談はこちら
            </Link>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (5).png"
            alt="不動産エージェントの物件紹介"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
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

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              不動産会社のWeb集客は、Googleビジネスプロフィールの整備を起点に、地域SEO・物件ページSEO・コンテンツ強化・SNSと段階的に構築します。各ステップを順に実施することで、ポータルサイトに依存しない集客の仕組みが完成します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GBPの基本情報を完全整備する", b: "店名・住所・電話番号・営業時間・定休日・ウェブサイトURLを正確に設定します。カテゴリは「不動産業者」を基本に、業種に応じた追加カテゴリを設定。サービスエリア・取扱物件種別・問い合わせ受付時間も記載します。" },
                { n: "02", t: "地域名＋業種のSEOキーワードを設計する", b: "「葛飾区 賃貸」「亀有 不動産 売買」「金町 マンション 購入相談」など、エリア×物件種別×目的を組み合わせたターゲットキーワードを一覧化します。キーワードの検索ボリュームと競合度を調査し、優先順位を設定します。" },
                { n: "03", t: "物件ページとエリアページのSEO設計を行う", b: "物件種別ごとの一覧ページ（賃貸一覧・売買一覧）とエリア別ページ（葛飾区の賃貸物件）をSEOに最適化します。URLにエリア・物件種別を含め、各ページにユニークなタイトルと説明文を設定します。" },
                { n: "04", t: "売却・賃借人向けのLPを作成する", b: "「葛飾区で不動産を売りたい方へ」「亀有駅周辺の賃貸を探している方へ」など、ユーザーのニーズ別にランディングページを作成します。担当者紹介・問い合わせフォーム・LINE相談ボタンをページ内に設置し、CVへの動線を整備します。" },
                { n: "05", t: "見学予約フォームとLINE相談窓口を設置する", b: "「物件見学予約フォーム」「売却相談フォーム」「LINE相談」の三窓口を整備し、問い合わせの入口を増やします。スマートフォンでの入力のしやすさ・項目数の最小化・送信後の自動返信設定が予約獲得率を高めます。" },
                { n: "06", t: "InstagramとYouTubeでSNS発信を開始する", b: "Instagramで物件写真・地域暮らし情報を週3〜4回投稿し、エリアを検討中の顧客へのアプローチを開始します。YouTubeでは物件内覧動画を制作し、遠方の移住希望者・非対面で物件確認をしたいユーザーへのリーチを拡大します。" },
                { n: "07", t: "地域コンテンツブログで専門性を積み上げる", b: "「葛飾区の家賃相場と暮らしやすさ」「亀有駅周辺の生活環境レポート」「不動産売却の流れ完全ガイド」など、地域情報と不動産専門知識を組み合わせたコンテンツを月2〜4本ペースで継続発信します。" },
                { n: "08", t: "月次でKPIを確認しPDCAを回す", b: "GBPインサイト（問い合わせ数・経路検索数）・自社サイトのオーガニック流入・フォーム問い合わせ数・口コミ数を月次で確認します。数値の変化に基づき施策の優先順位を調整し、集客の精度を継続的に改善します。" },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              不動産会社のWeb集客の効果を正しく把握するために、以下のKPIを定期的に計測します。数値の変化を追うことで、どの施策が成果につながっているかを可視化し、費用対効果の高い施策に集中できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { kpi: "GBP問い合わせ数（月次）", where: "GBPインサイト", desc: "GoogleマップのGBPから電話・フォームへ進んだ件数。MEO対策の直接的な成果指標で、月次で増減を確認します。" },
                { kpi: "物件ページセッション数", where: "Google Analytics", desc: "自社サイトの物件一覧・エリアページへのアクセス数。SEO対策の効果を測る基本指標で、キーワード別の流入も確認します。" },
                { kpi: "見学予約数（フォーム・LINE）", where: "フォーム管理・LINE管理画面", desc: "自社チャネル経由の見学予約・相談予約件数。ポータルサイト経由と自社経由の比率変化を月次で確認します。" },
                { kpi: "CVR（問い合わせ転換率）", where: "Google Analytics", desc: "サイト訪問者のうち問い合わせに転換した割合。ページ設計・CTA・フォームの改善効果を測定します。" },
                { kpi: "Googleマップ口コミ数・平均評価", where: "GBPインサイト", desc: "累計口コミ数と平均星評価。新規顧客が来店を判断する最重要の信頼指標で、口コミ獲得フローの成果を反映します。" },
                { kpi: "サイト全体のオーガニック流入数", where: "Google Search Console", desc: "Googleの自然検索からのクリック数。コンテンツSEO・物件ページSEOの成果を総合的に示す指標です。" },
              ].map((item) => (
                <div key={item.kpi} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "200px", flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em" }}>{item.where}</p>
                  </div>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "不動産業の集客構造を理解した設計", b: "売買・賃貸・管理・買取と事業モデルが多様な不動産業に対して、業態ごとのターゲットとキーワード構造を理解した上でSEO・MEO・ホームページを設計します。一般的なWebマーケティング会社とは異なる業種特化の視点で提案します。" },
                { t: "宅建業法広告規制に配慮したコンテンツ設計", b: "不動産広告は宅地建物取引業法・公正競争規約による規制があります。法令リスクを避けながら集客力の高いコンテンツを設計し、SEO・LP・SNSのすべての表現を適切な範囲でご提案します。" },
                { t: "SEO・MEO・ホームページを一社完結で対応", b: "地域SEOコンテンツ制作・GBP最適化・ホームページ制作・SNS設計をサイプレス一社で完結します。制作会社・SEO会社・MEO会社をバラバラに契約することなく、戦略の一貫性を保ちながら集客施策を進められます。" },
                { t: "小規模・地域密着不動産会社に合わせた予算設計", b: "大規模予算を前提とした提案ではなく、地域密着型の小規模不動産会社が継続できる予算規模での施策をご提案します。優先順位を明確にした段階的な集客力向上プランで、費用対効果の高い施策から実施します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              不動産会社向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "地域名×物件種別のSEO戦略", b: "「葛飾区 賃貸」「亀有 マンション 売却」などのキーワードで自社サイトの検索上位を目指すSEO戦略を設計。地域コンテンツ・物件紹介ページ・売却相談ページを組み合わせた多角的な集客体制を構築します。" },
                { t: "GBP口コミ増加で信頼度UP", b: "成約後の口コミ依頼フロー設計・GBP写真の充実・週次投稿で口コミ件数と平均評価を向上させ、Googleマップでの信頼性を高めます。地域検索でのローカルパック表示を目指します。" },
                { t: "物件情報のコンテンツSEO設計", b: "物件情報ページへのSEO設計・地域コンテンツの制作・CMS導入で更新しやすいサイト構造を構築。ポータルサイトに依存しない自社流入の拡大を実現します。" },
                { t: "SNSで物件紹介・地域情報発信", b: "Instagram・YouTubeでの物件紹介・地域暮らし情報の発信設計。エリアを検討中の顧客に物件探し前の段階からアプローチし、来店・問い合わせへの導線を構築します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある失敗と改善策 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              不動産会社のWebマーケティングでよくある失敗と改善策
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              不動産会社のWeb集客でありがちな失敗パターンと、その具体的な改善策をまとめました。これらを事前に把握することで、無駄なコストと時間を省いた効率的な集客が実現できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "失敗01", t: "GBPに情報が少なく写真が古いまま放置されている", b: "Googleビジネスプロフィールが基本情報のみ・写真が数年前のもの・口コミへの返信なしという状態では、地域検索での信頼性が低下しローカルパック表示も困難になります。改善策：月1回以上の写真追加・週2回のGBP投稿・全口コミへの返信を継続することで、Googleからの評価が向上します。" },
                { n: "失敗02", t: "物件ページのSEOが設計されておらずページが量産されているだけ", b: "物件ページのtitle・description・見出しが「物件名：○○マンション」のみで地域名・物件種別が含まれていない状態では、Googleから検索意図との関連性が低く評価されます。改善策：物件ページのURLに地域・物件種別を含め、title・descriptionに「○○区 賃貸 1LDK 〇〇円台」などを自動生成する設計が必要です。" },
                { n: "失敗03", t: "「会社案内」のようなホームページで信頼情報が伝わらない", b: "会社概要・物件一覧・問い合わせフォームだけのシンプルなホームページでは、新規顧客が「この会社に相談したい」と感じるコンテンツが不足しています。改善策：担当者紹介・お客様の声・地域情報コンテンツ・取引の流れを追加し、信頼と専門性を伝える情報設計に改善します。" },
                { n: "失敗04", t: "ポータルサイト脱却を急ぎすぎて集客が激減する", b: "自社集客チャネルが整備される前にポータルサイトの掲載を停止すると、問い合わせが一時的に激減するリスクがあります。改善策：自社サイトのオーガニック流入とGBP問い合わせが月○件を超えるまでポータルと並行運用し、段階的に移行することで安全に脱却できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "60px", flexShrink: 0, paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* コンバージョン設計 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Conversion Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              不動産会社のコンバージョン設計
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                不動産会社のWebサイトでは「問い合わせのハードルを下げる設計」が最も重要なCV改善施策です。フォームの入力項目を最小化（名前・連絡先・相談内容の3項目）し、「まずはお気軽に」という低ハードルな訴求文を設置します。「LINE相談」「電話相談」「フォーム」の3チャネルを全ページのヘッダー・フッターに固定表示することで、問い合わせの機会損失を防ぎます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                「無料査定」「無料相談」という訴求は不動産業の最も効果的なCV設計です。「査定するだけでも大丈夫です」「売却を決めていなくても相談できます」というコピーで、来店・問い合わせへの心理的ハードルを下げます。スマートフォンのクリックtoコール（電話番号タップで即電話）の実装も問い合わせ獲得に効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                「担当者の顔写真＋ひと言メッセージ」を問い合わせボタンの近くに配置することで、「この人に連絡していいんだ」という安心感を生み出します。不動産は人への信頼が問い合わせのトリガーになる業種であるため、デジタルの中でも「人」を前面に出した設計がCVRを高めます。
              </p>
            </div>
          </div>
        </section>

        {/* 業態別・物件種別の集客アドバイス */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>By Business Type</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              業態別・物件種別のWeb集客アドバイス
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              不動産会社の事業モデル・取扱物件によって、Webマーケティングの優先施策は異なります。自社の業態に合った施策から実施することで、費用対効果の高い集客が実現します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "賃貸仲介", t: "地域×物件条件のSEO＋GBP整備が最優先", b: "「葛飾区 ペット可 賃貸」「亀有 1LDK 家賃 5万円台」など条件を絞り込んだキーワードでのSEO対策と、Googleマップでのローカルパック表示が最も効果的な集客手段です。ポータルサイトとの差別化として、エリア別の家賃相場コンテンツや生活情報コラムを自社サイトで充実させます。" },
                { n: "売買仲介", t: "売却相談LP＋E-E-A-Tコンテンツで信頼構築", b: "「葛飾区 不動産 売却 相談」「亀有 マンション 購入 費用」などの購入・売却検討層向けキーワードでのSEOとともに、担当者の専門知識・成約事例・顧客の声を掲載したコンテンツで「この会社は信頼できる」という確信を与えることが来店につながります。" },
                { n: "不動産管理", t: "オーナー向けLPと入居者向けページの二本柱", b: "管理会社のWebは「不動産オーナー向けの管理委託ページ」と「入居者向けの物件情報ページ」を明確に分けて設計します。オーナー向けには管理実績・対応内容・費用感・担当者紹介を、入居者向けには物件情報・周辺環境・申し込み導線を丁寧に整備します。" },
                { n: "土地・建物買取", t: "「早く売りたい」ニーズに直接応答するLPとSEO", b: "「葛飾区 不動産 買取 査定」「空き家 買取 葛飾」など、早期売却ニーズを持つ売主を直接ターゲットにしたキーワードと専用ランディングページを作成します。「最短〇日で買取可能」「現金化スピード」「手続きの簡便さ」を前面に出した訴求設計が有効です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "60px", flexShrink: 0, paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 不動産E-E-A-T・AIO対策 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>E-E-A-T / AIO</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              不動産会社のE-E-A-T強化とAI検索対策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                不動産業はGoogleが「YMYL（Your Money or Your Life）」に分類する高リスク分野です。大きな金額が動く不動産取引において、Googleは「専門性・権威性・信頼性・経験（E-E-A-T）」を持つサイトを優先的に評価します。宅地建物取引士の資格・取引年数・地域実績・担当者の顔出しなど、信頼の証拠を具体的に掲載することがSEO評価の底上げに直結します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                ChatGPT・Gemini・Perplexityなどへの引用（AIO対策）には、「葛飾区の家賃相場2025年版」「不動産売却の流れ完全ガイド」「賃貸と購入の比較シミュレーション」など、AI検索で引用されやすい構造化された専門情報コンテンツを自社サイトで発信することが有効です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                Schema.orgの「RealEstateAgent」「LocalBusiness」タイプを実装することで、Googleの構造化データ理解を助け、リッチ検索結果での表示機会を高めます。BreadcrumbList・FAQPage・Organization Schemaの組み合わせが不動産会社のSEOにおける最低限の構造化データ設計です。
              </p>
            </div>
          </div>
        </section>

        {/* 対応エリア */}
        <section style={{ background: "#ffffff", padding: "48px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Service Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>
              対応エリア
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              葛飾区・江戸川区・墨田区・荒川区・足立区・北区など東京東部エリアを中心に、東京都全域・近隣県にも対応しています。地域の競合状況・検索需要の特性を踏まえたローカルSEO・MEO戦略をご提案します。オンライン相談にも対応しているため、全国どこからでもご相談いただけます。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              葛飾区内では亀有・金町・柴又・新小岩・青砥・高砂・綾瀬・水元・奥戸エリアの不動産会社への対応実績があります。地域名を含むキーワードでのSEO・MEO設計をご支援します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              ご相談はすべてオンラインで完結します。初回ご相談は無料です。お気軽にお問い合わせください。
            </p>
          </div>
        </section>

        <FaqSection items={faqItems} heading="不動産会社のWeb集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="不動産会社のWeb集客ご相談"
          body="不動産会社のMEO対策・ホームページ制作・SEO対策・SNS活用をご相談ください。ポータルサイト依存から脱却した自社集客の仕組みを構築します。まずはお気軽にご相談ください。初回ご相談は無料です。"
        />
      </main>
      <Footer />
    </>
  );
}
