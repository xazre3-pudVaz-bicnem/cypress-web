import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "サービスサイト・LP制作｜コンバージョンを高める設計のWebサイト｜株式会社サイプレス",
  description:
    "サービスサイト・ランディングページ（LP）制作の専門ガイド。問い合わせ・申し込み・資料請求を増やすCV重視の設計・コピーライティング・SEO・A/Bテストまで解説。",
  keywords: ["サービスサイト制作", "LP制作", "ランディングページ", "コンバージョン最適化", "CV改善", "リード獲得サイト"],
  openGraph: {
    title: "サービスサイト・LP制作｜コンバージョンを高める設計のWebサイト｜株式会社サイプレス",
    description: "サービスサイト・LP制作のガイド。問い合わせ・申し込みを増やすCV重視の設計を解説。",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/web-design/service-site" },
};

const faqItems = [
  {
    q: "サービスサイトとランディングページ（LP）の違いは何ですか？",
    a: "サービスサイトは複数ページで構成され、サービス詳細・料金・FAQ・事例・会社概要など多くの情報を提供します。LPは1ページで完結し、特定の商品・サービスへの問い合わせ・申し込みを誘導することに特化しています。SEO流入を狙う場合はサービスサイト、広告（リスティング・SNS広告）のランディング先にはLPが向いています。",
  },
  {
    q: "サービスサイトのCVR（コンバージョン率）を上げるには？",
    a: "①ファーストビューでの価値提案の明確化、②社会的証明（事例・口コミ・受賞歴）の配置、③FAQ（不安解消）の充実、④CTA（行動喚起）ボタンの最適配置と文言改善、⑤フォームの入力項目最小化、⑥ページ表示速度の改善、が主な改善ポイントです。",
  },
  {
    q: "BtoBサービスとBtoCサービスでは設計が違いますか？",
    a: "はい、異なります。BtoBは意思決定者が複数・検討期間が長いため、詳細な機能説明・事例・資料ダウンロードが重要です。BtoCは感情的な共感・即決促進・わかりやすさが重要で、シンプルな構成と行動喚起を優先します。",
  },
  {
    q: "SEOとCV（コンバージョン）は両立できますか？",
    a: "はい、両立できます。SEOで集客し、そのページのCVRを高める設計が理想です。ただし、SEO向けのコンテンツ量（説明・FAQなど）とCV向けのすっきりした構成は相反する面もあるため、ページの役割を明確にしてSEO用コンテンツページとCV用ページを分けて設計することも有効です。",
  },
  {
    q: "問い合わせフォームの最適化もお願いできますか？",
    a: "はい。入力項目の最小化（必須項目は名前・メール・お問い合わせ内容の3項目が理想）・確認画面の廃止（1ステップ送信）・エラーメッセージの分かりやすさ・完了後のサンクスページの設計まで対応します。",
  },
  {
    q: "ヒートマップ・A/Bテストの導入もできますか？",
    a: "はい。Microsoft Clarity（無料ヒートマップ）の導入・Google Analytics 4のイベント計測設定・A/Bテストツール（Google Optimize、VWO等）の設定支援に対応しています。データに基づいた継続的なCV改善を支援します。",
  },
  {
    q: "コピーライティング（文章）も制作してもらえますか？",
    a: "はい。サービスの強み・ターゲット・競合との差別化ポイントをヒアリングし、SEO・ブランドビジョン・CVを同時に考慮したキャッチコピー・本文・CTAの文言を制作します。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "シンプルなLP（1ページ）で3〜4週間、複数ページのサービスサイトで2〜3ヶ月が目安です。コンテンツの用意状況・デザインの複雑さ・修正回数によって前後します。",
  },
  {
    q: "既存サービスサイトのCV改善リニューアルも対応できますか？",
    a: "はい。既存サイトのヒートマップデータ・GA4のユーザー行動データ・現在のCVRを分析したうえで、改善ポイントを特定してリニューアル設計します。全面リニューアルだけでなく、特定セクションの改善のみの部分リニューアルにも対応します。",
  },
  {
    q: "Google広告・Meta広告との連携を考えたLP設計はできますか？",
    a: "はい。広告のクリエイティブ（バナー・テキスト）と一致したメッセージをファーストビューに配置し、広告から来たユーザーが「これが自分の探しているものだ」と感じるランディングページを設計します。コンバージョントラッキングのGTM設定も含めて対応します。",
  },
  {
    q: "サービスサイトに料金・費用を掲載すべきですか？",
    a: "掲載することを推奨します。料金が見えないと「問い合わせるのが怖い」という心理的障壁が高まり、CVRが下がります。価格帯・プランの目安・見積もりの考え方を掲載することで、本気で検討しているユーザーが問い合わせやすくなります。",
  },
  {
    q: "スマートフォン対応（モバイルファースト）の設計ですか？",
    a: "はい。サービスサイトへのアクセスの60〜70%はスマートフォンです。ファーストビューのCTAボタンのタップしやすいサイズ・フォームの入力しやすさ・テキストの読みやすいフォントサイズをモバイルで先に設計するモバイルファーストアプローチで制作します。",
  },
  {
    q: "LINE公式アカウントとの連携もできますか？",
    a: "はい。CTAにLINE友達追加ボタンを設置し、問い合わせのハードルを下げる設計が可能です。特に個人向けサービス（美容・健康・教育・生活サービス）ではLINE経由のCV比率が電話・フォームを上回るケースがあります。LINE連携のCVシナリオも設計します。",
  },
  {
    q: "事例・実績ページはサービスサイトに必要ですか？",
    a: "はい、特にBtoBサービスでは必須です。「他社がどのような課題を解決したか」の具体的な事例は、検討段階のユーザーに最も響く信頼要素です。課題→アプローチ→成果の構成で作成することで、SEO・AIOにも貢献するコンテンツになります。",
  },
  {
    q: "サービスの魅力をうまく言語化できないのですが、サポートしてもらえますか？",
    a: "はい。サービスのヒアリングシートをもとに、強み・差別化ポイント・ターゲットが感じる価値を整理し、コピーライターが言語化します。競合との比較軸を整理し「なぜこのサービスを選ぶべきか」を明確に伝えるメッセージ設計から支援します。",
  },
  {
    q: "Webサイト公開後の運用・更新サポートはありますか？",
    a: "はい。月次の数値レポート確認・CTAボタン文言テスト・フォームの改善・FAQ追加などの継続改善サポートを提供します。ヒートマップとGA4データを組み合わせて、CVRの課題箇所を特定しながら毎月改善を繰り返すPDCAサイクルをご支援します。",
  },
  {
    q: "サービスサイトにチャット・問い合わせウィジェットを設置できますか？",
    a: "はい。Intercom・HubSpot・Zendeskなどのチャットウィジェット、またはLINE・チャットワークへの誘導ボタンを設置できます。チャットはフォームより心理的ハードルが低く、特に検討初期段階のユーザーのCVに有効です。",
  },
  {
    q: "決済・予約システムとの連携はできますか？",
    a: "はい。Stripe決済・Square・PAY.JPなどの決済システムや、RESERVA・Airリザーブ・TimeTreeなどの予約システムとの連携が可能です。フォーム送信→手動対応ではなく、サービスサイト内で完結する予約・購入フローを設計します。",
  },
  {
    q: "ファーストビューの改善だけ依頼できますか？",
    a: "はい。既存サイトのファーストビュー（キャッチコピー・CTAボタン・ビジュアル）の改善のみのスポット対応も可能です。ヒートマップと直帰率データを確認したうえで、ファーストビューの課題を特定して改善案を提案します。",
  },
  {
    q: "サービスサイトの制作費用の目安を教えてください。",
    a: "シンプルなLP（1ページ）で30〜60万円、複数ページのサービスサイト（5〜10ページ）で80〜150万円、SEO・CMS機能込みの本格サービスサイトで150〜300万円が目安です。ヒアリング後にお見積りをご案内します。",
  },
];

