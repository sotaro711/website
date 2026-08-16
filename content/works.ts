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
    period: "2026.07 —",
    wip: true,
    summary:
      "多層薄膜・回折構造の光学シミュレータ。層の構成と屈折率を入力すると、RCWA法で 380–780nm の反射・透過スペクトルを計算し、そのまま「見える色」に変換して返す。研究で使う光学計算はコマンドラインと設定ファイルの世界に閉じがちなので、ブラウザから条件を変えながら結果を見られるようにした。",
    stack: ["TypeScript", "Next.js", "FastAPI", "Python", "S4 / RCWA"],
    repo: "https://github.com/sotaro711/Morpho",
  },
];
