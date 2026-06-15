import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "飲食店のMEO対策｜Googleマップで予約・来店を増やす方法",
  description: "飲食店・カフェ・居酒屋のGoogleマップ集客。GBP写真・メニュー・口コミ対応・定期投稿・業態別ポイントなど飲食店特有のMEO対策を徹底解説します。",
  keywords: ["飲食店 MEO対策", "レストラン Googleマップ", "カフェ 集客", "居酒屋 GBP最適化", "飲食店 口コミ対策", "Googleマップ 飲食店 予約"],
  openGraph: {
    title: "飲食店のMEO対策｜Googleマップで予約・来店を増やす方法",
    description: "飲食店・カフェ・居酒屋のGoogleマップ集客。GBP写真・メニュー・口コミ対応・定期投稿など飲食店特有のMEO対策を徹底解説します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/restaurant-meo" },
};

const faqItems = [
  {
    q: "飲食店でMEO対策をすると何が変わりますか？",
    a: "「渋谷 ランチ」「新宿 居酒屋 個室」などの地域+業種キーワードで上位に表示されるようになります。Googleマップを見て来店するユーザーが増え、電話予約・Web予約の件数が増加します。",
  },
  {
    q: "食べログやホットペッパーとMEO対策はどう違いますか？",
    a: "食べログ・ホットペッパーは広告費が必要ですが、MEO対策はGBPを適切に管理することで無料で効果を出せます。GoogleマップはNavigation用途でも使われるため、初めての来店者に見つけてもらいやすい特性があります。",
  },
  {
    q: "メニューの価格を書かないとGBPの評価が下がりますか？",
    a: "価格を書かないことで機会損失になる可能性はありますが、Googleの評価に直接影響するとは限りません。ただし、価格帯情報はユーザーが来店を判断する重要な情報のため、目安でも記載することを推奨します。",
  },
  {
    q: "口コミへの返信文に決まった形はありますか？",
    a: "良い口コミには感謝と再来店の誘い、悪い口コミには謝罪・原因・改善策を記載します。テンプレートを使いつつ個別の内容に触れることで誠意が伝わります。全件返信することが重要です。",
  },
  {
    q: "飲食店のGBP写真はどのくらい必要ですか？",
    a: "最低でも外観2枚・内装3枚・料理5枚以上が目安です。競合が多いエリアでは20〜50枚以上の高品質な写真を揃えることで差別化できます。スマートフォンで撮影した自然光の写真でも十分です。",
  },
  {
    q: "GBPの「予約リンク」はどこに設定すればいいですか？",
    a: "GBP管理画面の「予約」タブまたは「Webサイト・その他情報」の予約URL欄に設定します。食べログ・ホットペッパーの予約ページURLや自社Web予約ページのURLを登録することで、GBPから直接予約導線につながります。",
  },
  {
    q: "テイクアウト・デリバリーの情報はGBPに掲載できますか？",
    a: "はい、GBPの属性設定から「テイクアウト可」「デリバリー可」「ドライブスルーあり」などを設定できます。Uber Eats・出前館などのデリバリーサービスへのリンクも追加できます。",
  },
  {
    q: "「臨時休業」や「期間限定メニュー」はGBPにどう反映しますか？",
    a: "臨時休業は「特別営業時間」機能で特定日を休業日に設定します。期間限定メニューは「最新情報（投稿）」機能を使い、写真と説明文で告知します。投稿は7日間で期限切れになるため定期的な更新が必要です。",
  },
  {
    q: "口コミの星評価を上げるためにどうすればいいですか？",
    a: "口コミ依頼のタイミングは食事直後・会計時が効果的です。QRコードカード配布・LINEでのリンク送付・レシートへの記載など複数の導線を設けます。低評価が続く場合はオペレーション面の改善も並行して行います。",
  },
  {
    q: "食べログ・ホットペッパーとGBPでNAP情報が違うとどうなりますか？",
    a: "NAP（店名・住所・電話番号）が複数のプラットフォームで一致していないと、Googleが情報の信頼性を低く判断し、検索順位に悪影響を与える可能性があります。定期的に各プラットフォームの情報を確認・統一することが重要です。",
  },
  {
    q: "競合より口コミ数が少ない場合、順位を上げるのは難しいですか？",
    a: "口コミ数は順位に影響する要素の一つですが、それだけではありません。GBPの完成度（写真・メニュー・属性）・更新頻度・ユーザー行動（クリック率・ルート案内リクエスト数）も重要な要素です。まずGBPの基本情報を完成させることが先決です。",
  },
  {
    q: "飲食店のMEO対策に外部業者を使うメリットは何ですか？",
    a: "GBP最適化の最新アルゴリズムへの対応・競合分析・定期投稿の代行・口コミ返信のトーン統一など、継続的な運用を専門家に委託することで現場スタッフの負担を減らしつつ効果を最大化できます。",
  },
  {
    q: "Googleから「オーナー確認の必要があります」と表示されたらどうすればいいですか？",
    a: "GBPのオーナー確認は「ハガキ」「電話」「メール」「即時確認」のいずれかで行います。確認が完了するとGBPの編集権限が得られ、全ての情報を自由に更新できるようになります。",
  },
  {
    q: "GBPの投稿（最新情報）はどんな内容を載せればいいですか？",
    a: "季節限定メニュー・キャンペーン情報・新メニュー告知・イベント案内・スタッフ紹介などが効果的です。写真付きの投稿はクリック率が上がります。週1回程度の更新が理想です。",
  },
  {
    q: "飲食店のGBPカテゴリは何を選べばいいですか？",
    a: "メインカテゴリは業態に最も近いもの（例：「ラーメン店」「居酒屋」「カフェ」）を選びます。サブカテゴリには「日本料理店」「テイクアウト専門店」など関連カテゴリを追加します。カテゴリの精度が検索マッチングに直結します。",
  },
  {
    q: "モバイルでのGBP表示が崩れている場合はどうすればいいですか？",
    a: "GBP管理画面でスマートフォン表示のプレビューを確認します。写真のアスペクト比や文字数が原因で崩れることがあるため、横長（4:3または16:9）の写真を使い、説明文は簡潔にまとめることを推奨します。",
  },
  {
    q: "MEO対策の効果が出るまでどれくらいかかりますか？",
    a: "GBPの基本情報整備・写真追加は設定後すぐに反映されます。順位改善の効果は早くて2〜4週間、本格的な効果が安定するまでには2〜3ヶ月が目安です。口コミ数の増加は継続的な依頼活動が必要です。",
  },
  {
    q: "Googleマップで「閉業」と表示されてしまった場合はどうすればいいですか？",
    a: "GBP管理画面から「閉業をマークを削除」または「オープンに戻す」操作を行います。ユーザーやGoogleが誤った情報を報告した結果表示される場合があるため、定期的にGBPの表示状態を確認することが重要です。",
  },
  {
    q: "席数や個室情報はGBPのどこに書けばいいですか？",
    a: "GBPの「属性」セクションから「席数」「個室あり」「半個室あり」などを設定できます。また、「説明」欄や「最新情報（投稿）」でも補足情報を記載できます。個室は宴会・接待需要の高い検索キーワードに直結します。",
  },
  {
    q: "GBPに登録する店舗説明文はどう書けばいいですか？",
    a: "750文字以内で、店舗のコンセプト・特徴・代表メニュー・アクセス情報を簡潔に記載します。「〇〇駅徒歩3分の本格イタリアン」「個室完備の接待・記念日に人気の和食店」など、検索キーワードを自然に含めることが重要です。",
  },
];

