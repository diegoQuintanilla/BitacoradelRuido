import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const telefono = "5491123332071"; // Reemplazar por el número del cliente
  const mensaje = encodeURIComponent(
    "Hola, vengo desde La Bitácora del Ruido y quisiera hacer una consulta."
  );

  return (
    <a
      href={`https://wa.me/${telefono}?text=${mensaje}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}