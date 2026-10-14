export type Work = {
  /** 作品名 */
  name: string;
  /** 表示する時期。開発中は「2026.07 —」のように終わりを開けておく */
  period: string;
  /** 期間の横に添える今の状態。「研究で利用中」など。無ければ出さない */
  status?: string;
  /** 「何を解決するものか」を課題ベースで2〜3文。機能の羅列にはしない */
  summary: string;
  /** 使った技術。多くても6個程度に絞る */
  stack: string[];
  /** ソースコード */
  repo?: string;
  /** 公開URL。まだ無ければ省略する */
  url?: string;
  /** 詳しく書いた記事（Zenn など） */
  article?: string;
  /** 操作の様子を見せる短い動画。public/ からのパス。音なしでループ再生する */
  video?: { src: string; poster: string };
};

/**
 * 作品はここに追加していく。上にあるものほど新しい。
 * 詳細ページは作らないので、書きたいことが増えたら Zenn に書いてリンクする。
 */
export const works: Work[] = [
  {
    name: "Morpho",
    period: "2026.05 —",
    status: "研究で利用中",
    summary:
      "膜の構成を入力するだけで、どんな色に見えるかをその場で確かめられる構造色シミュレーター。1条件15分かかっていた計算を約1秒にし、共同研究の現場で使われている。詳しくは記事にまとめています。",
    stack: ["Next.js", "FastAPI", "Python", "S4 / RCWA", "Supabase", "GCP"],
    repo: "https://github.com/sotaro711/Morpho",
    article: "https://zenn.dev/sotaro711/articles/morpho-structural-color-simulator",
    video: {
      src: "/works/morpho-demo.mp4",
      poster: "/works/morpho-demo.jpg",
    },
  },
];
