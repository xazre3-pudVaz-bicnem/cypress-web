import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

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

const PROMISES = [
  {
    num: "01",
    title: "丁寧なコミュニケーション",
    body: "お問い合わせから初回ご相談まで、迅速かつ丁寧にお応えします。専門用語を避け、施策の意図と根拠をわかりやすくお伝えすることを徹底します。",
  },
  {
    num: "02",
    title: "透明性のある情報共有",
    body: "施策の進捗・数値・課題を定期的にレポートし、ブラックボックスをなくします。何をなぜ行っているかを常にクライアントが把握できる体制を維持します。",
  },
  {
    num: "03",
    title: "継続的な伴走支援",
    body: "「やりっぱなし」にしない。施策を実施した後もデータを見ながら継続的に改善を重ね、成果が定着するまで並走します。短期的な受注より長期的な信頼を優先します。",
  },
  {
    num: "04",
    title: "最新技術の積極活用",
    body: "SEO・MEO・AIO・AIの各領域における最新の知見を常にアップデートし、クライアントが時代の変化に取り残されないよう先回りして提案します。",
  },
  {
    num: "05",
    title: "成果への誠実なコミット",
    body: "できないことはできないと正直に伝えます。実現可能な目標を設定し、その達成に向けて誠実に全力を尽くします。数字の見せかけではなく、事業の実態に貢献する成果を目指します。",
  },
];

