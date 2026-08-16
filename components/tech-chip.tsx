import {
  siCplusplus,
  siDocker,
  siElectron,
  siExpress,
  siFastapi,
  siGithubactions,
  siGooglecloud,
  siJavascript,
  siJest,
  siNestjs,
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

/**
 * 技術名 → アイコン。Simple Icons（CC0）のパスをビルド時に埋め込む。
 * ここに無い技術（S4 / RCWA など）はテキストだけで表示される。
 *
 * 色はブランドカラーを使わず、周りの文字色をそのまま継承させる。
 * ロゴの色をそのまま出すと、このページで一番強い要素になってしまうため。
 */
const icons: Record<string, { title: string; path: string }> = {
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Python: siPython,
  "C++": siCplusplus,
  React: siReact,
  "Next.js": siNextdotjs,
  NestJS: siNestjs,
  FastAPI: siFastapi,
  Express: siExpress,
  "Tailwind CSS": siTailwindcss,
  Electron: siElectron,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Docker: siDocker,
  GCP: siGooglecloud,
  "GitHub Actions": siGithubactions,
  Jest: siJest,
};

export function TechChip({ name }: { name: string }) {
  const icon = icons[name];

  return (
    <li className="flex items-center gap-1.5 rounded-sm border border-line-2 px-1.5 py-0.5 font-mono text-[0.7rem] text-ink-2">
      {icon && (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="size-3.5 shrink-0 fill-current"
        >
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </li>
  );
}
