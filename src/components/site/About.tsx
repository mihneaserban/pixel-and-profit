export const About = () => {
  return (
    <section id="despre" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl reveal">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
          Despre noi
        </span>
        <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl text-balance">
          Nu construim doar site-uri.
          <br />
          <span className="gradient-text">Construim avantaj competitiv.</span>
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
          <div className="reveal reveal-delay-1">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Suntem un studio mic și obsedat de detalii. Lucrăm cu antreprenori care își iau
              afacerea în serios — și ne așteptăm la același lucru de la noi. Fără agenții
              gigant, fără PM-i între tine și execuție.
            </p>
          </div>
          <div className="reveal reveal-delay-2">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Fiecare pixel, fiecare cuvânt și fiecare campanie pleacă de la o întrebare:{" "}
              <strong className="text-foreground font-semibold">cum aducem mai mulți clienți?</strong>{" "}
              Restul — design, cod, copy, ads — se aliniază în jurul răspunsului.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 reveal reveal-delay-3">
          {[
            { k: "50+", v: "Proiecte livrate" },
            { k: "98%", v: "Clienți reveniți" },
            { k: "<14z", v: "Timp mediu lansare" },
            { k: "24/7", v: "Suport pe WhatsApp" },
          ].map((s) => (
            <div
              key={s.v}
              className="glass rounded-2xl px-4 py-5 text-center bubble-hover"
            >
              <div className="font-display text-2xl sm:text-3xl gradient-text">{s.k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
