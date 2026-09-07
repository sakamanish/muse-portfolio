import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — MUSE" },
      { name: "description", content: "What women in Hyderabad are saying about MUSE occasion wear." },
      { property: "og:title", content: "Reviews — MUSE" },
      { property: "og:description", content: "Words from the MUSE circle." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { q: "The yellow kurta set was even more beautiful in person. The embroidery and fit were perfect for my family celebration.", n: "Ananya R.", p: "Hyderabad" },
  { q: "The floral lehenga felt light, comfortable, and so special. I received compliments all evening.", n: "Sanjana P.", p: "Hyderabad" },
  { q: "Ordering over WhatsApp was simple and personal. The MUSE team helped me choose the right size.", n: "Mounika V.", p: "Hyderabad" },
  { q: "The navy printed dress has such a beautiful silhouette. It is now my favourite occasion look.", n: "Ishita R.", p: "Hyderabad" },
  { q: "The print, colour, and finishing are gorgeous. It feels made for Hyderabad celebrations.", n: "Riya S.", p: "Hyderabad" },
  { q: "Beautiful clothes and thoughtful service from start to finish. I will definitely order again.", n: "Keerthi N.", p: "Hyderabad" },
];

function Reviews() {
  return (
    <div className="pt-32 md:pt-40 pb-24">
      <section className="px-6 md:px-16 mb-20 md:mb-28">
        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6">Reviews</p>
        <h1 className="font-serif text-5xl md:text-8xl max-w-4xl leading-[0.98]">
          Loved by women in <em className="italic">Hyderabad</em>.
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