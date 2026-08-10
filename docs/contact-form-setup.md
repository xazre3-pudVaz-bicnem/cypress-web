# お問い合わせフォーム 送信設定（Resend）

`/contact` のフォームは `POST /api/contact`（[app/api/contact/route.ts](../app/api/contact/route.ts)）経由で
Resend からメールを送信する。送信先は既定で `info@cypress-all.co.jp`。

## 送信の流れ

1. 管理者宛の通知メール（`Reply-To` にお客様のメールアドレスを設定 → そのまま返信できる）
2. お客様宛の自動返信メール（失敗しても問い合わせ自体は成立させ、成功レスポンスを返す）

## 必要な環境変数

`.env.local`（ローカル）と本番のホスティング側（Vercel なら Project Settings → Environment Variables）に設定する。

| 変数 | 必須 | 既定値 | 説明 |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | ✅ | — | [resend.com](https://resend.com) の API キー（`re_` で始まる） |
| `CONTACT_FROM_EMAIL` | ✅ | `株式会社サイプレス <onboarding@resend.dev>` | 差出人。**Resend で認証済みのドメイン**のアドレスであること |
| `CONTACT_TO_EMAIL` | — | `info@cypress-all.co.jp` | 通知メールの受信先 |

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL="株式会社サイプレス <noreply@cypress-all.co.jp>"
CONTACT_TO_EMAIL=info@cypress-all.co.jp
```

> `.env*` は `.gitignore` の対象。API キーをリポジトリにコミットしないこと。

## Resend 側の初期設定

1. Resend にサインアップし、Domains で `cypress-all.co.jp` を追加
2. 表示される DNS レコード（SPF / DKIM、任意で DMARC）をドメインの DNS に登録
3. ステータスが **Verified** になったら `CONTACT_FROM_EMAIL` に そのドメインのアドレスを設定

ドメイン認証をせず既定の `onboarding@resend.dev` のまま運用すると、
Resend の仕様で**自分のアカウントのメールアドレス宛にしか送信できず**、
お客様への自動返信が届かない。本番稼働前に必ずドメイン認証を済ませること。

## 未設定時の挙動

`RESEND_API_KEY` が無い場合、API は 503 を返し、フォームには
「送信設定が未完了のため受け付けられませんでした。お手数ですが info@cypress-all.co.jp まで直接ご連絡ください。」
と表示される（送信されたように見せかけることはしない）。

## 迷惑メール・連投対策

- **ハニーポット**: 画面外に隠した `website` フィールドが埋まっていれば bot と判断し、
  送信せずに成功レスポンスを返す（再送や手口の調整を誘発させないため）
- **レート制限**: 同一 IP から 10 分あたり 5 件まで。超過すると 429 を返す
  （インスタンスのメモリ上の制限。厳密な保証はしない多層防御の一段）
- **ヘッダーインジェクション対策**: 件名・`Reply-To` に入る値から改行を除去
- **HTML エスケープ**: 本文の HTML 版はすべてエスケープしてから埋め込む

## 動作確認

```bash
npm run dev
# 別ターミナル
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"テスト","company":"テスト株式会社","email":"you@example.com","type":"general","message":"テスト送信です"}'
# => {"ok":true}
```

## メールアドレスの表示箇所

`info@cypress-all.co.jp` は [lib/contact.ts](../lib/contact.ts) の `CONTACT_EMAIL` を正とし、
以下から参照している。変更する場合はこのファイルだけを編集すればよい。

- ヘッダー（PC は xl 以上で常時表示 / モバイルはドロワー下部）
- フッター
- 全ページ共通の CTA（`components/shared/PageContactCTA.tsx`）
- お問い合わせページのサイドバー（`mailto` リンク＋「メールで問い合わせる」ボタン）
- 会社概要ページの会社概要テーブル
- フォームの注意書き・エラー時のフォールバック導線
