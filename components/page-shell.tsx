/**
 * トップ以外のページの共通の器。
 *
 * 外側はヘッダーと同じ最大幅・同じ左右余白にして、ナビの名前とページ見出しの
 * 左端を揃える。内側は 40rem に絞る。和文は1行 30〜40字を超えると読みにくく、
 * 区切り線もこの幅で止めた方が内容とまとまって見えるため。
 */
export function PageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
      <div className="flex max-w-[40rem] flex-col gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {lead && <p className="text-ink-2">{lead}</p>}
        </header>
        {children}
      </div>
    </main>
  );
}
