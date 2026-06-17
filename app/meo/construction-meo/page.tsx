import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "建設・リフォーム・工務店のMEO対策｜地域工事依頼を増やすGoogleマップ戦略｜株式会社サイプレス",
  description: "建設業・工務店・リフォーム会社のMEO対策。施工事例写真・対応エリア設定・口コミ獲得・資格情報掲載など建設業特有のGBP最適化で地域からの問い合わせを増やします。",
  keywords: ["工務店 MEO対策", "建設業 Googleマップ", "リフォーム 集客", "建設会社 GBP最適化", "外壁塗装 MEO", "工務店 Googleマップ"],
  openGraph: {
    title: "建設・リフォーム・工務店のMEO対策｜地域工事依頼を増やすGoogleマップ戦略｜株式会社サイプレス",
    description: "建設業・工務店・リフォーム会社のMEO対策。施工事例写真・対応エリア設定・口コミ獲得・資格情報掲載など建設業特有のGBP最適化で地域からの問い合わせを増やします。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/construction-meo" },
};

const faqItems = [
  {
    q: "建設業でMEO対策は効果がありますか？",
    a: "はい。「〇〇市 工務店」「〇〇区 リフォーム」などの地域検索でGoogleマップ上位に表示されることで、問い合わせが増加します。特に地域密着型の工務店・リフォーム会社には効果的です。施工実績写真と口コミを充実させることが最優先施策です。",
  },
  {
    q: "施工エリアが広い場合のGBP設定はどうすればいいですか？",
    a: "サービス提供エリアの設定で、施工対象の市区町村を追加します。ただし距離が離れるほど表示されにくくなるため、Webサイトに各エリアのページを作ることで補完します。エリアを絞り込んでGBPのローカル性を高める戦略も有効です。",
  },
  {
    q: "建設業で口コミを集めるのが難しいのですが？",
    a: "施主様に施工完了後にメール・LINE・ハガキでお礼をお送りする際、口コミのお願いを添えます。QRコードを記載した口コミ依頼カードを手渡しするのも効果的です。担当者から直接お願いすることで応諾率が上がります。",
  },
  {
    q: "建設業許可番号はGBPに記載できますか？",
    a: "GBPの説明文に建設業許可番号・一級建築士事務所登録番号などを記載できます。信頼性・専門性のアピールになり、問い合わせ前の安心感を高めます。資格・認定情報の記載は他の建設業者との差別化にもなります。",
  },
  {
    q: "リフォームと新築のGBPは別に作るべきですか？",
    a: "通常は1拠点1GBPが推奨です。リフォーム・新築・外構など複数事業を扱う場合は、GBPのサービス欄に全事業を登録し、Webサイトに各ページを作って対応します。拠点が複数ある場合は各拠点ごとにGBPを作成します。",
  },
  {
    q: "ビフォーアフター写真はGBPに掲載できますか？",
    a: "はい、建設業のGBPにビフォーアフター写真は掲載できます。施工前・施工後を比較できる写真は問い合わせ前の信頼獲得に最も効果的です。外壁塗装・水回りリフォーム・フローリング張替えなど工種別に整理して掲載することをお勧めします。",
  },
  {
    q: "GBPの「無料見積もり」ボタンはどう設定しますか？",
    a: "GBPのサービス欄に「無料見積もり」を登録し、ウェブサイトの見積もり依頼フォームURLをGBPの「ウェブサイト」欄に設定します。また、GBPの「予約」URL機能を見積もり依頼フォームのURLに設定することで、見積もりボタンとして機能させることができます。",
  },
  {
    q: "建設業のGBP投稿にはどのような内容が適していますか？",
    a: "完成した施工事例（ビフォーアフター）・お客様の声・季節のメンテナンス情報（外壁点検・屋根点検など）・地域イベントへの参加情報などが適しています。月1回以上の投稿がGoogleからの評価向上につながります。",
  },
  {
    q: "BtoB中心の建設会社でもMEO対策は必要ですか？",
    a: "BtoB比率が高い会社でも、MEO対策は有効です。発注担当者もGoogleマップで業者を探すことが多く、口コミ・実績写真・資格情報の充実は法人からの問い合わせにも影響します。地域でのブランド認知向上にも貢献します。",
  },
  {
    q: "競合他社より口コミが少ない場合、何から始めるべきですか？",
    a: "まず既存の顧客・取引先に口コミをお願いするフローを整えます。施工完了後のお礼メールにGoogleマップのレビューURLを記載する・口コミ依頼カードを手渡しするなど、タイミングと手段を標準化することで継続的に口コミが集まります。",
  },
  {
    q: "Googleマップでの口コミに返信する際の注意点は？",
    a: "良い口コミには感謝と施工内容への言及を添えた返信を行います。悪い口コミには感情的に反論せず、改善姿勢と連絡先を示す丁寧な返信を行います。返信は第三者（他の見込み客）が読むことを意識して書くことが重要です。",
  },
  {
    q: "外壁塗装や屋根工事は季節によって問い合わせが変わりますか？",
    a: "はい、外壁塗装・屋根工事は春〜秋が繁忙期で、冬は問い合わせが減ります。季節に合わせてGBP投稿・写真更新・属性設定を最適化することで、オフシーズンの集客も維持できます。梅雨前・台風後などタイムリーな投稿が特に効果的です。",
  },
  {
    q: "事務所の住所が施工エリアと離れている場合はどうすればいいですか？",
    a: "GBPのサービス提供エリアに施工対象の市区町村を追加設定します。Webサイトには対応エリアごとの施工実績ページを作成し、エリア名を含む検索キーワードへの対応を補完します。Googleは住所からの距離だけでなく、サービスエリア設定やウェブサイトの情報も評価します。",
  },
  {
    q: "建設業許可・一級建築士・各種資格はどこに記載すればいいですか？",
    a: "GBPの説明文・サービス欄に建設業許可番号・資格・認定情報を記載します。ウェブサイトにも資格一覧ページを作成し、GBPからリンクを設定します。見込み客が発注前の安心材料として確認するため、詳細な記載が信頼性向上につながります。",
  },
  {
    q: "GBPの写真は何枚くらい掲載すればいいですか？",
    a: "最低でも20枚以上、できれば50枚以上を目指します。外観・スタッフ・施工前・施工中・施工後・会社の雰囲気など多様なカテゴリで掲載します。写真が多いGBPは検索結果での目立ちやすさとユーザーの滞在時間に直接影響します。",
  },
  {
    q: "MEO対策の効果が出るまでどのくらいかかりますか？",
    a: "GBP情報の整備・写真追加は数週間以内に反映されます。口コミ獲得・投稿の継続効果は3〜6ヶ月単位で積み上がります。競合の多い地域では6ヶ月〜1年の継続施策が必要です。インサイトデータを月次で確認しながら改善を続けることが重要です。",
  },
  {
    q: "ドローン撮影の写真はGBPに掲載できますか？",
    a: "はい、屋根工事・外壁工事・大規模施工の空撮写真はGBPに掲載できます。ドローン撮影による施工範囲の全体像・高所作業の様子は技術力を視覚的に伝える効果があり、他の工務店との差別化につながります。",
  },
  {
    q: "解体業・産廃業者のMEO対策で特別に必要なことはありますか？",
    a: "解体業許可・産業廃棄物処理業許可番号をGBPに記載することで、法令遵守を示せます。解体前後の写真・廃棄物の適正処理に関する情報を掲載し、発注者の不安を解消します。近隣への配慮・防音・防塵対策の説明も信頼性アップに有効です。",
  },
  {
    q: "新築工務店とリフォーム専門業者でMEO戦略は変わりますか？",
    a: "新築工務店はモデルハウス・完成物件の写真・間取り提案力を前面に出します。リフォーム専門業者はビフォーアフター写真・口コミ・対応工事の幅広さが重要です。どちらも施工エリアのローカル性と実績の視覚化が核心施策です。",
  },
  {
    q: "MEO対策とSEO（ウェブサイト）を組み合わせるメリットは？",
    a: "MEO対策はGoogleマップのローカルパック表示を最適化し、SEOはウェブサイトの検索順位を上げます。両方を組み合わせることで、「〇〇市 工務店」の検索結果でマップとウェブサイトの両方に表示される状態を作れます。エリアページ・施工事例ページをウェブサイトに作ることでMEOの補強にもなります。",
  },
];

