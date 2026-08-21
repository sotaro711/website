export type Work = {
  /** 作品名 */
  name: string;
  /** 表示する時期。開発中は「2026.07 —」のように終わりを開けておく */
  period: string;
  /** 開発中かどうか。true なら名前の横にその旨を出す */
  wip?: boolean;
  /** 「何を解決するものか」を課題ベースで2〜3文。機能の羅列にはしない */
  summary: string;
  /** 使った技術。多くても6個程度に絞る */
  stack: string[];
  /** ソースコード */
  repo?: string;
  /** 公開URL。まだ無ければ省略する */
  url?: string;
};

/**
 * 作品はここに追加していく。上にあるものほど新しい。
 * 詳細ページは作らないので、書きたいことが増えたら Zenn に書いてリンクする。
 */
export const works: Work[] = [
  {
    name: "Morpho",
    period: "2026.05 —",
    wip: true,
    summary:
      "多層薄膜の「構造色」をブラウザ上でシミュレーションするツール。開発中。",
    stack: ["TypeScript", "Next.js", "FastAPI", "Python", "S4 / RCWA"],
    repo: "https://github.com/sotaro711/Morpho",
  },
];
