import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FloatingHearts } from "@/components/FloatingHearts";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-ivory/40 to-ivory" />
        <div className="absolute inset-0 mix-blend-soft-light"
             style={{ background: "radial-gradient(circle at 30% 30%, var(--rose), transparent 50%)" }} />
      </div>

      <FloatingHearts count={18} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
          className="font-sans tracking-[0.3em] text-xs md:text-sm text-gold uppercase mb-6"
        >
          To the love of my life
        </motion.p>

        <motion.h1
          initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          className="font-script text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-gold-gradient mb-8"
        >
          Happy Birthday,
          <br />
          My Love <span className="inline-block">❤️</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 1.3 }}
          className="font-serif text-lg md:text-2xl italic text-ink/75 max-w-2xl mx-auto leading-relaxed"
        >
          Four years ago, I met someone who quietly became my entire world.
          Thank you for every smile, every adventure, every lesson,
          and every moment of love we've shared.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <a
            href="#chapter-one"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans text-sm tracking-wider uppercase
                       bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--rose)] text-white shadow-soft
                       hover:shadow-petal hover:scale-[1.03] transition-all duration-500"
          >
            Begin Our Story
            <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
