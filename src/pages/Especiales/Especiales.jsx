import "./Especiales.css";
import { useEffect, useState } from "react";
import EspecialesCard from "../../componentes/cards/EspecialesCard/EspecialesCard";
import { getEspeciales } from "../../services/especiales";
import { urlFor } from "../../sanity/image";

export default function Especiales() {
  const [especiales, setEspeciales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarEspeciales() {
      try {
        const data = await getEspeciales();
        setEspeciales(data);
      } catch (error) {
        console.error("Error al cargar especiales:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarEspeciales();
  }, []);

  return (
    <main className="page-entrevistas">

      {/* Hero */}
      <section className="hero-entrevistas">
        <div className="hero-overlay">
          <span className="hero-tag">Contenido Exclusivo</span>

          <h1>Especiales</h1>

          <p>
            Conversaciones exclusivas con músicos, productores y protagonistas
            de la escena. Historias, anécdotas y todo lo que no se ve arriba del
            escenario.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="intro-entrevistas">
        <h2>Conocé a los artistas desde otra perspectiva</h2>

        <p>
          En La Bitácora del Ruido buscamos ir más allá del recital. Nuestros
          especiales muestran el lado más humano de las bandas, sus procesos
          creativos, nuevos proyectos y experiencias dentro de la música.
        </p>
      </section>

      {/* Listado */}
      <section className="entrevistas-listado">
        <div className="section-title">
          <span>Últimas publicaciones</span>

          <h2>Especiales recientes</h2>

          <p>
            Descubrí las conversaciones más recientes con artistas nacionales e
            internacionales.
          </p>
        </div>

        {loading ? (
          <p className="loading-text">Cargando especiales...</p>
        ) : (
          <div className="entrevistas-grid">
            {especiales.map((item) => (
              <EspecialesCard
                key={item._id}
                artista={item.artista}
                categoria={item.categoria}
                imagen={urlFor(item.imagen).width(700).url()}
                slug={item.slug.current}
              />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="cta-entrevistas">
        <h2>Las mejores historias suceden detrás del escenario.</h2>

        <p>
          Seguinos para no perderte los próximos especiales exclusivos,
          adelantos y contenido especial de tus bandas favoritas.
        </p>
      </section>

    </main>
  );
}