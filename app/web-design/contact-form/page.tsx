import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "お問い合わせフォーム最適化｜問い合わせ率を上げるWeb制作",
  description: "CV率を上げるお問い合わせフォーム設計。入力項目の最小化・スマートフォン最適化・サンクスページ・自動返信メールで問い合わせ転換率を向上させます。",
};

const faqItems = [
  { q: "お問い合わせフォームの入力項目は何を最低限にすべきですか？", a: "名前・メールアドレス・問い合わせ内容の3項目が最低限です。住所・電話番号は必要な場合のみ追加します。不要な項目が多いほど離脱率が上がります。" },
  { q: "フォーム送信後のサンクスページは必要ですか？", a: "はい。送信完了ページ（サンクスページ）は「送信できた」という確認と、次のアクションの案内（営業日以内に返信など）を伝えるために重要です。Googleアナリティクスでのコンバージョン計測にも使います。" },
  { q: "スパム対策はどのようにしますか？", a: "reCAPTCHA（Google）の実装が最も一般的です。ハニーポット（スパムボット検知）やCSRFトークンも有効です。過度なセキュリティ対策はユーザーの離脱を招くため、バランスが重要です。" },
  { q: "問い合わせを受けたらすぐに通知が来るようにできますか？", a: "はい。フォーム送信時にメール通知・Slack通知・LINE通知などに自動転送する仕組みを実装できます。返信漏れ防止に効果的です。" },
  { q: "既存のフォームのCV率が低い場合どうすればいいですか？", a: "入力項目の削減・CTAボタンのテキスト変更・送信ボタンの視認性向上・エラーメッセージの改善などが有効です。A/Bテストで改善効果を測定します。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/landing-page", label: "ランディングページ", desc: "LP制作" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル対応" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
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
              <Link href="/web-design">ホームページ制作</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              お問い合わせフォーム最適化
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Contact Form Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              お問い合わせフォーム最適化｜CV率向上
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              せっかくサイトに来てくれたユーザーが、フォームの使いにくさで離脱してしまうのは機会損失です。入力項目の最小化・スマートフォン最適化・適切なフォーム設計でCV率を向上させます。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.png" alt="お問い合わせフォーム最適化" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.2)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Form Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              CV率を上げるフォーム設計の原則
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "入力項目を最小限にする", b: "問い合わせの目的に必要な項目だけを残します。名前・メール・内容の3項目が基本です。後で聞ける情報は後で聞く、という発想で設計します。" },
                { n: "02", t: "スマートフォンでの操作性を最優先", b: "フィールドサイズはタップしやすいサイズに設定し、数字入力には数字キーボード・メールには@キーボードを表示するtype属性を設定します。" },
                { n: "03", t: "エラーメッセージをわかりやすく", b: "「入力エラー」ではなく「メールアドレスの形式が正しくありません」のように、何をどう修正すべきかを具体的に伝えます。エラー表示はフィールドの直下に赤字で表示します。" },
                { n: "04", t: "送信ボタンを明確に目立たせる", b: "送信ボタンは全体の中で最も目立つ要素にします。「送信する」より「無料で相談する」「今すぐ問い合わせる」など行動を促す文言にすることでCV率が上がります。" },
                { n: "05", t: "サンクスページ・自動返信メールの設置", b: "送信後に「受付完了ページ」を表示し、返信期間を明記します。自動返信メールで「〇〇営業日以内にご連絡します」と伝えることで問い合わせ者の不安を解消します。" },
                { n: "06", t: "プライバシーポリシーへのリンク", b: "送信ボタン付近にプライバシーポリシーへのリンクを設置します。個人情報の取扱いを明示することで信頼性が上がり、チェックボックス方式でGDPR対応も可能です。" },
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
        <PageContactCTA heading="フォーム最適化のご相談" body="お問い合わせフォームの設計・改善・新規制作をご相談ください。CV率の低下が気になる・フォームを新しく作りたいなど、お気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
