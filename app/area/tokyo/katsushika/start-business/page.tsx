import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区の起業・創業ガイド【総合版】｜資金・Web集客・収益づくりを一気通貫で解説｜株式会社サイプレス",
  description:
    "葛飾区で起業・創業する方向けの総合ガイド。開業準備チェックリスト・創業資金の確認ポイント・ホームページ制作とGBP整備・Web集客の優先順位・収益柱づくりまで、創業ステップごとに詳しく解説します。",
  keywords: [
    "葛飾区 起業",
    "葛飾区 創業",
    "葛飾区 開業",
    "葛飾区 創業支援",
    "葛飾区 事業 始める",
    "葛飾区 創業相談",
    "葛飾区 個人事業主 開業",
    "葛飾区 法人設立",
    "葛飾区 起業 ホームページ",
    "葛飾区 開業 集客",
  ],
  openGraph: {
    title: "葛飾区の起業・創業ガイド【総合版】｜資金・Web集客・収益づくりを一気通貫で解説",
    description: "葛飾区で起業・創業する方向けの総合ガイド。開業準備・創業資金・ホームページ制作とGBP整備・Web集客の優先順位・収益柱づくりまで、創業ステップごとに詳しく解説します。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/tokyo/katsushika/start-business",
  },
};

const faqItems = [
  {
    q: "葛飾区で起業する際に最初に確認すべきことは？",
    a: "創業の目的・ターゲット・料金設定・集客方法・初期費用の優先順位を整理することが基本です。また、葛飾区の創業支援窓口（制度内容は公式サイトで要確認）や、創業後すぐに必要になるホームページ・Googleビジネスプロフィールの準備も早めに検討することをお勧めします。",
  },
  {
    q: "葛飾区の創業支援制度を使うにはどうすればよいですか？",
    a: "葛飾区の創業支援制度は年度によって内容が変わる場合があります。最新情報は葛飾区公式サイトでご確認ください。株式会社サイプレスは行政機関ではなく、創業支援の申請代行は行っていません。",
  },
  {
    q: "葛飾区で起業してすぐにホームページは必要ですか？",
    a: "可能な限り開業前・開業直後に作成することをお勧めします。SEO効果が出るまでに時間がかかるため、早く始めるほど集客の立ち上がりが早くなります。Googleビジネスプロフィール（GBP）の登録も開業前から着手できます。",
  },
  {
    q: "ホームページがなくてもSNSだけで集客できますか？",
    a: "SNSだけで集客を続けることは可能ですが、投稿を止めると集客も止まります。ホームページとGBPを整えることで、検索で継続的に見つけてもらえる「資産型集客」の基盤ができます。SNSとホームページ・SEOを組み合わせることを推奨しています。",
  },
  {
    q: "葛飾区で起業する際のホームページ制作費の相場は？",
    a: "制作範囲・機能・ページ数によって異なります。シンプルなSEO対応ホームページであれば数十万円〜、本格的なSEO設計込みのサイトは数十万円〜が一般的です。葛飾区のホームページ作成費補助を活用できる場合があります（制度内容は公式サイトで要確認）。",
  },
  {
    q: "Googleビジネスプロフィール（GBP）はいつ登録すべきですか？",
    a: "住所が確定した段階で早急に登録を開始することをお勧めします。登録から表示開始まで数日〜数週間かかることがあります。GBPは無料で登録でき、葛飾区内での地域名検索対策として最も即効性が高い施策の一つです。",
  },
  {
    q: "葛飾区の販売パートナー制度とは何ですか？",
    a: "株式会社サイプレスのホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを地域事業者へ紹介できる制度です。創業初期の収益柱の一つとして検討できます。成果・収入を保証するものではありません。詳細は「葛飾区で起業する方向け販売パートナー制度」ページをご覧ください。",
  },
  {
    q: "葛飾区で起業した人が販売パートナーになれますか？",
    a: "はい。創業直後から活動を開始できます。地域の人脈・知人の事業者を対象に紹介活動を行うことができます。専門知識は不要です。ただし、成果・収入を保証するものではありません。",
  },
  {
    q: "創業時に補助金でホームページを作れますか？",
    a: "葛飾区のホームページ作成費補助など、活用できる可能性がある制度があります。ただし制度内容は年度によって変わります。申請前に必ず葛飾区公式サイトで最新情報をご確認ください。採択・支給を保証するものではありません。",
  },
  {
    q: "Web集客の効果が出るまでどのくらいかかりますか？",
    a: "SEOは一般的に3〜6ヶ月以上、GBPは数週間〜数ヶ月が目安です。開業前から準備することで早期の集客立ち上がりが期待できます。ただし、具体的な効果を保証するものではありません。",
  },
  {
    q: "創業初期はSEO・MEO・SNSのどこから始めるべきですか？",
    a: "最も優先度が高いのはGBP（Googleビジネスプロフィール）の設定です。次にホームページ制作（SEO設計込み）、その後SNS運用の順番が一般的です。予算・ターゲット・業種によって最適な組み合わせが異なりますので、ご相談ください。",
  },
  {
    q: "葛飾区外の事業者への紹介もできますか？",
    a: "はい、全国対応可能です。葛飾区・東京都内が最も対応実績が豊富ですが、オンラインでのサービス提供のため地域を問わず対応しています。",
  },
  {
    q: "取次店と販売代理店はどう違いますか？",
    a: "取次店は顧客をサイプレスへ紹介する形で、サイプレスが直接対応します。販売代理店は自社ブランドで営業・提案まで行うモデルです。サイプレスのパートナー制度は、専門知識が不要な取次・紹介型をベースにしています。",
  },
  {
    q: "紹介パートナーとして活動するのに専門知識は必要ですか？",
    a: "必要ありません。「Webに困っている事業者をサイプレスへ紹介する」形のため、詳しい説明はサイプレスが行います。営業経験や地域の人脈を活かせる可能性があります。ただし成果を保証するものではありません。",
  },
  {
    q: "創業直後でも販売パートナー活動を始められますか？",
    a: "はい。開業直後から活動を開始することが可能です。地域事業者との人脈・つながりがある方であれば、創業初期の収益柱の一つとして検討できます。ただし成果・収入を保証するものではありません。",
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
        { "@type": "ListItem", position: 4, name: "葛飾区で起業・創業する方へ", item: "https://www.cypress-all.co.jp/area/tokyo/katsushika/start-business" },
      ],
    },
    {
      "@type": "Service",
      name: "葛飾区起業者向けWeb集客支援",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
        address: { "@type": "PostalAddress", addressCountry: "JP", postalCode: "124-0816", addressRegion: "東京都", addressLocality: "葛飾区", streetAddress: "白鳥4-6-1-623" },
        email: "info@cypress-all.co.jp",
      },
      areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
      description: "葛飾区で起業・創業する方向けに、ホームページ制作・SEO・MEO・AIO対策・販売パートナー制度を提供。",
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

