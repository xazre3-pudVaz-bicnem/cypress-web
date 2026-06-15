import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ハウスクリーニング・清掃業のWeb集客｜MEO・SEO対策｜株式会社サイプレス",
  description: "ハウスクリーニング・エアコンクリーニング・清掃業のWeb集客。Googleマップ上位表示・地域SEO・ホームページ制作・口コミ獲得で定期受注を増やします。",
  keywords: ["ハウスクリーニング MEO対策", "清掃業 集客", "エアコンクリーニング Googleマップ", "清掃業 ホームページ", "ハウスクリーニング SEO"],
  openGraph: {
    title: "ハウスクリーニング・清掃業のWeb集客｜MEO・SEO対策｜株式会社サイプレス",
    description: "ハウスクリーニング・清掃業のWeb集客。MEO・SEO・ホームページで定期受注を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/cleaning" },
};

const faqItems = [
  { q: "ハウスクリーニング業のMEO対策は効果がありますか？", a: "はい。「○○市 ハウスクリーニング」「○○区 エアコンクリーニング」など地域名での検索でGoogleマップに上位表示されることは、問い合わせ獲得に非常に有効です。" },
  { q: "清掃業のホームページに必要な情報は何ですか？", a: "サービス一覧・料金（目安）・対応エリア・スタッフ紹介（顔写真）・施工写真・口コミ・問い合わせフォーム・電話番号が最低限必要です。料金の透明性が特に重要です。" },
  { q: "ハウスクリーニング業で口コミを増やすには？", a: "サービス完了後にQRコードで口コミURLへ誘導する・LINEでお礼メッセージと一緒に口コミ依頼を送る・リピート客にも定期的に依頼するなどの方法が効果的です。" },
  { q: "季節によって需要が変動する清掃業のWeb対策は？", a: "エアコンクリーニングは夏前（4〜5月）・大掃除は年末（11〜12月）など需要期の2〜3か月前からSEOコンテンツ・MEO強化・SNS告知を始めることが重要です。" },
  { q: "清掃業のリピート顧客を増やすデジタル施策は？", a: "LINE公式アカウントで定期クリーニングのリマインダー送信・季節ごとのキャンペーン告知・ポイント制度の案内などが効果的です。一度の利用から定期契約へ転換を目指します。" },
  { q: "ハウスクリーニング業者の差別化はどうすればいいですか？", a: "「使用洗剤の安全性（子供・ペットに安心）」「女性スタッフ対応」「完全個別対応」「作業保証」など、大手チェーンが対応しきれない付加価値をホームページとGBPで明示します。料金の透明性と合わせて地域密着業者の信頼を築きます。" },
  { q: "清掃業のホームページはどのように集客に活用できますか？", a: "「エアコンクリーニング 費用 〇〇区」「ハウスクリーニング 引越し 〇〇市」などの地域+サービス名で検索上位を狙うコンテンツ（サービスページ・ブログ）を整備します。料金表・作業前後写真・お客様の声を充実させることで問い合わせ率が向上します。" },
  { q: "法人向け（オフィス・店舗清掃）の集客に違いはありますか？", a: "法人向けは「継続契約」が主な目的のため、実績・対応可能な施設規模・資格（建築物環境衛生管理技術者等）・セキュリティ対応をホームページで明示します。法人向けキーワード（「オフィス清掃 〇〇区 業者」「定期清掃 契約」）を含むSEOコンテンツが有効です。" },
  { q: "Google広告（リスティング広告）は清掃業に向いていますか？", a: "エアコンクリーニング・引越し後クリーニングなど需要のピーク期にGoogle広告を短期集中で活用する方法は効果的です。ただし広告費が継続的にかかるため、MEO・SEOで自然流入を育てながら広告は補助的に使うのが費用対効果の面で現実的です。" },
  { q: "清掃業のビフォーアフター写真はSEOに効果がありますか？", a: "はい。施工前後の写真はユーザーの信頼獲得に直結するだけでなく、Google画像検索からの流入増加、GBPの評価向上にも貢献します。キッチン・浴室・エアコン・窓ガラスなど箇所別の事例をできるだけ多く掲載することを推奨します。" },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "清掃業向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "高CV率LPの制作" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "リピーター育成の仕組み化" },
  { href: "/industries/plumbing", label: "水道・設備工事業のWeb集客", desc: "設備系業者の集客" },
  { href: "/industries/renovation", label: "リフォーム会社のWeb集客", desc: "リフォーム業の集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "清掃業のWeb集客相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              ハウスクリーニング・清掃
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Cleaning Service</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ハウスクリーニング・清掃業のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ハウスクリーニング・エアコンクリーニング・清掃業のWeb集客は、地域検索での見つかりやすさ・料金の透明性・信頼性が鍵です。MEO・SEO・口コミ管理で継続的な問い合わせを獲得します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_21 (7).png" alt="オフィスロビーを清掃するプロスタッフ — ハウスクリーニング・清掃業のMEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              清掃業のWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "MEOで地域の清掃需要を即捕捉", b: "「○○市 ハウスクリーニング」「○○区 エアコン掃除 業者」での地域検索でGoogleマップ上位に表示されることが集客の第一歩です。サービス区分・対応エリア・料金目安を明記します。" },
                { n: "02", t: "料金の透明性でCVを高める", b: "「料金が不明なサービスは問い合わせにくい」というユーザー心理に対応し、場所別・㎡別の料金目安をわかりやすく掲載します。透明な料金提示が信頼と問い合わせ率を高めます。" },
                { n: "03", t: "施工前後の写真で効果を視覚的に証明", b: "清掃前と清掃後のビフォーアフター写真はサービスの効果を最も直感的に伝えられるコンテンツです。キッチン・浴室・エアコンなど箇所別の事例を充実させます。" },
                { n: "04", t: "季節に合わせたSEO・MEO対策", b: "エアコンクリーニング（春〜初夏）・大掃除（秋〜冬）などの需要期に合わせて、2〜3か月前からSEOコンテンツの準備・MEO強化・SNS告知を実施します。" },
                { n: "05", t: "口コミ管理で信頼と検索順位を高める", b: "サービス完了後に口コミ依頼のフロー（QRコード・LINE送信）を整備します。清掃業は口コミが選択の決め手になりやすいため、継続的な口コミ獲得が重要です。" },
                { n: "06", t: "LINE公式アカウントで定期契約を促進", b: "LINE公式アカウントで定期クリーニングのリマインダー・季節キャンペーン告知を配信します。一度の利用から3か月・6か月ごとの定期契約への転換を促します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ハウスクリーニング業が抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "料金の不透明さで問い合わせを逃している", b: "「見積もりしないと料金がわからない」という状態は、ユーザーが問い合わせをためらう最大の障壁です。㎡・箇所別の料金目安をホームページとGBPに掲載するだけで問い合わせ率が改善されます。同業他社との価格比較においても「わかりやすさ」が選ばれる理由になります。" },
                { n: "02", t: "価格だけで比較され差別化できていない", b: "清掃業は価格比較されやすい業種です。「使用洗剤の安全性」「女性スタッフ対応」「作業保証」「ペット・子供への配慮」など付加価値をホームページとGBPで明確に伝えることで、価格以外の軸での選択を促せます。差別化ポイントの言語化と発信が急務です。" },
                { n: "03", t: "季節波動が激しく年間を通じた受注が安定しない", b: "エアコンクリーニング（春〜夏）・年末大掃除（冬）は繁忙期ですが、それ以外の時期は依頼が減りがちです。オフシーズン需要（引越しクリーニング・定期契約）のSEOコンテンツ整備と、LINE公式アカウントでのリマインド配信によって年間の受注を平準化できます。" },
                { n: "04", t: "一度きりで終わりリピーターが定着しない", b: "ハウスクリーニングは一度依頼してそれきりになりやすいサービスです。LINE公式アカウントへの誘導・定期クリーニングプランの提案・季節ごとのキャンペーン案内を通じて、単発利用を定期契約へ転換する仕組みを作ることが長期的な安定売上につながります。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
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
              サイプレスのハウスクリーニング・清掃業向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO対策", desc: "「○○区 ハウスクリーニング」「エアコン掃除 ○○市」でGoogleマップ上位表示を実現。GBPの写真・サービス情報・口コミを整備し、地域の清掃需要を確実に捕捉します。" },
                { label: "ランディングページ制作", desc: "「エアコンクリーニング専用LP」「年末大掃除キャンペーンLP」など、サービス別・季節別の高CV率ランディングページを制作します。料金明示・ビフォーアフター写真・口コミを最適配置します。" },
                { label: "季節SEO・コンテンツ対策", desc: "「エアコン掃除 時期 ○○区」「引越し後 ハウスクリーニング 費用」などの需要期キーワードを狙ったSEOコンテンツを計画的に整備し、繁忙期前からの自然検索流入を獲得します。" },
                { label: "LINE公式アカウント活用支援", desc: "定期クリーニングのリマインダー配信・季節キャンペーン告知・口コミ獲得メッセージの自動送信を設計します。単発利用から定期契約へ転換するデジタル導線を構築します。" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#0d1b2a", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.8" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="清掃業のWeb集客ご相談" body="ハウスクリーニング・エアコンクリーニング・清掃会社のMEO・SEO・ホームページ制作をご相談ください。定期受注増加に向けた集客の仕組みを設計します。" />
      </main>
      <Footer />
    </>
  );
}
