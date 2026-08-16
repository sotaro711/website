import { TechChip } from "@/components/tech-chip";
import type { Work } from "@/content/works";

/** 作品1件。詳細ページは持たず、この中で完結させる。 */
export function WorkCard({ work }: { work: Work }) {
  return (
    <li className="flex flex-col gap-2.5 border-t border-line py-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-xl font-bold tracking-tight">{work.name}</h2>
        <p className="font-mono text-xs tabular-nums text-ink-3">
          {work.period}
          {work.wip && " 開発中"}
        </p>
      </div>

      <p className="text-ink-2">{work.summary}</p>

      <ul className="flex flex-wrap gap-1.5">
        {work.stack.map((s) => (
          <TechChip key={s} name={s} />
        ))}
      </ul>

      <div className="flex gap-4 text-sm">
        {work.url && (
          <a href={work.url} className="text-accent hover:underline">
            Site ↗
          </a>
        )}
        {work.repo && (
          <a href={work.repo} className="text-accent hover:underline">
            Code ↗
          </a>
        )}
      </div>
    </li>
  );
}
