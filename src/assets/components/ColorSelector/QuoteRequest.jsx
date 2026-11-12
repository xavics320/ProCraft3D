
import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import "./QuoteRequest.css";

const WHATSAPP_NUMBER = "393484987611";

const productOptions = [
  "Linea Ho.Re.Ca.",
  "Loghi 3D",
  "Espositori QR e NFC",
  "Portachiavi premium",
  "Supporti smartphone",
  "Regali aziendali",
  "Altro / Progetto personalizzato"
];

export default function QuoteRequest() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    product: "",
    quantity: "10",
    details: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Ciao ProCraft3D! Vorrei richiedere un preventivo.",
      "",
      `Nome: ${form.name}`,
      `Azienda: ${form.company || "Non indicata"}`,
      `Prodotto: ${form.product}`,
      `Quantità: ${form.quantity}`,
      `Dettagli: ${form.details || "Da definire"}`,
      "",
      "Resto in attesa di maggiori informazioni. Grazie!"
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="quote-section" id="preventivo">
      <div className="container quote-layout">

        <div className="quote-intro">
          <span className="quote-eyebrow">
            IL TUO PROGETTO, SU MISURA
          </span>

          <h2>
            Hai un'idea?
            <br />
            <span>Realizziamola.</span>
          </h2>

          <p>
            Raccontaci cosa vorresti creare. Prepariamo
            soluzioni personalizzate per aziende,
            professionisti e attività commerciali.
          </p>

          <div className="quote-note">
            <MessageCircle size={24} />
            <div>
              <strong>Contatto diretto su WhatsApp</strong>
              <p>
                Compila il modulo e inviaci la richiesta
                direttamente in chat.
              </p>
            </div>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <h3>Richiedi un preventivo</h3>
          <p>Compila i campi per preparare il messaggio.</p>

          <div className="quote-field">
            <label htmlFor="quote-name">Nome e cognome *</label>
            <input
              id="quote-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Mario Rossi"
              required
            />
          </div>

          <div className="quote-field">
            <label htmlFor="quote-company">Azienda / Attività</label>
            <input
              id="quote-company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Nome della tua attività"
            />
          </div>

          <div className="quote-form-row">
            <div className="quote-field">
              <label htmlFor="quote-product">Categoria *</label>
              <select
                id="quote-product"
                name="product"
                value={form.product}
                onChange={handleChange}
                required
              >
                <option value="">Seleziona un prodotto</option>
                {productOptions.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>

            <div className="quote-field">
              <label htmlFor="quote-quantity">Quantità *</label>
              <input
                id="quote-quantity"
                name="quantity"
                type="number"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="quote-field">
            <label htmlFor="quote-details">Descrivi la tua idea</label>
            <textarea
              id="quote-details"
              name="details"
              rows="4"
              value={form.details}
              onChange={handleChange}
              placeholder="Colori, dimensioni, personalizzazioni..."
            />
          </div>

          <button type="submit" className="quote-submit">
            <MessageCircle size={19} />
            Invia richiesta su WhatsApp
            <ArrowRight size={18} />
          </button>

          <span className="quote-disclaimer">
            Si aprirà WhatsApp con il messaggio pronto da inviare.
          </span>
        </form>

      </div>
    </section>
  );
}
