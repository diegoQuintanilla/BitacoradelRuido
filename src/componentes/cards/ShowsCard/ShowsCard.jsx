import {
  CalendarDays,
  Clock3,
  MapPin,
  Ticket,
  ArrowRight,
} from "lucide-react";
import "./ShowsCard.css";
import { Link } from "react-router-dom";

export default function ShowsCard({
  artista,
  titulo,
  categoria,
  fecha,
  hora,
  lugar,
  ciudad,
  precio,
  estado,
  imagen,
  slug,
}) {
  return (
    <article className="show-card">

      {/* Imagen */}
      <div className="show-image-container">

        <img
          src={imagen}
          alt={artista}
          className="show-image"
        />

        <span className="show-category">
          {categoria}
        </span>

      </div>

      {/* Contenido */}
      <div className="show-content">

        <h3 className="show-artist">
          {artista}
        </h3>

        <h4 className="show-title">
          {titulo}
        </h4>

        <div className="show-info">

          <div className="show-item">
            <CalendarDays size={18} />
            <span>{fecha}</span>
          </div>

          <div className="show-item">
            <Clock3 size={18} />
            <span>{hora}</span>
          </div>

          <div className="show-item">
            <MapPin size={18} />
            <span>
              {lugar} · {ciudad}
            </span>
          </div>

          <div className="show-item">
            <Ticket size={18} />
            <span>{precio}</span>
          </div>

        </div>

        <div className="show-footer">

          <span
            className={`show-status ${
              estado === "Agotado"
                ? "agotado"
                : estado === "Últimas entradas"
                ? "ultimas"
                : "disponible"
            }`}
          >
            {estado}
          </span>

          <Link
            className="show-button"
            to={`/shows/${slug}`}
          >
            Ver detalles
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </article>
  );
}