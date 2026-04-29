export const About = () => {
  return (
    <section id="despre" className="relative py-32 px-6 bg-background">
      <div className="mx-auto max-w-5xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">Despre noi</span>
        <h2 className="mt-5 font-display font-bold text-4xl sm:text-6xl leading-tight tracking-tight text-foreground max-w-3xl">
          Designul tău nu trebuie să fie <em className="not-italic gradient-text">frumos</em>.
          <br />
          Trebuie să fie <em className="not-italic gradient-text">imposibil de ignorat.</em>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Suntem o echipă mică, obsedată de detalii, care construiește site-uri profesionale și strategii de marketing digital pentru branduri ambițioase. Lucrăm rapid, fără agitație și fără surprize.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fiecare proiect pleacă de la o întrebare simplă: <strong className="text-foreground">cum aducem mai mulți clienți?</strong> Restul — cod, copy, animații, campanii — se aliniază în jurul răspunsului.
          </p>
        </div>
      </div>
    </section>
  );
};
