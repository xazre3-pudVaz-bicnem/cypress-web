import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "経営理念・ミッション・ビジョン・バリュー | 株式会社サイプレス",
  description: "株式会社サイプレスの経営理念。ミッション「地域企業が、正しく選ばれる仕組みをつくる」、ビジョン、バリュー、行動指針10条を詳しくご紹介します。",
  keywords: [
    "経営理念",
    "ミッション",
    "ビジョン",
    "バリュー",
    "株式会社サイプレス",
    "行動指針",
    "企業文化",
    "中小企業支援",
    "デジタルマーケティング",
  ],
  openGraph: {
    title: "経営理念・ミッション・ビジョン・バリュー | 株式会社サイプレス",
    description: "株式会社サイプレスの経営理念。Mission・Vision・Value・行動指針10条。地域企業が正しく選ばれる仕組みをつくる。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/philosophy" },
};

const SITE_URL = "https://www.cypress-all.co.jp";

const CRUMBS: Crumb[] = [
  { name: "ホーム", href: "/" },
  { name: "会社情報", href: "/company" },
  { name: "経営理念" },
];

const MISSION_VISION = [
  {
    label: "Mission — 使命",
    title: "地域企業が、正しく選ばれる仕組みをつくる。",
    body: "素晴らしい技術や想いがあるのに、デジタルの壁に阻まれて届いていない。その構造を、集客の仕組みから変えます。",
  },
  {
    label: "Vision — ビジョン",
    title: "AIとWebの力で、地域経済を再生する。",
    body: "予算の多寡ではなく、知識と仕組みの差を埋める。地域の優れた企業が、大企業と対等に選ばれる社会を目指します。",
  },
];

const VALUES = [
  {
    num: "01",
    title: "誠実さ（Integrity）",
    body: "できないことはできないと伝え、根拠のない期待を持たせない。データに基づいた正直なコミュニケーションが、すべての信頼関係の土台です。",
  },
  {
    num: "02",
    title: "革新（Innovation）",
    body: "現状維持は後退だと捉えます。SEO・MEO・AIの最新動向を常にキャッチアップし、クライアントが市場変化に取り残されないよう先行して動きます。",
  },
  {
    num: "03",
    title: "成長（Growth）",
    body: "クライアントの成長と自社の成長は表裏一体です。支援を通じて事業が前進するたびに、私たちも知識・技術・人間力を磨き続けます。",
  },
  {
    num: "04",
    title: "共創（Co-creation）",
    body: "クライアントに施策を押し付けるのではなく、共に考え、共に設計し、共に動く。お客様の事業への深い理解なくして、本質的な支援はできません。",
  },
  {
    num: "05",
    title: "専門性（Expertise）",
    body: "MEO・SEO・AIO・Web制作・SNS・AIという各領域で、常に深い専門知識を持ち続けます。表面的な知識ではなく、現場で機能する実践知を重視します。",
  },
  {
    num: "06",
    title: "透明性（Transparency）",
    body: "施策の内容・進捗・成果・課題をすべてクライアントと共有します。ブラックボックスをなくし、クライアントが自ら判断できる情報環境を維持します。",
  },
  {
    num: "07",
    title: "継続（Continuity）",
    body: "Webマーケティングは一度やって終わりではありません。継続的に改善を積み重ねることで成果が定着します。長期的な伴走を前提とした支援体制を維持します。",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    title: "クライアントの事業理解を最優先にする",
    body: "施策を提案する前に、クライアントの業界・競合・顧客・強みを徹底的に理解します。表面的な依頼の背後にある本質的な課題を捉えることが、的確な支援の出発点です。",
  },
  {
    num: "02",
    title: "数値で考え、数値で語る",
    body: "印象や感覚ではなく、データと根拠をもとに施策を設計・評価します。成果の定義を事前に明確にし、定期的に数値を確認しながら改善を繰り返します。",
  },
  {
    num: "03",
    title: "できないことを正直に伝える",
    body: "受注のために過度な期待を持たせることはしません。実現可能な目標を設定し、そのうえで全力を尽くします。誠実さは短期的な機会損失より長期的な信頼を生みます。",
  },
  {
    num: "04",
    title: "施策の根拠を必ず説明する",
    body: "「これをやってください」ではなく、「なぜこれをやるべきか」を必ず伝えます。クライアントが施策の意味を理解することで、より良いフィードバックと継続的な改善が生まれます。",
  },
  {
    num: "05",
    title: "最新技術を常にアップデートする",
    body: "SEO・MEO・AIOの技術環境は急速に変化します。学習を止めた時点で、クライアントへの価値提供は劣化し始めます。継続的なインプットを怠らず、常に最前線の知識を持ちます。",
  },
  {
    num: "06",
    title: "報告・連絡・相談を怠らない",
    body: "問題が発生したとき、または発生しそうなときは、速やかにクライアントへ共有します。情報を抱え込まず、早期に対話することで、共に最善策を見つけます。",
  },
  {
    num: "07",
    title: "地域ビジネスの現実に寄り添う",
    body: "大企業向けの施策をそのまま中小企業に当てはめることはしません。限られた予算・人員・時間の中で、最も効果的な選択をともに考える現実的な姿勢を大切にします。",
  },
  {
    num: "08",
    title: "AI・テクノロジーを道具として使いこなす",
    body: "AIはあくまで道具です。クライアントへの価値を高めるために積極的に活用しますが、人間のコミュニケーションと判断力を代替させることはしません。テクノロジーと人間性の両立を図ります。",
  },
  {
    num: "09",
    title: "長期的な関係を前提に行動する",
    body: "一回の取引で終わる関係ではなく、継続的に信頼を積み重ねる関係を目指します。目先の利益より、長期的なクライアントの成功を優先した提案を行います。",
  },
  {
    num: "10",
    title: "社会への貢献を忘れない",
    body: "地域の優れた企業が正しく選ばれることは、消費者にとっても社会にとっても良いことです。私たちの仕事は、単なる集客支援を超えて、地域経済の健全な発展に貢献するものだと捉えます。",
  },
];

