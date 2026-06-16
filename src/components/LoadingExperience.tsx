import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

const lines = [
  "Before you continue…",
  "Thank you for being the most beautiful part of my story.",
  "Happy Birthday, My Love ❤️",
];

export function LoadingExperience({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  // Stable ref so the effect never re-fires due to a new onDone reference
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    if (step >= lines.length) {
      const t = setTimeout(() => onDoneRef.current(), 900);
      return () => clearTimeout(t);
    }
    const delay = step === 0 ? 1600 : 2200;
    const t = setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [step]); // ← only depends on step, not onDone

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-romantic"
      aria-label="Loading"
    >
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light"
           style={{ backgroundImage: "radial-gradient(circle at 30% 30%, var(--rose), transparent 50%), radial-gradient(circle at 70% 70%, var(--gold), transparent 55%)" }} />
      <div className="relative text-center px-6">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-10 inline-flex"
        >
          <Heart className="h-10 w-10 text-rose animate-shimmer" fill="currentColor" />
        </motion.div>
        <div className="min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {step < lines.length && (
              <motion.p
                key={step}
                initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={
                  step === lines.length - 1
                    ? "font-script text-5xl md:text-7xl text-gold-gradient"
                    : "font-serif text-2xl md:text-3xl text-ink/80 italic max-w-2xl"
                }
              >
                {lines[step]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
