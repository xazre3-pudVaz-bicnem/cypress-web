import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "整体院・接骨院・整骨院のWeb集客｜MEO対策・SNS運用で新規患者を増やす｜株式会社サイプレス",
  description: "整体院・接骨院・整骨院向けのWeb集客支援。Googleマップ上位表示（MEO）・SNS運用・ホームページ制作で新規患者来院とリピーター定着を実現します。医療広告ガイドライン対応。",
  keywords: ["整体院 MEO対策", "接骨院 集客", "整骨院 Googleマップ", "整体院 ホームページ", "接骨院 SNS"],
  openGraph: {
    title: "整体院・接骨院・整骨院のWeb集客｜MEO対策・SNS運用で新規患者を増やす｜株式会社サイプレス",
    description: "整体院・接骨院・整骨院向けWeb集客。MEO・SNS・ホームページで新規患者獲得とリピーター定着を支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/osteopathic" },
};

const faqItems = [
  {
    q: "整体院のMEO対策はどのくらいで効果が出ますか？",
    a: "一般的に2〜4ヶ月で順位変動が見られます。Googleビジネスプロフィールの写真充実・口コミ獲得・定期投稿を並行して進めることで改善スピードが上がります。競合の少ないエリアでは1〜2ヶ月で3位以内に入るケースもあります。",
  },
  {
    q: "接骨院・整骨院は医療広告ガイドラインに注意が必要ですか？",
    a: "はい。保険適用に関する誇大表現・症状の治癒を断言する表現・比較優良広告は規制対象となります。サイプレスではガイドラインを遵守しながらMEO・ホームページを最適化します。事前確認を徹底してコンプライアンスリスクを回避します。",
  },
  {
    q: "整体院のGoogleマップ口コミを増やすにはどうすればいいですか？",
    a: "施術後にQRコードや紙のカードでGoogleの口コミリンクを提示する方法が最も効果的です。LINE公式アカウントを持っている場合は、施術後のフォローメッセージに口コミリンクを添付する方法もおすすめです。来店から1〜2日以内の依頼が最もコンバージョン率が高くなります。",
  },
  {
    q: "ホットペッパービューティーに掲載しているのに別途Web集客が必要ですか？",
    a: "はい。ホットペッパーはプラットフォーム内の集客に限定されます。GoogleマップのMEO対策は「整体院 〇〇駅近く」「腰痛 接骨院 葛飾区」といった能動的な検索に対応でき、プラットフォーム依存からの脱却にもつながります。",
  },
  {
    q: "整体院のSNS（Instagram・X）運用は効果がありますか？",
    a: "姿勢改善のビフォーアフター・ストレッチ動画・体の悩みに関する解説コンテンツはエンゲージメントが高く、新規患者の来院動機になります。ただし、医療的効能の誇大表現は避け、教育的コンテンツとして発信することが重要です。",
  },
  {
    q: "整体院のホームページは必要ですか？",
    a: "はい。Googleビジネスプロフィールのリンク先としてホームページは必須です。施術内容・料金・アクセス・施術者プロフィール・お客様の声を掲載したサイトがあることで、問い合わせ・予約率が大幅に向上します。",
  },
  {
    q: "複数店舗を運営していますが、各店舗別に対応できますか？",
    a: "はい。各店舗ごとにGoogleビジネスプロフィールを設定・最適化し、エリアごとのMEO対策を実施します。複数店舗の場合は拠点ごとに異なる地域・キーワードを狙うことで全店舗の集客を効率的に強化できます。",
  },
  {
    q: "自費診療と保険診療の両方を告知する際の注意点は？",
    a: "保険診療では柔道整復師法・あんまマッサージ指圧師法等の規制があります。自費診療はより自由に告知できますが、医療広告ガイドラインの範囲内で行う必要があります。具体的な適応症状の断定的な記載は避け、「対応可能なお悩み」という表現を推奨します。",
  },
  {
    q: "症状別のランディングページは整体院の集客に有効ですか？",
    a: "非常に有効です。「腰痛専門ページ」「肩こり・頭痛の施術ページ」「産後ケアページ」など症状別のページを作成することで、特定の悩みを持つユーザーの検索に対応できます。各ページのSEO最適化と合わせて、悩み別の問い合わせ獲得経路を複数構築します。",
  },
  {
    q: "整体院・接骨院でLINE公式アカウントを活用するメリットは？",
    a: "LINE公式アカウントは次回予約のリマインド・施術後のフォローメッセージ・口コミ依頼・健康情報の定期配信に活用できます。患者さんとの継続的な接点を持つことでキャンセル率の低下・リピート率の向上・紹介の増加につながります。",
  },
  {
    q: "整体院・整骨院・接骨院の違いをWebで正しく説明する方法は？",
    a: "整体院は民間資格・国家資格問わず運営でき、自費診療のみが対象です。接骨院・整骨院は柔道整復師の国家資格が必要で、保険適用（療養費）が可能です。ホームページの「よくある質問」や院のご案内ページに違いをわかりやすく記載することで、患者の不安解消と信頼獲得につながります。",
  },
  {
    q: "保険診療と自費治療で集客の訴求方法は変わりますか？",
    a: "はい。保険診療はキーワードに「保険適用」「交通事故」「労災」などを含めた検索への対応が効果的です。自費診療は「根本改善」「姿勢矯正」「予防ケア」などの価値訴求が有効です。GBPのサービス項目・ホームページのメニューページで両者を明確に分けて案内することで、異なる検索意図のユーザーを両方獲得できます。",
  },
  {
    q: "スポーツ外傷の専門化でキーワードを絞る集客はできますか？",
    a: "はい。「スポーツ外傷 整骨院 ○○区」「ランナー 膝 整体」「野球肘 接骨院」など専門性の高いキーワードは競合が少なく、特定ニーズのユーザーを効率的に獲得できます。GBPの特徴欄・ホームページのスポーツ外傷専門ページ・SNSでのスポーツ向けコンテンツ発信を組み合わせることで、専門院としてのポジションを確立します。",
  },
  {
    q: "問診票のデジタル化は集客にどう関係しますか？",
    a: "問診票のデジタル化（Googleフォーム・専用システム）は来院前の情報収集を効率化するだけでなく、「初診でも来やすい・手続きが楽」という印象を与えてホームページからの予約率向上に貢献します。QRコードでアクセスできる問診フォームのリンクをGBPや予約確認メールに組み込む設計を推奨します。",
  },
  {
    q: "患者の口コミ獲得に医療広告ガイドライン上の注意点はありますか？",
    a: "口コミの投稿を依頼すること自体は問題ありませんが、謝礼・特典と引き換えに高評価口コミを依頼することは景品表示法・ガイドライン違反となります。口コミ返礼の表現にも注意が必要で、「良い口コミをくれた方にプレゼント」という誘導は避けてください。施術後に自然なタイミングで口コミリンクを案内する方法が適切です。",
  },
  {
    q: "整体院のGoogleビジネスプロフィール投稿はどんな内容がいいですか？",
    a: "「腰痛ケアのポイント」「猫背改善のセルフストレッチ」など患者に役立つ健康情報の投稿がエンゲージメントを高めます。施術メニューの紹介・キャンペーン告知・季節に合わせた体の悩み（冷え・花粉症・年末の疲れなど）の関連情報も効果的です。週1〜2回の投稿を継続することで新鮮なプロフィールを維持できます。",
  },
  {
    q: "整体院の産後ケア・骨盤矯正メニューの集客方法は？",
    a: "「産後 骨盤矯正 ○○駅」「産後ケア 整体 ○○区」は検索ボリュームが高く、専門ページを作成するだけで問い合わせが増えやすいキーワードです。GBPのサービス項目に産後ケアを明記し、InstagramではBeforeAfter姿勢写真・産後ケアQ&A動画を発信することで、産後ママへのリーチを強化できます。",
  },
  {
    q: "整体院・接骨院のホームページで患者の不安を解消するコンテンツは？",
    a: "「初めての方へ」ページで施術の流れ・費用・服装・持ち物をわかりやすく説明することが来院ハードルを大きく下げます。施術者の顔写真・資格情報・院の内装写真・患者さんの声（氏名は任意）を掲載することで、初診患者の安心感と信頼を高められます。",
  },
  {
    q: "整骨院と整体院・カイロでGBPカテゴリはどう違いますか？",
    a: "Googleビジネスプロフィールのカテゴリ選択は検索順位に直接影響します。柔道整復師が運営する接骨院・整骨院は「接骨院」カテゴリが基本です。自費診療のみの整体院は「整体院」、カイロプラクティックは「カイロプラクター」カテゴリを選択します。メインカテゴリを最も近い業態に設定し、サブカテゴリで補完することでより広いキーワードに対応できます。カテゴリの誤設定は表示機会の損失につながるため、開業時または変更時は慎重に確認が必要です。",
  },
  {
    q: "自賠責保険対応の整骨院はWebでどう集客しますか？",
    a: "「交通事故 整骨院 葛飾区」「むちうち 接骨院 ○○駅」などのキーワードに対応したホームページのページとGBPのサービス項目を整備することが集客の基本です。自賠責対応の明記・手続きの流れの説明・初診の不安を解消するFAQを掲載することで、交通事故後のユーザーが相談しやすい環境を整えます。ただし「必ず全額補償」などの断定的表現は避け、ガイドラインに沿った説明が必要です。",
  },
  {
    q: "「○○駅 整骨院」「○○区 腰痛 整骨院」SEO攻略のポイントは？",
    a: "地域名＋業態名（整骨院・接骨院・整体院）の組み合わせと、地域名＋症状名（腰痛・肩こり・産後ケア）の組み合わせの両方のキーワードに対応するページを作成することが重要です。ホームページのタイトルタグ・見出し・本文に自然なかたちでキーワードを含め、Googleビジネスプロフィールとの一貫性を保つことでSEO・MEO双方の評価が高まります。",
  },
  {
    q: "整骨院の口コミ獲得でGoogleガイドライン上の注意点は？",
    a: "Googleのポリシーでは、金銭・特典と引き換えに口コミを依頼することは禁止されています。割引や景品と引き換えの口コミ誘導は、Googleによるプロフィール停止・口コミ削除のリスクがあります。施術後に自然なタイミングでQRカードを手渡す・LINEメッセージにリンクを添付するなど、任意の依頼として案内する方法が安全です。全口コミへの誠実な返信も評価向上に貢献します。",
  },
  {
    q: "柔道整復師・鍼灸師の資格をE-E-A-Tに活かす方法は？",
    a: "ホームページの施術者プロフィールページに柔道整復師・鍼灸師・あん摩マッサージ指圧師などの国家資格、取得年、経歴年数、専門領域を明記することがE-E-A-T（経験・専門性・権威性・信頼性）の向上につながります。GBPのオーナー情報や投稿でも資格保有を発信し、Webサイト全体で専門家としての権威性を一貫して示すことでGoogleからの信頼評価と患者の安心感の両方が高まります。",
  },
  {
    q: "整骨院のSNS（Instagram・LINE）活用で患者獲得に効果的な方法は？",
    a: "InstagramはストレッチやセルフケアのReels動画・姿勢改善ビフォーアフター・症状別Q&A投稿が効果的です。医療効能の断定は避け、教育的コンテンツとして発信することがポイントです。LINE公式アカウントでは予約リマインド・健康情報の定期配信・新メニュー告知を行い、既存患者のリピート促進に活用します。SNSとLINEは役割を分けて運用することで集客と定着の両方を強化できます。",
  },
  {
    q: "症状別ランディングページは整骨院集客に有効ですか？",
    a: "非常に有効です。「腰痛 整骨院 葛飾区」「産後 骨盤矯正 亀有」「スポーツ外傷 接骨院 ○○駅」など、症状と地域を組み合わせた検索ごとに専用ページを用意することで、特定のお悩みを持つユーザーが検索した際に上位表示されやすくなります。各ページに症状の説明・施術の流れ・料金・FAQ・予約ボタンを完備することで、流入から予約までの転換率が高まります。",
  },
  {
    q: "マッサージ・整体との違いをWebでどう伝えるか？",
    a: "接骨院・整骨院は柔道整復師の国家資格が必要で保険適用が可能、整体院は自費診療のみ、一般的なマッサージ店とは資格・施術内容・保険の取り扱いが異なります。ホームページの「院について」や「よくある質問」に違いを平易な言葉で説明するページを設けることで、初診患者の疑問を事前に解消できます。Googleの口コミにも施術内容の特性が反映されるよう、院内でのコミュニケーションも合わせて設計することが重要です。",
  },
];

