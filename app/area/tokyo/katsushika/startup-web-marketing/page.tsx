import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で創業する方向けWeb集客ガイド｜ホームページ・SEO・MEO・GBP｜株式会社サイプレス",
  description:
    "葛飾区で起業・創業する事業者向けに、ホームページ制作・SEO・MEO・Googleビジネスプロフィール・SNSの優先順位と始め方を解説します。",
  keywords: [
    "葛飾区 起業 ホームページ",
    "葛飾区 創業 ホームページ制作",
    "葛飾区 開業 集客",
    "葛飾区 ホームページ制作",
    "葛飾区 SEO対策",
    "葛飾区 MEO対策",
    "葛飾区 Web集客",
  ],
  openGraph: {
    title: "葛飾区で創業する方向けWeb集客ガイド｜ホームページ・SEO・MEO・GBP",
    description: "葛飾区で起業・創業する事業者向けに、ホームページ制作・SEO・MEO・Googleビジネスプロフィール・SNSの優先順位と始め方を解説します。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-web-marketing",
  },
};

const faqItems = [
  {
    q: "葛飾区で起業してすぐにWeb集客の効果が出ますか？",
    a: "SEOは一般的に3〜6ヶ月以上かかります。GBP（Googleビジネスプロフィール）は数週間〜数ヶ月で効果が出始めることがあります。開業前から準備することで早期の立ち上がりが期待できますが、具体的な効果を保証するものではありません。",
  },
  {
    q: "ホームページとSNSどちらを先に作ればよいですか？",
    a: "ホームページの先行制作を推奨しています。ホームページはSEO効果が時間とともに蓄積される「資産型集客」の基盤です。SNSはフォロワーがいないと到達範囲が限られますが、ホームページがあれば検索からの流入が継続的に期待できます。",
  },
  {
    q: "葛飾区でGoogleビジネスプロフィールを登録するには？",
    a: "Googleアカウントでログインし、「Googleビジネスプロフィール」から登録できます。登録は無料で、住所確認（ハガキまたはオンライン確認）が必要です。確認完了まで数日〜数週間かかります。",
  },
  {
    q: "制作費が少ない場合はどうすればよいですか？",
    a: "まずGBP（Googleビジネスプロフィール）の整備から始めてください。無料で登録でき、地域名検索での効果が高い施策です。その後、補助金制度の確認（採択保証なし）・ミニマム構成でのホームページ制作を検討することをお勧めします。",
  },
  {
    q: "SEOとMEOの違いは何ですか？",
    a: "SEOはGoogleの通常検索結果（ウェブページの一覧）で上位表示を目指す施策です。MEOはGoogleマップの検索結果（地図上の表示）で上位表示を目指す施策です。地域ビジネスはどちらも並行して対策することが集客効果を高めます。",
  },
  {
    q: "葛飾区でホームページ制作に強い会社を選ぶポイントは？",
    a: "SEO設計が込みかどうか・地域SEOの実績があるか・費用の透明性・アフターサポートの有無が主な選定基準です。制作のみで終わるサイトと、SEO設計込みのサイトでは長期的な集客力に大きな差が生まれます。",
  },
  {
    q: "飲食店でWeb集客を始めるなら何から？",
    a: "GBP整備（名称・住所・電話・時間・カテゴリ・写真）→ 定期投稿・写真更新 → レビュー依頼の仕組み → ホームページ制作の順番が一般的です。Instagramとの連動も飲食店では効果的です。",
  },
  {
    q: "AIO対策（AI検索対策）は必要ですか？",
    a: "ChatGPT・Gemini・Perplexityでの引用を狙う場合には重要です。E-E-A-T（経験・専門性・権威性・信頼性）を意識したコンテンツ・構造化データ・FAQ設計が有効です。SEO・MEOと並行して取り組む施策として検討してください。",
  },
  {
    q: "SNSのフォロワーが集客につながりますか？",
    a: "間接的には繋がります。ただしフォロワー数よりも「検索からの流入（SEO・MEO）」のほうが安定した集客基盤になります。SNSはホームページとの連動設計と組み合わせることで効果が高まります。",
  },
  {
    q: "MEO対策の費用はどのくらいかかりますか？",
    a: "GBP登録・基本整備は無料でできます。継続的なMEO対策（投稿代行・口コミ管理・写真更新等）については、月次費用が発生します。詳細はご相談ください。",
  },
  {
    q: "創業初期からコンテンツSEOは必要ですか？",
    a: "余裕があれば早めに始めることをお勧めしますが、GBP整備・ホームページ制作・MEO対策の後に着手するのが現実的な優先順位です。リソースと予算のバランスを見ながら段階的に取り組むことをお勧めします。",
  },
];

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
  divider: { display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" } as React.CSSProperties,
  num: { fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" },
  itemTitle: { fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" },
  itemBody: { fontSize: "14px", color: "#374151", lineHeight: "1.9" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "東京都葛飾区", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika" },
        { "@type": "ListItem", position: 4, name: "葛飾区で創業する方向けWeb集客ガイド", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika/startup-web-marketing" },
      ],
    },
    {
      "@type": "Service",
      name: "葛飾区創業者向けWeb集客支援",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
        address: { "@type": "PostalAddress", addressCountry: "JP", postalCode: "124-0816", addressRegion: "東京都", addressLocality: "葛飾区", streetAddress: "白鳥4-6-1-623" },
      },
      areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
      description: "葛飾区で創業する方向けに、ホームページ制作・SEO・MEO・GBP・SNSの優先順位と始め方を解説するWeb集客ガイド。",
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

const failurePatterns = [
  { t: "開業したが問い合わせが来ない", b: "Webでの集客導線がなく、SNSや口コミだけでは新規顧客獲得が難しい状態です。ホームページとGBPの整備が先決です。" },
  { t: "SNSだけで集客しGBPを整備していない", b: "GBPの整備は地域名検索対策として最も即効性が高い無料施策です。開業時に優先して整備することをお勧めします。" },
  { t: "ホームページを後回しにした", b: "SEOは時間がかかります。開業後に「そろそろ作ろう」では集客効果が出るまでの期間がさらに長くなります。" },
  { t: "地域名キーワードを意識していない", b: "「葛飾区＋業種」「亀有・金町・新小岩＋業種」などのローカルキーワードを意識したページ設計が地域集客の基本です。" },
  { t: "コンテンツを出し続けないと集客が止まる", b: "SNS投稿だけの集客は継続的な発信が前提です。SEO・MEOと組み合わせた「発信をやめても集客が続く」設計を目指します。" },
  { t: "SEO効果を過大評価または過小評価している", b: "SEOは「すぐ上位に出る」ものではなく、「3〜6ヶ月以上かけて資産化する」投資です。期待値の調整が重要です。" },
];

const keywordAxes = [
  { n: "01", t: "地域名×業種キーワード", b: "「葛飾区 整体」「葛飾区 美容室」「葛飾区 税理士」など、エリア名と業種を組み合わせたキーワードが基本です。競合が少ないニッチなキーワードを狙うことで上位表示しやすくなります。" },
  { n: "02", t: "駅名×業種キーワード", b: "「亀有 居酒屋」「金町 歯科」「新小岩 整体」「青砥 美容室」など、駅名と業種を組み合わせたキーワードは検索意図が明確で商談につながりやすいです。" },
  { n: "03", t: "症状・悩みキーワード", b: "「葛飾区 肩こり 整体」「亀有 小顔矯正」など、顧客の症状・悩みを含めたキーワードは検索意図が強く、問い合わせにつながりやすいです。" },
];

const gbpItems = [
  { t: "名称の正確な設定", b: "Google検索で表示されるビジネス名を正確に設定します。サービス名の追加は原則禁止です。" },
  { t: "住所・電話番号・営業時間の設定", b: "NAP情報（Name・Address・Phone）の正確性がMEO対策の基本です。" },
  { t: "カテゴリの設定", b: "メインカテゴリを正確に設定することで、適切な検索クエリで表示されます。" },
  { t: "写真の追加（外観・内観・スタッフ・料理等）", b: "写真が多いほど検索ユーザーの信頼感が高まり、クリック率が上がります。" },
  { t: "サービス内容・説明の記載", b: "提供するサービス・商品・料金帯を明確に記載します。" },
  { t: "定期的な投稿（週1〜月2回）", b: "新メニュー・お知らせ・キャンペーン情報を定期的に投稿することでアクティブ状態を維持します。" },
  { t: "口コミへの返信", b: "ポジティブ・ネガティブ問わず口コミへの返信は信頼構築に重要です。" },
];

const hpEssentials = [
  { t: "トップページ", b: "業種・エリア・強みが一目でわかるページ設計。" },
  { t: "サービスページ", b: "提供するサービスを詳細に説明。地域名キーワードを自然に含める。" },
  { t: "料金ページ", b: "目安となる料金を提示することで問い合わせへの心理的ハードルが下がる。" },
  { t: "会社概要・アクセスページ", b: "GoogleマップやGBPとの連動。" },
  { t: "お問い合わせページ", b: "入力項目を最小化し、スマートフォンで送信しやすいフォーム。" },
];

const meoItems = [
  { t: "GBPの定期投稿", b: "週1〜月2回の投稿を継続することでアクティブな状態を維持できます。" },
  { t: "口コミ管理・返信", b: "新規口コミへの返信・既存口コミの定期確認が信頼性向上につながります。" },
  { t: "写真の定期更新", b: "季節・メニュー変更に応じた写真更新でクリック率向上が期待できます。" },
  { t: "地域名検索での上位表示を目指す", b: "MEO対策の効果は業種・競合状況によって異なります。継続的な施策が重要です。" },
];

const snsItems = [
  { t: "Instagram（飲食・美容・サービス業）", b: "ビジュアルでサービスを伝えやすい業種に適しています。ホームページURLをプロフィールに設置します。" },
  { t: "LINE公式アカウント", b: "予約・問い合わせ・クーポン配信に活用できます。既存客との継続的な関係構築に有効です。" },
  { t: "ホームページとの連動設計", b: "SNSからホームページへの動線を設計し、問い合わせ・予約はホームページ経由に誘導します。" },
  { t: "コンテンツ素材の準備", b: "繰り返しアップできる写真・動画素材を開業前に準備しておくことで、継続投稿しやすくなります。" },
];

const relatedLinks = [
  { href: "/area/tokyo/katsushika/start-business", label: "葛飾区で起業する方向け総合ガイドを見る", desc: "創業者向けハブページ" },
  { href: "/area/tokyo/katsushika/start-business-checklist", label: "葛飾区で起業する前に確認したい開業準備チェックリスト", desc: "8カテゴリのチェックリスト" },
  { href: "/area/tokyo/katsushika/startup-funding", label: "葛飾区で創業資金や補助金を確認する前に知っておきたいこと", desc: "資金・補助金の確認ポイント" },
  { href: "/area/tokyo/katsushika/web-design-subsidy", label: "葛飾区でホームページ制作と補助金を確認する", desc: "制作と補助金活用の注意点" },
  { href: "/area/tokyo/katsushika/startup-revenue-streams", label: "創業初期の収益柱として販売パートナー制度を確認する", desc: "収益柱づくりのガイド" },
  { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向け販売パートナー制度を見る", desc: "取次・紹介でできる制度" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "72px" }}>
          <div style={S.container}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area" style={{ color: "#6B7280" }}>エリア</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/tokyo/katsushika" style={{ color: "#6B7280" }}>東京都葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>葛飾区で創業する方向けWeb集客ガイド</span>
            </nav>
            <p style={S.label}>Katsushika — Web Marketing Guide</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で創業する方向けWeb集客ガイド
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "36px" }}>
              ホームページ制作・SEO・MEO・Googleビジネスプロフィール・SNSの優先順位と始め方を解説します。葛飾区で起業・創業する方が創業直後から集客の基盤を整えるためのガイドです。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              ホームページ制作・SEO・MEOを相談する
            </Link>
          </div>
        </section>

        {/* SECTION 2: よくある失敗パターン */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Failure Patterns</p>
            <h2 style={S.h2}>創業直後のWeb集客でよくある失敗パターン</h2>
            <p style={S.body}>葛飾区で創業した方からよく聞く失敗パターンです。事前に把握することで回避できます。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "960px" }}>
              {failurePatterns.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: キーワード戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Keyword Strategy</p>
            <h2 style={S.h2}>葛飾区で狙うべきキーワード戦略</h2>
            <p style={S.body}>地域SEO・MEOで効果を出すための3つのキーワード軸を押さえておきましょう。</p>
            <div style={{ maxWidth: "800px" }}>
              {keywordAxes.map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: 優先順位① GBP */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Priority 01</p>
            <h2 style={S.h2}>優先順位①：Googleビジネスプロフィール（GBP）</h2>
            <p style={S.body}>
              GBPは無料で登録でき、地域名検索対策として最も即効性が高い施策です。開業前から登録を開始することをお勧めします。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {gbpItems.map((item) => (
                <div key={item.t} style={S.divider}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" }}>✓</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: 優先順位② HP */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Priority 02</p>
            <h2 style={S.h2}>優先順位②：ホームページ（SEO設計込み）</h2>
            <p style={S.body}>
              SEO効果は3〜6ヶ月以上かかります。開業前から制作を開始することで、開業直後から検索流入の基盤が育ち始めます。最低限5ページの制作を推奨しています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px", maxWidth: "860px" }}>
              {hpEssentials.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "18px 16px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: 優先順位③ MEO */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Priority 03</p>
            <h2 style={S.h2}>優先順位③：MEO対策（Googleマップ最適化）</h2>
            <p style={S.body}>
              GBPの継続的な運用がMEO対策の中心です。定期的な投稿・口コミ管理・写真更新を継続することで、地域名検索でのマップ表示率向上が期待できます。効果は業種・競合状況によって異なります。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px", maxWidth: "860px" }}>
              {meoItems.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "18px 16px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: 優先順位④ SNS */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Priority 04</p>
            <h2 style={S.h2}>優先順位④：SNS（ホームページとの連動）</h2>
            <p style={S.body}>
              業種によってはInstagram・LINE公式アカウントが重要な集客チャネルになります。ホームページとの連動設計と、継続できるコンテンツ素材の準備が鍵です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px", maxWidth: "860px" }}>
              {snsItems.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "18px 16px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: 販売パートナー制度 */}
        <section style={{ background: "#0d1b2a", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Revenue Stream</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "20px" }}>
              収益柱として販売パートナー制度も検討する
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#D1D5DB", maxWidth: "640px", marginBottom: "12px" }}>
              Web集客の知識を身につけた上で、地域事業者へ紹介活動を行う販売パートナー制度も、創業初期の収益柱の一つとして検討できます。
            </p>
            <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "32px" }}>成果を保証するものではありません。</p>
            <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #fff" }}>
              葛飾区で起業する方向け販売パートナー制度を見る
            </Link>
          </div>
        </section>

        {/* 関連ページ */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px", lineHeight: 1.5 }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="葛飾区での創業Web集客についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="葛飾区での創業Web集客設計をご相談ください"
          body="ホームページ制作・SEO・MEO・GBPの始め方に関するご相談はお気軽にどうぞ。"
        />

      </main>
      <Footer />
    </>
  );
}
