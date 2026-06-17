import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "対応エリア｜東京・神奈川・埼玉・千葉＋全国オンライン対応｜株式会社サイプレス",
  description:
    "株式会社サイプレスの対応エリア。東京都葛飾区を拠点に首都圏（東京・神奈川・埼玉・千葉）の訪問対応、全国オンライン（Zoom）対応。MEO・SEO・Web制作・AI活用支援。",
  keywords: ["対応エリア", "葛飾区", "東京", "神奈川", "埼玉", "千葉", "全国対応", "オンライン", "サイプレス"],
  openGraph: {
    title: "対応エリア｜東京・神奈川・埼玉・千葉＋全国オンライン対応｜株式会社サイプレス",
    description: "東京都葛飾区拠点。首都圏訪問対応＋全国オンライン対応でMEO・SEO・Web集客をご支援。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/area" },
};

const whatYouLearnItems = [
  { n: "01", title: "対応エリアの全体像", body: "東京都・神奈川県・埼玉県・千葉県の首都圏4都県への訪問対応と、全国どこからでも利用できるオンライン対応の両軸を把握できます。" },
  { n: "02", title: "オンライン対応の仕組み", body: "Zoom・Google Meetを使った画面共有・資料共有でのコンサルティング方法と、リモートでも品質が落ちない理由を確認できます。" },
  { n: "03", title: "地域ごとの特性・課題感", body: "葛飾区・足立区・墨田区など、拠点周辺エリアの地域特性と競合環境をもとにした、エリア別のWeb集客アプローチを知ることができます。" },
  { n: "04", title: "エリア別の対応サービス", body: "MEO対策・SEO対策・AIO対策・Web制作・AI活用支援など、各サービスが対面対応可能なのかオンライン対応なのかを一覧で確認できます。" },
  { n: "05", title: "相談方法とフロー", body: "初回相談から契約・施策開始までの流れ、対面とオンラインそれぞれの進め方の違いを把握して、スムーズに相談を始められます。" },
  { n: "06", title: "エリア外からの依頼方法", body: "首都圏以外・地方からの依頼でも受付可能なサービス範囲と、どのような手順で相談を開始すればよいかを確認できます。" },
];

const tokyoAreas = [
  { name: "葛飾区", note: "拠点エリア・最も詳しい地域" },
  { name: "足立区", note: "隣接エリア・訪問対応可" },
  { name: "墨田区", note: "下町エリア・競合調査対応" },
  { name: "江戸川区", note: "訪問相談対応" },
  { name: "荒川区", note: "訪問相談対応" },
  { name: "北区", note: "訪問相談対応" },
  { name: "板橋区", note: "訪問相談対応" },
  { name: "練馬区", note: "訪問相談対応" },
  { name: "中野区", note: "訪問相談対応" },
  { name: "杉並区", note: "訪問相談対応" },
  { name: "その他23区", note: "都内全域対応" },
  { name: "多摩地区", note: "事前相談のうえ対応" },
];

const areaBlocks = [
  {
    prefecture: "東京都",
    en: "Tokyo",
    detail: "23区全域および多摩地区に対応。葛飾区を拠点としているため、城東・北東エリア（足立区・墨田区・江戸川区・荒川区・北区）は特に深い知見を持っています。都内全域への訪問相談が可能です。",
  },
  {
    prefecture: "神奈川県",
    en: "Kanagawa",
    detail: "横浜市・川崎市・相模原市・横須賀市・平塚市・藤沢市をはじめとした神奈川県全域に対応。訪問相談は主要都市を中心にご対応しています。MEO・SEO・Web制作はオンラインで全域対応可能です。",
  },
  {
    prefecture: "埼玉県",
    en: "Saitama",
    detail: "さいたま市・川口市・草加市・越谷市・春日部市など埼玉県全域に対応。葛飾区から東武線・常磐線沿線は訪問しやすいエリアです。オンライン対応で県内全域のお客様のご支援が可能です。",
  },
  {
    prefecture: "千葉県",
    en: "Chiba",
    detail: "千葉市・船橋市・松戸市・柏市・市川市・浦安市など千葉県全域に対応。葛飾区から常磐線・総武線沿いは訪問相談対応エリアです。オンラインで県内全域のお客様をサポートします。",
  },
  {
    prefecture: "全国（オンライン）",
    en: "Nationwide",
    detail: "北海道から沖縄まで、Zoom・Google Meetを活用したオンライン対応で全国のお客様のご相談に応じます。MEO・SEO・AIO・Web制作・AI活用支援はすべてオンラインで完結します。",
  },
];

