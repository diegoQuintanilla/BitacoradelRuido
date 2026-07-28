import "./ShowsSection.css";
import ShowsCard from "../../cards/ShowsCard/ShowsCard";
import { useEffect, useState } from "react";
import { getShows } from "../../../services/shows";
import { urlFor } from "../../../sanity/image";

export default function ShowsSection() {
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
    <section className="shows-section">
      <div className="shows-container">

        <span className="shows-subtitle">
          Próximos Eventos
        </span>

        <h2 className="shows-title">
          Shows Destacados
        </h2>

        <p className="shows-description">
          Descubrí los recitales, festivales y giras más esperadas del rock nacional e internacional.
        </p>

        <div className="shows-grid">
          {shows.slice(0, 3).map((show) => (
            <ShowsCard
              key={show._id}
              artista={show.artista}
              titulo={show.titulo}
              categoria={show.categoria}
              fecha={show.fecha}
              hora={show.hora}
              lugar={show.lugar}
              ciudad={show.ciudad}
              precio={show.precio}
              estado={show.estado}
              slug={show.slug.current}
              imagen={urlFor(show.imagen).width(800).url()}
            />
          ))}
        </div>

      </div>
    </section>
  );
}