const checkItems = [
  { n: "01", t: "事業内容・コンセプトの明確化", b: "何をどんな方に提供するのかを一言で説明できるようにしましょう。" },
  { n: "02", t: "ターゲット顧客・ペルソナの設定", b: "誰が最も困っていて、誰が最も購入・依頼しやすいかを具体化します。" },
  { n: "03", t: "競合・差別化ポイントの把握", b: "同業者と比較したとき、なぜ自分を選ぶのかを説明できるようにします。" },
  { n: "04", t: "料金設定（高すぎず安すぎず）", b: "競合の価格帯と自分の提供価値を照らし合わせて料金を決定します。" },
  { n: "05", t: "集客方法・主な営業先の確認", b: "どこで・誰に・どうやって知ってもらうかの導線を事前に設計します。" },
  { n: "06", t: "販売方法・受注プロセスの設計", b: "問い合わせから成約・納品・請求までの流れを整理します。" },
  { n: "07", t: "初期費用の優先順位の検討", b: "開業時の出費の中で削れるものと必要なものを仕分けします。" },
  { n: "08", t: "Web集客の設計（HP・GBP・SEO）", b: "ホームページ・Googleビジネスプロフィール・SEOをいつどう整えるか計画します。" },
  { n: "09", t: "ホームページ制作の時期の検討", b: "SEO効果は時間がかかるため、開業前・開業直後の制作を推奨しています。" },
  { n: "10", t: "Googleマップ対策（MEO）の確認", b: "地域名検索で表示されるために、GBPの整備と定期投稿の計画を立てます。" },
  { n: "11", t: "SNS運用方針の決定", b: "どのSNSを・どの頻度で・誰向けに運用するかを事前に決めておきます。" },
  { n: "12", t: "収益柱の検討（販売パートナー制度等）", b: "自社サービスが安定するまでの期間を補う収益の選択肢を検討します。" },
];