const serviceAreaTable = [
  { service: "MEO対策", inPerson: "首都圏（東京・神奈川・埼玉・千葉）", online: "全国対応" },
  { service: "SEO対策", inPerson: "首都圏（東京・神奈川・埼玉・千葉）", online: "全国対応" },
  { service: "AIO対策", inPerson: "首都圏（東京・神奈川・埼玉・千葉）", online: "全国対応" },
  { service: "Web制作", inPerson: "首都圏（東京・神奈川・埼玉・千葉）", online: "全国対応" },
  { service: "SNS運用支援", inPerson: "首都圏（東京・神奈川・埼玉・千葉）", online: "全国対応" },
  { service: "AI活用支援", inPerson: "首都圏（東京・神奈川・埼玉・千葉）", online: "全国対応" },
  { service: "対面コンサルティング", inPerson: "首都圏のみ（要事前予約）", online: "—" },
];

const localKnowledgeItems = [
  {
    area: "葛飾区",
    body: "拠点エリアのため商圏・競合・地域性を最も深く把握しています。亀有・金町・新小岩・青砥など各エリアの特性に沿ったMEO・SEO施策が可能です。",
  },
  {
    area: "足立区",
    body: "北千住・綾瀬・竹ノ塚など活気ある商業エリアを多数抱える足立区は、競合が多くGoogleマップ上での差別化が重要。細かいエリア分析に対応します。",
  },
  {
    area: "墨田区",
    body: "押上・錦糸町・両国など観光・商業が交わる墨田区。訪日外国人が多いエリアでは英語対応GBPや多言語SEOの重要性が高く、専門的なサポートが可能です。",
  },
  {
    area: "江戸川区",
    body: "小岩・瑞江・葛西など大きな住宅地エリアを多く抱える江戸川区は、地域密着型の店舗・サービス業に向いたMEO施策が効果的です。",
  },
  {
    area: "荒川区・北区",
    body: "日暮里・三河島・王子など都内有数の下町エリア。競合は多いが地元愛が強く、ブランド訴求・口コミ促進が集客に直結するため丁寧な施策設計が重要です。",
  },
];

const onlineFlowSteps = [
  { n: "01", title: "お問い合わせ", body: "Webフォームまたはメールでご連絡ください。現状の課題・ご要望を簡単にお聞かせいただきます。1〜2営業日以内にご返信します。" },
  { n: "02", title: "初回ヒアリング（Zoom 30〜60分）", body: "ZoomのURLをお送りします。現状のWebサイト・Googleビジネスプロフィール・競合状況を画面共有しながら一緒に確認し、課題を整理します。" },
  { n: "03", title: "ご提案・お見積もり", body: "ヒアリング内容をもとに、最適なサービス内容と費用を3〜5営業日でご提案します。Googleスライドで資料を共有します。" },
  { n: "04", title: "ご契約・施策スタート", body: "ご納得いただけましたらご契約。施策開始後は月次レポート（Googleドキュメント）と定例MTG（Zoom）で進捗を共有します。" },
  { n: "05", title: "継続サポート・改善", body: "データを見ながら仮説・検証・改善を繰り返します。オンラインでもリアルタイムな状況共有と素早いPDCAが可能です。" },
];

