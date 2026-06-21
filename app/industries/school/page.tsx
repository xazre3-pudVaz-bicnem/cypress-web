import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "学習塾・スクールのWeb集客｜MEO対策・SEOで体験授業の申込みを増やす｜株式会社サイプレス",
  description: "学習塾・英会話・音楽教室・プログラミングスクール向けWeb集客支援。Googleマップ上位表示（MEO）・SEO・ホームページ制作で体験授業申込みと入塾数を増やします。",
  keywords: ["学習塾 MEO対策", "学習塾 集客", "塾 Googleマップ", "英会話スクール 集客", "学習塾 ホームページ"],
  openGraph: {
    title: "学習塾・スクールのWeb集客｜MEO対策・SEOで体験授業の申込みを増やす｜株式会社サイプレス",
    description: "学習塾・英会話・音楽教室・スクール向けWeb集客。MEO・SEO・ホームページで体験申込みと入塾数を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/school" },
};

const faqItems = [
  {
    q: "学習塾のMEO対策はいつ始めると効果的ですか？",
    a: "中学受験・高校受験・大学受験の入塾検討は3〜4ヶ月前から始まるケースが多く、新学期（4月）・夏期講習（6月）・受験本番直前（11月）の3〜4ヶ月前に集中的に施策を行うことで入塾申し込みのピークに合わせられます。MEO対策は半年以上の継続で効果が安定するため、早期着手を推奨します。",
  },
  {
    q: "学習塾のホームページで問い合わせを増やすには？",
    a: "合格実績・講師プロフィール・料金（月謝の目安）・カリキュラム・体験授業の申し込みフォームが必須です。「この塾に通ったらどう変わるか」をイメージさせるビフォーアフター的なコンテンツ（成績向上事例・生徒の声）が入塾率を高めます。スマートフォンでのLINE問い合わせ対応も効果的です。",
  },
  {
    q: "学習塾のGoogleマップ（MEO）対策と検索（SEO）はどちらが大切ですか？",
    a: "「〇〇駅 学習塾」「〇〇区 英語塾」のような地域+キーワードの検索にはMEOが有効で、即体験申し込みに直結します。一方「中学受験 塾 選び方」「高校生 英語 独学 おすすめ」のような情報収集段階の検索にはSEOが有効です。両方を組み合わせることが長期的な集客強化につながります。",
  },
  {
    q: "個人経営の塾でも大手チェーンに対抗できますか？",
    a: "はい。個人経営の強みは「少人数・個別指導・地元密着・講師と生徒の距離感の近さ」です。これをGBPプロフィール・口コミ・ホームページで前面に出します。大手チェーンへの不満（画一的な指導・講師の入れ替わり）を逆手に取り差別化することで、検索上位でも選ばれやすくなります。",
  },
  {
    q: "英会話スクール・音楽教室・プログラミングスクールでも同じ集客方法が使えますか？",
    a: "はい。業種によってターゲットキーワードや訴求ポイントが変わりますが、Googleマップ上位表示と体験申し込み導線の整備は全てのスクール業種に有効です。英会話は「子供英語 〇〇区」、音楽教室は「ピアノ教室 〇〇駅」、プログラミングスクールは「子供プログラミング 〇〇区」など、業種に最適なキーワード戦略をご提案します。",
  },
  {
    q: "夏期講習・冬期講習などの季節特需に合わせた集客はできますか？",
    a: "はい。GBPの季節投稿・LP（ランディングページ）の特設ページ・SEOキーワードの調整（「夏期講習 葛飾区」等）を時期に合わせて行います。入塾検討が始まる時期の1〜2ヶ月前から施策を開始することで、特需ピークに最大の集客効果を発揮します。",
  },
  {
    q: "Googleの口コミは学習塾の集客に影響しますか？",
    a: "非常に大きく影響します。保護者・生徒はGoogleマップで塾を比較する際に口コミを最初に確認します。「先生がわかりやすい」「合格できた」「雰囲気が良い」といった口コミは信頼性を大幅に向上させます。体験授業後・合格報告のタイミングに口コミを依頼する仕組みを作ることが重要です。",
  },
  {
    q: "InstagramやYouTubeでの集客は学習塾に効果がありますか？",
    a: "Instagramは勉強法Tips・合格速報・教室雰囲気の発信に有効で、保護者へのアプローチに向いています。YouTubeは解説動画・講師紹介などで専門性を示せますが、制作コストがかかります。まずはMEO・ホームページ・口コミ獲得を基盤として、予算に応じてSNSを追加するのが現実的な順序です。",
  },
  {
    q: "学習塾で体験授業の申込み率を高めるにはどうすればいいですか？",
    a: "「無料体験授業受付中」「まず1回試してみてください」という低ハードルのCTAをホームページのファーストビューとGBPプロフィールに設置します。体験授業の流れ・所要時間・当日の服装・持ち物などを事前に明記することで、初めての保護者が申し込みやすい環境を整えます。LINEからの申し込み対応も問い合わせ率を高めます。",
  },
  {
    q: "学習塾の合格実績はWebでどう活用すればいいですか？",
    a: "合格実績はホームページのトップページ・合格実績ページに掲載し、具体的な学校名・人数・生徒のコメントを含めることで信頼性が高まります。Googleマップの写真として合格速報を掲載したり、GBP投稿で「〇〇高校 合格！」を告知することで地域での認知拡大と口コミ獲得にもつながります。",
  },
  {
    q: "学習塾の体験授業申込フォームのCVR最適化方法は？",
    a: "体験申込フォームはファーストビューへの設置・入力項目を最小化（氏名・学年・連絡先・希望日時の4項目以内）・完了後の自動返信メールで安心感を演出することがCVR向上の基本です。「どの学年でも受付」「当日キャンセル可」など来塾ハードルを下げるコピーをフォーム周辺に配置し、LINEでの申込みを代替手段として設けることでさらに申込み率が上がります。",
  },
  {
    q: "「〇〇駅 塾」「〇〇区 学習塾」のキーワードで上位表示するには？",
    a: "Googleマップ（MEO）ではGBPの業種カテゴリ設定・住所の正確な記載・口コミ数の積み上げが最重要です。自社ホームページではタイトルタグ・H1見出し・所在地情報に「〇〇駅 学習塾」「〇〇区 英語塾」などの地域+業種キーワードを自然に含め、LocalBusiness Schemaを実装することで検索エンジンの評価が高まります。継続的なGBP投稿と口コミ返信が長期的な順位維持につながります。",
  },
  {
    q: "個別指導塾と集団授業塾でWeb集客戦略は変わりますか？",
    a: "変わります。個別指導塾は「一人ひとりのペースに合わせた指導」「苦手科目の集中ケア」「講師との相性」を訴求軸にし、体験授業の無料・低負担化で問い合わせ率を高めます。集団授業塾は「合格実績」「志望校別コース」「同じ目標を持つ仲間との切磋琢磨」を前面に出し、学校別・コース別のランディングページを充実させることで検索流入を増やします。",
  },
  {
    q: "春期・夏期講習の集客タイミングはいつが良いですか？",
    a: "春期講習（3〜4月）は1〜2月から、夏期講習（7〜8月）は5〜6月から、冬期講習（12〜1月）は10〜11月から集客施策を開始するのが理想です。GBP投稿・特設LP・SNS告知を早期に展開することで、検討期間の長い保護者の目に早い段階で触れることができます。受験シーズンを意識した直前期コンテンツは特に検索ボリュームが増加するため、SEO対策も並行して行います。",
  },
  {
    q: "高校受験・大学受験専門塾の差別化キーワードとは？",
    a: "高校受験専門塾は「内申点対策」「公立高校受験」「〇〇高校 合格実績」「定期テスト対策」などが具体性が高く集客につながりやすいキーワードです。大学受験専門塾は「共通テスト対策」「〇〇大学 対策コース」「浪人生歓迎」「医学部受験」など志望校・受験形式に特化したキーワードが有効です。これらをホームページのコース別ページに落とし込み、地域名と組み合わせたSEOとMEOの両軸で集客します。",
  },
  {
    q: "学習塾の口コミ・評判管理で注意すべき点は？",
    a: "Googleマップの口コミには全件丁寧に返信し、ネガティブな口コミには改善姿勢を具体的に示すことが信頼維持の基本です。謝礼を提供して口コミを依頼する行為は景品表示法のステルスマーケティング規制に抵触する可能性があるため、謝礼なしで自然に書いてもらう仕組みを作ることが重要です。事実と異なる悪意ある口コミはGoogleへの削除申請が可能ですが、対応に時間がかかる点を踏まえて早期対処が求められます。",
  },
  {
    q: "英会話スクール・プログラミング教室など専門スクールの集客の特性は？",
    a: "英会話スクールは「子供英語 〇〇区」「ネイティブ講師 〇〇駅」「英検対策 〇〇市」など目的×地域のキーワードが有効です。プログラミング教室は「子供プログラミング 〇〇区」「Scratch 小学生 〇〇」などのツール名・対象年齢と地域の組み合わせが集客に向いています。体験授業の無料・低価格設定とビジュアルで「楽しい」を伝えるホームページ設計が共通して重要です。",
  },
  {
    q: "塾のSNS（Instagram・LINE）はどう活用すればいいですか？",
    a: "InstagramはReels形式の「3分でわかる数学のコツ」「合格速報ストーリー」「教室の雰囲気ショット」が保護者層へのリーチに有効です。LINE公式アカウントは問い合わせ窓口・体験授業予約・季節キャンペーン告知のチャネルとして機能します。ホームページや GBPからLINEへの誘導を設けることで、深夜に問い合わせを考えた保護者を翌日に逃さない体制を作れます。",
  },
  {
    q: "スクールのホームページ制作費用の相場は？",
    a: "学習塾・スクールのホームページ制作費用は仕様によって大きく異なりますが、静的な情報サイトであれば20〜50万円程度、体験申込フォーム・合格実績ページ・SEO最適化を含む本格的なサイトでは50〜150万円程度が目安です。制作後の月次運用費（SEO・MEO・コンテンツ追加）は月3〜10万円前後が一般的です。費用の安さより「集客設計が組み込まれているか」を確認することが重要です。",
  },
];

