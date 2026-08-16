/**
 * デザイントークンの確認用ページ。
 * 色と書体が意図どおりに出ているかを見るためだけのもので、
 * Step 6 のデプロイ前に削除する。
 */

const colors = [
  { token: "ground", label: "Ground", use: "ページ背景" },
  { token: "surface", label: "Surface", use: "カード・ヘッダー" },
  { token: "ink", label: "Ink", use: "見出し・本文" },
  { token: "ink-2", label: "Ink Muted", use: "説明文" },
  { token: "ink-3", label: "Ink Subtle", use: "日付・ラベル" },
  { token: "line", label: "Line", use: "区切り線" },
  { token: "line-2", label: "Line Strong", use: "タグ枠" },
  { token: "accent", label: "Morpho Blue", use: "リンク・ボタン" },
];

export default function DesignPreview() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 flex flex-col gap-14">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs tracking-[0.12em] uppercase text-ink-3">
          Design tokens
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">確認用ページ</h1>
        <p className="text-ink-2">
          OS の外観設定をライト／ダークで切り替えて、配色が入れ替わるか確認します。
        </p>
      </header>

      {/* 色 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">色</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {colors.map((c) => (
            <div
              key={c.token}
              className="border border-line rounded overflow-hidden bg-surface"
            >
              <div
                className="h-14 border-b border-line"
                style={{ background: `var(--${c.token})` }}
              />
              <div className="px-2.5 py-2 flex flex-col leading-snug">
                <span className="text-sm font-medium">{c.label}</span>
                <span className="font-mono text-[0.65rem] text-ink-3">
                  --{c.token}
                </span>
                <span className="text-xs text-ink-2">{c.use}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 書体 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">書体</h2>
        <div className="border border-line rounded bg-surface divide-y divide-line">
          <Row label="Name / 32px">
            <span className="text-3xl font-semibold tracking-tight">
              Sotaro Ando
            </span>
          </Row>
          <Row label="H2 / 20px">
            <span className="text-xl font-semibold tracking-tight">Works</span>
          </Row>
          <Row label="Body 欧文">
            <span className="text-ink-2">
              Student / Software Engineer Intern. Building products with modern
              web technologies.
            </span>
          </Row>
          <Row label="Body 和文">
            <span className="text-ink-2">
              山形大学 工学部 機械システム工学科。光学シミュレータを作っています。
            </span>
          </Row>
          <Row label="Label / Mono">
            <span className="font-mono text-xs tracking-[0.1em] uppercase text-ink-3">
              Mechanical Systems Engineering
            </span>
          </Row>
          <Row label="Data / Mono">
            <span className="font-mono text-sm tabular-nums">
              2026.07 — TypeScript, FastAPI
            </span>
          </Row>
        </div>
        <p className="text-sm text-ink-2">
          和文が明朝やヒラギノに見える場合は IBM Plex Sans JP
          が効いていないので、実装を見直します。
        </p>
      </section>

      {/* 部品 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">部品</h2>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded border border-accent bg-accent px-4 py-1.5 text-sm text-on-accent">
            Works
          </span>
          <span className="rounded border border-accent px-4 py-1.5 text-sm text-accent">
            GitHub
          </span>
          <a href="#" className="text-accent underline underline-offset-2">
            リンクの見え方
          </a>
          <span className="rounded-sm border border-line-2 px-1.5 py-0.5 font-mono text-[0.7rem] text-ink-2">
            TypeScript
          </span>
        </div>
      </section>
    </main>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-2 sm:gap-4 px-4 py-3.5 items-baseline">
      <span className="font-mono text-[0.65rem] tracking-[0.08em] uppercase text-ink-3">
        {label}
      </span>
      <span>{children}</span>
    </div>
  );
}
