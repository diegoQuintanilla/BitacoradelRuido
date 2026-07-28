import "./Shows.css";
import ShowsCard from "../../componentes/cards/ShowsCard/ShowsCard";
import { useEffect, useState } from "react";
import { getShows } from "../../services/shows";
import { urlFor } from "../../sanity/image";

export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function cargarShows() {
      try {
        const data = await getShows();
        setShows(data);
      } catch (error) {
        console.error("Error al cargar shows:", error);
      }
    }

    cargarShows();
  }, []);

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
            <ShowsCard
              key={item._id}
              artista={item.artista}
              titulo={item.titulo}
              categoria={item.categoria}
              fecha={item.fecha}
              hora={item.hora}
              lugar={item.lugar}
              ciudad={item.ciudad}
              precio={item.precio}
              estado={item.estado}
              imagen={urlFor(item.imagen).width(800).url()}
              slug={item.slug.current}
            />
          ))}
        </div>
      </section>
    </main>
  );
}