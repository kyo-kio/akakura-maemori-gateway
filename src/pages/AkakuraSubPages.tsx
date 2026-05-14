import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import akakuraHero from "@/assets/akakura-hero.jpg";

/* ============================================================
 *  Shared shell — mirrors /akakura cinematic vibe
 *  Dark base #0a0a0c, fixed hero, white serif + italic accents
 * ============================================================ */

const NAV = [
  { label: "Home", to: "/akakura" },
  { label: "News", to: "/news" },
  { label: "Slopes", to: "/slope" },
  { label: "Price", to: "/price" },
  { label: "Foods", to: "/foods" },
  { label: "Access", to: "/access" },
] as const;

function AkakuraShell({
  children,
  eyebrow,
  title,
  lead,
}: {
  children: ReactNode;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0c] text-white font-sans overflow-hidden">
      {/* Fixed cinematic background */}
      <div className="fixed inset-0 z-0">
        <img src={akakuraHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
      </div>

      {/* Header */}
      <header className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/akakura" className="flex items-center gap-3">
          <div className="h-6 w-6 border border-white/80 rotate-45" />
          <span className="font-bold tracking-tight text-lg">
            AKAKURA<span className="text-white/50">.</span>
            <span className="ml-2 text-xs font-light text-white/60 tracking-widest hidden sm:inline">
              Snow Resort.
            </span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              activeProps={{ className: "text-white" }}
              className="text-white/70 hover:text-white transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-xs tracking-widest text-white/70">
            <span>−2°C</span>
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-[10px] tracking-[0.3em] uppercase border border-white/40 px-3 py-1.5 hover:bg-white hover:text-black transition-colors"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open && (
        <div className="lg:hidden relative z-30 bg-black/80 backdrop-blur-md border-y border-white/10">
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.label} className="border-b border-white/5">
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm tracking-[0.25em] uppercase text-white/80 hover:text-white hover:bg-white/5"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Page hero */}
      <section className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-white/60 mb-6">
            {eyebrow}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {title}
          </h1>
          {lead && (
            <p className="mt-8 max-w-2xl text-sm md:text-base text-white/70 leading-loose">
              {lead}
            </p>
          )}
        </div>
      </section>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 bg-black/80 backdrop-blur-md border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-3 gap-8 text-sm text-white/60">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-5 w-5 border border-white/80 rotate-45" />
              <span className="font-bold tracking-tight text-white">AKAKURA<span className="text-white/50">.</span></span>
            </div>
            <p className="text-xs leading-relaxed">
              赤倉温泉スキー場<br />
              〒999-6101 山形県最上郡最上町<br />
              Tel. 0233-00-0000
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-3">Sitemap</div>
            <ul className="space-y-1.5 text-xs">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link to={n.to} className="hover:text-white">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-3">Mogami</div>
            <ul className="space-y-1.5 text-xs">
              <li><Link to="/" className="hover:text-white">← Mogami Sanctuary</Link></li>
              <li><a href="https://maemori.jp/" target="_blank" rel="noreferrer" className="hover:text-white">前森高原 ↗</a></li>
              <li><a href="https://town.mogami.lg.jp/" target="_blank" rel="noreferrer" className="hover:text-white">最上町公式 ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 md:px-12 py-5 text-[10px] tracking-[0.4em] uppercase text-white/40">
          © Akakura Onsen Ski Resort, Mogami, Yamagata
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ no, en, jp }: { no: string; en: string; jp: string }) {
  return (
    <div className="flex items-end gap-6 mb-12">
      <div className="font-serif text-5xl md:text-6xl text-white/90 leading-none italic font-light">
        {no}
      </div>
      <div>
        <div className="text-[10px] tracking-[0.5em] uppercase text-white/50">{en}</div>
        <div className="font-serif text-2xl md:text-3xl text-white">{jp}</div>
      </div>
      <div className="flex-1 h-px bg-white/15 mb-3" />
    </div>
  );
}

/* ============================================================
 *  /slope
 * ============================================================ */

