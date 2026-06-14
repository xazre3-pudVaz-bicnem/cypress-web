import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";

export const metadata: Metadata = {
  title: "代理店募集FAQ｜よくある質問まとめ｜株式会社サイプレス",
  description:
    "サイプレスの販売代理店・取次店募集に関するよくある質問をまとめました。仕組み・報酬・審査・提案方法・商材・サポートなどカテゴリ別に解説します。",
  keywords: [
    "代理店 よくある質問",
    "販売代理店 FAQ",
    "代理店募集 仕組み",
    "Web集客 代理店 質問",
    "サイプレス 代理店",
  ],
  openGraph: {
    title: "代理店募集FAQ｜よくある質問まとめ｜株式会社サイプレス",
    description: "販売代理店・取次店募集のよくある質問。仕組み・報酬・審査・提案方法・商材・サポートをカテゴリ別に解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/agent/faq" },
};

const faqCategories = [
  {
    id: "overview",
    label: "代理店制度の概要",
    items: [
      {
        q: "サイプレスの販売代理店とはどのような仕組みですか？",
        a: "サイプレスのホームページ制作・MEO対策・SEO対策・AIO対策などのWeb集客サービスを、代理店様が中小企業の経営者へ提案・販売する仕組みです。制作・運用・分析・レポートはサイプレスが担当するため、代理店様は販売活動のみに専念いただけます。",
      },
      {
        q: "取次店・紹介パートナーと販売代理店の違いは何ですか？",
        a: "販売代理店は継続的に営業・提案活動を行う事業者様向けです。取次店・紹介パートナーは「知り合いに紹介したい」「来客のついでに話したい」という形で紹介を行う方向けです。取次店は軽いコミットメントで始めやすい形態です。詳しくは個別にご相談ください。",
      },
      {
        q: "どのような企業・個人が代理店になれますか？",
        a: "法人・個人事業主を問わず、中小企業の経営者と接点のある方であればご検討いただけます。IT会社・コンサルタント・税理士事務所・経営支援会社・販促会社・印刷会社など、既存のビジネスとの相性が良い業種の方が多いです。",
      },
      {
        q: "代理店になるための審査はありますか？",
        a: "はい、代理店審査があります。誇大説明・虚偽説明による販売や、顧客に迷惑をかけるような営業活動が懸念される場合は代理店としての契約をお断りすることがあります。顧客への誠実な提案活動ができる方を求めています。",
      },
      {
        q: "代理店として活動する際に必要な資格や許可はありますか？",
        a: "特定の資格や許可は不要です。ただし、個人情報の適切な取り扱い・景品表示法の遵守・誠実な販売活動は必須です。誇大広告・断定的な成果保証は禁止しています。",
      },
      {
        q: "法人でなくてもなれますか？個人事業主でも可能ですか？",
        a: "個人事業主の方でもご応募いただけます。ただし活動の規模・形態によって契約内容が異なる場合があります。まずはお問い合わせください。",
      },
    ],
  },
  {
    id: "products",
    label: "取り扱い商材",
    items: [
      {
        q: "代理店として販売できる商材は何ですか？",
        a: "ホームページ制作・MEO対策（Googleビジネスプロフィール最適化）・SEO対策（内部SEO・コンテンツSEO）・AIO対策（AI検索最適化）・Webサイト保守管理などが主な商材です。",
      },
      {
        q: "複数の商材をセットで提案できますか？",
        a: "はい。ホームページ制作＋MEO対策＋SEO対策などのセット提案が推奨されます。顧客の課題に応じた複合提案は成約率が高く、継続率も高まります。どのようなセット提案が効果的かはサポート資料でご案内します。",
      },
      {
        q: "Webサイトの制作・運用は代理店がやる必要がありますか？",
        a: "いいえ。制作・保守管理・運用はすべてサイプレスが行います。代理店様は販売活動のみご担当いただきます。技術的な知識がなくても活動できます。",
      },
      {
        q: "自社でサービスを提供している場合、競合になりますか？",
        a: "自社でWeb制作やSEOサービスを提供されている会社は、弊社との競合関係になる可能性があります。補完的なポジションで活用いただける方を優先しています。詳しくは個別にご相談ください。",
      },
    ],
  },
  {
    id: "reward",
    label: "報酬・マージン",
    items: [
      {
        q: "代理店の報酬はどのくらいですか？",
        a: "報酬体系の詳細は個別のご相談の中でお伝えします。顧客の成約内容・販売量・契約形態によって個別に協議させていただきます。まずはお問い合わせください。",
      },
      {
        q: "継続収益はありますか？月額フィーが入りますか？",
        a: "継続的なご支援をいただいた場合に収益が継続する形態について個別にご相談します。MEO対策・SEO対策などの月額サービスは長期継続につながりやすい商材です。",
      },
      {
        q: "報酬の支払いタイミングはいつですか？",
        a: "支払いタイミングについては代理店契約書の中で取り決めます。契約前に明確にご案内します。",
      },
      {
        q: "成果保証はありますか？「○件成約したら○万円」という仕組みですか？",
        a: "成果保証型の報酬体系ではありません。顧客への成果保証もしておりません。詳細な報酬構造は個別にご相談ください。",
      },
    ],
  },
  {
    id: "support",
    label: "サポート体制",
    items: [
      {
        q: "代理店になった後のサポート内容を教えてください。",
        a: "提案用資料（サービス説明資料・料金表・事例シート）の提供、商談時の質問対応、顧客との打ち合わせ同席（オンライン）、受注後の顧客引き継ぎサポートを行います。",
      },
      {
        q: "商談に同席してもらえますか？",
        a: "状況に応じてオンライン同席が可能です。重要な商談については事前にご相談ください。",
      },
      {
        q: "提案資料は用意してもらえますか？",
        a: "はい。サービス説明資料・料金案内・事例資料などの提案ツールをご提供します。代理店様のロゴを入れたカスタム版の作成についても個別にご相談いただけます。",
      },
      {
        q: "顧客からクレームが来た場合、どう対応しますか？",
        a: "サービス提供に関するクレーム・問題についてはサイプレスが一次対応します。代理店様経由でご連絡いただいた後、サイプレスから顧客に直接対応します。顧客に誇大説明・虚偽説明があった場合は代理店様の責任となる場合があります。",
      },
      {
        q: "代理店専用の問い合わせ窓口はありますか？",
        a: "はい。代理店様向けの専用担当者をアサインします。商談サポート・資料依頼・進捗確認など、活動中に生じる疑問や依頼は担当者に直接ご連絡いただけます。",
      },
    ],
  },
  {
    id: "process",
    label: "申し込み・審査・契約",
    items: [
      {
        q: "申し込みから代理店活動開始まで、どのくらいかかりますか？",
        a: "お問い合わせから面談・審査・契約・ツール提供まで、通常2〜4週間程度です。審査の結果によっては期間が変わることがあります。",
      },
      {
        q: "代理店審査ではどのようなことを確認しますか？",
        a: "活動実績・顧客接点の有無・誠実な販売活動ができるか・自社ビジネスとの親和性などを確認します。面談（オンライン可）にてお話を聞かせていただきます。",
      },
      {
        q: "契約期間はありますか？途中で辞めることはできますか？",
        a: "契約期間・解約条件については代理店契約書の中で取り決めます。詳細は個別にご案内します。",
      },
      {
        q: "初期費用や月額費用はかかりますか？",
        a: "初期費用・月額費用についての詳細は個別のご相談の中でお伝えします。まずはお問い合わせください。",
      },
      {
        q: "審査に落ちた場合、再度応募できますか？",
        a: "条件が整った段階で改めてご相談いただくことは可能です。なぜ審査が通らなかったかについては面談時にご説明します。再応募の際には事前にご連絡ください。",
      },
    ],
  },
  {
    id: "sales",
    label: "営業・提案活動",
    items: [
      {
        q: "どのように顧客を探せばいいですか？",
        a: "既存のお客様・取引先・知人経営者への紹介から始めるのが最も始めやすい方法です。「ホームページはあるが集客に困っている経営者」「Googleマップ対策を知らない飲食店・美容院」などが典型的なターゲットです。",
      },
      {
        q: "専門知識がなくても提案できますか？",
        a: "はい。「Googleマップで上位表示させる」「GoogleやAIで見つけてもらいやすくする」という基本的な説明ができれば十分です。技術的な詳細はサイプレスのサポート資料と同席商談でフォローします。",
      },
      {
        q: "顧客に成果を保証してしまっても大丈夫ですか？",
        a: "成果保証・断定的な効果保証は禁止しています。「Googleマップで必ず○位になる」「必ず集客できる」という表現は使わないでください。代理店として信頼を維持するためにも、誠実な説明をお願いします。",
      },
      {
        q: "競合他社（他のWeb制作会社・SEO会社）と比較されたらどう答えますか？",
        a: "他社サービスとの比較については正直に「詳しくはサイプレスの担当者と一緒に説明します」とご案内ください。根拠のない優位性の主張はしないようお願いします。",
      },
      {
        q: "一度断られた顧客に再提案してもいいですか？",
        a: "顧客の意向を尊重してください。強引な追いかけは顧客への迷惑になり、代理店としての信頼も損ないます。「タイミングが変わったらお声がけください」という関係維持に留めることをお勧めします。",
      },
    ],
  },
  {
    id: "compliance",
    label: "禁止事項・コンプライアンス",
    items: [
      {
        q: "代理店として禁止されていることはありますか？",
        a: "顧客への虚偽説明・誇大広告・成果保証の断定・個人情報の不正取得・他社商材と並行した二重推奨・代理店契約外のサービスの勝手な販売などが禁止事項です。",
      },
      {
        q: "「必ず集客できます」「Googleマップ1位になれます」と言ってはいけませんか？",
        a: "はい、禁止しています。Webマーケティング施策の効果は保証できないため、断定的な表現は景品表示法上の問題にもなります。「上位表示を目指して施策を行います」という表現に留めてください。",
      },
      {
        q: "顧客から口コミ（Googleレビュー）を書いてほしいと頼まれたら？",
        a: "代理店様が顧客に代わって口コミを書いたり、不正な口コミ投稿を促すことは禁止しています。顧客に「実際のサービス利用者から正直な口コミをお願いする」という正当な方法のみをお伝えください。",
      },
    ],
  },
  {
    id: "customers",
    label: "顧客への対応",
    items: [
      {
        q: "受注後、顧客対応はどうなりますか？",
        a: "受注後はサイプレスが顧客対応を引き継ぎます。制作・施策・レポートはサイプレスが担当します。代理店様が顧客と連絡をとりたい場合はその旨をご連絡ください。",
      },
      {
        q: "顧客に見積りを提示できますか？",
        a: "見積りはサイプレスが作成します。代理店様からはサービス内容の説明・商談を行っていただき、見積り提示のタイミングでサイプレスが対応する流れが基本です。",
      },
      {
        q: "顧客が月額サービスを解約したいと言ってきた場合はどうすれば？",
        a: "解約の申し出はサイプレスの担当者にお知らせください。サイプレスから顧客に状況確認・フォローを行います。代理店様が独断で解約処理を進めることはご遠慮ください。",
      },
    ],
  },
  {
    id: "referral",
    label: "取次店・紹介制度",
    items: [
      {
        q: "販売代理店と取次店はどのような場面で選ぶべきですか？",
        a: "本業の傍ら紹介だけしたい・知り合いに伝えたい・営業組織として動くつもりはないという方は取次店・紹介パートナーをお勧めします。継続的に販売活動を行う場合は販売代理店をご検討ください。",
      },
      {
        q: "取次店として活動する場合、どこまでの知識が必要ですか？",
        a: "「こんなサービスがあります」と紹介できる程度で問題ありません。サイプレスが詳細を説明します。紹介後のフォローはサイプレスが担当します。",
      },
    ],
  },
  {
    id: "contact",
    label: "お問い合わせ・その他",
    items: [
      {
        q: "まず何から始めればいいですか？",
        a: "まずはお問い合わせフォームからご連絡ください。担当者からご連絡し、オンライン面談でサービスの詳細・報酬体系・活動方法をご説明します。",
      },
      {
        q: "代理店の数は増やし続けますか？エリア独占はありますか？",
        a: "代理店数・エリア独占については個別にご相談ください。現時点では全国対応可能です。",
      },
      {
        q: "他のパートナー会社に迷惑がかかることはありますか？",
        a: "代理店様同士が同じ顧客に提案するリスクを避けるためのルールについても個別にご説明します。",
      },
    ],
  },
];

