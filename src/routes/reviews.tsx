import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — MUSE" },
      { name: "description", content: "What the MUSE circle is saying about our soft, comfort-first pieces." },
      { property: "og:title", content: "Reviews — MUSE" },
      { property: "og:description", content: "Words from the MUSE circle." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { q: "The softest thing I've ever owned. Wearing MUSE feels like a hug from morning light.", n: "Ananya R.", p: "Mumbai" },
  { q: "Every piece feels intentional — the kind of clothing you reach for again and again.", n: "Sophia L.", p: "London" },
  { q: "Ordering on WhatsApp felt so personal. It's like having a stylist friend.", n: "Isabel M.", p: "Lisbon" },
  { q: "The cashmere whisper dress is unreal. The drape, the warmth — I live in it.", n: "Maya K.", p: "Delhi" },
  { q: "I've never felt more myself in a garment. MUSE just gets it.", n: "Eloise V.", p: "Paris" },
  { q: "Quiet, beautiful, perfect. Worth every single rupee.", n: "Riya S.", p: "Bangalore" },
];

function Reviews() {
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <section className="px-6 md:px-16 mb-20 md:mb-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6">Reviews</p>
        <h1 className="font-serif text-5xl md:text-8xl max-w-4xl leading-[0.98]">
          Loved by women who <em className="italic">dress for themselves</em>.
        </h1>
      </section>

      <section className="px-6 md:px-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
            className="bg-sand/50 p-10 md:p-12 border border-border"
          >
            <span className="font-serif text-6xl text-clay leading-none">"</span>
            <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug text-ink -mt-4 mb-8">
              {r.q}
            </blockquote>
            <figcaption className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              {r.n} · {r.p}
            </figcaption>
          </motion.figure>
        ))}
      </section>
    </div>
  );
}