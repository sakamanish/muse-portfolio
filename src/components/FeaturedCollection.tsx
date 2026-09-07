import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";
import { collectionLooks } from "@/lib/collection-data";

const items = collectionLooks.slice(0, 3).map((look) => ({
  ...look,
  tag: look.category,
  price: "Made to order",
}));

export function FeaturedCollection() {
  return (
    <section className="px-6 md:px-16 py-28 md:py-40">
      <div className="flex items-end justify-between mb-14 md:mb-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            01 — Featured
          </p>
          <h2 className="font-serif text-4xl md:text-6xl max-w-2xl leading-[1.05]">
            The Autumn <em className="italic">Edit</em>
          </h2>
        </div>
        <p className="hidden md:block text-sm text-muted-foreground max-w-xs leading-relaxed">
          Hand-finished Indian silhouettes, joyful prints, and occasion pieces made for the moments in between.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((it, i) => (
          <motion.a
            key={it.name}
            href={whatsappLink(`Hi MUSE, I'm interested in the ${it.name} look.`)}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group block"
          >
            <div className="relative overflow-hidden bg-sand aspect-[2/3]">
              <img
                src={it.img}
                alt={it.name}
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block bg-cream text-ink text-[10px] uppercase tracking-[0.3em] px-4 py-2">
                  Shop on WhatsApp →
                </span>
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  {it.tag}
                </p>
                <h3 className="font-serif text-2xl">{it.name}</h3>
              </div>
              <span className="text-xs text-muted-foreground italic">{it.price}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}