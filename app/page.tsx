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
            1. HERO — hero.png full background, no CTA
        ============================================================ */}
        <section className="relative overflow-hidden" style={{ minHeight: "88vh" }}>
          <Image
            src="/hero.png"
            alt="株式会社サイプレス"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(8,14,30,0.62)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "88vh" }}>
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
                AI × Web Marketing
              </p>
              <h1
                className="font-black text-white leading-[1.1] tracking-tight mb-8"
                style={{ fontSize: "clamp(38px, 5.5vw, 78px)" }}
              >
                AIで、地域企業の<br />集客を変える。
              </h1>
              <p className="text-[16px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px" }}>
                株式会社サイプレスは、MEO・SEO・AIO・ホームページ制作を通じて、<br className="hidden md:block" />
                中小企業のWeb集客を支援するマーケティングカンパニーです。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            2. ABOUT
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>About</p>
                <h2
                  className="font-black leading-tight tracking-tight mb-8"
                  style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#0F172A" }}
                >
                  地域企業のWeb集客を、<br />設計から運用まで支援する。
                </h2>
                <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                  多くの中小企業・地域ビジネスは、優れたサービスや商品を持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていません。Webサイトはあるが集客できない。Googleマップに表示されない。SNSを運用しているが成果が見えない。そういった課題は、設計と運用の両方が揃って初めて解決します。
                </p>
                <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                  サイプレスは、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援という6つの領域を横断しながら、集客の仕組みを根本から整えます。単発の制作だけでなく、公開後の改善・分析・更新まで継続的に関わることで、検索されやすい状態を維持します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  AI活用により、コンテンツ制作・投稿作成・データ分析の速度を上げ、これまで大企業のみが持てた情報発信の体制を、中小企業でも実現できるよう支援しています。
                </p>
              </div>
              <div>
                <div className="relative w-full mb-8" style={{ paddingBottom: "75%" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                    alt="落ち着いたオフィス環境でのWeb制作・マーケティング業務"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-8">
                  {[
                    {
                      num: "01",
                      title: "MEO・SEO・AIOを横断した設計",
                      body: "Googleマップ・自然検索・AI検索、それぞれの集客経路を設計段階から考慮した提案を行います。",
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
                      title: "地域ビジネスへの理解",
                      body: "店舗・施設・士業・医療・建設業など、地域密着型のビジネス特性を理解した支援を行います。",
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-6" style={{ borderTop: "1px solid #F0EDE6", paddingTop: "24px" }}>
                      <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                      <div>
                        <p className="font-bold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                        <p className="text-[14px] leading-relaxed" style={{ color: "#6B7280" }}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. BUSINESS — 6事業を縦に読ませる
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Services</p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#0F172A" }}
              >
                6つの領域で、<br />集客を設計する。
              </h2>
            </div>

            <div className="space-y-0">
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
                    style={{ borderTop: "1px solid #E8E4DC" }}
                  >
                    <div>
                      <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{svc.num}</span>
                    </div>
                    <div>
                      <h3 className="font-black text-[18px] mb-3" style={{ color: "#0F172A" }}>{svc.label}</h3>
                      <p className="text-[14px] leading-[1.9] mb-4" style={{ color: "#374151" }}>{svc.body}</p>
                      <div className="flex flex-wrap gap-3">
                        {svc.related.map((href, j) => (
                          <Link key={href} href={href} className="text-[12px] hover:underline" style={{ color: "#6B7280" }}>
                            → {svc.relatedLabels[j]}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="md:text-right">
                      <Link
                        href={svc.href}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors"
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
                    <div className="relative w-full my-4" style={{ height: "280px" }}>
                      <Image
                        src="/ChatGPT Image 2026年6月13日 19_18_57.png"
                        alt="Webマーケティング戦略の会議"
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.3)" }} />
                    </div>
                  )}
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ============================================================
            4. PHILOSOPHY — dark section, large copy
        ============================================================ */}
        <section className="py-28 md:py-40 relative" style={{ background: "#0F172A" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-10" style={{ color: "#475569" }}>Philosophy</p>
              <h2
                className="font-black text-white leading-[1.1] tracking-tight mb-10"
                style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
              >
                地域企業が、<br />正しく選ばれる仕組みをつくる。
              </h2>
              <p className="text-[16px] leading-[1.9] mb-8" style={{ color: "#94A3B8" }}>
                素晴らしいサービス・技術・想いを持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていない中小企業・地域ビジネスが多く存在します。
              </p>
              <p className="text-[16px] leading-[1.9] mb-12" style={{ color: "#94A3B8" }}>
                私たちは、AIとWebマーケティングを活用して集客の仕組みを根本から変え、正しい会社が正しく選ばれる世界の実現を目指しています。中小企業が大企業と対等なデジタル競争力を持てるよう、継続的に支援します。
              </p>
              <Link
                href="/company/philosophy"
                className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
                style={{ color: "#94A3B8", borderBottom: "1px solid #334155", paddingBottom: "2px" }}
              >
                企業理念を読む →
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. STRENGTH — numbered, horizontal rules
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Strength</p>
              <h2
                className="font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#0F172A" }}
              >
                サイプレスが選ばれる理由。
              </h2>
            </div>

            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
              <div className="relative" style={{ height: "480px", overflow: "hidden" }}>
                <Image
                  src="/1.png"
                  alt="グラフを確認しながら戦略を議論するチームミーティング"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
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
              ].map((item, i) => (
                <div
                  key={item.num}
                  className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-10"
                  style={{ borderTop: "1px solid #F0EDE6" }}
                >
                  <div>
                    <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #F0EDE6" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. SERVICE STRUCTURE — how services work together
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Structure</p>
                <h2
                  className="font-black leading-tight tracking-tight mb-8"
                  style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#0F172A" }}
                >
                  6つの事業は、<br />連動して機能する。
                </h2>
                <p className="text-[15px] leading-[1.9] mb-6" style={{ color: "#374151" }}>
                  MEO・SEO・AIO・Web制作・SNS・AI活用は、それぞれ独立したサービスではなく、互いに連動することで最大の効果を発揮します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  たとえば、Googleビジネスプロフィール（MEO）を整えながら、Webサイト（SEO）のコンテンツを充実させ、AIを使ってSNSと記事の更新を継続する。この体制が揃うことで、複数の集客経路から継続的にユーザーを獲得できます。
                </p>
              </div>
              <div>
                <div className="relative w-full mb-8" style={{ height: "200px" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_18_03.png"
                    alt="デジタルマーケティングの連動"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-0">
                  {[
                    { from: "MEO対策", to: "→ 地域名検索からの来店・問い合わせ" },
                    { from: "SEO対策", to: "→ キーワード検索からのサイト流入" },
                    { from: "AIO対策", to: "→ AI検索での引用・回答表示" },
                    { from: "ホームページ制作", to: "→ 問い合わせ・採用の受け皿" },
                    { from: "SNS運用", to: "→ 認知拡大・MEOとの相乗効果" },
                    { from: "AI活用支援", to: "→ 継続的な情報発信の効率化" },
                  ].map((row, i) => (
                    <div
                      key={row.from}
                      className="flex items-center gap-4 py-4"
                      style={{ borderBottom: "1px solid #E8E4DC" }}
                    >
                      <span className="text-[14px] font-semibold w-32 shrink-0" style={{ color: "#0F172A" }}>{row.from}</span>
                      <span className="text-[13px]" style={{ color: "#6B7280" }}>{row.to}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/business"
                    className="text-[13px] font-medium transition-colors hover:text-[#0F172A]"
                    style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
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
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Message</p>
                <h2
                  className="font-black leading-tight tracking-tight mb-8"
                  style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0F172A" }}
                >
                  正しい会社が、<br />正しく選ばれる世界をつくりたい。
                </h2>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  私がサイプレスを立ち上げた理由は、「良い会社が検索されない」という現実への問題意識からです。素晴らしい技術・サービス・想いを持ちながら、Web上での露出が少ないだけで機会を逃している企業を数多く見てきました。
                </p>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  AIとWebマーケティングの掛け合わせにより、これまで大企業にしかできなかったような継続的な情報発信と集客設計が、中小企業にも実現できる時代になっています。私たちはその橋渡しをする会社でありたいと考えています。
                </p>
                <p className="text-[15px] leading-[1.9] mb-8" style={{ color: "#374151" }}>
                  クライアントの事業に深く関わり、数字で成果を確認しながら改善を続ける。その姿勢を大切にしています。
                </p>
                <div>
                  <p className="font-bold text-[15px] mb-0.5" style={{ color: "#0F172A" }}>織田 春樹</p>
                  <p className="text-[13px]" style={{ color: "#6B7280" }}>代表取締役　株式会社サイプレス</p>
                  <div className="mt-4">
                    <Link
                      href="/company/message"
                      className="text-[13px] font-medium transition-colors hover:text-[#0F172A]"
                      style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
                    >
                      代表挨拶を読む →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative w-full mb-6" style={{ height: "220px" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_11_20.png"
                    alt="パートナーシップ・信頼関係"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="text-[12px] font-semibold tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>Company Profile</p>
                  <div className="space-y-3">
                    {[
                      { label: "会社名", value: "株式会社サイプレス" },
                      { label: "代表取締役", value: "織田 春樹" },
                      { label: "設立", value: "2022年4月" },
                      { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                      { label: "事業内容", value: "Webマーケティング支援全般" },
                    ].map((row) => (
                      <div key={row.label} className="flex gap-4 text-[13px]">
                        <span className="w-24 shrink-0" style={{ color: "#9CA3AF" }}>{row.label}</span>
                        <span style={{ color: "#374151" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <Link href="/company/profile" className="text-[12px]" style={{ color: "#6B7280" }}>
                      会社概要 →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. RECRUIT
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-end">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Recruit</p>
                <h2
                  className="font-black leading-tight tracking-tight mb-8"
                  style={{ fontSize: "clamp(24px, 3vw, 38px)", color: "#0F172A" }}
                >
                  AI×Webマーケティングの<br />最前線で、一緒に働く仲間を募集しています。
                </h2>
                <p className="text-[15px] leading-[1.9] mb-8" style={{ color: "#374151" }}>
                  MEO・SEO・AIO・AI活用という成長領域で、経営者への提案から施策の実行・改善まで携わることができます。業界未経験でも、意欲があれば入社後に学べる環境を整えています。
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {["Webマーケティング営業", "マーケター職"].map((role) => (
                    <span key={role} className="text-[13px] px-4 py-1.5" style={{ border: "1px solid #E8E4DC", color: "#374151" }}>
                      {role}
                    </span>
                  ))}
                </div>
                <Link
                  href="/recruit"
                  className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors hover:text-[#0F172A]"
                  style={{ color: "#374151", borderBottom: "1px solid #D1C9BE", paddingBottom: "2px" }}
                >
                  採用情報を見る →
                </Link>
              </div>
              <div className="space-y-4">
                <div className="relative w-full mb-6" style={{ height: "200px" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_21_48.png"
                    alt="チームで働く環境"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
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
                    style={{ borderBottom: "1px solid #E8E4DC" }}
                  >
                    <span className="text-[13px]" style={{ color: "#9CA3AF" }}>{item.label}</span>
                    <span className="font-semibold text-[14px]" style={{ color: "#0F172A" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            9. COLUMN
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12" style={{ borderBottom: "1px solid #F0EDE6", paddingBottom: "24px" }}>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: "#6B7280" }}>Column</p>
                <h2 className="font-black text-[22px]" style={{ color: "#0F172A" }}>最新コラム</h2>
              </div>
              <Link href="/column" className="text-[13px]" style={{ color: "#6B7280" }}>すべて見る →</Link>
            </div>
            <div className="space-y-0">
              {columns.map((col) => (
                <Link
                  key={col.slug}
                  href={`/column/${col.slug}`}
                  className="group flex items-start gap-8 py-6 transition-colors hover:bg-[#F9F8F5] -mx-3 px-3"
                  style={{ borderBottom: "1px solid #F0EDE6" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {col.publishedAt.replace(/-/g, ".")}
                  </span>
                  <span className="text-[12px] px-2.5 py-1 shrink-0" style={{ background: "#F0EDE6", color: "#6B7280" }}>
                    {col.category}
                  </span>
                  <span className="text-[14px] leading-relaxed group-hover:text-[#0F172A] transition-colors" style={{ color: "#374151" }}>
                    {col.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            10. NEWS
        ============================================================ */}
        <section className="py-16" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8" style={{ borderBottom: "1px solid #E8E4DC", paddingBottom: "16px" }}>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-2" style={{ color: "#6B7280" }}>News</p>
                <h2 className="font-bold text-[18px]" style={{ color: "#0F172A" }}>お知らせ</h2>
              </div>
              <Link href="/news" className="text-[13px]" style={{ color: "#6B7280" }}>すべて見る →</Link>
            </div>
            <div className="space-y-0">
              {news.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group flex items-center gap-6 py-4 hover:bg-white transition-colors -mx-3 px-3"
                  style={{ borderBottom: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>
                    {item.publishedAt.replace(/-/g, ".")}
                  </span>
                  <span className="text-[12px] px-2.5 py-0.5 shrink-0" style={{ background: "#E8E4DC", color: "#6B7280" }}>
                    {item.category}
                  </span>
                  <span className="text-[13px] group-hover:text-[#0F172A] transition-colors" style={{ color: "#374151" }}>
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            11. CONTACT — minimal corporate CTA
        ============================================================ */}
        <section className="py-24 md:py-32" style={{ background: "#FFFFFF", borderTop: "1px solid #F0EDE6" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Contact</p>
              <h2
                className="font-black leading-tight tracking-tight mb-6"
                style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0F172A" }}
              >
                Web集客に関するご相談
              </h2>
              <p className="text-[15px] leading-[1.9] mb-8" style={{ color: "#374151" }}>
                MEO、SEO、AIO、ホームページ制作、SNS運用など、Web集客に関するご相談を承っています。現在の状況を確認したうえで、必要な施策をご提案します。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-medium transition-all hover:bg-[#0F172A] hover:text-white"
                style={{ border: "1px solid #0F172A", color: "#0F172A" }}
              >
                お問い合わせ
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
