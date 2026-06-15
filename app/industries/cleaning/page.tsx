import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【ハウスクリーニング・清掃業のMEO・SEO対策】地域検索で選ばれる集客戦略｜株式会社サイプレス",
  description: "ハウスクリーニング・エアコンクリーニング・清掃業のWeb集客。Googleマップ上位表示・地域SEO・料金透明化・口コミ獲得で定期受注を増やします。東京・葛飾区対応。",
  keywords: [
    "ハウスクリーニング MEO対策",
    "清掃業 集客",
    "エアコンクリーニング Googleマップ",
    "清掃業 ホームページ",
    "ハウスクリーニング SEO",
    "清掃業者 Web集客",
    "ハウスクリーニング 地域検索",
    "清掃業 口コミ 獲得",
  ],
  openGraph: {
    title: "【ハウスクリーニング・清掃業のMEO・SEO対策】地域検索で選ばれる集客戦略｜株式会社サイプレス",
    description: "ハウスクリーニング・清掃業のWeb集客。MEO・SEO・ホームページで定期受注を増やします。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/cleaning" },
};

const faqItems = [
  {
    q: "ハウスクリーニング業のMEO対策は効果がありますか？",
    a: "はい。「○○市 ハウスクリーニング」「○○区 エアコン掃除 業者」など地域名での検索でGoogleマップ上位に表示されることは、問い合わせ獲得に非常に有効です。清掃業は「今すぐ依頼したい」ニーズが多く、Googleマップからの問い合わせ転換率が高い業種です。Googleビジネスプロフィールの写真・サービス情報・口コミを整備することで、地域の清掃需要を確実に捕捉できます。",
  },
  {
    q: "清掃業のホームページに必要な情報は何ですか？",
    a: "サービス一覧・料金目安（㎡別・箇所別）・対応エリア・スタッフ紹介（顔写真）・施工前後の写真・お客様の声・問い合わせフォーム・電話番号が最低限必要です。特に「料金の透明性」が重要で、見積もりなしに大まかな費用感がわかることが問い合わせ率向上に直結します。",
  },
  {
    q: "ハウスクリーニング業で口コミを増やすには？",
    a: "サービス完了後にQRコードでGoogleマップの口コミURLへ誘導する・LINEでお礼メッセージと一緒に口コミ依頼を送る・定期利用客にも定期的に依頼するなどの方法が効果的です。口コミは清掃業者を選ぶ際の最も重要な判断基準の一つで、継続的な獲得フロー設計が競合差別化につながります。",
  },
  {
    q: "季節によって需要が変動する清掃業のWeb対策は？",
    a: "エアコンクリーニングは春〜初夏（4〜5月）、大掃除は秋〜冬（11〜12月）など需要期の2〜3か月前からSEOコンテンツの準備・MEO強化・SNS告知を始めることが重要です。オフシーズンには「引越し後クリーニング」「定期清掃プラン」などの需要を取り込むコンテンツも整備します。",
  },
  {
    q: "清掃業のリピート顧客を増やすデジタル施策は？",
    a: "LINE公式アカウントで定期クリーニングのリマインダー送信・季節ごとのキャンペーン告知・ポイント制度の案内などが効果的です。「エアコンクリーニングから3か月後に浴室クリーニングのご案内」など、サービス別のリマインドを設計することで一度の利用から定期契約へ転換できます。",
  },
  {
    q: "ハウスクリーニング業者の差別化はどうすればいいですか？",
    a: "「使用洗剤の安全性（子供・ペットに安心）」「女性スタッフ対応」「完全個別対応」「作業保証」など、大手チェーンが対応しきれない付加価値をホームページとGBPで明示します。料金の透明性と合わせて、地域密着業者だからこそできる細やかなサービスを前面に出すことが差別化の鍵です。",
  },
  {
    q: "清掃業のホームページはどのように集客に活用できますか？",
    a: "「エアコンクリーニング 費用 ○○区」「ハウスクリーニング 引越し ○○市」などの地域+サービス名で検索上位を狙うコンテンツを整備します。料金表・作業前後写真・お客様の声を充実させることで問い合わせ率が向上します。サービス別のランディングページ設計も効果的です。",
  },
  {
    q: "法人向け（オフィス・店舗清掃）の集客に違いはありますか？",
    a: "法人向けは「継続契約」が主な目的のため、実績・対応可能な施設規模・資格（建築物環境衛生管理技術者等）・セキュリティ対応をホームページで明示します。「オフィス清掃 ○○区 業者」「定期清掃 契約」を含むSEOコンテンツが有効で、法人向け問い合わせフォームは別途設置することをお勧めします。",
  },
  {
    q: "Google広告（リスティング広告）は清掃業に向いていますか？",
    a: "エアコンクリーニング・引越し後クリーニングなど需要のピーク期にGoogle広告を短期集中で活用する方法は効果的です。ただし広告費が継続的にかかるため、MEO・SEOで自然流入を育てながら広告は補助的に使うのが費用対効果の面で現実的です。繁忙期だけ広告を強化するメリハリある運用を推奨します。",
  },
  {
    q: "清掃業のビフォーアフター写真はSEOに効果がありますか？",
    a: "はい。施工前後の写真はユーザーの信頼獲得に直結するだけでなく、Google画像検索からの流入増加、GBPの評価向上にも貢献します。キッチン・浴室・エアコン・窓ガラスなど箇所別の事例をできるだけ多く掲載することを推奨します。画像のalt属性に「エアコンクリーニング ビフォーアフター ○○区」などのキーワードを含めるとSEO効果が高まります。",
  },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "清掃業向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "高CV率LPの制作" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "リピーター育成の仕組み化" },
  { href: "/industries/plumbing", label: "水道・設備工事業のWeb集客", desc: "設備系業者の集客" },
  { href: "/industries/renovation", label: "リフォーム会社のWeb集客", desc: "リフォーム業の集客支援" },
  { href: "/industries/construction", label: "建設・工務店のWeb集客", desc: "建設業の集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "清掃業のWeb集客相談" },
];

export default function CleaningIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "ハウスクリーニング・清掃業のWeb集客", "item": "https://www.cypress-all.co.jp/industries/cleaning" },
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
              <span style={{ color: "#0d1b2a" }}>ハウスクリーニング・清掃業</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Cleaning Service
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              ハウスクリーニング・清掃業の<br />MEO対策・Web集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              ハウスクリーニング・エアコンクリーニング・清掃業のWeb集客は、地域検索での見つかりやすさ・料金の透明性・施工実績の見せ方が鍵です。「○○区 ハウスクリーニング」「エアコン掃除 ○○市」で検索したユーザーに選ばれる仕組みを構築します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              清掃業者は横並びに見えやすく、ユーザーは価格と口コミで判断する傾向があります。MEOでGoogleマップ上位に表示されながら、ビフォーアフター写真・料金の明示・口コミの充実でクリック後の問い合わせ率を高める「二段構え」の集客設計が重要です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              一般家庭向けハウスクリーニングだけでなく、エアコンクリーニング・浴室・キッチン・換気扇・法人向けオフィス清掃・店舗清掃・引越し後クリーニングなど、多様な清掃サービスの集客に対応しています。
            </p>
          </div>
        </section>

        {/* Full-width image band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/hero.png"
            alt="プロのハウスクリーニングスタッフが清掃作業を行う様子 — ハウスクリーニング・清掃業のMEO・SEO対策"
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
              ハウスクリーニング業が抱える集客課題
            </h2>
            <div style={{ display: "grid", gap: "1px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", background: "rgba(196,184,154,0.2)" }}>
              {[
                {
                  n: "01",
                  t: "料金が不明で問い合わせを逃している",
                  b: "「見積もりしないと料金がわからない」という状態は、ユーザーが問い合わせをためらう最大の障壁です。㎡・箇所別の料金目安をホームページとGBPに掲載するだけで問い合わせ率が改善されます。",
                },
                {
                  n: "02",
                  t: "価格だけで比較され差別化できていない",
                  b: "清掃業は価格比較されやすい業種です。「使用洗剤の安全性」「女性スタッフ対応」「作業保証」「ペット・子供への配慮」など付加価値をホームページとGBPで明確に伝えることで、価格以外の軸での選択を促せます。",
                },
                {
                  n: "03",
                  t: "季節波動が激しく年間受注が不安定",
                  b: "エアコンクリーニング（春〜夏）・年末大掃除（冬）は繁忙期ですが、オフシーズンは依頼が減りがちです。引越しクリーニング・定期契約のコンテンツ整備とLINEリマインド配信で年間受注を平準化できます。",
                },
                {
                  n: "04",
                  t: "一度きりで終わりリピーターが定着しない",
                  b: "ハウスクリーニングは単発になりやすいサービスです。LINE公式アカウントへの誘導・定期クリーニングプランの提案・季節キャンペーン配信で、単発利用を定期契約へ転換する仕組みが必要です。",
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
              清掃業のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOで地域の清掃需要を即捕捉", b: "「○○市 ハウスクリーニング」「○○区 エアコン掃除 業者」での地域検索でGoogleマップ上位に表示されることが集客の第一歩です。サービス区分・対応エリア・料金目安・ビフォーアフター写真を明記します。" },
                { n: "02", t: "料金の透明性でCVを高める", b: "「料金が不明なサービスは問い合わせにくい」というユーザー心理に対応し、場所別・㎡別の料金目安をわかりやすく掲載します。透明な料金提示が信頼と問い合わせ率を同時に高めます。" },
                { n: "03", t: "施工前後の写真で効果を視覚的に証明", b: "清掃前と清掃後のビフォーアフター写真はサービスの効果を最も直感的に伝えられるコンテンツです。キッチン・浴室・エアコンなど箇所別の事例を充実させてユーザーの決断を後押しします。" },
                { n: "04", t: "季節に合わせたSEO・MEO対策", b: "エアコンクリーニング（春〜初夏）・大掃除（秋〜冬）などの需要期に合わせて、2〜3か月前からSEOコンテンツの準備・MEO強化・SNS告知を実施します。シーズン前に検索上位を確保することが受注増の鍵です。" },
                { n: "05", t: "口コミ管理で信頼と検索順位を高める", b: "サービス完了後に口コミ依頼のフロー（QRコード・LINE送信）を整備します。清掃業は口コミが選択の決め手になりやすいため、継続的な口コミ獲得と全件返信が重要です。" },
                { n: "06", t: "LINE公式アカウントで定期契約を促進", b: "LINE公式アカウントで定期クリーニングのリマインダー・季節キャンペーン告知を配信します。一度の利用から3か月・6か月ごとの定期契約への転換を促すデジタル動線を構築します。" },
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
              清掃業のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                清掃業のSEO対策では、地域名+サービス名のキーワード設計が最重要です。主要キーワード例：「葛飾区 ハウスクリーニング」「亀有 エアコンクリーニング」「金町 浴室清掃 業者」「葛飾区 引越し ハウスクリーニング」。これらの地域密着キーワードでGoogleマップ上位表示と自社サイトの検索上位を同時に目指します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                季節性キーワードも重要です。「エアコンクリーニング 時期 葛飾区」「年末大掃除 業者 ○○市」「エアコン 掃除 費用 ○○区」など、需要期の2〜3か月前から検索上位を確保するコンテンツを準備します。サービス別のランディングページ（エアコンクリーニング専用・浴室クリーニング専用など）を作成することで、複数のキーワードで流入を獲得できます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LocalBusiness SchemaとService Schemaを実装することで、Googleの検索結果に営業時間・サービス・口コミ評価が表示されやすくなります。BreadcrumbList・FAQPage Schemaも実装し、検索結果でのリッチスニペット表示を促進します。
              </p>
            </div>
          </div>
        </section>

        {/* Googleマップ・MEO活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              清掃業のGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                清掃業のGBP（Googleビジネスプロフィール）では「サービス区分」の詳細入力が特に重要です。エアコンクリーニング・キッチン清掃・浴室クリーニング・換気扇掃除・窓ガラス清掃など、メニュー別にサービスを登録することで、検索ユーザーのニーズに合致した表示がされやすくなります。対応エリア・料金目安・使用洗剤の安全性も明記します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                ビフォーアフター写真のGBP投稿は、ユーザーの検索から問い合わせへの転換に強く影響します。施工前後の写真・スタッフの作業中の写真・使用機材の写真を定期的に投稿します。口コミへの全件返信は検索順位向上にも効果があり、「○○様、エアコンクリーニングをご依頼いただきありがとうございました」という形で誠実な返信を継続します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBP投稿（週2回）では、季節に合わせたキャンペーン情報・新しい施工事例・サービスの特徴を発信します。「夏前のエアコンクリーニング早割キャンペーン」「年末大掃除プラン受付開始」など、ユーザーのニーズに寄り添った投稿がクリック率向上につながります。
              </p>
            </div>
          </div>
        </section>

        {/* サービス展開 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Sub Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              清掃業の種別ごとの集客アプローチ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                一般家庭向けのハウスクリーニングと法人向けの施設清掃では、集客アプローチが異なります。家庭向けは「今すぐ清掃したい」という即時ニーズへの対応がMEO・LPで重要なのに対し、法人向けは「信頼性・継続性・対応実績」を重視した情報設計が必要です。
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                {[
                  { t: "一般家庭向けハウスクリーニング", b: "「引越し後のハウスクリーニング」「定期清掃プラン」「入居前クリーニング」はそれぞれ別のランディングページで訴求します。ビフォーアフター写真・料金目安・作業時間目安を明記し、LINEや電話で即問い合わせできる導線を整備します。" },
                  { t: "エアコンクリーニング専門集客", b: "シーズン前（3〜5月）の需要急増期に向け、「エアコン洗浄の効果・必要性」の啓発コンテンツと「○○区 エアコンクリーニング 業者比較」系のキーワードを組み合わせ、シーズン前からの流入獲得と予約受付を促進します。" },
                  { t: "法人・施設清掃（オフィス・店舗）", b: "資格保有（建築物環境衛生管理技術者等）・実績規模・セキュリティへの配慮・定期清掃の契約実績をホームページで明示します。「オフィス清掃 定期契約 ○○区」系キーワードのSEOコンテンツと法人向け問い合わせフォームで商談機会を創出します。" },
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
              清掃業向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "MEO対策・GBP最適化", b: "「○○区 ハウスクリーニング」「エアコン掃除 ○○市」でGoogleマップ上位表示を実現します。写真充実・口コミ獲得フロー設計・GBP投稿の継続運用で地域の清掃需要を確実に捕捉します。" },
                { t: "清掃業向けホームページ・LP制作", b: "ビフォーアフター写真・料金表・対応エリア・口コミを最適配置した集客型サイトを制作します。エアコンクリーニング専用LP・年末大掃除専用LPなどサービス別ページも対応します。" },
                { t: "季節SEO・コンテンツ対策", b: "「エアコン掃除 時期 ○○区」「引越し後 ハウスクリーニング 費用」などの需要期キーワードを狙ったSEOコンテンツを計画的に整備します。繁忙期前からの自然検索流入獲得を目指します。" },
                { t: "LINE公式アカウント活用支援", b: "定期クリーニングのリマインダー配信・季節キャンペーン告知・口コミ獲得メッセージの自動送信を設計します。単発利用から定期契約へ転換するデジタル導線を構築します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ハウスクリーニング・清掃業のWeb集客に関するよくある質問" bgColor="#f9f8f5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="清掃業のWeb集客ご相談"
          body="ハウスクリーニング・エアコンクリーニング・清掃会社のMEO・SEO・ホームページ制作をご相談ください。定期受注増加に向けた集客の仕組みを設計します。"
        />
      </main>
      <Footer />
    </>
  );
}
