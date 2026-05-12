import { createFileRoute } from "@tanstack/react-router";
import { MaemoriPage, heroImages } from "@/pages/MogamiPages";

export const Route = createFileRoute("/maemori")({
  head: () => ({
    meta: [
      { title: "前森高原 — 山形・最上町のアウトドアリゾート" },
      {
        name: "description",
        content:
          "200ヘクタールの広大な高原で、乗馬・キャンプ・動物とのふれあい。山形県最上町、前森高原。",
      },
      { property: "og:title", content: "前森高原 — 山形・最上町" },
      { property: "og:image", content: heroImages.maemori },
    ],
  }),
  component: MaemoriPage,
});