const allFaqItems = faqCategories.flatMap((c) => c.items);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://www.cypress-all.co.jp/" },
    { "@type": "ListItem", position: 2, name: "販売代理店募集", item: "https://www.cypress-all.co.jp/agent" },
    { "@type": "ListItem", position: 3, name: "代理店FAQ", item: "https://www.cypress-all.co.jp/agent/faq" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AgentFaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ background: "#0d1b2a", padding: "80px 0 60px" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <nav style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginBottom: "32px" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.4)" }}>ホーム</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/agent" style={{ color: "rgba(255,255,255,0.4)" }}>販売代理店募集</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span>FAQ</span>
            </nav>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", fontSize: "11px", marginBottom: "16px" }}>Agent FAQ</p>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px,4vw,42px)", color: "#ffffff", fontWeight: 700, lineHeight: 1.2, marginBottom: "24px" }}>
              代理店募集に関する<br />よくある質問
            </h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: "1.9", maxWidth: "560px" }}>
              サイプレスの販売代理店・取次店制度についての疑問にお答えします。カテゴリ別に整理しましたのでご参照ください。
            </p>
          </div>
        </section>

        {/* Category jump */}
        <section style={{ background: "#f8f6f2", padding: "32px 0", borderBottom: "1px solid #e8e4dc" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {faqCategories.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} style={{ fontSize: "12px", color: "#374151", background: "#ffffff", border: "1px solid #e8e4dc", padding: "6px 14px", textDecoration: "none", whiteSpace: "nowrap" }}>
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqCategories.map((cat, ci) => (
          <section key={cat.id} id={cat.id} style={{ background: ci % 2 === 0 ? "#ffffff" : "#f8f6f2", padding: "64px 0" }}>
            <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px,2.5vw,26px)", color: "#0d1b2a", fontWeight: 700, marginBottom: "36px", paddingBottom: "14px", borderBottom: "2px solid #e8e4dc" }}>
                {cat.label}
              </h2>
              <div style={{ maxWidth: "760px" }}>
                {cat.items.map((item, i) => (
                  <details key={i} style={{ borderBottom: "1px solid #e8e4dc", paddingBottom: "0" }}>
                    <summary style={{ padding: "22px 0 22px", cursor: "pointer", listStyle: "none", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{ fontFamily: "var(--font-display)", color: "#c4b89a", fontSize: "11px", minWidth: "16px", paddingTop: "3px", flexShrink: 0 }}>Q</span>
                      <p style={{ fontFamily: "var(--font-serif)", fontSize: "15px", color: "#0d1b2a", fontWeight: 600, lineHeight: "1.6" }}>{item.q}</p>
                    </summary>
                    <div style={{ paddingLeft: "32px", paddingBottom: "22px" }}>
                      <p style={{ fontSize: "14px", color: "#374151", lineHeight: "2.0" }}>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Related links */}
        <section style={{ background: "#f8f6f2", padding: "64px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 32px" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 700, color: "#0d1b2a", marginBottom: "24px" }}>商材別 代理店募集ページ</h2>
            <div className="grid md:grid-cols-2 gap-4" style={{ maxWidth: "680px" }}>
              {[
                { href: "/agent", label: "販売代理店募集トップ" },
                { href: "/agent/web-design", label: "ホームページ制作代理店募集" },
                { href: "/agent/meo", label: "MEO対策代理店募集" },
                { href: "/agent/seo", label: "SEO対策代理店募集" },
                { href: "/agent/aio", label: "AIO対策代理店募集" },
                { href: "/partner/referral", label: "取次店・紹介パートナー募集" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ display: "block", padding: "16px 20px", background: "#ffffff", border: "1px solid #e8e4dc", textDecoration: "none", fontSize: "14px", color: "#0d1b2a", fontFamily: "var(--font-serif)", fontWeight: 600 }}>
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageContactCTA
          heading="代理店についてのご質問・ご相談"
          body="FAQで解決しなかった疑問はお気軽にお問い合わせください。オンライン面談で詳しくご説明します。"
        />
      </main>
      <Footer />
    </>
  );
}
