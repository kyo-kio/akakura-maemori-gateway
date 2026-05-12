import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/pages/AkakuraSubPages";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "お知らせ — 赤倉温泉スキー場" },
      { name: "description", content: "赤倉温泉スキー場からの最新のお知らせ、イベント、ゲレンデコンディション。" },
      { property: "og:title", content: "お知らせ — 赤倉温泉スキー場" },
    ],
  }),
  component: NewsPage,
});
