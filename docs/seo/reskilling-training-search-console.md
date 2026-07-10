# リスキリング研修・人材開発支援助成金クラスタ — Search Console 運用ドキュメント

作成日：2026年7月10日
対象：人材開発支援助成金・リスキリング研修・AI/DX/Webマーケティング研修 で流入を獲得し、提携研修会社への紹介につなげるページ群。

---

## 1. 今回追加したURL一覧

### 研修ページ（7ページ）

| URL | 役割 | メインキーワード |
| --- | --- | --- |
| `/training/reskilling-subsidy` | 中心（ピラー）ページ | 人材開発支援助成金 研修 / リスキリング研修 助成金 |
| `/training/ai-dx-reskilling` | 補助 | AI研修 助成金 / DX研修 助成金 |
| `/training/chatgpt-ai-training` | 補助 | ChatGPT研修 助成金 / 生成AI研修 助成金 |
| `/training/web-marketing-training` | 補助 | Webマーケティング研修 助成金 / SEO研修 法人 |
| `/training/hr-development-subsidy-guide` | 制度確認・E-E-A-T | 人材開発支援助成金 申請前 / 助成金 研修 注意点 |
| `/training/reskilling-training-company-referral` | 紹介相談 | リスキリング研修会社 / 研修会社 紹介 |
| `/partner/training-company-referral` | 紹介モデル説明 | 研修会社 紹介 / 助成金対応 研修会社 紹介 |

### 専門コラム（15本）

| URL | メインキーワード |
| --- | --- |
| `/column/hr-development-subsidy-reskilling` | 人材開発支援助成金 研修 |
| `/column/reskilling-training-subsidy` | リスキリング研修 助成金 |
| `/column/ai-training-subsidy` | AI研修 助成金 |
| `/column/dx-training-subsidy` | DX研修 助成金 |
| `/column/chatgpt-training-company` | 生成AI研修 法人 |
| `/column/web-marketing-training-subsidy` | Webマーケティング研修 助成金 |
| `/column/subsidy-training-company-selection` | 助成金対応 研修会社 紹介 |
| `/column/reskilling-training-before-application` | リスキリング研修 相談 |
| `/column/ai-dx-training-for-sme` | 中小企業 AI研修 |
| `/column/training-company-referral-model` | 研修会社 紹介 |
| `/column/employee-ai-training` | 社員向け AI研修 |
| `/column/sales-ai-training` | 営業 AI活用 研修 |
| `/column/office-work-ai-training` | 事務作業 AI 効率化 研修 |
| `/column/google-business-profile-training` | Googleビジネスプロフィール 研修 |
| `/column/seo-meo-training-for-companies` | SEO 研修 法人 |

### その他

- `/column/category/training` — 研修・人材育成カテゴリ一覧（新設）
- `/privacy-policy` — 第三者提供（提携研修会社への情報共有）条項を含む（従来リンク切れだったため新規作成）

---

## 2. 優先的にインデックス登録リクエストすべきURL

Search Console の「URL検査 → インデックス登録をリクエスト」を、以下の順に実施する。
1日あたりのリクエスト数に上限があるため、優先度順に数日に分けて行う。

**最優先（初日）**
1. `/training/reskilling-subsidy`
2. `/training/hr-development-subsidy-guide`
3. `/training/ai-dx-reskilling`
4. `/training/chatgpt-ai-training`
5. `/training/web-marketing-training`

**次点（2日目）**
6. `/training/reskilling-training-company-referral`
7. `/partner/training-company-referral`
8. `/column/category/training`
9. `/column/hr-development-subsidy-reskilling`
10. `/column/reskilling-training-subsidy`

**3日目以降**
残りのコラム13本（`/column/ai-training-subsidy` 以降）を、キーワードの検索ボリュームが大きいと想定される順に登録リクエストする。

あわせて `https://www.cypress-all.co.jp/sitemap.xml` を Search Console の「サイトマップ」から再送信する。

---

## 3. 狙うキーワード

### メイン（中心ページで狙う）
- 人材開発支援助成金 研修
- 人材開発支援助成金 リスキリング
- 事業展開等リスキリング支援コース 研修
- リスキリング研修 助成金
- 中小企業 リスキリング研修

### 法人向け（補助ページで狙う）
- 法人向け AI研修 / 法人向け DX研修
- 中小企業 AI研修 / 中小企業 DX研修
- 社員向け AI研修 / 管理職向け AI研修 / 営業向け AI研修
- ChatGPT 社員研修 / 生成AI 社員研修
- Web担当者向け 研修 / マーケティング研修 法人

### 課題系（コラムで狙う）
- 社員 AI 活用 研修 / 従業員 DX 研修
- 営業 AI 活用 研修 / 事務作業 AI 効率化 研修
- Web集客 研修 / SEO 研修 法人 / MEO 研修 法人
- SNS運用 研修 法人 / Googleビジネスプロフィール 研修

