import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { loveNotes } from "@/data/loveNotes";

type Floater = { id: number; left: number; top: number; size: number; delay: number };

export function LoveNotes() {
  const hearts = useMemo<Floater[]>(
    () => Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: 5 + Math.random() * 90,
      top: 10 + Math.random() * 75,
      size: 22 + Math.random() * 28,
      delay: Math.random() * 2,
    })),
    []
  );

  const [active, setActive] = useState<number | null>(null);
  const [note, setNote] = useState<string>("");

  const pop = (id: number) => {
    setActive(id);
    setNote(loveNotes[Math.floor(Math.random() * loveNotes.length)]);
  };

  return (
    <section id="love-notes" className="relative py-32 bg-blush/30 overflow-hidden">
      <SectionHeader
        eyebrow="365 Reasons I Love You"
        title="Pick a Heart"
        subtitle="Tap any heart for a little note from me."
      />

      <div className="relative max-w-5xl mx-auto h-[520px] md:h-[560px] mx-6 md:mx-auto">
        {hearts.map((h) => (
          <motion.button
            key={h.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [-5, 5] }}
            transition={{
              scale: { delay: h.delay * 0.1, type: "spring", stiffness: 120, damping: 14 },
              opacity: { delay: h.delay * 0.1, type: "spring", stiffness: 120, damping: 14 },
              y: { duration: 2 + h.delay * 0.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
            style={{ position: "absolute", left: `${h.left}%`, top: `${h.top}%` }}
            onClick={() => pop(h.id)}
            aria-label="Reveal a love note"
            className="text-rose hover:scale-125 transition-transform"
          >
            <motion.div
              animate={active === h.id ? { scale: 1.3 } : { scale: 1 }}
              transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
            >
              <Heart fill="currentColor" style={{ width: h.size, height: h.size }}
                     className={active === h.id ? "drop-shadow-[0_0_18px_rgba(232,160,191,0.9)]" : ""} />
            </motion.div>
          </motion.button>
        ))}

        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={note}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-x-4 md:inset-x-24 bottom-4 paper rounded-2xl p-6 md:p-8 text-center"
            >
              <Sparkles className="h-5 w-5 text-gold mx-auto mb-3" />
              <p className="font-serif italic text-lg md:text-2xl leading-relaxed text-ink/85">{note}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
