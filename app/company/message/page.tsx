import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/shared/FaqSection";
import PageContactCTA from "@/components/shared/PageContactCTA";
import RelatedPages from "@/components/shared/RelatedPages";
import LogoMark from "@/components/ui/LogoMark";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { breadcrumbJsonLd, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "代表メッセージ | 株式会社サイプレス",
  description: "株式会社サイプレス代表取締役・織田春樹からのメッセージ。創業の経緯、デジタルマーケティングへの想い、中小企業支援へのコミットメント、今後のビジョンについて。",
  keywords: [
    "代表メッセージ",
    "織田春樹",
    "株式会社サイプレス",
    "代表取締役",
    "Webマーケティング",
    "MEO対策",
    "SEO対策",
    "中小企業支援",
    "葛飾区",
  ],
  openGraph: {
    title: "代表メッセージ | 株式会社サイプレス",
    description: "株式会社サイプレス代表取締役・織田春樹からのメッセージ。創業の背景とWebマーケティングへの想い。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/message" },
};

const SITE_URL = "https://www.cypress-all.co.jp";

const CRUMBS: Crumb[] = [
  { name: "ホーム", href: "/" },
  { name: "会社情報", href: "/company" },
  { name: "代表メッセージ" },
];

/** 画面に出す要約版。下の FULL_MESSAGE（代表の原文）を、言い回しを残したまま短くしたもの。 */
const SUMMARY: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "創業のきっかけ",
    paragraphs: [
      "技術がある。接客が丁寧。地域からの信頼もある。それなのに、Webで検索しても出てこない。Googleマップにも表示されない。地域の中小企業・店舗オーナーと話すなかで、何度もこの違和感に出会いました。",
      "実力ではなく「デジタルでの見え方」で、選ばれるかどうかが決まってしまう。良い仕事をしている企業が、正しく評価されるべきです。その橋渡しをするために、サイプレスを立ち上げました。",
    ],
  },
  {
    heading: "私たちの進め方",
    paragraphs: [
      "お客様は、Googleマップから、検索から、そしてAIへの質問から、それぞれ違う入り口で会社やお店を探しています。だから私たちはMEO・SEO・AIOを分けずに設計し、どの入り口からも見つけてもらえる状態をつくります。",
      "施策はやりっぱなしにせず、数字を確かめながら成果が出るまで伴走します。お客様の成長こそが、私たちの成長です。",
    ],
  },
  {
    heading: "地域から、その先へ",
    paragraphs: [
      "拠点の葛飾区には、地域に根差した商店や町工場がたくさんあります。まず足元の地域から、Webで正しく評価される企業を一社でも多く増やしたい。一社一社と誠実に向き合いながら、着実に前へ進んでいきます。",
    ],
  },
];

