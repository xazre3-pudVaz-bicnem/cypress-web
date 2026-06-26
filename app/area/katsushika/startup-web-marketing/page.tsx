import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "葛飾区で創業する方向けWeb集客ガイド｜ホームページ制作・SEO・MEO｜株式会社サイプレス",
  description:
    "葛飾区で創業・開業する事業者向けに、ホームページ制作、SEO対策、MEO対策、SNS、Googleビジネスプロフィールを活用したWeb集客の考え方を解説します。",
  keywords: [
    "葛飾区 起業 ホームページ",
    "葛飾区 開業 集客",
    "葛飾区 店舗集客",
    "葛飾区 ホームページ制作",
    "葛飾区 SEO対策",
    "葛飾区 MEO対策",
    "葛飾区 Googleビジネスプロフィール",
    "葛飾区 Web集客",
    "葛飾区 創業 ホームページ",
    "葛飾区 開業 Web",
  ],
  openGraph: {
    title: "葛飾区で創業する方向けWeb集客ガイド｜ホームページ制作・SEO・MEO",
    description:
      "葛飾区で創業・開業する事業者向けに、ホームページ制作、SEO対策、MEO対策、SNS、Googleビジネスプロフィールを活用したWeb集客の考え方を解説します。",
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    canonical: "https://www.cypress-all.co.jp/area/katsushika/startup-web-marketing",
  },
};

const faqItems = [
  {
    q: "創業直後からSEOの効果は出ますか？",
    a: "SEOは通常3〜6ヶ月以上かかります。ただし、開業前・開業直後からSEOを意識した構造でホームページを作ることが、効果が出るまでの期間を短縮する最善策です。競合が少ないローカルキーワード（葛飾区＋業種名、亀有＋業種名など）に特化すれば、比較的早期に効果が出るケースがあります。",
  },
  {
    q: "Googleビジネスプロフィールはいつ開設すればいいですか？",
    a: "住所（店舗・事務所）が確定したらすぐに開設することをおすすめします。開設から掲載まで数日〜数週間かかることがあるため、開業前から準備しておくとスムーズです。開業日にGoogleマップへの表示が始まっていると、開業直後の集客に大きく貢献します。",
  },
  {
    q: "SNSとホームページはどちらを優先すべきですか？",
    a: "並行して整備することが理想ですが、優先順位をつけるとすれば①Googleビジネスプロフィール（無料・即効性あり）→②ホームページ（長期の検索資産）→③SNS（継続運用で効果）の順をおすすめします。SNSは投稿が流れてしまいますが、ホームページとGBPは検索に残る資産になります。",
  },
  {
    q: "葛飾区でどのキーワードを狙えば集客できますか？",
    a: "「葛飾区＋業種名」「亀有・金町・新小岩・立石・柴又＋業種名」の組み合わせが基本です。加えて「症状・悩み＋葛飾区」（例：腰痛 治療 葛飾区）や「料金＋葛飾区」「おすすめ＋業種＋葛飾区」などのロングテールキーワードも有効です。競合が少ないキーワードから着手することで早期に効果が出やすくなります。",
  },
  {
    q: "創業時のホームページで必要なページは何ですか？",
    a: "最低限: ①トップページ ②サービス説明 ③料金・費用目安 ④問い合わせ・予約フォーム ⑤会社概要・スタッフ紹介。余裕があれば: ⑥施工事例・支援事例 ⑦FAQ ⑧ブログ・コラム ⑨地域エリアページ を追加することでSEO効果が高まります。",
  },
  {
    q: "MEOとSEOはどう違いますか？創業初期はどちらが大切ですか？",
    a: "MEOはGoogleマップ（ビジネスプロフィール）での上位表示、SEOはGoogle検索での上位表示を目指すものです。地域密着型の店舗・サービス業ではMEOが即効性の点で優先されますが、長期的にはSEOとの組み合わせが最も効果的です。両方を開業直後から整えることをおすすめします。",
  },
  {
    q: "口コミはどう増やせばいいですか？",
    a: "来店・利用したお客様にGoogleマップの口コミをお願いするQRコードを設置する方法が最も効果的です。店頭のPOP・名刺・レシートにGBP口コミ用QRコードを印刷します。口コミへの丁寧な返信も口コミ増加とGBPの評価向上に貢献します。口コミ購入・自作投稿はGoogleのポリシー違反になるため絶対に行わないでください。",
  },
  {
    q: "葛飾区でホームページを作るのに補助金は使えますか？",
    a: "葛飾区にはホームページ作成費補助などの制度がある場合があります。ただし、制度内容・補助率・申請期間は年度によって変わる可能性があります。着手前申請が必要な場合もあるため、制作を始める前に葛飾区公式サイトで確認することが重要です。株式会社サイプレスでは採択・支給の保証はできません。",
  },
  {
    q: "ホームページは自作でも集客できますか？",
    a: "ホームページ作成ツール（Wix・Jimdo等）で自作することも可能ですが、SEOに強い構造・表示速度・スマホ最適化・構造化データの実装には専門知識が必要です。創業資金が限られている場合は、まず基本的なページを自作して始め、軌道に乗ってから専門会社にリニューアルを依頼するアプローチも選択肢の一つです。",
  },
  {
    q: "葛飾区の地域特性を活かしたWeb集客のコツはありますか？",
    a: "葛飾区は亀有・金町・新小岩・立石・柴又などエリアごとに特性が異なります。それぞれのエリア名を含むページを設けること、地域のイベント（葛飾納涼花火大会・柴又帝釈天の縁日等）に合わせたGBP投稿・コンテンツ発信が地域密着型の集客に効果的です。また下町らしい親しみやすいトーンのコンテンツが地域ユーザーに響きやすい傾向があります。",
  },
  {
    q: "Web集客に興味を持った場合、販売パートナーになる選択肢はありますか？",
    a: "はい。株式会社サイプレスでは、Web集客サービス（ホームページ制作・SEO・MEO・AIO）を地域事業者に紹介できる販売パートナー制度を設けています。創業初期の収益柱の一つとして活動できる可能性があります。詳細はパートナー制度のページをご覧ください。",
  },
];

