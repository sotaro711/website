import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { WorkCard } from "@/components/work-card";
import { works } from "@/content/works";

export const metadata: Metadata = {
  title: "Works",
  description: "作ったもの / 作っているもの",
};

export default function WorksPage() {
  return (
    <PageShell title="Works" lead="作っているもの">
      <ul className="flex flex-col">
        {works.map((work) => (
          <WorkCard key={work.name} work={work} />
        ))}
      </ul>
    </PageShell>
  );
}