### 相談系（CV直結・最重要）
- リスキリング研修 相談 / 助成金 研修 相談
- AI研修 導入相談 / DX研修 導入相談
- 社員研修 研修会社 紹介 / 助成金対応 研修会社 紹介
- 人材開発支援助成金 研修会社

---

## 4. 2週間後に見る指標

Search Console の「検索パフォーマンス」で、日付を「公開日以降」に絞り、ページをフィルタ（`/training/` を含む・`/column/` かつ研修系slug）して確認する。

| 指標 | 見方 | 目安 |
| --- | --- | --- |
| インデックス済みページ数 | 「ページ」レポート | 追加22ページ（研修7＋コラム15）がすべて「登録済み」になっているか |
| 表示回数 | 検索パフォーマンス | 0でなければ認識されている。中心ページが最多になるのが理想 |
| クリック数 | 検索パフォーマンス | 初期は少なくて正常。表示回数の推移を優先して見る |
| 平均掲載順位 | 検索パフォーマンス | 新規ページは30〜80位から始まることが多い |
| クエリ | 検索パフォーマンス | 意図したキーワードで表示されているか。想定外のクエリは新規コンテンツのヒントになる |

**注意**：新規ページは2週間では順位が安定しない。この時点では「インデックスされているか」「意図したクエリで表示され始めているか」の2点のみを判断材料にし、順位で一喜一憂しない。

---

## 5. 表示回数は出ているがクリックされない場合の改善方法

平均掲載順位が10位以内なのにCTRが低い（1%未満）場合、以下を順に見直す。

1. **title の見直し**
   - 検索クエリに含まれる語が title の前半に入っているか。
   - 「相談できる」「確認したいこと」など、検索意図（調べたい／相談したい）に応じた動詞が入っているか。
   - 32文字前後で主要語が切れていないか（スマホSERPでの切れ方を確認）。

2. **description の見直し**
   - 検索意図への回答を1文目に置く。
   - 「実績ある提携研修会社をご紹介」「申請代行は行いません」など、他社と差別化される事実を含める。
   - 120文字以内。

3. **リッチリザルトの確認**
   - FAQPage 構造化データが有効か（リッチリザルトテストで確認）。
   - FAQが表示されるとCTRが上がる一方、SERP内で疑問が解決されクリックされない場合もある。表示回数とクリックの推移を見て判断する。

4. **検索意図とのズレを疑う**
   - 「人材開発支援助成金」単体のクエリは、制度そのものを調べたいユーザーが大半で、研修会社を探しているわけではない。
   - この場合、順位が高くてもクリックされない／クリックされても直帰する。相談系キーワード（「研修会社 紹介」「導入相談」）での順位を重視する。

---

## 6. 11〜20位に入った場合のリライト方針

11〜20位は「あと一歩で1ページ目」の位置であり、最も費用対効果が高い改善対象。Search Console で該当クエリを特定し、以下を実施する。

1. **該当クエリを見出しに反映**
   - 表示されているクエリがページ内のH2に存在しない場合、そのクエリに答えるH2セクションを追加する。

2. **情報の網羅性を上げる**
   - 上位10ページを実際に確認し、自ページに欠けている論点を洗い出して追記する。
   - 特に「費用」「期間」「進め方」「失敗例」は不足しがち。

3. **内部リンクを集める**
   - 該当ページへ、関連コラムから文脈に沿ったアンカーテキストでリンクを追加する。
   - 中心ページ `/training/reskilling-subsidy` へのリンクは各コラムに設置済み。補助ページへの導線が薄い場合は追加する。

4. **更新日を反映**
   - `ColumnTopicPage` の `updatedAt` を更新すると `sitemap.ts` の `lastModified` に反映される。
   - 実際に内容を改善した場合のみ更新する（内容を変えずに日付だけ更新しない）。

5. **やってはいけないこと**
   - 順位を上げるために、助成金の断定表現（必ず使える・実質無料 等）を加えること。法務リスクが順位の利益を上回る。

---

## 7. 問い合わせにつながる導線の確認項目

- [ ] 各研修ページのCTAが `/contact?type=...` を指しており、遷移後に問い合わせ種別が自動選択される
  - `/training/reskilling-subsidy` → `type=reskilling` / `type=training-referral`
  - `/training/ai-dx-reskilling` → `type=ai-dx-training`
  - `/training/chatgpt-ai-training` → `type=chatgpt-training`
  - `/training/web-marketing-training` → `type=web-marketing-training`
  - `/training/hr-development-subsidy-guide` → `type=subsidy-training`
  - `/training/reskilling-training-company-referral` → `type=training-referral`
  - `/partner/training-company-referral` → `type=training-referral`
