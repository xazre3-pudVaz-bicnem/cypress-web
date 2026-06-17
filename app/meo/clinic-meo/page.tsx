import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "クリニック・医院・歯科のMEO対策｜地域患者を増やすGoogleマップ戦略｜株式会社サイプレス",
  description: "クリニック・医院・歯科のMEO対策。診療科目・診療時間・口コミ管理・院内写真・Web予約連携など医療機関特有のGBP最適化で地域患者の新規来院を増やします。",
  keywords: ["クリニック MEO対策", "歯科 Googleマップ", "医療機関 集客", "病院 GBP最適化", "医院 MEO", "内科 Googleマップ"],
  openGraph: {
    title: "クリニック・医院・歯科のMEO対策｜地域患者を増やすGoogleマップ戦略｜株式会社サイプレス",
    description: "クリニック・医院・歯科のMEO対策。診療科目・診療時間・口コミ管理・院内写真・Web予約連携など医療機関特有のGBP最適化で地域患者の新規来院を増やします。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_21_48.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/clinic-meo" },
};

const faqItems = [
  {
    q: "医療機関がMEO対策をする際の注意点はありますか？",
    a: "医療広告ガイドラインに基づき、誇張表現・成果保証・根拠のない比較などは禁止されています。GBPの説明文・投稿内容が医療広告規制に準拠しているかを確認することが最優先です。規制に違反した表現はGBP停止や行政指導のリスクがあるため、専門家へのご相談を推奨します。",
  },
  {
    q: "クリニックの口コミ対策はどうすればいいですか？",
    a: "患者様から同意を得たうえで口コミをお願いする案内を作成します。診察後のメール・院内掲示・QRコードなどで誘導します。悪い口コミには個別に丁寧に返信し、改善姿勢を示します。患者個人情報には一切触れず、感謝と誠実さを伝える返信が基本です。",
  },
  {
    q: "Web予約システムとGBPを連携できますか？",
    a: "はい、GBPにWeb予約URLを設定できます。自社の予約システム・EPARK・カルテット・LINE公式アカウントなどのURLを登録することで、GBPから直接予約につながります。スマートフォンからのアクセスで特に効果が出やすいです。",
  },
  {
    q: "複数診療科がある場合のカテゴリ設定はどうすればいいですか？",
    a: "プライマリカテゴリにメインの診療科（例：内科）を設定し、セカンダリカテゴリに対応する他の科（例：小児科・皮膚科）を追加します。最大9つのカテゴリを設定できます。カテゴリはGoogleが認識するキーワードに直結するため、正確な設定が重要です。",
  },
  {
    q: "開業したばかりのクリニックでもMEO効果はありますか？",
    a: "はい。開業直後はGBP情報の充実・写真の充実・定期投稿から始めることが重要です。口コミが少ない初期でも、情報が完全なGBPは競合に比べて有利です。長期的に口コミを積み上げることで順位が上がります。開業前からGBPを申請・確認することをお勧めします。",
  },
  {
    q: "院内写真はどのような内容を撮影すればいいですか？",
    a: "外観・受付・待合室・診察室・処置室・トイレなど院内全体を撮影します。明るく清潔感のある写真を選ぶことが大切です。医師・スタッフの写真も掲載すると初診の不安軽減につながります。患者が写り込まないよう注意し、院内の雰囲気が伝わる写真を10枚以上掲載することを目指してください。",
  },
  {
    q: "口コミの返信で医療広告ガイドラインに違反しないためには？",
    a: "返信では患者の個人情報・受診内容・症状・治療方針に一切触れないことが原則です。「ご来院いただきありがとうございます」「スタッフ一同改善に努めてまいります」など感謝と改善の姿勢を示す文言に留めます。治療効果・成功事例の引用は禁止です。",
  },
  {
    q: "クリニックのGBP投稿はどのような内容が適切ですか？",
    a: "季節の健康情報（花粉症対策・インフルエンザ予防接種のお知らせなど）・診療時間変更のお知らせ・新しい医療機器の導入情報・スタッフ紹介などが適切です。特定の治療の成果・症例紹介・比較表現は医療広告として規制されるため避けます。",
  },
  {
    q: "医療系のGBPはスパムや不正口コミが多いと聞きます。対策はありますか？",
    a: "Googleにフラグ報告を行うことで不正な口コミの削除を申請できます。明らかに来院していない・競合による嫌がらせと思われる口コミはポリシー違反として申請します。ただし削除には時間がかかるため、誠実な返信で他ユーザーへの印象管理も同時に行います。",
  },
  {
    q: "診療時間の設定で「土曜診療」などの条件を強調する方法は？",
    a: "GBPの特別営業時間機能で曜日別の診療時間を細かく設定できます。「土曜14時まで診療」「第1・3土曜のみ」なども正確に設定することで、「土曜診療」で検索したユーザーに表示されやすくなります。祝日の休診も都度更新することが重要です。",
  },
  {
    q: "対応している保険・自由診療の情報はGBPに記載できますか？",
    a: "GBPの説明文に「保険診療対応」「自由診療」「混合診療」などを記載できます。各種医療保険・労災保険・自賠責保険の対応有無を明記することで、患者が受診前に費用感を把握でき、来院ハードルが下がります。",
  },
  {
    q: "子ども連れ・バリアフリー対応の情報はどこに設定しますか？",
    a: "GBPの属性設定（ビジネス情報の詳細）から「車椅子でのアクセス可」「授乳室あり」「キッズスペースあり」「駐車場あり」などを設定できます。子育て世代・高齢者・障がいのある方への配慮をアピールでき、クリニック選びの重要な判断材料になります。",
  },
  {
    q: "MEO対策の効果が出るまでどのくらいかかりますか？",
    a: "GBPの基本情報整備・写真追加などは数週間以内に反映され始めます。口コミ獲得・投稿の継続効果は3〜6ヶ月単位で積み重なります。競合の多い都市部では6ヶ月〜1年の継続施策が必要なケースもあります。短期的な順位変動に一喜一憂せず、データを見ながら継続することが重要です。",
  },
  {
    q: "心療内科や精神科のクリニックでも写真を掲載すべきですか？",
    a: "はい、ただしプライバシーに配慮した写真選定が必要です。院内に患者が写り込まないこと、待合室の椅子配置や仕切りでプライバシーへの配慮が伝わる写真を選びます。落ち着いた照明・植物・インテリアなど「安心できる空間」を伝える写真が有効です。",
  },
  {
    q: "美容クリニックや美容外科のMEO対策で気をつけることは？",
    a: "美容医療は特に医療広告ガイドラインが厳しく適用されます。症例写真のビフォーアフター・価格・成功率・患者の体験談などはGBP上では原則掲載できません。施設の外観・スタッフ・清潔な院内写真を中心に構成し、詳細はウェブサイトへ誘導する構成が安全です。",
  },
  {
    q: "クリニックのMEO対策でSEO（ウェブサイト）との違いは何ですか？",
    a: "MEO対策はGoogleマップのローカルパック表示を最適化するもので、GBPの管理・口コミ・写真・投稿が主な施策です。SEOはウェブサイトの検索順位を上げる施策で、コンテンツ・被リンク・技術的最適化が中心です。両方を組み合わせることで、Googleの検索結果全体で患者に見つかりやすくなります。",
  },
  {
    q: "院長や医師のプロフィール写真はGBPに掲載すべきですか？",
    a: "はい、院長・医師の顔写真の掲載は初診患者の不安軽減に大きく効果的です。白衣着用・清潔感のある背景・笑顔の写真が信頼感を高めます。医師の経歴・専門分野・資格はGBPの説明文やウェブサイトへのリンクで補完します。",
  },
  {
    q: "複数院展開のクリニックグループはGBPをどう管理すればいいですか？",
    a: "各拠点ごとに個別のGBPを作成・最適化します。グループ共通の写真・説明文のベースを作り、各院の個別情報（医師・診療時間・特色）を加えることで効率的に管理できます。Googleビジネスプロフィールのグループ管理機能や、管理代行サービスの活用も検討してください。",
  },
  {
    q: "往診・訪問診療を行っているクリニックのGBP設定は？",
    a: "GBPの「サービス提供エリア」を設定することで、訪問診療の対応エリアを示せます。説明文に「訪問診療対応エリア：〇〇市・〇〇区」と明記し、往診の予約窓口を設けることで、在宅医療を探している家族へのリーチが可能です。",
  },
  {
    q: "MEO対策のレポートや効果測定はどのように行いますか？",
    a: "GBPのインサイト機能で検索表示回数・電話タップ数・ルート案内リクエスト数・写真閲覧数などを月次で確認します。予約システムとの連携でGBP経由の予約数も把握できます。3ヶ月ごとに競合との順位比較・口コミ数の推移を分析し、施策を見直します。",
  },
];

