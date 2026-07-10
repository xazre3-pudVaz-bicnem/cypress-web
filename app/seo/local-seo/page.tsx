import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageContactCTA from "@/components/shared/PageContactCTA";
import FaqSection from "@/components/shared/FaqSection";
import RelatedPages from "@/components/shared/RelatedPages";

export const metadata: Metadata = {
  title: "ローカルSEOとは｜地域名での検索上位表示・エリアページ設計・NAP統一｜株式会社サイプレス",
  description:
    "ローカルSEOの基礎から実践まで解説。地域名キーワードでの上位表示方法、エリアページ設計、NAP情報の統一、Googleビジネスプロフィールとの連動、LocalBusiness構造化データの実装まで体系的に解説。葛飾区・足立区・江戸川区・東京都・千葉・埼玉・神奈川対応。",
  keywords: [
    "ローカルSEO",
    "地域SEO",
    "地域集客",
    "エリアSEO",
    "地域名キーワード",
    "LocalBusiness",
    "NAP統一",
    "エリアページ",
    "MEO連動",
    "葛飾区SEO",
  ],
  openGraph: {
    title: "ローカルSEOとは｜地域名での検索上位表示・エリアページ設計・NAP統一｜株式会社サイプレス",
    description: "ローカルSEOの実践ガイド。地域名キーワードでの上位表示からMEO対策との連携、NAP統一、エリアページ設計まで解説。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.cypress-all.co.jp/seo/local-seo" },
};

