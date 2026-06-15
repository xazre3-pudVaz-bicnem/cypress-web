import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "沿革 | 株式会社サイプレス",
  description: "株式会社サイプレスの設立から現在までの沿革。2026年5月の設立以来、MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援と事業を展開してきた歩み。",
  keywords: ["沿革", "会社の歴史", "株式会社サイプレス", "設立", "Webマーケティング"],
  openGraph: {
    title: "沿革 | 株式会社サイプレス",
    description: "株式会社サイプレスの設立から現在までの沿革。2026年5月設立のWebマーケティング会社の歩み。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/history" },
};

const HISTORY = [
  {
    date: "2026年5月13日",
    title: "株式会社サイプレス設立",
    body: "東京都葛飾区にて株式会社サイプレスを設立。代表取締役に織田春樹が就任。MEO対策・SEO対策・AIO対策・ホームページ制作を中心に、地域中小企業のWeb集客を支援するマーケティング会社として事業を開始。",
  },
  {
    date: "2026年5月",
    title: "MEO対策・SEO対策サービスの提供開始",
    body: "Googleビジネスプロフィールの最適化を軸にしたMEO対策サービスと、技術的SEO・コンテンツSEOを組み合わせたSEO対策サービスの提供を本格開始。飲食・美容・医療・士業など幅広い業種のクライアントのGoogleマップ上位表示を支援。",
  },
  {
    date: "2026年5月",
    title: "AIO対策サービス開始（AI検索対策）",
    body: "ChatGPT・Gemini・Perplexityなど、AI検索エンジンからの引用・回答表示を狙ったAIO（AI最適化）対策サービスの提供を開始。構造化データ・FAQ設計・E-E-A-T強化を柱とした支援メソッドを確立。国内でも先駆けた取り組みとして注目を集める。",
  },
  {
    date: "2026年6月",
    title: "ホームページ制作・SNS運用・AI活用支援サービス開始",
    body: "集客設計を起点とした、表示速度・SEO・モバイル対応を兼ね備えたホームページ制作サービス、SNS運用代行サービス、AI業務効率化支援サービスを順次提供開始。既存クライアントへの横断的な支援体制を強化。",
  },
  {
    date: "2026年6月",
    title: "公式サイト・コラムページを公開",
    body: "株式会社サイプレスの公式サイトを公開。MEO・SEO・AIO・ホームページ制作など各サービスの専門知識コラムページを整備し、情報発信を本格化。業種別・地域別・目的別のコンテンツを展開し、Web集客支援の専門家としての発信を強化。",
  },
  {
    date: "2026年6月",
    title: "代理店パートナー制度の整備",
    body: "営業パートナー・紹介パートナーの2つのパートナープログラムを整備。地域ビジネスのWeb集客支援を広げるため、代理店ネットワークの構築を開始。審査制を採用し、品質基準を維持したパートナーシップを推進。",
  },
];

