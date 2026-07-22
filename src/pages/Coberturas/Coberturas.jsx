import "./Coberturas.css";
import CoberturaCard from "../../componentes/cards/CoberturaCard/CoberturaCard";
import coberturas from "../../data/coberturas";

export default function Coberturas() {
  return (
    <main className="page-coberturas">

      {/* Hero */}
      <section className="hero-coberturas">
        <div className="hero-overlay">
          <span className="hero-tag">
            Periodismo Musical
          </span>

          <h1>
            Coberturas
          </h1>

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

      {/* Estadísticas */}
      <section className="stats-coberturas">

        <div className="stat-card">
          <h3>120+</h3>
          <span>Coberturas</span>
        </div>

        <div className="stat-card">
          <h3>45</h3>
          <span>Festivales</span>
        </div>

        <div className="stat-card">
          <h3>3000+</h3>
          <span>Fotografías</span>
        </div>

        <div className="stat-card">
          <h3>10</h3>
          <span>Años recorriendo escenarios</span>
        </div>

      </section>

      {/* Grid */}
      <section className="coberturas-section">

        <div className="section-title">

          <span>Últimas publicaciones</span>

          <h2>
            Coberturas recientes
          </h2>

        </div>

        <div className="coberturas-grid">

          {coberturas.map((item) => (
            <CoberturaCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="cta-coberturas">

        <h2>
          La música se vive en vivo.
        </h2>

        <p>
          Seguinos para conocer las próximas coberturas,
          entrevistas exclusivas y galerías fotográficas.
        </p>

      </section>

    </main>
  );
}