const faqItems = [
  {
    q: "ローカルSEOとMEOの違いは何ですか？",
    a: "ローカルSEOはWebサイトのSEO施策として地域名キーワードで上位表示を狙う対策で、エリアページ制作・地域特化コンテンツ・LocalBusiness構造化データなどが含まれます。MEO（Map Engine Optimization）はGoogleマップでの上位表示を目指す対策で、Googleビジネスプロフィールの最適化・口コミ管理が中心です。両方を組み合わせることで地域集客の相乗効果が生まれます。",
  },
  {
    q: "エリアページはどのように作ればSEO効果がありますか？",
    a: "単に地域名を入れ替えた薄いコンテンツは逆効果です。各エリアページには、その地域固有の情報（地域の特徴・アクセス情報・その地域での実績・地域特有の課題への言及）を含めることが重要です。また地域名を含む見出し・地域特化FAQ・LocalBusiness構造化データ・Googleマップ埋め込みも実装します。",
  },
  {
    q: "複数地域をターゲットにする場合のページ設計は？",
    a: "対応エリアごとに専用のランディングページ（エリアページ）を作成します。親ページで都道府県全体をカバーし、子ページで区・市単位の詳細情報を提供するサイロ構造が有効です。例えば「/area/tokyo」→「/area/katsushika」のような階層設計です。内部リンクで親子ページを繋ぐことでSEO評価が高まります。",
  },
  {
    q: "LocalBusiness構造化データとは何ですか？",
    a: "Schema.orgのLocalBusiness（またはその派生型：Restaurant・MedicalClinic等）のJSON-LD構造化データです。会社名・住所・電話番号・営業時間・エリアサービングなどを記述します。Googleに地域ビジネスとして正確に認識させるために重要で、ローカルパック表示にも影響します。",
  },
  {
    q: "「〇〇 近く」「近くの〇〇」というキーワードにも対応できますか？",
    a: "「近く」系のキーワードはユーザーの現在地を基準にしたモバイル検索が多く、主にMEO（Googleビジネスプロフィールの最適化）で対応します。「〇〇市 〇〇」形式の地域名キーワードはローカルSEOで対策可能です。モバイルユーザーへのリーチを最大化するにはMEOとローカルSEOの両方が必要です。",
  },
  {
    q: "地域特化コンテンツの例を教えてください。",
    a: "「葛飾区でSEO対策を依頼するときの注意点」「東京都内のWeb制作会社の選び方」など、その地域のターゲット読者が共感できる具体的な内容が効果的です。地域の統計データ・地元の事情に言及・地域の季節性や特性を反映させることで独自性が生まれます。",
  },
  {
    q: "ローカルSEOの効果が出るまでどのくらいかかりますか？",
    a: "競合が少ない地方エリアでは2〜4ヶ月で成果が出やすく、東京23区などの競合が多いエリアでは6〜12ヶ月かかることが多いです。エリアページを作成してすぐに上位に来ることは少なく、内部リンクの充実・コンテンツの更新・他ページからのリンクが積み重なることで徐々に評価が高まります。",
  },
  {
    q: "ローカルSEOとMEOを同時に依頼できますか？",
    a: "はい、サイプレスではWebサイトのローカルSEO対策とGoogleビジネスプロフィールのMEO対策を一括でご支援しています。同じチームで一貫して取り組むことで施策の一貫性と費用対効果が高まります。",
  },
  {
    q: "NAP情報とは何ですか？なぜ統一する必要があるのですか？",
    a: "NAPとはName（会社名）・Address（住所）・Phone（電話番号）の頭文字です。自社サイト・Googleビジネスプロフィール・各種ポータルサイト・SNSなどに掲載されているNAP情報が一致していないと、Googleが「同一の事業者か」を判断しづらくなり、ローカル検索での評価が下がる原因になります。表記ゆれ（「3丁目」vs「3-」など）にも注意が必要です。",
  },
  {
    q: "エリアページを大量に作るとペナルティになりますか？",
    a: "地域名を差し替えただけの薄いコンテンツを大量生成すると、Googleのスパムポリシーに抵触する可能性があります。各エリアページに固有の情報（地域特性・アクセス・事例・FAQ）を盛り込み、ユーザーに価値を提供するコンテンツを作ることが重要です。",
  },
  {
    q: "葛飾区や足立区などの東京東部エリアはローカルSEOが効きやすいですか？",
    a: "渋谷・新宿・港区などの都心部と比べると競合数が少なく、エリアページを丁寧に作ることで比較的短期間に上位表示できるケースがあります。特に地域密着型のリフォーム会社・整骨院・学習塾などはローカルSEOの効果が出やすい業種です。",
  },
  {
    q: "千葉・埼玉・神奈川のクライアントにも対応できますか？",
    a: "はい、サイプレスはリモートでの対応が基本のため、首都圏全域・全国のクライアントのローカルSEOをご支援しています。エリアページ設計・キーワード調査・構造化データ実装・MEO連動まで一貫してサポートします。",
  },
  {
    q: "Googleビジネスプロフィールのウェブサイト欄は何を設定すべきですか？",
    a: "ビジネスの所在地が含まれるエリアページのURLを設定するのが最も効果的です。トップページよりも地域に特化したページを連携させることで、地域検索での関連性がより強く伝わります。エリアページ内の情報（住所・電話番号・営業時間）がビジネスプロフィールの情報と一致していることも確認してください。",
  },
  {
    q: "Googleマップの埋め込みはSEOに効果がありますか？",
    a: "直接的なランキング要因ではありませんが、ユーザーへの利便性向上・滞在時間の改善・Googleへの地域ビジネスとしてのシグナル送信に貢献します。コンタクトページ・エリアページへの埋め込みが推奨されます。",
  },
  {
    q: "「〇〇区 ホームページ制作」のようなキーワードは月間何件くらい検索されますか？",
    a: "エリアと業種の組み合わせによって大きく異なります。「葛飾区 ホームページ制作」は月間数十〜数百件、「東京 SEO対策」は月間数千件規模になります。キーワードプランナーやAhrefs等のツールを用いて調査し、費用対効果の高いエリア×業種の組み合わせを選定します。",
  },
  {
    q: "競合がローカルSEOに強い場合、どうすれば勝てますか？",
    a: "競合分析でどのエリアページ・どのキーワードで順位を取っているかを確認します。競合がカバーしていない細かい区・市レベルのエリアページを先行して作ること、コンテンツの質（文字数・独自性・専門性）で上回ること、LocalBusiness構造化データを正確に実装することが有効な戦略です。",
  },
  {
    q: "ローカルSEOに必要な内部リンクの設計を教えてください。",
    a: "トップページ→都道府県エリアページ→区市町村エリアページ、という階層構造で内部リンクを設計します。各エリアページは上位ページへのパンくずリンク、関連エリアページへの横断リンクを持つことでSEO評価の流通が最適化されます。サービスページからエリアページへのリンクも重要です。",
  },
  {
    q: "エリアページのタイトルタグはどう書けば良いですか？",
    a: "「【地域名】+ 業種/サービス名 ｜ 会社名」の形式が基本です。例：「葛飾区のWeb制作会社｜株式会社サイプレス」「足立区 SEO対策・ホームページ制作｜サイプレス」。地域名はタイトルの冒頭に配置し、60文字以内に収めることが推奨です。",
  },
  {
    q: "エリアページとサービスページの違いは何ですか？",
    a: "サービスページは「何をするか」（SEO対策・Web制作等）を軸に設計し、エリアページは「どの地域で」を軸に設計します。エリアページにはそのサービスをその地域で提供する理由・地域特性・アクセス情報・地域の実績を含め、サービスページへの内部リンクを配置します。",
  },
  {
    q: "ローカルSEOで口コミはどれくらい重要ですか？",
    a: "口コミはMEO（Googleビジネスプロフィール）に対する影響が大きく、ローカルパック表示の順位にも関わります。Webサイトのローカルページに口コミ・お客様の声を掲載し、Review構造化データを実装することで、SEO・信頼性・CVの三方向に効果があります。",
  },
];

