import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "私たちが大切にしていること・企業価値観 | 株式会社サイプレス",
  description:
    "株式会社サイプレスが大切にしている価値観・選ばれる理由・お客様への約束。誠実さ・専門性・継続支援・最新技術・地域密着の5つの価値を柱に、地域中小企業のWeb集客を支援します。",
  keywords: [
    "企業理念",
    "価値観",
    "選ばれる理由",
    "株式会社サイプレス",
    "Web集客支援",
    "MEO対策",
    "SEO対策",
    "葛飾区",
  ],
  openGraph: {
    title: "私たちが大切にしていること・企業価値観 | 株式会社サイプレス",
    description:
      "サイプレスが大切にする使命・価値観・行動指針。誠実さと成果へのコミットメントを支援の核心に置き、地域中小企業と長期的な関係を築きます。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/company/value" },
};

const VALUES = [
  {
    num: "01",
    title: "誠実さ — 成果を正直に、費用を透明に",
    summary: "根拠のない約束はしない。でも、成果にとことんこだわる。",
    body: [
      "Web集客支援の業界では、根拠のない「検索1位保証」「短期間で集客倍増」といった誇大表現が後を絶ちません。私たちはそのような表現を一切使いません。SEO・MEO・AIOはGoogleのアルゴリズムに依存するため、特定の成果を保証することはできないのが事実です。",
      "しかし「成果にこだわらない」ということではありません。月次レポートで現状を正直に共有し、成果が出ていないときは原因を分析して改善策を提示します。費用についても、何にいくら使われているかを明示し、不要なオプションを押し付けません。",
      "「言いにくいことを正直に伝える」ことが、長期的な信頼関係の土台だと考えています。",
    ],
  },
  {
    num: "02",
    title: "専門性 — SEO/MEO/AIO/Web/SNS/AIを横断した統合支援",
    summary: "一つの施策だけで集客は完結しない。横断的な知識が強みです。",
    body: [
      "Web集客は、MEO・SEO・AIO・Web制作・SNS運用・AI活用が相互に影響しながら機能します。MEO対策だけ優れていても、ホームページの品質が低ければ来店につながりません。SEOで上位表示できても、ページの訴求力が弱ければ問い合わせは増えません。",
      "私たちはこれら6つの領域すべてに対応できる専門性を持っています。特定のサービスだけを売るのではなく、お客様のビジネス課題に応じて最適な施策の組み合わせを提案します。",
      "専門性とは知識の深さだけでなく、「どの施策をいつ・なぜ行うか」を判断できる実践知でもあります。最新アルゴリズムの変化を継続的にキャッチアップし、現場で使える形に落とし込む力を磨き続けます。",
    ],
  },
  {
    num: "03",
    title: "継続支援 — 制作・納品で終わらず、成果が出るまで伴走",
    summary: "Webサイトは完成が終わりではなく、始まりです。",
    body: [
      "多くのWeb制作会社はサイトを納品したら終わりです。しかし、SEOやMEOの成果が出るのは、施策開始から数ヶ月後です。継続的な改善・コンテンツ追加・口コミ対応・アルゴリズム変化への対応がなければ、成果は出ません。",
      "私たちは「作ったら終わり」の支援はしません。月次レポートで現状を共有し、翌月の施策を一緒に考えます。成果が出るまでの試行錯誤を、伴走パートナーとして共にします。",
      "お客様のビジネスが成長することが、私たちのサービスが評価される唯一の証明です。その意識を持って、長期的な関係を大切にしています。",
    ],
  },
  {
    num: "04",
    title: "最新技術 — Next.js・AI・最新SEOアルゴリズムへの継続的な対応",
    summary: "昨年の正解が今年の正解とは限らない。常に最前線を追い続けます。",
    body: [
      "Web・AI・検索エンジンの技術変化は非常に速いです。ChatGPT / Gemini / Perplexityなど、AI検索エンジンの普及はSEO戦略そのものを変えつつあります。Googleアルゴリズムは年に何度も大きなアップデートを繰り返します。",
      "私たちはこの変化を「機会」と捉えています。最新の技術・手法を継続的に学び、実際のお客様支援に活用します。Web制作ではNext.jsによる高パフォーマンスサイト、SEO対策ではE-E-A-Tに基づいたコンテンツ戦略、AIO対策ではAI検索での引用を狙った情報設計を実践しています。",
      "「理論だけ知っている」ではなく「実際の現場で使い、成果を確認している」ことが私たちの強みです。",
    ],
  },
  {
    num: "05",
    title: "地域密着 — 葛飾から全国へ、地域ビジネスへの深い理解",
    summary: "地域で生きる事業者の課題を、肌感覚で理解しています。",
    body: [
      "株式会社サイプレスは東京都葛飾区を拠点としています。葛飾区をはじめ、東京23区・首都圏の地域ビジネスが直面する集客課題——季節変動・競合密度・口コミの重要性・地域検索の特性——を実感として理解しています。",
      "大手のWebマーケティング会社が得意とするのは大企業向けの大規模施策です。私たちは中小企業・個人事業主・地域密着型の店舗やクリニックといった事業者向けに、現実的な予算で成果の出る支援を設計します。",
      "「地域に根付いたビジネスが、Webを通じて正当に評価される」——その信念が、私たちの支援の原点です。",
    ],
  },
];