const COURSES = [
  { name: "ファミリーコース", level: "初級", length: "800m", slope: "8°", desc: "ゆったりと幅広い斜面。スキー初体験のお子さまも安心して滑れる、家族向けの定番コースです。" },
  { name: "パノラマコース", level: "中級", length: "1,200m", slope: "18°", desc: "視界がひらける中腹からの中級ロング。リズムよくターンを刻める適度な斜度で、終日滑りごたえあり。" },
  { name: "ロングダウンヒル", level: "中〜上級", length: "2,500m", slope: "22°", desc: "山頂から麓まで一気に駆け下りる、当ゲレンデ最長の名物コース。雪質の変化を楽しめます。" },
  { name: "国体公式コース", level: "上級", length: "1,000m", slope: "32°", desc: "国民体育大会で実際に使用された本格派バーン。圧雪／非圧雪のラインを選んで攻められます。" },
  { name: "モーグルバーン", level: "上級", length: "400m", slope: "28°", desc: "整備されたコブが連なるテクニカルライン。スクールでも上級レッスンに使用されます。" },
];

export function SlopePage() {
  return (
    <AkakuraShell
      eyebrow="II · Slopes"
      title={<>9コース、<br />ひとつの <span className="italic font-light">山</span>。</>}
      lead="初級から国体公式コースまで、ひとつの山に多彩な表情。お子さま連れでも、本気で攻めたい一日でも、赤倉ならどちらも叶います。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <SectionHeading no="I" en="Course Map" jp="ゲレンデマップ" />
        <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
          <img src={akakuraHero} alt="ゲレンデマップ" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white/80 text-xs tracking-[0.3em] uppercase">
            Top — 1,020m / Base — 570m
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <SectionHeading no="II" en="Courses" jp="各コース紹介" />
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {COURSES.map((c, i) => (
            <li key={c.name} className="grid md:grid-cols-12 gap-6 py-8 hover:bg-white/[0.02] transition-colors px-2">
              <div className="md:col-span-1 font-serif text-2xl text-white/60 italic">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mb-2">{c.level}</div>
                <h3 className="font-serif text-2xl text-white">{c.name}</h3>
              </div>
              <div className="md:col-span-2 text-sm text-white/70">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">距離</div>
                <div className="font-serif">{c.length}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-2">最大斜度</div>
                <div className="font-serif">{c.slope}</div>
              </div>
              <div className="md:col-span-5 text-sm text-white/70 leading-loose">{c.desc}</div>
            </li>
          ))}
        </ul>
      </section>
    </AkakuraShell>
  );
}

/* ============================================================
 *  /price
 * ============================================================ */

const PRICES = [
  { type: "1日券", adult: "¥4,500", senior: "¥3,800", child: "¥3,000" },
  { type: "半日券（午前）", adult: "¥3,500", senior: "¥3,000", child: "¥2,400" },
  { type: "半日券（午後）", adult: "¥3,500", senior: "¥3,000", child: "¥2,400" },
  { type: "ナイター券", adult: "¥2,500", senior: "¥2,200", child: "¥1,800" },
  { type: "5時間券", adult: "¥4,000", senior: "¥3,400", child: "¥2,700" },
  { type: "シーズン券", adult: "¥38,000", senior: "¥32,000", child: "¥22,000" },
];

const PROMOS = [
  { title: "温泉付き1日パック", price: "¥5,500", desc: "リフト1日券＋赤倉温泉共同浴場入浴券。滑った後はそのまま源泉かけ流しへ。" },
  { title: "ファミリー4枚回数券", price: "¥14,000", desc: "1日券4枚分のセット価格。家族・グループ利用に。シーズン中いつでも使えます。" },
  { title: "レンタル＋リフトセット", price: "¥7,800", desc: "スキー／スノーボード一式レンタル＋1日リフト券。手ぶらで来てそのまま滑れます。" },
];

