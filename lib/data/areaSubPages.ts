export interface AreaSubPage {
  area: string;
  slug: string;
  title: string;
  titleEn: string;
  metaDescription: string;
  intro: string;
  points: { num: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string; desc: string }[];
}

export const areaSubPages: AreaSubPage[] = [
  // Tokyo
  {
    area: "tokyo",
    slug: "meo",
    title: "東京都のMEO対策",
    titleEn: "Tokyo MEO",
    metaDescription: "東京都のMEO対策専門ページ。東京都内でGoogleマップ上位表示を実現し、地域のお客様から選ばれるビジネスを構築します。",
    intro: "東京都は日本最大のビジネス市場であり、Googleマップの競合も激しい地域です。東京都内でMEO対策を成功させるには、競合分析・地域特性を踏まえた戦略的なアプローチが必要です。",
    points: [
      { num: "01", title: "東京都内の激しい競合に打ち勝つMEO戦略", body: "東京都内は各業種・エリアともGoogleマップの競合が多く、GBPの充実度・口コミ数・投稿頻度が差別化の鍵になります。" },
      { num: "02", title: "23区・市ごとの地域特性に合わせた対策", body: "渋谷区・新宿区などの商業地域と、葛飾区・足立区などの住宅地域では検索傾向が異なります。地域特性に合わせた施策を設計します。" },
      { num: "03", title: "東京の多言語対応・訪日外国人対策", body: "観光地・繁華街では英語・中国語・韓国語のGBP対応が有効です。インバウンド集客を狙う業種では多言語対応を実施します。" },
      { num: "04", title: "東京都内全エリアに対応", body: "23区はもちろん、立川・吉祥寺・八王子など東京都内全エリアのMEO対策に対応しています。" },
    ],
    faqs: [
      { q: "東京都内でMEO対策の費用は高くなりますか？", a: "競合が多い地域ほど施策の難易度が上がりますが、費用は月額2〜6万円の範囲内で対応しています。地域・業種によって最適なプランをご提案します。" },
    ],
    related: [
      { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京都全体の対応" },
      { href: "/area/katsushika/meo", label: "葛飾区のMEO対策", desc: "葛飾区特化支援" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  {
    area: "tokyo",
    slug: "seo",
    title: "東京都のSEO対策",
    titleEn: "Tokyo SEO",
    metaDescription: "東京都のSEO対策専門ページ。東京都内でGoogle検索上位表示を実現し、継続的なオーガニック集客を構築します。",
    intro: "東京都内のSEO対策は競合が多く、質の高いコンテンツと技術的SEOの両立が求められます。東京都内でのWeb集客を本格的に構築するためのSEO戦略を提供します。",
    points: [
      { num: "01", title: "「東京＋業種名」での検索上位を狙う", body: "「東京 〇〇会社」「東京都 〇〇サービス」等の高競合キーワードでも、コンテンツの質と技術的SEOで上位表示を実現します。" },
      { num: "02", title: "東京23区・市別のローカルSEO設計", body: "単に「東京」ではなく「葛飾区」「渋谷区」等の区・市レベルでのローカルSEOを設計し、地域密着型の集客を強化します。" },
      { num: "03", title: "E-E-A-Tを重視した東京向けコンテンツ", body: "東京に関する地域専門性・実績・一次情報を活用したコンテンツで、Googleが信頼する情報源としての評価を高めます。" },
    ],
    faqs: [
      { q: "東京都でのSEO対策は難しいですか？", a: "競合は多いですが、地域名×業種の組み合わせキーワードから始めることで効率的に成果を出せます。まずは狙えるキーワードの調査からご相談ください。" },
    ],
    related: [
      { href: "/area/tokyo", label: "東京都の集客支援", desc: "東京都全体の対応" },
      { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示" },
    ],
  },
  // Katsushika
  {
    area: "katsushika",
    slug: "meo",
    title: "葛飾区のMEO対策",
    titleEn: "Katsushika MEO",
    metaDescription: "葛飾区のMEO対策専門ページ。亀有・柴又・高砂・金町エリアでGoogleマップ上位表示を実現し、地域の集客を強化します。",
    intro: "葛飾区はサイプレスの地元エリアです。亀有・柴又・高砂・金町・新小岩など各エリアの地域特性を熟知した上で、葛飾区内の各業種に最適なMEO対策を実施します。",
    points: [
      { num: "01", title: "葛飾区の地域特性を知り尽くした対策", body: "葛飾区は下町の情緒が残る住宅地で、飲食・美容・整骨院・クリーニング等の生活密着型ビジネスが多いエリアです。地域特性に合わせたMEO戦略を設計します。" },
      { num: "02", title: "亀有・柴又・高砂エリア別の競合分析", body: "亀有・柴又・高砂・金町等のエリアごとにGoogleマップの競合状況が異なります。エリア別の競合分析で上位表示の穴を特定します。" },
      { num: "03", title: "葛飾区の地域イベント・特性を活用した投稿", body: "葛飾納涼花火大会・柴又七福神めぐり等の地域イベントを活用したGBP投稿でローカル感と更新頻度を高めます。" },
      { num: "04", title: "葛飾区全域・駅周辺エリアを完全対応", body: "亀有・柴又・高砂・金町・新小岩・立石・青砥等、葛飾区内の全エリアに対応しています。" },
    ],
    faqs: [
      { q: "葛飾区でのMEO対策の実績はありますか？", a: "はい、葛飾区に拠点を置くサイプレスが地元の飲食店・美容室・整骨院・専門店等のMEO対策を多数支援しています。葛飾区の競合状況を熟知した上で最適な施策を提案します。" },
    ],
    related: [
      { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区全体の対応" },
      { href: "/area/tokyo/meo", label: "東京都のMEO対策", desc: "東京都全体の支援" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  {
    area: "katsushika",
    slug: "seo",
    title: "葛飾区のSEO対策",
    titleEn: "Katsushika SEO",
    metaDescription: "葛飾区のSEO対策専門ページ。葛飾区・亀有・柴又・高砂エリアでのGoogle検索上位表示を実現し、地域集客を強化します。",
    intro: "葛飾区での検索集客を強化するローカルSEO対策です。「葛飾区＋業種名」「亀有 〇〇」等のキーワードで検索上位を実現し、地域の顧客を継続的に獲得します。",
    points: [
      { num: "01", title: "「葛飾区＋業種名」での検索上位", body: "「葛飾区 整骨院」「葛飾区 税理士」等のキーワードで上位表示し、葛飾区内の見込み客を継続的に獲得します。" },
      { num: "02", title: "葛飾区の地域情報コンテンツで差別化", body: "葛飾区の地域情報・交通アクセス・歴史・観光等を絡めたコンテンツで、地域に根ざした専門家・企業としての評価を高めます。" },
      { num: "03", title: "LocalBusinessスキーマで葛飾区の店舗情報を構造化", body: "葛飾区の住所・営業時間・サービス内容をSchema.orgで構造化し、Googleのローカル検索評価を高めます。" },
    ],
    faqs: [
      { q: "葛飾区でSEO対策をするメリットは何ですか？", a: "葛飾区は東京23区の中でも比較的競合が少なく、SEO施策の効果が出やすいエリアです。地元密着型のコンテンツで早期の上位表示が期待できます。" },
    ],
    related: [
      { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区全体" },
      { href: "/services/seo", label: "SEO対策サービス", desc: "検索上位表示" },
    ],
  },
  {
    area: "katsushika",
    slug: "web-design",
    title: "葛飾区のホームページ制作",
    titleEn: "Katsushika Web Design",
    metaDescription: "葛飾区のホームページ制作専門ページ。葛飾区の中小企業・店舗向けに、SEO対応・スマホ最適化・高速表示のウェブサイトを制作します。",
    intro: "葛飾区に拠点を持つサイプレスが、葛飾区内の企業・店舗のホームページ制作を地元密着でサポートします。対面でのご相談にも対応します。",
    points: [
      { num: "01", title: "葛飾区の地域ビジネスに最適なサイト設計", body: "飲食・美容・整骨院・専門店・工務店など葛飾区の主要業種のホームページ制作実績をもとに、最適なサイト設計をご提案します。" },
      { num: "02", title: "地元密着で対面相談・アフターサポートも充実", body: "葛飾区内の企業様は対面でのご相談に対応可能です。制作後のSEO・MEO運用サポートも継続してご支援します。" },
      { num: "03", title: "「葛飾区＋業種」SEOを組み込んだサイト制作", body: "ホームページ制作と同時に葛飾区のローカルSEO対策を組み込み、公開後から地域集客が始まる状態を実現します。" },
    ],
    faqs: [
      { q: "葛飾区内の企業でも対面で相談できますか？", a: "はい、葛飾区に拠点があるため対面でのご相談に対応しています。お気軽にご連絡ください。" },
    ],
    related: [
      { href: "/area/katsushika", label: "葛飾区の集客支援", desc: "葛飾区全体" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "制作の詳細" },
    ],
  },
  // Adachi
  {
    area: "adachi",
    slug: "meo",
    title: "足立区のMEO対策",
    titleEn: "Adachi MEO",
    metaDescription: "足立区のMEO対策専門ページ。北千住・綾瀬・竹ノ塚エリアでGoogleマップ上位表示を実現します。",
    intro: "足立区は北千住・綾瀬・竹ノ塚・西新井など複数の生活拠点が存在し、各エリアごとに異なる競合状況があります。足立区の地域特性を踏まえたMEO対策で上位表示を実現します。",
    points: [
      { num: "01", title: "北千住・綾瀬・竹ノ塚エリア別対策", body: "足立区の各エリアのGoogleマップ競合状況を分析し、最も効果的な施策を優先して実施します。" },
      { num: "02", title: "足立区の住宅密集地での生活密着型集客", body: "足立区は住宅地が多く、飲食・美容・クリーニング・医療等の生活密着型ビジネスのMEO集客が特に有効です。" },
      { num: "03", title: "足立区全域・主要駅周辺を完全カバー", body: "北千住・綾瀬・竹ノ塚・西新井・梅島・東武伊勢崎線各駅周辺での対策に対応しています。" },
    ],
    faqs: [
      { q: "足立区でのMEO対策の効果はどのくらいですか？", a: "足立区は東京23区の中でも競合が適度で、適切なMEO対策で1〜3ヶ月での上位表示実績があります。" },
    ],
    related: [
      { href: "/area/adachi", label: "足立区の集客支援", desc: "足立区全体" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  // Edogawa
  {
    area: "edogawa",
    slug: "meo",
    title: "江戸川区のMEO対策",
    titleEn: "Edogawa MEO",
    metaDescription: "江戸川区のMEO対策専門ページ。小岩・葛西・西葛西エリアでGoogleマップ上位表示を実現します。",
    intro: "江戸川区は小岩・葛西・西葛西・瑞江・一之江等に生活拠点が分散し、多様な業種のMEO集客ニーズがあります。江戸川区の地域特性を活かしたMEO対策を提供します。",
    points: [
      { num: "01", title: "小岩・葛西・西葛西エリア別の競合分析", body: "各エリアのGoogleマップ競合状況は異なります。エリア別の分析で上位表示を狙える隙間を特定します。" },
      { num: "02", title: "インドコミュニティへのアプローチ（西葛西）", body: "西葛西は国内最大のインドコミュニティがあり、インド料理・言語に対応した多言語GBP設定が有効なエリアです。" },
      { num: "03", title: "江戸川区の大型住宅地の生活密着型集客", body: "子育てファミリー層が多い江戸川区では、小児科・学習塾・飲食・美容等の生活密着型ビジネスのMEOが特に有効です。" },
    ],
    faqs: [
      { q: "江戸川区でのMEO支援実績はありますか？", a: "はい。隣接する葛飾区に拠点を持つサイプレスが江戸川区内の企業・店舗のMEO支援実績を有しています。" },
    ],
    related: [
      { href: "/area/edogawa", label: "江戸川区の集客支援", desc: "江戸川区全体" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  // Sumida
  {
    area: "sumida",
    slug: "meo",
    title: "墨田区のMEO対策",
    titleEn: "Sumida MEO",
    metaDescription: "墨田区のMEO対策専門ページ。錦糸町・押上・両国エリアでGoogleマップ上位表示を実現します。",
    intro: "墨田区は錦糸町・押上・両国・曳舟などの個性豊かなエリアが集まり、観光・飲食・下町ビジネスのMEO集客が活発な地域です。",
    points: [
      { num: "01", title: "錦糸町・押上・両国エリアの高い集客ポテンシャル", body: "錦糸町は商業地、押上（スカイツリー）は観光地、両国は相撲・歴史観光地として集客力が高く、MEO対策の効果が出やすいエリアです。" },
      { num: "02", title: "観光客・インバウンドを意識したGBP設定", body: "スカイツリー周辺等の観光エリアでは、英語・中国語のGBP対応とGoogle翻訳への対応が来訪者獲得に有効です。" },
    ],
    faqs: [
      { q: "墨田区での集客はどのような業種に有効ですか？", a: "飲食・観光・美容・工場直営小売等が特に有効です。錦糸町は商業地としてオフィス向けサービスへの集客も可能です。" },
    ],
    related: [
      { href: "/area/sumida", label: "墨田区の集客支援", desc: "墨田区全体" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  // Chiba
  {
    area: "chiba",
    slug: "meo",
    title: "千葉県のMEO対策",
    titleEn: "Chiba MEO",
    metaDescription: "千葉県のMEO対策専門ページ。千葉市・船橋・松戸・柏・市川エリアでGoogleマップ上位表示を実現します。",
    intro: "千葉県は東京都に隣接し、市川・船橋・松戸・柏・千葉市など複数の都市圏が存在します。千葉県内の各エリアの特性を活かしたMEO対策を提供します。",
    points: [
      { num: "01", title: "千葉県内の主要都市・エリア別対応", body: "千葉市・船橋・松戸・柏・市川・浦安・習志野等の千葉県内主要都市のMEO対策に対応しています。" },
      { num: "02", title: "東京都内との差別化した地域集客戦略", body: "千葉県の地域特性（東京近郊の住宅都市・商業エリア）を活かし、東京に流れていた集客を地元に呼び込む戦略を設計します。" },
    ],
    faqs: [
      { q: "千葉県でのMEO対策はオンラインで相談できますか？", a: "はい、Zoom等のオンラインでご相談対応しています。千葉県全域の企業様からのご相談を受け付けています。" },
    ],
    related: [
      { href: "/area/chiba", label: "千葉県の集客支援", desc: "千葉県全体" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  // Saitama
  {
    area: "saitama",
    slug: "meo",
    title: "埼玉県のMEO対策",
    titleEn: "Saitama MEO",
    metaDescription: "埼玉県のMEO対策専門ページ。さいたま市・川口・越谷・所沢エリアでGoogleマップ上位表示を実現します。",
    intro: "埼玉県は大宮・さいたま市・川口・越谷・所沢など多数の都市が点在し、各エリアで活発なMEO集客需要があります。埼玉県の地域特性に合わせたMEO対策を提供します。",
    points: [
      { num: "01", title: "さいたま市・大宮・川口エリア別対応", body: "大宮・さいたま市・川口・越谷・所沢等の主要エリアごとの競合状況を分析し、最適なMEO施策を実施します。" },
      { num: "02", title: "埼玉県内の地域ビジネスの集客強化", body: "埼玉県は東京の北側に位置する住宅・商業エリアが混在する地域。地元に根ざした生活密着型ビジネスのMEO集客が特に有効です。" },
    ],
    faqs: [
      { q: "埼玉県でもMEO対策の支援を受けられますか？", a: "はい、オンラインでのご相談・サービス提供に対応しています。埼玉県内のどのエリアでも対応可能です。" },
    ],
    related: [
      { href: "/area/saitama", label: "埼玉県の集客支援", desc: "埼玉県全体" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  // Kanagawa
  {
    area: "kanagawa",
    slug: "meo",
    title: "神奈川県のMEO対策",
    titleEn: "Kanagawa MEO",
    metaDescription: "神奈川県のMEO対策専門ページ。横浜・川崎・相模原エリアでGoogleマップ上位表示を実現します。",
    intro: "神奈川県は横浜・川崎・相模原・藤沢・横須賀など多彩な都市が集まり、各エリアで活発なMEO需要があります。神奈川県内の地域特性に合わせたMEO対策を提供します。",
    points: [
      { num: "01", title: "横浜・川崎・相模原の都市別MEO戦略", body: "横浜（都市・港・観光）・川崎（工業・商業）・相模原（郊外住宅地）等の都市特性に合わせたMEO施策を設計します。" },
      { num: "02", title: "インバウンド需要のある横浜エリアの多言語対応", body: "横浜中華街・山下公園周辺等の観光地では多言語GBP対応が来訪者獲得に有効です。" },
    ],
    faqs: [
      { q: "神奈川県でのMEO対策はオンラインで対応できますか？", a: "はい、Zoom等でのオンライン対応に対応しています。神奈川県内全域の企業様のMEO対策を支援しています。" },
    ],
    related: [
      { href: "/area/kanagawa", label: "神奈川県の集客支援", desc: "神奈川県全体" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
    ],
  },
  // Nationwide
  {
    area: "nationwide",
    slug: "meo",
    title: "全国対応のMEO対策",
    titleEn: "Nationwide MEO",
    metaDescription: "全国対応のMEO対策サービス。日本全国どこでもGoogleマップ上位表示を実現するMEO対策を提供します。オンラインで全国サポート。",
    intro: "サイプレスはオンラインでの全国対応が可能です。東京以外の地域でも、Googleマップ上位表示を目指したMEO対策を同品質で提供します。",
    points: [
      { num: "01", title: "全国どこでもオンラインでMEO対策", body: "Zoom・Google Meetでのオンライン相談・報告に対応しており、全国どこでも同品質のMEO対策を提供します。" },
      { num: "02", title: "地方都市は競合が少なく効果が出やすい", body: "地方都市は東京・大阪より競合が少なく、MEO対策の効果が短期間で出やすいケースが多いです。" },
      { num: "03", title: "複数拠点を持つ企業のマルチロケーション対応", body: "全国に複数店舗・支店を持つ企業のGBP一元管理と各拠点のMEO最適化に対応しています。" },
    ],
    faqs: [
      { q: "東京以外でもMEO対策は可能ですか？", a: "はい、全国対応しています。北海道から沖縄まで、オンラインで同品質のMEO対策サービスを提供しています。" },
    ],
    related: [
      { href: "/area/nationwide", label: "全国対応サービス", desc: "全国での集客支援" },
      { href: "/services/meo", label: "MEO対策サービス", desc: "Googleマップ最適化" },
      { href: "/contact", label: "全国からのご相談", desc: "お気軽にご連絡ください" },
    ],
  },
];

export function getAreaSubPage(area: string, slug: string): AreaSubPage | undefined {
  return areaSubPages.find((p) => p.area === area && p.slug === slug);
}

export function getAreaSubPagesByArea(area: string): AreaSubPage[] {
  return areaSubPages.filter((p) => p.area === area);
}