const faqItems = [
  {
    q: "株式会社サイプレスはいつ設立されましたか？",
    a: "2026年5月13日に東京都葛飾区にて設立されました。代表取締役は織田春樹です。",
  },
  {
    q: "なぜ葛飾区で創業したのですか？",
    a: "代表の織田春樹が東京都葛飾区を拠点としていたこと、および葛飾区・足立区・江戸川区・墨田区などの東部エリアには、Web集客に課題を持つ中小企業・店舗が多く存在していたことが理由です。地域に根ざした支援を実現するため葛飾区で創業しました。",
  },
  {
    q: "設立当初から現在まで、どんなサービスを展開してきましたか？",
    a: "設立時（2026年5月）からMEO対策・SEO対策・AIO対策の3サービスを中核に展開し、続いてホームページ制作・SNS運用代行・AI活用支援を追加しました。現在は地域ビジネスの集客に必要なデジタルマーケティング全般を一括サポートする体制です。",
  },
  {
    q: "AIO対策とは何ですか？なぜ設立当初から対応しているのですか？",
    a: "AIO（AI Optimization）対策とは、ChatGPT・Gemini・Perplexityなどのai検索エンジンから回答・引用されやすいコンテンツ設計のことです。2026年時点でAI検索の利用が急拡大していることを踏まえ、SEO対策と並行してAI検索対策を提供することが必要と判断し、創業当初から専門サービスとして展開しています。",
  },
  {
    q: "今後のサービス展開について教えてください。",
    a: "現在の6サービス（MEO・SEO・AIO・ホームページ制作・SNS運用・AI活用支援）の品質向上と、代理店ネットワークの拡大を中心に事業を展開していく予定です。クライアントの成果にこだわりながら、支援できる企業・業種の幅を広げていきます。",
  },
  {
    q: "全国対応はいつから始めましたか？",
    a: "設立当初からオンラインでの全国対応を行っています。MEO対策はGoogleビジネスプロフィールのリモート管理で全国対応、SEO・AIO・ホームページ制作はZoomでのオンライン商談・納品に対応しています。",
  },
  {
    q: "代理店パートナー制度はどのような仕組みですか？",
    a: "営業代理店と紹介パートナーの2種類があります。審査制を採用しており、品質基準を満たした方のみと提携しています。報酬体系や詳細条件は個別にご案内しています。お問い合わせよりご連絡ください。",
  },
  {
    q: "医療・士業・飲食など特定の業種に特化していますか？",
    a: "特定の業種に特化しているわけではなく、地域に拠点を持つ中小企業・店舗全般を対象としています。実際に対応実績のある業種には、飲食業・美容業（理髪・ネイル・エステ）・医療・整体・リフォーム・士業（税理士・弁護士）・学習塾などがあります。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社情報", desc: "株式会社サイプレスについて" },
  { href: "/company/profile", label: "会社概要", desc: "基本情報・所在地" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/philosophy", label: "経営理念", desc: "サイプレスのミッション・ビジョン" },
  { href: "/company/value", label: "私たちの価値観", desc: "大切にしていること" },
  { href: "/company/area", label: "アクセス・所在地", desc: "葛飾区・全国対応" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "主力サービスのご案内" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示の仕組み" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索対策の専門支援" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/company" style={{ color: "#6B7280" }}>会社情報</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>沿革</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>History</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.25, marginBottom: "24px" }}>
              沿革
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              2026年5月の設立以来、サービスを展開しながら、地域中小企業のWeb集客支援を続けてきた歩みをご紹介します。
            </p>
          </div>
        </section>

        {/* Company overview — 2-column visual section */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "48px", alignItems: "center" }}>
              <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_10_29.png"
                  alt="落ち着いたオフィス環境でノートパソコンを使うスタッフ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "16px" }}>Our Foundation</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,2.8vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px", lineHeight: 1.3 }}>
                  創業のビジョンと歩み
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  株式会社サイプレスは2026年5月13日、「地域企業が、正しく選ばれる仕組みをつくる」という理念のもと東京都葛飾区で設立されました。良い仕事をしているのにデジタルで可視化されていない中小企業のために、MEO・SEO・AIOを組み合わせた集客支援を開始しました。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px" }}>
                  設立から日が浅い会社ではありますが、代表・織田春樹がWebマーケティングで培ってきた知識と経験をもとに、一社一社のクライアントと向き合い成果が出るまで伴走する姿勢を大切にしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Timeline</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,2.8vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "48px" }}>
              会社の歩み
            </h2>
            <div style={{ maxWidth: "800px" }}>
              {HISTORY.map((item, i) => (
                <div
                  key={i}
                  style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "32px", padding: "28px 0", borderTop: "1px solid #E8E4DC" }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#6B7280" }}>{item.date}</p>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Company overview paragraph */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ maxWidth: "800px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", fontSize: "11px", marginBottom: "16px" }}>Overview</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,2.8vw,34px)", color: "#ffffff", fontWeight: 700, marginBottom: "32px", lineHeight: 1.3 }}>
                株式会社サイプレスについて
              </h2>
              <div style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.75)" }}>
                <p style={{ marginBottom: "20px" }}>
                  株式会社サイプレスは、2026年5月13日に東京都葛飾区で設立したWebマーケティング会社です。「地域企業が、正しく選ばれる仕組みをつくる」という理念のもと、MEO対策・SEO対策・AIO対策・ホームページ制作・SNS運用・AI活用支援という6つの領域で、地域中小企業のWeb集客を総合的に支援しています。
                </p>
                <p style={{ marginBottom: "20px" }}>
                  設立から現在まで、サービスの幅を着実に広げながら、一社一社のクライアントと向き合い、成果が出るまで伴走する姿勢を大切にしてきました。単発の制作・対策に終わらず、継続的な改善と運用まで関与することで、持続的な集客の仕組みを構築することが私たちの仕事です。
                </p>
                <p>
                  オンラインにて全国対応しており、業種・規模を問わず、Web集客に課題を抱える中小企業・店舗・士業・医療機関などのご相談を承っています。
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/company/profile"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#ffffff", border: "1px solid rgba(255,255,255,0.3)", padding: "10px 20px", textDecoration: "none" }}
                >
                  会社概要を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="株式会社サイプレスの沿革についてよくある質問" bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="株式会社サイプレスに相談する"
          body="設立間もない会社ですが、創業時から中小企業・地域店舗のWeb集客に真剣に向き合っています。まずは無料でご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
