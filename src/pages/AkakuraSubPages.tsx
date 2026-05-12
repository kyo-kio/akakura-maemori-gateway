import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import akakuraHero from "@/assets/akakura-hero.jpg";

/* ============================================================
 *  Shared design tokens (ローカル)
 *  Primary: #003366  /  Accent: #cc0000
 * ============================================================ */

const NAV = [
  { label: "Home", icon: "⌂", to: "/akakura" },
  { label: "News", icon: "✦", to: "/news" },
  { label: "Slopes", icon: "▲", to: "/slope" },
  { label: "Price", icon: "¥", to: "/price" },
  { label: "Foods", icon: "◐", to: "/foods" },
  { label: "Access", icon: "→", to: "/access" },
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
    <div className="min-h-screen bg-[#f7f6f2] text-[#1a1a1a] font-sans">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-[#003366] text-white">
        <div className="flex items-center justify-between px-5 md:px-10 h-14">
          <Link to="/akakura" className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 bg-[#cc0000]" />
            <span className="font-serif text-lg tracking-[0.2em]">AKAKURA</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.4em] text-white/60 uppercase">
              Onsen Ski Resort
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.3em] uppercase">
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
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-xs tracking-[0.3em] uppercase border border-white/40 px-3 py-1.5"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <div className="h-[3px] w-full bg-[#cc0000]" />
        {open && (
          <div className="lg:hidden bg-[#003366] border-t border-white/10">
            <ul className="flex flex-col">
              {NAV.map((n) => (
                <li key={n.label} className="border-b border-white/10">
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 px-5 py-4 text-sm tracking-[0.2em] uppercase text-white/80 hover:text-white hover:bg-white/5"
                  >
                    <span className="w-5 text-[#cc0000]">{n.icon}</span>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Page hero */}
      <section className="border-b border-black/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="text-[10px] tracking-[0.5em] uppercase text-[#cc0000] mb-5">
            — {eyebrow}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] tracking-tight text-[#003366]">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 max-w-2xl text-[#444] leading-loose">{lead}</p>
          )}
        </div>
      </section>

      <main>{children}</main>

      <footer className="bg-[#003366] text-white/70 mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-serif text-xl text-white tracking-[0.2em]">AKAKURA</div>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              赤倉温泉スキー場<br />
              〒999-6101 山形県最上郡最上町<br />
              Tel. 0233-00-0000
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#cc0000] mb-3">
              Sitemap
            </div>
            <ul className="space-y-1.5 text-xs">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link to={n.to} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-[#cc0000] mb-3">
              Mogami
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><Link to="/" className="hover:text-white">← Mogami Sanctuary</Link></li>
              <li><a href="https://maemori.jp/" target="_blank" rel="noreferrer" className="hover:text-white">前森高原 ↗</a></li>
              <li><a href="https://town.mogami.lg.jp/" target="_blank" rel="noreferrer" className="hover:text-white">最上町公式 ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 md:px-10 py-5 text-[10px] tracking-[0.3em] uppercase text-white/50">
          © Akakura Onsen Ski Resort
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ no, en, jp }: { no: string; en: string; jp: string }) {
  return (
    <div className="flex items-end gap-6 mb-10">
      <div className="font-serif text-5xl text-[#cc0000] leading-none">{no}</div>
      <div>
        <div className="text-[10px] tracking-[0.5em] uppercase text-[#888]">{en}</div>
        <div className="font-serif text-2xl md:text-3xl text-[#003366]">{jp}</div>
      </div>
      <div className="flex-1 h-px bg-[#003366]/15 mb-3" />
    </div>
  );
}

/* ============================================================
 *  /slope  — ゲレンデページ
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
      eyebrow="II — Slopes"
      title={<>9コース、<br />ひとつの山。</>}
      lead="初級から国体公式コースまで、ひとつの山に多彩な表情。お子さま連れでも、本気で攻めたい一日でも、赤倉ならどちらも叶います。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <SectionHeading no="01" en="Course Map" jp="ゲレンデマップ" />
        <div className="relative aspect-[16/9] overflow-hidden border border-black/10">
          <img
            src={akakuraHero}
            alt="赤倉温泉スキー場 ゲレンデマップ"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white text-xs tracking-[0.3em] uppercase">
            Top — 1,020m / Base — 570m
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
        <SectionHeading no="02" en="Courses" jp="各コース紹介" />
        <ul className="divide-y divide-black/10 border-y border-black/10">
          {COURSES.map((c, i) => (
            <li key={c.name} className="grid md:grid-cols-12 gap-6 py-8">
              <div className="md:col-span-1 font-serif text-2xl text-[#cc0000]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-4">
                <div className="text-[10px] tracking-[0.4em] uppercase text-[#888] mb-2">{c.level}</div>
                <h3 className="font-serif text-2xl text-[#003366]">{c.name}</h3>
              </div>
              <div className="md:col-span-2 text-sm text-[#444]">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#888]">距離</div>
                <div>{c.length}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#888] mt-2">最大斜度</div>
                <div>{c.slope}</div>
              </div>
              <div className="md:col-span-5 text-sm text-[#444] leading-loose">{c.desc}</div>
            </li>
          ))}
        </ul>
      </section>
    </AkakuraShell>
  );
}

/* ============================================================
 *  /price  — 料金ページ
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
      eyebrow="III — Lift Tickets"
      title={<>料金一覧／<br />おとくなパック。</>}
      lead="リフト券・回数券・シーズン券のほか、温泉とセットになったお得なパックもご用意しています。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <SectionHeading no="01" en="Promotion" jp="おとくなパック" />
        <div className="grid md:grid-cols-3 gap-6">
          {PROMOS.map((p) => (
            <div key={p.title} className="border border-black/10 bg-white p-8 hover:border-[#cc0000] transition-colors">
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#cc0000] mb-3">Pack</div>
              <h3 className="font-serif text-xl text-[#003366] mb-2">{p.title}</h3>
              <div className="font-serif text-3xl mb-4">{p.price}</div>
              <p className="text-sm text-[#444] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
        <SectionHeading no="02" en="Price List" jp="料金一覧" />
        <div className="overflow-x-auto border border-black/10">
          <table className="w-full text-sm bg-white min-w-[560px]">
            <thead>
              <tr className="bg-[#003366] text-white text-left text-[10px] tracking-[0.3em] uppercase">
                <th className="px-5 py-4">券種</th>
                <th className="px-5 py-4 text-right">大人</th>
                <th className="px-5 py-4 text-right">シニア</th>
                <th className="px-5 py-4 text-right">小人</th>
              </tr>
            </thead>
            <tbody>
              {PRICES.map((row, i) => (
                <tr key={row.type} className={i % 2 ? "bg-[#f7f6f2]" : ""}>
                  <td className="px-5 py-4 font-medium">{row.type}</td>
                  <td className="px-5 py-4 text-right font-serif">{row.adult}</td>
                  <td className="px-5 py-4 text-right font-serif text-[#444]">{row.senior}</td>
                  <td className="px-5 py-4 text-right font-serif text-[#444]">{row.child}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[#888]">
          ※ シニアは60歳以上、小人は小学生以下。価格はすべて税込みです。
        </p>
      </section>
    </AkakuraShell>
  );
}

/* ============================================================
 *  /foods  — お食事ページ
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

export function FoodsPage() {
  return (
    <AkakuraShell
      eyebrow="IV — Restaurants"
      title={<>滑って、食べて、<br />また滑る。</>}
      lead="ゲレンデ内3つの食事処。山形の郷土料理から焼きたてパンまで、一日中おいしいスキー場を。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-24">
        {SHOPS.map((s, i) => (
          <div key={s.name}>
            <SectionHeading no={String(i + 1).padStart(2, "0")} en={s.tagline} jp={s.name} />
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5 text-[#444] leading-loose text-sm">
                <p>{s.desc}</p>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="divide-y divide-black/10 border-y border-black/10">
                  {s.menu.map(([item, price]) => (
                    <li key={item} className="flex items-center justify-between py-4">
                      <span className="text-[#1a1a1a]">{item}</span>
                      <span className="font-serif text-lg text-[#003366]">{price}</span>
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
 *  /access  — アクセスページ
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
      eyebrow="V — Access"
      title={<>山形・最上町、<br />温泉街のすぐとなり。</>}
      lead="温泉街からそのまま続くゲレンデ。車でも電車でもアクセスしやすい、東北のスノーフィールドです。"
    >
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <SectionHeading no="01" en="Map" jp="所在地" />
        <div className="border border-black/10 overflow-hidden">
          <iframe
            title="赤倉温泉スキー場 地図"
            src="https://www.openstreetmap.org/export/embed.html?bbox=140.43%2C38.76%2C140.49%2C38.80&layer=mapnik"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>
        <div className="mt-6 text-sm text-[#444]">
          〒999-6101 山形県最上郡最上町大字富澤<br />
          Tel. 0233-00-0000 / Fax. 0233-00-0001
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
        <SectionHeading no="02" en="Route Info" jp="ルート案内" />
        <div className="grid md:grid-cols-3 gap-6">
          {ROUTES.map((r, i) => (
            <div key={r.from} className="border-t-2 border-[#cc0000] bg-white p-6">
              <div className="text-[10px] tracking-[0.4em] uppercase text-[#888] mb-2">
                Route {i + 1}
              </div>
              <h3 className="font-serif text-xl text-[#003366] mb-4">{r.from}</h3>
              <ul className="space-y-2 text-sm text-[#444] leading-relaxed">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[#cc0000]">→</span>
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
 *  /news  — お知らせ
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
      eyebrow="I — News"
      title={<>お知らせ。</>}
      lead="営業情報・イベント・ゲレンデコンディションなど、赤倉からの最新のお知らせ。"
    >
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        <ul className="divide-y divide-black/10 border-y border-black/10">
          {NEWS.map((n) => (
            <li key={n.title} className="py-8 grid md:grid-cols-12 gap-4">
              <div className="md:col-span-3 flex md:flex-col gap-3 md:gap-2 items-baseline md:items-start">
                <time className="font-serif text-lg text-[#003366]">{n.date}</time>
                <span className="inline-block text-[10px] tracking-[0.3em] uppercase bg-[#003366] text-white px-2 py-1">
                  {n.tag}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] mb-2 hover:text-[#cc0000] transition-colors cursor-pointer">
                  {n.title}
                </h3>
                <p className="text-sm text-[#555] leading-loose">{n.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </AkakuraShell>
  );
}
