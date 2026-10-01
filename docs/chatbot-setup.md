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

## 未実装（次の段階）

会話の保存と管理画面はまだ無い。会話ログを残すにはデータベースが必要になる。

- 会話ログの保存、管理画面での閲覧
- KPI 計測（チャット開始率、リンククリック率、問い合わせ到達率）
- AI による会話の事前チェックと、人による確認
