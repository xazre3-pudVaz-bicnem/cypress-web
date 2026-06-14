import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "AIO対策の販売代理店募集｜AI検索時代のWeb集客商材を扱いたい企業様へ｜株式会社サイプレス",
  description:
    "株式会社サイプレスでは、AIO対策・AI検索対策を販売いただける代理店様を募集しています。ChatGPTやAI Overview時代に向けたWeb集客支援を、制作・運用体制なしで提案できます。",
  keywords: [
    "AIO対策 代理店募集",
    "AI検索対策 代理店",
    "ChatGPT対策 代理店",
    "AIサービス 代理店募集",
    "LLMO 代理店",
    "AI Overview 代理店",
  ],
  openGraph: {
    title: "AIO対策の販売代理店募集｜AI検索時代のWeb集客商材を扱いたい企業様へ｜株式会社サイプレス",
    description: "AIO対策・AI検索対策の販売代理店募集。ChatGPT・Gemini時代のWeb集客支援を制作リソースなしで提案できます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/agent/aio" },
};

const faqItems = [
  {
    q: "AIO対策（AI検索最適化）とは何ですか？",
    a: "AIO（AI Optimization）対策とは、ChatGPT・Gemini・Perplexityなど生成AI型の検索エンジンにWebサイトや会社情報が引用・紹介されやすくなるよう最適化する施策です。従来のGoogle検索SEOに加え、AI検索経由の露出を高めることを目的とします。",
  },
  {
    q: "AIO対策代理店とはどのような仕組みですか？",
    a: "サイプレスのAIO対策サービスを代理店様が中小企業の経営者へ提案・販売する仕組みです。FAQ設計・構造化データ・エンティティ設計・llms.txt・AIに伝わるコンテンツ整備はサイプレスが担当します。代理店様は販売活動のみです。",
  },
  {
    q: "AIO対策の知識がなくても代理店になれますか？",
    a: "はい。「ChatGPTやGeminiに会社・お店の情報が引用されやすくなる対策です」という基本的な説明ができれば十分です。技術的な実装はサイプレスが全対応します。最新動向の情報共有も行います。",
  },
  {
    q: "AIO対策を提案するメリットはありますか？新しい分野でリスクはありませんか？",
    a: "AIO対策は現時点で提供できる会社が少なく、先行して提案できることがビジネス上の強みになります。SEO・MEOと組み合わせた複合提案として位置づけることで、既存顧客への追加提案として自然に行えます。",
  },
  {
    q: "どのような顧客にAIO対策を提案できますか？",
    a: "SEO対策を既に行っている企業・ホームページを持つ企業全般に提案できます。特に「ChatGPTで同業他社が引用されているが自社は引用されない」という課題を感じている経営者に効果的です。",
  },
  {
    q: "AIO対策はSEO対策と何が違いますか？",
    a: "SEO対策がGoogleの通常検索での上位表示を目的とするのに対し、AIO対策はChatGPT・Gemini・Perplexityなどの生成AI検索エンジンからの引用・露出を高めることを目的とします。両方を組み合わせることで、より包括的なWeb集客が実現できます。",
  },
  {
    q: "AIO対策の具体的な施策内容を教えてください。",
    a: "FAQ設計・構造化データ（Schema.org）実装・エンティティ（会社・サービスの情報整備）設計・llms.txt設定・AIに引用されやすいコンテンツ構造設計・E-E-A-T（専門性・権威性・信頼性）強化などが主な施策です。",
  },
  {
    q: "ホームページ制作やSEOとセット提案はできますか？",
    a: "はい。ホームページ制作＋SEO対策＋AIO対策の三点セット提案が非常に効果的です。「検索でも見つかり、AIにも引用されるWebサイト」として提案することで、顧客の納得感が高まります。",
  },
  {
    q: "代理店の報酬・マージンはどのくらいですか？",
    a: "報酬体系の詳細は個別のご相談の中でお伝えします。顧客の成約内容・販売量・契約形態によって個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "AIO対策の効果はどのように確認できますか？",
    a: "ChatGPT・Geminiなどで特定の質問をした際に顧客の情報が引用されるかどうかを定期的に確認します。構造化データの実装状況・Googleリッチリザルトへの反映などもモニタリングします。ただし生成AI検索の引用は確約できない旨を顧客にお伝えください。",
  },
  {
    q: "今後もAI検索対策の需要は続きますか？",
    a: "ChatGPT・Geminiなどの生成AI検索の利用者は急増しており、今後も増え続けると予想されています。「AI検索からも見つけてもらえるようにしたい」というニーズは今後ますます高まると考えられます。今のうちから取り組むことでパートナーとしての専門性を高められます。",
  },
  {
    q: "申し込みから代理店活動開始まで、どのくらいかかりますか？",
    a: "お問い合わせから面談・契約・サポートツール提供まで、通常2〜4週間程度で活動開始いただけます。",
  },
  {
    q: "AIO対策の最新情報はどこから入手できますか？",
    a: "サイプレスから定期的に最新のAI検索動向・施策のアップデートをご共有します。ChatGPT・Gemini・Perplexityなどの検索変化に対応した最新情報を提供しますので、代理店様は情報収集の手間なく最新知識で提案活動を続けられます。",
  },
  {
    q: "AIO対策は小規模な企業にも提案できますか？",
    a: "はい。ホームページを持つ企業であれば規模を問わず提案できます。むしろ中小企業・個人事業主が先行してAIO対策に取り組むことで、大手との差別化につながるケースもあります。",
  },
  {
    q: "AIO対策の効果確認・レポートはどのように行いますか？",
    a: "ChatGPTやGeminiで特定のキーワードを検索した際に顧客の情報が引用されるかを定期確認します。構造化データの実装状況・Googleリッチリザルトへの反映なども確認します。ただし生成AI検索の引用は仕様変更により変動するため、断定的な保証はしていません。",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AIO対策販売代理店プログラム",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  description: "AIO対策・AI検索最適化を中小企業へ販売する代理店プログラム。FAQ設計・構造化データ・llms.txtはサイプレスが全対応。",
  areaServed: { "@type": "Country", name: "Japan" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "販売代理店募集", item: "https://www.cypress-all.co.jp/agent" },
    { "@type": "ListItem", position: 3, name: "AIO対策代理店", item: "https://www.cypress-all.co.jp/agent/aio" },
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

export default function AgentAioPage() {
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
              src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png"
              alt="AIO対策販売代理店 AI検索対策のデジタルインターフェース"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.2 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/agent" style={{ color: "rgba(255,255,255,0.4)" }}>販売代理店募集</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>AIO対策代理店</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>AIO Agency</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(24px,4vw,48px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              AIO対策の<br />販売代理店募集
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(255,255,255,0.8)", maxWidth: "600px" }}>
              ChatGPT・Gemini・AI Overviewの時代に向けた最新Web集客商材。<br />
              実装はサイプレスが全担当。代理店は<strong style={{ color: "#ffffff" }}>提案のみ</strong>。
            </p>
          </div>
        </section>

        {/* AIO対策とは */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>What Is AIO</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>
              AIO対策（AI検索最適化）とは
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                AIO（AI Optimization）対策とは、ChatGPT・Gemini・Perplexityなど生成AI型の検索エンジンに、企業やサービスの情報が引用・紹介されやすくなるよう最適化する施策です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                従来のGoogle検索SEOが「Googleの検索ランキング上位に表示させる」のに対し、AIO対策は「AIが情報を回答する際に自社の情報を使ってもらう」ことを目的とします。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151" }}>
                FAQ設計・構造化データ（Schema.org）・エンティティ最適化・llms.txt設置・E-E-A-T強化などを組み合わせて、AIに引用されやすいWebサイトに整備します。
              </p>
            </div>
          </div>
        </section>

        {/* なぜ今AI検索対策が商材になるのか */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Market Opportunity</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              なぜ今、AI検索対策が商材になるのか
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "生成AI検索の利用者が急増中", body: "ChatGPT・Geminiなどの生成AI検索を日常的に使う人が急増しています。「○○を探す」行動が検索エンジンだけでなくAIアシスタントでも行われる時代になっています。" },
                { title: "競合がAIO対策に気づき始めた", body: "先行してAIO対策に取り組んだ企業がAI検索で引用される優位を持ちます。まだ対策している中小企業が少ない今が提案のチャンスです。" },
                { title: "SEO代理店との明確な差別化", body: "SEO対策を扱う代理店は多いですが、AIO対策を提案できる代理店はまだ少数です。「AI検索にも対応できる」という付加価値で差別化した提案ができます。" },
                { title: "SEO・MEO・ホームページとセット", body: "既存のホームページ制作・SEO・MEO顧客への追加提案として自然に行えます。「これまでの施策に加えてAI検索対策も」という提案が受け入れやすいです。" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "28px", background: "#ffffff", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 役割分担 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              代理店様とサイプレスの役割分担
            </h2>
            <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: "820px" }}>
              <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "28px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "20px" }}>代理店様のご担当</p>
                {["顧客のWeb集客課題のヒアリング", "AIO対策の必要性・価値の説明", "商談設定・受注手続き", "顧客との関係維持・追加提案"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ color: "rgba(255,255,255,0.6)", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "28px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "20px" }}>サイプレスが担当</p>
                {["FAQ設計・構造化データ（Schema.org）実装", "エンティティ（会社・サービス情報）設計", "llms.txt設置・AI読み込み最適化", "E-E-A-T強化コンテンツ制作", "SEOとの連動設計", "効果確認・レポート作成"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>→</span>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* 提案しやすい顧客の特徴 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Target Customers</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              AIO対策を提案しやすい顧客の特徴
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "36px" }}>以下のような状況にある中小企業経営者がAIO対策の価値を理解しやすいです。</p>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "820px" }}>
              {[
                { title: "「ChatGPTで競合が引用されている」と感じている", body: "実際にChatGPTで業界キーワードを検索して競合が引用されるが自社は出てこないという経営者は、AIO対策の価値をすぐに実感できます。" },
                { title: "SEO・MEO対策を既に取り組んでいる", body: "すでにSEO・MEOを意識している進取の気性がある経営者は「次の一手」としてAIO対策を受け入れやすく、追加提案がスムーズです。" },
                { title: "専門性・信頼性を重視している", body: "士業・医療・コンサルなど専門性が重要な業種の経営者は、「AIに信頼できる専門家として引用される」というAIO対策の価値を理解しやすいです。" },
                { title: "ブログ・コラムを発信している", body: "すでに情報発信をしている企業は、そのコンテンツをAI検索に最適化するという方向性でAIO対策を提案しやすいです。" },
                { title: "広告費用を削減したい", body: "オーガニック流入を増やしたい経営者に対して、SEO×AIO×MEOの複合提案で「広告に頼らない集客」を提案できます。" },
                { title: "新技術・デジタルに関心が高い", body: "最新のデジタルマーケティングに関心のある経営者は、AIO対策という最新トレンドへの感度が高く提案を受け入れやすいです。" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "24px", background: "#f8f6f2", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 相性の良い代理店 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Ideal Partners</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              AIO対策代理店に向いている会社・個人
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "36px" }}>AI・デジタル技術・マーケティングへの関心が高い方に特に向いています。</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: "IT系セールス・コンサルタント", desc: "デジタルマーケティング分野を扱っている方はAI検索対策という最新領域への拡張提案がしやすいです。" },
                { label: "SEO対策の代理店・制作会社", desc: "すでにSEO対策を提供している代理店がAIO対策を追加することで、顧客への提供価値を大幅に高められます。" },
                { label: "AI・ChatGPT活用の講師・研修講師", desc: "AI活用への感度が高い顧客層を持っており、AIO対策という自然な提案テーマとして展開できます。" },
                { label: "広告代理店・マーケティング会社", desc: "Web広告・SEO・SNSに加えてAIO対策を提供することで、包括的なデジタルマーケティング支援が可能になります。" },
                { label: "中小企業支援・コンサルタント", desc: "経営課題として「デジタル集客」を扱っている支援者が、AIO対策という具体的な施策を提案できます。" },
                { label: "フリーランス・副業マーケター", desc: "新しい分野への挑戦に意欲的な個人の方が最新商材としてAIO対策を扱いたい場合も相談可能です。" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "24px", background: "#ffffff", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
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
                { href: "/agent/seo", label: "SEO対策代理店募集" },
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

        <FaqSection items={faqItems} heading="AIO対策代理店募集についてよくある質問" bgColor="#ffffff" />
        <PageContactCTA
          heading="AIO対策代理店のご相談・お申し込み"
          body="AI検索時代のWeb集客商材を扱いたい方はお気軽にお問い合わせください。実装はサイプレスが全対応です。"
        />
      </main>
      <Footer />
    </>
  );
}
