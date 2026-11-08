
import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-eyebrow">
            GADGET AZIENDALI PREMIUM
          </span>

          <h1>
            Dai forma
            <br />
            al tuo <span>brand.</span>
          </h1>

          <p>
            Gadget e accessori personalizzati,
            progettati e realizzati con stampa 3D
            per aziende, professionisti e locali.
          </p>

          <div className="hero-actions">
            <a href="#categorie" className="btn-primary">
              Scopri i prodotti
              <ArrowRight size={18} />
            </a>

            <a href="#contatti" className="btn-outline">
              Richiedi un preventivo
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-product">
            <span className="product-symbol">P.</span>
            <strong>PROCRAFT3D</strong>
            <small>PREMIUM COLLECTION</small>
          </div>
          <span className="hero-visual-caption">
            Il tuo brand, un oggetto unico.
          </span>
        </div>
      </div>
    </section>
  );
}
