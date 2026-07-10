import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "株式会社サイプレス 会社概要｜Web集客・SEO・MEO・AIO支援",
  description:
    "株式会社サイプレスの会社概要。東京都葛飾区を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社。代表：織田 春樹。設立：2026年5月13日。全国対応。",
  keywords: [
    "株式会社サイプレス",
    "サイプレス 会社概要",
    "Cypress Webマーケティング",
    "会社概要",
    "葛飾区 Webマーケティング",
    "MEO対策",
    "SEO対策",
    "AIO対策",
    "東京 ホームページ制作",
  ],
  openGraph: {
    title: "株式会社サイプレス 会社概要｜Web集客・SEO・MEO・AIO支援",
    description:
      "株式会社サイプレスの会社概要。東京都葛飾区を拠点にMEO・SEO・AIO対策、ホームページ制作を全国対応で提供するWebマーケティング会社。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/profile" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社サイプレス",
  alternateName: "Cypress",
  url: "https://www.cypress-all.co.jp/",
  logo: "https://www.cypress-all.co.jp/logo.png",
  foundingDate: "2026-05-13",
  founder: { "@type": "Person", name: "織田 春樹" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    postalCode: "124-0816",
    addressRegion: "東京都",
    addressLocality: "葛飾区",
    streetAddress: "白鳥4-6-1-623",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@cypress-all.co.jp",
    contactType: "customer service",
    availableLanguage: "Japanese",
  },
  description:
    "株式会社サイプレスは、東京都葛飾区を拠点に、ホームページ制作、SEO対策、MEO対策、AIO対策、SNS運用、AI活用支援を行うWebマーケティング会社です。中小企業・地域店舗のWeb集客を支援します。",
  knowsAbout: [
    "ホームページ制作", "SEO対策", "MEO対策", "AIO対策",
    "SNS運用", "AI活用支援", "Webマーケティング",
    "Googleビジネスプロフィール最適化", "AI検索最適化",
  ],
  areaServed: ["東京都", "葛飾区", "神奈川県", "埼玉県", "千葉県", "全国"],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "株式会社サイプレス",
  alternateName: "Cypress",
  url: "https://www.cypress-all.co.jp/",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    postalCode: "124-0816",
    addressRegion: "東京都",
    addressLocality: "葛飾区",
    streetAddress: "白鳥4-6-1-623",
  },
  email: "info@cypress-all.co.jp",
  description:
    "株式会社サイプレスは、東京都葛飾区を拠点に、ホームページ制作・SEO対策・MEO対策・AIO対策・SNS運用・AI活用支援を行うWebマーケティング会社です。",
  areaServed: ["東京都", "神奈川県", "埼玉県", "千葉県", "全国"],
  serviceType: ["SEO対策", "MEO対策", "AIO対策", "ホームページ制作", "SNS運用", "AI活用支援"],
};

const PROFILE_ROWS = [
  { label: "会社名", value: "株式会社サイプレス" },
  { label: "代表取締役", value: "織田 春樹" },
  { label: "設立", value: "2026年5月13日" },
  { label: "所在地", value: "〒124-0816 東京都葛飾区白鳥4-6-1-623" },
  { label: "メールアドレス", value: "info@cypress-all.co.jp" },
  {
    label: "事業内容",
    value:
      "SEO対策・MEO対策・AIO（AI検索最適化）・Web制作・SNS運用・AI活用支援",
  },
  {
    label: "対応エリア",
    value: "東京都・神奈川県・埼玉県・千葉県（全国オンライン対応可）",
  },
];

const SERVICES = [
  {
    num: "01",
    label: "MEO対策",
    tag: "Googleマップ集客",
    body: "Googleマップ上の表示順位を改善し、「近くの○○」検索からの来店・問い合わせを増やします。Googleビジネスプロフィールの最適化・写真・投稿・口コミ対策を包括的に支援します。飲食店・美容室・クリニック・整体院など、地域集客が重要なビジネスに特に効果的です。",
  },
  {
    num: "02",
    label: "SEO対策",
    tag: "Google自然検索",
    body: "Google自然検索での流入増加を目指し、内部SEO・コンテンツSEO・テクニカルSEO・被リンク対策を総合的に実施します。キーワード調査から記事制作・改善まで一気通貫で対応し、検索流入の持続的な増加を支援します。",
  },
  {
    num: "03",
    label: "AIO対策",
    tag: "AI検索最適化",
    body: "ChatGPT・Gemini・Perplexityなど、AI検索エンジンからの引用・回答表示を目指した情報設計を行います。E-E-A-T（経験・専門性・権威性・信頼性）の明示、FAQ整備、構造化データの実装などを通じて、AI時代の検索流入基盤を構築します。",
  },
  {
    num: "04",
    label: "Web制作",
    tag: "ホームページ・LP",
    body: "集客・問い合わせ・採用を目的とした設計で、表示速度・SEO・モバイル対応を兼ね備えたWebサイトを制作します。Next.js + TypeScript + Tailwind CSSによる高性能サイトから、WordPressによる運用しやすいサイトまで用途に応じて対応します。",
  },
  {
    num: "05",
    label: "SNS運用",
    tag: "Instagram・X・LINE",
    body: "Instagram・X・LINE公式アカウントの投稿企画・文章作成・分析・改善まで一貫して支援します。フォロワーを増やすことより、見込み顧客への認知向上と問い合わせ促進を重視した運用設計を行います。",
  },
  {
    num: "06",
    label: "AI活用支援",
    tag: "業務効率化・自動化",
    body: "業務効率化・チャットボット構築・コンテンツ制作自動化など、AIを活用した経営改善を伴走支援します。どのAIツールをどの業務に使うべきかの選定から、実際の導入・運用定着まで支援します。",
  },
];

