import { createFileRoute } from "@tanstack/react-router";
import { PricePage } from "@/pages/AkakuraSubPages";

export const Route = createFileRoute("/price")({
  head: () => ({
    meta: [
      { title: "料金 — 赤倉温泉スキー場" },
      { name: "description", content: "リフト料金、シーズン券、温泉とセットになったお得なパックのご案内。" },
      { property: "og:title", content: "料金 — 赤倉温泉スキー場" },
    ],
  }),
  component: PricePage,
});
