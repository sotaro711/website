import type { Metadata } from "next";
import Image from "next/image";
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
      <p className="text-ink-2">
        山形大学 工学部
        機械システム工学科の4年生<br />
        スタートアップでソフトウェアエンジニアとしてインターンをしています。
      </p>

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
        <div className="flex flex-col gap-3">
          <h3 className="font-medium">愛車 🚗</h3>
          <p className="text-ink-2">
            大学3年のとき、気合いのローンで買いました💸
          </p>
          <div className="flex flex-col gap-2">
            <Image
              src="/about/car-1.webp"
              alt="夜のガソリンスタンドにて"
              width={1280}
              height={1707}
              sizes="(max-width: 704px) 100vw, 640px"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/about/car-2.webp"
                alt="親父とドライブ"
                width={640}
                height={480}
                sizes="(max-width: 704px) 50vw, 312px"
                className="w-full rounded-lg"
              />
              <Image
                src="/about/car-3.webp"
                alt="友達とドライブ"
                width={640}
                height={480}
                sizes="(max-width: 704px) 50vw, 312px"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <h3 className="font-medium">旅行 ✈️</h3>
          <p className="text-ink-2">
            大学3年でタイに行って以来、旅行にハマっています。「常識にとらわれず自由に生きていいんだ」と価値観が変わった旅でした。今年も海外に行くつもりです。
          </p>
          <div className="flex flex-col gap-2">
            <Image
              src="/about/trip-1.webp"
              alt="バンコク、チャオプラヤー川越しのワットアルン"
              width={1280}
              height={1050}
              sizes="(max-width: 704px) 100vw, 640px"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/about/trip-2.webp"
                alt="水上マーケットで食べたココナッツアイス"
                width={640}
                height={853}
                sizes="(max-width: 704px) 50vw, 312px"
                className="w-full rounded-lg"
              />
              <Image
                src="/about/trip-3.webp"
                alt="夜のビーチ"
                width={640}
                height={853}
                sizes="(max-width: 704px) 50vw, 312px"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <h3 className="font-medium">スノボ 🏂</h3>
          <p className="text-ink-2">
            山形に来てどハマりしました。さすが雪国、ゲレンデが近いので毎年通っています。
          </p>
          <div className="flex flex-col gap-2">
            <Image
              src="/about/snow-1.webp"
              alt="山頂から滑り出す前の一枚"
              width={1079}
              height={771}
              sizes="(max-width: 704px) 100vw, 640px"
              className="w-full rounded-lg"
            />
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/about/snow-2.webp"
                alt="パウダーに埋まったところ"
                width={640}
                height={853}
                sizes="(max-width: 704px) 50vw, 312px"
                className="w-full rounded-lg"
              />
              <Image
                src="/about/snow-3.webp"
                alt="樹氷原"
                width={640}
                height={853}
                sizes="(max-width: 704px) 50vw, 312px"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
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
