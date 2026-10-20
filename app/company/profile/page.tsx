import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BusinessCards from "@/components/shared/BusinessCards";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import PageHero from "@/components/ui/PageHero";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { ExternalIcon } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { COMPANY, COMPANY_ADDRESS_WITH_POSTAL, COMPANY_MAP_QUERY } from "@/lib/company";
import { CONTACT_EMAIL, CONTACT_HOURS, CONTACT_MAILTO } from "@/lib/contact";

export const metadata: Metadata = {
  title: "株式会社サイプレス 会社概要｜Web集客・SEO・MEO・AIO支援",
  description:
    "株式会社サイプレスの会社概要。東京都葛飾区亀有を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社。軽貨物事業・太陽光事業も運営。代表：織田 春樹。設立：2026年5月13日。",
  keywords: [
    "株式会社サイプレス",
    "サイプレス 会社概要",
    "Cypress Webマーケティング",
    "会社概要",
    "葛飾区 Webマーケティング",
    "亀有 ホームページ制作",
    "MEO対策",
    "SEO対策",
    "AIO対策",
  ],
  openGraph: {
    title: "株式会社サイプレス 会社概要｜Web集客・SEO・MEO・AIO支援",
    description:
      "株式会社サイプレスの会社概要。東京都葛飾区亀有を拠点にMEO・SEO・AIO対策、ホームページ制作を全国対応で提供するWebマーケティング会社。",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "株式会社サイプレス" }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/profile" },
};

const CRUMBS: Crumb[] = [
  { name: "ホーム", href: "/" },
  { name: "会社情報", href: "/company" },
  { name: "会社概要" },
];

const PROFILE_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "会社名", value: `${COMPANY.name}（${COMPANY.nameEn}）` },
  { label: "代表取締役", value: COMPANY.representative },
  { label: "設立", value: COMPANY.founded },
  {
    label: "所在地",
    value: (
      <>
        {COMPANY_ADDRESS_WITH_POSTAL}
        <span className="mt-1 block text-[13.5px] text-muted">最寄り駅：{COMPANY.nearestStation}</span>
      </>
    ),
  },
  {
    label: "メール",
    value: (
      <a href={CONTACT_MAILTO} className="text-ink underline-offset-4 hover:text-accent hover:underline">
        {CONTACT_EMAIL}
      </a>
    ),
  },
  { label: "受付時間", value: CONTACT_HOURS },
  {
    label: "事業内容",
    value: (
      <ul className="space-y-1">
        <li>Webマーケティング事業（MEO・SEO・AIO対策、ホームページ制作、SNS運用、AI活用支援）</li>
        <li>軽貨物事業（軽貨物配送）</li>
        <li>太陽光事業（住宅用太陽光発電・家庭用蓄電池の導入サポート「SOLAR SHIFT」）</li>
      </ul>
    ),
  },
  { label: "対応エリア", value: "東京都・神奈川県・埼玉県・千葉県（全国オンライン対応可）" },
];

const TOKYO_AREAS = [
  "葛飾区", "足立区", "江戸川区", "墨田区", "荒川区",
  "台東区", "江東区", "新宿区", "渋谷区", "港区",
  "千代田区", "中央区", "品川区", "目黒区", "世田谷区",
  "杉並区", "中野区", "豊島区", "北区", "板橋区",
  "練馬区", "文京区",
];

const PREF_AREAS = [
  { pref: "神奈川県", cities: "横浜市・川崎市・相模原市・横須賀市・藤沢市 など" },
  { pref: "埼玉県", cities: "さいたま市・川口市・越谷市・川越市・所沢市 など" },
  { pref: "千葉県", cities: "千葉市・船橋市・松戸市・柏市・市川市 など" },
  { pref: "全国", cities: "オンライン（Zoom / Google Meet）で対応" },
];

