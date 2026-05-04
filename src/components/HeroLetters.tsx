const LETTERS = [
  { char: "X", right: "12%", top: "12%", size: "5.5rem", op: 0.18, anim: "hf1", dur: "11s", del: "0s"  },
  { char: "N", right: "28%", top: "18%", size: "2.8rem", op: 0.13, anim: "hf1", dur: "16s", del: "-6s" },
  { char: "I", right: "22%", top: "32%", size: "2rem",   op: 0.12, anim: "hf2", dur: "10s", del: "-5s" },
  { char: "G", right: "5%",  top: "34%", size: "2.6rem", op: 0.13, anim: "hf3", dur: "18s", del: "-8s" },
  { char: "M", right: "15%", top: "48%", size: "4.2rem", op: 0.15, anim: "hf2", dur: "14s", del: "-4s" },
  { char: "L", right: "30%", top: "58%", size: "3.5rem", op: 0.15, anim: "hf2", dur: "12s", del: "-1s" },
  { char: "O", right: "8%",  top: "68%", size: "3.2rem", op: 0.16, anim: "hf3", dur: "9s",  del: "-2s" },
];

const MOBILE_LETTERS = [
  { char: "X", right: "3%", top: "12%", size: "3.2rem", op: 0.15, anim: "hf1", dur: "11s", del: "0s"  },
  { char: "M", right: "4%", top: "44%", size: "2.6rem", op: 0.13, anim: "hf2", dur: "14s", del: "-4s" },
  { char: "G", right: "3%", top: "68%", size: "2rem",   op: 0.12, anim: "hf3", dur: "9s",  del: "-2s" },
];

export function HeroLetters() {
  return (
    <div aria-hidden="true">
      {/* mobile — 3 small letters hugging the right edge */}
      <div className="sm:hidden">
        {MOBILE_LETTERS.map(({ char, right, top, size, op, anim, dur, del }) => (
          <span
            key={char + "m"}
            className="hl absolute font-serif text-blue pointer-events-none select-none"
            style={{
              right, top, fontSize: size, opacity: op,
              animationName: anim, animationDuration: dur, animationDelay: del,
              animationIterationCount: "infinite", animationTimingFunction: "ease-in-out",
              animationDirection: "alternate",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* sm+ — full set */}
      <div className="hidden sm:block">
        {LETTERS.map(({ char, right, top, size, op, anim, dur, del }) => (
          <span
            key={char + right}
            className="hl absolute font-serif text-blue pointer-events-none select-none"
            style={{
              right, top, fontSize: size, opacity: op,
              animationName: anim, animationDuration: dur, animationDelay: del,
              animationIterationCount: "infinite", animationTimingFunction: "ease-in-out",
              animationDirection: "alternate",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
