import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BASE = "https://www.cypress-all.co.jp";
const URL = `${BASE}/privacy-policy`;

export const metadata: Metadata = {
  title: "プライバシーポリシー｜株式会社サイプレス",
  description:
    "株式会社サイプレスの個人情報保護方針。取得する情報、利用目的、提携研修会社への第三者提供と本人同意、安全管理措置、開示請求の手続きについて定めています。",
  alternates: { canonical: URL },
  openGraph: {
    title: "プライバシーポリシー｜株式会社サイプレス",
    description: "株式会社サイプレスの個人情報保護方針。",
    locale: "ja_JP",
    type: "website",
    url: URL,
  },
};

const LAST_UPDATED = "2026年7月10日";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "プライバシーポリシー", item: URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL,
  url: URL,
  name: "プライバシーポリシー",
  description: "株式会社サイプレスの個人情報保護方針。",
  inLanguage: "ja",
  isPartOf: { "@id": `${BASE}/#website` },
  publisher: { "@id": `${BASE}/#organization` },
};

interface Section {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  note?: string;
}

const SECTIONS: Section[] = [
  {
    heading: "1. 基本方針",
    paragraphs: [
      "株式会社サイプレス（以下「当社」といいます）は、お客様の個人情報を適切に保護することが事業活動の基本であると考えます。個人情報の保護に関する法律その他の関係法令を遵守し、以下の方針に基づいて個人情報を取り扱います。",
    ],
  },
  {
    heading: "2. 取得する個人情報",
    paragraphs: [
      "当社は、お問い合わせフォームその他の方法を通じて、以下の情報を取得する場合があります。",
    ],
    list: [
      "お名前・ご担当者名",
      "会社名・団体名",
      "メールアドレス",
      "電話番号（お客様が任意でご提供いただいた場合）",
      "お問い合わせ種別およびお問い合わせ内容",
      "ウェブサイトの閲覧履歴・アクセス解析により取得する情報（個人を特定しない形式）",
    ],
  },
  {
    heading: "3. 利用目的",
    paragraphs: ["当社は、取得した個人情報を以下の目的で利用します。"],
    list: [
      "お問い合わせ・ご相談への回答および連絡のため",
      "サービスのご提案・お見積りの提示のため",
      "契約の締結および履行のため",
      "サービスの提供・運用・保守および品質改善のため",
      "研修導入に関するご相談について、提携する研修会社をご紹介するため（本人の同意を得た場合に限ります）",
      "当社サービスに関するご案内をお送りするため",
      "採用選考および採用活動のため",
      "統計データの作成（個人を特定できない形式に加工します）",
    ],
  },
  {
    heading: "4. 第三者提供について",
    paragraphs: [
      "当社は、次のいずれかに該当する場合を除き、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することはありません。",
    ],
    list: [
      "ご本人の同意がある場合",
      "法令に基づく場合",
      "人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき",
      "国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき",
    ],
  },
  {
    heading: "5. 提携研修会社への情報の共有",
    paragraphs: [
      "当社は、リスキリング研修・AI研修・DX研修・Webマーケティング研修などの研修導入に関するご相談について、実績ある提携研修会社をご紹介する窓口業務を行っています。ご紹介にあたり、お問い合わせいただいた情報の一部を提携研修会社へ共有する必要があります。",
      "この共有は、お問い合わせフォームに設けた同意欄にチェックをいただき、ご本人の同意を得た場合に限り行います。同意をいただかない場合、提携研修会社へ情報を共有することはありません。その場合も、当社からのご返信は行います。",
      "なお、当社は研修を実施する会社ではなく、また助成金の申請代行および社会保険労務士業務を行うものではありません。研修の実施・契約は提携研修会社が、助成金の申請手続きは申請企業ご自身または社会保険労務士等の専門家が行います。",
    ],
  },
  {
    heading: "6. 提携研修会社へ共有する情報の範囲と利用目的",
    paragraphs: ["ご同意をいただいた場合、当社が提携研修会社へ共有する情報の範囲および共有先での利用目的は以下のとおりです。"],
    list: [
      "共有する情報：会社名、ご担当者名、連絡先（メールアドレス・電話番号）、お問い合わせ内容",
      "共有の手段：電子メールまたは書面",
      "共有先：当社が研修の紹介について提携している研修会社",
      "共有先での利用目的：研修内容のご提案、日程・費用等のご連絡、研修の実施に関する調整",
    ],
    note: "共有された情報は、上記の利用目的の範囲を超えて利用されることはありません。ご本人からのお申し出により、提携研修会社への情報の共有を停止することができます。",
  },
  {
    heading: "7. 業務委託先への提供",
    paragraphs: [
      "当社は、利用目的の達成に必要な範囲内において、個人情報の取り扱いの全部または一部を外部に委託する場合があります。この場合、当社は委託先に対して必要かつ適切な監督を行います。",
    ],
  },
  {
    heading: "8. 安全管理措置",
    paragraphs: [
      "当社は、個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。個人情報を取り扱う従業者および委託先に対して、必要かつ適切な監督を行います。",
    ],
  },
  {
    heading: "9. アクセス解析ツールについて",
    paragraphs: [
      "当社のウェブサイトでは、サービス改善のためにアクセス解析ツールを利用する場合があります。これらのツールはトラフィックデータの収集のためにCookieを使用することがありますが、収集される情報は匿名であり、個人を特定するものではありません。Cookieの使用はブラウザの設定により無効にすることができます。",
    ],
  },
  {
    heading: "10. 開示・訂正・利用停止等のご請求",
    paragraphs: [
      "ご本人から、個人情報の開示、訂正、追加、削除、利用の停止、消去または第三者への提供の停止をご請求いただいた場合、法令に従い、ご本人であることを確認したうえで遅滞なく対応いたします。ご請求は下記のお問い合わせ窓口までご連絡ください。",
    ],
  },
  {
    heading: "11. 本方針の変更",
    paragraphs: [
      "当社は、法令の変更または事業内容の変更等に応じて、本方針の内容を変更することがあります。変更後の本方針は、当社ウェブサイトに掲載した時点から効力を生じるものとします。",
    ],
  },
];

