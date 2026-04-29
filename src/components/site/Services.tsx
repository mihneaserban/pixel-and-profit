import { Sparkles, TrendingUp, Palette, ShoppingBag } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    desc: "Site-uri rapide, responsive, optimizate SEO. Construite cu tehnologii moderne, livrate în zile, nu luni.",
    Icon: Sparkles,
  },
  {
    title: "Marketing Digital",
    desc: "Strategii Google Ads, Meta Ads și SEO orientate pe ROI. Rapoarte clare, fără jargon.",
    Icon: TrendingUp,
  },
  {
    title: "Branding & Identitate",
    desc: "Logo, paletă, tipografie și ghid de stil — un brand coerent care inspiră încredere instant.",
    Icon: Palette,
  },
  {
    title: "E-commerce",
    desc: "Magazine online complete, integrate cu plăți, curieri și automatizări care vând non-stop.",
    Icon: ShoppingBag,
  },
];

export const Services = () => {
  return (
    <section id="servicii" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl reveal">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
            Servicii
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-balance">
            Tot ce ai nevoie ca să crești online.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative rounded-3xl glass p-8 sm:p-10 hover:shadow-elevated hover:-translate-y-1 transition-spring overflow-hidden`}
            >
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-silver shadow-metal bubble-hover">
                  <s.Icon className="h-5 w-5 text-[hsl(var(--steel-800))]" strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
