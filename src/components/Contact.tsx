import { contact } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="05">
        Let&apos;s <em className="italic font-normal text-bright">talk</em>
      </SectionHeading>

      <Reveal>
        <div className="max-w-[560px]">
          <p className="text-[0.9rem] text-body leading-[1.85] mb-10">
            Whether you have a project in mind, a role that might be a fit, or just want to ask
            something — my inbox is open. I reply to everything, usually within a day.
            <br />
            <br />
            I&apos;m currently available for{" "}
            <strong className="text-bright font-medium">freelance work</strong>,{" "}
            <strong className="text-bright font-medium">consulting</strong>, and{" "}
            <strong className="text-bright font-medium">full-time roles</strong>.
          </p>

          <div className="flex flex-col gap-3 mb-10">
            <div className="grid grid-cols-[90px_1fr] gap-4 items-center text-[0.85rem]">
              <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-dim">Email</span>
              <a
                href={`mailto:${contact.email}`}
                className="text-body hover:text-blue transition-colors duration-200"
              >
                {contact.email}
              </a>
            </div>
            {contact.links.map((l) => (
              <div key={l.label} className="grid grid-cols-[90px_1fr] gap-4 items-center text-[0.85rem]">
                <span className="font-mono text-[0.62rem] tracking-[0.1em] uppercase text-dim">
                  {l.label}
                </span>
                {l.href ? (
                  <a href={l.href} className="text-body hover:text-blue transition-colors duration-200">
                    {l.display}
                  </a>
                ) : (
                  <span className="text-body">{l.display}</span>
                )}
              </div>
            ))}
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="inline-block font-mono text-[0.78rem] tracking-[0.08em] text-bg bg-blue px-8 py-3 rounded-[3px] font-medium hover:opacity-85 hover:-translate-y-px transition-all duration-200"
          >
            Say hello →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
