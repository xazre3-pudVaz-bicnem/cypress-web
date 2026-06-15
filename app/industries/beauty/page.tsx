import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【エステ・脱毛サロンの集客】Instagram×MEOで個人サロンの予約を増やす｜株式会社サイプレス",
  description: "エステ・脱毛サロン・ネイル・まつエクのWeb集客。Instagram×MEO（Googleマップ対策）・ホームページ・LINE活用で新規顧客獲得とリピーター育成を支援します。",
  keywords: ["エステ 集客", "脱毛サロン MEO", "まつエク Instagram", "美容サロン ホームページ", "個人サロン 集客", "ネイル Googleマップ"],
  openGraph: {
    title: "【エステ・脱毛サロンの集客】Instagram×MEOで個人サロンの予約を増やす｜株式会社サイプレス",
    description: "エステ・脱毛サロン・ネイル・まつエクのWeb集客。Instagram×MEO・ホームページで新規顧客を増やします。",
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
  {
    q: "脱毛サロンと医療脱毛クリニックの集客の根本的な違いは何ですか？",
    a: "脱毛サロンは「通いやすさ」「価格」「コース設計のわかりやすさ」が来店決定要因になりやすく、Instagramでのビフォーアフターと地域MEOが有効です。医療脱毛クリニックは「医師監修」「肌トラブルへの対応力」「安全性」など医療としての信頼性が訴求軸になります。それぞれの強みに合わせたキーワード戦略とコンテンツ設計が必要です。",
  },
  {
    q: "GBPで「脱毛」関連のカテゴリはどう設定すればいいですか？",
    a: "脱毛サロンのGBPメインカテゴリは「脱毛サロン」または「美容サロン」が適切です。追加カテゴリに「エステサロン」「スキンケアクリニック（医療の場合）」を設定することで、複数の検索意図からの表示機会が増えます。カテゴリ設定はGoogleマップでの表示キーワードに直結するため、最初に正確に設定することが重要です。",
  },
  {
    q: "口コミに「施術効果」の表現を書いてもらいたいのですが、景品表示法上の注意点はありますか？",
    a: "口コミに施術効果の表現が含まれる場合、サロン側が誘導・謝礼提供を行って書かせたと判断されると「ステルスマーケティング規制（景品表示法）」の対象になる可能性があります。謝礼なしで自然に書いてもらう仕組みを作ることが重要です。また「○kgやせた」「肌が劇的に改善した」などの誇大な効果表現は薬機法・景品表示法に抵触する可能性があるため注意が必要です。",
  },
  {
    q: "ビフォーアフター写真をWeb・SNSに掲載する際の注意点は何ですか？",
    a: "ビフォーアフター写真は顧客の同意を書面または電子的に取得することが必須です。また、施術効果が個人の体験であることを明示し「個人差があります」などの表記を行うことが景品表示法・薬機法上の対応として重要です。エステの場合、「痩身」「脂肪燃焼」など医療行為に該当する効果の表現は薬機法の観点から使用を控える必要があります。",
  },
  {
    q: "エステサロンのInstagramとTikTokはどう使い分ければいいですか？",
    a: "InstagramはGBPとの連動・検索集客・予約への導線設計に向いており、フォロワーとの長期関係構築に適しています。TikTokは施術動画・体験レポートなどで新規リーチを拡大するのに効果的です。どちらも運用する場合は、Instagramを予約導線の本線にし、TikTokを認知拡大の補助チャネルとして位置づけるのが効率的です。",
  },
  {
    q: "定期コース・回数券のWeb集客はどう設計すればいいですか？",
    a: "定期コース・回数券はホームページの施術ページ内に「単発比較表」を設け、コースの割引メリットを視覚的に示すことが有効です。LINEで「初回体験後のコース案内メッセージ」を自動配信するフローを組み合わせると、来店後すぐのアップセルが実現しやすくなります。予約システムとLINEを連動させた仕組みをご提案します。",
  },
  {
    q: "美容系インフルエンサーマーケティングは効果がありますか？",
    a: "フォロワー数万人以上のマクロインフルエンサーより、地域密着型のマイクロインフルエンサー（フォロワー1,000〜1万人）の方がエンゲージメント率が高く、サロン集客との相性がよいケースが多いです。インフルエンサーへの謝礼提供による投稿は「PR表記」が義務付けられており、ステルスマーケティング規制への対応が必要です。",
  },
  {
    q: "美容サロンのGoogleマップ口コミ評価が低い場合どうすればいいですか？",
    a: "まず全ての口コミに誠実な返信を行い、改善姿勢を示すことが重要です。事実と異なる悪意ある口コミはGoogleへの削除申請が可能ですが、対応には時間がかかります。新しい良好な口コミを継続的に獲得することで、全体の平均評価を徐々に改善していくことが最も現実的な対策です。",
  },
  {
    q: "フランチャイズサロンのWebマーケティングで気をつけることは？",
    a: "フランチャイズサロンはブランドガイドラインによってデザイン・コピー・SNS表現に制約がある場合があります。本部承認が必要なコンテンツと自店舗で自由に発信できる範囲を確認した上で運用設計を行うことが重要です。GBP（Googleビジネスプロフィール）は店舗単位で最適化できるため、地域性の高い写真・口コミ獲得・投稿は自店舗で積極的に取り組める施策です。",
  },
  {
    q: "エステの新規集客とリピーター育成はどちらを優先すべきですか？",
    a: "サロンの状況によって優先度は変わります。開業直後・新規顧客が少ない段階ではMEO・Instagram・GBP整備による新規集客を優先します。一定数の顧客基盤ができた段階では、LINE CRMを活用したリピーター育成を強化することで、新規集客コストをかけずに売上を安定化できます。両輪を同時に動かすことが長期的には最も効率的です。",
  },
  {
    q: "Instagramのリール動画はエステ集客に効果的ですか？",
    a: "はい、効果的です。リール動画はInstagramのフォロワー外へのリーチを大きく拡大できるため、新規フォロワー獲得と認知拡大に最も効果的なコンテンツ形式です。施術タイムラプス・ビフォーアフター動画・「この悩みにはこの施術」という解説動画が美容サロンのリールとして再生されやすいコンテンツです。15〜30秒の短い動画から始めることを推奨します。",
  },
];

