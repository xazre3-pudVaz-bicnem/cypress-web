import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "取次店募集｜ホームページ制作・MEO対策・SEO対策の紹介パートナー｜株式会社サイプレス",
  description:
    "株式会社サイプレスの取次店・紹介パートナー募集。知人・顧客をサイプレスに紹介するだけ。MEO対策・SEO対策・ホームページ制作の取次店として活動。制作・保守・運用はサイプレスが全対応。",
  keywords: [
    "取次店 募集 Webマーケティング",
    "紹介パートナー MEO 募集",
    "紹介 SEO対策 パートナー",
    "紹介料 Webマーケティング",
    "副業 紹介 集客支援",
  ],
  openGraph: {
    title: "取次店募集｜ホームページ制作・MEO対策・SEO対策の紹介パートナー｜株式会社サイプレス",
    description: "知人・顧客をサイプレスへ紹介するだけ。制作・保守・運用はサイプレスが全対応。取次店パートナー募集中。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/partner/referral" },
};

const faqItems = [
  {
    q: "取次店（紹介パートナー）とはどのような仕組みですか？",
    a: "知人・顧客・取引先のなかでWeb集客に課題を持つ経営者をサイプレスにご紹介いただく仕組みです。紹介後の提案・制作・保守・運用はすべてサイプレスが担当します。取次店様のご負担は「紹介」だけです。",
  },
  {
    q: "取次店と販売代理店の違いは何ですか？",
    a: "取次店は「紹介するだけ」のシンプルな仕組みです。販売代理店は提案・受注まで担当しますが、取次店はサイプレスに顧客をつなぐことが主な役割です。より気軽に・小さく始められるのが取次店の特長です。",
  },
  {
    q: "取次店になるために必要な条件はありますか？",
    a: "特定の資格・業種・法人格は必要ありません。個人事業主・法人・個人どなたでもご相談ください。Webマーケティングの専門知識も不要です。「中小企業経営者を知っている」「紹介できる接点がある」ことが条件です。",
  },
  {
    q: "紹介のあとは何もしなくていいですか？",
    a: "紹介後の提案・制作・保守・運用・顧客対応はすべてサイプレスが担当します。取次店様は紹介いただいた後、基本的に追加の業務は発生しません。ただし、顧客との関係維持にご協力いただける場合はよりスムーズに進みます。",
  },
  {
    q: "報酬・紹介料の仕組みはどうなっていますか？",
    a: "報酬体系の詳細は個別のご相談の中でご案内します。紹介案件の内容・成約状況などを踏まえて個別に協議させていただきます。まずはお問い合わせください。",
  },
  {
    q: "どのような顧客を紹介できますか？",
    a: "飲食店・美容室・クリニック・歯科・建設業・リフォーム会社・士業・整体院・学習塾・ペットショップなど、Web集客に課題を持つ中小ビジネスであれば業種を問いません。「ホームページをそろそろ作りたい」「Googleマップで上位に出たい」という経営者の紹介歓迎です。",
  },
  {
    q: "紹介先が成約しなかった場合はどうなりますか？",
    a: "成約しなかった場合は報酬は発生しません。紹介していただくこと自体へのご負担はありませんので、気軽にご紹介いただける方を歓迎しています。",
  },
  {
    q: "取次店として活動する地域に制限はありますか？",
    a: "全国対応可能です。サイプレスはオンライン対応のため、地域を問わず紹介いただけます。",
  },
  {
    q: "副業として取次店活動はできますか？",
    a: "はい、可能です。本業・別事業と並行して、既存の人脈から紹介いただく形で副収入を得ることができます。",
  },
  {
    q: "具体的にどのように紹介すればいいですか？",
    a: "「知人にWebマーケの会社を紹介したい」という場合、サイプレスの担当者を直接紹介していただくか、サイプレスへの問い合わせ時に「〇〇さんの紹介」と伝えていただくことでスムーズに連携できます。",
  },
  {
    q: "取次店として活動するためのサポートはありますか？",
    a: "サービス説明の簡易資料・よくある質問への回答集など、紹介に役立つ資料を提供します。専門的な説明が必要な場面では、サイプレスの担当者が三者面談に同席することも可能です。",
  },
  {
    q: "既存の事業とサイプレスのサービスが競合する場合はどうなりますか？",
    a: "サイプレスは中小企業向けのWeb集客（MEO・SEO・ホームページ制作）に特化しているため、既存事業との棲み分けが可能なケースが多いです。詳細はご相談ください。",
  },
  {
    q: "法人として取次店契約はできますか？",
    a: "はい、法人・個人事業主どちらでも対応可能です。詳細は個別にご相談ください。",
  },
  {
    q: "申し込み方法を教えてください。",
    a: "お問い合わせフォームより「取次店・紹介パートナーへの応募」の旨をお知らせください。担当者より2〜3営業日以内にご連絡します。",
  },
  {
    q: "取次店の活動は継続的に行う必要がありますか？",
    a: "継続的な活動義務はありません。紹介できる案件がある時に都度ご紹介いただく形で構いません。気軽に始めていただける仕組みです。",
  },
  {
    q: "紹介するだけでいいですか？商品の説明も必要ですか？",
    a: "基本的に紹介するだけで十分です。「こういうWeb集客の会社があるよ」と伝えていただければ、詳細な説明はサイプレスが行います。簡単な説明に使えるサービス概要資料をご提供しますが、使わなくても問題ありません。",
  },
  {
    q: "紹介案件を複数同時に送ることはできますか？",
    a: "はい、複数案件を同時にご紹介いただけます。案件ごとに担当者が個別に対応します。紹介案件が多い場合はその旨をお知らせください。",
  },
  {
    q: "個人情報の取り扱いについて教えてください。",
    a: "紹介いただく顧客の連絡先情報は、サイプレスへの提案・連絡目的にのみ使用します。詳細はプライバシーポリシーをご確認ください。",
  },
  {
    q: "紹介した後に何も連絡が来ない場合はどうすればいいですか？",
    a: "紹介後の進捗確認はサイプレスの担当者にお問い合わせください。通常2〜3営業日以内に顧客へのコンタクトを行います。",
  },
  {
    q: "親族・友人への紹介も対象になりますか？",
    a: "はい、対象になります。親族・友人・知人で経営者・ビジネスオーナーの方へのご紹介も歓迎しています。",
  },
  {
    q: "取次店と販売代理店、どちらがいいですか？",
    a: "活動のコミットメントが低く、紹介だけしたい方は取次店がおすすめです。継続的に提案・販売活動を行い、収益を大きくしたい方は販売代理店をご検討ください。どちらか迷う場合はお問い合わせにてご相談ください。",
  },
  {
    q: "紹介案件の進捗・状況はどこで確認できますか？",
    a: "紹介後の進捗はサイプレスの担当者にお問い合わせいただければ確認します。定期的に状況をご報告する体制については個別にご相談ください。",
  },
  {
    q: "MEO・SEO・ホームページ制作のどれを紹介すればいいかわかりません。",
    a: "どの商材が適切かはサイプレスが判断します。紹介時に「Web集客に悩んでいる」「ホームページを作りたがっている」程度の情報があれば十分です。詳細なヒアリング・提案はサイプレスの担当者が行います。",
  },
  {
    q: "紹介した案件が断られた（不成約）場合、取次店との関係はどうなりますか？",
    a: "不成約であっても取次店としての関係は継続されます。報酬は成約時のみ発生しますが、不成約の場合にペナルティはありません。紹介いただいたこと自体に感謝しています。",
  },
  {
    q: "最低何件以上紹介しなければならないという義務はありますか？",
    a: "紹介義務・最低件数はありません。紹介できる案件があるときだけ連絡いただければ十分です。継続的な活動義務はないため、副業・本業の隙間時間に行える仕組みです。",
  },
  {
    q: "口頭での紹介だけでも大丈夫ですか？書類は必要ですか？",
    a: "最初は口頭・LINEなどの簡単な連絡で大丈夫です。「○○さんを紹介したい」という旨をサイプレスにお伝えいただければ担当者がご連絡します。契約書類については取次店契約時にご用意します。",
  },
  {
    q: "他のWeb制作会社やSEO会社にも紹介している場合でも参加できますか？",
    a: "サービスが競合しない範囲であれば参加可能です。詳細は個別にご相談ください。複数の会社にまたがった紹介活動については取次店契約時に確認させていただきます。",
  },
  {
    q: "取次店として活動していることを名刺や肩書きに使えますか？",
    a: "「株式会社サイプレス公認パートナー」などの称号の使用については、取次店契約の内容によります。詳細は個別にご相談ください。無断での公認表示は禁止しています。",
  },
  {
    q: "紹介後に顧客との関係を維持し続ける必要がありますか？",
    a: "基本的に維持の義務はありません。ただし、顧客との良好な関係が継続されることでリピート紹介や追加紹介が生まれやすくなります。顧客との接点を持ち続けていただける場合はよりスムーズな連携ができます。",
  },
  {
    q: "取次店の活動内容を顧客に開示する必要がありますか？",
    a: "紹介パートナーとしての関係を顧客に伝えることをお勧めします。透明性を持った紹介活動が顧客との信頼関係を守るうえで大切です。「知り合いの会社を紹介したい」という形での自然な紹介が最も好ましいです。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "取次店・紹介パートナー募集", item: "https://www.cypress-all.co.jp/partner/referral" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ReferralPartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section style={{ background: "#0d1b2a", position: "relative", paddingTop: "128px", paddingBottom: "80px", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/ChatGPT Image 2026年6月14日 21_13_52.png"
              alt="取次店・紹介パートナー ビジネスミーティング風景"
              fill
              className="object-cover"
              sizes="100vw"
              priority
              style={{ opacity: 0.18 }}
            />
          </div>
          <div style={{ position: "relative", zIndex: 10, maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>取次店・紹介パートナー募集</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Referral Partner</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,4.5vw,50px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "28px" }}>
              取次店・紹介パートナー募集
            </h1>
            <p style={{ fontSize: "18px", lineHeight: "1.9", color: "#ffffff", fontWeight: 700, maxWidth: "600px", marginBottom: "16px" }}>
              紹介するだけ。その後の提案・制作・運用は<br />
              サイプレスがすべて担当します。
            </p>
            <p style={{ fontSize: "15px", lineHeight: "1.9", color: "rgba(255,255,255,0.7)", maxWidth: "560px" }}>
              知人・取引先・顧客のなかにWeb集客に課題を持つ経営者がいれば、サイプレスにご紹介ください。提案・制作・保守・運用はサイプレスが一貫して対応します。
            </p>
          </div>
        </section>

        {/* ── 取次店がシンプルな理由 ──────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Why Referral</p>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, lineHeight: 1.3, marginBottom: "28px" }}>
                取次店は「紹介するだけ」の<br />最もシンプルな仕組み
              </h2>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151", marginBottom: "18px" }}>
                販売代理店と違い、取次店はWeb集客の知識・提案スキル・継続的な活動義務が不要です。「この経営者、ホームページ困ってそうだな」「Googleマップ対策を知らなさそうだ」と感じたらサイプレスにつなぐだけ。
              </p>
              <p style={{ fontSize: "15px", lineHeight: "2.0", color: "#374151" }}>
                提案・見積もり・制作・保守・運用報告はすべてサイプレスが担当します。取次店様のご負担はほぼゼロです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 取次店の仕組み ──────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>How It Works</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,34px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              取次店の仕組みはシンプルです
            </h2>
            <div style={{ maxWidth: "720px" }}>
              {[
                { n: "01", t: "知人・顧客に心当たりを見つける", b: "「ホームページが古い」「Googleマップで上位に出たい」「集客が少ない」という経営者の話を聞いたら、サイプレスに紹介するタイミングです。" },
                { n: "02", t: "サイプレスにご紹介・おつなぎいただく", b: "サイプレスの担当者を直接ご紹介いただくか、お問い合わせフォームで「〇〇さんの紹介」として連絡いただく形でOKです。" },
                { n: "03", t: "あとはサイプレスにお任せ", b: "紹介後の提案・見積もり・制作・保守・運用・顧客対応はすべてサイプレスが担当します。取次店様の追加作業は基本的にありません。" },
                { n: "04", t: "成約時に報酬をお受け取り", b: "紹介案件が成約した際に報酬をお受け取りいただきます。報酬体系の詳細はご相談の中でお伝えします。" },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "20px", padding: "24px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "28px", paddingTop: "2px" }}>{item.n}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "16px", color: "#0d1b2a", marginBottom: "8px" }}>{item.t}</p>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.9" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        {/* ── 取次店 vs 代理店 ────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Comparison</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              取次店と販売代理店の違い
            </h2>
            <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: "720px" }}>
              <div style={{ background: "#ffffff", border: "2px solid #0d1b2a", padding: "28px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>取次店（このページ）</p>
                <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px" }}>紹介するだけ・最もシンプル</p>
                {["紹介のみ担当", "提案・受注はサイプレス", "専門知識不要", "副業・兼業向き", "活動義務なし"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#0d1b2a", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "13px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
              </div>
              <div style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "28px" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>販売代理店</p>
                <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "20px" }}>提案・受注まで担当・より積極的な活動</p>
                {["提案・受注まで担当", "制作・保守はサイプレス", "提案スキル・商材知識必要", "継続的に活動したい方向き", "代理店審査あり"].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "10px", padding: "8px 0", borderTop: "1px solid #e8e4dc" }}>
                    <span style={{ color: "#9ca3af", flexShrink: 0 }}>→</span>
                    <p style={{ fontSize: "13px", color: "#374151" }}>{item}</p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #e8e4dc" }} />
                <Link href="/agent" style={{ display: "block", marginTop: "16px", fontSize: "13px", color: "#0d1b2a", textDecoration: "underline" }}>
                  販売代理店の詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── どんな場面で紹介できるか ────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Referral Moments</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              こんな場面で紹介できます
            </h2>
            <div className="grid md:grid-cols-2 gap-5" style={{ maxWidth: "820px" }}>
              {[
                { scene: "顧問先・顧客との会話中", body: "「先生、うちのホームページ古いんですよ」「Googleマップでライバル店が上に出ちゃって」という話が出たとき。「いい会社知ってるよ」と紹介できます。" },
                { scene: "異業種交流会・勉強会の場で", body: "経営者同士の交流の場で「Web集客で困ってる」という話が出たときに、サイプレスのサービスを話題にすることができます。" },
                { scene: "SNS・メッセージでの会話中", body: "LINEやInstagramなどで経営者の知り合いから「集客が難しい」という話を聞いたとき、サイプレスのURLを共有するだけでも紹介になります。" },
                { scene: "名刺交換・初対面の場で", body: "「何かあれば紹介できる会社があります」という話のきっかけとして、サイプレスを伝えることができます。" },
              ].map((item) => (
                <div key={item.scene} style={{ background: "#ffffff", border: "1px solid #e8e4dc", padding: "24px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.scene}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── こんな方に向いている ──────────────────────────────── */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.3)", fontSize: "11px", marginBottom: "14px" }}>Who It&apos;s For</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              こんな方に向いています
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "税理士・社労士・行政書士など士業の方", body: "顧問先・顧客の経営者に「Web集客でお困りでしたら」と一言紹介するだけ。本業の信頼を活かした紹介が可能です。" },
                { title: "経営コンサルタント・ITコンサルタント", body: "Web集客を専門としていなくても、顧問先の課題としてMEO・SEOが浮上した際にサイプレスにつなぐことができます。" },
                { title: "金融・保険・不動産など経営者と接点がある方", body: "多くの中小企業経営者と接点があるビジネスの方は、紹介機会が豊富にあります。副収入としての活動に向いています。" },
                { title: "既存の顧客ベースを持つ営業職・フリーランスの方", body: "既存顧客に「集客の悩みはありませんか？」と聞くだけで紹介案件が生まれます。Web知識不要です。" },
              ].map((item) => (
                <div key={item.title} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "28px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.9" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 紹介できる商材 ──────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "12px" }}>
              紹介できるサービス
            </h2>
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "32px" }}>「こういうサービスが必要そう」という経営者をご紹介ください。詳しい説明はサイプレスが行います。</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: "MEO対策", desc: "Googleマップで上位表示されたい地域ビジネスへ。飲食・美容・クリニック・整体など多くの業種に需要があります。" },
                { label: "SEO対策", desc: "Google検索からの問い合わせを増やしたい企業へ。「競合に検索で負けている」という経営者への紹介が効果的です。" },
                { label: "ホームページ制作", desc: "ホームページが古い・ない・スマホ対応していない企業へ。問い合わせにつながるサイトを制作します。" },
                { label: "AIO対策", desc: "ChatGPT・Geminiなど生成AIに自社情報を引用されたい企業へ。AI検索時代に先手を打ちたい経営者向け。" },
                { label: "AI活用支援", desc: "業務効率化・チャットボット・AI活用に興味がある企業へ。「AIをどう使えばいいかわからない」方への紹介に最適。" },
                { label: "SNS運用支援", desc: "InstagramやLINEで集客したい店舗・サービス業へ。SNSを始めたいが方法がわからない事業者に。" },
              ].map((item) => (
                <div key={item.label} style={{ background: "#f8f6f2", border: "1px solid #e8e4dc", padding: "22px" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", fontWeight: 700, color: "#0d1b2a", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── サポート ───────────────────────────────────────────── */}
        <section style={{ background: "#f8f6f2", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Support</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,3vw,32px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "40px" }}>
              取次店様へのサポート
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "紹介に使えるシンプルな説明資料", body: "「こういう会社です」と一枚で伝えられる資料を提供します。専門用語なしで経営者に説明できる内容にしています。" },
                { n: "02", title: "担当者によるバックアップ", body: "紹介案件についての質問・状況確認はサイプレスの担当者に随時お問い合わせいただけます。" },
                { n: "03", title: "三者商談への同席（必要に応じて）", body: "「同席して説明してほしい」という場合は、サイプレスの担当者が商談に参加します。オンライン対応可能です。" },
              ].map((item) => (
                <div key={item.n} style={{ padding: "28px", background: "#ffffff", border: "1px solid #e8e4dc" }}>
                  <p style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", marginBottom: "10px" }}>{item.n}</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 700, color: "#0d1b2a", marginBottom: "10px" }}>{item.title}</p>
                  <p style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 会社情報 ───────────────────────────────────────────── */}
        <section style={{ background: "#ffffff", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#9ca3af", fontSize: "11px", marginBottom: "14px" }}>Company Info</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.5vw,28px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "32px" }}>運営会社</h2>
            <div style={{ maxWidth: "680px" }}>
              {[
                { label: "会社名", value: "株式会社サイプレス" },
                { label: "代表取締役", value: "織田 春樹" },
                { label: "設立", value: "2026年5月13日" },
                { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                { label: "事業内容", value: "Webマーケティング支援（MEO・SEO・AIO対策）・ホームページ制作・AI活用支援・SNS運用" },
                { label: "お問い合わせ", value: "consulting.meo@gmail.com" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "32px", padding: "14px 0", borderTop: "1px solid #e8e4dc" }}>
                  <span style={{ width: "120px", flexShrink: 0, fontSize: "13px", fontWeight: 600, color: "#0d1b2a" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.8" }}>{row.value}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #e8e4dc" }} />
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="取次店・紹介パートナー募集についてよくある質問" bgColor="#f8f6f2" />

        <PageContactCTA
          heading="取次店・紹介パートナーのご相談はこちら"
          body="「紹介したい案件がある」「取次店として活動してみたい」という方は、お問い合わせフォームよりお気軽にご連絡ください。"
        />
      </main>
      <Footer />
    </>
  );
}
