import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS運用・SNSマーケティングサービス｜Instagram・X・LINE活用で集客｜株式会社サイプレス",
  description:
    "株式会社サイプレスのSNS運用サービス。Instagram・X（Twitter）・LINE・TikTokの運用代行・コンテンツ制作・広告支援で集客とブランディングを強化。東京都葛飾区を拠点に全国対応。",
  keywords: ["SNS運用", "SNSマーケティング", "Instagram運用", "SNS代行", "LINE公式アカウント", "TikTok運用"],
  openGraph: {
    title: "SNS運用・SNSマーケティングサービス｜Instagram・X・LINE活用で集客｜株式会社サイプレス",
    description: "サイプレスのSNS運用サービス。Instagram・X・LINE・TikTokの運用代行と広告支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/sns" },
};

const faqItems = [
  {
    q: "SNS運用代行ではどんなことをやってもらえますか？",
    a: "投稿テキスト・画像・リール（動画）の制作、ハッシュタグ設定、投稿スケジュール管理、コメント・DM返信の管理支援、インサイト分析・月次レポートなどを代行します。プラットフォーム（Instagram・X・LINE・TikTok）と運用範囲はご要件に応じてプランを設計します。",
  },
  {
    q: "どのSNSに注力すればいいですか？",
    a: "業種・ターゲット年齢層・目的によって異なります。飲食・美容・ライフスタイル系は写真・動画重視のInstagramやTikTok、BtoB・情報発信はX（Twitter）、既存顧客とのコミュニケーション・予約はLINE公式アカウントが向いています。まずはターゲット層が最も使っているプラットフォームに絞ることをお勧めします。",
  },
  {
    q: "投稿の写真・動画撮影は依頼できますか？",
    a: "基本的なコンテンツ（文字入り画像・簡易動画）はサイプレスで制作可能です。店内・商品・スタッフが登場する本格的な写真・動画撮影は外部カメラマン・映像制作者との連携になります。素材をご提供いただければ編集・加工から対応します。",
  },
  {
    q: "フォロワーはどのくらいで増えますか？",
    a: "フォロワー数は業種・コンテンツ品質・投稿頻度・ハッシュタグ戦略・広告活用の有無によって大きく異なります。フォロワー数より「来店・問い合わせ・売上」といった実際のビジネス効果を重視した運用をご提案します。フォロワー数の急増を約束するサービスは行っておりません。",
  },
  {
    q: "LINE公式アカウントの活用支援もできますか？",
    a: "はい。LINE公式アカウントの開設・初期設定・リッチメニュー設計・定期配信メッセージの作成・友だち追加促進の導線設計まで対応します。予約や問い合わせ窓口としてのLINE活用、既存顧客へのリテンション施策としての活用もご支援します。",
  },
  {
    q: "SNS広告（Meta広告・LINE広告）も依頼できますか？",
    a: "はい、Instagram・Facebookを対象とするMeta広告、LINE広告の設定・運用代行に対応しています。ターゲット設定・クリエイティブ制作・予算配分・効果計測まで一貫してご支援します。",
  },
  {
    q: "既にSNSを運用しているが伸び悩んでいる。改善してもらえますか？",
    a: "はい。現在の運用状況（インサイトデータ・投稿内容・ハッシュタグ・フォロワー属性）を診断し、改善ポイントをご提案します。競合アカウントの分析・バズったコンテンツの傾向分析もあわせて実施します。",
  },
  {
    q: "SEO対策やMEO対策と組み合わせてお願いできますか？",
    a: "はい、SNS運用をSEO・MEO・Web制作と組み合わせた統合的なWebマーケティング支援が可能です。Webサイトへの流入増加・MEO対策との連携・ブランド認知向上をトータルで設計します。",
  },
];

