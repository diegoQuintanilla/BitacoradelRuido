import "./Coberturas.css";
import { useEffect, useState } from "react";
import CoberturaCard from "../../componentes/cards/CoberturaCard/CoberturaCard";
import { getCoberturas } from "../../services/coberturas";
import { urlFor } from "../../sanity/image";

export default function Coberturas() {
  const [coberturas, setCoberturas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarCoberturas() {
      try {
        const data = await getCoberturas();
        setCoberturas(data);
      } catch (error) {
        console.error("Error al cargar coberturas:", error);
      } finally {
        setLoading(false);
      }
    }

    cargarCoberturas();
  }, []);

  return (
    <main className="page-coberturas">

      {/* Hero */}
      <section className="hero-coberturas">
        <div className="hero-overlay">
          <span className="hero-tag">
            Periodismo Musical
          </span>

          <h1>Coberturas</h1>

          <p>
            Crónicas, fotografías y momentos únicos de los recitales,
            festivales y eventos que marcaron la escena del rock.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-coberturas">
        <h2>Vivimos cada show desde adentro</h2>

        <p>
          En La Bitácora del Ruido recorremos escenarios de todo el país
          para acercarte la mejor cobertura de cada recital.
          No solo contamos lo que pasó, sino que intentamos transmitir
          la emoción de estar ahí.
        </p>
      </section>

      {/* Grid */}
      <section className="coberturas-section">

        <div className="section-title">
          <span>Últimas publicaciones</span>
          <h2>Coberturas recientes</h2>
        </div>

        {loading ? (
          <p className="loading-text">Cargando coberturas...</p>
        ) : (
          <div className="coberturas-grid">
            {coberturas.map((item) => (
              <CoberturaCard
                key={item._id}
                titulo={item.titulo}
                categoria={item.categoria}
                fecha={item.fecha}
                lugar={item.lugar}
                slug={item.slug.current}
                imagen={urlFor(item.imagen).width(700).url()}
              />
            ))}
          </div>
        )}

      </section>

      {/* CTA */}
      <section className="cta-coberturas">
        <h2>La música se vive en vivo.</h2>

        <p>
          Seguinos para conocer las próximas coberturas,
          entrevistas exclusivas y galerías fotográficas.
        </p>
      </section>

    </main>
  );
}