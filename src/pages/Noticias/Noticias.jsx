import "./Noticias.css";
import NoticiasCard from "../../componentes/cards/NoticiasCard/NoticiaCard";
import noticias from "../../data/noticias";

export default function NoticiasPage() {
  return (
    <main className="noticias-page">
      {/* Hero */}
      <header className="noticias-page__hero">
        <div className="noticias-page__overlay"></div>

        <div className="noticias-page__contenido">
          <span className="noticias-page__categoria">
            LA BITÁCORA DEL RUIDO
          </span>

          <h1 className="noticias-page__titulo">Noticias</h1>

          <p className="noticias-page__descripcion">
            Enterate antes que nadie de las últimas novedades del rock nacional
            e internacional, lanzamientos, recitales, festivales, entrevistas y
            toda la actualidad de la escena.
          </p>
        </div>
      </header>

      {/* Contenido */}

      <section className="noticias-page__contenido-principal">
        <div className="noticias-page__encabezado">
          <h2>Últimas publicaciones</h2>

          <div className="noticias-page__linea"></div>
        </div>

        <div className="noticias-grid">
          {noticias.map((item) => (
            <NoticiasCard key={item.id} {...item} />
          ))}
        </div>
        
      </section>
    </main>
  );
}
