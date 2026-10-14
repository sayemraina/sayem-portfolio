"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Shot = { src: string; fit: string; bg?: string };

const INTERVAL_MS = 3500;

export default function ProjectImages({ images, title, offsetMs }: { images: Shot[]; title: string; offsetMs: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      timer = setInterval(() => setActive((i) => (i + 1) % images.length), INTERVAL_MS);
    }, offsetMs);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [images.length, offsetMs]);

  return (
    <>
      {images.map((shot, i) => (
        <div
          key={shot.src}
          className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
          style={shot.bg ? { backgroundColor: shot.bg } : undefined}
        >
          <Image
            src={shot.src}
            alt={`${title} screen ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            unoptimized={!shot.src.endsWith(".jpg")}
            priority={i === 0}
            className={
              shot.fit === "cover"
                ? "object-cover object-top"
                : shot.fit === "full"
                  ? "object-contain"
                  : "object-contain px-[27%]"
            }
          />
        </div>
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {images.map((shot, i) => (
            <span
              key={shot.src}
              className={`h-1.5 rounded-full bg-white/80 shadow transition-all duration-500 ${i === active ? "w-4" : "w-1.5 opacity-50"}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