// 「なぜ、この理念が生まれたか」の原文。要約の下に折りたたんで表示する。
const WHY_PARAGRAPHS = [
  "2026年5月、東京都葛飾区に株式会社サイプレスを設立したとき、私たちが最初に決めたのは、「何のための会社か」という問いへの答えでした。",
  "地域の中小企業・個人事業主と話すなかで、繰り返し同じ現実を目にしてきました。腕がある、サービスが丁寧、地域に根ざした信頼がある。それなのに、インターネットで検索しても出てこない。Googleマップでも上位に表示されない。その結果、知名度と予算のある企業に顧客を奪われ続けている現実。",
  "これは実力の差ではなく、デジタルマーケティングの知識と仕組みの差です。この差を埋めることに本質的な価値があると確信したとき、ミッション「地域企業が、正しく選ばれる仕組みをつくる」が生まれました。",
  "ビジョン「AIとWebの力で、地域経済を再生する」は、そのミッションを長期的な視点で語ったものです。AIの台頭により、中小企業でも大企業並みの情報発信ができる時代が到来しつつある。この転換期に正しいツールと知識を届けることが、地域経済の構造を変える力を持ちます。",
  "7つのバリューと10の行動指針は、この理念を日々の仕事に落とし込んだものです。大きな言葉を掲げるだけでなく、毎日の意思決定と行動のなかに理念を生きさせることを、私たちは最も大切にしています。",
];

