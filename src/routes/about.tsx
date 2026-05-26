import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import about from "@/assets/about.jpg";
import g1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MUSE" },
      {
        name: "description",
        content:
          "MUSE is a comfort-first fashion label crafting soft, cinematic everyday wear in small batches.",
      },
      { property: "og:title", content: "About MUSE" },
      { property: "og:description", content: "The founder's note on softness as luxury." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="px-6 md:px-16 mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6"
        >
          About
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-8xl max-w-5xl leading-[0.98]"
        >
          A <em className="italic">softer</em> way to get dressed.
        </motion.h1>
      </section>

      <section className="grid md:grid-cols-2 gap-12 md:gap-20 px-6 md:px-16 items-start max-w-7xl mx-auto">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={about}
          alt="MUSE — a quiet moment"
          loading="lazy"
          className="w-full aspect-[4/5] object-cover"
        />
        <div className="space-y-6 text-cocoa md:pt-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Founder's note
          </p>
          <p className="font-serif text-3xl md:text-4xl text-ink italic leading-snug">
            "I started MUSE because I wanted clothes that felt like Sunday
            morning — soft, honest, lived-in."
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            MUSE began in a small studio with a single dress, a borrowed sewing
            machine, and a feeling — that real luxury isn't loud. It's the
            quiet pleasure of putting on something that knows you.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            We work in small batches with natural, breathable fabrics —
            cottons, linens, soft cashmeres — in a palette borrowed from late
            afternoon light. Nothing is rushed. Every cut is considered.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            And because the relationship matters as much as the clothes, we
            keep it personal. Every order begins with a conversation on
            WhatsApp — about your size, your style, the moment you'll wear it
            in.
          </p>
          <p className="font-serif italic text-xl text-ink pt-4">— The MUSE Atelier</p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-28 md:py-40">
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { n: "01", t: "Small batches", d: "Made in limited runs to avoid waste and keep quality high." },
            { n: "02", t: "Natural fibres", d: "Cotton, linen, silk, cashmere — fabrics that breathe and age beautifully." },
            { n: "03", t: "Personal service", d: "Every order is hand-styled with you on WhatsApp." },
          ].map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="border-t border-border pt-8"
            >
              <p className="font-serif text-clay text-3xl mb-4">{p.n}</p>
              <h3 className="font-serif text-2xl mb-3">{p.t}</h3>
              <p className="text-cocoa leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative h-[60svh] overflow-hidden">
        <img src={g1} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/40 flex items-center justify-center p-8">
          <h2 className="font-serif text-cream text-4xl md:text-6xl text-center max-w-3xl italic">
            "Made for everyday moments."
          </h2>
        </div>
      </section>
    </div>
  );
}