const COMMITMENTS = [
  {
    num: "01",
    title: "最初の相談は無料で行います",
    body: "初回のご相談・ヒアリング・課題診断は無料です。まずは現状をお聞きし、どんな支援が有効かをご提案します。費用が発生するのは契約後からです。",
  },
  {
    num: "02",
    title: "月次レポートで現状を透明に共有します",
    body: "月に一度、実施した施策・成果の変化・翌月の改善計画をレポートにまとめてお伝えします。「何をしているかわからない」という状態にしません。",
  },
  {
    num: "03",
    title: "成果が出ていないときは正直に報告します",
    body: "施策が期待通りの成果を出せていないときは、問題を隠さず正直にお伝えし、原因分析と改善提案を行います。都合の良いことだけを報告しません。",
  },
  {
    num: "04",
    title: "追加費用は事前に合意を取ります",
    body: "契約外の費用が発生する場合は、必ず事前にご説明し合意を取ります。「気づいたら費用が膨らんでいた」という状態にしません。",
  },
  {
    num: "05",
    title: "Googleガイドラインに準拠した施策のみ実施します",
    body: "スパムリンクの購入・虚偽の口コミ投稿・コンテンツの自動生成など、Googleガイドライン違反となる施策は一切行いません。長期的な検索評価の安定を優先します。",
  },
  {
    num: "06",
    title: "お客様の競合情報を外部に漏らしません",
    body: "業務を通じて知り得た競合戦略・売上情報・顧客データなど、お客様のビジネス情報を第三者に開示することはありません。守秘義務を徹底します。",
  },
  {
    num: "07",
    title: "不要なサービスを押し付けません",
    body: "必要のないオプションの追加や、過剰なサービスの売り込みはしません。お客様の予算と課題に合わせた最適な提案を心がけます。",
  },
  {
    num: "08",
    title: "専門用語を使わずわかりやすく説明します",
    body: "SEO・MEOの専門用語はできる限り平易な言葉で説明します。お客様自身が内容を理解して判断できる状態を作ることを大切にしています。",
  },
  {
    num: "09",
    title: "返信は1〜2営業日以内に行います",
    body: "お問い合わせ・ご質問への返信は、通常1〜2営業日以内に行います。長期間の放置や返信忘れが発生しないよう管理を徹底します。",
  },
  {
    num: "10",
    title: "契約終了後も成果の引き継ぎを支援します",
    body: "契約終了時には、設定データ・レポート・施策履歴などを適切に引き継ぎます。「辞めたらデータが消えた」という状態にしません。",
  },
];

