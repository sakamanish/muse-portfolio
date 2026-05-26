import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import c1 from "@/assets/collection-1.jpg";
import c3 from "@/assets/collection-3.jpg";

const tiles = [
  { img: g2, h: "row-span-2", label: "Hallway, golden hour" },
  { img: g1, h: "row-span-1", label: "Linen, in hand" },
  { img: c1, h: "row-span-2", label: "Cashmere whisper" },
  { img: g3, h: "row-span-1", label: "Folded warmth" },
  { img: g4, h: "row-span-2", label: "Cocoa tailoring" },
  { img: c3, h: "row-span-1", label: "Sand coords" },
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
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.3em] border-b border-ink pb-1 hover:text-clay hover:border-clay"
        >
          Follow @muse.thelabel
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[180px] md:auto-rows-[260px]">
        {tiles.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
            className={`group relative overflow-hidden ${t.h}`}
          >
            <img
              src={t.img}
              alt={t.label}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <figcaption className="absolute bottom-3 left-4 text-cream text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {t.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}