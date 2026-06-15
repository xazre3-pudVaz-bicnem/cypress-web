import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO対策サービス｜検索流入を増やしてCV・売上につなげるSEO支援｜株式会社サイプレス",
  description:
    "株式会社サイプレスのSEO対策サービス。キーワード調査・コンテンツSEO・テクニカルSEO・内部SEO・ローカルSEOを一貫してご支援。検索流入を増やし問い合わせ・売上につなげます。東京都葛飾区を拠点に全国対応。",
  keywords: ["SEO対策サービス", "SEO会社", "検索上位表示", "SEOコンサルティング", "コンテンツSEO", "東京 SEO", "SEO支援"],
  openGraph: {
    title: "SEO対策サービス｜検索流入を増やしてCV・売上につなげるSEO支援｜株式会社サイプレス",
    description: "サイプレスのSEO対策サービス。キーワード調査からコンテンツ制作・テクニカル対応まで一貫支援。検索流入を集客・売上に転換します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/seo" },
};

const faqItems = [
  {
    q: "SEO対策の効果はいつから出ますか？",
    a: "施策の内容やサイトの状況によって異なりますが、テクニカルSEO改善は1〜3ヶ月、コンテンツSEOは3〜6ヶ月で初期成果が見え始めます。競合が強いキーワードや新規ドメインの場合は6〜12ヶ月かかることもあります。早期成果を求める場合はロングテールキーワードから始める戦略をご提案します。",
  },
  {
    q: "SEO対策はどんなサイトに向いていますか？",
    a: "検索エンジンからの継続的な流入を得たい全てのビジネスに適しています。特に地域ビジネス（整体・飲食・クリニック・リフォームなど）、BtoBサービス（IT・士業・コンサルなど）、ECサイト、情報メディアなどで高い効果が期待できます。広告費をかけずに継続的な集客基盤を作りたい方に特に向いています。",
  },
  {
    q: "自社でコンテンツを書くのが難しいのですが、代わりに書いてもらえますか？",
    a: "はい、コンテンツ制作代行プランをご用意しています。キーワード調査・構成案作成・ライティング・内部SEO最適化まで一貫して対応します。業種によっては専門家へのインタビュー取材も調整可能です。",
  },
  {
    q: "WordPressとNext.jsどちらのサイトでも対応できますか？",
    a: "はい、どちらも対応しています。WordPress・Next.js・その他CMSを問わず、SEO対策（内部SEO・コンテンツSEO・テクニカルSEO・構造化データ実装）を実施します。Next.jsサイトの場合はApp Router・metadata API・JSON-LDを活用した実装が可能です。",
  },
  {
    q: "SEO対策の費用はどのくらいかかりますか？",
    a: "診断・現状分析のみの場合は単発プランから、継続的なSEO支援の場合は月額プランをご用意しています。サイトの規模・対策範囲・現状の課題によって費用は異なりますので、まずは無料相談でご状況をお聞かせください。詳細は料金ページをご覧ください。",
  },
  {
    q: "他社でSEO対策を受けているが効果が出ていない。切り替えを相談できますか？",
    a: "はい、既存のSEO施策の現状診断から対応します。現在の順位・流入数・コンテンツ状況・技術的な問題を確認し、効果が出ていない原因を特定してから改善施策をご提案します。他社からの切り替え相談もお気軽にご連絡ください。",
  },
  {
    q: "MEO対策（Googleマップ）と一緒に依頼できますか？",
    a: "はい、SEO対策とMEO対策を一括でご支援しています。地域ビジネスの場合、Webサイトのローカルページ（エリアページ）とGoogleビジネスプロフィールの両方を最適化することで、地域名検索での露出を最大化できます。",
  },
  {
    q: "毎月どのような報告をしてもらえますか？",
    a: "月次レポートでGoogle Search ConsoleとGoogle Analyticsのデータをもとに、対策キーワードの順位変動・セッション数・コンバージョン数・実施施策・翌月の対応方針をご報告します。定例MTG（月1回）での報告も承ります。",
  },
  {
    q: "新規ドメインのサイトでもSEO対策は有効ですか？",
    a: "有効ですが、ドメイン年齢が若い場合は既存サイトより成果に時間がかかります。新規ドメインの場合はロングテールキーワードを軸にコンテンツを積み上げながら、テクニカルSEOを初期から正しく設定することが重要です。立ち上げ時からの設計支援も承っております。",
  },
  {
    q: "ブログ記事を大量に投稿していますが順位が上がりません。なぜですか？",
    a: "検索意図と一致していない記事、E-E-A-Tが不足している記事、内部リンク構造が整備されていない状態では、記事数を増やしても効果は出にくい傾向があります。まず既存コンテンツの品質診断とキーワード設計の見直しが必要です。記事の本数より品質・設計が先です。",
  },
  {
    q: "競合サイトが強くて太刀打ちできない気がします。",
    a: "競合が強いメインキーワードに真正面から挑むのではなく、まず競合の隙間にあるロングテールキーワードから流入を積み上げる戦略をご提案します。ドメイン評価を高めながら段階的に難易度の高いキーワードへ展開するロードマップを設計します。",
  },
  {
    q: "Googleアルゴリズムのアップデートで順位が下落しました。対応できますか？",
    a: "はい、コアアップデート・スパムアップデートなどの影響を受けた場合の現状診断・原因特定・回復施策をご支援します。ペナルティの種類（手動・自動）を特定し、E-E-A-T改善・コンテンツ品質向上・不自然なリンク対処などの施策を優先度順に実施します。",
  },
  {
    q: "構造化データ（JSON-LD）の実装は依頼できますか？",
    a: "はい、FAQPage・Article・LocalBusiness・Organization・BreadcrumbListなどの構造化データ実装に対応しています。リッチリザルト表示につながる実装をサイトの技術スタック（WordPress・Next.js・その他）に合わせて行います。",
  },
  {
    q: "内部リンクの最適化はどのように進めますか？",
    a: "サイト全体のページ構造をマッピングし、重要なページへの内部リンクが適切に配置されているかを診断します。孤立ページの解消・リンクアンカーテキストの最適化・サイロ構造の設計など、Googleがサイト構造を正しく評価できる内部リンク設計を実施します。",
  },
  {
    q: "ページ速度の改善（Core Web Vitals）も対応していますか？",
    a: "はい、LCP・CLS・INPの改善に対応しています。画像最適化・レンダリングブロックの解消・サーバーレスポンス速度改善・キャッシュ設定などをサイトの技術環境に合わせて実施します。パフォーマンス改善はSEOと直結するため優先度の高い施策です。",
  },
  {
    q: "サイトのリニューアル時にSEO引き継ぎをサポートしてもらえますか？",
    a: "はい、サイトリニューアル前後のSEO引き継ぎ（リダイレクト設計・URLマッピング・Search Consoleの更新・順位変動モニタリング）をサポートします。リニューアルによる順位下落を最小化するための事前設計と事後モニタリングを一貫して行います。",
  },
  {
    q: "AIO対策（AI検索対策）はSEOと同時に依頼できますか？",
    a: "はい、SEO対策とAIO対策を同時にご支援しています。E-E-A-T強化・構造化データ実装・権威あるコンテンツの制作はSEOとAIOの両方に共通する施策であるため、一体的に進めることで費用対効果が高まります。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "月額プランは最低3ヶ月からのご契約をお願いしています。SEOは施策を継続することで効果が積み上がる性質のため、短期での解約は成果が出にくくなります。ご状況に合わせて柔軟にプランをご相談できますので、まずはお気軽にご連絡ください。",
  },
  {
    q: "ECサイトのSEO対策も対応していますか？",
    a: "はい、ECサイトのSEO対策（商品ページの内部SEO・カテゴリページの最適化・重複コンテンツ対策・構造化データ実装・サイト速度改善）に対応しています。Shopify・WooCommerce・独自開発のECサイトなど、プラットフォームを問わず対応可能です。",
  },
  {
    q: "SEO対策の進捗はどうやって確認できますか？",
    a: "月次レポートに加え、Google Search ConsoleとGoogle Analyticsの共有アクセスを設定し、クライアント様がいつでもデータを確認できる環境を整えます。対策キーワードの順位追跡ツールのデータも月次でご共有します。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEOの基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "SEOに強いサイト制作" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "料金プランと相場" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "記事制作と検索流入" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "Core Web Vitals改善" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域名キーワード対策" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "検索意図の分析と選定" },
  { href: "/seo/internal-linking", label: "内部リンク最適化", desc: "サイト構造の整備" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "JSON-LDとリッチリザルト" },
  { href: "/seo/e-e-a-t", label: "E-E-A-T強化", desc: "専門性・権威性・信頼性" },
  { href: "/area/tokyo", label: "東京のSEO対策", desc: "東京エリアのSEO支援" },
  { href: "/area/katsushika", label: "葛飾区のSEO対策", desc: "葛飾区エリアのSEO支援" },
  { href: "/area/adachi", label: "足立区のSEO対策", desc: "足立区エリアのSEO支援" },
  { href: "/area/edogawa", label: "江戸川区のSEO対策", desc: "江戸川区エリアのSEO支援" },
  { href: "/industries/restaurant", label: "飲食店のSEO対策", desc: "飲食業界の集客SEO" },
  { href: "/industries/beauty", label: "美容室のSEO対策", desc: "サロン向けSEO施策" },
  { href: "/industries/clinic", label: "クリニックのSEO対策", desc: "医療・歯科のSEO" },
  { href: "/industries/btob", label: "BtoBのSEO対策", desc: "法人向けSEO戦略" },
  { href: "/industries/reform", label: "リフォームのSEO対策", desc: "建設・工務店のSEO" },
  { href: "/industries/juku", label: "学習塾のSEO対策", desc: "塾・スクールのSEO" },
  { href: "/faq/seo-basics", label: "SEO対策FAQ", desc: "よくある質問まとめ" },
  { href: "/checklist/seo", label: "SEOチェックリスト", desc: "サイト診断の確認項目" },
];

