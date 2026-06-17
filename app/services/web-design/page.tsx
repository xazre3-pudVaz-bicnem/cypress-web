import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Web制作サービス｜SEO・CV・ブランドを同時に実現するNext.js高品質Web制作｜株式会社サイプレス",
  description:
    "株式会社サイプレスのWeb制作サービス。Next.js・TypeScript・Tailwind CSS対応。コーポレートサイト・採用サイト・SEO特化サイトをSEO・パフォーマンス・コンバージョン設計込みで制作。東京都葛飾区を拠点に全国対応。",
  keywords: ["Web制作", "ホームページ制作", "Next.js制作", "コーポレートサイト", "SEOサイト", "Web制作東京", "高品質Web制作"],
  openGraph: {
    title: "Web制作サービス｜SEO・CV・ブランドを同時に実現するNext.js高品質Web制作｜株式会社サイプレス",
    description: "サイプレスのWeb制作サービス。Next.js対応のSEO・パフォーマンス・コンバージョン設計込みの高品質Web制作。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/web-design" },
};

const faqItems = [
  {
    q: "Web制作の費用はどのくらいかかりますか？",
    a: "サイトの規模・ページ数・機能・デザインの複雑さによって異なります。シンプルなコーポレートサイト（5〜10ページ）から複雑なサービスサイト・採用サイトまで幅広く対応しています。まずは無料相談でご要件をお聞かせいただき、お見積もりをご提示します。詳細は料金ページをご覧ください。",
  },
  {
    q: "Next.jsとWordPressのどちらで作るのがいいですか？",
    a: "更新頻度が高い・ブログが必要・担当者がCMSで更新したいという場合はWordPressが適しています。表示速度・セキュリティ・SEO性能を重視する・更新頻度が低い・技術的な管理ができるという場合はNext.jsが適しています。ご要件に合わせて最適な技術を選定します。",
  },
  {
    q: "制作後の保守・更新対応はありますか？",
    a: "はい、月次保守プラン（セキュリティ更新・バックアップ・軽微なテキスト修正）をご用意しています。コンテンツ更新代行・追加ページ制作も別途ご対応します。",
  },
  {
    q: "SEOを意識したサイト制作をお願いできますか？",
    a: "はい、全ての制作物にSEO基礎実装（メタデータ・構造化データ・サイトマップ・canonical・内部リンク設計）を含めています。SEO特化サイト制作プランでは、キーワード設計・コンテンツ設計・Core Web Vitals最適化まで一貫してご対応します。",
  },
  {
    q: "スマートフォン対応（レスポンシブ）は標準対応ですか？",
    a: "はい、全ての制作物でモバイルファーストのレスポンシブデザインを標準実装しています。GoogleのモバイルファーストインデックスへのSEO対応・Core Web VitalsのモバイルスコアもすべてのプロジェクトでKPIとして設定します。",
  },
  {
    q: "デザインのイメージが決まっていない場合でも依頼できますか？",
    a: "はい、ブランドコンセプトの整理・参考サイトの収集・デザイン方向性のヒアリングから始めます。競合調査・ターゲットペルソナの設定・ブランドカラー選定まで一緒に進めることも可能です。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "シンプルなコーポレートサイト（5〜10ページ）で2〜3ヶ月程度が目安です。規模・機能・デザインの複雑さ・お客様のレスポンス速度によって前後します。タイトなスケジュールの場合は事前にご相談ください。",
  },
  {
    q: "リニューアルでSEO評価を引き継ぐことはできますか？",
    a: "はい、リニューアル時のSEO評価引き継ぎ（301リダイレクト設定・URLマッピング・内部リンク更新・新旧URLのインデックス移行）を確実に対応します。SEOを考慮したリニューアル設計が得意です。",
  },
  {
    q: "Core Web Vitalsの最適化は含まれますか？",
    a: "はい、全案件でLCP 2.5秒以内・CLS 0.1以下・FID 100ms以下を標準目標としています。next/image・next/font・コード分割・CDN活用などの最適化を標準実装します。Lighthouse全項目90点以上を目指します。",
  },
  {
    q: "構造化データ（Schema.org）の実装は対応していますか？",
    a: "はい、全案件でBreadcrumbList・Organization・LocalBusiness・FAQPageなどのJSON-LD構造化データを標準実装します。リッチリザルト獲得・AI検索（AIO）での引用対策にも貢献します。",
  },
  {
    q: "WordPressで作ったサイトをNext.jsに移行することはできますか？",
    a: "はい、WordPressからNext.jsへのリプレース制作に対応しています。既存コンテンツの移行・URLマッピング・SEO評価の引き継ぎを含めて設計します。表示速度・セキュリティ・管理コストの大幅な改善が期待できます。",
  },
  {
    q: "ドメイン・サーバーの契約は自分で行う必要がありますか？",
    a: "ドメイン・サーバーのご契約はお客様にていただく形が基本ですが、選定・設定のご支援は承ります。Vercel・AWS・さくらインターネット・エックスサーバーなど、用途に合わせた最適なインフラをご提案します。",
  },
  {
    q: "問い合わせフォームの実装は含まれますか？",
    a: "はい、基本的な問い合わせフォームは制作に含まれます。バリデーション・自動返信メール・管理者通知メールを標準実装します。入力項目の最適化・離脱率の低いフォームUXの設計もご相談ください。",
  },
  {
    q: "多言語対応（英語・中国語等）のサイトは制作できますか？",
    a: "はい、Next.jsのi18n機能を活用した多言語対応サイトの制作が可能です。日英・日中など複数言語での対応実績があります。hreflangタグの設定・言語別SEO設計も含めて対応します。",
  },
  {
    q: "ECサイト（オンラインショップ）の制作も対応していますか？",
    a: "シンプルなオンラインショップであればShopify・STORESとの連携をご提案します。複雑な決済・在庫管理が必要な場合は、要件を確認したうえで対応範囲をご提示します。",
  },
  {
    q: "コンテンツ（テキスト・写真）は自分で用意する必要がありますか？",
    a: "基本的にはお客様にご用意いただく形が品質・精度の面で最適です。ただし、テキストのライティング支援・写真素材のセレクト・プロカメラマンのご紹介も対応しています。コンテンツ準備の段階からご相談いただけます。",
  },
  {
    q: "競合他社のサイトと差別化したデザインにすることはできますか？",
    a: "はい、競合調査を制作前のプロセスに組み込んでいます。業界の「普通」を把握したうえで、差別化できるデザイン・コンセプトをご提案します。ブランドカラー・フォント・トーン&マナーの設計から行います。",
  },
  {
    q: "AIを使ったAIO対策（AI検索対策）も対応していますか？",
    a: "はい、E-E-A-T（経験・専門性・権威性・信頼性）の明示・著者情報の構造化・FAQ・専門性の高いコンテンツ設計・引用しやすい見出し構造を含むAIO対策を実施します。ChatGPT・Perplexity・Geminiからの引用獲得を目指します。",
  },
  {
    q: "採用サイトの制作も対応していますか？",
    a: "はい、採用強化に特化した採用サイト制作にも対応しています。求職者の共感・応募意欲を高めるビジュアル設計・企業文化の伝え方・採用フォームの最適化まで一貫して対応します。",
  },
  {
    q: "Webサイトのアクセス解析・効果測定は対応していますか？",
    a: "はい、Google Analytics 4・Google Search Consoleの初期設定・目標（コンバージョン）設定を公開時に実施します。月次レポートの作成・数値をもとにした改善提案も継続サポートとして対応しています。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎知識" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業サイトの設計・制作" },
  { href: "/web-design/recruit-site", label: "採用サイト制作", desc: "採用強化のためのサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/service-site", label: "サービスサイト・LP制作", desc: "CV重視のサービスLP" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "CMS型サイトの制作" },
  { href: "/web-design/lp", label: "ランディングページ制作", desc: "高CVなLP設計" },
  { href: "/web-design/ec", label: "ECサイト制作", desc: "オンラインショップ構築" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "制作後のSEO対策" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleビジネスプロフィール最適化" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "SEO記事・ブログ運用" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "料金プランと相場" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作実績" },
  { href: "/area/katsushika", label: "葛飾区のWeb制作", desc: "葛飾区・東部エリア対応" },
  { href: "/area/chiba", label: "千葉のWeb制作", desc: "千葉エリアの制作実績" },
  { href: "/industry/restaurant", label: "飲食業のWeb制作", desc: "飲食店・カフェのサイト制作" },
  { href: "/industry/beauty", label: "美容室・サロンのWeb制作", desc: "美容系サイトの制作" },
  { href: "/industry/clinic", label: "歯科・クリニックのWeb制作", desc: "医療系サイトの制作" },
  { href: "/industry/construction", label: "建設・リフォームのWeb制作", desc: "工務店・建設業のサイト" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "失敗しない選定ガイド" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "制作前の確認項目" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "制作のご相談はこちら" },
];

const siteTypes = [
  { type: "コーポレートサイト", desc: "ブランドと信頼を伝える企業サイト。会社概要・サービス・採用情報・ニュースを統合した企業の顔となるWebサイトを設計します。", link: "/web-design/corporate-site" },
  { type: "採用サイト", desc: "求職者の共感と応募意欲を高める採用特化サイト。企業文化・チーム・働く環境をビジュアルで伝え、応募率向上を目指します。", link: "/web-design/recruit-site" },
  { type: "SEO特化サイト", desc: "検索エンジンからの流入を最大化するSEO設計のサイト。キーワード設計・コンテンツ構造・Core Web Vitalsを優先した設計です。", link: "/web-design/seo-site" },
  { type: "サービスサイト・LP", desc: "サービスの価値を伝えてコンバージョン（問い合わせ・申し込み）につなげるサービスサイトまたはランディングページです。", link: "/web-design/service-site" },
  { type: "WordPress制作", desc: "担当者がCMSで更新できるWordPressサイト。ブログ・ニュース・実績ページの更新を内製化したい企業に適したプランです。", link: "/web-design/wordpress" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ホームページ制作サービス",
  description: "Next.js・TypeScript・Tailwind CSSを用いた高速・SEO対応のコーポレートサイト・ランディングページ制作。集客・CV改善まで考慮した設計で制作します。",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  areaServed: { "@type": "Country", name: "Japan" },
  url: "https://www.cypress-all.co.jp/services/web-design",
  serviceType: "ホームページ制作・Webサイト設計",
};

export default function ServicesWebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>Web制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Web Design Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Web制作サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのWeb制作サービスは、デザインの美しさだけでなく、SEO・パフォーマンス・コンバージョン設計を同時に満たす本番品質のWebサイトを制作します。Next.js・TypeScript・Tailwind CSSを中心とした最新技術スタックに対応しています。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              単なるデザイン制作ではなく、ビジネス目標から逆算したコンテンツ設計・集客設計・SEO設計を含む「成果を出すWebサイト」を制作します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold" style={{ background: "#0F172A", color: "#FFFFFF" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/web-design" className="inline-block px-6 py-3 text-[13px] font-semibold" style={{ border: "1.5px solid #E8E4DC", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_13_52.png" alt="Web制作サービス・コーポレートサイト・SEOサイト設計のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "サイプレスのWeb制作サービスが提供するサイトタイプと対応範囲",
                "Next.js・TypeScript・Tailwind CSSを使った制作の技術的な強み",
                "SEO・Core Web Vitals・コンバージョン設計を同時に実現する方法",
                "業種ごとに異なるWebサイト設計のポイントと支援内容",
                "初回相談から公開・保守までの10ステップの制作フロー",
                "成果を測るための具体的なKPI（7指標）と計測方法",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サイトタイプ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Site Types</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              対応サイトタイプ
            </h2>
            <div className="max-w-4xl space-y-0">
              {siteTypes.map((item, i) => (
                <div key={i} className="flex gap-6 py-6 group" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.type}</p>
                    <p className="text-[14px] leading-[1.9] mb-3" style={{ color: "#374151" }}>{item.desc}</p>
                    <Link href={item.link} className="text-[12px] font-medium" style={{ color: "#6B7280" }}>
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Webサイトが集客を変える理由 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why Your Website Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#ffffff", fontFamily: "var(--font-serif)" }}>
              優れたWebサイトが集客・採用・信頼を変える理由
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {[
                { n: "01", t: "Webサイトは24時間365日の営業担当者", b: "営業時間外でもサービス内容・実績・料金を自動で伝え、問い合わせを受け付けます。質の高いWebサイトは、営業・集客・信頼構築を同時に自動化します。" },
                { n: "02", t: "SEO・MEO・SNSの成果の受け皿になる", b: "どれだけ検索順位を上げても、SNSでフォロワーが増えても、流入先のサイトが信頼を損なうなら成果はゼロになります。Webサイトはすべての施策の集約点です。" },
                { n: "03", t: "採用候補者の応募意欲を大きく左右する", b: "求職者は応募前に必ず企業サイトを確認します。魅力的な採用ページ・代表メッセージ・チーム紹介が整っていると、応募率と採用品質が向上します。" },
                { n: "04", t: "古いサイトが与える信頼毀損", b: "デザインが古い・モバイル対応していない・表示が遅いサイトは、ユーザーに不安を与えます。第一印象で離脱されれば、どれほど良いサービスでも選ばれません。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <span style={{ color: "#c4b89a", fontSize: "22px", fontWeight: 700, display: "block", marginBottom: "12px", fontFamily: "var(--font-serif)" }}>{item.n}</span>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#ffffff" }}>{item.t}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.75)" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "既存サイトが古くてスマホ対応が悪い",
                  body: "5年以上前に制作されたサイトはGoogleのモバイルファーストインデックスに対応しておらず、SEO評価・ユーザー体験ともに損なわれています。モバイル表示の崩れ・フォントの小ささ・タップ領域の狭さが直帰率を押し上げる主因です。",
                },
                {
                  title: "問い合わせフォームがない・使いにくい",
                  body: "フォームがなかったり入力項目が多すぎたりすると、興味を持ったユーザーが離脱してしまいます。最小限の入力項目・自動返信・スマホ最適化された問い合わせフォームはコンバージョン率に直結します。",
                },
                {
                  title: "制作したが検索から来ない",
                  body: "SEO設計なしで制作されたサイトは、どれだけ美しくてもGoogleから評価されません。メタデータ・構造化データ・内部リンク設計・コンテンツ構造がないと、インデックスされても上位表示は困難です。",
                },
                {
                  title: "ブランドイメージが伝わらない",
                  body: "デザインのトーンが業種・ターゲットと合っていないと、信頼感よりも違和感を与えます。ブランドカラー・フォント・写真の選定・コピーライティングを統一した設計がなければ、競合との差別化は難しくなります。",
                },
                {
                  title: "ページ速度が遅い",
                  body: "LCP（最大コンテンツ描画）が3秒を超えると離脱率が大きく跳ね上がります。未最適化の画像・重いプラグイン・古いホスティング環境が原因のことが多く、next/imageや適切なCDNの活用で改善できます。",
                },
                {
                  title: "WordPressが重い・セキュリティリスクがある",
                  body: "プラグイン過多・テーマの肥大化・更新放置によってWordPressはパフォーマンスとセキュリティリスクが高まります。Next.jsへのリプレースか、軽量化・セキュリティ強化の保守プランが有効な対策です。",
                },
                {
                  title: "更新作業が社内でできない",
                  body: "制作会社に依存した更新体制では、コンテンツの鮮度が下がりSEO評価にも悪影響を与えます。WordPressのCMS化・ヘッドレスCMSの導入・更新マニュアルの整備で内製化できる体制を構築します。",
                },
                {
                  title: "費用が高い・安く制作したが質が低い",
                  body: "安価なWeb制作は初期費用を抑えられますが、SEO・パフォーマンス・CVの設計が省かれていることが多く、集客効果が出ないまま再制作コストが発生します。初期投資と長期的な成果を比較した費用対効果の設計が重要です。",
                },
                {
                  title: "競合のサイトよりダサい・見劣りする",
                  body: "ユーザーは複数のサイトを比較して判断します。競合と同等以上のデザインクオリティがなければ、どれほど優れたサービスでも選ばれません。競合調査から始まるデザイン戦略の立案が不可欠です。",
                },
                {
                  title: "制作会社に頼んだが要望が反映されなかった",
                  body: "要件定義が不十分なまま制作を進めると、完成物がイメージと乖離します。ワイヤーフレーム・デザインカンプの段階での確認・フィードバックを丁寧に行う制作プロセスが品質を担保します。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の支援ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の支援ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                {
                  industry: "飲食・カフェ",
                  body: "メニューの写真・季節感・雰囲気が第一印象を決めます。Instagram連携・予約システム（TableCheck・Googleマップ予約）との接続・モバイルでの注文・アクセス確認のしやすさを最優先に設計します。",
                },
                {
                  industry: "美容室・サロン",
                  body: "ビフォーアフター写真・スタイリストのポートフォリオが集客を左右します。ホットペッパービューティーや独自予約フォームとの連携・指名予約の導線・口コミ表示設計を重点的に行います。",
                },
                {
                  industry: "歯科・クリニック",
                  body: "患者さんにとって信頼性と安心感が最優先です。医師紹介・設備紹介・診療内容の丁寧な説明・よくある質問（FAQPage構造化）・WEB予約フォーム・アクセスマップを軸に設計します。",
                },
                {
                  industry: "建設・リフォーム",
                  body: "施工事例の豊富な掲載・ビフォーアフター・費用の目安・施工エリアの明示が問い合わせ数を左右します。地域SEO対応・LocalBusiness構造化データ・無料見積もりフォームをセットで設計します。",
                },
                {
                  industry: "士業・コンサル",
                  body: "専門性・実績・代表プロフィールが選ばれる理由になります。ブログ・コラムによるコンテンツSEO戦略・E-E-A-T対策・初回相談予約フォームの最適化・AIO（AI検索）対策を重視します。",
                },
                {
                  industry: "学習塾・スクール",
                  body: "合格実績・指導方針・講師紹介・料金の透明性が保護者の信頼を生みます。体験授業・説明会の申し込みフォーム・無料資料請求の導線設計・エリア別ページの充実で集客力を高めます。",
                },
                {
                  industry: "不動産",
                  body: "物件情報の見やすさ・検索性・問い合わせのしやすさが成約率を決めます。物件一覧ページのSEO最適化・エリア別ページ・LINEや電話への即時問い合わせ導線・ローカル検索対策を設計します。",
                },
                {
                  industry: "BtoB・製造・SaaS",
                  body: "製品仕様・導入事例・ホワイトペーパー・資料DLの導線が商談創出の起点になります。サービスサイト全体のCV設計・問い合わせフォームの入力負荷軽減・SEOコンテンツ戦略を一体で設計します。",
                },
              ].map((item, i) => (
                <div key={i} className="py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#c4b89a" }}>{item.industry}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: ご支援の流れ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Production Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ご支援の流れ
            </h2>
            <div className="max-w-4xl">
              {[
                { step: "STEP 01", t: "無料相談・ヒアリング", b: "ビジネス目標・ターゲット・必要なページ・予算・スケジュールを確認します。競合サイト調査・デザイン方向性の確認もこの段階で行います。オンライン・対面いずれも対応可能です。" },
                { step: "STEP 02", t: "要件定義・サイトマップ設計", b: "必要なページ・機能・コンテンツを整理し、サイトマップを作成します。キーワード設計・内部リンク設計・CV導線の設計もこの段階で確定させます。" },
                { step: "STEP 03", t: "デザインコンセプト提案", b: "ブランドカラー・フォント・トーン&マナーを決定したデザインコンセプトをご提案します。参考サイト・競合調査をもとに、差別化されたデザイン方向性を提示します。" },
                { step: "STEP 04", t: "ワイヤーフレーム確認", b: "各ページのレイアウト・情報構造・CTA配置をワイヤーフレームで確認します。この段階でコンテンツ内容・導線設計のフィードバックをいただきます。" },
                { step: "STEP 05", t: "デザイン制作", b: "モバイルファーストでUIデザインを制作します。Figmaを使ったデザインカンプをご確認いただき、修正・調整を経て最終デザインを確定します。" },
                { step: "STEP 06", t: "フロントエンド実装（Next.js）", b: "確定デザインをNext.js・TypeScript・Tailwind CSSで実装します。コンポーネント設計・コード品質・パフォーマンスを確保しながら実装を進めます。" },
                { step: "STEP 07", t: "コンテンツ入稿・SEO設定", b: "テキスト・画像・メタデータの入稿を行います。構造化データ（JSON-LD）・サイトマップ・robots.txt・canonical設定など内部SEOの全実装を完了します。" },
                { step: "STEP 08", t: "テスト・品質確認", b: "クロスブラウザ・クロスデバイスの動作確認・Lighthouse計測・Core Web Vitalsの最終チェック・フォーム送信テスト・リンク切れ確認を実施します。" },
                { step: "STEP 09", t: "公開・ドメイン設定", b: "本番環境への公開・ドメイン設定・SSL証明書の確認・Google Search ConsoleへのサイトマップXML送信・GA4の目標設定を行います。" },
                { step: "STEP 10", t: "保守・運用サポート", b: "公開後の月次保守（セキュリティ更新・バックアップ・軽微な修正）・アクセス解析レポート・SEO改善提案・コンテンツ更新代行で継続的にご支援します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[11px] font-semibold shrink-0 mt-1 px-2 py-1" style={{ background: "#c4b89a", color: "#ffffff", letterSpacing: "0.1em" }}>{item.step}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  kpi: "PageSpeed Insightsスコア",
                  how: "Google PageSpeed Insights（無料）",
                  desc: "モバイル・PCそれぞれのスコアを計測します。90点以上を目標とし、画像・コード・サーバーの最適化の効果を数値で把握できます。",
                },
                {
                  kpi: "Core Web Vitals（LCP / CLS / FID）",
                  how: "Google Search Console「Core Web Vitals」レポート",
                  desc: "LCP（表示速度）・CLS（レイアウト安定性）・FID（入力遅延）の3指標。Googleのランキング要因に直結するため、定期的なモニタリングが必要です。",
                },
                {
                  kpi: "問い合わせ数・フォーム送信数",
                  how: "Google Analytics 4「コンバージョン」イベント",
                  desc: "最も直接的な成果指標です。月次で計測し、前月比・季節比で増減の原因を分析します。フォーム改善・CTA変更の効果検証にも活用します。",
                },
                {
                  kpi: "Googleインデックス数",
                  how: "Google Search Console「インデックス作成」レポート",
                  desc: "サイト内の何ページがGoogleにインデックスされているかを確認します。インデックスされていないページはSEO流入がゼロのため、定期的な確認が重要です。",
                },
                {
                  kpi: "直帰率",
                  how: "Google Analytics 4「エンゲージメント率」",
                  desc: "1ページだけ見て離脱したユーザーの割合です。直帰率が高いページはデザイン・コンテンツ・ターゲットとのミスマッチを示しており、改善の優先度を判断する指標になります。",
                },
                {
                  kpi: "平均セッション時間（エンゲージメント時間）",
                  how: "Google Analytics 4「エンゲージメント」レポート",
                  desc: "ユーザーがサイトに滞在した平均時間です。コンテンツの質・内部リンクの誘導効果を測る指標として、ページ改善の判断に役立ちます。",
                },
                {
                  kpi: "コンバージョン率（CVR）",
                  how: "Google Analytics 4「コンバージョン率」",
                  desc: "サイト訪問者のうち問い合わせ・申し込みなどのコンバージョンに至った割合です。CTA・フォーム・ページ構成の改善効果を直接評価できる最重要指標の一つです。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] font-medium mb-2" style={{ color: "#c4b89a" }}>計測場所: {item.how}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* こだわり */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Approach</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのWeb制作の特徴
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "SEO設計を制作段階から組み込む", body: "ページ設計段階でキーワード設計・URL設計・内部リンク設計・コンテンツ構成を決め、制作とSEOを一体として進めます。後からSEO対策を追加するより、はるかに高い費用対効果を実現します。" },
                { title: "Core Web Vitals・パフォーマンス重視", body: "Lighthouse 90点以上・LCP 2.5秒以内・CLS 0.1以下を全案件の標準目標とします。next/image・next/font・コード分割・CDNなどの最適化を標準実装します。" },
                { title: "コンバージョン設計（CV改善）", body: "美しいだけのサイトは作りません。問い合わせ・電話・LINE・申し込みへの導線設計・CTAの配置・フォーム最適化・FAQ（不安解消）を含むCV設計を標準で行います。" },
                { title: "構造化データの標準実装", body: "BreadcrumbList・FAQPage・Organization・LocalBusinessなどのJSON-LD構造化データを全案件で実装します。リッチリザルト獲得・AI検索（AIO）対策にも貢献します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="Web制作サービスについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="Web制作サービスの無料相談"
          body="ご要件・目的をお聞かせいただき、最適な制作プランとお見積もりをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
