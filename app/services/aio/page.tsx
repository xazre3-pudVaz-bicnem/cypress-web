import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIO対策｜ChatGPT・Gemini・AI検索に引用されるサイトへ｜株式会社サイプレス",
  description:
    "AIO（AI検索最適化）対策。ChatGPT・Gemini・Perplexity・AI Overviewに自社情報が引用・紹介されるよう、E-E-A-T強化・構造化データ・コンテンツ最適化を総合的に支援します。",
  keywords: ["AIO対策", "AI検索最適化", "ChatGPT引用対策", "AI Overview対策", "Gemini検索", "E-E-A-T"],
  openGraph: {
    title: "AIO対策｜ChatGPT・Gemini・AI検索に引用されるサイトへ｜株式会社サイプレス",
    description:
      "AIO対策でChatGPT・Gemini・Perplexityから引用されるサイトを構築。E-E-A-T強化・構造化データ・FAQ最適化を一貫対応します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/services/aio" },
};

const faqItems = [
  {
    q: "AIO対策とは何ですか？",
    a: "AIO（AI Overview Optimization / AI検索最適化）とは、ChatGPT・Gemini・Perplexity・GoogleのAI Overviewなど、生成AIを活用した検索サービスで自社の情報が引用・紹介されやすくなるための最適化施策です。従来のSEOがGoogleの検索順位を対象としていたのに対し、AIOはAIが生成する回答文の中に自社コンテンツが採用されることを目指します。",
  },
  {
    q: "SEO対策をやっていればAIO対策は不要ですか？",
    a: "SEOとAIOは密接に関連していますが、別の対策が必要です。SEOで上位表示されているサイトがAI検索でも引用されやすい傾向はありますが、E-E-A-T（権威性・専門性）の明示、FAQの充実、構造化データの実装、著者情報の整備など、AIO特有の対応も重要です。サイプレスではSEOとAIOを統合した戦略をご提案します。",
  },
  {
    q: "AIに引用されているかどうか確認できますか？",
    a: "ChatGPT・Gemini・Perplexityなどで自社に関連するキーワードを実際に質問し、回答に自社情報が含まれているかを確認することができます。また、Google Search ConsoleのAI Overview表示データなども参考になります。サイプレスでは定期的なモニタリングもサポートしています。",
  },
  {
    q: "どのような業種でAIO対策が特に重要ですか？",
    a: "ユーザーが調査・比較・質問をする業種で特に重要です。士業（弁護士・税理士）、医療・クリニック、コンサルティング、教育、金融、不動産など、専門知識を必要とする分野では、AIが回答を生成する際に信頼できる情報源として引用される価値が高くなります。",
  },
  {
    q: "AIO対策の効果が出るまでの期間は？",
    a: "構造化データの実装や情報の整備は比較的早く反映されますが、AIが自社サイトを「権威ある情報源」として認識するようになるには継続的なコンテンツ充実とE-E-A-T向上が必要です。SEOと同様に3〜6ヶ月を目安に取り組むことをお勧めします。",
  },
  {
    q: "既存サイトへの対応は可能ですか？",
    a: "はい、既存のWebサイトに構造化データを追加したり、コンテンツを最適化したりする形での対応が可能です。WordPressサイトでも、Next.js等の開発サイトでも対応しています。まずは現状診断を行い、優先順位の高い改善項目をご提案します。",
  },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策トップ", desc: "AIO対策の全体概要" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPTへの対応" },
  { href: "/aio/structured-data", label: "構造化データ実装", desc: "Schema.org対応" },
  { href: "/aio/generative-search", label: "AI Overview対策", desc: "Google SGEへの対応" },
  { href: "/services/seo", label: "SEO対策", desc: "オーガニック検索対策" },
  { href: "/services/web-design", label: "ホームページ制作", desc: "AIO対応サイト構築" },
];

