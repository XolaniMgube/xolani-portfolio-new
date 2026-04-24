import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Chip } from "./Chip";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="03">
        What I <em className="italic font-normal text-bright">work with</em>
      </SectionHeading>

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="p-6 bg-bg-card border border-bg-line rounded-[6px]"
            >
              <div className="flex items-center gap-[0.6rem] mb-4">
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ background: g.teal ? "var(--color-teal)" : "var(--color-blue)" }}
                />
                <span className="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-body">
                  {g.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-[0.35rem]">
                {g.chips.map((c) => (
                  <Chip key={c} label={c} teal={g.teal} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
