import { createFileRoute } from "@tanstack/react-router";
import { AccessPage } from "@/pages/AkakuraSubPages";

export const Route = createFileRoute("/access")({
  head: () => ({
    meta: [
      { title: "アクセス — 赤倉温泉スキー場" },
      { name: "description", content: "山形県最上町、赤倉温泉スキー場へのアクセス。車・電車・送迎バスのご案内。" },
      { property: "og:title", content: "アクセス — 赤倉温泉スキー場" },
    ],
  }),
  component: AccessPage,
});
