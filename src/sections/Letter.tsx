import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import paper from "@/assets/paper.jpg";

// ✏️ Replace [Your Name] and edit the letter freely.
const SIGNATURE = "[Kannaya]";

const paragraphs = [
  "My love,",
  "I've started this letter a hundred times in my head. None of the versions felt big enough — because nothing I write could ever be as big as what you are to me.",
  "Thank you. For loving me on the days I was easy to love, and especially on the days I wasn't. For being patient when life wasn't. For showing me, gently and over and over, what it looks like to be brave and kind at the same time.",
  "I love who you are. The way you care about the small things. The way you laugh with your whole face. The way you make a room — and a life — feel like home.",
  "Four years. Four years of inside jokes, slow mornings, late-night talks, road trips, hard seasons we walked through together, small wins we celebrated like they were huge ones. And they were. Because they were ours.",
  "I don't know everything about what's coming next. But I know I want to find out with you. Every chapter. Every messy, beautiful, ordinary, extraordinary one.",
  "If I had the chance to live a thousand lives, I would still find you and choose you in every single one.",
];

export function Letter() {
  return (
    <section id="letter" className="relative py-32 bg-beige/40">
      <SectionHeader
        eyebrow="A Letter From My Heart"
        title="Just for You"
        subtitle="Read slowly. Every word means it."
      />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.article
          initial={{ opacity: 0, y: 40, rotate: -1.2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl p-10 md:p-16 shadow-petal overflow-hidden"
          style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-ivory/40" />
          <div className="relative font-serif text-ink/85 leading-[1.85] text-lg md:text-xl space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, delay: i * 0.35, ease: "easeOut" }}
                className={i === 0 ? "font-script text-4xl md:text-5xl text-rose mb-2" : "italic"}
              >
                {p}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: paragraphs.length * 0.35 }}
              className="pt-6 text-right"
            >
              <p className="font-serif italic text-ink/70">Forever Yours,</p>
              <p className="font-script text-5xl text-gold-gradient mt-2">{SIGNATURE}</p>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
