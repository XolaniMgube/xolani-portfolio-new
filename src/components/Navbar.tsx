"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 bg-bg/88 backdrop-blur-lg border-b border-bg-line">
        <Link href="/" className="font-mono text-[0.8rem] text-blue tracking-[0.04em]">
          Xolani Mgube<span className="text-muted"> : Dev</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* desktop nav links */}
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-[0.75rem] tracking-widest uppercase text-body hover:text-bright transition-colors duration-200 hidden sm:block"
            >
              {item.label}
            </a>
          ))}

          {/* hire me — always visible */}
          <a
            href="/#contact"
            className="font-mono text-[0.72rem] tracking-widest uppercase text-blue border border-blue/30 px-4 py-[0.4rem] rounded-[3px] hover:bg-blue-bg hover:border-blue transition-all duration-200"
          >
            Hire me
          </a>

          {/* hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="sm:hidden flex flex-col justify-center gap-1.5 w-6 h-6 shrink-0"
          >
            <span className={`block h-px bg-bright transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-px bg-bright transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-bright transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      <div
        className={`fixed top-14.25 left-0 right-0 z-40 sm:hidden bg-bg border-b border-bg-line transition-all duration-200 overflow-hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-[5vw] py-4 gap-1">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-[0.8rem] tracking-widest uppercase text-body hover:text-bright transition-colors duration-200 py-3 border-b border-bg-line last:border-none"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
