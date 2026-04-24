import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="04">
        Where I&apos;ve <em className="italic font-normal text-bright">worked</em>
      </SectionHeading>

      <div className="relative flex flex-col">
        {/* vertical timeline line */}
        <div className="absolute left-[90px] top-2 bottom-2 w-px bg-bg-line hidden sm:block" />

        {experience.map((e, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-0 sm:gap-8 py-6 border-b border-bg-line last:border-none relative">
              {/* timeline dot */}
              <div className="absolute left-[84px] top-[1.85rem] w-[13px] h-[13px] rounded-full border-2 border-blue bg-bg hidden sm:block" />

              {/* year */}
              <div className="font-mono text-[0.72rem] text-muted tracking-[0.04em] leading-relaxed pt-[0.15rem] mb-2 sm:mb-0">
                {e.years.replace(" — ", "\n—\n").split("\n").map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </div>

              {/* body */}
              <div>
                <div className="text-[1.05rem] font-medium text-snow mb-[0.1rem]">{e.role}</div>
                <div className="font-mono text-[0.78rem] text-blue tracking-[0.03em] mb-3">{e.company}</div>
                <p className="text-[1rem] text-bright leading-[1.8] mb-3">{e.desc}</p>
                <div className="flex flex-wrap gap-[0.35rem]">
                  {e.chips.map((c) => <Chip key={c} label={c} />)}
                  {e.tealChips.map((c) => <Chip key={c} label={c} teal />)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
