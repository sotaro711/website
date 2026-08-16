import Link from "next/link";
import { nav, site } from "@/content/site";

/** 全ページ共通のヘッダー。左に名前（＝ホームへの導線）、右にページリンク。 */
export function SiteNav() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex w-full max-w-3xl items-baseline gap-6 px-6 py-6 text-sm">
        <Link
          href="/"
          className="mr-auto font-medium tracking-tight transition-colors hover:text-accent"
        >
          {site.name}
        </Link>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-ink-2 transition-colors hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
