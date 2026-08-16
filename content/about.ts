export type CareerEntry = {
  /** 役職・立場 */
  role: string;
  /** 所属先 */
  org: string;
  /** 所属先のURL。あればリンクになる */
  orgUrl?: string;
  /** 「2026.05 — 現在」のように表示する */
  period: string;
  /** 何をした／しているかを2〜3行。役職名から想像できることは書かない */
  description: string;
  /** 使った技術。無ければ省略 */
  stack?: string[];
};

/**
 * 経歴。新しいものが上。
 * 職歴に限らず、節目になったことを足していける。
 *
 * TODO: 各 description をもう少し具体的にする（何を担当し、何が変わったか）。
 */
export const career: CareerEntry[] = [
  {
    role: "インターン",
    org: "株式会社Delight",
    period: "2026.05 — 現在",
    description: "自社プロダクト RecUp の開発。",
  },
  {
    role: "インターン",
    org: "株式会社LYMO",
    period: "2025.10 — 2026.04",
    description: "自社プロダクト Lamb の開発。",
    stack: ["React", "TypeScript", "Next.js", "Express", "PostgreSQL"],
  },
  {
    role: "工学部 機械システム工学科",
    org: "山形大学",
    period: "2022.04 —",
    // TODO: 研究テーマなど、大学で何をやっているかを1行足す
    description: "体育会バレーボール部で主将を務め、男子東北2部リーグ3位。",
  },
];

export const stackGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "NestJS", "FastAPI", "Tailwind CSS", "Electron"],
  },
  {
    label: "Others",
    items: [
      "PostgreSQL",
      "Supabase",
      "Docker",
      "GCP",
      "GitHub Actions",
      "Jest",
    ],
  },
] as const;
