import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "会社の歩み・これからの展望｜株式会社サイプレス",
  description:
    "株式会社サイプレスの設立経緯・創業に込めた想い・これからのビジョンをご紹介します。2026年5月13日に東京都葛飾区で設立。地域中小企業のWeb集客を支援するマーケティング会社の歩みと展望。",
  keywords: [
    "会社の歩み",
    "沿革",
    "設立経緯",
    "株式会社サイプレス",
    "ビジョン",
    "展望",
    "Webマーケティング",
    "葛飾区",
  ],
  openGraph: {
    title: "会社の歩み・これからの展望｜株式会社サイプレス",
    description:
      "2026年5月設立。「地域企業が、正しく選ばれる仕組みをつくる」というビジョンのもと、MEO・SEO・AIO・Web制作・SNS運用・AI活用支援を展開する株式会社サイプレスの歩みと展望。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/history" },
};

const faqItems = [
  {
    q: "株式会社サイプレスはいつ設立されましたか？",
    a: "2026年5月13日に東京都葛飾区にて設立されました。代表取締役は織田春樹です。",
  },
  {
    q: "なぜ葛飾区で創業したのですか？",
    a: "代表の織田春樹が東京都葛飾区を拠点としており、葛飾区・足立区・江戸川区・墨田区などの東部エリアには良い仕事をしているにもかかわらずデジタルでの露出が弱い中小企業・店舗が多く存在していると感じていたためです。地域に根ざした支援を実現するため葛飾区で創業しました。",
  },
  {
    q: "創業者・代表の織田春樹はどのような経歴の方ですか？",
    a: "代表の織田春樹は、Webマーケティング・MEO対策・SEO対策・サイト制作の分野での実務経験をもとに株式会社サイプレスを設立しました。地域中小企業・店舗のWeb集客に長年向き合ってきた経験から、「良い仕事をしている事業者が、正しくデジタルで可視化される仕組みが必要だ」という問題意識を持ち、起業に至りました。",
  },
  {
    q: "設立当初から現在まで、どんなサービスを展開してきましたか？",
    a: "設立時（2026年5月）からMEO対策・SEO対策・AIO対策の3サービスを中核に展開し、続いてホームページ制作・SNS運用代行・AI活用支援を加えました。現在は地域ビジネスの集客に必要なデジタルマーケティング全般を一括サポートする体制で支援しています。",
  },
  {
    q: "AIO対策サービスをなぜ設立当初から提供しているのですか？",
    a: "2026年時点でChatGPT・Gemini・Perplexityなどのai検索利用が急速に広がっており、今後はSEOと並んでAI検索対策が集客に直結すると判断したためです。「今始めることが3〜5年後の差になる」という考えのもと、設立当初から専門サービスとして整備しました。",
  },
  {
    q: "今後のサービス展開について教えてください。",
    a: "現在の6サービス（MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援）の品質をさらに高めることを最優先にしています。加えて、対応エリアの拡大・代理店パートナーネットワークの構築・専門コンテンツの充実を中期的な取り組みとして進めています。",
  },
  {
    q: "全国対応はいつから行っていますか？",
    a: "設立当初からオンラインにより全国対応しています。東京都・神奈川・埼玉・千葉を主な対応エリアとしつつ、Zoom等のオンラインでの商談・納品により全国各地のクライアントの支援が可能です。",
  },
  {
    q: "設立から間もない会社ですが、実績はどのくらいありますか？",
    a: "2026年5月に設立したばかりの新しい会社です。代表・織田春樹の過去の実務経験をベースにサービスを設計していますが、会社としての実績はまだ積み上げの段階にあります。その分、一社一社のクライアントと真剣に向き合い、成果にこだわる姿勢で取り組んでいます。",
  },
  {
    q: "代理店パートナー制度の展開予定はありますか？",
    a: "代理店パートナー制度の整備を進めており、営業代理店・紹介パートナーの2種類のプログラムを構築しています。品質を維持するため審査制を採用し、サービスの価値を正しく伝えられるパートナーとのみ提携します。詳細はお問い合わせください。",
  },
  {
    q: "今後、対応エリアを拡大する予定はありますか？",
    a: "東京都・神奈川・埼玉・千葉を中心に、全国のオンライン対応を強化していく方針です。代理店パートナーネットワークの拡大を通じて、より多くの地域の中小企業・店舗に支援を届けることを中期的に目指しています。",
  },
  {
    q: "医療・士業・飲食など特定の業種に特化していますか？",
    a: "特定の業種に特化しているわけではなく、地域に拠点を持つ中小企業・店舗全般を対象としています。飲食業・美容業・医療・整体・リフォーム・士業（税理士・弁護士）・学習塾など、地域でのWeb集客を必要とする事業者のご支援に幅広く対応しています。",
  },
  {
    q: "AI活用支援サービスとは具体的にどのようなものですか？",
    a: "業務効率化のためのAIツール導入支援・プロンプト設計・AI活用フローの構築支援です。ChatGPTをはじめとするAIツールを経営・マーケティング・コンテンツ制作に活用できるよう、実務に即したサポートを行います。",
  },
  {
    q: "中小企業・小規模事業者でも相談できますか？",
    a: "はい。個人事業主・小規模事業者・中小企業のご相談を主な対象としています。大手代理店が対応しない規模・予算感のお客様に向けて、コストパフォーマンスの高い支援を提供することが私たちの存在意義のひとつです。",
  },
  {
    q: "SNS運用代行は何の媒体に対応していますか？",
    a: "Instagram・X（旧Twitter）・Facebook・Googleビジネスプロフィールの投稿管理に対応しています。ご利用の媒体・投稿頻度・目的に応じてプランを設計します。詳細はサービス詳細ページまたはお問い合わせにてご確認ください。",
  },
  {
    q: "今後のビジョンをひと言で教えてください。",
    a: "「地域企業が、正しく選ばれる仕組みをつくる」が私たちのビジョンです。良い仕事をしているのにデジタルで存在を知られていない事業者が、Webを通じて正当に評価される状態を増やすことが、株式会社サイプレスの目指す未来です。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社情報", desc: "株式会社サイプレスについて" },
  { href: "/company/profile", label: "会社概要", desc: "基本情報・所在地" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/philosophy", label: "経営理念", desc: "サイプレスのミッション・ビジョン" },
  { href: "/company/value", label: "私たちの価値観", desc: "大切にしていること" },
  { href: "/company/support-policy", label: "サポートポリシー", desc: "支援方針・対応体制" },
  { href: "/company/area", label: "アクセス・所在地", desc: "葛飾区・全国対応" },
  { href: "/services", label: "サービス一覧", desc: "提供サービス全体" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "主力サービスのご案内" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の仕組み" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索への対応" },
  { href: "/services/web", label: "ホームページ制作", desc: "集客設計のサイト制作" },
  { href: "/services/sns", label: "SNS運用代行", desc: "SNSの継続運用支援" },
  { href: "/services/ai", label: "AI活用支援", desc: "業務効率化のAI導入" },
  { href: "/process", label: "ご利用の流れ", desc: "相談から開始まで" },
  { href: "/cost/meo", label: "MEO費用", desc: "月額料金の目安" },
  { href: "/cost/seo", label: "SEO費用", desc: "SEO対策の費用感" },
  { href: "/faq", label: "よくある質問", desc: "サービス全般のQ&A" },
  { href: "/partner", label: "代理店パートナー", desc: "パートナー制度について" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談・ご質問はこちら" },
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

export default function HistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav
              style={{
                fontSize: "12px",
                marginBottom: "24px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ color: "#6B7280", textDecoration: "none" }}>
                ホーム
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/company" style={{ color: "#6B7280", textDecoration: "none" }}>
                会社情報
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>会社の歩み</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              History &amp; Vision
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
              会社の歩み・これからの展望
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "16px",
              }}
            >
              株式会社サイプレスは2026年5月13日、東京都葛飾区で設立されたWebマーケティング会社です。
              まだ歩み始めたばかりの会社ですが、設立に込めた想いとこれから目指す未来をここでお伝えします。
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
              }}
            >
              架空の実績を並べるのではなく、なぜこの会社を作ったか・どんな課題を解決したいか・
              どんな未来を目指しているかを、誠実にお伝えすることがこのページの目的です。
            </p>
          </div>
        </section>

        {/* このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You&apos;ll Learn
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "株式会社サイプレスの設立日・設立の経緯",
                  b: "いつ・どこで・どんな背景のもとで設立されたかをお伝えします。",
                },
                {
                  n: "02",
                  t: "設立に込めた想い・解決したかった課題",
                  b: "なぜこの事業を始めたのか、代表が感じていた問題意識と動機を正直にお伝えします。",
                },
                {
                  n: "03",
                  t: "私たちが目指す未来とビジョン",
                  b: "3〜5年後に実現したいこと、この事業を通じて社会に何をもたらしたいかをご説明します。",
                },
                {
                  n: "04",
                  t: "現在進行中の取り組みと対応領域",
                  b: "SEO・MEO・AIO・AI活用支援など、現在サービスとして展開している領域の全体像を紹介します。",
                },
                {
                  n: "05",
                  t: "今後のサービス・エリア展開の方針",
                  b: "代理店パートナーネットワークの構築や対応エリア拡大の中期的な計画をご紹介します。",
                },
                {
                  n: "06",
                  t: "設立間もない会社だからこそのスタンス",
                  b: "誇大表現・架空実績を排した誠実な情報発信への姿勢について説明します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 0",
                    borderTop: "1px solid #E8E4DC",
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
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 設立の沿革 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Timeline
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              設立の沿革
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "48px",
              }}
            >
              当社はまだ設立から間もない会社です。
              架空の歴史や誇張した実績を並べるのではなく、事実に基づいた沿革を正確にお伝えします。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                {
                  date: "2026年5月13日",
                  title: "株式会社サイプレス 設立",
                  body: "東京都葛飾区白鳥4-6-1-623にて株式会社サイプレスを設立。代表取締役に織田春樹が就任。MEO対策・SEO対策・AIO対策・ホームページ制作を中心に、地域中小企業のWeb集客を支援するマーケティング会社として事業を開始。「地域企業が、正しく選ばれる仕組みをつくる」というビジョンのもと、創業。",
                },
                {
                  date: "2026年5月〜現在",
                  title: "6サービスの提供開始・継続的な体制整備",
                  body: "設立後、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用代行・AI活用支援の6サービスを順次提供開始。公式サイトの公開・専門コラムコンテンツの整備・代理店パートナー制度の構築を進め、地域中小企業への支援体制を整えている。現在も継続的にサービス品質の向上とコンテンツ充実に取り組んでいる段階。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "32px",
                    padding: "28px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#6B7280" }}>{item.date}</p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 設立に込めた想い */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "56px",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative", height: "360px", overflow: "hidden" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                  alt="落ち着いたオフィス環境でノートパソコンを使うスタッフ"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Our Founding Story
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(20px,2.8vw,32px)",
                    color: "#0d1b2a",
                    fontWeight: 700,
                    marginBottom: "24px",
                    lineHeight: 1.3,
                  }}
                >
                  設立に込めた想い
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  株式会社サイプレスを設立した背景には、ひとつの問題意識があります。
                  「良い仕事をしているのに、インターネット上で存在を知られていない事業者が多すぎる」という現実です。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  Googleマップで検索しても表示されない。ホームページが古すぎてスマホで見られない。
                  SNSを発信しているがどこにも届いていない。こうした課題を抱えながらも、忙しく働き続けている地域の中小企業・店舗の方たちを何とかしたい——それが創業の動機です。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  代表・織田春樹は葛飾区を拠点にWebマーケティングの実務を重ね、
                  地域事業者のデジタル集客に関わる中で「自分がやるべき仕事がある」と確信し、会社を設立しました。
                  規模は小さくても、一社一社に真剣に向き合う支援を続けることが私たちの出発点です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 解決したかった課題 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Problem We&apos;re Solving
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              私たちが解決したかった課題
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "48px",
              }}
            >
              地域中小企業のWeb集客において、繰り返し目にしてきた課題があります。
              これらの課題こそ、株式会社サイプレスが存在する理由です。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01",
                  t: "Googleマップに表示されない・順位が低い",
                  b: "良い仕事をしているのに、「近くの○○」「葛飾区の○○」で検索しても競合より下に表示されてしまう。Googleビジネスプロフィールの最適化が不十分なままになっている事業者が多く存在します。MEO対策によって「近くで探している人」に正しくリーチする仕組みを作ることが、私たちの核心的な支援です。",
                },
                {
                  n: "02",
                  t: "ホームページが集客につながっていない",
                  b: "数年前に制作したままのホームページが、スマホで見づらい・表示が遅い・問い合わせ導線がわかりにくいといった問題を抱えたまま放置されているケースが多くあります。集客設計を起点にしたサイト制作と継続的な改善が必要です。",
                },
                {
                  n: "03",
                  t: "SEO・MEO・SNSがバラバラに動いている",
                  b: "それぞれのチャネルが連携していないため、費用と時間をかけても相乗効果が生まれていない状態になっています。SEO・MEO・SNS・Web制作を一括で設計・支援することで、集客チャネル全体の底上げを目指します。",
                },
                {
                  n: "04",
                  t: "AI検索への対応が遅れている",
                  b: "ChatGPT・Gemini・Perplexityの普及により、「AIに聞いて店を選ぶ」行動が急増しています。従来のSEOだけではAI検索からの集客に対応できず、E-E-A-T強化・構造化データ・FAQ設計など専門的な対応が必要です。この領域に早期から対応することが中小企業の競合優位性につながります。",
                },
                {
                  n: "05",
                  t: "大手代理店に依頼できない規模・予算感",
                  b: "大手のWebマーケティング会社は対応規模・最低費用のハードルが高く、地域の中小企業・個人事業主が依頼しづらい実情があります。小規模な事業者に寄り添い、費用対効果の高い支援を提供できる専門家が必要です。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "24px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "10px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 私たちが目指す未来 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Our Vision
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                fontWeight: 700,
                marginBottom: "16px",
                color: "#FFFFFF",
              }}
            >
              私たちが目指す未来
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                maxWidth: "640px",
                marginBottom: "48px",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              株式会社サイプレスは、3〜5年後に以下の状態を実現することを目指しています。
              これはビジョンであり、現時点で達成済みのことではありません。
              正直にお伝えすることが私たちのスタンスです。
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "20px",
                maxWidth: "900px",
              }}
            >
              {[
                {
                  t: "地域中小企業の「デジタルの窓口」になる",
                  b: "MEO・SEO・AIO・Web制作・SNS・AIと、地域ビジネスに必要なデジタル集客のすべてをワンストップで相談・依頼できる専門家として認知されることを目指します。",
                },
                {
                  t: "AI検索時代の先端を走り続ける",
                  b: "ChatGPT・Gemini等のAI検索は今後も急速に進化します。常に最新の動向をキャッチアップし、クライアントが先手を打てる施策を継続的に提供できる会社であり続けます。",
                },
                {
                  t: "誠実な情報発信の基準をつくる",
                  b: "「成果保証」「誇大実績」が横行しているWeb業界において、根拠のある情報・透明な報告・誠実な支援を徹底することで、業界の信頼水準を高める一助になることを目指します。",
                },
                {
                  t: "代理店ネットワークで支援地域を拡大する",
                  b: "東京都・神奈川・埼玉・千葉を超え、全国の地域中小企業に支援を届けるため、品質基準を満たした代理店パートナーのネットワークを構築していきます。",
                },
                {
                  t: "継続率の高いサービスで長期伴走を実現する",
                  b: "「制作して終わり」「施策して終わり」ではなく、毎月の継続的な改善と丁寧なレポーティングを通じて、長期にわたって成果を積み上げられるサービスモデルを確立します。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px",
                    border: "1px solid rgba(196,184,154,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: "1.9" }}>
                    {item.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 現在進行中の取り組み */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Current Initiatives
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              現在進行中の取り組み
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "48px",
              }}
            >
              設立後、サービス提供と並行して以下の取り組みを進めています。
              これらは現在進行形の活動であり、完了済みの実績として誇張するものではありません。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01",
                  t: "MEO・SEO・AIO — 最前線への継続的な対応",
                  b: "Googleのローカル検索アルゴリズム・コアアップデート・AI検索エンジンの動向変化を継続的にウォッチし、サービス内容に反映しています。特にAI検索（ChatGPT・Gemini・Perplexity）への引用・回答表示を狙うAIO対策は、2026年時点でもまだ実務知見が蓄積中の領域であり、最前線で実践的な方法論を磨いています。",
                },
                {
                  n: "02",
                  t: "専門コンテンツの継続的な整備",
                  b: "MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用に関する専門性の高いコラムコンテンツを公式サイト上で継続的に発信しています。お客様が自社でも理解して判断できる知識の提供と、E-E-A-T（経験・専門性・権威性・信頼性）の蓄積を目的としています。",
                },
                {
                  n: "03",
                  t: "代理店パートナー制度の構築",
                  b: "営業代理店・紹介パートナーの2種類のパートナープログラムを整備中です。品質基準を維持するため審査制を採用し、サービスの価値を正しく伝えられるパートナーとのみ提携する方針です。代理店を通じて、より多くの地域事業者への支援を届けることを目指しています。",
                },
                {
                  n: "04",
                  t: "AI活用支援メニューの拡充",
                  b: "ChatGPTをはじめとするAIツールの業務活用は急速に広まっています。マーケティング・コンテンツ制作・顧客対応・業務効率化といった実務での活用場面に応じた支援メニューを継続的に拡充しています。「AIをどう使えばいいかわからない」という中小企業の相談に具体的に応えられる体制を整えています。",
                },
                {
                  n: "05",
                  t: "対応エリアの継続的な拡充",
                  b: "現在は東京都・神奈川・埼玉・千葉を主な対応エリアとし、オンラインにて全国対応しています。代理店ネットワークの整備と並行して、より多くのエリアの事業者が身近に相談できる体制の構築を進めています。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "24px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "10px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 会社概要へのリンク */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "800px" }}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Overview
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(20px,2.8vw,30px)",
                  color: "#0d1b2a",
                  fontWeight: 700,
                  marginBottom: "24px",
                  lineHeight: 1.3,
                }}
              >
                株式会社サイプレスについて
              </h2>
              <div style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                <p style={{ marginBottom: "20px" }}>
                  株式会社サイプレスは、2026年5月13日に東京都葛飾区で設立されたWebマーケティング会社です。
                  「地域企業が、正しく選ばれる仕組みをつくる」というビジョンのもと、
                  MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用代行・AI活用支援の6サービスで、
                  地域中小企業のWeb集客を総合的に支援しています。
                </p>
                <p style={{ marginBottom: "20px" }}>
                  設立間もない会社ではありますが、代表・織田春樹のWebマーケティング実務経験をもとに、
                  一社一社のクライアントと真剣に向き合い、成果が出るまで伴走する姿勢を大切にしています。
                  誠実な情報発信と透明性のある支援を徹底することが、私たちの根本的な姿勢です。
                </p>
                <p>
                  東京都・神奈川・埼玉・千葉を主な対応エリアとし、オンラインにて全国対応しています。
                  業種・規模を問わず、Web集客に課題を抱える中小企業・店舗・士業・医療機関の方はお気軽にご相談ください。
                </p>
              </div>
              <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="/company/profile"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#0d1b2a",
                    border: "1px solid #E8E4DC",
                    padding: "10px 20px",
                    textDecoration: "none",
                    background: "#FFFFFF",
                  }}
                >
                  会社概要を見る →
                </Link>
                <Link
                  href="/company/message"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "#0d1b2a",
                    border: "1px solid #E8E4DC",
                    padding: "10px 20px",
                    textDecoration: "none",
                    background: "#FFFFFF",
                  }}
                >
                  代表メッセージを見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ intro */}
        <section style={{ background: "#FFFFFF", padding: "60px 0 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              会社の歩みに関するよくある質問
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                paddingBottom: "40px",
              }}
            >
              設立の経緯・ビジョン・今後の展開についてよくいただくご質問をまとめました。
              掲載されていないご質問はメールにてお気軽にお問い合わせください。
            </p>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="株式会社サイプレスの歩みについてよくある質問"
          bgColor="#FFFFFF"
        />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="株式会社サイプレスに相談する"
          body="設立間もない会社ですが、地域中小企業・店舗のWeb集客に真剣に向き合っています。MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援、まずは無料でご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