const IDEAL_CLIENTS = [
  {
    num: "01",
    title: "Web集客を真剣に改善したい経営者・担当者",
    body: "「なんとなく広告を出している」「業者に丸投げしている」ではなく、Web集客の現状を理解し、主体的に改善していきたいと考えている方。私たちはそのような方と、ともに考えながら支援します。",
  },
  {
    num: "02",
    title: "長期的な集客基盤を作りたい事業者",
    body: "「すぐに客が来ればいい」ではなく、3ヶ月・6ヶ月・1年先を見据えた検索流入・MEO集客の基盤を作りたい方。SEOとMEOは積み上げ型の施策であり、継続することで資産になります。",
  },
  {
    num: "03",
    title: "地域密着型の中小企業・個人事業主",
    body: "飲食店・美容室・クリニック・整体院・工務店・士業・小売店など、地域のお客様を対象にしたビジネスを営む方。地域特性を踏まえた集客戦略の設計が得意です。",
  },
  {
    num: "04",
    title: "AIやWebの変化に対応していきたい事業者",
    body: "ChatGPTなどAI検索が普及するなか、自社のWeb存在感を高めていきたい方。AIO対策・最新のSEO手法・AIツール活用など、変化に対応した支援を求めている方。",
  },
  {
    num: "05",
    title: "正直で誠実なパートナーを求めている方",
    body: "根拠のない約束をする業者に不信感を持ち、現実的な提案をしてくれるパートナーを探している方。私たちは成果保証はしませんが、成果に向けた誠実な支援を約束します。",
  },
];

const DECLINE_CASES = [
  {
    num: "01",
    title: "即効性・成果保証を強く求める方",
    body: "SEO・MEOは継続的な取り組みによって成果が積み上がる性質があります。「1ヶ月で検索1位にしてほしい」「成果が出なければ返金してほしい」といったご要望には対応できません。",
  },
  {
    num: "02",
    title: "Googleガイドライン違反の施策を求める方",
    body: "虚偽の口コミ投稿依頼・スパムリンクの購入・他社評判の意図的な毀損など、Googleポリシーに違反する手法をご要望される場合は、ご支援をお断りします。",
  },
  {
    num: "03",
    title: "誇大広告・虚偽表示を求める方",
    body: "根拠のない「業界1位」「日本一」「100%の効果」といった誇大表現をWebサイトや広告に使用することはできません。景品表示法・薬機法・医療法などの法令遵守を徹底します。",
  },
  {
    num: "04",
    title: "支援内容に全く関与しない丸投げ希望の方",
    body: "成果を上げるためには、お客様のビジネス情報・写真・口コミ対応など、一定のご協力が必要です。完全に丸投げで何も関与しないスタイルでは、効果的な支援が難しい場合があります。",
  },
  {
    num: "05",
    title: "予算と期待値が大きく乖離している方",
    body: "月額1〜2万円で「すべてのSEO・MEO・SNS・Web制作を任せたい」といった、予算と期待値が著しく乖離している場合は、正直にお伝えしたうえで優先順位を整理するご提案をします。",
  },
];

