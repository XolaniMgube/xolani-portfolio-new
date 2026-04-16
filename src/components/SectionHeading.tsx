interface SectionHeadingProps {
  num: string;
  children: React.ReactNode;
}

export function SectionHeading({ num, children }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="font-mono text-[0.65rem] text-blue tracking-[0.12em]">{num}</span>
      <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-medium text-snow tracking-[-0.015em] leading-snug">
        {children}
      </h2>
    </div>
  );
}