const relatedLinks = [
  { href: "/web-design", label: "Web制作とは", desc: "Webサイト制作の基礎" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "企業の顔となるWebサイト" },
  { href: "/web-design/seo-site", label: "SEO特化サイト制作", desc: "検索流入を最大化するサイト" },
  { href: "/web-design/wordpress", label: "WordPress制作", desc: "CMS型サービスサイト" },
  { href: "/web-design/ec-site", label: "ECサイト制作", desc: "商品販売サービスサイト" },
  { href: "/web-design/renewal", label: "サイトリニューアル", desc: "CVを改善するリニューアル" },
  { href: "/web-design/blog-site", label: "ブログ・メディアサイト制作", desc: "コンテンツSEOサイト" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "サイプレスの制作サービス" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サービスサイトのSEO対策" },
  { href: "/cost/web-design", label: "Web制作の費用", desc: "LP・サービスサイトの料金" },
  { href: "/guide/how-to-choose-web-design-company", label: "Web制作会社の選び方", desc: "CV改善対応会社の選定" },
  { href: "/checklist/web-design", label: "Web制作チェックリスト", desc: "サービスサイト制作の確認項目" },
  { href: "/industry/consulting", label: "コンサルティングのWeb制作", desc: "コンサル向けサービスサイト" },
  { href: "/industry/saas", label: "SaaS・ITのWeb制作", desc: "SaaS向けサービスサイト" },
  { href: "/industry/training", label: "研修・セミナーのWeb制作", desc: "研修会社向けサービスサイト" },
  { href: "/industry/cleaning", label: "クリーニング・家事代行のWeb制作", desc: "生活サービス向けLP" },
  { href: "/industry/medical", label: "医療・クリニックのWeb制作", desc: "クリニック向けサービスサイト" },
  { href: "/industry/law", label: "士業のWeb制作", desc: "弁護士・税理士向けサービスサイト" },
  { href: "/industry/fitness", label: "フィットネスのWeb制作", desc: "ジム向けサービスサイト" },
  { href: "/area/tokyo", label: "東京のWeb制作", desc: "東京エリアの制作対応" },
  { href: "/area/osaka", label: "大阪のWeb制作", desc: "大阪エリアのLP制作" },
  { href: "/area/nagoya", label: "名古屋のWeb制作", desc: "名古屋エリアのサービスサイト制作" },
  { href: "/company", label: "サイプレスについて", desc: "会社概要・代表者情報" },
  { href: "/contact", label: "無料相談", desc: "サービスサイト制作のご相談" },
];

export default function ServiceSitePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/web-design" style={{ color: "#6B7280" }} className="hover:underline">Web制作</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>サービスサイト・LP制作</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Site / LP</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サービスサイト・LP制作
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              サービスサイト・ランディングページ（LP）は、問い合わせ・申し込み・資料請求などのコンバージョン（CV）を最大化するための設計が最重要です。美しいデザインだけでなく、ユーザーの行動を促す心理設計・コピーライティング・CTA配置が成果を左右します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              SEOによるオーガニック流入と広告（リスティング・SNS広告）からのトラフィックを受け止め、確実にCVに結びつけるサービスサイト・LPを設計・制作します。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <section className="relative" style={{ height: "300px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).jpg" alt="サービスサイト・LP制作・コンバージョン最適化のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
          <div className="relative flex items-center justify-center h-full text-center px-6">
            <p className="font-black" style={{ fontSize: "clamp(20px,3vw,36px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>問い合わせが増えるサイト設計</p>
          </div>
        </section>

        {/* CVが取れないLPの問題 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>CV Blockers</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              CVが取れないサービスサイト・LPの4つの共通問題
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "ファーストビューで価値が伝わらない", b: "ユーザーはページを開いて3秒以内に「自分に関係あるか」を判断します。キャッチコピー・サブコピー・CTAが揃っていないファーストビューは、その3秒で多くのユーザーを失います。" },
                { t: "CTA（行動喚起）の位置と数が不足", b: "「問い合わせはこちら」ボタンがフッターにしかないLPではCVが取れません。ファーストビュー・中間・フッターに戦略的にCTAを配置し、離脱機会を最小化します。" },
                { t: "信頼要素が不足している", b: "初めて訪れるユーザーが「この会社に頼んで大丈夫か」と感じる不安を解消する要素（実績・事例・保証・口コミ）がないサービスサイトはCVRが著しく低くなります。" },
                { t: "スマートフォンでの最適化不足", b: "サービスサイトへのアクセスの60%以上がスマートフォンです。PCで見栄えが良くてもスマートフォンで操作しにくいフォーム・小さすぎるボタンではCV機会を大きく失います。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "サービスサイト・LPでCVRを高める設計の原則と実装方法",
                "CVが取れないサービスサイトに共通する10の課題と原因",
                "業種ごとのサービスサイト・LP設計で押さえるべきポイント",
                "ヒアリング〜公開〜改善まで10ステップの制作・実装フロー",
                "CV率・広告ROAS・問い合わせ数など成果を測る7つのKPI",
                "コピーライティング・フォーム最適化・ヒートマップ改善の具体的な手法",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サービスサイト・LPでよくある課題と原因
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "複数サービスを一つのサイトに詰め込んで伝わらない",
                  body: "「何でもできます」は「何も得意ではない」と受け取られます。複数のサービスを1ページに並べると、訪問者がどのサービスを選べば良いか迷い離脱します。サービスごとに専用ページを設けるか、ターゲットを絞ったLPを分離することで伝わりやすさが向上します。",
                },
                {
                  title: "サービスのベネフィットが曖昧",
                  body: "「品質の高いサービスを提供します」では何も伝わりません。ユーザーが求めているのは「自分の課題がどう解決されるか」という具体的なベネフィットです。機能説明ではなく、利用後の状態変化・解決される問題を言語化する必要があります。",
                },
                {
                  title: "ターゲットが広すぎる",
                  body: "「すべての方に対応」というメッセージは誰にも響きません。ターゲットペルソナを絞り、「こんなお悩みがある方へ」と訴求することで共感が生まれ、CVRが上昇します。ターゲットが絞られるほど刺さるコピーを書けます。",
                },
                {
                  title: "競合と差別化できていない",
                  body: "競合と同じキーワード・同じ表現で訴求しているサービスサイトは、ユーザーにとって「どこも同じ」に見えます。競合分析をもとに独自の強み・価値提案（UVP）を明確にし、「このサービスでなければならない理由」を設計することが差別化の基本です。",
                },
                {
                  title: "CVへの導線が分かりにくい",
                  body: "ページを読み終えたユーザーが「次に何をすれば良いか」迷うサイトはCVを失います。ファーストビュー・コンテンツの中間・フッターの3箇所以上にCTAボタンを配置し、スクロールのたびに次のアクションを提示する設計が必要です。",
                },
                {
                  title: "料金・プラン情報が不明確",
                  body: "「費用については要お問い合わせ」という設計はCVRを下げます。価格が分からないと「高いかもしれない」という不安が先行し、問い合わせのハードルが上がります。最低価格・価格帯・プランの考え方を開示することで問い合わせ意欲が高まります。",
                },
                {
                  title: "信頼要素（実績・口コミ）が少ない",
                  body: "初めて訪問するユーザーに最も大きな影響を与えるのは社会的証明（他者の評価・実績）です。導入事例・お客様の声・実績数・メディア掲載・受賞歴などの信頼要素が少ないサービスサイトは、ユーザーが行動する前に離脱します。",
                },
                {
                  title: "FAQが少なくて不安解消できていない",
                  body: "購入・申し込みを決断する前にユーザーは必ず不安を持っています。「本当に効果があるの？」「解約できる？」「料金は後から追加されない？」などの不安をFAQで先回りして解消しないと、検討は前進しません。FAQはSEO・AIOにも貢献します。",
                },
                {
                  title: "SNS・Google広告との着地先として最適化されていない",
                  body: "広告クリエイティブと着地ページのメッセージが一致していない場合、広告費が無駄になります。「広告で訴求したキーワード・ビジュアル・オファー」がLPのファーストビューにも反映されている「メッセージマッチ」が広告LPの必須条件です。",
                },
                {
                  title: "A/Bテストができる体制がない",
                  body: "サービスサイトは公開して終わりではなく、データに基づく継続改善がCVR向上の鍵です。GA4のイベント計測・ヒートマップ・A/Bテストツールが設定されていないと、どの改善が効果的かを判断できず、感覚だけに頼った修正を繰り返すことになります。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別のサービスサイト・LP設計ポイント
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { industry: "コンサルティング", point: "課題解決フロー・成果イメージの可視化", body: "「どんな課題が解決できるか」を具体的な事例とともに提示し、導入後の成果イメージを持たせることがCVの鍵です。無料相談の導線を複数設置し、相談のハードルを下げる設計が有効です。" },
                { industry: "SaaS・IT", point: "機能・料金・デモ申込の3点セット", body: "機能一覧・料金プラン・無料トライアル申込を明確に配置します。競合との機能比較表や導入事例（業種別）が意思決定の後押しになります。デモ動画の埋め込みも離脱防止に効果的です。" },
                { industry: "研修・セミナー", point: "プログラム・受講者の声・申込フロー", body: "カリキュラム・登壇者プロフィール・過去受講者の声を充実させます。日程・定員・申込締切を明示し、緊急性・希少性の訴求によって申込を促す設計が有効です。" },
                { industry: "クリーニング・家事代行", point: "料金・エリア・申込フローの透明性", body: "明確な料金表・対応エリア・作業内容の写真・ビフォーアフターを掲載します。初回限定割引やキャンペーンと申込ボタンをセットで設計し、初回利用のハードルを下げます。" },
                { industry: "EC・通販", point: "商品特徴・ビフォーアフター・購入導線", body: "商品の使用前後の変化を視覚的に伝え、購入ボタンへの導線を最短にします。レビュー・口コミ・Q&Aを充実させ、購入不安を取り除く設計が離脱防止とCVR向上に直結します。" },
                { industry: "医療・クリニック", point: "症状・治療法・予約フローの設計", body: "「この症状が治るか」という検索意図に応えるコンテンツと、予約フォームへの明確な導線を設計します。医師プロフィール・院内写真・患者さんの声で信頼性を担保します。医療広告ガイドライン準拠も徹底します。" },
                { industry: "士業（弁護士・税理士）", point: "無料相談への誘導・費用目安の明示", body: "「まず相談してみよう」と感じさせる無料相談CTAを複数設置します。費用目安・相談から解決までの流れ・担当弁護士・税理士のプロフィールで安心感を醸成し、相談を決断しやすい設計にします。" },
                { industry: "フィットネス・ジム", point: "プログラム・体験申込・会員の声", body: "コース・料金・トレーナー紹介をシンプルに整理し、体験申込ボタンをファーストビューに配置します。入会後の変化（ビフォーアフター・会員の声）のビジュアルが申込を後押しする最大の要素です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: "#c4b89a" }}>{item.industry}</p>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.point}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="md:col-span-2" style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 制作・実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サービスサイト・LP制作・実装フロー
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "サービス定義・ターゲット明確化", body: "サービスの強み・競合優位性・ターゲットペルソナ（年齢・職業・課題・検討行動）を詳細にヒアリングします。「誰の・どんな課題を・どのように解決するか」を1文で表現できるまで整理し、サービスサイト全体のメッセージの軸を確定します。" },
                { step: "競合LP分析", body: "同業・競合他社のサービスサイト・LPを10〜15サイト調査し、コンテンツ構成・キャッチコピー・CTA配置・料金表示・信頼要素の見せ方を分析します。競合の強みと弱みを把握したうえで、自社の差別化ポイントを明確にします。" },
                { step: "CVシナリオ設計（問い合わせ・申込・資料DL）", body: "サービスへの流入元（SEO・広告・SNS）ごとにユーザーの検討段階を想定し、それぞれに最適なCVゴール（問い合わせ・無料相談予約・資料請求・LINEへの誘導）を設計します。複数のCVポイントを設けて取りこぼしを防ぎます。" },
                { step: "コンテンツ設計（ファーストビュー・ベネフィット・信頼・FAQ・CTA）", body: "ページ全体のセクション構成を設計します。ファーストビュー→課題共感→ベネフィット提示→サービス詳細→社会的証明（事例・口コミ）→FAQ→CTA→会社概要の流れが基本設計です。各セクションに盛り込む情報を決定します。" },
                { step: "コピーライティング", body: "キャッチコピー・サブコピー・各セクションの見出し・本文・CTA文言を制作します。SEOキーワードを自然に含めつつ、ユーザーの感情と行動を動かすコピーを設計します。複数案を制作し、A/Bテストで検証できるバリエーションも用意します。" },
                { step: "デザイン制作", body: "ブランドトーン・配色・フォント・ビジュアル方針を決定し、Figmaでワイヤーフレーム→デザインカンプを制作します。モバイルファーストで設計し、スマートフォン表示でのCTAボタンのタップしやすさ・フォームの入力しやすさを優先します。" },
                { step: "Next.jsによるフロントエンド実装", body: "承認されたデザインカンプをNext.js + TypeScript + Tailwind CSSで実装します。next/imageによる画像最適化・next/fontによるフォント最適化・コード分割によるCore Web Vitalsの最適化を実施します。フォームはAPI Routesまたは外部フォームサービスと連携します。" },
                { step: "計測設定（GA4・GTM・広告CV）", body: "Google Analytics 4のイベント計測（フォーム送信・CTAクリック・スクロール深度）をGTMで設定します。Google広告・Meta広告のコンバージョンタグも設置し、広告ROASの計測体制を構築します。Microsoft Clarity（ヒートマップ）も設置します。" },
                { step: "公開", body: "最終的なテスト（モバイル・PC・各ブラウザでの表示確認・フォーム送信テスト・計測タグの発火確認）を実施してから本番公開します。DNSの切り替え・SSL証明書の確認・リダイレクト設定も含めて対応します。" },
                { step: "ヒートマップ・A/Bテスト改善", body: "公開後1〜2週間でヒートマップ（クリック・スクロール深度・離脱箇所）を分析し、CVRの課題箇所を特定します。GA4のファネル分析と組み合わせて改善仮説を立て、CTAボタン・キャッチコピー・セクション順序のA/Bテストを実施します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための7つのKPI
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "CV率（コンバージョン率）", where: "Google Analytics 4 → コンバージョン → コンバージョンイベント", body: "セッション数に対する問い合わせ・申込数の割合です。業種・サービス・流入元によって目標値は異なりますが、問い合わせ型サービスサイトで2〜5%、LP（広告着地）で3〜8%が一般的な目安です。" },
                { kpi: "ファーストビュー離脱率", where: "Microsoft Clarity → スクロール深度レポート / GA4 → エンゲージメント率", body: "ページに到達して最初の画面（ファーストビュー）だけを見て離脱したユーザーの割合です。この数値が高い場合はキャッチコピー・デザイン・ページ読み込み速度に課題があります。" },
                { kpi: "スクロール深度", where: "Microsoft Clarity → スクロール深度 / GA4 → スクロールイベント", body: "ページのどこまでスクロールされているかを計測します。CTAセクションまで到達しているユーザー数と、そこからの離脱率を分析することで、コンテンツ配置の改善ポイントを特定できます。" },
                { kpi: "CTAクリック率", where: "GA4 → イベント → button_click（GTMで設定）", body: "問い合わせボタン・申込ボタンのクリック数とクリック率を計測します。複数CTAを設置している場合は配置別のクリック率を比較し、最も効果的な場所・文言を特定してA/Bテストの仮説を立てます。" },
                { kpi: "広告ROAS（広告連携時）", where: "Google広告 / Meta広告 管理画面 → コンバージョン → ROAS", body: "広告経由のCVに対して広告費の何倍の売上が発生しているかを示す指標です。サービスサイト・LPのCVRが上がれば同じ広告費でもROASが改善します。CVRとROASをセットで追跡します。" },
                { kpi: "月間問い合わせ数", where: "GA4 コンバージョン + CRMツール（HubSpot等）の月次集計", body: "月間の実際の問い合わせ件数をCRMまたはフォームの送信数で集計します。セッション数の増減・CV率の変化と合わせて分析することで、集客改善とCVR改善のどちらを優先すべきかを判断できます。" },
                { kpi: "問い合わせの商談転換率", where: "CRM（HubSpot / Salesforce等）→ パイプライン管理", body: "問い合わせから実際の商談・見積もり対応に進んだ割合です。CVR向上だけでなく問い合わせ品質（適切なターゲットからの問い合わせ）も重要です。この指標が低い場合はターゲット設定・訴求内容の見直しが必要です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] mb-2" style={{ color: "#9CA3AF" }}>{item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* CV重視の設計要素 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Conversion Design</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              コンバージョンを高めるサービスサイト設計
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl">
              {[
                { title: "ファーストビューの価値提案", body: "ユーザーがページに来た最初の3秒で「これは自分に関係ある」と感じさせることが最重要です。キャッチコピー・サブコピー・CTA・ビジュアルでサービスの価値を瞬時に伝えます。" },
                { title: "社会的証明の配置", body: "実際のお客様の声・事例・数字・メディア掲載・資格・受賞などの信頼要素を適切な場所に配置します。「他の人も使っている」という安心感がCVRを高めます。" },
                { title: "FAQ（不安解消）セクション", body: "「本当に効果があるの？」「費用はいくら？」「解約できる？」など、ユーザーが持ちがちな不安を先回りして解消するFAQを充実させます。FAQはSEOとAIOにも貢献します。" },
                { title: "CTA（行動喚起）の最適化", body: "CTA（問い合わせ・申し込み・資料請求ボタン）の文言・色・配置・サイズを最適化します。「無料相談はこちら」より「今すぐ無料で相談する」の方が行動を促す表現として効果的です。" },
                { title: "フォームの最適化", body: "入力項目の最小化（名前・メール・内容の3項目が理想）・確認画面の廃止・エラーメッセージの改善・完了ページへのGAイベント設定でフォームの離脱率を下げます。" },
                { title: "ヒートマップ・計測の設計", body: "Microsoftの無料ヒートマップ（Clarity）やGA4のイベント計測を設置し、ユーザーの行動データをもとに継続的なCV改善を行えるデータ計測体制を構築します。" },
              ].map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid #E8E4DC" }} className="pt-6">
                  <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスのサービスサイト制作の強み */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Why Cypress</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのサービスサイト・LP制作が選ばれる理由
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl">
              {[
                { title: "戦略設計からデザイン・実装まで一貫対応", body: "サービス定義・競合分析・CVシナリオ設計・コピーライティング・デザイン・実装・計測設定まで、サービスサイト制作のすべてのプロセスを一社で担当します。複数の業者に分割発注するよりも意図が一貫し、コスト・品質・スピードのすべてで優位です。" },
                { title: "コピーライティングが強い", body: "デザイン会社の多くがコピーライティングを苦手としています。サイプレスではサービスの強み・ターゲットの課題・競合との差別化を深くヒアリングし、SEO・ブランド・CVを同時に考慮した言語化を行います。刺さるコピーがCVRを根本的に変えます。" },
                { title: "GA4・GTM・ヒートマップの計測設計", body: "CVRの改善はデータがなければできません。公開時点でGA4のコンバージョンイベント設定・GTMタグ管理・Microsoft Clarityのヒートマップ設置まで対応します。公開後すぐに改善サイクルを回せる計測体制を構築します。" },
                { title: "広告着地LPの設計実績", body: "Google広告・Meta広告・LINE広告の着地先LPは、広告クリエイティブとのメッセージマッチが最重要です。広告運用の観点を持ったLPデザインと、コンバージョントラッキングの正確な設定により、広告のROAS改善に直結するLP制作を提供します。" },
                { title: "公開後のA/Bテスト・継続改善", body: "サービスサイトは公開が終点ではなくスタートです。ヒートマップ・GA4データを毎月分析し、CTAボタン文言・ファーストビュー・FAQ内容の改善を継続して行う月次改善サポートに対応します。CVRは継続的な改善によって積み上がります。" },
                { title: "モバイルファーストの完全最適化", body: "スマートフォンでの表示・操作性を最優先した設計を採用します。タップしやすいCTAボタンサイズ・入力しやすいフォーム・高速なページ表示・モバイルでの視線誘導設計により、スマートフォンユーザーのCV機会を最大化します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-7" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="md:col-span-2" style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* サービスサイト制作の料金目安 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Pricing Guide</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サービスサイト・LP制作の料金目安
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-8">
              {[
                { plan: "シンプルLP", range: "30〜60万円", items: ["1ページLP制作", "コピーライティング", "GA4・ヒートマップ設置", "CTAフォーム設計", "スマートフォン最適化"] },
                { plan: "サービスサイト", range: "80〜150万円", items: ["5〜10ページ構成", "競合分析・CVシナリオ設計", "デザイン・実装一式", "GTMコンバージョン設定", "公開後改善1ヶ月サポート"] },
                { plan: "本格CVサイト", range: "150〜300万円", items: ["SEO統合サービスサイト", "CMS構築・運用設計", "A/Bテスト体制構築", "広告LP複数制作", "継続改善サポート付き"] },
              ].map((item, i) => (
                <div key={i} style={{ border: "1px solid #E8E4DC", padding: "28px" }}>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: "#9CA3AF" }}>{item.plan}</p>
                  <p className="font-black text-[22px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.range}</p>
                  <ul className="space-y-2">
                    {item.items.map((li, j) => (
                      <li key={j} className="flex gap-2 text-[13px]" style={{ color: "#374151" }}>
                        <span style={{ color: "#c4b89a" }}>→</span>{li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px]" style={{ color: "#9CA3AF" }}>※ページ数・機能・対応範囲によって変動します。詳細はお見積りにてご案内します。</p>
          </div>
        </section>

        {/* サービスサイトのCV設計チェックポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>CV Design Checklist</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サービスサイトのCV設計チェックポイント
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "ファーストビューにキャッチコピー・サブコピー・CTAボタンの3点が揃っている",
                "ターゲットが「自分のことだ」と気づける課題・悩みの言語化がある",
                "サービスのベネフィット（利用後の状態変化）が具体的に説明されている",
                "料金・プランの目安または考え方が明示されている",
                "実績・事例・お客様の声など社会的証明が3つ以上ある",
                "FAQが10項目以上あり、購入前の主な不安を網羅している",
                "CTAボタンがページ内に3箇所以上（FV・中間・フッター）配置されている",
                "フォームの入力項目が最小化され、確認画面がないか1ステップで送信できる",
                "GA4のコンバージョンイベントとヒートマップが設置済みである",
                "スマートフォンでのCTAボタンがタップしやすいサイズ・位置に配置されている",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 py-5" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="shrink-0 font-bold text-[15px]" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="サービスサイト・LP制作についてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="サービスサイト・LP制作のご相談"
          body="問い合わせ・申し込みを増やすCV重視のサービスサイト・LP設計をご支援します。"
        />
      </main>
      <Footer />
    </>
  );
}
