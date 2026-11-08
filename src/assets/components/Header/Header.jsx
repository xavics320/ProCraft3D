import {useState} from 'react';
import {Box, Menu, X} from "lucide-react";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <a href="#" className="brand" onClick={closeMenu}>
                    <Box size={30} strokeWidth={1.7} />
                    <span>ProCraft<span className="brand-gold">3D</span></span>
                </a>

                <button
                className="menu-toggle"
                aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

                <nav className={menuOpen ? "nav open" : "nav"}>
                    <a href="#home" onCClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>Chi siamo</a>
                    <a href="#prodotti" onClick={closeMenu}>Prodotti</a>
                    <a href="#vantaggi" onClick={closeMenu}>Azienda</a>
                    <a href="#horeca" onClick={closeMenu}>Ho.Re.Ca</a>
                    <a href="#contatti" onClick={closeMenu}>Contatti</a>
                </nav>

                <a href="#contatti" className="header-cta">
                    Richiedi informazioni
                </a>
            </div>
        </header>
    );
}