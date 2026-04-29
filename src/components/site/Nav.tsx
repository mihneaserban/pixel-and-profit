import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#proces", label: "Proces" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "py-2.5" : "py-4"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <nav
          className={`flex items-center justify-between rounded-full pl-2 pr-2 sm:pl-3 sm:pr-3 py-2 transition-smooth ${
            scrolled ? "glass shadow-elevated" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white to-[hsl(220_10%_80%)] ring-1 ring-[hsl(220_12%_70%)] shadow-metal overflow-hidden transition-spring group-hover:scale-105">
              <img
                src={logo}
                alt="Pixel & Profit"
                className="h-9 w-9 object-contain"
                style={{ filter: "grayscale(1) contrast(1.05) brightness(0.9)" }}
              />
            </span>
            <span className="font-display font-bold text-[15px] tracking-tight text-foreground hidden sm:inline">
              Pixel <span className="gradient-text">&amp;</span> Profit
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-foreground/75 hover:text-foreground hover:bg-white/60 transition-spring"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-metal-dark rounded-full px-4 py-2 text-sm font-medium bubble-hover"
            >
              Contact
            </a>
            <button
              type="button"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full btn-metal bubble-hover"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-smooth ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[hsl(220_18%_8%/0.55)] backdrop-blur-md"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-20 inset-x-4 glass rounded-3xl p-4 shadow-elevated transition-spring ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-white/70 transition-spring"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block btn-metal-dark text-center rounded-2xl px-4 py-3 text-base font-semibold"
              >
                Contact pe WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
