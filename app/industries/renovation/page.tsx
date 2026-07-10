import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "リフォーム会社・工務店のWeb集客｜MEO・SEO・施工事例サイト制作｜株式会社サイプレス",
  description: "リフォーム会社・工務店向けWeb集客支援。Googleマップ上位表示（MEO）・SEO対策・施工事例サイト制作で無料見積もり依頼を増やします。東京都内・全国対応。",
  keywords: ["リフォーム MEO対策", "工務店 集客", "リフォーム会社 SEO", "リフォーム Googleマップ", "工務店 ホームページ"],
  openGraph: {
    title: "リフォーム会社・工務店のWeb集客｜MEO・SEO・施工事例サイト制作｜株式会社サイプレス",
    description: "リフォーム会社・工務店のWeb集客。MEO・SEO・ホームページで見積もり依頼と受注を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/renovation" },
};

const faqItems = [
  {
    q: "リフォーム会社はMEOとSEOどちらが優先ですか？",
    a: "「地域名＋リフォーム」での検索はGoogleマップが先に表示されることが多いため、MEO優先で始めることを推奨します。SEOは施工事例記事・費用ガイドで長期的な流入を獲得するため、並行して進めることで相乗効果が生まれます。",
  },
  {
    q: "リフォーム会社のホームページで一番重要なコンテンツは何ですか？",
    a: "施工事例（ビフォーアフター写真・費用・工期・お客様の声）が最も重要です。施工の質と信頼性を視覚的に証明できる唯一のコンテンツです。「キッチンリフォーム 費用 60万円台 葛飾区」など地域と費用を含む具体的な事例ページは検索流入にもなります。",
  },
  {
    q: "リフォームの見積もり依頼はどうやって増やせますか？",
    a: "「まずは無料で見積もりを」というCTAを目立たせ、問い合わせの手軽さを演出することが重要です。LINE・電話・フォームの3経路を用意し、24時間受け付け可能なフォームの設置、問い合わせ後のお礼メール自動返信など、ユーザーの不安を取り除く仕掛けが見積もり依頼数を増やします。",
  },
  {
    q: "リフォームのGoogleマップ集客で口コミはどう増やしますか？",
    a: "工事完了後のアフターフォロー連絡（工事のお礼・確認の電話やメール）のタイミングに口コミリンクを送ることが最も効果的です。満足度の高い施主様にタイミング良く依頼することで、口コミ件数と評価点が安定して積み上がります。",
  },
  {
    q: "工務店・リフォーム会社のSEO対策はどんな記事が集客に効果的ですか？",
    a: "「キッチンリフォーム 費用 相場」「お風呂リフォーム 期間」「外壁塗装 葛飾区 業者選び」など、費用・期間・業者選びに関する検索に対応したコンテンツが有効です。地域名を含む記事は地元客の検索に直接応えられます。",
  },
  {
    q: "リフォーム会社のSNS活用は効果がありますか？",
    a: "InstagramやYouTubeでの施工事例・ビフォーアフター動画は認知拡大に有効ですが、リフォームは検討期間が長くSNSが直接受注につながりにくい面もあります。まずはMEO・ホームページ・施工事例ページを整備したうえで、補足としてSNSを活用するのが現実的です。",
  },
  {
    q: "リフォーム会社と大手ハウスメーカーのリフォーム部門に対してどう差別化できますか？",
    a: "地元密着・迅速な現地見積もり・コミュニケーションの取りやすさ・適正価格が差別化ポイントです。Googleマップの口コミ・施工事例で「地元で丁寧に対応してくれる会社」という信頼を積み上げることで、大手に対してもWeb集客で勝てます。",
  },
  {
    q: "リフォームのWeb集客に投資した場合、どのくらいで費用回収できますか？",
    a: "リフォーム1件の単価は数十万〜数百万円のため、Web集客への投資回収が早い業種です。MEO対策（月額2〜4万円）で月1件の見積もり依頼が増え、成約すれば投資額を大幅に上回る収益になります。具体的な収益試算を含めてご相談ください。",
  },
  {
    q: "施工事例ページはSEOにどう効果がありますか？",
    a: "「キッチンリフォーム 費用 60万円台 葛飾区」「洗面所 リフォーム 工期 3日間 ○○市」のように費用・工期・地域を含む施工事例ページは、検索意図に完全に一致する独自コンテンツです。事例ページが蓄積するほど検索流入が増え、見積もり依頼の経路が増えます。",
  },
  {
    q: "工務店がホームページで信頼性を高めるために何を掲載すべきですか？",
    a: "代表・スタッフの顔写真と経歴・保有資格（建築士・施工管理技士等）・施工事例のビフォーアフター・お客様の声・会社の歴史・施工保証の内容が有効です。「人」と「実績」を見せることで、大手には出せない地域密着業者の温かみと信頼を伝えられます。",
  },
  {
    q: "リフォーム会社のSEOキーワードはどう選定すればいいですか？",
    a: "工事種類×地域×フェーズの3軸で選定します。「キッチン リフォーム 費用 葛飾区」「外壁塗装 見積もり 東京」のように工事種別と地域を掛け合わせたキーワードが、検索意図が明確で成約率の高い流入につながります。費用・工期・業者選びという検索意図別にページを設計することで網羅的に集客できます。",
  },
  {
    q: "リフォームの見積もりフォームはどう最適化すべきですか？",
    a: "入力項目は「名前・電話番号・メール・工事の種類・ご要望（任意）」の5項目以内に絞ることを推奨します。「まず相談だけでも大丈夫です」という文言を添えることで、詳細が決まっていない段階でも問い合わせてもらいやすくなります。スマートフォンでの入力しやすさと、送信後の自動返信メールも必須です。",
  },
  {
    q: "Googleマップで「リフォーム」検索に上位表示されるには何が必要ですか？",
    a: "Googleビジネスプロフィール（GBP）のカテゴリを「リフォーム業者」「工務店」などに正しく設定し、施工写真・サービス内容・営業時間を充実させることが基本です。口コミの件数と評価点の向上、定期的なGBP投稿の継続が上位表示の安定につながります。地域名を含む投稿を継続することも有効です。",
  },
  {
    q: "リフォームのビフォーアフター写真はSEOにどう貢献しますか？",
    a: "ビフォーアフター写真を施工事例ページに掲載することで、ページの独自性と滞在時間が向上し、Googleからの評価が高まります。また、画像ファイル名やaltテキストに「キッチンリフォーム 葛飾区 ビフォーアフター」などのキーワードを含めることで、Google画像検索からの流入も発生します。視覚的な証拠があるページは離脱率が低く、問い合わせへの転換率も高まります。",
  },
  {
    q: "「〇〇区 キッチンリフォーム」などの地域×工事種SEOはどう攻略しますか？",
    a: "地域名と工事種別を組み合わせたキーワードは、実際に施工を依頼しようとしている購買意欲の高いユーザーが検索します。「葛飾区 キッチンリフォーム」「東京 外壁塗装 費用」などに対応する施工事例ページと地域特化ページをそれぞれ作成し、地域名・工事内容・費用・施工実績をページ内に明示することで、競合が少ないロングテールキーワードでの検索上位を狙えます。",
  },
  {
    q: "リフォームのYouTube施工動画は集客に活用できますか？",
    a: "「キッチンリフォーム 施工動画」「外壁塗装 工程 解説」などは一定の検索需要があり、動画は信頼性の補強に効果的です。撮影した動画をホームページの施工事例ページに埋め込むと滞在時間が延び、SEO評価の向上にもつながります。優先度はMEO・ホームページ・施工事例ページの整備後になりますが、スマートフォンで撮影した簡易な動画でも定期配信することで長期的な認知拡大が期待できます。",
  },
  {
    q: "外壁塗装・屋根リフォーム専門のWeb集客での差別化方法は？",
    a: "外壁塗装・屋根リフォームは訪問販売業者が多く、消費者の不信感が高い分野です。Web上での差別化には「施工保証の年数と内容」「使用塗料のメーカー・品番の明示」「施工前後の劣化診断レポート写真」「資格（塗装技能士・外壁診断士）」の掲載が有効です。「外壁塗装 詐欺 見分け方」「屋根リフォーム 相場 適正価格」など不安解消系コンテンツの作成も信頼構築に効果的です。",
  },
  {
    q: "一括見積もりサイト（ホームプロ等）への依存から自社集客に移行するには？",
    a: "一括見積もりサイトは集客できる反面、手数料負担と価格競争が課題です。自社MEO対策（Googleマップ上位表示）と施工事例コンテンツのSEOを強化することで、手数料ゼロの直接問い合わせを増やせます。移行期間は比較サイトと並行しながら自社チャネルのKPIを追い、直接問い合わせ比率を段階的に高めていく戦略が現実的です。",
  },
  {
    q: "マンションリフォームと戸建てリフォームでSEO戦略は変わりますか？",
    a: "検索キーワードと検索意図が異なるため、ページを分けて設計することを推奨します。マンションリフォームは「管理組合への申請」「床材の防音対応」「間取り変更の制限」など集合住宅特有の課題に対応したコンテンツが有効です。戸建ては「増築」「断熱リフォーム」「屋根外壁」など外構・構造系のキーワードが強くなります。それぞれの施工事例ページも分けて制作すると検索流入が増えます。",
  },
  {
    q: "リフォームの口コミ獲得でお客様に気軽に書いてもらう工夫は？",
    a: "工事完了後2〜3日以内が口コミ依頼の最適タイミングです。LINEでGoogleマップのレビューリンクを直接送り、「30秒で投稿できます」「一言でも大丈夫です」という文言を添えることで心理的ハードルを下げられます。QRコードを印刷したサンキューカードを手渡しするのも効果的です。投稿してくれた方への感謝の返信も忘れずに行うことで、次の施主への信頼感が高まります。",
  },
  {
    q: "建設業許可番号・リフォーム瑕疵保険加入はWebでどう活用すべきですか？",
    a: "建設業許可番号はホームページのフッター・会社概要ページに必ず掲載し、「有資格業者」としての信頼性を示します。リフォーム瑕疵保険（住宅瑕疵担保責任保険）の加入は、施工後の保証に不安を持つ施主への最大の安心材料です。「リフォーム 保証 葛飾区」「工務店 瑕疵保険 加入」などのキーワードで検索する慎重な施主を獲得するためのコンテンツとしても活用できます。",
  },
  {
    q: "地域密着型リフォーム会社とチェーン店はWeb集客でどう差別化すべきですか？",
    a: "チェーン店が出せない「地域の顔が見える安心感」を前面に出すことが差別化の核心です。代表者の顔写真・地元での施工実績・近隣のお客様の声・地域に密着した工事対応力をGBPとホームページで表現します。「葛飾区で〇年、地元の住宅を守ってきた」というストーリーはチェーン店には真似できない強みです。",
  },
  {
    q: "リフォームの助成金・補助金情報をWebサイトに掲載すると効果がありますか？",
    a: "「リフォーム 補助金 東京」「断熱リフォーム 助成金 葛飾区」は検索ボリュームがあり、費用を抑えたい施主の強い関心を引きます。補助金情報の掲載は検索流入の獲得だけでなく「お客様の利益を考えてくれる会社」という信頼感の醸成にも効果的です。最新の補助金情報に定期的に更新することで鮮度を保つ必要があります。",
  },
  {
    q: "Webサイト制作からMEO・SEOまで一括依頼できますか？",
    a: "はい、サイプレスではホームページ制作・MEO対策・SEO対策・コンテンツ制作をワンストップで対応しています。別々の会社に依頼すると戦略の一貫性が失われますが、一括依頼することでMEO・SEO・ホームページが連携した集客体制を構築できます。まずはご相談ください。",
  },
];