const TOKYO_AREAS = [
  "葛飾区", "足立区", "江戸川区", "墨田区", "荒川区",
  "台東区", "江東区", "新宿区", "渋谷区", "港区",
  "千代田区", "中央区", "品川区", "目黒区", "世田谷区",
  "杉並区", "中野区", "豊島区", "北区", "板橋区",
  "練馬区", "文京区", "東京23区全域",
];

const PREF_AREAS = [
  { pref: "神奈川県", cities: "横浜市・川崎市・相模原市・横須賀市・藤沢市 など" },
  { pref: "埼玉県", cities: "さいたま市・川口市・越谷市・川越市・所沢市 など" },
  { pref: "千葉県", cities: "千葉市・船橋市・松戸市・柏市・市川市 など" },
  { pref: "全国対応", cities: "オンライン（Zoom / Google Meet）にて対応可" },
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
    a: "通常の商談はオンラインを基本としていますが、ご来社をご希望の場合は事前にお問い合わせください。東京都葛飾区白鳥4-6-1-623が所在地です。",
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

export default function ProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/company" className="hover:text-[#0F172A] transition-colors">会社情報</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>会社概要</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Company Profile
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#0F172A", fontFamily: "var(--font-serif)" }}
            >
              株式会社サイプレス 会社概要
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレスの基本情報一覧です。東京都葛飾区を拠点に、SEO・MEO・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、地域中小企業のWeb集客を支援しています。
            </p>
          </div>
        </section>

        {/* Visual break */}
        <section className="relative overflow-hidden w-full" style={{ height: "360px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_11_20.jpg"
            alt="株式会社サイプレス — ビジネスパートナーとの信頼関係"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              On This Page
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                { num: "01", text: "株式会社サイプレスの会社名・設立・代表・所在地などの基本情報" },
                { num: "02", text: "SEO・MEO・AIO・Web制作・SNS運用・AI活用支援の6つの事業領域の詳細" },
                { num: "03", text: "対応エリア（東京都・神奈川・埼玉・千葉および全国オンライン対応）" },
                { num: "04", text: "所在地・アクセス・ご来社時の注意事項" },
                { num: "05", text: "お問い合わせ方法・料金体系・契約形態など15のよくある質問と回答" },
                { num: "06", text: "関連ページへのリンク（サービス詳細・対応エリア・企業理念など）" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-5 py-5"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item.text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: 会社概要テーブル */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Corporate Information
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              基本情報
            </h2>
            <div className="max-w-3xl">
              <dl>
                {PROFILE_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr]"
                    style={{
                      borderTop: "1px solid #E8E4DC",
                      borderBottom: i === PROFILE_ROWS.length - 1 ? "1px solid #E8E4DC" : "none",
                    }}
                  >
                    <dt
                      className="py-5 pr-6 text-[14px] font-medium"
                      style={{ color: "#6B7280", background: "#F9F8F5", borderRight: "1px solid #E8E4DC" }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      className="py-5 pl-6 text-[14px] leading-[1.8]"
                      style={{ color: "#374151", background: "#FFFFFF" }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-12 max-w-3xl">
              <div
                className="p-8"
                style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}
              >
                <p className="text-[13px] font-semibold mb-3" style={{ color: "#0d1b2a" }}>会社への連絡について</p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  お問い合わせはメール（info@cypress-all.co.jp）またはお問い合わせフォームから受け付けています。通常1〜2営業日以内にご返信します。
                </p>
                <div className="mt-5" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold"
                    style={{ background: "#0F172A", color: "#FFFFFF" }}
                  >
                    お問い合わせフォームへ
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: 事業内容の詳細 */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Business Areas
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              事業内容
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-14" style={{ color: "#374151" }}>
              サイプレスでは、Web集客に必要な6つの領域を統合的に提供しています。個別のご依頼から複数サービスの組み合わせまで、貴社の課題に合わせて柔軟に対応します。
            </p>
            <div className="max-w-3xl space-y-0">
              {SERVICES.map((item) => (
                <div
                  key={item.num}
                  className="py-7"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-black text-[16px]" style={{ color: "#0d1b2a" }}>{item.label}</p>
                        <span
                          className="text-[11px] font-medium px-2 py-0.5"
                          style={{ background: "#E8E4DC", color: "#374151" }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[14px] leading-[1.85]" style={{ color: "#374151" }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>

            <div className="mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold"
                style={{ background: "#0F172A", color: "#FFFFFF" }}
              >
                サービス一覧を見る
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Section D: 対応エリア */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Service Area
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              対応エリア
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-14" style={{ color: "#374151" }}>
              東京都葛飾区を拠点として、首都圏を中心に対応しています。オンライン（Zoom / Google Meet）を活用することで全国のお客様にもご支援可能です。
            </p>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              {/* 東京都内 */}
              <div>
                <p className="text-[13px] font-semibold mb-5 pb-3" style={{ color: "#0d1b2a", borderBottom: "1px solid #E8E4DC" }}>
                  東京都内（23区）
                </p>
                <div className="flex flex-wrap gap-2">
                  {TOKYO_AREAS.map((area) => (
                    <span
                      key={area}
                      className="text-[12px] px-2.5 py-1"
                      style={{ background: "#F9F8F5", color: "#374151", border: "1px solid #E8E4DC" }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* 近隣県・全国 */}
              <div>
                <p className="text-[13px] font-semibold mb-5 pb-3" style={{ color: "#0d1b2a", borderBottom: "1px solid #E8E4DC" }}>
                  首都圏・全国対応
                </p>
                <div className="space-y-0">
                  {PREF_AREAS.map((item, i) => (
                    <div
                      key={item.pref}
                      className="py-4"
                      style={{
                        borderTop: i === 0 ? "1px solid #E8E4DC" : "none",
                        borderBottom: "1px solid #E8E4DC",
                      }}
                    >
                      <p className="text-[13px] font-semibold mb-1" style={{ color: "#0d1b2a" }}>{item.pref}</p>
                      <p className="text-[13px]" style={{ color: "#374151" }}>{item.cities}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-5" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>
                    上記以外の地域も、オンラインにて対応可能です。まずはお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: アクセス情報 */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Access
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              所在地・アクセス
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl items-start">
              <div>
                <address className="not-italic">
                  <div className="mb-6" style={{ borderBottom: "1px solid #E8E4DC", paddingBottom: "20px" }}>
                    <p className="text-[12px] font-semibold tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>郵便番号</p>
                    <p className="text-[15px]" style={{ color: "#374151" }}>〒124-0816</p>
                  </div>
                  <div className="mb-6" style={{ borderBottom: "1px solid #E8E4DC", paddingBottom: "20px" }}>
                    <p className="text-[12px] font-semibold tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>所在地</p>
                    <p className="text-[15px]" style={{ color: "#374151" }}>東京都葛飾区白鳥4-6-1-623</p>
                  </div>
                  <div className="mb-6" style={{ borderBottom: "1px solid #E8E4DC", paddingBottom: "20px" }}>
                    <p className="text-[12px] font-semibold tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>メール</p>
                    <a
                      href="mailto:info@cypress-all.co.jp"
                      className="text-[15px] transition-colors hover:text-[#0F172A]"
                      style={{ color: "#374151" }}
                    >
                      info@cypress-all.co.jp
                    </a>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>対応エリア</p>
                    <p className="text-[15px]" style={{ color: "#374151" }}>東京都・神奈川・埼玉・千葉（全国オンライン対応）</p>
                  </div>
                </address>
                <div className="mt-8">
                  <a
                    href="https://maps.google.com/?q=東京都葛飾区白鳥4-6-1-623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#0F172A]"
                    style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
                  >
                    Googleマップで確認する →
                  </a>
                </div>
              </div>

              <div
                className="p-8"
                style={{ background: "#FFFFFF", border: "1px solid #E8E4DC" }}
              >
                <p className="text-[14px] font-semibold mb-4" style={{ color: "#0d1b2a" }}>ご来社について</p>
                <p className="text-[14px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  通常、商談・ご相談はオンライン（Zoom・Google Meet）にて対応しています。場所を選ばず、全国どこからでもご相談いただけます。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  ご来社をご希望の場合は、事前にお問い合わせフォームよりご連絡ください。日程を調整したうえでご案内します。
                </p>
                <div className="mt-6" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-semibold"
                    style={{ background: "#0F172A", color: "#FFFFFF" }}
                  >
                    お問い合わせ
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="会社概要・お問い合わせについてよくある質問"
          bgColor="#FFFFFF"
        />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
