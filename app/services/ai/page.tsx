import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AI活用支援｜業務自動化・AIツール導入・コンテンツ生成｜株式会社サイプレス",
  description:
    "ChatGPTを使ったコンテンツ生成・n8n/Makeによる業務自動化・AIチャットボット構築・Googleビジネスプロフィール自動投稿など、中小企業のAI活用を具体的に支援します。",
  keywords: ["AI活用支援", "業務自動化", "n8n", "ChatGPT活用", "AIチャットボット", "Webマーケティング自動化"],
  openGraph: {
    title: "AI活用支援｜業務自動化・AIツール導入・コンテンツ生成｜株式会社サイプレス",
    description:
      "ChatGPTコンテンツ生成・n8n業務自動化・AIチャットボット・GBP自動投稿など、中小企業のAI活用を具体的に支援します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://cypress-web.jp/services/ai" },
};

const faqItems = [
  {
    q: "AIを活用したことがない会社でも相談できますか？",
    a: "はい、AIツールの経験がない方向けの支援が中心です。何から始めれば良いかわからないという状態から、具体的にどのAIツールをどう活用するかをご提案します。まずは現状の業務フローを整理し、AIで効率化できる箇所を一緒に見つけていきます。",
  },
  {
    q: "どのようなAIツールを使いますか？",
    a: "ChatGPT（OpenAI）・Gemini・Claude・Perplexityなどの生成AIに加え、業務自動化にはn8n・Make（旧Integromat）・Zapierを活用します。チャットボット構築にはVoiceflow・Botpressなどを用途に応じて選定します。特定ツールへの依存を避け、最適なツールセットをご提案します。",
  },
  {
    q: "Googleビジネスプロフィールの自動投稿とはどういうものですか？",
    a: "n8nやMakeを使って、Googleビジネスプロフィールへの「最新情報」投稿を自動化する仕組みを構築します。例えば、週次でAIがコンテンツを生成し、指定した日時に自動投稿するフローを設定できます。MEO対策における継続的な投稿管理の手間を大幅に削減します。",
  },
  {
    q: "社内でAIを活用できる人材がいないのですが、大丈夫ですか？",
    a: "はい、社内でAIを使いこなせる人材がいない前提でご支援します。仕組みの構築だけでなく、実際に活用できるようになるためのレクチャーやマニュアル作成も行います。継続的なサポートプランもご用意しています。",
  },
  {
    q: "Webマーケティングとの連携はできますか？",
    a: "はい、AI活用支援はWebマーケティング（MEO・SEO・SNS運用）との連動が可能です。ブログ記事のAI生成→WordPress自動投稿、Googleビジネスプロフィールへの自動投稿、SNS投稿のAI作成支援など、マーケティング業務全体の自動化・効率化を一貫して支援できます。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援トップ", desc: "AI活用の全体概要" },
  { href: "/ai/automation", label: "業務自動化（n8n/Make）", desc: "業務フロー自動化" },
  { href: "/ai/chatbot", label: "AIチャットボット構築", desc: "問い合わせ自動化" },
  { href: "/ai/content", label: "AIコンテンツ生成", desc: "記事・投稿の自動作成" },
  { href: "/services/seo", label: "SEO対策", desc: "AI生成コンテンツのSEO活用" },
];

