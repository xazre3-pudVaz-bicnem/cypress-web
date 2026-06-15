import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【クリニック・整骨院のMEO・Web集客】医療広告ガイドライン対応の新患獲得｜株式会社サイプレス",
  description: "クリニック・歯科・整骨院のWeb集客。Googleマップ上位表示・患者向けホームページ・予約導線・医療SEO・口コミ管理で新患獲得を支援。医療広告ガイドライン対応。",
  keywords: ["クリニック MEO対策", "整骨院 集客", "歯科 ホームページ", "医療 SEO", "クリニック 新患獲得", "医療広告 ガイドライン"],
  openGraph: {
    title: "【クリニック・整骨院のMEO・Web集客】医療広告ガイドライン対応の新患獲得｜株式会社サイプレス",
    description: "クリニック・歯科・整骨院のWeb集客。MEO・ホームページ・医療SEOで新患獲得を支援します。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/clinic" },
};

const faqItems = [
  {
    q: "クリニックのMEO対策はどのくらいで効果が出ますか？",
    a: "Googleビジネスプロフィールの最適化・写真投稿・口コミ増加を継続すると、早ければ1〜2か月、通常3〜6か月でGoogleマップの順位向上が見られます。競合クリニックの状況によって異なりますが、まず基本情報の完全整備から着手することで早期の改善が期待できます。",
  },
  {
    q: "医療機関のWebサイトには薬機法・医療広告ガイドラインの制約がありますか？",
    a: "はい。医療広告ガイドラインにより「治った」「最高の治療」などの表現・未承認医薬品の記載・比較優良広告は禁止されています。サイプレスでは制作時に医療広告ガイドラインを確認した上でコンテンツを設計します。ガイドライン違反にならない範囲で最大限の訴求力を持たせたサイトを構築します。",
  },
  {
    q: "クリニックのホームページに予約システムは必要ですか？",
    a: "はい。24時間対応のオンライン予約は新患獲得に非常に効果的です。電話予約の負荷軽減にもなります。LINEミニアプリ・EPARK・自社予約システムなど複数の選択肢があり、クリニックの診療科目・規模に合わせて最適なシステムをご提案します。",
  },
  {
    q: "Googleクチコミ管理はどのようにすればいいですか？",
    a: "不当な口コミはGoogleビジネスプロフィールから削除申請が可能です。患者満足度の高い診療後に口コミ投稿を促すフロー（QRコード・カード配布）を整備することで、良好な評判を維持できます。全件返信することが信頼性向上につながります。",
  },
  {
    q: "SEO対策でクリニックが狙うべきキーワードは？",
    a: "「○○市 歯科」「○○区 内科」などの地域名+診療科目が主要キーワードです。症状系（「腰痛 整骨院 ○○」）・施術名（「矯正歯科 ○○駅」）・「○○ クリニック 初診 予約」なども重要です。患者が検索する段階に合わせてキーワードを設計します。",
  },
  {
    q: "クリニックのSNS（Instagram）活用は効果がありますか？",
    a: "医療機関のSNSは健康情報の発信・院内の雰囲気紹介・スタッフ紹介に向いています。治療効果の誇大表現は避け、患者教育コンテンツ（正しい歯磨き方法・腰痛予防ストレッチ等）として発信することでエンゲージメントを高めつつ医療広告ガイドラインを遵守できます。",
  },
  {
    q: "患者のオンライン予約率を上げるにはどうすればいいですか？",
    a: "ホームページのわかりやすい場所（ファーストビュー・固定ヘッダー）に予約ボタンを設置し、クリック数を最小化する設計が重要です。LINEからの予約・電話予約の両方を提供することで予約の機会損失を防ぎます。スマートフォンでの操作性を最優先に設計します。",
  },
  {
    q: "開業前のクリニックでもWeb集客の準備はできますか？",
    a: "開業の3〜6ヶ月前からGoogleビジネスプロフィールの設定・ホームページの制作・地域SEO対策を開始することを推奨します。開業時点でGoogleマップに表示された状態にしておくことで、開業初月から新患獲得を開始できます。開業前からの認知活動が初月の集患に大きく影響します。",
  },
  {
    q: "整骨院と鍼灸院で集客の方法は違いますか？",
    a: "基本的な集客手法（MEO・ホームページ・口コミ管理）は共通ですが、ターゲットキーワードと訴求ポイントが異なります。整骨院は「腰痛」「肩こり」「スポーツ障害」などの症状キーワードが有効で、鍼灸院は「不妊治療 鍼灸」「自律神経 鍼灸」など特化した症状での差別化が効果的です。",
  },
  {
    q: "複数院を運営している場合、Webマーケティングはどう設計すればいいですか？",
    a: "各院ごとにGoogleビジネスプロフィールを最適化し、院ごとの特徴・診療科目・アクセスを独立して管理することが基本です。複数院の場合はブランド統一感を保ちながら、各院の独自性（院長の専門・得意分野・設備）を前面に出した設計を推奨します。",
  },
  {
    q: "医療広告ガイドラインとWeb集客をどう両立するか教えてください。",
    a: "医療広告ガイドラインで禁止されているのは「最高」「絶対」「治る」などの誇大表現・未承認医薬品の効能記載・比較優良広告などです。一方、医師の資格・経歴・専門分野の明示、診療科目と対応症状の正確な説明、院内設備の紹介、患者教育コンテンツの発信は適切な範囲で認められています。ガイドライン準拠の枠内で専門性とE-E-A-Tを最大限アピールすることが重要です。",
  },
  {
    q: "クリニックのGoogleビジネスプロフィールのカテゴリ設定はどうすればいいですか？",
    a: "メインカテゴリはできる限り具体的に設定します。「内科」「歯科医師」「整形外科」「皮膚科医」「鍼灸師」など診療科目に直結するカテゴリを選択します。追加カテゴリには「医療センター」や関連する施術カテゴリを設定し、検索で表示される機会を広げます。カテゴリの正確な設定がMEO上位表示の基盤です。",
  },
  {
    q: "患者口コミのGoogleガイドライン上の扱いと注意点は何ですか？",
    a: "Googleのポリシー上、金品・割引などの見返りを提供しての口コミ依頼は禁止されています。また家族や知人に投稿を依頼する行為・特定内容を指示して書かせることも問題があります。診療後の自然な満足体験を踏まえてQRコードを渡し、投稿するかどうかを患者の判断に委ねるアプローチが適切です。不当な口コミはGoogleへの削除申請ができますが、審査が通るとは限りません。誠実な全件返信で対外的な信頼性を高めることが最も有効な対策です。",
  },
  {
    q: "美容クリニックと保険診療クリニックでは集客の方法は違いますか？",
    a: "美容クリニックは自由診療のため、施術メニュー・価格・症例写真（規制に準拠した範囲）の掲載が重要で、InstagramなどSNSの活用も有効です。保険診療クリニックは地域密着のMEO対策・アクセス情報・診療時間の充実が重視されます。また美容クリニックは医療広告ガイドラインにおける症例写真の掲載条件（患者の同意・費用と副作用の明記等）を特に厳守する必要があります。",
  },
  {
    q: "オンライン診療への集客はどのように行えばよいですか？",
    a: "オンライン診療は「○○ オンライン診療」「○○ 診察 自宅」などのキーワードでのSEO・MEO対策が有効です。ホームページには対応疾患・予約方法・使用するツール（Zoom等）・費用・処方薬の受け取り方法を明確に記載し、初診患者の不安を解消するコンテンツを充実させます。LINEやスマートフォンから簡単に予約できる導線設計が特に重要です。",
  },
  {
    q: "クリニックのSNS発信で医療広告上注意すべき表現は何ですか？",
    a: "SNSも医療広告ガイドラインの規制対象です。「施術後の感想・体験談の掲載」「治癒率や有効率の数値表示」「比較優良的な表現（他院より優れている等）」「未承認医薬品・機器の効能を示す情報」は禁止されています。患者の自然な感想であってもビフォーアフター形式で掲載するには条件があります。発信前にガイドラインとの整合性を確認することが不可欠です。",
  },
  {
    q: "内科・皮膚科・整形外科など診療科によってSEOキーワードは違いますか？",
    a: "はい、診療科ごとに患者が検索するキーワードは大きく異なります。内科は「発熱」「健康診断」「風邪」、皮膚科は「ニキビ治療」「アトピー」「巻き爪」、整形外科は「腰痛」「膝の痛み」「骨折後のリハビリ」などが代表的なキーワードです。診療科目と対応症状を掛け合わせたページ設計が、各科の集患に直結します。",
  },
  {
    q: "医師紹介ページでE-E-A-Tを強化するにはどうすればいいですか？",
    a: "E-E-A-T（経験・専門性・権威性・信頼性）を高めるためには、院長・医師の顔写真・プロフィール・卒業大学・専門医資格・学会所属・研究実績・診療方針を詳しく掲載することが重要です。「なぜこの医療を選んだか」という院長の想いや、患者への診療方針を文章で伝えることで、単なる資格羅列より深い信頼感を生みます。Schema.orgのMedicalClinicやPhysicianの構造化データを実装することで、AI検索・Google検索での引用可能性も高まります。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/meo/clinic-meo", label: "医療クリニックのMEO対策", desc: "Googleマップ上位表示で新患獲得" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で新患獲得" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "クリニック向けホームページ制作" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "Schema.orgで検索リッチ表示" },
  { href: "/aio/organization-data", label: "AIO・組織情報最適化", desc: "AI検索からの引用を増やす" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO対策の費用相場" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/industries/osteopathic", label: "整骨院・接骨院の集客", desc: "整骨院のWebマーケティング" },
  { href: "/knowledge/eeat", label: "E-E-A-Tとは", desc: "Googleが重視する信頼性の指標" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着集客の完全ガイド" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食店のWebマーケティング" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "ヘアサロンの集客支援" },
  { href: "/web-design", label: "ホームページ制作", desc: "クリニック向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/seo/content-seo", label: "コンテンツSEOとは", desc: "患者教育記事でSEO効果を高める" },
];

export default function ClinicIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "クリニック・整骨院のWeb集客", "item": "https://www.cypress-all.co.jp/industries/clinic" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>クリニック・整骨院</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Medical Clinic
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              クリニック・整骨院の<br />MEO対策・Web集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              医療機関のWeb集客は、患者が安心して受診を決断できる信頼構築が最優先です。「○○区 内科」「○○駅 歯科」という地域密着の検索でGoogleマップに表示され、ホームページで診療内容・院内の雰囲気・医師のプロフィールを伝えることが新患獲得の基本です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              医療機関のWebマーケティングは、医療広告ガイドライン・薬機法・景品表示法の規制に同時に対応する必要があります。「No.1」「治る」「絶対」といった表現は禁止されており、患者の体験談・ビフォーアフター写真の掲載にも厳格な条件があります。サイプレスは医療業界の規制を正確に理解した上で、ガイドライン準拠で最大限の集患効果を発揮するWebマーケティングを支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              クリニック・歯科医院・整骨院・整体院・鍼灸院・皮膚科・眼科など、医療・治療系業種全般のWeb集客に対応しています。開業前の準備段階から、既存院の集患強化まで幅広く支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              サイプレス（株式会社サイプレス、葛飾区白鳥4-6-1-623）は東京東部エリアを中心に、医療機関のWeb集客を支援しています。葛飾区・足立区・江戸川区・墨田区の各エリアへの訪問相談にも対応しており、地域の医療機関が抱える集患課題を現場目線で解決します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (3).png"
            alt="歯科クリニックの診察風景"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              クリニック・整骨院が抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "医療広告ガイドライン対応への不安がWebマーケティングを後手に回している", b: "「何がOKで何がNGかわからない」という不安から、ホームページの更新・SNS発信・口コミ対策が後回しになるケースが多くあります。ガイドラインの正確な理解がないと、必要以上に情報発信を控えてしまい、集患機会を逃します。" },
                { n: "02", t: "口コミ管理の難しさから対応が遅れている", b: "医療機関への口コミは非常にセンシティブです。悪意ある口コミへの対応方法・削除申請の手順・正当な返信の書き方がわからず、ネガティブ口コミが放置されて新患獲得の障壁になっているケースがあります。" },
                { n: "03", t: "新患獲得が停滞し、既存患者のリピートに依存している", b: "開業から数年経過すると、口コミ紹介や既存患者の定期通院に依存した状態になりがちです。Googleマップ経由の新患獲得ができていない場合、競合クリニックの開業によって患者が流出するリスクがあります。" },
                { n: "04", t: "予約システムとGBPの連動が未実施で機会損失が発生している", b: "Googleビジネスプロフィールから直接予約できない状態では、検索してくれた患者が電話を探す手間を惜しんで他院を選ぶことがあります。GBPと予約システムの連動により、検索→予約の流れをスムーズにすることが新患獲得に直結します。" },
                { n: "05", t: "院内写真・設備紹介が不足し患者の不安が解消されていない", b: "特に歯科・整骨院では「どんな雰囲気の院か」「どんな設備があるか」が受診決定に影響します。院内写真・設備紹介・スタッフ写真が不足しているホームページは、来院前の不安を解消できず離脱につながります。" },
                { n: "06", t: "患者教育コンテンツが不足し専門性の訴求ができていない", b: "「正しい歯の磨き方」「腰痛を予防するストレッチ」「生活習慣病の予防法」など、患者に有益な情報を発信するコンテンツが不足していると、SEO評価も下がり専門性の証明ができません。E-E-A-T（経験・専門性・権威性・信頼性）の観点で重要な要素です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO・MEO戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SEO Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              クリニック・整骨院のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                医療機関のSEO対策では、医療広告ガイドラインに沿ったキーワード設計と、E-E-A-T（経験・専門性・権威性・信頼性）を意識したコンテンツ作成が重要です。主要キーワード例：「葛飾区 整骨院」「亀有 歯科」「金町 内科 予約」「葛飾区 鍼灸院 腰痛」。これらの地域名+診療科目キーワードでGoogleマップ上位表示と自社サイトの検索上位を同時に目指します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                症状系キーワードも重要です。「肩こり 整骨院 葛飾区」「歯痛 急患 葛飾区」「腰痛 矯正 亀有」など、患者が症状で検索するキーワードに対応したページを作成します。これらのページは患者教育コンテンツとしても機能し、ガイドライン準拠で専門性を訴求できます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                LocalBusiness SchemaとMedicalClinic Schemaを実装することで、Googleの検索結果に診療時間・診療科目・口コミ評価が表示されやすくなります。BreadcrumbList・FAQPage Schemaも実装し、検索結果でのリッチスニペット表示を促進します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                医療機関はGoogleのYMYL（Your Money Your Life）領域に分類されるため、E-E-A-Tの充実が特に重要です。医師・スタッフの資格・学会所属・研究歴などの権威性情報と、患者に有益な正確な医療情報の継続発信がSEO評価を高めます。ChatGPT・Gemini・Perplexityなど生成AI検索からの引用も増やすAIO対策として、Organization SchemaとPhysician Schemaの実装も推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              クリニック・整骨院のGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                医療機関のGBPでは「診療時間」「診療科目」「対応可能な症状・施術」を正確かつ詳細に入力することが最優先です。祝日診療・臨時休診の情報は即座に更新し、患者が来院して無駄足を踏むことのないよう情報の正確性を維持します。特に歯科・整骨院では「初診歓迎」「急患対応可」「予約なし可」などの属性設定が新患獲得に効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                口コミ返信は個人情報の保護に配慮しながら全件行います。「○○様、先日はご来院ありがとうございました」という形で患者個人を特定する情報は含めず、誠実な返信を行います。口コミ獲得のフロー設計では、診療後の満足度が高いタイミングにQRコードを活用した口コミ依頼を行います。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBP投稿（週2回）では、医療広告ガイドラインに沿った内容を発信します。「今月のお知らせ」「健康情報」「スタッフ紹介」「設備紹介」など、患者に有益で誇大表現のない内容を継続的に投稿することで、Googleからの評価を高めながら患者との接点を維持します。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Content Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              クリニック・整骨院のSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                医療機関のInstagramは「患者教育コンテンツ」として活用するのが最も効果的です。「正しい姿勢のとり方」「自宅でできる肩こり解消ストレッチ」「虫歯を予防する食べ方のコツ」など、日常生活で役立つ健康情報をわかりやすいビジュアルで発信します。治療効果の誇大表現・Before/After写真（規制対象）は避け、患者の生活に寄り添うコンテンツを継続投稿します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                ブログ記事（患者教育コンテンツ）はSEO対策と専門性の証明を兼ねる最重要コンテンツです。「腰痛の原因と整骨院での治療法」「矯正歯科の種類と費用の目安」「不眠と自律神経の関係」など、患者が治療前に調べる情報を専門家の視点で丁寧に解説します。これらのコンテンツはGoogleの医療・健康情報の品質評価基準（E-E-A-T）を満たすことが重要です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LINE公式アカウントは既存患者とのコミュニケーション・予約リマインド・健康情報配信に活用します。「次回の検診日が近づいています」「季節の変わり目の体調管理情報」「院からのお知らせ」を定期配信することで、受診周期を維持し患者のリピート率を高めます。予約受付もLINEで行えるようにすることで、電話対応の負担軽減にもなります。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              クリニック・整骨院向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "医療広告ガイドライン対応のSEO・SNS設計", b: "医療広告ガイドラインを正確に理解した上で、ガイドライン準拠かつ最大限の集患効果を発揮するSEO戦略・SNSコンテンツ設計を行います。違反リスクゼロで専門性を訴求します。" },
                { t: "GBP最適化・口コミ返信テンプレート作成", b: "診療科目・対応症状・設備・写真・営業時間を完全整備したGBP最適化を実施。個人情報保護に配慮した口コミ返信テンプレートを作成し、全件返信体制を整備します。" },
                { t: "LocalBusiness+MedicalClinic Schema実装", b: "LocalBusinessとMedicalClinic Schemaを実装し、検索結果に診療時間・診療科目・評価が表示されやすくする構造化データを設計。FAQPage Schemaも実装します。" },
                { t: "患者教育コンテンツ・医療SEOブログ制作", b: "E-E-A-Tを意識した患者教育コンテンツ（症状説明・治療法解説・健康Tips）をブログ形式で制作。ガイドライン遵守・専門性訴求・SEO効果の三つを同時に実現します。" },
                { t: "予約システム連携・UX改善", b: "EPARK・LINEミニアプリ・Googleカレンダー連携などの予約システムとホームページ・GBPを連動設定します。ファーストビューへの予約ボタン設置・スマートフォン操作性の最適化でCV率を改善します。" },
                { t: "医師紹介ページのE-E-A-T強化", b: "院長・医師の顔写真・プロフィール・卒業大学・専門医資格・学会所属・研究実績・診療方針を構造化して掲載。Schema.orgのPhysician構造化データを実装し、AI検索・Google検索での引用可能性を高めます。" },
                { t: "開業前からのWeb集客準備支援", b: "開業3〜6か月前からGBP設定・ドメイン取得・ホームページ制作・地域SEO対策を開始します。開業初月から新患獲得を開始できる状態を整え、開業前の認知活動が初月の集患に大きく影響します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Webサイトの作り方 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Web Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              クリニック・整骨院の選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                医療機関のWebサイトは「清潔感」「安心感」「専門性」の三要素を視覚的に表現することが重要です。メインビジュアルには明るく清潔な院内写真・笑顔のスタッフ写真を使用し、「ここに来れば安心」という第一印象を作ります。色彩は白・水色・ライトグレーを基調とし、医療機関らしい信頼感を演出します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                必須コンテンツは「院長・スタッフプロフィール（顔写真・資格・経歴）」「診療科目・対応症状の一覧」「設備・機器の紹介」「アクセス・駐車場情報」「よくある質問」「オンライン予約フォーム」です。これらをスマートフォンで迷わず探せる情報設計で配置します。予約ボタンはヘッダー固定で常時表示し、来院決断のタイミングを逃しません。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                症状別ページ（「腰痛の治療」「肩こりの原因と対策」など）・診療科目別ページ・地域名を含んだページを独立して作成することで、複数のキーワードでの検索流入を獲得します。医療広告ガイドラインに沿ったコンテンツ設計により、違反リスクなく最大限の集患効果を発揮する設計を行います。
              </p>
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              クリニック・整骨院の集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              医療機関のWeb集客は、土台づくりから運用改善まで段階的に実装することで効果が積み上がります。GBP設定（医療カテゴリの正確な選択）から始まり、医療広告審査への対応・ホームページSEO・診療科別ランディングページ・予約システム連携・口コミ獲得・コンテンツSEOまで、以下の順序で取り組むことで無駄なく新患獲得の仕組みを構築できます。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "Googleビジネスプロフィール（GBP）の完全整備", b: "診療科目・診療時間・対応症状・院内写真・外観写真を正確かつ詳細に設定します。カテゴリは「内科」「歯科医師」など診療科に直結するものを選択し、GBPを新患獲得の起点として整備します。医療カテゴリの正確な選択がMEO上位表示の基盤となります。" },
                { n: "02", t: "医療広告ガイドライン審査・コンテンツ方針の確立", b: "ホームページ・SNS・GBP投稿に使用するすべてのコンテンツについて、医療広告ガイドラインとの整合性を確認します。「何がOKで何がNGか」の判断基準を院内で共有し、ガイドライン準拠を前提とした情報発信体制を整えます。" },
                { n: "03", t: "クリニック向けホームページの構築・リニューアル", b: "スマートフォンファーストで院内写真・医師プロフィール・診療メニュー・アクセス情報・予約ボタンを配置します。医療広告ガイドラインに準拠したコンテンツ設計を最初の段階で確立します。" },
                { n: "04", t: "診療科別ランディングページの作成", b: "「○○区 内科」「○○駅 歯科 矯正」「○○市 皮膚科 ニキビ」など、診療科目別・症状別のランディングページを個別に作成します。それぞれのページで異なる検索意図に対応し、複数の流入経路を構築します。" },
                { n: "05", t: "LocalBusiness・MedicalClinic Schema実装と予約システム連動", b: "構造化データを実装し、検索結果に診療時間・診療科目・口コミ評価が表示されやすくします。同時にオンライン予約システム（EPARK・LINEミニアプリ・自社システム等）をGBPの予約リンクと連動させ、検索から来院までの離脱を防ぎます。" },
                { n: "06", t: "口コミ獲得フローの整備とGoogleガイドライン遵守体制", b: "診療後に患者へQRコード付きカードを渡し口コミ投稿を依頼するフローを整備します。Googleポリシー・医療倫理に準拠した方法で口コミを増やし、個人情報保護に配慮した全件返信体制を構築します。" },
                { n: "07", t: "患者教育コンテンツSEO（症状・治療法の解説記事）", b: "月2〜4本のペースで患者教育ブログ記事を制作します。「腰痛の原因と治療」「正しい歯磨きの方法」「ニキビ治療の種類と費用」など、患者が治療前に検索する情報を医療広告ガイドライン準拠で専門家として解説します。E-E-A-T強化にも直結します。" },
                { n: "08", t: "Instagram・LINE公式アカウントの運用開始", b: "Instagramは週2〜3回の患者教育コンテンツを投稿し、LINE公式アカウントで既存患者への健康情報・予約リマインドを配信します。SNS運用は医療広告ガイドラインに沿った内容に徹し、誇大表現・症例写真の無断掲載は行いません。" },
                { n: "09", t: "GBP投稿の継続運用と写真の定期更新", b: "週2回のGBP投稿（健康情報・院内のお知らせ・スタッフ紹介）を継続し、診療写真・院内写真を定期的に追加します。情報の鮮度がGoogleからの評価に直結するため、継続的な更新が重要です。" },
                { n: "10", t: "月次レポート分析とコンテンツ改善サイクル", b: "Google Search Console・GBPインサイト・予約システムのデータを月次で分析し、検索流入・予約率・新患数の推移を把握します。データに基づいてコンテンツの追加・改善を継続的に行い、集患の仕組みを育てます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", flexShrink: 0, paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 成果を測るKPI */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>KPI Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              クリニック・整骨院のWeb集客では、GBPからの問い合わせ・電話数・WEB予約数・診療科別キーワード順位・口コミ評価と件数・新患数・再診率・ページセッション数を月次でモニタリングすることで、施策の効果を定量的に把握し改善につなげます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "8px" }}>
              開業初年度は「GBPインプレッション増加」「口コミ件数の推移」を重点KPIとし、2年目以降はSEO流入・コンテンツ資産の蓄積・再診率の改善へとKPIの重心を移していくことが、医療機関のWeb集客において長期的な成果に結びつきます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              KPIは施策別に分けて評価することが重要です。GBPインサイトはMEO施策の効果を、Google Search ConsoleはSEO施策の効果を、GA4はサイト全体のCV改善を把握するツールとして使い分けます。月次レポートでこれらのデータを一元化し、次月の優先施策を決定するPDCAサイクルを回します。
            </p>
            <div style={{ display: "grid", gap: "1px", background: "#E8E4DC", maxWidth: "760px" }}>
              {[
                { name: "GBPからの問い合わせ数・電話タップ数", where: "GBPインサイト", desc: "Googleマップから実際に問い合わせ・電話した患者数を測定します。電話タップ数は即時の来院意向を示す最重要指標で、MEO施策の直接的な成果を表します。" },
                { name: "WEB予約完了数・予約率", where: "予約システム管理画面", desc: "ホームページ・GBP経由のオンライン予約数と予約率を計測します。予約ボタンの配置・予約フローの設計改善によるCV率向上を月次で確認します。" },
                { name: "診療科別キーワードの検索順位", where: "Google Search Console", desc: "「○○区 内科」「○○駅 歯科」「○○市 整骨院 腰痛」などの主要キーワードでの掲載順位を毎月追跡します。順位の推移がSEO施策の効果を直接示します。" },
                { name: "Googleクチコミ件数・平均評価点", where: "GBPインサイト", desc: "口コミ獲得フローの効果と患者満足度を把握します。件数の増加ペースと評価点（4.0以上維持が目標）がMEO上位表示と患者信頼の基盤となります。" },
                { name: "Googleマップ表示回数（インプレッション）", where: "GBPインサイト", desc: "「○○区 内科」などの検索でGBPが表示された回数。MEO施策の土台効果を測る指標です。インプレッション増加が電話・予約増加の前段階として重要です。" },
                { name: "新患数・再診率（月次）", where: "院内患者管理システム", desc: "Web集客施策の最終成果指標です。新患数の増加傾向と再診率を合わせて評価することで、Webマーケティングが患者獲得と定着の両面に寄与しているかを判断します。" },
                { name: "ホームページ総セッション数・新規ユーザー比率", where: "GA4", desc: "SEO・MEO・SNSからの流入を合算したサイト全体のアクセス状況を把握します。新規ユーザー比率が高いほど新患獲得につながる潜在患者への接触が増えていることを示します。" },
                { name: "患者教育ブログの検索流入・上位キーワード数", where: "Google Search Console", desc: "コンテンツSEOの成果を測ります。症状・治療法解説記事が検索上位に表示されることで、治療前段階の患者を自院サイトに引き込む経路を拡大できます。" },
              ].map((item) => (
                <div key={item.name} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", background: "#ffffff" }}>
                  <div style={{ padding: "20px 24px", borderRight: "1px solid #E8E4DC" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.name}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em" }}>{item.where}</p>
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 診療科別・業態別の集客特性 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>By Specialty</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>
              診療科別・業態別の集客特性
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              内科・歯科・整形外科・皮膚科・眼科・整骨院・鍼灸院それぞれで、患者の検索行動・有効な施策・注意すべき規制が異なります。診療科の特性に合わせた設計が集患効果を最大化します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", maxWidth: "960px" }}>
              {[
                {
                  label: "内科・小児科",
                  points: "「発熱外来」「健康診断」「予防接種」など季節需要のあるキーワードが有効です。ファミリー層には「小児科 土曜診療」「予防接種 予約不要」など利便性を訴求したキーワードが効果的。GBPには対応症状・アレルギー科・訪問診療の有無を詳細に記載します。",
                },
                {
                  label: "歯科・矯正歯科",
                  points: "「インビザライン」「セラミック」「ホワイトニング」などの施術名キーワードが有効です。保険診療と自由診療の両方で検索されるため、施術別のページを分けた設計が重要です。症例写真は医療広告ガイドラインの条件（患者同意・費用・リスク明記）を満たして掲載します。",
                },
                {
                  label: "整形外科・リハビリ科",
                  points: "「腰痛」「膝痛」「骨折後のリハビリ」など症状系キーワードへの対応が重要です。リハビリ施設の設備紹介・リハビリ専門スタッフの資格を詳しく掲載することで、術後患者・高齢患者層への訴求力が高まります。",
                },
                {
                  label: "皮膚科・美容皮膚科",
                  points: "「ニキビ治療」「アトピー」「巻き爪」「AGA」など症状・施術ごとのページ設計が不可欠です。美容皮膚科は自由診療のためInstagram活用・施術価格の明示が集客を左右します。医療広告ガイドライン上の症例写真の掲載条件を厳守します。",
                },
                {
                  label: "整骨院・接骨院",
                  points: "保険適用の施術（急性外傷・骨折等）と自費施術を明確に区別した情報掲載が必要です。「交通事故治療」「スポーツ障害」「産後骨盤矯正」など特化キーワードでの差別化が有効で、施術後の口コミ獲得が信頼形成の鍵です。",
                },
                {
                  label: "鍼灸院・整体院",
                  points: "「不妊治療 鍼灸」「自律神経 鍼」「頭痛 整体」など症状特化の専門性アピールが差別化につながります。保険適用外のため費用と効果の説明コンテンツが重要で、施術方針・院長の経歴・資格をE-E-A-Tを意識して詳しく掲載します。",
                },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid #E8E4DC", borderRadius: "8px", padding: "28px 24px", background: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "12px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gap: "32px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "960px" }}>
              {[
                {
                  n: "01",
                  t: "医療広告ガイドラインへの深い理解",
                  b: "医療・治療系業種のWeb制作・マーケティングで蓄積した知見をもとに、ガイドライン準拠を前提とした設計を行います。「何がNGで何がOKか」を正確に把握した上でコンテンツを制作するため、違反リスクなく最大限の集患効果を追求できます。",
                },
                {
                  n: "02",
                  t: "SEO・MEO・ホームページ制作をワンストップで対応",
                  b: "GBP最適化・ホームページ制作・SEOコンテンツ作成・SNS運用をワンチームで担当します。施策が分断されずに連携するため、新患獲得の導線が統一された一貫性のあるWebマーケティングを実現します。",
                },
                {
                  n: "03",
                  t: "地域密着の集客ノウハウと東京エリアの対応実績",
                  b: "葛飾区・足立区・江戸川区など東京東部エリアを中心に、地域密着型クリニックの集客支援を行ってきた経験があります。地域特性に合わせたキーワード設計と、地域顧客に響くコンテンツ制作が強みです。",
                },
                {
                  n: "04",
                  t: "データドリブンな改善サイクルの提供",
                  b: "GBPインサイト・Google Search Console・GA4のデータを月次でレポートし、施策の効果を可視化します。数値に基づいた改善提案を継続的に行うことで、集患の仕組みを育て続けるパートナーとして機能します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "32px", border: "1px solid rgba(196,184,154,0.25)", background: "rgba(255,255,255,0.03)" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", marginBottom: "12px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", marginBottom: "14px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 医療機関のWeb集客チェックリスト */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Checklist</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>
              クリニック・整骨院のWeb集客チェックリスト
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              以下の項目を自院のWebマーケティングと照らし合わせて、未対応の施策を特定してください。対応できていない項目が多いほど、改善による集患増加のポテンシャルがあります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "40px" }}>
              特にGBP・ホームページ・SEOコンテンツの3領域は、医療機関の集患において相互に影響し合います。どれか一つだけを対策するより、3領域を連動させて取り組むことで相乗効果が生まれます。サイプレスでは現状のチェックリスト診断から始め、優先度の高い施策から段階的に実装するアプローチを取ります。
            </p>
            <div style={{ maxWidth: "720px", display: "grid", gap: "0" }}>
              {[
                { cat: "GBP基本設定", items: ["診療科目・診療時間・対応症状が正確に入力されている", "院内・外観・スタッフ写真が20枚以上登録されている", "診療科に直結するカテゴリが設定されている", "GBPと予約システムが連動し直接予約ができる", "口コミへの全件返信を実施している"] },
                { cat: "ホームページ", items: ["スマートフォンで快適に閲覧でき予約ボタンが目立つ", "院長・スタッフの顔写真・資格・経歴が掲載されている", "診療科目別・症状別のページが作成されている", "医療広告ガイドラインに違反する表現がない", "構造化データ（LocalBusiness・FAQPage）が実装されている"] },
                { cat: "SEO・コンテンツ", items: ["地域名+診療科目キーワードのページが存在する", "患者教育コンテンツ（ブログ・コラム）を定期発信している", "症状別のコンテンツページが作成されている", "E-E-A-Tを意識した医師紹介ページが充実している"] },
                { cat: "SNS・LINE", items: ["Instagram・LINE公式アカウントを開設している", "医療広告ガイドラインに沿ったSNS投稿を継続している", "LINE公式で既存患者への健康情報・リマインドを配信している"] },
              ].map((group) => (
                <div key={group.cat} style={{ marginBottom: "32px" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>{group.cat}</p>
                  {group.items.map((it) => (
                    <div key={it} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 0", borderTop: "1px solid #E8E4DC" }}>
                      <span style={{ width: "18px", height: "18px", border: "1.5px solid #c4b89a", borderRadius: "3px", flexShrink: 0, marginTop: "2px", display: "inline-block" }} />
                      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.7" }}>{it}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="クリニック・整骨院のWeb集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="クリニック・医療機関のWeb集客ご相談"
          body="クリニック・歯科医院・整骨院・整形外科・皮膚科・眼科のMEO対策・ホームページ制作・SEO対策をご相談ください。医療広告ガイドラインに準拠した集客支援を、開業前から既存院の強化まで幅広く提供します。"
        />
      </main>
      <Footer />
    </>
  );
}
