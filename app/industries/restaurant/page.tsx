import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import PageContactCTA from "@/components/shared/PageContactCTA"
import FaqSection from "@/components/shared/FaqSection"
import RelatedPages from "@/components/shared/RelatedPages"

export const metadata: Metadata = {
  title: "飲食店のWebマーケティング・MEO対策｜株式会社サイプレス",
  description: "飲食店のGoogleマップ上位表示・Instagram運用・口コミ獲得・食べログ連携など、飲食業に特化したWebマーケティング支援。来店数を増やす施策を一貫して提供します。",
  keywords: ["飲食店 MEO対策", "飲食店 集客", "飲食店 Webマーケティング", "飲食店 Googleマップ", "飲食店 Instagram", "飲食店 口コミ"],
  openGraph: {
    title: "飲食店のWebマーケティング・MEO対策｜株式会社サイプレス",
    description: "飲食店専門のWebマーケティング。MEO対策・Instagram・口コミ対策で来店数を最大化。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/restaurant" },
}

const MEASURES = [
  {
    num: "01",
    title: "MEO対策（Googleマップ上位表示）",
    body: "「渋谷 ランチ」「新宿 居酒屋 個室」などの地域×シーン系キーワードでGoogleマップのローカルパック（上位3件）に表示させることが最優先施策です。Googleビジネスプロフィールを徹底最適化し、競合に勝てる情報設計を行います。カテゴリ選定・メニュー登録・定期的な投稿・予約リンクの設置まで対応します。",
  },
  {
    num: "02",
    title: "Instagram運用（料理写真・ストーリー）",
    body: "飲食店においてInstagramは来店前の「下見」として機能します。美しい料理写真・スタッフの人柄が伝わるストーリー・限定メニューや季節感を伝えるリールで、フォロワーの来店動機を高めます。投稿頻度・ハッシュタグ戦略・エンゲージメント向上策をトータルで支援します。",
  },
  {
    num: "03",
    title: "食べログ・ホットペッパーとの連携",
    body: "食べログやホットペッパーグルメはGoogleマップと並んで飲食店の集客に欠かせないプラットフォームです。各プラットフォームのプロフィール最適化・写真更新・口コミ促進の仕組みを整えることで、自社集客とプラットフォーム集客の両方を強化します。",
  },
  {
    num: "04",
    title: "口コミ獲得・返信対策",
    body: "Googleの口コミはMEO順位を決める最重要因子のひとつです。自然に高評価口コミを増やすQRコードを活用した導線設計と、ネガティブ口コミへの誠実かつブランドを守る返信テンプレートを提供します。口コミ件数・平均点・返信率の継続的な改善をサポートします。",
  },
  {
    num: "05",
    title: "Googleビジネスプロフィール写真・メニュー投稿",
    body: "Googleビジネスプロフィールの写真の質と更新頻度は来店決定に直接影響します。料理・外観・内観・スタッフ写真を定期的に追加し、メニュー情報・価格帯・特徴を最新状態に保つことで、検索ユーザーの来店判断を後押しします。",
  },
  {
    num: "06",
    title: "地域SEO（「渋谷 ランチ」等のキーワード）",
    body: "自社ホームページにおいても、地域名＋料理ジャンル・シーン・特徴キーワードのコンテンツを整備することで、Google検索のオーガニック結果での集客も強化します。MEOと地域SEOを組み合わせることで、Googleの検索結果ページでの占有率が大幅に向上します。",
  },
]

const faqItems = [
  {
    q: "飲食店でMEO対策を始めるには何から着手すれば良いですか？",
    a: "まずGoogleビジネスプロフィールのオーナー確認と基本情報の整備から始めます。住所・電話番号・営業時間・メニュー・写真の設定を完璧にした上で、口コミ獲得の仕組みを作ることが最初のステップです。競合店舗の状況を分析した上で優先施策を決めることで、投資対効果を最大化できます。",
  },
  {
    q: "InstagramとGoogleマップはどちらを優先すべきですか？",
    a: "業態や立地によって異なりますが、「今すぐ食べたい」という即時来店を促すにはGoogleマップ（MEO）が最も効果的です。Instagramはファン作り・リピーター育成・新メニューの告知に強みがあります。どちらか一方ではなく、MEOで新規来客を獲得し、Instagramでリピーターを育てる組み合わせが理想です。",
  },
  {
    q: "口コミが少ないのですが、どうやって増やせますか？",
    a: "会計時にGoogleの口コミ投稿ページに直接アクセスできるQRコードを作成し、卓上POP・レシート・名刺などに掲示する方法が最も効果的です。「口コミを書いてください」と直接依頼することもGoogleのガイドラインの範囲内で有効です。口コミには全件返信することで新規ユーザーへの信頼度も向上します。",
  },
  {
    q: "食べログの評点が低いのですが改善できますか？",
    a: "食べログの評点はGoogleとは異なる独自アルゴリズムで計算されており、評点を直接操作することはできません。しかし、口コミの質と量を継続的に改善し、プロフィール情報を充実させ、写真を更新することで評点の自然な改善を促すことができます。また、Google検索での自社サイトとGoogleマップの強化により、食べログ以外からの集客を増やす戦略も有効です。",
  },
  {
    q: "MEO対策の効果はどのくらいで出ますか？",
    a: "Googleビジネスプロフィールの基本最適化（情報整備・写真追加・初期口コミ獲得）は2〜4週間で効果が現れることがあります。安定した上位表示には3〜6ヶ月の継続的な取り組みが必要です。競合が少ないエリアや業態では、早期に成果が出るケースもあります。",
  },
  {
    q: "飲食店のWebサイトはGoogleマップとどう連携させますか？",
    a: "Googleビジネスプロフィールのウェブサイトリンクに自社ホームページを設定し、メニュー・予約ページへのリンクを整備することでGoogleマップからの直接来店・予約につながります。ホームページのNAP情報（店名・住所・電話）をGBPと一致させることがMEO評価向上にも重要です。",
  },
  {
    q: "テイクアウト・デリバリーの集客にもMEOは有効ですか？",
    a: "はい。GBPにテイクアウト・デリバリー対応を明記し、Uber Eats・出前館などの配達プラットフォームリンクを追加することで検索からデリバリー注文への導線を整備できます。「〇〇駅 テイクアウト」「〇〇区 弁当 配達」などの検索にも対応できます。",
  },
  {
    q: "チェーン店と個人経営の飲食店で集客戦略は違いますか？",
    a: "個人経営・小規模飲食店はGoogleマップのMEO対策が特に有効です。大手チェーンに比べて地域競合が少ない場合が多く、口コミの一つひとつが「顔の見えるオーナーへの評価」として価値を持ちます。地元密着・手作り感・オーナーの個性を前面に出した集客が差別化ポイントになります。",
  },
]