const relatedLinks = [
  { href: "/seo", label: "SEO対策とは", desc: "SEO全体の概要" },
  { href: "/meo", label: "MEO対策とは", desc: "Googleマップ上位表示の対策" },
  { href: "/seo/keyword-research", label: "キーワード調査", desc: "地域名キーワードの選定方法" },
  { href: "/seo/content-seo", label: "コンテンツSEO", desc: "地域特化コンテンツの制作" },
  { href: "/seo/structured-data", label: "構造化データ実装", desc: "LocalBusiness Schema設定" },
  { href: "/seo/technical-seo", label: "テクニカルSEO", desc: "技術的SEOの基礎と実装" },
  { href: "/seo/on-page-seo", label: "オンページSEO", desc: "ページ内最適化の方法" },
  { href: "/seo/internal-link", label: "内部リンク設計", desc: "サイロ構造と評価の流通" },
  { href: "/area/tokyo", label: "東京のSEO対策", desc: "東京エリア特化のSEO支援" },
  { href: "/area/katsushika", label: "葛飾区のSEO対策", desc: "葛飾区エリアのSEO支援" },
  { href: "/area/adachi", label: "足立区のSEO対策", desc: "足立区エリアのSEO支援" },
  { href: "/area/edogawa", label: "江戸川区のSEO対策", desc: "江戸川区エリアのSEO支援" },
  { href: "/area/chiba", label: "千葉のSEO対策", desc: "千葉県エリアのSEO支援" },
  { href: "/area/saitama", label: "埼玉のSEO対策", desc: "埼玉県エリアのSEO支援" },
  { href: "/area/kanagawa", label: "神奈川のSEO対策", desc: "神奈川県エリアのSEO支援" },
  { href: "/industries/restaurant", label: "飲食店のSEO対策", desc: "飲食業界の地域集客SEO" },
  { href: "/industries/clinic", label: "クリニックのSEO対策", desc: "医療機関の地域集客SEO" },
  { href: "/industries/beauty", label: "美容室・サロンのSEO", desc: "美容業界のローカルSEO" },
  { href: "/industries/construction", label: "建設・リフォームのSEO", desc: "建設業の地域集客SEO" },
  { href: "/knowledge/local-seo", label: "ローカルSEO基礎", desc: "地域SEOの入門ガイド" },
  { href: "/services/seo", label: "SEO対策サービス", desc: "サイプレスのSEO支援" },
  { href: "/cost/seo", label: "SEO対策の費用", desc: "ローカルSEOの料金目安" },
  { href: "/seo/mobile-seo", label: "モバイルSEO", desc: "スマホ対応とCore Web Vitals" },
  { href: "/seo/seo-audit", label: "SEO監査・診断", desc: "現状の課題発見と改善計画" },
];

