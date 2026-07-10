import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "テクニカルSEOとは｜クロール・インデックス・HTTPS・リダイレクト・hreflang対策｜株式会社サイプレス",
  description:
    "テクニカルSEOの基礎から実践まで解説。HTTPS移行・301リダイレクト・canonicalタグ・robots.txt・hreflang・Core Web Vitals・クロール最適化・インデックス管理の問題発見から修正まで体系的に網羅。",
  keywords: ["テクニカルSEO", "クロール最適化", "インデックス管理", "HTTPS移行", "301リダイレクト", "robots.txt", "hreflang", "canonicalタグ", "Core Web Vitals"],
  openGraph: {
    title: "テクニカルSEOとは｜クロール・インデックス・HTTPS・リダイレクト・hreflang対策｜株式会社サイプレス",
    description: "テクニカルSEOの実践ガイド。HTTPS移行・リダイレクト・robots.txt・クロール最適化・インデックス管理の問題発見と修正まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/technical-seo" },
};

const faqItems = [
  {
    q: "Core Web Vitalsとは何ですか？SEOへの影響は？",
    a: "Core Web VitalsはGoogleが定める3つのページ体験指標です。LCP（最大コンテンツの描画時間：2.5秒以内が良好）・CLS（レイアウトシフト：0.1以下が良好）・INP（インタラクティビティ：200ms以下が良好）で構成されます。2021年以降、Google検索のランキング要因として正式に採用されており、スコアが低いと順位に不利に働きます。PageSpeed Insightsの「フィールドデータ」欄でユーザーの実際の体験値を確認します。",
  },
  {
    q: "Lighthouseのパフォーマンススコアを上げるには？",
    a: "主な改善施策として、画像のWebP変換・サイズ最適化・next/imageでの遅延読み込み、JavaScriptの遅延読み込み・コード分割、CSSの圧縮・クリティカルCSSのインライン化、フォントの最適化（font-display: swap）、サーバー応答時間の短縮（CDN活用・キャッシュ設定）などがあります。Next.jsを使用している場合はnext/image・next/fontの活用で大幅な改善が可能です。",
  },
  {
    q: "クロールバジェットとは何ですか？管理するには？",
    a: "クロールバジェットとは、Googlebotが一定期間内にサイトをクロールするページ数の上限のことです。大規模サイトや更新頻度の高いサイトで重要な概念です。不要なページへのnoindex設定・XMLサイトマップの整備・robots.txtの適切な設定によって、重要なページへのクロールを集中させることができます。Search Consoleの「クロール統計情報」レポートで実際のクロール頻度を確認できます。",
  },
  {
    q: "モバイルファーストインデックスとは何ですか？",
    a: "Googleがインデックスとランキングの判断にモバイル版のページを主に使用する方針のことです。2023年時点で全サイトに適用されています。モバイルとPCでコンテンツが異なる場合、モバイル版の内容が評価されます。モバイルでの表示速度・使いやすさ・コンテンツの完全性が重要です。Search Consoleの「モバイルユーザビリティ」レポートで問題を確認できます。",
  },
  {
    q: "サイトリニューアル時にSEO評価を引き継ぐには？",
    a: "301リダイレクトの設定が最重要です。旧URLから新URLへの恒久的なリダイレクトを全ページに設定することで、SEO評価を新URLに引き継ぎます。また新しいXMLサイトマップのSearch Consoleへの登録・旧サイトのURLのクロールリクエスト停止（robots.txt）・内部リンクの更新も重要です。リニューアル後はSearch Consoleで旧URLのクロールエラーが増えていないかを監視します。",
  },
  {
    q: "JavaScriptサイト（React・Vue・Next.js）のSEOはどうすればいいですか？",
    a: "SPAやSSRフレームワークでは、JavaScriptが実行されないとコンテンツが表示されない場合があります。Next.jsなどのSSR/SSGフレームワークを使用することで、HTMLとしてコンテンツが提供され、クローラーが確実にコンテンツを読み取れるようになります。Search ConsoleのURL検査ツールで「Googlebotとしてテスト」を実行し、実際にコンテンツが読み取れているかを確認します。",
  },
  {
    q: "テクニカルSEOの診断はどのように行いますか？",
    a: "Screaming Frogなどのクロールツール・Google Search Console・PageSpeed Insights・GTmetrixなどのツールを組み合わせて診断します。クロールエラー・インデックス問題・ページ速度・モバイル対応・構造化データのエラーを一括でチェックし、優先度の高い課題から対処します。まずSearch Consoleの「カバレッジ」「ページエクスペリエンス」「拡張機能」の各レポートを確認するのが出発点です。",
  },
  {
    q: "HTTPSへの移行はSEOに影響しますか？",
    a: "はい。Googleは2014年からHTTPSを軽微なランキング要因として採用しています。また、HTTPSでないサイトはChromeで「保護されていない通信」と表示され、ユーザーの信頼性低下・直帰率上昇につながります。まだHTTPのサイトは早急にHTTPSへ移行することを推奨します。移行時は全URLを301リダイレクトで新しいHTTPS版URLへ転送し、混在コンテンツ（HTTP参照の画像・CSSなど）も合わせて修正します。",
  },
  {
    q: "テクニカルSEOの改善効果はどのくらいで出ますか？",
    a: "技術的な修正（クロールエラーの解消・表示速度の改善）は、Googleの再クロール後（数日〜数週間）に反映されることがあります。ただし順位への実質的な影響が出るには1〜3ヶ月かかることが多いです。Core Web Vitalsの改善はユーザー体験向上と合わせて、中長期的な順位改善に貢献します。Search Consoleのデータを月次で比較しながら継続的に観測します。",
  },
  {
    q: "canonicalタグとは何ですか？どう使いますか？",
    a: "canonicalタグ（rel=canonical）は、同じまたは類似のコンテンツが複数のURLに存在するとき、どのURLを「正規版」としてGoogleに認識させるかを指定するHTMLタグです。www/非www・http/https・URLパラメーターの違いによる重複URLを統合する際に使います。Next.jsではmetadataのalternates.canonicalで指定でき、headタグ内に自動的に出力されます。",
  },
  {
    q: "robots.txtのよくある間違いとは何ですか？",
    a: "最も多い間違いは、開発環境用にDisallow: /を設定したrobots.txtを本番環境にそのまま公開してしまうことです。これによりサイト全体がクロールされなくなります。他にも、Disallow: /cssや/jsを設定してGooglebotがページをレンダリングできなくなるケース、サイトマップのURLが間違っているケースなどがあります。Search ConsoleのURL検査ツールで「robots.txtでブロックされているか」を確認できます。",
  },
  {
    q: "301リダイレクトと302リダイレクトの違いは何ですか？",
    a: "301は恒久的なリダイレクトで、SEO評価（PageRank）が移転先URLに引き継がれます。302は一時的なリダイレクトで、元のURLにSEO評価が残ります。サイトリニューアルやURL変更では必ず301を使います。302を誤って使うと、Googleが古いURLを正規版と判断し続けてSEO評価が移転しません。Next.jsのredirects設定ではpermanent: trueを指定することで301が設定されます。",
  },
  {
    q: "hreflangとは何ですか？多言語サイトでどう実装しますか？",
    a: "hreflangは、同じコンテンツの異なる言語・地域版が存在するとき、各URLの言語・地域を指定するHTMLタグです。日本語サイトにはhreflang='ja'、英語版にはhreflang='en'、英語（アメリカ）にはhreflang='en-US'を指定します。必ず各ページから全言語版へhreflangで相互参照し、x-defaultも指定します。設定ミスがあると重複コンテンツとみなされることがあります。",
  },
  {
    q: "XMLサイトマップはどのように設定しますか？",
    a: "XMLサイトマップはサイト内の全URLを列挙したXMLファイルで、Googleへのクロール促進に使います。Next.jsではapp/sitemap.tsファイルを作成することで動的にサイトマップが生成されます。サイトマップには更新頻度（changefreq）・最終更新日（lastmod）・優先度（priority）を含めます。作成後はSearch ConsoleのサイトマップセクションでURLを登録して送信します。",
  },
  {
    q: "インデックスされないページが増えた場合はどう対処しますか？",
    a: "Search Consoleの「カバレッジ」レポートで除外されたURLの理由を確認します。noindexタグが誤って設定されていないか・robots.txtでブロックされていないか・canonicalが他URLを指していないか・ページのコンテンツが薄すぎてGoogleが価値なしと判断していないかをひとつずつ確認します。修正後はURL検査ツールでインデックス登録をリクエストします。",
  },
  {
    q: "重複URLとは何ですか？どう解決しますか？",
    a: "重複URLとは、同じコンテンツが複数のURLでアクセスできる状態のことです。例えばhttps://example.comとhttps://www.example.com、http版とhttps版、URLパラメーター付き版（?page=1）などが代表的なパターンです。301リダイレクトで正規URLに統合するか、canonicalタグで正規版を指定することで解決します。Search ConsoleのURL検査で現在Googleが正規URLとして認識しているURLを確認できます。",
  },
  {
    q: "Screaming Frogなどのクロールツールはどう使いますか？",
    a: "Screaming FrogはWebサイトをGooglebotのように巡回するデスクトップツールです。サイトのURLを入力するとすべてのページを自動でクロールし、リダイレクトチェーン・404エラー・重複title/description・noindex設定・canonicalの状態・画像のaltテキスト欠落などを一覧で確認できます。無料版は500URLまで対応しており、定期的なサイト診断に活用できます。",
  },
  {
    q: "リダイレクトチェーンとは何ですか？なぜ問題ですか？",
    a: "リダイレクトチェーンとは、URLAがURLBへリダイレクトされ、さらにURLBがURLCへリダイレクトされる多段リダイレクトのことです。リダイレクトが積み重なるほど、SEO評価の移転効率が下がり、ページ読み込み速度も遅くなります。Screaming Frogなどのツールで検出し、元のURLから最終URLへ直接301リダイレクトするよう修正します。",
  },
  {
    q: "混在コンテンツとは何ですか？どう修正しますか？",
    a: "混在コンテンツとは、HTTPSページ内にHTTPのリソース（画像・CSS・JavaScript・フォントなど）が含まれている状態です。ブラウザがHTTPSページ内のHTTPリソースをブロックするため、デザイン崩れやスクリプトエラーが発生することがあります。修正方法はHTMLソース内のhttp://参照をhttps://に書き換えるか、相対パスに変更することです。Chromeのデベロッパーツールのコンソールタブで警告を確認できます。",
  },
  {
    q: "サイト内の404エラーはSEOに影響しますか？",
    a: "404ページ自体はSEOペナルティにはなりません。ただし、他ページからリンクされている404ページが多い場合、リンクジュースが失われます。また、クローラーが404を大量に検出するとクロールバジェットを消費します。Search Consoleの「カバレッジ」レポートで404エラーのURLを確認し、重要なURLは301リダイレクトを設定します。存在しないURLへの内部リンクは削除または修正します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/seo/internal-seo", label: "内部SEO", desc: "タイトル・見出し・URL最適化" },
  { href: "/seo/page-speed", label: "ページ速度最適化", desc: "Core Web VitalsとLighthouseスコア改善" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "モバイルファーストインデックス対応" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LD・Schema.org設定" },
  { href: "/seo/seo-audit", label: "SEO診断", desc: "テクニカルSEOの現状評価" },
  { href: "/seo/search-console", label: "サーチコンソール活用", desc: "クロール・インデックス管理" },
  { href: "/web-design/page-speed", label: "Web制作のパフォーマンス", desc: "表示速度を考慮したサイト設計" },
  { href: "/web-design/nextjs", label: "Next.jsでのサイト制作", desc: "SEOに強いSSR/SSGサイト" },
  { href: "/knowledge/technical-seo", label: "テクニカルSEO基礎", desc: "技術的SEOの入門ガイド" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/checklist/technical-seo", label: "テクニカルSEOチェックリスト", desc: "技術的な確認項目一覧" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "E-E-A-Tを高めるコンテンツ設計" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスの技術的対応" },
  { href: "/seo/site-structure", label: "サイト構造設計", desc: "URL設計・内部リンク構造" },
  { href: "/knowledge/https-seo", label: "HTTPS移行ガイド", desc: "SSL証明書と301リダイレクトの設定" },
  { href: "/knowledge/robots-txt", label: "robots.txt解説", desc: "正しいrobots.txtの書き方" },
  { href: "/knowledge/canonical", label: "canonicalタグ解説", desc: "重複URLの正規化方法" },
  { href: "/knowledge/sitemap", label: "XMLサイトマップ解説", desc: "サイトマップの作成と登録" },
  { href: "/column/core-web-vitals", label: "Core Web Vitalsコラム", desc: "指標の意味と改善事例" },
  { href: "/seo/e-e-a-t", label: "E-E-A-T対策", desc: "専門性・権威性の技術的実装" },
  { href: "/checklist/site-launch", label: "サイト公開前チェックリスト", desc: "テクニカルSEO確認項目" },
  { href: "/column/redirect", label: "リダイレクト設定コラム", desc: "301/302の使い分けと注意点" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "テクニカルSEOを考慮したサイト制作" },
];

export default function TechnicalSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>テクニカルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Technical SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              テクニカルSEO
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              テクニカルSEOとは、Webサイトの技術的な側面を改善することで、検索エンジンがサイトを正しくクロール・インデックスできるようにする施策です。HTTPS・クロール最適化・インデックス管理・リダイレクト・robots.txt・hreflang・Core Web Vitalsなどが主な対象です。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              どれだけ質の高いコンテンツを作っても、テクニカルSEOに問題があると検索エンジンにコンテンツが届きません。サイトの技術的な土台を整えることが、SEO全体の効率を最大化する前提条件です。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_19_44.jpg" alt="テクニカルSEO・ページ速度改善・Core Web Vitals" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl flex flex-col gap-0">
              {[
                "テクニカルSEOの全体像と、クロール・インデックス・ランキングへの技術的な影響の仕組み",
                "HTTPS移行の完全チェックリストと、混在コンテンツ・301リダイレクト設定の具体的な手順",
                "robots.txtとnoindexタグのよくある間違いと、正しい設定方法",
                "Search ConsoleとScreaming Frogを使ったテクニカルSEO問題の発見・診断の進め方",
                "canonicalタグ・hreflang・重複URL問題を解決するための正規化戦略",
                "Core Web Vitals（LCP・CLS・INP）の各指標の目標値と改善施策の優先順位の付け方",
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある技術的課題と原因
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              テクニカルSEOの問題は、表面上は分かりにくく長期間気づかれないまま放置されるケースがあります。以下は診断で頻繁に発見される課題です。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { t: "HTTPSへの移行が完了していない", b: "SSL証明書は導入済みでも、HTTPでアクセスした場合に301リダイレクトが設定されていないサイトがあります。またwwwあり・なしの両方でHTTPS化されておらず、どちらかがHTTPのままになっているケースも見られます。" },
                { t: "リダイレクトチェーンが積み重なっている", b: "サイトリニューアルのたびにリダイレクトが追加され、A→B→C→Dのような多段リダイレクトが発生しているサイトがあります。Screaming Frogで「Redirects」フィルターを使うと全チェーンを一覧で確認できます。" },
                { t: "robots.txtにDisallow: /が残っている", b: "開発環境で設定したDisallow: /を本番環境にそのまま公開してしまい、サイト全体がクロール拒否された状態になっているケースが一定数あります。Search ConsoleのURL検査でrobots.txtのブロック状態を確認できます。" },
                { t: "インデックスブロック（noindex）が誤設定されている", b: "WordPressの設定画面「検索エンジンでの表示」のチェックがオフになったまま公開されているサイトや、テンプレートに誤ってnoindexが入っているサイトがあります。これによりインデックスが0件になることがあります。" },
                { t: "重複URLが存在し評価が分散している", b: "www版と非www版、http版とhttps版、末尾スラッシュあり・なし、URLパラメーター付きの各URLが別々にインデックスされ、同一コンテンツのPageRankが分散しているサイトがあります。canonicalタグと301リダイレクトで統合します。" },
                { t: "XMLサイトマップが古いか未登録", b: "サイトマップに存在しないURLが含まれていたり、削除済みページが残っていたり、Search Consoleに登録されていないサイトがあります。サイトマップ未登録のままでは新規ページのクロールが遅れます。" },
                { t: "canonicalが誤ったURLを指している", b: "全ページのcanonicalが誤ってトップページのURLになっていたり、URLパラメーター付きのページのcanonicalが自身を指していたりするケースがあります。CMSのSEOプラグイン設定ミスで発生することが多いです。" },
                { t: "hreflangが正しく相互参照されていない", b: "多言語サイトで、英語版から日本語版へのhreflangは設定してあるが、日本語版から英語版への逆方向の参照がないケースがあります。hreflangは全言語版が互いに参照し合う必要があります。" },
                { t: "Core Web Vitalsが目標値を下回っている", b: "PageSpeed Insightsのフィールドデータ（実際のユーザー計測値）でLCP・CLS・INPのいずれかが「改善が必要」または「不良」になっているにもかかわらず、対策が後回しになっているサイトがあります。" },
                { t: "モバイルとPCでコンテンツが異なる", b: "モバイル版でPCより少ないコンテンツしか表示されていないサイトは、モバイルファーストインデックスにより評価が低くなります。レスポンシブデザインを採用しているサイトでは、CSSでhidden処理された重要なコンテンツがないかを確認します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC", maxWidth: "900px", marginTop: "0" }} />
          </div>
        </section>

        {/* テクニカルSEO未対応の問題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Technical SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              テクニカルSEO未対応が引き起こす4つの問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "インデックスされないページが増える", b: "noindex設定のミス・canonicalの設定誤り・robots.txtによるブロックでせっかく作ったページがGoogleにインデックスされないことがあります。定期的な技術的監査が必要です。" },
                { t: "重複コンテンツでPageRankが分散する", b: "www/非www・http/https・URLパラメーターの違いで同じコンテンツが複数のURLに存在すると、PageRankが分散し評価が下がります。canonical・301リダイレクトで集約します。" },
                { t: "ページ速度の問題でCore Web Vitals不良", b: "LCP・CLS・INPの目標値を達成できていないページはランキングで不利になります。Next.js・Vercelの活用や画像最適化などの技術的施策でスコアを改善します。" },
                { t: "構造化データ未実装でリッチリザルトを取れない", b: "FAQ・パンくずリスト・組織情報などのSchema.orgマークアップがないと、検索結果での視認性が低くなります。構造化データはCTR向上とE-E-A-T向上の両方に貢献します。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C: 技術的な問題タイプ別解説 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Technical Reference</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              技術的な問題タイプ別解説
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              テクニカルSEOの各要素は独立した技術知識が必要です。問題の種類ごとに原因・確認ツール・修正方法を整理します。
            </p>
            <div className="max-w-5xl flex flex-col gap-0">
              {[
                {
                  title: "HTTPS（SSL証明書・混在コンテンツ）",
                  body: "HTTPSへの移行では、SSL証明書の取得・インストールに加えて、すべてのHTTPアクセスを301リダイレクトでHTTPSへ転送する設定が必要です。移行後は混在コンテンツ（HTTPSページ内のHTTP参照リソース）の有無をChromeのデベロッパーツールで確認します。Screaming Frogでサイト全体をクロールし「Response Codes」でHTTPのURLが残っていないかを一括チェックします。",
                },
                {
                  title: "301/302リダイレクト",
                  body: "恒久的なURL変更には301を、一時的な変更には302を使います。Next.jsではnext.config.jsのredirects関数でpermanent: trueを指定することで301が設定されます。Apache/.htaccessではRewriteRule、Nginxではreturn 301を使います。リダイレクト設定後はScreaming Frogで「Redirects」フィルターを使い、チェーン（多段リダイレクト）が発生していないかを確認します。",
                },
                {
                  title: "canonicalタグ（正規URL指定）",
                  body: "HTMLのhead内にlink rel=canonicalを配置し、そのページの正規URLを絶対パスで指定します。Next.jsではmetadataオブジェクトのalternates.canonicalプロパティで指定でき、自動的にheadタグに出力されます。canonicalはインデックスの正規化に使い、完全に同一コンテンツの場合は301リダイレクトを優先します。Search ConsoleのURL検査で「Googleが選んだ正規URL」を確認し、意図した値と一致しているかを検証します。",
                },
                {
                  title: "hreflang（多言語・多地域対応）",
                  body: "各ページのheadにhreflangタグを記述し、言語コード（ja・en・zh）または言語+地域コード（en-US・en-GB）を指定します。すべての言語版ページから全言語版への相互参照が必要で、一方向だけでは機能しません。x-default属性は言語が特定できないユーザー向けのデフォルトURLを指定します。設定ミスはSearch Consoleの「国際ターゲット」レポートでエラーとして確認できます。",
                },
                {
                  title: "robots.txt",
                  body: "サイトルートに配置するrobots.txtはGooglebotのクロール対象・非対象を指定するファイルです。User-agent: *でDisallow: /を設定するとサイト全体がクロール拒否になります。開発環境用の設定を本番に持ち込まないよう注意します。Disallow: /private/のように非公開ディレクトリを指定する場合は、意図しないパスが含まれていないか確認します。Search ConsoleのURL検査ツールで「robots.txtによってブロックされているか」を確認できます。",
                },
                {
                  title: "Core Web Vitals（LCP・CLS・INP）",
                  body: "LCPの主な改善策は画像の最適化（WebP・next/image・適切なsizes指定）とサーバー応答時間の短縮です。CLSの改善はレイアウトシフトの原因となる画像・広告・フォントの読み込み遅延を解消することで対処します。INPの改善は長時間実行するJavaScriptの分割・遅延処理化が有効です。PageSpeed InsightsのFieldデータ（実際のユーザー計測値）とLabデータ（シミュレーション値）の両方を確認します。",
                },
                {
                  title: "モバイルファーストインデックス",
                  body: "レスポンシブデザインを採用することがモバイルファーストインデックスへの最良の対応です。PCにのみ表示されるコンテンツがないかを確認します（CSSでdisplay:noneにしている要素はインデックスされない場合があります）。Search Consoleの「モバイルユーザビリティ」レポートでテキストが小さすぎる・タップターゲットが狭いなどの問題を確認します。Chromeのデベロッパーツールでモバイルエミュレーションして表示を検証します。",
                },
                {
                  title: "XMLサイトマップの設計と送信",
                  body: "XMLサイトマップはGoogleへのクロール促進に使います。Next.jsではapp/sitemap.ts（またはsitemap.xml.ts）ファイルを作成することで動的サイトマップを自動生成できます。大規模サイトではサイトマップインデックスファイル（sitemapindex.xml）を使って複数のサイトマップを管理します。作成後はSearch ConsoleのサイトマップセクションでURL（例：/sitemap.xml）を登録し、「成功」ステータスになっていることを確認します。",
                },
                {
                  title: "内部リンクとクロールパス最適化",
                  body: "重要なページへの内部リンクを増やすことで、クロールバジェットを効率よく配分できます。孤立したページ（どこからもリンクされていないページ）はScreaming Frogの「Orphan Pages」機能で発見できます。深すぎる階層（クリック数4回以上）のページはクロールされにくいため、サイトマップやフッターリンクで補完します。また、リンク切れ（404）の内部リンクを修正することでクロールの効率が上がります。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* テクニカルSEOの主要領域 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Areas</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              テクニカルSEOの主要領域
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                {
                  title: "Core Web Vitals（コアウェブバイタル）",
                  body: "LCP（最大コンテンツの描画：2.5秒以内）・CLS（レイアウトシフト：0.1以下）・INP（インタラクティビティ：200ms以下）の3指標です。2021年以降Googleのランキング要因として正式採用されており、PageSpeed InsightsのField Dataを確認して改善を進めます。",
                },
                {
                  title: "ページ表示速度最適化",
                  body: "画像のWebP変換・サイズ最適化・遅延読み込み、JavaScriptとCSSの圧縮・コード分割、サーバー応答時間の短縮（CDN活用・キャッシュ設定）、フォント最適化（font-display: swap）などで改善します。",
                },
                {
                  title: "クロール最適化・インデックス管理",
                  body: "XMLサイトマップの整備・Search Consoleへの登録、robots.txtの適切な設定、クロールエラーの解消、URLの正規化（canonical設定）、重複ページのnoindex設定によって、重要なページへのクロールを集中させます。",
                },
                {
                  title: "モバイルファーストインデックス対応",
                  body: "Googleはモバイル版のページをベースにインデックスと評価を行います。モバイルでのコンテンツ完全性・表示速度・UI操作性の確認が必須です。レスポンシブデザインの採用と、モバイル固有のキャッシュ設定も重要です。",
                },
                {
                  title: "HTTPS・セキュリティ対応",
                  body: "全ページのHTTPS化（SSL証明書の適切な設定）、混在コンテンツ（HTTPとHTTPSの混在）の解消が必要です。HTTPのサイトはChromeで警告が表示され、ユーザーの信頼性に影響します。HTTPSへの移行時は301リダイレクトが必須です。",
                },
                {
                  title: "JavaScript SEO（SPA・React・Next.js）",
                  body: "JavaScriptでコンテンツを描画するSPAはクローラーが読み取れない場合があります。Next.jsのSSR/SSGを活用してHTMLとしてコンテンツを提供することが、JavaScriptサイトのSEO改善の基本です。",
                },
                {
                  title: "構造化データ（Schema.org）実装",
                  body: "JSON-LD形式でFAQPage・BreadcrumbList・Article・Organization・LocalBusinessなどを実装します。リッチリザルト（強調表示）の獲得可能性を高め、AI検索での引用にも貢献します。Google Rich Results Testで定期的に検証します。",
                },
                {
                  title: "国際化・hreflang設定",
                  body: "複数言語・地域に対応するサイトでは、hreflang属性を正しく設定することで、各言語・地域の検索ユーザーに適切なページが表示されるようになります。設定ミスは重複コンテンツ問題を引き起こすこともあります。",
                },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* D: 実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Diagnostic Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              テクニカルSEO診断・改善フロー
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              テクニカルSEOの改善は「問題の発見→優先順位付け→修正→検証」のサイクルを繰り返します。以下のフローを参考に体系的に進めてください。
            </p>
            <div className="max-w-3xl flex flex-col gap-0">
              {[
                { t: "Search Consoleのカバレッジレポートでインデックスエラーを確認する", b: "「有効（警告あり）」「除外」「エラー」の各ステータスを確認し、意図せず除外されているURLがないかをチェックします。ページ数が急減していないかも合わせて確認します。" },
                { t: "robots.txtとnoindexの設定を全ページで確認する", b: "robots.txtの内容をSearch ConsoleのURL検査かブラウザで直接確認します。主要ページにnoindexが設定されていないかもURL検査ツールで一つずつ確認します。" },
                { t: "HTTPSと301リダイレクトの完全移行を確認する", b: "http://とhttps://の両方、www版と非www版の4パターンすべてにアクセスし、最終的にひとつの正規URLに301リダイレクトされることを確認します。混在コンテンツはChromeのコンソールで確認します。" },
                { t: "Screaming Frogでサイト全体をクロール診断する", b: "対象サイトのURLを入力してクロールを実行し、リダイレクトチェーン・404エラー・重複titleとdescription・orphanページ（孤立ページ）・canonicalの状態を一覧で確認します。" },
                { t: "canonicalとhreflangの設定を検証する", b: "各ページのHTMLソースでcanonicalが正しいURLを指しているかを確認します。多言語サイトの場合はhreflangの相互参照に漏れがないかをScreaming Frogのhreflangレポートで確認します。" },
                { t: "XMLサイトマップをSearch Consoleに登録する", b: "サイトマップの全URLが正常にインデックスされているかをSearch Consoleのサイトマップレポートで確認します。サイトマップに古いURL・削除済みURLが含まれていないかも確認します。" },
                { t: "PageSpeed InsightsでCore Web Vitalsを計測する", b: "対象ページのURLをPageSpeed Insightsに入力し、Field Data（実データ）とLab Data（シミュレーション）の両方でLCP・CLS・INPを確認します。改善の機会レポートを参照して優先度の高い施策を特定します。" },
                { t: "モバイル表示とユーザビリティを検証する", b: "Search Consoleの「モバイルユーザビリティ」レポートでエラーを確認します。Chromeのデベロッパーツールのモバイルエミュレーションで実際の表示を確認し、タップターゲットの小ささ・テキストの読みにくさを解消します。" },
                { t: "構造化データの実装状況をRich Results Testで確認する", b: "主要ページをRich Results Testで検証し、FAQPage・BreadcrumbList・Organizationが正常に検出されているかを確認します。エラーがあれば修正します。" },
                { t: "改善施策を実施してSearch ConsoleでURL再インデックスを依頼する", b: "修正後はSearch ConsoleのURL検査ツールでインデックス登録をリクエストします。数日〜2週間後にSearch Consoleのデータで改善状況を確認し、残課題を特定して次のサイクルに進みます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              テクニカルSEOの改善効果は複数のツールで定量的に追跡できます。以下のKPIを月次で定点観測することで、改善の成果と残課題を継続的に把握できます。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { kpi: "インデックス済みページ数", how: "Search Consoleの「カバレッジ」レポートで有効なインデックス数を追跡します。テクニカル修正後にインデックス数が回復・増加していればポジティブなシグナルです。除外ページの理由内訳も合わせて確認します。" },
                { kpi: "クロールエラー件数", how: "Search Consoleの「カバレッジ」レポートのエラー件数と種類を月次で確認します。404・5xxサーバーエラー・robots.txtブロックの件数を追跡し、ゼロに近い状態を維持することが目標です。" },
                { kpi: "Core Web Vitals合格ページ数", how: "Search Consoleの「ページエクスペリエンス」レポートで「良好」「改善が必要」「不良」のページ数推移を確認します。良好なページの割合を高めることが目標で、特にモバイルの数値を優先して改善します。" },
                { kpi: "平均クロール頻度・クロール数", how: "Search Consoleの「クロール統計情報」レポートで日次クロール数とレスポンスタイムを確認します。クロール数が増加するほどGooglebotがサイトを重要視しているシグナルです。エラー率も合わせて確認します。" },
                { kpi: "ページ表示速度（LCP・INP）の数値", how: "PageSpeed InsightsのField Dataでサイト全体のLCP・INP・CLSの中央値を月次で計測します。LCP 2.5秒以内・INP 200ms以内・CLS 0.1以下を目標値として改善の進捗を追跡します。" },
                { kpi: "リダイレクトエラー・チェーン件数", how: "Screaming Frogで月次クロールを実施し、新たに発生したリダイレクトチェーン・4xxエラー・5xxエラーの件数を確認します。コンテンツ更新やページ追加のたびに新しい問題が発生していないかをチェックします。" },
                { kpi: "検索結果の表示回数・CTR", how: "Search Consoleの「検索パフォーマンス」レポートで表示回数・クリック数・CTRの推移を確認します。テクニカルSEO改善後にインデックスが回復したページの表示回数が増加していれば、直接的な効果の証拠です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.how}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC", maxWidth: "900px" }} />
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Our Support</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのテクニカルSEO支援
            </h2>
            <div className="max-w-4xl">
              {[
                { title: "テクニカルSEO診断", body: "クロールツール・Search Console・PageSpeed Insightsを使い、現在の技術的な問題を網羅的に調査します。HTTPS移行状況・リダイレクトチェーン・インデックスエラー・Core Web Vitals・構造化データの全項目をチェックし、優先度付きの改善リストを作成します。" },
                { title: "Core Web Vitals改善", body: "LCP・CLS・INPの現状スコアを確認し、画像最適化・JS遅延読み込み・レイアウト安定化などの具体的な改善を実施します。Next.js・Vercelを使った技術的な最適化でLighthouse 90点以上を目指します。" },
                { title: "HTTPS移行・リダイレクト設定", body: "HTTPS完全移行のチェックと301リダイレクト設定を行います。www/非www・http/https統一、リダイレクトチェーンの解消、混在コンテンツの修正まで対応します。移行後のSearch Consoleでのモニタリングもサポートします。" },
                { title: "クロール・インデックス最適化", body: "XMLサイトマップ・robots.txt・noindex設定・canonical設定を見直し、重要なページへのクロールが確実に行われるよう最適化します。孤立ページの解消・内部リンク構造の改善も含みます。" },
                { title: "構造化データ実装", body: "JSON-LD形式でFAQPage・BreadcrumbList・Article・Organization等の構造化データを実装します。Next.js・WordPress・その他CMSに対応。Google Rich Results Testで検証します。" },
                { title: "継続的なテクニカルSEO監視", body: "月次のScreaming FrogクロールとSearch Consoleレポートの確認を通じて、新たに発生したテクニカルSEO問題を早期発見します。コンテンツ更新・ページ追加時の技術的なチェックもサポートします。" },
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

        <FaqSection items={faqItems} heading="テクニカルSEOについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="テクニカルSEOのご相談・無料診断"
          body="サイトの技術的なSEO課題を診断し、優先度の高い改善施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
