import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIワークフロー設計とは｜n8n・Zapier・MakeとAIを組み合わせた業務設計｜株式会社サイプレス",
  description:
    "AIワークフロー設計の基礎から実践まで解説。n8n・Zapier・Make（Integromat）とChatGPT・Claude APIを組み合わせた業務自動化フローの設計・実装方法を体系的に解説。",
  keywords: ["AIワークフロー", "n8n", "Zapier AI", "Make Integromat", "ノーコード自動化", "AIフロー設計"],
  openGraph: {
    title: "AIワークフロー設計とは｜n8n・Zapier・MakeとAIを組み合わせた業務設計｜株式会社サイプレス",
    description: "AIワークフロー設計の実践ガイド。n8n・Zapier・MakeとChatGPT APIを組み合わせた自動化フロー設計を解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/ai/workflow" },
};

const faqItems = [
  {
    q: "n8n・Zapier・Makeのどれを選べばいいですか？",
    a: "Zapierは初心者が最も使いやすく、アプリ連携数が最多。コストは高めで複雑なフローには限界があります。Makeはビジュアルフローエディタが強力で、コストパフォーマンスが良く複雑なフローに対応。n8nはオープンソース・セルフホスト可能でコストゼロ（ホスティング費のみ）で最も柔軟ですが技術的知識が必要です。予算と技術レベルで選択します。",
  },
  {
    q: "ワークフロー自動化のメリットは何ですか？",
    a: "①繰り返し業務の削除（時間の節約）、②人為的ミスの防止（コピペミス・送信漏れ等）、③24時間365日の自動処理、④複数システム間のデータ連携の効率化が主なメリットです。特にマーケティング・カスタマーサポート・HR・経理などの定型業務で効果が高いです。",
  },
  {
    q: "ChatGPT APIをn8nと連携する方法は？",
    a: "n8nにはOpenAI（ChatGPT）の公式ノードがあり、APIキーを設定するだけで簡単に連携できます。テキスト生成・画像生成・音声テキスト変換など各機能を個別のノードとして設定し、フロー内のどのステップでもAIを呼び出せます。Claudeも同様にカスタムHTTPリクエストノードで連携可能です。",
  },
  {
    q: "セルフホストのn8nとクラウド版のどちらがいいですか？",
    a: "セルフホスト版は月額費用ゼロ（VPSやAWSのホスティング費は必要）で機密データをサーバー内に保持できますが、設定・管理の知識が必要です。クラウド版（n8n.cloud）は月額費用がかかりますが設定不要ですぐに使えます。個人情報・機密情報を扱う場合はセルフホストを検討します。",
  },
  {
    q: "どんなワークフローから始めるのがいいですか？",
    a: "まず「今手動でやっている繰り返し業務」で、失敗してもリスクが低いものから始めることをお勧めします。例：①新しい問い合わせメールをSlackに通知する、②Googleフォームの回答をスプレッドシートに転記してSlackに通知する、③毎週のレポートデータをNotionに自動更新するなどシンプルなフローから始めて徐々に複雑化します。",
  },
  {
    q: "APIに詳しくなくてもワークフロー自動化はできますか？",
    a: "ZapierとMakeはGUI操作だけでほとんどの自動化が完結します。ただしChatGPT APIのカスタム設定・Webhook受信・条件分岐の複雑なフローは若干の技術理解が必要です。サイプレスでは設計から実装・テストまで一貫してサポートします。",
  },
  {
    q: "エラーが起きたときの対処はどうしますか？",
    a: "Zapier・Make・n8nにはエラーハンドリング機能（エラー発生時の通知・リトライ設定・代替フロー）があります。特に重要な自動化フローでは、エラー発生時にSlackやメールで担当者に通知する設定を必ず組み込みます。また定期的なフローのテスト実行とログ確認も重要です。",
  },
  {
    q: "既存のシステム・ツールと連携できますか？",
    a: "Zapier・Make・n8nは数百〜数千のアプリに対応しています。Salesforce・HubSpot・kintone・Google Workspace・Slack・LINE・Notion・Shopify等との連携実績があります。REST APIが公開されているシステムであれば、カスタムHTTPリクエストで連携が可能です。",
  },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用とは", desc: "AIマーケティングの基礎" },
  { href: "/ai/automation", label: "業務自動化", desc: "AI自動化の全体像" },
  { href: "/ai/chatbot", label: "チャットボット構築", desc: "ワークフローとチャットの連携" },
  { href: "/ai/content", label: "AIコンテンツ制作", desc: "コンテンツ制作フローの自動化" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "ワークフロー設計・構築支援" },
  { href: "/knowledge/chatgpt-business", label: "ChatGPTビジネス活用", desc: "ワークフローでの活用事例" },
  { href: "/knowledge/ai-prompt", label: "プロンプト設計ガイド", desc: "ワークフロー内のプロンプト設計" },
  { href: "/aio", label: "AIO対策", desc: "AI検索最適化" },
  { href: "/column/seo", label: "SEOコラム", desc: "AI×マーケティングの最新情報" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "AIを活用したSEO支援" },
  { href: "/contact", label: "無料相談", desc: "ワークフロー設計のご相談" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
];

export default function WorkflowPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/ai" style={{ color: "#6B7280" }} className="hover:underline">AI活用</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>AIワークフロー設計</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>AI Workflow</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              AIワークフロー設計
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              AIワークフロー設計とは、n8n・Zapier・Make（Integromat）などのノーコード自動化ツールとChatGPT・Claude APIを組み合わせ、複数の業務ステップを自動化するフローを設計・構築することです。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              問い合わせ受信→AI要約→担当者通知、データ収集→AI分析→レポート生成など、複数のツールとAIを連携させた自動化フローにより、マーケティング業務の生産性を大幅に向上させます。
            </p>
          </div>
        </section>

        <section className="relative" style={{ height: "280px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="AIワークフロー設計・n8n・Zapier・自動化フローのイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* ツール比較 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Tool Comparison</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              主要な自動化ツール比較
            </h2>
            <div className="max-w-5xl overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr style={{ borderBottom: "2px solid #E8E4DC" }}>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>ツール</th>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>使いやすさ</th>
                    <th className="text-left py-3 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>費用</th>
                    <th className="text-left py-3 font-semibold" style={{ color: "#0d1b2a" }}>向いている用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Zapier", ease: "★★★★★（最も簡単）", cost: "月額$20〜（高め）", use: "シンプルな連携・初心者・多アプリ連携" },
                    { tool: "Make（Integromat）", ease: "★★★★☆", cost: "月額$9〜（コスパ良い）", use: "複雑なフロー・データ変換・高度な条件分岐" },
                    { tool: "n8n（クラウド）", ease: "★★★☆☆", cost: "月額$20〜", use: "AIエージェント・カスタム処理・柔軟な設計" },
                    { tool: "n8n（セルフホスト）", ease: "★★☆☆☆（技術知識が必要）", cost: "ホスティング費のみ（実質ほぼ無料）", use: "機密データの管理・完全カスタム・大規模処理" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #E8E4DC" }}>
                      <td className="py-4 pr-6 font-semibold" style={{ color: "#0d1b2a" }}>{row.tool}</td>
                      <td className="py-4 pr-6" style={{ color: "#374151" }}>{row.ease}</td>
                      <td className="py-4 pr-6" style={{ color: "#374151" }}>{row.cost}</td>
                      <td className="py-4" style={{ color: "#374151" }}>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* よくある自動化フロー例 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Example Flows</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よく使われるAIワークフローの例
            </h2>
            <div className="max-w-4xl space-y-6">
              {[
                { title: "問い合わせフォーム → AI要約 → Slack通知", flow: "問い合わせ受信 → ChatGPTで内容を3行に要約 → 担当者のSlackチャンネルに通知" },
                { title: "SEO記事ドラフト自動生成", flow: "スプレッドシートのキーワードリスト → Claude APIでアウトライン生成 → Notionに下書き作成 → 担当者に通知" },
                { title: "月次SEOレポート自動作成", flow: "GSC・GA4 API → データ集計 → GPTで分析コメント生成 → Notionページに自動出力" },
                { title: "SNS投稿バリエーション生成", flow: "コアメッセージ入力 → ChatGPTで5バリエーション生成 → 担当者がレビュー → Buffer/Hootsuite自動投稿" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="font-bold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.flow}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="AIワークフロー設計についてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="AIワークフロー設計のご相談"
          body="業務の自動化フロー設計から、n8n・Zapier・Makeの実装まで一貫してご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
