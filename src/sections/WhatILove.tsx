import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { qualities } from "@/data/qualities";

export function WhatILove() {
  return (
    <section id="what-i-love" className="relative py-32 bg-beige/40">
      <SectionHeader
        eyebrow="What I Love About You"
        title="A Few of the Many Reasons"
        subtitle="I could fill a thousand pages. Here are eight to start."
      />
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {qualities.map((q, i) => (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            className="group relative rounded-2xl bg-card p-7 shadow-soft border border-border/60 overflow-hidden"
          >
            <span className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-rose/20 blur-2xl
                             opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <q.icon className="h-7 w-7 text-rose mb-5" />
            <h3 className="font-script text-3xl text-ink mb-2">{q.title}</h3>
            <p className="font-serif italic text-ink/70 leading-relaxed">{q.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