const CONTACT_ROWS = [
  { label: "会社名", value: "株式会社サイプレス" },
  { label: "代表取締役", value: "織田 春樹" },
  { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623（〒124-0816）" },
  { label: "お問い合わせ窓口", value: "info@cypress-all.co.jp" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Header />
      <main style={{ background: "#FFFFFF" }}>
        {/* Hero */}
        <section className="pt-32 pb-14" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] text-[#6B7280] mb-8">
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0F172A" }}>プライバシーポリシー</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#9CA3AF" }}>
              Privacy Policy
            </p>
            <h1
              className="font-black text-[#0F172A] leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(26px, 3.6vw, 44px)" }}
            >
              プライバシーポリシー
            </h1>
            <p className="text-[#374151] text-[15px] leading-[1.95] max-w-2xl">
              株式会社サイプレスは、お客様の個人情報を適切に保護することが事業活動の基本であると考え、個人情報の保護に関する法律その他の関係法令を遵守します。
            </p>
            <p className="text-[#9CA3AF] text-[12px] mt-6">最終改定日：{LAST_UPDATED}</p>
          </div>
        </section>

        {/* Body */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              {SECTIONS.map((sec) => (
                <div key={sec.heading} className="py-9" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <h2 className="font-bold text-[17px] mb-5 leading-snug" style={{ color: "#0F172A" }}>
                    {sec.heading}
                  </h2>
                  {sec.paragraphs?.map((p) => (
                    <p key={p} className="text-[14px] leading-[2.0] mb-4" style={{ color: "#374151" }}>
                      {p}
                    </p>
                  ))}
                  {sec.list && (
                    <ul className="mt-2 mb-2">
                      {sec.list.map((item) => (
                        <li key={item} className="flex gap-3 py-2">
                          <span className="shrink-0 text-[13px]" style={{ color: "#C4B89A" }}>—</span>
                          <span className="text-[13.5px] leading-[1.9]" style={{ color: "#374151" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.note && (
                    <p
                      className="text-[13px] leading-[1.95] mt-5 p-4"
                      style={{ color: "#374151", background: "#F9F8F5", borderLeft: "3px solid #0F172A" }}
                    >
                      {sec.note}
                    </p>
                  )}
                </div>
              ))}

              {/* 事業者情報 */}
              <div className="py-9" style={{ borderTop: "1px solid #E8E4DC" }}>
                <h2 className="font-bold text-[17px] mb-6 leading-snug" style={{ color: "#0F172A" }}>
                  12. 事業者情報・お問い合わせ窓口
                </h2>
                <div>
                  {CONTACT_ROWS.map((row) => (
                    <div key={row.label} className="flex flex-col sm:flex-row gap-1 sm:gap-8 py-3.5" style={{ borderTop: "1px solid #E8E4DC" }}>
                      <span className="sm:w-44 shrink-0 text-[13px] font-semibold" style={{ color: "#0F172A" }}>{row.label}</span>
                      <span className="text-[13px] leading-[1.85]" style={{ color: "#374151" }}>{row.value}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid #E8E4DC" }} />
                </div>
                <p className="text-[13px] leading-[1.95] mt-6" style={{ color: "#374151" }}>
                  本方針に関するご質問、個人情報の開示・訂正・利用停止等のご請求は、上記のお問い合わせ窓口までご連絡ください。
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-7 px-7 py-3 text-[13px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                  style={{ border: "1px solid #0F172A", color: "#0F172A" }}
                >
                  お問い合わせフォームへ
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
