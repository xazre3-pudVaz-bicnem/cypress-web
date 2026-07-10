import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ペットショップ・動物病院のWeb集客｜MEO対策・Instagram運用｜株式会社サイプレス",
  description: "ペットショップ・動物病院・トリミングサロン向けWeb集客支援。Googleマップ上位表示（MEO）・Instagram運用・犬種猫種別SEOで新規顧客来店と定期利用を増やします。",
  keywords: ["ペットショップ MEO対策", "動物病院 集客", "トリミングサロン 集客", "ペットショップ Googleマップ", "ドッグサロン Instagram", "ペットショップ ホームページ"],
  openGraph: {
    title: "ペットショップ・動物病院のWeb集客｜MEO対策・Instagram運用｜株式会社サイプレス",
    description: "ペットショップ・動物病院向けWeb集客。MEO・Instagram・ホームページで新規顧客と定期利用を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/pet-shop" },
};

const faqItems = [
  {
    q: "ペットショップの集客にはGoogleマップとInstagramどちらが効果的ですか？",
    a: "「今すぐトリミングをお願いしたい」という即来店意欲の高いユーザーにはGoogleマップ（MEO）が有効です。Instagramはペットのかわいいビフォーアフター写真や施術動画でファンを育て、定期利用につなげます。両方を組み合わせることで最大効果が得られます。",
  },
  {
    q: "トリミングサロンの口コミをGoogleに増やすには？",
    a: "施術後に完成したペットの写真を撮影する際に、口コミQRコードが印刷されたカードを一緒に渡す方法が最も効果的です。かわいい仕上がりに満足しているオーナーは口コミ投稿のハードルが下がりやすいため、タイミングが重要です。",
  },
  {
    q: "トリミング予約をオンライン化したいのですが対応できますか？",
    a: "はい。ホームページへの予約フォーム設置・LINE公式アカウントでのオンライン予約受付・Googleビジネスプロフィールへの予約ボタン設定まで対応しています。電話対応の負担軽減と予約漏れ防止に効果的です。",
  },
  {
    q: "ペットショップのInstagram運用で効果的なコンテンツは？",
    a: "トリミング前後のビフォーアフター写真・施術中の動画・来店ペットの紹介投稿が最も反応が高くなります。季節ごとのトリミングスタイル提案や、ペットケアのTipsコンテンツもフォロワー増加に効果的です。",
  },
  {
    q: "ペットショップのGoogleマップ順位はどのくらいで上がりますか？",
    a: "競合の少ないエリアでは1〜2ヶ月、競合が多い場合は3〜6ヶ月が目安です。Googleビジネスプロフィールの完全整備・写真充実・口コミ獲得を同時に進めることで改善が早まります。",
  },
  {
    q: "個人経営のドッグサロンでもWeb集客は始められますか？",
    a: "はい。個人経営の小規模サロンにとってGoogleマップは特に効果的です。大手チェーンよりも競合が少なく、地域特化した口コミと丁寧な対応がGoogleマップ上位表示を実現しやすい環境です。低予算から始められます。",
  },
  {
    q: "ペットショップのホームページには何を掲載すべきですか？",
    a: "トリミングメニューと料金表（犬種・サイズ別）・施術写真ギャラリー・スタッフ紹介・アクセス・予約フォームが必須項目です。初めて来店するオーナーが安心できる情報（使用シャンプー・施術環境・資格情報）も掲載することで問い合わせ率が上がります。",
  },
  {
    q: "ペットグッズを販売するECサイトとトリミングサロンのWeb集客は同時に対応できますか？",
    a: "はい。ECサイトのSEO対策とトリミングサロンのMEO対策は異なる施策ですが、同一サイト内での統合設計も可能です。ECとリアル店舗の相乗効果を意識したWeb戦略をご提案します。",
  },
  {
    q: "ペットショップで専門的な知識をWebでどう伝えればいいですか？",
    a: "「犬種別の適切なシャンプー剤の説明」「トリミングの頻度ガイド」「ペットの皮膚ケアTips」など専門家視点のコンテンツをブログ・Instagramで発信することで信頼性が高まります。「この店のスタッフは詳しい」という印象が口コミとリピートにつながります。",
  },
  {
    q: "近隣の大手ペットショップに対してどう差別化できますか？",
    a: "「1頭1頭のペットに時間をかけた丁寧な施術」「飼い主への丁寧な状態報告」「スタッフとペットの距離感の近さ」「フレキシブルな対応」など個人サロンの強みをGBP・口コミ・ホームページで具体的に伝えます。大手への不満（画一的な施術・ペットへのストレス）を逆手に取った差別化が有効です。",
  },
  {
    q: "ペットショップとトリミングサロンでは集客の方法が違いますか？",
    a: "はい、アプローチが異なります。ペットショップは商品販売が主軸のため、EC連携・Googleショッピング・SNS販促が重要です。トリミングサロンは技術サービス業のため、施術実績の写真展開・予約導線・定期利用促進のLINE活用が中心になります。それぞれの特性に合わせた集客設計が必要です。",
  },
  {
    q: "SNSでのペット写真投稿にルールや注意点はありますか？",
    a: "飼い主の明示的な承諾なしにお客様のペット写真を投稿することは避けましょう。施術後に「Instagramに掲載してよいですか？」と一言確認するか、来店時の同意フォームを整備することが推奨されます。また、特定個人が特定されるような情報（住所・フルネーム等）は掲載しないよう注意が必要です。",
  },
  {
    q: "近くに動物病院がある場合、どう差別化すればいいですか？",
    a: "動物病院はメディカルケアが主目的ですが、トリミングサロンはスタイリング・グルーミングがメインです。「アロマトリートメント」「犬種に特化したカットスタイル」「フォトジェニックな仕上がり」など美容・スタイリングの専門性を前面に出すことで棲み分けが明確になります。また、動物病院との紹介連携を検討することも集客につながります。",
  },
  {
    q: "GBP（Googleビジネスプロフィール）のカテゴリは「ペットショップ」で合っていますか？",
    a: "メインカテゴリは業態に応じて選びましょう。トリミング・グルーミングがメインなら「ペットグルーマー」や「ペット美容院」が適切です。ペット用品販売がメインなら「ペットショップ」を選択します。サブカテゴリに複数業態を追加することで検索ヒット範囲を広げられます。正確なカテゴリ設定はGoogleマップ順位にも影響します。",
  },
  {
    q: "ペット用品ECサイトと実店舗のトリミングサロンを同じドメインで運営できますか？",
    a: "はい、同一ドメインで運営することでサイト全体の権威性が高まりSEOに有利です。ただし、ECページとサービスページは情報設計を分けることが重要です。EC向けには商品説明・購入導線を、サービスページにはトリミングメニュー・予約導線を明確に設計します。",
  },
  {
    q: "里親マッチングや保護ペット紹介をWebサイトで行う場合の注意点は？",
    a: "里親マッチングを行う場合、動物愛護管理法に基づく第一種動物取扱業の登録が必要です。Webサイトでは登録番号の明示・適切な情報開示が求められます。また、里親募集コンテンツはSNSでの拡散性が高く、適切な情報設計と合わせて実施することでブランド価値向上にもつながります。",
  },
  {
    q: "ペットショップ・トリミングサロンのWeb集客の費用目安は？",
    a: "MEO対策は月額数万円程度から、Instagram運用代行は月額数万円〜が一般的な目安です。ホームページ制作は規模によって異なります。まずは無料相談でヒアリングし、現状と目標に合った費用対効果の高い施策からご提案します。",
  },
  {
    q: "動物病院とペットショップではGBPカテゴリはどう分けるか？",
    a: "動物病院は「動物病院」または「獣医師」をメインカテゴリに選択します。ペットショップ・トリミングサロンは「ペットショップ」「ペットグルーマー」などを業態に応じて使い分けます。同じ施設内で複数の業態を提供している場合は、GBPを業態ごとに分けて登録するか、メインカテゴリを主な収益軸に合わせ、サブカテゴリで補完する方法が有効です。Googleのガイドラインに従いカテゴリを正確に設定することで、各業態での検索ヒット率が上がります。",
  },
  {
    q: "ペットショップのInstagram・SNS活用で人気が出る投稿の特性は？",
    a: "ペット関連の投稿はSNSの中でも特に拡散されやすいカテゴリです。特に効果的なのは、①トリミング前後のビフォーアフター動画（リール）、②表情豊かなペットのアップ写真、③季節コーデ・アクセサリーを着けたペット写真、④スタッフとペットのほのぼのとした日常動画です。一方、販売促進投稿（セール告知・商品紹介のみ）はエンゲージメントが低くなりやすいため、かわいい・面白い・ためになるの3軸で投稿を設計することが重要です。",
  },
  {
    q: "ペット保険対応の動物病院はWebでどう集客するか？",
    a: "ペット保険対応は飼い主にとって来院先の選定基準のひとつです。対応している保険会社名をホームページとGBPに明示することで、保険加入者の来院につながりやすくなります。「アニコム対応」「アイペット対応」などの記載はSEO的にもペット保険で検索するユーザーへのリーチに有効です。また、保険請求の手続きサポートをしている旨をコンテンツで発信することも差別化ポイントになります。",
  },
  {
    q: "ペット種別（犬・猫・鳥・爬虫類）のSEOキーワード戦略は？",
    a: "ペット種別ごとに異なるニーズと検索キーワードが存在します。犬は「犬種別トリミング 費用」「ドッグフード おすすめ」、猫は「猫 ワクチン 時期」「猫 去勢 費用」、鳥は「インコ 病院 近く」、爬虫類は「ヘルマンリクガメ 飼育 専門店」など、種別×悩み×地域の組み合わせでロングテールキーワードを整備することが重要です。専門性の高い生体・種別ページを作ることでSEOと専門ショップとしての信頼性が同時に高まります。",
  },
  {
    q: "トリミング・ペットホテル・訓練教室など複合サービスのWebでの見せ方は？",
    a: "サービスごとに独立したページを設け、それぞれのキーワードで検索されやすい設計にすることが重要です。「ペットホテル 葛飾区」「犬のしつけ教室 東京」など各サービスの検索意図に合わせたページを用意し、トップページからの内部リンクで統合的に見せます。メニューページでは料金・所要時間・予約方法を明確に記載し、複数サービスの同時利用を促すクロスセル導線も設けると効果的です。",
  },
  {
    q: "ペットショップの口コミで獣医師コメントを活用する効果は？",
    a: "獣医師や動物看護師などの資格を持つスタッフのコメントや推薦文をホームページ・SNSに掲載することで、医療的な信頼性が高まります。「獣医師監修のケアメニュー」「皮膚疾患のある子への対応実績」など専門家視点の情報はGoogleのE-E-A-T評価にも寄与し、SEO面でも有利に働きます。また、近隣の動物病院と連携して相互に紹介し合う関係を構築することで、双方の信頼性が高まり集客の相乗効果が生まれます。",
  },
  {
    q: "ブリーダーとペットショップのWeb集客の違いは？",
    a: "ブリーダーは特定犬種・猫種の専門性・血統・飼育環境の透明性が信頼の核心です。ホームページでは親犬・親猫の健康状態・生活環境・子の成長記録を丁寧に開示することが必要です。ペットショップは取り扱い生体の多様性・アフターサポート・ペット用品の品揃えを訴求する設計が向いています。どちらも第一種動物取扱業の登録番号を明示することが法律上必要であり、これをWeb上でも明示することが信頼構築の基本です。",
  },
  {
    q: "動物病院の医療広告ガイドライン上の注意点は？",
    a: "動物病院のWebサイトは医療広告ガイドラインの適用対象外ですが、獣医師法・獣医療法に基づく広告規制があります。「〇〇の専門病院」という標榜は専門医資格を持つ場合のみ許容されます。治療実績・症例写真の掲載は患者（動物）と飼い主の同意が必要です。「〇〇が治る」などの効果保証表現は避け、正確な情報提供を心がけることが重要です。Webコンテンツ制作の際はこれらのガイドラインを踏まえた情報設計が必要です。",
  },
  {
    q: "ペットショップ・トリミングサロンのLINE公式アカウント活用で効果的な配信内容は？",
    a: "定期トリミングのリマインド（前回来店から○週間経過した旨の自動配信）・季節ケアのお知らせ（夏のサマーカット・冬の保湿ケア情報）・誕生日メッセージ・キャンセル枠の空き案内などが効果的です。画一的な一斉配信よりも、来店間隔や担当ペットの種類に応じたセグメント配信がリピート率の向上につながります。LINE公式アカウントの開設・セグメント設定・配信文面の設計もサポートします。",
  },
  {
    q: "ペットショップや動物病院がGoogle検索で見つかりやすくなるための基本施策は？",
    a: "まずGBP（Googleビジネスプロフィール）の完全整備が最優先です。正確なカテゴリ設定・営業時間・電話番号・ウェブサイトURL・写真の充実・口コミへの返信を行います。次にホームページ上でのローカルSEO対策として、サービスページ・スタッフ紹介・対応エリア・料金表を整備します。さらにInstagramなどのSNSと連携させることで、GBP・ホームページ・SNSの三点から地域ユーザーへの露出を高め、安定した集客基盤を構築できます。",
  },
  {
    q: "ペットショップのWebサイトで多言語対応は必要ですか？",
    a: "外国人飼い主の多い都市部・観光エリアでは英語・中国語対応が集客の差別化になることがあります。少なくとも「対応可能言語」をGBPとホームページに記載するだけでも問い合わせ機会が広がります。外国人コミュニティではSNSで口コミが広がりやすいため、InstagramやFacebookで多言語投稿を行うことで、日本語話者以外のペットオーナーへのリーチも高まります。",
  },
  {
    q: "ペットショップ・動物病院のWebリニューアルはどのタイミングで行うべきですか？",
    a: "ホームページがスマートフォンで見づらい・料金表が最新でない・予約フォームがない・写真が古い・GBPとサイトの情報が一致していないといった状態であれば、リニューアルを検討する時期です。リニューアルは全面作り直しでなく、まず予約フォームの追加や写真の更新など部分改善から始めることも可能です。現在のサイトの課題を診断して、優先度の高い改善から段階的に進めるプランをご提案します。",
  },
];

