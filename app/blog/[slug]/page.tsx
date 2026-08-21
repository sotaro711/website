import Link from "next/link";
import { getPostSlugs } from "@/lib/posts";
import type { PostMeta } from "@/lib/posts";

/** content/posts/ にあるファイルだけをページにし、それ以外は 404 にする */
export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { meta } = (await import(`@/content/posts/${slug}.mdx`)) as {
    meta: PostMeta;
  };
  return { title: meta.title, description: meta.description };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const { default: Content, meta } = (await import(
    `@/content/posts/${slug}.mdx`
  )) as { default: React.ComponentType; meta: PostMeta };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
      <article className="max-w-[40rem]">
        <header className="flex flex-col gap-1">
          <p className="font-mono text-xs tabular-nums text-ink-3">
            {meta.date.replaceAll("-", ".")}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        </header>
        <div className="mt-4 text-ink-2">
          <Content />
        </div>
        <p className="mt-14">
          <Link href="/blog" className="text-accent hover:underline">
            ← Blog
          </Link>
        </p>
      </article>
    </main>
  );
}
