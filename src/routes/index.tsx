import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import maemoriHero from "@/assets/maemori-hero.jpg";

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

type Lang = "JP" | "EN";

const copy = {
  JP: {
    citySite: "City Site",
    contact: "Contact Us",
    tagline: (
      <>
        自然のなかで、<br />
        休み、ひらく。
      </>
    ),
    maemori: "前森高原へ",
    akakura: "赤倉温泉スキー場へ",
    scroll: "スクロール",
    contactTitle: "お問い合わせ",
    contactDesc: "ご質問・ご相談はこちらからお気軽にどうぞ。",
    name: "お名前",
    email: "メールアドレス",
    message: "ご質問内容",
    send: "送信する",
    footer: "© Mogami · 山形 日本",
  },
  EN: {
    citySite: "City Site",
    contact: "Contact Us",
    tagline: (
      <>
        A Nature Preserve <br />
        to Rest &amp; Rise
      </>
    ),
    maemori: "Maemori Kogen",
    akakura: "Akakura Ski Resort",
    scroll: "Scroll to explore",
    contactTitle: "Contact Us",
    contactDesc: "Send us a message — we'll get back to you shortly.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    footer: "© Mogami · Yamagata Japan",
  },
} as const;

function SelectPage() {
  const [lang, setLang] = useState<Lang>("JP");
  const t = copy[lang];
  const toggle = () => setLang((l) => (l === "JP" ? "EN" : "JP"));

  return (
    <main className="relative w-full bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={maemoriHero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
        </div>

        {/* Top bar */}
        <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
          <a
            href="https://town.mogami.lg.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/60 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors"
          >
            {t.citySite}
          </a>

          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="text-[11px] tracking-[0.35em] uppercase"
          >
            <span className={lang === "JP" ? "text-white" : "text-white/40"}>
              JP
            </span>
            <span className="mx-1 text-white/40">/</span>
            <span className={lang === "EN" ? "text-white" : "text-white/40"}>
              EN
            </span>
          </button>

          <a
            href="#contact"
            className="rounded-full border border-white/60 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-colors"
          >
            {t.contact}
          </a>
        </header>

        {/* Big left title */}
        <div className="absolute top-20 md:top-24 left-6 md:left-12 z-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            MOGAMI
          </h1>
        </div>

        {/* Right vertical title */}
        <div className="hidden md:block absolute top-1/2 right-8 z-20 -translate-y-1/2">
          <span
            className="font-serif text-5xl lg:text-7xl tracking-[0.15em]"
            style={{ writingMode: "vertical-rl" }}
          >
            SANCTUARY
          </span>
        </div>

        {/* Bottom center: tagline + CTAs */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-20 flex flex-col items-center px-6">
          <p className="font-serif text-2xl md:text-4xl text-center leading-snug mb-8">
            {t.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xl">
            <Link
              to="/maemori"
              className="flex-1 text-center bg-[#3a5a3a] hover:bg-[#4a6f4a] border border-[#3a5a3a] px-6 py-3 text-sm tracking-[0.2em] uppercase transition-colors"
            >
              {t.maemori}
            </Link>
            <Link
              to="/akakura"
              className="flex-1 text-center bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm border border-white/60 px-6 py-3 text-sm tracking-[0.2em] uppercase transition-colors"
            >
              {t.akakura}
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex absolute bottom-6 right-12 z-20 items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/70">
          <span>{t.scroll}</span>
          <span aria-hidden>↓</span>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative bg-[#0c0d0c] py-20 md:py-28 px-6 md:px-12 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-4">
            — {lang === "JP" ? "お問い合わせ" : "Get in touch"}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed">{t.contactDesc}</p>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert(lang === "JP" ? "送信しました（デモ）" : "Sent (demo)");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                  {t.name}
                </span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white"
                />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                  {t.email}
                </span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                {t.message}
              </span>
              <textarea
                required
                rows={5}
                className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white resize-none"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-3 border border-white/60 px-8 py-3 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors"
            >
              {t.send} <span aria-hidden>→</span>
            </button>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-20 text-[10px] tracking-[0.3em] uppercase text-white/40">
          {t.footer}
        </div>
      </section>
    </main>
  );
}
