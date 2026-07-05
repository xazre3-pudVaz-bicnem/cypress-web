import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "サポートポリシー・支援方針｜株式会社サイプレス",
  description:
    "株式会社サイプレスのサポートポリシー。月次レポート提供・定例ミーティング・迅速な問い合わせ対応・透明性の確保・長期的な改善視点で、お客様のWeb集客を継続的に支援します。",
  keywords: [
    "サポートポリシー",
    "支援方針",
    "サポート体制",
    "株式会社サイプレス",
    "月次レポート",
    "MEO対策サポート",
    "SEO対策サポート",
  ],
  openGraph: {
    title: "サポートポリシー・支援方針｜株式会社サイプレス",
    description:
      "月次レポート・定例MTG・24時間以内レスポンス。「制作して終わり」ではない長期伴走型支援のスタンスを詳しく解説します。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/support-policy" },
};

const faqItems = [
  {
    q: "問い合わせへの返答はどのくらいの時間がかかりますか？",
    a: "原則として24時間以内にご返信します。土曜・日曜・祝日にいただいたお問い合わせは翌営業日中に対応します。緊急のご相談の場合は、メールの件名に「緊急」とご記載いただければ優先的に対応します。",
  },
  {
    q: "連絡はメール以外でも対応していますか？",
    a: "主な連絡手段はメール（info@cypress-all.co.jp）です。オンラインミーティング（Zoom・Google Meet等）でのご相談も随時対応しています。ご希望の連絡手段はご契約時にすり合わせます。",
  },
  {
    q: "月次レポートはどのような形式で届きますか？",
    a: "PDFまたはGoogleスライド・Googleスプレッドシート形式でご提供します。検索順位の推移・アクセス数・問い合わせ件数・施策実施内容・翌月の改善計画が1つのレポートにまとまっています。リアルタイムのデータ確認にはGA4・Search Console・Googleビジネスプロフィールへの閲覧権限をお渡しします。",
  },
  {
    q: "定例ミーティングは必須ですか？",
    a: "必須ではありません。レポートのみのご確認でも問題ありません。ただし、月1回程度のオンラインMTG（30分〜1時間程度）をご希望の場合は、ご契約内容に応じて設定可能です。施策の方向性確認・質問・追加相談にご活用ください。",
  },
  {
    q: "施策の内容や方針を変更したい場合はどうすればよいですか？",
    a: "いつでもご相談ください。月次の報告タイミングでご要望をいただくことが最もスムーズですが、月途中のご相談も受け付けています。ビジネス環境の変化や新たな目標に応じて、柔軟に施策内容を調整します。",
  },
  {
    q: "担当者が変わることはありますか？",
    a: "担当者の変更が生じる場合は、事前にご連絡のうえ引き継ぎを徹底します。施策の記録・レポート・ミーティングメモはすべて文書化・共有管理しているため、担当が変わっても対応品質を維持します。",
  },
  {
    q: "効果が出ていない場合、どのように対応してもらえますか？",
    a: "月次レポートの中で現状を率直に共有し、原因分析と改善施策をご提案します。SEO・MEOは検索エンジンのアルゴリズムに依存するため具体的な成果を保証するものではありませんが、データに基づいて継続的に改善を繰り返す姿勢で取り組みます。",
  },
  {
    q: "契約を途中で解約することはできますか？",
    a: "月次更新を基本としており、長期縛りはありません。解約をご希望の場合は、月末までにお申し出いただければ翌月以降の更新を停止します。中途解約に伴うペナルティは設けていません。",
  },
  {
    q: "複数のサービスを利用している場合、レポートは統合されますか？",
    a: "MEO・SEO・SNS運用など複数のサービスをご契約の場合は、統合レポートとしてまとめてご提供します。各施策の相互影響も含めてトータルの集客状況を分かりやすくお伝えします。",
  },
  {
    q: "契約開始後、最初に何から始まりますか？",
    a: "契約後まず現状診断（ヒアリング・ツール設定確認・競合調査）を行い、優先施策を整理します。通常1〜2週間以内にキックオフミーティングを実施し、3ヶ月・6ヶ月のロードマップをご提案します。",
  },
  {
    q: "緊急時の対応体制はどうなっていますか？",
    a: "急なGoogleビジネスプロフィールの停止・サイトの不具合・クレーム対応など緊急性の高いご相談は、メール件名に「緊急」とご記載ください。可能な限り当日中の対応を目指します。土日祝日は翌営業日対応が基本ですが、状況に応じて対応します。",
  },
  {
    q: "レポートが届いた後、説明を受ける機会はありますか？",
    a: "はい。レポート送付後にオンラインでの解説MTGをご希望の場合は、随時対応しています。数値の見方・施策の背景・次月の方針など、疑問点はどうぞ遠慮なくご質問ください。",
  },
  {
    q: "支援内容はどこまでが対象になりますか？",
    a: "ご契約いただいているサービスの範囲内で支援します。範囲外の作業が必要な場合は、追加費用の見積もりを事前にご提示した上で対応します。「どこまでが対応範囲か」は契約前に明確にお伝えします。",
  },
  {
    q: "Google側のアルゴリズム変更があった場合はどう対応しますか？",
    a: "Googleのコアアップデート・ポリシー変更・ローカル検索アルゴリズムの変動があった際は、影響分析と対応方針を速やかにご連絡します。外部環境の変化に応じた戦略調整も、継続サポートの一環として対応します。",
  },
  {
    q: "AI検索（ChatGPT・Gemini等）の変化への対応はサポートに含まれますか？",
    a: "AIO（AI検索最適化）サービスをご契約の場合は、AI検索エンジンの動向変化への対応も月次レポートおよび施策の中に含まれます。AI検索環境は急速に変化しているため、最新の動向に合わせた対応をプロアクティブにご提案します。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社情報", desc: "株式会社サイプレスについて" },
  { href: "/company/profile", label: "会社概要", desc: "基本情報・所在地" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/philosophy", label: "経営方針", desc: "事業への姿勢と方針" },
  { href: "/company/value", label: "企業理念・バリュー", desc: "大切にしていること" },
  { href: "/company/history", label: "沿革・会社の歩み", desc: "設立の経緯と展望" },
  { href: "/process", label: "ご利用の流れ", desc: "相談から開始までのステップ" },
  { href: "/process/consultation", label: "無料相談の流れ", desc: "初回相談のステップ" },
  { href: "/support/operation", label: "継続運用サポート", desc: "運用支援の詳細" },
  { href: "/support/reporting", label: "月次レポーティング", desc: "レポート内容の詳細" },
  { href: "/services", label: "サービス一覧", desc: "提供サービス全体" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ上位表示" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索エンジン最適化" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索への対応" },
  { href: "/services/web", label: "ホームページ制作", desc: "集客設計のサイト制作" },
  { href: "/services/sns", label: "SNS運用代行", desc: "SNSの継続運用支援" },
  { href: "/cost/meo", label: "MEO費用", desc: "月額料金の目安" },
  { href: "/cost/seo", label: "SEO費用", desc: "SEO対策の費用感" },
  { href: "/faq", label: "よくある質問", desc: "サービス全般のQ&A" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談はこちら" },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function SupportPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav
              style={{
                fontSize: "12px",
                marginBottom: "24px",
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <Link href="/" style={{ color: "#6B7280", textDecoration: "none" }}>
                ホーム
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/company" style={{ color: "#6B7280", textDecoration: "none" }}>
                会社情報
              </Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>サポートポリシー</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Support Policy
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px,4vw,48px)",
                color: "#0d1b2a",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "24px",
              }}
            >
              サポートポリシー・支援方針
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "16px",
              }}
            >
              株式会社サイプレスは「制作して終わり」「施策して終わり」ではなく、長期的な成果を生み出し続けるパートナーとして関係を築いていくことを重視しています。
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
              }}
            >
              月次レポートによる透明な進捗共有・定期的なミーティング・迅速なレスポンス体制を通じて、
              お客様のWeb集客を継続的に改善し続けます。
            </p>
          </div>
        </section>

        {/* このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You&apos;ll Learn
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              このページでわかること
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "サイプレスのサポートに対する基本的な考え方",
                  b: "なぜ長期伴走型のスタンスを採るのか、その背景にある思想と理由をお伝えします。",
                },
                {
                  n: "02",
                  t: "月次レポートで何が共有されるか",
                  b: "毎月お届けするレポートに含まれるデータ・分析・提案内容の具体的な中身を解説します。",
                },
                {
                  n: "03",
                  t: "定例ミーティングの位置づけと進め方",
                  b: "月1回以上の進捗確認MTGの目的・内容・所要時間・設定方法を説明します。",
                },
                {
                  n: "04",
                  t: "問い合わせへの返答目安と連絡体制",
                  b: "メール・オンラインでのご連絡への対応時間と、緊急時の対応フローをご案内します。",
                },
                {
                  n: "05",
                  t: "契約後の運用サイクルの全体像",
                  b: "キックオフから月次運用・レポート・改善提案までの流れをステップごとに説明します。",
                },
                {
                  n: "06",
                  t: "私たちがしないこと・誠実な支援の範囲",
                  b: "成果保証・不要な追加提案・施策の不透明化など、行わないことを明示します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 私たちのサポート方針 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Policy
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              私たちのサポート方針
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "48px",
              }}
            >
              Web集客は一度の施策で完結するものではありません。
              継続的なデータ収集・分析・改善のサイクルを繰り返すことで、はじめて成果が積み上がります。
              その過程を一緒に歩むために、以下の5つの方針を大切にしています。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01",
                  t: "月次レポートの提供 — 成果を数字で可視化",
                  b: "毎月、Google Search Console・Google Analytics・Googleビジネスプロフィールのデータをもとにレポートを作成し、お届けします。検索順位の推移・月間アクセス数・問い合わせ件数・MEOインサイト（表示回数・電話クリック・経路クリック）などの重要指標を数値とグラフで可視化します。「何をしているかわからない」状態を作らず、施策の実施内容と効果の関係を透明に共有することがサポートの出発点です。リアルタイムのデータ確認のために、GA4・Search Console・GBPへの閲覧権限もご提供します。",
                },
                {
                  n: "02",
                  t: "定例ミーティング — 月1回以上の進捗確認",
                  b: "月1回以上のオンラインミーティング（Zoom・Google Meet等）を設定し、レポート内容の解説・施策の方向性の確認・質問・ご要望の吸い上げを行います。ミーティングは30分〜1時間程度で、事前にアジェンダをお送りします。お客様のスケジュールに合わせて柔軟に日程調整します。定例MTGを通じて、数値の背景にある文脈や市場環境の変化も合わせてご説明し、施策への理解を深めていただきます。",
                },
                {
                  n: "03",
                  t: "迅速な対応 — 問い合わせへの返答目安",
                  b: "メールでのご連絡は原則24時間以内に返信します（土日・祝日は翌営業日）。緊急度の高いご相談（Googleビジネスプロフィールの停止・サイトの不具合・クレーム対応等）はメール件名に「緊急」とご記載いただければ優先的に対応します。「気軽に質問できる」関係性を大切にしており、日常的な疑問・競合の動き・口コミへの返信相談なども歓迎します。",
                },
                {
                  n: "04",
                  t: "透明性の確保 — 施策内容・効果を分かりやすく報告",
                  b: "何をどのような意図で行ったのか、その結果どう数字が動いたのかを、専門用語を極力使わずわかりやすく報告します。施策の記録はすべてドキュメントで管理し、振り返りができる状態を維持します。担当者が変わっても情報が引き継がれるよう、ナレッジを共有管理することも透明性確保の一部です。お客様が自社のWebマーケティングを理解して判断できる力を養うことも、サポートの目的のひとつです。",
                },
                {
                  n: "05",
                  t: "長期的な視点 — 短期成果だけでなく継続的な改善",
                  b: "SEOの効果が安定するまでには3〜6ヶ月、定着するまでには1年以上かかることがあります。MEOも継続的な運用と口コミ獲得の積み重ねが評価につながります。短期の数字の上下に一喜一憂するのではなく、中長期の成果を見据えた施策の積み上げを重視します。Googleのアルゴリズム変更・AI検索の普及・競合環境の変化といった外部環境の変動にも継続的に対応し、持続的な集客の仕組みを構築することを目指します。",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "28px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#0d1b2a",
                        marginBottom: "12px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 連絡・対応体制 */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Contact & Response
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "40px",
              }}
            >
              連絡・対応体制
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
                maxWidth: "900px",
                marginBottom: "56px",
              }}
            >
              {[
                {
                  label: "メールでのお問い合わせ",
                  detail:
                    "info@cypress-all.co.jp 宛にご連絡ください。施策に関するご質問・資料のご送付・変更ご要望など、幅広いご相談に対応します。原則24時間以内（土日祝は翌営業日）にご返信します。",
                },
                {
                  label: "オンラインミーティング",
                  detail:
                    "Zoom・Google Meetでのオンライン商談・MTGに対応しています。ご希望の日時をメールでご連絡いただければ、候補日程をお返しします。画面共有でのレポート解説や施策説明も行います。",
                },
                {
                  label: "通常対応時間",
                  detail:
                    "平日10:00〜18:00を通常の対応時間としています。この時間帯にいただいたご連絡は当日中の対応を目指します。夜間・早朝のメールは翌営業日中に対応します。",
                },
                {
                  label: "緊急時の対応",
                  detail:
                    "Googleビジネスプロフィールの突然の停止・サイトへのアクセス不具合・クレーム対応が必要な場面等、緊急性が高い場合はメール件名に「緊急」とご記載ください。可能な限り当日中の対応を目指します。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px",
                    border: "1px solid #E8E4DC",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#0d1b2a",
                      marginBottom: "12px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.detail}</p>
                </div>
              ))}
            </div>

            {/* 対応時間 補足 */}
            <div
              style={{
                maxWidth: "720px",
                padding: "24px 28px",
                background: "#F9F8F5",
                borderLeft: "3px solid #c4b89a",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#0d1b2a",
                  marginBottom: "8px",
                }}
              >
                対応時間・レスポンスについて
              </p>
              <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>
                当社はスタートアップ段階の小規模組織であり、大規模なコールセンターや複数担当チームによる体制ではありません。
                そのぶん、担当者が直接対応するため、画一的なテンプレート返信ではなく、お客様の状況に合わせた誠実な対応を心がけています。
                土日祝日の対応は翌営業日となりますこと、あらかじめご了承ください。
              </p>
            </div>
          </div>
        </section>

        {/* ご支援の流れ（契約後） */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Post-Contract Flow
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              ご支援の流れ（契約後）
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "48px",
              }}
            >
              契約締結後から実際の支援がスタートするまでの流れと、月次運用のサイクルをご説明します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  step: "STEP 01",
                  t: "契約・初期設定",
                  b: "契約書の締結後、支援に必要なツールへのアクセス権設定（GA4・Google Search Console・Googleビジネスプロフィール等）を行います。現状のデータ取得・アカウント状況の確認をこの段階で実施します。通常、契約後1週間以内に初期設定を完了します。",
                },
                {
                  step: "STEP 02",
                  t: "キックオフミーティング",
                  b: "ビジネス目標・ターゲット顧客・競合状況・現在の課題をヒアリングするキックオフMTGを実施します（オンライン・60〜90分程度）。この場でお客様のビジネスへの理解を深め、3ヶ月・6ヶ月の優先施策ロードマップをご提案します。支援の方向性をお客様と合意した上でスタートします。",
                },
                {
                  step: "STEP 03",
                  t: "月次運用フェーズ",
                  b: "ロードマップに基づき、各月の施策を実行します。MEO対策であれば投稿・写真更新・口コミ対応・競合分析、SEO対策であればコンテンツ制作・技術改善・内部リンク最適化などを月次で進めます。施策の実施内容はすべて記録・文書化し、透明性を維持します。",
                },
                {
                  step: "STEP 04",
                  t: "月次レポートのご提出",
                  b: "毎月末から翌月初旬にかけて、月次レポートをメールでお送りします。検索順位・アクセス数・MEOインサイト・口コミ状況・施策実施内容・翌月の改善提案が1つのレポートにまとまっています。ご不明点はMTG・メールでいつでもご確認いただけます。",
                },
                {
                  step: "STEP 05",
                  t: "改善・戦略更新",
                  b: "レポートと定例MTGをもとに、翌月以降の施策の優先順位・方向性を更新します。Googleのアルゴリズム変更・AI検索の動向・競合環境の変化など外部要因の変化にも対応しながら、施策の精度を継続的に高めます。3〜6ヶ月ごとに中期方針の見直しも行います。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "28px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <div style={{ flexShrink: 0, minWidth: "80px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: "#c4b89a",
                        marginBottom: "4px",
                      }}
                    >
                      {item.step}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "10px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 月次レポートの内容 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Monthly Report
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                fontWeight: 700,
                marginBottom: "16px",
                color: "#FFFFFF",
              }}
            >
              月次レポートに含まれる内容
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                maxWidth: "640px",
                marginBottom: "48px",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              毎月お届けするレポートには、以下の項目が含まれます。
              数値だけでなく、その背景・解釈・翌月の提案まで一体的にお伝えします。
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "20px",
                maxWidth: "900px",
              }}
            >
              {[
                {
                  t: "検索・流入データ",
                  b: "Google Search ConsoleとGA4から、対策キーワードの順位変動・インプレッション・クリック数・セッション数・問い合わせ件数・直帰率を確認します。",
                },
                {
                  t: "MEOインサイトデータ",
                  b: "Googleビジネスプロフィールの検索表示回数・電話クリック数・経路クリック数・写真閲覧数の月次推移を報告します。",
                },
                {
                  t: "口コミ・評価状況",
                  b: "口コミの件数・評価スコアの推移を報告。獲得した口コミへの返信状況と、翌月の口コミ獲得施策のご提案も含みます。",
                },
                {
                  t: "施策実施内容の記録",
                  b: "当月に実施した施策の詳細（何を・いつ・どのような意図で行ったか）を記録します。透明性の確保と振り返りに活用します。",
                },
                {
                  t: "競合動向の概要",
                  b: "主要競合の動向（新規参入・ランキング変動・口コミの増減等）を定点観測し、必要に応じてレポートに反映します。",
                },
                {
                  t: "翌月の施策計画",
                  b: "当月の結果を踏まえた翌月の優先施策・改善ポイント・コンテンツ更新計画を整理してお伝えします。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "24px",
                    border: "1px solid rgba(196,184,154,0.2)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#FFFFFF",
                      marginBottom: "10px",
                    }}
                  >
                    {item.t}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: "1.9" }}>
                    {item.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 私たちがしないこと */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What We Don&apos;t Do
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              私たちがしないこと
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                marginBottom: "40px",
              }}
            >
              誠実な支援のために、以下のことは行いません。
              サービスを選ぶ際の判断材料として、率直にお伝えします。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  x: "成果保証・誇大表現",
                  desc: "「必ず上位表示」「○%増加保証」といった成果保証の表現はしません。SEO・MEOは検索エンジンのアルゴリズムに依存するため、具体的な成果数値を保証することは誠実ではありません。データに基づいた着実な改善に取り組みます。",
                },
                {
                  x: "不要なサービスの追加提案",
                  desc: "お客様のビジネス目標に必要でないサービスの追加提案や、施策の肥大化はしません。費用対効果の高い施策を優先し、本当に必要なことに集中した支援を行います。",
                },
                {
                  x: "施策内容の不透明化",
                  desc: "「何をしているかわからない」状態でサービスを継続することは行いません。月次レポートで実施内容を明確に記録・報告し、お客様がいつでも施策の全体像を把握できる状態を維持します。",
                },
                {
                  x: "長期縛りによる解約阻止",
                  desc: "長期契約による強制的な継続は行いません。お客様が「続けたい」と感じられるサービスを提供することが私たちの責任です。解約のご要望は月末時点での申し出で翌月以降停止します。",
                },
                {
                  x: "架空の実績・根拠のない比較",
                  desc: "「業界トップ」「地域シェア○%」などの根拠のない優位性表現や、架空の実績数字の掲載はしません。設立間もない会社として、誠実で透明性のある情報発信を徹底します。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px 0",
                    borderTop: "1px solid #E8E4DC",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      background: "#374151",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                    }}
                  >
                    ✕
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#0d1b2a",
                        marginBottom: "6px",
                      }}
                    >
                      {item.x}
                    </p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サポートに関するQ&A — intro */}
        <section style={{ background: "#F9F8F5", padding: "60px 0 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px,2.8vw,30px)",
                color: "#0d1b2a",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              サポートに関するよくある質問
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#374151",
                maxWidth: "640px",
                paddingBottom: "40px",
              }}
            >
              お客様からよくいただく質問をまとめました。
              ここに掲載されていないご質問はお気軽にメールでお問い合わせください。
            </p>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="サポートポリシーについてよくある質問"
          bgColor="#F9F8F5"
        />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="サポート内容についてご相談ください"
          body="対応範囲・連絡体制・月次レポートの内容など、サポートに関するご質問はお気軽にどうぞ。まずはオンラインでの初回ご相談（無料）からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
