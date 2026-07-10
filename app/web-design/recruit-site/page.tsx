import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "採用サイト制作｜求職者の応募意欲を高める採用特化Webサイト｜株式会社サイプレス",
  description:
    "採用サイト制作の専門ガイド。求職者の共感と応募意欲を高めるデザイン設計・コンテンツ設計・SEO対策・採用広告との連携まで体系的に解説。Next.js・WordPress対応。",
  keywords: ["採用サイト制作", "リクルートサイト", "採用特化サイト", "採用ブランディング", "求人サイト制作"],
  openGraph: {
    title: "採用サイト制作｜求職者の応募意欲を高める採用特化Webサイト｜株式会社サイプレス",
    description: "採用サイト制作のガイド。求職者の共感と応募意欲を高めるデザイン・コンテンツ・SEO対策まで解説。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/recruit-site" },
};

const faqItems = [
  {
    q: "採用サイトを持つと採用活動にどう影響しますか？",
    a: "採用サイトがあると、求職者がエントリー前に企業の文化・働く環境・社員の声を詳しく確認できます。その結果、企業理解が深まった状態での応募が増え、内定後の辞退率や早期離職率の低下につながるケースがあります。また「会社名 採用」「会社名 口コミ」などの指名検索にも対応できます。",
  },
  {
    q: "採用サイトに載せるべきコンテンツは？",
    a: "企業の理念・ビジョン・文化（会社の雰囲気がわかるもの）、社員インタビュー・一日の仕事の流れ、福利厚生・給与・休暇制度、キャリアパス・成長環境、オフィス環境・チームの雰囲気がわかる写真・動画が重要です。求職者が「ここで働きたい」と感じるコンテンツ設計が採用成功の鍵です。",
  },
  {
    q: "採用サイトのSEO対策はどうすればいいですか？",
    a: "「会社名 採用」「業種 転職 エリア」などのキーワードに対する内部SEO最適化が基本です。また採用ブログ・社員インタビュー記事などのコンテンツ制作でオーガニック流入を獲得することも有効です。求人情報にはJobPosting構造化データの実装が推奨されます。",
  },
  {
    q: "採用サイトとコーポレートサイトは分けた方がいいですか？",
    a: "独立した採用サイト（recruit.〇〇.co.jpなど）と、コーポレートサイト内の採用ページ（〇〇.co.jp/recruit）の2つの形式があります。採用活動に力を入れる・採用専用のブランディングをしたいという場合は独立サイトが効果的です。コストを抑えたい・採用人数が少ない場合はコーポレートサイト内での設計が現実的です。",
  },
  {
    q: "スタートアップや小規模企業でも採用サイトは効果的ですか？",
    a: "はい、むしろ大手に比べて認知度が低い小規模企業こそ、採用サイトでのブランディングが重要です。社風・働き方・創業ストーリーなど、大手にはない独自の魅力を伝えることで、共感した候補者からの応募を増やすことができます。",
  },
  {
    q: "IndeedやリクナビNEXTなどの媒体と採用サイトはどう使い分けますか？",
    a: "求人媒体は「認知獲得」の役割、採用サイトは「共感・応募意欲の醸成」の役割です。媒体から採用サイトへ誘導する動線を設計することで、媒体での掲載コスト削減と自社ブランドの強化を同時に実現できます。採用サイトのURLを求人媒体に掲載するだけで流入が生まれます。",
  },
  {
    q: "採用サイトの制作費用の目安は？",
    a: "採用サイトの制作費用は、ページ数・コンテンツ量（社員インタビュー数・写真撮影の有無）・CMS機能によって変わります。まずは無料相談でご要件をお聞かせいただき、お見積もりをご提示します。コーポレートサイトと同時制作の場合は費用を抑えられることが多いです。",
  },
  {
    q: "社員インタビューの撮影・ライティングもお願いできますか？",
    a: "はい、社員インタビューの企画・取材・撮影（プロカメラマン手配）・ライティングまで一貫してサポートできます。インタビュー内容の設計（求職者が知りたい質問軸）から原稿確認まで対応します。採用サイトの中核となるコンテンツです。",
  },
  {
    q: "応募フォームの設置・ATS連携は対応できますか？",
    a: "はい、応募フォームの設計・設置・自動返信メール設定まで対応します。Harmos・HRMOS・SmartHRなどのATSとの連携も要件に応じて対応可能です。スマートフォンで快適に入力できるフォーム設計を心がけます。",
  },
  {
    q: "求人情報の構造化データ（JobPosting）は実装できますか？",
    a: "はい、JobPosting構造化データをJSON-LD形式で実装します。Googleしごと検索への対応により、検索結果に求人情報がリッチリザルトとして表示され、クリック率の向上が見込めます。採用サイトのSEO強化において重要な施策です。",
  },
  {
    q: "動画コンテンツ（会社紹介動画・社員インタビュー動画）も制作できますか？",
    a: "はい、動画ディレクター・カメラマンのネットワークを通じて、会社紹介動画・社員インタビュー動画・オフィス紹介動画の制作もコーディネートできます。採用サイトへの動画埋め込み実装まで含めて対応します。",
  },
  {
    q: "採用サイトのアクセス解析・応募数の計測はできますか？",
    a: "はい、GA4によるセッション数・ページ閲覧数・応募フォーム送信数（コンバージョン）の計測設定を行います。どのページが応募の決め手になっているかを分析し、継続的なコンテンツ改善に活かします。",
  },
  {
    q: "採用サイトのコンテンツ更新（新しい社員インタビュー追加など）は自社でできますか？",
    a: "はい、CMSを活用することで、社員インタビュー記事・求人情報・お知らせの追加・編集を自社で行えます。管理画面のトレーニングも含めてサポートします。更新が簡単にできる仕組みを最初から設計します。",
  },
  {
    q: "採用ブログ（コンテンツSEO）の立ち上げも依頼できますか？",
    a: "はい、「業種 転職 体験談」「職種 一日の流れ」などのキーワードに対応した採用ブログの設計・初期記事制作・CMS構築まで対応します。オーガニック流入による採用コスト削減を長期的に実現します。",
  },
  {
    q: "採用サイトのリニューアルも対応していますか？",
    a: "はい、既存の採用サイト・採用ページのリニューアルに多数対応しています。現状分析（流入数・応募数・離脱ページ）をもとに改善優先度を明確にし、効果的なリニューアルプランを提案します。",
  },
  {
    q: "コーポレートサイトに採用ページを追加する場合と採用専用サイトを作る場合の違いは？",
    a: "コーポレートサイト内の採用ページ（/recruit）は初期コストが低く管理も一元化できますが、採用に特化したデザイン・ブランディングの自由度は下がります。採用専用サイトは独自のデザイン・URL・SEO設計が可能で、採用ブランディングに本格的に投資したい企業向けです。",
  },
  {
    q: "ダイレクトリクルーティング（ビズリーチ・LinkedInなど）との連携はできますか？",
    a: "はい、スカウト型採用媒体から採用サイトへの流入設計も含めて提案します。スカウトメールで採用サイトのURLを提示することで、候補者が企業の魅力を深く理解した上で返信するケースが増えます。",
  },
  {
    q: "複数職種・複数拠点がある場合の採用サイト設計はどうなりますか？",
    a: "職種別・拠点別のページ設計を行い、求職者が自分に関係する情報にすぐたどり着けるナビゲーション設計を優先します。URL設計（/recruit/engineer・/recruit/osaka）とSEO設定も職種・拠点ごとに最適化します。",
  },
  {
    q: "Wantedlyとの連携・Wantedlyページとの使い分けは？",
    a: "Wantedlyはカジュアル面談・スタートアップ系の採用に強みがあります。採用サイトと並行して活用し、Wantedlyから採用サイトへの誘導を設計することで、相互に補完する採用体制を構築できます。自社採用サイトがあることで企業の本気度が伝わります。",
  },
  {
    q: "採用サイトはどれくらいの期間で制作できますか？",
    a: "社員インタビューの有無・ページ数・コンテンツの準備状況によりますが、一般的には1.5〜3ヶ月が目安です。コンテンツ（インタビュー・写真）の準備が最も期間に影響します。撮影・ライティングから依頼される場合は早めにご相談ください。",
  },
];

