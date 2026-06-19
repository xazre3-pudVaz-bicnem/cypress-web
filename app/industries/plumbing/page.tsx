import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "水道工事・水漏れ修理のWeb集客｜MEO対策で緊急依頼の問い合わせを増やす｜株式会社サイプレス",
  description: "水道工事・水漏れ修理・排水管詰まり対応業者向けWeb集客支援。Googleマップ上位表示（MEO）・地域SEO・ホームページ制作で緊急依頼の問い合わせを増やします。",
  keywords: ["水道工事 MEO対策", "水漏れ修理 集客", "水道業者 Googleマップ", "配管工事 集客", "水道 緊急 MEO"],
  openGraph: {
    title: "水道工事・水漏れ修理のWeb集客｜MEO対策で緊急依頼の問い合わせを増やす｜株式会社サイプレス",
    description: "水道工事・水漏れ修理業者のWeb集客。MEO・ホームページ制作で緊急依頼と通常工事の問い合わせを増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/plumbing" },
};

const faqItems = [
  {
    q: "水道・設備工事業のMEO対策は緊急依頼に有効ですか？",
    a: "非常に有効です。水漏れ・詰まり・水道管破裂などの緊急依頼はGoogleマップで「近くの水道業者」「水道修理 〇〇区 24時間」と即座に検索されます。Googleマップ上位表示が最も直接的に緊急問い合わせにつながります。",
  },
  {
    q: "設備工事業のGBP（Googleビジネスプロフィール）で特に重要な項目は何ですか？",
    a: "電話番号（クリックで即発信できること）・営業時間（24時間対応の場合はその旨を明記）・対応サービスカテゴリ・対応エリアが特に重要です。緊急性の高いユーザーは迷わず電話できる状態を求めており、情報不足は他業者への流出につながります。",
  },
  {
    q: "水道工事業の口コミはどうやって集めますか？",
    a: "工事完了後のフォローアップ（お礼の連絡時に口コミリンクを送付）が最も効果的です。「先日はご利用ありがとうございました。よろしければGoogleにご感想をいただけますか」という一言と共にURL・QRコードを送ることで口コミ率が大幅に向上します。",
  },
  {
    q: "水道・設備工事業のホームページに何を載せるべきですか？",
    a: "対応サービス一覧（水漏れ・つまり・給湯器・リフォームなど）・料金の目安・対応エリア・資格情報（水道工事士・管工事施工管理技士等）・施工事例・緊急時の電話番号が必須です。スマートフォンで即電話できるボタンを目立たせることが特に重要です。",
  },
  {
    q: "地域の水道業者として複数エリアの集客ができますか？",
    a: "はい。主要対応エリアごとにエリアページ（例：/area/葛飾区、/area/足立区）を作成し、「葛飾区 水道工事」「足立区 水漏れ修理」などのキーワードで検索上位を目指す施策が効果的です。MEOの対応エリア設定と組み合わせて実施します。",
  },
  {
    q: "水道業の季節的な集客の増減はありますか？",
    a: "冬場（1〜2月）は凍結による水道管破裂の緊急依頼が増えます。梅雨時期は排水管詰まりが増えます。これらのシーズンに合わせたGBP投稿（凍結対策のお知らせ等）や、予防工事に関するコンテンツ発信が集客に効果的です。",
  },
  {
    q: "大手の水道修理業者に対してどう差別化できますか？",
    a: "地域密着・地元業者・顔の見える対応・適正料金という強みをGBPプロフィール・口コミ・ホームページで前面に出します。大手チェーンは料金の不透明さや対応の画一性への不満が多く、地元業者の丁寧さと安心感を差別化ポイントにできます。",
  },
  {
    q: "リフォーム・増改築も扱っている場合、集客をどう設計しますか？",
    a: "緊急修理（MEO中心）と計画的なリフォーム（SEO・ホームページ中心）でターゲットユーザーが異なります。緊急修理はMEO・電話獲得を最優先、リフォームはSEOとホームページでの施工事例紹介・問い合わせ誘導を重視する二軸設計が効果的です。",
  },
  {
    q: "水道業者のホームページで問い合わせを増やすための最重要施策は？",
    a: "スマートフォンで即電話できるボタン（クリックtoコール）の目立つ配置が最重要です。次に、料金の目安明示・対応エリアの明確化・資格・施工実績の掲載です。緊急性の高いユーザーは「今すぐ連絡できるか」「料金が不明瞭でないか」「本当に対応エリアか」を瞬時に判断するため、この3点を最初に解決するページ設計が問い合わせ率を高めます。",
  },
  {
    q: "地域SEOで「○○区 水道工事」の検索上位に入るにはどうすればいいですか？",
    a: "対応エリアページ（例：葛飾区の水道工事・足立区の排水管清掃）を個別に制作し、地域名＋サービス名のキーワードを含むコンテンツを整備します。GBPのサービスエリア設定・口コミの継続獲得・内部リンク設計と合わせてMEOとSEOを連動させることで地域検索での存在感が高まります。",
  },
  {
    q: "水回り・緊急系ビジネスのMEO対策は通常のMEOと何が違いますか？",
    a: "緊急系ビジネスは「今すぐ」の行動を促すことが最大の目的です。通常のMEOが認知・来店を目的とするのに対し、水道・設備業では即電話・即問い合わせへの導線設計が最優先になります。GBPの電話番号・営業時間・緊急対応表記の正確さが集客の直接的な差になります。",
  },
  {
    q: "GBPで夜間・休日対応をどのように表示させればいいですか？",
    a: "GBPの営業時間設定で24時間・土日祝の対応時間を正確に入力します。さらに「特別営業時間」機能を活用して祝日対応を追加表示することができます。ビジネス説明文（概要欄）にも「年中無休・24時間対応」と記載することで、検索ユーザーへの訴求力が高まります。",
  },
  {
    q: "Googleの地域拡張ターゲティングとは何ですか？",
    a: "Googleの地域拡張ターゲティングとは、設定したサービスエリア外のユーザーにも広告や検索結果を表示させる機能です。水道・設備業の場合、GBPのサービスエリアを適切に設定することで、店舗住所から離れたエリアの検索にもヒットしやすくなります。対応エリアを広めに設定しすぎると関係のない問い合わせが増えるため、実際の対応範囲に合わせた設定が重要です。",
  },
  {
    q: "緊急依頼向けランディングページはどう最適化すればいいですか？",
    a: "ファーストビューに「今すぐ電話する」ボタン・対応エリア・料金目安の3点を必ず配置します。読み込み速度はスマートフォンで2秒以内を目標にし、スクロールなしで電話番号が見える設計が必須です。「24時間対応」「最短〇〇分で現地へ」などの安心情報も冒頭に掲載します。",
  },
  {
    q: "口コミに「緊急時の対応の早さ」を書いてもらうにはどうすればいいですか？",
    a: "工事完了後のお礼連絡で口コミを依頼する際、「特に今回の対応スピードについてご感想をいただけると助かります」と具体的に伝えることで、緊急対応に言及した口コミが増えやすくなります。緊急依頼では対応の速さへの満足度が高いことが多く、素直に体験を書いてもらうことが有効です。",
  },
  {
    q: "水道・設備工事業のWeb集客の費用感を教えてください。",
    a: "MEO対策は月額数万円程度から対応しています。ホームページ制作・ランディングページ制作は規模・内容によって異なります。まずは現状のGBP・ホームページの状態をヒアリングし、費用対効果の高い施策からご提案します。無料相談からお気軽にご連絡ください。",
  },
  {
    q: "水道業者として複数の工種（配管・電気・ガス）を扱う場合、集客ページはどう設計しますか？",
    a: "サービスごとに独立したページを作成し、それぞれのキーワード（「電気工事 ○○区」「ガス工事 ○○市」）で検索されやすい構成にします。トップページはブランド訴求、各サービスページは専門性と問い合わせ導線を重視した設計が効果的です。",
  },
  {
    q: "「〇〇区 水漏れ 緊急」検索で上位表示する方法は？",
    a: "地域名＋サービス名の組み合わせで上位表示するには、GBPのサービスエリア設定・エリアページSEO・口コミの継続獲得の3つを同時に進めることが重要です。「葛飾区 水漏れ 緊急」のような即時依頼キーワードでは、GBPの電話番号の正確さと24時間対応の明示がコンバージョンに直結します。また、エリアページでは「葛飾区の水漏れ修理に即日対応」などの文言を自然に含めたコンテンツを整備します。",
  },
  {
    q: "水道工事業者のGBPカテゴリとエリア設定のポイントは？",
    a: "メインカテゴリは「水道工事業者」または「配管工」が基本です。給湯器交換も行う場合は「給湯器設置サービス」、詰まり除去がメインの場合は「排水管清掃サービス」などをサブカテゴリに追加します。サービスエリアは実際に対応できる区・市を正確に設定し、対応できないエリアの問い合わせを防ぎます。エリアを絞り込むほど関連性スコアが高まりGoogleマップ上位表示につながりやすくなります。",
  },
  {
    q: "水道屋のサイトで「深夜対応」「365日対応」の訴求方法は？",
    a: "ファーストビューに太字・目立つ色で「深夜対応」「365日24時間受付」を明示することが基本です。GBPの営業時間設定でも24時間・土日祝の対応を正確に入力します。ホームページのヘッダー・フッター・LP上部に常時電話番号を表示し、スマートフォンからワンタップで電話できるボタンを複数箇所に配置することで離脱率が下がり問い合わせ獲得率が上がります。",
  },
  {
    q: "水道工事の口コミはどうやって集めるか？",
    a: "工事完了後のお礼メッセージに口コミ依頼リンクを自然な形で添付するのが最も効果的です。「このたびはありがとうございました。よろしければGoogleにご感想をお聞かせください」という文面と短縮URLまたはQRコードをSMSまたはLINEで送ります。現場での口頭の依頼と合わせることで口コミ獲得率がさらに上がります。口コミには必ずオーナー返信を行い、誠実な対応を示すことも重要です。",
  },
  {
    q: "地域密着型水道屋と大手とのWebでの差別化戦略は？",
    a: "大手チェーンへの不満として多いのは「料金が不明瞭」「担当者が毎回変わる」「説明が少ない」などです。地域業者はこれらの逆を強みとして前面に出します。「出張費・作業費の目安を明示」「担当者の顔写真・プロフィール公開」「施工後の説明が丁寧という口コミ」などをGBP・ホームページ・口コミで一貫して発信することで、地域での信頼が積み上がります。",
  },
  {
    q: "水道工事・つまり修理・蛇口交換など作業種別のSEOページ設計は？",
    a: "作業種別ごとに独立したページを設けることが基本です。「水漏れ修理ページ」「排水管詰まりページ」「蛇口交換ページ」「給湯器交換ページ」をそれぞれ作成し、各ページで「料金目安」「対応エリア」「施工事例」「よくある原因」を記載します。内部リンクで各ページをつなぎ、サイト全体の専門性を高めることでSEO評価とユーザーの信頼が同時に向上します。",
  },
  {
    q: "水道屋のコンテンツマーケティング（症状別記事）は集客に有効か？",
    a: "有効です。「台所の排水口が流れない原因と対処法」「トイレがつまったときの応急処置」「蛇口から水が止まらない場合の確認ポイント」など、ユーザーが困ったときに検索するキーワードで記事を作ることで、緊急依頼前の段階からサイトへの流入を増やすことができます。記事内で「解決できない場合はご連絡ください」と自然に問い合わせ導線につなぐことで、ブログからの問い合わせ獲得につながります。",
  },
  {
    q: "建設業許可・水道法指定業者であることのE-E-A-T活用方法は？",
    a: "建設業許可番号・水道法に基づく給水装置工事事業者の指定番号・水道工事士の資格情報をホームページのフッター・会社概要ページ・GBPのビジネス説明文に明示します。これらはGoogleのE-E-A-T（経験・専門性・権威性・信頼性）を高める重要な要素であり、SEO評価にも寄与します。また、悪質業者との差別化として、許可証・資格証のスキャン画像をサイトに掲載することも信頼性の向上に効果的です。",
  },
  {
    q: "水道工事業のホームページで施工事例はどう掲載するのが効果的ですか？",
    a: "施工事例は「症状・原因・作業内容・費用目安・完了後の状態」の5点セットで掲載することが重要です。ビフォーアフター写真を必ず添付し、作業前の問題状況と解決後の状態を視覚的に示します。施工エリア（区・市名）を各事例に明記することで、エリアページとの内部リンクも設計しやすくなります。事例の数が増えるほどサイトの専門性が高まり、SEO評価とユーザーの信頼が同時に向上します。",
  },
  {
    q: "水道工事・水漏れ修理業の集客でSNSは有効ですか？",
    a: "水道・修理業においてSNSは緊急集客には不向きですが、認知向上と信頼構築には活用できます。施工事例のビフォーアフター写真をXやInstagramに投稿することで、地域ユーザーへの認知が広がります。また、「水道トラブルのよくあるサイン」「水漏れを早期発見するポイント」などの予防情報を発信することで、専門家としての信頼が高まります。緊急依頼はMEO・SEOで獲得し、SNSは長期的なブランド構築として位置づけるのが現実的な設計です。",
  },
  {
    q: "水道業者の会社概要ページで信頼性を高めるために必要な情報は？",
    a: "代表者の顔写真・氏名・略歴・創業年・資格情報（水道工事士・管工事施工管理技士・建設業許可番号・給水装置工事事業者指定番号）を必ず掲載します。スタッフの写真と紹介文を加えることで「顔の見える業者」としての信頼が高まります。また、対応エリアの地図・保有車両・使用機材の写真を加えると、ユーザーが依頼前に業者の規模・体制を確認できるため、問い合わせ率の向上につながります。",
  },
  {
    q: "水道工事・水漏れ修理業のWebリニューアルのタイミングはいつが適切ですか？",
    a: "スマートフォンで電話番号がすぐに見えない・ファーストビューにクリックtoコールボタンがない・料金目安の記載がない・対応エリアが不明確・口コミとサイト情報が一致していないといった状態であれば、早急に改善が必要です。全面リニューアルでなく、緊急性の高い問題（電話ボタンの設置・料金目安の追加）から部分改善で対応することも可能です。現在のサイトの診断から始め、投資対効果の高い改善を優先してご提案します。",
  },
];

