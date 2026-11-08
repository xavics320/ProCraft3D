
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
          <a href="#categorie">Prodotti</a>
          <a href="#vantaggi">Aziende</a>
          <a href="#horeca">Ho.Re.Ca.</a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} ProCraft3D.
        Tutti i diritti riservati.
      </div>
    </footer>
  );
}