const FAQ_ITEMS = [
  {
    q: "サイプレスのミッションはどのような意味ですか？",
    a: "「地域企業が、正しく選ばれる仕組みをつくる」とは、技術・サービス・想いを持ちながらもデジタルの壁に阻まれて顧客に届けられていない中小企業が、MEO・SEO・AIOを通じて正当に評価される環境を整備することを指します。",
  },
  {
    q: "理念と実際のサービスはどのようにつながっていますか？",
    a: "ミッションを体現するために、MEO・SEO・AIO・Web制作・SNS運用・AI活用という6つのサービスを設計しています。どれも「デジタルで見えにくい中小企業の価値を可視化する」という一貫した目的のもとに提供しています。",
  },
  {
    q: "行動指針10条はどのように日常業務に反映されていますか？",
    a: "施策提案・クライアントとの打ち合わせ・レポート作成・新技術の学習など、あらゆる場面で行動指針を意思決定の基準としています。特に「数値で考える」「根拠を説明する」「誠実に伝える」は日常的に意識している行動規範です。",
  },
  {
    q: "バリューの中で最も重視しているものはどれですか？",
    a: "7つのバリューはすべて同等に重要ですが、「誠実さ」はすべての土台となる価値観です。誠実さがなければ、革新も成長も共創も長続きしません。信頼関係の構築が私たちの仕事の起点だと考えています。",
  },
  {
    q: "理念に基づいて断ることはありますか？",
    a: "はい。成果が見込めない施策の押し売り、根拠のない保証が必要な依頼、倫理的に問題のある手法を求められる案件についてはお断りすることがあります。理念に反する受注は、クライアントにも会社にも不誠実だと考えています。",
  },
  {
    q: "会社設立から日が浅いですが、信頼できますか？",
    a: "2026年5月の設立以来、実績を積み重ねている段階です。設立間もないからこそ、一社一社のクライアントと真剣に向き合い、実績と信頼を誠実に積み上げることを最優先にしています。実績の規模より姿勢の誠実さでご判断いただけると幸いです。",
  },
  {
    q: "透明性という価値観は具体的にどのような形で現れますか？",
    a: "施策の内容・根拠・進捗・数値・課題をすべてクライアントと共有します。月次レポートや定期ミーティングを通じて、何が起きているかをわかりやすく伝えます。クライアントが自ら判断できる情報環境を維持することが透明性の実践です。",
  },
  {
    q: "「共創」という言葉が理念に含まれていますが、クライアントにも参加が必要ですか？",
    a: "強制ではありませんが、クライアントが自社の強み・課題・顧客像を共有してくださることで、より精度の高い施策設計が可能になります。丸投げも承りますが、対話を通じて共に考えることで成果の質が高まります。",
  },
  {
    q: "「継続」という価値観は、長期契約を前提とした営業手法ではないですか？",
    a: "継続的な改善によってこそ成果が定着するというのが私たちの考えです。ただし、長期契約を強要することはなく、状況に応じた柔軟な対応を心がけています。解約や施策変更についても誠実にご相談に応じます。",
  },
  {
    q: "専門性という価値観は、一つの領域に絞るということですか？",
    a: "いいえ。MEO・SEO・AIO・Web制作・SNS・AIという複数の領域すべてで専門性を維持することを目指しています。各領域は相互に関連しており、統合的な専門性こそが中小企業への包括的な支援を可能にします。",
  },
  {
    q: "地域への貢献という理念は、どのエリアを想定していますか？",
    a: "東京都葛飾区を拠点とし、東京都・神奈川・埼玉・千葉を主な対応エリアとしています。全国対応も可能ですが、特に地元・首都圏の中小企業・地域ビジネスへの貢献を重視しています。",
  },
  {
    q: "AI活用支援も理念と一致していますか？",
    a: "はい。AIを使って業務効率を上げることで、中小企業が情報発信や顧客対応に注力できる時間が生まれます。その時間がSEO・MEO・AIOの強化につながり、最終的に「正しく選ばれる」状態への到達を早めます。",
  },
  {
    q: "サイプレスの企業文化はどのようなものですか？",
    a: "「正直に動く、深く考える、誠実に届ける」を日々の行動指針としています。クライアントに対してもチーム内に対しても、根拠のある対話を大切にする文化を育てています。",
  },
  {
    q: "採用の際にも理念が重視されますか？",
    a: "はい。スキルとともに、価値観や仕事への姿勢を重視しています。誠実さ・専門性への向上心・クライアントへの共感が、採用において特に大切にしているポイントです。",
  },
  {
    q: "理念について直接話を聞くことはできますか？",
    a: "お問い合わせフォームまたはメール（info@cypress-all.co.jp）からご連絡いただければ、代表が直接対応いたします。理念に共感していただいた方からのご連絡をとりわけ歓迎しています。",
  },
];

const RELATED_LINKS = [
  { href: "/company/message", label: "代表メッセージ", desc: "織田春樹からのメッセージ" },
  { href: "/company/profile", label: "会社概要", desc: "設立・所在地・事業内容" },
  { href: "/company/value", label: "私たちの価値観", desc: "大切にしていること" },
  { href: "/company", label: "会社情報トップ", desc: "サイプレスについて" },
  { href: "/services/seo", label: "SEO対策", desc: "検索順位の改善" },
  { href: "/services/meo", label: "MEO対策", desc: "Googleマップ集客" },
  { href: "/services/aio", label: "AIO対策", desc: "AI検索への最適化" },
  { href: "/services/web-design", label: "ホームページ制作", desc: "Next.js × 高速サイト" },
  { href: "/services/sns", label: "SNS運用", desc: "Instagram・Google投稿" },
  { href: "/services/ai", label: "AI活用支援", desc: "業務効率化・自動化" },
  { href: "/services", label: "サービス一覧", desc: "全施策の概要" },
  { href: "/contact", label: "お問い合わせ", desc: "無料相談・見積もり" },
  { href: "/blog", label: "ブログ", desc: "SEO・MEO・AIO情報" },
  { href: "/cases", label: "事例・実績", desc: "支援事例の紹介" },
  { href: "/faq", label: "よくある質問", desc: "ご利用前の疑問を解決" },
  { href: "/pricing/web-growth-package", label: "料金プラン", desc: "費用・プラン案内" },
  { href: "/recruit", label: "採用情報", desc: "一緒に働く方を募集" },
  { href: "/area/tokyo", label: "東京都の対応エリア", desc: "都内全域対応" },
  { href: "/area/kanagawa", label: "神奈川の対応エリア", desc: "横浜・川崎など" },
  { href: "/area/saitama", label: "埼玉の対応エリア", desc: "さいたま市ほか" },
];