// 代表の原文（2026年10月までの代表メッセージ）。要約版の下に「全文を読む」で表示する。
const FULL_MESSAGE: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "なぜサイプレスを立ち上げたのか",
    paragraphs: [
      "サイプレスを創業したきっかけは、地域の中小企業・店舗オーナーと話すなかで感じた強い違和感でした。技術がある、接客が丁寧、地域からの信頼もある。それなのに、Webで検索しても出てこない。Googleマップに表示されない。問い合わせはほぼゼロに近い。",
      "一方で、Webへの露出に力を入れているだけで上位表示されているビジネスも存在し、実力ではなく「デジタルでの見え方」によって選ばれるか・選ばれないかが決まっている現実がありました。",
      "これは構造的な不公平だと思いました。良い仕事をしている企業が、正しく評価されるべきです。そして、その橋渡しをする会社は、大企業向けの大手代理店ではなく、中小企業の現場感覚を持った会社でなければならない。その確信が、株式会社サイプレスの出発点です。",
      "デジタルマーケティングの恩恵は、長らく大企業に偏っていました。予算のある企業が広告費を投下し、高額なコンサルティングを受け、検索上位を独占する。その構造を少しずつ変えていくことが、私たちの存在意義です。",
    ],
  },
  {
    heading: "MEO・SEO・AIOを一体で設計する理由",
    paragraphs: [
      "集客の入り口は一つではありません。「〇〇区 歯医者」とGoogleマップで検索する人、「歯科矯正 費用 相場」とWeb検索する人、「近くのおすすめ歯医者はどこですか」とAIに質問する人。それぞれ異なる経路でビジネスを探しています。",
      "MEO対策はGoogleマップ上の露出を高め、SEO対策はWebサイトへの自然流入を増やし、AIO対策はChatGPT・Gemini・PerplexityといったAI検索エンジンからの引用を目指す。この3つは分断して考えるのではなく、一体として設計することで、どの入り口からも見つけてもらえる状態を作ります。",
      "さらに、SEOに強いホームページを制作し、SNSで継続的に情報を発信することで、集客の土台を複層的に積み上げていく。どれか一つに依存せず、複数の経路を同時に強化していく戦略こそが、持続可能な集客の在り方だと考えています。",
      "この設計思想を持つ会社は、まだ多くありません。だからこそ、私たちが体系化して中小企業に届ける意味があると信じています。",
    ],
  },
  {
    heading: "お客様の成長こそが、会社の成長",
    paragraphs: [
      "私たちは大手広告代理店のように、多数のクライアントを並行管理して薄い関わりを続けることを是としていません。それよりも、少数のクライアントと深く向き合い、事業の現状を理解したうえで必要な施策を提案し、成果が出るまで伴走することを大切にしています。",
      "問い合わせ件数の増加、Googleマップのアクセス数向上、検索順位の改善——これらをデータで確認しながら、施策を継続的に改善していく。「やりっぱなし」にならない支援が、中小企業にとって本当に必要なものだと考えています。",
      "クライアントが成長することで、私たちへの信頼が生まれ、長期的な関係が続く。その積み重ねが会社としての信用になる。お客様の成功が私たちの成功であるという信念は、経営判断のすべての場面で指針になっています。",
    ],
  },
  {
    heading: "葛飾区という地域への想い",
    paragraphs: [
      "東京都葛飾区を拠点としているのは、偶然ではありません。葛飾区には、古くからの商店街や町工場、地域に根差した個人事業主が多く存在しています。その方々が、デジタルの壁に阻まれて本来届くべきお客様に届けられていない現場を、日常の中で目にしてきました。",
      "まず足元の地域から、Webで正しく評価される企業を一社でも多く増やしたい。その想いが、葛飾区への本社設置の背景にあります。地元の企業との繋がりを大切にしながら、首都圏・全国へとサービスを展開していく姿勢を貫きます。",
      "現在は東京都・神奈川・埼玉・千葉を主な対応エリアとしていますが、Webベースの対応が可能なため、全国どこからでもご相談いただけます。地元感覚と全国視野の両方を持つ会社であり続けます。",
    ],
  },
  {
    heading: "AI時代と、私たちが描く未来",
    paragraphs: [
      "AI検索の台頭は、Webマーケティングの在り方を根本から変えつつあります。ChatGPTのリリース、GoogleのAI Overview、Perplexityの普及により、情報を検索する手段は急速に多様化しています。",
      "従来のSEO対策では、検索エンジンのクローラーに評価される技術的な最適化が中心でした。しかしAI検索の時代には、AIが信頼できる情報源として引用するに足る、一次情報・専門性・権威性のあるコンテンツが求められます。E-E-A-T（経験・専門性・権威性・信頼性）を明示した構造化データ、FAQ設計、明確な文章構造が、AI引用の鍵を握っています。",
      "AI活用支援は、これからサイプレスがさらに力を入れていく領域の一つです。業務フローの自動化、コンテンツ制作の効率化、チャットボットの構築など、AIを使った業務改善を通じて、中小企業の生産性を根本から変える支援を拡充していきます。",
      "地域のあらゆる業種・規模の企業が、Webで正しく評価される世界。その実現に向けて、一社一社と誠実に向き合いながら、着実に前へ進んでいきます。どうぞよろしくお願いいたします。",
    ],
  },
  {
    heading: "お客様へ",
    paragraphs: [
      "デジタルマーケティングを始めようとして、どこから手をつければよいかわからず立ち止まっているとしたら、それはあなたのせいではありません。この領域は日々変化が激しく、専門家でも全体像を把握するのが難しいほどです。",
      "私たちサイプレスがそのお手伝いをします。現状を整理し、優先順位をつけ、現実的な予算と時間軸のなかで何から始めるべきかをご提案します。むずかしいことをわかりやすく伝えることも、私たちの大切な仕事だと考えています。",
      "すぐに何かを購入していただく必要はありません。まずは、現状の課題をお聞かせください。ご相談だけでも、何か一つ持ち帰れるものをお届けできるよう努めます。",
      "東京都葛飾区から、日本中の中小企業・地域ビジネスを支援する会社として、これからも誠実に歩み続けます。どうぞお気軽にご連絡ください。",
    ],
  },
];

