import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "お問い合わせフォーム最適化｜CV率を上げるWeb制作｜株式会社サイプレス",
  description: "CV率を上げるお問い合わせフォーム設計。入力項目の最小化・スマートフォン最適化・サンクスページ・自動返信メールで問い合わせ転換率を向上させます。",
  keywords: ["お問い合わせフォーム", "フォーム最適化", "CV率向上", "コンバージョン改善", "Web制作"],
  openGraph: {
    title: "お問い合わせフォーム最適化｜CV率を上げるWeb制作",
    description: "入力項目最小化・SP最適化・自動返信メールで問い合わせCV率を改善。サイプレスのフォーム設計支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/contact-form" },
};

const faqItems = [
  { q: "お問い合わせフォームの入力項目は何を最低限にすべきですか？", a: "名前・メールアドレス・問い合わせ内容の3項目が最低限です。住所・電話番号は必要な場合のみ追加します。不要な項目が多いほど離脱率が上がります。" },
  { q: "フォーム送信後のサンクスページは必要ですか？", a: "はい。送信完了ページ（サンクスページ）は「送信できた」という確認と、次のアクションの案内（営業日以内に返信など）を伝えるために重要です。Googleアナリティクスでのコンバージョン計測にも使います。" },
  { q: "スパム対策はどのようにしますか？", a: "reCAPTCHA（Google）の実装が最も一般的です。ハニーポット（スパムボット検知）やCSRFトークンも有効です。過度なセキュリティ対策はユーザーの離脱を招くため、バランスが重要です。" },
  { q: "問い合わせを受けたらすぐに通知が来るようにできますか？", a: "はい。フォーム送信時にメール通知・Slack通知・LINE通知などに自動転送する仕組みを実装できます。返信漏れ防止に効果的です。" },
  { q: "既存のフォームのCV率が低い場合どうすればいいですか？", a: "入力項目の削減・CTAボタンのテキスト変更・送信ボタンの視認性向上・エラーメッセージの改善などが有効です。A/Bテストで改善効果を測定します。" },
  { q: "ReactやNext.jsでフォームを実装する場合のおすすめは？", a: "React Hook Form + Zodバリデーションの組み合わせが現在のスタンダードです。型安全で軽量、バリデーションメッセージも柔軟に設定できます。送信先はResend・SendGrid・Nodemailerなどを使います。" },
  { q: "電話番号の入力欄は必要ですか？", a: "電話での対応を必要とするビジネスは入力しても良いですが、必須にするとCV率が下がります。任意項目にするか、電話よりメール対応を基本とする場合は削除が望ましいです。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/landing-page", label: "ランディングページ", desc: "LP制作" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル対応" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速フォーム実装" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "フォームの速度最適化" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span>/</span>
              <span style={{ color: "#0d1b2a" }}>お問い合わせフォーム最適化</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Contact Form Optimization</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              お問い合わせフォーム最適化｜CV率向上
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              せっかくサイトに来てくれたユーザーが、フォームの使いにくさで離脱してしまうのは機会損失です。入力項目の最小化・スマートフォン最適化・適切なフォーム設計でCV率を向上させます。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "12px", maxWidth: "640px" }}>
              サンクスページの設置・自動返信メール・スパム対策まで含めた、問い合わせ後の体験設計も合わせて実施します。フォームは「機能する」だけでなく「ユーザーに安心感を与える」設計が重要です。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.png" alt="お問い合わせフォーム最適化" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                フォームの設計次第で、問い合わせ数は大きく変わる。<br />CV率を上げるフォーム設計を提案します。
              </p>
            </div>
          </div>
        </section>

        {/* フォームの問題でCVを失う理由 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Common Problems</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              フォームの問題でCVを失っている4つの理由
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "入力項目が多すぎる", b: "「会社名・部署名・役職・電話・FAX・住所…」と情報を集めようとするほど、ユーザーは途中で諦めて離脱します。必須項目を3〜4つに絞ることが最優先です。" },
                { t: "エラーメッセージが不明確", b: "「入力エラーです」という表示では、何を直せばよいかわかりません。「@を含む形式で入力してください」のように具体的な修正方法を示すことで離脱を防ぎます。" },
                { t: "スマートフォン未最適化", b: "PCで見やすいフォームがスマートフォンでは文字が小さく、ボタンが押しにくい状態になっていることがあります。今や問い合わせの半数以上はスマートフォンからです。" },
                { t: "送信後の体験設計がない", b: "送信ボタンを押した後に何も起きないと「本当に送れたのか」と不安になります。サンクスページ表示と自動返信メールの両方を設置することで信頼感が大きく上がります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Form Design</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              CV率を上げるフォーム設計の原則
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "入力項目を最小限にする", b: "問い合わせの目的に必要な項目だけを残します。名前・メール・内容の3項目が基本です。後で聞ける情報は後で聞く、という発想で設計します。住所や電話番号は必要な場合のみ任意で追加します。" },
                { n: "02", t: "スマートフォンでの操作性を最優先", b: "フィールドサイズはタップしやすいサイズに設定し、数字入力には数字キーボード・メールには@キーボードを表示するtype属性を設定します。44px以上のタップターゲットサイズを確保します。" },
                { n: "03", t: "エラーメッセージをわかりやすく", b: "「入力エラー」ではなく「メールアドレスの形式が正しくありません」のように、何をどう修正すべきかを具体的に伝えます。エラー表示はフィールドの直下に赤字で表示します。" },
                { n: "04", t: "送信ボタンを明確に目立たせる", b: "送信ボタンは全体の中で最も目立つ要素にします。「送信する」より「無料で相談する」「今すぐ問い合わせる」など行動を促す文言にすることでCV率が上がります。" },
                { n: "05", t: "サンクスページ・自動返信メールの設置", b: "送信後に「受付完了ページ」を表示し、返信期間を明記します。自動返信メールで「〇〇営業日以内にご連絡します」と伝えることで問い合わせ者の不安を解消します。" },
                { n: "06", t: "プライバシーポリシーへのリンク", b: "送信ボタン付近にプライバシーポリシーへのリンクを設置します。個人情報の取扱いを明示することで信頼性が上がり、チェックボックス方式でGDPR対応も可能です。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #ece8e0" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", fontWeight: 700 }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#f8f6f2" heading="フォーム最適化についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA heading="フォーム最適化のご相談" body="お問い合わせフォームの設計・改善・新規制作をご相談ください。CV率の低下が気になる・フォームを新しく作りたいなど、お気軽にご相談ください。" />
      </main>
      <Footer />
    </>
  );
}
