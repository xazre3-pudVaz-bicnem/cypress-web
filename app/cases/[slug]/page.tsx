import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import {
  getCaseStudyBySlug,
  getAllCaseSlugs,
  getRelatedCases,
  SERVICE_BADGE_COLORS,
  SERVICE_HREFS,
  SERVICE_LABELS,
  INDUSTRY_LABELS,
  CaseStudy,
} from "@/lib/data/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
}

const BASE = "https://www.cypress-all.co.jp";

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) return {};
  const title = `${c.title}｜${INDUSTRY_LABELS[c.industrySlug]}の成功事例｜株式会社サイプレス`;
  return {
    title,
    description: c.description,
    keywords: [
      ...c.services.map((s) => `${s} 事例`),
      `${INDUSTRY_LABELS[c.industrySlug]} Web集客`,
      `${c.region} ${c.services[0]}`,
    ],
    openGraph: {
      title,
      description: c.description,
      images: [{ url: c.image, width: 1200, height: 630 }],
      locale: "ja_JP",
      type: "article",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: `${BASE}/cases/${slug}` },
  };
}

// ─── Generated-content helpers (template-side, not stored in data) ──────────────

const SERVICE_VERB: Record<string, string> = {
  meo: "MEO対策",
  seo: "SEO対策",
  "web-design": "ホームページ制作",
  aio: "AIO対策",
  sns: "SNS運用",
  lp: "ランディングページ制作",
};

// 1) Issue analysis points based on service + industry combination
function getAnalysisPoints(c: CaseStudy): string[] {
  const where = c.city ? `${c.region}${c.city}` : c.region;
  const points: string[] = [];
  if (c.serviceSlugs.includes("meo")) {
    points.push(
      `Googleビジネスプロフィールの情報整備が不十分で、「${where}の${c.industry}」というキーワードで検索されても表示機会を逃していた`
    );
    points.push(
      `写真や投稿の更新頻度が低く、Googleマップ上での評価スコアと閲覧数が最大化されていなかった`
    );
  }
  if (c.serviceSlugs.includes("seo")) {
    points.push(
      `ページのtitleやH1にターゲットキーワードが含まれておらず、検索エンジンがページの主題を正確に把握できていなかった`
    );
    points.push(`内部リンク設計が不十分で、関連ページ間の評価が分散していた`);
    points.push(`地域名を含む下層ページが不足しており、エリア特化の検索流入を取り切れていなかった`);
  }
  if (c.serviceSlugs.includes("web-design")) {
    points.push(
      `スマートフォンからの問い合わせ・予約導線が弱く、サービス詳細を確認した後にアクションへ進みにくい構成だった`
    );
    points.push(`ページの読み込み速度に改善余地があり、離脱につながる可能性があった`);
  }
  if (c.serviceSlugs.includes("aio")) {
    points.push(`AI検索エンジンが情報を構造化して読み取れるFAQや構造化データが不足していた`);
    points.push(
      `E-E-A-T（経験・専門性・権威性・信頼性）の観点から、会社やサービスの専門性・実績が明示されていなかった`
    );
  }
  if (c.serviceSlugs.includes("sns")) {
    points.push(`SNS投稿の内容がサービスや来店の訴求と結びついておらず、集客への導線が弱かった`);
  }
  if (c.serviceSlugs.includes("lp")) {
    points.push(`受け皿となるランディングページが整っておらず、流入後の行動を一つの目的に集約できていなかった`);
  }
  return points.slice(0, 8);
}

