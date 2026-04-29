import { useEffect, useState } from "react";
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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-6xl px-5 transition-smooth ${scrolled ? "" : ""}`}>
        <nav className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-smooth ${scrolled ? "glass shadow-elevated" : "bg-transparent"}`}>
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="Pixel & Profit" className="h-9 w-9 object-contain" />
            <span className="font-display font-bold text-base tracking-tight text-white hidden sm:inline">
              Pixel <span className="gradient-text">&amp;</span> Profit
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-white/75">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full px-4 sm:px-5 py-2 text-sm font-medium gradient-brand text-brand-deep hover:scale-[1.04] transition-smooth"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
