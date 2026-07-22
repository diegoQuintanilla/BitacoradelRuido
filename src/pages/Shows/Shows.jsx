import "./Shows.css";
import { CalendarDays, Music2, Ticket, MapPin } from "lucide-react";
import ShowsCard from "../../componentes/cards/ShowsCard/ShowsCard";
import shows from "../../data/shows";

export default function Shows() {
  return (
    <main className="shows-page">
      {/* HERO */}

      <section className="shows-hero">
        <div className="shows-overlay">
          <span className="shows-tag">Próximos Eventos</span>

          <h1>Shows</h1>

          <p>
            Descubrí los recitales, festivales y giras más importantes del país.
            Toda la información en un solo lugar.
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="shows-intro">
        <h2>La música se vive en vivo</h2>

        <p>
          Desde grandes estadios hasta pequeños teatros, reunimos los shows más
          importantes para que no te pierdas ninguna fecha.
        </p>
      </section>

      {/* STATS */}

      <section className="shows-stats">
        <div className="stat-card">
          <Music2 size={34} />
          <h3>100+</h3>
          <span>Bandas</span>
        </div>

        <div className="stat-card">
          <CalendarDays size={34} />
          <h3>250+</h3>
          <span>Fechas</span>
        </div>

        <div className="stat-card">
          <MapPin size={34} />
          <h3>20</h3>
          <span>Ciudades</span>
        </div>

        <div className="stat-card">
          <Ticket size={34} />
          <h3>Siempre</h3>
          <span>Actualizado</span>
        </div>
      </section>

      {/* LISTADO */}
      <section className="shows-section">
        <div className="shows-grid">
          {shows.map((item) => (
            <ShowsCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="shows-cta">
        <h2>¿Organizás un recital?</h2>

        <p>Contactanos y difundí tu evento en La Bitácora del Ruido.</p>

        <button>Contactanos</button>
      </section>
    </main>
  );
}
