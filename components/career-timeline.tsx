import type { CareerEntry } from "@/content/about";

/**
 * 経歴の年表。左に1本の縦線を引き、各項目の頭にノードを置く。
 * ノードは背景色で塗って線を隠すことで、線の上に乗っているように見せる。
 */
export function CareerTimeline({ entries }: { entries: CareerEntry[] }) {
  return (
    <ol className="flex flex-col gap-7 border-l border-line-2 pl-6">
      {entries.map((entry) => (
        <li key={`${entry.org}-${entry.period}`} className="relative flex flex-col gap-1.5">
          <span
            aria-hidden
            className="absolute top-2.5 -left-[29px] size-2.5 rounded-full border border-line-2 bg-ground"
          />

          <h3 className="text-base font-bold tracking-tight">
            {entry.role}
            <span className="px-1.5 font-normal text-ink-3">@</span>
            {entry.orgUrl ? (
              <a href={entry.orgUrl} className="text-accent hover:underline">
                {entry.org}
              </a>
            ) : (
              <span className="text-accent">{entry.org}</span>
            )}
          </h3>

          <p className="font-mono text-xs tabular-nums tracking-wide text-ink-3">
            {entry.period}
          </p>

          <p className="text-ink-2">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}
