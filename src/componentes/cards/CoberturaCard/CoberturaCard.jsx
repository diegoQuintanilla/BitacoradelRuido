import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import "./CoberturaCard.css";

export default function CoberturaCard({
  titulo,
  fecha,
  lugar,
  categoria,
  imagen,
  slug,
}) {
  return (
    <article className="cobertura-card">
      <div className="cobertura-image-container">
        <img src={imagen} alt={titulo} className="cobertura-image" />
      </div>

      <div className="cobertura-content">
        <span className="cobertura-category">{categoria}</span>

        <h3 className="cobertura-title">{titulo}</h3>

        <div className="cobertura-meta">
          <div className="meta-item">
            <CalendarDays size={18} />
            <span>{fecha}</span>
          </div>

          <div className="meta-item">
            <MapPin size={18} />
            <span>{lugar}</span>
          </div>
        </div>

        <Link to={`/coberturas/${slug}`} className="cobertura-button">
          Leer cobertura
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
