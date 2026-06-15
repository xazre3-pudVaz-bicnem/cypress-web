import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【エステ・ネイル・まつエクの集客】Instagram×MEOで個人サロンの予約を増やす｜株式会社サイプレス",
  description: "エステ・ネイルサロン・まつエクのWeb集客。Instagram×MEO（Googleマップ対策）・ホームページ・LINE活用で新規顧客獲得とリピーター育成を支援します。",
  keywords: ["エステ 集客", "ネイルサロン MEO", "まつエク Instagram", "美容サロン ホームページ", "個人サロン 集客", "ネイル Googleマップ"],
  openGraph: {
    title: "【エステ・ネイル・まつエクの集客】Instagram×MEOで個人サロンの予約を増やす｜株式会社サイプレス",
    description: "エステ・ネイルサロン・まつエクのWeb集客。Instagram×MEO・ホームページで新規顧客を増やします。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/beauty" },
};

const faqItems = [
  {
    q: "ネイルサロンのMEO対策で何が重要ですか？",
    a: "Googleビジネスプロフィールへの施術写真の定期投稿・口コミ獲得・「ネイルサロン」カテゴリの正確な設定が重要です。「○○市 ネイルサロン」「○○駅 ネイル」など地域名+業種での検索上位を目指します。定期的なGBP投稿（週2回）で更新頻度を高めることが順位向上に効果的です。",
  },
  {
    q: "まつエクサロンのInstagram集客はどうすればいいですか？",
    a: "ビフォーアフター写真・施術中の写真・完成した目元のアップ写真が最も拡散されるコンテンツです。ハッシュタグは地域タグ（#葛飾区まつエク）とメニュータグ（#マツエク一重 #フラットラッシュ）を組み合わせます。リール動画（施術タイムラプス）はフォロワー外へのリーチが増えるため積極的に活用します。",
  },
  {
    q: "ホットペッパービューティーの手数料が高くて困っています。解決策はありますか？",
    a: "自社ホームページと独自予約システムを整備し、ホットペッパー経由の顧客を段階的に自社予約に移行させる設計が有効です。LINE公式アカウントで既存顧客との関係を構築し、「次回はLINEから予約すると○○円引き」などのインセンティブ設計でホットペッパー依存を軽減できます。",
  },
  {
    q: "個人サロン（一人サロン・自宅サロン）でも集客できますか？",
    a: "はい。個人サロンこそGoogleマップとInstagramの組み合わせが効果的です。「地域密着」「丁寧な個人対応」「プライベートな雰囲気」という個人サロンの強みを前面に出したGBP・Instagram・ホームページ設計で、大手チェーンとは異なる客層へ差別化できます。",
  },
  {
    q: "エステサロンの口コミを増やすにはどうすればいいですか？",
    a: "施術後のリラックスした状態（満足度が最も高いタイミング）にQRコードを使ったGoogleマップ口コミ依頼が最も効果的です。LINEからの口コミ依頼メッセージも自動化できます。「サンキューカード」に「ご感想をぜひGoogleに」と一文を入れるだけでも口コミ率が上がります。",
  },
  {
    q: "リピート率が上がらないのはWebマーケティングで解決できますか？",
    a: "はい。LINE公式アカウントを活用した次回予約リマインド・施術後ケアのアドバイス配信・次回予約特典クーポンの配信がリピート率を高めます。施術後のフォローアップメッセージで顧客との関係を継続することで、「また行きたい」という動機を維持します。",
  },
  {
    q: "施術メニューの見せ方を改善したいのですが、どうすればいいですか？",
    a: "施術メニューは「ビフォーアフター写真」「施術時間と価格の明記」「どんな悩みに向いているか」の三点をセットで見せることが重要です。特にネイル・まつエクは視覚的なビジュアルが決め手になるため、スマートフォンで見やすいギャラリー形式での掲載と高品質な写真が効果を最大化します。",
  },
  {
    q: "脱毛サロン・アイブロウサロンでも同じ集客方法が使えますか？",
    a: "はい。業種によってターゲットキーワードと訴求ポイントが変わりますが、Googleマップ上位表示・Instagram運用・口コミ獲得は全ての美容系サロンに有効です。脱毛サロンは「○○区 医療脱毛 個人サロン」、アイブロウは「○○駅 眉毛サロン」など、業種に最適なキーワード戦略をご提案します。",
  },
  {
    q: "自宅サロンでGBPに住所を掲載したくない場合はどうすればいいですか？",
    a: "GBPでは「サービス提供エリア」を設定することで、住所を非公開にしたままGoogleマップに表示させることができます。サービス提供エリアを葛飾区・江戸川区などに設定し、プロフィールに「完全予約制プライベートサロン」と明記することで、住所を伏せながら集客が可能です。",
  },
  {
    q: "エステ・美容サロンのホームページに何を掲載すればいいですか？",
    a: "施術メニュー・料金・施術時間・ビフォーアフター写真・口コミ・予約フォーム・アクセスが必須です。「なぜこのサロンを選ぶべきか」「どんな悩みを持つ人に向いているか」「オーナーの想い・経歴」を丁寧に掲載することで信頼感が高まります。初回限定割引・体験メニューを設けて来店ハードルを下げる設計も重要です。",
  },
];

