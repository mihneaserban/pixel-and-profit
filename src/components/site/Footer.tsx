import { MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      // Am adăugat block, mb-[-1px] și pb-10 aici
      className="relative block pt-20 pb-10 px-6 text-white isolate overflow-hidden mb-[-1px]"
      style={{ 
        background: "var(--gradient-bg-dark)",
        marginTop: "0",
        display: "block" 
      }}
    >
      {/* Subtle grid pattern */}
      <div className="footer-grid absolute inset-0 pointer-events-none opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="block h-12 w-12 rounded-full overflow-hidden">
                <img
                  src={logo}
                  alt="Pixel & Profit"
                  className="block h-full w-full object-cover scale-[1.18]"
                />
              </span>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Pixel <span className="gradient-text-light">&amp;</span> Profit
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/55 max-w-sm">
              Studio digital. Construim site-uri rapide și campanii care aduc clienți reali —
              pentru afaceri ambițioase din România.
            </p>
            <a
              href="https://wa.me/40751577948"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 btn-metal rounded-full px-5 py-2.5 text-sm font-semibold bubble-hover"
            >
              <MessageCircle className="h-4 w-4" />
              Scrie-ne pe WhatsApp
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Navigare
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { h: "#despre", l: "Despre" },
                { h: "#servicii", l: "Servicii" },
                { h: "#proces", l: "Proces" },
                { h: "#portofoliu", l: "Portofoliu" },
                { h: "#faq", l: "FAQ" },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="text-white/65 hover:text-white transition-colors">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/45">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-white/55 shrink-0" />
                <a href="tel:+40751577948" className="hover:text-white transition-colors">
                  0751 577 948
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 mt-0.5 text-white/55 shrink-0" />
                <a
                  href="https://wa.me/40751577948"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp 24/7
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white/55 shrink-0" />
                <span>România · lucrăm 100% remote</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Am adăugat pb-4 și m-0 la paragrafe aici */}
        <div className="mt-14 pt-6 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 m-0">
            © {year} Pixel &amp; Profit. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-white/40 m-0">Web Design · SEO · Social Ads · Branding</p>
        </div>
      </div>
    </footer>
  );
};