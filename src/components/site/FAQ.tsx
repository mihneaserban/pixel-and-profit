import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Cât durează un site web?",
    a: "Un site de prezentare e gata în 7–14 zile. Un site cu funcționalități custom (rezervări, calculatoare, integrări) între 2 și 4 săptămâni. Un magazin e-commerce complet, 3–6 săptămâni. Lucrăm cu milestones clare — știi mereu unde suntem. Pentru un termen exact pe proiectul tău, scrie-ne pe WhatsApp și îți dăm răspuns în aceeași zi.",
  },
  {
    q: "Cât costă?",
    a: "Începem de la pachete accesibile pentru site-uri de prezentare și scalăm pentru proiecte complexe. Prețul depinde de numărul de pagini, funcționalități, copywriting și partea de design custom. Nu lucrăm cu prețuri afișate pe site pentru că fiecare afacere are nevoi diferite — dar îți dăm o ofertă fixă, fără surprize, după o discuție scurtă pe WhatsApp.",
  },
  {
    q: "Oferiți și mentenanță?",
    a: "Da. Avem pachete lunare care includ hosting, SSL, backup-uri, update-uri de securitate, monitorizare uptime și un număr de ore lunare pentru modificări de conținut. Detaliile complete și prețurile pe pachet le discutăm pe WhatsApp.",
  },
  {
    q: "Ce include partea de marketing?",
    a: "Strategie inițială, setup conturi (Google Ads, Meta Business, Analytics, Tag Manager), creative grafice, copy pentru anunțuri, lansare campanii și optimizare lunară cu rapoarte clare. Lucrăm pe obiective măsurabile — lead-uri, vânzări, ROAS — nu doar afișări.",
  },
  {
    q: "Lucrați și cu afaceri mici / startup-uri?",
    a: "Da, sunt o parte importantă din portofoliul nostru. Avem pachete de start gândite pentru businessuri la început de drum, cu opțiunea de a scala pe măsură ce crești. Spune-ne pe WhatsApp în ce stadiu ești și îți recomandăm cea mai bună variantă.",
  },
  {
    q: "Pot edita singur conținutul după lansare?",
    a: "Da. Construim site-urile cu un panou de administrare simplu, în limba română, unde poți schimba texte, imagini și pagini fără să atingi cod. Îți facem și un mini-tutorial video la livrare. Pentru cazurile mai tehnice, suntem la un mesaj distanță.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center reveal">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
            Întrebări frecvente
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
            Răspunsuri rapide.
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px]">
            Mai jos găsești cele mai frecvente întrebări. Pentru detalii personalizate pe
            proiectul tău, cel mai rapid e direct pe WhatsApp.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3 reveal reveal-delay-1">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl glass px-6 border-0 data-[state=open]:shadow-elevated transition-spring"
            >
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[15px]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 reveal reveal-delay-2 glass rounded-3xl p-6 sm:p-8 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-silver shadow-metal mx-auto bubble-hover">
            <MessageCircle className="h-5 w-5 text-[hsl(var(--steel-800))]" />
          </div>
          <h3 className="mt-4 font-display text-xl text-foreground">Mai ai întrebări?</h3>
          <p className="mt-2 text-muted-foreground text-[15px] max-w-md mx-auto">
            Discutăm tot pe WhatsApp — îți răspundem rapid, fără formulare interminabile și
            fără emailuri pierdute prin spam.
          </p>
          <a
            href="https://wa.me/40751577948?text=Salut%20Pixel%20%26%20Profit!%20Am%20o%20%C3%AEntrebare."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex btn-metal-dark rounded-full px-6 py-3 text-sm font-semibold bubble-hover"
          >
            Scrie-ne pe WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