const FAQ_ITEMS = [
  {
    q: "代表の織田春樹に直接相談することはできますか？",
    a: "はい、可能です。初回のご相談は代表が直接対応しております。メール（consulting.meo@gmail.com）またはお問い合わせフォームからご連絡ください。内容を確認のうえ、通常2営業日以内にご返信いたします。",
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
  { href: "/services/web", label: "ホームページ制作", desc: "Next.js × 高速サイト" },
  { href: "/services/sns", label: "SNS運用", desc: "Instagram・Google投稿" },
  { href: "/services/ai", label: "AI活用支援", desc: "業務効率化・自動化" },
  { href: "/services", label: "サービス一覧", desc: "全施策の概要" },
  { href: "/contact", label: "お問い合わせ", desc: "無料相談・見積もり" },
  { href: "/blog", label: "ブログ", desc: "SEO・MEO・AIO情報" },
  { href: "/cases", label: "事例・実績", desc: "支援事例の紹介" },
  { href: "/faq", label: "よくある質問", desc: "ご利用前の疑問を解決" },
  { href: "/price", label: "料金プラン", desc: "費用・プラン案内" },
  { href: "/area/tokyo", label: "東京都の対応エリア", desc: "都内全域対応" },
  { href: "/area/kanagawa", label: "神奈川の対応エリア", desc: "横浜・川崎など" },
  { href: "/area/saitama", label: "埼玉の対応エリア", desc: "さいたま市ほか" },
  { href: "/area/chiba", label: "千葉の対応エリア", desc: "千葉市ほか" },
];

export default function MessagePage() {
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
              <span style={{ color: "#374151" }}>代表メッセージ</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Message from the CEO
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              私たちが目指す、<br />デジタルの未来。
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレス代表取締役・織田春樹より、創業の経緯、私たちが大切にしている価値観、そしてお客様へのメッセージをお伝えします。
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
                "代表・織田春樹がサイプレスを創業した背景と想い",
                "デジタルマーケティング格差という問題意識と創業動機",
                "SEO・MEO・AIO・Web制作を組み合わせる独自支援の考え方",
                "お客様の成長こそが会社の成長という経営姿勢",
                "東京都葛飾区を拠点に全国対応する理由と地域への想い",
                "今後のビジョンと、お客様へのお約束",
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

        {/* Section B: 代表メッセージ本文 */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_300px] gap-16 items-start">
              {/* Message text */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                  From the CEO
                </p>
                <h2
                  className="font-black leading-tight tracking-tight mb-10"
                  style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
                >
                  正しい会社が、<br />正しく選ばれる世界をつくりたい。
                </h2>

                <div className="space-y-0 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                  {/* 創業への想い */}
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      なぜサイプレスを立ち上げたのか
                    </p>
                    <p className="mb-4">
                      サイプレスを創業したきっかけは、地域の中小企業・店舗オーナーと話すなかで感じた強い違和感でした。技術がある、接客が丁寧、地域からの信頼もある。それなのに、Webで検索しても出てこない。Googleマップに表示されない。問い合わせはほぼゼロに近い。
                    </p>
                    <p className="mb-4">
                      一方で、Webへの露出に力を入れているだけで上位表示されているビジネスも存在し、実力ではなく「デジタルでの見え方」によって選ばれるか・選ばれないかが決まっている現実がありました。
                    </p>
                    <p className="mb-4">
                      これは構造的な不公平だと思いました。良い仕事をしている企業が、正しく評価されるべきです。そして、その橋渡しをする会社は、大企業向けの大手代理店ではなく、中小企業の現場感覚を持った会社でなければならない。その確信が、株式会社サイプレスの出発点です。
                    </p>
                    <p>
                      デジタルマーケティングの恩恵は、長らく大企業に偏っていました。予算のある企業が広告費を投下し、高額なコンサルティングを受け、検索上位を独占する。その構造を少しずつ変えていくことが、私たちの存在意義です。
                    </p>
                  </div>

                  {/* Web・SEO・MEO・AIOを組み合わせた支援 */}
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      MEO・SEO・AIOを一体で設計する理由
                    </p>
                    <p className="mb-4">
                      集客の入り口は一つではありません。「〇〇区 歯医者」とGoogleマップで検索する人、「歯科矯正 費用 相場」とWeb検索する人、「近くのおすすめ歯医者はどこですか」とAIに質問する人。それぞれ異なる経路でビジネスを探しています。
                    </p>
                    <p className="mb-4">
                      MEO対策はGoogleマップ上の露出を高め、SEO対策はWebサイトへの自然流入を増やし、AIO対策はChatGPT・Gemini・PerplexityといったAI検索エンジンからの引用を目指す。この3つは分断して考えるのではなく、一体として設計することで、どの入り口からも見つけてもらえる状態を作ります。
                    </p>
                    <p className="mb-4">
                      さらに、SEOに強いホームページを制作し、SNSで継続的に情報を発信することで、集客の土台を複層的に積み上げていく。どれか一つに依存せず、複数の経路を同時に強化していく戦略こそが、持続可能な集客の在り方だと考えています。
                    </p>
                    <p>
                      この設計思想を持つ会社は、まだ多くありません。だからこそ、私たちが体系化して中小企業に届ける意味があると信じています。
                    </p>
                  </div>

                  {/* お客様の成長こそが会社の成長 */}
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      お客様の成長こそが、会社の成長
                    </p>
                    <p className="mb-4">
                      私たちは大手広告代理店のように、多数のクライアントを並行管理して薄い関わりを続けることを是としていません。それよりも、少数のクライアントと深く向き合い、事業の現状を理解したうえで必要な施策を提案し、成果が出るまで伴走することを大切にしています。
                    </p>
                    <p className="mb-4">
                      問い合わせ件数の増加、Googleマップのアクセス数向上、検索順位の改善——これらをデータで確認しながら、施策を継続的に改善していく。「やりっぱなし」にならない支援が、中小企業にとって本当に必要なものだと考えています。
                    </p>
                    <p>
                      クライアントが成長することで、私たちへの信頼が生まれ、長期的な関係が続く。その積み重ねが会社としての信用になる。お客様の成功が私たちの成功であるという信念は、経営判断のすべての場面で指針になっています。
                    </p>
                  </div>

                  {/* 葛飾区への想いと全国対応 */}
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      葛飾区という地域への想い
                    </p>
                    <p className="mb-4">
                      東京都葛飾区を拠点としているのは、偶然ではありません。葛飾区には、古くからの商店街や町工場、地域に根差した個人事業主が多く存在しています。その方々が、デジタルの壁に阻まれて本来届くべきお客様に届けられていない現場を、日常の中で目にしてきました。
                    </p>
                    <p className="mb-4">
                      まず足元の地域から、Webで正しく評価される企業を一社でも多く増やしたい。その想いが、葛飾区への本社設置の背景にあります。地元の企業との繋がりを大切にしながら、首都圏・全国へとサービスを展開していく姿勢を貫きます。
                    </p>
                    <p>
                      現在は東京都・神奈川・埼玉・千葉を主な対応エリアとしていますが、Webベースの対応が可能なため、全国どこからでもご相談いただけます。地元感覚と全国視野の両方を持つ会社であり続けます。
                    </p>
                  </div>

                  {/* 今後のビジョン */}
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px", paddingBottom: "28px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6B7280" }}>
                      AI時代と、私たちが描く未来
                    </p>
                    <p className="mb-4">
                      AI検索の台頭は、Webマーケティングの在り方を根本から変えつつあります。ChatGPTのリリース、GoogleのAI Overview、Perplexityの普及により、情報を検索する手段は急速に多様化しています。
                    </p>
                    <p className="mb-4">
                      従来のSEO対策では、検索エンジンのクローラーに評価される技術的な最適化が中心でした。しかしAI検索の時代には、AIが信頼できる情報源として引用するに足る、一次情報・専門性・権威性のあるコンテンツが求められます。E-E-A-T（経験・専門性・権威性・信頼性）を明示した構造化データ、FAQ設計、明確な文章構造が、AI引用の鍵を握っています。
                    </p>
                    <p className="mb-4">
                      AI活用支援は、これからサイプレスがさらに力を入れていく領域の一つです。業務フローの自動化、コンテンツ制作の効率化、チャットボットの構築など、AIを使った業務改善を通じて、中小企業の生産性を根本から変える支援を拡充していきます。
                    </p>
                    <p>
                      地域のあらゆる業種・規模の企業が、Webで正しく評価される世界。その実現に向けて、一社一社と誠実に向き合いながら、着実に前へ進んでいきます。どうぞよろしくお願いいたします。
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "28px" }}>
                    <p className="font-black text-[17px] mb-1" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>織田 春樹</p>
                    <p className="text-[13px]" style={{ color: "#6B7280" }}>代表取締役　株式会社サイプレス</p>
                  </div>
                </div>
              </div>

              {/* Profile sidebar */}
              <div className="md:sticky md:top-24">
                <div className="relative overflow-hidden mb-6" style={{ height: "260px" }}>
                  <Image
                    src="/ChatGPT Image 2026年6月13日 19_11_20.png"
                    alt="ビジネスパートナーとの握手・信頼関係"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-8" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-6" style={{ color: "#9CA3AF" }}>
                    Profile
                  </p>
                  <div style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                    <p className="font-black text-[20px] mb-1" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>織田 春樹</p>
                    <p className="text-[13px] mb-6" style={{ color: "#6B7280" }}>代表取締役</p>
                    <div className="space-y-4">
                      {[
                        { label: "会社名", value: "株式会社サイプレス" },
                        { label: "設立", value: "2026年5月13日" },
                        { label: "所在地", value: "東京都葛飾区白鳥4-6-1-623" },
                        { label: "メール", value: "consulting.meo@gmail.com" },
                      ].map((row) => (
                        <div key={row.label}>
                          <span className="block text-[11px] font-medium mb-0.5" style={{ color: "#9CA3AF" }}>
                            {row.label}
                          </span>
                          <span className="text-[13px]" style={{ color: "#374151" }}>{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                    <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#9CA3AF" }}>
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["MEO対策", "SEO対策", "AIO対策", "ホームページ制作", "SNS運用", "AI活用支援"].map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1"
                          style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", color: "#6B7280" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                    <Link
                      href="/contact"
                      className="block w-full text-center text-[13px] font-semibold py-3 transition-opacity hover:opacity-80"
                      style={{ background: "#0F172A", color: "#FFFFFF" }}
                    >
                      無料で相談する
                    </Link>
                    <Link
                      href="/company"
                      className="block text-center text-[12px] mt-4 transition-colors hover:text-[#0F172A]"
                      style={{ color: "#6B7280" }}
                    >
                      ← 会社情報へ戻る
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cinematic break */}
        <section className="relative overflow-hidden" style={{ height: "280px" }}>
          <Image
            src="/ChatGPT Image 2026年6月13日 19_13_37.png"
            alt="ミーティングでドキュメントを確認するビジネスパーソン"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.35)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                Our Commitment
              </p>
              <p
                className="font-black leading-[1.2]"
                style={{ fontSize: "clamp(22px, 3vw, 40px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}
              >
                一社一社と、<br />誠実に向き合い続ける。
              </p>
            </div>
          </div>
        </section>

        {/* Section C: 代表プロフィールと姿勢 */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              About the CEO
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              代表プロフィールと、仕事への姿勢
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <div className="space-y-0">
                {[
                  {
                    label: "名前",
                    value: "織田 春樹（おだ はるき）",
                  },
                  {
                    label: "役職",
                    value: "代表取締役",
                  },
                  {
                    label: "会社",
                    value: "株式会社サイプレス（2026年5月13日設立）",
                  },
                  {
                    label: "所在地",
                    value: "東京都葛飾区白鳥4-6-1-623",
                  },
                  {
                    label: "専門領域",
                    value: "MEO・SEO・AIO・Web制作・SNS運用・AI活用支援",
                  },
                  {
                    label: "対応エリア",
                    value: "東京・神奈川・埼玉・千葉（全国対応可）",
                  },
                ].map((item, i) => (
                  <div key={i} className="py-4" style={{ borderTop: "1px solid #E8E4DC" }}>
                    <span className="block text-[11px] font-medium mb-1" style={{ color: "#9CA3AF" }}>{item.label}</span>
                    <span className="text-[14px]" style={{ color: "#374151" }}>{item.value}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #E8E4DC" }} />
              </div>
              <div>
                <p className="text-[14px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  中小企業・地域ビジネスのデジタル集客支援を専門とし、MEO・SEO・AIOの三領域を一体として設計する支援スタイルを特徴としています。
                </p>
                <p className="text-[14px] leading-[1.9] mb-5" style={{ color: "#374151" }}>
                  「大企業しか使えないデジタルマーケティングを、中小企業にも届ける」という一貫した信念のもと、現実的な予算の範囲内で最大の効果を出すことにこだわっています。
                </p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  AI検索の台頭という急速な環境変化に対応するため、常に最新の知見をアップデートし、クライアントに先手の施策を届けることを使命としています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: 5つのお約束 */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Promises
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              5つのお約束
            </h2>
            <div className="max-w-3xl space-y-0">
              {PROMISES.map((p) => (
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

        {/* Section E: お客様へのメッセージ */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
                To Our Clients
              </p>
              <h2
                className="font-black leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(22px, 2.8vw, 34px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
              >
                お客様へのメッセージ
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.9]" style={{ color: "#374151" }}>
                <p>
                  デジタルマーケティングを始めようとして、どこから手をつければよいかわからず立ち止まっているとしたら、それはあなたのせいではありません。この領域は日々変化が激しく、専門家でも全体像を把握するのが難しいほどです。
                </p>
                <p>
                  私たちサイプレスがそのお手伝いをします。現状を整理し、優先順位をつけ、現実的な予算と時間軸のなかで何から始めるべきかをご提案します。むずかしいことをわかりやすく伝えることも、私たちの大切な仕事だと考えています。
                </p>
                <p>
                  すぐに何かを購入していただく必要はありません。まずは、現状の課題をお聞かせください。ご相談だけでも、何か一つ持ち帰れるものをお届けできるよう努めます。
                </p>
                <p>
                  東京都葛飾区から、日本中の中小企業・地域ビジネスを支援する会社として、これからも誠実に歩み続けます。どうぞお気軽にご連絡ください。
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold transition-opacity hover:opacity-80"
                  style={{ background: "#0F172A", color: "#FFFFFF" }}
                >
                  無料相談を申し込む
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-semibold transition-colors hover:text-[#0F172A]"
                  style={{ border: "1px solid #E8E4DC", color: "#374151" }}
                >
                  サービス一覧を見る
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          items={FAQ_ITEMS}
          heading="代表メッセージに関するよくある質問"
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
