import Image from "next/image";
import Link from "next/link";
import { site, socials } from "@/content/site";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 pb-10">
      <div className="flex flex-col items-center gap-5 text-center">
        <Image
          src={site.portrait}
          alt={site.name}
          width={160}
          height={160}
          priority
          className="size-40 rounded-full object-cover"
          /* 元の写真が暗いので、ごく軽く持ち上げている */
          style={{ filter: "brightness(1.06) contrast(1.02)" }}
        />

        <div className="flex flex-col gap-1.5">
          <h1 className="text-4xl font-medium tracking-tight">{site.name}</h1>
          <p className="text-ink-2">{site.role}</p>
          <p className="text-sm text-ink-3">{site.affiliation}</p>
        </div>

        <div className="mt-1 flex gap-3">
          <Link
            href="/works"
            className="rounded border border-accent bg-accent px-5 py-2 text-sm text-on-accent transition-opacity hover:opacity-85"
          >
            Works
          </Link>
          <a
            href="https://github.com/sotaro711"
            className="rounded border border-accent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-on-accent"
          >
            GitHub
          </a>
        </div>

        <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-3 transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
