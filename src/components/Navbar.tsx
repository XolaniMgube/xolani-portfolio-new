"use client";

import Link from "next/link";
import { nav } from "@/lib/data";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 bg-bg/88 backdrop-blur-[16px] border-b border-bg-line">
      <Link href="/" className="font-mono text-[0.8rem] text-blue tracking-[0.04em]">
        xm<span className="text-muted">/</span>dev
      </Link>

      <div className="flex items-center gap-8">
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-bright transition-colors duration-200 hidden sm:block"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-blue border border-blue/30 px-4 py-[0.4rem] rounded-[3px] hover:bg-blue-bg hover:border-blue transition-all duration-200"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
