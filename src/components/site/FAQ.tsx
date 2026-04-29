import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Cât durează un site web?", a: "În general între 7 și 21 de zile, în funcție de complexitate. Site-uri de prezentare pot fi gata în mai puțin de o săptămână." },
  { q: "Cât costă?", a: "Începem de la pachete accesibile pentru site-uri de prezentare și scalăm pentru proiecte e-commerce sau marketing complex. Trimite-ne un mesaj pe WhatsApp pentru o ofertă personalizată." },
  { q: "Oferiți și mentenanță?", a: "Da. Avem pachete lunare de mentenanță, securitate, backup și update-uri de conținut." },
  { q: "Ce include partea de marketing?", a: "Strategie, setup conturi (Google/Meta), creative, copy, lansare și optimizare lunară — cu rapoarte clare." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 px-6 bg-background">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">Întrebări frecvente</span>
          <h2 className="mt-5 font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
            Răspunsuri rapide.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-card">
              <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