const relatedLinks = [
  { href: "/cases/industry/construction", label: "建設・リフォームの成功事例", desc: "リフォーム会社のWeb集客成功事例" },
  { href: "/industries/renovation/meo", label: "リフォーム会社のMEO対策", desc: "Googleマップ上位表示で見積もり依頼増加" },
  { href: "/industries/renovation/seo", label: "リフォーム会社のSEO対策", desc: "施工事例・費用記事で長期集客" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス詳細", desc: "SEO施策の詳細ページ" },
  { href: "/web-design/corporate-site", label: "企業サイト制作", desc: "リフォーム会社向け企業サイト" },
  { href: "/seo/content-seo", label: "コンテンツSEO対策", desc: "施工事例・ガイド記事で長期集客" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域密着SEOの手法" },
  { href: "/cost/seo", label: "SEO費用・料金", desc: "SEO対策の費用目安" },
  { href: "/area/tokyo", label: "東京都のWeb集客支援", desc: "東京エリア対応" },
  { href: "/area/katsushika", label: "葛飾区のWeb集客支援", desc: "葛飾区エリア対応" },
  { href: "/industries/construction", label: "建設業・工務店のWeb集客", desc: "建設業の集客支援" },
  { href: "/industries/plumbing", label: "水道・設備工事業のWeb集客", desc: "設備工事の集客支援" },
  { href: "/knowledge/content-seo", label: "コンテンツSEOガイド", desc: "コンテンツ戦略の実践手法" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEO完全ガイド", desc: "地域密着SEOの進め方" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "リフォーム会社向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "見積もり依頼特化型LP" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/knowledge/content-marketing", label: "コンテンツマーケティング", desc: "コンテンツ戦略の基礎" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/contact", label: "無料相談", desc: "リフォーム・工務店のWeb集客相談" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function RenovationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>リフォーム・工務店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Renovation</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              リフォーム会社・工務店のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              リフォームの問い合わせはGoogleマップとGoogle検索の両方から発生します。「〇〇区 リフォーム会社」「キッチンリフォーム 費用 相場」など、地域検索と費用検索の両方を捕捉するMEO＋SEOの二軸で、見積もり依頼を継続的に獲得します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              施工事例コンテンツとGoogleマップの口コミが積み上がることで、大手ハウスメーカーのリフォーム部門に対しても地元業者としての信頼を確立できます。省エネ・断熱リフォームへの助成金需要も追い風に、Web集客の重要性はリフォーム業界でさらに高まっています。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              株式会社サイプレスでは葛飾区を拠点に、東京都内のリフォーム会社・工務店のMEO対策・SEO対策・ホームページ制作を一括してサポートしています。まずは現在のGoogleマップの状況と競合との比較を無料で分析します。
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#ffffff", padding: "12px 32px", fontSize: "13px", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-serif)" }}>
                無料診断を依頼する →
              </Link>
            </div>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月19日 09_10_08 (4).jpg" alt="リフォーム会社のホームページ制作と集客設計イメージ" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              リフォーム会社・工務店向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/renovation/meo",
                  label: "リフォーム会社のMEO対策",
                  desc: "「〇〇区 リフォーム」「近くの工務店」でGoogleマップ上位表示を実現。無料見積もり依頼を直接獲得します。",
                },
                {
                  href: "/services/web-design",
                  label: "リフォーム会社向けホームページ制作",
                  desc: "施工事例・費用表・お客様の声・見積もりフォームを備えた受注につながるサイトを制作します。",
                },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "28px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "12px" }}>詳細を見る →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why It Works</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              リフォーム会社集客でMEO＋SEOが効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "リフォームは高単価のため集客投資の回収が早い",
                  b: "1件のリフォーム工事は数十万〜数百万円の単価のため、月1〜2件の見積もり依頼増加でMEO・SEO投資額を大幅に上回る収益が得られます。費用対効果が高い業種です。",
                },
                {
                  n: "02",
                  t: "施工事例がそのまま集客コンテンツになる",
                  b: "「キッチンリフォーム 費用 60万円台」「洗面所 改装 葛飾区」などの施工事例ページが検索流入を生みます。施工写真があるだけで他社との差別化になるコンテンツ資産です。",
                },
                {
                  n: "03",
                  t: "口コミが購入前の信頼判断基準になる",
                  b: "リフォームは人生の大きな投資のため、施主はGoogleマップの口コミを念入りに確認します。「丁寧な施工」「説明が明確」「アフターフォローが良い」という口コミが直接受注に結びつきます。",
                },
                {
                  n: "04",
                  t: "地域名キーワードで競合が少ない",
                  b: "「葛飾区 キッチンリフォーム」のような地域+施工種別のキーワードは、全国系のリフォーム比較サイトでは対応しきれない細かいニーズです。地域密着業者が最も有利に検索上位を狙えます。",
                },
                {
                  n: "05",
                  t: "補助金・断熱リフォーム需要が拡大している",
                  b: "省エネリフォーム補助金・子育てエコホーム支援事業など国や自治体の補助制度が充実し、リフォーム検討者の裾野が広がっています。補助金情報を活用した集客コンテンツは、費用に敏感な施主層へのアプローチとして特に効果的です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO戦略 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>SEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
              リフォーム会社のSEOキーワード戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                リフォームのSEOは「工事種別×地域×検索フェーズ」の3軸で設計します。「キッチンリフォーム 費用 葛飾区」「外壁塗装 業者 東京 選び方」「お風呂リフォーム 工期 何日」など、施主が工事を検討しているフェーズに対応したページを個別に制作することが、高い成約率の流入を生むコツです。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                施工事例ページは1ページ1事例の形式で積み上げると、各工事種別・地域のロングテールキーワードに対応するSEOページ群が自然に形成されます。「葛飾区 キッチン リフォーム 事例 費用60万円台」のような具体性の高いページは、競合が少なく、かつ検索意図と完全に一致するため転換率が高くなります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                「リフォーム 補助金 東京」「断熱リフォーム 助成金 葛飾区」など補助金・助成金キーワードへの対応も集客効果が高く、費用に関心の強い施主層への入り口として機能します。最新の補助制度情報を定期的に更新することで検索エンジンからの鮮度評価も維持できます。
              </p>
            </div>
          </div>
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              リフォーム会社・工務店が抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "施工事例の掲載が少なく信頼性の証明ができていない", b: "リフォームを検討する施主が最も確認したいのは「どんな仕事をしてきたか」という施工実績です。ホームページに施工事例が少ない・写真の質が低い・費用や工期が書いていない、という状態では問い合わせ前に離脱されます。施工事例の充実化は最も投資対効果の高い集客施策です。" },
                { n: "02", t: "費用相場の不明瞭さで問い合わせを躊躇されている", b: "「リフォームはいくらかかるか分からないから怖い」という心理が初回問い合わせの最大の障壁です。「キッチンリフォームの費用目安：50〜120万円」「洗面所改装の一般的な工期：3〜5日」など、具体的な数字の目安を掲載することで見積もり依頼のハードルを大幅に下げられます。" },
                { n: "03", t: "競合リフォーム会社との差別化ポイントが伝わっていない", b: "「地域に同じようなリフォーム会社が複数あって選ばれない」という状況では、差別化ポイントの言語化が急務です。「創業○年の地元密着」「自社施工でマージンなし」「施工後1年間のアフター保証」など、数字と具体性のある強みをホームページで前面に出します。" },
                { n: "04", t: "信頼性の証明が不十分で見積もりまで至らない", b: "リフォームは高額な買い物のため、施主は業者の信頼性を慎重に確認します。資格（建築士・施工管理技士）・施工保証・加入保険・代表者の顔写真と経歴などをホームページとGBPに明示することで「この会社なら安心」という決断を促します。" },
                { n: "05", t: "一括見積もりサイト経由の依存で利益率が下がっている", b: "ホームプロ・リショップナビなどの比較サイトは集客力がある一方、掲載費・紹介料・価格競争によって利益率が圧迫されます。自社MEO・SEO・ホームページによる直接問い合わせの比率を高めることで、比較サイト依存から脱却し、健全な収益構造を構築できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Our Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスのリフォーム会社・工務店向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO対策", desc: "「○○区 リフォーム」「近くの工務店 見積もり」でGoogleマップ上位表示を実現します。GBPの施工写真充実・口コミ獲得・定期投稿で地域の見積もり依頼を継続的に獲得します。" },
                { label: "施工事例LP・ホームページ制作", desc: "施工事例ビフォーアフター・費用・工期・お客様の声を最適配置した受注型サイトを制作します。「無料見積もり」CTAの設計と問い合わせフォームの最適化で見積もり依頼率を高めます。" },
                { label: "SEO・コンテンツ対策", desc: "「キッチンリフォーム 費用 ○○区」「外壁塗装 工務店 ○○市」など地域×施工種別キーワードを狙った施工事例ページ・費用ガイド記事を計画的に制作し、長期的な検索流入を獲得します。" },
                { label: "ホームページ制作", desc: "代表・スタッフ紹介・資格・施工保証・施工事例ギャラリー・見積もりフォームを備えた信頼重視のホームページを制作します。地元密着の強みをデザインと文章で最大限に表現します。" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#0d1b2a", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.8" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "48px", maxWidth: "600px" }}>
              リフォーム会社のWeb集客は、基盤整備から口コミ蓄積・コンテンツ拡充まで段階的に進めることで、安定した見積もり依頼の獲得体制が構築されます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Googleビジネスプロフィール（GBP）の最適化",
                  b: "カテゴリ設定・営業時間・電話番号・施工エリアを正確に設定します。施工写真を10枚以上登録し、サービス内容（キッチン・バスルーム・外壁等）を詳細に記載することでGoogleマップでの検索表示品質が向上します。",
                },
                {
                  n: "02",
                  t: "施工事例のビフォーアフター写真整備",
                  b: "過去の施工事例からキッチン・浴室・外壁塗装など工事種別ごとのビフォーアフター写真を選定し、費用・工期・施工内容のデータをまとめます。写真の品質が集客力に直結するため、スマートフォンでの再撮影も含めて整備します。",
                },
                {
                  n: "03",
                  t: "キーワード設計（キッチンリフォーム・浴室・外壁塗装等）",
                  b: "工事種別×地域×フェーズ（費用・工期・業者選び）の3軸でキーワードを設計します。「葛飾区 キッチンリフォーム 費用」「外壁塗装 東京 見積もり」など購買意欲の高いキーワードを特定し、施工事例ページと情報記事に反映させます。",
                },
                {
                  n: "04",
                  t: "見積もり依頼フォーム・LINE導線の設置",
                  b: "ホームページのヘッダー・トップページ・各施工事例ページに「無料見積もり依頼」ボタンを設置します。LINE公式アカウントへの誘導も追加し、24時間対応の問い合わせ経路を複数確保します。入力項目は5項目以内に絞ることで送信率を高めます。",
                },
                {
                  n: "05",
                  t: "口コミ獲得フローの整備",
                  b: "工事完了後2〜3日以内を口コミ依頼の最適タイミングと設定し、LINEでGoogleマップレビューリンクを送るフローを整備します。「30秒で投稿できます」「一言でも大丈夫です」という文言を添えることで口コミ件数が安定的に積み上がります。",
                },
                {
                  n: "06",
                  t: "YouTube施工動画の制作・ホームページ埋め込み",
                  b: "「キッチンリフォーム 施工動画」「外壁塗装 工程 解説」など施工動画をYouTubeに公開し、対応する施工事例ページに埋め込みます。動画があることで滞在時間が延び、信頼性の補強とSEO評価の向上につながります。",
                },
                {
                  n: "07",
                  t: "地域名×リフォーム種別のSEO対策",
                  b: "「葛飾区のキッチンリフォーム」「東京のバスルームリフォーム」など地域×工事種別に特化したページを制作します。一括見積もりサイトでは対応できない細かい地域ニーズに応えることで、直接問い合わせを増やします。",
                },
                {
                  n: "08",
                  t: "補助金・助成金情報ページの追加",
                  b: "「リフォーム 補助金 東京」「断熱リフォーム 助成金 葛飾区」など補助金関連キーワードに対応したページを制作します。費用負担の軽減を訴求することで、検討段階の施主の問い合わせハードルを下げ、費用相場の透明化にもつながります。",
                },
                {
                  n: "09",
                  t: "定期改善・アクセス解析の月次レビュー",
                  b: "Googleアナリティクス・サーチコンソール・GBPインサイトのデータを月次で確認し、流入キーワード・問い合わせ経路・離脱ページを分析します。データに基づいた改善策を継続的に実施することで集客精度が向上します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>KPI</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "8px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "48px", maxWidth: "600px" }}>
              リフォーム会社のWeb集客では、以下のKPIを定期的に計測・改善することで見積もり依頼数と受注数を安定的に増やせます。
            </p>
            <div style={{ display: "grid", gap: "0", maxWidth: "720px" }}>
              {[
                {
                  kpi: "GBP問い合わせ数（電話・ルート検索）",
                  where: "GBPインサイト",
                  desc: "Googleマップから直接発生した電話タップ数とルート案内リクエスト数で、MEO施策の効果を直接測れる最重要KPIです。",
                },
                {
                  kpi: "見積もり依頼フォーム送信数",
                  where: "Googleアナリティクス（コンバージョン）",
                  desc: "ホームページへの訪問が実際の問い合わせにつながった件数で、CTAとフォーム設計の改善指標になります。流入経路（MEO・SEO・SNS）ごとに計測することで投資対効果の高い施策を特定できます。",
                },
                {
                  kpi: "施工事例ページの月間オーガニック流入数",
                  where: "Googleサーチコンソール",
                  desc: "SEOで獲得した施工事例ページへの自然検索流入数で、コンテンツが検索需要に応えられているかを判断できます。ページ数の増加とともに流入が増えることを確認します。",
                },
                {
                  kpi: "工事種別キーワード別検索順位",
                  where: "Googleサーチコンソール / SEOツール",
                  desc: "「葛飾区 キッチンリフォーム」「外壁塗装 東京 費用」など主要キーワードの検索順位を月次で追い、SEO施策の進捗を管理します。",
                },
                {
                  kpi: "Googleマップの口コミ件数と平均評価点",
                  where: "GBPダッシュボード",
                  desc: "口コミの蓄積速度と評価点の推移はMEOの上位表示と施主の信頼獲得の両方に影響する重要な指標です。月次での増加件数と評価の推移を継続的に追います。",
                },
                {
                  kpi: "施工事例ページの累計ページ数",
                  where: "ホームページ管理画面・サーチコンソール",
                  desc: "検索流入の経路となる施工事例ページの蓄積数は、SEOの長期的な集客基盤の成長を示す先行指標です。ページ数の増加とともに検索流入が比例的に伸びることを確認します。",
                },
                {
                  kpi: "問い合わせから見積もり・成約への転換率",
                  where: "自社管理・CRM",
                  desc: "Webからの問い合わせが実際の見積もり実施・成約につながる割合で、集客の質と営業プロセスを総合的に評価できます。高単価業種のため転換率の改善が収益に直結します。",
                },
              ].map((item, i) => (
                <div key={item.kpi} style={{ display: "grid", gridTemplateColumns: "1fr 180px", gap: "16px", padding: "20px 0", borderTop: i === 0 ? "1px solid #e8e4dc" : "1px solid #e8e4dc", alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                  </div>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em", lineHeight: "1.6", paddingTop: "2px" }}>{item.where}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px", maxWidth: "900px" }}>
              {[
                {
                  n: "01",
                  t: "リフォーム業界の集客構造を熟知した戦略立案",
                  b: "「地域検索×費用検索×施工事例」という3軸の集客構造を理解したうえで、MEO・SEO・ホームページを連携させた一貫した集客体制を設計します。一括見積もりサイト依存からの脱却を含め、見積もり依頼から受注までの導線を丸ごと最適化します。",
                },
                {
                  n: "02",
                  t: "施工事例コンテンツの企画から制作まで一括対応",
                  b: "ビフォーアフター写真の活用方法アドバイス・事例文章の作成・ページ制作・SEO設定まで、施工事例コンテンツの整備を一括して支援します。「写真はあるが記事にできない」という悩みに対して具体的な解決策を提供します。",
                },
                {
                  n: "03",
                  t: "口コミ獲得フローの設計と継続的なGBP管理",
                  b: "工事完了後の口コミ依頼タイミング・メッセージ文面・リンク共有の方法を含めた口コミ獲得フローを設計します。GBPの定期投稿・写真更新・返信対応も代行し、Googleマップ上の評価を継続的に高めます。",
                },
                {
                  n: "04",
                  t: "MEO・SEO・ホームページをワンストップで管理",
                  b: "集客施策が複数の会社に分散すると戦略の一貫性が失われます。サイプレスではMEO対策・SEOコンテンツ・ホームページ制作・改善提案をワンストップで担うことで、施策間の連携を最大化した効率的な集客体制を構築します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ borderTop: "1px solid rgba(196,184,154,0.3)", paddingTop: "24px" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", display: "block", marginBottom: "12px" }}>{item.n}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "10px", lineHeight: "1.5" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "48px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#ffffff", color: "#0d1b2a", padding: "14px 36px", fontSize: "14px", fontWeight: 600, textDecoration: "none", fontFamily: "var(--font-serif)" }}>
                無料相談はこちら →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="リフォーム会社・工務店のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="リフォーム会社・工務店のWeb集客ご相談"
          body="MEO対策・SEO対策・ホームページ制作でリフォームの見積もり依頼を増やします。施工事例コンテンツ制作も含めてご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
