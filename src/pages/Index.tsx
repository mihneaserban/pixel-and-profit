import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Mission } from "@/components/site/Mission";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { SplashIntro } from "@/components/site/SplashIntro";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Pixel & Profit — Web Design & Marketing Digital Premium";
    const desc = "Site-uri web profesionale și marketing digital care aduc clienți. Pixel & Profit — design, dezvoltare, SEO și ads.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Mission />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
