import { useEffect, useState } from "react";

const target = new Date();
target.setDate(target.getDate() + 21);

const calc = () => {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
};

export const Countdown = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Minutes", value: t.m },
    { label: "Seconds", value: t.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 w-full md:w-auto md:flex md:items-center">
      {items.map((i) => (
        <div
          key={i.label}
          className="glass rounded-xl md:rounded-2xl px-1.5 py-3 md:px-6 md:py-5 md:min-w-[110px] text-center min-w-0"
        >
          <div className="font-display text-2xl md:text-5xl font-light gradient-gold-text tabular-nums">
            {String(i.value).padStart(2, "0")}
          </div>
          <div className="text-[9px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.25em] text-muted-foreground mt-1">
            {i.label}
          </div>
        </div>
      ))}
    </div>
  );

};
