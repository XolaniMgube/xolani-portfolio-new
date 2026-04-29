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
          <div className="space-y-5 text-[1rem] text-bright leading-[1.9]">
            <p>I’m Xolani — a frontend developer with 5+ years of experience building production-grade web applications at <span className="text-teal">Telkom</span>. I work at the intersection of engineering and product, Next.js, Springboot, alongside AI tools to move faster and improve accuracy.</p>
            <p>Based in South Africa, I build for mobile-first, low-bandwidth users, focusing on performance, scalability, and delivering clean, reliable digital experiences.</p>
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
