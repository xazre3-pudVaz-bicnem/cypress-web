import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SEO対策サービス｜検索上位表示を目指すWebマーケティング支援｜株式会社サイプレス",
  description:
    "株式会社サイプレスのSEO対策サービス。キーワード調査・コンテンツSEO・テクニカルSEO・内部SEO・ローカルSEOを一貫してご支援。東京都葛飾区を拠点に全国対応。",
  keywords: ["SEO対策サービス", "SEO会社", "検索上位表示", "SEOコンサルティング", "コンテンツSEO", "東京 SEO"],
  openGraph: {
    title: "SEO対策サービス｜検索上位表示を目指すWebマーケティング支援｜株式会社サイプレス",
    description: "サイプレスのSEO対策サービス。キーワード調査からコンテンツ制作・テクニカル対応まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/seo" },
};

const faqItems = [
  {
    q: "SEO対策の効果はいつから出ますか？",
    a: "施策の内容やサイトの状況によって異なりますが、一般的にテクニカルSEO改善は1〜3ヶ月、コンテンツSEOは3〜6ヶ月で初期成果が見え始めます。競合が強いキーワードや新規ドメインの場合は6〜12ヶ月かかることもあります。早期成果を求める場合はロングテールキーワードから始める戦略をご提案します。",
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
  { href: "/area/tokyo", label: "東京のSEO対策", desc: "東京エリアのSEO支援" },
  { href: "/area/katsushika", label: "葛飾区のSEO対策", desc: "葛飾区エリアのSEO支援" },
  { href: "/industries/restaurant", label: "飲食店のSEO対策", desc: "飲食業界の集客SEO" },
  { href: "/faq/seo-basics", label: "SEO対策FAQ", desc: "よくある質問まとめ" },
];

export default function ServicesSeoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>SEO Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SEO対策サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのSEO対策サービスは、キーワード調査・コンテンツSEO・テクニカルSEO・内部SEO・ローカルSEOを一貫してご支援します。広告に頼らない継続的な検索流入を積み上げ、集客の土台を構築します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              東京都葛飾区を拠点に、東京・千葉・埼玉・神奈川を中心に全国のビジネスをリモートでご支援しています。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/seo" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 19_19_44.png" alt="SEO対策サービス・検索上位表示・コンテンツSEOのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Why SEO Matters</p>
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
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "22px", fontWeight: 700, display: "block", marginBottom: "12px" }}>{item.n}</span>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#ffffff" }}>{item.t}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.75)" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO効果が出る仕組み */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>How SEO Works</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのSEO対策で成果が出る仕組み
            </h2>
            <div className="max-w-4xl">
              {[
                { step: "STEP 01", t: "現状診断・課題の特定", b: "Google Search Console・Analyticsのデータ、クロール診断、被リンク分析から現在の課題を特定します。「何をすべきか」の優先順位を明確にすることが出発点です。" },
                { step: "STEP 02", t: "キーワード設計・コンテンツ計画", b: "ビジネス目標に直結するキーワードグループを選定。検索意図・ボリューム・競合難易度を分析し、どのページで何を狙うかのコンテンツマップを作成します。" },
                { step: "STEP 03", t: "内部SEO・テクニカル改善", b: "メタデータ最適化・構造化データ実装・Core Web Vitals改善・クロール最適化など、サイトの技術的な評価を高めます。" },
                { step: "STEP 04", t: "コンテンツ制作・E-E-A-T強化", b: "検索意図に沿った高品質な記事制作。著者情報・専門知識・一次情報の付与でE-E-A-Tを高め、AI検索（AIO）での引用にも対応します。" },
                { step: "STEP 05", t: "効果計測・継続改善", b: "月次レポートで順位変動・流入数・CV数を確認。検索トレンド・競合の動向を踏まえて施策を継続改善します。" },
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

        {/* 業種・エリア */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
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
                    <span key={ind} className="px-3 py-1.5 text-[12px] rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC", color: "#374151" }}>{ind}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-bold text-[14px] mb-3" style={{ color: "#0d1b2a" }}>対応エリア</p>
                <div className="flex flex-wrap gap-2">
                  {["東京都（全域）", "葛飾区", "足立区", "江戸川区", "墨田区", "千葉県", "埼玉県", "神奈川県", "全国（リモート対応）"].map((area) => (
                    <span key={area} className="px-3 py-1.5 text-[12px] rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC", color: "#374151" }}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SEO対策サービスについてよくある質問" bgColor="#F9F8F5" />
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
