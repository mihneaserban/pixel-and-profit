import { useEffect, useRef, useState } from "react";
import { Target, Rocket, Users, TrendingUp, Heart, Sparkles } from "lucide-react";

type Step = {
  icon: typeof Target;
  title: string;
  text: string;
  // procente relative la cutia roadmap-ului
  x: number;
  y: number;
};

const steps: Step[] = [
  {
    icon: Target,
    title: "Înțelegem ținta",
    text: "Antreprenori și companii care vor mai mult decât un site frumos — vor rezultate.",
    x: 8,
    y: 18,
  },
  {
    icon: Users,
    title: "Publicul tău",
    text: "Definim împreună clientul ideal, durerile lui și mesajul care îl convertește.",
    x: 38,
    y: 8,
  },
  {
    icon: Sparkles,
    title: "Design cu sens",
    text: "Estetică premium, dar funcțională — fiecare pixel are un rol în călătoria utilizatorului.",
    x: 72,
    y: 22,
  },
  {
    icon: Rocket,
    title: "Lansare rapidă",
    text: "În 2–4 săptămâni ești online, cu un produs care lucrează pentru tine 24/7.",
    x: 18,
    y: 52,
  },
  {
    icon: TrendingUp,
    title: "Creștere măsurabilă",
    text: "Optimizări constante, rapoarte clare, decizii bazate pe date — nu pe presupuneri.",
    x: 58,
    y: 60,
  },
  {
    icon: Heart,
    title: "Parteneriat pe termen lung",
    text: "Misiunea noastră: să fim echipa ta digitală, nu doar un furnizor.",
    x: 88,
    y: 78,
  },
];

// curbă cubică între două puncte cu un mic offset organic
function buildPath(x1: number, y1: number, x2: number, y2: number, idx: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const off = idx % 2 === 0 ? -1 : 1;
  const cx1 = x1 + dx * 0.3 + off * 6;
  const cy1 = y1 + dy * 0.1 - 8;
  const cx2 = x1 + dx * 0.7 - off * 6;
  const cy2 = y1 + dy * 0.9 + 8;
  return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
}

export const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 1000, h: 700 });

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const { width, height } = e.contentRect;
        setSize({ w: width, h: height });
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // convertim procentele în coordonate SVG
  const pts = steps.map((s) => ({
    x: (s.x / 100) * size.w,
    y: (s.y / 100) * size.h,
  }));

  return (
    <section id="misiune" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
            Misiune
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-balance">
            Roadmap-ul nostru cu <span className="gradient-text">tine</span>.
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty">
            Lucrăm cu antreprenori care vor mai mult decât prezență online — vor o mașinărie digitală care le aduce clienți. Iată drumul pe care îl parcurgem împreună.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mt-20 reveal rounded-[2rem] glass overflow-hidden"
          style={{ height: "min(78vh, 720px)" }}
        >
          {/* fundal subtil cu grid */}
          <div className="absolute inset-0 grid-pattern opacity-50" />

          {/* SVG cu trasee + avioane */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${size.w} ${size.h}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220 14% 35%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(220 10% 65%)" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {pts.slice(0, -1).map((p, i) => {
              const next = pts[i + 1];
              const d = buildPath(p.x, p.y, next.x, next.y, i);
              return (
                <g key={`path-${i}`}>
                  <path
                    d={d}
                    fill="none"
                    stroke="url(#pathGrad)"
                    strokeWidth={2}
                    strokeDasharray="2 8"
                    strokeLinecap="round"
                    style={{
                      animation: `dash-flow 18s linear infinite`,
                      animationDelay: `${i * -2}s`,
                    }}
                  />
                  {/* avion de hârtie animat pe traseu */}
                  <g
                    style={{
                      offsetPath: `path("${d}")`,
                      // @ts-expect-error vendor
                      offsetRotate: "auto",
                      animation: `plane-fly 9s ${i * 1.4}s cubic-bezier(0.65, 0, 0.35, 1) infinite`,
                    }}
                  >
                    <g transform="translate(-10,-10)">
                      <path
                        d="M2 10 L20 2 L12 18 L10 12 Z"
                        fill="hsl(220 14% 22%)"
                        stroke="hsl(220 10% 90%)"
                        strokeWidth="0.6"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12 L20 2"
                        stroke="hsl(220 10% 90%)"
                        strokeWidth="0.6"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* punctele cu conținut */}
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                <div className="relative flex flex-col items-center">
                  {/* nodul */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[hsl(220_14%_60%/0.35)] blur-xl scale-150 group-hover:scale-[1.8] transition-spring" />
                    <div className="relative h-14 w-14 rounded-full btn-metal-dark flex items-center justify-center shadow-elevated group-hover:scale-110 transition-spring">
                      <Icon className="h-6 w-6 text-[hsl(var(--steel-100))]" />
                    </div>
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full btn-metal text-[10px] font-bold flex items-center justify-center shadow-card">
                      {i + 1}
                    </span>
                  </div>

                  {/* eticheta */}
                  <div className="mt-3 w-44 text-center glass rounded-2xl px-3 py-2 shadow-card opacity-90 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-spring">
                    <h3 className="font-display text-sm font-bold text-foreground leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes dash-flow {
          to { stroke-dashoffset: -200; }
        }
        @keyframes plane-fly {
          0% { offset-distance: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};
