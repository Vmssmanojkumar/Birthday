import { useMemo } from "react";
import { Heart } from "lucide-react";

/** Soft floating hearts background — pure CSS animation, no JS per-frame work. */
export function FloatingHearts({ count = 14, className = "" }: { count?: number; className?: string }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        duration: 14 + Math.random() * 14,
        delay: Math.random() * 12,
        drift: (Math.random() - 0.5) * 160,
        opacity: 0.35 + Math.random() * 0.45,
        key: i,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {hearts.map((h) => (
        <Heart
          key={h.key}
          fill="currentColor"
          className="absolute bottom-[-40px] text-rose animate-float-up"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            // @ts-expect-error CSS var
            "--drift": `${h.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
