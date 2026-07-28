import "./EspecialesSection.css";
import EspecialesCard from "../../cards/EspecialesCard/EspecialesCard";
import { useEffect, useState } from "react";
import { getEspeciales } from "../../../services/especiales";
import { urlFor } from "../../../sanity/image";

export default function EspecialesSection() {
  const [especiales, setEspeciales] = useState([]);

  useEffect(() => {
    async function cargarEspeciales() {
      try {
        const data = await getEspeciales();
        setEspeciales(data);
      } catch (error) {
        console.error("Error al cargar especiales:", error);
      }
    }

    cargarEspeciales();
  }, []);

  return (
    <section className="entrevistas">
      <div className="entrevistas-container">

        <span className="entrevistas-subtitulo">
          Exclusivos
        </span>

        <h2 className="entrevistas-titulo">
          Especiales
        </h2>

        <div className="entrevistas-grid">
          {especiales.slice(0, 3).map((item) => (
            <EspecialesCard
              key={item._id}
              artista={item.artista}
              categoria={item.categoria}
              imagen={urlFor(item.imagen).width(600).url()}
              slug={item.slug.current}
            />
          ))}
        </div>

      </div>
    </section>
  );
}