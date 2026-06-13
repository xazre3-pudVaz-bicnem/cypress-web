import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "SNS運用｜Instagram・X・LINE公式アカウント運用代行｜株式会社サイプレス",
  description:
    "Instagram・X（旧Twitter）・LINE公式アカウントの運用代行。投稿企画から画像制作・ハッシュタグ設計・MEOとの連動まで、地域ビジネスのSNS集客を支援します。",
  keywords: ["SNS運用", "Instagram運用代行", "LINE公式アカウント", "SNS集客", "Instagram代行"],
  openGraph: {
    title: "SNS運用｜Instagram・X・LINE公式アカウント運用代行｜株式会社サイプレス",
    description:
      "Instagram・X・LINE公式アカウントの運用代行。投稿企画から画像制作・MEO連動まで地域ビジネスのSNS集客を支援します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/services/sns" },
};

const faqItems = [
  {
    q: "SNS運用を外注するメリットは何ですか？",
    a: "SNSは継続的な投稿と分析が必要で、日常業務と並行して行うのは多くの事業者にとって大きな負担です。外注することで、投稿の品質と継続性を確保しながら、本来の業務に集中できます。プロの視点でハッシュタグ設計・投稿タイミング・コンテンツ企画を行うことで、フォロワー増加やエンゲージメント向上の速度も高まります。",
  },
  {
    q: "どのSNSの運用を依頼できますか？",
    a: "Instagram・X（旧Twitter）・LINE公式アカウントを中心に対応しています。業種・ターゲット層に応じて最も効果的なプラットフォームをご提案します。複数SNSの一括運用も可能です。",
  },
  {
    q: "写真・画像の撮影も依頼できますか？",
    a: "基本的には貴社にてご用意いただいた写真・動画素材を活用して投稿を制作します。写真素材がない場合は、スマートフォンで撮影するためのガイドラインをご提供するほか、撮影サポートについてもご相談ください。",
  },
  {
    q: "MEO対策とSNS運用を組み合わせる効果は？",
    a: "InstagramやX（旧Twitter）での投稿がGoogleビジネスプロフィールの最新情報と連動することで、検索エンジンとSNSの両面から認知を高められます。また、SNSでのエンゲージメントがブランド検索の増加につながり、ローカルSEO・MEOの順位向上にも波及効果があります。",
  },
  {
    q: "効果の確認はどうすれば良いですか？",
    a: "月次でSNSの主要指標（フォロワー数・リーチ数・エンゲージメント率・プロフィールアクセス数・Webサイトクリック数など）をレポートとしてご報告します。数値の推移と改善施策を毎月共有します。",
  },
];

const relatedLinks = [
  { href: "/services/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/meo/store-marketing", label: "店舗マーケティング", desc: "店舗集客の総合戦略" },
  { href: "/services/ai", label: "AI活用支援", desc: "SNS投稿のAI自動化" },
];

