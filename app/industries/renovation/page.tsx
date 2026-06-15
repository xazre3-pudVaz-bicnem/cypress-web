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
    a: "「キッチンリフォーム 費用 60万円台 葛飾区」「洗面所 リフォーム 工期 3日間 ○○市」のように費用・工期・地域を含む施工事例ページは、検索意図に完全に一致する独自コンテンツです。事例ページが蓄積するほど検索流入が増え、見積もり依頼の経路が増えます。" },
  {
    q: "工務店がホームページで信頼性を高めるために何を掲載すべきですか？",
    a: "代表・スタッフの顔写真と経歴・保有資格（建築士・施工管理技士等）・施工事例のビフォーアフター・お客様の声・会社の歴史・施工保証の内容が有効です。「人」と「実績」を見せることで、大手には出せない地域密着業者の温かみと信頼を伝えられます。",
  },
];

const relatedLinks = [
  { href: "/industries/renovation/meo", label: "リフォーム会社のMEO対策", desc: "Googleマップ上位表示で見積もり依頼増加" },
  { href: "/industries/renovation/seo", label: "リフォーム会社のSEO対策", desc: "施工事例・費用記事で長期集客" },
  { href: "/industries/construction", label: "建設業・工務店のWeb集客", desc: "建設業の集客支援" },
  { href: "/industries/plumbing", label: "水道・設備工事業のWeb集客", desc: "設備工事の集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "リフォーム会社向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "見積もり依頼特化型LP" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
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
              施工事例コンテンツとGoogleマップの口コミが積み上がることで、大手ハウスメーカーのリフォーム部門に対しても地元業者としての信頼を確立できます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_10_24 (4).png" alt="住宅外観と施工業者・施主カップルによる打ち合わせ — リフォーム会社・工務店のMEO対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
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

        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
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
