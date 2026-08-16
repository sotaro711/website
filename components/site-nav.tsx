import Link from "next/link";
import { nav, site } from "@/content/site";

/**
 * 全ページ共通のヘッダー。
 * 罫線は画面の端から端まで引き、中身だけを最大幅で中央に置く。
 */
export function SiteNav() {
  return (
    <header className="w-full border-b border-line">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-8 px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="mr-auto text-lg font-bold tracking-tight transition-colors hover:text-accent"
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
