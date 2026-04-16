import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-[5vw] pt-32 pb-24 max-w-content">
      <Reveal>
        {/* pre-line */}
        <div className="flex items-center gap-3 font-mono text-[0.78rem] text-blue tracking-[0.06em] mb-5">
          <span className="inline-block w-8 h-px bg-blue flex-shrink-0" />
          Frontend Developer · Johannesburg
        </div>

        {/* name */}
        <h1
          className="font-serif font-medium text-snow leading-[1.05] tracking-[-0.02em] mb-2"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          Xolani
          <br />
          <em className="not-italic font-normal italic text-bright">Mgube.</em>
        </h1>

        {/* tagline */}
        <p
          className="font-serif italic text-muted font-normal mb-8"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
        >
          I build things for the web that actually work.
        </p>

        {/* desc */}
        <p className="text-[0.95rem] text-body max-w-[520px] leading-[1.85] mb-12">
          Four years of building fast, accessible interfaces for businesses that care
          about their users. I write clean code, ship on time, and think about the{" "}
          <strong className="text-bright font-medium">business problem</strong> before
          touching the keyboard.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#work"
            className="bg-blue text-bg font-mono text-[0.75rem] tracking-[0.08em] uppercase px-7 py-3 rounded-[3px] font-medium hover:opacity-85 hover:-translate-y-px transition-all duration-200"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="font-mono text-[0.75rem] tracking-[0.08em] uppercase text-muted border-b border-dim pb-px hover:text-bright hover:border-muted transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  );
}
