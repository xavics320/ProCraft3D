
import { ArrowRight, Check, Sparkles } from "lucide-react";
import "./Hero.css";
import Hero3D from "../Hero3D/Hero3D";


export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        <div className="hero-text">
          <div className="hero-eyebrow">
            <Sparkles size={15} />
            <span>DESIGN 3D PER IL TUO BUSINESS</span>
          </div>

          <h1>
            Il tuo brand.
            <br />
            La nostra <span>creatività.</span>
          </h1>

          <p>
            Trasformiamo la tua identità in oggetti unici.
            Gadget premium personalizzati per aziende,
            professionisti, bar e ristoranti.
          </p>

          <div className="hero-actions">
            <a href="#categorie" className="btn-primary">
              Esplora i prodotti
              <ArrowRight size={18} />
            </a>

            <a href="#contatti" className="btn-outline">
              Richiedi un preventivo
            </a>
          </div>

          <div className="hero-highlights">
            <span><Check size={16} /> Design personalizzato</span>
            <span><Check size={16} /> Piccole produzioni</span>
            <span><Check size={16} /> Made in Italy</span>
          </div>
        </div>

        
        <div className="hero-visual">
          <Hero3D />
        </div>

      </div>
    </section>
  );
}