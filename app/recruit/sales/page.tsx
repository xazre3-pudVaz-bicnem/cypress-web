import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "Webマーケティング営業 | 採用情報",
  description: "株式会社サイプレスのWebマーケティング営業職採用情報。中小企業経営者へのMEO・SEO・AIO・Web制作の提案営業。月給40万円以上・フルリモート可・未経験歓迎。",
  keywords: ["Webマーケティング営業", "営業職採用", "フルリモート営業", "未経験歓迎", "株式会社サイプレス"],
  openGraph: {
    title: "Webマーケティング営業 採用情報 | 株式会社サイプレス",
    description: "中小企業経営者へのWebマーケティング提案営業。月給40万円以上・フルリモート可・未経験歓迎。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/recruit/sales" },
};

const JOB_TABLE = [
  { label: "職種", value: "Webマーケティング営業" },
  { label: "雇用形態", value: "正社員" },
  { label: "給与", value: "月給40万円以上（経験・能力による）" },
  { label: "就業時間", value: "10:00〜19:00（フレックス制）" },
  { label: "休日", value: "完全週休2日制・年間休日130日" },
  { label: "勤務地", value: "フルリモート可（東京都内への出張あり）" },
  { label: "応募資格", value: "未経験歓迎（社会人経験3年以上推奨）" },
  { label: "待遇", value: "社会保険完備・交通費支給・書籍購入補助" },
];

const CHARACTERISTICS = [
  {
    num: "01",
    title: "相手の課題を聞き出すことが好きな人",
    body: "押し売りではなく、クライアントの経営課題を丁寧にヒアリングし、最適な解決策を提案するスタイルです。「話を聞く力」が最も重要なスキルです。",
  },
  {
    num: "02",
    title: "デジタルマーケティングに興味がある人",
    body: "Webサイトや検索・SNSがどう集客につながるかに興味があれば、未経験でも意欲的に学べます。好奇心と学習意欲を重視します。",
  },
  {
    num: "03",
    title: "成長意欲がある人",
    body: "成果報酬制度があり、成長を収入に反映できる環境です。「もっとできるようになりたい」という向上心のある方を歓迎します。",
  },
  {
    num: "04",
    title: "自律的に動ける人",
    body: "フルリモート環境のため、自分でスケジュールを管理し、主体的に動ける方に向いています。指示待ちではなく、自分で考えて行動する姿勢が求められます。",
  },
];

const FAQ_ITEMS = [
  {
    q: "営業未経験でも採用されますか？",
    a: "はい。営業経験よりも、コミュニケーション力・学習意欲・人の話を聞く姿勢を重視しています。入社後のOJTで業界知識・提案手法を体系的に学べます。",
  },
  {
    q: "どんなクライアントへの営業ですか？",
    a: "主に中小企業・地域ビジネスの経営者です。飲食・美容・医療・士業・建設業・小売業など幅広い業種の経営者に対し、MEO・SEO・AIO・ホームページ制作・AI活用を提案します。",
  },
  {
    q: "インセンティブ制度はありますか？",
    a: "はい。目標達成状況に応じたインセンティブがあります。高い目標を持ってコミットした分だけ収入に反映される仕組みです。",
  },
  {
    q: "出張の頻度はどのくらいですか？",
    a: "基本的にオンライン商談が中心です。対面が必要な商談や社内ミーティングで月数回程度、東京都内への出張が発生します。",
  },
  {
    q: "入社後の研修はどのような内容ですか？",
    a: "MEO・SEO・AIO・ホームページ制作・AI活用の基礎知識研修、提案資料の作り方、ロールプレイング、先輩社員との同行営業（オンライン）など、実践的な内容でOJTを行います。",
  },
];

export default function SalesRecruitPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Sales Position
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 54px)", color: "#0F172A" }}
            >
              Webマーケティング営業
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              中小企業経営者へのWebマーケティング提案営業。MEO・SEO・AIO・Web制作・AI活用を武器に、集客課題を解決します。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li><Link href="/recruit" className="hover:underline" style={{ color: "#6B7280" }}>採用情報</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>Webマーケティング営業</li>
            </ol>
          </div>
        </nav>

        {/* ===== Job Description ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Job Description
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                仕事内容
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                中小企業・地域ビジネスの経営者に対して、Webマーケティングを通じた集客改善を提案する営業職です。MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援という6つのサービスラインナップから、クライアントの課題に合わせた最適な施策を提案します。
              </p>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                新規顧客開拓と既存顧客のフォローが主な業務です。商談はオンラインが中心で、ヒアリング・提案・契約・サービス開始後のフォローアップまで一貫して担当します。「この会社のおかげで集客が変わった」という成果をクライアントと一緒に作り上げる仕事です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                スクリプト通りに話す営業ではありません。経営者の事業課題を深く理解し、データと施策をわかりやすく伝えるコンサルティング型の提案スタイルです。未経験から入社し、3〜6ヶ月で独り立ちできる研修体制を整えています。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Characteristics ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Ideal Candidate
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                求める人物像
              </h2>
            </div>
            <div>
              {CHARACTERISTICS.map((item) => (
                <div
                  key={item.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== Job Table ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Requirements
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                募集要項
              </h2>
            </div>
            <div className="max-w-2xl">
              {JOB_TABLE.map((row) => (
                <div
                  key={row.label}
                  className="flex gap-8 py-5"
                  style={{ borderBottom: "1px solid #F0EDE6" }}
                >
                  <dt className="text-[13px] shrink-0 w-24" style={{ color: "#9CA3AF" }}>{row.label}</dt>
                  <dd className="text-[14px] leading-relaxed" style={{ color: "#374151" }}>{row.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="Webマーケティング営業職 よくある質問" bgColor="#F9F8F5" />

        {/* ===== Related ===== */}
        <RelatedPages
          links={[
            { href: "/recruit", label: "採用情報トップ", desc: "募集職種一覧" },
            { href: "/recruit/marketing", label: "マーケター職", desc: "実務担当の詳細" },
            { href: "/recruit/career", label: "キャリアパス", desc: "成長ステップ" },
            { href: "/recruit/environment", label: "職場環境・働き方", desc: "制度・リモート" },
          ]}
        />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="Webマーケティング営業職へのご応募"
          body="採用に関するご質問・ご応募はお問い合わせフォームよりご連絡ください。まずはカジュアルにお話しすることも歓迎しています。"
        />
      </main>
      <Footer />
    </>
  );
}
