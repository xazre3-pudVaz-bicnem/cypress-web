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
  { q: "フォームのA/Bテストはどうやって行いますか？", a: "Googleタグマネージャー（GTM）とGA4のイベント計測を組み合わせ、フォームのバリエーションごとに送信完了イベントを計測します。VWOやABsmartlyを使ったより本格的なA/Bテストも対応可能です。" },
  { q: "多言語対応のフォームは作れますか？", a: "はい。Next.jsのi18n機能やnext-intlライブラリを使って、日本語・英語・その他言語に対応したフォームを実装できます。バリデーションメッセージも各言語で表示します。" },
  { q: "フォームからのデータをCRMやスプレッドシートに連携できますか？", a: "Zapier・Make（旧Integromat）・webhookを使ってSalesforce・HubSpot・Googleスプレッドシートなどへの自動連携が可能です。二重入力の手間を省き、対応漏れを防ぎます。" },
  { q: "お問い合わせ件数を増やすにはどうすればいいですか？", a: "フォームへの誘導動線の改善（ヘッダー・各ページへのCTA設置）、フォームのCV率向上（項目削減・ボタン改善）、チャットボット・LINEなど複数チャネルの設置が効果的です。" },
  { q: "フォームのプライバシーポリシー同意はどのように設置しますか？", a: "送信ボタンの直上に「プライバシーポリシーに同意する」チェックボックスを設置します。チェックなしは送信できない設計にすることで個人情報保護法・GDPRへの対応にもなります。" },
  { q: "ファイル添付フォームは作れますか？", a: "はい。PDFや画像のアップロードに対応したフォームを実装できます。ファイルサイズ制限・拡張子チェック・ウイルス対策のバリデーションも合わせて設定します。" },
  { q: "フォームの入力補助（オートコンプリート）は設定できますか？", a: "autocomplete属性を適切に設定することで、ブラウザのオートコンプリート機能が有効になります。name・email・tel・addressなどの属性値を正しく設定することでUXが向上します。" },
  { q: "問い合わせフォームとチャットボットはどちらが効果的ですか？", a: "フォームは非同期での問い合わせに適しており、チャットボットは即時回答・よくある質問の自動化に適しています。両方を設置し、ユーザーが選べるようにする設計が最も効果的です。" },
  { q: "フォームの離脱分析はどうやって行いますか？", a: "GA4のファネル分析・Mouseflow・Hotjarなどのヒートマップツールを使って、どのフィールドで離脱が多いかを計測します。問題のある入力欄を特定して改善につなげます。" },
  { q: "入力途中の保存・下書き機能は実装できますか？", a: "LocalStorageやSessionStorageを使って入力中のデータを一時保存し、ページを離れても再度開いたときにデータが残る設計が可能です。長いフォームで特に有効です。" },
  { q: "フォームの送信ボタンのテキストはどう書くべきですか？", a: "「送信する」より「無料で相談する」「今すぐ問い合わせる」「資料を請求する」など、ユーザーが得られる価値・次のアクションが具体的に伝わるテキストにすることでCV率が向上します。" },
  { q: "フォームのデザインに費用はかかりますか？", a: "フォームのみのデザイン・実装であれば3〜10万円程度が目安です。LP・ランディングページや既存サイトへの組み込みの場合は制作物全体の費用に含まれます。詳細はご相談ください。" },
  { q: "お問い合わせフォームとLINE公式アカウントはどちらを優先すべきですか？", a: "ターゲット層によって異なります。一般消費者向けビジネスはLINEの開封率・返信率が高い傾向があります。BtoBや士業などのフォーマルな業種はメールフォームが信頼性を持たれやすいです。両方設置が理想です。" },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Web制作の概要" },
  { href: "/web-design/landing-page", label: "ランディングページ制作", desc: "LP制作・CV最大化" },
  { href: "/web-design/mobile-friendly", label: "スマートフォン対応", desc: "モバイル最適化" },
  { href: "/web-design/maintenance", label: "保守・メンテナンス", desc: "公開後の維持管理" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サービス詳細" },
  { href: "/web-design/nextjs", label: "Next.js制作", desc: "高速フォーム実装" },
  { href: "/web-design/page-speed", label: "ページ速度改善", desc: "フォームの速度最適化" },
  { href: "/web-design/service-site", label: "サービスサイト制作", desc: "サービス紹介サイト" },
  { href: "/web-design/corporate", label: "コーポレートサイト制作", desc: "企業サイト制作" },
  { href: "/web-design/seo", label: "SEO対策", desc: "検索流入を増やす" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "既存サイトの改善" },
  { href: "/web-design/blog", label: "ブログ・コンテンツ制作", desc: "SEOコンテンツ" },
  { href: "/web-design/accessibility", label: "アクセシビリティ対応", desc: "誰でも使えるサイト" },
  { href: "/web-design/analytics", label: "アクセス解析設定", desc: "GA4・GTM設定" },
  { href: "/industries/restaurant", label: "飲食店のWeb制作", desc: "飲食業界向け" },
  { href: "/industries/beauty", label: "美容室のWeb制作", desc: "美容業界向け" },
  { href: "/industries/dental", label: "歯科医院のWeb制作", desc: "歯科業界向け" },
  { href: "/industries/construction", label: "建設・リフォームのWeb制作", desc: "建設業界向け" },
  { href: "/industries/legal", label: "士業のWeb制作", desc: "士業向け" },
  { href: "/industries/real-estate", label: "不動産のWeb制作", desc: "不動産業界向け" },
  { href: "/industries/school", label: "学習塾のWeb制作", desc: "教育業界向け" },
  { href: "/industries/btob", label: "BtoBのWeb制作", desc: "BtoB向け" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
  { href: "/services", label: "サービス一覧", desc: "提供サービス全体" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#F9F8F5" }} className="pt-32 pb-20">
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9CA3AF", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }}>ホームページ制作</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>お問い合わせフォーム最適化</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Contact Form Optimization</p>
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

        {/* Hero Image */}
        <section style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_12_19.jpg" alt="お問い合わせフォーム最適化" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
              <p style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "clamp(16px,2vw,24px)", lineHeight: 1.6 }}>
                フォームの設計次第で、問い合わせ数は大きく変わる。<br />CV率を上げるフォーム設計を提案します。
              </p>
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "お問い合わせフォームのCV率が低くなる根本的な原因と改善の考え方",
                "入力項目の最適な数と、削減すべき項目・残すべき項目の判断基準",
                "スマートフォンで使いやすいフォームUIを設計するためのポイント",
                "サンクスページ・自動返信メールを含めた「送信後体験」の設計方法",
                "reCAPTCHAなどスパム対策の実装方法とUXとのバランス",
                "GTM・GA4を使ったフォームCV計測とA/Bテストの進め方",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: "1px solid #E8E4DC", alignItems: "flex-start" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "15px", flexShrink: 0 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              よくある課題と原因
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "フォームがない・メールアドレスのみ掲載", b: "「お問い合わせはこちら：info@example.com」のみの掲載は問い合わせ数を大幅に減らします。メーラーが開く手間・メールアドレスのコピー・件名の設定など、ユーザーにとっての障壁が多すぎます。専用フォームに置き換えるだけで問い合わせ数が増加するケースは多いです。" },
                { n: "02", t: "入力項目が多すぎる", b: "「名前・フリガナ・会社名・部署・役職・電話・FAX・住所・問い合わせ種別・内容・希望日時…」と項目が増えるほど離脱率は上がります。フォーム送信後に電話やメールで確認できる情報は、フォームから削除するのが基本方針です。" },
                { n: "03", t: "スマホで使いにくい", b: "PCで設計されたフォームはスマートフォンで文字が小さく、ボタンが押しにくい状態になりがちです。現在は問い合わせの半数以上がスマートフォンからです。タップターゲットサイズ・フォントサイズ・キーボードの種類指定など、モバイルファーストで設計する必要があります。" },
                { n: "04", t: "エラーメッセージが分かりにくい", b: "「入力エラーです」という表示では、ユーザーは何を修正すべきか分かりません。「メールアドレスに@を含む形式で入力してください」「電話番号はハイフンなしで入力してください」のように具体的な修正方法を示すことで、フォームの完了率を高められます。" },
                { n: "05", t: "送信確認ページがない", b: "送信ボタンを押した後に画面が変わらない・何も表示されないと、ユーザーは「本当に送れたのか？」と不安になり、二重送信や電話での確認につながります。必ずサンクスページへのリダイレクトか、送信完了メッセージの表示を設計します。" },
                { n: "06", t: "自動返信メールがない", b: "フォーム送信後に自動返信メールが届かないと、「本当に届いたか不安」「いつ返信が来るか分からない」という体験になります。送信内容の確認・返信予定日時・担当者名を記載した自動返信メールが信頼感を作ります。" },
                { n: "07", t: "フォームのセキュリティ対策なし（スパム）", b: "対策のないフォームには自動送信スパムが殺到し、本物の問い合わせが埋もれます。reCAPTCHA v3（ユーザー操作なしで判定）やハニーポット方式を実装することで、UXを損なわずにスパムを防止できます。" },
                { n: "08", t: "CVまでのステップが多すぎる", b: "「フォームページに遷移→入力→確認画面→再入力→送信→完了ページ」という多段階の設計は途中離脱を招きます。確認画面は省略し、送信前のインライン確認とサンクスページの表示に集約することでCV率が向上します。" },
                { n: "09", t: "フォームへの誘導導線が弱い", b: "フォームページは存在するのに、サイトのどこからも目立つリンクがない状態ではCV率は下がります。ヘッダーへのCTAボタン設置・各ページ末尾への誘導・スクロール追従ボタンなど、複数の誘導導線を設けることが重要です。" },
                { n: "10", t: "送信後の案内が不十分", b: "「送信完了しました」の一文だけで終わるサンクスページは機会損失です。「〇〇営業日以内にご返信します」「よくある質問はこちら」「他のサービスもご覧ください」といった次のアクションへの案内を設置することでユーザーとの関係が続きます。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* フォームの問題でCVを失う理由 — existing dark section */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Common Problems</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#FFFFFF", fontWeight: 700, marginBottom: "40px" }}>
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
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#FFFFFF", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Industry Use Cases</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              業種別の活用ポイント
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "0" }}>
              {[
                { n: "01", industry: "飲食店", use: "予約フォーム・ケータリング問い合わせ", b: "来店予約フォームは日時・人数・席種の選択式にすることで入力負荷を下げます。ケータリング問い合わせには希望日・会場・人数・予算を収集するフォームが有効です。LINE連携で予約管理を自動化するケースも増えています。" },
                { n: "02", industry: "美容室", use: "予約・カウンセリング申込", b: "初回来店の予約フォームでは希望メニュー・希望スタイリスト・来店日時を入力項目にします。カウンセリング申込フォームでは髪の状態・お悩みを事前収集することで施術時間の短縮と顧客満足度向上につながります。" },
                { n: "03", industry: "歯科医院", use: "初診予約・相談フォーム", b: "初診予約フォームには症状・希望治療・希望日時を含めます。インプラント・矯正など自由診療の相談フォームは「無料相談予約」として設計し、心理的ハードルを下げることが重要です。問診票の事前入力フォームも活用されています。" },
                { n: "04", industry: "建設・リフォーム", use: "無料見積もりフォーム", b: "外壁塗装・水回りリフォームなどの見積もりフォームは、物件種別（戸建て・マンション）・築年数・希望工事内容・希望時期を収集します。写真アップロード機能を追加することで、より正確な見積もりが可能になります。" },
                { n: "05", industry: "士業（税理士・社労士等）", use: "初回相談予約・書類依頼", b: "初回無料相談の予約フォームは相談内容のカテゴリ選択式にすることで、担当者が準備しやすくなります。書類依頼フォームは依頼種別を選択式にし、必要書類をチェックリストで選べる設計にすると依頼者の負担が軽減します。" },
                { n: "06", industry: "不動産", use: "内見予約・査定依頼", b: "内見予約フォームは物件番号・希望日時・連絡先の3項目が基本です。売却査定フォームは住所・物件種別・面積・築年数を収集します。査定結果の到着を明記した自動返信メールが信頼感を高めます。" },
                { n: "07", industry: "学習塾", use: "体験授業申込・資料請求", b: "体験授業申込フォームは学年・科目・希望日時・保護者氏名を収集します。資料請求フォームは最小項目に絞り、送付先住所はオプションにします。申込後の自動返信で体験授業の当日の流れを案内することで不安を解消します。" },
                { n: "08", industry: "BtoB（法人向けサービス）", use: "デモ申込・資料ダウンロード", b: "デモ申込フォームには会社名・担当者名・メール・電話・会社規模・現在の課題を収集します。資料ダウンロードフォームは最小項目（名前・メール・会社名）に絞り、DL後のナーチャリングをメールで行う設計が効果的です。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "24px 0 24px 0", borderTop: "1px solid #E8E4DC", display: "flex", gap: "20px" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <div style={{ display: "flex", gap: "10px", alignItems: "baseline", marginBottom: "6px" }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.industry}</p>
                      <p style={{ fontSize: "12px", color: "#c4b89a", fontWeight: 600 }}>{item.use}</p>
                    </div>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CV率を上げるフォーム設計の原則 — existing section */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Form Design</p>
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
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 制作・実装フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              制作・実装フロー
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "現状フォームの問題点洗い出し", b: "既存フォームがある場合は、GA4・ヒートマップ・ユーザーテストで現状の離脱ポイントと入力負荷を確認します。「どのフィールドで離脱が多いか」「エラーが頻発している箇所はどこか」を定量的に把握します。" },
                { n: "02", t: "CV目標設定", b: "「月間問い合わせ数〇〇件」「フォームCV率〇〇%」など、具体的な数値目標を設定します。目標から逆算してフォームの入力項目・UIのレベルを決定します。KPIを明確にすることで改善施策の優先順位が決まります。" },
                { n: "03", t: "入力項目の最小化検討", b: "収集したい情報と、CV率向上のために削除すべき項目をリスト化して比較します。「後から電話で確認できる情報」「任意項目にできる情報」を整理し、必須項目を最小化します。" },
                { n: "04", t: "フォームUI設計（ラベル・プレースホルダー）", b: "ラベルは常時表示（プレースホルダーのみは禁止）、プレースホルダーは入力例を記載します。フィールドの順番・サイズ・グループ化・チェックボックスの使い方など、操作しやすいUI設計を行います。" },
                { n: "05", t: "エラーバリデーション設計", b: "必須チェック・メール形式・電話番号形式などのバリデーションルールを定義します。リアルタイムバリデーション（入力中にエラーを表示）とサブミット時バリデーションを組み合わせ、分かりやすいエラーメッセージを設計します。" },
                { n: "06", t: "サンクスページ・自動返信設計", b: "送信完了後のサンクスページに表示するメッセージ・次のアクションへの案内を設計します。自動返信メールの件名・本文・差出人名・返信期間の記載内容を設計し、テンプレートを作成します。" },
                { n: "07", t: "スパム対策（reCAPTCHA）実装", b: "Google reCAPTCHA v3（ユーザー操作なし）またはv2（チェックボックス）を実装します。ハニーポット（非表示フィールドに値が入ったら拒否する方法）も併用することで、より堅牢なスパム対策になります。" },
                { n: "08", t: "スマホ最適化確認", b: "実機（iOS Safari・Android Chrome）でフォームを操作し、タップターゲットサイズ・キーボードの種類・スクロール挙動・エラー表示位置を確認します。スマートフォンでの離脱をゼロに近づけます。" },
                { n: "09", t: "GTM・GA4でのCV計測設定", b: "GTMでフォーム送信完了イベントを設定し、GA4でCVとして計測します。サンクスページへの到達・フォームのsubmitイベントどちらでも計測可能です。フォームファネル分析のためのイベントも設定します。" },
                { n: "10", t: "A/Bテスト計画", b: "公開後の改善サイクルとして、送信ボタンのテキスト・入力項目の構成・エラーメッセージのパターンなどのA/Bテスト計画を立てます。VWOやGA4の実験機能を使って、CV率が高い方を採用します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs &amp; Measurement</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              成果を見るための指標（KPI）
            </h2>
            <div style={{ maxWidth: "760px" }}>
              {[
                { n: "01", t: "フォームCV率", measure: "GA4 → コンバージョン / フォームページセッション数", b: "フォームページに訪れたユーザーのうち、実際に送信完了まで至った割合です。業種・商材によって異なりますが、3〜8%が一般的な目安です。この数値が低い場合はフォームのUI改善が有効です。" },
                { n: "02", t: "フォーム完了率", measure: "GA4 ファネル分析 → フォームページ到達 → 送信完了", b: "フォームページを開いたユーザーが送信完了まで到達した割合です。フォームCV率と異なり、「フォームを開始したが完了しなかった」ユーザーの離脱を明確に捉えられます。" },
                { n: "03", t: "途中離脱率", measure: "Hotjar / Mouseflowのフォームアナリティクス → フィールド別離脱率", b: "各フィールドでの離脱率を計測します。特定のフィールドで離脱が集中している場合は、そのフィールドの削除・任意化・説明文の追加が有効です。" },
                { n: "04", t: "フォームページ滞在時間", measure: "GA4 → エンゲージメント → 平均エンゲージメント時間", b: "滞在時間が異常に長い場合は、入力に手間取っている・エラーで悩んでいる可能性があります。適切な時間（1〜3分）に収まるよう入力負荷を最適化します。" },
                { n: "05", t: "スパム送信数", measure: "受信メール内のスパム件数 / 管理画面での送信ログ確認", b: "スパム対策実装前後の比較指標として活用します。スパム数が多すぎると本物の問い合わせを見落とすリスクがあります。reCAPTCHA実装後は週次でモニタリングします。" },
                { n: "06", t: "月間問い合わせ数", measure: "GA4 → コンバージョン数 / CRM・メール受信件数", b: "フォーム改善・誘導動線改善の結果として最も直接的に表れる指標です。月次推移をモニタリングし、改善施策の前後で比較します。" },
                { n: "07", t: "問い合わせ→商談転換率", measure: "CRM / 営業管理ツールでの追跡", b: "フォームから来た問い合わせが商談・成約に至った割合です。フォームの入力項目・質問設計によって問い合わせの質が変わります。量だけでなく質の向上も設計の目的です。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "20px 0", borderTop: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.t}</p>
                      <p style={{ fontSize: "11px", color: "#c4b89a", fontWeight: 600, marginBottom: "8px", fontFamily: "var(--font-mono, monospace)" }}>{item.measure}</p>
                      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} bgColor="#FFFFFF" heading="フォーム最適化についてよくある質問" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="フォーム最適化のご相談"
          body="お問い合わせフォームの設計・改善・新規制作をご相談ください。CV率の低下が気になる・フォームを新しく作りたいなど、お気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
