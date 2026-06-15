import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【士業・専門家サービスのSEO・MEO対策】弁護士・税理士・司法書士のWeb集客｜株式会社サイプレス",
  description: "弁護士・税理士・司法書士・行政書士・社労士など士業・専門家サービスのWeb集客。SEO・MEO・AIO対策・ホームページ制作で顧問先・相談案件を継続的に獲得します。",
  keywords: [
    "税理士 MEO対策",
    "弁護士 ホームページ",
    "士業 Web集客",
    "司法書士 SEO",
    "行政書士 集客",
    "社労士 ホームページ",
    "士業 AIO対策",
    "専門家 コンテンツSEO",
  ],
  openGraph: {
    title: "【士業・専門家サービスのSEO・MEO対策】弁護士・税理士・司法書士のWeb集客｜株式会社サイプレス",
    description: "弁護士・税理士・社労士など士業・専門家のWeb集客。SEO・MEO・ホームページで顧問先・相談案件を継続獲得。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/professional-service" },
};

const faqItems = [
  {
    q: "士業のホームページで最も重要なコンテンツは何ですか？",
    a: "専門家としての信頼性（資格・実績・所属団体）・得意分野の具体的な説明・費用の目安・問い合わせ導線が重要です。「この先生に相談したい」という決断を後押しする情報構成が必要です。代表者の顔写真・経歴・専門分野への取り組みを丁寧に掲載することで「顔の見える専門家」として信頼を獲得できます。",
  },
  {
    q: "税理士・弁護士のMEO対策は有効ですか？",
    a: "はい。「○○市 税理士」「○○駅 弁護士 相談」「○○区 司法書士」など地域名での検索でGoogleマップに上位表示されることは、地域の個人・中小企業顧客の獲得に非常に効果的です。口コミ数と評価の改善がMEO順位に直結するため、既存顧客への口コミ依頼フローも同時に整備します。",
  },
  {
    q: "士業のSEO対策で狙うべきキーワードは？",
    a: "「○○市 確定申告 税理士」「相続 手続き ○○区」「会社設立 行政書士 ○○」「離婚 弁護士 ○○市 費用」など、顧客が抱える具体的な課題+地域名+士業名の組み合わせが効果的です。顧客が相談前に調べる「○○ 費用 目安」「○○ 手続き やり方」系のコンテンツも集客効果が高いです。",
  },
  {
    q: "コンサルタントのホームページはどう差別化すべきですか？",
    a: "支援実績・クライアントの声（守秘義務の範囲内）・解決した課題の具体例・代表者の経歴・考え方・提供価値の独自性を明確に伝えることで差別化できます。「なぜこの先生/コンサルタントなのか」「他との違いは何か」が一目でわかることが重要です。",
  },
  {
    q: "士業のブログ・コラムはSEOに効果がありますか？",
    a: "非常に効果的です。税制改正・法改正・手続きガイドなど専門知識の解説記事は、顧客の疑問を解決しながらSEO評価も高めます。E-E-A-T（経験・専門性・権威性・信頼性）が評価される分野であり、資格保有者による解説コンテンツはGoogleからの信頼評価が高い傾向があります。月2〜4本のペースでの継続発信を推奨します。",
  },
  {
    q: "AIに引用される士業のサイトはどう設計すればいいですか？",
    a: "ChatGPT・Geminiなどに引用されやすいサイトにするには、FAQ形式での専門知識の整理・著者情報の明示（資格・経歴・専門分野）・具体的な事例の記述が有効です。AIO（AI検索最適化）の観点で「○○とは何か」「費用の目安」「手続きの流れ」など構造化された情報を持つコンテンツが引用されやすいです。",
  },
  {
    q: "士業のホームページでオンライン相談や無料相談の問い合わせを増やすには？",
    a: "「まずは30分無料相談から」という低ハードルのCTAを目立たせること・LINEでの相談受付・オンラインMTGの対応明記が効果的です。初回相談への心理的ハードルを下げることで、潜在顧客が問い合わせに至る転換率が向上します。問い合わせフォームの入力項目は3項目以内を目標にシンプルに設計します。",
  },
  {
    q: "地域外（全国）からの相談を増やすためのWeb集客方法は？",
    a: "SEO（全国向けキーワード）・AIO（AI引用対策）・YouTubeやPodcastでの情報発信が有効です。「○○分野のスペシャリスト」として特定の専門分野で全国に認知されることで、地域を超えた顧問先・相談依頼を獲得できます。オンライン相談対応を明記することで、地理的な制約を超えた集客が実現します。",
  },
  {
    q: "紹介依存からWebからの新規獲得へ移行するにはどうすれば？",
    a: "まずGoogleビジネスプロフィールの整備とホームページの問い合わせ導線改善から始めます。既存顧客に口コミ投稿を依頼してGoogleマップの評価を高め、SEOコンテンツで「○○ 相談 ○○区」の検索に対応します。段階的に紹介以外の流入経路を広げることで半年〜1年で体制が整い、安定した新規獲得につながります。",
  },
  {
    q: "士業のWeb集客でコンテンツSEOはどの程度重要ですか？",
    a: "非常に重要です。税制改正・法改正・手続きガイドなど専門知識の解説記事は、顧客の課題解決と同時にE-E-A-T評価を高めます。AI検索（AIO）でも専門性の高いコンテンツが引用されやすく、長期的な集客基盤になります。特に士業は「信頼性」が選ばれる理由の核心であり、コンテンツによる専門性の可視化が最も効果的な差別化手段です。",
  },
];

