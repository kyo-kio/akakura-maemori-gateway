import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/akakura-hero.jpg";

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
      { property: "og:image", content: hero },
    ],
  }),
  component: AkakuraPage,
});

const NAV = [
  { label: "Slopes.", href: "#slopes" },
  { label: "Onsen.", href: "#onsen" },
  { label: "Access.", href: "#access" },
  { label: "News", href: "#news" },
  { label: "Shop", href: "#shop" },
];

function AkakuraPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0c] text-white overflow-hidden font-sans">
      {/* Fixed full-screen hero background */}
      <div className="fixed inset-0 z-0">
        <img
          src={hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      </div>

      {/* Header */}
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
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-xs tracking-widest text-white/70">
          <span>−2°C</span>
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        </div>
      </header>

      {/* Hero */}
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

        {/* Bottom strip */}
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
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/50">
                {en}
              </div>
              <div className="mt-2 text-sm">{jp}</div>
            </div>
          ))}
        </div>

        {/* Side categories (desktop) */}
        <div className="hidden lg:block absolute left-12 bottom-32 z-10">
          <ul className="space-y-3 text-[10px] tracking-[0.4em] uppercase text-white/60">
            <li className="hover:text-white cursor-pointer">— Snow Report</li>
            <li className="hover:text-white cursor-pointer">— Lift Tickets</li>
            <li className="hover:text-white cursor-pointer">— Ski School</li>
            <li className="hover:text-white cursor-pointer">— Rental</li>
          </ul>
        </div>

        {/* CTA pill bottom right */}
        <a
          href="#tickets"
          className="hidden md:inline-flex absolute bottom-32 right-12 z-10 items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Book a lift pass →
        </a>
      </section>

      {/* Section: About */}
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
              <Stat n="9" label="Courses" />
              <Stat n="2.5km" label="Longest run" />
              <Stat n="450m" label="Vertical" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl md:text-3xl">{n}</div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">
        {label}
      </div>
    </div>
  );
}