const relatedLinks = [
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/services/meo", label: "MEO対策サービス詳細", desc: "Googleビジネスプロフィール最適化" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示で集客" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "信頼と問い合わせを高めるサイト制作" },
  { href: "/seo/local-seo", label: "ローカルSEOとは", desc: "地域検索に強いSEO対策" },
  { href: "/seo/content-seo", label: "コンテンツSEOとは", desc: "症状別記事で長期的な流入を獲得" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "MEO対策の料金目安と内容" },
  { href: "/area/tokyo", label: "東京都内の集客支援", desc: "東京エリア対応の実績" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの集客サポート" },
  { href: "/industries/construction", label: "建設業・工務店の集客", desc: "工事系ビジネスの集客参考事例" },
  { href: "/industries/renovation", label: "リフォーム・工務店", desc: "リフォーム集客の支援" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着業種のSEO入門" },
  { href: "/knowledge/content-seo", label: "コンテンツSEOガイド", desc: "症状別・作業別コンテンツ設計の方法" },
  { href: "/knowledge/eeat", label: "E-E-ATとは", desc: "専門性・信頼性でSEO評価を高める方法" },
  { href: "/industries/plumbing/meo", label: "水道・設備工事業のMEO対策", desc: "緊急依頼をGoogleマップで獲得" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "水道業向けサイト制作" },
  { href: "/web-design/landing-page", label: "緊急対応LP制作", desc: "即電話・即問い合わせに特化したページ" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/contact", label: "無料相談", desc: "水道・設備工事業のWeb集客相談" },
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

export default function PlumbingPage() {
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
              <span style={{ color: "#0d1b2a" }}>水道工事・水漏れ修理</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Plumbing & Emergency Repair</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              水道工事・水漏れ修理のWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              水漏れ・詰まり・給湯器交換などの緊急依頼はGoogleマップ検索が圧倒的に多く、MEO対策が最も直接的に問い合わせを増やします。「〇〇区 水道修理」「近くの水道業者」での上位表示を実現して、地域の緊急依頼を確実に獲得します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              計画的な工事・リフォーム案件の集客にはSEOとホームページの整備が有効です。緊急依頼（MEO）と計画工事（SEO）の二軸で、年間を通じた安定した集客体制を構築します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月19日 09_10_12 (8).png" alt="住宅設備の施工作業中の職人 — 水道工事・設備工事のMEO対策・Web集客" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              水道工事・水漏れ修理業者向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/plumbing/meo",
                  label: "水道工事・水漏れ修理のMEO対策",
                  desc: "「水漏れ 〇〇区」「近くの水道業者」でGoogleマップ上位表示を実現。緊急依頼の問い合わせを直接獲得します。",
                },
                {
                  href: "/services/web-design",
                  label: "水道業向けホームページ制作",
                  desc: "スマホから即電話できる設計・対応エリア明記・施工事例・料金表示で信頼と問い合わせ数を向上させます。",
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Why MEO Wins</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              水道工事・水漏れ修理業にMEO対策が特に効果的な理由
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "緊急性の高い検索が多く来店から即依頼になる",
                  b: "「今すぐ直してほしい」という緊急性の高い検索では、Googleマップ上位の業者に即電話する行動パターンが主流です。最短で受注につながる集客チャネルです。",
                },
                {
                  n: "02",
                  t: "電話番号の視認性が顧客獲得を左右する",
                  b: "スマートフォンのGoogleマップではビジネス名の下に「電話する」ボタンが表示されます。GBPに正確な電話番号が設定されているだけで、競合より問い合わせが増えます。",
                },
                {
                  n: "03",
                  t: "24時間対応表示が差別化になる",
                  b: "「24時間対応」「土日祝対応」をGBPに明記することで、緊急性の高いユーザーに選ばれやすくなります。深夜・早朝の問い合わせは特にGoogleマップ経由が多いです。",
                },
                {
                  n: "04",
                  t: "地元業者としての信頼性が口コミで伝わる",
                  b: "Googleの口コミで「丁寧な対応」「料金が明確」「説明がわかりやすい」という評価が積み上がることで、大手チェーンに対する地元業者の信頼が形成されます。",
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
              水道工事・水漏れ修理業が抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "緊急時対応の情報がWebで伝わっておらず問い合わせを逃している", b: "「24時間対応」「最短30分で現地到着」「土日祝対応」など緊急時の安心情報がGBP・ホームページに掲載されていないと、検索したユーザーが他の業者に電話してしまいます。緊急対応の詳細をファーストビューに明示するだけで問い合わせ数が変わります。" },
                { n: "02", t: "料金の不明瞭さで問い合わせ前に離脱している", b: "「見積もり無料」とだけ書いてあって料金目安が不明なサイトは、悪質業者への警戒から問い合わせを躊躇されます。「出張費○○円〜」「水漏れ修理の料金目安」などを掲載することで、ユーザーが安心して問い合わせできる環境を整えます。" },
                { n: "03", t: "資格・技術力が伝わらず信頼性が低く見られる", b: "「水道工事士」「管工事施工管理技士」「給水装置工事主任技術者」などの資格はそのまま信頼の証明です。資格情報・施工実績・代表プロフィールをホームページとGBPで明示することで、悪質業者との差別化と信頼獲得が同時に実現します。" },
                { n: "04", t: "対応エリアが明確でなく地域の顧客に届いていない", b: "「○○区・○○市・○○町対応」というエリア情報がGBPとホームページに記載されていないと、地域検索でのヒット率が下がります。主要対応エリアをページとGBPの両方で明示し、エリア別の地域ページを設けることで地域ごとの検索流入を獲得します。" },
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
              サイプレスの水道工事・水漏れ修理業向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO緊急対応設計", desc: "「水漏れ ○○区 24時間」「排水管詰まり ○○市 今すぐ」でGoogleマップ上位表示を実現します。緊急対応・対応エリア・電話番号を最前面に配置したGBP設計で即問い合わせを獲得します。" },
                { label: "ランディングページ制作", desc: "緊急修理専用LP・給湯器交換LP・定期点検LPなどサービス別の高CV率ランディングページを制作します。スマホ即電話ボタン・料金目安・施工事例・資格情報を最適配置します。" },
                { label: "地域SEO対策", desc: "「葛飾区 水道工事 費用」「足立区 水漏れ修理 緊急」など地域×サービスキーワードを狙ったエリアページ・サービスページを整備します。MEOと連動した地域全体での検索流入を強化します。" },
                { label: "口コミ管理支援", desc: "工事完了後の口コミ依頼フロー（お礼メッセージ＋口コミリンク送付文面）を設計します。全口コミへの返信文面作成代行も対応し、地域密着業者としての信頼を積み上げます。" },
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
              初回ヒアリングから継続的な問い合わせ獲得まで、水道工事・水漏れ修理業に特化した実装の流れをご説明します。
            </p>
            <div style={{ maxWidth: "760px" }}>
              {[
                {
                  n: "01",
                  t: "GBP設定（水道業者カテゴリ・対応エリア明記）",
                  b: "「水道工事業者」「配管工」などの正確なカテゴリ設定と、実際に対応できる区・市を明示したサービスエリアの設定を行います。24時間対応の場合は営業時間を正確に入力し、電話番号をクリックで即発信できる状態にします。",
                },
                {
                  n: "02",
                  t: "緊急時訴求ページの最適化",
                  b: "ホームページのファーストビューに「今すぐ電話する」ボタン・24時間対応の明示・料金目安・対応エリアを配置します。スマートフォンで2秒以内に読み込み完了し、スクロールなしで電話番号が見えるページ設計を実現します。",
                },
                {
                  n: "03",
                  t: "地域名+修理キーワードのSEO整備",
                  b: "「葛飾区 水漏れ修理」「足立区 排水管詰まり」など地域名＋サービス名の組み合わせキーワードでエリアページを作成します。各ページに施工事例・料金目安・対応エリアを掲載してSEO評価を高めます。",
                },
                {
                  n: "04",
                  t: "見積もり無料フォームの設置",
                  b: "緊急依頼以外の計画工事・リフォーム案件向けに、無料見積もりフォームをホームページに設置します。入力項目を最小化（名前・電話番号・作業内容・住所）してフォームの完了率を高めます。",
                },
                {
                  n: "05",
                  t: "口コミ獲得設計の構築",
                  b: "工事完了後のお礼連絡に口コミ依頼を自然に組み込む文面テンプレート・QRコードカードを作成します。「緊急時の対応スピード」「料金の明確さ」など書いてほしい評価軸が口コミに反映されやすい依頼フローを整備します。",
                },
                {
                  n: "06",
                  t: "対応エリアページの整備（MEA連動）",
                  b: "主要対応エリアごとに「○○区 水道工事」「○○市 水漏れ修理」の専用ページを作成します。GBPのサービスエリア設定と連動させることで、MEOとSEOを掛け合わせた地域集客を強化します。",
                },
                {
                  n: "07",
                  t: "トラブル別コンテンツページの整備",
                  b: "「蛇口から水が止まらない原因と修理費用」「トイレつまりの応急処置と業者依頼のタイミング」など症状・トラブル別のコンテンツを作成します。困った時に検索するユーザーへのリーチを増やし、問い合わせ前の段階から信頼を獲得します。",
                },
                {
                  n: "08",
                  t: "月次レポートと定期改善サイクル",
                  b: "GBPの電話タップ数・検索表示回数・ホームページ問い合わせ件数・エリアページの検索流入数を月次でレポートします。数値をもとに施策の優先順位を見直し、緊急依頼と計画工事の両方の問い合わせを継続的に増やします。",
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
              水道工事・水漏れ修理業のWeb集客では、以下のKPIを定期的に確認することで施策の効果と改善の方向性を把握します。
            </p>
            <div style={{ display: "grid", gap: "0", maxWidth: "760px" }}>
              {[
                {
                  kpi: "GBP 問い合わせ・電話タップ数",
                  where: "Googleビジネスプロフィール管理画面",
                  desc: "GBPから直接電話されたユーザー数であり、緊急依頼業種では最も直接的な成果指標です。月次で前月比較を行います。",
                },
                {
                  kpi: "見積もり依頼数",
                  where: "問い合わせフォーム管理・Google Analytics",
                  desc: "Webフォーム経由での見積もり依頼数は計画工事案件の集客効果を示す指標であり、緊急依頼とは別に計測します。",
                },
                {
                  kpi: "緊急検索キーワードでの順位",
                  where: "Google Search Console・MEO計測ツール",
                  desc: "「水漏れ ○○区 緊急」など主要キーワードでのGoogleマップ・検索順位を定期確認し、MEO施策の進捗を把握します。",
                },
                {
                  kpi: "対応エリアページのセッション数",
                  where: "Google Analytics・Search Console",
                  desc: "エリア別ページへの流入数から、地域SEO施策の効果を測ります。新規作成したエリアページの立ち上がりを月次でモニタリングします。",
                },
                {
                  kpi: "口コミ評価・件数",
                  where: "Googleビジネスプロフィール管理画面",
                  desc: "口コミの累積数と平均評価はGoogleマップ順位と新規顧客の信頼形成に直結するため、継続的な獲得施策と返信対応が必要です。",
                },
                {
                  kpi: "受注率（問い合わせ→成約）",
                  where: "社内CRM・受注台帳",
                  desc: "Web経由の問い合わせが実際の受注につながった割合を計測し、問い合わせの質と現場対応の改善に活用します。",
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
                  t: "緊急依頼業種のMEO特性を熟知した設計",
                  b: "水道・設備業は「今すぐ電話したい」という緊急ユーザーへの対応が集客の核心です。電話番号の即見せ配置・24時間対応表記の最適化・緊急キーワードへの対応など、緊急系ビジネスに特化したGBP・LP設計を行います。",
                },
                {
                  n: "02",
                  t: "MEO・SEO・LPを一貫した戦略で設計できる",
                  b: "緊急依頼はMEO、計画工事はSEO・ホームページという二軸の集客戦略を一社で設計・実行します。施策がバラバラにならず、年間を通じた安定した問い合わせ体制を効率よく構築できます。",
                },
                {
                  n: "03",
                  t: "口コミ獲得フローを業務オペレーションに組み込む",
                  b: "工事完了後のお礼連絡に口コミ依頼を自然に組み込む文面・QRカードを設計します。「緊急対応の速さ」「料金の明確さ」など書いてほしい評価軸が口コミに反映されやすい依頼フローを構築します。",
                },
                {
                  n: "04",
                  t: "地域密着業者の信頼を可視化するコンテンツ戦略",
                  b: "資格情報・施工事例・代表プロフィール・建設業許可番号・対応エリアなどを整理して発信することで、悪質業者との差別化と地元業者としての信頼を積み上げます。地域の顧客に「安心して依頼できる業者」として認知される情報設計を行います。",
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
              葛飾区・足立区・江戸川区・墨田区・荒川区・台東区をはじめ、東京都内全域および埼玉・千葉・神奈川の一部エリアに対応しています。水道工事・水漏れ修理業者のWeb集客・MEO対策について、まずはお気軽にご相談ください。
            </p>
          </div>
        </section>

        <FaqSection items={faqItems} heading="水道工事・水漏れ修理のWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="水道工事・水漏れ修理のWeb集客ご相談"
          body="MEO対策・ホームページ制作で緊急依頼と計画工事の問い合わせを増やします。まずは無料相談からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
