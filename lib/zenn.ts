import { socials } from "@/content/site";

export type ZennArticle = {
  title: string;
  url: string;
  /** "2026-08-21" 形式に揃える */
  date: string;
};

const zennUrl = socials.find((s) => s.label === "Zenn")?.href;

/** RSS の <item> チャンクから1タグ分の中身を取り出す。CDATA はほどく */
function extract(chunk: string, tag: string): string | undefined {
  const match = chunk.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match?.[1].replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1").trim();
}

/**
 * Zenn の RSS から記事一覧を取る。1時間ごとに再取得。
 * 取得に失敗しても記事0件として扱い、ページ自体は落とさない。
 */
export async function getZennArticles(): Promise<ZennArticle[]> {
  if (!zennUrl) return [];
  try {
    const res = await fetch(`${zennUrl}/feed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return xml
      .split("<item>")
      .slice(1)
      .flatMap((chunk) => {
        const title = extract(chunk, "title");
        const url = extract(chunk, "link");
        const pubDate = extract(chunk, "pubDate");
        if (!title || !url || !pubDate) return [];
        const time = Date.parse(pubDate);
        if (Number.isNaN(time)) return [];
        return [{ title, url, date: new Date(time).toISOString().slice(0, 10) }];
      });
  } catch {
    return [];
  }
}
