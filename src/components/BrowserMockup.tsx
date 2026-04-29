"use client";

import Image from "next/image";
import { useState } from "react";

interface BrowserMockupProps {
  color: string;
  image?: string;
  images?: string[];
  tall?: boolean;
}

export function BrowserMockup({ color, image, images, tall = false }: BrowserMockupProps) {
  const slides = images && images.length > 1 ? images : image ? [image] : [];
  const isCarousel = slides.length > 1;
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const screenClass = tall ? "h-72" : "h-44";

  return (
    <div className="rounded-md overflow-hidden border border-bg-line shrink-0 w-full">
      {/* chrome bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-bg-card border-b border-bg-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" style={{ opacity: 0.75 }} />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" style={{ opacity: 0.75 }} />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" style={{ opacity: 0.75 }} />
        <div className="ml-2 flex-1 bg-bg-line rounded-[3px] h-4 max-w-40" />
        {isCarousel && (
          <span className="ml-auto font-mono text-[0.62rem] text-muted tabular-nums">
            {index + 1}/{slides.length}
          </span>
        )}
      </div>

      {/* screen */}
      {slides.length > 0 ? (
        <div className={`${screenClass} relative group`}>
          <Image
            src={slides[index]}
            alt=""
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* carousel controls */}
          {isCarousel && (
            <>
              <button
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bg/80 border border-bg-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-bg"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2L4 6l3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bright" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bg/80 border border-bg-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-bg"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2L8 6l-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-bright" />
                </svg>
              </button>

              {/* dot indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to screenshot ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-150 ${
                      i === index ? "bg-blue scale-125" : "bg-bg-line hover:bg-muted"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className={screenClass} style={{ background: color }}>
          <div className="p-5 flex flex-col gap-3 opacity-20">
            <div className="h-3 w-2/5 rounded-sm bg-white/40" />
            <div className="h-6 w-3/5 rounded-sm bg-white/30" />
            <div className="h-2 w-4/5 rounded-sm bg-white/20" />
            <div className="h-2 w-3/4 rounded-sm bg-white/20" />
            <div className="flex gap-2 mt-1">
              <div className="h-7 w-20 rounded-[3px] bg-white/30" />
              <div className="h-7 w-16 rounded-[3px] bg-white/15" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