const relatedLinks = [
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "美容サロン向けInstagram戦略" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/meo/beauty-salon-meo", label: "美容サロンのMEO対策", desc: "美容サロン特化のGoogleマップ対策" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "SNS運用代行の詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "サロンブランドサイト制作" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場と選び方" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/industries/nail-salon", label: "ネイルサロンの集客", desc: "ネイルサロン専門の集客支援" },
  { href: "/industries/hair-salon", label: "美容室・ヘアサロンの集客", desc: "美容室向けWebマーケティング" },
  { href: "/industries/clinic", label: "クリニック・医療機関の集客", desc: "医療機関のWebマーケティング" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "Googleマップ口コミを増やす方法" },
  { href: "/knowledge/eeat", label: "E-E-A-Tとは", desc: "専門性・権威性・信頼性の高め方" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "サロン向け施術写真の撮影指導" },
  { href: "/web-design", label: "ホームページ制作", desc: "美容サロン向けサイト制作" },
  { href: "/cost/seo", label: "SEO対策の料金", desc: "SEO対策の費用相場" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/sns/post-planning", label: "SNS投稿計画サービス", desc: "投稿カレンダー・コンテンツ設計" },
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
          { "@type": "ListItem", "position": 3, "name": "エステ・脱毛サロンの集客", "item": "https://www.cypress-all.co.jp/industries/beauty" },
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
              <span style={{ color: "#0d1b2a" }}>エステ・脱毛サロン</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Beauty Salon Marketing
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              エステ・脱毛サロンの<br />Instagram×MEO集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              エステ・脱毛サロン・ネイルサロン・まつエクサロンの集客はInstagramとGoogleマップ（MEO）のダブル戦略が最も効果的です。ビジュアルに特化した業種であるため、施術のビフォーアフター写真と地域検索での上位表示が、新規顧客獲得の最短経路です。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              個人サロン・自宅サロン・小規模サロンが多い業種ですが、だからこそGoogleマップとInstagramの丁寧な運用が大手チェーンとの差別化になります。「地域密着」「プライベートな雰囲気」「丁寧な施術」という個人サロンの強みをWebで最大限に伝えることが、継続的な集客と高いリピート率の実現につながります。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              エステ（フェイシャル・ボディ・脱毛）・ネイルサロン・まつエクサロン・アイブロウサロンなど美容サロン全般のWeb集客に対応しています。ホットペッパービューティー依存からの脱却・LINE CRMを活用したリピーター育成まで包括的に支援します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "32px" }}>
              葛飾区・亀有・金町・綾瀬・青砥・柴又エリアの個人サロン・自宅サロン・小規模サロンへの集客支援に対応しています。地域の競合サロン状況・検索需要・ターゲット客層を踏まえた施策設計で、あなたのサロンの魅力を地域の顧客に届けます。
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#FFFFFF", padding: "14px 32px", fontSize: "14px", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textDecoration: "none" }}>
              無料相談はこちら
            </Link>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_10_24 (2).png"
            alt="ビューティーサロンのケア風景"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Challenges</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              エステ・脱毛サロンが抱える集客課題
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
              エステ・脱毛サロンのSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容サロンのMEO対策では「地域名＋業種・メニュー」の組み合わせキーワードが最重要です。主要キーワード例：「葛飾区 ネイルサロン」「亀有 まつエク」「金町 エステ 体験」「葛飾区 フェイシャルエステ」「葛飾区 脱毛サロン」。これらのキーワードでGoogleマップのローカルパック上位に表示されることで、近隣在住の新規顧客を直接獲得できます。
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
              エステ・脱毛サロンのGoogleマップ活用術（MEO）
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
              エステ・脱毛サロンのSNS・コンテンツ戦略
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

        {/* Webサイトの作り方 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Web Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              エステ・脱毛サロンの選ばれるWebサイトの作り方
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

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Implementation Steps</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              エステ・脱毛サロンのWeb集客は、土台となるGBPとホームページの整備から始め、SNS運用とLINEによるリピーター設計へと段階的に構築します。各ステップを順に実施することで、無駄のない集客の仕組みが完成します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GBPの基本情報を完全整備する", b: "店名・住所（または提供エリア）・電話番号・営業時間・定休日・ウェブサイトURLを正確に入力します。カテゴリは「脱毛サロン」「エステサロン」など業種に合わせて設定し、サービス一覧とメニュー料金も記載します。" },
                { n: "02", t: "施術写真を10枚以上アップロードする", b: "施術後の仕上がり写真・サロン内装・施術シーン・スタッフ写真を10枚以上掲載します。写真の質がGBPの第一印象を決めるため、スマートフォンでも見やすい明るく鮮明な写真を選びます。" },
                { n: "03", t: "ホームページの施術メニューページを整備する", b: "各施術メニューを独立したページで作成し、料金・所要時間・効果説明・ビフォーアフター写真・予約ボタンをセットで掲載します。ページタイトルと見出しに「地域名＋メニュー名」を含めてSEO対策を施します。" },
                { n: "04", t: "口コミ獲得フローを設計・導入する", b: "施術完了時にQRコードカードを渡し、Googleマップへの口コミ投稿を案内する仕組みを作ります。LINEでの口コミ依頼メッセージ自動送信も合わせて設定することで、継続的な口コミ獲得が実現します。" },
                { n: "05", t: "InstagramアカウントをGBPとホームページにリンクさせる", b: "GBPのソーシャルリンク・ホームページのSNSボタンからInstagramへ誘導する動線を整備します。Instagram→ホームページ→予約という流れが自然につながるよう、各プラットフォームの情報を統一します。" },
                { n: "06", t: "Instagram投稿を週3回以上の定期運用に移行する", b: "フィード投稿・リール・ストーリーズの三種類を組み合わせた投稿カレンダーを作成します。施術ビフォーアフター・季節メニュー紹介・スタッフ日常など、コンテンツのバリエーションを持たせることでフォロワーの飽きを防ぎます。" },
                { n: "07", t: "LINE公式アカウントを開設し予約・CRM導線を整える", b: "LINE予約受付・施術後フォローメッセージ・リピート促進クーポン配信の自動化を設定します。既存顧客との継続的な関係構築をLINEで行うことで、来店頻度と顧客単価の向上につながります。" },
                { n: "08", t: "GBP投稿を週2回以上継続する", b: "新メニュー告知・季節のキャンペーン・施術ブログ記事のシェアなど、GBPへの定期投稿を継続します。投稿の更新頻度はGoogleマップの評価アルゴリズムにプラスに影響するため、週2回を目安に継続します。" },
                { n: "09", t: "月次で数値を確認しPDCAを回す", b: "GBPのインサイト（検索表示回数・電話タップ数・経路検索数）・Instagramのリーチ数とプロフィールアクセス数・ホームページのアクセス数を月次で確認します。数値に基づいて施策の優先順位を調整することで、集客の精度を継続的に高めます。" },
                { n: "10", t: "ホットペッパー依存を段階的に軽減する", b: "自社予約チャネルの整備が完了した段階で、ホットペッパーのプランを段階的にダウングレードします。LINEで既存顧客に自社予約への移行を案内し、徐々に手数料コストを削減することで収益性を改善します。" },
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

        {/* 成果を測るKPI */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>KPI</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              エステ・脱毛サロンのWeb集客の効果を正しく把握するために、以下のKPIを定期的に計測します。数値の変化を追うことで、どの施策が成果につながっているかを可視化できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { kpi: "GBP検索表示回数", where: "GBPインサイト", desc: "Googleマップや検索でGBPが表示された回数。MEO対策の効果を直接示す指標で、週単位で増減を確認します。" },
                { kpi: "GBP経路検索数", where: "GBPインサイト", desc: "ユーザーがGBPから「経路」を検索した回数。来店意向の高いユーザー数を示し、実集客への転換率の目安になります。" },
                { kpi: "Instagram新規フォロワー数（月次）", where: "Instagramインサイト", desc: "月間の純増フォロワー数。投稿内容・ハッシュタグ戦略・リール活用の効果を測定する基本指標です。" },
                { kpi: "Instagramプロフィールアクセス数", where: "Instagramインサイト", desc: "投稿から「このサロンが気になる」と感じてプロフィールを確認した人数。来店候補者数の目安として重要です。" },
                { kpi: "ホームページからの予約数（月次）", where: "予約システム管理画面", desc: "自社ホームページ経由の予約件数。ポータルサイト依存の脱却度と自社集客力の強さを示す最重要指標です。" },
                { kpi: "Googleマップ口コミ数と平均評価", where: "GBPインサイト", desc: "累計口コミ数と平均星評価。新規顧客が来店を判断する最重要の信頼指標であり、継続的な口コミ獲得活動の成果を反映します。" },
                { kpi: "LINEブロック率・クリック率", where: "LINE公式アカウント管理画面", desc: "配信メッセージのクリック率とブロック率。コンテンツの質・配信頻度・メッセージ設計の適切さを示す指標で、高いブロック率は設計の見直しサインです。" },
              ].map((item) => (
                <div key={item.kpi} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ minWidth: "200px", flexShrink: 0 }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "美容サロン業種の集客設計に精通", b: "エステ・脱毛・ネイル・まつエクそれぞれの業種特性・季節需要・競合構造を理解した上で集客戦略を設計します。一般的なWeb制作会社とは異なり、業種に特化した視点でGBP・SNS・ホームページを一気通貫で最適化します。" },
                { t: "景品表示法・薬機法に配慮した表現設計", b: "エステ・脱毛業界では景品表示法・薬機法に抵触しやすい表現が多く存在します。法令リスクを避けながら最大限の集客訴求力を持つコンテンツ設計を行い、安心してWebマーケティングを運用できる環境を構築します。" },
                { t: "Instagram×MEOのダブル集客を一社完結で実施", b: "Instagram運用代行・GBP最適化・ホームページ制作・LINE設計を一社で完結して対応します。制作会社・SNS代行会社・MEO会社をバラバラに契約する必要がなく、戦略の一貫性を保ちながら効率的に集客施策を進められます。" },
                { t: "小規模サロン・個人サロンに合わせた現実的な予算設計", b: "大規模予算を前提とした提案ではなく、個人サロン・一人サロンが無理なく継続できる予算規模でのプランをご用意しています。必要な施策を優先順位とともにご提案し、段階的に集客力を高める設計で支援します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.3)", background: "rgba(255,255,255,0.04)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#c4b89a", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "40px" }}>
              エステ・脱毛サロン向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "Instagram×MEOダブル集客設計", b: "Instagramでビジュアル訴求し、GBP最適化でGoogleマップ上位表示を実現する二軸集客を設計。新規顧客獲得をInstagramとGoogleの両チャネルから同時に行います。" },
                { t: "施術ビフォーアフターのビジュアル戦略", b: "撮影ディレクション・写真加工・投稿テンプレート設計まで、来店動機を最大化するビジュアルコンテンツを制作。GBP・Instagram・ホームページに一貫したビジュアル設計を行います。" },
                { t: "LINEでのリピーターCRM自動化", b: "LINE公式アカウントを活用した次回予約リマインド・お誕生日クーポン・季節メニュー告知の自動配信設定。リピート率を高める顧客フォローの仕組みを構築します。" },
                { t: "独自予約システムでホットペッパー依存軽減", b: "自社ホームページへの独自予約フォーム設置とGBP予約リンクの整備で、ホットペッパー手数料なしの予約チャネルを構築。段階的にポータル依存を軽減します。" },
              ].map((item) => (
                <div key={item.t} style={{ padding: "28px", border: "1px solid #E8E4DC", background: "#FFFFFF" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある失敗と改善策 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Common Mistakes</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              エステ・脱毛サロンのWebマーケティングでよくある失敗と改善策
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              美容サロンのWeb集客でありがちな失敗パターンと改善策をまとめました。これらを事前に把握することで、無駄な試行錯誤を省いた効率的な集客設計が実現できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "失敗01", t: "GBPに施術写真が少なくInstagramとリンクしていない", b: "Googleビジネスプロフィールに施術写真が3枚以下・InstagramへのURLが未設定という状態では、Googleマップから来たユーザーがサロンの魅力を確認できずに離脱します。改善策：施術写真を最低10枚以上掲載し、GBPのウェブサイトURLとソーシャルリンクにInstagramとホームページ両方を設定します。" },
                { n: "失敗02", t: "Instagramのプロフィールに予約リンクがなく機会損失が発生している", b: "Instagramで写真を見て「行きたい」と思ったユーザーが予約ページにたどり着けない設計では、関心が行動に転換されません。改善策：Instagramプロフィールのウェブサイト欄に予約ページURLを設定し、ストーリーズのリンクスタンプで定期的に予約への誘導を行います。" },
                { n: "失敗03", t: "薬機法・景品表示法に抵触する表現をそのまま使っている", b: "「痩身効果あり」「肌が確実に改善する」「○回で永久脱毛完了」などの表現は薬機法・景品表示法上のリスクがあります。改善策：施術の効果表現は「個人差があります」の明示と事実に基づく表現に統一し、誇大広告と判断されない適切な言葉選びをすることが安全なWebマーケティング運用の前提です。" },
                { n: "失敗04", t: "LINEを開設しただけで活用できておらず顧客との関係が切れている", b: "LINE公式アカウントを開設して友だち追加を促しても、その後の配信設計・自動返信・リマインドメッセージが整備されていない状態では、LINEは単なる「問い合わせ窓口」に留まります。改善策：施術後フォローメッセージ・次回予約リマインド・月1回のクーポン配信を最低限の運用として設定し、既存顧客との継続的な接点を維持します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "60px", flexShrink: 0, paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* コンバージョン設計 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Conversion Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              エステ・脱毛サロンのコンバージョン設計
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容サロンのWebサイトでCVR（予約転換率）を高めるためには「予約ハードルを下げる設計」が重要です。「初回体験メニュー」をホームページのファーストビューに配置し、「まず試してみる」という行動を促します。価格・所要時間・内容を一目で確認できる料金表と、予約ボタンを同じ画面内に収めることで、迷いなく予約に進める導線を作ります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                「LINE予約」「ウェブ予約」「電話予約」の3チャネルを整備し、ユーザーが好みの方法で予約できる設計にします。特にLINE予約はスマートフォンユーザーとの相性が良く、予約後のリマインドメッセージ配信も自動化できるため、予約キャンセル率の低下にも効果的です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                オーナー・施術者の顔写真と「なぜこのサロンを開いたか」というメッセージを予約ボタン付近に配置することで、初めての来店への安心感を高めます。「プライベートサロン」「完全予約制」「他のお客様と鉢合わせなし」などの安心ポイントの明示が、個人サロン特有の強みをCV設計に活かす方法です。
              </p>
            </div>
          </div>
        </section>

        {/* 業種別・メニュー別の集客アドバイス */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>By Salon Type</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "12px" }}>
              業種別・メニュー別の集客ポイント
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "48px" }}>
              エステ・脱毛・ネイル・まつエクはそれぞれ検索ニーズと競合状況が異なります。自分のサロン業種に合った施策から優先して実施することで、効率的に新規顧客を獲得できます。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "脱毛サロン", t: "コース設計の明確さと価格比較コンテンツが差別化に", b: "脱毛は価格・コース内容・通う回数が来店決定の最重要因子です。「全身脱毛○回コース 費用比較」「部位別の脱毛目安回数」など、価格と効果を具体的に示すコンテンツでSEO集客を行います。医療脱毛との違いを整理したコンテンツも検索需要が高く、専門家としての信頼構築に有効です。" },
                { n: "フェイシャルエステ", t: "肌悩み別のランディングページで検索意図に直接応答", b: "「乾燥肌 フェイシャルエステ」「毛穴 ケア エステ 葛飾区」など肌悩み×メニュー×地域のキーワードでのSEOと、「あなたの肌悩みに合わせたメニュー」という設計のランディングページが来店動機を高めます。施術前後の肌変化写真（景品表示法に配慮した表記と合わせて）が最も説得力のあるコンテンツです。" },
                { n: "ネイルサロン", t: "季節トレンドとデザインギャラリーがSNS・SEO双方に効果", b: "春ネイル・夏ネイル・クリスマスネイルなど季節コンテンツはInstagramとSEOの双方で集客力が高く、定期的なコンテンツ更新の素材になります。Instagramのフィードをデザインカタログとして活用し、「気になるデザイン→予約」という導線設計がCVRを高めます。" },
                { n: "まつエクサロン", t: "目元のビフォーアフターが新規集客の最強コンテンツ", b: "まつエクはビフォーアフターの変化が最も視覚的に伝わりやすい業種です。Instagram・GBP・ホームページのすべてで「施術前→施術後の目元」写真を中心に据えたビジュアル設計が来店動機に直結します。マツ毛の種類・本数・カールの違いを解説したコンテンツは検索需要も高くSEOにも貢献します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "60px", flexShrink: 0, paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T・信頼構築 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>E-E-A-T / Trust</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              エステ・脱毛サロンのE-E-A-T強化と信頼構築設計
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                エステ・脱毛サロンのWebサイトではGoogleが重視するE-E-A-T（経験・専門性・権威性・信頼性）を高めることがSEO評価と顧客の信頼獲得の両方につながります。オーナー・施術者の資格（エステティシャン資格・脱毛技術認定など）・施術歴・実績件数を具体的に掲載することが専門性と信頼性の証拠になります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                「なぜこのサロンを始めたか」「どんな施術哲学を持っているか」「お客様のどんな悩みを解決したいか」というオーナーストーリーは、競合サロンとの差別化に最も効果的なコンテンツです。大手チェーンにはない「人の個性」がそのままブランドになる業種であるため、Webで人柄を伝えることを重視した設計を行います。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                ChatGPT・Gemini・Perplexityなどへの引用（AIO対策）には「葛飾区の脱毛サロンの選び方」「エステのビフォーアフターで知っておくべき法律」「ネイルサロンの衛生基準と確認ポイント」など、AI検索で引用されやすい専門性の高いFAQコンテンツを自社サイトで発信することが有効です。
              </p>
            </div>
          </div>
        </section>

        {/* 対応エリア */}
        <section style={{ background: "#ffffff", padding: "48px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>Service Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "16px" }}>
              対応エリア
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              葛飾区・江戸川区・墨田区・荒川区・足立区・北区など東京東部エリアを中心に、東京都全域および近隣県のサロンにも対応しています。自宅サロン・プライベートサロン・マンション型サロンなど業態を問わず、GBP・Instagram・ホームページの集客設計をオンラインでご相談いただけます。まずはお気軽にご連絡ください。
            </p>
          </div>
        </section>

        <FaqSection items={faqItems} heading="エステ・脱毛サロンの集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="エステ・脱毛サロンの集客ご相談"
          body="個人サロン・小規模サロンのInstagram運用・MEO対策・ホームページ制作をご相談ください。ホットペッパー依存からの脱却と安定した新規集客の仕組みを構築します。"
        />
      </main>
      <Footer />
    </>
  );
}
