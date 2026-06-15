import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "地域密着SNS運用｜地元顧客に刺さる地域SNS戦略",
  description: "地域名・地元感を活かして近隣ユーザーに届くSNS戦略。地域ハッシュタグ・位置情報タグ・MEO連携・地域インフルエンサー活用で来店を増やす地域密着SNS運用の全手法を解説。",
  keywords: ["地域密着SNS", "地域SNS集客", "地域ハッシュタグ", "MEO SNS連携", "地元集客", "店舗SNS運用"],
  openGraph: {
    title: "地域密着SNS運用｜地元顧客に刺さる地域SNS戦略",
    description: "地域名・地元感を活かして近隣ユーザーに届くSNS戦略。地域ハッシュタグ・位置情報タグ・MEO連携・地域インフルエンサー活用で来店を増やす地域密着SNS運用の全手法を解説。",
    images: [{ url: "/ChatGPT Image 2026年6月13日 19_22_31.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/sns/local-sns" },
};

const faqItems = [
  { q: "地域のInstagramでフォロワーを増やすには？", a: "地域名ハッシュタグ（#○○グルメ）の活用・位置情報（スポット）の設定・近隣店舗との相互フォロー・地元メディアアカウント（○○情報局等）へのアプローチが効果的です。フォロワー増加よりも「地元ユーザーへのリーチ」を優先する戦略が来店につながります。" },
  { q: "SNSとMEO（Googleマップ）はどう組み合わせますか？", a: "MEOで「近く・今すぐ行きたい」ユーザーを獲得し、InstagramでSNS経由で知った人を来店させる、という2ルートの集客が理想です。Googleビジネスプロフィールの投稿機能でもSNSと同様のコンテンツを発信でき、マップ上での露出も高まります。" },
  { q: "地元の人にInstagramを見てもらうには？", a: "位置情報の設定・地域ハッシュタグの活用・ストーリーズでの「近隣情報」タグの使用・地元のフォローが多いアカウントとのコラボ・地域イベント参加の投稿が効果的です。地域コミュニティアカウントへのコメント・いいねも地域ユーザーへの露出を増やします。" },
  { q: "地域SNS集客にはどのSNSプラットフォームが適していますか？", a: "Instagram（ビジュアル重視の業種）・X（情報発信・速報性）・Googleビジネスプロフィール（マップ集客）の3つを組み合わせるのが理想です。業種によってFacebook・LINEも有効で、地域の年齢層に合わせたプラットフォーム選定が重要です。" },
  { q: "地域の競合店舗と差別化するSNS戦略は？", a: "「スタッフの顔が見える」「地域のイベント・文化と連動する」「お客様の声・UGC（ユーザー投稿）を積極的に紹介する」など、地元との繋がりを見せるコンテンツが差別化に効果的です。地域限定キャンペーンや地元生産者との連携も独自性を生みます。" },
  { q: "地域ハッシュタグはどのくらい使うべきですか？", a: "Instagramでは1投稿あたり5〜15個が推奨です。地域名+業種（#○○市カフェ）・地域名+用途（#○○ランチ）・地域名のみ（#○○市）を組み合わせ、投稿内容に合ったタグセットを複数パターン用意しておくと効率的です。" },
  { q: "地元のインフルエンサーにアプローチする方法は？", a: "フォロワー数より「地元フォロワー比率」が高いマイクロインフルエンサー（フォロワー1,000〜10,000人）が効果的です。まず自然なコメント・フォローで関係を築き、試食・体験のご招待から始めるアプローチが長続きします。" },
  { q: "地域イベントとSNSをどう連動させますか？", a: "イベント前・当日・翌日の3段階で投稿を設計します。前：参加告知と期待感の醸成。当日：リアルタイムのストーリーズ投稿。翌日：当日の様子まとめ投稿。地域のイベント主催者をタグ付けすることで拡散効果も得られます。" },
  { q: "地域SNS集客の効果はどのくらいで出ますか？", a: "地域ハッシュタグ・位置情報の設定など基礎設定は即効性があります。フォロワー増加・エンゲージメント向上は3〜6か月が目安です。地域インフルエンサーとのコラボや地元メディア掲載は単発でも大きな効果をもたらすことがあります。" },
  { q: "Instagramのリールは地域集客に効果的ですか？", a: "はい。リールは発見タブへの露出が高く、地域ユーザーへのリーチ拡大に有効です。地域の風景・季節の話題・スタッフの紹介など「地域感」を前面に出した動画が地元ユーザーの共感を生みます。" },
  { q: "地域ユーザーに刺さるコンテンツのテーマは？", a: "地元食材・地域の季節行事・近隣スポット・地域ニュースへのコメント・スタッフの地元エピソード・地域のお客様紹介（UGC）などが高エンゲージメントを生みます。「地元愛」が伝わる投稿が地域ユーザーの共感を獲得します。" },
  { q: "地域の口コミをSNSでどう活用しますか？", a: "Googleレビュー・Instagramのタグ付け投稿・DM感謝メッセージをストーリーズで紹介するなど、実際のお客様の声をコンテンツとして活用します。UGCの許可をいただいてリポストする仕組みを作ることが重要です。" },
  { q: "地域広告（Instagram広告）のターゲティングはどう設定しますか？", a: "Meta広告では半径〇km以内のユーザーへのターゲティングが可能です。店舗から2〜5km圏内・年齢層・興味関心を組み合わせて設定します。地域の祭りやイベント時期に合わせた短期集中広告も効果的です。" },
  { q: "FacebookとInstagramはどちらを優先すべきですか？", a: "40代以上が多い業種・地域コミュニティとの繋がりを重視する場合はFacebook。20〜40代向けでビジュアルが重要な業種（飲食・美容・小売）はInstagramを優先します。Meta広告は両方に同時配信できるため、運用は連携がおすすめです。" },
  { q: "地域SNSの投稿頻度はどのくらいが最適ですか？", a: "フィード投稿は週3〜5回、ストーリーズは毎日更新が理想です。継続性が重要で、毎日は難しい場合は週3回の定期投稿の方が不定期投稿より効果的です。地域イベント時期は頻度を上げることをおすすめします。" },
  { q: "地域メディアアカウントに掲載してもらうコツは？", a: "まず相手アカウントをフォロー・定期的にいいね・コメントで存在を認知してもらいます。その後、地域情報として価値があるコンテンツ（地域の季節ネタ・地元食材等）で自然なタグ付けを行います。DMでの掲載依頼は関係構築後が効果的です。" },
  { q: "LINE公式アカウントとSNSはどう組み合わせますか？", a: "InstagramでフォローしてもらったユーザーをLINE公式へ誘導することで、より深いコミュニケーションが取れます。LINE登録特典（割引・プレゼント）をInstagramで告知する導線が効果的です。来店後のリピート促進はLINEが得意です。" },
  { q: "地域SNS運用を外注する場合の費用感は？", a: "月額5万〜15万円が一般的な相場です。投稿代行のみか・戦略設計込みか・広告運用込みかによって大きく異なります。地域密着型の運用代行は担当者が地域を理解していることが重要で、実績・事例で選ぶことをおすすめします。" },
  { q: "地域SNS運用で避けるべきことは何ですか？", a: "過度な宣伝投稿（毎回セール・割引の告知）・地域と無関係なコンテンツの乱用・お客様の許可なしでの写真投稿・ネガティブなコメントへの放置などは信頼を損ないます。「地域の仲間」として自然なコミュニケーションを心がけることが大切です。" },
  { q: "Googleビジネスプロフィールの投稿とInstagramは連携できますか？", a: "直接の自動連携はありませんが、同じコンテンツをGBP投稿・Instagram・Facebook等に手動で展開するマルチポスティングが効率的です。GBP投稿はマップ検索からの来店意欲が高いユーザーへのリーチになるため、特に重要です。" },
  { q: "地域SNS集客の成功事例を教えてください。", a: "飲食店では地域ハッシュタグ+位置情報設定のみで月間リーチが3倍になった事例があります。美容室では地元インフルエンサーとのコラボで新規予約が月20件増加した事例も。まずは基本設定の徹底から始めることが最も費用対効果が高いアプローチです。" },
];

const relatedLinks = [
  { href: "/sns", label: "SNS集客とは", desc: "SNS集客の全体像" },
  { href: "/sns/instagram", label: "Instagram運用", desc: "インスタ集客の基本" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "地域ハッシュタグ設計" },
  { href: "/sns/photo-direction", label: "写真ディレクション", desc: "SNS写真の撮り方" },
  { href: "/sns/content-calendar", label: "コンテンツカレンダー", desc: "投稿スケジュール管理" },
  { href: "/sns/post-planning", label: "投稿企画・運用設計", desc: "コンテンツ制作" },
  { href: "/sns/google-business-profile", label: "Googleビジネスプロフィール", desc: "GBP活用" },
  { href: "/sns/reels", label: "リール・ショート動画", desc: "動画コンテンツ戦略" },
  { href: "/sns/line", label: "LINE公式アカウント", desc: "LINE集客・リピート" },
  { href: "/sns/ugc", label: "UGC活用戦略", desc: "口コミ・投稿活用" },
  { href: "/meo", label: "MEO対策とは", desc: "MEO×SNS連携" },
  { href: "/meo/google-map", label: "Googleマップ対策", desc: "マップからの集客" },
  { href: "/meo/review", label: "口コミ獲得戦略", desc: "Googleレビュー活用" },
  { href: "/seo", label: "SEO対策とは", desc: "検索集客の基本" },
  { href: "/seo/local", label: "ローカルSEO", desc: "地域検索対策" },
  { href: "/aio", label: "AIO対策とは", desc: "AI検索への対応" },
  { href: "/services/sns", label: "SNSサービス詳細", desc: "SNS運用サービス" },
  { href: "/services/meo", label: "MEOサービス詳細", desc: "MEO運用サービス" },
  { href: "/industry/restaurant", label: "飲食店のSNS集客", desc: "飲食業界の事例" },
  { href: "/industry/beauty", label: "美容室のSNS集客", desc: "美容業界の事例" },
  { href: "/industry/dental", label: "歯科のSNS集客", desc: "クリニック事例" },
  { href: "/industry/retail", label: "小売店のSNS集客", desc: "店舗集客の事例" },
  { href: "/area/tokyo", label: "東京のSNS集客", desc: "東京エリア対応" },
  { href: "/area/osaka", label: "大阪のSNS集客", desc: "大阪エリア対応" },
];

const contentItems = [
  { title: "地域ハッシュタグの設計", body: "「#○○市カフェ」「#○○グルメ」「#○○美容室おすすめ」など地域名+業種・用途を組み合わせたタグを10〜15個設計します。検索ボリュームと競合投稿数を確認しながら最適なタグセットを作ります。" },
  { title: "位置情報タグの活用", body: "Instagramの「場所を追加」機能で店舗・地域名・ランドマークの位置情報をすべての投稿に設定します。位置情報で検索するユーザーにリーチできるため、来店型ビジネスには必須の設定です。" },
  { title: "MEO×SNS連携戦略", body: "Googleマップ（MEO）でリーチした「今すぐ来店したい」ユーザーとInstagramで「気になるお店を発見した」ユーザーの2層を獲得します。GBPの投稿機能でもInstagramと同じコンテンツを発信できます。" },
  { title: "地元メディアアカウントとの連携", body: "「○○市グルメ情報」「○○エリアおでかけ」などの地域メディアアカウントをフォロー・タグ付けして関係を築きます。掲載・紹介されることで一気に地域ユーザーへのリーチが拡大します。" },
  { title: "地域イベント・季節との連動", body: "地元の祭り・花火大会・マルシェ・季節の観光スポットと連動したコンテンツは地域ユーザーの共感を集めます。「地元密着」を感じさせる投稿がフォローとエンゲージメントを生みます。" },
  { title: "UGC（ユーザー投稿）の活用", body: "お客様が投稿した写真をリポスト・ストーリーズで紹介します。UGCは信頼性が高く、投稿の手間が省けるうえ、紹介されたお客様が新たなフォロワーの紹介役になるという好循環を生みます。" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#F9F8F5" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", marginBottom: "24px", display: "flex", gap: "6px", alignItems: "center" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <Link href="/sns" style={{ color: "#6B7280" }}>SNS集客</Link>
              <span style={{ color: "#9CA3AF" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>地域密着SNS運用</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Local SNS Strategy</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              地域密着SNS運用｜地元顧客に刺さる地域SNS戦略
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              地域の店舗・中小企業にとってSNS集客は「遠くの人」ではなく「近くの人」に届けることが重要です。地域ハッシュタグ・位置情報・MEOとの連携で来店につながるSNS戦略を設計します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              フォロワー数を追うのではなく「地元のお客様に知ってもらい、来店してもらう」ことを最優先します。Googleマップ（MEO）との2軸集客で、地域での認知度を着実に積み上げます。
            </p>
          </div>
        </section>

        {/* Image Band */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月13日 19_22_31.png" alt="地域密着SNS運用" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ fontFamily: "var(--font-serif)", color: "#FFFFFF", fontSize: "clamp(18px,3vw,28px)", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center" }}>
              地元に愛されるお店は、地元に届くSNSをしている。
            </p>
          </div>
        </div>

        {/* Section A: このページでわかること */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px" }}>
              このページでわかること
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                "地域密着SNS運用が全国向けSNSと異なる理由と、地元集客に特化した戦略設計の全体像",
                "地域ハッシュタグ・位置情報タグの正しい設定方法と検索流入を増やす具体的な手順",
                "MEO（Googleマップ）とSNSを組み合わせた2軸集客の仕組みと連携ポイント",
                "地元メディアアカウント・地域インフルエンサーへのアプローチ方法と関係構築のステップ",
                "飲食・美容・歯科・整骨院・建設など業種別の地域SNS活用のポイントと投稿テーマ",
                "地域SNS集客の効果を測定するKPI（来店数・地域エンゲージメント・口コミ等）の設定方法",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span style={{ color: "#c4b89a", fontWeight: 700, fontSize: "16px", flexShrink: 0, lineHeight: 1.6 }}>→</span>
                  <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.8" }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark section: 成果が出ない理由 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>Why Local SNS Fails</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              地域SNS集客で成果が出ない4つの理由
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "地域ハッシュタグを使っていない", b: "「#東京カフェ」「#○○市美容室」など地域名を含むタグを使わないと、地元ユーザーの検索に引っかかりません。来店型ビジネスにとって地域タグは集客の根幹です。" },
                { t: "位置情報タグを設定していない", b: "Instagramの「場所を追加」機能を設定していないと、位置情報検索からの流入がゼロになります。近くにいるユーザーへのリーチは位置情報タグなしには実現できません。" },
                { t: "MEOとSNSが連携できていない", b: "Googleマップで来店意欲が高まったユーザーとInstagramで認知したユーザーの2ルートを活かせていません。GBP投稿・Instagram連携でより多くの地域ユーザーに届きます。" },
                { t: "地域ユーザーに刺さるコンテンツがない", b: "全国向けの一般的なコンテンツは地元ユーザーの共感を生みません。地域のイベント・季節の話題・スタッフの顔が見えるコンテンツが「地元のお店感」を生み集客につながります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section B: よくある課題と原因 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              よくある課題と原因
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              地域密着SNS運用が思うように機能しない場合、多くは以下の課題が根本原因です。自店舗の状況と照らし合わせてご確認ください。
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { title: "全国向けの投稿ばかりで地域感がない", body: "業界トレンド・一般的な美容情報・汎用レシピなど、どこのお店でも発信できる内容が多い状態です。地域ユーザーが「自分のまちのお店の話」として共感できる投稿が不足しているため、地元フォロワーが増えません。" },
                { title: "地域タグ・地名を使っていない", body: "ハッシュタグに地域名が入っていないため、「○○市 ランチ」「○○区 美容室」で検索しているユーザーに表示されません。地域タグの未使用は地元リーチの機会を毎投稿で損失しています。" },
                { title: "地域イベントに反応できていない", body: "地元の祭り・マルシェ・運動会シーズンなど、地域ユーザーが盛り上がっているタイミングに合わせた投稿ができていません。リアルタイムの地域ネタへの反応が遅いと「この店は地元を知らない」という印象を与えます。" },
                { title: "近隣店舗・地域コミュニティとの連携なし", body: "同じ商店街・エリアの店舗と相互フォロー・コラボ投稿をしていないため、地域のSNSコミュニティから孤立しています。地域内での繋がりは地元ユーザーへの信頼構築に直結します。" },
                { title: "地元メディア・インフルエンサーとの関係構築なし", body: "地域の情報を発信するメディアアカウントやローカルインフルエンサーとの関係がないため、地域ユーザーへの一括リーチができていません。1回の掲載・紹介で数千人の地元ユーザーにリーチできる機会を逃しています。" },
                { title: "投稿に地図・アクセス情報がない", body: "「行ってみたい」と思ったユーザーが次に知りたいのはアクセス方法です。投稿やプロフィールにアクセス情報・地図リンクがないと離脱率が高まります。来店型ビジネスでは導線設計が集客の鍵です。" },
                { title: "地域特有のネタが思いつかない", body: "地元の旬の食材・季節の行事・近隣スポット・地域の文化など、地域ならではのコンテンツのストックがない状態です。地域コンテンツは「地域ならではの視点」を持つことで無限に生まれます。" },
                { title: "地域住民の声・口コミの活用不足", body: "お客様が投稿してくれた写真やコメントを活かすUGC戦略がなく、せっかくのリアルな口コミをコンテンツとして活用できていません。地域ユーザーの投稿を紹介することで信頼性と拡散力が高まります。" },
                { title: "地域の季節イベント・お祭りへの対応なし", body: "地元の年間行事（夏祭り・年末年始・地域の記念日等）に合わせた投稿計画がなく、季節の盛り上がりに乗れていません。地域イベントカレンダーを作成して事前に投稿を設計することが重要です。" },
                { title: "近隣エリアのターゲティング広告未活用", body: "Meta広告の「特定エリア半径○km以内」ターゲティングを使っていないため、来店可能エリアのユーザーへの有料リーチが取れていません。少額（月1〜3万円）でも地域限定広告は高いROIを発揮します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.title}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid: 地域集客を強化する6つの施策 */}
        <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280", textAlign: "center" }}>Local Strategy</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>
              地域集客を強化する6つの施策
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {contentItems.map((item, i) => (
                <div key={i} style={{ padding: "32px", background: "#F9F8F5", borderRadius: "4px", borderTop: "3px solid #c4b89a" }}>
                  <p style={{ color: "#c4b89a", fontSize: "11px", letterSpacing: "0.2em", marginBottom: "10px", fontFamily: "var(--font-serif)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "17px", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.85", color: "#374151" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: 業種別の活用ポイント */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              業種別の活用ポイント
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              業種によって地域SNSで伝えるべきコンテンツテーマ・訴求ポイントは異なります。自業種の特性に合わせた戦略設計が重要です。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                { industry: "飲食店", point: "地元食材の産地・生産者紹介・地域の食文化との繋がり・近隣ランチ情報の発信で「地元に根ざした店」感を演出。地域のフードイベント参加報告や旬の食材を使ったメニュー紹介が高エンゲージメントを生む。" },
                { industry: "美容室", point: "スタッフの地元エピソード・地域住民との繋がりを前面に出す投稿で「近所の行きつけ」感を醸成。地域のオシャレスポット紹介や季節のヘアアレンジ提案で地元女性層のフォロワーを獲得。" },
                { industry: "歯科クリニック", point: "地域の健康イベント参加・地元小学校との連携（歯磨き指導等）・地域の子育て情報発信が信頼構築に直結。専門性の高い地域密着コンテンツが「かかりつけ医」としての認知を高める。" },
                { industry: "整骨院・接骨院", point: "地域スポーツチームへの協賛・地元の草野球・少年サッカーへのサポート情報発信で地域コミュニティとの繋がりを見せる。地域住民の健康イベントへの参加告知も信頼性を高める。" },
                { industry: "建設・リフォーム", point: "施工事例には必ず施工地域名を入れ（○○市○○町の事例）、地域の住宅環境・気候への配慮を強調。地域の街並みへの貢献・地元建材の活用など、地域に根ざした姿勢を継続発信する。" },
                { industry: "小売店", point: "地元生産者との取り組み・地域フェアへの出店・地域限定商品の紹介で「地元に愛される店」を演出。地域の定期市・マルシェとの連携投稿は地域コミュニティへの露出を大幅に増やす。" },
                { industry: "学習塾", point: "地元の進学実績（合格校名入り）・地域の中学・高校の受験情報・地域の教育に関する保護者向けコラムで信頼を構築。地域特有の受験事情・公立校情報の発信が保護者層のフォロワー獲得に有効。" },
                { industry: "不動産", point: "地域の住環境紹介・生活利便性（近隣スーパー・公園・学校）・地域の住みやすさコンテンツが潜在顧客の信頼獲得に効果的。地域の街歩き動画・季節の風景投稿で「この地域に詳しい専門家」感を演出。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "28px", background: "#FFFFFF", borderRadius: "4px", border: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span className="text-[12px] font-mono shrink-0" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a" }}>{item.industry}</p>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 実装・運用フロー */}
        <section style={{ background: "#FFFFFF", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              実装・運用フロー
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              地域密着SNS運用は「何となく地域ネタを投稿する」ではなく、以下のステップで体系的に設計・実装することで再現性のある集客が生まれます。
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { step: "対象地域の絞り込み", detail: "来店可能エリア（例：徒歩15分圏内・車で20分圏内）を明確に定義します。地域を絞ることでコンテンツテーマが具体化し、ターゲットユーザーへの刺さり方が格段に上がります。" },
                { step: "地域に関連するハッシュタグ一覧作成", detail: "地域名+業種・地域名+用途・地域名のみの3カテゴリでタグを15〜20個リスト化します。競合投稿数（多すぎると埋もれる）を確認しながら適切な露出量のタグを選定します。" },
                { step: "地域イベントカレンダー確認", detail: "市区町村の公式サイト・地域情報メディア・地元SNSをチェックして、年間の地域イベントを一覧化します。イベント1〜2週間前から関連コンテンツを投稿開始するスケジュールを作ります。" },
                { step: "地域ならではのコンテンツネタ出し", detail: "地元の旬の食材・季節の風景・近隣スポット・地域の文化・スタッフの地元エピソードなど、自店舗ならではの地域コンテンツを20〜30件ブレインストーミングします。" },
                { step: "地域インフルエンサー・メディアリスト作成", detail: "地域の情報発信アカウント（フォロワー数より地元フォロワー比率を重視）を10〜20件リスト化します。まずはフォロー・いいね・コメントで自然な関係構築を始めます。" },
                { step: "地元感のある写真・動画素材準備", detail: "地域のランドマーク・地元の食材・季節の風景・スタッフの顔など「地域感」が伝わる写真素材をストックします。定期的な素材撮影のスケジュールも合わせて設計します。" },
                { step: "地域タグ・地名入り投稿テンプレート", detail: "投稿本文に地域名を自然に含めるテンプレートを複数パターン作成します。「○○市でランチをお探しの方へ」「○○駅から徒歩3分の○○店では」などの地域名を入れた書き出しパターンを準備します。" },
                { step: "地域コミュニティアカウントとの交流", detail: "地域メディア・近隣店舗・地元活動アカウントと定期的なコメント・いいね・コラボ提案で関係構築します。相互フォローと定期的なメンションで地域コミュニティ内での存在感を高めます。" },
                { step: "地域広告ターゲティング設定", detail: "Meta広告マネージャーで店舗から半径2〜5kmのターゲティングを設定します。既存フォロワーの除外・年齢・興味関心の組み合わせで、来店可能性の高い地域ユーザーへの効率的な配信を実現します。" },
                { step: "月次効果測定とPDCA", detail: "地域タグ経由リーチ・地元フォロワー比率・来店数（SNS経由）を月次で計測します。投稿テーマ・タグ・投稿時間帯などのパラメータを1つずつ改善するA/Bテストサイクルを回します。" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start", padding: "24px 0", borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a", marginBottom: "8px" }}>{item.step}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.85" }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section E: 成果を見るための指標 */}
        <section style={{ background: "#F9F8F5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs & Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              成果を見るための指標
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.8", marginBottom: "40px", maxWidth: "640px" }}>
              地域密着SNS運用の成果は「フォロワー数」ではなく「来店につながる指標」で判断します。以下のKPIを月次でモニタリングすることで改善サイクルが機能します。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {[
                { kpi: "地域タグ経由リーチ数", where: "Instagram インサイト → リーチ → ハッシュタグ", note: "地域ハッシュタグからの発見数を確認。増加傾向が地域露出の拡大を示す。" },
                { kpi: "地元フォロワー比率", where: "Instagram インサイト → オーディエンス → 上位都市", note: "フォロワーの居住地が店舗エリアに集中しているかを確認。来店可能性の高いフォロワー比率が重要。" },
                { kpi: "地域ユーザーからのエンゲージメント率", where: "投稿インサイト → エンゲージメント / リーチ", note: "地域タグ投稿のエンゲージメント率が全体より高い場合、地域コンテンツの親和性が高いサイン。" },
                { kpi: "地域名検索からの流入数", where: "Google Search Console → クエリ（地域名含む）", note: "「○○市 カフェ」等の地域検索でのウェブサイト流入。SNS経由のSEO効果も確認できる。" },
                { kpi: "地元口コミ獲得数", where: "Googleビジネスプロフィール → レビュー数推移", note: "SNS活動が口コミ投稿のきっかけになることが多い。月次レビュー増加数を追跡する。" },
                { kpi: "SNS経由の来店数（地域ユーザー）", where: "来店時アンケート / LINE登録時の流入元確認", note: "「Instagramを見て来店した」「SNSを見て知った」の回答数を月次集計。最も重要なKPI。" },
                { kpi: "地域メンション・タグ付け数", where: "Instagram メンション通知 / タグ付き投稿", note: "お客様が自発的にタグ付けしてくれた投稿数。UGC量が地域への定着度を示す指標となる。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: "#FFFFFF", borderRadius: "4px", border: "1px solid #E8E4DC" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
                    <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "15px", color: "#0d1b2a" }}>{item.kpi}</p>
                  </div>
                  <p style={{ fontSize: "11px", color: "#c4b89a", marginBottom: "8px", paddingLeft: "28px" }}>{item.where}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8", paddingLeft: "28px" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