const challengeItems = [
  { t: "開業したが問い合わせが来ない", b: "Webでの集客導線がなく、SNSや口コミだけでは継続的な流入が難しい状態です。ホームページとGBPの整備が初期対策として有効です。" },
  { t: "知人紹介以外の導線がない", b: "知人ネットワークに依存すると、一定のタイミングで新規が止まります。SEO・MEOで継続的に検索から流入できる設計が必要です。" },
  { t: "ホームページがない", b: "ホームページがないと、紹介された方が調べたときに情報がなく、信頼性が担保されません。最低限のページでも早期に整備することが重要です。" },
  { t: "SNSだけに頼っている", b: "SNSはフォロワーへの到達に限界があり、投稿をやめると集客が止まります。SEOやGBPと組み合わせた「資産型集客」の設計が必要です。" },
  { t: "Googleマップに表示されない", b: "GBP未登録・未整備が主な原因です。住所・電話番号・営業時間・写真・カテゴリを正確に設定することで表示可能性が高まります。" },
  { t: "営業先が少ない", b: "既存の人脈に限界が来た場合、Web経由での新規問い合わせが重要になります。地域名キーワードのSEO対策で検索経由の問い合わせを増やせる可能性があります。" },
  { t: "固定収入が安定しない", b: "単発の受注だけでは月収が安定しません。月額サービス・サブスク設計・販売パートナー活動を組み合わせた収益モデルの検討が有効です。" },
  { t: "地域名検索に弱い", b: "「葛飾区 ○○」で検索しても自社が出てこない状態です。ホームページのSEO設計とGBPの整備で地域名検索への対応が可能です。" },
  { t: "サービス内容が伝わらない", b: "ホームページの説明が不十分で、見込み顧客がサービスを理解できない状態です。サービスページ・料金ページ・FAQページの充実が必要です。" },
  { t: "見積もり・料金ページがない", b: "料金の目安が不明だと問い合わせへの心理的ハードルが上がります。目安となる料金表・見積もりフォームを用意することで問い合わせが増えやすくなります。" },
  { t: "創業資金の使い方が分からない", b: "Web制作・広告・設備費のバランスがわからず、過剰投資や過小投資になるケースがあります。優先順位を整理した資金計画が重要です。" },
  { t: "売上が安定するまでの収益柱がない", b: "自社サービスが安定するまでの期間、収益のギャップを埋める選択肢が必要です。販売パートナー制度の活用を収益柱の一つとして検討できます。" },
];

const reasonCards = [
  { t: "公式サイトは信頼性の受け皿になる", b: "SNSのプロフィールより、独自ドメインのホームページが存在することで、見込み顧客からの信頼性が高まります。" },
  { t: "Googleマップからの来店・問い合わせ", b: "GBPを整備することで、地域名検索からの来店・電話・問い合わせが増える可能性があります。" },
  { t: "地域名検索で見つけてもらう", b: "「葛飾区＋業種名」の検索でホームページが上位表示されることで、継続的な問い合わせ流入が期待できます。" },
  { t: "SNS投稿だけでは資産化しにくい", b: "SNS投稿は時系列に流れていきますが、SEO対応のホームページは検索資産として蓄積されます。" },
  { t: "料金・事例ページがあると商談しやすい", b: "問い合わせ前に料金・実績・サービス内容を確認できると、商談がスムーズに進みやすくなります。" },
  { t: "AI検索にも対応が必要", b: "ChatGPT・Gemini・Perplexityでの引用を狙うには、E-E-A-T・FAQ・構造化データを意識したサイト設計が必要です。" },
];

const supportItems = [
  { t: "ホームページ制作", b: "SEO設計込みの高速ホームページ制作。飲食・美容・士業・クリニックなど業種別に最適化。" },
  { t: "SEO対策", b: "「葛飾区＋業種」「亀有・金町・新小岩＋業種」などの地域キーワードでの上位表示を目指します。" },
  { t: "MEO対策", b: "Googleビジネスプロフィールの最適化・写真投稿・口コミ管理・定期投稿代行。" },
  { t: "AIO対策（AI検索対策）", b: "ChatGPT・Gemini・Perplexityで引用されやすいコンテンツ・構造化データ設計。" },
  { t: "SNS運用支援", b: "Instagram・X等のコンテンツ作成・投稿代行。ホームページ・GBPとの連動設計。" },
  { t: "Web集客パッケージ", b: "制作+SEO+MEO+問い合わせ導線設計をセットで提供。予算が決まっている事業者向けのセットプランです。" },
  { t: "販売パートナー制度", b: "Web集客サービスを地域事業者へ紹介できる制度。創業初期の収益柱の一つとして検討できます。" },
  { t: "創業時のWeb集客設計", b: "開業前から集客の優先順位・制作スケジュール・SEO方針を整理します。" },
  { t: "見積内容と制作範囲の整理", b: "補助金申請に必要な見積書発行・制作範囲の明示に対応しています。" },
];