export default function ServicesSeoPage() {
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
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>SEO Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO対策サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのSEO対策サービスは、キーワード調査・コンテンツSEO・テクニカルSEO・内部SEO・ローカルSEOを一貫してご支援します。広告に頼らない継続的な検索流入を積み上げ、問い合わせ・売上につながる集客の土台を構築します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              東京都葛飾区を拠点に、東京・千葉・埼玉・神奈川を中心に全国のビジネスをリモートでご支援しています。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ background: "#0F172A", color: "#FFFFFF" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/seo" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 19_19_44.png" alt="SEO対策サービス・検索上位表示・コンテンツSEOのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Overview</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "サイプレスのSEO対策サービスが具体的に何をするのか",
                "依頼前によくある課題と、その原因・解決の方向性",
                "業種ごとのSEO支援のポイントと優先施策",
                "問い合わせから継続運用まで10ステップの支援の流れ",
                "成果を測るために追うべきKPIと確認場所",
                "他社に頼んで効果が出なかった場合の切り替え相談の流れ",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO対策サービスの内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SEO現状診断・課題整理", body: "Google Search Console・Analyticsのデータ分析、クロール診断、コンテンツ評価、被リンクプロファイルの確認を行い、現在のSEO課題と改善優先度を整理します。既存サイトの「何が問題か」を明確にすることが成果への第一歩です。" },
                { title: "キーワード調査・戦略設計", body: "ビジネス目標から逆算し、対策すべきキーワードグループを選定します。検索ボリューム・競合難易度・検索意図を分析し、どのページでどのキーワードを狙うかをマッピングします。コンテンツカレンダーも作成します。" },
                { title: "内部SEO最適化", body: "タイトルタグ・メタディスクリプション・H1〜H3見出し・URL・内部リンク・alt属性・canonical設定を最適化します。構造化データ（JSON-LD）の実装も含みます。" },
                { title: "コンテンツSEO・記事制作", body: "検索意図に合った記事構成案の作成と、SEO記事の制作代行を行います。E-E-A-Tを高める一次情報の付与・専門的見解の追加・リライト改善まで継続的に対応します。" },
                { title: "テクニカルSEO改善", body: "Core Web Vitals（LCP・CLS・INP）の改善、ページ速度最適化、クロール最適化、インデックス管理、XMLサイトマップの整備を行います。Next.js・WordPress・その他CMSに対応します。" },
                { title: "ローカルSEO（エリアページ制作）", body: "対応エリアごとのランディングページ（エリアページ）を制作し、地域名キーワードでの上位表示を目指します。LocalBusiness構造化データの実装・Googleマップ埋め込みも含みます。" },
                { title: "効果計測・月次レポート", body: "Google Search ConsoleとAnalyticsのデータで毎月の成果を計測します。対策キーワードの順位変動・セッション数・コンバージョン数をレポートし、次月の施策方針をご提案します。" },
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

        {/* SEOをやらないリスク */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why SEO Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#ffffff", fontFamily: "var(--font-serif)" }}>
              SEO対策をしないと続く4つの機会損失
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {[
                { n: "01", t: "検索で競合に差をつけられ続ける", b: "検索上位に表示された競合が毎月無料で集客している間、自社は広告費を払い続けるか機会を失い続ける。SEOは「やらない」ではなく「後回しにしたほど差がつく」施策です。" },
                { n: "02", t: "広告依存から抜け出せない", b: "SEOによる自然検索流入がないと、Web集客はすべて広告費に依存。広告を止めれば集客もゼロになる不安定な構造が続きます。SEOは一度積み上げれば資産になります。" },
                { n: "03", t: "ブランドの信頼性・権威性が築けない", b: "Googleに「専門性が高い・信頼できる」と評価されるサイトは、AI検索（AIO）でも引用されやすくなります。SEO対策はAIO対策にも直結します。" },
                { n: "04", t: "サイトへの流入が伸びず成長が止まる", b: "WebサイトはSEO対策なしでは「誰にも見られない名刺」です。適切な対策で検索流入が増えれば、問い合わせ数・売上・採用応募数のすべてが向上します。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <span style={{ color: "#c4b89a", fontSize: "22px", fontWeight: 700, display: "block", marginBottom: "12px" }}>{item.n}</span>
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
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              SEO支援のご依頼前によくお聞きする課題とその背景をまとめました。当てはまる項目が多い場合は、現状診断からご相談ください。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "Googleでほぼ表示されない", body: "インデックスされているページ数が少なく、主要なキーワードで自社サイトが表示されない状態。クロール設定のミスやnoindex設定の誤りが原因であるケースも多く、技術的な診断が必要です。" },
                { title: "問い合わせが検索から来ない", body: "流入はあるのに問い合わせにつながらない場合、キーワードと検索意図のズレ・ランディングページのCV設計不足・CTAの弱さが原因であることが多い。流入の質とページ品質を同時に改善する必要があります。" },
                { title: "何から始めればいいか分からない", body: "SEOに取り組みたいが優先順位が見えないまま手が止まっている状態。まず現状診断でサイトの課題を洗い出し、費用対効果の高い施策から着手することが最短ルートです。" },
                { title: "過去にSEO業者に頼んで成果なし", body: "報告書は届くが順位・流入数に変化がなかった、または施策内容が不透明だったというケース。施策の中身・計測方法・担当者のコミュニケーション品質を再評価し、やり直しから対応します。" },
                { title: "ブログを書いているが効果なし", body: "キーワード設計なしに記事を量産しても検索流入はほぼ増えません。検索意図に対応した記事構成と、既存記事のリライトによる質の底上げが先決です。" },
                { title: "競合が上位を独占している", body: "同エリア・同業種の競合サイトが主要キーワードを独占している場合、まず競合分析でその要因を特定します。コンテンツ量・被リンク・ドメイン年齢など差の原因を把握し、突破口となるキーワードを選定します。" },
                { title: "自社ページのインデックスが少ない", body: "サイト内のページがGoogleにインデックスされていないと、コンテンツをいくら作っても検索結果に表示されません。クロール予算の設計・サイトマップ整備・内部リンク改善によってインデックス率を改善します。" },
                { title: "対策ページが絞れていない", body: "すべてのページで同じキーワードを狙っていたり、どのページで何を訴求するか設計がないケース。キーワードマッピングで各ページの役割と対策キーワードを明確に分担することが必要です。" },
                { title: "内部リンクがバラバラ", body: "重要なページへの内部リンクが少なく、Googleが評価を集中させられていない状態。サイト構造の見直しと内部リンク設計によって、重要ページへの評価集中を図ります。" },
                { title: "テクニカルSEOの知識がない", body: "Core Web Vitals・XMLサイトマップ・canonical・robots.txt・構造化データなどの技術的な要素への対処が手つかずのケース。技術的な問題がある限り、コンテンツ施策の効果も出にくい状態が続きます。" },
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
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の支援ポイント
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              業種によって狙うキーワード・検索意図・競合環境は大きく異なります。各業種に特有のSEO戦略を以下にまとめました。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { industry: "飲食店・カフェ", note: "「エリア名＋ランチ」「エリア名＋カフェ おすすめ」などのローカルキーワードを狙ったエリアページ制作が中心。MEO対策との同時実施で検索面でのダブル露出を目指します。メニュー情報・予約導線・Food構造化データの実装も重要です。" },
                { industry: "美容室・サロン", note: "「エリア名＋美容室」「髪質改善＋エリア名」などのロングテールキーワードで専門性を示すコンテンツが有効。施術メニューページの充実・スタッフ紹介ページのE-E-A-T強化・Instagram連携を活かした写真SEOもポイントです。" },
                { industry: "歯科・クリニック", note: "YMYLカテゴリにあたるため、E-E-A-T（医師情報・資格・診療実績）の明示が特に重要。「エリア名＋歯科 矯正」などの施術特化ページと、患者の不安を解消するFAQコンテンツを充実させることが有効です。" },
                { industry: "士業・コンサル", note: "「問題解決型」のコンテンツSEOが核。「離婚届 書き方」「相続税 計算方法」などユーザーの具体的な悩みに答える記事が流入源になります。著者プロフィール（資格・実績）の構造化と、問い合わせページへの内部リンク設計が重要です。" },
                { industry: "建設・リフォーム", note: "「エリア名＋外壁塗装」「リフォーム 費用 相場」など地域×価格・施工実績ページが有効。施工事例ページへのSEOとGallery構造化データの実装で視覚的な信頼性も高めます。" },
                { industry: "不動産", note: "「エリア名＋賃貸」「エリア名＋マンション 売却」などの地域×サービスキーワードに加え、引越しコラム・地域情報ページで広範な流入を確保します。物件ページのインデックス管理と重複コンテンツ対策が技術的に重要です。" },
                { industry: "学習塾", note: "「エリア名＋塾」「中学受験 塾 エリア名」などのローカルキーワードに加え、学習法コラム・受験情報ページで広域流入を狙います。合格実績・カリキュラム情報の詳細な記載がE-E-A-T向上につながります。" },
                { industry: "BtoB・SaaS", note: "「課題解決型」の情報コンテンツで商品認知前の潜在顧客を獲得する戦略が効果的。ホワイトペーパー・事例紹介ページへの内部リンク設計と、問い合わせ・資料請求CVへのパス設計が重要です。ドメイン評価の構築に時間がかかるため早期着手が優位です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: ご支援の流れ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Process</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ご支援の流れ
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              無料相談から継続運用まで、10ステップで進めます。各ステップの目的と成果物を明確にしながら進行します。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "STEP 01", title: "無料相談", body: "現在のサイト状況・課題・ビジネス目標をヒアリングします。相談時間は約30〜60分。Zoom・Google Meetでのオンライン対応が基本です。" },
                { step: "STEP 02", title: "現状診断・競合調査", body: "Google Search Console・Analytics・クロールツールを使って現状のSEO課題を洗い出します。競合サイトの構成・流入キーワード・ドメイン評価も同時に分析します。" },
                { step: "STEP 03", title: "キーワード戦略策定", body: "ビジネス目標と現状のギャップから、優先的に対策するキーワードグループを選定します。検索意図・ボリューム・難易度を整理したキーワードマップを納品します。" },
                { step: "STEP 04", title: "サイト構造設計", body: "キーワードマップに基づいて、どのページで何を狙うかのページ構造を設計します。新規ページの追加・既存ページのリライト方針・内部リンク設計を明確にします。" },
                { step: "STEP 05", title: "コンテンツ制作", body: "検索意図に合った記事構成案を作成し、SEO最適化されたコンテンツを制作します。E-E-A-Tを高める著者情報・一次情報・専門的見解を盛り込みます。" },
                { step: "STEP 06", title: "内部SEO実装", body: "タイトルタグ・メタディスクリプション・見出し構造・内部リンク・alt属性・canonical・構造化データ（JSON-LD）をサイト全体に適用します。" },
                { step: "STEP 07", title: "テクニカルSEO改善", body: "Core Web Vitals（LCP・CLS・INP）の改善、クロール最適化、XMLサイトマップ整備、robots.txt設定、インデックス管理を実施します。" },
                { step: "STEP 08", title: "Search Console設定", body: "Google Search Consoleの設定確認・サイトマップ送信・インデックスリクエスト・エラー修正を行い、Googleのクロール・評価が正常に機能する状態を整えます。" },
                { step: "STEP 09", title: "月次レポート・改善提案", body: "毎月のキーワード順位・流入数・コンバージョン数を計測し、翌月の施策方針をレポートします。必要に応じてMTGで内容を共有します。" },
                { step: "STEP 10", title: "継続的な効果測定", body: "検索トレンド・Googleアルゴリズムの変動・競合の動向を継続的にモニタリングし、施策を柔軟に調整しながら長期的な流入増加を目指します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[11px] font-semibold shrink-0 mt-1 px-2 py-1 whitespace-nowrap" style={{ background: "#c4b89a", color: "#FFFFFF", letterSpacing: "0.1em" }}>{item.step}</span>
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              SEO対策の効果を正しく評価するために、以下のKPIを月次でモニタリングします。数値の変化を継続的に追うことで、施策の精度を高めていきます。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "オーガニック流入数", where: "Google Analytics（参照元：オーガニック検索）", note: "SEO施策の根幹となる指標。月次・前年比で推移を追います。流入増加が確認できればコンテンツ施策が機能しているサインです。" },
                { kpi: "主要キーワード順位", where: "Google Search Console／順位追跡ツール", note: "対策キーワードの検索順位を月次で追跡します。10位以内→5位以内→3位以内と段階的な改善を目標に設定します。" },
                { kpi: "インデックスページ数", where: "Google Search Console（インデックスカバレッジ）", note: "サイト内でGoogleにインデックスされているページ数。インデックスが増えるほど多くのキーワードで表示される可能性が広がります。" },
                { kpi: "クリック率（CTR）", where: "Google Search Console（検索パフォーマンス）", note: "検索結果に表示された回数に対してクリックされた割合。タイトル・メタディスクリプションの最適化でCTRを改善できます。" },
                { kpi: "コンバージョン数", where: "Google Analytics（目標設定・コンバージョン）", note: "問い合わせ・予約・購入など最終的なビジネス成果の数。流入が増えてもCVが増えなければLPやCTA設計の見直しが必要です。" },
                { kpi: "ページ速度スコア", where: "Google PageSpeed Insights／Chrome UX Report", note: "Core Web Vitals（LCP・CLS・INP）のスコアを計測します。特にLCP 2.5秒以内・CLS 0.1以下を目標に改善します。" },
                { kpi: "被リンク数", where: "Google Search Console（リンク）／Ahrefs等", note: "外部サイトからの被リンク数とドメイン評価の推移を追います。質の高い被リンクはドメイン評価の向上に直結します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] mb-2 font-medium" style={{ color: "#c4b89a" }}>確認場所：{item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種・エリア */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industries & Areas</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              対応業種・エリア
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl">
              <div>
                <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a" }}>対応業種</p>
                <div className="flex flex-wrap gap-2">
                  {["飲食店", "美容室・サロン", "整体・治療院", "クリニック・医院", "リフォーム", "建設・工務店", "不動産", "法律・会計事務所", "学習塾・スクール", "ペットショップ", "EC・ネットショップ", "BtoBサービス"].map((ind) => (
                    <span key={ind} className="px-3 py-1.5 text-[12px] rounded" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", color: "#374151" }}>{ind}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a" }}>対応エリア</p>
                <div className="flex flex-wrap gap-2">
                  {["東京都（全域）", "葛飾区", "足立区", "江戸川区", "墨田区", "千葉県", "埼玉県", "神奈川県", "全国（リモート対応）"].map((area) => (
                    <span key={area} className="px-3 py-1.5 text-[12px] rounded" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", color: "#374151" }}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SEO対策サービスについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SEO対策サービスの無料相談"
          body="現在のサイトの状況をお聞きし、最適なSEO戦略をご提案します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