const faqItems = [
  {
    q: "問い合わせはどのようにすればいいですか？",
    a: "お問い合わせページのフォームから24時間受け付けています。また、メール（info@cypress-all.co.jp）でも直接ご連絡いただけます。通常1〜2営業日以内にご返信します。",
  },
  {
    q: "東京都外からの依頼も受け付けていますか？",
    a: "はい、全国対応しています。通常の商談・支援はオンライン（Zoom / Google Meet）で行いますので、どの地域からでもお気軽にご相談ください。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "主に東京都・神奈川県・埼玉県・千葉県を対応エリアとしていますが、オンラインを活用することで全国のお客様にも対応しています。地方の事業者様もお気軽にご相談ください。",
  },
  {
    q: "料金体系を教えてください。",
    a: "サービスによって異なります。MEO・SEO・SNS運用は月額制、Web制作はプロジェクト一括制が基本です。詳細はお問い合わせ後のヒアリングを経てお見積もりします。初回相談は無料です。",
  },
  {
    q: "契約の最低期間はありますか？",
    a: "月額サービス（MEO・SEO・SNS運用）は最低3ヶ月契約を基本としています。Web集客の成果は継続的な取り組みによって積み上がるため、短期間での成果は難しいケースが多いからです。",
  },
  {
    q: "複数のサービスをまとめて依頼できますか？",
    a: "はい、可能です。MEO対策＋SNS運用、Web制作＋SEO対策など、複数サービスをまとめてご依頼いただく場合のほうが一貫した戦略で支援できるため、より効果的です。",
  },
  {
    q: "個人事業主でも依頼できますか？",
    a: "もちろんです。法人・個人事業主を問わず対応しています。小規模な飲食店・美容室・整体院・士業など、個人事業主のお客様からのご相談も歓迎しています。",
  },
  {
    q: "競合他社と同時に契約することはありますか？",
    a: "同一の業種・エリアで競合関係にある複数の事業者と同時に契約することは原則行っていません。守秘義務と戦略の競合を避けるためです。",
  },
  {
    q: "成果が出るまでどのくらいかかりますか？",
    a: "サービスによって異なります。MEO対策は施策開始から1〜3ヶ月で変化が出やすく、SEO対策は3〜6ヶ月以上の継続が効果的です。AIO対策はまだ新しい領域で変動が大きいです。個別のご状況によっても変わりますので、初回相談でより具体的にお伝えします。",
  },
  {
    q: "支払い方法を教えてください。",
    a: "銀行振込に対応しています。月額サービスは月末締め翌月払いが基本です。詳細は契約時にご説明します。",
  },
  {
    q: "途中で契約を解約できますか？",
    a: "最低契約期間後は1ヶ月前の書面（メール）通知にて解約可能です。突然のビジネス状況の変化にも対応できるよう設計しています。",
  },
  {
    q: "ホームページを持っていなくてもMEO対策を依頼できますか？",
    a: "はい、可能です。Googleビジネスプロフィールの最適化はホームページがなくても実施できます。ただし、Webサイトがあるほうが集客効果が高まるため、合わせてWeb制作もご検討いただくことをお勧めします。",
  },
  {
    q: "来社しての相談はできますか？",
    a: "通常の商談はオンラインを基本としていますが、ご来社をご希望の場合は事前にお問い合わせください。東京都葛飾区亀有3-16-14-201が所在地です。",
  },
  {
    q: "既存のホームページのSEO改善のみ依頼できますか？",
    a: "はい、既存サイトのSEO改善のみのご依頼にも対応しています。現状の課題診断から始めますので、まずはお問い合わせください。",
  },
  {
    q: "AI活用支援とは具体的にどのようなことをしてもらえますか？",
    a: "業務フローのヒアリングを行い、ChatGPT・Claude・Geminiなどのツール選定と活用方法の提案、社内でのAI活用ルール整備、コンテンツ制作の半自動化など、実際の業務改善につながる形でサポートします。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社情報トップ", desc: "サイプレス企業情報" },
  { href: "/company/about-cypress", label: "株式会社サイプレスとは", desc: "会社の詳細・理念・強み" },
  { href: "/company/value", label: "企業理念・バリュー", desc: "私たちが大切にすること" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/philosophy", label: "経営方針", desc: "事業への姿勢と方針" },
  { href: "/company/support-policy", label: "サポート方針", desc: "支援スタンスの詳細" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談・お見積もり" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示支援" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化支援" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "成果につながるサイト制作" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram・X・LINE" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "業務効率化・自動化" },
  { href: "/area/tokyo", label: "東京都対応エリア", desc: "東京23区・全域" },
  { href: "/area/kanagawa", label: "神奈川県対応エリア", desc: "横浜・川崎など" },
  { href: "/area/saitama", label: "埼玉県対応エリア", desc: "さいたま市など" },
  { href: "/area/chiba", label: "千葉県対応エリア", desc: "千葉市・船橋など" },
  { href: "/process/consultation", label: "ご利用の流れ", desc: "相談〜契約の流れ" },
  { href: "/faq/meo-basics", label: "MEO基本FAQ", desc: "よくある質問" },
  { href: "/faq/seo-basics", label: "SEO基本FAQ", desc: "よくある質問" },
  { href: "/recruit", label: "採用情報", desc: "仲間を募集しています" },
];

// 会社そのもの（Organization）は app/layout.tsx で @id 付きで出力しているため、ここでは参照だけにする。
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.cypress-all.co.jp/company/profile#webpage",
      url: "https://www.cypress-all.co.jp/company/profile",
      name: "株式会社サイプレス 会社概要",
      inLanguage: "ja",
      about: { "@id": "https://www.cypress-all.co.jp/#organization" },
    },
    breadcrumbJsonLd(CRUMBS, "/company/profile"),
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function CompanyProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={CRUMBS}
          eyebrow="Company Profile"
          title="会社概要"
          lead="東京都葛飾区亀有を拠点に、Webマーケティング事業を中心として、軽貨物事業と太陽光事業を運営しています。"
        />

        <Section tone="white" className="!pt-0" labelledBy="profile-table">
          <h2 id="profile-table" className="sr-only">
            会社データ
          </h2>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <dl className="overflow-hidden rounded-3xl border border-line">
              {PROFILE_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid gap-1 px-6 py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6 md:px-8 ${i > 0 ? "border-t border-line" : ""}`}
                >
                  <dt className="text-[13.5px] font-bold text-muted">{row.label}</dt>
                  <dd className="text-[15.5px] leading-relaxed text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-4">
              <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-3xl border border-line bg-surface">
                <iframe
                  title="株式会社サイプレスの所在地（Googleマップ）"
                  src={`https://www.google.com/maps?q=${COMPANY_MAP_QUERY}&output=embed`}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${COMPANY_MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-[14px] font-semibold text-accent hover:text-accent-strong"
              >
                Googleマップで開く
                <ExternalIcon />
              </a>
              <p className="text-[13.5px] leading-relaxed text-muted">
                ご来社の際は事前にご連絡ください。通常のお打ち合わせはオンラインでも承ります。
              </p>
            </div>
          </div>
        </Section>

        <Section tone="surface" labelledBy="profile-business">
          <SectionHeading id="profile-business" eyebrow="Business" title="事業内容" />
          <BusinessCards />
        </Section>

        <Section tone="white" labelledBy="profile-area">
          <SectionHeading
            id="profile-area"
            eyebrow="Area"
            title="対応エリア"
            lead="東京23区は訪問でも、そのほかの地域はオンラインで対応しています。"
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-[15px] font-bold text-ink">東京都</p>
              <ul className="flex flex-wrap gap-2">
                {TOKYO_AREAS.map((a) => (
                  <li key={a} className="rounded-full bg-surface px-3.5 py-1.5 text-[13.5px] text-ink-2">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="overflow-hidden rounded-3xl border border-line">
              {PREF_AREAS.map((p, i) => (
                <div key={p.pref} className={`grid gap-1 px-6 py-4 sm:grid-cols-[110px_minmax(0,1fr)] ${i > 0 ? "border-t border-line" : ""}`}>
                  <dt className="text-[14.5px] font-bold text-ink">{p.pref}</dt>
                  <dd className="text-[14px] text-muted">{p.cities}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <FaqSection items={faqItems} heading="会社についてよくある質問" bgColor="#F4F6FA" initialCount={6} />
        <RelatedPages links={relatedLinks} heading="関連ページ" />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
