import { facts } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="01">
        A bit about <em className="italic font-normal text-bright">me</em>
      </SectionHeading>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 items-start">
          {/* copy */}
          <div className="space-y-4 text-[1rem] text-bright leading-[1.9]">
            <p>
              I&apos;m Xolani. I got into frontend development because I liked making things — and
              web is one of the few places where you can build something from nothing and have
              someone on the other side of the world use it an hour later. That still doesn&apos;t
              get old.
            </p>
            <p>
              My work sits at the crossover between{" "}
              <strong className="text-bright font-medium">engineering and product thinking</strong>.
              I don&apos;t just implement designs — I ask why the design exists, what it&apos;s
              supposed to do, and whether there&apos;s a smarter way to get there. Sometimes
              that&apos;s annoying. Usually it saves time.
            </p>
            <p>
              I&apos;m based in <span className="text-teal">Johannesburg</span> and I think a lot
              about what good software looks like in the{" "}
              <span className="text-blue">South African context</span> — low-bandwidth users,
              mobile-first everything, the peculiarities of building for a market that&apos;s
              growing fast but infrastructure-constrained. That informs how I build.
            </p>
            <p>
              When I&apos;m not at my desk I&apos;m reading, arguing about football, or working on
              side projects that may or may not ever see the light of day.
            </p>
          </div>

          {/* fact sidebar */}
          <div className="flex flex-col divide-y divide-bg-line">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-[0.15rem] py-[0.9rem] first:pt-0">
                <span className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-muted">
                  {f.label}
                </span>
                <span
                  className="text-[0.95rem]"
                  style={{ color: f.teal ? "var(--color-teal)" : "var(--color-bright)" }}
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
