import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#servicii", label: "Servicii" },
  { href: "#proces", label: "Proces" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#misiune", label: "Misiune" },
  { href: "#faq", label: "FAQ" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoZoom, setLogoZoom] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);

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
          className={`flex items-center justify-between rounded-full pl-3 pr-3 sm:pl-4 sm:pr-4 py-2.5 transition-smooth ${
            scrolled ? "glass shadow-elevated" : "glass"
          }`}
        >
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLogoZoom(true)}
              aria-label="Vezi logo-ul mărit"
              className="group h-14 w-14 rounded-full overflow-hidden cursor-zoom-in transition-spring hover:scale-105 drop-shadow-[0_4px_12px_hsl(220_18%_12%/0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <img
                src={logo}
                alt="Pixel & Profit"
                className="block h-full w-full object-cover scale-[1.18]"
              />
            </button>
            <a href="#top" className="font-display font-bold text-[16px] tracking-tight text-foreground hidden sm:inline hover:opacity-80 transition-smooth">
              Pixel <span className="gradient-text">&amp;</span> Profit
            </a>
          </div>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
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
            <li
              className="relative"
              onMouseEnter={() => setSocialsOpen(true)}
              onMouseLeave={() => setSocialsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSocialsOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={socialsOpen}
                className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-foreground/75 hover:text-foreground hover:bg-white/60 transition-spring"
              >
                Socials
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${socialsOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute right-0 top-full pt-2 transition-spring ${
                  socialsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="glass shadow-elevated rounded-2xl p-2 flex items-center gap-1">
                  <a
                    href="https://www.instagram.com/pixelnprofit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full btn-metal bubble-hover"
                  >
                    <Instagram className="h-4.5 w-4.5" />
                  </a>
                  <button
                    type="button"
                    aria-label="TikTok (în curând)"
                    title="În curând"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full btn-metal opacity-50 cursor-not-allowed"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.16a3 3 0 1 0 2 2.83V3h3z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Facebook (în curând)"
                    title="În curând"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full btn-metal opacity-50 cursor-not-allowed"
                  >
                    <Facebook className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
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
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full btn-metal bubble-hover"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-smooth ${
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

      {/* Logo zoom modal */}
      {logoZoom && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-up"
          onClick={() => setLogoZoom(false)}
          role="dialog"
          aria-label="Logo Pixel & Profit"
        >
          <div className="absolute inset-0 bg-[hsl(220_18%_8%/0.75)] backdrop-blur-md" />
          
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[80vmin] w-[80vmin] max-h-[80vh] max-w-[80vw] rounded-full overflow-hidden drop-shadow-[0_30px_80px_hsl(220_18%_6%/0.6)] animate-scale-in"
          >
            <img
              src={logo}
              alt="Pixel & Profit"
              className="block h-full w-full object-cover scale-[1.18]"
            />
          </div>
        </div>
      )}
    </header>
  );
};
