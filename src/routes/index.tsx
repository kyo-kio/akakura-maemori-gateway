import { createFileRoute } from "@tanstack/react-router";
import { SelectPage } from "@/pages/MogamiPages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOGAMI Sanctuary | 赤倉温泉スキー場 × 前森高原" },
      {
        name: "description",
        content:
          "山形県最上町。赤倉温泉スキー場と前森高原、ふたつのフィールドへの入口。",
      },
    ],
  }),
  component: SelectPage,
});
