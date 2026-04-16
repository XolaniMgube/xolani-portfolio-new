"use client";

import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-on");
          observer.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