const relatedLinks = [
  { href: "/cases/industry/relaxation", label: "整体・整骨院の成功事例", desc: "リラクゼーション・整体のWeb集客成功事例" },
  { href: "/industries/osteopathic/meo", label: "整体院のMEO対策", desc: "Googleマップ上位表示で新規患者獲得" },
  { href: "/industries/osteopathic/sns", label: "整体院のSNS運用", desc: "体の悩み解決コンテンツで集客" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "症状別キーワードで集客" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "整体院向けホームページ事例" },
  { href: "/seo/local-seo", label: "地域SEO対策", desc: "地域名キーワードで検索上位を狙う" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "症状別コンテンツで長期集客" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金プランと相場の解説" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリアのWeb集客" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/industries/clinic", label: "クリニック・医療機関", desc: "医療施設のWeb集客" },
  { href: "/industries/pet-shop", label: "ペットショップ向けサービス", desc: "ペット業種の集客事例" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着型集客の考え方" },
  { href: "/knowledge/content-seo", label: "コンテンツSEOの基礎", desc: "検索で選ばれるコンテンツ設計" },
  { href: "/knowledge/eeat", label: "E-E-A-Tとは", desc: "専門性・権威性・信頼性のWeb活用" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "SNS運用代行の詳細" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "整体院向けサイト制作" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "患者リピート促進・リマインド配信" },
  { href: "/meo/clinic-meo", label: "クリニック・医療系MEO", desc: "医療機関のGBP最適化" },
  { href: "/sns/google-business-profile", label: "GBP活用ガイド", desc: "Googleビジネスプロフィールの運用方法" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/contact", label: "無料相談", desc: "整体院・接骨院のWeb集客相談" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function OsteopathicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>整体院・接骨院</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Osteopathic Clinic</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              整体院・接骨院・整骨院のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              整体院・接骨院は「腰痛」「肩こり」「〇〇駅 整体」などの症状・地域名でGoogleマップ検索されることが多く、MEO対策が特に有効です。新規患者獲得からリピーター定着まで、医療広告ガイドラインに配慮しながら総合的に支援します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              「院名で検索しても出てこない」「Googleマップで競合整体院の下に表示されている」「新規患者が紹介以外で増えない」—これらのお悩みを持つ整体院・接骨院・整骨院の集客改善を専門的に支援します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月19日 09_05_31 (8).jpg" alt="整体院・整骨院のMEO対策と地域集客支援イメージ" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              整体院・接骨院向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/osteopathic/meo",
                  label: "整体院・接骨院のMEO対策",
                  desc: "「腰痛 整体 〇〇区」「肩こり 整骨院 〇〇駅」などでGoogleマップ上位表示を実現。新規患者の来院数を増やします。",
                },
                {
                  href: "/industries/osteopathic/sns",
                  label: "整体院・接骨院のSNS運用",
                  desc: "体の悩み解決コンテンツ・ストレッチ動画・ビフォーアフターでSNS集客を強化します。医療広告ガイドライン対応。",
                },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "28px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "12px" }}>詳細を見る →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why MEO Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              整体院・接骨院にMEO対策が特に有効な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "症状名＋地域名での検索が最も多い",
                  b: "「腰痛 整体 葛飾区」「肩こり 整骨院 亀有」のように症状と地域を組み合わせて検索するユーザーは来院意欲が高く、Googleマップ上位表示による集客効果が大きいです。",
                },
                {
                  n: "02",
                  t: "近接エリアの競合が少ない場合が多い",
                  b: "大手チェーンと比べると個人院・地域密着型の整体院は競合数が少ない傾向があり、正しいMEO対策をすれば上位表示が比較的早期に実現できます。",
                },
                {
                  n: "03",
                  t: "口コミが信頼構築に直結する業種",
                  b: "施術の効果・施術者の人柄・清潔感などをGoogle口コミで確認してから予約するユーザーが多く、口コミ数と評価点がそのまま来院数に反映されます。",
                },
                {
                  n: "04",
                  t: "ホットペッパー依存からの脱却",
                  b: "ポータルサイトへの掲載費・手数料を削減し、自社のGoogleマップ・ホームページ経由の直接予約を増やすことで収益性を改善できます。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              整体院・接骨院が抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "保険適用の説明が不十分で患者の不安が解消されていない", b: "「保険は使えるの？」「自費と保険はどう違う？」という疑問はほぼすべての新規患者が持っています。ホームページとGBPに保険適用の可否・適用条件・自費メニューとの違いをわかりやすく掲載することで問い合わせ前の疑問を解消し、予約のハードルを下げます。" },
                { n: "02", t: "口コミが少なく競合院との差別化ができていない", b: "Googleマップで整体院を比較する患者は口コミの数と内容を最初に確認します。口コミが少ない・または古い院は信頼性が劣って見えます。施術後の口コミ依頼フロー（QRカード・LINE送付）を整備し、継続的に口コミを獲得する仕組みを構築することが集客の土台になります。" },
                { n: "03", t: "症状別のコンテンツが不足し検索流入が少ない", b: "「腰痛 整体」「肩こり 治療 ○○区」「産後 骨盤矯正 ○○駅」など症状・部位・地域を組み合わせた検索への対応が不十分だと、SEO経由の問い合わせを取り逃します。症状別のサービスページ・お悩み解説コンテンツを整備することで、多様な検索に対応した集客経路を作ります。" },
                { n: "04", t: "地域に競合院が増え差別化が難しくなっている", b: "整体院・整骨院は競合数が多く、立地だけでの差別化は困難です。「得意とする症状」「施術者の資格・経歴」「施術方針」「院の雰囲気」など、他院との違いを明確にWebで発信することが選ばれる理由をつくります。GBPの院内写真・施術者紹介・特色の言語化が重要です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Our Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスの整体院・接骨院向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO対策", desc: "「腰痛 整体 ○○区」「肩こり 整骨院 ○○駅」でGoogleマップ上位表示を実現します。GBPの写真・サービス情報の整備・口コミ獲得・定期投稿を継続運用し、地域の新規患者獲得を強化します。" },
                { label: "症状別SEO対策", desc: "「産後 骨盤矯正 ○○市」「慢性腰痛 整体 費用 ○○区」など症状×地域キーワードに対応したサービスページ・コンテンツを制作します。医療広告ガイドラインを遵守した表現で安全に集客します。" },
                { label: "ホームページ制作", desc: "施術内容・料金・アクセス・施術者プロフィール・お客様の声・予約フォームを備えたホームページを制作します。初めての患者が安心して予約できる情報設計と導線を優先します。" },
                { label: "口コミ管理支援", desc: "施術後のGoogleマップ口コミ獲得フロー（QRカード設計・LINE送付文面作成）を構築します。全口コミへの返信文面の作成代行も対応し、高評価の維持と信頼性の継続的な向上を支援します。" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#0d1b2a", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.8" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "40px", maxWidth: "640px" }}>
              整体院・接骨院のWeb集客は「信頼の土台づくり → 検索露出の拡大 → 患者関係の維持」の3フェーズで進めます。各ステップを順番に整えることで、紹介に頼らない自走型の集客体制が完成します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Googleビジネスプロフィール（GBP）の初期整備（整骨院・接骨院カテゴリ）",
                  b: "院名・住所・電話番号・営業時間・カテゴリ（整体院 / 接骨院 / 整骨院）を正確に設定します。カテゴリの誤設定は検索機会の損失に直結するため、業態に最も近いカテゴリを慎重に選択します。",
                },
                {
                  n: "02",
                  t: "自賠責対応・保険診療の明記",
                  b: "GBPのサービス項目と説明文に自賠責保険対応・保険診療の可否を明記します。「交通事故 整骨院」「むちうち 接骨院」の検索ユーザーは来院意欲が高く、保険対応の明確な記載が問い合わせを増やします。",
                },
                {
                  n: "03",
                  t: "院内写真・施術者写真・外観写真のGBP登録",
                  b: "院の清潔感・施術者の人柄・院内の雰囲気が伝わる写真を10枚以上登録します。写真の質が来院前のファーストインプレッションを決定し、クリック率と来院率に大きく影響します。",
                },
                {
                  n: "04",
                  t: "ホームページの治療内容・施術者プロフィール整備",
                  b: "施術メニュー・料金・施術者の国家資格・経歴・対応症状を詳細に掲載します。柔道整復師・鍼灸師の資格情報はE-E-A-T向上にも直結し、SEOと患者の信頼獲得の両面で重要です。",
                },
                {
                  n: "05",
                  t: "症状別ページのSEO設計と制作",
                  b: "「腰痛改善」「肩こり・頭痛」「産後骨盤矯正」「スポーツ外傷」など症状別のページを作成します。各ページが「症状名＋地域名」の検索に対応することで、多様なキーワードからの流入経路を複数確保できます。",
                },
                {
                  n: "06",
                  t: "LINEで予約・リマインド機能の設定",
                  b: "LINE公式アカウントを開設し、来院患者に登録を案内します。予約リマインドの自動配信・施術後フォローメッセージ・健康情報の定期配信を設定し、患者との継続的な接点を構築します。",
                },
                {
                  n: "07",
                  t: "口コミ獲得フローの構築",
                  b: "施術後にGoogleマップ口コミQRカードを手渡す流れを整備します。LINE経由でのフォローメッセージにも口コミリンクを組み込み、来院後1〜2日以内の依頼で獲得率を高めます。謝礼との引き換えは行わず、ガイドラインに沿った自然な依頼を徹底します。",
                },
                {
                  n: "08",
                  t: "症状コラム・健康情報コンテンツの定期発信",
                  b: "「腰痛の原因と予防」「産後の骨盤ケア」「ランナー膝のセルフケア」など患者に役立つコンテンツを継続的に発信します。専門性の高いコラムは検索流入とE-E-A-T向上の両方に貢献します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>KPI Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "40px", maxWidth: "640px" }}>
              整体院・接骨院のWeb集客では、施策ごとに異なる指標を追うことが重要です。以下のKPIを定期的に確認することで、改善ポイントを明確にし、投資対効果を可視化します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  kpi: "GBP問い合わせ数・電話タップ数",
                  where: "Googleビジネスプロフィール インサイト",
                  desc: "Googleマップ経由でウェブサイトをクリックしたり電話タップしたりしたユーザー数。MEO対策の成果を直接示す指標で、毎月の変化を記録します。",
                },
                {
                  kpi: "Web予約数・問い合わせフォーム送信数",
                  where: "Google Analytics / フォーム管理ツール",
                  desc: "ウェブサイト経由の予約・問い合わせ数。症状別ページごとのCVRを追うことで、どのページが集客に貢献しているかを把握し、改善優先順位を決定できます。",
                },
                {
                  kpi: "症状別ページの検索順位",
                  where: "Google Search Console",
                  desc: "「腰痛 整体 葛飾区」「産後 骨盤矯正 亀有」など主要キーワードの検索順位を月次で追います。順位上昇が流入数増加・問い合わせ増加につながります。",
                },
                {
                  kpi: "新患数・月次来院者数",
                  where: "院内の予約台帳・受付システム",
                  desc: "月ごとの新規患者数を記録し、Web集客強化前後での変化を比較します。Web経由・口コミ経由・紹介経由の内訳を把握することで各施策の貢献度を評価できます。",
                },
                {
                  kpi: "Google口コミ数・平均評価点",
                  where: "Googleビジネスプロフィール",
                  desc: "口コミ総数と平均評価を毎月記録します。口コミが増えると検索順位の安定と新規患者の来院決断率の向上につながります。返信率も合わせて管理します。",
                },
                {
                  kpi: "LINE友だち登録数・リピート率",
                  where: "LINE公式アカウント管理画面 / 院内データ",
                  desc: "LINE登録者数の推移と、LINE経由で再来院した患者の割合を確認します。リマインド配信・フォローメッセージの効果測定に使います。",
                },
                {
                  kpi: "リピート率（再来院率）",
                  where: "院内の予約管理システム",
                  desc: "初診患者が2回目以降も来院する割合。LINE施策・フォローアップの効果を測る指標で、リピート率の向上が収益の安定と口コミ増加につながります。",
                },
              ].map((item) => (
                <div key={item.kpi} style={{ padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>計測場所：{item.where}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                {
                  n: "01",
                  t: "医療広告ガイドラインを遵守した安全な集客設計",
                  b: "整体院・接骨院・整骨院のWeb集客は、一般業種と異なり医療広告ガイドライン・景品表示法・柔道整復師法等に配慮した表現設計が必要です。サイプレスはコンプライアンスリスクを理解した上でホームページ・GBP・SNSの文言を設計し、安全かつ効果的な集客を実現します。",
                },
                {
                  n: "02",
                  t: "症状別キーワード戦略と地域MEOの一体設計",
                  b: "「腰痛」「肩こり」「産後ケア」などの症状別SEOとGoogleマップのMEO対策を別々に考えるのではなく、患者の検索行動に合わせて一体設計することで集客経路を最大化します。症状×地域のキーワードマトリクスを整理した上で施策を組み立てます。",
                },
                {
                  n: "03",
                  t: "口コミ獲得から返信まで一貫したレピュテーション管理",
                  b: "口コミ獲得フロー（QRカード・LINE案内）の構築から、全口コミへの返信文面作成代行まで対応します。院の評判をWebで正しく管理することが、Googleマップ順位の安定と患者の来院決断率向上につながります。",
                },
                {
                  n: "04",
                  t: "葛飾区・東京東部エリアの地域集客に精通",
                  b: "東京都葛飾区に拠点を置くサイプレスは、葛飾区・江戸川区・足立区など東京東部エリアの地域特性・競合状況を把握した上でMEO・SEO設計が可能です。「○○駅 整体」で地域の患者に選ばれる院になるための地域密着型支援を提供します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.25)" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px", letterSpacing: "0.15em" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 料金の目安・相談の流れ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Pricing & Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              料金の目安と相談の流れ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "40px", maxWidth: "640px" }}>
              サイプレスの整体院・接骨院向け支援は、集客課題・院の規模・予算に合わせてプランをカスタマイズしています。医療広告ガイドラインへの配慮も含めてご提案します。まずは無料相談からお気軽にご連絡ください。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  label: "MEO対策（GBP運用）",
                  price: "月額 2〜4万円〜",
                  desc: "Googleビジネスプロフィールの初期整備・定期投稿・口コミ管理・インサイト分析・競合モニタリングを含むMEO継続支援プランです。",
                },
                {
                  label: "症状別SEO対策・コンテンツ制作",
                  price: "月額 3〜8万円〜",
                  desc: "症状×地域キーワードに対応したサービスページ・コラムコンテンツの企画・制作・改善を継続的に行うSEOプランです。医療広告ガイドライン対応を含みます。",
                },
                {
                  label: "ホームページ制作",
                  price: "30〜80万円〜（プランによる）",
                  desc: "施術内容・料金・施術者プロフィール・予約フォームを備えた整体院・接骨院向けホームページ制作プランです。SEO対策・症状別ページ制作を含みます。",
                },
                {
                  label: "LINE公式アカウント構築・運用",
                  price: "初期設定 5万円〜 / 月額運用 1〜3万円〜",
                  desc: "LINE公式アカウントの開設・自動返信・予約リマインド・健康情報配信の設計と運用代行プランです。患者のリピート率向上を目的とした設計を行います。",
                },
                {
                  label: "MEO＋SEO＋LINE 統合プラン",
                  price: "月額 6〜12万円〜（要相談）",
                  desc: "MEO対策・症状別SEO・LINE運用を一括で対応する統合プランです。施策間の連携を最大化し、新患獲得からリピーター定着までを一貫して支援します。",
                },
              ].map((item) => (
                <div key={item.label} style={{ padding: "20px 0", borderTop: "1px solid #e8e4dc", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.label}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>{item.price}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#ffffff", padding: "14px 32px", fontSize: "13px", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textDecoration: "none" }}>
                無料相談はこちら →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="整体院・接骨院のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="整体院・接骨院のWeb集客ご相談"
          body="MEO対策・SNS運用・ホームページ制作で新規患者来院とリピーター定着を実現します。医療広告ガイドライン対応のコンプライアンス配慮も含めてご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
