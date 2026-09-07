import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import { collectionLooks } from "@/lib/collection-data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — MUSE" },
      {
        name: "description",
        content:
          "Browse the MUSE collection of printed dresses, embroidered sets, and occasion-ready Indian silhouettes.",
      },
      { property: "og:title", content: "Collections — MUSE" },
      { property: "og:description", content: "Soft, cinematic everyday wear." },
    ],
  }),
  component: Collections,
});

const looks = collectionLooks;

function Collections() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="px-6 md:px-16 mb-20 md:mb-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6"
        >
          The Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-8xl max-w-4xl leading-[0.98]"
        >
          Pieces made to <em className="italic">linger</em>.
        </motion.h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-cocoa leading-relaxed">
          A vivid wardrobe of printed dresses and embroidered occasion pieces — designed to be worn, remembered, and loved for years.
        </p>
      </section>

      <section className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {looks.map((l, i) => (
            <motion.a
              key={l.name}
              href={whatsappLink(`Hi MUSE, I'm interested in the ${l.name}.`)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.1 }}
              className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden aspect-[2/3] bg-sand">
                <img
                  src={l.img}
                  alt={l.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-700" />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                    {l.category}
                  </p>
                  <h2 className="font-serif text-3xl">{l.name}</h2>
                </div>
                <span className="text-[11px] uppercase tracking-[0.3em] border-b border-ink/30 pb-1 group-hover:border-ink transition">
                  Enquire →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}