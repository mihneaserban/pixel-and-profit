import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-brand-deep border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Pixel & Profit logo" className="h-8 w-8 object-contain" />
          <span className="font-display font-semibold text-white text-sm">
            Pixel <span className="gradient-text">&amp;</span> Profit
          </span>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Pixel & Profit. Web + Digital Marketing.</p>
        <a href="https://wa.me/40751577948" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-brand-cyan transition-colors">
          WhatsApp: 0751 577 948
        </a>
      </div>
    </footer>
  );
};
