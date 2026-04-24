import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-bg-line px-[5vw] py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-[0.72rem] text-muted tracking-[0.04em]">
        © {new Date().getFullYear()} Xolani Mgube
      </span>
      <div className="flex gap-6">
        {footerLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-mono text-[0.72rem] tracking-[0.06em] uppercase text-muted hover:text-blue transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
