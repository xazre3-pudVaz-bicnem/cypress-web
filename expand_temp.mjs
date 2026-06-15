import { readFileSync, writeFileSync } from "fs";

const filePath = "C:/projects/cypress/lib/data/industrySubPages.ts";
let content = readFileSync(filePath, "utf8");

function replaceSection(label, oldStr, newStr) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    console.log(label + ": replaced");
  } else {
    console.log(label + ": NOT FOUND (may already be expanded)");
  }
}

// clinic/meo
replaceSection("clinic/meo",
`    faqs: [
      { q: "医療機関でもMEO対策は有効ですか？", a: "非常に有効です。特に「地域名＋診療科目」での検索では、Googleマップが先に表示されるケースが多く、初診患者のほとんどがスマートフォンでGoogleマップを確認して来院を判断します。" },
    ],
    related: [
      { href: "/industries/clinic", label: "医療機関向けサービス", desc: "総合支援" },
      { href: "/solutions/clinic-marketing", label: "クリニックマーケティング", desc: "集客戦略" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
    ],
  },
  {
    industry: "clinic",
    slug: "web-design",`,
`    faqs: [
      { q: "医療機関でもMEO対策は有効ですか？", a: "非常に有効です。特に「地域名＋診療科目」での検索では、Googleマップが先に表示されるケースが多く、初診患者のほとんどがスマートフォンでGoogleマップを確認して来院を判断します。" },
      { q: "医療広告ガイドラインに触れずにGBPを充実させるには？", a: "診療科目・診療時間・院内設備・医師の経歴など事実情報の掲載は問題ありません。治療効果の保証表現や他院との比較表現を避け、患者が判断できる客観的な情報提供を心がけてください。" },
      { q: "患者の口コミにはどのように返信すれば良いですか？", a: "個人情報に触れず、感謝の気持ちと改善への姿勢を簡潔に示す返信が効果的です。ネガティブな口コミにも誠実に対応することで、閲覧した第三者への信頼性向上につながります。" },
      { q: "オンライン予約システムとGBPを連携できますか？", a: "はい。Googleの予約ボタン機能に対応した予約システムを利用することで、GBPから直接予約を受け付けられます。診療時間外の予約獲得にも効果的です。" },
      { q: "クリニックのMEO対策にかかる費用の目安は？", a: "月額3〜6万円が目安です。競合クリニック数や対象診療科目の検索量によって最適なプランが異なります。まずは現状のGBP診断からご相談ください。" },
      { q: "MEO対策の効果が出るまでどのくらいかかりますか？", a: "GBP整備・写真追加・口コミ獲得を継続すると、早い場合は1〜3ヶ月で順位変動が確認できます。競合が多い都市部では3〜6ヶ月を目安にお考えください。" },
    ],
    related: [
      { href: "/industries/clinic", label: "医療機関向けサービス", desc: "総合支援" },
      { href: "/solutions/clinic-marketing", label: "クリニックマーケティング", desc: "集客戦略" },
      { href: "/services/meo", label: "MEO対策", desc: "Googleマップ最適化" },
      { href: "/services/seo", label: "SEO対策", desc: "検索上位表示" },
      { href: "/services/web-design", label: "ホームページ制作", desc: "クリニックサイト制作" },
      { href: "/cost/meo", label: "MEO対策の費用", desc: "料金の目安" },
      { href: "/faq/meo-basics", label: "MEO基礎FAQ", desc: "よくある質問" },
      { href: "/contact", label: "お問い合わせ", desc: "無料相談はこちら" },
    ],
  },
  {
    industry: "clinic",
    slug: "web-design",`
);

writeFileSync(filePath, content, "utf8");
console.log("File written");
