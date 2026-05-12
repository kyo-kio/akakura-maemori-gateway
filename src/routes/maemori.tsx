import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/maemori-hero.jpg";
import horses from "@/assets/maemori-horses.jpg";
import camp from "@/assets/maemori-camp.jpg";

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
      { property: "og:image", content: hero },
    ],
  }),
  component: MaemoriPage,
});

const NAV = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "STAY", href: "#stay" },
  { label: "ACTIVITY", href: "#activity" },
  { label: "ACCESS", href: "#access" },
];

function MaemoriPage() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#1f1a14] font-sans">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="前森高原"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <header className="relative z-20 flex items-center justify-between px-6 md:px-14 py-8 text-white">
          <Link to="/" className="font-serif text-2xl tracking-[0.4em]">
            MAE<span className="italic font-light">mori</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.3em]">
            {NAV.map((n) => (
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

        {/* side rails */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 -rotate-90 origin-left text-[10px] tracking-[0.5em] uppercase text-white/80">
          Mogami · Yamagata
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="py-28 md:py-40 px-6 md:px-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#7a6a52] mb-6">
              — About
            </div>
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

      {/* SPLIT FEATURE 1 */}
      <section id="activity" className="px-6 md:px-14 pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
            <img
              src={horses}
              alt="乗馬"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
            />
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end pb-4">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#7a6a52] mb-4">
              01 / Activity
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">
              馬と、歩く。
            </h3>
            <p className="text-[#3a3128] leading-loose text-sm">
              北欧産の温和な馬たち。引き馬から本格的な外乗まで、
              はじめての方も、安心して高原を歩けます。
            </p>
          </div>
        </div>
      </section>

      {/* SPLIT FEATURE 2 */}
      <section className="px-6 md:px-14 pb-28 md:pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 self-end pb-4 md:order-1 order-2">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#7a6a52] mb-4">
              02 / Stay
            </div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4">
              星と、眠る。
            </h3>
            <p className="text-[#3a3128] leading-loose text-sm">
              森に抱かれたグランピングサイトと、
              手ぶらで楽しめるオートキャンプ場。夜は焚火と星空を。
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:order-2 order-1 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
            <img
              src={camp}
              alt="キャンプ"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
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
              <div className="mt-3 text-[10px] tracking-[0.4em] uppercase text-[#f4efe6]/60">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f4efe6] py-12 px-6 md:px-14 border-t border-[#1f1a14]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[#7a6a52]">
            © Maemori Kogen, Mogami, Yamagata
          </div>
          <Link to="/" className="tracking-[0.3em] uppercase hover:opacity-60">
            ← Back to selection
          </Link>
        </div>
      </footer>
    </div>
  );
}