const relatedLinks = [
  { href: "/sns", label: "SNSマーケティングとは", desc: "SNS活用の基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索からの集客強化" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップからの集客" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "SNSからの流入先ページ設計" },
  { href: "/cost/sns", label: "SNS運用の費用", desc: "料金プランと相場" },
  { href: "/industries/restaurant", label: "飲食店のSNS活用", desc: "飲食店向けInstagram運用" },
  { href: "/industries/beauty", label: "美容室のSNS活用", desc: "サロン向けSNS集客" },
  { href: "/knowledge/instagram-strategy", label: "Instagram運用ガイド", desc: "フォロワー増加と集客の方法" },
  { href: "/knowledge/line-official", label: "LINE公式アカウント活用", desc: "既存顧客へのリテンション施策" },
  { href: "/column/sns", label: "SNSコラム", desc: "SNSマーケティングの最新情報" },
  { href: "/area/tokyo", label: "東京のSNS運用支援", desc: "東京エリアの対応" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function ServicesSnsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>SNS運用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>SNS Marketing Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS運用サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのSNS運用サービスは、Instagram・X（Twitter）・LINE・TikTokの運用代行・コンテンツ制作・広告支援を通じて、集客とブランディングを強化します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              フォロワー数を増やすことよりも、実際の来店・問い合わせ・売上につながるSNS活用を重視した運用設計を行います。SEO・MEOと組み合わせた統合的なWebマーケティング支援も可能です。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/sns" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/8.png" alt="SNS運用・Instagram・LINE公式アカウント・TikTok活用のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* サービス内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS運用サービスの内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "SNS戦略設計", body: "ビジネス目標・ターゲット・競合アカウント分析を踏まえ、どのプラットフォームに何のコンテンツを投稿するかの運用戦略を設計します。" },
                { title: "コンテンツ制作・投稿代行", body: "投稿テキスト・画像・リール・ストーリーズの制作と、スケジュールに従った投稿を代行します。ブランドトーンを統一した品質のコンテンツを継続制作します。" },
                { title: "ハッシュタグ戦略", body: "業種・地域・コンテンツに合わせた効果的なハッシュタグを選定します。リーチ拡大に向けて定期的に見直しを行います。" },
                { title: "LINE公式アカウント支援", body: "LINE公式アカウントの初期設定・リッチメニュー設計・配信メッセージ作成・友だち追加促進の導線設計を行います。" },
                { title: "SNS広告（Meta広告・LINE広告）", body: "ターゲット設定・クリエイティブ制作・予算管理・効果計測・改善を行うSNS広告の運用代行です。" },
                { title: "インサイト分析・月次レポート", body: "フォロワー数・リーチ・インプレッション・エンゲージメント率・プロフィールアクセス数などのインサイトデータを毎月分析してレポートします。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SNS集客が重要な理由 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Why SNS Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              SNS集客が重要な理由｜今の検索行動の変化
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "ユーザーの情報収集がSNS中心に",
                  body: "Z世代の多くはGoogleより先にInstagramで情報を検索する傾向があります（参考値）。SNSは検索エンジンの代替として機能し始めており、SNS上での存在感が集客を左右します。",
                },
                {
                  title: "飲食・美容・ファッション分野のSNS依存度",
                  body: "「来店のきっかけ」としてInstagramを挙げる消費者が増加しています。SEOよりも購買決定に近い位置にあり、SNSは今や集客の最前線です。",
                },
                {
                  title: "UGC（ユーザー生成コンテンツ）の信頼性",
                  body: "企業の広告より、実際のユーザー投稿・口コミが購買判断に影響しやすい。UGCを生み出す仕組みをSNS運用の中に設計することで、自然な口コミ拡散を促せます。",
                },
                {
                  title: "SNS×MEO×SEOの相乗効果",
                  body: "SNSで認知→Googleマップで評価確認→予約・来店という導線が一般化しています。SNS単体ではなく、MEO・SEOと連動させることで集客効果が高まります。",
                },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#FFFFFF" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* プラットフォーム別活用ガイド */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Platform Guide</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              プラットフォーム別 活用ガイド
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  num: "01",
                  platform: "Instagram",
                  target: "飲食・美容・ライフスタイル",
                  body: "写真・リール中心のビジュアルコンテンツが強み。来店前の情報収集として活用されやすく、飲食・美容・ファッション・インテリアなど「見た目」で価値が伝わる業種に最適。",
                },
                {
                  num: "02",
                  platform: "X（Twitter）",
                  target: "情報発信・ニュース・BtoB",
                  body: "テキスト・リンク中心のリアルタイム情報発信に強い。BtoB企業・専門家・メディアとの繋がりを作りやすく、業界知識の発信でブランディングを高める用途に向いている。",
                },
                {
                  num: "03",
                  platform: "LINE公式アカウント",
                  target: "既存顧客へのリテンション",
                  body: "クーポン・予約・お知らせ配信に強く、友だち登録した既存顧客への継続的なコミュニケーションに最適。開封率がメールより高く、来店・再購入促進の導線として機能する。",
                },
                {
                  num: "04",
                  platform: "TikTok",
                  target: "若年層・エンタメ・飲食",
                  body: "縦型短尺動画でバズりやすいアルゴリズム。フォロワーゼロでも良質なコンテンツで拡散される可能性があり、若年層へのリーチや飲食店・エンタメ系のブランド認知拡大に有効。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <p className="font-bold text-[15px]" style={{ color: "#0d1b2a" }}>{item.platform}</p>
                      <span className="text-[11px] px-2 py-0.5" style={{ background: "#E8E4DC", color: "#374151" }}>{item.target}</span>
                    </div>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* SNS運用で避けるべき失敗 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Common Mistakes</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              SNS運用で避けるべき5つの失敗
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                "フォロワー数だけ追いかけてCV導線を作らない",
                "投稿頻度が不安定でアルゴリズムに評価されない",
                "「商品紹介だけ」の一方的な投稿でエンゲージメントが低い",
                "業種・ターゲットに合わないプラットフォームを選んでいる",
                "インサイトデータを見ずに改善できていない",
              ].map((text, i) => (
                <div key={i} className="flex gap-5 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ background: "#FEE2E2", color: "#DC2626", minWidth: "24px", minHeight: "24px" }}
                  >
                    ✕
                  </span>
                  <p className="text-[14px] leading-[1.8] pt-0.5" style={{ color: "#374151" }}>{text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SNS運用サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SNS運用サービスの無料相談"
          body="現在のSNS活用状況をお聞きし、最適な運用戦略をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
