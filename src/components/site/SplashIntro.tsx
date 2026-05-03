import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export const SplashIntro = () => {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("pp_splash_seen");
    if (!seen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const dismiss = () => {
      if (leaving) return;
      setLeaving(true);
      sessionStorage.setItem("pp_splash_seen", "1");
      document.body.style.overflow = "";
      setTimeout(() => setShow(false), 1100);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") dismiss();
    };
    const onWheel = () => dismiss();
    const onTouch = () => dismiss();
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouch);
    };
  }, [show, leaving]);

  if (!show) return null;

  const dismiss = () => {
    if (leaving) return;
    setLeaving(true);
    sessionStorage.setItem("pp_splash_seen", "1");
    document.body.style.overflow = "";
    setTimeout(() => setShow(false), 1100);
  };

  return (
    <div
      onClick={dismiss}
      role="dialog"
      aria-label="Bun venit la Pixel & Profit"
      className={`fixed inset-0 z-[200] cursor-pointer overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        leaving ? "opacity-0 scale-110 blur-2xl" : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(120% 80% at 20% 10%, hsl(220 35% 25% / 0.95), transparent 60%), radial-gradient(120% 80% at 80% 90%, hsl(220 25% 55% / 0.7), transparent 55%), linear-gradient(135deg, hsl(220 18% 8%) 0%, hsl(220 14% 22%) 45%, hsl(220 10% 50%) 100%)",
      }}
    >
      {/* Animated mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="splash-blob splash-blob-1" />
        <div className="splash-blob splash-blob-2" />
        <div className="splash-blob splash-blob-3" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(hsl(220 12% 96% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(220 12% 96% / 0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <div
          className={`mb-8 h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden drop-shadow-[0_30px_80px_hsl(220_18%_6%/0.6)] ${
            leaving ? "" : "animate-scale-in"
          }`}
        >
          <img src={logo} alt="Pixel & Profit" className="block h-full w-full object-cover scale-[1.18]" />
        </div>

        <h1
          className="font-display font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text animate-fade-up"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(220 12% 98%) 0%, hsl(220 10% 70%) 45%, hsl(220 14% 95%) 100%)",
          }}
        >
          Pixel <span className="opacity-90">&amp;</span> Profit
        </h1>

        <p className="mt-5 max-w-xl text-base sm:text-lg text-[hsl(220_12%_92%/0.85)] animate-fade-up" style={{ animationDelay: "120ms" }}>
          Web design & marketing digital care transformă pixelii în profit.
        </p>

        <div
          className="mt-12 flex items-center gap-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-[hsl(220_12%_94%/0.75)] animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <span className="splash-pulse-dot" />
          <span>Apasă oriunde, scroll sau Enter pentru a intra</span>
        </div>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[hsl(220_12%_94%/0.6)] to-transparent" />
    </div>
  );
};
