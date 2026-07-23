import "./Shows.css";
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

      {/* LISTADO */}
      <section className="shows-section">
        <div className="shows-grid">
          {shows.map((item) => (
            <ShowsCard key={item.id} {...item} />
          ))}
        </div>
      </section>

    </main>
  );
}
