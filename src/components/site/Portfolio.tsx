import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

const works = [
  { img: w1, title: "SaaS Platform", tag: "Web Design • Branding" },
  { img: w2, title: "Restaurant Premium", tag: "Web • SEO Local" },
  { img: w3, title: "Fashion E-commerce", tag: "Shopify • Ads" },
  { img: w4, title: "Real Estate Agency", tag: "Web • Lead Gen" },
];

export const Portfolio = () => {
  return (
    <section id="portofoliu" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] gradient-text">
              Portofoliu
            </span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-balance">
              Lucrări recente.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Imagini de prezentare — actualizăm portofoliul constant.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {works.map((w, i) => (
            <figure
              key={w.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl glass hover:shadow-elevated transition-spring`}
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={w.img}
                  alt={w.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="w-full h-auto aspect-[4/3] object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-spring duration-700"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[hsl(220_18%_6%/0.85)] via-[hsl(220_18%_6%/0.35)] to-transparent">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">{w.tag}</p>
                <h3 className="mt-1 font-display text-2xl text-white">{w.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
