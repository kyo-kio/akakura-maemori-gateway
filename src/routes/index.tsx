import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import akakuraHero from "@/assets/akakura-hero.jpg";
import maemoriHero from "@/assets/maemori-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "赤倉温泉スキー場 × 前森高原 | 山形・最上町" },
      {
        name: "description",
        content:
          "山形県最上町の赤倉温泉スキー場と前森高原。雪と緑、ふたつのフィールドからお選びください。",
      },
    ],
  }),
  component: SelectPage,
});

type Lang = "JP" | "EN";

const copy = {
  JP: {
    location: "山形 · 日本",
    chooseLabel: "フィールドを選ぶ",
    headline: (
      <>
        雪へ、<span className="italic font-light">or</span>　緑へ。
      </>
    ),
    akakuraTag: "01 — 冬",
    akakuraTitle: (
      <>
        赤倉温泉
        <br />
        スキー場
      </>
    ),
    akakuraDesc:
      "温泉街に隣接する、家族で楽しめる雪のフィールド。初級から国体コースまで。",
    maemoriTag: "02 — 高原",
    maemoriTitle: <>前森高原</>,
    maemoriDesc:
      "200haの広大な敷地。乗馬、キャンプ、動物とのふれあい。緑のアウトドアスポット。",
    enter: "入る",
    footer: "© Mogami · 山形 日本",
  },
  EN: {
    location: "Yamagata · Japan",
    chooseLabel: "Choose your field",
    headline: (
      <>
        To the snow, <span className="italic font-light">or</span> to the green.
      </>
    ),
    akakuraTag: "01 — Winter",
    akakuraTitle: (
      <>
        Akakura Onsen
        <br />
        Ski Resort
      </>
    ),
    akakuraDesc:
      "A snowy field next to the hot-spring town. From beginner slopes to national-level courses.",
    maemoriTag: "02 — Highland",
    maemoriTitle: <>Maemori Kogen</>,
    maemoriDesc:
      "200 hectares of open highland. Horseback riding, camping, and time with the animals.",
    enter: "Enter",
    footer: "© Mogami · Yamagata Japan",
  },
} as const;

function SelectPage() {
  const [lang, setLang] = useState<Lang>("JP");
  const t = copy[lang];
  const toggle = () => setLang((l) => (l === "JP" ? "EN" : "JP"));

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-serif text-xl tracking-[0.3em]">MOGAMI</div>
        <div className="text-[11px] tracking-[0.35em] uppercase text-white/70">
          {t.location}
        </div>
        <button
          type="button"
          onClick={toggle}
          aria-label="Switch language"
          className="text-[11px] tracking-[0.35em] uppercase text-white/90 hover:text-white transition-colors"
        >
          <span className={lang === "JP" ? "text-white" : "text-white/40"}>
            JP
          </span>
          <span className="mx-1 text-white/40">/</span>
          <span className={lang === "EN" ? "text-white" : "text-white/40"}>
            EN
          </span>
        </button>
      </header>

      {/* Center label */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
        <div className="h-px w-16 bg-white/40" />
        <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-white/80">
          {t.chooseLabel}
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-center px-6">
          {t.headline}
        </h1>
        <div className="h-px w-16 bg-white/40" />
      </div>

      {/* Split */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Akakura */}
        <Link
          to="/akakura"
          className="group relative block overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
        >
          <img
            src={akakuraHero}
            alt="赤倉温泉スキー場"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 transition-opacity duration-700 group-hover:from-black/30 group-hover:to-black/60" />
          <div className="relative z-10 flex h-full min-h-[60vh] md:min-h-screen flex-col justify-end p-8 md:p-14">
            <div className="text-[10px] tracking-[0.5em] uppercase text-white/70 mb-4">
              {t.akakuraTag}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              {t.akakuraTitle}
            </h2>
            <p className="mt-4 max-w-sm text-sm text-white/80 leading-relaxed">
              {t.akakuraDesc}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase border-b border-white pb-1 w-fit transition-all group-hover:gap-6">
              {t.enter} <span aria-hidden>→</span>
            </div>
          </div>
        </Link>

        {/* Maemori */}
        <Link to="/maemori" className="group relative block overflow-hidden">
          <img
            src={maemoriHero}
            alt="前森高原"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 transition-opacity duration-700 group-hover:from-black/20 group-hover:to-black/50" />
          <div className="relative z-10 flex h-full min-h-[60vh] md:min-h-screen flex-col justify-end p-8 md:p-14">
            <div className="text-[10px] tracking-[0.5em] uppercase text-white/80 mb-4">
              {t.maemoriTag}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              {t.maemoriTitle}
            </h2>
            <p className="mt-4 max-w-sm text-sm text-white/85 leading-relaxed">
              {t.maemoriDesc}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase border-b border-white pb-1 w-fit transition-all group-hover:gap-6">
              {t.enter} <span aria-hidden>→</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center text-[10px] tracking-[0.3em] uppercase text-white/50">
        {t.footer}
      </div>
    </main>
  );
}
