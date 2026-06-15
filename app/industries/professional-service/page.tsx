import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "士業・コンサルタントのWeb集客｜税理士・司法書士・社労士｜株式会社サイプレス",
  description: "税理士・司法書士・行政書士・社労士・弁護士などの士業・コンサルタントのWeb集客。SEO・MEO・ホームページ制作で顧問先・相談案件を継続的に獲得。",
  keywords: ["税理士 MEO対策", "士業 集客", "弁護士 ホームページ", "社労士 SEO", "コンサルタント Web集客"],
  openGraph: {
    title: "士業・コンサルタントのWeb集客｜税理士・司法書士・社労士｜株式会社サイプレス",
    description: "税理士・弁護士・社労士などの士業・コンサルタントのWeb集客。SEO・MEO・ホームページで顧問先獲得。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/professional-service" },
};

const faqItems = [
  { q: "士業のホームページで最も重要なコンテンツは何ですか？", a: "専門家としての信頼性（資格・実績・所属団体）・得意分野の具体的な説明・費用の目安・問い合わせ導線が重要です。「この先生に相談したい」という決断を後押しする情報構成が必要です。" },
  { q: "税理士・弁護士のMEO対策は有効ですか？", a: "はい。「○○市 税理士」「○○駅 弁護士 相談」など地域名での検索でGoogleマップに上位表示されることは、地域の個人・中小企業顧客の獲得に効果的です。" },
  { q: "士業のSEO対策で狙うべきキーワードは？", a: "「○○市 確定申告 税理士」「相続 手続き ○○区」「会社設立 行政書士 ○○」など、顧客が抱える具体的な課題+地域名+士業名の組み合わせが効果的です。" },
  { q: "コンサルタントのホームページはどう差別化すべきですか？", a: "支援実績・クライアントの声・解決した課題の具体例・代表者の経歴・考え方・提供価値の独自性を明確に伝えることで差別化できます。「なぜこの先生/コンサルタントなのか」が伝わることが重要です。" },
  { q: "士業のブログ・コラムはSEOに効果がありますか？", a: "はい。専門知識を活かした解説記事・事例紹介・法改正情報などのコンテンツは、顧客の疑問を解決しながらSEO評価も高めます。E-E-A-T（専門性・権威性・信頼性）が評価されます。" },
  { q: "AIに引用される士業のサイトはどう設計すればいいですか？", a: "ChatGPT・Geminiなどに引用されやすいサイトにするには、FAQ形式での専門知識の整理・著者情報の明示（資格・経歴・専門分野）・具体的な事例の記述が有効です。AIO（AI検索最適化）の観点で専門性の高いコンテンツを設計します。" },
  { q: "士業のホームページでオンライン相談や無料相談の問い合わせを増やすには？", a: "「まずは30分無料相談から」という低ハードルのCTAを目立たせること・LINEでの相談受付・オンラインMTGの対応明記が効果的です。初回相談への心理的ハードルを下げることで、潜在顧客が問い合わせに至る転換率が向上します。" },
  { q: "地域外（全国）からの相談を増やすためのWeb集客方法は？", a: "SEO（全国向けキーワード）・AIO（AI引用対策）・YouTubeやPodcastでの情報発信が有効です。「○○分野のスペシャリスト」として特定の専門分野で全国に認知されることで、地域を超えた顧問先・相談依頼を獲得できます。" },
  { q: "紹介依存からWebからの新規獲得へ移行するにはどうすれば良いですか？", a: "まずGoogleビジネスプロフィールの整備とホームページの問い合わせ導線改善から始めます。既存顧客に口コミ投稿を依頼してGoogleマップの評価を高め、SEOコンテンツで「○○ 相談 ○○区」の検索に対応します。段階的に紹介以外の流入経路を広げることで半年〜1年で体制が整います。" },
  { q: "士業のWeb集客でコンテンツSEOはどの程度重要ですか？", a: "非常に重要です。税制改正・法改正・手続きガイドなど専門知識の解説記事は、顧客の課題解決と同時にE-E-A-T評価を高めます。AI検索（AIO）でも専門性の高いコンテンツが引用されやすく、長期的な集客基盤になります。月2〜4本のペースでの継続的なコンテンツ発信を推奨します。" },
];

