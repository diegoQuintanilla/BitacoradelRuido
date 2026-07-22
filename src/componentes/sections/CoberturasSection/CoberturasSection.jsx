import "./CoberturasSection.css";
import coberturas from "../../../data/coberturas";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Coberturas() {
  return (
    <section className="coberturas">
      <div className="coberturas-container">
        <span className="coberturas-subtitle">Periodismo Musical</span>

        <h2 className="coberturas-title">Últimas Coberturas</h2>

        <p className="coberturas-description">
          Recitales, festivales y eventos contados desde adentro, con
          fotografías exclusivas y toda la energía del rock.
        </p>

        <div className="coberturas-grid">
          {coberturas.slice(0, 3).map((item) => (
            <article key={item.id} className="cobertura-card">
              <div className="cobertura-image-container">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="cobertura-image"
                />
              </div>

              <div className="cobertura-content">
                <span className="cobertura-category">{item.categoria}</span>

                <h3 className="cobertura-title">{item.titulo}</h3>

                <div className="cobertura-meta">
                  <div className="meta-item">
                    <CalendarDays size={18} />

                    <span>{item.fecha}</span>
                  </div>

                  <div className="meta-item">
                    <MapPin size={18} />

                    <span>{item.lugar}</span>
                  </div>
                </div>

                <Link to={`/coberturas/${item.slug}`} className="cobertura-button">
                  Leer cobertura
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
