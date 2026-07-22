import "./EspecialDetalle.css";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, Clock3, ArrowLeft } from "lucide-react";
import especiales from "../../data/especiales";

export default function EspecialDetalle() {
  const { slug } = useParams();

  const especial = especiales.find(
    (item) => item.slug === slug
  );

  if (!especial) {
    return (
      <main className="especial-detalle">
        <div className="especial-container">
          <h1>Especial no encontrado.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="especial-detalle">

      <section className="especial-hero">
        <img
          src={especial.imagen}
          alt={especial.titulo}
        />
      </section>

      <div className="especial-container">

        <Link to="/especiales" className="volver">
          <ArrowLeft size={18} />
          Volver a Especiales
        </Link>

        <h1 className="especial-title">
          {especial.titulo}
        </h1>

        <div className="especial-meta">

          <div className="meta-item">
            <CalendarDays size={18} />
            <span>{especial.fecha}</span>
          </div>

          <div className="meta-item">
            <Clock3 size={18} />
            <span>10 min de lectura</span>
          </div>

        </div>

        <div className="especial-content">
          {especial.contenido.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>

      </div>

    </main>
  );
}