import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BrowserMockup } from "./BrowserMockup";

export function Work() {
  return (
    <section id="projects" className="max-w-content mx-auto px-[5vw] py-20 border-t border-bg-line">
      <SectionHeading num="02">
        Things I&apos;ve <em className="italic font-normal text-bright">built</em>
      </SectionHeading>

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.num} delay={i * 60}>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-0 bg-bg-card rounded-md border border-bg-line hover:border-dim transition-colors duration-200 overflow-hidden">

              {/* browser mockup */}
              <div className="p-4 border-b md:border-b-0 md:border-r border-bg-line flex items-center">
                <BrowserMockup color={p.color} image={"image" in p ? p.image as string : undefined} images={"images" in p ? p.images as string[] : undefined} />
              </div>

              {/* info */}
              <div className="p-6 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[0.7rem] tracking-widest uppercase text-teal">
                      {p.type}
                    </span>
                    <span className="font-mono text-[2rem] font-medium text-bg-line leading-none select-none hidden sm:block">
                      {p.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.2rem] font-medium text-snow mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[0.95rem] text-bright leading-[1.8] mb-2">
                    {p.desc}
                  </p>
                  <p className="font-mono text-[0.75rem] text-body italic">{p.stat}</p>
                </div>

                {/* actions */}
                <div className="flex gap-3 items-center pt-2 border-t border-bg-line">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="font-mono text-[0.72rem] tracking-[0.08em] uppercase bg-blue-bg text-blue border border-blue/20 px-5 py-2 rounded-[3px] hover:bg-blue hover:text-bg transition-all duration-200"
                  >
                    View details
                  </Link>
                  {"isPrivate" in p && p.isPrivate ? (
                    <span className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-muted flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber" />
                      Private · internal tool
                    </span>
                  ) : (
                    <a
                      href={p.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-muted border-b border-dim pb-px hover:text-bright hover:border-muted transition-all duration-200"
                    >
                      Live site ↗
                    </a>
                  )}
                </div>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
