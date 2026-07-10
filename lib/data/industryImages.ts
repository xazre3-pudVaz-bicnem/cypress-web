// lib/data/industryImages.ts
// 業種別画像管理ファイル
// public/ 内の画像を視覚確認のうえ業種ごとに最適化して割り当てています。
// すべて日本人・日本の店舗/施設を写した実写風の高品質画像のみを採用し、
// 青いデジタル背景・抽象テクノロジー・海外感の強い画像は業種メインに使用していません。

export interface IndustryImageSet {
  slug: string;
  heroImage: string;
  cardImage: string;
  ogImage: string;
  alt: string;
}

export const INDUSTRY_IMAGES: Record<string, IndustryImageSet> = {
  restaurant: {
    slug: "restaurant",
    heroImage: "/ChatGPT Image 2026年6月14日 21_09_20 (1).jpg",
    cardImage: "/ChatGPT Image 2026年6月14日 21_09_20 (1).jpg",
    ogImage: "/ChatGPT Image 2026年6月14日 21_09_20 (1).jpg",
    alt: "飲食店のMEO対策とホームページ制作支援イメージ",
  },
  beauty: {
    slug: "beauty",
    heroImage: "/ChatGPT Image 2026年6月19日 09_00_02 (4).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_00_02 (4).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_00_02 (4).jpg",
    alt: "美容室・ヘアサロンのSEO対策とWeb集客支援イメージ",
  },
  clinic: {
    slug: "clinic",
    heroImage: "/ChatGPT Image 2026年6月19日 09_05_27 (2).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_05_27 (2).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_05_27 (1).jpg",
    alt: "クリニック・内科医院のWeb集客と患者導線設計イメージ",
  },
  construction: {
    slug: "construction",
    heroImage: "/ChatGPT Image 2026年6月19日 09_10_04 (4).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_10_04 (4).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_10_04 (4).jpg",
    alt: "建設会社・工務店のホームページ制作とSEO対策支援イメージ",
  },
  "hair-salon": {
    slug: "hair-salon",
    heroImage: "/ChatGPT Image 2026年6月19日 08_59_57 (2).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 08_59_57 (2).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 08_59_57 (1).jpg",
    alt: "ヘアサロン・美容室のMEO対策とWeb集客支援イメージ",
  },
  "local-store": {
    slug: "local-store",
    heroImage: "/ChatGPT Image 2026年6月14日 21_10_25 (10).jpg",
    cardImage: "/ChatGPT Image 2026年6月14日 21_10_25 (10).jpg",
    ogImage: "/ChatGPT Image 2026年6月14日 21_10_25 (10).jpg",
    alt: "地域店舗のGoogleビジネスプロフィール活用と集客支援イメージ",
  },
  "nail-salon": {
    slug: "nail-salon",
    heroImage: "/ChatGPT Image 2026年6月19日 09_03_13 (4).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_03_13 (4).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_03_13 (4).jpg",
    alt: "ネイルサロンのMEO対策とInstagram集客支援イメージ",
  },
  osteopathic: {
    slug: "osteopathic",
    heroImage: "/ChatGPT Image 2026年6月19日 09_05_31 (8).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_05_31 (8).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_05_31 (8).jpg",
    alt: "整体院・整骨院のMEO対策と地域集客支援イメージ",
  },
  "pet-shop": {
    slug: "pet-shop",
    heroImage: "/ChatGPT Image 2026年6月19日 09_26_45 (3).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_26_45 (3).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_26_45 (3).jpg",
    alt: "ペットショップ・トリミングサロンのGoogleマップ集客支援イメージ",
  },
  plumbing: {
    slug: "plumbing",
    heroImage: "/ChatGPT Image 2026年6月19日 09_10_12 (8).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_10_12 (8).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_10_12 (8).jpg",
    alt: "水道工事・設備業者のホームページ制作とMEO対策支援イメージ",
  },
  "professional-service": {
    slug: "professional-service",
    heroImage: "/ChatGPT Image 2026年6月14日 21_13_52.jpg",
    cardImage: "/ChatGPT Image 2026年6月14日 21_13_52.jpg",
    ogImage: "/ChatGPT Image 2026年6月14日 21_13_52.jpg",
    alt: "税理士・弁護士・士業のWeb集客と問い合わせ導線設計イメージ",
  },
  "real-estate": {
    slug: "real-estate",
    heroImage: "/ChatGPT Image 2026年6月19日 09_10_08 (3).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_10_08 (3).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_10_08 (3).jpg",
    alt: "不動産会社のホームページ制作とSEO対策支援イメージ",
  },
  renovation: {
    slug: "renovation",
    heroImage: "/ChatGPT Image 2026年6月19日 09_10_08 (4).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_10_08 (4).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_10_08 (4).jpg",
    alt: "リフォーム会社のホームページ制作と集客設計イメージ",
  },
  school: {
    slug: "school",
    heroImage: "/ChatGPT Image 2026年6月19日 09_27_09 (1).jpg",
    cardImage: "/ChatGPT Image 2026年6月19日 09_27_09 (1).jpg",
    ogImage: "/ChatGPT Image 2026年6月19日 09_27_09 (1).jpg",
    alt: "学習塾・スクールのSEO対策と問い合わせ導線設計イメージ",
  },
  cleaning: {
    slug: "cleaning",
    heroImage: "/ChatGPT Image 2026年6月14日 21_10_24 (6).jpg",
    cardImage: "/ChatGPT Image 2026年6月14日 21_10_24 (6).jpg",
    ogImage: "/ChatGPT Image 2026年6月14日 21_10_24 (6).jpg",
    alt: "清掃業・ハウスクリーニングのMEO対策とWeb集客支援イメージ",
  },
};
