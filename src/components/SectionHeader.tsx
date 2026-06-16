import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow, title, subtitle, dark = false,
}: { eyebrow: string; title: ReactNode; subtitle?: ReactNode; dark?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={`font-sans tracking-[0.3em] uppercase text-xs mb-4 ${dark ? "text-gold" : "text-gold"}`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.05 }}
        className={`font-script text-5xl md:text-7xl leading-[1] ${dark ? "text-ivory" : "text-gold-gradient"}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`mt-6 font-serif italic text-lg md:text-xl ${dark ? "text-ivory/75" : "text-ink/70"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
