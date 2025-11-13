# NanoBanana Apparel AI Studio

NanoBananaは、n8n Webhookと連携してアパレル向けのAI生成/編集ワークフローをまとめて操作できるReact + Viteアプリです。Tailwind CSSで実装したレスポンシブUIから9種類の機能（デザイン生成、背景変更、モデル着用など）を呼び出し、結果やログを一元管理できます。

## 技術スタック
- React 19 (Vite) + Hooksベースの状態管理
- Tailwind CSS 3 / カスタムトークンによるデザインシステム
- Fetch API + FileReader + LocalStorage
- n8n Webhook連携（各機能ごとにPOST）

## 環境要件
- Node.js 18 以上
- npm 9 以上

## セットアップ
```bash
npm install
npm run dev
```
`npm run dev` で http://localhost:5173 を開くとアプリを確認できます。`npm run build` で本番ビルド、`npm run preview` でビルド内容を確認できます。

## n8n Webhook設定
1. 画面右上の「設定を開く」ボタンからモーダルを表示。
2. n8nインスタンスのベースURLを `https://your-instance.n8n.cloud` 形式で入力し保存。
3. LocalStorage (`nanobananaBaseUrl`) に保持され、以降の全機能で共有されます。
4. ベースURLの初期値は `src/config/webhooks.js` 内の `WEBHOOKS.BASE_URL` です。コードベースで変更したい場合はここを編集してください。

## 実装済みAI機能
| 機能 | Webhook | 送信データ |
| --- | --- | --- |
| デザインアイデア創出 | `/webhook/design-idea-generator` | `{ "prompt": string }` |
| デザインバリエーション | `/webhook/design-variation` | `{ "originalDesign": string, "variations": string, "count": number }` |
| AIモデル着用 | `/webhook/ai-model-wearing` | `{ "productImage": base64, "modelType": string, "pose": string, "background": string }` |
| 画像レタッチ | `/webhook/image-retouch` | `{ "imageBase64": base64, "instructions": string }` |
| カラーカスタマイズ | `/webhook/color-customize` | `{ "imageBase64": base64, "color": string, "part": string }` |
| 背景変更 | `/webhook/background-change` | `{ "imageBase64": base64, "background": string, "keepProduct": boolean }` |
| デザイン指示統合 | `/webhook/design-instruction` | `{ "instruction": string, "imageBase64": base64, "type": string }` |
| 背景画像選択 | `/webhook/background-selection` | `{ "productImage": base64, "backgroundImage": base64, "backgroundId": string }` |
| AIモデル選択 | `/webhook/ai-model-selection` | `{ "productImage": base64, "modelId": string }` |

各フォームはドラッグ&ドロップ対応の画像アップローダー、バリデーション、ローディングインジケーター、結果パネルと連動しています。

## 追加メモ
- 画像アップロードはJPG/PNG/WEBP（10MB以下）に制限しています。
- `src/utils/apiClient.js` でFetch + AbortControllerを使い、30秒タイムアウトとHTTPエラーハンドリングを実装しています。
- 結果パネルでは処理時間やAPIレスポンスのコピー機能を提供しています。
- Tailwind設定（`tailwind.config.js`）でブランドカラーとガラスモーフィズムスタイルを拡張しています。

必要に応じてn8n側のフローを調整し、Webhook URL/レスポンス形式を合わせてご利用ください。
