import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "美容室・美容サロンのMEO対策｜Googleマップで新規集客と再来店促進",
  description: "美容室・ネイルサロン・エステのGoogleマップ集客。GBPでの施術メニュー設定・ビフォーアフター写真・口コミ管理・予約連携など美容サロン特有のMEO対策を徹底解説。",
  keywords: ["美容室 MEO対策", "ヘアサロン Googleマップ", "美容室 集客", "サロン GBP最適化", "ネイルサロン MEO", "美容室 口コミ対策"],
  openGraph: {
    title: "美容室・美容サロンのMEO対策｜Googleマップで新規集客と再来店促進",
    description: "美容室・ネイルサロン・エステのGoogleマップ集客。GBPでのサービス設定・施術写真・口コミ管理・予約連携など美容サロン特有のMEO対策を徹底解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/beauty-salon-meo" },
};

const faqItems = [
  {
    q: "美容室でMEO対策をすると具体的にどんな効果がありますか？",
    a: "「〇〇市 美容室」「〇〇駅 ヘアサロン」などでGoogleマップ上位に表示されるようになります。新規顧客の来店・電話予約・Web予約の増加につながります。ホットペッパービューティ依存から脱却し、集客コストを削減する効果もあります。",
  },
  {
    q: "ホットペッパービューティとMEO対策はどちらが重要ですか？",
    a: "両方を活用することが理想です。ホットペッパービューティは集客プラットフォームとして有効ですが、掲載費用がかかります。MEO対策はGBPを適切に管理することで無料で集客できるため、コスト効率が高く、中長期的な集客基盤の構築に向いています。",
  },
  {
    q: "施術写真はどのくらい投稿すればいいですか？",
    a: "最低10枚以上、できれば30〜50枚の施術写真（ビフォーアフター・スタイル別）を用意します。ヘアカラー・パーマ・ヘアセットなどカテゴリ別に整理された写真が効果的です。施術後の写真だけでなくビフォーアフターのセットで掲載するとより訴求力が上がります。",
  },
  {
    q: "スタイリストごとのGBPを作ることはできますか？",
    a: "1店舗につき1つのGBPが基本です。スタイリスト個人のInstagramやSNSでフォロワーを獲得し、そこからGBPや予約ページへ誘導する方法が一般的です。GBP内のサービス説明欄にスタッフ名を記載し指名予約を促すことも可能です。",
  },
  {
    q: "悪い口コミがついた場合どうすればいいですか？",
    a: "削除を要求するのではなく、誠実な返信を心がけます。謝罪と改善策を記載した返信は、未来の顧客への信頼度を高めます。Googleが規約違反（スパム等）と判断した口コミは削除申請できます。返信文にはサロン名・特徴を自然に盛り込むことでSEO効果も得られます。",
  },
  {
    q: "GBPに「美容室」と「ネイルサロン」の両方を登録できますか？",
    a: "1つのGBPで複数のサービスを提供している場合、メインカテゴリを最も売上構成が高い業態（美容室など）にし、サブカテゴリにネイルサロン・エステサロンを追加します。サービス欄で全メニューを網羅的に登録することが重要です。",
  },
  {
    q: "美容室のGBPで「特別営業時間」はいつ設定すべきですか？",
    a: "年末年始・祝日・スタッフ研修日・臨時休業日に設定します。特別営業時間が未設定だと通常の営業時間として表示され、来店したのに閉まっていたというトラブルが発生します。変更が決まったタイミングで即時設定するフローを整備しましょう。",
  },
  {
    q: "新規オープンのサロンでも口コミを増やせますか？",
    a: "オープン直後は知人・スタッフの家族・初来店の顧客に積極的に口コミを依頼します。QRコードカード配布・LINE公式アカウントへの誘導・次回予約時の声がけなど複数の依頼導線を作ることが重要です。5〜10件の口コミ獲得が最初の目標です。",
  },
  {
    q: "美容室のGBP説明文はどう書けばいいですか？",
    a: "サロンのコンセプト・特徴・代表的な施術・スタッフ数・アクセス情報を750文字以内で記載します。「〇〇駅徒歩2分の縮毛矯正特化サロン」「メンズカット・ネイル対応の地域密着型ヘアサロン」など検索キーワードを自然に含めることが重要です。",
  },
  {
    q: "GBPの更新頻度はどのくらいが適切ですか？",
    a: "週1回以上の最新情報（投稿）更新が理想です。キャンペーン情報・スタッフ紹介・施術写真追加を組み合わせることで継続的な更新シグナルをGoogleに送り続けられます。投稿は7日で期限が切れるため週次の習慣化が効果的です。",
  },
  {
    q: "美容室でMEO対策に取り組む前に最低限整えるべきことは何ですか？",
    a: "GBPのオーナー確認・正確な基本情報（住所・電話番号・営業時間）の入力・外観写真最低2枚・内装写真2枚・施術写真5枚以上・サービス一覧の登録が最低限のスタートラインです。この基本情報が整ったうえで投稿・口コミ対策に進みます。",
  },
  {
    q: "競合サロンより口コミ評価が低い場合どうすればいいですか？",
    a: "低評価の原因を分析し、接客・技術・清潔感など改善できる部分を特定します。並行して新規の高評価口コミを積み上げる依頼活動を強化します。返信文の丁寧さと継続性が中長期的な評価改善につながります。",
  },
  {
    q: "サロンのロゴや外観写真はGBPのどこに使われますか？",
    a: "ロゴ画像はGBPプロフィール写真として検索結果に表示されます。外観写真は「オーナー提供写真」として優先表示される傾向があります。ユーザーが投稿した写真が目立つ場合は、オーナー側から品質の高い写真を多数アップロードして目立たせます。",
  },
  {
    q: "MEO対策とSEO対策はどちらを優先すべきですか？",
    a: "地域密着型の美容室であればMEO対策を先に整えることを推奨します。「〇〇駅 美容室」「〇〇市 ヘアサロン」などの地域キーワードではGoogleマップが上部に表示されるため、SEOより即効性があります。MEO基盤が整ったあとにSEOへ拡張するのが効率的です。",
  },
  {
    q: "美容室のGBPに予約ボタンを設置する方法は？",
    a: "GBP管理画面の「予約」タブからホットペッパービューティ・MINIMO・楽天ビューティ・LINE予約などの予約URL登録が可能です。Googleの予約パートナーとして登録されているサービスであれば「予約」ボタンがGBPに自動表示されます。",
  },
  {
    q: "美容室でInstagramとGBPを連携させる意味はありますか？",
    a: "GBPにInstagramのURLを記載することでGBPからInstagramへの誘導が可能です。Instagramで施術写真をシェアし、GBPの認知度を高めるクロスプロモーションが集客効果を高めます。口コミ依頼やキャンペーン告知をInstagramとGBP投稿で並行して行うことが効果的です。",
  },
  {
    q: "「駐車場あり」の属性設定はどこで行いますか？",
    a: "GBP管理画面の「情報」→「属性」セクションから設定できます。「無料駐車場あり」「有料駐車場あり（提携）」など詳細を選択できます。郊外型サロンでは駐車場の有無が来店判断に大きく影響するため、必ず正確に設定してください。",
  },
  {
    q: "MEO対策の費用対効果はどう測ればいいですか？",
    a: "GBP経由の新規来店数 × 客単価 × 再来店率でGBP経由の売上を推計します。MEO対策の費用（代行費用または自社工数）と比較することで費用対効果が算出できます。月次で計測し継続投資判断の根拠にします。",
  },
  {
    q: "美容室のGBPに複数スタッフを登録する方法はありますか？",
    a: "GBPにはスタッフ専用の登録機能はありませんが、「サービス」欄の説明文や「最新情報（投稿）」でスタッフ紹介を行うことができます。「スタッフ名 × 得意な施術」の投稿を定期的に行うことで指名予約の誘導が可能になります。",
  },
  {
    q: "美容室MEO対策を専門業者に依頼するメリットは何ですか？",
    a: "GBP最適化の最新動向への対応・競合との差分分析・定期投稿の代行・口コミ返信文の品質管理など、専門知識と継続運用を任せられます。現場スタッフの負担を最小化しながらMEO効果を最大化できる点が最大のメリットです。",
  },
];

