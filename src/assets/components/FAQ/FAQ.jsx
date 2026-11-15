import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "Posso personalizzare qualsiasi prodotto?",
    answer:
      "Molti dei nostri prodotti possono essere personalizzati con loghi, scritte, colori e dettagli su richiesta. Le possibilità dipendono dal materiale e dalla fattibilità tecnica.",
  },
  {
    question: "Posso richiedere un prodotto non presente nel catalogo?",
    answer:
      "Certamente! Il catalogo è solo un punto di partenza. Raccontaci la tua idea, anche inviando immagini o riferimenti, e valuteremo insieme come realizzarla.",
  },
  {
  question: "Perché non sono indicati i prezzi dei prodotti?",
  answer:
    "Ogni creazione ProCraft3D è unica! Il prezzo dipende da materiali, dimensioni, quantità e personalizzazioni richieste. Per questo preferiamo offrirti un preventivo su misura, senza impegno e senza sorprese.",
  },
  {
    question: "È possibile ordinare un solo pezzo?",
    answer:
      "Valutiamo sia richieste per singoli pezzi sia piccoli lotti e forniture aziendali. La fattibilità dipende dal prodotto e dal tipo di personalizzazione.",
  },
  {
    question: "Quali materiali utilizzate?",
    answer:
      "Selezioniamo i materiali in base alle esigenze di ogni progetto, considerando estetica, resistenza e destinazione d'uso. Ti consiglieremo la soluzione più adatta.",
  },
  {
    question: "Quanto costa un prodotto personalizzato?",
    answer:
      "Ogni preventivo viene calcolato in base a dimensioni, materiali, complessità, quantità e personalizzazioni richieste. Contattaci per ricevere una proposta su misura.",
  },
  {
    question: "Quali sono i tempi di realizzazione?",
    answer:
      "I tempi dipendono dalla complessità del prodotto e dalla quantità richiesta. Ti comunicheremo una stima prima della conferma dell'ordine.",
  },
  {
    question: "Come posso richiedere un preventivo?",
    answer:
      "Puoi utilizzare i pulsanti presenti nel catalogo oppure contattarci su WhatsApp, indicando il prodotto, la quantità e la personalizzazione desiderata.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">

        <div className="faq-heading">
          <span className="faq-eyebrow">
            HAI QUALCHE DOMANDA?
          </span>

          <h2>Domande frequenti</h2>

          <p>
            Tutto quello che devi sapere sui nostri prodotti
            e sulle possibilità di personalizzazione.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={faq.question}
              >
                <h3 className="faq-question">
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{faq.question}</span>

                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>
                </h3>

                <div
                  className="faq-answer"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="faq-bottom">
          Non hai trovato la risposta che cercavi?
          <a href="#chi-siamo">
            {" "}Raccontaci la tua idea.
          </a>
        </p>

      </div>
    </section>
  );
}