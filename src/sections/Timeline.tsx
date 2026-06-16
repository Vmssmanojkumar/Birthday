import { motion } from "framer-motion";

import { milestones } from "@/data/milestones";
import { Heart } from "lucide-react";

export function Timeline() {
  return (
    <section id="timeline" className="relative py-32 bg-romantic overflow-hidden">


      <div className="relative max-w-3xl mx-auto px-6">
        {/* Center line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

        <ul className="space-y-16">
          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`relative pl-14 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} [direction:ltr]`}>
                  <span className="absolute left-2 md:left-auto md:right-[-10px] top-1 h-5 w-5 rounded-full
                                   bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--rose)] shadow-soft
                                   flex items-center justify-center"
                        style={ left ? undefined : { right: "auto", left: "-10px" } }>
                    <Heart className="h-2.5 w-2.5 text-white" fill="currentColor" />
                  </span>
                  <p className="font-sans uppercase tracking-[0.25em] text-[10px] text-gold mb-2">{m.date}</p>
                  <h3 className="font-script text-4xl text-ink mb-2">{m.title}</h3>
                  <p className="font-serif italic text-ink/70 leading-relaxed">{m.description}</p>
                </div>
                <div className="[direction:ltr] pl-14 md:pl-0 mt-4 md:mt-0">
                  {m.image && (
                    <img src={m.image} alt={m.title} loading="lazy"
                         className="rounded-2xl shadow-soft w-full object-cover aspect-[4/3]" />
                  )}
                  {m.video && (
                    <video src={m.video} controls playsInline preload="metadata"
                           className="rounded-2xl shadow-soft w-full" />
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