// 2) What Cypress can offer for this service/industry combination
function getCypressOfferings(c: CaseStudy): { title: string; body: string }[] {
  const out: { title: string; body: string }[] = [];
  const seen = new Set<string>();
  const push = (title: string, body: string) => {
    if (seen.has(title)) return;
    seen.add(title);
    out.push({ title, body });
  };
  if (c.serviceSlugs.includes("meo")) {
    push(
      "MEO対策・Googleビジネスプロフィール運用",
      `Googleビジネスプロフィールのカテゴリ・説明文・写真・営業時間を整え、「${c.region}の${c.industry}」のような地域名＋業種の検索で見つけてもらえる状態を整備します。口コミ獲得の導線づくりや定期投稿の運用設計まで一貫して支援します。`
    );
  }
  if (c.serviceSlugs.includes("seo")) {
    push(
      "SEO対策・検索流入の設計",
      `検索意図に沿ったページ構成、title・見出しの最適化、内部リンク設計、地域特化ページの整備を行い、${c.industry}の検索ニーズに継続的に応えられるサイト構造を整えます。`
    );
  }
  if (c.serviceSlugs.includes("web-design")) {
    push(
      "ホームページ制作・導線改善",
      `モバイルファーストの設計と高速表示を前提に、サービス内容が伝わり、問い合わせ・予約まで迷わず進めるホームページを制作します。公開後の更新運用まで考えた構造で設計します。`
    );
  }
  if (c.serviceSlugs.includes("aio")) {
    push(
      "AIO対策・AI検索への最適化",
      `FAQや構造化データを整備し、ChatGPTやGeminiなどのAI検索が情報を正確に読み取り、引用・推薦しやすい状態をつくります。E-E-A-Tの観点で専門性と信頼性を明示します。`
    );
  }
  if (c.serviceSlugs.includes("sns")) {
    push(
      "SNS運用・コンテンツ設計",
      `${c.industry}の魅力が伝わる投稿の方向性を設計し、来店・問い合わせへの導線とMEOやサイトとの連携を整えます。継続できる運用体制づくりを重視します。`
    );
  }
  if (c.serviceSlugs.includes("lp")) {
    push(
      "ランディングページ制作",
      `一つの目的に絞ったランディングページを設計し、訴求・証拠・行動喚起の流れを整理して、流入後のアクション率を高めます。`
    );
  }
  // Always add an integrated-support offering
  push(
    "課題整理から運用までの一気通貫支援",
    `現状の課題整理から施策の設計・実装・運用・改善までを一貫して支援します。顧客名・店舗名を伏せた形での事例公開のように、無理のない範囲で継続できる進め方を前提にご提案します。`
  );
  return out;
}

// 3) Supplementary FAQs if the case has fewer than the target count
const SERVICE_FAQ_BANK: Record<string, { question: string; answer: string }[]> = {
  meo: [
    {
      question: "MEO対策とSEO対策の違いは何ですか？",
      answer:
        "MEO対策はGoogleマップ（ローカル検索）での表示最適化、SEO対策は通常の検索結果での上位表示を目的とします。来店型ビジネスでは両方を組み合わせることで、地域の検索ニーズに幅広く応えられます。",
    },
    {
      question: "Googleビジネスプロフィールの運用は自社でもできますか？",
      answer:
        "可能です。カテゴリ設定・写真の追加・投稿の更新は自社運用しやすい部分です。運用の型や更新ルールを設計したうえでお渡しすることで、無理なく続けられる体制を整えます。",
    },
  ],
  seo: [
    {
      question: "SEO対策で最初に着手すべきことは何ですか？",
      answer:
        "現状のページ構成・キーワード・内部リンクの確認から始めます。title・見出しの整理や検索意図に沿ったページ設計など、土台の整備を優先することで、その後の施策が積み上がりやすくなります。",
    },
    {
      question: "コンテンツはどのくらいの頻度で追加すべきですか？",
      answer:
        "本数よりも検索意図に沿った質を重視します。狙うキーワードと読者の課題を整理したうえで、無理なく継続できるペースで関連ページを増やしていく進め方を推奨します。",
    },
  ],
  "web-design": [
    {
      question: "ホームページ制作の費用はどのくらいですか？",
      answer:
        "ページ数・機能・運用範囲によって変わります。目的と必要な機能を整理したうえで、過不足のない構成をご提案します。詳細は無料相談でお伝えしています。",
    },
    {
      question: "公開後の更新や運用も依頼できますか？",
      answer:
        "可能です。お知らせや事例などを自社で更新できる構造に設計したうえで、必要に応じて更新・改善の運用も継続して支援します。",
    },
  ],
  aio: [
    {
      question: "AIO対策はSEO対策と何が違いますか？",
      answer:
        "SEO対策が検索結果での順位を主な対象とするのに対し、AIO対策はAIが回答を生成する際に自社情報を正確に読み取り、引用・推薦されやすくすることを目的とします。FAQや構造化データ、E-E-A-Tの整備が中心になります。",
    },
    {
      question: "AIに引用されているか確認できますか？",
      answer:
        "主要なAI検索で実際に質問し、自社情報がどのように扱われるかを確認します。現状を把握したうえで、引用されやすい情報設計へと改善していきます。",
    },
  ],
  sns: [
    {
      question: "SNS運用は集客にどうつながりますか？",
      answer:
        "SNSは認知と接点づくりに強みがあります。投稿からプロフィール・サイト・予約への導線を設計し、MEOやホームページと連携させることで、集客の流れに組み込めます。",
    },
  ],
  lp: [
    {
      question: "ランディングページは何のために作るのですか？",
      answer:
        "問い合わせや予約など一つの目的に絞り、流入したユーザーが迷わず行動できるようにするためです。広告やSNSからの受け皿として効果を発揮します。",
    },
  ],
};

