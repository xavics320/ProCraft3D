
import { ArrowRight, Check, Sparkles } from "lucide-react";
import "./Hero.css";


export default function Hero() {
  return (
    <section className="hero" id="home">
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
            Realizziamo gadget aziendali personalizzati e oggetti su misura
            con stampa 3D per aziende, professionisti, bar e ristoranti.
            
          </p>

          <div className="hero-actions">
            <a href="#categorie" className="btn-primary">
              Esplora i prodotti
              <ArrowRight size={18} />
            </a>

            <a href="#contattaci" className="btn-outline">
              Richiedi un preventivo
            </a>
          </div>

          <div className="hero-highlights">
            <span><Check size={16} /> Design personalizzato</span>
            <span><Check size={16} /> Piccole e grandiproduzioni</span>
            <span><Check size={16} /> Made in Italy</span>
          </div>
        </div>

        
        <div className="hero-visual">
          <img
            className="hero-image"
            src="/images/Hero-imm.webp"
            alt=""
            fetchPriority="high"
          />
        </div>

      </div>
    </section>
  );
}