const relatedLinks = [
  { href: "/industries/clinic", label: "医療のWeb集客", desc: "医療機関向け総合支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細・料金" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ管理・返信支援" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定・管理" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード選定" },
  { href: "/meo/construction-meo", label: "建設業のMEO対策", desc: "工務店・リフォーム向け" },
  { href: "/meo/restaurant-meo", label: "飲食店のMEO対策", desc: "飲食店向けGBP最適化" },
  { href: "/meo/beauty-meo", label: "美容室のMEO対策", desc: "サロン向けMEO" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "SEOサービス詳細" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索対策" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "ChatGPT・Gemini対策" },
  { href: "/services/content-marketing", label: "コンテンツマーケティング", desc: "集客コンテンツ制作" },
  { href: "/services/web-design", label: "Webデザイン", desc: "クリニックサイト制作" },
  { href: "/industries/dental", label: "歯科のWeb集客", desc: "歯科医院向け支援" },
  { href: "/areas/tokyo", label: "東京のMEO対策", desc: "東京都内対応" },
  { href: "/areas/osaka", label: "大阪のMEO対策", desc: "大阪府内対応" },
  { href: "/blog/meo", label: "MEO対策コラム", desc: "MEOノウハウ記事" },
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
              <span style={{ color: "#374151" }}>クリニック・医院・歯科のMEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Medical MEO</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              クリニック・医院・歯科のMEO対策<br />
              地域患者を増やすGoogleマップ戦略
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「近く 歯科」「〇〇市 内科 土曜診療」——患者が病院を探す際、Googleマップは最も使われるツールのひとつです。医療機関特有の注意点を踏まえたMEO対策で、地域の新規患者の来院を増やします。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              医療広告ガイドラインへの準拠を守りながら、診療科目・診療時間・院内写真・口コミ対応を最適化することで、患者にとって「選びやすいクリニック」としてGoogleマップ上に認識されます。開業前の設定から継続的な運用管理まで、医療機関の集客課題を専門的にサポートします。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.png"
            alt="クリニック・医院・歯科のMEO対策"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              患者に選ばれるクリニックへ
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
                "クリニック・歯科・医院がMEO対策で地域患者を獲得する具体的な方法",
                "医療広告ガイドラインに準拠しながらGBPを最適化する注意点",
                "診療科目カテゴリ・診療時間・院内写真の正しい設定手順",
                "口コミ依頼のタイミングと医療機関として適切な返信の作り方",
                "Web予約システムとGBPを連携して予約離脱を防ぐ方法",
                "診療科目別（内科・歯科・皮膚科・整形外科など）の活用ポイントと注意事項",
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Clinic MEO Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
              クリニック・歯科がMEO対策をしないと起きる4つのリスク
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                {
                  t: "地域検索で競合医院に負ける",
                  b: "「○○市 歯科」「近くの内科」などで検索した患者は、ローカルパック上位3院しか見ません。MEO対策なしでは新規患者のほとんどが競合クリニックへ流れ続けます。",
                },
                {
                  t: "新患獲得の機会を失う",
                  b: "引越してきた住民・かかりつけ医を探している患者は必ずGoogleマップで検索します。GBPが最適化されていないクリニックはこの重要な新患獲得機会を失っています。",
                },
                {
                  t: "口コミが管理されないまま拡散する",
                  b: "低評価の口コミに返信しないまま放置すると、他の患者の印象が悪化します。誠実な返信が信頼回復と評判管理の基本です。全口コミへの返信が重要です。",
                },
                {
                  t: "オンライン予約導線が機能しない",
                  b: "GBPの予約URLが未設定、または古いURLのままでは、予約したい患者がその場で離脱します。GBPから直接予約できる導線設計が患者数向上に直結します。",
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
                  t: "診療科目と副カテゴリが合っていない",
                  b: "プライマリカテゴリを「病院」や「医療機関」など大分類で設定してしまうケースが多くあります。「内科」「歯科」など具体的な診療科目を設定することで、患者の検索キーワードと一致しやすくなります。",
                },
                {
                  n: "02",
                  t: "診療時間・休診日の更新漏れ",
                  b: "年末年始・夏季休診・医師の出張による臨時休診をGBPに反映しないと、患者が来院できないトラブルが発生します。更新漏れは口コミへの悪評につながりやすく、GBPの信頼性を大きく損ないます。",
                },
                {
                  n: "03",
                  t: "医師プロフィール写真がない",
                  b: "初診患者は「どんな先生か」を事前に確認したいと考えています。顔写真がないと不安感が生まれ、競合クリニックへ流れる原因になります。清潔感のある白衣姿の写真1枚が来院の後押しになります。",
                },
                {
                  n: "04",
                  t: "院内写真が暗い・少ない",
                  b: "古いスマートフォンで撮影した暗い院内写真は「古い・清潔でない」という印象を与えます。明るく清潔感のある受付・待合室・診察室の写真を10枚以上掲載することが、患者の来院判断に直結します。",
                },
                {
                  n: "05",
                  t: "口コミ依頼のタイミングが難しい（受診後すぐ）",
                  b: "治療直後に口コミをお願いすると患者に負担感を与えます。会計後のメール配信・院内QRコード掲示・LINEでのフォローアップなど、自然なタイミングで案内する仕組みを整えることが重要です。",
                },
                {
                  n: "06",
                  t: "医療広告ガイドラインへの対応（治療実績・成功率の記載禁止）",
                  b: "GBPの説明文・投稿に「〇〇手術〇件実績」「成功率〇〇%」などを記載することは医療広告ガイドライン違反になる可能性があります。事実情報・施設情報・スタッフ情報の範囲で表現する方法を理解することが必要です。",
                },
                {
                  n: "07",
                  t: "診療予約との連携なし",
                  b: "GBPに予約ボタン・予約URLが設定されていないと、予約しようとした患者がクリニックのウェブサイトを探す手間で離脱します。EPARKや自社予約システムとのURL連携設定は必須対応です。",
                },
                {
                  n: "08",
                  t: "「初診歓迎」「保険診療」属性の未設定",
                  b: "GBPの属性設定に「初診受け入れ可」「健康保険対応」などを設定することで、患者が事前確認できる情報が増えます。引越し後の新患・初めてかかりつけ医を探す患者への訴求力が高まります。",
                },
                {
                  n: "09",
                  t: "処置・設備情報の未記載",
                  b: "使用している医療機器・設備（デジタルレントゲン・MRI対応・無痛治療設備など）をGBPのサービス欄に登録することで、設備を基準にクリニックを選ぶ患者へのアピールができます。",
                },
                {
                  n: "10",
                  t: "悪い口コミへの感情的な返信",
                  b: "患者への苦情返信で感情的な表現や否定・反論を行うと、第三者に「対応の悪いクリニック」という印象を与えます。全口コミに対して感謝と改善姿勢を示す冷静な返信が、長期的な評判管理の基本です。",
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

        {/* Section C: 診療科目別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Specialty</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              診療科目別の活用ポイント
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "内科",
                  b: "オンライン診療対応・予防接種（インフルエンザ・コロナ）・健康診断の対応有無をGBPのサービス欄と属性に設定します。季節ごとの予防接種情報投稿が検索流入を増やします。",
                },
                {
                  n: "02",
                  t: "歯科",
                  b: "「歯科」プライマリカテゴリに加え、「矯正歯科」「小児歯科」「口腔外科」「インプラント」を副カテゴリに設定します。各専門治療に対応した写真・サービス説明を充実させることが重要です。",
                },
                {
                  n: "03",
                  t: "皮膚科",
                  b: "一般皮膚科と美容皮膚科を明確に区分けしてカテゴリ・説明文に記載します。医療広告ガイドラインの規制が美容医療に厳しいため、Webサイトへの誘導設計が特に重要になります。",
                },
                {
                  n: "04",
                  t: "整形外科",
                  b: "スポーツ整形・リハビリ対応・交通事故対応などをサービス欄と説明文に記載します。リハビリ室・トレーニング設備の写真掲載でスポーツ選手・高齢者への訴求力を高められます。",
                },
                {
                  n: "05",
                  t: "眼科",
                  b: "コンタクトレンズ処方・視力検査・白内障手術の対応有無をGBPに明記します。「コンタクト処方 〇〇駅」などの検索ニーズに対応するためのカテゴリ最適化が重要です。",
                },
                {
                  n: "06",
                  t: "小児科",
                  b: "夜間診療・時間外対応・予防接種スケジュールの情報充実が重要です。子ども連れのアクセス環境（駐車場・ベビーカー対応）の属性設定も、保護者の来院判断に影響します。",
                },
                {
                  n: "07",
                  t: "心療内科",
                  b: "プライバシーへの配慮を伝える写真選定が必要です。仕切りのある待合室・落ち着いたインテリア・個室診察環境の写真を選びます。「安心して来院できる環境」を視覚的に伝えることが来院を後押しします。",
                },
                {
                  n: "08",
                  t: "美容外科・美容クリニック",
                  b: "施術結果の写真・比較・成功事例はGBPへの掲載が医療広告ガイドライン上できません。施設の外観・受付・清潔な空間の写真を中心に構成し、詳細はウェブサイトへの誘導で対応します。",
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
                  t: "医療広告ガイドライン確認",
                  b: "厚生労働省の医療広告ガイドラインを確認し、GBPで使用可能な表現・禁止表現を整理します。説明文・投稿・サービス説明のチェックリストを作成してから作業を開始します。",
                },
                {
                  n: "02",
                  t: "GBPオーナー確認・権限整備",
                  b: "GBPのオーナー確認を行い、管理者アカウントを整理します。複数拠点の場合はグループ管理設定を行います。既存GBPがある場合は情報の誤りや重複がないかを確認します。",
                },
                {
                  n: "03",
                  t: "診療科目カテゴリ最適化",
                  b: "プライマリカテゴリを具体的な診療科目に設定し、対応する副カテゴリを最大9つ設定します。各カテゴリが患者の検索キーワードと一致しているかを確認します。",
                },
                {
                  n: "04",
                  t: "診療時間・休診日の正確登録",
                  b: "曜日ごとの診療時間・昼休み・休診日を正確に設定します。祝日・年末年始・夏季休診は特別営業時間として事前に登録し、更新漏れが起きない運用フローを整備します。",
                },
                {
                  n: "05",
                  t: "院内写真の撮影・掲載（受付/待合室/診察室/外観）",
                  b: "プロカメラマンまたは高性能スマートフォンで明るく清潔感のある写真を撮影します。外観・受付・待合室・診察室・処置室・トイレを最低10枚以上掲載します。医師・スタッフの写真も追加します。",
                },
                {
                  n: "06",
                  t: "医師プロフィール設定",
                  b: "院長・在籍医師の顔写真・経歴・専門分野をGBPとウェブサイトに掲載します。GBPのサービス欄に医師の専門性を記載し、初診患者の信頼獲得につなげます。",
                },
                {
                  n: "07",
                  t: "予約リンク設定",
                  b: "GBPの予約URLにWeb予約システムのURLを設定します。EPARK・カルテット・自社予約フォーム・LINEなど実際に使用している予約窓口のURLを最新の状態に保ちます。",
                },
                {
                  n: "08",
                  t: "口コミ返信ガイドライン策定",
                  b: "全口コミへの返信方針・文例集を作成します。肯定的口コミへの感謝文・否定的口コミへの対応文を用意し、患者情報に触れない適切な返信を標準化します。",
                },
                {
                  n: "09",
                  t: "月次投稿（健康情報・お知らせ）",
                  b: "月1〜2回のペースでGoogle投稿を行います。季節の健康情報・予防接種のお知らせ・診療時間変更・スタッフ紹介など、医療広告規制に沿った内容で継続的に発信します。",
                },
                {
                  n: "10",
                  t: "周辺病院・薬局との連携確認",
                  b: "近隣の調剤薬局・連携医療機関の情報をGBPに記載し、患者の利便性を高めます。ウェブサイトにアクセスマップ・最寄り駐車場情報も整備し、初診患者のナビゲーションをサポートします。",
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
                  t: "GBP経由の予約・問い合わせ数",
                  b: "GBPの「予約」ボタン・「ウェブサイト」クリックからの予約数をWebアナリティクスとGBPインサイトで計測します。月次で推移を管理し、施策の効果を確認します。",
                },
                {
                  n: "02",
                  t: "電話タップ数",
                  b: "GBPインサイトの「電話をかける」アクション数で計測します。スマートフォンユーザーがGBP上で電話番号をタップした回数が、直接的な新患獲得の目安になります。",
                },
                {
                  n: "03",
                  t: "ルート案内リクエスト数",
                  b: "「ルートを検索」アクション数はGBPインサイトで確認できます。来院を意図したユーザーが道案内を要求した数であり、実際の来院数に近い指標です。",
                },
                {
                  n: "04",
                  t: "写真閲覧数",
                  b: "GBPインサイトの写真閲覧数で、院内写真・外観写真がどれだけ見られているかを確認します。閲覧数が多い写真の傾向を分析し、追加撮影・更新の優先順位を決めます。",
                },
                {
                  n: "05",
                  t: "口コミ数・平均評価",
                  b: "口コミの総数と平均星評価の推移を月次で記録します。口コミ施策の効果は3〜6ヶ月単位で現れるため、長期的なトレンドを管理します。",
                },
                {
                  n: "06",
                  t: "「現在診療中」表示状況",
                  b: "診療時間が正確に設定されているかを「現在診療中」表示で定期確認します。誤った診療時間設定は患者の来院機会損失と口コミへの悪評の原因になります。",
                },
                {
                  n: "07",
                  t: "検索キーワード別表示回数",
                  b: "GBPインサイトの「検索クエリ」でどのキーワードで表示されているかを確認します。「〇〇市 歯科」「近く 内科」など想定キーワードでの表示回数を増やすことがMEO改善の目標です。",
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
              クリニックにMEO対策が重要な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "患者の多くはGoogleマップで病院を検索する",
                  b: "「近く 歯科」「〇〇駅 内科 土曜」などのGoogleマップ検索が病院選びの入口になっています。MEO対策なしでは競合クリニックに新患を奪われる可能性があります。",
                },
                {
                  n: "02",
                  t: "口コミが受診判断に直結する",
                  b: "クリニックは「失敗したくない」心理が強いため、口コミの件数と評価が受診決定を左右します。高評価の口コミが多いクリニックは同条件の競合より選ばれやすくなります。",
                },
                {
                  n: "03",
                  t: "Web予約との連携で予約離脱を防ぐ",
                  b: "GBPから直接予約できる状態にすることで、検索から予約までの導線を短縮し、離脱を防ぎます。特にスマートフォンからのアクセスで効果が顕著です。",
                },
                {
                  n: "04",
                  t: "医療広告ガイドラインを守りながら集客できる",
                  b: "GBPのコンテンツは医療広告規制の範囲内で最適化できます。事実に基づいた情報を正確に伝えることで、安全かつ効果的な集客が可能です。",
                },
                {
                  n: "05",
                  t: "開業直後から地域認知度を高められる",
                  b: "開業前からGBPを設定・最適化することで、地域での認知度を早期に高められます。口コミが少ない時期でも写真・情報充実で差別化できます。",
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
          heading="医療機関のMEO対策ご相談"
          body="医療広告ガイドラインを踏まえた適切なGBP運用・MEO対策を支援します。開業前の設定支援から継続的な運用管理まで、医療機関の集客課題をお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
