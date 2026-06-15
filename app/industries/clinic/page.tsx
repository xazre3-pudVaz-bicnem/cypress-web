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
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/meo/clinic-meo", label: "医療クリニックのMEO対策", desc: "Googleマップ上位表示で新患獲得" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/industries/restaurant", label: "飲食店の集客", desc: "飲食店のWebマーケティング" },
  { href: "/industries/hair-salon", label: "美容室の集客", desc: "ヘアサロンの集客支援" },
  { href: "/web-design", label: "ホームページ制作", desc: "クリニック向けサイト制作" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
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
              医療機関のWebマーケティングは、医療広告ガイドラインへの対応が不可欠です。「No.1」「治る」「絶対」といった表現は禁止されており、ガイドラインを理解した上での設計が必要です。サイプレスは医療業界の規制を理解し、ガイドライン準拠で最大限の集患効果を発揮するWebマーケティングを支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              クリニック・歯科医院・整骨院・整体院・鍼灸院・皮膚科・眼科など、医療・治療系業種全般のWeb集客に対応しています。開業前の準備段階から、既存院の集患強化まで幅広く支援します。
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
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LocalBusiness SchemaとMedicalClinic Schemaを実装することで、Googleの検索結果に診療時間・診療科目・口コミ評価が表示されやすくなります。BreadcrumbList・FAQPage Schemaも実装し、検索結果でのリッチスニペット表示を促進します。
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

        <FaqSection items={faqItems} heading="クリニック・整骨院のWeb集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="クリニック・医療機関のWeb集客ご相談"
          body="クリニック・歯科医院・整骨院・整形外科のMEO対策・ホームページ制作・SEO対策をご相談ください。医療広告ガイドラインに準拠した集客支援を提供します。"
        />
      </main>
      <Footer />
    </>
  );
}