const faqItems = [
  {
    q: "エリア外（地方）からでも依頼できますか？",
    a: "はい、対応可能です。MEO対策・SEO対策・AIO対策・Web制作・AI活用支援はすべてオンライン（Zoom・Google Meet）で完結します。北海道・東北・中部・関西・九州・沖縄からのご依頼にも対応しています。まずはお問い合わせフォームよりご連絡ください。",
  },
  {
    q: "訪問での打ち合わせは対応していますか？",
    a: "はい、首都圏（東京都・神奈川県・埼玉県・千葉県）への訪問対応が可能です。特に葛飾区・足立区・墨田区・江戸川区などの拠点周辺エリアは優先的に訪問対応しています。事前にお問い合わせフォームよりご予約ください。",
  },
  {
    q: "オンライン対応でも対面と同じ品質ですか？",
    a: "はい。ZoomやGoogle Meetの画面共有を活用することで、Googleビジネスプロフィール・Webサイト・競合状況をリアルタイムで共有しながら詳しくご説明できます。施策の進捗もGoogleドキュメントで透明に共有するため、品質は対面と変わりません。",
  },
  {
    q: "神奈川・埼玉・千葉からの依頼は可能ですか？",
    a: "はい。神奈川県・埼玉県・千葉県のお客様も首都圏エリアとして訪問対応・オンライン対応ともに承っています。横浜市・川崎市・さいたま市・千葉市など主要都市については訪問相談も可能です。",
  },
  {
    q: "オフィスへ直接来訪することはできますか？",
    a: "事前のご予約をいただければ対応可能です。所在地は東京都葛飾区白鳥4-6-1-623です。飛び込みでのご来訪は対応が難しい場合があります。お問い合わせフォームにてご予約ください。",
  },
  {
    q: "最寄り駅はどこですか？アクセスを教えてください。",
    a: "JR常磐線の亀有駅が最寄り駅です（所在地：東京都葛飾区白鳥4-6-1-623）。北千住駅・綾瀬駅・金町駅からもアクセスしやすい立地です。詳細なアクセス方法はお問い合わせ後にご案内します。",
  },
  {
    q: "初回相談は無料ですか？",
    a: "はい、初回のヒアリング・ご相談は無料です。現状の課題確認・競合調査・大まかな方向性のご提案まで、初回は費用をいただかずに対応しています。まずはお気軽にお問い合わせください。",
  },
  {
    q: "オンライン相談にはどのツールを使いますか？",
    a: "主にZoomを使用しています。Google Meetにも対応可能です。URLをお送りしますので、アカウント登録なしでも参加できます。事前に使いたいツールのご希望があればお知らせください。",
  },
  {
    q: "複数の店舗・拠点がある場合もまとめて対応できますか？",
    a: "はい、対応可能です。複数店舗のGoogleビジネスプロフィール管理・MEO対策・SEO対策を一括でご支援します。店舗ごとの状況を把握したうえで優先度をつけながら効率的に施策を進めます。",
  },
  {
    q: "葛飾区以外の東京23区でも同じ対応が受けられますか？",
    a: "はい。東京23区全域への訪問対応・オンライン対応ともに可能です。葛飾区から距離のあるエリア（世田谷区・渋谷区・港区など）も訪問相談に対応しています。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "サービスによって異なります。MEO・SEO対策などの継続施策は最低3ヶ月からご契約いただいていますが、Web制作・スポットコンサルティングは単発対応も可能です。詳しくはお問い合わせください。",
  },
  {
    q: "相談から契約までにどのくらい時間がかかりますか？",
    a: "初回相談（30〜60分）→ご提案・お見積もり（3〜5営業日）→ご検討→ご契約という流れが一般的です。急いでいる場合はその旨をお知らせください。できる限りスムーズに対応します。",
  },
  {
    q: "東京都多摩地区への訪問対応はできますか？",
    a: "事前相談のうえで対応可能です。八王子市・立川市・町田市など多摩地区全域への訪問をご希望の場合は、お問い合わせフォームにてご連絡ください。オンラインでも遜色なく対応できます。",
  },
  {
    q: "MEO対策は地方の店舗でも効果がありますか？",
    a: "はい。MEO対策はGoogleビジネスプロフィールの最適化が中心のため、全国どこの地域でも効果を発揮します。地域ごとの競合環境・検索ボリュームを分析したうえで戦略を設計します。",
  },
  {
    q: "他の地域の制作会社と比べて、何が違いますか？",
    a: "MEO・SEO・AIO・Web制作・AI活用支援をワンストップで提供できる点が強みです。特に東京城東エリア（葛飾区・足立区・墨田区周辺）の地域特性に精通しており、地元密着の細やかな支援が可能です。全国オンライン対応でも同品質のサービスを提供します。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社概要", desc: "サイプレス会社情報" },
  { href: "/company/profile", label: "会社プロフィール", desc: "詳細な会社情報" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/history", label: "沿革", desc: "会社設立からの歩み" },
  { href: "/company/philosophy", label: "理念・ビジョン", desc: "サイプレスの想い" },
  { href: "/area", label: "対応エリア一覧", desc: "全対応エリア" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア" },
  { href: "/area/tokyo", label: "東京の集客支援", desc: "東京全域の対応" },
  { href: "/area/kanagawa", label: "神奈川の集客支援", desc: "神奈川エリア" },
  { href: "/area/saitama", label: "埼玉の集客支援", desc: "埼玉エリア" },
  { href: "/area/chiba", label: "千葉の集客支援", desc: "千葉エリア" },
  { href: "/area/nationwide", label: "全国対応", desc: "リモートで全国サポート" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索順位向上の施策" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索対策" },
  { href: "/services/web", label: "Web制作サービス", desc: "高品質Webサイト制作" },
  { href: "/services/ai", label: "AI活用支援", desc: "業務効率化・DX推進" },
  { href: "/services/sns", label: "SNS運用支援", desc: "SNS集客の強化" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
  { href: "/faq", label: "よくある質問", desc: "FAQ一覧" },
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav
              style={{
                fontSize: "12px",
                color: "#9CA3AF",
                marginBottom: "24px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/company" style={{ color: "#6B7280" }}>会社情報</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>対応エリア</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              SERVICE AREA
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px,4vw,48px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "24px",
              }}
            >
              対応エリア
            </h1>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "680px",
                marginBottom: "16px",
              }}
            >
              株式会社サイプレスは東京都葛飾区白鳥を拠点に、首都圏（東京都・神奈川県・埼玉県・千葉県）への訪問対応と、全国どこからでも利用できるオンライン対応の2軸でサービスを提供しています。
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "680px",
              }}
            >
              MEO対策・SEO対策・AIO対策・Web制作・AI活用支援は、Zoom・Google Meetを活用したオンライン対応で全国のお客様にご利用いただけます。地域を問わず、同品質のサービスをお届けします。
            </p>
          </div>
        </section>

        {/* ── Image Band ── */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_22_31.png"
            alt="株式会社サイプレス 対応エリア 東京都葛飾区"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)" }} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "clamp(16px,2vw,26px)",
                  lineHeight: 1.7,
                  fontFamily: "var(--font-serif)",
                }}
              >
                東京都葛飾区から、<br />首都圏・全国へ。
              </p>
            </div>
          </div>
        </section>

        {/* ── Section A: このページでわかること ── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              WHAT YOU LEARN
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,32px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              このページでわかること
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "600px", marginBottom: "48px" }}>
              サービスエリアの全体像から、各エリアの特性・オンライン対応の仕組みまで。対応エリアに関する疑問をここで解消してください。
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "0",
              }}
            >
              {whatYouLearnItems.map((item, i) => (
                <div
                  key={item.n}
                  style={{
                    padding: "24px 0",
                    borderTop: i === 0 || i === 1 ? "1px solid #E8E4DC" : "1px solid #E8E4DC",
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section B: 主な対応エリア ── */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              SERVICE COVERAGE
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,32px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              主な対応エリア
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "600px", marginBottom: "48px" }}>
              首都圏4都県への訪問対応に加え、全国からのオンライン相談・依頼を受け付けています。
            </p>

            {/* Tokyo sub-grid */}
            <div style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px", borderBottom: "1px solid #E8E4DC", paddingBottom: "12px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "18px",
                    color: "#0d1b2a",
                    fontWeight: 700,
                  }}
                >
                  東京都
                </h3>
                <span style={{ fontSize: "12px", color: "#9CA3AF" }}>23区全域 + 多摩地区</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                {tokyoAreas.map((area) => (
                  <div
                    key={area.name}
                    style={{
                      padding: "10px 14px",
                      background: "#FFFFFF",
                      border: "1px solid #E8E4DC",
                    }}
                  >
                    <p style={{ fontSize: "13px", color: "#0d1b2a", fontWeight: 600, marginBottom: "2px" }}>
                      {area.name}
                    </p>
                    <p style={{ fontSize: "11px", color: "#9CA3AF" }}>{area.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other prefectures */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "32px" }}>
              {areaBlocks.slice(1).map((block) => (
                <div key={block.prefecture} style={{ paddingTop: "20px", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "12px" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "16px",
                        color: "#0d1b2a",
                        fontWeight: 700,
                      }}
                    >
                      {block.prefecture}
                    </h3>
                    <span style={{ fontSize: "11px", color: "#9CA3AF", letterSpacing: "0.08em" }}>{block.en}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{block.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section C: エリア別のサービス対応 ── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              SERVICE BY AREA
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,32px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              エリア別のサービス対応
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "600px", marginBottom: "48px" }}>
              対面対応とオンライン対応それぞれの対応範囲を確認できます。エリア外のお客様もオンラインで同品質のサービスをご利用いただけます。
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #E8E4DC" }}>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 16px 12px 0",
                        color: "#9CA3AF",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      サービス
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        color: "#9CA3AF",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      対面対応
                    </th>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px 0 12px 16px",
                        color: "#9CA3AF",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      オンライン対応
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {serviceAreaTable.map((row, i) => (
                    <tr
                      key={i}
                      style={{ borderTop: "1px solid #E8E4DC" }}
                    >
                      <td style={{ padding: "14px 16px 14px 0", color: "#0d1b2a", fontWeight: 600, whiteSpace: "nowrap" }}>
                        {row.service}
                      </td>
                      <td style={{ padding: "14px 16px", color: "#374151" }}>{row.inPerson}</td>
                      <td style={{ padding: "14px 0 14px 16px", color: row.online === "全国対応" ? "#c4b89a" : "#9CA3AF", fontWeight: row.online === "全国対応" ? 600 : 400 }}>
                        {row.online}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "16px", lineHeight: "1.7" }}>
              ※ 対面相談は事前予約が必要です。エリア外でも訪問をご希望の場合はお問い合わせください。
            </p>
          </div>
        </section>

        {/* ── Section D: 地元・葛飾区周辺 ── */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              LOCAL EXPERTISE
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,32px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              地元・葛飾区周辺を<br />特に深く知っています
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "640px", marginBottom: "48px" }}>
              拠点である葛飾区をはじめ、隣接する城東・北東エリアは商圏・競合環境・地域性を肌感覚で把握しています。データだけでなく地域を知るパートナーとして、より深い施策設計が可能です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0" }}>
              {localKnowledgeItems.map((item, i) => (
                <div
                  key={item.area}
                  style={{
                    padding: "24px 0",
                    borderTop: "1px solid #E8E4DC",
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "8px",
                      }}
                    >
                      {item.area}
                    </p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section E: オンライン対応の流れ ── */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              ONLINE FLOW
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,32px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              オンライン対応の流れ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", maxWidth: "600px", marginBottom: "48px" }}>
              ビデオ通話・画面共有を活用し、対面と変わらない密度のコミュニケーションを実現します。全国どこにいても、スムーズに施策をスタートできます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {onlineFlowSteps.map((step) => (
                <div
                  key={step.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {step.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "8px",
                      }}
                    >
                      {step.title}
                    </p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA mini */}
            <div style={{ marginTop: "48px" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  background: "#0F172A",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                }}
              >
                まずは無料相談する
              </Link>
              <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "10px" }}>
                オンライン（Zoom）・対面どちらも対応しています
              </p>
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="対応エリアについてよくある質問"
          bgColor="#F9F8F5"
        />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="エリアを問わず、お気軽にご相談ください"
          body="東京都葛飾区を拠点に首都圏への訪問対応、Zoom・Google Meetを使った全国オンライン対応の両軸でご支援しています。まずはお気軽にお問い合わせください。"
        />
      </main>
      <Footer />
    </>
  );
}
