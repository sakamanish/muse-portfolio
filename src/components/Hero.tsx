import { motion } from "framer-motion";
import { collectionLooks } from "@/lib/collection-data";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink grain md:flex">
      <motion.img
        src={collectionLooks[0].img}
        alt="MUSE Marigold Chikankari Set with yellow kurta and white embroidered palazzos"
        width={1536}
        height={1920}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[2/3] h-auto w-full object-contain object-center md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:h-full md:w-[43%] md:object-cover"
      />
      <div className="absolute inset-x-0 top-0 aspect-[2/3] bg-gradient-to-b from-ink/10 via-transparent to-ink/50 md:inset-y-0 md:left-0 md:right-[43%] md:aspect-auto md:bg-gradient-to-r md:from-ink/45 md:to-transparent" />

      <div className="relative z-10 flex min-h-[46svh] flex-col justify-center px-6 py-10 md:min-h-screen md:w-[65%] md:justify-end md:px-16 md:pb-28 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-cream/80 text-[10px] uppercase tracking-[0.4em] mb-5 md:text-[11px] md:tracking-[0.5em] md:mb-6"
        >
          MUSE — Festive Edit
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-cream text-[clamp(2.7rem,9vw,9rem)] leading-[0.9] max-w-5xl text-balance"
        >
          Colour for <em className="italic font-light">everyday</em> celebrations.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-6 flex flex-wrap items-center gap-4 md:mt-10"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-clay hover:text-cream transition-all duration-500"
          >
            Explore the Edit
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </Link>
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="text-cream text-[11px] uppercase tracking-[0.3em] border-b border-cream/40 hover:border-cream pb-1 transition"
          >
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="hidden md:block absolute top-1/2 right-6 md:right-10 -translate-y-1/2 rotate-90 text-cream/60 text-[10px] uppercase tracking-[0.5em]"
      >
        Scroll
      </motion.div>
    </section>
  );
}