/** 「誠実さ（Integrity）」を和文と英語に分ける */
function splitTitle(title: string) {
  const m = title.match(/^(.+?)（(.+)）$/);
  return m ? { ja: m[1], en: m[2] } : { ja: title, en: "" };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/company/philosophy#webpage`,
      url: `${SITE_URL}/company/philosophy`,
      name: "経営理念 | 株式会社サイプレス",
      inLanguage: "ja",
      about: { "@id": `${SITE_URL}/#organization` },
    },
    breadcrumbJsonLd(CRUMBS, "/company/philosophy"),
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function PhilosophyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={CRUMBS}
          eyebrow="Philosophy"
          title="経営理念"
          catchCopy="良い企業が、正しく評価される世界へ。"
          lead="私たちが何のために存在し、どこを目指し、どう行動するか。サイプレスの考え方の根っこです。"
        />

        {/* Mission / Vision */}
        <section aria-label="ミッションとビジョン" className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
          <div aria-hidden="true" className="absolute -right-40 -top-20 h-[520px] w-[820px] rounded-full bg-accent/25 blur-[140px]" />
          <Container className="relative">
            <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 lg:grid-cols-2">
              {MISSION_VISION.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.08} className="bg-navy-900 p-8 md:p-12">
                  <p className="eyebrow text-cyan">{m.label}</p>
                  <h2 className="mt-6 text-[28px] font-bold leading-snug !text-white md:text-[36px]">{m.title}</h2>
                  <p className="phrase mt-6 max-w-lg text-[15.5px] leading-[1.95] text-white/70">{m.body}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Values */}
        <Section tone="white" labelledBy="philosophy-values">
          <SectionHeading
            id="philosophy-values"
            eyebrow="Values"
            title="7つのバリュー"
            lead="日々の仕事で、判断の基準にしている価値観です。"
          />
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const t = splitTitle(v.title);
              return (
                <Reveal as="li" key={v.title} delay={(i % 4) * 0.04} className="bg-white p-7">
                  <span className="t-num text-[13px] font-semibold text-accent">{v.num}</span>
                  <h3 className="mt-3 text-[19px] font-bold">{t.ja}</h3>
                  {t.en && <p className="font-en text-[12px] tracking-[0.08em] text-subtle">{t.en}</p>}
                  <p className="phrase mt-3 text-[14px] leading-[1.85] text-muted">{v.body}</p>
                </Reveal>
              );
            })}
          </ol>
        </Section>

        {/* Principles */}
        <Section tone="surface" labelledBy="philosophy-principles">
          <SectionHeading
            id="philosophy-principles"
            eyebrow="Principles"
            title="行動指針10条"
            lead="バリューを毎日の行動に落とし込んだ10の指針です。開くと内容を読めます。"
          />
          <ol className="grid gap-3 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p.num}>
                <details className="group h-full rounded-2xl border border-line bg-white open:border-accent/30">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="t-num text-[14px] font-semibold text-accent">{p.num}</span>
                    <span className="flex-1 text-[15.5px] font-bold leading-snug text-ink">{p.title}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                      <svg viewBox="0 0 12 12" className="h-3 w-3">
                        <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 pb-6 pl-[3.25rem] text-[14.5px] leading-[1.9] text-ink-2">{p.body}</p>
                </details>
              </li>
            ))}
          </ol>
        </Section>

        {/* Why */}
        <Section tone="white" labelledBy="philosophy-why">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
            <div>
              <p className="eyebrow mb-4 text-accent">Why This Philosophy</p>
              <h2 id="philosophy-why" className="t-h2">
                なぜ、この理念が生まれたか
              </h2>
            </div>
            <div>
              <p className="t-lead text-ink-2">
                腕がある、サービスが丁寧、地域の信頼もある。それなのに、検索しても見つからない。これは実力の差ではなく、デジタルマーケティングの知識と仕組みの差です。この差を埋めることに価値があると確信して、理念が生まれました。
              </p>
              <details className="group mt-8 rounded-3xl border border-line bg-surface open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">設立の背景を詳しく読む</span>
                  <span className="hidden group-open:inline">閉じる</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 12 12" className="h-3 w-3">
                      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="space-y-4 px-6 pb-8 pt-2 md:px-8">
                  {WHY_PARAGRAPHS.map((p) => (
                    <p key={p} className="text-[15px] leading-[2] text-ink-2">
                      {p}
                    </p>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </Section>

        <FaqSection items={FAQ_ITEMS} heading="経営理念に関するよくある質問" bgColor="#F4F6FA" initialCount={6} />
        <RelatedPages links={RELATED_LINKS} />
        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
