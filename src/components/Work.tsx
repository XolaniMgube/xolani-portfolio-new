import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="02">
        Things I&apos;ve <em className="italic font-normal text-bright">built</em>
      </SectionHeading>

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.num} delay={i * 60}>
            <a
              href={p.href}
              className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-start px-6 py-7 bg-bg-card rounded-[6px] border border-bg-line hover:border-dim hover:translate-x-1 transition-all duration-200 block"
            >
              <div>
                <div className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-teal mb-1">
                  {p.type}
                </div>
                <div className="font-serif text-[1.05rem] font-medium text-snow mb-3 group-hover:text-blue transition-colors">
                  {p.title}
                  <span className="inline-block text-[0.7rem] text-dim group-hover:text-blue group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform ml-1">
                    ↗
                  </span>
                </div>
                <p className="text-[0.85rem] text-body leading-[1.8] mb-2 max-w-[520px]">
                  {p.desc}
                </p>
                <p className="font-mono text-[0.72rem] text-muted italic mb-4">{p.stat}</p>
                <div className="flex flex-wrap gap-[0.35rem]">
                  {p.chips.map((c) => (
                    <Chip key={c} label={c} />
                  ))}
                  {p.tealChips.map((c) => (
                    <Chip key={c} label={c} teal />
                  ))}
                </div>
              </div>
              <div className="font-mono text-[3rem] font-medium text-bg-line leading-none select-none hidden sm:block">
                {p.num}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
