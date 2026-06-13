import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "Googleマップ上位表示｜ローカルパック対策｜MEO",
  description: "Googleマップのローカルパック（上位3枠）に表示されるためのMEO対策。関連性・距離・知名度の3要素を最適化し、地域検索での上位表示を実現します。",
};

const faqItems = [
  { q: "ローカルパックとは何ですか？", a: "「渋谷 ランチ」「近く 歯科」などの地域検索で、検索結果上部に表示される地図と3件のビジネス一覧のことです。この上位3枠に入ることがMEO対策の主な目標です。" },
  { q: "Googleマップで上位表示されるまでどのくらいかかりますか？", a: "基本的なGBP最適化（情報充実・写真追加・投稿開始）で1〜3ヶ月、口コミ増加や競合との差をつけるには3〜6ヶ月が目安です。競合の強い業種・エリアではさらに時間がかかる場合があります。" },
  { q: "ローカルパックの表示順位は何で決まりますか？", a: "Googleは「関連性（Relevance）」「距離（Distance）」「知名度（Prominence）」の3つで決定します。検索クエリとGBPの情報の一致度、検索者からの距離、口コミ・ウェブ上の言及数が主な要因です。" },
  { q: "競合が多いエリアでも上位表示できますか？", a: "可能です。競合との差をつけるには、GBP情報の完全性・高品質な写真・継続的な口コミ獲得・週1回以上の投稿・ウェブサイトとの連携が重要です。競合分析をもとに弱点を見つけて改善します。" },
  { q: "自店舗の周辺エリアでも上位表示できますか？", a: "店舗の物理的な住所から離れるほど表示されにくくなります。Googleビジネスプロフィールのサービス提供エリアの設定や、対応エリアのコンテンツをウェブサイトに充実させることで改善できる場合があります。" },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
  { href: "/meo/meo-audit", label: "MEO監査", desc: "現状診断" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
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
              <Link href="/meo">MEO対策</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              Googleマップ上位表示
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Map Ranking</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Googleマップ上位表示｜ローカルパック対策
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              地域検索で表示される「ローカルパック（上位3枠）」への掲載はMEO対策の核心です。Googleが評価する3要素を最適化し、競合に差をつけて上位表示を実現します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_03.png" alt="Googleマップ上位表示対策" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>3 Key Factors</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              ローカルパック表示を決める3要素
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "Relevance", title: "関連性", body: "検索クエリとGBPの情報がどれだけ一致しているか。カテゴリ・説明文・サービス・投稿内容がキーワードと一致するほど表示されやすくなります。" },
                { label: "Distance", title: "距離", body: "検索者の現在地または検索地域からビジネスまでの距離。物理的に近い店舗が優遇されますが、関連性と知名度で補える場合もあります。" },
                { label: "Prominence", title: "知名度", body: "口コミ数・評価・ウェブ上の言及数・GBPの情報充実度などから判断される知名度。高品質な口コミが多いビジネスは距離のハンデを越えることもあります。" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "28px", background: "#f8f6f2", border: "1px solid #ece8e0" }}>
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#9ca3af", fontSize: "10px", marginBottom: "8px" }}>{item.label}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Actions</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              上位表示のための具体的施策
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "GBP情報の完全性を高める", b: "店舗名・住所・電話・営業時間・カテゴリ・ウェブサイト・説明文・サービス・商品・属性すべてを正確に入力します。空欄を作らないことが基本です。" },
                { n: "02", t: "高品質な写真を定期的に追加する", b: "外観・内装・商品・スタッフなど各カテゴリに写真を用意し、月2枚以上の定期投稿を継続します。Googleはアクティブなビジネスを評価します。" },
                { n: "03", t: "週1回以上の投稿を継続する", b: "Google投稿機能を使ってお知らせ・キャンペーン・新商品情報を定期発信します。Googleはアクティブなビジネスを高く評価します。" },
                { n: "04", t: "口コミを継続的に獲得し全件返信する", b: "来店・利用後に口コミを依頼するフローを作ります。良い口コミも悪い口コミも必ず返信することでオーナーの信頼性が上がります。" },
                { n: "05", t: "ウェブサイトとの連携を強化する", b: "GBPのURLを正しく設定し、ウェブサイト側にLocalBusinessスキーマ・GoogleマップのURL・NAP情報を実装します。" },
                { n: "06", t: "競合分析に基づいて差別化ポイントを強化する", b: "同業種・同エリアの上位表示ビジネスのGBPを分析し、自社が劣っている項目（写真数・口コミ数・カテゴリ設定等）を重点改善します。" },
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
        <PageContactCTA heading="Googleマップ上位表示のご相談" body="ローカルパック（上位3枠）への掲載・順位改善のご相談を承っています。現在の状況と競合状況を確認したうえで、具体的な改善プランをご提案します。" />
      </main>
      <Footer />
    </>
  );
}
