import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

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
    images: [{ url: "/hero.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/philosophy" },
};

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
  { href: "/services/web", label: "ホームページ制作", desc: "Next.js × 高速サイト" },
  { href: "/services/sns", label: "SNS運用", desc: "Instagram・Google投稿" },
  { href: "/services/ai", label: "AI活用支援", desc: "業務効率化・自動化" },
  { href: "/services", label: "サービス一覧", desc: "全施策の概要" },
  { href: "/contact", label: "お問い合わせ", desc: "無料相談・見積もり" },
  { href: "/blog", label: "ブログ", desc: "SEO・MEO・AIO情報" },
  { href: "/cases", label: "事例・実績", desc: "支援事例の紹介" },
  { href: "/faq", label: "よくある質問", desc: "ご利用前の疑問を解決" },
  { href: "/price", label: "料金プラン", desc: "費用・プラン案内" },
  { href: "/recruit", label: "採用情報", desc: "一緒に働く方を募集" },
  { href: "/area/tokyo", label: "東京都の対応エリア", desc: "都内全域対応" },
  { href: "/area/kanagawa", label: "神奈川の対応エリア", desc: "横浜・川崎など" },
  { href: "/area/saitama", label: "埼玉の対応エリア", desc: "さいたま市ほか" },
];

export default function PhilosophyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-10" style={{ color: "#9CA3AF" }}>
              <Link href="/" className="hover:text-[#0F172A] transition-colors">ホーム</Link>
              <span>/</span>
              <Link href="/company" className="hover:text-[#0F172A] transition-colors">会社情報</Link>
              <span>/</span>
              <span style={{ color: "#374151" }}>経営理念</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Philosophy
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              経営理念
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              私たちが何のために存在し、どこを目指し、どのように行動するか。サイプレスの根幹となる考え方をお伝えします。
            </p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              What you'll learn
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                "ミッション「地域企業が、正しく選ばれる仕組みをつくる」の意味",
                "ビジョン「AIとWebの力で、地域経済を再生する」の背景と目指す世界",
                "誠実・革新・成長・共創・専門性・透明性・継続の7つのバリュー",
                "日常業務に根ざした行動指針10条の全内容",
                "なぜこの理念が生まれたか——設立背景と理念の一致",
                "理念を体現するサービス設計と、チームが一丸となって大切にしていること",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[14px] font-bold shrink-0" style={{ color: "#c4b89a" }}>→</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Mission — dark section */}
        <section className="py-28 md:py-40 relative overflow-hidden" style={{ background: "#0d1b2a" }}>
          <div className="absolute inset-0">
            <Image
              src="/ChatGPT Image 2026年6月13日 19_18_57.png"
              alt="サイプレスの理念"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-8" style={{ color: "#475569" }}>
                Mission — 使命
              </p>
              <h2
                className="font-black leading-[1.15] tracking-tight mb-10"
                style={{ fontSize: "clamp(30px, 4.5vw, 58px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}
              >
                地域企業が、<br />正しく選ばれる<br />仕組みをつくる。
              </h2>
              <p className="text-[16px] leading-[1.9]" style={{ color: "#94A3B8" }}>
                素晴らしいサービス・技術・想いを持ちながら、Webやデジタルマーケティングの壁に阻まれ、本来届くべき顧客に届いていない中小企業・地域ビジネスのために、集客の仕組みを根本から変えます。
              </p>
            </div>
          </div>
        </section>

        {/* Section B: ミッション詳細 */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Mission — 使命
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
              >
                地域企業が、正しく選ばれる仕組みをつくる。
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  日本の中小企業・地域ビジネスには、長年培ってきた技術や、地域に根ざした丁寧なサービス、顧客への深い思いやりがあります。その価値は、多くの大企業には真似できないものです。しかし、デジタルの世界では、その価値がほとんど可視化されていない現実があります。
                </p>
                <p>
                  Webで検索しても出てこない。Googleマップに表示されない。情報発信が止まっていて、最新情報がわからない。こういった状況が積み重なることで、消費者は実力のある企業より、Webに力を入れている企業を選んでしまいます。
                </p>
                <p>
                  私たちの使命は、その構造を変えることです。MEO・SEO・AIO・ホームページ制作・SNS・AI活用という6つの手段を組み合わせ、中小企業が持つ本来の価値を、デジタルの世界でも正しく届ける仕組みを設計します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                Vision — ビジョン
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
              >
                AIとWebの力で、地域経済を再生する。
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  私たちが目指す世界は、地域のあらゆる中小企業・店舗・施設・士業・医療機関が、大企業と対等なデジタル競争力を持てる社会です。予算の多寡ではなく、知識と仕組みの差を埋めることで、あらゆる企業が正しく評価される環境を作り出します。
                </p>
                <p>
                  AIの登場は、その実現を一気に加速させました。コンテンツ制作・分析・投稿・改善のサイクルをAIで効率化することで、これまで大企業だけが実現できた継続的な情報発信が、中小企業にも可能になりました。私たちはその橋渡しをする会社でありたいと考えています。
                </p>
                <p>
                  地域の優れた企業が正しく選ばれることは、消費者にとっても、地域経済にとっても良いことです。良い企業が存続し、成長することで、地域に雇用が生まれ、サービスの質が上がり、コミュニティが豊かになる。そのサイクルを支えることが、サイプレスの長期的な貢献です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Values — 大切にすること
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              7つのバリュー
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              私たちが日々の仕事において判断基準としている7つの価値観です。どれも独立した美徳ではなく、相互に支え合うことで機能します。
            </p>
            <div className="max-w-3xl space-y-0">
              {VALUES.map((v) => (
                <div
                  key={v.num}
                  className="grid grid-cols-[48px_1fr] gap-6 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{v.num}</span>
                  <div>
                    <h3 className="font-black text-[17px] mb-3" style={{ color: "#0d1b2a" }}>{v.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{v.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: 行動指針10条 */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Principles — 行動指針
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              行動指針10条
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-12" style={{ color: "#374151" }}>
              バリューを日々の行動に落とし込んだ10の指針です。すべての業務・判断・コミュニケーションにおいて、これらを実践します。
            </p>
            <div className="max-w-3xl space-y-0">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.num}
                  className="grid grid-cols-[48px_1fr] gap-6 py-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{p.num}</span>
                  <div>
                    <h3 className="font-black text-[17px] mb-3" style={{ color: "#0d1b2a" }}>{p.title}</h3>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{p.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Cinematic break */}
        <section className="relative overflow-hidden" style={{ height: "280px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_18_57.png"
            alt="サイプレスの理念を象徴するビジュアル"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.5)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                Our Vision
              </p>
              <p
                className="font-black leading-[1.2]"
                style={{ fontSize: "clamp(22px, 3vw, 40px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}
              >
                良い企業が、<br />正しく評価される世界へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section D: なぜこの理念か */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                Why This Philosophy
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
              >
                なぜ、この理念が生まれたか
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  2026年5月、東京都葛飾区に株式会社サイプレスを設立したとき、私たちが最初に決めたのは、「何のための会社か」という問いへの答えでした。
                </p>
                <p>
                  地域の中小企業・個人事業主と話すなかで、繰り返し同じ現実を目にしてきました。腕がある、サービスが丁寧、地域に根ざした信頼がある。それなのに、インターネットで検索しても出てこない。Googleマップでも上位に表示されない。その結果、知名度と予算のある企業に顧客を奪われ続けている現実。
                </p>
                <p>
                  これは実力の差ではなく、デジタルマーケティングの知識と仕組みの差です。この差を埋めることに本質的な価値があると確信したとき、ミッション「地域企業が、正しく選ばれる仕組みをつくる」が生まれました。
                </p>
                <p>
                  ビジョン「AIとWebの力で、地域経済を再生する」は、そのミッションを長期的な視点で語ったものです。AIの台頭により、中小企業でも大企業並みの情報発信ができる時代が到来しつつある。この転換期に正しいツールと知識を届けることが、地域経済の構造を変える力を持ちます。
                </p>
                <p>
                  7つのバリューと10の行動指針は、この理念を日々の仕事に落とし込んだものです。大きな言葉を掲げるだけでなく、毎日の意思決定と行動のなかに理念を生きさせることを、私たちは最も大切にしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: 理念を体現するサービス設計 */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Philosophy in Action
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              理念を体現するサービス設計
            </h2>
            <div className="grid md:grid-cols-2 gap-0 max-w-4xl">
              {[
                {
                  num: "01",
                  service: "MEO対策",
                  philosophy: "Googleマップで地域企業を正しく可視化する。最も身近な「見つけてもらう」手段を整備します。",
                },
                {
                  num: "02",
                  service: "SEO対策",
                  philosophy: "検索エンジンが評価する専門性と信頼性を構築。長期的な集客基盤を積み上げます。",
                },
                {
                  num: "03",
                  service: "AIO対策",
                  philosophy: "AI検索時代に備え、引用されやすい権威あるコンテンツ設計を行います。",
                },
                {
                  num: "04",
                  service: "ホームページ制作",
                  philosophy: "美しさと成果を両立した、SEOに強い高速サイトを設計・構築します。",
                },
                {
                  num: "05",
                  service: "SNS運用",
                  philosophy: "継続的な情報発信で、ブランドと信頼を積み上げる習慣をつくります。",
                },
                {
                  num: "06",
                  service: "AI活用支援",
                  philosophy: "業務効率化で生まれた時間を、価値あるコンテンツ発信に転換します。",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="grid grid-cols-[40px_1fr] gap-4 py-6 pr-8"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <h3 className="font-black text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.service}</h3>
                    <p className="text-[13px] leading-[1.8]" style={{ color: "#374151" }}>{item.philosophy}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #E8E4DC", maxWidth: "56rem", marginTop: "0" }} />
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold transition-opacity hover:opacity-80"
                style={{ background: "#0F172A", color: "#FFFFFF" }}
              >
                サービス一覧を見る
              </Link>
            </div>
          </div>
        </section>

        <FaqSection
          items={FAQ_ITEMS}
          heading="経営理念に関するよくある質問"
          bgColor="#FFFFFF"
        />

        <RelatedPages
          links={RELATED_LINKS}
          heading="Related Pages"
        />

        <PageContactCTA />
      </main>
      <Footer />
    </>
  );
}
