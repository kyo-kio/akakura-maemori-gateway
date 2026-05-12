import { createFileRoute } from "@tanstack/react-router";
import { FoodsPage } from "@/pages/AkakuraSubPages";

export const Route = createFileRoute("/foods")({
  head: () => ({
    meta: [
      { title: "お食事 — 赤倉温泉スキー場" },
      { name: "description", content: "ゲレンデ内のレストラン・カフェ・BBQテラス。山形の味を一日中。" },
      { property: "og:title", content: "お食事 — 赤倉温泉スキー場" },
    ],
  }),
  component: FoodsPage,
});
