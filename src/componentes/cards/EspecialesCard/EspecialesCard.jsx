import { PlayCircle } from "lucide-react";
import "./EspecialesCard.css";
import { Link } from "react-router-dom";

export default function EspecialesCard({
  artista,
  cargo,
  imagen,
  onClick,
  slug,
}) {
  return (
    <article className="entrevista-card">
      <div className="entrevista-imagen-container">
        <img
          src={imagen}
          alt={artista}
          className="entrevista-imagen"
        />

        <div className="entrevista-overlay"></div>
      </div>

      <div className="entrevista-info">
        <span className="entrevista-cargo">
          {cargo}
        </span>

        <h3 className="entrevista-artista">
          {artista}
        </h3>

        <Link
          to={`/especiales/${slug}`}
          className="entrevista-btn"
          onClick={onClick}
        >
          <PlayCircle size={22} />
          Ver especial
        </Link>
      </div>
    </article>
  );
}