const relatedLinks = [
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "美容サロン向けInstagram戦略" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/industries/hair-salon", label: "美容室・ヘアサロンの集客", desc: "美容室専門の集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/sns/post-planning", label: "SNS投稿計画サービス", desc: "投稿カレンダー・コンテンツ設計" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/web-design", label: "ホームページ制作", desc: "美容サロン向けサイト制作" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
];

export default function BeautyIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "エステ・ネイル・まつエクの集客", "item": "https://www.cypress-all.co.jp/industries/beauty" },
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
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#9CA3AF" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>エステ・ネイル・まつエク</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Beauty Salon Marketing
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              エステ・ネイル・まつエクの<br />Instagram×MEO集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              エステ・ネイルサロン・まつエクサロンの集客はInstagramとGoogleマップ（MEO）のダブル戦略が最も効果的です。ビジュアルに特化した業種であるため、施術のビフォーアフター写真と地域検索での上位表示が、新規顧客獲得の最短経路です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              個人サロン・自宅サロン・小規模サロンが多い業種ですが、だからこそGoogleマップとInstagramの丁寧な運用が大手チェーンとの差別化になります。「地域密着」「プライベートな雰囲気」「丁寧な施術」という個人サロンの強みをWebで最大限に伝えることが、継続的な集客と高いリピート率の実現につながります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              エステ（フェイシャル・ボディ・脱毛）・ネイルサロン・まつエクサロン・アイブロウサロンなど美容サロン全般のWeb集客に対応しています。ホットペッパービューティー依存からの脱却・LINE CRMを活用したリピーター育成まで包括的に支援します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_10_24 (2).png"
            alt="ビューティーサロンのケア風景"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.25)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              エステ・ネイル・まつエクが抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "個人サロンで集客に限界を感じている", b: "知人紹介・リピーターのみに依存した集客では、サロンの成長に限界があります。新規顧客を継続的に獲得するためには、Googleマップでの露出とInstagramでのビジュアル発信を並行して行う必要があります。個人サロンこそデジタル集客を正しく行うことで大手に対抗できます。" },
                { n: "02", t: "Instagramだけに頼っているがフォロワーが増えない", b: "Instagramの投稿頻度・ハッシュタグ戦略・リール活用が不十分なままでは、既存フォロワーへのリーチのみとなり新規顧客への露出が限定されます。また、InstagramだけではGoogleからの検索流入を逃しているため、MEOとの組み合わせが必要です。" },
                { n: "03", t: "ホットペッパービューティーの手数料コストが収益を圧迫している", b: "予約ごとに発生するホットペッパーの手数料は、小規模サロンの収益に大きな影響を与えます。しかし手数料を払い続けなければ新規顧客が来ないというジレンマを抱えているサロンが多くあります。自社集客チャネルを構築することで、この依存から段階的に脱却できます。" },
                { n: "04", t: "口コミ獲得が難しく新規顧客に信頼を伝えられていない", b: "エステ・まつエクは「施術の質が体験してみないとわからない」という業種特性から、口コミが来店決定に大きく影響します。口コミ数が少ない・評価が低い状態では、初めての顧客に選ばれにくくなります。施術後の自然な口コミ獲得フローの整備が重要です。" },
                { n: "05", t: "リピート率が上がらず常に新規集客に追われている", b: "一度来店した顧客が次回予約をしないまま離脱する場合、常に新規顧客獲得コストをかけ続けることになります。LINEを活用したアフターフォロー・次回予約リマインド・限定クーポン配信でリピート率を高めることが安定経営の鍵です。" },
                { n: "06", t: "施術メニューの見せ方が弱く来店前に興味を持たせられていない", b: "メニュー名と価格だけを並べた情報では、来店前の「この施術を試してみたい」という期待感を高められません。ビフォーアフター写真・施術の効果説明・「どんな悩みに向いているか」の明示が来店動機を形成し、お試し来店を促します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px", flexShrink: 0 }}>{item.n}</span>
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
              エステ・ネイル・まつエクのSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容サロンのMEO対策では「地域名＋業種・メニュー」の組み合わせキーワードが最重要です。主要キーワード例：「葛飾区 ネイルサロン」「亀有 まつエク」「金町 エステ 体験」「葛飾区 フェイシャルエステ」。これらのキーワードでGoogleマップのローカルパック上位に表示されることで、近隣在住の新規顧客を直接獲得できます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                自社ホームページではメニュー別のランディングページを作成し、「葛飾区でのフェイシャルエステの特徴と費用」「亀有エリアのネイルサロンで人気のデザイン」など、地域+メニューに特化したコンテンツでSEO流入を獲得します。各ページにビフォーアフター写真・料金・所要時間・予約ボタンを設置することで、検索から来たユーザーを来店予約に直結させます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                Schemaは「BeautySalon」または「HairSalon」タイプのLocalBusiness Schemaを実装します。サービス内容・料金・対応エリアを構造化データとして設定することで、Google検索結果でのリッチ表示を促進します。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              エステ・ネイル・まつエクのGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容サロンのGBPで最も重要な要素は「施術写真の質と量」です。ネイルデザインのアップ写真・まつエク施術後の目元・エステ後のツヤ肌写真など、施術の効果が視覚的に伝わる写真を週1〜2枚追加し続けます。写真閲覧数が多いGBPほどGoogleマップでの表示機会が増えるため、継続的な更新が順位向上に直結します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                口コミ返信は全件丁寧に行います。特にポジティブな口コミには「また次回もお待ちしています」という来店促進メッセージを添え、リピート動機を高めます。ネガティブな口コミには誠実に対応し、改善策を具体的に示すことで、新規顧客への信頼感を維持します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                自宅サロンの場合は「サービス提供エリア」を設定することで、住所を非公開にしたままGoogleマップへの表示が可能です。「完全予約制プライベートサロン」「葛飾区エリア対応」と明記し、住所は予約確定後に個別連絡する設計にすることで、プライバシーを守りながら集客できます。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SNS Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              エステ・ネイル・まつエクのSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容サロンのInstagram戦略では「ビフォーアフターのビジュアル訴求」が最も効果的なコンテンツです。ネイルは「シンプルネイル→アートネイルへの変化」、まつエクは「施術前→施術後の目元の変化」、エステは「くすみ→透明感肌の変化」をビジュアルで見せることで、「私もこうなりたい」という来店動機を生み出します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                ハッシュタグは地域タグ・メニュータグ・トレンドタグの三層構造で設計します。例（ネイル）：#葛飾区ネイル #亀有ネイルサロン（地域）+ #春ネイル #ニュアンスネイル（トレンド）+ #ジェルネイル #ネイルデザイン（メニュー）。30個の最適化されたハッシュタグを投稿ごとに設定することで、多様な検索から新規フォロワーを獲得します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LINE公式アカウントはリピーターCRMの中核として活用します。施術後に「本日はありがとうございました。次回ご予約はこちらから」というメッセージを送り、次回予約を施術当日に確定させることでリピート率を高めます。定期的なクーポン配信・季節のメニュー紹介・「お誕生日特典」の自動配信など、継続的な顧客フォローをLINEで自動化します。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              エステ・ネイル・まつエク向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "Instagram×MEOダブル集客設計", b: "Instagramでビジュアル訴求し、GBP最適化でGoogleマップ上位表示を実現する二軸集客を設計。新規顧客獲得をInstagramとGoogleの両チャネルから同時に行います。" },
                { t: "施術ビフォーアフターのビジュアル戦略", b: "撮影ディレクション・写真加工・投稿テンプレート設計まで、来店動機を最大化するビジュアルコンテンツを制作。GBP・Instagram・ホームページに一貫したビジュアル設計を行います。" },
                { t: "LINEでのリピーターCRM自動化", b: "LINE公式アカウントを活用した次回予約リマインド・お誕生日クーポン・季節メニュー告知の自動配信設定。リピート率を高める顧客フォローの仕組みを構築します。" },
                { t: "独自予約システムでホットペッパー依存軽減", b: "自社ホームページへの独自予約フォーム設置とGBP予約リンクの整備で、ホットペッパー手数料なしの予約チャネルを構築。段階的にポータル依存を軽減します。" },
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
              エステ・ネイル・まつエクの選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容サロンのWebサイトは「女性が見て惹かれるデザイン」が最優先です。上品でトーンを統一したビジュアル・余白を活かしたレイアウト・ブランドカラーを一貫して使用したデザインが信頼感と高品質感を伝えます。ホットペッパーとの差別化として、サロンの「コンセプト」「オーナーの想い」「施術への哲学」を丁寧に表現したコンテンツが来店を決断させます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                施術メニューページは「この施術で何が解決されるか」を明確に伝えるランディングページ形式で設計します。「乾燥肌が気になる方へ」「すっぴんに自信を持ちたい方へ」など、悩み起点の表現で共感を生み出し、「体験してみたい」という行動を促します。初回体験メニューの料金・予約ボタンを施術ページの最上部に設置することでCVRを高めます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                口コミ・お客様の声のセクションは信頼構築の要です。Google口コミ・ホットペッパー口コミを引用（許可のある範囲内で）しつつ、お客様に許可を取った上での自社収集口コミを掲載します。「来店前の悩み→施術を受けた感想→現在の変化」という三部構成の口コミが最も説得力を持ちます。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="エステ・ネイル・まつエクの集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="エステ・ネイル・まつエクの集客ご相談"
          body="個人サロン・小規模サロンのInstagram運用・MEO対策・ホームページ制作をご相談ください。ホットペッパー依存からの脱却と安定した新規集客の仕組みを構築します。"
        />
      </main>
      <Footer />
    </>
  );
}
