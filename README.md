# website

安藤颯太郎の個人サイト。

## Stack

- Next.js (App Router) / TypeScript
- Tailwind CSS v4
- Vercel

## Development

```bash
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
npm run lint    # ESLint
```

## Structure

```
app/
  layout.tsx    全ページ共通のレイアウト
  page.tsx      トップページ
  globals.css   グローバルCSS / デザイントークン
public/         画像などの静的ファイル
```