function getSupplementaryFaqs(c: CaseStudy): { question: string; answer: string }[] {
  const TARGET = 10;
  if (c.faqs.length >= TARGET) return [];
  const existing = new Set(c.faqs.map((f) => f.question));
  const supp: { question: string; answer: string }[] = [];
  for (const s of c.serviceSlugs) {
    for (const f of SERVICE_FAQ_BANK[s] || []) {
      if (existing.has(f.question) || supp.some((x) => x.question === f.question)) continue;
      supp.push(f);
      if (c.faqs.length + supp.length >= TARGET) return supp;
    }
  }
  // Generic supplements
  const generic = [
    {
      question: "顧客名や具体的な数値が掲載されていないのはなぜですか？",
      answer:
        "本事例では守秘の観点から顧客名・店舗名を非公開とし、誇大な印象を与えないよう具体的な数値表現も用いていません。実施した施策の内容と進め方を中心にご紹介しています。",
    },
    {
      question: "同じ業種・地域でも同様の進め方は可能ですか？",
      answer:
        "可能です。事例の進め方は他の事業者にも応用できますが、競合状況や現状によって最適な施策は異なります。まずは現状を伺ったうえで、必要な施策を整理してご提案します。",
    },
    {
      question: "相談だけでも対応してもらえますか？",
      answer:
        "はい。初回相談は無料です。現状の課題を伺ったうえで、優先順位や進め方の考え方をお伝えします。無理な提案は行いません。",
    },
  ];
  for (const f of generic) {
    if (existing.has(f.question)) continue;
    supp.push(f);
    if (c.faqs.length + supp.length >= TARGET) break;
  }
  return supp;
}

// 4) Per-issue explanatory text
function explainIssue(issue: string, c: CaseStudy): string {
  const primary = SERVICE_VERB[c.serviceSlugs[0]] || c.services[0];
  return `${issue}という状況は、${c.industry}が日々の業務に追われるなかで後回しになりやすいポイントです。${primary}の視点で見ると、見込み客が情報を探す段階で接点を失っている可能性があり、改善の余地が大きい部分でした。まずは現状を整理し、優先度の高い箇所から手を入れていきました。`;
}

// 5) Per-action explanatory text
function explainAction(action: string, c: CaseStudy): string {
  const primary = SERVICE_VERB[c.serviceSlugs[0]] || c.services[0];
  return `${action}を実施しました。これは${primary}における基本的かつ重要な工程で、${c.industry}の見込み客が情報を見つけ、内容を理解し、行動に移すまでの流れを滑らかにする狙いがあります。表面的な対応にとどめず、運用として継続できる形に落とし込んだうえで進めました。`;
}

