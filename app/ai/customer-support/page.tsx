import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "AIカスタマーサポート｜チャットボット・自動応答導入",
  description: "AIチャットボットによるカスタマーサポートの自動化。FAQへの自動応答・24時間対応・問い合わせ振り分けで顧客満足度と業務効率を同時に向上。",
};

const faqItems = [
  { q: "中小企業でもAIカスタマーサポートを導入できますか？", a: "はい。ChatGPTを活用したシンプルなFAQ自動応答から始められます。ノーコードツール（Dify・Botpress・LINE公式アカウント）を使えば専門的なプログラミング知識がなくても導入できます。" },
  { q: "AIチャットボットと人間のオペレーターはどう使い分けますか？", a: "FAQ・よくある問い合わせはAIが対応し、複雑な案件・クレーム・個別相談は人間にエスカレーションする「ハイブリッド型」が効果的です。AIが対応できない場合は自動でオペレーターに転送します。" },
  { q: "導入コストはどのくらいかかりますか？", a: "ChatGPT APIを使ったシンプルなチャットボットは月数千円〜数万円から導入可能です。カスタム開発・CRMシステム連携などが必要な場合は別途費用が発生します。" },
  { q: "AIが誤った回答をした場合はどう対処しますか？", a: "「ハルシネーション（誤情報の生成）」リスクに備え、AIの回答範囲を自社FAQデータに限定するRAG（検索拡張生成）技術が有効です。定期的な回答品質チェックと改善も重要です。" },
  { q: "LINE公式アカウントでAI自動応答はできますか？", a: "はい。LINE公式アカウントのMessaging APIを使い、ChatGPT等のAIと連携したチャットボットを構築できます。予約受付・FAQ対応・キャンペーン告知などに活用できます。" },
];

const relatedLinks = [
  { href: "/ai", label: "AI活用支援とは", desc: "AI支援の概要" },
  { href: "/ai/chatbot", label: "AIチャットボット", desc: "チャットボット構築" },
  { href: "/ai/automation", label: "AI業務自動化", desc: "業務自動化全般" },
  { href: "/ai/internal-tools", label: "AI社内ツール", desc: "社内業務のAI化" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "サービス詳細" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/ai">AI活用支援</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              AIカスタマーサポート
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>AI — Customer Support</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              AIカスタマーサポート｜自動応答の仕組み構築
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              AIチャットボットを活用することで、24時間対応・FAQ自動回答・問い合わせ振り分けが可能になります。スタッフの対応工数を削減しながら、顧客満足度を維持・向上させます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="AIカスタマーサポート" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Capabilities</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              AIカスタマーサポートで対応できる業務
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "FAQへの自動応答", b: "「営業時間は？」「料金は？」「対応エリアは？」など繰り返し同じ質問への回答をAIが自動処理します。スタッフの対応工数を大幅に削減できます。" },
                { n: "02", t: "予約受付・変更対応", b: "飲食店・美容室・医療機関などの予約受付をAIが自動対応します。空き状況確認・予約確定・リマインド送信まで自動化できます。" },
                { n: "03", t: "問い合わせの振り分け・エスカレーション", b: "問い合わせの内容を自動判断し、担当部署・担当者に自動振り分けします。AI対応の限界（クレーム・複雑な案件）では人間に自動転送します。" },
                { n: "04", t: "24時間対応体制の構築", b: "夜間・休日でもAIが初期対応を行います。「営業時間外です。翌日〇時に担当者から連絡します」など適切な自動応答で機会損失を防ぎます。" },
                { n: "05", t: "多言語対応", b: "英語・中国語・韓国語など複数言語での自動応答が可能です。インバウンド対応や海外顧客へのサポートに活用できます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9ca3af", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="AIカスタマーサポート導入のご相談" body="チャットボット構築・LINE連携・FAQ自動応答システムの導入をサポートします。業種・規模・予算に合わせた最適なAIサポート体制をご提案します。" />
      </main>
      <Footer />
    </>
  );
}
