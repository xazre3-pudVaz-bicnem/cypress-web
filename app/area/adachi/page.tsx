import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "足立区のSEO対策・MEO対策・ホームページ制作｜北千住・竹ノ塚・西新井の集客支援",
  description: "足立区のSEO対策・MEO対策・ホームページ制作。北千住・竹ノ塚・西新井・綾瀬・梅島・六町エリアの中小企業・店舗のWeb集客を葛飾区拠点のサイプレスが支援。訪問相談対応。",
  keywords: ["足立区 SEO", "足立区 MEO", "北千住 集客", "竹ノ塚 MEO", "西新井 ホームページ制作", "足立区 Web制作", "綾瀬 SEO"],
  openGraph: {
    title: "足立区のSEO対策・MEO対策・ホームページ制作｜北千住・竹ノ塚・西新井の集客支援",
    description: "足立区の中小企業・店舗のSEO・MEO対策を葛飾区隣接のサイプレスが支援。北千住・竹ノ塚・西新井・綾瀬エリアへの訪問対応も迅速。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/area/adachi" },
};

const faqItems = [
  {
    q: "足立区での対面相談・訪問サポートは可能ですか？",
    a: "はい。葛飾区に隣接する足立区への訪問相談に迅速に対応しています。北千住・竹ノ塚・西新井・綾瀬・梅島・六町エリアへの訪問打ち合わせが可能です。まずはお問い合わせください。",
  },
  {
    q: "足立区でMEO対策の効果が出るまでどのくらいかかりますか？",
    a: "業種・エリアの競合状況によりますが、正しい施策で1〜3か月での順位向上が目安です。北千住は競合が多いため時間がかかりますが、竹ノ塚・六町・梅島などはまだ競合が少なくより早く効果が出るケースがあります。",
  },
  {
    q: "足立区での競合状況はどうですか？",
    a: "北千住・西新井は飲食・美容・医療ともに競合が増加傾向にありますが、竹ノ塚・梅島・六町などはMEO・SEOの競合がまだ少ない状態です。競合分析を行ったうえで、勝てるエリア・キーワードを優先して施策を設計します。",
  },
  {
    q: "足立区の飲食店・美容室・クリニックにも対応できますか？",
    a: "はい。飲食店・美容室・整骨院・歯科クリニック・税理士・行政書士・工務店など足立区のあらゆる業種に対応しています。業種別の集客ノウハウをもとに最適なMEO・SEO・Web制作プランをご提案します。",
  },
  {
    q: "足立区専門の知識はありますか？",
    a: "はい。葛飾区に隣接する足立区のエリア特性・主要駅周辺の競合状況・ターゲット層の行動パターンを把握したうえで集客戦略を立案します。北千住の商業集積・竹ノ塚の住宅エリア特性など、地域ごとに最適化した施策を提供します。",
  },
  {
    q: "リモートでも足立区の集客支援を受けられますか？",
    a: "はい。Zoom・Google Meet・メールでのリモート対応も可能です。足立区の方には訪問相談を推奨していますが、ご都合に合わせて柔軟に対応します。リモートでの定例ミーティング・月次レポート共有もスムーズに行えます。",
  },
  {
    q: "MEOとSEO、どちらを先に始めるべきですか？",
    a: "来店型ビジネス（飲食・美容・クリニック等）はMEO対策を優先するのが一般的です。Googleマップの検索で即日来店につながる効果が期待できます。一方、比較検討が必要なサービス（士業・工務店等）はSEOとMEOを並行して取り組むことをお勧めします。",
  },
  {
    q: "北千住周辺での集客競合レベルはどのくらいですか？",
    a: "北千住は5路線が乗り入れる高集客エリアですが、飲食・美容・医療いずれも競合が多く、MEO・SEOともに「写真クオリティの向上」「口コミ件数の充実」「投稿頻度の維持」の3点で差をつける必要があります。また、「北千住 ランチ」「北千住 美容室 安い」など具体的な修飾語つきのロングテールキーワードを狙うことで、競合の少ないニッチな需要を取り込めます。",
  },
  {
    q: "西新井と北千住でMEOの競合差はありますか？",
    a: "北千住は足立区内で最も競合が多いエリアです。西新井はアリオ西新井（大型ショッピングモール）があるため中小店舗の競合対策が必要ですが、北千住ほどではありません。GBP投稿・口コミ・写真の充実と「西新井 〇〇 個人店」「西新井 〇〇 地元」などの検索意図に合わせたキーワード設計が有効です。",
  },
  {
    q: "竹ノ塚・梅島・六町エリアのMEO競合はどの程度ですか？",
    a: "竹ノ塚・梅島・六町は北千住と比べてMEO競合がまだ少なく、基本的なGoogleビジネスプロフィールの最適化と口コミ獲得だけで上位表示が期待できるケースが多くあります。特にこれらのエリアで新規開業される方は、早い段階でMEO対策を始めることを強くお勧めします。",
  },
  {
    q: "葛飾区と足立区を合わせた集客支援はできますか？",
    a: "はい。サイプレスは葛飾区を拠点としているため、葛飾区×足立区の広域集客戦略を一社で設計・実行できます。「葛飾区・足立区でお探しの方へ」という広域対応のコンテンツ設計や、両区をまたいだMEOキーワード設計が可能です。2エリア合わせて依頼いただくことで効率よく集客範囲を拡大できます。",
  },
  {
    q: "埼玉県川口市（足立区隣接）への対応はできますか？",
    a: "はい。足立区に隣接する埼玉県川口市・草加市・八潮市などのエリアへのMEO・SEO・ホームページ制作支援も対応しています。足立区と埼玉県南部は商圏が重複するケースも多いため、両エリアを見据えた集客戦略を設計することも可能です。",
  },
  {
    q: "足立区で業種別のMEO競合が少ないエリアはどこですか？",
    a: "六町・梅島・五反野・扇・西竹ノ塚などのエリアは、業種を問わずMEO競合がまだ少ない状態です。これらのエリアで来店型ビジネスを営む場合、早期にGBPを最適化するだけで上位表示が期待できます。競合調査の上、最も費用対効果の高いエリアとキーワードを特定してご提案します。",
  },
  {
    q: "足立区の飲食店がMEOで効果を出すために最低限やるべきことは何ですか？",
    a: "最低限取り組むべきは、①Googleビジネスプロフィールの情報を完全に埋める（営業時間・住所・電話番号・メニュー）、②高品質な写真を20枚以上登録する、③口コミへの丁寧な返信を行う、④週1回以上の投稿を継続するの4点です。これらを継続するだけでも、北千住以外のエリアでは大きな改善が見込まれます。",
  },
  {
    q: "足立区の美容室がSEOで上位表示を目指すには？",
    a: "美容室のローカルSEOでは「エリア名＋美容室」「エリア名＋ヘアサロン」「エリア名＋カット 安い」などのキーワードで特化したコンテンツページを作成することが重要です。施術メニューごとのページ・スタッフ紹介・お客様の声・予約導線を整備し、MEOと組み合わせることで相乗効果が生まれます。",
  },
  {
    q: "足立区でホームページ制作と同時にSEO対策もできますか？",
    a: "はい。サイプレスではホームページ制作の段階からSEOを組み込んで設計します。キーワード選定・サイト構造・メタ情報・内部リンク・スピード最適化をすべて初期から対応するため、公開直後から検索エンジンに評価されやすいサイトが完成します。",
  },
  {
    q: "月額いくらから始められますか？",
    a: "MEO対策は月額2〜3万円台から、SEO対策は月額3〜5万円台からのプランをご用意しています。ホームページ制作は内容によって異なりますが、詳細はお問い合わせ後に個別でご案内します。足立区の中小企業・個人事業主の予算感に合わせた提案を心がけています。",
  },
  {
    q: "綾瀬エリアで整骨院・整体院を開業したいのですが、どう集客すればよいですか？",
    a: "綾瀬は千代田線沿線で通勤客が多く、「綾瀬 整骨院」「綾瀬 整体」「綾瀬 腰痛」などのキーワードでのMEO・SEO対策が有効です。北千住と比べて競合が少ないため、Googleビジネスプロフィールを充実させるだけでも比較的早く集客効果が見込めます。予約導線が整ったホームページと組み合わせることをお勧めします。",
  },
  {
    q: "Googleビジネスプロフィールの運用代行もお願いできますか？",
    a: "はい。Googleビジネスプロフィール（GBP）の投稿代行・写真追加・口コミ返信サポート・情報最適化を月次で行うMEO対策プランをご提供しています。オーナー様の作業負担を最小限にしながら、継続的なMEO効果を維持します。",
  },
  {
    q: "足立区でSNS運用と組み合わせた集客はできますか？",
    a: "はい。Instagram・LINE公式アカウントの運用代行・コンサルティングをMEO・SEOと組み合わせたプランもご用意しています。SNSでの認知拡大→MEOでの来店誘導→ホームページでの予約獲得という一連のカスタマージャーニーを設計し、集客を最大化します。",
  },
];

