import { ArrowRight, Clock3 } from "lucide-react";
import "./NoticiasCard.css";
import { Link } from "react-router-dom";

export default function NoticiasCard({
  titulo,
  descripcion,
  fecha,
  imagen,
  categoria = "Noticias",
  slug,
}) {
  return (
    <article className="noticia-card">
      <div className="noticia-card__imagen">
        <img src={imagen} alt={titulo} loading="lazy" />
      </div>

      <div className="noticia-card__contenido">
        <div className="noticia-card__meta">
          <span className="noticia-card__categoria">{categoria}</span>

          <span className="noticia-card__fecha">
            <Clock3 size={14} />

            {fecha}
          </span>
        </div>

        <h3 className="noticia-card__titulo">{titulo}</h3>

        <p className="noticia-card__descripcion">{descripcion}</p>

        <Link className="noticia-card__boton" to={`/noticias/${slug}`}>
          Leer noticia
          <ArrowRight size={18} className="noticia-card__icono" />
        </Link>
      </div>
    </article>
  );
}
