import { createFileRoute } from "@tanstack/react-router";
import { SlopePage } from "@/pages/AkakuraSubPages";

export const Route = createFileRoute("/slope")({
  head: () => ({
    meta: [
      { title: "ゲレンデ — 赤倉温泉スキー場" },
      { name: "description", content: "初級から国体公式コースまで、9コースを擁する赤倉温泉スキー場のゲレンデ情報。" },
      { property: "og:title", content: "ゲレンデ — 赤倉温泉スキー場" },
    ],
  }),
  component: SlopePage,
});
