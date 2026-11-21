
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Gift,
  KeyRound,
  QrCode,
  Smartphone,
  Utensils,
  X
} from "lucide-react";

import { categories } from "../../data/categories.js";
import { products } from "../../data/product.js";
import "./CategoryGallery.css";

const WHATSAPP_NUMBER = "393484987611";

const categoryIcons = {
  horeca: Utensils,
  premi: Award,
  "porta-qr": QrCode,
  portachiavi: KeyRound,
  "accessori-smartphone": Smartphone,
  gadget: Gift
};

export default function CategoryGallery({
  category = "portachiavi",
  onClose
}) {
  const items = products[category] || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState({});
  const categoryInfo = categories.find((item) => item.id === category);
  const PlaceholderIcon = categoryIcons[category] || KeyRound;

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

  const price = current.priceFrom != null
    ? current.priceFrom.toLocaleString("it-IT", {
        style: "currency",
        currency: "EUR"
      })
    : null;
  const message = [
    "Ciao ProCraft3D! Vorrei richiedere un preventivo.",
    "",
    `Categoria: ${current.category}`,
    `Prodotto: ${current.name}`,
    ...(price ? [`Prezzo indicativo: ${price} / pezzo`] : [])
  ].join("\n");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="category-gallery">
      <div className="gallery-heading">
        <div>
          <span className="gallery-eyebrow">
            COLLEZIONE PROCRAFT3D
          </span>
          <h3>{categoryInfo?.title || "Prodotti"} personalizzati</h3>
          <p>
            {categoryInfo?.description ||
              "Scopri i modelli disponibili e scegli quello più adatto al tuo brand."}
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

          {current.image && !imageError[current.id] ? (
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
              <PlaceholderIcon size={75} strokeWidth={1} />
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
              {current.priceFrom != null && (
                <div className="gallery-price">
                <span className="gallery-price-label">
                  Prezzo a partire da
                </span>
        <div className="gallery-price-value">
          <strong>
            {current.priceFrom.toLocaleString("it-IT", {
            style: "currency",
            currency: "EUR",
            })}
          </strong>
          <span>/ pezzo</span>
        </div>
      {current.minQuantity && (
        <span className="gallery-price-minimum">
          Ordine minimo: {current.minQuantity} pezzi
        </span>
      )}

      <p className="gallery-price-note">
        Il prezzo finale varia in base a quantità,
        dimensioni e personalizzazione.
      </p>
    </div>
  )}

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

          <a
            className="gallery-quote"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Richiedi preventivo
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
