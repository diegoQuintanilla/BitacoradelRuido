import "./Especiales.css";
import EspecialesCard from "../../componentes/cards/EspecialesCard/EspecialesCard";
import especiales from "../../data/especiales";

export default function Especiales() {
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

      {/* Estadísticas */}
      <section className="stats-entrevistas">
        <div className="stat-card">
          <h3>50+</h3>
          <span>Especiales</span>
        </div>

        <div className="stat-card">
          <h3>30</h3>
          <span>Bandas</span>
        </div>

        <div className="stat-card">
          <h3>100+</h3>
          <span>Horas de grabación</span>
        </div>

        <div className="stat-card">
          <h3>Exclusivas</h3>
          <span>Backstage & Camerinos</span>
        </div>
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

        <div className="entrevistas-grid">
          {especiales.map((item) => (
            <EspecialesCard
              key={item.id}
              artista={item.artista}
              cargo={item.cargo}
              imagen={item.imagen}
              slug={item.slug}
            />
          ))}
        </div>
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