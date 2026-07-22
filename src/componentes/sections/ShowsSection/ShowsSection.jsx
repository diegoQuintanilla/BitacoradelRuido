import "./ShowsSection.css";
import ShowsCard from "../../cards/ShowsCard/ShowsCard";
import shows from "../../../data/shows";

export default function ShowsSection() {
  return (
    <section className="shows-section">
      <div className="shows-container">

        <span className="shows-subtitle">
          Próximos Eventos
        </span>

        <h2 className="shows-title">
          Shows Destacados
        </h2>

        <p className="shows-description">
          Descubrí los recitales, festivales y giras más esperadas del rock nacional e internacional.
        </p>

        <div className="shows-grid">
          {shows.slice(0,3).map((show) => (
            <ShowsCard
              key={show.id}
              {...show}
            />
          ))}
        </div>

      </div>
    </section>
  );
}