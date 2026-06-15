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
  keywords: ["Googleマップ 上位表示", "ローカルパック 対策", "MEO 順位向上", "マップ 3パック"],
  openGraph: {
    title: "Googleマップ上位表示｜ローカルパック対策｜MEO",
    description: "Googleマップのローカルパック（上位3枠）に表示されるためのMEO対策。関連性・距離・知名度の3要素を最適化し、地域検索での上位表示を実現します。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_18_57.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/map-ranking" },
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
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス詳細" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定" },
  { href: "/meo/ranking", label: "MEO順位管理", desc: "順位トラッキング" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード対策" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信" },
  { href: "/meo/meo-audit", label: "MEO診断", desc: "現状診断サービス" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#9CA3AF" }}>ホーム</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <Link href="/meo" style={{ color: "#9CA3AF" }}>MEO対策</Link>
              <span style={{ margin: "0 8px", color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#374151" }}>Googleマップ上位表示</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Map Ranking</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              Googleマップ上位表示｜ローカルパック対策
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              地域検索で表示される「ローカルパック（上位3枠）」への掲載はMEO対策の核心です。Googleが評価する3要素を最適化し、競合に差をつけて上位表示を実現します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              ローカルパックは通常のWebサイトよりも上部に表示されるため、クリック率・来店率への影響が大きく、地域ビジネスにとって最も重要な集客チャネルの一つです。GBP情報の充実・写真管理・口コミ対応・投稿頻度を体系的に改善することで、競合を超える表示順位を目指します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_18_57.png" alt="Googleマップ上位表示対策" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.55)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,24px)", letterSpacing: "0.05em", textAlign: "center" }}>
              ローカルパック3枠に入るために
            </p>
          </div>
        </section>

        {/* ローカルパック外れの課題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Map Ranking Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ローカルパック上位を逃すと失う4つのビジネス機会
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "地域検索の大半を競合に奪われる", b: "ローカルパック3枠に入れないと、その地域キーワードへの検索ニーズはほぼすべて競合が獲得します。4位以下はクリック率が激減し、実質的な機会損失が続きます。" },
                { t: "来店意欲が最も高いユーザーを取り逃す", b: "「近く・今日・○○市」で検索するユーザーはすでに来店意思がある顕在層です。広告費をかけて獲得するよりも遙かに価値が高いこの顧客層をMEO未対応で見逃しています。" },
                { t: "広告費に頼りすぎる集客体質になる", b: "Googleマップからの無料集客が機能していないと、リスティング広告費が毎月発生し続けます。MEO対策で無料の集客チャンネルを確立することが長期的なコスト削減につながります。" },
                { t: "口コミ・評価の蓄積が遅れ続ける", b: "露出が少ない店舗は新規来店者が増えず口コミも増えません。口コミが少ないと順位が上がらない悪循環に陥ります。早期に対策を開始するほど競合との差が縮まります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>3 Key Factors</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>
              ローカルパック表示を決める3要素
            </h2>
            <div className="grid md:grid-cols-3 gap-8" style={{ marginBottom: "64px" }}>
              {[
                { label: "Relevance", title: "関連性", body: "検索クエリとGBPの情報がどれだけ一致しているか。カテゴリ・説明文・サービス・投稿内容がキーワードと一致するほど表示されやすくなります。" },
                { label: "Distance", title: "距離", body: "検索者の現在地または検索地域からビジネスまでの距離。物理的に近い店舗が優遇されますが、関連性と知名度で補える場合もあります。" },
                { label: "Prominence", title: "知名度", body: "口コミ数・評価・ウェブ上の言及数・GBPの情報充実度などから判断される知名度。高品質な口コミが多いビジネスは距離のハンデを越えることもあります。" },
              ].map((item) => (
                <div key={item.label} style={{ padding: "28px", background: "#f8f6f2", border: "1px solid #E8E4DC" }}>
                  <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.2em", color: "#9CA3AF", fontSize: "10px", marginBottom: "8px" }}>{item.label}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Actions</p>
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
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9CA3AF", fontSize: "11px", marginBottom: "12px" }}>Why It Matters</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ローカルパック掲載がビジネスに与える影響
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "オーガニック検索より上位に表示される", b: "ローカルパックはWebサイトの検索結果より上に表示されます。SEOで上位表示を獲得するより早期に集客効果が出ることが多く、コストパフォーマンスも高いです。" },
                { n: "02", t: "地図・ルート・電話ボタンが直接表示される", b: "ローカルパックには「経路案内」「電話」「ウェブサイト」ボタンが表示されます。ワンタップで来店・電話につながる導線が生まれ、コンバージョン率が上がります。" },
                { n: "03", t: "スマートフォン検索での影響が特に大きい", b: "スマートフォンでは画面の大半をローカルパックが占めます。外出中に「今すぐ」探しているユーザーへの訴求力が高く、即来店につながりやすいです。" },
                { n: "04", t: "長期的な集客基盤を構築できる", b: "GBP最適化・口コミ蓄積・定期投稿を続けることで、広告に依存しない安定した集客基盤を築けます。競合が対策を怠る中、継続することで差は広がります。" },
                { n: "05", t: "業種問わず地域ビジネス全般に有効", b: "飲食店・美容院・医療機関・リフォーム業・士業など、地域に顧客を持つあらゆるビジネスでローカルパック掲載が集客に貢献します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#9CA3AF", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="Googleマップ上位表示のご相談" body="ローカルパック（上位3枠）への掲載・順位改善のご相談を承っています。現在の状況と競合状況を確認したうえで、具体的な改善プランをご提案します。" />
      </main>
      <Footer />
    </>
  );
}
