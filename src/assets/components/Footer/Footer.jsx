
import { Box } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contatti">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            <Box size={27} />
            <strong>ProCraft<span>3D</span></strong>
          </div>
          <p>
            Dai forma al tuo brand.
            <br />
            Gadget personalizzati per professionisti.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#categorie">Prodotti</a>
          <a href="#chi-siamo">Chi siamo</a>
          <a href="#contattaci">Contattaci</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} ProCraft3D.
        Tutti i diritti riservati.
      </div>
    </footer>
  );
}
