import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "採用情報 | AI×Webマーケティング企業で働く",
  description: "株式会社サイプレスの採用情報。AI×Webマーケティングの成長領域で活躍する仲間を募集。月給40万円以上・フルリモート可・年間休日130日・未経験歓迎。",
  keywords: ["採用情報", "求人", "Webマーケティング", "フルリモート", "未経験歓迎", "株式会社サイプレス"],
  openGraph: {
    title: "採用情報 | 株式会社サイプレス",
    description: "AI×Webマーケティングの成長領域で活躍する仲間を募集中。月給40万円以上・フルリモート可。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/recruit" },
};

const POSITIONS = [
  {
    href: "/recruit/sales",
    title: "Webマーケティング営業",
    desc: "中小企業への提案営業。月給40万円以上。未経験歓迎。MEO・SEO・AIO・Web制作を提案する営業職です。",
  },
  {
    href: "/recruit/marketing",
    title: "マーケター職",
    desc: "MEO・SEO・AIO・SNSの実務担当。クライアントの集客改善を横断的に担うマーケターポジションです。",
  },
];

const CONDITIONS = [
  { label: "月給", value: "40万円以上" },
  { label: "年間休日", value: "130日（完全週休2日制）" },
  { label: "勤務形態", value: "フルリモート可" },
  { label: "社会保険", value: "完備" },
  { label: "入社後", value: "OJTによる業務研修あり" },
];

const REASONS = [
  {
    num: "01",
    title: "AI×Webマーケティングという成長領域",
    body: "MEO・SEO・AIOは今後も需要が高まり続ける分野です。AIを日常的に活用しながら、デジタルマーケティングの実務スキルを磨ける環境があります。",
  },
  {
    num: "02",
    title: "経営者への提案力が身につく",
    body: "クライアントの多くは中小企業の経営者です。経営課題を理解して最適な施策を提案するコンサルスキルが、実務を通じて自然に鍛えられます。",
  },
  {
    num: "03",
    title: "成果を正当に評価する仕組み",
    body: "年功序列ではなく、実績と貢献度に基づいた昇給制度を採用しています。努力と成果がきちんと反映される環境です。",
  },
  {
    num: "04",
    title: "柔軟な働き方",
    body: "フルリモート対応・フレックスタイム制・年間休日130日。場所と時間に縛られず、自分のリズムで仕事に取り組める環境を整えています。",
  },
];

