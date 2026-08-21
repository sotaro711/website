import type { MDXComponents } from "mdx/types";

/**
 * MDX 内の各要素に当てるスタイル。@next/mdx を App Router で使うには
 * このファイルがプロジェクト直下に必須。
 *
 * 記事は一人語りの短文が中心なので、装飾は控えめに本文の読みやすさだけ整える。
 * 見出しは h2 から使う（h1 は記事タイトルとしてページ側が出す）。
 */
const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-10 text-xl font-bold tracking-tight text-ink" {...props} />
  ),
  h3: (props) => <h3 className="mt-8 text-lg font-bold text-ink" {...props} />,
  p: (props) => <p className="mt-5" {...props} />,
  a: (props) => <a className="text-accent hover:underline" {...props} />,
  ul: (props) => (
    <ul className="mt-5 flex list-disc flex-col gap-1.5 pl-5" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-5 flex list-decimal flex-col gap-1.5 pl-5" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-5 border-l-2 border-line-2 pl-4 text-ink-2"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-line/50 px-1.5 py-0.5 font-mono text-[0.85em]" {...props} />
  ),
  pre: (props) => (
    <pre
      className="mt-5 overflow-x-auto rounded-lg border border-line bg-surface p-4 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-10 border-line" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
