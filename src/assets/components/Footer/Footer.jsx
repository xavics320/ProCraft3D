import { Box } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contatti">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-info">
          <div className="footer-brand">
            <Box size={27} />
            <strong>
              ProCraft<span>3D</span>
            </strong>
          </div>

          <p>
            Dai forma al tuo brand.
            <br />
            Gadget personalizzati per professionisti.
          </p>
        </div>

        {/* Navigazione */}
        <nav className="footer-navigation" aria-label="Navigazione footer">
          <span className="footer-heading">ESPLORA</span>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#categorie">Prodotti</a>
            <a href="#chi-siamo">Chi siamo</a>
            <a href="#contattaci">Contattaci</a>
            <a href="#faq">FAQ</a>
          </div>
        </nav>
      </div>

      {/* Parte inferiore */}
      <div className="container footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} ProCraft3D.
          Tutti i diritti riservati.
        </p>

        <div className="footer-legal">
          <a
            href="https://www.iubenda.com/privacy-policy/61198935"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>

          <a
            href="https://www.iubenda.com/privacy-policy/61198935/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a>
        </div>

        <a
          href="https://xavierparedes-dev.it/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          Design by <span>WebDevXP</span>
        </a>
      </div>
    </footer>
  );
}