// 6) Related internal links
const INDUSTRY_TO_ROUTE: Record<string, string> = {
  restaurant: "/industries/restaurant",
  "beauty-salon": "/industries/beauty",
  relaxation: "/industries/osteopathic",
  clinic: "/industries/clinic",
  dental: "/industries/clinic",
  construction: "/industries/construction",
  cleaning: "/industries/cleaning",
  logistics: "/industries/local-store",
  pet: "/industries/pet-shop",
  school: "/industries/school",
  retail: "/industries/local-store",
  "real-estate": "/industries/real-estate",
  professional: "/industries/professional-service",
  accommodation: "/industries/local-store",
  other: "/industries",
};

const REGION_TO_AREA: Record<string, string> = {
  東京都: "/area/tokyo",
  千葉県: "/area/chiba",
  埼玉県: "/area/saitama",
  神奈川県: "/area/kanagawa",
};

const SERVICE_TO_PROBLEMS: Record<string, { href: string; label: string }[]> = {
  meo: [
    { href: "/problems/google-not-showing", label: "Googleマップに表示されない" },
    { href: "/problems/map-ranking-low", label: "マップの順位が上がらない" },
    { href: "/problems/no-reviews", label: "口コミが集まらない" },
  ],
  seo: [
    { href: "/problems/poor-seo-ranking", label: "検索順位が上がらない" },
    { href: "/problems/website-not-found-local", label: "地域名で検索されても出てこない" },
    { href: "/problems/losing-to-competitors", label: "競合に負けている" },
  ],
  "web-design": [
    { href: "/problems/website-old", label: "サイトが古い・使いにくい" },
    { href: "/problems/no-inquiries", label: "問い合わせが来ない" },
    { href: "/problems/content-not-converting", label: "見られても問い合わせにつながらない" },
  ],
  aio: [
    { href: "/problems/chatgpt-not-mentioned", label: "ChatGPTで紹介されない" },
    { href: "/problems/losing-to-competitors", label: "競合に負けている" },
  ],
  sns: [
    { href: "/problems/sns-no-results", label: "SNSが成果につながらない" },
    { href: "/problems/no-online-presence", label: "ネット上の存在感がない" },
  ],
  lp: [
    { href: "/problems/content-not-converting", label: "見られても問い合わせにつながらない" },
    { href: "/problems/expensive-ads", label: "広告費が高い" },
  ],
};

