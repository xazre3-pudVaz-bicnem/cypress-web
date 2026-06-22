import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ネイルサロンのWeb集客｜MEO対策・Instagram運用で新規客と定期予約を増やす｜株式会社サイプレス",
  description: "ネイルサロン向けWeb集客支援。Googleマップ上位表示（MEO）・Instagram運用・ホームページ制作で新規顧客来店と定期予約を増やします。東京都内・全国対応。",
  keywords: ["ネイルサロン MEO対策", "ネイルサロン Instagram", "ネイルサロン 集客", "ネイルサロン Googleマップ", "ネイルサロン ホームページ"],
  openGraph: {
    title: "ネイルサロンのWeb集客｜MEO対策・Instagram運用で新規客と定期予約を増やす｜株式会社サイプレス",
    description: "ネイルサロン向けWeb集客。MEO・Instagram・ホームページで新規顧客来店と定期予約を増やします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/industries/nail-salon" },
};

const faqItems = [
  {
    q: "ネイルサロンの集客にはMEOとInstagramどちらが大切ですか？",
    a: "どちらも重要ですが、役割が違います。Googleマップ（MEO）は「今すぐネイルしたい」という即来店意欲の高いユーザーを獲得でき、InstagramはビジュアルでファンになってもらいSNSフォロワーから定期顧客を育てます。予算があれば両方を並行して行うことが最も効果的です。",
  },
  {
    q: "個人経営のネイルサロンでもMEO対策はできますか？",
    a: "はい。個人サロン・プライベートサロンほどGoogleマップからの集客効果が大きいです。大手チェーンに比べて競合が少なく、Googleビジネスプロフィールの整備・写真充実・口コミ獲得で3〜6ヶ月以内に上位に表示されるケースが多いです。",
  },
  {
    q: "ネイルサロンのInstagramのフォロワーを増やすにはどうすればいいですか？",
    a: "ネイルデザインの仕上がり写真・施術プロセス動画（リール）・季節のトレンドデザイン紹介が最も拡散されます。週2〜3回の定期投稿と地域ハッシュタグ（例：#葛飾区ネイル、#亀有ネイルサロン）の活用でローカルフォロワーを増やせます。",
  },
  {
    q: "ネイルサロンの口コミはどうやって増やしますか？",
    a: "施術後に完成したネイルの写真を撮影する際に、口コミQRコードが印刷されたカードを一緒に渡す方法が効果的です。LINE公式アカウント経由で施術後のフォローメッセージに口コミリンクを添付する方法も口コミ獲得率が高まります。",
  },
  {
    q: "ホットペッパービューティーからの自社予約への移行は可能ですか？",
    a: "はい。まずGoogleビジネスプロフィールの予約ボタン設定と自社ホームページの予約フォームを整備します。既存の顧客にはLINE公式アカウントへの登録を促し、直接予約に誘導することでポータル依存度を段階的に下げられます。",
  },
  {
    q: "ネイルサロンに特化したホームページの制作は可能ですか？",
    a: "はい。ネイルデザインギャラリー・料金表・施術メニュー・ネイリストプロフィール・予約フォームを備えたネイルサロン向けホームページを制作します。SEO対策と組み合わせて検索流入も同時に強化します。",
  },
  {
    q: "季節ごとのトレンドデザインをSNSとGBPに投稿するのは効果的ですか？",
    a: "非常に効果的です。クリスマス・バレンタイン・桜・夏など季節のトレンドデザインはユーザーの検索意欲と一致しており、拡散・保存されやすくなります。GBPへの定期投稿とInstagram投稿を連携することで集客効果が最大化します。",
  },
  {
    q: "ネイルサロンのWeb集客にどのくらいの費用がかかりますか？",
    a: "MEO対策は月額2〜4万円、Instagram運用代行は月額3〜8万円、ホームページ制作は30〜80万円（機能・デザインによる）が目安です。現状のSNSフォロワー数・口コミ数・競合状況に応じて最適なプランをご提案します。まずは無料相談をご活用ください。",
  },
  {
    q: "施術中に写真を撮ってInstagramに投稿するタイミングはいつが良いですか？",
    a: "仕上がり直後のフレッシュな状態で撮影・投稿するのが最も効果的です。お客様の手元・クローズアップショット・全体写真の3パターンを撮影し、施術当日または翌日中に投稿することでエンゲージメントが高まります。施術写真の投稿承諾を事前に丁寧に取ることも信頼構築につながります。",
  },
  {
    q: "ネイルサロンでリピーターを増やすデジタル施策は何ですか？",
    a: "LINE公式アカウントへの登録促進が最も効果的です。次回予約のリマインド・新デザイン告知・限定クーポン配信を通じて来店サイクルを維持します。「4〜6週間ごとのネイルケア」を自然に思い出させるコミュニケーション設計でリピート率の向上を図ります。",
  },
  {
    q: "副業・自宅ネイルサロンでもWeb集客は成立しますか？",
    a: "はい。自宅サロンや週末のみ営業しているサロンでも、Googleビジネスプロフィールの適切なカテゴリ設定と営業時間の正確な記載で集客できます。プライベートサロンならではの「完全個室・マンツーマン施術」という強みをGBP説明文・Instagramで前面に出すことで、大手チェーンにない価値を訴求できます。",
  },
  {
    q: "Googleビジネスプロフィールのカテゴリはどれにすればよいですか？",
    a: "メインカテゴリは「ネイルサロン」が基本です。マツエク・フェイシャルなど複合メニューがある場合はサブカテゴリに追加できます。カテゴリ設定はGoogleマップの検索順位に影響するため、実際のメインサービスに最も近いカテゴリを選択することが重要です。不明な場合はご相談ください。",
  },
  {
    q: "ジェルネイルとスカルプチュアで集客の訴求方法は変わりますか？",
    a: "はい。ジェルネイルは「短時間・自然な仕上がり・付け替えしやすい」、スカルプチュアは「長さ出し・強度・アート映え」という異なる検索意図があります。それぞれのメニューページをGBPとホームページで分けて説明することで、異なるニーズのユーザーを両方獲得できます。",
  },
  {
    q: "男性ネイルやメンズネイルの集客はどうすればいいですか？",
    a: "「メンズネイル」「男性ネイルケア」キーワードはまだ競合が少なく、GBPのサービス項目にメンズ対応を明記するだけで差別化になります。Instagramではメンズネイルの施術写真を定期的に投稿し、男性が来店しやすい雰囲気を発信することで新規顧客層の開拓につながります。",
  },
  {
    q: "競合の多いエリアでネイルサロンとして差別化するには？",
    a: "「得意なデザインジャンル」「使用ジェルブランド」「ネイリストの資格・経歴」「完全予約制・プライベート空間」などの独自性をGBP・ホームページ・InstagramのプロフィールにPINして発信します。口コミの内容にも差別化ポイントが反映されるよう、施術後の会話でサロンの強みを伝えることも大切です。",
  },
  {
    q: "ネイルサロンのInstagramリールはどんな内容が効果的ですか？",
    a: "施術プロセスの早回し動画・デザインのクローズアップ・ビフォーアフターの切り替え動画・季節のトレンド紹介リールが特に再生数・保存数が伸びやすいです。BGMのトレンドを意識した15〜30秒のリールを週1本以上継続することでアルゴリズムの評価が上がります。",
  },
  {
    q: "ネイルサロンのホームページにはどんなコンテンツが必要ですか？",
    a: "デザインギャラリー（ジャンル別・季節別）・メニューと料金表・ネイリストプロフィール・アクセスマップ・予約フォームが必須です。加えて「初めての方へ」の案内ページ・よくある質問・お客様の声を充実させることで、初訪問のユーザーが安心して予約できる情報設計を実現します。",
  },
  {
    q: "ネイルサロンの平均的なLINE公式アカウントの活用方法は？",
    a: "来店後の友達追加促進・次回予約リマインド（3〜4週間後の配信）・季節デザイン告知・誕生日クーポン配信が定番の活用法です。一斉配信よりもセグメント配信（新規・既存・休眠顧客）を意識することでメッセージ開封率と予約転換率が高まります。",
  },
  {
    q: "ネイルサロンの「作品投稿」Instagramはなぜ集客に重要ですか？",
    a: "Instagramはネイルデザインを視覚的に探すユーザーが多いプラットフォームです。施術写真を定期投稿することで「このデザインをお願いしたい」という来店動機を直接生み出せます。ハッシュタグ検索・発見タブ・リール拡散によりフォロワー外のユーザーにもリーチでき、口コミ以上に広い認知獲得が可能です。作品の蓄積自体がポートフォリオとなり、予約前の信頼形成にも機能します。",
  },
  {
    q: "ホットペッパービューティー依存から自社集客に移行する方法は？",
    a: "段階的な移行が現実的です。まずGBP（Googleビジネスプロフィール）と自社ホームページに予約導線を整備し、LINE公式アカウントへ既存顧客を誘導します。その後、ホットペッパーの掲載プランをダウングレードしながらMEOとSNSからの直接流入を増やします。顧客データを自社で管理できるようになることで、ポータル手数料の削減と長期的な収益改善につながります。",
  },
  {
    q: "ジェルネイル・スカルプなどメニュー別のSEO対策は必要ですか？",
    a: "はい、メニュー別のページを作ることでSEO効果が大きく上がります。「ジェルネイル 葛飾区」「スカルプネイル 亀有」など、メニュー名＋地域名の検索に対応するページをホームページ内に用意することで、より具体的なニーズを持つユーザーを直接獲得できます。メニュー特性・料金・デザイン例を掲載したページは滞在時間も長くなりSEO評価が向上します。",
  },
  {
    q: "LINE公式アカウントでネイルサロンのリピーター率を上げる方法は？",
    a: "施術後の「来店お礼メッセージ」と「4週間後のリマインド配信」を自動化することがリピート率向上の基本です。誕生日クーポン・季節の新デザイン告知・限定キャンペーンなどのパーソナライズ配信も効果的です。LINE上で次回予約を完結できる仕組みを整えると、来店サイクルの短縮と顧客の囲い込みにつながります。",
  },
  {
    q: "近隣ネイルサロンとの差別化でWebができることは？",
    a: "Webで差別化できるポイントは多くあります。ネイリストの資格・受賞歴・得意なデザインジャンルをホームページとGBPに掲載する、使用ジェルのブランド・品質へのこだわりを発信する、完全予約制・完全個室などの空間特性を前面に出す、施術写真のスタイルやトーンでブランド世界観を統一するなどが挙げられます。検索で見つかるだけでなく「このサロンに行きたい」と思わせるWebの世界観設計が重要です。",
  },
  {
    q: "ネイル検定・資格のWebでの見せ方でE-E-A-Tは上がりますか？",
    a: "はい。JNECネイリスト技能検定・JNAジェルネイル技能検定などの資格情報、受賞歴、経歴年数などをホームページのネイリストプロフィールページに掲載することは、Googleが重視するE-E-A-T（経験・専門性・権威性・信頼性）の向上に直結します。特にトップページとスタッフページへの資格明記はSEO・MEO双方に好影響を与えます。",
  },
  {
    q: "スクール併設サロンのSEO戦略はどう考えるべきですか？",
    a: "サロンとスクールはターゲットとなる検索キーワードが異なるため、ページを分けて設計することが重要です。「ネイルサロン 葛飾区」ではサロン集客ページ、「ネイルスクール 葛飾区」「ネイリスト資格 通い方」ではスクール専用ページを作成します。両方の集客経路をホームページ内で整備し、GBPのサービス項目にもスクールを追記することで、スクール希望者と施術希望者の両方を獲得できます。",
  },
  {
    q: "ネイルの口コミでビフォーアフター写真を活用する際の注意点は？",
    a: "Googleのポリシー上、施術のビフォーアフター写真を口コミに含めることは問題ありません。ただし掲載するにはお客様の明確な同意が必要です。写真の加工・フィルターによる誇張は避け、自然な仕上がりを正直に伝えることが信頼構築につながります。InstagramのビフォーアフターはGBP口コミとは別に、投稿素材として活用し自社発信としてコントロールする方が安全です。",
  },
];

