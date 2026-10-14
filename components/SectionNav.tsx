"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

// Point on screen that counts as "where the reader is".
const READ_LINE = 0.35;

export default function SectionNav({ items }: { items: Item[] }) {
  const [progress, setProgress] = useState<number[]>(items.map(() => 0));

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      const line = window.innerHeight * READ_LINE;
      setProgress(
        items.map((item) => {
          if (atBottom) return 1;
          const section = document.getElementById(item.id);
          if (!section) return 0;
          const box = section.getBoundingClientRect();
          return Math.min(1, Math.max(0, (line - box.top) / box.height));
        }),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const firstUnfinished = progress.findIndex((p) => p < 1);
  const activeIndex =
    firstUnfinished === -1 ? items.length - 1 : firstUnfinished;

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-10 bg-[#FAFAF8] pb-8 pt-12 lg:pt-16"
    >
      <ul className="flex gap-8">
        {items.map((item, i) => {
          const on = i === activeIndex;
          return (
            <li key={item.id} className="space-y-2.5">
              <a
                href={`#${item.id}`}
                aria-current={on ? "true" : undefined}
                className={`block text-sm font-medium uppercase tracking-widest transition-colors ${
                  on ? "text-[#1A1A1A]" : "text-[#B5B9C0] hover:text-[#4B5563]"
                }`}
              >
                {item.label}
              </a>
              <span aria-hidden className="block h-px w-full bg-[#E5E7EB]">
                <span
                  className="block h-px bg-[#1A1A1A]"
                  style={{ width: `${progress[i] * 100}%` }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