const faqItems = [
  {
    q: "なぜ株式会社サイプレスを選んでいただけるのですか？",
    a: "SEO・MEO・AIO・Web制作・SNS運用・AI活用支援を一社で横断的に対応できること、成果が出るまで継続的に伴走する姿勢、誇大表現をしない誠実さが評価いただいています。「何社かに相談したが、最も現実的な提案をしてくれた」というお声をいただくことがあります。",
  },
  {
    q: "競合のWeb制作会社・SEO会社との違いは何ですか？",
    a: "多くのWeb制作会社はサイトを作ったら終わりです。多くのSEO会社は検索順位の改善のみを見ます。私たちはWeb制作後の集客改善・SEO・MEO・SNS・AIまでを一貫して支援します。また、成果保証など根拠のない約束をしない誠実さを大切にしています。",
  },
  {
    q: "成果保証をしない理由を教えてください。",
    a: "GoogleのアルゴリズムはGoogle社が管理しており、完全に非公開で変動します。特定の順位や集客数を保証することは事実として不可能であり、保証を謳う業者は根拠のない約束をしていることになります。成果保証はできませんが、成果を出すための施策選定・実施・改善を誠実に行います。",
  },
  {
    q: "長期契約を前提にしている理由は何ですか？",
    a: "SEO・MEO対策は施策開始から成果が出るまで数ヶ月を要します。1ヶ月の試し期間では効果を測定することすら難しく、お客様にとっても無駄な投資になりかねません。最低3ヶ月を基本としているのは、お客様に実際の成果を体感していただくためです。",
  },
  {
    q: "契約後のサポート体制はどのようになっていますか？",
    a: "月次レポートの提出・改善提案・質問への回答（1〜2営業日以内）を基本サポートとして提供します。Googleアルゴリズムの大きな変動があった際は、速やかに影響を分析してお伝えします。",
  },
  {
    q: "誇大表現をしないとのことですが、具体的にどのようなことですか？",
    a: "根拠のないNo.1表現・水増しされた実績数・「必ず成果が出る」「短期間で集客倍増」などの成果保証表現は一切使いません。現実的な効果の見通しと達成に向けた具体的な施策を誠実にお伝えします。",
  },
  {
    q: "お断りするケースはどのような場合ですか？",
    a: "過大な成果保証を求める場合・Googleガイドライン違反の施策を要求される場合・誇大広告の作成を求められる場合・予算と期待値が大きく乖離している場合などは、誠実にお断りすることがあります。",
  },
  {
    q: "既存の担当業者がいても乗り換えを検討できますか？",
    a: "現状の施策内容とその成果を確認したうえで、乗り換えが有効かどうかを正直にお伝えします。乗り換えが不要と判断した場合は、現業者への改善提案をお伝えします。まずは無料相談からお気軽にどうぞ。",
  },
  {
    q: "「地域密着」とはどういう意味ですか？大阪や名古屋からも依頼できますか？",
    a: "地域密着とは「地域ビジネスの特性を深く理解している」という意味です。物理的な距離ではなく、地域に根付いた中小企業・個人事業主の課題に寄り添うことを指します。地方からのご依頼もオンラインで対応しています。",
  },
  {
    q: "AI活用支援とはどのレベルから対応していますか？",
    a: "ChatGPTやClaudeなどのAIツールを業務で使ったことがない方から、AIを使って業務の一部を自動化したいという方まで、幅広いレベルに対応しています。まずは「どの業務にAIを活用できそうか」のヒアリングから始めます。",
  },
  {
    q: "サービス開始後に担当者が変わることはありますか？",
    a: "現時点では担当変更のリスクを最小化するよう努めています。重要な変更が生じる場合は、事前にご説明し適切に引き継ぎを行います。",
  },
  {
    q: "他の業者と比べて何が一番の強みですか？",
    a: "一つの業者でSEO・MEO・AIO・Web制作・SNS・AIを横断的に一貫支援できる点です。複数の業者に分けて依頼すると、施策が分断されて非効率になります。統合的な戦略で各施策を連携させられることが最大の差別化点です。",
  },
  {
    q: "「お客様と一緒に考える」とはどういう支援スタイルですか？",
    a: "一方的に施策を決めて実行するのではなく、月次レポートでの状況共有・施策の意図説明・お客様からの意見反映を通じて、双方向のコミュニケーションで支援します。お客様の事業理解が深まるほど支援の精度も上がります。",
  },
  {
    q: "新しい技術への対応はどのように行っていますか？",
    a: "Google・AI企業・業界メディアの情報を継続的にキャッチアップし、実際の業務への応用可能性を検証しています。AIO対策はその最たる例で、AI検索の普及という大きな変化にいち早く対応するための施策設計を行っています。",
  },
  {
    q: "会社設立から日が浅いですが、信頼できますか？",
    a: "2026年5月設立の新しい会社であることは事実です。ただし、代表の織田春樹はWebマーケティングの実務経験を持ち、最新の知識と誠実な姿勢で支援します。実績の量より質を重視し、お客様一社一社に真剣に向き合うことが私たちの信頼構築の方法です。",
  },
];

