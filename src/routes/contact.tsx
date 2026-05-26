import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";
import { Instagram, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MUSE" },
      { name: "description", content: "Chat with MUSE on WhatsApp, Instagram or email to order or style a look." },
      { property: "og:title", content: "Contact MUSE" },
      { property: "og:description", content: "One message away." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-32 md:pt-40">
      <section className="px-6 md:px-16 max-w-5xl mx-auto text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-6"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif text-5xl md:text-8xl leading-[0.98] text-balance"
        >
          Let's <em className="italic">talk</em>.
        </motion.h1>
        <p className="mt-8 text-base md:text-lg text-cocoa leading-relaxed max-w-xl mx-auto">
          The fastest way to reach us is on WhatsApp — for orders, styling
          questions, custom sizing, or anything else.
        </p>
      </section>

      <section className="px-6 md:px-16 pb-32 max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        <motion.a
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          href={whatsappLink(DEFAULT_MESSAGE)}
          target="_blank" rel="noreferrer"
          className="group bg-ink text-cream p-10 hover:bg-clay transition-colors duration-500"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current mb-6" aria-hidden>
            <path d="M16 .4A15.6 15.6 0 0 0 2.4 23.7L.4 31.6l8-2.1A15.6 15.6 0 1 0 16 .4Zm7.4 18.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2s-1.1 1.3-1.4 1.6c-.3.3-.5.3-.9.1-2.3-1.2-3.9-2.1-5.4-4.7-.4-.7.4-.7 1.2-2.3.1-.3 0-.5 0-.7s-.9-2.2-1.2-3c-.3-.8-.6-.6-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.4-1.5 3.5s1.5 4 1.7 4.3c.2.3 3 4.6 7.3 6.5 2.7 1.1 3.8 1.2 5.1 1 .8-.1 2.4-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5Z"/>
          </svg>
          <p className="text-[10px] uppercase tracking-[0.3em] mb-3 opacity-70">Preferred</p>
          <h3 className="font-serif text-3xl mb-3">WhatsApp</h3>
          <p className="text-sm opacity-80">Chat with us anytime — usually a reply within the hour.</p>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          href="https://instagram.com" target="_blank" rel="noreferrer"
          className="group bg-sand p-10 hover:bg-clay/30 transition-colors duration-500"
        >
          <Instagram className="h-7 w-7 mb-6" />
          <p className="text-[10px] uppercase tracking-[0.3em] mb-3 text-muted-foreground">Daily looks</p>
          <h3 className="font-serif text-3xl mb-3">Instagram</h3>
          <p className="text-sm text-cocoa">@muse.thelabel — new drops, styling, behind the scenes.</p>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          href="mailto:hello@muse.studio"
          className="group bg-sand p-10 hover:bg-clay/30 transition-colors duration-500"
        >
          <Mail className="h-7 w-7 mb-6" />
          <p className="text-[10px] uppercase tracking-[0.3em] mb-3 text-muted-foreground">Slow mail</p>
          <h3 className="font-serif text-3xl mb-3">Email</h3>
          <p className="text-sm text-cocoa">hello@muse.studio — for collaborations & press.</p>
        </motion.a>
      </section>
    </div>
  );
}