const steps = [
  { n: "01", title: "Discovery", desc: "Discutăm afacerea, obiectivele și publicul. Definim ce înseamnă succes." },
  { n: "02", title: "Design", desc: "Schițăm layout-ul, tipografia și fluxul. Tu aprobi înainte să scriem o linie de cod." },
  { n: "03", title: "Build", desc: "Dezvoltăm site-ul rapid și curat, cu performanță și SEO de la zero." },
  { n: "04", title: "Lansare & Creștere", desc: "Publicăm, măsurăm, optimizăm. Marketing-ul preia ștafeta." },
];

export const Process = () => {
  return (
    <section id="proces" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl reveal">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
            Procesul
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-balance">
            Patru pași. Zero stres.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal reveal-delay-${(i % 3) + 1} relative rounded-3xl glass p-7 hover:-translate-y-1 transition-spring`}
            >
              <span className="font-display text-5xl gradient-text">{s.n}</span>
              <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
