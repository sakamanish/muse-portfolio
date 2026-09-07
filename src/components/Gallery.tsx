import { motion } from "framer-motion";
import { collectionLooks } from "@/lib/collection-data";

const tiles = [
  { ...collectionLooks[1], label: "Garden Bloom Lehenga" },
  { ...collectionLooks[4], label: "Rosewood Fit & Flare" },
  { ...collectionLooks[0], label: "Marigold Chikankari Set" },
  { ...collectionLooks[2], label: "Indigo Lace-Up Dress" },
  { ...collectionLooks[3], label: "Indigo V-Neck Dress" },
  { ...collectionLooks[1], label: "Floral Lehenga Detail" },
];

export function Gallery() {
  return (
    <section className="px-6 md:px-16 py-28 md:py-40">
      <div className="flex items-end justify-between mb-14 md:mb-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            03 — Moodboard
          </p>
          <h2 className="font-serif text-4xl md:text-6xl">
            From the <em className="italic">feed</em>.
          </h2>
        </div>
        <a
          href="https://www.instagram.com/themusewear.in/"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.3em] border-b border-ink pb-1 hover:text-clay hover:border-clay"
        >
          Follow @themusewear.in
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {tiles.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
            className="group relative aspect-[2/3] overflow-hidden bg-sand"
          >
            <img
              src={t.img}
              alt={t.label}
              loading="lazy"
              className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            <figcaption className="absolute bottom-3 left-3 right-3 text-cream text-[9px] uppercase tracking-[0.18em] opacity-100 md:left-4 md:text-[10px] md:tracking-[0.3em] md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              {t.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}