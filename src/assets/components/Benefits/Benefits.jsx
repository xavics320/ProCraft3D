
import { Box, Palette, Layers, Truck } from "lucide-react";
import "./Benefits.css";

const benefits = [
  {
    icon: Palette,
    title: "Personalizzazione totale",
    description: "Il tuo logo, i tuoi colori, la tua identità."
  },
  {
    icon: Layers,
    title: "Piccole e grandi quantità",
    description: "Produzione flessibile su richiesta."
  },
  {
    icon: Box,
    title: "Design su misura",
    description: "Oggetti originali per il tuo brand."
  },
  {
    icon: Truck,
    title: "Spedizione in Italia",
    description: "Consegna secondo i tempi concordati."
  }
];

export default function Benefits() {
  return (
    <section className="benefits" id="vantaggi">
      <div className="container benefits-grid">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div className="benefit" key={title}>
            <Icon size={30} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
