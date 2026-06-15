import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "【美容室・ヘアサロンのMEO・Instagram集客】ホットペッパー依存脱却で指名予約を増やす｜株式会社サイプレス",
  description: "美容室・ヘアサロンのGoogleマップ上位表示・Instagram運用・ホームページ制作で新規顧客と指名予約を増やします。ホットペッパービューティー依存からの脱却も支援。",
  keywords: ["美容室 MEO対策", "美容室 Instagram", "ヘアサロン 集客", "美容室 ホームページ", "美容室 ホットペッパー 脱却", "ヘアサロン 新規集客"],
  openGraph: {
    title: "【美容室・ヘアサロンのMEO・Instagram集客】ホットペッパー依存脱却で指名予約を増やす｜株式会社サイプレス",
    description: "美容室・ヘアサロンのWeb集客。MEO・Instagram・ホームページで新規来店と指名予約を増やします。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/hair-salon" },
};

const faqItems = [
  {
    q: "美容室はMEOとInstagramどちらから始めるべきですか？",
    a: "新規集客が目的ならMEO（Googleマップ対策）が優先です。「駅名＋美容院」の検索からの来店は購買意欲が高く、予約直結率も高いです。Instagramはフォロワー増加・ブランド構築・指名育成が得意です。予算があれば並行して行うことが最大の効果を生みます。",
  },
  {
    q: "美容院のGoogleマップ口コミはどうやって増やせますか？",
    a: "施術後にQRコード・LINEで口コミリンクを送るフローが最も効果的です。「よろしければGoogleマップに感想を」と一言添えるだけで口コミ率が上がります。来店直後の満足度が高いタイミングを逃さないことが重要です。口コミには全件丁寧に返信することで次の来店者への信頼感も高まります。",
  },
  {
    q: "ホットペッパービューティーに掲載しているのにGoogleマップも必要ですか？",
    a: "はい。ホットペッパーはポータルサイト内のみの集客ですが、Googleマップは外部からの自然流入です。Googleマップ経由の顧客は手数料が発生せず、自社顧客として定着しやすいため、ポータル依存からの脱却にもつながります。両方を持つことで集客チャネルのリスク分散にもなります。",
  },
  {
    q: "美容室のInstagramのフォロワーを増やすコツは？",
    a: "ビフォーアフター・スタイリングプロセスのリール動画が最も拡散されます。週2〜3回の継続投稿と地域ハッシュタグ（#葛飾区美容院・#亀有ヘアサロン）の活用がローカルフォロワーを増やす鍵です。スタイリスト個人アカウントとの連携も有効です。",
  },
  {
    q: "個人経営・小規模の美容室でもWeb集客はできますか？",
    a: "はい。個人経営のサロンこそGoogleマップ集客が効果的です。大手チェーンよりも競合が少なく、丁寧なサービスと地元密着を口コミで積み上げることで、Googleマップ上位表示を実現できるケースが多くあります。個人の「人柄」と「技術」を前面に出した集客が差別化になります。",
  },
  {
    q: "美容室のホームページには何を掲載すべきですか？",
    a: "メニュー・料金表・スタイリスト紹介・サロンの雰囲気写真・アクセス・予約フォームが必須です。スタイリストの個性や得意なスタイルを前面に出すことで指名予約を促せます。Instagramの埋め込みでスタイル実績をリアルタイムで見せる設計も効果的です。",
  },
  {
    q: "LINE公式アカウントは美容室の集客に役立ちますか？",
    a: "非常に有効です。来店後のLINE登録を促し、クーポン・次回予約リマインド・新メニュー告知を配信することでリピート率が向上します。予約受付をLINEで行うことで電話対応の負担軽減にもなります。ホットペッパーに頼らない顧客管理の基盤になります。",
  },
  {
    q: "スタイリスト個人のInstagramと店舗アカウントはどう使い分けますか？",
    a: "店舗アカウントはサロン全体のブランドイメージ・メニュー情報・キャンペーン告知に、スタイリスト個人アカウントは担当者の得意スタイル・センス・人柄の発信に活用します。個人アカウントで指名を育て、店舗アカウントで新規顧客への信頼を構築する二層構造が指名予約の増加に最も効果的です。",
  },
  {
    q: "美容室のWeb集客にどのくらいの費用がかかりますか？",
    a: "MEO対策は月額2〜4万円、Instagram運用代行は月額3〜8万円、ホームページ制作は30〜80万円が目安です。現状のGoogleマップ順位・競合状況・SNSフォロワー数に応じて最適なプランをご提案します。まずは無料相談をご利用ください。",
  },
  {
    q: "縮毛矯正・白髪染めなど特定メニューへの集客はできますか？",
    a: "はい。「葛飾区 縮毛矯正」「亀有 白髪染め 美容室」など、特定メニュー×地域のキーワードで専用ページを作成し、SEOとGBPを最適化することで特定メニューへの問い合わせを集中的に増やすことができます。得意なメニューへの集客特化は収益性の向上にもつながります。",
  },
];

