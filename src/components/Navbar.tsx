import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-[0.35em] text-ink">
          MUSE
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.28em] text-ink/70 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          className="md:hidden text-ink"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-cream animate-fade-in">
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-serif text-2xl tracking-[0.35em]">MUSE</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 mt-16">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}