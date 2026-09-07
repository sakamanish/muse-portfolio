import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { whatsappLink, DEFAULT_MESSAGE } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-cream mt-32">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-4xl mb-4">MUSE</h3>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Made for everyday moments. Soft, comfort-first fashion for the
            modern woman.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Explore
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/collections" className="hover:text-clay transition">Collections</Link></li>
            <li><Link to="/about" className="hover:text-clay transition">About MUSE</Link></li>
            <li><Link to="/reviews" className="hover:text-clay transition">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-clay transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Connect
          </p>
          <a
            href="https://www.instagram.com/themusewear.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-clay transition"
          >
            <Instagram className="h-4 w-4" /> @themusewear.in
          </a>
          <a
            href={whatsappLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="block mt-3 text-sm hover:text-clay transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} MUSE — All Rights Reserved
      </div>
    </footer>
  );
}