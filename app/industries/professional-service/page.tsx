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
    a: "SEO（全国向けキーワード）・AIO（AI引用対策）・YouTubeやPodcastでの情報発信が有効です。「○○分野のスペシャリスト」として特定の専門分野で全国に認知されることで、地理的な制約を超えた顧問先・相談依頼を獲得できます。オンライン相談対応を明記することで、地理的な制約を超えた集客が実現します。",
  },
  {
    q: "紹介依存からWebからの新規獲得へ移行するにはどうすれば？",
    a: "まずGoogleビジネスプロフィールの整備とホームページの問い合わせ導線改善から始めます。既存顧客に口コミ投稿を依頼してGoogleマップの評価を高め、SEOコンテンツで「○○ 相談 ○○区」の検索に対応します。段階的に紹介以外の流入経路を広げることで半年〜1年で体制が整い、安定した新規獲得につながります。",
  },
  {
    q: "士業のWeb集客でコンテンツSEOはどの程度重要ですか？",
    a: "非常に重要です。税制改正・法改正・手続きガイドなど専門知識の解説記事は、顧客の課題解決と同時にE-E-A-T評価を高めます。AI検索（AIO）でも専門性の高いコンテンツが引用されやすく、長期的な集客基盤になります。特に士業は「信頼性」が選ばれる理由の核心であり、コンテンツによる専門性の可視化が最も効果的な差別化手段です。",
  },
  {
    q: "弁護士・税理士のホームページで表現上の注意点はありますか？",
    a: "弁護士法・税理士法・景品表示法により、「費用が安い」「相談件数○○件以上」「勝訴率○○%」などの優良誤認を招く表現や、「○○分野では当事務所が一番」といった根拠のない優位性表現は禁止されています。実績や口コミの掲載は守秘義務の範囲内で行い、表現は事実に基づく客観的な記述に限定することが重要です。",
  },
  {
    q: "士業のSEO対策で最も重要なページ設計とは何ですか？",
    a: "トップページ・業務別ランディングページ（相続、会社設立、離婚など）・代表者プロフィールページ・料金目安ページ・FAQ集の5種類が集客の核心です。各業務ページには「地域名×業務種別」の具体的なキーワードを盛り込み、ページ末尾に該当業務に特化したFAQを設置することでロングテール検索を広く獲得できます。",
  },
  {
    q: "個人事務所と法人事務所では集客戦略に違いはありますか？",
    a: "個人事務所は「代表者への個人的な信頼」が選ばれる最大の理由のため、代表者のストーリー・専門分野への想い・顔写真を前面に出すホームページが有効です。法人事務所は組織の安定性・複数スタッフによる対応力・実績の幅広さを訴求することが差別化になります。どちらも「担当者が見える」情報設計は共通して重要です。",
  },
  {
    q: "相続・離婚・企業法務など案件特化のランディングページは必要ですか？",
    a: "非常に有効です。「葛飾区 相続税 税理士」「離婚 弁護士 ○○区 費用」など具体的な業務×地域名で検索するユーザーは相談意欲が高く、専用ページへの直接誘導でCV率が大きく向上します。各ランディングページには費用目安・相談の流れ・FAQを含め、初回相談への心理的障壁を下げる設計を行います。",
  },
  {
    q: "士業のGoogleビジネスプロフィール（GBP）はどう設定すればいいですか？",
    a: "カテゴリは「税理士事務所」「法律事務所」など最も具体的なものを選択します。サービス地域は事務所所在地を含む市区町村単位で設定し、写真には代表者の顔写真・事務所外観・応接室を掲載します。業務内容の説明文には対応地域名と主な取扱業務を自然な文章で含め、定期投稿（週1〜2回）で活動頻度をアピールします。",
  },
  {
    q: "顧問契約獲得のためのコンテンツ設計にはどんな方法がありますか？",
    a: "顧問契約は「継続的に相談できる安心感」と「費用対効果」が判断基準です。「顧問契約とは何か・月額の目安・含まれるサービス内容」をわかりやすくまとめたページを設け、「法改正をキャッチアップしてもらえる」「都度相談のコストが下がる」というメリットを具体的に訴求します。顧問先の声（守秘義務の範囲内）も有効です。",
  },
  {
    q: "士業のホームページに「料金・費用」は掲載すべきですか？",
    a: "掲載することを強く推奨します。費用が不透明な事務所は問い合わせ前の段階で離脱されるリスクが高く、「目安」や「モデルケース」として掲載するだけで問い合わせ率が向上します。「相続税申告の費用目安（遺産総額による）」「会社設立の費用内訳」など業務別の料金ページを設けることがSEO効果と信頼感の両方を高めます。",
  },
  {
    q: "士業事務所のホームページリニューアルの費用はどのくらいかかりますか？",
    a: "士業向けホームページのリニューアルは、規模・ページ数・機能によって費用は異なります。サイプレスでは初回の無料相談で現状のサイト課題を診断し、目標とする集客成果に合わせた最適な制作プランをご提案しています。制作後のSEO・MEO運用サポートも含めたトータルの費用感をご説明します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識と手法" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "士業向け検索上位表示" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "信頼性の高い事務所サイト" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "相談申込みを最大化するLP" },
  { href: "/aio/organization-data", label: "Organization構造化データ", desc: "AIO対策の組織情報設計" },
  { href: "/seo/content-seo", label: "コンテンツSEOとは", desc: "専門記事で長期集客を構築" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO費用相場と選び方" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/industries/real-estate", label: "不動産会社のWeb集客", desc: "不動産業の集客支援" },
  { href: "/knowledge/content-marketing", label: "コンテンツマーケティング入門", desc: "専門家向けコンテンツ戦略" },
  { href: "/seo/structured-data", label: "構造化データとは", desc: "FAQSchema・BreadcrumbList実装" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "地域密着の士業MEO対策" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "士業向けサイト制作" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索（ChatGPT等）への最適化" },
  { href: "/knowledge/eeat", label: "E-E-ATとは", desc: "専門家サイトのSEO信頼性指標" },
  { href: "/industries/consulting", label: "コンサルタントのWeb集客", desc: "コンサル系の集客支援" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
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
                士業のWebサイトは「信頼感」「専門性」「親近感」の三要素を同時に表現することが重要です。代表者の顔写真・経歴・専門分野への取り組み姿勢をファーストビューに配置し、「この先生は信頼できる」という第一印象を確立します。清潔感のある配色とわかりやすい情報設計が、離脱率の低下と問い合わせ率の向上に直結します。
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

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              集客フロー・実装ステップ
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "現状診断・競合調査",
                  b: "既存サイトのSEO評価・GBPの状態・競合事務所のWebポジションを診断します。どのキーワードで上位を狙えるか、どのページが改善優先かを明確にすることが、効率的な集客改善の起点です。",
                },
                {
                  n: "02",
                  t: "キーワード設計・ターゲット定義",
                  b: "「地域名×業務種別×顧客課題」の組み合わせでキーワードマップを作成します。個人向け・法人向け・エリア別のターゲット顧客を整理し、各ページが対応すべきキーワードを事前に割り当てます。",
                },
                {
                  n: "03",
                  t: "GBP（Googleビジネスプロフィール）最適化",
                  b: "カテゴリ・サービス地域・事務所写真・代表者写真・業務説明文を整備します。既存顧客への口コミ依頼フローを設計し、MEO上位表示に必要な口コミ件数と評価の向上を目指します。",
                },
                {
                  n: "04",
                  t: "ホームページのSEO基盤整備",
                  b: "タイトルタグ・metaディスクリプション・見出し構造・内部リンク・構造化データ（FAQSchema・BreadcrumbList）をすべてのページで正しく実装します。技術的SEOの土台を整えることが検索評価の前提です。",
                },
                {
                  n: "05",
                  t: "業務別ランディングページの制作",
                  b: "「相続税申告」「会社設立」「離婚相談」など業務ごとの専用ページを作成します。各ページには対応地域・費用目安・相談の流れ・FAQを盛り込み、検索ユーザーが求める情報をすべてそのページで完結させます。",
                },
                {
                  n: "06",
                  t: "著者情報・E-E-AT対策の実装",
                  b: "代表者・執筆者のプロフィールページを設け、資格・所属団体・専門分野・経歴を構造化データとしてマークアップします。YMYLカテゴリで重要視されるE-E-A-T評価の向上がSEOと信頼獲得を同時に実現します。",
                },
                {
                  n: "07",
                  t: "専門コンテンツ（コラム・FAQ）の継続制作",
                  b: "月2〜4本のペースで顧客の疑問に答える解説コンテンツを制作します。税制改正・法改正・手続きガイドなどの専門記事はE-E-A-T評価を高め、AI検索（AIO）での引用にもつながります。",
                },
                {
                  n: "08",
                  t: "AIO（AI検索）対策の実装",
                  b: "FAQ構造の整備・Organization/Person構造化データの実装・要点を整理した見出し設計を行います。ChatGPT・Gemini・Perplexityで「○○の専門家」として引用されるための情報設計を施します。",
                },
                {
                  n: "09",
                  t: "問い合わせ導線のCRO（転換率改善）",
                  b: "フォームの入力項目を3項目以内に絞り、LINE相談・電話ボタンをモバイルで固定表示します。「30分無料相談」などの低ハードルCTAをページ内複数箇所に設置し、相談への心理的障壁を最小化します。",
                },
                {
                  n: "10",
                  t: "データ分析・改善サイクルの確立",
                  b: "Google Search ConsoleとGA4で流入キーワード・問い合わせ数・CVRを月次で確認します。順位変動・ユーザー行動データを分析し、コンテンツ改善・新規ページ追加の優先順位を継続的に見直します。",
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "40px" }}>
              士業・専門家サービスのWeb集客では、以下のKPIを定期的にモニタリングすることで施策の効果を正確に把握し、改善サイクルを回します。
            </p>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "0px" }}>
              {[
                {
                  name: "Googleマップ表示回数・経路案内クリック数",
                  where: "GBPインサイト",
                  desc: "MEO対策の効果を示す指標で、ローカルパック（地図上位3件）への表示回数と、そこからの問い合わせ・電話クリック数を計測します。",
                },
                {
                  name: "自然検索流入数（業務別キーワード）",
                  where: "Google Search Console",
                  desc: "「相続 税理士 ○○区」など業務特化キーワードからの流入を計測し、コンテンツSEOの貢献度を業務カテゴリ別に把握します。",
                },
                {
                  name: "問い合わせフォーム送信数・LINE登録数",
                  where: "GA4のコンバージョン計測",
                  desc: "Web集客の最終成果であり最重要KPIです。流入経路別（自然検索・GBP・SNS）に分解することで、どのチャネルが相談獲得に貢献しているかが明確になります。",
                },
                {
                  name: "口コミ件数・Googleマップ平均評価",
                  where: "GBPダッシュボード",
                  desc: "MEO順位に直結する指標で、月間の新規口コミ獲得数と累積平均評価スコアをトラッキングします。既存顧客への依頼フロー設計の効果測定にも使います。",
                },
                {
                  name: "業務別ランディングページのCVR",
                  where: "GA4（ページ別目標達成率）",
                  desc: "相続・会社設立・離婚など業務別LPへの流入数に対する問い合わせ転換率を計測します。CVRが低いページはCTA・フォームの改善優先度が高いと判断します。",
                },
                {
                  name: "ターゲットキーワードの検索順位",
                  where: "Google Search Console / 順位計測ツール",
                  desc: "「葛飾区 確定申告 税理士」など主要キーワードの検索順位を月次で追跡し、SEOコンテンツ施策の効果を定量的に確認します。",
                },
                {
                  name: "ページ別直帰率・滞在時間",
                  where: "GA4（エンゲージメント指標）",
                  desc: "士業サイトでは「代表者プロフィール」「料金ページ」「FAQ」の滞在時間が長いほど信頼形成が進んでいるサインです。離脱の多いページを特定して改善します。",
                },
              ].map((kpi, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", margin: 0 }}>{kpi.name}</p>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em", flexShrink: 0 }}>{kpi.where}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", margin: 0 }}>{kpi.desc}</p>
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
                  t: "士業特有の表現規制に精通した設計",
                  b: "弁護士法・税理士法・景品表示法による表現制限を踏まえた上で、法的に適切かつ集客力のあるコンテンツ設計を行います。違反リスクなくSEO・AIO対策を推進できます。",
                },
                {
                  t: "SEO・MEO・AIOをワンストップで対応",
                  b: "ホームページ制作・コンテンツSEO・GBP最適化・AIO（AI検索対策）・構造化データ実装まで、集客に必要なWeb施策をサイプレス一社で対応します。複数社への依頼管理が不要になります。",
                },
                {
                  t: "YMYL領域のE-E-A-T設計ノウハウ",
                  b: "法律・税務・医療などGoogleが特に高い品質基準を求めるYMYL分野のSEO設計に対応しています。著者情報の構造化・資格情報の最適配置・コンテンツ品質の維持で持続的な検索評価を確保します。",
                },
                {
                  t: "月次レポートで成果を可視化",
                  b: "GBP口コミ件数・検索順位・問い合わせ数・CVRをまとめた月次レポートを提供します。施策の効果を数値で確認しながら、次月の優先施策を一緒に決定するサポート体制を整えています。",
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
