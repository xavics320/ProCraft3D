import {
  Utensils, Award, QrCode,
  KeyRound, Smartphone, Gift, ArrowUpRight
} from "lucide-react";

import { categories } from "../../data/categories";
import "./Categories.css";
import {Fragment, useState } from "react";
import CategoryGallery from "../CategoryGallery/CategoryGallery";


const icons = {
  utensils: Utensils,
  award: Award,
  qr: QrCode,
  key: KeyRound,
  phone: Smartphone,
  gift: Gift
};


export default function Categories() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setOpenCategory((prev) =>
      prev === categoryId ? null : categoryId
    );
  };

  return (
    <section className="categories-section" id="categorie">
      <div className="container">
        <div className="section-heading">
          <span>IL NOSTRO CATALOGO</span>
          <h2>Le nostre categorie</h2>
          <p>
          Ogni progetto è unico. Anche il suo preventivo.
          <br />
          Raccontaci la tua idea e ricevi un preventivo su misura, senza impegno.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = icons[category.icon];

            return (
              <Fragment key={category.id}>
                <article
                  className="category-card category-card-clickable"
                  id={category.id === "horeca" ? "horeca" : undefined}
                  onClick={() => toggleCategory(category.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleCategory(category.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openCategory === category.id}
                  aria-label={`${openCategory === category.id ? "Chiudi" : "Apri"} la galleria ${category.title}`}
                >
                  <div className="category-visual">
                    <Icon size={66} strokeWidth={1} />
                  </div>

                  <div className="category-info">
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                      {category.startingPrice != null && (
                        <div className="category-price">
                          <span>A partire da</span>
                          <strong>
                            {category.startingPrice.toLocaleString("it-IT", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </strong>
                          <span>/pz</span>
                        </div>
                      )}
                    </div>
                    <ArrowUpRight size={21} />
                  </div>
                </article>

                {openCategory === category.id && (
                  <div className="category-gallery-wrapper">
                    <CategoryGallery
                      category={category.id}
                      onClose={() => setOpenCategory(null)}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        <nav className="seo-category-links" aria-label="Approfondisci il catalogo">
          <h3>Scopri le nostre collezioni</h3>
          <div>
            <a href="/portachiavi-personalizzati/">Portachiavi personalizzati con logo</a>
            <a href="/accessori-horeca/">Accessori personalizzati per ristoranti e bar</a>
            <a href="/porta-qr-code/">Porta QR code personalizzati per ristoranti e aziende</a>
          </div>
        </nav>
        <div className="section-bottom">
          <h2>Ogni dettaglio fa la differenza.</h2>
          <p >
           I prezzi esposti sono indicativi e possono variare.
           < br />Materiali, dimensioni, quantità e personalizzazioni determinano il prezzo finale di ogni creazione.
          </p>
        </div>
      </div>
    </section>
  );
}
