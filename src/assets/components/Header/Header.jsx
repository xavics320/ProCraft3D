
import { useState } from "react";
import { Box, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const WHATSAPP_NUMBER = "393484987611"

  const message = encodeURIComponent(
    "Ciao ProCraft3D! Vorrei sapere di più sui vostri servizi..."
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#" className="brand" onClick={closeMenu}>
          <Box size={30} strokeWidth={1.7} />
          <span>
            ProCraft<span className="brand-gold">3D</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav open" : "nav"}
        >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#categorie" onClick={closeMenu}>Prodotti</a>
            <a href="#chi-siamo" onClick={closeMenu}>Chi siamo</a>
            <a href="#contattaci" onClick={closeMenu}>Contattaci</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>

        <a 
        href={whatsappUrl} 
        className="header-cta" 
        target="_blank" 
        rel="noopener noreferrer">
          Richiedi informazioni
        </a>
      </div>
    </header>
  );
}
