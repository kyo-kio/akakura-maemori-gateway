import { createFileRoute } from "@tanstack/react-router";
import { AkakuraPage, heroImages } from "@/pages/MogamiPages";

export const Route = createFileRoute("/akakura")({
  head: () => ({
    meta: [
      { title: "赤倉温泉スキー場 — 山形県最上町" },
      {
        name: "description",
        content:
          "温泉街に隣接する赤倉温泉スキー場。初級者から国体コースまで、家族で楽しめる山形のスノーフィールド。",
      },
      { property: "og:title", content: "赤倉温泉スキー場 — 山形県最上町" },
      { property: "og:image", content: heroImages.akakura },
    ],
  }),
  component: AkakuraPage,
});
