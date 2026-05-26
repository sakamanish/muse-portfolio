import { motion } from "framer-motion";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export function WhatsAppCTA() {
  return (
    <section className="px-6 md:px-16 py-28 md:py-40 bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6">
          05 — Order
        </p>
        <h2 className="font-serif text-5xl md:text-8xl leading-[0.98] mb-10 text-balance">
          One message away from <em className="italic">yours</em>.
        </h2>
        <p className="text-base md:text-lg text-cocoa max-w-xl mx-auto mb-12 leading-relaxed">
          No carts, no checkouts. Tell us what caught your eye — we'll guide you
          through sizing, fabric and delivery on WhatsApp.
        </p>
        <a
          href={whatsappLink(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-4 bg-ink text-cream px-10 py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-clay transition-all duration-500"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M16 .4A15.6 15.6 0 0 0 2.4 23.7L.4 31.6l8-2.1A15.6 15.6 0 1 0 16 .4Zm0 28.5a12.8 12.8 0 0 1-6.5-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.9 12.9 0 1 1 16 28.9Zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2s-1.1 1.3-1.4 1.6c-.3.3-.5.3-.9.1-2.3-1.2-3.9-2.1-5.4-4.7-.4-.7.4-.7 1.2-2.3.1-.3 0-.5 0-.7s-.9-2.2-1.2-3c-.3-.8-.6-.6-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.4-1.5 3.5s1.5 4 1.7 4.3c.2.3 3 4.6 7.3 6.5 2.7 1.1 3.8 1.2 5.1 1 .8-.1 2.4-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5Z" />
          </svg>
          Order via WhatsApp
          <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </a>
      </motion.div>
    </section>
  );
}