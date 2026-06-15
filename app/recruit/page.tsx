import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "採用情報｜Webマーケティング営業 正社員募集｜株式会社サイプレス",
  description:
    "株式会社サイプレスの採用情報。MEO対策・SEO対策・ホームページ制作を提案するWebマーケティング営業（正社員）を募集中。月給35万円以上・年間休日130日・未経験歓迎。東京葛飾区。",
  keywords: [
    "Webマーケティング 営業 求人",
    "MEO 営業 求人",
    "SEO 営業 求人",
    "未経験 Webマーケティング 営業",
    "東京 Webマーケティング 求人",
    "AI マーケティング 営業 正社員",
  ],
  openGraph: {
    title: "採用情報｜Webマーケティング営業 正社員募集｜株式会社サイプレス",
    description: "Webマーケティング営業（正社員）募集。月給35万円以上・年間休日130日・未経験歓迎。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/recruit" },
};

const faqItems = [
  {
    q: "現在、どの職種を募集していますか？",
    a: "現在はWebマーケティング営業職（正社員）のみ募集しています。MEO対策・SEO対策・ホームページ制作・AIO対策・AI活用支援などを中小企業の経営者へ提案する営業ポジションです。マーケターやライター・AIオペレーターは現在募集していません。",
  },
  {
    q: "未経験でも応募できますか？",
    a: "はい、歓迎します。Webマーケティングや営業の経験がなくても、「成長意欲がある」「経営者と対話できる力をつけたい」「しっかり稼ぎたい」という方であればご応募ください。入社後は商材研修・OJT同行を通じてサポートします。",
  },
  {
    q: "月給35万円以上とありますが、未経験でも同額ですか？",
    a: "給与は経験・スキル・面談での評価をもとに決定します。35万円は採用時の最低保証ラインです。成果や経験によって上昇することがあります。詳細は面談時にご案内します。",
  },
  {
    q: "年間休日130日は本当ですか？",
    a: "はい。週休2日（土・日）＋祝日＋年末年始休暇を合計すると130日になります。仕事の成果を出しながらプライベートも充実させることを大切にしています。詳細は面談時にご確認ください。",
  },
  {
    q: "選考フローを教えてください。",
    a: "お問い合わせフォームよりエントリー→書類確認→面談（1〜2回）→内定、という流れです。オンライン面談にも対応しています。書類選考から1週間以内に連絡しています。",
  },
  {
    q: "どんな営業スタイルですか？テレアポや飛び込みはありますか？",
    a: "提案型の法人営業がメインです。中小企業の経営者に対して、集客課題をヒアリングしながらMEO・SEO・HP制作などを提案します。テレアポや飛び込みの比重は入社後の状況により異なりますが、関係構築を重視した営業スタイルです。",
  },
  {
    q: "ノルマはありますか？",
    a: "月次の目標数字は設定します。ただし、罰則的なノルマではなく「成果次第で報酬が上がる環境」として機能しています。目標達成に向けてチームで支援します。",
  },
  {
    q: "勤務地・勤務形態はどうなりますか？",
    a: "基本は東京都葛飾区（本社）での勤務です。外回り営業のため、首都圏エリアを中心に活動します。状況に応じてリモート対応も相談可能です。",
  },
  {
    q: "入社後の研修・サポートについて教えてください。",
    a: "入社後2週間は商材研修（MEO・SEO・ホームページ・AIOの基礎）、その後1か月はロープレ・トーク練習、OJT同行営業と段階的にスキルアップできる環境です。一人立ちまで先輩がサポートします。",
  },
  {
    q: "転勤はありますか？",
    a: "現時点では転勤の予定はありません。東京都葛飾区を拠点に活動します。",
  },
  {
    q: "副業は可能ですか？",
    a: "業務に支障がなく、競合他社への情報漏えいリスクがない副業であれば相談可能です。詳細は面談時にご確認ください。",
  },
  {
    q: "エントリーから内定までの期間はどれくらいですか？",
    a: "平均2〜3週間です。書類確認後、できるだけ早めにご連絡します。急ぎの方はエントリー時にご記入ください。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp" },
    { "@type": "ListItem", position: 2, name: "採用情報", item: "https://www.cypress-all.co.jp/recruit" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RecruitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", position: "relative", paddingTop: "128px", paddingBottom: "72px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.png"
              alt="株式会社サイプレス採用 チームミーティング"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.18 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>採用情報</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Careers</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(30px,4.5vw,52px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              採用情報
            </h1>
            <p style={{ fontSize: "17px", lineHeight: "1.9", color: "rgba(255,255,255,0.75)", maxWidth: "560px", marginBottom: "12px" }}>
              現在募集しているのは<strong style={{ color: "#ffffff" }}>Webマーケティング営業（正社員）</strong>のみです。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.6)", maxWidth: "540px", marginBottom: "40px" }}>
              MEO対策・SEO対策・ホームページ制作などのWeb集客商材を、中小企業の経営者へ提案する営業職です。
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                href="/recruit/sales"
                style={{
                  background: "#ffffff",
                  color: "#0d1b2a",
                  padding: "14px 32px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                Webマーケティング営業の詳細を見る
              </Link>
              <Link
                href="/contact"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "#ffffff",
                  padding: "14px 32px",
                  fontSize: "14px",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                エントリーはこちら
              </Link>
            </div>
          </div>
        </section>

        {/* ── 1. 現在の募集職種 ──────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Open Positions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              現在の募集職種
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "40px" }}>
              現在募集しているのは営業職のみです。マーケティング職・ライター・AIオペレーターは現在募集していません。
            </p>
            <Link
              href="/recruit/sales"
              style={{ display: "block", borderTop: "1px solid #e8e4dc", borderBottom: "1px solid #e8e4dc", padding: "32px 0", textDecoration: "none" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>
                    Webマーケティング営業（正社員）
                  </p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "560px", marginBottom: "16px" }}>
                    MEO対策・SEO対策・ホームページ制作・AIO対策を中小企業の経営者へ提案する営業職です。月給35万円以上・年間休日130日。未経験歓迎。
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["月給35万円以上", "年間休日130日", "正社員", "未経験歓迎", "提案型営業"].map((tag) => (
                      <span key={tag} style={{ fontSize: "11px", padding: "4px 12px", background: "#e8e4dc", color: "#374151", borderRadius: "100px" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "#9ca3af", fontSize: "20px", marginLeft: "24px", flexShrink: 0 }}>→</span>
              </div>
            </Link>
            <p style={{ fontSize: "13px", color: "#9ca3af", marginTop: "24px" }}>
              ※ その他の職種（エンジニア・デザイナー・コンサルタント等）は現在募集しておりません。
            </p>
          </div>
        </section>

        {/* ── 2. サイプレスで営業職を募集する理由 ────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why We Recruit</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              サイプレスで営業職を募集する理由
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              私たちは「稼げて・休めて・成長できる」環境を本気でつくろうとしています。スタートアップとして成長途上にあるからこそ、
              一人ひとりが事業に直接貢献でき、結果が収入と評価に反映されます。
              大企業の歯車ではなく、自分の動きで会社を変えたいと思う人に向いています。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  n: "01",
                  title: "AI時代に強い商材を扱える",
                  body: "MEO・SEO・AIO（AI検索対策）・ホームページ制作という成長領域の商材を扱います。「AI時代に消えない営業スキル」を身につけられる環境です。",
                },
                {
                  n: "02",
                  title: "中小企業の経営者と直接対話できる",
                  body: "飲食店・美容室・士業・建設業など、リアルな中小企業の経営者と向き合う提案営業です。経営課題をヒアリングし、解決策を提示するスキルが磨かれます。",
                },
                {
                  n: "03",
                  title: "稼ぎながら休める",
                  body: "月給35万円以上・年間休日130日を実現しています。「しっかり稼いで、しっかり休む」という考え方が根本にあります。",
                },
                {
                  n: "04",
                  title: "スタートアップの一員として成長できる",
                  body: "設立まもない会社だからこそ、自分の行動が会社の成長に直結します。チームリーダー・マネジメントなど、早期にキャリアアップできる環境です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "32px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "17px", fontWeight: 700, color: "#0d1b2a", marginBottom: "12px" }}>{item.title}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. 月給35万円以上・年間休日130日の考え方 ──────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Compensation</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "48px" }}>
              月給35万円以上・年間休日130日の考え方
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div style={{ padding: "36px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "16px" }}>COMPENSATION</p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>月給35万円以上</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>採用時の最低保証ライン</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                  {[
                    "35万円は入社時の最低保証額です",
                    "経験・スキル・実績によって変動します",
                    "成果次第でさらに上を目指せます",
                    "「必ず○万円稼げる」という保証ではありません",
                  ].map((txt) => (
                    <p key={txt} style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", marginBottom: "10px", paddingLeft: "16px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c4b89a" }}>–</span>
                      {txt}
                    </p>
                  ))}
                </div>
              </div>
              <div style={{ padding: "36px", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "16px" }}>HOLIDAYS</p>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>年間休日130日</p>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>週休2日 ＋ 祝日 ＋ 年末年始</p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                  {[
                    "完全週休2日（土・日）",
                    "国民の祝日",
                    "年末年始休暇（12/30〜1/3）",
                    "有給休暇（法定通り付与）",
                  ].map((txt) => (
                    <p key={txt} style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", marginBottom: "10px", paddingLeft: "16px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c4b89a" }}>–</span>
                      {txt}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 未経験からWebマーケティング営業になる流れ ────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Career Path</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              未経験からWebマーケティング営業になる流れ
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  step: "STEP 01",
                  period: "入社直後 〜 2週間",
                  title: "商材・基礎知識の研修",
                  body: "MEO対策・SEO対策・ホームページ制作・AIO対策の基礎を学びます。「なぜ中小企業にこの商材が必要か」を理解するための座学研修です。",
                },
                {
                  step: "STEP 02",
                  period: "2週間〜 1か月",
                  title: "提案トーク・ロープレ練習",
                  body: "実際の商談場面を想定したロープレを繰り返します。お客様の課題を聞き出す質問力・解決策を提案するトーク力を習得します。",
                },
                {
                  step: "STEP 03",
                  period: "1か月〜 2か月",
                  title: "OJT同行営業",
                  body: "先輩営業との同行営業でリアルな商談を体験します。提案・クロージング・契約後フォローの流れを実践で習得します。",
                },
                {
                  step: "STEP 04",
                  period: "2か月以降",
                  title: "単独営業・目標達成へ",
                  body: "一人立ちして独立した営業活動をスタートします。目標数字に向けて、チームのサポートを受けながら成果を追います。",
                },
                {
                  step: "STEP 05",
                  period: "成果に応じて",
                  title: "チームリーダー・マネジメントへ",
                  body: "成果を積み重ねることで、チームリーダーやマネジメントポジションへのキャリアアップが可能です。",
                },
              ].map((s, i) => (
                <div
                  key={s.step}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "28px 0",
                    borderTop: i === 0 ? "1px solid #e8e4dc" : "none",
                    borderBottom: "1px solid #e8e4dc",
                  }}
                >
                  <div style={{ minWidth: "120px", flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", letterSpacing: "0.15em", color: "#c4b89a", marginBottom: "4px" }}>{s.step}</p>
                    <p style={{ fontSize: "11px", color: "#9ca3af" }}>{s.period}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{s.title}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. 扱う商材 ──────────────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Products</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              扱う商材
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "600px", marginBottom: "48px" }}>
              中小企業のWeb集客に特化した4つの商材を扱います。どれも経営者にとって「今すぐ必要な課題解決策」として提案しやすい商材です。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  tag: "MEO対策",
                  title: "Googleマップ上位表示支援",
                  body: "「近くの○○」などの地域検索でGoogleマップ上位に表示させるための対策。飲食店・美容室・医院・整体院などの地域ビジネスに即効性が高い商材です。",
                  detail: "提案しやすい業種：飲食店・美容室・歯科・整体・小売店など",
                },
                {
                  tag: "SEO対策",
                  title: "Google検索の自然検索流入増加",
                  body: "Googleの検索結果に自社サイトを上位表示させるための施策。キーワード選定・コンテンツ作成・内部対策を総合的に支援します。",
                  detail: "提案しやすい業種：士業・コンサル・EC・B2Bサービス業など",
                },
                {
                  tag: "ホームページ制作",
                  title: "集客型Webサイト制作",
                  body: "見た目だけでなく、集客・SEO・問い合わせ導線まで考慮した本格的なWebサイトを制作します。「サイトはあるけど問い合わせが来ない」という会社への提案が刺さります。",
                  detail: "提案しやすい業種：全業種（特にリニューアル需要がある会社）",
                },
                {
                  tag: "AIO対策",
                  title: "AI検索エンジン対策",
                  body: "ChatGPT・Gemini・Perplexityなどのアンサーエンジンに自社が引用・紹介されるようにするための最新対策。2025年以降に急需要が高まっている商材です。",
                  detail: "提案しやすい業種：専門性の高い業種・情報発信をしたい企業全般",
                },
              ].map((item) => (
                <div key={item.tag} style={{ padding: "28px", border: "1px solid #e8e4dc" }}>
                  <span style={{ display: "inline-block", fontSize: "11px", padding: "3px 10px", background: "#0d1b2a", color: "#ffffff", marginBottom: "14px" }}>{item.tag}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", marginBottom: "14px" }}>{item.body}</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af" }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. 働き方 ────────────────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Work Style</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              働き方
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {[
                      { label: "雇用形態", value: "正社員（試用期間あり）" },
                      { label: "給与", value: "月給35万円以上（経験・スキルにより変動）" },
                      { label: "勤務地", value: "東京都葛飾区（外回り営業あり）" },
                      { label: "勤務時間", value: "9:00〜18:00（休憩60分）" },
                      { label: "休日", value: "完全週休2日（土・日）＋祝日＋年末年始" },
                      { label: "年間休日", value: "130日" },
                      { label: "有給休暇", value: "法定通り付与" },
                      { label: "社会保険", value: "健康保険・厚生年金・雇用保険・労災保険" },
                      { label: "交通費", value: "全額支給" },
                    ].map((row) => (
                      <tr key={row.label} style={{ borderBottom: "1px solid #e8e4dc" }}>
                        <td style={{ padding: "14px 0", width: "120px", fontSize: "12px", fontWeight: 600, color: "#0d1b2a", verticalAlign: "top" }}>{row.label}</td>
                        <td style={{ padding: "14px 0 14px 16px", fontSize: "13px", color: "#374151", lineHeight: "1.7" }}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  {
                    title: "稼げる × 休める環境",
                    body: "「高収入か、休日か」を選ぶ必要はありません。月給35万円以上・年間休日130日という水準を標準として設定しています。",
                  },
                  {
                    title: "AI時代に強い営業スキルが身につく",
                    body: "MEO・SEO・AIO・AI活用支援という成長領域の商材を扱い、提案力・経営者対応力を磨ける環境です。",
                  },
                  {
                    title: "成長とキャリアの選択肢が広い",
                    body: "成果次第で高収入を狙えます。チームリーダー・マネジメントなど、複数のキャリアパスを用意しています。",
                  },
                ].map((item) => (
                  <div key={item.title} style={{ padding: "24px", background: "#ffffff", border: "1px solid #e8e4dc" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. 営業職詳細への導線 ────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>More Details</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              営業職の詳細を確認する
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "540px", marginBottom: "32px" }}>
              1日の流れ・よくある提案パターン・向いている人・選考で見るポイントなど、さらに詳細な情報は営業職の専用ページでご確認いただけます。
            </p>
            <Link
              href="/recruit/sales"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#0d1b2a",
                color: "#ffffff",
                padding: "16px 36px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Webマーケティング営業の詳細ページへ
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ── 会社情報 ─────────────────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Company Info</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>会社基本情報</h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { label: "会社名", value: "株式会社サイプレス" },
                { label: "代表取締役", value: "織田 春樹" },
                { label: "設立", value: "2026年5月13日" },
                { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                { label: "事業内容", value: "Webマーケティング支援（MEO・SEO・AIO対策）・ホームページ制作・AI活用支援・SNS運用" },
                { label: "お問い合わせ", value: "consulting.meo@gmail.com" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "32px", padding: "14px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ width: "120px", flexShrink: 0, fontSize: "13px", fontWeight: 600, color: "#0d1b2a" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 8. 採用FAQ ────────────────────────────────────────────────────── */}
        <FaqSection items={faqItems} heading="採用についてよくある質問" bgColor="#ffffff" />

        {/* ── 9. エントリー導線 ────────────────────────────────────────────── */}
        <PageContactCTA
          heading="採用エントリー・ご質問はこちら"
          body="営業職の採用に関するご質問・エントリーは、お問い合わせフォームよりお気軽にご連絡ください。オンライン面談にも対応しています。"
        />
      </main>
      <Footer />
    </>
  );
}
