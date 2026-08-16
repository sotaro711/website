/**
 * サイト全体で使うプロフィール情報。
 * 名前やリンクを変えたいときはここだけを直す。
 */
export const site = {
  name: "Sotaro Ando",
  nameJa: "安藤颯太郎",
  role: "Software Engineer Intern",
  affiliation: "Mechanical Systems Engineering @ Yamagata University",
  portrait: "/portrait.webp",
} as const;

/** ヘッダーのナビゲーション */
export const nav = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;

/** トップページ下部に並べる外部リンク */
export const socials = [
  { href: "https://github.com/sotaro711", label: "GitHub" },
  { href: "https://x.com/senobizn6", label: "X" },
  { href: "https://zenn.dev/sotaro711", label: "Zenn" },
  { href: "https://www.wantedly.com/id/sotaro_ando711", label: "Wantedly" },
] as const;
