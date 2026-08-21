import fs from "node:fs";
import path from "node:path";

/** 各 .mdx が `export const meta` で名乗る情報 */
export type PostMeta = {
  title: string;
  /** "2026-08-21" 形式。並び替えにそのまま使う */
  date: string;
  description?: string;
};

export type Post = PostMeta & { slug: string };

const postsDir = path.join(process.cwd(), "content/posts");

/**
 * content/posts/ にある記事のスラッグ一覧（= ファイル名から .mdx を除いたもの）。
 * `_` で始まるファイルは下書き・テンプレート扱いで公開しない。
 * なお .mdx が1つも無いと動的 import の解決先が無くなりビルドが落ちるため、
 * _template.mdx は消さずに残しておくこと。
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** 全記事の meta を集めて新しい順に返す */
export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const { meta } = (await import(`@/content/posts/${slug}.mdx`)) as {
        meta: PostMeta;
      };
      return { slug, ...meta };
    }),
  );
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