const relatedLinks = [
  { href: "/sns/instagram", label: "Instagram運用代行", desc: "美容室向けInstagram戦略" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金プラン" },
  { href: "/seo/local-seo", label: "ローカルSEO対策", desc: "地域検索での集客強化" },
  { href: "/industries/beauty", label: "エステ・ネイル・まつエクの集客", desc: "美容サロン全般の集客支援" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリア対応" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリア全域対応" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "サロン向け撮影・写真戦略" },
  { href: "/web-design", label: "ホームページ制作", desc: "美容室向けサイト制作" },
  { href: "/cost/meo", label: "MEO対策の料金", desc: "MEO対策の費用相場" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
];

export default function HairSalonIndustryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://www.cypress-all.co.jp/" },
          { "@type": "ListItem", "position": 2, "name": "業種別Web集客", "item": "https://www.cypress-all.co.jp/industries" },
          { "@type": "ListItem", "position": 3, "name": "美容室・ヘアサロンのWeb集客", "item": "https://www.cypress-all.co.jp/industries/hair-salon" },
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
              <span style={{ color: "#0d1b2a" }}>美容室・ヘアサロン</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "16px" }}>
              Hair Salon Marketing
            </p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,5vw,56px)", color: "#0d1b2a", fontWeight: 900, lineHeight: 1.2, marginBottom: "24px" }}>
              美容室・ヘアサロンの<br />MEO・Instagram集客
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              美容室・ヘアサロンの集客はGoogleマップとInstagramの二本柱が最も効果的です。「○○駅 美容室」という検索でGoogleマップ上位に表示されることで来店意欲の高い新規顧客を獲得し、Instagramでスタイルを見せることでフォロワーを指名顧客に育てます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px", marginBottom: "16px" }}>
              ホットペッパービューティーに頼りきりの状態では、掲載料・手数料のコスト増加と、プラットフォームの仕様変更リスクを抱え続けます。Googleマップと自社ホームページを軸にした自社集客体制を構築することで、ポータルサイト依存から脱却し、安定した新規来店を実現できます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", maxWidth: "640px" }}>
              個人サロン・少人数サロン・複数店舗展開まで、美容室の規模・スタイルに応じた集客戦略をご提案します。スタイリストの個性を活かした指名予約の増加も含めてトータルで支援します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_09_20 (2).png"
            alt="美容室でのスタイリスト相談"
            fill
            className="object-cover"
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
              美容室・ヘアサロンが抱える集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "Instagramのフォロワーが増えず新規顧客への影響が出ていない", b: "投稿しているのにフォロワーが増えない・エンゲージメントが低い原因は、ハッシュタグ戦略の欠如・投稿頻度の低下・リール動画の未活用にあります。スタイル写真の質とビフォーアフター動画の活用が、美容室Instagramの命綱です。" },
                { n: "02", t: "ホットペッパービューティーへの依存で手数料コストが増大している", b: "ホットペッパーの掲載費・予約手数料は年々上昇しています。新規顧客はホットペッパーで獲得できても、リピート顧客になった時点でポータルを外した自社集客に移行できていないと、永続的にコストを払い続けることになります。" },
                { n: "03", t: "新規顧客が来ない・指名スタイリストへの予約が増えない", b: "Googleマップに表示されていない・写真が少ない・口コミが少ない状態では、「今日行く美容室を探している」ユーザーに選ばれません。指名予約を増やすにはスタイリストの個性をInstagramとGBPで発信し、ファンを育てる仕組みが必要です。" },
                { n: "04", t: "スタイル写真のクオリティが低く来店意欲を高められていない", b: "スマートフォンで撮った暗い・ピントが合っていないスタイル写真は、美容室としての技術力の低さを連想させます。照明・アングル・背景を工夫した高品質な写真が「このスタイリストにお願いしたい」という来店動機を作ります。" },
                { n: "05", t: "GBPの写真が古く、現在のサロンの雰囲気が伝わっていない", b: "Googleマップのプロフィール写真が数年前のもの・少ない状態では、現在の内装・スタッフ・雰囲気が伝わりません。GBPの写真は来店前の決定打になるため、定期的な更新と質の高い内装・外観・スタッフ写真の追加が欠かせません。" },
                { n: "06", t: "口コミ数が少なく競合との信頼度差が広がっている", b: "口コミ50件と5件のサロンが並んだとき、多くのユーザーは口コミが多い方を選びます。口コミ獲得のフロー（QRコード・LINE送信・カード配布）を整備し、来店のたびに自然に口コミが増える仕組みを作ることが競合との差別化につながります。" },
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
              美容室・ヘアサロンのSEO・MEO戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容室のMEO対策で最も効果的なキーワードは「地域名＋美容室」「駅名＋ヘアサロン」「地域名＋縮毛矯正」など、地域と施術メニューを組み合わせたキーワードです。例：「葛飾区 美容室」「亀有 ヘアサロン」「金町 縮毛矯正」「亀有 白髪染め」。これらのキーワードでGoogleマップのローカルパックに表示されることが、来店意欲の高い新規顧客への最短アクセスです。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                自社ホームページでは施術メニュー別のページを作成し、SEOキーワードを組み込みます。「葛飾区での縮毛矯正の費用と特徴」「亀有エリアで人気のヘアカラーメニュー」など、地域+メニューの記事コンテンツが検索流入を生み出します。ブログ記事（月2〜4本）を継続することで長期的な検索流入の積み上げができます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                LocalBusiness SchemaをHairSalon typeで実装し、サービス内容・価格帯・対応エリアを構造化データとして設定します。これによりGoogleの理解が深まり、関連検索での表示機会が増えます。
              </p>
            </div>
          </div>
        </section>

        {/* MEO・Googleマップ活用術 */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>MEO Tips</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              美容室・ヘアサロンのGoogleマップ活用術（MEO）
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容室のGBPで最も重要な要素は「写真の質と量」です。スタイル完成写真・ビフォーアフター・内装・外観・スタッフ写真を合計50枚以上用意し、週1〜2枚のペースで継続的に追加します。写真の閲覧数はGBPのパフォーマンス指標に影響し、閲覧数が多いサロンほどGoogleマップでの表示順位が上がりやすくなります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                ホットペッパービューティーの予約リンクをGBPに設定するだけでなく、自社サイトの予約ページリンクも同時に設定します。GBP経由の自社予約はホットペッパーの手数料が発生しないため、段階的に自社予約の比率を高めていくことが収益改善につながります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                GBP投稿（週2回）では施術メニューの紹介・季節のヘアトレンド・スタッフのおすすめスタイルを発信します。「期間限定のトリートメントキャンペーン」「新メニュー追加のお知らせ」など、ユーザーが来店するきっかけになる情報を継続的に発信することが集客効果を維持します。
              </p>
            </div>
          </div>
        </section>

        {/* SNS・コンテンツ戦略 */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>SNS Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 800, marginBottom: "24px" }}>
              美容室・ヘアサロンのSNS・コンテンツ戦略
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容室のInstagram戦略で最も拡散力が高いコンテンツは「ビフォーアフターのリール動画」です。施術前と施術後の変化を動画で見せることで、技術力と変化の大きさが視覚的に伝わります。リール動画は通常の投稿の3〜5倍の閲覧数を獲得しやすく、フォロワー外へのリーチが大幅に増えます。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                ハッシュタグ戦略は「地域タグ×スタイルタグ×メニュータグ」の三層構造で設計します。例：#葛飾区美容室 #亀有ヘアサロン（地域タグ）+ #縮毛矯正 #ボブスタイル（スタイルタグ）+ #ヘアカラー #トリートメント（メニュータグ）。30個のハッシュタグを投稿ごとに最適化することで、多様な検索からの流入を獲得します。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                スタイリスト別Instagramアカウントの運用は指名予約増加に直結します。各スタイリストが自分の得意なスタイル・センス・人柄を発信することで、「このスタイリストに担当してもらいたい」というファンが育ちます。店舗アカウントとスタイリスト個人アカウントを相互にタグ付けすることで、フォロワーの拡大と指名予約の増加を同時に実現できます。
              </p>
            </div>
          </div>
        </section>

        {/* サイプレスができること */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#FFFFFF", fontWeight: 800, marginBottom: "40px" }}>
              美容室・ヘアサロン向けにサイプレスができること
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", maxWidth: "900px" }}>
              {[
                { t: "Instagram毎日投稿＋リール活用代行", b: "スタイル写真のキャプション作成・ハッシュタグ設計・リール動画の構成提案・投稿スケジュール管理まで一括代行。エンゲージメントを高め、フォロワーを来店顧客に変える運用を行います。" },
                { t: "MEO（地域×美容室キーワード）対策", b: "「葛飾区 美容室」「亀有 ヘアサロン」など地域+業態キーワードのGoogleマップ上位表示を目指して、GBP最適化・写真充実・口コミ獲得を継続実施します。" },
                { t: "ホットペッパー依存脱却の自社集客設計", b: "自社予約サイト・LINE予約・GBP予約を整備し、ホットペッパーからの顧客を段階的に自社集客に移行する設計を行います。手数料コストの削減と顧客の自社資産化を実現します。" },
                { t: "スタイリスト別Instagram・指名予約増加設計", b: "各スタイリストのInstagramアカウント設計・店舗アカウントとの連動設計で指名予約を増加させます。スタイリストの個性と得意メニューを活かした投稿計画を作成します。" },
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
              美容室の選ばれるWebサイトの作り方
            </h2>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                美容室のWebサイトは「このサロンに行きたい」という感情を引き出すデザインが最優先です。トップページのメインビジュアルにはサロンの世界観を体現する高品質な写真を使用し、スタイル写真・内装・スタッフの笑顔が一体となったブランドイメージを構築します。ホットペッパーとの差別化要素として「オーナー・スタイリストの人柄」「こだわりの施術へのアプローチ」「サロンの哲学」を言語化したコンテンツが重要です。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginBottom: "24px" }}>
                スタイリスト紹介ページは指名予約増加の最重要ページです。顔写真・得意なスタイル・資格・趣味・一言メッセージを掲載し、来店前から「担当スタイリストへの信頼感」を育てます。Instagramへのリンクを設置することで、スタイリストの最新作品を確認した上での指名予約につながります。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151" }}>
                メニュー・料金ページは「金額への不安解消」として機能します。「初回限定割引」「学生割引」「頭皮ケア込みのトリートメントコース」など、メニューの詳細と料金目安を明記することで来店ハードルを下げます。予約ボタンは全ページのヘッダー固定で表示し、「行きたい」と思った瞬間に予約できる導線設計にします。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="美容室・ヘアサロンのWeb集客に関するよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="美容室・ヘアサロンのWeb集客ご相談"
          body="MEO対策・Instagram運用・ホームページ制作まで、美容室専門の集客支援をご提供します。ホットペッパー依存からの脱却相談も歓迎です。"
        />
      </main>
      <Footer />
    </>
  );
}
