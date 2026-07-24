import { useEffect, useState } from "react";
import NoticiasCard from "../../cards/NoticiasCard/NoticiaCard";
import "./NoticiasSection.css";

import { getNoticias } from "../../../services/noticias";
import { urlFor } from "../../../sanity/image";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function cargarNoticias() {
      try {
        const data = await getNoticias();
        setNoticias(data);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      }
    }

    cargarNoticias();
  }, []);

  return (
    <section className="noticias">
      <div className="noticias-container">

        <span className="noticias-subtitulo">
          Actualidad
        </span>

        <h2 className="noticias-titulo">
          Últimas Noticias
        </h2>

        <div className="noticias-grid">
          {noticias.slice(0, 3).map((noticia) => (
            <NoticiasCard
              key={noticia._id}
              titulo={noticia.titulo}
              descripcion={noticia.descripcion}
              fecha={noticia.fecha}
              categoria={noticia.categoria}
              imagen={urlFor(noticia.imagen).width(600).url()}
              slug={noticia.slug?.current}
            />
          ))}
        </div>

      </div>
    </section>
  );
}