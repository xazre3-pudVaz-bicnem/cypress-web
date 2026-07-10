import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO監査（SEO Audit）｜現状診断から改善へ｜サイプレス",
  description: "サイト全体のSEO課題を体系的に診断するSEO監査。インデックス状況・速度・コンテンツ・内部リンク・構造化データなど10項目以上を網羅的に調査し、優先度の高い改善計画を立てます。",
  keywords: ["SEO監査", "SEO Audit", "SEO診断", "サイト診断", "技術的SEO", "クロールエラー", "Core Web Vitals", "Search Console", "サイト健全性診断"],
  openGraph: {
    title: "SEO監査（SEO Audit）｜現状診断から改善計画へ｜株式会社サイプレス",
    description: "サイト全体のSEO課題を体系的に診断するSEO監査。インデックス状況・速度・コンテンツ・内部リンク・構造化データなど10項目以上を網羅的に調査します。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/seo-audit" },
};

const faqItems = [
  { q: "SEO監査はどのくらいの頻度で行うべきですか？", a: "年1〜2回の定期監査が推奨されます。また、サイトリニューアル後・アルゴリズムアップデート後・順位が急落した際は即時監査を行うことが重要です。特にGoogleのコアアップデートは年数回実施されるため、その前後での確認が効果的です。" },
  { q: "SEO監査で使用するツールは何ですか？", a: "Google Search Console・Google Analytics・Screaming Frogのようなクローラーツール・PageSpeed Insights・Ahrefs・Semrushなどを組み合わせて使用します。無料ツールでもGoogle Search Consoleだけで多くの問題を発見できます。有料ツールは競合分析や被リンク調査で威力を発揮します。" },
  { q: "SEO監査の結果、どのくらいで改善効果が出ますか？", a: "技術的な問題の修正（クロールエラー・速度改善など）は1〜2ヶ月で効果が出ることが多いです。コンテンツやリンクの改善は3〜6ヶ月以上かかります。問題の種類・サイト規模・クロール頻度によって異なりますが、インデックス問題の解消は比較的早期に反映されます。" },
  { q: "SEO監査は自分でできますか？", a: "Google Search Consoleを使えば基本的な問題は自分で発見できます。カバレッジレポート・PageSpeed Insights・モバイルフレンドリーテストは無料で利用可能です。より詳細な分析や改善策の立案には専門的な知識が必要なため、プロに依頼することで精度の高い診断と優先度付きの改善ロードマップが得られます。" },
  { q: "SEO監査とペナルティ解除は別ですか？", a: "SEO監査はSEO全般の診断です。Googleペナルティを受けている場合はSearch Consoleの手動対策レポートで確認し、原因特定・リンク否認・再審査申請という別の手続きが必要です。ただしSEO監査でペナルティの兆候を発見することはできます。" },
  { q: "新しく作ったサイトでもSEO監査は必要ですか？", a: "はい。新規サイトでもローンチ前後のSEO監査は重要です。インデックス設定の誤り・canonicalの未設定・構造化データのエラー・sitemap.xmlの未送信などは早期発見・修正することで、その後のインデックス促進に大きく影響します。" },
  { q: "SEO監査で最も改善効果が高い項目は何ですか？", a: "サイトによって異なりますが、インデックスされていないページの修正・ページ速度の改善・重複コンテンツの解消は比較的短期間で効果が見えやすいです。監査によって各サイトの優先課題を特定し、インデックス問題→速度→コンテンツ→外部の順で対処するのが一般的な優先順位です。" },
  { q: "競合サイトの監査もできますか？", a: "Ahrefs・Semrushなどのツールを使えば競合サイトの被リンク数・参照ドメイン・上位表示キーワード・コンテンツ量などを外部から分析できます。自社サイトとの比較で、どの領域で劣っているかを把握する競合ギャップ分析が有効です。" },
  { q: "サイトのページ数が多い場合、監査にどのくらい時間がかかりますか？", a: "100ページ以下の中小規模サイトであれば1〜2週間程度で網羅的な監査が可能です。数千ページ以上の大規模ECサイトや情報サイトは、重要カテゴリを絞って段階的に実施します。クローラーツールによる自動チェックと人的レビューを組み合わせて効率化します。" },
  { q: "被リンクの品質はどう判断しますか？", a: "被リンク元ドメインの権威性（Domain Rating / Domain Authority）・リンクのアンカーテキスト・スパム度スコア（Spam Score）などで評価します。スパム被リンクはGoogleの否認ツールで対処します。ただし被リンク否認は慎重に行う必要があり、誤った否認が逆効果になる場合もあります。" },
  { q: "モバイルとPCで順位が大きく違うのはなぜですか？", a: "Googleはモバイルファーストインデックスを採用しているため、モバイル版のコンテンツ・速度・使いやすさが評価基準になります。PCで問題がなくてもモバイルでの表示崩れ・速度低下・コンテンツの差異があれば、それがモバイル順位に影響します。" },
  { q: "Core Web Vitalsのスコアは順位にどの程度影響しますか？", a: "Core Web Vitalsはランキングシグナルの一つですが、コンテンツの関連性・E-E-A-T・被リンクと比べると影響度は限定的です。ただしLCP・CLS・INPが「不良」判定の場合はユーザー体験の改善として対処する価値があります。Pass（良好）を目指すことを推奨します。" },
  { q: "404エラーページはSEOに悪影響がありますか？", a: "外部から被リンクされているURLが404になっている場合はリンクジュースが失われるため、301リダイレクトで適切なページに転送することを推奨します。内部リンクから404に飛んでいる場合もユーザー体験を損ねるため、クロールツールで定期的にチェックします。" },
  { q: "サイトリニューアル後に順位が下がりました。原因はなんですか？", a: "よくある原因はURLの変更（301リダイレクト未設定）・noindexの誤設定・canonical変更・コンテンツの削除・内部リンク構造の変化・ページ速度の低下などです。リニューアル前後の比較監査で原因を特定し、Search Consoleのカバレッジレポートで問題ページを絞り込みます。" },
  { q: "XMLサイトマップはどのように最適化しますか？", a: "不要なページ（noindexページ・リダイレクト先・パラメータURL）をサイトマップから除外し、優先度の高い重要ページのみを含めます。Search Consoleからサイトマップを送信し、インデックス登録済み件数とサイトマップ送信件数の乖離を定期確認します。" },
  { q: "内部リンクの最適化とはどういうことですか？", a: "重要ページへの内部リンクを増やし（アンカーテキストにキーワードを含める）、孤立ページをなくし、パンくずリストを設置することがポイントです。サイロ構造（テーマ別にまとめて相互リンク）を意識した設計でGoogleのサイト理解を促進します。" },
  { q: "Search Consoleのどのレポートを優先的に確認すべきですか？", a: "優先順位は①カバレッジ（インデックス状況）②Core Web Vitals③モバイルユーザビリティ④手動対策⑤検索パフォーマンス（クリック数・CTR・平均掲載順位）です。特に手動対策レポートは定期確認必須で、カバレッジの「除外」件数が多い場合は内容を深掘りします。" },
  { q: "SEO監査レポートには何が記載されますか？", a: "一般的に①発見された問題のリスト②問題の重要度（高・中・低）③改善の優先順位と推奨施策④競合比較⑤実施後の期待効果が含まれます。当社では実施可能な改善ロードマップとして、短期・中期・長期の施策を分けてご提示します。" },
  { q: "Googleのアルゴリズムアップデートで順位が下がった場合、何をすべきですか？", a: "まずSearch Consoleで下落したページ・クエリを特定します。コアアップデートの場合、Googleは「コンテンツの品質向上」を求めているため、E-E-A-Tの強化・コンテンツの深化・薄いページの統合・削除が有効です。即効性のある回避策はなく、継続的な品質改善が基本です。" },
  { q: "SEO監査の費用相場はどのくらいですか？", a: "サイト規模・調査項目・レポートの深度によって異なります。中小規模サイト（50〜200ページ）で技術的SEO＋コンテンツ分析の基本監査であれば数万円〜十数万円程度、大規模サイトや競合分析・改善提案まで込みの場合はそれ以上になるケースが多いです。" },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO対策の基礎と全体像" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEO対策の詳細" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "サイト内部の最適化" },
  { href: "/seo/search-console", label: "Search Console活用", desc: "Googleツールの使い方" },
  { href: "/seo/seo-writing", label: "SEOライティング", desc: "コンテンツ制作の基本" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "コンテンツ戦略全般" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "キーワード選定" },
  { href: "/seo/core-web-vitals", label: "Core Web Vitals", desc: "ページ速度と体験指標" },
  { href: "/seo/internal-link", label: "内部リンク設計", desc: "サイト構造の最適化" },
  { href: "/seo/structured-data", label: "構造化データ", desc: "Schema.org実装ガイド" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルファースト対応" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスの集客" },
  { href: "/seo/backlink", label: "被リンク対策", desc: "外部リンクの獲得戦略" },
  { href: "/seo/duplicate-content", label: "重複コンテンツ対策", desc: "canonical設定と重複解消" },
  { href: "/seo/crawl-budget", label: "クロールバジェット", desc: "クロール効率の改善" },
  { href: "/seo/page-speed", label: "ページ速度改善", desc: "LCP・CLS・INP対策" },
  { href: "/seo/sitemap", label: "XMLサイトマップ", desc: "サイトマップ最適化" },
  { href: "/seo/blog-strategy", label: "ブログ戦略", desc: "記事計画の立て方" },
  { href: "/aio/ai-overview", label: "AI Overview対策", desc: "生成AI検索への引用対策" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/services/web-consulting", label: "Webコンサルティング", desc: "包括的なサイト改善" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "SEO監査のご依頼" },
  { href: "/case-studies", label: "制作実績・事例", desc: "改善成功事例" },
  { href: "/faq", label: "よくある質問", desc: "SEO全般のQ&A" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#F9F8F5", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }}>SEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              SEO監査
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SEO Audit</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              SEO監査｜現状診断から改善計画へ
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              SEO対策を実施しているのに順位が上がらない、以前より下がった、どこに問題があるかわからない——そのような場合はSEO監査（SEO Audit）で現状を体系的に診断します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              インデックス状況・クロールエラー・ページ速度・コンテンツ品質・内部リンク・構造化データ・被リンクまで10項目以上を網羅的に調査し、優先度の高い改善課題を特定します。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_14_54.jpg" alt="SEO監査・現状診断" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                「なぜ順位が上がらないか」を正確に診断することなしに、SEO対策に費用と時間を投入するのはリスクです。まず現状を知ることから始めます。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "SEO監査とは何か、なぜ必要なのか——「闇雲な対策」を避けるための診断の意義",
                "Search Console・PageSpeed Insights・クローラーツールを使った具体的な調査手順",
                "インデックス問題・速度・コンテンツ・外部リンクの優先度の考え方",
                "技術的SEOの観点から見るべき10以上の診断項目とそれぞれの見方",
                "監査結果をもとに改善ロードマップを作る方法と成果測定指標",
                "定期監査のタイミングとアルゴリズムアップデート後の対応手順",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: i === 0 ? "1px solid #E8E4DC" : "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>0{i + 1}</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Issues (dark) */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Typical Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              SEO診断で発見される4つの典型的問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "インデックスされていない重要ページ", b: "noindex設定の誤り・canonicalの不整合・robots.txtの過剰ブロックなどで、上位表示させたいページがGoogleに認識されていないケースがあります。Search Consoleのカバレッジレポートで即確認できます。" },
                { t: "Core Web Vitalsの失格スコア", b: "LCP・CLS・INPが基準を満たしていないページは評価上不利になります。特にモバイルでの速度問題は多くのサイトで見落とされており、PageSpeed InsightsとSearch ConsoleのCWVレポートで確認します。" },
                { t: "重複コンテンツ・canonicalの設定漏れ", b: "URLのバリエーション（www/非www、http/https）やパラメータ付きURLが重複コンテンツを生み出し、評価が分散しているケースが多くあります。canonical属性と301リダイレクトで統合します。" },
                { t: "内部リンクの断絶・孤立ページ", b: "どこからもリンクされていない「孤立ページ」はGoogleがクロールできず評価されません。重要ページへの内部リンク設計を見直し、パンくずリストとサイロ構造で解決します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { t: "どこから改善すべきか分からない", b: "SEO対策の項目は多岐にわたるため、何から手をつければよいか判断できないケースが多いです。監査によって問題を可視化し、インパクトと実施難易度で優先順位を整理することが出発点になります。" },
                { t: "対策しているはずなのに効果が出ない", b: "キーワードを入れている・記事を書いている・リンクも貼っているのに順位が伸びない場合、技術的な問題（インデックス・速度・重複）が根本原因になっていることがあります。表面的な施策の前に土台を確認します。" },
                { t: "競合との差が縮まらない", b: "同じキーワードでいつも競合サイトに抜かれる場合、コンテンツの深さ・E-E-A-Tの強さ・被リンク数・ページ速度など複合的な要因が絡んでいます。競合ギャップ分析で自社が劣っている領域を特定します。" },
                { t: "技術的な問題を自分で発見できていない", b: "robots.txtの誤設定・canonical属性のミス・hreflangのエラー・構造化データの警告など、目に見えにくい技術的SEOの問題はクローラーツールとSearch Consoleを組み合わせないと発見が難しいです。" },
                { t: "コンテンツの品質を客観的に評価できていない", b: "自社で作成した記事が薄いコンテンツになっているかどうか、検索意図に応えているかどうかを自己評価するのは困難です。競合上位ページとの比較・コンテンツスコアリングで客観的に評価します。" },
                { t: "サイトリニューアル後に順位が急落した", b: "URLの変更・noindex設定の誤り・内部リンク構造の変化・ページ速度の低下など、リニューアル時に発生しやすいSEO上のミスは多いです。リニューアル前後の比較監査が被害を最小化します。" },
                { t: "アルゴリズムアップデートの影響を受けた", b: "Googleのコアアップデートで順位が大きく変動した場合、どのページ・どのクエリが影響を受けたかを特定し、品質改善の方向性を定める必要があります。闇雲に手を動かすのは逆効果です。" },
                { t: "被リンクに不自然なリンクが混入している疑いがある", b: "スパム的な被リンクが蓄積すると、Googleのリンクスパムアップデートの影響を受ける可能性があります。Ahrefsなどで被リンクプロファイルを確認し、必要に応じて否認ファイルを作成します。" },
                { t: "ページ速度が遅いとは知っているが何を直せばいいか分からない", b: "PageSpeed InsightsのスコアがPoorでも、LCP改善・画像圧縮・JavaScriptの遅延読み込み・サーバー応答時間のどれを優先すべきかは個別のサイト構成によります。監査でボトルネックを特定します。" },
                { t: "モバイルとPCで表示・順位に大きな差がある", b: "Googleはモバイルファーストインデックスのため、モバイル版の品質が評価基準になります。モバイルでのコンテンツ欠落・速度差・UIの問題を発見し、PCと同等の品質に整えます。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is SEO Audit */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What is SEO Audit</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "20px" }}>
              SEO監査とは何か
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "48px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                SEO監査とは、Webサイト全体のSEO上の課題を網羅的に調査・分析するプロセスです。インデックス状況・クロールエラー・ページ速度・コンテンツ品質・内部リンク・構造化データ・被リンクなど、SEOに影響するすべての要素を体系的にチェックします。医師が診察を行うように、施策を講じる前に「現状の正確な把握」が先決です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                闇雲にコンテンツを増やしたり、リンクを購入したりする前に、まず現状の問題点を正確に把握することが重要です。SEO監査によって「どの問題が最も順位に影響しているか」を特定し、インデックス問題→速度→コンテンツ→外部という優先順位で改善計画を立てます。
              </p>
            </div>
          </div>
        </section>

        {/* Audit Items */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Audit Items</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEO監査の対象項目
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "インデックス状況の確認", b: "Google Search Consoleのカバレッジレポートで対象ページが正常にインデックスされているか確認します。「除外」に分類されたページを精査し、noindexの誤設定・ソフト404・canonicalの不整合を特定します。重要ページが「インデックス未登録」になっていないかが最優先チェック項目です。" },
                { n: "02", t: "クロールエラー・404ページの特定", b: "Screaming Frogのようなクローラーツールでサイト全体をクロールし、404エラー・リダイレクトチェーン・リダイレクトループを検出します。外部から被リンクされているURLが404になっている場合は301リダイレクトで転送することでリンクジュースを回収します。" },
                { n: "03", t: "重複コンテンツ・canonical設定", b: "URLのバリエーション（www/非www、http/https、末尾スラッシュ有無）やパラメータ付きURLが重複コンテンツを生み出していないか確認します。canonical属性・301リダイレクト・hreflang（多言語サイト）の正確性をクローラーとSearch Consoleで照合します。" },
                { n: "04", t: "ページ速度・Core Web Vitals", b: "PageSpeed InsightsとSearch ConsoleのCore Web VitalsレポートでLCP（最大コンテンツ描画）・CLS（レイアウトシフト）・INP（インタラクション応答）を測定します。特にモバイルのLCPは重点項目で、画像最適化・サーバー応答時間・JavaScriptの遅延読み込みがボトルネックになりやすいです。" },
                { n: "05", t: "内部リンク・サイト構造", b: "重要ページへの内部リンクが適切に設置されているか、孤立ページがないかを確認します。クリック深度（トップページから何クリックで到達するか）・パンくずリストの設置・サイロ構造（テーマ別の相互リンク）も確認し、Googleのクロール効率を高めます。" },
                { n: "06", t: "タイトル・メタディスクリプション・見出しの最適化", b: "各ページのtitle・meta description・H1タグが最適化されているか、重複・長すぎ・短すぎがないかをチェックします。titleは30〜35文字（全角）、meta descriptionは70〜120文字が目安です。H1が複数設定されていないか・キーワードが含まれているかも確認します。" },
                { n: "07", t: "構造化データの実装状況", b: "Schema.orgの実装有無とエラーをGoogle リッチリザルトテストで確認します。FAQ・Organization・BreadcrumbList・LocalBusiness・Article（ブログ）・Product（EC）など、サイト種別に応じた構造化データの実装をチェックし、リッチリザルト表示によるCTR向上を狙います。" },
                { n: "08", t: "コンテンツの品質・キーワード対応状況", b: "各ページが対応するキーワードの検索意図に応えているか、薄いコンテンツ（情報量が少ないページ）がないかを評価します。競合上位ページと比較し、不足しているトピック・見出し構造の改善点・E-E-A-T要素の充実度を分析します。" },
                { n: "09", t: "外部リンク・被リンク状況", b: "AhrefsやSemrushでどのサイトからリンクされているか・スパムリンクが含まれていないか・参照ドメイン数と被リンク数の競合比較を行います。被リンクプロファイルの健全性確認と、スパムリンクの否認ファイル作成の要否を判断します。" },
                { n: "10", t: "モバイル対応状況", b: "Googleのモバイルフレンドリーテストで問題がないか・モバイルとPCでコンテンツに差異がないか・タップターゲットのサイズが適切かをチェックします。Googleはモバイルファーストインデックスを採用しているため、モバイル版の品質が評価の基準になります。" },
                { n: "11", t: "XMLサイトマップの最適化", b: "サイトマップに含まれるURLが正常にインデックスされているか・不要なページ（noindex・パラメータURL）が除外されているかを確認します。Search Consoleからサイトマップを送信し、送信URL数とインデックス済みURL数の乖離を定期的にモニタリングします。" },
                { n: "12", t: "SERP（検索結果）での表示状況", b: "対象キーワードでの掲載順位・CTR（クリック率）・表示回数をSearch Consoleの検索パフォーマンスレポートで分析します。CTRが低い場合はtitleとmeta descriptionの改善、スニペット最適化、構造化データでのリッチリザルト取得が有効です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 診断・分析の具体的な観点 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Diagnostic Perspectives</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              診断・分析の具体的な観点
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "40px", maxWidth: "680px" }}>
              SEO監査では単に問題を列挙するのではなく、各問題の原因・影響範囲・改善策をセットで整理します。以下の観点を軸に診断を進めます。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                { t: "技術的問題（インデックス・クロール）", b: "Search Consoleのカバレッジレポートで除外ページを確認。robots.txt・noindex・canonical・HTTPステータスコードの整合性を確認します。インデックス問題はすべてのSEO施策の土台になるため、最初に解決すべき領域です。" },
                { t: "コンテンツ品質（薄いページ・意図ズレ）", b: "各ページが検索意図を満たしているか・情報量が競合と比較して充分か・E-E-A-Tの根拠（著者情報・出典・専門性）が示されているかを評価します。Googleのコアアップデートはコンテンツ品質を主な対象としています。" },
                { t: "内部リンク（孤立・クリック深度・アンカー）", b: "重要ページへの内部リンク数とアンカーテキストを確認。クリック深度3以上の重要ページはトップページ近くに引き上げます。孤立ページのリストをクローラーツールで抽出し、サイトマップや関連ページからのリンクを設置します。" },
                { t: "被リンクプロファイル（品質・多様性・競合比較）", b: "被リンク元ドメインの権威性・アンカーテキストの多様性・スパム度を分析します。競合との参照ドメイン数の差を把握し、被リンク獲得施策の優先ターゲットを特定します。" },
                { t: "Core Web Vitals（LCP・CLS・INP）", b: "PageSpeed Insightsでモバイル・PCそれぞれのCWVスコアを確認。LCPはヒーロー画像・サーバー応答時間、CLSはバナー・フォント読み込み、INPはJavaScript実行時間が主因です。Field Data（実際のユーザーデータ）でのPass判定を目指します。" },
                { t: "インデックスカバレッジ（ページ数・除外率）", b: "総ページ数に対してインデックス済みページの割合と除外理由の内訳を分析します。「Crawled – currently not indexed」が多い場合はコンテンツ品質、「Duplicate without user-selected canonical」が多い場合はcanonical設定の問題です。" },
                { t: "構造化データ（実装・エラー・リッチリザルト）", b: "Google リッチリザルトテストとSearch Consoleのリッチリザルトレポートでエラー・警告を確認します。FAQ・パンくず・レビュー・商品情報のリッチリザルト表示はCTR向上に直結します。" },
                { t: "SERP表示（CTR・掲載順位・クリック数）", b: "Search Consoleの検索パフォーマンスで掲載順位ごとのCTRを分析。平均CTRが低いページはtitle・meta descriptionの改善、上位表示しているが流入が少ないキーワードは内容の充実が有効です。" },
                { t: "ローカルSEO（地域ビジネスの場合）", b: "Googleビジネスプロフィールの情報完整性・NAP（名称・住所・電話）の一致・LocalBusiness構造化データ・地域名を含んだページの最適化を確認します。MEO対策と連携したローカルSEO診断を行います。" },
                { t: "E-E-A-T・AIO観点（AI検索対策）", b: "著者情報の明示・組織情報・実績・資格・出典の記載状況を確認します。ChatGPT・Gemini・Perplexityなど生成AI検索からの引用を獲得しやすいコンテンツ構造になっているか、E-E-A-Tの充実度も評価します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実施フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Audit Process</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              SEO監査の実施フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "ツール選定・アクセス権の取得", b: "Google Search Console・Google Analytics・クローラーツール（Screaming Frog等）・被リンク分析ツール（Ahrefs等）を準備します。Search ConsoleとAnalyticsのアクセス権を確認し、データが正常に取得できているかを確認します。" },
                { n: "02", t: "サイト全体のクロール実施", b: "クローラーツールでサイト全体をクロールし、全URLのHTTPステータス・タイトル・見出し・meta情報・内部リンク・canonical・noindex設定を一括取得します。大規模サイトは重要カテゴリを優先してクロールします。" },
                { n: "03", t: "インデックスカバレッジの確認", b: "Search Consoleのカバレッジレポートで有効・除外・エラーのページ数を確認します。除外の理由ごと（noindexあり・canonicalで除外・重複・クロール済み未インデックスなど）に分類し、重要ページの除外がないかを精査します。" },
                { n: "04", t: "パフォーマンス分析（速度・CWV）", b: "PageSpeed InsightsでモバイルとPCのCore Web Vitalsを測定します。Search ConsoleのCore Web VitalsレポートでURLグループごとの良否を確認し、LCP・CLS・INPの改善候補ページを特定します。" },
                { n: "05", t: "コンテンツ品質・検索意図の評価", b: "重要ページが対応するキーワードの検索上位ページと比較し、コンテンツの充実度・見出し構造・E-E-A-T要素・情報の正確性を評価します。薄いコンテンツのリストと競合との差分を整理します。" },
                { n: "06", t: "問題の特定と優先度付け", b: "発見された問題を「高・中・低」の優先度に分類します。インデックス問題（最優先）→速度問題→コンテンツ問題→外部リンク問題の順で対処します。修正のインパクトと実施難易度のマトリックスで施策を絞り込みます。" },
                { n: "07", t: "監査レポートの作成", b: "問題リスト・優先度・改善推奨施策・競合比較・期待効果をまとめた監査レポートを作成します。短期（1〜3ヶ月）・中期（3〜6ヶ月）・長期（6ヶ月以上）の改善ロードマップとしてご提示します。" },
                { n: "08", t: "改善施策の実施", b: "優先度の高い問題から順に修正を実施します。技術的修正（インデックス・速度・canonical）は開発者と連携して対応。コンテンツ改善はライター・編集担当と協力して進めます。" },
                { n: "09", t: "効果測定と再確認", b: "修正後1〜2ヶ月でSearch Consoleのカバレッジ・検索パフォーマンスの変化を確認します。インデックス数の回復・クリック数・掲載順位の改善をKPIとして追跡します。" },
                { n: "10", t: "定期監査サイクルの設定", b: "改善後も定期的な監査を継続します。年1〜2回の包括的監査に加え、Googleのコアアップデート後・リニューアル後・大規模なコンテンツ追加後に都度確認する体制を整えます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section style={{ position: "relative", height: "280px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.jpg" alt="SEO分析・データ確認" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(15px,2vw,22px)", lineHeight: 1.7, maxWidth: "680px" }}>
                「改善の優先順位」を明確にすることがSEO監査の最大の価値です。限られたリソースを最もインパクトの高い施策に集中させます。
              </p>
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "40px", maxWidth: "680px" }}>
              SEO監査後の改善効果は以下のKPIで追跡します。単一指標ではなく、複数の指標を組み合わせて健全な改善かどうかを判断します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "インデックス登録済みページ数", b: "Search Consoleのカバレッジレポートで有効（インデックス済み）のページ数を追跡します。技術的な修正後に除外からインデックス済みへ移行するページ数が増加しているかを確認します。監査後1〜2ヶ月で変化が現れることが多いです。" },
                { n: "02", t: "オーガニック検索クリック数・表示回数", b: "Search Consoleの検索パフォーマンスで週次・月次のクリック数と表示回数の推移を確認します。改善施策を実施したページ・クエリで変化があるかを具体的に追跡します。" },
                { n: "03", t: "平均掲載順位（ターゲットキーワード）", b: "重要キーワードの平均掲載順位をSearch Consoleまたはランクトラッカーで追跡します。コンテンツ改善・内部リンク強化の効果は3〜6ヶ月のスパンで判断します。短期の変動に一喜一憂せず、傾向を見ます。" },
                { n: "04", t: "Core Web Vitals Pass率", b: "Search ConsoleのCore Web VitalsレポートでGood（良好）判定のURLグループ割合を追跡します。Poor（不良）判定ページが改善されているかをモバイル・PC別に確認します。" },
                { n: "05", t: "クリック率（CTR）", b: "Search Consoleの平均CTRを掲載順位ごとに比較します。titleとmeta descriptionの改善・リッチリザルト取得後のCTR変化を追跡します。掲載順位が変わらずCTRが上がれば流入増につながります。" },
                { n: "06", t: "オーガニック流入からのコンバージョン", b: "Google Analyticsでオーガニック検索からの問い合わせ・資料請求・購入などのコンバージョン数を追跡します。検索流入が増えてもCVが増えていない場合はランディングページの改善が必要です。" },
                { n: "07", t: "クロールエラー・404件数", b: "Search Consoleのカバレッジレポートとクローラーツールで404エラー・クロールエラーの件数推移を追跡します。修正後に件数が減少しているかを確認し、新たに発生するエラーへの早期対応体制を整えます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Priority framework */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Priority Framework</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              改善優先度の考え方
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px", maxWidth: "960px" }}>
              {[
                { rank: "最優先", t: "インデックス問題", b: "表示させたいページがGoogleに認識されていない問題は、他のすべての施策の前提です。noindex解除・canonical修正・sitemap送信で早期解決します。", col: "#c4b89a" },
                { rank: "優先", t: "速度・Core Web Vitals", b: "ページ速度はユーザー体験とランキングシグナル両方に影響します。LCPのPass判定を目標に、画像最適化とサーバー応答改善から着手します。", col: "#a0c4b8" },
                { rank: "中期", t: "コンテンツ品質", b: "検索意図への適合度・情報量・E-E-A-T要素の充実は、持続的な順位向上に不可欠です。リライト・薄いページの統合・専門性の強化を進めます。", col: "#a8b4c4" },
                { rank: "長期", t: "外部リンク強化", b: "被リンクの獲得は継続的な取り組みが必要です。質の高いコンテンツによる自然な被リンク・パートナーシップ・PR活動で参照ドメイン数を増やします。", col: "#c4a8b4" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.2)", borderTop: `3px solid ${item.col}` }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: item.col, marginBottom: "8px", textTransform: "uppercase" }}>{item.rank}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "12px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEO監査のご依頼"
          body="現在のSEO状況を診断し、優先度の高い改善項目をレポートします。順位が伸びない・下がった・リニューアル後に効果が出ないなどのお悩みをお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}