function getRelatedProblems(c: CaseStudy): { href: string; label: string }[] {
  const out: { href: string; label: string }[] = [];
  const seen = new Set<string>();
  for (const s of c.serviceSlugs) {
    for (const p of SERVICE_TO_PROBLEMS[s] || []) {
      if (seen.has(p.href)) continue;
      seen.add(p.href);
      out.push(p);
    }
  }
  return out.slice(0, 4);
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) notFound();

  const regLabel = c.city ? `${c.region}${c.city}` : c.region;
  const relatedCases = getRelatedCases(c, 6);
  const imageAlt = `${c.region}の${c.industry}の${c.services[0]}支援事例のイメージ`;

  const analysisPoints = getAnalysisPoints(c);
  const offerings = getCypressOfferings(c);
  const supplementaryFaqs = getSupplementaryFaqs(c);
  const allFaqs = [...c.faqs, ...supplementaryFaqs];
  const relatedProblems = getRelatedProblems(c);
  const industryRoute = INDUSTRY_TO_ROUTE[c.industrySlug];
  const areaRoute = REGION_TO_AREA[c.region];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: BASE },
      { "@type": "ListItem", position: 2, name: "成功事例", item: `${BASE}/cases` },
      { "@type": "ListItem", position: 3, name: c.title, item: `${BASE}/cases/${c.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.description,
    image: `${BASE}${encodeURI(c.image)}`,
    datePublished: c.publishedAt,
    dateModified: c.updatedAt,
    author: { "@type": "Organization", name: "株式会社サイプレス", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "株式会社サイプレス",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/cases/${c.slug}` },
  };

  const faqJsonLd =
    allFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "#F8F6F2",
            padding: "clamp(80px, 12vh, 120px) 0 clamp(40px, 6vh, 64px)",
            borderBottom: "1px solid #E8E4DC",
          }}
        >
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
            <nav aria-label="パンくず" style={{ marginBottom: "28px" }}>
              <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
                <li><Link href="/" style={crumbLink}>ホーム</Link></li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li><Link href="/cases" style={crumbLink}>成功事例</Link></li>
                <li style={{ fontSize: "11px", color: "#C4BAB0" }}>›</li>
                <li style={{ ...crumbLink, color: "#6B7280" }}>{c.title}</li>
              </ol>
            </nav>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px", alignItems: "center" }}>
              <Link href={`/cases/industry/${c.industrySlug}`} style={{ ...metaBadge, textDecoration: "none" }}>
                {c.industry}
              </Link>
              <span style={{ ...metaBadge, background: "#EDE7DA" }}>{regLabel}</span>
              {c.serviceSlugs.map((s) => (
                <Link
                  key={s}
                  href={`/cases/service/${s}`}
                  style={{
                    fontSize: "10px",
                    padding: "3px 12px",
                    border: `1px solid ${SERVICE_BADGE_COLORS[SERVICE_LABELS[s]] || "#C4BAB0"}`,
                    color: SERVICE_BADGE_COLORS[SERVICE_LABELS[s]] || "#6B7280",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-display)",
                    textDecoration: "none",
                  }}
                >
                  {SERVICE_LABELS[s]}
                </Link>
              ))}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3.5vw, 38px)",
                color: "#0B1628",
                fontWeight: 700,
                lineHeight: 1.4,
                marginBottom: "20px",
              }}
            >
              {c.title}
            </h1>

            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.95", maxWidth: "720px", marginBottom: "16px" }}>
              {c.challenge}そこで本事例では、{c.solution}
            </p>

            <p style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>
              公開日 {c.publishedAt.replace(/-/g, ".")} ／ 更新日 {c.updatedAt.replace(/-/g, ".")}
            </p>
          </div>
        </section>

        {/* Main content */}
        <section style={{ background: "#FFFFFF", padding: "clamp(40px, 7vh, 72px) 0" }}>
          <div
            className="case-detail-grid"
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "0 clamp(24px, 5vw, 60px)",
              display: "grid",
              gridTemplateColumns: "1fr min(320px, 30%)",
              gap: "clamp(32px, 5vw, 64px)",
              alignItems: "start",
            }}
          >
            {/* Left */}
            <div>
              {/* Hero image */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", marginBottom: "40px", border: "1px solid #E8E4DC" }}>
                <Image src={c.image} alt={imageAlt} fill sizes="(max-width: 1152px) 100vw, 760px" style={{ objectFit: "cover" }} priority />
              </div>

              {/* Summary */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Summary" />
                <h2 style={h2Style}>事例概要</h2>
                <p style={bodyStyle}>{c.summary}</p>
                <p style={bodyStyle}>
                  本ページでは、{regLabel}の{c.industry}が抱えていた課題の背景から、実施した{c.services.join("・")}の具体的な施策、
                  成功につながったポイント、施策後の変化、そして同じ業種で応用できる考え方までを順を追って解説します。
                  顧客名・店舗名は非公開とし、誇大な数値表現は用いていません。
                </p>
              </div>

              {/* Pre-consultation issues — each as its own section */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Challenge" />
                <h2 style={h2Style}>相談前の課題</h2>
                <p style={bodyStyle}>{c.challenge}</p>
                <div style={{ display: "grid", gap: "20px", marginTop: "8px" }}>
                  {c.beforeIssues.map((issue, i) => (
                    <section key={i} style={{ borderLeft: "2px solid #E8E4DC", paddingLeft: "18px" }}>
                      <h3 style={h3Style}>
                        <span style={{ color: "#C46A6A", fontFamily: "var(--font-display)", marginRight: "8px" }}>
                          課題 {String(i + 1).padStart(2, "0")}
                        </span>
                        — {issue}
                      </h3>
                      <p style={bodyStyle}>{explainIssue(issue, c)}</p>
                      <p style={noteStyle}>
                        このような状況は{c.industry}のWeb集客では一般的な課題です。
                      </p>
                    </section>
                  ))}
                </div>
              </div>

              {/* Issue analysis */}
              {analysisPoints.length > 0 && (
                <div style={{ marginBottom: "48px" }}>
                  <SectionLabel label="Analysis" />
                  <h2 style={h2Style}>課題分析</h2>
                  <p style={bodyStyle}>
                    課題の表面的な事象だけでなく、その背景にある構造を分析しました。{c.services.join("・")}の観点から、
                    集客の流れのどこで機会を失っているのかを次のように整理しました。
                  </p>
                  <ul style={listReset}>
                    {analysisPoints.map((p, i) => (
                      <li key={i} style={checkItem}>
                        <span style={{ color: "#9C6AC4", flexShrink: 0, marginTop: "2px" }}>◆</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solution overview */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Solution" />
                <h2 style={h2Style}>解決アプローチ</h2>
                <p style={bodyStyle}>{c.solution}</p>
              </div>

              {/* Implemented actions — each as subsection */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Implementation" />
                <h2 style={h2Style}>実施した施策</h2>
                <div style={{ display: "grid", gap: "20px" }}>
                  {c.implementedActions.map((action, i) => (
                    <section key={i}>
                      <h3 style={h3Style}>
                        <span style={{ color: "#C4A96A", fontFamily: "var(--font-display)", marginRight: "8px" }}>
                          施策 {String(i + 1).padStart(2, "0")}
                        </span>
                        {action}
                      </h3>
                      <p style={bodyStyle}>{explainAction(action, c)}</p>
                    </section>
                  ))}
                </div>
              </div>

              {/* Success points */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Key Points" />
                <h2 style={h2Style}>成功につながったポイント</h2>
                <div style={{ display: "grid", gap: "16px" }}>
                  {c.successPoints.map((item, i) => (
                    <section key={i} style={{ border: "1px solid #E8E4DC", padding: "20px 22px" }}>
                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "8px" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "#C4A96A", lineHeight: 1, flexShrink: 0 }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 style={{ ...h3Style, margin: 0, paddingBottom: 0, borderBottom: "none" }}>{item}</h3>
                      </div>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", margin: 0 }}>
                        この点は、{c.industry}の集客で再現性を高めるうえで重要でした。一度きりの対応ではなく、
                        日々の運用に組み込める形にしたことで、施策の効果が継続しやすい状態を整えています。
                      </p>
                    </section>
                  ))}
                </div>
              </div>

              {/* After state */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Results" />
                <h2 style={h2Style}>改善後の状態</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "12px" }}>
                  {c.afterState.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: "13px",
                        color: "#374151",
                        lineHeight: "1.75",
                        padding: "16px 18px",
                        background: "#F8F6F2",
                        border: "1px solid #EFE9DF",
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "#6A9CC4", flexShrink: 0, fontSize: "16px" }}>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "16px", lineHeight: "1.7" }}>
                  ※ 本事例の変化は当該案件の状況下における内容です。すべての事業者に同様の結果を保証するものではありません。顧客名・店舗名は非公開とし、具体的な数値は掲載していません。
                </p>
              </div>

              {/* What Cypress can do */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Our Support" />
                <h2 style={h2Style}>サイプレスが支援できること</h2>
                <p style={bodyStyle}>
                  株式会社サイプレスでは、{c.industry}のWeb集客に対して次のような支援を行っています。
                </p>
                <div style={{ display: "grid", gap: "12px" }}>
                  {offerings.map((o, i) => (
                    <section key={i} style={{ border: "1px solid #E8E4DC", padding: "18px 20px", background: "#FAFAF8" }}>
                      <h3 style={{ ...h3Style, paddingBottom: "8px", marginBottom: "8px" }}>{o.title}</h3>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", margin: 0 }}>{o.body}</p>
                    </section>
                  ))}
                </div>
              </div>

              {/* Transferable tips */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Tips" />
                <h2 style={h2Style}>同じ業種で応用できるポイント</h2>
                <div style={{ display: "grid", gap: "16px" }}>
                  {c.transferableTips.map((tip, i) => (
                    <section key={i} style={{ borderLeft: "2px solid #6AC48B", paddingLeft: "18px" }}>
                      <h3 style={{ ...h3Style, paddingBottom: "6px", marginBottom: "6px" }}>
                        <span style={{ color: "#6AC48B", marginRight: "8px" }}>＋</span>
                        {tip}
                      </h3>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", margin: 0 }}>
                        同じ{c.industry}でも応用しやすい考え方です。自社の状況に合わせて取り入れることで、
                        無理なく集客の土台を整えられます。
                      </p>
                    </section>
                  ))}
                </div>
              </div>

              {/* Related pages */}
              <div style={{ marginBottom: "48px" }}>
                <SectionLabel label="Related" />
                <h2 style={h2Style}>関連する業種・地域・お悩みページ</h2>
                <div style={{ display: "grid", gap: "10px" }}>
                  {industryRoute && (
                    <RelatedLink href={industryRoute} label={`${c.industry}のWeb集客について`} />
                  )}
                  {areaRoute && (
                    <RelatedLink href={areaRoute} label={`${c.region}の対応エリア・支援内容`} />
                  )}
                  {relatedProblems.map((p) => (
                    <RelatedLink key={p.href} label={p.label} href={p.href} />
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {allFaqs.length > 0 && (
                <div style={{ marginBottom: "12px" }}>
                  <SectionLabel label="FAQ" />
                  <h2 style={h2Style}>よくある質問</h2>
                  <div>
                    {allFaqs.map((item, i) => (
                      <details key={i} style={{ borderBottom: "1px solid #E8E4DC", paddingBottom: "4px", marginBottom: "4px" }}>
                        <summary
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "14px",
                            color: "#0B1628",
                            fontWeight: 600,
                            lineHeight: 1.5,
                            padding: "16px 0",
                            cursor: "pointer",
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "16px",
                          }}
                        >
                          <span>Q. {item.question}</span>
                          <span style={{ color: "#C4A96A", fontSize: "16px", flexShrink: 0 }}>+</span>
                        </summary>
                        <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85", padding: "4px 0 16px" }}>
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="case-detail-sidebar" style={{ position: "sticky", top: "24px" }}>
              {/* Summary card */}
              <div style={{ border: "1px solid #E8E4DC", padding: "24px", marginBottom: "20px", background: "#FAFAF8" }}>
                <p style={sideLabel}>Case Info</p>
                <dl style={{ margin: 0 }}>
                  <SideRow label="業種" value={c.industry} href={`/cases/industry/${c.industrySlug}`} />
                  <SideRow label="エリア" value={regLabel} />
                </dl>
                <p style={{ ...sideLabel, marginTop: "20px", marginBottom: "12px" }}>Services Used</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {c.serviceSlugs.map((s) => (
                    <Link
                      key={s}
                      href={SERVICE_HREFS[s]}
                      style={{
                        fontSize: "13px",
                        color: "#0B1628",
                        textDecoration: "none",
                        fontFamily: "var(--font-serif)",
                        padding: "8px 12px",
                        background: "#FFFFFF",
                        border: "1px solid #E8E4DC",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {SERVICE_LABELS[s]}
                      <span style={{ color: "#C4BAB0", fontSize: "12px" }}>→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ border: "1px solid #E8E4DC", padding: "24px", background: "#0B1628" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#FFFFFF", fontWeight: 700, lineHeight: 1.5, marginBottom: "12px" }}>
                  同様の施策について<br />ご相談ください
                </p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginBottom: "20px" }}>
                  初回相談は無料です。現状をお聞きした上で適切な施策をご提案します。
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px 20px",
                    background: "#C4A96A",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  無料相談・お問い合わせ
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Related cases */}
        {relatedCases.length > 0 && (
          <section style={{ background: "#F8F6F2", padding: "clamp(40px, 7vh, 72px) 0", borderTop: "1px solid #E8E4DC" }}>
            <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 60px)" }}>
              <p style={{ ...eyebrow, marginBottom: "8px" }}>Related Cases</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#0B1628", fontWeight: 700, marginBottom: "28px" }}>
                関連する成功事例
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "20px" }}>
                {relatedCases.map((rc: CaseStudy) => (
                  <Link
                    key={rc.slug}
                    href={`/cases/${rc.slug}`}
                    className="related-card"
                    style={{ display: "block", border: "1px solid #E8E4DC", background: "#FFFFFF", padding: "20px", textDecoration: "none" }}
                  >
                    <p style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>
                      {rc.industry} · {rc.region}
                    </p>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#0B1628", fontWeight: 600, lineHeight: 1.5, marginBottom: "10px" }}>
                      {rc.title}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {rc.services.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontSize: "10px",
                            padding: "2px 8px",
                            border: `1px solid ${SERVICE_BADGE_COLORS[s] || "#C4BAB0"}`,
                            color: SERVICE_BADGE_COLORS[s] || "#6B7280",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: "24px" }}>
                <Link
                  href="/cases"
                  style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #D1C9BE",
                    paddingBottom: "2px",
                  }}
                >
                  すべての成功事例を見る →
                </Link>
              </div>
            </div>
          </section>
        )}

        <PageContactCTA />
      </main>
      <Footer />

      <style>{`
        .related-card { transition: box-shadow 0.2s, transform 0.2s; }
        .related-card:hover { box-shadow: 0 4px 16px rgba(11,22,40,0.08); transform: translateY(-1px); }
        .related-internal:hover { border-color: #C4A96A !important; }
        @media (max-width: 768px) {
          .case-detail-grid { grid-template-columns: 1fr !important; }
          .case-detail-sidebar { position: static !important; }
        }
      `}</style>
    </>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <p style={eyebrow}>{label}</p>;
}

function RelatedLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="related-internal"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        border: "1px solid #E8E4DC",
        background: "#FFFFFF",
        padding: "12px 16px",
        fontSize: "13px",
        color: "#0B1628",
        textDecoration: "none",
        fontFamily: "var(--font-serif)",
        transition: "border-color 0.18s",
      }}
    >
      <span>{label}</span>
      <span style={{ color: "#C4A96A", fontSize: "12px" }}>→</span>
    </Link>
  );
}

function SideRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #ECE7DF" }}>
      <dt style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{label}</dt>
      <dd style={{ margin: 0, fontSize: "13px", color: "#0B1628", fontFamily: "var(--font-serif)" }}>
        {href ? (
          <Link href={href} style={{ color: "#0B1628", textDecoration: "none", borderBottom: "1px solid #D1C9BE" }}>
            {value}
          </Link>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

const crumbLink: React.CSSProperties = {
  fontSize: "11px",
  color: "#9CA3AF",
  textDecoration: "none",
  fontFamily: "var(--font-display)",
  letterSpacing: "0.05em",
};

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  letterSpacing: "0.25em",
  color: "rgba(196,169,106,0.65)",
  fontSize: "10px",
  marginBottom: "8px",
  textTransform: "uppercase",
};

const metaBadge: React.CSSProperties = {
  fontSize: "10px",
  fontFamily: "var(--font-display)",
  letterSpacing: "0.08em",
  color: "#6B7280",
  background: "#E8E4DC",
  padding: "3px 12px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "clamp(18px, 2vw, 22px)",
  color: "#0B1628",
  fontWeight: 700,
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "1px solid #E8E4DC",
};

const h3Style: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontSize: "15px",
  color: "#0B1628",
  fontWeight: 700,
  lineHeight: 1.6,
  marginBottom: "10px",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.9",
  marginBottom: "16px",
};

const noteStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#9CA3AF",
  lineHeight: "1.7",
  margin: 0,
};

const listReset: React.CSSProperties = { listStyle: "none", padding: 0, margin: 0 };

const checkItem: React.CSSProperties = {
  fontSize: "13px",
  color: "#374151",
  lineHeight: "1.75",
  padding: "8px 0",
  borderBottom: "1px solid #F0ECE6",
  display: "flex",
  gap: "12px",
};

const sideLabel: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: "#9CA3AF",
  marginBottom: "12px",
  textTransform: "uppercase",
};