const relatedLinks = [
  { href: "/industries/hair-salon", label: "ヘアサロンの集客支援", desc: "ヘアサロン向け総合支援" },
  { href: "/industries/beauty", label: "美容室のWeb集客", desc: "美容業向け総合支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信管理" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定の完全ガイド" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/restaurant-meo", label: "飲食店のMEO対策", desc: "飲食業界向けMEO" },
  { href: "/meo/nail-salon-meo", label: "ネイルサロンのMEO対策", desc: "ネイル業界向けMEO" },
  { href: "/meo/clinic-meo", label: "クリニックのMEO対策", desc: "医療機関向けMEO" },
  { href: "/meo/meo-audit", label: "MEO無料診断", desc: "現状診断サービス" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索対策" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化" },
  { href: "/aio/chatgpt-seo", label: "ChatGPT SEO", desc: "ChatGPT引用対策" },
  { href: "/services/web-design", label: "Webデザイン", desc: "サロンサイト制作" },
  { href: "/services/lp", label: "LP制作", desc: "ランディングページ" },
  { href: "/areas/tokyo", label: "東京のMEO対策", desc: "東京エリア対応" },
  { href: "/areas/osaka", label: "大阪のMEO対策", desc: "大阪エリア対応" },
  { href: "/areas/nagoya", label: "名古屋のMEO対策", desc: "名古屋エリア対応" },
  { href: "/areas/fukuoka", label: "福岡のMEO対策", desc: "福岡エリア対応" },
  { href: "/blog/meo-beauty-tips", label: "美容室MEOブログ", desc: "実践的なノウハウ" },
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
              <span style={{ color: "#374151" }}>美容室・サロンのMEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Beauty Salon MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              美容室・美容サロンのMEO対策｜<br />新規集客と再来店促進
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              美容室・ネイルサロン・エステを探すユーザーの多くはGoogleマップで「〇〇駅 美容室」「近く ネイルサロン」と検索しています。競合が多い美容業では、GBPの充実と口コミ管理が集客力の差を生みます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              ホットペッパービューティや楽天ビューティとは異なり、GBP（Googleビジネスプロフィール）の管理は無料で始められます。施術写真・サービス情報・口コミ返信・予約連携を整えることで、広告費を抑えながら継続的な集客が可能になります。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_21_48.png" alt="美容室・サロンのMEO対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              Googleマップで選ばれるサロンへ
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
                "美容サロンがGoogleマップ集客で直面する4つの課題とその構造",
                "美容室特有のGBPよくある課題10項目と優先順位の高い改善策",
                "カラー・縮毛矯正・ネイル・眉毛など施術ジャンル別のMEO活用ポイント",
                "GBPオーナー確認から月次効果確認まで10ステップの実装フロー",
                "新規来店・再来店・口コミ増加を数値で追うための7つのKPI",
                "美容室特有のFAQ20問——実際の現場で出る疑問に全て答えます",
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Salon MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              美容室・サロンのMEO対策で解決できる集客課題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "Googleマップで見つけてもらえない", b: "「○○市 美容室」「近くの美容室」で検索した際にローカルパックに表示されないサロンは、そのユーザーには存在しないも同然です。MEO対策で検索上位に入ることが集客の入口です。" },
                { t: "口コミが少なく選ばれない", b: "美容室選びで口コミは最重要の判断材料です。口コミが5件以下のサロンは競合に比べて大きく不利です。来店後の口コミ依頼導線を設計することが継続的な集客につながります。" },
                { t: "施術写真が少なく魅力が伝わらない", b: "施術写真・内装・スタッフの写真が不足していると、ユーザーが安心して来店を決断できません。美容室のGBPは写真数と品質が他業種より特に重要で、ビフォーアフターが最も訴求力を持ちます。" },
                { t: "ホットペッパー依存で集客コストが高い", b: "掲載費が高騰するプラットフォームに頼り続けるリスクがあります。GBP経由の直接予約が増えるほど集客コストを大幅に圧縮でき、利益率の改善につながります。" },
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
              美容室・美容サロンのGBP運用でよく見られる課題と、その原因・影響をまとめました。改善優先度の高いものから着手してください。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01", t: "施術メニューが未登録",
                  b: "カット・カラー・パーマ・縮毛矯正などの施術メニューがGBPに登録されていないと、「縮毛矯正 安い」「ネイル 〇〇駅」などの具体的な施術名検索でヒットしません。メニュー登録は集客の基盤です。",
                },
                {
                  n: "02", t: "ビフォーアフター写真がない",
                  b: "美容サロンにおいてビフォーアフター写真は「このサロンで変われる」という期待感を生む最強のコンテンツです。施術後の写真だけでは伝わらない変化量を示せるため、必ずビフォーアフターセットで掲載します。",
                },
                {
                  n: "03", t: "ホットペッパービューティとNAP不一致",
                  b: "ホットペッパービューティ・楽天ビューティ・MINIMO・自社サイトとGBPのNAP（店名・住所・電話番号）が一致していないと、Googleが情報の信頼性を低く評価します。全プラットフォームで表記を統一してください。",
                },
                {
                  n: "04", t: "スタッフ紹介がない",
                  b: "スタッフ紹介がないGBPは「誰が担当してくれるかわからない」という不安を与えます。GBP投稿でのスタッフ紹介・得意な施術の告知が指名予約の増加と信頼構築につながります。",
                },
                {
                  n: "05", t: "口コミ依頼をしていない",
                  b: "口コミは自然に集まることは稀です。来店後にQRコードカード配布・LINE送信・次回予約時の声がけなど、積極的な依頼導線を設けることで口コミ数を継続的に増やせます。",
                },
                {
                  n: "06", t: "特定スタッフへの集客ができていない",
                  b: "人気スタッフへの集中予約・新人スタッフの稼働不足という課題をGBP投稿で解消できます。スタッフ別の施術紹介・空き枠案内をGBP最新情報で定期的に告知することが有効です。",
                },
                {
                  n: "07", t: "「駐車場あり」などの属性未設定",
                  b: "駐車場・バリアフリー・女性専用・男性可などの属性が未設定だと絞り込み検索でのヒット率が下がります。郊外型サロンでは特に駐車場情報が来店判断に直結します。",
                },
                {
                  n: "08", t: "キャンペーン投稿がない",
                  b: "新規限定・期間限定のキャンペーン情報をGBP投稿で告知することで、検索ユーザーへの訴求力が増します。投稿は7日で期限切れになるため週次での更新習慣が必要です。",
                },
                {
                  n: "09", t: "口コミへの返信が事務的",
                  b: "「ありがとうございました」だけの返信は来店候補者への訴求力がありません。施術内容・スタッフへの言及・再来店への誘いを含む個別返信が、次の顧客への信頼メッセージになります。",
                },
                {
                  n: "10", t: "定休日・営業時間変更の更新漏れ",
                  b: "スタッフ休暇・研修・祝日の時間変更をGBPに反映し忘れると、来店したのに閉まっていたというトラブルが発生します。変更確定後すぐにGBPの「特別営業時間」を更新するフローを確立します。",
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

        {/* Section C: サービス別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Service Type</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              施術ジャンル別の活用ポイント
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "600px" }}>
              美容サロンのMEO対策は取り扱うサービスによって重要なポイントが異なります。自店舗の主力施術に合わせた最適化を行うことで集客の精度が上がります。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "#E8E4DC", border: "1px solid #E8E4DC" }}>
              {[
                {
                  type: "カラー専門サロン",
                  points: "施術例・色見本写真を豊富に掲載することが最優先です。ブリーチあり・なしの色別ポートフォリオをカテゴリ別に整理し、「イルミナカラー」「インナーカラー」などトレンド施術名をメニュー欄に登録することで指名検索を取り込みます。",
                },
                {
                  type: "縮毛矯正特化サロン",
                  points: "ビフォーアフター写真がコンバージョンに直結します。くせ毛の種類別（波状毛・捻転毛・縮毛）のビフォーアフターを揃え、「持続期間」「ダメージレス」などの訴求ポイントをサービス説明欄に記載します。",
                },
                {
                  type: "ネイルサロン",
                  points: "デザインポートフォリオの充実が集客の柱です。季節・トレンド・長さ別・ジャンル別（シンプル・大人かわいい・韓国系）に写真を整理して投稿します。「ジェルネイル」「ネイルアート」など具体的なメニュー名の登録も重要です。",
                },
                {
                  type: "眉毛サロン",
                  points: "ビフォーアフター写真と施術メニューの詳細登録が必須です。「眉毛ワックス」「眉毛スタイリング」「メンズ眉毛」など多様な施術名を登録し、男性ユーザーへの訴求も意識します。初回体験価格のキャンペーン投稿も効果的です。",
                },
                {
                  type: "まつ毛エクステサロン",
                  points: "デザイン例の写真（長さ・カール・本数別）を豊富に掲載します。「持続期間3〜4週間」「アレルギーテスト実施」などの安心感を示す情報をサービス説明欄に記載し、初回来店のハードルを下げます。",
                },
                {
                  type: "リラクゼーションサロン",
                  points: "施術内容の説明よりも空間の雰囲気・清潔感を伝える内装写真が重要です。「個室完備」「アロマ使用」「女性専用」などの属性設定を整え、リラックス空間の写真でユーザーの「行きたい」気持ちを刺激します。",
                },
                {
                  type: "ヘアメイクサロン",
                  points: "結婚式・成人式・卒業式・パーティーなどシーン別の実績写真を整理して掲載します。「前撮り対応」「出張ヘアメイク可」などの属性をサービス説明欄に記載し、特定シーズンの需要を集中的に取り込みます。",
                },
                {
                  type: "メンズ特化サロン",
                  points: "メンズカット・ビジネスシーン対応・整髪料の説明をメニュー欄に登録します。「男性専用」「スーツ姿でも入りやすい」などの安心感を伝えるコンテンツが新規来店のハードルを下げます。「メンズ 美容室 〇〇駅」の検索需要を意識したキーワード選定が重要です。",
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
              初期設定から継続運用まで、美容サロンのMEO対策を段階的に進めるための10ステップです。優先度順に整理しているため、上から順番に実施してください。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01", t: "GBPオーナー確認",
                  b: "GBPのオーナー権限を取得します。ハガキ・電話・即時確認のいずれかで認証を完了させてください。既存のGBPが重複している場合はGoogleに統合申請を行います。",
                },
                {
                  n: "02", t: "カテゴリ設定（美容室/ヘアサロン/ネイルサロン等）",
                  b: "メインカテゴリは「美容室」「ヘアサロン」「ネイルサロン」など最も近い業態を選択します。サブカテゴリには「まつ毛エクステサロン」「エステサロン」など提供サービスに合わせて追加します。",
                },
                {
                  n: "03", t: "メニュー・料金登録",
                  b: "GBPのサービス機能にカット・カラー・パーマ・トリートメント・ネイルなど全施術を価格とともに登録します。「縮毛矯正」「ヘッドスパ」など具体的な施術名を含めることで検索マッチングが向上します。",
                },
                {
                  n: "04", t: "施術写真30枚以上（カテゴリ別）",
                  b: "カラー・パーマ・ストレート・ネイルなどカテゴリ別に施術写真を30枚以上用意します。ビフォーアフターセットで掲載し、外観・内装・施術スペースの写真も組み合わせます。",
                },
                {
                  n: "05", t: "スタッフ写真の掲載",
                  b: "スタッフの笑顔写真・施術中の写真を掲載します。「どんな人が担当してくれるか」を事前に伝えることで来店ハードルが下がり、初来店の不安を解消します。",
                },
                {
                  n: "06", t: "予約リンクの設定",
                  b: "ホットペッパービューティ・MINIMO・楽天ビューティ・LINE予約などの予約URLをGBPに設定します。「今すぐ予約」ボタンから直接予約できる状態を整えます。",
                },
                {
                  n: "07", t: "口コミ依頼（来店後LINE/カード配布）",
                  b: "会計時にGBP口コミページへのQRコードカードを渡す・施術後のLINEで口コミリンクを送るなど複数の依頼導線を設けます。全スタッフが自然に依頼できるよう文言とタイミングを統一します。",
                },
                {
                  n: "08", t: "週1投稿（キャンペーン・スタッフ紹介）",
                  b: "季節キャンペーン・新メニュー告知・スタッフ紹介・空き枠案内を週1回ペースで投稿します。写真付きの投稿はクリック率が向上するため必ず1枚以上の写真を添付します。",
                },
                {
                  n: "09", t: "ホットペッパービューティとNAP統一",
                  b: "ホットペッパービューティ・楽天ビューティ・MINIMO・自社サイトのNAP情報をGBPと完全一致させます。店名の表記（株式会社・有限会社の有無など）も含めて統一します。",
                },
                {
                  n: "10", t: "月次効果確認",
                  b: "GBPインサイトで検索クエリ・クリック数・ルート案内・電話タップ数を月次で計測します。前月比の変化と競合GBPの変化を比較し、次月の施策優先度を決定します。",
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
              MEO対策の効果を感覚ではなく数値で確認します。以下の7つのKPIをGBPインサイトで定期的に計測し、施策の方向性を判断してください。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "GBP経由の予約数", where: "計測場所：GBPインサイト「予約」タブ / 予約システムの流入元分析", b: "GBPの予約リンクからの予約件数を週次・月次で計測します。ホットペッパービューティ経由との比較で、GBP集客の費用対効果を把握できます。" },
                { n: "02", t: "新規来店者数（GBP経由）", where: "計測場所：予約時の来店経路アンケート / POSデータ", b: "来店時の「どこで知りましたか？」アンケートでGBP経由の新規来店数を計測します。月次で積み上げて集客コストと比較します。" },
                { n: "03", t: "写真閲覧数", where: "計測場所：GBPインサイト「写真」", b: "施術写真の閲覧数は潜在顧客がどれだけGBPの内容に興味を持っているかの指標です。写真追加後の閲覧数変化で投稿効果を確認できます。" },
                { n: "04", t: "口コミ数・平均評価", where: "計測場所：GBP管理画面「口コミ」タブ", b: "口コミ総数と評価平均スコアを月次で記録します。競合サロンと比較することで自店の相対的な強み・弱みが把握できます。" },
                { n: "05", t: "予約リンクタップ数", where: "計測場所：GBPインサイト「予約」/ 予約サービスの流入解析", b: "GBPからの予約リンクタップ数は「来店を真剣に検討したユーザー数」に近い指標です。予約リンクの改善（複数導線設置など）で増加を図ります。" },
                { n: "06", t: "電話タップ数", where: "計測場所：GBPインサイト「電話」", b: "GBPの電話番号へのタップ数は当日予約・急ぎの問い合わせの指標です。電話タップが増えていればGBPの露出が上がっているサインです。" },
                { n: "07", t: "競合比較（施術写真数・口コミ数）", where: "計測場所：Googleマップで競合GBPを手動確認", b: "近隣競合サロンと施術写真数・口コミ数・更新頻度を比較します。差が大きい項目を特定し、優先的に改善することで競合優位性を高めます。" },
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
              美容室にMEO対策が必要な理由
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "来店前にGoogleマップで比較される", b: "新規顧客の大半は来店前にGoogleマップで近隣サロンを比較します。写真・口コミ・評価・メニューが充実しているサロンほど選ばれる確率が上がります。" },
                { n: "02", t: "「今すぐ探している」ユーザーに届く", b: "当日・翌日の予約を取りたいユーザーは「近く 美容室 空き」と検索します。MEO上位表示により、購買意欲の高い顧客をゼロコストで取り込めます。" },
                { n: "03", t: "ホットペッパー依存からの脱却", b: "掲載費が高騰するプラットフォームに頼り続けるリスクを減らせます。GBP経由の直接予約が増えるほど集客コストを大幅に圧縮し、利益率の改善につながります。" },
                { n: "04", t: "口コミが長期的な資産になる", b: "積み上げた口コミ・高評価は競合が簡単には真似できない強みです。誠実な返信と高品質な施術を続けることで自然と口コミが増え、集客の好循環が生まれます。" },
                { n: "05", t: "地域のブランド認知度が高まる", b: "Googleマップ上位に継続表示されることで、エリア内での認知度が自然に高まります。「あの地域で有名なサロン」としての地位を築けます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA inline */}
        <section style={{ background: "#0d1b2a", padding: "60px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#FFFFFF", fontWeight: 700 }}>
              美容室・サロンのMEO対策、まずは現状診断から
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9", maxWidth: "520px" }}>
              GBPの現状・競合との差・改善優先度を無料でお伝えします。美容業界専門のMEOコンサルタントがご対応します。
            </p>
            <Link href="/contact" style={{ display: "inline-block", padding: "14px 40px", background: "#0F172A", color: "#FFFFFF", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", border: "1px solid rgba(196,184,154,0.4)", textDecoration: "none" }}>
              無料診断を依頼する
            </Link>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="美容室・サロンのMEO対策ご相談"
          body="美容室・ネイルサロン・エステのGoogleマップ集客をサポートします。GBP最適化・口コミ対策・写真投稿・予約連携まで一括でご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