const relatedLinks = [
  { href: "/cases/industry/pet", label: "ペット関連の成功事例", desc: "ペット関連事業のWeb集客成功事例" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/sns/instagram", label: "Instagram運用支援", desc: "ペット写真でフォロワーを集客に転換" },
  { href: "/services/meo", label: "MEO対策サービス詳細", desc: "Googleビジネスプロフィール最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "コンテンツSEOで長期集客" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "ブランド価値を伝えるサイト制作" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域検索に強いSEO対策" },
  { href: "/seo/content-seo", label: "コンテンツSEOとは", desc: "専門コンテンツで長期的な流入を獲得" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "MEO対策の料金目安と内容" },
  { href: "/area/tokyo", label: "東京都内の集客支援", desc: "東京エリア対応の実績" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの集客サポート" },
  { href: "/industries/clinic", label: "クリニック・医療院の集客", desc: "医療系ビジネスのWeb集客" },
  { href: "/industries/local-store", label: "地域店舗向けサービス", desc: "地域密着型店舗の集客" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着業種のSEO入門" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略ガイド", desc: "口コミを継続的に集める仕組み" },
  { href: "/industries/pet-shop/meo", label: "ペットショップのMEO対策", desc: "Googleマップ上位表示で来店増加" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "定期利用促進の仕組み化" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "ペットショップ向けサイト制作" },
  { href: "/sns/photo-direction", label: "SNS写真ディレクション", desc: "映えるペット写真の撮り方・構成" },
  { href: "/industries/hair-salon", label: "美容室・ヘアサロンの集客", desc: "サービス業集客の参考事例" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/contact", label: "無料相談", desc: "ペットショップのWeb集客相談" },
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

export default function PetShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main>
        <section style={{ background: "#f8f6f2", paddingTop: "128px", paddingBottom: "48px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <nav style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "24px" }}>
              <Link href="/" style={{ color: "#6B7280" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/industries" style={{ color: "#6B7280" }}>業種別Web集客</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#0d1b2a" }}>ペットショップ・動物病院</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Pet Shop & Veterinary</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ペットショップ・動物病院のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ペットショップ・動物病院・トリミングサロンは「〇〇駅 トリミング」「近くの動物病院」でGoogleマップ検索されることが多く、MEO対策が特に効果的です。かわいいペットのビフォーアフター写真を活用したInstagram集客、犬種・猫種別のSEOコンテンツとの組み合わせで、新規来店と定期利用の両方を実現します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月19日 09_26_45 (3).jpg" alt="ペットショップ・トリミングサロンのGoogleマップ集客支援イメージ" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ペットショップ・動物病院向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/pet-shop/meo",
                  label: "ペットショップ・動物病院のMEO対策",
                  desc: "「〇〇駅 トリミング」「近くの動物病院」でGoogleマップ上位表示を実現。来店意欲の高い新規顧客を獲得します。",
                },
                {
                  href: "/services/sns",
                  label: "ペットショップのSNS・Instagram運用",
                  desc: "ビフォーアフター写真・施術動画・来店ペット紹介でフォロワーを増やし、定期利用につなげます。",
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
              ペットショップ・動物病院集客でMEOが特に効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "「近くで今すぐ」の検索が多い業種",
                  b: "ペットのトリミング・ペット用品の購入・動物病院への受診は「今日・今週中に」という緊急度の高い検索が多く、Googleマップ上位に表示されるだけで来店につながりやすいです。",
                },
                {
                  n: "02",
                  t: "口コミ数と写真が信頼形成に直結する",
                  b: "ペットを大切にするオーナーは丁寧に選ぶため、口コミの件数・評価・施術写真が来店の判断材料になります。GBPの写真充実と口コミ獲得が集客の核心です。",
                },
                {
                  n: "03",
                  t: "定期利用で高いリピート率を誇る業種",
                  b: "トリミング・爪切り・シャンプー・ワクチン接種など定期的なケアが必要なサービスのため、初回来店から定期顧客への転換が高く、MEO投資のROIが長期で高まります。",
                },
                {
                  n: "04",
                  t: "Instagramとの相乗効果が大きい",
                  b: "かわいいペットの写真はInstagramで自然に拡散され、地域フォロワーからの集客とGoogleマップ評価の向上（訪問者増加による知名度アップ）に相乗効果が生まれます。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客課題 */}
        <section style={{ background: "#f9f8f5", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Common Issues</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ペットショップ・動物病院が抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "専門知識・技術の高さがWebで伝わっていない", b: "「トリマーの資格・経歴」「使用しているシャンプーのこだわり」「犬種ごとの施術方針」など専門性の高い情報がホームページやGBPで発信できていないと、価格だけで比較されやすくなります。専門知識を言語化したコンテンツが信頼と来店の動機づけになります。" },
                { n: "02", t: "施術実績・ビフォーアフターの見せ方が不十分", b: "トリミングサロンの最大の集客資産は施術写真です。Instagramやホームページのギャラリーにビフォーアフターをできるだけ多く掲載し、犬種別・カットスタイル別に整理することで「この店なら安心して任せられる」という信頼をビジュアルで構築できます。" },
                { n: "03", t: "Instagramの投稿が続かず集客につながっていない", b: "かわいいペットの写真はInstagramで最も拡散されやすいコンテンツです。しかし投稿が不定期・ハッシュタグが最適化されていない・予約導線がプロフィールにない、という状態ではフォロワーが増えても集客につながりません。継続的な運用体制とプロフィール設計の最適化が必要です。" },
                { n: "04", t: "定期利用者との接点が薄くリピートが途切れやすい", b: "トリミングは1〜2か月ごとの定期利用が理想ですが、予約の声かけ・リマインド手段がないと自然離脱が起きやすいです。LINE公式アカウントでの定期リマインド・次回予約の同時受付の声かけ・誕生日メッセージなどでペットオーナーとの関係を継続的に維持します。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "18px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスの支援 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Our Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスのペットショップ・動物病院向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO対策", desc: "「○○駅 トリミング」「近くの動物病院」でGoogleマップ上位表示を実現します。GBPの写真・サービス情報の整備・口コミ獲得フロー構築で地域の新規顧客獲得を強化します。" },
                { label: "Instagram・SNS支援", desc: "ビフォーアフター写真の投稿計画・リール動画企画・ハッシュタグ戦略・プロフィール最適化を一括サポートします。かわいいペットコンテンツで地域フォロワーを集客に転換します。" },
                { label: "ホームページ制作", desc: "施術写真ギャラリー・料金表（犬種別）・スタッフ紹介・予約フォームを備えたホームページを制作します。ペットオーナーが安心できる情報設計で問い合わせ率を向上させます。" },
                { label: "コンテンツSEO", desc: "「犬種別トリミング 費用 ○○市」「動物病院 子猫 ワクチン ○○区」など専門性の高いコンテンツページを整備します。飼い主の疑問に答えるコンテンツで信頼と検索流入を同時に高めます。" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#0d1b2a", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.8" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 集客フロー・実装ステップ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Implementation Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "48px" }}>
              初回のヒアリングから継続的な成果創出まで、ペットショップ・動物病院に特化した実装の流れをご紹介します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01",
                  t: "GBP設定（ペット関連カテゴリの最適化）",
                  b: "業態に応じたメインカテゴリ（ペットグルーマー・動物病院・ペットショップ）を正確に設定し、サブカテゴリで複合業態を補完します。営業時間・電話番号・予約リンク・サービスエリアを最適化して検索ヒット率を高めます。",
                },
                {
                  n: "02",
                  t: "ペット種類別ページSEOの整備",
                  b: "犬・猫・鳥・爬虫類など取り扱い種別ごとの専門ページを整備します。「トイプードル トリミング 葛飾区」「猫 ワクチン 近く」など種別×地域のロングテールキーワードで検索流入を獲得します。",
                },
                {
                  n: "03",
                  t: "InstagramとYouTubeでのペット紹介コンテンツ展開",
                  b: "トリミングビフォーアフター動画・スタッフとペットの日常・季節スタイル提案などのコンテンツカレンダーを策定します。InstagramリールとYouTubeショートの両チャンネルで地域フォロワーを増やす体制を整えます。",
                },
                {
                  n: "04",
                  t: "動物病院連携情報の掲載",
                  b: "近隣の動物病院との連携情報・ペット保険対応状況・医療的な皮膚ケアに対応できる旨をページに掲載します。E-E-A-T（専門性・信頼性）を高めるコンテンツとして、獣医師や動物看護師の資格情報も明示します。",
                },
                {
                  n: "05",
                  t: "口コミ獲得フローの設計",
                  b: "施術完了後に飼い主が口コミを書きやすい仕組みを整えます。QRコードカードの作成・LINE経由でのお礼メッセージ＋口コミ誘導文面を整備し、継続的に口コミが積み上がる体制を作ります。",
                },
                {
                  n: "06",
                  t: "LINE公式アカウントの構築と定期利用導線の設計",
                  b: "来店客をLINE友だちに誘導し、次回トリミングのリマインド・季節ケアのご案内・誕生日メッセージを自動配信する仕組みを構築します。リピート離脱防止と定期予約の安定化に直結します。",
                },
                {
                  n: "07",
                  t: "犬種・猫種別ケア情報コンテンツの整備",
                  b: "「チワワのトリミング適正頻度」「長毛猫の自宅ブラッシング方法」「爬虫類の温度管理ガイド」など種別ごとの専門コンテンツを継続的に発信します。飼い主の信頼獲得とSEO流入増加を同時に実現します。",
                },
                {
                  n: "08",
                  t: "月次レポートと定期改善サイクル",
                  b: "GBPの検索表示回数・電話タップ数・Instagramのリーチ・フォロワー数・LINE友だち登録数・ホームページ予約件数を月次でレポートします。数値をもとに施策の優先順位を継続的に見直し改善します。",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "12px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "6px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 成果を測るKPI */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>KPI Metrics</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", maxWidth: "640px", marginBottom: "48px" }}>
              ペットショップ・動物病院のWeb集客では、以下のKPIを定期的に確認し、施策の効果を可視化します。
            </p>
            <div style={{ display: "grid", gap: "0", maxWidth: "760px" }}>
              {[
                {
                  kpi: "GBP 問い合わせ数（電話タップ・ウェブサイトクリック）",
                  where: "Googleビジネスプロフィール管理画面",
                  desc: "GBP経由で電話やウェブサイトへ誘導されたユーザー数であり、MEO施策の直接的な成果を示す最重要KPIです。",
                },
                {
                  kpi: "Webからの購入・予約件数",
                  where: "Google Analytics・予約フォーム管理画面",
                  desc: "ホームページ経由での予約数・商品購入数は集客施策全体の最終成果指標であり、月次で前月比較を行います。",
                },
                {
                  kpi: "Instagram フォロワー数・投稿リーチ数",
                  where: "Instagramプロフェッショナルダッシュボード",
                  desc: "地域フォロワーの増加は潜在顧客の拡大を意味し、各投稿のリーチ数からコンテンツの反応を計測して改善に活かします。",
                },
                {
                  kpi: "口コミ件数・平均評価スコア",
                  where: "Googleビジネスプロフィール管理画面",
                  desc: "口コミの累計数と平均評価はGoogleマップ順位に直接影響し、新規ユーザーの来店判断にも大きく関わります。",
                },
                {
                  kpi: "ホームページセッション数・ページ別流入",
                  where: "Google Analytics・Search Console",
                  desc: "サイト全体の訪問数と犬種別ページ・サービスページへの流入数から、SEOコンテンツの効果を計測します。",
                },
                {
                  kpi: "LINE友だち登録数・リピート予約率",
                  where: "LINE公式アカウント管理画面・予約台帳",
                  desc: "LINE登録者からの再来店率はリテンション施策の効果を示し、長期的な売上安定性を測る指標として重要です。",
                },
              ].map((item) => (
                <div key={item.kpi} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", padding: "20px 0", borderTop: "1px solid #e8e4dc", alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "14px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}>{item.where}</p>
                  </div>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "48px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "32px" }}>
              {[
                {
                  n: "01",
                  t: "ペット業種特有のSNS集客に精通している",
                  b: "ビフォーアフター写真・犬種別コンテンツ・季節トリミング企画など、ペットショップ・動物病院に特化したInstagram運用ノウハウを持っています。一般的なSNS運用代行とは異なり、ペット業種の特性に合わせた戦略を設計します。",
                },
                {
                  n: "02",
                  t: "MEOとSNSを一括して設計・運用できる",
                  b: "Googleマップ経由の新規来店とInstagram経由のファン化・定期利用の両方を、一貫した戦略で設計・実行します。施策がバラバラにならず、一気通貫の集客体制を効率よく構築できます。",
                },
                {
                  n: "03",
                  t: "口コミ獲得の仕組みをオペレーションに組み込む",
                  b: "「施術後に口コミQRカードを渡す」「LINEでお礼メッセージと口コミリンクを送る」など、日々の業務フローに自然に組み込める口コミ獲得の仕組みを設計します。担当者が変わっても継続できる体制を作ります。",
                },
                {
                  n: "04",
                  t: "小規模サロン・個人動物病院でも取り組みやすい段階的な支援",
                  b: "個人経営のトリミングサロンや小規模動物病院でも無理なく始められる段階的な施策提案を行います。まずGBP整備と口コミ獲得から始め、成果を確認しながらSNS運用・ホームページ改善へと展開するプランも対応可能です。",
                },
              ].map((item) => (
                <div key={item.n} style={{ borderTop: "1px solid rgba(196,184,154,0.3)", paddingTop: "24px" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px", letterSpacing: "0.15em" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 対応エリア */}
        <section style={{ background: "#f8f6f2", padding: "48px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Service Area</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.4vw,26px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "16px" }}>対応エリア</h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", maxWidth: "680px" }}>
              葛飾区・足立区・江戸川区・墨田区・荒川区・台東区をはじめ、東京都内全域および埼玉・千葉・神奈川の一部エリアに対応しています。ペットショップ・動物病院・トリミングサロンのWeb集客について、まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ペットショップ・動物病院のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ペットショップ・動物病院のWeb集客ご相談"
          body="MEO対策・Instagram運用・ホームページ制作でペットショップ・動物病院の新規来店と定期顧客を増やします。まずは無料相談からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
