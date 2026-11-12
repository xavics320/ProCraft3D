
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  KeyRound,
  X
} from "lucide-react";

import { products } from "../../data/product.js";
import "./CategoryGallery.css";

export default function CategoryGallery({
  category = "portachiavi",
  onClose
}) {
  const items = products[category] || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  if (items.length === 0) return null;

  const currentIndex = activeIndex % items.length;
  const current = items[currentIndex];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + items.length) % items.length
    );
  };

  const requestQuote = () => {
    const params = new URLSearchParams({
      category: current.category,
      product: current.name
    });

    window.location.hash = `preventivo?${params.toString()}`;
  };

  return (
    <div className="category-gallery">
      <div className="gallery-heading">
        <div>
          <span className="gallery-eyebrow">
            COLLEZIONE PROCRAFT3D
          </span>
          <h3>Portachiavi personalizzati</h3>
          <p>
            Scopri i modelli disponibili e scegli quello
            più adatto al tuo brand.
          </p>
        </div>

        <button
          className="gallery-close"
          onClick={onClose}
          aria-label="Chiudi galleria"
        >
          <X size={21} />
        </button>
      </div>

      <div className="gallery-content">
        <div className="gallery-image">
          <span className="gallery-badge">
            {current.badge}
          </span>

          {!imageError[current.id] ? (
            <img
              src={current.image}
              alt={current.name}
              onError={() =>
                setImageError((prev) => ({
                  ...prev,
                  [current.id]: true
                }))
              }
            />
          ) : (
            <div className="gallery-placeholder">
              <KeyRound size={75} strokeWidth={1} />
              <span>Immagine in arrivo</span>
            </div>
          )}
        </div>

        <div className="gallery-details">
          <span className="gallery-counter">
            {currentIndex + 1} / {items.length}
          </span>

          <h4>{current.name}</h4>
          <p>{current.description}</p>

          <div className="gallery-controls">
            <button
              onClick={previous}
              aria-label="Prodotto precedente"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={next}
              aria-label="Prodotto successivo"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <button
            className="gallery-quote"
            onClick={requestQuote}
          >
            Richiedi preventivo
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
