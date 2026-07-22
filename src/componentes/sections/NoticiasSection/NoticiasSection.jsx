import NoticiasCard from "../../../componentes/cards/NoticiasCard/NoticiaCard"
import "./NoticiasSection.css";
import noticias from "../../../data/noticias";

export default function Noticias() {
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

          {noticias.slice(0,3).map((noticia) => (

            <NoticiasCard
              key={noticia.id}
              {...noticia}
              onClick={() =>
                console.log(`Abrir noticia ${noticia.id}`)
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}