import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.2, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="font-serif text-cream text-4xl md:text-6xl tracking-[0.35em]"
          >
            MUSE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}