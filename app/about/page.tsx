import type { Metadata } from "next";
import { CareerTimeline } from "@/components/career-timeline";
import { PageShell } from "@/components/page-shell";
import { TechChip } from "@/components/tech-chip";
import { career, stackGroups } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.nameJa} / ${site.name}`,
};

export default function AboutPage() {
  return (
    <PageShell title="About" lead={`${site.nameJa} / ${site.name}`}>
      <div className="flex flex-col gap-4 text-ink-2">
        <p>
          山形大学 工学部
          機械システム工学科の学生です。専攻は機械系ですが、研究で使う光学計算を誰でも触れる形にしたくて
          Web を書き始めました。
        </p>
        <p>
          今はソフトウェアエンジニアとしてインターンをしています。フロントエンドは
          TypeScript と React、バックエンドは FastAPI か NestJS。数値計算まわりは
          Python と C++ を書きます。
        </p>
      </div>

      <Section label="Career">
        <CareerTimeline entries={career} />
      </Section>

      <Section label="Stack">
        <div className="flex flex-col gap-3">
          {stackGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-1.5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-3">
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechChip key={item} name={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Off">
        <p className="text-ink-2">
          （趣味を2〜3行。ここだけ少し文体を崩してよい箇所です）
        </p>
      </Section>
    </PageShell>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 border-t border-line pt-7">
      <h2 className="text-xl font-bold tracking-tight">{label}</h2>
      {children}
    </section>
  );
}
