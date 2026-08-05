/** Decorative orbital lines + constellation dots. Purely presentational. */
export const Orbits = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    <svg className="absolute -top-24 -right-24 w-[46rem] h-[46rem] opacity-[0.35]" viewBox="0 0 800 800" fill="none">
      <defs>
        <linearGradient id="orb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(168 100% 42%)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <ellipse cx="400" cy="400" rx="360" ry="150" stroke="url(#orb)" strokeWidth="1" transform="rotate(-18 400 400)" />
      <ellipse cx="400" cy="400" rx="280" ry="280" stroke="url(#orb)" strokeWidth="1" />
      <ellipse cx="400" cy="400" rx="180" ry="330" stroke="url(#orb)" strokeWidth="1" transform="rotate(24 400 400)" />
      <circle cx="700" cy="330" r="5" fill="hsl(168 100% 42%)" />
      <circle cx="150" cy="480" r="4" fill="hsl(217 91% 60%)" />
      <circle cx="520" cy="120" r="3" fill="hsl(199 95% 60%)" />
    </svg>
    <svg className="absolute -bottom-40 -left-32 w-[34rem] h-[34rem] opacity-25" viewBox="0 0 600 600" fill="none">
      <ellipse cx="300" cy="300" rx="290" ry="120" stroke="hsl(217 91% 60%)" strokeWidth="1" transform="rotate(22 300 300)" />
      <ellipse cx="300" cy="300" rx="200" ry="200" stroke="hsl(168 100% 42%)" strokeWidth="1" />
    </svg>
  </div>
);
