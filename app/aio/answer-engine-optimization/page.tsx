import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AEO（回答エンジン最適化）｜AI検索で選ばれるコンテンツへ",
  description: "AEO（Answer Engine Optimization）とは、AIが生成する回答に最適化する戦略。FAQ・結論ファースト・構造化データでAI検索からの引用を増やす方法を解説。",
};

const faqItems = [
  { q: "SEOとAEOはどちらが重要ですか？", a: "どちらも重要で、多くの場合に相互補完します。SEOは検索エンジンのランキング最適化、AEOはAIが生成する回答への最適化です。良質なコンテンツ・構造化データ・E-E-A-Tはどちらにも有効です。" },
  { q: "AEOで対策すべきAI検索サービスはどれですか？", a: "Google AI Overview・ChatGPT（SearchGPT）・Perplexity AI・Gemini・Claudeが主要なAI検索サービスです。基本的なAEO対策はこれら全てに有効です。" },
  { q: "AEOに対応したコンテンツはSEOにも有効ですか？", a: "はい。結論ファースト・見出し構造・FAQ形式・E-E-A-Tはすべての検索エンジンとAIが評価します。AEOはSEOの拡張版ともいえます。" },
  { q: "AEOで短い回答と詳しい解説はどちらが大事ですか？", a: "「最初の段落で簡潔な回答→その後に詳しい解説」の構成が最も効果的です。AIは冒頭の簡潔な回答を引用することが多く、詳細な内容はより深く知りたいユーザーのためになります。" },
  { q: "AEO対策を始めるにはどこから着手すべきですか？", a: "既存コンテンツへのFAQセクション追加・FAQPageスキーマの実装・見出し構造の整理が最初のステップです。新規コンテンツは最初からAEOを意識した構成で作成します。" },
];

const relatedLinks = [
  { href: "/aio", label: "AIO対策とは", desc: "AIO対策の基礎" },
  { href: "/aio/faq-optimization", label: "FAQ最適化", desc: "Q&Aコンテンツの最適化" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "Google生成AI対策" },
  { href: "/aio/chatgpt", label: "ChatGPT対策", desc: "ChatGPT引用対策" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/aio">AIO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              AEO（回答エンジン最適化）
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Answer Engine Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              AEO｜AI検索で選ばれるコンテンツへ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              AEO（Answer Engine Optimization）とは、ChatGPT・Google AI Overview・Perplexityなど「回答を生成するAIエンジン」に最適化する戦略です。従来のSEOを超えた、AI検索時代のコンテンツ戦略です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="AEO回答エンジン最適化" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>SEO vs AEO</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  従来のSEOとAEOの違い
                </h2>
                <div style={{ display: "flex", gap: "20px", padding: "16px 0", borderTop: "1px solid #ece8e0" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 600, marginBottom: "8px" }}>SEO</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>検索結果ページ（SERP）でのランキング向上が目標。ユーザーがリンクをクリックしてサイトを訪問する。</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "20px", padding: "16px 0", borderTop: "1px solid #ece8e0" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontSize: "13px", color: "#0d1b2a", fontWeight: 600, marginBottom: "8px" }}>AEO</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>AIが生成する回答への引用・参照が目標。クリックなしでもブランドが引用される「ゼロクリック露出」の最大化。</p>
                  </div>
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why Now</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
                  なぜ今AEOが重要なのか
                </h2>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                  ChatGPTの登場以来、AI検索サービスの利用者が急増しています。情報収集の入口がGoogleからAIへシフトするにつれ、AIに引用されるコンテンツを持つ企業と持たない企業の間に大きな差が生まれつつあります。
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                  AI検索でブランド名・サービス名・会社名が引用されることは、信頼性の証明であり、指名検索増加につながる長期的な資産となります。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AEO Tactics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AEO実践の6つのポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ユーザーの疑問をそのままタイトル・見出しにする", b: "「MEO対策とは何か」「MEO対策の費用はいくらか」など、ユーザーが検索する疑問形フレーズを見出しに使います。AIはこのパターンのコンテンツを引用しやすい傾向があります。" },
                { n: "02", t: "答えを最初の段落に結論ファーストで書く", b: "見出しの直後の最初の段落で、質問への答えを2〜3文で完結させます。AIはページの冒頭部分を優先的に参照します。" },
                { n: "03", t: "FAQ・Q&A形式を積極活用する", b: "よくある疑問をQ&A形式で整理し、FAQPageスキーマで構造化データを実装します。AIはQ&A形式のコンテンツを「引用しやすい」と判断します。" },
                { n: "04", t: "専門家・一次情報としての信頼性確立", b: "実際の経験・独自データ・専門家としての見解を積極的に組み込みます。AIは一次情報・専門性の高いコンテンツを優先します。" },
                { n: "05", t: "簡潔かつ正確な言い回しを優先する", b: "曖昧な表現・過剰な修飾語を避け、正確で具体的な表現を使います。AIは「引用しやすい」明確な文章を好む傾向があります。" },
                { n: "06", t: "内部リンクで関連コンテンツを体系化する", b: "関連する疑問・トピックをカバーしたページを内部リンクで結びつけます。トピックの権威として認識されることでAI引用率が上がります。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="AEO対策のご相談" body="AI検索（ChatGPT・Google AI Overview・Perplexity）への引用を増やすコンテンツ設計・FAQ最適化・構造化データ実装をご支援します。" />
      </main>
      <Footer />
    </>
  );
}
