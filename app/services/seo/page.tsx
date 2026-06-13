import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO対策｜自然検索からの集客を継続的に強化｜株式会社サイプレス",
  description:
    "キーワード調査・内部SEO・コンテンツSEO・テクニカルSEOまで一貫対応。Googleの自然検索で上位表示し、広告費に頼らない持続的なWeb集客を実現します。",
  keywords: ["SEO対策", "検索エンジン最適化", "コンテンツSEO", "テクニカルSEO", "内部SEO", "キーワード調査"],
  openGraph: {
    title: "SEO対策｜自然検索からの集客を継続的に強化｜株式会社サイプレス",
    description:
      "キーワード調査から内部SEO・コンテンツSEO・テクニカルSEOまで一貫対応。広告費に頼らない持続的なWeb集客を実現します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/services/seo" },
};

const faqItems = [
  {
    q: "SEO対策の効果が出るまでどのくらいかかりますか？",
    a: "SEOは即効性があるWeb広告とは異なり、効果が出るまでに一般的に3〜6ヶ月程度かかります。競合が少ないキーワードや内部SEOの改善は比較的早く反映されますが、競争の激しいキーワードで安定した上位表示を維持するには継続的な取り組みが必要です。一方、一度上位に定着すれば広告費ゼロで集客が続く資産になります。",
  },
  {
    q: "どんな業種・規模の会社でも対応できますか？",
    a: "はい、業種・規模を問わず対応可能です。特に中小企業・個人事業主のお客様が多く、競合が多い都市部から地域密着型ビジネスまで幅広く支援実績があります。まずは現状のサイト分析と競合調査を行い、実現可能な戦略をご提案します。",
  },
  {
    q: "SEOとリスティング広告（Web広告）は何が違いますか？",
    a: "リスティング広告は費用をかけることで即座に検索上位に表示できますが、広告費を止めると集客が止まります。SEOは成果が出るまでに時間がかかりますが、上位表示を獲得すれば継続的に集客でき、クリック単価のような変動コストがかかりません。広告とSEOを組み合わせるのが最も効率的な集客戦略です。",
  },
  {
    q: "コンテンツの作成も依頼できますか？",
    a: "はい、コンテンツSEOの一環として記事設計・ライティング・入稿まで対応しています。ターゲットキーワードの検索意図を分析し、Googleとユーザーの両方に評価される高品質なコンテンツを制作します。",
  },
  {
    q: "現在のサイトの問題点を診断してもらえますか？",
    a: "はい、現状のWebサイトに対してSEO観点での無料診断を行っています。内部SEO・テクニカル面・コンテンツの課題を洗い出し、優先度の高い改善項目をご提案します。お問い合わせフォームからご連絡ください。",
  },
  {
    q: "SEOとAIOの両方に対応してもらえますか？",
    a: "はい、サイプレスではSEOとAIO（AI検索対策）を連動させた統合的な支援を提供しています。GoogleのオーガニックSEOで上位表示しながら、ChatGPT・Gemini・PerplexityなどのAI検索でも引用・紹介されやすい構造を同時に構築します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策トップ", desc: "SEO対策の全体概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・内部リンク" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "記事設計・ライティング" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "速度・クロール・インデックス" },
  { href: "/services/aio", label: "AIO対策", desc: "AI検索への対応" },
  { href: "/services/web-design", label: "ホームページ制作", desc: "SEOに強いサイト構築" },
];