export function PricePage() {
  return (
    <AkakuraShell
      eyebrow="III · Lift Tickets"
      title={<>料金一覧／<br /><span className="italic font-light">おとくな</span>パック。</>}
      lead="リフト券・回数券・シーズン券のほか、温泉とセットになったお得なパックもご用意しています。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <SectionHeading no="I" en="Promotion" jp="おとくなパック" />
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {PROMOS.map((p) => (
            <div
              key={p.title}
              className="bg-black/50 backdrop-blur-sm p-8 hover:bg-black/70 transition-colors"
            >
              <div className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-3">Pack</div>
              <h3 className="font-serif text-xl text-white mb-3">{p.title}</h3>
              <div className="font-serif text-3xl mb-4 italic font-light">{p.price}</div>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <SectionHeading no="II" en="Price List" jp="料金一覧" />
        <div className="overflow-x-auto border border-white/10 bg-black/40 backdrop-blur-sm">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-white/10 text-left text-[10px] tracking-[0.4em] uppercase text-white/60">
                <th className="px-5 py-4">券種</th>
                <th className="px-5 py-4 text-right">大人</th>
                <th className="px-5 py-4 text-right">シニア</th>
                <th className="px-5 py-4 text-right">小人</th>
              </tr>
            </thead>
            <tbody>
              {PRICES.map((row, i) => (
                <tr key={row.type} className={`border-b border-white/5 ${i % 2 ? "bg-white/[0.02]" : ""}`}>
                  <td className="px-5 py-4 text-white/90">{row.type}</td>
                  <td className="px-5 py-4 text-right font-serif text-white">{row.adult}</td>
                  <td className="px-5 py-4 text-right font-serif text-white/70">{row.senior}</td>
                  <td className="px-5 py-4 text-right font-serif text-white/70">{row.child}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-white/50">
          ※ シニアは60歳以上、小人は小学生以下。価格はすべて税込みです。
        </p>
      </section>
    </AkakuraShell>
  );
}

/* ============================================================
 *  /foods
 * ============================================================ */

const SHOPS = [
  {
    name: "ゲレンデレストラン 山小屋",
    tagline: "Mountain View Restaurant",
    desc: "ゲレンデ中腹、大きな窓から雪景色を見渡せるメインレストラン。ボリューム満点の山形名物を。",
    menu: [
      ["米沢牛カレー", "¥1,500"],
      ["鳥中華", "¥980"],
      ["山形芋煮定食", "¥1,200"],
      ["スキーヤーズプレート", "¥1,400"],
    ],
  },
  {
    name: "Café 雪見堂",
    tagline: "Slope-side Café",
    desc: "ベース近くの小さなカフェ。自家焙煎コーヒーと焼きたてパンで、滑走の合間にひと休み。",
    menu: [
      ["雪見ブレンド", "¥500"],
      ["ホットチョコレート", "¥600"],
      ["クロックムッシュ", "¥850"],
      ["本日のスープ", "¥700"],
    ],
  },
  {
    name: "AKAKURA BBQ Terrace",
    tagline: "Open-air Grill",
    desc: "晴れた日の屋外グリル。ジュージュー焼ける肉と山形地ビールで、青空ランチを。",
    menu: [
      ["山形牛サーロイン", "¥2,400"],
      ["地鶏焼き", "¥1,200"],
      ["最上クラフトビール", "¥800"],
    ],
  },
];

const ROMAN = ["I", "II", "III", "IV", "V"];

export function FoodsPage() {
  return (
    <AkakuraShell
      eyebrow="IV · Restaurants"
      title={<>滑って、食べて、<br /><span className="italic font-light">また</span>滑る。</>}
      lead="ゲレンデ内3つの食事処。山形の郷土料理から焼きたてパンまで、一日中おいしいスキー場を。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 space-y-20">
        {SHOPS.map((s, i) => (
          <div key={s.name}>
            <SectionHeading no={ROMAN[i]} en={s.tagline} jp={s.name} />
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5 text-white/70 leading-loose text-sm">
                <p>{s.desc}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {s.menu.map(([item, price]) => (
                    <li key={item} className="flex items-center justify-between py-4">
                      <span className="text-white/90">{item}</span>
                      <span className="font-serif text-lg text-white italic font-light">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </AkakuraShell>
  );
}

/* ============================================================
 *  /access
 * ============================================================ */

const ROUTES = [
  {
    from: "車でお越しの方",
    items: [
      "東北自動車道「古川IC」より国道47号線経由 約60分",
      "山形自動車道「舟形IC」より約40分",
      "無料駐車場 約500台完備（大型バス可）",
    ],
  },
  {
    from: "電車でお越しの方",
    items: [
      "JR陸羽東線「赤倉温泉駅」下車",
      "駅からゲレンデまで送迎バスあり（要予約）",
      "東京から新幹線＋在来線で約3時間30分",
    ],
  },
  {
    from: "送迎バスをご利用の方",
    items: [
      "シーズン中、仙台駅・山形駅から直行バス運行",
      "宿泊施設からの無料シャトルバスあり",
      "詳細は送迎申込フォームよりお問い合わせください",
    ],
  },
];

export function AccessPage() {
  return (
    <AkakuraShell
      eyebrow="V · Access"
      title={<>山形・最上町、<br />温泉街の <span className="italic font-light">すぐとなり</span>。</>}
      lead="温泉街からそのまま続くゲレンデ。車でも電車でもアクセスしやすい、東北のスノーフィールドです。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <SectionHeading no="I" en="Map" jp="所在地" />
        <div className="border border-white/10 overflow-hidden bg-black/40">
          <iframe
            title="赤倉温泉スキー場 地図"
            src="https://www.openstreetmap.org/export/embed.html?bbox=140.43%2C38.76%2C140.49%2C38.80&layer=mapnik"
            className="w-full h-[420px] grayscale contrast-125 opacity-90"
            loading="lazy"
          />
        </div>
        <div className="mt-6 text-sm text-white/70">
          〒999-6101 山形県最上郡最上町大字富澤<br />
          Tel. 0233-00-0000 / Fax. 0233-00-0001
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <SectionHeading no="II" en="Route Info" jp="ルート案内" />
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {ROUTES.map((r, i) => (
            <div key={r.from} className="bg-black/50 backdrop-blur-sm p-6 hover:bg-black/70 transition-colors">
              <div className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">
                Route {ROMAN[i]}
              </div>
              <h3 className="font-serif text-xl text-white mb-4">{r.from}</h3>
              <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-white/40">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </AkakuraShell>
  );
}

/* ============================================================
 *  /news
 * ============================================================ */

const NEWS = [
  { date: "2026.05.10", tag: "イベント", title: "2026シーズン早割リフト券、本日より販売開始", body: "今シーズンも早割を販売いたします。10月末までのご購入で通常価格より15%OFF。" },
  { date: "2026.04.28", tag: "お知らせ", title: "ゴールデンウィーク期間中の営業について", body: "ゲレンデは4月初旬で営業を終了しております。レストラン棟は通常営業しております。" },
  { date: "2026.03.15", tag: "ゲレンデ", title: "国体公式コース、本日より整備のため一部クローズ", body: "上部コースの一部を圧雪整備のため一時クローズいたします。下部コースは通常営業です。" },
  { date: "2026.02.20", tag: "イベント", title: "第32回 赤倉スキーフォトコンテスト開催", body: "ゲレンデで撮影した雪景色や滑走シーンを募集します。応募締切は3月末。" },
  { date: "2026.01.12", tag: "ゲレンデ", title: "全コースオープンしました", body: "本日より全9コースをフルオープン。最高のコンディションでお待ちしています。" },
  { date: "2025.12.20", tag: "お知らせ", title: "ナイター営業について", body: "金・土・祝前日は21時までナイター営業を行います。" },
];

export function NewsPage() {
  return (
    <AkakuraShell
      eyebrow="I · News"
      title={<><span className="italic font-light">お知らせ</span>。</>}
      lead="営業情報・イベント・ゲレンデコンディションなど、赤倉からの最新のお知らせ。"
    >
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {NEWS.map((n) => (
            <li key={n.title} className="py-8 grid md:grid-cols-12 gap-4 hover:bg-white/[0.02] transition-colors px-2">
              <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-2 items-baseline md:items-start">
                <time className="font-serif text-lg text-white italic font-light">{n.date}</time>
                <span className="inline-block text-[10px] tracking-[0.4em] uppercase border border-white/30 text-white/70 px-2 py-1">
                  {n.tag}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-xl md:text-2xl text-white mb-2 hover:text-white/70 transition-colors cursor-pointer">
                  {n.title}
                </h3>
                <p className="text-sm text-white/65 leading-loose">{n.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </AkakuraShell>
  );
}