const relatedLinks = [
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の顔となるWebサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/lp", label: "LP制作", desc: "コンバージョン特化のランディングページ" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "運用しやすいCMS制作" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "SEO評価を引き継いだ刷新" },
  { href: "/web-design/ec-site", label: "ECサイト制作", desc: "売れるネットショップ設計" },
  { href: "/web-design/portfolio", label: "ポートフォリオサイト制作", desc: "実績・作品集のWebサイト" },
  { href: "/web-design/one-page", label: "ワンページサイト制作", desc: "スクロール型のシンプルな企業サイト" },
  { href: "/seo", label: "SEO対策", desc: "検索上位表示のための施策" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "採用ブログによる集客" },
  { href: "/seo/internal-seo", label: "内部SEO対策", desc: "技術SEO・構造化データ" },
  { href: "/seo/local-seo", label: "ローカルSEO・MEO", desc: "地域ビジネスの採用対策" },
  { href: "/services/branding", label: "ブランディング支援", desc: "採用ブランドの設計・構築" },
  { href: "/services/maintenance", label: "保守・運用サポート", desc: "公開後の継続サポート" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "採用サイトの料金目安" },
  { href: "/cost/recruit-site", label: "採用サイトの費用", desc: "具体的な料金目安" },
  { href: "/industry/it", label: "IT・SaaS企業のWeb制作", desc: "エンジニア採用に強いサイト" },
  { href: "/industry/manufacturing", label: "製造業のWeb制作", desc: "工場・現場環境の可視化" },
  { href: "/industry/medical", label: "医療・介護のWeb制作", desc: "看護師・コメディカル採用" },
  { href: "/industry/education", label: "教育・塾のWeb制作", desc: "講師採用のための設計" },
  { href: "/contact", label: "無料相談", desc: "採用サイト制作のご相談" },
  { href: "/case", label: "制作実績", desc: "採用サイトの制作事例" },
];

