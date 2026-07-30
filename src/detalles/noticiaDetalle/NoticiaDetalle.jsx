import "./NoticiaDetalle.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../componentes/PortableTextComponents";

import { CalendarDays, Clock3, ArrowLeft, User } from "lucide-react";

import { getNoticia } from "../../services/noticias";
import { urlFor } from "../../sanity/image";

export default function NoticiaDetalle() {
  const { slug } = useParams();

  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarNoticia() {
      try {
        const data = await getNoticia(slug);
        setNoticia(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    cargarNoticia();
  }, [slug]);

  if (loading) {
    return (
      <main className="noticia-detalle">
        <div className="noticia-container">
          <h2>Cargando noticia...</h2>
        </div>
      </main>
    );
  }

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
        <h1 className="noticia-title">{noticia.titulo}</h1>

        <p className="noticia-bajada">{noticia.descripcion}</p>

        <div className="noticia-meta">
          <div className="meta-item">
            <User size={18} />
            <span>La Bitácora del Ruido</span>
          </div>

          <div className="meta-item">
            <CalendarDays size={18} />
            <span>{new Date(noticia.fecha).toLocaleDateString("es-AR")}</span>
          </div>

          <div className="meta-item">
            <Clock3 size={18} />
            <span>4 min de lectura</span>
          </div>
        </div>

      </div>

      <section className="noticia-hero">
        <img
          src={urlFor(noticia.imagen).width(1400).url()}
          alt={noticia.titulo}
        />
      </section>

      <div className="noticia-container">
        <div className="noticia-content">
          <PortableText
            value={noticia.contenido}
            components={portableTextComponents}
          />
        </div>
        <Link to="/noticias" className="volver-noticias">
          <ArrowLeft size={18} />
          Volver a Noticias
        </Link>
      </div>


    </main>
  );
}
