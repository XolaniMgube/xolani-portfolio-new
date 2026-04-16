interface ChipProps {
  label: string;
  teal?: boolean;
}

export function Chip({ label, teal = false }: ChipProps) {
  return (
    <span
      className={`font-mono text-[0.62rem] tracking-[0.03em] px-[0.6rem] py-[0.2rem] rounded-[3px] border ${
        teal
          ? "bg-teal-bg text-teal border-teal/15"
          : "bg-blue-bg text-blue border-blue/15"
      }`}
    >
      {label}
    </span>
  );
}