const relatedLinks = [
  { href: "/industries/restaurant", label: "飲食店のWeb集客", desc: "飲食店向け総合支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信管理" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定の完全ガイド" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
  { href: "/meo/beauty-salon-meo", label: "美容室のMEO対策", desc: "美容業界向けMEO" },
  { href: "/meo/clinic-meo", label: "クリニックのMEO対策", desc: "医療機関向けMEO" },
  { href: "/meo/nail-salon-meo", label: "ネイルサロンのMEO対策", desc: "ネイル業界向けMEO" },
  { href: "/meo/dentist-meo", label: "歯科医院のMEO対策", desc: "歯科向けMEO" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索対策" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化" },
  { href: "/aio/chatgpt-seo", label: "ChatGPT SEO", desc: "ChatGPT引用対策" },
  { href: "/services/web-design", label: "Webデザイン", desc: "飲食店サイト制作" },
  { href: "/services/lp", label: "LP制作", desc: "ランディングページ" },
  { href: "/areas/tokyo", label: "東京のMEO対策", desc: "東京エリア対応" },
  { href: "/areas/osaka", label: "大阪のMEO対策", desc: "大阪エリア対応" },
  { href: "/areas/nagoya", label: "名古屋のMEO対策", desc: "名古屋エリア対応" },
  { href: "/areas/fukuoka", label: "福岡のMEO対策", desc: "福岡エリア対応" },
  { href: "/blog/meo-restaurant-tips", label: "飲食店MEOブログ", desc: "実践的なノウハウ" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "まずはご相談ください" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>飲食店のMEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Restaurant MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              飲食店のMEO対策｜<br />Googleマップで予約・来店を増やす
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「渋谷 ランチ」「池袋 居酒屋 個室」——飲食店を探す人の多くはGoogleマップで検索しています。MEO対策でGoogleマップの上位に表示されることが、飲食店の来客数向上への最短経路です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              飲食店の集客はグルメサイト掲載だけでは不十分です。Googleマップは無料で使える集客チャンネルであり、写真・メニュー・口コミ・営業時間を適切に管理することで、当日来店を検討しているユーザーに直接リーチできます。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="飲食店のMEO対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              今日行くお店に選ばれる飲食店へ
            </p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "飲食店がGoogleマップ集客で失っている4つの機会とその原因",
                "飲食店特有のGBPよくある課題10項目と具体的な改善策",
                "ラーメン・居酒屋・カフェ・寿司など業態別のMEO活用ポイント",
                "GBPオーナー確認から月次改善まで10ステップの実装フロー",
                "MEO効果を数字で確認するための7つのKPIと計測場所",
                "飲食店特有のFAQ20問——現場でよく出る疑問に全て答えます",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", lineHeight: "1.7", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark challenges block */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Restaurant MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              飲食店がGoogleマップ対策を怠ると失う4つの機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "「今日行きたい」検索で競合に負ける", b: "「渋谷 ランチ 今日」「近く 居酒屋 空いてる」などの即時性の高い検索でローカルパックに表示されないと、来店意欲が最も高いユーザーを競合に奪われます。" },
                { t: "写真が少なく来店意欲が下がる", b: "料理・内装・外観の写真が少ない飲食店は「どんなお店かわからない」という不安から来店を躊躇されます。競合が20枚以上の写真を揃えている中で写真が5枚以下では勝負になりません。" },
                { t: "口コミ放置でブランド毀損が続く", b: "悪い口コミへの返信がない飲食店は「クレームに誠実に対応しない店」という印象を与えます。全口コミへの丁寧な返信が信頼と再来店につながります。" },
                { t: "誤情報が来客機会を妨げる", b: "営業時間・定休日・メニュー・電話番号がGBPで正しく更新されていないと、来たかったのに閉まっていた・電話がつながらないというネガティブ体験を生みます。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              よくある課題と原因
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              飲食店のGBP運用でよく見られる課題をまとめました。それぞれの原因と影響を把握し、優先度の高いものから改善に取り組んでください。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01", t: "メニュー情報が登録されていない",
                  b: "GBPにメニュー名・価格・説明文が未登録だと、「ランチ 1000円以内」「個室 コース料理」などの条件付き検索でヒットしません。メニュー登録は集客の土台となる最優先事項です。",
                },
                {
                  n: "02", t: "料理写真が少ない・暗い",
                  b: "写真の質・量は来店意欲に直結します。暗い・ぼやけた写真が並んでいると料理の魅力が伝わらず、競合に顧客を奪われます。自然光を活用した鮮明な料理写真を最低20枚以上用意することが目安です。",
                },
                {
                  n: "03", t: "口コミへの返信がない",
                  b: "未返信の口コミが並ぶGBPは、Googleから運用への積極性が低いと判断される可能性があります。また来店候補者が返信なしの口コミを見て「対応が悪い店」と判断するリスクがあります。",
                },
                {
                  n: "04", t: "営業時間の更新が遅れる",
                  b: "GBPの営業時間と実際の営業時間にズレがあると、閉店時間に来店したユーザーが不満を持ちます。祝日・季節営業・臨時休業は必ず事前に「特別営業時間」で更新してください。",
                },
                {
                  n: "05", t: "予約システムとGBPが連携していない",
                  b: "GBPに予約リンクが設定されていないと、来店意欲があるユーザーがGBPを離れて予約方法を検索するという離脱が発生します。食べログ・ホットペッパーの予約ページURLをGBPに設定しましょう。",
                },
                {
                  n: "06", t: "テイクアウト・デリバリー属性の未設定",
                  b: "「テイクアウト可」「デリバリー対応」の属性が未設定だと、テイクアウト需要を持つ検索ユーザーを逃します。Uber Eats・出前館などのデリバリーURLも属性欄に追加することで集客の間口が広がります。",
                },
                {
                  n: "07", t: "席数・個室情報の未記載",
                  b: "宴会・歓送迎会・接待などの予約は「個室あり」「〇〇名まで対応可」という情報が決め手になります。GBPの属性設定で「個室あり」「最大収容人数」を設定することで大人数予約の獲得につながります。",
                },
                {
                  n: "08", t: "定休日変更の告知が遅い",
                  b: "臨時休業や定休日変更をGBPに反映する前にユーザーが来店し、閉まっていたという体験は低評価口コミの原因になります。変更が決まった時点で即時更新するフローを社内で整備することが大切です。",
                },
                {
                  n: "09", t: "ランチ・ディナーの料金帯が未記載",
                  b: "価格帯情報が不明だと来店前に予算が立てられず、候補から外されることがあります。「ランチ800〜1200円」「ディナーコース5000円〜」のように目安を記載するだけで来店判断がスムーズになります。",
                },
                {
                  n: "10", t: "食べログ・ホットペッパーとのNAP不一致",
                  b: "店名・住所・電話番号（NAP情報）が食べログ・ホットペッパー・自社サイト・GBPで異なると、Googleが情報の信頼性を低く評価します。全プラットフォームでNAP情報を統一することがMEO強化の基本です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業態別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Restaurant Type</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              業態別の活用ポイント
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              飲食店のMEO対策は業態によって重要なポイントが異なります。自店舗の業態に合った最適化を行うことで、ターゲットユーザーへの訴求力が高まります。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC" }}>
              {[
                {
                  type: "ラーメン店",
                  points: "行列状況・待ち時間をGBP投稿で告知することで来店前の心理的ハードルを下げます。スープのクローズアップ写真・麺の質感が伝わる画像を複数枚掲載し、「醤油」「豚骨」などスープ種別をメニューカテゴリに登録しましょう。",
                },
                {
                  type: "居酒屋",
                  points: "「個室あり」「飲み放題あり」「貸切可」の属性設定が宴会需要の取り込みに直結します。歓送迎会シーズン前の11月・3月には特別プランをGBP投稿で告知し、予約リンクへの誘導を強化します。",
                },
                {
                  type: "カフェ",
                  points: "「Wi-Fiあり」「電源あり」「テイクアウト可」の属性設定でワーカー需要を取り込みます。季節限定ドリンク・スイーツの写真投稿を定期的に行い、「インスタ映え」な写真でユーザーのシェアを促します。",
                },
                {
                  type: "焼肉店",
                  points: "希少部位・産地情報をメニュー説明欄に登録します。「和牛」「黒毛和牛」などの品質キーワードを含めることで、こだわり層へのリーチが向上します。コース内容と価格帯を明示して記念日需要にも対応します。",
                },
                {
                  type: "イタリアン・フレンチ",
                  points: "「要予約」「コースのみ」の属性を設定して来店ミスマッチを防ぎます。料理の盛り付け・空間の雰囲気写真を重視し、記念日・接待利用者が「ここに行きたい」と感じるビジュアル構成を意識します。",
                },
                {
                  type: "寿司店",
                  points: "カウンター席の写真・職人の手元写真はブランド価値を伝える最重要コンテンツです。「おまかせコース」「握り一貫からの注文可」などの形式情報を明記し、高単価層からファミリー層まで幅広い来店を促します。",
                },
                {
                  type: "中華料理店",
                  points: "ランチセットの写真と価格を投稿することでランチタイムの集客効率が上がります。テイクアウト対応・出前対応の属性設定と、デリバリーサービスへのリンク追加で複数の需要を取り込みます。",
                },
                {
                  type: "定食屋・食堂",
                  points: "日替わりメニューをGBP最新情報（投稿）で毎日or週数回更新することで検索エンジンへの活動シグナルを送り続けられます。「家庭的な味」「ボリューム満点」などの訴求ポイントを説明文に入れることも効果的です。",
                },
              ].map((item, i) => (
                <div key={i} style={{ background: "#FFFFFF", padding: "28px 24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{item.type}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.points}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              実装・改善フロー
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              初期設定から継続運用まで、飲食店のMEO対策を段階的に進めるための10ステップです。優先度順に整理しているため、上から順番に実施してください。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01", t: "GBPオーナー確認",
                  b: "まずGBPのオーナー権限を取得します。ハガキ・電話・即時確認のいずれかで認証を完了させてください。既存のGBPがある場合は重複登録がないか確認します。",
                },
                {
                  n: "02", t: "カテゴリ設定（主：料理ジャンル、副：提供形態）",
                  b: "メインカテゴリは「ラーメン店」「居酒屋」など最も近い業態を選択します。サブカテゴリには「テイクアウト専門店」「日本料理店」など関連カテゴリを2〜3個追加します。",
                },
                {
                  n: "03", t: "メニュー登録（料金・説明付き）",
                  b: "GBPのメニュー機能に料理名・価格・説明文・写真を登録します。ランチ・ディナー・コース・単品を分けてカテゴリ化することで検索マッチングが向上します。",
                },
                {
                  n: "04", t: "料理写真50枚以上の掲載",
                  b: "外観・内装・料理・スタッフ・メニューの各カテゴリで写真を用意します。料理写真は自然光・清潔な食器・引きと寄りの2パターンを揃えることで視覚的な訴求力が増します。",
                },
                {
                  n: "05", t: "席数・個室・駐車場などの属性設定",
                  b: "GBP属性で「席数」「個室あり」「禁煙席あり」「駐車場あり」「子供連れ歓迎」「バリアフリー」などを設定します。属性の充実は絞り込み検索でのヒット率に直結します。",
                },
                {
                  n: "06", t: "予約リンクの設定",
                  b: "食べログ・ホットペッパー・自社予約ページのURLをGBPの予約リンク欄に設定します。GBPから直接予約できる状態にすることで来店転換率が改善します。",
                },
                {
                  n: "07", t: "口コミ依頼フローの確立",
                  b: "会計時にQRコードカードを渡す・LINEで口コミリンクを送る・レシートに記載するなど、複数の依頼導線を設けます。スタッフ全員が依頼できるよう文言とフローを統一します。",
                },
                {
                  n: "08", t: "週1回の投稿（最新情報）計画",
                  b: "季節メニュー・キャンペーン・定休日変更・イベント情報を週1回ペースで投稿します。投稿には必ず写真を付け、CTAボタン（予約・詳細確認）を設定します。",
                },
                {
                  n: "09", t: "食べログ等とのNAP情報統一",
                  b: "食べログ・ホットペッパー・Retty・自社サイトのNAP（店名・住所・電話番号）をGBPと完全一致させます。表記ゆれ（株式会社 vs（株）など）も含めて統一します。",
                },
                {
                  n: "10", t: "月次インサイト確認と改善",
                  b: "GBPインサイトで検索クエリ・クリック数・ルート案内リクエスト・電話タップ数を月次で確認します。前月比で改善した指標・悪化した指標を把握し、次の施策に反映します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPI & Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              MEO対策の効果は感覚ではなく数値で確認します。以下の7つのKPIをGBPインサイトで定期的に計測し、施策の方向性を判断してください。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "GBP経由の予約数", where: "計測場所：GBPインサイト「予約」タブ / 予約システムの流入元分析", b: "GBPの予約リンクからの予約件数を週次・月次で計測します。予約数の増減が直接的なMEO効果の指標になります。" },
                { n: "02", t: "電話タップ数", where: "計測場所：GBPインサイト「電話」", b: "GBPのコール数はGBPの電話番号をタップした件数です。来店前の電話問い合わせが増えているほどGBPの露出が上がっているサインです。" },
                { n: "03", t: "ルート案内リクエスト数", where: "計測場所：GBPインサイト「ルートリクエスト」", b: "ユーザーが「道案内」を押した回数です。来店を真剣に検討したユーザー数に近い指標で、月次推移で改善を確認します。" },
                { n: "04", t: "写真閲覧数", where: "計測場所：GBPインサイト「写真」", b: "写真がどれだけ閲覧されているかを計測します。写真を追加するたびに閲覧数が増える傾向があり、投稿活動の成果指標になります。" },
                { n: "05", t: "口コミ数・評価平均", where: "計測場所：GBP管理画面「口コミ」タブ", b: "口コミの総数と評価平均スコアを月次で記録します。競合と比較することで自店の相対的な強み・弱みが把握できます。" },
                { n: "06", t: "最新情報投稿クリック数", where: "計測場所：GBP各投稿の「詳細を表示」クリック数", b: "投稿（最新情報）のクリック数はコンテンツの訴求力を測る指標です。写真の有無・キャッチコピーによってクリック率が変わります。" },
                { n: "07", t: "競合比較（口コミ数・写真数）", where: "計測場所：Googleマップで競合GBPを手動確認", b: "競合店舗と自店のGBPを比較し、口コミ数・写真数・更新頻度の差を把握します。差が大きい部分から優先的に改善します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.t}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", marginBottom: "8px", fontStyle: "italic" }}>{item.where}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MEO Matters */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why MEO Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              飲食店にMEO対策が特に重要な理由
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px", maxWidth: "900px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                飲食店を探すユーザーの検索行動は「今・近く・今日」という即時性が高い特徴があります。「渋谷 ランチ 1000円以内」「新宿 居酒屋 今日 予約」など、具体的な場所と時間軸を含む検索が多く、Googleマップで上位に表示されることが集客に直結します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                食べログやホットペッパーと異なり、GBP（Googleビジネスプロフィール）の管理は基本無料です。適切な設定と継続的な運用で、広告費をかけずに集客を増やせる可能性があります。グルメサイトのコストを抑えつつ集客を維持・拡大したい飲食店にとって最も費用対効果の高い施策です。
              </p>
            </div>
          </div>
        </section>

        {/* CTA inline */}
        <section style={{ background: "#0d1b2a", padding: "60px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#FFFFFF", fontWeight: 700 }}>
              飲食店のMEO対策、まずは現状診断から
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9", maxWidth: "520px" }}>
              GBPの現状・競合との差・改善優先度を無料でお伝えします。飲食店専門のMEOコンサルタントがご対応します。
            </p>
            <Link href="/contact" style={{ display: "inline-block", padding: "14px 40px", background: "#0F172A", color: "#FFFFFF", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", border: "1px solid rgba(196,184,154,0.4)", textDecoration: "none" }}>
              無料診断を依頼する
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="飲食店のMEO対策ご相談"
          body="飲食店のGoogleマップ集客・口コミ対策・GBP最適化を支援します。現在の状況と競合を確認したうえで、具体的な改善プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
