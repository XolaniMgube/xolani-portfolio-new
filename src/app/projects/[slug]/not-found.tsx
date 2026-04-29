import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <Navbar />
      <main className="max-w-content mx-auto px-[5vw] min-h-screen flex flex-col justify-center pb-24">
        <p className="font-mono text-[0.72rem] tracking-widest uppercase text-blue mb-4">404</p>
        <h1 className="font-serif font-medium text-snow leading-[1.1] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Project not found.
        </h1>
        <p className="text-[1rem] text-bright leading-[1.8] max-w-[42ch] mb-10">
          That project doesn&apos;t exist or may have moved. Head back to see everything I&apos;ve built.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-widest uppercase bg-blue text-bg px-6 py-3 rounded-[3px] w-fit hover:opacity-85 transition-opacity"
        >
          ← All projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
