import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "学習塾・スクールのWeb集客｜MEO対策・SEOで体験授業の申込みを増やす｜株式会社サイプレス",
  description: "学習塾・英会話・音楽教室・プログラミングスクール向けWeb集客支援。Googleマップ上位表示（MEO）・SEO・ホームページ制作で体験授業申込みと入塾数を増やします。",
  keywords: ["学習塾 MEO対策", "学習塾 集客", "塾 Googleマップ", "英会話スクール 集客", "学習塾 ホームページ"],
  openGraph: {
    title: "学習塾・スクールのWeb集客｜MEO対策・SEOで体験授業の申込みを増やす｜株式会社サイプレス",
    description: "学習塾・英会話・音楽教室・スクール向けWeb集客。MEO・SEO・ホームページで体験申込みと入塾数を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/school" },
};

const faqItems = [
  {
    q: "学習塾のMEO対策はいつ始めると効果的ですか？",
    a: "中学受験・高校受験・大学受験の入塾検討は3〜4ヶ月前から始まるケースが多く、新学期（4月）・夏期講習（6月）・受験本番直前（11月）の3〜4ヶ月前に集中的に施策を行うことで入塾申し込みのピークに合わせられます。MEO対策は半年以上の継続で効果が安定するため、早期着手を推奨します。",
  },
  {
    q: "学習塾のホームページで問い合わせを増やすには？",
    a: "合格実績・講師プロフィール・料金（月謝の目安）・カリキュラム・体験授業の申し込みフォームが必須です。「この塾に通ったらどう変わるか」をイメージさせるビフォーアフター的なコンテンツ（成績向上事例・生徒の声）が入塾率を高めます。スマートフォンでのLINE問い合わせ対応も効果的です。",
  },
  {
    q: "学習塾のGoogleマップ（MEO）対策と検索（SEO）はどちらが大切ですか？",
    a: "「〇〇駅 学習塾」「〇〇区 英語塾」のような地域+キーワードの検索にはMEOが有効で、即体験申し込みに直結します。一方「中学受験 塾 選び方」「高校生 英語 独学 おすすめ」のような情報収集段階の検索にはSEOが有効です。両方を組み合わせることが長期的な集客強化につながります。",
  },
  {
    q: "個人経営の塾でも大手チェーンに対抗できますか？",
    a: "はい。個人経営の強みは「少人数・個別指導・地元密着・講師と生徒の距離感の近さ」です。これをGBPプロフィール・口コミ・ホームページで前面に出します。大手チェーンへの不満（画一的な指導・講師の入れ替わり）を逆手に取り差別化することで、検索上位でも選ばれやすくなります。",
  },
  {
    q: "英会話スクール・音楽教室・プログラミングスクールでも同じ集客方法が使えますか？",
    a: "はい。業種によってターゲットキーワードや訴求ポイントが変わりますが、Googleマップ上位表示と体験申し込み導線の整備は全てのスクール業種に有効です。英会話は「子供英語 〇〇区」、音楽教室は「ピアノ教室 〇〇駅」、プログラミングスクールは「子供プログラミング 〇〇区」など、業種に最適なキーワード戦略をご提案します。",
  },
  {
    q: "夏期講習・冬期講習などの季節特需に合わせた集客はできますか？",
    a: "はい。GBPの季節投稿・LP（ランディングページ）の特設ページ・SEOキーワードの調整（「夏期講習 葛飾区」等）を時期に合わせて行います。入塾検討が始まる時期の1〜2ヶ月前から施策を開始することで、特需ピークに最大の集客効果を発揮します。",
  },
  {
    q: "Googleの口コミは学習塾の集客に影響しますか？",
    a: "非常に大きく影響します。保護者・生徒はGoogleマップで塾を比較する際に口コミを最初に確認します。「先生がわかりやすい」「合格できた」「雰囲気が良い」といった口コミは信頼性を大幅に向上させます。体験授業後・合格報告のタイミングに口コミを依頼する仕組みを作ることが重要です。",
  },
  {
    q: "InstagramやYouTubeでの集客は学習塾に効果がありますか？",
    a: "Instagramは勉強法Tips・合格速報・教室雰囲気の発信に有効で、保護者へのアプローチに向いています。YouTubeは解説動画・講師紹介などで専門性を示せますが、制作コストがかかります。まずはMEO・ホームページ・口コミ獲得を基盤として、予算に応じてSNSを追加するのが現実的な順序です。",
  },
];