/** 5つのお約束（旧ページの文面を、意味を変えずに一文へ短くしたもの） */
const PROMISES = [
  { num: "01", title: "丁寧なコミュニケーション", body: "専門用語を避け、施策の意図と根拠をわかりやすくお伝えします。" },
  { num: "02", title: "透明性のある情報共有", body: "進捗・数値・課題を定期的に共有し、ブラックボックスをなくします。" },
  { num: "03", title: "継続的な伴走支援", body: "やりっぱなしにせず、成果が定着するまでデータを見て改善します。" },
  { num: "04", title: "最新技術の積極活用", body: "SEO・MEO・AIO・AIの最新の知見をもとに、先回りして提案します。" },
  { num: "05", title: "成果への誠実なコミット", body: "できないことは正直に伝え、実現可能な目標に全力を尽くします。" },
];

const FAQ_ITEMS = [
  {
    q: "代表の織田春樹に直接相談することはできますか？",
    a: "はい、可能です。初回のご相談は代表が直接対応しております。メール（info@cypress-all.co.jp）またはお問い合わせフォームからご連絡ください。内容を確認のうえ、通常2営業日以内にご返信いたします。",
  },
  {
    q: "会社の規模はどのくらいですか？",
    a: "2026年5月に設立した創業間もない会社です。小規模だからこそ、一社一社のクライアントと深く向き合い、大手代理店では難しい密なコミュニケーションを実現できます。外部パートナーとの協力体制により、幅広い案件に対応しています。",
  },
  {
    q: "どんな規模の会社でも依頼できますか？",
    a: "はい、個人事業主から中小企業まで幅広く対応しています。特に、大手広告代理店へのアクセスが難しい小規模事業者や地域ビジネスを主な支援対象として想定しており、現実的な予算での提案を心がけています。",
  },
  {
    q: "初回相談に費用はかかりますか？",
    a: "初回相談は無料で承っています。現状のWeb集客の課題をお聞きし、改善の方向性についてお話しします。その後の支援内容や費用については、状況を確認したうえで正式にご提案します。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "東京都・神奈川・埼玉・千葉を主な対応エリアとしていますが、Webでの対応が可能なため全国の企業様からのご依頼も承っています。特に地域ビジネスのMEO対策は、遠方からでも十分にご支援できる内容です。",
  },
  {
    q: "葛飾区に会社があると聞きました。地元の企業を優先していますか？",
    a: "葛飾区を拠点としており、地元の中小企業・個人事業主の皆さまへの支援に特に力を入れています。ただし、対応地域に限定はなく、首都圏全域および全国からのご依頼を歓迎しています。",
  },
  {
    q: "SEO・MEO・AIOのどれか一つだけを依頼することはできますか？",
    a: "はい、可能です。まずは一つの施策から始め、成果を確認しながら段階的に拡張していく進め方も推奨しています。予算や優先順位に合わせて最適なプランをご提案します。",
  },
  {
    q: "成果が出るまでどのくらいの期間がかかりますか？",
    a: "施策の種類や現状によって異なります。MEO対策は比較的早期に変化が現れる場合があります。SEOは一般的に数か月単位での継続が必要です。成果保証はできませんが、進捗を数値でモニタリングしながら改善を続けます。",
  },
  {
    q: "ホームページをすでに持っています。リニューアルも依頼できますか？",
    a: "はい、既存サイトのリニューアルも対応しています。現状のサイトのSEO・表示速度・コンバージョン設計を診断し、改善点をご提案したうえで制作に進むことができます。",
  },
  {
    q: "SNS運用も依頼できますか？",
    a: "はい、Instagram・Google ビジネスプロフィールを中心としたSNS運用支援も行っています。投稿内容の企画・制作・分析まで一貫してサポートし、SEO・MEOとの相乗効果を意識した運用設計を行います。",
  },
  {
    q: "AI活用支援とは具体的にどのような内容ですか？",
    a: "業務フローの自動化・コンテンツ制作の効率化・チャットボットの設計など、AIツールを活用した中小企業の生産性向上支援を行っています。どのAIツールをどのように使うかも含めてご相談いただけます。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "施策内容・規模・期間によって異なります。月額定額プラン・単発プロジェクト形式など、状況に合わせた料金体系を設けています。まずは無料相談でご状況をお聞きし、お見積もりをご提示します。",
  },
  {
    q: "競合他社の分析もしてもらえますか？",
    a: "はい、対策を検討するうえで競合のWeb・MEO状況を調査・分析することは重要なプロセスの一つです。施策提案の前段階として競合分析を含めた現状診断を行います。",
  },
  {
    q: "代表はどのような考えでこの会社を作ったのですか？",
    a: "デジタルマーケティングの恩恵が大企業に偏っている現状を変えたいという想いから創業しました。技術・サービス・誠実さを持ちながらWebで見つけてもらえない中小企業に、正しく集客できる仕組みを届けることが創業の動機です。",
  },
  {
    q: "長期的な契約が必要ですか？",
    a: "最低契約期間については施策の内容によって異なります。SEOのように継続が前提の施策は中長期の関わりを推奨しますが、スポット対応やプロジェクト単位のご依頼にも柔軟に対応しています。",
  },
  {
    q: "相談内容は秘密にしてもらえますか？",
    a: "もちろんです。ご相談いただいた内容は厳重に管理し、第三者への開示は一切行いません。必要に応じて秘密保持契約（NDA）の締結にも対応しています。安心してご相談ください。",
  },
];

