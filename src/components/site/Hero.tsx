import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-deep">
      <div className="aurora">
        <div className="aurora-blob" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-deep" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-28">
        <div className="animate-fade-up flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
            Disponibili pentru proiecte noi
          </div>
        </div>

        <h1 className="animate-fade-up font-display font-bold text-white leading-[0.95] text-5xl sm:text-7xl md:text-8xl tracking-tight" style={{ animationDelay: "0.1s" }}>
          Site-uri care{" "}
          <span className="gradient-text">vând.</span>
          <br />
          Marketing care{" "}
          <span className="gradient-text">scalează.</span>
        </h1>

        <p className="animate-fade-up mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed" style={{ animationDelay: "0.25s" }}>
          La <strong className="text-white font-medium">Pixel &amp; Profit</strong> construim experiențe digitale rapide, elegante și optimizate pentru conversii — pentru afaceri care vor rezultate, nu doar prezență online.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center" style={{ animationDelay: "0.4s" }}>
          <a
            href="#contact"
            className="group rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-deep shadow-glow hover:scale-[1.04] transition-smooth"
          >
            Începe proiectul →
          </a>
          <a
            href="#portofoliu"
            className="rounded-full glass px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-smooth"
          >
            Vezi portofoliul
          </a>
        </div>

        <div className="animate-fade-up mt-20 flex items-center justify-center gap-8 sm:gap-14 text-white/50 text-xs uppercase tracking-[0.2em]" style={{ animationDelay: "0.55s" }}>
          <span>Web Design</span>
          <span className="text-brand-cyan">•</span>
          <span>SEO</span>
          <span className="text-brand-cyan">•</span>
          <span>Social Ads</span>
        </div>
      </div>
    </section>
  );
};
