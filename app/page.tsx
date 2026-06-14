import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getLatestColumns } from "@/lib/data/columns";
import { getLatestNews } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "株式会社サイプレス | MEO・SEO・AIO・ホームページ制作",
  description: "株式会社サイプレスは、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援を通じて、中小企業のWeb集客を支援するマーケティングカンパニーです。東京都葛飾区。",
  keywords: ["MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "Webマーケティング", "株式会社サイプレス"],
  openGraph: {
    title: "株式会社サイプレス | MEO・SEO・AIO・ホームページ制作",
    description: "MEO対策・SEO対策・AIO対策・ホームページ制作を通じて、中小企業のWeb集客を支援するマーケティングカンパニー。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Home() {
  const columns = getLatestColumns(3);
  const news = getLatestNews(5);

  return (
    <>
      <Header />
      <main>
        {/* ============================================================
            1. HERO — hero.png full background
        ============================================================ */}
        <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
          <Image
            src="/hero.png"
            alt="株式会社サイプレス"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(10,18,36,0.65)" }} />
          <div
            className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center"
            style={{ minHeight: "92vh" }}
          >
            <div className="max-w-2xl">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.3em",
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "11px",
                }}
              >
                AI × Web Marketing
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(40px,6vw,82px)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  marginTop: "24px",
                  marginBottom: "28px",
                }}
              >
                AIで、地域企業の<br />集客を変える。
              </h1>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: "1.9", maxWidth: "520px" }}>
                株式会社サイプレスは、MEO・SEO・AIO・ホームページ制作を通じて、<br className="hidden md:block" />
                中小企業のWeb集客を支援するマーケティングカンパニーです。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. ABOUT — 2-column, DESK image right
        ============================================================ */}
        <section className="py-28 md:py-36" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* LEFT: text */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    fontSize: "11px",
                  }}
                >
                  About
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(26px,3.5vw,40px)",
                    color: "#0d1b2a",
                    lineHeight: 1.3,
                    marginTop: "20px",
                    marginBottom: "28px",
                  }}
                >
                  地域企業のWeb集客を、<br />設計から運用まで支援する。
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  多くの中小企業・地域ビジネスは、優れたサービスや商品を持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていません。Webサイトはあるが集客できない。Googleマップに表示されない。SNSを運用しているが成果が見えない。そういった課題は、設計と運用の両方が揃って初めて解決します。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  サイプレスは、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援という6つの領域を横断しながら、集客の仕組みを根本から整えます。単発の制作だけでなく、公開後の改善・分析・更新まで継続的に関わることで、検索されやすい状態を維持します。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  AI活用により、コンテンツ制作・投稿作成・データ分析の速度を上げ、これまで大企業のみが持てた情報発信の体制を、中小企業でも実現できるよう支援しています。創業以来、全国の中小企業・地域ビジネスの集客を支援してきた経験をもとに、現場に即した実践的な提案を行います。
                </p>
                <div style={{ marginTop: "40px" }}>
                  {[
                    {
                      num: "01",
                      title: "MEO・SEO・AIOを横断した設計",
                      body: "Googleマップ・自然検索・AI検索の3つを分断せず、一体で設計することで複数の集客経路を構築します。",
                    },
                    {
                      num: "02",
                      title: "制作会社ではなく、マーケティング会社",
                      body: "サイトの見た目だけを作る制作会社ではなく、集客・問い合わせ・売上改善を目的とした設計を行います。",
                    },
                    {
                      num: "03",
                      title: "AI活用による継続的な改善",
                      body: "AIを活用して投稿・記事・分析レポートの作成を高速化し、公開後の継続的な改善体制を構築します。",
                    },
                    {
                      num: "04",
                      title: "地域ビジネスへの深い理解",
                      body: "店舗・施設・士業・医療・建設業など、地域密着型のビジネス特性を理解した支援を行います。",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      style={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px 0",
                        borderTop: "1px solid #ece8e0",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "#9ca3af",
                          fontSize: "12px",
                          minWidth: "28px",
                          paddingTop: "2px",
                        }}
                      >
                        {item.num}
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
                          {item.title}
                        </p>
                        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* RIGHT: DESK image — full column height, no border-radius */}
              <div style={{ position: "relative", height: "580px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                  alt="サイプレスの働く環境"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.06)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. BUSINESS — 6 services, vertical rows
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div style={{ marginBottom: "56px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.25em",
                  color: "#9ca3af",
                  fontSize: "11px",
                  marginBottom: "16px",
                }}
              >
                Services
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(26px,3.5vw,42px)",
                  color: "#0d1b2a",
                  lineHeight: 1.3,
                  fontWeight: 700,
                }}
              >
                6つの領域で、<br />集客を設計する。
              </h2>
            </div>

            <div>
              {[
                {
                  num: "01",
                  label: "MEO対策",
                  href: "/services/meo",
                  body: "Googleマップ上の表示順位を改善し、地域の検索ユーザーにアプローチします。Googleビジネスプロフィール（GBP）の最適化・写真・投稿・口コミ対策・NAP情報整理など、MEO全般を支援します。店舗・医療・士業・美容・飲食などの地域ビジネスに特に効果的です。",
                  related: ["/meo", "/meo/google-business-profile", "/meo/review-management"],
                  relatedLabels: ["MEO対策とは", "Googleビジネスプロフィール", "口コミ対策"],
                },
                {
                  num: "02",
                  label: "SEO対策",
                  href: "/services/seo",
                  body: "Google検索での自然流入を増やすための施策を総合的に提供します。キーワード調査・内部SEO・コンテンツSEO・テクニカルSEO・被リンク対策など、検索順位向上に必要な施策を組み合わせて実施します。即効性より持続的な集客基盤の構築を重視します。",
                  related: ["/seo", "/seo/internal-seo", "/seo/content-seo"],
                  relatedLabels: ["SEO対策とは", "内部SEO", "コンテンツSEO"],
                },
                {
                  num: "03",
                  label: "AIO対策",
                  href: "/services/aio",
                  body: "ChatGPT・Gemini・Perplexity・Google AI Overviewなど、AI検索エンジンからの引用・回答表示を目指した情報設計を行います。構造化データ・FAQ設計・E-E-A-T強化・コンテンツの一次情報化など、次世代の検索に対応したサイト設計を提供します。",
                  related: ["/aio", "/aio/chatgpt", "/aio/structured-data"],
                  relatedLabels: ["AIO対策とは", "ChatGPT対策", "構造化データ"],
                },
                {
                  num: "04",
                  label: "ホームページ制作",
                  href: "/services/web-design",
                  body: "見た目の美しさだけでなく、集客・問い合わせ・採用を目的とした設計を行います。Next.js / WordPress / Vercel構成を活用し、表示速度・モバイル対応・SEO設計・更新性を兼ね備えたサイトを制作します。制作後の保守・改善サポートにも対応しています。",
                  related: ["/web-design", "/web-design/corporate-site", "/web-design/seo-site"],
                  relatedLabels: ["Web制作とは", "コーポレートサイト", "SEOに強いサイト"],
                },
                {
                  num: "05",
                  label: "SNS運用",
                  href: "/services/sns",
                  body: "Instagram・X（旧Twitter）・LINE公式アカウントなどのSNS運用を支援します。投稿企画・文章作成・ハッシュタグ設計・分析・改善まで一貫して対応し、MEOやSEOとの連動を意識した情報発信の体制を構築します。",
                  related: ["/services/meo", "/meo/store-marketing"],
                  relatedLabels: ["MEO対策との連動", "店舗集客"],
                },
                {
                  num: "06",
                  label: "AI活用支援",
                  href: "/services/ai",
                  body: "業務効率化・チャットボット構築・コンテンツ制作自動化・ワークフロー改善など、AIを活用した経営改善を支援します。何から始めればよいかわからない企業から、すでにAI導入を検討している企業まで、現状に合わせた伴走型の支援を行います。",
                  related: ["/ai", "/ai/automation", "/ai/chatbot"],
                  relatedLabels: ["AI活用支援とは", "業務自動化", "AIチャットボット"],
                },
              ].map((svc, i) => (
                <div key={svc.num}>
                  <div
                    className="grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 py-10"
                    style={{ borderTop: "1px solid #e8e4dc" }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "#9ca3af",
                          fontSize: "12px",
                        }}
                      >
                        {svc.num}
                      </span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "18px",
                          fontWeight: 700,
                          color: "#0d1b2a",
                          marginBottom: "12px",
                        }}
                      >
                        {svc.label}
                      </h3>
                      <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                        {svc.body}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {svc.related.map((href, j) => (
                          <Link key={href} href={href} className="text-[12px] hover:underline" style={{ color: "#6b7280" }}>
                            → {svc.relatedLabels[j]}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="md:text-right">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-1.5 text-[13px] transition-colors"
                        style={{ color: "#374151" }}
                      >
                        詳しく見る
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  {i === 2 && (
                    <div style={{ position: "relative", height: "260px", overflow: "hidden", marginBottom: "0" }}>
                      <Image
                        src="/ChatGPT Image 2026年6月13日 19_18_57.png"
                        alt="Webマーケティング支援の実績"
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.35)" }} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
                        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
                          <p
                            style={{
                              fontFamily: "var(--font-serif)",
                              color: "rgba(255,255,255,0.9)",
                              fontSize: "20px",
                              fontWeight: 500,
                            }}
                          >
                            MEO・SEO・AIOを組み合わせた、包括的な集客設計
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ============================================================
            4. PHILOSOPHY — dark section, DIGITAL_BG background
        ============================================================ */}
        <section
          style={{
            background: "#0d1b2a",
            position: "relative",
            padding: "120px 0",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月13日 19_22_31.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              style={{ opacity: 0.12 }}
            />
          </div>
          <div
            style={{
              position: "relative",
              zIndex: 10,
              maxWidth: "72rem",
              margin: "0 auto",
              padding: "0 40px",
            }}
          >
            <div style={{ maxWidth: "760px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.25em",
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "11px",
                }}
              >
                Philosophy
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px,4vw,52px)",
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginTop: "24px",
                  marginBottom: "36px",
                  fontWeight: 700,
                }}
              >
                地域企業が、<br />正しく選ばれる仕組みをつくる。
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.65)", marginBottom: "20px" }}>
                素晴らしいサービス・技術・想いを持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていない中小企業・地域ビジネスが多く存在します。
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
                私たちは、AIとWebマーケティングを活用して集客の仕組みを根本から変え、正しい会社が正しく選ばれる世界の実現を目指しています。
              </p>
              <a
                href="/company/philosophy"
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  paddingBottom: "2px",
                }}
              >
                企業理念を読む →
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. STRENGTH — image left, list right
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "120px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "0.25em",
                color: "#9ca3af",
                fontSize: "11px",
                marginBottom: "16px",
              }}
            >
              Our Strength
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(24px,3vw,38px)",
                color: "#0d1b2a",
                marginBottom: "60px",
                fontWeight: 700,
              }}
            >
              サイプレスが選ばれる理由。
            </h2>
            <div
              className="grid md:grid-cols-[1fr_1.3fr] gap-16"
              style={{ alignItems: "start" }}
            >
              {/* Image — left column, tall */}
              <div
                className="order-2 md:order-1"
                style={{ position: "relative", height: "500px" }}
              >
                <Image
                  src="/1.png"
                  alt="Webマーケティング戦略会議"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.1)" }} />
              </div>
              {/* List — right column */}
              <div className="order-1 md:order-2">
                {[
                  {
                    num: "01",
                    title: "集客設計から逆算したWeb制作",
                    body: "「見た目のいいサイトを作る」のではなく、「どんな人に、どのキーワードで検索されて、どんな行動をとってほしいか」を起点にサイト設計を行います。デザインより、集客動線と検索設計を先に考えます。",
                  },
                  {
                    num: "02",
                    title: "MEO・SEO・AIOを横断した支援",
                    body: "Googleマップ・自然検索・AI検索はそれぞれ異なる集客経路です。3つを分断して考えず、一体で設計することで、複数の集客経路から継続的に流入を生み出す体制を構築します。",
                  },
                  {
                    num: "03",
                    title: "AIを活用した継続運用",
                    body: "ブログ記事・SNS投稿・Googleビジネスプロフィールへの投稿をAIで効率化し、コンテンツの継続的な更新体制を実現します。更新が止まると検索評価も下がる、という問題を解決します。",
                  },
                  {
                    num: "04",
                    title: "地域ビジネスへの深い理解",
                    body: "店舗集客・地域名キーワード・来店導線・口コミなど、地域密着型ビジネスに特有の課題と打ち手を熟知しています。全国の幅広い業種に対応しています。",
                  },
                  {
                    num: "05",
                    title: "制作後の改善まで対応",
                    body: "サイト公開・MEO設定後も、アクセス解析・順位計測・改善提案を継続します。制作して終わりではなく、成果が出るまで関わり続けることを大切にしています。",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    style={{
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      borderTop: "1px solid #ece8e0",
                    }}
                  >
                    <div style={{ display: "flex", gap: "20px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "#c4b89a",
                          fontSize: "12px",
                          minWidth: "28px",
                        }}
                      >
                        {item.num}
                      </span>
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "16px",
                            color: "#0d1b2a",
                            fontWeight: 600,
                            marginBottom: "8px",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #ece8e0" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. SERVICE STRUCTURE — #f8f6f2 background
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    fontSize: "11px",
                    marginBottom: "16px",
                  }}
                >
                  Structure
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(24px,3vw,38px)",
                    color: "#0d1b2a",
                    lineHeight: 1.3,
                    fontWeight: 700,
                    marginBottom: "32px",
                  }}
                >
                  6つの事業は、<br />連動して機能する。
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  MEO・SEO・AIO・Web制作・SNS・AI活用は、それぞれ独立したサービスではなく、互いに連動することで最大の効果を発揮します。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  たとえば、Googleビジネスプロフィール（MEO）を整えながら、Webサイト（SEO）のコンテンツを充実させ、AIを使ってSNSと記事の更新を継続する。この体制が揃うことで、複数の集客経路から継続的にユーザーを獲得できます。
                </p>
              </div>
              <div>
                {/* DIGITAL_PHONE image — 200px, above table */}
                <div style={{ position: "relative", height: "200px", marginBottom: "0", overflow: "hidden" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_18_03.png"
                    alt="デジタルマーケティングの連動"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.12)" }} />
                </div>
                <div>
                  {[
                    { from: "MEO対策", to: "→ 地域名検索からの来店・問い合わせ" },
                    { from: "SEO対策", to: "→ キーワード検索からのサイト流入" },
                    { from: "AIO対策", to: "→ AI検索での引用・回答表示" },
                    { from: "ホームページ制作", to: "→ 問い合わせ・採用の受け皿" },
                    { from: "SNS運用", to: "→ 認知拡大・MEOとの相乗効果" },
                    { from: "AI活用支援", to: "→ 継続的な情報発信の効率化" },
                  ].map((row) => (
                    <div
                      key={row.from}
                      className="flex items-center gap-4 py-4"
                      style={{ borderBottom: "1px solid #e8e4dc" }}
                    >
                      <span className="text-[14px] font-semibold w-36 shrink-0" style={{ color: "#0d1b2a" }}>
                        {row.from}
                      </span>
                      <span className="text-[13px]" style={{ color: "#6b7280" }}>{row.to}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "28px" }}>
                  <Link
                    href="/business"
                    className="text-[13px] transition-colors hover:text-[#0d1b2a]"
                    style={{ color: "#374151", borderBottom: "1px solid #d1c9be", paddingBottom: "2px" }}
                  >
                    事業内容の詳細を見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. REPRESENTATIVE MESSAGE
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* LEFT: message text */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    fontSize: "11px",
                    marginBottom: "16px",
                  }}
                >
                  Message
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px,2.8vw,34px)",
                    color: "#0d1b2a",
                    lineHeight: 1.3,
                    fontWeight: 700,
                    marginBottom: "32px",
                  }}
                >
                  正しい会社が、<br />正しく選ばれる世界をつくりたい。
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  私がサイプレスを立ち上げた理由は、「良い会社が検索されない」という現実への問題意識からです。素晴らしい技術・サービス・想いを持ちながら、Web上での露出が少ないだけで機会を逃している企業を数多く見てきました。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "20px" }}>
                  AIとWebマーケティングの掛け合わせにより、これまで大企業にしかできなかったような継続的な情報発信と集客設計が、中小企業にも実現できる時代になっています。私たちはその橋渡しをする会社でありたいと考えています。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "32px" }}>
                  クライアントの事業に深く関わり、数字で成果を確認しながら改善を続ける。その姿勢を大切にしています。
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#0d1b2a",
                      marginBottom: "4px",
                    }}
                  >
                    織田 春樹
                  </p>
                  <p style={{ fontSize: "13px", color: "#6b7280" }}>代表取締役　株式会社サイプレス</p>
                  <div style={{ marginTop: "16px" }}>
                    <Link
                      href="/company/message"
                      className="text-[13px] transition-colors hover:text-[#0d1b2a]"
                      style={{ color: "#374151", borderBottom: "1px solid #d1c9be", paddingBottom: "2px" }}
                    >
                      代表挨拶を読む →
                    </Link>
                  </div>
                </div>
              </div>
              {/* RIGHT: HANDSHAKE image + company profile */}
              <div>
                {/* HANDSHAKE image — 240px, full column width, no border-radius */}
                <div style={{ position: "relative", height: "240px", marginBottom: "0", overflow: "hidden" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_11_20.png"
                    alt="パートナーシップ・信頼関係"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.08)" }} />
                </div>
                {/* Company profile — no shadow, no blue */}
                <div style={{ padding: "32px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.2em",
                      fontSize: "11px",
                      color: "#9ca3af",
                      marginBottom: "20px",
                    }}
                  >
                    Company Profile
                  </p>
                  <div>
                    {[
                      { label: "会社名", value: "株式会社サイプレス" },
                      { label: "代表取締役", value: "織田 春樹" },
                      { label: "設立", value: "2026年5月13日" },
                      { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                      { label: "事業内容", value: "Webマーケティング支援全般" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex gap-4 text-[13px] py-3"
                        style={{ borderBottom: "1px solid #ece8e0" }}
                      >
                        <span className="w-24 shrink-0" style={{ color: "#9ca3af" }}>{row.label}</span>
                        <span style={{ color: "#374151" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <Link href="/company/profile" className="text-[12px]" style={{ color: "#6b7280" }}>
                      会社概要 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. RECRUIT — #f8f6f2 background
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-16 items-end">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    fontSize: "11px",
                    marginBottom: "16px",
                  }}
                >
                  Recruit
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(24px,3vw,38px)",
                    color: "#0d1b2a",
                    lineHeight: 1.3,
                    fontWeight: 700,
                    marginBottom: "28px",
                  }}
                >
                  AI×Webマーケティングの<br />最前線で、一緒に働く仲間を募集しています。
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "28px" }}>
                  MEO・SEO・AIO・AI活用という成長領域で、経営者への提案から施策の実行・改善まで携わることができます。業界未経験でも、意欲があれば入社後に学べる環境を整えています。
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Webマーケティング営業", "マーケター職"].map((role) => (
                    <span
                      key={role}
                      className="text-[13px] px-4 py-1.5"
                      style={{ border: "1px solid #e8e4dc", color: "#374151", background: "#ffffff" }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <Link
                  href="/recruit"
                  className="text-[13px] transition-colors hover:text-[#0d1b2a]"
                  style={{ color: "#374151", borderBottom: "1px solid #d1c9be", paddingBottom: "2px" }}
                >
                  採用情報を見る →
                </Link>
              </div>
              <div>
                {/* WOMEN_PHONE image — 220px, right column, above stats */}
                <div style={{ position: "relative", height: "220px", marginBottom: "0", overflow: "hidden" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_21_48.png"
                    alt="チームで働く環境"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.08)" }} />
                </div>
                {[
                  { label: "月給", value: "40万円以上" },
                  { label: "年間休日", value: "130日（完全週休2日制）" },
                  { label: "勤務形態", value: "フルリモート可" },
                  { label: "応募資格", value: "未経験歓迎" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-4"
                    style={{ borderBottom: "1px solid #e8e4dc" }}
                  >
                    <span className="text-[13px]" style={{ color: "#9ca3af" }}>{item.label}</span>
                    <span className="text-[14px] font-semibold" style={{ color: "#0d1b2a" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            9. COLUMN — white background
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div
              className="flex items-end justify-between mb-12"
              style={{ borderBottom: "1px solid #ece8e0", paddingBottom: "24px" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    fontSize: "11px",
                    marginBottom: "10px",
                  }}
                >
                  Column
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "22px",
                    color: "#0d1b2a",
                    fontWeight: 700,
                  }}
                >
                  最新コラム
                </h2>
              </div>
              <Link href="/column" className="text-[13px]" style={{ color: "#6b7280" }}>
                すべて見る →
              </Link>
            </div>
            <div>
              {columns.map((col) => (
                <Link
                  key={col.slug}
                  href={`/column/${col.slug}`}
                  className="group flex items-start gap-8 py-6 transition-colors hover:bg-[#f8f6f2] -mx-3 px-3"
                  style={{ borderBottom: "1px solid #ece8e0" }}
                >
                  <span className="text-[12px] shrink-0 mt-1" style={{ fontFamily: "var(--font-display)", color: "#9ca3af" }}>
                    {col.publishedAt.replace(/-/g, ".")}
                  </span>
                  <span
                    className="text-[12px] px-2.5 py-1 shrink-0"
                    style={{ background: "#ece8e0", color: "#6b7280" }}
                  >
                    {col.category}
                  </span>
                  <span
                    className="text-[14px] leading-relaxed group-hover:text-[#0d1b2a] transition-colors"
                    style={{ color: "#374151" }}
                  >
                    {col.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            10. NEWS — #f8f6f2 background
        ============================================================ */}
        <section className="py-16" style={{ background: "#f8f6f2" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div
              className="flex items-end justify-between mb-8"
              style={{ borderBottom: "1px solid #e8e4dc", paddingBottom: "16px" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    fontSize: "11px",
                    marginBottom: "8px",
                  }}
                >
                  News
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "18px",
                    color: "#0d1b2a",
                    fontWeight: 700,
                  }}
                >
                  お知らせ
                </h2>
              </div>
              <Link href="/news" className="text-[13px]" style={{ color: "#6b7280" }}>
                すべて見る →
              </Link>
            </div>
            <div>
              {news.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group flex items-center gap-6 py-4 hover:bg-white transition-colors -mx-3 px-3"
                  style={{ borderBottom: "1px solid #e8e4dc" }}
                >
                  <span
                    className="text-[12px] shrink-0"
                    style={{ fontFamily: "var(--font-display)", color: "#9ca3af" }}
                  >
                    {item.publishedAt.replace(/-/g, ".")}
                  </span>
                  <span
                    className="text-[12px] px-2.5 py-0.5 shrink-0"
                    style={{ background: "#e8e4dc", color: "#6b7280" }}
                  >
                    {item.category}
                  </span>
                  <span
                    className="text-[13px] group-hover:text-[#0d1b2a] transition-colors"
                    style={{ color: "#374151" }}
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            11. CONTACT — minimal, no blue CTA
        ============================================================ */}
        <section style={{ background: "#FFFFFF", padding: "96px 0", borderTop: "1px solid #ece8e0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "600px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.25em",
                  color: "#9ca3af",
                  fontSize: "11px",
                  marginBottom: "16px",
                }}
              >
                Contact
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(22px,2.8vw,34px)",
                  color: "#0d1b2a",
                  fontWeight: 700,
                  marginBottom: "20px",
                }}
              >
                Web集客に関するご相談
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "32px" }}>
                MEO、SEO、AIO、ホームページ制作、SNS運用など、Web集客に関するご相談を承っています。現在の状況を確認したうえで、必要な施策をご提案します。
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  border: "1px solid #1a2332",
                  color: "#1a2332",
                  fontSize: "14px",
                  transition: "all 0.2s",
                }}
                className="hover:bg-[#1a2332] hover:text-white"
              >
                お問い合わせ →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
