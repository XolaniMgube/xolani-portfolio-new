import { contact } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="05">
        Let&apos;s <em className="italic font-normal text-bright">talk</em>
      </SectionHeading>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16 items-start">
          {/* form */}
          <div>
            <p className="text-[1rem] text-bright leading-[1.85] mb-8">
              Whether you have a project in mind, a role that might be a fit, or just want to ask
              something — my inbox is open. I reply to everything, usually within a day.
            </p>
            <ContactForm />
          </div>

          {/* contact details sidebar */}
          <div className="flex flex-col gap-5 pt-1">
            <p className="text-[0.9rem] text-body leading-relaxed">
              I&apos;m currently available for{" "}
              <span className="text-bright">freelance work</span>,{" "}
              <span className="text-bright">consulting</span>, and{" "}
              <span className="text-bright">full-time roles</span>.
            </p>

            <div className="flex flex-col gap-3 pt-2 border-t border-bg-line">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[0.7rem] tracking-widest uppercase text-muted">Email</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[0.95rem] text-bright hover:text-blue transition-colors duration-200"
                >
                  {contact.email}
                </a>
              </div>
              {contact.links.map((l) => (
                <div key={l.label} className="flex flex-col gap-1">
                  <span className="font-mono text-[0.7rem] tracking-widest uppercase text-muted">
                    {l.label}
                  </span>
                  {l.href ? (
                    <a href={l.href} className="text-[0.95rem] text-bright hover:text-blue transition-colors duration-200">
                      {l.display}
                    </a>
                  ) : (
                    <span className="text-[0.95rem] text-bright">{l.display}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