const RELATED_LINKS = [
  { href: "/company/philosophy", label: "経営理念", desc: "ミッション・ビジョン・バリュー" },
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
  { href: "/area/tokyo", label: "東京都の対応エリア", desc: "都内全域対応" },
  { href: "/area/kanagawa", label: "神奈川の対応エリア", desc: "横浜・川崎など" },
  { href: "/area/saitama", label: "埼玉の対応エリア", desc: "さいたま市ほか" },
  { href: "/area/chiba", label: "千葉の対応エリア", desc: "千葉市ほか" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/company/message#webpage`,
      url: `${SITE_URL}/company/message`,
      name: "代表メッセージ | 株式会社サイプレス",
      inLanguage: "ja",
      // 代表者（Person）は app/layout.tsx の Organization.founder で @id 付きで定義している
      mainEntity: { "@id": `${SITE_URL}/company/message#representative` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    breadcrumbJsonLd(CRUMBS, "/company/message"),
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

const EXPERTISE = ["MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "SNS運用", "AI活用支援"];

export default function MessagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          crumbs={CRUMBS}
          eyebrow="Message"
          title="代表メッセージ"
          catchCopy="正しい会社が、正しく選ばれる世界をつくりたい。"
        />

        <Section tone="white" className="!pt-0" labelledBy="message-body">
          <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
            {/* 代表プロフィール */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[28px] bg-navy-900 p-8 text-white">
                <LogoMark tone="dark" className="h-10 w-10" />
                <p className="mt-8 text-[13px] text-white/60">代表取締役</p>
                <p className="mt-1 text-[26px] font-bold leading-tight">{COMPANY.representative}</p>
                <p className="mt-1 font-en text-[13px] tracking-[0.08em] text-white/50">Haruki Oda</p>
                <p className="mt-6 text-[13px] text-white/60">専門領域</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {EXPERTISE.map((e) => (
                    <li key={e} className="rounded-full border border-white/15 px-2.5 py-1 text-[11.5px] text-white/80">
                      {e}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/10 pt-5 text-[12.5px] leading-relaxed text-white/55">
                  {COMPANY.name}
                  <br />
                  {COMPANY.founded}設立
                  <br />
                  東京都葛飾区亀有
                </p>
              </div>
            </aside>

            {/* 本文（要約版＋原文） */}
            <div className="max-w-2xl">
              <h2 id="message-body" className="sr-only">
                代表メッセージ本文
              </h2>
              <div className="space-y-12">
                {SUMMARY.map((s) => (
                  <Reveal key={s.heading}>
                    <h3 className="flex items-center gap-3 text-[20px] font-bold md:text-[22px]">
                      <span aria-hidden="true" className="h-px w-8 bg-accent" />
                      {s.heading}
                    </h3>
                    <div className="mt-5 space-y-5">
                      {s.paragraphs.map((p) => (
                        <p key={p} className="text-[16px] leading-[2] text-ink-2">
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className="mt-12 text-right text-[15px] text-ink-2">
                {COMPANY.name}　代表取締役
                <span className="ml-3 text-[22px] font-bold text-ink">{COMPANY.representative}</span>
              </p>

              <details className="group mt-12 rounded-3xl border border-line bg-surface open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                  <span className="group-open:hidden">メッセージの全文を読む</span>
                  <span className="hidden group-open:inline">全文を閉じる</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    <svg viewBox="0 0 12 12" className="h-3 w-3">
                      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="space-y-10 px-6 pb-8 pt-2 md:px-8">
                  {FULL_MESSAGE.map((s) => (
                    <div key={s.heading}>
                      <h3 className="text-[17px] font-bold">{s.heading}</h3>
                      <div className="mt-3 space-y-4">
                        {s.paragraphs.map((p) => (
                          <p key={p} className="text-[15px] leading-[2] text-ink-2">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </Section>

        <section aria-labelledby="message-promises" className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
          <div aria-hidden="true" className="absolute -left-40 top-0 h-[460px] w-[760px] rounded-full bg-accent/20 blur-[140px]" />
          <Container className="relative">
            <SectionHeading id="message-promises" eyebrow="Our Promises" title="5つのお約束" dark />
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {PROMISES.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.05} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="t-num text-gradient-brand text-[32px] font-semibold leading-none">{p.num}</span>
                  <h3 className="mt-5 text-[16px] font-bold leading-snug !text-white">{p.title}</h3>
                  <p className="phrase mt-2 text-[13.5px] leading-[1.85] text-white/60">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        <FaqSection items={FAQ_ITEMS} heading="代表メッセージに関するよくある質問" bgColor="#F4F6FA" initialCount={6} />
        <RelatedPages links={RELATED_LINKS} />
        <PageContactCTA
          heading="代表が直接、ご相談を伺います。"
          body="初回のご相談は代表が対応しています。現状の課題をお聞かせください。ご相談だけでも、何か一つ持ち帰れるものをお届けできるよう努めます。"
        />
      </main>
      <Footer />
    </>
  );
}
