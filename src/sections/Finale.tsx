import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FloatingHearts } from "@/components/FloatingHearts";

export function Finale() {
  const [revealed, setRevealed] = useState(false);

  const petals = useMemo(
    () => Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 14,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 200,
      hue: Math.random() > 0.5 ? "var(--rose)" : "var(--gold)",
    })),
    []
  );

  return (
    <section id="finale" className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-romantic">
      {/* Falling petals */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {petals.map((p) => (
          <span
            key={p.id}
            className="absolute top-[-5vh] block rounded-full animate-petal"
            style={{
              left: `${p.left}%`,
              width: p.size, height: p.size * 0.6,
              background: `radial-gradient(circle, ${p.hue}, transparent 70%)`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              // @ts-expect-error css var
              "--drift": `${p.drift}px`,
            }}
          />
        ))}
      </div>
      <FloatingHearts count={20} />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-script text-6xl md:text-8xl text-gold-gradient leading-[1]"
        >
          Happy Birthday,
          <br />Kannamma ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-8 font-serif italic text-lg md:text-2xl text-ink/75 leading-relaxed"
        >
          Thank you for making these four years the most beautiful chapter of my life.
          <br className="hidden md:block" />
          Here's to every chapter we haven't written yet.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={() => setRevealed(true)}
          className="group mt-12 inline-flex items-center gap-3 rounded-full px-9 py-4 font-sans text-sm tracking-wider uppercase
                     bg-gradient-to-br from-[color:var(--rose)] to-[color:var(--gold)] text-white shadow-petal
                     hover:scale-[1.04] transition-all duration-500"
        >
          <Heart className="h-4 w-4 group-hover:scale-125 transition" fill="currentColor" />
          I Love You, Today and Always
        </motion.button>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="mt-14 paper rounded-2xl p-10 md:p-12"
            >
              <p className="font-script text-3xl md:text-5xl text-rose leading-tight">
                Will you continue writing this beautiful story with me?
              </p>
              <p className="mt-6 font-serif italic text-ink/70">
                {/* ✏️ Replace the favorite photo path below */}
                {/* (Put the file at public/media/photos/favorite.jpg) */}
              </p>
              <div className="mt-8 mx-auto max-w-md aspect-[4/5] rounded-xl overflow-hidden shadow-soft bg-beige/60 flex items-center justify-center">
                <img
                  src="/media/photos/favorite.jpg"
                  alt="Our favorite"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