const relatedLinks = [
  { href: "/industries/construction", label: "建設業のWeb集客", desc: "建設業向け総合支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード対策" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定・管理" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "施工写真の最適化" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信支援" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/clinic-meo", label: "クリニックのMEO対策", desc: "医療機関向けMEO" },
  { href: "/meo/restaurant-meo", label: "飲食店のMEO対策", desc: "飲食店向けGBP最適化" },
  { href: "/meo/beauty-meo", label: "美容室のMEO対策", desc: "サロン向けMEO" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス詳細" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索対策" },
  { href: "/seo/area-page", label: "エリアページSEO", desc: "施工エリアページ作成" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "ChatGPT・Gemini対策" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "施工事例コンテンツ制作" },
  { href: "/services/web-design", label: "Webデザイン", desc: "工務店サイト制作" },
  { href: "/industries/renovation", label: "リフォーム業のWeb集客", desc: "リフォーム業向け支援" },
  { href: "/areas/tokyo", label: "東京のMEO対策", desc: "東京都内対応" },
  { href: "/areas/osaka", label: "大阪のMEO対策", desc: "大阪府内対応" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "MEO対策のご相談" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#F9F8F5" }} className="pt-32 pb-20">
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>建設・リフォーム・工務店のMEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Construction MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              建設・リフォーム・工務店のMEO対策<br />
              地域工事依頼を増やすGoogleマップ戦略
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「〇〇市 工務店」「〇〇区 リフォーム 評判」——地域の建設会社・工務店を探す人の多くはGoogleマップを使います。施工実績の写真と信頼できる口コミが、受注につながる問い合わせを生み出します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              建設業はホームページを持っていても更新が少なく、Googleマップで競合に埋もれてしまうケースが多くあります。GBPの施工実績写真・対応エリア設定・資格情報・口コミ対応を整備することで、検索ユーザーから「信頼できる地域の業者」として選ばれやすくなります。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="建設・リフォーム・工務店のMEO対策"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              地域から選ばれる工務店へ
            </p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "建設業・工務店・リフォーム会社がMEO対策で地域の問い合わせを増やす具体的な方法",
                "施工実績写真（ビフォーアフター）を使ってGBPの信頼性を高める手順",
                "カテゴリ設定・施工エリア設定・資格情報の正しいGBP最適化のポイント",
                "口コミが集まりにくい建設業で継続的にレビューを獲得するための仕組み",
                "外壁塗装・水回りリフォーム・新築工務店など業種別のMEO活用ポイント",
                "GBPインサイトを活用して見積もり依頼数・電話タップ数を計測・改善する方法",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Risks (dark) */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Construction MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              工務店・建設業がMEO対策で失っている4つの集客機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                {
                  t: "「○○市 工務店」で見つけてもらえない",
                  b: "外壁塗装・リフォーム・新築を検討している地域住民は必ずGoogleマップで近くの工務店を検索します。ローカルパックに入れない工務店は、最も購買意欲の高いユーザーを取り逃しています。",
                },
                {
                  t: "施工写真がなく信頼感が伝わらない",
                  b: "建設・リフォームは高額発注のため、見込み客は実績写真を最重要視します。GBPに施工前後のビフォーアフター写真がないと、実力が伝わらず問い合わせに至りません。",
                },
                {
                  t: "口コミがゼロで選ばれない",
                  b: "建設業は信頼が選択の根拠になります。口コミが少ない工務店は「本当に大丈夫か」という不安が払拭されず、問い合わせを他社に持っていかれます。",
                },
                {
                  t: "完工実績がGoogleに伝わっていない",
                  b: "GBPの定期投稿機能を使って施工実績・お客様の声・季節のメンテナンス情報を発信することで、Googleからの評価とユーザーの信頼が同時に高まります。",
                },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "「建設会社」と「リフォーム業者」のカテゴリ混在",
                  b: "「建設会社」という大分類のカテゴリだけを設定すると、「リフォーム」「外壁塗装」など具体的なサービスの検索でヒットしにくくなります。提供するサービスに対応した具体的なカテゴリを優先設定することが重要です。",
                },
                {
                  n: "02",
                  t: "施工エリアが広すぎてローカル性が弱い",
                  b: "「関東全域」「全国対応」などと設定するとGBPのローカル信号が弱まり、特定エリアの検索でヒットしにくくなります。実際に受注できるエリアを市区町村単位で明確に設定することで、地域検索への適合度が上がります。",
                },
                {
                  n: "03",
                  t: "施工事例写真がない",
                  b: "工事の実績が視覚的に伝わらないGBPは、問い合わせ前の比較検討段階で脱落します。特に高額案件の建設・リフォームでは、施工前後のビフォーアフター写真が最も重要な信頼構築要素です。",
                },
                {
                  n: "04",
                  t: "見積もり依頼フォームとGBPが連携していない",
                  b: "GBPの「予約」URLや「ウェブサイト」リンクが、無料見積もり依頼フォームに直結していないと、問い合わせ意欲の高いユーザーが離脱します。GBPから直接見積もり依頼できる導線設計が問い合わせ数向上の鍵です。",
                },
                {
                  n: "05",
                  t: "口コミが極端に少ない（BtoB取引中心）",
                  b: "下請け・BtoB取引が中心の建設会社では、個人からの口コミが集まりにくいです。自社で直接施工した個人宅・小規模工事の施主様を対象に口コミ依頼フローを整備することで、少しずつ積み上げられます。",
                },
                {
                  n: "06",
                  t: "住所が事務所所在地のみで施工エリアと乖離",
                  b: "本社が郊外・工業団地にあり、施工エリアが都心部の場合、GBPの住所ベースのローカル検索で不利になります。GBPのサービス提供エリアの設定とウェブサイトのエリアページで補完することが必要です。",
                },
                {
                  n: "07",
                  t: "職人写真・会社写真がない",
                  b: "スタッフ・職人の写真がないGBPは「どんな人が来るかわからない」という不安を生みます。現場作業中の職人写真・会社集合写真・社長メッセージの写真を掲載することで、人柄と誠実さが伝わります。",
                },
                {
                  n: "08",
                  t: "「無料見積もり」属性の未設定",
                  b: "GBPのサービス欄に「無料見積もり」を登録することで、費用確認の心理的ハードルを下げられます。初めてリフォームを検討している層は「まず気軽に相談できるか」を重視します。",
                },
                {
                  n: "09",
                  t: "競合他社の方が地元に多い写真を持っている",
                  b: "Googleは写真の多いGBPを活発なビジネスと評価します。競合が50枚の施工写真を持っているのに自社が5枚では、ユーザーの比較検討段階で不利です。定期的な施工写真の追加を運用ルールにすることが重要です。",
                },
                {
                  n: "10",
                  t: "受賞・資格情報の未掲載",
                  b: "建設業許可番号・一級建築士事務所登録・住宅瑕疵担保責任保険・各メーカー認定資格などをGBPに記載していないと、専門性・安全性のアピール機会を失います。発注前の信頼確認要素として必ず記載します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
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

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Service Type</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "外壁塗装",
                  b: "施工前後の色味の変化がわかるビフォーアフター写真と色見本の掲載が最重要です。季節の外壁メンテナンス情報投稿・塗装工事の保証年数・使用塗料ブランドの記載で競合との差別化を図ります。",
                },
                {
                  n: "02",
                  t: "水回りリフォーム（キッチン・浴室・トイレ）",
                  b: "キッチン・浴室・トイレのビフォーアフター写真を工種別に整理して掲載します。完成写真のクオリティが問い合わせ率に直結するため、広角・明るい照明での撮影を心がけます。メーカー・素材の選定事例も参考になります。",
                },
                {
                  n: "03",
                  t: "新築工務店",
                  b: "モデルハウスの外観・内観・標準仕様の写真を充実させます。「自由設計」「省エネ住宅対応」「ZEH対応」などの特徴をGBPのサービス欄に登録し、ウェブサイトの施工事例ページへの誘導を設計します。",
                },
                {
                  n: "04",
                  t: "屋根工事",
                  b: "ドローン撮影による屋根全体・補修箇所のビフォーアフター写真が最も信頼性を高めます。台風・大雪後の補修実績・緊急対応の実例を投稿することで、タイムリーな検索需要にも対応できます。",
                },
                {
                  n: "05",
                  t: "内装リフォーム",
                  b: "フローリング張替え・クロス（壁紙）の貼替えなど内装工事の実例写真を多数掲載します。施工前の古い内装との比較が明確なビフォーアフターが最も反響を集めます。",
                },
                {
                  n: "06",
                  t: "耐震リフォーム",
                  b: "耐震診断→補強工事の流れをGBP投稿・サービス欄で説明します。耐震等級・補助金活用の実績・認定施工店であることを明示することで、安全を重視する顧客層への訴求力が高まります。",
                },
                {
                  n: "07",
                  t: "庭・エクステリア",
                  b: "完成イメージがわかる完工写真・植栽・ウッドデッキ・カーポートの施工例を季節ごとに掲載します。ビフォー（雑草だらけの庭）からアフター（完成した庭）の比較が最も効果的なコンテンツです。",
                },
                {
                  n: "08",
                  t: "解体業",
                  b: "解体前後の写真・廃棄物の適正処理説明・建設業許可番号・産業廃棄物処理業許可番号を明記します。近隣への騒音・粉塵対策の実績も掲載することで、発注者・近隣住民への配慮が伝わります。",
                },
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

        {/* Section D: 実装・改善フロー */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              実装・改善フロー
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "メインサービスカテゴリ決定",
                  b: "「工務店」「リフォーム会社」「外壁塗装業者」など、最も問い合わせを増やしたいサービスをプライマリカテゴリに設定します。副カテゴリに対応する工事種別を最大9つ追加します。",
                },
                {
                  n: "02",
                  t: "施工エリア設定（市区町村レベル）",
                  b: "GBPのサービス提供エリアに実際に対応できる市区町村を追加します。エリアを絞ることで、対応可能なエリアのローカル検索への適合度が高まり、的確な問い合わせが増えます。",
                },
                {
                  n: "03",
                  t: "施工事例写真撮影・掲載（ビフォーアフター必須）",
                  b: "施工前・施工後の写真をセットで撮影し、工種別に整理してGBPに掲載します。明るく鮮明な写真を最低20枚以上掲載し、継続的に追加する運用フローを設定します。",
                },
                {
                  n: "04",
                  t: "会社・スタッフ写真の追加",
                  b: "社長・スタッフ・職人の写真を掲載します。現場作業中の自然な表情・ユニフォーム姿・会社全体の雰囲気が伝わる写真が、依頼前の安心感につながります。",
                },
                {
                  n: "05",
                  t: "資格・許可番号の掲載",
                  b: "建設業許可番号・一級建築士事務所登録番号・各種資格・メーカー認定情報をGBPの説明文とサービス欄に記載します。ウェブサイトの資格一覧ページともリンクします。",
                },
                {
                  n: "06",
                  t: "無料見積もりリンク設定",
                  b: "GBPの予約URLまたはウェブサイトリンクを見積もり依頼フォームに設定します。「無料見積もり」のサービス登録と合わせて、問い合わせへの導線を最短にします。",
                },
                {
                  n: "07",
                  t: "既存顧客への口コミ依頼",
                  b: "施工完了後のお礼連絡に口コミ依頼を添えるフローを標準化します。QRコード付きの口コミ依頼カード・完工後メール・LINEでの案内など複数の手段を用意します。",
                },
                {
                  n: "08",
                  t: "月1回の施工事例投稿",
                  b: "完成した施工事例をGoogle投稿で月1回以上発信します。「外壁塗装 〇〇区の事例」「浴室リフォーム〇〇市」など施工エリア・工種を含む投稿がローカル検索への信号になります。",
                },
                {
                  n: "09",
                  t: "地域イベント・地元情報投稿",
                  b: "地元の祭り・地域清掃活動への参加・地域の安全情報など地域密着の投稿を定期的に行います。「地元企業」としてのイメージ強化がローカル検索での評価向上につながります。",
                },
                {
                  n: "10",
                  t: "半年後の効果測定",
                  b: "GBPインサイトで電話タップ数・ルート案内数・写真閲覧数・検索クエリの推移を確認します。競合のGBPとの写真枚数・口コミ数を比較し、次の6ヶ月の改善施策を立案します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
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

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "GBP経由の見積もり依頼数",
                  b: "GBPの「予約」URL・「ウェブサイト」クリックから見積もり依頼フォームへの流入数をWebアナリティクスで計測します。GBP経由の問い合わせ数を月次で管理し、施策の効果を確認します。",
                },
                {
                  n: "02",
                  t: "電話タップ数",
                  b: "GBPインサイトの「電話をかける」アクション数で計測します。スマートフォンユーザーがGBP上で電話番号をタップした回数が、直接的な問い合わせ獲得の目安になります。",
                },
                {
                  n: "03",
                  t: "ルート案内リクエスト数",
                  b: "「ルートを検索」アクション数はGBPインサイトで確認できます。来訪・現地確認を意図したユーザーの道案内要求数であり、実際の商談機会に近い指標です。",
                },
                {
                  n: "04",
                  t: "写真閲覧数（ビフォーアフター）",
                  b: "GBPインサイトの写真閲覧数で、施工事例写真がどれだけ見られているかを確認します。閲覧数が多い写真の傾向を分析し、撮影・追加の優先順位を決めます。",
                },
                {
                  n: "05",
                  t: "口コミ数・評価平均",
                  b: "口コミの総数と平均星評価の推移を月次で記録します。口コミ施策の効果は3〜6ヶ月単位で現れるため、長期的なトレンドを管理します。競合との口コミ数比較も定期的に行います。",
                },
                {
                  n: "06",
                  t: "施工エリア別表示回数",
                  b: "GBPインサイトの「検索クエリ」で「〇〇市 工務店」「〇〇区 リフォーム」など施工エリアを含む検索キーワードでの表示回数を確認します。エリア別の露出を把握し、弱いエリアのウェブサイトコンテンツを補強します。",
                },
                {
                  n: "07",
                  t: "競合比較（事例写真数・口コミ数）",
                  b: "Googleマップで競合工務店のGBPを定期的にチェックし、施工写真枚数・口コミ数・平均評価を比較します。競合との差を把握することで、自社の優先施策の方向性が明確になります。",
                },
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

        {/* Why It Matters */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why It Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              建設業にMEO対策が必要な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "高単価案件の問い合わせが増える",
                  b: "「新築建て替え 〇〇市」「外壁塗装 〇〇区 相場」などの検索はリフォーム・建設の具体的な検討者です。MEO対策でこうした高意欲ユーザーに直接リーチできます。",
                },
                {
                  n: "02",
                  t: "紹介以外の新規顧客を獲得できる",
                  b: "工務店は紹介頼みになりがちですが、Googleマップ経由で全く新しい顧客層にアプローチできます。エリアを問わず検索ユーザーに届く仕組みを構築します。",
                },
                {
                  n: "03",
                  t: "施工写真が最大の差別化になる",
                  b: "競合と差をつけるには実績を「見せる」ことが効果的です。施工前後の比較写真・完成写真を多数掲載することで、技術力と誠実さを視覚的に証明できます。",
                },
                {
                  n: "04",
                  t: "問い合わせ件数の変動を把握できる",
                  b: "GBPのインサイト機能で検索数・電話タップ数・ルート検索数などのデータを確認できます。集客施策の効果測定と改善に活用できます。",
                },
                {
                  n: "05",
                  t: "地域での知名度と信頼性が向上する",
                  b: "Googleマップ上位表示・口コミ高評価を維持することで、「この地域の信頼できる工務店」としてのポジションを確立できます。長期的な集客基盤となります。",
                },
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

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="建設業のMEO対策ご相談"
          body="工務店・リフォーム会社・建設業のGoogleマップ集客を支援します。GBP最適化・施工写真の投稿・口コミ対策まで一括でサポートします。"
        />
      </main>
      <Footer />
    </>
  );
}