const relatedLinks = [
  { href: "/services/seo", label: "SEO対策サービス", desc: "士業向け検索上位表示" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "地域密着の士業MEO対策" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "士業向けサイト制作" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索（ChatGPT等）への最適化" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "相談申込みを最大化するLP" },
  { href: "/knowledge/eeat", label: "E-E-ATとは", desc: "専門家サイトのSEO信頼性指標" },
  { href: "/industries/real-estate", label: "不動産会社のWeb集客", desc: "不動産業の集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "士業・コンサルタントのWeb集客相談" },
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
              士業・コンサルタント
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Professional Services</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              士業・コンサルタントのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              税理士・司法書士・行政書士・社労士・弁護士・コンサルタントのWeb集客は、専門家としての信頼性と具体的な解決力を伝えることが核心です。SEO・MEO・ホームページで継続的な相談案件を獲得します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_20 (6).png" alt="3名の日本人ビジネスパーソンによるプロフェッショナルミーティング — 士業・コンサルタントのWeb集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              士業・コンサルタントのWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "専門性・信頼性を示すホームページ", b: "資格・実績・所属団体・支援事例・代表者プロフィールを丁寧に掲載し、「信頼できる専門家」という第一印象を作ります。費用の目安を明示することで問い合わせ前の不安を解消します。" },
                { n: "02", t: "地域検索でのMEO対策", b: "「○○市 税理士」「○○区 司法書士」など地域名での検索でGoogleマップ上位表示を目指します。事務所写真・業務内容・口コミを充実させて選ばれる理由を明確にします。" },
                { n: "03", t: "専門コンテンツでSEOと信頼を構築", b: "税制改正解説・相続手続きガイド・会社設立の手順など、顧客の疑問に答える専門コンテンツを蓄積します。E-E-A-T（経験・専門性・権威性・信頼性）がSEO評価を高めます。" },
                { n: "04", t: "AIO対策でAI検索からの指名を獲得", b: "ChatGPT・Geminiなどで「○○市のおすすめ税理士」と検索されたとき引用される事務所になるための情報構造を整備します。専門性の高いコンテンツ・著者情報・FAQ実装が重要です。" },
                { n: "05", t: "初回相談の敷居を下げる導線設計", b: "「30分無料相談」「メールで気軽に質問」など初回接触の心理的障壁を下げる施策を設置します。問い合わせフォームは入力3項目以内を目標にシンプルに設計します。" },
                { n: "06", t: "紹介・リピートを生むデジタル関係構築", b: "メールマガジン・LINE公式アカウントで税制・法改正・最新情報を定期発信することで、既存顧客との関係を維持しつつ紹介につながる信頼を醸成します。" },
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
              士業・専門家が抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "専門用語が多く一般客に伝わっていない", b: "「損益通算」「成年後見制度」「労務コンプライアンス」など専門家には当然の言葉が、潜在顧客には難解に映ります。ホームページで「こんなお悩みありませんか」という生活・経営上の具体的な困りごとから入り、専門用語を最後に補足する構成に変えることで問い合わせ率が改善されます。" },
                { n: "02", t: "紹介依存で新規顧客の獲得に限界がある", b: "既存顧客からの紹介は質が高い一方、件数は限られます。GoogleマップのMEO対策とSEOコンテンツを整備することで、「地域名＋士業名」での検索流入という紹介に依らない新規経路を構築できます。紹介と検索の両輪で顧問先を安定的に拡大します。" },
                { n: "03", t: "信頼性の証明が難しくサイトで差別化できていない", b: "「同じ資格を持つ先生はたくさんいる」という状況では、ホームページの見せ方次第で選ばれるかどうかが決まります。代表者の顔写真・具体的な支援事例・所属団体・専門分野への取り組み姿勢を丁寧に掲載することで「この先生に相談したい」と感じさせるサイトを構築します。" },
                { n: "04", t: "AIO（AI検索）への対応が遅れている", b: "ChatGPT・Gemini・Perplexityなどでの専門家検索が増える中、AI検索で引用・推薦される事務所とそうでない事務所の差は広がり続けています。FAQ構造の整備・著者情報の明示・専門知識の体系的なコンテンツ化によって、AI検索からの指名獲得を早期に確立することが競合優位につながります。" },
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
              サイプレスの士業・専門家向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "AIO対策・コンテンツSEO", desc: "ChatGPT・Geminiで引用される事務所サイトの構造を設計します。FAQ整備・著者情報の構造化・専門解説コンテンツの継続制作でAI検索からの指名獲得と自然検索流入の両方を強化します。" },
                { label: "ホームページ制作", desc: "資格・実績・専門分野・費用の目安・無料相談導線を最適配置した信頼重視のホームページを制作します。E-E-A-T対応設計で専門家としての権威性をWebで可視化します。" },
                { label: "コンテンツSEO支援", desc: "「○○区 税理士 個人事業主」「相続 手続き ○○市 費用」など顧客が検索するキーワードに対応した専門コンテンツを企画・制作します。月次の記事制作から構造化データ実装まで対応します。" },
                { label: "MEO対策・口コミ管理", desc: "地域名での検索でGoogleマップ上位に表示される事務所を目指します。既存顧客からの口コミ獲得フロー設計・全口コミへの返信文面作成・GBP最適化を一括してサポートします。" },
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
        <PageContactCTA heading="士業・コンサルタントのWeb集客ご相談" body="税理士・司法書士・行政書士・社労士・弁護士・コンサルタントのSEO・MEO・ホームページ制作をご相談ください。専門家としての信頼を構築する集客を設計します。" />
      </main>
      <Footer />
    </>
  );
}
