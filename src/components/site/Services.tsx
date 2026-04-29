const services = [
  {
    title: "Web Design & Development",
    desc: "Site-uri rapide, responsive, optimizate SEO. Construite cu tehnologii moderne, livrate în zile, nu luni.",
    icon: "◍",
  },
  {
    title: "Marketing Digital",
    desc: "Strategii Google Ads, Meta Ads și SEO orientate pe ROI. Rapoarte clare, fără jargon.",
    icon: "↗",
  },
  {
    title: "Branding & Identitate",
    desc: "Logo, paletă, tipografie și ghid de stil — un brand coerent care inspiră încredere instant.",
    icon: "✦",
  },
  {
    title: "E-commerce",
    desc: "Magazine online complete, integrate cu plăți, curieri și automatizări care vând non-stop.",
    icon: "$",
  },
];

export const Services = () => {
  return (
    <section id="servicii" className="relative py-32 px-6 bg-secondary/40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">Servicii</span>
          <h2 className="mt-5 font-display font-bold text-4xl sm:text-6xl leading-tight tracking-tight">
            Tot ce ai nevoie ca să crești online.
          </h2>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl bg-card border border-border p-8 sm:p-10 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth" style={{ background: "var(--gradient-brand-soft)" }} />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl gradient-brand text-brand-deep text-2xl font-bold shadow-glow">
                  {s.icon}
                </div>
                <h3 className="mt-6 font-display font-semibold text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
