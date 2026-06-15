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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/area/chiba" },
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
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区（千葉境界）" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモート全国対応" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/knowledge/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: "https://cypress-web.jp/" },
          { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://cypress-web.jp/area" },
          { "@type": "ListItem", position: 3, name: "千葉県", item: "https://cypress-web.jp/area/chiba" },
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
              <Link href="/" style={{ color: "#9CA3AF", textDecoration: "none" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#9CA3AF", textDecoration: "none" }}>対応エリア</Link>
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
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              千葉県は東京都と比較してMEO・SEOの競合が少なく、正しい施策を実行すれば短期間での集客改善が期待できます。松戸・市川への訪問相談対応、その他エリアはオンライン完全対応します。
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
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
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
                { area: "千葉市", desc: "千葉県の県庁所在地で人口約98万人。中央区・美浜区・花見川区など各エリアで業種別の需要が異なる。競合は多いが市場規模も大きく、ニッチ特化で勝てるキーワードが多い。" },
                { area: "流山市・浦安市", desc: "東京からの移住人気エリアで人口急増中。特に流山はファミリー層の流入が著しく、育児・医療・飲食への新規需要が拡大中。MEO競合がまだ少ない今がチャンスのエリア。" },
                { area: "習志野市・八千代市", desc: "東葉高速線・京成線沿線の住宅エリア。競合が少なくMEO効果が出やすい。地域密着型の美容・医療・士業ビジネスへの施策を得意とする。" },
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

        {/* Section 6: 依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに千葉県の集客を依頼するメリット
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
