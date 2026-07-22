import "./EspecialesSection.css";
import EspecialesCard from "../../cards/EspecialesCard/EspecialesCard";
import especiales from "../../../data/especiales";

export default function EspecialesSection() {
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
          {especiales.slice(0,3).map((item) => (
            <EspecialesCard
              key={item.id}
              artista={item.artista}
              cargo={item.cargo}
              imagen={item.imagen}
              slug={item.slug}
              onClick={() =>
                console.log(item.artista)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}