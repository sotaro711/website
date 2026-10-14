import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { getPosts } from "@/lib/posts";
import { getZennArticles } from "@/lib/zenn";

export const metadata: Metadata = {
  title: "Blog",
  description: "書いたもの",
};

/** Zenn の記事とサイト内の記事を同じ形に潰して1本のリストにする */
type Entry = {
  title: string;
  date: string;
  href: string;
  external: boolean;
};

export default async function BlogPage() {
  const [posts, articles] = await Promise.all([getPosts(), getZennArticles()]);

  const entries: Entry[] = [
    ...posts.map((post) => ({
      title: post.title,
      date: post.date,
      href: `/blog/${post.slug}`,
      external: false,
    })),
    ...articles.map((article) => ({
      title: article.title,
      date: article.date,
      href: article.url,
      external: true,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageShell title="Blog" lead="書いたもの">
      {entries.length === 0 ? (
        <p className="text-ink-3">まだ記事がありません。</p>
      ) : (
        <ul className="flex flex-col">
          {entries.map((entry) => (
            <EntryRow key={entry.href} entry={entry} />
          ))}
        </ul>
      )}
    </PageShell>
  );
}

function EntryRow({ entry }: { entry: Entry }) {
  const inner = (
    <>
      <span className="font-medium transition-colors group-hover:text-accent">
        {entry.title}
      </span>
      <span className="font-mono text-xs tabular-nums text-ink-3">
        {entry.date.replaceAll("-", ".")}
        {entry.external && " · Zenn ↗"}
      </span>
    </>
  );
  /* タイトルの長さで日付の位置が変わらないよう、常に2段にする */
  const className = "group flex flex-col gap-1.5 py-5";

  return (
    <li className="border-t border-line">
      {entry.external ? (
        <a href={entry.href} className={className}>
          {inner}
        </a>
      ) : (
        <Link href={entry.href} className={className}>
          {inner}
        </Link>
      )}
    </li>
  );
}
