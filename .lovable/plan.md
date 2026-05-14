## ゴール
GitHub Pages（静的ホスティング）で動くサイトに作り変える。ページの見た目・内容・URLは変えない。

## 現状の問題
このプロジェクトは TanStack Start（SSR フレームワーク、Cloudflare Workers 前提）で動いており、`index.html` も無く、`src/server.ts` 経由でサーバー実行されるため GitHub Pages では動きません。

## 方針
**TanStack Start を外して、純粋な Vite + React SPA に作り変える。** ページコンポーネント本体（`src/pages/MogamiPages.tsx`、`src/pages/AkakuraSubPages.tsx`、`src/components/*`、`src/styles.css`、`src/assets/*`）は無傷で再利用する。書き換えるのはルーティング層と入口だけ。

## 変更内容

### 1. ルーティングを React Router に置き換え
- `react-router-dom` を追加。`@tanstack/react-router` / `@tanstack/react-start` 関連を削除。
- `src/pages/MogamiPages.tsx` と `src/pages/AkakuraSubPages.tsx` 内の `import { Link } from "@tanstack/react-router"` を `react-router-dom` の `Link` に置換し、`to="/akakura"` 等のリテラル文字列はそのまま使える。
- `src/routes/*.tsx` と `src/routeTree.gen.ts`、`src/router.tsx` を削除。

### 2. SPA 入口を新設
- `index.html`（プロジェクトルート）を作成
- `src/main.tsx` を新設：`BrowserRouter` ではなく **`HashRouter`** を使う（GitHub Pages のサブパスでもリロード/直リンクが 404 にならないため）
- `<Routes>` で `/`, `/maemori`, `/akakura`, `/news`, `/slope`, `/price`, `/foods`, `/access` の8ルートを登録

### 3. Vite 設定の刷新
- `vite.config.ts` を `@vitejs/plugin-react` + `@tailwindcss/vite` のみのシンプル構成に置き換え
- `base: "./"` を設定（任意のリポジトリ名に対応）
- `src/server.ts` / `src/start.ts` / `wrangler.jsonc` を削除

### 4. GitHub Pages デプロイ設定
- `.github/workflows/deploy.yml` を追加：push 時に `npm run build` → `dist/` を Pages にデプロイ
- `dist/404.html` を `index.html` のコピーとして出力するスクリプトを追加（HashRouter なので必須ではないが念のため）

## 影響しないもの
- 各ページの見た目・テキスト・画像・動画
- すべてのページの URL パス
- レスポンシブ対応・配色

## 制限事項
- SSR が無くなるため、各ページの個別 `<title>` / OGP メタは初回 HTML には入らなくなります（クライアント側で動的に設定する形になり、SNS シェア時のサムネイルやタイトル取得は弱くなります）。SEO/シェアを重視するなら GitHub Pages ではなく Cloudflare Pages や Vercel の方が向いています。
- `https://maemori.jp/` への外部リンクなど、外部遷移は影響なし。

進めてよろしいですか？
