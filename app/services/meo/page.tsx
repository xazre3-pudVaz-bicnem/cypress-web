import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "MEO対策サービス｜Googleマップ上位表示で地域集客を最大化｜株式会社サイプレス",
  description:
    "株式会社サイプレスのMEO対策サービス。Googleビジネスプロフィールの最適化・口コミ管理・写真戦略・投稿活用でGoogleマップ上位表示と地域集客を強化。東京都葛飾区を拠点に全国対応。",
  keywords: ["MEO対策サービス", "Googleマップ上位表示", "Googleビジネスプロフィール", "地域集客", "MEO会社", "東京 MEO", "GBP最適化"],
  openGraph: {
    title: "MEO対策サービス｜Googleマップ上位表示で地域集客を最大化｜株式会社サイプレス",
    description: "サイプレスのMEO対策サービス。Googleビジネスプロフィール最適化から口コミ管理・月次レポートまで一貫支援。地域の集客基盤を整えます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/services/meo" },
};

const faqItems = [
  {
    q: "MEO対策の効果はどのくらいで出ますか？",
    a: "Googleビジネスプロフィールの基本情報を整備し、写真・投稿の更新を継続することで、早ければ1〜2ヶ月でGoogleマップの表示順位が改善するケースがあります。ただし、競合が多いエリア・業種では3〜6ヶ月かかることもあります。口コミ件数の増加も重要な要因の一つです。",
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
    a: "はい。悪い口コミへの返信文案の作成支援を行います。Googleのポリシーに違反していると判断できる口コミについては、Googleへの報告・削除申請の支援も行います。根拠のある口コミへの誠実な返信がブランド信頼性の向上につながります。",
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
  {
    q: "MEO対策とSEO対策の違いは何ですか？",
    a: "SEO対策はGoogleの通常検索結果（青色リンク一覧）でWebサイトを上位表示させる施策です。MEO対策はGoogleマップおよびローカルパック（地図と3件のビジネス情報）でGoogleビジネスプロフィールを上位表示させる施策です。対象が「Webサイト」か「Googleビジネスプロフィール」かという点が主な違いです。",
  },
  {
    q: "複数店舗を展開していますが、全店舗のGBP管理を依頼できますか？",
    a: "はい、複数店舗のGoogleビジネスプロフィール管理に対応しています。店舗数に応じた管理プランをご用意しており、NAP情報の統一・投稿の一括管理・各店舗の口コミモニタリングをまとめて代行します。まずはご状況をお聞かせください。",
  },
  {
    q: "Googleビジネスプロフィールに写真はどのくらい必要ですか？",
    a: "外観・内観・スタッフ・商品・サービスなど複数カテゴリで最低20〜30枚の写真を整備することを推奨しています。写真が充実しているプロフィールはクリック率・来店動機が高まる傾向があります。定期的な追加も重要です。",
  },
  {
    q: "NAP情報とは何ですか？なぜ重要ですか？",
    a: "NAPとはName（店舗名）・Address（住所）・Phone（電話番号）の略です。Googleビジネスプロフィール・自社Webサイト・ポータルサイト・SNSなどのNAP情報が一致していないと、Googleがビジネスの信頼性を正確に評価できなくなります。NAP統一はMEO対策の基礎です。",
  },
  {
    q: "投稿はどのくらいの頻度で行えばよいですか？",
    a: "週に1〜2回の投稿が理想的です。投稿の更新頻度はビジネスのアクティブ度のシグナルとしてGoogleが評価します。サイプレスの月次プランでは月4〜8件の投稿作成・公開を代行します。",
  },
  {
    q: "Googleビジネスプロフィールの情報が第三者によって変更されることはありますか？",
    a: "はい、Googleは第三者（ユーザー）による情報の提案変更を受け付けており、オーナーが管理していない場合に誤った情報が反映されるリスクがあります。定期的なモニタリングと管理が必要な理由の一つです。",
  },
  {
    q: "口コミ返信は日本語で行ってもらえますか？",
    a: "はい、日本語での口コミ返信文案を作成します。業種・店舗のトーン&マナーに合わせた返信文を作成し、ご確認いただいてから公開します。英語など外国語の口コミへの返信支援も対応可能です。",
  },
  {
    q: "開業前からMEO対策を依頼できますか？",
    a: "はい、開業前のGoogleビジネスプロフィール作成・オーナー確認・初期設定からご支援します。開業と同時にGoogleマップに情報が表示される状態を整えることで、開業直後からの集客をスムーズに開始できます。",
  },
  {
    q: "MEO業者はどう選べばよいですか？",
    a: "施策の内容（何をするか）・レポートの具体性・担当者との連絡頻度・実績の透明性を確認することをお勧めします。「順位保証」「口コミ購入代行」を謳う業者はGoogleポリシー違反のリスクがあるため注意が必要です。サイプレスは施策内容・レポートを明確にお伝えします。",
  },
  {
    q: "Googleビジネスプロフィールのカテゴリ設定は重要ですか？",
    a: "はい、カテゴリ設定はMEOで最も重要な要素の一つです。メインカテゴリと追加カテゴリを正確に設定することで、関連する検索クエリにマッチしやすくなります。競合のカテゴリ設定を参考にしながら最適な選定を行います。",
  },
  {
    q: "Googleマップ上でのルート案内リクエストは集客にどう影響しますか？",
    a: "ルート案内リクエスト数は来店意向が高いユーザーの行動指標です。この数値が増えるほど実際の来店数増加に直結します。GBPインサイトで毎月の推移を追い、施策の効果測定に活用します。",
  },
  {
    q: "MEO対策の費用はどのくらいかかりますか？",
    a: "店舗数・施策範囲・現在のGBP状況によって費用は異なります。まずは無料相談でご状況をお聞きし、最適なプランをご提案します。料金の目安は料金ページをご覧ください。初回の現状診断は無料で対応しています。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "Webサイトの検索流入増加" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "地域ビジネス向けサイト制作" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金プランと相場" },
  { href: "/meo/google-business-profile", label: "Googleビジネスプロフィール最適化", desc: "プロフィール設定の詳細" },
  { href: "/meo/review-strategy", label: "口コミ獲得戦略", desc: "自然な口コミの増やし方" },
  { href: "/meo/photo-strategy", label: "MEOに効く写真戦略", desc: "写真設定のポイント" },
  { href: "/meo/local-pack", label: "ローカルパックとは", desc: "地図表示の仕組みと対策" },
  { href: "/meo/nap", label: "NAP統一の重要性", desc: "店舗名・住所・電話番号の整合" },
  { href: "/meo/post-strategy", label: "GBP投稿戦略", desc: "投稿の種類と更新頻度" },
  { href: "/meo/bad-review", label: "悪い口コミへの対応", desc: "返信と削除申請の方法" },
  { href: "/industries/restaurant", label: "飲食店のMEO対策", desc: "飲食店向け集客施策" },
  { href: "/industries/beauty", label: "美容室のMEO対策", desc: "サロン向け集客施策" },
  { href: "/industries/clinic", label: "クリニックのMEO対策", desc: "医療・歯科のMEO" },
  { href: "/industries/seikotsuin", label: "整骨院のMEO対策", desc: "整体・接骨院のMEO" },
  { href: "/industries/reform", label: "リフォームのMEO対策", desc: "建設・工務店のMEO" },
  { href: "/industries/juku", label: "学習塾のMEO対策", desc: "塾・スクールのMEO" },
  { href: "/area/katsushika", label: "葛飾区のMEO対策", desc: "葛飾区エリアの支援" },
  { href: "/area/tokyo", label: "東京のMEO対策", desc: "東京エリアのMEO支援" },
  { href: "/area/adachi", label: "足立区のMEO対策", desc: "足立区エリアの支援" },
  { href: "/area/edogawa", label: "江戸川区のMEO対策", desc: "江戸川区エリアの支援" },
  { href: "/faq/meo-basics", label: "MEO対策FAQ", desc: "よくある質問まとめ" },
  { href: "/checklist/meo", label: "MEOチェックリスト", desc: "GBP確認項目一覧" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MEO対策サービス",
  description: "Googleビジネスプロフィールの最適化・口コミ管理・写真戦略・投稿活用でGoogleマップ上位表示と地域集客を強化。",
  provider: {
    "@type": "Organization",
    name: "株式会社サイプレス",
    url: "https://www.cypress-all.co.jp",
  },
  areaServed: { "@type": "Country", name: "Japan" },
  url: "https://www.cypress-all.co.jp/services/meo",
  serviceType: "MEO対策・Googleマップ最適化",
};

export default function ServicesMeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#6B7280" }} className="hover:underline">サービス</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>MEO対策</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>MEO Service</p>
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
              <Link href="/contact" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ background: "#0F172A", color: "#FFFFFF" }}>
                無料相談・お問い合わせ
              </Link>
              <Link href="/cost/meo" className="inline-block px-6 py-3 text-[13px] font-semibold transition-colors" style={{ border: "1.5px solid #D1D5DB", color: "#374151" }}>
                料金・プランを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_20_52.png" alt="MEO対策・Googleマップ上位表示・地域集客のイメージ" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Overview</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-4">
              {[
                "サイプレスのMEO対策サービスが具体的に何をするのか",
                "依頼前によくある課題と、その原因・解決の方向性",
                "業種ごとのMEO支援のポイントと優先施策",
                "問い合わせからGBP運用開始まで10ステップの支援の流れ",
                "成果を測るために追うべきKPIとGBPインサイトの見方",
                "MEO対策業者の選び方と依頼時に確認すべきポイント",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 font-bold" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
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

        {/* Googleが評価する3つの基準 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Google Ranking Factors</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              Googleが評価する3つの基準×サイプレスの施策
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {[
                { criterion: "関連性（Relevance）", body: "カテゴリ・サービス名・説明文を最適化し「何の店か」をGoogleに正確に伝える。業種・サービスキーワードを適切に設定することで、関連する検索クエリにマッチしやすくなる。" },
                { criterion: "距離（Distance）", body: "対象エリア・サービス提供エリアを正確に設定し、地域ごとの検索に対応。住所・エリア情報の整合性を保ちながら、サービス提供範囲を明確にする。" },
                { criterion: "知名度（Prominence）", body: "口コミ獲得支援・高品質写真投稿・外部リンク構築で知名度スコアを向上。口コミ件数・評価・返信率・投稿更新頻度が知名度評価に影響する。" },
              ].map((item) => (
                <div key={item.criterion} className="p-7" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC", borderTop: "3px solid #c4b89a" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#c4b89a" }}>{item.criterion}</p>
                  <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MEO対策をしないと機会損失が続く理由 */}
        <section className="py-20" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why It Matters</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#FFFFFF", fontFamily: "var(--font-serif)" }}>
              MEO対策をしないと機会損失が続く理由
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {[
                { title: "「近くの〇〇」検索がスマホで急増中", body: "スマホ検索の多くは地域情報を含む。Googleマップ上位に出ないと検索ユーザーに選ばれる機会が生まれない。" },
                { title: "Googleマップは購買直前の最終確認場所", body: "来店を決めたユーザーが最後に確認するのがGoogleマップのレビュー・写真・情報。ここで離脱させてはならない。" },
                { title: "競合他社のGBPが充実していれば一方的に負ける", body: "近隣の競合が口コミ・写真・情報を充実させていれば、自社は選ばれない。放置するほど差は広がる。" },
                { title: "放置したGBPは誤情報が蓄積するリスク", body: "第三者による提案変更・古い情報・未管理の口コミが信頼を損なう。定期的な管理なしにGBPは健全を保てない。" },
              ].map((item) => (
                <div key={item.title} className="p-6" style={{ border: "1px solid rgba(196,184,154,0.25)", background: "rgba(255,255,255,0.04)" }}>
                  <p className="font-bold text-[14px] mb-3" style={{ color: "#FFFFFF" }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.9]" style={{ color: "#9CA3AF" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              MEO支援のご依頼前によくお聞きする課題とその背景をまとめました。当てはまる項目が多い場合は、まず現状のGBP診断からご相談ください。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "Googleマップに表示されない", body: "GBPが未作成・未確認の状態、または情報が極端に不足している場合、ローカルパックに表示されません。まずオーナー確認と基本情報の整備が出発点です。" },
                { title: "競合が上位を独占している", body: "競合他社が口コミ数・写真・投稿頻度で大きく先行しているケース。差の要因を特定し、口コミ戦略と情報充実で差を縮める施策を優先します。" },
                { title: "GBPを自分で管理していない／放置している", body: "オーナー確認はしたが、その後ほぼ放置している状態。更新が止まったGBPはGoogleに「アクティブでない」と評価されやすく、順位が下落する傾向があります。" },
                { title: "写真が開業時のまま更新されていない", body: "古い写真が並んでいると、ユーザーに現在の店舗状況が伝わらず来店動機が下がります。定期的な写真追加はMEOの継続施策として欠かせません。" },
                { title: "口コミ依頼の仕方が分からない", body: "「口コミをお願いするのは迷惑では？」と感じているオーナー様は多い。適切な導線設計（QRコード・LINE）で自然にお願いできる仕組みを作ることが重要です。" },
                { title: "MEOとSEOの違いが分からない", body: "検索結果に表示される2種類の枠（通常検索とローカルパック）の違いが整理できていないケース。それぞれの対策対象・施策方法・効果の違いを理解した上で優先順位を決める必要があります。" },
                { title: "MEO業者の選び方が分からない", body: "「MEO対策業者に頼んだが何をしているか不透明だった」というご相談もあります。施策内容・レポート頻度・担当者の連絡品質を事前に確認することが重要です。" },
                { title: "投稿が止まっている", body: "開始直後は投稿していたが、業務が忙しくなり更新が途絶えているケース。投稿代行プランで継続性を担保することが、長期的なMEO効果の維持につながります。" },
                { title: "悪い口コミへの返信に困っている", body: "感情的に返信してしまうとブランドイメージが悪化します。冷静かつ誠実な返信文案の作成支援と、ポリシー違反の口コミへの削除申請サポートを行います。" },
                { title: "複数店舗の管理が大変", body: "店舗が増えるほどGBPの管理工数は倍増します。各店舗のNAP統一・投稿スケジュール・口コミモニタリングを一括で代行するプランで管理負担を解消します。" },
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

        {/* Section C: 業種別の支援ポイント */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の支援ポイント
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              業種によって重視するGBP項目・口コミ傾向・競合環境は大きく異なります。各業種に特有のMEO戦略を以下にまとめました。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { industry: "飲食店", note: "メニュー・営業時間・席数・予約可否などの詳細情報の充実が重要。Food構造化データとの連携も有効です。「近くのランチ」「夜 居酒屋 エリア名」などの時間帯・シーン別キーワードに対応する写真と説明文を整備します。" },
                { industry: "美容室・サロン", note: "スタイリスト紹介・施術メニュー・ビフォーアフター写真の充実がCTR向上に直結。口コミでの「指名したスタイリスト名」の出現もGoogleが参考にするため、個人ページとGBPの連携を意識した施策が有効です。" },
                { industry: "歯科・クリニック", note: "初診の不安を解消するFAQ（治療内容・費用・痛みへの配慮）を投稿や説明文に盛り込むことが来院動機を高めます。医師情報・診療科目の正確な設定と、患者の声を自然に集める導線設計を重視します。" },
                { industry: "整骨院・接骨院", note: "「症状名＋エリア名」（例：腰痛 葛飾区）でのローカルパック表示を目指し、症状別の投稿・写真を充実させます。施術内容・健康保険の適用可否・予約方法を明記することで来院前の不安を解消します。" },
                { industry: "建設・リフォーム", note: "施工事例写真がMEOで最も効果的なコンテンツ。ビフォーアフターを定期的に投稿し、エリア名・施工内容を含む説明文を付与することでキーワード関連性を高めます。見積もり無料などのCTAを投稿に組み込みます。" },
                { industry: "不動産", note: "物件写真・スタッフ写真・店舗の外観写真の整備に加え、「地域の住みやすさ」「相場情報」などの投稿でローカル情報源としての信頼性を高めます。売買・賃貸それぞれの検索意図に合わせたサービス欄の整備が重要です。" },
                { industry: "学習塾", note: "合格実績・授業風景写真・講師紹介を充実させ、保護者の「ここに預けても大丈夫か」という安心感をGBP上で伝えることが来塾動機を高めます。体験授業・説明会の投稿を定期的に行うことで検索タイミングへの接触を増やします。" },
                { industry: "小売店", note: "商品写真の定期更新と在庫情報・特売情報の投稿が来店動機を高めます。Google商品リストとの連携も視野に入れた設定を行い、「近くで買える」という利便性を前面に出した情報設計を進めます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.industry}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section D: ご支援の流れ */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Process</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ご支援の流れ
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              無料相談から継続的なGBP運用まで、10ステップで進めます。各ステップの目的と成果物を明確にしながら進行します。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { step: "STEP 01", title: "無料相談", body: "現在のGBP状況・ビジネス目標・対応エリア・競合状況をヒアリングします。相談時間は約30〜60分。Zoom・Google Meetでのオンライン対応が基本です。" },
                { step: "STEP 02", title: "現状GBP診断", body: "Googleビジネスプロフィールの現状を網羅的にチェックします。情報の完成度・写真枚数・口コミ件数・評価スコア・投稿状況・インサイトデータを整理し、課題を洗い出します。" },
                { step: "STEP 03", title: "競合分析", body: "主要キーワード（「エリア名＋業種」など）で上位表示されている競合のGBPを分析します。口コミ数・写真数・カテゴリ設定・投稿頻度などを比較し、自社との差を明確にします。" },
                { step: "STEP 04", title: "GBP最適化提案", body: "診断・競合分析の結果をもとに、最適化すべき項目の優先順位と具体的な施策内容をご提案します。改善ロードマップとして文書化してお渡しします。" },
                { step: "STEP 05", title: "オーナー確認サポート", body: "GBPのオーナー確認が完了していない場合は、申請・確認コードの取得から設定完了まで手順をサポートします。オーナー確認済みの場合はこのステップをスキップします。" },
                { step: "STEP 06", title: "NAP統一作業", body: "Googleビジネスプロフィール・自社Webサイト・各種ポータルサイト・SNSに記載されている店舗名・住所・電話番号が一致しているかを確認し、不一致を修正します。" },
                { step: "STEP 07", title: "写真・コンテンツ整備", body: "外観・内観・スタッフ・商品・サービスなどの写真を適切なカテゴリで整理・追加します。説明文・サービス欄・Q&Aセクションも最適化します。" },
                { step: "STEP 08", title: "口コミ施策設計", body: "お客様が口コミを投稿しやすい導線（QRコード・LINEメッセージ文案・SMS文案）を設計します。自然に口コミが集まる仕組みを整え、継続的な増加を目指します。" },
                { step: "STEP 09", title: "月次投稿・口コミ返信", body: "毎月の投稿作成・公開と、口コミへの返信文案の作成を継続します。投稿内容はイベント・特典・新商品などビジネスの動きに合わせて設計します。" },
                { step: "STEP 10", title: "月次レポート・戦略見直し", body: "GBPインサイトデータと競合比較をもとに、毎月の成果をレポートします。表示回数・電話タップ数・ルート案内リクエスト数の推移を確認し、翌月の施策を調整します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[11px] font-semibold shrink-0 mt-1 px-2 py-1 whitespace-nowrap" style={{ background: "#c4b89a", color: "#FFFFFF", letterSpacing: "0.1em" }}>{item.step}</span>
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

        {/* Section E: 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              MEO対策の効果を正しく評価するために、以下のKPIをGBPインサイトで月次にモニタリングします。数値の変化を継続的に追うことで施策の精度を高めます。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                { kpi: "ローカルパック表示順位", where: "LocalFalcon等の順位追跡ツール", note: "「エリア名＋業種」など主要キーワードでのGoogleマップ上の表示順位。3位以内への入り方と維持を目標に設定します。" },
                { kpi: "GBP検索表示回数", where: "Googleビジネスプロフィール インサイト", note: "プロフィールが検索結果に表示された回数。表示回数が増えることで認知機会が広がります。前月比の増加推移を追います。" },
                { kpi: "電話タップ数", where: "Googleビジネスプロフィール インサイト（電話）", note: "GBPの電話番号をタップしたユーザー数。来店・予約に直結する行動指標であり、施策効果を最も直感的に示す数値です。" },
                { kpi: "ウェブサイトクリック数", where: "Googleビジネスプロフィール インサイト（ウェブサイト）", note: "GBPからWebサイトへ遷移したユーザー数。SEOとMEOを組み合わせて運用する場合、流入経路の補完確認にも使います。" },
                { kpi: "ルート案内リクエスト数", where: "Googleビジネスプロフィール インサイト（ルート）", note: "来店意向が高いユーザーが経路検索した回数。実際の来店数と高い相関があるため、集客効果を測る重要な指標です。" },
                { kpi: "口コミ数・評価スコア", where: "Googleビジネスプロフィール（口コミタブ）", note: "累計口コミ件数と平均評価スコアの推移。口コミが継続的に増加しているかを月次で確認し、導線施策の効果を評価します。" },
                { kpi: "月間問い合わせ数（GBP経由）", where: "自社管理システム／GBP電話タップ数との照合", note: "GBPを経由した実際の問い合わせ・来店・予約数。最終的なビジネス成果として追う指標で、MEO施策の費用対効果を判断します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-1" style={{ color: "#0d1b2a" }}>{item.kpi}</p>
                    <p className="text-[12px] mb-2 font-medium" style={{ color: "#c4b89a" }}>確認場所：{item.where}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.note}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 月次MEO対策レポートの内容 */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Monthly Report</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              月次MEO対策レポートの内容
            </h2>
            <p className="text-[14px] leading-[1.9] mb-10" style={{ color: "#374151", maxWidth: "600px" }}>
              毎月の施策結果を可視化し、次月の改善方針を明確にするレポートをご提供します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                { num: "01", title: "Googleビジネスプロフィール インサイト", desc: "検索表示回数・電話クリック数・経路クリック数・Webサイトクリック数を月次で集計。前月比の推移とともに報告します。" },
                { num: "02", title: "競合比較（検索順位・口コミ数）", desc: "主要キーワードにおける自社と競合他社の表示順位・口コミ件数・評価スコアを比較し、差分を明確にします。" },
                { num: "03", title: "口コミ件数・評価推移", desc: "当月獲得口コミ数・累計件数・平均評価スコアの推移を記録。口コミへの返信状況もあわせて確認します。" },
                { num: "04", title: "翌月の改善計画", desc: "インサイトデータと競合分析をもとに、翌月実施する施策の優先順位と具体的なアクションプランを提示します。" },
                { num: "05", title: "Q&Aの更新状況", desc: "Googleビジネスプロフィールの「Q&A」セクションへの新規投稿・回答状況を確認し、必要に応じてコンテンツを追加します。" },
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

        <FaqSection items={faqItems} heading="MEO対策サービスについてよくある質問" bgColor="#F9F8F5" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="MEO対策サービスの無料相談"
          body="現在のGoogleビジネスプロフィールの状況を確認し、最適な施策をご提案します。まずはお気軽にご相談ください。"
        />
      </main>
      <Footer />
    </>
  );
}
