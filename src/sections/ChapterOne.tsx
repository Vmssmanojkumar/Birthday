import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

export function ChapterOne() {
  return (
    <section id="chapter-one" className="relative py-32 bg-romantic">
      <SectionHeader
        eyebrow="Chapter One"
        title="The Beginning"
        subtitle="Among billions of people, fate somehow led me to you — and my life has never been the same."
      />
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {[
          {
            tag: "The first moment",
            text: "I didn't know it then, but the room got a little quieter and the world a little brighter. You looked up — and that was it.",
          },
          {
            tag: "The first conversation",
            text: "We talked until our coffees went cold. I went home different than I came. I just didn't have the word for it yet.",
          },
          {
            tag: "The first promise (quiet, to myself)",
            text: "Whatever this is, don't be careless with it. Whoever she is, be the person she deserves.",
          },
          {
            tag: "The first photograph",
            text: "Squinting into the sun, laughing about nothing. The beginning of a thousand more.",
          },
        ].map((card, i) => (
          <motion.article
            key={card.tag}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="paper rounded-2xl p-8 md:p-10"
          >
            <p className="font-sans tracking-[0.25em] uppercase text-[10px] text-gold mb-3">{card.tag}</p>
            <p className="font-serif italic text-lg md:text-xl leading-relaxed text-ink/80">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
