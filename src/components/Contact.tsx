import { contact } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { CopyButton } from "./CopyButton";

export function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="05">
        Let&apos;s <em className="italic font-normal text-bright">talk</em>
      </SectionHeading>

      {/* mobile-only CV button — shown before the form so it's not missed */}
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden mb-8 flex items-center justify-center gap-2 w-full bg-blue text-bg font-mono text-[0.75rem] tracking-widest uppercase font-medium px-6 py-3.5 rounded-[3px] hover:opacity-85 transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Download CV
      </a>

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
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[0.95rem] text-bright hover:text-blue transition-colors duration-200"
                  >
                    {contact.email}
                  </a>
                  <CopyButton text={contact.email} />
                </div>
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

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 hidden md:flex items-center justify-center gap-2 w-full bg-blue text-bg font-mono text-[0.75rem] tracking-widest uppercase font-medium px-6 py-3.5 rounded-[3px] hover:opacity-85 hover:-translate-y-px transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
