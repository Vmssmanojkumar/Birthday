import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Plane, Mountain, Home, Star } from "lucide-react";
import starsBg from "@/assets/stars-bg.jpg";

const dreams = [
  { icon: Plane,    title: "Places to wander",  body: "Kyoto in spring. A train across Europe. A beach where the phones don't work." },
  { icon: Mountain, title: "Adventures ahead",  body: "Mountains to climb (slowly). Oceans to swim in. Small towns to get lost in." },
  { icon: Home,     title: "A place to call ours", body: "A kitchen that always smells like something. A door we share." },
  { icon: Star,     title: "Growing old, together", body: "Same jokes. Softer voices. Hands still finding each other." },
];

export function Forever() {
  return (
    <section id="forever" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={starsBg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-dusk opacity-80" />
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(circle at 50% 80%, rgba(232,160,191,0.18), transparent 60%)" }} />
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => {
          const left = Math.random() * 100, top = Math.random() * 100;
          const size = 1 + Math.random() * 2;
          const delay = Math.random() * 4;
          return (
            <span key={i} className="absolute rounded-full bg-white animate-shimmer"
                  style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, animationDelay: `${delay}s` }} />
          );
        })}
      </div>

      <div className="relative">
        <SectionHeader
          dark
          eyebrow="Our Forever"
          title="The Sky We're Still Drawing"
          subtitle="A few of the things I imagine when I imagine our future."
        />
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-6">
          {dreams.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-7"
            >
              <d.icon className="h-6 w-6 text-gold mb-4" />
              <h3 className="font-script text-3xl text-ivory mb-2">{d.title}</h3>
              <p className="font-serif italic text-ivory/75 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