const relatedLinks = [
  { href: "/cases/industry/school", label: "学習塾・スクールの成功事例", desc: "スクールのWeb集客成功事例" },
  { href: "/industries/school/meo", label: "学習塾のMEO対策", desc: "Googleマップ上位表示で体験申込みを増加" },
  { href: "/industries/school/seo", label: "学習塾のSEO対策", desc: "検索流入で長期集客を強化" },
  { href: "/industries/children", label: "子ども向け習い事の集客", desc: "習い事・スクールの集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "学習塾向けサイト制作" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "体験申込み特化型LP" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "学習塾・スクールのWeb集客相談" },
  { href: "/meo/local-keyword", label: "ローカルキーワード戦略", desc: "地域名+業種キーワードの選び方" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での上位表示戦略" },
  { href: "/web-design/contact-form", label: "問い合わせフォーム最適化", desc: "体験申込みフォームのCVR向上" },
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "学習塾向けInstagram戦略" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO費用の目安と選び方" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京都内全域対応" },
  { href: "/industries/professional-service", label: "士業・専門サービスの集客", desc: "専門性を活かした集客支援" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着SEOの実践ガイド" },
  { href: "/knowledge/content-seo", label: "コンテンツSEOの基礎", desc: "検索意図に沿ったコンテンツ設計" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "保護者向けLINE集客の設計" },
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

export default function SchoolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>学習塾・スクール</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>School &amp; Cram School</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              学習塾・スクールのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「〇〇駅 学習塾」「〇〇区 英語塾」という地域密着の検索から、「中学受験 塾 選び方」という情報収集段階の検索まで、学習塾・スクールの集客チャネルは多様です。MEO対策で即体験申し込みを獲得しながら、SEOで長期的な認知を積み上げる二軸の集客体制を構築します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              英会話スクール・音楽教室・プログラミングスクール・スポーツスクールなど、業種を問わず地域密着型スクールのWeb集客全般に対応しています。
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_21 (10).png" alt="先生と生徒が学ぶ学習塾・スクールの教室 — 学習塾・スクールのMEO対策・Web集客" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Key Services */}
        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              学習塾・スクール向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/school/meo",
                  label: "学習塾のMEO対策",
                  desc: "「〇〇駅 学習塾」「〇〇区 英語塾」でGoogleマップ上位表示。体験申し込みの問い合わせを直接獲得します。",
                },
                {
                  href: "/services/web-design",
                  label: "学習塾向けホームページ制作",
                  desc: "合格実績・講師紹介・料金表・体験申し込みフォームを備えた入塾率を高めるサイトを制作します。",
                },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "28px", border: "1px solid #E8E4DC", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "12px" }}>詳細を見る →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Why It Works</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              学習塾集客でMEO＋SEOが効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "保護者は必ずGoogleで比較検討してから問い合わせる",
                  b: "子供の教育に関わる選択のため、保護者はGoogleマップ・口コミ・ホームページを念入りに比較します。Googleマップ上位とホームページの充実が問い合わせ前の信頼獲得に直結します。",
                },
                {
                  n: "02",
                  t: "入塾のタイミングに合わせた季節集客が可能",
                  b: "新学期・夏期講習・受験シーズンに合わせてGBP投稿・LPを準備することで、最も入塾意欲の高い時期に確実に接点を持てます。",
                },
                {
                  n: "03",
                  t: "口コミと合格実績が競合との差別化になる",
                  b: "「〇〇高校合格」「成績が20点アップ」という具体的な成果と保護者・生徒の声は、大手チェーンに対する個人塾の最大の差別化要因です。Googleマップの口コミとホームページの両方で訴求します。",
                },
                {
                  n: "04",
                  t: "体験授業CTAを最適化することで問い合わせ率が大幅に向上する",
                  b: "「まず無料体験から」という低ハードルの入口設計と、LINE・フォームなど複数の問い合わせ手段を提供することで、検索から来た保護者が体験申し込みに進む転換率が改善します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              学習塾・スクールが抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "季節集客の難しさ — 閑散期の集客が安定しない", b: "春（新学期）・夏（夏期講習）・秋〜冬（受験シーズン）という繁忙期と閑散期の差が大きく、年間を通じた安定した入塾数の確保が課題です。各シーズンの2〜3か月前からSEOコンテンツ・GBP投稿・LPを準備し、需要ピーク時に最大限の集客効果を出す計画的なWeb戦略が必要です。" },
                { n: "02", t: "大手チェーン塾との競争で地域検索に埋もれている", b: "「○○駅 学習塾」での検索で大手チェーンが上位を占め、個人塾・地域密着塾が見つかりにくい状況があります。Googleマップのプロフィール整備・口コミ獲得・地域に特化したSEOコンテンツの充実によって、大手に対して「地元の先生から直接習える」という強みで差別化した上位表示を狙います。" },
                { n: "03", t: "合格実績・口コミが少なく信頼性の証明ができていない", b: "新しい塾・規模の小さい塾では口コミや合格実績が蓄積されておらず、保護者の検討段階で不安を感じさせてしまうことがあります。体験授業後・合格報告のタイミングを活用した口コミ依頼フローの整備と、合格実績のホームページ掲載が信頼構築の基盤になります。" },
                { n: "04", t: "体験授業の申込み率が低く問い合わせが来ても入塾につながらない", b: "ホームページやGBPに体験授業の案内はあっても、「申し込みフォームが見つからない」「何を持参するか不明」「当日の流れがわからない」という情報不足が申込みのハードルを高めています。体験授業CTAのファーストビュー配置・当日の流れの明示・LINE申込みの選択肢追加で申込み率を向上させます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
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
              サイプレスの学習塾・スクール向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO対策", desc: "「○○駅 学習塾」「○○区 英語塾 子ども」でGoogleマップ上位表示を目指します。GBPの教室写真・講師情報・口コミを整備し、体験申し込みにつながる地域検索からの流入を強化します。" },
                { label: "ホームページ制作", desc: "合格実績・講師プロフィール・カリキュラム・料金・体験申し込みフォームを備えた入塾率を高めるホームページを制作します。保護者が「この塾なら安心」と感じる情報設計を優先します。" },
                { label: "合格実績LP・季節LP", desc: "「夏期講習受付中」「○○受験対策コース」など季節・目的別のランディングページを制作します。入塾検討が高まる時期に向けた計画的なLP展開で体験申込み数を最大化します。" },
                { label: "口コミ管理支援", desc: "体験授業後・合格報告タイミングでのGoogleマップ口コミ依頼フローを設計します。口コミ返信文面の作成代行も対応し、保護者の検討段階での信頼構築を継続的に支援します。" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#0d1b2a", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: "1.8" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Implementation Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              学習塾・スクールのWeb集客は、Googleマップとホームページの基盤整備から始め、口コミ獲得・SEOコンテンツ・季節LP・SNS運用へと段階的に積み上げます。各ステップを確実に実施することで、入塾申込みが安定して入り続ける仕組みが完成します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GBPの基本情報を完全に整備する", b: "塾名・住所・電話番号・営業時間・ウェブサイトURLを正確に入力し、メインカテゴリを「学習塾」「英会話教室」など実態に合わせて設定します。サービス欄に科目・対象学年・授業形式を記載することで検索マッチングが高まります。" },
                { n: "02", t: "教室・講師の写真を10枚以上アップロードする", b: "教室内観・授業風景・講師写真・合格速報ボードなど視覚的に信頼感を伝える写真を10枚以上掲載します。スマートフォンで明るく鮮明に撮影した写真がGBPの第一印象を決定し、クリック率に直結します。" },
                { n: "03", t: "体験授業の申込みCTAをホームページのファーストビューに設置する", b: "「無料体験授業のお申込みはこちら」というボタンをホームページ最上部に配置し、LINE・メール・電話の三種類の問い合わせ手段を併記します。体験授業の流れ・所要時間・持ち物を明記して申込みハードルを下げます。" },
                { n: "04", t: "LocalBusiness SchemaとFAQ Schemaをホームページに実装する", b: "住所・営業時間・サービス内容を構造化データとして記述するLocalBusiness Schemaを実装します。FAQページへのFAQPageSchemaの実装もあわせて行い、Googleリッチスニペット表示を促します。" },
                { n: "05", t: "地域+キーワードに特化したSEOコンテンツを作成する", b: "「〇〇区 中学受験 塾 選び方」「〇〇駅 個別指導 高校受験」などの地域密着キーワードで検索上位を狙うコンテンツページを作成します。各ページにGBPへの導線と体験申込みボタンを設置して集客に直結させます。" },
                { n: "06", t: "口コミ獲得フローを仕組み化する", b: "体験授業終了時・入塾後初回授業後・合格報告のタイミングにQRコードカードを渡し、Googleマップへの口コミ投稿を案内するフローを設計します。LINEでの口コミ依頼自動送信も合わせて設定します。" },
                { n: "07", t: "季節ごとの特設LPを入塾ピーク2ヶ月前に公開する", b: "春期講習・夏期講習・受験直前対策コースなど時期に応じた特設ランディングページを作成し、GBP投稿・SNS・LINEで告知します。シーズン別LPは検索意図に直結するキーワードで上位を狙えるため、SEO効果も期待できます。" },
                { n: "08", t: "GBP投稿を週2回以上継続してMEO評価を維持する", b: "合格速報・講師コラム・季節キャンペーン・Q&Aなどを週2回以上GBP投稿として公開します。投稿の更新頻度はGoogleマップのアルゴリズムにプラスに影響するため、継続的な運用が順位維持に直結します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>KPI</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              学習塾・スクールのWeb集客の効果を正しく把握するために、以下のKPIを定期的に計測します。数値の変化を追うことで、どの施策が成果につながっているかを可視化し、次の優先施策を判断します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { kpi: "GBP検索表示回数（週次）", where: "GBPインサイト", desc: "Googleマップや検索にGBPが表示された回数。MEO対策の基本的な効果を示す指標で、週単位の増減で施策の成果を判断します。" },
                { kpi: "体験授業申込数（月次）", where: "予約フォーム・LINE管理画面", desc: "ホームページおよびGBP経由で受け取った体験授業申込みの件数。集客施策全体の最終成果指標で、施策ROIを判断する基準になります。" },
                { kpi: "問い合わせCVR（月次）", where: "Google Analytics（GA4）", desc: "サイト訪問者のうち体験申込みフォームを送信した割合。ページ設計とCTAの改善効果を測るために月次でモニタリングします。" },
                { kpi: "LPセッション数（週次）", where: "Google Analytics（GA4）", desc: "体験申込LPへのアクセス数。季節LPや特設ページの告知効果をリアルタイムで把握し、GBP投稿・SNSの内容を調整する判断材料になります。" },
                { kpi: "Googleマップ口コミ数と平均評価", where: "GBPインサイト", desc: "累計口コミ数と平均星評価。保護者が塾を選ぶ際に最初に確認する信頼指標で、口コミ獲得施策の効果を月次で追跡します。" },
                { kpi: "在籍生徒数（月次）", where: "自社管理台帳", desc: "Web集客全体の最終的なビジネス成果。MEO・SEO・LP改善の積み重ねが在籍数の安定増加に反映されているかを四半期ごとに検証します。" },
                { kpi: "継続率・退塾率（月次）", where: "自社管理台帳", desc: "在籍生徒の継続率は口コミや紹介集客にも影響します。Web集客で獲得した生徒が定着しているかを把握し、指導品質とWeb訴求内容の整合性を保ちます。" },
              ].map((item) => (
                <div key={item.kpi} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "200px", flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", color: "#c4b89a", letterSpacing: "0.05em" }}>{item.where}</p>
                  </div>
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
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "教育業種特有の季節需要を理解した集客設計", b: "新学期・夏期講習・受験シーズンという学習塾固有の需要サイクルを踏まえた年間集客カレンダーを設計します。シーズン前の準備タイミングから施策を逆算し、ピーク時に最大限の集客効果が出るよう計画的に支援します。" },
                { t: "MEO・SEO・LP・口コミ管理を一社完結で対応", b: "Googleマップ対策・SEOコンテンツ制作・体験申込みLP・口コミ獲得フロー設計をバラバラに外注する必要がなく、一貫した戦略のもとで全施策を連動させます。戦略の一貫性が集客精度を高めます。" },
                { t: "個人塾・地域密着塾が大手チェーンに対抗できる差別化設計", b: "個人塾の強みである「少人数指導」「地元密着」「講師との距離感」をGBP・ホームページ・口コミで最大限に表現し、大手チェーンとは異なる軸で保護者に選ばれる設計を行います。" },
                { t: "景品表示法・口コミ規制に対応した安全なマーケティング支援", b: "塾業界に関わる景品表示法（ステルスマーケティング規制）や合格保証に類する表現への注意を踏まえ、法令リスクを避けながら最大限の訴求力を持つコンテンツ・口コミ運用設計を提供します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 保護者の検討プロセスと接点設計 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Customer Journey</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
              保護者の検討プロセスと接点設計
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                塾・スクールを選ぶ保護者の検討プロセスは「①問題認識 → ②情報収集 → ③比較・絞り込み → ④体験申込み → ⑤入塾決定」の5段階です。各段階でWeb上の接点を設計することが、検索ユーザーを入塾者に転換するカギになります。
              </p>
              <div style={{ maxWidth: "720px" }}>
                {[
                  { n: "①", t: "問題認識（子供の成績・英語力への不安）", b: "この段階の保護者はまだ塾の検索を始めていません。SNSのリール動画・保護者向けコラム記事・「中学生の勉強法」などの情報発信で最初の接点を作ります。" },
                  { n: "②", t: "情報収集（塾の種類・費用・時期を調べる）", b: "「個別指導 集団授業 違い」「塾 いつから 中学受験」などのキーワードでブログ記事やコンテンツページへのSEO流入が発生します。専門性の高い情報提供が信頼構築につながります。" },
                  { n: "③", t: "比較・絞り込み（地域の塾をGoogleマップで比較）", b: "「○○駅 学習塾」「○○区 英語塾」で検索しGoogleマップで候補を比較します。MEO対策で上位表示+高評価口コミがあることで候補リストに入ります。" },
                  { n: "④", t: "体験申込み（ホームページで詳細を確認して申込み）", b: "GBPからホームページへ遷移し、講師・カリキュラム・料金・合格実績を確認した上で体験申込みに進みます。フォームのわかりやすさとLINE窓口の有無が申込み率を左右します。" },
                  { n: "⑤", t: "入塾決定（体験授業の質と担当者の対応で判断）", b: "Web集客の役割はここで終わりではありません。体験授業後のフォローアップ（自動返信メール・担当者からの丁寧な連絡）が入塾率をさらに高めます。口コミ依頼のタイミングもここが最適です。" },
                ].map((item) => (
                  <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "13px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEOキーワード戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>SEO Keywords</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "24px" }}>
              学習塾・スクールのSEOキーワード戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                学習塾・スクールのSEO対策は「地域名×業種×目的」の組み合わせを軸に設計します。保護者が検索するキーワードは「比較・選択段階」と「情報収集段階」の2種類に分かれ、両方に対応するコンテンツを揃えることが集客の幅を広げます。
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
                <div style={{ padding: "24px", background: "#ffffff", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "12px" }}>比較・選択段階のキーワード例</p>
                  <ul style={{ fontSize: "13px", color: "#374151", lineHeight: "2.2", listStyle: "none", padding: 0, margin: 0 }}>
                    <li>「○○駅 学習塾」</li>
                    <li>「○○区 個別指導 高校受験」</li>
                    <li>「○○市 英会話 子ども」</li>
                    <li>「○○区 プログラミング教室 小学生」</li>
                    <li>「○○駅 ピアノ教室 大人」</li>
                  </ul>
                </div>
                <div style={{ padding: "24px", background: "#ffffff", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "12px" }}>情報収集段階のキーワード例</p>
                  <ul style={{ fontSize: "13px", color: "#374151", lineHeight: "2.2", listStyle: "none", padding: 0, margin: 0 }}>
                    <li>「中学受験 塾 いつから」</li>
                    <li>「高校受験 塾 選び方」</li>
                    <li>「個別指導 集団授業 違い」</li>
                    <li>「塾 費用 相場 中学生」</li>
                    <li>「英検対策 塾 おすすめ 選び方」</li>
                  </ul>
                </div>
              </div>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "16px" }}>
                比較・選択段階のキーワードはMEO（Googleマップ上位表示）との相乗効果が高く、検索→Googleマップ確認→体験申込みという短いコンバージョンルートを形成します。情報収集段階のキーワードはSEOコンテンツで対応し、「この先生は信頼できる」という認知醸成から入塾検討に導く長期的な集客チャネルになります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                コース別・学年別のページ（「小学生向け算数強化コース」「中学3年生 受験対策コース」など）を作成することで、より具体的な検索意図にマッチしたページが増え、サイト全体のSEO評価も高まります。各コースページに体験申込みフォームを設置し、流入から申込みまでの導線を最短化することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* ターゲット別訴求ポイント */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Target Segments</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              スクール種別・ターゲット別の訴求ポイント
            </h2>
            <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  label: "学習塾（受験対策）",
                  points: ["合格実績の数字と学校名を明示", "コース別・志望校別のページを作成", "「自習室完備」「映像授業」など環境訴求", "入塾説明会・個別相談の告知"],
                },
                {
                  label: "個別指導塾",
                  points: ["講師プロフィールと担当科目を明示", "「苦手科目克服」「学校の授業に追いつく」訴求", "授業コマ数・料金の透明性を重視", "無料体験授業の低ハードル設計"],
                },
                {
                  label: "英会話・語学スクール",
                  points: ["ネイティブ講師の国籍・資格を明示", "目標別コース（英検・TOEIC・子ども英語）", "体験レッスン動画でスクールの雰囲気訴求", "オンライン対応の有無を明記"],
                },
                {
                  label: "プログラミング・習い事スクール",
                  points: ["使用ツール・習得スキルを具体的に説明", "完成作品・発表会の写真や動画を掲載", "保護者向けと子ども向けの訴求を分ける", "無料体験授業の楽しさをビジュアルで伝える"],
                },
              ].map((item) => (
                <div key={item.label} style={{ padding: "24px", border: "1px solid #E8E4DC", background: "#f9f8f5" }}>
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

        <FaqSection items={faqItems} heading="学習塾・スクールのWeb集客についてよくある質問" bgColor="#ffffff" />
        {/* 対応エリア */}
        <section style={{ background: "#f8f6f2", padding: "56px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Service Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.4vw,26px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>主な対応エリア</h2>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "24px" }}>
              東京都・千葉県・埼玉県・神奈川県を中心に全国対応しています。オンラインでのご相談も承りますので、まずはお気軽にご連絡ください。葛飾区・足立区・江戸川区・墨田区・荒川区など東京東部エリアは特に対応実績が豊富です。
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["葛飾区", "足立区", "江戸川区", "墨田区", "荒川区", "北区", "板橋区", "練馬区", "新宿区", "渋谷区", "千葉市", "船橋市", "松戸市", "さいたま市", "川口市"].map((area) => (
                <span key={area} style={{ padding: "6px 14px", border: "1px solid #E8E4DC", fontSize: "13px", color: "#374151", background: "#ffffff" }}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="学習塾・スクールのWeb集客ご相談"
          body="MEO対策・ホームページ制作・SEOで体験申込みと入塾数を増やします。新学期・夏期講習・受験シーズンに向けた集客強化も含めてご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