const relatedLinks = [
  { href: "/company", label: "会社情報トップ", desc: "サイプレス企業情報" },
  { href: "/company/profile", label: "会社概要", desc: "基本情報・事業内容" },
  { href: "/company/message", label: "代表メッセージ", desc: "代表・織田春樹より" },
  { href: "/company/philosophy", label: "経営方針", desc: "事業への姿勢と方針" },
  { href: "/company/support-policy", label: "サポート方針", desc: "支援スタンスの詳細" },
  { href: "/recruit", label: "採用情報", desc: "仲間を募集しています" },
  { href: "/contact", label: "お問い合わせ", desc: "ご相談・お見積もり" },
  { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ集客支援" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示支援" },
  { href: "/services/aio", label: "AIO対策サービス", desc: "AI検索最適化支援" },
  { href: "/services/web-design", label: "Web制作サービス", desc: "成果につながるサイト制作" },
  { href: "/services/sns", label: "SNS運用サービス", desc: "Instagram・X・LINE" },
  { href: "/services/ai", label: "AI活用支援サービス", desc: "業務効率化・自動化" },
  { href: "/support/operation", label: "継続運用サポート", desc: "長期パートナーとして" },
  { href: "/process/consultation", label: "ご利用の流れ", desc: "相談〜契約の流れ" },
  { href: "/faq/meo-basics", label: "MEO基本FAQ", desc: "よくある質問" },
  { href: "/faq/seo-basics", label: "SEO基本FAQ", desc: "よくある質問" },
  { href: "/area/tokyo", label: "東京都対応エリア", desc: "東京23区・全域" },
  { href: "/area/kanagawa", label: "神奈川県対応エリア", desc: "横浜・川崎など" },
  { href: "/area/saitama", label: "埼玉県対応エリア", desc: "さいたま市など" },
];

