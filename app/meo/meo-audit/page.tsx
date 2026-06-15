import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO診断・監査サービス｜Googleマップ対策の現状診断｜株式会社サイプレス",
  description: "GBP全項目・競合状況・順位・口コミを体系的に診断するMEO監査。Googleマップ集客の課題を特定し、優先度の高い改善アクションをご提案します。",
  keywords: ["MEO診断", "MEO監査", "GBP 診断", "Googleマップ 現状分析", "MEO現状確認", "GBPスコア"],
  openGraph: {
    title: "MEO診断・監査サービス｜Googleマップ対策の現状診断｜株式会社サイプレス",
    description: "GBP全項目・競合状況・順位・口コミを体系的に診断するMEO監査。Googleマップ集客の課題を特定し、優先度の高い改善アクションをご提案します。",
    images: [{ url: "/ChatGPT Image 2026年6月14日 21_08_58 (6).png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/meo/meo-audit" },
};

const faqItems = [
  {
    q: "MEO監査はどのくらいの頻度で行うべきですか？",
    a: "初回は現状把握として必ず実施し、その後は半年に1回程度の定期監査が推奨されます。競合が強い業種・エリアや、順位が急落した場合は即時監査を行います。",
  },
  {
    q: "MEO監査で何がわかりますか？",
    a: "GBP情報の完全性・写真の充実度・投稿頻度・口コミ数と評価・競合との差分・キーワードごとの順位・NAP統一状況などが明らかになります。改善すべき項目を優先順位付きで特定できます。",
  },
  {
    q: "MEO監査は自分でできますか？",
    a: "Googleビジネスプロフィールの管理画面や地図検索での確認など、基本的な項目は自分で確認できます。競合分析・順位調査・NAP統一確認など詳細な診断は専門ツールと知識が必要です。",
  },
  {
    q: "MEO監査の後、どのくらいで改善効果が出ますか？",
    a: "GBP情報の充実・写真追加・投稿開始などの基本改善は1〜3ヶ月で効果が出ることが多いです。口コミ増加による順位向上は継続的な取り組みが必要で、3〜6ヶ月が目安です。",
  },
  {
    q: "GBPのオーナー確認ができていない場合も監査できますか？",
    a: "オーナー確認なしでも地図上での表示状況や口コミ状況は外部から確認できます。ただし投稿・情報更新・インサイトデータの確認にはオーナー確認が必要です。",
  },
  {
    q: "MEO監査レポートにはどんな内容が含まれますか？",
    a: "GBP完全性チェック・NAP統一状況・写真・投稿・口コミ分析・競合比較・キーワード別順位・改善優先順位リストが含まれます。数値化されたスコアと具体的な改善アクションをセットで提示します。",
  },
  {
    q: "競合他社との比較はどのように行いますか？",
    a: "同じキーワードでローカルパックに表示される競合のGBPを対象に、口コミ数・平均評価・写真枚数・投稿頻度・カテゴリ設定・ウェブサイトの質を数値化して比較します。自社が劣っている項目を一覧化します。",
  },
  {
    q: "MEO監査だけで依頼できますか？",
    a: "はい、監査単体でのご依頼も承っています。監査後に継続的な改善対応が必要と判断された場合は、MEO対策サービスへの移行もご提案できます。まず現状を知ることから始めたい方にも対応しています。",
  },
  {
    q: "NAP統一とは具体的にどういうことですか？",
    a: "NAP（Name・Address・Phone）とはビジネス名・住所・電話番号の3つです。GBP・自社サイト・食べログ・ホットペッパー・じゃらん・各SNSなど全媒体でこれらの表記が一字一句一致していることを指します。表記の揺れはGoogleの信頼性評価を下げます。",
  },
  {
    q: "監査の結果、どのくらいの期間で改善ロードマップが完成しますか？",
    a: "診断開始から通常5〜10営業日でレポートをご提出します。内容確認の打ち合わせ後、優先順位付きの改善ロードマップを共有します。緊急性の高い項目はレポート提出前に口頭でご報告することも可能です。",
  },
  {
    q: "GBPの完全性スコアとはなんですか？",
    a: "GBPに入力できる全項目（ビジネス名・住所・電話番号・URL・説明文・カテゴリ・属性・サービス・写真・営業時間など）のうち、何%が適切に入力されているかを示す独自スコアです。スコアが低いほどGoogleの関連性評価が下がるリスクがあります。",
  },
  {
    q: "古いビジネスプロフィールでも監査の効果はありますか？",
    a: "はい、むしろ長期間放置されたGBPほど問題点が蓄積しており、監査による改善余地が大きいケースが多いです。古いURLや移転前の住所・閉店した電話番号など、情報の鮮度を回復することで順位改善につながります。",
  },
  {
    q: "複数店舗の監査に対応していますか？",
    a: "はい、チェーン店や複数店舗を持つビジネスの一括監査にも対応しています。店舗ごとに診断を行い、共通課題と個別課題を整理して優先改善アクションを提示します。",
  },
  {
    q: "MEO監査で口コミ分析も行いますか？",
    a: "はい、口コミの総数・平均評価・最新口コミの日付・オーナー返信率・ネガティブ口コミへの対応状況を確認します。また競合との口コミ数比較も行い、どの程度の口コミ獲得が必要かを数値で示します。",
  },
  {
    q: "監査で発見した問題は自分で修正できますか？",
    a: "GBP情報の更新・写真追加・投稿開始など多くの項目はオーナー自身で対応可能です。NAP統一（外部ディレクトリの修正）・LocalBusinessスキーマ実装・エリアページ制作など技術的な改善は専門知識が必要な場合があります。",
  },
  {
    q: "GBPの属性設定も監査の対象になりますか？",
    a: "はい、業種ごとに設定できる属性（駐車場・Wi-Fi・バリアフリー・支払方法など）が適切に設定されているかを確認します。設定漏れがあると、該当条件で絞り込み検索をしたユーザーに表示されない機会損失が発生します。",
  },
  {
    q: "ウェブサイトとGBPの連携状況も確認できますか？",
    a: "はい、GBPに登録されているウェブサイトURLの正確性・LocalBusinessスキーマの実装有無・ウェブサイト内のNAP記載・Googleマップ埋め込みの有無などを確認します。連携状況はMEOのドメイン評価にも影響します。",
  },
  {
    q: "MEO監査と通常のSEO監査は何が違いますか？",
    a: "SEO監査はウェブサイトの技術的な問題・コンテンツ品質・バックリンクなどオーガニック検索を対象にします。MEO監査はGoogleビジネスプロフィールのローカル検索最適化を対象とし、GBPの完全性・口コミ・NAP統一・競合比較が中心になります。",
  },
  {
    q: "MEO対策の効果をどうやって測ればいいですか？",
    a: "GBPインサイトで表示回数・クリック数・電話タップ数・ルートタップ数を月次で記録します。加えてGoogleアナリティクスでGBPからのウェブサイト流入を確認し、순위 変動をPlePer等で追跡します。これらを監査時に計測しておくことで施策効果の比較基準が作れます。",
  },
  {
    q: "MEO監査後の継続サポートはありますか？",
    a: "はい、監査レポート納品後に月次MEO管理サービスへ移行いただくことができます。改善ロードマップに基づいた施策の実施・投稿管理・口コミ対応・月次レポートを継続的に支援します。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEO対策の基礎と全体戦略" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "サービス内容と料金詳細" },
  { href: "/meo/google-business-profile", label: "GBP最適化", desc: "GBP設定の最適化手順" },
  { href: "/meo/ranking", label: "MEO順位改善", desc: "ローカルパック上位表示の方法" },
  { href: "/meo/map-ranking", label: "マップ上位表示", desc: "ローカルパック対策の詳細" },
  { href: "/meo/review-management", label: "口コミ対策", desc: "口コミ獲得・返信管理" },
  { href: "/meo/photo-posting", label: "写真投稿対策", desc: "GBP写真の最適化と運用" },
  { href: "/meo/local-keyword", label: "ローカルキーワード", desc: "地域キーワード選定と対策" },
  { href: "/meo/nap", label: "NAP統一対策", desc: "名称・住所・電話番号の整合性" },
  { href: "/meo/gbp-posting", label: "GBP投稿運用", desc: "効果的な投稿戦略と頻度" },
  { href: "/meo/competitor-analysis", label: "競合MEO分析", desc: "競合と差をつける分析手法" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "MEOと連動するSEO施策" },
  { href: "/seo", label: "SEO対策とは", desc: "検索エンジン最適化の基礎" },
  { href: "/seo/local-seo", label: "ローカルSEO", desc: "地域ビジネスのSEO戦略" },
  { href: "/seo/schema-markup", label: "構造化データ実装", desc: "LocalBusinessスキーマの設定" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索への最適化対策" },
  { href: "/industry/restaurant", label: "飲食店のMEO対策", desc: "飲食業界の特化施策" },
  { href: "/industry/beauty", label: "美容室・サロンのMEO", desc: "美容業界の集客施策" },
  { href: "/industry/dental", label: "歯科医院のMEO対策", desc: "歯科クリニックの集客" },
  { href: "/industry/clinic", label: "クリニックのMEO対策", desc: "医療機関の地域集客" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京エリアの競合と施策" },
  { href: "/area/osaka", label: "大阪のMEO対策", desc: "大阪エリアの競合と施策" },
  { href: "/blog/meo", label: "MEO対策コラム", desc: "最新情報と実践ノウハウ" },
  { href: "/contact", label: "無料相談・お問い合わせ", desc: "MEO診断の依頼はこちら" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:underline" style={{ color: "#6B7280" }}>ホーム</Link>
              <span>/</span>
              <Link href="/meo" className="hover:underline" style={{ color: "#6B7280" }}>MEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>MEO診断・監査</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              MEO Audit
            </p>
            <h1 className="font-black text-[40px] md:text-[52px] leading-tight tracking-tight mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              MEO診断・監査
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEO対策を始める前に、現状のGoogleビジネスプロフィール・競合状況・検索順位を体系的に診断します。
              問題点を把握してから施策に着手することで、効果的な改善が可能になります。
            </p>
            <p className="text-[16px] leading-[1.9] max-w-2xl mt-4" style={{ color: "#374151" }}>
              「なぜ順位が上がらないのかわからない」「競合と何が違うのか見えない」——そうした疑問に対し、
              GBP全項目・写真・口コミ・投稿・競合比較・NAP整合性を網羅した診断レポートで、
              優先度の高い改善アクションを明確にします。
            </p>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="MEO診断・現状診断サービス" fill sizes="100vw" className="object-cover" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(16px,2.5vw,26px)", letterSpacing: "0.05em", textAlign: "center" }}>
              課題を見える化し、最短で改善へ
            </p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What You Will Learn
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "MEO監査とは何か・どの項目を診断対象にするかの全体像",
                "GBP完全性スコアの考え方と診断で明らかになる課題の種類",
                "競合との比較分析を通じて自社の改善余地を特定する方法",
                "NAP統一度・写真・投稿・口コミなど各項目の診断ポイントと改善方向",
                "業種別（飲食・美容・医療・建設など）の監査で重視すべき指標の違い",
                "監査から改善ロードマップ作成までの10ステップとKPI一覧",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-bold text-[15px] shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 診断なし施策のリスク */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Without Audit
            </p>
            <h2 className="font-black text-[28px] mb-10" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              MEO診断なしで施策を打つと起きる4つのムダ
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { t: "効かない施策に時間と費用を使う", b: "現状把握なしに「口コミを増やせばいい」「写真を増やせばいい」という思い込みで動いても、根本原因が別の場所にある場合は効果がありません。診断で優先課題を特定することが最初のステップです。" },
                { t: "競合に勝てる領域が見えない", b: "自社GBPの弱点と競合の強みを比較しなければ、どこで勝負すべきかがわかりません。診断では競合と自社の比較を行い、差別化の余地がある施策を特定します。" },
                { t: "改善の優先順位がわからない", b: "MEO対策には多くの施策がありますが、すべてを同時に対応することはできません。インパクトが大きく取り組みやすい施策から優先して実施するための優先順位付けに診断が必要です。" },
                { t: "成果が測れず改善サイクルが回らない", b: "現状数値（インプレッション・クリック・経路案内リクエスト数）を把握していないと施策の効果も測れません。診断で現在値を計測することがPDCAの出発点です。" },
              ].map((item, i) => (
                <div key={i} className="p-6" style={{ border: "1px solid rgba(196,184,154,0.25)" }}>
                  <p className="font-bold text-[15px] mb-3" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>{item.t}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.75)" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEO診断の対象項目 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Audit Items
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              MEO診断の対象項目
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              サイプレスのMEO監査では、以下の項目を体系的にチェックします。
              すべての項目をスコア化し、改善インパクトの大きさと実施の容易さで優先度を決定します。
            </p>
            <div className="max-w-3xl">
              {[
                { n: "01", t: "GBP基本情報の完全性", b: "店舗名・住所・電話番号・営業時間・カテゴリ・ウェブサイトURL・説明文がすべて正確に記載されているかを確認します。空欄があるほどGoogleの評価は下がります。" },
                { n: "02", t: "GBP写真の数・品質・更新状況", b: "外観・内装・商品・スタッフ・ロゴ・カバーの各カテゴリに高品質な写真が揃っているか、最近更新されているかを確認します。写真が少ないと競合に比べて不利になります。" },
                { n: "03", t: "投稿（最新情報）の更新頻度", b: "Google投稿の更新頻度を確認します。週1回以上の投稿があるかどうかは、Googleがそのビジネスをアクティブと判断する重要な指標です。" },
                { n: "04", t: "口コミ数・平均評価・返信状況", b: "口コミの総数・平均評価（星）・最新口コミの日付・オーナー返信率を確認します。返信していない口コミが多い場合は改善が必要です。" },
                { n: "05", t: "競合のMEO状況との差分", b: "同じエリア・業種の競合がGBPをどう設定しているか比較します。写真数・口コミ数・投稿頻度・カテゴリ設定で自社が劣っている項目を特定します。" },
                { n: "06", t: "キーワードごとの順位確認", b: "「[業種]」「[地域名]+[業種]」「[サービス名]+[地域名]」など主要キーワードでのローカルパック（地図3枠）表示順位を確認します。" },
                { n: "07", t: "NAP情報の統一状況", b: "GBP・自社サイト・各SNS・外部サービスで店舗名・住所・電話番号が一致しているかを確認します。不一致はGoogleの信頼性評価を下げます。" },
                { n: "08", t: "ウェブサイトとの連携状況", b: "GBPのウェブサイトURLが正しく設定されているか、ウェブサイト側にLocalBusinessスキーマが実装されているかを確認します。" },
                { n: "09", t: "Q&A・サービス・商品情報の充実度", b: "GBPのQ&A機能・サービス一覧・商品情報が設定されているかを確認します。これらを充実させることで検索結果でのリッチな表示が可能になります。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Common Problems
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO監査を行う前のビジネスに共通して見られる課題パターンです。
              当てはまるものが多いほど、監査による改善余地が大きいサインです。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  title: "監査をしたことがない",
                  body: "GBPを設定したまま「なんとなく運用している」状態は最も多いケースです。何が足りないのかが分からないまま月日が経ち、競合に差をつけられていることに気づかないまま機会損失が続きます。",
                },
                {
                  title: "競合との差が不明",
                  body: "自社だけを見ていても、競合が上位表示されている理由は分かりません。口コミ数・写真枚数・投稿頻度・カテゴリ設定のどこで差がついているのかを競合比較によって初めて把握できます。",
                },
                {
                  title: "何から改善すべきか分からない",
                  body: "MEO対策には多くの施策が存在するため、何を優先すればよいか判断できずに手が止まるケースが多くあります。監査によってインパクトの大きい項目から優先順位を付けることが改善の起点になります。",
                },
                {
                  title: "GBPの完全性スコア未確認",
                  body: "GBPに入力できるすべての項目のうち何%が埋まっているかを把握していないビジネスは非常に多いです。属性・サービス情報・Q&Aなど、見落としがちな項目が空欄のままになっていることが多くあります。",
                },
                {
                  title: "NAP統一度未チェック",
                  body: "GBP・自社サイト・食べログ・ホットペッパーなど複数媒体のNAPが一致しているかを確認したことがないケースがほとんどです。住所の番地表記・店舗名の略称使用などが混在していると信頼性評価が下がります。",
                },
                {
                  title: "写真枚数・品質の把握なし",
                  body: "GBPに登録されている写真が何枚あるか・最後に更新したのがいつかを把握していないビジネスは多いです。競合が50枚以上掲載している中で5枚以下という状況が生まれていることもあります。",
                },
                {
                  title: "口コミ分析未実施",
                  body: "口コミの件数・評価分布・低評価口コミの内容・返信率などを定期的に分析していない場合、問題が積み重なっていても気づけません。特にネガティブ口コミへの未返信は放置されるほど影響が広がります。",
                },
                {
                  title: "投稿頻度の記録なし",
                  body: "直近3ヶ月間に何回投稿したかを把握していない場合、投稿が滞っていても認識できません。投稿停止はGoogleのアクティビティ評価を下げ、順位低下につながるリスクがあります。",
                },
                {
                  title: "属性設定の漏れ確認なし",
                  body: "業種ごとに設定できる属性（「テイクアウト可」「宅配あり」「個室あり」など）の設定状況を一度も確認していないケースがあります。設定漏れは絞り込み検索での表示機会を失うことを意味します。",
                },
                {
                  title: "定期的な見直しがない",
                  body: "Googleのアルゴリズムは定期的に更新され、競合の動向も変化します。一度最適化しても放置し続けると、いつの間にか競合に追い越されます。半年に一度の定期監査が継続的な順位維持に有効です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</h3>
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              By Industry
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO監査は業種によって重点的に確認する項目が異なります。
              自社の業種に合わせた診断観点を把握しておくことで、改善の優先度を正確に設定できます。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  industry: "飲食店",
                  point: "メニュー情報・料理写真の充実度・営業時間の正確性・予約連携（Googleフードオーダー）の設定状況を重点チェックします。テイクアウト・デリバリー属性の設定漏れがないかも確認します。",
                },
                {
                  industry: "美容サロン",
                  point: "施術メニューとGBPサービス欄の一致・スタイリスト写真の有無・予約システムとの「今すぐ予約」ボタン連携を確認します。口コミ返信率とビフォーアフター写真の定期追加状況も重要な診断ポイントです。",
                },
                {
                  industry: "医療機関",
                  point: "診療科目カテゴリの正確性・オンライン予約連携・バリアフリー属性・駐車場有無の設定を確認します。医療広告ガイドラインに抵触する表現がGBP説明文や口コミ返信に含まれていないかもチェックします。",
                },
                {
                  industry: "建設業",
                  point: "施工対応エリアのサービスエリア設定・施工事例写真の充実度・取り扱い工事種別のカテゴリ・サービス欄への記載を確認します。実績・資格情報の記載が信頼性向上に直結する業種です。",
                },
                {
                  industry: "士業",
                  point: "専門分野（家族法・相続・労務など）のカテゴリ設定精度・無料相談への予約導線・対応エリアの明記を確認します。専門性を示すコンテンツ（投稿・Q&A）の有無が信頼性評価に大きく影響します。",
                },
                {
                  industry: "小売店",
                  point: "商品情報の登録状況・在庫や新商品の投稿更新頻度・クレジットカード可などの支払方法属性を確認します。Googleショッピングとの連携状況や営業時間・祝日の特別営業時間設定も重点的にチェックします。",
                },
                {
                  industry: "学習塾",
                  point: "対応学年・指導科目・授業形式（個別・集団）のサービス欄への記載・入試シーズンに合わせた投稿更新状況を確認します。保護者向けの口コミ獲得導線と返信対応の品質が差別化のポイントになります。",
                },
                {
                  industry: "サービス業",
                  point: "サービス内容のGBPへの詳細記載・出張・訪問対応の有無とエリア設定・ウェブサイトとの予約・見積もり導線の連携を確認します。業種によって有効な属性が異なるため、設定可能な属性の網羅的チェックが重要です。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.point}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: 実装・改善フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Audit Flow
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              実装・改善フロー
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO監査から改善ロードマップ作成までの10ステップです。
              この手順で進めることで、見落としなく体系的な診断が実現できます。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  step: "基本情報チェック",
                  detail: "GBPに入力されているビジネス名・住所・電話番号・カテゴリ・説明文・営業時間・ウェブサイトURLをすべて確認します。空欄項目と不正確な情報をリストアップし、修正すべき箇所を特定します。",
                },
                {
                  step: "カテゴリ・属性確認",
                  detail: "主カテゴリ・副カテゴリが自社のビジネスを正確に表しているかを確認します。業種に応じて設定可能な属性（駐車場・Wi-Fi・バリアフリー・支払方法等）のうち設定漏れがないかをすべてチェックします。",
                },
                {
                  step: "NAP一致確認",
                  detail: "GBP・自社サイト・食べログ・ホットペッパー・SNS・業界サイトなど主要媒体でビジネス名・住所・電話番号の表記を照合します。表記の揺れ・旧情報・番地形式の不一致を一覧化して修正優先度を設定します。",
                },
                {
                  step: "写真・動画確認",
                  detail: "現在登録されている写真の総枚数・カテゴリ別の内訳・最終更新日・画質を確認します。競合の写真枚数と比較し、追加が必要な写真カテゴリと目標枚数を決定します。",
                },
                {
                  step: "口コミ分析",
                  detail: "口コミの総数・平均評価・評価分布・最新口コミの日付・オーナー返信率・未返信口コミの有無を確認します。ネガティブ口コミの内容を分析し、改善すべき業務課題とGBP上での対応策を検討します。",
                },
                {
                  step: "投稿頻度確認",
                  detail: "直近3〜6ヶ月間のGoogle投稿の頻度・内容・エンゲージメントを確認します。投稿が停止している期間・投稿内容のキーワード含有率・季節イベントへの対応状況を評価します。",
                },
                {
                  step: "ウェブサイト連携確認",
                  detail: "GBPに登録されているURLのページが正常に機能しているか・LocalBusinessスキーマが実装されているか・サイト内にGoogleマップが埋め込まれているか・NAPがサイトに正しく記載されているかを確認します。",
                },
                {
                  step: "競合比較",
                  detail: "主要キーワードでローカルパックに表示される競合3〜5社のGBPを分析します。口コミ数・平均評価・写真枚数・投稿頻度・カテゴリ・ウェブサイトの質を自社と数値で比較し、差がある項目を特定します。",
                },
                {
                  step: "優先課題抽出",
                  detail: "診断結果からインパクトが大きい（順位向上への貢献度が高い）かつ実施が容易な項目を優先課題として抽出します。改善効果の大・中・小と工数の大・中・小をマトリクスで整理します。",
                },
                {
                  step: "改善ロードマップ作成",
                  detail: "優先課題を時系列に並べた改善ロードマップを作成します。即日対応・1ヶ月以内・3ヶ月以内・6ヶ月以内の4フェーズに分類し、担当者・期限・期待効果を明示した実行計画として仕上げます。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.step}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
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
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              KPI Metrics
            </p>
            <h2 className="font-black text-[28px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-10" style={{ color: "#374151" }}>
              MEO監査の効果を定量的に評価するために、診断時点と改善後の比較に使うKPIを整理しました。
              監査時にこれらの数値を記録しておくことがPDCAの起点になります。
            </p>
            <div className="max-w-3xl">
              {[
                {
                  kpi: "GBP完全性スコア",
                  detail: "GBPに入力できる全項目のうち何%が適切に入力されているかを示すスコアです。診断ツールまたは手動チェックリストで計測します。100%を目標に空欄項目を埋めていきます。",
                },
                {
                  kpi: "NAP一致率",
                  detail: "主要媒体（GBP・自社サイト・食べログ等）でNAPが完全一致している媒体の割合です。不一致が多いほどGoogleの信頼性評価が下がります。修正対象媒体を一覧化して管理します。",
                },
                {
                  kpi: "写真枚数",
                  detail: "GBPに登録されている写真の総枚数です。GBPインサイトまたは管理画面で確認します。競合の枚数と比較し、目標枚数を設定します。月次で追加枚数を記録します。",
                },
                {
                  kpi: "口コミ平均評価",
                  detail: "Googleマップに表示される星1〜5の平均評価です。GBP管理画面で確認します。平均4.0以上の維持を目標とし、月次の変動と新規口コミの内容を記録します。",
                },
                {
                  kpi: "投稿更新頻度",
                  detail: "直近1ヶ月・3ヶ月の投稿回数を記録します。GBP管理画面の投稿履歴で確認します。週1回以上を目標頻度として、実績値と比較することで継続性を評価します。",
                },
                {
                  kpi: "競合比較スコア差",
                  detail: "主要な診断項目（口コミ数・写真枚数・投稿頻度・GBP完全性）で自社と競合上位3社をスコア化し、差を数値で把握します。改善施策の優先度決定に活用します。",
                },
                {
                  kpi: "改善実施率",
                  detail: "監査で洗い出した改善タスクのうち、実際に対応完了したタスクの割合です。ロードマップのタスク管理表で追跡します。定期監査（半年後）までの改善実施率を目標設定します。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-[16px] mb-2" style={{ color: "#0d1b2a" }}>{item.kpi}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 診断から始めることが重要な理由 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  Why It Matters
                </p>
                <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
                  診断から始めることが重要な理由
                </h2>
                <div className="space-y-4">
                  {[
                    { n: "01", t: "原因不明のまま施策を打っても効果が出ない", b: "口コミを増やしても順位が上がらない場合、NAP不統一・カテゴリ誤設定などの根本問題が残っている可能性があります。" },
                    { n: "02", t: "競合が何をしているか把握できる", b: "競合の写真数・口コミ数・投稿頻度を把握することで、最短で追い越すための優先施策が明確になります。" },
                    { n: "03", t: "限られたリソースを集中投下できる", b: "診断によって最も効果が出る項目に絞って対応することで、少ない工数で最大の改善効果が得られます。" },
                  ].map((item) => (
                    <div key={item.n} className="flex gap-4">
                      <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                      <div>
                        <p className="font-bold text-[14px] mb-1" style={{ color: "#0d1b2a" }}>{item.t}</p>
                        <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 text-[14px] font-semibold tracking-wide"
                    style={{ background: "#0F172A", color: "#FFFFFF" }}
                  >
                    MEO診断を依頼する
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden" style={{ height: "400px" }}>
                <Image src="/ChatGPT Image 2026年6月14日 21_08_58 (6).png" alt="MEO診断レポートと改善フロー" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO診断・監査に関するよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="MEO診断のご依頼はサイプレスへ"
          body="現在のGoogleビジネスプロフィールと競合状況を診断し、改善すべき項目を優先順位付きでご報告します。Googleマップでの集客を改善したい方はお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
