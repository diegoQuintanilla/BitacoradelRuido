import "./CoberturasSection.css";
import { useEffect, useState } from "react";
import CoberturaCard from "../../cards/CoberturaCard/CoberturaCard";

import { getCoberturas } from "../../../services/coberturas";
import { urlFor } from "../../../sanity/image";

export default function Coberturas() {
  const [coberturas, setCoberturas] = useState([]);

  useEffect(() => {
    async function cargarCoberturas() {
      try {
        const data = await getCoberturas();
        setCoberturas(data);
      } catch (error) {
        console.error("Error al cargar coberturas:", error);
      }
    }

    cargarCoberturas();
  }, []);

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
            <CoberturaCard
              key={item._id}
              imagen={item.imagen ? urlFor(item.imagen).width(600).url() : ""}
              titulo={item.titulo}
              categoria={item.categoria}
              fecha={item.fecha}
              lugar={item.lugar}
              slug={item.slug.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}