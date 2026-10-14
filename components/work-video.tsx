"use client";

import { useEffect, useRef } from "react";

/**
 * 作品の操作動画。GIF のように音なしでループさせる。
 * autoplay 属性は使わず、「視差効果を減らす」を設定していない人のときだけ
 * 再生を始める。設定している人には poster の静止画だけを見せる。
 */
export function WorkVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // 自動再生がブラウザに止められても、poster が出ているだけなので握りつぶす
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      className="w-full rounded-md border border-line"
    />
  );
}
