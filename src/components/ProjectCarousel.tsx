"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectCarouselProps {
  images: string[];
  color: string;
}

export function ProjectCarousel({ images, color }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="rounded-md overflow-hidden border border-bg-line">
      {/* chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-bg-card border-b border-bg-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" style={{ opacity: 0.75 }} />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" style={{ opacity: 0.75 }} />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" style={{ opacity: 0.75 }} />
        <div className="ml-2 flex-1 bg-bg-line rounded-[3px] h-4 max-w-[160px]" />
        {/* slide counter */}
        <span className="font-mono text-[0.65rem] text-muted ml-auto">
          {index + 1} / {images.length}
        </span>
      </div>

      {/* screen */}
      <div className="relative h-80 group" style={{ background: color }}>
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={i === 0}
            />
          </div>
        ))}

        {/* nav arrows */}
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg/70 backdrop-blur-sm border border-bg-line text-bright flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-bg transition-all duration-200 z-10"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg/70 backdrop-blur-sm border border-bg-line text-bright flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-bg transition-all duration-200 z-10"
        >
          ›
        </button>
      </div>

      {/* dot indicators */}
      <div className="flex items-center justify-center gap-2 py-3 bg-bg-card border-t border-bg-line">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className="transition-all duration-200 rounded-full"
            style={{
              width: i === index ? "1.5rem" : "0.4rem",
              height: "0.4rem",
              background: i === index ? "var(--color-blue)" : "var(--color-dim)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
