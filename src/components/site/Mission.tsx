import { useEffect, useRef, useState } from "react";
import { Target, Rocket, Users, TrendingUp, Heart, Sparkles } from "lucide-react";

type Step = {
  icon: typeof Target;
  title: string;
  text: string;
  x: number;
  y: number;
};

const steps: Step[] = [
  {
    icon: Target,
    title: "Înțelegem ținta",
    text: "Antreprenori și companii care vor mai mult decât un site frumos — vor rezultate.",
    x: 10,
    y: 20,
  },
  {
    icon: Users,
    title: "Publicul tău",
    text: "Definim împreună clientul ideal, durerile lui și mesajul care îl convertește.",
    x: 40,
    y: 10,
  },
  {
    icon: Sparkles,
    title: "Design cu sens",
    text: "Estetică premium, dar funcțională — fiecare pixel are un rol în călătoria utilizatorului.",
    x: 75,
    y: 25,
  },
  {
    icon: Rocket,
    title: "Lansare rapidă",
    text: "În 2–4 săptămâni ești online, cu un produs care lucrează pentru tine 24/7.",
    x: 20,
    y: 55,
  },
  {
    icon: TrendingUp,
    title: "Creștere măsurabilă",
    text: "Optimizări constante, rapoarte clare, decizii bazate pe date — nu pe presupuneri.",
    x: 60,
    y: 65,
  },
  {
    icon: Heart,
    title: "Parteneriat pe termen lung",
    text: "Misiunea noastră: să fim echipa ta digitală, nu doar un furnizor.",
    x: 90,
    y: 80,
  },
];

function buildPath(x1: number, y1: number, x2: number, y2: number, idx: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const off = idx % 2 === 0 ? -1 : 1;
  const cx1 = x1 + dx * 0.3 + off * 10;
  const cy1 = y1 + dy * 0.1 - 10;
  const cx2 = x1 + dx * 0.7 - off * 10;
  const cy2 = y1 + dy * 0.9 + 10;
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

  // Zona de siguranță interioară (Safe Zone)
  const padding = 80;
  const pts = steps.map((s) => ({
    x: (s.x / 100) * (size.w - padding * 2) + padding,
    y: (s.y / 100) * (size.h - padding * 2) + padding,
  }));

  return (
    <section id="misiune" className="relative py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
            Misiune
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-balance text-foreground">
            Roadmap-ul nostru cu <span className="gradient-text">tine</span>.
          </h2>
          <p className="mt-6 text-base text-muted-foreground text-pretty">
            Lucrăm cu antreprenori care vor mai mult decât prezență online — vor o mașinărie digitală care le aduce clienți. Iată drumul pe care îl parcurgem împreună.
          </p>
        </div>

        {/* Mobile / tablet: carousel cu snap orizontal */}
        <div className="md:hidden mt-14 reveal">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[78%] max-w-sm glass rounded-3xl p-6 shadow-xl border border-white/10 relative"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full btn-metal-dark flex items-center justify-center shadow-elevated">
                      <Icon className="h-5 w-5 text-[hsl(var(--steel-100))]" />
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full btn-metal text-[10px] font-bold flex items-center justify-center shadow-lg border border-white/20">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-foreground/40">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M2 12 L20 4 L12 22 L10 14 Z" fill="currentColor" stroke="white" strokeWidth="0.6" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-1.5 mt-2">
            {steps.map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-3">Glisează pentru următorul pas →</p>
        </div>

        {/* Desktop: roadmap interactiv */}
        <div
          ref={containerRef}
          className="hidden md:block relative mt-24 reveal rounded-[2.5rem] glass min-h-[600px]"
          style={{ height: "min(85vh, 800px)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-40 rounded-[2.5rem]" />

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${size.w} ${size.h}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220 14% 35%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(220 10% 65%)" stopOpacity="0.8" />
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
                    strokeDasharray="4 10"
                    strokeLinecap="round"
                    style={{
                      animation: `dash-flow 20s linear infinite`,
                      animationDelay: `${i * -2}s`,
                    }}
                  />
                  <g
                    style={{
                      offsetPath: `path("${d}")`,
                      offsetRotate: "auto",
                      animation: `plane-fly 10s ${i * 1.5}s cubic-bezier(0.45, 0, 0.55, 1) infinite`,
                    } as React.CSSProperties}
                  >
                    <g transform="translate(-10,-10)">
                      <path
                        d="M2 10 L20 2 L12 18 L10 12 Z"
                        fill="hsl(220 14% 22%)"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </g>
              );
            })}
          </svg>

          {steps.map((s, i) => {
            const Icon = s.icon;
            const pos = pts[i];
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
                style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[hsl(220_14%_60%/0.35)] blur-2xl scale-[1.8] group-hover:scale-[2.2] transition-spring" />
                    
                    <div className="relative h-14 w-14 rounded-full btn-metal-dark flex items-center justify-center shadow-elevated group-hover:scale-110 transition-spring">
                      {/* Am schimbat culoarea iconiței înapoi la steel-100 */}
                      <Icon className="h-6 w-6 text-[hsl(var(--steel-100))]" />
                    </div>
                    
                    <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full btn-metal text-[10px] font-bold flex items-center justify-center shadow-lg border border-white/20">
                      {i + 1}
                    </span>
                  </div>

                  <div className="mt-4 w-48 text-center glass rounded-2xl p-3 shadow-xl opacity-90 group-hover:opacity-100 group-hover:-translate-y-1 transition-spring backdrop-blur-sm border border-white/10">
                    {/* Am revenit la text-foreground pentru titlu */}
                    <h3 className="font-display text-sm font-bold text-foreground leading-tight">
                      {s.title}
                    </h3>
                    {/* Am revenit la text-muted-foreground pentru text */}
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
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
          to { stroke-dashoffset: -300; }
        }
        @keyframes plane-fly {
          0% { offset-distance: 0%; opacity: 0; transform: scale(0.8); }
          10% { opacity: 1; transform: scale(1); }
          90% { opacity: 1; transform: scale(1); }
          100% { offset-distance: 100%; opacity: 0; transform: scale(0.8); }
        }
      `}</style>
    </section>
  );
};