const FAQ_ITEMS = [
  {
    q: "Webマーケティング未経験でも応募できますか？",
    a: "はい、歓迎します。入社後のOJTと研修プログラムで、基礎から業務を習得できる環境を整えています。意欲と前向きな姿勢が最も重要です。",
  },
  {
    q: "選考フローを教えてください。",
    a: "書類選考 → カジュアル面談（オンライン） → 一次面接 → 内定 という流れです。カジュアル面談は選考ではなく、会社を知っていただく場として設けています。",
  },
  {
    q: "フルリモートとはどのような形ですか？",
    a: "自宅や任意の場所からの勤務が可能です。チームのコミュニケーションはSlackとオンラインミーティングで行います。東京都内への出張が発生する場合があります。",
  },
  {
    q: "副業はできますか？",
    a: "業務に支障がなく、競合他社への関与でない場合は副業を認めています。事前申請制です。",
  },
  {
    q: "営業職にノルマはありますか？",
    a: "厳しいペナルティを伴うノルマは設けていません。目標数字は設定しますが、達成に向けてチームでサポートする体制があります。",
  },
];

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        {/* ===== Hero ===== */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Recruit
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(30px, 4.5vw, 58px)", color: "#0F172A" }}
            >
              採用情報
            </h1>
            <p className="text-[17px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AI×Webマーケティングという成長領域で、中小企業の集客支援に取り組む仲間を募集しています。働く環境と事業の詳細をご確認ください。
            </p>
          </div>
        </section>

        {/* ===== Breadcrumb ===== */}
        <nav className="py-4" style={{ borderTop: "1px solid #F0EDE6", borderBottom: "1px solid #F0EDE6", background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <ol className="flex items-center gap-2 text-[12px]" style={{ color: "#9CA3AF" }}>
              <li><Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link></li>
              <li>/</li>
              <li style={{ color: "#0F172A" }}>採用情報</li>
            </ol>
          </div>
        </nav>

        {/* ===== What it Means to Work at Cypress ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                About Us
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                サイプレスで働くということ
              </h2>
              <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                株式会社サイプレスは、AI×Webマーケティングを通じて中小企業の集客を変えることをミッションとした会社です。MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援という6つの領域を横断しながら、クライアントの事業成長を支援しています。日々の業務を通じて、この6領域にまたがる実践的なデジタルマーケティングスキルが身につきます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                チームは少数精鋭で、一人ひとりが裁量を持って動きます。AIツールを積極的に業務に取り込み、効率を上げながら提案の質を高める文化があります。経営者と直接向き合い、課題解決から成果確認まで一気通貫で関わることのできる環境は、自分の仕事が事業に直結している実感を生みます。
              </p>
            </div>
          </div>
        </section>

        {/* ===== Positions ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Open Positions
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                募集職種
              </h2>
            </div>
            <div>
              {POSITIONS.map((pos) => (
                <Link
                  key={pos.href}
                  href={pos.href}
                  className="group block py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div className="grid md:grid-cols-[240px_1fr_auto] gap-4 md:gap-8 items-start">
                    <h3 className="font-bold text-[17px] group-hover:underline" style={{ color: "#0F172A" }}>
                      {pos.title}
                    </h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                      {pos.desc}
                    </p>
                    <span className="text-[13px] font-medium shrink-0" style={{ color: "#6B7280" }}>
                      詳しく見る →
                    </span>
                  </div>
                </Link>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ===== Work Environment ===== */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Conditions
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                働く環境
              </h2>
            </div>
            <div className="max-w-2xl">
              {CONDITIONS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between py-5"
                  style={{ borderBottom: "1px solid #F0EDE6" }}
                >
                  <span className="text-[14px]" style={{ color: "#9CA3AF" }}>{item.label}</span>
                  <span className="font-semibold text-[15px]" style={{ color: "#0F172A" }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/recruit/environment" className="text-[13px] hover:underline" style={{ color: "#6B7280" }}>
                職場環境・制度の詳細を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Why You Grow ===== */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Growth
              </p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                成長できる理由
              </h2>
            </div>
            <div>
              {REASONS.map((item) => (
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

        {/* ===== Sub Nav ===== */}
        <section className="py-16" style={{ background: "#FFFFFF", borderTop: "1px solid #F0EDE6" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#9CA3AF" }}>
              Recruit Menu
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {[
                { href: "/recruit/sales", label: "Webマーケティング営業", desc: "提案営業職の詳細" },
                { href: "/recruit/marketing", label: "マーケター職", desc: "実務担当の詳細" },
                { href: "/recruit/environment", label: "職場環境・働き方", desc: "制度・リモート" },
                { href: "/recruit/career", label: "キャリアパス", desc: "成長ステップ" },
                { href: "/recruit/faq", label: "採用FAQ", desc: "よくある質問" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group py-4 pr-6 hover:text-[#0F172A] transition-colors"
                  style={{ borderBottom: "1px solid #E8E4DC", color: "#374151" }}
                >
                  <p className="text-[13px] font-medium mb-0.5 group-hover:underline">{l.label}</p>
                  <p className="text-[12px]" style={{ color: "#9CA3AF" }}>{l.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <FaqSection items={FAQ_ITEMS} heading="採用 よくある質問" bgColor="#F9F8F5" />

        {/* ===== CTA ===== */}
        <PageContactCTA
          heading="採用に関するご質問・ご応募"
          body="採用に関するご質問・ご応募はお問い合わせフォームよりご連絡ください。選考ではなく、まずはカジュアルにお話しすることも可能です。"
        />
      </main>
      <Footer />
    </>
  );
}