export default function SnsServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-16 pb-14" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A]">ホーム</Link>
              <span>/</span>
              <Link href="/business" className="hover:text-[#0F172A]">事業内容</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>SNS運用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#0F172A" }}>
              SNS運用
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              SNSは発信を続けることで初めて集客力になります。Instagram・X・LINE公式アカウントの投稿企画から画像制作・ハッシュタグ設計・月次分析まで、地域ビジネスのSNS集客を継続的に支援します。MEO対策との連動で相乗効果を最大化します。
            </p>
          </div>
        </section>

        {/* Visual section */}
        <section className="relative" style={{ height: "400px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_21_48.png"
            alt="スマートフォンを一緒に見る2人の女性 — SNS運用・Instagram集客のイメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.15)" }} />
        </section>

        {/* SNS運用の役割 */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>About</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>SNS運用の役割</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  SNSは単なる情報発信ツールではなく、地域ビジネスにとって重要な集客チャネルです。「Instagramで見つけた」「Xで話題になっていた」「LINEでクーポンが来た」という動機からの来店・問い合わせは年々増加しています。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  特にInstagramは視覚的なコンテンツが特性上、飲食・美容・インテリアなどのビジュアル訴求が重要な業種で強力な集客力を発揮します。継続的な投稿により、フォロワーが「ファン」になり、口コミ・紹介・リピート来店につながります。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  SNS運用とMEO対策を組み合わせることで、オンライン上での存在感が大幅に強化されます。SNSでのアクティブな発信はブランド検索の増加を促し、Googleマップでの評価向上にも寄与します。また、Googleビジネスプロフィールの「最新情報」とInstagramの投稿を連動させることで、管理コストを抑えながら多面的な露出を確保できます。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  SNS運用は続けることが最大の課題です。業務が忙しくなると投稿が止まり、フォロワーが離れてしまいます。サイプレスが運用を代行することで、品質を維持した継続発信を実現します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 支援内容 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Services</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>SNS運用支援内容</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "Instagram運用代行", body: "投稿企画・キャプション作成・ハッシュタグ設計・投稿スケジュール管理を代行します。統一されたビジュアルトーンでブランド世界観を構築し、フォロワーの増加とエンゲージメント向上を目指します。フィードとストーリーズを組み合わせた運用を行います。" },
                { title: "X（旧Twitter）運用", body: "業種・ターゲット層に合わせたXのコンテンツ戦略を策定します。告知・情報発信・トレンド活用・コミュニティとのエンゲージメントを通じてブランド認知と信頼を高めます。" },
                { title: "LINE公式アカウント設計・運用", body: "顧客との継続的なコミュニケーションに最適なLINE公式アカウントを設計・運用します。クーポン配信・予約促進・イベント告知・顧客ロイヤリティ向上のためのメッセージ設計を行います。" },
                { title: "投稿企画・文章（キャプション）作成", body: "業種・季節・トレンドを踏まえた投稿テーマを毎月企画し、ターゲットに響くキャプション文章を作成します。告知だけでなく、フォロワーが「保存したい・シェアしたい」と思えるコンテンツを設計します。" },
                { title: "画像・写真の加工・テンプレート制作", body: "ご提供いただいた写真素材をSNS投稿に最適なサイズ・レイアウトで加工します。ブランドカラーを統一したデザインテンプレートを作成し、フィードの統一感を保ちます。" },
                { title: "ハッシュタグ設計", body: "業種・地域・コンテンツカテゴリに応じた最適なハッシュタグセットを設計します。認知拡大に効くビッグタグと、ニッチなターゲットに届くスモールタグを組み合わせて、リーチを最大化します。" },
                { title: "MEO・Googleビジネスプロフィールとの連動", body: "Instagram・XでのアクティブなSNS発信と、Googleビジネスプロフィールの最新情報投稿を連動させます。Webマーケティング全体で統一した世界観とメッセージを発信します。" },
                { title: "月次分析レポート", body: "フォロワー数・リーチ・インプレッション・エンゲージメント率・Webサイトクリック数などの主要KPIを月次でレポートします。データをもとに翌月の改善方針をご提案します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SNSとデジタル集客の連動 — 2-col image+text */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" style={{ height: "360px" }}>
                <Image
                  src="/ChatGPT Image 2026年6月13日 19_18_03.png"
                  alt="スマートフォンとデジタルアイコン — SNSとデジタルマーケティングの連動"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Integration</p>
                <h2 className="font-black text-[22px] md:text-[26px] mb-5" style={{ color: "#0F172A" }}>SNSとMEO・SEOを連動させた集客設計</h2>
                <p className="text-[15px] leading-[1.9] mb-4" style={{ color: "#374151" }}>
                  SNS単独で集客を狙うのではなく、MEO・SEOと連動させることで相乗効果が生まれます。Instagramでの認知がブランド検索を増やし、Googleマップでの評価向上につながります。各チャネルが互いを補完し合う統合マーケティングを設計します。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  サイプレスはSNS運用だけでなく、MEO・SEO・AI活用支援・ホームページ制作まで一貫して提供できる強みを活かし、デジタルマーケティング全体を最適化します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Industries</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-8" style={{ color: "#0F172A" }}>対応業種</h2>
            <div className="flex flex-wrap gap-3">
              {["飲食店・カフェ", "美容室・ヘアサロン", "ネイルサロン・エステ", "アパレル・ファッション", "整体・整骨院", "フィットネス・ヨガ", "インテリア・雑貨", "教育・スクール", "ブライダル", "宿泊・観光", "不動産", "医療・クリニック"].map((industry) => (
                <span key={industry} className="px-4 py-2 text-[13px]" style={{ border: "1px solid #E8E4DC", color: "#374151" }}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="SNS運用についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="SNS運用のご相談"
          body="Instagram・X・LINE公式アカウントの運用でお困りのことをお聞かせください。現状の課題と目標に合わせたSNS運用プランをご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