- [ ] 研修系の種別を選んだときのみ、提携研修会社への情報共有の同意チェックボックスが表示される
- [ ] 同意チェックがない場合、提携研修会社へ情報を共有しない（送信処理実装時に必ず担保する）
- [ ] 各コラムの `related` に中心ページ `/training/reskilling-subsidy` と `/contact` が含まれている
- [ ] フッターに「研修導入相談」リンクが1つ存在する
- [ ] トップページに研修相談への導線が1箇所存在する（過剰に出さない）

**未実装の注意点**：`ContactForm.tsx` の送信処理は現状ダミー（`setTimeout`）。メール送信を実装する際、`shareConsent` が `false` の場合は提携研修会社へ情報を送らない分岐を必ず入れること。

---

## 8. 助成金関連ページの表現チェック項目

新規ページ追加・リライトのたびに、以下を必ず確認する。

### 使用禁止（肯定・断定形での使用）
- [ ] 実質無料 / 無料で研修 / 研修費ゼロ / ノーリスク
- [ ] 助成金で戻ってくる / 研修費が戻る / 返金 / キックバック
- [ ] 必ず使える / 必ず通る / 申請すれば通る / 必ず受給できます
- [ ] 採択保証 / 支給保証 / 対象確定 / 受給率◯％
- [ ] 最大◯◯万円もらえる
- [ ] 社労士不要 / 申請代行します / 計画届を作ります / 労働局対応まで任せてください
- [ ] 無料で申請サポート / 申請書類作成まで対応
- [ ] 助成金ビジネス

※「◯◯という表現を使う相手には注意が必要」といった**警告・否定の文脈**での言及は可。
`/partner/training-company-referral` の「禁止している営業表現」セクションは、この例外に該当する意図的な掲載。

### 数値の扱い
- [ ] 助成率・上限額・対象経費額・受給率などの数値を掲載していない（制度改定で陳腐化するため）
- [ ] 金額に触れる必要がある場合は「厚生労働省の公式ページでご確認ください」へ誘導している

### 必須の記載（助成金に触れるすべてのページ）
- [ ] 厚生労働省公式ページへのリンク（`https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html`）
- [ ] 確認日の明記（現在：2026年7月10日）
- [ ] 制度内容・対象要件・助成率・上限額・申請期限・必要書類は変更されうる旨
- [ ] 申請前に公式情報を確認すべき旨
- [ ] 支給可否は企業の状況・訓練計画・対象者・研修内容・申請内容により判断される旨
- [ ] サイプレスは助成金申請代行を行わない旨
- [ ] 採択・支給・受給を保証しない旨
- [ ] 必要に応じて社労士・管轄労働局へ確認すべき旨

これらは `lib/data/trainingPages.ts` の `SUBSIDY_DISCLAIMERS` に集約され、`components/shared/SubsidyDisclaimer.tsx` 経由で各ページに表示される。**文言を変える場合は必ずデータ側を編集し、ページ側に直書きしない。**

### 構造化データ
- [ ] 画面に表示していないFAQをFAQPage JSON-LDに入れていない
- [ ] FAQの質問文（`q`）に禁止表現がそのまま含まれていない（構造化データとして外部に切り出されるため）
- [ ] 架空のレビュー・評価（`AggregateRating` / `Review`）を入れていない
- [ ] 提携研修会社の実績を事実確認なく記載していない

### 制度改定時の対応
制度が改定された場合、以下を必ず更新する。
1. `lib/data/trainingPages.ts` の `SUBSIDY_CONFIRMED_ON` を新しい確認日に更新
2. 同ファイルの `SUBSIDY_DISCLAIMERS` の文言を確認
3. `/training/hr-development-subsidy-guide` の制度概要の記述を確認
4. 各コラム本文中の確認日（現在「2026年7月10日」と直書き）を更新
5. `public/llms.txt` の研修セクション内の確認日を更新

---

## 9. 参考：クラスタの内部リンク構造

```
/training/reskilling-subsidy （中心）
  ├→ /training/ai-dx-reskilling
  ├→ /training/chatgpt-ai-training
  ├→ /training/web-marketing-training
  ├→ /training/hr-development-subsidy-guide
  ├→ /training/reskilling-training-company-referral
  │    └→ /partner/training-company-referral
  └→ /contact?type=reskilling

/column/*（研修系15本）
  └→ /training/reskilling-subsidy（全記事から）
  └→ 関連サービス（/ai, /seo, /meo, /aio, /web-design, /services）3件以上
  └→ /contact
```

助成金確認導線：`/training/hr-development-subsidy-guide` → `/training/reskilling-subsidy` → `/training/reskilling-training-company-referral` → `/contact`

AI研修導線：`/column/ai-training-subsidy` → `/training/ai-dx-reskilling` → `/training/chatgpt-ai-training` → `/contact`

Web研修導線：`/column/web-marketing-training-subsidy` → `/training/web-marketing-training` → `/seo` / `/meo` → `/contact`
