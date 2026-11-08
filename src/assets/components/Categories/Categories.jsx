
import {
  Utensils, Award, QrCode,
  KeyRound, Smartphone, Gift, ArrowUpRight
} from "lucide-react";

import { categories } from "../../data/categories";
import "./Categories.css";

const icons = {
  utensils: Utensils,
  award: Award,
  qr: QrCode,
  key: KeyRound,
  phone: Smartphone,
  gift: Gift
};

export default function Categories() {
  return (
    <section className="categories-section" id="categorie">
      <div className="container">
        <div className="section-heading">
          <span>IL NOSTRO CATALOGO</span>
          <h2>Le nostre categorie</h2>
          <p>
            Soluzioni su misura per aziende,
            professionisti e attività commerciali.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = icons[category.icon];

            return (
              <article
                className="category-card"
                key={category.id}
                id={category.id === "horeca" ? "horeca" : undefined}
              >
                <div className="category-visual">
                  <Icon size={66} strokeWidth={1} />
                </div>

                <div className="category-info">
                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                  <ArrowUpRight size={21} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
