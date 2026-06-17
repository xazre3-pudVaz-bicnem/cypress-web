import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "千葉県のSEO対策・MEO対策・Web制作｜松戸・市川・船橋・柏・千葉市の集客支援",
  description: "千葉県のSEO対策・MEO対策・ホームページ制作。松戸市・市川市・船橋市・柏市・千葉市・流山市・浦安市の中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。東京より競合少なく効果が出やすい。",
  keywords: ["千葉県 SEO", "千葉県 MEO", "松戸 集客", "市川 MEO", "船橋 ホームページ制作", "千葉市 SEO", "柏 Web制作", "流山 MEO"],
  openGraph: {
    title: "千葉県のSEO対策・MEO対策・Web制作｜松戸・市川・船橋・柏の集客支援",
    description: "千葉県の中小企業・店舗のSEO・MEO対策を葛飾区拠点のサイプレスが支援。東京より競合が少なくMEOで上位を取りやすいエリア多数。松戸・市川への訪問相談も対応。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/chiba" },
};

const faqItems = [
  {
    q: "千葉県での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に隣接する松戸市・市川市・柏市への訪問相談に対応しています。船橋市・千葉市・流山市・浦安市・習志野市などはオンライン（Zoom・Google Meet）でのご相談が基本ですが、ご要望があれば訪問も調整可能です。",
  },
  {
    q: "千葉県でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "業種・エリアによりますが、東京都内と比較して競合が少ないエリアが多く、正しい施策で1〜3か月での順位向上が期待できるケースもあります。松戸・市川など都内隣接エリアは競合が増えてきているため継続的な施策が重要です。",
  },
  {
    q: "千葉県での競合状況はどうですか？",
    a: "東京都と比較して全体的に競合が少なく、MEOで上位を取りやすいエリアが多いです。特に流山市・印西市・習志野市など郊外エリアはMEO競合が非常に少なく、基本的なGBP最適化で上位を取れるケースが多くあります。",
  },
  {
    q: "千葉県の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。千葉県内の飲食店・美容室・整骨院・歯科クリニック・税理士・行政書士・工務店など各業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "千葉県は東京から離れていますが、対応できますか？",
    a: "はい。葛飾区から松戸・市川は電車でアクセスが良く、訪問相談も対応しています。船橋・千葉市・柏など遠方のエリアはオンラインで完全対応します。施策実行はすべてリモートで実施できます。",
  },
  {
    q: "千葉県内の複数店舗に一括で対応できますか？",
    a: "はい。千葉県内に複数店舗・拠点をお持ちの事業者への一括MEO・SEO対応が可能です。各店舗のGBP管理・SEO施策を統合的に管理し、効率よく集客改善を実現します。",
  },
  {
    q: "リモートのみで全ての施策を完結できますか？",
    a: "はい。初回ヒアリング・提案・施策実行・月次レポートまでZoom・メールで完全リモート対応が可能です。ホームページ制作・SEO・MEO対策のすべての工程をオンラインで完結できます。",
  },
  {
    q: "千葉県全域に対応していますか？銚子や館山など遠方も可能ですか？",
    a: "はい、千葉県全域にオンラインで対応しています。銚子市・館山市・勝浦市・南房総市など千葉県南部・東部エリアも、Zoom・メールで完全リモート対応が可能です。距離に関わらずサービス内容・料金に変わりはありません。",
  },
  {
    q: "ロードサイド型・駐車場来店型の店舗でもMEO対策は有効ですか？",
    a: "はい、とても有効です。千葉県はロードサイド型の店舗（整備工場・ホームセンター・ファミリーレストラン・ドラッグストアなど）が多く、車での来店を前提にしたMEO対策が特に重要です。GBPでの駐車場情報掲載・経路案内の最適化・車でのアクセスキーワード設計を行います。",
  },
  {
    q: "千葉市と松戸・柏では競合環境に差がありますか？",
    a: "はい、差があります。千葉市は県庁所在地で人口規模が大きいため業種によっては競合が多いケースがあります。一方、松戸・柏はサブ都市圏として競合は中程度で、専門特化やニッチキーワード戦略により比較的早く成果が出やすい環境です。エリア別・業種別に最適な戦略をご提案します。",
  },
  {
    q: "千葉県での初回相談はどのように進みますか？",
    a: "まずはお問い合わせフォームまたはお電話でご連絡ください。Zoom・Google Meetでの無料オンライン相談（約60分）にて、現状ヒアリング・競合調査・おすすめ施策のご提案を行います。松戸・市川・柏エリアは訪問相談も可能です。",
  },
  {
    q: "千葉県のコンサルタントが訪問してくれますか？",
    a: "葛飾区拠点のサイプレスから松戸市・市川市・柏市への訪問対応が可能です。その他のエリア（船橋・千葉市・流山など）はオンラインが基本ですが、状況によって調整可能です。まずはオンラインでご相談のうえ、必要に応じて訪問日程を検討します。",
  },
  {
    q: "車での来店を促す店舗に特化したGBP設定はできますか？",
    a: "はい対応しています。駐車場台数・駐車場の写真掲載・経路情報の最適化・「〇〇 駐車場あり」などのキーワード設計を含めたGBP最適化を行います。ロードサイド型店舗では駐車場情報がMEO効果を高める重要な要素です。",
  },
  {
    q: "千葉県でSEO・MEO対策を依頼する場合の料金目安はありますか？",
    a: "MEO対策は月額3万円〜、SEO対策は月額5万円〜、ホームページ制作は30万円〜を目安にしています。千葉県のエリア特性・業種・競合状況に合わせた最適なプランをご提案しますので、まずは無料相談でご要望をお聞かせください。",
  },
  {
    q: "千葉県でGoogleビジネスプロフィール（GBP）の新規作成から依頼できますか？",
    a: "はい。GBP未登録の事業者様の新規作成・オーナー確認・初期設定・写真撮影アドバイス・カテゴリ設定まで一貫してサポートします。千葉県各エリアの競合状況を調査したうえで最適な設定を行います。",
  },
  {
    q: "千葉県での口コミ獲得支援も対応していますか？",
    a: "はい対応しています。口コミ獲得のための仕組み作り（来店後フォローメール・QRコード設置の提案）や、口コミへの返信テンプレート作成を支援しています。千葉県のエリア特性に合わせた口コミ促進施策をご提案します。",
  },
  {
    q: "千葉県での施策の進捗はどのように報告されますか？",
    a: "毎月、Googleマップ順位・GBPインサイト（表示回数・経路リクエスト数・通話数等）・SEO検索順位・アクセス解析をまとめた月次レポートをメール・PDF形式でご提供します。Zoomでの月次ミーティングも対応可能です。",
  },
  {
    q: "千葉県の新規開業・開店前から依頼できますか？",
    a: "はい。開業・開店前からのご依頼を歓迎しています。GBP作成・ホームページ制作・SNS立ち上げ・SEO初期設定を開業前から実施することで、オープン初日から集客できる状態を整えます。千葉県の各エリアで競合が少ない今が参入の最良タイミングです。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/area/kanagawa", label: "神奈川県", desc: "神奈川県の集客支援" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモート全国対応" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/industries/real-estate", label: "不動産業の集客", desc: "不動産向けSEO・MEO" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食店向けMEO対策" },
  { href: "/industries/clinic", label: "クリニックの集客", desc: "医療・歯科向け集客" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金・プラン詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区（千葉境界）" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/knowledge/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索対策の基礎" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索対策サービス" },
  { href: "/blog", label: "Webマーケティングブログ", desc: "SEO・MEO情報" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずは無料相談" },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.cypress-all.co.jp/area" },
          { "@type": "ListItem", position: 3, name: "千葉県", item: "https://www.cypress-all.co.jp/area/chiba" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
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
              <Link href="/area" style={{ color: "#6B7280" }}>対応エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>千葉県</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Chiba Prefecture</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              千葉県のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              東京都葛飾区に隣接する千葉県（松戸市・市川市・船橋市・柏市・千葉市・流山市・浦安市・習志野市）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              千葉県は東京都と比較してMEO・SEOの競合が少なく、正しい施策を実行すれば短期間での集客改善が期待できます。松戸・市川への訪問相談対応、その他エリアはオンライン完全対応します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#9CA3AF", maxWidth: "640px" }}>
              対応エリア：松戸市・市川市・船橋市・柏市・千葉市・流山市・浦安市・習志野市・野田市・八千代市・我孫子市・鎌ヶ谷市・四街道市・印西市・白井市・富里市・成田市・佐倉市・ほか千葉県全域
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (6).png"
            alt="千葉県のビジネスミーティング"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section 1: ビジネス環境と集客課題 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Market</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              千葉県のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "東京からの移住・出店増加エリア", b: "テレワーク普及・住環境重視の傾向から、東京から千葉県への移住者・出店企業が増加しています。松戸・流山・市川・浦安などは特にファミリー層の流入が多く、新規住民向けの生活サービス需要が拡大しています。" },
                { n: "02", t: "東京より競合が少なくMEOで上位を取りやすい", b: "千葉県内の多くのエリアは東京都内と比較してMEO・SEOの競合が少ない状態です。特に松戸・柏・流山・習志野など郊外エリアは、今すぐ基本的な施策を実施するだけで上位表示が期待できるチャンスがあります。" },
                { n: "03", t: "市川・松戸は葛飾区・江戸川区との商圏重複", b: "市川市・松戸市は東京都葛飾区・江戸川区と商圏が重複しており、東京側からの来客も一定数見込めます。「東京東部＋千葉西部」を広域ターゲットにしたSEO・MEO戦略が有効です。" },
                { n: "04", t: "飲食・美容・歯科・税理士の地域需要が高い", b: "流入増加エリアでは飲食店・美容室・歯科クリニック・税理士・行政書士など生活サービス業の需要が拡大しています。新規移住者は地元のサービスをGoogleマップ・検索エンジンで探すため、MEO・SEO対策は新規顧客獲得に直結します。" },
                { n: "05", t: "Webマーケティング未着手の事業者が多い", b: "千葉県の中小企業・個人事業主はWebマーケティングへの取り組みが東京より遅れているケースが多く見られます。今から施策を開始することで、競合が少ないうちに優位なポジションを確保できます。" },
                { n: "06", t: "東京アクセスが良く通勤・通学ニーズも高い", b: "千葉県内には東京へのアクセスが良いエリアが多く、通勤・通学層の生活密着型サービス需要も高いです。駅近ビジネスのMEO対策は通勤者の来店獲得に特に効果的です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: SEO・MEO対策の特徴 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>SEO / MEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              千葉県でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              千葉県は東京と比較してMEO・SEO競合が少なく、費用対効果の高い集客が期待できます。エリアと業種に合わせた精度の高いキーワード設計で、短期間での成果を目指します。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「松戸 歯科」「松戸 美容室」「市川 整骨院」「市川 カフェ」「船橋 居酒屋」「船橋 美容院」「柏 税理士」「柏 整体」「千葉市 SEO」「流山 ランチ」「浦安 クリニック」「習志野 美容室」——千葉県各エリアで月間検索需要があり、競合が少ないキーワードが多数あります。" },
                { n: "02", t: "MEO競合レベル：松戸・市川は中程度、その他は低〜中", b: "東京隣接の松戸・市川はMEO競合が増加傾向にありますが、それでも東京より少ない状態です。船橋・柏・千葉市・流山・習志野はさらに競合が少なく、少ない施策費用で大きな成果が期待できます。" },
                { n: "03", t: "東京×千葉の広域キーワード設計", b: "「市川・江戸川区近郊で〇〇をお探しの方」「松戸・葛飾区エリアの〇〇」など東京と千葉をまたいだ広域キーワードのSEO設計が可能です。東京側の商圏も取り込んだ施策でより広い集客を実現します。" },
                { n: "04", t: "ローカルSEOとコンテンツSEOの組み合わせ", b: "「千葉県 〇〇」「松戸市 〇〇」などのローカルキーワードでの上位表示と、専門性の高いコンテンツSEO（業種別のお役立ち情報）を組み合わせることで、中長期的に安定した検索流入を構築します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: サービス */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Our Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              千葉県でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「松戸 歯科」「船橋 美容室」「千葉市 税理士」など千葉県各エリアの地域検索でGoogleマップ上位表示を目指します。GBPの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を月次で実施します。" },
                { n: "02", t: "千葉県向けローカルSEO対策", b: "千葉県内の地域特性を活かしたローカルSEO戦略を設計します。「千葉市 〇〇」「船橋市 〇〇」など地域名+業種キーワードで地元ユーザーへのアプローチを強化します。東京×千葉の広域キーワード設計も行います。" },
                { n: "03", t: "ホームページ・LP制作（オンライン対応）", b: "千葉県内の各業種に対応したホームページ・ランディングページ制作をオンラインで完結します。Next.js+TypeScript構成の高速・SEO対応サイトを制作し、集客からCV改善まで一貫支援します。" },
                { n: "04", t: "AIO対策（AI検索対策）", b: "千葉県の事業者がChatGPT・Gemini等で「千葉の〇〇おすすめ」と検索した際に引用されるための情報設計を行います。E-E-A-T強化・構造化データ・FAQコンテンツ設計でAI検索での存在感を高めます。" },
                { n: "05", t: "複数店舗の一括MEO・SEO管理", b: "千葉県内に複数の店舗・拠点をお持ちの事業者への一括管理が可能です。各拠点のGBP最適化・統合的なSEO施策により、効率よく全拠点の集客改善を実現します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: 主要エリア・地域特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Area Breakdown</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              千葉県の主要エリアと地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "松戸市・市川市", desc: "東京葛飾区・江戸川区と隣接する千葉県入口エリア。東京からの流入が多く集客ポテンシャルが高い。訪問相談可能なエリア。MEO競合は増加傾向だが東京より少ない。" },
                { area: "船橋市", desc: "千葉県最大の人口を誇る都市。ショッピングモール（ららぽーとTOKYO-BAY等）と競合する中小企業は差別化が必須。MEO・SEOで地元客を確実に獲得する戦略が有効。" },
                { area: "柏市", desc: "TXと常磐線が通る千葉北部の拠点都市。商業集積があり飲食・美容・医療の需要が高い。流山への人口流出があるが、柏エリアの地元需要は依然として高い。" },
                { area: "千葉市（中央区・美浜区）", desc: "千葉県の県庁所在地で政令指定都市。人口約98万人で市場規模が大きく、中央区・美浜区のビジネス集積が高い。競合は多いが専門特化戦略でニッチキーワードを狙える。" },
                { area: "流山市・我孫子市", desc: "つくばエクスプレス沿線の流山市は移住人気が高く人口急増中。ファミリー層向けサービス需要が特に旺盛で、MEO競合がまだ少ない今が先行優位を取るチャンス。" },
                { area: "習志野市・八千代市", desc: "東葉高速線・京成線沿線の落ち着いた住宅エリア。競合が少なくMEO効果が出やすい。地域密着型の美容・医療・士業ビジネスへの施策を得意とする。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: 集客チャネル */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Channel Mix</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              千葉県でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要・効果大", desc: "東京より競合が少ない千葉県では、MEO対策の費用対効果が特に高い。正しいGBP最適化・口コミ獲得・定期投稿で短期間の上位表示が期待できるエリアが多数ある。" },
                { label: "ローカルSEO", tag: "中長期で安定", desc: "「〇〇市 〇〇」のローカルキーワードで安定した検索流入を構築。東京×千葉の広域キーワード設計で商圏を最大化できる。競合が少ない今が参入のベストタイミング。" },
                { label: "Web制作", tag: "基盤", desc: "MEO・SEOからの集客を確実に来店・問い合わせに変換する高品質なホームページ。千葉の移住層・ファミリー層に刺さるコンテンツ設計と信頼感あるデザインが重要。" },
                { label: "SNS（Instagram・LINE）", tag: "補完", desc: "千葉の子育て層・主婦層にはInstagramとLINE公式アカウントが有効。地域コミュニティへの浸透・口コミ促進でMEO・SEOと相乗効果を生む。" },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>{item.label}</p>
                    <span style={{ fontSize: "11px", background: "#f8f6f2", color: "#c4b89a", border: "1px solid #E8E4DC", borderRadius: "4px", padding: "2px 8px", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{item.tag}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Band */}
        <section style={{ background: "#0d1b2a", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
              {[
                { val: "約628万人", label: "千葉県の総人口" },
                { val: "54市町村", label: "千葉県の市町村数" },
                { val: "約64万人", label: "船橋市（千葉最大市）" },
                { val: "約98万人", label: "千葉市（政令指定都市）" },
                { val: "低〜中", label: "県内MEO競合レベル" },
                { val: "1〜3ヶ月", label: "MEO効果が出やすい目安" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#c4b89a", fontWeight: 700, marginBottom: "6px" }}>{s.val}</p>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section A: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry Guide</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              千葉県での業種別集客ポイント
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              千葉県の各エリアに根付いた業種別の需要特性を理解した上で、最適な集客戦略を設計します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ",
                  desc: "流山・浦安のファミリー層、松戸・市川の通勤者など多様な顧客層が存在します。「〇〇市 ランチ」「〇〇駅近 カフェ」などのMEOキーワードで来店経路を確保することが重要です。口コミ件数と写真品質がMEO順位に大きく影響します。",
                },
                {
                  industry: "美容室・エステ",
                  desc: "千葉県の住宅エリアでは主婦層・ファミリー層への訴求が集客の核となります。Instagramとの連携でビジュアル訴求を強化しながら、Googleマップでの「〇〇市 美容室」検索からの流入を安定させる二軸戦略が効果的です。",
                },
                {
                  industry: "歯科・クリニック",
                  desc: "移住者が多い流山・浦安・習志野などでは「かかりつけ医」を探す需要が高まっています。「〇〇市 歯科 子供」「〇〇駅 内科 土曜診療」など具体的な検索意図を捉えたMEOキーワード設計が集患に直結します。",
                },
                {
                  industry: "整骨院・整体",
                  desc: "通勤者が多い松戸・市川・船橋では「肩こり・腰痛」訴求のMEO対策が有効です。「駅近」「夜間対応」「駐車場あり」などの条件キーワードをGBPに盛り込み、ロードサイド型店舗では車来店ターゲットへのアプローチも欠かせません。",
                },
                {
                  industry: "税理士・行政書士",
                  desc: "千葉市や船橋市など事業者が集まるエリアでは士業へのニーズが高く、「〇〇市 税理士 中小企業」などのローカルSEOが有効です。法人・個人事業主の新規開業需要も多く、専門特化のコンテンツSEOが信頼獲得の鍵となります。",
                },
                {
                  industry: "不動産・住宅",
                  desc: "東京からの移住需要が多い千葉県では不動産需要が旺盛です。「〇〇市 新築戸建て」「〇〇駅 賃貸」などの地域密着キーワードのSEO・MEO対策が有効で、移住検討層が検索するロングテールキーワード対策も重要です。",
                },
                {
                  industry: "工務店・リフォーム",
                  desc: "戸建て住宅が多い千葉県の郊外エリアでは工務店・リフォーム業者への需要が安定しています。「〇〇市 リフォーム」「千葉県 外壁塗装」などのローカルSEO・MEOと、施工事例を活用したコンテンツSEOで信頼性を高める戦略が有効です。",
                },
                {
                  industry: "学習塾・習い事",
                  desc: "ファミリー層・子育て世代が多い千葉県では学習塾・スポーツ教室・音楽教室などへの需要が高いです。「〇〇市 学習塾 小学生」「〇〇駅 ピアノ教室」など子供向けサービスのMEO対策は、Instagramとの相乗効果も期待できます。",
                },
              ].map((item) => (
                <div key={item.industry} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: 主要エリア別特性（詳細版） */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Sub-Area Characteristics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              主要エリア別特性
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              千葉県内でもエリアによって商圏規模・集客競合・顧客層が大きく異なります。各エリアの特性を踏まえた戦略で確実に成果を目指します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              {[
                {
                  area: "千葉市（中央区・美浜区）",
                  desc: "政令指定都市である千葉市の都心部。中央区は官庁・ビジネス街が集まり、美浜区はZOZOマリンスタジアム・幕張メッセ周辺のコマーシャルエリア。B2Bサービスと観光集客の両立が可能で、専門特化のニッチキーワードで戦いやすい市場です。",
                },
                {
                  area: "市川市",
                  desc: "東京都江戸川区と隣接し、東西線・総武線・京成線と複数路線が交差する交通利便性の高い都市。東京通勤者が多くベッドタウンとしての性質が強い一方、本八幡・市川・行徳などの商業エリアでは地元需要も旺盛です。",
                },
                {
                  area: "船橋市",
                  desc: "千葉県最大の人口（約64万人）を持ち、ららぽーとTOKYO-BAYなど大型商業施設が集まる商業都市。競合は多めですが市場規模も大きく、専門特化とMEO・SEOの組み合わせで中小事業者でも安定した集客が狙えます。",
                },
                {
                  area: "松戸市",
                  desc: "東京都葛飾区・足立区と隣接し、常磐線・新京成線が走る千葉西部の主要都市。東京からの来客もある広域商圏が魅力で、サイプレスから訪問コンサルティングに対応できる数少ないエリアのひとつです。",
                },
                {
                  area: "柏市・流山市（千葉NTR）",
                  desc: "TXおおたかの森を核とした流山市は子育て世代の移住先として全国的に注目されています。柏市との連携エリアとして消費需要が急拡大中で、特に保育・教育・医療・飲食ジャンルの新規参入には絶好のタイミングです。",
                },
                {
                  area: "我孫子市・野田市（千葉北部）",
                  desc: "常磐線・東武野田線沿線ののどかな住宅都市。MEO・SEO競合が非常に少なく、基本的な施策だけで上位表示が期待できるエリアです。地域密着型のサービス業・医療・整体などの新規開業に高いポテンシャルがあります。",
                },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 実装フロー */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              千葉県での集客施策 実装フロー
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "8px" }}>
              ご相談から施策実行・成果報告まで、すべてのステップをオンラインで完結できます。松戸・市川・柏エリアは訪問対応も可能です。
            </p>
            <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              施策開始から最短1か月でGBP表示回数・クリック数の変化をデータで確認できます。千葉県の各エリアで競合が増える前に、今すぐ着手することが集客成功の鍵です。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { step: "STEP 01", title: "無料相談・現状ヒアリング", desc: "Zoom（または松戸・市川・柏エリアは訪問）にて現状の集客課題・ホームページの状況・GBPの設定状況・競合環境をヒアリングします。初回相談は無料で約60分間対応しています。" },
                { step: "STEP 02", title: "千葉県エリア競合調査", desc: "対象エリア（市区町村）と業種でのMEO・SEO競合状況を詳細に調査します。千葉県内でどのキーワードが狙いやすいか・競合がどの程度いるかを可視化してご報告します。" },
                { step: "STEP 03", title: "施策プラン・キーワード設計", desc: "競合調査の結果をもとに、エリア・業種・予算に最適なMEO・SEO・Web制作プランを設計します。千葉県内の商圏特性（ロードサイド型・駅近型など）に合わせたキーワード選定を行います。" },
                { step: "STEP 04", title: "GBP最適化・初期設定", desc: "Googleビジネスプロフィールの未設定項目の補完・カテゴリ最適化・写真掲載・サービス情報の整備・属性設定などを実施します。新規作成が必要な場合はオーナー確認から対応します。" },
                { step: "STEP 05", title: "ホームページ・LP制作", desc: "必要に応じてSEO対応・高速表示・スマホ最適化を満たした新規ホームページまたはランディングページを制作します。千葉県内の集客に特化したコンテンツ設計・導線設計を行います。" },
                { step: "STEP 06", title: "SEOコンテンツ・構造化データの実装", desc: "「千葉県 〇〇」「〇〇市 〇〇」などのローカルキーワードで上位を目指すコンテンツを制作し、Schema.org構造化データ・FAQPage・LocalBusiness等を実装します。" },
                { step: "STEP 07", title: "口コミ獲得・GBP投稿の継続運用", desc: "口コミ獲得のための導線設計（来店後フォロー・QRコード）を整備し、GBPへの定期投稿（週1〜2回）を代行します。Googleが評価する「活発なGBP」を維持します。" },
                { step: "STEP 08", title: "月次レポート・改善PDCAサイクル", desc: "毎月、GBPインサイト（表示回数・経路クリック数・電話件数）・SEO検索順位・アクセス解析をレポート化してご提供します。データに基づいた施策の改善提案を継続的に実施します。" },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "80px" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.1em" }}>{item.step}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: サイプレスに依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
              {[
                { n: "01", t: "東京隣接エリアへの訪問相談対応", b: "葛飾区から近い松戸市・市川市・柏市への訪問相談に対応しています。東京都内と変わらない対面サポートが可能です。船橋・千葉市などはオンラインで完全対応します。" },
                { n: "02", t: "「競合が少ない今」が参入の最大チャンス", b: "千葉県内の多くのエリアはMEO・SEO競合がまだ少ない状態です。今施策を開始することで、競合が増える前に上位ポジションを確保できます。早期参入のアドバンテージを最大限に活用するためのサポートを提供します。" },
                { n: "03", t: "東京×千葉の広域集客設計", b: "東京都内（葛飾・江戸川区）と千葉県（松戸・市川）をまたいだ広域SEO・MEO戦略を一社で設計・実行できます。両エリアの商圏をカバーした集客で最大限の顧客獲得を目指します。" },
                { n: "04", t: "MEO・SEO・Web制作をワンストップで", b: "千葉県での集客に必要なMEO・SEO・ホームページ制作をすべてサイプレスに依頼できます。複数業者への依頼コスト・手間を省きながら、一貫した集客戦略を実行します。" },
              ].map((item) => (
                <div key={item.n}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", marginBottom: "12px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "17px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section style={{ background: "#f8f6f2", padding: "32px 0", borderTop: "1px solid #E8E4DC" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontSize: "12px", color: "#9CA3AF", lineHeight: "1.8" }}>
              ※ 株式会社サイプレスは葛飾区白鳥4-6-1-623を拠点とし、千葉県全域のSEO対策・MEO対策・Web制作をオンラインで承っております。効果・順位の保証はいたしかねますが、データに基づく継続的な改善施策で集客向上を目指します。
            </p>
          </div>
        </section>

        <FaqSection items={faqItems} heading="千葉県に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="千葉県のWeb集客、まずは無料相談から"
          body="松戸市・市川市・船橋市・柏市・千葉市のSEO対策・MEO対策・ホームページ制作のご相談は無料です。東京より競合が少ない今が始め時です。訪問相談・オンライン相談ともに対応しています。"
        />
      </main>
      <Footer />
    </>
  );
}