export default function LocalSeoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: "#9CA3AF" }}>
              <Link href="/" style={{ color: "#6B7280" }} className="hover:underline">ホーム</Link>
              <span>/</span>
              <Link href="/seo" style={{ color: "#6B7280" }} className="hover:underline">SEO対策</Link>
              <span>/</span>
              <span style={{ color: "#0F172A" }}>ローカルSEO</span>
            </nav>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Local SEO</p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(32px,4.5vw,56px)", color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ローカルSEO
            </h1>
            <p className="text-[16px] leading-[1.9] max-w-2xl mb-5" style={{ color: "#374151" }}>
              ローカルSEOとは、「葛飾区 Web制作」「東京 SEO対策」など地域名を含むキーワードでの検索上位表示を目指す施策です。地域密着型ビジネスにとって、エリアページの設計・地域特化コンテンツ・NAP情報の統一・LocalBusiness構造化データが重要な武器となります。
            </p>
            <p className="text-[15px] leading-[1.9] max-w-2xl" style={{ color: "#374151" }}>
              MEO対策（Googleビジネスプロフィール）と組み合わせることで、地域名検索での露出を最大化できます。Webサイトからの流入とGoogleマップからの誘導を両立する地域集客戦略を設計します。
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="relative" style={{ height: "320px", overflow: "hidden" }}>
          <Image
            src="/ChatGPT Image 2026年6月14日 21_08_58 (6).jpg"
            alt="ローカルSEO・地域名キーワードでの上位表示イメージ"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.45)" }} />
        </section>

        {/* このページでわかること */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>What You Will Learn</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              このページでわかること
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { n: "01", t: "ローカルSEOとMEOの関係と違い", b: "地域名キーワードでの検索とGoogleマップ表示は連動しながらも異なる施策です。それぞれの役割と、組み合わせで生まれる相乗効果を整理します。" },
                { n: "02", t: "エリアページの正しい設計方法", b: "単なる地名の羅列ではなく、Googleとユーザーの両方に評価されるエリアページの構成・コンテンツ・内部リンク設計を解説します。" },
                { n: "03", t: "NAP情報の統一と管理方法", b: "会社名・住所・電話番号（NAP）の表記ゆれがローカル評価を下げる仕組みと、統一するための確認ポイントを説明します。" },
                { n: "04", t: "LocalBusiness構造化データの実装", b: "Googleが地域ビジネスを正確に認識するためのJSON-LD設計方法と、ローカルパック表示への影響について解説します。" },
                { n: "05", t: "業種別ローカルSEO活用ポイント", b: "飲食店・クリニック・美容室・建設業など、業種によって異なるエリアページ戦略と地域コンテンツの作り方を紹介します。" },
                { n: "06", t: "施策の実装フローと成果指標", b: "ローカルSEOを始める順序・調査方法・効果測定に使うKPIを実務的な視点でまとめます。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* ローカルSEO未対応の影響 */}
        <section style={{ background: "#0d1b2a", padding: "80px 0" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 24px" }}>
            <p style={{ fontFamily: "var(--font-display)", letterSpacing: "0.25em", color: "#c4b89a", fontSize: "11px", marginBottom: "12px" }}>Local SEO Risks</p>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px,2.8vw,30px)", color: "#ffffff", fontWeight: 700, marginBottom: "40px" }}>
              ローカルSEO未対応が地域ビジネスに与える4つの影響
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", maxWidth: "900px" }}>
              {[
                { t: "地域名キーワードで表示されない", b: "「○○市 税理士」「渋谷 整骨院」など地域名を含む検索でWebサイトが上位表示されなければ、地元ユーザーからの問い合わせ機会がゼロになります。地域特化のコンテンツ設計が集客の鍵です。" },
                { t: "地元競合に検索流入を奪われ続ける", b: "地域キーワードでの上位表示は競合との椅子取りゲームです。SEO対策をしている地元競合が上位を占めている間、すべての検索需要が競合へ流れ続けます。" },
                { t: "広告なしでの地域集客がゼロになる", b: "ローカルSEOが機能していないと、地元からの無料集客チャンネルがなくなります。リスティング広告費が永遠にかかり続け、広告を止めたとたん集客がゼロになります。" },
                { t: "MEOとSEOの相乗効果が得られない", b: "Googleマップ（MEO）と検索（SEO）の両方で上位表示されると集客力が倍増します。ローカルSEO未対応のままではこの相乗効果が得られず、競合との差が広がります。" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid rgba(196,184,154,0.2)" }}>
                  <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "10px" }}>{item.t}</p>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.9" }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* よくある課題と原因 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Common Problems</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              よくある課題と原因
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              ローカルSEOが機能していないサイトに共通して見られる問題パターンを整理しました。自社サイトに当てはまる項目がないか確認してください。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  title: "地域名での検索に出てこない",
                  body: "サービスページに地域名が含まれていない、エリアページが存在しない、タイトルタグやH1に地域名が入っていないケースが典型的です。Googleはページ内に地域シグナルがなければ、そのページを地域検索の候補として評価しません。",
                },
                {
                  title: "エリアページが存在しない、または薄すぎる",
                  body: "対応エリアをトップページのフッターに羅列しているだけで、各エリア専用のページがない場合、地域特化キーワードでの評価が得られません。エリアページは地域固有の内容・FAQ・マップを含む独立したページとして設計する必要があります。",
                },
                {
                  title: "NAP情報が統一されていない",
                  body: "自社サイト、Googleビジネスプロフィール、ホットペッパー、各種ポータルサイトで住所表記・電話番号・会社名の表記がバラバラな状態です。「3丁目」と「3-」、「株式会社」の位置、ハイフンの有無など細かい表記ゆれがGoogleの信頼性評価を下げます。",
                },
                {
                  title: "競合のローカルSEOが強く、上位に食い込めない",
                  body: "競合が地域キーワードで長期間上位を維持している場合、エリアページのコンテンツ量・被リンク・口コミ数で差がついています。競合分析でどのキーワード・どのエリアに弱点があるかを特定し、そこから攻めるのが効率的な戦略です。",
                },
                {
                  title: "Googleビジネスプロフィールと連動していない",
                  body: "GBPの「ウェブサイト」欄がトップページのURLになっており、エリアページへのリンクがない状態です。また、GBPに記載されている住所・電話番号とWebサイト上の情報が一致していないため、ローカルパック表示の評価が下がっています。",
                },
                {
                  title: "構造化データ（LocalBusiness）が未実装",
                  body: "JSON-LDによるLocalBusiness構造化データが実装されていないため、Googleが地域ビジネスの詳細情報（営業時間・対応エリア・サービス種別）を正確に把握できていません。構造化データはローカルパック表示の条件のひとつです。",
                },
                {
                  title: "内部リンクがエリアページを繋いでいない",
                  body: "エリアページを作っても、サービスページやトップページからリンクがなければSEO評価は集まりません。エリアページへの内部リンクを適切に配置し、サイト全体の評価がエリアページに流れる設計が必要です。",
                },
                {
                  title: "地域特化コンテンツがコピーコンテンツ扱いになっている",
                  body: "地域名だけを差し替えた複数ページが存在する場合、Googleは重複コンテンツとして低評価にします。各エリアページは固有の情報（地域特性・アクセス・実績・地域FAQなど）を持つ必要があります。",
                },
                {
                  title: "モバイル対応が不十分でローカル検索で損をしている",
                  body: "地域検索はスマートフォンからの割合が高く、地図アプリとの併用も多いです。スマートフォンで使いにくいサイトはCore Web Vitalsのスコアも低く、ローカル検索でも不利になります。",
                },
                {
                  title: "口コミ・実績情報が地域ページに掲載されていない",
                  body: "地域ページにその地域での実績・お客様の声がなく、信頼性シグナルが弱い状態です。地域のユーザーが「この会社は自分の地域で実績があるか」を確認しやすくする情報設計が欠けています。",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 業種別の活用ポイント */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>By Industry</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              業種別の活用ポイント
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              ローカルSEOは業種によって設計のポイントが異なります。エリアページで伝えるべき情報・強調すべきコンテンツを業種ごとに整理しました。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {[
                {
                  industry: "飲食店・カフェ",
                  points: [
                    "「〇〇区 ランチ」「〇〇駅 カフェ」など近隣エリア検索に対応したエリアページを設置",
                    "メニュー情報・予約リンク・Googleマップをエリアページに統合",
                    "Restaurant構造化データ（メニュー・営業時間・価格帯）を実装",
                    "地域のグルメガイドや季節コンテンツで検索ボリュームを拡大",
                  ],
                },
                {
                  industry: "クリニック・歯科・整骨院",
                  points: [
                    "「〇〇区 内科」「〇〇駅 歯科」などの診療科×地域エリアページを展開",
                    "MedicalClinic構造化データで保険適用・診療時間・対応言語を記述",
                    "診療予約ページへの明確な導線とWEB予約ボタンをエリアページに配置",
                    "「〇〇区の内科選びのポイント」など地域特化の患者向けコンテンツを追加",
                  ],
                },
                {
                  industry: "美容室・ネイル・エステ",
                  points: [
                    "「〇〇駅 美容室」「〇〇区 ネイルサロン」で検索ボリュームが高いため、駅名・区名エリアページが必須",
                    "ビフォーアフター写真・口コミをエリアページに掲載し滞在時間を伸ばす",
                    "ホットペッパービューティーなど外部ポータルとNAP情報を統一",
                    "季節施術（夏の縮毛矯正・冬のトリートメント）など季節コンテンツで継続的な流入を確保",
                  ],
                },
                {
                  industry: "建設・リフォーム・外壁塗装",
                  points: [
                    "施工エリアとなる区・市ごとにエリアページを展開（葛飾区・足立区・江戸川区 等）",
                    "「〇〇区 外壁塗装 費用」など地域×コスト系キーワードをエリアページに含める",
                    "施工事例を地域ごとに整理し、地元での実績をビジュアルで示す",
                    "LocalBusiness + HomeAndConstructionBusiness 構造化データで専門性を強調",
                  ],
                },
                {
                  industry: "士業（税理士・弁護士・行政書士）",
                  points: [
                    "「葛飾区 税理士」「足立区 相続 弁護士」など相談ニーズが高い地域×専門分野のエリアページを設計",
                    "対応地域とアクセス方法・初回相談の流れをエリアページに明記",
                    "E-E-A-T（経験・専門性・権威性・信頼性）を示す資格・経歴・実績情報を各ページに掲載",
                    "地域の事業者向けFAQ（補助金・許認可・税務など）でコンテンツの専門性を高める",
                  ],
                },
                {
                  industry: "学習塾・スクール・習い事",
                  points: [
                    "「〇〇区 塾」「〇〇駅 英会話」など通いやすさが重視される業種のため、駅・区エリアページが集客の核",
                    "合格実績・講師情報・授業内容をエリアページに掲載し、保護者の安心感を高める",
                    "地域の学校名・受験情報を絡めたコンテンツで地元保護者の検索ニーズに応える",
                    "無料体験申し込みフォームをエリアページに設置しCVを直結させる",
                  ],
                },
                {
                  industry: "不動産・賃貸仲介",
                  points: [
                    "「〇〇区 賃貸」「〇〇市 不動産」は検索ボリュームが高く、エリアページへの投資対効果が大きい",
                    "物件検索・エリア相場情報・乗り換えアクセスなど地域特化の利便性コンテンツを充実",
                    "RealEstateAgent + LocalBusiness 構造化データで対応エリアを明示",
                    "葛飾区・足立区・江戸川区の各駅周辺のエリア別物件特集ページを作成",
                  ],
                },
                {
                  industry: "介護・福祉・高齢者向けサービス",
                  points: [
                    "「〇〇区 デイサービス」「〇〇市 訪問介護」など家族が地域で検索するキーワードに対応",
                    "施設紹介・サービス内容・料金・見学予約へのわかりやすい導線をエリアページに設計",
                    "CareOrganization 構造化データ・詳細な住所・交通情報を記述",
                    "「〇〇区の介護施設の選び方」など家族の不安を解消するコンテンツを追加",
                  ],
                },
              ].map((item, i) => (
                <div key={i} style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", padding: "28px" }}>
                  <p className="font-bold text-[15px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>{item.industry}</p>
                  <ul className="space-y-2">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-3 text-[13px] leading-[1.8]" style={{ color: "#374151" }}>
                        <span className="shrink-0 mt-1" style={{ color: "#9CA3AF" }}>—</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ローカルSEOの主要施策 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Key Tactics</p>
            <h2 className="font-black text-[26px] mb-10" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              ローカルSEOの主要施策
            </h2>
            <div className="max-w-4xl space-y-0">
              {[
                { title: "エリアページの制作・充実", body: "対応エリア（都市・区市町村）ごとに専用ページを作成します。単なる地域名の羅列ではなく、その地域の特性・アクセス情報・地域特有の課題への言及など、そのエリアならではのコンテンツを含めることが検索評価のポイントです。親ページ（都道府県）→子ページ（区・市）の階層設計で内部リンクを最適化します。" },
                { title: "地域名+業種キーワードの最適化", body: "「地域名 + 業種」「地域名 + サービス」のキーワードに向けてページタイトル・H1・H2・本文・メタディスクリプションを最適化します。地域名は自然な形で複数回登場するよう設計します。「葛飾区 Web制作」「足立区 SEO対策」「江戸川区 ホームページ」のように近隣エリアのキーワードバリエーションも考慮します。" },
                { title: "NAP情報の統一", body: "Name（会社名）・Address（住所）・Phone（電話番号）の三つの情報を、自社サイト・GBP・各ポータルサイトで完全に一致させます。住所の「丁目」表記、電話番号のハイフン有無、株式会社の位置など細かい表記ゆれがローカル評価を下げます。定期的に主要なディレクトリを棚卸しして統一状態を維持します。" },
                { title: "LocalBusiness構造化データの実装", body: "JSON-LD形式でLocalBusiness（またはRestaurant・Clinic等）を実装します。会社名・住所・電話番号・営業時間・areaServed（対応エリア）を記述し、Googleに地域ビジネスとして認識させます。ローカルパック表示の条件のひとつであり、リッチリザルトへの影響もあります。" },
                { title: "Googleマップ埋め込み", body: "サービスページ・コンタクトページ・エリアページにGoogleマップを埋め込みます。ユーザーの利便性向上と同時に、Googleに地域ビジネスとして認識させる効果があります。エリアページには対象エリアの地図を表示し、アクセス情報と組み合わせることで信頼性と使いやすさを高めます。" },
                { title: "地域特化コンテンツの制作", body: "「〇〇区でSEO対策を選ぶポイント」「〇〇市の飲食店が地域集客で成功するには」など、特定地域の読者が共感できるコンテンツを作ります。地域の固有名詞・地元の事情に言及することが差別化の鍵です。コンテンツの独自性がGoogleの評価と検索ユーザーの信頼を同時に高めます。" },
                { title: "MEO対策との連携", body: "WebサイトのローカルページへのリンクをGoogleビジネスプロフィールの「Webサイト」欄に設定。エリアページの情報とビジネスプロフィールの情報を一致させることで、Googleへの信頼性が高まります。GBPへの投稿・写真更新・口コミ返信を継続することで、マップとWebの両方での評価が向上します。" },
                { title: "地域内部リンクのサイロ構造設計", body: "トップページ→都道府県エリアページ→区・市エリアページという階層でリンクを設計します。同レベルのエリアページ同士を横断リンクで繋ぎ、サービスページからエリアページへのリンクも設置します。このサイロ構造がエリアページへのSEO評価の集中を促します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.title}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.body}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 実装フロー */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Implementation Flow</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              実装フロー
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              ローカルSEO施策は順序が重要です。リサーチなしに大量のエリアページを作っても効果は得られません。以下の手順でシステマティックに進めます。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  n: "01",
                  t: "現状のローカル検索順位を把握する",
                  b: "Googleサーチコンソールのクエリレポートで、地域名を含むキーワードでの現在の順位・インプレッション・クリック数を確認します。Google Analytics 4でエリア別のオーガニック流入も可視化し、どの地域・どのキーワードに改善余地があるかを特定します。",
                },
                {
                  n: "02",
                  t: "地域名キーワード調査を実施する",
                  b: "ターゲットとする地域（葛飾区・足立区・江戸川区・東京都・千葉・埼玉・神奈川 等）と業種・サービスの組み合わせキーワードを洗い出します。Googleキーワードプランナー・Ahrefs・SEMrushで月間検索ボリューム・競合度を確認し、優先度の高いエリア×キーワードの組み合わせを決定します。",
                },
                {
                  n: "03",
                  t: "競合のエリアSEO状況を分析する",
                  b: "上位表示している競合のエリアページを分析します。コンテンツ量・内部リンク構造・構造化データの有無・口コミ数を確認します。Ahrefsでバックリンクの差もチェックし、勝てるキーワード・エリアを特定します。",
                },
                {
                  n: "04",
                  t: "NAP情報を棚卸しして統一する",
                  b: "自社サイト・Googleビジネスプロフィール・Yahoo!ビジネス・各ポータルサイト・SNSに掲載されているNAP（会社名・住所・電話番号）を全件リストアップします。表記ゆれを発見・修正し、全チャネルで同一表記に統一します。特に住所の丁目表記と電話番号のハイフン統一は重要です。",
                },
                {
                  n: "05",
                  t: "エリアページの情報設計と制作",
                  b: "調査結果をもとに、優先度の高いエリアから順にページを設計・制作します。各エリアページには、地域名を含むH1・地域の特性説明・対応サービス一覧・アクセス情報・Googleマップ・地域FAQ・実績・問い合わせCTAを含めます。文字数は1,500字以上を目安に、そのエリア固有の情報を盛り込みます。",
                },
                {
                  n: "06",
                  t: "LocalBusiness構造化データを実装する",
                  b: "JSON-LD形式でLocalBusiness（または業種別の派生型）を全ページに実装します。name・address・telephone・openingHours・areaServed・url・sameAs（SNS・ポータルサイトのURL）を記述します。Googleのリッチリザルトテストで検証してエラーがないことを確認してから公開します。",
                },
                {
                  n: "07",
                  t: "内部リンクのサイロ構造を設計・設置する",
                  b: "トップページからエリアページへの内部リンクを設置します。ヘッダー・フッター・サービスページ・対応エリア一覧ページからエリアページへのリンクを確保します。パンくずリストでエリアページの階層を明示し、Googleにサイト構造を伝えます。",
                },
                {
                  n: "08",
                  t: "Googleビジネスプロフィールとの連動設定",
                  b: "GBPの「ウェブサイト」欄にエリアページのURLを設定します。GBPの住所・電話番号・営業時間がWebサイト上の情報と完全に一致しているか確認します。投稿機能でエリアページのコンテンツを定期的に紹介し、エンゲージメントを維持します。",
                },
                {
                  n: "09",
                  t: "地域特化コンテンツを継続的に追加する",
                  b: "エリアページ内のブログ・コラムセクションに地域関連のコンテンツを定期追加します。「葛飾区でホームページ制作を選ぶポイント」「足立区の中小企業が使えるIT補助金」など地域密着の情報が長期的なアクセス増加につながります。",
                },
                {
                  n: "10",
                  t: "効果測定と改善のサイクルを回す",
                  b: "月次でサーチコンソールの地域キーワード順位・クリック数・コンバージョン数を確認します。順位が伸びていないキーワードはコンテンツの充実・内部リンクの追加・構造化データの見直しを行います。GBPのインサイト（経路・電話・ウェブサイトクリック数）もあわせて分析します。",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 成果を見るための指標 */}
        <section className="py-20" style={{ background: "#FFFFFF" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>KPIs</p>
            <h2 className="font-black text-[26px] mb-4" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              成果を見るための指標
            </h2>
            <p className="text-[15px] leading-[1.9] mb-10 max-w-2xl" style={{ color: "#374151" }}>
              ローカルSEOの効果は複数の指標を組み合わせて判断します。単一指標での評価は施策の方向性を誤る原因になります。
            </p>
            <div className="max-w-4xl space-y-0">
              {[
                {
                  n: "01",
                  t: "地域名キーワードの検索順位",
                  b: "「〇〇区 業種」「〇〇市 サービス名」でのGoogle検索順位を月次で追跡します。Googleサーチコンソールのクエリレポートで地域名を含むクエリを絞り込み、平均掲載順位の推移を確認します。上位10位以内への到達が当面の目標となります。",
                },
                {
                  n: "02",
                  t: "オーガニック検索からの地域流入数",
                  b: "Google Analytics 4で「Organic / Google」チャネルからの流入のうち、エリアページへのセッション数を追跡します。エリアページへの流入増加がそのまま地域集客力の向上を示します。",
                },
                {
                  n: "03",
                  t: "Googleビジネスプロフィールのインプレッション・クリック数",
                  b: "GBPインサイトでマップ検索でのインプレッション数・ウェブサイトクリック数・電話タップ数・ルート検索数を月次で確認します。これらの指標がローカルパック（地図表示）での露出と集客を直接反映します。",
                },
                {
                  n: "04",
                  t: "エリアページからのコンバージョン数",
                  b: "問い合わせフォーム送信・電話タップ・予約完了などのCVイベントをGA4で設定し、エリアページを経由したコンバージョン数を計測します。ローカルSEOの最終的な成果はこのコンバージョンで評価します。",
                },
                {
                  n: "05",
                  t: "ローカルパック（地図パック）での表示回数",
                  b: "サーチコンソールの「検索アナリティクス」でフィルター「表示」→「Web」以外の設定でマップ上の表示数を確認します。「〇〇区 ○○」などのローカル検索でマップブロックに自社が表示される頻度がMEO×SEO連携の成果を示します。",
                },
                {
                  n: "06",
                  t: "NAP一致率（サイテーション品質）",
                  b: "MozLocalやBrightLocalなどのツールで、主要ディレクトリ・ポータルサイトへのNAP掲載状況と一致率を確認します。NAP不一致が解消されると通常1〜2ヶ月以内にローカル評価の改善が見られます。",
                },
                {
                  n: "07",
                  t: "エリアページの検索表示回数（インプレッション）",
                  b: "サーチコンソールのページ別レポートでエリアページのインプレッション数推移を追います。インプレッションが増加しているにもかかわらずクリック率（CTR）が低い場合は、タイトルタグやメタディスクリプションの改善で流入を増やせます。",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-6 py-6" style={{ borderTop: "1px solid #E8E4DC" }}>
                  <span className="text-[12px] font-mono shrink-0 mt-1" style={{ color: "#9CA3AF" }}>{item.n}</span>
                  <div>
                    <p className="font-bold text-[15px] mb-2" style={{ color: "#0d1b2a" }}>{item.t}</p>
                    <p className="text-[14px] leading-[1.9]" style={{ color: "#374151" }}>{item.b}</p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid #E8E4DC" }} />
            </div>
          </div>
        </section>

        {/* 対応エリア */}
        <section className="py-20" style={{ background: "#F9F8F5" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: "#6B7280" }}>Service Areas</p>
            <h2 className="font-black text-[26px] mb-6" style={{ color: "#0d1b2a", fontFamily: "var(--font-serif)" }}>
              サイプレスのSEO対応エリア
            </h2>
            <p className="text-[15px] leading-[1.9] mb-8 max-w-2xl" style={{ color: "#374151" }}>
              サイプレスは東京都葛飾区を拠点に、東京・千葉・埼玉・神奈川のローカルSEO対策をリモートで支援しています。全国のビジネスにも対応しています。葛飾区・足立区・江戸川区・墨田区など東京東部エリアは特に実績が豊富です。
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/area/tokyo", label: "東京都" },
                { href: "/area/katsushika", label: "葛飾区" },
                { href: "/area/adachi", label: "足立区" },
                { href: "/area/edogawa", label: "江戸川区" },
                { href: "/area/sumida", label: "墨田区" },
                { href: "/area/arakawa", label: "荒川区" },
                { href: "/area/taito", label: "台東区" },
                { href: "/area/chiba", label: "千葉県" },
                { href: "/area/saitama", label: "埼玉県" },
                { href: "/area/kanagawa", label: "神奈川県" },
                { href: "/area/nationwide", label: "全国（リモート）" },
              ].map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="px-4 py-2 text-[13px] font-medium rounded transition-colors"
                  style={{ background: "#FFFFFF", border: "1px solid #E8E4DC", color: "#374151" }}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqItems} heading="ローカルSEOについてよくある質問" bgColor="#FFFFFF" />
        <RelatedPages links={relatedLinks} />
        <PageContactCTA
          heading="ローカルSEO・地域集客のご相談"
          body="地域名キーワードでの上位表示を目指した戦略設計と施策実施をご支援します。葛飾区・足立区・江戸川区など東京東部エリアをはじめ、千葉・埼玉・神奈川・全国対応。"
        />
      </main>
      <Footer />
    </>
  );
}