const relatedLinks = [
  { href: "/cases/industry/beauty-salon", label: "美容室・サロンの成功事例", desc: "サロンのWeb集客成功事例" },
  { href: "/industries/nail-salon/meo", label: "ネイルサロンのMEO対策", desc: "Googleマップ上位表示で来店増加" },
  { href: "/industries/nail-salon/sns", label: "ネイルサロンのSNS運用", desc: "Instagram運用でファンを増やす" },
  { href: "/meo", label: "MEO対策とは", desc: "MEOの基礎知識" },
  { href: "/sns/instagram", label: "Instagram運用とは", desc: "Instagram集客の基礎と実践" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化の詳細" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram運用代行の詳細" },
  { href: "/web-design/corporate-site", label: "コーポレートサイト制作", desc: "サロン向けホームページ事例" },
  { href: "/seo/local-seo", label: "地域SEO対策", desc: "地域名キーワードで上位表示を狙う" },
  { href: "/cost/meo", label: "MEO対策の費用", desc: "料金プランと相場の解説" },
  { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京エリアのWeb集客" },
  { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区エリアの対応" },
  { href: "/industries/hair-salon", label: "ヘアサロン向けサービス", desc: "美容院・ヘアサロンの集客" },
  { href: "/industries/beauty", label: "美容業向けサービス", desc: "エステ・脱毛サロンの集客" },
  { href: "/knowledge/review-strategy", label: "口コミ獲得戦略", desc: "口コミを増やす方法" },
  { href: "/knowledge/sns-marketing-basics", label: "SNSマーケティング基礎", desc: "SNS集客の基礎知識" },
  { href: "/knowledge/instagram-tips", label: "Instagram活用のコツ", desc: "フォロワーを増やす投稿術" },
  { href: "/knowledge/local-seo-guide", label: "ローカルSEOガイド", desc: "地域密着型集客の考え方" },
  { href: "/services/web-design", label: "ホームページ制作サービス", desc: "ネイルサロン向けサイト制作" },
  { href: "/services/line", label: "LINE公式アカウント活用", desc: "リピーター育成・予約リマインド" },
  { href: "/knowledge/google-business-profile", label: "Googleビジネスプロフィール活用", desc: "GBP設定・運用ガイド" },
  { href: "/sns/hashtag", label: "ハッシュタグ戦略", desc: "地域・業種ハッシュタグの使い方" },
  { href: "/meo/beauty-salon-meo", label: "美容サロンのMEO対策", desc: "サロン業界のGBP最適化" },
  { href: "/industries", label: "業種別Web集客一覧", desc: "全業種の集客支援" },
  { href: "/contact", label: "無料相談", desc: "ネイルサロンのWeb集客相談" },
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

export default function NailSalonPage() {
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
              <span style={{ color: "#0d1b2a" }}>ネイルサロン</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Nail Salon</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,4vw,44px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3 }}>
              ネイルサロンのWeb集客
            </h1>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "#374151", marginTop: "20px", maxWidth: "640px" }}>
              ネイルサロンの集客はビジュアル重視のInstagramとGoogleマップ（MEO）の組み合わせが最も効果的です。「〇〇駅 ネイルサロン」の検索からの来店と、Instagramのデザイン投稿からのファン獲得の両方を同時に強化します。
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.9", color: "#374151", marginTop: "16px", maxWidth: "640px" }}>
              個人サロン・プライベートネイルサロン・自宅サロンなど規模を問わず、Webからの集客体制を構築します。ホットペッパービューティーへの依存から脱却したい方のご相談も歓迎します。
            </p>
          </div>
        </section>

        <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <Image src="/ChatGPT Image 2026年6月19日 09_03_13 (4).png" alt="ネイルサロンのMEO対策とInstagram集客支援イメージ" fill className="object-cover" sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(13,27,42,0.45)" }} />
        </section>

        <section style={{ background: "#ffffff", padding: "72px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Key Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ネイルサロン向けサービス
            </h2>
            <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", maxWidth: "900px" }}>
              {[
                {
                  href: "/industries/nail-salon/meo",
                  label: "ネイルサロンのMEO対策",
                  desc: "「〇〇駅 ネイルサロン」「近くのネイルサロン」でGoogleマップ上位表示。来店意欲の高いユーザーを直接獲得します。",
                },
                {
                  href: "/industries/nail-salon/sns",
                  label: "ネイルサロンのSNS・Instagram運用",
                  desc: "デザイン写真・リール動画でフォロワーを増やし、SNS経由の予約を獲得する運用代行サービスです。",
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
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Strategy Points</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              ネイルサロン集客の4つの柱
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "MEO（Googleマップ）で即来店客を獲得",
                  b: "「〇〇駅 ネイルサロン」「近くのネイルサロン」での検索はその日・翌日の予約意欲が高いため、Googleマップ上位表示が直接売上につながります。",
                },
                {
                  n: "02",
                  t: "Instagram・SNSでデザイン見本を発信してファンを育てる",
                  b: "ネイルデザインのビフォーアフター・季節トレンドデザイン・施術動画はInstagramで特に拡散されやすく、フォロワーが定期顧客になる流れを作ります。",
                },
                {
                  n: "03",
                  t: "LINE公式アカウントでリピーター管理を自動化",
                  b: "LINE登録を促し、施術後のフォロー・次回予約リマインド・新デザイン告知を自動配信することでリピート率と客単価を向上させます。",
                },
                {
                  n: "04",
                  t: "ホームページでブランドイメージと信頼を確立",
                  b: "デザインギャラリー・料金表・ネイリストプロフィール・予約フォームを整えたホームページは、SNS・マップからの訪問者を予約に転換する最重要の受け皿です。",
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
              ネイルサロンが抱えるよくある集客課題
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "施術写真の見せ方が集客に活かしきれていない", b: "美しいネイルデザインをInstagramに投稿していても、ハッシュタグ・投稿頻度・リール活用が最適化されていないと地域ユーザーへの露出が限られます。写真の撮影アングル・照明・トリミングの工夫と投稿ルーティンを整えることで、デザインの魅力を集客力に変換できます。" },
                { n: "02", t: "ホットペッパービューティーへの依存で手数料が重い", b: "ポータルサイト経由の集客は安定している一方で、手数料・掲載費が収益を圧迫し、顧客情報も蓄積されません。MEO対策と自社ホームページへの予約導線整備・LINE公式アカウントでの顧客管理を構築することで、段階的に直接予約比率を高める移行が可能です。" },
                { n: "03", t: "リピーター管理ができておらず来店が途切れやすい", b: "ネイルの付け替えは4〜6週間ごとのサイクルがあるにもかかわらず、連絡手段がなく顧客が自然離脱してしまうケースが多いです。LINE公式アカウントへの誘導・施術後の次回予約リマインド・トレンドデザイン告知の自動配信でリピートサイクルを維持します。" },
                { n: "04", t: "予約管理のオンライン化が遅れ機会損失が発生している", b: "電話・DM中心の予約受付は、営業時間外の問い合わせに対応できず予約機会を逃します。自社ホームページの予約フォーム・GBPへの予約ボタン設置・LINE予約の導入により24時間予約受付を可能にし、取りこぼしのない予約体制を構築します。" },
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
              サイプレスのネイルサロン向け支援
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1px", background: "rgba(196,184,154,0.2)" }}>
              {[
                { label: "MEO対策", desc: "「○○駅 ネイルサロン」「○○区 ネイル 予約」でGoogleマップ上位表示を実現します。GBPの写真充実・サービス情報の整備・口コミ獲得フロー構築で地域の来店意欲の高いユーザーを獲得します。" },
                { label: "Instagram・SNS支援", desc: "ネイルデザイン写真の投稿計画・リール動画の企画・ハッシュタグ戦略・フォロワー増加施策を一括してサポートします。Instagram経由の予約導線設計も含めて対応します。" },
                { label: "ホームページ制作", desc: "デザインギャラリー・料金表・ネイリストプロフィール・予約フォームを備えたネイルサロン専用ホームページを制作します。ブランドの世界観を表現した高品質なデザインで差別化します。" },
                { label: "予約システム連携・LINE活用", desc: "自社予約フォームの設置・GBP予約ボタン設定・LINE公式アカウントでのリピーター管理を構築します。次回予約リマインドと新デザイン告知の自動配信でホットペッパー依存からの脱却を支援します。" },
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              集客フロー・実装ステップ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "40px", maxWidth: "640px" }}>
              ネイルサロンのWeb集客は「土台整備 → 露出拡大 → 顧客関係構築」の3フェーズで進めます。各ステップを順番に積み上げることで、持続的な集客の仕組みが完成します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  n: "01",
                  t: "Googleビジネスプロフィール（GBP）の初期整備",
                  b: "サロン名・住所・電話番号・営業時間・カテゴリ設定・予約ボタンを正確に設定します。この土台が整っていないとその後の施策が効果を発揮しません。",
                },
                {
                  n: "02",
                  t: "作品ポートフォリオ写真の整備とGBP登録",
                  b: "サロン内装・ネイリストの施術風景・完成したデザイン写真を10枚以上登録します。季節ごとのデザイン写真を定期的に追加することでGBPの鮮度も維持されます。",
                },
                {
                  n: "03",
                  t: "Instagramアカウントのプロフィール最適化と投稿開始",
                  b: "アカウント名・自己紹介文・予約リンク・ハイライト設定を整備し、週2〜3回の投稿スケジュールを設定します。「どんなデザインが得意か」が一目でわかるプロフィールが予約転換率を高めます。",
                },
                {
                  n: "04",
                  t: "ホットペッパービューティーとの連携・比較対策",
                  b: "ポータル掲載を維持しながら、GBP・自社ホームページ・LINEへの誘導を並行して整備します。直接予約比率が高まった段階でポータルの掲載プランを見直し、手数料負担を段階的に削減します。",
                },
                {
                  n: "05",
                  t: "SEOキーワード設計とホームページコンテンツ整備",
                  b: "「ジェルネイル 葛飾区」「スカルプネイル 亀有」など、メニュー名＋地域名のキーワードで検索されるページをホームページ内に作成します。各メニューの特徴・料金・施術例を掲載して検索流入経路を複数確保します。",
                },
                {
                  n: "06",
                  t: "LINE公式アカウントの開設と友達追加促進",
                  b: "来店客にLINE登録を案内し、施術後のフォローメッセージと次回予約リマインドを設定します。LINEは既存顧客との接点維持に最も効率的なツールです。",
                },
                {
                  n: "07",
                  t: "口コミ獲得フローの構築",
                  b: "施術後にGoogleマップ口コミQRカードを手渡す仕組みを整えます。LINE経由での口コミ依頼メッセージも設定し、来店後1〜2日以内の依頼が獲得率を高めます。",
                },
                {
                  n: "08",
                  t: "月次レポートと季節トレンド連携の定期改善",
                  b: "検索表示回数・マップクリック数・Instagram指標・LINE友だち数を毎月確認します。シーズンごとのトレンドデザイン投稿・GBP投稿・LINE配信を連携させ、集客効果を継続的に最大化します。",
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
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              成果を測るKPI
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "40px", maxWidth: "640px" }}>
              ネイルサロンのWeb集客では、施策ごとに異なる指標を追うことが重要です。以下のKPIを定期的に確認することで、改善ポイントを明確にし、投資対効果を可視化します。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  kpi: "GBP問い合わせ数・電話タップ数",
                  where: "Googleビジネスプロフィール インサイト",
                  desc: "Googleマップ経由でウェブサイトをクリックしたり電話タップしたりしたユーザー数。MEO対策の改善でこの数値が伸びると直接の来店機会が増えます。",
                },
                {
                  kpi: "Instagramフォロワー数・リーチ数",
                  where: "Instagramプロフェッショナルダッシュボード",
                  desc: "フォロワー数の月次推移と投稿ごとのリーチ数を確認します。リール投稿のリーチが特に集客への貢献度が高く、フォロワー外へのリーチを測る重要指標です。",
                },
                {
                  kpi: "ホームページ予約フォーム送信数・問い合わせ数",
                  where: "Google Analytics / フォーム管理ツール",
                  desc: "自社ウェブサイト経由で予約・問い合わせに至ったユーザー数。ポータル依存度を下げるための最重要指標です。CVRが低い場合はフォーム簡素化・CTAの改善が有効です。",
                },
                {
                  kpi: "新規顧客数と既存顧客比率",
                  where: "院内の予約台帳・POSシステム",
                  desc: "毎月の来店客のうち新規と既存の比率を記録します。Web集客強化後に新規比率が高まるほどMEO・SNS施策が機能していることを示します。リピート率の改善はLINE活用の効果測定にも使えます。",
                },
                {
                  kpi: "Google口コミ数・平均評価点",
                  where: "Googleビジネスプロフィール",
                  desc: "口コミ総数と平均評価を毎月記録します。口コミが増えると検索順位の向上と新規ユーザーの来店決断率の改善につながります。返信率も合わせて管理します。",
                },
                {
                  kpi: "LINE友だち登録数・メッセージ開封率",
                  where: "LINE公式アカウント管理画面",
                  desc: "登録者数の推移とメッセージ開封率を確認します。開封率が低い場合は配信内容・タイミング・セグメント設定の見直しが効果的です。リピート予約数との相関も追います。",
                },
              ].map((item) => (
                <div key={item.kpi} style={{ padding: "20px 0", borderTop: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.kpi}</p>
                  <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>計測場所：{item.where}</p>
                  <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サイプレスに依頼するメリット */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Why Cypress</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              サイプレスに依頼するメリット
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                {
                  n: "01",
                  t: "ビジュアル集客とMEOを一体で設計",
                  b: "ネイルサロンはInstagramのデザイン発信とGoogleマップからの来店獲得を分離して考えるのではなく、両チャネルが相互補完する設計が必要です。サイプレスはSNS・MEO・ホームページを一気通貫で支援するため、施策間の整合性が取れた集客体制を構築できます。",
                },
                {
                  n: "02",
                  t: "ネイルサロン特有の予約サイクルに合わせた設計",
                  b: "4〜6週間の付け替えサイクルを見越したリマインド配信設計・LINE活用・口コミ獲得タイミングの最適化は、ネイル業界を熟知した支援でないと設計が難しい領域です。業種特性に合わせた集客フローを提案します。",
                },
                {
                  n: "03",
                  t: "個人サロン・自宅サロンの強みを活かした戦略",
                  b: "大手チェーンとの真っ向勝負ではなく「プライベート空間」「ネイリストとの距離の近さ」「オーダーメイドデザイン対応」といった個人サロンの強みをWebで正しく発信する戦略設計が得意です。",
                },
                {
                  n: "04",
                  t: "葛飾区・東京都内の地域集客に精通",
                  b: "東京都葛飾区に拠点を置くサイプレスは、地域の競合状況・ユーザーの検索傾向・地域性を踏まえたローカルSEO・MEO設計が可能です。「〇〇駅 ネイルサロン」で選ばれる存在になるための地域密着型支援を行います。",
                },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", border: "1px solid rgba(196,184,154,0.25)" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px", letterSpacing: "0.15em" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 料金の目安・相談の流れ */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "12px" }}>Pricing & Flow</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              料金の目安と相談の流れ
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9", marginBottom: "40px", maxWidth: "640px" }}>
              サイプレスのネイルサロン向け支援は、現状の集客課題・予算・優先順位に合わせてプランをカスタマイズしています。まずは無料相談で現状をお聞かせください。
            </p>
            <div style={{ maxWidth: "720px" }}>
              {[
                {
                  label: "MEO対策（GBP運用）",
                  price: "月額 2〜4万円〜",
                  desc: "Googleビジネスプロフィールの初期整備・定期投稿・インサイト分析・競合モニタリングを含むMEO継続支援プランです。",
                },
                {
                  label: "Instagram・SNS運用代行",
                  price: "月額 3〜8万円〜",
                  desc: "投稿コンテンツの企画・制作・投稿・ハッシュタグ選定・エンゲージメント分析を含むSNS運用代行プランです。",
                },
                {
                  label: "ホームページ制作",
                  price: "30〜80万円〜（プランによる）",
                  desc: "デザインギャラリー・料金表・予約フォーム・SEO対策を含むネイルサロン専用ホームページ制作プランです。",
                },
                {
                  label: "LINE公式アカウント構築・運用",
                  price: "初期設定 5万円〜 / 月額運用 1〜3万円〜",
                  desc: "LINE公式アカウントの開設・自動返信設定・リマインド配信設計・セグメント配信設定を含む構築・運用支援プランです。",
                },
                {
                  label: "MEO＋SNS＋LINE 統合プラン",
                  price: "月額 6〜12万円〜（要相談）",
                  desc: "MEO対策・Instagram運用・LINE管理を一括で対応する統合プランです。施策間の連携を最大化した上で、効率的な集客体制を構築します。",
                },
              ].map((item) => (
                <div key={item.label} style={{ padding: "20px 0", borderTop: "1px solid #e8e4dc", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "15px", color: "#0d1b2a", marginBottom: "4px" }}>{item.label}</p>
                    <p style={{ fontSize: "12px", color: "#c4b89a", fontFamily: "var(--font-display)", letterSpacing: "0.05em", marginBottom: "8px" }}>{item.price}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <Link href="/contact" style={{ display: "inline-block", background: "#0F172A", color: "#ffffff", padding: "14px 32px", fontSize: "13px", fontFamily: "var(--font-display)", letterSpacing: "0.1em", textDecoration: "none" }}>
                無料相談はこちら →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ネイルサロンのWeb集客についてよくある質問" bgColor="#ffffff" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ネイルサロンのWeb集客ご相談"
          body="MEO対策・Instagram運用・ホームページ制作でネイルサロンの新規来店と定期予約を増やします。まずは無料相談からお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
