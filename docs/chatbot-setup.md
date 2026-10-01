# AI相談チャット 設定手順

全ページ右下に表示されるAI相談チャット。訪問者の質問に答え、状況を聞き取り、無料相談（`/contact`）へ案内する。
外部のチャットボットサービスは使わず、Claude API を直接呼び出す自社実装。

## 構成

| ファイル | 役割 |
| --- | --- |
| [lib/chatbot.ts](../lib/chatbot.ts) | システムプロンプト、最初の選択肢、文字数上限。回答内容を変えるときはここを編集する |
| [app/api/chat/route.ts](../app/api/chat/route.ts) | `POST /api/chat`。入力検証・レート制限を行い、Claude の回答をストリーミングで返す |
| [components/chatbot/ChatWidget.tsx](../components/chatbot/ChatWidget.tsx) | 画面右下のボタン・吹き出し・チャット画面 |
| [app/layout.tsx](../app/layout.tsx) | `CHATBOT_ENABLED=true` のときだけウィジェットを表示 |

サービスの説明とFAQは [lib/data/services.ts](../lib/data/services.ts) から自動でプロンプトに取り込むため、
サービスページを更新すればチャットの知識も揃う。

## 必要な環境変数

`.env.local`（ローカル）と Vercel の Project Settings → Environment Variables に設定する。

| 変数 | 必須 | 説明 |
| --- | --- | --- |
| `CHATBOT_ENABLED` | ✅ | `true` のときだけチャットを表示する。未設定なら何も表示されず、API は 503 を返す |
| `ANTHROPIC_API_KEY` | ✅ | [Claude Console](https://platform.claude.com) の API キー（`sk-ant-` で始まる） |

```bash
# .env.local
CHATBOT_ENABLED=true
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxx
```

[お問い合わせフォームの手順書](contact-form-setup.md)と同じく、Vercel では**引用符なし**で入力し、
設定後に**再デプロイ**する。`CHATBOT_ENABLED` はビルド時に読まれるため、再デプロイしないと表示が切り替わらない。

## 費用の管理

誰でも使える公開チャットなので、費用の上限を必ず設定する。

- **Claude Console で月額の利用上限（Spend limit）を設定する。** アプリ側の制限は補助であり、これが最後の歯止めになる
- アプリ側の制限：同一IPから10分間に20通まで、1通1,000文字まで、履歴は直近20通まで、1回の出力は1,500トークンまで
- 使用モデルは `claude-haiku-4-5`（[route.ts](../app/api/chat/route.ts) の `MODEL`）。回答の質を上げたい場合は上位モデルに変更する

## 管理画面（/admin）

会話ログとKPIを確認し、AIの事前チェックと人のレビューで回答を改善していくための社内向け画面。
検索エンジンには出さない（noindex、robots.txt で拒否）。

| ページ | 内容 |
| --- | --- |
| `/admin` | 品質改善サマリー。5つのKPI、AIチェックの実行、日別の会話数 |
| `/admin/conversations` | 会話の一覧。確認待ち・未レビューなどで絞り込み |
| `/admin/conversations/[id]` | 会話全文と、人の判定（良い会話／改善が必要／対象外）・メモ |

### 追加の環境変数

| 変数 | 必須 | 説明 |
| --- | --- | --- |
| `DATABASE_URL` | ✅ | Neon Postgres の接続文字列。Vercel の Neon 連携が自動で設定する。未設定でもチャットは動くが、会話は記録されない |
| `ADMIN_PASSWORD` | ✅ | 管理画面のログインパスワード。変更すると全員が再ログインになる |

テーブル（`chat_conversations` / `chat_messages` / `chat_opens`）は初回アクセス時に自動で作成される（[lib/chat-db.ts](../lib/chat-db.ts)）。

### 5つのKPIの定義

| KPI | 計算 |
| --- | --- |
| やりとり発生率 | 会話数 ÷ チャットを開いた回数 |
| リンク表示率 | サイト内リンクを表示した会話 ÷ 会話数 |
| リンククリック率 | リンクをクリックした会話 ÷ リンクを表示した会話 |
| 電話番号表示率 | 電話番号を表示した会話 ÷ 会話数 |
| 電話番号タップ率 | 電話番号をタップした会話 ÷ 電話番号を表示した会話 |

### 運用の流れ

1. サマリーで「AIチェックを実行」を押す（1回10件。[lib/chat-review.ts](../lib/chat-review.ts) の基準で判定）
2. 「確認待ち」の会話を開き、全文を読んで判定とメモを残す
3. メモをもとに [lib/chatbot.ts](../lib/chatbot.ts) のプロンプトを直す

### 個人情報

会話は記録される。チャット欄に「品質向上のため会話を記録します」と表示しているが、
プライバシーポリシーにも記録の目的を明記すること。

## 未実装

- AIチェックの自動実行（現在は手動でボタンを押す）
- 会話ログの保存期間の設定と自動削除
- プロンプトの修正案をAIが作る機能
