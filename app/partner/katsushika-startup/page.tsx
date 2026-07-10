import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で起業する方向け販売パートナー制度｜Web集客サービスの取次・紹介｜株式会社サイプレス",
  description:
    "葛飾区で起業・創業する方に向けて、ホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを地域事業者へ紹介できる販売パートナー制度（取次店・代理店）を案内します。成果を保証するものではありません。",
  keywords: [
    "葛飾区 販売代理店",
    "葛飾区 代理店募集",
    "葛飾区 取次店募集",
    "葛飾区 副業 営業",
    "葛飾区 独立 営業",
    "葛飾区 起業 副業",
    "葛飾区 営業パートナー",
    "葛飾区 Web制作 代理店",
    "葛飾区 SEO 代理店",
    "葛飾区 MEO 代理店",
  ],
  openGraph: {
    title: "葛飾区で起業する方向け販売パートナー制度｜Web集客サービスの取次・紹介",
    description:
      "葛飾区で起業・創業する方に向けて、ホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを地域事業者へ紹介できる販売パートナー制度をご案内します。成果を保証するものではありません。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/partner/katsushika-startup",
  },
};

const faqItems = [
  {
    q: "葛飾区で起業した直後から販売パートナーとして活動できますか？",
    a: "はい、可能です。開業直後から、地域の人脈・知人の事業者を対象にWeb集客サービスを紹介する形で活動できます。自社サービスの立ち上げと並行して、創業初期の収益柱の一つとして検討してください。ただし、成果・収入を保証するものではありません。",
  },
  {
    q: "専門的なSEO・MEO・Web制作の知識がなくても活動できますか？",
    a: "はい、専門知識がなくても活動できます。紹介後の詳細提案・制作・運用はサイプレスが担当します。サービス説明の簡易資料・よくある質問への回答集を提供しますので、それをもとに紹介活動を進めていただけます。",
  },
  {
    q: "葛飾区でどのような事業者にWeb集客サービスを紹介できますか？",
    a: "葛飾区内の飲食店・美容室・整体院・歯科・クリニック・不動産会社・建設業・士業・学習塾・清掃業・小売店など、Web集客に課題を持つ事業者が対象です。「Googleマップに出てきたい」「ホームページから問い合わせを増やしたい」という経営者の紹介を歓迎しています。",
  },
  {
    q: "葛飾区の地域事業者に何を話せばよいですか？",
    a: "「GoogleマップやGoogleで検索したとき、上位に出ていますか？」「ホームページへの問い合わせは来ていますか？」という問いかけから始めるのがシンプルで効果的です。課題感があれば、詳細はサイプレスにつないでいただければ、専門担当者が説明します。",
  },
  {
    q: "報酬はどのような仕組みですか？",
    a: "報酬体系の詳細は個別のご相談の中でご案内します。紹介案件の内容・成約状況などを踏まえて個別に協議させていただきます。まずはお問い合わせください。成果・収入を保証するものではありません。",
  },
  {
    q: "紹介後にパートナーが担当することはありますか？",
    a: "紹介後の提案・制作・保守・運用・顧客対応はすべてサイプレスが担当します。パートナーの皆様の役割は基本的に「紹介すること」です。詳細な商談が必要な場合は、サイプレスの担当者が三者面談に同席します。",
  },
  {
    q: "葛飾区内でどのくらいのWeb集客ニーズがありますか？",
    a: "葛飾区は約46万人の人口を持つ東京23区の一つで、飲食店・美容室・整体院・クリニック・士業・不動産・建設業など多くの地域事業者が存在します。多くの事業者がGoogleビジネスプロフィールの整備不足・ホームページの未整備・SEO対策の未着手という状態にあり、Web集客支援のニーズは広く存在します。",
  },
  {
    q: "葛飾区で創業する事業と販売パートナー活動を両立できますか？",
    a: "はい、可能です。自社サービスの構築・販売と並行して、地域事業者への紹介活動を行うことができます。自社サービスが軌道に乗るまでの期間の収益の一つとして検討できます。ただし成果を保証するものではありません。",
  },
  {
    q: "葛飾区内の開業予定の事業者も紹介対象になりますか？",
    a: "はい、開業前・開業直後の事業者もWeb集客のニーズが高いため紹介対象になります。「開業に合わせてホームページを作りたい」「開業初日からGoogleマップに出したい」という要望を持つ方への紹介を歓迎しています。",
  },
  {
    q: "強引な営業をしなければいけませんか？",
    a: "いいえ。強引・押し売りの営業は禁止しています。無理な営業ではなく、必要としている事業者への紹介を前提にしています。断られた場合は無理に進めないことを方針としています。",
  },
  {
    q: "葛飾区外の事業者にも紹介できますか？",
    a: "はい、全国対応可能です。葛飾区・東京都内が最も対応実績が豊富ですが、オンラインでのサービス提供のため、地域を問わず紹介いただけます。",
  },
  {
    q: "取次店と販売代理店の違いは何ですか？",
    a: "取次店は主に「紹介」が役割で、詳細な商談・提案はサイプレスが担当します。販売代理店はより主体的な販売活動を行うモデルです。どちらが合うかは、ご経験・活動スタイル・目的によって異なりますので、まずはご相談ください。",
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
        { "@type": "ListItem", position: 2, name: "パートナー制度", item: "https://www.cypress-all.co.jp/partner" },
        { "@type": "ListItem", position: 3, name: "葛飾区起業者向け販売パートナー制度", item: "https://www.cypress-all.co.jp/partner/katsushika-startup" },
      ],
    },
    {
      "@type": "Service",
      name: "葛飾区起業者向け販売パートナー制度",
      provider: {
        "@type": "Organization",
        name: "株式会社サイプレス",
        url: "https://www.cypress-all.co.jp",
        address: {
          "@type": "PostalAddress",
          addressCountry: "JP",
          postalCode: "124-0816",
          addressRegion: "東京都",
          addressLocality: "葛飾区",
          streetAddress: "白鳥4-6-1-623",
        },
        email: "info@cypress-all.co.jp",
      },
      areaServed: { "@type": "AdministrativeArea", name: "東京都葛飾区" },
      description:
        "葛飾区で起業・創業する方に向けて、ホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを紹介できる販売パートナー制度（取次店・代理店）。成果・収入を保証するものではありません。",
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
              <Link href="/partner" style={{ color: "#6B7280" }}>パートナー制度</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>葛飾区起業者向け販売パートナー制度</span>
            </nav>
            <p style={S.label}>Katsushika — Startup Partner</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "20px" }}>
              葛飾区で起業する方向け<br />販売パートナー制度
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "12px" }}>
              創業初期の収益柱の一つとして、地域事業者にホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを紹介できる制度です。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#6B7280", maxWidth: "640px", marginBottom: "36px" }}>
              成約には商談内容や提案先の状況が影響します。成果・収入を保証するものではありません。無理な営業ではなく、必要としている事業者への紹介を前提にしています。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                制度説明を聞く・相談する
              </Link>
              <Link href="/partner/local-sales-agent" style={{ display: "inline-block", background: "transparent", color: "#0d1b2a", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #0d1b2a" }}>
                全国向け代理店・取次店制度を見る
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: 誰向けか */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>For Whom</p>
            <h2 style={S.h2}>このパートナー制度が向いている方</h2>
            <p style={S.body}>
              葛飾区での創業・起業を予定している方、または創業直後の方で、以下のいずれかに当てはまる場合に活動しやすい制度です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", maxWidth: "860px" }}>
              {[
                { t: "葛飾区で起業予定・創業直後の方", b: "創業初期の収益柱の一つとして検討できます。自社サービスの立ち上げと並行して活動可能です。" },
                { t: "営業経験がある方", b: "前職や以前のビジネスで培った営業経験・商談スキルを活かせる可能性があります。" },
                { t: "地域の事業者と接点がある方", b: "葛飾区内の経営者・開業予定者・地域コミュニティとのつながりがある方に向いています。" },
                { t: "法人営業を始めたい方", b: "飲食店・美容室・クリニック等の法人経営者へのアプローチ経験がある方や、始めたい方。" },
                { t: "自社サービスに追加商材を持ちたい方", b: "既に何らかのサービスを提供している方が、Web集客サービスを追加商材として持つ形での活動も可能です。" },
                { t: "副業・複業として営業案件を扱いたい方", b: "週に数時間から始められる副業・複業として検討したい方。ただし成果を保証するものではありません。" },
                { t: "人と人をつなぐことが得意な方", b: "専門知識よりも、信頼関係を作り、課題感のある事業者をサイプレスにつなぐことが主な役割です。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: なぜ葛飾区で提案しやすいか */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Local Market</p>
            <h2 style={S.h2}>葛飾区でWeb集客ニーズのある業種</h2>
            <p style={S.body}>
              葛飾区は地域密着型の事業者が多く、Web集客の整備が追いついていない事業者が広く存在します。地域事業者との接点を活かしやすい商材です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px", maxWidth: "900px" }}>
              {[
                { t: "飲食店", b: "「亀有 ランチ」「金町 居酒屋」などの地域名検索対応・Googleマップの口コミ充実が課題になりやすい。" },
                { t: "美容室・ネイルサロン", b: "SNS中心でホームページ・SEOが不十分なサロンが多く、地域名キーワードでの集客余地がある。" },
                { t: "整体院・整骨院", b: "症状別ページ・地域名対応ページが不足しているケースが多い。MEO対策との組み合わせが効果的。" },
                { t: "クリニック・歯科医院", b: "「葛飾区 歯医者」「金町 小児歯科」などのキーワード対応で集患につながるケースがある。" },
                { t: "士業（税理士・行政書士等）", b: "地域名＋業種での検索集客が重要。コンテンツSEO・FAQ設計が有効なカテゴリ。" },
                { t: "不動産会社", b: "エリアガイド・物件情報の充実と地域名SEOが集客の基盤。GBPとの連動が重要。" },
                { t: "建設業・リフォーム会社", b: "施工事例の蓄積・「葛飾区 外壁塗装」などの地域名キーワード対応が受注増加につながる。" },
                { t: "清掃業", b: "「葛飾区 ハウスクリーニング」など地域名＋サービス名のページが未整備な会社が多い。" },
                { t: "学習塾・個別指導塾", b: "「亀有 塾」「葛飾区 高校受験 対策」などの地域名キーワードへの対応が集客に直結する。" },
                { t: "小売店", b: "GBPの写真整備・投稿充実と地域名＋商品カテゴリページの整備で差別化しやすい。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: 紹介できる商材 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Products</p>
            <h2 style={S.h2}>紹介できるサイプレスの商材</h2>
            <p style={S.body}>地域事業者のニーズに応じた多様なWeb集客サービスを紹介できます。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {[
                { t: "ホームページ制作", b: "SEOに強い高速サイトを制作。飲食・美容・士業・クリニック向けのシンプルなパッケージから、SEO設計込みの制作まで対応。" },
                { t: "SEO対策", b: "「葛飾区＋業種」「亀有・金町・新小岩＋業種」などの地域キーワードでの上位表示を目指すローカルSEO。" },
                { t: "MEO対策", b: "Googleビジネスプロフィールの最適化・写真投稿・口コミ管理・定期投稿代行。地域名検索でのGoogleマップ上位表示を目指します。" },
                { t: "AIO対策（AI検索対策）", b: "ChatGPT・Gemini・Perplexityで引用されやすいコンテンツ・構造化データ設計。次世代集客の基盤構築。" },
                { t: "SNS運用支援", b: "Instagram・X等のコンテンツ作成・投稿代行。ホームページ・GBPとの連動設計で集客効果を高めます。" },
                { t: "Web集客パッケージ", b: "制作+SEO+MEO+問い合わせ導線設計をセットで提供。予算が決まっている事業者に提案しやすいセットプランです。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "22px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <Link href="/pricing/web-growth-package" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "13px 24px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                Web集客パッケージ料金を確認する →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: 提案先の例 */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Referral Targets</p>
            <h2 style={S.h2}>紹介先・提案先の例</h2>
            <p style={S.body}>
              特別な営業ルートがなくても、身近なつながりから紹介活動を始めることができます。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "知人・友人の店舗・事業者", b: "知人が運営する飲食店・サービス業・小売店などへの紹介は、信頼関係があるため話が進みやすい傾向があります。" },
                { n: "02", t: "開業予定の知人・友人", b: "「これから起業する」という知人には、開業初日からGBPとホームページを整える重要性を伝えるタイミングがあります。" },
                { n: "03", t: "地域の会社・事業者", b: "葛飾区内のコミュニティ・異業種交流会・地域の集まりで出会った事業者へのアプローチが可能です。" },
                { n: "04", t: "既存の取引先", b: "自社サービスの取引先企業にWeb集客の課題がある場合、追加で紹介できる場面があります。" },
                { n: "05", t: "紹介先からの紹介（2次紹介）", b: "成約した紹介先が満足した場合に、さらに別の事業者を紹介してもらえるケースがあります。" },
                { n: "06", t: "同業者ネットワーク", b: "前職での同業者・業界コミュニティの中にWeb集客ニーズを持つ事業者がいる場合があります。" },
              ].map((item) => (
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

        {/* SECTION 6: 報酬体系 */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Reward</p>
            <h2 style={S.h2}>報酬体系について</h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "20px" }}>
              報酬体系の詳細は、ご参加いただく制度（取次店・販売代理店）や紹介案件の内容によって異なります。個別のご相談の中でご案内します。
            </p>
            <div style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px", maxWidth: "600px", marginBottom: "28px" }}>
              <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "12px" }}>報酬に関する重要な確認事項</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "成約には商談内容や提案先の状況が影響します",
                  "成果・収入を保証するものではありません",
                  "未成約の場合の費用負担はありません",
                  "詳細な報酬条件は個別にご案内します",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", paddingLeft: "18px", position: "relative", marginBottom: "8px" }}>
                    <span style={{ position: "absolute", left: 0, color: "#c4b89a" }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "13px 24px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
              報酬・制度詳細について相談する →
            </Link>
          </div>
        </section>

        {/* SECTION 7: 代理店・取次店・紹介パートナーの違い */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Partner Types</p>
            <h2 style={S.h2}>代理店・取次店・紹介パートナーの違い</h2>
            <p style={S.body}>
              パートナー制度にはいくつかの種類があります。活動スタイル・時間・専門性によって最適なモデルが変わります。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px", maxWidth: "900px", marginBottom: "32px" }}>
              {[
                {
                  label: "紹介パートナー（ライト型）",
                  tag: "最も気軽",
                  tagBg: "#c4b89a",
                  b: "知人・取引先の経営者に「こういうサービスがあります」と伝えるだけの形。説明の難しい部分はサイプレスが担当するため、専門知識は不要です。",
                },
                {
                  label: "取次店（標準型）",
                  tag: "サイプレスのモデルに近い",
                  tagBg: "#0d1b2a",
                  b: "課題を抱えた事業者を探してサイプレスへつなぐ役割。商談・提案・制作はサイプレスが対応。地域の人脈・営業経験を活かせる可能性があります。",
                },
                {
                  label: "販売代理店（本格型）",
                  tag: "専門知識が必要",
                  tagBg: "#374151",
                  b: "自社の名前で提案・見積もり・説明まで行うモデル。自由度は高いが、サービスを深く理解した上での営業が求められます。",
                },
              ].map((item) => (
                <div key={item.label} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "22px 18px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <span style={{ display: "inline-block", background: item.tagBg, color: "#fff", fontSize: "10px", padding: "2px 8px", borderRadius: "3px", marginBottom: "10px", letterSpacing: "0.04em" }}>{item.tag}</span>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "#6B7280", maxWidth: "680px" }}>
              どのモデルが合うかは、ご経験・活動スタイル・目的によって異なります。まずはご相談ください。成果は提案先や商談内容によって変わります。
            </p>
          </div>
        </section>

        {/* SECTION 8: 取次の流れ */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>How It Works</p>
            <h2 style={S.h2}>パートナー活動・取次の流れ</h2>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "お問い合わせ・制度説明", b: "まずはお問い合わせフォームからご連絡ください。パートナー制度の詳細・報酬体系・活動のルールについて個別にご説明します。" },
                { n: "02", t: "商材理解・資料の受け取り", b: "サイプレスのサービス内容・料金目安・よくある質問をまとめた簡易資料を提供します。事業者への紹介時に役立てていただけます。" },
                { n: "03", t: "紹介先の検討・アプローチ", b: "知人の経営者・取引先・地域の事業者の中で、Web集客に課題を持っていそうな方を検討します。強引な営業は行わず、自然な会話の中で課題感を確認します。" },
                { n: "04", t: "サイプレスへの紹介", b: "紹介先が「話を聞いてみたい」となった段階で、サイプレスの担当者につなぎます。詳細な商談・提案はサイプレスが担当します。" },
                { n: "05", t: "商談・提案", b: "サイプレスが直接提案・見積・プレゼンを行います。パートナーが三者面談に同席することも可能です（必須ではありません）。" },
                { n: "06", t: "成約・報酬発生", b: "成約が成立した場合に、個別に合意した報酬体系に基づいて報酬が発生します。成約しなかった場合の費用負担はありません。" },
              ].map((item) => (
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

        {/* SECTION 9: 安心して紹介できる理由 */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Why Trust</p>
            <h2 style={S.h2}>安心して紹介できる理由</h2>
            <p style={S.body}>専門知識がなくても、紹介しやすい環境を整えています。</p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "制作・運用はサイプレスが担当", b: "ホームページ制作・SEO・MEO・AIOの専門的な説明・提案・制作・保守・運用・顧客対応はすべてサイプレスが行います。パートナーの皆様は「紹介すること」に専念していただけます。" },
                { n: "02", t: "紹介しやすい資料を提供", b: "「どう説明すればいいか分からない」という方のために、事業者向けの簡易説明資料・よくある質問への回答集を提供します。専門知識がなくても紹介活動を始めやすい環境を整えています。" },
                { n: "03", t: "誇大表現を避けた提案方針", b: "「必ず1位になれる」「必ず問い合わせが増える」などの成果・順位保証の表現は社内でも禁止しています。正確な情報をもとにした提案を方針としており、紹介パートナーの皆様にも同様の対応をお願いしています。" },
                { n: "04", t: "地域事業者に必要なWeb集客サービス", b: "葛飾区を拠点とするサイプレスは、地域店舗・中小企業向けのWeb集客支援を専門としています。地域事業者との接点を活かしやすい商材です。成果は提案先や商談内容によって変わります。" },
                { n: "05", t: "高単価商材も扱える", b: "ホームページ制作・SEO・MEOは単品でも数十万円〜の商材です。成約した場合の報酬も相応に設定できます。詳細は個別にご案内します。" },
              ].map((item) => (
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

        {/* SECTION 10: NG営業ルール */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>NG Rules</p>
            <h2 style={S.h2}>NG営業・使ってはいけない表現</h2>
            <p style={S.body}>
              パートナー活動において絶対に使用してはいけない表現・禁止行為を明示します。これらはサイプレス・パートナー双方の信頼を守るために設けています。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px", maxWidth: "900px" }}>
              {[
                { t: "「誰でも稼げます」", b: "収入・成果を保証する表現は使用禁止です。成果は提案先や商談内容によって変わります。" },
                { t: "「簡単に稼げます」「ノーリスクで稼げます」", b: "過度に簡単だと思わせる表現は禁止です。紹介活動には時間と関係づくりが必要です。" },
                { t: "「必ず成約します」「成約保証があります」", b: "成約・発注を保証することはできません。提案先の判断に委ねます。" },
                { t: "「葛飾区公認」「行政と提携しています」", b: "行政機関との公式な提携があるかのような表現は虚偽情報になるため禁止です。" },
                { t: "「SEOで必ず1位になります」", b: "検索順位の保証は誰にもできません。目標とするキーワードによって変わります。" },
                { t: "「問い合わせを保証します」「売上保証があります」", b: "集客効果・売上を保証することはサイプレスの方針として行っていません。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#FFFFFF", border: "1px solid #FCA5A5", borderRadius: "8px", padding: "18px 16px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#DC2626", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px", background: "#F0F9FF", border: "1px solid #BAE6FD", borderRadius: "8px", padding: "18px 22px", maxWidth: "720px" }}>
              <p style={{ fontSize: "14px", color: "#0369A1", lineHeight: "1.85" }}>
                正しい表現例: 「収益柱の一つとして検討できます」「営業経験や人脈を活かせる可能性があります」「必要としている事業者への紹介を前提にしています」「無理な営業や誇大表現は禁止しています」「成果を保証するものではありません」
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11: 注意事項 */}
        <section style={{ background: "#FEF9C3", padding: "48px 0" }}>
          <div style={S.container}>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#854D0E", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>重要な注意事項</p>
            <div style={{ maxWidth: "720px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "成果・収入を保証するものではありません。成約には商談内容や提案先の状況が影響します。",
                  "「必ず成約する」「必ず収入になる」という表現での営業活動は禁止しています。",
                  "強引・押し売りの営業活動は禁止しています。必要としている事業者への紹介を前提にしています。",
                  "誇大広告・虚偽の説明・過度な期待を与える表現は禁止しています。",
                  "反社会的勢力・不適切な営業手法・コンプライアンス違反となる行為は不可です。",
                  "契約条件・報酬体系の詳細は個別に確認してください。口頭確認のみでの活動開始は禁止です。",
                ].map((item) => (
                  <li key={item} style={{ fontSize: "13px", color: "#854D0E", lineHeight: "1.9", paddingLeft: "18px", position: "relative", marginBottom: "8px" }}>
                    <span style={{ position: "absolute", left: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 12: 関連ページ */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
              {[
                { href: "/partner/local-sales-agent", label: "全国向け代理店・取次店募集", desc: "詳細な制度説明・全国対応" },
                { href: "/partner/referral", label: "取次店（紹介パートナー）", desc: "最もシンプルな紹介制度" },
                { href: "/area/tokyo/katsushika/start-business", label: "葛飾区で起業・創業する方へ", desc: "創業準備の総合ガイド" },
                { href: "/area/tokyo/katsushika/startup-revenue-streams", label: "創業初期の収益柱を増やす方法", desc: "収益柱づくりの考え方" },
                { href: "/area/tokyo/katsushika/startup-web-marketing", label: "葛飾区Web集客ガイド", desc: "ホームページ・SEO・MEO" },
                { href: "/pricing/web-growth-package", label: "Web集客パッケージ料金", desc: "紹介可能な商材の料金" },
                { href: "/web-design", label: "ホームページ制作", desc: "制作サービス詳細" },
                { href: "/seo", label: "SEO対策", desc: "検索上位表示支援" },
                { href: "/meo", label: "MEO対策", desc: "Googleマップ最適化" },
                { href: "/contact", label: "お問い合わせ", desc: "まずはご相談ください" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 13: FAQ */}
        <FaqSection
          items={faqItems}
          heading="葛飾区起業者向け販売パートナー制度についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="制度説明を聞く・販売パートナーとして相談する"
          body="葛飾区での創業・起業を検討している方で、Web集客サービスの紹介活動に興味をお持ちの方はお気軽にご連絡ください。成果・収入を保証するものではありません。"
        />

      </main>
      <Footer />
    </>
  );
}
