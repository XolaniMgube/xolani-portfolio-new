import { Reveal } from "./Reveal";
import { HeroLetters } from "./HeroLetters";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full">
      <HeroLetters />
      <div className="flex flex-col justify-center px-[5vw] pt-32 pb-24 max-w-content min-h-screen">
      <Reveal>
        {/* pre-line */}
        <div className="flex items-center gap-3 font-mono text-[0.85rem] text-blue tracking-[0.06em] mb-5">
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
          5+ years of building scalable software and web systems with real-world impact.
        </p>
        <div className="flex gap-x-7 gap-y-2 flex-wrap mb-12 font-mono text-[0.72rem] tracking-widest uppercase">
          <span className="text-muted">Founder of <Link href={"https://luminacube.co.za"} className="text-teal border-b border-teal/30 pb-px hover:border-teal hover:text-teal/80 transition-all duration-200">Lumina Cube Consulting</Link></span>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#projects"
            className="bg-blue text-bg font-mono text-[0.80rem] tracking-[0.08em] uppercase px-7 py-3 rounded-[3px] font-medium hover:opacity-85 hover:-translate-y-px transition-all duration-200"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="ml-4 font-mono text-[0.80rem] tracking-[0.08em] uppercase text-blue border-b border-blue pb-px hover:text-bright hover:border-muted transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
      </div>
    </section>
  );
}
