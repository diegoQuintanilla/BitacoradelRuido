import "./NoticiaDetalle.css";
import { Link, useParams } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  ArrowLeft,
  User,
} from "lucide-react";

import noticias from "../../data/noticias";

export default function NoticiaDetalle() {
  const { slug } = useParams();

  const noticia = noticias.find(
    (item) => item.slug === slug
  );

  if (!noticia) {
    return (
      <main className="noticia-detalle">
        <div className="noticia-container">
          <h1>La noticia no existe.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="noticia-detalle">

      <div className="noticia-container">


        <h1 className="noticia-title">
          {noticia.titulo}
        </h1>

        <p className="noticia-bajada">
          {noticia.descripcion}
        </p>

        <div className="noticia-meta">

          <div className="meta-item">
            <User size={18} />
            <span>La Bitácora del Ruido</span>
          </div>

          <div className="meta-item">
            <CalendarDays size={18} />
            <span>{noticia.fecha}</span>
          </div>

          <div className="meta-item">
            <Clock3 size={18} />
            <span>4 min de lectura</span>
          </div>

        </div>

        <Link to="/noticias" className="volver-noticias">
          <ArrowLeft size={18} />
          Volver a Noticias
        </Link>
      </div>

      <section className="noticia-hero">

        <img
          src={noticia.imagen}
          alt={noticia.titulo}
        />

      </section>

      <div className="noticia-container">

        <div className="noticia-content">

          {noticia.contenido.map((parrafo, index) => (

            <p key={index}>
              {parrafo}
            </p>

          ))}

        </div>

      </div>

    </main>
  );
}