const S = {
  label: { fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" as const },
  h2: { fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" },
  body: { fontSize: "15px", color: "#374151", lineHeight: "1.9", maxWidth: "680px", marginBottom: "36px" },
  container: { maxWidth: "72rem", margin: "0 auto", padding: "0 24px" },
  divider: { display: "flex", gap: "24px", padding: "24px 0", borderTop: "1px solid #E8E4DC" } as React.CSSProperties,
  num: { fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "32px", paddingTop: "2px" },
  itemTitle: { fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" },
  itemBody: { fontSize: "14px", color: "#374151", lineHeight: "1.9" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
        { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://www.cypress-all.co.jp/area" },
        { "@type": "ListItem", position: 3, name: "葛飾区", item: "https://www.cypress-all.co.jp/area/katsushika" },
        { "@type": "ListItem", position: 4, name: "葛飾区で創業する方向けWeb集客ガイド", item: "https://www.cypress-all.co.jp/area/katsushika/startup-web-marketing" },
      ],
    },
    {
      "@type": "WebPage",
      name: "葛飾区で創業する方向けWeb集客ガイド｜ホームページ制作・SEO・MEO",
      url: "https://www.cypress-all.co.jp/area/katsushika/startup-web-marketing",
      description: "葛飾区で創業・開業する事業者向けに、ホームページ制作、SEO対策、MEO対策、SNS、Googleビジネスプロフィールを活用したWeb集客の考え方を解説します。",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "72px" }}>
          <div style={S.container}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/katsushika" style={{ color: "#6B7280" }}>葛飾区</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/area/katsushika/start-business" style={{ color: "#6B7280" }}>起業・創業</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>Web集客ガイド</span>
            </nav>
            <p style={S.label}>Katsushika — Startup Web Marketing</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "24px" }}>
              葛飾区で創業する方向け<br />Web集客ガイド
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "36px" }}>
              葛飾区で創業・開業する事業者が、ホームページ制作・SEO対策・MEO対策・SNS・Googleビジネスプロフィールを活用して、開業直後から集客の仕組みを整えるためのガイドです。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0d1b2a", color: "#fff", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                Web集客について相談する
              </Link>
              <Link href="/area/katsushika/start-business" style={{ display: "inline-block", background: "transparent", color: "#0d1b2a", padding: "14px 28px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #0d1b2a" }}>
                葛飾区起業ガイドに戻る
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAILURES */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Common Failures</p>
            <h2 style={S.h2}>創業直後にWeb集客で失敗しやすい理由</h2>
            <p style={S.body}>開業前後でWeb集客の準備が不十分だと、集客が立ち上がらないまま運転資金が減り続けることがあります。よくある失敗パターンを確認してください。</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {[
                { t: "ホームページがない・開業後に後回し", b: "「まず開業してからホームページ」と考えると、数ヶ月間、新規客がゼロの状態が続きます。SEOには時間がかかるため、開業前から制作を始めることが理想です。" },
                { t: "Googleビジネスプロフィールが未整備", b: "GBPが未設定だと「葛飾区 〇〇」「近くの〇〇」検索に表示されません。開業直後から露出機会を逃し続けることになります。" },
                { t: "サービスページがない・薄い", b: "トップページのみで何ができるかが分からないサイトは、見込み客が離脱します。サービスごとにページを作ることでSEO・CVの両面で効果が高まります。" },
                { t: "地域名のキーワードに対応していない", b: "「美容室」だけでなく「葛飾区 美容室」「亀有 美容室」など地域名を含むキーワードに対応したページがないと、地域検索での集客が困難です。" },
                { t: "写真や事例が少ない・ない", b: "Googleビジネスプロフィール・ホームページに写真が少ないと信頼性が下がります。店舗・スタッフ・施術・商品・施工事例の写真を充実させることが重要です。" },
                { t: "問い合わせ導線が弱い", b: "電話番号が目立たない・フォームが見つかりにくい・LINEリンクがないなど、問い合わせしたいユーザーが迷う状態になっているサイトは機会損失が大きいです。" },
              ].map((item) => (
                <div key={item.t} style={{ background: "#f8f6f2", borderRadius: "8px", padding: "22px 20px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: KEYWORDS */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Keyword Strategy</p>
            <h2 style={S.h2}>葛飾区の事業者が狙うべき検索キーワード</h2>
            <p style={S.body}>
              葛飾区は都心に比べて競合が少ないため、適切なキーワード戦略で早期に集客効果が出やすいエリアです。業種に合わせて以下のキーワードタイプを組み合わせてください。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "葛飾区＋業種名", b: "「葛飾区 美容室」「葛飾区 整体院」「葛飾区 歯科」など、最も基本的なローカルキーワードです。競合が多い場合は次のキーワードタイプと組み合わせます。" },
                { n: "02", t: "駅名・地域名＋業種名", b: "「亀有 美容室」「金町 整体」「新小岩 居酒屋」「立石 焼き鳥」「柴又 甘味処」など、より絞り込まれたキーワードは競合が少なく、上位表示が狙いやすいです。" },
                { n: "03", t: "悩み・症状＋葛飾区", b: "「腰痛 葛飾区」「外壁塗装 費用 葛飾区」「離婚 相談 亀有」など、お客様の具体的な悩みに対応したキーワードはコンバージョン率が高い傾向があります。" },
                { n: "04", t: "料金・費用系キーワード", b: "「葛飾区 美容室 料金」「亀有 ホームページ制作 費用」など、比較検討段階のユーザーが検索するキーワードです。料金ページの設計が重要です。" },
                { n: "05", t: "比較・選び方系キーワード", b: "「葛飾区 歯医者 選び方」「亀有 塾 おすすめ」など、意思決定直前のユーザーが検索するキーワードです。FAQ・比較コンテンツが効果的です。" },
                { n: "06", t: "近隣区のキーワード", b: "「足立区 〇〇」「江戸川区 〇〇」「江東区 〇〇」など、葛飾区に隣接するエリアのキーワードに対応したページを設けることで集客エリアを広げられます。" },
              ].map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PAGES NEEDED */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Page Structure</p>
            <h2 style={S.h2}>ホームページ制作で必要なページ</h2>
            <p style={S.body}>
              開業時のホームページに最低限必要なページと、SEO・CV率向上のために追加すべきページを整理します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px", maxWidth: "900px" }}>
              {[
                { label: "必須", t: "トップページ", b: "ビジネスの第一印象。サービス概要・信頼要素・CTA（電話・フォーム）を配置します。" },
                { label: "必須", t: "サービスページ", b: "提供するサービス・商品ごとのページ。サービス名＋説明＋料金＋問い合わせCTAが基本構成です。" },
                { label: "必須", t: "料金・費用ページ", b: "料金の明示は不安解消に直結します。「〇〇円〜」と目安を提示することで問い合わせの心理障壁が下がります。" },
                { label: "必須", t: "お問い合わせページ", b: "電話・メールフォーム・LINE・予約システムなど、業種に合わせた問い合わせ導線を設けます。" },
                { label: "必須", t: "会社概要・スタッフ紹介", b: "事業者の顔が見えることで信頼性が高まります。写真・経歴・想いを掲載します。" },
                { label: "推奨", t: "施工事例・支援実績ページ", b: "ビフォーアフター・事例の積み重ねはSEO・信頼性の両面で強力です。開業直後から少数でも掲載を始めましょう。" },
                { label: "推奨", t: "FAQページ", b: "よくある質問への回答ページは、SEO（FAQSchema対応）と不安解消の両面で効果があります。最低10〜15問を用意します。" },
                { label: "推奨", t: "地域エリアページ", b: "「亀有 〇〇」「金町 〇〇」など駅名・地域名のキーワードに対応したページを設けることで、ローカル検索での集客が強化されます。" },
                { label: "推奨", t: "ブログ・コラムページ", b: "定期的なコンテンツ更新はSEO効果の向上とE-E-A-T強化につながります。月1〜2本を目安に継続することが重要です。" },
              ].map((item) => (
                <div key={item.t} style={{ background: item.label === "必須" ? "#f8f6f2" : "#FFFFFF", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "20px 18px" }}>
                  <span style={{ display: "inline-block", background: item.label === "必須" ? "#0d1b2a" : "#E8E4DC", color: item.label === "必須" ? "#fff" : "#374151", fontSize: "11px", padding: "2px 8px", borderRadius: "3px", marginBottom: "10px", fontWeight: 600 }}>{item.label}</span>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: MEO */}
        <section style={{ background: "#f8f6f2", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>MEO / GBP</p>
            <h2 style={S.h2}>GoogleビジネスプロフィールとMEO対策</h2>
            <p style={S.body}>
              葛飾区で「近くの〇〇」「葛飾区 〇〇」と検索したときに、Googleマップのローカルパックに表示されるためにはGBPの整備が不可欠です。開業直後から継続的に整えることで集客の土台が固まります。
            </p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "カテゴリの正確な設定", b: "Googleビジネスプロフィールのカテゴリは、検索クエリとの関連性評価に大きく影響します。業種に最も近いカテゴリを主カテゴリとして選択し、関連するサブカテゴリも設定します。" },
                { n: "02", t: "住所・電話番号・営業時間の正確な記載", b: "GBPの住所・電話番号・営業時間は、ホームページに記載された情報と完全に一致させることが重要です。情報の不一致はGoogleからの信頼性低下につながります。" },
                { n: "03", t: "写真の継続的な追加", b: "店舗外観・内観・スタッフ・メニュー・施工事例などの写真を継続的に追加します。写真が充実したGBPは、未整備のGBPより問い合わせ率が高くなる傾向があります。" },
                { n: "04", t: "口コミの獲得と返信", b: "開業直後から口コミ獲得施策を始めます。QRコード印刷・口頭でのお願い・フォローメールなどが有効です。受けた口コミには必ず丁寧に返信します（良い口コミも悪い口コミも）。" },
                { n: "05", t: "GBP投稿の定期更新", b: "週1〜2回のGBP投稿（新メニュー・キャンペーン・スタッフ紹介・地域イベント連動等）が検索順位に好影響を与えます。継続性が重要です。" },
                { n: "06", t: "サービス情報・商品情報の記載", b: "GBPのサービス情報・商品情報（写真・説明・価格）を充実させることで、ユーザーが問い合わせ前に必要な情報を確認でき、来店・問い合わせ率が向上します。" },
                { n: "07", t: "ホームページとの情報統一", b: "GBPとホームページの住所・電話番号・営業時間・サービス内容を統一します。不一致があるとGoogleからの評価が下がり、検索順位に悪影響が出る可能性があります。" },
              ].map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: SNS */}
        <section style={{ background: "#ffffff", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={S.label}>SNS Strategy</p>
            <h2 style={S.h2}>SNSだけに頼らない理由</h2>
            <p style={S.body}>創業直後はSNSに力を入れがちですが、SNSを検索集客の代替にすることは困難です。SNSとホームページ・GBPを組み合わせることで、相乗効果が生まれます。</p>
            <div style={{ maxWidth: "800px" }}>
              {[
                { n: "01", t: "SNSの投稿は時間とともに埋もれる", b: "InstagramやXへの投稿は、数日後にはフォロワーのタイムラインから消え、新規ユーザーには届きません。ホームページに掲載したコンテンツは、Googleの検索インデックスに永続的に残ります。" },
                { n: "02", t: "SNSはフォロワーへのリーチ、検索は意図のあるユーザーへのリーチ", b: "SNSのフォロワーは「興味がある人」ですが、Google検索ユーザーは「今すぐ必要な人」です。問い合わせ・来店に直結するのは、検索意図を持ったユーザーです。" },
                { n: "03", t: "SEO・MEOは検索に残る資産になる", b: "「葛飾区 〇〇」で一度上位表示を獲得すれば、広告費をかけずに継続的に集客できる資産になります。SNSのフォロワーは今日から増えず、投稿を止めると集客効果が落ちますが、SEO資産は蓄積され続けます。" },
                { n: "04", t: "SNSとホームページの連携で相乗効果", b: "InstagramやXの投稿でブランドや事業者の人柄を知ってもらい、詳細はホームページへ誘導する流れが理想です。SNSのプロフィールにホームページリンクを設置し、ホームページにはSNSへのリンクを設けます。" },
                { n: "05", t: "業種によってSNSの優先度は変わる", b: "飲食・美容・インテリア・ファッションなどビジュアル訴求の強い業種はInstagramの効果が高いです。士業・コンサル・B2Bサービスはリンクトイン・X・SEO強化の優先度が高いことが多いです。業種に合わせてSNSの優先順位を決めてください。" },
              ].map((item) => (
                <div key={item.n} style={S.divider}>
                  <span style={S.num}>{item.n}</span>
                  <div>
                    <p style={S.itemTitle}>{item.t}</p>
                    <p style={S.itemBody}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: PARTNER */}
        <section style={{ background: "#0d1b2a", padding: "96px 0" }}>
          <div style={S.container}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px", textTransform: "uppercase" }}>Sales Partner</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "16px" }}>
              Web集客の知識を、収益の柱にする選択肢
            </h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: "1.9", maxWidth: "680px", marginBottom: "28px" }}>
              葛飾区で創業する中で、Web集客の重要性を理解した方の中には、「自分も知人の事業者にこのサービスを紹介したい」と感じるケースがあります。株式会社サイプレスでは、ホームページ制作・SEO・MEO・AIOなどのWeb集客サービスを地域事業者へ紹介できる販売パートナー制度を用意しています。
            </p>
            <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.85", maxWidth: "680px", marginBottom: "36px" }}>
              成約には商談内容や提案先の状況が影響します。無理な営業ではなく、必要としている事業者への紹介を前提にしています。成果を保証するものではありません。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/partner/katsushika-startup" style={{ display: "inline-block", background: "#c4b89a", color: "#0d1b2a", padding: "13px 24px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px" }}>
                葛飾区起業者向け販売パートナー制度を見る →
              </Link>
              <Link href="/partner/local-sales-agent" style={{ display: "inline-block", background: "transparent", color: "#c4b89a", padding: "13px 24px", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", borderRadius: "4px", border: "1px solid #c4b89a" }}>
                全国向け代理店・取次店制度を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 8: RELATED */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={S.container}>
            <p style={S.label}>Related Pages</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "28px" }}>関連ページ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
              {[
                { href: "/area/katsushika/start-business", label: "葛飾区で起業・創業する方へ", desc: "起業・創業の総合ガイド" },
                { href: "/area/katsushika/web-design-subsidy", label: "補助金活用支援", desc: "ホームページ制作・補助金" },
                { href: "/partner/katsushika-startup", label: "葛飾区起業者向けパートナー", desc: "販売パートナー制度" },
                { href: "/web-design", label: "ホームページ制作", desc: "SEOに強いサイト制作" },
                { href: "/seo", label: "SEO対策", desc: "検索上位表示支援" },
                { href: "/meo", label: "MEO対策", desc: "Googleマップ最適化" },
                { href: "/aio", label: "AIO対策", desc: "AI検索対策" },
                { href: "/sns", label: "SNS運用", desc: "Instagram・SNS集客" },
                { href: "/area/katsushika", label: "葛飾区Web集客", desc: "葛飾区の集客支援" },
                { href: "/contact", label: "お問い合わせ", desc: "まずは無料相談" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ background: "#f8f6f2", border: "1px solid #E8E4DC", borderRadius: "8px", padding: "16px 14px", textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "13px", color: "#0d1b2a", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280" }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="葛飾区で創業するWeb集客についてよくある質問"
          bgColor="#F9F8F5"
        />

        <PageContactCTA
          heading="葛飾区での創業・開業のWeb集客、まずはご相談ください"
          body="葛飾区で起業・開業する方向けに、ホームページ制作・SEO対策・MEO対策・SNS運用を一貫してサポートします。補助金活用時の制作内容・見積書の整理もお手伝いできます。お気軽にご相談ください。"
        />

      </main>
      <Footer />
    </>
  );
}
