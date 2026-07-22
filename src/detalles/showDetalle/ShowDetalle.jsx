import "./ShowDetalle.css";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, MapPin, Clock3, Ticket, ArrowLeft } from "lucide-react";

import shows from "../../data/shows";

export default function ShowDetalle() {
  const { slug } = useParams();

  const show = shows.find((item) => item.slug === slug);

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
        <img src={show.imagen} alt={show.titulo} />
      </section>

      <div className="show-container">
        <span className="show-categoria">{show.categoria}</span>

        <h1 className="showDetalle-title">{show.titulo}</h1>

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
            <span>{show.lugar}</span>
          </div>
        </div>

        <a
          href={show.entradas}
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-button"
        >
          <Ticket size={20} />
          Comprar entradas
        </a>

        <div className="show-content">
          {show.contenido.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>

        {show.galeria && (
          <section className="show-gallery">
            {show.galeria.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </section>
        )}

        <Link to="/shows" className="volver-show">
          <ArrowLeft size={18} />
          Volver a Shows
        </Link>
      </div>
    </main>
  );
}
