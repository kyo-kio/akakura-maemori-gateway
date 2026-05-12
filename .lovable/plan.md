## ゴール
3ページ（選択 / 前森高原 / 赤倉温泉スキー場）の実装を1つのファイルにまとめる。

## 方針
TanStack Start のファイルベースルーティングの制約上、`src/routes/index.tsx`・`maemori.tsx`・`akakura.tsx` の3ファイルは存在し続ける必要がある（削除するとビルドが壊れる）。
そこで以下の構成にする：

- 新規ファイル `src/pages/MogamiPages.tsx` を作成し、ここに **3ページ分のコンポーネントとデータをすべて集約**：
  - `SelectPage`（現 index.tsx の中身）
  - `MaemoriPage`（現 maemori.tsx の中身）
  - `AkakuraPage`（現 akakura.tsx の中身）
  - 共通の型 `Lang`、翻訳テキスト `copy`、共通定数（NAV など）も同ファイル内に集約
  - 画像 import（`maemori-hero` / `akakura-hero` など）も1箇所にまとめる

- 既存のルートファイルは「薄いエントリ」に置き換え、`head()` メタ情報のみ保持してコンポーネントを import：
  ```tsx
  // src/routes/index.tsx
  import { createFileRoute } from "@tanstack/react-router";
  import { SelectPage } from "@/pages/MogamiPages";
  export const Route = createFileRoute("/")({
    head: () => ({ meta: [...] }),
    component: SelectPage,
  });
  ```
  `maemori.tsx` / `akakura.tsx` も同じパターン。

## 結果
- 実装本体（UI・テキスト・ロジック）は **`src/pages/MogamiPages.tsx` 1ファイルに完全集約**
- ルートファイルは各5〜10行のエントリのみ（ルーター要件を満たすため残す）
- 既存の挙動・URL・SEO メタは変更なし

## 確認事項
この方針で進めてよろしいですか？（ルートファイル3つは消せませんが、中身は1ファイルに統合されます）
