import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[hsl(220_12%_92%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-28">
        <div className="animate-fade-up flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Disponibili pentru proiecte noi
          </div>
        </div>

        <h1
          className="animate-fade-up font-display font-bold leading-[0.95] text-5xl sm:text-7xl md:text-8xl tracking-tight text-balance"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="gradient-text">Site-uri care vând.</span>
          <br />
          <span className="text-foreground">Marketing care</span>{" "}
          <span className="gradient-text">scalează.</span>
        </h1>

        <p
          className="animate-fade-up mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty"
          style={{ animationDelay: "0.25s" }}
        >
          La <strong className="text-foreground font-semibold">Pixel &amp; Profit</strong> construim
          experiențe digitale rapide, elegante și optimizate pentru conversii — pentru afaceri
          care vor rezultate, nu doar prezență online.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#contact" className="btn-metal-dark rounded-full px-7 py-3.5 text-sm font-semibold bubble-hover">
            Începe proiectul →
          </a>
          <a href="#portofoliu" className="btn-metal rounded-full px-7 py-3.5 text-sm font-semibold bubble-hover">
            Vezi portofoliul
          </a>
        </div>

        <div
          className="animate-fade-up mt-20 flex items-center justify-center gap-6 sm:gap-12 text-muted-foreground text-[11px] uppercase tracking-[0.25em]"
          style={{ animationDelay: "0.55s" }}
        >
          <span>Web Design</span>
          <span className="h-1 w-1 rounded-full bg-foreground/30" />
          <span>SEO</span>
          <span className="h-1 w-1 rounded-full bg-foreground/30" />
          <span>Social Ads</span>
        </div>
      </div>
    </section>
  );
};