const relatedLinks = [
  { href: "/services/seo", label: "SEO対策サービス", desc: "士業向け検索上位表示" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "地域密着の士業MEO対策" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "士業向けサイト制作" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索（ChatGPT等）への最適化" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "相談申込みを最大化するLP" },
  { href: "/knowledge/eeat", label: "E-E-ATとは", desc: "専門家サイトのSEO信頼性指標" },
  { href: "/industries/real-estate", label: "不動産会社のWeb集客", desc: "不動産業の集客支援" },
  { href: "/industries/consulting", label: "コンサルタントのWeb集客", desc: "コンサル系の集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "士業・専門家のWeb集客相談" },
];

export default function ProfessionalServiceIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "士業・専門家サービスのWeb集客", "item": "https://www.cypress-all.co.jp/industries/professional-service" },
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
              <span style={{ color: "#0d1b2a" }}>士業・専門家サービス</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Professional Services
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              士業・専門家サービスの<br />SEO・MEO対策・Web集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              弁護士・税理士・司法書士・行政書士・社労士など士業・専門家サービスのWeb集客は、「信頼性の可視化」と「専門性の差別化」が核心です。同じ資格を持つ専門家が多い中で、「この先生に相談したい」と思わせるWebサイトとコンテンツを設計します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              士業の集客は「紹介」に依存するケースが多いですが、MEO・SEO・AIO対策を整備することで、Googleマップ・検索エンジン・AI検索（ChatGPT・Gemini）から新規の相談依頼を継続的に獲得できる体制を構築します。紹介と検索の両輪で顧問先・相談案件を安定的に拡大します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              弁護士・法律事務所、税理士・税理士法人、司法書士、行政書士、社会保険労務士（社労士）、中小企業診断士、ファイナンシャルプランナー（FP）、経営コンサルタントなど、士業・専門家サービス全般のWeb集客に対応しています。
            </p>
          </div>
        </section>

        {/* Full-width image band */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/hero.png"
            alt="士業・専門家によるプロフェッショナルなコンサルティングの様子 — 士業・専門家サービスのSEO・MEO対策"
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
              士業・専門家サービスが抱える集客課題
            </h2>
            <div style={{ display: "grid", gap: "1px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", background: "rgba(196,184,154,0.2)" }}>
              {[
                {
                  n: "01",
                  t: "資格者が多く差別化できていない",
                  b: "「同じ資格を持つ先生はたくさんいる」という状況では、ホームページの見せ方次第で選ばれるかどうかが決まります。代表者の顔写真・具体的な支援事例・専門分野への取り組み姿勢を丁寧に掲載することが差別化の核心です。",
                },
                {
                  n: "02",
                  t: "紹介依存で新規獲得に限界がある",
                  b: "既存顧客からの紹介は質が高い一方、件数は限られます。MEO対策とSEOコンテンツを整備することで、「地域名＋士業名」での検索流入という紹介に依らない新規経路を構築できます。紹介と検索の両輪が顧問先拡大の鍵です。",
                },
                {
                  n: "03",
                  t: "信頼性をWebで伝えることが難しい",
                  b: "専門用語が多く一般の人に伝わりにくい、守秘義務で実績を詳細に出しにくいという制約の中で、「この先生なら安心」という信頼を構築する情報設計が求められます。著者情報・所属団体・考え方の発信が有効です。",
                },
                {
                  n: "04",
                  t: "AIO（AI検索）への対応が遅れている",
                  b: "ChatGPT・Gemini・Perplexityで専門家を検索する利用者が増える中、AI検索で引用・推薦される事務所とそうでない事務所の差が広がっています。FAQ構造の整備・著者情報・専門知識の体系的なコンテンツ化が急務です。",
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
              士業・専門家サービスのWeb集客戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "専門性・信頼性を示すホームページ", b: "資格・実績・所属団体・支援事例・代表者プロフィールを丁寧に掲載し、「信頼できる専門家」という第一印象を作ります。費用の目安を明示することで問い合わせ前の不安を解消し、相談のハードルを下げます。" },
                { n: "02", t: "地域検索でのMEO対策", b: "「○○市 税理士」「○○区 司法書士」など地域名での検索でGoogleマップ上位表示を目指します。事務所写真・業務内容・口コミを充実させ、地域の見込み顧客に選ばれる理由を明確に伝えます。" },
                { n: "03", t: "専門コンテンツでSEOと信頼を構築", b: "税制改正解説・相続手続きガイド・会社設立の手順など、顧客の疑問に答える専門コンテンツを蓄積します。E-E-A-T（経験・専門性・権威性・信頼性）がSEO評価を高め、専門家としての権威性を可視化します。" },
                { n: "04", t: "AIO対策でAI検索からの指名を獲得", b: "ChatGPT・Geminiなどで「○○市のおすすめ税理士」「弁護士 相談 ○○区」と検索されたとき引用される事務所になるための情報構造を整備します。FAQ・著者情報・専門知識の体系化が重要です。" },
                { n: "05", t: "初回相談の敷居を下げる導線設計", b: "「30分無料相談」「メールで気軽に質問」「LINEで相談受付」など初回接触の心理的障壁を下げる施策を設置します。問い合わせフォームは入力3項目以内を目標にシンプルに設計します。" },
                { n: "06", t: "紹介・リピートを生むデジタル関係構築", b: "メールマガジン・LINE公式アカウントで税制・法改正・最新情報を定期発信することで、既存顧客との関係を維持しつつ紹介につながる信頼を醸成します。顧問先の維持と紹介増加につながります。" },
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

        {/* SEO・AIO戦略詳細 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SEO / AIO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              士業・専門家サービスのSEO・AIO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                士業のSEO対策では、顧客が相談前に調べる「課題」「費用」「手順」キーワードを狙ったコンテンツ設計が重要です。主要キーワード例：「葛飾区 確定申告 税理士」「相続 手続き ○○区 費用」「会社設立 行政書士 亀有」「離婚 弁護士 葛飾区」。地域名+課題+士業名の組み合わせで、相談意欲の高い見込み顧客を獲得します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                AIO対策（AI検索最適化）は士業にとって競合優位を早期に確立できる重要な施策です。ChatGPT・Gemini・Perplexityで「○○について詳しい専門家」として引用されるためには、FAQ形式の専門知識・著者情報の明示（資格・専門分野・経歴）・「○○とは」「費用目安」「手続きの流れ」などの構造化されたコンテンツが必要です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                E-E-A-T（経験・専門性・権威性・信頼性）はGoogleの品質評価において特にYMYL（Your Money or Your Life）分野——法律・税務・医療——で重要視されます。資格保有・所属団体・専門知識の発信・著者情報の充実により、士業サイトのSEO評価は向上します。FAQPage SchemaとBreadcrumbList Schemaの実装も必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Webサイト設計 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Web Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              士業・専門家の「選ばれる」Webサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                士業のWebサイトは「信頼感」「専門性」「親近感」の三要素を同時に表現することが重要です。代表者の顔写真・経歴・専門分野への取り組み姿勢をファーストビューに配置し、「このお先生は信頼できる」という第一印象を確立します。清潔感のある配色とわかりやすい情報設計が、離脱率の低下と問い合わせ率の向上に直結します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                必須コンテンツは「代表者プロフィール（顔写真・資格・経歴・専門分野）」「業務内容・対応可能な手続きの一覧」「費用目安（可能な範囲で）」「相談の流れ」「よくある質問（FAQ）」「問い合わせフォーム・LINE相談窓口」です。「まず無料相談」という入口を明確に設置し、問い合わせまでのステップを最小化します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                専門分野別のページ作成も重要です。「相続税申告」「会社設立支援」「労務コンプライアンス」「債務整理」など業務別のランディングページを設けることで、具体的なニーズを持つ見込み顧客を的確にキャッチできます。各ページに地域名とFAQを含めることでSEO効果を高めます。
              </p>
            </div>
          </div>
        </section>

        {/* 士業ジャンル別アプローチ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Sub Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              士業ジャンル別のWeb集客アプローチ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                {[
                  { t: "税理士・税理士法人", b: "確定申告・相続税・法人決算・記帳代行など業務別のランディングページを設け、「○○区 確定申告 税理士 費用」「個人事業主 税理士 葛飾区」などのキーワードで地域の個人・中小企業経営者を獲得します。AIにも引用されやすい「税制改正解説」「節税対策FAQ」コンテンツを定期発信します。" },
                  { t: "弁護士・法律事務所", b: "離婚・相続・交通事故・労働問題・刑事弁護など専門分野別のページを整備します。「○○区 弁護士 無料相談」「交通事故 弁護士 ○○市」など、ユーザーが緊急性の高い場面で検索するキーワードへの対応が重要です。無料相談の予約しやすい導線設計がCV率に直結します。" },
                  { t: "司法書士・行政書士・社労士", b: "「会社設立 行政書士 ○○区」「相続登記 司法書士 ○○市」「36協定 社労士 ○○区」など手続き別・業務別のSEOキーワードでコンテンツを整備します。手続きの流れと費用目安を丁寧に掲載することで、「初めての手続き」という不安を抱えた見込み顧客の問い合わせを促進します。" },
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
              士業・専門家サービス向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "AIO対策・コンテンツSEO", b: "ChatGPT・Geminiで引用される事務所サイトの構造を設計します。FAQ整備・著者情報の構造化・専門解説コンテンツの継続制作でAI検索からの指名獲得と自然検索流入の両方を強化します。" },
                { t: "士業向けホームページ・LP制作", b: "資格・実績・専門分野・費用の目安・無料相談導線を最適配置した信頼重視のホームページを制作します。E-E-A-T対応設計で専門家としての権威性をWebで可視化します。" },
                { t: "コンテンツSEO・専門記事制作", b: "「○○区 税理士 個人事業主」「相続 手続き ○○市 費用」など顧客が検索するキーワードに対応した専門コンテンツを企画・制作します。月次の記事制作から構造化データ実装まで対応します。" },
                { t: "MEO対策・口コミ管理", b: "地域名での検索でGoogleマップ上位に表示される事務所を目指します。既存顧客からの口コミ獲得フロー設計・全口コミへの返信文面作成・GBP最適化を一括してサポートします。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="士業・専門家サービスのWeb集客に関するよくある質問" bgColor="#f9f8f5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="士業・専門家サービスのWeb集客ご相談"
          body="税理士・司法書士・行政書士・社労士・弁護士などのSEO・MEO・AIO対策・ホームページ制作をご相談ください。専門家としての信頼を構築し、顧問先・相談案件の継続獲得につながる集客を設計します。"
        />
      </main>
      <Footer />
    </>
  );
}
