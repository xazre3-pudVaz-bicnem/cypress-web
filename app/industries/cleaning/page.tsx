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
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
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
  {
    q: "引越し需要に対応したSEO季節戦略を教えてください。",
    a: "引越しシーズン（2〜4月・9〜10月）の1〜2か月前から「引越し前 ハウスクリーニング ○○区」「退去前 清掃 費用」などのキーワードを中心にコンテンツを強化します。賃貸退去・入居前クリーニングはまとまった金額の受注になりやすく、年2回の需要ピークを逃さない事前準備が売上に直結します。",
  },
  {
    q: "「エアコンクリーニング」など単品サービスのキーワード戦略は？",
    a: "エアコンクリーニング・浴室クリーニング・キッチンクリーニングなど単品サービスごとに専用ページを作成し、それぞれのページで「○○区 エアコンクリーニング 費用」「エアコン 内部洗浄 料金」などのキーワードを狙います。単品ページは検索意図が明確なユーザーのCV率が高く、MEOのサービス欄にも個別登録することで相乗効果が得られます。",
  },
  {
    q: "価格競争を避けた集客戦略はありますか？",
    a: "「安さ」で勝負せず、使用洗剤の安全性・作業保証・スタッフの研修制度・対応の丁寧さを前面に打ち出すことが有効です。ホームページに「なぜ当社を選ぶのか」を具体的に説明するセクションを設け、口コミ・実績で価値を証明します。「安い業者」ではなく「信頼できる業者」というポジショニングが単価と定期率を同時に高めます。",
  },
  {
    q: "清掃業のGoogleビジネスプロフィール写真はどう撮ればいいですか？",
    a: "作業前後の比較写真・スタッフが丁寧に作業している写真・使用する洗剤・機材・道具が揃った写真・ユニフォームを着たスタッフ集合写真が効果的です。スマートフォンで撮影する場合は明るい場所・整理された背景で撮ることが重要で、月2〜4枚のペースで新しい写真を追加し続けることがGBPの評価維持につながります。",
  },
  {
    q: "定期契約につなげるデジタル導線はどう設計しますか？",
    a: "LINE公式アカウントへの誘導をサービス完了時に設けることが最初のステップです。登録後は「3か月後のエアコンフィルター点検のご案内」「年末に向けた大掃除プランのご紹介」など、サービス完了日を起点にしたステップ配信を設定します。定期プランの料金・メリットを分かりやすく提示したLPへのリンクを配信に含めることで、定期契約への転換率が高まります。",
  },
  {
    q: "清掃業のSNS（Instagram・TikTok）活用は効果がありますか？",
    a: "ビフォーアフター動画・清掃のコツを紹介するショート動画は視聴完了率が高くバズりやすいコンテンツです。特にTikTokやInstagramリールでの「エアコン内部の汚れを取る瞬間」のような動画は拡散性があり、認知拡大・フォロワー増加・指名検索の増加につながります。ただしSNSから直接受注につながるまでには時間がかかるため、MEO・ホームページと並行して運用します。",
  },
  {
    q: "女性オーナーや女性スタッフがいる場合、どうアピールすればいいですか？",
    a: "「女性スタッフ在籍」「女性への清掃訪問が安心」という安心感はホームページのファーストビューとGBPプロフィールに明記します。一人暮らしの女性・小さな子供がいる家庭への訴求力が高く、「女性スタッフ ハウスクリーニング ○○区」のキーワードで差別化した集客が可能です。スタッフ紹介ページに顔写真と一言コメントを載せることで親しみやすさも演出できます。",
  },
  {
    q: "清掃業のWeb集客にかかる費用の目安を教えてください。",
    a: "ホームページ制作・MEO対策・SEOコンテンツ整備を組み合わせた初期費用と月次運用費用の構成が一般的です。具体的な費用はサイト規模・対応エリア・競合状況によって異なります。まずは無料相談でお客様の状況を確認したうえで、最適なプランをご提案します。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "清掃業向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "高CV率LPの制作" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "リピーター育成の仕組み化" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/industries/plumbing", label: "水道・設備工事業のWeb集客", desc: "設備系業者の集客" },
  { href: "/industries/renovation", label: "リフォーム会社のWeb集客", desc: "リフォーム業の集客支援" },
  { href: "/industries/construction", label: "建設・工務店のWeb集客", desc: "建設業の集客支援" },
  { href: "/knowledge/local-seo-basics", label: "ローカルSEOの基礎知識", desc: "地域SEOの基本を学ぶ" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/knowledge/gbp-photo-guide", label: "GBP写真の撮り方ガイド", desc: "Googleビジネスプロフィール写真の最適化" },
  { href: "/seo/content-seo", label: "コンテンツSEO対策", desc: "コンテンツで検索上位を目指す" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO対策の費用相場" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
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

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              清掃業の集客フロー・実装ステップ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "現状調査・競合分析",
                  b: "対象エリアの競合清掃業者のGBP・ホームページ・口コミ状況を調査します。狙うべきキーワードと現在の自社の表示順位を把握し、優先対応すべき施策を整理します。",
                },
                {
                  n: "02",
                  t: "Googleビジネスプロフィールの完全整備",
                  b: "カテゴリ設定・サービス一覧・料金目安・対応エリア・営業時間・写真（施工前後・スタッフ・機材）を全項目入力します。GBPが充実していない状態では競合との差が広がる一方です。",
                },
                {
                  n: "03",
                  t: "口コミ獲得フローの設計・運用開始",
                  b: "サービス完了後のお礼メッセージとセットにGoogleマップ口コミURLのQRコード・LINEショートリンクを渡す仕組みを整備します。毎月継続することで口コミ件数が積み上がり、MEO順位の向上につながります。",
                },
                {
                  n: "04",
                  t: "ホームページ・LPの集客設計と制作",
                  b: "料金表・ビフォーアフター写真・対応エリア・お客様の声・問い合わせフォームを最適配置した集客型サイトを制作します。エアコンクリーニング専用LP・引越しクリーニング専用LPなど、サービス別ページを設計します。",
                },
                {
                  n: "05",
                  t: "サービス別SEOキーワード設計",
                  b: "「葛飾区 エアコンクリーニング」「亀有 浴室クリーニング 料金」など、サービス×地域×検索意図のキーワードマップを作成します。優先度と検索ボリュームに基づいてコンテンツ制作の順序を決定します。",
                },
                {
                  n: "06",
                  t: "季節SEOコンテンツの事前準備",
                  b: "エアコンシーズン（3〜5月）・年末大掃除（10〜12月）・引越しシーズン（2〜4月）の2〜3か月前からコンテンツを公開します。検索順位が上がるまでのリードタイムを逆算した計画的な準備が受注増の鍵です。",
                },
                {
                  n: "07",
                  t: "LINE公式アカウントの構築と自動配信設定",
                  b: "友だち追加のQRコードをサービス完了後に渡す動線を整備します。サービス完了日から3か月・6か月後の自動リマインド配信・季節キャンペーン一斉配信を設定し、定期契約への転換を促します。",
                },
                {
                  n: "08",
                  t: "GBP定期投稿・写真追加の継続運用",
                  b: "週2回のGBP投稿（施工事例・キャンペーン・季節情報）と月4〜8枚の写真追加を継続します。更新頻度の高いGBPはGoogleから「活発な事業者」として評価され、MEO順位の維持・向上に貢献します。",
                },
                {
                  n: "09",
                  t: "Schema.org構造化データの実装",
                  b: "LocalBusiness・Service・FAQPage Schemaを実装し、検索結果でのリッチスニペット表示を促進します。営業時間・評価・サービス内容が検索結果に直接表示されることでクリック率が向上します。",
                },
                {
                  n: "10",
                  t: "効果測定・改善サイクルの確立",
                  b: "Googleアナリティクス・Search Console・GBPインサイトを月次で確認し、流入数・問い合わせ数・口コミ件数の推移を追います。データに基づいて投資対効果の高い施策に集中し、継続改善を行います。",
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "40px" }}>
              清掃業のWeb集客では、施策ごとに適切な指標を設定して効果を継続的に計測します。数値で状況を把握することで、投資対効果の高い施策への集中と改善サイクルが確立できます。
            </p>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column" }}>
              {[
                {
                  kpi: "GBP検索表示回数",
                  where: "GBPインサイト",
                  desc: "「○○区 ハウスクリーニング」など地域キーワードで自社GBPが表示された回数を計測し、MEO施策の効果を確認します。",
                },
                {
                  kpi: "GBPからの問い合わせ件数（電話・ウェブサイトクリック）",
                  where: "GBPインサイト",
                  desc: "Googleマップ上の電話タップ数とウェブサイトへのクリック数を追うことで、MEO対策が直接の集客につながっているかを把握します。",
                },
                {
                  kpi: "Googleマップの口コミ件数・評点",
                  where: "GBPインサイト・Googleマップ",
                  desc: "月間の新規口コミ件数と総合評点の推移を管理し、口コミ獲得フローの効果と信頼性指標として継続的に改善します。",
                },
                {
                  kpi: "ホームページからの問い合わせ・フォーム送信数",
                  where: "Googleアナリティクス（コンバージョン）",
                  desc: "サービス別LPや料金ページからの問い合わせフォーム送信数を計測し、ページ別のCV率を把握してコンテンツ改善に活かします。",
                },
                {
                  kpi: "オーガニック検索流入数",
                  where: "Google Search Console",
                  desc: "SEOコンテンツからの自然検索流入を月次でモニタリングし、季節キーワードのコンテンツが需要期前に順位を上げているかを確認します。",
                },
                {
                  kpi: "LINEの友だち追加数・ブロック率",
                  where: "LINE公式アカウント管理画面",
                  desc: "月間の友だち追加数とブロック率の推移を追い、定期配信の内容・頻度を最適化して定期契約への転換率を高めます。",
                },
                {
                  kpi: "定期契約転換率",
                  where: "自社管理台帳・CRM",
                  desc: "単発利用から定期契約に移行した顧客の割合を記録し、LINEリマインド・定期プラン提案の効果を測定してリピート戦略を改善します。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, minWidth: "8px", marginTop: "8px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c4b89a" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.1em", color: "#c4b89a", marginBottom: "8px" }}>計測場所：{item.where}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
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
                  t: "清掃業の集客課題を深く理解した設計",
                  b: "季節波動・単発リピート問題・価格競争・料金透明化など、ハウスクリーニング業特有の集客課題を熟知しています。業種の特性に合わせた施策の優先順位と設計で、無駄のない集客改善を実現します。",
                },
                {
                  t: "MEO・SEO・LP・LINEを一貫して設計",
                  b: "Googleマップ対策・ホームページ・SEOコンテンツ・LINE公式アカウントをバラバラに依頼すると一貫性が失われます。サイプレスはすべての施策を統合した集客設計で、ユーザーが検索から問い合わせ・定期契約まで迷わず進める導線を構築します。",
                },
                {
                  t: "東京・葛飾区エリアの地域SEOに強い",
                  b: "葛飾区・足立区・江戸川区・墨田区など東京東部エリアの地域キーワード特性・競合状況を把握しています。「亀有 エアコンクリーニング」「金町 ハウスクリーニング」など地域密着キーワードでの上位表示に向けた施策を設計します。",
                },
                {
                  t: "継続的な改善と定量的な成果報告",
                  b: "施策を実施して終わりではなく、GBPインサイト・Search Console・アナリティクスのデータを月次でレポートし、継続的な改善を行います。数値に基づいた運用改善で、集客コストを下げながら問い合わせ数を積み上げます。",
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
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              清掃業向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "MEO対策・GBP最適化", b: "「○○区 ハウスクリーニング」「エアコン掃除 ○○市」でGoogleマップ上位表示を実現します。写真充実・口コミ獲得フロー設計・GBP投稿の継続運用で地域の清掃需要を確実に捕捉します。" },
                { t: "清掃業向けホームページ・LP制作", b: "ビフォーアフター写真・料金表・対応エリア・口コミを最適配置した集客型サイトを制作します。エアコンクリーニング専用LP・年末大掃除専用LPなどサービス別ページも対応します。" },
                { t: "季節SEO・コンテンツ対策", b: "「エアコン掃除 時期 ○○区」「引越し後 ハウスクリーニング 費用」などの需要期キーワードを狙ったSEOコンテンツを計画的に整備します。繁忙期前からの自然検索流入獲得を目指します。" },
                { t: "LINE公式アカウント活用支援", b: "定期クリーニングのリマインダー配信・季節キャンペーン告知・口コミ獲得メッセージの自動送信を設計します。単発利用から定期契約へ転換するデジタル導線を構築します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
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