export default function AioServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A]">ホーム</Link>
              <span>/</span>
              <Link href="/business" className="hover:text-[#0F172A]">事業内容</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>AIO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#0F172A" }}>
              AIO対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              ChatGPT・Gemini・Perplexityに「あなたの会社の名前」が答えとして引用される時代が来ています。AI検索が普及する今、自社情報がAIに正しく認識・引用されるためのAIO（AI検索最適化）対策に取り組む必要があります。
            </p>
          </div>
        </section>

        {/* AIO対策とは */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>About</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>AIO対策とは</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  AIO（AI Overview Optimization）とは、ChatGPT・Google Gemini・Perplexity・MicrosoftのCopilotといった生成AIベースの検索サービス、およびGoogleが提供するAI Overview（かつてのSearch Generative Experience）において、自社のWebサイト・コンテンツが情報源として引用・紹介されやすくなるための最適化施策です。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  従来のSEOがGoogleの検索結果ページでの順位（10件のリスト）を競うものだったのに対し、AIOはAIが生成する「回答文」の中に自社情報が採用されることを目指します。AI検索では1〜3件の情報源しか引用されないため、その狭い枠に入り込むことが次世代の集客競争の鍵となります。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  AIが情報を引用する際の判断基準は、Googleが提唱するE-E-A-T（Experience・Expertise・Authoritativeness・Trustworthiness：経験・専門性・権威性・信頼性）に基づいていると考えられています。単に情報があるだけでなく、「誰が・どんな根拠で・どれほど信頼できる形で」情報を発信しているかが重要です。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  サイプレスでは、AIに正しく認識・引用されるためのWebサイト最適化を、SEO対策と連動させながら包括的に支援します。構造化データの実装からコンテンツの一次情報化、著者情報の整備まで、トータルで取り組みます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* なぜAIO対策が必要か */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Why Now</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>なぜAIO対策が必要か</h2>
            <div className="max-w-3xl">
              {[
                { num: "01", title: "検索行動がAIシフトしている", body: "ChatGPTのユーザー数は2億人を超え、若い世代を中心に「Googleで検索する前にAIに質問する」行動が定着しつつあります。AI検索での露出がなければ、次世代の集客機会を逃すことになります。" },
                { num: "02", title: "AI OverviewがGoogle検索を変えた", body: "GoogleはAI Overviewを多くの検索クエリで表示するようになっています。AI Overviewに自社コンテンツが引用されると、通常の検索結果より上部に自社情報が表示され、大幅なブランド認知向上につながります。" },
                { num: "03", title: "競合がまだ対策していない今がチャンス", body: "AIO対策に本格的に取り組んでいる企業はまだ少数です。今から対策を始めることで、競合他社に先んじてAI検索での存在感を確立できます。SEOの初期段階と同じように、早期着手が大きなアドバンテージになります。" },
                { num: "04", title: "E-E-A-Tが評価の核心になっている", body: "Googleはコンテンツ評価基準としてE-E-A-T（経験・専門性・権威性・信頼性）を重視しており、これはAI検索でも同様です。実績・資格・経験に基づいた情報発信を構造化することで、AIから信頼される情報源になれます。" },
              ].map((item) => (
                <div key={item.num} style={{ borderTop: "1px solid #E8E4DC" }} className="py-6 flex gap-6">
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 支援内容 */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Services</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>サイプレスのAIO支援内容</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "E-E-A-T（経験・専門性・権威性・信頼性）強化", body: "著者プロフィール・会社情報・実績・資格・受賞歴などをWebサイト上で適切に明示し、Googleおよび生成AIから「信頼できる情報源」として認識されるコンテンツ構造を整備します。" },
                { title: "構造化データ実装（Organization/FAQ/Article/LocalBusiness）", body: "JSON-LD形式でSchema.orgの構造化データを実装します。OrganizationでブランドをAIに認識させ、FAQPageで質問への回答を明示化し、ArticleでE-E-A-Tを補強します。LocalBusinessは地域ビジネスに必須の実装です。" },
                { title: "FAQ・Q&Aコンテンツ最適化", body: "AI検索はFAQ形式のコンテンツを特に引用しやすい特性があります。ユーザーが検索・質問しやすい形でFAQページや各サービスページにQ&Aセクションを充実させ、AI引用率を高めます。" },
                { title: "著者情報・会社情報の明確化", body: "各コンテンツページに著者プロフィール（経歴・資格・SNSリンク）を追加し、会社情報ページを充実させます。誰が発信しているのかを明確にすることで、AIが情報の信頼性を判断しやすくなります。" },
                { title: "コンテンツの一次情報化", body: "他のサイトの情報を転載・まとめたコンテンツではなく、自社独自の経験・調査・事例に基づいた一次情報を発信します。オリジナルの情報はAIに引用される可能性が高く、SEOにも強く評価されます。" },
                { title: "見出し構造の最適化", body: "AIは見出し（H1〜H3）の構造を読み解いてコンテンツを理解します。ユーザーの質問に直接答える形の見出し設計、適切なキーワード配置、論理的な情報階層を整えることで、AI引用率を向上させます。" },
                { title: "SEOとの連動設計", body: "AIO対策とSEO対策を別々に行うのではなく、統合戦略として設計します。GoogleオーガニックSEOの上位表示がAI引用の確率を高め、AI引用がブランド認知を向上させるという好循環を構築します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEOとの違い */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Comparison</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>SEOとの違い</h2>
            <div className="max-w-4xl">
              <div className="grid grid-cols-3 gap-0 text-[13px] mb-0">
                <div className="py-3 pr-6 font-semibold" style={{ borderBottom: "1px solid #E8E4DC", color: "#9CA3AF" }}></div>
                <div className="py-3 px-4 font-semibold text-center" style={{ borderBottom: "1px solid #E8E4DC", color: "#0F172A" }}>SEO対策</div>
                <div className="py-3 px-4 font-semibold text-center" style={{ borderBottom: "1px solid #E8E4DC", color: "#0F172A" }}>AIO対策</div>
              </div>
              {[
                { label: "目的", seo: "検索結果での上位表示", aio: "AIの回答に引用される" },
                { label: "対象", seo: "Google・Yahoo!の検索", aio: "ChatGPT・Gemini・Perplexity" },
                { label: "評価方法", seo: "順位・流入数", aio: "AI引用数・ブランド認知" },
                { label: "主な施策", seo: "内部SEO・コンテンツ・被リンク", aio: "E-E-A-T・構造化データ・FAQ" },
                { label: "共通基盤", seo: "コンテンツの質・技術実装", aio: "コンテンツの質・技術実装" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-0">
                  <div className="py-4 pr-6 text-[13px] font-medium" style={{ borderBottom: "1px solid #E8E4DC", color: "#374151" }}>{row.label}</div>
                  <div className="py-4 px-4 text-[13px] text-center" style={{ borderBottom: "1px solid #E8E4DC", color: "#374151" }}>{row.seo}</div>
                  <div className="py-4 px-4 text-[13px] text-center" style={{ borderBottom: "1px solid #E8E4DC", color: "#374151" }}>{row.aio}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Industries</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-8" style={{ color: "#0F172A" }}>対応業種</h2>
            <div className="flex flex-wrap gap-3">
              {["士業（弁護士・税理士・社労士）", "医療・クリニック", "コンサルティング", "IT・SaaS", "教育・スクール", "金融・保険", "不動産", "製造業", "飲食・フード", "観光・宿泊", "美容・ウェルネス", "コーポレート全般"].map((industry) => (
                <span key={industry} className="px-4 py-2 text-[13px]" style={{ border: "1px solid #E8E4DC", color: "#374151" }}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIO対策についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIO対策のご相談"
          body="AI検索時代の集客戦略をご提案します。現在のサイト状況を分析し、ChatGPT・Gemini・AI Overviewへの対応策を具体的にご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