export default function RestaurantIndustryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/industries" className="hover:underline" style={{ color: "#6B7280" }}>業種別対応</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>飲食店</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Restaurant Marketing
            </p>
            <h1 className="font-black text-[40px] md:text-[56px] leading-tight tracking-tight mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              飲食店の<br />Webマーケティング
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              飲食店の集客は、GoogleマップとInstagramが二大チャネルです。「近くのランチ」「今夜の居酒屋」という購買直前の検索でトップに表示されることが、来店数増加への最短ルートです。サイプレスは飲食業の集客特性を熟知した上で、MEO・SNS・口コミ対策をトータルで支援します。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section className="relative" style={{ height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_20 (1).png" alt="和食レストランの温かみあるカウンター席 — 飲食店のMEO対策・Web集客" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.18)" }} />
        </section>

        {/* 飲食店の集客課題 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Challenges
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              飲食店の集客課題
            </h2>
            <div className="max-w-3xl space-y-6">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                飲食店の集客は「Googleマップ」「食べログ・ホットペッパー」「Instagram」「口コミ」の4つのチャネルが中心です。スマートフォンで「近くのランチ」「今夜の居酒屋 新宿」と検索したユーザーが最初に見るのはGoogleマップのローカルパックです。ここに表示されているかどうかが来店数に直結しています。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                多くの飲食店がGoogleビジネスプロフィールの基本情報しか設定しておらず、写真の更新・口コミへの返信・定期投稿・メニュー情報の整備といった継続施策が停滞しています。これらを丁寧に積み重ねるだけで、競合に大きな差をつけることができます。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                Instagramは飲食店にとって「食べる前の下見」として機能します。料理の写真・店内の雰囲気・スタッフの人柄が伝わるコンテンツが来店動機を高めます。食べログや口コミとも連動した統一感のある情報発信が、信頼性を高めて来店転換率を向上させます。
              </p>
            </div>
          </div>
        </section>

        {/* 施策一覧 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Effective Measures
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              飲食店に効果的な施策
            </h2>
            <div className="max-w-3xl">
              {MEASURES.map((item, i) => (
                <div
                  key={item.num}
                  className="grid grid-cols-[48px_1fr] gap-6 py-8"
                  style={{ borderTop: "1px solid #ece8e0", borderBottom: i === MEASURES.length - 1 ? "1px solid #ece8e0" : undefined }}
                >
                  <span className="text-[12px] font-mono pt-0.5" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-3" style={{ color: "#0d1b2a" }}>{item.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 飲食店特有の集客のポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)", letterSpacing: "0.25em" }}>
              Key Points
            </p>
            <h2 className="font-black text-[28px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              飲食店特有の集客のポイント
            </h2>
            <div className="max-w-3xl space-y-5">
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                飲食店の集客で見落とされがちなポイントは「情報の一貫性」です。Googleマップ・食べログ・ホットペッパー・Instagram・自社サイトの情報（店名・住所・電話番号・営業時間）が一致していないと、Googleからの信頼性評価が下がり、MEO順位に悪影響が出ます。まず全プラットフォームの情報統一から始めることが重要です。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                また、飲食店は季節・曜日・天気・周辺イベントによって来客数が大きく変動します。繁忙期前に口コミ獲得施策を強化し、閑散期に向けてGoogleビジネスプロフィールへの投稿頻度を上げるなど、季節に合わせた戦略的な運用が長期的な集客安定につながります。
              </p>
              <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                サイプレスでは月次レポートで口コミ件数・平均評価・Googleマップでの検索表示回数・実際の電話・ルート案内の件数を確認しながら、継続的に改善を積み重ねます。成果が数字で確認できる透明性の高い支援を提供しています。
              </p>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="飲食店のWebマーケティングに関するよくある質問" bgColor="#F9F8F5" />

        <RelatedPages
          links={[
            { href: "/meo", label: "MEO対策", desc: "Googleマップ上位表示の方法" },
            { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域検索での集客強化" },
            { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金" },
            { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行" },
            { href: "/industries", label: "業種別対応一覧", desc: "他業種の集客事例" },
          ]}
        />

        <PageContactCTA
          heading="飲食店の集客改善をサポートします"
          body="Googleマップでの上位表示・Instagram運用・口コミ対策など、飲食店の集客に特化した施策をご提案します。現在の状況を無料で診断いたします。"
        />
      </main>
      <Footer />
    </>
  )
}
