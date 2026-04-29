"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      aria-label={copied ? "Copied!" : "Copy email address"}
      title={copied ? "Copied!" : "Copy"}
      className="text-muted hover:text-blue transition-colors duration-150 flex-shrink-0"
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="7" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M9 5V3.2A1.2 1.2 0 0 0 7.8 2H3.2A1.2 1.2 0 0 0 2 3.2v4.6A1.2 1.2 0 0 0 3.2 9H5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      )}
    </button>
  );
}
