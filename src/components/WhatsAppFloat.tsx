import { motion } from "framer-motion";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-whatsapp text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] flex items-center justify-center"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.328.27-1.218-.044-1.518-.227-.215-1.59-1.064-1.918-1.064zM18.83 23.95c-1.346-.087-3.058-.804-4.272-1.522-1.815-1.073-3.282-2.575-4.385-4.32C8.832 16.014 8.5 14.158 8.5 12.255c0-2.49 1.043-4.755 3.082-6.297C12.95 5.05 14.86 4.5 16.745 4.5c.115 0 .23.014.343.014 1.79.044 3.51.673 4.94 1.59 1.673 1.087 2.974 2.62 3.546 4.522.93 3.097-.302 6.51-2.806 8.567-1.075.888-2.378 1.604-3.794 1.99l1.918-3.84-1.748-3.69H21.5c.043 1.776-.358 3.97-1.46 5.79z" />
      </svg>
    </motion.a>
  );
}