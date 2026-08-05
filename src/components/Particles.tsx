import { useMemo } from "react";

export const Particles = ({ count = 40 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 18,
        gold: Math.random() > 0.65,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.gold ? "hsl(42 90% 65%)" : "hsl(158 80% 60%)",
            boxShadow: p.gold
              ? "0 0 8px hsl(42 90% 65% / 0.8)"
              : "0 0 8px hsl(158 80% 60% / 0.8)",
            animation: `particle ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-110vh) translateX(40px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
