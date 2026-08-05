import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative select-none overflow-hidden rounded-3xl border border-border/70 bg-muted shadow-soft aspect-[4/5]"
      onPointerMove={(e) => e.buttons === 1 && move(e.clientX)}
      onPointerDown={(e) => move(e.clientX)}
    >
      <img src={afterImg} alt="Client body composition after coaching" width={800} height={1024} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={beforeImg} alt="Client body composition before coaching" width={800} height={1024} loading="lazy" className="w-full h-full object-cover" />
      </div>

      <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full glass">Before</span>
      <span className="absolute top-4 right-4 text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full glass">After</span>

      <div className="absolute inset-y-0 w-px bg-white/90 shadow-glow" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full glass grid place-items-center shadow-lift">
          <MoveHorizontal className="w-4 h-4 text-primary" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Reveal before and after"
        className="absolute inset-x-0 bottom-0 w-full opacity-0 h-12 cursor-ew-resize"
      />
    </div>
  );
};
