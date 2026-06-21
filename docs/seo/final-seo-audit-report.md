# SEO最終監査レポート
株式会社サイプレス 公式サイト
作成日: 2026-06-21

## 1. サイト概要

- URL: https://www.cypress-all.co.jp/
- フレームワーク: Next.js (App Router) + TypeScript + Tailwind CSS
- 総ページ数: 多数（業種別・サービス別・地域別・成功事例を含む静的生成）
- 成功事例: 業種別・サービス別に分類して公開（`lib/data/caseStudies.ts`）

---

## 2. 実施した主な改善

### 2.1 内部リンク強化（最重要ギャップの解消）
これまでサービスハブページ（/seo・/meo・/aio・/web-design・/sns）から成功事例ページへの導線が存在しなかった点を解消しました。

- /seo → /cases/service/seo および業種別事例への「成功事例」セクションを追加
- /meo → /cases/service/meo および業種別事例への「成功事例」セクションを追加
- /aio → /cases/service/aio および業種別事例への「成功事例」セクションを追加
- /web-design → /cases/service/web-design および業種別事例への「成功事例」セクションを追加
- /sns → /cases/service/sns および業種別事例への「成功事例」セクションを追加
- 各ページの RelatedPages / relatedLinks にも成功事例リンクを追加

### 2.2 成功事例 → サービス/業種ページへの逆リンク
- 成功事例サービス別一覧（/cases/service/[service]）の末尾に、該当サービスページ・成功事例一覧・問い合わせへの誘導セクションを追加（SERVICE_HREFS を利用、未定義時は条件分岐で安全に表示）

### 2.3 業種ページ → 成功事例への内部リンク
- 全15業種ページ（/industries/*）の relatedLinks 先頭に、対応する成功事例（/cases/industry/*）へのリンクを追加
  - 業種ページのslugと成功事例industrySlugのマッピング差異を吸収（例: osteopathic→relaxation、beauty/hair-salon/nail-salon→beauty-salon、construction/renovation/plumbing→construction、pet-shop→pet、professional-service→professional、local-store→retail）

### 2.4 SEOキーワード戦略・運用ファイルの整備
- `lib/data/seoKeywordMap.ts` を新規作成（Tier別のキーワード・検索意図・CVゴール・関連ページマップ）
- `lib/data/seoPriorityPages.ts` を新規作成（Search Console運用前提の優先URLリスト）
- `docs/seo/` ディレクトリに運用ドキュメントを整備
  - external-seo-checklist.md（外部SEO・サイテーション）
  - search-console-checklist.md（Search Console運用）
  - final-seo-audit-report.md（本レポート）

### 2.5 強すぎる表現の修正
- /area/katsushika: 「確実に上位表示できるキーワード」→「上位表示を狙いやすいキーワード」
- /area/tokyo: 「確実に上位を取れる」→「上位を狙いやすい」
- /meo/local-keyword: 「確実に上位表示を達成してから」→「着実に上位表示を目指してから」
- components/home/ProblemSolution.tsx: 「確実に上位表示を狙います」→「着実に上位表示を狙います」

### 2.6 Core Web Vitals（FID→INP）の表記
- 既存ページ（/web-design、/seo/mobile-seo、/seo/page-speed、/web-design/page-speed、/web-design/mobile-friendly）の Core Web Vitals 記述は、FIDがINPに置き換わった事実を正しく説明済みであることを確認。誇張・誤情報なし。

---

## 3. 残課題と推奨アクション

### 短期（1〜2週間）

1. Search Console インデックス登録リクエスト
   - /meo, /seo, /aio, /web-design, /cases 等の主要ページ
   - search-console-checklist.md 参照

2. Googleビジネスプロフィール整備
   - external-seo-checklist.md 参照

3. 成功事例の継続拡充
   - 業種別事例が少ない業種（relaxation・cleaning・pet・logistics など）の事例追加

### 中期（1〜3ヶ月）

1. コラム・ナレッジコンテンツの拡充
   - /column/ に月2〜4本のSEO関連記事を追加

2. 地域SEO強化
   - /area/katsushika の内容拡充、近隣区の地域事例追加

3. E-E-A-T強化
   - 編集方針・代表者の専門性ページの整備

### 長期（3〜6ヶ月）

1. 外部被リンク獲得（note/Zenn・プレスリリース）
2. 動画コンテンツ展開（YouTube・GBP動画投稿）

---

## 4. キーワード優先マップ（上位10ワード）

| キーワード | 対象URL | 優先度 |
|-----------|---------|--------|
| 株式会社サイプレス | / | 最高 |
| MEO対策 | /meo | 最高 |
| ホームページ制作 | /web-design | 最高 |
| 葛飾区 ホームページ制作 | /area/katsushika | 最高 |
| SEO対策 中小企業 | /seo | 高 |
| AIO対策 | /aio | 高 |
| 飲食店 MEO対策 | /industries/restaurant | 高 |
| 美容室 ホームページ制作 | /industries/beauty | 高 |
| クリニック ホームページ制作 | /industries/clinic | 中 |
| 不動産会社 SEO対策 | /industries/real-estate | 中 |

詳細は `lib/data/seoKeywordMap.ts` を参照。

---

## 5. Search Console 登録推奨URL

`docs/seo/search-console-checklist.md` および `lib/data/seoPriorityPages.ts` を参照。

---

## 6. 外部SEOチェックリスト

`docs/seo/external-seo-checklist.md` を参照。
