import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO対策サービス｜Googleマップ上位表示・地域集客の強化｜株式会社サイプレス",
  description:
    "株式会社サイプレスのMEO対策サービス。Googleビジネスプロフィールの最適化・口コミ管理・写真戦略・投稿活用で地域ビジネスの集客を強化。東京都葛飾区を拠点に全国対応。",
  keywords: ["MEO対策サービス", "Googleマップ上位表示", "Googleビジネスプロフィール", "地域集客", "MEO会社", "東京 MEO"],
  openGraph: {
    title: "MEO対策サービス｜Googleマップ上位表示・地域集客の強化｜株式会社サイプレス",
    description: "サイプレスのMEO対策サービス。Googleビジネスプロフィール最適化から口コミ管理まで一貫支援。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/meo" },
};

const faqItems = [
  {
    q: "MEO対策の効果はどのくらいで出ますか？",
    a: "Googleビジネスプロフィールの基本情報を整備し、写真・投稿の更新を継続することで、早ければ1〜2ヶ月でGoogleマップの表示順位が改善するケースがあります。ただし、競合が多いエリア・業種では3〜6ヶ月かかることもあります。口コミ件数の増加が重要な要因の一つです。",
  },
  {
    q: "Googleビジネスプロフィールの管理を代行してもらえますか？",
    a: "はい、Googleビジネスプロフィールの設定代行・月次更新（写真・投稿）・口コミへの返信支援・インサイトデータの分析レポートを代行します。自社スタッフが対応する時間が取れない方に特に適したプランです。",
  },
  {
    q: "口コミを増やす方法を教えてもらえますか？",
    a: "はい、口コミを自然に増やすための導線設計（Googleレビューへの誘導QRコード・SMS・LINEでの依頼文案）の作成支援を行います。なお、偽の口コミの投稿・報酬を渡しての口コミ依頼はGoogleポリシー違反のため対応しておりません。",
  },
  {
    q: "悪い口コミへの対応もサポートしてもらえますか？",
    a: "はい。悪い口コミへの返信文案の作成支援を行います。また、Googleのポリシーに違反していると判断できる口コミについては、Googleへの報告・削除申請の支援も行います。根拠のある口コミへの誠実な返信がブランド信頼性の向上につながります。",
  },
  {
    q: "MEO対策とSEO対策は同時に依頼できますか？",
    a: "はい、MEO対策とSEO対策を一括でご支援しています。地域ビジネスの場合、GoogleマップのMEOとWebサイトのローカルSEOを同時に最適化することで、地域名検索での露出を最大化できます。セットプランの方が費用対効果が高まります。",
  },
  {
    q: "飲食店・美容室でもMEO対策は有効ですか？",
    a: "はい、特に飲食店・美容室・整体・クリニック・リフォーム会社など「地域の人が近くで探す業種」に最も効果的です。「近くの〇〇」「〇〇区 〇〇」という検索で来店数を増やしたい業種全般にMEO対策は有効です。",
  },
  {
    q: "Googleビジネスプロフィールのオーナー権限がない場合は？",
    a: "まずはGoogleビジネスプロフィールのオーナー確認（Googleへの申請）を行う必要があります。サイプレスではオーナー確認の手順サポートも行います。既にオーナー確認が完了している場合はすぐに施策を開始できます。",
  },
  {
    q: "月次レポートはどのような内容ですか？",
    a: "Googleビジネスプロフィールのインサイトデータ（検索表示回数・ルート検索数・電話タップ数・Webサイトクリック数）をもとに毎月のパフォーマンスをレポートします。競合との比較分析と翌月の施策方針もあわせてご報告します。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "Webサイトのローカルパック対策" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金プランと相場" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール最適化", desc: "プロフィール設定の詳細" },
  { href: "/meo/review-strategy", label: "口コミ獲得戦略", desc: "自然な口コミの増やし方" },
  { href: "/meo/photo-strategy", label: "MEOに効く写真戦略", desc: "写真設定のポイント" },
  { href: "/industries/restaurant", label: "飲食店のMEO対策", desc: "飲食店向け集客施策" },
  { href: "/industries/beauty", label: "美容室のMEO対策", desc: "サロン向け集客施策" },
  { href: "/area/katsushika", label: "葛飾区のMEO対策", desc: "葛飾区エリアの支援" },
  { href: "/faq/meo", label: "MEO対策FAQ", desc: "よくある質問まとめ" },
  { href: "/checklist/meo", label: "MEOチェックリスト", desc: "Googleビジネスプロフィール確認項目" },
];

export default function ServicesMeoPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>MEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>MEO Service</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              MEO対策サービス
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              株式会社サイプレスのMEO対策サービスは、Googleビジネスプロフィールの最適化・口コミ管理・写真戦略・投稿活用によって、Googleマップ上での上位表示と地域集客の強化を実現します。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-8" style={{ color: "#374151" }}>
              「近くの〇〇」「〇〇区 〇〇」という検索で来店・予約・電話問い合わせを増やしたい地域ビジネスを、データに基づいた施策で継続的にサポートします。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #0F172A", color: "#0F172A" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/meo" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="MEO対策・Googleマップ上位表示・地域集客のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.2)" }} />
        </section>

        {/* サービス内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Details</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              MEO対策サービスの内容
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "Googleビジネスプロフィールの最適化", body: "ビジネス名・カテゴリ・住所・電話番号・営業時間・ウェブサイトURL・サービス情報・属性設定を最適化します。Googleが正確にビジネス情報を理解できる状態を作ることが、ローカルパック表示の基礎です。" },
                { title: "写真・動画コンテンツの充実", body: "外観・内観・スタッフ・商品・サービスなどの写真を適切なカテゴリで整理し、定期的に追加します。写真の量と質はMEOの順位要因であり、ユーザーのクリック率・来店動機にも直結します。" },
                { title: "Googleビジネス投稿の定期更新", body: "お知らせ・イベント・特典・商品投稿を定期的に作成します。投稿の更新頻度はビジネスのアクティブ度のシグナルとなり、ローカルパックの順位に影響します。" },
                { title: "口コミ管理・返信支援", body: "口コミへの返信文案の作成支援を行います。全口コミに対して誠実な返信を行うことで、他ユーザーへの安心感と来店動機の向上につながります。悪い口コミへの対応方針もご支援します。" },
                { title: "口コミ獲得の導線設計", body: "Googleレビューへの誘導QRコード・SMS・LINE等での依頼文案の作成を支援します。お客様が口コミを投稿しやすい自然な導線を設計することで、口コミ件数の継続的な増加を目指します。" },
                { title: "Q&A・サービス欄の整備", body: "Googleビジネスプロフィールの「Q&A」「サービス」「商品」セクションを充実させます。これらの情報はGoogleの検索で表示される場合があり、検索ユーザーの意思決定を助けます。" },
                { title: "インサイト分析・月次レポート", body: "Googleビジネスプロフィールのインサイトデータ（表示回数・ルート検索数・電話タップ数・Webサイトクリック数）を毎月分析し、施策効果と翌月の方針をレポートします。" },
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

        {/* 対応業種 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Target Industries</p>
            <h2 className="font-black text-[26px] mb-8" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              MEO対策が特に効果的な業種
            </h2>
            <div className="flex flex-wrap gap-3">
              {["飲食店・カフェ・居酒屋", "美容室・ヘアサロン", "ネイルサロン", "エステ・マッサージ", "整体院・接骨院", "クリニック・歯医者", "リフォーム・工務店", "不動産会社", "学習塾・スクール", "ペットショップ", "クリーニング店", "弁護士・税理士事務所"].map((ind) => (
                <span key={ind} className="px-3 py-1.5 text-[13px] rounded" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC", color: "#374151" }}>{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* MEO対策をしないと機会損失が続く理由 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>Why It Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              MEO対策をしないと機会損失が続く理由
            </h2>
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
              {[
                {
                  title: "「近くの〇〇」検索がスマホで急増中",
                  body: "スマホ検索の多くは地域情報を含む（参考値）。Googleマップ上位に出ないと検索ユーザーに選ばれる機会が生まれない。",
                },
                {
                  title: "Googleマップは購買直前の最終確認場所",
                  body: "来店を決めたユーザーが最後に確認するのがGoogleマップのレビュー・写真・情報。ここで離脱させてはならない。",
                },
                {
                  title: "競合他社のGBPが充実していれば一方的に負ける",
                  body: "近隣の競合が口コミ・写真・情報を充実させていれば、自社は選ばれない。放置するほど差は広がる。",
                },
                {
                  title: "放置したGBPは誤情報が蓄積するリスク",
                  body: "第三者による提案変更・古い情報・未管理の口コミが信頼を損なう。定期的な管理なしにGBPは健全を保てない。",
                },
              ].map((item) => (
                <div key={item.title} className="p-6" style={{ border: "1px solid rgba(196,184,154,0.25)", background: "rgba(255,255,255,0.04)" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#FFFFFF" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Googleが評価する3つの基準 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Google Ranking Factors</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Googleが評価する3つの基準×サイプレスの施策
            </h2>
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {[
                {
                  criterion: "関連性（Relevance）",
                  body: "カテゴリ・サービス名・説明文を最適化し「何の店か」をGoogleに正確に伝える。業種・サービスキーワードを適切に設定することで、関連する検索クエリにマッチしやすくなる。",
                },
                {
                  criterion: "距離（Distance）",
                  body: "対象エリア・サービス提供エリアを正確に設定し、地域ごとの検索に対応。住所・エリア情報の整合性を保ちながら、サービス提供範囲を明確にする。",
                },
                {
                  criterion: "知名度（Prominence）",
                  body: "口コミ獲得支援・高品質写真投稿・外部リンク構築で知名度スコアを向上。口コミ件数・評価・返信率・投稿更新頻度が知名度評価に影響する。",
                },
              ].map((item) => (
                <div key={item.criterion} className="p-7" style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", borderTop: "3px solid #c4b89a" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#c4b89a", fontFamily: "var(--font-display)" }}>{item.criterion}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 月次MEO対策レポートの内容 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", fontFamily: "var(--font-display)" }}>Monthly Report</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              月次MEO対策レポートの内容
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10" style={{ color: "#374151", maxWidth: "600px" }}>
              毎月の施策結果を可視化し、次月の改善方針を明確にするレポートをご提供します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  num: "01",
                  title: "Googleビジネスプロフィール インサイト",
                  desc: "検索表示回数・電話クリック数・経路クリック数・Webサイトクリック数を月次で集計。前月比の推移とともに報告します。",
                },
                {
                  num: "02",
                  title: "競合比較（検索順位・口コミ数）",
                  desc: "主要キーワードにおける自社と競合他社の表示順位・口コミ件数・評価スコアを比較し、差分を明確にします。",
                },
                {
                  num: "03",
                  title: "口コミ件数・評価推移",
                  desc: "当月獲得口コミ数・累計件数・平均評価スコアの推移を記録。口コミへの返信状況もあわせて確認します。",
                },
                {
                  num: "04",
                  title: "翌月の改善計画",
                  desc: "インサイトデータと競合分析をもとに、翌月実施する施策の優先順位と具体的なアクションプランを提示します。",
                },
                {
                  num: "05",
                  title: "Q&Aの更新状況",
                  desc: "Googleビジネスプロフィールの「Q&A」セクションへの新規投稿・回答状況を確認し、必要に応じてコンテンツを追加します。",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-0.5" style={{ color: "#c4b89a" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-[14px] mb-1.5" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[13px] leading-[1.9]" style={{ color: "#374151" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="MEO対策サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="MEO対策サービスの無料相談"
          body="現在のGoogleビジネスプロフィールの状況を確認し、最適な施策をご提案します。"
        />
      </main>
      <Footer />
    </>
  );
}
