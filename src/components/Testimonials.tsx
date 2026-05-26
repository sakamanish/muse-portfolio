import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "The softest thing I've ever owned. Wearing MUSE feels like a hug from morning light.",
    name: "Ananya R.",
    place: "Mumbai",
  },
  {
    quote:
      "Every piece feels intentional — the kind of clothing you reach for again and again.",
    name: "Sophia L.",
    place: "London",
  },
  {
    quote:
      "Ordering on WhatsApp felt so personal. It's like having a stylist friend.",
    name: "Isabel M.",
    place: "Lisbon",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink text-cream px-6 md:px-16 py-28 md:py-40 grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.4em] text-cream/60 mb-4">
          04 — Loved by
        </p>
        <h2 className="font-serif text-4xl md:text-6xl mb-16 max-w-3xl">
          Words from the <em className="italic">MUSE</em> circle.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="border-t border-cream/20 pt-8"
            >
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug italic text-cream/95 mb-8">
                "{r.quote}"
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-[0.3em] text-cream/60">
                {r.name} · {r.place}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}