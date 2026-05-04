import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chip } from "@/components/Chip";
import { BrowserMockup } from "@/components/BrowserMockup";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Xolani Mgube`,
    description: project.desc,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const isPrivate = "isPrivate" in project && project.isPrivate;
  const images = "images" in project ? project.images as string[] : undefined;
  const image = "image" in project ? project.image as string : undefined;

  return (
    <>
      <Navbar />
      <main className="max-w-content mx-auto px-[5vw] pt-32 pb-24">

        {/* back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-widest uppercase text-muted hover:text-bright transition-colors mb-10"
        >
          <span>←</span> All projects
        </Link>

        {/* header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[0.7rem] tracking-widest uppercase text-teal">
                {project.type}
              </span>
              {isPrivate && (
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest uppercase text-muted bg-bg-card border border-bg-line px-2 py-0.5 rounded-[3px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block" />
                  Private · internal tool
                </span>
              )}
            </div>
            <h1
              className="font-serif font-medium text-snow leading-[1.1] tracking-[-0.02em] mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {project.title}
            </h1>
            <p className="font-mono text-[0.8rem] text-body italic">{project.stat}</p>
          </div>
        </div>

        {/* browser mockup / carousel */}
        <div className="mb-12">
          <BrowserMockup color={project.color} image={image} images={images} tall />
        </div>

        {/* body grid */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-start">

          {/* long description + features */}
          <div>
            <p className="text-[1rem] text-bright leading-[1.9] mb-10">
              {project.longDesc}
            </p>

            <h2 className="font-mono text-[0.7rem] tracking-widest uppercase text-muted mb-4">
              What was built
            </h2>
            <ul className="flex flex-col gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-[0.95rem] text-bright leading-[1.7]">
                  <span className="text-teal mt-[0.35rem] shrink-0 text-[0.6rem]">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* sidebar */}
          <div className="flex flex-col gap-8">

            {/* tech stack */}
            <div>
              <h2 className="font-mono text-[0.7rem] tracking-widest uppercase text-muted mb-3">
                Tech stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.chips.map((c) => <Chip key={c} label={c} />)}
                {project.tealChips.map((c) => <Chip key={c} label={c} teal />)}
              </div>
            </div>

            {/* actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-bg-line">
              {isPrivate ? (
                <div className="w-full text-center font-mono text-[0.72rem] tracking-widest uppercase text-muted bg-bg-card border border-bg-line px-6 py-3 rounded-[3px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber inline-block mr-2 mb-px" />
                  Private — not publicly accessible
                </div>
              ) : (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-blue text-bg font-mono text-[0.72rem] tracking-widest uppercase px-6 py-3 rounded-[3px] font-medium hover:opacity-85 hover:-translate-y-px transition-all duration-200"
                >
                  View live project ↗
                </a>
              )}
              <Link
                href="/#projects"
                className="w-full text-center font-mono text-[0.72rem] tracking-widest uppercase text-muted border border-bg-line px-6 py-3 rounded-[3px] hover:border-dim hover:text-bright transition-all duration-200"
              >
                ← Back to projects
              </Link>
            </div>

          </div>
        </div>

        {/* more projects */}
        {(() => {
          const others = projects.filter((p) => p.slug !== slug).slice(0, 3);
          return (
            <div className="mt-20 pt-12 border-t border-bg-line">
              <p className="font-mono text-[0.7rem] tracking-widest uppercase text-muted mb-6">
                More projects
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {others.map((p) => {
                  const pImage = "image" in p ? p.image as string : undefined;
                  const pImages = "images" in p ? p.images as string[] : undefined;
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="group flex flex-col gap-3 bg-bg-card border border-bg-line rounded-md p-4 hover:border-dim transition-colors duration-200"
                    >
                      <BrowserMockup color={p.color} image={pImage} images={pImages} />
                      <div>
                        <p className="font-mono text-[0.65rem] tracking-widest uppercase text-teal mb-1">
                          {p.type}
                        </p>
                        <p className="font-serif text-[0.95rem] font-medium text-snow group-hover:text-blue transition-colors">
                          {p.title} <span className="text-muted text-[0.8rem]">↗</span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })()}

      </main>
      <Footer />
    </>
  );
}