export default function AiServicePage() {
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
              <span style={{ color: "#374151" }}>AI活用支援</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", color: "#0F172A" }}>
              AI活用支援
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              AIは大企業だけのものではありません。中小企業・個人事業主こそ、AIで業務を自動化・効率化することで競合に差をつけられる時代です。コンテンツ生成・業務自動化・チャットボット構築・Webマーケティング連動まで、AIを使える組織づくりを支援します。
            </p>
          </div>
        </section>

        {/* AI活用支援とは */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>About</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>AI活用支援とは</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  ChatGPT・Gemini・Claudeといった生成AIの登場により、文章作成・情報整理・アイデア出しのスピードが劇的に向上しました。さらにn8n・Make（旧Integromat）などのノーコード自動化ツールを組み合わせることで、繰り返し発生する定型業務をAIが自動で処理する仕組みを構築できます。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  しかし、「AIを使いたいが何から始めればいいかわからない」「試してみたが業務に定着しなかった」という声が多くの中小企業から聞こえます。サイプレスのAI活用支援は、ツールの導入だけでなく、実際の業務フローへの組み込みと定着化まで伴走します。
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  AIはWebマーケティングの分野でも大きな変革をもたらしています。ブログ記事・SNS投稿・Googleビジネスプロフィールの更新など、継続的に発信しなければならないコンテンツをAIで効率的に作成し、自動投稿する仕組みを構築することで、小さなチームでも大量のコンテンツを継続発信できるようになります。
                </p>
                <p className="text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  サイプレスでは、MEO・SEO・SNS運用の実務知識を持つスタッフがAI活用支援を行います。マーケティングとAIの両方を理解したチームだからこそ、集客に直結するAI活用の仕組みを設計できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 支援内容 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Our Services</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>AI活用支援内容</h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "ブログ記事・SNS投稿のAI作成支援", body: "ChatGPT・Claudeなどを活用したブログ記事・SNS投稿・メールマガジンのAI作成フローを構築します。キーワード調査→構成作成→本文生成→SEOチェックまでの一連のプロセスをAIで効率化し、コンテンツ制作コストを大幅に削減します。" },
                { title: "業務フロー自動化（n8n・Make・Zapier）", body: "n8n・Make・Zapierを使って、繰り返し発生する定型業務を自動化します。問い合わせメールの自動振り分け・スプレッドシートへの自動記録・定期レポートの自動生成・Slack通知の自動化など、業種に合わせた自動化フローを設計・構築します。" },
                { title: "AIチャットボット構築", body: "WebサイトやLINE公式アカウントに設置するAIチャットボットを構築します。よくある質問への自動回答・予約受付・資料請求フローの自動化により、営業時間外の問い合わせ対応と顧客体験の向上を実現します。" },
                { title: "Googleビジネスプロフィール投稿の自動化", body: "AIがコンテンツを生成し、Googleビジネスプロフィールへ定期自動投稿するフローを構築します。MEO対策に重要な継続的な投稿更新を自動化することで、運用工数を削減しながら集客効果を維持します。" },
                { title: "社内AIリテラシー向上支援", body: "ChatGPT・Gemini・Claudeの使い方から、業種別の活用事例・プロンプト設計・注意点まで、実践的なAI活用研修を提供します。社内でAIを使いこなせる人材を育成し、自走できる組織づくりを支援します。" },
                { title: "Webマーケティングとの連動設計", body: "AI活用を単独の施策として終わらせず、MEO・SEO・SNS運用と連動させた統合マーケティング自動化を設計します。コンテンツ生成からGoogleビジネスプロフィール投稿・WordPress自動アップロード・SNS自動投稿まで、一連のマーケティングフローを自動化します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* こんな課題に */}
        <section className="py-20" style={{ background: "#F9F8F5", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Challenges</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-10" style={{ color: "#0F172A" }}>こんな課題に対応します</h2>
            <div className="max-w-3xl">
              {[
                { num: "01", title: "コンテンツ発信を続けられない", body: "ブログ・SNS・Googleビジネスプロフィールへの投稿を継続したいが、人手不足・時間不足で止まってしまう。AIと自動化で継続発信の仕組みを作ります。" },
                { num: "02", title: "同じ作業を毎日繰り返している", body: "毎日同じフォーマットのメール送信・データ入力・レポート作成などの定型業務に時間を取られている。業務フロー自動化で根本的に解決します。" },
                { num: "03", title: "営業時間外の問い合わせに対応できていない", body: "夜間・休日の問い合わせへの対応が遅れ、機会損失が発生している。AIチャットボットで24時間自動対応を実現します。" },
                { num: "04", title: "ChatGPTを使ってみたが業務定着しない", body: "試しに使ってみたが、使い方がよくわからず定着しなかった。業種・業務に特化したプロンプトテンプレートと活用フローをご提供します。" },
              ].map((item) => (
                <div key={item.num} style={{ borderTop: "1px solid #E8E4DC" }} className="py-6 flex gap-6">
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <p className="font-semibold text-[15px] mb-2" style={{ color: "#0F172A" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#FFFFFF", borderTop: "1px solid #E8E4DC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>Industries</p>
            <h2 className="font-black text-[26px] md:text-[30px] mb-8" style={{ color: "#0F172A" }}>対応業種</h2>
            <div className="flex flex-wrap gap-3">
              {["飲食店・カフェ", "美容室・サロン", "医療・クリニック", "士業・コンサルティング", "不動産", "教育・スクール", "小売・EC", "建設・リフォーム", "製造業", "IT・Web", "フィットネス・ヨガ", "宿泊・観光"].map((industry) => (
                <span key={industry} className="px-4 py-2 text-[13px]" style={{ border: "1px solid #E8E4DC", color: "#374151" }}>
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AI活用支援についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AI活用支援のご相談"
          body="業務自動化・コンテンツ生成・AIチャットボット構築など、AIの活用について具体的なご提案をします。まずは現状の業務課題をお聞かせください。"
        />
      </main>
      <Footer />
    </>
  );
}