export default function RecruitSitePage() {
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
              <Link href="/web-design" style={{ color: "#6B7280" }} className="hover:underline">Web制作</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>採用サイト制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Recruit Site</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              採用サイト制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              採用サイトは、求職者に「ここで働きたい」と感じてもらうための採用特化Webサイトです。企業の文化・働く環境・社員の声・キャリアパスをビジュアルで伝え、応募率と内定承諾率の向上を目指します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              コーポレートサイトの採用ページと独立した採用サイトのどちらにも対応しています。求職者が最も重要視する「企業文化の伝わりやすさ」を優先したコンテンツ設計と、SEO・採用広告との連携も含めて設計します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative flex items-center justify-center" style={{ height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_09 (4).jpg" alt="採用サイト制作・リクルートサイト・採用ブランディングのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.5)" }} />
          <div className="relative text-center px-6">
            <p className="font-black" style={{ fontSize: "clamp(20px,3vw,36px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>「ここで働きたい」を設計する</p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "採用サイトが応募数・内定承諾率・早期離職率にどう影響するか",
                "求人媒体（Indeed・リクナビ）依存から脱却して採用コストを削減する方法",
                "業種ごとに異なる採用サイトの設計ポイントと載せるべきコンテンツ",
                "採用サイト制作のヒアリングから公開までの10ステップ全体像",
                "採用サイトの成果を測るための具体的なKPIと確認すべき計測ポイント",
                "採用サイトとコーポレートサイトの使い分け・連携方法と判断基準",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[14px] leading-[1.85]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 採用サイトなしの課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", fontWeight: 600 }}>Recruiting Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              採用サイトがないと起きる4つの採用リスク
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "優秀な人材が応募をやめる", b: "求職者の90%が応募前にWebサイトを確認します。会社の文化・働く環境・先輩スタッフの様子が伝わらないと、「どんな会社かわからない」という理由で応募候補から外されます。" },
                { t: "求人媒体に依存しコストが増え続ける", b: "IndeedやリクナビNEXTへの掲載費は採用1件あたり数十万円かかります。採用サイトで自社への共感度が高い応募者を集めることで、媒体依存から脱却できます。" },
                { t: "ミスマッチ採用で早期離職が起きる", b: "採用サイトで企業文化・働き方を正直に伝えることで、「こういう会社だと思わなかった」というミスマッチを防ぎます。入社後のギャップが少ない採用が長期定着につながります。" },
                { t: "競合企業に優秀な候補者を取られる", b: "同じ採用媒体に掲載していても、採用サイトがある競合が候補者から選ばれます。採用はサービス・商品と同じく「選ばれる理由」を設計することが重要です。" },
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
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Root Causes</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "求人媒体（Indeed・リクナビ）への依存度が高くコストがかかる", body: "掲載課金型の媒体に頼り続けると、採用単価が毎年上昇します。自社採用サイトを軸に据え、媒体を「認知獲得の入口」として位置づけることで、中長期的に採用コストを削減できます。" },
                { title: "自社の魅力が伝わらない採用ページ", body: "「アットホームな職場です」「やりがいのある仕事です」という抽象的な表現は求職者の心を動かしません。具体的なエピソード・数字・写真で裏付けることで、「自分に合う会社だ」という判断ができる採用ページになります。" },
                { title: "社員の声・社風が見えない", body: "社員インタビューがない採用サイトは、求職者にとって「入社後のイメージが全く湧かない」場所です。多様な職種・年次・バックグラウンドの社員の声を掲載することで、求職者が自分の姿を重ねられるコンテンツを作ります。" },
                { title: "働き方・福利厚生の情報が少ない", body: "給与・休暇・リモートワーク・育児支援・研修制度の詳細情報は、求職者が「具体的に働けるか」を判断するための必須情報です。この情報が不足していると、条件面で不安を感じた求職者が応募をやめます。" },
                { title: "採用応募フォームが使いにくい", body: "入力項目が多すぎる・スマートフォンで入力しにくい・エラーメッセージが不親切、という問題が応募完了率を下げています。フォームの離脱は採用機会の喪失であり、UX改善が即効性のある施策です。" },
                { title: "SEO対策されていないため検索で見つからない", body: "「会社名 採用」「業種 転職 地域名」などのキーワードで検索結果に表示されないサイトは、指名検索・オーガニック流入がゼロのままです。内部SEO・JobPosting構造化データ・採用ブログの整備が検索流入獲得の基盤です。" },
                { title: "採用とコーポレートのデザイントーンがバラバラ", body: "コーポレートサイトと採用サイトでブランドイメージが一致していないと、企業全体への信頼感が損なわれます。採用サイト独自の世界観を持ちつつ、コーポレートブランドとの一貫性を保つデザイン設計が必要です。" },
                { title: "モバイルでの応募導線が悪い", body: "求職者の70%以上がスマートフォンで採用サイトを閲覧しています。PCを前提としたレイアウト・小さすぎるボタン・縦スクロールに不向きなデザインは、スマートフォンユーザーの応募完了率を大きく下げます。" },
                { title: "更新が大変でコンテンツが古い", body: "1〜2年前の求人情報・卒業した社員のインタビューが掲載されたままのサイトは、求職者に「管理が行き届いていない会社」という印象を与えます。更新しやすいCMSの選定と運用フローの設計がコンテンツ鮮度維持の鍵です。" },
                { title: "採用サイトのデータ分析ができていない", body: "どのページで離脱しているか・どの職種ページからの応募が多いか・どの流入経路で質の高い応募者が来るかを把握していないと、改善施策を打てません。GA4・ヒートマップツールを活用した定量分析が採用サイト改善の起点です。" },
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

        {/* 採用サイトの重要要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Elements</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              求職者の共感を高める採用サイトの要素
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "企業の理念・ビジョンの明文化", body: "求職者が最も重視するのは「この会社はどんな会社か」「何を大切にしているか」という部分です。ミッション・ビジョン・バリューを言語化し、ビジュアルで伝えることが採用サイトの根幹です。" },
                { title: "社員インタビュー・リアルな声", body: "実際に働く社員の生の声（入社動機・仕事のやりがい・チームの雰囲気・成長実感）は、求職者が「入社後のイメージ」を持つために不可欠です。多様な職種・年次・バックグラウンドの社員を掲載します。" },
                { title: "一日の仕事の流れ・職種詳細", body: "抽象的な職種説明ではなく、「実際に1日どのように過ごしているか」を具体的に伝えます。仕事内容・使うツール・チームメンバーとのやり取りなど、就業後のリアルなイメージを伝えます。" },
                { title: "オフィス・環境の可視化", body: "オフィスの写真・チームランチ・社内イベントなど、「この会社の空気感」を写真・動画で伝えます。テキストより画像の方が伝わりやすいのが採用コンテンツの特徴です。" },
                { title: "福利厚生・働き方の明示", body: "給与・休暇制度・リモートワーク可否・育児支援・研修制度などを具体的に明示します。求職者が「働きやすい環境か」を判断するために最重要の情報の一つです。" },
                { title: "キャリアパス・成長機会の表現", body: "入社後どのように成長できるか・どんなキャリアパスがあるかを具体的な事例（先輩社員のキャリア変遷）で伝えます。成長意欲の高い求職者が最も注目するセクションです。" },
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

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { industry: "IT / SaaS", point: "エンジニア採用・技術ブログ連携が差別化の鍵。使用技術スタック・開発環境・技術ブログへのリンクをエンジニア向けに整備します。GitHubプロフィールへの導線・社内勉強会・OSS活動の紹介も有効です。" },
                { industry: "製造・工場", point: "現場環境・安全・福利厚生の可視化が応募率を左右します。清潔で整備された工場内部の写真・安全研修体制・資格取得支援・寮完備などの情報が、未経験者・転職希望者の不安を解消します。" },
                { industry: "飲食チェーン", point: "店長候補・アルバイト両方の採用に対応したページ設計が重要。「将来の夢に近づける」キャリアパスとアルバイトのシフト柔軟性を両立した設計で、異なる目的を持つ求職者にそれぞれ訴求します。" },
                { industry: "建設", point: "現場風景・資格支援・キャリアパスの明示が採用を加速します。実際の現場写真と完成物写真を並べた施工ギャラリー、2級→1級施工管理技士の取得支援制度、先輩のキャリア変遷が求職者の入社後イメージ形成に直結します。" },
                { industry: "医療・介護", point: "看護師・医師・コメディカルの職種別ページ設計が必要です。夜勤体制・育休復帰率・チーム医療の雰囲気・認定資格取得支援の情報整備が応募意欲を高めます。職場環境の写真は採用決定に大きく影響します。" },
                { industry: "学習塾", point: "講師採用・教育ミッションの共鳴がミスマッチ防止につながります。「なぜ教育事業をやっているか」という塾の哲学と、生徒への向き合い方・指導スタイルを丁寧に伝えることで、共感した候補者が応募します。" },
                { industry: "保育・福祉", point: "やりがい・働き方の可視化が慢性的な人手不足を解消します。保育士・介護士の「なぜこの仕事を選んだか」というストーリー、残業時間の実態・産休育休の取得状況・チームワークの様子が採用サイトの核心です。" },
                { industry: "中小企業", point: "社長メッセージ・社員の顔見せが中小企業の最大の武器です。大手にはない「経営者との距離の近さ」「裁量権の大きさ」「一人ひとりの影響力」を社長の言葉と社員の笑顔で伝えることが、候補者の共感を呼びます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.point}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 制作・実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Production Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              制作・実装フロー
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "採用戦略ヒアリング（ターゲット・課題・競合）", body: "採用したい人物像・現在の採用課題・競合企業の採用状況・求人媒体の活用状況を詳細にヒアリングします。採用サイトは採用戦略と一体で設計するため、このフェーズの質が全体の成果を決めます。" },
                { step: "採用コンセプト設計", body: "「どんな人に来てほしいか」「どんな会社だと伝えたいか」を採用ブランドのコンセプトとして言語化します。キャッチコピー・ビジュアルの方向性・トーン＆マナーを決定します。" },
                { step: "サイトマップ（会社紹介・仕事内容・社員の声・福利厚生・募集要項・応募）", body: "採用サイトに必要なページ構成・URL設計・ナビゲーション設計を決定します。SEOキーワード（「会社名 採用」「職種 転職 地域名」）との対応・応募フォームへの導線を同時に設計します。" },
                { step: "コンテンツ取材（社員インタビュー・職場写真）", body: "社員インタビューの取材・プロカメラマンによる職場写真撮影を実施します。求職者が入社後のイメージを持てるリアルなコンテンツが採用サイトの核心です。写真の質がサイト全体の印象を左右します。" },
                { step: "デザイン制作", body: "採用コンセプトをもとに、Figmaで全ページのデザインカンプを作成します。求職者が「この会社で働きたい」と感じる世界観・写真の使い方・フォント・色・余白を丁寧に設計します。" },
                { step: "Next.jsによるフロントエンド実装", body: "デザインカンプをNext.js・TypeScript・Tailwind CSSで実装します。レスポンシブ対応・アニメーション・CMS連携（社員インタビューの更新など）を含めてコーディングします。" },
                { step: "応募フォーム設計・連携", body: "スマートフォンで快適に入力できる応募フォームを設計・実装します。自動返信メール・担当者への通知・ATS連携が必要な場合は要件に合わせて対応します。フォームのUXが応募完了率を直接左右します。" },
                { step: "SEO設定（採用キーワード）", body: "全ページのメタデータ・JobPosting構造化データ・canonical・OGPを設定します。「会社名 採用」などの指名検索への対応と、GoogleしごとSearchへの求人情報表示を設定します。" },
                { step: "公開", body: "本番環境へのデプロイ・DNS設定・SSL設定・GA4・Google Search Consoleの設定を行います。応募フォームの動作確認・クロスブラウザテスト・スマートフォン表示確認を経て公開します。" },
                { step: "採用媒体からの移行促進", body: "Indeed・Wantedly・リクナビなどの掲載求人に採用サイトのURLを追加し、媒体からの流入を自社サイトに誘導します。採用媒体との相乗効果を最大化し、中長期的に自社サイト経由の応募比率を高めます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 活用例 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Use Cases</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              採用サイトの活用例
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "コーポレートサイトに採用ページを統合", body: "予算を抑えながら採用ブランディングを行う場合、コーポレートサイト内の/recruitページとして設計します。採用情報をSEO対応ページとして整備し、「会社名 採用」の指名検索を取り込みます。" },
                { title: "独立した採用専用サイトの構築", body: "採用活動に力を入れたい・複数職種を抱える企業向けに、独立した採用専用サイトを構築します。採用ブランドのデザインとコンテンツを独自に設計し、媒体からの流入先として活用します。" },
                { title: "Indeed・Wantedlyとの連携", body: "採用サイトに掲載した求人情報をIndeed・Wantedlyからの流入先に設定することで、広告媒体と自社サイトの相乗効果を最大化します。費用対効果の高い採用体制を構築できます。" },
                { title: "採用ブログ・コンテンツSEOの活用", body: "「業種 転職 体験談」「職種 やりがい」などのキーワードに対応した採用ブログを継続的に発信することで、指名検索以外からのオーガニック流入を獲得します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs to Track</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "採用サイト経由の応募数", where: "GA4コンバージョン設定 + 応募フォーム管理画面", body: "自社採用サイトからの応募フォーム送信数。媒体経由との比率を追い、自社サイト経由の割合を高めることが採用コスト削減につながります。" },
                { kpi: "内定承諾率", where: "採用管理システム（ATS）またはスプレッドシート", body: "採用サイトを通じた応募者の内定承諾率は、採用サイトが求職者とのマッチング精度向上に貢献しているかを示す重要指標です。ミスマッチが減ると承諾率が上がります。" },
                { kpi: "採用単価（媒体費用との比較）", where: "採用管理システム + 媒体費用の記録", body: "採用1件あたりのコスト（採用単価）を媒体経由・自社サイト経由で比較します。採用サイトへの投資対効果を定量的に測定できます。" },
                { kpi: "採用サイト月間セッション数", where: "GA4 > レポート > ライフサイクル > 集客", body: "月間の訪問者数の推移を追跡します。SEO施策・媒体連携・SNS施策の効果を評価する基本指標として3ヶ月・6ヶ月単位で確認します。" },
                { kpi: "求人ページの滞在時間", where: "GA4 > エンゲージメント > ページとスクリーン", body: "職種別求人ページの平均滞在時間が長いほど、求職者が内容を熟読していることを示します。滞在時間が短いページはコンテンツ・デザインの改善余地があります。" },
                { kpi: "採用広告費削減額", where: "媒体掲載費の前年比較", body: "採用サイト運用開始後に削減できた媒体掲載費の総額を測定します。採用サイトへの投資ROIを算出する際の最重要指標の一つです。" },
                { kpi: "採用経路比率（自社サイト%）", where: "採用管理システム + GA4 UTMパラメータ分析", body: "全応募者のうち自社採用サイト経由の割合。この比率が高まるほど採用の自律性が高まり、媒体依存から脱却できている状態を示します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[11px] mb-2" style={{ color: "#9CA3AF" }}>確認場所：{item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ページ構成例 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Page Structure</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              採用サイトの標準ページ構成例
            </h2>
            <p className="text-[14px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              採用サイトの基本構成を以下に示します。職種数・拠点数・採用の力の入れ方によってページ追加・省略を柔軟に行います。各ページのSEO設定・応募フォームへの導線を含めて設計します。
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { page: "採用トップ（/recruit）", desc: "採用コンセプト・メッセージ・社風・募集職種一覧・応募ボタンを配置します。求職者が「この会社に興味を持つかどうか」を決めるファーストインプレッションの場です。" },
                { page: "会社紹介（/recruit/about）", desc: "採用視点での会社紹介ページ。経営理念・ビジョン・文化・社長メッセージを求職者目線で再編集します。コーポレートサイトの会社概要とは異なるトーンで設計します。" },
                { page: "仕事内容（/recruit/jobs）", desc: "職種別の仕事内容・一日の流れ・使用ツール・チーム構成を掲載します。JobPosting構造化データを実装し、Googleしごと検索への表示を狙います。" },
                { page: "社員インタビュー（/recruit/members）", desc: "多様な職種・年次・入社経緯の社員インタビューを掲載します。求職者が「自分と近い境遇の人」の声を通じて入社後のイメージを描けるコンテンツです。" },
                { page: "働く環境・福利厚生（/recruit/culture）", desc: "給与・休暇・リモートワーク・育休・研修制度・資格支援・社内イベントを具体的に掲載します。応募のハードルを下げる重要な安心材料です。" },
                { page: "キャリアパス（/recruit/career）", desc: "入社後のロールモデル・昇進事例・異動・副業可否などを掲載します。成長意欲の高い求職者が最も注目するセクションです。" },
                { page: "募集要項（/recruit/requirements）", desc: "職種別・雇用形態別の募集要項を掲載します。給与・勤務地・勤務時間・選考フローを明記します。更新しやすいCMS設計が重要です。" },
                { page: "応募フォーム（/recruit/apply）", desc: "スマートフォン最適化・入力項目最小化・reCAPTCHA・自動返信を備えた応募フォームです。応募完了率を高めるUX設計がコンバージョンを左右します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.page}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サイプレスが選ばれる理由 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Cypress</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスの採用サイト制作の強み
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "採用戦略から設計する採用特化サイト", body: "「採用サイトをきれいに作る」だけでなく、採用課題・採用単価・競合分析をもとに採用戦略から設計します。制作物ではなく採用成果を目標として共有しながら進めます。" },
                { title: "社員インタビュー取材・ライティング対応", body: "インタビュー企画・取材・プロカメラマン手配・原稿ライティングまで一貫して対応します。「何を聞けば求職者に刺さるか」を熟知したインタビュー設計が採用コンテンツの質を決めます。" },
                { title: "JobPosting構造化データによるSEO強化", body: "求人情報にJobPosting構造化データを実装し、Googleしごと検索（Google for Jobs）への対応を標準で行います。採用サイトへのオーガニック流入を媒体費用ゼロで獲得する基盤を作ります。" },
                { title: "スマートフォン最適化・応募導線の徹底設計", body: "求職者の70%以上がスマートフォンで閲覧することを前提に、Mobile Firstで設計します。応募フォームの入力UI・CTAボタンの配置・スクロールの流れを最適化し、応募完了率を高めます。" },
                { title: "採用媒体との連携設計", body: "Indeed・Wantedly・リクナビなどの媒体から採用サイトへの誘導フローを設計します。UTMパラメータによる流入元分析・媒体別応募数の計測も含めて対応します。" },
                { title: "公開後の採用データ分析・改善サポート", body: "GA4・ヒートマップを活用し、公開後の採用サイトのページ改善・コンテンツ追加・SEO施策を継続的に提案します。採用活動は一度作って終わりではなく、データを見ながら継続改善するものです。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくあるご要望と対応内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Requests</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくあるご要望と対応内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { req: "「Indeedに頼り続けているが採用コストが高すぎる」", res: "自社採用サイトを構築し、求人媒体の流入先として活用する仕組みを設計します。採用サイト経由の応募比率を高めることで、中長期的に媒体費用を削減します。まずは現状の採用コスト分析から始めます。" },
                { req: "「エンジニア採用がうまくいかない」", res: "IT・SaaS業界向けのエンジニア採用サイトの設計実績があります。技術スタック・開発環境・エンジニアブログ連携・GitHubリンクなど、エンジニアが「詳しく調べたい」と思える採用サイトを設計します。" },
                { req: "「社員インタビューを撮影から依頼したい」", res: "インタビュー企画・取材日程調整・プロカメラマン手配・ライティングまで一貫して対応します。求職者の心を動かすインタビューには「質問設計」が最も重要です。お任せいただければ安心して進められます。" },
                { req: "「コーポレートサイトに採用ページを追加したい」", res: "既存コーポレートサイトのデザイントーンを維持しながら、採用に特化したコンテンツページを追加設計します。社員インタビュー・募集要項・応募フォームを含む採用セクションを構築します。" },
                { req: "「採用サイトの離脱率が高く応募につながらない」", res: "GA4・ヒートマップによる既存採用サイトの分析から始め、離脱ページ・ボトルネックを特定します。コンテンツ改善・CTA配置変更・フォームUI改善など、データに基づいた改善施策を優先度順に提案します。" },
                { req: "「複数拠点・複数職種の採用を一元化したい」", res: "職種別・拠点別のページ設計を行い、求職者が自分に関係する情報に最短でたどり着けるナビゲーション設計とURL設計を行います。各ページのSEO設定も職種・拠点ごとに最適化します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.req}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.res}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16" style={{ background: "#0d1b2a" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#c4b89a" }}>Free Consultation</p>
            <h2 className="font-black mb-6" style={{ fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              採用サイト制作のご相談は無料です
            </h2>
            <p className="text-[15px] leading-[1.9] mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              採用課題・現在の媒体依存状況・採用目標をお聞かせください。採用サイトの設計から公開後の運用改善まで一貫してサポートします。
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 font-bold text-[14px] tracking-wide"
              style={{ background: "#0F172A", color: "#FFFFFF", border: "1px solid rgba(196,184,154,0.4)" }}
            >
              無料相談を申し込む
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} heading="採用サイト制作についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="採用サイト制作のご相談"
          body="求職者の共感と応募意欲を高める採用サイトの設計・制作をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