const relatedLinks = [
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリアを見る" },
  { href: "/area/katsushika", label: "葛飾区", desc: "葛飾区（拠点エリア）" },
  { href: "/area/sumida", label: "墨田区", desc: "墨田区の集客支援" },
  { href: "/area/edogawa", label: "江戸川区", desc: "江戸川区の集客支援" },
  { href: "/area/saitama", label: "埼玉県", desc: "埼玉県の集客支援" },
  { href: "/area/tokyo", label: "東京都", desc: "東京都全域の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食業向け支援" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "美容業向け支援" },
  { href: "/industries/clinic", label: "クリニックの集客", desc: "医療・治療院向け支援" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域SEOの基礎知識" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金・費用の目安" },
  { href: "/web-design", label: "ホームページ制作", desc: "Web制作サービス" },
  { href: "/area/taito", label: "台東区", desc: "台東区の集客支援" },
  { href: "/area/arakawa", label: "荒川区", desc: "荒川区の集客支援" },
  { href: "/area/itabashi", label: "板橋区", desc: "板橋区の集客支援" },
  { href: "/company", label: "会社情報", desc: "サイプレス会社概要" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずはご相談ください" },
  { href: "/blog", label: "コラム・お役立ち情報", desc: "MEO・SEO解説記事" },
  { href: "/seo", label: "SEO対策とは", desc: "SEO基礎知識" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "料金・費用の目安" },
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
          { "@type": "ListItem", position: 3, name: "足立区", item: "https://www.cypress-all.co.jp/area/adachi" },
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
              <span style={{ color: "#0d1b2a" }}>足立区</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Adachi Ward</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,48px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              足立区のSEO・MEO対策<br />ホームページ制作
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区に隣接する足立区（北千住・竹ノ塚・西新井・綾瀬・梅島・六町）の中小企業・店舗のSEO対策・MEO対策・ホームページ制作を、葛飾区拠点のサイプレスが支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              足立区は東京北東部の主要商業エリアで、飲食・美容・医療・士業のニーズが高く、MEO対策の費用対効果が高いエリアが多数あります。葛飾区隣接のため訪問相談も迅速に対応します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="足立区のデジタルマーケティング"
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
              足立区のビジネス環境と集客課題
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "北千住を中心とした主要商業エリア", b: "北千住は東京メトロ・JR・東武・つくばエクスプレスが乗り入れる一大ターミナルで、学生・社会人・ファミリー層が集まる足立区最大の商業エリアです。競合が増加しているため、MEO・SEOでの差別化が集客のカギとなります。" },
                { n: "02", t: "竹ノ塚・西新井・六町は穴場エリア", b: "北千住と比べて竹ノ塚・梅島・六町・綾瀬などの地域は飲食・美容・医療いずれもMEO・SEOの競合が少ない状態です。今のうちに正しく施策を打てば、少ない予算で上位を取れるチャンスがあります。" },
                { n: "03", t: "飲食・美容・医療・士業のニーズが高い", b: "足立区は人口68万人超の大規模な区です。居酒屋・カフェ・美容室・整骨院・歯科・税理士・行政書士など、地域住民の日常的なサービスへの需要が非常に高く、地域密着型ビジネスの集客ポテンシャルは大きいです。" },
                { n: "04", t: "スマートフォンでの「近くで探す」行動が主流", b: "足立区の消費者は「北千住 居酒屋」「竹ノ塚 美容室」などスマートフォンで地域名+業種を検索して来店先を決める行動が一般的です。Googleマップでの上位表示（MEO）は来店型ビジネスの必須施策です。" },
                { n: "05", t: "葛飾区からの商圏重複でエリア拡大が有利", b: "足立区と葛飾区は商圏が重複するエリアが多く、葛飾区のMEO・SEO施策と連動した足立区攻略が効率的です。両区をまたいだ集客戦略により、より広い商圏からの集客が可能になります。" },
                { n: "06", t: "Webマーケティング未着手の事業者が多い", b: "足立区の中小企業・個人事業主はWebマーケティングの活用が十分でないケースが多く見られます。Googleビジネスプロフィールを最適化するだけで大きな改善が期待できる事業者が多い、チャンスの多いエリアです。" },
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
              足立区でのSEO対策・MEO対策の特徴
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              足立区はエリアによってMEO競合レベルが大きく異なります。北千住周辺は競合が多いため戦略的な差別化が必要ですが、郊外エリアは低コストで上位を狙えます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "主要MEOキーワード例", b: "「北千住 居酒屋」「北千住 美容室」「竹ノ塚 歯科」「竹ノ塚 整骨院」「西新井 カフェ」「西新井 美容院」「綾瀬 ランチ」「梅島 整体」「六町 クリニック」——エリアと業種の組み合わせで、競合の薄い狙い目キーワードを特定します。" },
                { n: "02", t: "MEO競合レベル：北千住は中〜高、その他は低〜中", b: "北千住は飲食・美容ともに競合が多く、差別化のための施策（写真クオリティ・口コミ数・投稿頻度）が重要です。竹ノ塚・西新井・梅島・六町・綾瀬は競合が少なく、基本的なGBP最適化だけで上位表示が狙えるケースも多くあります。" },
                { n: "03", t: "ローカルSEOのキーワード設計", b: "「足立区 〇〇」「北千住 〇〇」「竹ノ塚 〇〇」などの地域名+業種キーワードで検索上位を目指します。エリア特化のランディングページ作成・Googleビジネスプロフィールとの連携で相乗効果を生み出します。" },
                { n: "04", t: "葛飾区×足立区の広域キーワード戦略", b: "「葛飾区・足立区で〇〇をお探しの方へ」という広域対応のコンテンツを設計することで、両区の検索ユーザーを同時に取り込む戦略も有効です。サイプレスの拠点特性を最大限に活かした施策を提供します。" },
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
              足立区でサイプレスが提供するサービス
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "MEO対策（Googleマップ上位表示）", b: "「北千住 居酒屋」「竹ノ塚 美容室」「西新井 歯科」など足立区各エリアの地域検索でGoogleマップ上位表示を目指します。Googleビジネスプロフィールの完全最適化・写真追加・口コミ獲得支援・定期投稿代行を実施します。" },
                { n: "02", t: "地域密着型ローカルSEO", b: "「足立区 〇〇」「北千住 〇〇」などのローカルキーワードでの上位表示を目指します。エリア特化のコンテンツ作成・内部SEO最適化・被リンク獲得まで一貫した施策を実施します。" },
                { n: "03", t: "ホームページ・LP制作（訪問ヒアリング対応）", b: "飲食店・美容室・クリニック・士業など足立区の各業種に対応したホームページ・LP制作を行います。訪問でのヒアリングから制作・納品・保守まで一貫してサポートします。Next.js構成の高速・SEO対応サイトを提供します。" },
                { n: "04", t: "SNS運用支援（Instagram・LINE公式）", b: "Instagram・LINE公式アカウントの運用代行・コンサルティングを提供します。足立区の地域コミュニティを活かしたフォロワー獲得・来店促進施策を設計します。" },
                { n: "05", t: "Web集客の総合コンサルティング", b: "MEO・SEO・ホームページ・SNSの現状分析と改善提案を、訪問または対面形式で行います。「何から始めれば良いかわからない」という方でも、優先施策を明確にしてスタートできます。" },
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

        {/* Section 4: 主要スポット・地域特性 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Local Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              足立区の主要スポット・地域特性
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { area: "北千住", desc: "5路線が乗り入れる足立区最大のターミナル駅。大学（東京電機大学・帝京科学大学等）が集積し、学生・社会人・ファミリーと多様な客層が集まる。飲食・美容の競合が多いが、集客ポテンシャルも区内最高クラス。" },
                { area: "西新井", desc: "東武大師線・日比谷線が乗り入れるエリア。西新井大師（関東三大師）への参拝客と住宅街の生活需要が共存。アリオ西新井（大型ショッピングモール）があり、周辺の中小店舗は差別化が集客のカギ。" },
                { area: "綾瀬", desc: "東京メトロ千代田線の綾瀬駅周辺。千代田線沿いの通勤客と住宅街の住民が多く、若い世代が多いエリア。カフェ・飲食・美容のMEO需要があり、北千住より競合が少なく効率的に上位を狙える。" },
                { area: "竹ノ塚", desc: "東武スカイツリーラインの竹ノ塚駅周辺。下町の風情が残り、古い商店街と新興住宅が混在するエリア。ファミリー層・シニア層が多く、医療・美容・飲食のローカル需要が高い。MEO競合は比較的少ない穴場。" },
                { area: "梅島・五反野", desc: "東武スカイツリーライン沿線の静かな住宅エリア。地域住民の生活密着型需要が高く、MEO・SEO競合が少ない。今から着手すれば早期に上位表示を獲得できるエリアとして注目度が高い。" },
                { area: "六町・扇・五反野", desc: "つくばエクスプレス六町駅周辺は新興住宅地で若いファミリー層が増加中。五反野・扇エリアは古くからの住宅街で、地域密着型のサービスへの需要が安定している。競合少なく狙い目。" },
              ].map((item) => (
                <div key={item.area} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "17px", color: "#0d1b2a", marginBottom: "10px" }}>{item.area}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: 業種別の集客ポイント */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Industry Guide</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              足立区における業種別の集客ポイント
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "48px" }}>
              足立区の主要業種ごとに、地域特性に合わせた集客のポイントを整理しました。業種によって有効な施策・優先すべきチャネルが異なります。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ・居酒屋",
                  points: "北千住は競合が多いため「写真の質」「口コミ件数」「投稿頻度」の3点で差をつける必要があります。竹ノ塚・綾瀬・梅島はMEO競合が少なく、基本施策だけで上位が狙えるエリアです。ランチメニューや期間限定メニューのGBP投稿がエンゲージメント向上に効果的です。",
                },
                {
                  industry: "美容室・ヘアサロン・ネイルサロン",
                  points: "「北千住 美容室 安い」「竹ノ塚 カット」など価格・立地を組み合わせたロングテールキーワードが有効です。Instagramとの連携でビジュアルを活かした集客ができ、予約導線（ホットペッパーとの比較）をホームページで整備することでCV率が上がります。ネイルサロンは写真クオリティが特に集客に影響します。",
                },
                {
                  industry: "整骨院・接骨院・整体院",
                  points: "「駅名＋整骨院」「駅名＋腰痛」など症状と地名を組み合わせたキーワードでMEO・SEOを設計します。口コミの質と返信率が信頼性に直結し、ホームページでは施術メニュー・料金・施術後のイメージを明確に掲載することが来院を後押しします。竹ノ塚・六町エリアは競合が少なく早期効果が見込めます。",
                },
                {
                  industry: "歯科クリニック・内科・皮膚科",
                  points: "医療系は「駅名＋診療科目」「駅名＋症状」の両方でMEO・SEOを設計します。口コミへの丁寧な返信・予約システムとGBPの連動が新患獲得に直結します。診療科別ランディングページを設けることで複数の検索意図に対応でき、医療広告ガイドライン準拠のコンテンツ設計が必須です。",
                },
                {
                  industry: "学習塾・習い事教室",
                  points: "ファミリー層が多い足立区では学習塾・ピアノ教室・英会話スクールへの需要が高いです。「竹ノ塚 学習塾 小学生」「北千住 英会話 子供」などの親御さんが検索するキーワードでMEO・SEOを設計し、無料体験申込みへのCV設計を整備することが重要です。",
                },
                {
                  industry: "不動産・賃貸・売買仲介",
                  points: "「足立区 賃貸 ファミリー」「北千住 マンション 購入」などのエリア特化キーワードでのSEO対策が主軸です。物件情報ページの充実・エリアガイドコンテンツ・地域イベント情報の発信でSEO的な権威性を高め、長期的な検索流入を構築できます。",
                },
                {
                  industry: "工務店・リフォーム・内装",
                  points: "「足立区 リフォーム」「北千住 外壁塗装」などの工事系キーワードは単価が高く、SEOで上位を取ると費用対効果が非常に高い業種です。施工事例・ビフォーアフター・お客様の声を豊富に掲載し、地元実績を強調したサイト設計がCVRを高めます。",
                },
                {
                  industry: "税理士・行政書士・司法書士",
                  points: "士業はMEOよりSEOが主戦場です。「足立区 税理士 相続」「北千住 行政書士 会社設立」などのニーズ特化キーワードでのコンテンツSEOが効果的です。E-E-A-T（専門性・権威性・信頼性）を示す資格情報・実績・著者情報をサイトに掲載することが重要です。",
                },
              ].map((item) => (
                <div key={item.industry} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "12px" }}>{item.industry}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: おすすめ集客チャネル */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Channel Mix</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              足立区でおすすめの集客チャネル
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {[
                { label: "MEO対策", tag: "最重要", desc: "「北千住 〇〇」「竹ノ塚 〇〇」など地域検索でのGoogleマップ上位表示。来店型ビジネスに最も効果が高いチャネル。エリアによって競合レベルが異なるため、戦略的な設計が必要。" },
                { label: "ローカルSEO", tag: "推奨", desc: "「足立区 〇〇」「北千住 〇〇」などのキーワードでの検索上位表示。MEOとの相乗効果で信頼感・認知度を高め、長期的な集客基盤を構築する。" },
                { label: "Web制作", tag: "基盤", desc: "MEO・SEOからの流入を確実に問い合わせ・予約・来店に変換する高品質なホームページ。スマートフォン対応・高速表示・わかりやすいCV設計が必須。" },
                { label: "SNS（Instagram・LINE）", tag: "補完", desc: "地域コミュニティへのアプローチに有効。LINE公式アカウントでのリピーター獲得・Instagramでの認知拡大を、MEO・SEOと組み合わせて実施する。" },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px", background: "#FFFFFF" }}>
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

        {/* Section 7: 実装フロー */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              足立区の事業者がWeb集客を始めるステップ
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "56px" }}>
              初めてSEO・MEO対策に取り組む事業者様向けに、サイプレスとの実装フローをわかりやすく説明します。最初のお問い合わせから集客改善まで、一貫してサポートします。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { step: "STEP 01", title: "無料相談・ヒアリング", desc: "お電話・Zoom・訪問にて現状のビジネス・集客課題・予算感をお聞きします。足立区内への訪問相談も対応しており、北千住・竹ノ塚・西新井エリアなら迅速に伺います。" },
                { step: "STEP 02", title: "現状分析・競合調査", desc: "Googleビジネスプロフィールの現状・Webサイトのスコア・競合他社のMEO・SEOの状況を分析します。足立区各エリアの競合レベルを把握したうえで、勝てるキーワード・エリアを特定します。" },
                { step: "STEP 03", title: "戦略設計・プランご提案", desc: "現状分析をもとに、MEO・SEO・Web制作の優先施策と費用感をご提案します。足立区の特性に合わせた「エリア×業種」の戦略を具体的な施策ロードマップとして提示します。" },
                { step: "STEP 04", title: "ご契約・キックオフ", desc: "提案内容にご納得いただけたらご契約となります。担当者を決めてキックオフミーティングを行い、初月の施策内容・スケジュール・コミュニケーション方法を確認します。" },
                { step: "STEP 05", title: "Googleビジネスプロフィール最適化", desc: "MEO対策の基盤となるGBPの完全最適化から開始します。基本情報の整備・カテゴリ設定・サービス登録・高品質写真の追加・初回投稿まで一気に実施し、検索評価の底上げを図ります。" },
                { step: "STEP 06", title: "SEO・コンテンツ施策の実行", desc: "ローカルSEOのキーワード設計・エリアページの作成・内部SEO最適化を実施します。足立区の検索ユーザーが求める情報を提供するコンテンツを定期的に更新し、検索流入を継続的に増やします。" },
                { step: "STEP 07", title: "口コミ獲得・SNS施策", desc: "MEO効果を高める口コミ獲得のためのアドバイス・テンプレート提供を行います。Instagram・LINEとの連携施策も組み合わせ、オフラインとオンラインの接点を強化します。" },
                { step: "STEP 08", title: "月次レポート・改善サイクル", desc: "毎月の順位変動・アクセス状況・問い合わせ件数をレポートにまとめてご報告します。データをもとに次月の施策を調整するPDCAサイクルを回し、継続的な集客改善を実現します。" },
              ].map((item, idx) => (
                <div key={item.step} style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: idx === 0 ? "none" : "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "80px" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.15em", display: "block" }}>{item.step}</span>
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

        {/* Section 8: 成果を測るKPI */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>KPI Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              足立区の集客支援で成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              足立区でのMEO・SEO施策の成果を定量的に把握するために、以下のKPIを月次でモニタリングします。データに基づいた改善サイクルで、集客の仕組みを育て続けます。
            </p>
            <div style={{ display: "grid", gap: "1px", background: "#E8E4DC", maxWidth: "760px" }}>
              {[
                { name: "Googleマップ表示回数（インプレッション）", where: "GBPインサイト", desc: "「北千住 居酒屋」「竹ノ塚 美容室」などの検索でGBPが表示された回数。MEO施策の直接効果を測る最重要指標です。北千住エリアとその他エリアを分けて評価します。" },
                { name: "GBPからの電話タップ数・ルート検索数", where: "GBPインサイト", desc: "Googleマップから実際に電話・ルート検索した潜在顧客数を測定します。来店・問い合わせ意向の高い行動を追跡することで、MEO施策の実質効果を把握します。" },
                { name: "オーガニック検索流入数（新規ユーザー）", where: "Google Search Console / GA4", desc: "「足立区 〇〇」「北千住 〇〇」などのローカルSEOキーワードからのサイト流入数。SEO施策の成果を月次で追跡し、コンテンツ改善の優先順位を決定します。" },
                { name: "予約・問い合わせコンバージョン数", where: "GA4（コンバージョン設定）", desc: "ホームページ経由の予約完了・フォーム送信・LINE追加をコンバージョンとして計測します。MEO・SEOの投資対効果（ROI）を評価する最終指標です。" },
                { name: "Googleクチコミ件数・平均評価点", where: "GBPインサイト", desc: "口コミ獲得フローの効果を月次で確認します。足立区では竹ノ塚・梅島エリアで少ない口コミ数でも上位表示につながりやすいため、着実な積み上げが重要です。" },
                { name: "主要キーワードの検索順位推移", where: "Google Search Console", desc: "「北千住 〇〇」「竹ノ塚 〇〇」など業種ごとの主要キーワードで掲載順位を毎月追跡します。順位の推移がMEO・SEO施策の効果を直接示す先行指標となります。" },
              ].map((item) => (
                <div key={item.name} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", background: "#FFFFFF" }}>
                  <div style={{ padding: "20px 24px", borderRight: "1px solid #E8E4DC" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.name}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em" }}>{item.where}</p>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: 足立区の集客に関するデータ・数字 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Area Data</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              足立区の集客を知るための基礎データ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#9CA3AF", maxWidth: "640px", marginBottom: "56px" }}>
              足立区のビジネス環境を正確に把握することが、効果的な集客戦略の出発点です。エリアの規模・商圏・ターゲット層を理解した上で施策を設計します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", maxWidth: "860px" }}>
              {[
                { num: "約68万人", label: "足立区の人口", note: "東京23区中第3位規模" },
                { num: "5路線", label: "北千住の乗り入れ路線数", note: "東京東部最大のターミナル" },
                { num: "約30km²", label: "足立区の面積", note: "23区中第2位の広さ" },
                { num: "多数", label: "中小企業・個人事業主", note: "Web未活用の事業者が多い" },
              ].map((item) => (
                <div key={item.label} style={{ borderTop: "1px solid rgba(196,184,154,0.3)", paddingTop: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,40px)", color: "#c4b89a", fontWeight: 700, marginBottom: "8px", lineHeight: 1 }}>{item.num}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#FFFFFF", fontWeight: 600, marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "12px", color: "#9CA3AF" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: サイプレスに依頼するメリット（ダーク背景） */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px" }}>
              {[
                { n: "01", t: "足立区・葛飾区のエリア事情を熟知", b: "葛飾区に拠点を置くサイプレスは、隣接する足立区の各エリアの特性・競合状況・ターゲット層の行動パターンを日常的に把握しています。机上の戦略ではなく、地域の実態に基づいた施策を設計します。" },
                { n: "02", t: "「勝てるキーワード」から逆算した戦略", b: "北千住の激戦区でも、竹ノ塚・梅島の穴場エリアでも、現状の競合を精緻に分析したうえで「今最も費用対効果が高い施策」を優先して実行します。予算の無駄を最小化した提案を心がけます。" },
                { n: "03", t: "MEO・SEO・Web制作をワンストップで完結", b: "集客に必要な施策を複数の業者に分けて依頼すると、コミュニケーションコスト・戦略の一貫性・費用が課題になります。サイプレスはMEO・SEO・ホームページ制作をすべて一社で完結し、一貫した集客設計を実現します。" },
                { n: "04", t: "中小企業・個人事業主の予算感に合わせた提案", b: "大手代理店のような高額な最低費用は設定していません。足立区の中小企業・個人事業主がスモールスタートできるプランから、事業成長に合わせて段階的に拡張できる柔軟な料金体系をご用意しています。" },
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

        {/* 足立区エリア別のアクセスと訪問相談 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Access & Visit</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              足立区への訪問相談・アクセス
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              サイプレスは葛飾区白鳥4丁目に拠点を置いており、隣接する足立区全域への訪問相談に対応しています。各エリアへのアクセスと対応可能な相談内容をご確認ください。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { area: "北千住エリア", access: "葛飾区より車・電車で約20〜30分", note: "足立区の主要ターミナルエリア。競合分析・GBP最適化・SEO戦略の相談に対応。カフェ・会議室での打ち合わせも可能です。" },
                { area: "竹ノ塚・梅島エリア", access: "葛飾区より車で約20〜25分", note: "MEO競合が少ない穴場エリアへの施策設計に対応。開業・新規Web集客のご相談を重点的に受け付けています。" },
                { area: "西新井エリア", access: "葛飾区より車で約25〜35分", note: "アリオ西新井周辺の中小店舗・西新井大師周辺の飲食・サービス業への集客支援の相談に対応します。" },
                { area: "綾瀬・六町エリア", access: "葛飾区より車・電車で約15〜25分", note: "綾瀬は葛飾区からのアクセスが特に良好です。整骨院・整体院・歯科など医療系クリニックの相談が多いエリアです。" },
              ].map((item) => (
                <div key={item.area} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ padding: "20px 20px 20px 0" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.area}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)" }}>{item.access}</p>
                  </div>
                  <div style={{ padding: "20px 0 20px 20px", borderLeft: "1px solid #E8E4DC" }}>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px", padding: "32px", background: "#f8f6f2", maxWidth: "640px" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "12px" }}>訪問相談のご予約</p>
              <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "20px" }}>
                お問い合わせフォームまたはお電話にて、訪問希望エリアとご都合の日程をお知らせください。原則として1営業日以内にご連絡いたします。初回相談は無料で対応しています。
              </p>
              <Link
                href="/contact"
                style={{ display: "inline-block", background: "#0F172A", color: "#FFFFFF", padding: "12px 28px", fontSize: "14px", fontFamily: "var(--font-display)", letterSpacing: "0.05em", textDecoration: "none" }}
              >
                無料相談を申し込む
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="足立区に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="足立区のWeb集客、まずは無料相談から"
          body="北千住・竹ノ塚・西新井・綾瀬エリアのSEO対策・MEO対策・ホームページ制作のご相談は無料です。葛飾区隣接のため訪問対応も迅速です。お気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
