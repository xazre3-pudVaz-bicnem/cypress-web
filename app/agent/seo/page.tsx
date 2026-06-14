import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "SEO対策の販売代理店募集｜Web集客商材を販売したい企業様へ｜株式会社サイプレス",
  description:
    "株式会社サイプレスでは、SEO対策を販売いただける代理店様を募集しています。内部SEO・コンテンツSEO・ブログ運用までサイプレスが対応するため、代理店様は販売活動に集中できます。",
  keywords: [
    "SEO対策 代理店募集",
    "SEO対策 販売代理店",
    "SEO 商材 代理店",
    "コンテンツSEO 代理店",
    "Webマーケティング 代理店募集",
    "SEO 取次店",
  ],
  openGraph: {
    title: "SEO対策の販売代理店募集｜Web集客商材を販売したい企業様へ｜株式会社サイプレス",
    description: "SEO対策の販売代理店募集。内部SEO・コンテンツSEO・ブログ運用はサイプレスが対応。代理店は販売に集中できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/agent/seo" },
};

const faqItems = [
  {
    q: "SEO対策代理店とはどのような仕組みですか？",
    a: "サイプレスのSEO対策サービス（内部SEO・コンテンツSEO・キーワード設計・ブログ運用など）を、代理店様が中小企業の経営者・オーナーへ提案・販売する仕組みです。実際のSEO施策・コンテンツ制作・分析はサイプレスが担当します。",
  },
  {
    q: "SEOの専門知識がなくても代理店になれますか？",
    a: "はい。「Googleの検索結果で上位表示させてホームページへのアクセスを増やす施策」という基本的な説明ができれば十分です。詳細なSEO技術はサイプレスがバックアップします。提案サポート資料もご提供します。",
  },
  {
    q: "SEO対策はどのような顧客に提案できますか？",
    a: "ホームページはあるが問い合わせが少ない企業、ブログを書いていない企業、競合に検索で負けている企業、採用応募が少ない企業、地域名検索で弱い企業などが主なターゲットです。",
  },
  {
    q: "サイプレスが担当するSEO施策の内容を教えてください。",
    a: "内部SEO（タグ・見出し・meta設定）・コンテンツSEO（記事制作・ブログ運用）・キーワード設計・サイト構造設計・構造化データ（Schema.org）・Google Search Console分析・改善提案などを担当します。",
  },
  {
    q: "SEO対策は効果が出るまで時間がかかりますか？顧客への説明は？",
    a: "SEOは一般的に3〜6ヶ月以上の継続施策が必要です。顧客への説明時は「即効性はないが長期的な集客基盤を構築できる」という点を正確に伝えてください。断定的な効果保証はしないようにお願いします。",
  },
  {
    q: "代理店の報酬・マージンはどのくらいですか？",
    a: "報酬体系の詳細は個別のご相談の中でお伝えします。顧客の成約内容・販売量・契約形態によって個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "MEO対策やホームページ制作とのセット提案はできますか？",
    a: "はい。SEO対策とMEO対策・ホームページ制作・AIO対策のセット提案が非常に有効です。「検索で見つけてもらう（SEO）→Googleマップでも上位表示（MEO）→AI検索でも引用（AIO）」という複合提案で顧客への価値を最大化できます。",
  },
  {
    q: "SEO対策の結果はどのように報告されますか？",
    a: "Google Search Consoleのデータを元にした月次レポートをサイプレスが作成します。検索順位・クリック数・表示回数の推移をご確認いただけます。代理店様から顧客に共有していただくことで継続契約につながります。",
  },
  {
    q: "継続収益化しやすいですか？",
    a: "はい。SEO対策は月額継続サービスです。一度の受注で長期的な継続収益が生まれるため、コストパフォーマンスの良い商材です。コンテンツ制作・ブログ運用の継続によって顧客のサイトが成長し、解約されにくい関係になります。",
  },
  {
    q: "AIO対策（AI検索最適化）との違いは何ですか？",
    a: "SEO対策はGoogleの通常検索での上位表示を目的とし、AIO対策はChatGPT・Gemini・Perplexityなどの生成AI検索からの引用・露出を高めることを目的とします。両方を組み合わせることで、より広いWeb集客が実現できます。",
  },
  {
    q: "ホームページを持っていない顧客にもSEO提案できますか？",
    a: "ホームページがない場合はまずホームページ制作を提案し、制作後にSEO対策を開始するという流れが一般的です。ホームページ制作とSEO対策のセット提案として受注できます。",
  },
  {
    q: "申し込みから代理店活動開始まで、どのくらいかかりますか？",
    a: "お問い合わせから面談・契約・サポートツール提供まで、通常2〜4週間程度で活動開始いただけます。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO対策販売代理店プログラム",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  description: "SEO対策を中小企業へ販売する代理店プログラム。内部SEO・コンテンツSEO・ブログ運用はサイプレスが全対応。",
  areaServed: { "@type": "Country", name: "Japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "販売代理店募集", item: "https://www.cypress-all.co.jp/agent" },
    { "@type": "ListItem", position: 3, name: "SEO対策代理店", item: "https://www.cypress-all.co.jp/agent/seo" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AgentSeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#0d1b2a", position: "relative", padding: "100px 0 80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.png"
              alt="SEO対策販売代理店 Web集客の提案商談風景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.18 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/agent" style={{ color: "rgba(255,255,255,0.4)" }}>販売代理店募集</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>SEO対策代理店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>SEO Agency</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4vw,48px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              SEO対策の<br />販売代理店募集
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.8)", maxWidth: "580px" }}>
              内部SEO・コンテンツ制作・ブログ運用まで、サイプレスが全対応。<br />
              代理店様は<strong style={{ color: "#ffffff" }}>販売に専念</strong>できます。
            </p>
          </div>
        </section>

        {/* SEO対策が代理店商材として有効な理由 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why SEO</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEO対策が代理店商材として有効な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ほぼすべての中小企業に提案できる", b: "ホームページを持つ企業であれば業種を問わず提案できます。「Googleで見つからない」「競合に検索で負けている」という課題は広く存在します。" },
                { n: "02", t: "長期継続契約につながる安定商材", b: "SEO対策は月額継続サービスで、コンテンツの蓄積によって顧客サイトが成長するほど解約されにくくなります。長期的な継続収益を生みやすいです。" },
                { n: "03", t: "ホームページ制作の後続提案として最適", b: "ホームページを制作した後に「作っただけでは集客できない」という顧客の課題に応えるSEO提案は、タイミングが合いやすく成約しやすいです。" },
                { n: "04", t: "採用系・地域系と特に相性が良い", b: "採用に困っている企業には採用SEO、地域ビジネスには地域名×業種キーワードのSEOという形で、顧客の具体的な悩みに直結した提案ができます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* 役割分担 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              代理店様とサイプレスの役割分担
            </h2>
            <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: "820px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "20px", padding: "12px 16px", background: "#e8e4dc" }}>代理店様のご担当</p>
                {["顧客の検索集客の課題ヒアリング", "SEO対策の必要性・効果の説明", "サービス紹介・商談設定", "受注・契約手続き"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#0d1b2a", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "20px", padding: "12px 16px", background: "#0d1b2a" }}>サイプレスが担当</p>
                {["内部SEO（meta・見出し・構造）設定", "コンテンツSEO・キーワード設計", "ブログ記事制作・投稿運用", "サイト構造・内部リンク設計", "構造化データ（Schema.org）実装", "Google Search Console分析・改善提案", "月次レポート作成"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#9ca3af", flexShrink: 0 }}>→</span>
                    <p style={{ fontSize: "14px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
            </div>
          </div>
        </section>

        {/* 提案しやすい顧客 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>提案しやすい顧客の特徴</h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "32px" }}>以下のような状況の中小企業は、SEO対策の必要性を感じており提案が受け入れられやすいです。</p>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "820px" }}>
              {[
                { title: "ホームページはあるが問い合わせが少ない", body: "サイトが古い・コンテンツが薄い・SEO設定が不十分なケースが多く、改善余地が大きい顧客です。" },
                { title: "ブログを書いていない・更新が止まっている", body: "コンテンツSEOの必要性を感じながら実行できていない企業は多く、運用代行の提案が刺さります。" },
                { title: "競合に検索で負けていると感じている", body: "自社名・サービス名で検索して競合が上位にいる企業は、SEO対策の効果を実感しやすく提案しやすいです。" },
                { title: "採用応募が少ない", body: "採用SEO（採用ページ強化・求人コンテンツ制作）を通じた採用課題の解決提案が可能です。" },
                { title: "地域名で検索しても出てこない", body: "「○○市 ○○業」という地域×業種キーワードで弱い企業には地域SEO・MEOのセット提案が有効です。" },
                { title: "Google広告費を削減したい", body: "広告費に依存している企業へ「SEOでオーガニック流入を増やして広告費を削減」という提案が有効です。" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "24px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 700, color: "#0d1b2a", marginBottom: "24px" }}>関連ページ</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/agent", label: "販売代理店募集トップ" },
                { href: "/agent/web-design", label: "ホームページ制作代理店募集" },
                { href: "/agent/meo", label: "MEO対策代理店募集" },
                { href: "/agent/aio", label: "AIO対策代理店募集" },
                { href: "/agent/faq", label: "代理店募集FAQ" },
                { href: "/partner/referral", label: "取次店・紹介パートナー募集" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "16px 20px", background: "#ffffff", border: "1px solid #e8e4dc", textDecoration: "none", fontSize: "14px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 600 }}>
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SEO対策代理店募集についてよくある質問" bgColor="#ffffff" />
        <PageContactCTA
          heading="SEO対策代理店のご相談・お申し込み"
          body="Web集客商材を扱いたい方はお気軽にお問い合わせください。SEO施策・コンテンツ制作はサイプレスが全対応です。"
        />
      </main>
      <Footer />
    </>
  );
}
