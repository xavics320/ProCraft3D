import { ArrowUpRight, BadgeCheck, Palette, Lightbulb } from "lucide-react";
import "./About.css";

// Sostituisci con il tuo numero WhatsApp aziendale
const WHATSAPP_NUMBER = "393484987611";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Materiali selezionati",
    description:
      "Scegliamo materiali di qualità in base alle caratteristiche e all'utilizzo di ogni prodotto.",
  },
  {
    icon: Palette,
    title: "Personalizzazione su richiesta",
    description:
      "Colori, forme, loghi e dettagli studiati per valorizzare la tua identità.",
  },
  {
    icon: Lightbulb,
    title: "Oltre il catalogo",
    description:
      "Valutiamo anche idee e progetti completamente nuovi, non presenti sul sito.",
  },
];

export default function About() {
  const message = encodeURIComponent(
    "Ciao ProCraft3D! Vorrei proporvi un'idea per un prodotto personalizzato."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="about" id="chi-siamo">
      <div className="about-visual" aria-hidden="true">
        <img
          className="about-image"
          src="/images/stampante3D.webp"
          alt=""
          fetchPriority="high"
        />
      </div>

      <div className="container about-inner">

        <div className="about-intro">
          <span className="about-eyebrow">CHI SIAMO</span>

          <h2>
            Non stampiamo soltanto oggetti.
            <span> Diamo forma alle idee.</span>
          </h2>

          <p>
            ProCraft3D nasce per trasformare idee in oggetti personalizzati
            attraverso la stampa 3D. Realizziamo soluzioni per aziende,
            professionisti e privati, curando ogni progetto dalla scelta
            dei materiali alla realizzazione.
          </p>

          <p>
            Il nostro catalogo è solo un punto di partenza: hai un'idea
            diversa? Raccontacela e ne valuteremo insieme la fattibilità.
          </p>

          <a
            className="about-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Raccontaci la tua idea
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="about-features">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="about-feature" key={title}>
              <div className="about-feature-icon">
                <Icon size={23} strokeWidth={1.7} />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}