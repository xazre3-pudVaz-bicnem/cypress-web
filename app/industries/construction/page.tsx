import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【建設・リフォームのSEO・MEO集客】施工事例で見積もり依頼を増やす｜株式会社サイプレス",
  description: "建設業・リフォーム会社・外壁塗装業者のWeb集客。施工事例ページ・Googleマップ上位表示・SEO対策・問い合わせ導線最適化で見積もり依頼を継続的に獲得します。",
  keywords: ["リフォーム 集客", "建設業 ホームページ", "外壁塗装 SEO", "工務店 MEO", "建設業 Web集客", "リフォーム Googleマップ"],
  openGraph: {
    title: "【建設・リフォームのSEO・MEO集客】施工事例で見積もり依頼を増やす｜株式会社サイプレス",
    description: "建設業・リフォーム会社・外壁塗装のWeb集客。施工事例・MEO・SEOで見積もり依頼を増やします。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/construction" },
};

const faqItems = [
  {
    q: "建設業・リフォーム業のMEO対策で何が重要ですか？",
    a: "Googleビジネスプロフィールのカテゴリ設定（「リフォーム会社」「外壁塗装業者」「工務店」など）・施工ビフォーアフター写真の投稿・対応エリアの明記・口コミ獲得が重要です。「○○市 外壁塗装」「○○区 リフォーム業者」などの地域+施工種別での検索上位を目指します。",
  },
  {
    q: "建設業のホームページで最も重要なコンテンツは何ですか？",
    a: "施工事例（ビフォーアフター写真・施工内容・使用素材・費用目安・お客様の声）が最も重要です。「どんな工事をしてもらえるか」「いくらかかるか」「信頼できるか」をリアルな事例で示すことで問い合わせ・見積もり依頼が増えます。施工事例は月1件以上の追加を目標にします。",
  },
  {
    q: "外壁塗装・屋根修理のリスティング広告は効果がありますか？",
    a: "リスティング広告は即効性がありますが、クリック単価が高めです。SEO・MEOと組み合わせて長期的な自然流入を増やしながら広告費を下げていく戦略が有効です。まずMEOとSEOで基盤を作り、繁忙期前後に広告を活用するサイクルが費用対効果を高めます。",
  },
  {
    q: "悪徳業者と間違われないための信頼構築策は？",
    a: "建設業許可番号の明示・代表者の顔写真と名前の掲載・施工保証内容の明記・適正価格の目安掲載・施工事例の充実が信頼構築に有効です。「会社概要ページ」に資格・許可番号・代表者メッセージを掲載することで透明性がCV率を高めます。",
  },
  {
    q: "建設業のSEO対策で狙うべきキーワードは？",
    a: "「外壁塗装 ○○市 費用」「屋根修理 ○○区 業者」「リフォーム ○○市 見積もり」など地域名+施工名+費用・業者・見積もりの組み合わせが効果的です。「外壁塗装 時期」「リフォーム 補助金」などの情報系キーワードでブログ記事を作成するのも有効です。",
  },
  {
    q: "建設業・リフォーム業はSNS集客が有効ですか？",
    a: "InstagramやYouTubeで施工事例動画を発信することは認知拡大と信頼構築に有効です。「職人の仕事ぶりを見せる」コンテンツは技術力の証明になります。ただし建設業は検討期間が長く、SNSが直接受注につながりにくい面があるため、MEO・ホームページ・施工事例を整備したうえで補足的に活用するのが現実的です。",
  },
  {
    q: "外壁塗装や屋根修理のWeb集客で気をつけることは？",
    a: "訪問営業型の悪徳業者と誤解されないよう、建設業許可番号・代表者顔写真・施工保証内容・適正価格の目安をホームページに明示することが重要です。「無料点検」「今だけ」などの煽り文句は逆効果になることもあるため、誠実な情報提供が信頼と問い合わせ率を高めます。",
  },
  {
    q: "複数エリアに対応している場合、集客設計はどうすればいいですか？",
    a: "主要対応エリアごとにエリアページ（例：葛飾区・足立区・江戸川区）を作成し、「○○区 外壁塗装」「○○市 リフォーム」などのキーワードで検索上位を目指します。MEOの対応エリア設定とSEOコンテンツを組み合わせることで複数エリアからの集客を実現します。",
  },
  {
    q: "施工事例のページを充実させるには何をすればいいですか？",
    a: "施工前・施工中・施工後の写真を必ず撮影し、施工内容・使用素材・工期・費用目安・お客様の声をセットで掲載します。SEO効果を高めるために「葛飾区でのサイディング外壁塗装の施工事例」など地域+施工内容のタイトルをつけることが重要です。月1件以上のペースで追加することでSEO評価が上がります。",
  },
  {
    q: "補助金・助成金を活用した集客コンテンツは効果がありますか？",
    a: "非常に効果的です。「葛飾区 外壁塗装 補助金」「東京都 リフォーム助成金」などのキーワードは検索ボリュームが高く、補助金情報を網羅したページを作成することで情報収集段階の顧客を取り込めます。最新の助成金情報を定期的に更新することがSEO評価の維持にもつながります。",
  },
  {
    q: "工務店の施工事例ページはSEOにどれくらい効果がありますか？",
    a: "施工事例ページは建設業SEOにおいて最も効果の高いコンテンツです。「葛飾区 新築 工務店 実例」「木造住宅 施工事例 東京」など地域と工法を組み合わせたキーワードで上位表示を狙えます。また施工ごとにページを作成することで内部リンク構造が充実し、サイト全体のSEO評価が高まります。",
  },
  {
    q: "地元工務店はハウスメーカーとどう差別化して集客すればいいですか？",
    a: "ハウスメーカーとの差別化ポイントは「地域密着・職人の顔が見える・細かい要望への対応力・アフターサービスの質」です。ホームページでは代表や職人の顔写真・メッセージを前面に出し、「地元を知る職人が建てる家」という人間的なブランドを構築することが有効です。大手では伝えられない温度感のある発信が差別化につながります。",
  },
  {
    q: "YouTube施工動画は集客に有効ですか？",
    a: "「基礎工事から完成までのタイムラプス」「職人が解説する外壁塗装の工程」「リフォーム前後のビフォーアフター動画」が特に効果的です。視聴者は技術力と誠実な仕事への姿勢を直感的に判断するため、加工より実際の現場を映した動画が信頼構築に有効です。動画はホームページにも埋め込み、SEO効果と滞在時間の向上にもつなげます。",
  },
  {
    q: "リフォーム需要と新築需要でSEOキーワードは違いますか？",
    a: "リフォーム需要は「○○区 外壁塗装 費用」「キッチン リフォーム 見積もり」など費用比較・業者選び段階の検索が多く、MEOとSEOが直接的に効きます。新築需要は検討期間が長いため、InstagramやYouTubeでの認知醸成と、モデルハウス・完成見学会のWeb告知を組み合わせた長期的なアプローチが有効です。",
  },
  {
    q: "工務店のGoogleビジネスプロフィールのカテゴリはどう設定するか？",
    a: "メインカテゴリは事業内容に最も近いものを設定します。新築中心なら「建設会社」「住宅建設業者」、リフォーム中心なら「住宅リフォーム業者」「建設会社」が適切です。追加カテゴリには「外壁塗装業者」「屋根工事業者」「工務店」など対応施工種別を設定し、複数の検索ワードでの表示機会を広げます。",
  },
  {
    q: "建設業許可番号の掲載はE-E-A-T向上につながりますか？",
    a: "建設業許可番号・代表者名・資格（一級建築士・一級施工管理技士等）・設立年・施工実績数の掲載はE-E-A-T（経験・専門性・権威性・信頼性）を高める重要な要素です。Googleはこれらの情報から会社の信頼性を評価し、SEO順位にも影響します。会社概要ページを充実させることが長期的なSEO評価向上にもつながります。",
  },
  {
    q: "完成見学会のWeb告知方法は？",
    a: "GBPの投稿機能でイベント情報を発信しGoogleマップから集客する方法、LINEで既存顧客と見込み客に告知する方法、Instagram・Facebookのイベント機能を活用する方法が効果的です。「○○区 完成見学会」などの地域キーワードで検索流入を狙ったブログ記事の作成も有効です。開催1ヶ月前から段階的に告知量を増やし、申込みフォームで参加者を管理することで当日の集客を最大化できます。",
  },
  {
    q: "下請けから元請けへの転換にWebはどう貢献しますか？",
    a: "元請け転換の最大の課題は「直接顧客との接点を作ること」です。自社ホームページとGoogleマップを整備して直接問い合わせを受け付ける体制を作り、施工事例ページ・代表者プロフィール・建設業許可番号で信頼性を証明することで、顧客が「この会社に直接頼みたい」と感じる環境を整えます。Web集客経由の元請け案件が増えることで下請け依存度を段階的に下げることができます。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "検索上位表示の基礎知識" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で見積もり獲得" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "建設業向けホームページ制作" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "施工事例・ブログ記事で検索流入を増やす" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO対策の費用相場" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/industries/renovation", label: "リフォーム会社の集客", desc: "リフォーム業のWebマーケティング" },
  { href: "/industries/plumbing", label: "水道・設備工事の集客", desc: "水回りリフォームの集客支援" },
  { href: "/knowledge/content-marketing", label: "コンテンツマーケティング", desc: "施工事例で見込み客を集める方法" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着集客の完全ガイド" },
  { href: "/area/chiba", label: "千葉県の集客支援", desc: "千葉エリア対応" },
  { href: "/industries/real-estate", label: "不動産会社の集客", desc: "不動産業のWebマーケティング" },
  { href: "/web-design", label: "ホームページ制作", desc: "建設業向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/knowledge/e-e-a-t", label: "E-E-A-T強化ガイド", desc: "専門性・権威性・信頼性を高める方法" },
  { href: "/services/gbp", label: "GBP管理サービス", desc: "Googleビジネスプロフィール運用代行" },
  { href: "/web-design/case-study-page", label: "施工事例ページ制作", desc: "SEO特化型施工事例ページの設計" },
];

export default function ConstructionIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "建設・リフォームのWeb集客", "item": "https://www.cypress-all.co.jp/industries/construction" },
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
              <span style={{ color: "#0d1b2a" }}>建設・リフォーム</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Construction &amp; Reform
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              建設・リフォーム業の<br />SEO・MEO集客戦略
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              建設業・リフォーム会社・外壁塗装業者のWeb集客は「施工事例の充実」「地域検索での上位表示」「信頼構築」が三大要素です。チラシ配布・紹介頼みの集客から脱却し、Webから継続的に見積もり依頼を獲得する仕組みを構築することが事業成長の鍵です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              建設業のWeb集客は「信頼性の証明」が最大の課題です。高額な工事を依頼する業者を選ぶ際、顧客は「悪徳業者ではないか」「技術力はあるか」「アフターサービスはあるか」を徹底的に調べます。施工事例・会社情報の透明化・口コミが揃ったWebサイトとGoogleマップが、この不安を解消し問い合わせにつなげます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              外壁塗装・屋根工事・内装リフォーム・新築工務店・水回りリフォームなど、建設・リフォーム業全般のWeb集客に対応しています。複数エリア対応の業者から個人工務店まで、規模に応じた集客設計をご提案します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (4).png"
            alt="建築士とカップルのプランニング"
            fill
            style={{ objectFit: "cover" }}
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
              建設・リフォーム業が抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "施工事例のアピールが弱く技術力が伝わっていない", b: "「どんな工事ができるか」「どんな仕上がりになるか」が伝わらないホームページでは、顧客は安心して問い合わせできません。ビフォーアフター写真・施工内容・費用目安・施工期間・お客様の声をセットにした施工事例ページが信頼と問い合わせを生み出します。" },
                { n: "02", t: "地域での認知度が低くGoogleで見つけてもらえない", b: "「葛飾区 外壁塗装」「亀有 リフォーム 業者」という地域密着の検索でGoogleマップにも自社サイトにも表示されない状態では、地域の需要を取りこぼしています。地域名+施工種別のSEO・MEO対策が地域集客の基盤です。" },
                { n: "03", t: "チラシ・紹介頼みからWebへの移行ができていない", b: "チラシ配布は単発のコストがかかり続ける集客方法です。一度整備したWebサイトとGoogleマップは継続的に集客資産として機能します。Webへの移行期間中は両方を並行しながら、段階的にWeb集客の比率を高める設計が現実的です。" },
                { n: "04", t: "ホームページが古くCV率が低い", b: "10年前に制作したホームページはスマートフォン対応が不十分・表示が遅い・信頼感のないデザインという問題を抱えています。現代の建設業ホームページはスマホファースト・施工事例ギャラリー・24時間対応の問い合わせフォームが必須です。" },
                { n: "05", t: "Googleマップに登録していない・または未最適化のまま", b: "建設業のGBP登録率は他業種と比べて低い傾向があります。登録しているだけで写真・施工エリア・口コミへの返信が不足している状態では、競合他社との差が広がります。GBPの施工写真・サービスエリア設定・口コミ対応が見積もり依頼増加の基盤です。" },
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
              建設・リフォーム業のSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                建設・リフォーム業のSEO対策では「地域名×施工種別×ユーザーの目的」の組み合わせキーワードを軸に設計します。主要キーワード例：「葛飾区 外壁塗装 費用」「亀有 屋根修理 業者」「金町 リフォーム 見積もり」「葛飾区 工務店 新築」。これらのキーワードで複数ページを作成し、見積もり比較段階の顧客を取り込みます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                施工事例ページはSEO効果の高い重要コンテンツです。「葛飾区でのサイディング外壁塗装の施工事例」「亀有エリアのマンション内装リフォーム事例」など、地域+施工内容でタイトルをつけた施工事例ページを月1件以上追加することで、長期的な検索流入の積み上げができます。ビフォーアフター写真・費用明細・期間・お客様の声をセットで掲載することが重要です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                情報系コンテンツ（「外壁塗装の適切な時期と費用の目安」「リフォーム補助金の申請方法」「屋根修理を業者に頼む前に確認すること」）も重要なSEO施策です。顧客が工事を検討し始める情報収集段階で接触し、最終的な業者選定まで自社を選んでもらう導線を設計します。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              建設・リフォーム業のGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                建設業のGBPで最も重要な要素は「施工ビフォーアフター写真」です。外壁塗装前後の比較写真・内装リフォームの変化写真・屋根修理の施工過程写真をGBPに追加することで、検索ユーザーに技術力を直接証明します。GBPの「サービス」セクションに主要施工種別（外壁塗装・屋根工事・内装リフォームなど）を設定し、サービス提供エリアを対応地域に設定します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                口コミ管理では、施工完了後のお礼挨拶と同時にGoogleマップの口コミリンクを送ることが効果的です。建設業の口コミは「丁寧な対応」「見積もりの明確さ」「仕上がりの質」「アフターサービス」に触れた具体的な内容が信頼性を高めます。ネガティブな口コミには誠実に対応し、改善策を明示することで新規顧客への信頼感を維持します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBP投稿（週2回）では施工事例の紹介・季節ごとのメンテナンス提案（「梅雨前の外壁チェックを」「台風後の屋根点検」）・補助金情報の更新を発信します。顧客が工事を考えるタイミングに合わせた情報発信が問い合わせのきっかけを作ります。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Content Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              建設・リフォーム業のSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                建設・リフォーム業のInstagramとYouTubeは「職人の仕事ぶりを見せる」コンテンツが最も効果的です。外壁塗装の下地処理から仕上げまでのタイムラプス動画・大工が丁寧に木材を加工する動画・リフォーム前後のビフォーアフター動画は、技術力と誠実な仕事への姿勢を伝えます。「こんな職人に工事を頼みたい」という信頼感が見積もり依頼につながります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                Instagramは施工事例写真を中心に、「地域密着」「地元の職人」「長年の信頼」をテーマにした投稿が地域顧客への訴求に有効です。ハッシュタグは「#葛飾区リフォーム」「#亀有外壁塗装」など地域タグと「#外壁塗装」「#リフォーム事例」など施工タグを組み合わせます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                ブログコンテンツ（月2〜4本）は情報収集段階の顧客との接点として機能します。「外壁塗装の業者を選ぶ5つのポイント」「屋根修理と屋根塗装の違い」「葛飾区で使える住宅改修助成金の申請方法」など、顧客が工事前に調べる情報を専門家として提供することで信頼性と検索流入の両方を高めます。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              建設・リフォーム業向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "施工事例ページのSEO特化設計", b: "地域+施工種別のキーワードでSEO最適化された施工事例ページを作成。ビフォーアフター写真・費用目安・お客様の声をセットにした信頼性の高いコンテンツで見積もり依頼を増やします。" },
                { t: "GBP最適化＋施工ビフォーアフター写真投稿", b: "GBPカテゴリ設定・サービスエリア設定・施工写真の定期追加・口コミ管理まで一括対応。「葛飾区 外壁塗装」「亀有 リフォーム」での地域検索上位表示を目指します。" },
                { t: "建設業許可番号・資格掲載で信頼構築", b: "建設業許可番号・代表者顔写真・保有資格（一級建築士・一級塗装技能士等）・施工保証内容の明示で、悪徳業者との差別化と新規顧客の不安解消を実現します。" },
                { t: "LocalBusiness Schema実装で検索リッチ表示", b: "LocalBusiness Schemaの実装でGoogleの検索結果に営業時間・評価・サービス内容が表示されやすくなります。複数エリア対応の場合はエリアページを個別作成し対応エリアでの上位表示を強化します。" },
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
              建設・リフォーム業の選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                建設業のWebサイトは「信頼感」と「実績の証明」が最も重要なデザイン要素です。トップページの施工事例スライダー・口コミの表示・建設業許可番号の明示が来訪者に「この会社は信頼できる」という第一印象を与えます。「会社概要」ページには代表者の顔写真・メッセージ・会社の歴史・資格・保有許可を丁寧に掲載し、顔の見える会社として信頼を積み重ねます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                施工種別ごとのサービスページ（外壁塗装・屋根工事・内装リフォーム・水回りリフォームなど）を独立して作成し、それぞれのページに「費用の目安」「工期の目安」「施工の流れ」「よくある質問」を掲載します。顧客の「いくらかかるか」「どんな流れで進むか」という疑問を事前に解消することでCV率が高まります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                問い合わせフォームは「電話」「メールフォーム」「LINE」の三種類を用意し、顧客の連絡手段の好みに対応します。「今すぐ無料見積もり依頼」ボタンをページ上部・フッター固定で常時表示し、「問い合わせようと思って忘れた」という機会損失を防ぎます。スマートフォンでの電話番号タップ発信も必須の設定です。
              </p>
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              建設・工務店の集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              建設業のWeb集客は、GBP整備と施工事例ページの構築を起点に、SEOキーワード設計・LP作成・見積もり導線最適化・口コミ設計・YouTube展開へと段階的に積み上げます。各ステップを確実に実施することで、見積もり依頼が継続的に入り続ける仕組みが完成します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "Googleビジネスプロフィール（GBP）の完全整備", b: "施工種別カテゴリの正確な設定・サービス提供エリアの設定・施工写真の初期投稿（10枚以上）・基本情報の完全整備を行います。GBPはWeb集客の起点となるため最初に整備します。" },
                { n: "02", t: "施工事例ページの構築（既存事例10件以上）", b: "過去施工から10件以上の事例を選び、施工前後写真・施工内容・使用素材・費用目安・工期・お客様の声をセットで掲載します。地域+施工内容のタイトルをつけてSEO効果を高め、サイト全体の信頼性の基盤を作ります。" },
                { n: "03", t: "地域×施工種別のSEOキーワード設計", b: "「○○区 外壁塗装 費用」「○○市 リフォーム 見積もり」など地域+施工種別キーワードを優先度付きで洗い出します。検索ボリューム・競合難易度・自社の強みを照合して優先ページを決定し、SEO設計の土台を作ります。" },
                { n: "04", t: "リフォーム・新築別のランディングページを作成する", b: "リフォーム検討層と新築検討層では関心事が異なるため、訴求ポイントを変えたLPをそれぞれ作成します。リフォームLPは費用目安・補助金情報・無料見積もりCTAを前面に、新築LPは施工事例・設計思想・完成見学会情報を中心に設計します。" },
                { n: "05", t: "見積もり依頼フォームの最適化と問い合わせ導線整備", b: "見積もりフォームは入力項目を絞り（工事種別・エリア・連絡先・希望時期の4項目以内）、電話・LINE・フォームの三経路を並列に配置します。全ページのファーストビューとフッターにCTAを固定表示し、問い合わせの機会損失を防ぎます。" },
                { n: "06", t: "口コミ獲得フローの整備と返信体制の構築", b: "施工完了後のお礼挨拶と同時にGoogleマップのQRコードを渡す口コミ依頼フローを整備します。全件返信テンプレートを用意し、ネガティブ口コミにも誠実に対応する体制を作ります。口コミ数と平均評価は月次でモニタリングします。" },
                { n: "07", t: "YouTube施工動画チャンネルの立ち上げ", b: "施工現場のタイムラプス・職人インタビュー・ビフォーアフター動画を月1本のペースで公開します。動画はホームページの施工事例ページにも埋め込み、ページ滞在時間の向上とSEO評価への好影響を狙います。チャンネル登録者数より地域顧客への認知拡大を優先します。" },
                { n: "08", t: "月次データ分析と施策の継続改善", b: "GBPインサイト・Google Search Console・GA4のデータを月次で分析し、検索流入・問い合わせ数の推移を把握します。上位表示されているキーワードの深掘りと、流入の少ないページの改善を継続的に行い、集客の質と量を高め続けます。" },
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
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              建設・リフォーム業のWeb集客では、以下のKPIを月次でモニタリングし施策の効果を定量的に確認することで、見積もり依頼獲得の仕組みを継続的に改善できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { name: "GBP問い合わせ数（電話タップ・ウェブサイトクリック）", where: "GBPインサイト", desc: "Googleマップから実際に問い合わせ行動をした見込み客数を測定します。電話タップは即時の見積もり意向を示す最重要指標です。" },
                { name: "見積もり依頼数（月次）", where: "GA4（コンバージョン設定）", desc: "Webサイト経由の見積もり依頼数をコンバージョンとして計測します。Web集客全体の最終成果指標として月次推移を追い、施策効果を評価します。" },
                { name: "サイト訪問者数・新規ユーザー数", where: "Google Analytics（GA4）", desc: "SEO施策の成果を測る指標。「地域名+施工種別+費用」キーワードからのオーガニック流入増加を月次で確認し、施策の方向性を判断します。" },
                { name: "施工事例ページ訪問数・上位キーワード数", where: "Google Search Console", desc: "施工事例ページのSEO効果を個別に測定します。「地域+施工内容」キーワードでの掲載順位向上が見積もり依頼増加に直結するため重点的に追跡します。" },
                { name: "Googleクチコミ件数・平均評価点", where: "GBPインサイト", desc: "口コミ獲得フローの効果を測定します。建設業では4.0以上の評価と具体的な口コミ内容が新規顧客の信頼構築に直結します。月次で増加数を確認します。" },
                { name: "コンバージョン率（訪問→見積もり依頼）", where: "Google Analytics（GA4）", desc: "サイト訪問者のうち見積もり依頼フォームを送信した割合。フォーム改善・CTAの配置変更・ページコンテンツの充実による改善効果を月次で測定します。" },
              ].map((item) => (
                <div key={item.name} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "220px", flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.name}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em" }}>{item.where}</p>
                  </div>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
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
                  t: "施工事例を集客資産に変えるコンテンツ設計",
                  b: "単なる写真ギャラリーではなく、地域+施工種別のSEOキーワードで最適化された施工事例ページを制作します。積み重なるほど検索流入が増える「集客資産」として施工事例を設計し、長期的な見積もり依頼の安定増加を支えます。",
                },
                {
                  n: "02",
                  t: "GBP設定から施工事例・LP・YouTube支援まで一社完結",
                  b: "GBP最適化・ホームページ制作・SEOコンテンツ作成・GBP投稿運用・YouTube企画支援をワンチームで担当します。施策間の連携が取れているため、分断のない一貫したWeb集客の仕組みを構築できます。",
                },
                {
                  n: "03",
                  t: "地域密着集客と元請け転換の両方を支援",
                  b: "葛飾区・足立区・江戸川区など東京東部エリアの地域密着型建設業・リフォーム業の集客支援経験をもとに、下請け依存からの元請け比率向上に向けたWeb戦略を設計します。単一エリアの深掘りから複数エリア展開まで対応します。",
                },
                {
                  n: "04",
                  t: "データに基づいた月次改善サイクルの提供",
                  b: "GBPインサイト・Google Search Console・GA4のデータを月次でレポートし、見積もり依頼数の推移と施策効果を可視化します。数値に基づいた改善提案を継続的に行うパートナーとして機能します。",
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

        {/* 施工種別ごとのSEO設計 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>By Service Type</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              施工種別ごとの集客SEO設計
            </h2>
            <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "960px" }}>
              {[
                {
                  label: "外壁塗装・屋根工事",
                  points: ["「○○区 外壁塗装 費用」「○○市 屋根修理 業者」でSEO", "季節訴求（梅雨前・台風後のメンテナンス提案）", "ビフォーアフター写真で施工品質を視覚化", "補助金・助成金情報ページで情報収集層を取込む"],
                },
                {
                  label: "内装・水回りリフォーム",
                  points: ["「キッチン リフォーム ○○区 費用」でSEO", "使用素材・メーカー別の施工事例ページ", "住みながらリフォームの可否・工期を明記", "LINEで気軽に相談できる窓口を設置"],
                },
                {
                  label: "新築・注文住宅",
                  points: ["「○○区 工務店 新築 費用」でSEO", "完成見学会・モデルハウスのWeb告知", "設計思想・施工哲学を代表メッセージで訴求", "SNS・YouTubeで建築過程を継続発信"],
                },
                {
                  label: "リノベーション",
                  points: ["「中古物件 リノベーション ○○市」でSEO", "物件探しから施工まで一括対応をアピール", "Before/After事例に費用・工期を明示", "インスタグラムで完成した空間の美しさを発信"],
                },
              ].map((item) => (
                <div key={item.label} style={{ padding: "24px", border: "1px solid #E8E4DC", background: "#ffffff" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "12px" }}>{item.label}</p>
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {item.points.map((pt) => (
                      <li key={pt} style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9", paddingBottom: "4px", borderBottom: "1px solid #E8E4DC", marginBottom: "4px" }}>— {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 信頼構築のポイント */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Trust Building</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              顧客の不安を解消する信頼構築の7要素
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "32px" }}>
                建設・リフォーム業は高額取引のため、顧客の不安解消が問い合わせ獲得の前提条件です。以下の要素をホームページとGBPで揃えることで、初めての顧客が安心して問い合わせできる環境を作ります。
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { n: "01", t: "建設業許可番号の明示", b: "トップページとフッターに許可番号を表示。法的に施工可能な業者であることを証明します。" },
                  { n: "02", t: "代表者の顔写真とメッセージ", b: "顔の見える会社を示す最も効果的な要素。代表者の想いを400字以上で掲載します。" },
                  { n: "03", t: "施工保証内容の明記", b: "10年保証・アフターメンテナンスの詳細を明示することで、工事後の不安を払拭します。" },
                  { n: "04", t: "費用の目安と見積もり根拠", b: "「外壁塗装 30坪 ○○万円〜」という目安を掲載し、適正価格であることを示します。" },
                  { n: "05", t: "口コミ・お客様の声の掲載", b: "Google口コミの埋め込みと、実際のお客様インタビューを掲載し社会的証明を提示します。" },
                  { n: "06", t: "施工事例数と対応実績数", b: "「施工事例○○件以上」「創業○○年」など実績の数値で経験値を証明します。" },
                  { n: "07", t: "資格・認定マークの表示", b: "一級建築士・一級施工管理技士・塗装技能士等の資格バッジをトップページに表示します。" },
                ].map((item) => (
                  <div key={item.n} style={{ padding: "20px", border: "1px solid #E8E4DC", background: "#f9f8f5" }}>
                    <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "6px" }}>{item.n}</p>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="建設・リフォーム業のWeb集客に関するよくある質問" bgColor="#F9F8F5" />
        {/* 対応エリア */}
        <section style={{ background: "#f8f6f2", padding: "56px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Service Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.4vw,26px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>主な対応エリア</h2>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "24px" }}>
              東京都・千葉県・埼玉県・神奈川県を中心に全国対応しています。オンラインでのご相談も承りますので、まずはお気軽にご連絡ください。葛飾区・足立区・江戸川区など東京東部エリアの建設業・リフォーム業は特に対応実績が豊富です。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["葛飾区", "足立区", "江戸川区", "墨田区", "荒川区", "北区", "板橋区", "練馬区", "品川区", "大田区", "千葉市", "船橋市", "市川市", "さいたま市", "川口市"].map((area) => (
                <span key={area} style={{ padding: "6px 14px", border: "1px solid #E8E4DC", fontSize: "13px", color: "#374151", background: "#ffffff" }}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="建設・リフォーム業のWeb集客ご相談"
          body="外壁塗装・屋根修理・リフォーム・建設会社のMEO対策・ホームページ制作・SEO対策をご相談ください。見積もり依頼数の増加を目標に支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