const relatedLinks = [
  { href: "/area/tokyo/katsushika/start-business-checklist", label: "葛飾区で起業する方向けの開業準備チェックリストを見る", desc: "8カテゴリ・57項目のチェックリスト" },
  { href: "/area/tokyo/katsushika/startup-funding", label: "葛飾区で創業資金や補助金を確認する前に知っておきたいこと", desc: "融資・補助金・ホームページ作成費補助の注意点" },
  { href: "/area/tokyo/katsushika/startup-web-marketing", label: "葛飾区で創業する方向けのWeb集客ガイドを見る", desc: "GBP・HP・SEO・MEO・SNSの優先順位" },
  { href: "/area/tokyo/katsushika/web-design-subsidy", label: "葛飾区でホームページ制作と補助金を確認する", desc: "制作と補助金の確認ポイント" },
  { href: "/area/tokyo/katsushika/startup-revenue-streams", label: "創業初期の収益柱として販売パートナー制度を確認する", desc: "創業初期の収益柱づくり" },
  { href: "/partner/katsushika-startup", label: "葛飾区で起業する方向け販売パートナー制度を見る", desc: "取次・紹介でできる制度" },
  { href: "/pricing/web-growth-package", label: "Web集客パッケージの料金を確認する", desc: "制作+SEO+MEOセットの料金" },
  { href: "/column/katsushika-startup-checklist", label: "葛飾区で開業する前に確認したいチェックリスト完全版", desc: "コラム：開業前の確認事項" },
  { href: "/column/katsushika-startup-homepage-seo", label: "葛飾区で創業する事業者がSEOに強いホームページを作るべき理由", desc: "コラム：創業期のHP設計" },
  { href: "/column/startup-first-client-acquisition", label: "創業初期に最初の顧客を獲得するための営業導線", desc: "コラム：初期顧客獲得" },
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
              <span style={{ color: "#0d1b2a" }}>葛飾区で起業・創業する方へ</span>
            </nav>
            <p style={S.label}>Katsushika — Startup Hub</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で起業・創業する方へ
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              葛飾区を拠点とする株式会社サイプレスが、葛飾区で起業・創業する方向けに、開業準備・Web集客・収益柱づくりをまとめて確認できるガイドページを提供しています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#6B7280", maxWidth: "640px", marginBottom: "36px" }}>
              創業支援制度の申請代行は行っていません。行政機関への申請は必ず公式サイトでご確認ください。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                葛飾区でのWeb集客について相談する
              </Link>
              <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "transparent", color: "#0d1b2a", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #0d1b2a" }}>
                販売パートナー制度も含めて相談する
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: 整理したいこと */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Before You Start</p>
            <h2 style={S.h2}>葛飾区で起業する前に整理したいこと</h2>
            <p style={S.body}>開業の前に以下の12項目を整理しておくことで、創業後の集客・営業・運営がスムーズになります。</p>
            <div style={{ maxWidth: "800px" }}>
              {checkItems.map((item) => (
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

        {/* SECTION 3: 創業支援・相談窓口 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Support</p>
            <h2 style={S.h2}>葛飾区の創業支援・相談窓口を確認する</h2>
            <p style={S.body}>
              葛飾区では創業支援相談・創業塾など、起業を支援するための制度・窓口があります。制度内容は年度や受付状況によって変更される可能性があるため、必ず公式サイトの最新情報をご確認ください。
            </p>
            <div style={{ background: "#FEF9C3", border: "1px solid #FDE68A", borderRadius: "8px", padding: "20px 24px", maxWidth: "720px", marginBottom: "32px" }}>
              <p style={{ fontWeight: 700, color: "#78350F", fontSize: "14px", marginBottom: "8px" }}>ご注意ください</p>
              <p style={{ fontSize: "14px", color: "#78350F", lineHeight: "1.85" }}>
                葛飾区の創業支援、融資、補助金などの制度内容は、年度や受付状況によって変更される場合があります。申請や利用を検討する際は、必ず葛飾区公式サイトの最新情報をご確認ください。株式会社サイプレスは行政機関ではなく、申請代行は行っていません。
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "860px" }}>
              {[
                { t: "葛飾区産業経済課（創業相談窓口）", b: "葛飾区内での開業・創業に関する相談を受け付けています。制度内容は公式サイトでご確認ください。" },
                { t: "創業塾・セミナー", b: "葛飾区や関連機関が主催する創業塾・セミナーが定期的に開催されています。最新情報は公式サイトで要確認です。" },
                { t: "日本政策金融公庫（創業融資）", b: "創業期に活用できる融資制度があります。審査があり、融資実行を保証するものではありません。" },
                { t: "東京都中小企業振興公社", b: "東京都内の中小企業・創業者向けの支援機関。各種制度の最新情報は公式サイトでご確認ください。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: 創業初期の課題 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Challenges</p>
            <h2 style={S.h2}>創業初期に起きやすい課題</h2>
            <p style={S.body}>葛飾区で創業した方からよく聞く課題を12項目にまとめました。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", maxWidth: "960px" }}>
              {challengeItems.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: HP・SEO・MEOを整える理由 */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Why Web</p>
            <h2 style={S.h2}>創業時にホームページ・SEO・MEOを整えるべき理由</h2>
            <p style={S.body}>創業初期こそWeb集客の基盤を整えることが、長期的な集客力に差をつけます。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {reasonCards.map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "22px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: 販売パートナー制度 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={S.container}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Revenue Stream</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,32px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "24px" }}>
              創業初期の収益柱として販売パートナー制度を検討する
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#D1D5DB", maxWidth: "660px", marginBottom: "32px" }}>
              創業初期は、自社の商品やサービスだけで売上を安定させるまでに時間がかかることがあります。地域事業者とのつながりや営業経験がある方であれば、ホームページ制作、SEO対策、MEO対策、AIO対策などのWeb集客サービスを紹介する販売パートナー制度も、収益柱の一つとして検討できます。
            </p>
            <p style={{ fontSize: "13px", color: "#9CA3AF", maxWidth: "640px", marginBottom: "32px" }}>
              成果・収入を保証するものではありません。無理な営業ではなく、必要としている事業者への紹介を前提にしています。
            </p>
            <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "transparent", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #fff" }}>
              葛飾区で起業する方向け販売パートナー制度を見る
            </Link>
          </div>
        </section>

        {/* SECTION 7: パートナー種類の違い */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Partner Types</p>
            <h2 style={S.h2}>取次店・代理店・紹介パートナーの違い</h2>
            <p style={S.body}>
              「販売パートナー」と一口に言っても、活動形態はいくつかの種類があります。サイプレスのパートナー制度がどの形態に近いかを把握した上でご検討ください。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "960px", marginBottom: "32px" }}>
              {[
                {
                  label: "取次店（紹介型）",
                  badge: "サイプレスのモデルに近い",
                  badgeColor: "#0d1b2a",
                  b: "顧客をサイプレスへ紹介するだけのシンプルな形態。詳しい説明・提案・契約はサイプレスが直接対応するため、専門知識は不要です。地域の知人・人脈を活かした紹介活動が中心になります。",
                },
                {
                  label: "販売代理店（提案型）",
                  badge: "専門知識が必要",
                  badgeColor: "#374151",
                  b: "自社ブランドで提案・見積もり・説明まで行うモデル。高い自由度がある一方、サービス内容を深く理解した上での営業活動が求められます。",
                },
                {
                  label: "紹介パートナー（ライト型）",
                  badge: "最も気軽な形",
                  badgeColor: "#6B7280",
                  b: "知人・取引先など身近な事業者に「こんなサービスがあるよ」と伝えるだけの形態。成約した場合に謝礼が発生するケースが多く、契約形態はシンプルです。",
                },
              ].map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "22px 18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>{item.label}</p>
                  </div>
                  <span style={{ display: "inline-block", background: item.badgeColor, color: "#fff", fontSize: "10px", padding: "2px 8px", borderRadius: "3px", marginBottom: "10px", letterSpacing: "0.04em" }}>{item.badge}</span>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: "8px", padding: "18px 22px", maxWidth: "720px" }}>
              <p style={{ fontSize: "14px", color: "#0369A1", lineHeight: "1.85" }}>
                <strong>サイプレスのパートナー制度について：</strong>
                主に「取次店・紹介パートナー型」として、地域事業者をサイプレスへご紹介いただく形です。専門知識は不要で、営業経験や地域の人脈を活かせる可能性があります。成果は提案先や商談内容によって変わります。
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: サイプレスの支援 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Our Support</p>
            <h2 style={S.h2}>サイプレスが提供できる支援</h2>
            <p style={S.body}>葛飾区を拠点とする株式会社サイプレスが提供できる支援の一覧です。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "900px" }}>
              {supportItems.map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: 関連ページ */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "14px" }}>
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
          heading="葛飾区での起業・創業についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="葛飾区でのWeb集客・販売パートナー制度について相談する"
          body="ホームページ制作、SEO、MEO、販売パートナー制度に関するご質問はお気軽にどうぞ。"
        />

      </main>
      <Footer />
    </>
  );
}