export default function ValuePage() {
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
              <span style={{ color: "#374151" }}>私たちが大切にしていること</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Value &amp; Philosophy
            </p>
            <h1
              className="font-black leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              私たちが大切にしていること
            </h1>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              株式会社サイプレスが大切にしている価値観・行動指針・選ばれる理由をお伝えします。誠実さと成果へのコミットメントを核に、地域中小企業の成長を長期的に支援します。
            </p>
          </div>
        </section>

        {/* Section A: このページでわかること */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              On This Page
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(22px, 2.8vw, 36px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              このページでわかること
            </h2>
            <div className="max-w-3xl space-y-0">
              {[
                { num: "01", text: "サイプレスが大切にしている5つの価値（誠実さ・専門性・継続支援・最新技術・地域密着）の詳細" },
                { num: "02", text: "お客様への10の具体的なコミットメント（月次レポート・追加費用の事前合意・ガイドライン遵守など）" },
                { num: "03", text: "サイプレスが支援したい理想のお客様像（5パターン）" },
                { num: "04", text: "お断りしているケース（5パターン）と、その理由" },
                { num: "05", text: "よくある質問15問（選ばれる理由・競合との違い・お断りするケースなど）" },
                { num: "06", text: "関連ページへのリンク（サービス詳細・会社概要・代表メッセージなど）" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-5 py-5"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <p className="text-[15px] leading-[1.8]" style={{ color: "#374151" }}>{item.text}</p>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section B: 選ばれる理由 — 5つの価値 */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Why Choose Us
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              選ばれる理由 — 私たちの5つの価値
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-16" style={{ color: "#374151" }}>
              私たちが大切にしている価値観は、サービス設計・日常の業務判断・お客様とのコミュニケーションすべての土台になっています。
            </p>

            <div className="space-y-0 max-w-4xl">
              {VALUES.map((v) => (
                <div
                  key={v.num}
                  className="py-10"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
                    <div>
                      <span className="text-[12px] font-mono" style={{ color: "#9CA3AF" }}>{v.num}</span>
                      <p
                        className="font-black text-[18px] leading-snug mt-2"
                        style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
                      >
                        {v.title.split(" — ")[0]}
                      </p>
                      <p className="text-[13px] mt-2 leading-snug" style={{ color: "#c4b89a" }}>
                        {v.title.split(" — ")[1]}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold mb-4" style={{ color: "#374151" }}>
                        {v.summary}
                      </p>
                      {v.body.map((para, pi) => (
                        <p key={pi} className="text-[14px] leading-[1.9] mb-3 last:mb-0" style={{ color: "#374151" }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* Section C: お客様へのコミットメント */}
        <section className="py-20 md:py-24" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Our Commitment
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              お客様への10の約束
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-14" style={{ color: "#374151" }}>
              理念だけでなく、具体的な行動レベルでの約束です。支援期間中、これらを守ることを約束します。
            </p>
            <div className="max-w-4xl grid md:grid-cols-2 gap-0">
              {COMMITMENTS.map((item, i) => (
                <div
                  key={item.num}
                  className="p-6"
                  style={{
                    borderTop: "1px solid #E8E4DC",
                    borderLeft: i % 2 === 1 ? "1px solid #E8E4DC" : "none",
                    background: "#FFFFFF",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[12px] font-mono shrink-0 mt-0.5" style={{ color: "#9CA3AF" }}>{item.num}</span>
                    <div>
                      <p className="font-semibold text-[14px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                      <p className="text-[13px] leading-[1.85]" style={{ color: "#374151" }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section D: 私たちが支援したい方 */}
        <section className="py-20 md:py-24" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>
              Ideal Clients
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}
            >
              私たちが支援したい方
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-14" style={{ color: "#374151" }}>
              すべての依頼に対応するより、特定のお客様に深く寄り添うことを選んでいます。以下に当てはまる方には、最大限の力でお応えします。
            </p>
            <div className="max-w-3xl space-y-0">
              {IDEAL_CLIENTS.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-6 py-7"
                  style={{ borderTop: "1px solid #E8E4DC" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.num}</span>
                  <div>
                    <p className="font-black text-[15px] mb-3" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.85]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>

            <div className="mt-12 max-w-3xl">
              <div className="p-8" style={{ background: "#F9F8F5", border: "1px solid #E8E4DC" }}>
                <p className="text-[14px] font-semibold mb-3" style={{ color: "#0d1b2a" }}>まずは無料相談から</p>
                <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>
                  「自分のケースはどうだろう？」と思った方は、まずはお気軽にご相談ください。現状の課題をお聞きして、私たちが支援できるかどうかを正直にお伝えします。
                </p>
                <div className="mt-6" style={{ borderTop: "1px solid #E8E4DC", paddingTop: "20px" }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold"
                    style={{ background: "#0F172A", color: "#FFFFFF" }}
                  >
                    無料相談する
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: お断りしているケース */}
        <section className="py-20 md:py-24" style={{ background: "#0d1b2a" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#c4b89a" }}>
              Cases We Decline
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(24px, 3vw, 40px)", color: "#FFFFFF", fontFamily: "var(--font-serif)" }}
            >
              お断りしているケース
            </h2>
            <p className="text-[15px] leading-[1.9] max-w-2xl mb-14" style={{ color: "rgba(255,255,255,0.75)" }}>
              誠実なご支援のために、以下のケースはお断りしています。合わないお客様との契約より、合うお客様との深い関係を大切にしています。
            </p>
            <div className="max-w-3xl space-y-0">
              {DECLINE_CASES.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-6 py-7"
                  style={{ borderTop: "1px solid rgba(196,184,154,0.2)" }}
                >
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#c4b89a" }}>{item.num}</span>
                  <div>
                    <p className="font-black text-[15px] mb-3" style={{ color: "#FFFFFF" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.85]" style={{ color: "rgba(255,255,255,0.7)" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(196,184,154,0.2)" }} />
            </div>
          </div>
        </section>

        <FaqSection
          items={faqItems}
          heading="価値観・選ばれる理由についてよくある質問"
          bgColor="#F9F8F5"
        />

        <RelatedPages links={relatedLinks} heading="関連ページ" />

        <PageContactCTA
          heading="私たちの考えに共感いただけたら"
          body="株式会社サイプレスのWeb集客支援にご興味をお持ちの方は、まずはお気軽にご相談ください。一緒に成果を作る長期パートナーとして貢献します。"
        />
      </main>
      <Footer />
    </>
  );
}