export default function SeoServicePage() {
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
              <span style={{ color: "#374151" }}>SEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#0F172A" }}>
              SEO対策
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              検索エンジンで上位表示されることは、広告費に頼らない持続的な集客の基盤です。キーワード調査から内部SEO・コンテンツ制作・テクニカル改善まで、一貫した戦略で自然検索からのアクセスを継続的に増やします。
            </p>
          </div>
        </section>

        {/* Visual section */}
        <section className="relative" style={{ height: "400px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_19_44.png"
            alt="アナリティクスダッシュボードを表示するラップトップ — SEO対策の効果測定"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.15)" }} />
        </section>

        {/* SEO対策とは */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>About</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>SEO対策とは</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  SEO（Search Engine Optimization）とは、GoogleやYahoo!などの検索エンジンでWebサイトを上位表示させるための最適化施策の総称です。「〇〇 おすすめ」「〇〇 方法」といったキーワードで検索した際に、自社のWebサイトやコンテンツが上位に表示されることで、広告費なしに見込み客を集客できます。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  MEO対策がGoogleマップへの掲載最適化を目的とするのに対し、SEO対策はWebサイト全体のオーガニック検索での可視性を高めることが目的です。検索ユーザーの意図（検索意図）に合致したコンテンツを提供し、Googleから信頼されるサイトを作り上げることが本質的なSEOの考え方です。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  SEOは短期的な広告とは異なり、成果が出るまでに時間を要します。しかし、一度上位表示を獲得し、それを維持できれば、継続的に新規訪問者を集客する「資産」になります。競合が広告をやめても自社サイトへのアクセスは続き、長期的なコスト優位性が生まれます。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  現代のSEOは単純なキーワードの詰め込みではなく、E-E-A-T（経験・専門性・権威性・信頼性）に基づいた質の高いコンテンツ、適切な技術実装、ユーザー体験の向上を総合的に評価されます。サイプレスはこれらを包括的に支援します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* よくある課題 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Challenges</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>よくある課題</h2>
            <div className="max-w-3xl">
              {[
                { num: "01", title: "サイトはあるが検索からのアクセスがほとんどない", body: "Webサイトを公開しているにもかかわらず、検索エンジンからの訪問者がほとんどいない状態。キーワード設計の不備や技術的な問題が原因であることが多いです。" },
                { num: "02", title: "特定のキーワードで上位に表示されない", body: "狙っているキーワードで競合に負けている状態。コンテンツの質・量・被リンク・技術的SEOなど複数の要因が絡んでいます。競合分析をもとに的確な改善が必要です。" },
                { num: "03", title: "コンテンツが少なく、検索エンジンに評価されていない", body: "サービス紹介ページのみで、ユーザーの検索意図に応えるコンテンツが不足している状態。コンテンツSEOで検索ニーズに対応したページを継続的に充実させる必要があります。" },
                { num: "04", title: "サイトの表示速度が遅い・技術的な問題がある", body: "ページ表示速度（Core Web Vitals）の低下、クロールエラー、インデックスされていないページなど、技術的な課題がSEOのパフォーマンスを妨げているケースです。" },
                { num: "05", title: "SEO施策をやっているが成果が見えない", body: "施策を実施していても効果測定ができていない、または間違った指標を追いかけている状態。正しいKPI設定と月次レポートによる改善サイクルの確立が必要です。" },
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
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>サイプレスのSEO支援内容</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "キーワード調査・競合分析", body: "ターゲットとなる検索キーワードの月間検索数・競合状況・検索意図を徹底分析します。狙うべきキーワードを正確に定義し、優先度の高いページから戦略的にSEO対策を進めます。" },
                { title: "サイト構造設計・内部リンク最適化", body: "Googleのクローラーが適切にサイトを認識できるよう、ページ構造・URL設計・内部リンクを最適化します。サイロ構造の構築でカテゴリの権威性を高め、上位表示を促進します。" },
                { title: "内部SEO（タイトルタグ/メタ/見出し/alt）", body: "各ページのtitleタグ・メタディスクリプション・見出し（H1〜H3）・画像alt属性を検索意図に合わせて最適化します。基本的な内部SEOの整備だけで検索順位が大きく改善するケースも多くあります。" },
                { title: "コンテンツSEO（記事設計・ライティング）", body: "ユーザーの検索意図を深く分析し、検索上位に表示されるコンテンツを設計・制作します。単なる記事の量産ではなく、専門性・一次情報・読者への価値を重視したコンテンツ戦略を展開します。" },
                { title: "テクニカルSEO（速度/クロール/インデックス）", body: "Core Web Vitals（LCP・CLS・FID）の改善、サイトマップ設定、noindex設定の見直し、クロールエラーの解消など、技術的な観点からGoogleに正しく評価されるサイトを構築します。" },
                { title: "構造化データ実装", body: "Schema.orgに基づくJSON-LD形式の構造化データ（Organization・BreadcrumbList・FAQPage・Article・LocalBusinessなど）を実装し、リッチスニペットの獲得とGoogleの理解を深めます。" },
                { title: "AIOとの連動", body: "GoogleのAI Overview（SGE）やChatGPT・Perplexityからの引用を意識した構造・コンテンツ設計をSEOと同時に行います。SEOとAIOの相乗効果で検索全体での露出を最大化します。" },
                { title: "月次レポート・改善提案", body: "検索順位・オーガニック流入数・コンバージョン数などの主要KPIを月次でレポーティングします。データに基づいた改善提案を継続的に行い、PDCAサイクルを回します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEOとAIOの関係 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Integration</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-8" style={{ color: "#0F172A" }}>SEOとAIOの関係</h2>
            <div className="max-w-3xl">
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                近年、ChatGPT・Gemini・Perplexityといった生成AIが検索の代替として急速に普及しています。ユーザーが知りたいことをAIに質問し、AIが回答を生成する「AI検索」の時代が到来しつつあります。
              </p>
              <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                重要なのは、SEOとAIO（AI検索対策）は対立するものではなく、互いに補完し合う関係にあるという点です。AI検索エンジンが回答を生成する際の情報源は、多くの場合Googleで上位表示されているWebサイトです。つまり、良質なSEOはAIOの基盤にもなります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスでは、SEO施策の中にAIO対応の視点（E-E-A-T強化・構造化データ・FAQ最適化）を組み込み、GoogleのオーガニックSEOとAI検索の両方で存在感を発揮できるサイトを構築します。
              </p>
            </div>
          </div>
        </section>

        {/* 継続的な改善サイクル — 2-col image+text */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Continuous Improvement</p>
                <h2 className="font-black text-[22px] md:text-[26px] mb-5" style={{ color: "#0F172A" }}>継続的な改善サイクルが、成果を積み上げる</h2>
                <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  SEOは一度設定すれば終わりではありません。Googleのアルゴリズムは常に進化し、競合も施策を更新し続けています。データを読み、仮説を立て、改善を実行するPDCAサイクルを継続することで、検索順位は着実に積み上がります。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  月次レポートによる数値の可視化、改善提案の実施、効果検証というサイクルを繰り返すことで、単発の施策では届かない安定した集客基盤を構築できます。サイプレスはその伴走パートナーです。
                </p>
              </div>
              <div className="relative" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_14_54.png"
                  alt="グラフとラップトップを使ってSEO分析を行うミーティングの様子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Industries</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-8" style={{ color: "#0F172A" }}>対応業種</h2>
            <div className="flex flex-wrap gap-3">
              {["コーポレート", "EC・通販", "士業・コンサルティング", "医療・クリニック", "不動産", "教育・スクール", "飲食・フード", "建設・リフォーム", "美容・ウェルネス", "IT・SaaS", "製造業", "観光・宿泊"].map((industry) => (
                <span key={industry} className="px-4 py-2 text-[13px]" style={{ border: "1px solid #E8E4DC", color: "#374151" }}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SEO対策についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEO対策のご相談・無料診断"
          body="現在のWebサイトのSEO課題を診断し、改善施策をご提案します。検索からの集客を増やしたい方はお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