const relatedLinks = [
  { href: "/industries/school/meo", label: "学習塾のMEO対策", desc: "Googleマップ上位表示で体験申込みを増加" },
  { href: "/industries/school/seo", label: "学習塾のSEO対策", desc: "検索流入で長期集客を強化" },
  { href: "/industries/children", label: "子ども向け習い事の集客", desc: "習い事・スクールの集客支援" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "学習塾向けサイト制作" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/contact", label: "無料相談", desc: "学習塾・スクールのWeb集客相談" },
];

export default function SchoolPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "80px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/">ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries">業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              学習塾・スクール
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>School & Cram School</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              学習塾・スクールのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              「〇〇駅 学習塾」「〇〇区 英語塾」という地域密着の検索から、「中学受験 塾 選び方」という情報収集段階の検索まで、学習塾・スクールの集客チャネルは多様です。MEO対策で即体験申し込みを獲得しながら、SEOで長期的な認知を積み上げる二軸の集客体制を構築します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              英会話スクール・音楽教室・プログラミングスクール・スポーツスクールなど、業種を問わず地域密着型スクールのWeb集客全般に対応しています。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_09_21 (10).png" alt="先生と生徒が学ぶ学習塾・スクールの教室 — 学習塾・スクールのMEO対策・Web集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              学習塾・スクール向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/school/meo",
                  label: "学習塾のMEO対策",
                  desc: "「〇〇駅 学習塾」「〇〇区 英語塾」でGoogleマップ上位表示。体験申し込みの問い合わせを直接獲得します。",
                },
                {
                  href: "/services/web-design",
                  label: "学習塾向けホームページ制作",
                  desc: "合格実績・講師紹介・料金表・体験申し込みフォームを備えた入塾率を高めるサイトを制作します。",
                },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "28px", border: "1px solid #e8e4dc", textDecoration: "none", background: "#f9f8f5" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.8" }}>{item.desc}</p>
                  <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "12px" }}>詳細を見る →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#f8f6f2", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why It Works</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              学習塾集客でMEO＋SEOが効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "保護者は必ずGoogleで比較検討してから問い合わせる",
                  b: "子供の教育に関わる選択のため、保護者はGoogleマップ・口コミ・ホームページを念入りに比較します。Googleマップ上位とホームページの充実が問い合わせ前の信頼獲得に直結します。",
                },
                {
                  n: "02",
                  t: "入塾のタイミングに合わせた季節集客が可能",
                  b: "新学期・夏期講習・受験シーズンに合わせてGBP投稿・LPを準備することで、最も入塾意欲の高い時期に確実に接点を持てます。",
                },
                {
                  n: "03",
                  t: "口コミと合格実績が競合との差別化になる",
                  b: "「〇〇高校合格」「成績が20点アップ」という具体的な成果と保護者・生徒の声は、大手チェーンに対する個人塾の最大の差別化要因です。Googleマップの口コミとホームページの両方で訴求します。",
                },
                {
                  n: "04",
                  t: "体験授業CTAを最適化することで問い合わせ率が大幅に向上する",
                  b: "「まず無料体験から」という低ハードルの入口設計と、LINE・フォームなど複数の問い合わせ手段を提供することで、検索から来た保護者が体験申し込みに進む転換率が改善します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
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

        <FaqSection items={faqItems} heading="学習塾・スクールのWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="学習塾・スクールのWeb集客ご相談"
          body="MEO対策・ホームページ制作・SEOで体験申込みと入塾数を増やします。新学期・夏期講習・受験シーズンに向けた集客強化も含めてご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
