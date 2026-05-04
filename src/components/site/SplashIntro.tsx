import { useEffect, useMemo, useState } from "react";
import { Code2, TrendingUp, Rocket, BarChart3, DollarSign, Zap, Globe, LineChart, Sparkles, Cpu, Target, Braces } from "lucide-react";
import logo from "@/assets/logo.png";

const FLOATING_ICONS = [Code2, TrendingUp, Rocket, BarChart3, DollarSign, Zap, Globe, LineChart, Sparkles, Cpu, Target, Braces];
const CODE_SNIPPETS = [
  "</>", "{ }", "=>", "const", "ROI++", "$$$", "0x1F", "<div>", "npm i", "git push", "+250%", "scale()", "async", "return", "//growth", "#profit",
];

export const SplashIntro = () => {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const icons = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => {
        const Icon = FLOATING_ICONS[i % FLOATING_ICONS.length];
        return {
          i,
          Icon,
          top: Math.random() * 90 + 2,
          left: Math.random() * 92 + 2,
          size: 22 + Math.random() * 38,
          duration: 9 + Math.random() * 10,
          delay: -Math.random() * 10,
          drift: (Math.random() * 60 - 30).toFixed(0) + "px",
          rotate: (Math.random() * 40 - 20).toFixed(0) + "deg",
          opacity: 0.18 + Math.random() * 0.22,
        };
      }),
    []
  );

  const snippets = useMemo(
    () =>
      CODE_SNIPPETS.map((text, i) => ({
        i,
        text,
        top: Math.random() * 90 + 2,
        left: Math.random() * 92 + 2,
        size: 11 + Math.random() * 7,
        duration: 12 + Math.random() * 10,
        delay: -Math.random() * 12,
        drift: (Math.random() * 80 - 40).toFixed(0) + "px",
        opacity: 0.12 + Math.random() * 0.18,
      })),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("pp_splash_seen");
    if (!seen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const dismiss = () => {
    if (leaving) return;
    setLeaving(true);
    sessionStorage.setItem("pp_splash_seen", "1");
    document.body.style.overflow = "";
    setTimeout(() => setShow(false), 1100);
  };

  useEffect(() => {
    if (!show) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, leaving]);

  if (!show) return null;

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
          "radial-gradient(60% 50% at 18% 12%, hsl(210 80% 45% / 0.55), transparent 65%)," +
          "radial-gradient(55% 50% at 85% 88%, hsl(190 90% 50% / 0.45), transparent 60%)," +
          "radial-gradient(45% 45% at 70% 20%, hsl(265 70% 55% / 0.4), transparent 65%)," +
          "linear-gradient(135deg, hsl(220 35% 6%) 0%, hsl(220 28% 14%) 35%, hsl(220 20% 22%) 70%, hsl(220 14% 32%) 100%)",
      }}
    >
      {/* Mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="splash-blob splash-blob-1" />
        <div className="splash-blob splash-blob-2" />
        <div className="splash-blob splash-blob-3" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(hsl(210 80% 80% / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 80% / 0.25) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          }}
        />

        {/* Floating code snippets */}
        {snippets.map((s) => (
          <span
            key={`s-${s.i}`}
            className="splash-float font-mono select-none"
            style={{
              position: "absolute",
              top: `${s.top}%`,
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              color: "hsl(190 90% 80%)",
              opacity: s.opacity,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              textShadow: "0 0 18px hsl(190 90% 60% / 0.6)",
              // @ts-expect-error css var
              "--drift": s.drift,
            }}
          >
            {s.text}
          </span>
        ))}

        {/* Floating icons */}
        {icons.map(({ i, Icon, top, left, size, duration, delay, drift, rotate, opacity }) => (
          <span
            key={`i-${i}`}
            className="splash-float"
            style={{
              position: "absolute",
              top: `${top}%`,
              left: `${left}%`,
              opacity,
              transform: `rotate(${rotate})`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              filter: "drop-shadow(0 0 14px hsl(210 90% 60% / 0.5))",
              // @ts-expect-error css var
              "--drift": drift,
            }}
          >
            <Icon size={size} strokeWidth={1.4} color="hsl(210 100% 88%)" />
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <div
          className={`mb-8 h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden drop-shadow-[0_30px_80px_hsl(210_90%_40%/0.55)] ring-1 ring-[hsl(210_80%_70%/0.35)] ${
            leaving ? "" : "animate-scale-in"
          }`}
        >
          <img src={logo} alt="Pixel & Profit" className="block h-full w-full object-cover scale-[1.18]" />
        </div>

        <h1 className="font-display font-extrabold tracking-tight text-5xl sm:text-7xl md:text-8xl animate-fade-up flex items-baseline justify-center gap-3 sm:gap-5 flex-wrap">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(210 100% 96%) 0%, hsl(210 80% 75%) 45%, hsl(190 90% 85%) 100%)",
            }}
          >
            Pixel
          </span>
          <span
            className="text-transparent bg-clip-text font-display italic"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(190 95% 70%) 0%, hsl(265 85% 75%) 50%, hsl(210 100% 80%) 100%)",
              filter: "drop-shadow(0 0 24px hsl(190 90% 50% / 0.55))",
            }}
          >
            &amp;
          </span>
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(45 95% 80%) 0%, hsl(35 90% 65%) 45%, hsl(210 90% 90%) 100%)",
            }}
          >
            Profit
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base sm:text-lg text-[hsl(210_30%_94%/0.88)] animate-fade-up" style={{ animationDelay: "120ms" }}>
          Web design & marketing digital care transformă pixelii în profit.
        </p>

      </div>

      {/* Shimmer line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[hsl(190_90%_70%/0.7)] to-transparent" />
    </div>
  );
};
