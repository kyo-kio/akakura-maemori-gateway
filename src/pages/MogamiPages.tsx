import { Link } from "react-router-dom";
import { useState } from "react";
import maemoriHero from "@/assets/maemori-hero.jpg";
import maemoriHorses from "@/assets/maemori-horses.jpg";
import maemoriCamp from "@/assets/maemori-camp.jpg";
import akakuraHero from "@/assets/akakura-hero.jpg";

/* ============================================================
 *  Shared
 * ============================================================ */

export type Lang = "JP" | "EN";

export const heroImages = {
  maemori: maemoriHero,
  akakura: akakuraHero,
};

const selectCopy = {
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

const MAEMORI_NAV = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "STAY", href: "#stay" },
  { label: "ACTIVITY", href: "#activity" },
  { label: "ACCESS", href: "#access" },
];

const AKAKURA_NAV = [
  { label: "News", to: "/news" as const },
  { label: "Slopes", to: "/slope" as const },
  { label: "Price", to: "/price" as const },
  { label: "Foods", to: "/foods" as const },
  { label: "Access", to: "/access" as const },
];

/* ============================================================
 *  SelectPage  ( / )
 * ============================================================ */

export function SelectPage() {
  const [lang, setLang] = useState<Lang>("JP");
  const t = selectCopy[lang];

  return (
    <main className="relative w-full bg-black text-white font-sans">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/select-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
        </div>

        <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
          <a
            href="https://town.mogami.lg.jp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={lang === "JP" ? "最上町公式サイトを新しいタブで開く" : "Open Mogami town official site in a new tab"}
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-white/90 hover:text-white focus-visible:text-white outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 rounded-sm px-1 py-1 transition-colors"
          >
            <span className="relative">
              {t.citySite}
              <span className="absolute -bottom-1 left-0 h-px w-full bg-white/40 group-hover:bg-white transition-colors" />
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </a>

          <div
            role="group"
            aria-label={lang === "JP" ? "言語切り替え" : "Language selector"}
            className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm p-1"
          >
            <button
              type="button"
              onClick={() => setLang("JP")}
              aria-pressed={lang === "JP"}
              aria-label="日本語に切り替え"
              className={`px-3 py-1 text-[11px] tracking-[0.25em] uppercase rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-colors ${
                lang === "JP" ? "bg-white text-black" : "text-white/70 hover:text-white"
              }`}
            >
              JP
            </button>
            <button
              type="button"
              onClick={() => setLang("EN")}
              aria-pressed={lang === "EN"}
              aria-label="Switch to English"
              className={`px-3 py-1 text-[11px] tracking-[0.25em] uppercase rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/80 transition-colors ${
                lang === "EN" ? "bg-white text-black" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            aria-label={lang === "JP" ? "お問い合わせフォームへ移動" : "Jump to contact form"}
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-white/90 hover:text-white focus-visible:text-white outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 rounded-sm px-1 py-1 transition-colors"
          >
            <span className="relative">
              {t.contact}
              <span className="absolute -bottom-1 left-0 h-px w-full bg-white/40 group-hover:bg-white transition-colors" />
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </header>

        <div className="absolute top-20 md:top-24 left-6 md:left-12 z-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
            MOGAMI
          </h1>
        </div>

        <div className="hidden md:block absolute top-1/2 right-8 z-20 -translate-y-1/2">
          <span
            className="font-serif text-5xl lg:text-7xl tracking-[0.15em]"
            style={{ writingMode: "vertical-rl" }}
          >
            SANCTUARY
          </span>
        </div>

        <div className="absolute top-1/2 left-0 right-0 z-20 flex flex-col items-center px-6 -translate-y-1/2">
          <p className="font-serif text-2xl md:text-4xl text-center leading-snug mb-8">
            {t.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xl">
            <a
              href="https://maemori.jp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={lang === "JP" ? "前森高原のサイトへ移動" : "Go to Maemori Kogen site"}
              className="flex-1 text-center bg-[#3a5a3a] hover:bg-[#4a6f4a] border border-[#3a5a3a] px-6 py-3 text-sm tracking-[0.2em] uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              {t.maemori}
            </a>
            <Link
              to="/akakura"
              aria-label={lang === "JP" ? "赤倉温泉スキー場のサイトへ移動" : "Go to Akakura Onsen Ski Resort site"}
              className="flex-1 text-center bg-white/10 hover:bg-white hover:text-black backdrop-blur-sm border border-white/60 px-6 py-3 text-sm tracking-[0.2em] uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              {t.akakura}
            </Link>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-6 right-12 z-20 items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/70">
          <span>{t.scroll}</span>
          <span aria-hidden>↓</span>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[#0c0d0c] py-20 md:py-28 px-6 md:px-12 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-4">
            — {lang === "JP" ? "お問い合わせ" : "Get in touch"}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mb-4">{t.contactTitle}</h2>
          <p className="text-white/70 mb-10 leading-relaxed">{t.contactDesc}</p>

          <form
            className="space-y-6"
            aria-label={lang === "JP" ? "お問い合わせフォーム" : "Contact form"}
            onSubmit={(e) => {
              e.preventDefault();
              alert(lang === "JP" ? "送信しました（デモ）" : "Sent (demo)");
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{t.name}</span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  aria-required="true"
                  className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm py-2 text-white"
                />
              </label>
              <label className="block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{t.email}</span>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  aria-required="true"
                  className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm py-2 text-white"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">{t.message}</span>
              <textarea
                required
                rows={5}
                aria-required="true"
                className="mt-2 w-full bg-transparent border-b border-white/30 focus:border-white outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm py-2 text-white resize-none"
              />
            </label>
            <button
              type="submit"
              aria-label={lang === "JP" ? "お問い合わせを送信する" : "Submit contact form"}
              className="inline-flex items-center gap-3 border border-white/60 px-8 py-3 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d0c]"
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

/* ============================================================
 *  MaemoriPage  ( /maemori )
 * ============================================================ */

export function MaemoriPage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#1f1a14] font-sans">
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={maemoriHero}
          alt="前森高原"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <header className="relative z-20 flex items-center justify-between px-6 md:px-14 py-8 text-white">
          <Link to="/" className="font-serif text-2xl tracking-[0.4em]">
            MAE<span className="italic font-light">mori</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.3em]">
            {MAEMORI_NAV.map((n) => (
              <a key={n.label} href={n.href} className="hover:opacity-70">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/80 px-5 py-2 text-xs tracking-[0.25em] hover:bg-white hover:text-black transition"
          >
            Let's Talk ↗
          </a>
        </header>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-14 pb-16 md:pb-24 text-white">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-white/80" />
            <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase">
              Live differently
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
            200ヘクタールの<br />
            <span className="italic font-light">空と、馬と、火。</span>
          </h1>
        </div>

        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 -rotate-90 origin-left text-[10px] tracking-[0.5em] uppercase text-white/80">
          Mogami · Yamagata
        </div>
      </section>

      <section id="about" className="py-28 md:py-40 px-6 md:px-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#7a6a52] mb-6">— About</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              ひらけた高原、<br />
              <span className="italic">ゆるやかな時間。</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 text-[#3a3128] leading-loose">
            <p>
              前森高原は、山形県最上町に広がる200ヘクタールの高原リゾート。
              なだらかな丘の上で、馬と暮らし、星空の下で火を囲む。
            </p>
            <p>
              観光地としてではなく、もうひとつの暮らしとして、
              ここでの一日を過ごしてほしい。
            </p>
            <a
              href="#story"
              className="inline-flex items-center gap-3 mt-4 text-sm tracking-[0.3em] uppercase border-b border-[#1f1a14] pb-1"
            >
              Read our story →
            </a>
          </div>
        </div>
      </section>

      <section id="activity" className="px-6 md:px-14 pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
            <img
              src={maemoriHorses}
              alt="乗馬"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end pb-4">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#7a6a52] mb-4">01 / Activity</div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">馬と、歩く。</h3>
            <p className="text-[#3a3128] leading-loose text-sm">
              北欧産の温和な馬たち。引き馬から本格的な外乗まで、
              はじめての方も、安心して高原を歩けます。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 self-end pb-4 md:order-1 order-2">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#7a6a52] mb-4">02 / Stay</div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">星と、眠る。</h3>
            <p className="text-[#3a3128] leading-loose text-sm">
              森に抱かれたグランピングサイトと、
              手ぶらで楽しめるオートキャンプ場。夜は焚火と星空を。
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:order-2 order-1 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
            <img
              src={maemoriCamp}
              alt="キャンプ"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1f1a14] text-[#f4efe6] py-24 px-6 md:px-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {[
            ["200ha", "敷地"],
            ["12", "頭の馬"],
            ["40+", "キャンプサイト"],
            ["1985", "創業"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-5xl md:text-6xl">{n}</div>
              <div className="mt-3 text-[10px] tracking-[0.4em] uppercase text-[#f4efe6]/60">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#f4efe6] py-12 px-6 md:px-14 border-t border-[#1f1a14]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[#7a6a52]">© Maemori Kogen, Mogami, Yamagata</div>
          <Link to="/" className="tracking-[0.3em] uppercase hover:opacity-60">
            ← Back to selection
          </Link>
        </div>
      </footer>
    </div>
  );
}

/* ============================================================
 *  AkakuraPage  ( /akakura )
 * ============================================================ */

export function AkakuraPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0c] text-white overflow-hidden font-sans">
      <div className="fixed inset-0 z-0">
        <img src={akakuraHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-6 w-6 border border-white/80 rotate-45" />
          <span className="font-bold tracking-tight text-lg">
            AKAKURA<span className="text-white/50">.</span>
            <span className="ml-2 text-xs font-light text-white/60 tracking-widest">
              Snow Resort.
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {AKAKURA_NAV.map((n) => (
            <Link key={n.label} to={n.to} className="text-white/80 hover:text-white transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-xs tracking-widest text-white/70">
          <span>−2°C</span>
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        </div>
      </header>

      <section className="relative z-10 min-h-[calc(100vh-88px)] flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <div className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-white/60 mb-8">
              I · VI Pillars
            </div>
            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
              We carve <span className="italic font-light">winter</span>.
            </h1>
            <p className="mt-8 text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              山形県最上町、温泉街に隣接するスノーフィールド。
              初級者から国体コースまで、家族で幅広く滑れる一日を。
            </p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-t border-white/10">
          {[
            ["Beginner", "ファミリー初級"],
            ["Intermediate", "中級ロング"],
            ["Advanced", "上級モーグル"],
            ["Kokutai", "国体公式コース"],
          ].map(([en, jp]) => (
            <div
              key={en}
              className="bg-black/40 backdrop-blur-sm px-6 py-6 hover:bg-black/60 transition-colors"
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/50">{en}</div>
              <div className="mt-2 text-sm">{jp}</div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block absolute left-12 bottom-32 z-10">
          <ul className="space-y-3 text-[10px] tracking-[0.4em] uppercase text-white/60">
            <li><Link to="/news" className="hover:text-white">— Snow Report</Link></li>
            <li><Link to="/price" className="hover:text-white">— Lift Tickets</Link></li>
            <li><Link to="/slope" className="hover:text-white">— Courses</Link></li>
            <li><Link to="/foods" className="hover:text-white">— Restaurants</Link></li>
          </ul>
        </div>

        <Link
          to="/price"
          className="hidden md:inline-flex absolute bottom-32 right-12 z-10 items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Book a lift pass →
        </Link>
      </section>

      <section
        id="slopes"
        className="relative z-10 bg-[#0a0a0c]/95 backdrop-blur-md py-24 md:py-32 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-4">
              II — The Mountain
            </div>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              静かな雪、<br />近い温泉。
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-white/75 leading-loose">
            <p>
              赤倉温泉スキー場は、山形県最上町の温泉街にそのまま続くようにひらけた、
              県内でも稀少な「歩いて温泉に行ける」ゲレンデ。
            </p>
            <p>
              全長2,500mのロングコースは初級者から上級者まで自然に流れ、
              最上部には国体公式コースが控えます。
              滑り終えたら、その足で源泉かけ流しの湯へ。
            </p>
            <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10">
              <AkakuraStat n="9" label="Courses" />
              <AkakuraStat n="2.5km" label="Longest run" />
              <AkakuraStat n="450m" label="Vertical" />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-black border-t border-white/10 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© Akakura Onsen Ski Resort, Mogami, Yamagata</div>
          <Link to="/" className="hover:text-white tracking-widest uppercase">
            ← Back to selection
          </Link>
        </div>
      </footer>
    </div>
  );
}

function AkakuraStat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl md:text-3xl">{n}</div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">{label}</div>
    </div>
  );
}
