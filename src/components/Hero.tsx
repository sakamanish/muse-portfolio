import { motion } from "framer-motion";
import hero from "@/assets/hero.jpg";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden grain">
      <motion.img
        src={hero}
        alt="MUSE editorial — woman in cream linen in golden hour"
        width={1536}
        height={1920}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/60" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-cream/80 text-[11px] uppercase tracking-[0.5em] mb-6"
        >
          MUSE — Autumn / Winter Edit
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-cream text-5xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl text-balance"
        >
          Made for <em className="italic font-light">everyday</em> moments.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
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
        className="absolute top-1/2 right-6 md:right-10 -translate-y-1/2 rotate-90 text-cream/60 text-[10px] uppercase tracking-[0.5em]"
      >
        Scroll
      </motion.div>
    </section>
  );
}