import "./ShowDetalle.css";
import { Link, useParams } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Clock3,
  Ticket,
  ArrowLeft,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "../../componentes/PortableTextComponents";
import { useEffect, useState } from "react";
import { getShow } from "../../services/shows";
import { urlFor } from "../../sanity/image";

export default function ShowDetalle() {
  const { slug } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarShow() {
      try {
        const data = await getShow(slug);
        setShow(data);
      } catch (error) {
        console.error("Error al cargar show:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarShow();
  }, [slug]);

  if (loading) {
    return (
      <main className="show-detalle">
        <div className="show-container">
          <h2>Cargando show...</h2>
        </div>
      </main>
    );
  }

  if (!show) {
    return (
      <main className="show-detalle">
        <div className="show-container">
          <h1>Show no encontrado.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="show-detalle">
      <section className="show-hero">
        <img
          src={urlFor(show.imagen).width(1600).url()}
          alt={show.titulo}
        />
      </section>

      <div className="show-container">
        <span className="show-categoria">
          {show.categoria}
        </span>

        <h1 className="showDetalle-title">
          {show.titulo}
        </h1>

        <div className="show-meta">
          <div className="meta-item">
            <CalendarDays size={18} />
            <span>{show.fecha}</span>
          </div>

          <div className="meta-item">
            <Clock3 size={18} />
            <span>{show.hora}</span>
          </div>

          <div className="meta-item">
            <MapPin size={18} />
            <span>
              {show.lugar}
              {show.ciudad ? ` · ${show.ciudad}` : ""}
            </span>
          </div>
        </div>

        {show.linkEntradas && (
          <a
            href={show.linkEntradas}
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-button"
          >
            <Ticket size={20} />
            Comprar entradas
          </a>
        )}

        <div className="show-content">
          <PortableText
            value={show.contenido}
            components={portableTextComponents}
          />
        </div>

        <Link to="/shows" className="volver-show">
          <ArrowLeft size={18} />
          Volver a Shows
        </Link>
      </div>
    </main>
  );
}