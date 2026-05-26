import { motion } from "framer-motion";
import about from "@/assets/about.jpg";
import { Link } from "@tanstack/react-router";

export function AboutSection() {
  return (
    <section className="bg-sand/60 px-6 md:px-16 py-28 md:py-40">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img
            src={about}
            alt="MUSE — a quiet moment in cashmere"
            width={1280}
            height={1536}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6">
            02 — Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
            Softness, as a <em className="italic">quiet</em> kind of luxury.
          </h2>
          <p className="text-base md:text-lg text-cocoa leading-relaxed max-w-lg mb-6">
            MUSE was born from a slow morning — the kind where light spills
            through linen curtains and time forgets to rush. We design for the
            woman who dresses for herself first.
          </p>
          <p className="text-base md:text-lg text-cocoa leading-relaxed max-w-lg mb-10">
            Every piece is made in small batches, in natural fibres, with the
            intention of becoming a favourite — and staying that way.
          </p>
          <Link
            to="/about"
            className="inline-block text-[11px] uppercase tracking-[0.3em] border-b border-ink pb-1 hover:text-clay hover:border-clay transition"
          >
            Read the founder's note
          </Link>
        </motion.div>
      </div>
    </section>
  );
}